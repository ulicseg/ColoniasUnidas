import React from 'react';
import { HelpCircle, BookOpen, ShieldCheck } from 'lucide-react';
import { Accordion, AccordionItem } from '../components/ui/Accordion';

export const Faq: React.FC = () => {
  const faqItems: AccordionItem[] = [
    {
      id: 'coparticipacion',
      question: '¿Qué es la Coparticipación?',
      answer: 'Es un sistema mediante el cual los impuestos recaudados por el Gobierno Nacional y el Gobierno Provincial (como el IVA o Ingresos Brutos) se redistribuyen de forma automática y por ley entre los municipios. Es una de las fuentes principales con las que cuenta nuestra ciudad para financiar servicios esenciales y obras públicas.'
    },
    {
      id: 'tasa-municipal',
      question: '¿Qué es una Tasa Municipal?',
      answer: 'Es la contribución económica que pagan los vecinos y comerciantes locales a cambio de un servicio concreto directo por parte del municipio. Ejemplos de tasas son la recolección de residuos, el alumbrado público, la limpieza de calles, la inspección de comercios y la desinfección.'
    },
    {
      id: 'partida-presupuestaria',
      question: '¿Qué es una Partida Presupuestaria?',
      answer: 'Es un "monto reservado" con un destino específico. Cuando el municipio aprueba su presupuesto anual, divide los fondos en diferentes categorías fijas (o partidas) para asegurar que haya dinero guardado exclusivamente para salud, obras, educación o sueldos, evitando que se use para otros fines no planificados.'
    },
    {
      id: 'balance',
      question: '¿Qué es el Balance?',
      answer: 'Es el resultado de restar todos los gastos (egresos) a todos los recursos que entraron (ingresos) en un período de tiempo determinado. Si la diferencia es positiva, significa que hubo superávit (ahorro positivo). Si es equilibrada, significa que el dinero recaudado fue suficiente para cubrir todos los compromisos asumidos.'
    },
    {
      id: 'recaudacion-local',
      question: '¿Qué es la Recaudación Local?',
      answer: 'Es el total del dinero que ingresa a las arcas municipales cobrado directamente dentro de la ciudad de Colonias Unidas. Incluye el pago puntual de las tasas de los vecinos, habilitaciones de comercios, licencias de conducir y derechos de edificación.'
    },
    {
      id: 'ejecucion-presupuestaria',
      question: '¿Qué es la Ejecución Presupuestaria?',
      answer: 'Es el seguimiento en tiempo real de cómo se va gastando día a día el presupuesto estimado. Muestra qué porcentaje del dinero planificado para el año ya fue efectivamente invertido en obras concretas, compras de insumos o salarios del personal municipal.'
    }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Encabezado */}
      <div className="bg-white rounded-xl p-6 sm:p-7 border border-neutral-200 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-green bg-brand-green/10 border border-brand-green/20 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Glosario para el Vecino</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
              Preguntas Frecuentes y Términos Clave
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-2xl leading-relaxed">
              Explicación directa y en lenguaje sencillo de los principales conceptos presupuestarios que encontrás en este portal de transparencia.
            </p>
          </div>

          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-3.5 flex items-center gap-3 shrink-0">
            <ShieldCheck className="w-5 h-5 text-brand-green" />
            <div>
              <span className="text-xs font-bold text-neutral-900 block">Información Clara</span>
              <span className="text-[11px] text-neutral-500 block">Sin jerga contable compleja</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Acordeón */}
      <div className="max-w-4xl mx-auto space-y-3">
        <div className="flex items-center justify-between px-1">
          <h2 className="font-bold text-neutral-900 text-sm sm:text-base flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-brand-green" />
            <span>Conceptos Financieros Explicados</span>
          </h2>
          <span className="text-xs text-neutral-500 font-medium">6 términos definidos</span>
        </div>

        <Accordion items={faqItems} />
      </div>



    </div>
  );
};
