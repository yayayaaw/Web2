import React from 'react';

interface IntensityDotsProps {
  count: number;
  max?: number;
}

export const IntensityDots: React.FC<IntensityDotsProps> = ({ count, max = 5 }) => (
  <div className="flex gap-[3px]">
    {[...Array(max)].map((_, i) => (
      <div key={i} className={`w-1 h-1 rounded-full ${i < count ? 'bg-white' : 'bg-white/30'}`} />
    ))}
  </div>
);
