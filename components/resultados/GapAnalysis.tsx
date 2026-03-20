"use client";

import { useState, useMemo } from "react";
import {
  XCircle,
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  ShieldAlert,
  TrendingDown,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils/helpers";
import type { DomainResult, CIPStandard } from "@/lib/data/types";
import {
  analyzeGaps,
  generateGapSummary,
  getGapsByPriority,
} from "@/lib/engine/gap-analyzer";
import { getRiskColor, getRiskLabel } from "@/lib/engine/scoring";

interface GapAnalysisProps {
  domainResults: DomainResult[];
  standards: CIPStandard[];
}

function RiskBadge({ level }: { level: string }) {
  const colorMap: Record<string, string> = {
    critical: "bg-red-100 text-red-700 border-red-200",
    high: "bg-orange-100 text-orange-700 border-orange-200",
    medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
    low: "bg-blue-100 text-blue-700 border-blue-200",
    optimal: "bg-green-100 text-green-700 border-green-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border",
        colorMap[level] ?? "bg-slate-100 text-slate-700 border-slate-200"
      )}
    >
      {getRiskLabel(level as any)}
    </span>
  );
}

export function GapAnalysis({ domainResults, standards }: GapAnalysisProps) {
  const [expandedDomains, setExpandedDomains] = useState<
    Record<string, boolean>
  >({});

  const summary = useMemo(
    () => generateGapSummary(domainResults),
    [domainResults]
  );

  const gapsByPriority = useMemo(
    () => getGapsByPriority(domainResults),
    [domainResults]
  );

  const toggleDomain = (cipId: string) => {
    setExpandedDomains((prev) => ({
      ...prev,
      [cipId]: !prev[cipId],
    }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    for (const dr of domainResults) {
      all[dr.cipId] = true;
    }
    setExpandedDomains(all);
  };

  const collapseAll = () => {
    setExpandedDomains({});
  };

  const summaryStats = [
    {
      label: "Total Brechas",
      value: summary.totalGaps,
      icon: BarChart3,
      color: "text-slate-700",
      bg: "bg-slate-50 border-slate-200",
    },
    {
      label: "Criticas",
      value: summary.criticalGaps,
      icon: ShieldAlert,
      color: "text-red-600",
      bg: "bg-red-50 border-red-200",
    },
    {
      label: "Altas",
      value: summary.highGaps,
      icon: TrendingDown,
      color: "text-orange-600",
      bg: "bg-orange-50 border-orange-200",
    },
    {
      label: "Medias",
      value: summary.mediumGaps,
      icon: AlertTriangle,
      color: "text-yellow-600",
      bg: "bg-yellow-50 border-yellow-200",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Analisis de Brechas
          </h3>
          <p className="text-sm text-slate-500 mt-0.5">
            Cumplimiento general: {summary.percentCompliant}%
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={expandAll}
            className="text-xs font-medium text-blue-600 hover:text-blue-700 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Expandir todo
          </button>
          <button
            onClick={collapseAll}
            className="text-xs font-medium text-slate-500 hover:text-slate-700 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Colapsar todo
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {summaryStats.map((stat) => (
          <div
            key={stat.label}
            className={cn(
              "rounded-xl border p-4 flex flex-col items-center justify-center gap-1",
              stat.bg
            )}
          >
            <stat.icon className={cn("w-5 h-5", stat.color)} />
            <span className={cn("text-2xl font-bold", stat.color)}>
              {stat.value}
            </span>
            <span className="text-xs font-medium text-slate-500">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Domain Accordions */}
      <div className="space-y-2">
        {domainResults.map((dr) => {
          const isExpanded = expandedDomains[dr.cipId] ?? false;
          const standard = standards.find((s) => s.id === dr.cipId);
          const domainName = standard?.name ?? dr.cipId;
          const scorePercent = dr.score;

          return (
            <div
              key={dr.cipId}
              className={cn(
                "border rounded-xl overflow-hidden transition-all duration-200",
                isExpanded ? "border-slate-300 shadow-sm" : "border-slate-200"
              )}
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleDomain(dr.cipId)}
                className="w-full flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors text-left"
              >
                <div className="flex-shrink-0">
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-bold text-sm text-slate-900">
                      {dr.cipId}
                    </span>
                    <span className="text-sm text-slate-600 truncate">
                      {domainName}
                    </span>
                  </div>

                  {/* Score Bar */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${scorePercent}%`,
                          backgroundColor: getRiskColor(dr.riskLevel),
                        }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-slate-700 w-10 text-right">
                      {scorePercent}%
                    </span>
                  </div>
                </div>

                <div className="flex-shrink-0 flex items-center gap-2">
                  <RiskBadge level={dr.riskLevel} />
                  {dr.gaps.length > 0 && (
                    <span className="text-xs text-slate-400 font-medium">
                      {dr.gaps.length} brecha{dr.gaps.length !== 1 ? "s" : ""}
                    </span>
                  )}
                </div>
              </button>

              {/* Accordion Content */}
              {isExpanded && (
                <div className="px-4 pb-4 border-t border-slate-100">
                  {dr.gaps.length === 0 ? (
                    <div className="py-6 text-center text-sm text-green-600 font-medium">
                      Sin brechas identificadas en este dominio
                    </div>
                  ) : (
                    <ul className="divide-y divide-slate-50 mt-2">
                      {dr.gaps.map((gap, idx) => {
                        const isNoCumple = gap.includes("(No cumple)");
                        const isParcial = gap.includes("(Parcial)");
                        const cleanGap = gap
                          .replace(/^\[[^\]]+\]\s*/, "")
                          .replace(/\s*\((No cumple|Parcial)\)\s*$/, "");

                        return (
                          <li
                            key={idx}
                            className="flex items-start gap-3 py-3"
                          >
                            {isNoCumple ? (
                              <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                            ) : (
                              <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-slate-700">
                                {cleanGap}
                              </p>
                              <span
                                className={cn(
                                  "inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded-full",
                                  isNoCumple
                                    ? "bg-red-50 text-red-600"
                                    : "bg-yellow-50 text-yellow-600"
                                )}
                              >
                                {isNoCumple
                                  ? "No cumple"
                                  : isParcial
                                    ? "Cumplimiento parcial"
                                    : "Requiere atencion"}
                              </span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {domainResults.length === 0 && (
        <div className="py-12 text-center text-slate-400">
          <ShieldAlert className="w-12 h-12 mx-auto mb-3 opacity-40" />
          <p className="text-sm">
            No hay datos de evaluacion disponibles para analizar.
          </p>
        </div>
      )}
    </div>
  );
}
