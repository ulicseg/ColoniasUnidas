import React, { useEffect } from 'react';
import { X, ShieldCheck, Scale, FileText, Lock, AlertTriangle } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Fondo oscuro traslúcido */}
      <div
        className="fixed inset-0 bg-neutral-950/75 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Contenido del Modal */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-10 my-auto flex flex-col max-h-[85vh]">
        
        {/* Cabecera del Modal */}
        <div className="p-5 sm:p-6 border-b border-neutral-100 bg-neutral-50 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-neutral-900 text-white rounded-xl">
              <ShieldCheck className="w-5 h-5 text-brand-green" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-neutral-900 tracking-tight">
                Términos de Uso y Marco Legal
              </h2>
              <p className="text-xs text-neutral-500 font-medium">
                Iniciativa Independiente • Espacio Político HAY 2027
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-2 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-200/60 rounded-xl transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cuerpo del Documento Legal */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs text-neutral-700 leading-relaxed flex-1">
          
          {/* Cláusula 1 */}
          <div className="space-y-1.5 border-b border-neutral-100 pb-4">
            <div className="flex items-center gap-2 font-extrabold text-neutral-900 text-sm">
              <Scale className="w-4 h-4 text-brand-green shrink-0" />
              <h3>1. Titularidad e Independencia del Portal</h3>
            </div>
            <p>
              Este sitio web es un proyecto independiente de transparencia ciudadana desarrollado e impulsado por el espacio político <strong>HAY 2027 — Unidos por Colonias Unidas</strong>. Este portal <strong>no constituye el sitio web oficial, la sede electrónica ni representa institucionalmente a la Municipalidad de Colonias Unidas</strong>.
            </p>
          </div>

          {/* Cláusula 2 */}
          <div className="space-y-1.5 border-b border-neutral-100 pb-4">
            <div className="flex items-center gap-2 font-extrabold text-neutral-900 text-sm">
              <FileText className="w-4 h-4 text-brand-green shrink-0" />
              <h3>2. Origen de los Datos (Ley N° 27.275 de Acceso a la Información Pública)</h3>
            </div>
            <p>
              La información sobre transferencias e ingresos provinciales expuesta en esta plataforma proviene de fuentes públicas oficiales y abiertas registradas en la <strong>Consulta de Pagos Electrónicos de la Tesorería General de la Provincia del Chaco</strong> (Sistema SAFYC 1003508 / CUIT 30670226723 - Ejercicio 2026). Su difusión cumple plenamente con el derecho de acceso a la información pública garantizado por la Constitución Nacional.
            </p>
          </div>

          {/* Cláusula 3 */}
          <div className="space-y-1.5 border-b border-neutral-100 pb-4">
            <div className="flex items-center gap-2 font-extrabold text-neutral-900 text-sm">
              <AlertTriangle className="w-4 h-4 text-brand-amber shrink-0" />
              <h3>3. Estado de la Sección Egresos ($0) y Ausencia de Imputación</h3>
            </div>
            <p>
              La sección de egresos se presenta con rubros de destino estimativos manteniendo las cifras en <strong>$ 0</strong> hasta tanto las autoridades municipales brinden sus rendiciones de cuentas feacientes. La plataforma no efectúa imputaciones ni atribuciones de gastos a funcionarios específicos. Se mantiene una invitación abierta y permanente a la administración local para incorporar sus rendiciones de cuentas.
            </p>
          </div>

          {/* Cláusula 4 */}
          <div className="space-y-1.5 border-b border-neutral-100 pb-4">
            <div className="flex items-center gap-2 font-extrabold text-neutral-900 text-sm">
              <Lock className="w-4 h-4 text-brand-green shrink-0" />
              <h3>4. Protección de Datos Personales (Ley N° 25.326) y Cookies</h3>
            </div>
            <p>
              Este sitio es de acceso público y anónimo. No se recolectan datos personales, nombres, direcciones de correo ni se emplean cookies de rastreo comercial sobre los usuarios o vecinos que navegan la plataforma.
            </p>
          </div>

          {/* Cláusula 5 */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 font-extrabold text-neutral-900 text-sm">
              <ShieldCheck className="w-4 h-4 text-neutral-700 shrink-0" />
              <h3>5. Marcas y Símbolos Identificatorios</h3>
            </div>
            <p>
              El uso del escudo o emblema histórico de la ciudad de Colonias Unidas se realiza con carácter puramente ilustrativo para identificar el distrito geográfico objeto del informe, sin arrogarse titularidad ni representación de la entidad municipal.
            </p>
          </div>

        </div>

        {/* Pie del Modal */}
        <div className="p-4 border-t border-neutral-100 bg-neutral-50 text-center flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] font-bold text-neutral-500">
            HAY 2027 • Colonias Unidas, Chaco
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs rounded-xl transition-colors shadow-xs"
          >
            Entendido y Aceptado
          </button>
        </div>

      </div>

    </div>
  );
};
