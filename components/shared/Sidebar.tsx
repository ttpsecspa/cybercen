"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  BarChart3,
  ClipboardList,
  FileText,
  ShieldCheck,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils/helpers";

type DomainStatus = "complete" | "in-progress" | "not-started";

interface SidebarProps {
  activePath: string;
  domainStatuses: Record<string, DomainStatus>;
}

const CIP_DOMAINS = [
  { id: "CIP-002", name: "Categorización de Ciber Activos" },
  { id: "CIP-003", name: "Controles de Gestión de Seguridad" },
  { id: "CIP-004", name: "Personal y Capacitación" },
  { id: "CIP-005", name: "Perímetro de Seguridad Electrónica" },
  { id: "CIP-006", name: "Seguridad Física" },
  { id: "CIP-007", name: "Gestión de Seguridad de Sistemas" },
  { id: "CIP-008", name: "Respuesta a Incidentes" },
  { id: "CIP-009", name: "Planes de Recuperación" },
  { id: "CIP-010", name: "Gestión de Cambios y Vulnerabilidades" },
  { id: "CIP-011", name: "Protección de Información" },
  { id: "CIP-013", name: "Gestión de Riesgo en Cadena de Suministro" },
  { id: "CIP-014", name: "Seguridad Física de Instalaciones" },
];

const STATUS_COLORS: Record<DomainStatus, string> = {
  complete: "bg-optimal",
  "in-progress": "bg-medium",
  "not-started": "bg-slate-500",
};

const STATUS_LABELS: Record<DomainStatus, string> = {
  complete: "Completado",
  "in-progress": "En progreso",
  "not-started": "No iniciado",
};

export function Sidebar({ activePath, domainStatuses }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => activePath === path;

  const navLinkClass = (path: string) =>
    cn(
      "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
      isActive(path)
        ? "bg-blue-600 text-white"
        : "text-slate-300 hover:bg-slate-700 hover:text-white"
    );

  const sidebarContent = (
    <nav className="flex flex-col h-full">
      {/* Sección principal */}
      <div className="px-3 pt-4 pb-2">
        <Link
          href="/"
          className={navLinkClass("/")}
          onClick={() => setMobileOpen(false)}
        >
          <LayoutDashboard className="w-4 h-4 shrink-0" />
          <span>Dashboard</span>
        </Link>
      </div>

      {/* Sección de Evaluación */}
      <div className="px-3 py-2">
        <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Evaluación</span>
        </div>
        <div className="mt-1 flex flex-col gap-0.5 max-h-[calc(100vh-360px)] overflow-y-auto scrollbar-thin">
          {CIP_DOMAINS.map((domain) => {
            const path = `/evaluacion/${domain.id}`;
            const status = domainStatuses[domain.id] ?? "not-started";
            return (
              <Link
                key={domain.id}
                href={path}
                className={cn(
                  navLinkClass(path),
                  "group relative"
                )}
                onClick={() => setMobileOpen(false)}
                title={`${domain.id}: ${domain.name}`}
              >
                <span
                  className={cn(
                    "w-2 h-2 rounded-full shrink-0",
                    STATUS_COLORS[status]
                  )}
                  aria-label={STATUS_LABELS[status]}
                />
                <span className="truncate">
                  <span className="font-semibold">{domain.id}</span>
                  <span className="ml-1.5 text-xs opacity-70 hidden lg:inline">
                    {domain.name.length > 22
                      ? domain.name.slice(0, 22) + "…"
                      : domain.name}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Separador */}
      <div className="mx-5 my-2 border-t border-slate-700" />

      {/* Sección de análisis */}
      <div className="px-3 pb-4 flex flex-col gap-0.5">
        <Link
          href="/resultados"
          className={navLinkClass("/resultados")}
          onClick={() => setMobileOpen(false)}
        >
          <BarChart3 className="w-4 h-4 shrink-0" />
          <span>Resultados</span>
        </Link>
        <Link
          href="/plan-accion"
          className={navLinkClass("/plan-accion")}
          onClick={() => setMobileOpen(false)}
        >
          <ClipboardList className="w-4 h-4 shrink-0" />
          <span>Plan de Acción</span>
        </Link>
        <Link
          href="/reportes"
          className={navLinkClass("/reportes")}
          onClick={() => setMobileOpen(false)}
        >
          <FileText className="w-4 h-4 shrink-0" />
          <span>Reportes</span>
        </Link>
      </div>

      {/* Pie del sidebar */}
      <div className="mt-auto px-5 py-3 border-t border-slate-700">
        <p className="text-[10px] text-slate-500 leading-snug">
          Basado en los estándares NERC CIP adaptados al Coordinador Eléctrico
          Nacional
        </p>
      </div>
    </nav>
  );

  return (
    <>
      {/* Botón hamburguesa para móvil */}
      <button
        type="button"
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-3 right-4 z-[60] p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-sm sm:hidden"
        aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Overlay para móvil */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 sm:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-slate-800 transition-transform duration-200 ease-in-out sm:relative sm:translate-x-0 sm:z-auto",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Espacio para el navbar en móvil */}
        <div className="h-[60px] sm:h-0" />
        {sidebarContent}
      </aside>
    </>
  );
}
