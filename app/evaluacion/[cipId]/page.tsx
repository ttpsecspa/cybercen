import EvaluacionClient from "@/components/evaluacion/EvaluacionClient";

const CIP_ORDER = [
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

export function generateStaticParams() {
  return CIP_ORDER.map((cipId) => ({ cipId }));
}

export default async function EvaluacionPage({
  params,
}: {
  params: Promise<{ cipId: string }>;
}) {
  const { cipId } = await params;
  return <EvaluacionClient cipId={cipId} />;
}
