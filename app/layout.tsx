import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Home/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/components/AuthProvider";
import Footer from "@/components/ui/Home/Footer";

import CursorFollower from "@/components/CursorFollower";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Webspherx – Master AI & Future Tech Skills for Your Career in 2025 (US Students & Professionals)",
  description:
    "Practical AI courses, tools, and prompts for US college students and working professionals. Used at Google, Amazon, and top startups. Start free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CursorFollower />

          <ThemeProvider>
            <AuthProvider>
              <Navbar />
              {children}
              <Footer />
            </AuthProvider>
          </ThemeProvider>

      </body>
    </html>
  );
}
