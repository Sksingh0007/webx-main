import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { redis } from "@/lib/redis";
import { signJwt } from "@/lib/jwt";
type SignupSession = {
  email: string;
  name?: string;
  passwordHash: string;
  otp: string;
};

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();
    

    if (!email || !otp) {
      return NextResponse.json(
        { error: "Email and OTP are required" },
        { status: 400 }
      );
    }
    const data = await redis.get<SignupSession>(`signup:${email}`);
    if (!data) {
      return NextResponse.json(
        { error: "OTP expired or not found" },
        { status: 400 }
      );
    }

    if (data.otp !== otp) {
      return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
    }
    const user = await prisma.user.create({
      data: {
        email,
        name: data.name,
        passwordHash: data.passwordHash,
        isVerified: true,
      },
    });

    await redis.del(`signup:${email}`);

    const token = await signJwt({
      sub: user.id,
      email: user.email,
    });

    const res = NextResponse.json(
      {
        sucess: true,
        message: "Email verified successfully. User loged in.",
      },
      {
        status: 200,
      }
    );

    const maxAge = 7 * 24 * 60 * 60;
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge,
    });

    return res;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
