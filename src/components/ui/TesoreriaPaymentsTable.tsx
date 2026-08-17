import React, { useState, useMemo } from 'react';
import { Search, Filter, ShieldCheck, CheckCircle2, ChevronRight, X, Building2, Calendar, ArrowUpDown } from 'lucide-react';
import { tesoreriaPayments, totalTesoreriaChaco, ElectronicPayment, formatCurrency } from '../../data/mockData';

export const TesoreriaPaymentsTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('TODOS');
  const [selectedMonth, setSelectedMonth] = useState<string>('TODOS');
  const [selectedPayment, setSelectedPayment] = useState<ElectronicPayment | null>(null);
  const [sortAscending, setSortAscending] = useState<boolean>(false); // por defecto más recientes primero

  // Filtros aplicados sobre las 33 transacciones oficiales
  const filteredPayments = useMemo(() => {
    return tesoreriaPayments
      .filter((p) => {
        // Buscador
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch =
          p.descripcion.toLowerCase().includes(searchLower) ||
          p.expedienteProv.toLowerCase().includes(searchLower) ||
          p.rendicion.toLowerCase().includes(searchLower) ||
          p.lote.toString().includes(searchLower) ||
          p.expediente.toString().includes(searchLower);

        // Filtro por categoría
        const matchesCategory =
          selectedCategory === 'TODOS' || p.categoria === selectedCategory;

        // Filtro por mes
        let matchesMonth = true;
        if (selectedMonth !== 'TODOS') {
          // p.fecha tiene formato DD/MM/YYYY
          const monthNum = p.fecha.split('/')[1];
          matchesMonth = monthNum === selectedMonth;
        }

        return matchesSearch && matchesCategory && matchesMonth;
      })
      .sort((a, b) => {
        // Ordenar por fecha (convertir DD/MM/YYYY a YYYYMMDD)
        const dateA = a.fecha.split('/').reverse().join('');
        const dateB = b.fecha.split('/').reverse().join('');
        return sortAscending
          ? dateA.localeCompare(dateB)
          : dateB.localeCompare(dateA);
      });
  }, [searchTerm, selectedCategory, selectedMonth, sortAscending]);

  // Suma acumulada de los elementos filtrados
  const totalFiltrado = useMemo(() => {
    return filteredPayments.reduce((acc, p) => acc + p.importe, 0);
  }, [filteredPayments]);

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden space-y-0">
      
      {/* Cabecera Principal de la Sección de Datos Oficiales */}
      <div className="bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-800 text-white p-5 sm:p-6 border-b border-neutral-800">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-brand-green/20 text-brand-green border border-brand-green/30 px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Datos Reales Oficiales</span>
              </span>
              <span className="bg-white/10 text-neutral-300 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium">
                C.U.I.T 30670226723
              </span>
              <span className="bg-white/10 text-neutral-300 px-2.5 py-0.5 rounded-md text-[11px] font-medium">
                Nuevo Banco del Chaco S.A.
              </span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Tesorería General de la Provincia del Chaco
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl font-normal leading-relaxed">
              Consulta pública de transferencias y pagos electrónicos del Sistema de Administración Financiera (Safyc 1003508) acreditados en el Ejercicio 2026.
            </p>
          </div>

          {/* Tarjeta de Resumen del Total Acumulado Provincial */}
          <div className="bg-neutral-950/70 border border-neutral-700/80 rounded-xl p-4 shrink-0 min-w-[240px] text-center lg:text-right">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
              Total Acumulado Transferido 2026
            </span>
            <span className="text-2xl sm:text-3xl font-black text-brand-green block mt-0.5 tabular-nums">
              {formatCurrency(totalTesoreriaChaco, true)}
            </span>
            <div className="flex items-center justify-center lg:justify-end gap-2 text-[11px] text-neutral-400 mt-1 font-medium">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>33 Lotes Procesados Correctamente</span>
            </div>
          </div>

        </div>
      </div>

      {/* Barra de Controles: Buscador + Filtros por Mes y Categoría */}
      <div className="p-4 bg-neutral-50/80 border-b border-neutral-200 flex flex-col md:flex-row md:items-center justify-between gap-3">
        
        {/* Buscador */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por Expediente, N° Rendición o Descripción..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-8 py-2 bg-white border border-neutral-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Grupo de Filtros */}
        <div className="flex flex-wrap items-center gap-2">
          
          {/* Selector de Mes */}
          <div className="flex items-center gap-1.5 bg-white border border-neutral-300 px-3 py-1.5 rounded-xl text-xs">
            <Calendar className="w-3.5 h-3.5 text-neutral-500" />
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="bg-transparent text-xs font-bold text-neutral-800 focus:outline-none cursor-pointer"
            >
              <option value="TODOS">Todos los meses (2026)</option>
              <option value="08">Agosto 2026</option>
              <option value="07">Julio 2026</option>
              <option value="06">Junio 2026</option>
              <option value="05">Mayo 2026</option>
              <option value="04">Abril 2026</option>
              <option value="03">Marzo 2026</option>
              <option value="02">Febrero 2026</option>
              <option value="01">Enero 2026</option>
            </select>
          </div>

          {/* Selector de Categoría */}
          <div className="flex items-center gap-1.5 bg-white border border-neutral-300 px-3 py-1.5 rounded-xl text-xs">
            <Filter className="w-3.5 h-3.5 text-neutral-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-transparent text-xs font-bold text-neutral-800 focus:outline-none cursor-pointer"
            >
              <option value="TODOS">Todas las fuentes</option>
              <option value="FPM">FPM (Coparticipación)</option>
              <option value="CONVENIO">Convenios ICC Cultura</option>
              <option value="IMPUESTOS">Poder Judicial</option>
            </select>
          </div>

          {/* Botón de Ordenamiento Fecha */}
          <button
            onClick={() => setSortAscending(!sortAscending)}
            className="flex items-center gap-1.5 bg-white border border-neutral-300 hover:border-neutral-400 px-3 py-2 rounded-xl text-xs font-bold text-neutral-700 transition-colors"
            title="Cambiar orden de fechas"
          >
            <ArrowUpDown className="w-3.5 h-3.5 text-neutral-500" />
            <span>{sortAscending ? 'Más antiguos primero' : 'Más recientes primero'}</span>
          </button>

        </div>

      </div>

      {/* Sub-bar de Estadísticas del Filtro Actual */}
      <div className="px-5 py-2.5 bg-neutral-100/60 border-b border-neutral-200 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-neutral-600">
        <div>
          Mostrando <span className="font-black text-neutral-900">{filteredPayments.length}</span> de <span className="font-black text-neutral-900">{tesoreriaPayments.length}</span> ordenes de pago electrónicas
        </div>
        <div className="flex items-center gap-2">
          <span className="text-neutral-400">Subtotal de esta vista:</span>
          <span className="font-black text-brand-green text-sm tabular-nums">
            {formatCurrency(totalFiltrado, true)}
          </span>
        </div>
      </div>

      {/* Tabla de Resultados Responsive */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-neutral-50 border-b border-neutral-200 text-[11px] font-extrabold uppercase tracking-wider text-neutral-500">
              <th className="py-3 px-4">Fecha</th>
              <th className="py-3 px-4">Descripción del Pago</th>
              <th className="py-3 px-4">Expediente Provincial</th>
              <th className="py-3 px-4">N° Rendición</th>
              <th className="py-3 px-4 text-center">Tipo</th>
              <th className="py-3 px-4 text-right">Importe (ARS)</th>
              <th className="py-3 px-4 text-center">Estado</th>
              <th className="py-3 px-3 text-center">Detalle</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200/80 text-xs">
            {filteredPayments.length > 0 ? (
              filteredPayments.map((p) => (
                <tr
                  key={p.id}
                  onClick={() => setSelectedPayment(p)}
                  className="hover:bg-brand-green/5 transition-colors cursor-pointer group"
                >
                  {/* Fecha */}
                  <td className="py-3.5 px-4 font-bold text-neutral-900 whitespace-nowrap tabular-nums">
                    {p.fecha}
                  </td>

                  {/* Descripción / Concepto */}
                  <td className="py-3.5 px-4 font-semibold text-neutral-800">
                    <div className="flex flex-col">
                      <span className="group-hover:text-brand-green transition-colors font-bold">
                        {p.descripcion}
                      </span>
                      <span className="text-[10px] text-neutral-400 font-mono mt-0.5">
                        Lote {p.lote} • Safyc {p.safyc}
                      </span>
                    </div>
                  </td>

                  {/* Expediente Provincial */}
                  <td className="py-3.5 px-4 text-neutral-600 font-mono text-[11px] whitespace-nowrap">
                    {p.expedienteProv}
                  </td>

                  {/* Rendición / N° Transacción */}
                  <td className="py-3.5 px-4 text-neutral-600 font-mono text-[11px] whitespace-nowrap">
                    {p.rendicion}
                  </td>

                  {/* Tipo (OP / OV) */}
                  <td className="py-3.5 px-4 text-center whitespace-nowrap">
                    <span
                      className={`text-[10px] font-black px-2 py-0.5 rounded ${
                        p.tipo === 'OP'
                          ? 'bg-blue-100 text-blue-800 border border-blue-200'
                          : 'bg-purple-100 text-purple-800 border border-purple-200'
                      }`}
                    >
                      {p.tipo}
                    </span>
                  </td>

                  {/* Importe ARS */}
                  <td className="py-3.5 px-4 text-right font-black text-neutral-900 tabular-nums whitespace-nowrap text-sm">
                    {formatCurrency(p.importe, true)}
                  </td>

                  {/* Estado */}
                  <td className="py-3.5 px-4 text-center whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-md">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>{p.estado}</span>
                    </span>
                  </td>

                  {/* Acceso a Modal */}
                  <td className="py-3.5 px-3 text-center whitespace-nowrap">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPayment(p);
                      }}
                      className="p-1.5 text-neutral-400 hover:text-brand-green hover:bg-neutral-100 rounded-lg transition-colors"
                      title="Ver comprobante completo"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="py-12 text-center text-neutral-500">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <Search className="w-8 h-8 text-neutral-300" />
                    <p className="font-bold text-sm text-neutral-700">No se encontraron pagos con esos criterios.</p>
                    <p className="text-xs text-neutral-400">Intenta borrando el texto de búsqueda o cambiando el filtro de mes.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pie de Tabla con Información Institucional */}
      <div className="p-4 bg-neutral-50 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-neutral-400 shrink-0" />
          <span>Fuente Oficial: Tesorería General del Chaco • Sistema Safyc 1003508</span>
        </div>
        <div className="font-mono text-[11px] text-neutral-400">
          CUIT Destinatario: 30670226723 (Municipalidad de Colonias Unidas)
        </div>
      </div>

      {/* Modal Emergente con Comprobante Oficial de Transacción */}
      {selectedPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          {/* Backdrop dark */}
          <div
            className="fixed inset-0 bg-neutral-950/75 backdrop-blur-xs"
            onClick={() => setSelectedPayment(null)}
          />

          {/* Ticket Comprobante */}
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-10 my-auto">
            
            {/* Header del Ticket */}
            <div className="bg-neutral-900 text-white p-5 flex items-start justify-between">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-brand-green text-[10px] font-bold uppercase tracking-wider bg-brand-green/10 border border-brand-green/20 px-2 py-0.5 rounded">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Comprobante de Pago Electrónico</span>
                </div>
                <h3 className="text-lg font-black text-white">
                  Tesorería General de la Provincia del Chaco
                </h3>
              </div>
              <button
                onClick={() => setSelectedPayment(null)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Banner de Monto */}
            <div className="bg-neutral-50 p-5 text-center border-b border-neutral-200">
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">
                Monto Transferido Acreditado
              </span>
              <span className="text-3xl font-black text-brand-green tabular-nums block mt-1">
                {formatCurrency(selectedPayment.importe, true)}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full mt-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{selectedPayment.estado}</span>
              </span>
            </div>

            {/* Grilla de Detalles del Registro SAFYC */}
            <div className="p-5 space-y-3.5 text-xs text-neutral-700">
              
              <div className="grid grid-cols-2 gap-3 border-b border-neutral-100 pb-3">
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase block">Concepto</span>
                  <span className="font-extrabold text-neutral-900 leading-snug">{selectedPayment.descripcion}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase block">Fecha de Pago</span>
                  <span className="font-extrabold text-neutral-900">{selectedPayment.fecha}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 border-b border-neutral-100 pb-3 font-mono text-[11px]">
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase block font-sans">N° Rendición</span>
                  <span className="font-bold text-neutral-800">{selectedPayment.rendicion}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase block font-sans">Expediente Provincial</span>
                  <span className="font-bold text-neutral-800">{selectedPayment.expedienteProv}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 border-b border-neutral-100 pb-3 text-center bg-neutral-50 p-2.5 rounded-xl border border-neutral-200/60">
                <div>
                  <span className="text-[9px] font-bold text-neutral-400 uppercase block">Lote</span>
                  <span className="font-black text-neutral-800 text-sm">{selectedPayment.lote}</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-neutral-400 uppercase block">Safyc</span>
                  <span className="font-black text-neutral-800 text-sm">{selectedPayment.safyc}</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-neutral-400 uppercase block">Expediente</span>
                  <span className="font-black text-neutral-800 text-sm">{selectedPayment.expediente}</span>
                </div>
              </div>

              <div className="space-y-1 bg-neutral-100/70 p-3 rounded-xl border border-neutral-200 text-[11px] font-mono">
                <div className="flex justify-between">
                  <span className="text-neutral-500 font-sans">CUIT Beneficiario:</span>
                  <span className="font-bold text-neutral-900">30670226723</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 font-sans">Detalle CUIT:</span>
                  <span className="font-bold text-neutral-800">{selectedPayment.cuitDetalle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 font-sans">Banco Pagador:</span>
                  <span className="font-bold text-neutral-900">Nuevo Banco del Chaco S.A.</span>
                </div>
              </div>

            </div>

            {/* Footer Modal */}
            <div className="p-4 bg-neutral-50 border-t border-neutral-200 text-center">
              <button
                onClick={() => setSelectedPayment(null)}
                className="w-full py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
              >
                Cerrar Comprobante
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
