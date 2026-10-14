// Web Audio API synthesized sound effects (Zero external audio dependencies)

class SoundManager {
  constructor() {
    this.muted = typeof window !== 'undefined' && localStorage.getItem('neuralis_sound_muted') === 'true';
    this.ctx = null;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    if (typeof window !== 'undefined') {
      localStorage.setItem('neuralis_sound_muted', this.muted);
    }
    if (!this.muted) {
      this.playBeep(880, 0.08, 'sine');
    }
    return this.muted;
  }

  isMuted() {
    return this.muted;
  }

  playBeep(freq = 440, duration = 0.08, type = 'sine', volume = 0.04) {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(volume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio context error or user has not interacted yet
    }
  }

  click() {
    this.playBeep(640, 0.04, 'sine', 0.03);
  }

  tab() {
    this.playBeep(720, 0.06, 'triangle', 0.035);
  }

  hover() {
    this.playBeep(520, 0.02, 'sine', 0.015);
  }

  openModal() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      [440, 660, 880].forEach((f, idx) => {
        setTimeout(() => this.playBeep(f, 0.08, 'sine', 0.025), idx * 40);
      });
    } catch {}
  }

  success() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      [523.25, 659.25, 783.99, 1046.5].forEach((f, idx) => {
        setTimeout(() => this.playBeep(f, 0.12, 'triangle', 0.035), idx * 60);
      });
    } catch {}
  }

  aiChime() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      [600, 800, 1200, 1600].forEach((f, idx) => {
        setTimeout(() => this.playBeep(f, 0.1, 'sine', 0.03), idx * 50);
      });
    } catch {}
  }
}

export const sounds = new SoundManager();
