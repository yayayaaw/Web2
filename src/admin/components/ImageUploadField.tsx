import React, { useRef, useState } from 'react';
import { ImagePlus } from 'lucide-react';

interface ImageUploadFieldProps {
  label: string;
  value: string;
  onChange: (base64: string) => void;
  aspect?: string;
}

function compressImage(file: File, maxWidth = 1280, quality = 0.75): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxWidth / img.width);
        const canvas = document.createElement('canvas');
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext('2d');
        if (!ctx) return reject('no canvas context');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = reject;
      img.src = reader.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export const ImageUploadField: React.FC<ImageUploadFieldProps> = ({ label, value, onChange, aspect = 'aspect-video' }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const handleFile = async (file: File | null) => {
    if (!file) return;
    setError('');
    setBusy(true);
    try {
      const dataUrl = await compressImage(file);
      onChange(dataUrl);
    } catch {
      setError('Gagal memproses foto, coba foto lain.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">{label}</label>
      <div
        className={`relative w-full ${aspect} bg-gray-100 overflow-hidden cursor-pointer group border border-gray-200`}
        onClick={() => inputRef.current?.click()}
      >
        {value ? (
          <img src={value} alt={label} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <ImagePlus size={28} strokeWidth={1.5} />
          </div>
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white text-[10px] uppercase tracking-widest font-bold">
            {busy ? 'Memproses...' : 'Ganti Foto'}
          </span>
        </div>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={e => handleFile(e.target.files?.[0] ?? null)}
      />
      {error && <p className="text-[10px] text-red-500">{error}</p>}
      <p className="text-[10px] text-gray-400">Ketuk gambar untuk buka galeri HP dan pilih foto.</p>
    </div>
  );
};
