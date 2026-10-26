import React from 'react';
import { Zap } from 'lucide-react';
import logoImg from '../assets/logo_wjyasD.png';

export const Footer = () => {
  return (
    <footer className="bg-[#F5CA3D] border-t-[3px] border-[#141414] halftone-dark text-[#141414] pt-14 pb-6 px-4 lg:px-10" id="locations">
      <div className="max-w-[1580px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logoImg} 
                alt="WJYA'S D Logo" 
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>
            <p className="font-[Special_Elite] text-xs md:text-sm text-neutral-900 max-w-md leading-relaxed">
              Dibuat segar, dipanggang sempurna, dan diantar dengan cita rasa komik yang meledak. Presisi Tokyo-street bertemu dengan hasrat makanan cepat saji Amerika.
            </p>
            <div className="pt-2">
              <a className="bubble-btn inline-block bg-[#F5EEDC] border-[3px] border-[#141414] rounded-full px-7 py-3 text-sm md:text-base font-[Special_Elite] font-bold shadow-[5px_5px_0_#141414] hover:bg-white transition-all flex items-center gap-2 w-fit cursor-pointer" href="#">
                <Zap className="w-4 h-4" />
                <span>PESAN ONLINE SEKARANG · KIRIM CEPAT</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-[Archivo_Black] text-sm tracking-wider uppercase mb-4">MENU</h4>
            <ul className="space-y-2.5 font-[Special_Elite] text-xs font-bold text-neutral-800">
              <li><a className="hover:text-[#D64433] underline-offset-2 hover:underline" href="#flavors">Burger Panggang</a></li>
              <li><a className="hover:text-[#D64433] underline-offset-2 hover:underline" href="#flavors">Ayam Kentaki</a></li>
              <li><a className="hover:text-[#D64433] underline-offset-2 hover:underline" href="#flavors">Kentang Goreng</a></li>
              <li><a className="hover:text-[#D64433] underline-offset-2 hover:underline" href="#flavors">Pizza Oven</a></li>
              <li><a className="hover:text-[#D64433] underline-offset-2 hover:underline" href="#flavors">Soda Dingin & Float</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-[Archivo_Black] text-sm tracking-wider uppercase mb-4">PENGIRIMAN CEPAT</h4>
            <ul className="space-y-2.5 font-[Special_Elite] text-xs font-bold text-neutral-800">
              <li><a className="hover:text-[#D64433] underline-offset-2 hover:underline" href="#kitchen-board">Lacak Pesanan</a></li>
              <li><a className="hover:text-[#D64433] underline-offset-2 hover:underline" href="#locations">Lokasi Toko</a></li>
              <li><a className="hover:text-[#D64433] underline-offset-2 hover:underline" href="#drop-deals">Katering & Kotak Pesta</a></li>
              <li><a className="hover:text-[#D64433] underline-offset-2 hover:underline" href="#menu">Nutrisi & Sertifikasi Halal</a></li>
              <li><a className="hover:text-[#D64433] underline-offset-2 hover:underline" href="#locations">Hubungi Dapur</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t-[2px] border-[#141414] pt-5 flex flex-wrap items-center justify-between text-xs font-[Special_Elite] tracking-[0.2em] text-neutral-900 gap-2">
          <div>
            © 2026 WJYA'S D FAST FOOD CORP. SELURUH HAK DILINDUNGI.
          </div>
          <div>
            100% RASA ASLI, SELALU RENYAH.
          </div>
        </div>
      </div>
    </footer>
  );
};
