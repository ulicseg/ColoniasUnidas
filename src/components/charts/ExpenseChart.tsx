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
        <div className="bg-[#0c0e0c] text-white p-3.5 rounded-lg shadow-lg border border-neutral-800 text-xs z-50">
          <p className="font-bold text-xs text-brand-amber mb-1">{data.name}</p>
          <p className="font-extrabold text-sm tabular-nums">{formatCurrency(data.value)}</p>
          <p className="text-neutral-400 mt-1 font-medium text-[11px]">{data.porcentaje}% del total gastado</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-[300px] sm:h-[340px] relative flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={75}
            outerRadius={115}
            paddingAngle={3}
            dataKey="value"
            stroke="none"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} className="hover:opacity-80 transition-opacity" />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      
      {/* Texto Central en la Donut */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Total Egresos</span>
        <span className="text-xl sm:text-2xl font-black text-neutral-900 tabular-nums">100%</span>
        <span className="text-[10px] text-brand-amber font-bold">Tonos Ámbar Neutros</span>
      </div>
    </div>
  );
};
