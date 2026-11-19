import React from 'react';
import { Phone, MapPin, Feather } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const FamilyBlessings: React.FC = () => {
  return (
    <section id="family" className="py-20 px-4 bg-gradient-to-b from-[#F8F3E9] via-[#FAF4EA] to-[#F8F3E9] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold/15 text-gold-dark text-xs uppercase tracking-widest font-serif mb-3">
            <span>સ્નેહ & આશીર્વાદ (Pages 1, 3, 5)</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon">
            Family & Auspicious Blessings
          </h2>
          <p className="font-gujaratiSerif text-xl sm:text-2xl font-bold text-gold-dark mt-1">
            પરિવારજનો અને રૂડા આશીર્વાદ
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-3" />
        </div>

        {/* 1. SACRED SHLOK BANNER (Page 5 Top) */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#FFFDF9] via-[#FAF5EC] to-[#FFFDF9] border border-gold/40 shadow-royal text-center relative overflow-hidden">
          <div className="w-12 h-12 rounded-full border border-gold/40 mx-auto flex items-center justify-center mb-3 bg-ivory-50">
            <img src="/assets/ganesha.png" alt="Ganesha" className="w-8 h-8 object-contain" />
          </div>
          <p className="font-gujaratiSerif text-base sm:text-xl font-bold text-maroon leading-relaxed">
            {WEDDING_DATA.kuldevi.shlok}
          </p>
          <span className="text-xs uppercase tracking-widest text-gold-dark font-serif mt-2 block">
            || મંગલ શ્લોક ||
          </span>
        </div>

        {/* 2. NIMANTRAK (INVITATION HOSTS - Page 1) */}
        <div className="mb-14 p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#FFFDF9] to-[#F8F3E9] border-2 border-gold/50 shadow-royal-lg">
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-sage font-serif font-semibold">
              Page 01 • Invitation Hosts
            </span>
            <h3 className="font-gujaratiSerif text-2xl sm:text-3xl font-bold text-maroon mt-1">
              {WEDDING_DATA.hosts.title}
            </h3>
            <p className="font-serif italic text-gold-dark text-sm">
              The Kukadiya Family Cordially Invites You
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-6">
            {WEDDING_DATA.hosts.members.map((name, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-ivory-50/80 border border-gold/40 text-center shadow-xs hover:border-gold hover:-translate-y-0.5 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-gold/15 text-maroon mx-auto flex items-center justify-center font-serif font-bold text-xs mb-2">
                  0{idx + 1}
                </div>
                <h4 className="font-gujaratiSerif text-base sm:text-lg font-bold text-maroon">
                  {name}
                </h4>
                <span className="text-[11px] text-chocolate-light/70 font-sans">
                  કુકડીયા પરિવાર
                </span>
              </div>
            ))}
          </div>

          {/* Host Address & Verified Contact Numbers from Page 1 */}
          <div className="pt-6 border-t border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-chocolate">
            <div className="flex items-start gap-2 max-w-md text-left">
              <MapPin className="w-4 h-4 text-gold-dark mt-0.5 flex-shrink-0" />
              <span className="font-gujaratiSans">{WEDDING_DATA.hosts.address}</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold-dark flex-shrink-0" />
              <div className="flex gap-2">
                {WEDDING_DATA.hosts.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:+91${phone}`}
                    className="font-mono font-semibold text-maroon hover:text-gold-dark underline underline-offset-2 transition-colors"
                  >
                    +91 {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. MAMERU & BHANEJ (Page 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Maternal Uncles (Mameru) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#FFFDF9] to-[#F8F3E9] border border-gold/40 shadow-royal">
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-widest text-sage font-serif font-semibold">
                Page 03 • Mameru Hosts
              </span>
              <h3 className="font-gujaratiSerif text-xl sm:text-2xl font-bold text-maroon mt-1">
                {WEDDING_DATA.mameru.title}
              </h3>
              <span className="font-gujaratiSans text-xs text-gold-dark font-bold">
                {WEDDING_DATA.mameru.native}
              </span>
            </div>

            <div className="space-y-2.5">
              {WEDDING_DATA.mameru.members.map((member, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-ivory-50 border border-gold/25 flex items-center justify-between hover:border-gold/60 transition-colors"
                >
                  <span className="font-gujaratiSerif text-sm sm:text-base font-bold text-chocolate">
                    {member}
                  </span>
                  <span className="text-gold text-xs">❖</span>
                </div>
              ))}
            </div>
          </div>

          {/* Beloved Nephews (Bhanej) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#FFFDF9] to-[#F8F3E9] border border-gold/40 shadow-royal">
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-widest text-sage font-serif font-semibold">
                Page 03 • Beloved Nephews
              </span>
              <h3 className="font-gujaratiSerif text-xl sm:text-2xl font-bold text-maroon mt-1">
                {WEDDING_DATA.bhanej.title}
              </h3>
              <p className="font-serif italic text-gold-dark text-xs">
                With Love & Affection
              </p>
            </div>

            <div className="space-y-2.5">
              {WEDDING_DATA.bhanej.members.map((member, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-ivory-50 border border-gold/25 flex items-center justify-between hover:border-gold/60 transition-colors"
                >
                  <span className="font-gujaratiSerif text-sm sm:text-base font-bold text-chocolate">
                    {member}
                  </span>
                  <span className="text-gold text-xs">❖</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. SNEHADHIN & AAVKARVA AATUR (Page 5 Full Lists) */}
        <div className="space-y-12 mb-14">
          {/* Snehadhin (10 Names) */}
          <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#FFFDF9] to-[#F8F3E9] border border-gold/40 shadow-royal">
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-widest text-sage font-serif font-semibold">
                Page 05 • With Warm Regard
              </span>
              <h3 className="font-gujaratiSerif text-2xl sm:text-3xl font-bold text-maroon mt-1">
                {WEDDING_DATA.snehadhin.title}
              </h3>
              <p className="font-serif italic text-gold-dark text-sm">
                Extended Elders & Family Members
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
              <div className="space-y-2">
                {WEDDING_DATA.snehadhin.column1.map((name, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-ivory-50 border border-gold/25 font-gujaratiSerif text-sm sm:text-base text-chocolate font-medium text-center hover:bg-gold/10 transition-colors"
                  >
                    {name}
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {WEDDING_DATA.snehadhin.column2.map((name, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-ivory-50 border border-gold/25 font-gujaratiSerif text-sm sm:text-base text-chocolate font-medium text-center hover:bg-gold/10 transition-colors"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Aavkarva Aatur (12 Young Family Members) */}
          <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#FFFDF9] to-[#F8F3E9] border border-gold/40 shadow-royal">
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-widest text-sage font-serif font-semibold">
                Page 05 • Eager to Welcome You
              </span>
              <h3 className="font-gujaratiSerif text-2xl sm:text-3xl font-bold text-maroon mt-1">
                {WEDDING_DATA.aavkarvaAatur.title}
              </h3>
              <p className="font-serif italic text-gold-dark text-sm">
                Youth & Younger Family Members
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
              <div className="space-y-2">
                {WEDDING_DATA.aavkarvaAatur.column1.map((name, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-ivory-50 border border-gold/25 font-gujaratiSerif text-sm sm:text-base text-chocolate font-medium text-center hover:bg-gold/10 transition-colors"
                  >
                    {name}
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {WEDDING_DATA.aavkarvaAatur.column2.map((name, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-ivory-50 border border-gold/25 font-gujaratiSerif text-sm sm:text-base text-chocolate font-medium text-center hover:bg-gold/10 transition-colors"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 5. TAHUKO (PAGE 5 CALLIGRAPHY POETIC VERSE) */}
        <div className="relative p-8 sm:p-12 rounded-[32px] bg-gradient-to-br from-[#451221] via-[#681F35] to-[#300915] text-ivory-50 shadow-royal-lg text-center overflow-hidden">
          {/* Subtle Golden Stars & Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto">
            <div className="w-12 h-12 rounded-full border border-gold/50 mx-auto flex items-center justify-center mb-4 bg-maroon-dark">
              <Feather className="w-6 h-6 text-gold-light" />
            </div>

            <h3 className="font-gujaratiSerif text-2xl sm:text-3xl font-bold text-gold-light mb-4">
              {WEDDING_DATA.tahuko.title}
            </h3>

            <div className="space-y-3 font-gujaratiSerif text-lg sm:text-2xl text-ivory-100 leading-relaxed italic drop-shadow-sm">
              {WEDDING_DATA.tahuko.verses.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>

            {/* Niece Signatures */}
            <div className="mt-6 pt-4 border-t border-gold/30">
              <span className="font-gujaratiSerif font-bold text-xl sm:text-2xl text-gold-light tracking-wider">
                {WEDDING_DATA.tahuko.signature}
              </span>
              <p className="font-serif italic text-xs text-blush mt-1">
                (ભત્રીજીઓ વતી ભાવભીનું સ્નેહ નિમંત્રણ)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
