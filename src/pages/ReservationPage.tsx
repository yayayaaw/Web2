import React from 'react';

export const ReservationPage: React.FC = () => (
  <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto animate-fade-in">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
      <div className="md:col-span-5 lg:col-span-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Reserve a table.</h1>
        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          Kami menyambut kedatangan langsung (walk-in) setiap saat. Namun untuk akhir pekan atau pertemuan spesifik, kami sarankan Anda melakukan reservasi.
        </p>
        <p className="text-sm font-medium text-[#111] leading-relaxed mb-12">
          *Untuk reservasi grup di atas 6 orang, mohon hubungi kami via WhatsApp.
        </p>
      </div>

      <div className="md:col-span-7 lg:col-span-6 lg:col-start-6">
        <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-3">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Nama</label>
              <input type="text" className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-[#111] transition-colors rounded-none bg-transparent" />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Nomor WhatsApp</label>
              <input type="tel" className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-[#111] transition-colors rounded-none bg-transparent" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-3 md:col-span-1">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Tanggal</label>
              <input type="date" className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-[#111] transition-colors rounded-none bg-transparent font-sans" />
            </div>
            <div className="flex flex-col gap-3 md:col-span-1">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Waktu</label>
              <input type="time" className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-[#111] transition-colors rounded-none bg-transparent font-sans" />
            </div>
            <div className="flex flex-col gap-3 md:col-span-1">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Jumlah Orang</label>
              <select className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-[#111] transition-colors rounded-none bg-transparent">
                <option>1 Orang</option>
                <option>2 Orang</option>
                <option>3 - 4 Orang</option>
                <option>5 - 6 Orang</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Catatan</label>
            <textarea rows={2} className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-[#111] transition-colors rounded-none bg-transparent resize-none"></textarea>
          </div>

          <button type="submit" className="border border-[#111] text-[#111] py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-[#111] hover:text-white transition-colors w-full md:w-auto md:px-12 self-start rounded-none">
            Buat Reservasi
          </button>
        </form>
      </div>
    </div>
  </div>
);
