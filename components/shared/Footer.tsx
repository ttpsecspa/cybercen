"use client";

import Image from "next/image";
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
        <Image
          src="/logo-ttpsec.png"
          alt="TTPSEC"
          width={32}
          height={32}
          className="h-8 w-auto mb-1"
        />
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
        <p className="text-[10px] text-slate-400 font-mono mt-1">
          MIT License &copy; {new Date().getFullYear()} TTPSEC SPA
        </p>
        <div className="border-t border-slate-200 pt-4 mt-2">
          <p className="text-xs text-slate-400 mb-2">
            Si esta herramienta te fue útil, puedes recomendar al autor:
          </p>
          <a
            href="https://www.linkedin.com/in/profesorsvargasy/details/recommendations/edit/write?profileFormEntryPoint=Detail"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A66C2] text-white text-sm font-bold hover:bg-[#004182] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Recomendar en LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
