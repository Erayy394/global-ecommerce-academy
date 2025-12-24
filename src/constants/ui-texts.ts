/**
 * UI metinleri - Türkçe
 * İleride i18n entegrasyonu için merkezi konum
 */

export const UI_TEXTS = {
  // Header
  header: {
    logo: "Global E-Ticaret Akademisi",
    nav: {
      trainings: "Eğitimler",
      howItWorks: "Nasıl Çalışır?",
      contact: "İletişim",
    },
    cta: "Eğitime Başla",
  },

  // Hero
  hero: {
    title: "Global E-Ticaret Uygulamalı Eğitim Programı",
    subtitle:
      "Amazon, Etsy, eBay, ödeme altyapıları ve web siteleri için adım adım, rehberli ve uygulamalı eğitim.",
    features: [
      {
        icon: "📋",
        title: "Adım Adım Rehber",
        description: "Her modül detaylı açıklamalar ve uygulama adımları içerir",
      },
      {
        icon: "✅",
        title: "Görevler & Kontrol Soruları",
        description: "Her adımda kontrol noktaları ve pratik görevler",
      },
      {
        icon: "📝",
        title: "Modül Sonu Sınav",
        description: "Öğrendiklerinizi sınavlarla pekiştirin ve ilerleyin",
      },
    ],
    cta: {
      primary: "Eğitime Başla",
      secondary: "GitHub'da İncele",
    },
  },

  // Instructor
  instructor: {
    name: "Eray Yeşilyurt",
    title: "Yazılım Mühendisi",
    description:
      "Kurumsal e-ticaret altyapıları ve global pazaryeri süreçlerinde uygulamalı eğitim & danışmanlık.",
    contact: {
      email: "info@domain.com",
      linkedin: "https://www.linkedin.com/in/eray-ye%C5%9Filyurt/",
      github: "https://github.com/Erayy394",
      instagram: "https://www.instagram.com/3dmodeling_art/",
      codepen: "https://codepen.io/Erayy394",
    },
    badges: ["Amazon • Etsy • eBay", "Shopify • WooCommerce", "Payoneer • Wise"],
    disclaimer:
      "Not: Eğitim içerikleri bilgilendirme amaçlıdır, ülkeye göre süreçler değişebilir.",
  },

  // How It Works
  howItWorks: {
    title: "Nasıl Çalışır?",
    steps: [
      {
        number: "1",
        title: "Modül seç",
        description: "İhtiyacınıza uygun eğitim modülünü seçin ve başlayın",
      },
      {
        number: "2",
        title: "Adım adım uygula",
        description: "Her adımı takip edin, görevleri tamamlayın ve kontrol sorularını yanıtlayın",
      },
      {
        number: "3",
        title: "Sınavı geç, ilerle",
        description: "Modül sonu sınavını geçerek bir sonraki seviyeye ilerleyin",
      },
    ],
  },

  // CTA Band
  ctaBand: {
    title: "Hazır mısın?",
    description:
      "Eğitime başla, yarım kaldığın yerden devam et ve ilerlemeni takip et.",
    button: "Eğitime Başla",
  },

  // CTA Band
  ctaBand: {
    title: "Hazır mısın?",
    description:
      "Eğitime başla, yarım kaldığın yerden devam et ve ilerlemeni takip et.",
    button: "Eğitime Başla",
  },

  // Trainings Page
  trainings: {
    title: "Eğitimler",
    subtitle:
      "Üyelik gerekmez. İlerleme bu cihazda kaydedilir ve kaldığın yerden devam edebilirsin.",
    infoBanner: {
      message:
        "Bu bilgisayar senin çalışma alanın: ilerleme, sınav ve tamamlananlar burada tutulur.",
      link: "Nasıl çalışır?",
    },
    filters: {
      search: "Eğitim ara…",
      category: {
        label: "Kategori",
        all: "Tümü",
      },
      level: {
        label: "Seviye",
        all: "Tümü",
      },
      sort: {
        label: "Sıralama",
        default: "Varsayılan",
        duration: "Süre (Kısa→Uzun)",
        level: "Seviye",
        alphabetical: "Alfabetik",
      },
    },
    card: {
      metrics: "{stepsCount} Adım • {quizQuestionsCount} Soru • ~{estimatedHours} Saat",
      quizNote: "Modül sonunda mini sınav bulunur.",
      actions: {
        start: "Başla",
        continue: "Devam Et",
        review: "Tekrar Göz At",
        viewResults: "Sonuçları Gör",
        details: "Detay",
      },
      status: {
        not_started: "Başlanmadı",
        in_progress: "Yarım Kaldı",
        completed: "Tamamlandı",
        exam_passed: "Sınavı Geçti",
      },
    },
    emptyState: {
      title: "Sonuç bulunamadı",
      description: "Filtreleri değiştirerek tekrar deneyin.",
      clearFilters: "Filtreleri Temizle",
    },
    starterGuide: {
      title: "Nereden başlamalı?",
      subtitle: "Önerilen yol haritası ile başlayın",
      suggestions: [
        {
          title: "Yol Haritası",
          description: "Eğitim sırasını öğrenin ve planınızı oluşturun",
        },
        {
          title: "Amazon Başlangıç",
          description: "En popüler pazaryeri ile başlayın",
        },
        {
          title: "Ödeme Altyapıları",
          description: "Para transferi ve ödeme sistemlerini öğrenin",
        },
      ],
      startButton: "Önerilen sırayla başla",
    },
    resumeBanner: {
      title: "Kaldığın yerden devam et",
      description: "Devam eden eğitimlerin var",
      viewAll: "Tümünü Gör",
    },
  },

  // Footer
  footer: {
    copyright: (year: number) => `© ${year} Eray Yeşilyurt. Tüm hakları saklıdır.`,
    links: {
      privacy: "Gizlilik",
      terms: "Kullanım",
      contact: "İletişim",
    },
  },

  // How It Works Page
  howItWorksPage: {
    title: "Nasıl Çalışır?",
    subtitle:
      "Global E-Ticaret Akademisi platformunu kullanarak eğitimlerinize nasıl başlayacağınızı ve ilerlemenizi nasıl takip edeceğinizi öğrenin.",
    sections: {
      purpose: {
        title: "Amaç",
        content:
          "Global E-Ticaret Akademisi, teknik bilgi gerektirmeden global e-ticaret süreçlerini öğrenmenizi sağlayan, adım adım rehberli bir eğitim platformudur. Amazon, Etsy, eBay gibi pazaryerlerden ödeme altyapılarına, firma kuruluşundan operasyonel süreçlere kadar tüm konuları uygulamalı olarak öğrenirsiniz.",
      },
      steps: {
        title: "Nasıl Çalışır?",
        items: [
          {
            number: "1",
            title: "Eğitim Seçin",
            description:
              "Eğitimler sayfasından ihtiyacınıza uygun modülü seçin. Her eğitim, adım sayısı, süre ve seviye bilgisiyle birlikte sunulur.",
          },
          {
            number: "2",
            title: "Adım Adım İlerleyin",
            description:
              "Seçtiğiniz eğitimde adım adım ilerleyin. Her adımda ders içeriği, görevler ve kontrol soruları bulunur. Rehber balonları size yol gösterir.",
          },
          {
            number: "3",
            title: "Görevleri Tamamlayın",
            description:
              "Her adımdaki görevleri (checklist, form alanları) tamamlayın. Görevler tamamlanmadan sonraki adıma geçemezsiniz.",
          },
          {
            number: "4",
            title: "Kontrol Sorularını Yanıtlayın",
            description:
              "Kontrol noktalarındaki soruları yanıtlayın. Doğru cevapları vererek bilginizi pekiştirin ve ilerleyin.",
          },
          {
            number: "5",
            title: "İlerlemenizi Takip Edin",
            description:
              "Eğitimler sayfasında ilerlemenizi görüntüleyin. Kaldığınız yerden devam edin ve tamamlanan eğitimleri görüntüleyin.",
          },
        ],
      },
      progress: {
        title: "İlerleme Nasıl Kaydediliyor?",
        content:
          "Platform, ilerlemenizi cihazınızda (localStorage) saklar. Bu sayede:",
        items: [
          "Üyelik veya kayıt gerekmez",
          "İlerlemeniz bu cihazda kalıcı olarak saklanır",
          "Kaldığınız yerden devam edebilirsiniz",
          "Tamamlanan adımlar ve görevler kaydedilir",
          "Eğitim durumunuz (Başlanmadı / Yarım Kaldı / Tamamlandı) takip edilir",
        ],
        note: "Not: İlerleme sadece bu cihazda saklanır. Farklı bir cihazda veya tarayıcıda devam etmek isterseniz, eğitimi yeniden başlatmanız gerekebilir.",
      },
      askInstructor: {
        title: "Eğitmene Soru Sor",
        content:
          "Eğitim sırasında sorularınız mı var? Eğitim sayfalarında sağ altta bulunan 'Eğitmene Sor' butonuna tıklayarak WhatsApp üzerinden doğrudan eğitmenle iletişime geçebilirsiniz.",
        whatsapp: {
          number: "+90 545 904 05 37",
          button: "WhatsApp ile Soru Sor",
        },
        note: "Mesajınızda hangi eğitimde olduğunuz ve hangi adımda kaldığınız otomatik olarak paylaşılır.",
      },
      targetAudience: {
        title: "Kimler İçin Uygun?",
        content: "Bu platform şu kişiler için uygundur:",
        items: [
          "Teknik bilgisi olmayan işletme sahipleri",
          "Global e-ticarete başlamak isteyen girişimciler",
          "Kurumsal ekipler ve çalışanlar",
          "E-ticaret süreçlerini öğrenmek isteyen herkes",
          "Adım adım rehberli öğrenmeyi tercih edenler",
        ],
      },
      importantNote: {
        title: "Önemli Not",
        content:
          "Eğitim içerikleri genel bilgilendirme amaçlıdır. Ülkeye, ürüne ve duruma göre süreçler değişebilir. Finansal, vergisel ve yasal konularda resmi kaynakları ve gerektiğinde uzman görüşünü değerlendirmeniz önerilir.",
      },
    },
    tableOfContents: {
      title: "İçindekiler",
      items: [
        { id: "amac", label: "Amaç" },
        { id: "nasil-calisir", label: "Nasıl Çalışır?" },
        { id: "ilerleme", label: "İlerleme Nasıl Kaydediliyor?" },
        { id: "soru-sor", label: "Eğitmene Soru Sor" },
        { id: "kimler-icin", label: "Kimler İçin Uygun?" },
        { id: "onemli-not", label: "Önemli Not" },
      ],
    },
  },

  // Contact Page
  contact: {
    title: "İletişim",
    subtitle:
      "Soruların, iş birliği tekliflerin veya eğitimle ilgili geri bildirimlerin için bana ulaşabilirsin.",
    aboutTitle: "Hakkında",
    aboutText:
      "Merhaba, ben Eray Yeşilyurt. Yazılım mühendisliği odağında; eğitim platformları, e-ticaret sistemleri ve dijital ürün geliştirme konularında projeler üretiyorum. Bu akademide amaç; global e-ticaret süreçlerini adım adım, uygulamalı şekilde anlaşılır hale getirmek.",
    linksTitle: "Bağlantılar",
    note: "Not: En hızlı dönüş genellikle LinkedIn ve WhatsApp üzerinden olur.",
    links: {
      github: {
        name: "GitHub",
        description: "Açık kaynak projelerim ve kod örnekleri",
        url: "https://github.com/Erayy394",
      },
      linkedin: {
        name: "LinkedIn",
        description: "Profesyonel profil ve iş birliği",
        url: "https://www.linkedin.com/in/eray-ye%C5%9Filyurt/",
      },
      instagram: {
        name: "Instagram",
        description: "3D modelleme ve dijital sanat çalışmalarım",
        url: "https://www.instagram.com/3dmodeling_art/",
      },
      codepen: {
        name: "CodePen",
        description: "Frontend kod örnekleri ve denemeler",
        url: "https://codepen.io/Erayy394",
      },
    },
  },
} as const;

