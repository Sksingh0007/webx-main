"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-96 h-96 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
      style={{
        background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(128,128,128,0.05) 50%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />
  );
}
