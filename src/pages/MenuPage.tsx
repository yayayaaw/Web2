import React, { useState } from 'react';
import { GalleryImage } from '../../types';
import { useCMS } from '../../context/CMSContext';

export const MenuPage: React.FC = () => {
  const { data } = useCMS();
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  return (
    <div className="pt-32 pb-32 px-6 md:px-12 lg:px-24 max-w-[1000px] mx-auto animate-fade-in">
      <div className="text-center mb-24 md:mb-32">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Menu & Galeri.</h1>
        <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
          Diseduh dan disajikan dengan dedikasi. Menggunakan biji kopi kurasi terbaik dan bahan-bahan segar pilihan.
        </p>
        <div className="mt-8 flex justify-center gap-6 text-[10px] uppercase tracking-widest font-bold text-gray-400">
          <span>✓ Dine-In</span>
          <span>✓ Takeaway</span>
        </div>
      </div>

      <div className="space-y-24 mb-32">
        {data.menuCategories.map(category => (
          <div key={category.title}>
            <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold text-gray-900 mb-10 pb-4 border-b border-[#111]">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6">
              {category.items.map(item => (
                <div key={item.name} className="flex justify-between items-baseline group">
                  <span className="text-sm font-medium text-gray-900">{item.name}</span>
                  <span className="flex-grow border-b border-dotted border-gray-300 mx-4 opacity-70 relative top-[-4px]"></span>
                  <span className="text-xs font-bold text-gray-600">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-24">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Suasana Cafe.</h2>
          <p className="text-xs text-gray-500 uppercase tracking-widest">Sentuh foto untuk melihat detail</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.gallery.map(gallery => (
            <div key={gallery.id} className="group cursor-pointer flex flex-col" onClick={() => setActiveImage(gallery)}>
              <div className="w-full aspect-video bg-gray-100 overflow-hidden relative mb-4">
                <img src={gallery.image} alt={gallery.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-[#111] text-[10px] uppercase tracking-widest font-bold px-4 py-2 shadow-sm">Lihat Detail</span>
                </div>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-800">{gallery.title}</p>
            </div>
          ))}
        </div>
      </div>

      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-6 animate-fade-in">
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-8 right-8 text-white text-xs uppercase tracking-widest font-bold border border-white/40 px-4 py-2 hover:bg-white hover:text-[#111] transition-colors"
          >
            Tutup [X]
          </button>
          <div className="max-w-4xl w-full aspect-video mb-6">
            <img src={activeImage.image} alt={activeImage.title} className="w-full h-full object-cover" />
          </div>
          <p className="text-white text-sm font-medium tracking-wide uppercase">{activeImage.title}</p>
        </div>
      )}
    </div>
  );
};
