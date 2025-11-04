import React from "react";

export default function AuthLayout({ title, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EFECE3] relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8FABD4]/20 via-[#EFECE3] to-[#4A70A9]/10"></div>

      {/* Card container */}
      <div className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-md shadow-xl rounded-3xl border border-[#8FABD4]/30 p-8">
        {title && (
          <h1 className="text-3xl font-bold text-center text-[#000000] mb-8 tracking-tight">
            {title}
          </h1>
        )}
        {children}
      </div>
    </div>
  );
}
