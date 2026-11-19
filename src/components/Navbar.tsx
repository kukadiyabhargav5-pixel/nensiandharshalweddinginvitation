import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, BookOpen, DoorOpen } from 'lucide-react';
import { weddingAudio } from '../utils/audio';

interface NavbarProps {
  onReplayDoor: () => void;
  onOpenCardsModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayDoor, onOpenCardsModal }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const active = weddingAudio.toggle();
    setIsPlaying(active);
  };

  const navLinks = [
    { name: 'શુભ લગ્ન', href: '#hero' },
    { name: 'તારીખ અનાવરણ', href: '#scratch-date' },
    { name: 'માંગલિક પ્રસંગો', href: '#events' },
    { name: 'પરિણય સંસ્કાર', href: '#invitation' },
    { name: 'પરિવાર & આશીર્વાદ', href: '#family' },
    { name: 'લગ્ન સ્થળ', href: '#venue' },
    { name: 'RSVP', href: '#rsvp' },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-30 transition-all duration-300 px-3 sm:px-6 py-3">
      <div className="max-w-5xl mx-auto rounded-full bg-ivory-100/80 backdrop-blur-md border border-gold/40 shadow-royal px-4 sm:px-6 py-2.5 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full border border-gold bg-ivory-50 flex items-center justify-center text-maroon text-xs font-serif font-bold group-hover:scale-105 transition-transform">
            N&H
          </div>
          <div className="text-left">
            <span className="font-gujaratiSerif font-bold text-sm sm:text-base text-maroon block leading-tight">
              ડો. નેન્સી & હર્ષલ
            </span>
            <span className="font-serif italic text-[10px] text-gold-dark block leading-none">
              14 December 2026
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-5 text-xs font-gujaratiSans font-medium text-chocolate">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-maroon hover:underline underline-offset-4 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Action Icons: Music, Original Cards, Replay Door */}
        <div className="flex items-center gap-2">
          {/* Shehnai / Music Player Toggle */}
          <button
            onClick={toggleSound}
            className={`p-2 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 ${
              isPlaying
                ? 'bg-maroon text-ivory-50 border-maroon shadow-sm'
                : 'bg-ivory-50 text-gold-dark border-gold/40 hover:border-gold'
            }`}
            title={isPlaying ? 'Pause Shehnai Ambient' : 'Play Royal Shehnai Music'}
          >
            {isPlaying ? (
              <>
                <Volume2 className="w-4 h-4 animate-pulse" />
                <span className="text-[10px] font-gujaratiSans hidden sm:inline">શરણાઈ ચાલુ</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-chocolate-light" />
                <span className="text-[10px] font-gujaratiSans hidden sm:inline">સંગીત</span>
              </>
            )}
          </button>

          {/* Original 6-page cards modal button */}
          <button
            onClick={onOpenCardsModal}
            className="p-2 rounded-full bg-ivory-50 hover:bg-gold/15 text-maroon border border-gold/40 transition-colors cursor-pointer hidden sm:flex items-center gap-1 text-xs font-gujaratiSans font-semibold"
            title="View 6-Page Original Invitation Cards"
          >
            <BookOpen className="w-4 h-4 text-gold-dark" />
            <span className="hidden md:inline">અસલ કંકોત્રી</span>
          </button>

          {/* Replay Royal Door Button */}
          <button
            onClick={onReplayDoor}
            className="p-2 rounded-full bg-ivory-50 hover:bg-gold/15 text-gold-dark border border-gold/40 transition-colors cursor-pointer"
            title="Replay Royal Palace Door Animation"
          >
            <DoorOpen className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-ivory-50 text-maroon border border-gold/40"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-2 p-4 rounded-2xl bg-ivory-100/95 backdrop-blur-lg border border-gold/40 shadow-royal-lg animate-[fadeIn_0.3s_ease-out]">
          <div className="flex flex-col gap-3 font-gujaratiSans text-sm text-chocolate">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1.5 px-3 rounded-lg hover:bg-gold/15 hover:text-maroon font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-gold/30 flex justify-between items-center">
              <button
                onClick={() => {
                  onOpenCardsModal();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-1.5 text-xs text-maroon font-bold font-gujaratiSans py-1"
              >
                <BookOpen className="w-4 h-4 text-gold" />
                <span>અસલ કંકોત્રી (Original 6-Page PDF)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
