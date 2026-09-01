import React from 'react';

export const IntensityDots: React.FC<{ count: number; max?: number }> = ({ count, max = 5 }) => (
  <div className="flex gap-1">
    {Array.from({ length: max }).map((_, i) => (
      <span key={i} className={`w-1.5 h-1.5 rounded-full ${i < count ? 'bg-current' : 'bg-current opacity-25'}`}></span>
    ))}
  </div>
);
