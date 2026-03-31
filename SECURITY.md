# Security Policy

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

### Proceso

1. **NO** abras un issue público con detalles de la vulnerabilidad
2. Envía un correo a **security@ttpsec.ai** con:
   - Descripción detallada de la vulnerabilidad
   - Pasos para reproducirla
   - Impacto potencial estimado
   - (Opcional) Sugerencia de corrección
3. Recibirás una confirmación dentro de **48 horas hábiles**
4. Trabajaremos en una solución y te mantendremos informado del progreso
5. Una vez corregida, publicaremos un advisory y te daremos crédito (si lo deseas)

### Alcance

**En alcance:**
- Vulnerabilidades XSS en la interfaz web
- Bypass de Content Security Policy
- Inyección de contenido malicioso vía importación JSON
- Vulnerabilidades en dependencias directas
- Exposición de datos sensibles de evaluación

**Fuera de alcance:**
- Ataques que requieren acceso físico al dispositivo
- Ingeniería social dirigida a usuarios
- Ataques DoS contra GitHub Pages
- Vulnerabilidades en navegadores desactualizados

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

### Dependencias

- Actualización regular vía `npm audit`
- Solo dependencias de fuentes confiables (npm registry)
- Sin dependencias con vulnerabilidades conocidas críticas

---

## Buenas Prácticas para Usuarios

1. **Mantener el navegador actualizado** — Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
2. **No compartir URLs con datos** — Los datos están en localStorage, no en la URL
3. **Exportar y respaldar** — Usar la función de exportación para guardar evaluaciones
4. **Verificar la URL** — Asegurarse de acceder desde `ttpsecspa.github.io/cybercen`
5. **Limpiar datos sensibles** — Usar la función de reset al terminar la evaluación

---

## Reconocimientos

Agradecemos a quienes reportan vulnerabilidades de forma responsable. Los reportantes serán reconocidos en este archivo (con su consentimiento).

<!-- Tabla de reconocimientos
| Reportante | Vulnerabilidad | Fecha | Versión |
|-----------|---------------|-------|---------|
-->

---

*Política actualizada: 2026-03-30*
