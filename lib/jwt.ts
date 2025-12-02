// lib/jwt.ts
import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
const TOKEN_EXPIRES_IN = "7d";

// Create a JWT
export async function signJwt(payload: Record<string, unknown>) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(TOKEN_EXPIRES_IN)
    .sign(secret);

  return token;
}

// Verify a JWT
export async function verifyJwt<T = any>(token: string): Promise<T | null> {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload as T;
  } catch {
    return null;
  }
}
