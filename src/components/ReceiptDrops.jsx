import React from 'react';
import { Tag, Sparkles } from 'lucide-react';

const drops = [
  {
    stub: 'KUPON RESI #RC-101',
    badge: 'HEMAT 35%',
    badgeBg: 'bg-[#D64433] text-white',
    title: "PAKET PECINTA DAGING",
    desc: 'Burger Ganda + Kentang Loaded + Cola Dingin',
    voucher: 'WJYA-MEAT',
    drops: 'RILIS: JUM · 24 OKT',
    img: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80'
  },
  {
    stub: 'KUPON RESI #RC-102',
    badge: 'PAKET KELUARGA',
    badgeBg: 'bg-[#F5CA3D] text-[#141414]',
    title: 'BUCKET KELUARGA KENTAKI',
    desc: '8 Pcs Ayam + 4 Nasi + 4 Soda',
    voucher: 'CRISPY-8',
    drops: 'RILIS: SAB · 25 OKT',
    img: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80'
  },
  {
    stub: 'KUPON RESI #RC-103',
    badge: 'KOTAK PESTA',
    badgeBg: 'bg-[#D64433] text-white',
    title: 'KOTAK PESTA PIZZA',
    desc: '2 Pizza Besar + 4 Sprite + Kentang Jumbo',
    voucher: 'SLICE-PARTY',
    drops: 'RILIS: MIN · 26 OKT',
    img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80'
  }
];

export const ReceiptDrops = () => {
  return (
    <section className="bg-[#141414] text-[#F5EEDC] py-14 px-4 lg:px-10 border-b-[3px] border-[#141414] halftone-light" id="drop-deals">
      <div className="max-w-[1580px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b-2 border-neutral-800 pb-4">
          <div>
            <span className="font-[Special_Elite] text-xs md:text-sm text-[#F5CA3D] font-bold tracking-[0.25em] block mb-1">
              // VOUCHER RESI BERPERFORASI · RILIS KILAT
            </span>
            <h2 className="font-[Archivo_Black] text-4xl sm:text-6xl tracking-tight leading-none text-[#F5EEDC]">
              KUPON RESI DISKON.
            </h2>
          </div>
          <div className="font-[Special_Elite] text-xs text-neutral-400 bg-neutral-900 border border-neutral-700 px-3 py-1.5">
            MASUKKAN KODE SAAT PEMBAYARAN UNTUK KLAIM HEMAT
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {drops.map((drop, idx) => (
            <div key={idx} className="bg-[#F5EEDC] text-[#141414] border-[3px] border-[#141414] shadow-[6px_6px_0_#141414] flex flex-col justify-between overflow-hidden">
              <div className="p-4 border-b-2 border-dashed border-neutral-400">
                <div className="flex justify-between items-center text-[10px] font-[Special_Elite] font-bold text-neutral-600 mb-2">
                  <span>{drop.stub}</span>
                  <span className={`${drop.badgeBg} px-2 py-0.5 border border-[#141414]`}>{drop.badge}</span>
                </div>
                <div className="relative aspect-[16/9] bg-[#141414] border-2 border-[#141414] overflow-hidden mb-3">
                  <img alt={drop.title} className="w-full h-full object-cover filter contrast-125 hover:scale-105 transition-transform duration-300" src={drop.img} />
                </div>
                <h3 className="font-[Archivo_Black] text-xl uppercase leading-none">{drop.title}</h3>
                <div className="font-[Special_Elite] text-xs text-neutral-600 mt-1">{drop.desc}</div>
                <div className="font-[Special_Elite] text-xs font-bold text-[#D64433] mt-2 bg-white border border-[#141414] p-1.5 inline-block">VOUCHER: {drop.voucher}</div>
              </div>
              <div className="p-3 bg-white flex items-center justify-between border-t border-neutral-300">
                <span className="font-[Special_Elite] text-xs font-bold text-neutral-700">{drop.drops}</span>
                <button className="bubble-btn bg-[#F5CA3D] border-2 border-[#141414] px-3 py-1 text-xs font-[Special_Elite] font-bold shadow-[2px_2px_0_#141414] hover:bg-white transition-all cursor-pointer flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  <span>KLAIM KUPON</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
