"use client";

import { useMemo, useState, useCallback } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  Target,
  ArrowLeft,
  FileText,
  ChevronDown,
  ChevronUp,
  Clock,
  Zap,
  Calendar,
  CheckCircle2,
  Circle,
  AlertTriangle,
  ListChecks,
  Rocket,
  Layers,
  Download,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Shield,
  Activity,
} from "lucide-react";
import {
  RadialBarChart,
  RadialBar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { cn } from "@/lib/utils/helpers";
import { useEvaluationStore } from "@/lib/store/evaluation-store";
import { cipStandards } from "@/lib/data/cip-standards";
import { recommendations } from "@/lib/data/recommendations";
import { getRiskColor, getRiskLabel } from "@/lib/engine/scoring";
import type { DomainResult, RiskLevel, Recommendation } from "@/lib/data/types";

// ─── Constants ──────────────────────────────────────────────────────────────

const riskSeverity: Record<RiskLevel, number> = {
  optimal: 0,
  low: 1,
  medium: 2,
  high: 3,
  critical: 4,
};

type Priority = "immediate" | "short-term" | "medium-term" | "long-term";

const priorityConfig: Record<
  Priority,
  {
    label: string;
    sublabel: string;
    iconBg: string;
    gradientFrom: string;
    gradientTo: string;
    borderColor: string;
    textColor: string;
    badgeBg: string;
    badgeText: string;
    dotColor: string;
    headerBar: string;
    lightBg: string;
    ringColor: string;
    chartColor: string;
  }
> = {
  immediate: {
    label: "Inmediato",
    sublabel: "0-3 meses",
    iconBg: "bg-red-500",
    gradientFrom: "from-red-500",
    gradientTo: "to-rose-600",
    borderColor: "border-red-200",
    textColor: "text-red-700",
    badgeBg: "bg-red-100",
    badgeText: "text-red-700",
    dotColor: "bg-red-500",
    headerBar: "bg-gradient-to-r from-red-500 to-rose-600",
    lightBg: "bg-red-50",
    ringColor: "ring-red-200",
    chartColor: "#EF4444",
  },
  "short-term": {
    label: "Corto Plazo",
    sublabel: "3-6 meses",
    iconBg: "bg-orange-500",
    gradientFrom: "from-orange-500",
    gradientTo: "to-amber-600",
    borderColor: "border-orange-200",
    textColor: "text-orange-700",
    badgeBg: "bg-orange-100",
    badgeText: "text-orange-700",
    dotColor: "bg-orange-500",
    headerBar: "bg-gradient-to-r from-orange-500 to-amber-600",
    lightBg: "bg-orange-50",
    ringColor: "ring-orange-200",
    chartColor: "#F97316",
  },
  "medium-term": {
    label: "Mediano Plazo",
    sublabel: "6-12 meses",
    iconBg: "bg-amber-500",
    gradientFrom: "from-amber-500",
    gradientTo: "to-yellow-600",
    borderColor: "border-amber-200",
    textColor: "text-amber-700",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-700",
    dotColor: "bg-amber-500",
    headerBar: "bg-gradient-to-r from-amber-500 to-yellow-600",
    lightBg: "bg-amber-50",
    ringColor: "ring-amber-200",
    chartColor: "#F59E0B",
  },
  "long-term": {
    label: "Largo Plazo",
    sublabel: "12-24 meses",
    iconBg: "bg-blue-500",
    gradientFrom: "from-blue-500",
    gradientTo: "to-indigo-600",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-700",
    dotColor: "bg-blue-500",
    headerBar: "bg-gradient-to-r from-blue-500 to-indigo-600",
    lightBg: "bg-blue-50",
    ringColor: "ring-blue-200",
    chartColor: "#3B82F6",
  },
};

const priorityIcons: Record<Priority, React.ComponentType<{ className?: string }>> = {
  immediate: AlertTriangle,
  "short-term": Clock,
  "medium-term": Calendar,
  "long-term": Target,
};

const PRIORITIES: Priority[] = ["immediate", "short-term", "medium-term", "long-term"];

// ─── Helpers ────────────────────────────────────────────────────────────────

function getFilteredRecommendations(domainResults: DomainResult[]): Recommendation[] {
  const domainRiskMap = new Map<string, RiskLevel>();
  for (const dr of domainResults) {
    if (dr.score < 100) {
      domainRiskMap.set(dr.cipId, dr.riskLevel);
    }
  }
  return recommendations.filter((rec) => {
    const domainRisk = domainRiskMap.get(rec.cipId);
    if (!domainRisk) return false;
    return riskSeverity[rec.riskLevel] >= riskSeverity[domainRisk];
  });
}

function isQuickWin(rec: Recommendation): boolean {
  const effort = rec.estimatedEffort.toLowerCase();
  return (
    effort.includes("1-2 semanas") ||
    effort.includes("1 semana") ||
    effort.includes("2 semanas") ||
    effort.includes("2-3 dias") ||
    effort.includes("1-2 dias") ||
    effort.includes("1 mes") ||
    effort.includes("inmediato")
  );
}

// ─── Priority Distribution Card ─────────────────────────────────────────────

function PriorityCard({
  priority,
  count,
  total,
}: {
  priority: Priority;
  count: number;
  total: number;
}) {
  const config = priorityConfig[priority];
  const Icon = priorityIcons[priority];
  const percentage = total > 0 ? Math.round((count / total) * 100) : 0;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group",
        config.borderColor,
        config.lightBg
      )}
    >
      {/* Decorative gradient blob */}
      <div
        className={cn(
          "absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-30",
          config.iconBg
        )}
      />

      <div className="relative flex items-start justify-between">
        <div>
          <div
            className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md mb-3",
              config.iconBg
            )}
          >
            <Icon className="w-5 h-5" />
          </div>
          <p className="text-3xl font-black text-slate-900 tracking-tight">{count}</p>
          <p className={cn("text-sm font-bold mt-0.5", config.textColor)}>
            {config.label}
          </p>
          <p className="text-xs text-slate-500 mt-0.5">{config.sublabel}</p>
        </div>
        <div className="text-right">
          <span
            className={cn(
              "inline-block text-xs font-bold px-2.5 py-1 rounded-full",
              config.badgeBg,
              config.badgeText
            )}
          >
            {percentage}%
          </span>
        </div>
      </div>

      {/* Mini progress bar */}
      <div className="mt-4 h-1.5 bg-white/60 rounded-full overflow-hidden">
        <div
          className={cn("h-full rounded-full transition-all duration-700", config.iconBg)}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

