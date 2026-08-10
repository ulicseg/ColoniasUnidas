import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Landing } from './pages/Landing';
import { Resumen } from './pages/Resumen';
import { Ingresos } from './pages/Ingresos';
import { Egresos } from './pages/Egresos';
import { Faq } from './pages/Faq';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Principal previa al dashboard (Sin Layout interno) */}
        <Route path="/" element={<Landing />} />

        {/* Dashboard e información interna (Con Layout general Navbar + Footer) */}
        <Route element={<Layout />}>
          <Route path="/inicio" element={<Resumen />} />
          <Route path="/ingresos" element={<Ingresos />} />
          <Route path="/egresos" element={<Egresos />} />
          <Route path="/faq" element={<Faq />} />
        </Route>

        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
