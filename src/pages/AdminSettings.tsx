import React, { useRef } from 'react';
import { useCMS } from '../../context/CMSContext';
import { ImageUploadField } from '../components/ImageUploadField';

const Field: React.FC<{ label: string; value: string; onChange: (v: string) => void }> = ({ label, value, onChange }) => (
  <div className="flex flex-col gap-2 mb-6">
    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">{label}</label>
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#111]"
    />
  </div>
);

export const AdminSettings: React.FC = () => {
  const { data, updateSettings, resetToDefaults, exportJSON, importJSON } = useCMS();
  const s = data.settings;
  const fileRef = useRef<HTMLInputElement>(null);

  const handleExport = () => {
    const blob = new Blob([exportJSON()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sweater-weather-backup.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (file: File | null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const ok = importJSON(reader.result as string);
      alert(ok ? 'Data berhasil dipulihkan.' : 'File tidak valid.');
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight mb-8">Pengaturan</h1>

      <div className="mb-12 pb-12 border-b border-gray-100">
        <h2 className="text-[11px] uppercase tracking-widest font-bold text-gray-400 mb-6">Kontak</h2>
        <Field label="WhatsApp" value={s.whatsapp} onChange={v => updateSettings({ whatsapp: v })} />
        <Field label="Telepon" value={s.phone} onChange={v => updateSettings({ phone: v })} />
        <Field label="Email" value={s.email} onChange={v => updateSettings({ email: v })} />
        <Field label="Instagram" value={s.instagram} onChange={v => updateSettings({ instagram: v })} />
      </div>

      <div className="mb-12 pb-12 border-b border-gray-100">
        <h2 className="text-[11px] uppercase tracking-widest font-bold text-gray-400 mb-6">Lokasi</h2>
        <Field label="Alamat" value={s.address} onChange={v => updateSettings({ address: v })} />
        <Field label="Patokan" value={s.addressLandmark} onChange={v => updateSettings({ addressLandmark: v })} />
        <Field label="Link Google Maps" value={s.mapsLink} onChange={v => updateSettings({ mapsLink: v })} />
        <ImageUploadField label="Gambar Peta / Lokasi" value={s.mapsImage} onChange={v => updateSettings({ mapsImage: v })} />
      </div>

      <div className="mb-12 pb-12 border-b border-gray-100">
        <h2 className="text-[11px] uppercase tracking-widest font-bold text-gray-400 mb-6">Jam Buka</h2>
        <Field label="Senin — Jumat" value={s.hoursWeekday} onChange={v => updateSettings({ hoursWeekday: v })} />
        <Field label="Sabtu — Minggu" value={s.hoursWeekend} onChange={v => updateSettings({ hoursWeekend: v })} />
      </div>

      <div className="mb-12 pb-12 border-b border-gray-100">
        <h2 className="text-[11px] uppercase tracking-widest font-bold text-gray-400 mb-6">Lainnya</h2>
        <Field label="Rating (contoh: 4.8)" value={s.ratingScore} onChange={v => updateSettings({ ratingScore: v })} />
        <Field label="Tagline Footer" value={s.footerTagline} onChange={v => updateSettings({ footerTagline: v })} />
      </div>

      <div>
        <h2 className="text-[11px] uppercase tracking-widest font-bold text-gray-400 mb-6">Cadangkan Data</h2>
        <p className="text-xs text-gray-500 mb-4 leading-relaxed">
          Data CMS ini tersimpan di browser (localStorage). Ekspor secara berkala sebagai cadangan supaya tidak hilang kalau cache browser dibersihkan.
        </p>
        <div className="flex flex-wrap gap-4">
          <button onClick={handleExport} className="text-[10px] uppercase tracking-widest font-bold border border-[#111] px-5 py-3 hover:bg-[#111] hover:text-white transition-colors">
            Ekspor Backup (.json)
          </button>
          <button onClick={() => fileRef.current?.click()} className="text-[10px] uppercase tracking-widest font-bold border border-gray-300 px-5 py-3 hover:border-[#111] transition-colors">
            Impor Backup
          </button>
          <input ref={fileRef} type="file" accept="application/json" className="hidden" onChange={e => handleImport(e.target.files?.[0] ?? null)} />
          <button
            onClick={() => { if (confirm('Kembalikan semua konten ke default? Perubahan yang belum di-backup akan hilang.')) resetToDefaults(); }}
            className="text-[10px] uppercase tracking-widest font-bold border border-red-300 text-red-500 px-5 py-3 hover:bg-red-50 transition-colors"
          >
            Reset ke Default
          </button>
        </div>
      </div>
    </div>
  );
};
