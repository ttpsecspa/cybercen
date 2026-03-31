# Mapeo CWE — CyberCEN

Mapeo de debilidades comunes (Common Weakness Enumeration) relevantes para una aplicación web client-side, con los controles implementados en CyberCEN.

---

## Contexto

CyberCEN es una aplicación **100% client-side** (sin backend, sin base de datos, sin APIs). Esto elimina categorías enteras de CWE (inyección SQL, SSRF, autenticación rota, etc.). El mapeo se centra en las debilidades aplicables a una SPA estática.

---

## Mapeo de CWE Relevantes

| CWE | Nombre | Relevancia | Control Implementado | Estado |
|-----|--------|-----------|---------------------|--------|
| **CWE-79** | Cross-Site Scripting (XSS) | Alta | React escapa output por defecto; CSP restringe scripts inline; no se usa `dangerouslySetInnerHTML` | Mitigado |
| **CWE-116** | Improper Encoding or Escaping of Output | Media | React JSX auto-escapa; PDF export sanitiza nombres de archivo | Mitigado |
| **CWE-20** | Improper Input Validation | Media | Validación de esquema en importación JSON; respuestas limitadas a valores enum (yes/partial/no) | Mitigado |
| **CWE-922** | Insecure Storage of Sensitive Information | Media | Datos en localStorage (no sessionStorage); disclaimer visible sobre almacenamiento local; función de reset | Aceptado |
| **CWE-346** | Origin Validation Error | Baja | CSP `frame-ancestors: 'none'`; `X-Frame-Options: DENY` previene clickjacking | Mitigado |
| **CWE-1021** | Improper Restriction of Rendered UI Layers | Baja | `X-Frame-Options: DENY` y CSP `frame-ancestors` bloquean embedding en iframes | Mitigado |
| **CWE-829** | Inclusion of Functionality from Untrusted Control Sphere | Baja | Sin scripts externos; CSP `script-src 'self'`; sin CDN de terceros | Mitigado |
| **CWE-319** | Cleartext Transmission of Sensitive Information | Baja | GitHub Pages fuerza HTTPS; no hay transmisión de datos a servidores | N/A |
| **CWE-352** | Cross-Site Request Forgery (CSRF) | N/A | Sin backend, sin formularios que envíen datos a servidor | N/A |
| **CWE-89** | SQL Injection | N/A | Sin base de datos | N/A |
| **CWE-287** | Improper Authentication | N/A | Sin sistema de autenticación (acceso anónimo por diseño) | N/A |
| **CWE-918** | Server-Side Request Forgery (SSRF) | N/A | Sin servidor | N/A |

---

## CWE Relevantes para Dependencias

| CWE | Nombre | Control |
|-----|--------|---------|
| **CWE-1104** | Use of Unmaintained Third-Party Components | Dependencias actualizadas regularmente; `npm audit` en CI |
| **CWE-506** | Embedded Malicious Code | Solo dependencias de npm registry; `package-lock.json` versionado |

---

## Resumen de Cobertura

| Categoría | CWEs Evaluados | Mitigados | Aceptados | N/A |
|-----------|---------------|-----------|-----------|-----|
| Inyección/XSS | 3 | 3 | 0 | 0 |
| Almacenamiento | 1 | 0 | 1 | 0 |
| UI/Framing | 2 | 2 | 0 | 0 |
| Red/Transporte | 1 | 0 | 0 | 1 |
| Server-side | 3 | 0 | 0 | 3 |
| Dependencias | 2 | 2 | 0 | 0 |
| **Total** | **12** | **7** | **1** | **4** |

---

## Notas

- **CWE-922 (Aceptado):** localStorage es inherente al modelo client-side. Se mitiga con disclaimers visibles, función de reset, y recomendación de no usar en equipos compartidos.
- Las CWE marcadas como N/A son irrelevantes por la arquitectura client-side sin backend.
- Este mapeo se actualiza con cada release que modifique controles de seguridad.

---

*Última actualización: 2026-03-30 | CyberCEN v2.4*
