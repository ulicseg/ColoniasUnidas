export interface FinancialSubItem {
  id: string;
  concepto: string;
  monto: number;
  descripcion: string;
}

export interface FinancialItem {
  id: string;
  nombre: string;
  monto: number;
  porcentaje: number;
  descripcion: string;
  color?: string;
  detalles: FinancialSubItem[];
}

export interface FinancialData {
  periodo: string;
  fechaActualizacion: string;
  ingresos: FinancialItem[];
  egresos: FinancialItem[];
  totalIngresos: number;
  totalEgresos: number;
  balance: number;
}

export interface MonthlyCoparticipation {
  mes: string;
  cuotas: number;
  monto: number;
  descripcion: string;
  destacado?: boolean;
}

// Datos de Coparticipación Provincial mes a mes en 2026 (Lenguaje simple y claro)
export const coparticipacionMensual: MonthlyCoparticipation[] = [
  {
    mes: 'Mayo 2026',
    cuotas: 4,
    monto: 245981533,
    descripcion: 'Mes de mayor ingreso registrado en el año por actividad económica provincial.',
    destacado: true
  },
  {
    mes: 'Julio 2026',
    cuotas: 4,
    monto: 206361493,
    descripcion: 'Acreditación completa de las 4 semanas de coparticipación.'
  },
  {
    mes: 'Agosto 2026',
    cuotas: 4,
    monto: 189715992,
    descripcion: 'Acreditación completa de las 4 semanas de coparticipación.'
  },
  {
    mes: 'Enero 2026',
    cuotas: 4,
    monto: 186084143,
    descripcion: 'Fondos iniciales de coparticipación del nuevo año.'
  },
  {
    mes: 'Junio 2026',
    cuotas: 4,
    monto: 163371092,
    descripcion: 'Recursos provinciales destinados a servicios generales de mitad de año.'
  },
  {
    mes: 'Abril 2026',
    cuotas: 4,
    monto: 148406629,
    descripcion: 'Transferencias semanales ordinarias enviadas por Provincia.'
  },
  {
    mes: 'Febrero 2026',
    cuotas: 4,
    monto: 143847307,
    descripcion: 'Acreditaciones de coparticipación del segundo mes del año.'
  },
  {
    mes: 'Marzo 2026',
    cuotas: 4,
    monto: 124612093,
    descripcion: 'Ingresos coparticipables provinciales correspondientes a marzo.'
  },
  {
    mes: 'Ajuste Dic. 2025',
    cuotas: 1,
    monto: 94499124,
    descripcion: 'Liquidación final del año anterior cobrada en los primeros días de enero.'
  },
  {
    mes: 'Septiembre 2026',
    cuotas: 2,
    monto: 33711711,
    descripcion: 'Primeras cuotas de coparticipación acreditadas en el mes.'
  }
];

const rawIngresos = [
  {
    id: 'fpm',
    nombre: 'Fondo de Participación Municipal (FPM)',
    monto: 1536591116.95,
    descripcion: 'Fondos girados por la Provincia correspondientes a la coparticipación provincial y nacional.',
    color: '#477f32',
    detalles: [
      {
        id: 'fpm-det',
        concepto: 'Liquidaciones FPM Enero a Septiembre 2026',
        monto: 1536591116.95,
        descripcion: 'Transferencias periódicas del Fondo de Participación Municipal según liquidaciones de la Tesorería General.'
      }
    ]
  },
  {
    id: 'conv',
    nombre: 'Transferencias por Convenios',
    monto: 6500000,
    descripcion: 'Aportes por convenios específicos con la Provincia.',
    color: '#5b9e42',
    detalles: [
      {
        id: 'conv-1',
        concepto: '97° Aniv. de su Fundación',
        monto: 5000000,
        descripcion: 'Transferencia por convenio (Res N° 389/26).'
      },
      {
        id: 'conv-2',
        concepto: 'Ruta Carnavales 2026',
        monto: 1500000,
        descripcion: 'Transferencia por convenio (Res N° 316/26).'
      }
    ]
  },
  {
    id: 'rec-local',
    nombre: 'Recaudación Judicializada',
    monto: 32657,
    descripcion: 'Ingresos por impuestos y tasas locales a través de juzgados u organismos provinciales.',
    color: '#76b95d',
    detalles: [
      {
        id: 'rec-loc-1',
        concepto: 'Impuesto Inmobiliario y Tasas',
        monto: 32657,
        descripcion: 'Pagos correspondientes al ejercicio 2026 (Juzgado de Paz Colonias Unidas).'
      }
    ]
  }
];

