"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "subscribing" | "success">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("subscribing");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-3">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 h-11 sm:h-12 text-sm sm:text-base"
        />
        <Button
          type="submit"
          disabled={status === "subscribing"}
          className="h-11 sm:h-12 px-6 text-sm sm:text-base whitespace-nowrap"
        >
          {status === "subscribing" ? "Subscribing..." : "Get Free Report →"}
        </Button>
      </form>
      {status === "success" && (
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-green-500 dark:text-green-400 animate-in fade-in slide-in-from-top-2 duration-300">
          <CheckCircle2 className="h-4 w-4" />
          <p>Thanks! Check your email for the download link.</p>
        </div>
      )}
    </div>
  );
}
