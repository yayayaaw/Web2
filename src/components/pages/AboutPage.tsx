import React from 'react';

export const AboutPage: React.FC = () => (
  <div className="animate-fade-in">
    <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold tracking-tighter leading-[1.05] mb-12 max-w-3xl text-[#111]">
        Kopi lebih dari sekadar minuman.
      </h1>
    </section>

    <section className="w-full h-[50vh] md:h-[70vh] mb-20 lg:mb-32">
      <img 
        src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=1600" 
        alt="Interior Cafe" 
        className="w-full h-full object-cover"
      />
    </section>

    <section className="pb-32 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto space-y-20 md:space-y-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">
          Our Story
        </div>
        <div className="md:col-span-7">
          <p className="text-xl md:text-2xl leading-relaxed font-medium mb-8 text-[#111]">
            Semuanya berawal dari keinginan sederhana: menciptakan ruang yang nyaman untuk minum kopi yang enak, tanpa kerumitan.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Bagi kami, kedai kopi adalah ruang antara rumah dan pekerjaan. Tempat di mana ide bertukar, buku dibaca, dan jeda dinikmati. Arsitektur kami dirancang minimalis agar pikiran bisa beristirahat, dan kopi kami dirancang untuk melengkapi momen tersebut.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">
          Our Coffee
        </div>
        <div className="md:col-span-7">
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Kopi yang baik tidak butuh penjelasan rumit. Kami memilih biji berkualitas, menyangrainya sendiri untuk memunculkan kemanisan alami, dan menyeduhnya secara konsisten. 
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Datanglah ke bar kami, tanyakan rekomendasi, atau nikmati saja pesanan favorit Anda setiap hari. Kami di sini untuk menyajikannya dengan baik.
          </p>
        </div>
      </div>
    </section>
  </div>
);
