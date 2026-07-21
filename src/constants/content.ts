import type {
  HeroContent,
  PromoContent,
  MenuContent,
  BranchContent,
  LocationContent,
  FacilityContent,
  AdvantageContent,
  AboutContent,
  FAQContent,
  CTAContent,
  FooterContent,
} from "@/types";

// ── HERO ─────────────────────────────────────────────────────────
export const HERO_CONTENT: HeroContent = {
  eyebrow:     "Indonesian x Western Fusion Dining",
  headline:    "TANTA",
  subheadline: "Resto & Lounge · Plaza Senayan, Jakarta",
  description: "So much warmth, so much flavor, so much care · Strada Coffee & Harney & Sons Tea Partners · Private Room Fountain View",
  badge:       "Premium Dining Experience",
  cta: {
    primary:   "Reservasi via WhatsApp",
    secondary: "Lihat Menu Premium",
  },
  totalFrames: 101,
  frameDir:    "/frame-tanta-parallax",
  frameName:   "frame_",
  slides: [
    {
      id: "slide-nusantara",
      headline: "Kuliner Nusantara Premium",
      description: "Menyajikan hidangan tradisional legendaris seperti Nasi Salero Bukittinggi, Sop Buntut Bakar smoky, dan Lontong Cap Go Meh dengan cita rasa otentik yang kaya."
    },
    {
      id: "slide-western",
      headline: "Western & Fusion Comfort",
      description: "Pilihan Australian Wagyu MB4+ Rib Eye steak premium, Pizza Sourdough bertekstur garing-lembut, dan pasta artisan dengan lumuran bumbu bercita rasa tinggi."
    },
    {
      id: "slide-coffee",
      headline: "Strada Premium Coffee",
      description: "Kolaborasi istimewa untuk lini menu kopi manual brew menggunakan biji single origin pilihan Arabica Nusantara: Gayo, Flores, Toraja, Bali, hingga Papua."
    },
    {
      id: "slide-tea",
      headline: "Harney & Sons Blends",
      description: "Seduhan teh eksklusif kelas dunia dari Harney & Sons Master Tea Blenders (est. 1983) untuk menyempurnakan santap sore kasual Anda yang hangat."
    }
  ]
};

// ── PROMO ────────────────────────────────────────────────────────
export const PROMO_CONTENT: PromoContent = {
  eyebrow: "Penawaran Eksklusif",
  headline: "Momen Gathering Terbaik",
  subheadline: "Nikmati momen berkumpul yang intim dan berkesan dengan penawaran menu fusion dan layanan premium kami.",
  note: "*Syarat & Ketentuan Berlaku. Khusus reservasi area Private Room.",
  groups: [
    {
      id:    "private-room",
      title: "Private Room & Gathering",
      items: [
        "Free pemakaian Private Room AC (kapasitas 10-20 orang) dengan view fountain Plaza Senayan untuk minimum transaksi tertentu",
        "Set menu customized yang disesuaikan khusus dengan preferensi acara Anda",
        "Sangat cocok untuk private business meeting, arisan keluarga, atau gathering intim",
      ],
    },
    {
      id:    "pairing-promo",
      title: "Strada Coffee & Croissant Pairing",
      items: [
        "Paket bundling fresh-baked Butter Croissant & Chocolate premium (panas/dingin) seharga Rp 72.000 / Rp 74.000",
        "Diskon khusus untuk pairing menu dessert (Rhum Tiramisu/Basque Cheesecake) dengan Coffee Blend pilihan",
      ],
    },
    {
      id:    "high-tea",
      title: "Harney & Sons High Tea Experience",
      items: [
        "Sore santai menyegarkan dengan pilihan teh Harney & Sons disajikan dengan set mini croissant gurih (tuna mayo, chicken truffle, dll)",
        "Pemandangan air mancur Plaza Senayan yang menenangkan di lantai 2 SOGO",
      ],
    },
  ],
};

