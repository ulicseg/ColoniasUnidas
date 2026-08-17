import React from 'react';
import { TrendingUp, TrendingDown, Scale, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { totalIngresos, totalEgresos, balance, fechaActualizacion, periodoActual, formatCurrency } from '../data/mockData';

export const Resumen: React.FC = () => {
  return (
    <div className="space-y-6 py-2 animate-in fade-in duration-300 max-w-6xl mx-auto">
      
      {/* Encabezado Minimalista y Limpio */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-neutral-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-neutral-50 p-2.5 rounded-2xl border border-neutral-200 shadow-xs shrink-0 hidden sm:block">
            <img
              src="/assets/logo-cu.png"
              alt="Emblema Colonias Unidas"
              className="h-12 w-12 object-contain"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 text-brand-green bg-brand-green/10 border border-brand-green/20 px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{periodoActual}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
              Estado Financiero de la Ciudad
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-xl leading-relaxed mt-0.5">
              Resumen público y simplificado del presupuesto municipal de Colonias Unidas.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
          <div className="bg-neutral-50 px-3 py-1.5 rounded-xl border border-neutral-200 shadow-xs">
            <img
              src="/assets/logo-hay2027.png"
              alt="HAY 2027"
              className="h-7 sm:h-8 object-contain"
            />
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-600 bg-neutral-100 px-3 py-1.5 rounded-xl border border-neutral-200">
            <Calendar className="w-3.5 h-3.5 text-brand-green" />
            <span>Actualizado: {fechaActualizacion}</span>
          </div>
        </div>
      </div>

      {/* Grid Protagónico de las 3 Cifras Principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Card 1: Ingresos */}
        <div className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-brand-green/50 shadow-sm transition-all flex flex-col justify-between space-y-4 relative overflow-hidden group">
          <div className="w-full h-1.5 bg-brand-green absolute top-0 left-0 right-0" />
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                1. Origen de Fondos
              </span>
              <div className="p-2 rounded-xl bg-brand-green/10 text-brand-green">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
            <h2 className="text-base font-extrabold text-neutral-900">
              Total Ingresos
            </h2>
            <p className="text-xs text-neutral-500 font-normal">
              Coparticipación provincial y tasas locales.
            </p>
          </div>

          <div className="py-2 text-center">
            <span className="text-3xl sm:text-4xl font-black text-brand-green tabular-nums block">
              {formatCurrency(totalIngresos)}
            </span>
          </div>

          <Link
            to="/ingresos"
            className="inline-flex items-center justify-center gap-2 bg-neutral-50 hover:bg-brand-green hover:text-white border border-neutral-200 hover:border-brand-green text-neutral-800 font-bold text-xs py-2.5 px-4 rounded-xl transition-all group-hover:shadow-xs"
          >
            <span>Ver de dónde viene la plata</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Card 2: Egresos */}
        <div className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-brand-amber/50 shadow-sm transition-all flex flex-col justify-between space-y-4 relative overflow-hidden group">
          <div className="w-full h-1.5 bg-brand-amber absolute top-0 left-0 right-0" />
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                2. Destino del Dinero
              </span>
              <div className="p-2 rounded-xl bg-brand-amber/10 text-brand-amber">
                <TrendingDown className="w-5 h-5" />
              </div>
            </div>
            <h2 className="text-base font-extrabold text-neutral-900">
              Total Invertido
            </h2>
            <p className="text-xs text-neutral-500 font-normal">
              Obras, salud, limpieza y sueldos.
            </p>
          </div>

          <div className="py-2 text-center">
            <span className="text-3xl sm:text-4xl font-black text-brand-amber tabular-nums block">
              {formatCurrency(totalEgresos)}
            </span>
          </div>

          <Link
            to="/egresos"
            className="inline-flex items-center justify-center gap-2 bg-neutral-50 hover:bg-brand-amber hover:text-white border border-neutral-200 hover:border-brand-amber text-neutral-800 font-bold text-xs py-2.5 px-4 rounded-xl transition-all group-hover:shadow-xs"
          >
            <span>Ver en qué se gasta</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Card 3: Balance / Disponible */}
        <div className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-neutral-400 shadow-sm transition-all flex flex-col justify-between space-y-4 relative overflow-hidden group">
          <div className="w-full h-1.5 bg-neutral-900 absolute top-0 left-0 right-0" />
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                3. Resultado Neto
              </span>
              <div className="p-2 rounded-xl bg-neutral-100 text-neutral-800">
                <Scale className="w-5 h-5" />
              </div>
            </div>
            <h2 className="text-base font-extrabold text-neutral-900">
              Dinero Disponible
            </h2>
            <p className="text-xs text-neutral-500 font-normal">
              Fondo de reserva para imprevistos y obras.
            </p>
          </div>

          <div className="py-2 text-center">
            <span className="text-3xl sm:text-4xl font-black text-neutral-900 tabular-nums block">
              {formatCurrency(balance)}
            </span>
          </div>

          <div className="text-center py-2 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 rounded-xl">
            ✓ Balance Positivo (Superávit)
          </div>
        </div>

      </div>

      {/* Acceso Rápido Directo de 2 Filas Limpias */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <Link
          to="/ingresos"
          className="bg-white hover:bg-neutral-50 rounded-2xl p-5 border border-neutral-200 hover:border-brand-green transition-all shadow-xs flex items-center justify-between group"
        >
          <div className="space-y-0.5">
            <h3 className="font-extrabold text-neutral-900 group-hover:text-brand-green transition-colors text-sm sm:text-base">
              Ver detalle de Ingresos mes a mes
            </h3>
            <p className="text-xs text-neutral-500">
              Coparticipación de la Provincia del Chaco y recaudación local.
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-brand-green group-hover:translate-x-1 transition-transform shrink-0" />
        </Link>

        <Link
          to="/egresos"
          className="bg-white hover:bg-neutral-50 rounded-2xl p-5 border border-neutral-200 hover:border-brand-amber transition-all shadow-xs flex items-center justify-between group"
        >
          <div className="space-y-0.5">
            <h3 className="font-extrabold text-neutral-900 group-hover:text-brand-amber transition-colors text-sm sm:text-base">
              Ver detalle de Gastos por área
            </h3>
            <p className="text-xs text-neutral-500">
              Desglose de inversión en obras, limpieza, salud y personal.
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-brand-amber group-hover:translate-x-1 transition-transform shrink-0" />
        </Link>
      </div>

    </div>
  );
};
