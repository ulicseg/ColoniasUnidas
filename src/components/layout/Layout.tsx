import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { PageContainer } from './PageContainer';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Footer />
    </div>
  );
};
