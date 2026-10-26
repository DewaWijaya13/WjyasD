import React, { useEffect, useRef } from 'react';
import { Search, ShoppingBag } from 'lucide-react';
import gsap from 'gsap';
import logoImg from '../assets/logo_wjyasD.png';

export const Navbar = ({ cartCount = 3, totalPrice = 'Rp 84.000' }) => {
  const navLinksRef = useRef([]);

  useEffect(() => {
    try {
      // Smooth underline animation on hover
      navLinksRef.current.forEach((link) => {
        if (!link) return;
        
        link.addEventListener('mouseenter', () => {
          gsap.to(link, {
            y: -2,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        link.addEventListener('mouseleave', () => {
          gsap.to(link, {
            y: 0,
            duration: 0.3,
            ease: 'power2.in'
          });
        });
      });
    } catch (error) {
      console.error('Navbar animation error:', error);
    }
  }, []);

  return (
    <header className="bg-[#F5EEDC] border-b-[3px] border-[#141414] sticky top-0 z-50 halftone-dark py-2 px-3 lg:px-8">
      <div className="max-w-[1580px] mx-auto flex items-center justify-between gap-2 lg:gap-4">
        {/* Brand Logo & Tagline */}
        <div className="flex items-center gap-3 shrink-0">
          <a aria-label="WJYA'S D Beranda" className="flex items-center gap-2 group" href="#">
            <img 
              src={logoImg} 
              alt="WJYA'S D Logo" 
              className="h-9 sm:h-11 w-auto object-contain hover:scale-105 transition-transform"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </a>
          <div className="bg-[#F5CA3D] border-2 border-[#141414] px-2.5 py-0.5 text-[10px] xl:text-[11px] font-[Special_Elite] font-bold uppercase tracking-wider hidden xl:inline-block shadow-[2px_2px_0_#141414] whitespace-nowrap">
            TOKYO-STREET SMASH & CRISP
          </div>
        </div>

        {/* Navigation Links */}
        <nav aria-label="Menu Utama" className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-[11px] xl:text-xs font-[Special_Elite] font-bold tracking-wider xl:tracking-[0.18em] text-[#141414] whitespace-nowrap">
          <a 
            ref={(el) => navLinksRef.current[0] = el}
            className="hover:text-[#D64433] transition-colors cursor-pointer" 
            href="#menu"
          >
            MENU SPESIAL
          </a>
          <a 
            ref={(el) => navLinksRef.current[1] = el}
            className="hover:text-[#D64433] transition-colors cursor-pointer" 
            href="#flavors"
          >
            KATEGORI
          </a>
          <a 
            ref={(el) => navLinksRef.current[2] = el}
            className="hover:text-[#D64433] transition-colors cursor-pointer" 
            href="#sauce-lab"
          >
            LAB SAUS
          </a>
          <a 
            ref={(el) => navLinksRef.current[3] = el}
            className="hover:text-[#D64433] transition-colors cursor-pointer" 
            href="#drop-deals"
          >
            STRIP PROMO
          </a>
          <a 
            ref={(el) => navLinksRef.current[4] = el}
            className="hover:text-[#D64433] transition-colors cursor-pointer" 
            href="#kitchen-board"
          >
            PAPAN DAPUR
          </a>
        </nav>

        {/* Right Action Bar */}
        <div className="flex items-center gap-2 xl:gap-3 shrink-0">
          <div className="relative hidden 2xl:block">
            <input 
              className="bg-[#F5EEDC] border-[2.5px] border-[#141414] text-xs font-[Special_Elite] placeholder:text-neutral-500 py-1.5 pl-8 pr-3 w-40 xl:w-48 focus:outline-none focus:ring-0 focus:border-[#141414] shadow-[2px_2px_0_#141414]" 
              placeholder="Cari menu & saus..." 
              type="search" 
            />
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-600" />
          </div>

          <a 
            href="#quick-bag" 
            className="bg-[#F5CA3D] border-[2.5px] border-[#141414] rounded-full px-3 py-1.5 text-xs font-[Special_Elite] font-bold tracking-wider shadow-[2px_2px_0_#141414] cursor-pointer hover:bg-white transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <div className="relative flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-[#141414]" />
              <span className="absolute -top-2 -right-2.5 bg-[#D64433] text-white text-[9px] w-4 h-4 rounded-full font-[Archivo_Black] flex items-center justify-center border border-[#141414]">
                {cartCount}
              </span>
            </div>
            <span className="hidden sm:inline-block font-bold">
              NAMPAN: <span className="text-[#D64433] font-bold">{totalPrice}</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};
