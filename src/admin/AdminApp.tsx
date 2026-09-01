import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, FileText, Coffee, MessageSquare, Settings, LogOut, ExternalLink } from 'lucide-react';
import { AdminLogin, isAdminAuthed } from './AdminLogin';
import { AdminDashboard } from './pages/AdminDashboard';
import { AdminContent } from './pages/AdminContent';
import { AdminMenu } from './pages/AdminMenu';
import { AdminReviews } from './pages/AdminReviews';
import { AdminSettings } from './pages/AdminSettings';

type Tab = 'dashboard' | 'content' | 'menu' | 'reviews' | 'settings';

const TABS: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'content', label: 'Konten Utama', icon: FileText },
  { id: 'menu', label: 'Menu & Galeri', icon: Coffee },
  { id: 'reviews', label: 'Ulasan', icon: MessageSquare },
  { id: 'settings', label: 'Pengaturan', icon: Settings },
];

export const AdminApp: React.FC = () => {
  const [authed, setAuthed] = useState(isAdminAuthed());
  const [tab, setTab] = useState<Tab>('dashboard');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  if (!authed) return <AdminLogin onSuccess={() => setAuthed(true)} />;

  const renderTab = () => {
    switch (tab) {
      case 'dashboard': return <AdminDashboard />;
      case 'content': return <AdminContent />;
      case 'menu': return <AdminMenu />;
      case 'reviews': return <AdminReviews />;
      case 'settings': return <AdminSettings />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111] font-sans flex">
      <aside className="hidden md:flex w-64 shrink-0 border-r border-gray-100 flex-col p-6 print:hidden">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-4 h-4 border border-[#111]"></div>
          <span className="font-bold text-sm tracking-tight uppercase">Admin Cafe</span>
        </div>
        <nav className="flex flex-col gap-1 flex-1">
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-3 px-3 py-3 text-xs font-medium text-left transition-colors ${
                tab === t.id ? 'bg-[#111] text-white' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <t.icon size={16} strokeWidth={1.75} />
              {t.label}
            </button>
          ))}
        </nav>
        <Link to="/home" className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-[#111] mt-6">
          <ExternalLink size={14} /> Lihat Situs
        </Link>
        <button
          onClick={() => { sessionStorage.removeItem('sw_admin_auth'); setAuthed(false); }}
          className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-red-500 mt-4"
        >
          <LogOut size={14} /> Keluar
        </button>
      </aside>

      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-100 flex items-center justify-between px-4 h-14 print:hidden">
        <span className="font-bold text-xs tracking-tight uppercase">Admin Cafe</span>
        <button onClick={() => setMobileNavOpen(v => !v)} className="text-xs uppercase tracking-widest font-bold border border-[#111] px-3 py-1.5">
          {TABS.find(t => t.id === tab)?.label}
        </button>
      </div>
      {mobileNavOpen && (
        <div className="md:hidden fixed top-14 left-0 right-0 z-40 bg-white border-b border-gray-100 print:hidden">
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => { setTab(t.id); setMobileNavOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-medium text-left ${tab === t.id ? 'bg-[#111] text-white' : 'text-gray-600'}`}
            >
              <t.icon size={16} strokeWidth={1.75} />
              {t.label}
            </button>
          ))}
          <Link to="/home" className="flex items-center gap-2 px-4 py-3 text-xs text-gray-500">
            <ExternalLink size={14} /> Lihat Situs
          </Link>
        </div>
      )}

      <main className="flex-1 p-6 md:p-12 pt-20 md:pt-12 max-w-4xl">
        {renderTab()}
      </main>
    </div>
  );
};
