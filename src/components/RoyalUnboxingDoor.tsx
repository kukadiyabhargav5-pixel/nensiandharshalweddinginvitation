import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RoyalUnboxingDoorProps {
  onOpen: () => void;
  onSkip: () => void;
}

export const RoyalUnboxingDoor: React.FC<RoyalUnboxingDoorProps> = ({ onOpen, onSkip }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleUnbox = () => {
    if (isOpening || isOpen) return;
    setIsOpening(true);

    // Multi-color rose petal & golden confetti celebration
    confetti({
      particleCount: 70,
      spread: 100,
      origin: { y: 0.55 },
      colors: ['#DFB76C', '#C5A46D', '#F4B5C0', '#E89BA8', '#681F35', '#FFFDF9'],
      scalar: 1.3,
    });

    // Animate door unboxing
    setTimeout(() => {
      setIsOpen(true);
    }, 250);

    // Complete smooth transition into invitation
    setTimeout(() => {
      onOpen();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#140C08] overflow-hidden select-none door-perspective-stage">
      
      {/* 1. SOFT NATURAL LIGHT RAYS & GLOW (revealed when unboxed) */}
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
            લગ્ન પત્રિકા અનબૉક્સ થઈ રહી છે...
          </h2>
          <p className="font-serif italic text-gold-dark text-sm sm:text-lg">
            Unboxing the Royal Wedding Letter of Dr. Nancy & Harshal
          </p>
        </div>
      </div>

      {/* 2. FLOATING PETAL SHOWER ON OPEN */}
      {isOpening && (
        <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="falling-petal"
              style={{
                left: `${(i * 2.8) % 100}%`,
                animationDelay: `${i * 0.06}s`,
                animationDuration: `${7 + (i % 4)}s`,
              }}
            >
              <div
                className="w-4 h-5 rounded-full bg-gradient-to-br from-rose-300 via-rose-400 to-pink-500 opacity-90 shadow-sm"
                style={{ transform: `rotate(${i * 40}deg)` }}
              />
            </div>
          ))}
        </div>
      )}

      {/* 3. REALISTIC LUXURY HOME / HAVELI DOUBLE DOOR WITH LETTER UNBOXING ENVELOPE */}
      <div className="relative w-full max-w-3xl h-[88vh] max-h-[780px] mx-4 rounded-3xl border-[8px] sm:border-[12px] border-[#341F14] shadow-2xl overflow-hidden flex flex-col bg-[#1C110A]">
        
        {/* DOOR TOP ARCH / TORAN (Aashopalav mango leaves & marigold garlands) */}
        <div className="relative h-28 sm:h-36 bg-gradient-to-b from-[#2A180F] via-[#382215] to-[#22130B] border-b-4 border-gold flex flex-col items-center justify-center px-4 z-20 shadow-md">
          
          {/* Hanging Traditional Diyas / Brass Lanterns */}
          <div className="absolute left-6 sm:left-10 top-0 hanging-lantern flex flex-col items-center">
            <div className="w-0.5 h-10 sm:h-14 bg-gradient-to-b from-gold-dark to-gold" />
            <div className="w-6 h-8 sm:w-8 sm:h-10 rounded-full border-2 border-gold bg-gradient-to-b from-[#C5A46D] to-[#8C6C32] shadow-gold-glow flex items-center justify-center relative">
              <div className="w-2.5 h-3.5 rounded-full bg-amber-400 flicker-flame" />
            </div>
          </div>

          <div className="absolute right-6 sm:right-10 top-0 hanging-lantern flex flex-col items-center" style={{ animationDelay: '1.2s' }}>
            <div className="w-0.5 h-10 sm:h-14 bg-gradient-to-b from-gold-dark to-gold" />
            <div className="w-6 h-8 sm:w-8 sm:h-10 rounded-full border-2 border-gold bg-gradient-to-b from-[#C5A46D] to-[#8C6C32] shadow-gold-glow flex items-center justify-center relative">
              <div className="w-2.5 h-3.5 rounded-full bg-amber-400 flicker-flame" />
            </div>
          </div>

          {/* Ganesha Top Emblem */}
          <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full border-2 border-gold flex items-center justify-center mb-1 bg-[#140B06] shadow-gold-glow">
            <img src="/assets/ganesha.png" alt="Ganeshji" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
          </div>

          <span className="font-gujaratiSerif text-gold text-xs sm:text-sm font-bold tracking-widest">
            || શ્રી ગણેશાય નમઃ ||
          </span>

          {/* Toran Garland decoration */}
          <div className="flex items-center gap-1 mt-0.5 text-gold/90 text-[11px] font-serif italic">
            <span>🌿</span>
            <span>શુભ વિવાહ નિમંત્રણ પત્રિકા</span>
            <span>🌿</span>
          </div>
          <div className="w-48 sm:w-64 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mt-1" />
        </div>

        {/* 4. TWO REALISTIC WOODEN HOME DOORS WITH 3D UNBOXING OPENING */}
        <div
          onClick={handleUnbox}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex-1 flex w-full h-full cursor-pointer overflow-hidden group"
        >
          {/* Subtle Golden Glow Seam in the Center */}
          <div className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1.5 bg-gradient-to-b from-amber-300 via-gold to-amber-400 blur-[2px] z-10 transition-opacity duration-300 pointer-events-none ${
            isHovered ? 'opacity-100 shadow-[0_0_15px_#F59E0B]' : 'opacity-70 animate-pulse'
          }`} />

          {/* LEFT DOOR PANEL (Realistic Wood Grain & Brass Trim) */}
          <div
            className={`door-leaf-left relative w-1/2 h-full bg-gradient-to-r from-[#24150E] via-[#362116] to-[#2B1910] border-r-2 border-gold/70 shadow-2xl flex flex-col justify-between p-4 sm:p-6 select-none transition-all ${
              isOpen ? 'open' : ''
            }`}
          >
            {/* Real Wood Inlay Panels */}
            <div className="absolute inset-2.5 border-2 border-[#4E3020] rounded-xl pointer-events-none group-hover:border-gold/50 transition-colors" />
            <div className="absolute inset-4 border border-gold/25 rounded-lg pointer-events-none" />

            {/* Brass Bosses (Studs) along edge */}
            <div className="absolute left-3 top-6 bottom-6 flex flex-col justify-between py-2 pointer-events-none">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="w-3 h-3 rounded-full border border-gold-dark bg-gradient-to-br from-gold-light via-gold to-gold-dark shadow-sm group-hover:brightness-110" />
              ))}
            </div>

            {/* Upper Panel: Bride Details */}
            <div className="h-40 sm:h-48 border border-gold/40 rounded-xl bg-[#190D07]/85 p-3 flex flex-col items-center justify-center text-center shadow-inner">
              <div className="w-10 h-10 rounded-full border border-gold/60 flex items-center justify-center mb-1 bg-[#28150D]">
                <span className="text-gold text-base">⚜️</span>
              </div>
              <span className="font-serif italic text-gold-light text-xs">The Bride</span>
              <span className="font-gujaratiSerif text-gold-light text-sm sm:text-base font-bold mt-0.5">
                ચિ. ડો. નેન્સી
              </span>
              <span className="text-[10px] text-sage font-gujaratiSans mt-0.5">
                કુકડીયા પરિવાર
              </span>
            </div>

            {/* Realistic Brass Handle (Kundi) Left */}
            <div className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 flex flex-col items-center">
              <div
                className={`w-11 h-24 sm:w-13 sm:h-28 rounded-full border-2 border-gold-light bg-gradient-to-b from-[#FFF0D4] via-[#DFB76C] to-[#8C6C32] shadow-gold-glow flex items-center justify-center transition-all duration-300 ${
                  isHovered ? 'animate-kundi-hover scale-110 shadow-[0_0_25px_#DFB76C]' : 'scale-100'
                }`}
              >
                <div className="w-6 h-14 sm:w-7 sm:h-16 rounded-full border-2 border-gold-dark/80 bg-[#3B2412] shadow-inner" />
              </div>
              <span className="text-[9px] font-gujaratiSans text-gold/90 mt-1.5 bg-[#1C110B]/90 px-1.5 py-0.5 rounded border border-gold/40">
                હસ્ત મિલાપ
              </span>
            </div>

            {/* Lower Panel */}
            <div className="h-28 sm:h-36 border border-gold/30 rounded-xl bg-[#190D07]/85 p-2 flex flex-col items-center justify-center text-center shadow-inner">
              <span className="text-gold text-xs mb-1">🦚</span>
              <span className="font-gujaratiSerif text-xs text-gold/80 font-semibold">
                ઉત્રાણ, સુરત
              </span>
            </div>
          </div>

          {/* RIGHT DOOR PANEL (Realistic Wood Grain & Brass Trim) */}
          <div
            className={`door-leaf-right relative w-1/2 h-full bg-gradient-to-l from-[#24150E] via-[#362116] to-[#2B1910] border-l-2 border-gold/70 shadow-2xl flex flex-col justify-between p-4 sm:p-6 select-none transition-all ${
              isOpen ? 'open' : ''
            }`}
          >
            {/* Real Wood Inlay Panels */}
            <div className="absolute inset-2.5 border-2 border-[#4E3020] rounded-xl pointer-events-none group-hover:border-gold/50 transition-colors" />
            <div className="absolute inset-4 border border-gold/25 rounded-lg pointer-events-none" />

            {/* Brass Bosses along edge */}
            <div className="absolute right-3 top-6 bottom-6 flex flex-col justify-between py-2 pointer-events-none">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="w-3 h-3 rounded-full border border-gold-dark bg-gradient-to-br from-gold-light via-gold to-gold-dark shadow-sm group-hover:brightness-110" />
              ))}
            </div>

            {/* Upper Panel: Groom Details */}
            <div className="h-40 sm:h-48 border border-gold/40 rounded-xl bg-[#190D07]/85 p-3 flex flex-col items-center justify-center text-center shadow-inner">
              <div className="w-10 h-10 rounded-full border border-gold/60 flex items-center justify-center mb-1 bg-[#28150D]">
                <span className="text-gold text-base">⚜️</span>
              </div>
              <span className="font-serif italic text-gold-light text-xs">The Groom</span>
              <span className="font-gujaratiSerif text-gold-light text-sm sm:text-base font-bold mt-0.5">
                ચિ. હર્ષલ
              </span>
              <span className="text-[10px] text-sage font-gujaratiSans mt-0.5">
                ડાંખરા પરિવાર
              </span>
            </div>

            {/* Realistic Brass Handle (Kundi) Right */}
            <div className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 flex flex-col items-center">
              <div
                className={`w-11 h-24 sm:w-13 sm:h-28 rounded-full border-2 border-gold-light bg-gradient-to-b from-[#FFF0D4] via-[#DFB76C] to-[#8C6C32] shadow-gold-glow flex items-center justify-center transition-all duration-300 ${
                  isHovered ? 'animate-kundi-hover scale-110 shadow-[0_0_25px_#DFB76C]' : 'scale-100'
                }`}
              >
                <div className="w-6 h-14 sm:w-7 sm:h-16 rounded-full border-2 border-gold-dark/80 bg-[#3B2412] shadow-inner" />
              </div>
              <span className="text-[9px] font-gujaratiSans text-gold/90 mt-1.5 bg-[#1C110B]/90 px-1.5 py-0.5 rounded border border-gold/40">
                મંગલ પ્રસંગ
              </span>
            </div>

            {/* Lower Panel */}
            <div className="h-28 sm:h-36 border border-gold/30 rounded-xl bg-[#190D07]/85 p-2 flex flex-col items-center justify-center text-center shadow-inner">
              <span className="text-gold text-xs mb-1">🦚</span>
              <span className="font-serif text-xs text-gold/80 font-bold">
                14 DEC 2026
              </span>
            </div>
          </div>

          {/* 5. CENTER ROYAL WAX SEAL (LETTER UNBOXING MUDRA) */}
          {!isOpen && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center pointer-events-none">
              
              {/* Wax Seal Medallion */}
              <div
                className={`relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-gold bg-gradient-to-br from-[#531327] via-[#681F35] to-[#300A15] shadow-royal-lg flex flex-col items-center justify-center text-center p-3 transition-transform duration-300 ${
                  isOpening ? 'scale-120' : 'group-hover:scale-108 animate-pulse-subtle'
                }`}
              >
                {/* Filigree Rings */}
                <div className="absolute inset-1.5 rounded-full border border-dashed border-gold/50" />
                <div className="absolute -inset-1 rounded-full border border-gold/30" />

                <Mail className="w-5 h-5 text-gold-light mb-1 animate-bounce" />
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-gold-light font-serif font-bold">
                  Royal Invitation
                </span>
                <h3 className="font-gujaratiSerif text-sm sm:text-base font-bold text-[#FFFDF9] my-0.5 leading-tight">
                  ડો. નેન્સી & હર્ષલ
                </h3>
                <span className="text-[9px] text-gold/90 font-serif">
                  14 December 2026
                </span>
              </div>

              {/* Action Callout Button Tag */}
              <div className="mt-4 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#2B1B13] via-[#432A1C] to-[#2B1B13] border-2 border-gold text-gold-light text-xs sm:text-sm font-gujaratiSans font-bold shadow-gold-glow flex items-center gap-2 group-hover:scale-105 transition-transform">
                <span className="text-base animate-pulse">✉️</span>
                <span>લગ્ન પત્રિકા ખોલવા ક્લિક કરો (Tap to Unbox)</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Skip Button Top Right */}
      <button
        onClick={onSkip}
        className="absolute top-5 right-5 z-40 bg-black/60 hover:bg-black/85 text-gold-light border border-gold/40 text-xs px-4 py-2 rounded-full backdrop-blur-md transition-all cursor-pointer shadow-md hover:scale-105"
      >
        Skip to Invitation (સીધા આગળ વધો) ➔
      </button>
    </div>
  );
};
