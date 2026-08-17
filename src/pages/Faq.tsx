import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, AlertTriangle } from 'lucide-react';
import { Accordion, AccordionItem } from '../components/ui/Accordion';

export const Faq: React.FC = () => {
  const faqItems: AccordionItem[] = [
    {
      id: 'iniciativa-portal',
      question: '¿Qué es este portal de Transparencia Ciudadana?',
      answer: 'Es una iniciativa independiente impulsada por el espacio político HAY 2027 (Unidos por Colonias Unidas) para garantizar que todos los vecinos de la ciudad tengan acceso libre, directo y sin complicaciones a la información sobre los recursos presupuestarios de Colonias Unidas.'
    },
    {
      id: 'origen-datos-ingresos',
      question: '¿De dónde provienen los datos de Ingresos mostrados?',
      answer: 'Los datos de Ingresos provienen de registros públicos y oficiales de la Consulta de Pagos Electrónicos de la Tesorería General de la Provincia del Chaco (Sistema SAFYC 1003508 / CUIT 30670226723), donde constan todas las liquidaciones de Coparticipación y Aportes enviadas a la ciudad durante 2026 ($1.324,5 millones).'
    },
    {
      id: 'egresos-cero',
      question: '¿Por qué la sección de Egresos figura en $ 0?',
      answer: 'Porque los datos provinciales solo registran lo que se le deposita al municipio (Ingresos). El detalle de cómo se gasta luego el dinero dentro de la ciudad requiere la rendición oficial de cuentas por parte de las autoridades municipales de Colonias Unidas. Los montos permanecerán en $0 hasta contar con ese informe feaciente.'
    },
    {
      id: 'invitacion-municipalidad',
      question: '¿Cómo se invita a la Municipalidad a participar?',
      answer: 'El portal es un espacio abierto a la comunidad. Invitamos formalmente a las autoridades de la Municipalidad de Colonias Unidas a sumarse a este proyecto de datos abiertos y compartir sus rendiciones oficiales de gastos para mostrárselas con total claridad a los vecinos.'
    },
    {
      id: 'coparticipacion',
      question: '¿Qué es la Coparticipación Provincial?',
      answer: 'Es el dinero proveniente de los impuestos recaudados en todo el país y la provincia (como IVA e Ingresos Brutos) que por ley le corresponde recibir a Colonias Unidas todos los meses para pagar sueldos de empleados, mantener servicios públicos y realizar obras.'
    },
    {
      id: 'sitio-oficial-legal',
      question: '¿Este sitio es la página web oficial del Municipio?',
      answer: 'No. Este es un monitor presupuestario ciudadano e independiente del espacio político HAY 2027. No constituye la sede electrónica ni representa al Gobierno Municipal de Colonias Unidas.'
    }
  ];

  return (
    <div className="space-y-6 py-2 animate-in fade-in duration-200 max-w-5xl mx-auto px-1 sm:px-0">
      
      {/* Encabezado */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-neutral-200 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-brand-green bg-brand-green/10 border border-brand-green/20 px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Glosario y Preguntas Frecuentes • HAY 2027</span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-neutral-900 tracking-tight">
              Respuestas a las Dudas de los Vecinos
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl leading-relaxed">
              Respuestas claras en lenguaje cotidiano sobre el origen de los datos, el funcionamiento del portal y el presupuesto de la ciudad.
            </p>
          </div>

          <div className="bg-neutral-50 p-2 rounded-2xl border border-neutral-200 shadow-xs shrink-0 self-start sm:self-center">
            <img
              src="/assets/logo-hay2027.png"
              alt="HAY 2027"
              className="h-8 sm:h-9 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Banner Informativo */}
      <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-emerald-900">
        <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <strong className="font-bold block">Transparencia para toda la comunidad</strong>
          <p className="text-emerald-800 leading-snug">
            Si tenés dudas sobre algún término o querés sugerir una nueva consulta, podés comunicarte con el equipo de HAY 2027.
          </p>
        </div>
      </div>

      {/* Lista de Acordeón */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h2 className="font-bold text-neutral-900 text-sm sm:text-base flex items-center gap-2">
            <HelpCircle className="w-4.5 h-4.5 text-brand-green" />
            <span>Preguntas Frecuentes Respondidas</span>
          </h2>
          <span className="text-[11px] text-neutral-500 font-bold bg-neutral-100 px-2.5 py-0.5 rounded-full border border-neutral-200">
            6 preguntas claves
          </span>
        </div>

        <Accordion items={faqItems} />
      </div>

      {/* Nota de Deslinde al Pie */}
      <div className="bg-white rounded-xl p-3.5 border border-neutral-200/80 text-[11px] text-neutral-500 leading-relaxed flex items-center gap-2">
        <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
        <span>Iniciativa de Transparencia Ciudadana del espacio político HAY 2027 • Colonias Unidas</span>
      </div>

    </div>
  );
};