// ── MENU ─────────────────────────────────────────────────────────
export const MENU_CONTENT: MenuContent = {
  eyebrow:     "Daftar Hidangan",
  headline:    "Menu Signature Pilihan",
  subheadline: "Perpaduan bahan-bahan lokal pilihan berstandar tinggi dengan teknik memasak modern guna menghadirkan cita rasa fusion yang memikat.",
  categories: [
    {
      id:    "nusantara",
      name:  "Nusantara Signature",
      items: [
        {
          id:        "nasi-salero-rendang",
          name:      "Nasi Salero Rendang",
          price:     "Rp 148.000",
          description: "Rendang khas Bukittinggi otentik disajikan lengkap dengan ayam bakar bumbu, kari nangka, kari tendon lembut, telur ceplok pedas, paru crispy, dan daun singkong.",
          image:     "/menu/tanta-1.webp",
          tag:       "Best Seller",
        },
        {
          id:        "sop-buntut-bakar",
          name:      "Sop Buntut Bakar",
          price:     "Rp 258.000",
          description: "Oxtail pilihan yang dimasak perlahan hingga sangat empuk, lalu dibakar smoky. Disajikan hangat dengan nasi, kuah rempah wortel tomat segar, sambal, dan kerupuk melinjo.",
          image:     "/menu/tanta-2.webp",
          tag:       "Rekomendasi",
        },
        {
          id:        "lontong-cap-go-meh",
          name:      "Lontong Cap Go Meh",
          price:     "Rp 78.000",
          description: "Lontong gurih tradisional disajikan dengan opor ayam empuk, sayur labu siam, sambal goreng, telur rebus, dan siraman kuah kari kelapa kental yang harum.",
          image:     "/menu/tanta-1.webp",
        }
      ],
    },
    {
      id:    "western-fusion",
      name:  "Western & Fusion",
      items: [
        {
          id:        "rib-eye-steak",
          name:      "Australian Rib Eye MB4+",
          price:     "Rp 398.000",
          description: "Daging Rib Eye Australian Wagyu MB4+ premium panggang, disajikan dengan roasted herb vegetable, onion ring renyah, serta pilihan kentang dan saus premium.",
          image:     "/menu/tanta-2.webp",
          tag:       "Premium Steak",
        },
        {
          id:        "truffle-pizza",
          name:      "Truffle Mushroom Pizza",
          price:     "Rp 168.000",
          description: "Pizza sourdough renyah dengan siraman mushroom velouté, sautéed mushroom melimpah, keju mozzarella, dan sentuhan wangi truffle oil mewah.",
          image:     "/menu/tanta-2.webp",
          tag:       "Terpopuler",
        },
        {
          id:        "dendeng-pasta",
          name:      "Dendeng Balado Pasta",
          price:     "Rp 98.000",
          description: "Artisan pasta yang ditumis wangi dengan coconut oil, tomat hijau, cabai, dan topping potongan dendeng balado khas Minang yang pedas gurih.",
          image:     "/menu/tanta-1.webp",
        }
      ],
    },
    {
      id:    "coffee-tea",
      name:  "Premium Coffee & Tea",
      items: [
        {
          id:        "manual-brew",
          name:      "Manual Brew Single Origin",
          price:     "Rp 68.000",
          description: "Seduhan kopi Arabica murni pilihan (Gayo, Flores Bajawa, Toraja Sapan, Bali Wanagiri, Papua Wamena) bermitra dengan Strada Coffee.",
          image:     "/menu/tanta-3.webp",
          tag:       "Strada Coffee",
        },
        {
          id:        "cinnamon-tea",
          name:      "Hot Cinnamon Sunset Tea",
          price:     "Rp 52.000",
          description: "Seduhan teh eksklusif oleh Harney & Sons Blenders yang memadukan 3 jenis kayu manis, orange peel, dan cengkeh tanpa tambahan gula.",
          image:     "/menu/tanta-3.webp",
          tag:       "Harney & Sons",
        },
        {
          id:        "lychee-espresso",
          name:      "Lychee Espresso Royale",
          price:     "Rp 58.000",
          description: "Mocktail kopi menyegarkan yang memadukan espresso arabica wangi Strada dengan sirup leci manis dan buah leci segar.",
          image:     "/menu/tanta-3.webp",
        }
      ],
    },
    {
      id:    "dessert-snacks",
      name:  "Snacks & Desserts",
      items: [
        {
          id:        "rhum-tiramisu",
          name:      "Rhum Tiramisu",
          price:     "Rp 68.000",
          description: "Dessert klasik Italia bertekstur lembut dan creamy dengan aroma rhum wangi berpadu espresso Strada Coffee.",
          image:     "/menu/tanta-3.webp",
          tag:       "Favorit Dessert",
        },
        {
          id:        "truffle-croquettes",
          name:      "Black Truffle Croquettes",
          price:     "Rp 78.000",
          description: "Kroket kentang goreng garing berisi adonan ragout lembut dengan aroma black truffle oil yang mewah dan harum.",
          image:     "/menu/tanta-2.webp",
        },
        {
          id:        "mini-burger",
          name:      "Nusantara Mini Burger",
          price:     "Rp 128.000",
          description: "Set burger mini unik yang memadukan keunikan 3 rasa nusantara: beef rendang khas Tanta, curry fish, dan chicken sambal matah.",
          image:     "/menu/tanta-1.webp",
        }
      ],
    },
  ],
};

