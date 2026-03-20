"use client";

import { useMemo } from "react";
import {
  Zap,
  Clock,
  CalendarDays,
  CalendarRange,
  ArrowRight,
  BookOpen,
  Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils/helpers";
import type { DomainResult, Recommendation } from "@/lib/data/types";
import { recommendations } from "@/lib/data/recommendations";

interface RecommendationsProps {
  domainResults: DomainResult[];
}

const priorityConfig: Record<
  Recommendation["priority"],
  {
    label: string;
    icon: typeof Zap;
    badgeClass: string;
    borderClass: string;
    bgClass: string;
    order: number;
  }
> = {
  immediate: {
    label: "Inmediata",
    icon: Zap,
    badgeClass: "bg-red-100 text-red-700 border-red-200",
    borderClass: "border-l-red-500",
    bgClass: "bg-red-50/30",
    order: 0,
  },
  "short-term": {
    label: "Corto Plazo",
    icon: Clock,
    badgeClass: "bg-orange-100 text-orange-700 border-orange-200",
    borderClass: "border-l-orange-400",
    bgClass: "bg-orange-50/30",
    order: 1,
  },
  "medium-term": {
    label: "Mediano Plazo",
    icon: CalendarDays,
    badgeClass: "bg-yellow-100 text-yellow-700 border-yellow-200",
    borderClass: "border-l-yellow-400",
    bgClass: "bg-yellow-50/30",
    order: 2,
  },
  "long-term": {
    label: "Largo Plazo",
    icon: CalendarRange,
    badgeClass: "bg-blue-100 text-blue-700 border-blue-200",
    borderClass: "border-l-blue-400",
    bgClass: "bg-blue-50/30",
    order: 3,
  },
};

const priorityGroupLabels: Record<Recommendation["priority"], string> = {
  immediate: "Acciones Inmediatas",
  "short-term": "Acciones a Corto Plazo",
  "medium-term": "Acciones a Mediano Plazo",
  "long-term": "Acciones a Largo Plazo",
};

export function Recommendations({ domainResults }: RecommendationsProps) {
  const filteredRecommendations = useMemo(() => {
    if (domainResults.length === 0) return [];

    // Build a map of cipId -> riskLevel from results
    const riskMap = new Map<string, string>();
    for (const dr of domainResults) {
      riskMap.set(dr.cipId, dr.riskLevel);
    }

    // Filter recommendations: include if the domain has a risk level >= recommendation risk level
    const riskOrder: Record<string, number> = {
      critical: 0,
      high: 1,
      medium: 2,
      low: 3,
      optimal: 4,
    };

    const filtered = recommendations.filter((rec) => {
      const domainRisk = riskMap.get(rec.cipId);
      if (!domainRisk) return false;
      // Include recommendation if domain risk is at least as severe as the recommendation's risk level
      return riskOrder[domainRisk] <= riskOrder[rec.riskLevel];
    });

    // Sort by priority order then by CIP ID
    filtered.sort((a, b) => {
      const orderDiff =
        priorityConfig[a.priority].order - priorityConfig[b.priority].order;
      if (orderDiff !== 0) return orderDiff;
      return a.cipId.localeCompare(b.cipId);
    });

    return filtered;
  }, [domainResults]);

  // Group by priority
  const grouped = useMemo(() => {
    const groups: Record<Recommendation["priority"], Recommendation[]> = {
      immediate: [],
      "short-term": [],
      "medium-term": [],
      "long-term": [],
    };

    for (const rec of filteredRecommendations) {
      groups[rec.priority].push(rec);
    }

    return groups;
  }, [filteredRecommendations]);

  const priorityKeys: Recommendation["priority"][] = [
    "immediate",
    "short-term",
    "medium-term",
    "long-term",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900">
          Recomendaciones Priorizadas
        </h3>
        <p className="text-sm text-slate-500 mt-0.5">
          {filteredRecommendations.length} recomendaciones basadas en los
          resultados de la evaluación
        </p>
      </div>

      {filteredRecommendations.length === 0 ? (
        <div className="py-12 text-center text-slate-400">
          <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-40" />
          <p className="text-sm">
            No hay recomendaciones aplicables. Complete la evaluación para
            generar recomendaciones.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {priorityKeys.map((priority) => {
            const recs = grouped[priority];
            if (recs.length === 0) return null;

            const config = priorityConfig[priority];
            const PriorityIcon = config.icon;

            return (
              <div key={priority}>
                {/* Priority Group Header */}
                <div className="flex items-center gap-2 mb-4">
                  <PriorityIcon
                    className={cn("w-5 h-5", {
                      "text-red-600": priority === "immediate",
                      "text-orange-500": priority === "short-term",
                      "text-yellow-500": priority === "medium-term",
                      "text-blue-500": priority === "long-term",
                    })}
                  />
                  <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">
                    {priorityGroupLabels[priority]}
                  </h4>
                  <span className="text-xs text-slate-400 font-medium ml-1">
                    ({recs.length})
                  </span>
                </div>

                {/* Recommendation Cards */}
                <div className="space-y-3">
                  {recs.map((rec) => (
                    <div
                      key={rec.id}
                      className={cn(
                        "border rounded-xl p-4 border-l-4 transition-all duration-200 hover:shadow-sm",
                        config.borderClass,
                        config.bgClass,
                        "border-slate-200"
                      )}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h5 className="font-semibold text-sm text-slate-900 flex-1">
                          {rec.title}
                        </h5>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span
                            className={cn(
                              "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border",
                              config.badgeClass
                            )}
                          >
                            {config.label}
                          </span>
                          <span className="text-xs text-slate-400 font-mono bg-slate-100 px-1.5 py-0.5 rounded">
                            {rec.cipId}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed mb-3">
                        {rec.description}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <Wrench className="w-3.5 h-3.5" />
                          <span>
                            <span className="font-medium">
                              Esfuerzo estimado:
                            </span>{" "}
                            {rec.estimatedEffort}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
