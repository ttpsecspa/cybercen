"use client";

import { cn } from "@/lib/utils/helpers";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "bg-white border-t border-slate-200 py-6 px-4 text-center mt-auto",
        className
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <p className="text-xs text-slate-500">
          <strong className="text-blue-900 font-black">TTPSEC</strong>{" "}
          <span className="text-slate-400">|</span>{" "}
          CyberCEN — Autoevaluación de Ciberseguridad
        </p>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            Anónimo
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            Seguro
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
            Sin Rastreo
          </span>
        </div>
        <a
          href="https://www.ttpsec.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold text-blue-800 hover:text-blue-600 transition-colors"
        >
          www.ttpsec.ai
        </a>
        <p className="text-xs text-slate-500 italic">
          Software para el bien común
        </p>
      </div>
    </footer>
  );
}
