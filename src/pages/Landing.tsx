import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Landing: React.FC = () => {
  return (
    <div className="h-screen max-h-screen w-full bg-white text-neutral-900 flex flex-col justify-between overflow-hidden px-6 py-6 sm:py-8 select-none">
      
      {/* Header Minimalista con Logos */}
      <header className="max-w-6xl w-full mx-auto flex justify-between items-center shrink-0 border-b border-neutral-100 pb-4">
        <div className="flex items-center space-x-3">
          <img
            src="/assets/logo-cu.png"
            alt="Logo Escudo Colonias Unidas"
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
          />
          <div className="flex items-center gap-2.5">
            <span className="font-extrabold text-neutral-900 text-base sm:text-xl tracking-tight">
              Colonias Unidas
            </span>
            <span className="hidden sm:inline text-neutral-300 font-light">|</span>
            <span className="hidden sm:inline text-xs sm:text-sm font-bold text-brand-green tracking-widest uppercase">
              UNIDOS POR UNIDAS
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <img
            src="/assets/logo-hay2027.png"
            alt="HAY 2027 - Unidos por Colonias Unidas"
            className="h-8 sm:h-10 object-contain"
          />
        </div>
      </header>

      {/* Hero Contenido Central con Logos e Identidad */}
      <main className="max-w-4xl w-full mx-auto text-center space-y-6 my-auto shrink-0 px-4">
        
        {/* Banner de Campaña Superior con HAY 2027 */}
        <div className="inline-flex items-center gap-3 bg-neutral-900 text-white px-5 py-2 rounded-2xl shadow-sm border border-neutral-800">
          <img
            src="/assets/logo-hay2027.png"
            alt="HAY 2027 Banner"
            className="h-6 sm:h-7 object-contain brightness-0 invert"
          />
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0" />
          <span className="text-xs sm:text-sm font-bold text-neutral-200">Portal Público Municipal</span>
        </div>

        {/* Hero visual con Logo CU de Escudo + Título */}
        <div className="flex flex-col items-center justify-center space-y-4 pt-2">
          <div className="bg-white p-3 rounded-2xl border border-neutral-200 shadow-md transform hover:scale-105 transition-transform duration-300">
            <img
              src="/assets/logo-cu.png"
              alt="Emblema Oficial Colonias Unidas"
              className="h-20 sm:h-28 w-20 sm:w-28 object-contain"
            />
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-[1.15]">
            Información financiera pública, <br className="hidden sm:inline" />
            <span className="text-brand-green font-normal">clara y abierta para todos</span>.
          </h1>
        </div>

        {/* Explicación Agrandada */}
        <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Un espacio simple para conocer en detalle de dónde provienen los recursos de nuestra municipalidad y en qué se invierten para la ciudad.
        </p>

        {/* 2 Puntos clave inline */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-1 text-xs sm:text-sm font-semibold text-neutral-600">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            Origen de Ingresos (Coparticipación y Tasas)
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-amber" />
            Destino de Egresos (Obras, Salud y Servicios)
          </span>
        </div>

      </main>

      {/* Botón Principal Protagónico Centrado Abajo + Footer */}
      <footer className="max-w-6xl w-full mx-auto flex flex-col items-center gap-4 shrink-0 pt-3 border-t border-neutral-100">
        
        <Link
          to="/inicio"
          className="inline-flex items-center justify-center gap-3.5 bg-brand-green hover:bg-brand-green-hover text-white font-extrabold text-lg sm:text-xl px-11 py-3.5 rounded-2xl shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group w-full sm:w-auto text-center"
        >
          <span>Ingresar al Portal</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </Link>

        <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-500 font-semibold tracking-wide">
          <span>Municipalidad de Colonias Unidas • {new Date().getFullYear()}</span>
        </div>

      </footer>

    </div>
  );
};
