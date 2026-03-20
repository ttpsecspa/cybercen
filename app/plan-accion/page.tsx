"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  Target,
  ArrowLeft,
  FileText,
  ChevronDown,
  ChevronRight,
  Clock,
  Zap,
  CalendarClock,
  CalendarRange,
  CheckCircle2,
  Circle,
  AlertTriangle,
  ListChecks,
  Rocket,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils/helpers";
import { useEvaluationStore } from "@/lib/store/evaluation-store";
import { cipStandards } from "@/lib/data/cip-standards";
import { recommendations } from "@/lib/data/recommendations";
import { getRiskColor, getRiskLabel } from "@/lib/engine/scoring";
import type { DomainResult, RiskLevel, Recommendation } from "@/lib/data/types";

// Risk level severity ordering (higher index = more severe)
const riskSeverity: Record<RiskLevel, number> = {
  optimal: 0,
  low: 1,
  medium: 2,
  high: 3,
  critical: 4,
};

const priorityConfig = {
  immediate: {
    label: "Inmediato",
    sublabel: "0-3 meses",
    color: "bg-red-500",
    lightBg: "bg-red-50 border-red-200",
    text: "text-red-700",
    badge: "bg-red-100 text-red-700 border-red-200",
    icon: Zap,
  },
  "short-term": {
    label: "Corto plazo",
    sublabel: "3-6 meses",
    color: "bg-orange-500",
    lightBg: "bg-orange-50 border-orange-200",
    text: "text-orange-700",
    badge: "bg-orange-100 text-orange-700 border-orange-200",
    icon: Clock,
  },
  "medium-term": {
    label: "Mediano plazo",
    sublabel: "6-12 meses",
    color: "bg-amber-500",
    lightBg: "bg-amber-50 border-amber-200",
    text: "text-amber-700",
    badge: "bg-amber-100 text-amber-700 border-amber-200",
    icon: CalendarClock,
  },
  "long-term": {
    label: "Largo plazo",
    sublabel: "12-24 meses",
    color: "bg-blue-500",
    lightBg: "bg-blue-50 border-blue-200",
    text: "text-blue-700",
    badge: "bg-blue-100 text-blue-700 border-blue-200",
    icon: CalendarRange,
  },
} as const;

type Priority = keyof typeof priorityConfig;

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
    // Show recommendations that match the domain risk level or worse (more severe)
    return riskSeverity[rec.riskLevel] >= riskSeverity[domainRisk];
  });
}

function isQuickWin(rec: Recommendation): boolean {
  const effort = rec.estimatedEffort.toLowerCase();
  return (
    effort.includes("1-2 semanas") ||
    effort.includes("1 semana") ||
    effort.includes("2-3 dias") ||
    effort.includes("1-2 dias") ||
    effort.includes("inmediato")
  );
}

// ─── Summary Card ───────────────────────────────────────────────────────────

function SummaryCard({
  label,
  value,
  icon: Icon,
  colorClass,
  bgClass,
}: {
  label: string;
  value: number;
  icon: React.ComponentType<{ className?: string }>;
  colorClass: string;
  bgClass: string;
}) {
  return (
    <div className={cn("rounded-2xl border p-6 flex items-center gap-4", bgClass)}>
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-sm",
          colorClass
        )}
      >
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-2xl font-black text-slate-900">{value}</p>
        <p className="text-sm text-slate-500 font-medium">{label}</p>
      </div>
    </div>
  );
}

// ─── Recommendation Card ────────────────────────────────────────────────────

