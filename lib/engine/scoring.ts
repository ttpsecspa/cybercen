import { AnswerValue, RiskLevel } from '../data/types';

// Score per answer: yes=100, partial=50, no=0, null=0
export function getAnswerScore(value: AnswerValue): number {
  switch (value) {
    case 'yes': return 100;
    case 'partial': return 50;
    case 'no': return 0;
    default: return 0;
  }
}

// Determine risk level from compliance score (0-100)
export function getRiskLevel(score: number): RiskLevel {
  if (score <= 25) return 'critical';
  if (score <= 50) return 'high';
  if (score <= 75) return 'medium';
  if (score <= 90) return 'low';
  return 'optimal';
}

// Get color for risk level
export function getRiskColor(level: RiskLevel): string {
  const colors: Record<RiskLevel, string> = {
    critical: '#EF4444',
    high: '#F97316',
    medium: '#EAB308',
    low: '#3B82F6',
    optimal: '#22C55E',
  };
  return colors[level];
}

// Get label in Spanish for risk level
export function getRiskLabel(level: RiskLevel): string {
  const labels: Record<RiskLevel, string> = {
    critical: 'Crítico',
    high: 'Alto',
    medium: 'Medio',
    low: 'Bajo',
    optimal: 'Óptimo',
  };
  return labels[level];
}

// Get action description in Spanish
export function getRiskAction(level: RiskLevel): string {
  const actions: Record<RiskLevel, string> = {
    critical: 'Acción inmediata requerida',
    high: 'Plan correctivo urgente',
    medium: 'Mejoras programadas necesarias',
    low: 'Optimización continua',
    optimal: 'Mantener y monitorear',
  };
  return actions[level];
}
