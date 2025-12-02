"use client";
import { useEffect, useState } from "react";

export default function Loading() {
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEnter(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <video
        src="/gemini.mp4"
        className="loading-video absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        loop
      />

      <div
        className={`absolute left-1/2 bottom-12 transform -translate-x-1/2 transition-all duration-700 ease-out ${
          enter ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        }`}
      >
      </div>
    </div>
  );
}
