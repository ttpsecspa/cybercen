# Prompt: Documentación Profesional de Repositorio GitHub

> **Uso:** Copia este prompt, reemplaza los bloques `[PLACEHOLDER]` con la info de tu proyecto, y pégalo en Claude o tu LLM preferido.

---

## Prompt Completo

```
Actúa como un ingeniero de documentación técnica senior especializado en ciberseguridad y desarrollo seguro. Tu tarea es generar la documentación completa de un repositorio GitHub que debe quedar impecable, profesional y lista para auditoría.

## CONTEXTO DEL PROYECTO

- **Nombre del proyecto:** [NOMBRE_PROYECTO]
- **Descripción corta (1 línea):** [DESCRIPCION_CORTA]
- **Lenguaje/Stack principal:** [LENGUAJE — e.g. Rust, Python, Next.js, React]
- **Tipo de proyecto:** [CLI tool | Web app | API | Library | Dashboard | Agent]
- **Público objetivo:** [Pentesters | SOC analysts | GRC teams | Devs | Estudiantes]
- **Licencia:** [MIT | Apache-2.0 | GPL-3.0 | BSL-1.1 | Proprietary]
- **Autor/Organización:** [AUTOR — e.g. TTPSEC SpA / @ttpsecspa]
- **Estado actual:** [Alpha | Beta | Stable | PoC]

## CÓDIGO FUENTE / ESTRUCTURA

<code_or_tree>
[PEGA AQUÍ: el árbol de directorios (tree -L 2) o el código fuente relevante, o describe la arquitectura]
</code_or_tree>

## INSTRUCCIONES DE GENERACIÓN

Genera los siguientes archivos de documentación, cada uno en su propio bloque de código claramente delimitado:

### 1. README.md

Estructura obligatoria (en este orden exacto):

1. **Header visual** — Badges (licencia, lenguaje, build, OWASP)
2. **Nombre + Tagline** — H1 + descripción cursiva + tabla resumen
3. **Tabla de Contenidos** — TOC con links internos
4. **Descripción** — 3-5 líneas + lista de features (máx 8 bullets)
5. **Arquitectura / Diagrama** — ASCII o Mermaid + componentes clave
6. **Requisitos Previos** — OS, dependencias, variables de entorno
7. **Instalación** — Paso a paso copy-paste ready
8. **Uso / Quick Start** — Ejemplo mínimo funcional
9. **Configuración** — Archivos de config con ejemplo comentado
10. **API / Funciones Documentadas** — Firma, parámetros, retorno, ejemplo
11. **Seguridad** — Modelo de amenazas, CWE, OWASP 2025, SBOM, hardening
12. **Testing** — Cómo ejecutar, cobertura, tipos
13. **Contribución** — Link a CONTRIBUTING.md
14. **Roadmap** — Checklist de features
15. **Licencia** — Statement + link
16. **Contacto / Soporte** — Canales + créditos

### 2. SECURITY.md

- Versiones soportadas (tabla)
- Proceso de reporte (email, PGP placeholder, timeline)
- Política de coordinated disclosure (90 días)
- Alcance (in-scope / out-of-scope)
- Hall of Fame placeholder

### 3. CONTRIBUTING.md

- Requisitos para PRs
- Estilo de código (linter, formatter)
- Conventional Commits
- Proceso de revisión
- Código de conducta

### 4. CHANGELOG.md (Keep a Changelog)

### 5. LICENSE (texto completo)

### 6. Issue Templates

- bug_report.md
- feature_request.md
- security_vulnerability.md

### 7. docs/CWE_MAPPING.md

Tabla: CWE-ID | Nombre | Relevancia | Mitigación | Estado
- Web: CWE-79, CWE-89, CWE-352, CWE-918, CWE-200, CWE-287, CWE-502
- CLI: CWE-78, CWE-22, CWE-732, CWE-798
- API: CWE-284, CWE-311, CWE-346
- OT/ICS: CWE-319, CWE-306, CWE-400

### 8. docs/OWASP_MAPPING.md (OWASP Top 10:2025)

Las 10 categorías:
- A01:2025 — Broken Access Control
- A02:2025 — Security Misconfiguration
- A03:2025 — Software Supply Chain Failures
- A04:2025 — Cryptographic Failures
- A05:2025 — Injection
- A06:2025 — Insecure Design
- A07:2025 — Authentication Failures
- A08:2025 — Software or Data Integrity Failures
- A09:2025 — Security Logging and Alerting Failures
- A10:2025 — Mishandling of Exceptional Conditions

Notas:
- A06 no es testeable con herramientas → documentar threat modeling
- A09 requiere evidencia de respuesta efectiva
- A03 → SBOMs, verificación de deps, lock files
- A10 → manejo de errores, fail-safe defaults, edge cases
- Referenciar OWASP ASVS como estándar verificable complementario

## REGLAS DE ESTILO

- Markdown limpio, sin HTML innecesario
- Emojis solo en headers de sección
- Código en bloques con lenguaje especificado
- Todo en español LATAM excepto términos técnicos estándar
- Sin texto de relleno
- Ejemplos funcionales, no pseudocódigo
- NUNCA credenciales reales — usar placeholders
```

---

## Variante Rápida (proyectos pequeños)

```
Documenta este proyecto GitHub de forma profesional y concisa.

**Proyecto:** [NOMBRE]
**Stack:** [LENGUAJE]
**Tipo:** [TIPO]
**Licencia:** [LICENCIA]

<codigo>
[PEGA CÓDIGO O TREE]
</codigo>

Genera:
1. README.md con: badges, descripción, requisitos, instalación paso a paso, uso con ejemplos, configuración, funciones documentadas, sección de seguridad con CWE/OWASP mapping, licencia
2. SECURITY.md con política de disclosure
3. LICENSE completa

Reglas: español LATAM, markdown limpio, sin relleno, ejemplos funcionales, sin credenciales reales, CWE y OWASP relevantes al stack.
```

---

## Tips de Uso

| Situación | Acción |
|-----------|--------|
| Proyecto nuevo desde cero | Usa el prompt completo, pega el `tree` y los archivos principales |
| Proyecto existente sin docs | Pega el código fuente completo + el prompt completo |
| Actualizar docs existentes | Pega el README actual + código nuevo + pide "actualiza manteniendo estructura" |
| Solo necesitas el README | Usa la variante rápida |
| Múltiples repos a documentar | Usa la variante rápida en batch, uno por uno |

---

*Prompt creado por TTPSEC SpA — Documentación como código, seguridad por diseño.*
