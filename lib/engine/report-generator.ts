import {
  DomainResult,
  EvaluationState,
  Recommendation,
  RiskLevel,
} from '../data/types';
import { getRiskAction, getRiskLabel, getRiskLevel } from './scoring';
import { analyzeGaps, Gap, generateGapSummary, GapSummary } from './gap-analyzer';

/**
 * Resumen de un dominio individual para el reporte.
 */
export interface DomainSummary {
  cipId: string;
  cipName: string;
  score: number;
  riskLevel: RiskLevel;
  riskLabel: string;
  totalQuestions: number;
  answeredQuestions: number;
  gapCount: number;
  action: string;
}

/**
 * Información de la entidad evaluada.
 */
export interface EntityInfo {
  name: string;
  type: string;
  impactLevel: string;
}

/**
 * Resumen ejecutivo del reporte.
 */
export interface ExecutiveSummary {
  title: string;
  overview: string;
  globalScore: number;
  riskLevel: RiskLevel;
  riskLabel: string;
  totalDomains: number;
  criticalDomains: number;
  highRiskDomains: number;
  compliantDomains: number;
  gapSummary: GapSummary;
  mainRecommendation: string;
}

/**
 * Estructura completa de datos para generar el reporte.
 */
export interface ReportData {
  executiveSummary: ExecutiveSummary;
  entityInfo: EntityInfo;
  globalScore: number;
  riskLevel: RiskLevel;
  domainSummaries: DomainSummary[];
  gaps: Gap[];
  recommendations: Recommendation[];
  timestamp: string;
}

/**
 * Traduce el tipo de entidad al español.
 */
function translateEntityType(type: string): string {
  const types: Record<string, string> = {
    generation: 'Generación',
    transmission: 'Transmisión',
    distribution: 'Distribución',
  };
  return types[type] || type;
}

/**
 * Traduce el nivel de impacto al español.
 */
function translateImpactLevel(level: string): string {
  const levels: Record<string, string> = {
    high: 'Alto',
    medium: 'Medio',
    low: 'Bajo',
  };
  return levels[level] || level;
}

/**
 * Genera el texto de resumen general basado en los resultados.
 */
function generateOverviewText(
  entityName: string,
  globalScore: number,
  riskLevel: RiskLevel,
  totalDomains: number,
  criticalDomains: number,
  gapSummary: GapSummary
): string {
  const riskLabel = getRiskLabel(riskLevel);

  let overview = `La evaluación de ciberseguridad de ${entityName} arroja un puntaje global de ${globalScore.toFixed(1)}%, `;
  overview += `correspondiente a un nivel de riesgo ${riskLabel}. `;

  if (criticalDomains > 0) {
    overview += `Se identificaron ${criticalDomains} dominio(s) en estado crítico que requieren atención inmediata. `;
  }

  overview += `Del total de ${totalDomains} dominios evaluados, se detectaron ${gapSummary.totalGaps} brecha(s) de cumplimiento. `;
  overview += `El porcentaje de cumplimiento general es de ${gapSummary.percentCompliant.toFixed(1)}%.`;

  return overview;
}

/**
 * Genera la recomendación principal basada en el estado general.
 */
function generateMainRecommendation(
  riskLevel: RiskLevel,
  criticalDomains: number,
  gapSummary: GapSummary
): string {
  if (riskLevel === 'critical' || criticalDomains > 0) {
    return `Se requiere acción inmediata para abordar las ${gapSummary.criticalGaps} brecha(s) críticas identificadas. ` +
      `Se recomienda establecer un comité de emergencia de ciberseguridad y desarrollar un plan de remediación ` +
      `con plazos no superiores a 30 días para los hallazgos críticos.`;
  }

  if (riskLevel === 'high') {
    return `Se recomienda desarrollar un plan correctivo urgente para abordar las ${gapSummary.highGaps} brecha(s) de alto riesgo. ` +
      `Priorizar la asignación de recursos para la implementación de controles de seguridad faltantes ` +
      `dentro de los próximos 60 días.`;
  }

  if (riskLevel === 'medium') {
    return `Se recomienda elaborar un plan de mejoras programadas para abordar las brechas identificadas. ` +
      `Establecer un cronograma de implementación trimestral y asegurar el seguimiento continuo ` +
      `de los avances en cada dominio.`;
  }

  if (riskLevel === 'low') {
    return `El nivel de cumplimiento es satisfactorio. Se recomienda mantener el programa de mejora continua, ` +
      `enfocándose en la optimización de los controles existentes y la actualización periódica ` +
      `de las políticas de ciberseguridad.`;
  }

  return `Excelente nivel de cumplimiento. Se recomienda mantener las prácticas actuales, ` +
    `realizar auditorías periódicas y mantenerse actualizado respecto a nuevas amenazas ` +
    `y actualizaciones normativas del sector eléctrico.`;
}

/**
 * Genera los datos completos del reporte de evaluación de ciberseguridad.
 *
 * @param evaluation - Estado de la evaluación actual
 * @param domainResults - Resultados calculados por dominio
 * @param globalScore - Puntaje global ponderado (0-100)
 * @param recommendations - Lista de recomendaciones generadas
 * @returns Estructura ReportData completa para renderizar el reporte
 */
export function generateReportData(
  evaluation: EvaluationState,
  domainResults: DomainResult[],
  globalScore: number,
  recommendations: Recommendation[]
): ReportData {
  const riskLevel = getRiskLevel(globalScore);
  const riskLabel = getRiskLabel(riskLevel);
  const gaps = analyzeGaps(domainResults);
  const gapSummary = generateGapSummary(domainResults);

  // Contar dominios por nivel de riesgo
  const criticalDomains = domainResults.filter((d) => d.riskLevel === 'critical').length;
  const highRiskDomains = domainResults.filter((d) => d.riskLevel === 'high').length;
  const compliantDomains = domainResults.filter(
    (d) => d.riskLevel === 'optimal' || d.riskLevel === 'low'
  ).length;

  // Generar resumenes por dominio
  const domainSummaries: DomainSummary[] = domainResults.map((result) => {
    const cipName = result.cipId;
    return {
      cipId: result.cipId,
      cipName,
      score: result.score,
      riskLevel: result.riskLevel,
      riskLabel: getRiskLabel(result.riskLevel),
      totalQuestions: result.totalQuestions,
      answeredQuestions: result.answeredQuestions,
      gapCount: result.gaps.length,
      action: getRiskAction(result.riskLevel),
    };
  });

  // Información de la entidad
  const entityInfo: EntityInfo = {
    name: evaluation.entityName,
    type: translateEntityType(evaluation.entityType),
    impactLevel: translateImpactLevel(evaluation.impactLevel),
  };

  // Resumen ejecutivo
  const executiveSummary: ExecutiveSummary = {
    title: `Reporte de Evaluación de Ciberseguridad - ${evaluation.entityName}`,
    overview: generateOverviewText(
      evaluation.entityName,
      globalScore,
      riskLevel,
      domainResults.length,
      criticalDomains,
      gapSummary
    ),
    globalScore,
    riskLevel,
    riskLabel,
    totalDomains: domainResults.length,
    criticalDomains,
    highRiskDomains,
    compliantDomains,
    gapSummary,
    mainRecommendation: generateMainRecommendation(
      riskLevel,
      criticalDomains,
      gapSummary
    ),
  };

  return {
    executiveSummary,
    entityInfo,
    globalScore,
    riskLevel,
    domainSummaries,
    gaps,
    recommendations,
    timestamp: new Date().toISOString(),
  };
}
