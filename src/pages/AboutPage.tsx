import React from 'react';
import { useCMS } from '../../context/CMSContext';

export const AboutPage: React.FC = () => {
  const { data } = useCMS();
  const s = data.settings;

  return (
    <div className="animate-fade-in">
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold tracking-tighter leading-[1.05] mb-12 max-w-3xl text-[#111] whitespace-pre-line">
          {s.aboutHeadline}
        </h1>
      </section>

      <section className="w-full h-[50vh] md:h-[70vh] mb-20 lg:mb-32">
        <img src={s.aboutImage} alt="Interior Cafe" className="w-full h-full object-cover" />
      </section>

      <section className="pb-32 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto space-y-20 md:space-y-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">{s.aboutStoryLabel}</div>
          <div className="md:col-span-7">
            <p className="text-xl md:text-2xl leading-relaxed font-medium mb-8 text-[#111]">{s.aboutStoryLead}</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">{s.aboutStoryBody}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">{s.aboutCoffeeLabel}</div>
          <div className="md:col-span-7">
            <p className="text-sm text-gray-600 leading-relaxed mb-6">{s.aboutCoffeeBody1}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{s.aboutCoffeeBody2}</p>
          </div>
        </div>
      </section>
    </div>
  );
};
