import React, { useState } from 'react';
import { Music, Sparkles, Heart } from 'lucide-react';

interface Song {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  lyrics: string[];
}

export const WeddingSongsSection: React.FC = () => {
  const songs: Song[] = [
    {
      id: 'ganesh',
      category: 'શ્રી ગણેશ વંદના',
      title: 'પ્રથમ શ્રી ગણેશ બેસાડો રે',
      subtitle: 'લગ્નની શરૂઆતમાં ગવાતું શુભ ગીત',
      lyrics: [
        'પ્રથમ શ્રી ગણેશ બેસાડો રે, મારે આંગણે આનંદ મોટો રે,',
        'રિદ્ધિ સિદ્ધિ સહિત પધારો રે ગજાનન, કુકડીયા પરિવાર વંદન કરે રે.',
        'ગણેશજી બેઠા મંડપની માંય, સૂરજ ઉગ્યા સોનાની છાંય,',
        'વિઘ્નહર્તા દેવ સહાય કરજો, નેન્સી-હર્ષલ પર અમીકૃપા ધરજો.',
        'પ્રથમ શ્રી ગણેશ બેસાડો રે...'
      ]
    },
    {
      id: 'mandap',
      category: 'મંડપ મુહૂર્ત',
      title: 'લીલી પીળી વાંસલડી વઢાવો રે',
      subtitle: '૧૪ ડિસેમ્બર સવારે ૭:૦૦ કલાકે',
      lyrics: [
        'લીલી પીળી વાંસલડી વઢાવો રે, કાન્હાવન ફાર્મે માંડવડો રોપાવો રે,',
        'માંડવડે પધારો ખોડિયાર માવડી રે, કુટુંબ પરિવાર સંગે આવો રે.',
        'આસોપાલવના તોરણ બાંધો, મોગરાની માળા સજાવો,',
        'અસ્મિતાબેન-શારદાબેન હોંશે પધારો, મંડપના વધામણાં લાવો રે.',
        'લીલી પીળી વાંસલડી વઢાવો રે...'
      ]
    },
    {
      id: 'pithi',
      category: 'પીઠી રસમ',
      title: 'સોનાના કટોરે કેસર ઘોળ્યા રે',
      subtitle: 'લાડકડી કન્યાને પીઠી ચોળતી વેળાએ',
      lyrics: [
        'સોનાના કટોરે કેસર ઘોળ્યા રે, ચંદન કસ્તુરી મંઘમંઘે રે,',
        'પીઠી ચોળો રે ડો. નેન્સી લાડકડીને, રૂપાળાં રૂડાં રૂપ નીતરે રે.',
        'ફોઈ-કાકી સૌ હરખે હરખાય, ભાભીઓ મંગળ ગીતો ગાય,',
        'નજર ન લાગે મારી લાડલીને, કંકુના ચાંદલા શોભે રે.',
        'સોનાના કટોરે કેસર ઘોળ્યા રે...'
      ]
    },
    {
      id: 'mameru',
      category: 'માયાળુ મામેરું',
      title: 'ઘેટી ગામથી મામેરું આવ્યું રે',
      subtitle: 'સભાડીયા પરિવારનું સ્નેહભર્યું મોસાળું',
      lyrics: [
        'ઘેટી ગામથી મામેરું આવ્યું રે, સોના-રૂપાના થાળ ભરી લાવ્યા રે,',
        'ગોરધનભાઈ-દલપતભાઈ હોંશે પધાર્યા, અશોકભાઈ-અતુલભાઈ સ્નેહથી આવ્યા રે.',
        'વીરા મારા મામેરું લઈ આવ્યા, ભાણેજડીના કોડ પુરા કીધા,',
        'ચૂંદડી ઓઢાડીને આશીષ દીધા, મામેરું રળિયામણું કીધું રે.',
        'ઘેટી ગામથી મામેરું આવ્યું રે...'
      ]
    },
    {
      id: 'jaan',
      category: 'જાન આગમન',
      title: 'આજ મારે આંગણે સોનાનો સૂરજ',
      subtitle: 'સાંજે ૬:૦૦ કલાકે જાનનું ભવ્ય સામૈયું',
      lyrics: [
        'આજ મારે આંગણે સોનાનો સૂરજ ઊગ્યો રે,',
        'હર્ષલ રાજાની જાન આવી, ઢોલીડા ઢોલ ધ્રબકાવે રે.',
        'વસંતબેન-કાજલબેન સામૈયું સજાવો, મોતીડે વરરાજાને વધાવો,',
        'ડાંખરા પરિવાર સંગે પધાર્યા, માંડવડે ઉમંગ છવાયો રે.',
        'આજ મારે આંગણે સોનાનો સૂરજ ઊગ્યો રે...'
      ]
    },
    {
      id: 'hastmelap',
      category: 'હસ્તમેળાપ & મંગળ ફેરા',
      title: 'હસ્તમેળાપની ઘડીઓ રળિયામણી રે',
      subtitle: 'સાંજે ૭:૧૫ કલાકે મંગળ ફેરા વિધિ',
      lyrics: [
        'હસ્તમેળાપની ઘડીઓ રળિયામણી રે, વર-કન્યાના હાથ મળ્યા રે,',
        'વેદોક્ત મંત્રો ગુંજ્યા મંડપમાં, બેઉ કુળના ભાગ્ય ખીલ્યા રે.',
        'પેલે ફેરે ધર્મ, બીજે ફેરે અર્થ, ત્રીજે ફેરે કામ, ચોથે મોક્ષ સંસાર,',
        'નેન્સી-હર્ષલની જોડી અમર રહો, ખોડિયાર માવડીના આશીર્વાદ ફળ્યા રે.',
        'હસ્તમેળાપની ઘડીઓ રળિયામણી રે...'
      ]
    },
    {
      id: 'viday',
      category: 'કન્યા વિદાય',
      title: 'દાદાને આંગણે આંબલી રે',
      subtitle: 'લાડકડી દીકરીની વિદાય વેળાએ',
      lyrics: [
        'દાદાને આંગણે આંબલી રે, પાંદડે પાંદડે મોર રે,',
        'લાડકડી ડો. નેન્સી જાય સાસરે રે, હૈયામાં હેત અપાર રે.',
        'પિતાજીની લાડલી, માવડીની ઢીંગલી, ઘરનું અજવાળું આજ વળાવ્યું,',
        'સાસરિયામાં સુવાસ ફેલાવજો, કુકડીયા કુળનું નામ દીપાવજો.',
        'દાદાને આંગણે આંબલી રે...'
      ]
    }
  ];

  const [activeId, setActiveId] = useState<string>('ganesh');
  const currentSong = songs.find(s => s.id === activeId) || songs[0];

  return (
    <section id="lagan-geet" className="py-20 px-4 bg-gradient-to-b from-[#FBF8F2] via-[#F5ECE0] to-[#FBF8F2] relative overflow-hidden select-none">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold/15 text-gold-dark text-xs uppercase tracking-widest font-serif mb-3">
            <Music className="w-3.5 h-3.5 text-maroon" />
            <span>પરંપરાગત સંસ્કૃતિ • Traditional Gujarati Wedding Songs</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon">
            માંગલિક લગ્ન ગીતો
          </h2>
          <p className="font-gujaratiSerif text-gold-dark text-lg sm:text-2xl font-bold mt-1">
            શુભ પ્રસંગોના મંગલમય ગીતો
          </p>
          <p className="font-serif italic text-chocolate-light/80 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            ગણેશ સ્થાપનાથી માંડીને વિદાય સુધીના પવિત્ર ગુજરાતી લગ્ન ગીતો.
          </p>
          <div className="w-28 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
        </div>

        {/* Category Tabs Strip */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {songs.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-gujaratiSans font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                activeId === s.id
                  ? 'bg-maroon text-ivory-50 border-maroon shadow-md scale-105'
                  : 'bg-ivory-50 text-chocolate border-gold/40 hover:border-gold hover:bg-gold/10'
              }`}
            >
              {s.category}
            </button>
          ))}
        </div>

        {/* Selected Song Lyrics Card */}
        <div className="max-w-2xl mx-auto p-6 sm:p-10 rounded-[32px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EC] to-[#F8F3E9] border-2 border-gold/50 shadow-royal-lg text-center relative">
          
          {/* Top Flourish */}
          <div className="w-12 h-12 rounded-full border border-gold/50 mx-auto flex items-center justify-center mb-3 bg-ivory-50 shadow-xs">
            <Sparkles className="w-5 h-5 text-gold-dark" />
          </div>

          <span className="text-xs uppercase tracking-widest text-sage font-serif font-semibold block mb-1">
            {currentSong.category}
          </span>
          <h3 className="font-gujaratiSerif text-2xl sm:text-3xl font-bold text-maroon mb-1">
            "{currentSong.title}"
          </h3>
          <p className="font-serif italic text-gold-dark text-xs sm:text-sm mb-6">
            {currentSong.subtitle}
          </p>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />

          {/* Lyrics lines with calligraphy feel */}
          <div className="space-y-3.5 font-gujaratiSerif text-base sm:text-lg text-chocolate leading-relaxed">
            {currentSong.lyrics.map((line, idx) => (
              <p
                key={idx}
                className={idx === 0 || idx === currentSong.lyrics.length - 1 ? 'font-bold text-maroon' : ''}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Bottom Sentiment */}
          <div className="mt-8 pt-6 border-t border-gold/30 flex items-center justify-center gap-2 text-xs font-gujaratiSans text-chocolate-light/80">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            <span>ચિ. ડો. નેન્સી & ચિ. હર્ષલ ના શુભ વિવાહ નિમિત્તે</span>
          </div>
        </div>
      </div>
    </section>
  );
};
