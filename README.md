# Ruang Belajar Bahasa Mandarin (汉语日常对话) 🇨🇳

Platform web belajar mandiri bahasa Mandarin praktis berbasis metode **Comprehensible Input (CI)** dan **Lexical Chunking**. Dilengkapi Hanzi (Aksara Mandarin), panduan Pinyin berwarna dengan penanda nada (*tone marks*), terjemahan bahasa Indonesia, bedah frasa kunci, dan audio native **Web Speech API (`zh-CN`)**.

Didesain dengan palet warna elegan **Deep Navy & Warm Amber**, tipografi tajam tanpa sudut bulat berlebih (*crisp aesthetic*), serta fitur interaktif untuk mempercepat pemahaman bahasa Mandarin sehari-hari.

---

## 🌟 Fitur Utama

- **Koleksi Dialog Nyata**:
  - 👋 Perkenalan Diri & Sapaan (`问候与自我介绍`)
  - ☕ Memesan Makanan & Minuman di Restoran / Kedai Teh (`餐厅点餐`)
  - 🛍️ Tawar Menawar & Berbelanja Pasar (`购物与砍价`)
  - 🚕 Bertanya Arah & Transportasi / Naik Taksi (`问路与出行`)
  - 🏨 Hotel & Akomodasi (`酒店住宿`)
  - 💼 Urusan Pekerjaan & Kantor (`工作与职场`)
  - 🚑 Situasi Darurat & Rumah Sakit (`就医与问诊`)
- **Pewarnaan Nada Pinyin 4 Warna**:
  - Melatih kepekaan 4 nada dasar Mandarin (Nada 1 Datar, Nada 2 Naik, Nada 3 Turun-Naik, Nada 4 Menukik Tegas).
- **Audio Web Speech API (`zh-CN`)**:
  - Dengarkan pengucapan per baris atau putar seluruh dialog secara sekuensial.
  - Mode Shadowing dengan jeda otomatis untuk latihan menirukan lafal.
- **Scaffolding Display Modes (Tangga Pemahaman)**:
  - 1. **Lengkap**: Hanzi + Pinyin + Arti Indonesia.
  - 2. **Hanzi Saja**: Uji kemampuan membaca aksara Tionghoa (hover untuk mengintip Pinyin).
  - 3. **Pinyin Saja**: Melatih pelafalan fonetik.
  - 4. **Blind Test**: Terjemahan Indonesia untuk mengingat Hanzi/Pinyin.
- **Bedah Karakter & Frasa Kunci (Word Breakdown)**:
  - Klik karakter/kata dalam dialog untuk melihat pinyin dan maknanya di laci detail seketika.
- **Buku Catatan Pribadi (⭐)**:
  - Tandai kalimat penting dan simpan secara lokal di `localStorage`.
- **Tema Dual**:
  - Mode *Deep Navy* dan *Warm Daylight Paper*.

---

## 🛠️ Teknologi

- **Vite**: Build tool modern
- **Vanilla JavaScript**: Cepat, ringan, dan tanpa dependensi rumit
- **Vanilla CSS**: Desain editorial modern dengan tipografi Serif Hanzi yang nyaman dibaca
- **Web Speech API**: Sintesis suara Mandarin (`zh-CN`)

---

## 🚀 Menjalankan Secara Lokal

1. **Clone repositori**:
   ```bash
   git clone https://github.com/voltakyy/belajar-mandarin.git
   cd belajar-mandarin
   ```

2. **Install dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan dev server**:
   ```bash
   npm run dev
   ```
   Buka browser di `http://localhost:5173/`

4. **Build untuk produksi**:
   ```bash
   npm run build
   ```

---

## 📝 Lisensi

MIT License © 2026 [voltakyy](https://github.com/voltakyy)
