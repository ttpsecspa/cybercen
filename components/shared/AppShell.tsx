"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { useEvaluationStore } from "@/lib/store/evaluation-store";

const CIP_IDS = [
  "CIP-002",
  "CIP-003",
  "CIP-004",
  "CIP-005",
  "CIP-006",
  "CIP-007",
  "CIP-008",
  "CIP-009",
  "CIP-010",
  "CIP-011",
  "CIP-013",
  "CIP-014",
];

type DomainStatus = "complete" | "in-progress" | "not-started";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const evaluation = useEvaluationStore((s) => s.evaluation);
  const domainResults = useEvaluationStore((s) => s.domainResults);
  const globalScore = useEvaluationStore((s) => s.globalScore);

  const domainStatuses = useMemo<Record<string, DomainStatus>>(() => {
    const statuses: Record<string, DomainStatus> = {};

    for (const cipId of CIP_IDS) {
      if (!evaluation) {
        statuses[cipId] = "not-started";
        continue;
      }

      const result = domainResults.find((r) => r.cipId === cipId);

      if (!result) {
        // Check if any answers exist for this domain
        const hasAnswers = Object.keys(evaluation.answers).some((key) =>
          key.startsWith(cipId)
        );
        statuses[cipId] = hasAnswers ? "in-progress" : "not-started";
        continue;
      }

      if (result.answeredQuestions >= result.totalQuestions && result.totalQuestions > 0) {
        statuses[cipId] = "complete";
      } else if (result.answeredQuestions > 0) {
        statuses[cipId] = "in-progress";
      } else {
        statuses[cipId] = "not-started";
      }
    }

    return statuses;
  }, [evaluation, domainResults]);

  const globalProgress = useMemo(() => {
    if (!evaluation || domainResults.length === 0) return 0;

    const totalQuestions = domainResults.reduce(
      (sum, r) => sum + r.totalQuestions,
      0
    );
    const answeredQuestions = domainResults.reduce(
      (sum, r) => sum + r.answeredQuestions,
      0
    );

    if (totalQuestions === 0) return 0;
    return Math.round((answeredQuestions / totalQuestions) * 100);
  }, [evaluation, domainResults]);

  return (
    <div className="flex flex-col h-screen">
      <Navbar globalProgress={globalProgress} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activePath={pathname} domainStatuses={domainStatuses} />
        <main className="flex-1 overflow-y-auto bg-slate-50 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
