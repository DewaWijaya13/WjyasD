import React from 'react';

export const KitchenBoard = () => {
  return (
    <section className="bg-[#F5EEDC] border-b-[3px] border-[#141414] py-10 px-4 lg:px-10 halftone-dark" id="kitchen-board">
      <div className="max-w-[1580px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6 border-b-[3px] border-[#141414] pb-4">
          <div>
            <div className="inline-block bg-[#D64433] text-white font-[Special_Elite] text-xs font-bold px-2 py-0.5 border border-[#141414] shadow-[2px_2px_0_#141414] mb-1">
              TELEMETRI DAPUR LIVE · PANEL TAMPILAN
            </div>
            <h2 className="font-[Archivo_Black] text-3xl sm:text-5xl tracking-tight text-[#141414] leading-none">
              PAPAN PROGRESI PESANAN.
            </h2>
          </div>
          <div className="flex items-center gap-3 font-[Special_Elite] text-xs font-bold">
            <span className="bg-white border-2 border-[#141414] px-3 py-1 shadow-[2px_2px_0_#141414]">TIKET AKTIF: 14</span>
            <span className="bg-[#F5CA3D] border-2 border-[#141414] px-3 py-1 shadow-[2px_2px_0_#141414]">SIAP DIAMBIL: 6</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Ticket Card 1 */}
          <div className="bg-white border-[3px] border-[#141414] p-4 shadow-[5px_5px_0_#141414] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center text-xs font-[Special_Elite] font-bold border-b border-neutral-300 pb-2 mb-2">
                <span className="text-[#D64433]">TIKET #289 · MAKAN DI TEMPAT</span>
                <span className="bg-[#F5EEDC] border border-[#141414] px-1.5 py-0.5">STASIUN A (PANGGANG)</span>
              </div>
              <h3 className="font-[Archivo_Black] text-lg text-[#141414]">PAKET BURGER MONSTER WJYA</h3>
              <p className="font-[Special_Elite] text-xs text-neutral-600 mt-0.5">Dengan Waffle Fries & Coca-Cola Besar</p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-200">
              <div className="flex justify-between text-xs font-[Special_Elite] font-bold text-neutral-800 mb-1">
                <span>75% · PANGGANG & SEAR</span>
                <span className="text-[#D64433]">EST. 2 MENIT</span>
              </div>
              <div className="w-full h-3 border-2 border-[#141414] bg-[#F5EEDC] p-[1px]">
                <div className="h-full bg-[#F5CA3D] border border-[#141414]" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>

          {/* Ticket Card 2 */}
          <div className="bg-white border-[3px] border-[#141414] p-4 shadow-[5px_5px_0_#141414] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center text-xs font-[Special_Elite] font-bold border-b border-neutral-300 pb-2 mb-2">
                <span className="text-[#D64433]">TIKET #290 · KIRIM CEPAT</span>
                <span className="bg-[#F5CA3D] border border-[#141414] px-1.5 py-0.5">STASIUN B (GORENG TEKANAN)</span>
              </div>
              <h3 className="font-[Archivo_Black] text-lg text-[#141414]">BUCKET AYAM KENTAKI 5 PCS PEDAS</h3>
              <p className="font-[Special_Elite] text-xs text-neutral-600 mt-0.5">Dengan Sambal Geprek & 2 Nasi Garlic</p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-200">
              <div className="flex justify-between text-xs font-[Special_Elite] font-bold text-neutral-800 mb-1">
                <span>45% · PENCELUPAN KRISPI</span>
                <span className="text-[#D64433]">EST. 6 MENIT</span>
              </div>
              <div className="w-full h-3 border-2 border-[#141414] bg-[#F5EEDC] p-[1px]">
                <div className="h-full bg-[#F5CA3D] border border-[#141414]" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>

          {/* Ticket Card 3 */}
          <div className="bg-white border-[3px] border-[#141414] p-4 shadow-[5px_5px_0_#141414] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center text-xs font-[Special_Elite] font-bold border-b border-neutral-300 pb-2 mb-2">
                <span className="text-[#D64433]">TIKET #291 · BAWA PULANG</span>
                <span className="bg-[#F5EEDC] border border-[#141414] px-1.5 py-0.5">STASIUN C (OVEN & KEMAS)</span>
              </div>
              <h3 className="font-[Archivo_Black] text-lg text-[#141414]">PIZZA SUPREME KEJU & 2 ES FLOAT</h3>
              <p className="font-[Special_Elite] text-xs text-neutral-600 mt-0.5">Sourdough tipis, quadruple mozzarella</p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-200">
              <div className="flex justify-between text-xs font-[Special_Elite] font-bold text-neutral-800 mb-1">
                <span>92% · CEK KUALITAS & KEMAS</span>
                <span className="text-[#D64433]">EST. 1 MENIT</span>
              </div>
              <div className="w-full h-3 border-2 border-[#141414] bg-[#F5EEDC] p-[1px]">
                <div className="h-full bg-[#F5CA3D] border border-[#141414]" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};