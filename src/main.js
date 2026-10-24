import './style.css';
import { CONVERSATIONS, CATEGORIES, LEVELS } from './data/conversations.js';
import { METHOD_GUIDE } from './data/methodGuide.js';
import { speechService } from './services/speech.js';
import { storageService } from './services/storage.js';

// Application State
const state = {
  activeTab: 'dialogues', // 'dialogues' | 'patterns' | 'notebook' | 'method'
  selectedCategory: 'all',
  selectedLevel: 'Semua Level',
  searchQuery: '',
  currentConversationId: 'intro-01',
  currentStudyTab: 'chunks', // 'chunks' | 'drill' | 'culture' | 'notes'
  selectedSlotIndex: 0,
  activePlayingLineIndex: null,
  isSequentialPlaying: false,
  shadowingMode: false,
  roleplayMode: null, // null | 'A' | 'B'
  revealedLines: new Set(),
  inspectedToken: null,
  settings: storageService.getSettings(),
  bookmarks: storageService.getBookmarks(),
  completedIds: storageService.getCompleted()
};

// Initialize Speech Rate
speechService.setRate(state.settings.audioSpeed || 1.0);

// Apply Theme to Document
function applyTheme(theme) {
  document.body.className = theme === 'warm-light' ? 'theme-warm-light' : 'theme-navy';
}
applyTheme(state.settings.theme);

// Get current conversation object
function getCurrentConversation() {
  return CONVERSATIONS.find(c => c.id === state.currentConversationId) || CONVERSATIONS[0];
}

// Filter conversations based on category, level, and search query
function getFilteredConversations() {
  return CONVERSATIONS.filter(item => {
    // Kategori
    if (state.selectedCategory !== 'all' && item.category !== state.selectedCategory) {
      return false;
    }
    // Level
    if (state.selectedLevel !== 'Semua Level' && item.level !== state.selectedLevel) {
      return false;
    }
    // Search query
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q) ||
                         item.titleZh.includes(q) ||
                         item.titlePinyin.toLowerCase().includes(q);
      const matchDialog = item.dialogue.some(d => 
        d.zh.includes(q) ||
        d.pinyin.toLowerCase().includes(q) ||
        d.id.toLowerCase().includes(q)
      );
      const matchChunk = item.chunks.some(c => 
        c.phrase.includes(q) ||
        c.meaning.toLowerCase().includes(q)
      );
      return matchTitle || matchDialog || matchChunk;
    }
    return true;
  });
}

// Main Render Function
function renderApp() {
  const appEl = document.getElementById('app');
  if (!appEl) return;

  const currentConv = getCurrentConversation();
  const filteredList = getFilteredConversations();

  appEl.innerHTML = `
    <div class="app-container">
      <!-- TOP NAVIGATION BAR -->
      <header class="top-header">
        <div class="header-row">
          <div class="brand-wrapper">
            <div class="brand-seal">语</div>
            <div class="brand-title-group">
              <h1>
                Ruang Belajar Mandarin
                <span class="brand-badge">Metode CI & Chunking</span>
              </h1>
              <div class="brand-sub">Platform Pribadi Penguasaan Percakapan Sehari-hari</div>
            </div>
          </div>

          <div class="header-search">
            <svg class="search-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              id="globalSearchInput" 
              placeholder="Cari percakapan, Hanzi, Pinyin, atau arti Indonesia..." 
              value="${escapeHtml(state.searchQuery)}"
            />
          </div>

          <div class="header-actions">
            <div class="stat-pill" title="Total percakapan yang selesai dipelajari">
              <span>Selesai:</span>
              <strong>${state.completedIds.length}/${CONVERSATIONS.length}</strong>
            </div>
            <div class="stat-pill" title="Frasa yang disimpan ke buku catatan pribadi">
              <span>Catatan:</span>
              <strong>${state.bookmarks.length} Frasa</strong>
            </div>
            <button class="theme-toggle-btn" id="themeToggleBtn" title="Ganti Tema (Deep Navy / Warm Parchment)">
              ${state.settings.theme === 'warm-light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </header>

      <!-- SECONDARY TABS BAR -->
      <nav class="nav-tabs-bar">
        <div class="nav-tabs-inner">
          <button class="nav-tab-btn ${state.activeTab === 'dialogues' ? 'active' : ''}" data-tab="dialogues">
            <span>💬 Perpustakaan Percakapan</span>
            <span class="tab-badge">${CONVERSATIONS.length}</span>
          </button>
          <button class="nav-tab-btn ${state.activeTab === 'patterns' ? 'active' : ''}" data-tab="patterns">
            <span>🧩 Latihan Pola Kalimat</span>
            <span class="tab-badge">Drill Gym</span>
          </button>
          <button class="nav-tab-btn ${state.activeTab === 'notebook' ? 'active' : ''}" data-tab="notebook">
            <span>📓 Buku Catatan Pribadi</span>
            <span class="tab-badge">${state.bookmarks.length}</span>
          </button>
          <button class="nav-tab-btn ${state.activeTab === 'method' ? 'active' : ''}" data-tab="method">
            <span>📖 Panduan Metode Efisien</span>
            <span class="tab-badge">Wajib Baca</span>
          </button>
        </div>
      </nav>

      <!-- MAIN BODY CONTAINER -->
      <main class="main-wrapper">
        ${renderCurrentTabContent(currentConv, filteredList)}
      </main>

      <!-- FOOTER -->
      <footer class="app-footer">
        <div class="footer-content">
          <div>
            <span class="footer-seal">学而时习之，不亦说乎</span>
            — "Belajar dan mempraktikkannya berulang kali, bukankah itu membahagiakan?"
          </div>
          <div>Ruang Belajar Mandarin Pribadi • Fokus Penguasaan Nada, Pinyin & Aksara</div>
        </div>
      </footer>
    </div>
  `;

  attachEventListeners(currentConv);
}

