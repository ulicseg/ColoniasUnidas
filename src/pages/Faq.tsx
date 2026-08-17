import React from 'react';
import { BookOpen, HelpCircle } from 'lucide-react';
import { Accordion, AccordionItem } from '../components/ui/Accordion';

export const Faq: React.FC = () => {
  const faqItems: AccordionItem[] = [
    {
      id: 'coparticipacion',
      question: '¿Qué es la Coparticipación?',
      answer: 'Es un sistema mediante el cual los impuestos recaudados por el Gobierno Nacional y el Gobierno Provincial (como el IVA o Ingresos Brutos) se redistribuyen de forma automática y por ley entre los distritos y comunas. Es una de las fuentes principales con las que cuenta nuestra ciudad para financiar servicios esenciales y obras públicas.'
    },
    {
      id: 'tasa-local',
      question: '¿Qué es una Tasa o Contribución Local?',
      answer: 'Es la contribución económica que pagan los vecinos y comerciantes locales a cambio de un servicio urbano concreto directo por parte de la administración pública. Ejemplos de tasas son la recolección de residuos, el alumbrado público, la limpieza de calles, la inspección de comercios y la desinfección.'
    },
    {
      id: 'partida-presupuestaria',
      question: '¿Qué es una Partida Presupuestaria?',
      answer: 'Es un "monto reservado" con un destino específico. Cuando se aprueba el presupuesto anual, se dividen los fondos en diferentes categorías fijas (o partidas) para asegurar que haya dinero guardado exclusivamente para salud, obras, educación o sueldos, evitando que se use para otros fines no planificados.'
    },
    {
      id: 'balance',
      question: '¿Qué es el Balance?',
      answer: 'Es el resultado de restar todos los gastos (egresos) a todos los recursos que entraron (ingresos) en un período de tiempo determinado. Si la diferencia es positiva, significa que hubo superávit (ahorro positivo). Si es equilibrada, significa que el dinero recaudado fue suficiente para cubrir todos los compromisos asumidos.'
    },
    {
      id: 'recaudacion-local',
      question: '¿Qué es la Recaudación Local?',
      answer: 'Es el total del dinero que ingresa a las arcas de la ciudad cobrado directamente dentro de Colonias Unidas. Incluye el pago puntual de las tasas de los vecinos, habilitaciones de comercios, licencias de conducir y derechos de edificación.'
    },
    {
      id: 'ejecucion-presupuestaria',
      question: '¿Qué es la Ejecución Presupuestaria?',
      answer: 'Es el seguimiento en tiempo real de cómo se va gastando día a día el presupuesto estimado. Muestra qué porcentaje del dinero planificado para el año ya fue efectivamente invertido en obras concretas, compras de insumos o salarios del personal de servicios comunitarios.'
    }
  ];

  return (
    <div className="space-y-4 py-1 animate-in fade-in duration-200">
      
      {/* Encabezado */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-neutral-200 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-green bg-brand-green/10 border border-brand-green/20 px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider mb-1">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Glosario Ciudadano</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
              Preguntas Frecuentes y Términos
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 mt-0.5 max-w-2xl leading-snug">
              Explicación simple e intuitiva de las palabras técnicas que se usan en las cuentas públicas de la ciudad.
            </p>
          </div>

          <div className="bg-neutral-50 px-3 py-1 rounded-xl border border-neutral-200 shadow-xs shrink-0 self-start sm:self-center">
            <img
              src="/assets/logo-hay2027.png"
              alt="HAY 2027"
              className="h-7 sm:h-8 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Lista de Acordeón */}
      <div className="max-w-4xl mx-auto space-y-2">
        <div className="flex items-center justify-between px-1">
          <h2 className="font-bold text-neutral-900 text-xs sm:text-sm flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-brand-green" />
            <span>Conceptos Financieros Explicados</span>
          </h2>
          <span className="text-[11px] text-neutral-500 font-medium">6 términos definidos</span>
        </div>

        <Accordion items={faqItems} />
      </div>

    </div>
  );
};
