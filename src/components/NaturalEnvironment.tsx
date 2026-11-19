import React from 'react';

export const NaturalEnvironment: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden select-none">
      {/* 1. SOFT AMBIENT SUNBEAMS / NATURAL LIGHT RAYS */}
      <div className="absolute -top-32 left-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-b from-[#FFF5E0]/30 via-gold-light/10 to-transparent blur-3xl ambient-sunbeam" />
      <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-blush/25 via-gold/5 to-transparent blur-3xl" />

      {/* 2. LIVE FLYING BIRDS ACROSS THE SKY */}
      {/* Flock 1 */}
      <div className="absolute bird-1 flex items-center gap-3">
        <svg className="w-8 h-6 text-chocolate/40 drop-shadow-sm" viewBox="0 0 32 20" fill="currentColor">
          <g className="bird-wings">
            <path d="M16 10 C10 2, 2 3, 0 8 C6 7, 12 9, 16 10 C20 9, 26 7, 32 8 C30 3, 22 2, 16 10 Z" />
          </g>
        </svg>
        <svg className="w-6 h-5 text-chocolate/30 -mt-3 ml-2" viewBox="0 0 32 20" fill="currentColor">
          <g className="bird-wings" style={{ animationDelay: '0.12s' }}>
            <path d="M16 10 C10 2, 2 3, 0 8 C6 7, 12 9, 16 10 C20 9, 26 7, 32 8 C30 3, 22 2, 16 10 Z" />
          </g>
        </svg>
      </div>

      {/* Flock 2 */}
      <div className="absolute bird-2 flex items-center gap-4">
        <svg className="w-6 h-5 text-chocolate/25" viewBox="0 0 32 20" fill="currentColor">
          <g className="bird-wings" style={{ animationDelay: '0.2s' }}>
            <path d="M16 10 C10 2, 2 3, 0 8 C6 7, 12 9, 16 10 C20 9, 26 7, 32 8 C30 3, 22 2, 16 10 Z" />
          </g>
        </svg>
        <svg className="w-7 h-5 text-chocolate/35 -mt-2" viewBox="0 0 32 20" fill="currentColor">
          <g className="bird-wings" style={{ animationDelay: '0.05s' }}>
            <path d="M16 10 C10 2, 2 3, 0 8 C6 7, 12 9, 16 10 C20 9, 26 7, 32 8 C30 3, 22 2, 16 10 Z" />
          </g>
        </svg>
        <svg className="w-5 h-4 text-chocolate/20 -mt-4 ml-1" viewBox="0 0 32 20" fill="currentColor">
          <g className="bird-wings" style={{ animationDelay: '0.25s' }}>
            <path d="M16 10 C10 2, 2 3, 0 8 C6 7, 12 9, 16 10 C20 9, 26 7, 32 8 C30 3, 22 2, 16 10 Z" />
          </g>
        </svg>
      </div>

      {/* 3. LUSH SWAYING PALACE BOTANICAL FOLIAGE (Top Corners) */}
      {/* Top Left Foliage & Mango Leaves */}
      <div className="absolute -top-6 -left-6 w-52 sm:w-80 h-52 sm:h-80 opacity-70 sway-left">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-sage">
          {/* Main branch */}
          <path d="M-10 -10 Q60 50 150 70" stroke="#58614E" strokeWidth="3" strokeLinecap="round" />
          <path d="M40 35 Q80 10 130 20" stroke="#58614E" strokeWidth="2" strokeLinecap="round" />
          <path d="M70 48 Q100 90 140 120" stroke="#58614E" strokeWidth="2" strokeLinecap="round" />

          {/* Mango & Aashopalav Leaves */}
          <path d="M50 40 Q80 20 100 25 Q90 45 50 40 Z" fill="#76816A" opacity="0.85" />
          <path d="M80 30 Q120 15 145 25 Q130 45 80 30 Z" fill="#88987B" opacity="0.9" />
          <path d="M100 55 Q140 60 165 75 Q135 90 100 55 Z" fill="#76816A" opacity="0.85" />
          <path d="M70 50 Q105 85 125 110 Q95 105 70 50 Z" fill="#88987B" opacity="0.8" />
          <path d="M30 20 Q55 5 75 10 Q65 30 30 20 Z" fill="#65715B" opacity="0.9" />

          {/* Delicate Pink Floral Buds */}
          <circle cx="102" cy="27" r="4" fill="#E89BA8" opacity="0.9" />
          <circle cx="147" cy="26" r="3.5" fill="#F4B5C0" opacity="0.9" />
          <circle cx="167" cy="76" r="4.5" fill="#E89BA8" opacity="0.9" />
        </svg>
      </div>

      {/* Top Right Foliage & Jasmine Vines */}
      <div className="absolute -top-6 -right-6 w-52 sm:w-80 h-52 sm:h-80 opacity-70 sway-right">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-sage">
          <path d="M210 -10 Q140 50 50 70" stroke="#58614E" strokeWidth="3" strokeLinecap="round" />
          <path d="M160 35 Q120 10 70 20" stroke="#58614E" strokeWidth="2" strokeLinecap="round" />
          <path d="M130 48 Q100 90 60 120" stroke="#58614E" strokeWidth="2" strokeLinecap="round" />

          <path d="M150 40 Q120 20 100 25 Q110 45 150 40 Z" fill="#76816A" opacity="0.85" />
          <path d="M120 30 Q80 15 55 25 Q70 45 120 30 Z" fill="#88987B" opacity="0.9" />
          <path d="M100 55 Q60 60 35 75 Q65 90 100 55 Z" fill="#76816A" opacity="0.85" />
          <path d="M130 50 Q95 85 75 110 Q105 105 130 50 Z" fill="#88987B" opacity="0.8" />
          
          <circle cx="98" cy="26" r="4" fill="#E89BA8" opacity="0.9" />
          <circle cx="53" cy="26" r="3.5" fill="#F4B5C0" opacity="0.9" />
          <circle cx="33" cy="76" r="4.5" fill="#E89BA8" opacity="0.9" />
        </svg>
      </div>

      {/* 4. GENTLE FALLING ROSE & JASMINE PETALS */}
      {[12, 28, 45, 62, 78, 92].map((left, idx) => (
        <div
          key={idx}
          className="falling-petal"
          style={{
            left: `${left}%`,
            animationDelay: `${idx * 2.1}s`,
            animationDuration: `${12 + (idx % 4)}s`,
          }}
        >
          {idx % 2 === 0 ? (
            // Rose Petal
            <div
              className="w-3.5 h-4.5 rounded-full bg-gradient-to-tr from-pink-300 via-rose-300 to-rose-400 opacity-70 shadow-xs"
              style={{ transform: `rotate(${idx * 40}deg)` }}
            />
          ) : (
            // White Jasmine Blossom Petal
            <div
              className="w-3 h-3 rounded-full bg-gradient-to-tr from-white via-amber-50 to-yellow-100 opacity-80 border border-gold/20 shadow-xs"
              style={{ transform: `rotate(${idx * 55}deg)` }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

