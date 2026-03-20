"use client";

import dynamic from "next/dynamic";

const ReportesClient = dynamic(
  () => import("@/components/resultados/ReportesClient"),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center space-y-4">
          <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto" />
          <p className="text-slate-500">Cargando módulo de reportes...</p>
        </div>
      </div>
    ),
  }
);

export default function ReportesPage() {
  return <ReportesClient />;
}
