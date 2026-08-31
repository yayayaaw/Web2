import { useState, useEffect } from 'react';
import { PageType } from './types';
import { NAV_LINKS } from './data/coffeeData';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './components/pages/HomePage';
import { MenuPage } from './components/pages/MenuPage';
import { AboutPage } from './components/pages/AboutPage';
import { VisitPage } from './components/pages/VisitPage';
import { CareerPage } from './components/pages/CareerPage';
import { ReservationPage } from './components/pages/ReservationPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigate = (page: PageType) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#111] font-sans overflow-x-hidden">
      {/* GLOBAL NAVIGATION */}
      <Header 
        currentPage={currentPage}
        navigate={navigate}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        navLinks={NAV_LINKS}
      />

      {/* MAIN CONTENT AREA */}
      <main className="min-h-[85vh]">
        {currentPage === 'home' && <HomePage navigate={navigate} />}
        {currentPage === 'menu' && <MenuPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'visit' && <VisitPage />}
        {currentPage === 'career' && <CareerPage />}
        {currentPage === 'reservation' && <ReservationPage />}
      </main>

      {/* FOOTER */}
      <Footer 
        navigate={navigate}
        navLinks={NAV_LINKS}
      />
    </div>
  );
}
