import React, { useState } from 'react';
import { Flame, Droplet, Footprints, Sparkles, Plus, Skull } from 'lucide-react';

const sauces = [
  {
    id: 'sambal',
    name: 'SAMBAL GEPREK',
    heat: 'TINGKAT PEDAS 5/5',
    icon: Flame,
    iconColor: 'text-[#D64433]',
    desc: "Cabai rawit merah yang dihancurkan digoreng kilat dalam minyak sawit mendidih dengan bawang merah dan garam laut. Kepedasan langsung yang menguatkan kerenyahan ayam.",
    scoville: 'Scoville Ekstrem (98,000 SHU)',
    texture: 'Bubur cabai kasar & minyak harum',
    badge: 'PILIHAN UTAMA',
    badgeBg: 'bg-[#D64433] text-white',
    bgClass: 'bg-[#141414] text-white',
    matches: [
      { name: 'Ayam Kentaki Fried Chicken', score: '98%' },
      { name: 'Kentang Goreng Waffle', score: '95%' },
      { name: 'Burger Double Smash', score: '88%' }
    ]
  },
  {
    id: 'mustard',
    name: 'HONEY MUSTARD',
    heat: 'TINGKAT PEDAS 1/5',
    icon: Droplet,
    iconColor: 'text-amber-600',
    desc: 'Dijon mustard tajam yang dipadukan sempurna dengan madu bunga liar organik untuk kilau rasa manis dan tajam.',
    scoville: 'Manis Ringan (500 SHU)',
    texture: 'Emulsi halus dengan bintik madu',
    badge: 'TERPOPULER',
    badgeBg: 'bg-[#F5CA3D] text-[#141414]',
    bgClass: 'bg-white text-[#141414]',
    matches: [
      { name: 'Ayam Kentaki Fried Chicken', score: '92%' },
      { name: 'Burger Double Smash', score: '90%' },
      { name: 'Kentang Goreng Waffle', score: '85%' }
    ]
  },
  {
    id: 'bbq',
    name: 'SMOKY BBQ',
    heat: 'TINGKAT PEDAS 2/5',
    icon: Flame,
    iconColor: 'text-orange-700',
    desc: 'Infusi asap hickory, molase gelap, dan cuka sari apel panggang untuk sensasi khas rumah panggang sejati.',
    scoville: 'Asap Sedang (2,500 SHU)',
    texture: 'Glasir gelap mengkilap kaya rasa',
    badge: 'KLASIK',
    badgeBg: 'bg-neutral-200 text-[#141414]',
    bgClass: 'bg-white text-[#141414]',
    matches: [
      { name: 'Burger Double Smash', score: '99%' },
      { name: 'Kentang Goreng Waffle', score: '90%' },
      { name: 'Ayam Kentaki Fried Chicken', score: '82%' }
    ]
  },
  {
    id: 'garlic',
    name: 'GARLIC MAYO',
    heat: 'TINGKAT PEDAS 1/5',
    icon: Sparkles,
    iconColor: 'text-slate-400',
    desc: 'Konfit bawang putih panggang perlahan yang dikocok ke dalam aioli kewpie Jepang lembut dengan lada hitam.',
    scoville: 'Aromatik Gurih (300 SHU)',
    texture: 'Krim lembut tebal',
    badge: 'CREAMY',
    badgeBg: 'bg-neutral-200 text-[#141414]',
    bgClass: 'bg-white text-[#141414]',
    matches: [
      { name: 'Kentang Goreng Waffle', score: '97%' },
      { name: 'Ayam Kentaki Fried Chicken', score: '94%' },
      { name: 'Burger Double Smash', score: '85%' }
    ]
  },
  {
    id: 'ghost',
    name: 'GHOST PEPPER 9X',
    heat: 'TINGKAT PEDAS 9/5',
    icon: Skull,
    iconColor: 'text-[#D64433]',
    desc: 'Infusi Bhut Jolokia ekstrem dengan parutan jeruk nipis dan tumbukan habanero fermentasi. Tangani dengan hati-hati.',
    scoville: 'Neraka Vulkanik (1,200,000 SHU)',
    texture: 'Pasta merah berapi tajam',
    badge: 'EKSTREM',
    badgeBg: 'bg-[#D64433] text-white',
    bgClass: 'bg-white text-[#141414]',
    matches: [
      { name: 'Ayam Kentaki Fried Chicken', score: '99%' },
      { name: 'Burger Double Smash', score: '91%' },
      { name: 'Kentang Goreng Waffle', score: '80%' }
    ]
  },
  {
    id: 'cheddar',
    name: 'CHEDDAR MELT',
    heat: 'TINGKAT PEDAS 0/5',
    icon: Droplet,
    iconColor: 'text-amber-500',
    desc: 'Celupan fondue keju cheddar Wisconsin cair keemasan yang hangat dicampur dengan gouda tua dan lada hitam.',
    scoville: 'Tanpa Pedas / Murni Susu',
    texture: 'Keju hangat meleleh lembut',
    badge: 'GURIH',
    badgeBg: 'bg-[#F5CA3D] text-[#141414]',
    bgClass: 'bg-white text-[#141414]',
    matches: [
      { name: 'Kentang Goreng Waffle', score: '99%' },
      { name: 'Burger Double Smash', score: '95%' },
      { name: 'Ayam Kentaki Fried Chicken', score: '88%' }
    ]
  }
];

