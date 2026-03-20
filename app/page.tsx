"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Shield,
  Zap,
  Building2,
  ChevronRight,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  ListChecks,
} from "lucide-react";
import { useEvaluationStore } from "@/lib/store/evaluation-store";
import { cipStandards } from "@/lib/data/cip-standards";
import { questions } from "@/lib/data/questions";
import type { EntityType, ImpactLevel } from "@/lib/data/types";
import { cn } from "@/lib/utils/helpers";
import { RiskGauge } from "@/components/dashboard/RiskGauge";
import { DomainCard } from "@/components/dashboard/DomainCard";
import { RiskHeatmap } from "@/components/dashboard/RiskHeatmap";

// ─── Welcome Screen ────────────────────────────────────────────────

function WelcomeScreen() {
  const startEvaluation = useEvaluationStore((s) => s.startEvaluation);
  const [entityName, setEntityName] = useState("");
  const [entityType, setEntityType] = useState<EntityType>("generation");
  const [impactLevel, setImpactLevel] = useState<ImpactLevel>("medium");

  const handleStart = () => {
    if (!entityName.trim()) return;
    startEvaluation(entityName.trim(), entityType, impactLevel);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4">
      {/* Hero */}
      <div className="w-full max-w-2xl text-center mb-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/25 mb-6">
          <Shield className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Bienvenido a{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            CyberCEN
          </span>
        </h1>
        <p className="mt-4 text-lg text-slate-500 max-w-lg mx-auto leading-relaxed">
          Herramienta de autoevaluación del Estándar de Ciberseguridad del
          Coordinador Eléctrico Nacional
        </p>
      </div>

      {/* Form card */}
      <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 p-8">
        <h2 className="text-xl font-bold text-slate-800 mb-6">
          Configurar Evaluación
        </h2>

        {/* Entity name */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            Nombre de la Entidad
          </label>
          <input
            type="text"
            value={entityName}
            onChange={(e) => setEntityName(e.target.value)}
            placeholder="Ej: Empresa Eléctrica del Norte S.A."
            className={cn(
              "w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-800",
              "placeholder:text-slate-400",
              "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
              "transition-colors"
            )}
          />
        </div>

        {/* Entity type */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            Tipo de Entidad
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(
              [
                {
                  value: "generation" as EntityType,
                  label: "Generación",
                  icon: Zap,
                  desc: "Centrales y plantas",
                },
                {
                  value: "transmission" as EntityType,
                  label: "Transmisión",
                  icon: BarChart3,
                  desc: "Líneas y subestaciones",
                },
                {
                  value: "distribution" as EntityType,
                  label: "Distribución",
                  icon: Building2,
                  desc: "Redes de distribución",
                },
              ] as const
            ).map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setEntityType(opt.value)}
                className={cn(
                  "flex flex-col items-center gap-1.5 rounded-lg border-2 p-3 text-center transition-all",
                  entityType === opt.value
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                )}
              >
                <opt.icon
                  className={cn(
                    "w-5 h-5",
                    entityType === opt.value
                      ? "text-blue-500"
                      : "text-slate-400"
                  )}
                />
                <span className="text-xs font-semibold">{opt.label}</span>
                <span className="text-[10px] text-slate-400 leading-tight">
                  {opt.desc}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Impact level */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            Nivel de Impacto
          </label>
          <select
            value={impactLevel}
            onChange={(e) => setImpactLevel(e.target.value as ImpactLevel)}
            className={cn(
              "w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-800",
              "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
              "transition-colors bg-white"
            )}
          >
            <option value="high">
              Alto - Instalaciones críticas para el SEN
            </option>
            <option value="medium">
              Medio - Impacto significativo en operaciones
            </option>
            <option value="low">
              Bajo - Impacto limitado en el sistema
            </option>
          </select>
          <p className="mt-1.5 text-xs text-slate-400">
            El nivel de impacto determina qué controles CIP aplican a su
            organización.
          </p>
        </div>

        {/* Start button */}
        <button
          type="button"
          onClick={handleStart}
          disabled={!entityName.trim()}
          className={cn(
            "w-full flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white",
            "bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/25",
            "hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5",
            "transition-all duration-200",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"
          )}
        >
          Iniciar Evaluación
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 w-full max-w-2xl">
        {[
          {
            icon: ListChecks,
            title: "12 Dominios CIP",
            desc: "Evaluación integral basada en estándares NERC CIP",
          },
          {
            icon: AlertTriangle,
            title: "Análisis de Brechas",
            desc: "Identifica vulnerabilidades y prioriza remediación",
          },
          {
            icon: CheckCircle2,
            title: "Plan de Acción",
            desc: "Recomendaciones concretas con plazos y recursos",
          },
        ].map((feat) => (
          <div
            key={feat.title}
            className="flex flex-col items-center text-center rounded-xl border border-slate-100 bg-white/60 p-4"
          >
            <feat.icon className="w-6 h-6 text-blue-500 mb-2" />
            <span className="text-sm font-semibold text-slate-700">
              {feat.title}
            </span>
            <span className="text-xs text-slate-400 mt-1">{feat.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Dashboard Screen ──────────────────────────────────────────────

function DashboardScreen() {
  const evaluation = useEvaluationStore((s) => s.evaluation)!;
  const domainResults = useEvaluationStore((s) => s.domainResults);
  const globalScore = useEvaluationStore((s) => s.globalScore);
  const globalRiskLevel = useEvaluationStore((s) => s.globalRiskLevel);

  const stats = useMemo(() => {
    const totalQuestions = domainResults.reduce(
      (sum, r) => sum + r.totalQuestions,
      0
    );
    const answeredQuestions = domainResults.reduce(
      (sum, r) => sum + r.answeredQuestions,
      0
    );
    const domainsComplete = domainResults.filter(
      (r) => r.answeredQuestions >= r.totalQuestions && r.totalQuestions > 0
    ).length;

    return { totalQuestions, answeredQuestions, domainsComplete };
  }, [domainResults]);

  // Fallback: compute total questions from questions data if no domain results yet
  const totalQuestionsDisplay =
    stats.totalQuestions > 0
      ? stats.totalQuestions
      : questions.filter((q) =>
          q.applicableImpactLevels.includes(evaluation.impactLevel) &&
          q.applicableEntityTypes.includes(evaluation.entityType)
        ).length;

  const isEnoughForResults =
    stats.answeredQuestions > 0 &&
    stats.answeredQuestions >= totalQuestionsDisplay * 0.3;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">
          Panel de Control
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Evaluación de {evaluation.entityName} &middot;{" "}
          {evaluation.entityType === "generation"
            ? "Generación"
            : evaluation.entityType === "transmission"
              ? "Transmisión"
              : "Distribución"}{" "}
          &middot; Impacto{" "}
          {evaluation.impactLevel === "high"
            ? "Alto"
            : evaluation.impactLevel === "medium"
              ? "Medio"
              : "Bajo"}
        </p>
      </div>

      {/* Top stats row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Risk gauge */}
        <div className="md:col-span-1 flex justify-center rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <RiskGauge score={globalScore} riskLevel={globalRiskLevel} />
        </div>

        {/* Stat cards */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard
            label="Total Preguntas"
            value={totalQuestionsDisplay}
            icon={<ListChecks className="w-5 h-5 text-blue-500" />}
            accent="blue"
          />
          <StatCard
            label="Respondidas"
            value={stats.answeredQuestions}
            icon={<CheckCircle2 className="w-5 h-5 text-green-500" />}
            accent="green"
            sub={
              totalQuestionsDisplay > 0
                ? `${Math.round(
                    (stats.answeredQuestions / totalQuestionsDisplay) * 100
                  )}% completado`
                : undefined
            }
          />
          <StatCard
            label="Dominios Completos"
            value={`${stats.domainsComplete}/12`}
            icon={<Shield className="w-5 h-5 text-purple-500" />}
            accent="purple"
          />
        </div>
      </div>

      {/* Domain cards grid */}
      <div>
        <h2 className="text-lg font-bold text-slate-800 mb-4">
          Dominios CIP
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cipStandards.map((standard) => {
            const result = domainResults.find(
              (r) => r.cipId === standard.id
            );

            // Count applicable questions for this domain
            const applicableQuestions = questions.filter(
              (q) =>
                q.cipId === standard.id &&
                q.applicableImpactLevels.includes(evaluation.impactLevel) &&
                q.applicableEntityTypes.includes(evaluation.entityType)
            );

            const totalQ = result?.totalQuestions ?? applicableQuestions.length;
            const answeredQ = result?.answeredQuestions ?? 0;
            const progress = totalQ > 0 ? (answeredQ / totalQ) * 100 : 0;
            const score = result?.score ?? 0;
            const riskLevel = result?.riskLevel ?? "low";

            return (
              <DomainCard
                key={standard.id}
                cipId={standard.id}
                name={standard.name}
                score={score}
                riskLevel={riskLevel}
                progress={progress}
                totalQuestions={totalQ}
                answeredQuestions={answeredQ}
              />
            );
          })}
        </div>
      </div>

      {/* Heatmap */}
      <RiskHeatmap domainResults={domainResults} standards={cipStandards} />

      {/* Results CTA */}
      {isEnoughForResults && (
        <div className="flex justify-center">
          <Link
            href="/resultados"
            className={cn(
              "inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-white",
              "bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/25",
              "hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5",
              "transition-all duration-200"
            )}
          >
            Ver Resultados
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}

// ─── Stat Card ─────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  icon,
  accent,
  sub,
}: {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  accent: "blue" | "green" | "purple";
  sub?: string;
}) {
  const accentBg = {
    blue: "bg-blue-50",
    green: "bg-green-50",
    purple: "bg-purple-50",
  };

  return (
    <div className="flex flex-col justify-center rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <div
          className={cn(
            "flex items-center justify-center w-9 h-9 rounded-lg",
            accentBg[accent]
          )}
        >
          {icon}
        </div>
        <span className="text-sm font-medium text-slate-500">{label}</span>
      </div>
      <span className="text-3xl font-extrabold text-slate-900">{value}</span>
      {sub && (
        <span className="text-xs text-slate-400 mt-1">{sub}</span>
      )}
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────

export default function Home() {
  const evaluation = useEvaluationStore((s) => s.evaluation);

  if (!evaluation) {
    return <WelcomeScreen />;
  }

  return <DashboardScreen />;
}
