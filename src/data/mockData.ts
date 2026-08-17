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

export interface ElectronicPayment {
  id: string;
  lote: number;
  safyc: number;
  expediente: number;
  ano: number;
  tipo: 'OP' | 'OV';
  importe: number;
  ctaDebito: number;
  fecha: string;
  rendicion: string;
  estado: string;
  descripcion: string;
  expedienteProv: string;
  cuitDetalle: string;
  tipoDetalle: string;
  categoria: 'FPM' | 'CONVENIO' | 'IMPUESTOS';
}

// 33 Datos reales oficializados por Tesorería General de la Provincia del Chaco (CUIT 30670226723)
export const tesoreriaPayments: ElectronicPayment[] = [
  {
    id: 'op-33',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 4818812.48,
    ctaDebito: 132287,
    fecha: '12/08/2026',
    rendicion: '20260812-00-017',
    estado: 'Procesado Correctamente',
    descripcion: 'LIQUIDACION FPM - 1º DE AGOSTO',
    expedienteProv: 'EX-2026-0000521',
    cuitDetalle: '30670226723-ADMGRAL-016181',
    tipoDetalle: '4-SGTCH -4',
    categoria: 'FPM'
  },
  {
    id: 'op-32',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 130597075.04,
    ctaDebito: 126031,
    fecha: '05/08/2026',
    rendicion: '20260805-00-009',
    estado: 'Procesado Correctamente',
    descripcion: 'FPM 4º CUOTA MES JULIO 2026',
    expedienteProv: 'EX-2026-0000504',
    cuitDetalle: '30670226723-ADMGRAL-015580',
    tipoDetalle: '8-SGTCH -4',
    categoria: 'FPM'
  },
  {
    id: 'op-31',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 65175285.44,
    ctaDebito: 120646,
    fecha: '23/07/2026',
    rendicion: '20260723-00-017',
    estado: 'Procesado Correctamente',
    descripcion: 'FPM 3º CUOTA DE JULIO 2026',
    expedienteProv: 'EX-2026-0000490',
    cuitDetalle: '30670226723-ADMGRAL-014701',
    tipoDetalle: '9-SGTCH -4',
    categoria: 'FPM'
  },
  {
    id: 'op-30',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 6102662.94,
    ctaDebito: 117056,
    fecha: '16/07/2026',
    rendicion: '20260716-00-021',
    estado: 'Procesado Correctamente',
    descripcion: 'FPM 2º CUOTA DE JULIO 2026',
    expedienteProv: 'EX-2026-0000478',
    cuitDetalle: '30670226723-ADMGRAL-014164',
    tipoDetalle: '1-SGTCH -4',
    categoria: 'FPM'
  },
  {
    id: 'op-29',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 4486469.70,
    ctaDebito: 113556,
    fecha: '14/07/2026',
    rendicion: '20260714-00-002',
    estado: 'Procesado Correctamente',
    descripcion: 'LIQUIDACION FPM - 1º JULIO',
    expedienteProv: 'EX-2026-0000467',
    cuitDetalle: '30670226723-ADMGRAL-013815',
    tipoDetalle: '6-SGTCH -4',
    categoria: 'FPM'
  },
  {
    id: 'op-28',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 117334551.12,
    ctaDebito: 106944,
    fecha: '03/07/2026',
    rendicion: '20260703-00-003',
    estado: 'Procesado Correctamente',
    descripcion: 'LIQUIDACION FPM 4TA DE JUNIO',
    expedienteProv: 'EX-2026-0000449',
    cuitDetalle: '30670226723-ADMGRAL-013239',
    tipoDetalle: '1-SGTCH -4',
    categoria: 'FPM'
  },
  {
    id: 'op-27',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 16615795.68,
    ctaDebito: 101260,
    fecha: '24/06/2026',
    rendicion: '20260624-00-019',
    estado: 'Procesado Correctamente',
    descripcion: 'LIQUIDACION FPM - 3º CUOTA DE JUNIO 2026',
    expedienteProv: 'EX-2026-0000424',
    cuitDetalle: '30670226723-ADMGRAL-012496',
    tipoDetalle: '7-SGTCH -4',
    categoria: 'FPM'
  },
  {
    id: 'op-26',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 25036852.20,
    ctaDebito: 97156,
    fecha: '18/06/2026',
    rendicion: '20260618-00-004',
    estado: 'Procesado Correctamente',
    descripcion: 'LIQUIDACION FPM - 2º CUOTA DE JUNIO 2026',
    expedienteProv: 'EX-2026-0000410',
    cuitDetalle: '30670226723-ADMGRAL-011835',
    tipoDetalle: '2-SGTCH -4',
    categoria: 'FPM'
  },
  {
    id: 'op-25',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 4383893.00,
    ctaDebito: 92886,
    fecha: '10/06/2026',
    rendicion: '20260610-00-004',
    estado: 'Procesado Correctamente',
    descripcion: 'FPM - 1º CUOTA DE JUNIO 2026',
    expedienteProv: 'EX-2026-0000391',
    cuitDetalle: '30670226723-ADMGRAL-011232',
    tipoDetalle: '1-SGTCH -4',
    categoria: 'FPM'
  },
  {
    id: 'op-24',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 83329170.72,
    ctaDebito: 84664,
    fecha: '03/06/2026',
    rendicion: '20260603-00-008',
    estado: 'Procesado Correctamente',
    descripcion: 'FPM - 4º CUOTA DE MAYO 2026',
    expedienteProv: 'EX-2026-0000371',
    cuitDetalle: '30670226723-ADMGRAL-010713',
    tipoDetalle: '2-SGTCH -4',
    categoria: 'FPM'
  },
  {
    id: 'op-23',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 128901615.17,
    ctaDebito: 81829,
    fecha: '27/05/2026',
    rendicion: '20260527-00-022',
    estado: 'Procesado Correctamente',
    descripcion: 'FPM 3º CUOTA DE MAYO 2026',
    expedienteProv: 'EX-2026-0000357',
    cuitDetalle: '30670226723-ADMGRAL-010053',
    tipoDetalle: '2-SGTCH -4',
    categoria: 'FPM'
  },
  {
    id: 'op-22',
    lote: 9,
    safyc: 1003508,
    expediente: 1037909,
    ano: 2026,
    tipo: 'OP',
    importe: 32657.00,
    ctaDebito: 77793,
    fecha: '19/05/2026',
    rendicion: '20260519-09-005',
    estado: 'Procesado Correctamente',
    descripcion: 'IMP INMOB Y TASAS Y SERV EJ 002026120 JPAZ COL UNIDAS 2026',
    expedienteProv: 'EJ 002026120',
    cuitDetalle: '30670226723-PODJUD_-009396',
    tipoDetalle: 'PODJUD',
    categoria: 'IMPUESTOS'
  },
  {
    id: 'op-21',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 29140448.54,
    ctaDebito: 77209,
    fecha: '19/05/2026',
    rendicion: '20260519-00-008',
    estado: 'Procesado Correctamente',
    descripcion: 'FPM - 2º CUOTA MAYO 2026',
    expedienteProv: 'EX-2026-0000344',
    cuitDetalle: '30670226723-ADMGRAL-009373',
    tipoDetalle: '6-SGTCH -4',
    categoria: 'FPM'
  },
  {
    id: 'op-20',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 4610298.70,
    ctaDebito: 72000,
    fecha: '12/05/2026',
    rendicion: '20260512-00-007',
    estado: 'Procesado Correctamente',
    descripcion: 'LIQUIDACIÓN FPM 1º CUOTA MAYO 2026',
    expedienteProv: 'EX-2026-0000318',
    cuitDetalle: '30670226723-ADMGRAL-008746',
    tipoDetalle: '9-SGTCH --4',
    categoria: 'FPM'
  },
  {
    id: 'op-19',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 94181093.89,
    ctaDebito: 66953,
    fecha: '06/05/2026',
    rendicion: '20260506-00-001',
    estado: 'Procesado Correctamente',
    descripcion: 'FONDO DE PART. MUNICIPAL 4º CUOTA DE ABRIL',
    expedienteProv: 'EX-2026-0000302',
    cuitDetalle: '30670226723-ADMGRAL-008301',
    tipoDetalle: '2-SGTCH --4',
    categoria: 'FPM'
  },
  {
    id: 'op-18',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 22232566.03,
    ctaDebito: 60283,
    fecha: '24/04/2026',
    rendicion: '20260424-00-003',
    estado: 'Procesado Correctamente',
    descripcion: 'FONDO PARTICIPACION MUNICIPAL 3° CUOTA ABRIL 2026',
    expedienteProv: 'EX-2026-0000277',
    cuitDetalle: '30670226723-ADMGRAL-007472',
    tipoDetalle: '3-SGTCH -4',
    categoria: 'FPM'
  },
  {
    id: 'op-17',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 29505959.61,
    ctaDebito: 55850,
    fecha: '16/04/2026',
    rendicion: '20260416-00-030',
    estado: 'Procesado Correctamente',
    descripcion: 'FONDO DE PARTICIPACION SEGUNDA CUOTA ABRIL 2026',
    expedienteProv: 'EX-2026-0000254',
    cuitDetalle: '30670226723-ADMGRAL-006776',
    tipoDetalle: '5-SGTCH -4',
    categoria: 'FPM'
  },
  {
    id: 'op-16',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 2487009.04,
    ctaDebito: 50263,
    fecha: '09/04/2026',
    rendicion: '20260409-00-027',
    estado: 'Procesado Correctamente',
    descripcion: 'FDO PARTICIPACION MUNICIPAL 1° CUOTA ABRIL 2026',
    expedienteProv: 'EX-2026-0000230',
    cuitDetalle: '30670226723-ADMGRAL-006171',
    tipoDetalle: '1-SGTCH -04',
    categoria: 'FPM'
  },
  {
    id: 'op-15',
    lote: 34,
    safyc: 1003508,
    expediente: 1614210,
    ano: 2026,
    tipo: 'OP',
    importe: 5000000.00,
    ctaDebito: 48520,
    fecha: '08/04/2026',
    rendicion: '20260408-34-001',
    estado: 'Procesado Correctamente',
    descripcion: 'TRANF POR CONV-"97° ANIV DE SU FUNDACION" 28/03 RES N° 389/26',
    expedienteProv: 'EX-2026-0000119',
    cuitDetalle: '30670226723-ICC____-006048',
    tipoDetalle: '9-SGTCH -34',
    categoria: 'CONVENIO'
  },
  {
    id: 'op-14',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 69699475.59,
    ctaDebito: 46926,
    fecha: '07/04/2026',
    rendicion: '20260407-00-001',
    estado: 'Procesado Correctamente',
    descripcion: 'FDO PART. MPAL. 4° CUOTA MARZO 2026',
    expedienteProv: 'EX-2026-0000219',
    cuitDetalle: '30670226723-ADMGRAL-005861',
    tipoDetalle: '4-SGTCH -4',
    categoria: 'FPM'
  },
  {
    id: 'op-13',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 22704832.73,
    ctaDebito: 41972,
    fecha: '26/03/2026',
    rendicion: '20260326-00-037',
    estado: 'Procesado Correctamente',
    descripcion: 'FONDO PARTICIPACION MUNICIPAL 3° MARZO 2026',
    expedienteProv: 'EX-2026-0000193',
    cuitDetalle: '30670226723-ADMGRAL-005264',
    tipoDetalle: '8-SGTCH -4',
    categoria: 'FPM'
  },
  {
    id: 'op-12',
    lote: 34,
    safyc: 1003508,
    expediente: 1614210,
    ano: 2026,
    tipo: 'OP',
    importe: 1500000.00,
    ctaDebito: 39941,
    fecha: '20/03/2026',
    rendicion: '20260320-34-003',
    estado: 'Procesado Correctamente',
    descripcion: 'TRANF POR CONV-C.UNIDAS-"RUTA CARNAVALES 2026" RES Nº 316/26',
    expedienteProv: 'EX-2026-0000081',
    cuitDetalle: '30670226723-ICC____-004994',
    tipoDetalle: '5-SGTCH -34',
    categoria: 'CONVENIO'
  },
  {
    id: 'op-11',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 27727797.19,
    ctaDebito: 37175,
    fecha: '18/03/2026',
    rendicion: '20260318-00-002',
    estado: 'Procesado Correctamente',
    descripcion: 'FDO PARTICIPACION MUNICIPAL 2° CUOTA MARZO 2026',
    expedienteProv: 'EX-2026-0000176',
    cuitDetalle: '30670226723-ADMGRAL-004647',
    tipoDetalle: '5-SGTCH -4',
    categoria: 'FPM'
  },
  {
    id: 'op-10',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 4479987.65,
    ctaDebito: 32782,
    fecha: '11/03/2026',
    rendicion: '20260311-00-006',
    estado: 'Procesado Correctamente',
    descripcion: 'FONDO PARTICIPACION MUNICIPAL 1°CUOTA MARZO 2026',
    expedienteProv: 'EX-2026-0000157',
    cuitDetalle: '30670226723-ADMGRAL-004062',
    tipoDetalle: '6-SGTCH -4',
    categoria: 'FPM'
  },
  {
    id: 'op-9',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 89744870.64,
    ctaDebito: 27875,
    fecha: '04/03/2026',
    rendicion: '20260304-00-003',
    estado: 'Procesado Correctamente',
    descripcion: 'FONDO PARTICIPACION MUNICIPAL 4° FEBRERO 2026',
    expedienteProv: 'EX-2026-0000143',
    cuitDetalle: '30670226723-ADMGRAL-003592',
    tipoDetalle: '2-SGTCH -04',
    categoria: 'FPM'
  },
  {
    id: 'op-8',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 17400288.01,
    ctaDebito: 24360,
    fecha: '25/02/2026',
    rendicion: '20260225-00-030',
    estado: 'Procesado Correctamente',
    descripcion: 'FONDO PARTICIPACION MUNICIPAL 3°CUOTA FEBRERO 2026',
    expedienteProv: 'EX-2026-0000130',
    cuitDetalle: '30670226723-ADMGRAL-003069',
    tipoDetalle: '6-SGTCH -4',
    categoria: 'FPM'
  },
  {
    id: 'op-7',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 36121625.37,
    ctaDebito: 21017,
    fecha: '20/02/2026',
    rendicion: '20260220-00-009',
    estado: 'Procesado Correctamente',
    descripcion: 'FONDO PARTICIPACION MUNICIPAL 2° FEBRERO 2026',
    expedienteProv: 'EX-2026-0000123',
    cuitDetalle: '30670226723-ADMGRAL-002560',
    tipoDetalle: '7-SGTCH -4',
    categoria: 'FPM'
  },
  {
    id: 'op-6',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 580523.32,
    ctaDebito: 16427,
    fecha: '11/02/2026',
    rendicion: '20260211-00-003',
    estado: 'Procesado Correctamente',
    descripcion: 'FONDO PARTICIPACION MUNICIPAL 1°CUOTA FEBRERO 2026',
    expedienteProv: 'EX-2026-0000103',
    cuitDetalle: '30670226723-ADMGRAL-002082',
    tipoDetalle: '8-SGTCH -4',
    categoria: 'FPM'
  },
  {
    id: 'op-5',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 91258127.74,
    ctaDebito: 12563,
    fecha: '04/02/2026',
    rendicion: '20260204-00-003',
    estado: 'Procesado Correctamente',
    descripcion: 'FONDO PARTICIPACION MUNICIPAL 4° ENERO 2026',
    expedienteProv: 'EX-2026-0000086',
    cuitDetalle: '30670226723-ADMGRAL-001560',
    tipoDetalle: '2-SGTCH -4',
    categoria: 'FPM'
  },
  {
    id: 'op-4',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 34078992.40,
    ctaDebito: 8341,
    fecha: '26/01/2026',
    rendicion: '20260126-00-012',
    estado: 'Procesado Correctamente',
    descripcion: 'FDO DE PART. MPAL 3° ENERO 2026',
    expedienteProv: 'EX-2026-0000061',
    cuitDetalle: '30670226723-ADMGRAL-000994',
    tipoDetalle: '3-SGTCH -4',
    categoria: 'FPM'
  },
  {
    id: 'op-3',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 44604163.49,
    ctaDebito: 4433,
    fecha: '19/01/2026',
    rendicion: '20260119-00-018',
    estado: 'Procesado Correctamente',
    descripcion: 'FDO.PART.MPAL. 2DA CUOTA ENERO 2026',
    expedienteProv: 'EX-2026-0000044',
    cuitDetalle: '30670226723-ADMGRAL-000545',
    tipoDetalle: '7-SGTCH -4',
    categoria: 'FPM'
  },
  {
    id: 'op-2',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OP',
    importe: 16142859.38,
    ctaDebito: 1485,
    fecha: '12/01/2026',
    rendicion: '20260112-00-008',
    estado: 'Procesado Correctamente',
    descripcion: 'FDO PARTICIPACION MUNICIPAL 1° CUOTA ENERO 2026',
    expedienteProv: 'EX-2026-0000017',
    cuitDetalle: '30670226723-ADMGRAL-000180',
    tipoDetalle: '3-SGTCH -53',
    categoria: 'FPM'
  },
  {
    id: 'op-1',
    lote: 53,
    safyc: 1003508,
    expediente: 1445804,
    ano: 2026,
    tipo: 'OV',
    importe: 94499124.00,
    ctaDebito: 6412,
    fecha: '06/01/2026',
    rendicion: '20260106-00-007',
    estado: 'Procesado Correctamente',
    descripcion: 'FDO PART MPAL 4° DICIEMBRE 2025',
    expedienteProv: 'EX-2025-0000901',
    cuitDetalle: '30670226723-ADMGRAL-000059',
    tipoDetalle: '8-SGTCH -4',
    categoria: 'FPM'
  }
];

