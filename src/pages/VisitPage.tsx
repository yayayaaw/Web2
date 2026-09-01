import React from 'react';
import { useCMS } from '../../context/CMSContext';

export const VisitPage: React.FC = () => {
  const { data } = useCMS();
  const s = data.settings;

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
        <div className="md:col-span-5 lg:col-span-4 order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 hidden md:block">Temui kami.</h1>

          <div className="space-y-12">
            <div>
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-4">Address</h3>
              <p className="text-sm leading-relaxed text-[#111] font-medium mb-2">{s.cafeName}</p>
              <p className="text-sm leading-relaxed text-gray-600">{s.address}</p>
              <p className="text-[10px] text-gray-500 mt-2">{s.addressLandmark}</p>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-4">Opening Hours</h3>
              <div className="space-y-2 text-sm leading-relaxed">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Senin — Jumat</span>
                  <span className="font-medium text-[#111]">{s.hoursWeekday}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Sabtu — Minggu</span>
                  <span className="font-medium text-[#111]">{s.hoursWeekend}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-4">Contact</h3>
              <p className="text-sm leading-relaxed text-[#111] mb-1">WhatsApp: {s.whatsapp}</p>
              <p className="text-sm leading-relaxed text-[#111] mb-1">Telepon: {s.phone}</p>
              <p className="text-sm leading-relaxed text-[#111]">Instagram: {s.instagram}</p>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-4">Amenities</h3>
              <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600">
                <span>✓ Free WiFi</span>
                <span>✓ Indoor Seating</span>
                <span>✓ Outdoor / Smoking Area</span>
                <span>✓ Free Parking</span>
                <span>✓ Power Outlets</span>
                <span>✓ Clean Toilet</span>
                <span>✓ Dine-in & Takeaway</span>
                <span>✓ Cash & QRIS Accepted</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 lg:col-span-8 order-1 md:order-2 mb-12 md:mb-0">
          <h1 className="text-4xl font-bold tracking-tighter mb-8 md:hidden">Temui kami.</h1>
          <div className="w-full aspect-square md:aspect-auto md:h-full bg-gray-100 relative">
            <img src={s.mapsImage} alt="Peta Lokasi" className="w-full h-full object-cover opacity-85" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-4 h-4 bg-[#111] rounded-full mb-3 shadow-lg border-2 border-white"></div>
              <span className="text-[10px] font-bold tracking-widest uppercase bg-white px-4 py-2 shadow-sm whitespace-nowrap">{s.cafeName}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href={s.mapsLink} target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-widest font-bold border border-[#111] px-6 py-3 hover:bg-[#111] hover:text-white transition-colors">
              Get Directions
            </a>
            <a href={`https://wa.me/${s.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-widest font-bold border border-gray-300 text-gray-600 px-6 py-3 hover:border-[#111] hover:text-[#111] transition-colors">
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
