import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TermsModal } from '../ui/TermsModal';

export const Footer: React.FC = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <footer className="bg-[#0c0e0c] text-neutral-400 border-t border-neutral-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        
        {/* Fila Principal de Marca */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center border-b border-neutral-800 pb-6 mb-6">
          
          {/* Espacio Político HAY 2027 */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-1.5 rounded-xl shadow-xs shrink-0">
                <img
                  src="/assets/logo-hay2027.png"
                  alt="Logo HAY 2027"
                  className="h-9 object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-white text-base sm:text-lg tracking-tight block">
                  HAY 2027
                </span>
                <span className="text-xs font-bold text-brand-green tracking-wider uppercase block">
                  UNIDOS POR COLONIAS UNIDAS
                </span>
              </div>
            </div>
          </div>

          {/* Slogan de Propuesta */}
          <div className="flex flex-col items-center justify-center space-y-1 text-center">
            <div className="bg-neutral-900 px-4 py-1.5 rounded-xl border border-neutral-800">
              <span className="text-xs font-bold text-white">Propuesta de Transparencia Ciudadana</span>
            </div>
            <p className="text-[11px] text-neutral-500 mt-1">
              Monitoreo independiente de datos presupuestarios públicos
            </p>
          </div>

          {/* Link Portada & Términos */}
          <div className="flex flex-col items-center md:items-end justify-center space-y-2">
            <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium bg-neutral-900 px-3.5 py-1.5 rounded-lg border border-neutral-800">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              <span>Iniciativa Ciudadana</span>
            </div>
            <div className="flex items-center gap-3 text-[11px]">
              <button
                onClick={() => setIsTermsOpen(true)}
                type="button"
                className="text-neutral-400 hover:text-white transition-colors underline-offset-4 hover:underline flex items-center gap-1"
              >
                <Scale className="w-3 h-3 text-brand-green" />
                <span>Términos de Uso y Aviso Legal</span>
              </button>
              <span className="text-neutral-700">•</span>
              <Link to="/" className="text-neutral-400 hover:text-white transition-colors underline-offset-4 hover:underline">
                Portada principal
              </Link>
            </div>
          </div>

        </div>

        {/* Caja Destacada de Aviso Legal & Blindaje Institucional */}
        <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-4 mb-6 text-xs text-neutral-300 leading-relaxed space-y-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Aviso Legal & Deslinde de Responsabilidad</span>
            </div>
            <button
              onClick={() => setIsTermsOpen(true)}
              type="button"
              className="text-[10px] font-bold text-brand-green bg-brand-green/10 hover:bg-brand-green/20 px-2.5 py-0.5 rounded border border-brand-green/30 transition-colors"
            >
              Ver Términos Legales Completos
            </button>
          </div>
          <p className="text-[11px] text-neutral-400 leading-relaxed">
            Este sitio web es una propuesta independiente impulsada por el espacio político <strong>HAY 2027 — Unidos por Colonias Unidas</strong> con el objetivo de fomentar el acceso público a la información comunitaria. <strong>No constituye el sitio oficial ni la sede electrónica de la Municipalidad de Colonias Unidas.</strong> La información de ingresos procesada proviene de datos públicos de la Tesorería General del Chaco (Safyc 1003508).
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-neutral-500 gap-3">
          <p>© {new Date().getFullYear()} HAY 2027 • Unidos por Colonias Unidas.</p>
          <p className="font-mono">Iniciativa de Transparencia Comunitaria</p>
        </div>

      </div>

      {/* Modal Emergente de Términos Legales */}
      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />
    </footer>
  );
};
