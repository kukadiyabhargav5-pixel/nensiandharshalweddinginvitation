import React, { useState, useEffect, useRef } from 'react';
import { VolumeX, Music, ListMusic, Upload, Check, ChevronUp, ChevronDown } from 'lucide-react';

export interface WeddingTrack {
  id: string;
  name: string;
  gujaratiTitle: string;
  description: string;
  src: string;
}

export const WEDDING_TRACKS: WeddingTrack[] = [
  {
    id: 'sathiya',
    name: 'સાથિયા પુરાવો દ્વારે',
    gujaratiTitle: 'સાથિયા પુરાવો દ્વારે (લગ્ન ગીત)',
    description: 'પરંપરાગત માંગલિક ગુજરાતી લગ્ન ગીત',
    src: '/assets/audio/sathiya_puravo_dware.mp3',
  },
  {
    id: 'sona_watakadi',
    name: 'સોના વાટકડી રે કેસર ઘોળ્યા',
    gujaratiTitle: 'સોના વાટકડી રે (પીઠી લગ્ન ગીત)',
    description: 'કેસર-ચંદન પીઠી રસમનું માંગલિક ગીત',
    src: '/assets/audio/sona_watakadi_re.mp3',
  },
  {
    id: 'dholida',
    name: 'ઢોલીડા ઢોલ ના વગાડ',
    gujaratiTitle: 'ઢોલીડા ઢોલ ના વગાડ (માંડવા ગીત)',
    description: 'માંડવડે આનંદ ઉત્સવ અને જાન ગીત',
    src: '/assets/audio/dholida_dhol_na_vagad.mp3',
  },
  {
    id: 'saathi_saath',
    name: 'સાથી સાથ કદી ના છૂટે',
    gujaratiTitle: 'સાથી સાથ કદી ના છૂટે (મંગલ ફેરા)',
    description: 'હસ્તમેળાપ અને જીવનસાથી સ્નેહ ગીત',
    src: '/assets/audio/saathi_saath_kadi_na_chhute.mp3',
  },
  {
    id: 'mangal_dhoon',
    name: 'માંગલિક વિવાહ ધૂન',
    gujaratiTitle: 'માંગલિક વિવાહ ધૂન (શરણાઈ & ઢોલક)',
    description: 'પવિત્ર વૈદિક લગ્ન મહોત્સવ ધૂન',
    src: '/assets/audio/mangal_dhoon.mp3',
  },
  {
    id: 'shehnai',
    name: 'શાંત શરણાઈ સંગીત',
    gujaratiTitle: 'શાંત શરણાઈ સંગીત (Shehnai BGM)',
    description: 'શાંત શાસ્ત્રીય શરણાઈ વાદન',
    src: '/assets/audio/wedding_shehnai.mp3',
  },
];

