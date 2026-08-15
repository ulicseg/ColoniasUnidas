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

const rawIngresos = [
  {
    id: 'cop-nac',
    nombre: 'Coparticipación Nacional',
    monto: 72750000,
    descripcion: 'Fondos girados automáticamente por el Gobierno Nacional de los impuestos cobrados en todo el país.',
    color: '#477f32',
    detalles: [
      {
        id: 'cop-nac-1',
        concepto: 'Impuesto a las Ganancias (Ley 23.548)',
        monto: 36375000,
        descripcion: 'Distribución porcentual por coparticipación federal sobre impuesto a las ganancias.'
      },
      {
        id: 'cop-nac-2',
        concepto: 'Impuesto al Valor Agregado (IVA Coparticipable)',
        monto: 25462500,
        descripcion: 'Recaudación nacional de IVA remitida al municipio según índices poblacionales.'
      },
      {
        id: 'cop-nac-3',
        concepto: 'Bienes Personales y Combustibles',
        monto: 10912500,
        descripcion: 'Asignaciones específicas sobre transferencias de bienes y consumo de combustibles.'
      }
    ]
  },
  {
    id: 'cop-prov',
    nombre: 'Coparticipación Provincial',
    monto: 43650000,
    descripcion: 'Aportes derivados por el Gobierno Provincial correspondientes a la recaudación de impuestos provinciales.',
    color: '#5b9e42',
    detalles: [
      {
        id: 'cop-prov-1',
        concepto: 'Ingresos Brutos Provinciales',
        monto: 26190000,
        descripcion: 'Fondo coparticipable sobre la actividad económica de la provincia.'
      },
      {
        id: 'cop-prov-2',
        concepto: 'Impuesto Inmobiliario Urbano y Rural',
        monto: 13095000,
        descripcion: 'Participación coparticipable sobre las valuaciones inmobiliarias del distrito.'
      },
      {
        id: 'cop-prov-3',
        concepto: 'Impuesto Automotor (Patentes)',
        monto: 43650000 * 0.1, // 4.365.000
        descripcion: 'Porcentaje por radicación de vehículos en la localidad.'
      }
    ]
  },
  {
    id: 'rec-local',
    nombre: 'Recaudación Local (tasas de servicios)',
    monto: 21825000,
    descripcion: 'Dinero pagado directamente por los vecinos a través de las tasas de servicios generales, comercio e inmuebles.',
    color: '#76b95d',
    detalles: [
      {
        id: 'rec-loc-1',
        concepto: 'Tasa Inmobiliaria y Servicios Generales (TGS)',
        monto: 11000000,
        descripcion: 'Cobro de servicios de recolección, alumbrado y barrido en zonas urbanas y periurbanas.'
      },
      {
        id: 'rec-loc-2',
        concepto: 'Tasa de Registro, Inspección y Comercio (DREI)',
        monto: 7500000,
        descripcion: 'Aportes de comercios, pymes e industrias radicadas en la comuna.'
      },
      {
        id: 'rec-loc-3',
        concepto: 'Licencias de Conducir y Habilitaciones',
        monto: 3325000,
        descripcion: 'Trámites de licencias de conducir, libre deudas y habilitaciones comerciales.'
      }
    ]
  },
  {
    id: 'otros-ing',
    nombre: 'Otros ingresos',
    monto: 7275000,
    descripcion: 'Multas, alquiler de espacios públicos, aranceles administrativos y convenios específicos.',
    color: '#9ad483',
    detalles: [
      {
        id: 'otros-1',
        concepto: 'Alquiler de Salones y Espacios Comunitarios',
        monto: 3200000,
        descripcion: 'Uso de instalaciones comunitarias para eventos, ferias y conferencias.'
      },
      {
        id: 'otros-2',
        concepto: 'Multas de Tránsito y Faltas Menores',
        monto: 2575000,
        descripcion: 'Pagos por juzgado de faltas e infracciones de tránsito.'
      },
      {
        id: 'otros-3',
        concepto: 'Canon de Concesiones Varios',
        monto: 1500000,
        descripcion: 'Cánones de explotación de cantinas, terminal de ómnibus y kioscos locales.'
      }
    ]
  }
];

