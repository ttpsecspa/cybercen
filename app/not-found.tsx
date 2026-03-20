"use client";

import Link from "next/link";
import { Shield, Home, Search } from "lucide-react";
import { cn } from "@/lib/utils/helpers";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 text-center">
      {/* Icon */}
      <div className="relative mb-8">
        <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
          <Shield className="w-16 h-16 text-slate-300" />
        </div>
        <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/25">
          <Search className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Text */}
      <h1 className="text-7xl font-extrabold text-slate-900 tracking-tight">
        404
      </h1>
      <h2 className="text-2xl font-bold text-slate-700 mt-3">
        Página no encontrada
      </h2>
      <p className="text-slate-500 mt-3 max-w-md leading-relaxed">
        El recurso que buscas no existe o fue movido. Verifica la URL o regresa
        al panel de control.
      </p>

      {/* CTA */}
      <Link
        href="/"
        className={cn(
          "mt-8 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white",
          "bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/25",
          "hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5",
          "transition-all duration-200"
        )}
      >
        <Home className="w-4 h-4" />
        Volver al Dashboard
      </Link>

      {/* Decorative */}
      <p className="mt-12 text-xs text-slate-400">
        CyberCEN by TTPSEC SPA
      </p>
    </div>
  );
}
