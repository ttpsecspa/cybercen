"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
// jsPDF is imported dynamically in generatePDF to avoid SSR issues
import {
  FileText,
  Download,
  ArrowLeft,
  Eye,
  CheckSquare,
  Square,
  ShieldAlert,
  Target,
  FileDown,
  BarChart3,
  AlertTriangle,
  ClipboardList,
  Lightbulb,
  ListChecks,
} from "lucide-react";
import { cn } from "@/lib/utils/helpers";
import { useEvaluationStore } from "@/lib/store/evaluation-store";
import { cipStandards } from "@/lib/data/cip-standards";
import { getRiskLabel, getRiskColor } from "@/lib/engine/scoring";
import {
  generateGapSummary,
  analyzeGaps,
  getGapsByPriority,
} from "@/lib/engine/gap-analyzer";
import { recommendations } from "@/lib/data/recommendations";
import type { DomainResult, RiskLevel } from "@/lib/data/types";

// ────────────────────────────────────────────────────────────
// Entity type / impact level Spanish labels
// ────────────────────────────────────────────────────────────
const entityTypeLabels: Record<string, string> = {
  generation: "Generación",
  transmission: "Transmisión",
  distribution: "Distribución",
};

const impactLevelLabels: Record<string, string> = {
  high: "Alto",
  medium: "Medio",
  low: "Bajo",
};

const priorityLabels: Record<string, string> = {
  immediate: "Inmediata",
  "short-term": "Corto plazo",
  "medium-term": "Mediano plazo",
  "long-term": "Largo plazo",
};

// ────────────────────────────────────────────────────────────
// Reusable checkbox component
// ────────────────────────────────────────────────────────────
function OptionCheckbox({
  checked,
  label,
  icon: Icon,
  onToggle,
}: {
  checked: boolean;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "flex items-center gap-3 w-full px-4 py-3 rounded-xl border text-left transition-all",
        checked
          ? "bg-blue-50 border-blue-200 text-blue-900"
          : "bg-white border-slate-200 text-slate-500 hover:border-slate-300"
      )}
    >
      {checked ? (
        <CheckSquare className="w-5 h-5 text-blue-600 shrink-0" />
      ) : (
        <Square className="w-5 h-5 text-slate-400 shrink-0" />
      )}
      <Icon className="w-4 h-4 shrink-0" />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

// ────────────────────────────────────────────────────────────
// Risk level badge for the preview table
// ────────────────────────────────────────────────────────────
function RiskBadge({ level }: { level: RiskLevel }) {
  const color = getRiskColor(level);
  const label = getRiskLabel(level);
  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
      style={{ backgroundColor: `${color}18`, color }}
    >
      <span
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
      />
      {label}
    </span>
  );
}

// ────────────────────────────────────────────────────────────
// PDF generation helper – risk level RGB values
// ────────────────────────────────────────────────────────────
function riskRGB(level: RiskLevel): [number, number, number] {
  switch (level) {
    case "critical":
      return [239, 68, 68];
    case "high":
      return [249, 115, 22];
    case "medium":
      return [234, 179, 8];
    case "low":
      return [59, 130, 246];
    case "optimal":
      return [34, 197, 94];
  }
}

