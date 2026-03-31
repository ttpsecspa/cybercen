# Guia de Contribucion

Gracias por tu interes en contribuir a CyberCEN. Este documento describe las convenciones y procesos para colaborar en el proyecto.

---

## Tabla de Contenidos

- [Codigo de Conducta](#codigo-de-conducta)
- [Como Contribuir](#como-contribuir)
- [Entorno de Desarrollo](#entorno-de-desarrollo)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Convenciones de Codigo](#convenciones-de-codigo)
- [Convenciones de Commits](#convenciones-de-commits)
- [Proceso de Pull Requests](#proceso-de-pull-requests)
- [Reporte de Bugs](#reporte-de-bugs)
- [Solicitud de Features](#solicitud-de-features)

---

## Codigo de Conducta

Este proyecto sigue un codigo de conducta basado en el respeto mutuo. Se espera que todos los participantes mantengan un ambiente profesional y colaborativo.

---

## Como Contribuir

### Tipos de contribucion bienvenidos

- Correccion de bugs
- Mejoras de accesibilidad (a11y)
- Traducciones (i18n)
- Mejoras de documentacion
- Tests unitarios y E2E
- Optimizaciones de rendimiento
- Nuevos controles CIP o actualizaciones regulatorias

### Primer contribucion

1. Haz fork del repositorio
2. Crea una rama desde `master`
3. Realiza tus cambios
4. Abre un Pull Request

---

## Entorno de Desarrollo

### Requisitos

| Herramienta | Version |
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

| Script | Descripcion |
|--------|-------------|
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Build de produccion (static export) |
| `npm run lint` | Ejecutar ESLint |
| `npm start` | Servir build de produccion |

---

## Estructura del Proyecto

```
app/                  # Pages y layouts (App Router)
components/
  ui/                 # Componentes base (shadcn/ui)
  dashboard/          # Componentes del dashboard
  evaluacion/         # Componentes de evaluacion
  resultados/         # Componentes de resultados
  shared/             # Componentes compartidos
lib/
  data/               # Datos estaticos (CIP standards, preguntas)
  engine/             # Motor de riesgo y calculo
  store/              # Estado global (Zustand)
  utils/              # Utilidades
public/               # Assets estaticos
docs/                 # Documentacion tecnica
```

---

## Convenciones de Codigo

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
- Extension `.tsx` para archivos con JSX, `.ts` para logica pura

---

## Convenciones de Commits

Seguimos [Conventional Commits](https://www.conventionalcommits.org/) con prefijos en ingles:

```
<tipo>: <descripcion concisa>
```

### Tipos

| Tipo | Uso |
|------|-----|
| `feat` | Nueva funcionalidad |
| `fix` | Correccion de bug |
| `docs` | Solo documentacion |
| `style` | Formato (no afecta logica) |
| `refactor` | Refactorizacion sin cambio funcional |
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

1. Asegurate de que `npm run lint` pase sin errores
2. Asegurate de que `npm run build` complete exitosamente
3. Prueba manualmente en al menos un navegador

### Template de PR

```markdown
## Descripcion
[Que cambia este PR y por que]

## Tipo de cambio
- [ ] Bug fix
- [ ] Nueva funcionalidad
- [ ] Mejora de funcionalidad existente
- [ ] Documentacion
- [ ] Refactorizacion

## Checklist
- [ ] Lint pasa (`npm run lint`)
- [ ] Build exitoso (`npm run build`)
- [ ] Probado en Chrome/Firefox/Safari
- [ ] Responsive verificado (mobile + desktop)
- [ ] Sin secretos ni credenciales en el codigo
```

### Criterios de revision

- Codigo limpio y legible
- Sin vulnerabilidades de seguridad
- Responsive design mantenido
- Consistencia con el estilo existente
- Sin regresiones funcionales

---

## Reporte de Bugs

Usa la template de [Bug Report](.github/ISSUE_TEMPLATE/bug_report.md) e incluye:

1. Descripcion clara del bug
2. Pasos para reproducir
3. Comportamiento esperado vs. actual
4. Navegador y sistema operativo
5. Screenshots si aplica

---

## Solicitud de Features

Usa la template de [Feature Request](.github/ISSUE_TEMPLATE/feature_request.md) e incluye:

1. Descripcion del feature propuesto
2. Caso de uso y motivacion
3. Alternativas consideradas
4. Mockups o ejemplos si aplica

---

## Versionamiento

El proyecto usa versionamiento semantico simplificado (`MAJOR.MINOR`):

- **MAJOR**: Cambios que rompen compatibilidad (ej. reestructuracion de datos)
- **MINOR**: Nuevas funcionalidades o mejoras significativas

La version se actualiza en `lib/version.ts` con cada release.

---

*Gracias por contribuir a la ciberseguridad del sector electrico chileno.*
