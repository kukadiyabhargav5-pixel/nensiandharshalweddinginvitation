import React, { useState } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, Maximize2, Download } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface OriginalCardsSectionProps {
  onOpenModal: (pageIndex: number) => void;
}

export const OriginalCardsSection: React.FC<OriginalCardsSectionProps> = ({ onOpenModal }) => {
  const [activePage, setActivePage] = useState(1);
  const cards = WEDDING_DATA.originalCards;
  const current = cards.find((c) => c.page === activePage) || cards[0];

  const handlePrev = () => {
    setActivePage((prev) => (prev > 1 ? prev - 1 : cards.length));
  };

  const handleNext = () => {
    setActivePage((prev) => (prev < cards.length ? prev + 1 : 1));
  };

  return (
    <section id="original-cards" className="py-20 px-4 bg-gradient-to-b from-[#FAF5EC] via-[#F8F3E9] to-[#FAF5EC] relative overflow-hidden select-none">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold/15 text-gold-dark text-xs uppercase tracking-widest font-serif mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>મૂળ કંકોત્રી • Authentic 6-Page Wedding Card</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon">
            The Original Printed Invitation
          </h2>
          <p className="font-gujaratiSerif text-gold-dark text-lg sm:text-2xl font-bold mt-1">
            અસલ છ-પાનાની લગ્ન પત્રિકા
          </p>
          <p className="font-serif italic text-chocolate-light/80 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            મૂળ કંકોત્રીના તમામ ૬ પાનાનું હૂબહૂ ડિજિટલ દર્શન.
          </p>
          <div className="w-28 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
        </div>

        {/* Card Viewer Frame */}
        <div className="relative max-w-lg mx-auto bg-gradient-to-b from-[#FFFDF9] to-[#F5ECE0] p-4 sm:p-6 rounded-[32px] border-2 border-gold/50 shadow-royal-lg">
          
          {/* Top Info Bar */}
          <div className="flex items-center justify-between border-b border-gold/30 pb-3 mb-4 text-xs font-serif">
            <div className="text-left">
              <span className="font-bold text-maroon font-gujaratiSerif text-sm">
                પાનું {activePage} / ૬
              </span>
              <p className="text-[11px] text-chocolate-light/80 font-gujaratiSans">
                {current.title}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onOpenModal(activePage)}
                className="p-1.5 rounded-full hover:bg-gold/15 text-maroon transition-colors cursor-pointer"
                title="Open Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
              <a
                href={current.src}
                download={`Nancy-Harshal-Page-${activePage}.png`}
                className="p-1.5 rounded-full hover:bg-gold/15 text-maroon transition-colors cursor-pointer"
                title="Download Page"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Central Card Image Display */}
          <div className="relative aspect-[1/1.42] w-full rounded-2xl overflow-hidden shadow-md border border-gold/30 bg-white group">
            <img
              src={current.src}
              alt={current.title}
              className="w-full h-full object-contain cursor-zoom-in transition-transform duration-300 group-hover:scale-102"
              onClick={() => onOpenModal(activePage)}
            />

            {/* Left/Right Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-gold hover:text-chocolate-dark text-white shadow-lg transition-all cursor-pointer opacity-80 hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-gold hover:text-chocolate-dark text-white shadow-lg transition-all cursor-pointer opacity-80 hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Thumbnails */}
          <div className="mt-4 flex items-center justify-center gap-2 overflow-x-auto py-1">
            {cards.map((c) => (
              <button
                key={c.page}
                onClick={() => setActivePage(c.page)}
                className={`relative flex-shrink-0 w-11 h-15 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  activePage === c.page
                    ? 'border-maroon shadow-md scale-105'
                    : 'border-gold/30 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={c.src} alt={c.title} className="w-full h-full object-cover" />
                <span className="absolute bottom-0 inset-x-0 bg-maroon/90 text-[9px] text-white font-mono font-bold">
                  p.{c.page}
                </span>
              </button>
            ))}
          </div>

          {/* Zoom Callout Button */}
          <button
            onClick={() => onOpenModal(activePage)}
            className="mt-4 w-full py-2.5 rounded-xl bg-ivory-50 hover:bg-gold/15 text-maroon border border-gold/40 text-xs font-serif font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>મોટા કદમાં જોવા માટે અહીં ક્લિક કરો (Full View)</span>
          </button>
        </div>
      </div>
    </section>
  );
};

