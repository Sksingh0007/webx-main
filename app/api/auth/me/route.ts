// app/api/me/route.ts
import { NextResponse } from "next/server";
import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  const cookieHeader = req.headers.get("cookie") || "";
  const tokenMatch = cookieHeader.match(/(?:^|; )token=([^;]+)/);
  const token = tokenMatch ? decodeURIComponent(tokenMatch[1]) : null;

  if (!token) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const payload = await verifyJwt<{ sub: string; email: string }>(token);

  if (!payload) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: payload.sub },
    select: { id: true, email: true, createdAt: true },
  });

  return NextResponse.json({ user }, { status: 200 });
}