// ── BRANCHES ─────────────────────────────────────────────────────
// Tanta Resto & Lounge adalah single location, diekspor kosong untuk kecocokan tipe data
export const BRANCHES_CONTENT: BranchContent = {
  eyebrow:     "",
  headline:    "",
  subheadline: "",
  branches: []
};

// ── LOCATION ─────────────────────────────────────────────────────
export const LOCATION_CONTENT: LocationContent = {
  eyebrow:     "Lokasi Lounge",
  headline:    "Kunjungi Tanta Resto & Lounge",
  subheadline: "SOGO Plaza Senayan, Lantai 2, Jakarta Pusat",
  description: "Terletak eksklusif di dalam SOGO Department Store, Level 2 Plaza Senayan, Jakarta. Akses masuk mudah dan nyaman dari area parkir atau pintu mal utama. Sangat ideal untuk bersantap siang bisnis, afternoon tea yang tenang, atau makan malam intim.",
  address: "Plaza Senayan, SOGO Department Store Level 2, Jl. Asia Afrika No.8, Gelora, Tanah Abang, Jakarta Pusat 10270",
  phone: "+62 812-3456-7890",
  hours: {
    "Senin - Minggu": "10.00 – 22.00 (Setiap Hari)",
  }
};

// ── FACILITY ─────────────────────────────────────────────────────
export const FACILITY_CONTENT: FacilityContent = {
  eyebrow:     "Fasilitas Lounge",
  headline:    "Eksklusivitas dan Kenyamanan",
  subheadline: "Kami menyediakan fasilitas lounge premium untuk memastikan momen bersantap Anda berjalan sempurna dan nyaman.",
  items: [
    { id: "vip",      label: "Private Room AC",     description: "Ruangan privat kapasitas 10-20 orang, cocok untuk business meeting atau gathering keluarga intim dengan view area fountain", icon: "users" },
    { id: "partnership",label: "Co-Branding Premium", description: "Bekerja sama resmi dengan Strada Coffee untuk lini kopi dan Harney & Sons untuk lini teh premium", icon: "award" },
    { id: "parking",  label: "Parkir Plaza Senayan", description: "Area parkir mal Plaza Senayan yang sangat luas, aman, dan tertata rapi untuk mobil & motor", icon: "parking" },
    { id: "wifi",     label: "Akses WiFi Cepat",    description: "Koneksi internet nirkabel berkecepatan tinggi gratis yang siap menunjang produktivitas Anda", icon: "wifi" },
    { id: "seating",  label: "Cozy Lounge Area",    description: "Layout meja dengan sofa empuk hangat dan suasana tenang khas fine-casual dining", icon: "utensils" },
    { id: "reservasi",label: "Reservasi Mudah",     description: "Layanan pemesanan meja cepat via WhatsApp untuk rombongan makan siang maupun acara gathering", icon: "key" },
  ],
};

// ── ADVANTAGE ────────────────────────────────────────────────────
export const ADVANTAGE_CONTENT: AdvantageContent = {
  eyebrow:     "Keunggulan Tanta",
  headline:    "Cita Rasa Fusion Kelas Atas",
  subheadline: "Komitmen kami untuk menyajikan perpaduan kuliner Indonesia-Barat dengan bahan-bahan premium dan sentuhan personal.",
  items: [
    {
      id:          "co-branding",
      number:      "01",
      title:       "Kolaborasi Brand Kelas Dunia",
      description: "Menyajikan cita rasa kopi Strada Coffee pilihan dan seduhan teh Harney & Sons premium yang mendunia, bukan racikan teh biasa.",
    },
    {
      id:          "fusion-story",
      number:      "02",
      title:       "Fusion Nusantara & Western",
      description: "Menghadirkan menu Nusantara legendaris seperti Nasi Salero Bukittinggi berdampingan dengan steak Australian Wagyu MB4+ premium.",
    },
    {
      id:          "location-view",
      number:      "03",
      title:       "Private Room View Fountain",
      description: "Satu-satunya butik resto di SOGO Plaza Senayan yang menawarkan private room AC dengan pemandangan langsung ke air mancur Plaza Senayan.",
    },
    {
      id:          "warm-service",
      number:      "04",
      title:       "Tagline Hangat & Peduli",
      description: "Setiap hidangan dibuat dan disajikan dengan penuh kehangatan (warmth), rasa terbaik (flavor), dan perhatian penuh (care).",
    },
  ],
};

