# Security Policy

## Modelo de Seguridad

CyberCEN es una aplicacion **100% client-side** desplegada como sitio estatico en GitHub Pages. No existe backend, base de datos, ni comunicacion con servidores externos. Este modelo reduce drasticamente la superficie de ataque.

### Datos procesados

| Dato | Almacenamiento | Sensibilidad |
|------|---------------|--------------|
| Respuestas de evaluacion | localStorage (navegador) | Media |
| Tipo de entidad / impacto | localStorage (navegador) | Baja |
| Resultados y scores | Calculados en runtime | Baja |
| Reporte PDF | Generado localmente | Media |

**Ningun dato sale del navegador del usuario.**

---

## Versiones Soportadas

| Version | Soporte |
|---------|---------|
| 2.x | Parches de seguridad activos |
| 1.x | Sin soporte |
| < 1.0 | Sin soporte |

---

## Reportar una Vulnerabilidad

Si descubres una vulnerabilidad de seguridad en CyberCEN, te pedimos que la reportes de forma responsable.

### Proceso

1. **NO** abras un issue publico con detalles de la vulnerabilidad
2. Envia un correo a **security@ttpsec.ai** con:
   - Descripcion detallada de la vulnerabilidad
   - Pasos para reproducirla
   - Impacto potencial estimado
   - (Opcional) Sugerencia de correccion
3. Recibiras una confirmacion dentro de **48 horas habiles**
4. Trabajaremos en una solucion y te mantendremos informado del progreso
5. Una vez corregida, publicaremos un advisory y te daremos credito (si lo deseas)

### Alcance

**En alcance:**
- Vulnerabilidades XSS en la interfaz web
- Bypass de Content Security Policy
- Inyeccion de contenido malicioso via importacion JSON
- Vulnerabilidades en dependencias directas
- Exposicion de datos sensibles de evaluacion

**Fuera de alcance:**
- Ataques que requieren acceso fisico al dispositivo
- Ingenieria social dirigida a usuarios
- Ataques DoS contra GitHub Pages
- Vulnerabilidades en navegadores desactualizados

### Tiempos de Respuesta

| Severidad | Tiempo de Respuesta | Tiempo de Correccion |
|-----------|--------------------|--------------------|
| Critica | 24 horas | 72 horas |
| Alta | 48 horas | 1 semana |
| Media | 1 semana | 2 semanas |
| Baja | 2 semanas | Proximo release |

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

### Validacion de Input

- Importacion de evaluaciones: parsing JSON con validacion de esquema
- Nombres de archivo en exportacion PDF: sanitizacion de caracteres especiales
- Sin ejecucion de codigo dinamico desde datos de usuario

### Dependencias

- Actualizacion regular via `npm audit`
- Solo dependencias de fuentes confiables (npm registry)
- Sin dependencias con vulnerabilidades conocidas criticas

---

## Buenas Practicas para Usuarios

1. **Mantener el navegador actualizado** — Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
2. **No compartir URLs con datos** — Los datos estan en localStorage, no en la URL
3. **Exportar y respaldar** — Usar la funcion de exportacion para guardar evaluaciones
4. **Verificar la URL** — Asegurarse de acceder desde `ttpsecspa.github.io/cybercen`
5. **Limpiar datos sensibles** — Usar la funcion de reset al terminar la evaluacion

---

## Reconocimientos

Agradecemos a quienes reportan vulnerabilidades de forma responsable. Los reportantes seran reconocidos en este archivo (con su consentimiento).

<!-- Tabla de reconocimientos
| Reportante | Vulnerabilidad | Fecha | Version |
|-----------|---------------|-------|---------|
-->

---

*Politica actualizada: 2026-03-30*
