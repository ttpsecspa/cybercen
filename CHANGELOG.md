# Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.

El formato esta basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/).

---

## [2.3] - 2026-03-30

### Added
- Disclaimer legal y aviso de privacidad en pantalla de bienvenida
- Boton de reset de progreso en el dashboard
- Paginas custom 404 y error
- Migas de pan (breadcrumbs) en navegacion
- Footer rediseñado con version y fecha de build
- Documentacion completa del repositorio (README, SECURITY, CONTRIBUTING, CHANGELOG)
- Templates de issues para GitHub (bug report, feature request, security vulnerability)
- Mapeo CWE y OWASP Top 10:2021

### Changed
- Rediseño del plan de accion con mejor priorizacion visual
- Mejora de tildes UTF-8 en imagenes OG/Twitter
- Footer actualizado con badges de privacidad y enlace LinkedIn

### Removed
- Campo de nombre de entidad en evaluacion (ahora es anonimo)

### Security
- Headers CSP implementados via meta tags
- Validacion de input en importacion de evaluaciones
- Headers X-Content-Type-Options, X-Frame-Options, Referrer-Policy
- Sanitizacion de nombres de archivo en exportacion PDF

---

## [2.2] - 2026-03-29

### Added
- Portada/landing page con imagen de portada y logo TTPSEC
- Boton "Ver Demo" con datos ficticios precargados (120 respuestas)
- Boton "Iniciar con datos reales" con modal de configuracion
- Modal de configuracion con bottom-sheet en mobile
- Helper `assetPath()` para prefijo de imagenes en GitHub Pages
- Imagenes OG y Twitter en formato PNG (1200x630 y 1200x600)
- Metadatos OpenGraph y Twitter Card completos

### Changed
- Landing page oculta navbar, sidebar y breadcrumbs
- Mejoras de responsive design en mobile
- Fuentes SVG cambiadas de system-ui a Arial para compatibilidad

### Fixed
- Imagenes rotas en GitHub Pages por falta de basePath prefix
- URLs de meta tags OG apuntando a localhost (agregado metadataBase)
- Renderizado de fuentes en SVG con sharp (Arial en vez de system-ui)

---

## [2.1] - 2026-03-28

### Added
- Analisis de brechas automatico con clasificacion por severidad
- Plan de accion con recomendaciones priorizadas
- Exportacion de reporte PDF profesional
- Modo demo con patron realista de cumplimiento (~62%)

### Changed
- Motor de riesgo mejorado con pesos por dominio
- Dashboard rediseñado con gauge de riesgo circular

---

## [2.0] - 2026-03-27

### Added
- Migracion a Next.js 16 con App Router
- 12 dominios CIP completos (CIP-002 a CIP-014)
- 120 preguntas de evaluacion adaptadas por tipo de entidad
- Motor de riesgo ponderado con 5 niveles
- Persistencia con Zustand + localStorage
- Deploy automatico en GitHub Pages via GitHub Actions
- Responsive design mobile-first

### Changed
- Arquitectura completamente rediseñada desde cero
- UI reconstruida con Tailwind CSS 4 y shadcn/ui

---

## [1.0] - 2026-03-20

### Added
- Prototipo inicial de evaluacion CIP
- Formulario basico de preguntas
- Calculo de score simple
- Interfaz minima funcional
