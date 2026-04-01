# Mapeo OWASP Top 10:2025 — CyberCEN

Análisis de cumplimiento con OWASP Top 10:2025 para la aplicación CyberCEN.

> **Nota:** El OWASP Top 10 es un **documento de awareness** (mínimo basal), NO un estándar completo de verificación. Para un estándar verificable y testeable, referenciar [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/). Para madurez del programa AppSec, referenciar [OWASP SAMM](https://owaspsamm.org/).

---

## Contexto

CyberCEN es una **Single Page Application (SPA) estática** desplegada en GitHub Pages. No tiene backend, base de datos, APIs, ni autenticación. Este análisis evalúa cada categoría OWASP Top 10:2025 en el contexto de una aplicación 100% client-side.

---

## Mapeo Completo

### A01:2025 — Broken Access Control

| Aspecto | Detalle |
|---------|---------|
| **Relevancia** | Baja |
| **Razón** | Sin sistema de autenticación ni autorización. Todos los usuarios tienen acceso idéntico. No hay datos de otros usuarios accesibles. |
| **Controles** | CSP `frame-ancestors: 'none'` previene clickjacking; `X-Frame-Options: DENY` |
| **Estado** | N/A por arquitectura |

---

### A02:2025 — Security Misconfiguration

| Aspecto | Detalle |
|---------|---------|
| **Relevancia** | Media |
| **Razón** | Headers de seguridad y CSP deben estar correctamente configurados en el deployment estático |
| **Controles** | CSP vía meta tags; X-Content-Type-Options: nosniff; X-Frame-Options: DENY; Referrer-Policy configurada; sin directory listings (GitHub Pages); sin archivos `.map` en producción |
| **Estado** | Mitigado |

---

### A03:2025 — Software Supply Chain Failures

| Aspecto | Detalle |
|---------|---------|
| **Relevancia** | Alta |
| **Razón** | Dependencias npm son el vector principal de supply chain en proyectos JavaScript |
| **Controles** | `package-lock.json` versionado (integridad de dependencias); `npm audit` regular; sin scripts de CDN externos; CSP restringe orígenes de scripts; deploy vía GitHub Actions (pipeline controlado) |
| **SBOM** | Generable con `npx @cyclonedx/cyclonedx-npm`; `package-lock.json` actúa como SBOM implícito |
| **Verificación** | Lock file garantiza instalaciones reproducibles; sin dependencias abandonadas |
| **Riesgo residual** | Dependencias transitivas pueden contener vulnerabilidades no-críticas temporalmente |
| **Estado** | Mitigado (monitoreo continuo) |

---

### A04:2025 — Cryptographic Failures

| Aspecto | Detalle |
|---------|---------|
| **Relevancia** | Baja |
| **Razón** | No se transmiten datos sensibles. No se almacenan contraseñas ni tokens. Sin operaciones criptográficas propias. |
| **Controles** | HTTPS forzado por GitHub Pages; datos solo en localStorage del navegador |
| **Estado** | N/A por arquitectura |

---

### A05:2025 — Injection

| Aspecto | Detalle |
|---------|---------|
| **Relevancia** | Media |
| **Razón** | XSS es el vector principal de inyección en aplicaciones client-side |
| **Controles** | React auto-escapa JSX output; no se usa `dangerouslySetInnerHTML`; CSP restringe scripts inline y eval; validación de input en importación JSON; respuestas limitadas a valores enum |
| **Estado** | Mitigado |

---

### A06:2025 — Insecure Design

| Aspecto | Detalle |
|---------|---------|
| **Relevancia** | Media |
| **Razón** | El diseño debe considerar privacidad de datos de evaluación. A06 no es testeable con herramientas — requiere documentar decisiones de diseño seguro. |
| **Threat Modeling** | Arquitectura zero-backend elimina vectores de red; datos nunca salen del navegador; evaluación anónima por diseño; disclaimer visible sobre privacidad |
| **Decisiones de diseño seguro** | Sin autenticación = sin credenciales que proteger; sin API = sin SSRF/IDOR; localStorage sobre cookies = sin riesgo de session hijacking; export estático = sin server-side attack surface |
| **Estado** | Mitigado |

---

### A07:2025 — Authentication Failures

| Aspecto | Detalle |
|---------|---------|
| **Relevancia** | N/A |
| **Razón** | Sin sistema de autenticación. Acceso anónimo por diseño. |
| **Estado** | N/A por arquitectura |

---

### A08:2025 — Software or Data Integrity Failures

| Aspecto | Detalle |
|---------|---------|
| **Relevancia** | Media |
| **Razón** | Integridad del código servido y datos importados |
| **Controles** | Deploy vía GitHub Actions (pipeline controlado con secrets protegidos); sin scripts de CDN externos; CSP restringe orígenes; validación de JSON en importación; `package-lock.json` garantiza builds reproducibles |
| **SRI** | No aplica actualmente (sin CDN). Si se agregan recursos externos, implementar Subresource Integrity |
| **Estado** | Mitigado |

---

### A09:2025 — Security Logging and Alerting Failures

| Aspecto | Detalle |
|---------|---------|
| **Relevancia** | Baja |
| **Razón** | Sin servidor = sin logs centralizados. Aplicación client-side no puede monitorear ataques de forma activa. |
| **Controles** | GitHub Pages proporciona logs de acceso básicos; CSP violations pueden reportarse vía `report-uri` (pendiente) |
| **Evidencia de respuesta** | No aplica — sin incidentes de seguridad reportados; sin superficie de ataque activa que monitorear |
| **Estado** | Aceptado (limitación inherente de arquitectura SPA estática) |

---

### A10:2025 — Mishandling of Exceptional Conditions

| Aspecto | Detalle |
|---------|---------|
| **Relevancia** | Media |
| **Razón** | El manejo de errores debe ser seguro y no exponer información interna |
| **Controles** | React Error Boundaries capturan errores de renderizado; página custom 404 y error; importación JSON con try/catch y validación de esquema; fail-safe defaults en motor de riesgo (score 0 si no hay datos); sin stack traces expuestos en producción |
| **Edge cases documentados** | Evaluación sin respuestas → score 0% (seguro); JSON malformado en importación → error descriptivo sin crash; localStorage lleno → warning al usuario; navegador sin soporte → degradación graceful |
| **Estado** | Mitigado |

---

## Resumen de Cumplimiento

| # | Categoría OWASP 2025 | Relevancia | Estado |
|---|---------------------|-----------|--------|
| A01 | Broken Access Control | Baja | N/A por arquitectura |
| A02 | Security Misconfiguration | Media | Mitigado |
| A03 | Software Supply Chain Failures | Alta | Mitigado (monitoreo) |
| A04 | Cryptographic Failures | Baja | N/A por arquitectura |
| A05 | Injection | Media | Mitigado |
| A06 | Insecure Design | Media | Mitigado |
| A07 | Authentication Failures | N/A | N/A por arquitectura |
| A08 | Software or Data Integrity Failures | Media | Mitigado |
| A09 | Security Logging and Alerting Failures | Baja | Aceptado |
| A10 | Mishandling of Exceptional Conditions | Media | Mitigado |

### Estadísticas

- **Mitigados:** 6/10 (A02, A03, A05, A06, A08, A10)
- **Aceptados:** 1/10 (A09 — limitación inherente de SPA)
- **N/A:** 3/10 (A01, A04, A07 — sin backend/auth)
- **Categorías de riesgo activo:** 0

---

## Comparativa con OWASP Top 10:2021

| 2025 | 2021 | Cambio |
|------|------|--------|
| A01 Broken Access Control | A01 Broken Access Control | Sin cambio |
| A02 Security Misconfiguration | A05 Security Misconfiguration | Subió de posición |
| **A03 Supply Chain Failures** | A08 Integrity Failures (parcial) | **Nueva categoría dedicada** |
| A04 Cryptographic Failures | A02 Cryptographic Failures | Bajó de posición |
| A05 Injection | A03 Injection | Bajó de posición |
| A06 Insecure Design | A04 Insecure Design | Sin cambio significativo |
| A07 Authentication Failures | A07 Auth Failures | Sin cambio |
| A08 Integrity Failures | A08 Integrity Failures | Se separó Supply Chain |
| A09 Logging & Alerting | A09 Logging & Monitoring | Renombrado con énfasis en alerting |
| **A10 Exceptional Conditions** | — | **Nueva categoría** (reemplaza SSRF) |

---

## Estándares Complementarios

| Estándar | Propósito | Referencia |
|----------|----------|------------|
| **OWASP ASVS** | Verificación testeable de seguridad aplicativa | [owasp.org/asvs](https://owasp.org/www-project-application-security-verification-standard/) |
| **OWASP SAMM** | Madurez del programa de seguridad | [owaspsamm.org](https://owaspsamm.org/) |
| **CycloneDX** | Formato estándar de SBOM | [cyclonedx.org](https://cyclonedx.org/) |

---

## Recomendaciones Futuras

| Mejora | Categoría OWASP | Prioridad |
|--------|----------------|-----------|
| Agregar `npm audit` automático en CI/CD | A03 | Alta |
| Generar SBOM automático en pipeline | A03 | Media |
| Agregar `report-uri` a CSP para monitoreo | A09 | Media |
| Implementar SRI si se agregan CDNs | A08 | Media |
| Considerar Web Crypto API para cifrar localStorage | A04 | Baja |
| Evaluar contra OWASP ASVS Level 1 | General | Media |

---

*Última actualización: 2026-03-31 | CyberCEN v2.5 | Basado en OWASP Top 10:2025*
