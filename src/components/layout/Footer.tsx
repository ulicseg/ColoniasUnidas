import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c0e0c] text-neutral-400 border-t border-neutral-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center border-b border-neutral-800 pb-6 mb-6">
          
          {/* Identity with logo-cu emblem */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-1 rounded-lg shadow-xs shrink-0">
                <img
                  src="/assets/logo-cu.png"
                  alt="Escudo Colonias Unidas"
                  className="h-9 w-9 object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-white text-base sm:text-lg tracking-tight block">
                  Municipalidad de Colonias Unidas
                </span>
                <span className="text-xs font-bold text-brand-green tracking-widest uppercase block">
                  UNIDOS POR UNIDAS
                </span>
              </div>
            </div>
          </div>

          {/* Banner Horizontal HAY 2027 en el centro */}
          <div className="flex flex-col items-center justify-center space-y-1">
            <div className="bg-white/95 backdrop-blur-xs px-4 py-2 rounded-xl shadow-xs border border-neutral-700/50">
              <img
                src="/assets/logo-hay2027.png"
                alt="HAY 2027 - Unidos por Colonias Unidas"
                className="h-9 object-contain"
              />
            </div>
            <p className="text-[11px] text-neutral-400 mt-1">
              Portal Público de Transparencia Financiera
            </p>
          </div>

          {/* Trust badge & link */}
          <div className="flex flex-col items-center md:items-end justify-center space-y-2">
            <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium bg-neutral-900 px-3.5 py-1.5 rounded-lg border border-neutral-800">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              <span>Datos Abiertos Oficiales</span>
            </div>
            <Link to="/" className="text-[11px] text-neutral-400 hover:text-white transition-colors underline-offset-4 hover:underline">
              Volver a la portada principal
            </Link>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-neutral-500 gap-3">
          <p>© {new Date().getFullYear()} Municipalidad de Colonias Unidas. Todos los derechos reservados.</p>
          <p className="font-mono">Prototipo MVP Transparencia</p>
        </div>
      </div>
    </footer>
  );
};
