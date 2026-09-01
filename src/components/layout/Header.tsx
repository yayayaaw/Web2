import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavLinkItem } from '../../types';
import { useCMS } from '../../context/CMSContext';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navLinks: NavLinkItem[];
}

export const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen, navLinks }) => {
  const { data } = useCMS();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname.replace('/', '') || 'home';

  const goTo = (page: string) => {
    navigate(`/${page}`);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 h-20 md:h-24 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => goTo('home')}>
            <div className="w-4 h-4 border border-[#111] group-hover:bg-[#111] transition-colors"></div>
            <div className="leading-[1.1]">
              <span className="block font-bold text-xs md:text-sm tracking-tight">{data.settings.logoLine1}</span>
              <span className="block font-bold text-xs md:text-sm tracking-tight">{data.settings.logoLine2}</span>
            </div>
          </div>

          <nav className="hidden md:flex gap-8">
            {navLinks.filter(link => link.showInDesktop).map(link => (
              <button
                key={link.id}
                onClick={() => goTo(link.id)}
                className={`text-[10px] uppercase tracking-[0.15em] font-bold transition-colors hover:text-[#111] ${
                  currentPage === link.id ? 'text-[#111] border-b border-[#111] pb-1' : 'text-gray-400'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button className="md:hidden text-[#111] z-50 p-2 -mr-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#FFFFFF] z-40 flex flex-col justify-center px-8 animate-fade-in md:hidden">
          <nav className="flex flex-col gap-6">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => goTo(link.id)}
                className={`text-left text-3xl font-bold tracking-tighter hover:text-gray-500 ${
                  currentPage === link.id ? 'text-[#111]' : 'text-gray-400'
                }`}
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
