import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, TrendingUp, TrendingDown, HelpCircle, LayoutDashboard, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/inicio', label: 'Inicio', icon: LayoutDashboard },
    { to: '/ingresos', label: 'Ingresos', icon: TrendingUp },
    { to: '/egresos', label: 'Egresos', icon: TrendingDown },
    { to: '/faq', label: 'Preguntas Frecuentes', icon: HelpCircle },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Brand Logo de HAY 2027 e Identidad Ciudadana */}
          <Link to="/" className="flex items-center space-x-3 group shrink-0">
            <div className="bg-neutral-50 p-1 rounded-xl border border-neutral-200 shadow-2xs group-hover:scale-105 transition-transform">
              <img
                src="/assets/logo-hay2027.png"
                alt="Logo HAY 2027"
                className="h-8 sm:h-9 object-contain"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-black text-neutral-900 text-sm sm:text-base tracking-tight">
                HAY 2027
              </span>
              <span className="text-neutral-300 font-light">|</span>
              <span className="text-xs font-bold text-brand-green tracking-wider uppercase">
                Transparencia Ciudadana
              </span>
            </div>
          </Link>

          {/* Badge de Proyecto Independiente en Desktop */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-semibold text-neutral-600 bg-neutral-100/80 px-3 py-1 rounded-lg border border-neutral-200/80">
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            <span>Iniciativa Independiente • Colonias Unidas</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-1.5 rounded-lg font-bold text-xs sm:text-sm transition-colors ${
                      isActive
                        ? 'bg-neutral-900 text-white'
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

          {/* Mobile Hamburger Button */}
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

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-white px-4 pt-2 pb-4 space-y-2 shadow-lg">
          <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider px-3 py-1">
            Navegación del Portal • HAY 2027
          </p>
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

          <div className="pt-3 mt-2 border-t border-neutral-100 flex flex-col items-center gap-1.5 text-center">
            <span className="text-[11px] font-bold text-neutral-500">Iniciativa Independiente de HAY 2027</span>
            <img
              src="/assets/logo-hay2027.png"
              alt="HAY 2027"
              className="h-8 object-contain"
            />
          </div>
        </div>
      )}
    </header>
  );
};