// Render the active tab content
function renderCurrentTabContent(currentConv, filteredList) {
  if (state.activeTab === 'dialogues') {
    return renderDialoguesTab(currentConv, filteredList);
  } else if (state.activeTab === 'patterns') {
    return renderPatternsTab();
  } else if (state.activeTab === 'notebook') {
    return renderNotebookTab();
  } else if (state.activeTab === 'method') {
    return renderMethodGuideTab();
  }
  return '';
}

// ---------------- TAB 1: DIALOGUES ----------------
function renderDialoguesTab(currentConv, filteredList) {
  const isCompleted = state.completedIds.includes(currentConv.id);
  const displayClass = `mode-${state.settings.displayMode} ${state.settings.toneColoring ? 'tone-color-enabled' : ''}`;

  return `
    <div class="dialogue-workbench">
      <!-- SIDEBAR CATALOG -->
      <aside class="catalog-sidebar">
        <div class="catalog-header">
          <div class="catalog-title">Daftar Percakapan</div>
          <div style="font-size: 0.75rem; color: var(--text-dim);">${filteredList.length} Unit</div>
        </div>

        <!-- CATEGORY PILL BAR -->
        <div class="category-scroll-bar">
          ${CATEGORIES.map(cat => `
            <button 
              class="cat-pill-btn ${state.selectedCategory === cat.id ? 'active' : ''}" 
              data-cat="${cat.id}"
            >
              ${cat.icon} ${cat.label}
            </button>
          `).join('')}
        </div>

        <!-- CONVERSATIONS LIST -->
        <div class="catalog-list">
          ${filteredList.length === 0 ? `
            <div style="padding: 1.5rem 0.5rem; text-align: center; color: var(--text-muted); font-size: 0.8rem;">
              Tidak ada percakapan yang cocok dengan pencarian.
            </div>
          ` : filteredList.map(item => {
            const active = item.id === currentConv.id;
            const completed = state.completedIds.includes(item.id);
            const levelClass = item.level === 'Dasar' ? 'badge-dasar' : (item.level === 'Menengah' ? 'badge-menengah' : 'badge-praktis');
            return `
              <button class="catalog-card ${active ? 'active' : ''}" data-conv-id="${item.id}">
                <div class="card-top-row">
                  <span class="card-category-badge">${item.icon} ${item.category}</span>
                  <span class="card-level-badge ${levelClass}">${item.level}</span>
                </div>
                <div class="card-title-zh">${item.titleZh}</div>
                <div class="card-title-id">${item.title}</div>
                <div class="card-footer-meta">
                  <span>${item.dialogue.length} Kalimat</span>
                  ${completed ? '<span class="completed-check">✓ Dipelajari</span>' : '<span>Belum</span>'}
                </div>
              </button>
            `;
          }).join('')}
        </div>
      </aside>

      <!-- CENTRAL STUDY CANVAS -->
      <section class="study-canvas ${displayClass}">
        <!-- HERO CARD -->
        <div class="dialogue-hero-card">
          <div class="hero-meta-row">
            <div class="hero-badge-group">
              <span class="card-category-badge">${currentConv.icon} ${currentConv.category}</span>
              <span class="card-level-badge ${currentConv.level === 'Dasar' ? 'badge-dasar' : (currentConv.level === 'Menengah' ? 'badge-menengah' : 'badge-praktis')}">${currentConv.level}</span>
            </div>
            <button class="tool-btn ${isCompleted ? 'active' : ''}" id="toggleCompletedBtn">
              ${isCompleted ? '✓ Telah Dikuasai' : 'Tandai Selesai'}
            </button>
          </div>

          <div class="hero-titles">
            <div class="hero-zh-title">${currentConv.titleZh}</div>
            <div class="hero-pinyin-title">${currentConv.titlePinyin}</div>
            <div class="hero-id-title">${currentConv.title}</div>
          </div>

          <div class="hero-summary">${currentConv.summary}</div>
        </div>

        <!-- CONTROL TOOLBAR -->
        <div class="study-toolbar">
          <!-- AUDIO ACTIONS -->
          <div class="toolbar-group">
            <button class="tool-btn ${state.isSequentialPlaying ? 'primary' : ''}" id="playAllBtn">
              ${state.isSequentialPlaying ? '⏹ Berhenti' : '▶ Putar Percakapan'}
            </button>
            <button class="tool-btn ${state.shadowingMode ? 'active' : ''}" id="toggleShadowingBtn" title="Jeda 2.5 detik tiap kalimat untuk meniru pengucapan">
              🔁 Shadowing: ${state.shadowingMode ? 'Aktif' : 'Nonaktif'}
            </button>
            <button class="tool-btn" id="speedToggleBtn" title="Kecepatan Bicara">
              ⚡ Kecepatan: ${state.settings.audioSpeed}x
            </button>
          </div>

          <!-- DISPLAY SCAFFOLDING -->
          <div class="toolbar-group">
            <div class="segmented-control" title="Mode Tampilan Aksara & Pinyin">
              <button class="seg-btn ${state.settings.displayMode === 'full' ? 'active' : ''}" data-mode="full">Lengkap</button>
              <button class="seg-btn ${state.settings.displayMode === 'hanzi-only' ? 'active' : ''}" data-mode="hanzi-only" title="Sembunyikan pinyin untuk menguji daya ingat Hanzi">Hanzi Saja</button>
              <button class="seg-btn ${state.settings.displayMode === 'pinyin-only' ? 'active' : ''}" data-mode="pinyin-only" title="Hanya Pinyin dan Nada">Pinyin Saja</button>
              <button class="seg-btn ${state.settings.displayMode === 'blind' ? 'active' : ''}" data-mode="blind" title="Hanya terjemahan Indonesia, intip Mandarin jika ragu">Blind Test</button>
            </div>
            <button class="tool-btn ${state.settings.toneColoring ? 'active' : ''}" id="toggleToneColorBtn" title="Pewarnaan Nada 1-4">
              🎨 Warna Nada
            </button>
          </div>
        </div>

        <!-- INSPECTED WORD TOKEN DRAWER (IF CLICKED) -->
        ${state.inspectedToken ? `
          <div class="token-details-drawer">
            <div class="token-drawer-left">
              <span class="token-drawer-zh">${state.inspectedToken.zh}</span>
              <span class="token-drawer-pinyin">[${state.inspectedToken.pinyin}]</span>
              <span class="token-drawer-meaning">Arti: ${state.inspectedToken.id}</span>
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
              <button class="tool-btn" id="speakTokenBtn" style="padding: 0.3rem 0.6rem; font-size: 0.75rem;">
                🔊 Dengarkan
              </button>
              <button class="line-btn" id="closeTokenDrawerBtn" style="width: 24px; height: 24px;">✕</button>
            </div>
          </div>
        ` : ''}

        <!-- TRANSCRIPT SPEECH FLOW -->
        <div class="transcript-card">
          <div class="transcript-header">
            <span class="transcript-label">Transkrip Percakapan (Klik Kata untuk Bedah Makna)</span>
            ${state.settings.toneColoring ? `
              <div class="tone-legend">
                <span class="tone-indicator"><span class="dot-t1"></span> Nada 1 (Datar)</span>
                <span class="tone-indicator"><span class="dot-t2"></span> Nada 2 (Naik)</span>
                <span class="tone-indicator"><span class="dot-t3"></span> Nada 3 (Turun-Naik)</span>
                <span class="tone-indicator"><span class="dot-t4"></span> Nada 4 (Tegas)</span>
              </div>
            ` : ''}
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            ${currentConv.dialogue.map((line, idx) => {
              const isPlaying = state.activePlayingLineIndex === idx;
              const isSaved = storageService.isBookmarked(line.zh);
              const isRevealed = state.revealedLines.has(idx);

              return `
                <div class="speech-line ${isPlaying ? 'playing' : ''} ${isRevealed ? 'revealed' : ''}" id="line-${idx}">
                  <div class="speech-line-header">
                    <div class="speaker-tag">
                      <span class="role-avatar">${line.role}</span>
                      <span>${line.speaker}</span>
                    </div>
                    <div class="line-action-group">
                      <button class="line-btn play-line-btn" data-line-idx="${idx}" title="Putar Pengucapan Kalimat Ini">
                        🔊
                      </button>
                      <button class="line-btn bookmark-line-btn ${isSaved ? 'bookmarked' : ''}" data-line-idx="${idx}" title="${isSaved ? 'Hapus dari Catatan Pribadi' : 'Simpan ke Buku Catatan Pribadi'}">
                        ${isSaved ? '★' : '☆'}
                      </button>
                      ${state.settings.displayMode === 'blind' ? `
                        <button class="tool-btn reveal-line-btn" data-line-idx="${idx}" style="padding: 0.2rem 0.5rem; font-size: 0.7rem;">
                          ${isRevealed ? 'Sembunyikan' : 'Buka Hanzi'}
                        </button>
                      ` : ''}
                    </div>
                  </div>

                  <!-- HANZI ROW WITH CLICKABLE TOKENS -->
                  <div class="hanzi-row">
                    ${line.tokens ? line.tokens.map(tok => `
                      <span 
                        class="hanzi-word t${tok.tone || 5}" 
                        data-zh="${tok.zh}" 
                        data-pinyin="${tok.pinyin}" 
                        data-id="${tok.id}"
                        title="${tok.pinyin} (${tok.id})"
                      >${tok.zh}</span>
                    `).join('') : line.zh}
                  </div>

                  <!-- PINYIN ROW -->
                  <div class="pinyin-row">${line.pinyin}</div>

                  <!-- INDONESIAN TRANSLATION ROW -->
                  <div class="indo-row">${line.id}</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- STUDY TABS (CHUNKS, SUBSTITUTION DRILL, CULTURE, USER NOTES) -->
        <div class="study-tabs-container">
          <div class="panel-tab-nav">
            <button class="panel-tab-btn ${state.currentStudyTab === 'chunks' ? 'active' : ''}" data-study-tab="chunks">
              🧩 Frasa Kunci (Chunk Bank)
            </button>
            <button class="panel-tab-btn ${state.currentStudyTab === 'drill' ? 'active' : ''}" data-study-tab="drill">
              ⚡ Latihan Substitusi Pola
            </button>
            <button class="panel-tab-btn ${state.currentStudyTab === 'culture' ? 'active' : ''}" data-study-tab="culture">
              🏮 Catatan Budaya & Konteks
            </button>
            <button class="panel-tab-btn ${state.currentStudyTab === 'notes' ? 'active' : ''}" data-study-tab="notes">
              ✍️ Catatan Pribadi Anda
            </button>
          </div>

          <div class="panel-tab-content">
            ${renderStudyPanelContent(currentConv)}
          </div>
        </div>
      </section>
    </div>
  `;
}

// Render Study Panel Content inside Dialogue view
function renderStudyPanelContent(currentConv) {
  if (state.currentStudyTab === 'chunks') {
    return `
      <div class="chunks-grid">
        ${currentConv.chunks.map(chunk => `
          <div class="chunk-card">
            <div class="chunk-card-top">
              <span class="chunk-zh">${chunk.phrase}</span>
              <button class="line-btn speak-chunk-btn" data-zh="${chunk.phrase}" title="Dengarkan Pengucapan">🔊</button>
            </div>
            <div class="chunk-pinyin">${chunk.pinyin}</div>
            <div class="chunk-meaning">${chunk.meaning}</div>
            <div class="chunk-usage">${chunk.usage}</div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (state.currentStudyTab === 'drill') {
    const drill = currentConv.patternDrill;
    if (!drill) {
      return '<div style="color: var(--text-muted);">Tidak ada latihan pola untuk percakapan ini.</div>';
    }
    const currentSlot = drill.slots[state.selectedSlotIndex] || drill.slots[0];
    const previewZh = drill.template.replace(/\[.*?\]/, currentSlot.word.split(' (')[0]);
    const previewPinyin = drill.pinyinTemplate.replace(/\[.*?\]/, currentSlot.word.includes('(') ? currentSlot.word.split('(')[1].replace(')', '') : '');
    const previewId = drill.meaningTemplate.replace(/\[.*?\]/, currentSlot.translation);

    return `
      <div class="drill-box">
        <div class="drill-formula-card">
          <div class="formula-label">Pola Kalimat Siap Pakai (Formula Template)</div>
          <div class="formula-display-zh">${previewZh}</div>
          <div class="formula-display-pinyin">${previewPinyin}</div>
          <div class="formula-display-id">${previewId}</div>
          <div style="margin-top: 0.5rem;">
            <button class="tool-btn primary" id="speakDrillFormulaBtn" style="margin: 0 auto; display: inline-flex;">
              🔊 Ucapkan Kalimat Ini
            </button>
          </div>
        </div>

        <div class="drill-slots-section">
          <div class="slots-title">Pilih Variasi Kata untuk Dimasukkan ke Pola (Klik untuk Mengganti):</div>
          <div class="slots-grid">
            ${drill.slots.map((slot, sIdx) => `
              <button class="slot-item-btn ${state.selectedSlotIndex === sIdx ? 'selected' : ''}" data-slot-idx="${sIdx}">
                <span class="slot-item-zh">${slot.word}</span>
                <span class="slot-item-id">Arti: ${slot.translation}</span>
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  } else if (state.currentStudyTab === 'culture') {
    return `
      <div class="culture-box">
        <div style="font-weight: 700; color: var(--accent-terracotta); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>💡 Fakta Budaya & Nuansa Komunikasi:</span>
        </div>
        ${currentConv.culturalNote}
      </div>
    `;
  } else if (state.currentStudyTab === 'notes') {
    const savedNote = storageService.getUserNotes(currentConv.id);
    return `
      <div class="user-notes-box">
        <div style="font-size: 0.85rem; color: var(--text-muted);">
          Tuliskan catatan pribadi, kata baru yang ingin diingat, atau kesan Anda dari percakapan ini (tersimpan otomatis di browser):
        </div>
        <textarea class="user-notes-textarea" id="userNotesInput" placeholder="Contoh: Saya baru tahu kalau orang Tiongkok lebih sering pakai '老样子' daripada '我很好'...">
${escapeHtml(savedNote)}</textarea>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span class="notes-status-text" id="notesStatusText">Tersimpan otomatis</span>
          <button class="tool-btn" id="saveNoteManualBtn">Simpan Catatan</button>
        </div>
      </div>
    `;
  }
  return '';
}

// ---------------- TAB 2: PATTERNS (DRILL GYM) ----------------
function renderPatternsTab() {
  return `
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <div class="guide-hero">
        <h2>Gym Latihan Pola Kalimat (Sentence Chunk Drills)</h2>
        <p>
          Menurut metode <strong>Chunking</strong>, cara tercepat berbicara fasih bukanlah menghafal kamus kata per kata,
          melainkan menguasai pola kerangka kalimat (sentence frame) dan melatih substitusi kata dengan cepat di memori kerja.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(380px, 1fr)); gap: 1.25rem;">
        ${CONVERSATIONS.map(conv => {
          const drill = conv.patternDrill;
          if (!drill) return '';
          return `
            <div class="transcript-card" style="gap: 0.75rem;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="card-category-badge">${conv.icon} ${conv.category}</span>
                <button class="tool-btn" style="padding: 0.2rem 0.5rem; font-size: 0.7rem;" data-jump-conv="${conv.id}">
                  Buka Percakapan →
                </button>
              </div>

              <div style="font-family: var(--font-hanzi); font-size: 1.2rem; font-weight: 700; color: var(--accent-amber);">
                ${drill.template}
              </div>
              <div style="font-size: 0.85rem; color: var(--text-dim); font-family: var(--font-mono);">
                ${drill.pinyinTemplate}
              </div>
              <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic;">
                ${drill.meaningTemplate}
              </div>

              <div style="margin-top: 0.5rem; border-top: 1px dashed var(--border-subtle); padding-top: 0.5rem;">
                <div style="font-size: 0.75rem; font-weight: 600; color: var(--text-muted); margin-bottom: 0.35rem;">Variasi Pengisian (Slots):</div>
                <div style="display: flex; flex-direction: column; gap: 0.35rem;">
                  ${drill.slots.map(s => `
                    <div style="display: flex; justify-content: space-between; align-items: center; background-color: var(--bg-surface-elevated); padding: 0.35rem 0.6rem; border-radius: var(--radius-xs); font-size: 0.8rem;">
                      <span style="font-family: var(--font-hanzi); font-weight: 600;">${s.word}</span>
                      <span style="color: var(--text-dim); font-size: 0.75rem;">${s.translation}</span>
                      <button class="line-btn speak-custom-text-btn" data-text="${drill.template.replace(/\[.*?\]/, s.word.split(' (')[0])}" title="Dengarkan Kalimat Lengkap">🔊</button>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// ---------------- TAB 3: NOTEBOOK / BOOKMARKS ----------------
function renderNotebookTab() {
  const bookmarks = state.bookmarks;

  return `
    <div class="notebook-container">
      <div class="notebook-header">
        <div class="notebook-title">
          <h2>Buku Catatan Frasa Pribadi (Koleksi Favorit)</h2>
          <div style="font-size: 0.82rem; color: var(--text-muted);">
            Kumpulan kalimat dan frasa penting yang Anda tandai bintang (★) untuk diulang berkala.
          </div>
        </div>
        <div style="font-size: 0.85rem; color: var(--accent-amber); font-weight: 600;">
          Total: ${bookmarks.length} Frasa Tersimpan
        </div>
      </div>

      ${bookmarks.length === 0 ? `
        <div class="empty-state">
          <div class="empty-state-icon">⭐</div>
          <div style="font-size: 1.1rem; font-weight: 600; color: var(--text-main);">Belum ada frasa yang Anda simpan</div>
          <div style="max-width: 450px; font-size: 0.85rem; line-height: 1.5;">
            Saat mempelajari percakapan di tab "Perpustakaan Percakapan", klik tombol bintang (☆) pada kalimat yang ingin Anda kuasai untuk menyimpannya di sini.
          </div>
        </div>
      ` : `
        <div class="bookmarks-grid">
          ${bookmarks.map((b, idx) => `
            <div class="chunk-card" style="padding: 1rem;">
              <div class="chunk-card-top">
                <span class="speaker-tag">
                  <span class="role-avatar">${b.speaker || '文'}</span>
                  <span>${b.speaker || 'Frasa'}</span>
                </span>
                <div style="display: flex; gap: 0.35rem;">
                  <button class="line-btn speak-custom-text-btn" data-text="${b.zh}" title="Putar Audio">🔊</button>
                  <button class="line-btn remove-bookmark-btn" data-idx="${idx}" title="Hapus dari Catatan">✕</button>
                </div>
              </div>
              <div style="font-family: var(--font-hanzi); font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-top: 0.25rem;">
                ${b.zh}
              </div>
              <div style="font-size: 0.85rem; color: var(--accent-amber); font-family: var(--font-mono);">
                ${b.pinyin}
              </div>
              <div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic;">
                "${b.id}"
              </div>
            </div>
          `).join('')}
        </div>
      `}
    </div>
  `;
}

// ---------------- TAB 4: METHOD GUIDE ----------------
function renderMethodGuideTab() {
  const guide = METHOD_GUIDE;

  return `
    <div class="guide-container">
      <div class="guide-hero">
        <h2>${guide.title}</h2>
        <p>${guide.subtitle}</p>
      </div>

      <!-- PRINCIPLES GRID -->
      <div class="principles-grid">
        ${guide.principles.map(p => `
          <div class="principle-card">
            <div class="principle-top">
              <div class="principle-icon">${p.icon}</div>
              <div>
                <div class="principle-tag">${p.tag}</div>
                <div class="principle-title">${p.title}</div>
              </div>
            </div>
            <div class="principle-summary">${p.summary}</div>
            <div class="principle-points">
              ${p.points.map(pt => `
                <div class="point-item">
                  <strong>• ${pt.title}</strong>
                  ${pt.desc}
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- DAILY ROUTINE CARD -->
      <div class="routine-card">
        <div class="routine-title">Rekomendasi Rutinitas Belajar Efisien (40 Menit / Hari)</div>
        <div class="routine-steps-grid">
          ${guide.dailyRoutine.map((r, i) => `
            <div class="routine-step">
              <span class="routine-time-badge">Langkah ${i + 1} (${r.time})</span>
              <div class="routine-activity">${r.activity}</div>
              <div class="routine-detail">${r.detail}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// ---------------- ATTACH EVENT LISTENERS ----------------
function attachEventListeners(currentConv) {
  // Navigation Tabs Switch
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      speechService.stop();
      state.isSequentialPlaying = false;
      state.activePlayingLineIndex = null;
      state.activeTab = btn.getAttribute('data-tab');
      renderApp();
    });
  });

  // Global Search Input
  const searchInput = document.getElementById('globalSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderApp();
      // Keep focus on input after re-render
      const newInput = document.getElementById('globalSearchInput');
      if (newInput) {
        newInput.focus();
        newInput.setSelectionRange(newInput.value.length, newInput.value.length);
      }
    });
  }

  // Theme Toggle Button
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const nextTheme = state.settings.theme === 'warm-light' ? 'navy' : 'warm-light';
      state.settings = storageService.saveSettings({ theme: nextTheme });
      applyTheme(nextTheme);
      renderApp();
    });
  }

  // If in Dialogues tab
  if (state.activeTab === 'dialogues') {
    // Category pills filter
    document.querySelectorAll('.cat-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.selectedCategory = btn.getAttribute('data-cat');
        renderApp();
      });
    });

    // Conversation catalog cards click
    document.querySelectorAll('.catalog-card').forEach(card => {
      card.addEventListener('click', () => {
        speechService.stop();
        state.isSequentialPlaying = false;
        state.activePlayingLineIndex = null;
        state.currentConversationId = card.getAttribute('data-conv-id');
        state.selectedSlotIndex = 0;
        state.inspectedToken = null;
        state.revealedLines.clear();
        renderApp();
      });
    });

    // Mark as Completed Toggle
    const toggleCompletedBtn = document.getElementById('toggleCompletedBtn');
    if (toggleCompletedBtn) {
      toggleCompletedBtn.addEventListener('click', () => {
        state.completedIds = storageService.toggleCompleted(currentConv.id);
        renderApp();
      });
    }

    // Play All Sequential Audio
    const playAllBtn = document.getElementById('playAllBtn');
    if (playAllBtn) {
      playAllBtn.addEventListener('click', () => {
        if (state.isSequentialPlaying) {
          speechService.stop();
          state.isSequentialPlaying = false;
          state.activePlayingLineIndex = null;
          renderApp();
        } else {
          state.isSequentialPlaying = true;
          renderApp();
          speechService.playSequential(currentConv.dialogue, {
            shadowing: state.shadowingMode,
            onLineStart: (idx) => {
              state.activePlayingLineIndex = idx;
              // Highlight visual line
              document.querySelectorAll('.speech-line').forEach(el => el.classList.remove('playing'));
              const lineEl = document.getElementById(`line-${idx}`);
              if (lineEl) {
                lineEl.classList.add('playing');
                lineEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              }
            },
            onComplete: () => {
              state.isSequentialPlaying = false;
              state.activePlayingLineIndex = null;
              renderApp();
            }
          });
        }
      });
    }

    // Toggle Shadowing
    const toggleShadowingBtn = document.getElementById('toggleShadowingBtn');
    if (toggleShadowingBtn) {
      toggleShadowingBtn.addEventListener('click', () => {
        state.shadowingMode = !state.shadowingMode;
        renderApp();
      });
    }

    // Toggle Audio Speed (0.75x <-> 1.0x)
    const speedToggleBtn = document.getElementById('speedToggleBtn');
    if (speedToggleBtn) {
      speedToggleBtn.addEventListener('click', () => {
        const nextSpeed = state.settings.audioSpeed === 1.0 ? 0.75 : 1.0;
        state.settings = storageService.saveSettings({ audioSpeed: nextSpeed });
        speechService.setRate(nextSpeed);
        renderApp();
      });
    }

    // Display Scaffolding Segments (full | hanzi-only | pinyin-only | blind)
    document.querySelectorAll('.seg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-mode');
        state.settings = storageService.saveSettings({ displayMode: mode });
        renderApp();
      });
    });

    // Toggle Tone Coloring
    const toneColorBtn = document.getElementById('toggleToneColorBtn');
    if (toneColorBtn) {
      toneColorBtn.addEventListener('click', () => {
        const nextTone = !state.settings.toneColoring;
        state.settings = storageService.saveSettings({ toneColoring: nextTone });
        renderApp();
      });
    }

    // Play Individual Line Audio
    document.querySelectorAll('.play-line-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const lineIdx = parseInt(btn.getAttribute('data-line-idx'), 10);
        const line = currentConv.dialogue[lineIdx];
        if (line) {
          state.activePlayingLineIndex = lineIdx;
          document.querySelectorAll('.speech-line').forEach(el => el.classList.remove('playing'));
          const lineEl = document.getElementById(`line-${lineIdx}`);
          if (lineEl) lineEl.classList.add('playing');

          speechService.speakText(line.zh, {
            onEnd: () => {
              state.activePlayingLineIndex = null;
              if (lineEl) lineEl.classList.remove('playing');
            }
          });
        }
      });
    });

    // Bookmark Line Toggle
    document.querySelectorAll('.bookmark-line-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const lineIdx = parseInt(btn.getAttribute('data-line-idx'), 10);
        const line = currentConv.dialogue[lineIdx];
        if (line) {
          state.bookmarks = storageService.toggleBookmark({
            zh: line.zh,
            pinyin: line.pinyin,
            id: line.id,
            speaker: line.speaker
          });
          renderApp();
        }
      });
    });

    // Reveal Blind Line Button
    document.querySelectorAll('.reveal-line-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const lineIdx = parseInt(btn.getAttribute('data-line-idx'), 10);
        if (state.revealedLines.has(lineIdx)) {
          state.revealedLines.delete(lineIdx);
        } else {
          state.revealedLines.add(lineIdx);
        }
        renderApp();
      });
    });

    // Click on Word/Token to Inspect Breakdown
    document.querySelectorAll('.hanzi-word').forEach(el => {
      el.addEventListener('click', () => {
        const zh = el.getAttribute('data-zh');
        const pinyin = el.getAttribute('data-pinyin');
        const id = el.getAttribute('data-id');
        state.inspectedToken = { zh, pinyin, id };
        renderApp();
        // Speak the clicked token
        speechService.speakText(zh);
      });
    });

    // Close Token Drawer
    const closeTokenBtn = document.getElementById('closeTokenDrawerBtn');
    if (closeTokenBtn) {
      closeTokenBtn.addEventListener('click', () => {
        state.inspectedToken = null;
        renderApp();
      });
    }

    // Speak Inspected Token
    const speakTokenBtn = document.getElementById('speakTokenBtn');
    if (speakTokenBtn && state.inspectedToken) {
      speakTokenBtn.addEventListener('click', () => {
        speechService.speakText(state.inspectedToken.zh);
      });
    }

    // Study Tabs (chunks | drill | culture | notes)
    document.querySelectorAll('.panel-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.currentStudyTab = btn.getAttribute('data-study-tab');
        renderApp();
      });
    });

    // Speak Chunk Button
    document.querySelectorAll('.speak-chunk-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const zh = btn.getAttribute('data-zh');
        if (zh) speechService.speakText(zh);
      });
    });

    // Drill Slot Selector
    document.querySelectorAll('.slot-item-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const slotIdx = parseInt(btn.getAttribute('data-slot-idx'), 10);
        state.selectedSlotIndex = slotIdx;
        renderApp();
        // Auto speak the modified formula
        const drill = currentConv.patternDrill;
        if (drill && drill.slots[slotIdx]) {
          const word = drill.slots[slotIdx].word.split(' (')[0];
          const fullSentence = drill.template.replace(/\[.*?\]/, word);
          speechService.speakText(fullSentence);
        }
      });
    });

    // Speak Drill Formula Button
    const speakDrillBtn = document.getElementById('speakDrillFormulaBtn');
    if (speakDrillBtn && currentConv.patternDrill) {
      speakDrillBtn.addEventListener('click', () => {
        const drill = currentConv.patternDrill;
        const currentSlot = drill.slots[state.selectedSlotIndex] || drill.slots[0];
        const word = currentSlot.word.split(' (')[0];
        const fullSentence = drill.template.replace(/\[.*?\]/, word);
        speechService.speakText(fullSentence);
      });
    }

    // User Notes Auto-Save
    const notesInput = document.getElementById('userNotesInput');
    if (notesInput) {
      notesInput.addEventListener('input', () => {
        storageService.saveUserNote(currentConv.id, notesInput.value);
        const statusEl = document.getElementById('notesStatusText');
        if (statusEl) statusEl.textContent = 'Menyimpan...';
        setTimeout(() => {
          if (statusEl) statusEl.textContent = 'Tersimpan otomatis';
        }, 500);
      });
    }
  }

  // If in Patterns tab
  if (state.activeTab === 'patterns') {
    document.querySelectorAll('[data-jump-conv]').forEach(btn => {
      btn.addEventListener('click', () => {
        const convId = btn.getAttribute('data-jump-conv');
        state.currentConversationId = convId;
        state.activeTab = 'dialogues';
        state.currentStudyTab = 'drill';
        renderApp();
      });
    });
  }

  // If in Notebook tab
  if (state.activeTab === 'notebook') {
    document.querySelectorAll('.remove-bookmark-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        const item = state.bookmarks[idx];
        if (item) {
          state.bookmarks = storageService.toggleBookmark(item);
          renderApp();
        }
      });
    });
  }

  // Universal speak custom text buttons
  document.querySelectorAll('.speak-custom-text-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-text');
      if (text) speechService.speakText(text);
    });
  });
}

// Utility: HTML Escaper
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Start Application
renderApp();
