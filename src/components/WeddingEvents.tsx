import { Clock, Calendar, Users, CalendarPlus } from 'lucide-react';
import { WEDDING_DATA, type WeddingEvent } from '../data/weddingData';

export const WeddingEvents: React.FC = () => {
  // Generate Google Calendar Link for an event
  const createGoogleCalendarUrl = (event: WeddingEvent) => {
    // 14 Dec 2026 date base
    let startIso = '20261214T013000Z'; // 7:00 AM IST = 1:30 AM UTC
    let endIso = '20261214T043000Z';

    if (event.id === 'mandap-muhurat') {
      startIso = '20261214T013000Z';
      endIso = '20261214T043000Z';
    } else if (event.id === 'jaan-aagaman') {
      startIso = '20261214T123000Z'; // 6:00 PM IST = 12:30 PM UTC
      endIso = '20261214T133000Z';
    } else if (event.id === 'swaruchi-bhojan') {
      startIso = '20261214T130000Z'; // 6:30 PM IST = 1:00 PM UTC
      endIso = '20261214T160000Z';
    } else if (event.id === 'hast-melap') {
      startIso = '20261214T134500Z'; // 7:15 PM IST = 1:45 PM UTC
      endIso = '20261214T153000Z';
    }

    const title = encodeURIComponent(`${event.name} - ચિ. ડો. નેન્સી & ચિ. હર્ષલ શુભ વિવાહ`);
    const details = encodeURIComponent(
      `${event.description}\nસ્થળ: ${WEDDING_DATA.venue.fullAddress}\nસંપર્ક: 9998781120 / 8980090833`
    );
    const location = encodeURIComponent(WEDDING_DATA.venue.fullAddress);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startIso}/${endIso}&details=${details}&location=${location}`;
  };

  const getEventIcon = (type: WeddingEvent['iconType']) => {
    switch (type) {
      case 'mandap':
        return '🏛️';
      case 'jaan':
        return '🎺';
      case 'dinner':
        return '🍽️';
      case 'hastmelap':
        return '✨';
      default:
        return '🌸';
    }
  };

  return (
    <section id="events" className="py-20 px-4 bg-ivory-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold/15 text-gold-dark text-xs uppercase tracking-widest font-serif mb-3">
            <span>આનંદનો અવસર (Page 2)</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon">
            Wedding Ceremonies & Timeline
          </h2>
          <p className="font-gujaratiSerif text-gold-dark text-xl sm:text-2xl font-bold mt-1">
            માંગલિક પ્રસંગોની સમયાવલી
          </p>
          <p className="font-serif italic text-chocolate-light/80 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            સોમવાર, તા:- ૧૪/૧૨/૨૦૨૬ ના પવિત્ર દિને આયોજિત તમામ શુભ પ્રસંગોમાં આપનું સાદર સ્વાગત છે.
          </p>
          <div className="w-28 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central gold line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-8 -translate-x-1/2 w-0.5 bg-gradient-to-b from-gold-light via-gold to-maroon opacity-60" />

          <div className="space-y-10 sm:space-y-12">
            {WEDDING_DATA.events.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={event.id}
                  className={`relative flex flex-col md:flex-row items-center gap-6 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Badge (Center on desktop) */}
                  <div className="md:absolute md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full border-2 border-gold bg-[#FFFDF9] shadow-royal flex items-center justify-center z-10 text-2xl transition-transform duration-300 hover:scale-110">
                    <span>{getEventIcon(event.iconType)}</span>
                  </div>

                  {/* Card Content Container */}
                  <div className={`w-full md:w-[calc(50%-40px)] ${isEven ? 'md:pr-2' : 'md:pl-2'}`}>
                    <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EC] to-[#F7EFE3] border border-gold/40 shadow-royal hover:shadow-royal-lg hover:-translate-y-1 transition-all duration-300 relative group">
                      
                      {/* Event Step Ribbon */}
                      <div className="flex items-center justify-between border-b border-gold/20 pb-3 mb-4">
                        <span className="text-[11px] font-serif uppercase tracking-widest text-sage font-semibold">
                          Ceremony 0{index + 1}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-serif font-bold text-maroon bg-gold/15 px-3 py-1 rounded-full border border-gold/30">
                          <Clock className="w-3.5 h-3.5 text-gold-dark" />
                          <span>{event.time}</span>
                        </div>
                      </div>

                      {/* Main Gujarati Event Name */}
                      <h3 className="font-gujaratiSerif text-2xl sm:text-3xl font-bold text-maroon group-hover:text-gold-dark transition-colors">
                        || {event.name} ||
                      </h3>
                      <p className="font-serif italic text-gold-dark text-sm mb-3">
                        {event.nameEn} • {event.timeEn}
                      </p>

                      {/* Date & Location Note */}
                      <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs sm:text-sm text-chocolate mb-3 font-gujaratiSans">
                        <span className="flex items-center gap-1 font-medium text-maroon">
                          <Calendar className="w-3.5 h-3.5 text-gold" />
                          {event.date}
                        </span>
                        {event.locationNote && (
                          <span className="px-2.5 py-0.5 rounded-full bg-maroon/10 text-maroon font-bold text-xs border border-maroon/20">
                            {event.locationNote}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="font-gujaratiSans text-chocolate-light text-xs sm:text-sm leading-relaxed mb-4">
                        {event.description}
                      </p>

                      {/* Associated Family Members */}
                      {event.associatedFamily.length > 0 && (
                        <div className="pt-3 border-t border-gold/20">
                          <div className="flex items-center gap-1.5 text-xs text-sage font-semibold uppercase tracking-wider mb-1.5 font-serif">
                            <Users className="w-3.5 h-3.5" />
                            <span>પરિવારના સાનિધ્યમાં (With Family)</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {event.associatedFamily.map((fam, fIdx) => (
                              <span
                                key={fIdx}
                                className="font-gujaratiSerif text-xs sm:text-sm font-semibold text-maroon bg-white/80 px-2.5 py-1 rounded-lg border border-gold/30 shadow-xs"
                              >
                                {fam}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Add to Google Calendar Action */}
                      <div className="mt-5 pt-3 border-t border-gold/20 flex justify-end">
                        <a
                          href={createGoogleCalendarUrl(event)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-serif font-semibold text-gold-dark hover:text-maroon hover:underline transition-colors cursor-pointer"
                        >
                          <CalendarPlus className="w-3.5 h-3.5" />
                          <span>Add to Google Calendar</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
