import React from 'react';
import { LucideIcon } from 'lucide-react';
import { formatCurrency } from '../../data/mockData';

interface KpiCardProps {
  titulo: string;
  monto: number;
  subtitulo?: string;
  variant: 'green' | 'amber' | 'neutral';
  icon: LucideIcon;
}

export const KpiCard: React.FC<KpiCardProps> = ({
  titulo,
  monto,
  subtitulo,
  variant,
  icon: Icon
}) => {
  const variantStyles = {
    green: {
      border: 'border-neutral-200 hover:border-brand-green/50',
      iconBg: 'bg-brand-green/10 text-brand-green',
      amountColor: 'text-brand-green',
      accentBar: 'bg-brand-green',
    },
    amber: {
      border: 'border-neutral-200 hover:border-brand-amber/50',
      iconBg: 'bg-brand-amber/10 text-brand-amber',
      amountColor: 'text-brand-amber',
      accentBar: 'bg-brand-amber',
    },
    neutral: {
      border: 'border-neutral-200 hover:border-neutral-400',
      iconBg: 'bg-neutral-100 text-neutral-800',
      amountColor: 'text-neutral-900',
      accentBar: 'bg-neutral-800',
    }
  };

  const style = variantStyles[variant];

  return (
    <div className={`relative bg-white rounded-xl p-4 sm:p-5 border ${style.border} shadow-sm transition-editorial overflow-hidden group`}>
      {/* Accent top line */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${style.accentBar}`} />

      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-[11px] font-bold tracking-wider text-neutral-400 uppercase">
            Período Mensual
          </span>
          <h2 className="text-base font-bold text-neutral-900 mt-0.5">
            {titulo}
          </h2>
        </div>
        <div className={`p-2.5 rounded-lg ${style.iconBg} shrink-0`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>

      {/* Main Big Number SIEMPRE CENTRADO */}
      <div className="mt-2 text-center flex flex-col items-center justify-center">
        <p className={`text-3xl sm:text-4xl font-extrabold tracking-tight tabular-nums text-center ${style.amountColor}`}>
          {formatCurrency(monto)}
        </p>
        {subtitulo && (
          <p className="text-xs text-neutral-500 font-normal mt-2 leading-relaxed text-center max-w-xs">
            {subtitulo}
          </p>
        )}
      </div>
    </div>
  );
};