// Cálculo del total oficial transferido por la Tesorería General del Chaco
export const totalTesoreriaChaco = tesoreriaPayments.reduce((acc, item) => acc + item.importe, 0); // Exactamente $1.324.514.883,81

const totalFPM = tesoreriaPayments.filter(p => p.categoria === 'FPM').reduce((acc, p) => acc + p.importe, 0); // $1.317.982.226,81
const totalConveniosICC = tesoreriaPayments.filter(p => p.categoria === 'CONVENIO').reduce((acc, p) => acc + p.importe, 0); // $6.500.000,00
const totalTasasPodjud = tesoreriaPayments.filter(p => p.categoria === 'IMPUESTOS').reduce((acc, p) => acc + p.importe, 0); // $32.657,00

const rawIngresos = [
  {
    id: 'cop-prov-fpm',
    nombre: 'Fondo de Participación Municipal (FPM Chaco)',
    monto: totalFPM,
    descripcion: 'Transferencias automáticas acreditadas por la Tesorería General del Chaco (Coparticipación Ley Provincial N° 3798 / Safyc 1003508).',
    color: '#477f32',
    detalles: [
      {
        id: 'fpm-det-aug',
        concepto: 'Liquidaciones de Agosto 2026',
        monto: 4818812.48,
        descripcion: 'Liquidación 1ª cuota de Agosto (OP 20260812-00-017).'
      },
      {
        id: 'fpm-det-jul',
        concepto: 'Liquidaciones de Julio 2026 (4 Cuotas)',
        monto: 206361493.12,
        descripcion: 'Suma de la 1ª, 2ª, 3ª y 4ª cuota FPM de Julio 2026.'
      },
      {
        id: 'fpm-det-jun',
        concepto: 'Liquidaciones de Junio 2026 (4 Cuotas)',
        monto: 163371092.00,
        descripcion: 'Suma de la 1ª, 2ª, 3ª y 4ª cuota FPM de Junio 2026.'
      },
      {
        id: 'fpm-det-may',
        concepto: 'Liquidaciones de Mayo 2026 (4 Cuotas)',
        monto: 245981533.13,
        descripcion: 'Suma de la 1ª, 2ª, 3ª y 4ª cuota FPM de Mayo 2026.'
      },
      {
        id: 'fpm-det-abr',
        concepto: 'Liquidaciones de Abril 2026 (4 Cuotas)',
        monto: 148406628.57,
        descripcion: 'Suma de la 1ª, 2ª, 3ª y 4ª cuota FPM de Abril 2026.'
      },
      {
        id: 'fpm-det-mar',
        concepto: 'Liquidaciones de Marzo 2026 (4 Cuotas)',
        monto: 124612093.16,
        descripcion: 'Suma de la 1ª, 2ª, 3ª y 4ª cuota FPM de Marzo 2026.'
      },
      {
        id: 'fpm-det-feb',
        concepto: 'Liquidaciones de Febrero 2026 (4 Cuotas)',
        monto: 143847307.04,
        descripcion: 'Suma de la 1ª, 2ª, 3ª y 4ª cuota FPM de Febrero 2026.'
      },
      {
        id: 'fpm-det-ene',
        concepto: 'Liquidaciones de Enero 2026 (4 Cuotas)',
        monto: 186084143.01,
        descripcion: 'Suma de la 1ª, 2ª, 3ª y 4ª cuota FPM de Enero 2026.'
      },
      {
        id: 'fpm-det-dic25',
        concepto: 'Liquidación 4° Cuota Diciembre 2025',
        monto: 94499124.00,
        descripcion: 'Orden de Variación OV acreditada el 06/01/2026.'
      }
    ]
  },
  {
    id: 'convenios-prov',
    nombre: 'Convenios e Institutos Provinciales (ICC)',
    monto: totalConveniosICC,
    descripcion: 'Aportes por convenios específicos con el Instituto de Cultura del Chaco (Ruta de los Carnavales y Aniversario Fundacional).',
    color: '#5b9e42',
    detalles: [
      {
        id: 'icc-1',
        concepto: 'Subsidio por Convenio 97° Aniversario de Fundación',
        monto: 5000000.00,
        descripcion: 'Res N° 389/26 - Expediente EX-2026-0000119 (Acreditado el 08/04/2026).'
      },
      {
        id: 'icc-2',
        concepto: 'Subsidio Ruta de los Carnavales 2026',
        monto: 1500000.00,
        descripcion: 'Res N° 316/26 - Expediente EX-2026-0000081 (Acreditado el 20/03/2026).'
      }
    ]
  },
  {
    id: 'rec-local',
    nombre: 'Recaudación Local y Tasas de Servicios',
    monto: 48500000,
    descripcion: 'Ingresos propios abonados por vecinos y comercios de Colonias Unidas (TGS, Registro e Inspección y Licencias).',
    color: '#76b95d',
    detalles: [
      {
        id: 'rec-loc-1',
        concepto: 'Tasa Inmobiliaria y Servicios Generales (TGS)',
        monto: 24500000,
        descripcion: 'Servicios de recolección de residuos, alumbrado, barrido y conservación de la vía pública.'
      },
      {
        id: 'rec-loc-2',
        concepto: 'Tasa de Registro, Inspección y Comercio (DREI)',
        monto: 16000000,
        descripcion: 'Aportes comerciales y de pymes locales con actividad en el municipio.'
      },
      {
        id: 'rec-loc-3',
        concepto: 'Licencias de Conducir y Habilitaciones',
        monto: 8000000,
        descripcion: 'Emisión de licencias nacionales de conducir y libre deudas.'
      }
    ]
  },
  {
    id: 'otros-ing',
    nombre: 'Impuestos Judiciales y Otros Ingresos',
    monto: totalTasasPodjud + 3467343,
    descripcion: 'Impuesto Inmobiliario retenido por Poder Judicial y aranceles por uso de espacios públicos.',
    color: '#9ad483',
    detalles: [
      {
        id: 'otros-1',
        concepto: 'Impuesto Inmobiliario Juzgado de Paz Colonias Unidas (PODJUD)',
        monto: 32657.00,
        descripcion: 'Acreditación Tesorería Chaco EJ 002026120 del 19/05/2026.'
      },
      {
        id: 'otros-2',
        concepto: 'Alquiler de Salones y Espacios Comunitarios',
        monto: 2134700.00,
        descripcion: 'Cánones por eventos y uso de predios deportivos comunitarios.'
      },
      {
        id: 'otros-3',
        concepto: 'Multas de Tránsito y Faltas Menores',
        monto: 1300000.00,
        descripcion: 'Pagos procesados por el Juzgado Administrativo de Faltas.'
      }
    ]
  }
];

