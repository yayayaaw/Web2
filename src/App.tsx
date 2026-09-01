import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { CMSProvider, useCMS } from './context/CMSContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './components/pages/HomePage';
import { MenuPage } from './components/pages/MenuPage';
import { AboutPage } from './components/pages/AboutPage';
import { VisitPage } from './components/pages/VisitPage';
import { CareerPage } from './components/pages/CareerPage';
import { ReservationPage } from './components/pages/ReservationPage';
import { AdminApp } from './admin/AdminApp';
import { trackPageView, trackVisitOncePerSession } from './lib/analytics';

function PublicSite() {
  const { data } = useCMS();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    trackVisitOncePerSession();
    trackPageView();
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#111] font-sans overflow-x-hidden flex flex-col">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        navLinks={data.navLinks}
      />
      <main className="min-h-[85vh] flex-1">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/visit" element={<VisitPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </main>
      <Footer navLinks={data.navLinks} />
    </div>
  );
}

export default function App() {
  return (
    <CMSProvider>
      <Routes>
        <Route path="/admincafe/*" element={<AdminApp />} />
        <Route path="/*" element={<PublicSite />} />
      </Routes>
    </CMSProvider>
  );
}
