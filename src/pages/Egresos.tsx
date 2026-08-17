import React, { useState } from 'react';
import { TrendingDown, PieChart as PieChartIcon, Search, Building2, Handshake, Info } from 'lucide-react';
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
    <div className="space-y-6 sm:space-y-8 py-1 animate-in fade-in duration-300 max-w-6xl mx-auto px-1 sm:px-0">
      
      {/* Banner de Invitación a la Municipalidad - ARRIBA DEL TODO */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 sm:p-6 text-neutral-900 space-y-3.5 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 bg-brand-amber text-white px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>Invitación a la Municipalidad de Colonias Unidas</span>
          </div>
          <span className="text-[11px] font-bold text-amber-900 bg-amber-200/80 px-3 py-0.5 rounded-full border border-amber-300">
            A la espera de participación oficial
          </span>
        </div>

        <h2 className="text-lg sm:text-xl font-black text-neutral-900 tracking-tight">
          ¡Construyamos la transparencia juntos para todos los vecinos!
        </h2>

        <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-4xl">
          Los datos de los <strong>Ingresos Provinciales ($1.324,5 millones)</strong> ya están verificados y abiertos a la comunidad. Invitamos formalmente a las autoridades de la <strong>Municipalidad de Colonias Unidas</strong> a sumarse a este portal de datos abiertos y compartir sus rendiciones e informes de gastos para que cada vecino pueda ver con total claridad cómo se invierte el dinero en la ciudad.
        </p>

        <div className="pt-1 flex flex-wrap items-center gap-3 text-xs font-medium text-neutral-700">
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-neutral-200/80 shadow-2xs font-bold text-neutral-900">
            <Handshake className="w-4 h-4 text-brand-amber" />
            <span>Espacio abierto a la rendición municipal</span>
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-neutral-200/80 shadow-2xs">
            <Info className="w-4 h-4 text-neutral-500" />
            <span>Montos de egresos en $0 hasta informe oficial feaciente</span>
          </span>
        </div>
      </div>

      {/* Header de Sección Responsivo */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 border border-neutral-200 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="bg-neutral-50 p-2.5 rounded-2xl border border-neutral-200 shadow-xs shrink-0 hidden sm:block">
              <img
                src="/assets/logo-cu.png"
                alt="Emblema Colonias Unidas"
                className="h-10 w-10 object-contain"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-brand-amber bg-brand-amber/10 border border-brand-amber/20 px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider mb-1">
                <TrendingDown className="w-3.5 h-3.5" />
                <span>Inversión y Gastos • {periodoActual}</span>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-neutral-900 tracking-tight">
                ¿En qué se gasta?
              </h1>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl leading-relaxed mt-0.5">
                Desglose por rubros y áreas de destino de la ciudad.
              </p>
            </div>
          </div>

          {/* Monto Total Invertido */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3.5 text-center shrink-0 min-w-full sm:min-w-[210px] self-center sm:self-auto">
            <span className="text-[10px] font-extrabold text-neutral-500 uppercase tracking-wider block text-center">
              Monto Total de Egresos Oficiales
            </span>
            <span className="text-xl sm:text-2xl font-black text-amber-800 block mt-0.5 tabular-nums text-center">
              {formatCurrency(totalEgresos)}
            </span>
          </div>
        </div>
      </div>

      {/* Grid Principal: Gráfico + Desglose de Tarjetas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        
        {/* Gráfico Donut Responsivo */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-4 sm:p-5 border border-neutral-200 shadow-sm flex flex-col items-center justify-between space-y-3">
          <div className="w-full flex items-center justify-between border-b border-neutral-100 pb-2">
            <h2 className="font-extrabold text-neutral-800 text-xs sm:text-sm flex items-center gap-2">
              <PieChartIcon className="w-4 h-4 text-brand-amber" />
              <span>Distribución por Rubro</span>
            </h2>
            <span className="text-[10px] text-amber-800 font-bold bg-amber-100 px-2 py-0.5 rounded">Pendiente ($0)</span>
          </div>
          
          <div className="w-full py-1">
            <ExpenseChart />
          </div>

          <p className="text-[11px] text-neutral-400 text-center font-medium pt-1">
            Toca o pasa sobre una sección para ver el rubro.
          </p>
        </div>

        {/* Lista / Cards de Categorías Interactivas */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between px-1">
            <h2 className="font-bold text-neutral-900 text-sm sm:text-base">
              Desglose por área de destino
            </h2>
            <span className="text-[11px] font-medium text-neutral-500 hidden sm:inline">
              Toca una tarjeta para ver conceptos
            </span>
          </div>

          {egresos.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenModal(item)}
              className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-xs hover:border-brand-amber hover:shadow-md transition-all cursor-pointer relative overflow-hidden group select-none space-y-2"
            >
              {/* Barra lateral de color identificador */}
              <div
                className="absolute top-0 left-0 bottom-0 w-1.5"
                style={{ backgroundColor: item.color || '#d97706' }}
              />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pl-2">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-sm sm:text-base text-neutral-900 group-hover:text-brand-amber transition-colors">
                      {item.nombre}
                    </h3>
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200 shrink-0"
                    >
                      Pendiente ($0)
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug font-normal">
                    {item.descripcion}
                  </p>

                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-amber pt-0.5 group-hover:underline">
                    <Search className="w-3 h-3" />
                    <span>Ver {item.detalles.length} conceptos integrantes</span>
                  </span>
                </div>

                {/* Monto Invertido */}
                <div className="text-left sm:text-center shrink-0 border-t sm:border-t-0 sm:border-l border-neutral-100 pt-2 sm:pt-0 sm:pl-4 w-full sm:w-auto">
                  <span className="text-[10px] text-neutral-400 font-semibold block uppercase">
                    Estado
                  </span>
                  <span className="text-sm sm:text-base font-black text-amber-800 tabular-nums block mt-0.5">
                    Pendiente ($0)
                  </span>
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
