import React, { useState, useEffect, useRef } from 'react';
import { VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  autoStartTrigger?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoStartTrigger }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Only One Gujarati Wedding Song: કંકુ છાંટીને લખવી કંકોતરી
    const audio = new Audio('/assets/audio/kanku_chhanti_kankotri.mp3');
    audio.loop = true;
    audio.volume = 0.55;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  // When autoStartTrigger becomes true (e.g. user opens the royal palace doors), play smoothly
  useEffect(() => {
    if (autoStartTrigger && audioRef.current && !isPlaying) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay policy prevented playback, user can toggle manually
        });
    }
  }, [autoStartTrigger]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log('Audio playback prevented:', err));
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      <button
        onClick={togglePlay}
        className={`group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full border shadow-royal-lg backdrop-blur-md transition-all duration-300 cursor-pointer ${
          isPlaying
            ? 'bg-gradient-to-r from-maroon via-maroon-dark to-maroon text-ivory-50 border-gold shadow-gold-glow scale-105'
            : 'bg-ivory-50/95 text-chocolate border-gold/60 hover:border-gold hover:bg-ivory-100'
        }`}
        title={isPlaying ? 'લગ્ન ગીત થોભાવો (Pause)' : 'કંકુ છાંટીને લખવી કંકોતરી સાંભળો (Play)'}
      >
        {/* Equalizer animation bars when playing, or mute icon when paused */}
        {isPlaying ? (
          <div className="flex items-end gap-0.5 h-4 w-4">
            <span className="w-1 bg-gold-light rounded-full animate-[bounce_0.8s_ease-in-out_infinite] h-full" />
            <span className="w-1 bg-gold rounded-full animate-[bounce_1.1s_ease-in-out_infinite_0.2s] h-3/4" />
            <span className="w-1 bg-gold-light rounded-full animate-[bounce_0.9s_ease-in-out_infinite_0.4s] h-1/2" />
          </div>
        ) : (
          <VolumeX className="w-4 h-4 text-chocolate-light/70 group-hover:text-maroon transition-colors" />
        )}

        <div className="text-left font-serif text-xs">
          <span className="font-gujaratiSans font-bold block leading-tight">
            {isPlaying ? 'કંકુ છાંટીને લખવી કંકોતરી (ચાલુ)' : 'કંકુ છાંટીને લખવી કંકોતરી'}
          </span>
          <span className="text-[10px] text-gold-dark/95 block leading-none font-serif italic">
            ગુજરાતી લગ્ન ગીત • Gujarati Wedding Song
          </span>
        </div>

        {/* Outer glowing halo ring when playing */}
        {isPlaying && (
          <div className="absolute -inset-1 rounded-full border border-gold/40 animate-ping pointer-events-none opacity-30" />
        )}
      </button>
    </div>
  );
};
