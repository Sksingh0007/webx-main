"use client";

import React, { useEffect, useState } from "react";
import Loading from "@/app/loading";

export default function AppLoader({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true);
  const [startFade, setStartFade] = useState(false);

  useEffect(() => {
    const start = setTimeout(() => setStartFade(true), 5000);

    const end = setTimeout(() => setShowLoader(false), 5000 + 600);

    return () => {
      clearTimeout(start);
      clearTimeout(end);
    };
  }, []);

  return (
    <>
      {/* Loader overlay: fades out when `startFade` becomes true */}
      {showLoader && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center  transition-opacity duration-600 ${
            startFade ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Loading />
        </div>
      )}

      {/* App content: initially hidden and slightly above; slides down and fades in */}
      <div className={` ${startFade ? "opacity-100 " : "opacity-0 "}`}>
        {children}
      </div>
    </>
  );
}
