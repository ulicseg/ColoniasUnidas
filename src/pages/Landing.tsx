import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Landing: React.FC = () => {
  return (
    <div className="min-h-screen lg:h-screen w-full bg-white text-neutral-900 flex flex-col justify-between px-4 sm:px-8 py-4 sm:py-6 select-none overflow-x-hidden">
      
      {/* Header Minimalista con Logos */}
      <header className="max-w-6xl w-full mx-auto flex justify-between items-center shrink-0 border-b border-neutral-100 pb-3 mb-2 sm:mb-4">
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
            <span className="hidden sm:inline text-xs sm:text-sm font-extrabold text-brand-green tracking-widest uppercase">
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

      {/* Hero Contenido Central Ajustado para Primer Paneo Completo */}
      <main className="max-w-3xl w-full mx-auto text-center my-auto flex flex-col items-center justify-center space-y-4 sm:space-y-5 px-3 py-1 shrink-0">
        
        {/* Banner de Campaña Superior */}
        <div className="inline-flex items-center gap-2.5 bg-neutral-900 text-white px-4 py-1.5 rounded-full shadow-xs border border-neutral-800">
          <img
            src="/assets/logo-hay2027.png"
            alt="HAY 2027 Banner"
            className="h-5 sm:h-6 object-contain brightness-0 invert"
          />
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0" />
          <span className="text-xs font-bold text-neutral-200">Propuesta de Transparencia Ciudadana</span>
        </div>

        {/* Hero visual con Logo Escudo + Título Compacto */}
        <div className="flex flex-col items-center justify-center space-y-3 pt-1">
          <div className="bg-white p-2.5 rounded-2xl border border-neutral-200/80 shadow-md transform hover:scale-105 transition-all duration-300">
            <img
              src="/assets/logo-cu.png"
              alt="Emblema Oficial Colonias Unidas"
              className="h-16 sm:h-24 w-16 sm:w-24 object-contain"
            />
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight max-w-2xl">
            Información financiera pública, <br className="hidden sm:inline" />
            <span className="text-brand-green font-semibold">clara y abierta para todos</span>.
          </h1>
        </div>

        {/* Explicación Concisa */}
        <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed font-normal">
          Un espacio simple para conocer en detalle de dónde provienen los recursos de nuestra ciudad y en qué se invierten para el desarrollo comunitario.
        </p>

        {/* 2 Puntos clave inline */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-neutral-600">
          <span className="flex items-center gap-2 bg-neutral-50 px-3 py-1.5 rounded-lg border border-neutral-200/60">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            Origen de Ingresos (Coparticipación y Tasas)
          </span>
          <span className="flex items-center gap-2 bg-neutral-50 px-3 py-1.5 rounded-lg border border-neutral-200/60">
            <span className="w-2 h-2 rounded-full bg-brand-amber" />
            Destino de Egresos (Obras, Salud y Servicios)
          </span>
        </div>

        {/* Botón Principal Protagónico Incluido en el Primer Paneo */}
        <div className="pt-2">
          <Link
            to="/inicio"
            className="inline-flex items-center justify-center gap-3 bg-brand-green hover:bg-brand-green-hover text-white font-extrabold text-base sm:text-lg px-10 py-3.5 rounded-2xl shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group w-full sm:w-auto text-center"
          >
            <span>Ingresar al Portal</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </main>

      {/* Footer al Pie del Documento (Accesible al Scrollear) */}
      <footer className="max-w-6xl w-full mx-auto flex flex-col items-center shrink-0 pt-3 border-t border-neutral-100">
        <div className="text-xs text-neutral-500 font-semibold tracking-wide py-1">
          <span>Colonias Unidas • {new Date().getFullYear()}</span>
        </div>
      </footer>

    </div>
  );
};
