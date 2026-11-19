import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, ZoomIn, BookOpen } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface OriginalCardsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPage?: number;
}

export const OriginalCardsModal: React.FC<OriginalCardsModalProps> = ({
  isOpen,
  onClose,
  initialPage = 1,
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!isOpen) return null;

  const cards = WEDDING_DATA.originalCards;
  const currentCard = cards.find((c) => c.page === currentPage) || cards[0];

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : cards.length));
    setIsZoomed(false);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < cards.length ? prev + 1 : 1));
    setIsZoomed(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-4 select-none">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl h-[94vh] max-h-[900px] bg-gradient-to-b from-[#2B1B13] via-[#1E130D] to-[#120B07] rounded-3xl border border-gold/40 shadow-2xl flex flex-col overflow-hidden text-ivory-100">
        
        {/* Top Header Bar */}
        <div className="px-4 sm:px-6 py-3 border-b border-gold/30 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-gold" />
            <div>
              <h3 className="font-gujaratiSerif font-bold text-sm sm:text-base text-gold-light leading-tight">
                અસલ કંકોત્રી • પાનું {currentPage} / ૬
              </h3>
              <p className="font-serif italic text-xs text-chocolate-light/80 text-gray-400 hidden sm:block">
                {currentCard.title}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2 rounded-full hover:bg-white/10 text-gold-light transition-colors cursor-pointer"
              title="Zoom In/Out"
            >
              <ZoomIn className="w-4 h-4" />
            </button>

            <a
              href={currentCard.src}
              download={`Nancy-Harshal-Invitation-Page-${currentPage}.png`}
              className="p-2 rounded-full hover:bg-white/10 text-gold-light transition-colors cursor-pointer"
              title="Download Page"
            >
              <Download className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-rose-500/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Viewer Area */}
        <div className="relative flex-1 flex items-center justify-center overflow-auto p-2 sm:p-4 bg-[#140D08]/90">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-gold/80 hover:text-chocolate-dark text-gold-light border border-gold/40 shadow-lg transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-gold/80 hover:text-chocolate-dark text-gold-light border border-gold/40 shadow-lg transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Current Card Image */}
          <div className="h-full flex items-center justify-center">
            <img
              src={currentCard.src}
              alt={currentCard.title}
              className={`max-h-full max-w-full object-contain rounded-xl shadow-2xl transition-transform duration-300 ${
                isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            />
          </div>
        </div>

        {/* Bottom Thumbnail Strip */}
        <div className="px-4 py-3 border-t border-gold/30 bg-black/50 flex items-center justify-center gap-2 overflow-x-auto">
          {cards.map((c) => (
            <button
              key={c.page}
              onClick={() => {
                setCurrentPage(c.page);
                setIsZoomed(false);
              }}
              className={`relative flex-shrink-0 w-12 h-16 sm:w-14 sm:h-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                currentPage === c.page
                  ? 'border-gold shadow-gold-glow scale-105'
                  : 'border-white/20 opacity-60 hover:opacity-100'
              }`}
            >
              <img src={c.src} alt={c.title} className="w-full h-full object-cover" />
              <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[10px] text-center font-mono text-gold-light">
                p.{c.page}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

