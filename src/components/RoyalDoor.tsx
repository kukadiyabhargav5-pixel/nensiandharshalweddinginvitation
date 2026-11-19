import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RoyalDoorProps {
  onOpen: () => void;
  onSkip: () => void;
}

export const RoyalDoor: React.FC<RoyalDoorProps> = ({ onOpen, onSkip }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [hoverSide, setHoverSide] = useState<'left' | 'right' | null>(null);

  const handleDoorClick = () => {
    if (isOpening || isOpen) return;
    setIsOpening(true);

    // Rose & Jasmine petal shower + golden confetti burst
    confetti({
      particleCount: 65,
      spread: 100,
      origin: { y: 0.55 },
      colors: ['#DFB76C', '#C5A46D', '#F4B5C0', '#E89BA8', '#681F35', '#FFFDF9'],
      scalar: 1.25,
    });

    // Start 3D Door Open swing
    setTimeout(() => {
      setIsOpen(true);
    }, 200);

    // Transition to main site
    setTimeout(() => {
      onOpen();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#150D09] overflow-hidden select-none door-perspective-stage">
      
      {/* 1. PALACE INTERIOR ILLUMINATION & GOLDEN LIGHT BURST (reveals when doors swing open) */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#FFFDF9] via-[#FAF4EA] to-[#F3E8D3] transition-all duration-1000 ${
          isOpen ? 'opacity-100 scale-105' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ transition: 'all 2.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        <div className="w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-gold/35 via-blush/45 to-gold-light/25 blur-3xl animate-pulse" />
        <div className="relative z-10 text-center px-4">
          <div className="w-16 h-16 rounded-full border-2 border-gold/60 mx-auto flex items-center justify-center mb-3 bg-ivory-50 shadow-gold-glow">
            <img src="/assets/ganesha.png" alt="Ganeshji" className="w-10 h-10 object-contain" />
          </div>
          <p className="font-gujaratiSerif text-gold-dark text-sm sm:text-base font-semibold tracking-widest mb-1">
            || શ્રી ગણેશાય નમઃ ||
          </p>
          <h2 className="font-gujaratiSerif text-2xl sm:text-4xl font-bold text-maroon drop-shadow-sm mb-1">
            શુભ વિવાહમાં આપનું હાર્દિક સ્વાગત છે
          </h2>
          <p className="font-serif italic text-gold-dark text-sm sm:text-lg">
            Welcome to the Royal Wedding of Dr. Nancy & Harshal
          </p>
        </div>
      </div>

      {/* 2. FLOATING PETAL SHOWER ON OPEN */}
      {isOpening && (
        <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
          {Array.from({ length: 35 }).map((_, i) => (
            <div
              key={i}
              className="falling-petal"
              style={{
                left: `${(i * 3.1) % 100}%`,
                animationDelay: `${i * 0.08}s`,
                animationDuration: `${7 + (i % 4)}s`,
              }}
            >
              <div
                className="w-4 h-5 rounded-full bg-gradient-to-br from-rose-300 via-rose-400 to-pink-500 opacity-85 shadow-sm"
                style={{ transform: `rotate(${i * 40}deg)` }}
              />
            </div>
          ))}
        </div>
      )}

      {/* 3. GRAND IMPERIAL ARCHWAY & PALACE FACADE */}
      <div className="relative w-full max-w-4xl h-[92vh] max-h-[840px] mx-4 rounded-t-[180px] sm:rounded-t-[250px] border-[10px] sm:border-[16px] border-[#3B261C] shadow-2xl overflow-hidden flex flex-col bg-[#1C110B]">
        
        {/* ARCHWAY HEADER & AUSPICIOUS TORAN */}
        <div className="relative h-32 sm:h-42 bg-gradient-to-b from-[#2D1B13] via-[#3E261B] to-[#25150E] border-b-4 border-gold flex flex-col items-center justify-center px-4 z-20">
          
          {/* Hanging Traditional Diyas / Brass Lanterns (Left & Right) */}
          <div className="absolute left-6 sm:left-12 top-0 hanging-lantern flex flex-col items-center">
            <div className="w-0.5 h-12 sm:h-16 bg-gradient-to-b from-gold-dark via-gold to-gold-metallic" />
            <div className="w-7 h-9 sm:w-9 sm:h-11 rounded-full border-2 border-gold bg-gradient-to-b from-[#C5A46D] to-[#8C6C32] shadow-gold-glow flex items-center justify-center relative">
              <div className="w-3 h-4 rounded-full bg-amber-400 flicker-flame" />
            </div>
          </div>

          <div className="absolute right-6 sm:right-12 top-0 hanging-lantern flex flex-col items-center" style={{ animationDelay: '1.2s' }}>
            <div className="w-0.5 h-12 sm:h-16 bg-gradient-to-b from-gold-dark via-gold to-gold-metallic" />
            <div className="w-7 h-9 sm:w-9 sm:h-11 rounded-full border-2 border-gold bg-gradient-to-b from-[#C5A46D] to-[#8C6C32] shadow-gold-glow flex items-center justify-center relative">
              <div className="w-3 h-4 rounded-full bg-amber-400 flicker-flame" />
            </div>
          </div>

          {/* Center Lord Ganesha Emblem */}
          <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full border-2 border-gold flex items-center justify-center mb-1 bg-[#150B06] shadow-gold-glow">
            <img src="/assets/ganesha.png" alt="Ganeshji" className="w-9 h-9 sm:w-10 sm:h-10 object-contain drop-shadow" />
          </div>

          <span className="font-gujaratiSerif text-gold text-xs sm:text-sm font-bold tracking-widest">
            || શ્રી ગણેશાય નમઃ ||
          </span>

          {/* Auspicious Green Mango Leaves Toran Arch Divider */}
          <div className="flex items-center gap-1.5 mt-1 text-gold/90 text-[10px] sm:text-xs tracking-wider">
            <span>🌿</span>
            <span className="font-serif italic text-gold-light">શુભ વિવાહ નિમંત્રણ પત્રિકા</span>
            <span>🌿</span>
          </div>
          <div className="w-48 sm:w-80 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mt-1" />
        </div>

        {/* 4. THE TWO IMPERIAL 3D DOORS */}
        <div className="relative flex-1 flex w-full h-full overflow-hidden">
          
          {/* Center Golden Light Crevice (visible when closed, radiates on hover) */}
          <div className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-2 bg-gradient-to-b from-amber-300 via-gold to-amber-400 blur-[2px] z-10 transition-opacity duration-300 pointer-events-none ${
            hoverSide ? 'opacity-100 shadow-[0_0_15px_#F59E0B]' : 'opacity-70 animate-pulse'
          }`} />

          {/* LEFT DOOR LEAF */}
          <div
            onClick={handleDoorClick}
            onMouseEnter={() => setHoverSide('left')}
            onMouseLeave={() => setHoverSide(null)}
            className={`door-leaf-left relative w-1/2 h-full cursor-pointer bg-gradient-to-r from-[#24150E] via-[#3B2418] to-[#311C13] border-r-2 border-gold/70 shadow-2xl flex flex-col justify-between p-4 sm:p-7 select-none transition-all group ${
              isOpen ? 'open' : ''
            }`}
          >
            {/* Antique Teakwood Frame & Gold Inlay Borders */}
            <div className="absolute inset-2 border-2 border-dashed border-gold/40 rounded-t-[75px] pointer-events-none group-hover:border-gold/70 transition-colors" />
            <div className="absolute inset-5 border border-gold/30 rounded-t-[65px] pointer-events-none" />

            {/* Brass Bosses (Gullas / Studs) along left edge */}
            <div className="absolute left-3 top-8 bottom-8 flex flex-col justify-between py-4 pointer-events-none">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-3.5 h-3.5 rounded-full border border-gold-dark bg-gradient-to-br from-gold-light via-gold to-gold-dark shadow-sm group-hover:brightness-110 transition-all" />
              ))}
            </div>

            {/* Upper Jali Carved Arch Panel */}
            <div className="h-44 sm:h-52 border-2 border-gold/40 rounded-t-[60px] bg-[#1A0E08]/85 p-3 flex flex-col items-center justify-center text-center shadow-inner group-hover:border-gold/70 transition-colors">
              <div className="w-12 h-12 rounded-full border border-gold/60 flex items-center justify-center mb-1 bg-[#2C180E] group-hover:scale-105 transition-transform">
                <span className="text-gold text-lg">⚜️</span>
              </div>
              <span className="font-serif italic text-gold-light text-xs tracking-wider">
                Dr. Nancy
              </span>
              <span className="font-gujaratiSerif text-gold-light text-base font-bold mt-0.5">
                ચિ. ડો. નેન્સી
              </span>
              <span className="text-[10px] text-sage font-medium font-gujaratiSans mt-1">
                (કુકડીયા પરિવાર)
              </span>
            </div>

            {/* 3D Golden Brass Kundi (Knocker) Left */}
            <div className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 flex flex-col items-center">
              <div
                className={`w-12 h-28 sm:w-14 sm:h-32 rounded-full border-2 border-gold-light bg-gradient-to-b from-[#FFF0D4] via-[#DFB76C] to-[#8C6C32] shadow-gold-glow flex items-center justify-center transition-all duration-300 ${
                  hoverSide === 'left' ? 'animate-kundi-hover scale-110 shadow-[0_0_30px_#DFB76C]' : 'scale-100'
                }`}
              >
                {/* Ring Knocker loop */}
                <div className="w-7 h-16 sm:w-8 sm:h-18 rounded-full border-2 border-gold-dark/80 bg-[#422B14] shadow-inner" />
              </div>
              <span className="text-[10px] font-gujaratiSans text-gold/90 mt-2 bg-[#1C110B]/90 px-2 py-0.5 rounded-full border border-gold/40 shadow-xs">
                હસ્ત મિલાપ
              </span>
            </div>

            {/* Bottom Ornate Lotus Medallion */}
            <div className="h-32 sm:h-40 border border-gold/30 rounded-b-xl bg-[#1A0E08]/85 p-2 flex flex-col items-center justify-center text-center shadow-inner">
              <div className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center mb-1 bg-[#2C180E]">
                <span className="text-gold text-sm">🦚</span>
              </div>
              <span className="font-gujaratiSerif text-xs text-gold/80 font-semibold">
                કુકડીયા પરિવાર
              </span>
              <span className="font-serif text-[10px] text-gold/60">
                Surat, Gujarat
              </span>
            </div>
          </div>

          {/* RIGHT DOOR LEAF */}
          <div
            onClick={handleDoorClick}
            onMouseEnter={() => setHoverSide('right')}
            onMouseLeave={() => setHoverSide(null)}
            className={`door-leaf-right relative w-1/2 h-full cursor-pointer bg-gradient-to-l from-[#24150E] via-[#3B2418] to-[#311C13] border-l-2 border-gold/70 shadow-2xl flex flex-col justify-between p-4 sm:p-7 select-none transition-all group ${
              isOpen ? 'open' : ''
            }`}
          >
            {/* Antique Teakwood Frame & Gold Inlay Borders */}
            <div className="absolute inset-2 border-2 border-dashed border-gold/40 rounded-t-[75px] pointer-events-none group-hover:border-gold/70 transition-colors" />
            <div className="absolute inset-5 border border-gold/30 rounded-t-[65px] pointer-events-none" />

            {/* Brass Bosses along right edge */}
            <div className="absolute right-3 top-8 bottom-8 flex flex-col justify-between py-4 pointer-events-none">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-3.5 h-3.5 rounded-full border border-gold-dark bg-gradient-to-br from-gold-light via-gold to-gold-dark shadow-sm group-hover:brightness-110 transition-all" />
              ))}
            </div>

            {/* Upper Jali Carved Arch Panel */}
            <div className="h-44 sm:h-52 border-2 border-gold/40 rounded-t-[60px] bg-[#1A0E08]/85 p-3 flex flex-col items-center justify-center text-center shadow-inner group-hover:border-gold/70 transition-colors">
              <div className="w-12 h-12 rounded-full border border-gold/60 flex items-center justify-center mb-1 bg-[#2C180E] group-hover:scale-105 transition-transform">
                <span className="text-gold text-lg">⚜️</span>
              </div>
              <span className="font-serif italic text-gold-light text-xs tracking-wider">
                Harshal
              </span>
              <span className="font-gujaratiSerif text-gold-light text-base font-bold mt-0.5">
                ચિ. હર્ષલ
              </span>
              <span className="text-[10px] text-sage font-medium font-gujaratiSans mt-1">
                (ડાંખરા પરિવાર)
              </span>
            </div>

            {/* 3D Golden Brass Kundi (Knocker) Right */}
            <div className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 flex flex-col items-center">
              <div
                className={`w-12 h-28 sm:w-14 sm:h-32 rounded-full border-2 border-gold-light bg-gradient-to-b from-[#FFF0D4] via-[#DFB76C] to-[#8C6C32] shadow-gold-glow flex items-center justify-center transition-all duration-300 ${
                  hoverSide === 'right' ? 'animate-kundi-hover scale-110 shadow-[0_0_30px_#DFB76C]' : 'scale-100'
                }`}
              >
                <div className="w-7 h-16 sm:w-8 sm:h-18 rounded-full border-2 border-gold-dark/80 bg-[#422B14] shadow-inner" />
              </div>
              <span className="text-[10px] font-gujaratiSans text-gold/90 mt-2 bg-[#1C110B]/90 px-2 py-0.5 rounded-full border border-gold/40 shadow-xs">
                મંગલ પ્રસંગ
              </span>
            </div>

            {/* Bottom Ornate Lotus Medallion */}
            <div className="h-32 sm:h-40 border border-gold/30 rounded-b-xl bg-[#1A0E08]/85 p-2 flex flex-col items-center justify-center text-center shadow-inner">
              <div className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center mb-1 bg-[#2C180E]">
                <span className="text-gold text-sm">🦚</span>
              </div>
              <span className="font-serif text-xs text-gold/80 font-bold">
                14 DECEMBER 2026
              </span>
              <span className="font-gujaratiSerif text-[10px] text-gold/60">
                સોમવાર
              </span>
            </div>
          </div>
        </div>

        {/* 5. CENTER FLOATING IMPERIAL ROYAL SEAL & CALL TO ACTION */}
        {!isOpen && (
          <div
            onClick={handleDoorClick}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer flex flex-col items-center"
          >
            <div
              className={`relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-gold bg-gradient-to-br from-[#4A1425] via-[#681F35] to-[#2B0A14] shadow-royal-lg flex flex-col items-center justify-center text-center p-3 transition-transform duration-300 ${
                isOpening ? 'scale-115' : 'hover:scale-108 animate-pulse-subtle'
              }`}
            >
              <div className="absolute inset-1.5 rounded-full border border-dashed border-gold/50 pointer-events-none" />

              <Sparkles className="w-5 h-5 text-gold-light mb-1 animate-spin" style={{ animationDuration: '7s' }} />
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-light font-serif font-semibold">
                You're Invited
              </span>
              <h2 className="font-gujaratiSerif text-base sm:text-lg font-bold text-[#FFFDF9] my-0.5 leading-tight">
                ડો. નેન્સી & હર્ષલ
              </h2>
              <span className="text-[10px] text-gold/90 font-serif font-medium">
                14 December 2026
              </span>
            </div>

            {/* Tap to Open Royal Pill */}
            <div className="mt-4 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#2B1B13] via-[#3F281C] to-[#2B1B13] border-2 border-gold text-gold-light text-xs sm:text-sm font-gujaratiSans font-bold shadow-gold-glow flex items-center gap-2 group hover:scale-105 transition-all">
              <span className="text-base group-hover:scale-125 transition-transform">🚪</span>
              <span>દરવાજો ખોલવા માટે ક્લિક કરો (Tap to Open)</span>
            </div>
          </div>
        )}
      </div>

      {/* Skip Button Top Right */}
      <button
        onClick={onSkip}
        className="absolute top-5 right-5 z-40 bg-black/60 hover:bg-black/85 text-gold-light border border-gold/40 text-xs px-4 py-2 rounded-full backdrop-blur-md transition-all cursor-pointer shadow-md hover:scale-105"
      >
        Skip Intro (સીધા આમંત્રણ પર જાઓ) ➔
      </button>
    </div>
  );
};