const rawEgresos = [
  {
    id: 'obras-pub',
    nombre: 'Obras Públicas',
    monto: 44870000,
    descripcion: 'Pavimentación de calles, construcción de veredas, iluminación LED y obras de infraestructura comunitaria.',
    color: '#d97706',
    detalles: [
      {
        id: 'obras-1',
        concepto: 'Pavimentación asfáltica en Av. San Martín (Cuadras 1 a 6)',
        monto: 18500000,
        descripcion: 'Materiales, movimiento de suelos y carpeta de rodamiento de 6cm de espesor.'
      },
      {
        id: 'obras-2',
        concepto: 'Instalación de 350 luminarias LED de 150W',
        monto: 12200000,
        descripcion: 'Recambio tecnológico en avenidas principales, barrio Belgrano y zona comercial.'
      },
      {
        id: 'obras-3',
        concepto: 'Cordón cuneta y desagües en Barrio Las Flores',
        monto: 8670000,
        descripcion: 'Construcción de 1.200 metros lineales de hormigón armado para evacuación hídrica.'
      },
      {
        id: 'obras-4',
        concepto: 'Pintura y juegos inclusivos en Plaza de los Niños',
        monto: 5500000,
        descripcion: 'Remodelación integral de plazoleta central con piso antigolpes y bancos de plaza.'
      }
    ]
  },
  {
    id: 'sueldos-pers',
    nombre: 'Sueldos y Personal',
    monto: 38460000,
    descripcion: 'Salarios, aportes previsionales y capacitaciones de empleados de servicios, personal médico y de limpieza.',
    color: '#f59e0b',
    detalles: [
      {
        id: 'sueldos-1',
        concepto: 'Haberes netos Planta Permanente (112 empleados)',
        monto: 21300000,
        descripcion: 'Pago mensual de salarios a personal administrativo, de servicios y maestranza.'
      },
      {
        id: 'sueldos-2',
        concepto: 'Haberes netos Personal Contratado (45 empleados)',
        monto: 10160000,
        descripcion: 'Remuneraciones de contratados temporales para tareas de recolección y guardia.'
      },
      {
        id: 'sueldos-3',
        concepto: 'Aportes Patronales Previsionales y Obra Social',
        monto: 5200000,
        descripcion: 'Contribuciones obligatorias a la Caja Previsional y Obra Social IAPOS.'
      },
      {
        id: 'sueldos-4',
        concepto: 'Capacitación profesional y ropa de trabajo',
        monto: 1800000,
        descripcion: 'Indumentaria reglamentaria de seguridad e insumos de protección laboral.'
      }
    ]
  },
  {
    id: 'mant-urbano',
    nombre: 'Mantenimiento Urbano',
    monto: 19230000,
    descripcion: 'Recolección de residuos, desmalezado de plazas, reparación de baches y mantenimiento de espacios verdes.',
    color: '#fbbf24',
    detalles: [
      {
        id: 'mant-1',
        concepto: 'Servicio de recolección y disposición final de residuos',
        monto: 9800000,
        descripcion: 'Operatividad de camiones compactadores y tratamiento final en relleno sanitario.'
      },
      {
        id: 'mant-2',
        concepto: 'Mezcla asfáltica en frío para plan de bacheo de emergencia',
        monto: 4630000,
        descripcion: 'Reparación inmediata de baches prioritarios en accesos pavimentados.'
      },
      {
        id: 'mant-3',
        concepto: 'Combustible y repuestos de tractores y desmalezadoras',
        monto: 2800000,
        descripcion: 'Mantenimiento de maquinaria urbana para corte de pasto en veredones.'
      },
      {
        id: 'mant-4',
        concepto: 'Demarcación horizontal y cartelería vial urbana',
        monto: 2000000,
        descripcion: 'Pintura refractaria para sendas peatonales y nomencladores de calles.'
      }
    ]
  },
  {
    id: 'salud',
    nombre: 'Salud',
    monto: 12820000,
    descripcion: 'Insumos médicos, medicamentos, equipamiento para centros de atención primaria de salud y guardia comunitaria.',
    color: '#d99726',
    detalles: [
      {
        id: 'salud-1',
        concepto: 'Insumos médicos descartables y elementos de enfermería',
        monto: 5400000,
        descripcion: 'Jeringas, gasas, soluciones fisiológicas y guantes esterilizados.'
      },
      {
        id: 'salud-2',
        concepto: 'Farmacia comunitaria para atención primaria gratuita',
        monto: 4120000,
        descripcion: 'Compra directa de analgésicos, antibióticos y tratamiento crónico para vecinos.'
      },
      {
        id: 'salud-3',
        concepto: 'Mantenimiento y combustible de ambulancia de traslado',
        monto: 1800000,
        descripcion: 'Disponibilidad 24hs de unidad de traslado de emergencias de alta complejidad.'
      },
      {
        id: 'salud-4',
        concepto: 'Honorarios guardias médicas de fin de semana',
        monto: 1500000,
        descripcion: 'Guardias activas en centros de salud durante sábados, domingos y feriados.'
      }
    ]
  },
  {
    id: 'educacion-cultura',
    nombre: 'Educación y Cultura',
    monto: 7690000,
    descripcion: 'Talleres culturales, apoyo a escuelas locales, becas estudiantiles y eventos comunitarios.',
    color: '#b45309',
    detalles: [
      {
        id: 'edu-1',
        concepto: 'Fondo de Asistencia Educativa (FAE) a escuelas locales',
        monto: 3500000,
        descripcion: 'Fondo distribuido a 5 escuelas públicas para reparaciones edilicias.'
      },
      {
        id: 'edu-2',
        concepto: 'Insumos e instructores para 12 talleres comunitarios',
        monto: 2390000,
        descripcion: 'Dictado de talleres de informática, carpintería, pintura y costura gratuita.'
      },
      {
        id: 'edu-3',
        concepto: 'Programa de Becas al Mérito Estudiantil',
        monto: 1800000,
        descripcion: 'Becas de transporte y fotocopias a 45 estudiantes secundarios y terciarios.'
      }
    ]
  },
  {
    id: 'admin',
    nombre: 'Administración',
    monto: 5130000,
    descripcion: 'Servicios básicos de oficinas públicas, papelería, licencias de software y atención al vecino.',
    color: '#92400e',
    detalles: [
      {
        id: 'admin-1',
        concepto: 'Licencias informáticas y ciberseguridad local',
        monto: 2100000,
        descripcion: 'Suscripción a sistemas de facturación, gestión documental y almacenamiento.'
      },
      {
        id: 'admin-2',
        concepto: 'Insumos de oficina y útiles de atención al público',
        monto: 1630000,
        descripcion: 'Resmas de papel, tóner de impresión y cuadernillos impositivos.'
      },
      {
        id: 'admin-3',
        concepto: 'Servicios de telefonía e internet de dependencias',
        monto: 1400000,
        descripcion: 'Conectividad corporativa de fibra óptica en dependencias públicas y centros comunitarios.'
      }
    ]
  }
];

// Calculamos totales dinámicamente
export const totalIngresos = rawIngresos.reduce((acc, item) => acc + item.monto, 0);
export const totalEgresos = rawEgresos.reduce((acc, item) => acc + item.monto, 0);
export const balance = totalIngresos - totalEgresos;
export const fechaActualizacion = '10 de Agosto de 2026';
export const periodoActual = 'Julio 2026';

// Exportamos datos enriquecidos con porcentaje
export const ingresos: FinancialItem[] = rawIngresos.map(item => ({
  ...item,
  porcentaje: Math.round((item.monto / totalIngresos) * 100)
}));

export const egresos: FinancialItem[] = rawEgresos.map(item => ({
  ...item,
  porcentaje: Math.round((item.monto / totalEgresos) * 100)
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

// Formateador de moneda en pesos argentinos
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0
  }).format(amount);
};
