import { Question } from './types';

export const questions: Question[] = [
  // ============================================================
  // CIP-002: Categorizacion de Ciber Activos BES (10 preguntas)
  // ============================================================
  {
    id: 'CIP002-Q01',
    cipId: 'CIP-002',
    requirementId: 'R1',
    text: '¿Tiene un inventario actualizado de todos los ciber activos BES de su organizacion?',
    helpText:
      'El inventario debe incluir todos los sistemas de control industrial, servidores, estaciones de trabajo, dispositivos de red y equipos de comunicacion que soportan la operacion del sistema electrico.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP002-Q02',
    cipId: 'CIP-002',
    requirementId: 'R1',
    text: '¿Cada ciber activo BES tiene asignado un nivel de impacto (alto, medio o bajo) debidamente documentado?',
    helpText:
      'La categorizacion debe basarse en los criterios del CEN y considerar el impacto potencial en la confiabilidad del sistema electrico nacional.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP002-Q03',
    cipId: 'CIP-002',
    requirementId: 'R1',
    text: '¿Existe documentacion que justifique la categorizacion de impacto de cada ciber activo BES?',
    helpText:
      'La justificacion debe explicar por que se asigno cada nivel de impacto, considerando factores como capacidad de generacion, puntos de entrega criticos y funciones de control del sistema.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP002-Q04',
    cipId: 'CIP-002',
    requirementId: 'R1',
    text: '¿Se han identificado los ciber activos asociados a los centros de control que realizan funciones de operacion en tiempo real?',
    helpText:
      'Incluye sistemas SCADA, EMS, sistemas de gestion de generacion y cualquier sistema que supervise o controle la operacion del sistema electrico en tiempo real.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP002-Q05',
    cipId: 'CIP-002',
    requirementId: 'R1',
    text: '¿Se incluyen en el inventario los dispositivos de proteccion y control de subestaciones?',
    helpText:
      'Considere reles de proteccion digitales, controladores de bahia, RTUs, switches de comunicacion y cualquier dispositivo programable en las subestaciones.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['transmission', 'distribution'],
  },
  {
    id: 'CIP002-Q06',
    cipId: 'CIP-002',
    requirementId: 'R2',
    text: '¿Se realiza una revision de la categorizacion de ciber activos BES al menos cada 15 meses?',
    helpText:
      'La revision periodica asegura que los cambios en la infraestructura o en las condiciones operativas se reflejen en la categorizacion de activos.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP002-Q07',
    cipId: 'CIP-002',
    requirementId: 'R2',
    text: '¿Existe un proceso formal para actualizar la categorizacion cuando se incorporan nuevos ciber activos?',
    helpText:
      'Debe existir un procedimiento documentado que se active cada vez que se instale, reemplace o modifique significativamente un ciber activo BES.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP002-Q08',
    cipId: 'CIP-002',
    requirementId: 'R2',
    text: '¿Se actualizan las categorizaciones cuando ocurren cambios significativos en la configuracion del sistema electrico?',
    helpText:
      'Cambios significativos incluyen nuevas interconexiones, retiro de unidades generadoras, modificacion de esquemas de proteccion y cambios en la topologia de la red.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP002-Q09',
    cipId: 'CIP-002',
    requirementId: 'R1',
    text: '¿Se han identificado los sistemas de comunicacion criticos que conectan los ciber activos BES?',
    helpText:
      'Incluye redes de comunicacion SCADA, enlaces de teleproteccion, redes corporativas con acceso a sistemas de control y canales de comunicacion de voz operativa.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP002-Q10',
    cipId: 'CIP-002',
    requirementId: 'R1',
    text: '¿El inventario de ciber activos BES es accesible y comprensible para el personal responsable de ciberseguridad?',
    helpText:
      'El inventario debe estar en un formato que permita consultas, actualizaciones y generacion de reportes de manera eficiente.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },

  // ============================================================
  // CIP-003: Controles de Gestion de Seguridad (10 preguntas)
  // ============================================================
  {
    id: 'CIP003-Q01',
    cipId: 'CIP-003',
    requirementId: 'R1',
    text: '¿Existe una politica de ciberseguridad documentada y aprobada por la alta direccion?',
    helpText:
      'La politica debe definir el compromiso de la organizacion con la ciberseguridad, el alcance, los roles y responsabilidades, y las directrices generales de proteccion.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP003-Q02',
    cipId: 'CIP-003',
    requirementId: 'R1',
    text: '¿La politica de ciberseguridad se revisa y actualiza al menos una vez al ano?',
    helpText:
      'La revision debe considerar cambios en la regulacion, nuevas amenazas, lecciones aprendidas de incidentes y cambios organizacionales.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP003-Q03',
    cipId: 'CIP-003',
    requirementId: 'R2',
    text: '¿Se ha designado un lider senior de ciberseguridad con autoridad para gestionar la proteccion de ciber activos BES?',
    helpText:
      'El lider debe tener la autoridad organizacional suficiente para implementar politicas, asignar recursos y tomar decisiones sobre la gestion de riesgos de ciberseguridad.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP003-Q04',
    cipId: 'CIP-003',
    requirementId: 'R2',
    text: '¿El lider de ciberseguridad tiene acceso directo a la alta direccion para reportar riesgos y necesidades?',
    helpText:
      'Es fundamental que exista una linea de comunicacion directa entre el responsable de ciberseguridad y la gerencia general o directorio de la empresa.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP003-Q05',
    cipId: 'CIP-003',
    requirementId: 'R3',
    text: '¿Existe un programa de concientizacion en ciberseguridad para todo el personal con acceso a ciber activos BES?',
    helpText:
      'El programa debe incluir temas como phishing, gestion de contrasenas, manejo de informacion sensible y reporte de incidentes sospechosos.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP003-Q06',
    cipId: 'CIP-003',
    requirementId: 'R3',
    text: '¿Se realizan actividades de concientizacion al menos trimestralmente?',
    helpText:
      'Las actividades pueden incluir correos informativos, charlas, simulaciones de phishing, posters y otros materiales educativos.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP003-Q07',
    cipId: 'CIP-003',
    requirementId: 'R4',
    text: '¿Se han implementado controles de acceso electronico para ciber activos de bajo impacto?',
    helpText:
      'Los controles deben incluir autenticacion, restriccion de acceso basada en roles y proteccion de sesiones remotas.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP003-Q08',
    cipId: 'CIP-003',
    requirementId: 'R4',
    text: '¿Se requiere autenticacion para el acceso remoto a ciber activos de bajo impacto?',
    helpText:
      'Todo acceso remoto debe requerir autenticacion y estar protegido mediante cifrado de las comunicaciones.',
    applicableImpactLevels: ['low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP003-Q09',
    cipId: 'CIP-003',
    requirementId: 'R1',
    text: '¿La politica de ciberseguridad incluye lineamientos especificos para la gestion de acceso remoto?',
    helpText:
      'Debe definir los metodos autorizados de acceso remoto, los niveles de autenticacion requeridos y las condiciones bajo las cuales se permite el acceso remoto.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP003-Q10',
    cipId: 'CIP-003',
    requirementId: 'R1',
    text: '¿La politica de ciberseguridad aborda la gestion de incidentes y la continuidad operacional?',
    helpText:
      'La politica debe incluir directrices generales sobre como la organizacion gestionara incidentes de ciberseguridad y mantendra la continuidad de las operaciones criticas.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },

  // ============================================================
  // CIP-004: Personal y Capacitacion (10 preguntas)
  // ============================================================
  {
    id: 'CIP004-Q01',
    cipId: 'CIP-004',
    requirementId: 'R1',
    text: '¿Existe un programa formal de concientizacion de seguridad que se refuerce al menos trimestralmente?',
    helpText:
      'El programa debe cubrir las amenazas actuales, las politicas de la organizacion y las mejores practicas de ciberseguridad relevantes para el sector electrico.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP004-Q02',
    cipId: 'CIP-004',
    requirementId: 'R1',
    text: '¿Se mantienen registros de la participacion del personal en las actividades de concientizacion?',
    helpText:
      'Los registros deben incluir fecha, participantes, temas cubiertos y evidencia de participacion como listas de asistencia o registros electronicos.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP004-Q03',
    cipId: 'CIP-004',
    requirementId: 'R2',
    text: '¿Se proporciona capacitacion en ciberseguridad basada en roles antes de otorgar acceso a ciber activos BES?',
    helpText:
      'La capacitacion debe ser especifica para las funciones que el personal desempenara y cubrir los riesgos y controles asociados a su rol.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP004-Q04',
    cipId: 'CIP-004',
    requirementId: 'R2',
    text: '¿Se actualiza la capacitacion en ciberseguridad al menos cada 15 meses para todo el personal autorizado?',
    helpText:
      'La capacitacion debe actualizarse para reflejar nuevas amenazas, cambios en la infraestructura y lecciones aprendidas de incidentes.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP004-Q05',
    cipId: 'CIP-004',
    requirementId: 'R3',
    text: '¿Se realizan evaluaciones de antecedentes personales antes de otorgar acceso autorizado a ciber activos BES?',
    helpText:
      'Las evaluaciones deben incluir verificacion de identidad, antecedentes penales y, cuando corresponda, verificacion de empleo anterior.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP004-Q06',
    cipId: 'CIP-004',
    requirementId: 'R3',
    text: '¿Se actualizan las evaluaciones de antecedentes personales al menos cada 7 anos?',
    helpText:
      'Las evaluaciones periodicas aseguran que el personal autorizado continua cumpliendo con los requisitos de confiabilidad de la organizacion.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP004-Q07',
    cipId: 'CIP-004',
    requirementId: 'R4',
    text: '¿Se revoca el acceso autorizado dentro de 24 horas cuando un empleado deja la organizacion?',
    helpText:
      'El proceso de revocacion debe incluir acceso electronico, acceso fisico y devolucion de credenciales, tokens y equipos asignados.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP004-Q08',
    cipId: 'CIP-004',
    requirementId: 'R4',
    text: '¿Existe un procedimiento para modificar los accesos cuando un empleado cambia de rol dentro de la organizacion?',
    helpText:
      'El procedimiento debe asegurar que los accesos se ajusten al nuevo rol dentro de 30 dias, eliminando accesos innecesarios y otorgando los nuevos que correspondan.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP004-Q09',
    cipId: 'CIP-004',
    requirementId: 'R4',
    text: '¿Se realiza una revision trimestral de las listas de acceso autorizado a ciber activos BES?',
    helpText:
      'La revision debe verificar que cada persona con acceso autorizado tiene una necesidad operativa vigente y que su capacitacion y evaluacion de antecedentes estan al dia.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP004-Q10',
    cipId: 'CIP-004',
    requirementId: 'R2',
    text: '¿La capacitacion incluye procedimientos de respuesta ante incidentes de ciberseguridad?',
    helpText:
      'El personal debe saber como identificar, reportar y responder inicialmente ante un posible incidente de ciberseguridad en su area de responsabilidad.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },

  // ============================================================
  // CIP-005: Perimetros de Seguridad Electronica (10 preguntas)
  // ============================================================
  {
    id: 'CIP005-Q01',
    cipId: 'CIP-005',
    requirementId: 'R1',
    text: '¿Estan definidos y documentados los perimetros de seguridad electronica (ESP) para todos los ciber activos BES de alto y medio impacto?',
    helpText:
      'Cada ESP debe tener limites claramente definidos, diagramas de red actualizados y una lista de todos los puntos de acceso electronico.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP005-Q02',
    cipId: 'CIP-005',
    requirementId: 'R1',
    text: '¿Todos los ciber activos BES de alto y medio impacto residen dentro de un perimetro de seguridad electronica definido?',
    helpText:
      'Ningun ciber activo BES de alto o medio impacto debe estar fuera de un ESP. Verifique que no existan dispositivos conectados directamente a redes externas sin proteccion perimetral.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP005-Q03',
    cipId: 'CIP-005',
    requirementId: 'R2',
    text: '¿Se controla el trafico de entrada y salida en todos los puntos de acceso electronico mediante firewalls u otros dispositivos de control?',
    helpText:
      'Los controles deben incluir reglas de filtrado de trafico, listas de acceso y denegacion por defecto de trafico no autorizado.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP005-Q04',
    cipId: 'CIP-005',
    requirementId: 'R2',
    text: '¿Se requiere autenticacion multifactor para el acceso remoto interactivo a ciber activos BES?',
    helpText:
      'La autenticacion multifactor debe combinar al menos dos de: algo que el usuario sabe, algo que tiene, o algo que es (biometria).',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP005-Q05',
    cipId: 'CIP-005',
    requirementId: 'R2',
    text: '¿Se cifran las sesiones de acceso remoto interactivo a ciber activos BES?',
    helpText:
      'El cifrado debe aplicarse a todas las sesiones remotas utilizando protocolos actualizados como TLS 1.2 o superior, SSH o VPN cifrada.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP005-Q06',
    cipId: 'CIP-005',
    requirementId: 'R3',
    text: '¿Existen sistemas de deteccion de intrusiones (IDS) en los puntos de acceso electronico?',
    helpText:
      'Los IDS deben estar configurados para detectar patrones de trafico malicioso, intentos de intrusion y comunicaciones anomalas en los puntos de acceso electronico.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP005-Q07',
    cipId: 'CIP-005',
    requirementId: 'R3',
    text: '¿Se revisan y actualizan las firmas y reglas de deteccion de los sistemas IDS regularmente?',
    helpText:
      'Las firmas y reglas deben actualizarse para detectar nuevas amenazas y tecnicas de ataque relevantes para el sector electrico.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP005-Q08',
    cipId: 'CIP-005',
    requirementId: 'R1',
    text: '¿Se mantienen diagramas de red actualizados que muestren los perimetros de seguridad electronica y sus puntos de acceso?',
    helpText:
      'Los diagramas deben actualizarse cada vez que se realicen cambios en la topologia de red, adicion o eliminacion de dispositivos, o modificacion de reglas de acceso.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP005-Q09',
    cipId: 'CIP-005',
    requirementId: 'R2',
    text: '¿Se registran y monitorean todas las conexiones de acceso remoto a ciber activos BES?',
    helpText:
      'Los registros deben incluir identidad del usuario, hora de conexion y desconexion, origen de la conexion y actividades realizadas durante la sesion.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP005-Q10',
    cipId: 'CIP-005',
    requirementId: 'R3',
    text: '¿Se generan alertas automaticas cuando se detectan comunicaciones maliciosas o intentos de acceso no autorizado?',
    helpText:
      'Las alertas deben llegar al personal de seguridad de manera oportuna para permitir una respuesta rapida ante posibles incidentes.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },

  // ============================================================
  // CIP-006: Seguridad Fisica (10 preguntas)
  // ============================================================
  {
    id: 'CIP006-Q01',
    cipId: 'CIP-006',
    requirementId: 'R1',
    text: '¿Existe un plan de seguridad fisica documentado que defina los perimetros de seguridad fisica (PSP)?',
    helpText:
      'El plan debe incluir la ubicacion de cada PSP, los mecanismos de control de acceso, los procedimientos de monitoreo y los planes de respuesta ante brechas de seguridad fisica.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP006-Q02',
    cipId: 'CIP-006',
    requirementId: 'R1',
    text: '¿Los perimetros de seguridad fisica utilizan mecanismos de control de acceso como tarjetas, biometria o cerraduras electronicas?',
    helpText:
      'Los mecanismos de control de acceso deben generar registros auditables y permitir la revocacion rapida de accesos cuando sea necesario.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP006-Q03',
    cipId: 'CIP-006',
    requirementId: 'R1',
    text: '¿Se mantiene una lista actualizada de personal autorizado para acceder a cada perimetro de seguridad fisica?',
    helpText:
      'La lista debe revisarse al menos trimestralmente y actualizarse inmediatamente cuando un individuo ya no requiera acceso.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP006-Q04',
    cipId: 'CIP-006',
    requirementId: 'R2',
    text: '¿Existe un programa de control de visitantes que requiera acompanamiento continuo dentro del PSP?',
    helpText:
      'Los visitantes deben ser acompanados en todo momento por personal autorizado y deben portar identificacion visible que los distinga del personal regular.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP006-Q05',
    cipId: 'CIP-006',
    requirementId: 'R2',
    text: '¿Se registra la entrada y salida de todos los visitantes al perimetro de seguridad fisica?',
    helpText:
      'El registro debe incluir nombre del visitante, fecha y hora de entrada y salida, motivo de la visita y nombre del acompanante autorizado.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP006-Q06',
    cipId: 'CIP-006',
    requirementId: 'R3',
    text: '¿Existen sistemas de monitoreo como camaras de seguridad o alarmas en los puntos de acceso fisico?',
    helpText:
      'Los sistemas de monitoreo deben cubrir todos los puntos de entrada al PSP y generar alertas ante accesos no autorizados.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP006-Q07',
    cipId: 'CIP-006',
    requirementId: 'R3',
    text: '¿Se retienen los registros de acceso fisico y grabaciones de seguridad por al menos 90 dias?',
    helpText:
      'Los registros deben almacenarse de forma segura y estar disponibles para auditorias e investigaciones de incidentes.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP006-Q08',
    cipId: 'CIP-006',
    requirementId: 'R1',
    text: '¿Los centros de datos y salas de servidores que contienen ciber activos BES estan dentro de un PSP?',
    helpText:
      'Toda ubicacion fisica que albergue ciber activos BES de alto o medio impacto debe estar protegida por un perimetro de seguridad fisica.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP006-Q09',
    cipId: 'CIP-006',
    requirementId: 'R3',
    text: '¿Se generan alertas en tiempo real cuando se detectan intentos de acceso fisico no autorizado?',
    helpText:
      'Las alertas deben ser enviadas al personal de seguridad para una respuesta inmediata, incluyendo informacion sobre la ubicacion y naturaleza del intento.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP006-Q10',
    cipId: 'CIP-006',
    requirementId: 'R1',
    text: '¿Se realizan inspecciones periodicas de los perimetros de seguridad fisica para verificar su integridad?',
    helpText:
      'Las inspecciones deben verificar que las barreras fisicas, cerraduras, camaras y sistemas de alarma estan funcionando correctamente.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },

  // ============================================================
  // CIP-007: Gestion de Seguridad de Sistemas (10 preguntas)
  // ============================================================
  {
    id: 'CIP007-Q01',
    cipId: 'CIP-007',
    requirementId: 'R1',
    text: '¿Se mantienen habilitados solo los puertos y servicios logicos necesarios para la operacion de los ciber activos BES?',
    helpText:
      'Realice un relevamiento de puertos y servicios activos y deshabilite aquellos que no sean estrictamente necesarios para la funcion del activo.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP007-Q02',
    cipId: 'CIP-007',
    requirementId: 'R1',
    text: '¿Existe documentacion que justifique cada puerto y servicio habilitado en los ciber activos BES?',
    helpText:
      'La documentacion debe explicar la necesidad operativa de cada puerto y servicio, y debe actualizarse cuando cambian los requisitos.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP007-Q03',
    cipId: 'CIP-007',
    requirementId: 'R2',
    text: '¿Existe un proceso de gestion de parches que evalúe la aplicabilidad de parches de seguridad dentro de 35 dias?',
    helpText:
      'El proceso debe incluir evaluacion de parches publicados por los fabricantes, pruebas en entornos no productivos cuando sea posible, y un plan de implementacion.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP007-Q04',
    cipId: 'CIP-007',
    requirementId: 'R2',
    text: '¿Se documentan planes de mitigacion cuando un parche de seguridad no puede ser aplicado?',
    helpText:
      'Cuando un parche no es aplicable o puede afectar la operacion, se deben implementar controles compensatorios documentados como reglas de firewall adicionales o monitoreo reforzado.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP007-Q05',
    cipId: 'CIP-007',
    requirementId: 'R3',
    text: '¿Se han implementado soluciones de prevencion de codigo malicioso en los ciber activos BES?',
    helpText:
      'Las soluciones pueden incluir antivirus, listas blancas de aplicaciones, control de dispositivos removibles o combinaciones de estas tecnologias.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP007-Q06',
    cipId: 'CIP-007',
    requirementId: 'R3',
    text: '¿Se actualizan las firmas de antivirus o las listas blancas de aplicaciones regularmente?',
    helpText:
      'Las actualizaciones deben realizarse de acuerdo con las recomendaciones del fabricante, considerando las limitaciones del entorno operativo.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP007-Q07',
    cipId: 'CIP-007',
    requirementId: 'R4',
    text: '¿Se registran y monitorean los eventos de seguridad como intentos de acceso fallidos y cambios de configuracion?',
    helpText:
      'Los registros deben incluir intentos de autenticacion exitosos y fallidos, cambios en cuentas de usuario, cambios de configuracion y actividades administrativas.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP007-Q08',
    cipId: 'CIP-007',
    requirementId: 'R4',
    text: '¿Se retienen los registros de eventos de seguridad por al menos 90 dias?',
    helpText:
      'Los registros deben almacenarse de forma segura y estar accesibles para revisiones, auditorias e investigaciones de incidentes.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP007-Q09',
    cipId: 'CIP-007',
    requirementId: 'R5',
    text: '¿Se implementan politicas de contrasenas que incluyan complejidad minima, longitud y cambio periodico?',
    helpText:
      'Las politicas deben requerir contrasenas de al menos 8 caracteres con combinacion de mayusculas, minusculas, numeros y caracteres especiales, con cambio al menos cada 15 meses.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP007-Q10',
    cipId: 'CIP-007',
    requirementId: 'R5',
    text: '¿Se gestionan y protegen las cuentas compartidas y de servicio con controles adicionales?',
    helpText:
      'Las cuentas compartidas deben minimizarse y, cuando sean necesarias, deben tener contrasenas unicas que se cambien despues de cada uso o al menos cada 15 meses.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },

  // ============================================================
  // CIP-008: Reporte y Respuesta a Incidentes (10 preguntas)
  // ============================================================
  {
    id: 'CIP008-Q01',
    cipId: 'CIP-008',
    requirementId: 'R1',
    text: '¿Existe un plan de respuesta a incidentes de ciberseguridad documentado y aprobado?',
    helpText:
      'El plan debe definir los tipos de incidentes cubiertos, los procedimientos de respuesta, los roles y responsabilidades, y los criterios de escalamiento.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP008-Q02',
    cipId: 'CIP-008',
    requirementId: 'R1',
    text: '¿El plan de respuesta a incidentes incluye criterios claros para clasificar los incidentes por severidad?',
    helpText:
      'Los criterios de clasificacion deben considerar el impacto en la operacion del sistema electrico, la extension del compromiso y el tipo de activo afectado.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP008-Q03',
    cipId: 'CIP-008',
    requirementId: 'R2',
    text: '¿Estan definidos los roles y responsabilidades del equipo de respuesta a incidentes?',
    helpText:
      'El equipo debe incluir personal de TI/OT, seguridad, operaciones, comunicaciones y direccion, con contactos actualizados y disponibilidad 24/7.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP008-Q04',
    cipId: 'CIP-008',
    requirementId: 'R2',
    text: '¿Se realizan ejercicios de simulacion de incidentes de ciberseguridad al menos una vez al ano?',
    helpText:
      'Los ejercicios pueden incluir simulaciones de mesa (tabletop), ejercicios funcionales o simulaciones completas que prueben la capacidad de respuesta de la organizacion.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP008-Q05',
    cipId: 'CIP-008',
    requirementId: 'R2',
    text: '¿Existen procedimientos de comunicacion interna y externa para la gestion de incidentes?',
    helpText:
      'Los procedimientos deben definir como comunicar un incidente a la direccion, al personal afectado, a reguladores y, cuando corresponda, al publico.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP008-Q06',
    cipId: 'CIP-008',
    requirementId: 'R3',
    text: '¿Se revisa y actualiza el plan de respuesta a incidentes al menos cada 15 meses?',
    helpText:
      'La revision debe incorporar lecciones aprendidas de incidentes ocurridos, resultados de ejercicios y cambios en la infraestructura o regulacion.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP008-Q07',
    cipId: 'CIP-008',
    requirementId: 'R3',
    text: '¿Se documentan las lecciones aprendidas despues de cada incidente significativo?',
    helpText:
      'Las lecciones aprendidas deben identificar que funciono bien, que necesita mejorar y las acciones correctivas a implementar.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP008-Q08',
    cipId: 'CIP-008',
    requirementId: 'R4',
    text: '¿Se notifican los incidentes de ciberseguridad reportables al Coordinador Electrico Nacional dentro de una hora?',
    helpText:
      'Los incidentes reportables incluyen aquellos que comprometen o intentan comprometer los perimetros de seguridad electronica o afectan la operacion del BES.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP008-Q09',
    cipId: 'CIP-008',
    requirementId: 'R4',
    text: '¿Existen canales establecidos para reportar incidentes al CSIRT del sector electrico chileno?',
    helpText:
      'Debe existir un procedimiento documentado con los contactos, canales de comunicacion y formatos requeridos para reportar incidentes al CSIRT sectorial.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP008-Q10',
    cipId: 'CIP-008',
    requirementId: 'R1',
    text: '¿El plan incluye procedimientos para la preservacion de evidencia digital de incidentes?',
    helpText:
      'Los procedimientos deben asegurar la cadena de custodia, integridad de los datos y la correcta recoleccion de evidencia para investigaciones posteriores.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },

  // ============================================================
  // CIP-009: Planes de Recuperacion (10 preguntas)
  // ============================================================
  {
    id: 'CIP009-Q01',
    cipId: 'CIP-009',
    requirementId: 'R1',
    text: '¿Existen planes de recuperacion documentados para cada ciber activo BES critico?',
    helpText:
      'Los planes deben incluir condiciones de activacion, procedimientos de restauracion paso a paso, datos de contacto del personal clave y objetivos de tiempo de recuperacion.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP009-Q02',
    cipId: 'CIP-009',
    requirementId: 'R1',
    text: '¿Los planes de recuperacion definen objetivos de tiempo de recuperacion (RTO) y punto de recuperacion (RPO)?',
    helpText:
      'El RTO define cuanto tiempo puede estar fuera de servicio un activo, y el RPO define cuanta perdida de datos es aceptable. Ambos deben alinearse con las necesidades operativas.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP009-Q03',
    cipId: 'CIP-009',
    requirementId: 'R2',
    text: '¿Se realizan respaldos periodicos de los datos de configuracion y operacion de los ciber activos BES?',
    helpText:
      'Los respaldos deben incluir configuraciones del sistema, datos operativos criticos, imagenes del sistema y cualquier dato necesario para la restauracion completa.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP009-Q04',
    cipId: 'CIP-009',
    requirementId: 'R2',
    text: '¿Se verifican los respaldos periodicamente para asegurar que pueden ser restaurados correctamente?',
    helpText:
      'Las pruebas de restauracion deben realizarse en entornos controlados para verificar la integridad y completitud de los respaldos.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP009-Q05',
    cipId: 'CIP-009',
    requirementId: 'R2',
    text: '¿Se almacenan los respaldos en ubicaciones seguras y separadas de los sistemas de produccion?',
    helpText:
      'Los respaldos deben estar protegidos contra acceso no autorizado y almacenados en ubicaciones que no se vean afectadas por los mismos incidentes que los sistemas de produccion.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP009-Q06',
    cipId: 'CIP-009',
    requirementId: 'R3',
    text: '¿Se realizan ejercicios de recuperacion al menos cada 15 meses?',
    helpText:
      'Los ejercicios deben simular escenarios realistas de falla o compromiso y verificar que los procedimientos de recuperacion funcionan correctamente.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP009-Q07',
    cipId: 'CIP-009',
    requirementId: 'R3',
    text: '¿Se actualizan los planes de recuperacion basandose en los resultados de los ejercicios?',
    helpText:
      'Las deficiencias identificadas durante los ejercicios deben documentarse y los planes deben actualizarse para corregir los problemas encontrados.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP009-Q08',
    cipId: 'CIP-009',
    requirementId: 'R1',
    text: '¿Los planes de recuperacion incluyen procedimientos para la restauracion a una configuracion base conocida?',
    helpText:
      'La restauracion debe devolver el sistema a su ultima configuracion base documentada y verificada, asegurando que no persistan compromisos de seguridad.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP009-Q09',
    cipId: 'CIP-009',
    requirementId: 'R1',
    text: '¿Existe un proceso de comunicacion definido para coordinar las actividades de recuperacion?',
    helpText:
      'El proceso debe definir como se notifica al personal clave, como se coordina con el CEN y como se comunica el estado de la recuperacion a las partes interesadas.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP009-Q10',
    cipId: 'CIP-009',
    requirementId: 'R2',
    text: '¿Se mantiene disponible el hardware de repuesto necesario para la recuperacion de ciber activos BES criticos?',
    helpText:
      'El inventario de repuestos debe incluir componentes criticos cuya falla podria retrasar significativamente la recuperacion del sistema.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },

  // ============================================================
  // CIP-010: Gestion de Cambios y Vulnerabilidades (10 preguntas)
  // ============================================================
  {
    id: 'CIP010-Q01',
    cipId: 'CIP-010',
    requirementId: 'R1',
    text: '¿Existe una configuracion base documentada para cada ciber activo BES?',
    helpText:
      'La configuracion base debe incluir sistema operativo con version y parches, puertos y servicios habilitados, software instalado con versiones y cuentas de usuario configuradas.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP010-Q02',
    cipId: 'CIP-010',
    requirementId: 'R1',
    text: '¿Se actualiza la configuracion base cada vez que se realizan cambios autorizados en los ciber activos BES?',
    helpText:
      'Los cambios en la configuracion base deben documentarse incluyendo la justificacion del cambio, la autorizacion recibida y la fecha de implementacion.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP010-Q03',
    cipId: 'CIP-010',
    requirementId: 'R1',
    text: '¿Existe un proceso formal de gestion de cambios para modificaciones a ciber activos BES?',
    helpText:
      'El proceso debe incluir solicitud de cambio, evaluacion de impacto de seguridad, aprobacion, pruebas, implementacion y verificacion post-cambio.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP010-Q04',
    cipId: 'CIP-010',
    requirementId: 'R2',
    text: '¿Se monitorean los cambios no autorizados en la configuracion de los ciber activos BES al menos cada 35 dias?',
    helpText:
      'El monitoreo puede realizarse mediante herramientas automatizadas de gestion de configuracion o comparaciones manuales con la configuracion base documentada.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP010-Q05',
    cipId: 'CIP-010',
    requirementId: 'R2',
    text: '¿Se generan alertas cuando se detectan cambios no autorizados en la configuracion?',
    helpText:
      'Las alertas deben notificar al personal de seguridad para investigar y remediar los cambios no autorizados de manera oportuna.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP010-Q06',
    cipId: 'CIP-010',
    requirementId: 'R3',
    text: '¿Se realizan evaluaciones de vulnerabilidad de los ciber activos BES al menos cada 15 meses?',
    helpText:
      'Las evaluaciones deben identificar vulnerabilidades conocidas en los sistemas, aplicaciones y configuraciones de los ciber activos BES.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP010-Q07',
    cipId: 'CIP-010',
    requirementId: 'R3',
    text: '¿Se documentan y ejecutan planes de remediacion para las vulnerabilidades identificadas?',
    helpText:
      'Los planes deben priorizar las vulnerabilidades segun su severidad e incluir plazos de remediacion y controles compensatorios cuando la remediacion inmediata no sea posible.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP010-Q08',
    cipId: 'CIP-010',
    requirementId: 'R4',
    text: '¿Existen planes de proteccion para ciber activos transitorios como laptops y dispositivos de diagnostico?',
    helpText:
      'Los planes deben incluir requisitos de seguridad como antivirus actualizado, parches de seguridad y restricciones de conexion antes de conectar dispositivos transitorios al entorno BES.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP010-Q09',
    cipId: 'CIP-010',
    requirementId: 'R4',
    text: '¿Se verifican los dispositivos transitorios antes de conectarlos a la red de ciber activos BES?',
    helpText:
      'La verificacion debe incluir escaneo de malware, verificacion de parches y confirmacion de que el dispositivo cumple con la politica de seguridad antes de la conexion.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP010-Q10',
    cipId: 'CIP-010',
    requirementId: 'R1',
    text: '¿Se evalúa el impacto de seguridad antes de implementar cualquier cambio en los ciber activos BES?',
    helpText:
      'La evaluacion de impacto debe considerar como el cambio afecta los controles de seguridad existentes y si introduce nuevas vulnerabilidades.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },

  // ============================================================
  // CIP-011: Proteccion de Informacion (10 preguntas)
  // ============================================================
  {
    id: 'CIP011-Q01',
    cipId: 'CIP-011',
    requirementId: 'R1',
    text: '¿Existe una clasificacion de la informacion asociada a los ciber activos BES?',
    helpText:
      'La clasificacion debe identificar la informacion sensible como diagramas de red, configuraciones de seguridad, procedimientos operativos y datos de vulnerabilidades.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP011-Q02',
    cipId: 'CIP-011',
    requirementId: 'R1',
    text: '¿Se protege la informacion sensible de ciber activos BES durante su almacenamiento mediante cifrado u otros controles?',
    helpText:
      'La proteccion puede incluir cifrado de discos, almacenamiento en ubicaciones de acceso restringido o uso de sistemas de gestion de archivos con control de acceso.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP011-Q03',
    cipId: 'CIP-011',
    requirementId: 'R1',
    text: '¿Se protege la informacion sensible durante su transmision mediante cifrado?',
    helpText:
      'Toda transmision de informacion sensible de ciber activos BES debe utilizar protocolos cifrados como TLS, SSH o VPN.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP011-Q04',
    cipId: 'CIP-011',
    requirementId: 'R1',
    text: '¿Existen controles de acceso que limiten quien puede acceder a la informacion sensible de ciber activos BES?',
    helpText:
      'Los controles deben basarse en el principio de minimo privilegio, otorgando acceso solo al personal que necesita la informacion para sus funciones.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP011-Q05',
    cipId: 'CIP-011',
    requirementId: 'R1',
    text: '¿Se controla la distribucion de informacion sensible como diagramas de red y configuraciones de seguridad?',
    helpText:
      'Debe existir un proceso que rastree quien recibe informacion sensible y asegure que no se distribuya a personas no autorizadas.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP011-Q06',
    cipId: 'CIP-011',
    requirementId: 'R2',
    text: '¿Existe un procedimiento de destruccion segura de informacion cuando se retiran ciber activos BES de servicio?',
    helpText:
      'El procedimiento debe especificar los metodos de sanitizacion aceptables segun el tipo de medio, como borrado seguro, desmagnetizacion o destruccion fisica.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP011-Q07',
    cipId: 'CIP-011',
    requirementId: 'R2',
    text: '¿Se verifica que la destruccion de informacion se haya completado correctamente?',
    helpText:
      'La verificacion puede incluir intentos de recuperacion de datos post-sanitizacion, certificados de destruccion o registros de auditoria del proceso.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP011-Q08',
    cipId: 'CIP-011',
    requirementId: 'R2',
    text: '¿Se mantienen registros de la destruccion o sanitizacion de medios que contienen informacion de ciber activos BES?',
    helpText:
      'Los registros deben incluir descripcion del medio, metodo de sanitizacion utilizado, fecha, persona responsable y resultado de la verificacion.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP011-Q09',
    cipId: 'CIP-011',
    requirementId: 'R2',
    text: '¿Se sanitizan los medios de almacenamiento antes de reutilizarlos para otros fines?',
    helpText:
      'Antes de reutilizar discos, memorias USB u otros medios, se debe eliminar completamente cualquier informacion sensible de ciber activos BES.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP011-Q10',
    cipId: 'CIP-011',
    requirementId: 'R1',
    text: '¿Se capacita al personal sobre los procedimientos de manejo de informacion sensible de ciber activos BES?',
    helpText:
      'El personal debe conocer la clasificacion de informacion, los procedimientos de manejo seguro y las consecuencias del manejo inadecuado.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },

  // ============================================================
  // CIP-013: Gestion de Riesgo Cadena Suministro (10 preguntas)
  // ============================================================
  {
    id: 'CIP013-Q01',
    cipId: 'CIP-013',
    requirementId: 'R1',
    text: '¿Existe un plan documentado de gestion de riesgo de cadena de suministro para ciber activos BES?',
    helpText:
      'El plan debe abordar la evaluacion de riesgos de proveedores, verificacion de integridad de software y hardware, y gestion de acceso remoto de proveedores.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP013-Q02',
    cipId: 'CIP-013',
    requirementId: 'R1',
    text: '¿Se evaluan los riesgos de ciberseguridad de los proveedores antes de adquirir ciber activos BES?',
    helpText:
      'La evaluacion debe considerar las practicas de seguridad del proveedor, su historial de vulnerabilidades y su capacidad de respuesta ante incidentes.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP013-Q03',
    cipId: 'CIP-013',
    requirementId: 'R1',
    text: '¿Se incluyen requisitos de ciberseguridad en los contratos con proveedores de ciber activos BES?',
    helpText:
      'Los contratos deben incluir clausulas sobre notificacion de vulnerabilidades, actualizaciones de seguridad, acceso remoto controlado y respuesta a incidentes.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP013-Q04',
    cipId: 'CIP-013',
    requirementId: 'R1',
    text: '¿Se verifica la integridad del software y firmware antes de su instalacion en ciber activos BES?',
    helpText:
      'La verificacion puede incluir comparacion de hashes, verificacion de firmas digitales y descarga desde fuentes oficiales del fabricante.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP013-Q05',
    cipId: 'CIP-013',
    requirementId: 'R1',
    text: '¿Se gestiona y controla el acceso remoto de proveedores a los ciber activos BES?',
    helpText:
      'El acceso remoto de proveedores debe ser autorizado, monitoreado, registrado y limitado al tiempo y alcance necesario para la tarea especifica.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP013-Q06',
    cipId: 'CIP-013',
    requirementId: 'R2',
    text: '¿Se verifican los procesos de desarrollo seguro de los proveedores de software para ciber activos BES?',
    helpText:
      'Solicite evidencia de practicas de desarrollo seguro como revisiones de codigo, pruebas de seguridad y gestion de vulnerabilidades en el ciclo de desarrollo.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP013-Q07',
    cipId: 'CIP-013',
    requirementId: 'R2',
    text: '¿Los proveedores notifican oportunamente las vulnerabilidades conocidas que afectan sus productos?',
    helpText:
      'Debe existir un mecanismo formal para que los proveedores comuniquen vulnerabilidades descubiertas y proporcionen parches o medidas de mitigacion.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP013-Q08',
    cipId: 'CIP-013',
    requirementId: 'R2',
    text: '¿Se evalua la capacidad de los proveedores para proporcionar actualizaciones de seguridad a largo plazo?',
    helpText:
      'Considere el ciclo de vida del producto, la estabilidad financiera del proveedor y su compromiso con el soporte continuo de seguridad.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP013-Q09',
    cipId: 'CIP-013',
    requirementId: 'R1',
    text: '¿Se revisa el plan de gestion de riesgo de cadena de suministro al menos cada 15 meses?',
    helpText:
      'La revision debe considerar nuevos proveedores, cambios en las cadenas de suministro existentes y nuevas amenazas identificadas.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP013-Q10',
    cipId: 'CIP-013',
    requirementId: 'R2',
    text: '¿Se mantiene un inventario de proveedores criticos y sus productos asociados a ciber activos BES?',
    helpText:
      'El inventario debe incluir nombre del proveedor, productos suministrados, criticidad del producto y evaluacion de riesgo del proveedor.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },

  // ============================================================
  // CIP-014: Seguridad Fisica Infraestructura Critica (10 preguntas)
  // ============================================================
  {
    id: 'CIP014-Q01',
    cipId: 'CIP-014',
    requirementId: 'R1',
    text: '¿Se ha realizado una evaluacion de riesgo de seguridad fisica para las instalaciones de transmision criticas?',
    helpText:
      'La evaluacion debe identificar las instalaciones cuya perdida podria causar inestabilidad, separacion no controlada o eventos en cascada en el sistema electrico.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['transmission', 'generation'],
  },
  {
    id: 'CIP014-Q02',
    cipId: 'CIP-014',
    requirementId: 'R1',
    text: '¿La evaluacion de riesgo considera amenazas fisicas como sabotaje, vandalismo y terrorismo?',
    helpText:
      'Las amenazas evaluadas deben incluir ataques dirigidos con armas de fuego, explosivos, intrusion, sabotaje interno y desastres naturales.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['transmission', 'generation'],
  },
  {
    id: 'CIP014-Q03',
    cipId: 'CIP-014',
    requirementId: 'R1',
    text: '¿Se identifican las vulnerabilidades fisicas especificas de cada instalacion critica?',
    helpText:
      'Las vulnerabilidades pueden incluir lineas de vista desde areas publicas, accesibilidad perimetral, tiempo de respuesta de fuerzas de seguridad y visibilidad de equipos criticos.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['transmission', 'generation'],
  },
  {
    id: 'CIP014-Q04',
    cipId: 'CIP-014',
    requirementId: 'R2',
    text: '¿Se ha obtenido una evaluacion de terceros independiente que valide la evaluacion de riesgo?',
    helpText:
      'El tercero debe ser una entidad independiente con experiencia en seguridad fisica de infraestructura critica, que no haya participado en la evaluacion inicial.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['transmission', 'generation'],
  },
  {
    id: 'CIP014-Q05',
    cipId: 'CIP-014',
    requirementId: 'R2',
    text: '¿Las recomendaciones de la evaluacion de terceros han sido incorporadas en los planes de seguridad?',
    helpText:
      'Debe existir un seguimiento documentado de las recomendaciones del tercero, indicando cuales fueron implementadas y la justificacion para aquellas que no se adoptaron.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['transmission', 'generation'],
  },
  {
    id: 'CIP014-Q06',
    cipId: 'CIP-014',
    requirementId: 'R3',
    text: '¿Existe un plan de seguridad fisica documentado que aborde las amenazas y vulnerabilidades identificadas?',
    helpText:
      'El plan debe incluir barreras fisicas, sistemas de vigilancia, iluminacion, controles de acceso, patrullas y coordinacion con fuerzas de seguridad.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['transmission', 'generation'],
  },
  {
    id: 'CIP014-Q07',
    cipId: 'CIP-014',
    requirementId: 'R3',
    text: '¿Se han implementado medidas de disuasion fisica como cercas reforzadas, iluminacion perimetral y videovigilancia?',
    helpText:
      'Las medidas de disuasion deben ser proporcionales al nivel de riesgo identificado y cubrir todas las areas vulnerables de la instalacion.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['transmission', 'generation'],
  },
  {
    id: 'CIP014-Q08',
    cipId: 'CIP-014',
    requirementId: 'R3',
    text: '¿Existe coordinacion con Carabineros u otras fuerzas de seguridad para la respuesta ante incidentes fisicos?',
    helpText:
      'Debe existir un protocolo de coordinacion que incluya tiempos de respuesta esperados, puntos de contacto y procedimientos de activacion.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['transmission', 'generation'],
  },
  {
    id: 'CIP014-Q09',
    cipId: 'CIP-014',
    requirementId: 'R1',
    text: '¿Se actualiza la evaluacion de riesgo cuando ocurren cambios significativos en las instalaciones o su entorno?',
    helpText:
      'Cambios significativos incluyen modificaciones estructurales, nuevas construcciones en el entorno, cambios en el nivel de amenaza o incidentes de seguridad.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['transmission', 'generation'],
  },
  {
    id: 'CIP014-Q10',
    cipId: 'CIP-014',
    requirementId: 'R3',
    text: '¿Se realizan pruebas periodicas de los sistemas de seguridad fisica como camaras, alarmas y controles de acceso?',
    helpText:
      'Las pruebas deben verificar el correcto funcionamiento de todos los componentes del sistema de seguridad y la efectividad de los procedimientos de respuesta.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['transmission', 'generation'],
  },
];
