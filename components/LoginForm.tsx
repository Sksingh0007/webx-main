"use client";

import React, { useState } from "react";
import { useAuth } from "./AuthProvider";

export const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const res = await login(email, password);
    if (!res.ok) setError(res.error || "Login failed");
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 8, width: 320 }}
    >
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <button type="submit">Login</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </form>
  );
};

export default LoginForm;
