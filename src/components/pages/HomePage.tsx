import React from 'react';
import { PageType } from '../../types';
import { FEATURED_MENU, REVIEWS } from '../../data/coffeeData';
import { IntensityDots } from '../common/IntensityDots';

interface HomePageProps {
  navigate: (page: PageType) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <div className="animate-fade-in">
      
      {/* 1. HERO SECTION */}
      
      {/* Mobile Hero */}
      <section className="md:hidden pt-28 pb-16 px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3.5 h-3.5 border border-[#111]"></div>
          <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Sweater Weather</p>
        </div>
        
        <h1 className="text-3xl font-bold tracking-tighter leading-[1.15] mb-6 text-[#111]">
          Ngomongin kopi, menurut kamu bagaimana?
        </h1>
        <p className="text-xs text-gray-600 mb-8 leading-relaxed">
          Tempat untuk kopi yang baik, percakapan yang panjang, dan waktu yang tidak perlu terburu-buru.
        </p>

        {/* Panel Hitam Hero Mobile */}
        <div className="relative w-full aspect-[4/5] bg-[#111] mb-8 overflow-hidden flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1514432324607-a125290ac692?auto=format&fit=crop&q=80&w=800" 
            alt="Hero Coffee" 
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </section>

      {/* Desktop Hero */}
      <section className="hidden md:flex min-h-[85vh] pt-32 pb-16 px-12 lg:px-24 max-w-[1440px] mx-auto items-center">
        <div className="grid grid-cols-12 gap-12 w-full items-center">
          
          <div className="col-span-5 pr-4 z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-4 h-4 border border-[#111]"></div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Sweater Weather</p>
            </div>
            
            <h1 className="text-[3.5rem] lg:text-[4.5rem] font-bold tracking-tighter leading-[1.08] mb-6 text-[#111]">
              Ngomongin kopi,<br/>menurut kamu<br/>bagaimana?
            </h1>
            <p className="text-sm text-gray-600 max-w-sm leading-relaxed">
              Tempat untuk kopi yang baik, percakapan yang panjang, dan waktu yang tidak perlu terburu-buru.
            </p>
          </div>

          <div className="col-span-7 relative h-[600px] flex items-center">
            <div className="absolute top-0 right-0 w-[85%] h-full bg-[#111] z-0"></div>
            
