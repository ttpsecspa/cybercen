# Mapeo OWASP Top 10:2021 — CyberCEN

Analisis de cumplimiento con OWASP Top 10:2021 para la aplicacion CyberCEN.

---

## Contexto

CyberCEN es una **Single Page Application (SPA) estatica** desplegada en GitHub Pages. No tiene backend, base de datos, APIs, ni autenticacion. Este analisis evalua cada categoria OWASP en el contexto de una aplicacion 100% client-side.

---

## Mapeo Completo

### A01:2021 — Broken Access Control

| Aspecto | Detalle |
|---------|---------|
| **Relevancia** | Baja |
| **Razon** | Sin sistema de autenticacion ni autorizacion. Todos los usuarios tienen acceso identico. No hay datos de otros usuarios accesibles. |
| **Controles** | CSP `frame-ancestors: 'none'` previene clickjacking; `X-Frame-Options: DENY` |
| **Estado** | N/A por arquitectura |

---

### A02:2021 — Cryptographic Failures

| Aspecto | Detalle |
|---------|---------|
| **Relevancia** | Baja |
| **Razon** | No se transmiten datos sensibles. No se almacenan contraseñas ni tokens. |
| **Controles** | HTTPS forzado por GitHub Pages; datos solo en localStorage del navegador |
| **Estado** | N/A por arquitectura |

---

### A03:2021 — Injection

| Aspecto | Detalle |
|---------|---------|
| **Relevancia** | Media |
| **Razon** | XSS es el vector principal en aplicaciones client-side |
| **Controles** | React auto-escapa JSX output; no se usa `dangerouslySetInnerHTML`; CSP restringe scripts; validacion de input en importacion JSON |
| **Estado** | Mitigado |

---

### A04:2021 — Insecure Design

| Aspecto | Detalle |
|---------|---------|
| **Relevancia** | Media |
| **Razon** | El diseño debe considerar privacidad de datos de evaluacion |
| **Controles** | Arquitectura sin backend (zero-trust en red); datos nunca salen del navegador; disclaimer visible; evaluacion anonima por diseño |
| **Estado** | Mitigado |

---

### A05:2021 — Security Misconfiguration

| Aspecto | Detalle |
|---------|---------|
| **Relevancia** | Media |
| **Razon** | Headers de seguridad y CSP deben estar correctamente configurados |
| **Controles** | CSP via meta tags; X-Content-Type-Options: nosniff; X-Frame-Options: DENY; Referrer-Policy configurada; sin directorylistings (GitHub Pages) |
| **Estado** | Mitigado |

---

### A06:2021 — Vulnerable and Outdated Components

| Aspecto | Detalle |
|---------|---------|
| **Relevancia** | Alta |
| **Razon** | Dependencias npm pueden contener vulnerabilidades |
| **Controles** | `npm audit` regular; `package-lock.json` versionado; actualizacion proactiva de dependencias; sin dependencias abandonadas |
| **Riesgo residual** | Dependencias con vulnerabilidades no-criticas pueden existir temporalmente |
| **Estado** | Mitigado (monitoreo continuo) |

---

### A07:2021 — Identification and Authentication Failures

| Aspecto | Detalle |
|---------|---------|
| **Relevancia** | N/A |
| **Razon** | Sin sistema de autenticacion. Acceso anonimo por diseño. |
| **Estado** | N/A por arquitectura |

---

### A08:2021 — Software and Data Integrity Failures

| Aspecto | Detalle |
|---------|---------|
| **Relevancia** | Media |
| **Razon** | Integridad del codigo servido y datos importados |
| **Controles** | Deploy via GitHub Actions (pipeline controlado); sin scripts de CDN externos; CSP restringe origenes; validacion de JSON en importacion |
| **Estado** | Mitigado |

---

### A09:2021 — Security Logging and Monitoring Failures

| Aspecto | Detalle |
|---------|---------|
| **Relevancia** | Baja |
| **Razon** | Sin servidor = sin logs centralizados. Aplicacion client-side no puede monitorear ataques |
| **Controles** | GitHub Pages proporciona logs de acceso basicos; CSP report-uri podria agregarse en futuro |
| **Estado** | Aceptado (limitacion de arquitectura) |

---

### A10:2021 — Server-Side Request Forgery (SSRF)

| Aspecto | Detalle |
|---------|---------|
| **Relevancia** | N/A |
| **Razon** | Sin servidor. No se realizan requests server-side. |
| **Estado** | N/A por arquitectura |

---

## Resumen de Cumplimiento

| # | Categoria OWASP | Relevancia | Estado |
|---|----------------|-----------|--------|
| A01 | Broken Access Control | Baja | N/A por arquitectura |
| A02 | Cryptographic Failures | Baja | N/A por arquitectura |
| A03 | Injection | Media | Mitigado |
| A04 | Insecure Design | Media | Mitigado |
| A05 | Security Misconfiguration | Media | Mitigado |
| A06 | Vulnerable Components | Alta | Mitigado (monitoreo) |
| A07 | Auth Failures | N/A | N/A por arquitectura |
| A08 | Integrity Failures | Media | Mitigado |
| A09 | Logging Failures | Baja | Aceptado |
| A10 | SSRF | N/A | N/A por arquitectura |

### Estadisticas

- **Mitigados:** 5/10 (A03, A04, A05, A06, A08)
- **Aceptados:** 1/10 (A09 — limitacion inherente de SPA)
- **N/A:** 4/10 (A01, A02, A07, A10 — sin backend)
- **Categorias de riesgo activo:** 0

---

## Recomendaciones Futuras

| Mejora | Categoria OWASP | Prioridad |
|--------|----------------|-----------|
| Agregar `report-uri` a CSP para monitoreo | A09 | Baja |
| Implementar Subresource Integrity (SRI) si se agregan CDNs | A08 | Media |
| Agregar `npm audit` automatico en CI/CD | A06 | Alta |
| Considerar Web Crypto API para cifrar localStorage | A02 | Baja |

---

*Ultima actualizacion: 2026-03-30 | CyberCEN v2.3 | Basado en OWASP Top 10:2021*
