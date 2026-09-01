import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';
import { ImageUploadField } from '../components/ImageUploadField';
import { FeaturedMenuItem, GalleryImage, MenuCategory } from '../../types';

const inputCls = 'w-full border border-gray-200 p-2 text-xs focus:outline-none focus:border-[#111]';

export const AdminMenu: React.FC = () => {
  const { data, setFeaturedMenu, setMenuCategories, setGallery } = useCMS();

  // ---- Featured menu ----
  const updateFeatured = (idx: number, patch: Partial<FeaturedMenuItem>) => {
    const next = [...data.featuredMenu];
    next[idx] = { ...next[idx], ...patch };
    setFeaturedMenu(next);
  };
  const addFeatured = () => {
    setFeaturedMenu([
      ...data.featuredMenu,
      { id: `item-${Date.now()}`, name: 'menu baru', subtitle: '', price: '0K', intensity: 3, description: '', image: '' },
    ]);
  };
  const removeFeatured = (idx: number) => {
    setFeaturedMenu(data.featuredMenu.filter((_, i) => i !== idx));
  };

  // ---- Menu categories ----
  const updateCategory = (idx: number, patch: Partial<MenuCategory>) => {
    const next = [...data.menuCategories];
    next[idx] = { ...next[idx], ...patch };
    setMenuCategories(next);
  };
  const addCategory = () => {
    setMenuCategories([...data.menuCategories, { title: 'KATEGORI BARU', items: [] }]);
  };
  const removeCategory = (idx: number) => {
    setMenuCategories(data.menuCategories.filter((_, i) => i !== idx));
  };
  const updateItem = (catIdx: number, itemIdx: number, patch: Partial<{ name: string; price: string }>) => {
    const next = [...data.menuCategories];
    const items = [...next[catIdx].items];
    items[itemIdx] = { ...items[itemIdx], ...patch };
    next[catIdx] = { ...next[catIdx], items };
    setMenuCategories(next);
  };
  const addItem = (catIdx: number) => {
    const next = [...data.menuCategories];
    next[catIdx] = { ...next[catIdx], items: [...next[catIdx].items, { name: 'Item baru', price: '0K' }] };
    setMenuCategories(next);
  };
  const removeItem = (catIdx: number, itemIdx: number) => {
    const next = [...data.menuCategories];
    next[catIdx] = { ...next[catIdx], items: next[catIdx].items.filter((_, i) => i !== itemIdx) };
    setMenuCategories(next);
  };

  // ---- Gallery ----
  const updateGallery = (idx: number, patch: Partial<GalleryImage>) => {
    const next = [...data.gallery];
    next[idx] = { ...next[idx], ...patch };
    setGallery(next);
  };
  const addGallery = () => {
    setGallery([...data.gallery, { id: Date.now(), title: 'Foto baru', image: '' }]);
  };
  const removeGallery = (idx: number) => {
    setGallery(data.gallery.filter((_, i) => i !== idx));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight mb-8">Menu & Galeri</h1>

      {/* FEATURED MENU */}
      <div className="mb-14 pb-14 border-b border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[11px] uppercase tracking-widest font-bold text-gray-400">Menu Unggulan (di Home)</h2>
          <button onClick={addFeatured} className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold border border-[#111] px-3 py-2 hover:bg-[#111] hover:text-white">
            <Plus size={12} /> Tambah
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.featuredMenu.map((item, idx) => (
            <div key={item.id} className="border border-gray-200 p-4">
              <ImageUploadField label="Foto" value={item.image} onChange={v => updateFeatured(idx, { image: v })} />
              <div className="grid grid-cols-2 gap-2 mt-3">
                <input className={inputCls} placeholder="Nama" value={item.name} onChange={e => updateFeatured(idx, { name: e.target.value })} />
                <input className={inputCls} placeholder="Harga" value={item.price} onChange={e => updateFeatured(idx, { price: e.target.value })} />
              </div>
              <input className={`${inputCls} mt-2`} placeholder="Subjudul" value={item.subtitle} onChange={e => updateFeatured(idx, { subtitle: e.target.value })} />
              <textarea className={`${inputCls} mt-2`} rows={2} placeholder="Deskripsi" value={item.description} onChange={e => updateFeatured(idx, { description: e.target.value })} />
              <div className="flex items-center justify-between mt-3">
                <label className="text-[10px] text-gray-400">Intensitas (1-5)</label>
                <input type="number" min={1} max={5} className="w-16 border border-gray-200 p-1 text-xs text-center" value={item.intensity} onChange={e => updateFeatured(idx, { intensity: Number(e.target.value) })} />
              </div>
              <button onClick={() => removeFeatured(idx)} className="flex items-center gap-1 text-[10px] text-red-500 uppercase tracking-widest font-bold mt-3">
                <Trash2 size={12} /> Hapus
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* MENU CATEGORIES */}
      <div className="mb-14 pb-14 border-b border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[11px] uppercase tracking-widest font-bold text-gray-400">Daftar Menu Lengkap</h2>
          <button onClick={addCategory} className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold border border-[#111] px-3 py-2 hover:bg-[#111] hover:text-white">
            <Plus size={12} /> Tambah Kategori
          </button>
        </div>
        <div className="space-y-8">
          {data.menuCategories.map((cat, catIdx) => (
            <div key={catIdx} className="border border-gray-200 p-4">
              <div className="flex items-center gap-3 mb-4">
                <input className={`${inputCls} font-bold`} value={cat.title} onChange={e => updateCategory(catIdx, { title: e.target.value })} />
                <button onClick={() => removeCategory(catIdx)} className="text-red-500 shrink-0"><Trash2 size={14} /></button>
              </div>
              <div className="space-y-2">
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex gap-2 items-center">
                    <input className={inputCls} value={item.name} onChange={e => updateItem(catIdx, itemIdx, { name: e.target.value })} />
                    <input className={`${inputCls} w-20`} value={item.price} onChange={e => updateItem(catIdx, itemIdx, { price: e.target.value })} />
                    <button onClick={() => removeItem(catIdx, itemIdx)} className="text-red-500 shrink-0"><Trash2 size={12} /></button>
                  </div>
                ))}
              </div>
              <button onClick={() => addItem(catIdx)} className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold mt-3 text-gray-500">
                <Plus size={12} /> Tambah Item
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* GALLERY */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[11px] uppercase tracking-widest font-bold text-gray-400">Galeri Suasana Cafe</h2>
          <button onClick={addGallery} className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold border border-[#111] px-3 py-2 hover:bg-[#111] hover:text-white">
            <Plus size={12} /> Tambah Foto
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.gallery.map((g, idx) => (
            <div key={g.id} className="border border-gray-200 p-4">
              <ImageUploadField label="Foto" value={g.image} onChange={v => updateGallery(idx, { image: v })} />
              <input className={`${inputCls} mt-3`} placeholder="Judul foto" value={g.title} onChange={e => updateGallery(idx, { title: e.target.value })} />
              <button onClick={() => removeGallery(idx)} className="flex items-center gap-1 text-[10px] text-red-500 uppercase tracking-widest font-bold mt-3">
                <Trash2 size={12} /> Hapus
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
