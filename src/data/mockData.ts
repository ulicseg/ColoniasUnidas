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
    mes: 'Agosto 2026',
    cuotas: 1,
    monto: 4818812,
    descripcion: 'Primera cuota cobrada a la fecha de este informe.'
  }
];

const totalFPM = 1317982227;
const totalConveniosICC = 6500000;
const totalTasasPodjud = 32657;

const rawIngresos = [
  {
    id: 'cop-prov-fpm',
    nombre: 'Coparticipación de la Provincia del Chaco',
    monto: totalFPM,
    descripcion: 'Plata que envía la Provincia del Chaco todos los meses de la recaudación general de impuestos para sostener la ciudad.',
    color: '#477f32',
    detalles: [
      {
        id: 'fpm-det-may',
        concepto: 'Mayo 2026 (4 cuotas semanales)',
        monto: 245981533,
        descripcion: 'Mes récord de fondos recibidos en el año.'
      },
      {
        id: 'fpm-det-jul',
        concepto: 'Julio 2026 (4 cuotas semanales)',
        monto: 206361493,
        descripcion: 'Aportes ordinarios del mes de julio.'
      },
      {
        id: 'fpm-det-ene',
        concepto: 'Enero 2026 (4 cuotas semanales)',
        monto: 186084143,
        descripcion: 'Primer mes completo del ejercicio 2026.'
      },
      {
        id: 'fpm-det-jun',
        concepto: 'Junio 2026 (4 cuotas semanales)',
        monto: 163371092,
        descripcion: 'Fondos transferidos durante junio.'
      },
      {
        id: 'fpm-det-abr',
        concepto: 'Abril 2026 (4 cuotas semanales)',
        monto: 148406629,
        descripcion: 'Cuotas semanales correspondientes a abril.'
      },
      {
        id: 'fpm-det-feb',
        concepto: 'Febrero 2026 (4 cuotas semanales)',
        monto: 143847307,
        descripcion: 'Fondos ordinarios del mes de febrero.'
      },
      {
        id: 'fpm-det-mar',
        concepto: 'Marzo 2026 (4 cuotas semanales)',
        monto: 124612093,
        descripcion: 'Fondos transferidos durante marzo.'
      },
      {
        id: 'fpm-det-dic25',
        concepto: 'Ajuste de Diciembre anterior',
        monto: 94499124,
        descripcion: 'Última cuota del año anterior cobrada en enero.'
      },
      {
        id: 'fpm-det-aug',
        concepto: 'Agosto 2026 (1° cuota)',
        monto: 4818812,
        descripcion: 'Primera cuota ingresada a la fecha.'
      }
    ]
  },
  {
    id: 'convenios-prov',
    nombre: 'Aportes para Cultura y Eventos de la Ciudad',
    monto: totalConveniosICC,
    descripcion: 'Fondos especiales del Instituto de Cultura para los Carnavales y los festejos del Aniversario de Colonias Unidas.',
    color: '#5b9e42',
    detalles: [
      {
        id: 'icc-1',
        concepto: 'Festejos del 97° Aniversario de la Ciudad',
        monto: 5000000,
        descripcion: 'Apoyo económico provincial para las celebraciones de la fundación de la ciudad.'
      },
      {
        id: 'icc-2',
        concepto: 'Ruta de los Carnavales 2026',
        monto: 1500000,
        descripcion: 'Fondos para vestuario, música y organización de las comparsas de la ciudad.'
      }
    ]
  },
  {
    id: 'rec-local',
    nombre: 'Impuestos y Tasas de los Vecinos',
    monto: 48500000,
    descripcion: 'Dinero abonado directamente por los vecinos y comerciantes locales por servicios de limpieza, alumbrado y licencias.',
    color: '#76b95d',
    detalles: [
      {
        id: 'rec-loc-1',
        concepto: 'Limpieza, Alumbrado y Servicios Generales (TGS)',
        monto: 24500000,
        descripcion: 'Mantenimiento de calles, recolección de basura e iluminación de plazas y barrios.'
      },
      {
        id: 'rec-loc-2',
        concepto: 'Tasa de Comercio e Inspección Local (DREI)',
        monto: 16000000,
        descripcion: 'Aportes de comercios, pymes y negocios radicados en la ciudad.'
      },
      {
        id: 'rec-loc-3',
        concepto: 'Licencias de Conducir y Trámites Municipalidad',
        monto: 8000000,
        descripcion: 'Emisión de carnets de conducir y trámites administrativos.'
      }
    ]
  },
  {
    id: 'otros-ing',
    nombre: 'Otros Ingresos y Juzgado de Paz',
    monto: totalTasasPodjud + 3467343,
    descripcion: 'Aportes del Juzgado de Paz local, alquiler de instalaciones municipales y multas menores.',
    color: '#9ad483',
    detalles: [
      {
        id: 'otros-1',
        concepto: 'Tasas e Inmobiliario Juzgado de Paz',
        monto: 32657,
        descripcion: 'Aporte judicial por trámites en el Juzgado de Paz de Colonias Unidas.'
      },
      {
        id: 'otros-2',
        concepto: 'Alquiler de Salones y Predios Municipales',
        monto: 2134700,
        descripcion: 'Uso de instalaciones públicas para eventos comunitarios y deportivos.'
      },
      {
        id: 'otros-3',
        concepto: 'Multas de Tránsito y Faltas Menores',
        monto: 1300000,
        descripcion: 'Recaudación por infracciones comunitarias.'
      }
    ]
  }
];

