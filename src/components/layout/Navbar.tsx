import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Landmark, TrendingUp, TrendingDown, HelpCircle, LayoutDashboard } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/inicio', label: 'Inicio / Resumen', icon: LayoutDashboard },
    { to: '/ingresos', label: 'Ingresos', icon: TrendingUp },
    { to: '/egresos', label: 'Egresos', icon: TrendingDown },
    { to: '/faq', label: 'Preguntas Frecuentes', icon: HelpCircle },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Minimal Clean Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <Landmark className="w-6 h-6 text-brand-green group-hover:scale-105 transition-transform" />
            <div className="flex items-center gap-2.5">
              <span className="font-extrabold text-neutral-900 text-base sm:text-lg tracking-tight">
                Colonias Unidas
              </span>
              <span className="text-neutral-300 font-light">|</span>
              <span className="text-xs sm:text-sm font-bold text-brand-green tracking-wider uppercase">
                Transparencia
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-1.5 rounded-md font-medium text-xs sm:text-sm transition-colors ${
                      isActive
                        ? 'bg-neutral-900 text-white font-semibold'
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
              className="p-2 rounded-md text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none transition-colors border border-neutral-200"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg">
          <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider px-3 py-2">
            Navegación del Portal
          </p>
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2.5 rounded-md font-medium text-sm transition-colors ${
                    isActive
                      ? 'bg-neutral-900 text-white font-semibold'
                      : 'text-neutral-700 hover:bg-neutral-100'
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                <span>{link.label}</span>
              </NavLink>
            );
          })}
        </div>
      )}
    </header>
  );
};
