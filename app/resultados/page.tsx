"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  ShieldCheck,
  ShieldAlert,
  BarChart3,
  Target,
  AlertTriangle,
  FileText,
  ArrowLeft,
  TrendingUp,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils/helpers";
import { useEvaluationStore } from "@/lib/store/evaluation-store";
import { cipStandards } from "@/lib/data/cip-standards";
import { getRiskColor, getRiskLabel } from "@/lib/engine/scoring";
import { generateGapSummary } from "@/lib/engine/gap-analyzer";
import { RiskMatrix } from "@/components/resultados/RiskMatrix";
import { GapAnalysis } from "@/components/resultados/GapAnalysis";
import { Recommendations } from "@/components/resultados/Recommendations";

function ScoreGauge({
  score,
  riskLevel,
}: {
  score: number;
  riskLevel: string;
}) {
  const color = getRiskColor(riskLevel as any);
  const label = getRiskLabel(riskLevel as any);
  const circumference = 2 * Math.PI * 88;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-52 h-52">
        <svg className="w-52 h-52 -rotate-90" viewBox="0 0 200 200">
          {/* Background track */}
          <circle
            cx="100"
            cy="100"
            r="88"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="12"
          />
          {/* Score arc */}
          <circle
            cx="100"
            cy="100"
            r="88"
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-5xl font-black text-slate-900">
            {Math.round(score)}
          </span>
          <span className="text-sm font-medium text-slate-500 mt-1">
            de 100
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: color }}
        />
        <span className="text-lg font-bold" style={{ color }}>
          Riesgo {label}
        </span>
      </div>
    </div>
  );
}

export default function ResultadosPage() {
  const evaluation = useEvaluationStore((s) => s.evaluation);
  const domainResults = useEvaluationStore((s) => s.domainResults);
  const globalScore = useEvaluationStore((s) => s.globalScore);
  const globalRiskLevel = useEvaluationStore((s) => s.globalRiskLevel);

  const hasResults = domainResults.length > 0;

  const gapSummary = useMemo(
    () => (hasResults ? generateGapSummary(domainResults) : null),
    [domainResults, hasResults]
  );

  const radarData = useMemo(() => {
    return domainResults.map((dr) => {
      const standard = cipStandards.find((s) => s.id === dr.cipId);
      return {
        domain: dr.cipId.replace("CIP-0", "").replace("CIP-", ""),
        fullName: standard?.name ?? dr.cipId,
        score: dr.score,
        fullMark: 100,
      };
    });
  }, [domainResults]);

  const barData = useMemo(() => {
    return domainResults.map((dr) => {
      const standard = cipStandards.find((s) => s.id === dr.cipId);
      return {
        name: dr.cipId,
        shortName: standard?.name
          ? standard.name.length > 25
            ? standard.name.slice(0, 25) + "..."
            : standard.name
          : dr.cipId,
        score: dr.score,
        riskLevel: dr.riskLevel,
        color: getRiskColor(dr.riskLevel),
      };
    });
  }, [domainResults]);

  const criticalDomains = useMemo(
    () =>
      domainResults.filter(
        (dr) => dr.riskLevel === "critical" || dr.riskLevel === "high"
      ).length,
    [domainResults]
  );

  const avgScore = useMemo(() => {
    if (domainResults.length === 0) return 0;
    const sum = domainResults.reduce((acc, dr) => acc + dr.score, 0);
    return Math.round(sum / domainResults.length);
  }, [domainResults]);

  // Check if evaluation has any answers
  const hasAnswers =
    evaluation && Object.keys(evaluation.answers).length > 0;

  if (!hasAnswers || !hasResults) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-6">
          <ShieldAlert className="w-10 h-10 text-slate-400" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">
          Sin Resultados Disponibles
        </h1>
        <p className="text-slate-500 max-w-md mb-8">
          Complete la evaluacion para ver los resultados del analisis de riesgo,
          brechas y recomendaciones.
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

  const stats = [
    {
      label: "Dominios Evaluados",
      value: domainResults.length,
      icon: BarChart3,
      color: "text-blue-600",
      bg: "bg-blue-50 border-blue-100",
    },
    {
      label: "Puntaje Promedio",
      value: `${avgScore}%`,
      icon: TrendingUp,
      color: "text-indigo-600",
      bg: "bg-indigo-50 border-indigo-100",
    },
    {
      label: "Dominios Criticos",
      value: criticalDomains,
      icon: AlertTriangle,
      color: "text-red-600",
      bg: "bg-red-50 border-red-100",
    },
    {
      label: "Brechas Encontradas",
      value: gapSummary?.totalGaps ?? 0,
      icon: Activity,
      color: "text-orange-600",
      bg: "bg-orange-50 border-orange-100",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">
            Resultados de la Evaluacion
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            {evaluation?.entityName} &mdash;{" "}
            {new Date(evaluation?.lastModified ?? "").toLocaleDateString(
              "es-CL"
            )}
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

      {/* Score Gauge + Stats Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Score */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col items-center justify-center">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
            Puntaje Global de Cumplimiento
          </h2>
          <ScoreGauge score={globalScore} riskLevel={globalRiskLevel} />
        </div>

        {/* Stats Cards */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={cn(
                "rounded-2xl border p-6 flex items-center gap-4",
                stat.bg
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-sm",
                  stat.color
                )}
              >
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500 font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radar Chart */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-1">
            Perfil de Cumplimiento
          </h3>
          <p className="text-sm text-slate-500 mb-4">
            Puntaje por dominio CIP
          </p>
          <ResponsiveContainer width="100%" height={380}>
            <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="75%">
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis
                dataKey="domain"
                tick={{ fontSize: 11, fill: "#64748b", fontWeight: 600 }}
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                tick={{ fontSize: 10, fill: "#94a3b8" }}
                tickCount={5}
              />
              <Radar
                name="Puntaje"
                dataKey="score"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "none",
                  borderRadius: "12px",
                  color: "#fff",
                  fontSize: "13px",
                  padding: "8px 14px",
                }}
                formatter={(value: number) => [`${value}%`, "Puntaje"]}
                labelFormatter={(label: string) => {
                  const item = radarData.find((d) => d.domain === label);
                  return item ? `CIP-${label} - ${item.fullName}` : label;
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-1">
            Puntaje por Dominio
          </h3>
          <p className="text-sm text-slate-500 mb-4">
            Cumplimiento individual de cada estandar CIP
          </p>
          <ResponsiveContainer width="100%" height={380}>
            <BarChart
              data={barData}
              layout="vertical"
              margin={{ top: 0, right: 20, left: 10, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis
                type="number"
                domain={[0, 100]}
                tick={{ fontSize: 11, fill: "#94a3b8" }}
                tickFormatter={(v) => `${v}%`}
              />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fontSize: 11, fill: "#64748b", fontWeight: 500 }}
                width={65}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "none",
                  borderRadius: "12px",
                  color: "#fff",
                  fontSize: "13px",
                  padding: "8px 14px",
                }}
                formatter={(value: number) => [`${value}%`, "Puntaje"]}
                labelFormatter={(label: string) => {
                  const item = barData.find((d) => d.name === label);
                  return item ? `${label} - ${item.shortName}` : label;
                }}
              />
              <Bar dataKey="score" radius={[0, 6, 6, 0]} barSize={22}>
                {barData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Risk Matrix */}
      <RiskMatrix domainResults={domainResults} />

      {/* Gap Analysis */}
      <GapAnalysis domainResults={domainResults} standards={cipStandards} />

      {/* Recommendations */}
      <Recommendations domainResults={domainResults} />

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