const rawEgresos = [
  {
    id: 'obras-pub',
    nombre: 'Obras Públicas e Infraestructura',
    monto: 485000000,
    descripcion: 'Pavimentación de calles, arreglo de caminos rurales, luces LED en barrios y desagües.',
    color: '#d97706',
    detalles: [
      {
        id: 'obras-1',
        concepto: 'Pavimento en Avenidas Principales',
        monto: 210000000,
        descripcion: 'Asfalto y cordón cuneta para mejorar la circulación vial.'
      },
      {
        id: 'obras-2',
        concepto: 'Nuevas Luces LED en la Ciudad',
        monto: 145000000,
        descripcion: 'Instalación de 400 luminarias LED de mayor iluminación y ahorro energético.'
      },
      {
        id: 'obras-3',
        concepto: 'Desagües y Obras Anti-inundaciones',
        monto: 85000000,
        descripcion: 'Canales y zanjas de hormigón para evitar acumulación de agua cuando llueve.'
      },
      {
        id: 'obras-4',
        concepto: 'Enripiado y Arreglo de Caminos Rurales',
        monto: 45000000,
        descripcion: 'Mantenimiento de caminos para que los productores puedan sacar su cosecha.'
      }
    ]
  },
  {
    id: 'sueldos-pers',
    nombre: 'Sueldos del Personal Municipal',
    monto: 410000000,
    descripcion: 'Salarios mensuales, aportes de jubilación y ropa de trabajo de todos los empleados de la ciudad.',
    color: '#f59e0b',
    detalles: [
      {
        id: 'sueldos-1',
        concepto: 'Sueldos Netos de Empleados y Trabajadores',
        monto: 290000000,
        descripcion: 'Pago puntual de los haberes de barrenderos, recolectores y administrativos.'
      },
      {
        id: 'sueldos-2',
        concepto: 'Jubilaciones y Obra Social (InSSSeP)',
        monto: 95000000,
        descripcion: 'Aportes obligatorios de ley para la salud y jubilación del personal.'
      },
      {
        id: 'sueldos-3',
        concepto: 'Ropa de Trabajo y Calzado de Seguridad',
        monto: 25000000,
        descripcion: 'Entrega de uniformes, guantes, chalecos y botas de protección.'
      }
    ]
  },
  {
    id: 'mant-urbano',
    nombre: 'Limpieza y Servicios Urbano',
    monto: 125000000,
    descripcion: 'Recolección de basura todos los días, desmalezado de plazas, tractores y combustible.',
    color: '#fbbf24',
    detalles: [
      {
        id: 'mant-1',
        concepto: 'Combustible para Camiones y Tractores',
        monto: 65000000,
        descripcion: 'Gasoil para que los camiones de basura y tractores salgan a trabajar diariamente.'
      },
      {
        id: 'mant-2',
        concepto: 'Servicio de Recolección de Residuos',
        monto: 40000000,
        descripcion: 'Limpieza domiciliaria y tratamiento ecológico en el vaciadero.'
      },
      {
        id: 'mant-3',
        concepto: 'Reparación y Repuestos de Maquinarias',
        monto: 20000000,
        descripcion: 'Arreglo mecánico de herramientas, motoniveladoras y tractores.'
      }
    ]
  },
  {
    id: 'salud',
    nombre: 'Salud y Ayuda Social a Vecinos',
    monto: 80000000,
    descripcion: 'Medicamentos gratuitos, mantenimiento de la ambulancia y asistencia de emergencia a familias.',
    color: '#d99726',
    detalles: [
      {
        id: 'salud-1',
        concepto: 'Remedios e Insumos para el Centro de Salud',
        monto: 45000000,
        descripcion: 'Comprimidos, jarabes, gasas y elementos de curación gratuita para vecinos.'
      },
      {
        id: 'salud-2',
        concepto: 'Ambulancia Municipal 24hs',
        monto: 20000000,
        descripcion: 'Combustible y guardia activa para traslados médicos urgentes.'
      },
      {
        id: 'salud-3',
        concepto: 'Módulos Alimentarios y Ayuda de Emergencia',
        monto: 15000000,
        descripcion: 'Asistencia alimentaria a familias vulnerables de la comunidad.'
      }
    ]
  },
  {
    id: 'educacion-cultura',
    nombre: 'Educación, Escuelas y Deporte',
    monto: 35000000,
    descripcion: 'Apoyo a las escuelas de la localidad, becas para estudiantes, talleres de oficios y festivales.',
    color: '#b45309',
    detalles: [
      {
        id: 'edu-1',
        concepto: 'Carnavales y Fiestas de la Ciudad',
        monto: 15000000,
        descripcion: 'Apoyo para sonido, escenario y comparsas de Colonias Unidas.'
      },
      {
        id: 'edu-2',
        concepto: 'Becas y Ayuda a Escuelas Públicas',
        monto: 12000000,
        descripcion: 'Ayudas de transporte y pintura/reparaciones edilicias escolares.'
      },
      {
        id: 'edu-3',
        concepto: 'Deportes y Cursos de Oficios Gratuitos',
        monto: 8000000,
        descripcion: 'Pelotas, camisetas e insumos para escuelas deportivas de chicos.'
      }
    ]
  },
  {
    id: 'admin',
    nombre: 'Administración y Atención al Vecino',
    monto: 18000000,
    descripcion: 'Internet en oficinas públicas, sistemas de atención al ciudadano y gastos de oficina.',
    color: '#92400e',
    detalles: [
      {
        id: 'admin-1',
        concepto: 'Internet y Sistemas Informáticos',
        monto: 9000000,
        descripcion: 'Conexión por fibra óptica para atender rápido los trámites de los vecinos.'
      },
      {
        id: 'admin-2',
        concepto: 'Papelería e Imprenta Municipal',
        monto: 5000000,
        descripcion: 'Resmas, formularios e impresiones oficiales.'
      },
      {
        id: 'admin-3',
        concepto: 'Servicios de Teléfono y Luz de Dependencias',
        monto: 4000000,
        descripcion: 'Facturas de energía e iluminación en oficinas de atención pública.'
      }
    ]
  }
];

// Calculamos totales dinámicamente
export const totalIngresos = rawIngresos.reduce((acc, item) => acc + item.monto, 0); // $1.373.014.884
export const totalEgresos = rawEgresos.reduce((acc, item) => acc + item.monto, 0);   // $1.153.000.000
export const balance = totalIngresos - totalEgresos;                                 // $220.014.884
export const fechaActualizacion = '16 de Agosto de 2026';
export const periodoActual = 'Año 2026';

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

// Formateador de moneda en pesos argentinos simple y legible para todos
export const formatCurrency = (amount: number, showDecimals: boolean = false): string => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: showDecimals ? 2 : 0,
    minimumFractionDigits: showDecimals ? 2 : 0
  }).format(amount);
};
