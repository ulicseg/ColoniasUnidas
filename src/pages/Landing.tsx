import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Landing: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white text-neutral-900 flex flex-col justify-between px-6 py-8 sm:py-12 select-none">
      
      {/* Header Minimalista con Logos */}
      <header className="max-w-6xl w-full mx-auto flex justify-between items-center shrink-0 border-b border-neutral-100 pb-6 mb-8 sm:mb-12">
        <div className="flex items-center space-x-3.5">
          <img
            src="/assets/logo-cu.png"
            alt="Logo Escudo Colonias Unidas"
            className="h-11 w-11 sm:h-14 sm:w-14 object-contain"
          />
          <div className="flex items-center gap-3">
            <span className="font-black text-neutral-900 text-lg sm:text-2xl tracking-tight">
              Colonias Unidas
            </span>
            <span className="hidden sm:inline text-neutral-300 font-light">|</span>
            <span className="hidden sm:inline text-xs sm:text-sm font-extrabold text-brand-green tracking-widest uppercase">
              UNIDOS POR UNIDAS
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="/assets/logo-hay2027.png"
            alt="HAY 2027 - Unidos por Colonias Unidas"
            className="h-9 sm:h-11 object-contain"
          />
        </div>
      </header>

      {/* Hero Contenido Central con Espaciamiento Holgado */}
      <main className="max-w-4xl w-full mx-auto text-center space-y-8 sm:space-y-10 my-auto py-8 sm:py-12 px-4">
        
        {/* Banner de Campaña Superior con HAY 2027 */}
        <div className="inline-flex items-center gap-3 bg-neutral-900 text-white px-6 py-2.5 rounded-2xl shadow-sm border border-neutral-800">
          <img
            src="/assets/logo-hay2027.png"
            alt="HAY 2027 Banner"
            className="h-6 sm:h-7 object-contain brightness-0 invert"
          />
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0" />
          <span className="text-xs sm:text-sm font-bold text-neutral-200">Propuesta de Transparencia Ciudadana</span>
        </div>

        {/* Hero visual con Logo CU de Escudo + Título */}
        <div className="flex flex-col items-center justify-center space-y-6 pt-2">
          <div className="bg-white p-4 rounded-3xl border border-neutral-200/80 shadow-lg transform hover:scale-105 transition-all duration-300">
            <img
              src="/assets/logo-cu.png"
              alt="Emblema Oficial Colonias Unidas"
              className="h-24 sm:h-36 w-24 sm:w-36 object-contain"
            />
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-[1.18] max-w-3xl">
            Información financiera pública, <br className="hidden sm:inline" />
            <span className="text-brand-green font-semibold">clara y abierta para todos</span>.
          </h1>
        </div>

        {/* Explicación Amplia */}
        <p className="text-base sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Un espacio simple para conocer en detalle de dónde provienen los recursos de nuestra ciudad y en qué se invierten para el desarrollo comunitario.
        </p>

        {/* 2 Puntos clave inline */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-4 text-xs sm:text-sm font-bold text-neutral-600">
          <span className="flex items-center gap-2.5 bg-neutral-50 px-4 py-2 rounded-xl border border-neutral-200/60">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-green" />
            Origen de Ingresos (Coparticipación y Tasas)
          </span>
          <span className="flex items-center gap-2.5 bg-neutral-50 px-4 py-2 rounded-xl border border-neutral-200/60">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-amber" />
            Destino de Egresos (Obras, Salud y Servicios)
          </span>
        </div>

      </main>

      {/* Botón Principal Protagónico Centrado Abajo + Footer */}
      <footer className="max-w-6xl w-full mx-auto flex flex-col items-center gap-6 shrink-0 pt-8 mt-8 sm:mt-12 border-t border-neutral-100">
        
        <Link
          to="/inicio"
          className="inline-flex items-center justify-center gap-3.5 bg-brand-green hover:bg-brand-green-hover text-white font-extrabold text-lg sm:text-xl px-12 py-4 rounded-2xl shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group w-full sm:w-auto text-center"
        >
          <span>Ingresar al Portal</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </Link>

        <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-500 font-semibold tracking-wide pt-2">
          <span>Colonias Unidas • {new Date().getFullYear()}</span>
        </div>

      </footer>

    </div>
  );
};
