import { RiskLevel, ImpactLevel } from './types';

export interface RiskThreshold {
  min: number;
  max: number;
  level: RiskLevel;
  label: string;
  color: string;
}

export const riskThresholds: RiskThreshold[] = [
  { min: 0, max: 20, level: 'critical', label: 'Critico', color: '#DC2626' },
  { min: 21, max: 40, level: 'high', label: 'Alto', color: '#EA580C' },
  { min: 41, max: 60, level: 'medium', label: 'Medio', color: '#CA8A04' },
  { min: 61, max: 80, level: 'low', label: 'Bajo', color: '#2563EB' },
  { min: 81, max: 100, level: 'optimal', label: 'Optimo', color: '#16A34A' },
];

export const cipWeights: Record<string, number> = {
  'CIP-002': 10,
  'CIP-003': 10,
  'CIP-004': 8,
  'CIP-005': 10,
  'CIP-006': 8,
  'CIP-007': 10,
  'CIP-008': 8,
  'CIP-009': 8,
  'CIP-010': 8,
  'CIP-011': 6,
  'CIP-013': 7,
  'CIP-014': 7,
};

export const impactMultipliers: Record<ImpactLevel, number> = {
  high: 1.0,
  medium: 0.85,
  low: 0.7,
};

export function getRiskLevelFromScore(score: number): RiskLevel {
  const threshold = riskThresholds.find(
    (t) => score >= t.min && score <= t.max
  );
  return threshold ? threshold.level : 'critical';
}

export function getRiskThreshold(level: RiskLevel): RiskThreshold {
  const threshold = riskThresholds.find((t) => t.level === level);
  if (!threshold) {
    return riskThresholds[0];
  }
  return threshold;
}

export function getRiskLabel(level: RiskLevel): string {
  return getRiskThreshold(level).label;
}

export function getRiskColor(level: RiskLevel): string {
  return getRiskThreshold(level).color;
}

export function calculateDomainScore(
  answered: number,
  total: number,
  yesCount: number,
  partialCount: number
): number {
  if (total === 0) return 0;
  const rawScore = ((yesCount * 1.0 + partialCount * 0.5) / total) * 100;
  return Math.round(rawScore * 100) / 100;
}

export function calculateOverallScore(
  domainScores: Record<string, number>
): number {
  let weightedSum = 0;
  let totalWeight = 0;

  for (const [cipId, score] of Object.entries(domainScores)) {
    const weight = cipWeights[cipId] || 0;
    weightedSum += score * weight;
    totalWeight += weight;
  }

  if (totalWeight === 0) return 0;
  return Math.round((weightedSum / totalWeight) * 100) / 100;
}

export function adjustScoreForImpact(
  score: number,
  impactLevel: ImpactLevel
): number {
  const multiplier = impactMultipliers[impactLevel];
  const adjustedScore = score * multiplier;
  return Math.round(adjustedScore * 100) / 100;
}