// ── ABOUT ────────────────────────────────────────────────────────
export const ABOUT_CONTENT: AboutContent = {
  eyebrow: "Tentang Kami",
  headline: "Tanta Resto & Lounge",
  subheadline: "Warmth, Flavor, and Care di Jantung Jakarta",
  description:
    "Tanta Resto & Lounge merupakan butik fine-casual dining yang menghadirkan perpaduan kuliner Indonesia dan Barat di kawasan premium Plaza Senayan, Jakarta. Kami mendedikasikan diri untuk merayakan kehangatan bersantap keluarga melalui hidangan kaya rasa yang diproses dengan standar higienis tinggi. Dengan menyuguhkan kolaborasi eksklusif bersama Strada Coffee dan teh premium Harney & Sons, kami menjamin setiap kunjungan Anda bernilai rasa yang tak terlupakan.",
  stats: [
    { id: "media", value: "8+", label: "Liputan Media Nasional" },
    { id: "coffee", value: "5", label: "Single Origin Arabica" },
    { id: "tea", value: "14+", label: "Varian Teh Premium" },
    { id: "cabang", value: "1", label: "Butik Resto Plaza Senayan" },
  ],
};

// ── FAQ ──────────────────────────────────────────────────────────
export const FAQ_CONTENT: FAQContent = {
  eyebrow:  "FAQ",
  headline: "Pertanyaan Populer",
  items: [
    {
      id:       "halal-status",
      question: "Apakah makanan di Tanta Resto & Lounge dijamin Halal?",
      answer:   "Ya, seluruh menu makanan dan minuman di Tanta Resto & Lounge dijamin 100% Halal. Kami menggunakan bahan-bahan berstandar halal dan diproses secara higienis.",
    },
    {
      id:       "reservation",
      question: "Bagaimana cara melakukan reservasi Private Room?",
      answer:   "Anda dapat menghubungi kami langsung melalui tombol chat WhatsApp (+62 812-3456-7890) untuk memesan ruang VIP atau meja rombongan minimal H-1 sebelum kunjungan.",
    },
    {
      id:       "location-detail",
      question: "Di mana posisi Tanta Resto & Lounge di Plaza Senayan?",
      answer:   "Kami berlokasi di dalam SOGO Department Store, Level 2 Plaza Senayan, Jakarta Pusat. Anda bisa langsung masuk melalui area SOGO lantai 2.",
    },
    {
      id:       "vegetarian-options",
      question: "Apakah ada pilihan menu vegetarian?",
      answer:   "Tentu saja. Kami menyediakan menu sehat dan vegetarian seperti Mix Garden Salad, Sourdough Veggie Pizza, dan Croissant with Veggie.",
    },
    {
      id:       "partnership-brand",
      question: "Apakah Strada Coffee dan Harney & Sons disajikan asli?",
      answer:   "Benar. Kami bermitra resmi (Co-Branding) sehingga biji kopi yang digunakan berasal dari Strada Coffee dan seduhan teh diimpor asli dari Harney & Sons Master Tea Blenders.",
    },
  ],
};

// ── CTA ──────────────────────────────────────────────────────────
export const CTA_CONTENT: CTAContent = {
  eyebrow: "Kunjungi Tanta",
  headline: "So much warmth, so much flavor, so much care",
  subheadline: "Amankan meja Anda untuk makan siang bisnis, gathering keluarga, atau high tea sore yang tenang.",
  cta: {
    primary: "Reservasi via WhatsApp",
    secondary: "Lihat Lokasi",
  },
};

// ── FOOTER ───────────────────────────────────────────────────────
export const FOOTER_CONTENT: FooterContent = {
  tagline:   "Fine-casual dining fusion Indonesia-Barat premium dengan kolaborasi Strada Coffee & Harney & Sons Tea di Plaza Senayan, Jakarta.",
  copyright: `© ${new Date().getFullYear()} Tanta Resto & Lounge. All rights reserved.`,
  links: [
    { label: "Menu", href: "#menu" },
    { label: "Promo",        href: "#promo" },
    { label: "Fasilitas",    href: "#facility" },
    { label: "Lokasi",       href: "#location" },
    { label: "FAQ",          href: "#faq" },
  ],
};
