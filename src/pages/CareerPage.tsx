import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';

export const CareerPage: React.FC = () => {
  const { data } = useCMS();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-24">
        <div className="md:col-span-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Karir.</h1>
          <p className="text-sm text-gray-600 leading-relaxed max-w-md">
            Kami selalu mencari individu yang memiliki dedikasi pada hospitality, ketelitian dalam meracik kopi, dan semangat untuk tumbuh bersama tim kami di Cirebon.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-6 space-y-8">
          <h2 className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-6">Lowongan Tersedia</h2>
          {data.jobs.map(job => (
            <div key={job.id} className="border border-gray-200 p-8 flex flex-col justify-between hover:border-[#111] transition-colors">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold tracking-tight">{job.title}</h3>
                  <span className="text-[10px] uppercase tracking-widest bg-gray-100 px-3 py-1 font-bold">{job.type}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">{job.desc}</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#111]">
                <Briefcase size={14} /> Lokasi: {job.location}
              </div>
            </div>
          ))}
          {data.jobs.length === 0 && <p className="text-sm text-gray-400">Belum ada lowongan dibuka.</p>}
        </div>

        <div className="lg:col-span-6 bg-[#F7F7F5] p-8 md:p-12">
          <h2 className="text-xl font-bold tracking-tight mb-2">Kirim Lamaran</h2>
          <p className="text-xs text-gray-600 mb-8">Tertarik bergabung? Isi formulir di bawah ini dan lampirkan CV Anda.</p>

          {submitted ? (
            <div className="py-12 text-center">
              <p className="text-sm font-bold text-[#111] mb-2">Terima kasih atas lamaran Anda!</p>
              <p className="text-xs text-gray-600">Tim HR kami akan meninjau dan menghubungi Anda jika kualifikasi sesuai.</p>
            </div>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Nama Lengkap</label>
                <input type="text" required className="w-full border-b border-gray-300 bg-transparent py-2 text-sm focus:outline-none focus:border-[#111]" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email & No. WhatsApp</label>
                <input type="text" required className="w-full border-b border-gray-300 bg-transparent py-2 text-sm focus:outline-none focus:border-[#111]" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Posisi yang Dilamar</label>
                <select className="w-full border-b border-gray-300 bg-transparent py-2 text-sm focus:outline-none focus:border-[#111]">
                  {data.jobs.map(j => <option key={j.id} value={j.title}>{j.title}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Tautan CV / Portofolio (Google Drive / LinkedIn)</label>
                <input type="url" required placeholder="https://" className="w-full border-b border-gray-300 bg-transparent py-2 text-sm focus:outline-none focus:border-[#111]" />
              </div>

              <button type="submit" className="bg-[#111] text-white py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-gray-800 transition-colors mt-4">
                Kirim Lamaran
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
