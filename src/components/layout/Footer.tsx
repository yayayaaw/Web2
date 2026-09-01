import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLinkItem } from '../../types';
import { useCMS } from '../../context/CMSContext';

interface FooterProps {
  navLinks: NavLinkItem[];
}

export const Footer: React.FC<FooterProps> = ({ navLinks }) => {
  const { data } = useCMS();
  const s = data.settings;
  const navigate = useNavigate();

  return (
    <footer className="bg-[#111] text-white pt-20 pb-12 px-6 md:px-12 lg:px-24 mt-auto">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 border-b border-gray-800 pb-16 mb-12">
        <div className="md:col-span-4 lg:col-span-3">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-4 border border-white"></div>
            <span className="font-bold text-sm tracking-tight uppercase">{s.cafeName}</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed max-w-[200px]">{s.footerTagline}</p>
        </div>

        <div className="md:col-span-4 lg:col-span-3">
          <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-6">Alamat</h4>
          <p className="text-xs text-gray-300 leading-relaxed">{s.address}</p>
        </div>

        <div className="md:col-span-4 lg:col-span-3">
          <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-6">Jam Buka</h4>
          <p className="text-xs text-gray-300 leading-relaxed">Senin — Jumat ({s.hoursWeekday})</p>
          <p className="text-xs text-gray-300 leading-relaxed">Sabtu — Minggu ({s.hoursWeekend})</p>
        </div>

        <div className="md:col-span-12 lg:col-span-3 lg:text-right">
          <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-6 lg:mb-4">Quick Links</h4>
          <nav className="flex flex-col lg:items-end gap-3 text-xs text-gray-300">
            {navLinks.filter(link => link.showInDesktop).map(link => (
              <button key={link.id} onClick={() => navigate(`/${link.id}`)} className="hover:text-white w-max uppercase tracking-widest text-[10px]">
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase tracking-widest text-gray-600">© {new Date().getFullYear()} {s.cafeName}.</p>
        <div className="flex gap-6 text-gray-400">
          <a href={`https://instagram.com/${s.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold">
            Instagram
          </a>
          <a href={`https://wa.me/${s.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold">
            WhatsApp
          </a>
          <a href={`mailto:${s.email}`} className="hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