function RecommendationCard({
  rec,
  compact = false,
}: {
  rec: Recommendation;
  compact?: boolean;
}) {
  const [checked, setChecked] = useState(false);
  const pConfig = priorityConfig[rec.priority];
  const standard = cipStandards.find((s) => s.id === rec.cipId);

  return (
    <div
      className={cn(
        "rounded-xl border bg-white p-4 transition-all duration-200",
        checked
          ? "border-green-200 bg-green-50/50 opacity-75"
          : "border-slate-200 hover:border-slate-300 hover:shadow-sm"
      )}
    >
      <div className="flex items-start gap-3">
        {/* Checkbox */}
        <button
          onClick={() => setChecked(!checked)}
          className="mt-0.5 shrink-0 transition-colors"
          aria-label={checked ? "Marcar como pendiente" : "Marcar como completado"}
        >
          {checked ? (
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          ) : (
            <Circle className="w-5 h-5 text-slate-300 hover:text-slate-400" />
          )}
        </button>

        <div className="flex-1 min-w-0">
          {/* Title row */}
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <h4
              className={cn(
                "font-semibold text-sm",
                checked ? "line-through text-slate-400" : "text-slate-900"
              )}
            >
              {rec.title}
            </h4>
            <span
              className={cn(
                "inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold rounded-full border shrink-0",
                pConfig.badge
              )}
            >
              <pConfig.icon className="w-3 h-3" />
              {pConfig.label}
            </span>
          </div>

          {/* Description */}
          {!compact && (
            <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
              {rec.description}
            </p>
          )}

          {/* Meta row */}
          <div className="flex items-center gap-3 mt-2.5 flex-wrap">
            <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
              {rec.cipId}
              {standard && ` - ${standard.name}`}
            </span>
            <span
              className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md"
              style={{
                backgroundColor: getRiskColor(rec.riskLevel) + "18",
                color: getRiskColor(rec.riskLevel),
              }}
            >
              Riesgo {getRiskLabel(rec.riskLevel)}
            </span>
            {!compact && (
              <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                <Clock className="w-3 h-3" />
                {rec.estimatedEffort}
              </span>
            )}
          </div>

          {/* Resources */}
          {!compact && (
            <div className="mt-2.5 text-xs text-slate-400">
              <span className="font-medium text-slate-500">Recursos:</span>{" "}
              {rec.resources}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Domain Accordion ───────────────────────────────────────────────────────

function DomainAccordion({
  cipId,
  domainResult,
  recs,
}: {
  cipId: string;
  domainResult: DomainResult;
  recs: Recommendation[];
}) {
  const [open, setOpen] = useState(false);
  const standard = cipStandards.find((s) => s.id === cipId);
  const riskColor = getRiskColor(domainResult.riskLevel);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
            style={{ backgroundColor: riskColor }}
          >
            {Math.round(domainResult.score)}
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-sm">
              {cipId} &mdash; {standard?.name ?? cipId}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {recs.length} recomendacion{recs.length !== 1 ? "es" : ""} &middot;{" "}
              Riesgo{" "}
              <span className="font-semibold" style={{ color: riskColor }}>
                {getRiskLabel(domainResult.riskLevel)}
              </span>
              {" "}&middot;{" "}
              {domainResult.gaps.length} brecha{domainResult.gaps.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Priority badges summary */}
          <div className="hidden sm:flex items-center gap-1">
            {(["immediate", "short-term", "medium-term", "long-term"] as Priority[]).map(
              (p) => {
                const count = recs.filter((r) => r.priority === p).length;
                if (count === 0) return null;
                return (
                  <span
                    key={p}
                    className={cn(
                      "inline-flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full",
                      priorityConfig[p].badge
                    )}
                  >
                    {count}
                  </span>
                );
              }
            )}
          </div>
          {open ? (
            <ChevronDown className="w-5 h-5 text-slate-400" />
          ) : (
            <ChevronRight className="w-5 h-5 text-slate-400" />
          )}
        </div>
      </button>

      {/* Body */}
      {open && (
        <div className="border-t border-slate-100 p-5 space-y-3 bg-slate-50/50">
          {recs
            .sort(
              (a, b) =>
                riskSeverity[b.riskLevel] - riskSeverity[a.riskLevel]
            )
            .map((rec) => (
              <RecommendationCard key={rec.id} rec={rec} />
            ))}
        </div>
      )}
    </div>
  );
}

// ─── Timeline Column ────────────────────────────────────────────────────────

function TimelineColumn({
  priority,
  recs,
}: {
  priority: Priority;
  recs: Recommendation[];
}) {
  const config = priorityConfig[priority];
  const Icon = config.icon;

  return (
    <div className="flex flex-col">
      {/* Column header */}
      <div
        className={cn(
          "rounded-t-xl border px-4 py-3 flex items-center gap-2",
          config.lightBg
        )}
      >
        <Icon className={cn("w-4 h-4", config.text)} />
        <div>
          <h4 className={cn("font-bold text-sm", config.text)}>{config.label}</h4>
          <p className="text-xs text-slate-500">{config.sublabel}</p>
        </div>
        <span
          className={cn(
            "ml-auto inline-flex items-center justify-center w-7 h-7 text-sm font-bold rounded-full",
            config.badge
          )}
        >
          {recs.length}
        </span>
      </div>

      {/* Column body */}
      <div className="border border-t-0 border-slate-200 rounded-b-xl bg-white p-3 space-y-2 flex-1 min-h-[120px]">
        {recs.length === 0 ? (
          <p className="text-xs text-slate-400 italic text-center py-4">
            Sin recomendaciones
          </p>
        ) : (
          recs
            .sort((a, b) => riskSeverity[b.riskLevel] - riskSeverity[a.riskLevel])
            .map((rec) => {
              const riskColor = getRiskColor(rec.riskLevel);
              return (
                <div
                  key={rec.id}
                  className="rounded-lg border border-slate-100 bg-slate-50/50 p-3 hover:bg-white hover:border-slate-200 transition-colors"
                >
                  <div className="flex items-start gap-2">
                    <div
                      className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: riskColor }}
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-800 leading-snug">
                        {rec.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                        <span className="text-[10px] font-medium text-slate-400">
                          {rec.cipId}
                        </span>
                        <span
                          className="text-[10px] font-semibold px-1.5 py-0.5 rounded"
                          style={{
                            backgroundColor: riskColor + "18",
                            color: riskColor,
                          }}
                        >
                          {getRiskLabel(rec.riskLevel)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
        )}
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

  const hasAnswers = evaluation && Object.keys(evaluation.answers).length > 0;
  const hasResults = domainResults.length > 0;

  // Filtered recommendations based on domain risk levels
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
    () => filteredRecs.filter(isQuickWin),
    [filteredRecs]
  );

  // Domains with gaps (score < 100)
  const domainsWithGaps = useMemo(
    () => domainResults.filter((dr) => dr.score < 100),
    [domainResults]
  );

  // ── Empty state ──────────────────────────────────────────────────────────

  if (!hasAnswers || !hasResults) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-6">
          <ShieldAlert className="w-10 h-10 text-slate-400" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">
          Plan de Accion No Disponible
        </h1>
        <p className="text-slate-500 max-w-md mb-8">
          Complete la evaluacion primero para generar el plan de accion con
          recomendaciones priorizadas y linea de tiempo.
        </p>
        <Link
          href="/evaluacion"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25"
        >
          <Target className="w-5 h-5" />
          Iniciar Evaluacion
        </Link>
      </div>
    );
  }

  // ── Summary stats ────────────────────────────────────────────────────────

  const summaryCards = [
    {
      label: "Total Recomendaciones",
      value: filteredRecs.length,
      icon: ListChecks,
      colorClass: "text-indigo-600",
      bgClass: "bg-indigo-50 border-indigo-100",
    },
    {
      label: "Acciones Inmediatas",
      value: byPriority.immediate.length,
      icon: Zap,
      colorClass: "text-red-600",
      bgClass: "bg-red-50 border-red-100",
    },
    {
      label: "Corto Plazo",
      value: byPriority["short-term"].length,
      icon: Clock,
      colorClass: "text-orange-600",
      bgClass: "bg-orange-50 border-orange-100",
    },
    {
      label: "Mediano Plazo",
      value: byPriority["medium-term"].length,
      icon: CalendarClock,
      colorClass: "text-amber-600",
      bgClass: "bg-amber-50 border-amber-100",
    },
  ];

  // ── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Plan de Accion</h1>
          <p className="text-sm text-slate-500 mt-1">
            {evaluation?.entityName} &mdash;{" "}
            {new Date(evaluation?.lastModified ?? "").toLocaleDateString("es-CL")}
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Dashboard
          </Link>
          <Link
            href="/reportes"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-600/25"
          >
            <FileText className="w-4 h-4" />
            Generar Reporte
          </Link>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryCards.map((card) => (
          <SummaryCard key={card.label} {...card} />
        ))}
      </div>

      {/* ── Timeline Visualization ─────────────────────────────────────── */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Layers className="w-5 h-5 text-slate-700" />
          <h2 className="text-lg font-bold text-slate-900">
            Linea de Tiempo de Implementacion
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {(["immediate", "short-term", "medium-term", "long-term"] as Priority[]).map(
            (p) => (
              <TimelineColumn key={p} priority={p} recs={byPriority[p]} />
            )
          )}
        </div>
      </div>

      {/* ── Quick Wins ─────────────────────────────────────────────────── */}
      {quickWins.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Rocket className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg font-bold text-slate-900">
              Victorias Rapidas
            </h2>
            <span className="ml-2 text-xs font-medium text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
              Bajo esfuerzo, alto impacto
            </span>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {quickWins.map((rec) => (
                <RecommendationCard key={rec.id} rec={rec} compact />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Detailed Recommendations by Domain ─────────────────────────── */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-slate-700" />
          <h2 className="text-lg font-bold text-slate-900">
            Recomendaciones por Dominio CIP
          </h2>
          <span className="ml-2 text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
            {domainsWithGaps.length} dominio{domainsWithGaps.length !== 1 ? "s" : ""} con
            brechas
          </span>
        </div>

        <div className="space-y-3">
          {domainsWithGaps
            .sort(
              (a, b) =>
                riskSeverity[b.riskLevel] - riskSeverity[a.riskLevel] ||
                a.score - b.score
            )
            .map((dr) => {
              const domainRecs = byDomain.get(dr.cipId) ?? [];
              if (domainRecs.length === 0) return null;
              return (
                <DomainAccordion
                  key={dr.cipId}
                  cipId={dr.cipId}
                  domainResult={dr}
                  recs={domainRecs}
                />
              );
            })}
        </div>
      </div>

      {/* ── Bottom Navigation ──────────────────────────────────────────── */}
      <div className="flex items-center justify-between py-6 border-t border-slate-200">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al Dashboard
        </Link>
        <Link
          href="/reportes"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-600/25"
        >
          <FileText className="w-4 h-4" />
          Generar Reporte
        </Link>
      </div>
    </div>
  );
}
