# Mapeo CWE — CyberCEN

Mapeo de debilidades comunes (Common Weakness Enumeration) relevantes para una aplicación web client-side, con los controles implementados en CyberCEN.

---

## Contexto

CyberCEN es una aplicación **100% client-side** (sin backend, sin base de datos, sin APIs). Esto elimina categorías enteras de CWE (inyección SQL, SSRF, autenticación rota, etc.). El mapeo se centra en las debilidades aplicables a una SPA estática.

---

## Mapeo de CWE Relevantes — Web Client-Side

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
| **CWE-754** | Improper Check for Unusual or Exceptional Conditions | Media | React Error Boundaries; try/catch en importación JSON; fail-safe defaults (score 0); página custom 404/error | Mitigado |
| **CWE-200** | Exposure of Sensitive Information to Unauthorized Actor | Baja | Sin stack traces en producción; errores genéricos al usuario; sin datos en URL; localStorage no accesible cross-origin | Mitigado |

---

## CWE No Aplicables (por arquitectura)

| CWE | Nombre | Razón de exclusión |
|-----|--------|-------------------|
| **CWE-89** | SQL Injection | Sin base de datos |
| **CWE-352** | Cross-Site Request Forgery (CSRF) | Sin backend, sin formularios que envíen datos a servidor |
| **CWE-287** | Improper Authentication | Sin sistema de autenticación (acceso anónimo por diseño) |
| **CWE-918** | Server-Side Request Forgery (SSRF) | Sin servidor |
| **CWE-502** | Deserialization of Untrusted Data | Sin deserialización server-side; JSON.parse client-side con validación |
| **CWE-78** | OS Command Injection | Sin ejecución de comandos del sistema |

---

## CWE Relevantes para Cadena de Suministro

| CWE | Nombre | Control | OWASP 2025 |
|-----|--------|---------|------------|
| **CWE-1104** | Use of Unmaintained Third-Party Components | Dependencias actualizadas regularmente; `npm audit` en CI | A03 |
| **CWE-506** | Embedded Malicious Code | Solo dependencias de npm registry; `package-lock.json` versionado | A03 |

---

## Resumen de Cobertura

| Categoría | CWEs Evaluados | Mitigados | Aceptados | N/A |
|-----------|---------------|-----------|-----------|-----|
| Inyección/XSS | 3 | 3 | 0 | 0 |
| Almacenamiento | 1 | 0 | 1 | 0 |
| UI/Framing | 2 | 2 | 0 | 0 |
| Red/Transporte | 1 | 0 | 0 | 1 |
| Manejo de errores | 2 | 2 | 0 | 0 |
| Cadena de suministro | 2 | 2 | 0 | 0 |
| No aplicables | 6 | — | — | 6 |
| **Total evaluados** | **14** | **9** | **1** | **1** |

---

## Notas

- **CWE-922 (Aceptado):** localStorage es inherente al modelo client-side. Se mitiga con disclaimers visibles, función de reset, y recomendación de no usar en equipos compartidos.
- **CWE-754 (Nuevo):** Agregado para alinearse con OWASP A10:2025 (Mishandling of Exceptional Conditions).
- **CWE-200 (Nuevo):** Agregado para cubrir exposición de información en errores y diagnósticos.
- Las CWE no aplicables están excluidas por la arquitectura client-side sin backend.
- Este mapeo se actualiza con cada release que modifique controles de seguridad.

---

*Última actualización: 2026-03-31 | CyberCEN v2.5*
