import { CIPStandard } from './types';

export const cipStandards: CIPStandard[] = [
  {
    id: 'CIP-002',
    name: 'Categorización de Ciber Activos BES',
    description:
      'Identificar y categorizar los ciber activos del Sistema Eléctrico Nacional (BES) según su impacto en la operación confiable del sistema eléctrico, conforme a los criterios establecidos por el Coordinador Eléctrico Nacional.',
    weight: 10,
    applicableImpactLevels: ['high', 'medium', 'low'],
    requirements: [
      {
        id: 'R1',
        description:
          'Identificar y categorizar cada ciber activo BES según los criterios de impacto alto, medio o bajo, documentando la justificación de cada categorización.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R2',
        description:
          'Revisar y actualizar la categorización de ciber activos BES al menos cada 15 meses, o cuando ocurra un cambio significativo en la infraestructura.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
    ],
  },
  {
    id: 'CIP-003',
    name: 'Controles de Gestión de Seguridad',
    description:
      'Establecer políticas, planes y controles de gestión de seguridad para proteger los ciber activos BES, asegurando una gobernanza adecuada de la ciberseguridad en la organización.',
    weight: 10,
    applicableImpactLevels: ['high', 'medium', 'low'],
    requirements: [
      {
        id: 'R1',
        description:
          'Documentar y mantener una o más políticas de ciberseguridad que aborden la protección de los ciber activos BES, aprobadas por la alta dirección.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R2',
        description:
          'Designar un líder senior de ciberseguridad responsable de autorizar y supervisar la implementación de las políticas de seguridad.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R3',
        description:
          'Implementar un programa de concientización en ciberseguridad para todo el personal con acceso autorizado a ciber activos BES.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R4',
        description:
          'Implementar controles de acceso electrónico para ciber activos de bajo impacto, incluyendo autenticación y restricción de acceso remoto.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
    ],
  },
  {
    id: 'CIP-004',
    name: 'Personal y Capacitación',
    description:
      'Asegurar que el personal con acceso a ciber activos BES tenga la capacitación adecuada, evaluación de antecedentes y que los accesos sean gestionados apropiadamente durante todo el ciclo de vida laboral.',
    weight: 8,
    applicableImpactLevels: ['high', 'medium', 'low'],
    requirements: [
      {
        id: 'R1',
        description:
          'Implementar un programa de concientización de seguridad que refuerce las prácticas de ciberseguridad al menos trimestralmente.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R2',
        description:
          'Proveer capacitación en ciberseguridad basada en roles antes de otorgar acceso autorizado y al menos cada 15 meses.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R3',
        description:
          'Realizar evaluaciones de antecedentes personales antes de otorgar acceso autorizado a ciber activos BES.',
        applicableImpactLevels: ['high', 'medium'],
      },
      {
        id: 'R4',
        description:
          'Revocar el acceso autorizado dentro de 24 horas para personal que ya no requiere acceso, y dentro de 30 días para transferencias internas.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
    ],
  },
  {
    id: 'CIP-005',
    name: 'Perímetros de Seguridad Electrónica',
    description:
      'Definir y proteger los perímetros de seguridad electrónica (ESP) para controlar el acceso a los ciber activos BES, monitoreando las comunicaciones y detectando actividades maliciosas.',
    weight: 10,
    applicableImpactLevels: ['high', 'medium', 'low'],
    requirements: [
      {
        id: 'R1',
        description:
          'Definir y documentar los perímetros de seguridad electrónica (ESP) para todos los ciber activos BES de alto y medio impacto.',
        applicableImpactLevels: ['high', 'medium'],
      },
      {
        id: 'R2',
        description:
          'Implementar controles en todos los puntos de acceso electrónico (EAP), incluyendo autenticación multifactor para acceso remoto interactivo.',
        applicableImpactLevels: ['high', 'medium'],
      },
      {
        id: 'R3',
        description:
          'Implementar métodos para detectar comunicaciones maliciosas, incluyendo sistemas de detección de intrusiones en los puntos de acceso electrónico.',
        applicableImpactLevels: ['high', 'medium'],
      },
    ],
  },
  {
    id: 'CIP-006',
    name: 'Seguridad Física',
    description:
      'Implementar controles de seguridad física para proteger los ciber activos BES y los perímetros de seguridad física (PSP), incluyendo control de acceso, monitoreo y gestión de visitantes.',
    weight: 8,
    applicableImpactLevels: ['high', 'medium', 'low'],
    requirements: [
      {
        id: 'R1',
        description:
          'Implementar un plan de seguridad física que defina perímetros de seguridad física (PSP) con controles de acceso operacionales y de monitoreo.',
        applicableImpactLevels: ['high', 'medium'],
      },
      {
        id: 'R2',
        description:
          'Implementar un programa de control de visitantes que requiera acompañamiento continuo y registro de visitantes dentro del perímetro de seguridad física.',
        applicableImpactLevels: ['high', 'medium'],
      },
      {
        id: 'R3',
        description:
          'Implementar un sistema de monitoreo de acceso físico que registre entradas y salidas autorizadas y genere alertas ante accesos no autorizados.',
        applicableImpactLevels: ['high', 'medium'],
      },
    ],
  },
  {
    id: 'CIP-007',
    name: 'Gestión de Seguridad de Sistemas',
    description:
      'Gestionar la seguridad de los sistemas operativos y aplicaciones de los ciber activos BES, incluyendo gestión de puertos, parches, malware, eventos de seguridad y control de acceso.',
    weight: 10,
    applicableImpactLevels: ['high', 'medium', 'low'],
    requirements: [
      {
        id: 'R1',
        description:
          'Mantener habilitados solo los puertos y servicios lógicos necesarios para la operación normal y de emergencia de los ciber activos BES.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R2',
        description:
          'Implementar un programa de gestión de parches de seguridad que evalúe e instale parches aplicables dentro de 35 días o documente planes de mitigación.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R3',
        description:
          'Implementar métodos de prevención de código malicioso (antivirus, listas blancas de aplicaciones) en todos los ciber activos BES.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R4',
        description:
          'Implementar monitoreo de eventos de seguridad que genere alertas ante intentos de acceso fallidos, cambios de configuración y actividades anómalas.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R5',
        description:
          'Implementar controles de acceso al sistema, incluyendo gestión de cuentas, autenticación y políticas de contraseñas robustas.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
    ],
  },
  {
    id: 'CIP-008',
    name: 'Reporte y Respuesta a Incidentes',
    description:
      'Establecer planes y procedimientos de respuesta a incidentes de ciberseguridad, asegurando la capacidad de identificar, clasificar, responder y reportar incidentes que afecten los ciber activos BES.',
    weight: 8,
    applicableImpactLevels: ['high', 'medium', 'low'],
    requirements: [
      {
        id: 'R1',
        description:
          'Documentar un plan de respuesta a incidentes de ciberseguridad que incluya procedimientos de identificación, clasificación, respuesta y reporte.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R2',
        description:
          'Implementar el plan de respuesta a incidentes incluyendo roles definidos, procedimientos de comunicación y criterios de activación.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R3',
        description:
          'Revisar y actualizar el plan de respuesta a incidentes al menos cada 15 meses y después de cada incidente significativo.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R4',
        description:
          'Notificar incidentes de ciberseguridad al Coordinador Eléctrico Nacional y al CSIRT del sector eléctrico dentro de los plazos establecidos.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
    ],
  },
  {
    id: 'CIP-009',
    name: 'Planes de Recuperación',
    description:
      'Desarrollar e implementar planes de recuperación para asegurar la restauración oportuna de los ciber activos BES después de un incidente de ciberseguridad.',
    weight: 8,
    applicableImpactLevels: ['high', 'medium', 'low'],
    requirements: [
      {
        id: 'R1',
        description:
          'Documentar planes de recuperación que incluyan procedimientos de restauración, respaldos y condiciones de activación para cada ciber activo BES.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R2',
        description:
          'Implementar los planes de recuperación incluyendo respaldos verificados, datos de configuración base y procesos de restauración probados.',
        applicableImpactLevels: ['high', 'medium'],
      },
      {
        id: 'R3',
        description:
          'Realizar ejercicios de recuperación al menos cada 15 meses y actualizar los planes basándose en los resultados de los ejercicios.',
        applicableImpactLevels: ['high', 'medium'],
      },
    ],
  },
  {
    id: 'CIP-010',
    name: 'Gestión de Cambios y Vulnerabilidades',
    description:
      'Gestionar los cambios de configuración y las vulnerabilidades de los ciber activos BES para prevenir y detectar modificaciones no autorizadas que puedan afectar la seguridad del sistema eléctrico.',
    weight: 8,
    applicableImpactLevels: ['high', 'medium', 'low'],
    requirements: [
      {
        id: 'R1',
        description:
          'Documentar y mantener una configuración base para cada ciber activo BES, incluyendo sistema operativo, puertos, parches instalados y software autorizado.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R2',
        description:
          'Monitorear cambios en la configuración base y generar alertas ante modificaciones no autorizadas al menos cada 35 días.',
        applicableImpactLevels: ['high', 'medium'],
      },
      {
        id: 'R3',
        description:
          'Realizar evaluaciones de vulnerabilidad al menos cada 15 meses y documentar planes de remediación para las vulnerabilidades identificadas.',
        applicableImpactLevels: ['high', 'medium'],
      },
      {
        id: 'R4',
        description:
          'Implementar planes de protección para ciber activos transitorios (laptops, dispositivos de diagnóstico) antes de conectarlos a ciber activos BES.',
        applicableImpactLevels: ['high', 'medium'],
      },
    ],
  },
  {
    id: 'CIP-011',
    name: 'Protección de Información',
    description:
      'Proteger la información de los ciber activos BES durante su almacenamiento, tránsito y uso, así como asegurar la destrucción adecuada de información en activos que se retiran de servicio.',
    weight: 6,
    applicableImpactLevels: ['high', 'medium', 'low'],
    requirements: [
      {
        id: 'R1',
        description:
          'Implementar métodos de protección de información de ciber activos BES en almacenamiento, tránsito y uso, incluyendo cifrado y controles de acceso.',
        applicableImpactLevels: ['high', 'medium'],
      },
      {
        id: 'R2',
        description:
          'Implementar procesos de destrucción segura de información y sanitización de medios antes de la reutilización o disposición de ciber activos BES.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
    ],
  },
  {
    id: 'CIP-013',
    name: 'Gestión de Riesgo Cadena Suministro',
    description:
      'Gestionar los riesgos de ciberseguridad asociados a la cadena de suministro de los ciber activos BES, evaluando y controlando los riesgos de proveedores y vendedores.',
    weight: 7,
    applicableImpactLevels: ['high', 'medium', 'low'],
    requirements: [
      {
        id: 'R1',
        description:
          'Desarrollar e implementar un plan de gestión de riesgo de cadena de suministro que incluya evaluación de proveedores, integridad de software y notificación de incidentes.',
        applicableImpactLevels: ['high', 'medium'],
      },
      {
        id: 'R2',
        description:
          'Verificar los procesos de seguridad del proveedor, incluyendo acceso remoto, integridad de actualizaciones y notificación de vulnerabilidades conocidas.',
        applicableImpactLevels: ['high', 'medium'],
      },
    ],
  },
  {
    id: 'CIP-014',
    name: 'Seguridad Física Infraestructura Crítica',
    description:
      'Identificar y proteger las instalaciones de transmisión e infraestructura crítica cuya destrucción o compromiso podría afectar la estabilidad del Sistema Eléctrico Nacional.',
    weight: 7,
    applicableImpactLevels: ['high', 'medium', 'low'],
    requirements: [
      {
        id: 'R1',
        description:
          'Realizar una evaluación de riesgo de seguridad física para identificar las instalaciones de transmisión críticas y sus vulnerabilidades.',
        applicableImpactLevels: ['high', 'medium'],
      },
      {
        id: 'R2',
        description:
          'Obtener una evaluación de terceros independiente que valide la evaluación de riesgo inicial y las medidas de seguridad propuestas.',
        applicableImpactLevels: ['high', 'medium'],
      },
      {
        id: 'R3',
        description:
          'Desarrollar e implementar un plan de seguridad física documentado que aborde las amenazas y vulnerabilidades identificadas en la evaluación de riesgo.',
        applicableImpactLevels: ['high', 'medium'],
      },
    ],
  },
];
