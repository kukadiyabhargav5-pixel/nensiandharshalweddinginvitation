import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { WEDDING_DATA } from '../data/weddingData';

export const ScratchDateReveal: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cardContainerRef = useRef<HTMLDivElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);
  const [isScratching, setIsScratching] = useState(false);
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });
  const hasCelebrated = useRef(false);

  // Initialize Canvas with Gold Foil Surface & Patterns
  const initFoil = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    ctx.globalCompositeOperation = 'source-over';

    // Rich Gold Metallic Shimmer Gradient
    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, '#F5DEB3');
    gradient.addColorStop(0.2, '#DFB76C');
    gradient.addColorStop(0.4, '#FFF2D1');
    gradient.addColorStop(0.6, '#C5A46D');
    gradient.addColorStop(0.85, '#9E7E45');
    gradient.addColorStop(1, '#E6C687');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Diagonal Royal Guilloche Gold Lattice Pattern
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
    ctx.lineWidth = 1.5;
    for (let x = -rect.height; x < rect.width + rect.height; x += 28) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + rect.height, rect.height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x + rect.height, 0);
      ctx.lineTo(x, rect.height);
      ctx.stroke();
    }

    // Outer and Inner Gold Borders on Foil
    ctx.strokeStyle = '#8C6C32';
    ctx.lineWidth = 4;
    ctx.strokeRect(5, 5, rect.width - 10, rect.height - 10);

    ctx.setLineDash([8, 5]);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.lineWidth = 2;
    ctx.strokeRect(12, 12, rect.width - 24, rect.height - 24);
    ctx.setLineDash([]);

    // Auspicious Kalash & Invitation Heading on Foil
    ctx.fillStyle = '#4A1425';
    ctx.font = '700 12px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✨ ROYAL WEDDING DATE UNVEIL ✨', rect.width / 2, rect.height / 2 - 20);

    ctx.font = 'bold 16px "Noto Serif Gujarati", serif';
    ctx.fillStyle = '#2B140B';
    ctx.fillText('શુભ લગ્ન તારીખ જાણવા માટે સ્ક્રેચ કરો', rect.width / 2, rect.height / 2 + 10);

    ctx.font = 'italic 11px Inter, sans-serif';
    ctx.fillStyle = '#681F35';
    ctx.fillText('(Swipe with finger or drag mouse)', rect.width / 2, rect.height / 2 + 32);

    setIsRevealed(false);
    setScratchPercent(0);
    hasCelebrated.current = false;
  }, []);

  useEffect(() => {
    initFoil();

    const handleResize = () => {
      if (!isRevealed) {
        initFoil();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initFoil, isRevealed]);

  // 3D Card Hover Tilt calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardContainerRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;
    setCardTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setCardTilt({ x: 0, y: 0 });
    setIsScratching(false);
  };

  // Percentage check
  const checkScratchPercentage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    try {
      const dpr = window.devicePixelRatio || 1;
      const w = Math.floor(canvas.width / dpr);
      const h = Math.floor(canvas.height / dpr);
      const imgData = ctx.getImageData(0, 0, w, h);
      const pixels = imgData.data;
      let transparentPixels = 0;
      const totalSampled = pixels.length / 16;

      for (let i = 3; i < pixels.length; i += 16) {
        if (pixels[i] === 0) {
          transparentPixels++;
        }
      }

      const percent = Math.round((transparentPixels / totalSampled) * 100);
      setScratchPercent(percent);

      if (percent >= 30 && !hasCelebrated.current) {
        hasCelebrated.current = true;
        setIsRevealed(true);
        confetti({
          particleCount: 80,
          spread: 90,
          origin: { y: 0.6 },
          colors: ['#DFB76C', '#C5A46D', '#681F35', '#EBD8D5', '#F4B5C0'],
        });
      }
    } catch {
      // Fallback
    }
  }, [isRevealed]);

  // Dynamic Scratch Stroke
  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2);
    ctx.fill();

    checkScratchPercentage();
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsScratching(true);
    scratch(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isScratching) return;
    scratch(e.clientX, e.clientY);
  };

  const handlePointerUp = () => {
    setIsScratching(false);
  };

  const handleRevealAll = () => {
    setIsRevealed(true);
    setScratchPercent(100);
    if (!hasCelebrated.current) {
      hasCelebrated.current = true;
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#DFB76C', '#C5A46D', '#681F35', '#EBD8D5', '#F4B5C0'],
      });
    }
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#FBF8F2] via-[#F6EFE7] to-[#FBF8F2] relative overflow-hidden text-center select-none">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Heading with Glowing Divider */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold/15 text-gold-dark text-xs uppercase tracking-widest font-serif mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>શુભ લગ્ન દિન અનાવરણ • Interactive Reveal</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon">
            Unveil Our Auspicious Day
          </h2>
          <p className="font-gujaratiSerif text-gold-dark text-lg sm:text-2xl font-bold mt-1">
            અમારા શુભ લગ્ન દિનનું અનાવરણ
          </p>
          <div className="w-28 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
        </div>

        {/* 3D TILT SCRATCH CARD CONTAINER */}
        <div
          ref={cardContainerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)`,
            transition: isScratching ? 'none' : 'transform 0.4s ease-out',
          }}
          className="relative w-full max-w-lg mx-auto aspect-[16/10] sm:aspect-[16/9] rounded-3xl p-3.5 bg-gradient-to-br from-[#EED9A4] via-[#C5A46D] to-[#8C6C32] shadow-royal-lg group cursor-pointer"
        >
          {/* Outer Gold Glowing Aura */}
          <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-gold/30 via-amber-300/40 to-gold/30 blur-md opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />

          {/* INNER CARD HOUSING */}
          <div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EC] to-[#F5ECE0] border-2 border-gold/60 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
            
            {/* UNDERNEATH LAYER: The Auspicious Date Reveal */}
            <div className={`flex flex-col items-center justify-center text-center transition-all duration-700 ${isRevealed ? 'scale-100 opacity-100' : 'scale-95 opacity-90'}`}>
              
              {/* Sunburst Glow behind date */}
              <div className="absolute w-64 h-64 rounded-full bg-gold-light/25 blur-2xl pointer-events-none animate-pulse-subtle" />

              <span className="font-serif italic text-gold-dark text-xs sm:text-sm tracking-widest uppercase font-semibold">
                Save The Auspicious Date
              </span>

              {/* Big Day Number 14 with Gold Reflection */}
              <div className="my-1 sm:my-2 relative">
                <span className="font-serif text-6xl sm:text-8xl font-bold text-maroon leading-none tracking-tight drop-shadow-md">
                  14
                </span>
              </div>

              {/* Month & Year */}
              <div className="font-serif text-xl sm:text-2xl font-bold tracking-[0.25em] text-chocolate uppercase">
                DECEMBER 2026
              </div>

              {/* Gujarati Day & Vikram Samvat */}
              <div className="mt-3 pt-2 border-t border-gold/40 flex flex-col items-center">
                <span className="font-gujaratiSerif text-lg sm:text-xl font-bold text-maroon">
                  સોમવાર (Monday)
                </span>
                <span className="font-gujaratiSerif text-xs sm:text-sm text-gold-dark font-semibold mt-0.5">
                  {WEDDING_DATA.dates.vikramSamvat}
                </span>
              </div>

              {/* Completion Badge */}
              {isRevealed && (
                <div className="mt-2.5 flex items-center gap-1.5 text-sage font-semibold text-xs bg-sage/10 px-3.5 py-1 rounded-full border border-sage/30 animate-[fadeIn_0.5s_ease-out]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>શુભ તારીખ સફળતાપૂર્વક અનલૉક થઈ ગઈ છે!</span>
                </div>
              )}
            </div>

            {/* TOP SCRATCH CANVAS FOIL */}
            {!isRevealed && (
              <canvas
                ref={canvasRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                className="absolute inset-0 w-full h-full cursor-crosshair touch-none transition-opacity duration-500 rounded-xl"
              />
            )}
          </div>
        </div>

        {/* ACTION BUTTONS & INTERACTIVE PROGRESS */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          {!isRevealed ? (
            <button
              onClick={handleRevealAll}
              className="px-7 py-3 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold hover:from-gold-dark hover:to-gold text-chocolate-dark font-serif text-xs sm:text-sm tracking-wider uppercase font-bold shadow-royal hover:shadow-royal-lg hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer border border-gold-dark/30"
            >
              <Sparkles className="w-4 h-4 text-chocolate-dark" />
              <span>Reveal Date Directly (સીધી તારીખ જુઓ)</span>
            </button>
          ) : (
            <button
              onClick={initFoil}
              className="px-6 py-2.5 rounded-full bg-ivory-50 hover:bg-gold/15 text-chocolate border border-gold/50 text-xs font-serif tracking-wider uppercase font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:-translate-y-0.5"
            >
              <RotateCcw className="w-3.5 h-3.5 text-gold-dark" />
              <span>Scratch Again (ફરીથી સ્ક્રેચ કરો)</span>
            </button>
          )}

          {!isRevealed && scratchPercent > 0 && (
            <div className="flex items-center gap-2 text-xs text-chocolate-light font-medium">
              <div className="w-24 bg-gold/20 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-gold h-full transition-all duration-150"
                  style={{ width: `${scratchPercent}%` }}
                />
              </div>
              <span>{scratchPercent}% Scratched</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
