import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export const WeddingSongsSection: React.FC = () => {
  const lyrics = [
    'હે રે કંકુ છાંટીને લખવી કંકોતરી, મોકલવી મારે કુળદેવીના દ્વાર રે,',
    'પ્રથમ કંકોતરી શ્રી ગણેશને આપો, રિદ્ધિ સિદ્ધિ સંગે પધારો દેવ રે.',
    'હે રે કંકુ છાંટીને લખવી કંકોતરી, કાન્હાવન ફાર્મે માંડવડો રોપાય રે,',
    'ચિ. ડો. નેન્સી & ચિ. હર્ષલના શુભ વિવાહ, કુકડીયા પરિવાર વંદન કરે રે.',
    'હે રે કંકુ છાંટીને લખવી કંકોતરી, ઘેટી ગામથી મામા પધારે હોંશે રે,',
    'સભાડીયા પરિવાર લાવે રૂડી ચૂંદડી, રૂડાં રૂડાં મંગળ ગીતો ગાઓ રે.',
    'હે રે કંકુ છાંટીને લખવી કંકોતરી, વડીલોના રૂડા આશીર્વાદ ફળે રે,',
    'નવદંપતીની જોડી અમર રહો, ખોડિયાર માવડી સદા સહાય કરે રે.',
    'હે રે કંકુ છાંટીને લખવી કંકોતરી...'
  ];

  return (
    <section id="lagan-geet" className="py-20 px-4 bg-gradient-to-b from-[#FBF8F2] via-[#F5ECE0] to-[#FBF8F2] relative overflow-hidden select-none">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold/15 text-gold-dark text-xs uppercase tracking-widest font-serif mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-maroon" />
            <span>માંગલિક લગ્ન ગીત • Traditional Gujarati Wedding Song</span>
            <span className="w-1.5 h-1.5 rounded-full bg-maroon" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon">
            કંકુ છાંટીને લખવી કંકોતરી
          </h2>
          <p className="font-gujaratiSerif text-gold-dark text-lg sm:text-2xl font-bold mt-1">
            શુભ લગ્ન પ્રસંગનું પવિત્ર માંગલિક ગીત
          </p>
          <div className="w-28 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
        </div>

        {/* Selected Song Lyrics Card */}
        <div className="max-w-2xl mx-auto p-6 sm:p-10 rounded-[32px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EC] to-[#F8F3E9] border-2 border-gold/50 shadow-royal-lg text-center relative">
          
          {/* Top Flourish */}
          <div className="w-12 h-12 rounded-full border border-gold/50 mx-auto flex items-center justify-center mb-3 bg-ivory-50 shadow-xs">
            <Sparkles className="w-5 h-5 text-gold-dark" />
          </div>

          <span className="text-xs uppercase tracking-widest text-sage font-serif font-semibold block mb-1">
            પરંપરાગત ગુજરાતી કંકોતરી ગીત
          </span>
          <h3 className="font-gujaratiSerif text-2xl sm:text-3xl font-bold text-maroon mb-1">
            "કંકુ છાંટીને લખવી કંકોતરી"
          </h3>
          <p className="font-serif italic text-gold-dark text-xs sm:text-sm mb-6">
            ચિ. ડો. નેન્સી & ચિ. હર્ષલના શુભ વિવાહ નિમિત્તે
          </p>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />

          {/* Lyrics lines with calligraphy feel */}
          <div className="space-y-4 font-gujaratiSerif text-base sm:text-lg text-chocolate leading-relaxed">
            {lyrics.map((line, idx) => (
              <p
                key={idx}
                className={idx === 0 || idx === lyrics.length - 1 ? 'font-bold text-maroon text-lg sm:text-xl' : ''}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Bottom Sentiment */}
          <div className="mt-8 pt-6 border-t border-gold/30 flex items-center justify-center gap-2 text-xs font-gujaratiSans text-chocolate-light/80">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            <span>કુકડીયા પરિવાર તરફથી સર્વે સ્નેહીજનોને ભાવભર્યું આમંત્રણ</span>
          </div>
        </div>
      </div>
    </section>
  );
};
