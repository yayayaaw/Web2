import React from 'react';
import { useCMS } from '../../context/CMSContext';
import { ImageUploadField } from '../components/ImageUploadField';

const Field: React.FC<{ label: string; value: string; onChange: (v: string) => void; multiline?: boolean }> = ({
  label, value, onChange, multiline,
}) => (
  <div className="flex flex-col gap-2 mb-6">
    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">{label}</label>
    {multiline ? (
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        rows={3}
        className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#111] resize-none"
      />
    ) : (
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#111]"
      />
    )}
  </div>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-12 pb-12 border-b border-gray-100">
    <h2 className="text-[11px] uppercase tracking-widest font-bold text-gray-400 mb-6">{title}</h2>
    {children}
  </div>
);

export const AdminContent: React.FC = () => {
  const { data, updateSettings } = useCMS();
  const s = data.settings;

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight mb-8">Konten Utama</h1>

      <Section title="Identitas Cafe">
        <Field label="Nama Cafe" value={s.cafeName} onChange={v => updateSettings({ cafeName: v })} />
        <div className="grid grid-cols-2 gap-4">
          <Field label="Logo Baris 1" value={s.logoLine1} onChange={v => updateSettings({ logoLine1: v })} />
          <Field label="Logo Baris 2" value={s.logoLine2} onChange={v => updateSettings({ logoLine2: v })} />
        </div>
        <Field label="Label Kecil (Eyebrow)" value={s.eyebrow} onChange={v => updateSettings({ eyebrow: v })} />
      </Section>

      <Section title="Hero (Tampilan Awal)">
        <Field label="Judul Hero" value={s.heroTitle} onChange={v => updateSettings({ heroTitle: v })} multiline />
        <Field label="Sub Judul" value={s.heroSubtitle} onChange={v => updateSettings({ heroSubtitle: v })} multiline />
        <ImageUploadField label="Gambar Hero" value={s.heroImage} onChange={v => updateSettings({ heroImage: v })} aspect="aspect-[4/5]" />
      </Section>

      <Section title="Kalimat Pembuka">
        <Field label="Kutipan Pembuka" value={s.introQuote} onChange={v => updateSettings({ introQuote: v })} multiline />
      </Section>

      <Section title="Menu Unggulan (Judul Section)">
        <Field label="Judul" value={s.featuredMenuTitle} onChange={v => updateSettings({ featuredMenuTitle: v })} />
        <Field label="Deskripsi" value={s.featuredMenuDesc} onChange={v => updateSettings({ featuredMenuDesc: v })} multiline />
      </Section>

      <Section title="Suasana Cafe (Experience)">
        <Field label="Judul" value={s.experienceTitle} onChange={v => updateSettings({ experienceTitle: v })} multiline />
        <Field label="Deskripsi" value={s.experienceDesc} onChange={v => updateSettings({ experienceDesc: v })} multiline />
        <ImageUploadField label="Gambar Suasana" value={s.experienceImage} onChange={v => updateSettings({ experienceImage: v })} />
      </Section>

      <Section title="Halaman Tentang (About)">
        <Field label="Judul Utama" value={s.aboutHeadline} onChange={v => updateSettings({ aboutHeadline: v })} multiline />
        <ImageUploadField label="Gambar Interior" value={s.aboutImage} onChange={v => updateSettings({ aboutImage: v })} />
        <Field label="Label: Cerita Kami" value={s.aboutStoryLabel} onChange={v => updateSettings({ aboutStoryLabel: v })} />
        <Field label="Paragraf Pembuka" value={s.aboutStoryLead} onChange={v => updateSettings({ aboutStoryLead: v })} multiline />
        <Field label="Paragraf Cerita" value={s.aboutStoryBody} onChange={v => updateSettings({ aboutStoryBody: v })} multiline />
        <Field label="Label: Kopi Kami" value={s.aboutCoffeeLabel} onChange={v => updateSettings({ aboutCoffeeLabel: v })} />
        <Field label="Paragraf Kopi 1" value={s.aboutCoffeeBody1} onChange={v => updateSettings({ aboutCoffeeBody1: v })} multiline />
        <Field label="Paragraf Kopi 2" value={s.aboutCoffeeBody2} onChange={v => updateSettings({ aboutCoffeeBody2: v })} multiline />
      </Section>
    </div>
  );
};
