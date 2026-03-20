import {
  Answer,
  AnswerValue,
  CIPStandard,
  DomainResult,
  ImpactLevel,
  Question,
  RiskLevel,
} from '../data/types';
import { getAnswerScore, getRiskLevel } from './scoring';

/**
 * Filtra las preguntas aplicables a un dominio CIP y nivel de impacto dado.
 */
function getApplicableQuestions(
  cipId: string,
  questions: Question[],
  impactLevel: ImpactLevel
): Question[] {
  return questions.filter(
    (q) =>
      q.cipId === cipId &&
      q.applicableImpactLevels.includes(impactLevel)
  );
}

/**
 * Busca la respuesta para una pregunta específica dentro del mapa de respuestas.
 */
function findAnswer(
  questionId: string,
  answers: Record<string, Answer>
): Answer | undefined {
  return answers[questionId];
}

/**
 * Calcula el puntaje de cumplimiento (0-100) para UN dominio CIP.
 * Solo considera preguntas aplicables al nivel de impacto.
 * Si no hay preguntas aplicables, retorna 0.
 */
export function calculateDomainScore(
  cipId: string,
  answers: Record<string, Answer>,
  questions: Question[],
  impactLevel: ImpactLevel
): number {
  const applicable = getApplicableQuestions(cipId, questions, impactLevel);

  if (applicable.length === 0) {
    return 0;
  }

  let totalScore = 0;

  for (const question of applicable) {
    const answer = findAnswer(question.id, answers);
    const value: AnswerValue = answer ? answer.value : null;
    totalScore += getAnswerScore(value);
  }

  return Math.round((totalScore / applicable.length) * 100) / 100;
}

/**
 * Calcula el resultado completo de un dominio CIP, incluyendo brechas (gaps).
 * Las brechas son preguntas respondidas con "no" o "partial".
 */
export function calculateDomainResult(
  cipId: string,
  answers: Record<string, Answer>,
  questions: Question[],
  impactLevel: ImpactLevel,
  standards: CIPStandard[]
): DomainResult {
  const applicable = getApplicableQuestions(cipId, questions, impactLevel);
  const score = calculateDomainScore(cipId, answers, questions, impactLevel);
  const riskLevel = getRiskLevel(score);

  let answeredQuestions = 0;
  const gaps: string[] = [];

  for (const question of applicable) {
    const answer = findAnswer(question.id, answers);
    const value: AnswerValue = answer ? answer.value : null;

    if (value !== null) {
      answeredQuestions++;
    }

    // Identificar brechas: respuestas "no", "partial", o sin respuesta
    if (value === 'no' || value === 'partial' || value === null) {
      const standard = standards.find((s) => s.id === cipId);
      const prefix = standard ? `[${standard.name}]` : `[${cipId}]`;
      const status =
        value === 'partial'
          ? '(Cumplimiento parcial)'
          : value === 'no'
          ? '(No cumple)'
          : '(Sin respuesta)';
      gaps.push(`${prefix} ${question.text} ${status}`);
    }
  }

  return {
    cipId,
    score,
    riskLevel,
    totalQuestions: applicable.length,
    answeredQuestions,
    gaps,
  };
}

/**
 * Calcula el puntaje global ponderado usando los pesos de cada estándar CIP.
 * Cada dominio contribuye proporcionalmente según su peso (weight).
 * Si la suma de pesos es 0, retorna 0.
 */
export function calculateGlobalScore(
  domainResults: DomainResult[],
  standards: CIPStandard[]
): number {
  let weightedSum = 0;
  let totalWeight = 0;

  for (const result of domainResults) {
    const standard = standards.find((s) => s.id === result.cipId);
    const weight = standard ? standard.weight : 0;

    weightedSum += result.score * weight;
    totalWeight += weight;
  }

  if (totalWeight === 0) {
    return 0;
  }

  return Math.round((weightedSum / totalWeight) * 100) / 100;
}

/**
 * Calcula los resultados de TODOS los dominios CIP disponibles.
 * Itera sobre todos los estándares y genera un DomainResult para cada uno.
 */
export function calculateAllDomains(
  answers: Record<string, Answer>,
  questions: Question[],
  impactLevel: ImpactLevel,
  standards: CIPStandard[]
): DomainResult[] {
  const results: DomainResult[] = [];

  for (const standard of standards) {
    const result = calculateDomainResult(
      standard.id,
      answers,
      questions,
      impactLevel,
      standards
    );
    results.push(result);
  }

  return results;
}

/**
 * Determina el nivel de riesgo global basado en el puntaje global.
 */
export function getOverallRiskLevel(globalScore: number): RiskLevel {
  return getRiskLevel(globalScore);
}
