import { CIPStandard } from './types';

export const cipStandards: CIPStandard[] = [
  {
    id: 'CIP-002',
    name: 'Categorizacion de Ciber Activos BES',
    description:
      'Identificar y categorizar los ciber activos del Sistema Electrico Nacional (BES) segun su impacto en la operacion confiable del sistema electrico, conforme a los criterios establecidos por el Coordinador Electrico Nacional.',
    weight: 10,
    applicableImpactLevels: ['high', 'medium', 'low'],
    requirements: [
      {
        id: 'R1',
        description:
          'Identificar y categorizar cada ciber activo BES segun los criterios de impacto alto, medio o bajo, documentando la justificacion de cada categorizacion.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R2',
        description:
          'Revisar y actualizar la categorizacion de ciber activos BES al menos cada 15 meses, o cuando ocurra un cambio significativo en la infraestructura.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
    ],
  },
  {
    id: 'CIP-003',
    name: 'Controles de Gestion de Seguridad',
    description:
      'Establecer politicas, planes y controles de gestion de seguridad para proteger los ciber activos BES, asegurando una gobernanza adecuada de la ciberseguridad en la organizacion.',
    weight: 10,
    applicableImpactLevels: ['high', 'medium', 'low'],
    requirements: [
      {
        id: 'R1',
        description:
          'Documentar y mantener una o mas politicas de ciberseguridad que aborden la proteccion de los ciber activos BES, aprobadas por la alta direccion.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R2',
        description:
          'Designar un lider senior de ciberseguridad responsable de autorizar y supervisar la implementacion de las politicas de seguridad.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R3',
        description:
          'Implementar un programa de concientizacion en ciberseguridad para todo el personal con acceso autorizado a ciber activos BES.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R4',
        description:
          'Implementar controles de acceso electronico para ciber activos de bajo impacto, incluyendo autenticacion y restriccion de acceso remoto.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
    ],
  },
  {
    id: 'CIP-004',
    name: 'Personal y Capacitacion',
    description:
      'Asegurar que el personal con acceso a ciber activos BES tenga la capacitacion adecuada, evaluacion de antecedentes y que los accesos sean gestionados apropiadamente durante todo el ciclo de vida laboral.',
    weight: 8,
    applicableImpactLevels: ['high', 'medium', 'low'],
    requirements: [
      {
        id: 'R1',
        description:
          'Implementar un programa de concientizacion de seguridad que refuerce las practicas de ciberseguridad al menos trimestralmente.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R2',
        description:
          'Proveer capacitacion en ciberseguridad basada en roles antes de otorgar acceso autorizado y al menos cada 15 meses.',
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
          'Revocar el acceso autorizado dentro de 24 horas para personal que ya no requiere acceso, y dentro de 30 dias para transferencias internas.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
    ],
  },
  {
    id: 'CIP-005',
    name: 'Perimetros de Seguridad Electronica',
    description:
      'Definir y proteger los perimetros de seguridad electronica (ESP) para controlar el acceso a los ciber activos BES, monitoreando las comunicaciones y detectando actividades maliciosas.',
    weight: 10,
    applicableImpactLevels: ['high', 'medium', 'low'],
    requirements: [
      {
        id: 'R1',
        description:
          'Definir y documentar los perimetros de seguridad electronica (ESP) para todos los ciber activos BES de alto y medio impacto.',
        applicableImpactLevels: ['high', 'medium'],
      },
      {
        id: 'R2',
        description:
          'Implementar controles en todos los puntos de acceso electronico (EAP), incluyendo autenticacion multifactor para acceso remoto interactivo.',
        applicableImpactLevels: ['high', 'medium'],
      },
      {
        id: 'R3',
        description:
          'Implementar metodos para detectar comunicaciones maliciosas, incluyendo sistemas de deteccion de intrusiones en los puntos de acceso electronico.',
        applicableImpactLevels: ['high', 'medium'],
      },
    ],
  },
  {
    id: 'CIP-006',
    name: 'Seguridad Fisica',
    description:
      'Implementar controles de seguridad fisica para proteger los ciber activos BES y los perimetros de seguridad fisica (PSP), incluyendo control de acceso, monitoreo y gestion de visitantes.',
    weight: 8,
    applicableImpactLevels: ['high', 'medium', 'low'],
    requirements: [
      {
        id: 'R1',
        description:
          'Implementar un plan de seguridad fisica que defina perimetros de seguridad fisica (PSP) con controles de acceso operacionales y de monitoreo.',
        applicableImpactLevels: ['high', 'medium'],
      },
      {
        id: 'R2',
        description:
          'Implementar un programa de control de visitantes que requiera acompanamiento continuo y registro de visitantes dentro del perimetro de seguridad fisica.',
        applicableImpactLevels: ['high', 'medium'],
      },
      {
        id: 'R3',
        description:
          'Implementar un sistema de monitoreo de acceso fisico que registre entradas y salidas autorizadas y genere alertas ante accesos no autorizados.',
        applicableImpactLevels: ['high', 'medium'],
      },
    ],
  },
  {
    id: 'CIP-007',
    name: 'Gestion de Seguridad de Sistemas',
    description:
      'Gestionar la seguridad de los sistemas operativos y aplicaciones de los ciber activos BES, incluyendo gestion de puertos, parches, malware, eventos de seguridad y control de acceso.',
    weight: 10,
    applicableImpactLevels: ['high', 'medium', 'low'],
    requirements: [
      {
        id: 'R1',
        description:
          'Mantener habilitados solo los puertos y servicios logicos necesarios para la operacion normal y de emergencia de los ciber activos BES.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R2',
        description:
          'Implementar un programa de gestion de parches de seguridad que evalúe e instale parches aplicables dentro de 35 dias o documente planes de mitigacion.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R3',
        description:
          'Implementar metodos de prevencion de codigo malicioso (antivirus, listas blancas de aplicaciones) en todos los ciber activos BES.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R4',
        description:
          'Implementar monitoreo de eventos de seguridad que genere alertas ante intentos de acceso fallidos, cambios de configuracion y actividades anomalas.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R5',
        description:
          'Implementar controles de acceso al sistema, incluyendo gestion de cuentas, autenticacion y politicas de contrasenas robustas.',
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
          'Documentar un plan de respuesta a incidentes de ciberseguridad que incluya procedimientos de identificacion, clasificacion, respuesta y reporte.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R2',
        description:
          'Implementar el plan de respuesta a incidentes incluyendo roles definidos, procedimientos de comunicacion y criterios de activacion.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R3',
        description:
          'Revisar y actualizar el plan de respuesta a incidentes al menos cada 15 meses y despues de cada incidente significativo.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R4',
        description:
          'Notificar incidentes de ciberseguridad al Coordinador Electrico Nacional y al CSIRT del sector electrico dentro de los plazos establecidos.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
    ],
  },
  {
    id: 'CIP-009',
    name: 'Planes de Recuperacion',
    description:
      'Desarrollar e implementar planes de recuperacion para asegurar la restauracion oportuna de los ciber activos BES despues de un incidente de ciberseguridad.',
    weight: 8,
    applicableImpactLevels: ['high', 'medium', 'low'],
    requirements: [
      {
        id: 'R1',
        description:
          'Documentar planes de recuperacion que incluyan procedimientos de restauracion, respaldos y condiciones de activacion para cada ciber activo BES.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R2',
        description:
          'Implementar los planes de recuperacion incluyendo respaldos verificados, datos de configuracion base y procesos de restauracion probados.',
        applicableImpactLevels: ['high', 'medium'],
      },
      {
        id: 'R3',
        description:
          'Realizar ejercicios de recuperacion al menos cada 15 meses y actualizar los planes basandose en los resultados de los ejercicios.',
        applicableImpactLevels: ['high', 'medium'],
      },
    ],
  },
  {
    id: 'CIP-010',
    name: 'Gestion de Cambios y Vulnerabilidades',
    description:
      'Gestionar los cambios de configuracion y las vulnerabilidades de los ciber activos BES para prevenir y detectar modificaciones no autorizadas que puedan afectar la seguridad del sistema electrico.',
    weight: 8,
    applicableImpactLevels: ['high', 'medium', 'low'],
    requirements: [
      {
        id: 'R1',
        description:
          'Documentar y mantener una configuracion base para cada ciber activo BES, incluyendo sistema operativo, puertos, parches instalados y software autorizado.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
      {
        id: 'R2',
        description:
          'Monitorear cambios en la configuracion base y generar alertas ante modificaciones no autorizadas al menos cada 35 dias.',
        applicableImpactLevels: ['high', 'medium'],
      },
      {
        id: 'R3',
        description:
          'Realizar evaluaciones de vulnerabilidad al menos cada 15 meses y documentar planes de remediacion para las vulnerabilidades identificadas.',
        applicableImpactLevels: ['high', 'medium'],
      },
      {
        id: 'R4',
        description:
          'Implementar planes de proteccion para ciber activos transitorios (laptops, dispositivos de diagnostico) antes de conectarlos a ciber activos BES.',
        applicableImpactLevels: ['high', 'medium'],
      },
    ],
  },
  {
    id: 'CIP-011',
    name: 'Proteccion de Informacion',
    description:
      'Proteger la informacion de los ciber activos BES durante su almacenamiento, transito y uso, asi como asegurar la destruccion adecuada de informacion en activos que se retiran de servicio.',
    weight: 6,
    applicableImpactLevels: ['high', 'medium', 'low'],
    requirements: [
      {
        id: 'R1',
        description:
          'Implementar metodos de proteccion de informacion de ciber activos BES en almacenamiento, transito y uso, incluyendo cifrado y controles de acceso.',
        applicableImpactLevels: ['high', 'medium'],
      },
      {
        id: 'R2',
        description:
          'Implementar procesos de destruccion segura de informacion y sanitizacion de medios antes de la reutilizacion o disposicion de ciber activos BES.',
        applicableImpactLevels: ['high', 'medium', 'low'],
      },
    ],
  },
  {
    id: 'CIP-013',
    name: 'Gestion de Riesgo Cadena Suministro',
    description:
      'Gestionar los riesgos de ciberseguridad asociados a la cadena de suministro de los ciber activos BES, evaluando y controlando los riesgos de proveedores y vendedores.',
    weight: 7,
    applicableImpactLevels: ['high', 'medium', 'low'],
    requirements: [
      {
        id: 'R1',
        description:
          'Desarrollar e implementar un plan de gestion de riesgo de cadena de suministro que incluya evaluacion de proveedores, integridad de software y notificacion de incidentes.',
        applicableImpactLevels: ['high', 'medium'],
      },
      {
        id: 'R2',
        description:
          'Verificar los procesos de seguridad del proveedor, incluyendo acceso remoto, integridad de actualizaciones y notificacion de vulnerabilidades conocidas.',
        applicableImpactLevels: ['high', 'medium'],
      },
    ],
  },
  {
    id: 'CIP-014',
    name: 'Seguridad Fisica Infraestructura Critica',
    description:
      'Identificar y proteger las instalaciones de transmision e infraestructura critica cuya destruccion o compromiso podria afectar la estabilidad del Sistema Electrico Nacional.',
    weight: 7,
    applicableImpactLevels: ['high', 'medium', 'low'],
    requirements: [
      {
        id: 'R1',
        description:
          'Realizar una evaluacion de riesgo de seguridad fisica para identificar las instalaciones de transmision criticas y sus vulnerabilidades.',
        applicableImpactLevels: ['high', 'medium'],
      },
      {
        id: 'R2',
        description:
          'Obtener una evaluacion de terceros independiente que valide la evaluacion de riesgo inicial y las medidas de seguridad propuestas.',
        applicableImpactLevels: ['high', 'medium'],
      },
      {
        id: 'R3',
        description:
          'Desarrollar e implementar un plan de seguridad fisica documentado que aborde las amenazas y vulnerabilidades identificadas en la evaluacion de riesgo.',
        applicableImpactLevels: ['high', 'medium'],
      },
    ],
  },
];
