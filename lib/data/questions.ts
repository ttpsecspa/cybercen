import { Question } from './types';

export const questions: Question[] = [
  // ============================================================
  // CIP-002: Categorización de Ciber Activos BES (10 preguntas)
  // ============================================================
  {
    id: 'CIP002-Q01',
    cipId: 'CIP-002',
    requirementId: 'R1',
    text: '¿Tiene un inventario actualizado de todos los ciber activos BES de su organización?',
    helpText:
      'El inventario debe incluir todos los sistemas de control industrial, servidores, estaciones de trabajo, dispositivos de red y equipos de comunicación que soportan la operación del sistema eléctrico.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP002-Q02',
    cipId: 'CIP-002',
    requirementId: 'R1',
    text: '¿Cada ciber activo BES tiene asignado un nivel de impacto (alto, medio o bajo) debidamente documentado?',
    helpText:
      'La categorización debe basarse en los criterios del CEN y considerar el impacto potencial en la confiabilidad del sistema eléctrico nacional.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP002-Q03',
    cipId: 'CIP-002',
    requirementId: 'R1',
    text: '¿Existe documentación que justifique la categorización de impacto de cada ciber activo BES?',
    helpText:
      'La justificación debe explicar por que se asignó cada nivel de impacto, considerando factores como capacidad de generación, puntos de entrega críticos y funciones de control del sistema.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP002-Q04',
    cipId: 'CIP-002',
    requirementId: 'R1',
    text: '¿Se han identificado los ciber activos asociados a los centros de control que realizan funciones de operación en tiempo real?',
    helpText:
      'Incluye sistemas SCADA, EMS, sistemas de gestión de generación y cualquier sistema que supervise o controle la operación del sistema eléctrico en tiempo real.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP002-Q05',
    cipId: 'CIP-002',
    requirementId: 'R1',
    text: '¿Se incluyen en el inventario los dispositivos de protección y control de subestaciones?',
    helpText:
      'Considere reles de protección digitales, controladores de bahia, RTUs, switches de comunicación y cualquier dispositivo programable en las subestaciones.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['transmission', 'distribution'],
  },
  {
    id: 'CIP002-Q06',
    cipId: 'CIP-002',
    requirementId: 'R2',
    text: '¿Se realiza una revisión de la categorización de ciber activos BES al menos cada 15 meses?',
    helpText:
      'La revisión periódica asegura que los cambios en la infraestructura o en las condiciones operativas se reflejen en la categorización de activos.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP002-Q07',
    cipId: 'CIP-002',
    requirementId: 'R2',
    text: '¿Existe un proceso formal para actualizar la categorización cuando se incorporan nuevos ciber activos?',
    helpText:
      'Debe existir un procedimiento documentado que se active cada vez que se instale, reemplace o modifique significativamente un ciber activo BES.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP002-Q08',
    cipId: 'CIP-002',
    requirementId: 'R2',
    text: '¿Se actualizan las categorizaciones cuando ocurren cambios significativos en la configuración del sistema eléctrico?',
    helpText:
      'Cambios significativos incluyen nuevas interconexiones, retiro de unidades generadoras, modificación de esquemas de protección y cambios en la topología de la red.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP002-Q09',
    cipId: 'CIP-002',
    requirementId: 'R1',
    text: '¿Se han identificado los sistemas de comunicación críticos que conectan los ciber activos BES?',
    helpText:
      'Incluye redes de comunicación SCADA, enlaces de teleprotección, redes corporativas con acceso a sistemas de control y canales de comunicación de voz operativa.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP002-Q10',
    cipId: 'CIP-002',
    requirementId: 'R1',
    text: '¿El inventario de ciber activos BES es accesible y comprensible para el personal responsable de ciberseguridad?',
    helpText:
      'El inventario debe estar en un formato que permita consultas, actualizaciones y generación de reportes de manera eficiente.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },

  // ============================================================
  // CIP-003: Controles de Gestión de Seguridad (10 preguntas)
  // ============================================================
  {
    id: 'CIP003-Q01',
    cipId: 'CIP-003',
    requirementId: 'R1',
    text: '¿Existe una política de ciberseguridad documentada y aprobada por la alta dirección?',
    helpText:
      'La política debe definir el compromiso de la organización con la ciberseguridad, el alcance, los roles y responsabilidades, y las directrices generales de protección.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP003-Q02',
    cipId: 'CIP-003',
    requirementId: 'R1',
    text: '¿La política de ciberseguridad se revisa y actualiza al menos una vez al año?',
    helpText:
      'La revisión debe considerar cambios en la regulación, nuevas amenazas, lecciones aprendidas de incidentes y cambios organizacionales.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP003-Q03',
    cipId: 'CIP-003',
    requirementId: 'R2',
    text: '¿Se ha designado un líder senior de ciberseguridad con autoridad para gestionar la protección de ciber activos BES?',
    helpText:
      'El líder debe tener la autoridad organizacional suficiente para implementar políticas, asignar recursos y tomar decisiones sobre la gestión de riesgos de ciberseguridad.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP003-Q04',
    cipId: 'CIP-003',
    requirementId: 'R2',
    text: '¿El líder de ciberseguridad tiene acceso directo a la alta dirección para reportar riesgos y necesidades?',
    helpText:
      'Es fundamental que exista una línea de comunicación directa entre el responsable de ciberseguridad y la gerencia general o directorio de la empresa.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP003-Q05',
    cipId: 'CIP-003',
    requirementId: 'R3',
    text: '¿Existe un programa de concientización en ciberseguridad para todo el personal con acceso a ciber activos BES?',
    helpText:
      'El programa debe incluir temas como phishing, gestión de contraseñas, manejo de información sensible y reporte de incidentes sospechosos.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP003-Q06',
    cipId: 'CIP-003',
    requirementId: 'R3',
    text: '¿Se realizan actividades de concientización al menos trimestralmente?',
    helpText:
      'Las actividades pueden incluir correos informativos, charlas, simulaciones de phishing, posters y otros materiales educativos.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP003-Q07',
    cipId: 'CIP-003',
    requirementId: 'R4',
    text: '¿Se han implementado controles de acceso electrónico para ciber activos de bajo impacto?',
    helpText:
      'Los controles deben incluir autenticación, restricción de acceso basada en roles y protección de sesiones remotas.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP003-Q08',
    cipId: 'CIP-003',
    requirementId: 'R4',
    text: '¿Se requiere autenticación para el acceso remoto a ciber activos de bajo impacto?',
    helpText:
      'Todo acceso remoto debe requerir autenticación y estar protegido mediante cifrado de las comunicaciones.',
    applicableImpactLevels: ['low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP003-Q09',
    cipId: 'CIP-003',
    requirementId: 'R1',
    text: '¿La política de ciberseguridad incluye lineamientos específicos para la gestión de acceso remoto?',
    helpText:
      'Debe definir los métodos autorizados de acceso remoto, los niveles de autenticación requeridos y las condiciones bajo las cuales se permite el acceso remoto.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP003-Q10',
    cipId: 'CIP-003',
    requirementId: 'R1',
    text: '¿La política de ciberseguridad aborda la gestión de incidentes y la continuidad operacional?',
    helpText:
      'La política debe incluir directrices generales sobre como la organización gestionara incidentes de ciberseguridad y mantendra la continuidad de las operaciones críticas.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },

  // ============================================================
  // CIP-004: Personal y Capacitación (10 preguntas)
  // ============================================================
  {
    id: 'CIP004-Q01',
    cipId: 'CIP-004',
    requirementId: 'R1',
    text: '¿Existe un programa formal de concientización de seguridad que se refuerce al menos trimestralmente?',
    helpText:
      'El programa debe cubrir las amenazas actuales, las políticas de la organización y las mejores prácticas de ciberseguridad relevantes para el sector eléctrico.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP004-Q02',
    cipId: 'CIP-004',
    requirementId: 'R1',
    text: '¿Se mantienen registros de la participación del personal en las actividades de concientización?',
    helpText:
      'Los registros deben incluir fecha, participantes, temas cubiertos y evidencia de participación como listas de asistencia o registros electrónicos.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP004-Q03',
    cipId: 'CIP-004',
    requirementId: 'R2',
    text: '¿Se proporciona capacitación en ciberseguridad basada en roles antes de otorgar acceso a ciber activos BES?',
    helpText:
      'La capacitación debe ser específica para las funciones que el personal desempeñará y cubrir los riesgos y controles asociados a su rol.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP004-Q04',
    cipId: 'CIP-004',
    requirementId: 'R2',
    text: '¿Se actualiza la capacitación en ciberseguridad al menos cada 15 meses para todo el personal autorizado?',
    helpText:
      'La capacitación debe actualizarse para reflejar nuevas amenazas, cambios en la infraestructura y lecciones aprendidas de incidentes.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP004-Q05',
    cipId: 'CIP-004',
    requirementId: 'R3',
    text: '¿Se realizan evaluaciones de antecedentes personales antes de otorgar acceso autorizado a ciber activos BES?',
    helpText:
      'Las evaluaciones deben incluir verificación de identidad, antecedentes penales y, cuando corresponda, verificación de empleo anterior.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP004-Q06',
    cipId: 'CIP-004',
    requirementId: 'R3',
    text: '¿Se actualizan las evaluaciones de antecedentes personales al menos cada 7 años?',
    helpText:
      'Las evaluaciones periódicas aseguran que el personal autorizado continua cumpliendo con los requisitos de confiabilidad de la organización.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP004-Q07',
    cipId: 'CIP-004',
    requirementId: 'R4',
    text: '¿Se revoca el acceso autorizado dentro de 24 horas cuando un empleado deja la organización?',
    helpText:
      'El proceso de revocación debe incluir acceso electrónico, acceso físico y devolución de credenciales, tokens y equipos asignados.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP004-Q08',
    cipId: 'CIP-004',
    requirementId: 'R4',
    text: '¿Existe un procedimiento para modificar los accesos cuando un empleado cambia de rol dentro de la organización?',
    helpText:
      'El procedimiento debe asegurar que los accesos se ajusten al nuevo rol dentro de 30 días, eliminando accesos innecesarios y otorgando los nuevos que correspondan.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP004-Q09',
    cipId: 'CIP-004',
    requirementId: 'R4',
    text: '¿Se realiza una revisión trimestral de las listas de acceso autorizado a ciber activos BES?',
    helpText:
      'La revisión debe verificar que cada persona con acceso autorizado tiene una necesidad operativa vigente y que su capacitación y evaluación de antecedentes estan al dia.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP004-Q10',
    cipId: 'CIP-004',
    requirementId: 'R2',
    text: '¿La capacitación incluye procedimientos de respuesta ante incidentes de ciberseguridad?',
    helpText:
      'El personal debe saber como identificar, reportar y responder inicialmente ante un posible incidente de ciberseguridad en su area de responsabilidad.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },

  // ============================================================
  // CIP-005: Perímetros de Seguridad Electrónica (10 preguntas)
  // ============================================================
  {
    id: 'CIP005-Q01',
    cipId: 'CIP-005',
    requirementId: 'R1',
    text: '¿Estan definidos y documentados los perímetros de seguridad electrónica (ESP) para todos los ciber activos BES de alto y medio impacto?',
    helpText:
      'Cada ESP debe tener límites claramente definidos, diagramas de red actualizados y una lista de todos los puntos de acceso electrónico.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP005-Q02',
    cipId: 'CIP-005',
    requirementId: 'R1',
    text: '¿Todos los ciber activos BES de alto y medio impacto residen dentro de un perímetro de seguridad electrónica definido?',
    helpText:
      'Ningún ciber activo BES de alto o medio impacto debe estar fuera de un ESP. Verifique que no existan dispositivos conectados directamente a redes externas sin protección perimetral.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP005-Q03',
    cipId: 'CIP-005',
    requirementId: 'R2',
    text: '¿Se controla el trafico de entrada y salida en todos los puntos de acceso electrónico mediante firewalls u otros dispositivos de control?',
    helpText:
      'Los controles deben incluir reglas de filtrado de trafico, listas de acceso y denegación por defecto de trafico no autorizado.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP005-Q04',
    cipId: 'CIP-005',
    requirementId: 'R2',
    text: '¿Se requiere autenticación multifactor para el acceso remoto interactivo a ciber activos BES?',
    helpText:
      'La autenticación multifactor debe combinar al menos dos de: algo que el usuario sabe, algo que tiene, o algo que es (biometría).',
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
    text: '¿Existen sistemas de detección de intrusiones (IDS) en los puntos de acceso electrónico?',
    helpText:
      'Los IDS deben estar configurados para detectar patrones de trafico malicioso, intentos de intrusión y comunicaciones anómalas en los puntos de acceso electrónico.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP005-Q07',
    cipId: 'CIP-005',
    requirementId: 'R3',
    text: '¿Se revisan y actualizan las firmas y reglas de detección de los sistemas IDS regularmente?',
    helpText:
      'Las firmas y reglas deben actualizarse para detectar nuevas amenazas y técnicas de ataque relevantes para el sector eléctrico.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP005-Q08',
    cipId: 'CIP-005',
    requirementId: 'R1',
    text: '¿Se mantienen diagramas de red actualizados que muestren los perímetros de seguridad electrónica y sus puntos de acceso?',
    helpText:
      'Los diagramas deben actualizarse cada vez que se realicen cambios en la topología de red, adición o eliminación de dispositivos, o modificación de reglas de acceso.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP005-Q09',
    cipId: 'CIP-005',
    requirementId: 'R2',
    text: '¿Se registran y monitorean todas las conexiones de acceso remoto a ciber activos BES?',
    helpText:
      'Los registros deben incluir identidad del usuario, hora de conexión y desconexion, origen de la conexión y actividades realizadas durante la sesión.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP005-Q10',
    cipId: 'CIP-005',
    requirementId: 'R3',
    text: '¿Se generan alertas automaticas cuando se detectan comunicaciones maliciosas o intentos de acceso no autorizado?',
    helpText:
      'Las alertas deben llegar al personal de seguridad de manera oportuna para permitir una respuesta rápida ante posibles incidentes.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },

  // ============================================================
  // CIP-006: Seguridad Física (10 preguntas)
  // ============================================================
  {
    id: 'CIP006-Q01',
    cipId: 'CIP-006',
    requirementId: 'R1',
    text: '¿Existe un plan de seguridad física documentado que defina los perímetros de seguridad física (PSP)?',
    helpText:
      'El plan debe incluir la ubicación de cada PSP, los mecanismos de control de acceso, los procedimientos de monitoreo y los planes de respuesta ante brechas de seguridad física.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP006-Q02',
    cipId: 'CIP-006',
    requirementId: 'R1',
    text: '¿Los perímetros de seguridad física utilizan mecanismos de control de acceso como tarjetas, biometría o cerraduras electrónicas?',
    helpText:
      'Los mecanismos de control de acceso deben generar registros auditables y permitir la revocación rápida de accesos cuando sea necesario.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP006-Q03',
    cipId: 'CIP-006',
    requirementId: 'R1',
    text: '¿Se mantiene una lista actualizada de personal autorizado para acceder a cada perímetro de seguridad física?',
    helpText:
      'La lista debe revisarse al menos trimestralmente y actualizarse inmediatamente cuando un individuo ya no requiera acceso.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP006-Q04',
    cipId: 'CIP-006',
    requirementId: 'R2',
    text: '¿Existe un programa de control de visitantes que requiera acompañamiento continuo dentro del PSP?',
    helpText:
      'Los visitantes deben ser acompañados en todo momento por personal autorizado y deben portar identificación visible que los distinga del personal regular.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP006-Q05',
    cipId: 'CIP-006',
    requirementId: 'R2',
    text: '¿Se registra la entrada y salida de todos los visitantes al perímetro de seguridad física?',
    helpText:
      'El registro debe incluir nombre del visitante, fecha y hora de entrada y salida, motivo de la visita y nombre del acompañante autorizado.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP006-Q06',
    cipId: 'CIP-006',
    requirementId: 'R3',
    text: '¿Existen sistemas de monitoreo como cámaras de seguridad o alarmas en los puntos de acceso físico?',
    helpText:
      'Los sistemas de monitoreo deben cubrir todos los puntos de entrada al PSP y generar alertas ante accesos no autorizados.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP006-Q07',
    cipId: 'CIP-006',
    requirementId: 'R3',
    text: '¿Se retienen los registros de acceso físico y grabaciones de seguridad por al menos 90 días?',
    helpText:
      'Los registros deben almacenarse de forma segura y estar disponibles para auditorías e investigaciones de incidentes.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP006-Q08',
    cipId: 'CIP-006',
    requirementId: 'R1',
    text: '¿Los centros de datos y salas de servidores que contienen ciber activos BES estan dentro de un PSP?',
    helpText:
      'Toda ubicación física que albergue ciber activos BES de alto o medio impacto debe estar protegida por un perímetro de seguridad física.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP006-Q09',
    cipId: 'CIP-006',
    requirementId: 'R3',
    text: '¿Se generan alertas en tiempo real cuando se detectan intentos de acceso físico no autorizado?',
    helpText:
      'Las alertas deben ser enviadas al personal de seguridad para una respuesta inmediata, incluyendo información sobre la ubicación y naturaleza del intento.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP006-Q10',
    cipId: 'CIP-006',
    requirementId: 'R1',
    text: '¿Se realizan inspecciones periódicas de los perímetros de seguridad física para verificar su integridad?',
    helpText:
      'Las inspecciones deben verificar que las barreras físicas, cerraduras, cámaras y sistemas de alarma estan funcionando correctamente.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },

  // ============================================================
  // CIP-007: Gestión de Seguridad de Sistemas (10 preguntas)
  // ============================================================
  {
    id: 'CIP007-Q01',
    cipId: 'CIP-007',
    requirementId: 'R1',
    text: '¿Se mantienen habilitados solo los puertos y servicios lógicos necesarios para la operación de los ciber activos BES?',
    helpText:
      'Realice un relevamiento de puertos y servicios activos y deshabilite aquellos que no sean estrictamente necesarios para la función del activo.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP007-Q02',
    cipId: 'CIP-007',
    requirementId: 'R1',
    text: '¿Existe documentación que justifique cada puerto y servicio habilitado en los ciber activos BES?',
    helpText:
      'La documentación debe explicar la necesidad operativa de cada puerto y servicio, y debe actualizarse cuando cambian los requisitos.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP007-Q03',
    cipId: 'CIP-007',
    requirementId: 'R2',
    text: '¿Existe un proceso de gestión de parches que evalúe la aplicabilidad de parches de seguridad dentro de 35 días?',
    helpText:
      'El proceso debe incluir evaluación de parches publicados por los fabricantes, pruebas en entornos no productivos cuando sea posible, y un plan de implementación.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP007-Q04',
    cipId: 'CIP-007',
    requirementId: 'R2',
    text: '¿Se documentan planes de mitigación cuando un parche de seguridad no puede ser aplicado?',
    helpText:
      'Cuando un parche no es aplicable o puede afectar la operación, se deben implementar controles compensatorios documentados como reglas de firewall adicionales o monitoreo reforzado.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP007-Q05',
    cipId: 'CIP-007',
    requirementId: 'R3',
    text: '¿Se han implementado soluciones de prevención de código malicioso en los ciber activos BES?',
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
    text: '¿Se registran y monitorean los eventos de seguridad como intentos de acceso fallidos y cambios de configuración?',
    helpText:
      'Los registros deben incluir intentos de autenticación exitosos y fallidos, cambios en cuentas de usuario, cambios de configuración y actividades administrativas.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP007-Q08',
    cipId: 'CIP-007',
    requirementId: 'R4',
    text: '¿Se retienen los registros de eventos de seguridad por al menos 90 días?',
    helpText:
      'Los registros deben almacenarse de forma segura y estar accesibles para revisiones, auditorías e investigaciones de incidentes.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP007-Q09',
    cipId: 'CIP-007',
    requirementId: 'R5',
    text: '¿Se implementan políticas de contraseñas que incluyan complejidad mínima, longitud y cambio periodico?',
    helpText:
      'Las políticas deben requerir contraseñas de al menos 8 caracteres con combinación de mayúsculas, minúsculas, números y caracteres especiales, con cambio al menos cada 15 meses.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP007-Q10',
    cipId: 'CIP-007',
    requirementId: 'R5',
    text: '¿Se gestionan y protegen las cuentas compartidas y de servicio con controles adicionales?',
    helpText:
      'Las cuentas compartidas deben minimizarse y, cuando sean necesarias, deben tener contraseñas únicas que se cambien después de cada uso o al menos cada 15 meses.',
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
      'Los criterios de clasificación deben considerar el impacto en la operación del sistema eléctrico, la extensión del compromiso y el tipo de activo afectado.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP008-Q03',
    cipId: 'CIP-008',
    requirementId: 'R2',
    text: '¿Estan definidos los roles y responsabilidades del equipo de respuesta a incidentes?',
    helpText:
      'El equipo debe incluir personal de TI/OT, seguridad, operaciones, comunicaciones y dirección, con contactos actualizados y disponibilidad 24/7.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP008-Q04',
    cipId: 'CIP-008',
    requirementId: 'R2',
    text: '¿Se realizan ejercicios de simulación de incidentes de ciberseguridad al menos una vez al año?',
    helpText:
      'Los ejercicios pueden incluir simulaciones de mesa (tabletop), ejercicios funcionales o simulaciones completas que prueben la capacidad de respuesta de la organización.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP008-Q05',
    cipId: 'CIP-008',
    requirementId: 'R2',
    text: '¿Existen procedimientos de comunicación interna y externa para la gestión de incidentes?',
    helpText:
      'Los procedimientos deben definir como comunicar un incidente a la dirección, al personal afectado, a reguladores y, cuando corresponda, al público.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP008-Q06',
    cipId: 'CIP-008',
    requirementId: 'R3',
    text: '¿Se revisa y actualiza el plan de respuesta a incidentes al menos cada 15 meses?',
    helpText:
      'La revisión debe incorporar lecciones aprendidas de incidentes ocurridos, resultados de ejercicios y cambios en la infraestructura o regulación.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP008-Q07',
    cipId: 'CIP-008',
    requirementId: 'R3',
    text: '¿Se documentan las lecciones aprendidas después de cada incidente significativo?',
    helpText:
      'Las lecciones aprendidas deben identificar que funciono bien, que necesita mejorar y las acciones correctivas a implementar.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP008-Q08',
    cipId: 'CIP-008',
    requirementId: 'R4',
    text: '¿Se notifican los incidentes de ciberseguridad reportables al Coordinador Eléctrico Nacional dentro de una hora?',
    helpText:
      'Los incidentes reportables incluyen aquellos que comprometen o intentan comprometer los perímetros de seguridad electrónica o afectan la operación del BES.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP008-Q09',
    cipId: 'CIP-008',
    requirementId: 'R4',
    text: '¿Existen canales establecidos para reportar incidentes al CSIRT del sector eléctrico chileno?',
    helpText:
      'Debe existir un procedimiento documentado con los contactos, canales de comunicación y formatos requeridos para reportar incidentes al CSIRT sectorial.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP008-Q10',
    cipId: 'CIP-008',
    requirementId: 'R1',
    text: '¿El plan incluye procedimientos para la preservación de evidencia digital de incidentes?',
    helpText:
      'Los procedimientos deben asegurar la cadena de custodia, integridad de los datos y la correcta recolección de evidencia para investigaciones posteriores.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },

  // ============================================================
  // CIP-009: Planes de Recuperación (10 preguntas)
  // ============================================================
  {
    id: 'CIP009-Q01',
    cipId: 'CIP-009',
    requirementId: 'R1',
    text: '¿Existen planes de recuperación documentados para cada ciber activo BES crítico?',
    helpText:
      'Los planes deben incluir condiciones de activación, procedimientos de restauración paso a paso, datos de contacto del personal clave y objetivos de tiempo de recuperación.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP009-Q02',
    cipId: 'CIP-009',
    requirementId: 'R1',
    text: '¿Los planes de recuperación definen objetivos de tiempo de recuperación (RTO) y punto de recuperación (RPO)?',
    helpText:
      'El RTO define cuanto tiempo puede estar fuera de servicio un activo, y el RPO define cuanta pérdida de datos es aceptable. Ambos deben alinearse con las necesidades operativas.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP009-Q03',
    cipId: 'CIP-009',
    requirementId: 'R2',
    text: '¿Se realizan respaldos periódicos de los datos de configuración y operación de los ciber activos BES?',
    helpText:
      'Los respaldos deben incluir configuraciones del sistema, datos operativos críticos, imagenes del sistema y cualquier dato necesario para la restauración completa.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP009-Q04',
    cipId: 'CIP-009',
    requirementId: 'R2',
    text: '¿Se verifican los respaldos periódicamente para asegurar que pueden ser restaurados correctamente?',
    helpText:
      'Las pruebas de restauración deben realizarse en entornos controlados para verificar la integridad y completitud de los respaldos.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP009-Q05',
    cipId: 'CIP-009',
    requirementId: 'R2',
    text: '¿Se almacenan los respaldos en ubicaciones seguras y separadas de los sistemas de producción?',
    helpText:
      'Los respaldos deben estar protegidos contra acceso no autorizado y almacenados en ubicaciones que no se vean afectadas por los mismos incidentes que los sistemas de producción.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP009-Q06',
    cipId: 'CIP-009',
    requirementId: 'R3',
    text: '¿Se realizan ejercicios de recuperación al menos cada 15 meses?',
    helpText:
      'Los ejercicios deben simular escenarios realistas de falla o compromiso y verificar que los procedimientos de recuperación funcionan correctamente.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP009-Q07',
    cipId: 'CIP-009',
    requirementId: 'R3',
    text: '¿Se actualizan los planes de recuperación basándose en los resultados de los ejercicios?',
    helpText:
      'Las deficiencias identificadas durante los ejercicios deben documentarse y los planes deben actualizarse para corregir los problemas encontrados.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP009-Q08',
    cipId: 'CIP-009',
    requirementId: 'R1',
    text: '¿Los planes de recuperación incluyen procedimientos para la restauración a una configuración base conocida?',
    helpText:
      'La restauración debe devolver el sistema a su ultima configuración base documentada y verificada, asegurando que no persistan compromisos de seguridad.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP009-Q09',
    cipId: 'CIP-009',
    requirementId: 'R1',
    text: '¿Existe un proceso de comunicación definido para coordinar las actividades de recuperación?',
    helpText:
      'El proceso debe definir como se notifica al personal clave, como se coordina con el CEN y como se comunica el estado de la recuperación a las partes interesadas.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP009-Q10',
    cipId: 'CIP-009',
    requirementId: 'R2',
    text: '¿Se mantiene disponible el hardware de repuesto necesario para la recuperación de ciber activos BES críticos?',
    helpText:
      'El inventario de repuestos debe incluir componentes críticos cuya falla podría retrasar significativamente la recuperación del sistema.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },

  // ============================================================
  // CIP-010: Gestión de Cambios y Vulnerabilidades (10 preguntas)
  // ============================================================
  {
    id: 'CIP010-Q01',
    cipId: 'CIP-010',
    requirementId: 'R1',
    text: '¿Existe una configuración base documentada para cada ciber activo BES?',
    helpText:
      'La configuración base debe incluir sistema operativo con versión y parches, puertos y servicios habilitados, software instalado con versiones y cuentas de usuario configuradas.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP010-Q02',
    cipId: 'CIP-010',
    requirementId: 'R1',
    text: '¿Se actualiza la configuración base cada vez que se realizan cambios autorizados en los ciber activos BES?',
    helpText:
      'Los cambios en la configuración base deben documentarse incluyendo la justificación del cambio, la autorización recibida y la fecha de implementación.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP010-Q03',
    cipId: 'CIP-010',
    requirementId: 'R1',
    text: '¿Existe un proceso formal de gestión de cambios para modificaciones a ciber activos BES?',
    helpText:
      'El proceso debe incluir solicitud de cambio, evaluación de impacto de seguridad, aprobación, pruebas, implementación y verificación post-cambio.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP010-Q04',
    cipId: 'CIP-010',
    requirementId: 'R2',
    text: '¿Se monitorean los cambios no autorizados en la configuración de los ciber activos BES al menos cada 35 días?',
    helpText:
      'El monitoreo puede realizarse mediante herramientas automatizadas de gestión de configuración o comparaciones manuales con la configuración base documentada.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP010-Q05',
    cipId: 'CIP-010',
    requirementId: 'R2',
    text: '¿Se generan alertas cuando se detectan cambios no autorizados en la configuración?',
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
    text: '¿Se documentan y ejecutan planes de remediación para las vulnerabilidades identificadas?',
    helpText:
      'Los planes deben priorizar las vulnerabilidades según su severidad e incluir plazos de remediación y controles compensatorios cuando la remediación inmediata no sea posible.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP010-Q08',
    cipId: 'CIP-010',
    requirementId: 'R4',
    text: '¿Existen planes de protección para ciber activos transitorios como laptops y dispositivos de diagnóstico?',
    helpText:
      'Los planes deben incluir requisitos de seguridad como antivirus actualizado, parches de seguridad y restricciones de conexión antes de conectar dispositivos transitorios al entorno BES.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP010-Q09',
    cipId: 'CIP-010',
    requirementId: 'R4',
    text: '¿Se verifican los dispositivos transitorios antes de conectarlos a la red de ciber activos BES?',
    helpText:
      'La verificación debe incluir escaneo de malware, verificación de parches y confirmación de que el dispositivo cumple con la política de seguridad antes de la conexión.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP010-Q10',
    cipId: 'CIP-010',
    requirementId: 'R1',
    text: '¿Se evalúa el impacto de seguridad antes de implementar cualquier cambio en los ciber activos BES?',
    helpText:
      'La evaluación de impacto debe considerar como el cambio afecta los controles de seguridad existentes y si introduce nuevas vulnerabilidades.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },

  // ============================================================
  // CIP-011: Protección de Información (10 preguntas)
  // ============================================================
  {
    id: 'CIP011-Q01',
    cipId: 'CIP-011',
    requirementId: 'R1',
    text: '¿Existe una clasificación de la información asociada a los ciber activos BES?',
    helpText:
      'La clasificación debe identificar la información sensible como diagramas de red, configuraciones de seguridad, procedimientos operativos y datos de vulnerabilidades.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP011-Q02',
    cipId: 'CIP-011',
    requirementId: 'R1',
    text: '¿Se protege la información sensible de ciber activos BES durante su almacenamiento mediante cifrado u otros controles?',
    helpText:
      'La protección puede incluir cifrado de discos, almacenamiento en ubicaciones de acceso restringido o uso de sistemas de gestión de archivos con control de acceso.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP011-Q03',
    cipId: 'CIP-011',
    requirementId: 'R1',
    text: '¿Se protege la información sensible durante su transmisión mediante cifrado?',
    helpText:
      'Toda transmisión de información sensible de ciber activos BES debe utilizar protocolos cifrados como TLS, SSH o VPN.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP011-Q04',
    cipId: 'CIP-011',
    requirementId: 'R1',
    text: '¿Existen controles de acceso que limiten quien puede acceder a la información sensible de ciber activos BES?',
    helpText:
      'Los controles deben basarse en el principio de mínimo privilegio, otorgando acceso solo al personal que necesita la información para sus funciones.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP011-Q05',
    cipId: 'CIP-011',
    requirementId: 'R1',
    text: '¿Se controla la distribución de información sensible como diagramas de red y configuraciones de seguridad?',
    helpText:
      'Debe existir un proceso que rastree quien recibe información sensible y asegure que no se distribuya a personas no autorizadas.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP011-Q06',
    cipId: 'CIP-011',
    requirementId: 'R2',
    text: '¿Existe un procedimiento de destrucción segura de información cuando se retiran ciber activos BES de servicio?',
    helpText:
      'El procedimiento debe especificar los métodos de sanitización aceptables según el tipo de medio, como borrado seguro, desmagnetización o destrucción física.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP011-Q07',
    cipId: 'CIP-011',
    requirementId: 'R2',
    text: '¿Se verifica que la destrucción de información se haya completado correctamente?',
    helpText:
      'La verificación puede incluir intentos de recuperación de datos post-sanitización, certificados de destrucción o registros de auditoría del proceso.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP011-Q08',
    cipId: 'CIP-011',
    requirementId: 'R2',
    text: '¿Se mantienen registros de la destrucción o sanitización de medios que contienen información de ciber activos BES?',
    helpText:
      'Los registros deben incluir descripción del medio, método de sanitización utilizado, fecha, persona responsable y resultado de la verificación.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP011-Q09',
    cipId: 'CIP-011',
    requirementId: 'R2',
    text: '¿Se sanitizan los medios de almacenamiento antes de reutilizarlos para otros fines?',
    helpText:
      'Antes de reutilizar discos, memorias USB u otros medios, se debe eliminar completamente cualquier información sensible de ciber activos BES.',
    applicableImpactLevels: ['high', 'medium', 'low'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP011-Q10',
    cipId: 'CIP-011',
    requirementId: 'R1',
    text: '¿Se capacita al personal sobre los procedimientos de manejo de información sensible de ciber activos BES?',
    helpText:
      'El personal debe conocer la clasificación de información, los procedimientos de manejo seguro y las consecuencias del manejo inadecuado.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },

  // ============================================================
  // CIP-013: Gestión de Riesgo Cadena Suministro (10 preguntas)
  // ============================================================
  {
    id: 'CIP013-Q01',
    cipId: 'CIP-013',
    requirementId: 'R1',
    text: '¿Existe un plan documentado de gestión de riesgo de cadena de suministro para ciber activos BES?',
    helpText:
      'El plan debe abordar la evaluación de riesgos de proveedores, verificación de integridad de software y hardware, y gestión de acceso remoto de proveedores.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP013-Q02',
    cipId: 'CIP-013',
    requirementId: 'R1',
    text: '¿Se evaluan los riesgos de ciberseguridad de los proveedores antes de adquirir ciber activos BES?',
    helpText:
      'La evaluación debe considerar las prácticas de seguridad del proveedor, su historial de vulnerabilidades y su capacidad de respuesta ante incidentes.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP013-Q03',
    cipId: 'CIP-013',
    requirementId: 'R1',
    text: '¿Se incluyen requisitos de ciberseguridad en los contratos con proveedores de ciber activos BES?',
    helpText:
      'Los contratos deben incluir clausulas sobre notificación de vulnerabilidades, actualizaciones de seguridad, acceso remoto controlado y respuesta a incidentes.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP013-Q04',
    cipId: 'CIP-013',
    requirementId: 'R1',
    text: '¿Se verifica la integridad del software y firmware antes de su instalación en ciber activos BES?',
    helpText:
      'La verificación puede incluir comparación de hashes, verificación de firmas digitales y descarga desde fuentes oficiales del fabricante.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP013-Q05',
    cipId: 'CIP-013',
    requirementId: 'R1',
    text: '¿Se gestiona y controla el acceso remoto de proveedores a los ciber activos BES?',
    helpText:
      'El acceso remoto de proveedores debe ser autorizado, monitoreado, registrado y limitado al tiempo y alcance necesario para la tarea específica.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP013-Q06',
    cipId: 'CIP-013',
    requirementId: 'R2',
    text: '¿Se verifican los procesos de desarrollo seguro de los proveedores de software para ciber activos BES?',
    helpText:
      'Solicite evidencia de prácticas de desarrollo seguro como revisiones de código, pruebas de seguridad y gestión de vulnerabilidades en el ciclo de desarrollo.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP013-Q07',
    cipId: 'CIP-013',
    requirementId: 'R2',
    text: '¿Los proveedores notifican oportunamente las vulnerabilidades conocidas que afectan sus productos?',
    helpText:
      'Debe existir un mecanismo formal para que los proveedores comuniquen vulnerabilidades descubiertas y proporcionen parches o medidas de mitigación.',
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
    text: '¿Se revisa el plan de gestión de riesgo de cadena de suministro al menos cada 15 meses?',
    helpText:
      'La revisión debe considerar nuevos proveedores, cambios en las cadenas de suministro existentes y nuevas amenazas identificadas.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },
  {
    id: 'CIP013-Q10',
    cipId: 'CIP-013',
    requirementId: 'R2',
    text: '¿Se mantiene un inventario de proveedores críticos y sus productos asociados a ciber activos BES?',
    helpText:
      'El inventario debe incluir nombre del proveedor, productos suministrados, criticidad del producto y evaluación de riesgo del proveedor.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['generation', 'transmission', 'distribution'],
  },

  // ============================================================
  // CIP-014: Seguridad Física Infraestructura Crítica (10 preguntas)
  // ============================================================
  {
    id: 'CIP014-Q01',
    cipId: 'CIP-014',
    requirementId: 'R1',
    text: '¿Se ha realizado una evaluación de riesgo de seguridad física para las instalaciones de transmisión críticas?',
    helpText:
      'La evaluación debe identificar las instalaciones cuya pérdida podría causar inestabilidad, separación no controlada o eventos en cascada en el sistema eléctrico.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['transmission', 'generation'],
  },
  {
    id: 'CIP014-Q02',
    cipId: 'CIP-014',
    requirementId: 'R1',
    text: '¿La evaluación de riesgo considera amenazas físicas como sabotaje, vandalismo y terrorismo?',
    helpText:
      'Las amenazas evaluadas deben incluir ataques dirigidos con armas de fuego, explosivos, intrusión, sabotaje interno y desastres naturales.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['transmission', 'generation'],
  },
  {
    id: 'CIP014-Q03',
    cipId: 'CIP-014',
    requirementId: 'R1',
    text: '¿Se identifican las vulnerabilidades físicas específicas de cada instalación crítica?',
    helpText:
      'Las vulnerabilidades pueden incluir líneas de vista desde áreas publicas, accesibilidad perimetral, tiempo de respuesta de fuerzas de seguridad y visibilidad de equipos críticos.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['transmission', 'generation'],
  },
  {
    id: 'CIP014-Q04',
    cipId: 'CIP-014',
    requirementId: 'R2',
    text: '¿Se ha obtenido una evaluación de terceros independiente que valide la evaluación de riesgo?',
    helpText:
      'El tercero debe ser una entidad independiente con experiencia en seguridad física de infraestructura crítica, que no haya participado en la evaluación inicial.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['transmission', 'generation'],
  },
  {
    id: 'CIP014-Q05',
    cipId: 'CIP-014',
    requirementId: 'R2',
    text: '¿Las recomendaciones de la evaluación de terceros han sido incorporadas en los planes de seguridad?',
    helpText:
      'Debe existir un seguimiento documentado de las recomendaciones del tercero, indicando cuales fueron implementadas y la justificación para aquellas que no se adoptaron.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['transmission', 'generation'],
  },
  {
    id: 'CIP014-Q06',
    cipId: 'CIP-014',
    requirementId: 'R3',
    text: '¿Existe un plan de seguridad física documentado que aborde las amenazas y vulnerabilidades identificadas?',
    helpText:
      'El plan debe incluir barreras físicas, sistemas de vigilancia, iluminación, controles de acceso, patrullas y coordinación con fuerzas de seguridad.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['transmission', 'generation'],
  },
  {
    id: 'CIP014-Q07',
    cipId: 'CIP-014',
    requirementId: 'R3',
    text: '¿Se han implementado medidas de disuasión física como cercas reforzadas, iluminación perimetral y videovigilancia?',
    helpText:
      'Las medidas de disuasión deben ser proporcionales al nivel de riesgo identificado y cubrir todas las áreas vulnerables de la instalación.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['transmission', 'generation'],
  },
  {
    id: 'CIP014-Q08',
    cipId: 'CIP-014',
    requirementId: 'R3',
    text: '¿Existe coordinación con Carabineros u otras fuerzas de seguridad para la respuesta ante incidentes físicos?',
    helpText:
      'Debe existir un protocolo de coordinación que incluya tiempos de respuesta esperados, puntos de contacto y procedimientos de activación.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['transmission', 'generation'],
  },
  {
    id: 'CIP014-Q09',
    cipId: 'CIP-014',
    requirementId: 'R1',
    text: '¿Se actualiza la evaluación de riesgo cuando ocurren cambios significativos en las instalaciones o su entorno?',
    helpText:
      'Cambios significativos incluyen modificaciones estructurales, nuevas construcciones en el entorno, cambios en el nivel de amenaza o incidentes de seguridad.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['transmission', 'generation'],
  },
  {
    id: 'CIP014-Q10',
    cipId: 'CIP-014',
    requirementId: 'R3',
    text: '¿Se realizan pruebas periódicas de los sistemas de seguridad física como cámaras, alarmas y controles de acceso?',
    helpText:
      'Las pruebas deben verificar el correcto funcionamiento de todos los componentes del sistema de seguridad y la efectividad de los procedimientos de respuesta.',
    applicableImpactLevels: ['high', 'medium'],
    applicableEntityTypes: ['transmission', 'generation'],
  },
];
