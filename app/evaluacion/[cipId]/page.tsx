"use client";

import { use, useMemo, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils/helpers";
import { useEvaluationStore } from "@/lib/store/evaluation-store";
import { cipStandards } from "@/lib/data/cip-standards";
import { questions } from "@/lib/data/questions";
import {
  calculateAllDomains,
  calculateGlobalScore,
  getOverallRiskLevel,
} from "@/lib/engine/risk-calculator";
import type { AnswerValue } from "@/lib/data/types";
import { ProgressBar } from "@/components/evaluacion/ProgressBar";
import { QuestionCard } from "@/components/evaluacion/QuestionCard";

const CIP_ORDER = [
  "CIP-002",
  "CIP-003",
  "CIP-004",
  "CIP-005",
  "CIP-006",
  "CIP-007",
  "CIP-008",
  "CIP-009",
  "CIP-010",
  "CIP-011",
  "CIP-013",
  "CIP-014",
];

export default function EvaluacionPage({
  params,
}: {
  params: Promise<{ cipId: string }>;
}) {
  const { cipId } = use(params);
  const router = useRouter();

  const evaluation = useEvaluationStore((s) => s.evaluation);
  const setAnswer = useEvaluationStore((s) => s.setAnswer);
  const updateResults = useEvaluationStore((s) => s.updateResults);

  const standard = useMemo(
    () => cipStandards.find((s) => s.id === cipId),
    [cipId]
  );

  const filteredQuestions = useMemo(() => {
    if (!evaluation) return [];
    return questions.filter(
      (q) =>
        q.cipId === cipId &&
        q.applicableImpactLevels.includes(evaluation.impactLevel) &&
        q.applicableEntityTypes.includes(evaluation.entityType)
    );
  }, [cipId, evaluation]);

  const answeredCount = useMemo(() => {
    if (!evaluation) return 0;
    return filteredQuestions.filter(
      (q) => evaluation.answers[q.id]?.value != null
    ).length;
  }, [filteredQuestions, evaluation]);

  const currentIndex = CIP_ORDER.indexOf(cipId);
  const prevCipId = currentIndex > 0 ? CIP_ORDER[currentIndex - 1] : null;
  const nextCipId =
    currentIndex < CIP_ORDER.length - 1 ? CIP_ORDER[currentIndex + 1] : null;

  const handleAnswer = useCallback(
    (questionId: string, value: AnswerValue, observation?: string) => {
      setAnswer(questionId, value, observation);

      // Recalculate after updating the store (use setTimeout to let state settle)
      setTimeout(() => {
        const currentEval = useEvaluationStore.getState().evaluation;
        if (!currentEval) return;

        const domainResults = calculateAllDomains(
          currentEval.answers,
          questions,
          currentEval.impactLevel,
          cipStandards
        );
        const globalScore = calculateGlobalScore(domainResults, cipStandards);
        const globalRiskLevel = getOverallRiskLevel(globalScore);

        updateResults(domainResults, globalScore, globalRiskLevel);
      }, 0);
    },
    [setAnswer, updateResults]
  );

  if (!standard) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <p className="text-lg text-slate-600">
          No se encontro el estandar CIP: <span className="font-mono font-bold">{cipId}</span>
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
        >
          <LayoutDashboard className="w-4 h-4" />
          Volver al Dashboard
        </Link>
      </div>
    );
  }

  if (!evaluation) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <p className="text-lg text-slate-600">
          No hay una evaluacion activa. Inicie una nueva evaluacion primero.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
        >
          <LayoutDashboard className="w-4 h-4" />
          Volver al Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top navigation */}
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 font-medium transition-colors"
      >
        <LayoutDashboard className="w-4 h-4" />
        Volver al Dashboard
      </Link>

      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h1 className="text-2xl font-bold text-slate-900">
          {standard.id} - {standard.name}
        </h1>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          {standard.description}
        </p>
      </div>

      {/* Progress */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
        <ProgressBar current={answeredCount} total={filteredQuestions.length} />
      </div>

      {/* Questions */}
      {filteredQuestions.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
          <p className="text-slate-500">
            No hay preguntas aplicables para este dominio con el nivel de impacto y tipo de entidad seleccionados.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredQuestions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              answer={evaluation.answers[question.id]}
              onAnswer={(value, observation) =>
                handleAnswer(question.id, value, observation)
              }
            />
          ))}
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between pt-2 pb-8">
        {prevCipId ? (
          <button
            type="button"
            onClick={() => router.push(`/evaluacion/${prevCipId}`)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Anterior
          </button>
        ) : (
          <div />
        )}

        {nextCipId ? (
          <button
            type="button"
            onClick={() => router.push(`/evaluacion/${nextCipId}`)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700 transition-colors cursor-pointer"
          >
            Siguiente
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
