"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils/helpers";

const PATH_LABELS: Record<string, string> = {
  evaluacion: "Evaluación",
  resultados: "Resultados",
  "plan-accion": "Plan de Acción",
  reportes: "Reportes",
};

const CIP_PATTERN = /^CIP-\d{3}$/;

function getLabel(segment: string): string {
  if (PATH_LABELS[segment]) return PATH_LABELS[segment];
  if (CIP_PATTERN.test(segment)) return segment;
  return segment;
}

interface BreadcrumbItem {
  label: string;
  href: string;
  isLast: boolean;
}

interface BreadcrumbsProps {
  className?: string;
}

export function Breadcrumbs({ className }: BreadcrumbsProps) {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const items: BreadcrumbItem[] = [
    {
      label: "Dashboard",
      href: "/",
      isLast: segments.length === 0,
    },
  ];

  segments.forEach((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    items.push({
      label: getLabel(segment),
      href,
      isLast: index === segments.length - 1,
    });
  });

  // No mostrar breadcrumbs si solo estamos en Dashboard
  if (items.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumbs" className={cn("mb-4", className)}>
      <ol className="flex items-center gap-1.5 text-sm">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {index > 0 && (
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            )}

            {item.isLast ? (
              <span className="font-semibold text-slate-700 flex items-center gap-1">
                {index === 0 && <Home className="h-3.5 w-3.5" />}
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="flex items-center gap-1 text-slate-500 transition-colors hover:text-indigo-600"
              >
                {index === 0 && <Home className="h-3.5 w-3.5" />}
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
