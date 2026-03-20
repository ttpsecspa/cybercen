import { Recommendation } from './types';

export const recommendations: Recommendation[] = [
  // ============================================================
  // CIP-002: Categorizacion de Ciber Activos BES (5 recomendaciones)
  // ============================================================
  {
    id: 'REC-CIP002-01',
    cipId: 'CIP-002',
    riskLevel: 'critical',
    title: 'Implementar inventario de ciber activos BES',
    description:
      'Desarrollar y mantener un inventario completo de todos los ciber activos BES de la organizacion. Utilice herramientas automatizadas de descubrimiento de activos en redes OT e IT. Documente para cada activo: nombre, ubicacion, funcion, propietario, sistema operativo, direccion IP y nivel de impacto asignado. Priorice la identificacion de sistemas SCADA, EMS, RTUs, PLCs, IEDs y equipos de comunicacion criticos para la operacion del sistema electrico nacional.',
    priority: 'immediate',
    estimatedEffort: '2-4 semanas para inventario inicial, mantenimiento continuo',
    resources: 'Herramientas de descubrimiento de activos OT (Nozomi, Claroty, Tenable.ot), personal de OT e IT, bases de datos de activos',
  },
  {
    id: 'REC-CIP002-02',
    cipId: 'CIP-002',
    riskLevel: 'high',
    title: 'Establecer criterios de categorizacion de impacto',
    description:
      'Definir criterios claros y documentados para la categorizacion de impacto de ciber activos BES, alineados con los requisitos del Coordinador Electrico Nacional. Los criterios deben considerar: capacidad de generacion asociada, funcion de control del sistema, impacto en la confiabilidad del SEN, y presencia en instalaciones criticas. Documente la justificacion de cada categorizacion en un formato estandarizado que facilite las auditorias.',
    priority: 'immediate',
    estimatedEffort: '1-2 semanas para definir criterios, 2-3 semanas para aplicar',
    resources: 'Normativa CEN, personal de operaciones y ciberseguridad, matrices de categorizacion',
  },
  {
    id: 'REC-CIP002-03',
    cipId: 'CIP-002',
    riskLevel: 'medium',
    title: 'Automatizar el proceso de revision periodica de categorizacion',
    description:
      'Implementar un proceso sistematico y parcialmente automatizado para la revision de la categorizacion de ciber activos BES cada 15 meses. Configure recordatorios automaticos, defina un flujo de trabajo de revision que involucre a los responsables de cada area operativa, y utilice un sistema de gestion documental que registre las revisiones, cambios y aprobaciones. Integre el proceso con la gestion de cambios de la organizacion.',
    priority: 'short-term',
    estimatedEffort: '3-4 semanas para implementar el proceso automatizado',
    resources: 'Sistema de gestion documental, herramientas de workflow, calendario de revisiones',
  },
  {
    id: 'REC-CIP002-04',
    cipId: 'CIP-002',
    riskLevel: 'low',
    title: 'Integrar inventario de activos con sistemas de gestion',
    description:
      'Integrar el inventario de ciber activos BES con los sistemas de gestion de activos empresariales (EAM) y de gestion de configuracion (CMDB). Esto permite mantener una vista unificada de los activos, facilitar las actualizaciones cuando se incorporan o retiran activos, y generar reportes automatizados para cumplimiento regulatorio. Establezca interfaces entre los sistemas de descubrimiento automatico y la base de datos central de activos.',
    priority: 'medium-term',
    estimatedEffort: '4-8 semanas para integracion completa',
    resources: 'Sistema EAM/CMDB, APIs de integracion, personal de desarrollo, licencias de software',
  },
  {
    id: 'REC-CIP002-05',
    cipId: 'CIP-002',
    riskLevel: 'optimal',
    title: 'Implementar monitoreo continuo de activos con inteligencia de amenazas',
    description:
      'Establecer un programa de monitoreo continuo que combine el inventario de ciber activos BES con fuentes de inteligencia de amenazas para identificar proactivamente riesgos. Utilice plataformas que correlacionen vulnerabilidades conocidas con los activos del inventario y generen alertas priorizadas. Realice revisiones dinamicas de categorizacion basadas en cambios en el panorama de amenazas del sector electrico chileno y latinoamericano.',
    priority: 'long-term',
    estimatedEffort: '8-12 semanas para implementacion completa',
    resources: 'Plataforma de inteligencia de amenazas, feeds de vulnerabilidades, personal de SOC/CSIRT',
  },

  // ============================================================
  // CIP-003: Controles de Gestion de Seguridad (5 recomendaciones)
  // ============================================================
  {
    id: 'REC-CIP003-01',
    cipId: 'CIP-003',
    riskLevel: 'critical',
    title: 'Desarrollar politica de ciberseguridad para el sector electrico',
    description:
      'Crear una politica de ciberseguridad integral aprobada por la alta direccion que cubra: gobernanza de seguridad, gestion de accesos, proteccion de activos criticos, respuesta a incidentes y continuidad operacional. La politica debe estar alineada con los estandares CIP del CEN, la normativa chilena de ciberseguridad (Ley Marco) y las mejores practicas internacionales. Establezca un ciclo de revision anual y un proceso de divulgacion a todo el personal.',
    priority: 'immediate',
    estimatedEffort: '3-5 semanas para desarrollo y aprobacion',
    resources: 'Asesoria legal, equipo de ciberseguridad, aprobacion de directorio, plantillas de politicas sectoriales',
  },
  {
    id: 'REC-CIP003-02',
    cipId: 'CIP-003',
    riskLevel: 'high',
    title: 'Designar lider senior de ciberseguridad con autoridad ejecutiva',
    description:
      'Designar formalmente un lider senior de ciberseguridad (CISO o equivalente) con autoridad para gestionar la proteccion de ciber activos BES. El rol debe tener acceso directo al directorio o gerencia general, presupuesto asignado para iniciativas de seguridad, y autoridad para implementar controles y tomar decisiones operativas de seguridad. Defina claramente las responsabilidades, lineas de reporte y metricas de desempeno del cargo.',
    priority: 'immediate',
    estimatedEffort: '2-4 semanas para designacion formal y definicion de rol',
    resources: 'Aprobacion de directorio, descripcion de cargo, presupuesto de seguridad, estructura organizacional',
  },
  {
    id: 'REC-CIP003-03',
    cipId: 'CIP-003',
    riskLevel: 'medium',
    title: 'Implementar programa de concientizacion trimestral',
    description:
      'Desarrollar un programa de concientizacion en ciberseguridad con actividades trimestrales dirigidas a todo el personal con acceso a ciber activos BES. Incluya simulaciones de phishing, charlas sobre amenazas actuales al sector electrico, talleres practicos sobre manejo seguro de sistemas de control, y evaluaciones de conocimiento. Personalice el contenido segun los roles: operadores de planta, ingenieros de proteccion, personal administrativo y contratistas.',
    priority: 'short-term',
    estimatedEffort: '2-3 semanas para diseno inicial, actividades trimestrales continuas',
    resources: 'Plataforma de concientizacion, material didactico, herramienta de simulacion de phishing, presupuesto de capacitacion',
  },
  {
    id: 'REC-CIP003-04',
    cipId: 'CIP-003',
    riskLevel: 'low',
    title: 'Fortalecer controles de acceso electronico para activos de bajo impacto',
    description:
      'Implementar controles de acceso electronico robustos para ciber activos BES de bajo impacto, incluyendo autenticacion obligatoria para acceso local y remoto, cifrado de sesiones remotas, y registro de accesos. Priorice la proteccion de dispositivos en subestaciones remotas y pequenas centrales de generacion. Implemente soluciones de acceso remoto seguro que no requieran conectividad permanente a Internet.',
    priority: 'medium-term',
    estimatedEffort: '4-6 semanas para implementacion por fases',
    resources: 'Soluciones de acceso remoto seguro, dispositivos de autenticacion, infraestructura de red segura',
  },
  {
    id: 'REC-CIP003-05',
    cipId: 'CIP-003',
    riskLevel: 'optimal',
    title: 'Establecer marco de gobernanza de ciberseguridad maduro',
    description:
      'Evolucionar hacia un marco de gobernanza de ciberseguridad maduro que integre la gestion de riesgos ciber con la gestion de riesgos empresariales. Implemente un comite de ciberseguridad con representacion multidisciplinaria, establezca indicadores clave de riesgo (KRI), realice revisiones trimestrales del programa de seguridad ante el directorio, y alinee la estrategia de ciberseguridad con los objetivos de negocio y la regulacion sectorial vigente.',
    priority: 'long-term',
    estimatedEffort: '12-16 semanas para establecer el marco completo',
    resources: 'Consultoria en gobernanza, herramientas GRC, participacion del directorio, benchmarking sectorial',
  },

  // ============================================================
  // CIP-004: Personal y Capacitacion (5 recomendaciones)
  // ============================================================
  {
    id: 'REC-CIP004-01',
    cipId: 'CIP-004',
    riskLevel: 'critical',
    title: 'Establecer programa obligatorio de capacitacion en ciberseguridad',
    description:
      'Implementar un programa de capacitacion obligatorio para todo el personal con acceso a ciber activos BES. El programa debe incluir modulos basicos sobre amenazas al sector electrico, procedimientos de seguridad operacional, manejo de incidentes y uso seguro de sistemas de control industrial. Ningun empleado debe obtener acceso a ciber activos BES sin completar la capacitacion inicial. Establezca evaluaciones de conocimiento con puntaje minimo aprobatorio.',
    priority: 'immediate',
    estimatedEffort: '3-4 semanas para desarrollo de contenido, implementacion continua',
    resources: 'Plataforma de e-learning, instructores especializados en ciberseguridad OT, material didactico sectorial',
  },
  {
    id: 'REC-CIP004-02',
    cipId: 'CIP-004',
    riskLevel: 'high',
    title: 'Implementar proceso de evaluacion de antecedentes',
    description:
      'Establecer un proceso formal de evaluacion de antecedentes personales para todo el personal que requiera acceso a ciber activos BES de alto y medio impacto. El proceso debe incluir verificacion de identidad, antecedentes penales a traves del Registro Civil, verificacion de empleo anterior y, cuando corresponda, evaluacion de riesgos adicionales. Defina criterios claros para aprobacion o rechazo y un proceso de apelacion.',
    priority: 'immediate',
    estimatedEffort: '2-3 semanas para establecer el proceso, aplicacion continua',
    resources: 'Servicio de verificacion de antecedentes, convenio con Registro Civil, procedimientos documentados',
  },
  {
    id: 'REC-CIP004-03',
    cipId: 'CIP-004',
    riskLevel: 'medium',
    title: 'Automatizar la gestion de accesos del ciclo de vida laboral',
    description:
      'Implementar un sistema automatizado para gestionar los accesos durante todo el ciclo de vida laboral del empleado: ingreso, cambio de rol y desvinculacion. El sistema debe integrarse con recursos humanos para revocar accesos dentro de 24 horas ante una desvinculacion y modificar accesos dentro de 30 dias ante cambios de rol. Incluya revisiones trimestrales automatizadas de las listas de acceso autorizado.',
    priority: 'short-term',
    estimatedEffort: '4-6 semanas para implementacion del sistema',
    resources: 'Sistema de gestion de identidades (IAM), integracion con RRHH, directorio activo, workflows de aprobacion',
  },
  {
    id: 'REC-CIP004-04',
    cipId: 'CIP-004',
    riskLevel: 'low',
    title: 'Desarrollar capacitacion especializada por roles operativos',
    description:
      'Crear modulos de capacitacion especializados segun los roles operativos: operadores de centro de control, ingenieros de proteccion, tecnicos de subestaciones, administradores de sistemas OT y personal de soporte remoto. Cada modulo debe abordar los riesgos especificos del rol, los controles de seguridad relevantes y los procedimientos de respuesta ante incidentes. Actualice el contenido al menos cada 15 meses.',
    priority: 'medium-term',
    estimatedEffort: '6-8 semanas para desarrollo de modulos especializados',
    resources: 'Expertos en ciberseguridad industrial, plataforma de capacitacion, validacion por areas operativas',
  },
  {
    id: 'REC-CIP004-05',
    cipId: 'CIP-004',
    riskLevel: 'optimal',
    title: 'Implementar cultura de seguridad con metricas y mejora continua',
    description:
      'Establecer un programa de cultura de seguridad que mida la efectividad de las capacitaciones mediante indicadores como tasa de clics en simulaciones de phishing, tiempo de reporte de incidentes, resultados de evaluaciones y participacion en actividades voluntarias de seguridad. Implemente un sistema de reconocimiento para empleados que demuestren practicas ejemplares de seguridad. Realice benchmarking con otras empresas del sector electrico chileno.',
    priority: 'long-term',
    estimatedEffort: '8-12 semanas para diseno e implementacion del programa',
    resources: 'Herramientas de medicion de cultura de seguridad, programa de incentivos, encuestas periodicas',
  },

  // ============================================================
  // CIP-005: Perimetros de Seguridad Electronica (5 recomendaciones)
  // ============================================================
  {
    id: 'REC-CIP005-01',
    cipId: 'CIP-005',
    riskLevel: 'critical',
    title: 'Definir e implementar perimetros de seguridad electronica',
    description:
      'Definir los perimetros de seguridad electronica (ESP) para todos los ciber activos BES de alto y medio impacto. Documente los limites de cada ESP con diagramas de red detallados, identifique todos los puntos de acceso electronico (EAP) e implemente firewalls o dispositivos de control de acceso en cada punto. Configure reglas de filtrado con politica de denegacion por defecto y permita solo el trafico estrictamente necesario para la operacion.',
    priority: 'immediate',
    estimatedEffort: '4-8 semanas dependiendo de la complejidad de la red',
    resources: 'Firewalls industriales, diagramas de red, personal de redes OT, herramientas de escaneo de red',
  },
  {
    id: 'REC-CIP005-02',
    cipId: 'CIP-005',
    riskLevel: 'high',
    title: 'Implementar autenticacion multifactor para acceso remoto',
    description:
      'Implementar autenticacion multifactor (MFA) para todas las sesiones de acceso remoto interactivo a ciber activos BES. Utilice una combinacion de al menos dos factores: contrasena, token fisico o aplicacion de autenticacion, o biometria. Cifre todas las sesiones remotas con TLS 1.2 o superior. Implemente una solucion de acceso remoto centralizada que registre todas las sesiones y permita su revocacion inmediata.',
    priority: 'immediate',
    estimatedEffort: '3-5 semanas para implementacion de MFA',
    resources: 'Solucion de MFA compatible con OT, tokens de hardware, VPN cifrada, servidor de autenticacion',
  },
  {
    id: 'REC-CIP005-03',
    cipId: 'CIP-005',
    riskLevel: 'medium',
    title: 'Desplegar sistemas de deteccion de intrusiones en puntos de acceso',
    description:
      'Implementar sistemas de deteccion de intrusiones (IDS) en todos los puntos de acceso electronico de los ESP. Configure firmas especificas para protocolos industriales (Modbus, DNP3, IEC 61850, IEC 104) y establezca lineas base de trafico normal. Las alertas deben enviarse al personal de seguridad en tiempo real. Actualice las firmas de deteccion regularmente y ajuste las reglas para minimizar falsos positivos sin comprometer la deteccion.',
    priority: 'short-term',
    estimatedEffort: '4-6 semanas para despliegue y configuracion',
    resources: 'IDS/IPS industriales (Dragos, Nozomi, Claroty), personal de seguridad OT, feeds de firmas',
  },
  {
    id: 'REC-CIP005-04',
    cipId: 'CIP-005',
    riskLevel: 'low',
    title: 'Establecer monitoreo continuo de comunicaciones de red',
    description:
      'Implementar monitoreo continuo de las comunicaciones dentro y entre los perimetros de seguridad electronica. Utilice herramientas de analisis de trafico de red que identifiquen anomalias, nuevos dispositivos, cambios en patrones de comunicacion y protocolos no autorizados. Integre el monitoreo de red con el sistema de gestion de eventos de seguridad (SIEM) para correlacion de alertas y respuesta coordinada.',
    priority: 'medium-term',
    estimatedEffort: '6-8 semanas para implementacion completa',
    resources: 'Herramientas de monitoreo de red OT, SIEM, capacidad de almacenamiento de logs, analistas de seguridad',
  },
  {
    id: 'REC-CIP005-05',
    cipId: 'CIP-005',
    riskLevel: 'optimal',
    title: 'Implementar segmentacion avanzada con microsegmentacion y zero trust',
    description:
      'Evolucionar la arquitectura de red hacia un modelo de microsegmentacion y zero trust que limite el movimiento lateral en caso de compromiso. Implemente zonas de seguridad granulares dentro de los ESP, controles de acceso basados en identidad para cada comunicacion entre activos, y verificacion continua de la postura de seguridad de los dispositivos. Considere la implementacion de un centro de operaciones de seguridad (SOC) dedicado al entorno OT.',
    priority: 'long-term',
    estimatedEffort: '12-20 semanas para implementacion por fases',
    resources: 'Arquitecto de seguridad OT, tecnologia de microsegmentacion, plataforma zero trust, SOC OT',
  },

  // ============================================================
  // CIP-006: Seguridad Fisica (5 recomendaciones)
  // ============================================================
  {
    id: 'REC-CIP006-01',
    cipId: 'CIP-006',
    riskLevel: 'critical',
    title: 'Establecer perimetros de seguridad fisica para ciber activos BES',
    description:
      'Definir e implementar perimetros de seguridad fisica (PSP) para todas las ubicaciones que contengan ciber activos BES de alto y medio impacto. Instale mecanismos de control de acceso (tarjetas de proximidad, biometria o cerraduras electronicas) en todos los puntos de entrada. Mantenga listas actualizadas de personal autorizado y asegure que solo el personal con necesidad operativa tenga acceso. Incluya centros de control, salas de servidores, gabinetes de comunicaciones y subestaciones.',
    priority: 'immediate',
    estimatedEffort: '4-8 semanas dependiendo del numero de instalaciones',
    resources: 'Sistemas de control de acceso, cerraduras electronicas, tarjetas de proximidad, instalacion y configuracion',
  },
  {
    id: 'REC-CIP006-02',
    cipId: 'CIP-006',
    riskLevel: 'high',
    title: 'Implementar programa de control de visitantes',
    description:
      'Establecer un programa formal de control de visitantes para todas las areas que contengan ciber activos BES. El programa debe incluir: registro de visitantes con identificacion, emision de credenciales temporales visibles, acompanamiento continuo por personal autorizado, registro de entrada y salida, y prohibicion de dispositivos electronicos no autorizados. Capacite al personal de seguridad y operaciones sobre los procedimientos de acompanamiento.',
    priority: 'immediate',
    estimatedEffort: '2-3 semanas para implementacion del programa',
    resources: 'Libro de registro de visitantes, credenciales temporales, senaletica, capacitacion de personal',
  },
  {
    id: 'REC-CIP006-03',
    cipId: 'CIP-006',
    riskLevel: 'medium',
    title: 'Instalar sistemas de videovigilancia y alarmas',
    description:
      'Implementar sistemas de videovigilancia (CCTV) y alarmas en todos los puntos de acceso al perimetro de seguridad fisica. Las camaras deben cubrir entradas, salidas y areas criticas con grabacion continua y retencion minima de 90 dias. Configure alarmas que generen alertas en tiempo real ante intentos de acceso no autorizado, puertas forzadas o permanencia prolongada en zonas restringidas. Integre con un centro de monitoreo 24/7.',
    priority: 'short-term',
    estimatedEffort: '4-8 semanas para instalacion y configuracion',
    resources: 'Camaras IP, sistema de grabacion NVR, alarmas, centro de monitoreo, personal de seguridad',
  },
  {
    id: 'REC-CIP006-04',
    cipId: 'CIP-006',
    riskLevel: 'low',
    title: 'Automatizar la gestion de acceso fisico con integracion de sistemas',
    description:
      'Integrar el sistema de control de acceso fisico con el sistema de gestion de identidades de la organizacion para automatizar la provision y revocacion de accesos fisicos. Cuando un empleado se desvincula o cambia de rol, el acceso fisico debe revocarse automaticamente. Implemente revisiones trimestrales automatizadas de las listas de acceso y genere reportes de cumplimiento para auditorias regulatorias.',
    priority: 'medium-term',
    estimatedEffort: '6-8 semanas para integracion de sistemas',
    resources: 'Integracion IAM-control de acceso fisico, desarrollo de interfaces, pruebas de automatizacion',
  },
  {
    id: 'REC-CIP006-05',
    cipId: 'CIP-006',
    riskLevel: 'optimal',
    title: 'Implementar seguridad fisica convergente con ciberseguridad',
    description:
      'Establecer un programa de seguridad convergente que integre la seguridad fisica y la ciberseguridad bajo una gobernanza unificada. Implemente correlacion de eventos fisicos y ciber (un acceso fisico seguido de un acceso logico debe ser validado), analitica de video con inteligencia artificial para deteccion de comportamientos anomalos, y un tablero de seguridad integrado que muestre el estado de seguridad fisica y ciber de todas las instalaciones criticas.',
    priority: 'long-term',
    estimatedEffort: '12-16 semanas para implementacion completa',
    resources: 'Plataforma PSIM, analitica de video AI, integracion SIEM-control de acceso, personal multidisciplinario',
  },

  // ============================================================
  // CIP-007: Gestion de Seguridad de Sistemas (5 recomendaciones)
  // ============================================================
  {
    id: 'REC-CIP007-01',
    cipId: 'CIP-007',
    riskLevel: 'critical',
    title: 'Realizar hardening de sistemas y deshabilitar servicios innecesarios',
    description:
      'Ejecutar un proceso de hardening en todos los ciber activos BES, deshabilitando puertos y servicios que no sean estrictamente necesarios para la operacion. Documente cada puerto y servicio habilitado con su justificacion operativa. Utilice guias de hardening del fabricante y estandares como CIS Benchmarks adaptados al entorno OT. Priorice los activos de alto impacto y los que estan expuestos en los puntos de acceso electronico.',
    priority: 'immediate',
    estimatedEffort: '3-6 semanas dependiendo del numero de activos',
    resources: 'Guias de hardening del fabricante, CIS Benchmarks, herramientas de escaneo de puertos, ventanas de mantenimiento',
  },
  {
    id: 'REC-CIP007-02',
    cipId: 'CIP-007',
    riskLevel: 'high',
    title: 'Establecer programa de gestion de parches para entornos OT',
    description:
      'Implementar un programa de gestion de parches adaptado a entornos de tecnologia operacional que evalúe los parches de seguridad dentro de 35 dias desde su publicacion. Establezca un entorno de pruebas que replique los sistemas criticos para validar parches antes de su aplicacion en produccion. Cuando un parche no pueda ser aplicado, documente planes de mitigacion con controles compensatorios como reglas de firewall adicionales, segregacion de red o monitoreo reforzado.',
    priority: 'immediate',
    estimatedEffort: '4-6 semanas para establecer el programa, ejecucion continua',
    resources: 'Entorno de pruebas OT, herramientas de distribucion de parches, coordinacion con fabricantes, ventanas de mantenimiento programadas',
  },
  {
    id: 'REC-CIP007-03',
    cipId: 'CIP-007',
    riskLevel: 'medium',
    title: 'Implementar proteccion contra codigo malicioso en entornos industriales',
    description:
      'Desplegar soluciones de prevencion de codigo malicioso apropiadas para entornos industriales en todos los ciber activos BES. Considere listas blancas de aplicaciones para sistemas con software estable, antivirus con actualizacion controlada para estaciones de trabajo, y control de dispositivos removibles (USB) en todos los equipos. Establezca procedimientos para la actualizacion segura de firmas y para el manejo de falsos positivos que podrian afectar la operacion.',
    priority: 'short-term',
    estimatedEffort: '4-6 semanas para despliegue por fases',
    resources: 'Software de lista blanca de aplicaciones, antivirus industrial, politicas de USB, procedimientos de actualizacion',
  },
  {
    id: 'REC-CIP007-04',
    cipId: 'CIP-007',
    riskLevel: 'low',
    title: 'Centralizar el monitoreo de eventos de seguridad con SIEM',
    description:
      'Implementar un sistema centralizado de gestion de eventos de seguridad (SIEM) que recopile y correlacione eventos de todos los ciber activos BES. Configure alertas para intentos de autenticacion fallidos, cambios de configuracion, instalacion de software no autorizado y actividades administrativas anomalas. Retenga los registros por al menos 90 dias y establezca procedimientos de revision diaria de alertas criticas por el equipo de seguridad.',
    priority: 'medium-term',
    estimatedEffort: '6-10 semanas para implementacion y afinamiento',
    resources: 'Plataforma SIEM, colectores de logs para protocolos OT, almacenamiento, analistas de seguridad para revision de alertas',
  },
  {
    id: 'REC-CIP007-05',
    cipId: 'CIP-007',
    riskLevel: 'optimal',
    title: 'Implementar gestion avanzada de identidades y accesos privilegiados',
    description:
      'Desplegar una solucion de gestion de accesos privilegiados (PAM) para controlar, monitorear y auditar el uso de cuentas con privilegios elevados en ciber activos BES. Implemente rotacion automatica de contrasenas de cuentas de servicio, grabacion de sesiones privilegiadas, acceso just-in-time y aprobaciones de acceso elevado. Elimine las cuentas compartidas cuando sea posible y, cuando no lo sea, implemente controles de check-out con registro individual de uso.',
    priority: 'long-term',
    estimatedEffort: '8-12 semanas para implementacion por fases',
    resources: 'Solucion PAM, integracion con directorio activo y sistemas OT, politicas de cuentas privilegiadas',
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
      'Crear un plan de respuesta a incidentes de ciberseguridad especifico para el entorno del sistema electrico. El plan debe incluir: definicion de tipos de incidentes y criterios de clasificacion por severidad, procedimientos de deteccion e identificacion, proceso de contencion y erradicacion, procedimientos de recuperacion, roles y responsabilidades del equipo de respuesta, cadena de comunicacion interna y externa, y criterios de notificacion al CEN y CSIRT sectorial. Pruebe el plan con un ejercicio de mesa inicial.',
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
      'Establecer un equipo de respuesta a incidentes de ciberseguridad (CSIRT interno) con roles claramente definidos: coordinador de incidentes, analistas de seguridad OT e IT, enlace con operaciones, enlace legal y comunicaciones. Capacite al equipo en herramientas de analisis forense, manejo de evidencia digital y coordinacion con el CSIRT del sector electrico chileno. Asegure disponibilidad 24/7 mediante un sistema de guardias rotativas y listas de contacto actualizadas.',
    priority: 'immediate',
    estimatedEffort: '4-6 semanas para conformacion y capacitacion inicial',
    resources: 'Personal multidisciplinario, capacitacion en respuesta a incidentes OT, herramientas forenses, sistema de guardias',
  },
  {
    id: 'REC-CIP008-03',
    cipId: 'CIP-008',
    riskLevel: 'medium',
    title: 'Realizar ejercicios de simulacion de incidentes anuales',
    description:
      'Planificar y ejecutar ejercicios de simulacion de incidentes de ciberseguridad al menos una vez al ano. Incluya ejercicios de mesa (tabletop) para validar procedimientos y toma de decisiones, y ejercicios funcionales que prueben la capacidad tecnica de respuesta. Los escenarios deben ser relevantes para el sector electrico: ransomware en sistemas SCADA, compromiso de acceso remoto de proveedor, ataque a subestacion, manipulacion de datos de medicion. Documente lecciones aprendidas y actualice el plan.',
    priority: 'short-term',
    estimatedEffort: '2-3 semanas por ejercicio, planificacion anual',
    resources: 'Facilitador de ejercicios, escenarios de simulacion, participacion de areas operativas, sala de crisis',
  },
  {
    id: 'REC-CIP008-04',
    cipId: 'CIP-008',
    riskLevel: 'low',
    title: 'Establecer canales formales de notificacion al CEN y CSIRT sectorial',
    description:
      'Documentar y probar los canales de comunicacion con el Coordinador Electrico Nacional y el CSIRT del sector electrico para la notificacion de incidentes. Defina los criterios de incidentes reportables, los plazos de notificacion (dentro de una hora para incidentes criticos), los formatos de reporte y los contactos principales y alternativos. Realice pruebas periodicas de los canales de comunicacion para asegurar su disponibilidad y la correcta recepcion de notificaciones.',
    priority: 'medium-term',
    estimatedEffort: '2-3 semanas para establecer canales y procedimientos',
    resources: 'Contactos del CEN y CSIRT sectorial, formatos de reporte, sistema de comunicacion redundante',
  },
  {
    id: 'REC-CIP008-05',
    cipId: 'CIP-008',
    riskLevel: 'optimal',
    title: 'Implementar capacidad avanzada de deteccion y respuesta automatizada',
    description:
      'Evolucionar la capacidad de respuesta a incidentes mediante la implementacion de tecnologias de deteccion y respuesta automatizada (SOAR) integradas con el SIEM y las herramientas de monitoreo OT. Defina playbooks automatizados para los tipos de incidentes mas comunes, implemente threat hunting proactivo en el entorno OT, y establezca integracion con fuentes de inteligencia de amenazas especificas del sector electrico. Participe en ejercicios conjuntos con otras empresas del sector y el CSIRT nacional.',
    priority: 'long-term',
    estimatedEffort: '12-16 semanas para implementacion completa',
    resources: 'Plataforma SOAR, inteligencia de amenazas sectorial, analistas de threat hunting, participacion en ejercicios sectoriales',
  },

  // ============================================================
  // CIP-009: Planes de Recuperacion (5 recomendaciones)
  // ============================================================
  {
    id: 'REC-CIP009-01',
    cipId: 'CIP-009',
    riskLevel: 'critical',
    title: 'Documentar planes de recuperacion para ciber activos BES criticos',
    description:
      'Desarrollar planes de recuperacion detallados para cada ciber activo BES critico. Cada plan debe incluir: condiciones de activacion, procedimientos de restauracion paso a paso, datos de contacto del personal clave, objetivos de tiempo de recuperacion (RTO) y punto de recuperacion (RPO), recursos necesarios (hardware de repuesto, medios de respaldo, licencias) y procedimientos de verificacion post-recuperacion. Priorice los activos que soportan funciones de control en tiempo real del sistema electrico.',
    priority: 'immediate',
    estimatedEffort: '4-6 semanas para documentacion de planes',
    resources: 'Personal de OT e IT, documentacion tecnica de sistemas, requisitos operacionales, plantillas de planes de recuperacion',
  },
  {
    id: 'REC-CIP009-02',
    cipId: 'CIP-009',
    riskLevel: 'high',
    title: 'Implementar programa de respaldos verificados',
    description:
      'Establecer un programa de respaldos que incluya datos de configuracion, imagenes de sistema, datos operativos y configuraciones de seguridad de todos los ciber activos BES. Los respaldos deben almacenarse en ubicaciones seguras separadas de los sistemas de produccion, con proteccion contra acceso no autorizado. Programe verificaciones periodicas de restauracion para confirmar que los respaldos son utilizables. Implemente respaldos incrementales diarios y completos semanales como minimo.',
    priority: 'immediate',
    estimatedEffort: '3-5 semanas para implementar programa de respaldos',
    resources: 'Infraestructura de respaldo, medios de almacenamiento, ubicacion de almacenamiento externo, herramientas de respaldo OT',
  },
  {
    id: 'REC-CIP009-03',
    cipId: 'CIP-009',
    riskLevel: 'medium',
    title: 'Realizar ejercicios de recuperacion cada 15 meses',
    description:
      'Planificar y ejecutar ejercicios de recuperacion al menos cada 15 meses para cada plan documentado. Los ejercicios deben simular escenarios realistas como falla de hardware, compromiso por ransomware, corrupcion de datos de configuracion y perdida de conectividad de centro de control. Mida los tiempos reales de recuperacion contra los RTO definidos y documente las deficiencias encontradas. Actualice los planes basandose en las lecciones aprendidas de cada ejercicio.',
    priority: 'short-term',
    estimatedEffort: '1-2 semanas por ejercicio, planificacion periodica',
    resources: 'Entorno de pruebas de recuperacion, coordinacion con operaciones, documentacion de resultados',
  },
  {
    id: 'REC-CIP009-04',
    cipId: 'CIP-009',
    riskLevel: 'low',
    title: 'Mantener inventario de hardware de repuesto critico',
    description:
      'Identificar y mantener disponible el hardware de repuesto necesario para la recuperacion de ciber activos BES criticos. El inventario debe incluir componentes cuyo tiempo de adquisicion exceda los RTO definidos: servidores de control, tarjetas de comunicacion, switches industriales, fuentes de poder y discos de almacenamiento. Establezca acuerdos con fabricantes para tiempos de entrega garantizados y considere mantener repuestos en ubicaciones estrategicas cercanas a las instalaciones criticas.',
    priority: 'medium-term',
    estimatedEffort: '4-6 semanas para identificar necesidades y adquirir repuestos',
    resources: 'Presupuesto para repuestos, acuerdos con proveedores, espacio de almacenamiento seguro, inventario actualizado',
  },
  {
    id: 'REC-CIP009-05',
    cipId: 'CIP-009',
    riskLevel: 'optimal',
    title: 'Implementar recuperacion automatizada con infraestructura redundante',
    description:
      'Disenar e implementar infraestructura redundante para los ciber activos BES mas criticos, con capacidad de conmutacion automatica (failover) y recuperacion orquestada. Implemente centros de control de respaldo con sincronizacion en tiempo real, replicas de servidores criticos y procedimientos de conmutacion probados. Establezca objetivos de RTO menores a 4 horas para funciones de control en tiempo real y pruebe la conmutacion automatica trimestralmente.',
    priority: 'long-term',
    estimatedEffort: '16-24 semanas para diseno e implementacion de redundancia',
    resources: 'Infraestructura redundante, centro de control de respaldo, enlaces de comunicacion redundantes, licencias duplicadas',
  },

  // ============================================================
  // CIP-010: Gestion de Cambios y Vulnerabilidades (5 recomendaciones)
  // ============================================================
  {
    id: 'REC-CIP010-01',
    cipId: 'CIP-010',
    riskLevel: 'critical',
    title: 'Documentar configuracion base de todos los ciber activos BES',
    description:
      'Crear y mantener un registro de configuracion base para cada ciber activo BES que incluya: sistema operativo con version y nivel de parche, puertos y servicios logicos habilitados con justificacion, software instalado con versiones, cuentas de usuario configuradas y parametros de seguridad. Utilice herramientas automatizadas para capturar la configuracion inicial y establezca un proceso para actualizar la documentacion cada vez que se realice un cambio autorizado.',
    priority: 'immediate',
    estimatedEffort: '3-5 semanas para documentacion inicial',
    resources: 'Herramientas de captura de configuracion, base de datos de configuracion (CMDB), personal tecnico OT',
  },
  {
    id: 'REC-CIP010-02',
    cipId: 'CIP-010',
    riskLevel: 'high',
    title: 'Implementar proceso formal de gestion de cambios',
    description:
      'Establecer un proceso de gestion de cambios que incluya: solicitud formal de cambio, evaluacion de impacto de seguridad, aprobacion por el responsable de ciberseguridad, pruebas en entorno no productivo cuando sea posible, implementacion controlada con plan de rollback, actualizacion de la configuracion base y verificacion post-cambio. Defina categorias de cambios (estandar, normal, emergencia) con niveles de aprobacion apropiados para cada una.',
    priority: 'immediate',
    estimatedEffort: '3-4 semanas para disenar e implementar el proceso',
    resources: 'Herramienta de gestion de cambios (ITSM), formularios de solicitud, comite de cambios, procedimientos documentados',
  },
  {
    id: 'REC-CIP010-03',
    cipId: 'CIP-010',
    riskLevel: 'medium',
    title: 'Implementar monitoreo automatizado de cambios de configuracion',
    description:
      'Desplegar herramientas de monitoreo que detecten automaticamente cambios en la configuracion de los ciber activos BES y alerten cuando se produzcan modificaciones no autorizadas. Configure comparaciones periodicas (al menos cada 35 dias) con la configuracion base documentada. Las alertas de cambios no autorizados deben generar investigaciones inmediatas por el equipo de seguridad. Integre el monitoreo con el SIEM para correlacion con otros eventos de seguridad.',
    priority: 'short-term',
    estimatedEffort: '4-6 semanas para implementacion de monitoreo',
    resources: 'Herramientas de monitoreo de integridad de archivos (FIM), integracion con SIEM, personal de seguridad',
  },
  {
    id: 'REC-CIP010-04',
    cipId: 'CIP-010',
    riskLevel: 'low',
    title: 'Establecer programa de evaluacion de vulnerabilidades periodico',
    description:
      'Implementar un programa de evaluacion de vulnerabilidades que analice los ciber activos BES al menos cada 15 meses. Utilice herramientas de escaneo compatibles con entornos industriales y protocolos OT. Priorice las vulnerabilidades segun su severidad (CVSS) y su relevancia para el entorno operativo. Documente planes de remediacion con plazos definidos y controles compensatorios para vulnerabilidades que no puedan ser remediadas inmediatamente.',
    priority: 'medium-term',
    estimatedEffort: '2-3 semanas por ciclo de evaluacion',
    resources: 'Herramientas de escaneo de vulnerabilidades OT, base de datos de vulnerabilidades, coordinacion con fabricantes',
  },
  {
    id: 'REC-CIP010-05',
    cipId: 'CIP-010',
    riskLevel: 'optimal',
    title: 'Implementar gestion continua de vulnerabilidades con priorizacion basada en riesgo',
    description:
      'Evolucionar hacia un programa de gestion continua de vulnerabilidades que combine escaneo automatizado, inteligencia de amenazas y priorizacion basada en riesgo operativo. Implemente un proceso que considere no solo la severidad tecnica de la vulnerabilidad sino tambien la criticidad del activo afectado, la exposicion de red y la disponibilidad de exploits activos. Establezca SLAs de remediacion diferenciados segun el nivel de riesgo y genere metricas de desempeno del programa.',
    priority: 'long-term',
    estimatedEffort: '8-12 semanas para implementacion del programa avanzado',
    resources: 'Plataforma de gestion de vulnerabilidades, inteligencia de amenazas, integracion con CMDB y gestion de riesgos',
  },

  // ============================================================
  // CIP-011: Proteccion de Informacion (5 recomendaciones)
  // ============================================================
  {
    id: 'REC-CIP011-01',
    cipId: 'CIP-011',
    riskLevel: 'critical',
    title: 'Clasificar y proteger la informacion sensible de ciber activos BES',
    description:
      'Implementar un esquema de clasificacion de informacion que identifique los datos sensibles asociados a ciber activos BES: diagramas de red, configuraciones de seguridad, credenciales, procedimientos operativos, datos de vulnerabilidades y evaluaciones de riesgo. Establezca controles de proteccion para cada nivel de clasificacion, incluyendo restricciones de acceso, cifrado de almacenamiento, marcado de documentos y restricciones de distribucion. Capacite al personal sobre los procedimientos de manejo de informacion sensible.',
    priority: 'immediate',
    estimatedEffort: '3-4 semanas para establecer el esquema y controles iniciales',
    resources: 'Politica de clasificacion de informacion, herramientas de cifrado, sistema de gestion documental con control de acceso',
  },
  {
    id: 'REC-CIP011-02',
    cipId: 'CIP-011',
    riskLevel: 'high',
    title: 'Implementar cifrado para informacion en transito y almacenamiento',
    description:
      'Implementar cifrado para toda la informacion sensible de ciber activos BES tanto en almacenamiento como en transmision. Utilice cifrado de disco completo o cifrado de archivos para datos almacenados, y protocolos cifrados (TLS 1.2+, SSH, VPN IPSec) para datos en transito. Gestione las claves de cifrado de manera segura con rotacion periodica. Priorice la proteccion de diagramas de red, configuraciones de seguridad, credenciales y datos de vulnerabilidades.',
    priority: 'immediate',
    estimatedEffort: '3-5 semanas para implementacion de cifrado',
    resources: 'Soluciones de cifrado, gestion de claves, certificados digitales, infraestructura PKI',
  },
  {
    id: 'REC-CIP011-03',
    cipId: 'CIP-011',
    riskLevel: 'medium',
    title: 'Establecer procedimientos de destruccion segura de medios',
    description:
      'Documentar e implementar procedimientos de destruccion segura de informacion para medios que contienen datos de ciber activos BES. Los procedimientos deben especificar metodos aceptables segun el tipo de medio: borrado seguro (NIST SP 800-88) para medios reutilizables, desmagnetizacion para cintas, y destruccion fisica para medios danados o al final de su vida util. Mantenga registros de cada destruccion con descripcion del medio, metodo utilizado, fecha y responsable.',
    priority: 'short-term',
    estimatedEffort: '2-3 semanas para documentar e implementar procedimientos',
    resources: 'Herramientas de borrado seguro certificadas, trituradora de medios, registro de destruccion, proveedor de destruccion certificado',
  },
  {
    id: 'REC-CIP011-04',
    cipId: 'CIP-011',
    riskLevel: 'low',
    title: 'Implementar control de distribucion de informacion sensible',
    description:
      'Establecer un sistema de control de distribucion que rastree quien recibe informacion sensible de ciber activos BES. Implemente marcas de agua digitales en documentos sensibles, utilice sistemas de gestion de derechos digitales (DRM) cuando sea apropiado, y mantenga un registro de distribucion. Restrinja la impresion y copia de documentos sensibles. Cuando se comparta informacion con terceros (reguladores, proveedores), utilice acuerdos de confidencialidad y canales de transmision seguros.',
    priority: 'medium-term',
    estimatedEffort: '4-6 semanas para implementacion de controles',
    resources: 'Sistema DRM, herramientas de marcas de agua, acuerdos de confidencialidad, canales seguros de transferencia',
  },
  {
    id: 'REC-CIP011-05',
    cipId: 'CIP-011',
    riskLevel: 'optimal',
    title: 'Implementar prevencion de fuga de datos (DLP) integral',
    description:
      'Implementar una solucion de prevencion de fuga de datos (DLP) que monitoree y controle el flujo de informacion sensible de ciber activos BES en endpoints, red y nube. Configure politicas que detecten y bloqueen la transmision no autorizada de diagramas de red, configuraciones de seguridad, credenciales y otros datos clasificados. Integre con el SIEM para alertas y con el programa de concientizacion para educacion basada en incidentes reales de fuga de informacion.',
    priority: 'long-term',
    estimatedEffort: '8-12 semanas para implementacion por fases',
    resources: 'Solucion DLP, clasificacion automatizada de datos, integracion con infraestructura de seguridad existente',
  },

  // ============================================================
  // CIP-013: Gestion de Riesgo Cadena Suministro (5 recomendaciones)
  // ============================================================
  {
    id: 'REC-CIP013-01',
    cipId: 'CIP-013',
    riskLevel: 'critical',
    title: 'Desarrollar plan de gestion de riesgo de cadena de suministro',
    description:
      'Crear un plan documentado de gestion de riesgo de cadena de suministro para ciber activos BES que aborde: evaluacion de riesgos de proveedores antes de la adquisicion, verificacion de integridad de software y hardware, gestion de acceso remoto de proveedores, requisitos contractuales de ciberseguridad, y procedimientos de notificacion de incidentes y vulnerabilidades. El plan debe aplicarse a todos los proveedores de ciber activos BES de alto y medio impacto y revisarse al menos cada 15 meses.',
    priority: 'immediate',
    estimatedEffort: '4-6 semanas para desarrollo del plan',
    resources: 'Equipo de ciberseguridad, area de adquisiciones, asesoria legal, criterios de evaluacion de proveedores',
  },
  {
    id: 'REC-CIP013-02',
    cipId: 'CIP-013',
    riskLevel: 'high',
    title: 'Incluir requisitos de ciberseguridad en contratos con proveedores',
    description:
      'Incorporar clausulas obligatorias de ciberseguridad en todos los contratos con proveedores de ciber activos BES. Las clausulas deben incluir: notificacion de vulnerabilidades conocidas dentro de plazos definidos, provision de actualizaciones de seguridad durante la vida util del producto, control y monitoreo de acceso remoto, verificacion de integridad de actualizaciones, derecho a auditoria de seguridad, y requisitos de respuesta ante incidentes que afecten los productos suministrados. Coordine con el area legal para redactar clausulas exigibles.',
    priority: 'immediate',
    estimatedEffort: '3-4 semanas para desarrollo de clausulas contractuales',
    resources: 'Asesoria legal, modelos de clausulas de ciberseguridad, coordinacion con area de adquisiciones',
  },
  {
    id: 'REC-CIP013-03',
    cipId: 'CIP-013',
    riskLevel: 'medium',
    title: 'Implementar verificacion de integridad de software y firmware',
    description:
      'Establecer un proceso de verificacion de integridad para todo el software y firmware antes de su instalacion en ciber activos BES. El proceso debe incluir: descarga exclusiva desde fuentes oficiales del fabricante, verificacion de hashes (SHA-256 o superior), validacion de firmas digitales, escaneo de malware previo a la instalacion, y documentacion de la cadena de custodia del software. Priorice la verificacion en actualizaciones de firmware de dispositivos de proteccion y control.',
    priority: 'short-term',
    estimatedEffort: '2-3 semanas para establecer el proceso',
    resources: 'Herramientas de verificacion de hashes, repositorio seguro de software, procedimientos documentados',
  },
  {
    id: 'REC-CIP013-04',
    cipId: 'CIP-013',
    riskLevel: 'low',
    title: 'Evaluar y monitorear riesgos de proveedores de manera continua',
    description:
      'Implementar un programa de evaluacion continua de riesgos de proveedores de ciber activos BES que incluya: evaluacion inicial de seguridad antes de la contratacion, revisiones periodicas de las practicas de seguridad del proveedor, monitoreo de vulnerabilidades en productos del proveedor, verificacion de capacidad de soporte a largo plazo y evaluacion de estabilidad financiera. Mantenga un inventario de proveedores criticos con su evaluacion de riesgo actualizada y planes de contingencia para proveedores de alto riesgo.',
    priority: 'medium-term',
    estimatedEffort: '4-6 semanas para establecer el programa de evaluacion',
    resources: 'Cuestionarios de evaluacion de proveedores, herramientas de monitoreo de riesgos, coordinacion con area de compras',
  },
  {
    id: 'REC-CIP013-05',
    cipId: 'CIP-013',
    riskLevel: 'optimal',
    title: 'Implementar programa maduro de gestion de riesgo de terceros',
    description:
      'Evolucionar hacia un programa integral de gestion de riesgo de terceros que cubra todo el ciclo de vida de la relacion con proveedores. Implemente evaluaciones de seguridad basadas en marcos reconocidos (ISO 27001, SOC 2), auditorias periodicas a proveedores criticos, monitoreo continuo de la postura de seguridad del proveedor mediante plataformas especializadas, y participacion en iniciativas sectoriales de comparticion de informacion sobre riesgos de cadena de suministro en el sector electrico chileno.',
    priority: 'long-term',
    estimatedEffort: '10-14 semanas para implementacion del programa avanzado',
    resources: 'Plataforma de gestion de riesgo de terceros, auditorias de proveedores, participacion en foros sectoriales',
  },

  // ============================================================
  // CIP-014: Seguridad Fisica Infraestructura Critica (5 recomendaciones)
  // ============================================================
  {
    id: 'REC-CIP014-01',
    cipId: 'CIP-014',
    riskLevel: 'critical',
    title: 'Realizar evaluacion de riesgo de seguridad fisica de instalaciones criticas',
    description:
      'Ejecutar una evaluacion de riesgo de seguridad fisica completa para todas las instalaciones de transmision e infraestructura critica. La evaluacion debe identificar: instalaciones cuya perdida podria causar inestabilidad en el SEN, amenazas fisicas relevantes (sabotaje, vandalismo, terrorismo, desastres naturales), vulnerabilidades de cada instalacion (accesibilidad, visibilidad, aislamiento), y el impacto potencial de cada escenario de amenaza. Priorice las subestaciones de alta tension, centros de control y centrales de generacion criticas.',
    priority: 'immediate',
    estimatedEffort: '4-8 semanas dependiendo del numero de instalaciones',
    resources: 'Consultores de seguridad fisica, analisis de impacto operacional, informacion de amenazas locales, mapas de instalaciones',
  },
  {
    id: 'REC-CIP014-02',
    cipId: 'CIP-014',
    riskLevel: 'high',
    title: 'Obtener evaluacion de terceros independiente',
    description:
      'Contratar una evaluacion de seguridad fisica por un tercero independiente calificado que no haya participado en la evaluacion inicial. El tercero debe validar la identificacion de instalaciones criticas, evaluar la calidad de la evaluacion de riesgo, revisar las medidas de seguridad propuestas y proporcionar recomendaciones adicionales. Seleccione una empresa con experiencia en seguridad de infraestructura critica del sector electrico y con conocimiento del contexto de seguridad chileno.',
    priority: 'immediate',
    estimatedEffort: '4-6 semanas para seleccion del tercero y ejecucion de la evaluacion',
    resources: 'Presupuesto para consultoria externa, criterios de seleccion de tercero, acceso a instalaciones para evaluacion',
  },
  {
    id: 'REC-CIP014-03',
    cipId: 'CIP-014',
    riskLevel: 'medium',
    title: 'Implementar plan de seguridad fisica basado en evaluacion de riesgo',
    description:
      'Desarrollar e implementar un plan de seguridad fisica que aborde las amenazas y vulnerabilidades identificadas en la evaluacion de riesgo. El plan debe incluir: mejoras a barreras fisicas (cercas reforzadas, muros anti-vehiculares), sistemas de vigilancia (CCTV con analitica de video), iluminacion perimetral de seguridad, sensores de deteccion de intrusion, control de acceso vehicular y peatonal, y procedimientos de patrullaje. Coordine la implementacion con las operaciones para no afectar la disponibilidad de las instalaciones.',
    priority: 'short-term',
    estimatedEffort: '8-16 semanas para implementacion por fases',
    resources: 'Presupuesto de seguridad fisica, contratistas de construccion e instalacion, equipos de seguridad, permisos municipales',
  },
  {
    id: 'REC-CIP014-04',
    cipId: 'CIP-014',
    riskLevel: 'low',
    title: 'Establecer coordinacion con fuerzas de seguridad y respuesta rapida',
    description:
      'Formalizar la coordinacion con Carabineros de Chile, PDI y otras fuerzas de seguridad relevantes para la proteccion de instalaciones criticas. Establezca protocolos de comunicacion para alertas de seguridad, tiempos de respuesta acordados, ejercicios conjuntos periodicos y comparticion de informacion sobre amenazas. Considere la implementacion de un boton de panico conectado directamente con las fuerzas de seguridad y un sistema de comunicacion redundante para emergencias.',
    priority: 'medium-term',
    estimatedEffort: '3-5 semanas para establecer convenios y protocolos',
    resources: 'Coordinacion institucional, convenios con Carabineros y PDI, sistema de comunicacion de emergencia, ejercicios conjuntos',
  },
  {
    id: 'REC-CIP014-05',
    cipId: 'CIP-014',
    riskLevel: 'optimal',
    title: 'Implementar sistema integral de proteccion perimetral inteligente',
    description:
      'Disenar e implementar un sistema integral de proteccion perimetral que combine tecnologias avanzadas de deteccion con analitica inteligente. Incluya sensores de fibra optica perimetral, radar de corto alcance, analitica de video con inteligencia artificial para deteccion de personas y vehiculos, drones de vigilancia programados, y un centro de comando integrado que consolide todas las alertas de seguridad fisica. Implemente respuesta automatizada como iluminacion activada por movimiento y comunicacion por altavoz. Realice evaluaciones de efectividad semestrales.',
    priority: 'long-term',
    estimatedEffort: '16-24 semanas para diseno e implementacion completa',
    resources: 'Tecnologia de proteccion perimetral avanzada, centro de comando, personal especializado, presupuesto de inversion significativo',
  },
];
