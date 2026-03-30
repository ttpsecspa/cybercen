"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Shield,
  ShieldCheck,
  Zap,
  Building2,
  ChevronRight,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  ListChecks,
  RotateCcw,
  Lock,
  Eye,
  UserX,
  Info,
  GraduationCap,
  Ban,
  Wifi,
  X,
} from "lucide-react";
import { useEvaluationStore } from "@/lib/store/evaluation-store";
import { cipStandards } from "@/lib/data/cip-standards";
import { questions } from "@/lib/data/questions";
import type { AnswerValue, DomainResult, EntityType, ImpactLevel, RiskLevel } from "@/lib/data/types";
import { cn } from "@/lib/utils/helpers";
import { RiskGauge } from "@/components/dashboard/RiskGauge";
import { DomainCard } from "@/components/dashboard/DomainCard";
import { RiskHeatmap } from "@/components/dashboard/RiskHeatmap";

// ─── Landing/Cover Page ────────────────────────────────────────────

function LandingPage() {
  const [showConfig, setShowConfig] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-12">
      {/* Hero */}
      <div className="w-full max-w-3xl text-center mb-10">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-500 shadow-xl shadow-blue-200 mb-8">
          <Shield className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            CyberCEN
          </span>
        </h1>
        <p className="mt-2 text-lg md:text-xl font-bold text-slate-700">
          Autoevaluación del Estándar de Ciberseguridad
        </p>
        <p className="mt-2 text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
          Herramienta gratuita para evaluar el cumplimiento del Estándar del
          Coordinador Eléctrico Nacional, basado en NERC CIP.
          12 dominios, 120 controles, análisis de riesgo y plan de acción.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full max-w-lg">
        <button
          type="button"
          onClick={() => setShowConfig(true)}
          className={cn(
            "flex-1 w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-bold text-white cursor-pointer",
            "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200",
            "hover:-translate-y-0.5 transition-all duration-200"
          )}
        >
          <ShieldCheck className="w-5 h-5" />
          Iniciar con datos reales
        </button>
        <DemoButton />
      </div>

      {/* Config modal */}
      {showConfig && <ConfigModal onClose={() => setShowConfig(false)} />}

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
        {[
          {
            icon: ListChecks,
            title: "12 Dominios CIP",
            desc: "Evaluación integral basada en estándares NERC CIP-002 a CIP-014",
          },
          {
            icon: AlertTriangle,
            title: "Análisis de Brechas",
            desc: "Identifica vulnerabilidades y prioriza remediación por riesgo",
          },
          {
            icon: CheckCircle2,
            title: "Plan de Acción",
            desc: "Recomendaciones concretas con plazos y recursos estimados",
          },
        ].map((feat) => (
          <div
            key={feat.title}
            className="flex flex-col items-center text-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-300 hover:-translate-y-0.5 transition-all"
          >
            <feat.icon className="w-6 h-6 text-blue-500 mb-3" />
            <span className="text-sm font-bold text-slate-900">
              {feat.title}
            </span>
            <span className="text-xs text-slate-500 leading-relaxed mt-1.5">{feat.desc}</span>
          </div>
        ))}
      </div>

      {/* Big Disclaimer Banner */}
      <div className="w-full max-w-3xl mt-10 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 p-6 shadow-lg shadow-amber-100/50">
        <div className="flex items-center justify-center gap-3 mb-4">
          <AlertTriangle className="w-7 h-7 text-amber-600" />
          <h3 className="text-lg font-extrabold text-amber-900 uppercase tracking-wider">
            Aviso Importante
          </h3>
          <AlertTriangle className="w-7 h-7 text-amber-600" />
        </div>

        <div className="rounded-xl bg-white/70 border border-amber-200 p-5 mb-4">
          <div className="flex items-start gap-3 mb-3">
            <GraduationCap className="w-6 h-6 text-amber-600 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-bold text-slate-800">
                Plataforma sin fines de lucro, con fines exclusivamente académicos y educativos.
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Esta herramienta ofrece un autodiagnóstico orientativo del nivel de madurez en ciberseguridad basado en estándares NERC CIP. No constituye asesoría profesional, legal ni técnica vinculante.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-3">
            <Ban className="w-6 h-6 text-red-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-bold text-slate-800">
                No afiliada al Coordinador Eléctrico Nacional (CEN).
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Esta plataforma es un desarrollo independiente. No tiene vinculación, respaldo ni asociación de ningún tipo con el Coordinador Eléctrico Nacional de Chile ni con ninguna entidad gubernamental o regulatoria.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-bold text-slate-800">
                No reemplaza una auditoría formal de ciberseguridad.
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Los resultados son referenciales. Para cumplimiento regulatorio, consulte con profesionales certificados en seguridad de la información.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex items-center gap-2 rounded-lg bg-white/60 border border-slate-200 px-3 py-2.5">
            <Lock className="w-5 h-5 text-blue-500 shrink-0" />
            <p className="text-xs text-slate-600">
              <span className="font-bold text-slate-700">100% privada.</span>{" "}
              Todo se procesa en su navegador. Nada se envía a servidores externos.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white/60 border border-slate-200 px-3 py-2.5">
            <UserX className="w-5 h-5 text-blue-500 shrink-0" />
            <p className="text-xs text-slate-600">
              <span className="font-bold text-slate-700">Sin registro ni login.</span>{" "}
              No recopilamos datos personales ni credenciales.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white/60 border border-slate-200 px-3 py-2.5">
            <Eye className="w-5 h-5 text-blue-500 shrink-0" />
            <p className="text-xs text-slate-600">
              <span className="font-bold text-slate-700">Sin tracking ni cookies.</span>{" "}
              No usamos analytics ni rastreadores de ningún tipo.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white/60 border border-slate-200 px-3 py-2.5">
            <Wifi className="w-5 h-5 text-blue-500 shrink-0" />
            <p className="text-xs text-slate-600">
              <span className="font-bold text-slate-700">Funciona sin conexión.</span>{" "}
              Una vez cargada, puede usarse completamente offline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Demo Button ───────────────────────────────────────────────────

function DemoButton() {
  const startEvaluation = useEvaluationStore((s) => s.startEvaluation);
  const setAnswer = useEvaluationStore((s) => s.setAnswer);
  const updateResults = useEvaluationStore((s) => s.updateResults);

  const handleDemo = () => {
    // Start a demo evaluation
    startEvaluation("Demo — Empresa Ficticia", "generation", "medium");

    // Pre-fill answers with a realistic mix
    const demoAnswers: Record<string, AnswerValue> = {};
    const applicableQuestions = questions.filter(
      (q) =>
        q.applicableImpactLevels.includes("medium") &&
        q.applicableEntityTypes.includes("generation")
    );

    // Simulate a company with ~62% compliance (medium risk)
    // Pattern: first domains better, later domains worse
    const demoPattern: Record<string, number> = {
      "CIP-002": 0.8,  // 80% - well categorized
      "CIP-003": 0.7,  // 70% - decent policies
      "CIP-004": 0.6,  // 60% - training gaps
      "CIP-005": 0.75, // 75% - good perimeters
      "CIP-006": 0.65, // 65% - physical OK
      "CIP-007": 0.5,  // 50% - system mgmt weak
      "CIP-008": 0.4,  // 40% - incident response lacking
      "CIP-009": 0.35, // 35% - recovery plans weak
      "CIP-010": 0.55, // 55% - change mgmt partial
      "CIP-011": 0.7,  // 70% - info protection decent
      "CIP-013": 0.3,  // 30% - supply chain critical
      "CIP-014": 0.45, // 45% - physical infra needs work
    };

    for (const q of applicableQuestions) {
      const threshold = demoPattern[q.cipId] ?? 0.5;
      const rand = seededRandom(q.id);
      let value: AnswerValue;
      if (rand < threshold * 0.7) {
        value = "yes";
      } else if (rand < threshold) {
        value = "partial";
      } else {
        value = "no";
      }
      demoAnswers[q.id] = value;
      setAnswer(q.id, value, "");
    }

    // Calculate results
    const domainResults: DomainResult[] = cipStandards.map((std) => {
      const domainQs = applicableQuestions.filter((q) => q.cipId === std.id);
      let totalScore = 0;
      let answered = 0;
      const gaps: string[] = [];

      for (const q of domainQs) {
        const val = demoAnswers[q.id];
        if (val !== null) answered++;
        if (val === "yes") totalScore += 100;
        else if (val === "partial") {
          totalScore += 50;
          gaps.push(`[${std.name}] ${q.text} (Cumplimiento parcial)`);
        } else {
          gaps.push(`[${std.name}] ${q.text} (No cumple)`);
        }
      }

      const score = domainQs.length > 0 ? Math.round((totalScore / domainQs.length) * 100) / 100 : 0;
      const riskLevel: RiskLevel = score <= 25 ? "critical" : score <= 50 ? "high" : score <= 75 ? "medium" : score <= 90 ? "low" : "optimal";

      return { cipId: std.id, score, riskLevel, totalQuestions: domainQs.length, answeredQuestions: answered, gaps };
    });

    let weightedSum = 0;
    let totalWeight = 0;
    for (const r of domainResults) {
      const std = cipStandards.find((s) => s.id === r.cipId);
      const w = std?.weight ?? 0;
      weightedSum += r.score * w;
      totalWeight += w;
    }
    const globalScore = totalWeight > 0 ? Math.round((weightedSum / totalWeight) * 100) / 100 : 0;
    const globalRiskLevel: RiskLevel = globalScore <= 25 ? "critical" : globalScore <= 50 ? "high" : globalScore <= 75 ? "medium" : globalScore <= 90 ? "low" : "optimal";

    updateResults(domainResults, globalScore, globalRiskLevel);
  };

  return (
    <button
      type="button"
      onClick={handleDemo}
      className={cn(
        "flex-1 w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-bold cursor-pointer",
        "bg-white border-2 border-slate-300 text-slate-700",
        "hover:border-blue-400 hover:text-blue-700 hover:bg-blue-50",
        "hover:-translate-y-0.5 transition-all duration-200"
      )}
    >
      <Eye className="w-5 h-5" />
      Ver Demo
    </button>
  );
}

/** Simple seeded PRNG from a string (deterministic demo data) */
function seededRandom(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(Math.sin(hash)) % 1;
}

// ─── Config Modal ──────────────────────────────────────────────────

function ConfigModal({ onClose }: { onClose: () => void }) {
  const startEvaluation = useEvaluationStore((s) => s.startEvaluation);
  const [entityType, setEntityType] = useState<EntityType>("generation");
  const [impactLevel, setImpactLevel] = useState<ImpactLevel>("medium");

  const handleStart = () => {
    startEvaluation("Evaluación Anónima", entityType, impactLevel);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4" onClick={onClose}>
      <div
        className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-2xl p-6 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-extrabold text-slate-900">
            Configurar Evaluación
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
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
          className={cn(
            "w-full flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-base font-bold text-white cursor-pointer",
            "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200",
            "hover:-translate-y-0.5",
            "transition-all duration-200"
          )}
        >
          Iniciar Evaluación
          <ChevronRight className="w-4 h-4" />
        </button>
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
  const resetEvaluation = useEvaluationStore((s) => s.resetEvaluation);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

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
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900">
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

        {/* Reset button */}
        <div className="relative">
          {!showResetConfirm ? (
            <button
              type="button"
              onClick={() => setShowResetConfirm(true)}
              className={cn(
                "flex items-center gap-2 rounded-lg border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-red-600",
                "hover:bg-red-50 hover:border-red-300 transition-colors"
              )}
            >
              <RotateCcw className="w-4 h-4" />
              Reiniciar Progreso
            </button>
          ) : (
            <div className="flex items-center gap-2 rounded-xl border border-red-300 bg-red-50 px-4 py-2.5 shadow-lg">
              <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
              <span className="text-sm text-red-700 font-medium whitespace-nowrap">
                ¿Eliminar todo?
              </span>
              <button
                type="button"
                onClick={() => {
                  resetEvaluation();
                  setShowResetConfirm(false);
                }}
                className="rounded-lg bg-red-600 px-3 py-1 text-xs font-bold text-white hover:bg-red-700 transition-colors"
              >
                Sí, reiniciar
              </button>
              <button
                type="button"
                onClick={() => setShowResetConfirm(false)}
                className="rounded-lg border border-slate-300 bg-white px-3 py-1 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors"
              >
                Cancelar
              </button>
            </div>
          )}
        </div>
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
        <h2 className="text-xl font-extrabold text-slate-900 mb-4">
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
    <div className="flex flex-col justify-center rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
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
    return <LandingPage />;
  }

  return <DashboardScreen />;
}
