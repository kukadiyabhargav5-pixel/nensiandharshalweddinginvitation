// Web Audio API ambient Indian wedding classical shehnai & tanpura generator
// Generates a soothing, meditative Indian classical melody (Raag Yaman / Bhupali notes)
// Completely self-contained, no external mp3 or network dependence needed.

class WeddingSoundPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private timer: number | null = null;
  private tanpuraOscs: OscillatorNode[] = [];

  // Raag Yaman / Bhupali scale frequencies (Sa, Re, Ga, Pa, Dha, Sa')
  private notes = [
    261.63, // C4 (Sa)
    293.66, // D4 (Re)
    329.63, // E4 (Ga)
    392.00, // G4 (Pa)
    440.00, // A4 (Dha)
    523.25, // C5 (Sa')
    587.33, // D5 (Re')
    659.25, // E5 (Ga')
  ];

  private melodySeq = [
    0, 1, 2, 3, 4, 3, 2, 1, 0,
    2, 3, 4, 5, 4, 3, 2, 0,
    3, 4, 5, 6, 7, 5, 4, 3, 2, 0
  ];

  private step = 0;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Soft Tanpura drone in the background
  private startTanpura() {
    if (!this.ctx || !this.masterGain) return;
    this.stopTanpura();

    const droneNotes = [130.81, 196.00, 261.63]; // C3, G3, C4
    droneNotes.forEach((freq) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      
      gain.gain.setValueAtTime(0.015, this.ctx.currentTime);
      osc.connect(gain);
      gain.connect(this.masterGain);
      
      osc.start();
      this.tanpuraOscs.push(osc);
    });
  }

  private stopTanpura() {
    this.tanpuraOscs.forEach(o => {
      try { o.stop(); o.disconnect(); } catch { /* noop */ }
    });
    this.tanpuraOscs = [];
  }

  // Play a gentle flute/shehnai-like note
  private playNote(freq: number, duration: number) {
    if (!this.ctx || !this.masterGain || !this.isPlaying) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Warm woodwind filter
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, this.ctx.currentTime);

    // Shehnai has rich harmonics, triangle + slight vibrato
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    // Subtle pitch vibrato
    const now = this.ctx.currentTime;
    osc.frequency.setTargetAtTime(freq * 1.006, now + 0.1, 0.2);
    osc.frequency.setTargetAtTime(freq, now + 0.3, 0.2);

    // Attack, Decay, Sustain, Release (soft envelope)
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.06, now + 0.25);
    gain.gain.exponentialRampToValueAtTime(0.03, now + duration * 0.7);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + duration + 0.1);
  }

  public play() {
    this.initContext();
    this.isPlaying = true;
    this.startTanpura();

    const loop = () => {
      if (!this.isPlaying) return;
      const noteIdx = this.melodySeq[this.step % this.melodySeq.length];
      const freq = this.notes[noteIdx];
      const duration = 1.2 + (this.step % 3 === 0 ? 0.6 : 0);
      
      this.playNote(freq, duration);
      this.step++;
      
      this.timer = window.setTimeout(loop, duration * 850);
    };

    loop();
  }

  public pause() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.stopTanpura();
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const weddingAudio = new WeddingSoundPlayer();