const rawEgresos = [
  {
    id: 'obras-pub',
    nombre: 'Obras Públicas e Infraestructura',
    monto: 485000000,
    descripcion: 'Pavimentación de avenidas, enripiado de accesos rurales, alumbrado público LED y obras hídricas urbanas.',
    color: '#d97706',
    detalles: [
      {
        id: 'obras-1',
        concepto: 'Pavimentación asfáltica y avenidas principales',
        monto: 210000000,
        descripcion: 'Movimiento de suelo, carpeta asfáltica y señalización vial.'
      },
      {
        id: 'obras-2',
        concepto: 'Red de Alumbrado Público LED integral',
        monto: 145000000,
        descripcion: 'Recambio de 400 luminarias LED de alta potencia en barrios de la ciudad.'
      },
      {
        id: 'obras-3',
        concepto: 'Cordón cuneta y desagües pluviales',
        monto: 85000000,
        descripcion: 'Obras de infraestructura hídrica para evitar anegamientos en épocas de lluvia.'
      },
      {
        id: 'obras-4',
        concepto: 'Mejoramiento y enripiado de caminos rurales y accesos',
        monto: 45000000,
        descripcion: 'Mantenimiento de conectividad para productores de la zona.'
      }
    ]
  },
  {
    id: 'sueldos-pers',
    nombre: 'Haberes y Personal Municipal',
    monto: 410000000,
    descripcion: 'Sueldos, aportes previsionales y capacitaciones del personal municipal administrativo y de servicios.',
    color: '#f59e0b',
    detalles: [
      {
        id: 'sueldos-1',
        concepto: 'Haberes netos Planta Permanente y Contratados',
        monto: 290000000,
        descripcion: 'Pago mensual puntual de salarios al equipo municipal de trabajo.'
      },
      {
        id: 'sueldos-2',
        concepto: 'Aportes Patronales Previsionales y Leyes Sociales',
        monto: 95000000,
        descripcion: 'Contribuciones a la Caja de Jubilaciones e InSSSeP.'
      },
      {
        id: 'sueldos-3',
        concepto: 'Indumentaria de Trabajo y Seguridad Laboral',
        monto: 25000000,
        descripcion: 'Provisión reglamentaria de uniformes, botas y elementos de protección.'
      }
    ]
  },
  {
    id: 'mant-urbano',
    nombre: 'Servicios y Mantenimiento Urbano',
    monto: 125000000,
    descripcion: 'Recolección diaria de residuos, desmalezado, parque automotor y limpieza de plazas y espacios verdes.',
    color: '#fbbf24',
    detalles: [
      {
        id: 'mant-1',
        concepto: 'Combustibles y lubricantes para flota de camiones y tractores',
        monto: 65000000,
        descripcion: 'Gasoil y aceites para maquinaria de servicios urbanos y desmalezadoras.'
      },
      {
        id: 'mant-2',
        concepto: 'Servicio de recolección y tratamiento de residuos',
        monto: 40000000,
        descripcion: 'Logística de recolección domiciliaria y mantenimiento del predio sanitario.'
      },
      {
        id: 'mant-3',
        concepto: 'Repuestos y reparación del parque automotor',
        monto: 20000000,
        descripcion: 'Mantenimiento mecánico preventivo y correctivo de la maquinaria municipal.'
      }
    ]
  },
  {
    id: 'salud',
    nombre: 'Salud y Acción Social',
    monto: 80000000,
    descripcion: 'Insumos médicos, medicamentos comunitarios, ambulancia municipal y asistencia directa a familias.',
    color: '#d99726',
    detalles: [
      {
        id: 'salud-1',
        concepto: 'Insumos y farmacia comunitaria para el Centro de Salud',
        monto: 45000000,
        descripcion: 'Compra directa de medicamentos y descartables de primeros auxilios.'
      },
      {
        id: 'salud-2',
        concepto: 'Mantenimiento y traslados de emergencia en ambulancia',
        monto: 20000000,
        descripcion: 'Operatividad las 24hs del servicio de traslado sanitario a centros de mayor complejidad.'
      },
      {
        id: 'salud-3',
        concepto: 'Asistencia alimentaria y vales sociales a familias vulnerables',
        monto: 15000000,
        descripcion: 'Ayuda directa de emergencia para módulos alimentarios.'
      }
    ]
  },
  {
    id: 'educacion-cultura',
    nombre: 'Educación, Cultura y Deportes',
    monto: 35000000,
    descripcion: 'Apoyo edilicio a escuelas, becas de transporte estudiantil, talleres comunitarios y eventos tradicionales.',
    color: '#b45309',
    detalles: [
      {
        id: 'edu-1',
        concepto: 'Organización de Carnavales y Festivales Comunitarios',
        monto: 15000000,
        descripcion: 'Financiación parcial con aportes provinciales y municipales para comparsas locales.'
      },
      {
        id: 'edu-2',
        concepto: 'Becas estudiantiles y apoyo a instituciones escolares (FAE)',
        monto: 12000000,
        descripcion: 'Ayuda económica para fotocopias, pasajes y mantenimiento edilicio escolar.'
      },
      {
        id: 'edu-3',
        concepto: 'Insumos para talleres de oficios y deportes comunales',
        monto: 8000000,
        descripcion: 'Elementos deportivos y materiales para cursos gratuitos de formación.'
      }
    ]
  },
  {
    id: 'admin',
    nombre: 'Gestión Institucional y Administración',
    monto: 18000000,
    descripcion: 'Sistemas informáticos, servicios de internet, papelería oficial y asesoramiento técnico legal.',
    color: '#92400e',
    detalles: [
      {
        id: 'admin-1',
        concepto: 'Conectividad, software de gestión y licencias',
        monto: 9000000,
        descripcion: 'Servicio corporativo de fibra óptica y licencias para atención al ciudadano.'
      },
      {
        id: 'admin-2',
        concepto: 'Servicios de imprenta, papelería y publicaciones oficiales',
        monto: 5000000,
        descripcion: 'Insumos de oficina y boletines oficiales municipales.'
      },
      {
        id: 'admin-3',
        concepto: 'Servicios de telefonía e insumos administrativos',
        monto: 4000000,
        descripcion: 'Servicios públicos de dependencias municipales.'
      }
    ]
  }
];

// Calculamos totales dinámicamente
export const totalIngresos = rawIngresos.reduce((acc, item) => acc + item.monto, 0); // ~$1.373.014.883,81
export const totalEgresos = rawEgresos.reduce((acc, item) => acc + item.monto, 0);   // $1.153.000.000,00
export const balance = totalIngresos - totalEgresos;                                 // ~$220.014.883,81
export const fechaActualizacion = '16 de Agosto de 2026';
export const periodoActual = 'Año 2026 (Enero - Agosto)';

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

// Formateador de moneda en pesos argentinos (formato ARS exacto con decimales opcionales)
export const formatCurrency = (amount: number, showDecimals: boolean = false): string => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: showDecimals ? 2 : 0,
    minimumFractionDigits: showDecimals ? 2 : 0
  }).format(amount);
};
