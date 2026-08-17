import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertCircle } from 'lucide-react';

export const Landing: React.FC = () => {
  return (
    <div className="min-h-screen lg:h-screen w-full bg-white text-neutral-900 flex flex-col justify-between px-4 sm:px-8 py-4 sm:py-6 select-none overflow-x-hidden">
      
      {/* Header Minimalista con Logos */}
      <header className="max-w-6xl w-full mx-auto flex justify-between items-center shrink-0 border-b border-neutral-100 pb-3 mb-2 sm:mb-4">
        <div className="flex items-center space-x-3">
          <img
            src="/assets/logo-hay2027.png"
            alt="Logo HAY 2027"
            className="h-10 sm:h-12 object-contain"
          />
          <div className="flex items-center gap-2.5">
            <span className="font-extrabold text-neutral-900 text-base sm:text-xl tracking-tight">
              HAY 2027
            </span>
            <span className="hidden sm:inline text-neutral-300 font-light">|</span>
            <span className="hidden sm:inline text-xs sm:text-sm font-extrabold text-brand-green tracking-widest uppercase">
              TRANSPARENCIA CIUDADANA
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <img
            src="/assets/logo-cu.png"
            alt="Emblema Colonias Unidas"
            className="h-9 sm:h-10 object-contain opacity-80"
          />
        </div>
      </header>

      {/* Hero Contenido Central */}
      <main className="max-w-3xl w-full mx-auto text-center my-auto flex flex-col items-center justify-center space-y-4 sm:space-y-5 px-3 py-1 shrink-0">
        
        {/* Banner de Identidad Política / Ciudadana */}
        <div className="inline-flex items-center gap-2.5 bg-neutral-900 text-white px-4 py-1.5 rounded-full shadow-xs border border-neutral-800">
          <img
            src="/assets/logo-hay2027.png"
            alt="HAY 2027 Banner"
            className="h-5 sm:h-6 object-contain brightness-0 invert"
          />
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0" />
          <span className="text-xs font-bold text-neutral-200">Propuesta de Transparencia del Espacio HAY 2027</span>
        </div>

        {/* Hero visual */}
        <div className="flex flex-col items-center justify-center space-y-3 pt-1">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight max-w-2xl">
            Transparencia ciudadana para <br className="hidden sm:inline" />
            <span className="text-brand-green font-semibold">Colonias Unidas</span>.
          </h1>
        </div>

        {/* Explicación Concisa e Independiente */}
        <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed font-normal">
          Un espacio libre e independiente presentado por <strong>HAY 2027</strong> para acercarle a todos los vecinos la información pública del presupuesto de nuestra ciudad.
        </p>

        {/* 2 Puntos clave inline */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-neutral-600">
          <span className="flex items-center gap-2 bg-neutral-50 px-3 py-1.5 rounded-lg border border-neutral-200/60">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            Ingresos Provinciales Abiertos (Tesorería Chaco)
          </span>
          <span className="flex items-center gap-2 bg-neutral-50 px-3 py-1.5 rounded-lg border border-neutral-200/60">
            <span className="w-2 h-2 rounded-full bg-brand-amber" />
            Propuestas de Inversión Comunitaria
          </span>
        </div>

        {/* Botón Principal */}
        <div className="pt-2">
          <Link
            to="/inicio"
            className="inline-flex items-center justify-center gap-3 bg-brand-green hover:bg-brand-green-hover text-white font-extrabold text-base sm:text-lg px-10 py-3.5 rounded-2xl shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group w-full sm:w-auto text-center"
          >
            <span>Ingresar al Monitor</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Pequeña aclaración legal */}
        <div className="pt-1 text-[11px] text-neutral-400 flex items-center justify-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <span>Iniciativa ciudadana independiente • No representa al Gobierno Municipal</span>
        </div>

      </main>

      {/* Footer al Pie del Documento */}
      <footer className="max-w-6xl w-full mx-auto flex flex-col items-center shrink-0 pt-3 border-t border-neutral-100">
        <div className="text-xs text-neutral-500 font-semibold tracking-wide py-1">
          <span>HAY 2027 • Unidos por Colonias Unidas • {new Date().getFullYear()}</span>
        </div>
      </footer>

    </div>
  );
};
