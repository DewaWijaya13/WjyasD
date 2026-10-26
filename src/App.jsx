import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { KitchenBoard } from './components/KitchenBoard';
import { MenuBento } from './components/MenuBento';
import { SauceLab } from './components/SauceLab';
import { ReceiptDrops } from './components/ReceiptDrops';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize Lenis only once
    const initLenis = async () => {
      const Lenis = (await import('lenis')).default;
      
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
      });

      // Simple raf loop
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      
      requestAnimationFrame(raf);
      
      return () => {
        lenis.destroy();
      };
    };

    initLenis();
  }, []);

  return (
    <div className="min-h-screen bg-manga-ink">
      <Navbar cartCount={3} totalPrice="Rp 84.000" />
      <main>
        <Hero />
        <KitchenBoard />
        <MenuBento />
        <SauceLab />
        <ReceiptDrops />
      </main>
      <Footer />
    </div>
  );
}

export default App;
