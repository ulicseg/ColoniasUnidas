import React from 'react';
import { Calendar, TrendingUp, Sparkles } from 'lucide-react';
import { coparticipacionMensual, formatCurrency } from '../../data/mockData';

export const MonthlyIncomeBreakdown: React.FC = () => {
  const maxMonto = Math.max(...coparticipacionMensual.map((m) => m.monto));
  const totalCoparticipacion = coparticipacionMensual.reduce((acc, m) => acc + m.monto, 0);

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-5 sm:p-6 space-y-5">
      
      {/* Header Didáctico */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-100 pb-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 bg-brand-green/10 text-brand-green border border-brand-green/20 px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>Coparticipación Provincia del Chaco • 2026</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
            Ingresos Recibidos Mes a Mes
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-xl font-normal leading-relaxed">
            Resumen simple de la plata enviada por el Gobierno Provincial a Colonias Unidas durante cada mes de este año.
          </p>
        </div>

        {/* Total General Destacado */}
        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3.5 text-center shrink-0 min-w-[210px] self-start sm:self-center">
          <span className="text-[10px] font-extrabold text-neutral-500 uppercase tracking-wider block text-center">
            Total Acumulado Provincia
          </span>
          <span className="text-xl sm:text-2xl font-black text-brand-green block mt-0.5 tabular-nums text-center">
            {formatCurrency(totalCoparticipacion)}
          </span>
        </div>
      </div>

      {/* Grilla de Tarjetas Mensuales Didácticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {coparticipacionMensual.map((item, idx) => {
          const porcentajeRelativo = Math.round((item.monto / maxMonto) * 100);
          
          return (
            <div
              key={idx}
              className={`rounded-xl p-4 border transition-all relative overflow-hidden flex flex-col justify-between space-y-3 ${
                item.destacado
                  ? 'bg-emerald-50/50 border-emerald-300 shadow-xs'
                  : 'bg-neutral-50/60 border-neutral-200 hover:border-neutral-300 hover:bg-white'
              }`}
            >
              {/* Header de la Tarjeta Mensual */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-neutral-900 tracking-tight">
                    {item.mes}
                  </span>
                  {item.destacado ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-black bg-brand-green text-white px-2 py-0.5 rounded-md uppercase tracking-wider">
                      <Sparkles className="w-3 h-3" />
                      <span>Mes Récord</span>
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold text-neutral-500 bg-white border border-neutral-200 px-2 py-0.5 rounded-md">
                      {item.cuotas} {item.cuotas === 1 ? 'cuota' : 'cuotas'}
                    </span>
                  )}
                </div>

                {/* Monto Grande en Pesos ARS */}
                <div className="pt-1">
                  <span className="text-xl font-black text-neutral-900 tabular-nums block">
                    {formatCurrency(item.monto)}
                  </span>
                </div>

                <p className="text-xs text-neutral-600 leading-snug pt-0.5">
                  {item.descripcion}
                </p>
              </div>

              {/* Barra Relativa de Comparación Visual entre Meses */}
              <div className="space-y-1 pt-1">
                <div className="w-full bg-neutral-200/80 rounded-full h-1.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      item.destacado ? 'bg-brand-green' : 'bg-neutral-400'
                    }`}
                    style={{ width: `${porcentajeRelativo}%` }}
                  />
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Nota Explicativa para el Vecino */}
      <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3.5 flex items-center gap-3 text-xs text-neutral-600">
        <TrendingUp className="w-4 h-4 text-brand-green shrink-0" />
        <span>
          <strong>¿Sabías que?</strong> La Coparticipación es la principal fuente de recursos del municipio. Se deposita semanalmente para asegurar el pago puntual de sueldos y servicios públicos.
        </span>
      </div>

    </div>
  );
};
