import { Recommendation } from './types';

export const recommendations: Recommendation[] = [
  // ============================================================
  // CIP-002: Categorización de Ciber Activos BES (5 recomendaciones)
  // ============================================================
  {
    id: 'REC-CIP002-01',
    cipId: 'CIP-002',
    riskLevel: 'critical',
    title: 'Implementar inventario de ciber activos BES',
    description:
      'Desarrollar y mantener un inventario completo de todos los ciber activos BES de la organización. Utilice herramientas automatizadas de descubrimiento de activos en redes OT e IT. Documente para cada activo: nombre, ubicación, función, propietario, sistema operativo, dirección IP y nivel de impacto asignado. Priorice la identificación de sistemas SCADA, EMS, RTUs, PLCs, IEDs y equipos de comunicación críticos para la operación del sistema eléctrico nacional.',
    priority: 'immediate',
    estimatedEffort: '2-4 semanas para inventario inicial, mantenimiento continuo',
    resources: 'Herramientas de descubrimiento de activos OT (Nozomi, Claroty, Tenable.ot), personal de OT e IT, bases de datos de activos',
  },
  {
    id: 'REC-CIP002-02',
    cipId: 'CIP-002',
    riskLevel: 'high',
    title: 'Establecer criterios de categorización de impacto',
    description:
      'Definir criterios claros y documentados para la categorización de impacto de ciber activos BES, alineados con los requisitos del Coordinador Eléctrico Nacional. Los criterios deben considerar: capacidad de generación asociada, función de control del sistema, impacto en la confiabilidad del SEN, y presencia en instalaciones críticas. Documente la justificación de cada categorización en un formato estandarizado que facilite las auditorías.',
    priority: 'immediate',
    estimatedEffort: '1-2 semanas para definir criterios, 2-3 semanas para aplicar',
    resources: 'Normativa CEN, personal de operaciones y ciberseguridad, matrices de categorización',
  },
  {
    id: 'REC-CIP002-03',
    cipId: 'CIP-002',
    riskLevel: 'medium',
    title: 'Automatizar el proceso de revisión periódica de categorización',
    description:
      'Implementar un proceso sistematico y parcialmente automatizado para la revisión de la categorización de ciber activos BES cada 15 meses. Configure recordatorios automaticos, defina un flujo de trabajo de revisión que involucre a los responsables de cada area operativa, y utilice un sistema de gestión documental que registre las revisiones, cambios y aprobaciones. Integre el proceso con la gestión de cambios de la organización.',
    priority: 'short-term',
    estimatedEffort: '3-4 semanas para implementar el proceso automatizado',
    resources: 'Sistema de gestión documental, herramientas de workflow, calendario de revisiones',
  },
  {
    id: 'REC-CIP002-04',
    cipId: 'CIP-002',
    riskLevel: 'low',
    title: 'Integrar inventario de activos con sistemas de gestión',
    description:
      'Integrar el inventario de ciber activos BES con los sistemas de gestión de activos empresariales (EAM) y de gestión de configuración (CMDB). Esto permite mantener una vista unificada de los activos, facilitar las actualizaciones cuando se incorporan o retiran activos, y generar reportes automatizados para cumplimiento regulatorio. Establezca interfaces entre los sistemas de descubrimiento automatico y la base de datos central de activos.',
    priority: 'medium-term',
    estimatedEffort: '4-8 semanas para integración completa',
    resources: 'Sistema EAM/CMDB, APIs de integración, personal de desarrollo, licencias de software',
  },
  {
    id: 'REC-CIP002-05',
    cipId: 'CIP-002',
    riskLevel: 'optimal',
    title: 'Implementar monitoreo continuo de activos con inteligencia de amenazas',
    description:
      'Establecer un programa de monitoreo continuo que combine el inventario de ciber activos BES con fuentes de inteligencia de amenazas para identificar proactivamente riesgos. Utilice plataformas que correlacionen vulnerabilidades conocidas con los activos del inventario y generen alertas priorizadas. Realice revisiones dinámicas de categorización basadas en cambios en el panorama de amenazas del sector eléctrico chileno y latinoamericano.',
    priority: 'long-term',
    estimatedEffort: '8-12 semanas para implementación completa',
    resources: 'Plataforma de inteligencia de amenazas, feeds de vulnerabilidades, personal de SOC/CSIRT',
  },

  // ============================================================
  // CIP-003: Controles de Gestión de Seguridad (5 recomendaciones)
  // ============================================================
  {
    id: 'REC-CIP003-01',
    cipId: 'CIP-003',
    riskLevel: 'critical',
    title: 'Desarrollar política de ciberseguridad para el sector eléctrico',
    description:
      'Crear una política de ciberseguridad integral aprobada por la alta dirección que cubra: gobernanza de seguridad, gestión de accesos, protección de activos críticos, respuesta a incidentes y continuidad operacional. La política debe estar alineada con los estándares CIP del CEN, la normativa chilena de ciberseguridad (Ley Marco) y las mejores prácticas internacionales. Establezca un ciclo de revisión anual y un proceso de divulgación a todo el personal.',
    priority: 'immediate',
    estimatedEffort: '3-5 semanas para desarrollo y aprobación',
    resources: 'Asesoría legal, equipo de ciberseguridad, aprobación de directorio, plantillas de políticas sectoriales',
  },
  {
    id: 'REC-CIP003-02',
    cipId: 'CIP-003',
    riskLevel: 'high',
    title: 'Designar líder senior de ciberseguridad con autoridad ejecutiva',
    description:
      'Designar formalmente un líder senior de ciberseguridad (CISO o equivalente) con autoridad para gestionar la protección de ciber activos BES. El rol debe tener acceso directo al directorio o gerencia general, presupuesto asignado para iniciativas de seguridad, y autoridad para implementar controles y tomar decisiones operativas de seguridad. Defina claramente las responsabilidades, líneas de reporte y métricas de desempeño del cargo.',
    priority: 'immediate',
    estimatedEffort: '2-4 semanas para designación formal y definición de rol',
    resources: 'Aprobación de directorio, descripción de cargo, presupuesto de seguridad, estructura organizacional',
  },
  {
    id: 'REC-CIP003-03',
    cipId: 'CIP-003',
    riskLevel: 'medium',
    title: 'Implementar programa de concientización trimestral',
    description:
      'Desarrollar un programa de concientización en ciberseguridad con actividades trimestrales dirigidas a todo el personal con acceso a ciber activos BES. Incluya simulaciones de phishing, charlas sobre amenazas actuales al sector eléctrico, talleres practicos sobre manejo seguro de sistemas de control, y evaluaciones de conocimiento. Personalice el contenido según los roles: operadores de planta, ingenieros de protección, personal administrativo y contratistas.',
    priority: 'short-term',
    estimatedEffort: '2-3 semanas para diseño inicial, actividades trimestrales continuas',
    resources: 'Plataforma de concientización, material didáctico, herramienta de simulación de phishing, presupuesto de capacitación',
  },
  {
    id: 'REC-CIP003-04',
    cipId: 'CIP-003',
    riskLevel: 'low',
    title: 'Fortalecer controles de acceso electrónico para activos de bajo impacto',
    description:
      'Implementar controles de acceso electrónico robustos para ciber activos BES de bajo impacto, incluyendo autenticación obligatoria para acceso local y remoto, cifrado de sesiones remotas, y registro de accesos. Priorice la protección de dispositivos en subestaciones remotas y pequenas centrales de generación. Implemente soluciones de acceso remoto seguro que no requieran conectividad permanente a Internet.',
    priority: 'medium-term',
    estimatedEffort: '4-6 semanas para implementación por fases',
    resources: 'Soluciones de acceso remoto seguro, dispositivos de autenticación, infraestructura de red segura',
  },
  {
    id: 'REC-CIP003-05',
    cipId: 'CIP-003',
    riskLevel: 'optimal',
    title: 'Establecer marco de gobernanza de ciberseguridad maduro',
    description:
      'Evolucionar hacia un marco de gobernanza de ciberseguridad maduro que integre la gestión de riesgos ciber con la gestión de riesgos empresariales. Implemente un comité de ciberseguridad con representación multidisciplinaria, establezca indicadores clave de riesgo (KRI), realice revisiones trimestrales del programa de seguridad ante el directorio, y alinee la estrategia de ciberseguridad con los objetivos de negocio y la regulación sectorial vigente.',
    priority: 'long-term',
    estimatedEffort: '12-16 semanas para establecer el marco completo',
    resources: 'Consultoría en gobernanza, herramientas GRC, participación del directorio, benchmarking sectorial',
  },

  // ============================================================
  // CIP-004: Personal y Capacitación (5 recomendaciones)
  // ============================================================
  {
    id: 'REC-CIP004-01',
    cipId: 'CIP-004',
    riskLevel: 'critical',
    title: 'Establecer programa obligatorio de capacitación en ciberseguridad',
    description:
      'Implementar un programa de capacitación obligatorio para todo el personal con acceso a ciber activos BES. El programa debe incluir módulos básicos sobre amenazas al sector eléctrico, procedimientos de seguridad operacional, manejo de incidentes y uso seguro de sistemas de control industrial. Ningún empleado debe obtener acceso a ciber activos BES sin completar la capacitación inicial. Establezca evaluaciones de conocimiento con puntaje mínimo aprobatorio.',
    priority: 'immediate',
    estimatedEffort: '3-4 semanas para desarrollo de contenido, implementación continua',
    resources: 'Plataforma de e-learning, instructores especializados en ciberseguridad OT, material didáctico sectorial',
  },
  {
    id: 'REC-CIP004-02',
    cipId: 'CIP-004',
    riskLevel: 'high',
    title: 'Implementar proceso de evaluación de antecedentes',
    description:
      'Establecer un proceso formal de evaluación de antecedentes personales para todo el personal que requiera acceso a ciber activos BES de alto y medio impacto. El proceso debe incluir verificación de identidad, antecedentes penales a través del Registro Civil, verificación de empleo anterior y, cuando corresponda, evaluación de riesgos adicionales. Defina criterios claros para aprobación o rechazo y un proceso de apelación.',
    priority: 'immediate',
    estimatedEffort: '2-3 semanas para establecer el proceso, aplicación continua',
    resources: 'Servicio de verificación de antecedentes, convenio con Registro Civil, procedimientos documentados',
  },
  {
    id: 'REC-CIP004-03',
    cipId: 'CIP-004',
    riskLevel: 'medium',
    title: 'Automatizar la gestión de accesos del ciclo de vida laboral',
    description:
      'Implementar un sistema automatizado para gestionar los accesos durante todo el ciclo de vida laboral del empleado: ingreso, cambio de rol y desvinculación. El sistema debe integrarse con recursos humanos para revocar accesos dentro de 24 horas ante una desvinculación y modificar accesos dentro de 30 días ante cambios de rol. Incluya revisiones trimestrales automatizadas de las listas de acceso autorizado.',
    priority: 'short-term',
    estimatedEffort: '4-6 semanas para implementación del sistema',
    resources: 'Sistema de gestión de identidades (IAM), integración con RRHH, directorio activo, workflows de aprobación',
  },
  {
    id: 'REC-CIP004-04',
    cipId: 'CIP-004',
    riskLevel: 'low',
    title: 'Desarrollar capacitación especializada por roles operativos',
    description:
      'Crear módulos de capacitación especializados según los roles operativos: operadores de centro de control, ingenieros de protección, técnicos de subestaciones, administradores de sistemas OT y personal de soporte remoto. Cada modulo debe abordar los riesgos específicos del rol, los controles de seguridad relevantes y los procedimientos de respuesta ante incidentes. Actualice el contenido al menos cada 15 meses.',
    priority: 'medium-term',
    estimatedEffort: '6-8 semanas para desarrollo de módulos especializados',
    resources: 'Expertos en ciberseguridad industrial, plataforma de capacitación, validación por áreas operativas',
  },
  {
    id: 'REC-CIP004-05',
    cipId: 'CIP-004',
    riskLevel: 'optimal',
    title: 'Implementar cultura de seguridad con métricas y mejora continua',
    description:
      'Establecer un programa de cultura de seguridad que mida la efectividad de las capacitaciones mediante indicadores como tasa de clics en simulaciones de phishing, tiempo de reporte de incidentes, resultados de evaluaciones y participación en actividades voluntarias de seguridad. Implemente un sistema de reconocimiento para empleados que demuestren prácticas ejemplares de seguridad. Realice benchmarking con otras empresas del sector eléctrico chileno.',
    priority: 'long-term',
    estimatedEffort: '8-12 semanas para diseño e implementación del programa',
    resources: 'Herramientas de medición de cultura de seguridad, programa de incentivos, encuestas periódicas',
  },

  // ============================================================
  // CIP-005: Perímetros de Seguridad Electrónica (5 recomendaciones)
  // ============================================================
  {
    id: 'REC-CIP005-01',
    cipId: 'CIP-005',
    riskLevel: 'critical',
    title: 'Definir e implementar perímetros de seguridad electrónica',
    description:
      'Definir los perímetros de seguridad electrónica (ESP) para todos los ciber activos BES de alto y medio impacto. Documente los límites de cada ESP con diagramas de red detallados, identifique todos los puntos de acceso electrónico (EAP) e implemente firewalls o dispositivos de control de acceso en cada punto. Configure reglas de filtrado con política de denegación por defecto y permita solo el trafico estrictamente necesario para la operación.',
    priority: 'immediate',
    estimatedEffort: '4-8 semanas dependiendo de la complejidad de la red',
    resources: 'Firewalls industriales, diagramas de red, personal de redes OT, herramientas de escaneo de red',
  },
  {
    id: 'REC-CIP005-02',
    cipId: 'CIP-005',
    riskLevel: 'high',
    title: 'Implementar autenticación multifactor para acceso remoto',
    description:
      'Implementar autenticación multifactor (MFA) para todas las sesiones de acceso remoto interactivo a ciber activos BES. Utilice una combinación de al menos dos factores: contraseña, token físico o aplicación de autenticación, o biometría. Cifre todas las sesiones remotas con TLS 1.2 o superior. Implemente una solución de acceso remoto centralizada que registre todas las sesiones y permita su revocación inmediata.',
    priority: 'immediate',
    estimatedEffort: '3-5 semanas para implementación de MFA',
    resources: 'Solución de MFA compatible con OT, tokens de hardware, VPN cifrada, servidor de autenticación',
  },
  {
    id: 'REC-CIP005-03',
    cipId: 'CIP-005',
    riskLevel: 'medium',
    title: 'Desplegar sistemas de detección de intrusiones en puntos de acceso',
    description:
      'Implementar sistemas de detección de intrusiones (IDS) en todos los puntos de acceso electrónico de los ESP. Configure firmas específicas para protocolos industriales (Modbus, DNP3, IEC 61850, IEC 104) y establezca líneas base de trafico normal. Las alertas deben enviarse al personal de seguridad en tiempo real. Actualice las firmas de detección regularmente y ajuste las reglas para minimizar falsos positivos sin comprometer la detección.',
    priority: 'short-term',
    estimatedEffort: '4-6 semanas para despliegue y configuración',
    resources: 'IDS/IPS industriales (Dragos, Nozomi, Claroty), personal de seguridad OT, feeds de firmas',
  },
  {
    id: 'REC-CIP005-04',
    cipId: 'CIP-005',
    riskLevel: 'low',
    title: 'Establecer monitoreo continuo de comunicaciones de red',
    description:
      'Implementar monitoreo continuo de las comunicaciones dentro y entre los perímetros de seguridad electrónica. Utilice herramientas de análisis de trafico de red que identifiquen anomalias, nuevos dispositivos, cambios en patrones de comunicación y protocolos no autorizados. Integre el monitoreo de red con el sistema de gestión de eventos de seguridad (SIEM) para correlación de alertas y respuesta coordinada.',
    priority: 'medium-term',
    estimatedEffort: '6-8 semanas para implementación completa',
    resources: 'Herramientas de monitoreo de red OT, SIEM, capacidad de almacenamiento de logs, analistas de seguridad',
  },
  {
    id: 'REC-CIP005-05',
    cipId: 'CIP-005',
    riskLevel: 'optimal',
    title: 'Implementar segmentación avanzada con microsegmentación y zero trust',
    description:
      'Evolucionar la arquitectura de red hacia un modelo de microsegmentación y zero trust que limite el movimiento lateral en caso de compromiso. Implemente zonas de seguridad granulares dentro de los ESP, controles de acceso basados en identidad para cada comunicación entre activos, y verificación continua de la postura de seguridad de los dispositivos. Considere la implementación de un centro de operaciones de seguridad (SOC) dedicado al entorno OT.',
    priority: 'long-term',
    estimatedEffort: '12-20 semanas para implementación por fases',
    resources: 'Arquitecto de seguridad OT, tecnología de microsegmentación, plataforma zero trust, SOC OT',
  },

  // ============================================================
  // CIP-006: Seguridad Física (5 recomendaciones)
  // ============================================================
  {
    id: 'REC-CIP006-01',
    cipId: 'CIP-006',
    riskLevel: 'critical',
    title: 'Establecer perímetros de seguridad física para ciber activos BES',
    description:
      'Definir e implementar perímetros de seguridad física (PSP) para todas las ubicaciones que contengan ciber activos BES de alto y medio impacto. Instale mecanismos de control de acceso (tarjetas de proximidad, biometría o cerraduras electrónicas) en todos los puntos de entrada. Mantenga listas actualizadas de personal autorizado y asegure que solo el personal con necesidad operativa tenga acceso. Incluya centros de control, salas de servidores, gabinetes de comunicaciones y subestaciones.',
    priority: 'immediate',
    estimatedEffort: '4-8 semanas dependiendo del numero de instalaciones',
    resources: 'Sistemas de control de acceso, cerraduras electrónicas, tarjetas de proximidad, instalación y configuración',
  },
  {
    id: 'REC-CIP006-02',
    cipId: 'CIP-006',
    riskLevel: 'high',
    title: 'Implementar programa de control de visitantes',
    description:
      'Establecer un programa formal de control de visitantes para todas las áreas que contengan ciber activos BES. El programa debe incluir: registro de visitantes con identificación, emisión de credenciales temporales visibles, acompañamiento continuo por personal autorizado, registro de entrada y salida, y prohibición de dispositivos electrónicos no autorizados. Capacite al personal de seguridad y operaciones sobre los procedimientos de acompañamiento.',
    priority: 'immediate',
    estimatedEffort: '2-3 semanas para implementación del programa',
    resources: 'Libro de registro de visitantes, credenciales temporales, señalética, capacitación de personal',
  },
  {
    id: 'REC-CIP006-03',
    cipId: 'CIP-006',
    riskLevel: 'medium',
    title: 'Instalar sistemas de videovigilancia y alarmas',
    description:
      'Implementar sistemas de videovigilancia (CCTV) y alarmas en todos los puntos de acceso al perímetro de seguridad física. Las cámaras deben cubrir entradas, salidas y áreas críticas con grabación continua y retención mínima de 90 días. Configure alarmas que generen alertas en tiempo real ante intentos de acceso no autorizado, puertas forzadas o permanencia prolongada en zonas restringidas. Integre con un centro de monitoreo 24/7.',
    priority: 'short-term',
    estimatedEffort: '4-8 semanas para instalación y configuración',
    resources: 'Camaras IP, sistema de grabación NVR, alarmas, centro de monitoreo, personal de seguridad',
  },
  {
    id: 'REC-CIP006-04',
    cipId: 'CIP-006',
    riskLevel: 'low',
    title: 'Automatizar la gestión de acceso físico con integración de sistemas',
    description:
      'Integrar el sistema de control de acceso físico con el sistema de gestión de identidades de la organización para automatizar la provisión y revocación de accesos físicos. Cuando un empleado se desvincula o cambia de rol, el acceso físico debe revocarse automáticamente. Implemente revisiones trimestrales automatizadas de las listas de acceso y genere reportes de cumplimiento para auditorías regulatorias.',
    priority: 'medium-term',
    estimatedEffort: '6-8 semanas para integración de sistemas',
    resources: 'Integración IAM-control de acceso físico, desarrollo de interfaces, pruebas de automatización',
  },
  {
    id: 'REC-CIP006-05',
    cipId: 'CIP-006',
    riskLevel: 'optimal',
    title: 'Implementar seguridad física convergente con ciberseguridad',
    description:
      'Establecer un programa de seguridad convergente que integre la seguridad física y la ciberseguridad bajo una gobernanza unificada. Implemente correlación de eventos físicos y ciber (un acceso físico seguido de un acceso lógico debe ser validado), analítica de video con inteligencia artificial para detección de comportamientos anómalos, y un tablero de seguridad integrado que muestre el estado de seguridad física y ciber de todas las instalaciones críticas.',
    priority: 'long-term',
    estimatedEffort: '12-16 semanas para implementación completa',
    resources: 'Plataforma PSIM, analítica de video AI, integración SIEM-control de acceso, personal multidisciplinario',
  },

  // ============================================================
  // CIP-007: Gestión de Seguridad de Sistemas (5 recomendaciones)
  // ============================================================
  {
    id: 'REC-CIP007-01',
    cipId: 'CIP-007',
    riskLevel: 'critical',
    title: 'Realizar hardening de sistemas y deshabilitar servicios innecesarios',
    description:
      'Ejecutar un proceso de hardening en todos los ciber activos BES, deshabilitando puertos y servicios que no sean estrictamente necesarios para la operación. Documente cada puerto y servicio habilitado con su justificación operativa. Utilice guias de hardening del fabricante y estándares como CIS Benchmarks adaptados al entorno OT. Priorice los activos de alto impacto y los que estan expuestos en los puntos de acceso electrónico.',
    priority: 'immediate',
    estimatedEffort: '3-6 semanas dependiendo del numero de activos',
    resources: 'Guias de hardening del fabricante, CIS Benchmarks, herramientas de escaneo de puertos, ventanas de mantenimiento',
  },
  {
    id: 'REC-CIP007-02',
    cipId: 'CIP-007',
    riskLevel: 'high',
    title: 'Establecer programa de gestión de parches para entornos OT',
    description:
      'Implementar un programa de gestión de parches adaptado a entornos de tecnología operacional que evalúe los parches de seguridad dentro de 35 días desde su publicación. Establezca un entorno de pruebas que replique los sistemas críticos para validar parches antes de su aplicación en producción. Cuando un parche no pueda ser aplicado, documente planes de mitigación con controles compensatorios como reglas de firewall adicionales, segregación de red o monitoreo reforzado.',
    priority: 'immediate',
    estimatedEffort: '4-6 semanas para establecer el programa, ejecución continua',
    resources: 'Entorno de pruebas OT, herramientas de distribución de parches, coordinación con fabricantes, ventanas de mantenimiento programadas',
  },
  {
    id: 'REC-CIP007-03',
    cipId: 'CIP-007',
    riskLevel: 'medium',
    title: 'Implementar protección contra código malicioso en entornos industriales',
    description:
      'Desplegar soluciones de prevención de código malicioso apropiadas para entornos industriales en todos los ciber activos BES. Considere listas blancas de aplicaciones para sistemas con software estable, antivirus con actualización controlada para estaciones de trabajo, y control de dispositivos removibles (USB) en todos los equipos. Establezca procedimientos para la actualización segura de firmas y para el manejo de falsos positivos que podrian afectar la operación.',
    priority: 'short-term',
    estimatedEffort: '4-6 semanas para despliegue por fases',
    resources: 'Software de lista blanca de aplicaciones, antivirus industrial, políticas de USB, procedimientos de actualización',
  },
  {
    id: 'REC-CIP007-04',
    cipId: 'CIP-007',
    riskLevel: 'low',
    title: 'Centralizar el monitoreo de eventos de seguridad con SIEM',
    description:
      'Implementar un sistema centralizado de gestión de eventos de seguridad (SIEM) que recopile y correlacione eventos de todos los ciber activos BES. Configure alertas para intentos de autenticación fallidos, cambios de configuración, instalación de software no autorizado y actividades administrativas anómalas. Retenga los registros por al menos 90 días y establezca procedimientos de revisión diaria de alertas críticas por el equipo de seguridad.',
    priority: 'medium-term',
    estimatedEffort: '6-10 semanas para implementación y afinamiento',
    resources: 'Plataforma SIEM, colectores de logs para protocolos OT, almacenamiento, analistas de seguridad para revisión de alertas',
  },
  {
    id: 'REC-CIP007-05',
    cipId: 'CIP-007',
    riskLevel: 'optimal',
    title: 'Implementar gestión avanzada de identidades y accesos privilegiados',
    description:
      'Desplegar una solución de gestión de accesos privilegiados (PAM) para controlar, monitorear y auditar el uso de cuentas con privilegios elevados en ciber activos BES. Implemente rotación automática de contraseñas de cuentas de servicio, grabación de sesiones privilegiadas, acceso just-in-time y aprobaciones de acceso elevado. Elimine las cuentas compartidas cuando sea posible y, cuando no lo sea, implemente controles de check-out con registro individual de uso.',
    priority: 'long-term',
    estimatedEffort: '8-12 semanas para implementación por fases',
    resources: 'Solución PAM, integración con directorio activo y sistemas OT, políticas de cuentas privilegiadas',
  },

  // ============================================================
  // CIP-008: Reporte y Respuesta a Incidentes (5 recomendaciones)
  // ============================================================
  {
    id: 'REC-CIP008-01',
    cipId: 'CIP-008',
    riskLevel: 'critical',
    title: 'Desarrollar plan de respuesta a incidentes de ciberseguridad',
    description:
      'Crear un plan de respuesta a incidentes de ciberseguridad específico para el entorno del sistema eléctrico. El plan debe incluir: definición de tipos de incidentes y criterios de clasificación por severidad, procedimientos de detección e identificación, proceso de contención y erradicación, procedimientos de recuperación, roles y responsabilidades del equipo de respuesta, cadena de comunicación interna y externa, y criterios de notificación al CEN y CSIRT sectorial. Pruebe el plan con un ejercicio de mesa inicial.',
    priority: 'immediate',
    estimatedEffort: '3-5 semanas para desarrollo del plan',
    resources: 'Equipo multidisciplinario (OT, IT, legal, comunicaciones), plantillas de planes de respuesta, normativa CEN',
  },
  {
    id: 'REC-CIP008-02',
    cipId: 'CIP-008',
    riskLevel: 'high',
    title: 'Conformar y capacitar equipo de respuesta a incidentes',
    description:
      'Establecer un equipo de respuesta a incidentes de ciberseguridad (CSIRT interno) con roles claramente definidos: coordinador de incidentes, analistas de seguridad OT e IT, enlace con operaciones, enlace legal y comunicaciones. Capacite al equipo en herramientas de análisis forense, manejo de evidencia digital y coordinación con el CSIRT del sector eléctrico chileno. Asegure disponibilidad 24/7 mediante un sistema de guardias rotativas y listas de contacto actualizadas.',
    priority: 'immediate',
    estimatedEffort: '4-6 semanas para conformación y capacitación inicial',
    resources: 'Personal multidisciplinario, capacitación en respuesta a incidentes OT, herramientas forenses, sistema de guardias',
  },
  {
    id: 'REC-CIP008-03',
    cipId: 'CIP-008',
    riskLevel: 'medium',
    title: 'Realizar ejercicios de simulación de incidentes anuales',
    description:
      'Planificar y ejecutar ejercicios de simulación de incidentes de ciberseguridad al menos una vez al año. Incluya ejercicios de mesa (tabletop) para validar procedimientos y toma de decisiones, y ejercicios funcionales que prueben la capacidad técnica de respuesta. Los escenarios deben ser relevantes para el sector eléctrico: ransomware en sistemas SCADA, compromiso de acceso remoto de proveedor, ataque a subestación, manipulación de datos de medición. Documente lecciones aprendidas y actualice el plan.',
    priority: 'short-term',
    estimatedEffort: '2-3 semanas por ejercicio, planificación anual',
    resources: 'Facilitador de ejercicios, escenarios de simulación, participación de áreas operativas, sala de crisis',
  },
  {
    id: 'REC-CIP008-04',
    cipId: 'CIP-008',
    riskLevel: 'low',
    title: 'Establecer canales formales de notificación al CEN y CSIRT sectorial',
    description:
      'Documentar y probar los canales de comunicación con el Coordinador Eléctrico Nacional y el CSIRT del sector eléctrico para la notificación de incidentes. Defina los criterios de incidentes reportables, los plazos de notificación (dentro de una hora para incidentes críticos), los formatos de reporte y los contactos principales y alternativos. Realice pruebas periódicas de los canales de comunicación para asegurar su disponibilidad y la correcta recepción de notificaciones.',
    priority: 'medium-term',
    estimatedEffort: '2-3 semanas para establecer canales y procedimientos',
    resources: 'Contactos del CEN y CSIRT sectorial, formatos de reporte, sistema de comunicación redundante',
  },
  {
    id: 'REC-CIP008-05',
    cipId: 'CIP-008',
    riskLevel: 'optimal',
    title: 'Implementar capacidad avanzada de detección y respuesta automatizada',
    description:
      'Evolucionar la capacidad de respuesta a incidentes mediante la implementación de tecnologias de detección y respuesta automatizada (SOAR) integradas con el SIEM y las herramientas de monitoreo OT. Defina playbooks automatizados para los tipos de incidentes más comunes, implemente threat hunting proactivo en el entorno OT, y establezca integración con fuentes de inteligencia de amenazas específicas del sector eléctrico. Participe en ejercicios conjuntos con otras empresas del sector y el CSIRT nacional.',
    priority: 'long-term',
    estimatedEffort: '12-16 semanas para implementación completa',
    resources: 'Plataforma SOAR, inteligencia de amenazas sectorial, analistas de threat hunting, participación en ejercicios sectoriales',
  },

  // ============================================================
  // CIP-009: Planes de Recuperación (5 recomendaciones)
  // ============================================================
  {
    id: 'REC-CIP009-01',
    cipId: 'CIP-009',
    riskLevel: 'critical',
    title: 'Documentar planes de recuperación para ciber activos BES críticos',
    description:
      'Desarrollar planes de recuperación detallados para cada ciber activo BES crítico. Cada plan debe incluir: condiciones de activación, procedimientos de restauración paso a paso, datos de contacto del personal clave, objetivos de tiempo de recuperación (RTO) y punto de recuperación (RPO), recursos necesarios (hardware de repuesto, medios de respaldo, licencias) y procedimientos de verificación post-recuperación. Priorice los activos que soportan funciones de control en tiempo real del sistema eléctrico.',
    priority: 'immediate',
    estimatedEffort: '4-6 semanas para documentación de planes',
    resources: 'Personal de OT e IT, documentación técnica de sistemas, requisitos operacionales, plantillas de planes de recuperación',
  },
  {
    id: 'REC-CIP009-02',
    cipId: 'CIP-009',
    riskLevel: 'high',
    title: 'Implementar programa de respaldos verificados',
    description:
      'Establecer un programa de respaldos que incluya datos de configuración, imagenes de sistema, datos operativos y configuraciones de seguridad de todos los ciber activos BES. Los respaldos deben almacenarse en ubicaciones seguras separadas de los sistemas de producción, con protección contra acceso no autorizado. Programe verificaciones periódicas de restauración para confirmar que los respaldos son utilizables. Implemente respaldos incrementales diarios y completos semanales como mínimo.',
    priority: 'immediate',
    estimatedEffort: '3-5 semanas para implementar programa de respaldos',
    resources: 'Infraestructura de respaldo, medios de almacenamiento, ubicación de almacenamiento externo, herramientas de respaldo OT',
  },
  {
    id: 'REC-CIP009-03',
    cipId: 'CIP-009',
    riskLevel: 'medium',
    title: 'Realizar ejercicios de recuperación cada 15 meses',
    description:
      'Planificar y ejecutar ejercicios de recuperación al menos cada 15 meses para cada plan documentado. Los ejercicios deben simular escenarios realistas como falla de hardware, compromiso por ransomware, corrupción de datos de configuración y pérdida de conectividad de centro de control. Mida los tiempos reales de recuperación contra los RTO definidos y documente las deficiencias encontradas. Actualice los planes basándose en las lecciones aprendidas de cada ejercicio.',
    priority: 'short-term',
    estimatedEffort: '1-2 semanas por ejercicio, planificación periódica',
    resources: 'Entorno de pruebas de recuperación, coordinación con operaciones, documentación de resultados',
  },
  {
    id: 'REC-CIP009-04',
    cipId: 'CIP-009',
    riskLevel: 'low',
    title: 'Mantener inventario de hardware de repuesto crítico',
    description:
      'Identificar y mantener disponible el hardware de repuesto necesario para la recuperación de ciber activos BES críticos. El inventario debe incluir componentes cuyo tiempo de adquisición exceda los RTO definidos: servidores de control, tarjetas de comunicación, switches industriales, fuentes de poder y discos de almacenamiento. Establezca acuerdos con fabricantes para tiempos de entrega garantizados y considere mantener repuestos en ubicaciones estrategicas cercanas a las instalaciones críticas.',
    priority: 'medium-term',
    estimatedEffort: '4-6 semanas para identificar necesidades y adquirir repuestos',
    resources: 'Presupuesto para repuestos, acuerdos con proveedores, espacio de almacenamiento seguro, inventario actualizado',
  },
  {
    id: 'REC-CIP009-05',
    cipId: 'CIP-009',
    riskLevel: 'optimal',
    title: 'Implementar recuperación automatizada con infraestructura redundante',
    description:
      'Diseñar e implementar infraestructura redundante para los ciber activos BES más críticos, con capacidad de conmutación automática (failover) y recuperación orquestada. Implemente centros de control de respaldo con sincronización en tiempo real, réplicas de servidores críticos y procedimientos de conmutación probados. Establezca objetivos de RTO menores a 4 horas para funciones de control en tiempo real y pruebe la conmutación automática trimestralmente.',
    priority: 'long-term',
    estimatedEffort: '16-24 semanas para diseño e implementación de redundancia',
    resources: 'Infraestructura redundante, centro de control de respaldo, enlaces de comunicación redundantes, licencias duplicadas',
  },

  // ============================================================
  // CIP-010: Gestión de Cambios y Vulnerabilidades (5 recomendaciones)
  // ============================================================
  {
    id: 'REC-CIP010-01',
    cipId: 'CIP-010',
    riskLevel: 'critical',
    title: 'Documentar configuración base de todos los ciber activos BES',
    description:
      'Crear y mantener un registro de configuración base para cada ciber activo BES que incluya: sistema operativo con versión y nivel de parche, puertos y servicios lógicos habilitados con justificación, software instalado con versiones, cuentas de usuario configuradas y parametros de seguridad. Utilice herramientas automatizadas para capturar la configuración inicial y establezca un proceso para actualizar la documentación cada vez que se realice un cambio autorizado.',
    priority: 'immediate',
    estimatedEffort: '3-5 semanas para documentación inicial',
    resources: 'Herramientas de captura de configuración, base de datos de configuración (CMDB), personal técnico OT',
  },
  {
    id: 'REC-CIP010-02',
    cipId: 'CIP-010',
    riskLevel: 'high',
    title: 'Implementar proceso formal de gestión de cambios',
    description:
      'Establecer un proceso de gestión de cambios que incluya: solicitud formal de cambio, evaluación de impacto de seguridad, aprobación por el responsable de ciberseguridad, pruebas en entorno no productivo cuando sea posible, implementación controlada con plan de rollback, actualización de la configuración base y verificación post-cambio. Defina categorías de cambios (estándar, normal, emergencia) con niveles de aprobación apropiados para cada una.',
    priority: 'immediate',
    estimatedEffort: '3-4 semanas para disenar e implementar el proceso',
    resources: 'Herramienta de gestión de cambios (ITSM), formularios de solicitud, comité de cambios, procedimientos documentados',
  },
  {
    id: 'REC-CIP010-03',
    cipId: 'CIP-010',
    riskLevel: 'medium',
    title: 'Implementar monitoreo automatizado de cambios de configuración',
    description:
      'Desplegar herramientas de monitoreo que detecten automáticamente cambios en la configuración de los ciber activos BES y alerten cuando se produzcan modificaciones no autorizadas. Configure comparaciones periódicas (al menos cada 35 días) con la configuración base documentada. Las alertas de cambios no autorizados deben generar investigaciones inmediatas por el equipo de seguridad. Integre el monitoreo con el SIEM para correlación con otros eventos de seguridad.',
    priority: 'short-term',
    estimatedEffort: '4-6 semanas para implementación de monitoreo',
    resources: 'Herramientas de monitoreo de integridad de archivos (FIM), integración con SIEM, personal de seguridad',
  },
  {
    id: 'REC-CIP010-04',
    cipId: 'CIP-010',
    riskLevel: 'low',
    title: 'Establecer programa de evaluación de vulnerabilidades periodico',
    description:
      'Implementar un programa de evaluación de vulnerabilidades que analice los ciber activos BES al menos cada 15 meses. Utilice herramientas de escaneo compatibles con entornos industriales y protocolos OT. Priorice las vulnerabilidades según su severidad (CVSS) y su relevancia para el entorno operativo. Documente planes de remediación con plazos definidos y controles compensatorios para vulnerabilidades que no puedan ser remediadas inmediatamente.',
    priority: 'medium-term',
    estimatedEffort: '2-3 semanas por ciclo de evaluación',
    resources: 'Herramientas de escaneo de vulnerabilidades OT, base de datos de vulnerabilidades, coordinación con fabricantes',
  },
  {
    id: 'REC-CIP010-05',
    cipId: 'CIP-010',
    riskLevel: 'optimal',
    title: 'Implementar gestión continua de vulnerabilidades con priorización basada en riesgo',
    description:
      'Evolucionar hacia un programa de gestión continua de vulnerabilidades que combine escaneo automatizado, inteligencia de amenazas y priorización basada en riesgo operativo. Implemente un proceso que considere no solo la severidad técnica de la vulnerabilidad sino también la criticidad del activo afectado, la exposición de red y la disponibilidad de exploits activos. Establezca SLAs de remediación diferenciados según el nivel de riesgo y genere métricas de desempeño del programa.',
    priority: 'long-term',
    estimatedEffort: '8-12 semanas para implementación del programa avanzado',
    resources: 'Plataforma de gestión de vulnerabilidades, inteligencia de amenazas, integración con CMDB y gestión de riesgos',
  },

  // ============================================================
  // CIP-011: Protección de Información (5 recomendaciones)
  // ============================================================
  {
    id: 'REC-CIP011-01',
    cipId: 'CIP-011',
    riskLevel: 'critical',
    title: 'Clasificar y proteger la información sensible de ciber activos BES',
    description:
      'Implementar un esquema de clasificación de información que identifique los datos sensibles asociados a ciber activos BES: diagramas de red, configuraciones de seguridad, credenciales, procedimientos operativos, datos de vulnerabilidades y evaluaciones de riesgo. Establezca controles de protección para cada nivel de clasificación, incluyendo restricciones de acceso, cifrado de almacenamiento, marcado de documentos y restricciones de distribución. Capacite al personal sobre los procedimientos de manejo de información sensible.',
    priority: 'immediate',
    estimatedEffort: '3-4 semanas para establecer el esquema y controles iniciales',
    resources: 'Politica de clasificación de información, herramientas de cifrado, sistema de gestión documental con control de acceso',
  },
  {
    id: 'REC-CIP011-02',
    cipId: 'CIP-011',
    riskLevel: 'high',
    title: 'Implementar cifrado para información en tránsito y almacenamiento',
    description:
      'Implementar cifrado para toda la información sensible de ciber activos BES tanto en almacenamiento como en transmisión. Utilice cifrado de disco completo o cifrado de archivos para datos almacenados, y protocolos cifrados (TLS 1.2+, SSH, VPN IPSec) para datos en tránsito. Gestione las claves de cifrado de manera segura con rotación periódica. Priorice la protección de diagramas de red, configuraciones de seguridad, credenciales y datos de vulnerabilidades.',
    priority: 'immediate',
    estimatedEffort: '3-5 semanas para implementación de cifrado',
    resources: 'Soluciones de cifrado, gestión de claves, certificados digitales, infraestructura PKI',
  },
  {
    id: 'REC-CIP011-03',
    cipId: 'CIP-011',
    riskLevel: 'medium',
    title: 'Establecer procedimientos de destrucción segura de medios',
    description:
      'Documentar e implementar procedimientos de destrucción segura de información para medios que contienen datos de ciber activos BES. Los procedimientos deben especificar métodos aceptables según el tipo de medio: borrado seguro (NIST SP 800-88) para medios reutilizables, desmagnetización para cintas, y destrucción física para medios dañados o al final de su vida útil. Mantenga registros de cada destrucción con descripción del medio, método utilizado, fecha y responsable.',
    priority: 'short-term',
    estimatedEffort: '2-3 semanas para documentar e implementar procedimientos',
    resources: 'Herramientas de borrado seguro certificadas, trituradora de medios, registro de destrucción, proveedor de destrucción certificado',
  },
  {
    id: 'REC-CIP011-04',
    cipId: 'CIP-011',
    riskLevel: 'low',
    title: 'Implementar control de distribución de información sensible',
    description:
      'Establecer un sistema de control de distribución que rastree quien recibe información sensible de ciber activos BES. Implemente marcas de agua digitales en documentos sensibles, utilice sistemas de gestión de derechos digitales (DRM) cuando sea apropiado, y mantenga un registro de distribución. Restrinja la impresión y copia de documentos sensibles. Cuando se comparta información con terceros (reguladores, proveedores), utilice acuerdos de confidencialidad y canales de transmisión seguros.',
    priority: 'medium-term',
    estimatedEffort: '4-6 semanas para implementación de controles',
    resources: 'Sistema DRM, herramientas de marcas de agua, acuerdos de confidencialidad, canales seguros de transferencia',
  },
  {
    id: 'REC-CIP011-05',
    cipId: 'CIP-011',
    riskLevel: 'optimal',
    title: 'Implementar prevención de fuga de datos (DLP) integral',
    description:
      'Implementar una solución de prevención de fuga de datos (DLP) que monitoree y controle el flujo de información sensible de ciber activos BES en endpoints, red y nube. Configure políticas que detecten y bloqueen la transmisión no autorizada de diagramas de red, configuraciones de seguridad, credenciales y otros datos clasificados. Integre con el SIEM para alertas y con el programa de concientización para educación basada en incidentes reales de fuga de información.',
    priority: 'long-term',
    estimatedEffort: '8-12 semanas para implementación por fases',
    resources: 'Solución DLP, clasificación automatizada de datos, integración con infraestructura de seguridad existente',
  },

  // ============================================================
  // CIP-013: Gestión de Riesgo Cadena Suministro (5 recomendaciones)
  // ============================================================
  {
    id: 'REC-CIP013-01',
    cipId: 'CIP-013',
    riskLevel: 'critical',
    title: 'Desarrollar plan de gestión de riesgo de cadena de suministro',
    description:
      'Crear un plan documentado de gestión de riesgo de cadena de suministro para ciber activos BES que aborde: evaluación de riesgos de proveedores antes de la adquisición, verificación de integridad de software y hardware, gestión de acceso remoto de proveedores, requisitos contractuales de ciberseguridad, y procedimientos de notificación de incidentes y vulnerabilidades. El plan debe aplicarse a todos los proveedores de ciber activos BES de alto y medio impacto y revisarse al menos cada 15 meses.',
    priority: 'immediate',
    estimatedEffort: '4-6 semanas para desarrollo del plan',
    resources: 'Equipo de ciberseguridad, area de adquisiciones, asesoría legal, criterios de evaluación de proveedores',
  },
  {
    id: 'REC-CIP013-02',
    cipId: 'CIP-013',
    riskLevel: 'high',
    title: 'Incluir requisitos de ciberseguridad en contratos con proveedores',
    description:
      'Incorporar clausulas obligatorias de ciberseguridad en todos los contratos con proveedores de ciber activos BES. Las clausulas deben incluir: notificación de vulnerabilidades conocidas dentro de plazos definidos, provisión de actualizaciones de seguridad durante la vida útil del producto, control y monitoreo de acceso remoto, verificación de integridad de actualizaciones, derecho a auditoría de seguridad, y requisitos de respuesta ante incidentes que afecten los productos suministrados. Coordine con el area legal para redactar clausulas exigibles.',
    priority: 'immediate',
    estimatedEffort: '3-4 semanas para desarrollo de clausulas contractuales',
    resources: 'Asesoría legal, modelos de clausulas de ciberseguridad, coordinación con area de adquisiciones',
  },
  {
    id: 'REC-CIP013-03',
    cipId: 'CIP-013',
    riskLevel: 'medium',
    title: 'Implementar verificación de integridad de software y firmware',
    description:
      'Establecer un proceso de verificación de integridad para todo el software y firmware antes de su instalación en ciber activos BES. El proceso debe incluir: descarga exclusiva desde fuentes oficiales del fabricante, verificación de hashes (SHA-256 o superior), validación de firmas digitales, escaneo de malware previo a la instalación, y documentación de la cadena de custodia del software. Priorice la verificación en actualizaciones de firmware de dispositivos de protección y control.',
    priority: 'short-term',
    estimatedEffort: '2-3 semanas para establecer el proceso',
    resources: 'Herramientas de verificación de hashes, repositorio seguro de software, procedimientos documentados',
  },
  {
    id: 'REC-CIP013-04',
    cipId: 'CIP-013',
    riskLevel: 'low',
    title: 'Evaluar y monitorear riesgos de proveedores de manera continua',
    description:
      'Implementar un programa de evaluación continua de riesgos de proveedores de ciber activos BES que incluya: evaluación inicial de seguridad antes de la contratación, revisiones periódicas de las prácticas de seguridad del proveedor, monitoreo de vulnerabilidades en productos del proveedor, verificación de capacidad de soporte a largo plazo y evaluación de estabilidad financiera. Mantenga un inventario de proveedores críticos con su evaluación de riesgo actualizada y planes de contingencia para proveedores de alto riesgo.',
    priority: 'medium-term',
    estimatedEffort: '4-6 semanas para establecer el programa de evaluación',
    resources: 'Cuestionarios de evaluación de proveedores, herramientas de monitoreo de riesgos, coordinación con area de compras',
  },
  {
    id: 'REC-CIP013-05',
    cipId: 'CIP-013',
    riskLevel: 'optimal',
    title: 'Implementar programa maduro de gestión de riesgo de terceros',
    description:
      'Evolucionar hacia un programa integral de gestión de riesgo de terceros que cubra todo el ciclo de vida de la relación con proveedores. Implemente evaluaciones de seguridad basadas en marcos reconocidos (ISO 27001, SOC 2), auditorías periódicas a proveedores críticos, monitoreo continuo de la postura de seguridad del proveedor mediante plataformas especializadas, y participación en iniciativas sectoriales de compartición de información sobre riesgos de cadena de suministro en el sector eléctrico chileno.',
    priority: 'long-term',
    estimatedEffort: '10-14 semanas para implementación del programa avanzado',
    resources: 'Plataforma de gestión de riesgo de terceros, auditorías de proveedores, participación en foros sectoriales',
  },

  // ============================================================
  // CIP-014: Seguridad Física Infraestructura Crítica (5 recomendaciones)
  // ============================================================
  {
    id: 'REC-CIP014-01',
    cipId: 'CIP-014',
    riskLevel: 'critical',
    title: 'Realizar evaluación de riesgo de seguridad física de instalaciones críticas',
    description:
      'Ejecutar una evaluación de riesgo de seguridad física completa para todas las instalaciones de transmisión e infraestructura crítica. La evaluación debe identificar: instalaciones cuya pérdida podría causar inestabilidad en el SEN, amenazas físicas relevantes (sabotaje, vandalismo, terrorismo, desastres naturales), vulnerabilidades de cada instalación (accesibilidad, visibilidad, aislamiento), y el impacto potencial de cada escenario de amenaza. Priorice las subestaciones de alta tensión, centros de control y centrales de generación críticas.',
    priority: 'immediate',
    estimatedEffort: '4-8 semanas dependiendo del numero de instalaciones',
    resources: 'Consultores de seguridad física, análisis de impacto operacional, información de amenazas locales, mapas de instalaciones',
  },
  {
    id: 'REC-CIP014-02',
    cipId: 'CIP-014',
    riskLevel: 'high',
    title: 'Obtener evaluación de terceros independiente',
    description:
      'Contratar una evaluación de seguridad física por un tercero independiente calificado que no haya participado en la evaluación inicial. El tercero debe validar la identificación de instalaciones críticas, evaluar la calidad de la evaluación de riesgo, revisar las medidas de seguridad propuestas y proporcionar recomendaciones adicionales. Seleccione una empresa con experiencia en seguridad de infraestructura crítica del sector eléctrico y con conocimiento del contexto de seguridad chileno.',
    priority: 'immediate',
    estimatedEffort: '4-6 semanas para selección del tercero y ejecución de la evaluación',
    resources: 'Presupuesto para consultoría externa, criterios de selección de tercero, acceso a instalaciones para evaluación',
  },
  {
    id: 'REC-CIP014-03',
    cipId: 'CIP-014',
    riskLevel: 'medium',
    title: 'Implementar plan de seguridad física basado en evaluación de riesgo',
    description:
      'Desarrollar e implementar un plan de seguridad física que aborde las amenazas y vulnerabilidades identificadas en la evaluación de riesgo. El plan debe incluir: mejoras a barreras físicas (cercas reforzadas, muros anti-vehiculares), sistemas de vigilancia (CCTV con analítica de video), iluminación perimetral de seguridad, sensores de detección de intrusión, control de acceso vehicular y peatonal, y procedimientos de patrullaje. Coordine la implementación con las operaciones para no afectar la disponibilidad de las instalaciones.',
    priority: 'short-term',
    estimatedEffort: '8-16 semanas para implementación por fases',
    resources: 'Presupuesto de seguridad física, contratistas de construcción e instalación, equipos de seguridad, permisos municipales',
  },
  {
    id: 'REC-CIP014-04',
    cipId: 'CIP-014',
    riskLevel: 'low',
    title: 'Establecer coordinación con fuerzas de seguridad y respuesta rápida',
    description:
      'Formalizar la coordinación con Carabineros de Chile, PDI y otras fuerzas de seguridad relevantes para la protección de instalaciones críticas. Establezca protocolos de comunicación para alertas de seguridad, tiempos de respuesta acordados, ejercicios conjuntos periódicos y compartición de información sobre amenazas. Considere la implementación de un botón de pánico conectado directamente con las fuerzas de seguridad y un sistema de comunicación redundante para emergencias.',
    priority: 'medium-term',
    estimatedEffort: '3-5 semanas para establecer convenios y protocolos',
    resources: 'Coordinación institucional, convenios con Carabineros y PDI, sistema de comunicación de emergencia, ejercicios conjuntos',
  },
  {
    id: 'REC-CIP014-05',
    cipId: 'CIP-014',
    riskLevel: 'optimal',
    title: 'Implementar sistema integral de protección perimetral inteligente',
    description:
      'Diseñar e implementar un sistema integral de protección perimetral que combine tecnologias avanzadas de detección con analítica inteligente. Incluya sensores de fibra optica perimetral, radar de corto alcance, analítica de video con inteligencia artificial para detección de personas y vehiculos, drones de vigilancia programados, y un centro de comando integrado que consolide todas las alertas de seguridad física. Implemente respuesta automatizada como iluminación activada por movimiento y comunicación por altavoz. Realice evaluaciones de efectividad semestrales.',
    priority: 'long-term',
    estimatedEffort: '16-24 semanas para diseño e implementación completa',
    resources: 'Tecnologia de protección perimetral avanzada, centro de comando, personal especializado, presupuesto de inversión significativo',
  },
];
