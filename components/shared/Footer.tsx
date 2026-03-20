"use client";

import { Zap } from "lucide-react";
import { cn } from "@/lib/utils/helpers";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "border-t border-slate-200 py-4 px-6 text-center",
        className
      )}
    >
      <p className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
        <Zap className="h-3.5 w-3.5 text-indigo-400" />
        <span>
          Powered by{" "}
          <span className="font-bold text-indigo-500">TTPSEC.AI</span>
        </span>
      </p>
    </footer>
  );
}
