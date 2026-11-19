import React from 'react';
import { Heart, ArrowUp, Phone, MapPin, DoorOpen, BookOpen } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface FooterProps {
  onReplayDoor: () => void;
  onOpenCardsModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayDoor, onOpenCardsModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#241711] via-[#1A100B] to-[#120B07] text-ivory-100 pt-16 pb-12 px-4 border-t-4 border-gold relative overflow-hidden text-center">
      {/* Decorative Golden Arch Silhouette Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Lord Ganesha & Kuldevi Invocation */}
        <div className="flex flex-col items-center mb-6">
          <img src="/assets/ganesha.png" alt="Ganesha" className="w-12 h-12 object-contain mb-2 filter drop-shadow" />
          <p className="font-gujaratiSerif text-gold text-xs sm:text-sm font-semibold tracking-widest">
            {WEDDING_DATA.kuldevi.ganeshMantra} • {WEDDING_DATA.kuldevi.name}
          </p>
        </div>

        {/* Couple Names */}
        <h3 className="font-gujaratiSerif text-3xl sm:text-4xl font-bold text-ivory-50 mb-1">
          ચિ. ડો. નેન્સી <span className="text-gold font-normal">&</span> ચિ. હર્ષલ
        </h3>
        <p className="font-serif italic text-gold-light text-base mb-6">
          Monday, 14 December 2026 • શુભ લગ્ન મહોત્સવ
        </p>

        {/* Ornate Divider */}
        <div className="flex items-center justify-center gap-3 w-48 mx-auto my-6">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <span className="text-gold text-xs">❖</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold to-transparent" />
        </div>

        {/* Family & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-ivory-200/80 max-w-2xl mx-auto mb-8 font-gujaratiSans">
          <div className="p-4 rounded-2xl bg-white/5 border border-gold/20 flex flex-col items-center">
            <span className="text-[11px] font-serif uppercase tracking-widest text-gold-light mb-1">
              નિમંત્રક કુકડીયા પરિવાર
            </span>
            <p className="font-bold text-ivory-50 text-sm sm:text-base">
              શ્રી ઉકાભાઇ • શ્રી જીતુભાઇ • શ્રી ભાર્ગવ
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>+91 9998781120 / +91 8980090833</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-gold/20 flex flex-col items-center">
            <span className="text-[11px] font-serif uppercase tracking-widest text-gold-light mb-1">
              લગ્ન સ્થળ (Venue)
            </span>
            <p className="font-bold text-ivory-50 text-sm sm:text-base">
              કાન્હાવન ફાર્મ
            </p>
            <div className="flex items-start gap-1.5 mt-2 text-center text-xs">
              <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
              <span>દુખિયાનો દરબાર રોડ, મોટા વરાછા, સુરત.</span>
            </div>
          </div>
        </div>

        {/* Quick Utility Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-gujaratiSans text-gold-light/90 mb-8">
          <button
            onClick={onReplayDoor}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer py-1 px-3 rounded-full bg-white/5 border border-gold/30"
          >
            <DoorOpen className="w-3.5 h-3.5" />
            <span>શાહી દરવાજો ફરી ખોલો (Replay Palace Door)</span>
          </button>

          <button
            onClick={onOpenCardsModal}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer py-1 px-3 rounded-full bg-white/5 border border-gold/30"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>અસલ કંકોત્રી જુઓ (6-Page PDF)</span>
          </button>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer py-1 px-3 rounded-full bg-white/5 border border-gold/30"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>ઉપર જાઓ (Back to Top)</span>
          </button>
        </div>

        {/* Copyright & Warm Wishes */}
        <div className="pt-6 border-t border-gold/20 text-xs text-chocolate-light text-stone-400 font-serif">
          <p className="flex items-center justify-center gap-1.5">
            <span>Made with devotion & love for</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 inline fill-current" />
            <span className="font-gujaratiSerif font-bold text-ivory-100">ડો. નેન્સી & હર્ષલ</span>
          </p>
          <p className="text-[11px] text-stone-500 mt-1">
            © 2026 કુકડીયા પરિવાર. સર્વ હક સુરક્ષિત.
          </p>
        </div>
      </div>
    </footer>
  );
};

