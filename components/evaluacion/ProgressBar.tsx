"use client";

import { cn } from "@/lib/utils/helpers";

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-700">
          Pregunta {current} de {total}
        </span>
        <span className="text-sm font-semibold text-slate-900">
          {percentage}%
        </span>
      </div>
      <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500 ease-out",
            "bg-gradient-to-r from-blue-600 to-indigo-500"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
