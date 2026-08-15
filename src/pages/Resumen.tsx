import React from 'react';
import { TrendingUp, TrendingDown, Scale, Calendar, ArrowRight, Info, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { KpiCard } from '../components/kpi/KpiCard';
import { totalIngresos, totalEgresos, balance, fechaActualizacion, periodoActual } from '../data/mockData';

export const Resumen: React.FC = () => {
  return (
    <div className="space-y-10 sm:space-y-12 py-2 animate-in fade-in duration-300">
      
      {/* Encabezado y Mensaje de Bienvenida con Logos de Marca */}
      <div className="bg-white rounded-2xl p-7 sm:p-10 border border-neutral-200 shadow-sm relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
          <div className="flex items-start gap-5">
            <div className="bg-neutral-50 p-2.5 rounded-2xl border border-neutral-200 shadow-xs shrink-0 hidden sm:block">
              <img
                src="/assets/logo-cu.png"
                alt="Emblema Colonias Unidas"
                className="h-16 w-16 object-contain"
              />
            </div>
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-brand-green bg-brand-green/10 border border-brand-green/20 px-3.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Resumen Ejecutivo • {periodoActual}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 tracking-tight">
                Estado Financiero de Colonias Unidas
              </h1>
              <p className="text-sm sm:text-base text-neutral-600 max-w-2xl leading-relaxed">
                Bienvenido al portal público. En este panel podés ver de forma simple e intuitiva el total de recursos ingresados y gastados en la ciudad durante este período.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3.5 shrink-0 self-start md:self-center pt-2 md:pt-0">
            <div className="bg-neutral-50 px-4 py-2 rounded-2xl border border-neutral-200 shadow-xs">
              <img
                src="/assets/logo-hay2027.png"
                alt="HAY 2027 - Unidos por Colonias Unidas"
                className="h-10 sm:h-11 object-contain"
              />
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-600 bg-neutral-100 px-3.5 py-2 rounded-xl border border-neutral-200">
              <Calendar className="w-4 h-4 text-brand-green" />
              <span>Actualizado: {fechaActualizacion}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de 3 KPI Cards Principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <KpiCard
          titulo="Total Ingresos"
          monto={totalIngresos}
          subtitulo="Fondos acumulados por coparticipación y tasas de los vecinos."
          variant="green"
          icon={TrendingUp}
        />
        <KpiCard
          titulo="Total Egresos"
          monto={totalEgresos}
          subtitulo="Inversión total en obras, servicios, salud y salarios."
          variant="amber"
          icon={TrendingDown}
        />
        <KpiCard
          titulo="Balance Neto"
          monto={balance}
          subtitulo="Superávit disponible para imprevistos y futuras obras."
          variant="neutral"
          icon={Scale}
        />
      </div>

      {/* Secciones de Acceso Rápido a Ingresos y Egresos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        
        {/* Acceso Rápido Ingresos */}
        <div className="bg-white rounded-2xl p-7 sm:p-8 border border-neutral-200 hover:border-brand-green/50 transition-editorial shadow-sm flex flex-col justify-between group space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green bg-brand-green/10 px-3 py-1 rounded-md">
                De dónde viene la plata
              </span>
              <TrendingUp className="w-6 h-6 text-brand-green" />
            </div>
            <h2 className="text-xl font-extrabold text-neutral-900 group-hover:text-brand-green transition-colors pt-1">
              Explorar Origen de Ingresos
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Descubrí cómo se distribuyen la Coparticipación Nacional, la Provincial y la recaudación de los propios impuestos y tasas de la ciudad.
            </p>
          </div>
          <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
            <span className="text-xs text-neutral-400 font-medium">4 categorías registradas</span>
            <Link
              to="/ingresos"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-green hover:underline group-hover:translate-x-1 transition-transform"
            >
              <span>Ver detalle completo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Acceso Rápido Egresos */}
        <div className="bg-white rounded-2xl p-7 sm:p-8 border border-neutral-200 hover:border-brand-amber/50 transition-editorial shadow-sm flex flex-col justify-between group space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-amber bg-brand-amber/10 px-3 py-1 rounded-md">
                En qué se gasta
              </span>
              <TrendingDown className="w-6 h-6 text-brand-amber" />
            </div>
            <h2 className="text-xl font-extrabold text-neutral-900 group-hover:text-brand-amber transition-colors pt-1">
              Explorar Destino de Egresos
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Conocé el desglose presupuestario destinado a obras públicas, salud, limpieza urbana, educación y administración pública local.
            </p>
          </div>
          <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
            <span className="text-xs text-neutral-400 font-medium">6 rubros principales</span>
            <Link
              to="/egresos"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-amber hover:underline group-hover:translate-x-1 transition-transform"
            >
              <span>Ver detalle completo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

      {/* Banner Informativo para el Vecino */}
      <div className="bg-[#0c0e0c] text-white rounded-2xl p-7 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-neutral-800 shadow-md mt-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-brand-green rounded-xl shrink-0">
            <Info className="w-6 h-6 text-white" />
          </div>
          <div className="space-y-1">
            <h3 className="font-extrabold text-base sm:text-lg text-white">¿Tenés dudas sobre algún término presupuestario?</h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
              Consultá nuestro Glosario de Preguntas Frecuentes traducido a un lenguaje llano y comprensible para todos los vecinos.
            </p>
          </div>
        </div>
        <Link
          to="/faq"
          className="bg-white text-neutral-900 hover:bg-neutral-100 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm shrink-0 transition-colors shadow-sm self-start sm:self-center"
        >
          Ir al Glosario FAQ
        </Link>
      </div>

    </div>
  );
};
