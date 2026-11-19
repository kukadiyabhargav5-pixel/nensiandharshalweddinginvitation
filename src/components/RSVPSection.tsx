import React, { useState } from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { WEDDING_DATA } from '../data/weddingData';

export const RSVPSection: React.FC = () => {
  const [name, setName] = useState('');
  const [guestCount, setGuestCount] = useState('1');
  const [attendance, setAttendance] = useState('yes');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Selected verified host WhatsApp number (from Page 1 of PDF)
  const [selectedHostPhone, setSelectedHostPhone] = useState(WEDDING_DATA.hosts.phones[0]);

  const handleWhatsAppRSVP = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const attendanceText = attendance === 'yes' ? 'અમે સહપરિવાર જરૂર પધારીશું' : 'અમે આવી શકીશું નહીં, નવદંપતીને ખૂબ ખૂબ શુભકામનાઓ!';
    const guestText = guestCount ? ` (કુલ મહેમાનો: ${guestCount})` : '';
    const nameText = name.trim() ? `હું ${name}` : 'અમે';
    const msgText = message.trim() ? `\nસંદેશ: "${message.trim()}"` : '';

    const text = `નમસ્તે કુકડીયા પરિવાર! 🙏\nચિ. ડો. નેન્સી & ચિ. હર્ષલ ના લગ્નનું ડિજિટલ આમંત્રણ મળ્યું.\n${nameText} - ${attendanceText}${guestText}.\nOK!\n${msgText}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/91${selectedHostPhone}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#DFB76C', '#C5A46D', '#681F35', '#EBD8D5'],
    });
  };

  return (
    <section id="rsvp" className="py-20 px-4 bg-gradient-to-b from-[#F8F3E9] via-[#FAF4EA] to-[#F5ECE0] relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold/15 text-gold-dark text-xs uppercase tracking-widest font-serif mb-3">
            <span>ડિજિટલ આમંત્રણ & RSVP (Page 6)</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon">
            Digital RSVP & Attendance
          </h2>
          <p className="font-gujaratiSerif text-xl sm:text-2xl font-bold text-gold-dark mt-1">
            {WEDDING_DATA.rsvpNote.heading}
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-3" />
        </div>

        {/* Traditional Invitation Sentiment Card (Page 6 Message) */}
        <div className="p-8 sm:p-12 rounded-[32px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EC] to-[#F8F3E9] border-2 border-gold/50 shadow-royal-lg text-center mb-12 relative overflow-hidden">
          
          <div className="max-w-2xl mx-auto space-y-4 font-gujaratiSerif text-chocolate text-base sm:text-xl leading-relaxed">
            <p className="text-maroon font-bold text-lg sm:text-2xl">
              અમારી સુપુત્રી ચિ. ડો. નેન્સી ના લગ્ન નું આ ડિજિટલ આમંત્રણ ને રૂબરૂ મળ્યા તુલ્ય સમજી અમારે આંગણે આવેલ પ્રસંગમાં પધારશોજી.
            </p>

            <div className="py-2">
              <span className="inline-block px-5 py-1.5 rounded-full bg-gold/20 border border-gold text-maroon font-serif font-bold text-lg tracking-wider">
                અમારું આ આમંત્રણ આપને મળે એટલે તુરંત "OK" દ્વારા જવાબ આપવા વિનંતિ
              </span>
            </div>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-gold-dark font-serif block">
                આપના આગમનની પ્રતિક્ષામાં
              </span>
              <h3 className="font-gujaratiSerif text-2xl sm:text-4xl font-bold text-maroon mt-1">
                {WEDDING_DATA.rsvpNote.familySignature}
              </h3>
            </div>
          </div>
        </div>

        {/* Interactive RSVP Form with direct WhatsApp connectivity */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#FFFDF9] to-[#F8F3E9] border border-gold/40 shadow-royal max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="font-serif text-2xl font-bold text-maroon">
              Confirm Your Presence (હાજરીની ખાતરી કરો)
            </h3>
            <p className="font-gujaratiSans text-xs sm:text-sm text-chocolate-light/80 mt-1">
              આપનો જવાબ સીધો વોટ્સએપ (WhatsApp) પર કુકડીયા પરિવારને પહોંચશે.
            </p>
          </div>

          <form onSubmit={handleWhatsAppRSVP} className="space-y-5">
            {/* Host Phone Selection (verified numbers from Page 1) */}
            <div>
              <label className="block text-xs font-serif uppercase tracking-wider text-sage font-semibold mb-1.5">
                Select Family Contact (કોને મોકલવું છે?)
              </label>
              <div className="grid grid-cols-2 gap-3">
                {WEDDING_DATA.hosts.phones.map((phone, idx) => (
                  <button
                    type="button"
                    key={phone}
                    onClick={() => setSelectedHostPhone(phone)}
                    className={`py-2 px-3 rounded-xl border text-xs sm:text-sm font-gujaratiSans font-medium transition-all ${
                      selectedHostPhone === phone
                        ? 'border-maroon bg-maroon text-ivory-50 shadow-sm'
                        : 'border-gold/40 bg-ivory-50 text-chocolate hover:border-gold'
                    }`}
                  >
                    <span>{idx === 0 ? 'શ્રી જીતુભાઈ' : 'શ્રી ઉકાભાઈ / ભાર્ગવ'}</span>
                    <span className="block text-[11px] font-mono mt-0.5 opacity-90">+91 {phone}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Name */}
            <div>
              <label className="block text-xs font-serif uppercase tracking-wider text-sage font-semibold mb-1.5">
                Your Full Name (આપનું શુભ નામ) *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="દા.ત. રમેશભાઈ પટેલ"
                className="w-full px-4 py-3 rounded-xl bg-ivory-50 border border-gold/40 focus:border-maroon focus:ring-1 focus:ring-maroon text-chocolate text-sm font-gujaratiSans placeholder:text-chocolate-light/40 outline-none transition-all"
              />
            </div>

            {/* Number of Guests & Attendance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-sage font-semibold mb-1.5">
                  Total Guests (કુલ મહેમાનો)
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-ivory-50 border border-gold/40 focus:border-maroon focus:ring-1 focus:ring-maroon text-chocolate text-sm font-gujaratiSans outline-none transition-all cursor-pointer"
                >
                  <option value="1">૧ (એકલા)</option>
                  <option value="2">૨ (સજોડે)</option>
                  <option value="3">૩ (સપરિવાર)</option>
                  <option value="4">૪ (સપરિવાર)</option>
                  <option value="5+">૫ કે તેથી વધુ (સહકુટુંબ)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-sage font-semibold mb-1.5">
                  Attendance (આપ પધારી શકશો?)
                </label>
                <select
                  value={attendance}
                  onChange={(e) => setAttendance(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-ivory-50 border border-gold/40 focus:border-maroon focus:ring-1 focus:ring-maroon text-chocolate text-sm font-gujaratiSans outline-none transition-all cursor-pointer"
                >
                  <option value="yes">હા, અમે ચોક્કસ પધારીશું (Attending)</option>
                  <option value="regret">દિલગીર છીએ, આવી શકીશું નહીં (Cannot Attend)</option>
                </select>
              </div>
            </div>

            {/* Blessings Message */}
            <div>
              <label className="block text-xs font-serif uppercase tracking-wider text-sage font-semibold mb-1.5">
                Blessings / Wishes for the Couple (શુભેચ્છા સંદેશ)
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="નવદંપતી માટે આપના સ્નેહભર્યા આશીર્વાદ..."
                className="w-full px-4 py-3 rounded-xl bg-ivory-50 border border-gold/40 focus:border-maroon focus:ring-1 focus:ring-maroon text-chocolate text-sm font-gujaratiSans placeholder:text-chocolate-light/40 outline-none transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 hover:from-emerald-800 hover:to-emerald-800 text-white font-serif text-sm tracking-wider uppercase font-semibold shadow-royal hover:shadow-royal-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-emerald-200" />
                <span>Send WhatsApp RSVP ("OK" દ્વારા જવાબ આપો)</span>
              </button>
              <p className="text-center text-[11px] text-chocolate-light/70 mt-2 font-gujaratiSans">
                ક્લિક કરતાં જ આપના ફોનમાં વોટ્સએપ ખુલશે અને પૂર્વ-લખિત મેસેજ મોકલી શકાશે.
              </p>
            </div>
          </form>

          {submitted && (
            <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center animate-[fadeIn_0.5s_ease-out]">
              <div className="flex items-center justify-center gap-1.5 text-emerald-800 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>ધન્યવાદ! આપનો RSVP પ્રતિભાવ તૈયાર કરવામાં આવ્યો છે.</span>
              </div>
            </div>
          )}
        </div>

        {/* Authentic Namaste & Thank You Artwork from Page 6 */}
        <div className="mt-16 flex flex-col items-center text-center">
          <div className="relative group">
            <div className="absolute -inset-3 rounded-full bg-gold/15 blur-lg group-hover:bg-gold/30 transition-all" />
            <img
              src="/assets/thank-you-namaste.png"
              alt="Thank You Namaste"
              className="relative w-44 sm:w-56 h-auto object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>
          <p className="font-gujaratiSerif text-gold-dark font-bold text-lg sm:text-xl mt-4">
            || આપ શ્રીના આગમનની પ્રતિક્ષામાં - કુકડીયા પરિવાર ||
          </p>
        </div>
      </div>
    </section>
  );
};
