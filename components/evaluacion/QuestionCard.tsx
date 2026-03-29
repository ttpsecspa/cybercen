"use client";

import { useState, useEffect } from "react";
import { CheckCircle, MinusCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils/helpers";
import type { Question, Answer, AnswerValue } from "@/lib/data/types";

interface QuestionCardProps {
  question: Question;
  answer: Answer | undefined;
  onAnswer: (value: AnswerValue, observation?: string) => void;
}

const answerOptions: {
  value: AnswerValue;
  label: string;
  icon: typeof CheckCircle;
  activeClasses: string;
  hoverClasses: string;
}[] = [
  {
    value: "yes",
    label: "Sí",
    icon: CheckCircle,
    activeClasses:
      "bg-green-50 border-green-500 ring-2 ring-green-300 text-green-700",
    hoverClasses: "hover:bg-green-50 hover:border-green-300 text-green-600",
  },
  {
    value: "partial",
    label: "Parcial",
    icon: MinusCircle,
    activeClasses:
      "bg-yellow-50 border-yellow-500 ring-2 ring-yellow-300 text-yellow-700",
    hoverClasses: "hover:bg-yellow-50 hover:border-yellow-300 text-yellow-600",
  },
  {
    value: "no",
    label: "No",
    icon: XCircle,
    activeClasses:
      "bg-red-50 border-red-500 ring-2 ring-red-300 text-red-700",
    hoverClasses: "hover:bg-red-50 hover:border-red-300 text-red-600",
  },
];

export function QuestionCard({ question, answer, onAnswer }: QuestionCardProps) {
  const [observation, setObservation] = useState(answer?.observation ?? "");
  const selectedValue = answer?.value ?? null;

  useEffect(() => {
    setObservation(answer?.observation ?? "");
  }, [answer?.observation]);

  function handleSelect(value: AnswerValue) {
    onAnswer(value, observation);
  }

  function handleObservationChange(text: string) {
    setObservation(text);
    if (selectedValue) {
      onAnswer(selectedValue, text);
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 transition-all hover:shadow-md hover:border-blue-300">
      <div className="flex items-start gap-3 mb-4">
        <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wide shrink-0">
          {question.requirementId}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-base font-medium text-slate-900 leading-relaxed">
            {question.text}
          </p>
          {question.helpText && (
            <p className="mt-2 text-sm text-slate-500 italic leading-relaxed">
              {question.helpText}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-4">
        {answerOptions.map((option) => {
          const Icon = option.icon;
          const isActive = selectedValue === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value)}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 text-sm font-medium transition-all duration-200 cursor-pointer",
                isActive
                  ? option.activeClasses
                  : cn("border-slate-200 bg-white text-slate-600", option.hoverClasses)
              )}
            >
              <Icon className="w-4 h-4" />
              {option.label}
            </button>
          );
        })}
      </div>

      {selectedValue && (
        <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <label
            htmlFor={`obs-${question.id}`}
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            Observaciones (opcional)
          </label>
          <textarea
            id={`obs-${question.id}`}
            value={observation}
            onChange={(e) => handleObservationChange(e.target.value)}
            placeholder="Agregue observaciones o evidencia relevante..."
            rows={3}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors resize-y"
          />
        </div>
      )}
    </div>
  );
}
