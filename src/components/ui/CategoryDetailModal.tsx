import React, { useEffect } from 'react';
import { X, FileText, ChevronRight, AlertCircle } from 'lucide-react';
import { FinancialItem, formatCurrency } from '../../data/mockData';

interface CategoryDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: FinancialItem | null;
  type: 'ingreso' | 'egreso';
}

export const CategoryDetailModal: React.FC<CategoryDetailModalProps> = ({
  isOpen,
  onClose,
  item,
  type
}) => {
  // Cierre al presionar la tecla Esc
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

  if (!isOpen || !item) return null;

  const isIngreso = type === 'ingreso';
  const badgeColor = isIngreso ? 'bg-brand-green text-white' : 'bg-brand-amber text-white';
  const accentColor = isIngreso ? 'text-brand-green' : 'text-brand-amber';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Fondo oscuro traslúcido */}
      <div
        className="fixed inset-0 bg-neutral-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Contenido del Modal */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]">
        
        {/* Cabecera del Modal */}
        <div className="p-5 sm:p-6 border-b border-neutral-100 bg-neutral-50/80 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${badgeColor}`}>
                {isIngreso ? 'Origen de Ingreso' : 'Área de Inversión / Egreso'}
              </span>
              <span className="text-xs font-semibold text-neutral-500">
                {isIngreso ? `${item.porcentaje}% del total general` : 'Pendiente de datos oficiales'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
              {item.nombre}
            </h2>
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

        {/* Resumen del Monto Total Centrado */}
        <div className="py-5 px-6 bg-neutral-900 text-white text-center border-b border-neutral-800 space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-1">
            {isIngreso ? 'Monto Total Ingresado en este Rubro' : 'Monto de Egreso Oficial'}
          </span>
          <span className="text-3xl sm:text-4xl font-extrabold tabular-nums tracking-tight block text-center">
            {item.monto > 0 ? formatCurrency(item.monto) : '$ 0'}
          </span>
          {!isIngreso && (
            <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-bold bg-amber-950/60 border border-amber-800 px-3 py-1 rounded-lg mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>A la espera de rendición oficial por la Municipalidad</span>
            </div>
          )}
          <p className="text-xs text-neutral-400 mt-2 max-w-md mx-auto leading-relaxed">
            {item.descripcion}
          </p>
        </div>

        {/* Lista de Sub-ítems */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 flex-1">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-neutral-700" />
              <span>Desglose de Conceptos ({item.detalles?.length || 0} ítems)</span>
            </h3>
            <span className="text-[11px] font-medium text-neutral-400">
              {isIngreso ? 'Montos verificados' : 'Montos en $0 hasta informe oficial'}
            </span>
          </div>

          <div className="space-y-3">
            {item.detalles && item.detalles.length > 0 ? (
              item.detalles.map((sub, index) => {
                const subPorcentaje = item.monto > 0 ? Math.round((sub.monto / item.monto) * 100) : 0;
                return (
                  <div
                    key={sub.id || index}
                    className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/50 hover:bg-white hover:border-neutral-300 transition-all space-y-2"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-neutral-900 text-sm">
                            {sub.concepto}
                          </h4>
                          <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                            {sub.descripcion}
                          </p>
                        </div>
                      </div>

                      {/* Monto del sub-ítem */}
                      <div className="text-center shrink-0 bg-white border border-neutral-200 px-4 py-2 rounded-lg self-center sm:self-auto w-full sm:w-auto">
                        <span className="text-[10px] text-neutral-400 font-bold uppercase block text-center">
                          {sub.monto > 0 ? `Monto (${subPorcentaje}%)` : 'Estado'}
                        </span>
                        <span className={`text-base font-black tabular-nums block text-center ${sub.monto > 0 ? accentColor : 'text-amber-800'}`}>
                          {sub.monto > 0 ? formatCurrency(sub.monto) : 'Pendiente ($0)'}
                        </span>
                      </div>
                    </div>

                    {/* Progress bar sutil */}
                    {sub.monto > 0 && (
                      <div className="w-full bg-neutral-200 rounded-full h-1 overflow-hidden mt-1">
                        <div
                          className={`h-full rounded-full ${isIngreso ? 'bg-brand-green' : 'bg-brand-amber'}`}
                          style={{ width: `${subPorcentaje}%` }}
                        />
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <p className="text-xs text-neutral-500 text-center py-4">
                No hay desglose adicional registrado para este rubro.
              </p>
            )}
          </div>
        </div>

        {/* Pie de Modal */}
        <div className="p-4 border-t border-neutral-100 bg-neutral-50 text-center">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
          >
            Cerrar Ventana de Detalle
          </button>
        </div>

      </div>

    </div>
  );
};