// Egresos con montos en 0 hasta contar con la rendición oficial fehaciente de la Municipalidad
const rawEgresos = [
  {
    id: 'obras-pub',
    nombre: 'Obras Públicas e Infraestructura',
    monto: 0,
    descripcion: 'Pavimentación de calles, arreglo de caminos rurales, luces LED en barrios y desagües.',
    color: '#d97706',
    detalles: [
      {
        id: 'obras-1',
        concepto: 'Pavimento en Avenidas Principales',
        monto: 0,
        descripcion: 'Asfalto y cordón cuneta para mejorar la circulación vial.'
      },
      {
        id: 'obras-2',
        concepto: 'Nuevas Luces LED en la Ciudad',
        monto: 0,
        descripcion: 'Instalación de luminarias LED en barrios de la ciudad.'
      },
      {
        id: 'obras-3',
        concepto: 'Desagües y Obras Anti-inundaciones',
        monto: 0,
        descripcion: 'Canales y zanjas de hormigón para evacuación hídrica.'
      },
      {
        id: 'obras-4',
        concepto: 'Enripiado y Arreglo de Caminos Rurales',
        monto: 0,
        descripcion: 'Mantenimiento de caminos rurales para productores.'
      }
    ]
  },
  {
    id: 'sueldos-pers',
    nombre: 'Sueldos del Personal Municipal',
    monto: 0,
    descripcion: 'Salarios mensuales, aportes de jubilación y ropa de trabajo de los empleados municipales.',
    color: '#f59e0b',
    detalles: [
      {
        id: 'sueldos-1',
        concepto: 'Sueldos Netos de Empleados y Trabajadores',
        monto: 0,
        descripcion: 'Haberes de personal administrativo, recolección y maestranza.'
      },
      {
        id: 'sueldos-2',
        concepto: 'Jubilaciones y Obra Social (InSSSeP)',
        monto: 0,
        descripcion: 'Aportes previsionales y salud de los trabajadores.'
      },
      {
        id: 'sueldos-3',
        concepto: 'Ropa de Trabajo y Calzado de Seguridad',
        monto: 0,
        descripcion: 'Uniformes e indumentaria de protección laboral.'
      }
    ]
  },
  {
    id: 'mant-urbano',
    nombre: 'Limpieza y Servicios Urbanos',
    monto: 0,
    descripcion: 'Recolección diaria de basura, desmalezado de plazas, maquinaria y combustible.',
    color: '#fbbf24',
    detalles: [
      {
        id: 'mant-1',
        concepto: 'Combustible para Camiones y Tractores',
        monto: 0,
        descripcion: 'Gasoil para vehículos de servicios urbanos y desmalezadoras.'
      },
      {
        id: 'mant-2',
        concepto: 'Servicio de Recolección de Residuos',
        monto: 0,
        descripcion: 'Operatividad de limpieza domiciliaria e higiene urbana.'
      },
      {
        id: 'mant-3',
        concepto: 'Reparación y Repuestos de Maquinarias',
        monto: 0,
        descripcion: 'Mantenimiento mecánico del parque automotor municipal.'
      }
    ]
  },
  {
    id: 'salud',
    nombre: 'Salud y Ayuda Social a Vecinos',
    monto: 0,
    descripcion: 'Medicamentos gratuitos, ambulancia municipal y asistencia de emergencia a familias.',
    color: '#d99726',
    detalles: [
      {
        id: 'salud-1',
        concepto: 'Remedios e Insumos para el Centro de Salud',
        monto: 0,
        descripcion: 'Medicamentos y descartables para atención primaria.'
      },
      {
        id: 'salud-2',
        concepto: 'Ambulancia Municipal 24hs',
        monto: 0,
        descripcion: 'Disponibilidad de unidad de traslado sanitario.'
      },
      {
        id: 'salud-3',
        concepto: 'Módulos Alimentarios y Ayuda de Emergencia',
        monto: 0,
        descripcion: 'Asistencia social a familias en situación de vulnerabilidad.'
      }
    ]
  },
  {
    id: 'educacion-cultura',
    nombre: 'Educación, Escuelas y Deporte',
    monto: 0,
    descripcion: 'Apoyo a las escuelas de la localidad, becas estudiantiles, talleres de oficios y festivales.',
    color: '#b45309',
    detalles: [
      {
        id: 'edu-1',
        concepto: 'Carnavales y Fiestas de la Ciudad',
        monto: 0,
        descripcion: 'Organización de eventos culturales y comparsas comunitarias.'
      },
      {
        id: 'edu-2',
        concepto: 'Becas y Ayuda a Escuelas Públicas',
        monto: 0,
        descripcion: 'Fondo de asistencia educativa y apoyo estudiantil.'
      },
      {
        id: 'edu-3',
        concepto: 'Deportes y Cursos de Oficios Gratuitos',
        monto: 0,
        descripcion: 'Materiales deportivos y talleres comunitarios.'
      }
    ]
  },
  {
    id: 'admin',
    nombre: 'Administración y Atención al Vecino',
    monto: 0,
    descripcion: 'Internet en oficinas públicas, sistemas de atención al ciudadano y gastos de oficina.',
    color: '#92400e',
    detalles: [
      {
        id: 'admin-1',
        concepto: 'Internet y Sistemas Informáticos',
        monto: 0,
        descripcion: 'Conectividad corporativa y licencias de gestión.'
      },
      {
        id: 'admin-2',
        concepto: 'Papelería e Imprenta Municipal',
        monto: 0,
        descripcion: 'Formularios e insumos de atención al público.'
      },
      {
        id: 'admin-3',
        concepto: 'Servicios de Teléfono y Luz de Dependencias',
        monto: 0,
        descripcion: 'Servicios públicos de dependencias municipales.'
      }
    ]
  }
];

// Calculamos totales dinámicamente
export const totalIngresos = rawIngresos.reduce((acc, item) => acc + item.monto, 0);
export const totalEgresos = rawEgresos.reduce((acc, item) => acc + item.monto, 0);
export const balance = totalIngresos - totalEgresos;
export const fechaActualizacion = '19 de Septiembre de 2026';
export const periodoActual = 'Septiembre 2026';

// Exportamos datos enriquecidos con porcentaje
export const ingresos: FinancialItem[] = rawIngresos.map(item => ({
  ...item,
  porcentaje: Math.round((item.monto / totalIngresos) * 100)
}));

export const egresos: FinancialItem[] = rawEgresos.map(item => ({
  ...item,
  porcentaje: 0
}));

export const mockFinancialData: FinancialData = {
  periodo: periodoActual,
  fechaActualizacion,
  ingresos,
  egresos,
  totalIngresos,
  totalEgresos,
  balance
};

// Formateador de moneda en pesos argentinos simple y legible para todos
export const formatCurrency = (amount: number, showDecimals: boolean = false): string => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: showDecimals ? 2 : 0,
    minimumFractionDigits: showDecimals ? 2 : 0
  }).format(amount);
};
