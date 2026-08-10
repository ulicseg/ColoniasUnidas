import React from 'react';
import { Landmark, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c0e0c] text-neutral-400 border-t border-neutral-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center border-b border-neutral-800 pb-6 mb-6">
          
          {/* Identity */}
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Landmark className="w-5 h-5 text-brand-green" />
              <span className="font-extrabold text-white text-base sm:text-lg tracking-tight">
                Municipalidad de Colonias Unidas
              </span>
            </div>
            <p className="text-xs font-bold text-brand-green tracking-widest uppercase">
              UNIDOS POR UNIDAS
            </p>
          </div>

          {/* Description */}
          <div className="text-center text-xs leading-relaxed text-neutral-400 max-w-md mx-auto">
            <p>
              Portal Público de Transparencia Financiera. Información clara, abierta e intuitiva sobre los recursos de nuestra comunidad.
            </p>
          </div>

          {/* Trust badge & link */}
          <div className="flex flex-col items-center md:items-end justify-center space-y-2">
            <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium bg-neutral-900 px-3 py-1 rounded-md border border-neutral-800">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
              <span>Datos Abiertos Oficiales</span>
            </div>
            <Link to="/" className="text-[11px] text-neutral-400 hover:text-white transition-colors">
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
