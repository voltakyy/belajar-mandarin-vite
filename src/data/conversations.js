// Database Percakapan Mandarin Sehari-hari Lengkap
// Dibuat berdasarkan prinsip Comprehensible Input (CI) dan Chunking
// Setiap percakapan memiliki Hanzi, Pinyin lengkap dengan tanda nada, terjemahan Indonesia,
// pemecahan kata (chunks), latihan substitusi pola kalimat, dan catatan budaya.

export const CONVERSATIONS = [
  // ================= TEMA 1: PERKENALAN & MENYAPA =================
  {
    id: 'intro-01',
    category: 'Perkenalan',
    level: 'Dasar',
    title: 'Sapaan Hangat & Menanyakan Kabar',
    titleZh: '问候与近况',
    titlePinyin: 'Wènhòu yǔ jìnkuàng',
    icon: '👋',
    summary: 'Percakapan sehari-hari saat bertemu teman lama atau kenalan di jalan.',
    dialogue: [
      {
        speaker: '林伟 (Lin Wei)',
        role: 'A',
        zh: '你好，好久不见！你最近怎么样？',
        pinyin: 'Nǐ hǎo, hǎojiǔ bù jiàn! Nǐ zuìjìn zěnmeyàng?',
        id: 'Halo, sudah lama tidak berjumpa! Bagaimana kabarmu belakangan ini?',
        tokens: [
          { zh: '你好', pinyin: 'nǐ hǎo', id: 'halo', tone: 3 },
          { zh: '好久不见', pinyin: 'hǎojiǔ bù jiàn', id: 'sudah lama tidak bertemu', tone: 3 },
          { zh: '你', pinyin: 'nǐ', id: 'kamu', tone: 3 },
          { zh: '最近', pinyin: 'zuìjìn', id: 'akhir-akhir ini / belakangan ini', tone: 4 },
          { zh: '怎么样', pinyin: 'zěnmeyàng', id: 'bagaimana', tone: 3 }
        ]
      },
      {
        speaker: '王明 (Wang Ming)',
        role: 'B',
        zh: '挺好的，工作有点忙，你呢？',
        pinyin: 'Tǐng hǎo de, gōngzuò yǒudiǎn máng, nǐ ne?',
        id: 'Cukup baik, kerjaan agak sibuk, kalau kamu bagaimana?',
        tokens: [
          { zh: '挺好的', pinyin: 'tǐng hǎo de', id: 'cukup baik / lumayan bagus', tone: 3 },
          { zh: '工作', pinyin: 'gōngzuò', id: 'pekerjaan', tone: 1 },
          { zh: '有点', pinyin: 'yǒudiǎn', id: 'agak / sedikit', tone: 3 },
          { zh: '忙', pinyin: 'máng', id: 'sibuk', tone: 2 },
          { zh: '你呢', pinyin: 'nǐ ne', id: 'kalau kamu?', tone: 3 }
        ]
      },
      {
        speaker: '林伟 (Lin Wei)',
        role: 'A',
        zh: '我还不错，老样子。今天有空一起喝杯咖啡吗？',
        pinyin: 'Wǒ hái bùcuò, lǎoyàngzi. Jīntiān yǒukòng yìqǐ hē bēi kāfēi ma?',
        id: 'Aku juga lumayan, seperti biasa. Hari ini ada waktu luang untuk ngopi bareng?',
        tokens: [
          { zh: '我还不错', pinyin: 'wǒ hái bùcuò', id: 'aku lumayan / tidak buruk', tone: 3 },
          { zh: '老样子', pinyin: 'lǎoyàngzi', id: 'seperti biasa / sama saja', tone: 3 },
          { zh: '今天', pinyin: 'jīntiān', id: 'hari ini', tone: 1 },
          { zh: '有空', pinyin: 'yǒukòng', id: 'ada waktu luang', tone: 3 },
          { zh: '一起', pinyin: 'yìqǐ', id: 'bersama-sama', tone: 3 },
          { zh: '喝杯咖啡', pinyin: 'hē bēi kāfēi', id: 'minum secangkir kopi', tone: 1 },
          { zh: '吗', pinyin: 'ma', id: 'apakah (partikel tanya)', tone: 5 }
        ]
      },
      {
        speaker: '王明 (Wang Ming)',
        role: 'B',
        zh: '好啊！前面就有一家不错的咖啡馆。',
        pinyin: 'Hǎo a! Qiánmiàn jiù yǒu yì jiā bùcuò de kāfēiguǎn.',
        id: 'Boleh banget! Di depan sana ada kafe yang lumayan enak.',
        tokens: [
          { zh: '好啊', pinyin: 'hǎo a', id: 'oke / baiklah!', tone: 3 },
          { zh: '前面', pinyin: 'qiánmiàn', id: 'di depan', tone: 2 },
          { zh: '就有一家', pinyin: 'jiù yǒu yì jiā', id: 'langsung ada sebuah (toko)', tone: 4 },
          { zh: '不错的', pinyin: 'bùcuò de', id: 'yang bagus / enak', tone: 4 },
          { zh: '咖啡馆', pinyin: 'kāfēiguǎn', id: 'kafe / kedai kopi', tone: 1 }
        ]
      }
    ],
    chunks: [
      {
        phrase: '好久不见',
        pinyin: 'hǎojiǔ bù jiàn',
        meaning: 'Sudah lama tidak berjumpa',
        usage: 'Ungkapan wajib saat bertemu kenalan setelah sekian lama tidak kontak.'
      },
      {
        phrase: '你最近怎么样？',
        pinyin: 'Nǐ zuìjìn zěnmeyàng?',
        meaning: 'Bagaimana kabarmu belakangan ini?',
        usage: 'Jauh lebih natural dibanding menanyakan "Nǐ hǎo ma?" berulang-ulang.'
      },
      {
        phrase: '挺好的',
        pinyin: 'tǐng hǎo de',
        meaning: 'Lumayan baik / cukup baik',
        usage: 'Pola "挺...的" (tǐng... de) sangat sering dipakai sehari-hari untuk arti "cukup / lumayan".'
      },
      {
        phrase: '老样子',
        pinyin: 'lǎoyàngzi',
        meaning: 'Seperti biasa / begitulah',
        usage: 'Dipakai saat kondisi hidup atau rutinitas berjalan santai tanpa perubahan besar.'
      },
      {
        phrase: '有空...吗？',
        pinyin: 'yǒukòng... ma?',
        meaning: 'Ada waktu luang untuk... kah?',
        usage: 'Pola paling sopan dan santai untuk mengajak seseorang melakukan sesuatu.'
      }
    ],
    patternDrill: {
      template: '有空一起 [Kegiatan] 吗？',
      pinyinTemplate: 'Yǒukòng yìqǐ [Kegiatan] ma?',
      meaningTemplate: 'Ada waktu luang untuk [Kegiatan] bareng nggak?',
      slots: [
        { word: '喝杯咖啡 (hē bēi kāfēi)', translation: 'minum secangkir kopi' },
        { word: '吃午饭 (chī wǔfàn)', translation: 'makan siang' },
        { word: '看电影 (kàn diànyǐng)', translation: 'nonton film bioskop' },
        { word: '去散步 (qù sànbù)', translation: 'jalan-jalan santai' },
        { word: '聊聊天 (liáo liáotiān)', translation: 'ngobrol-ngobrol' }
      ]
    },
    culturalNote: 'Di budaya Tiongkok modern, sapaan "Nǐ hǎo ma?" (Apa kabar?) jarang dipakai antar teman akrab karena terdengar terlalu formal seperti buku pelajaran zaman dulu. Native speakers lebih sering bertanya "你最近怎么样？" (Zuìjìn zěnmeyàng?), "忙什么呢？" (Máng shénme ne? - Lagi sibuk apa?), atau "吃了吗？" (Chī le ma? - Sudah makan belum?).'
  },

  {
    id: 'intro-02',
    category: 'Perkenalan',
    level: 'Dasar',
    title: 'Perkenalan Diri, Asal Negara & Profesi',
    titleZh: '自我介绍与职业',
    titlePinyin: 'Zìwǒ jièshào yǔ zhíyè',
    icon: '🤝',
    summary: 'Mengenalkan diri secara jelas, menyebutkan negara asal Indonesia, dan profesi pekerjaan.',
    dialogue: [
      {
        speaker: '李强 (Li Qiang)',
        role: 'A',
        zh: '你好！我叫李强，很高兴认识你。',
        pinyin: 'Nǐ hǎo! Wǒ jiào Lǐ Qiáng, hěn gāoxìng rènshí nǐ.',
        id: 'Halo! Nama saya Li Qiang, senang berkenalan denganmu.',
        tokens: [
          { zh: '你好', pinyin: 'nǐ hǎo', id: 'halo', tone: 3 },
          { zh: '我叫', pinyin: 'wǒ jiào', id: 'nama saya dipanggil', tone: 3 },
          { zh: '很高兴', pinyin: 'hěn gāoxìng', id: 'sangat senang', tone: 3 },
          { zh: '认识你', pinyin: 'rènshí nǐ', id: 'mengenalmu', tone: 4 }
        ]
      },
      {
        speaker: '安迪 (Andi)',
        role: 'B',
        zh: '你好李强！我叫安迪，我也很高兴认识你。',
        pinyin: 'Nǐ hǎo Lǐ Qiáng! Wǒ jiào Āndí, wǒ yě hěn gāoxìng rènshí nǐ.',
        id: 'Halo Li Qiang! Nama saya Andi, saya juga sangat senang berkenalan denganmu.',
        tokens: [
          { zh: '我叫', pinyin: 'wǒ jiào', id: 'nama saya', tone: 3 },
          { zh: '我也', pinyin: 'wǒ yě', id: 'saya juga', tone: 3 },
          { zh: '很高兴', pinyin: 'hěn gāoxìng', id: 'sangat senang', tone: 3 },
          { zh: '认识你', pinyin: 'rènshí nǐ', id: 'mengenalmu', tone: 4 }
        ]
      },
      {
        speaker: '李强 (Li Qiang)',
        role: 'A',
        zh: '你的中文说得真棒！你是哪国人？',
        pinyin: 'Nǐ de zhōngwén shuō de zhēn bàng! Nǐ shì nǎ guó rén?',
        id: 'Bahasa Mandarinmu bicaranya hebat sekali! Kamu orang negara mana?',
        tokens: [
          { zh: '你的', pinyin: 'nǐ de', id: 'kepunyaanmu', tone: 3 },
          { zh: '中文', pinyin: 'zhōngwén', id: 'bahasa Mandarin', tone: 1 },
          { zh: '说得', pinyin: 'shuō de', id: 'bicaranya (tingkat)', tone: 1 },
          { zh: '真棒', pinyin: 'zhēn bàng', id: 'hebat sekali / keren', tone: 1 },
          { zh: '你是', pinyin: 'nǐ shì', id: 'kamu adalah', tone: 3 },
          { zh: '哪国人', pinyin: 'nǎ guó rén', id: 'orang negara mana', tone: 3 }
        ]
      },
      {
        speaker: '安迪 (Andi)',
        role: 'B',
        zh: '谢谢夸奖！我是印尼人，现在在雅加达做程序员。',
        pinyin: 'Xièxiè kuājiǎng! Wǒ shì Yìnní rén, xiànzài zài Yǎjiādá zuò chéngxùyuán.',
        id: 'Terima kasih atas pujiannya! Saya orang Indonesia, sekarang di Jakarta bekerja sebagai programmer.',
        tokens: [
          { zh: '谢谢夸奖', pinyin: 'xièxiè kuājiǎng', id: 'terima kasih atas pujiannya', tone: 4 },
          { zh: '我是', pinyin: 'wǒ shì', id: 'saya adalah', tone: 3 },
          { zh: '印尼人', pinyin: 'Yìnní rén', id: 'orang Indonesia', tone: 4 },
          { zh: '现在', pinyin: 'xiànzài', id: 'sekarang', tone: 4 },
          { zh: '在雅加达', pinyin: 'zài Yǎjiādá', id: 'di Jakarta', tone: 4 },
          { zh: '做程序员', pinyin: 'zuò chéngxùyuán', id: 'bekerja sebagai programmer', tone: 4 }
        ]
      }
    ],
    chunks: [
      {
        phrase: '很高兴认识你',
        pinyin: 'hěn gāoxìng rènshí nǐ',
        meaning: 'Senang berkenalan denganmu',
        usage: 'Frasa standar saat pertama kali berkenalan dengan orang baru.'
      },
      {
        phrase: '说得真棒！',
        pinyin: 'shuō de zhēn bàng!',
        meaning: 'Bicaranya keren sekali!',
        usage: 'Pola "说得 + [kata sifat]" dipakai untuk memuji kemampuan bicara seseorang.'
      },
      {
        phrase: '谢谢夸奖',
        pinyin: 'xièxiè kuājiǎng',
        meaning: 'Terima kasih atas pujiannya',
        usage: 'Balasan yang sopan dan natural saat orang lokal Tiongkok memuji bahasa Mandarinmu.'
      },
      {
        phrase: '我是...人',
        pinyin: 'Wǒ shì... rén',
        meaning: 'Saya adalah orang [nama negara/kota]',
        usage: 'Contoh: 印尼人 (Yìnní rén = orang Indonesia).'
      },
      {
        phrase: '在...做...',
        pinyin: 'zài... zuò...',
        meaning: 'Di [tempat] bekerja sebagai [profesi]',
        usage: 'Pola praktis untuk menerangkan lokasi tinggal dan bidang pekerjaan.'
      }
    ],
    patternDrill: {
      template: '我是印尼人，在 [Kota] 做 [Profesi]。',
      pinyinTemplate: 'Wǒ shì Yìnní rén, zài [Kota] zuò [Profesi].',
      meaningTemplate: 'Saya orang Indonesia, di [Kota] bekerja sebagai [Profesi].',
      slots: [
        { word: '雅加达 (Yǎjiādá) / 程序员 (chéngxùyuán)', translation: 'Jakarta / programmer' },
        { word: '泗水 (Sìshuǐ) / 老师 (lǎoshī)', translation: 'Surabaya / guru' },
        { word: '万隆 (Wànlóng) / 设计师 (shèjìshī)', translation: 'Bandung / desainer' },
        { word: '巴厘岛 (Bālǐ dǎo) / 经理 (jīnglǐ)', translation: 'Bali / manajer' },
        { word: '北京 (Běijīng) / 学生 (xuésheng)', translation: 'Beijing / pelajar' }
      ]
    },
    culturalNote: 'Orang Tiongkok sangat senang memberi pujian ("Pinyinmu bagus!", "Mandarinmu fasih!"). Menjawab dengan "哪里哪里" (Nǎlǐ nǎlǐ - Ah belum seberapa) terdengar sangat tradisional, sedangkan menjawab "谢谢夸奖" (Xièxiè kuājiǎng) atau "还在学习呢" (Hái zài xuéxí ne - Masih terus belajar kok) adalah respon modern yang sangat disukai.'
  },

  {
    id: 'intro-03',
    category: 'Perkenalan',
    level: 'Dasar',
    title: 'Bertukar Kontak WeChat & Scan QR',
    titleZh: '加微信与扫码',
    titlePinyin: 'Jiā Wēixìn yǔ sǎomǎ',
    icon: '📱',
    summary: 'Bagaimana bertukar kontak WeChat (aplikasi wajib di Tiongkok) dengan scan barcode.',
    dialogue: [
      {
        speaker: '王明 (Wang Ming)',
        role: 'A',
        zh: '聊得真开心！我们加个微信吧，方便以后联系。',
        pinyin: 'Liáo de zhēn kāixīn! Wǒmen jiā ge Wēixìn ba, fāngbiàn yǐhòu liánxì.',
        id: 'Ngobrolnya seru banget! Ayo kita saling add WeChat yuk, biar gampang kontak-kontakan nanti.',
        tokens: [
          { zh: '聊得真开心', pinyin: 'liáo de zhēn kāixīn', id: 'ngobrolnya seru/senang sekali', tone: 2 },
          { zh: '我们', pinyin: 'wǒmen', id: 'kita', tone: 3 },
          { zh: '加个微信吧', pinyin: 'jiā ge Wēixìn ba', id: 'tambahkan WeChat yuk', tone: 1 },
          { zh: '方便', pinyin: 'fāngbiàn', id: 'memudahkan / praktis', tone: 1 },
          { zh: '以后联系', pinyin: 'yǐhòu liánxì', id: 'nanti berhubungan/kontak', tone: 3 }
        ]
      },
      {
        speaker: '安迪 (Andi)',
        role: 'B',
        zh: '好啊！是你扫我，还是我扫你？',
        pinyin: 'Hǎo a! Shì nǐ sǎo wǒ, háishì wǒ sǎo nǐ?',
        id: 'Boleh! Kamu yang scan saya, atau saya yang scan kamu?',
        tokens: [
          { zh: '好啊', pinyin: 'hǎo a', id: 'boleh!', tone: 3 },
          { zh: '是你扫我', pinyin: 'shì nǐ sǎo wǒ', id: 'apakah kamu scan aku', tone: 4 },
          { zh: '还是', pinyin: 'háishì', id: 'atau (kalimat tanya)', tone: 2 },
          { zh: '我扫你', pinyin: 'wǒ sǎo nǐ', id: 'aku scan kamu', tone: 3 }
        ]
      },
      {
        speaker: '王明 (Wang Ming)',
        role: 'A',
        zh: '我扫你吧。你把二维码打开。',
        pinyin: 'Wǒ sǎo nǐ ba. Nǐ bǎ èrwéimǎ dǎkāi.',
        id: 'Biar aku yang scan kamu saja. Tolong buka kode QR-mu.',
        tokens: [
          { zh: '我扫你吧', pinyin: 'wǒ sǎo nǐ ba', id: 'aku scan kamu saja ya', tone: 3 },
          { zh: '你把', pinyin: 'nǐ bǎ', id: 'kamu (partikel bǎ)', tone: 3 },
          { zh: '二维码', pinyin: 'èrwéimǎ', id: 'kode QR (2D barcode)', tone: 4 },
          { zh: '打开', pinyin: 'dǎkāi', id: 'buka', tone: 3 }
        ]
      },
      {
        speaker: '安迪 (Andi)',
        role: 'B',
        zh: '好的，我已经通过了。有事随时发消息！',
        pinyin: 'Hǎo de, wǒ yǐjīng tōngguò le. Yǒushì suíshí fā xiāoxi!',
        id: 'Oke, sudah saya approve/terima. Ada apa-apa kirim chat kapan saja ya!',
        tokens: [
          { zh: '好的', pinyin: 'hǎo de', id: 'oke / baiklah', tone: 3 },
          { zh: '我已经', pinyin: 'wǒ yǐjīng', id: 'saya sudah', tone: 3 },
          { zh: '通过了', pinyin: 'tōngguò le', id: 'menerima / lolos konfirmasi', tone: 1 },
          { zh: '有事', pinyin: 'yǒushì', id: 'ada urusan / keperluan', tone: 3 },
          { zh: '随时', pinyin: 'suíshí', id: 'setiap saat / kapan saja', tone: 2 },
          { zh: '发消息', pinyin: 'fā xiāoxi', id: 'kirim pesan chat', tone: 1 }
        ]
      }
    ],
    chunks: [
      {
        phrase: '加个微信吧',
        pinyin: 'jiā ge Wēixìn ba',
        meaning: 'Ayo saling bertukar / add WeChat',
        usage: 'Frasa sosial paling penting di Tiongkok modern untuk menjalin pertemanan.'
      },
      {
        phrase: '你扫我还是我扫你？',
        pinyin: 'Nǐ sǎo wǒ háishì wǒ sǎo nǐ?',
        meaning: 'Kamu scan aku atau aku scan kamu?',
        usage: 'Pertanyaan paling sering terdengar ketika hendak scan QR code.'
      },
      {
        phrase: '二维码',
        pinyin: 'èrwéimǎ',
        meaning: 'QR Code',
        usage: 'Istilah wajib di era digital Tiongkok (pembayaran, kontak, menu restoran).'
      },
      {
        phrase: '有事随时发消息',
        pinyin: 'Yǒushì suíshí fā xiāoxi',
        meaning: 'Ada apa-apa kabari / kirim pesan kapan saja',
        usage: 'Kalimat penutup yang sangat ramah setelah bertukar kontak.'
      }
    ],
    patternDrill: {
      template: '方便 [Aksi] 吗？',
      pinyinTemplate: 'Fāngbiàn [Aksi] ma?',
      meaningTemplate: 'Apakah berkenan / senggang untuk [Aksi]?',
      slots: [
        { word: '加个微信 (jiā ge Wēixìn)', translation: 'add akun WeChat' },
        { word: '留个电话 (liú ge diànhuà)', translation: 'tinggalkan nomor HP' },
        { word: '发个定位 (fā ge dìngwèi)', translation: 'kirim share location' },
        { word: '通个电话 (tōng ge diànhuà)', translation: 'bicara lewat telepon sebentar' }
      ]
    },
    culturalNote: 'Di Tiongkok, kartu nama fisik sudah hampir digantikan sepenuhnya oleh WeChat QR Code. Siapa yang mengatakan "我扫你" biasanya yang membuka kamera, sementara lawan bicaranya menampilkan QR code akunnya di layar ponsel.'
  },

  // ================= TEMA 2: KAFE & RESTORAN =================
  {
    id: 'food-01',
    category: 'Kafe & Resto',
    level: 'Dasar',
    title: 'Pesan Kopi & Boba: Kadar Manis dan Es',
    titleZh: '点咖啡与奶茶（甜度与冰块）',
    titlePinyin: 'Diǎn kāfēi yǔ nǎichá (tiándù yǔ bīngkuài)',
    icon: '🧋',
    summary: 'Cara memesan minuman boba atau kopi dengan tingkat gula, es, dan ukuran cup yang spesifik.',
    dialogue: [
      {
        speaker: '店员 (Kasir)',
        role: 'A',
        zh: '你好，欢迎光临！请问想要喝点什么？',
        pinyin: 'Nǐ hǎo, huānyíng guānglín! Qǐngwèn xiǎng yào hē diǎn shénme?',
        id: 'Halo, selamat datang! Permisi ingin minum apa?',
        tokens: [
          { zh: '欢迎光临', pinyin: 'huānyíng guānglín', id: 'selamat datang', tone: 1 },
          { zh: '请问', pinyin: 'qǐngwèn', id: 'permisi numpang tanya', tone: 3 },
          { zh: '想要', pinyin: 'xiǎng yào', id: 'ingin / berkehendak', tone: 3 },
          { zh: '喝点什么', pinyin: 'hē diǎn shénme', id: 'minum apa', tone: 1 }
        ]
      },
      {
        speaker: '顾客 (Pelanggan)',
        role: 'B',
        zh: '我要一杯大杯珍珠奶茶，微糖，去冰。',
        pinyin: 'Wǒ yào yì bēi dàbēi zhēnzhū nǎichá, wēi táng, qù bīng.',
        id: 'Saya mau satu gelas pearl milk tea ukuran besar, gulanya sedikit (slight sugar), tanpa es.',
        tokens: [
          { zh: '我要', pinyin: 'wǒ yào', id: 'saya mau', tone: 3 },
          { zh: '一杯', pinyin: 'yì bēi', id: 'satu cangkir/gelas', tone: 1 },
          { zh: '大杯', pinyin: 'dàbēi', id: 'ukuran besar (large cup)', tone: 4 },
          { zh: '珍珠奶茶', pinyin: 'zhēnzhū nǎichá', id: 'boba milk tea', tone: 1 },
          { zh: '微糖', pinyin: 'wēi táng', id: 'sedikit gula (30% sugar)', tone: 1 },
          { zh: '去冰', pinyin: 'qù bīng', id: 'tanpa es / no ice', tone: 4 }
        ]
      },
      {
        speaker: '店员 (Kasir)',
        role: 'A',
        zh: '好的，珍珠需要换成椰果或者布丁吗？',
        pinyin: 'Hǎo de, zhēnzhū xūyào huàn chéng yēguǒ huòzhě bùdīng ma?',
        id: 'Baik, apakah bobanya perlu diganti dengan nata de coco atau puding?',
        tokens: [
          { zh: '珍珠', pinyin: 'zhēnzhū', id: 'boba / mutiara tapioka', tone: 1 },
          { zh: '需要', pinyin: 'xūyào', id: 'perlu', tone: 1 },
          { zh: '换成', pinyin: 'huàn chéng', id: 'diganti menjadi', tone: 4 },
          { zh: '椰果', pinyin: 'yēguǒ', id: 'nata de coco / jeli kelapa', tone: 1 },
          { zh: '或者', pinyin: 'huòzhě', id: 'atau (kalimat berita)', tone: 4 },
          { zh: '布丁', pinyin: 'bùdīng', id: 'pudding', tone: 4 }
        ]
      },
      {
        speaker: '顾客 (Pelanggan)',
        role: 'B',
        zh: '不用换，珍珠就好。打包带走，谢谢！',
        pinyin: 'Bú yòng huàn, zhēnzhū jiù hǎo. Dǎbāo dàizǒu, xièxiè!',
        id: 'Tidak usah diganti, boba saja cukup. Bungkus bawa pulang, terima kasih!',
        tokens: [
          { zh: '不用换', pinyin: 'bú yòng huàn', id: 'tidak usah diganti', tone: 2 },
          { zh: '珍珠就好', pinyin: 'zhēnzhū jiù hǎo', id: 'boba saja cukup', tone: 1 },
          { zh: '打包带走', pinyin: 'dǎbāo dàizǒu', id: 'bungkus bawa pulang (takeaway)', tone: 3 },
          { zh: '谢谢', pinyin: 'xièxiè', id: 'terima kasih', tone: 4 }
        ]
      }
    ],
    chunks: [
      {
        phrase: '我要一杯...',
        pinyin: 'Wǒ yào yì bēi...',
        meaning: 'Saya mau satu gelas...',
        usage: 'Pola standar untuk memesan minuman apapun di kafe.'
      },
      {
        phrase: '微糖 (wēi táng) / 半糖 (bàn táng)',
        pinyin: 'wēi táng / bàn táng',
        meaning: 'Gula 30% (sedikit) / Gula 50% (setengah manis)',
        usage: 'Skala gula: 全糖 (100%), 少糖 (70%), 半糖 (50%), 微糖 (30%), 无糖 (0% tanpa gula).'
      },
      {
        phrase: '去冰 (qù bīng) / 少冰 (shǎo bīng)',
        pinyin: 'qù bīng / shǎo bīng',
        meaning: 'Tanpa es / Es sedikit (less ice)',
        usage: 'Penting sekali di kedai minuman Tiongkok agar tidak terlalu dingin.'
      },
      {
        phrase: '打包带走 (dǎbāo) vs 在这儿喝 (zài zhèr hē)',
        pinyin: 'dǎbāo dàizǒu vs zài zhèr hē',
        meaning: 'Bungkus bawa pulang (takeaway) vs Minum di tempat (dine in)',
        usage: 'Kasir akan selalu menanyakan apakah mau diminum di sini atau dibawa pulang.'
      }
    ],
    patternDrill: {
      template: '我要一杯 [Ukuran] [Jenis Minuman]，[Kadar Gula]，[Kadar Es]。',
      pinyinTemplate: 'Wǒ yào yì bēi [Ukuran] [Jenis Minuman], [Kadar Gula], [Kadar Es].',
      meaningTemplate: 'Saya mau satu gelas [Ukuran] [Jenis Minuman], [Kadar Gula], [Kadar Es].',
      slots: [
        { word: '中杯 (zhōngbēi) / 拿铁 (nátiě) / 无糖 (wútáng) / 热的 (rè de)', translation: 'Medium / Latte / Tanpa gula / Panas' },
        { word: '大杯 (dàbēi) / 美式咖啡 (měishì kāfēi) / 不加糖 (bù jiā táng) / 少冰 (shǎobīng)', translation: 'Large / Americano / Tanpa gula / Es sedikit' },
        { word: '超大杯 (chāodà bēi) / 抹茶拿铁 (mǒchá nátiě) / 半糖 (bàntáng) / 常温 (chángwēn)', translation: 'Extra Large / Matcha Latte / 50% gula / Suhu ruangan' }
      ]
    },
    culturalNote: 'Orang Tiongkok sangat memperhatikan suhu minuman untuk kesehatan pencernaan. Anda bisa memesan "常温" (chángwēn = suhu ruangan) atau "热的" (rè de = hangat/panas) bahkan untuk boba milk tea!'
  },

  {
    id: 'food-02',
    category: 'Kafe & Resto',
    level: 'Menengah',
    title: 'Memesan Makanan di Restoran: Menu Andalan & Rekomendasi',
    titleZh: '餐厅点餐与招牌菜',
    titlePinyin: 'Cāntīng diǎncān yǔ zhāopáicài',
    icon: '🍲',
    summary: 'Cara memanggil pelayan, menanyakan menu favorit khas restoran, dan memesan nasi.',
    dialogue: [
      {
        speaker: '顾客 (Tamu)',
        role: 'A',
        zh: '服务员，麻烦拿一下菜单，我们要点菜。',
        pinyin: 'Fúwùyuán, máfan ná yíxià càidān, wǒmen yào diǎncài.',
        id: 'Pelayan, permisi tolong ambilkan buku menunya, kami mau memesan makanan.',
        tokens: [
          { zh: '服务员', pinyin: 'fúwùyuán', id: 'pelayan / waiter', tone: 2 },
          { zh: '麻烦', pinyin: 'máfan', id: 'minta tolong / repot-repot', tone: 2 },
          { zh: '拿一下', pinyin: 'ná yíxià', id: 'ambilkan sebentar', tone: 2 },
          { zh: '菜单', pinyin: 'càidān', id: 'daftar menu', tone: 4 },
          { zh: '我们要点菜', pinyin: 'wǒmen yào diǎncài', id: 'kami ingin pesan makanan', tone: 3 }
        ]
      },
      {
        speaker: '服务员 (Pelanggan)',
        role: 'B',
        zh: '好的，桌上有扫码点餐的二维码，您也可以直接看纸质菜单。',
        pinyin: 'Hǎo de, zhuō shang yǒu sǎomǎ diǎncān de èrwéimǎ, nín yě kěyǐ zhíjiē kàn zhǐzhì càidān.',
        id: 'Baik, di atas meja ada QR code untuk pesan mandiri, Anda juga bisa langsung lihat buku menu cetak.',
        tokens: [
          { zh: '桌上有', pinyin: 'zhuō shang yǒu', id: 'di atas meja ada', tone: 1 },
          { zh: '扫码点餐', pinyin: 'sǎomǎ diǎncān', id: 'scan QR pesan menu', tone: 3 },
          { zh: '二维码', pinyin: 'èrwéimǎ', id: 'kode QR', tone: 4 },
          { zh: '直接看', pinyin: 'zhíjiē kàn', id: 'langsung melihat', tone: 2 },
          { zh: '纸质菜单', pinyin: 'zhǐzhì càidān', id: 'menu fisik kertas', tone: 3 }
        ]
      },
      {
        speaker: '顾客 (Tamu)',
        role: 'A',
        zh: '请问你们店有什么特色菜或者招牌菜推荐吗？',
        pinyin: 'Qǐngwèn nǐmen diàn yǒu shénme tèsècài huòzhě zhāopáicài tuījiàn ma?',
        id: 'Permisi, apakah restoran kalian punya menu khas atau hidangan andalan yang direkomendasikan?',
        tokens: [
          { zh: '请问', pinyin: 'qǐngwèn', id: 'permisi numpang tanya', tone: 3 },
          { zh: '特色菜', pinyin: 'tèsècài', id: 'hidangan khas spesial', tone: 4 },
          { zh: '招牌菜', pinyin: 'zhāopáicài', id: 'menu signature / andalan', tone: 1 },
          { zh: '推荐', pinyin: 'tuījiàn', id: 'rekomendasi', tone: 1 }
        ]
      },
      {
        speaker: '服务员 (Pelanggan)',
        role: 'B',
        zh: '我们店的宫保鸡丁和清蒸鱼特别受欢迎，很多客人都点。',
        pinyin: 'Wǒmen diàn de gōngbǎo jīdīng hé qīngzhēng yú tèbié shòu huānyíng, hěn duō kèrén dōu diǎn.',
        id: 'Kung Pao Chicken dan Ikan Tim kami sangat populer disukai banyak orang, banyak tamu yang pesan.',
        tokens: [
          { zh: '宫保鸡丁', pinyin: 'gōngbǎo jīdīng', id: 'ayam Kung Pao', tone: 1 },
          { zh: '清蒸鱼', pinyin: 'qīngzhēng yú', id: 'ikan kukus / steam fish', tone: 1 },
          { zh: '特别', pinyin: 'tèbié', id: 'sangat / istimewa', tone: 4 },
          { zh: '受欢迎', pinyin: 'shòu huānyíng', id: 'populer / disambut baik', tone: 4 },
          { zh: '很多客人', pinyin: 'hěn duō kèrén', id: 'banyak tamu', tone: 3 },
          { zh: '都点', pinyin: 'dōu diǎn', id: 'semuanya pesan', tone: 1 }
        ]
      },
      {
        speaker: '顾客 (Tamu)',
        role: 'A',
        zh: '那就来一份宫保鸡丁，一条清蒸鱼，再来两碗米饭。',
        pinyin: 'Nà jiù lái yí fèn gōngbǎo jīdīng, yì tiáo qīngzhēng yú, zài lái liǎng wǎn mǐfàn.',
        id: 'Kalau begitu minta satu porsi Kung Pao Chicken, satu ekor ikan tim, dan tambahkan dua mangkuk nasi putih.',
        tokens: [
          { zh: '那就来一份', pinyin: 'nà jiù lái yí fèn', id: 'kalau begitu minta satu porsi', tone: 4 },
          { zh: '一条', pinyin: 'yì tiáo', id: 'satu ekor (kata bantu)', tone: 4 },
          { zh: '再来', pinyin: 'zài lái', id: 'tambahkan lagi / minta lagi', tone: 4 },
          { zh: '两碗米饭', pinyin: 'liǎng wǎn mǐfàn', id: 'dua mangkuk nasi putih', tone: 3 }
        ]
      }
    ],
    chunks: [
      {
        phrase: '服务员，麻烦...',
        pinyin: 'Fúwùyuán, máfan...',
        meaning: 'Pelayan, permisi tolong...',
        usage: 'Cara paling sopan untuk memanggil staf restoran di Tiongkok.'
      },
      {
        phrase: '招牌菜 / 特色菜',
        pinyin: 'zhāopáicài / tèsècài',
        meaning: 'Menu andalan (signature) / Menu khas',
        usage: 'Gunakan kata ini jika bingung ingin makan apa di restoran baru.'
      },
      {
        phrase: '扫码点餐',
        pinyin: 'sǎomǎ diǎncān',
        meaning: 'Scan barcode untuk memesan menu',
        usage: 'Hampir 95% restoran di Tiongkok memakai sistem pesan lewat ponsel masing-masing.'
      },
      {
        phrase: '那就来一份...',
        pinyin: 'Nà jiù lái yí fèn...',
        meaning: 'Kalau begitu minta satu porsi...',
        usage: 'Frasa natural untuk mengunci pilihan pesanan ke pelayan.'
      },
      {
        phrase: '再来两碗米饭',
        pinyin: 'zài lái liǎng wǎn mǐfàn',
        meaning: 'Tambah dua mangkuk nasi putih lagi',
        usage: 'Ingat kata "两 (liǎng)" dipakai untuk jumlah (dua mangkuk), bukan "二 (èr)".'
      }
    ],
    patternDrill: {
      template: '请问有推荐的 [Jenis Makanan] 吗？那就来一份 [Pilihan]。',
      pinyinTemplate: 'Qǐngwèn yǒu tuījiàn de [Jenis Makanan] ma? Nà jiù lái yí fèn [Pilihan].',
      meaningTemplate: 'Permisi apakah ada rekomendasi [Jenis Makanan]? Kalau begitu minta satu porsi [Pilihan].',
      slots: [
        { word: '素菜 (sùcài) / 炒青菜 (chǎo qīngcài)', translation: 'sayuran vegetarian / tumis sayur hijau' },
        { word: '牛肉 (niúròu) / 葱爆牛肉 (cōngbào niúròu)', translation: 'daging sapi / sapi tumis daun bawang' },
        { word: '汤 (tāng) / 西红柿鸡蛋汤 (xīhóngshì jīdàntāng)', translation: 'sup / sup tomat telur' }
      ]
    },
    culturalNote: 'Di restoran Tiongkok, nasi putih ("米饭 mǐfàn") sering kali tidak disajikan otomatis, jadi Anda harus memesannya secara terpisah ("来一碗米饭"). Jangan menancapkan sumpit tegak lurus di mangkuk nasi karena menyerupai dupa upacara kematian!'
  },

  {
    id: 'food-03',
    category: 'Kafe & Resto',
    level: 'Praktis',
    title: 'Permintaan Khusus: Makanan Halal, Tanpa Babi & Alergi',
    titleZh: '特殊要求（清真、不吃猪肉与过敏）',
    titlePinyin: 'Tèshū yāoqiú (qīngzhēn, bù chī zhūròu yǔ guòmǐn)',
    icon: '🚫',
    summary: 'Sangat penting untuk muslim atau yang memiliki alergi makanan saat makan di luar.',
    dialogue: [
      {
        speaker: '顾客 (Tamu)',
        role: 'A',
        zh: '你好，请问你们这里的菜是清真的吗？',
        pinyin: 'Nǐ hǎo, qǐngwèn nǐmen zhèlǐ de cài shì qīngzhēn de ma?',
        id: 'Halo, permisi apakah makanan di tempat Anda ini halal (Qingzhen)?',
        tokens: [
          { zh: '请问', pinyin: 'qǐngwèn', id: 'permisi numpang tanya', tone: 3 },
          { zh: '这里的菜', pinyin: 'zhèlǐ de cài', id: 'masakan di sini', tone: 4 },
          { zh: '清真的', pinyin: 'qīngzhēn de', id: 'halal (istilah islami di Tiongkok)', tone: 1 }
        ]
      },
      {
        speaker: '服务员 (Pelayan)',
        role: 'B',
        zh: '不好意思，我们不是清真餐厅，但有几道素菜和牛肉菜。',
        pinyin: 'Bù hǎoyìsi, wǒmen bú shì qīngzhēn cāntīng, dàn yǒu jǐ dào sùcài hé niúròu cài.',
        id: 'Mohon maaf, kami bukan restoran halal, tapi ada beberapa hidangan vegetarian dan olahan daging sapi.',
        tokens: [
          { zh: '不好意思', pinyin: 'bù hǎoyìsi', id: 'maaf / permisi tidak enak hati', tone: 4 },
          { zh: '清真餐厅', pinyin: 'qīngzhēn cāntīng', id: 'restoran halal', tone: 1 },
          { zh: '几道素菜', pinyin: 'jǐ dào sùcài', id: 'beberapa hidangan vegetarian', tone: 3 },
          { zh: '牛肉菜', pinyin: 'niúròu cài', id: 'hidangan daging sapi', tone: 2 }
        ]
      },
      {
        speaker: '顾客 (Tamu)',
        role: 'A',
        zh: '我不吃猪肉和猪油，做菜时请不要放，可以吗？',
        pinyin: 'Wǒ bù chī zhūròu hé zhūyóu, zuòcài shí qǐng búyào fàng, kěyǐ ma?',
        id: 'Saya tidak makan daging babi dan minyak babi, saat memasak tolong jangan dimasukkan, bisakah?',
        tokens: [
          { zh: '我不吃', pinyin: 'wǒ bù chī', id: 'saya tidak makan', tone: 3 },
          { zh: '猪肉', pinyin: 'zhūròu', id: 'daging babi', tone: 1 },
          { zh: '猪油', pinyin: 'zhūyóu', id: 'lemak / minyak babi (lard)', tone: 1 },
          { zh: '做菜时', pinyin: 'zuòcài shí', id: 'saat memasak hidangan', tone: 4 },
          { zh: '请不要放', pinyin: 'qǐng búyào fàng', id: 'tolong jangan taruh/masukkan', tone: 3 },
          { zh: '可以吗', pinyin: 'kěyǐ ma', id: 'apakah boleh?', tone: 3 }
        ]
      },
      {
        speaker: '服务员 (Pelayan)',
        role: 'B',
        zh: '没问题，我一定帮您跟后厨交代清楚。您还有什么忌口吗？',
        pinyin: 'Méi wèntí, wǒ yídìng bāng nín gēn hòuchú jiāodài qīngchu. Nín hái yǒu shénme jìkǒu ma?',
        id: 'Tidak masalah, saya pasti bantu beri tahu pihak dapur dengan jelas. Apakah Anda ada pantangan makanan lainnya?',
        tokens: [
          { zh: '没问题', pinyin: 'méi wèntí', id: 'tidak masalah / no problem', tone: 2 },
          { zh: '一定', pinyin: 'yídìng', id: 'pasti', tone: 2 },
          { zh: '后厨', pinyin: 'hòuchú', id: 'dapur restoran', tone: 4 },
          { zh: '交代清楚', pinyin: 'jiāodài qīngchu', id: 'beritahu dengan jelas', tone: 1 },
          { zh: '忌口', pinyin: 'jìkǒu', id: 'pantangan makanan / diet restriction', tone: 4 }
        ]
      },
      {
        speaker: '顾客 (Tamu)',
        role: 'A',
        zh: '另外我对花生严重过敏，千万不要放花生。少放点辣，谢谢！',
        pinyin: 'Lìngwài wǒ duì huāshēng yánzhòng guòmǐn, qiānwàn búyào fàng huāshēng. Shǎo fàng diǎn là, xièxiè!',
        id: 'Selain itu saya alergi parah pada kacang tanah, mohon jangan sekali-kali masukkan kacang tanah. Kurangi cabai/pedasnya ya, terima kasih!',
        tokens: [
          { zh: '另外', pinyin: 'lìngwài', id: 'selain itu', tone: 4 },
          { zh: '我对...过敏', pinyin: 'wǒ duì... guòmǐn', id: 'saya alergi terhadap...', tone: 3 },
          { zh: '花生', pinyin: 'huāshēng', id: 'kacang tanah', tone: 1 },
          { zh: '严重', pinyin: 'yánzhòng', id: 'parah / gawat', tone: 2 },
          { zh: '千万不要', pinyin: 'qiānwàn búyào', id: 'mohon jangan sekali-kali', tone: 1 },
          { zh: '少放点辣', pinyin: 'shǎo fàng diǎn là', id: 'kurangi sedikit pedasnya', tone: 3 }
        ]
      }
    ],
    chunks: [
      {
        phrase: '清真 (qīngzhēn)',
        pinyin: 'qīngzhēn',
        meaning: 'Halal',
        usage: 'Cari plang dengan tulisan "清真" (biasanya warna hijau) untuk restoran masakan halal (seperti mie tarik Lanzhou).'
      },
      {
        phrase: '不吃猪肉和猪油',
        pinyin: 'bù chī zhūròu hé zhūyóu',
        meaning: 'Tidak makan daging babi dan minyak babi',
        usage: 'Wajib ditekankan, karena masakan Tiongkok sering menggunakan minyak babi untuk menumis sayur.'
      },
      {
        phrase: '我对...过敏',
        pinyin: 'Wǒ duì... guòmǐn',
        meaning: 'Saya alergi terhadap...',
        usage: 'Pola medis/pantangan krusial: 对海鲜过敏 (alergi seafood), 对花生过敏 (alergi kacang).'
      },
      {
        phrase: '少放辣 / 不要放香菜',
        pinyin: 'shǎo fàng là / búyào fàng xiāngcài',
        meaning: 'Kurangi pedas / Jangan taruh daun ketumbar (cilantro)',
        usage: 'Frasa penyelamat saat makan di restoran Tiongkok daratan.'
      }
    ],
    patternDrill: {
      template: '请不要放 [Bahan Makanan]，我对 [Alergen] 过敏。',
      pinyinTemplate: 'Qǐng búyào fàng [Bahan Makanan], wǒ duì [Alergen] guòmǐn.',
      meaningTemplate: 'Tolong jangan taruh [Bahan Makanan], saya alergi [Alergen].',
      slots: [
        { word: '猪油 (zhūyóu) / 猪肉 (zhūròu)', translation: 'minyak babi / daging babi' },
        { word: '花生 (huāshēng) / 坚果 (jiānguǒ)', translation: 'kacang tanah / kacang-kacangan' },
        { word: '虾 (xiā) / 海鲜 (hǎixiān)', translation: 'udang / makanan laut (seafood)' },
        { word: '味精 (wèijīng) / 味精 (wèijīng)', translation: 'micin (MSG)' }
      ]
    },
    culturalNote: 'Restoran Halal di Tiongkok sangat mudah dikenali dengan tulisan aksara "清真" (Qīngzhēn) dan kaligrafi Arab. Biasanya dikelola oleh suku Hui (回族) atau Uighur (维吾尔族), dengan menu andalan seperti 兰州拉面 (Lanzhou Lamian) dan sate domba (羊肉串).'
  },

  {
    id: 'food-04',
    category: 'Kafe & Resto',
    level: 'Dasar',
    title: 'Membayar Tagihan & Split Bill di Meja Kasir',
    titleZh: '买单结账与AA制',
    titlePinyin: 'Mǎidān jiézhàng yǔ AA zhì',
    icon: '💳',
    summary: 'Minta bon tagihan, bayar pakai QR (WeChat/Alipay), dan cara patungan bersama teman.',
    dialogue: [
      {
        speaker: '顾客 (Tamu)',
        role: 'A',
        zh: '服务员，买单！请问一共多少钱？',
        pinyin: 'Fúwùyuán, mǎidān! Qǐngwèn yígòng duōshǎo qián?',
        id: 'Pelayan, minta bon tagihan! Permisi totalnya berapa uang?',
        tokens: [
          { zh: '服务员', pinyin: 'fúwùyuán', id: 'pelayan', tone: 2 },
          { zh: '买单', pinyin: 'mǎidān', id: 'minta bon / bayar tagihan', tone: 3 },
          { zh: '一共', pinyin: 'yígòng', id: 'secara keseluruhan / total', tone: 2 },
          { zh: '多少钱', pinyin: 'duōshǎo qián', id: 'berapa banyak uang / berapa harganya', tone: 1 }
        ]
      },
      {
        speaker: '服务员 (Pelayan)',
        role: 'B',
        zh: '您好，一共是一百八十八元。您怎么支付？',
        pinyin: 'Nín hǎo, yígòng shì yìbǎi bāshíbā yuán. Nín zěnme zhīfù?',
        id: 'Halo, totalnya 188 Yuan. Anda ingin membayar lewat apa?',
        tokens: [
          { zh: '一百八十八元', pinyin: 'yìbǎi bāshíbā yuán', id: '188 Yuan', tone: 1 },
          { zh: '怎么支付', pinyin: 'zěnme zhīfù', id: 'bagaimana membayarnya', tone: 3 }
        ]
      },
      {
        speaker: '顾客 (Tamu)',
        role: 'A',
        zh: '微信支付可以吗？顺便开发票吗？',
        pinyin: 'Wēixìn zhīfù kěyǐ ma? Shùnbiàn kāi fāpiào ma?',
        id: 'Bisa bayar pakai WeChat Pay? Sekalian bisa terbitkan kuitansi (fapiao)?',
        tokens: [
          { zh: '微信支付', pinyin: 'Wēixìn zhīfù', id: 'pembayaran WeChat Pay', tone: 1 },
          { zh: '可以吗', pinyin: 'kěyǐ ma', id: 'apakah boleh?', tone: 3 },
          { zh: '顺便', pinyin: 'shùnbiàn', id: 'sekalian / sambil jalan', tone: 4 },
          { zh: '开发票', pinyin: 'kāi fāpiào', id: 'buat kuitansi / invoice pajak', tone: 1 }
        ]
      },
      {
        speaker: '服务员 (Pelayan)',
        role: 'B',
        zh: '可以的，扫这个码就行。发票扫小票上的二维码就能开电子发票。',
        pinyin: 'Kěyǐ de, sǎo zhège mǎ jiù xíng. Fāpiào sǎo xiǎopiào shang de èrwéimǎ jiù néng kāi diànzǐ fāpiào.',
        id: 'Bisa kok, scan kode ini saja. Untuk kuitansi, cukup scan QR di struk belanja nanti keluar e-invoice.',
        tokens: [
          { zh: '扫这个码', pinyin: 'sǎo zhège mǎ', id: 'scan barcode ini', tone: 3 },
          { zh: '就行', pinyin: 'jiù xíng', id: 'sudah beres / cukup', tone: 4 },
          { zh: '小票', pinyin: 'xiǎopiào', id: 'struk pembayaran kertas kecil', tone: 3 },
          { zh: '电子发票', pinyin: 'diànzǐ fāpiào', id: 'faktur elektronik (e-invoice)', tone: 4 }
        ]
      },
      {
        speaker: '朋友 (Teman)',
        role: 'C',
        zh: '这次我们AA制吧，我把九十四块转给你！',
        pinyin: 'Zhè cì wǒmen AA zhì ba, wǒ bǎ jiǔshísì kuài zhuǎn gěi nǐ!',
        id: 'Kali ini kita patungan bagi dua (AA-zhi) aja yuk, aku transfer 94 kuai ke kamu ya!',
        tokens: [
          { zh: '这次', pinyin: 'zhè cì', id: 'kali ini', tone: 4 },
          { zh: 'AA制', pinyin: 'AA zhì', id: 'split bill / bayar patungan sama rata', tone: 4 },
          { zh: '转给你', pinyin: 'zhuǎn gěi nǐ', id: 'transfer ke kamu', tone: 3 }
        ]
      }
    ],
    chunks: [
      {
        phrase: '买单 (mǎidān) / 结账 (jiézhàng)',
        pinyin: 'mǎidān / jiézhàng',
        meaning: 'Minta bon / Bayar tagihan',
        usage: 'Kata paling universal untuk meminta tagihan di seluruh restoran dan kafe.'
      },
      {
        phrase: '一共多少钱？',
        pinyin: 'Yígòng duōshǎo qián?',
        meaning: 'Totalnya berapa uang?',
        usage: 'Pertanyaan inti untuk mengetahui total biaya.'
      },
      {
        phrase: '微信还是支付宝？',
        pinyin: 'Wēixìn háishì Zhīfùbǎo?',
        meaning: 'WeChat atau Alipay?',
        usage: 'Dua dompet digital utama di Tiongkok. Uang tunai jarang sekali dipakai.'
      },
      {
        phrase: 'AA制 (AA zhì)',
        pinyin: 'AA zhì',
        meaning: 'Split bill / Patungan bayar masing-masing',
        usage: 'Istilah populer anak muda Tiongkok saat makan bersama dan membagi tagihan rata.'
      }
    ],
    patternDrill: {
      template: '一共 [Jumlah Uang] 元，可以用 [Metode Pembayaran] 吗？',
      pinyinTemplate: 'Yígòng [Jumlah Uang] yuán, kěyǐ yòng [Metode Pembayaran] ma?',
      meaningTemplate: 'Totalnya [Jumlah Uang] Yuan, bisakah menggunakan [Metode Pembayaran]?',
      slots: [
        { word: '五十 (wǔshí) / 支付宝 (Zhīfùbǎo)', translation: '50 / Alipay' },
        { word: '两百 (liǎngbǎi) / 现金 (xiànjīn)', translation: '200 / Uang tunai (cash)' },
        { word: '三百二十 (sānbǎi èrshí) / 信用卡 (xìnyòngkǎ)', translation: '320 / Kartu kredit' }
      ]
    },
    culturalNote: 'Di Tiongkok, uang kertas ("现金 xiànjīn") hampir tidak pernah digunakan lagi di perkotaan. Semua pedagang dari kaki lima hingga mal menggunakan kode QR WeChat Pay atau Alipay. Pelancong asing kini dapat menautkan kartu Visa/Mastercard ke aplikasi WeChat atau Alipay mereka.'
  },

  // ================= TEMA 3: BELANJA & TAWAR MENAWAR =================
  {
    id: 'shop-01',
    category: 'Belanja',
    level: 'Dasar',
    title: 'Mencari Ukuran Baju & Coba di Fitting Room',
    titleZh: '挑选衣服与试衣间',
    titlePinyin: 'Tiāoxuǎn yīfu yǔ shìyījiān',
    icon: '👕',
    summary: 'Bagaimana menanyakan ketersediaan ukuran pakaian, warna lain, dan mencoba di kamar pas.',
    dialogue: [
      {
        speaker: '顾客 (Pembeli)',
        role: 'A',
        zh: '你好，这件衬衫我很喜欢，有中号的吗？',
        pinyin: 'Nǐ hǎo, zhè jiàn chènshān wǒ hěn xǐhuan, yǒu zhōnghào de ma?',
        id: 'Halo, kemeja ini saya sangat suka, apakah ada ukuran sedang (size M)?',
        tokens: [
          { zh: '这件衬衫', pinyin: 'zhè jiàn chènshān', id: 'kemeja ini', tone: 4 },
          { zh: '很喜欢', pinyin: 'hěn xǐhuan', id: 'sangat suka', tone: 3 },
          { zh: '中号', pinyin: 'zhōnghào', id: 'ukuran medium (size M)', tone: 1 }
        ]
      },
      {
        speaker: '店员 (Pramuniaga)',
        role: 'B',
        zh: '稍等，我帮您查一下库存……有的，给您。',
        pinyin: 'Shāoděng, wǒ bāng nín chá yíxià kùcún... Yǒu de, gěi nín.',
        id: 'Tunggu sebentar, saya bantu cek stok di gudang... Ada kok, ini untuk Anda.',
        tokens: [
          { zh: '稍等', pinyin: 'shāoděng', id: 'tunggu sebentar ya', tone: 1 },
          { zh: '查一下库存', pinyin: 'chá yíxià kùcún', id: 'cek stok persediaan', tone: 2 },
          { zh: '给您', pinyin: 'gěi nín', id: 'ini silakan untuk Anda', tone: 3 }
        ]
      },
      {
        speaker: '顾客 (Pembeli)',
        role: 'A',
        zh: '我可以试穿一下吗？试衣间在哪里？',
        pinyin: 'Wǒ kěyǐ shìchuān yíxià ma? Shìyījiān zài nǎlǐ?',
        id: 'Bolehkah saya mencobanya dulu? Kamar pas ada di mana ya?',
        tokens: [
          { zh: '我可以', pinyin: 'wǒ kěyǐ', id: 'apakah saya boleh', tone: 3 },
          { zh: '试穿一下', pinyin: 'shìchuān yíxià', id: 'mencoba pakai sebentar', tone: 4 },
          { zh: '试衣间', pinyin: 'shìyījiān', id: 'kamar pas (fitting room)', tone: 4 },
          { zh: '在哪里', pinyin: 'zài nǎlǐ', id: 'ada di mana', tone: 4 }
        ]
      },
      {
        speaker: '店员 (Pramuniaga)',
        role: 'B',
        zh: '试衣间往里面走，左手边就是。如果尺寸不合适随时叫我。',
        pinyin: 'Shìyījiān wǎng lǐmiàn zǒu, zuǒshǒu biān jiù shì. Rúguǒ chǐcùn bù héshì suíshí jiào wǒ.',
        id: 'Kamar pas jalan ke arah dalam, sebelah tangan kiri langsung sampai. Kalau ukurannya kurang pas panggil saya kapan saja.',
        tokens: [
          { zh: '往里面走', pinyin: 'wǎng lǐmiàn zǒu', id: 'jalan ke arah dalam', tone: 3 },
          { zh: '左手边', pinyin: 'zuǒshǒu biān', id: 'sebelah tangan kiri', tone: 3 },
          { zh: '尺寸', pinyin: 'chǐcùn', id: 'ukuran pakaian (size)', tone: 3 },
          { zh: '不合适', pinyin: 'bù héshì', id: 'tidak cocok / tidak pas', tone: 4 }
        ]
      }
    ],
    chunks: [
      {
        phrase: '大号 / 中号 / 小号',
        pinyin: 'dàhào / zhōnghào / xiǎohào',
        meaning: 'Ukuran L / Ukuran M / Ukuran S',
        usage: 'Untuk ekstra: 特大号 (tèdàhào = XL), 加小号 (jiāxiǎohào = XS).'
      },
      {
        phrase: '试穿一下',
        pinyin: 'shìchuān yíxià',
        meaning: 'Mencoba pakai sebentar',
        usage: 'Kata "试" berarti mencoba. 试穿 = coba baju/sepatu, 试吃 = coba makanan.'
      },
      {
        phrase: '试衣间在哪里？',
        pinyin: 'Shìyījiān zài nǎlǐ?',
        meaning: 'Kamar pas ada di mana?',
        usage: 'Frasa kunci di toko pakaian mana pun.'
      },
      {
        phrase: '尺寸不合适',
        pinyin: 'chǐcùn bù héshì',
        meaning: 'Ukurannya tidak pas / kurang cocok',
        usage: 'Bisa minta ganti: "有没有大一号的？" (Ada yang satu nomor lebih besar?).'
      }
    ],
    patternDrill: {
      template: '这件有点 [Kondisi]，有没有 [Ukuran/Warna] 的？',
      pinyinTemplate: 'Zhè jiàn yǒudiǎn [Kondisi], yǒu méiyǒu [Ukuran/Warna] de?',
      meaningTemplate: 'Yang ini agak [Kondisi], apakah ada yang [Ukuran/Warna]?',
      slots: [
        { word: '小 (xiǎo) / 大一号 (dà yí hào)', translation: 'kekecilan / lebih besar satu ukuran' },
        { word: '肥 (féi) / 紧凑一点 (jǐncòu yìdiǎn)', translation: 'terlalu longgar / sedikit lebih pas badan' },
        { word: '暗 (àn) / 白色 (báisè)', translation: 'terlalu gelap warnanya / warna putih' }
      ]
    },
    culturalNote: 'Di toko busana modern di mall Tiongkok harganya sudah pas (fixed price), tapi di butik independen atau pasar grosir baju (seperti di Guangzhou atau Yiwu), mencoba baju dan menanyakan potongan harga masih sangat lazim.'
  },

  {
    id: 'shop-02',
    category: 'Belanja',
    level: 'Praktis',
    title: 'Tawar Menawar di Pasar Tradisional & Souvenir',
    titleZh: '市场砍价与还价',
    titlePinyin: 'Shìchǎng kǎnjià yǔ huánjià',
    icon: '🏷️',
    summary: 'Seni menawar barang: mengeluh mahal, minta diskon, dan trik pura-pura pergi.',
    dialogue: [
      {
        speaker: '顾客 (Pembeli)',
        role: 'A',
        zh: '老板，这个茶叶礼盒多少钱一个？',
        pinyin: 'Lǎobǎn, zhège cháyè lǐhé duōshǎo qián yí ge?',
        id: 'Bos / Pemilik toko, kotak souvenir teh ini berapa uang satuannya?',
        tokens: [
          { zh: '老板', pinyin: 'lǎobǎn', id: 'bos / pemilik toko', tone: 3 },
          { zh: '茶叶礼盒', pinyin: 'cháyè lǐhé', id: 'kotak hadiah teh', tone: 2 },
          { zh: '多少钱一个', pinyin: 'duōshǎo qián yí ge', id: 'berapa harganya satuannya', tone: 1 }
        ]
      },
      {
        speaker: '摊主 (Penjual)',
        role: 'B',
        zh: '两百块一个，这是正宗的龙井茶，质量特别好。',
        pinyin: 'Liǎngbǎi kuài yí ge, zhè shì zhèngzōng de lóngjǐng chá, zhìliàng tèbié hǎo.',
        id: 'Dua ratus kuai satuannya, ini teh Longjing asli original, kualitasnya super bagus.',
        tokens: [
          { zh: '两百块', pinyin: 'liǎngbǎi kuài', id: 'dua ratus kuai (Yuan)', tone: 3 },
          { zh: '正宗的', pinyin: 'zhèngzōng de', id: 'asli / otentik', tone: 4 },
          { zh: '质量', pinyin: 'zhìliàng', id: 'kualitas barang', tone: 4 }
        ]
      },
      {
        speaker: '顾客 (Pembeli)',
        role: 'A',
        zh: '太贵了吧！能不能便宜一点？',
        pinyin: 'Tài guì le ba! Néng bù néng piányi yìdiǎn?',
        id: 'Kemahalan dong! Bisa nggak agak murahan sedikit?',
        tokens: [
          { zh: '太贵了', pinyin: 'tài guì le', id: 'terlalu mahal', tone: 4 },
          { zh: '能不能', pinyin: 'néng bù néng', id: 'apakah bisa / bisakah', tone: 2 },
          { zh: '便宜一点', pinyin: 'piányi yìdiǎn', id: 'murah sedikit', tone: 2 }
        ]
      },
      {
        speaker: '摊主 (Penjual)',
        role: 'B',
        zh: '你想给多少？你给个诚心买的价。',
        pinyin: 'Nǐ xiǎng gěi duōshǎo? Nǐ gěi ge chéngxīn mǎi de jià.',
        id: 'Kamu maunya kasih berapa? Kasih harga kalau kamu memang sungguh-sungguh mau beli.',
        tokens: [
          { zh: '你想给多少', pinyin: 'nǐ xiǎng gěi duōshǎo', id: 'kamu ingin tawar berapa', tone: 3 },
          { zh: '诚心', pinyin: 'chéngxīn', id: 'tulus / niat sungguhan', tone: 2 },
          { zh: '价', pinyin: 'jià', id: 'harga', tone: 4 }
        ]
      },
      {
        speaker: '顾客 (Pembeli)',
        role: 'A',
        zh: '一百二十块。如果行的话我买两个，不行我就去别家看看。',
        pinyin: 'Yìbǎi èrshí kuài. Rúguǒ xíng dehuà wǒ mǎi liǎng ge, bù xíng wǒ jiù qù bié jiā kànkan.',
        id: 'Seratus dua puluh kuai. Kalau boleh saya ambil dua buah, kalau tidak boleh saya mau lihat ke toko lain.',
        tokens: [
          { zh: '一百二十块', pinyin: 'yìbǎi èrshí kuài', id: '120 kuai', tone: 1 },
          { zh: '如果行的话', pinyin: 'rúguǒ xíng dehuà', id: 'kalau boleh / jika bisa', tone: 2 },
          { zh: '买两个', pinyin: 'mǎi liǎng ge', id: 'beli dua buah', tone: 3 },
          { zh: '去别家看看', pinyin: 'qù bié jiā kànkan', id: 'pergi ke toko lain melihat-lihat', tone: 4 }
        ]
      },
      {
        speaker: '摊主 (Penjual)',
        role: 'B',
        zh: '哎呀亏本卖给你了！行吧行吧，拿走拿走！',
        pinyin: 'Āiyā kuīběn mài gěi nǐ le! Xíng ba xíng ba, názǒu názǒu!',
        id: 'Aduh rugi modal ini saya jual ke kamu! Ya sudahlah ya sudahlah, ambil sana bawa!',
        tokens: [
          { zh: '亏本', pinyin: 'kuīběn', id: 'rugi modal / tekor', tone: 1 },
          { zh: '卖给你', pinyin: 'mài gěi nǐ', id: 'dijual ke kamu', tone: 4 },
          { zh: '行吧', pinyin: 'xíng ba', id: 'oke / baiklah (dengan pasrah)', tone: 2 }
        ]
      }
    ],
    chunks: [
      {
        phrase: '太贵了吧！',
        pinyin: 'Tài guì le ba!',
        meaning: 'Kemahalan lah!',
        usage: 'Reaksi pertama saat menawar barang di pasar seni atau pasar malam.'
      },
      {
        phrase: '能不能便宜一点？',
        pinyin: 'Néng bù néng piányi yìdiǎn?',
        meaning: 'Bisakah agak murahan sedikit?',
        usage: 'Kalimat paling ampuh untuk memulai proses tawar menawar.'
      },
      {
        phrase: '诚心买',
        pinyin: 'chéngxīn mǎi',
        meaning: 'Niat tulus membeli',
        usage: 'Penjual sering menantang pembeli memberikan harga yang wajar.'
      },
      {
        phrase: '不行我就去别家看看',
        pinyin: 'Bù xíng wǒ jiù qù bié jiā kànkan',
        meaning: 'Kalau tidak boleh saya mau lihat ke toko lain',
        usage: 'Trik psikologis klasik menawar (walk away technique).'
      }
    ],
    patternDrill: {
      template: '[Harga Awal] 太贵了，[Tawaran] 行不行？我买 [Jumlah]。',
      pinyinTemplate: '[Harga Awal] tài guì le, [Tawaran] xíng bù xíng? Wǒ mǎi [Jumlah].',
      meaningTemplate: '[Harga Awal] kemahalan, [Tawaran] boleh nggak? Saya beli [Jumlah].',
      slots: [
        { word: '一百块 (yìbǎi kuài) / 七十块 (qīshí kuài) / 三个 (sān ge)', translation: '100 kuai / 70 kuai / 3 buah' },
        { word: '五十 (wǔshí) / 三十五 (sānshíwǔ) / 两个 (liǎng ge)', translation: '50 / 35 / 2 buah' },
        { word: '八十 (bāshí) / 六十 (liùshí) / 一件 (yí jiàn)', translation: '80 / 60 / 1 potong' }
      ]
    },
    culturalNote: 'Menawar ("砍价 kǎnjià") adalah hal yang lumrah di pasar cinderamata atau pasar tradisional Tiongkok. Jangan menawar dengan nada marah, gunakan senyuman dan sapa penjual dengan hangat ("老板 lǎobǎn"). Bila penjual berkata "亏本卖给你" (saya jual rugi modal), biasanya itu hanya gaya khas pedagang!'
  },

  // ================= TEMA 4: TRANSPORTASI & ARAH =================
  {
    id: 'travel-01',
    category: 'Transportasi',
    level: 'Dasar',
    title: 'Naik Taksi / Didi: Memberitahu Tujuan & Belokan',
    titleZh: '打车与指示路线',
    titlePinyin: 'Dǎchē yǔ zhǐshì lùxiàn',
    icon: '🚕',
    summary: 'Percakapan dengan sopir taksi: alamat tujuan, belok kiri/kanan, dan berhenti di tepi jalan.',
    dialogue: [
      {
        speaker: '司机 (Sopir Taksi)',
        role: 'A',
        zh: '你好，请问去哪里？手机尾号多少？',
        pinyin: 'Nǐ hǎo, qǐngwèn qù nǎlǐ? Shǒujī wěihào duōshǎo?',
        id: 'Halo, permisi mau ke mana? Berapa 4 angka terakhir nomor handphonemu?',
        tokens: [
          { zh: '去哪里', pinyin: 'qù nǎlǐ', id: 'pergi ke mana', tone: 4 },
          { zh: '手机尾号', pinyin: 'shǒujī wěihào', id: 'nomor ekor/akhir HP', tone: 3 },
          { zh: '多少', pinyin: 'duōshǎo', id: 'berapa', tone: 1 }
        ]
      },
      {
        speaker: '乘客 (Penumpang)',
        role: 'B',
        zh: '师傅你好，尾号是8866。去三里屯太古里。',
        pinyin: 'Shīfu nǐ hǎo, wěihào shì bābāliùliù. Qù Sānlǐtún Tàigǔlǐ.',
        id: 'Halo pak sopir, nomor ekornya 8866. Mau ke Sanlitun Taikoo Li.',
        tokens: [
          { zh: '师傅', pinyin: 'shīfu', id: 'pak sopir / master', tone: 1 },
          { zh: '去', pinyin: 'qù', id: 'pergi ke', tone: 4 }
        ]
      },
      {
        speaker: '乘客 (Penumpang)',
        role: 'B',
        zh: '师傅，前面的路口请右拐，然后靠边停就行。',
        pinyin: 'Shīfu, qiánmiàn de lùkǒu qǐng yòuguǎi, ránhòu kàobiān tíng jiù xíng.',
        id: 'Pak sopir, di persimpangan depan tolong belok kanan, lalu berhenti di tepi jalan saja.',
        tokens: [
          { zh: '前面的路口', pinyin: 'qiánmiàn de lùkǒu', id: 'persimpangan jalan depan', tone: 2 },
          { zh: '右拐', pinyin: 'yòuguǎi', id: 'belok kanan', tone: 4 },
          { zh: '然后', pinyin: 'ránhòu', id: 'kemudian / lalu', tone: 2 },
          { zh: '靠边停', pinyin: 'kàobiān tíng', id: 'merapat ke tepi dan parkir/berhenti', tone: 4 },
          { zh: '就行', pinyin: 'jiù xíng', id: 'sudah cukup/beres', tone: 4 }
        ]
      },
      {
        speaker: '司机 (Sopir Taksi)',
        role: 'A',
        zh: '好的。到了，拿好您的随身物品，慢走啊！',
        pinyin: 'Hǎo de. Dào le, náhǎo nín de suíshēn wùpǐn, màn zǒu a!',
        id: 'Baik. Sudah sampai, tolong periksa dan bawa barang bawaan Anda, hati-hati di jalan ya!',
        tokens: [
          { zh: '到了', pinyin: 'dào le', id: 'sudah sampai', tone: 4 },
          { zh: '拿好', pinyin: 'náhǎo', id: 'pegang / ambil baik-baik', tone: 2 },
          { zh: '随身物品', pinyin: 'suíshēn wùpǐn', id: 'barang bawaan pribadi', tone: 2 },
          { zh: '慢走', pinyin: 'màn zǒu', id: 'hati-hati di jalan / jalan perlahan', tone: 4 }
        ]
      }
    ],
    chunks: [
      {
        phrase: '师傅 (shīfu)',
        pinyin: 'shīfu',
        meaning: 'Pak Sopir / Master',
        usage: 'Panggilan paling sopan dan natural untuk menyapa pengemudi taksi atau teknisi.'
      },
      {
        phrase: '手机尾号 (shǒujī wěihào)',
        pinyin: 'shǒujī wěihào',
        meaning: '4 digit nomor terakhir HP',
        usage: 'Saat memesan Didi (taksi online), pengemudi akan selalu meminta konfirmasi nomor ekor ini.'
      },
      {
        phrase: '左拐 (zuǒguǎi) / 右拐 (yòuguǎi) / 直行 (zhíxíng)',
        pinyin: 'zuǒguǎi / yòuguǎi / zhíxíng',
        meaning: 'Belok kiri / Belok kanan / Lurus terus',
        usage: 'Petunjuk arah navigasi dasar.'
      },
      {
        phrase: '靠边停 (kàobiān tíng)',
        pinyin: 'kàobiān tíng',
        meaning: 'Tepi dan berhenti di pinggir jalan',
        usage: 'Katakan ini saat sudah mendekati tujuan Anda.'
      }
    ],
    patternDrill: {
      template: '师傅，麻烦在 [Lokasi] [Aksi]。',
      pinyinTemplate: 'Shīfu, máfan zài [Lokasi] [Aksi].',
      meaningTemplate: 'Pak sopir, tolong di [Lokasi] [Aksi].',
      slots: [
        { word: '路口 (lùkǒu) / 左拐 (zuǒguǎi)', translation: 'persimpangan jalan / belok kiri' },
        { word: '红绿灯 (hónglǜdēng) / 右拐 (yòuguǎi)', translation: 'lampu merah / belok kanan' },
        { word: '酒店门口 (jiǔdiàn ménkǒu) / 靠边停车 (kàobiān tíngchē)', translation: 'depan pintu hotel / berhenti di tepi' }
      ]
    },
    culturalNote: 'Di Tiongkok, aplikasi Didi Chuxing (滴滴出行) adalah raja ride-hailing. Pengemudi akan selalu menanyakan "手机尾号" (wěihào) untuk memastikan penumpang yang masuk mobil adalah orang yang memesan di aplikasi.'
  },

  {
    id: 'travel-02',
    category: 'Transportasi',
    level: 'Menengah',
    title: 'Naik MRT & Menanyakan Arah Tersesat',
    titleZh: '乘坐地铁与问路',
    titlePinyin: 'Chéngzuò dìtiě yǔ wènlù',
    icon: '🚇',
    summary: 'Bagaimana menanyakan rute subway MRT, transit stasiun, dan mencari toilet terdekat.',
    dialogue: [
      {
        speaker: '乘客 (Turis)',
        role: 'A',
        zh: '你好，打扰一下，请问去火车站应该坐几号线？',
        pinyin: 'Nǐ hǎo, dǎrǎo yíxià, qǐngwèn qù huǒchēzhàn yīnggāi zuò jǐ hào xiàn?',
        id: 'Halo, permisi mengganggu sebentar, mau tanya kalau mau ke stasiun kereta api harus naik jalur nomor berapa?',
        tokens: [
          { zh: '打扰一下', pinyin: 'dǎrǎo yíxià', id: 'mengganggu sebentar / permisi', tone: 3 },
          { zh: '火车站', pinyin: 'huǒchēzhàn', id: 'stasiun kereta api', tone: 3 },
          { zh: '应该', pinyin: 'yīnggāi', id: 'seharusnya', tone: 1 },
          { zh: '几号线', pinyin: 'jǐ hào xiàn', id: 'jalur nomor berapa', tone: 3 }
        ]
      },
      {
        speaker: '路人 (Pejalan Kaki)',
        role: 'B',
        zh: '你先坐一号线，坐三站到人民广场，然后换乘二号线。',
        pinyin: 'Nǐ xiān zuò yī hào xiàn, zuò sān zhàn dào Rénmín Guǎngchǎng, ránhòu huànchéng èr hào xiàn.',
        id: 'Kamu pertama-tama naik Jalur 1, naik 3 stasiun sampai People\'s Square, lalu transit pindah ke Jalur 2.',
        tokens: [
          { zh: '先坐', pinyin: 'xiān zuò', id: 'pertama-tama naik', tone: 1 },
          { zh: '坐三站', pinyin: 'zuò sān zhàn', id: 'naik melewati 3 stasiun', tone: 4 },
          { zh: '换乘', pinyin: 'huànchéng', id: 'transfer / ganti jalur kereta', tone: 4 }
        ]
      },
      {
        speaker: '乘客 (Turis)',
        role: 'A',
        zh: '明白了！对了，请问这附近有洗手间吗？',
        pinyin: 'Míngbai le! Duì le, qǐngwèn zhè fùjìn yǒu xǐshǒujiān ma?',
        id: 'Paham! Oh ya, permisi apakah di sekitar sini ada toilet / kamar mandi?',
        tokens: [
          { zh: '明白了', pinyin: 'míngbai le', id: 'sudah paham / mengerti', tone: 2 },
          { zh: '对了', pinyin: 'duì le', id: 'oh ya / ngomong-ngomong', tone: 4 },
          { zh: '这附近', pinyin: 'zhè fùjìn', id: 'di sekitar sini', tone: 4 },
          { zh: '洗手间', pinyin: 'xǐshǒujiān', id: 'toilet / kamar mandi', tone: 3 }
        ]
      },
      {
        speaker: '路人 (Pejalan Kaki)',
        role: 'B',
        zh: '刷卡进站后，在B出口旁边就有一个洗手间。',
        pinyin: 'Shuākǎ jìnzhàn hòu, zài B chūkǒu pángbiān jiù yǒu yí ge xǐshǒujiān.',
        id: 'Setelah tap kartu masuk stasiun, tepat di samping pintu keluar B ada sebuah toilet.',
        tokens: [
          { zh: '刷卡', pinyin: 'shuākǎ', id: 'tap / gesek kartu', tone: 1 },
          { zh: '进站后', pinyin: 'jìnzhàn hòu', id: 'setelah masuk stasiun', tone: 4 },
          { zh: '出口', pinyin: 'chūkǒu', id: 'pintu keluar (exit)', tone: 1 },
          { zh: '旁边', pinyin: 'pángbiān', id: 'di samping sebelah', tone: 2 }
        ]
      }
    ],
    chunks: [
      {
        phrase: '打扰一下 (dǎrǎo yíxià)',
        pinyin: 'dǎrǎo yíxià',
        meaning: 'Permisi mengganggu sebentar',
        usage: 'Pembuka paling sopan saat ingin bertanya jalan ke orang asing di jalan.'
      },
      {
        phrase: '坐...号线 (zuò... hào xiàn)',
        pinyin: 'zuò... hào xiàn',
        meaning: 'Naik jalur nomor...',
        usage: 'Untuk MRT subway: 1号线 (Line 1), 2号线 (Line 2).'
      },
      {
        phrase: '换乘 (huànchéng)',
        pinyin: 'huànchéng',
        meaning: 'Transit / Ganti kereta',
        usage: 'Kata kunci di stasiun subway MRT saat harus berpindah ke jalur lain.'
      },
      {
        phrase: '洗手间 / 卫生间',
        pinyin: 'xǐshǒujiān / wèishēngjiān',
        meaning: 'Toilet / Kamar mandi',
        usage: 'Lebih halus dan sopan daripada kata "厕所 (cèsuǒ)".'
      }
    ],
    patternDrill: {
      template: '请问去 [Tujuan] 怎么走？离这里远吗？',
      pinyinTemplate: 'Qǐngwèn qù [Tujuan] zěnme zǒu? Lí zhèlǐ yuǎn ma?',
      meaningTemplate: 'Permisi mau ke [Tujuan] bagaimana jalannya? Apakah jauh dari sini?',
      slots: [
        { word: '地铁站 (dìtiězhàn)', translation: 'stasiun MRT subway' },
        { word: '洗手间 (xǐshǒujiān)', translation: 'toilet' },
        { word: '超市 (chāoshì)', translation: 'supermarket' },
        { word: '最近的银行 (zuìjìn de yínháng)', translation: 'bank terdekat' }
      ]
    },
    culturalNote: 'Stasiun MRT di kota-kota besar Tiongkok sangat masif dan memiliki banyak pintu keluar (Exit A, B, C, D, dst). Selalu pastikan Anda keluar dari huruf pintu yang tepat agar tidak tersesat atau harus memutar jalan terlalu jauh.'
  },

  // ================= TEMA 5: KEHIDUPAN HARIAN & JANJIAN =================
  {
    id: 'daily-01',
    category: 'Kehidupan Harian',
    level: 'Dasar',
    title: 'Mengajak Teman Nongkrong di Akhir Pekan',
    titleZh: '周末聚会与约时间',
    titlePinyin: 'Zhōumò jùhuì yǔ yuē shíjiān',
    icon: '☕',
    summary: 'Bagaimana membuat janji temu, menentukan jam, dan tempat bertemu dengan teman.',
    dialogue: [
      {
        speaker: '小陈 (Xiao Chen)',
        role: 'A',
        zh: '这个周末你有什么打算吗？',
        pinyin: 'Zhège zhōumò nǐ yǒu shénme dǎsuan ma?',
        id: 'Akhir pekan ini kamu ada rencana apa?',
        tokens: [
          { zh: '这个周末', pinyin: 'zhège zhōumò', id: 'akhir pekan ini', tone: 4 },
          { zh: '有什么打算', pinyin: 'yǒu shénme dǎsuan', id: 'ada rencana apa', tone: 3 }
        ]
      },
      {
        speaker: '小李 (Xiao Li)',
        role: 'B',
        zh: '暂时没什么安排，打算在家里休息。怎么了？',
        pinyin: 'Zànshí méi shénme ānpái, dǎsuan zài jiālǐ xiūxi. Zěnme le?',
        id: 'Untuk saat ini belum ada agenda apa-apa, rencananya cuma mau istirahat di rumah. Kenapa emangnya?',
        tokens: [
          { zh: '暂时', pinyin: 'zànshí', id: 'sementara ini', tone: 4 },
          { zh: '没什么安排', pinyin: 'méi shénme ānpái', id: 'tidak ada jadwal / acara', tone: 2 },
          { zh: '休息', pinyin: 'xiūxi', id: 'istirahat', tone: 1 },
          { zh: '怎么了', pinyin: 'zěnme le', id: 'ada apa / kenapa?', tone: 3 }
        ]
      },
      {
        speaker: '小陈 (Xiao Chen)',
        role: 'A',
        zh: '听说新开了一家火锅店，我们周六晚上一起去尝尝怎么样？',
        pinyin: 'Tīngshuō xīn kāi le yì jiā huǒguō diàn, wǒmen zhōuliù wǎnshang yìqǐ qù chángchang zěnmeyàng?',
        id: 'Dengar-dengar baru buka sebuah restoran hotpot baru, bagaimana kalau kita Sabtu malam pergi mencobanya bareng?',
        tokens: [
          { zh: '听说', pinyin: 'tīngshuō', id: 'dengar-dengar kabar', tone: 1 },
          { zh: '新开了', pinyin: 'xīn kāi le', id: 'baru buka', tone: 1 },
          { zh: '火锅店', pinyin: 'huǒguō diàn', id: 'restoran hotpot', tone: 3 },
          { zh: '周六晚上', pinyin: 'zhōuliù wǎnshang', id: 'Sabtu malam', tone: 1 },
          { zh: '尝尝', pinyin: 'chángchang', id: 'mencicipi / mencoba rasa', tone: 2 }
        ]
      },
      {
        speaker: '小李 (Xiao Li)',
        role: 'B',
        zh: '太棒了！我很想吃火锅。我们几点在哪里见面？',
        pinyin: 'Tài bàng le! Wǒ hěn xiǎng chī huǒguō. Wǒmen jǐ diǎn zài nǎlǐ jiànmiàn?',
        id: 'Asyik banget! Aku lagi kepengen banget makan hotpot. Kita jam berapa dan di mana ketemunya?',
        tokens: [
          { zh: '太棒了', pinyin: 'tài bàng le', id: 'bagus sekali / mantap', tone: 4 },
          { zh: '想吃火锅', pinyin: 'xiǎng chī huǒguō', id: 'ingin makan hotpot', tone: 3 },
          { zh: '几点', pinyin: 'jǐ diǎn', id: 'jam berapa', tone: 3 },
          { zh: '在哪里见面', pinyin: 'zài nǎlǐ jiànmiàn', id: 'bertemu di mana', tone: 4 }
        ]
      },
      {
        speaker: '小陈 (Xiao Chen)',
        role: 'A',
        zh: '周六晚上六点半，在商场正门见，不见不散！',
        pinyin: 'Zhōuliù wǎnshang liù diǎn bàn, zài shāngchǎng zhèngmén jiàn, bú jiàn bú sàn!',
        id: 'Sabtu malam jam 6 setengah (18:30), ketemu di pintu utama mall, janji jangan pulang sebelum ketemu ya!',
        tokens: [
          { zh: '六点半', pinyin: 'liù diǎn bàn', id: 'jam setengah tujuh (6:30)', tone: 4 },
          { zh: '商场正门', pinyin: 'shāngchǎng zhèngmén', id: 'pintu depan utama pusat perbelanjaan', tone: 1 },
          { zh: '不见不散', pinyin: 'bú jiàn bú sàn', id: 'tak jumpa tak bubar (pasti tunggu)', tone: 2 }
        ]
      }
    ],
    chunks: [
      {
        phrase: '有什么打算？',
        pinyin: 'Yǒu shénme dǎsuan?',
        meaning: 'Ada rencana apa?',
        usage: 'Cara santai menanyakan agenda teman di hari libur.'
      },
      {
        phrase: '听说 (tīngshuō)',
        pinyin: 'tīngshuō',
        meaning: 'Dengar-dengar / Katanya',
        usage: 'Pengantar topik obrolan yang sangat alami di obrolan sehari-hari.'
      },
      {
        phrase: '尝尝 (chángchang)',
        pinyin: 'chángchang',
        meaning: 'Mencicipi / mencoba kuliner',
        usage: 'Reduplikasi kata kerja (verb doubling) untuk memberi kesan santai dan mencoba.'
      },
      {
        phrase: '几点在哪里见面？',
        pinyin: 'Jǐ diǎn zài nǎlǐ jiànmiàn?',
        meaning: 'Jam berapa dan di mana ketemunya?',
        usage: 'Frasa wajib untuk memastikan waktu dan lokasi janji.'
      },
      {
        phrase: '不见不散 (bú jiàn bú sàn)',
        pinyin: 'bú jiàn bú sàn',
        meaning: 'Pasti datang dan saling menunggu (Be there or be square)',
        usage: 'Idiom populer yang selalu diucapkan saat mengonfirmasi janji temu dengan teman.'
      }
    ],
    patternDrill: {
      template: '我们 [Waktu] 在 [Tempat] 见面，好不好？',
      pinyinTemplate: 'Wǒmen [Waktu] zài [Tempat] jiànmiàn, hǎo bù hǎo?',
      meaningTemplate: 'Kita [Waktu] di [Tempat] bertemu, bagaimana menurutmu?',
      slots: [
        { word: '明天下午三点 (míngtiān xiàwǔ sān diǎn) / 咖啡厅 (kāfēitīng)', translation: 'besok jam 3 sore / kafe' },
        { word: '周日晚上七点 (zhōurì wǎnshang qī diǎn) / 地铁站门口 (dìtiězhàn ménkǒu)', translation: 'Minggu jam 7 malam / pintu masuk stasiun MRT' },
        { word: '下班后 (xiàbān hòu) / 餐厅 (cāntīng)', translation: 'setelah pulang kerja / restoran' }
      ]
    },
    culturalNote: '"不见不散" (Bú jiàn bú sàn) adalah ungkapan yang sangat akrab di antara teman-teman. Ungkapan ini menunjukkan komitmen bahwa "aku akan menunggumu di sana sampai kita berdua saling bertemu".'
  },

  {
    id: 'daily-02',
    category: 'Kehidupan Harian',
    level: 'Menengah',
    title: 'Mengobrol Cuaca & Suasana Hari Ini',
    titleZh: '闲聊天气与日常',
    titlePinyin: 'Xiánliáo tiānqì yǔ rìcháng',
    icon: '🌤️',
    summary: 'Small talk alami mengenai cuaca panas, hujan tiba-tiba, dan membawa payung.',
    dialogue: [
      {
        speaker: '同事A (Rekan A)',
        role: 'A',
        zh: '今天这天气也太热了吧！简直像蒸笼一样。',
        pinyin: 'Jīntiān zhè tiānqì yě tài rè le ba! Jiǎnzhí xiàng zhēnglong yíyàng.',
        id: 'Cuaca hari ini kelewat panas banget ya! Benar-benar persis seperti kukusan dimsum.',
        tokens: [
          { zh: '这天气', pinyin: 'zhè tiānqì', id: 'cuaca ini', tone: 4 },
          { zh: '太热了', pinyin: 'tài rè le', id: 'terlalu panas', tone: 4 },
          { zh: '简直像', pinyin: 'jiǎnzhí xiàng', id: 'benar-benar seperti', tone: 3 },
          { zh: '蒸笼一样', pinyin: 'zhēnglong yíyàng', id: 'persis seperti wadah kukusan', tone: 1 }
        ]
      },
      {
        speaker: '同事B (Rekan B)',
        role: 'B',
        zh: '可不是嘛！刚才出门走两步就满头大汗。',
        pinyin: 'Kě bú shì ma! Gāngcái chūmén zǒu liǎng bù jiù mǎntóu dàhàn.',
        id: 'Iya banget kan! Tadi baru keluar pintu jalan dua langkah saja sudah keringat bercucuran di kepala.',
        tokens: [
          { zh: '可不是嘛', pinyin: 'kě bú shì ma', id: 'iya kan! / tepat sekali!', tone: 3 },
          { zh: '刚才', pinyin: 'gāngcái', id: 'baru saja tadi', tone: 1 },
          { zh: '满头大汗', pinyin: 'mǎntóu dàhàn', id: 'keringat banyak bercucuran', tone: 3 }
        ]
      },
      {
        speaker: '同事A (Rekan A)',
        role: 'A',
        zh: '天气预报说下午可能有雷阵雨，你出门带伞了吗？',
        pinyin: 'Tiānqì yùbào shuō xiàwǔ kěnéng yǒu léizhènyǔ, nǐ chūmén dài sǎn le ma?',
        id: 'Ramalan cuaca bilang nanti sore mungkin ada hujan badai petir, kamu keluar bawa payung tidak?',
        tokens: [
          { zh: '天气预报', pinyin: 'tiānqì yùbào', id: 'prakiraan ramalan cuaca', tone: 1 },
          { zh: '雷阵雨', pinyin: 'léizhènyǔ', id: 'hujan badai petir tiba-tiba', tone: 2 },
          { zh: '带伞了吗', pinyin: 'dài sǎn le ma', id: 'apakah bawa payung', tone: 4 }
        ]
      },
      {
        speaker: '同事B (Rekan B)',
        role: 'B',
        zh: '幸好我包里常年备着一把折叠伞，以防万一。',
        pinyin: 'Xìnghǎo wǒ bāo lǐ chángnián bèizhe yì bǎ zhédié sǎn, yǐfáng wànyī.',
        id: 'Untunglah di tasku sepanjang tahun selalu sedia payung lipat, buat jaga-jaga kalau terjadi apa-apa.',
        tokens: [
          { zh: '幸好', pinyin: 'xìnghǎo', id: 'untunglah / syukurlah', tone: 4 },
          { zh: '常年备着', pinyin: 'chángnián bèizhe', id: 'selalu sedia sepanjang waktu', tone: 2 },
          { zh: '折叠伞', pinyin: 'zhédié sǎn', id: 'payung lipat', tone: 2 },
          { zh: '以防万一', pinyin: 'yǐfáng wànyī', id: 'untuk jaga-jaga kemungkinan buruk', tone: 3 }
        ]
      }
    ],
    chunks: [
      {
        phrase: '可不是嘛！(Kě bú shì ma!)',
        pinyin: 'kě bú shì ma',
        meaning: 'Bener banget! / Banget kan!',
        usage: 'Respon setuju yang luar biasa natural untuk menanggapi keluhan lawan bicara.'
      },
      {
        phrase: '像...一样 (xiàng... yíyàng)',
        pinyin: 'xiàng... yíyàng',
        meaning: 'Persis seperti...',
        usage: 'Pola perumpamaan dalam bahasa Mandarin: 像蒸笼一样 (seperti kukusan panas).'
      },
      {
        phrase: '幸好 (xìnghǎo)',
        pinyin: 'xìnghǎo',
        meaning: 'Untung saja / Syukurlah',
        usage: 'Diucapkan saat lolos dari kesialan.'
      },
      {
        phrase: '以防万一 (yǐfáng wànyī)',
        pinyin: 'yǐfáng wànyī',
        meaning: 'Buat jaga-jaga (just in case)',
        usage: 'Idiom praktis sehari-hari yang sangat sering dipakai native speakers.'
      }
    ],
    patternDrill: {
      template: '今天天气真 [Kondisi Cuaca]，幸好我 [Tindakan Antisipasi]。',
      pinyinTemplate: 'Jīntiān tiānqì zhēn [Kondisi Cuaca], xìnghǎo wǒ [Tindakan Antisipasi].',
      meaningTemplate: 'Cuaca hari ini benar-benar [Kondisi Cuaca], untunglah saya [Tindakan Antisipasi].',
      slots: [
        { word: '冷 (lěng) / 穿了厚外套 (chuān le hòu wàitào)', translation: 'dingin / sudah pakai jaket tebal' },
        { word: '晒 (shài) / 涂了防晒霜 (tú le fángshàishuāng)', translation: 'terik membakar / pakai tabir surya (sunscreen)' },
        { word: '多雨 (duōyǔ) / 开车来了 (kāichē lái le)', translation: 'sering hujan / bawa mobil ke sini' }
      ]
    },
    culturalNote: 'Orang Tiongkok sangat suka membawa payung ("伞 sǎn") bahkan saat hari panas terik untuk menangkis sinar UV matahari (dikenal sebagai "防晒 fángshài"). Oleh karena itu, payung lipat kecil ("折叠伞 zhédié sǎn") adalah barang bawaan wajib di dalam tas.'
  },

  // ================= TEMA 6: KERJA SANTAI & TELEPON =================
  {
    id: 'work-01',
    category: 'Kerja & Telepon',
    level: 'Menengah',
    title: 'Menerima Telepon & Meninggalkan Pesan',
    titleZh: '电话沟通与留言',
    titlePinyin: 'Diànhuà gōutōng yǔ liúyán',
    icon: '📞',
    summary: 'Etika mengangkat telepon kantor, menanyakan keberadaan seseorang, dan titip pesan balik.',
    dialogue: [
      {
        speaker: '王助理 (Asisten Wang)',
        role: 'A',
        zh: '喂，您好！这里是创新科技，请问您找哪位？',
        pinyin: 'Wéi, nín hǎo! Zhèlǐ shì Chuàngxīn Kējì, qǐngwèn nín zhǎo nǎ wèi?',
        id: 'Halo, salam sejahtera! Di sini PT Inovasi Teknologi, permisi Anda mencari siapa ya?',
        tokens: [
          { zh: '喂', pinyin: 'wéi', id: 'halo (saat angkat telepon)', tone: 2 },
          { zh: '请问您找哪位', pinyin: 'qǐngwèn nín zhǎo nǎ wèi', id: 'permisi mencari bapak/ibu siapa', tone: 3 }
        ]
      },
      {
        speaker: '陈经理 (Manajer Chen)',
        role: 'B',
        zh: '你好，我是顺达物流的陈伟。请问张总在吗？',
        pinyin: 'Nǐ hǎo, wǒ shì Shùndá Wùliú de Chén Wěi. Qǐngwèn Zhāng zǒng zài ma?',
        id: 'Halo, saya Chen Wei dari Logistik Shunda. Permisi apakah Direktur Zhang ada di tempat?',
        tokens: [
          { zh: '我是', pinyin: 'wǒ shì', id: 'saya adalah', tone: 3 },
          { zh: '张总', pinyin: 'Zhāng zǒng', id: 'Direktur / General Manager Zhang', tone: 1 },
          { zh: '在吗', pinyin: 'zài ma', id: 'apakah ada di tempat?', tone: 4 }
        ]
      },
      {
        speaker: '王助理 (Asisten Wang)',
        role: 'A',
        zh: '不好意思，张总正在开会，大概半小时后结束。需要帮您留言吗？',
        pinyin: 'Bù hǎoyìsi, Zhāng zǒng zhèngzài kāihuì, dàgài bàn xiǎoshí hòu jiéshù. Xūyào bāng nín liúyán ma?',
        id: 'Mohon maaf, Direktur Zhang sedang rapat, kira-kira setengah jam lagi baru selesai. Apakah perlu saya catatkan pesan?',
        tokens: [
          { zh: '正在开会', pinyin: 'zhèngzài kāihuì', id: 'sedang berada dalam rapat', tone: 4 },
          { zh: '大概', pinyin: 'dàgài', id: 'kira-kira / estimasi', tone: 4 },
          { zh: '半小时后', pinyin: 'bàn xiǎoshí hòu', id: 'setelah setengah jam', tone: 4 },
          { zh: '留言', pinyin: 'liúyán', id: 'meninggalkan pesan', tone: 2 }
        ]
      },
      {
        speaker: '陈经理 (Manajer Chen)',
        role: 'B',
        zh: '麻烦让他开完会后给我回个电话，我有急事找他。',
        pinyin: 'Máfan ràng tā kāi wán huì hòu gěi wǒ huí ge diànhuà, wǒ yǒu jíshì zhǎo tā.',
        id: 'Tolong sampaikan ke beliau setelah selesai rapat untuk menelepon saya balik, saya ada urusan mendesak.',
        tokens: [
          { zh: '麻烦让他', pinyin: 'máfan ràng tā', id: 'tolong minta dia / suruh beliau', tone: 2 },
          { zh: '开完会后', pinyin: 'kāi wán huì hòu', id: 'setelah selesai meeting', tone: 1 },
          { zh: '回个电话', pinyin: 'huí ge diànhuà', id: 'menelepon kembali (call back)', tone: 2 },
          { zh: '急事', pinyin: 'jíshì', id: 'urusan mendesak / penting', tone: 2 }
        ]
      },
      {
        speaker: '王助理 (Asisten Wang)',
        role: 'A',
        zh: '好的陈经理，我一定转告他。祝您工作顺利！',
        pinyin: 'Hǎo de Chén jīnglǐ, wǒ yídìng zhuǎngào tā. Zhù nín gōngzuò shùnlì!',
        id: 'Baik Manajer Chen, pasti akan saya sampaikan ke beliau. Semoga pekerjaan Anda lancar!',
        tokens: [
          { zh: '转告他', pinyin: 'zhuǎngào tā', id: 'sampaikan ke dia', tone: 3 },
          { zh: '祝您工作顺利', pinyin: 'zhù nín gōngzuò shùnlì', id: 'semoga kerjaan Anda sukses lancar', tone: 4 }
        ]
      }
    ],
    chunks: [
      {
        phrase: '请问您找哪位？',
        pinyin: 'Qǐngwèn nín zhǎo nǎ wèi?',
        meaning: 'Permisi Anda mencari siapa?',
        usage: 'Etika standar telepon bisnis saat menanyakan orang yang dicari penelepon.'
      },
      {
        phrase: '正在开会 (zhèngzài kāihuì)',
        pinyin: 'zhèngzài kāihuì',
        meaning: 'Sedang meeting / rapat',
        usage: 'Alasan paling umum saat seseorang tidak dapat dihubungi langsung di kantor.'
      },
      {
        phrase: '帮您留言 (bāng nín liúyán)',
        pinyin: 'bāng nín liúyán',
        meaning: 'Membantu mencatatkan pesan',
        usage: 'Tawaran bantuan saat orang yang dicari sedang berhalangan.'
      },
      {
        phrase: '回个电话 (huí ge diànhuà)',
        pinyin: 'huí ge diànhuà',
        meaning: 'Telepon balik (call back)',
        usage: 'Frasa kunci: "麻烦让他给我回电话" (Tolong minta dia telepon balik saya).'
      }
    ],
    patternDrill: {
      template: '麻烦 [Orang] [Waktu] 给我 [Tindakan]。',
      pinyinTemplate: 'Máfan [Orang] [Waktu] gěi wǒ [Tindakan].',
      meaningTemplate: 'Tolong [Orang] [Waktu] [Tindakan] ke saya.',
      slots: [
        { word: '张总 (Zhāng zǒng) / 开完会后 (kāiwán huì hòu) / 回个电话 (huí ge diànhuà)', translation: 'Pak Zhang / setelah rapat / telepon balik' },
        { word: '他 (tā) / 明天早上 (míngtiān zǎoshang) / 发个邮件 (fā ge yóujiàn)', translation: 'dia / besok pagi / kirim email' },
        { word: '李助理 (Lǐ zhùlǐ) / 下午 (xiàwǔ) / 发一下文件 (fā yíxià wénjiàn)', translation: 'Asisten Li / siang ini / kirimkan berkasnya' }
      ]
    },
    culturalNote: 'Di dunia kerja Tiongkok, panggilan "总" (Zǒng, singkatan dari 总经理/总裁) sering dilekatkan pada marga bos, misalnya: 张总 (Zhāng Zǒng), 李总 (Lǐ Zǒng). Ini menunjukkan rasa hormat terhadap posisinya.'
  },

  // ================= TEMA 7: KESEHATAN & SITUASI DARURAT =================
  {
    id: 'health-01',
    category: 'Kesehatan',
    level: 'Praktis',
    title: 'Ke Apotek Membeli Obat Flu & Sakit Kepala',
    titleZh: '药店买药与说明症状',
    titlePinyin: 'Yàodiàn mǎi yào yǔ shuōmíng zhèngzhuàng',
    icon: '💊',
    summary: 'Bagaimana menceritakan gejala masuk angin, demam, dan aturan dosis meminum obat.',
    dialogue: [
      {
        speaker: '顾客 (Pasien)',
        role: 'A',
        zh: '你好，我这两天头疼、流鼻涕，好像有点感冒发烧。',
        pinyin: 'Nǐ hǎo, wǒ zhè liǎng tiān tóuténg, liú bítì, hǎoxiàng yǒudiǎn gǎnmào fāshāo.',
        id: 'Halo, dua hari ini kepala saya sakit, hidung meler, sepertinya agak masuk angin dan demam.',
        tokens: [
          { zh: '这两天', pinyin: 'zhè liǎng tiān', id: 'dua hari belakangan ini', tone: 4 },
          { zh: '头疼', pinyin: 'tóuténg', id: 'sakit kepala / pusing', tone: 2 },
          { zh: '流鼻涕', pinyin: 'liú bítì', id: 'pilek / hidung berair', tone: 2 },
          { zh: '感冒发烧', pinyin: 'gǎnmào fāshāo', id: 'masuk angin & demam berbadan panas', tone: 3 }
        ]
      },
      {
        speaker: '药剂师 (Apoteker)',
        role: 'B',
        zh: '量过体温吗？咳嗽或者喉咙痛不痛？',
        pinyin: 'Liáng guò tǐwēn ma? Késou huòzhě hóulóng tòng bu tòng?',
        id: 'Sudah ukur suhu tubuh belum? Batuk atau tenggorokan sakit tidak?',
        tokens: [
          { zh: '量过体温', pinyin: 'liáng guò tǐwēn', id: 'mengukur suhu badan', tone: 2 },
          { zh: '咳嗽', pinyin: 'késou', id: 'batuk', tone: 2 },
          { zh: '喉咙痛', pinyin: 'hóulóng tòng', id: 'tenggorokan sakit / radang', tone: 2 }
        ]
      },
      {
        speaker: '顾客 (Pasien)',
        role: 'A',
        zh: '喉咙有点痒，但不怎么咳嗽。有见效快一点的感冒药吗？',
        pinyin: 'Hóulóng yǒudiǎn yǎng, dàn bù zěnme késou. Yǒu jiànxiào kuài yìdiǎn de gǎnmàoyào ma?',
        id: 'Tenggorokan agak gatal, tapi tidak terlalu batuk. Ada obat flu yang efeknya agak cepat?',
        tokens: [
          { zh: '喉咙有点痒', pinyin: 'hóulóng yǒudiǎn yǎng', id: 'tenggorokan agak gatal', tone: 2 },
          { zh: '见效快', pinyin: 'jiànxiào kuài', id: 'khasiat manjur / cepat berefek', tone: 4 },
          { zh: '感冒药', pinyin: 'gǎnmàoyào', id: 'obat flu / pilek', tone: 3 }
        ]
      },
      {
        speaker: '药剂师 (Apoteker)',
        role: 'B',
        zh: '给你这个感冒胶囊。一天吃三次，一次两粒，饭后温水送服。',
        pinyin: 'Gěi nǐ zhège gǎnmào jiāonáng. Yì tiān chī sān cì, yí cì liǎng lì, fànhòu wēnshuǐ sòng fú.',
        id: 'Saya berikan kapsul flu ini. Sehari minum 3 kali, sekali minum 2 butir, sesudah makan diminum dengan air hangat.',
        tokens: [
          { zh: '感冒胶囊', pinyin: 'gǎnmào jiāonáng', id: 'kapsul flu', tone: 3 },
          { zh: '一天吃三次', pinyin: 'yì tiān chī sān cì', id: 'sehari minum 3 kali', tone: 1 },
          { zh: '一次两粒', pinyin: 'yí cì liǎng lì', id: 'sekali minum dua butir kapsul', tone: 2 },
          { zh: '饭后', pinyin: 'fànhòu', id: 'setelah makan', tone: 4 },
          { zh: '温水送服', pinyin: 'wēnshuǐ sòng fú', id: 'diminum bersama air hangat', tone: 1 }
        ]
      }
    ],
    chunks: [
      {
        phrase: '头疼 / 嗓子疼 / 肚子疼',
        pinyin: 'tóuténg / sǎngzi téng / dùzi téng',
        meaning: 'Sakit kepala / Sakit tenggorokan / Sakit perut',
        usage: 'Pola dasar untuk menyatakan bagian tubuh yang terasa nyeri (疼 téng).'
      },
      {
        phrase: '感冒发烧 (gǎnmào fāshāo)',
        pinyin: 'gǎnmào fāshāo',
        meaning: 'Flu dan demam',
        usage: 'Gejala penyakit paling sering saat pergantian musim.'
      },
      {
        phrase: '一天吃三次，一次两粒',
        pinyin: 'Yì tiān chī sān cì, yí cì liǎng lì',
        meaning: 'Sehari minum 3 kali, sekali konsumsi 2 butir',
        usage: 'Formula dosis standar resep obat di apotek.'
      },
      {
        phrase: '温水送服 (wēnshuǐ sòng fú)',
        pinyin: 'wēnshuǐ sòng fú',
        meaning: 'Ditelan bersama air hangat',
        usage: 'Instruksi formal yang selalu tertulis di kemasan obat Tiongkok.'
      }
    ],
    patternDrill: {
      template: '我有点 [Gejala]，请问有治 [Penyakit] 的药吗？',
      pinyinTemplate: 'Wǒ yǒudiǎn [Gejala], qǐngwèn yǒu zhì [Penyakit] de yào ma?',
      meaningTemplate: 'Saya merasa agak [Gejala], permisi apakah ada obat penyembuh [Penyakit]?',
      slots: [
        { word: '头晕 (tóuyūn) / 感冒 (gǎnmào)', translation: 'pusing melayang / flu masuk angin' },
        { word: '恶心 (ěxin) / 胃痛 (wèitòng)', translation: 'mual / sakit lambung / maag' },
        { word: '失眠 (shīmián) / 神经衰弱 (shénjīng shuāiruò)', translation: 'susah tidur / insomnia lelah' }
      ]
    },
    culturalNote: 'Di Tiongkok, nasihat kesehatan nomor satu adalah "多喝热水" (Duō hē rèshuǐ = Perbanyak minum air hangat). Di apotek, mereka juga menyediakan kombinasi obat herbal Tiongkok (中成药) dan obat farmasi barat (西药).'
  },

  // ================= TEMA 8: SLANG & UNGKAPAN GAUL =================
  {
    id: 'slang-01',
    category: 'Ungkapan Gaul',
    level: 'Menengah',
    title: 'Slang Populer: Memberi Pujian & Ungkapan Spontan',
    titleZh: '网络流行语与赞赏',
    titlePinyin: 'Wǎnglù liúxíngyǔ yǔ zànshǎng',
    icon: '🔥',
    summary: 'Ungkapan gaul kekinian: "mantap banget", "terserah", "santai aja", dan "nggak habis pikir".',
    dialogue: [
      {
        speaker: '小张 (Xiao Zhang)',
        role: 'A',
        zh: '看！小王这次汉语水平考试居然拿了满分，太给力了吧！',
        pinyin: 'Kàn! Xiǎo Wáng zhè cì Hànyǔ shuǐpíng kǎoshì jīrán ná le mǎnfēn, tài gěilì le ba!',
        id: 'Lihat deh! Si Xiao Wang ujian HSK kali ini ternyata dapat nilai sempurna 100, gokil keren banget ya!',
        tokens: [
          { zh: '居然', pinyin: 'jīrán', id: 'ternyata di luar dugaan', tone: 1 },
          { zh: '拿了满分', pinyin: 'ná le mǎnfēn', id: 'dapat skor nilai penuh', tone: 2 },
          { zh: '太给力了', pinyin: 'tài gěilì le', id: 'gokil mantap / keren abis', tone: 4 }
        ]
      },
      {
        speaker: '小李 (Xiao Li)',
        role: 'B',
        zh: '绝了！他每天下班都在图书馆卷到深夜，真是个学霸。',
        pinyin: 'Jué le! Tā měitiān xiàbān dōu zài túshūguǎn juǎn dào shēnyè, zhēn shì ge xuébà.',
        id: 'Gila parah keren! Dia tiap hari pulang kerja selalu belajar mati-matian (ngevampir) di perpus sampai larut malam, bener-bener si raja belajar (xueba).',
        tokens: [
          { zh: '绝了', pinyin: 'jué le', id: 'gokil / luar biasa parah', tone: 2 },
          { zh: '卷', pinyin: 'juǎn', id: 'kompetitif mati-matian (involution)', tone: 3 },
          { zh: '深夜', pinyin: 'shēnyè', id: 'larut malam', tone: 1 },
          { zh: '学霸', pinyin: 'xuébà', id: 'anak jenius / juara kelas ambis', tone: 2 }
        ]
      },
      {
        speaker: '小张 (Xiao Zhang)',
        role: 'A',
        zh: '晚上我们要不要叫上他一起吃顿大餐庆祝一下？',
        pinyin: 'Wǎnshang wǒmen yào bu yào jiàoshang tā yìqǐ chī dùn dàcān qìngzhù yíxià?',
        id: 'Nanti malam kita ajak dia makan enak rame-rame buat selebrasi yuk?',
        tokens: [
          { zh: '叫上他', pinyin: 'jiàoshang tā', id: 'ajak dia serta', tone: 4 },
          { zh: '吃顿大餐', pinyin: 'chī dùn dàcān', id: 'makan pesta besar enak', tone: 1 },
          { zh: '庆祝一下', pinyin: 'qìngzhù yíxià', id: 'merayakan sebentar', tone: 4 }
        ]
      },
      {
        speaker: '小李 (Xiao Li)',
        role: 'B',
        zh: '我举双手赞成！走起！',
        pinyin: 'Wǒ jǔ shuāngshǒu zànchéng! Zǒu qǐ!',
        id: 'Aku angkat dua tangan setuju banget! Gas berangkat!',
        tokens: [
          { zh: '举双手赞成', pinyin: 'jǔ shuāngshǒu zànchéng', id: 'angkat dua tangan setuju', tone: 3 },
          { zh: '走起', pinyin: 'zǒu qǐ', id: 'kuy gas / lets go!', tone: 3 }
        ]
      }
    ],
    chunks: [
      {
        phrase: '太给力了！(Tài gěilì le!)',
        pinyin: 'tài gěilì le',
        meaning: 'Mantap banget! / Keren abis!',
        usage: 'Slang populer asal internet untuk memuji sesuatu yang sangat memuaskan atau hebat.'
      },
      {
        phrase: '绝了！(Jué le!)',
        pinyin: 'jué le',
        meaning: 'Gokil! / Luar biasa tiada duanya!',
        usage: 'Bisa berarti positif (hebat banget) atau negatif (parah banget kelakuannya).'
      },
      {
        phrase: '学霸 (xuébà)',
        pinyin: 'xuébà',
        meaning: 'Orang yang sangat pintar / rajin belajar juara',
        usage: 'Lawan katanya adalah "学渣 (xuformatted zhā)" = orang yang nilainya pas-pasan.'
      },
      {
        phrase: '走起！(Zǒu qǐ!)',
        pinyin: 'zǒu qǐ',
        meaning: 'Gas berangkat! / Kuy!',
        usage: 'Ajakan spontan penuh energi untuk langsung jalan bersama.'
      }
    ],
    patternDrill: {
      template: '这件事情太 [Slang] 了！我 [Tanggapan]。',
      pinyinTemplate: 'Zhè jiàn shìqing tài [Slang] le! Wǒ [Tanggapan].',
      meaningTemplate: 'Hal ini benar-benar terlalu [Slang]! Saya [Tanggapan].',
      slots: [
        { word: '给力 (gěilì) / 举双手赞成 (jǔ shuāngshǒu zànchéng)', translation: 'mantap / angkat dua tangan setuju' },
        { word: '牛了 (niú le) / 佩服得五体投地 (pèifú de wǔtǐtóudì)', translation: 'keren badai / sungkem angkat topi' },
        { word: '扎心 (zhāxīn) / 不想说了 (bù xiǎng shuō le)', translation: 'nusuk di hati / gamau bahas lagi deh' }
      ]
    },
    culturalNote: 'Generasi muda Tiongkok menggunakan banyak istilah slang yang ekspresif seperti "卷" (juǎn = kompetisi super ketat antar manusia), "躺平" (tǎngpíng = rebahan santai tidak mau ikut perlombaan hidup), dan "走起" (zǒuqǐ = gas kuy!). Menggunakan slang ini akan membuat percakapan terasa hidup dan akrab.'
  }
];

// Kategori percakapan untuk navigasi filter
export const CATEGORIES = [
  { id: 'all', label: 'Semua Percakapan', icon: '✨' },
  { id: 'Perkenalan', label: 'Perkenalan', icon: '👋' },
  { id: 'Kafe & Resto', label: 'Kafe & Resto', icon: '🧋' },
  { id: 'Belanja', label: 'Belanja & Pasar', icon: '🛍️' },
  { id: 'Transportasi', label: 'Transportasi & Arah', icon: '🚕' },
  { id: 'Kehidupan Harian', label: 'Kehidupan Harian', icon: '☕' },
  { id: 'Kerja & Telepon', label: 'Kerja & Bisnis', icon: '💼' },
  { id: 'Kesehatan', label: 'Kesehatan & Apotek', icon: '💊' },
  { id: 'Ungkapan Gaul', label: 'Slang & Gaul', icon: '🔥' }
];

// Tingkatan level
export const LEVELS = ['Semua Level', 'Dasar', 'Menengah', 'Praktis'];
