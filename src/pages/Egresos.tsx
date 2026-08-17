import React, { useState } from 'react';
import { TrendingDown, PieChart as PieChartIcon } from 'lucide-react';
import { egresos, totalEgresos, formatCurrency, periodoActual, FinancialItem } from '../data/mockData';
import { ExpenseChart } from '../components/charts/ExpenseChart';
import { CategoryDetailModal } from '../components/ui/CategoryDetailModal';

export const Egresos: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<FinancialItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (item: FinancialItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-4 sm:space-y-5 py-1 animate-in fade-in duration-300">
      
      {/* Header de Sección */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-neutral-200 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="bg-neutral-50 p-2 rounded-xl border border-neutral-200 shadow-xs shrink-0 hidden sm:block">
              <img
                src="/assets/logo-cu.png"
                alt="Emblema Colonias Unidas"
                className="h-10 w-10 object-contain"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-brand-amber bg-brand-amber/10 border border-brand-amber/20 px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider mb-1">
                <TrendingDown className="w-3.5 h-3.5" />
                <span>Inversión y Gastos de la Ciudad • {periodoActual}</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
                ¿En qué se gasta?
              </h1>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl leading-snug mt-0.5">
                Detalle transparente de las inversiones realizadas en infraestructura, salud, educación, servicios urbanos y administración pública local.
              </p>
            </div>
          </div>

          {/* Monto Total Ejecutado */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3.5 text-center shrink-0 min-w-[200px] self-center sm:self-auto">
            <span className="text-[10px] font-extrabold text-neutral-500 uppercase tracking-wider block text-center">
              Monto Total Ejecutado
            </span>
            <span className="text-xl sm:text-2xl font-black text-brand-amber block mt-0.5 tabular-nums text-center">
              {formatCurrency(totalEgresos)}
            </span>
          </div>
        </div>
      </div>

      {/* Grid Principal: Gráfico + Desglose de Tarjetas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        
        {/* Gráfico Donut */}
        <div className="lg:col-span-5 bg-white rounded-xl p-4 border border-neutral-200 shadow-sm flex flex-col items-center justify-between min-h-[310px]">
          <div className="w-full flex items-center justify-between border-b border-neutral-100 pb-2 mb-1">
            <h2 className="font-extrabold text-neutral-800 text-xs sm:text-sm flex items-center gap-2">
              <PieChartIcon className="w-4 h-4 text-brand-amber" />
              <span>Distribución por Rubro</span>
            </h2>
            <span className="text-[10px] text-neutral-400 font-medium">Interactiva</span>
          </div>
          
          <div className="my-auto py-1">
            <ExpenseChart />
          </div>

          <p className="text-[11px] text-neutral-400 text-center font-medium pt-1">
            Pasa el cursor o toca un rubro para ver el monto exacto invertido.
          </p>
        </div>

        {/* Lista / Cards de Categorías Interactivas */}
        <div className="lg:col-span-7 space-y-2">
          <div className="flex items-center justify-between px-1">
            <h2 className="font-bold text-neutral-900 text-sm sm:text-base">
              Desglose por área de destino
            </h2>
            <span className="text-[11px] font-medium text-neutral-500">
              Toca una tarjeta para ver detalle
            </span>
          </div>

          {egresos.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenModal(item)}
              className="bg-white rounded-xl p-3 border border-neutral-200 shadow-xs hover:border-brand-amber hover:shadow-md transition-all cursor-pointer relative overflow-hidden group select-none"
            >
              {/* Barra lateral de color identificador */}
              <div
                className="absolute top-0 left-0 bottom-0 w-1.5"
                style={{ backgroundColor: item.color || '#d97706' }}
              />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pl-2">
                <div className="space-y-0.5 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-xs sm:text-sm text-neutral-900 group-hover:text-brand-amber transition-colors">
                      {item.nombre}
                    </h3>
                    <span
                      className="text-[10px] font-extrabold px-1.5 py-0.2 rounded text-white"
                      style={{ backgroundColor: item.color || '#d97706' }}
                    >
                      {item.porcentaje}%
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-600 leading-tight font-normal">
                    {item.descripcion}
                  </p>
                </div>

                {/* Monto Invertido */}
                <div className="text-center shrink-0 border-t sm:border-t-0 sm:border-l border-neutral-100 pt-1.5 sm:pt-0 sm:pl-3.5 self-center sm:self-auto w-full sm:w-auto">
                  <span className="text-[9px] text-neutral-400 font-semibold block uppercase text-center">
                    Monto Invertido
                  </span>
                  <span className="text-sm sm:text-base font-black text-neutral-900 tabular-nums block text-center mt-0.5">
                    {formatCurrency(item.monto)}
                  </span>
                </div>
              </div>

              {/* Progress bar visual */}
              <div className="mt-2 pl-2">
                <div className="w-full bg-neutral-100 rounded-full h-1 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${item.porcentaje}%`,
                      backgroundColor: item.color || '#d97706'
                    }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal Emergente de Detalle de Rubro */}
      <CategoryDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectedItem}
        type="egreso"
      />

    </div>
  );
};
