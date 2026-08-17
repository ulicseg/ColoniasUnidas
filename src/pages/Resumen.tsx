import React from 'react';
import { TrendingUp, TrendingDown, Scale, Calendar, ArrowRight, ShieldCheck, FileText, Handshake, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { totalIngresos, totalEgresos, balance, fechaActualizacion, formatCurrency } from '../data/mockData';

export const Resumen: React.FC = () => {
  return (
    <div className="space-y-6 py-2 animate-in fade-in duration-300 max-w-6xl mx-auto">
      
      {/* Encabezado Minimalista y Limpio */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-neutral-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-neutral-50 p-2.5 rounded-2xl border border-neutral-200 shadow-xs shrink-0 hidden sm:block">
            <img
              src="/assets/logo-hay2027.png"
              alt="Logo HAY 2027"
              className="h-10 w-auto object-contain"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 text-brand-green bg-brand-green/10 border border-brand-green/20 px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>HAY 2027 • Transparencia Ciudadana</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
              Monitor Presupuestario de Colonias Unidas
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-xl leading-relaxed mt-0.5">
              Iniciativa independiente para que cualquier vecino conozca con claridad los fondos públicos de la ciudad.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
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
                1. Origen de Fondos (Oficial)
              </span>
              <div className="p-2 rounded-xl bg-brand-green/10 text-brand-green">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
            <h2 className="text-base font-extrabold text-neutral-900">
              Total Ingresos
            </h2>
            <p className="text-xs text-neutral-500 font-normal">
              Coparticipación provincial verificada ($1.324,5M) y tasas.
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
            <p className="text-xs font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/80 inline-block">
              A la espera de participación de la Municipalidad
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
            <span>Ver propuesta de gastos</span>
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
              Fondo proyectado para imprevistos y obras.
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

      {/* Banner de Invitación Abierta a la Gestión Municipal */}
      <div className="bg-neutral-900 text-white rounded-2xl p-5 sm:p-6 border border-neutral-800 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="p-3 bg-brand-amber text-white rounded-2xl shrink-0">
            <Handshake className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-brand-amber bg-brand-amber/20 border border-brand-amber/30 px-2 py-0.5 rounded">
              Iniciativa de Transparencia HAY 2027
            </span>
            <h3 className="text-sm sm:text-base font-extrabold text-white">
              Invitación abierta a la Municipalidad de Colonias Unidas
            </h3>
            <p className="text-xs text-neutral-300 leading-snug max-w-2xl">
              Los datos de los Ingresos Provinciales ya son públicos y verificados. Invitamos a la gestión municipal a sumar sus informes de gastos oficiales para mostrárselos con claridad a la gente.
            </p>
          </div>
        </div>

        <Link
          to="/egresos"
          className="bg-brand-amber hover:bg-amber-600 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl transition-colors shadow-sm shrink-0 flex items-center justify-center gap-2 group self-start md:self-center"
        >
          <span>Ver propuesta de transparencia</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Letra Chica con Deslinde Legal y Fuente Oficial al Pie */}
      <div className="pt-2">
        <div className="bg-white rounded-2xl p-4 border border-neutral-200 text-[11px] text-neutral-500 leading-relaxed space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 text-neutral-700 font-bold text-xs uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Aviso Legal e Identidad del Portal</span>
          </div>
          <p>
            Este sitio es una <strong>iniciativa ciudadana e independiente impulsada por el espacio político HAY 2027</strong> para promover la transparencia pública en Colonias Unidas. <strong>No constituye el sitio oficial ni la sede electrónica de la Municipalidad de Colonias Unidas.</strong>
          </p>
          <div className="pt-1 border-t border-neutral-100 flex items-start gap-2">
            <FileText className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
            <p className="text-[10px]">
              <strong>Fuente de ingresos:</strong> Consulta de Pagos Electrónicos de la Tesorería General del Chaco (Safyc 1003508 • CUIT 30670226723 Municipalidad de Colonias Unidas • Ejercicio 2026).
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