export const SauceLab = () => {
  const [activeSauce, setActiveSauce] = useState(sauces[0]);

  return (
    <section className="bg-[#F5CA3D] text-[#141414] py-12 px-4 lg:px-10 border-b-[3px] border-[#141414] halftone-dark" id="sauce-lab">
      <div className="max-w-[1580px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6 border-b-[3px] border-[#141414] pb-4">
          <div>
            <span className="font-[Special_Elite] text-xs md:text-sm text-[#D64433] font-bold tracking-[0.25em] block mb-1">
              // LAB KONDIMEN · 42 SAUS CELUP & TABURAN ARTISANAL
            </span>
            <h2 className="font-[Archivo_Black] text-4xl sm:text-6xl tracking-tight leading-none text-[#141414]">
              LABORATORIUM SAUS.
            </h2>
          </div>
          <div className="text-xs font-[Special_Elite] font-bold tracking-wider text-[#141414] flex items-center gap-2">
            <span className="bg-[#F5EEDC] border-2 border-[#141414] px-3 py-1 shadow-[2px_2px_0_#141414]">KETUK BOTOL UNTUK UJI KECOCOKAN</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Rak Botol Kiri */}
          <div className="lg:col-span-7 bg-[#F5EEDC] border-[3px] border-[#141414] p-6 shadow-[8px_8px_0_#141414]">
            <div className="flex justify-between items-center text-xs font-[Special_Elite] font-bold mb-6 border-b-2 border-neutral-300 pb-2">
              <span className="text-[#D64433]">RAK DISPENSER 01</span>
              <span className="text-neutral-600">KLIK BOTOL UNTUK PASANGAN RASA</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {sauces.map((sauce) => {
                const IconComponent = sauce.icon;
                return (
                  <button
                    key={sauce.id}
                    onClick={() => setActiveSauce(sauce)}
                    className={`sauce-selector-btn text-left p-3 border-[2.5px] border-[#141414] ${sauce.bgClass} shadow-[2px_2px_0_#141414] hover:scale-105 transition-all cursor-pointer relative overflow-hidden ${
                      activeSauce.id === sauce.id ? 'ring-4 ring-[#D64433]' : ''
                    }`}
                  >
                    {/* Animated border glow effect */}
                    {activeSauce.id === sauce.id && (
                      <div className="absolute inset-0 border-2 border-[#D64433] animate-pulse pointer-events-none"></div>
                    )}
                    
                    <div className="flex justify-between items-center text-[10px] font-[Special_Elite] font-bold text-[#D64433] mb-2">
                      <span>{sauce.heat}</span>
                      <IconComponent className={`w-4 h-4 ${sauce.iconColor}`} />
                    </div>
                    <div className="font-[Archivo_Black] text-lg leading-tight">{sauce.name}</div>
                    <div className="font-[Special_Elite] text-[10px] opacity-80 mt-1 line-clamp-2">{sauce.desc}</div>
                    <div className={`mt-3 text-[10px] font-[Special_Elite] ${sauce.badgeBg} px-2 py-0.5 inline-block border border-[#141414]`}>
                      {sauce.badge}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Laporan Kompatibilitas Kanan */}
          <div className="lg:col-span-5 bg-[#F5EEDC] border-[3px] border-[#141414] p-6 shadow-[8px_8px_0_#141414] relative overflow-hidden" id="sauce-detail-card">
            {/* Animated corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#D64433]"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#D64433]"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#D64433]"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#D64433]"></div>

            <div className="flex items-center justify-between border-b-2 border-neutral-300 pb-3 mb-4 relative z-10">
              <div className="bg-[#D64433] text-white text-[10px] font-[Special_Elite] font-bold px-2 py-0.5 border border-[#141414] shadow-[2px_2px_0_#141414] uppercase flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LAPORAN UJI KECOCOKAN</span>
              </div>
              <span className="font-[Special_Elite] text-xs text-neutral-600 font-bold">KEMASAN: 50 ML</span>
            </div>
            <div className="mb-4 relative z-10">
              <h3 className="font-[Archivo_Black] text-3xl text-[#141414] tracking-tight">{activeSauce.name}</h3>
              <p className="font-[Special_Elite] text-xs text-neutral-700 mt-1">
                {activeSauce.desc}
              </p>
            </div>
            <div className="bg-white border-2 border-[#141414] p-3 mb-4 font-[Special_Elite] text-xs space-y-1.5 shadow-[2px_2px_0_#141414] relative z-10">
              <div className="flex justify-between">
                <span className="text-neutral-600">Profil Kepedasan:</span>
                <span className="font-bold text-[#D64433]">{activeSauce.scoville}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Konsistensi:</span>
                <span className="font-bold text-neutral-800">{activeSauce.texture}</span>
              </div>
            </div>
            <div className="space-y-3 mb-6 relative z-10">
              <div className="text-xs font-[Special_Elite] font-bold tracking-wider uppercase text-neutral-800">Kecocokan Menu Utama:</div>
              {activeSauce.matches.map((match, idx) => (
                <div key={idx}>
                  <div className="flex justify-between font-[Special_Elite] text-xs font-bold mb-1">
                    <span>{match.name}</span>
                    <span className="text-[#D64433]">{match.score} COCOK</span>
                  </div>
                  <div className="w-full h-2.5 border-2 border-[#141414] bg-neutral-200 overflow-hidden">
                    <div className="h-full bg-[#D64433] transition-all duration-500 ease-out" style={{ width: match.score }}></div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full bubble-btn bg-[#F5CA3D] text-[#141414] border-[2.5px] border-[#141414] py-3 text-xs md:text-sm font-[Special_Elite] font-bold tracking-wider uppercase shadow-[5px_5px_0_#141414] hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer relative z-10">
              <Plus className="w-4 h-4" />
              <span>TAMBAH SAUS KE NAMPAN (+Rp 4.000)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
