"use client";

import { useEffect } from "react";
import { Shield, RefreshCcw, Home, AlertOctagon } from "lucide-react";
import { cn } from "@/lib/utils/helpers";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error("CyberCEN Error:", error);
    }
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 text-center">
      {/* Icon */}
      <div className="relative mb-8">
        <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
          <Shield className="w-16 h-16 text-red-200" />
        </div>
        <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/25">
          <AlertOctagon className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Text */}
      <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
        Error inesperado
      </h1>
      <p className="text-slate-500 mt-3 max-w-md leading-relaxed">
        Ocurrió un problema al cargar esta sección. Puedes intentar recargar o
        volver al panel de control.
      </p>

      {error.digest && process.env.NODE_ENV === "development" && (
        <p className="mt-2 text-xs text-slate-400 font-mono">
          Código: {error.digest}
        </p>
      )}

      {/* Actions */}
      <div className="flex items-center gap-3 mt-8">
        <button
          type="button"
          onClick={reset}
          className={cn(
            "inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white",
            "bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/25",
            "hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5",
            "transition-all duration-200"
          )}
        >
          <RefreshCcw className="w-4 h-4" />
          Reintentar
        </button>

        <a
          href="/"
          className={cn(
            "inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700",
            "hover:bg-slate-50 hover:-translate-y-0.5",
            "transition-all duration-200"
          )}
        >
          <Home className="w-4 h-4" />
          Dashboard
        </a>
      </div>

      {/* Decorative */}
      <p className="mt-12 text-xs text-slate-400">
        CyberCEN by TTPSEC SPA
      </p>
    </div>
  );
}