            <div className="absolute right-12 lg:right-20 w-[65%] h-[80%] z-10 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1514432324607-a125290ac692?auto=format&fit=crop&q=80&w=900" 
                alt="Specialty Coffee Hero" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto flex justify-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight max-w-xl text-[#111]">
          "Ruang untuk menikmati kopi dengan cara yang sederhana."
        </h2>
      </section>

      {/* 3. MENU UNGGULAN (Clean Horizontal Carousel without arrow buttons) */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto overflow-hidden">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Menu unggulan.</h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-md">
            Pilihan minuman dan racikan spesial yang paling sering dipesan oleh pengunjung kami setiap hari.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar pb-6 -mx-6 px-6 md:mx-0 md:px-0">
          {FEATURED_MENU.map(item => (
            <div 
              key={item.id} 
              className="relative bg-[#111] min-w-[280px] md:min-w-[350px] lg:min-w-[380px] aspect-[3/4] overflow-hidden group flex flex-col justify-end p-8 shrink-0"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent"></div>
              
              <div className="relative z-10 text-white text-center w-full">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-[13px] tracking-[0.25em] uppercase font-bold">{item.name}</p>
                  <span className="text-xs font-bold text-gray-300">{item.price}</span>
                </div>
                <p className="text-[11px] text-gray-300 mb-4">{item.subtitle}</p>
                <div className="flex justify-center text-white">
                  <IntensityDots count={item.intensity} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:text-left">
          <button onClick={() => navigate('menu')} className="text-[10px] uppercase tracking-widest font-bold border-b border-[#111] pb-1">
            Lihat menu lengkap
          </button>
        </div>
      </section>

      {/* 4. MENU PREVIEW */}
      <section className="py-20 md:py-24 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Yang kami sajikan.</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-8">
              Kurasi menu sederhana yang berfokus pada kualitas bahan baku dan konsistensi rasa.
            </p>
            <button onClick={() => navigate('menu')} className="text-[10px] uppercase tracking-widest font-bold border-b border-[#111] pb-1 hidden md:inline-block">
              Lihat Menu
            </button>
          </div>
          
          <div className="md:col-span-8 lg:col-span-6 lg:col-start-7 space-y-6">
            {['Espresso', 'Cappuccino', 'Flat White', 'V60 Pour Over', 'Matcha', 'Butter Croissant'].map((item, idx) => (
               <div key={idx} className="flex justify-between items-end">
                 <span className="text-sm font-medium text-gray-800">{item}</span>
                 <div className="flex-grow border-b border-gray-200 mx-4 relative top-[-4px]"></div>
               </div>
            ))}
            <div className="pt-6 md:hidden">
              <button onClick={() => navigate('menu')} className="text-[10px] uppercase tracking-widest font-bold border-b border-[#111] pb-1">
                Lihat Menu Lengkap
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CAFE EXPERIENCE */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
          <div className="md:col-span-7 h-[50vh] md:h-[650px] bg-gray-50">
             <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200" 
                alt="Suasana Cafe" 
                className="w-full h-full object-cover"
             />
          </div>
          <div className="md:col-span-5 md:pr-12">
            <h2 className="text-3xl font-bold tracking-tight leading-tight mb-6">
              Datang untuk kopi.<br/>Tinggal untuk suasananya.
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-10">
              Datang sendiri dengan buku favorit, atau bersama teman untuk percakapan panjang. Kami merancang ruang ini untuk menjadi rumah kedua Anda, dengan cahaya alami dan aroma kopi yang selalu menyambut.
            </p>
            <button onClick={() => navigate('about')} className="text-[10px] uppercase tracking-widest font-bold border-b border-[#111] pb-1">
              Tentang Kami
            </button>
          </div>
        </div>
      </section>

      {/* 6. WHAT PEOPLE SAY (REVIEWS) */}
      <section className="py-20 md:py-24 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto bg-[#F7F7F5]">
        <div className="mb-16 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Apa kata mereka.</h2>
            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              Beberapa cerita dari orang-orang yang pernah duduk, minum kopi, dan menghabiskan waktu bersama kami.
            </p>
          </div>
          <div className="flex items-center gap-3">
             <span className="text-xl font-bold">4.8</span>
             <div className="flex text-[#111]">★★★★★</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {REVIEWS.map(review => (
            <div key={review.id} className="border-t border-[#111] pt-6">
              <div className="text-[#111] text-[10px] mb-4">★★★★★</div>
              <p className="text-sm font-medium leading-relaxed mb-6">"{review.text}"</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">— {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. VISIT PREVIEW */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
            <div className="md:col-span-5 lg:col-span-4">
               <h2 className="text-3xl font-bold tracking-tight mb-8">Temui kami.</h2>
               <div className="w-full aspect-square bg-gray-100 mb-8 overflow-hidden relative">
                 <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
                    alt="Peta Lokasi" 
                    className="w-full h-full object-cover opacity-75"
                 />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <div className="w-3.5 h-3.5 bg-[#111] rounded-full mx-auto mb-2 ring-4 ring-white"></div>
                 </div>
               </div>
            </div>
            
            <div className="md:col-span-7 lg:col-span-6 lg:col-start-6 space-y-10 md:pt-16">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 <div>
                    <h3 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-4">Alamat</h3>
                    <p className="text-sm leading-relaxed text-[#111]">
                      Jl. Siliwangi No. 45<br/>
                      Kawasan Budaya Cirebon<br/>
                      Jawa Barat, 45124
                    </p>
                 </div>
                 <div>
                    <h3 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-4">Jam Buka</h3>
                    <div className="space-y-1 text-sm leading-relaxed">
                      <p>Senin — Jumat : 07:00 — 21:00</p>
                      <p>Sabtu — Minggu : 08:00 — 22:00</p>
                    </div>
                 </div>
               </div>
               
               <div>
                  <h3 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-4">Reservasi & Kontak</h3>
                  <p className="text-sm leading-relaxed text-[#111] mb-1">WA: +62 811 2233 4455</p>
                  <p className="text-sm leading-relaxed text-[#111]">IG: @sweaterweather.co</p>
               </div>

               <div className="pt-4 flex flex-wrap gap-6">
                  <button onClick={() => navigate('visit')} className="text-[10px] uppercase tracking-widest font-bold border-b border-[#111] pb-1">
                    Lihat Lokasi
                  </button>
                  <button onClick={() => navigate('reservation')} className="text-[10px] uppercase tracking-widest font-bold border-b border-[#111] pb-1 text-gray-400 border-gray-400">
                    Reservasi Meja
                  </button>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};
