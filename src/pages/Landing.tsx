import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, ArrowRight, ShieldCheck } from 'lucide-react';

export const Landing: React.FC = () => {
  return (
    <div className="h-screen max-h-screen w-full bg-white text-neutral-900 flex flex-col justify-between overflow-hidden px-6 py-6 sm:py-8 select-none">
      
      {/* Header Minimalista Sobrio con Texto de Marca Más Grande */}
      <header className="max-w-6xl w-full mx-auto flex justify-between items-center shrink-0 border-b border-neutral-100 pb-4">
        <div className="flex items-center space-x-3">
          <Landmark className="w-6 h-6 text-brand-green" />
          <div className="flex items-center gap-2.5">
            <span className="font-extrabold text-neutral-900 text-base sm:text-lg tracking-tight">
              Colonias Unidas
            </span>
            <span className="text-neutral-300 font-light">|</span>
            <span className="text-xs sm:text-sm font-bold text-brand-green tracking-widest uppercase">
              UNIDOS POR UNIDAS
            </span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-sm text-neutral-600 font-semibold">
          <ShieldCheck className="w-4 h-4 text-brand-green" />
          <span>Transparencia Financiera</span>
        </div>
      </header>

      {/* Hero Contenido Central con Fuentes Agrandadas */}
      <main className="max-w-4xl w-full mx-auto text-center space-y-7 my-auto shrink-0 px-4">
        
        {/* Tag Superior Discreto */}
        <div className="inline-flex items-center gap-2 text-sm font-bold text-neutral-600 border border-neutral-200 bg-neutral-50 px-4 py-2 rounded-full shadow-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-green shrink-0" />
          <span>Portal Público Municipal</span>
        </div>

        {/* Título Principal Editorial Agrandado */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-neutral-900 tracking-tight leading-[1.12]">
          Información financiera pública, <br className="hidden sm:inline" />
          <span className="text-brand-green font-normal">clara y abierta para todos</span>.
        </h1>

        {/* Explicación Agrandada */}
        <p className="text-base sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Un espacio simple para conocer en detalle de dónde provienen los recursos de nuestra municipalidad y en qué se invierten para la ciudad.
        </p>

        {/* 2 Puntos clave inline agrandados */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-2 text-sm sm:text-base font-semibold text-neutral-600">
          <span className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            Origen de Ingresos (Coparticipación y Tasas)
          </span>
          <span className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-brand-amber" />
            Destino de Egresos (Obras, Salud y Servicios)
          </span>
        </div>

      </main>

      {/* Botón Principal Protagónico Centrado Abajo con Texto Agrandado + Footer */}
      <footer className="max-w-6xl w-full mx-auto flex flex-col items-center gap-5 shrink-0 pt-3 border-t border-neutral-100">
        
        <Link
          to="/inicio"
          className="inline-flex items-center justify-center gap-3.5 bg-brand-green hover:bg-brand-green-hover text-white font-extrabold text-lg sm:text-xl px-11 py-4 rounded-2xl shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group w-full sm:w-auto text-center"
        >
          <span>Ingresar al Portal</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </Link>

        <p className="text-xs sm:text-sm text-neutral-500 font-semibold tracking-wide">
          Municipalidad de Colonias Unidas • {new Date().getFullYear()}
        </p>

      </footer>

    </div>
  );
};