// ─── Hero Donut Chart ───────────────────────────────────────────────────────

function PriorityDonut({
  byPriority,
}: {
  byPriority: Record<Priority, Recommendation[]>;
}) {
  const data = PRIORITIES.map((p) => ({
    name: priorityConfig[p].label,
    value: byPriority[p].length,
    fill: priorityConfig[p].chartColor,
  })).filter((d) => d.value > 0);

  if (data.length === 0) return null;

  return (
    <div className="w-40 h-40 shrink-0">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={42}
            outerRadius={68}
            paddingAngle={3}
            dataKey="value"
            strokeWidth={0}
          >
            {data.map((entry, idx) => (
              <Cell key={idx} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              fontSize: "13px",
            }}
            formatter={(value, name) => [`${value} acciones`, `${name}`]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

// ─── Visual Timeline ────────────────────────────────────────────────────────

function VisualTimeline({
  byPriority,
  domainResults,
}: {
  byPriority: Record<Priority, Recommendation[]>;
  domainResults: DomainResult[];
}) {
  return (
    <div className="relative">
      {/* Background connector line */}
      <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%)] right-[calc(12.5%)] h-1 bg-gradient-to-r from-red-300 via-amber-300 to-blue-300 rounded-full z-0" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {PRIORITIES.map((p, index) => {
          const config = priorityConfig[p];
          const recs = byPriority[p];
          const Icon = priorityIcons[p];

          // Collect unique affected domains
          const affectedDomains = new Set<string>();
          for (const rec of recs) {
            affectedDomains.add(rec.cipId);
          }

          return (
            <div key={p} className="flex flex-col items-center">
              {/* Phase marker */}
              <div className="flex flex-col items-center mb-4">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Fase {index + 1}
                </div>
                <div
                  className={cn(
                    "w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg ring-4 ring-white",
                    config.iconBg
                  )}
                >
                  <Icon className="w-6 h-6" />
                </div>
              </div>

              {/* Phase card */}
              <div
                className={cn(
                  "w-full rounded-2xl border bg-white p-5 text-center transition-all duration-300 hover:shadow-md",
                  config.borderColor
                )}
              >
                <h4 className={cn("font-bold text-sm", config.textColor)}>
                  {config.label}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">{config.sublabel}</p>

                <div className="mt-3 flex items-center justify-center gap-3">
                  <div>
                    <p className="text-2xl font-black text-slate-900">{recs.length}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                      Acciones
                    </p>
                  </div>
                  <div className="w-px h-8 bg-slate-200" />
                  <div>
                    <p className="text-2xl font-black text-slate-900">
                      {affectedDomains.size}
                    </p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                      Dominios
                    </p>
                  </div>
                </div>

                {/* Affected domain pills */}
                {affectedDomains.size > 0 && (
                  <div className="mt-3 flex flex-wrap justify-center gap-1">
                    {Array.from(affectedDomains)
                      .slice(0, 4)
                      .map((cipId) => (
                        <span
                          key={cipId}
                          className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full"
                        >
                          {cipId}
                        </span>
                      ))}
                    {affectedDomains.size > 4 && (
                      <span className="text-[10px] font-medium text-slate-400 px-1 py-0.5">
                        +{affectedDomains.size - 4}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Quick Win Card ─────────────────────────────────────────────────────────

function QuickWinCard({ rec }: { rec: Recommendation }) {
  const standard = cipStandards.find((s) => s.id === rec.cipId);
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all duration-200 group">
      <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-200 transition-colors">
        <Sparkles className="w-4 h-4 text-emerald-600" />
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-semibold text-slate-900 leading-snug line-clamp-2">
          {rec.title}
        </h4>
        <div className="flex items-center gap-2 mt-2 flex-wrap">
          <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
            {rec.cipId}
          </span>
          {standard && (
            <span className="text-[10px] text-slate-400 truncate max-w-[120px]">
              {standard.name}
            </span>
          )}
          <span className="ml-auto text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
            <Clock className="w-2.5 h-2.5" />
            {rec.estimatedEffort}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Expandable Action Card ─────────────────────────────────────────────────

function ActionCard({ rec }: { rec: Recommendation }) {
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState(false);
  const config = priorityConfig[rec.priority];
  const standard = cipStandards.find((s) => s.id === rec.cipId);
  const riskColor = getRiskColor(rec.riskLevel);

  return (
    <div
      className={cn(
        "rounded-xl border bg-white transition-all duration-200",
        checked
          ? "border-green-200 bg-green-50/40 opacity-70"
          : "border-slate-200 hover:border-slate-300 hover:shadow-md"
      )}
    >
      <div className="p-4">
        <div className="flex items-start gap-3">
          {/* Visual checkbox */}
          <button
            onClick={() => setChecked(!checked)}
            className="mt-0.5 shrink-0 transition-transform hover:scale-110"
            aria-label={checked ? "Marcar como pendiente" : "Marcar como completado"}
          >
            {checked ? (
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            ) : (
              <Circle className="w-5 h-5 text-slate-300 hover:text-slate-400" />
            )}
          </button>

          <div className="flex-1 min-w-0">
            {/* Title */}
            <div className="flex items-start justify-between gap-2">
              <h4
                className={cn(
                  "font-bold text-sm leading-snug",
                  checked ? "line-through text-slate-400" : "text-slate-900"
                )}
              >
                {rec.title}
              </h4>
            </div>

            {/* Badge row */}
            <div className="flex items-center gap-2 mt-2.5 flex-wrap">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                {rec.cipId}
                {standard && ` \u2014 ${standard.name}`}
              </span>
              <span
                className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md"
                style={{
                  backgroundColor: riskColor + "18",
                  color: riskColor,
                }}
              >
                Riesgo {getRiskLabel(rec.riskLevel)}
              </span>
              <span
                className={cn(
                  "inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md",
                  config.badgeBg,
                  config.badgeText
                )}
              >
                <Clock className="w-3 h-3" />
                {rec.estimatedEffort}
              </span>
            </div>

            {/* Expandable description */}
            {expanded && (
              <div className="mt-3 space-y-2 animate-in slide-in-from-top-2 duration-200">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {rec.description}
                </p>
                <div className="text-xs text-slate-500 bg-slate-50 rounded-lg p-3 border border-slate-100">
                  <span className="font-semibold text-slate-700">Recursos necesarios:</span>{" "}
                  {rec.resources}
                </div>
              </div>
            )}
          </div>

          {/* Expand button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label={expanded ? "Contraer" : "Expandir"}
          >
            {expanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Priority Section ───────────────────────────────────────────────────────

function PrioritySection({
  priority,
  recs,
}: {
  priority: Priority;
  recs: Recommendation[];
}) {
  const config = priorityConfig[priority];
  const Icon = priorityIcons[priority];
  const [showAll, setShowAll] = useState(false);
  const displayedRecs = showAll ? recs : recs.slice(0, 5);

  if (recs.length === 0) return null;

  return (
    <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
      {/* Colored header */}
      <div className={cn("px-6 py-4 text-white flex items-center gap-3", config.headerBar)}>
        <Icon className="w-5 h-5" />
        <div className="flex-1">
          <h3 className="font-bold text-base">{config.label}</h3>
          <p className="text-sm text-white/80">{config.sublabel}</p>
        </div>
        <span className="text-2xl font-black">{recs.length}</span>
      </div>

      {/* Cards list */}
      <div className="p-4 space-y-3">
        {displayedRecs
          .sort((a, b) => riskSeverity[b.riskLevel] - riskSeverity[a.riskLevel])
          .map((rec) => (
            <ActionCard key={rec.id} rec={rec} />
          ))}

        {recs.length > 5 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full text-center text-sm font-semibold text-slate-500 hover:text-slate-700 py-2 transition-colors"
          >
            {showAll
              ? "Mostrar menos"
              : `Ver ${recs.length - 5} acciones más`}
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Domain Risk Summary Table ──────────────────────────────────────────────

function DomainRiskTable({
  domainResults,
  byDomain,
}: {
  domainResults: DomainResult[];
  byDomain: Map<string, Recommendation[]>;
}) {
  const sortedDomains = [...domainResults]
    .filter((dr) => dr.score < 100)
    .sort(
      (a, b) =>
        riskSeverity[b.riskLevel] - riskSeverity[a.riskLevel] || a.score - b.score
    );

  if (sortedDomains.length === 0) return null;

  return (
    <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
      <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center gap-3">
        <Shield className="w-5 h-5 text-slate-700" />
        <h3 className="font-bold text-base text-slate-900">
          Resumen de Riesgo por Dominio CIP
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Dominio CIP
              </th>
              <th className="text-center px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Puntuación
              </th>
              <th className="text-center px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Nivel de Riesgo
              </th>
              <th className="text-center px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Brechas
              </th>
              <th className="text-center px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedDomains.map((dr, idx) => {
              const standard = cipStandards.find((s) => s.id === dr.cipId);
              const riskColor = getRiskColor(dr.riskLevel);
              const actionCount = byDomain.get(dr.cipId)?.length ?? 0;

              return (
                <tr
                  key={dr.cipId}
                  className={cn(
                    "border-b border-slate-50 transition-colors hover:bg-slate-50/50",
                    idx % 2 === 0 ? "bg-white" : "bg-slate-50/30"
                  )}
                >
                  <td className="px-6 py-3.5">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-2 h-8 rounded-full shrink-0"
                        style={{ backgroundColor: riskColor }}
                      />
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{dr.cipId}</p>
                        <p className="text-xs text-slate-500 truncate max-w-[200px]">
                          {standard?.name ?? ""}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <div className="inline-flex items-center gap-2">
                      <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: `${dr.score}%`,
                            backgroundColor: riskColor,
                          }}
                        />
                      </div>
                      <span className="text-sm font-bold text-slate-700 tabular-nums w-10">
                        {Math.round(dr.score)}%
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: riskColor + "18",
                        color: riskColor,
                      }}
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: riskColor }}
                      />
                      {getRiskLabel(dr.riskLevel)}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <span className="text-sm font-semibold text-slate-700">
                      {dr.gaps.length}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <span className="text-sm font-bold text-slate-900">
                      {actionCount}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// Main Page
// ═══════════════════════════════════════════════════════════════════════════

export default function PlanAccionPage() {
  const evaluation = useEvaluationStore((s) => s.evaluation);
  const domainResults = useEvaluationStore((s) => s.domainResults);
  const globalScore = useEvaluationStore((s) => s.globalScore);
  const globalRiskLevel = useEvaluationStore((s) => s.globalRiskLevel);
  const exportEvaluation = useEvaluationStore((s) => s.exportEvaluation);

  const hasAnswers = evaluation && Object.keys(evaluation.answers).length > 0;
  const hasResults = domainResults.length > 0;

  // Filtered recommendations
  const filteredRecs = useMemo(
    () => (hasResults ? getFilteredRecommendations(domainResults) : []),
    [domainResults, hasResults]
  );

  // Group by priority
  const byPriority = useMemo(() => {
    const groups: Record<Priority, Recommendation[]> = {
      immediate: [],
      "short-term": [],
      "medium-term": [],
      "long-term": [],
    };
    for (const rec of filteredRecs) {
      groups[rec.priority].push(rec);
    }
    return groups;
  }, [filteredRecs]);

  // Group by domain
  const byDomain = useMemo(() => {
    const map = new Map<string, Recommendation[]>();
    for (const rec of filteredRecs) {
      if (!map.has(rec.cipId)) map.set(rec.cipId, []);
      map.get(rec.cipId)!.push(rec);
    }
    return map;
  }, [filteredRecs]);

  // Quick wins
  const quickWins = useMemo(
    () => filteredRecs.filter(isQuickWin).slice(0, 6),
    [filteredRecs]
  );

  // High priority count
  const highPriorityCount = byPriority.immediate.length + byPriority["short-term"].length;

  // Export JSON handler
  const handleExportJSON = useCallback(() => {
    const planData = {
      entityName: evaluation?.entityName,
      entityType: evaluation?.entityType,
      impactLevel: evaluation?.impactLevel,
      exportDate: new Date().toISOString(),
      globalScore,
      globalRiskLevel,
      totalActions: filteredRecs.length,
      actionsByPriority: {
        immediate: byPriority.immediate.length,
        shortTerm: byPriority["short-term"].length,
        mediumTerm: byPriority["medium-term"].length,
        longTerm: byPriority["long-term"].length,
      },
      recommendations: filteredRecs,
      domainResults,
    };
    const blob = new Blob([JSON.stringify(planData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `plan-accion-${evaluation?.entityName?.replace(/\s+/g, "-").toLowerCase() ?? "export"}-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [evaluation, filteredRecs, byPriority, domainResults, globalScore, globalRiskLevel]);

  // ── Empty State ─────────────────────────────────────────────────────────

  if (!hasAnswers || !hasResults) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <div className="relative mb-8">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
            <ShieldAlert className="w-12 h-12 text-slate-400" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center border-4 border-white">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
          </div>
        </div>
        <h1 className="text-3xl font-black text-slate-900 mb-3">
          Plan de Acción No Disponible
        </h1>
        <p className="text-slate-500 max-w-lg mb-8 leading-relaxed">
          Para generar un plan de acción con recomendaciones priorizadas, línea de tiempo
          de implementación y análisis detallado de brechas, primero debe completar la
          evaluación de cumplimiento CIP.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/evaluacion"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
          >
            <Target className="w-5 h-5" />
            Iniciar Evaluación
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Dashboard
          </Link>
        </div>
      </div>
    );
  }

  // ── Main Render ─────────────────────────────────────────────────────────

  const formattedDate = new Date(
    evaluation?.lastModified ?? ""
  ).toLocaleDateString("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12">
      {/* ═══ 1. HERO SECTION ═══════════════════════════════════════════════ */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 p-8 lg:p-10 text-white">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-indigo-500/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/[0.03] to-transparent rounded-full" />

        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                <ListChecks className="w-5 h-5 text-blue-300" />
              </div>
              <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">
                Plan de Acción
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-black tracking-tight mb-2">
              Plan de Acción de Ciberseguridad
            </h1>
            <p className="text-slate-400 text-sm">
              {evaluation?.entityName} &mdash; {formattedDate}
            </p>

            <div className="mt-5 flex items-center gap-4 flex-wrap">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2.5">
                <Activity className="w-4 h-4 text-blue-300" />
                <span className="text-sm font-semibold">
                  {filteredRecs.length} acciones identificadas
                </span>
              </div>
              {highPriorityCount > 0 && (
                <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-xl px-4 py-2.5">
                  <AlertTriangle className="w-4 h-4 text-red-300" />
                  <span className="text-sm font-semibold text-red-200">
                    {highPriorityCount} de alta prioridad
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Donut chart */}
          <PriorityDonut byPriority={byPriority} />
        </div>

        {/* Hero legend */}
        <div className="relative mt-6 pt-5 border-t border-white/10 flex items-center gap-6 flex-wrap">
          {PRIORITIES.map((p) => {
            const config = priorityConfig[p];
            return (
              <div key={p} className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: config.chartColor }}
                />
                <span className="text-xs text-slate-400">
                  {config.label} ({byPriority[p].length})
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══ 2. PRIORITY DISTRIBUTION CARDS ═══════════════════════════════ */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {PRIORITIES.map((p) => (
          <PriorityCard
            key={p}
            priority={p}
            count={byPriority[p].length}
            total={filteredRecs.length}
          />
        ))}
      </div>

      {/* ═══ 3. VISUAL TIMELINE ═══════════════════════════════════════════ */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center">
            <Layers className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Hoja de Ruta de Implementación
            </h2>
            <p className="text-xs text-slate-500">
              Cronograma de ejecución en 4 fases progresivas
            </p>
          </div>
        </div>
        <VisualTimeline byPriority={byPriority} domainResults={domainResults} />
      </div>

      {/* ═══ 4. QUICK WINS ═══════════════════════════════════════════════ */}
      {quickWins.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center">
              <Zap className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Victorias Rápidas
              </h2>
              <p className="text-xs text-slate-500">
                Acciones de bajo esfuerzo y alto impacto para resultados inmediatos
              </p>
            </div>
            <span className="ml-auto text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
              {quickWins.length} oportunidades
            </span>
          </div>

          <div className="relative rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 overflow-hidden">
            {/* Subtle decorative */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-100/40 rounded-full blur-3xl" />

            <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {quickWins.map((rec) => (
                <QuickWinCard key={rec.id} rec={rec} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═══ 5. DETAILED ACTION CARDS BY PRIORITY ═══════════════════════ */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-slate-600" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Acciones Detalladas por Prioridad
            </h2>
            <p className="text-xs text-slate-500">
              Plan completo de implementación organizado por urgencia
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {PRIORITIES.map((p) => (
            <PrioritySection
              key={p}
              priority={p}
              recs={byPriority[p]}
            />
          ))}
        </div>
      </div>

      {/* ═══ 6. DOMAIN RISK SUMMARY TABLE ═══════════════════════════════ */}
      <DomainRiskTable domainResults={domainResults} byDomain={byDomain} />

      {/* ═══ 7. BOTTOM CTA ═══════════════════════════════════════════════ */}
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg text-slate-900">
              Siguiente paso: genere su reporte
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Descargue un informe completo en PDF o exporte los datos del plan
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Dashboard
            </Link>

            <button
              onClick={handleExportJSON}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-all hover:shadow-sm"
            >
              <Download className="w-4 h-4" />
              Exportar Plan (JSON)
            </button>

            <Link
              href="/reportes"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-600/25 hover:shadow-xl hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4" />
              Generar Reporte PDF
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
