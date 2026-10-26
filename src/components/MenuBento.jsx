import React from 'react';

const pillars = [
  {
    num: '01',
    badge: 'PILAR 01',
    badgeColor: 'bg-[#D64433] text-white',
    count: '4 VARIASI',
    title: 'BURGER PANGGANG',
    desc: 'Dua patty daging sapi pilihan, pinggiran renyah terkaramelisasi, keju cheddar asap, acar buatan rumah.',
    price: 'DARI Rp 35.000',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    linkText: 'LIHAT BURGER →'
  },
  {
    num: '02',
    badge: 'PILAR 02',
    badgeColor: 'bg-[#F5CA3D] text-[#141414]',
    count: '6 POTONGAN & BUCKET',
    title: 'AYAM KENTAKI',
    desc: '12 bumbu rempah digoreng bertekanan dengan kulit super renyah, potongan juicy & glaze bawang putih.',
    price: 'DARI Rp 18.000',
    img: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80',
    linkText: 'LIHAT AYAM →'
  },
  {
    num: '03',
    badge: 'PILAR 03',
    badgeColor: 'bg-[#141414] text-white',
    count: 'SAMPINGAN KRISPI',
    title: 'KENTANG GORENG',
    desc: 'Kentang waffle potong silang, kentang shoestring, lelehan saus cheddar dan taburan garam laut.',
    price: 'DARI Rp 16.000',
    img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    linkText: 'LIHAT SAMPINGAN →'
  },
  {
    num: '04',
    badge: 'PILAR 04',
    badgeColor: 'bg-[#D64433] text-white',
    count: 'IRISAN KAYU BAKAR',
    title: 'PIZZA OVEN',
    desc: 'Kerak fermentasi renyah, lelehan keju mozzarella melimpah, irisan pepperoni daging sapi pedas.',
    price: 'DARI Rp 55.000',
    img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    linkText: 'LIHAT PIZZA →'
  },
  {
    num: '05',
    badge: 'PILAR 05',
    badgeColor: 'bg-[#F5CA3D] text-[#141414]',
    count: 'AIR MANCUR DINGIN',
    title: 'SODA DINGIN & FLOAT',
    desc: 'Coca-Cola sub-zero, Sprite Lemon-Lime, Fanta Strawberry dengan mahkota es krim vanila lembut.',
    price: 'DARI Rp 12.000',
    img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    linkText: 'LIHAT MINUMAN →'
  },
  {
    num: '06',
    badge: 'PILAR 06',
    badgeColor: 'bg-[#D64433] text-white',
    count: 'PENCUCI MULUT KOMIK',
    title: 'KUE & PIE MANIS',
    desc: 'Pie apel kayu manis goreng tepung, churros renyah dengan celupan cokelat hitam dan sundae lembut.',
    price: 'DARI Rp 14.000',
    img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
    linkText: 'LIHAT MANISAN →'
  }
];

export const MenuBento = () => {
  return (
    <section className="bg-[#141414] text-[#F5EEDC] py-14 px-4 lg:px-10 border-b-[3px] border-[#141414] halftone-light" id="flavors">
      <div className="max-w-[1580px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b-2 border-neutral-800 pb-4">
          <div>
            <span className="font-[Special_Elite] text-xs md:text-sm text-[#F5CA3D] font-bold tracking-[0.25em] block mb-1">
              // PILAR UTAMA MAKANAN CEPAT SAJI · NIKMATI BERDASARKAN GENRE
            </span>
            <h2 className="font-[Archivo_Black] text-4xl sm:text-6xl tracking-tight leading-none text-[#F5EEDC]">
              PILIHAN UTAMA KOKI.
            </h2>
          </div>
          <p className="font-[Special_Elite] text-xs md:text-sm text-neutral-400 max-w-md">
            Pilih pilar di bawah untuk memeriksa profil rasa, tingkat kepedasan khusus, dan pasangan celupan saus andalan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => (
            <div key={idx} className="bg-[#F5EEDC] text-[#141414] border-[3px] border-[#141414] shadow-[6px_6px_0_#141414] p-5 flex flex-col justify-between group hover:-translate-y-1 transition-all">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className={`${item.badgeColor} text-[11px] font-[Special_Elite] font-bold px-2 py-0.5 border border-[#141414] shadow-[2px_2px_0_#141414]`}>{item.badge}</span>
                  <span className="font-[Special_Elite] text-xs font-bold text-neutral-600">{item.count}</span>
                </div>
                <div className="relative aspect-[16/10] bg-[#141414] border-2 border-[#141414] overflow-hidden mb-3">
                  <img alt={item.title} className="w-full h-full object-cover filter contrast-125 group-hover:scale-105 transition-transform duration-300" src={item.img} />
                </div>
                <h3 className="font-[Archivo_Black] text-2xl tracking-tight uppercase leading-none">{item.title}</h3>
                <p className="font-[Special_Elite] text-xs text-neutral-700 mt-2">{item.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t-2 border-neutral-300 flex justify-between items-center">
                <span className="font-[Special_Elite] text-xs font-bold text-[#D64433]">{item.price}</span>
                <a className="bubble-btn bg-white border-2 border-[#141414] rounded-full px-3 py-1 text-xs font-[Special_Elite] font-bold shadow-[2px_2px_0_#141414] hover:bg-[#F5CA3D] transition-all" href="#menu">{item.linkText}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};