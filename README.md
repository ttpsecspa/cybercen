[![MIT License](https://img.shields.io/badge/Licencia-MIT-blue.svg)](LICENSE)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.2-black.svg)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6.svg)](https://www.typescriptlang.org)
[![Deploy](https://img.shields.io/github/actions/workflow/status/ttpsecspa/cybercen/deploy.yml?label=deploy)](https://github.com/ttpsecspa/cybercen/actions)
[![OWASP](https://img.shields.io/badge/OWASP-Compliant-green.svg)](docs/OWASP_MAPPING.md)

# CyberCEN

*Herramienta de autoevaluacion de ciberseguridad para el sector electrico de Chile, basada en los estandares NERC CIP adaptados al Coordinador Electrico Nacional (CEN).*

| Stack | Licencia | Estado | Version |
|-------|----------|--------|---------|
| Next.js 16 + React 19 + TypeScript 5 + Tailwind CSS 4 | MIT | Stable | v2.3 |

---

## Tabla de Contenidos

- [Descripcion](#descripcion)
- [Arquitectura](#arquitectura)
- [Requisitos Previos](#requisitos-previos)
- [Instalacion](#instalacion)
- [Uso](#uso)
- [Configuracion](#configuracion)
- [Dominios CIP](#dominios-cip)
- [Motor de Riesgo](#motor-de-riesgo)
- [Seguridad](#-seguridad)
- [Testing](#-testing)
- [Contribucion](#-contribucion)
- [Roadmap](#-roadmap)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## Descripcion

CyberCEN permite a las organizaciones del sector electrico chileno evaluar su nivel de cumplimiento del Estandar de Ciberseguridad del CEN, basado en NERC CIP (Critical Infrastructure Protection). Las 500+ empresas coordinadas por el CEN deben cumplir requisitos de ciberseguridad y entregar reportes anuales.

Esta herramienta ofrece un autodiagnostico rapido, calcula el nivel de riesgo y sugiere acciones correctivas para cada dominio.

**Caracteristicas principales:**

- **12 Dominios CIP** — Evaluacion integral basada en NERC CIP-002 a CIP-014
- **120 Controles** — Preguntas adaptadas por tipo de entidad y nivel de impacto
- **Motor de Riesgo** — Calculo ponderado con 5 niveles (Critico/Alto/Medio/Bajo/Optimo)
- **Analisis de Brechas** — Identificacion automatica de vulnerabilidades por prioridad
- **Plan de Accion** — Recomendaciones priorizadas con plazos y recursos estimados
- **Reporte PDF** — Exportacion profesional compatible con requerimientos SEC/CEN
- **100% Privada** — Sin backend, sin tracking, sin registro. Todo en el navegador
- **Modo Demo** — Visualizacion instantanea con datos ficticios precargados

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
│  │ Landing  │ Evaluacion │Resultados│  Reportes   │ │
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

| Componente | Ubicacion | Funcion |
|------------|-----------|---------|
| Landing Page | `app/page.tsx` | Portada, demo, configuracion de evaluacion |
| Evaluacion | `app/evaluacion/[cipId]/` | Formulario de preguntas por dominio CIP |
| Motor de Riesgo | `lib/engine/` | Calculo de scores, brechas y nivel de riesgo |
| Store | `lib/store/evaluation-store.ts` | Estado global con persistencia en localStorage |
| Datos CIP | `lib/data/` | 12 estandares, 120 preguntas, recomendaciones |
| Reportes | `lib/engine/report-generator.ts` | Generacion de resumen ejecutivo y PDF |

---

## Requisitos Previos

| Requisito | Version Minima |
|-----------|---------------|
| Node.js | 20.x |
| npm | 9.x |
| Git | 2.x |
| Navegador | Chrome 90+, Firefox 88+, Safari 14+, Edge 90+ |

**Sistemas operativos soportados:** Windows 10+, macOS 12+, Linux (Ubuntu 20.04+)

No requiere variables de entorno. La aplicacion funciona completamente en el cliente.

---

## Instalacion

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

### Build de produccion

```bash
# Generar export estatico
npm run build

# Los archivos se generan en ./out/
# Servir localmente para verificar:
npx serve out
```

### Deploy en GitHub Pages

El proyecto incluye un workflow de GitHub Actions (`.github/workflows/deploy.yml`) que despliega automaticamente al hacer push a `master`.

---

## Uso

### Inicio rapido

1. Abrir la aplicacion en el navegador
2. Elegir **"Ver Demo"** para explorar con datos ficticios, o **"Iniciar con datos reales"** para evaluar su organizacion
3. Seleccionar tipo de entidad (Generacion/Transmision/Distribucion) y nivel de impacto (Alto/Medio/Bajo)
4. Responder las preguntas de cada dominio CIP (Si/Parcial/No)
5. Revisar resultados en el panel de control
6. Consultar el analisis de brechas y plan de accion
7. Exportar reporte PDF

### Flujo de evaluacion

```
Inicio → Configurar entidad → Evaluar 12 dominios CIP
       → Ver dashboard con scores → Analisis de brechas
       → Plan de accion priorizado → Exportar reporte PDF
```

### Modo Demo

El boton **"Ver Demo"** precarga 120 respuestas con un patron realista (~62% cumplimiento) para una empresa de generacion electrica con impacto medio. Permite explorar todas las funcionalidades sin ingresar datos.

---

## Configuracion

### next.config.ts

```typescript
const nextConfig: NextConfig = {
  output: 'export',                                          // Export estatico
  basePath: process.env.NODE_ENV === 'production' ? '/cybercen' : '', // GitHub Pages
  images: { unoptimized: true },                             // Sin optimizacion de imagenes
};
```

### Parametros del motor de riesgo

| Parametro | Tipo | Default | Descripcion |
|-----------|------|---------|-------------|
| `yes` score | number | 100 | Puntuacion para respuesta "Si" |
| `partial` score | number | 50 | Puntuacion para respuesta "Parcial" |
| `no` score | number | 0 | Puntuacion para respuesta "No" |
| Nivel Critico | rango | 0-25% | Accion inmediata requerida |
| Nivel Alto | rango | 26-50% | Plan correctivo urgente |
| Nivel Medio | rango | 51-75% | Mejoras programadas |
| Nivel Bajo | rango | 76-90% | Optimizacion continua |
| Nivel Optimo | rango | 91-100% | Mantener y monitorear |

---

## Dominios CIP

| # | CIP | Dominio | Peso |
|---|-----|---------|------|
| 1 | CIP-002 | Categorizacion de Ciber Activos BES | 10% |
| 2 | CIP-003 | Controles de Gestion de Seguridad | 10% |
| 3 | CIP-004 | Personal y Capacitacion | 8% |
| 4 | CIP-005 | Perimetros de Seguridad Electronica | 10% |
| 5 | CIP-006 | Seguridad Fisica | 8% |
| 6 | CIP-007 | Gestion de Seguridad de Sistemas | 10% |
| 7 | CIP-008 | Reporte y Respuesta a Incidentes | 8% |
| 8 | CIP-009 | Planes de Recuperacion | 8% |
| 9 | CIP-010 | Gestion de Cambios y Vulnerabilidades | 8% |
| 10 | CIP-011 | Proteccion de Informacion | 6% |
| 11 | CIP-013 | Gestion de Riesgo de Cadena de Suministro | 7% |
| 12 | CIP-014 | Seguridad Fisica de Infraestructura Critica | 7% |

Cada dominio contiene 10 preguntas de evaluacion adaptables segun el tipo de entidad y nivel de impacto seleccionado.

---

## Motor de Riesgo

### Calculo de score por dominio

```
Score_dominio = (Σ puntuacion_respuestas / total_preguntas_aplicables) × 100
```

### Score global ponderado

```
Score_global = Σ (Score_dominio × Peso_dominio) / Σ Pesos
```

### Funciones principales

| Funcion | Archivo | Descripcion |
|---------|---------|-------------|
| `getAnswerScore(value)` | `lib/engine/scoring.ts` | Convierte respuesta a puntuacion (0-100) |
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

CyberCEN es una aplicacion 100% client-side que **no transmite datos a servidores externos**. El modelo de amenazas se centra en:

- Proteccion de datos de evaluacion en el navegador (localStorage)
- Prevencion de inyeccion de contenido malicioso (CSP)
- Integridad de la aplicacion servida desde GitHub Pages

### Controles implementados

- **Content Security Policy (CSP)** via meta tags
- **X-Content-Type-Options: nosniff**
- **X-Frame-Options: DENY**
- **Referrer-Policy: strict-origin-when-cross-origin**
- **Validacion de input** en importacion de evaluaciones (JSON parsing seguro)
- **Sanitizacion de nombres de archivo** en exportacion PDF
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

# Build de verificacion
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

## Contribucion

Consultar [CONTRIBUTING.md](CONTRIBUTING.md) para guias de estilo, proceso de PRs y convenciones de commits.

---

## Roadmap

- [x] 12 dominios CIP con 120 preguntas
- [x] Motor de riesgo ponderado
- [x] Analisis de brechas automatico
- [x] Plan de accion con recomendaciones priorizadas
- [x] Exportacion de reporte PDF
- [x] Modo demo con datos precargados
- [x] Landing page profesional con portada
- [x] Deploy automatico en GitHub Pages
- [x] Hardening de seguridad (CSP, headers)
- [ ] Tests unitarios del motor de riesgo
- [ ] Tests E2E con Playwright
- [ ] PWA (Progressive Web App) para uso offline completo
- [ ] Comparacion entre evaluaciones (historico)
- [ ] Exportacion a Excel/CSV
- [ ] Internacionalizacion (i18n)

---

## Licencia

Este proyecto esta licenciado bajo la [Licencia MIT](LICENSE).

```
MIT License - Copyright (c) 2026 TTPSEC SPA
```

---

## Contacto

- **Organizacion:** [TTPSEC SPA](https://www.ttpsec.ai)
- **Repositorio:** [github.com/ttpsecspa/cybercen](https://github.com/ttpsecspa/cybercen)
- **Sitio:** [ttpsecspa.github.io/cybercen](https://ttpsecspa.github.io/cybercen)

**Disclaimer:** Esta plataforma es un desarrollo independiente con fines academicos. No esta afiliada al Coordinador Electrico Nacional (CEN) ni a ninguna entidad gubernamental. No constituye asesoria profesional ni reemplaza una auditoria formal de ciberseguridad.

---

*Software para el bien comun — TTPSEC SPA*
