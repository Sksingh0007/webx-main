"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type User = { id: string; email: string } | null;

type AuthContextValue = {
  user: User;
  loading: boolean;
  login: (
    email: string,
    password: string
  ) => Promise<{ ok: boolean; error?: string }>;
  register: (
    email: string,
    password: string
  ) => Promise<{ ok: boolean; error?: string }>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);

  async function refreshUser() {
    try {
      const res = await fetch("/api/auth/me", {
        credentials: "include",
      });

      const data = await res.json();
      setUser(data.user ?? null);
    } catch (err) {
      console.error(err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refreshUser()
  }, []);

  async function login(email: string, password: string) {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      setUser(data.user);
      return { ok: true };
    }
    return { ok: false, error: data.error };
  }

  async function register(email: string, password: string) {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      return { ok: true };
    }
    return { ok: false, error: data.error };
  }

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ user, loading, login, register, logout, refreshUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
