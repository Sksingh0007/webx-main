"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/AuthProvider";

export default function SignupPage() {
  const { register } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await register(email, password);

    setLoading(false);
    if (res.ok) {
      router.push("/");
    } else {
      setError(res.error || "Registration failed");
    }
  }

  return (
    <main className="min-h-screen relative flex items-center justify-center px-4">
      {/* Background Glow */}
      <div className="absolute -top-20 z-[-2] h-screen w-screen bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(29,161,242,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(29,161,242,0.3),rgba(0,0,0,0))]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <Card className="backdrop-blur-xl bg-primary/5 shadow-xl border border-zinc-200/60 dark:border-zinc-700/60 rounded-3xl">
          <CardHeader className="space-y-2">
            <CardTitle className="text-3xl font-semibold tracking-tight">
              Create an account
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Join us to access your personalized dashboard
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={onSubmit} className="flex flex-col gap-6">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Email</Label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="you@example.com"
                  className="h-11 rounded-xl focus-visible:ring-2 focus-visible:ring-primary/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Password</Label>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="••••••••"
                  className="h-11 rounded-xl focus-visible:ring-2 focus-visible:ring-primary/50 transition-all"
                />
              </div>

              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs text-red-500"
                >
                  {error}
                </motion.p>
              )}

              <Button
                type="submit"
                className="w-full h-11 rounded-xl text-[15px] font-medium transition-all hover:shadow-md"
                disabled={loading}
              >
                {loading ? "Creating account..." : "Sign Up"}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex justify-center pt-4 pb-6">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary font-medium underline-offset-4 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </main>
  );
}
