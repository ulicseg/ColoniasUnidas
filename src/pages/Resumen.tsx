import React from 'react';
import { TrendingUp, TrendingDown, Scale, Calendar, ArrowRight, Info, ShieldCheck, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { KpiCard } from '../components/kpi/KpiCard';
import { totalIngresos, totalEgresos, balance, fechaActualizacion, periodoActual } from '../data/mockData';

export const Resumen: React.FC = () => {
  return (
    <div className="space-y-4 sm:space-y-5 py-1 animate-in fade-in duration-300">
      
      {/* Encabezado y Mensaje de Bienvenida con Logos de Marca */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-neutral-200 shadow-sm relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-4">
            <div className="bg-neutral-50 p-2 rounded-xl border border-neutral-200 shadow-xs shrink-0 hidden sm:block">
              <img
                src="/assets/logo-cu.png"
                alt="Emblema Colonias Unidas"
                className="h-11 w-11 object-contain"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-brand-green bg-brand-green/10 border border-brand-green/20 px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Resumen Ejecutivo • {periodoActual}</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
                Estado Financiero de Colonias Unidas
              </h1>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl leading-snug mt-0.5">
                Bienvenido al portal público. En este panel podés consultar con total transparencia el balance oficial y las liquidaciones electrónicas acreditadas por la Tesorería General de la Provincia del Chaco.
              </p>
            </div>
          </div>

          <div className="flex flex-row md:flex-col items-center md:items-end gap-3 shrink-0 self-start md:self-center">
            <div className="bg-neutral-50 px-3 py-1 rounded-xl border border-neutral-200 shadow-xs">
              <img
                src="/assets/logo-hay2027.png"
                alt="HAY 2027 - Unidos por Colonias Unidas"
                className="h-7 sm:h-8 object-contain"
              />
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-600 bg-neutral-100 px-3 py-1 rounded-lg border border-neutral-200">
              <Calendar className="w-3.5 h-3.5 text-brand-green" />
              <span>Actualizado: {fechaActualizacion}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Destacado de Datos Reales de Tesorería del Chaco */}
      <div className="bg-gradient-to-r from-emerald-900 via-neutral-900 to-neutral-900 text-white rounded-xl p-4 sm:p-5 border border-emerald-800/60 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 bg-brand-green/20 border border-brand-green/40 rounded-xl shrink-0">
            <Building2 className="w-6 h-6 text-brand-green" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-black uppercase tracking-wider text-brand-green bg-brand-green/10 border border-brand-green/30 px-2 py-0.5 rounded">
                Datos Reales Oficiales 2026
              </span>
              <span className="text-[10px] text-neutral-400 font-mono">CUIT 30670226723</span>
            </div>
            <h3 className="text-sm sm:text-base font-extrabold text-white">
              Tesorería General de la Provincia del Chaco (Safyc 1003508)
            </h3>
            <p className="text-xs text-neutral-300 leading-snug mt-0.5">
              Se registran 33 órdenes de pago por un total acumulado de <strong className="text-brand-green">$1.324.514.883,81</strong> procesadas correctamente por el Nuevo Banco del Chaco S.A.
            </p>
          </div>
        </div>

        <Link
          to="/ingresos"
          className="bg-brand-green hover:bg-brand-green-hover text-white font-extrabold text-xs px-4 py-2.5 rounded-lg transition-colors shadow-sm shrink-0 flex items-center justify-center gap-2 group self-start md:self-center"
        >
          <span>Consultar 33 Pagos Electrónicos</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid de 3 KPI Cards Principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <KpiCard
          titulo="Total Ingresos 2026"
          monto={totalIngresos}
          subtitulo="Fondos transferidos por Provincia ($1.324,5M) y recaudación local."
          variant="green"
          icon={TrendingUp}
        />
        <KpiCard
          titulo="Total Egresos 2026"
          monto={totalEgresos}
          subtitulo="Inversión planificada en obras públicas, salud, limpieza y haberes."
          variant="amber"
          icon={TrendingDown}
        />
        <KpiCard
          titulo="Balance Neto"
          monto={balance}
          subtitulo="Superávit proyectado para imprevistos e infraestructura comunitaria."
          variant="neutral"
          icon={Scale}
        />
      </div>

      {/* Secciones de Acceso Rápido a Ingresos y Egresos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Acceso Rápido Ingresos */}
        <div className="bg-white rounded-xl p-4 sm:p-5 border border-neutral-200 hover:border-brand-green/50 transition-editorial shadow-sm flex flex-col justify-between group space-y-3">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-green bg-brand-green/10 px-2.5 py-0.5 rounded-md">
                De dónde viene la plata
              </span>
              <TrendingUp className="w-5 h-5 text-brand-green" />
            </div>
            <h2 className="text-base sm:text-lg font-extrabold text-neutral-900 group-hover:text-brand-green transition-colors">
              Explorar Origen de Ingresos
            </h2>
            <p className="text-xs text-neutral-600 leading-snug">
              Descubrí cómo se distribuyen las 33 transferencias de la Tesorería Provincial del Chaco, convenios del Instituto de Cultura y tasas municipales.
            </p>
          </div>
          <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
            <span className="text-[11px] text-neutral-400 font-medium">4 categorías • 33 pagos verificados</span>
            <Link
              to="/ingresos"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green hover:underline group-hover:translate-x-1 transition-transform"
            >
              <span>Ver detalle completo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Acceso Rápido Egresos */}
        <div className="bg-white rounded-xl p-4 sm:p-5 border border-neutral-200 hover:border-brand-amber/50 transition-editorial shadow-sm flex flex-col justify-between group space-y-3">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-amber bg-brand-amber/10 px-2.5 py-0.5 rounded-md">
                En qué se gasta
              </span>
              <TrendingDown className="w-5 h-5 text-brand-amber" />
            </div>
            <h2 className="text-base sm:text-lg font-extrabold text-neutral-900 group-hover:text-brand-amber transition-colors">
              Explorar Destino de Egresos
            </h2>
            <p className="text-xs text-neutral-600 leading-snug">
              Conocé el desglose presupuestario destinado a obras públicas, salud, limpieza urbana, educación y administración pública local.
            </p>
          </div>
          <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
            <span className="text-[11px] text-neutral-400 font-medium">6 rubros principales</span>
            <Link
              to="/egresos"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-amber hover:underline group-hover:translate-x-1 transition-transform"
            >
              <span>Ver detalle completo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>

      {/* Banner Informativo para el Vecino */}
      <div className="bg-[#0c0e0c] text-white rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-neutral-800 shadow-md">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-brand-green rounded-lg shrink-0">
            <Info className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="font-extrabold text-sm text-white">¿Tenés dudas sobre algún término presupuestario?</h3>
            <p className="text-xs text-neutral-400 leading-snug">
              Consultá nuestro Glosario de Preguntas Frecuentes traducido a un lenguaje llano y comprensible para todos los vecinos.
            </p>
          </div>
        </div>
        <Link
          to="/faq"
          className="bg-white text-neutral-900 hover:bg-neutral-100 px-4 py-2 rounded-lg font-bold text-xs shrink-0 transition-colors shadow-sm self-start sm:self-center"
        >
          Ir al Glosario FAQ
        </Link>
      </div>

    </div>
  );
};
