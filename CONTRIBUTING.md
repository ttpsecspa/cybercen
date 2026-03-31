# Guía de Contribución

Gracias por tu interés en contribuir a CyberCEN. Este documento describe las convenciones y procesos para colaborar en el proyecto.

---

## Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [Cómo Contribuir](#cómo-contribuir)
- [Entorno de Desarrollo](#entorno-de-desarrollo)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Convenciones de Código](#convenciones-de-código)
- [Convenciones de Commits](#convenciones-de-commits)
- [Proceso de Pull Requests](#proceso-de-pull-requests)
- [Reporte de Bugs](#reporte-de-bugs)
- [Solicitud de Features](#solicitud-de-features)

---

## Código de Conducta

Este proyecto sigue un código de conducta basado en el respeto mutuo. Se espera que todos los participantes mantengan un ambiente profesional y colaborativo.

---

## Cómo Contribuir

### Tipos de contribución bienvenidos

- Corrección de bugs
- Mejoras de accesibilidad (a11y)
- Traducciones (i18n)
- Mejoras de documentación
- Tests unitarios y E2E
- Optimizaciones de rendimiento
- Nuevos controles CIP o actualizaciones regulatorias

### Primer contribución

1. Haz fork del repositorio
2. Crea una rama desde `master`
3. Realiza tus cambios
4. Abre un Pull Request

---

## Entorno de Desarrollo

### Requisitos

| Herramienta | Versión |
|-------------|---------|
| Node.js | >= 20.x |
| npm | >= 9.x |
| Git | >= 2.x |

### Setup

```bash
# Clonar tu fork
git clone https://github.com/TU_USUARIO/cybercen.git
cd cybercen

# Instalar dependencias
npm ci

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Build de producción (static export) |
| `npm run lint` | Ejecutar ESLint |
| `npm start` | Servir build de producción |

---

## Estructura del Proyecto

```
app/                  # Pages y layouts (App Router)
components/
  ui/                 # Componentes base (shadcn/ui)
  dashboard/          # Componentes del dashboard
  evaluacion/         # Componentes de evaluación
  resultados/         # Componentes de resultados
  shared/             # Componentes compartidos
lib/
  data/               # Datos estáticos (CIP standards, preguntas)
  engine/             # Motor de riesgo y cálculo
  store/              # Estado global (Zustand)
  utils/              # Utilidades
public/               # Assets estáticos
docs/                 # Documentación técnica
```

---

## Convenciones de Código

### TypeScript

- **Strict mode** habilitado — no usar `any` excepto en casos justificados
- Preferir **interfaces** sobre types para objetos
- Exportar tipos desde el mismo archivo que los usa
- Nombres de tipos en PascalCase

### React

- **Componentes funcionales** exclusivamente
- **"use client"** solo cuando sea necesario (interactividad, hooks de estado)
- Props tipadas con interfaces dedicadas
- Nombres de componentes en PascalCase
- Un componente principal por archivo

### Tailwind CSS

- Usar clases de Tailwind directamente — no CSS custom
- Usar la utilidad `cn()` de `lib/utils/helpers.ts` para clases condicionales
- Responsive: mobile-first (`sm:`, `md:`, `lg:`)
- Paleta de colores: slate para neutros, blue para primario, emerald/amber/red para estados

### Archivos

- Nombres de archivos en kebab-case para utilidades: `risk-calculator.ts`
- Nombres en PascalCase para componentes: `DomainCard.tsx`
- Extensión `.tsx` para archivos con JSX, `.ts` para lógica pura

---

## Convenciones de Commits

Seguimos [Conventional Commits](https://www.conventionalcommits.org/) con prefijos en inglés:

```
<tipo>: <descripción concisa>
```

### Tipos

| Tipo | Uso |
|------|-----|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de bug |
| `docs` | Solo documentación |
| `style` | Formato (no afecta lógica) |
| `refactor` | Refactorización sin cambio funcional |
| `perf` | Mejora de rendimiento |
| `test` | Agregar o modificar tests |
| `chore` | Mantenimiento, dependencias, CI |
| `security` | Mejora de seguridad |

### Ejemplos

```
feat: add PDF export for evaluation report
fix: correct risk score calculation for CIP-008
docs: update README with architecture diagram
security: add CSP headers and input validation
```

---

## Proceso de Pull Requests

### Antes de abrir un PR

1. Asegúrate de que `npm run lint` pase sin errores
2. Asegúrate de que `npm run build` complete exitosamente
3. Prueba manualmente en al menos un navegador

### Template de PR

```markdown
## Descripción
[Qué cambia este PR y por qué]

## Tipo de cambio
- [ ] Bug fix
- [ ] Nueva funcionalidad
- [ ] Mejora de funcionalidad existente
- [ ] Documentación
- [ ] Refactorización

## Checklist
- [ ] Lint pasa (`npm run lint`)
- [ ] Build exitoso (`npm run build`)
- [ ] Probado en Chrome/Firefox/Safari
- [ ] Responsive verificado (mobile + desktop)
- [ ] Sin secretos ni credenciales en el código
```

### Criterios de revisión

- Código limpio y legible
- Sin vulnerabilidades de seguridad
- Responsive design mantenido
- Consistencia con el estilo existente
- Sin regresiones funcionales

---

## Reporte de Bugs

Usa la template de [Bug Report](.github/ISSUE_TEMPLATE/bug_report.md) e incluye:

1. Descripción clara del bug
2. Pasos para reproducir
3. Comportamiento esperado vs. actual
4. Navegador y sistema operativo
5. Screenshots si aplica

---

## Solicitud de Features

Usa la template de [Feature Request](.github/ISSUE_TEMPLATE/feature_request.md) e incluye:

1. Descripción del feature propuesto
2. Caso de uso y motivación
3. Alternativas consideradas
4. Mockups o ejemplos si aplica

---

## Versionamiento

El proyecto usa versionamiento semántico simplificado (`MAJOR.MINOR`):

- **MAJOR**: Cambios que rompen compatibilidad (ej. reestructuración de datos)
- **MINOR**: Nuevas funcionalidades o mejoras significativas

La versión se actualiza en `lib/version.ts` con cada release.

---

*Gracias por contribuir a la ciberseguridad del sector eléctrico chileno.*
