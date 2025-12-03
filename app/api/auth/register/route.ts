// app/api/register/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { hashPassword } from "@/lib/password";
import nodemailer from "nodemailer";
import { redis } from "@/lib/redis";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const passwordHash = await hashPassword(password);

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await redis.set(
      `signup:${email}`,
      {
        email,
        name,
        passwordHash,
        otp,
      },
      { ex: 300 }
    );

    await transporter.sendMail({
      from: `"Webspherx" <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: "Your Webspherx Verification Code",
      text: `Your OTP is ${otp}. 

This code verifies your identity on Webspherx.

If you didn’t request this, you can safely ignore the message.
`,
      html: `
    <div style="
      background:#0D0D0D;
      padding:24px;
      border-radius:12px;
      color:#F2F2F2;
      font-family:Inter,Arial,sans-serif;
      max-width:480px;
      margin:auto;
    ">
      <h2 style="color:#10AFFF; font-weight:600; margin-bottom:16px;">
        Webspherx Verification Code
      </h2>

      <p style="line-height:1.6; font-size:14px;">
        To continue securely, use the one-time verification code below:
      </p>

      <div style="
        font-size:28px;
        letter-spacing:4px;
        font-weight:700;
        background:#111;
        padding:16px;
        border-radius:8px;
        margin:20px 0;
        color:#10AFFF;
        text-align:center;
      ">
        ${otp}
      </div>

      <p style="line-height:1.6; font-size:14px;">
        This code is valid for the next 5 minutes.  
        If you didn’t request this, you can safely ignore this message.
      </p>

      <hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin:24px 0;" />

      <p style="font-size:12px; color:#999;">
        Webspherx — Understand AI & the Future of Tech — without hype or noise.
      </p>
    </div>
  `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
