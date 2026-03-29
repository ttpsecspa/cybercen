"use client";

import Link from "next/link";
import type { RiskLevel } from "@/lib/data/types";
import { cn } from "@/lib/utils/helpers";
import { ProgressRing } from "./ProgressRing";

const RISK_BADGE: Record<RiskLevel, { bg: string; text: string; label: string }> = {
  critical: { bg: "bg-red-100 text-red-800", text: "text-red-600", label: "Crítico" },
  high: { bg: "bg-orange-100 text-orange-800", text: "text-orange-600", label: "Alto" },
  medium: { bg: "bg-yellow-100 text-yellow-800", text: "text-yellow-600", label: "Medio" },
  low: { bg: "bg-blue-100 text-blue-800", text: "text-blue-600", label: "Bajo" },
  optimal: { bg: "bg-green-100 text-green-800", text: "text-green-600", label: "Óptimo" },
};

const RISK_PROGRESS_COLOR: Record<RiskLevel, string> = {
  critical: "#EF4444",
  high: "#F97316",
  medium: "#EAB308",
  low: "#3B82F6",
  optimal: "#22C55E",
};

interface DomainCardProps {
  cipId: string;
  name: string;
  score: number;
  riskLevel: RiskLevel;
  progress: number;
  totalQuestions: number;
  answeredQuestions: number;
}

export function DomainCard({
  cipId,
  name,
  score,
  riskLevel,
  progress,
  totalQuestions,
  answeredQuestions,
}: DomainCardProps) {
  const badge = RISK_BADGE[riskLevel];
  const isNotStarted = answeredQuestions === 0;
  const isComplete = answeredQuestions >= totalQuestions && totalQuestions > 0;
  const isAtRisk = riskLevel === "critical" || riskLevel === "high";

  const borderClass = isNotStarted
    ? "border-slate-200"
    : isComplete
      ? "border-green-400"
      : isAtRisk
        ? "border-red-400"
        : "border-blue-400";

  return (
    <Link
      href={`/evaluacion/${cipId}`}
      className={cn(
        "group relative flex flex-col gap-3 rounded-2xl border bg-white p-6 shadow-sm",
        "transition-all duration-200 hover:shadow-md hover:border-blue-300 hover:-translate-y-0.5",
        isNotStarted ? "border-slate-200" : isComplete ? "border-emerald-200" : isAtRisk ? "border-red-200" : "border-blue-200"
      )}
    >
      {/* Header row */}
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            {cipId}
          </span>
          <h3 className="mt-1 text-sm font-semibold text-slate-800 leading-snug line-clamp-2">
            {name}
          </h3>
        </div>
        <ProgressRing
          progress={progress}
          size={52}
          color={RISK_PROGRESS_COLOR[riskLevel]}
        />
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
              badge.bg
            )}
          >
            {badge.label}
          </span>
          {isComplete && (
            <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
              Completo
            </span>
          )}
        </div>
        <span className="text-xs text-slate-400">
          {answeredQuestions}/{totalQuestions}
        </span>
      </div>

      {/* Score indicator bar */}
      <div className="h-1 w-full rounded-full bg-slate-100 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${score}%`,
            backgroundColor: RISK_PROGRESS_COLOR[riskLevel],
          }}
        />
      </div>
    </Link>
  );
}
