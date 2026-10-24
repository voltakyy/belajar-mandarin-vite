// Penyimpanan data lokal (LocalStorage) untuk Catatan Pribadi & Preferensi Belajar

const KEYS = {
  BOOKMARKS: 'mandarin_bookmarks_v1',
  COMPLETED: 'mandarin_completed_v1',
  USER_NOTES: 'mandarin_user_notes_v1',
  SETTINGS: 'mandarin_settings_v1'
};

export const storageService = {
  // Pengaturan UI/UX
  getSettings() {
    try {
      const data = localStorage.getItem(KEYS.SETTINGS);
      return data
        ? JSON.parse(data)
        : {
            theme: 'navy', // 'navy' (Deep Navy Dark) atau 'warm-light' (Warm Parchment Light)
            displayMode: 'full', // 'full' | 'hanzi-only' | 'pinyin-only' | 'blind'
            toneColoring: true, // Pewarnaan visual nada 1-4
            audioSpeed: 1.0 // 0.75 atau 1.0
          };
    } catch (e) {
      return {
        theme: 'navy',
        displayMode: 'full',
        toneColoring: true,
        audioSpeed: 1.0
      };
    }
  },

  saveSettings(settings) {
    try {
      const current = this.getSettings();
      const updated = { ...current, ...settings };
      localStorage.setItem(KEYS.SETTINGS, JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.error('Gagal menyimpan settings:', e);
    }
  },

  // Simpan Frasa / Baris Percakapan ke Buku Catatan Pribadi
  getBookmarks() {
    try {
      const data = localStorage.getItem(KEYS.BOOKMARKS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  toggleBookmark(item) {
    try {
      const list = this.getBookmarks();
      const index = list.findIndex(b => b.zh === item.zh);
      let updated;
      if (index >= 0) {
        updated = list.filter(b => b.zh !== item.zh);
      } else {
        updated = [
          {
            ...item,
            savedAt: new Date().toISOString()
          },
          ...list
        ];
      }
      localStorage.setItem(KEYS.BOOKMARKS, JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.error('Gagal update bookmark:', e);
      return [];
    }
  },

  isBookmarked(zh) {
    const list = this.getBookmarks();
    return list.some(b => b.zh === zh);
  },

  // Status percakapan yang sudah selesai dipelajari
  getCompleted() {
    try {
      const data = localStorage.getItem(KEYS.COMPLETED);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  toggleCompleted(conversationId) {
    try {
      const list = this.getCompleted();
      const index = list.indexOf(conversationId);
      let updated;
      if (index >= 0) {
        updated = list.filter(id => id !== conversationId);
      } else {
        updated = [...list, conversationId];
      }
      localStorage.setItem(KEYS.COMPLETED, JSON.stringify(updated));
      return updated;
    } catch (e) {
      return [];
    }
  },

  // Catatan manual pengguna untuk tiap percakapan
  getUserNotes(conversationId) {
    try {
      const notes = JSON.parse(localStorage.getItem(KEYS.USER_NOTES) || '{}');
      return notes[conversationId] || '';
    } catch (e) {
      return '';
    }
  },

  saveUserNote(conversationId, noteText) {
    try {
      const notes = JSON.parse(localStorage.getItem(KEYS.USER_NOTES) || '{}');
      notes[conversationId] = noteText;
      localStorage.setItem(KEYS.USER_NOTES, JSON.stringify(notes));
    } catch (e) {
      console.error('Gagal menyimpan catatan pengguna:', e);
    }
  }
};
