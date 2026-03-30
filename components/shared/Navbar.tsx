"use client";

import Image from "next/image";
import { cn, assetPath } from "@/lib/utils/helpers";

interface NavbarProps {
  globalProgress: number;
}

export function Navbar({ globalProgress }: NavbarProps) {
  const clampedProgress = Math.min(100, Math.max(0, Math.round(globalProgress)));
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (clampedProgress / 100) * circumference;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo y marca */}
        <div className="flex items-center gap-3">
          <Image
            src={assetPath("/logo-ttpsec.png")}
            alt="TTPSEC"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <div className="flex flex-col">
            <span className="text-lg font-black text-blue-900 tracking-tight leading-tight">
              CyberCEN
            </span>
            <span className="text-[11px] text-slate-500 font-medium leading-tight hidden sm:block">
              by TTPSEC SPA
            </span>
          </div>
        </div>

        {/* Status badges */}
        <div className="hidden md:flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            Anónimo
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            Seguro
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
            Sin Rastreo
          </span>
        </div>

        {/* Indicador de progreso global */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500 font-medium hidden sm:block">
            Progreso
          </span>
          <div className="relative flex items-center justify-center w-11 h-11">
            <svg
              className="w-11 h-11 -rotate-90"
              viewBox="0 0 40 40"
              aria-label={`Progreso global: ${clampedProgress}%`}
            >
              <circle
                cx="20"
                cy="20"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-slate-200"
              />
              <circle
                cx="20"
                cy="20"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className={cn(
                  "transition-all duration-500 ease-out",
                  clampedProgress >= 80
                    ? "text-emerald-500"
                    : clampedProgress >= 50
                      ? "text-blue-500"
                      : clampedProgress > 0
                        ? "text-amber-500"
                        : "text-slate-300"
                )}
              />
            </svg>
            <span className="absolute text-[10px] font-bold text-slate-700">
              {clampedProgress}%
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
