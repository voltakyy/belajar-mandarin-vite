// Web Speech API Service untuk Pengucapan Aksara Mandarin Alami (zh-CN)

class SpeechService {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.voices = [];
    this.chineseVoice = null;
    this.rate = 1.0;
    this.isPlaying = false;
    this.currentUtterance = null;
    this.onEndCallback = null;

    if (this.synth) {
      this.initVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  initVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
    // Prioritaskan suara Mandarin Tiongkok Daratan (zh-CN / cmn-Hans-CN / Google 普通话)
    this.chineseVoice =
      this.voices.find(v => v.lang === 'zh-CN' || v.lang === 'cmn-Hans-CN') ||
      this.voices.find(v => v.lang.startsWith('zh-') || v.lang.startsWith('cmn')) ||
      this.voices.find(v => v.lang.includes('zh'));
  }

  setRate(rate) {
    this.rate = parseFloat(rate) || 1.0;
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    this.isPlaying = false;
    this.currentUtterance = null;
    if (this.onEndCallback) {
      this.onEndCallback();
      this.onEndCallback = null;
    }
  }

  speakText(text, options = {}) {
    if (!this.synth) {
      console.warn('SpeechSynthesis tidak didukung di browser ini.');
      if (options.onEnd) options.onEnd();
      return;
    }

    this.synth.cancel(); // Hentikan audio sebelumnya jika ada
    this.isPlaying = true;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    if (this.chineseVoice) {
      utterance.voice = this.chineseVoice;
    }
    utterance.rate = options.rate !== undefined ? options.rate : this.rate;
    utterance.pitch = options.pitch || 1.0;

    utterance.onend = () => {
      this.isPlaying = false;
      this.currentUtterance = null;
      if (options.onEnd) options.onEnd();
    };

    utterance.onerror = (e) => {
      console.error('Speech synthesis error:', e);
      this.isPlaying = false;
      this.currentUtterance = null;
      if (options.onError) options.onError(e);
      if (options.onEnd) options.onEnd();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  // Memutar seluruh percakapan baris per baris secara berurutan
  async playSequential(lines, options = {}) {
    this.stop();
    this.isPlaying = true;

    for (let i = 0; i < lines.length; i++) {
      if (!this.isPlaying) break; // Jika dihentikan di tengah jalan
      const line = lines[i];

      // Beri tanda baris yang sedang aktif diputar
      if (options.onLineStart) {
        options.onLineStart(i, line);
      }

      await new Promise(resolve => {
        this.speakText(line.zh, {
          rate: this.rate,
          onEnd: () => {
            // Beri jeda antar kalimat (lebih lama jika dalam mode Shadowing agar pengguna bisa mengulang)
            const pauseTime = options.shadowing ? 2500 : 900;
            setTimeout(resolve, pauseTime);
          },
          onError: () => resolve()
        });
      });

      if (options.onLineEnd) {
        options.onLineEnd(i, line);
      }
    }

    this.isPlaying = false;
    if (options.onComplete) {
      options.onComplete();
    }
  }
}

export const speechService = new SpeechService();
