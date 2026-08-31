import React from 'react';
import { Menu, X } from 'lucide-react';
import { PageType, NavLinkItem } from '../../types';

interface HeaderProps {
  currentPage: PageType;
  navigate: (page: PageType) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navLinks: NavLinkItem[];
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  navigate,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  navLinks,
}) => {
  return (
    <>
      {/* GLOBAL NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 h-20 md:h-24 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => navigate('home')}
          >
            <div className="w-4 h-4 border border-[#111] group-hover:bg-[#111] transition-colors"></div>
            <div className="leading-[1.1]">
              <span className="block font-bold text-xs md:text-sm tracking-tight">Sweater</span>
              <span className="block font-bold text-xs md:text-sm tracking-tight">weather</span>
            </div>
          </div>

          <nav className="hidden md:flex gap-8">
            {navLinks.filter(link => link.showInDesktop).map(link => (
              <button 
                key={link.id}
                onClick={() => navigate(link.id)}
                className={`text-[10px] uppercase tracking-[0.15em] font-bold transition-colors hover:text-[#111] ${currentPage === link.id ? 'text-[#111] border-b border-[#111] pb-1' : 'text-gray-400'}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button 
            className="md:hidden text-[#111] z-50 p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#FFFFFF] z-40 flex flex-col justify-center px-8 animate-fade-in md:hidden">
          <nav className="flex flex-col gap-6">
            {navLinks.map(link => (
              <button 
                key={link.id}
                onClick={() => navigate(link.id)} 
                className={`text-left text-3xl font-bold tracking-tighter hover:text-gray-500 ${currentPage === link.id ? 'text-[#111]' : 'text-gray-400'}`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};
