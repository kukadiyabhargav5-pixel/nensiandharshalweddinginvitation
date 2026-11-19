import React from 'react';
import { ChevronDown, Phone, BookOpen } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface HeroSectionProps {
  onExploreClick: () => void;
  onOpenCardsModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onOpenCardsModal }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#FAF5EC] via-[#FBF8F2] to-[#FAF5EC] overflow-hidden py-10 sm:py-16 px-4">
      
      {/* Grand Royal Card Frame Container */}
      <div className="relative max-w-3xl w-full mx-auto p-6 sm:p-12 md:p-16 rounded-[36px] sm:rounded-[48px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EC] to-[#F5ECE0] border-2 border-gold/60 shadow-royal-lg text-center flex flex-col items-center justify-center">
        
        {/* Ornate Gold Corner Borders */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold/70 rounded-tl-2xl pointer-events-none" />
        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold/70 rounded-tr-2xl pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-gold/70 rounded-bl-2xl pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold/70 rounded-br-2xl pointer-events-none" />

        {/* Peacock Top Motifs */}
        <div className="absolute top-4 left-8 text-gold text-xl select-none hidden sm:block">🦚</div>
        <div className="absolute top-4 right-8 text-gold text-xl select-none hidden sm:block">🦚</div>

        {/* 1. LORD GANESHA & INVOCATION (Page 1 Top) */}
        <div className="flex flex-col items-center mb-2">
          <div className="relative group mb-1">
            <div className="absolute -inset-2 rounded-full bg-gold/20 blur-sm group-hover:bg-gold/40 transition-all" />
            <img
              src="/assets/ganesha.png"
              alt="Lord Ganesha"
              className="relative w-16 h-16 sm:w-20 sm:h-20 object-contain transition-transform duration-500 hover:scale-108"
            />
          </div>
          <p className="font-gujaratiSerif text-gold-dark font-bold tracking-widest text-sm sm:text-base">
            || શ્રી ગણેશાય નમઃ ||
          </p>
        </div>

        {/* 2. AUTHENTIC SHUBH VIVAH CALLIGRAPHY MOTIF */}
        <div className="my-2 max-w-xs sm:max-w-sm">
          <img
            src="/assets/shubh-vivah.png"
            alt="શુભ વિવાહ"
            className="w-52 sm:w-64 h-auto object-contain mx-auto filter drop-shadow-sm"
          />
        </div>

        {/* 3. BRIDE NAME */}
        <div className="my-2 sm:my-3">
          <h1 className="font-gujaratiSerif text-3xl sm:text-5xl md:text-6xl font-bold text-maroon drop-shadow-sm tracking-wide">
            {WEDDING_DATA.couple.bride.name}
          </h1>
        </div>

        {/* 4. NA SHUBH LAGN MOTIF */}
        <div className="my-1 flex justify-center">
          <img
            src="/assets/na-shubh-lagn.png"
            alt="ના શુભ લગ્ન"
            className="w-32 sm:w-40 h-auto object-contain drop-shadow-xs"
          />
        </div>

        {/* 5. GROOM NAME */}
        <div className="my-2 sm:my-3">
          <h2 className="font-gujaratiSerif text-3xl sm:text-5xl md:text-6xl font-bold text-maroon drop-shadow-sm tracking-wide">
            {WEDDING_DATA.couple.groom.name}
          </h2>
        </div>

        {/* 6. WEDDING DATE (Page 1 Format) */}
        <div className="mt-3 mb-6 px-6 py-2.5 rounded-full bg-ivory-50 border border-gold/50 shadow-xs">
          <span className="font-gujaratiSerif text-maroon font-bold text-base sm:text-xl tracking-wider">
            {WEDDING_DATA.events[0].date}
          </span>
        </div>

        {/* 7. ORNATE INVITEE LINE (Page 1 Flourish: શ્રી _______________) */}
        <div className="w-full max-w-md my-2 flex items-center justify-center gap-3">
          <span className="font-gujaratiSerif font-bold text-maroon text-2xl">
            શ્રી
          </span>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-maroon via-gold to-gold-dark relative">
            <div className="absolute right-0 -top-1 w-2.5 h-2.5 rounded-full bg-gold" />
          </div>
        </div>

        {/* 8. NIMANTRAK (PAGE 1 INVITATION HOSTS) */}
        <div className="w-full max-w-lg mt-6 pt-6 border-t-2 border-dashed border-gold/40 flex flex-col items-center">
          <h3 className="font-gujaratiSerif text-xl sm:text-2xl font-bold text-maroon mb-3 tracking-widest">
            {WEDDING_DATA.hosts.title}
          </h3>

          {/* 3 Host Names */}
          <div className="space-y-1.5 font-gujaratiSerif text-base sm:text-lg text-chocolate font-bold">
            {WEDDING_DATA.hosts.members.map((name, idx) => (
              <p key={idx} className="hover:text-maroon transition-colors">
                {name}
              </p>
            ))}
          </div>

          {/* Address */}
          <div className="mt-4 p-3 rounded-2xl bg-ivory-50/90 border border-gold/30 text-xs sm:text-sm font-gujaratiSans text-chocolate-light leading-relaxed max-w-md">
            <p>એ-૫૦૪, અનમોલ હાઈટ્સ,</p>
            <p>શાંગ્રીલા હાઈટ્સ ની સામે, વી.આઈ.પી સર્કલ ,</p>
            <p className="font-semibold text-chocolate">ઉત્રાણ, સુરત.</p>
          </div>

          {/* Mobile Numbers with direct call links */}
          <div className="mt-3 flex items-center justify-center gap-2 text-xs sm:text-sm font-gujaratiSans text-maroon font-bold">
            <Phone className="w-4 h-4 text-gold-dark" />
            <span>મોં:- </span>
            <div className="flex gap-2 font-mono">
              {WEDDING_DATA.hosts.phones.map((p, idx) => (
                <a
                  key={p}
                  href={`tel:+91${p}`}
                  className="hover:text-gold-dark underline underline-offset-2 transition-colors"
                >
                  {p}{idx === 0 ? ',' : ''}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 9. ACTION BUTTONS & SCROLL CALLOUT */}
        <div className="mt-8 pt-6 border-t border-gold/30 flex flex-wrap items-center justify-center gap-4 z-20">
          <button
            onClick={onExploreClick}
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-maroon via-maroon-light to-maroon hover:from-maroon-dark hover:to-maroon text-ivory-50 font-serif text-xs sm:text-sm tracking-wider uppercase font-bold shadow-royal hover:shadow-royal-lg hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>માંગલિક પ્રસંગો જુઓ (Wedding Events)</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenCardsModal}
            className="px-6 py-3.5 rounded-full bg-ivory-50 hover:bg-gold/15 text-maroon border border-gold/60 font-serif text-xs sm:text-sm tracking-wider uppercase font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:-translate-y-0.5"
          >
            <BookOpen className="w-4 h-4 text-gold-dark" />
            <span>અસલ કંકોત્રી (Original PDF)</span>
            <span className="text-xs bg-gold/20 text-maroon px-1.5 py-0.5 rounded font-mono font-bold">6 Pages</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div
          onClick={onExploreClick}
          className="mt-6 flex flex-col items-center text-chocolate-light/70 hover:text-maroon transition-colors cursor-pointer group"
        >
          <span className="text-[11px] tracking-widest uppercase font-serif mb-1 group-hover:translate-y-0.5 transition-transform">
            Scroll to View All Details
          </span>
          <div className="w-5 h-8 rounded-full border border-gold/70 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-gold animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
