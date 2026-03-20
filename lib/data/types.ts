export type ImpactLevel = 'high' | 'medium' | 'low';
export type EntityType = 'generation' | 'transmission' | 'distribution';
export type AnswerValue = 'yes' | 'partial' | 'no' | null;
export type RiskLevel = 'critical' | 'high' | 'medium' | 'low' | 'optimal';

export interface CIPStandard {
  id: string;
  name: string;
  description: string;
  weight: number;
  requirements: CIPRequirement[];
  applicableImpactLevels: ImpactLevel[];
}

export interface CIPRequirement {
  id: string;
  description: string;
  applicableImpactLevels: ImpactLevel[];
}

export interface Question {
  id: string;
  cipId: string;
  requirementId: string;
  text: string;
  helpText: string;
  applicableImpactLevels: ImpactLevel[];
  applicableEntityTypes: EntityType[];
}

export interface Answer {
  questionId: string;
  value: AnswerValue;
  observation: string;
  timestamp: string;
}

export interface DomainResult {
  cipId: string;
  score: number;
  riskLevel: RiskLevel;
  totalQuestions: number;
  answeredQuestions: number;
  gaps: string[];
}

export interface EvaluationState {
  id: string;
  entityName: string;
  entityType: EntityType;
  impactLevel: ImpactLevel;
  answers: Record<string, Answer>;
  startDate: string;
  lastModified: string;
  completed: boolean;
}

export interface Recommendation {
  id: string;
  cipId: string;
  riskLevel: RiskLevel;
  title: string;
  description: string;
  priority: 'immediate' | 'short-term' | 'medium-term' | 'long-term';
  estimatedEffort: string;
  resources: string;
}
