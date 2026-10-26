import React, { useEffect, useRef } from 'react';
import { Flame, Zap, FlaskConical, ShoppingCart, Check } from 'lucide-react';
import gsap from 'gsap';

export const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    try {
      // GSAP stagger animation for CTA buttons
      gsap.from('.cta-button', {
        y: 20,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        delay: 0.3
      });

      // Title animation
      gsap.from('.hero-title', {
        y: 40,
        duration: 0.8,
        ease: 'power3.out'
      });

    } catch (error) {
      console.error('Hero animation error:', error);
    }
  }, []);

  return (
    <section ref={heroRef} className="relative bg-[#141414] text-[#F5EEDC] pt-8 pb-10 px-4 lg:px-10 border-b-[3px] border-[#141414] halftone-light overflow-hidden" id="menu">
      {/* Animated Floating Shapes Background - CSS-based */}
      <style>{`
        @keyframes float1 { 0%, 100% { transform: translateY(0px) translateX(0px); } 50% { transform: translateY(-30px) translateX(20px); } }
        @keyframes float2 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-40px); } }
        @keyframes float3 { 0%, 100% { transform: rotate(12deg); } 50% { transform: rotate(12deg) translateY(-25px); } }
        @keyframes rotateShape { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .shape-1 { animation: float1 6s ease-in-out infinite; }
        .shape-2 { animation: float2 5s ease-in-out infinite 0.4s; }
        .shape-3 { animation: float3 7s ease-in-out infinite 0.8s; }
        .shape-4 { animation: rotateShape 20s linear infinite; }
      `}</style>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="shape-1 absolute top-20 right-10 w-64 h-64 rounded-full border-4 border-[#F5CA3D] opacity-20"></div>
        <div className="shape-2 absolute top-40 left-20 w-32 h-32 rounded-full bg-[#D64433] opacity-10"></div>
        <div className="shape-3 absolute bottom-32 right-1/4 w-48 h-48 border-[3px] border-[#F5EEDC] opacity-10"></div>
        <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-[#F5CA3D] opacity-5" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        <div className="shape-4 absolute bottom-20 left-1/4 w-24 h-24 border-2 border-[#D64433] opacity-15"></div>
        <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-[#F5CA3D]/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-tr from-[#D64433]/10 to-transparent blur-3xl"></div>
      </div>

      <div className="max-w-[1580px] mx-auto relative z-10">
        <div className="relative text-center max-w-4xl mx-auto pt-2 pb-6">
          <div className="inline-flex items-center gap-2 bg-[#F5CA3D] text-[#141414] px-3 py-1 border-2 border-[#141414] font-[Special_Elite] text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0_#141414] mb-4 transform -rotate-1">
            <Flame className="w-3.5 h-3.5 text-[#D64433]" />
            <span>SMASH & RENYAH KHAS TOKYO STREET</span>
          </div>
          <h1 className="hero-title font-[Archivo_Black] text-5xl sm:text-7xl md:text-8xl tracking-tight leading-none text-[#F5EEDC]">
            RENYAH. MEMBARA.<br/><span className="text-[#F5CA3D]">MELEDAK.</span>
          </h1>
          <p className="hero-title font-[Special_Elite] text-xs sm:text-sm md:text-base text-white max-w-2xl mx-auto mt-4 leading-relaxed">
            Patty daging sapi pilihan yang dipanggang panas di atas wajan rata, ayam Kentaki goreng bertekanan dengan 12 bumbu rahasia, dan roti sourdough panggang yang dilumuri saus racikan spesial.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a className="cta-button bubble-btn bg-[#D64433] text-white border-[3px] border-[#141414] rounded-full px-8 py-3 text-sm md:text-base font-[Special_Elite] font-bold shadow-[4px_4px_0_#141414] hover:bg-[#F5CA3D] hover:text-[#141414] transition-all flex items-center gap-2" href="#quick-bag">
              <Zap className="w-4 h-4" />
              <span>PESAN PAKET EXPRESS</span>
            </a>
            <a className="cta-button bubble-btn bg-[#F5EEDC] text-[#141414] border-[3px] border-[#141414] rounded-full px-6 py-3 text-sm md:text-base font-[Special_Elite] font-bold shadow-[4px_4px_0_#141414] hover:bg-white transition-all flex items-center gap-2" href="#sauce-lab">
              <FlaskConical className="w-4 h-4 text-[#D64433]" />
              <span>JELAJAHI 42 VARIAN SAUS</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-6">
          <div className="lg:col-span-8 bg-[#F5EEDC] text-[#141414] border-[3px] border-[#141414] shadow-[8px_8px_0_#141414] p-6 md:p-8 relative overflow-hidden hover:shadow-[10px_10px_0_#141414] transition-all duration-300">
            <div className="absolute top-4 right-4 bg-[#D64433] text-white font-[Special_Elite] text-xs font-bold px-3 py-1 border-2 border-[#141414] shadow-[2px_2px_0_#141414] transform rotate-2 z-10">
              MENU TERLARIS #01
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="relative aspect-[4/3] bg-[#141414] border-[3px] border-[#141414] overflow-hidden shadow-[4px_4px_0_#141414]">
                <img 
                  alt="WJYA Monster Double Smash Burger" 
                  className="w-full h-full object-cover filter contrast-125 hover:scale-105 transition-transform duration-500" 
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80" 
                />
                <div className="absolute bottom-2 left-2 bg-[#F5CA3D] text-[#141414] font-[Special_Elite] text-[10px] font-bold px-2 py-0.5 border border-[#141414]">
                  DAGING PILIHAN · PINGGIRAN CRUNCHY CRISPY
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-b-2 border-neutral-300 pb-3">
                  <span className="font-[Special_Elite] text-xs font-bold text-[#D64433] uppercase tracking-wider block">PAKET SPESIAL PANGGANG</span>
                  <h2 className="font-[Archivo_Black] text-2xl sm:text-3xl tracking-tight leading-tight mt-1">WJYA MONSTER DOUBLE SMASH</h2>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-[Archivo_Black] text-2xl text-[#D64433]">Rp 45.000</span>
                    <span className="font-[Special_Elite] text-xs text-neutral-500 line-through">Rp 58.000</span>
                    <span className="bg-[#F5CA3D] px-1.5 py-0.5 text-[10px] font-[Special_Elite] font-bold border border-[#141414]">HEMAT 22%</span>
                  </div>
                </div>
                <p className="font-[Special_Elite] text-xs text-neutral-700 leading-relaxed">
                  Dua patty daging sapi panggang ganda dengan kerak terkaramelisasi, keju cheddar asap meleleh, irisan jalapeño acar renyah, dan glaze burger rahasia Tokyo di atas roti brioche lembut.
                </p>
                <div>
                  <div className="text-[11px] font-[Special_Elite] font-bold text-neutral-800 mb-1.5 uppercase">Kustomisasi Paket Cepat:</div>
                  <div className="flex flex-wrap gap-2 text-xs font-[Special_Elite] font-bold">
                    <span className="bg-white border-2 border-[#141414] px-2.5 py-1 rounded shadow-[2px_2px_0_#141414] cursor-pointer hover:bg-[#F5CA3D] transition-colors">+ Waffle Fries (Rp 12rb)</span>
                    <span className="bg-white border-2 border-[#141414] px-2.5 py-1 rounded shadow-[2px_2px_0_#141414] cursor-pointer hover:bg-[#F5CA3D] transition-colors">+ Dip Sambal Geprek (Rp 4rb)</span>
                    <span className="bg-white border-2 border-[#141414] px-2.5 py-1 rounded shadow-[2px_2px_0_#141414] cursor-pointer hover:bg-[#F5CA3D] transition-colors">+ Es Float Cold (Rp 15rb)</span>
                  </div>
                </div>
                <button className="w-full bubble-btn bg-[#F5CA3D] border-2 border-[#141414] py-2.5 text-xs font-[Special_Elite] font-bold tracking-wider uppercase shadow-[2px_2px_0_#141414] hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer">
                  <ShoppingCart className="w-4 h-4 text-[#141414]" />
                  <span>TAMBAHKAN MONSTER SMASH KE NAMPAN</span>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#F5EEDC] text-[#141414] border-[3px] border-[#141414] shadow-[8px_8px_0_#141414] p-5 relative hover:shadow-[10px_10px_0_#141414] transition-all duration-300" id="quick-bag">
            <div className="flex items-center justify-between border-b-2 border-dashed border-neutral-400 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="font-[Archivo_Black] text-lg tracking-tight">NAMPAN PESANAN ANDA</span>
                <span className="bg-[#D64433] text-white text-[10px] font-[Special_Elite] font-bold px-2 py-0.5 rounded-full">3 ITEM</span>
              </div>
              <span className="font-[Special_Elite] text-xs font-bold text-neutral-600">#TB-089</span>
            </div>
            <div className="space-y-3 font-[Special_Elite] text-xs">
              <div className="flex justify-between items-start border-b border-neutral-300 pb-2">
                <div>
                  <div className="font-bold font-[Archivo_Black] text-sm text-[#141414]">1x Double Smash Burger</div>
                  <div className="text-[11px] text-neutral-600">Cheddar asap · Brioche · Acar</div>
                </div>
                <span className="font-bold text-[#D64433] whitespace-nowrap">Rp 45.000</span>
              </div>
              <div className="flex justify-between items-start border-b border-neutral-300 pb-2">
                <div>
                  <div className="font-bold font-[Archivo_Black] text-sm text-[#141414]">1x Ayam Kentaki 2 Pcs</div>
                  <div className="text-[11px] text-neutral-600">Olesan pedas 12 bumbu · Saus bawang</div>
                </div>
                <span className="font-bold text-[#D64433] whitespace-nowrap">Rp 32.000</span>
              </div>
              <div className="flex justify-between items-start border-b border-neutral-300 pb-2">
                <div>
                  <div className="font-bold font-[Archivo_Black] text-sm text-[#141414]">1x Botol Dip Sambal Geprek</div>
                  <div className="text-[11px] text-neutral-600">Tingkat Pedas 5/5 · Racikan Rumah</div>
                </div>
                <span className="font-bold text-[#D64433] whitespace-nowrap">Rp 4.000</span>
              </div>
            </div>
            <div className="mt-4 pt-2 border-t-2 border-dashed border-neutral-400 font-[Special_Elite] text-xs space-y-1">
              <div className="flex justify-between text-neutral-600">
                <span>Subtotal</span>
                <span>Rp 81.000</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Kemasan & Paket Kondimen</span>
                <span>Rp 3.000</span>
              </div>
              <div className="flex justify-between font-[Archivo_Black] text-base text-[#141414] pt-1 border-t border-neutral-300">
                <span>TOTAL BAYAR</span>
                <span className="text-[#D64433]">Rp 84.000</span>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <button className="w-full bubble-btn bg-[#D64433] text-white border-2 border-[#141414] py-2.5 text-xs font-[Special_Elite] font-bold tracking-wider uppercase shadow-[2px_2px_0_#141414] hover:bg-[#F5CA3D] hover:text-[#141414] transition-all flex items-center justify-center gap-2 cursor-pointer">
                <Zap className="w-4 h-4" />
                <span>LANJUT KE PEMBAYARAN CEPAT</span>
              </button>
              <div className="text-[10px] text-center font-[Special_Elite] text-neutral-600 tracking-wider flex items-center justify-center gap-1">
                <Check className="w-3.5 h-3.5 text-green-700" />
                <span>Tiket pesanan dicetak langsung ke dapur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
