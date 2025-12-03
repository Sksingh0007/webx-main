"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useAuth } from "@/components/AuthProvider";

export default function VerifyOtpPage() {
  const { refreshUser } = useAuth();
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email");

  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(300);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  async function handleVerify() {
    setError(null);
    setLoading(true);

    const res = await fetch("/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, otp }),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      await refreshUser();
      router.push("/");
    } else {
      setError(data.error || "Invalid OTP");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <Card className="backdrop-blur-lg bg-primary/5 shadow-xl rounded-3xl border border-zinc-200/60 dark:border-zinc-700/60">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">
              Verify your email
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Enter the 6-digit code sent to <b>{email}</b>
            </p>
          </CardHeader>

          <CardContent className="flex flex-col items-center gap-6">
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={(value) => setOtp(value)}
              className="w-full flex justify-center"
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-red-500"
              >
                {error}
              </motion.p>
            )}

            <p className="text-sm text-muted-foreground">
              Code expires in{" "}
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                {minutes}:{seconds.toString().padStart(2, "0")}
              </span>
            </p>

            <Button
              onClick={handleVerify}
              disabled={loading || otp.length !== 6 || timer <= 0}
              className="w-full h-11 rounded-xl"
            >
              {loading
                ? "Verifying..."
                : timer <= 0
                ? "Code Expired"
                : "Verify Email"}
            </Button>
          </CardContent>

          <CardFooter className="text-center text-xs text-muted-foreground pb-4">
            Didn’t receive the code? Check spam or request a new one.
          </CardFooter>
        </Card>
      </motion.div>
    </main>
  );
}
