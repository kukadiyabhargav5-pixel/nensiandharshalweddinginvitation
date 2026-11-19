import React from 'react';
import { BookOpen } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface InvitationLetterProps {
  onOpenCardsModal: () => void;
}

export const InvitationLetter: React.FC<InvitationLetterProps> = ({ onOpenCardsModal }) => {
  return (
    <section id="invitation" className="py-20 px-4 bg-ivory-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold/15 text-gold-dark text-xs uppercase tracking-widest font-serif mb-3">
            <span>પરિણય સંસ્કાર (Page 4)</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon">
            The Sacred Wedding Invitation
          </h2>
          <p className="font-gujaratiSerif text-xl sm:text-2xl font-bold text-gold-dark mt-1">
            ભાવભર્યું લગ્ન આમંત્રણ પત્રિકા
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-3" />
        </div>

        {/* Royal Parchment Invitation Card */}
        <div className="relative p-6 sm:p-12 md:p-16 rounded-[36px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EC] to-[#F5ECE0] border-2 border-gold/50 shadow-royal-lg text-center">
          
          {/* Ornate Gold Corner Borders */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold/70 rounded-tl-xl pointer-events-none" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold/70 rounded-tr-xl pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-gold/70 rounded-bl-xl pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold/70 rounded-br-xl pointer-events-none" />

          {/* Kuldevi Header */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative mb-2">
              <img
                src="/assets/khodiyar-mataji.png"
                alt="Aai Shree Khodiyar Mataji"
                className="w-16 h-20 sm:w-20 sm:h-24 object-contain filter drop-shadow-md"
              />
            </div>
            <p className="font-gujaratiSerif text-gold-dark font-bold text-sm sm:text-base tracking-widest">
              {WEDDING_DATA.kuldevi.name}
            </p>
          </div>

          {/* Main Gujarati Heading */}
          <h3 className="font-gujaratiSerif text-3xl sm:text-4xl md:text-5xl font-bold text-maroon mb-6">
            પરિણય સંસ્કાર
          </h3>

          {/* Invitee Salutation Line */}
          <div className="max-w-md mx-auto mb-8 pb-3 border-b border-gold/40 flex items-center justify-center gap-2">
            <span className="font-gujaratiSerif text-maroon font-bold text-base sm:text-lg">
              સ્નેહી શ્રી,
            </span>
            <span className="font-serif italic text-chocolate-light/80 text-sm">
              આપ શ્રી તથા આપનો સહપરિવાર
            </span>
          </div>

          {/* Verbatim Gujarati Traditional Invitation Message */}
          <div className="space-y-6 max-w-2xl mx-auto font-gujaratiSerif text-chocolate leading-relaxed text-sm sm:text-base md:text-lg">
            <p className="leading-relaxed">
              સહર્ષ ખુશાલી સાથ જણાવવાનું કે અમારા કુળદેવી{' '}
              <strong className="text-maroon font-bold">આઈ શ્રી ખોડિયાર માતાજી</strong> ની અસીમ
              કૃપાથી{' '}
              <span className="text-gold-dark font-semibold">
                {WEDDING_DATA.couple.bride.nativePlace}
              </span>
              <br />
              <strong className="text-maroon font-bold">
                {WEDDING_DATA.couple.bride.parents}
              </strong>{' '}
              ની સુપુત્રી
            </p>

            {/* Bride Highlight */}
            <div className="py-2">
              <span className="inline-block px-6 py-2 rounded-2xl bg-gold/15 border border-gold/40 text-2xl sm:text-3xl md:text-4xl font-bold text-maroon shadow-xs">
                {WEDDING_DATA.couple.bride.name}
              </span>
            </div>

            {/* Na Shubh Lagn Floral Knot Motif */}
            <div className="flex flex-col items-center justify-center my-3">
              <img
                src="/assets/na-shubh-lagn.png"
                alt="ના શુભ લગ્ન"
                className="w-32 sm:w-40 h-auto object-contain my-1 drop-shadow-sm"
              />
            </div>

            {/* Groom Highlight */}
            <div className="py-2">
              <span className="inline-block px-6 py-2 rounded-2xl bg-gold/15 border border-gold/40 text-2xl sm:text-3xl md:text-4xl font-bold text-maroon shadow-xs">
                {WEDDING_DATA.couple.groom.name}
              </span>
            </div>

            {/* Groom's Family Details */}
            <p className="leading-relaxed">
              <span className="text-gold-dark font-semibold">
                {WEDDING_DATA.couple.groom.nativePlace}
              </span>
              <br />
              <strong className="text-maroon font-bold">
                {WEDDING_DATA.couple.groom.parents}
              </strong>{' '}
              ના સુપુત્ર સાથે
            </p>

            {/* Wedding Date in Gujarati Calendar */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-gold/10 via-ivory-50 to-gold/10 border border-gold/40 my-4 text-maroon font-semibold text-sm sm:text-base">
              {WEDDING_DATA.dates.vikramSamvat}, {WEDDING_DATA.dates.weddingDay} ના શુભ દિને,
              પવિત્ર લગ્નબંધનમાં બંધાશો.
            </div>

            <p className="leading-relaxed italic text-chocolate-dark">
              આ શુભ પ્રસંગે નવદંપતીને આપના અંતરના આશીર્વાદ આપવા તથા શુભ પ્રસંગની શોભા વધારવા સહકુટુંબ
              પધારવા ભાવભર્યું આમંત્રણ છે.
            </p>
          </div>

          {/* Ruda Aashirwad (Auspicious Elder Blessings) */}
          <div className="mt-12 pt-8 border-t-2 border-dashed border-gold/40 max-w-xl mx-auto">
            <h4 className="font-gujaratiSerif text-xl sm:text-2xl font-bold text-maroon mb-4">
              {WEDDING_DATA.rudaAashirwad.title}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-center font-gujaratiSerif text-sm sm:text-base text-chocolate font-medium">
              {WEDDING_DATA.rudaAashirwad.members.map((name, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded-xl bg-ivory-50 border border-gold/25 hover:border-gold/60 transition-colors"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>

          {/* Button to view all original cards */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={onOpenCardsModal}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-maroon to-maroon-dark hover:from-maroon-light hover:to-maroon text-ivory-50 font-serif text-xs sm:text-sm uppercase tracking-wider font-semibold shadow-royal hover:shadow-royal-lg hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-gold-light" />
              <span>અસલ કંકોત્રીના તમામ ૬ પાના જુઓ (View Original 6 Pages)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
