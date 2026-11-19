import React, { useState, useEffect } from 'react';
import { Clock, CalendarHeart } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const WeddingCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    // 14 December 2026, 07:00:00 AM IST
    const target = new Date(WEDDING_DATA.dates.isoTargetDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPast: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'DAYS', labelGu: 'દિવસો', value: timeLeft.days },
    { label: 'HOURS', labelGu: 'કલાક', value: timeLeft.hours },
    { label: 'MINUTES', labelGu: 'મિનિટ', value: timeLeft.minutes },
    { label: 'SECONDS', labelGu: 'સેકન્ડ', value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 px-4 bg-ivory-100 relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold-dark text-xs uppercase tracking-widest font-serif mb-4">
          <Clock className="w-3.5 h-3.5" />
          <span>Wedding Countdown • શગન ની ઘડીઓ</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon mb-2">
          Waiting for the Auspicious Day
        </h2>
        <p className="font-gujaratiSerif text-chocolate-light/80 text-sm sm:text-base max-w-xl mx-auto mb-10">
          ચિ. ડો. નેન્સી અને ચિ. હર્ષલ ના શુભ વિવાહના મંગલમય દિવસની આતુરતાપૂર્વક ગણતરી.
        </p>

        {timeLeft.isPast ? (
          <div className="p-8 rounded-3xl bg-gradient-to-r from-gold-light/30 via-ivory-50 to-gold-light/30 border border-gold/50 shadow-royal max-w-lg mx-auto">
            <CalendarHeart className="w-12 h-12 text-maroon mx-auto mb-3" />
            <h3 className="font-gujaratiSerif text-2xl font-bold text-maroon">
              શુભ લગ્નોત્સવ સંપન્ન થયો છે!
            </h3>
            <p className="font-serif italic text-chocolate-light mt-2">
              નવદંપતીને આપના આશીર્વાદ અને સ્નેહ સદાય અવિરત રહે.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {timeUnits.map((unit) => (
              <div
                key={unit.label}
                className="group relative p-5 sm:p-7 rounded-2xl bg-gradient-to-b from-[#FFFDF9] to-[#F8F3E9] border border-gold/40 shadow-royal hover:shadow-royal-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center"
              >
                {/* Gold corner ornaments */}
                <div className="absolute top-2 left-2 text-[10px] text-gold/40 group-hover:text-gold transition-colors">❖</div>
                <div className="absolute top-2 right-2 text-[10px] text-gold/40 group-hover:text-gold transition-colors">❖</div>

                {/* Digital serif number with flip feel */}
                <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-maroon tracking-tight leading-none">
                  {String(unit.value).padStart(2, '0')}
                </span>

                {/* English Label */}
                <span className="font-serif text-[11px] sm:text-xs uppercase tracking-[0.2em] text-gold-dark font-semibold mt-3">
                  {unit.label}
                </span>

                {/* Gujarati Label */}
                <span className="font-gujaratiSans text-xs text-chocolate-light/70 mt-0.5">
                  {unit.labelGu}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-xs font-serif text-chocolate-light/70 tracking-widest uppercase">
          Standard Time (IST) • 14 Dec 2026, 07:00 AM Onwards
        </div>
      </div>
    </section>
  );
};

