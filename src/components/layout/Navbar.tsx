import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, TrendingUp, TrendingDown, HelpCircle, LayoutDashboard } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/inicio', label: 'Inicio', icon: LayoutDashboard },
    { to: '/ingresos', label: 'Ingresos', icon: TrendingUp },
    { to: '/egresos', label: 'Egresos', icon: TrendingDown },
    { to: '/faq', label: 'Preguntas Frecuentes', icon: HelpCircle },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-2xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo y Marca bien estructurados */}
          <Link to="/" className="flex items-center space-x-3 group shrink-0">
            <div className="flex items-center gap-2">
              <div className="bg-white p-1 rounded-xl border border-neutral-200 shadow-2xs group-hover:scale-105 transition-transform">
                <img
                  src="/assets/logo-hay2027.png"
                  alt="Logo HAY 2027"
                  className="h-8 sm:h-9 object-contain"
                />
              </div>
              <img
                src="/assets/logo-cu.png"
                alt="Emblema Colonias Unidas"
                className="h-7 w-7 object-contain opacity-70 hidden sm:block"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-black text-neutral-900 text-sm sm:text-base tracking-tight">
                HAY 2027
              </span>
              <span className="text-neutral-300 font-light">|</span>
              <span className="text-xs font-bold text-brand-green tracking-wider uppercase">
                Transparencia
              </span>
            </div>
          </Link>

          {/* Navegación Desktop alineada a la derecha */}
          <nav className="hidden md:flex items-center space-x-1 sm:space-x-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                      isActive
                        ? 'bg-neutral-900 text-white shadow-xs'
                        : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Botón Menú Hamburguesa en Mobile */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none transition-colors border border-neutral-200"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable en Móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-white px-4 pt-2 pb-4 space-y-2 shadow-lg animate-in fade-in duration-200">
          <div className="px-3 py-1 border-b border-neutral-100 mb-1 flex items-center justify-between">
            <span className="text-[10px] font-extrabold text-neutral-400 uppercase tracking-wider">
              Navegación • HAY 2027
            </span>
            <span className="text-[10px] font-bold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded">
              Transparencia Ciudadana
            </span>
          </div>

          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${
                    isActive
                      ? 'bg-neutral-900 text-white'
                      : 'text-neutral-700 hover:bg-neutral-100'
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                <span>{link.label}</span>
              </NavLink>
            );
          })}

          <div className="pt-3 mt-2 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-medium px-2">
            <span>Iniciativa de HAY 2027</span>
            <img
              src="/assets/logo-hay2027.png"
              alt="HAY 2027"
              className="h-7 object-contain"
            />
          </div>
        </div>
      )}
    </header>
  );
};
