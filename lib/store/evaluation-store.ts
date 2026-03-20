import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
  AnswerValue,
  DomainResult,
  EntityType,
  EvaluationState,
  ImpactLevel,
  RiskLevel,
} from '../data/types';

interface EvaluationStore {
  // State
  evaluation: EvaluationState | null;
  domainResults: DomainResult[];
  globalScore: number;
  globalRiskLevel: RiskLevel;

  // Actions
  startEvaluation: (entityName: string, entityType: EntityType, impactLevel: ImpactLevel) => void;
  setAnswer: (questionId: string, value: AnswerValue, observation?: string) => void;
  updateResults: (results: DomainResult[], globalScore: number, globalRiskLevel: RiskLevel) => void;
  markCompleted: () => void;
  resetEvaluation: () => void;
  exportEvaluation: () => string;
  importEvaluation: (json: string) => void;
}

const initialState = {
  evaluation: null,
  domainResults: [],
  globalScore: 0,
  globalRiskLevel: 'low' as RiskLevel,
};

export const useEvaluationStore = create<EvaluationStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      startEvaluation: (entityName, entityType, impactLevel) => {
        const now = new Date().toISOString();
        const evaluation: EvaluationState = {
          id: Date.now().toString(36),
          entityName,
          entityType,
          impactLevel,
          answers: {},
          startDate: now,
          lastModified: now,
          completed: false,
        };
        set({ ...initialState, evaluation });
      },

      setAnswer: (questionId, value, observation = '') => {
        const { evaluation } = get();
        if (!evaluation) return;

        const now = new Date().toISOString();
        set({
          evaluation: {
            ...evaluation,
            lastModified: now,
            answers: {
              ...evaluation.answers,
              [questionId]: {
                questionId,
                value,
                observation,
                timestamp: now,
              },
            },
          },
        });
      },

      updateResults: (results, globalScore, globalRiskLevel) => {
        set({
          domainResults: results,
          globalScore,
          globalRiskLevel,
        });
      },

      markCompleted: () => {
        const { evaluation } = get();
        if (!evaluation) return;

        set({
          evaluation: {
            ...evaluation,
            completed: true,
            lastModified: new Date().toISOString(),
          },
        });
      },

      resetEvaluation: () => {
        set({ ...initialState });
      },

      exportEvaluation: () => {
        const { evaluation, domainResults, globalScore, globalRiskLevel } = get();
        return JSON.stringify(
          { evaluation, domainResults, globalScore, globalRiskLevel },
          null,
          2
        );
      },

      importEvaluation: (json) => {
        try {
          const data = JSON.parse(json);
          if (!data || typeof data !== 'object') {
            throw new Error('Formato de datos inválido');
          }
          if (data.evaluation && typeof data.evaluation.entityName !== 'string') {
            throw new Error('Datos de evaluación inválidos');
          }
          set({
            evaluation: data.evaluation ?? null,
            domainResults: Array.isArray(data.domainResults) ? data.domainResults : [],
            globalScore: typeof data.globalScore === 'number' ? data.globalScore : 0,
            globalRiskLevel: ['critical', 'high', 'medium', 'low', 'optimal'].includes(data.globalRiskLevel)
              ? data.globalRiskLevel
              : 'low',
          });
        } catch {
          throw new Error('No se pudo importar la evaluación: archivo inválido o corrupto');
        }
      },
    }),
    {
      name: 'cybercen-evaluation',
    }
  )
);
