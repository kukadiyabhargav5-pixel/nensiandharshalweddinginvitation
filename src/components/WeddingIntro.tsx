import React, { useEffect, useState } from 'react';

interface WeddingIntroProps {
  onComplete: () => void;
}

export const WeddingIntro: React.FC<WeddingIntroProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<'shree-ganesh' | 'couple-reveal' | 'ready'>('shree-ganesh');

  useEffect(() => {
    // Stage 1: Ganesh Mantra
    const t1 = setTimeout(() => {
      setStage('couple-reveal');
    }, 1800);

    // Progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 45);

    const t2 = setTimeout(() => {
      setStage('ready');
    }, 3800);

    const t3 = setTimeout(() => {
      onComplete();
    }, 4600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ivory-100 overflow-hidden px-4 text-center select-none">
      {/* Delicate floating background golden aura */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-gold-light/20 via-blush/30 to-gold/15 blur-3xl ambient-light pointer-events-none" />

      {/* Rotating Sacred Mandala */}
      <div className="relative mb-8 transition-transform duration-1000 ease-out">
        <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-gold/40 flex items-center justify-center relative animate-[spin_40s_linear_infinite]">
          {/* Decorative radiating petal rings */}
          <div className="absolute inset-2 rounded-full border border-dashed border-gold/50" />
          <div className="absolute inset-6 rounded-full border border-gold/30" />
          <div className="absolute inset-10 rounded-full border border-dashed border-gold/40" />
          
          {/* Little floral points along border */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <div
              key={deg}
              className="absolute w-2.5 h-2.5 rounded-full bg-gold/70"
              style={{
                transform: `rotate(${deg}deg) translate(88px) rotate(-${deg}deg)`,
              }}
            />
          ))}
        </div>

        {/* Lord Ganesha Centerpiece */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/assets/ganesha.png"
            alt="Lord Ganesha"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-md animate-pulse-subtle"
          />
        </div>
      </div>

      {/* Text Reveal Sequence */}
      <div className="max-w-md w-full min-h-[140px] flex flex-col items-center justify-center">
        <p className="font-gujaratiSerif text-gold-dark tracking-widest text-sm sm:text-base font-semibold mb-3">
          || શ્રી ગણેશાય નમઃ ||
        </p>

        {stage !== 'shree-ganesh' && (
          <div className="animate-[fadeIn_0.8s_ease-out]">
            <span className="text-xs uppercase tracking-[0.25em] text-sage font-medium block mb-1">
              The Royal Wedding Invitation
            </span>
            <h1 className="font-gujaratiSerif text-2xl sm:text-3xl md:text-4xl font-bold text-maroon drop-shadow-sm leading-relaxed">
              ચિ. ડો. નેન્સી <span className="text-gold font-normal mx-1">&</span> ચિ. હર્ષલ
            </h1>
            <p className="font-serif italic text-gold-dark text-sm sm:text-base mt-1">
              Monday, 14 December 2026
            </p>
          </div>
        )}
      </div>

      {/* Thin Elegant Progress Indicator */}
      <div className="w-56 sm:w-64 mt-8 flex flex-col items-center">
        <div className="w-full bg-gold/20 h-0.5 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-gold-light via-gold to-maroon h-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between w-full mt-2 text-[11px] font-serif text-chocolate-light/70 tracking-widest">
          <span>WELCOME</span>
          <span>{progress}%</span>
        </div>
      </div>

      {/* Skip Button */}
      <button
        onClick={onComplete}
        className="mt-6 text-xs text-chocolate-light/60 hover:text-maroon underline underline-offset-4 tracking-wider transition-colors cursor-pointer py-1 px-3"
      >
        Skip Intro (સીધા પ્રવેશ કરો)
      </button>
    </div>
  );
};