// ────────────────────────────────────────────────────────────
// Main page component
// ────────────────────────────────────────────────────────────
export default function ReportesClient() {
  const evaluation = useEvaluationStore((s) => s.evaluation);
  const domainResults = useEvaluationStore((s) => s.domainResults);
  const globalScore = useEvaluationStore((s) => s.globalScore);
  const globalRiskLevel = useEvaluationStore((s) => s.globalRiskLevel);
  const exportEvaluation = useEvaluationStore((s) => s.exportEvaluation);

  // Report option toggles
  const [includeExecutive, setIncludeExecutive] = useState(true);
  const [includeDomains, setIncludeDomains] = useState(true);
  const [includeGaps, setIncludeGaps] = useState(true);
  const [includeRecommendations, setIncludeRecommendations] = useState(true);
  const [includeActionPlan, setIncludeActionPlan] = useState(true);
  const [generating, setGenerating] = useState(false);

  const hasResults = domainResults.length > 0;
  const hasAnswers =
    evaluation && Object.keys(evaluation.answers).length > 0;

  const gapSummary = useMemo(
    () => (hasResults ? generateGapSummary(domainResults) : null),
    [domainResults, hasResults]
  );

  // ──────────────────────────────────────────────────────────
  // PDF generation
  // ──────────────────────────────────────────────────────────
  const generatePDF = useCallback(() => {
    if (!evaluation || !hasResults) return;

    setGenerating(true);

    // Small timeout so the UI can show the loading state
    setTimeout(async () => {
      try {
        const { default: JsPDF } = await import("jspdf");
        const doc = new JsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const marginLeft = 20;
        const marginRight = 20;
        const maxWidth = pageWidth - marginLeft - marginRight;
        const lineHeight = 6;
        let y = 25;

        // Helpers ────────────────────────────────────────────
        function addFooter() {
          doc.setFontSize(8);
          doc.setFont("helvetica", "normal");
          doc.setTextColor(150, 150, 150);
          doc.text(
            `CyberCEN - Informe generado el ${new Date().toLocaleDateString("es-CL")}`,
            marginLeft,
            pageHeight - 10
          );
          doc.text(
            `Página ${doc.getNumberOfPages()}`,
            pageWidth - marginRight,
            pageHeight - 10,
            { align: "right" }
          );
        }

        function newPage() {
          addFooter();
          doc.addPage();
          y = 25;
        }

        function checkSpace(needed: number) {
          if (y + needed > pageHeight - 20) {
            newPage();
          }
        }

        function sectionTitle(text: string) {
          checkSpace(20);
          doc.setFontSize(16);
          doc.setFont("helvetica", "bold");
          doc.setTextColor(30, 41, 59);
          doc.text(text, marginLeft, y);
          y += 4;
          doc.setDrawColor(59, 130, 246);
          doc.setLineWidth(0.8);
          doc.line(marginLeft, y, marginLeft + 60, y);
          y += 10;
        }

        function bodyText(text: string) {
          doc.setFontSize(10);
          doc.setFont("helvetica", "normal");
          doc.setTextColor(71, 85, 105);
          const lines = doc.splitTextToSize(text, maxWidth);
          for (const line of lines) {
            checkSpace(lineHeight);
            doc.text(line, marginLeft, y);
            y += lineHeight;
          }
        }

        function boldText(text: string, fontSize = 10) {
          doc.setFontSize(fontSize);
          doc.setFont("helvetica", "bold");
          doc.setTextColor(30, 41, 59);
          const lines = doc.splitTextToSize(text, maxWidth);
          for (const line of lines) {
            checkSpace(lineHeight);
            doc.text(line, marginLeft, y);
            y += lineHeight;
          }
        }

        // ═══════════════════════════════════════════════════
        // PAGE 1 – COVER
        // ═══════════════════════════════════════════════════
        // Background header stripe
        doc.setFillColor(30, 41, 59);
        doc.rect(0, 0, pageWidth, 100, "F");

        doc.setFontSize(26);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(255, 255, 255);
        const titleLines = doc.splitTextToSize(
          "INFORME DE AUTOEVALUACIÓN DE CIBERSEGURIDAD",
          maxWidth
        );
        let ty = 38;
        for (const line of titleLines) {
          doc.text(line, pageWidth / 2, ty, { align: "center" });
          ty += 12;
        }

        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(148, 163, 184);
        const subtitleLines = doc.splitTextToSize(
          "Estándar de Ciberseguridad - Coordinador Eléctrico Nacional",
          maxWidth
        );
        for (const line of subtitleLines) {
          doc.text(line, pageWidth / 2, ty, { align: "center" });
          ty += 8;
        }

        // Entity info block
        y = 125;
        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(30, 41, 59);
        doc.text("Entidad:", marginLeft, y);
        doc.setFont("helvetica", "normal");
        doc.text(evaluation.entityName, marginLeft + 30, y);
        y += 10;

        doc.setFont("helvetica", "bold");
        doc.text("Tipo:", marginLeft, y);
        doc.setFont("helvetica", "normal");
        doc.text(
          entityTypeLabels[evaluation.entityType] ?? evaluation.entityType,
          marginLeft + 30,
          y
        );
        y += 10;

        doc.setFont("helvetica", "bold");
        doc.text("Impacto:", marginLeft, y);
        doc.setFont("helvetica", "normal");
        doc.text(
          impactLevelLabels[evaluation.impactLevel] ?? evaluation.impactLevel,
          marginLeft + 30,
          y
        );
        y += 10;

        doc.setFont("helvetica", "bold");
        doc.text("Fecha:", marginLeft, y);
        doc.setFont("helvetica", "normal");
        doc.text(
          new Date(evaluation.startDate).toLocaleDateString("es-CL"),
          marginLeft + 30,
          y
        );
        y += 25;

        // Confidential notice
        doc.setFillColor(254, 243, 199);
        doc.roundedRect(marginLeft, y, maxWidth, 20, 3, 3, "F");
        doc.setFontSize(9);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(146, 64, 14);
        doc.text("DOCUMENTO CONFIDENCIAL", pageWidth / 2, y + 8, {
          align: "center",
        });
        doc.setFontSize(8);
        doc.setFont("helvetica", "normal");
        doc.text(
          "Este informe contiene información sensible sobre la postura de ciberseguridad de la organización.",
          pageWidth / 2,
          y + 14,
          { align: "center" }
        );

        addFooter();

        // ═══════════════════════════════════════════════════
        // PAGE 2 – EXECUTIVE SUMMARY
        // ═══════════════════════════════════════════════════
        if (includeExecutive) {
          newPage();
          sectionTitle("1. Resumen Ejecutivo");

          const summary = generateGapSummary(domainResults);
          const allGaps = analyzeGaps(domainResults);

          boldText("Puntaje Global de Cumplimiento");
          y += 2;

          const [r, g, b] = riskRGB(globalRiskLevel);
          doc.setFontSize(28);
          doc.setFont("helvetica", "bold");
          doc.setTextColor(r, g, b);
          doc.text(`${Math.round(globalScore)}%`, marginLeft, y);

          doc.setFontSize(12);
          doc.setTextColor(100, 116, 139);
          doc.text(
            `  -  Riesgo ${getRiskLabel(globalRiskLevel)}`,
            marginLeft + 28,
            y
          );
          y += 12;

          doc.setTextColor(71, 85, 105);
          doc.setFontSize(10);
          doc.setFont("helvetica", "normal");

          const summaryItems = [
            `Dominios evaluados: ${domainResults.length} de ${cipStandards.length}`,
            `Porcentaje de cumplimiento: ${summary.percentCompliant}%`,
            `Total de brechas identificadas: ${summary.totalGaps}`,
            `Brechas críticas: ${summary.criticalGaps}`,
            `Brechas de riesgo alto: ${summary.highGaps}`,
            `Brechas de riesgo medio: ${summary.mediumGaps}`,
            `Brechas de riesgo bajo: ${summary.lowGaps}`,
          ];

          for (const item of summaryItems) {
            checkSpace(lineHeight);
            doc.text(`•  ${item}`, marginLeft + 4, y);
            y += lineHeight;
          }

          y += 6;

          // Critical gaps summary
          if (allGaps.length > 0) {
            boldText("Brechas Críticas Principales");
            y += 2;
            const topGaps = allGaps.slice(0, 5);
            for (const gap of topGaps) {
              const gapText = `[${gap.cipId}] ${gap.description}`;
              const gapLines = doc.splitTextToSize(gapText, maxWidth - 10);
              for (let i = 0; i < gapLines.length; i++) {
                checkSpace(lineHeight);
                doc.setFont("helvetica", "normal");
                doc.setFontSize(9);
                doc.setTextColor(71, 85, 105);
                doc.text(i === 0 ? `•  ${gapLines[i]}` : `   ${gapLines[i]}`, marginLeft + 4, y);
                y += 5;
              }
              y += 1;
            }
          }

          y += 6;
          boldText("Recomendación General");
          y += 2;
          let overallRec: string;
          if (globalScore <= 25) {
            overallRec =
              "La organización presenta un nivel de cumplimiento crítico. Se requiere acción inmediata para abordar las brechas de seguridad identificadas, priorizando los dominios con mayor riesgo. Se recomienda implementar un plan de remediación de emergencia.";
          } else if (globalScore <= 50) {
            overallRec =
              "El nivel de cumplimiento es insuficiente. Se deben desarrollar planes correctivos urgentes para los dominios con mayor riesgo. Es fundamental asignar recursos dedicados a la mejora de la postura de ciberseguridad.";
          } else if (globalScore <= 75) {
            overallRec =
              "La organización muestra un cumplimiento moderado. Se recomienda desarrollar un plan de mejora estructurado para cerrar las brechas identificadas, especialmente en los dominios de mayor peso.";
          } else if (globalScore <= 90) {
            overallRec =
              "El nivel de cumplimiento es bueno. Se sugiere enfocar esfuerzos en la optimización continua y en cerrar las brechas restantes para alcanzar un cumplimiento óptimo.";
          } else {
            overallRec =
              "La organización presenta un nivel de cumplimiento óptimo. Se recomienda mantener las prácticas actuales, monitorear continuamente y realizar evaluaciones periódicas para asegurar la sostenibilidad del cumplimiento.";
          }
          bodyText(overallRec);
        }

        // ═══════════════════════════════════════════════════
        // PAGE 3+ – DOMAIN ANALYSIS TABLE
        // ═══════════════════════════════════════════════════
        if (includeDomains) {
          newPage();
          sectionTitle(
            includeExecutive
              ? "2. Análisis por Dominio"
              : "1. Análisis por Dominio"
          );

          bodyText(
            "La siguiente tabla muestra el resultado de la evaluación para cada uno de los dominios CIP evaluados."
          );
          y += 4;

          // Table header
          const colX = [marginLeft, marginLeft + 20, marginLeft + 90, marginLeft + 115, marginLeft + 140];
          const colHeaders = ["CIP", "Dominio", "Puntaje", "Riesgo", "Preg."];

          checkSpace(12);
          doc.setFillColor(241, 245, 249);
          doc.rect(marginLeft, y - 4, maxWidth, 8, "F");
          doc.setFontSize(8);
          doc.setFont("helvetica", "bold");
          doc.setTextColor(71, 85, 105);
          for (let i = 0; i < colHeaders.length; i++) {
            doc.text(colHeaders[i], colX[i], y);
          }
          y += 6;
          doc.setDrawColor(226, 232, 240);
          doc.setLineWidth(0.3);
          doc.line(marginLeft, y, marginLeft + maxWidth, y);
          y += 4;

          // Table rows
          for (const dr of domainResults) {
            checkSpace(10);
            const std = cipStandards.find((s) => s.id === dr.cipId);
            const domainName = std
              ? std.name.length > 30
                ? std.name.slice(0, 30) + "..."
                : std.name
              : dr.cipId;

            doc.setFontSize(8);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(30, 41, 59);
            doc.text(dr.cipId, colX[0], y);
            doc.text(domainName, colX[1], y);
            doc.text(`${Math.round(dr.score)}%`, colX[2], y);

            const [rr, rg, rb] = riskRGB(dr.riskLevel);
            doc.setTextColor(rr, rg, rb);
            doc.setFont("helvetica", "bold");
            doc.text(getRiskLabel(dr.riskLevel), colX[3], y);

            doc.setTextColor(30, 41, 59);
            doc.setFont("helvetica", "normal");
            doc.text(
              `${dr.answeredQuestions}/${dr.totalQuestions}`,
              colX[4],
              y
            );

            y += 7;
            doc.setDrawColor(241, 245, 249);
            doc.setLineWidth(0.2);
            doc.line(marginLeft, y - 2, marginLeft + maxWidth, y - 2);
          }
        }

        // ═══════════════════════════════════════════════════
        // GAPS PAGE
        // ═══════════════════════════════════════════════════
        if (includeGaps) {
          newPage();
          let sectionNum = 1;
          if (includeExecutive) sectionNum++;
          if (includeDomains) sectionNum++;
          sectionTitle(`${sectionNum}. Brechas Identificadas`);

          const gapsByPriority = getGapsByPriority(domainResults);
          const levels: Array<{
            key: "critical" | "high" | "medium" | "low";
            label: string;
          }> = [
            { key: "critical", label: "Brechas Críticas" },
            { key: "high", label: "Brechas de Riesgo Alto" },
            { key: "medium", label: "Brechas de Riesgo Medio" },
            { key: "low", label: "Brechas de Riesgo Bajo" },
          ];

          for (const { key, label } of levels) {
            const gaps = gapsByPriority[key];
            if (gaps.length === 0) continue;

            checkSpace(14);
            const [lr, lg, lb] = riskRGB(key === "low" ? "low" : key);
            doc.setFontSize(11);
            doc.setFont("helvetica", "bold");
            doc.setTextColor(lr, lg, lb);
            doc.text(`${label} (${gaps.length})`, marginLeft, y);
            y += 8;

            for (const gap of gaps.slice(0, 15)) {
              const gapText = `[${gap.cipId}] ${gap.description}`;
              doc.setFontSize(9);
              doc.setFont("helvetica", "normal");
              doc.setTextColor(71, 85, 105);
              const gapLines = doc.splitTextToSize(gapText, maxWidth - 10);
              for (let i = 0; i < gapLines.length; i++) {
                checkSpace(5);
                doc.text(
                  i === 0 ? `•  ${gapLines[i]}` : `   ${gapLines[i]}`,
                  marginLeft + 4,
                  y
                );
                y += 5;
              }
              y += 1;
            }

            if (gaps.length > 15) {
              checkSpace(6);
              doc.setFontSize(8);
              doc.setTextColor(100, 116, 139);
              doc.text(
                `... y ${gaps.length - 15} brechas adicionales en esta categoría.`,
                marginLeft + 4,
                y
              );
              y += 8;
            }
            y += 4;
          }
        }

        // ═══════════════════════════════════════════════════
        // RECOMMENDATIONS PAGE
        // ═══════════════════════════════════════════════════
        if (includeRecommendations) {
          newPage();
          let sectionNum = 1;
          if (includeExecutive) sectionNum++;
          if (includeDomains) sectionNum++;
          if (includeGaps) sectionNum++;
          sectionTitle(`${sectionNum}. Recomendaciones`);

          // Filter recommendations relevant to evaluated domains with non-optimal risk
          const relevantDomains = domainResults
            .filter((dr) => dr.riskLevel !== "optimal")
            .map((dr) => ({ cipId: dr.cipId, riskLevel: dr.riskLevel }));

          const relevantRecs = recommendations.filter((rec) =>
            relevantDomains.some(
              (d) =>
                d.cipId === rec.cipId &&
                (rec.riskLevel === d.riskLevel ||
                  rec.riskLevel === "critical" ||
                  rec.riskLevel === "high")
            )
          );

          const sortedRecs = [...relevantRecs].sort((a, b) => {
            const order: Record<string, number> = {
              immediate: 0,
              "short-term": 1,
              "medium-term": 2,
              "long-term": 3,
            };
            return (order[a.priority] ?? 4) - (order[b.priority] ?? 4);
          });

          const displayRecs = sortedRecs.slice(0, 20);

          for (let i = 0; i < displayRecs.length; i++) {
            const rec = displayRecs[i];
            checkSpace(22);

            doc.setFontSize(10);
            doc.setFont("helvetica", "bold");
            doc.setTextColor(30, 41, 59);
            const recTitle = `${i + 1}. [${rec.cipId}] ${rec.title}`;
            const titleLines = doc.splitTextToSize(recTitle, maxWidth);
            for (const line of titleLines) {
              checkSpace(lineHeight);
              doc.text(line, marginLeft, y);
              y += lineHeight;
            }

            doc.setFontSize(8);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(100, 116, 139);
            doc.text(
              `Prioridad: ${priorityLabels[rec.priority] ?? rec.priority}  |  Esfuerzo: ${rec.estimatedEffort}`,
              marginLeft + 4,
              y
            );
            y += 5;

            doc.setFontSize(9);
            doc.setTextColor(71, 85, 105);
            const descLines = doc.splitTextToSize(rec.description, maxWidth - 8);
            for (const line of descLines) {
              checkSpace(5);
              doc.text(line, marginLeft + 4, y);
              y += 5;
            }
            y += 4;
          }

          if (sortedRecs.length > 20) {
            checkSpace(8);
            doc.setFontSize(8);
            doc.setTextColor(100, 116, 139);
            doc.text(
              `Se muestran las 20 recomendaciones de mayor prioridad de un total de ${sortedRecs.length}.`,
              marginLeft,
              y
            );
            y += 8;
          }
        }

        // ═══════════════════════════════════════════════════
        // ACTION PLAN PAGE
        // ═══════════════════════════════════════════════════
        if (includeActionPlan) {
          newPage();
          let sectionNum = 1;
          if (includeExecutive) sectionNum++;
          if (includeDomains) sectionNum++;
          if (includeGaps) sectionNum++;
          if (includeRecommendations) sectionNum++;
          sectionTitle(`${sectionNum}. Plan de Acción`);

          bodyText(
            "El siguiente plan de acción prioriza las actividades de remediación según el nivel de riesgo y el impacto en la postura de ciberseguridad de la organización."
          );
          y += 6;

          // Group domains by risk for action plan
          const criticalDomains = domainResults.filter(
            (d) => d.riskLevel === "critical"
          );
          const highDomains = domainResults.filter(
            (d) => d.riskLevel === "high"
          );
          const mediumDomains = domainResults.filter(
            (d) => d.riskLevel === "medium"
          );

          const phases: Array<{
            title: string;
            timeframe: string;
            domains: DomainResult[];
            color: [number, number, number];
          }> = [
            {
              title: "Fase 1: Acción Inmediata (0-30 días)",
              timeframe: "Abordar dominios con riesgo crítico",
              domains: criticalDomains,
              color: [239, 68, 68],
            },
            {
              title: "Fase 2: Corto Plazo (30-90 días)",
              timeframe: "Abordar dominios con riesgo alto",
              domains: highDomains,
              color: [249, 115, 22],
            },
            {
              title: "Fase 3: Mediano Plazo (90-180 días)",
              timeframe: "Mejorar dominios con riesgo medio",
              domains: mediumDomains,
              color: [234, 179, 8],
            },
          ];

          for (const phase of phases) {
            checkSpace(18);
            doc.setFontSize(12);
            doc.setFont("helvetica", "bold");
            doc.setTextColor(...phase.color);
            doc.text(phase.title, marginLeft, y);
            y += 6;
            doc.setFontSize(9);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(100, 116, 139);
            doc.text(phase.timeframe, marginLeft + 4, y);
            y += 7;

            if (phase.domains.length === 0) {
              doc.setFontSize(9);
              doc.setTextColor(71, 85, 105);
              doc.text(
                "No hay dominios en esta categoría. Sin acción requerida.",
                marginLeft + 4,
                y
              );
              y += 8;
            } else {
              for (const domain of phase.domains) {
                const std = cipStandards.find((s) => s.id === domain.cipId);
                checkSpace(10);
                doc.setFontSize(9);
                doc.setFont("helvetica", "bold");
                doc.setTextColor(30, 41, 59);
                doc.text(
                  `•  ${domain.cipId} - ${std?.name ?? domain.cipId} (Puntaje: ${Math.round(domain.score)}%)`,
                  marginLeft + 4,
                  y
                );
                y += 5;

                if (domain.gaps.length > 0) {
                  const topGapTexts = domain.gaps.slice(0, 3);
                  for (const gapText of topGapTexts) {
                    doc.setFontSize(8);
                    doc.setFont("helvetica", "normal");
                    doc.setTextColor(100, 116, 139);
                    const cleanGap = gapText.replace(/^\[[^\]]+\]\s*/, "");
                    const gapLines = doc.splitTextToSize(
                      `  -  ${cleanGap}`,
                      maxWidth - 16
                    );
                    for (const line of gapLines) {
                      checkSpace(4.5);
                      doc.text(line, marginLeft + 10, y);
                      y += 4.5;
                    }
                  }
                }
                y += 3;
              }
            }
            y += 4;
          }

          // Summary recommendation
          y += 4;
          checkSpace(20);
          boldText("Nota importante:");
          bodyText(
            "Este plan de acción debe ser revisado y aprobado por la alta dirección. Se recomienda asignar responsables específicos para cada fase y realizar seguimiento semanal del avance de las actividades de remediación. La próxima evaluación completa debe realizarse dentro de los 12 meses siguientes."
          );
        }

        // Final footer on last page
        addFooter();

        doc.save("cybercen-reporte.pdf");
      } catch (error) {
        console.error("Error generando PDF:", error);
      } finally {
        setGenerating(false);
      }
    }, 100);
  }, [
    evaluation,
    hasResults,
    domainResults,
    globalScore,
    globalRiskLevel,
    includeExecutive,
    includeDomains,
    includeGaps,
    includeRecommendations,
    includeActionPlan,
  ]);

  // ──────────────────────────────────────────────────────────
  // Export JSON
  // ──────────────────────────────────────────────────────────
  const handleExportJSON = useCallback(() => {
    const json = exportEvaluation();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "cybercen-evaluacion.json";
    a.click();
    URL.revokeObjectURL(url);
  }, [exportEvaluation]);

  // ──────────────────────────────────────────────────────────
  // Empty state
  // ──────────────────────────────────────────────────────────
  if (!hasAnswers || !hasResults) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-6">
          <ShieldAlert className="w-10 h-10 text-slate-400" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">
          Sin Datos para Reportar
        </h1>
        <p className="text-slate-500 max-w-md mb-8">
          Complete la evaluación primero para generar reportes. Necesita
          responder al menos un dominio CIP para generar un informe.
        </p>
        <Link
          href="/evaluacion"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25"
        >
          <Target className="w-5 h-5" />
          Iniciar Evaluación
        </Link>
      </div>
    );
  }

  // ──────────────────────────────────────────────────────────
  // Section count for the preview
  // ──────────────────────────────────────────────────────────
  const selectedSections = [
    includeExecutive,
    includeDomains,
    includeGaps,
    includeRecommendations,
    includeActionPlan,
  ].filter(Boolean).length;

  // ──────────────────────────────────────────────────────────
  // Render
  // ──────────────────────────────────────────────────────────
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">
            Generación de Reportes
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Exporte su informe de autoevaluación en PDF o respalde sus datos en
            JSON
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
            href="/resultados"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors"
          >
            <Eye className="w-4 h-4" />
            Ver Resultados
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ──────────────── LEFT: Preview ──────────────── */}
        <div className="lg:col-span-2 space-y-6">
          {/* Entity info */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4">
              Vista Previa del Reporte
            </h2>

            {/* Entity summary */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                <p className="text-xs text-slate-500 font-medium mb-1">
                  Entidad
                </p>
                <p className="text-sm font-bold text-slate-900 truncate">
                  {evaluation.entityName}
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                <p className="text-xs text-slate-500 font-medium mb-1">Tipo</p>
                <p className="text-sm font-bold text-slate-900">
                  {entityTypeLabels[evaluation.entityType] ??
                    evaluation.entityType}
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                <p className="text-xs text-slate-500 font-medium mb-1">
                  Impacto
                </p>
                <p className="text-sm font-bold text-slate-900">
                  {impactLevelLabels[evaluation.impactLevel] ??
                    evaluation.impactLevel}
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                <p className="text-xs text-slate-500 font-medium mb-1">
                  Fecha
                </p>
                <p className="text-sm font-bold text-slate-900">
                  {new Date(evaluation.startDate).toLocaleDateString("es-CL")}
                </p>
              </div>
            </div>

            {/* Global score */}
            <div className="flex items-center gap-6 mb-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-center">
                <p className="text-4xl font-black text-slate-900">
                  {Math.round(globalScore)}%
                </p>
                <p className="text-xs text-slate-500 mt-1">Puntaje Global</p>
              </div>
              <div className="h-12 w-px bg-slate-200" />
              <div>
                <RiskBadge level={globalRiskLevel} />
                <p className="text-xs text-slate-500 mt-2">
                  {gapSummary
                    ? `${gapSummary.totalGaps} brechas identificadas`
                    : "Sin brechas"}
                </p>
              </div>
            </div>

            {/* Domain summary table */}
            <h3 className="text-sm font-semibold text-slate-700 mb-3">
              Resumen por Dominio
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 pr-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      CIP
                    </th>
                    <th className="text-left py-2 pr-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Dominio
                    </th>
                    <th className="text-center py-2 pr-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Puntaje
                    </th>
                    <th className="text-center py-2 pr-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Riesgo
                    </th>
                    <th className="text-center py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Preguntas
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {domainResults.map((dr) => {
                    const std = cipStandards.find((s) => s.id === dr.cipId);
                    return (
                      <tr
                        key={dr.cipId}
                        className="border-b border-slate-100 last:border-0"
                      >
                        <td className="py-2.5 pr-4 font-medium text-slate-900">
                          {dr.cipId}
                        </td>
                        <td className="py-2.5 pr-4 text-slate-700">
                          {std?.name ?? dr.cipId}
                        </td>
                        <td className="py-2.5 pr-4 text-center font-bold text-slate-900">
                          {Math.round(dr.score)}%
                        </td>
                        <td className="py-2.5 pr-4 text-center">
                          <RiskBadge level={dr.riskLevel} />
                        </td>
                        <td className="py-2.5 text-center text-slate-600">
                          {dr.answeredQuestions}/{dr.totalQuestions}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sections that will be included */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-sm font-semibold text-slate-700 mb-3">
              Secciones del reporte ({selectedSections} seleccionadas)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                {
                  label: "Portada",
                  desc: "Siempre incluida",
                  included: true,
                  icon: FileText,
                },
                {
                  label: "Resumen Ejecutivo",
                  desc: includeExecutive ? "Incluido" : "Excluido",
                  included: includeExecutive,
                  icon: BarChart3,
                },
                {
                  label: "Análisis por Dominio",
                  desc: includeDomains ? "Incluido" : "Excluido",
                  included: includeDomains,
                  icon: ClipboardList,
                },
                {
                  label: "Brechas Identificadas",
                  desc: includeGaps ? "Incluido" : "Excluido",
                  included: includeGaps,
                  icon: AlertTriangle,
                },
                {
                  label: "Recomendaciones",
                  desc: includeRecommendations ? "Incluido" : "Excluido",
                  included: includeRecommendations,
                  icon: Lightbulb,
                },
                {
                  label: "Plan de Acción",
                  desc: includeActionPlan ? "Incluido" : "Excluido",
                  included: includeActionPlan,
                  icon: ListChecks,
                },
              ].map((section) => (
                <div
                  key={section.label}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg border text-sm",
                    section.included
                      ? "bg-green-50 border-green-200 text-green-800"
                      : "bg-slate-50 border-slate-200 text-slate-400"
                  )}
                >
                  <section.icon className="w-4 h-4 shrink-0" />
                  <div>
                    <span className="font-medium">{section.label}</span>
                    <span className="text-xs ml-2 opacity-70">
                      {section.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ──────────────── RIGHT: Options + Buttons ──────────────── */}
        <div className="space-y-6">
          {/* Report options */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4">
              Opciones del Reporte
            </h2>
            <div className="space-y-2">
              <OptionCheckbox
                checked={includeExecutive}
                label="Incluir resumen ejecutivo"
                icon={BarChart3}
                onToggle={() => setIncludeExecutive((v) => !v)}
              />
              <OptionCheckbox
                checked={includeDomains}
                label="Incluir análisis por dominio"
                icon={ClipboardList}
                onToggle={() => setIncludeDomains((v) => !v)}
              />
              <OptionCheckbox
                checked={includeGaps}
                label="Incluir brechas identificadas"
                icon={AlertTriangle}
                onToggle={() => setIncludeGaps((v) => !v)}
              />
              <OptionCheckbox
                checked={includeRecommendations}
                label="Incluir recomendaciones"
                icon={Lightbulb}
                onToggle={() => setIncludeRecommendations((v) => !v)}
              />
              <OptionCheckbox
                checked={includeActionPlan}
                label="Incluir plan de acción"
                icon={ListChecks}
                onToggle={() => setIncludeActionPlan((v) => !v)}
              />
            </div>
          </div>

          {/* Generate buttons */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-3">
            <button
              type="button"
              onClick={generatePDF}
              disabled={generating}
              className={cn(
                "w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl transition-all shadow-lg",
                generating
                  ? "bg-slate-300 text-slate-500 cursor-not-allowed shadow-none"
                  : "text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-blue-600/25"
              )}
            >
              {generating ? (
                <>
                  <svg
                    className="animate-spin w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Generando...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  Generar Reporte PDF
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleExportJSON}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              Exportar Evaluación (JSON)
            </button>
          </div>

          {/* Info card */}
          <div className="bg-blue-50 rounded-2xl border border-blue-100 p-5">
            <p className="text-sm font-semibold text-blue-900 mb-2">
              Sobre el reporte
            </p>
            <p className="text-xs text-blue-700 leading-relaxed">
              El reporte PDF generado incluye un análisis completo de la
              evaluación de ciberseguridad según los estándares CIP del
              Coordinador Eléctrico Nacional. El documento se marca como
              confidencial y puede utilizarse para auditorías internas y
              reportes regulatorios.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between py-6 border-t border-slate-200">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al Dashboard
        </Link>
        <Link
          href="/resultados"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
        >
          <Eye className="w-4 h-4" />
          Ver Resultados
        </Link>
      </div>
    </div>
  );
}
