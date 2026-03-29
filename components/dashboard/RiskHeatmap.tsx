"use client";

import { useState } from "react";
import type { CIPStandard, DomainResult, RiskLevel } from "@/lib/data/types";
import { cn } from "@/lib/utils/helpers";

const RISK_COLORS: Record<RiskLevel, { bg: string; text: string; border: string }> = {
  critical: { bg: "bg-red-500", text: "text-white", border: "border-red-600" },
  high: { bg: "bg-orange-400", text: "text-white", border: "border-orange-500" },
  medium: { bg: "bg-yellow-400", text: "text-yellow-900", border: "border-yellow-500" },
  low: { bg: "bg-blue-400", text: "text-white", border: "border-blue-500" },
  optimal: { bg: "bg-green-500", text: "text-white", border: "border-green-600" },
};

const RISK_LABEL: Record<RiskLevel, string> = {
  critical: "Crítico",
  high: "Alto",
  medium: "Medio",
  low: "Bajo",
  optimal: "Óptimo",
};

interface RiskHeatmapProps {
  domainResults: DomainResult[];
  standards: CIPStandard[];
}

export function RiskHeatmap({ domainResults, standards }: RiskHeatmapProps) {
  const [hoveredCip, setHoveredCip] = useState<string | null>(null);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-800 mb-1">
        Mapa de Calor de Riesgos
      </h2>
      <p className="text-sm text-slate-500 mb-5">
        Vista general del nivel de riesgo por dominio CIP
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {standards.map((standard) => {
          const result = domainResults.find((r) => r.cipId === standard.id);
          const riskLevel: RiskLevel = result?.riskLevel ?? "low";
          const score = result?.score ?? 0;
          const colors = RISK_COLORS[riskLevel];
          const isHovered = hoveredCip === standard.id;

          return (
            <div
              key={standard.id}
              className="relative"
              onMouseEnter={() => setHoveredCip(standard.id)}
              onMouseLeave={() => setHoveredCip(null)}
            >
              <div
                className={cn(
                  "flex flex-col items-center justify-center rounded-lg border-2 p-3 min-h-[100px]",
                  "cursor-default transition-all duration-200",
                  colors.bg,
                  colors.text,
                  colors.border,
                  isHovered && "scale-105 shadow-lg"
                )}
              >
                <span className="text-xs font-bold opacity-80">
                  {standard.id}
                </span>
                <span className="text-2xl font-extrabold mt-1">{score}</span>
                <span className="text-[10px] font-medium opacity-80 text-center leading-tight mt-1 line-clamp-2">
                  {standard.name}
                </span>
              </div>

              {/* Tooltip */}
              {isHovered && (
                <div className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 rounded-lg border border-slate-200 bg-white p-3 shadow-xl">
                  <p className="text-xs font-bold text-slate-800">
                    {standard.id} - {standard.name}
                  </p>
                  <div className="mt-2 space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Puntaje:</span>
                      <span className="font-semibold text-slate-800">
                        {score}/100
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Nivel de riesgo:</span>
                      <span className="font-semibold text-slate-800">
                        {RISK_LABEL[riskLevel]}
                      </span>
                    </div>
                    {result && (
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Progreso:</span>
                        <span className="font-semibold text-slate-800">
                          {result.answeredQuestions}/{result.totalQuestions}
                        </span>
                      </div>
                    )}
                    {result && result.gaps.length > 0 && (
                      <div className="mt-1 pt-1 border-t border-slate-100">
                        <span className="text-[10px] text-slate-400">
                          {result.gaps.length} brecha{result.gaps.length > 1 ? "s" : ""} identificada{result.gaps.length > 1 ? "s" : ""}
                        </span>
                      </div>
                    )}
                  </div>
                  {/* Tooltip arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                    <div className="w-3 h-3 bg-white border-r border-b border-slate-200 transform rotate-45 -translate-y-1.5" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6 pt-4 border-t border-slate-100">
        {(["optimal", "low", "medium", "high", "critical"] as RiskLevel[]).map(
          (level) => (
            <div key={level} className="flex items-center gap-1.5">
              <div
                className={cn(
                  "w-3 h-3 rounded-sm",
                  RISK_COLORS[level].bg
                )}
              />
              <span className="text-xs text-slate-500">
                {RISK_LABEL[level]}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
