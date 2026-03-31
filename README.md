[![MIT License](https://img.shields.io/badge/Licencia-MIT-blue.svg)](LICENSE)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.2-black.svg)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6.svg)](https://www.typescriptlang.org)
[![Deploy](https://img.shields.io/github/actions/workflow/status/ttpsecspa/cybercen/deploy.yml?label=deploy)](https://github.com/ttpsecspa/cybercen/actions)
[![OWASP](https://img.shields.io/badge/OWASP-Compliant-green.svg)](docs/OWASP_MAPPING.md)

# CyberCEN

*Herramienta de autoevaluación de ciberseguridad para el sector eléctrico de Chile, basada en los estándares NERC CIP adaptados al Coordinador Eléctrico Nacional (CEN).*

| Stack | Licencia | Estado | Versión |
|-------|----------|--------|---------|
| Next.js 16 + React 19 + TypeScript 5 + Tailwind CSS 4 | MIT | Stable | v2.4 |

**Demo en vivo:** [ttpsecspa.github.io/cybercen](https://ttpsecspa.github.io/cybercen) — Haz clic en **"Ver Demo"** para explorar con datos ficticios precargados.

---

## Tabla de Contenidos

- [Descripción](#descripción)
- [Arquitectura](#arquitectura)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Configuración](#configuración)
- [Dominios CIP](#dominios-cip)
- [Motor de Riesgo](#motor-de-riesgo)
- [Seguridad](#-seguridad)
- [Testing](#-testing)
- [Contribución](#-contribución)
- [Roadmap](#-roadmap)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## Descripción

CyberCEN permite a las organizaciones del sector eléctrico chileno evaluar su nivel de cumplimiento del Estándar de Ciberseguridad del CEN, basado en NERC CIP (Critical Infrastructure Protection). Las 500+ empresas coordinadas por el CEN deben cumplir requisitos de ciberseguridad y entregar reportes anuales.

Esta herramienta ofrece un autodiagnóstico rápido, calcula el nivel de riesgo y sugiere acciones correctivas para cada dominio.

**Características principales:**

- **12 Dominios CIP** — Evaluación integral basada en NERC CIP-002 a CIP-014
- **120 Controles** — Preguntas adaptadas por tipo de entidad y nivel de impacto
- **Motor de Riesgo** — Cálculo ponderado con 5 niveles (Crítico/Alto/Medio/Bajo/Óptimo)
- **Análisis de Brechas** — Identificación automática de vulnerabilidades por prioridad
- **Plan de Acción** — Recomendaciones priorizadas con plazos y recursos estimados
- **Reporte PDF** — Exportación profesional compatible con requerimientos SEC/CEN
- **100% Privada** — Sin backend, sin tracking, sin registro. Todo en el navegador
- **Modo Demo** — Visualización instantánea con datos ficticios precargados

---

## Arquitectura

```
┌─────────────────────────────────────────────────────┐
│                   GitHub Pages                       │
│              (Static HTML Export)                     │
└──────────────────────┬──────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────┐
│                  Next.js App Router                   │
│  ┌──────────┬────────────┬──────────┬─────────────┐ │
│  │ Landing  │ Evaluación │Resultados│  Reportes   │ │
│  │  Page    │  [cipId]   │  + Gaps  │  PDF Export  │ │
│  └────┬─────┴─────┬──────┴────┬─────┴──────┬──────┘ │
│       │           │           │            │         │
│  ┌────▼───────────▼───────────▼────────────▼──────┐ │
│  │            Zustand Store (localStorage)         │ │
│  │   evaluation | answers | domainResults | score  │ │
│  └────────────────────┬───────────────────────────┘ │
│                       │                              │
│  ┌────────────────────▼───────────────────────────┐ │
│  │              Calculation Engine                  │ │
│  │  scoring.ts | risk-calculator.ts | gap-analyzer │ │
│  └────────────────────┬───────────────────────────┘ │
│                       │                              │
│  ┌────────────────────▼───────────────────────────┐ │
│  │               Static Data Layer                  │ │
│  │  cip-standards | questions | recommendations    │ │
│  │  (120 preguntas, 12 dominios, 60+ acciones)     │ │
│  └────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

**Componentes clave:**

| Componente | Ubicación | Función |
|------------|-----------|---------|
| Landing Page | `app/page.tsx` | Portada, demo, configuración de evaluación |
| Evaluación | `app/evaluacion/[cipId]/` | Formulario de preguntas por dominio CIP |
| Motor de Riesgo | `lib/engine/` | Cálculo de scores, brechas y nivel de riesgo |
| Store | `lib/store/evaluation-store.ts` | Estado global con persistencia en localStorage |
| Datos CIP | `lib/data/` | 12 estándares, 120 preguntas, recomendaciones |
| Reportes | `lib/engine/report-generator.ts` | Generación de resumen ejecutivo y PDF |

---

## Requisitos Previos

| Requisito | Versión Mínima |
|-----------|---------------|
| Node.js | 20.x |
| npm | 9.x |
| Git | 2.x |
| Navegador | Chrome 90+, Firefox 88+, Safari 14+, Edge 90+ |

**Sistemas operativos soportados:** Windows 10+, macOS 12+, Linux (Ubuntu 20.04+)

No requiere variables de entorno. La aplicación funciona completamente en el cliente.

---

## Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/ttpsecspa/cybercen.git
cd cybercen

# 2. Instalar dependencias
npm ci

# 3. Iniciar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

### Build de producción

```bash
# Generar export estático
npm run build

# Los archivos se generan en ./out/
# Servir localmente para verificar:
npx serve out
```

### Deploy en GitHub Pages

El proyecto incluye un workflow de GitHub Actions (`.github/workflows/deploy.yml`) que despliega automáticamente al hacer push a `master`.

---

## Uso

### Inicio rápido

1. Abrir la aplicación en el navegador
2. Elegir **"Ver Demo"** para explorar con datos ficticios, o **"Iniciar con datos reales"** para evaluar su organización
3. Seleccionar tipo de entidad (Generación/Transmisión/Distribución) y nivel de impacto (Alto/Medio/Bajo)
4. Responder las preguntas de cada dominio CIP (Sí/Parcial/No)
5. Revisar resultados en el panel de control
6. Consultar el análisis de brechas y plan de acción
7. Exportar reporte PDF

### Flujo de evaluación

```
Inicio → Configurar entidad → Evaluar 12 dominios CIP
       → Ver dashboard con scores → Análisis de brechas
       → Plan de acción priorizado → Exportar reporte PDF
```

### Modo Demo

El botón **"Ver Demo"** precarga 120 respuestas con un patrón realista (~62% cumplimiento) para una empresa de generación eléctrica con impacto medio. Permite explorar todas las funcionalidades sin ingresar datos.

---

## Configuración

### next.config.ts

```typescript
const nextConfig: NextConfig = {
  output: 'export',                                          // Export estático
  basePath: process.env.NODE_ENV === 'production' ? '/cybercen' : '', // GitHub Pages
  images: { unoptimized: true },                             // Sin optimización de imágenes
};
```

### Parámetros del motor de riesgo

| Parámetro | Tipo | Default | Descripción |
|-----------|------|---------|-------------|
| `yes` score | number | 100 | Puntuación para respuesta "Sí" |
| `partial` score | number | 50 | Puntuación para respuesta "Parcial" |
| `no` score | number | 0 | Puntuación para respuesta "No" |
| Nivel Crítico | rango | 0-25% | Acción inmediata requerida |
| Nivel Alto | rango | 26-50% | Plan correctivo urgente |
| Nivel Medio | rango | 51-75% | Mejoras programadas |
| Nivel Bajo | rango | 76-90% | Optimización continua |
| Nivel Óptimo | rango | 91-100% | Mantener y monitorear |

---

## Dominios CIP

| # | CIP | Dominio | Peso |
|---|-----|---------|------|
| 1 | CIP-002 | Categorización de Ciber Activos BES | 10% |
| 2 | CIP-003 | Controles de Gestión de Seguridad | 10% |
| 3 | CIP-004 | Personal y Capacitación | 8% |
| 4 | CIP-005 | Perímetros de Seguridad Electrónica | 10% |
| 5 | CIP-006 | Seguridad Física | 8% |
| 6 | CIP-007 | Gestión de Seguridad de Sistemas | 10% |
| 7 | CIP-008 | Reporte y Respuesta a Incidentes | 8% |
| 8 | CIP-009 | Planes de Recuperación | 8% |
| 9 | CIP-010 | Gestión de Cambios y Vulnerabilidades | 8% |
| 10 | CIP-011 | Protección de Información | 6% |
| 11 | CIP-013 | Gestión de Riesgo de Cadena de Suministro | 7% |
| 12 | CIP-014 | Seguridad Física de Infraestructura Crítica | 7% |

Cada dominio contiene 10 preguntas de evaluación adaptables según el tipo de entidad y nivel de impacto seleccionado.

---

## Motor de Riesgo

### Cálculo de score por dominio

```
Score_dominio = (Σ puntuación_respuestas / total_preguntas_aplicables) × 100
```

### Score global ponderado

```
Score_global = Σ (Score_dominio × Peso_dominio) / Σ Pesos
```

### Funciones principales

| Función | Archivo | Descripción |
|---------|---------|-------------|
| `getAnswerScore(value)` | `lib/engine/scoring.ts` | Convierte respuesta a puntuación (0-100) |
| `getRiskLevel(score)` | `lib/engine/scoring.ts` | Determina nivel de riesgo desde score |
| `calculateDomainScore()` | `lib/engine/risk-calculator.ts` | Score de cumplimiento por dominio |
| `calculateDomainResult()` | `lib/engine/risk-calculator.ts` | Resultado completo con brechas |
| `calculateGlobalScore()` | `lib/engine/risk-calculator.ts` | Score global ponderado |
| `calculateAllDomains()` | `lib/engine/risk-calculator.ts` | Resultados de todos los dominios |
| `identifyGaps()` | `lib/engine/gap-analyzer.ts` | Brechas clasificadas por severidad |
| `generateReport()` | `lib/engine/report-generator.ts` | Resumen ejecutivo para PDF |

---

## Seguridad

### Modelo de amenazas

CyberCEN es una aplicación 100% client-side que **no transmite datos a servidores externos**. El modelo de amenazas se centra en:

- Protección de datos de evaluación en el navegador (localStorage)
- Prevención de inyección de contenido malicioso (CSP)
- Integridad de la aplicación servida desde GitHub Pages

### Controles implementados

- **Content Security Policy (CSP)** vía meta tags
- **X-Content-Type-Options: nosniff**
- **X-Frame-Options: DENY**
- **Referrer-Policy: strict-origin-when-cross-origin**
- **Validación de input** en importación de evaluaciones (JSON parsing seguro)
- **Sanitización de nombres de archivo** en exportación PDF
- **Sin secretos ni credenciales** en el repositorio
- **`.gitignore` reforzado** para excluir archivos sensibles

### Mapeo CWE/OWASP

- [Mapeo CWE completo](docs/CWE_MAPPING.md)
- [Mapeo OWASP Top 10:2021](docs/OWASP_MAPPING.md)

### Reporte de vulnerabilidades

Consultar [SECURITY.md](SECURITY.md) para el proceso de reporte responsable.

---

## Testing

```bash
# Lint
npm run lint

# Build de verificación
npm run build
```

| Tipo | Estado | Herramienta |
|------|--------|-------------|
| Linting | Activo | ESLint 9 + eslint-config-next |
| Type checking | Activo | TypeScript 5 (strict) |
| Build validation | Activo | Next.js static export |
| Unit tests | Pendiente | — |
| E2E tests | Pendiente | — |

---

## Contribución

Consultar [CONTRIBUTING.md](CONTRIBUTING.md) para guías de estilo, proceso de PRs y convenciones de commits.

---

## Roadmap

- [x] 12 dominios CIP con 120 preguntas
- [x] Motor de riesgo ponderado
- [x] Análisis de brechas automático
- [x] Plan de acción con recomendaciones priorizadas
- [x] Exportación de reporte PDF
- [x] Modo demo con datos precargados
- [x] Landing page profesional con portada
- [x] Deploy automático en GitHub Pages
- [x] Hardening de seguridad (CSP, headers)
- [ ] Tests unitarios del motor de riesgo
- [ ] Tests E2E con Playwright
- [ ] PWA (Progressive Web App) para uso offline completo
- [ ] Comparación entre evaluaciones (histórico)
- [ ] Exportación a Excel/CSV
- [ ] Internacionalización (i18n)

---

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).

```
MIT License - Copyright (c) 2026 TTPSEC SPA
```

---

## Contacto

- **Organización:** [TTPSEC SPA](https://www.ttpsec.ai)
- **Repositorio:** [github.com/ttpsecspa/cybercen](https://github.com/ttpsecspa/cybercen)
- **Sitio:** [ttpsecspa.github.io/cybercen](https://ttpsecspa.github.io/cybercen)

**Disclaimer:** Esta plataforma es un desarrollo independiente con fines académicos. No está afiliada al Coordinador Eléctrico Nacional (CEN) ni a ninguna entidad gubernamental. No constituye asesoría profesional ni reemplaza una auditoría formal de ciberseguridad.

---

*Software para el bien común — TTPSEC SPA*
