import { useState } from 'react';
import { RoyalUnboxingDoor } from './components/RoyalUnboxingDoor';
import { HeroSection } from './components/HeroSection';
import { ScratchDateReveal } from './components/ScratchDateReveal';
import { WeddingCountdown } from './components/WeddingCountdown';
import { WeddingEvents } from './components/WeddingEvents';
import { WeddingSongsSection } from './components/WeddingSongsSection';
import { InvitationLetter } from './components/InvitationLetter';
import { FamilyBlessings } from './components/FamilyBlessings';
import { WeddingVenue } from './components/WeddingVenue';
import { RSVPSection } from './components/RSVPSection';
import { OriginalCardsSection } from './components/OriginalCardsSection';
import { OriginalCardsModal } from './components/OriginalCardsModal';
import { NaturalEnvironment } from './components/NaturalEnvironment';
import { MusicPlayer } from './components/MusicPlayer';
import { Footer } from './components/Footer';

export function App() {
  // Always open with the Door Unboxing first on load/refresh (No auto-skip!)
  const [introState, setIntroState] = useState<'door' | 'site'>('door');
  const [isCardsModalOpen, setIsCardsModalOpen] = useState(false);
  const [modalInitialPage, setModalInitialPage] = useState(1);
  const [musicTrigger, setMusicTrigger] = useState(false);

  const handleDoorOpen = () => {
    setIntroState('site');
    setMusicTrigger(true);
  };

  const handleSkipToSite = () => {
    setIntroState('site');
    setMusicTrigger(true);
  };

  const handleReplayDoor = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIntroState('door');
  };

  const handleExploreScroll = () => {
    const el = document.getElementById('events') || document.getElementById('scratch-date');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCardsModal = (page = 1) => {
    setModalInitialPage(page);
    setIsCardsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBF8F2] text-chocolate font-sans relative selection:bg-gold-light selection:text-maroon-dark overflow-x-hidden">
      
      {/* 1. LIVE NATURAL PALACE ENVIRONMENT (Flying birds, swaying foliage, falling petals, sunbeams) */}
      <NaturalEnvironment />

      {/* 2. PEACEFUL FLOATING WEDDING BGM MUSIC PLAYER */}
      <MusicPlayer autoStartTrigger={musicTrigger} />

      {/* 3. REALISTIC LUXURY HOME / HAVELI DOUBLE DOOR & LETTER UNBOXING ENTRANCE */}
      {introState === 'door' && (
        <RoyalUnboxingDoor onOpen={handleDoorOpen} onSkip={handleSkipToSite} />
      )}

      {/* 4. MAIN ROYAL WEDDING INVITATION EXPERIENCE (Unboxed Wedding Letter) */}
      <div className={`transition-opacity duration-1000 ${introState === 'site' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <main>
          {/* Page 1: Authentic First Page Cover (Lord Ganesha, Shubh Vivah, Couple, Date, Invitee Line, Nimantrak) */}
          <div id="hero">
            <HeroSection
              onExploreClick={handleExploreScroll}
              onOpenCardsModal={() => handleOpenCardsModal(1)}
            />
          </div>

          {/* Interactive 3D Scratch Date Reveal */}
          <div id="scratch-date">
            <ScratchDateReveal />
          </div>

          {/* Live Wedding Countdown */}
          <div id="countdown">
            <WeddingCountdown />
          </div>

          {/* Page 2: Anand no Avasar - Wedding Ceremonies (Mandap Muhurat, Jaan, Banquet, Hasta Melap) */}
          <div id="events">
            <WeddingEvents />
          </div>

          {/* Traditional Gujarati Lagan Geet (Wedding Songs) */}
          <div id="lagan-geet">
            <WeddingSongsSection />
          </div>

          {/* Page 4: Parinay Sanskar - Traditional Gujarati Invitation Card & Ruda Aashirwad */}
          <div id="invitation">
            <InvitationLetter
              onOpenCardsModal={() => handleOpenCardsModal(4)}
            />
          </div>

          {/* Pages 1, 3, 5: Family & Blessings (Mameru, Bhanej, Snehadhin, Aavkarva Aatur, Tahuko) */}
          <div id="family">
            <FamilyBlessings />
          </div>

          {/* Page 3: Wedding Venue & Directions (Kanhavan Farm, Google Maps, Copy Address) */}
          <div id="venue">
            <WeddingVenue />
          </div>

          {/* Embedded Original 6-Page Printed Invitation Cards Gallery */}
          <div id="original-cards-gallery">
            <OriginalCardsSection
              onOpenModal={(page) => handleOpenCardsModal(page)}
            />
          </div>

          {/* Page 6: Digital RSVP Experience & Thank You (WhatsApp response) */}
          <div id="rsvp">
            <RSVPSection />
          </div>
        </main>

        {/* Royal Footer with Replay Door / Unbox Letter option */}
        <Footer
          onReplayDoor={handleReplayDoor}
          onOpenCardsModal={() => handleOpenCardsModal(1)}
        />
      </div>

      {/* 5. ORIGINAL 6-PAGE CARDS FULLSCREEN MODAL VIEWER */}
      <OriginalCardsModal
        isOpen={isCardsModalOpen}
        initialPage={modalInitialPage}
        onClose={() => setIsCardsModalOpen(false)}
      />
    </div>
  );
}

export default App;