interface MusicPlayerProps {
  autoStartTrigger?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoStartTrigger }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);
  const [customTrack, setCustomTrack] = useState<WeddingTrack | null>(null);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const tracks = customTrack ? [customTrack, ...WEDDING_TRACKS] : WEDDING_TRACKS;
  const currentTrack = tracks[currentTrackIndex] || tracks[0];

  // Initialize and update Audio element when currentTrack changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(currentTrack.src);
    audio.loop = true;
    audio.volume = 0.55;
    audioRef.current = audio;

    if (isPlaying) {
      audio.play().catch((err) => console.log('Playback error:', err));
    }

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [currentTrack.src]);

  // When autoStartTrigger becomes true (e.g. user opens the royal palace doors), play music smoothly
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

  const handleSelectTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.src = tracks[index].src;
      audioRef.current.play().catch((err) => console.log('Play track error:', err));
    }
    setIsPlaylistOpen(false);
  };

  const handleCustomFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      const newCustom: WeddingTrack = {
        id: 'user_custom',
        name: file.name.replace(/\.[^/.]+$/, ''),
        gujaratiTitle: 'તમારું મનપસંદ લગ્ન ગીત (Custom)',
        description: file.name,
        src: objectUrl,
      };
      setCustomTrack(newCustom);
      setCurrentTrackIndex(0);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.src = objectUrl;
        audioRef.current.play().catch((err) => console.log('Play custom error:', err));
      }
      setIsPlaylistOpen(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none flex flex-col items-end">
      
      {/* 1. PLAYLIST POPOVER DRAWER */}
      {isPlaylistOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-3xl bg-[#FFFDF9]/95 backdrop-blur-xl border-2 border-gold/60 shadow-royal-2xl p-4 text-chocolate animate-in fade-in slide-in-from-bottom-3 duration-300">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gold/30 pb-2.5 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-maroon/10 flex items-center justify-center text-maroon">
                <Music className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-gujaratiSerif text-sm font-bold text-maroon leading-tight">
                  ગુજરાતી લગ્ન ગીતોની સૂચિ
                </h4>
                <p className="font-serif text-[10px] text-gold-dark italic">
                  Gujarati Wedding Songs Playlist
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setIsPlaylistOpen(false)}
              className="text-xs px-2 py-0.5 rounded-full bg-gold/20 text-chocolate hover:bg-gold/40 cursor-pointer font-serif"
            >
              બંધ કરો ✕
            </button>
          </div>

          {/* Songs List */}
          <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
            {tracks.map((track, idx) => {
              const isSelected = currentTrackIndex === idx;
              return (
                <button
                  key={track.id}
                  onClick={() => handleSelectTrack(idx)}
                  className={`w-full text-left p-2.5 rounded-2xl transition-all flex items-center justify-between cursor-pointer border ${
                    isSelected
                      ? 'bg-gradient-to-r from-maroon/10 via-gold/15 to-transparent border-gold text-maroon font-semibold shadow-xs'
                      : 'hover:bg-ivory-100/80 border-transparent text-chocolate-light hover:text-chocolate'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0 pr-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 ${
                      isSelected ? 'bg-maroon text-ivory-50' : 'bg-gold/20 text-chocolate'
                    }`}>
                      {isSelected && isPlaying ? (
                        <span className="w-2 h-2 rounded-full bg-gold-light animate-ping" />
                      ) : (
                        idx + 1
                      )}
                    </div>
                    <div className="truncate">
                      <p className="font-gujaratiSans text-xs font-semibold truncate leading-tight">
                        {track.name}
                      </p>
                      <p className="font-serif text-[10px] text-chocolate-light/70 truncate">
                        {track.description}
                      </p>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="shrink-0 flex items-center gap-1 text-maroon">
                      <Check className="w-4 h-4" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Upload Custom Lagan Geet */}
          <div className="mt-3 pt-2.5 border-t border-gold/30">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleCustomFileUpload}
              accept="audio/*"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-full bg-gold/15 hover:bg-gold/30 text-maroon font-gujaratiSans text-xs font-semibold transition-colors cursor-pointer border border-gold/40"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>તમારું મનપસંદ લગ્ન ગીત ઉમેરો (Upload MP3)</span>
            </button>
          </div>
        </div>
      )}

      {/* 2. MAIN BOTTOM PILL BUTTON */}
      <div className="flex items-center gap-1.5 shadow-royal-lg rounded-full bg-ivory-50/95 backdrop-blur-md border-2 border-gold/60 p-1">
        
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className={`group flex items-center gap-2.5 px-3.5 py-2 rounded-full transition-all duration-300 cursor-pointer ${
            isPlaying
              ? 'bg-gradient-to-r from-maroon via-maroon-dark to-maroon text-ivory-50 shadow-md scale-102'
              : 'bg-ivory-100 text-chocolate hover:bg-ivory-200'
          }`}
          title={isPlaying ? 'લગ્ન ગીત થોભાવો (Pause)' : 'ગુજરાતી લગ્ન ગીત સાંભળો (Play)'}
        >
          {/* Animated Equalizer or Speaker */}
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
              {isPlaying ? 'ગુજરાતી લગ્ન ગીત ચાલુ' : 'ગુજરાતી લગ્ન ગીત સાંભળો'}
            </span>
            <span className="text-[10px] text-gold-dark/95 block leading-none font-gujaratiSans truncate max-w-[150px] sm:max-w-[200px]">
              {currentTrack.name}
            </span>
          </div>
        </button>

        {/* Playlist Drawer Toggle Button */}
        <button
          onClick={() => setIsPlaylistOpen(!isPlaylistOpen)}
          className={`p-2 rounded-full transition-colors cursor-pointer border ${
            isPlaylistOpen
              ? 'bg-maroon text-ivory-50 border-maroon'
              : 'bg-gold/15 text-maroon hover:bg-gold/30 border-gold/40'
          }`}
          title="ગીત બદલો / Playlist"
        >
          {isPlaylistOpen ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <div className="flex items-center gap-1">
              <ListMusic className="w-4 h-4" />
              <ChevronUp className="w-3 h-3 text-gold-dark" />
            </div>
          )}
        </button>

      </div>
    </div>
  );
};
