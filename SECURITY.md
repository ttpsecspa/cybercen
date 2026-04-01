# 🔒 Security Policy

## Modelo de Seguridad

CyberCEN es una aplicación **100% client-side** desplegada como sitio estático en GitHub Pages. No existe backend, base de datos, ni comunicación con servidores externos. Este modelo reduce drásticamente la superficie de ataque.

### Datos procesados

| Dato | Almacenamiento | Sensibilidad |
|------|---------------|--------------|
| Respuestas de evaluación | localStorage (navegador) | Media |
| Tipo de entidad / impacto | localStorage (navegador) | Baja |
| Resultados y scores | Calculados en runtime | Baja |
| Reporte PDF | Generado localmente | Media |

**Ningún dato sale del navegador del usuario.**

---

## Versiones Soportadas

| Versión | Soporte |
|---------|---------|
| 2.x | Parches de seguridad activos |
| 1.x | Sin soporte |
| < 1.0 | Sin soporte |

---

## Reportar una Vulnerabilidad

Si descubres una vulnerabilidad de seguridad en CyberCEN, te pedimos que la reportes de forma responsable.

### Proceso de Coordinated Disclosure

1. **NO** abras un issue público con detalles de la vulnerabilidad
2. Envía un correo a **security@ttpsec.ai** con:
   - Descripción detallada de la vulnerabilidad
   - Pasos para reproducirla
   - Impacto potencial estimado
   - (Opcional) Sugerencia de corrección
   - (Opcional) Tu clave PGP para comunicación cifrada
3. Recibirás una confirmación dentro de **48 horas hábiles**
4. Trabajaremos en una solución y te mantendremos informado del progreso
5. Una vez corregida, publicaremos un advisory y te daremos crédito (si lo deseas)

### Política de Disclosure

- **Modelo:** Coordinated Disclosure
- **Plazo:** 90 días desde el reporte inicial para publicar el fix
- **Extensión:** Se puede acordar una extensión si la corrección requiere más tiempo
- **Publicación:** El advisory se publica junto con el release que contiene el fix
- **Crédito:** El reportante recibe crédito público (con su consentimiento)

### Alcance

**En alcance:**
- Vulnerabilidades XSS en la interfaz web
- Bypass de Content Security Policy
- Inyección de contenido malicioso vía importación JSON
- Vulnerabilidades en dependencias directas
- Exposición de datos sensibles de evaluación
- Problemas de cadena de suministro (supply chain)

**Fuera de alcance:**
- Ataques que requieren acceso físico al dispositivo
- Ingeniería social dirigida a usuarios
- Ataques DoS contra GitHub Pages
- Vulnerabilidades en navegadores desactualizados
- Self-XSS (el usuario inyectándose a sí mismo)

### Tiempos de Respuesta

| Severidad | Tiempo de Respuesta | Tiempo de Corrección |
|-----------|--------------------|--------------------|
| Crítica | 24 horas | 72 horas |
| Alta | 48 horas | 1 semana |
| Media | 1 semana | 2 semanas |
| Baja | 2 semanas | Próximo release |

---

## Controles de Seguridad Implementados

### Content Security Policy (CSP)

```
default-src 'self';
script-src 'self' 'unsafe-inline' 'unsafe-eval';
style-src 'self' 'unsafe-inline';
img-src 'self' data: blob:;
font-src 'self';
connect-src 'self';
frame-ancestors 'none';
```

### Headers de Seguridad

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`

### Validación de Input

- Importación de evaluaciones: parsing JSON con validación de esquema
- Nombres de archivo en exportación PDF: sanitización de caracteres especiales
- Sin ejecución de código dinámico desde datos de usuario

### Cadena de Suministro

- `package-lock.json` versionado para builds reproducibles
- Actualización regular vía `npm audit`
- Solo dependencias de fuentes confiables (npm registry)
- Sin dependencias con vulnerabilidades conocidas críticas
- SBOM generable con `npx @cyclonedx/cyclonedx-npm`

---

## Buenas Prácticas para Usuarios

1. **Mantener el navegador actualizado** — Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
2. **No compartir URLs con datos** — Los datos están en localStorage, no en la URL
3. **Exportar y respaldar** — Usar la función de exportación para guardar evaluaciones
4. **Verificar la URL** — Asegurarse de acceder desde `ttpsecspa.github.io/cybercen`
5. **Limpiar datos sensibles** — Usar la función de reset al terminar la evaluación

---

## Mapeos de Seguridad

| Documento | Descripción |
|-----------|-------------|
| [CWE Mapping](docs/CWE_MAPPING.md) | 14 CWEs evaluados con controles implementados |
| [OWASP Top 10:2025](docs/OWASP_MAPPING.md) | Mapeo completo contra las 10 categorías vigentes |

---

## Reconocimientos

Agradecemos a quienes reportan vulnerabilidades de forma responsable. Los reportantes serán reconocidos en este archivo (con su consentimiento).

<!-- Tabla de reconocimientos
| Reportante | Vulnerabilidad | Fecha | Versión |
|-----------|---------------|-------|---------|
-->

---

*Política actualizada: 2026-03-31 | CyberCEN v2.5*
