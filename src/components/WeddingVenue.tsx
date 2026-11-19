import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink, Car, Train } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const WeddingVenue: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(WEDDING_DATA.venue.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="venue" className="py-20 px-4 bg-ivory-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold/15 text-gold-dark text-xs uppercase tracking-widest font-serif mb-3">
            <span>લગ્ન સ્થળ (Page 3)</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon">
            The Wedding Venue
          </h2>
          <p className="font-gujaratiSerif text-xl sm:text-2xl font-bold text-gold-dark mt-1">
            માંગલિક લગ્ન સમારંભ સ્થળ
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-3" />
        </div>

        {/* Grand Location Card */}
        <div className="relative p-6 sm:p-12 rounded-[36px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EC] to-[#F5ECE0] border-2 border-gold/50 shadow-royal-lg overflow-hidden">
          
          <div className="flex flex-col items-center text-center">
            {/* Map Pin Animated Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-gold bg-gradient-to-br from-gold-light via-gold to-gold-dark flex items-center justify-center shadow-gold-glow mb-4">
              <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-chocolate-dark" />
            </div>

            {/* Venue Name */}
            <span className="text-xs uppercase tracking-[0.25em] text-sage font-serif font-semibold">
              Sacred Venue • માંગલિક સ્થળ
            </span>
            <h3 className="font-gujaratiSerif text-3xl sm:text-5xl font-bold text-maroon my-2">
              {WEDDING_DATA.venue.name}
            </h3>
            <p className="font-serif italic text-gold-dark text-base sm:text-lg mb-6">
              Kanhavan Farm, Mota Varachha, Surat
            </p>

            {/* Full Gujarati Address */}
            <div className="max-w-md mx-auto p-5 rounded-2xl bg-ivory-50 border border-gold/30 shadow-xs mb-8">
              <div className="space-y-1 font-gujaratiSerif text-base sm:text-lg text-chocolate font-medium leading-relaxed">
                {WEDDING_DATA.venue.addressLines.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>

            {/* Action Buttons: Google Maps & Copy Address */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
              <a
                href={WEDDING_DATA.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-maroon to-maroon-dark hover:from-maroon-light hover:to-maroon text-ivory-50 font-serif text-sm tracking-wider uppercase font-semibold shadow-royal hover:shadow-royal-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-gold-light" />
                <span>Get Directions (ગૂગલ મેપ્સ પર જુઓ)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCopy}
                className="px-5 py-3 rounded-full bg-ivory-50 hover:bg-gold-light/20 text-maroon border border-gold/60 font-serif text-sm tracking-wider uppercase font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm hover:-translate-y-0.5"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">સરનામું કૉપિ થઈ ગયું!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-gold-dark" />
                    <span>Copy Address (સરનામું કૉપિ કરો)</span>
                  </>
                )}
              </button>
            </div>

            {/* Guest Assistance & Accessibility Tips */}
            <div className="w-full pt-8 border-t border-gold/30 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="p-4 rounded-xl bg-ivory-50/70 border border-gold/20 flex items-start gap-3">
                <Car className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-maroon text-sm uppercase tracking-wide">
                    By Road / Car Parking
                  </h4>
                  <p className="font-gujaratiSans text-xs text-chocolate-light mt-1">
                    મોટા વરાછા, દુખિયાનો દરબાર રોડ પર કર્મ વેલી બંગલૉની પાછળ. વાહન પાર્કિંગની સુંદર વ્યવસ્થા ઉપલબ્ધ છે.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-ivory-50/70 border border-gold/20 flex items-start gap-3">
                <Train className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-maroon text-sm uppercase tracking-wide">
                    From Surat Railway Station
                  </h4>
                  <p className="font-gujaratiSans text-xs text-chocolate-light mt-1">
                    સુરત રેલ્વે સ્ટેશન થી આશરે ૨૫-૩૦ મિનિટનું અંતર. ઉત્રાણ અને મોટા વરાછા વિસ્તારથી સરળતાથી પહોંચી શકાય છે.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

