import React from 'react';
import { Trash2 } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';

export const AdminReviews: React.FC = () => {
  const { data, deleteReview } = useCMS();

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight mb-2">Ulasan Pelanggan</h1>
      <p className="text-xs text-gray-500 mb-8">Ulasan hanya bisa dihapus, tidak bisa diedit atau dibalas dari sini.</p>

      {data.reviews.length === 0 && (
        <p className="text-sm text-gray-400">Belum ada ulasan.</p>
      )}

      <div className="space-y-4">
        {data.reviews.map(review => (
          <div key={review.id} className="border border-gray-200 p-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">{review.name}</p>
              <p className="text-sm leading-relaxed">"{review.text}"</p>
            </div>
            <button
              onClick={() => {
                if (confirm(`Hapus ulasan dari ${review.name}?`)) deleteReview(review.id);
              }}
              className="text-red-500 shrink-0 p-2 hover:bg-red-50"
              title="Hapus ulasan"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
