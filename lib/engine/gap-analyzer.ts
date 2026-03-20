import { CIPStandard, DomainResult, RiskLevel } from '../data/types';

/**
 * Representa una brecha individual de cumplimiento.
 */
export interface Gap {
  cipId: string;
  cipName: string;
  requirementId: string;
  description: string;
  severity: RiskLevel;
  suggestedAction: string;
}

/**
 * Resumen estadístico de todas las brechas.
 */
export interface GapSummary {
  totalGaps: number;
  criticalGaps: number;
  highGaps: number;
  mediumGaps: number;
  lowGaps: number;
  percentCompliant: number;
}

/**
 * Brechas agrupadas por nivel de prioridad.
 */
export interface GapsByPriority {
  critical: Gap[];
  high: Gap[];
  medium: Gap[];
  low: Gap[];
}

// Orden numérico de severidad para ordenamiento (menor = más severo)
const severityOrder: Record<RiskLevel, number> = {
  critical: 0,
  high: 1,
  medium: 2,
  low: 3,
  optimal: 4,
};

/**
 * Obtiene la acción sugerida en español según la severidad del dominio.
 */
function getSuggestedAction(severity: RiskLevel, description: string): string {
  if (description.includes('(No cumple)')) {
    switch (severity) {
      case 'critical':
        return 'Implementar controles de forma inmediata. Este requisito es crítico para la seguridad del sistema.';
      case 'high':
        return 'Desarrollar e implementar un plan correctivo en un plazo máximo de 30 días.';
      case 'medium':
        return 'Programar la implementación de este control dentro del próximo trimestre.';
      case 'low':
        return 'Incluir en el plan de mejora continua para el próximo ciclo de evaluación.';
      default:
        return 'Mantener monitoreo y documentación actualizada.';
    }
  }

  // Cumplimiento parcial o sin respuesta
  switch (severity) {
    case 'critical':
      return 'Completar la implementación de forma urgente. El cumplimiento parcial representa un riesgo significativo.';
    case 'high':
      return 'Reforzar los controles existentes y completar la implementación en un plazo de 60 días.';
    case 'medium':
      return 'Evaluar las deficiencias y programar mejoras dentro del próximo semestre.';
    case 'low':
      return 'Documentar el estado actual y planificar mejoras incrementales.';
    default:
      return 'Verificar el estado de cumplimiento y actualizar la documentación.';
  }
}

/**
 * Extrae el nombre del CIP desde la descripción de la brecha.
 * Las brechas tienen formato: [CIP-XXX Nombre] Texto (Estado)
 */
function extractCipName(gapDescription: string): string {
  const match = gapDescription.match(/^\[([^\]]+)\]/);
  return match ? match[1] : '';
}

/**
 * Extrae la descripción limpia de la brecha (sin el prefijo CIP).
 */
function extractCleanDescription(gapDescription: string): string {
  return gapDescription.replace(/^\[[^\]]+\]\s*/, '');
}

/**
 * Convierte las brechas de un DomainResult en objetos Gap estructurados.
 */
function domainGapsToStructured(domainResult: DomainResult): Gap[] {
  const gaps: Gap[] = [];

  for (const gapText of domainResult.gaps) {
    const cipName = extractCipName(gapText);
    const description = extractCleanDescription(gapText);

    gaps.push({
      cipId: domainResult.cipId,
      cipName,
      requirementId: domainResult.cipId,
      description,
      severity: domainResult.riskLevel,
      suggestedAction: getSuggestedAction(domainResult.riskLevel, gapText),
    });
  }

  return gaps;
}

/**
 * Analiza todas las brechas de todos los dominios y las retorna
 * ordenadas por severidad (más críticas primero).
 */
export function analyzeGaps(domainResults: DomainResult[]): Gap[] {
  const allGaps: Gap[] = [];

  for (const domain of domainResults) {
    const structured = domainGapsToStructured(domain);
    allGaps.push(...structured);
  }

  // Ordenar por severidad (más crítico primero)
  allGaps.sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity]);

  return allGaps;
}

/**
 * Retorna las N brechas más críticas.
 */
export function getTopGaps(domainResults: DomainResult[], count: number): Gap[] {
  const sorted = analyzeGaps(domainResults);
  return sorted.slice(0, count);
}

/**
 * Agrupa las brechas por nivel de prioridad.
 */
export function getGapsByPriority(domainResults: DomainResult[]): GapsByPriority {
  const allGaps = analyzeGaps(domainResults);

  const result: GapsByPriority = {
    critical: [],
    high: [],
    medium: [],
    low: [],
  };

  for (const gap of allGaps) {
    switch (gap.severity) {
      case 'critical':
        result.critical.push(gap);
        break;
      case 'high':
        result.high.push(gap);
        break;
      case 'medium':
        result.medium.push(gap);
        break;
      case 'low':
      case 'optimal':
        result.low.push(gap);
        break;
    }
  }

  return result;
}

/**
 * Genera un resumen estadístico de todas las brechas.
 */
export function generateGapSummary(domainResults: DomainResult[]): GapSummary {
  const gaps = analyzeGaps(domainResults);
  const byPriority = getGapsByPriority(domainResults);

  // Calcular total de preguntas y preguntas sin brechas
  let totalQuestions = 0;
  let totalGapsCount = 0;

  for (const domain of domainResults) {
    totalQuestions += domain.totalQuestions;
    totalGapsCount += domain.gaps.length;
  }

  const compliantQuestions = totalQuestions - totalGapsCount;
  const percentCompliant =
    totalQuestions > 0
      ? Math.round((compliantQuestions / totalQuestions) * 10000) / 100
      : 0;

  return {
    totalGaps: gaps.length,
    criticalGaps: byPriority.critical.length,
    highGaps: byPriority.high.length,
    mediumGaps: byPriority.medium.length,
    lowGaps: byPriority.low.length,
    percentCompliant,
  };
}
