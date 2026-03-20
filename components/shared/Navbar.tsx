"use client";

import { Shield } from "lucide-react";
import { cn } from "@/lib/utils/helpers";

interface NavbarProps {
  globalProgress: number;
}

export function Navbar({ globalProgress }: NavbarProps) {
  const clampedProgress = Math.min(100, Math.max(0, Math.round(globalProgress)));
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (clampedProgress / 100) * circumference;

  return (
    <header className="bg-slate-900 text-white shadow-lg z-50 relative">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo y marca */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-wide leading-tight">
              CyberCEN
            </span>
            <span className="text-[10px] text-slate-400 leading-tight hidden sm:block">
              by TTPSEC SPA
            </span>
            <span className="text-xs text-slate-400 leading-tight hidden sm:block">
              Autoevaluación de Ciberseguridad — Sector Eléctrico
            </span>
          </div>
        </div>

        {/* Indicador de progreso global */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 hidden sm:block">
            Progreso Global
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
                className="text-slate-700"
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
                    ? "text-optimal"
                    : clampedProgress >= 50
                      ? "text-medium"
                      : clampedProgress > 0
                        ? "text-high"
                        : "text-slate-600"
                )}
              />
            </svg>
            <span className="absolute text-[10px] font-semibold text-white">
              {clampedProgress}%
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
