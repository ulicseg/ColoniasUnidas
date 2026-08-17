import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { egresos, formatCurrency } from '../../data/mockData';

export const ExpenseChart: React.FC = () => {
  const chartData = egresos.map((item) => ({
    name: item.nombre,
    value: item.monto,
    porcentaje: item.porcentaje,
    color: item.color || '#d97706'
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-neutral-900 text-white p-3 rounded-xl shadow-xl border border-neutral-800 text-xs z-50">
          <p className="font-bold text-xs text-brand-amber mb-1">{data.name}</p>
          <p className="font-black text-sm tabular-nums">{formatCurrency(data.value)}</p>
          <p className="text-neutral-400 mt-0.5 font-medium text-[11px]">{data.porcentaje}% del total gastado</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Contenedor Gráfico Donut Responsivo */}
      <div className="w-full h-[220px] sm:h-[260px] relative flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius="65%"
              outerRadius="90%"
              paddingAngle={3}
              dataKey="value"
              stroke="none"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} className="hover:opacity-85 transition-opacity" />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Texto Central Sencillo y Claro */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Total Gastos</span>
          <span className="text-xl sm:text-2xl font-black text-neutral-900 tabular-nums">100%</span>
        </div>
      </div>

      {/* Leyenda Simple y Responsiva */}
      <div className="w-full pt-3 border-t border-neutral-100 flex flex-wrap justify-center gap-x-3.5 gap-y-2 text-xs">
        {chartData.map((item, idx) => (
          <div key={idx} className="flex items-center gap-1.5 shrink-0">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <span className="font-medium text-neutral-700 text-[11px] sm:text-xs">
              {item.name} <strong className="text-neutral-900">({item.porcentaje}%)</strong>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
