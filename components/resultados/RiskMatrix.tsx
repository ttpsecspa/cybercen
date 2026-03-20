"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/helpers";
import type { DomainResult } from "@/lib/data/types";
import { cipStandards } from "@/lib/data/cip-standards";

interface RiskMatrixProps {
  domainResults: DomainResult[];
}

const impactLabels = ["Muy Bajo", "Bajo", "Medio", "Alto", "Muy Alto"];
const probabilityLabels = ["Muy Alta", "Alta", "Media", "Baja", "Muy Baja"];

// 5x5 risk matrix colors: rows are probability (top=highest), cols are impact (left=lowest)
// Each cell represents [probability_row][impact_col]
const matrixColors: string[][] = [
  // Muy Alta probability
  [
    "bg-yellow-400",
    "bg-orange-400",
    "bg-red-500",
    "bg-red-600",
    "bg-red-700",
  ],
  // Alta probability
  [
    "bg-green-400",
    "bg-yellow-400",
    "bg-orange-400",
    "bg-red-500",
    "bg-red-600",
  ],
  // Media probability
  [
    "bg-green-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-orange-400",
    "bg-red-500",
  ],
  // Baja probability
  [
    "bg-green-500",
    "bg-green-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-orange-400",
  ],
  // Muy Baja probability
  [
    "bg-green-600",
    "bg-green-500",
    "bg-green-400",
    "bg-green-400",
    "bg-yellow-400",
  ],
];

function scoreToPosition(score: number): { row: number; col: number } {
  // Lower score = higher risk = higher probability and higher impact
  // Score 0-20 -> row 0 (Muy Alta prob), col 4 (Muy Alto impact)
  // Score 80-100 -> row 4 (Muy Baja prob), col 0 (Muy Bajo impact)
  let row: number;
  let col: number;

  if (score <= 20) {
    row = 0;
    col = 4;
  } else if (score <= 40) {
    row = 1;
    col = 3;
  } else if (score <= 60) {
    row = 2;
    col = 2;
  } else if (score <= 80) {
    row = 3;
    col = 1;
  } else {
    row = 4;
    col = 0;
  }

  return { row, col };
}

export function RiskMatrix({ domainResults }: RiskMatrixProps) {
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null);

  // Group domains by their matrix position
  const domainPositions = domainResults.map((dr) => {
    const pos = scoreToPosition(dr.score);
    const standard = cipStandards.find((s) => s.id === dr.cipId);
    return {
      ...dr,
      ...pos,
      name: standard?.name ?? dr.cipId,
    };
  });

  // Group by cell for rendering
  const cellDomains: Record<string, typeof domainPositions> = {};
  for (const dp of domainPositions) {
    const key = `${dp.row}-${dp.col}`;
    if (!cellDomains[key]) cellDomains[key] = [];
    cellDomains[key].push(dp);
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-bold text-slate-900 mb-1">
        Matriz de Riesgo
      </h3>
      <p className="text-sm text-slate-500 mb-6">
        Probabilidad vs Impacto por dominio CIP
      </p>

      <div className="flex items-stretch gap-0">
        {/* Y axis label */}
        <div className="flex items-center mr-2">
          <span className="text-xs font-semibold text-slate-500 -rotate-90 whitespace-nowrap tracking-wider uppercase">
            Probabilidad
          </span>
        </div>

        {/* Y axis tick labels */}
        <div className="flex flex-col justify-around pr-2">
          {probabilityLabels.map((label) => (
            <div
              key={label}
              className="h-16 flex items-center justify-end"
            >
              <span className="text-xs font-medium text-slate-600 whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-5 gap-1">
            {Array.from({ length: 25 }).map((_, idx) => {
              const row = Math.floor(idx / 5);
              const col = idx % 5;
              const key = `${row}-${col}`;
              const domains = cellDomains[key] || [];
              const cellColor = matrixColors[row][col];

              return (
                <div
                  key={key}
                  className={cn(
                    "relative h-16 rounded-lg flex items-center justify-center gap-1 flex-wrap p-1 transition-all duration-200",
                    cellColor,
                    domains.length > 0 && "ring-2 ring-white/50"
                  )}
                >
                  {domains.map((domain) => (
                    <div
                      key={domain.cipId}
                      className="relative"
                      onMouseEnter={() => setHoveredDomain(domain.cipId)}
                      onMouseLeave={() => setHoveredDomain(null)}
                    >
                      <div
                        className={cn(
                          "w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center cursor-pointer",
                          "text-[10px] font-bold text-slate-800 shadow-md",
                          "hover:scale-125 hover:bg-white hover:shadow-lg transition-all duration-200",
                          "border-2 border-white"
                        )}
                      >
                        {domain.cipId.replace("CIP-0", "").replace("CIP-", "")}
                      </div>

                      {/* Tooltip */}
                      {hoveredDomain === domain.cipId && (
                        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none">
                          <div className="bg-slate-900 text-white text-xs rounded-lg px-3 py-2 shadow-xl whitespace-nowrap">
                            <div className="font-bold">{domain.cipId}</div>
                            <div className="text-slate-300">{domain.name}</div>
                            <div className="text-slate-300 mt-0.5">
                              Puntaje: {domain.score}%
                            </div>
                          </div>
                          <div className="absolute left-1/2 -translate-x-1/2 top-full -mt-1 w-2 h-2 bg-slate-900 rotate-45" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>

          {/* X axis tick labels */}
          <div className="grid grid-cols-5 gap-1 mt-2">
            {impactLabels.map((label) => (
              <div key={label} className="text-center">
                <span className="text-xs font-medium text-slate-600">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* X axis label */}
          <div className="text-center mt-2">
            <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
              Impacto
            </span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 pt-4 border-t border-slate-100">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-green-600" />
            <span className="text-xs text-slate-600">Riesgo Muy Bajo</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-green-400" />
            <span className="text-xs text-slate-600">Riesgo Bajo</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-yellow-400" />
            <span className="text-xs text-slate-600">Riesgo Medio</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-orange-400" />
            <span className="text-xs text-slate-600">Riesgo Alto</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-red-600" />
            <span className="text-xs text-slate-600">Riesgo Critico</span>
          </div>
        </div>
      </div>
    </div>
  );
}
