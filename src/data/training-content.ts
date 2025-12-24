import type { TrainingContent } from "@/types/step";

/**
 * Eğitim içerikleri - Her eğitim için adım adım içerik
 * İleride API'den veya veritabanından çekilebilir
 */

export const amazonTrainingContent: TrainingContent = {
  trainingId: "amazon-baslangic",
  steps: [
    {
      id: "step-1",
      type: "lesson",
      title: "Amazon Seller Hesabı Hazırlık",
      description:
        "Amazon'da satış yapmaya başlamadan önce gerekli evrakları ve bilgileri hazırlayın.",
      content: `
# Amazon Seller Hesabı Hazırlık

Amazon'da satış yapmak için öncelikle gerekli evrakları ve bilgileri hazırlamanız gerekiyor.

## Gerekli Evraklar

- **Kimlik Belgesi**: Pasaport veya ulusal kimlik kartı
- **Şirket Kuruluş Belgesi** (varsa): Ticaret sicil belgesi veya şirket kuruluş belgesi
- **Vergi Kimlik Numarası**: Ülkenize göre VAT numarası veya vergi kimlik numarası
- **Banka Hesap Bilgileri**: IBAN veya hesap numarası
- **Telefon Numarası**: Doğrulama için aktif telefon numarası
- **E-posta Adresi**: İş için kullanılan profesyonel e-posta

## Önemli Notlar

- Tüm belgeler güncel ve geçerli olmalıdır
- Belgelerin fotoğrafları net ve okunabilir olmalıdır
- Amazon hesap doğrulama süreci 1-3 gün sürebilir
- Hesap askıya alınmasını önlemek için tüm bilgileri doğru girin

## Sonraki Adım

Hazırlıklarınızı tamamladıktan sonra bir sonraki adıma geçerek hesap açılışı kontrol listesini göreceksiniz.
      `.trim(),
    },
    {
      id: "step-2",
      type: "task",
      title: "Hesap Açılışı Kontrol Listesi",
      description:
        "Amazon hesabı açmadan önce bu kontrol listesini tamamlayın.",
      tasks: [
        {
          id: "task-1",
          type: "checkbox",
          label: "Kimlik belgesi hazır ve fotoğraflandı",
          required: true,
        },
        {
          id: "task-2",
          type: "checkbox",
          label: "Vergi kimlik numarası hazır",
          required: true,
        },
        {
          id: "task-3",
          type: "checkbox",
          label: "Banka hesap bilgileri (IBAN) hazır",
          required: true,
        },
        {
          id: "task-4",
          type: "checkbox",
          label: "Telefon numarası doğrulandı",
          required: true,
        },
        {
          id: "task-5",
          type: "field",
          label: "Hedef pazar seçimi (US/UK/EU)",
          placeholder: "Örn: US, UK, DE, FR",
          required: true,
        },
      ],
      requiredTasksCount: 5,
    },
    {
      id: "step-3",
      type: "lesson",
      title: "Marka/Ürün Uygunluğu ve Kategori Seçimi",
      description:
        "Ürününüzün Amazon'da satılabilirliğini kontrol edin ve doğru kategoriyi seçin.",
      content: `
# Marka/Ürün Uygunluğu ve Kategori Seçimi

Amazon'da satış yapmadan önce ürününüzün uygunluğunu ve doğru kategoriyi belirlemeniz önemlidir.

## Ürün Uygunluk Kontrolü

### Yasak Ürünler
- İlaçlar ve tıbbi cihazlar (özel izin gerekir)
- Tehlikeli maddeler
- Telif hakkı ihlali yapan ürünler
- Sahte veya taklit ürünler

### Kısıtlı Ürünler
- Gıda ürünleri (özel sertifikalar gerekebilir)
- Kozmetik ürünleri
- Oyuncaklar (güvenlik standartları)
- Elektronik ürünler (CE, FCC işaretleri)

## Kategori Seçimi

Amazon'da doğru kategori seçimi:
- **Arama görünürlüğünü** artırır
- **Rekabet seviyesini** belirler
- **Komisyon oranını** etkiler
- **Ürün gereksinimlerini** belirler

### Kategori Seçim İpuçları

1. **Ana kategoriyi** doğru seçin (örn: "Home & Kitchen")
2. **Alt kategorileri** mümkün olduğunca spesifik seçin
3. **Rakip ürünlerin** kategorilerini inceleyin
4. **Amazon'un önerdiği** kategorileri kontrol edin

## Sonraki Adım

Kategori seçimini tamamladıktan sonra ürün listeleme temellerine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-4",
      type: "task",
      title: "Listeleme Temelleri (Başlık, Bullet, Açıklama)",
      description:
        "Ürün başlığı, bullet point'ler ve açıklama metnini hazırlayın.",
      tasks: [
        {
          id: "task-6",
          type: "field",
          label: "Ürün adı taslağı (max 200 karakter)",
          placeholder: "Örn: Premium Wireless Bluetooth Headphones...",
          required: true,
        },
        {
          id: "task-7",
          type: "field",
          label: "İlk 5 anahtar kelime",
          placeholder: "virgülle ayırın: wireless, bluetooth, noise cancelling...",
          required: true,
        },
        {
          id: "task-8",
          type: "checkbox",
          label: "Bullet point'ler hazırlandı (5 adet, her biri özellik vurgusu)",
          required: true,
        },
        {
          id: "task-9",
          type: "checkbox",
          label: "Ürün açıklaması yazıldı (sorun-çözüm-fayda yapısı)",
          required: true,
        },
      ],
      requiredTasksCount: 4,
    },
    {
      id: "step-5",
      type: "lesson",
      title: "Görsel Standardı ve Varyasyon Mantığı",
      description:
        "Amazon'da ürün görsellerinin standartları ve varyasyon kullanımı.",
      content: `
# Görsel Standardı ve Varyasyon Mantığı

Amazon'da ürün görselleri satış başarınızı doğrudan etkiler. Doğru görsel stratejisi ile dönüşüm oranınızı artırabilirsiniz.

## Görsel Standartları

### Ana Görsel (Main Image)
- **Beyaz zemin** (RGB 255, 255, 255)
- **Ürün %85 oranında** görünmeli
- **Arka plan olmamalı**, sadece ürün
- **Minimum 1000x1000px** çözünürlük
- **Ürünün tamamı** görünmeli

### Ek Görseller (Additional Images)
- **Yaşam tarzı görselleri**: Ürünün kullanım senaryoları
- **Detay görselleri**: Özellikler, malzeme, boyut
- **Infografik görselleri**: Özellikler, avantajlar
- **Karşılaştırma görselleri**: Rakip ürünlerle karşılaştırma

## Varyasyon Mantığı

### Ne Zaman Varyasyon Kullanılır?

Varyasyonlar aynı ürünün farklı versiyonları için kullanılır:
- **Renk varyasyonları**: Kırmızı, mavi, siyah
- **Boyut varyasyonları**: S, M, L, XL
- **Paket varyasyonları**: Tekli, çiftli, set

### Varyasyon Kullanım İpuçları

1. **Her varyasyon** ayrı bir ASIN olur
2. **Ana varyasyon** en popüler seçeneği gösterir
3. **Fiyat farklılıkları** varyasyonlarda belirtilir
4. **Stok durumu** her varyasyon için ayrı takip edilir

## Sonraki Adım

Görsel standartlarını öğrendikten sonra fiyatlandırma ve komisyon konusuna geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-6",
      type: "checkpoint",
      title: "Görsel ve Varyasyon Kontrol Soruları",
      description: "Öğrendiklerinizi kontrol edin.",
      questions: [
        {
          id: "q1",
          question: "Bullet point'ler ne için kullanılır?",
          options: [
            "Sadece dekorasyon için",
            "Ürün özelliklerini ve faydalarını hızlıca iletmek için",
            "Sadece fiyat bilgisi vermek için",
            "Rakip ürünleri karşılaştırmak için",
          ],
          correctIndex: 1,
          explanation:
            "Bullet point'ler, müşterilerin ürün özelliklerini ve faydalarını hızlıca anlaması için kritik öneme sahiptir. İlk 3 bullet point özellikle önemlidir çünkü mobil cihazlarda ilk görünenler bunlardır.",
        },
        {
          id: "q2",
          question: "Varyasyon ne zaman kullanılır?",
          options: [
            "Her zaman kullanılmalıdır",
            "Aynı ürünün farklı renk, boyut veya paket versiyonları olduğunda",
            "Sadece farklı markalar için",
            "Hiçbir zaman kullanılmamalıdır",
          ],
          correctIndex: 1,
          explanation:
            "Varyasyonlar, aynı ürünün farklı versiyonları (renk, boyut, paket) için kullanılır. Her varyasyon ayrı bir ASIN olur ve stok takibi ayrı yapılır.",
        },
      ],
      requiredCorrectCount: 2,
    },
    {
      id: "step-7",
      type: "lesson",
      title: "Fiyatlandırma & Komisyon Farkındalığı",
      description:
        "Amazon komisyon oranları, vergiler ve kârlılık hesaplama.",
      content: `
# Fiyatlandırma & Komisyon Farkındalığı

Amazon'da satış yaparken fiyatlandırma stratejiniz kârlılığınızı doğrudan etkiler.

## Amazon Komisyon Oranları

### Kategori Bazlı Komisyonlar

- **Elektronik**: %8-15 (kategoriye göre değişir)
- **Giyim & Aksesuar**: %17
- **Ev & Mutfak**: %15
- **Oyuncak & Oyunlar**: %15
- **Kitap**: %15
- **Spor & Outdoor**: %15

### Referral Fee (Referans Ücreti)

Amazon'un aldığı komisyon, satış fiyatının belirli bir yüzdesidir. Minimum komisyon genellikle $0.30'dur.

## Fiyatlandırma Hesaplama

### Temel Formül

**Satış Fiyatı = (Maliyet + Kâr) / (1 - Komisyon Oranı)**

Örnek:
- Ürün maliyeti: $10
- Hedef kâr: $5
- Komisyon oranı: %15

Satış Fiyatı = ($10 + $5) / (1 - 0.15) = $15 / 0.85 = **$17.65**

### Ek Maliyetler

- **FBA Ücretleri**: Depolama ve kargo maliyetleri
- **Reklam Giderleri**: Amazon Ads harcamaları
- **Vergiler**: Ülkeye göre KDV/VAT
- **İade Maliyetleri**: İade oranına göre

## Fiyatlandırma Stratejisi

1. **Rakip Analizi**: Benzer ürünlerin fiyatlarını inceleyin
2. **Kâr Marjı**: En az %20-30 kâr marjı hedefleyin
3. **Dinamik Fiyatlandırma**: Stok ve rekabet durumuna göre ayarlayın
4. **Kampanya Fiyatları**: Özel günlerde indirim yapın

## Sonraki Adım

Fiyatlandırma stratejinizi belirledikten sonra reklam temellerine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-8",
      type: "lesson",
      title: "Reklam Temelleri (İlk Kampanya Mantığı)",
      description:
        "Amazon Ads ile ilk reklam kampanyanızı nasıl kuracağınızı öğrenin.",
      content: `
# Reklam Temelleri (İlk Kampanya Mantığı)

Amazon Ads, ürünlerinizin görünürlüğünü artırmak için güçlü bir araçtır.

## Amazon Ads Türleri

### 1. Sponsored Products (Sponsorlu Ürünler)
- **En yaygın** reklam türü
- Ürün detay sayfasında ve arama sonuçlarında görünür
- **Tıklama başına ödeme** (CPC) modeli
- **Başlangıç için ideal**

### 2. Sponsored Brands (Sponsorlu Markalar)
- Marka bilinirliği için
- **Minimum 3 ürün** gerekir
- Logo ve özel başlık ile görünür
- **Daha yüksek bütçe** gerekir

### 3. Sponsored Display (Sponsorlu Görüntülemeler)
- Ürün detay sayfalarında görünür
- **Retargeting** için kullanılır
- **Otomatik hedefleme** seçeneği

## İlk Kampanya Kurulumu

### Adım 1: Anahtar Kelime Seçimi
- **Ürünle ilgili** anahtar kelimeler
- **Arama hacmi** yüksek kelimeler
- **Rekabet** düşük-orta seviye
- **Broad, Phrase, Exact** eşleşme türleri

### Adım 2: Bütçe Belirleme
- **Günlük bütçe**: $10-50 (başlangıç için)
- **Maksimum teklif**: $0.50-2.00 (kelimeye göre)
- **ACOS hedefi**: %20-30 (başlangıç)

### Adım 3: Kampanya Ayarları
- **Kampanya adı**: Açıklayıcı isim
- **Hedef**: Satış veya görünürlük
- **Zamanlama**: 7/24 veya belirli saatler

## İlk Reklam Hedefi

**İlk kampanyanızın hedefi:**
- Ürününüzü **görünür** hale getirmek
- **İlk satışları** elde etmek
- **Anahtar kelime performansını** öğrenmek
- **ACOS'u optimize** etmek

### Başarı Metrikleri

- **ACOS (Advertising Cost of Sales)**: %20-30 ideal
- **CTR (Click-Through Rate)**: %0.5+ iyi
- **Dönüşüm Oranı**: %10+ iyi
- **ROAS (Return on Ad Spend)**: 3:1+ ideal

## Sonraki Adım

Reklam temellerini öğrendikten sonra sipariş ve müşteri mesaj şablonlarına geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-9",
      type: "checkpoint",
      title: "Reklam Temelleri Kontrol Soruları",
      description: "Reklam bilgilerinizi kontrol edin.",
      questions: [
        {
          id: "q3",
          question: "İlk reklam hedefi ne olmalı?",
          options: [
            "Maksimum kâr elde etmek",
            "Ürünü görünür hale getirmek ve ilk satışları elde etmek",
            "Sadece marka bilinirliği",
            "Rekabeti tamamen yok etmek",
          ],
          correctIndex: 1,
          explanation:
            "İlk reklam kampanyanızın hedefi, ürününüzü görünür hale getirmek ve ilk satışları elde etmektir. Bu aşamada ACOS optimizasyonu ve anahtar kelime performansını öğrenmek önemlidir.",
        },
      ],
      requiredCorrectCount: 1,
    },
    {
      id: "step-10",
      type: "task",
      title: "Sipariş & Müşteri Mesaj Şablonları",
      description:
        "Sipariş onayı, kargo bilgilendirme ve müşteri mesaj şablonlarını hazırlayın.",
      tasks: [
        {
          id: "task-10",
          type: "checkbox",
          label: "Sipariş onay mesajı şablonu hazırlandı",
          required: true,
        },
        {
          id: "task-11",
          type: "checkbox",
          label: "Kargo bilgilendirme mesajı şablonu hazırlandı",
          required: true,
        },
        {
          id: "task-12",
          type: "checkbox",
          label: "Teslimat sonrası teşekkür mesajı şablonu hazırlandı",
          required: true,
        },
        {
          id: "task-13",
          type: "checkbox",
          label: "İade talebi yanıt şablonu hazırlandı",
          required: true,
        },
      ],
      requiredTasksCount: 4,
    },
  ],
};

export const etsyTrainingContent: TrainingContent = {
  trainingId: "etsy-magaza",
  steps: [
    {
      id: "step-1",
      type: "lesson",
      title: "Mağaza Açılışı Ön Hazırlık",
      description:
        "Etsy'de mağaza açmadan önce gerekli bilgileri ve hazırlıkları yapın.",
      content: `
# Mağaza Açılışı Ön Hazırlık

Etsy'de başarılı bir mağaza açmak için öncelikle gerekli hazırlıkları tamamlamanız gerekiyor.

## Gerekli Bilgiler

### Kişisel Bilgiler
- **Ad Soyad**: Gerçek adınız veya işletme adı
- **E-posta Adresi**: Aktif ve doğrulanmış e-posta
- **Telefon Numarası**: Doğrulama için gerekli
- **Adres Bilgisi**: Fatura ve kargo için

### Ödeme Bilgileri
- **Banka Hesabı**: Para çekme için (IBAN veya hesap numarası)
- **PayPal Hesabı** (opsiyonel): Alternatif ödeme yöntemi
- **Vergi Bilgileri**: Ülkenize göre gerekli vergi numarası

### Mağaza Bilgileri
- **Mağaza İsmi**: Benzersiz ve akılda kalıcı isim
- **Mağaza Açıklaması**: Ne sattığınızı açıklayan kısa metin
- **Kategori Seçimi**: Ürünlerinizin hangi kategoride olduğu

## Önemli Notlar

- Etsy mağaza açılışı **ücretsizdir**
- Her mağaza için **0.20$ listeleme ücreti** alınır (ürün satılınca)
- Satış komisyonu **%6.5** + ödeme işleme ücreti
- Mağaza açılışı **anında** gerçekleşir, onay süreci yoktur

## Sonraki Adım

Hazırlıklarınızı tamamladıktan sonra mağaza kimliği oluşturma adımına geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-2",
      type: "task",
      title: "Mağaza Kimliği: İsim, Banner, Politika Sayfaları",
      description:
        "Mağaza ismini belirleyin, banner tasarlayın ve politika sayfalarını hazırlayın.",
      tasks: [
        {
          id: "task-1",
          type: "checkbox",
          label: "Mağaza ismini belirledim (benzersiz ve akılda kalıcı)",
          required: true,
        },
        {
          id: "task-2",
          type: "checkbox",
          label: "About/Story alanını taslakladım (marka hikayesi)",
          required: true,
        },
        {
          id: "task-3",
          type: "checkbox",
          label: "Mağaza banner görseli hazırladım (3360x840px önerilen)",
          required: true,
        },
        {
          id: "task-4",
          type: "checkbox",
          label: "İade & kargo politikalarını yazdım",
          required: true,
        },
        {
          id: "task-5",
          type: "checkbox",
          label: "Gizlilik politikası sayfasını hazırladım",
          required: true,
        },
        {
          id: "task-6",
          type: "field",
          label: "Mağaza ismi taslağı",
          placeholder: "Örn: HandmadeTreasures, VintageFinds...",
          required: true,
        },
      ],
      requiredTasksCount: 6,
    },
    {
      id: "step-3",
      type: "lesson",
      title: "Ürün Sayfası SEO: Başlık, Etiketler, Kategori",
      description:
        "Etsy'de ürünlerinizin bulunabilirliğini artırmak için SEO stratejileri.",
      content: `
# Ürün Sayfası SEO: Başlık, Etiketler, Kategori

Etsy'de ürünlerinizin görünürlüğü SEO optimizasyonuna bağlıdır. Doğru başlık, etiket ve kategori seçimi satışlarınızı artırır.

## Başlık Optimizasyonu

### Başlık Kuralları
- **Maksimum 140 karakter**
- **Ana anahtar kelimeyi başa** koyun
- **Ürün özelliklerini** ekleyin (renk, boyut, malzeme)
- **Hedef kitleyi** belirtin (örn: "Bebek için", "Düğün hediyesi")

### Başlık Örneği
❌ Kötü: "Güzel Kolye"
✅ İyi: "El Yapımı Gümüş Doğal Taş Kolye - Minimalist Takı - Hediye Kutusu ile"

## Etiketler (Tags) Stratejisi

### Etiket Kuralları
- **13 etiket hakkınız var** - hepsini kullanın
- **Spesifik etiketler** genel etiketlerden daha etkilidir
- **Uzun kuyruk anahtar kelimeler** kullanın
- **Rakip analizi** yapın, popüler etiketleri inceleyin

### Etiket Kategorileri
1. **Ürün türü**: "el yapımı kolye", "vintage yüzük"
2. **Malzeme**: "gümüş", "altın kaplama", "doğal taş"
3. **Stil**: "minimalist", "bohem", "klasik"
4. **Kullanım**: "hediye", "düğün", "günlük kullanım"
5. **Hedef kitle**: "kadın", "erkek", "çocuk"

## Kategori Seçimi

### Kategori Hiyerarşisi
- **Ana kategori**: Geniş kategori (örn: "Jewelry")
- **Alt kategori**: Daha spesifik (örn: "Necklaces")
- **Alt-alt kategori**: En spesifik (örn: "Pendant Necklaces")

### Kategori Seçim İpuçları
- **En spesifik kategoriyi** seçin
- **Rakip ürünlerin** kategorilerini inceleyin
- **Arama sonuçlarında** hangi kategoride görünmek istediğinizi düşünün

## Sonraki Adım

SEO temellerini öğrendikten sonra görsel standartlarına geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-4",
      type: "task",
      title: "Görsel Standart: 8-10 Foto, Mockup, Video",
      description:
        "Ürün görsellerinizi Etsy standartlarına göre hazırlayın.",
      tasks: [
        {
          id: "task-7",
          type: "field",
          label: "Ürün başlık taslağı (ana anahtar kelime + özellikler)",
          placeholder: "Örn: El Yapımı Gümüş Doğal Taş Kolye - Minimalist...",
          required: true,
        },
        {
          id: "task-8",
          type: "field",
          label: "13 etiket taslağından ilk 5'i",
          placeholder: "virgülle ayırın: el yapımı kolye, gümüş takı, doğal taş...",
          required: true,
        },
        {
          id: "task-9",
          type: "field",
          label: "Ana anahtar kelimeler (3 adet)",
          placeholder: "virgülle ayırın: minimalist kolye, gümüş takı, hediye",
          required: true,
        },
        {
          id: "task-10",
          type: "checkbox",
          label: "İlk fotoğraf (thumbnail) hazırlandı - ürün net görünüyor, beyaz zemin",
          required: true,
        },
        {
          id: "task-11",
          type: "checkbox",
          label: "8-10 ürün fotoğrafı hazırlandı (farklı açılar, detaylar, kullanım)",
          required: true,
        },
        {
          id: "task-12",
          type: "checkbox",
          label: "Mockup görseli hazırlandı (ürünün kullanım senaryosu)",
          required: true,
        },
        {
          id: "task-13",
          type: "field",
          label: "Fotoğraf checklist notu (eksikler veya önemli notlar)",
          placeholder: "Örn: Boyut detayları için ek fotoğraf gerekli...",
          required: false,
        },
      ],
      requiredTasksCount: 6,
    },
    {
      id: "step-5",
      type: "lesson",
      title: "Fiyatlandırma & Kargo Profilleri",
      description:
        "Etsy'de kârlı fiyatlandırma ve kargo ayarları.",
      content: `
# Fiyatlandırma & Kargo Profilleri

Etsy'de doğru fiyatlandırma ve kargo stratejisi kârlılığınızı belirler.

## Fiyatlandırma Stratejisi

### Maliyet Hesaplama
- **Malzeme maliyeti**: Hammaddeler ve malzemeler
- **İşçilik maliyeti**: Yapım süresi × saatlik ücret
- **Sabit maliyetler**: Ekipman, stüdyo, elektrik
- **Etsy komisyonu**: %6.5 + ödeme işleme ücreti (%3 + $0.25)
- **Listeleme ücreti**: $0.20 (her ürün için)

### Fiyat Formülü
**Satış Fiyatı = (Toplam Maliyet + Kâr) / (1 - Komisyon Oranı)**

Örnek:
- Toplam maliyet: $15
- Hedef kâr: $10
- Komisyon: %9.5 (ortalama)

Satış Fiyatı = ($15 + $10) / (1 - 0.095) = $25 / 0.905 = **$27.62**

### Fiyatlandırma İpuçları
- **Rakip analizi** yapın, benzer ürünlerin fiyatlarını inceleyin
- **Kâr marjınız** en az %30-50 olmalı
- **Psikolojik fiyatlandırma** kullanın ($29.99 vs $30)
- **Toplu satış indirimleri** sunun (2 al 1 bedava)

## Kargo Profilleri

### Kargo Seçenekleri
- **Standart Kargo**: 5-7 iş günü
- **Hızlı Kargo**: 2-3 iş günü (ek ücret)
- **Uluslararası Kargo**: Ülkeye göre değişir

### Kargo Ücreti Belirleme
- **Sabit ücret**: Tüm siparişler için aynı (örn: $5)
- **Ağırlık bazlı**: Ürün ağırlığına göre
- **Ücretsiz kargo**: Belirli tutar üzeri (örn: $50+)

### Kargo Profili Oluşturma
1. **Profil adı**: "Türkiye İçi", "Avrupa", "Dünya Çapında"
2. **Kargo süresi**: Gerçekçi süreler belirleyin
3. **Kargo ücreti**: Maliyet + küçük kâr marjı
4. **Ücretsiz kargo eşiği**: Teşvik için (opsiyonel)

## Sonraki Adım

Fiyatlandırma ve kargo ayarlarını tamamladıktan sonra marka hikayesi oluşturma adımına geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-6",
      type: "task",
      title: "Fiyatlandırma & Kargo Görevleri",
      description:
        "Fiyatlandırma ve kargo ayarlarınızı tamamlayın.",
      tasks: [
        {
          id: "task-14",
          type: "field",
          label: "Ürün maliyeti (malzeme + işçilik)",
          placeholder: "Örn: 15",
          required: true,
        },
        {
          id: "task-15",
          type: "field",
          label: "Hedef satış fiyatı",
          placeholder: "Örn: 30",
          required: true,
        },
        {
          id: "task-16",
          type: "checkbox",
          label: "Kargo profili oluşturuldu (ülke bazlı)",
          required: true,
        },
        {
          id: "task-17",
          type: "checkbox",
          label: "Ücretsiz kargo eşiği belirlendi (opsiyonel)",
          required: false,
        },
      ],
      requiredTasksCount: 3,
    },
    {
      id: "step-7",
      type: "lesson",
      title: "Marka Hikayesi & Müşteri Güveni",
      description:
        "Etsy'de marka hikayenizi oluşturun ve müşteri güvenini kazanın.",
      content: `
# Marka Hikayesi & Müşteri Güveni

Etsy'de müşteriler sadece ürün satın almaz, bir hikaye ve deneyim satın alır. Marka hikayeniz güven oluşturur.

## Marka Hikayesi Oluşturma

### About/Story Bölümü
- **Kişisel hikaye**: Neden bu işe başladınız?
- **Üretim süreci**: Ürünleriniz nasıl yapılıyor?
- **Değerler**: Ne önemsiyorsunuz? (çevre, el yapımı, yerel)
- **Müşteri odaklı**: Müşterilerinize ne sunuyorsunuz?

### Hikaye Örneği
"2015 yılında, doğal taşların enerjisine olan ilgim beni kuyumculuk sanatına yönlendirdi. Her parça, özenle seçilmiş doğal taşlarla el yapımı olarak üretilir. Sürdürülebilir ve etik kaynaklardan gelen malzemeler kullanıyoruz. Amacımız, her müşterimize özel ve anlamlı bir parça sunmak."

## Müşteri Güveni Oluşturma

### Güven İşaretleri
- **Mağaza politikaları**: Açık ve net iade/kargo politikaları
- **Müşteri yorumları**: Olumlu yorumlar güven oluşturur
- **Hızlı yanıt**: Mesajlara 24 saat içinde yanıt verin
- **Profesyonel görseller**: Kaliteli fotoğraflar güven verir

### Müşteri İletişimi
- **Kişisel mesajlar**: Her sipariş için teşekkür mesajı
- **Sipariş güncellemeleri**: Kargo durumu bilgilendirmesi
- **Sorun çözme**: Hızlı ve çözüm odaklı yaklaşım

## Marka Kimliği
- **Tutarlı görsel dil**: Tüm ürünlerde aynı stil
- **Logo ve banner**: Profesyonel tasarım
- **Paketleme**: Marka kimliğinizi yansıtan paketleme

## Sonraki Adım

Marka hikayenizi oluşturduktan sonra öğrendiklerinizi kontrol sorularıyla pekiştireceksiniz.
      `.trim(),
    },
    {
      id: "step-8",
      type: "checkpoint",
      title: "SEO ve Görsel Kontrol Soruları",
      description: "Öğrendiklerinizi kontrol edin.",
      questions: [
        {
          id: "q1",
          question: "Etsy'de etiketler (tags) neden önemlidir?",
          options: [
            "Sadece dekorasyon için",
            "Arama algoritmasında görünürlüğü artırmak ve müşterilerin ürünü bulmasını sağlamak için",
            "Sadece kategori seçimi için",
            "Fiyatlandırma için",
          ],
          correctIndex: 1,
          explanation:
            "Etiketler, Etsy'nin arama algoritmasında kritik rol oynar. Doğru etiketler ürününüzün arama sonuçlarında görünmesini sağlar ve müşterilerin ürününüzü bulmasına yardımcı olur. 13 etiket hakkınızı tam kullanmalısınız.",
        },
        {
          id: "q2",
          question: "İlk fotoğraf (thumbnail) neyi belirler?",
          options: [
            "Sadece ürün rengi",
            "Arama sonuçlarında görünürlük, tıklanma oranı ve ilk izlenim",
            "Sadece fiyat",
            "Kargo ücreti",
          ],
          correctIndex: 1,
          explanation:
            "İlk fotoğraf (thumbnail) arama sonuçlarında görünen görseldir. Net, çekici ve ürünü iyi gösteren bir thumbnail, tıklanma oranınızı artırır ve müşterilerin ürününüze ilk bakışta ilgi duymasını sağlar.",
        },
        {
          id: "q3",
          question: "Başlıkta ana kelimeyi nereye koymak daha sağlıklıdır?",
          options: [
            "Sonda",
            "Başta - ilk 3-4 kelimede",
            "Ortada",
            "Farketmez",
          ],
          correctIndex: 1,
          explanation:
            "Ana anahtar kelimeyi başlığın başına koymak SEO açısından daha etkilidir. Etsy'nin arama algoritması başlığın başındaki kelimelere daha fazla ağırlık verir. Ayrıca müşteriler de başlığın başını okur.",
        },
      ],
      requiredCorrectCount: 3,
    },
  ],
};

export const ebayTrainingContent: TrainingContent = {
  trainingId: "ebay-global",
  steps: [
    {
      id: "step-1",
      type: "lesson",
      title: "Global Satışa Hazırlık",
      description:
        "eBay'de uluslararası satış yapmaya başlamadan önce gerekli hazırlıkları yapın.",
      content: `
# Global Satışa Hazırlık

eBay'de global satış yapmak, tek ülke satışından farklı stratejiler ve hazırlıklar gerektirir.

## eBay Hesap ve Seller Ayarları

### Seller Hesap Türleri
- **Bireysel Hesap**: Kişisel satışlar için
- **İşletme Hesabı**: Ticari satışlar için (daha fazla özellik)
- **Store Aboneliği**: Aylık ücret karşılığında düşük komisyon oranları

### Seller Ayarları
- **Ödeme Yöntemleri**: PayPal, banka hesabı, kredi kartı
- **Satış Tercihleri**: Otomatik yeniden listeleme, rezerv fiyat
- **Güvenlik Ayarları**: İki faktörlü kimlik doğrulama

## Hedef Pazar Seçimi

### Pazar Seçenekleri
- **ABD (eBay.com)**: En büyük pazar, yüksek hacim
- **İngiltere (eBay.co.uk)**: Avrupa'nın en büyük pazarı
- **Almanya (eBay.de)**: Güçlü e-ticaret kültürü
- **Avustralya (eBay.com.au)**: Yüksek alıcı güveni
- **Diğer Avrupa Ülkeleri**: Fransa, İspanya, İtalya

### Pazar Seçim Kriterleri
- **Ürün uygunluğu**: Ürününüz o pazarda talep görüyor mu?
- **Rekabet seviyesi**: Rakip analizi yapın
- **Kargo maliyeti**: Ülkeye göre kargo maliyetleri
- **Dil ve kültür**: Yerel dil desteği gerekli mi?

## Dil ve Para Birimi Farkı

### Dil Yönetimi
- **Ürün başlığı**: Her pazar için yerel dilde başlık
- **Ürün açıklaması**: Çeviri kalitesi önemli
- **Müşteri iletişimi**: Yerel dilde yanıt verme

### Para Birimi
- **Listeleme fiyatı**: Her pazarın para biriminde
- **Döviz kuru riski**: Kur değişimlerini takip edin
- **Ödeme**: PayPal otomatik dönüşüm yapar

## Sonraki Adım

Hazırlıklarınızı tamamladıktan sonra listeleme türleri ve kategori seçimine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-2",
      type: "lesson",
      title: "Listeleme Türleri ve Kategori Seçimi",
      description:
        "eBay'de Auction ve Buy It Now listeleme türlerini öğrenin ve doğru kategoriyi seçin.",
      content: `
# Listeleme Türleri ve Kategori Seçimi

eBay'de ürünlerinizi farklı şekillerde listeleyebilirsiniz. Doğru listeleme türü satış başarınızı etkiler.

## Listeleme Türleri

### Auction (Açık Artırma)
- **Nasıl çalışır**: Belirli süre içinde en yüksek teklifi veren alıcı kazanır
- **Ne zaman kullanılır**: 
  - Benzersiz, nadir ürünler
  - Değeri belirsiz ürünler
  - Hızlı satış gerektiğinde
- **Avantajları**: Piyasa fiyatını belirler, rekabet yaratır
- **Dezavantajları**: Fiyat belirsizliği, daha uzun süre

### Buy It Now (Hemen Al)
- **Nasıl çalışır**: Sabit fiyatla anında satın alma
- **Ne zaman kullanılır**:
  - Yeni, standart ürünler
  - Toplu satışlar
  - Hızlı dönüşüm istenen durumlar
- **Avantajları**: Hızlı satış, fiyat kontrolü
- **Dezavantajları**: Rekabet daha yüksek

### Best Offer (Teklif Ver)
- **Nasıl çalışır**: Alıcılar fiyat teklifi yapar, satıcı kabul/reddeder
- **Ne zaman kullanılır**: Esnek fiyatlandırma gerektiğinde
- **Avantajları**: Müzakere imkanı, müşteri memnuniyeti

## Item Specifics Neden Kritik?

### Item Specifics Nedir?
Ürününüzün özelliklerini detaylandıran alanlar (marka, model, renk, boyut vb.)

### Neden Önemli?
- **Arama görünürlüğü**: Item specifics doldurulmuş ürünler daha üstte görünür
- **Filtreleme**: Müşteriler özelliklere göre filtreler, ürününüz bulunur
- **Güven**: Detaylı bilgi müşteri güvenini artırır
- **Dönüşüm**: Doğru item specifics dönüşüm oranını artırır

### Item Specifics Örnekleri
- **Elektronik**: Marka, Model, Ekran Boyutu, Renk
- **Giyim**: Marka, Beden, Renk, Malzeme
- **Ev & Yaşam**: Marka, Boyut, Renk, Malzeme

## Kategori Seçimi

### Kategori Hiyerarşisi
- **Ana kategori**: Geniş kategori (örn: "Electronics")
- **Alt kategori**: Daha spesifik (örn: "Cell Phones & Accessories")
- **Alt-alt kategori**: En spesifik (örn: "Cell Phone Cases")

### Kategori Seçim İpuçları
- **En spesifik kategoriyi** seçin
- **Rakip ürünlerin** kategorilerini inceleyin
- **eBay'in önerdiği** kategorileri kontrol edin
- **Item specifics** ile kategori uyumlu olmalı

## Sonraki Adım

Listeleme türlerini öğrendikten sonra kargo stratejisine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-3",
      type: "lesson",
      title: "Kargo Stratejisi: Tek Ülke vs Çoklu Ülke",
      description:
        "eBay'de uluslararası kargo stratejileri ve delivery time etkisi.",
      content: `
# Kargo Stratejisi: Tek Ülke vs Çoklu Ülke

eBay'de global satış yaparken kargo stratejiniz satış hacminizi ve müşteri memnuniyetini doğrudan etkiler.

## International Shipping Mantığı

### Tek Ülke Stratejisi
- **Avantajları**: 
  - Basit yönetim
  - Düşük kargo maliyeti
  - Hızlı teslimat
- **Dezavantajları**:
  - Sınırlı müşteri kitlesi
  - Düşük satış hacmi
- **Ne zaman kullanılır**: Yerel pazarda güçlüyseniz

### Çoklu Ülke Stratejisi
- **Avantajları**:
  - Geniş müşteri kitlesi
  - Yüksek satış hacmi
  - Pazar çeşitliliği
- **Dezavantajları**:
  - Karmaşık yönetim
  - Yüksek kargo maliyeti
  - Farklı kargo süreleri
- **Ne zaman kullanılır**: Global satış hedefiniz varsa

## Delivery Time ve Handling Time Etkisi

### Handling Time Nedir?
Sipariş alındıktan sonra ürünü paketleyip kargoya verme süresi.

### Delivery Time Nedir?
Kargoya verildikten sonra müşteriye ulaşma süresi.

### Toplam Teslimat Süresi
**Toplam Süre = Handling Time + Delivery Time**

### Etkileri
- **Müşteri beklentisi**: Kısa süre = yüksek memnuniyet
- **Satış dönüşümü**: Hızlı teslimat = daha fazla satış
- **eBay sıralaması**: Hızlı teslimat = daha üst sıralama
- **Müşteri yorumları**: Pozitif yorumlar = daha fazla güven

### Handling Time Stratejisi
- **1 iş günü**: En hızlı, müşteri memnuniyeti yüksek
- **2-3 iş günü**: Dengeli, çoğu satıcı için uygun
- **5+ iş günü**: Yavaş, sadece özel durumlarda

### Delivery Time Optimizasyonu
- **Hızlı kargo seçenekleri**: DHL, FedEx (pahalı ama hızlı)
- **Standart kargo**: Posta servisleri (ekonomik)
- **Yerel depo**: Hedef ülkede depo kullanımı

## Kargo Profili Oluşturma
- **Profil adı**: "Türkiye İçi", "Avrupa", "Dünya Çapında"
- **Kargo şirketi**: Seçtiğiniz kargo firması
- **Kargo süresi**: Gerçekçi süreler belirleyin
- **Kargo ücreti**: Maliyet + küçük kâr marjı

## Sonraki Adım

Kargo stratejisini öğrendikten sonra kargo profili taslağı oluşturma görevine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-4",
      type: "task",
      title: "Kargo Profili Taslağı Oluştur",
      description:
        "eBay için kargo profili ayarlarınızı hazırlayın.",
      tasks: [
        {
          id: "task-1",
          type: "field",
          label: "Handling time hedefi (iş günü)",
          placeholder: "Örn: 2",
          required: true,
        },
        {
          id: "task-2",
          type: "field",
          label: "İade süresi (gün)",
          placeholder: "Örn: 30",
          required: true,
        },
        {
          id: "task-3",
          type: "field",
          label: "En çok satış beklenen ülke",
          placeholder: "Örn: US, UK, DE",
          required: true,
        },
        {
          id: "task-4",
          type: "checkbox",
          label: "Takip numarası (tracking) zorunlu",
          required: true,
        },
        {
          id: "task-5",
          type: "checkbox",
          label: "Paketleme standardı belirledim",
          required: true,
        },
        {
          id: "task-6",
          type: "checkbox",
          label: "İade adresi sürecini netleştirdim",
          required: true,
        },
      ],
      requiredTasksCount: 6,
    },
    {
      id: "step-5",
      type: "lesson",
      title: "İade Politikaları ve Dispute Yönetimi",
      description:
        "eBay'de iade politikaları ve müşteri anlaşmazlıklarını yönetme.",
      content: `
# İade Politikaları ve Dispute Yönetimi

eBay'de iade politikalarınız ve dispute yönetimi müşteri memnuniyeti ve satıcı koruması için kritiktir.

## Return Policy Etkisi

### İade Politikası Türleri
- **İade Kabul Etmiyorum**: En kısıtlayıcı, düşük müşteri güveni
- **14 Gün İade**: Standart, dengeli
- **30 Gün İade**: Müşteri dostu, yüksek güven
- **60 Gün İade**: Çok esnek, premium ürünler için

### İade Politikasının Etkileri
- **Satış dönüşümü**: Esnek politika = daha fazla satış
- **Müşteri güveni**: Açık politika = güven artışı
- **eBay sıralaması**: İyi politika = daha üst sıralama
- **İade oranı**: Esnek politika = daha fazla iade (dikkatli olun)

### İade Ücreti Sorumluluğu
- **Satıcı öder**: Müşteri dostu, yüksek memnuniyet
- **Alıcı öder**: Ekonomik, düşük iade oranı
- **Duruma göre**: Esnek, adil çözüm

## Case/Dispute Geldiğinde Yapılacaklar

### Dispute Türleri
- **Item Not Received (Ürün Gelmedi)**: Kargo takibi önemli
- **Item Not as Described (Ürün Açıklamaya Uymuyor)**: Açıklama kalitesi kritik
- **Return Request (İade Talebi)**: İade politikasına göre yönetin

### Dispute Yönetim Adımları

#### 1. Hızlı Yanıt (24 saat içinde)
- Müşteriye mesaj gönderin
- Durumu anlamaya çalışın
- Çözüm önerin

#### 2. Kanıt Toplama
- **Kargo takip numarası**: Item Not Received için
- **Ürün fotoğrafları**: Item Not as Described için
- **Mesaj geçmişi**: Tüm iletişimi kaydedin

#### 3. Çözüm Önerileri
- **Kısmi iade**: Ürün kısmen uygunsa
- **Tam iade**: Ürün tamamen uygunsa
- **Değişim**: Müşteri değişim istiyorsa
- **İndirim**: Küçük sorunlar için

#### 4. eBay Müdahalesi
- Müşteri eBay'e şikayet ederse
- eBay her iki tarafı dinler
- Kanıtlara göre karar verir
- Defect (kusur) kaydı oluşabilir

### Defect (Kusur) Kaydı
- **Negatif yorum**: Müşteri negatif yorum bırakırsa
- **Case kaybı**: eBay case'ini kaybederseniz
- **İade oranı**: Yüksek iade oranı
- **Etkileri**: Seller rating düşer, satış kısıtlamaları

## Dispute Önleme Stratejileri
- **Açık ürün açıklaması**: Tüm detayları belirtin
- **Kaliteli fotoğraflar**: Ürünü doğru gösterin
- **Hızlı kargo**: Gecikmeleri önleyin
- **İyi paketleme**: Hasarları önleyin
- **Proaktif iletişim**: Sorunları önceden çözün

## Sonraki Adım

İade politikalarını öğrendikten sonra müşteri mesaj şablonları görevine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-6",
      type: "task",
      title: "Müşteri Mesaj Şablonları",
      description:
        "eBay müşterileri için mesaj şablonlarınızı hazırlayın.",
      tasks: [
        {
          id: "task-7",
          type: "field",
          label: "Kargo gecikmesi mesaj taslağı",
          placeholder: "Merhaba, siparişinizde gecikme yaşandığı için özür dileriz...",
          required: true,
        },
        {
          id: "task-8",
          type: "field",
          label: "İade onay mesaj taslağı",
          placeholder: "Merhaba, iade talebiniz onaylanmıştır...",
          required: true,
        },
        {
          id: "task-9",
          type: "checkbox",
          label: "24 saat içinde yanıt hedefi belirledim",
          required: true,
        },
        {
          id: "task-10",
          type: "checkbox",
          label: "Nazik/standart dil kullandım",
          required: true,
        },
      ],
      requiredTasksCount: 4,
    },
    {
      id: "step-7",
      type: "checkpoint",
      title: "Kargo ve Listeleme Kontrol Soruları",
      description: "Öğrendiklerinizi kontrol edin.",
      questions: [
        {
          id: "q1",
          question: "Handling time neyi etkiler?",
          options: [
            "Sadece kargo maliyetini",
            "Müşteri beklentisi, satış dönüşümü, eBay sıralaması ve müşteri yorumlarını",
            "Sadece ürün fiyatını",
            "Sadece kategori seçimini",
          ],
          correctIndex: 1,
          explanation:
            "Handling time, müşteri beklentisini, satış dönüşümünü, eBay sıralamasını ve müşteri yorumlarını doğrudan etkiler. Kısa handling time müşteri memnuniyetini artırır ve satışları artırır.",
        },
        {
          id: "q2",
          question: "Tracking numarası hangi durumda kritik hale gelir?",
          options: [
            "Sadece pahalı ürünlerde",
            "Item Not Received dispute'larında kanıt olarak ve müşteri güveni için her zaman kritiktir",
            "Sadece uluslararası kargolarda",
            "Hiçbir zaman gerekli değildir",
          ],
          correctIndex: 1,
          explanation:
            "Tracking numarası, Item Not Received dispute'larında kanıt olarak kritiktir. Ayrıca müşteri güveni ve şeffaflık için her zaman önemlidir. Tracking olmadan dispute kaybedebilirsiniz.",
        },
        {
          id: "q3",
          question: "Buy It Now hangi senaryoda tercih edilir?",
          options: [
            "Sadece açık artırmada",
            "Yeni, standart ürünler, toplu satışlar ve hızlı dönüşüm gerektiğinde",
            "Sadece nadir ürünlerde",
            "Hiçbir zaman kullanılmamalıdır",
          ],
          correctIndex: 1,
          explanation:
            "Buy It Now, yeni ve standart ürünler için, toplu satışlarda ve hızlı dönüşüm gerektiğinde tercih edilir. Sabit fiyatla anında satın alma imkanı sunar.",
        },
      ],
      requiredCorrectCount: 3,
    },
  ],
};

export const paymentsTrainingContent: TrainingContent = {
  trainingId: "odeme-payoneer-wise",
  steps: [
    {
      id: "step-1",
      type: "lesson",
      title: "Payoneer & Wise Genel Farklar",
      description:
        "Payoneer ve Wise'ın ne için kullanıldığını ve marketplace ödeme akışını öğrenin.",
      content: `
# Payoneer & Wise Genel Farklar

Payoneer ve Wise, global e-ticaret satıcıları için popüler ödeme altyapılarıdır. Her ikisi de farklı ihtiyaçlara hizmet eder.

## Ne İçin Kullanılır?

### Payoneer
- **Marketplace ödemeleri**: Amazon, eBay, Etsy gibi platformlardan ödeme alma
- **Toplu ödeme**: Birden fazla marketplace'ten tek hesapta toplama
- **Kart çıkarma**: Fiziksel veya sanal kart ile harcama
- **Kurumsal çözümler**: İşletme hesapları ve API entegrasyonları

### Wise (eski adıyla TransferWise)
- **Düşük maliyetli transfer**: Döviz kuru ve ücret avantajı
- **Çoklu para birimi**: 50+ para biriminde hesap
- **Şeffaf ücretler**: Önceden görünen, gizli ücret yok
- **Hızlı transfer**: Genellikle 1-2 iş günü içinde

## Marketplace Ödeme Akışı Genel Mantık

### Standart Akış
1. **Satış yapılır**: Marketplace'te ürün satılır
2. **Ödeme alınır**: Marketplace ödemeyi Payoneer/Wise'a gönderir
3. **Hesapta birikir**: Para hesabınızda görünür
4. **Transfer edilir**: İstediğiniz banka hesabına veya kartla harcanır

### Önemli Notlar
- **Bekleme süresi**: Marketplace'ler ödemeyi genellikle 7-14 gün içinde gönderir
- **Minimum çekim**: Her platformun minimum çekim tutarı vardır
- **Vergi bildirimi**: Gelir vergisi bildirimi sizin sorumluluğunuzdadır

## Ücret/Kur Farkındalığı

### Payoneer Ücretleri
- **Aylık ücret**: Genellikle yok (bazı hesaplarda var)
- **Para çekme**: %1-2 ücret + döviz kuru farkı
- **Kart işlemleri**: ATM çekiminde ücret olabilir
- **Para alma**: Ücretsiz (marketplace'lerden)

### Wise Ücretleri
- **Hesap açma**: Ücretsiz
- **Para alma**: Ücretsiz
- **Transfer ücreti**: Tutara göre değişir, genellikle düşük
- **Döviz kuru**: Gerçek zamanlı kurlar, küçük marj

### Karşılaştırma
- **Düşük maliyet**: Wise genellikle daha düşük ücretli
- **Marketplace entegrasyonu**: Payoneer daha yaygın
- **Kart özelliği**: Payoneer'da fiziksel kart var
- **Hız**: Wise genellikle daha hızlı transfer

## Sonraki Adım

Genel farkları öğrendikten sonra hesap kurulumu ve doğrulama adımına geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-2",
      type: "lesson",
      title: "Hesap Kurulumu & Doğrulama",
      description:
        "Payoneer ve Wise hesap kurulumu, kimlik doğrulama ve güvenlik önlemleri.",
      content: `
# Hesap Kurulumu & Doğrulama

Payoneer ve Wise hesap kurulumu benzer süreçler içerir, ancak bazı farklılıklar vardır.

## Kimlik Doğrulama

### Gerekli Belgeler
- **Kimlik belgesi**: Pasaport veya ulusal kimlik kartı
- **Adres kanıtı**: Fatura, banka ekstresi veya resmi belge (son 3 ay içinde)
- **Telefon numarası**: Doğrulama için aktif numara
- **E-posta**: Doğrulanmış e-posta adresi

### Şirket/Bireysel Ayrımı
- **Bireysel hesap**: Kişisel kullanım için, daha basit süreç
- **İşletme hesabı**: Şirket için, ek belgeler gerekebilir (ticaret sicil belgesi vb.)
- **Vergi numarası**: Bazı ülkelerde zorunlu

## Adres Doğrulama

### Adres Kanıtı Türleri
- **Elektrik/Su/İnternet faturası**: En yaygın kabul edilen
- **Banka ekstresi**: Resmi banka belgesi
- **Belediye vergi belgesi**: Resmi belge
- **Sigorta belgesi**: Bazı durumlarda kabul edilir

### Önemli Notlar
- **Belge tarihi**: Son 3 ay içinde olmalı
- **Adres eşleşmesi**: Belgedeki adres hesaptaki adresle aynı olmalı
- **Dil**: İngilizce veya yerel dil kabul edilir
- **Netlik**: Belge okunabilir ve net olmalı

## Güvenlik Notları

### Resmi Sitelerden İlerle
⚠️ **ÖNEMLİ**: Sadece resmi web sitelerinden hesap açın:
- **Payoneer**: payoneer.com
- **Wise**: wise.com

Sahte sitelere dikkat edin! URL'yi her zaman kontrol edin.

### 2FA (İki Adımlı Doğrulama) Tavsiyesi
- **Neden önemli**: Hesap güvenliğini artırır
- **Nasıl çalışır**: Şifre + telefon/uygulama kodu
- **Aktif edin**: Hesap açıldıktan hemen sonra aktif edin
- **Yedek kodlar**: Güvenli yerde saklayın

### Güvenlik İpuçları
- **Güçlü şifre**: En az 12 karakter, harf, rakam, sembol
- **Benzersiz şifre**: Diğer hesaplarla aynı şifreyi kullanmayın
- **Düzenli kontrol**: Hesap aktivitelerini düzenli kontrol edin
- **Şüpheli aktivite**: Hemen destek ekibiyle iletişime geçin

## Kurulum Süreci

### Payoneer
1. Web sitesinden kayıt olun
2. Kişisel bilgileri girin
3. Kimlik belgesi yükleyin
4. Adres kanıtı yükleyin
5. Telefon doğrulaması yapın
6. Onay bekleyin (1-3 iş günü)

### Wise
1. Web sitesinden kayıt olun
2. Kişisel bilgileri girin
3. Kimlik belgesi yükleyin
4. Adres kanıtı yükleyin
5. Telefon doğrulaması yapın
6. Onay genellikle daha hızlı (saatler içinde)

## Sonraki Adım

Hesap kurulumu bilgilerini öğrendikten sonra kurulum kontrol listesi görevine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-3",
      type: "task",
      title: "Kurulum Kontrol Listesi",
      description:
        "Hesap kurulumu için gerekli hazırlıkları tamamlayın.",
      tasks: [
        {
          id: "task-1",
          type: "checkbox",
          label: "Payoneer hesabı açmak için gerekli belgeleri belirledim",
          required: true,
        },
        {
          id: "task-2",
          type: "checkbox",
          label: "Wise hesabı için kimlik doğrulama sürecini planladım",
          required: true,
        },
        {
          id: "task-3",
          type: "checkbox",
          label: "2FA (iki adımlı doğrulama) açacağım",
          required: true,
        },
        {
          id: "task-4",
          type: "checkbox",
          label: "Hesap bilgilerini güvenli şekilde saklıyorum",
          required: true,
        },
        {
          id: "task-5",
          type: "field",
          label: "Hedef para birimleri (örn: USD, GBP, EUR)",
          placeholder: "virgülle ayırın: USD, GBP, EUR",
          required: true,
        },
        {
          id: "task-6",
          type: "field",
          label: "Hangi pazaryerlerinde kullanacağım? (Amazon/eBay/Etsy)",
          placeholder: "virgülle ayırın: Amazon, eBay, Etsy",
          required: true,
        },
      ],
      requiredTasksCount: 6,
    },
    {
      id: "step-4",
      type: "task",
      title: "Para Transferi ve Alıcı Bilgisi Kontrolü",
      description:
        "IBAN/SWIFT mantığı, alıcı adı eşleşmesi ve transfer kontrol listesi.",
      tasks: [
        {
          id: "task-7",
          type: "checkbox",
          label: "Alıcı adını/IBAN'ı iki kez kontrol ederim",
          required: true,
        },
        {
          id: "task-8",
          type: "checkbox",
          label: "Transfer ücretini ve kur oranını kontrol ederim",
          required: true,
        },
        {
          id: "task-9",
          type: "checkbox",
          label: "Küçük test transferi yapmayı düşünürüm",
          required: true,
        },
        {
          id: "task-10",
          type: "field",
          label: "Transfer notu/Referans örneği",
          placeholder: "Örn: Amazon Payment - Order #12345",
          required: true,
        },
      ],
      requiredTasksCount: 4,
      lessonContent: `
# Para Transferi ve Alıcı Bilgisi Kontrolü

Para transferi yaparken doğru bilgiler kritiktir. Yanlış bilgi para kaybına neden olabilir.

## IBAN/SWIFT Mantığı

**IBAN (International Bank Account Number)**: Avrupa ve çoğu ülkede banka hesap numarası. Format: Ülke kodu + kontrol hanesi + hesap numarası. Örnek: TR33 0006 1005 1978 6457 8413 26

**SWIFT/BIC Kodu**: Banka tanımlama kodu. 8-11 karakter (banka + ülke + şube). Örnek: TRBATR2A

**Ne Zaman Hangisi?**: IBAN Avrupa içi transferler için yeterli. SWIFT Avrupa dışı veya IBAN olmayan ülkeler için gerekli.

## Alıcı Adı Eşleşmesi

**Neden Önemli?**: Güvenlik, yasal uyum ve geri alma zorluğu nedeniyle kritiktir. Yanlış transfer geri alınamayabilir.

**Kontrol Listesi**: Ad soyad (tam ad, birebir eşleşmeli), hesap numarası (IBAN veya hesap numarası doğru mu?), banka adı (doğru banka mı?), ülke (doğru ülke mi?)

## Referans Alanı

**Ne İçin Kullanılır?**: Transfer takibi, muhasebe ve alıcıya bilgi vermek için.

**Referans Örnekleri**: "Amazon Payment - Order #12345", "eBay Sale - Item #67890", "Salary - January 2024"
      `.trim(),
    },
    {
      id: "step-5",
      type: "checkpoint",
      title: "Güvenlik + Süreç Doğrulama",
      description: "Öğrendiklerinizi kontrol edin.",
      questions: [
        {
          id: "q1",
          question: "2FA neden önemlidir?",
          options: [
            "Sadece şifre yeterli olduğu için",
            "Hesap güvenliğini artırır, yetkisiz erişimi önler ve ekstra güvenlik katmanı sağlar",
            "Sadece şirket hesapları için gerekli",
            "Hiçbir zaman gerekli değildir",
          ],
          correctIndex: 1,
          explanation:
            "2FA (İki Adımlı Doğrulama), hesap güvenliğini önemli ölçüde artırır. Şifre çalınsa bile, telefon veya uygulama kodu olmadan hesaba erişilemez. Bu, yetkisiz erişimi önler ve ekstra bir güvenlik katmanı sağlar.",
        },
        {
          id: "q2",
          question: "Alıcı bilgilerini iki kez kontrol etmek hangi riski azaltır?",
          options: [
            "Sadece transfer ücretini",
            "Yanlış kişiye para gönderme riskini, geri alınamaz kayıpları ve yasal sorunları azaltır",
            "Sadece transfer hızını",
            "Hiçbir riski azaltmaz",
          ],
          correctIndex: 1,
          explanation:
            "Alıcı bilgilerini iki kez kontrol etmek, yanlış kişiye para gönderme riskini önemli ölçüde azaltır. Yanlış transferler genellikle geri alınamaz ve mali kayıplara neden olur. Ayrıca yasal uyum sorunlarını da önler.",
        },
        {
          id: "q3",
          question: "Marketplace ödeme akışında asıl amaç nedir?",
          options: [
            "Sadece para biriktirmek",
            "Güvenli şekilde tahsilat yapmak ve düşük maliyetli döviz yönetimi sağlamak",
            "Sadece hızlı transfer",
            "Sadece kart çıkarmak",
          ],
          correctIndex: 1,
          explanation:
            "Marketplace ödeme akışının asıl amacı, satış gelirlerini güvenli şekilde tahsil etmek ve düşük maliyetli döviz yönetimi sağlamaktır. Bu, satıcıların global pazarlarda etkili şekilde çalışmasını sağlar.",
        },
      ],
      requiredCorrectCount: 3,
    },
  ],
};

export const companySetupTrainingContent: TrainingContent = {
  trainingId: "firma-kurulus",
  steps: [
    {
      id: "step-1",
      type: "lesson",
      title: "Neden Firma?",
      description:
        "Firma kurmanın avantajları ve e-ticaret satıcıları için önemi.",
      content: `
# Neden Firma?

E-ticaret satıcıları için firma kurmak, bireysel satıştan daha profesyonel ve güvenilir bir yapı sağlar.

## Firma Kurmanın Avantajları

### Pazaryeri Güveni
- **Profesyonel görünüm**: Müşteriler kurumsal yapıya daha fazla güvenir
- **Hesap doğrulama**: Bazı pazaryerleri firma hesaplarını önceliklendirir
- **Rekabet avantajı**: Bireysel satıcılara göre daha güvenilir görünürsünüz

### Ödeme Alma
- **Çoklu ödeme yöntemleri**: Firma hesapları daha fazla ödeme seçeneği sunar
- **Yüksek limitler**: Bireysel hesaplara göre daha yüksek işlem limitleri
- **Banka entegrasyonu**: Doğrudan banka hesabına para çekme kolaylığı

### Faturalama
- **Resmi fatura**: Müşterilere resmi fatura verebilme
- **Vergi avantajları**: Firma yapısında vergi planlaması daha esnek
- **Muhasebe düzeni**: Düzenli muhasebe kayıtları tutma zorunluluğu

### Reklam ve Pazarlama
- **Reklam platformları**: Google Ads, Facebook Ads gibi platformlarda firma hesabı gerekli
- **Marka koruması**: Firma adı ile marka tescili yapabilme
- **İş ortaklıkları**: B2B işlemlerde firma yapısı tercih edilir

## Önemli Not

⚠️ **Her ülke için süreç değişebilir**: UK, EU ve US'de firma kuruluş süreçleri, maliyetleri ve yasal gereklilikleri farklıdır. Hedef ülkenize göre detaylı araştırma yapın.

## Sonraki Adım

Firma kurmanın avantajlarını öğrendikten sonra UK/EU/US karşılaştırmasına geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-2",
      type: "lesson",
      title: "UK / EU / US Genel Karşılaştırma",
      description:
        "Üç bölgede firma kuruluş süreçlerinin karşılaştırmalı analizi.",
      content: `
# UK / EU / US Genel Karşılaştırma

Her bölgenin kendine özgü avantajları ve zorlukları vardır. İhtiyacınıza uygun olanı seçin.

## Karşılaştırma Tablosu

### Kurulum Hızı
- **UK**: 1-3 iş günü (online başvuru ile hızlı)
- **EU**: 1-4 hafta (ülkeye göre değişir, Almanya/Fransa daha hızlı)
- **US**: 1-7 gün (eyalete göre değişir, Delaware/Nevada hızlı)

### Maliyet
- **UK**: £12-50 (Companies House kayıt ücreti) + yıllık £13
- **EU**: €100-500 (ülkeye göre değişir) + yıllık ücretler
- **US**: $50-500 (eyalete göre değişir) + yıllık rapor ücretleri

### Banka/Ödeme
- **UK**: UK banka hesabı açmak nispeten kolay, Wise/Revolut alternatifleri
- **EU**: EU banka hesabı açmak kolay, SEPA transferleri hızlı
- **US**: US banka hesabı açmak zor (fiziksel bulunma gerekebilir), Wise alternatif

### Vergi Yaklaşımı
- **UK**: Corporation Tax %19 (düşük), VAT kaydı gerekli (ciroya göre)
- **EU**: Ülkeye göre değişir, genellikle %15-25 kurumlar vergisi, VAT zorunlu
- **US**: Federal + Eyalet vergisi, Sales Tax eyalete göre değişir

## Detaylı Karşılaştırma

### İngiltere (UK)
**Avantajlar:**
- Hızlı kurulum (1-3 gün)
- Düşük kurulum maliyeti
- İngilizce dil avantajı
- Brexit sonrası bağımsız vergi sistemi

**Dezavantajlar:**
- Brexit sonrası EU pazarına erişim zorlaştı
- VAT kaydı gerekli (yıllık ciro £85,000+)

### Avrupa Birliği (EU)
**Avantajlar:**
- EU pazarına doğrudan erişim
- SEPA transferleri kolay
- Çoklu ülke operasyonu

**Dezavantajlar:**
- Dil bariyeri (ülkeye göre)
- Karmaşık vergi sistemleri
- Yüksek kurulum maliyetleri (bazı ülkelerde)

### Amerika Birleşik Devletleri (US)
**Avantajlar:**
- Büyük pazar
- E-ticaret altyapısı gelişmiş
- Delaware/Nevada gibi işletme dostu eyaletler

**Dezavantajlar:**
- Banka hesabı açmak zor
- Federal + Eyalet vergisi karmaşıklığı
- Sales Tax yönetimi zor

## Sonraki Adım

Karşılaştırmayı öğrendikten sonra hedef ülke karar formuna geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-3",
      type: "task",
      title: "Hedef Ülke Karar Formu",
      description:
        "Hedef pazarınızı ve ihtiyaçlarınızı belirleyin.",
      tasks: [
        {
          id: "task-1",
          type: "field",
          label: "Hedef pazar (US/UK/EU)",
          placeholder: "Örn: UK, US, DE (Almanya), FR (Fransa)",
          required: true,
        },
        {
          id: "task-2",
          type: "field",
          label: "Satacağım ürün tipi (fiziksel/dijital/handmade)",
          placeholder: "Örn: fiziksel ürünler, dijital ürünler, el yapımı",
          required: true,
        },
        {
          id: "task-3",
          type: "field",
          label: "Aylık hedef ciro aralığı (tahmini)",
          placeholder: "Örn: $5,000-10,000, £10,000+",
          required: true,
        },
        {
          id: "task-4",
          type: "checkbox",
          label: "Şirket türlerini (Ltd/LLC vb.) araştıracağım",
          required: true,
        },
        {
          id: "task-5",
          type: "checkbox",
          label: "Resmi kurulum kaynaklarını inceleyeceğim",
          required: true,
        },
        {
          id: "task-6",
          type: "checkbox",
          label: "Fatura/vergisel süreç için uzman görüşü değerlendireceğim",
          required: true,
        },
      ],
      requiredTasksCount: 6,
    },
    {
      id: "step-4",
      type: "lesson",
      title: "Vergi / Faturalama Temel Mantık",
      description:
        "VAT, Sales Tax ve faturalama süreçlerinin genel mantığı.",
      content: `
# Vergi / Faturalama Temel Mantık

Vergi ve faturalama konuları karmaşık olabilir. Bu bölümde yüksek seviye genel bilgi verilir.

## VAT (Value Added Tax) - Katma Değer Vergisi

### Ne Zaman Geçerli?
- **EU ve UK**: Çoğu ürün ve hizmet için geçerlidir
- **Eşik değer**: Yıllık ciro belirli eşiği aşarsa VAT kaydı zorunlu
- **Örnek**: UK'de yıllık ciro £85,000+ ise VAT kaydı gerekli

### Nasıl Çalışır?
- **Satışta tahsilat**: Müşteriden VAT tahsil edilir
- **Alışta ödeme**: Tedarikçiye ödenen VAT geri alınır (input VAT)
- **Fark ödenir**: Tahsil edilen - ödenen = devlete ödenecek tutar

### Önemli Not
⚠️ **Ülkeye göre değişir**: Her ülkenin kendi VAT oranları ve kuralları vardır. Resmi kaynakları kontrol edin.

## Sales Tax (Satış Vergisi) - ABD

### Ne Zaman Geçerli?
- **Eyalet bazlı**: Her eyaletin kendi Sales Tax kuralları vardır
- **Nexus kuralı**: Eyalette fiziksel varlık veya belirli satış hacmi varsa zorunlu
- **Online satış**: E-ticaret satışlarında da geçerli olabilir

### Nasıl Çalışır?
- **Eyalet vergisi**: Eyalet bazında farklı oranlar
- **Yerel vergi**: Şehir/bölge bazında ek vergiler
- **Toplam vergi**: Eyalet + yerel vergi toplamı

### Önemli Not
⚠️ **Karmaşık sistem**: ABD'de Sales Tax yönetimi karmaşık olabilir. Eyalet bazlı takip gerekir.

## Pazaryeri Vergi Toplama

### Otomatik Toplama
- **Amazon**: Bazı durumlarda Sales Tax/VAT'i otomatik toplar
- **eBay**: Bazı eyaletlerde Sales Tax otomatik toplanır
- **Etsy**: VAT'i otomatik toplayabilir

### Önemli Not
⚠️ **Pazaryeri bazı vergileri toplayabilir**: Ancak bu, sizin vergi yükümlülüğünüzü tamamen kaldırmaz. Yerel mevzuata göre ek yükümlülükler olabilir.

## Faturalama Temel Mantık

### Fatura İçeriği
- **Fatura numarası**: Benzersiz, sıralı numara
- **Tarih**: Fatura tarihi
- **Satıcı bilgileri**: Firma adı, adres, vergi numarası
- **Alıcı bilgileri**: Müşteri adı, adres
- **Ürün/hizmet detayları**: Açıklama, miktar, birim fiyat
- **Vergi bilgileri**: VAT/Sales Tax oranı ve tutarı
- **Toplam**: Vergi dahil toplam tutar

### Fatura Numaralandırma
- **Sıralı numara**: 001, 002, 003... veya INV-2024-001 formatı
- **Eksik numara olmamalı**: Sıralı olmalı, atlama olmamalı
- **Yıllık sıfırlama**: Her yıl sıfırdan başlayabilir veya devam edebilir

## Genel Uyarı

⚠️ **Bu içerik genel bilgilendirme amaçlıdır**: Ülke/ürün/ticaret modeline göre yükümlülükler değişebilir. Resmi kaynaklar ve gerektiğinde uzman görüşü ile ilerleyin.

## Sonraki Adım

Vergi ve faturalama temellerini öğrendikten sonra evrak ve süreç checklist'ine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-5",
      type: "task",
      title: "Evrak & Süreç Checklist'i",
      description:
        "Firma kuruluşu için gerekli evrakları ve süreçleri hazırlayın.",
      tasks: [
        {
          id: "task-7",
          type: "checkbox",
          label: "Kimlik/Adres belgelerim hazır",
          required: true,
        },
        {
          id: "task-8",
          type: "checkbox",
          label: "Şirket adresi/registered address planladım",
          required: true,
        },
        {
          id: "task-9",
          type: "checkbox",
          label: "Fatura şablonu/numaralandırma mantığını belirledim",
          required: true,
        },
        {
          id: "task-10",
          type: "checkbox",
          label: "Muhasebe takibini nasıl yapacağımı seçtim (araç/uzman)",
          required: true,
        },
      ],
      requiredTasksCount: 4,
    },
    {
      id: "step-6",
      type: "checkpoint",
      title: "Firma Kuruluşu Kontrol Soruları",
      description: "Öğrendiklerinizi kontrol edin.",
      questions: [
        {
          id: "q1",
          question: "Firma kurmak en çok hangi süreçleri kolaylaştırır?",
          options: [
            "Sadece pazaryeri güveni",
            "Ödemeler, faturalama, güven ve profesyonel görünüm süreçlerini kolaylaştırır",
            "Sadece vergi avantajları",
            "Hiçbir süreci kolaylaştırmaz",
          ],
          correctIndex: 1,
          explanation:
            "Firma kurmak, ödeme alma süreçlerini (çoklu ödeme yöntemleri, yüksek limitler), faturalama süreçlerini (resmi fatura, muhasebe düzeni), pazaryeri güvenini (profesyonel görünüm, hesap doğrulama) ve genel profesyonel görünümü kolaylaştırır.",
        },
        {
          id: "q2",
          question: "VAT/Sales Tax neyin parçasıdır?",
          options: [
            "Sadece fiyatlandırma",
            "Vergilendirme/işlem vergileri sisteminin parçasıdır",
            "Sadece pazaryeri komisyonu",
            "Sadece banka ücretleri",
          ],
          correctIndex: 1,
          explanation:
            "VAT (Value Added Tax) ve Sales Tax, vergilendirme/işlem vergileri sisteminin parçasıdır. Bu vergiler, satış işlemlerinde tahsil edilir ve devlete ödenir. Ülkeye ve bölgeye göre farklı oranlar ve kurallar uygulanır.",
        },
        {
          id: "q3",
          question: "Neden resmi kaynak kontrolü önemlidir?",
          options: [
            "Sadece genel bilgi için",
            "Değişen mevzuat ve yanlış işlem riskini önlemek için kritiktir",
            "Sadece maliyet bilgisi için",
            "Hiçbir zaman gerekli değildir",
          ],
          correctIndex: 1,
          explanation:
            "Resmi kaynak kontrolü önemlidir çünkü mevzuat sürekli değişebilir. Yanlış bilgiye dayanarak yapılan işlemler yasal sorunlara ve mali cezalara neden olabilir. Resmi kaynaklar güncel ve doğru bilgi sağlar.",
        },
      ],
      requiredCorrectCount: 3,
    },
  ],
};

export const shopifyTrainingContent: TrainingContent = {
  trainingId: "shopify-baslangic",
  steps: [
    {
      id: "step-1",
      type: "lesson",
      title: "Shopify Nedir, Ne Zaman Kullanılır?",
      description:
        "Shopify'ın ne olduğunu, hangi iş modelleri için uygun olduğunu öğrenin.",
      content: `
# Shopify Nedir, Ne Zaman Kullanılır?

Shopify, e-ticaret mağazası kurmak için kullanılan bir platformdur. Kendi web sitenizi oluşturmanıza ve ürünlerinizi satmanıza olanak sağlar.

## Shopify Hangi İş Modelleri İçin Uygundur?

### Fiziksel Ürün Satışı
- **El yapımı ürünler**: Etsy'den sonra kendi markanızı kurmak
- **Toplu üretim**: Stoklu ürün satışı
- **Dropshipping**: Stok tutmadan satış yapma
- **Print-on-demand**: Kişiselleştirilmiş ürünler

### Dijital Ürün Satışı
- **E-kitaplar**: Dijital içerik satışı
- **Yazılım**: Lisans satışı
- **Online kurslar**: Eğitim içeriği
- **Abonelikler**: Tekrarlayan gelir modelleri

### Hizmet Satışı
- **Danışmanlık**: Profesyonel hizmetler
- **Randevu rezervasyonu**: Hizmet rezervasyonu
- **Üyelikler**: Özel içerik erişimi

## Pazaryeri vs Web Sitesi Farkı

### Pazaryeri (Amazon, eBay, Etsy)
**Avantajlar:**
- Hazır müşteri kitlesi
- Kolay başlangıç
- Pazaryeri güveni

**Dezavantajlar:**
- Komisyon ücretleri
- Rekabet yoğunluğu
- Sınırlı marka kontrolü
- Pazaryeri kurallarına bağlılık

### Kendi Web Siteniz (Shopify)
**Avantajlar:**
- Tam marka kontrolü
- Komisyon yok (sadece aylık ücret)
- Müşteri verilerine sahipsiniz
- Özelleştirme imkanı

**Dezavantajlar:**
- Trafik çekmek sizin sorumluluğunuz
- Teknik bilgi gerekebilir
- Başlangıç maliyeti

## Shopify Bir Araçtır

⚠️ **Önemli**: Shopify bir araçtır, iş modeli kararı senden gelir. Shopify size mağaza kurmanız için gerekli altyapıyı sağlar, ancak:
- **Ne satacağınızı** siz belirlersiniz
- **Hedef kitlenizi** siz belirlersiniz
- **Pazarlama stratejinizi** siz oluşturursunuz
- **Marka kimliğinizi** siz şekillendirirsiniz

## Shopify Ne Zaman Kullanılır?

### İdeal Durumlar
- Kendi markanızı kurmak istiyorsanız
- Pazaryeri komisyonlarından kaçınmak istiyorsanız
- Müşteri verilerine sahip olmak istiyorsanız
- Özelleştirilmiş mağaza deneyimi sunmak istiyorsanız

### Dikkat Edilmesi Gerekenler
- Trafik çekmek için pazarlama bütçesi gerekir
- Teknik konularda temel bilgi faydalıdır
- Aylık maliyet (Shopify planı) vardır

## Sonraki Adım

Shopify'ın ne olduğunu öğrendikten sonra mağaza kurulumu ve temel ayarlara geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-2",
      type: "lesson",
      title: "Mağaza Kurulumu & Temel Ayarlar",
      description:
        "Shopify mağaza açılışı, dil, para birimi ayarları ve admin paneline giriş.",
      content: `
# Mağaza Kurulumu & Temel Ayarlar

Shopify'da mağaza kurmak basit ve hızlıdır. Adım adım ilerleyerek mağazanızı kurabilirsiniz.

## Store Açılışı Mantığı

### Kayıt Süreci
1. **Shopify.com'a gidin**: Resmi web sitesinden kayıt olun
2. **E-posta doğrulama**: E-posta adresinizi doğrulayın
3. **Mağaza adı seçin**: Benzersiz bir mağaza adı belirleyin
4. **Kişisel bilgiler**: Ad, soyad, telefon numarası
5. **Hesap oluştur**: Şifre belirleyin ve hesabı oluşturun

### İlk Kurulum Adımları
- **Mağaza adı**: URL'niz olacak (örn: sizinmagaza.myshopify.com)
- **Ülke seçimi**: Hangi ülkede satış yapacağınızı belirtin
- **Para birimi**: Hangi para biriminde fiyatlandırma yapacağınızı seçin

## Dil, Para Birimi, Ülke Ayarları

### Dil Ayarları
- **Mağaza dili**: Müşterilerin göreceği dil
- **Admin dili**: Yönetim paneli dili
- **Çoklu dil**: İleride birden fazla dil ekleyebilirsiniz

### Para Birimi Ayarları
- **Ana para birimi**: Mağazanızın ana para birimi
- **Çoklu para birimi**: Müşterilerin kendi para birimlerinde görmesi
- **Otomatik dönüşüm**: Shopify otomatik kur dönüşümü yapabilir

### Ülke Ayarları
- **Satış bölgeleri**: Hangi ülkelere satış yapacağınızı belirleyin
- **Kargo bölgeleri**: Hangi ülkelere kargo yapacağınızı ayarlayın
- **Vergi ayarları**: Ülkeye göre vergi kurallarını yapılandırın

## Admin Paneline Kısa Rehber

### Ana Menü Bölümleri

**Ürünler:**
- Ürün ekleme, düzenleme, stok yönetimi
- Kategoriler ve koleksiyonlar
- Varyasyonlar ve envanter

**Siparişler:**
- Gelen siparişler
- Sipariş detayları ve durumu
- Müşteri bilgileri

**Müşteriler:**
- Müşteri listesi
- Müşteri detayları
- Müşteri segmentasyonu

**İçerik:**
- Sayfalar (Hakkımızda, İletişim)
- Blog yazıları
- Menüler

**Tema:**
- Tema seçimi ve özelleştirme
- Sayfa düzenleri
- Görsel düzenlemeler

**Ayarlar:**
- Genel ayarlar
- Ödeme ayarları
- Kargo ayarları
- Bildirimler

## Önemli İlk Adımlar
1. **Mağaza bilgilerini doldurun**: Logo, iletişim bilgileri
2. **Ödeme yöntemini ayarlayın**: Stripe, PayPal veya Shopify Payments
3. **Kargo ayarlarını yapın**: Kargo şirketleri ve ücretleri
4. **Temayı seçin**: Mağaza görünümünü belirleyin

## Sonraki Adım

Temel ayarları öğrendikten sonra tema seçimi ve mağaza görünümü görevine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-3",
      type: "task",
      title: "Tema Seçimi & Mağaza Görünümü",
      description:
        "Mobil uyumlu tema seçin ve mağaza görünümünüzü planlayın.",
      tasks: [
        {
          id: "task-1",
          type: "checkbox",
          label: "Mobil uyumlu tema seçeceğim",
          required: true,
        },
        {
          id: "task-2",
          type: "checkbox",
          label: "Ana sayfa düzenini sade tutacağım",
          required: true,
        },
        {
          id: "task-3",
          type: "checkbox",
          label: "Güven artırıcı alanlar ekleyeceğim (Hakkımızda, İletişim)",
          required: true,
        },
        {
          id: "task-4",
          type: "field",
          label: "Seçtiğim tema adı",
          placeholder: "Örn: Dawn, Debut, Brooklyn",
          required: true,
        },
        {
          id: "task-5",
          type: "field",
          label: "Ana renk / marka tonu",
          placeholder: "Örn: Mavi (#0066CC), Kırmızı (#CC0000)",
          required: true,
        },
      ],
      requiredTasksCount: 5,
    },
    {
      id: "step-4",
      type: "lesson",
      title: "Ürün Ekleme Mantığı",
      description:
        "Shopify'da ürün ekleme, varyasyon, stok ve fiyat yönetimi.",
      content: `
# Ürün Ekleme Mantığı

Shopify'da ürün eklemek basit ve sezgiseldir. Doğru bilgilerle ürünlerinizi hızlıca ekleyebilirsiniz.

## Ürün Başlığı

### Başlık Kuralları
- **Açıklayıcı olmalı**: Ürünü net bir şekilde tanımlamalı
- **Anahtar kelimeler**: Arama için önemli kelimeleri içermeli
- **Uzunluk**: 60-70 karakter ideal (SEO için)
- **Örnek**: "El Yapımı Deri Cüzdan - Kahverengi - Erkek"

## Açıklama

### Açıklama Yapısı
- **Kısa özet**: İlk 2-3 cümle önemli (müşteri ilk bunu görür)
- **Özellikler**: Ürünün özelliklerini listeleyin
- **Kullanım**: Nasıl kullanılacağını açıklayın
- **Faydalar**: Müşteriye ne sağladığını belirtin

### Açıklama İpuçları
- **Okunabilir**: Kısa paragraflar, madde işaretleri
- **Görsel**: Görsellerle destekleyin
- **SEO**: Anahtar kelimeleri doğal şekilde kullanın

## Varyasyon (Beden/Renk)

### Varyasyon Türleri
- **Beden**: S, M, L, XL, XXL
- **Renk**: Kırmızı, Mavi, Siyah
- **Malzeme**: Pamuk, Polyester, Karışım
- **Stil**: Klasik, Modern, Spor

### Varyasyon Yönetimi
- **Her varyasyon için fiyat**: Farklı fiyatlandırma yapabilirsiniz
- **Stok takibi**: Her varyasyon için ayrı stok
- **Görsel**: Her varyasyon için farklı görsel

## Stok ve Fiyat Mantığı

### Stok Yönetimi
- **Stok takibi**: Otomatik stok takibi açık/kapalı
- **Stok seviyesi**: Her ürün/varyasyon için stok miktarı
- **Düşük stok uyarısı**: Belirli seviyenin altına düştüğünde bildirim
- **Stok tükendi**: Otomatik olarak "Stokta Yok" gösterilir

### Fiyatlandırma
- **Satış fiyatı**: Müşterinin ödeyeceği fiyat
- **Karşılaştırma fiyatı**: İndirimli fiyat göstermek için (opsiyonel)
- **Maliyet**: Ürün maliyeti (sadece siz görürsünüz)
- **Kâr marjı**: Otomatik hesaplanır

### Fiyatlandırma İpuçları
- **Psikolojik fiyatlandırma**: $29.99 vs $30
- **Toplu satış**: 2 al 1 bedava gibi kampanyalar
- **İndirimler**: Sezonluk indirimler

## Ürün Görselleri

### Görsel Standartları
- **Ana görsel**: İlk görünen görsel, en önemli
- **Ek görseller**: Farklı açılar, detaylar, kullanım senaryoları
- **Format**: JPG, PNG (yüksek kalite)
- **Boyut**: Minimum 800x800px, ideal 2048x2048px

## Sonraki Adım

Ürün ekleme mantığını öğrendikten sonra ilk ürün taslağı oluşturma görevine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-5",
      type: "task",
      title: "İlk Ürün Taslağını Oluştur",
      description:
        "İlk ürününüz için taslak hazırlayın.",
      tasks: [
        {
          id: "task-6",
          type: "field",
          label: "Ürün adı taslağı",
          placeholder: "Örn: El Yapımı Deri Cüzdan - Kahverengi",
          required: true,
        },
        {
          id: "task-7",
          type: "field",
          label: "Kısa ürün açıklaması (2-3 cümle)",
          placeholder: "Bu ürün... özellikler... faydalar...",
          required: true,
        },
        {
          id: "task-8",
          type: "field",
          label: "Varyasyon var mı? (evet/hayır)",
          placeholder: "Örn: evet - beden (S, M, L)",
          required: true,
        },
        {
          id: "task-9",
          type: "checkbox",
          label: "Ürün görsellerini hazırladım",
          required: true,
        },
        {
          id: "task-10",
          type: "checkbox",
          label: "Fiyat & stok mantığını anladım",
          required: true,
        },
      ],
      requiredTasksCount: 5,
    },
    {
      id: "step-6",
      type: "checkpoint",
      title: "Ödeme & Yayına Alma Farkındalığı",
      description: "Öğrendiklerinizi kontrol edin.",
      questions: [
        {
          id: "q1",
          question: "Shopify'da ödeme entegrasyonu neden kritiktir?",
          options: [
            "Sadece görünüm için",
            "Müşterilerin ürün satın alabilmesi ve ödeme yapabilmesi için kritiktir, mağaza çalışmaz",
            "Sadece stok takibi için",
            "Hiçbir zaman gerekli değildir",
          ],
          correctIndex: 1,
          explanation:
            "Ödeme entegrasyonu kritiktir çünkü müşterilerin ürün satın alabilmesi ve ödeme yapabilmesi için gereklidir. Ödeme entegrasyonu olmadan mağaza çalışmaz ve satış yapılamaz. Stripe, PayPal veya Shopify Payments gibi ödeme yöntemlerinden birini mutlaka ayarlamalısınız.",
        },
        {
          id: "q2",
          question: "Tema seçimi en çok neyi etkiler?",
          options: [
            "Sadece renkleri",
            "Mağaza görünümü, kullanıcı deneyimi, mobil uyumluluk ve müşteri güvenini etkiler",
            "Sadece fiyatları",
            "Sadece stok durumunu",
          ],
          correctIndex: 1,
          explanation:
            "Tema seçimi, mağaza görünümünü, kullanıcı deneyimini, mobil uyumluluğu ve müşteri güvenini doğrudan etkiler. İyi bir tema, profesyonel görünüm sağlar ve dönüşüm oranını artırır. Mobil uyumlu ve hızlı yüklenen temalar tercih edilmelidir.",
        },
        {
          id: "q3",
          question: "Mağazayı yayına almadan önce neyi kontrol etmek gerekir?",
          options: [
            "Sadece ürün fiyatlarını",
            "Ödeme entegrasyonu, kargo ayarları, iletişim bilgileri, yasal sayfalar ve tema görünümünü kontrol etmek gerekir",
            "Sadece tema rengini",
            "Hiçbir şeyi kontrol etmeye gerek yoktur",
          ],
          correctIndex: 1,
          explanation:
            "Mağazayı yayına almadan önce ödeme entegrasyonunun çalıştığını, kargo ayarlarının doğru olduğunu, iletişim bilgilerinin güncel olduğunu, yasal sayfaların (Gizlilik, Kullanım Şartları) eklendiğini ve tema görünümünün mobilde de düzgün çalıştığını kontrol etmelisiniz.",
        },
      ],
      requiredCorrectCount: 3,
    },
  ],
};

export const woocommerceTrainingContent: TrainingContent = {
  trainingId: "woocommerce-baslangic",
  steps: [
    {
      id: "step-1",
      type: "lesson",
      title: "WooCommerce Nedir, Kimler İçin Uygundur?",
      description:
        "WooCommerce'ın ne olduğunu, Shopify'dan farkını ve kimler için uygun olduğunu öğrenin.",
      content: `
# WooCommerce Nedir, Kimler İçin Uygundur?

WooCommerce, WordPress üzerinde çalışan açık kaynaklı bir e-ticaret eklentisidir. Kendi web sitenizde tam kontrol sağlar.

## WooCommerce vs Shopify Farkı

### Kontrol
- **WooCommerce**: Tam kontrol, özelleştirme sınırsız
- **Shopify**: Sınırlı özelleştirme, platform kurallarına bağlı

### Maliyet
- **WooCommerce**: Ücretsiz eklenti, sadece hosting maliyeti
- **Shopify**: Aylık plan ücreti ($29-299/ay) + işlem ücretleri

### Teknik Sorumluluk
- **WooCommerce**: Hosting, güvenlik, güncelleme sizin sorumluluğunuzda
- **Shopify**: Platform yönetimi Shopify'ın sorumluluğunda

## WordPress Altyapısının Avantajları

### Esneklik
- **Sınırsız özelleştirme**: Tema ve eklenti seçenekleri
- **İçerik yönetimi**: Blog ve e-ticaret aynı platformda
- **SEO avantajı**: WordPress'in güçlü SEO özellikleri
- **Topluluk desteği**: Büyük topluluk ve kaynak

### Maliyet
- **Düşük maliyet**: Sadece hosting ücreti
- **Ölçeklenebilirlik**: Trafik arttıkça hosting yükseltilebilir
- **İşlem ücreti yok**: WooCommerce işlem ücreti almaz

## WordPress Altyapısının Dezavantajları

### Teknik Sorumluluk
- **Hosting yönetimi**: Sunucu yönetimi sizin sorumluluğunuzda
- **Güvenlik**: Güvenlik önlemlerini siz almalısınız
- **Güncelleme**: WordPress, WooCommerce ve eklentileri güncellemek gerekir
- **Yedekleme**: Düzenli yedekleme yapmalısınız

### Öğrenme Eğrisi
- **Teknik bilgi**: Temel WordPress bilgisi gerekir
- **Zaman yatırımı**: Öğrenme ve kurulum süreci daha uzun

## Daha Fazla Kontrol = Daha Fazla Sorumluluk

⚠️ **Önemli**: WooCommerce size tam kontrol sağlar, ancak bu kontrolle birlikte teknik sorumluluk da gelir:
- **Hosting yönetimi**: Sunucu performansı, güvenlik
- **Güncelleme**: Düzenli güncelleme yapmalısınız
- **Yedekleme**: Veri kaybını önlemek için yedekleme
- **Güvenlik**: Güvenlik önlemleri ve izleme

## Kimler İçin Uygundur?

### İdeal Durumlar
- WordPress deneyimi olanlar
- Özelleştirme ihtiyacı olanlar
- Düşük maliyet isteyenler
- Teknik konularda rahat olanlar
- Blog + e-ticaret kombinasyonu isteyenler

### Dikkat Edilmesi Gerekenler
- Teknik bilgi gerekir
- Zaman yatırımı gerekir
- Hosting yönetimi sorumluluğu

## Sonraki Adım

WooCommerce'ın ne olduğunu öğrendikten sonra WordPress & WooCommerce kurulum mantığına geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-2",
      type: "lesson",
      title: "WordPress & WooCommerce Kurulum Mantığı",
      description:
        "Hosting, domain, WordPress ve WooCommerce kurulum süreci.",
      content: `
# WordPress & WooCommerce Kurulum Mantığı

WooCommerce, WordPress üzerinde çalışır. Önce WordPress kurulumu, sonra WooCommerce eklentisi eklenir.

## Hosting + Domain Genel Mantık

### Hosting Nedir?
- **Web sunucusu**: Web sitenizin dosyalarının saklandığı yer
- **Performans**: Hızlı hosting = hızlı site
- **Güvenlik**: Güvenli hosting = güvenli site
- **Destek**: Teknik destek önemli

### Domain Nedir?
- **Web adresi**: Sitenizin adresi (örn: sizinmagaza.com)
- **Marka kimliği**: Marka adınızla uyumlu olmalı
- **SEO**: Kısa ve akılda kalıcı olmalı

### Hosting Seçimi
- **Paylaşımlı hosting**: Başlangıç için uygun, düşük maliyet
- **VPS**: Daha fazla kontrol, orta seviye
- **Dedike sunucu**: Yüksek trafik için, yüksek maliyet
- **WordPress hosting**: WordPress için optimize edilmiş

### Domain Seçimi
- **Marka adı**: Markanızla uyumlu
- **Uzantı**: .com, .net, .org (ülkeye göre .tr, .co.uk)
- **Kısa ve akılda kalıcı**: Kolay hatırlanabilir

## WordPress → WooCommerce Plugin İlişkisi

### Kurulum Sırası
1. **WordPress kurulumu**: Hosting üzerinde WordPress kurulur
2. **Tema seçimi**: E-ticaret uyumlu tema seçilir
3. **WooCommerce eklentisi**: WooCommerce eklentisi yüklenir
4. **Ayarlar**: WooCommerce ayarları yapılandırılır

### WordPress Temel Yapı
- **WordPress Core**: Temel WordPress sistemi
- **Tema**: Görünüm ve düzen
- **Eklentiler**: İşlevsellik ekler (WooCommerce bir eklentidir)
- **İçerik**: Sayfalar, yazılar, ürünler

### WooCommerce Eklentisi
- **Ücretsiz**: Temel WooCommerce ücretsizdir
- **Eklenti pazarı**: Binlerce eklenti mevcuttur
- **Özelleştirme**: İhtiyacınıza göre eklenti ekleyebilirsiniz

## Güncelleme & Bakım Farkındalığı

### Güncelleme Önemi
- **Güvenlik**: Güvenlik açıklarını kapatır
- **Performans**: Performans iyileştirmeleri
- **Yeni özellikler**: Yeni özellikler eklenir
- **Uyumluluk**: Diğer eklentilerle uyumluluk

### Güncelleme Süreci
- **WordPress Core**: Düzenli güncelleme
- **WooCommerce**: Düzenli güncelleme
- **Tema**: Tema güncellemeleri
- **Eklentiler**: Eklenti güncellemeleri

### Bakım İpuçları
- **Yedekleme**: Güncelleme öncesi yedek alın
- **Test ortamı**: Önce test ortamında deneyin
- **Düzenli kontrol**: Haftalık/aylık kontrol yapın
- **Güvenlik eklentileri**: Güvenlik eklentileri kullanın

## Sonraki Adım

Kurulum mantığını öğrendikten sonra altyapı kontrol listesi görevine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-3",
      type: "task",
      title: "Altyapı Kontrol Listesi",
      description:
        "Hosting, SSL ve güncelleme hazırlıklarını tamamlayın.",
      tasks: [
        {
          id: "task-1",
          type: "checkbox",
          label: "Hosting sağlayıcımı belirledim",
          required: true,
        },
        {
          id: "task-2",
          type: "checkbox",
          label: "SSL sertifikası olacağını kontrol ettim",
          required: true,
        },
        {
          id: "task-3",
          type: "checkbox",
          label: "WordPress ve WooCommerce sürümlerini güncel tutacağım",
          required: true,
        },
        {
          id: "task-4",
          type: "field",
          label: "Hosting firması adı",
          placeholder: "Örn: SiteGround, Bluehost, Hostinger",
          required: true,
        },
        {
          id: "task-5",
          type: "field",
          label: "Hedef site dili & para birimi",
          placeholder: "Örn: Türkçe / TRY, İngilizce / USD",
          required: true,
        },
      ],
      requiredTasksCount: 5,
    },
    {
      id: "step-4",
      type: "lesson",
      title: "Ürün & Kategori Yönetimi",
      description:
        "WooCommerce'da ürün ekleme, varyasyon, kategori ve stok yönetimi.",
      content: `
# Ürün & Kategori Yönetimi

WooCommerce'da ürün yönetimi esnek ve güçlüdür. Farklı ürün türleri ve yönetim seçenekleri sunar.

## Basit Ürün / Varyasyonlu Ürün Farkı

### Basit Ürün
- **Tek varyasyon**: Sadece bir versiyonu olan ürün
- **Örnek**: "Mavi T-Shirt", "Siyah Çanta"
- **Stok takibi**: Tek stok seviyesi
- **Fiyat**: Tek fiyat

### Varyasyonlu Ürün
- **Çoklu varyasyon**: Farklı versiyonları olan ürün
- **Örnek**: "T-Shirt" (Beden: S, M, L, XL) (Renk: Mavi, Kırmızı)
- **Stok takibi**: Her varyasyon için ayrı stok
- **Fiyat**: Varyasyona göre farklı fiyat olabilir

### Varyasyon Örnekleri
- **Beden**: S, M, L, XL, XXL
- **Renk**: Kırmızı, Mavi, Siyah
- **Malzeme**: Pamuk, Polyester
- **Boyut**: Küçük, Orta, Büyük

## Kategori – Etiket – Ürün İlişkisi

### Kategori
- **Hiyerarşik yapı**: Ana kategori → Alt kategori
- **Örnek**: Giyim → Erkek Giyim → T-Shirt
- **Organizasyon**: Ürünleri organize etmek için
- **Navigasyon**: Müşteriler kategorilere göre gezinir

### Etiket
- **Esnek etiketleme**: Ürünlere etiket eklenebilir
- **Örnek**: "Yeni", "İndirimli", "Popüler"
- **Filtreleme**: Müşteriler etiketlere göre filtreleyebilir
- **SEO**: Arama için faydalı

### Ürün
- **Kategoriye ait**: Her ürün en az bir kategoriye ait olmalı
- **Etiketler**: Ürünlere birden fazla etiket eklenebilir
- **İlişki**: Kategori ve etiketler ürünleri gruplar

## Stok Yönetimi Mantığı

### Stok Takibi
- **Açık/Kapalı**: Stok takibini açabilir veya kapatabilirsiniz
- **Stok miktarı**: Her ürün/varyasyon için stok miktarı
- **Düşük stok uyarısı**: Belirli seviyenin altına düştüğünde bildirim
- **Stok tükendi**: Otomatik olarak "Stokta Yok" gösterilir

### Stok Durumları
- **Stokta var**: Ürün satışa hazır
- **Stokta yok**: Ürün satılamaz
- **Yedek sipariş**: Stokta yok ama sipariş alınabilir
- **Stokta değil**: Geçici olarak satışta değil

### Stok Yönetimi İpuçları
- **Düzenli kontrol**: Stok seviyelerini düzenli kontrol edin
- **Otomatik bildirim**: Düşük stok bildirimlerini aktif edin
- **Yedekleme**: Kritik ürünler için yedek stok planlayın

## Sonraki Adım

Ürün ve kategori yönetimini öğrendikten sonra ilk ürün ve kargo ayarları görevine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-5",
      type: "task",
      title: "İlk Ürün & Kargo Ayarları",
      description:
        "İlk ürününüzü planlayın ve kargo ayarlarını hazırlayın.",
      tasks: [
        {
          id: "task-6",
          type: "field",
          label: "Ürün adı taslağı",
          placeholder: "Örn: El Yapımı Deri Cüzdan",
          required: true,
        },
        {
          id: "task-7",
          type: "field",
          label: "Ürün türü (basit / varyasyonlu)",
          placeholder: "Örn: varyasyonlu - beden (S, M, L)",
          required: true,
        },
        {
          id: "task-8",
          type: "field",
          label: "Kargo bölgesi (ülke/bölge)",
          placeholder: "Örn: Türkiye, Avrupa, Dünya Çapında",
          required: true,
        },
        {
          id: "task-9",
          type: "checkbox",
          label: "Vergi ayarlarının ülkeye göre değiştiğini biliyorum",
          required: true,
        },
        {
          id: "task-10",
          type: "checkbox",
          label: "Kargo ücretlendirme mantığını seçtim",
          required: true,
        },
      ],
      requiredTasksCount: 5,
    },
    {
      id: "step-6",
      type: "lesson",
      title: "Ödeme & Kargo Entegrasyonlarına Giriş",
      description:
        "WooCommerce ödeme eklentileri, yerel/global ödeme sağlayıcılar ve kargo entegrasyonları.",
      content: `
# Ödeme & Kargo Entegrasyonlarına Giriş

WooCommerce'da ödeme ve kargo işlemleri eklentiler aracılığıyla yapılır. İhtiyacınıza göre eklenti seçebilirsiniz.

## WooCommerce Ödeme Eklentileri Mantığı

### Temel Ödeme Yöntemleri
- **Nakit ödeme**: Kapıda ödeme
- **Banka havalesi**: Manuel banka transferi
- **Çek**: Çek ile ödeme (nadir)

### Eklenti ile Ödeme Yöntemleri
- **Stripe**: Kredi kartı ödemeleri
- **PayPal**: PayPal ödemeleri
- **iyzico**: Türkiye için popüler
- **PayTR**: Türkiye için alternatif

### Ödeme Eklentisi Seçimi
- **Bölge**: Hangi ülkede satış yapıyorsunuz?
- **Maliyet**: İşlem ücretleri ne kadar?
- **Özellikler**: Hangi özellikler gerekli?
- **Destek**: Teknik destek mevcut mu?

## Yerel / Global Ödeme Sağlayıcı Farkı

### Yerel Ödeme Sağlayıcılar
- **Türkiye**: iyzico, PayTR, Paymes
- **Avantajlar**: Yerel dil desteği, yerel banka entegrasyonu
- **Dezavantajlar**: Sadece belirli ülkelerde çalışır

### Global Ödeme Sağlayıcılar
- **Stripe**: 40+ ülkede çalışır
- **PayPal**: Dünya çapında yaygın
- **Avantajlar**: Çoklu ülke desteği
- **Dezavantajlar**: Yerel özellikler sınırlı olabilir

### Seçim Kriterleri
- **Hedef pazar**: Hangi ülkelerde satış yapıyorsunuz?
- **Maliyet**: İşlem ücretleri ve kurulum maliyeti
- **Özellikler**: İhtiyacınıza uygun özellikler var mı?

## Kargo Entegrasyonlarının Neden Eklentiyle Yapıldığı

### WooCommerce Eklenti Sistemi
- **Modüler yapı**: Her özellik ayrı eklenti olabilir
- **Esneklik**: İhtiyacınıza göre eklenti seçebilirsiniz
- **Özelleştirme**: Özel eklenti geliştirebilirsiniz

### Kargo Eklentileri
- **Yerel kargo**: Türkiye için MNG, Yurtiçi Kargo eklentileri
- **Global kargo**: DHL, FedEx, UPS eklentileri
- **Çoklu kargo**: Birden fazla kargo şirketi desteği

### Kargo Eklentisi Özellikleri
- **Otomatik fiyatlandırma**: Kargo ücretini otomatik hesaplar
- **Takip numarası**: Sipariş takibi için
- **Bölge bazlı**: Ülke/bölge bazlı kargo ücretleri
- **Ücretsiz kargo**: Belirli tutar üzeri ücretsiz kargo

## Eklenti Seçim İpuçları
- **Güncel**: Son güncelleme tarihini kontrol edin
- **Aktif kurulum**: Kaç kişi kullanıyor?
- **Yorumlar**: Kullanıcı yorumlarını okuyun
- **Destek**: Teknik destek mevcut mu?

## Sonraki Adım

Ödeme ve kargo entegrasyonlarını öğrendikten sonra kontrol sorularına geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-7",
      type: "checkpoint",
      title: "WooCommerce Farkındalık Kontrolü",
      description: "Öğrendiklerinizi kontrol edin.",
      questions: [
        {
          id: "q1",
          question: "WooCommerce neden daha fazla teknik sorumluluk gerektirir?",
          options: [
            "Sadece hosting maliyeti nedeniyle",
            "Hosting yönetimi, güvenlik, güncelleme ve yedekleme sizin sorumluluğunuzda olduğu için",
            "Sadece tema seçimi nedeniyle",
            "Hiçbir zaman teknik sorumluluk gerektirmez",
          ],
          correctIndex: 1,
          explanation:
            "WooCommerce daha fazla teknik sorumluluk gerektirir çünkü hosting yönetimi, güvenlik önlemleri, WordPress/WooCommerce/eklenti güncellemeleri ve düzenli yedekleme sizin sorumluluğunuzdadır. Shopify gibi yönetilen platformlarda bu sorumluluklar platform tarafından yönetilir.",
        },
        {
          id: "q2",
          question: "Varyasyonlu ürün ne zaman kullanılır?",
          options: [
            "Sadece farklı fiyatlar için",
            "Aynı ürünün farklı versiyonları (beden, renk, malzeme) olduğunda kullanılır",
            "Sadece stok takibi için",
            "Hiçbir zaman kullanılmamalıdır",
          ],
          correctIndex: 1,
          explanation:
            "Varyasyonlu ürün, aynı ürünün farklı versiyonları (beden, renk, malzeme, boyut) olduğunda kullanılır. Örneğin bir T-Shirt'ün farklı bedenleri (S, M, L, XL) ve renkleri (Mavi, Kırmızı) varsa varyasyonlu ürün olarak tanımlanır. Her varyasyon için ayrı stok ve fiyat belirlenebilir.",
        },
        {
          id: "q3",
          question: "Kargo ayarları hangi aşamada kritiktir?",
          options: [
            "Sadece ürün eklerken",
            "Mağaza açılışından önce ve ürün eklerken kritiktir, müşteri deneyimi için önemlidir",
            "Sadece sipariş geldiğinde",
            "Hiçbir zaman kritik değildir",
          ],
          correctIndex: 1,
          explanation:
            "Kargo ayarları mağaza açılışından önce ve ürün eklerken kritiktir. Müşteriler sepete ürün eklediğinde kargo ücretini görmek ister. Kargo ayarları yapılmamışsa müşteri siparişi tamamlayamaz veya yanlış kargo ücreti görür. Bu, müşteri deneyimini olumsuz etkiler ve satış kaybına neden olur.",
        },
      ],
      requiredCorrectCount: 3,
    },
  ],
};

export const logisticsTrainingContent: TrainingContent = {
  trainingId: "lojistik-kargo",
  steps: [
    {
      id: "step-1",
      type: "lesson",
      title: "Lojistik Neden Satış Kadar Önemlidir?",
      description:
        "Lojistik ve kargo yönetiminin satış başarısına etkisi ve kârlılık üzerindeki rolü.",
      content: `
# Lojistik Neden Satış Kadar Önemlidir?

Lojistik ve kargo yönetimi, e-ticaret başarınızın görünmeyen ama kritik bir parçasıdır. Satış kadar önemlidir çünkü müşteri deneyimini doğrudan etkiler.

## Teslimat Süresi → Yorumlar → Sıralama → Dönüşüm

### Teslimat Süresi Etkisi
- **Hızlı teslimat**: Müşteri memnuniyeti artar
- **Yavaş teslimat**: Müşteri şikayeti ve negatif yorum riski
- **Beklenti yönetimi**: Gerçekçi teslimat süresi belirtmek önemli

### Yorumlar ve Sıralama
- **Pozitif yorumlar**: Hızlı ve güvenilir kargo = iyi yorumlar
- **Negatif yorumlar**: Gecikme veya hasar = kötü yorumlar
- **Platform sıralaması**: İyi yorumlar = daha üst sıralama
- **Güven faktörü**: Yorumlar müşteri güvenini etkiler

### Dönüşüm Oranı
- **Güven**: Hızlı ve güvenilir kargo = daha fazla satış
- **Rekabet**: Hızlı teslimat rekabet avantajı sağlar
- **Tekrar satış**: İyi deneyim = müşteri geri döner

## Kargo ve İade Maliyetlerinin Kârlılığa Etkisi

### Kargo Maliyetleri
- **Sabit maliyet**: Her sipariş için kargo ücreti
- **Ağırlık bazlı**: Paket ağırlığına göre maliyet artar
- **Mesafe bazlı**: Uzak mesafe = yüksek maliyet
- **Hız bazlı**: Hızlı kargo = daha pahalı

### İade Maliyetleri
- **Kargo ücreti**: İade kargo ücreti
- **Ürün hasarı**: Geri dönen ürün kullanılamaz olabilir
- **Zaman kaybı**: İade süreci zaman alır
- **Müşteri kaybı**: Kötü deneyim = müşteri kaybı

### Kârlılık Hesaplama
**Gerçek Kâr = Satış Fiyatı - (Ürün Maliyeti + Kargo + İade Oranı × İade Maliyeti)**

Örnek:
- Satış fiyatı: $50
- Ürün maliyeti: $20
- Kargo: $5
- İade oranı: %10
- İade maliyeti: $8

Gerçek Kâr = $50 - ($20 + $5 + 0.10 × $8) = $50 - $25.80 = **$24.20**

### İade Oranını Azaltma
- **Doğru ürün açıklaması**: Müşteri beklentisini doğru ayarlayın
- **Kaliteli görseller**: Ürünü doğru gösterin
- **İyi paketleme**: Hasarları önleyin
- **Hızlı teslimat**: Gecikmeleri önleyin

## Sonraki Adım

Lojistiğin önemini öğrendikten sonra fulfillment modellerine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-2",
      type: "lesson",
      title: "Fulfillment Modelleri",
      description:
        "Kendin gönder, 3PL depo ve platform fulfillment modellerinin karşılaştırması.",
      content: `
# Fulfillment Modelleri

E-ticaret satıcıları için farklı fulfillment modelleri vardır. Her modelin kendine özgü avantaj ve dezavantajları vardır.

## Kendin Gönder (Self-Fulfillment)

### Nasıl Çalışır?
- Ürünleri kendiniz depolarsınız
- Sipariş geldiğinde kendiniz paketlersiniz
- Kargo şirketine kendiniz teslim edersiniz

### Avantajlar
- **Tam kontrol**: Tüm süreç sizin kontrolünüzde
- **Düşük başlangıç maliyeti**: Depo ve ekipman maliyeti yok
- **Esneklik**: Paketleme ve özelleştirme imkanı
- **Hızlı başlangıç**: Hemen başlayabilirsiniz

### Dezavantajlar
- **Zaman yoğun**: Paketleme ve kargo süreci zaman alır
- **Ölçeklenme zorluğu**: Yüksek hacimde zorlaşır
- **Fiziksel alan**: Depolama alanı gerekir
- **Operasyonel yük**: Tüm süreç sizin sorumluluğunuzda

## 3PL Depo (Third-Party Logistics)

### Nasıl Çalışır?
- Ürünlerinizi 3PL firmasının deposuna gönderirsiniz
- Sipariş geldiğinde 3PL paketler ve gönderir
- Stok ve kargo yönetimi 3PL tarafından yapılır

### Avantajlar
- **Zaman tasarrufu**: Paketleme ve kargo sizin sorumluluğunuzda değil
- **Ölçeklenebilirlik**: Yüksek hacimde çalışabilir
- **Uzmanlık**: Lojistik uzmanları yönetir
- **Çoklu kanal**: Farklı pazaryerlerinden siparişleri yönetir

### Dezavantajlar
- **Maliyet**: Depolama ve işlem ücretleri
- **Kontrol kaybı**: Paketleme sürecini göremezsiniz
- **Minimum hacim**: Bazı 3PL'ler minimum hacim ister
- **Bağımlılık**: 3PL firmasına bağımlısınız

## Platform Fulfillment (FBA Mantığı)

### Nasıl Çalışır?
- Ürünlerinizi platformun deposuna gönderirsiniz
- Platform siparişleri alır, paketler ve gönderir
- Müşteri hizmetleri platform tarafından yönetilir

### Avantajlar
- **Prime/Öncelikli etiket**: Hızlı teslimat etiketi
- **Müşteri hizmetleri**: Platform müşteri sorunlarını çözer
- **Yüksek görünürlük**: Platform algoritmasında öncelik
- **Operasyonel kolaylık**: Tüm süreç platform tarafından yönetilir

### Dezavantajlar
- **Yüksek maliyet**: Depolama ve fulfillment ücretleri
- **Platform bağımlılığı**: Sadece o platformda çalışır
- **Kontrol kaybı**: Paketleme ve müşteri iletişimi sınırlı
- **Stok yönetimi**: Platform kurallarına bağlısınız

## Model Seçim Kriterleri
- **Satış hacmi**: Düşük hacim → Kendin gönder, Yüksek hacim → 3PL/Platform
- **Bütçe**: Sınırlı bütçe → Kendin gönder, Yeterli bütçe → 3PL/Platform
- **Kontrol ihtiyacı**: Yüksek kontrol → Kendin gönder, Düşük kontrol → 3PL/Platform
- **Zaman**: Zaman yok → 3PL/Platform, Zaman var → Kendin gönder

## Sonraki Adım

Fulfillment modellerini öğrendikten sonra kargo modeli seçimi görevine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-3",
      type: "task",
      title: "Kargo Modeli Seçimi",
      description:
        "Hedef pazarınıza ve ihtiyaçlarınıza uygun kargo modelini belirleyin.",
      tasks: [
        {
          id: "task-1",
          type: "field",
          label: "Hedef pazar: (US/UK/EU)",
          placeholder: "Örn: US, UK, DE (Almanya), FR (Fransa)",
          required: true,
        },
        {
          id: "task-2",
          type: "field",
          label: "Gönderim modeli: (Kendim / 3PL / Platform)",
          placeholder: "Örn: Kendim, 3PL, FBA",
          required: true,
        },
        {
          id: "task-3",
          type: "field",
          label: "Ortalama paket ağırlığı (tahmini)",
          placeholder: "Örn: 0.5 kg, 2 kg, 5 kg",
          required: true,
        },
        {
          id: "task-4",
          type: "checkbox",
          label: "Teslimat süresi hedefi belirledim",
          required: true,
        },
        {
          id: "task-5",
          type: "checkbox",
          label: "Kargo maliyetini fiyatlandırmaya dahil edeceğim",
          required: true,
        },
        {
          id: "task-6",
          type: "checkbox",
          label: "Takip numarası (tracking) standardım olacak",
          required: true,
        },
      ],
      requiredTasksCount: 6,
    },
    {
      id: "step-4",
      type: "lesson",
      title: "Kargo Şirketi ve Paketleme Standartları",
      description:
        "Paketleme checklist mantığı, hasar riskini azaltma ve etiketleme standartları.",
      content: `
# Kargo Şirketi ve Paketleme Standartları

Doğru paketleme, ürünlerinizin güvenli şekilde müşteriye ulaşmasını sağlar ve hasar riskini azaltır.

## Paketleme Checklist Mantığı

### Temel Checklist
- **Ürün kontrolü**: Ürün doğru mu, eksik parça var mı?
- **Paket boyutu**: Ürün için uygun boyut seçildi mi?
- **Paketleme malzemesi**: Yeterli koruma var mı?
- **Etiketleme**: Kargo etiketi doğru mu?
- **Adres kontrolü**: Alıcı adresi doğru mu?

### Paketleme Malzemeleri
- **Kutu**: Ürün boyutuna uygun kutu
- **Ambalaj**: Bubble wrap, köpük, kağıt
- **Bant**: Güçlü bant, yeterli miktarda
- **Etiket**: Kargo etiketi, iade etiketi (opsiyonel)

## Hasar Riskini Azaltma

### Paketleme İpuçları
- **Boşluk doldurma**: Ürün ile kutu arasında boşluk varsa doldurun
- **Kırılgan ürünler**: Ekstra koruma ekleyin
- **Ağır ürünler**: Güçlü kutu ve bant kullanın
- **Sıvı ürünler**: Sızdırmaz paketleme

### Hasar Önleme
- **Doğru boyut**: Çok büyük veya küçük kutu kullanmayın
- **Yeterli koruma**: Hassas ürünler için ekstra koruma
- **Güçlü bant**: Paket açılmasını önlemek için
- **"Kırılgan" etiketi**: Kırılgan ürünler için etiket

## Etiketleme ve Adres Formatı

### Kargo Etiketi
- **Alıcı adı**: Tam ad, doğru yazılmış
- **Adres**: Sokak, mahalle, ilçe, şehir
- **Posta kodu**: Doğru posta kodu
- **Telefon**: Aktif telefon numarası
- **Ülke**: Doğru ülke kodu

### Adres Formatı
- **Uluslararası**: Ülkeye göre format değişir
- **Okunabilirlik**: Net ve okunabilir yazın
- **Dil**: Hedef ülkenin dilinde yazın (gerekirse)

### İade Adresi
- **İade etiketi**: Paket içine iade adresi ekleyin
- **İade politikası**: İade koşullarını belirtin
- **İletişim**: İade için iletişim bilgisi

## Kargo Şirketi Seçimi

### Seçim Kriterleri
- **Kapsam**: Hedef ülkelere hizmet veriyor mu?
- **Hız**: Teslimat süresi ne kadar?
- **Maliyet**: Kargo ücreti ne kadar?
- **Takip**: Tracking numarası var mı?
- **Güvenilirlik**: Hasarlı paket oranı düşük mü?

### Popüler Kargo Şirketleri
- **Uluslararası**: DHL, FedEx, UPS
- **Yerel**: Ülkeye göre yerel kargo şirketleri
- **Ekonomik**: Posta servisleri (daha yavaş ama ucuz)

## Sonraki Adım

Paketleme standartlarını öğrendikten sonra paketleme ve çıkış SOP oluşturma görevine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-5",
      type: "task",
      title: "Paketleme & Çıkış SOP Oluştur",
      description:
        "Standart operasyon prosedürünüzü (SOP) hazırlayın.",
      tasks: [
        {
          id: "task-7",
          type: "checkbox",
          label: "Paket içeriği kontrol adımı ekledim",
          required: true,
        },
        {
          id: "task-8",
          type: "checkbox",
          label: "Paketleme malzemelerini belirledim",
          required: true,
        },
        {
          id: "task-9",
          type: "checkbox",
          label: "Fotoğraf çekme / kanıt alma adımı belirledim (iade/hasar için)",
          required: true,
        },
        {
          id: "task-10",
          type: "checkbox",
          label: "Kargo çıkışı sonrası takip mesajı planladım",
          required: true,
        },
        {
          id: "task-11",
          type: "field",
          label: "Paketleme notum (1–2 cümle)",
          placeholder: "Örn: Ürün kontrol edildi, bubble wrap ile korundu...",
          required: true,
        },
        {
          id: "task-12",
          type: "field",
          label: "Kargo teslimat hedefim (örn 3-7 gün)",
          placeholder: "Örn: 3-5 iş günü, 5-7 iş günü",
          required: true,
        },
      ],
      requiredTasksCount: 6,
    },
    {
      id: "step-6",
      type: "lesson",
      title: "İade Politikası & İade Yönetimi",
      description:
        "İade süresi, koşulları ve iade süreç adımları.",
      content: `
# İade Politikası & İade Yönetimi

İade politikası, müşteri güveni ve satış başarınız için kritiktir. Doğru yönetilen iade süreci, müşteri memnuniyetini artırır.

## İade Süresi

### Standart Süreler
- **14 gün**: Yaygın standart süre
- **30 gün**: Müşteri dostu, yüksek güven
- **60 gün**: Çok esnek, premium ürünler için
- **7 gün**: Kısıtlayıcı, düşük güven

### Süre Belirleme
- **Ürün tipi**: Fiziksel ürünler için daha uzun süre
- **Rekabet**: Rakip politikalarını inceleyin
- **Yasal gereklilikler**: Ülkeye göre yasal süreler olabilir

## İade Koşulları

### Genel Koşullar
- **Kullanılmamış**: Ürün kullanılmamış olmalı
- **Etiketli**: Etiketler çıkarılmamış olmalı
- **Orijinal paket**: Orijinal paketleme korunmuş olmalı
- **Fatura**: Fatura veya sipariş numarası gerekli

### Özel Durumlar
- **Kişisel ürünler**: İç çamaşırı, yüzme kıyafeti gibi ürünler iade edilemez
- **Özel üretim**: Kişiselleştirilmiş ürünler iade edilemez
- **Dijital ürünler**: İndirilen dijital ürünler iade edilemez

## İade = Maliyet Değil, Güven Yatırımı

### Güven Yatırımı Yaklaşımı
- **Müşteri güveni**: Esnek iade politikası güven oluşturur
- **Satış artışı**: Güven = daha fazla satış
- **Müşteri sadakati**: İyi deneyim = tekrar satış
- **Pozitif yorumlar**: İyi iade deneyimi = iyi yorumlar

### İade Maliyetleri
- **Kargo ücreti**: İade kargo ücreti
- **Ürün değerlendirme**: Geri dönen ürünün durumu
- **Zaman**: İade sürecini yönetme zamanı
- **Stok yönetimi**: Geri dönen ürünün stoka eklenmesi

### İade Oranını Azaltma
- **Doğru açıklama**: Ürün açıklaması doğru olmalı
- **Kaliteli görseller**: Ürünü doğru gösterin
- **Boyut tablosu**: Giyim için boyut tablosu ekleyin
- **Müşteri soruları**: Soruları hızlı yanıtlayın

## İade Süreç Adımları

### 1. İade Talebi
- Müşteri iade talebinde bulunur
- İade nedeni belirtilir
- Sipariş numarası verilir

### 2. İade Onayı
- İade talebi değerlendirilir
- Koşullara uygun mu kontrol edilir
- Onay/red kararı verilir

### 3. İade Kargo
- İade adresi verilir
- Kargo etiketi oluşturulur (opsiyonel)
- Müşteri ürünü geri gönderir

### 4. Ürün Kontrolü
- Ürün durumu kontrol edilir
- Koşullara uygun mu değerlendirilir
- Onay/red kararı verilir

### 5. İade İşlemi
- Para iadesi yapılır
- Ürün stoka eklenir (uygunsa)
- Müşteri bilgilendirilir

## Sonraki Adım

İade politikasını öğrendikten sonra müşteri mesaj şablonları görevine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-7",
      type: "task",
      title: "Müşteri Mesaj Şablonları",
      description:
        "Kargo, gecikme ve iade için müşteri mesaj şablonlarınızı hazırlayın.",
      tasks: [
        {
          id: "task-13",
          type: "field",
          label: "Kargo çıktı mesajı taslağı",
          placeholder: "Merhaba, siparişiniz kargoya verilmiştir. Takip numarası: ...",
          required: true,
        },
        {
          id: "task-14",
          type: "field",
          label: "Gecikme durumunda bilgilendirme mesajı",
          placeholder: "Merhaba, siparişinizde gecikme yaşandığı için özür dileriz...",
          required: true,
        },
        {
          id: "task-15",
          type: "field",
          label: "İade onay mesajı",
          placeholder: "Merhaba, iade talebiniz onaylanmıştır. İade adresi: ...",
          required: true,
        },
        {
          id: "task-16",
          type: "checkbox",
          label: "24 saat içinde cevap hedefi koydum",
          required: true,
        },
        {
          id: "task-17",
          type: "checkbox",
          label: "Nazik ve çözüm odaklı dil kullandım",
          required: true,
        },
      ],
      requiredTasksCount: 5,
    },
    {
      id: "step-8",
      type: "checkpoint",
      title: "Operasyon Farkındalık Testi",
      description: "Öğrendiklerinizi kontrol edin.",
      questions: [
        {
          id: "q1",
          question: "Tracking numarası hangi problemi azaltır?",
          options: [
            "Sadece kargo maliyetini",
            "Müşteri endişesi, 'ürün gelmedi' şikayetleri ve iade taleplerini azaltır",
            "Sadece paketleme süresini",
            "Hiçbir problemi azaltmaz",
          ],
          correctIndex: 1,
          explanation:
            "Tracking numarası, müşteri endişesini azaltır, 'ürün gelmedi' şikayetlerini önler ve gereksiz iade taleplerini azaltır. Müşteriler paketlerinin nerede olduğunu görebilir ve teslimat tarihini takip edebilir.",
        },
        {
          id: "q2",
          question: "Paketleme standardı neden önemlidir?",
          options: [
            "Sadece görünüm için",
            "Hasar riskini azaltır, müşteri memnuniyetini artırır ve iade oranını düşürür",
            "Sadece maliyet için",
            "Hiçbir zaman önemli değildir",
          ],
          correctIndex: 1,
          explanation:
            "Paketleme standardı önemlidir çünkü hasar riskini azaltır (doğru paketleme = hasarsız ürün), müşteri memnuniyetini artırır (profesyonel paketleme = iyi izlenim) ve iade oranını düşürür (hasarsız ürün = daha az iade).",
        },
        {
          id: "q3",
          question: "İade politikası satışları nasıl etkiler?",
          options: [
            "Sadece iade oranını etkiler",
            "Müşteri güvenini artırarak satışları artırır, dönüşüm oranını yükseltir ve müşteri sadakatini güçlendirir",
            "Sadece maliyeti etkiler",
            "Hiçbir şekilde etkilemez",
          ],
          correctIndex: 1,
          explanation:
            "İade politikası satışları doğrudan etkiler. Esnek ve müşteri dostu iade politikası, müşteri güvenini artırır (risk algısını azaltır), dönüşüm oranını yükseltir (müşteriler daha rahat satın alır) ve müşteri sadakatini güçlendirir (iyi deneyim = tekrar satış).",
        },
      ],
      requiredCorrectCount: 3,
    },
  ],
};

export const productResearchTrainingContent: TrainingContent = {
  trainingId: "urun-arastirma",
  steps: [
    {
      id: "step-1",
      type: "lesson",
      title: "Ürün Araştırması Neden Kritiktir?",
      description:
        "Ürün fikri ile satılabilir ürün arasındaki fark ve veriye dayalı karar verme.",
      content: `
# Ürün Araştırması Neden Kritiktir?

Ürün araştırması, e-ticaret başarınızın temelidir. Doğru ürün seçimi, satış başarınızı belirler.

## Ürün Fikri ≠ Satılabilir Ürün

### Ürün Fikri
- **Kişisel beğeni**: "Bunu beğeniyorum, satarım"
- **Duygusal karar**: Hissiyatla seçilen ürün
- **Varsayım**: "İnsanlar bunu alır" varsayımı
- **Risk**: Yüksek başarısızlık riski

### Satılabilir Ürün
- **Talep var**: İnsanlar gerçekten arıyor ve satın alıyor
- **Rekabet dengeli**: Çok fazla veya çok az rekabet yok
- **Kârlı**: Maliyetler çıkarıldıktan sonra kâr kalıyor
- **Veriye dayalı**: Araştırma sonuçlarına dayalı karar

## Talep, Rekabet ve Kârlılık Üçgeni

### Talep
- **Yeterli talep**: Yeterli sayıda müşteri var mı?
- **Sürdürülebilir talep**: Geçici trend mi, kalıcı talep mi?
- **Büyüyen talep**: Talep artıyor mu, azalıyor mu?

### Rekabet
- **Rekabet seviyesi**: Çok fazla rakip var mı?
- **Rekabet kalitesi**: Rakip ürünler kaliteli mi?
- **Rekabet fiyatı**: Rekabet fiyatları makul mu?

### Kârlılık
- **Maliyet**: Ürün maliyeti + kargo + komisyon
- **Fiyat**: Rekabetçi fiyatlandırma
- **Kâr marjı**: Yeterli kâr marjı var mı?

### Üçgen Dengesi
- **Yüksek talep + Düşük rekabet = İdeal**: Nadir, zor bulunur
- **Yüksek talep + Yüksek rekabet = Zorlu**: Güçlü farklılaşma gerekir
- **Düşük talep + Düşük rekabet = Riskli**: Talep yeterli mi?
- **Düşük talep + Yüksek rekabet = Kaçınılmalı**: Başarı şansı düşük

## Duygusal Değil, Veriye Dayalı Karar

### Duygusal Karar Sorunları
- **Kişisel beğeni**: Sizin beğendiğiniz herkes beğenmez
- **Varsayım**: "İnsanlar bunu alır" varsayımı yanlış olabilir
- **Zaman kaybı**: Yanlış ürün seçimi zaman ve para kaybı
- **Hayal kırıklığı**: Beklentiler karşılanmayınca hayal kırıklığı

### Veriye Dayalı Karar Avantajları
- **Gerçek talep**: Gerçek arama ve satış verileri
- **Rekabet analizi**: Rakip durumu objektif analiz
- **Kârlılık hesaplama**: Gerçek maliyet ve kâr analizi
- **Başarı şansı**: Daha yüksek başarı şansı

### Veri Kaynakları
- **Pazaryeri verileri**: Amazon, eBay, Etsy satış verileri
- **Arama verileri**: Google Trends, anahtar kelime araçları
- **Rakip analizi**: Rakip ürün incelemeleri
- **Müşteri yorumları**: Müşteri geri bildirimleri

## Sonraki Adım

Ürün araştırmasının önemini öğrendikten sonra talep analizi mantığına geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-2",
      type: "lesson",
      title: "Talep Analizi Mantığı",
      description:
        "Arama hacmi, satış sayısı tahmini ve trend vs sürdürülebilir talep farkı.",
      content: `
# Talep Analizi Mantığı

Talep analizi, ürününüzün gerçekten satılıp satılamayacağını anlamak için kritiktir.

## Arama Hacmi Nedir?

### Arama Hacmi Tanımı
- **Aylık arama sayısı**: Bir anahtar kelimenin ayda kaç kez arandığı
- **Talep göstergesi**: Yüksek arama = yüksek talep potansiyeli
- **Trend göstergesi**: Arama hacmi artıyor mu, azalıyor mu?

### Arama Hacmi Örnekleri
- **Yüksek hacim**: 10,000+ aylık arama (popüler ürünler)
- **Orta hacim**: 1,000-10,000 aylık arama (dengeli)
- **Düşük hacim**: 100-1,000 aylık arama (niş ürünler)
- **Çok düşük**: 100'den az (çok niş, riskli)

### Arama Hacmi Araçları
- **Google Keyword Planner**: Ücretsiz, Google aramaları
- **Ahrefs / SEMrush**: Ücretli, detaylı veri
- **Pazaryeri araçları**: Amazon, eBay, Etsy içi arama verileri

## Satış Sayısı Tahmini Nasıl Yapılır?

### Pazaryeri Verileri
- **Satış sayısı**: Ürün sayfasında görünen satış sayısı
- **Yorum sayısı**: Yorum sayısı satış göstergesi
- **Sıralama**: Arama sonuçlarında sıralama pozisyonu
- **Best Seller rozeti**: Popüler ürün göstergesi

### Tahmin Yöntemleri
- **Yorum/satış oranı**: Yorum sayısı × tahmini oran = satış sayısı
- **Sıralama bazlı**: Sıralama pozisyonuna göre tahmin
- **Rakip analizi**: Benzer ürünlerin satış verileri

### Örnek Hesaplama
- Ürün: 500 yorum
- Tahmini yorum/satış oranı: %5 (100 satıştan 5 yorum)
- Tahmini satış: 500 × 20 = **10,000 satış**

## Trend vs Sürdürülebilir Talep Farkı

### Trend (Geçici Talep)
- **Sezonluk**: Yılın belirli dönemlerinde popüler
- **Viral**: Kısa süreli popülerlik
- **Moda**: Geçici moda akımları
- **Risk**: Trend bittiğinde talep düşer

### Sürdürülebilir Talep (Kalıcı Talep)
- **Temel ihtiyaç**: Sürekli ihtiyaç duyulan ürünler
- **Uzun vadeli**: Yıllarca talep gören ürünler
- **Stabil**: Talep dalgalanması az
- **Güvenli**: Uzun vadeli satış potansiyeli

### Nasıl Ayırt Edilir?
- **Arama trendi**: Google Trends'de uzun vadeli trend
- **Satış geçmişi**: Yıllık satış verileri
- **Mevsimsellik**: Sezonluk dalgalanma var mı?
- **Rakip analizi**: Rakip ürünler ne kadar süredir satılıyor?

## Talep Analizi İpuçları
- **Çoklu kaynak**: Birden fazla veri kaynağı kullanın
- **Zaman serisi**: Uzun vadeli trend analizi yapın
- **Karşılaştırma**: Benzer ürünlerle karşılaştırın
- **Gerçekçi beklenti**: Aşırı iyimser olmayın

## Sonraki Adım

Talep analizi mantığını öğrendikten sonra talep kontrol formu görevine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-3",
      type: "task",
      title: "Talep Kontrol Formu",
      description:
        "Ürün fikrinizin talep potansiyelini değerlendirin.",
      tasks: [
        {
          id: "task-1",
          type: "field",
          label: "Ürün fikri / ürün grubu",
          placeholder: "Örn: El yapımı deri cüzdan, Bluetooth kulaklık",
          required: true,
        },
        {
          id: "task-2",
          type: "field",
          label: "Hedef pazar (Amazon/Etsy/eBay/Web)",
          placeholder: "Örn: Amazon, Etsy, Shopify",
          required: true,
        },
        {
          id: "task-3",
          type: "field",
          label: "Tahmini aylık talep (düşük/orta/yüksek)",
          placeholder: "Örn: orta - 1000-5000 aylık arama",
          required: true,
        },
        {
          id: "task-4",
          type: "checkbox",
          label: "Ürünü birden fazla satıcı satıyor mu?",
          required: true,
        },
        {
          id: "task-5",
          type: "checkbox",
          label: "Son 30–90 gün hareketi var mı?",
          required: true,
        },
        {
          id: "task-6",
          type: "checkbox",
          label: "Mevsimsellik kontrolü yaptım",
          required: true,
        },
      ],
      requiredTasksCount: 6,
    },
    {
      id: "step-4",
      type: "lesson",
      title: "Rakip Analizi & Konumlandırma",
      description:
        "Rakip sayısı, fiyat aralığı, yorum kalitesi ve farklılaşma stratejisi.",
      content: `
# Rakip Analizi & Konumlandırma

Rakip analizi, pazarda nasıl konumlanacağınızı belirlemenize yardımcı olur.

## Rakip Sayısı

### Rakip Yoğunluğu
- **Çok fazla rakip**: Pazar doygun, giriş zor
- **Orta seviye rekabet**: Dengeli, fırsat var
- **Az rakip**: Niş pazar, dikkatli değerlendirme gerekir
- **Rakip yok**: Talep olmayabilir, riskli

### Rakip Analizi
- **Rakip sayısı**: Kaç satıcı aynı ürünü satıyor?
- **Rakip kalitesi**: Rakip ürünler kaliteli mi?
- **Rakip fiyatı**: Rakip fiyatları ne seviyede?
- **Rakip konumlandırması**: Rakip nasıl konumlanmış?

## Fiyat Aralığı

### Fiyat Analizi
- **En düşük fiyat**: Pazarın alt sınırı
- **Ortalama fiyat**: Pazar ortalaması
- **En yüksek fiyat**: Pazarın üst sınırı
- **Fiyat dağılımı**: Fiyatlar nasıl dağılmış?

### Fiyatlandırma Stratejisi
- **Alt segment**: Düşük fiyat, yüksek hacim
- **Orta segment**: Dengeli fiyat, orta hacim
- **Üst segment**: Yüksek fiyat, düşük hacim
- **Premium**: Çok yüksek fiyat, çok düşük hacim

## Yorum Sayısı & Kalite Farkları

### Yorum Analizi
- **Yorum sayısı**: Ne kadar popüler?
- **Yıldız ortalaması**: Müşteri memnuniyeti
- **Yorum içeriği**: Müşteriler ne diyor?
- **Negatif yorumlar**: Hangi sorunlar var?

### Kalite Farkları
- **Ürün kalitesi**: Rakip ürünler kaliteli mi?
- **Görsel kalitesi**: Fotoğraf ve sunum kalitesi
- **Açıklama kalitesi**: Ürün açıklamaları iyi mi?
- **Müşteri hizmeti**: Yanıt süreleri ve çözüm kalitesi

## "Ben Neden Tercih Edileyim?" Sorusu

### Farklılaşma Stratejileri
- **Fiyat**: Daha düşük fiyat (dikkatli, kârlılık önemli)
- **Kalite**: Daha yüksek kalite
- **Hız**: Daha hızlı teslimat
- **Özelleştirme**: Kişiselleştirilmiş ürünler
- **Marka**: Güçlü marka kimliği
- **Müşteri hizmeti**: Üstün müşteri deneyimi

### USP (Unique Selling Proposition)
- **Benzersiz özellik**: Sadece sizde olan özellik
- **Değer önerisi**: Müşteriye sağladığınız değer
- **Fark**: Rakip ürünlerden farkınız
- **Avantaj**: Müşteri neden sizi seçmeli?

### Konumlandırma Örnekleri
- **"En hızlı teslimat"**: Hız odaklı
- **"En kaliteli malzeme"**: Kalite odaklı
- **"En uygun fiyat"**: Fiyat odaklı
- **"Kişiselleştirilmiş"**: Özelleştirme odaklı

## Rakip Analizi Tablosu
- **Rakip adı**: Rakip satıcı/marka
- **Fiyat**: Satış fiyatı
- **Yorum sayısı**: Toplam yorum
- **Yıldız**: Ortalama yıldız
- **Güçlü yönler**: Rakibin güçlü yönleri
- **Zayıf yönler**: Rakibin zayıf yönleri
- **Fırsatlar**: Sizin avantajınız olabilecek alanlar

## Sonraki Adım

Rakip analizini öğrendikten sonra kârlılık ve rekabet değerlendirmesi görevine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-5",
      type: "task",
      title: "Kârlılık & Rekabet Değerlendirmesi",
      description:
        "Ürününüzün kârlılık potansiyelini ve rekabet edebilirliğini değerlendirin.",
      tasks: [
        {
          id: "task-7",
          type: "field",
          label: "Ortalama satış fiyatı",
          placeholder: "Örn: 50",
          required: true,
        },
        {
          id: "task-8",
          type: "field",
          label: "Tahmini ürün maliyeti",
          placeholder: "Örn: 20",
          required: true,
        },
        {
          id: "task-9",
          type: "field",
          label: "Kargo + komisyon tahmini",
          placeholder: "Örn: 10 (kargo 5 + komisyon 5)",
          required: true,
        },
        {
          id: "task-10",
          type: "checkbox",
          label: "Brüt kâr marjı düşündüm",
          required: true,
        },
        {
          id: "task-11",
          type: "checkbox",
          label: "Fiyat kırmadan rekabet edebilir miyim?",
          required: true,
        },
      ],
      requiredTasksCount: 5,
    },
    {
      id: "step-6",
      type: "checkpoint",
      title: "Strateji Farkındalık Testi",
      description: "Öğrendiklerinizi kontrol edin.",
      questions: [
        {
          id: "q1",
          question: "Talep analizi neden ilk adımdır?",
          options: [
            "Sadece ürün fiyatını belirlemek için",
            "Ürünün gerçekten satılıp satılamayacağını anlamak ve zaman/para kaybını önlemek için",
            "Sadece rakip sayısını öğrenmek için",
            "Hiçbir zaman gerekli değildir",
          ],
          correctIndex: 1,
          explanation:
            "Talep analizi ilk adımdır çünkü ürünün gerçekten satılıp satılamayacağını anlamanızı sağlar. Talep yoksa veya yetersizse, ürünü satmaya çalışmak zaman ve para kaybına neden olur. Talep analizi, doğru ürün seçimi için temel oluşturur.",
        },
        {
          id: "q2",
          question: "Rakip varken pazara girilebilir mi?",
          options: [
            "Hiçbir zaman girilemez",
            "Evet, farklılaşma stratejisi ile (fiyat, kalite, hız, özelleştirme) girilebilir",
            "Sadece fiyat kırarak girilebilir",
            "Sadece reklam ile girilebilir",
          ],
          correctIndex: 1,
          explanation:
            "Rakip varken pazara girilebilir, ancak farklılaşma stratejisi gerekir. Fiyat, kalite, hız, özelleştirme veya müşteri hizmeti gibi alanlarda farklılaşarak rekabet edebilirsiniz. Önemli olan, 'Ben neden tercih edileyim?' sorusuna net bir cevap vermektir.",
        },
        {
          id: "q3",
          question: "Kârlılık tahmini neden yaklaşık yapılır?",
          options: [
            "Çünkü kesin hesaplama imkansızdır",
            "Gerçek maliyetler (kargo, komisyon, vergi) değişebilir, pazaryeri fiyatları dalgalanabilir ve operasyonel maliyetler tam bilinmeyebilir",
            "Sadece tahmin yapmak kolaydır",
            "Hiçbir zaman tahmin yapılmamalıdır",
          ],
          correctIndex: 1,
          explanation:
            "Kârlılık tahmini yaklaşık yapılır çünkü gerçek maliyetler (kargo ücretleri, komisyon oranları, vergiler) değişebilir, pazaryeri fiyatları dalgalanabilir ve operasyonel maliyetler (zaman, işçilik) tam olarak bilinmeyebilir. Tahmin, gerçekçi bir aralık içinde yapılmalı ve gerçek satışlarda düzeltilmelidir.",
        },
      ],
      requiredCorrectCount: 3,
    },
  ],
};

export const pricingProfitTrainingContent: TrainingContent = {
  trainingId: "fiyatlandirma",
  steps: [
    {
      id: "step-1",
      type: "lesson",
      title: "Fiyatlandırma Neden 'Sadece Fiyat' Değildir?",
      description:
        "Gerçek maliyetleri anlamak ve kârlılık hesaplamaları için temel kavramlar.",
      content: `
# Fiyatlandırma Neden "Sadece Fiyat" Değildir?

Fiyatlandırma, sadece bir fiyat belirlemek değil, tüm maliyetleri hesaba katarak kârlı bir satış yapabilmektir.

## Gerçek Maliyet = Ürün + Komisyon + Kargo + Vergi + İadeler

### Ürün Maliyeti
- **Üretim/satın alma maliyeti**: Ürünün size maliyeti
- **Paketleme maliyeti**: Kutu, ambalaj, etiket
- **İşçilik maliyeti**: Paketleme ve gönderim için harcanan zaman

### Komisyon ve Kesintiler
- **Pazaryeri komisyonu**: Amazon, eBay, Etsy gibi platformların komisyonu
- **Ödeme sağlayıcı ücreti**: Payoneer, Wise gibi ödeme altyapılarının ücreti
- **Kur farkı**: Döviz dönüşüm maliyetleri

### Kargo Maliyeti
- **Gönderim ücreti**: Kargo şirketine ödenen ücret
- **Paketleme malzemesi**: Kutu, bant, koruyucu malzeme
- **Uluslararası kargo**: Yurt dışı gönderimlerde ek maliyetler

### Vergi ve Yasal Kesintiler
- **KDV/VAT**: Ülkeye göre değişen vergi oranları
- **Gelir vergisi**: Satış gelirinden kesilen vergiler
- **Diğer yasal kesintiler**: Ülkeye özel yasal yükümlülükler

### İade ve Hasar Riski
- **İade maliyeti**: İade edilen ürünlerin maliyeti
- **Hasar riski**: Taşıma sırasında hasar gören ürünler
- **Müşteri şikayetleri**: Çözüm maliyetleri

## "Bütçe Yoksa Reklam da Yok" Farkındalığı

### Reklam Bütçesi
- **Reklam maliyeti**: Pazaryeri reklamları (Amazon Ads, Etsy Ads)
- **Reklam ROI**: Reklam yatırımının geri dönüşü
- **Reklam bütçesi planlaması**: Satış fiyatına reklam maliyetini dahil etmek

### Reklam Olmadan Satış
- **Organik satış**: Reklam olmadan satış yapmak zor olabilir
- **Görünürlük**: Reklam olmadan ürününüz görünmeyebilir
- **Rekabet**: Reklam yapan rakiplerin önüne geçmek zor

### Bütçe Planlaması
- **Reklam bütçesi ayırma**: Satış fiyatına reklam maliyetini dahil etme
- **Minimum kâr marjı**: Reklam sonrası kalan kâr
- **Sürdürülebilirlik**: Uzun vadede reklam yapabilmek için yeterli marj

## Brüt Kâr vs Net Kâr Ayrımı

### Brüt Kâr
- **Tanım**: Satış fiyatı - Doğrudan maliyetler (ürün, kargo, komisyon)
- **Hesaplama**: Brüt kâr = Satış fiyatı - (Ürün maliyeti + Kargo + Komisyon)
- **Kullanım**: Hızlı kârlılık değerlendirmesi için

### Net Kâr
- **Tanım**: Brüt kâr - Dolaylı maliyetler (reklam, işçilik, vergi, iade)
- **Hesaplama**: Net kâr = Brüt kâr - (Reklam + Vergi + İade + Diğer)
- **Kullanım**: Gerçek kârlılık değerlendirmesi için

### Neden Önemli?
- **Brüt kâr yüksek, net kâr düşük olabilir**: Reklam ve diğer maliyetler yüksekse
- **Net kâr gerçek kâr**: Cebinize kalan gerçek para
- **Planlama**: Net kâr üzerinden planlama yapmak daha doğru

## Sonraki Adım

Fiyatlandırmanın karmaşıklığını öğrendikten sonra komisyon ve kesintiler mantığına geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-2",
      type: "lesson",
      title: "Komisyon ve Kesintiler Mantığı",
      description:
        "Pazaryeri komisyonları, ödeme sağlayıcı ücretleri ve kur farkı maliyetleri.",
      content: `
# Komisyon ve Kesintiler Mantığı

Komisyon ve kesintiler, satış fiyatınızdan otomatik olarak kesilen maliyetlerdir.

## Pazaryeri Komisyonu Genel Mantık

### Komisyon Oranları
- **Amazon**: Kategoriye göre %6-45 arası (genellikle %15)
- **eBay**: %10-12.9 (kategoriye göre)
- **Etsy**: %6.5 + işlem ücreti (kategoriye göre değişir)
- **Shopify**: Aylık abonelik + işlem ücreti (kredi kartı %2.9)

### Komisyon Hesaplama
- **Komisyon tutarı**: Satış fiyatı × (Komisyon oranı / 100)
- **Örnek**: 100₺ satış, %15 komisyon = 15₺ komisyon
- **Net gelir**: Satış fiyatı - Komisyon tutarı

### Komisyon Etkisi
- **Yüksek komisyon**: Düşük kâr marjı
- **Düşük komisyon**: Yüksek kâr marjı
- **Planlama**: Komisyonu fiyatlandırmaya dahil etmek gerekir

## Ödeme Sağlayıcı Ücretleri

### Payoneer
- **Aylık ücret**: Hesap açılışı ve bakım ücreti (varsa)
- **Para çekme ücreti**: Banka hesabına transfer ücreti
- **Kur farkı**: Döviz dönüşüm maliyeti

### Wise
- **Transfer ücreti**: Her transfer için sabit + yüzdelik ücret
- **Kur farkı**: Döviz dönüşüm maliyeti
- **Hesap ücreti**: Bazı para birimleri için aylık ücret

### Ödeme Ücreti Hesaplama
- **Toplam ücret**: Transfer ücreti + Kur farkı
- **Yüzdelik etki**: Toplam satış gelirine oranı
- **Planlama**: Ödeme ücretlerini de hesaba katmak gerekir

## Kur Farkı / Dönüşüm Maliyeti

### Kur Farkı Nedir?
- **Döviz dönüşümü**: USD → TRY gibi para birimi dönüşümü
- **Kur farkı**: Dönüşüm sırasında oluşan maliyet
- **Gizli maliyet**: Görünür olmayan maliyet

### Kur Farkı Hesaplama
- **Alış kuru**: Pazaryerinden gelen para birimi
- **Satış kuru**: Türk Lirası'na çevrilirken kullanılan kur
- **Fark**: Alış ve satış kuru arasındaki fark
- **Maliyet**: Bu fark bir maliyettir

### Kur Farkını Azaltma
- **Doğru sağlayıcı**: Düşük kur farkı olan sağlayıcı seçimi
- **Toplu transfer**: Tek seferde büyük transfer yapmak
- **Para birimi seçimi**: Uygun para biriminde tutmak

## Toplam Kesinti Hesaplama

### Kesinti Kalemleri
1. **Pazaryeri komisyonu**: %X
2. **Ödeme sağlayıcı ücreti**: Sabit + yüzdelik
3. **Kur farkı**: Döviz dönüşüm maliyeti
4. **Vergi**: KDV/VAT (ülkeye göre)

### Toplam Kesinti
- **Yüzdelik toplam**: Tüm kesintilerin yüzdelik toplamı
- **Sabit toplam**: Tüm sabit ücretlerin toplamı
- **Gerçek gelir**: Satış fiyatı - Toplam kesinti

## Sonraki Adım

Komisyon ve kesintiler mantığını öğrendikten sonra maliyet kalemlerini çıkarma görevine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-3",
      type: "task",
      title: "Maliyet Kalemlerini Çıkar",
      description:
        "Ürününüzün tüm maliyetlerini hesaplayın ve kârlılık analizi yapın.",
      tasks: [
        {
          id: "field-1",
          type: "field",
          label: "Ürün maliyeti (₺)",
          placeholder: "Örn: 25",
          required: true,
        },
        {
          id: "field-2",
          type: "field",
          label: "Paketleme maliyeti (₺)",
          placeholder: "Örn: 2",
          required: true,
        },
        {
          id: "field-3",
          type: "field",
          label: "Kargo maliyeti (₺)",
          placeholder: "Örn: 15",
          required: true,
        },
        {
          id: "field-4",
          type: "field",
          label: "Komisyon oranı (%)",
          placeholder: "Örn: 15",
          required: true,
        },
        {
          id: "field-5",
          type: "field",
          label: "Hedef satış fiyatı (₺)",
          placeholder: "Örn: 100",
          required: true,
        },
        {
          id: "checkbox-1",
          type: "checkbox",
          label: "İade/hasar için pay ayırmayı düşündüm",
          required: true,
        },
        {
          id: "checkbox-2",
          type: "checkbox",
          label: "Reklam bütçesini ayrı kalem olarak planladım",
          required: true,
        },
      ],
      requiredTasksCount: 7,
    },
    {
      id: "step-4",
      type: "lesson",
      title: "Fiyat Stratejileri",
      description:
        "Pazar giriş fiyatı, sürdürülebilir fiyat ve değer artırma stratejileri.",
      content: `
# Fiyat Stratejileri

Doğru fiyat stratejisi, uzun vadeli başarınızı belirler.

## Pazar Giriş Fiyatı vs Sürdürülebilir Fiyat

### Pazar Giriş Fiyatı
- **Düşük fiyat**: İlk satışları artırmak için düşük fiyat
- **Görünürlük**: Düşük fiyat ile daha fazla görünürlük
- **Yorum biriktirme**: İlk yorumları toplamak için
- **Risk**: Düşük kâr marjı, uzun vadede sürdürülemez

### Sürdürülebilir Fiyat
- **Gerçekçi fiyat**: Tüm maliyetleri kapsayan fiyat
- **Kârlı fiyat**: Yeterli kâr marjı olan fiyat
- **Uzun vadeli**: Uzun vadede sürdürülebilir fiyat
- **Güvenli**: Reklam ve diğer maliyetleri karşılayabilen fiyat

### Geçiş Stratejisi
- **İlk aşama**: Pazar giriş fiyatı ile başla
- **İkinci aşama**: Yorumlar ve satışlar artınca fiyatı yükselt
- **Üçüncü aşama**: Sürdürülebilir fiyata geç

## "Fiyat Kırmak Yerine Değer Artır"

### Fiyat Kırma Sorunları
- **Düşük kâr marjı**: Yetersiz kâr
- **Rekabet**: Sürekli fiyat kırma yarışı
- **Sürdürülemezlik**: Uzun vadede sürdürülemez
- **Marka değeri**: Düşük fiyat = düşük kalite algısı

### Değer Artırma Stratejileri

#### Paket Değeri
- **Ürün paketi**: Birden fazla ürünü birlikte satmak
- **Bonus ürün**: Ana ürünle birlikte ekstra ürün
- **Özel paket**: Özel tasarım veya özelleştirme

#### Görsel Değer
- **Profesyonel fotoğraflar**: Yüksek kaliteli ürün fotoğrafları
- **Video**: Ürün kullanım videoları
- **Lifestyle görseller**: Ürünün kullanım senaryoları

#### Hizmet Değeri
- **Hızlı teslimat**: Daha hızlı kargo seçeneği
- **Özel paketleme**: Özel tasarım paketleme
- **Müşteri hizmeti**: Üstün müşteri deneyimi
- **Garanti**: Uzun garanti süresi

#### Marka Değeri
- **Marka hikayesi**: Ürünün arkasındaki hikaye
- **Kalite vurgusu**: Yüksek kalite vurgusu
- **Sürdürülebilirlik**: Çevre dostu üretim

### Değer Artırma Örnekleri
- **Fiyat kırma**: 50₺ → 40₺ (düşük kâr)
- **Değer artırma**: 50₺ → 60₺ (paket + hızlı teslimat + özel paketleme)

## Minimum Kabul Edilebilir Marj Yaklaşımı

### Minimum Marj Nedir?
- **Tanım**: İşletmenin sürdürülebilirliği için gerekli minimum kâr marjı
- **Hesaplama**: Tüm maliyetler + minimum kâr
- **Kullanım**: Fiyatlandırma için alt sınır

### Minimum Marj Belirleme
- **Sabit maliyetler**: Ofis, personel, genel giderler
- **Değişken maliyetler**: Ürün, kargo, komisyon
- **Kâr hedefi**: İstediğiniz minimum kâr
- **Toplam**: Minimum satış fiyatı

### Marj Kontrolü
- **%20-30**: Minimum kabul edilebilir marj (genel)
- **%30-50**: İdeal marj (reklam ve büyüme için)
- **%50+**: Yüksek marj (premium ürünler)

### Marj Düşükse Ne Yapmalı?
- **Maliyet azaltma**: Ürün veya kargo maliyetini azalt
- **Fiyat artırma**: Satış fiyatını artır (değer artırarak)
- **Ürün değiştirme**: Daha kârlı ürün seç

## Sonraki Adım

Fiyat stratejilerini öğrendikten sonra kârlılık kontrol testine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-5",
      type: "checkpoint",
      title: "Karlılık Kontrol Testi",
      description: "Öğrendiklerinizi kontrol edin.",
      questions: [
        {
          id: "q1",
          question: "Brüt kâr neden tek başına yeterli değildir?",
          options: [
            "Çünkü hiçbir zaman doğru değildir",
            "Çünkü reklam, vergi, iade gibi dolaylı maliyetleri içermez; net kâr gerçek kârlılığı gösterir",
            "Çünkü sadece ürün maliyetini gösterir",
            "Çünkü hiçbir zaman hesaplanamaz",
          ],
          correctIndex: 1,
          explanation:
            "Brüt kâr, sadece doğrudan maliyetleri (ürün, kargo, komisyon) içerir. Reklam, vergi, iade, işçilik gibi dolaylı maliyetleri içermez. Bu yüzden brüt kâr yüksek olsa bile, net kâr düşük olabilir. Gerçek kârlılığı anlamak için net kârı hesaplamak gerekir.",
        },
        {
          id: "q2",
          question: "Komisyon oranı hangi kalemi etkiler?",
          options: [
            "Sadece ürün maliyetini",
            "Sadece kargo maliyetini",
            "Satış fiyatından kesilen tutarı; yüksek komisyon = düşük net gelir = düşük kâr marjı",
            "Hiçbir kalemi etkilemez",
          ],
          correctIndex: 2,
          explanation:
            "Komisyon oranı, satış fiyatından kesilen tutarı belirler. Yüksek komisyon oranı, daha fazla kesinti demektir. Bu da net geliri azaltır ve kâr marjını düşürür. Komisyon oranını fiyatlandırmaya dahil etmek gerekir.",
        },
        {
          id: "q3",
          question: "Fiyat kırmadan rekabet etmek için hangi yöntemler vardır?",
          options: [
            "Sadece daha fazla reklam yapmak",
            "Değer artırma: paket değeri, görsel kalite, hızlı teslimat, özel paketleme, üstün müşteri hizmeti gibi farklılaşma stratejileri",
            "Sadece daha fazla ürün satmak",
            "Hiçbir yöntem yoktur",
          ],
          correctIndex: 1,
          explanation:
            "Fiyat kırmak yerine değer artırarak rekabet edebilirsiniz. Paket değeri (ürün paketi, bonus ürün), görsel değer (profesyonel fotoğraflar, video), hizmet değeri (hızlı teslimat, özel paketleme, üstün müşteri hizmeti) ve marka değeri (marka hikayesi, kalite vurgusu) gibi stratejilerle farklılaşabilirsiniz.",
        },
      ],
      requiredCorrectCount: 3,
    },
  ],
};

export const brandListingTrainingContent: TrainingContent = {
  trainingId: "marka-listeleme",
  steps: [
    {
      id: "step-1",
      type: "lesson",
      title: "Marka Konumlandırma Temelleri",
      description:
        "Hedef müşteri profili, marka tonu ve konumlandırma stratejisi.",
      content: `
# Marka Konumlandırma Temelleri

Marka konumlandırma, ürününüzün müşteri zihninde nasıl algılanacağını belirler.

## "Herkese Hitap Eden Marka = Kimseye Hitap Etmeyen Marka"

### Genel Marka Sorunu
- **Herkesi hedeflemek**: "Herkes için ürün" yaklaşımı
- **Belirsiz mesaj**: Net bir mesaj yok
- **Zayıf bağlantı**: Müşteri ile güçlü bağlantı kuramaz
- **Sonuç**: Kimse markayı hatırlamaz, tercih etmez

### Odaklanmış Marka Avantajı
- **Net hedef kitle**: Belirli bir müşteri grubuna hitap eder
- **Güçlü mesaj**: Net ve anlaşılır mesaj
- **Güçlü bağlantı**: Müşteri ile duygusal bağlantı
- **Sonuç**: Müşteriler markayı hatırlar, tercih eder

### Örnekler
- **Genel**: "Herkes için kaliteli ürünler"
- **Odaklanmış**: "Aktif yaşam tarzına sahip kadınlar için dayanıklı spor çantalar"

## Hedef Müşteri Profili (Persona) Mantığı

### Persona Nedir?
- **Tanım**: İdeal müşterinizin detaylı profili
- **Amaç**: Ürün ve mesajı bu profile göre şekillendirmek
- **Fayda**: Daha etkili pazarlama ve satış

### Persona Öğeleri
- **Demografik**: Yaş, cinsiyet, konum, gelir
- **Psikografik**: İlgi alanları, değerler, yaşam tarzı
- **Davranışsal**: Satın alma alışkanlıkları, tercihler
- **İhtiyaçlar**: Ne istiyor, ne sorun yaşıyor?
- **Hedefler**: Ne başarmak istiyor?

### Persona Örneği
**Adı**: Ayşe, 32 yaşında
**Meslek**: Grafik tasarımcı
**İlgi alanları**: Minimalist yaşam, sürdürülebilirlik
**Sorun**: Çevre dostu, şık ve fonksiyonel çalışma ekipmanları bulamıyor
**Hedef**: Sürdürülebilir ve estetik bir çalışma alanı oluşturmak

### Persona Kullanımı
- **Ürün geliştirme**: Persona'nın ihtiyaçlarına göre ürün özellikleri
- **Mesajlaşma**: Persona'nın dilini ve değerlerini kullanma
- **Görsel seçimi**: Persona'nın estetik tercihlerine uygun görseller
- **Kanal seçimi**: Persona'nın aktif olduğu platformlar

## Marka Tonu (Samimi, Premium, Teknik vs.)

### Marka Tonu Nedir?
- **Tanım**: Markanızın iletişim kurma şekli
- **Amaç**: Tutarlı ve tanınabilir bir ses oluşturmak
- **Etki**: Müşteri ile duygusal bağlantı

### Marka Tonu Türleri

#### Samimi & Dostça
- **Özellikler**: Sıcak, yakın, günlük dil
- **Kullanım**: Bireysel müşteriler, küçük işletmeler
- **Örnek**: "Merhaba! Size nasıl yardımcı olabiliriz?"

#### Premium & Lüks
- **Özellikler**: Zarif, sofistike, özel
- **Kullanım**: Yüksek fiyatlı ürünler, lüks markalar
- **Örnek**: "Seçkin müşterilerimiz için özel olarak tasarlandı"

#### Teknik & Profesyonel
- **Özellikler**: Net, detaylı, uzman
- **Kullanım**: B2B, teknik ürünler, profesyonel hizmetler
- **Örnek**: "Gelişmiş özellikler ve teknik spesifikasyonlar"

#### Eğlenceli & Genç
- **Özellikler**: Enerjik, renkli, eğlenceli
- **Kullanım**: Genç hedef kitle, yaratıcı ürünler
- **Örnek**: "Harika bir gün geçirmenizi sağlayacak!"

### Marka Tonu Seçimi
- **Hedef kitle**: Persona'nın tercihlerine uygun
- **Ürün türü**: Ürünün doğasına uygun
- **Rekabet**: Rakip markalardan farklılaşma
- **Tutarlılık**: Tüm iletişimde aynı ton

### Marka Tonu Kontrol Listesi
- **Tutarlı mı?**: Tüm mesajlarda aynı ton
- **Hedef kitleye uygun mu?**: Persona ile uyumlu
- **Farklılaştırıcı mı?**: Rakip markalardan farklı
- **Ölçülebilir mi?**: Marka değerlerine uygun

## Sonraki Adım

Marka konumlandırma temellerini öğrendikten sonra SEO odaklı ürün başlığına geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-2",
      type: "lesson",
      title: "SEO Odaklı Ürün Başlığı",
      description:
        "Ana anahtar kelime, yardımcı kelimeler, başlık uzunluğu ve ana kelime yerleşimi.",
      content: `
# SEO Odaklı Ürün Başlığı

Ürün başlığı, hem SEO hem de müşteri dönüşümü için kritiktir.

## Ana Anahtar Kelime

### Ana Anahtar Kelime Nedir?
- **Tanım**: Ürününüzü en iyi tanımlayan, en çok aranan kelime veya kelime grubu
- **Amaç**: Arama motorlarında ve pazaryerlerinde bulunabilirlik
- **Örnek**: "deri cüzdan", "bluetooth kulaklık", "yoga matı"

### Ana Anahtar Kelime Seçimi
- **Talep analizi**: Hangi kelimeler çok aranıyor?
- **Rekabet analizi**: Hangi kelimeler rekabetçi?
- **Ürün uyumu**: Ürününüzü doğru tanımlıyor mu?
- **Uzun kuyruk**: Daha spesifik kelime grupları (örn: "kadın deri cüzdan")

### Ana Kelime Kullanımı
- **Başlıkta ilk sırada**: En önemli konum
- **Doğal geçiş**: Zorlama olmadan, akıcı
- **Tekrar**: Başlıkta 1-2 kez geçebilir (spam değil)

## Yardımcı Anahtar Kelimeler

### Yardımcı Kelimeler Nedir?
- **Tanım**: Ana kelimeyi destekleyen, ilgili kelimeler
- **Amaç**: Daha geniş arama kapsamı ve bağlam
- **Örnek**: Ana kelime "deri cüzdan" → Yardımcı: "kadın", "organize", "kredi kartı"

### Yardımcı Kelime Türleri
- **Özellik kelimeleri**: Renk, malzeme, boyut
- **Kullanım kelimeleri**: "günlük", "seyahat", "iş"
- **Hedef kitle**: "kadın", "erkek", "çocuk"
- **Marka/Stil**: "minimalist", "vintage", "modern"

### Yardımcı Kelime Kullanımı
- **Başlıkta**: Ana kelime ile birlikte
- **Açıklamada**: Doğal şekilde geçmeli
- **Etiketlerde**: Pazaryeri etiketlerinde kullanılabilir

## Başlık Uzunluğu & Okunabilirlik

### Başlık Uzunluğu Limitleri
- **Amazon**: 200 karakter (yaklaşık 30-40 kelime)
- **eBay**: 80 karakter (yaklaşık 12-15 kelime)
- **Etsy**: 140 karakter (yaklaşık 20-25 kelime)
- **Genel kural**: Mümkün olduğunca uzun ama okunabilir

### Okunabilirlik İlkeleri
- **Net ve anlaşılır**: Karmaşık kelimelerden kaçının
- **Akıcı**: Doğal cümle yapısı
- **Fayda odaklı**: Müşteriye ne sağladığını belirtin
- **Özellik vurgusu**: Önemli özellikleri öne çıkarın

### Başlık Yapısı Örnekleri

#### İyi Örnek
"Kadın Deri Cüzdan - Organize Kredi Kartı Bölmeli, RFID Korumalı, Minimalist Tasarım - Siyah"

**Neden iyi?**
- Ana kelime başta: "Kadın Deri Cüzdan"
- Yardımcı kelimeler: "Organize", "RFID", "Minimalist"
- Özellik vurgusu: Kredi kartı bölmesi, RFID koruma
- Okunabilir: Akıcı ve anlaşılır

#### Kötü Örnek
"Deri Cüzdan Kadın Siyah Organize RFID Kredi Kartı Minimalist Tasarım Bölme"

**Neden kötü?**
- Kelime yığını: Doğal değil
- Okunması zor: Akıcı değil
- Spam görünümü: Arama motoru optimizasyonu aşırı

## Ana Kelimenin Yeri Neden Önemli?

### Öncelik Sırası
- **İlk 3 kelime**: En yüksek öncelik
- **İlk 10 kelime**: Yüksek öncelik
- **Sonraki kelimeler**: Düşük öncelik

### Arama Motoru Mantığı
- **Öncelik**: Başlığın başındaki kelimeler daha önemli
- **İndeksleme**: İlk kelimeler daha iyi indekslenir
- **Eşleşme**: Arama sorgusu ile eşleşme şansı artar

### Müşteri Davranışı
- **İlk bakış**: Müşteri başlığın ilk kelimelerini okur
- **Karar verme**: İlk kelimeler satın alma kararını etkiler
- **Güven**: Net ve anlaşılır başlık güven verir

### Ana Kelime Yerleşimi Stratejileri

#### Strateji 1: Doğrudan Başlangıç
"Deri Cüzdan - Kadın, Organize, RFID Korumalı"

**Avantaj**: En yüksek SEO değeri
**Dezavantaj**: Bazen doğal görünmeyebilir

#### Strateji 2: Özellik + Ana Kelime
"Organize Deri Cüzdan - Kadın, RFID Korumalı"

**Avantaj**: Özellik vurgusu + SEO
**Dezavantaj**: Ana kelime biraz geride

#### Strateji 3: Marka + Ana Kelime
"[Marka Adı] Deri Cüzdan - Kadın, Organize"

**Avantaj**: Marka vurgusu + SEO
**Dezavantaj**: Marka bilinmiyorsa etkisiz

## Başlık Yazım İpuçları
- **Ana kelimeyi başa koy**: İlk 3 kelimede
- **Yardımcı kelimeleri ekle**: Doğal şekilde
- **Özellik vurgusu**: Önemli özellikleri belirtin
- **Okunabilirlik**: Akıcı ve anlaşılır olmalı
- **Uzunluk**: Platform limitlerini kullanın ama aşmayın

## Sonraki Adım

SEO odaklı başlık mantığını öğrendikten sonra ürün başlığı ve anahtar kelime taslağı görevine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-3",
      type: "task",
      title: "Ürün Başlığı & Anahtar Kelime Taslağı",
      description:
        "SEO odaklı ürün başlığınızı ve anahtar kelimelerinizi oluşturun.",
      tasks: [
        {
          id: "field-1",
          type: "field",
          label: "Ana anahtar kelime",
          placeholder: "Örn: deri cüzdan, bluetooth kulaklık",
          required: true,
        },
        {
          id: "field-2",
          type: "field",
          label: "Yardımcı anahtar kelimeler (3 adet)",
          placeholder: "Örn: kadın, organize, RFID korumalı",
          required: true,
        },
        {
          id: "field-3",
          type: "field",
          label: "Ürün başlık taslağı",
          placeholder: "Örn: Kadın Deri Cüzdan - Organize Kredi Kartı Bölmeli, RFID Korumalı",
          required: true,
        },
        {
          id: "checkbox-1",
          type: "checkbox",
          label: "Başlık okunabilir",
          required: true,
        },
        {
          id: "checkbox-2",
          type: "checkbox",
          label: "Ana kelime başlıkta doğal geçiyor",
          required: true,
        },
      ],
      requiredTasksCount: 5,
    },
    {
      id: "step-4",
      type: "lesson",
      title: "Açıklama Metni & Bullet Point Yapısı",
      description:
        "İlk 2 satırın önemi, bullet point'lerle fayda anlatımı ve teknik özellik vs fayda farkı.",
      content: `
# Açıklama Metni & Bullet Point Yapısı

Ürün açıklaması, müşterinin satın alma kararını etkileyen en önemli faktörlerden biridir.

## İlk 2 Satırın Önemi

### İlk İzlenim
- **Görünürlük**: İlk 2 satır genellikle önizlemede görünür
- **Dikkat çekme**: Müşterinin dikkatini çekmek için kritik
- **Karar verme**: Hızlı karar verme aşamasında etkili
- **Tıklama**: Daha fazla okumak için tıklama oranını artırır

### İlk 2 Satır Stratejisi
- **Fayda vurgusu**: Müşteriye ne sağladığını belirtin
- **Sorun çözme**: Müşterinin sorununu çözüyor mu?
- **Farklılaşma**: Rakip ürünlerden farkınız nedir?
- **Duygusal bağlantı**: Müşteri ile duygusal bağlantı kurun

### İyi İlk 2 Satır Örnekleri

#### Örnek 1: Fayda Odaklı
"Bu deri cüzdan, günlük hayatınızı organize ederken şıklığınızdan ödün vermemenizi sağlar. RFID koruma teknolojisi ile kartlarınızı güvende tutar."

**Neden iyi?**
- İlk cümle: Fayda vurgusu (organize + şıklık)
- İkinci cümle: Güvenlik özelliği (RFID)
- Müşteri odaklı: "Sizin" dilini kullanıyor

#### Örnek 2: Sorun Çözme
"Kredi kartlarınızı ve nakit paranızı düzenli tutmakta zorlanıyor musunuz? Bu organize cüzdan, her şeyi yerli yerinde tutmanızı sağlar."

**Neden iyi?**
- Sorun tanımlama: Müşterinin sorununu anlıyor
- Çözüm sunma: Ürün sorunu çözüyor
- Empati: Müşteri ile bağlantı kuruyor

## Bullet Point'lerle Fayda Anlatımı

### Bullet Point Nedir?
- **Tanım**: Madde işaretli liste formatı
- **Amaç**: Bilgiyi kolay okunabilir şekilde sunmak
- **Etki**: Hızlı tarama ve anlama

### Bullet Point Avantajları
- **Okunabilirlik**: Uzun paragraflardan daha kolay okunur
- **Tarama**: Müşteri hızlıca tarayabilir
- **Odaklanma**: Her madde bir fayda vurgular
- **Karşılaştırma**: Rakip ürünlerle kolay karşılaştırma

### Bullet Point Yapısı
- **Fayda odaklı**: Özellik değil, fayda anlatın
- **Kısa ve net**: Her madde 1-2 cümle
- **Öncelik sırası**: En önemli faydalar üstte
- **Görsel destek**: Gerekirse görsel ekleyin

### İyi Bullet Point Örnekleri

#### Örnek 1: Fayda Odaklı
✓ **Organize Yaşam**: 12 kredi kartı bölmesi ile tüm kartlarınızı düzenli tutun
✓ **Güvenlik**: RFID koruma teknolojisi ile kartlarınızı yetkisiz erişimden koruyun
✓ **Şık Tasarım**: Minimalist ve modern tasarım ile her kıyafetinize uyum sağlar
✓ **Dayanıklılık**: Premium deri malzeme ile yıllarca kullanım garantisi

**Neden iyi?**
- Her madde bir fayda vurgular
- Müşteri dilini kullanır ("sizin", "tutun", "koruyun")
- Özellik + fayda kombinasyonu

#### Örnek 2: Kötü (Teknik Özellik Odaklı)
✗ 12 bölme
✗ RFID koruma
✗ Deri malzeme
✗ 15x10 cm boyut

**Neden kötü?**
- Sadece teknik özellikler
- Müşteriye ne sağladığı belirtilmemiş
- Duygusal bağlantı yok

## Teknik Özellik ≠ Fayda Farkı

### Teknik Özellik Nedir?
- **Tanım**: Ürünün fiziksel veya teknik özellikleri
- **Örnekler**: Boyut, ağırlık, malzeme, renk
- **Kullanım**: Ürün spesifikasyonları için

### Fayda Nedir?
- **Tanım**: Ürünün müşteriye sağladığı değer
- **Örnekler**: Zaman tasarrufu, güvenlik, rahatlık
- **Kullanım**: Satın alma kararını etkilemek için

### Fark Örnekleri

#### Teknik Özellik → Fayda Dönüşümü

**Teknik**: "12 kredi kartı bölmesi"
**Fayda**: "Tüm kartlarınızı düzenli tutun, arama derdinden kurtulun"

**Teknik**: "RFID koruma teknolojisi"
**Fayda**: "Kartlarınızı yetkisiz erişimden koruyun, güvenle taşıyın"

**Teknik**: "Premium deri malzeme"
**Fayda**: "Yıllarca kullanım garantisi, dayanıklı ve şık görünüm"

### Fayda Yazım İpuçları
- **Müşteri odaklı**: "Sizin" dilini kullanın
- **Duygusal bağlantı**: Müşterinin hislerine hitap edin
- **Somut fayda**: Belirsiz değil, somut faydalar
- **Sorun çözme**: Müşterinin sorununu çözüyor mu?

## Açıklama Metni Yapısı

### Önerilen Yapı
1. **İlk 2 satır**: Güçlü fayda vurgusu
2. **Kısa paragraf**: Ürün hikayesi veya marka değeri
3. **Bullet point'ler**: Ana faydalar (5-8 madde)
4. **Teknik özellikler**: Detaylı spesifikasyonlar (tablo veya liste)
5. **Kullanım önerileri**: Nasıl kullanılır?
6. **Garanti/Bakım**: Garanti ve bakım bilgileri

## Sonraki Adım

Açıklama metni yapısını öğrendikten sonra açıklama ve bullet taslağı görevine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-5",
      type: "task",
      title: "Açıklama & Bullet Taslağı",
      description:
        "Müşteri odaklı açıklama metni ve bullet point'lerinizi oluşturun.",
      tasks: [
        {
          id: "field-1",
          type: "field",
          label: "Kısa açıklama (ilk 2 satır)",
          placeholder: "Örn: Bu deri cüzdan, günlük hayatınızı organize ederken şıklığınızdan ödün vermemenizi sağlar.",
          required: true,
        },
        {
          id: "field-2",
          type: "field",
          label: "Bullet point 1 (fayda)",
          placeholder: "Örn: Organize Yaşam: 12 kredi kartı bölmesi ile tüm kartlarınızı düzenli tutun",
          required: true,
        },
        {
          id: "field-3",
          type: "field",
          label: "Bullet point 2 (fayda)",
          placeholder: "Örn: Güvenlik: RFID koruma teknolojisi ile kartlarınızı yetkisiz erişimden koruyun",
          required: true,
        },
        {
          id: "checkbox-1",
          type: "checkbox",
          label: "Müşteri dili kullandım",
          required: true,
        },
        {
          id: "checkbox-2",
          type: "checkbox",
          label: "Satın alma itirazlarına cevap verdim",
          required: true,
        },
      ],
      requiredTasksCount: 5,
    },
    {
      id: "step-6",
      type: "task",
      title: "Görsel Standartlar & Checklist",
      description:
        "İlk görsel etkisi, görsel standartları ve görsel checklist'inizi oluşturun.",
      lessonContent: `
# Görsel Standartlar & Checklist

Ürün görselleri, satın alma kararını etkileyen en önemli faktörlerden biridir.

## İlk Görsel (Thumbnail) Etkisi

### İlk Görselin Önemi
- **İlk izlenim**: Müşteri ilk önce görseli görür
- **Tıklama oranı**: İyi görsel = daha fazla tıklama
- **Karar verme**: Hızlı karar verme aşamasında kritik
- **Güven**: Profesyonel görsel = güven

### İlk Görsel Özellikleri
- **Beyaz arka plan**: Temiz ve profesyonel görünüm
- **Ürün odaklı**: Ürün net ve merkezi
- **Yüksek kalite**: Yüksek çözünürlük, net görüntü
- **Doğru açı**: Ürünün en iyi göründüğü açı

## Arka Plan, Çözünürlük, Açı Farkındalığı

### Arka Plan Standartları
- **Beyaz arka plan**: En yaygın ve profesyonel
- **Tutarlılık**: Tüm görsellerde aynı arka plan
- **Temizlik**: Lekesiz, düzgün arka plan
- **Kontrast**: Ürün arka plandan net ayrılmalı

### Çözünürlük Standartları
- **Minimum**: 1000x1000 piksel
- **İdeal**: 2000x2000 piksel veya daha yüksek
- **Format**: JPEG veya PNG
- **Kalite**: Yüksek kalite, sıkıştırma yok

### Açı Standartları
- **Ana görsel**: Ön görünüm, ürün tam görünür
- **Yan görünüm**: Ürünün yan profili
- **Detay görseli**: Close-up, önemli detaylar
- **Kullanım görseli**: Ürünün kullanım senaryosu

## Infografik ve Kullanım Görseli Mantığı

### Infografik Görseller
- **Amaç**: Bilgiyi görsel olarak sunmak
- **Kullanım**: Özellikler, boyutlar, kullanım talimatları
- **Avantaj**: Hızlı anlama, paylaşılabilirlik
- **Örnekler**: Boyut karşılaştırması, özellik tablosu

### Kullanım Görseli Mantığı
- **Amaç**: Ürünün gerçek kullanımını göstermek
- **Kullanım**: Lifestyle görseller, kullanım senaryoları
- **Avantaj**: Müşteri ile bağlantı, satın alma motivasyonu
- **Örnekler**: Ürün kullanımı, yaşam tarzı görselleri

### Görsel Türleri ve Sıralama
1. **Ana görsel**: Beyaz arka plan, ön görünüm
2. **Yan görünüm**: Ürünün farklı açıları
3. **Detay görseli**: Close-up, önemli detaylar
4. **Kullanım görseli**: Lifestyle, kullanım senaryosu
5. **Karşılaştırma**: Boyut, özellik karşılaştırması
6. **Infografik**: Bilgilendirici görseller
      `.trim(),
      tasks: [
        {
          id: "checkbox-1",
          type: "checkbox",
          label: "Beyaz arka plan ana görsel",
          required: true,
        },
        {
          id: "checkbox-2",
          type: "checkbox",
          label: "Ürün detay close-up",
          required: true,
        },
        {
          id: "checkbox-3",
          type: "checkbox",
          label: "Kullanım senaryosu görseli",
          required: true,
        },
        {
          id: "checkbox-4",
          type: "checkbox",
          label: "Ölçü/karşılaştırma görseli",
          required: true,
        },
        {
          id: "field-1",
          type: "field",
          label: "Eksik gördüğüm görsel türü",
          placeholder: "Örn: Infografik, yan görünüm, paket görseli",
          required: true,
        },
      ],
      requiredTasksCount: 5,
    },
    {
      id: "step-7",
      type: "checkpoint",
      title: "SEO & Görsel Farkındalık Testi",
      description: "Öğrendiklerinizi kontrol edin.",
      questions: [
        {
          id: "q1",
          question: "Ana anahtar kelime başlıkta neden önemlidir?",
          options: [
            "Sadece estetik için",
            "Arama motorları ve pazaryerleri başlığın başındaki kelimelere daha fazla öncelik verir; müşteri ilk kelimeleri okur ve karar verir",
            "Sadece müşteri için",
            "Hiçbir önemi yoktur",
          ],
          correctIndex: 1,
          explanation:
            "Ana anahtar kelime başlıkta önemlidir çünkü arama motorları ve pazaryerleri başlığın başındaki kelimelere daha fazla öncelik verir. Ayrıca müşteriler başlığın ilk kelimelerini okur ve satın alma kararını bu kelimelere göre verir. Bu yüzden ana kelimeyi başlığın başına koymak hem SEO hem de dönüşüm için kritiktir.",
        },
        {
          id: "q2",
          question: "Bullet point'ler neyi anlatmalıdır?",
          options: [
            "Sadece teknik özellikleri",
            "Müşteriye sağladığı faydaları; teknik özellik değil, fayda odaklı olmalı",
            "Sadece ürün boyutunu",
            "Sadece fiyatı",
          ],
          correctIndex: 1,
          explanation:
            "Bullet point'ler müşteriye sağladığı faydaları anlatmalıdır. Teknik özellikler (boyut, ağırlık, malzeme) yerine, bu özelliklerin müşteriye ne sağladığını (zaman tasarrufu, güvenlik, rahatlık) vurgulamalıdır. Fayda odaklı bullet point'ler, müşterinin satın alma kararını olumlu yönde etkiler.",
        },
        {
          id: "q3",
          question: "İlk görsel satışları nasıl etkiler?",
          options: [
            "Hiçbir etkisi yoktur",
            "İlk izlenim oluşturur, tıklama oranını artırır, hızlı karar verme aşamasında kritiktir ve profesyonel görsel güven verir",
            "Sadece estetik için önemlidir",
            "Sadece SEO için önemlidir",
          ],
          correctIndex: 1,
          explanation:
            "İlk görsel satışları doğrudan etkiler çünkü müşteri ilk önce görseli görür ve ilk izlenim oluşturur. İyi bir görsel, tıklama oranını artırır, hızlı karar verme aşamasında kritiktir ve profesyonel bir görsel müşteriye güven verir. Bu yüzden ilk görselin yüksek kaliteli, temiz ve ürün odaklı olması gerekir.",
        },
      ],
      requiredCorrectCount: 3,
    },
  ],
};

export const adsBasicsTrainingContent: TrainingContent = {
  trainingId: "reklam-temelleri",
  steps: [
    {
      id: "step-1",
      type: "lesson",
      title: "Reklam Ne Zaman Gereklidir?",
      description:
        "Reklamın rolü, organik satış dengesi ve reklama hazır olma kriterleri.",
      content: `
# Reklam Ne Zaman Gereklidir?

Reklam, satışları hızlandıran bir araçtır, ancak her zaman gerekli değildir.

## "Reklam = Hızlandırıcı"

### Reklamın Rolü
- **Hızlandırıcı**: Satışları hızlandırır, organik süreci destekler
- **Görünürlük**: Ürününüzü daha fazla müşteriye gösterir
- **Test aracı**: Ürün ve fiyatlandırmanın test edilmesi için
- **Büyüme**: Hızlı büyüme hedeflerinde kritik

### Reklam ≠ Sihirli Çözüm
- **Reklam satış garantisi vermez**: Kötü ürün reklamla satılmaz
- **Reklam maliyetlidir**: Bütçe yönetimi gerekir
- **Reklam tek başına yeterli değildir**: Organik satış da önemli
- **Reklam test gerektirir**: Küçük testlerle başlamak gerekir

## Listeleme Hazır Değilse Reklamın Zarar Yazabileceği

### Hazır Olmayan Listeleme Sorunları
- **Kötü görseller**: Profesyonel olmayan görseller = düşük dönüşüm
- **Zayıf açıklama**: Ürün açıklaması yetersiz = satış kaybı
- **Yüksek fiyat**: Rekabetçi olmayan fiyat = reklam parası boşa
- **Stok sorunu**: Stok yok = reklam parası boşa

### Reklam + Hazır Olmayan Listeleme = Para Kaybı
- **Tıklama maliyeti**: Reklam tıklamaları için para ödersiniz
- **Dönüşüm yok**: Listeleme kötüyse satış olmaz
- **ROI negatif**: Reklam harcaması > satış geliri
- **Zaman kaybı**: Reklamı kapatıp listeleme düzeltmek gerekir

### Hazır Listeleme Kriterleri
- **Profesyonel görseller**: Yüksek kaliteli, temiz görseller
- **SEO başlık**: Anahtar kelime odaklı, okunabilir başlık
- **Fayda odaklı açıklama**: Müşteri odaklı, bullet point'ler
- **Rekabetçi fiyat**: Pazar fiyatlarına uygun
- **Stok hazır**: Satışa hazır stok

## Organik + Reklam Dengesi

### Organik Satış
- **Uzun vadeli**: Organik satışlar zamanla artar
- **Düşük maliyet**: Reklam maliyeti yok
- **Sürdürülebilir**: Uzun vadede sürdürülebilir
- **Yavaş büyüme**: Organik büyüme yavaş olabilir

### Reklam Satışı
- **Hızlı görünürlük**: Reklamla hızlı görünürlük
- **Test aracı**: Ürün ve fiyatlandırma testi
- **Hızlı büyüme**: Hızlı satış artışı
- **Maliyetli**: Reklam maliyeti var

### Denge Stratejisi
- **Organik temel**: Organik satışları güçlendirin
- **Reklam destek**: Reklamla organik satışları destekleyin
- **Test & öğrenme**: Küçük reklam testleriyle öğrenin
- **Ölçekleme**: Başarılı testleri ölçeklendirin

### Reklam Kullanım Senaryoları
- **Yeni ürün**: Yeni ürünü tanıtmak için
- **Yorum biriktirme**: İlk yorumları toplamak için
- **Rekabet**: Rekabetçi pazarda görünürlük için
- **Büyüme**: Hızlı büyüme hedeflerinde

## Reklama Ne Zaman Başlamalı?
- **Listeleme hazır**: Görseller, açıklama, fiyat hazır
- **Stok hazır**: Satışa hazır stok var
- **Bütçe hazır**: Test bütçesi ayrılmış
- **Hedef net**: Reklam hedefi net (yorum, satış, görünürlük)

## Sonraki Adım

Reklamın rolünü öğrendikten sonra Amazon Ads ve Etsy Ads temel farklarına geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-2",
      type: "lesson",
      title: "Amazon Ads & Etsy Ads Temel Farklar",
      description:
        "Amazon ve Etsy reklam sistemlerinin farkları, hedefleme ve beklenti farkları.",
      content: `
# Amazon Ads & Etsy Ads Temel Farklar

Amazon ve Etsy reklam sistemleri farklı mantıklarla çalışır.

## Amazon: Anahtar Kelime + Satın Alma Niyeti

### Amazon Ads Mantığı
- **Arama odaklı**: Müşteri arama yapar, reklam gösterilir
- **Satın alma niyeti**: Müşteri satın alma niyetinde
- **Anahtar kelime**: Anahtar kelime bazlı hedefleme
- **Dönüşüm odaklı**: Satış dönüşümü yüksek

### Amazon Ads Özellikleri
- **Yüksek dönüşüm**: Satın alma niyeti yüksek
- **Hızlı sonuç**: Kısa sürede satış görülebilir
- **Yüksek maliyet**: Tıklama başına maliyet yüksek
- **Rekabetçi**: Çok sayıda satıcı rekabet eder

### Amazon Ads Kullanımı
- **Ürün araması**: Müşteri ürün arar, reklam gösterilir
- **Ürün sayfası**: Ürün sayfasında reklam gösterilir
- **Kategori**: Kategori bazlı reklam gösterimi
- **Rekabet**: Rekabetçi pazarda görünürlük

## Etsy: İlgi + Keşif + Niş

### Etsy Ads Mantığı
- **Keşif odaklı**: Müşteri keşif yapar, reklam gösterilir
- **İlgi bazlı**: Müşteri ilgi alanına göre reklam gösterilir
- **Niş pazar**: Özel ve benzersiz ürünler için
- **Marka odaklı**: Marka ve hikaye önemli

### Etsy Ads Özellikleri
- **Düşük dönüşüm**: Satın alma niyeti düşük (keşif aşaması)
- **Yavaş sonuç**: Uzun vadede sonuç görülebilir
- **Düşük maliyet**: Tıklama başına maliyet düşük
- **Niş odaklı**: Özel ürünler için uygun

### Etsy Ads Kullanımı
- **Keşif**: Müşteri keşif yapar, reklam gösterilir
- **İlgi alanı**: Müşteri ilgi alanına göre reklam
- **Marka hikayesi**: Marka ve hikaye önemli
- **Görsel odaklı**: Görsel kalitesi kritik

## Aynı Bütçeyle Farklı Beklenti

### Amazon Ads Beklentisi
- **Yüksek tıklama maliyeti**: Tıklama başına yüksek maliyet
- **Yüksek dönüşüm**: Satış dönüşümü yüksek
- **Hızlı sonuç**: Kısa sürede satış görülebilir
- **ROI odaklı**: Satış geliri > reklam maliyeti

### Etsy Ads Beklentisi
- **Düşük tıklama maliyeti**: Tıklama başına düşük maliyet
- **Düşük dönüşüm**: Satış dönüşümü düşük (keşif aşaması)
- **Yavaş sonuç**: Uzun vadede sonuç görülebilir
- **Marka odaklı**: Marka bilinirliği ve uzun vadeli satış

### Bütçe Karşılaştırması
**Örnek: 100₺ günlük bütçe**

#### Amazon Ads
- **Tıklama maliyeti**: 2-5₺ (yüksek)
- **Tıklama sayısı**: 20-50 tıklama
- **Dönüşüm oranı**: %5-10 (yüksek)
- **Beklenen satış**: 1-5 satış/gün
- **Sonuç**: Hızlı satış, yüksek maliyet

#### Etsy Ads
- **Tıklama maliyeti**: 0.5-1₺ (düşük)
- **Tıklama sayısı**: 100-200 tıklama
- **Dönüşüm oranı**: %1-3 (düşük)
- **Beklenen satış**: 1-6 satış/gün
- **Sonuç**: Yavaş satış, düşük maliyet, marka bilinirliği

## Platform Seçimi
- **Amazon**: Hızlı satış, yüksek dönüşüm, rekabetçi
- **Etsy**: Marka bilinirliği, niş pazar, uzun vadeli

## Sonraki Adım

Amazon ve Etsy reklam farklarını öğrendikten sonra reklama hazır mıyım kontrolü görevine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-3",
      type: "task",
      title: "Reklama Hazır Mıyım Kontrolü",
      description:
        "Reklama başlamadan önce listeleme, fiyatlandırma ve stok hazırlığını kontrol edin.",
      tasks: [
        {
          id: "checkbox-1",
          type: "checkbox",
          label: "Listeleme metni ve görseller hazır",
          required: true,
        },
        {
          id: "checkbox-2",
          type: "checkbox",
          label: "Fiyatlandırmam test edilebilir seviyede",
          required: true,
        },
        {
          id: "checkbox-3",
          type: "checkbox",
          label: "Stok sorunum yok",
          required: true,
        },
        {
          id: "checkbox-4",
          type: "checkbox",
          label: "Reklam bütçesini kayıp göze alarak ayırdım",
          required: true,
        },
        {
          id: "field-1",
          type: "field",
          label: "Reklam vereceğim ürün",
          placeholder: "Örn: Deri cüzdan, Bluetooth kulaklık",
          required: true,
        },
        {
          id: "field-2",
          type: "field",
          label: "Hedef platform (Amazon / Etsy)",
          placeholder: "Örn: Amazon, Etsy",
          required: true,
        },
      ],
      requiredTasksCount: 6,
    },
    {
      id: "step-4",
      type: "lesson",
      title: "Anahtar Kelime & Hedefleme Mantığı",
      description:
        "Geniş, ifade ve tam eşleme, arama niyeti ve kârlı anahtar kelime seçimi.",
      content: `
# Anahtar Kelime & Hedefleme Mantığı

Anahtar kelime seçimi, reklam başarınızı belirleyen en önemli faktörlerden biridir.

## Geniş / Ifade / Tam Eşleme (Yüksek Seviye)

### Geniş Eşleme (Broad Match)
- **Tanım**: Anahtar kelime ile ilgili tüm aramalar
- **Kapsam**: En geniş kapsam
- **Maliyet**: Düşük tıklama maliyeti
- **Dönüşüm**: Düşük dönüşüm (ilgisiz aramalar)

**Örnek**: "deri cüzdan" → "cüzdan", "deri", "kadın çanta" gibi aramalar

### Ifade Eşleme (Phrase Match)
- **Tanım**: Anahtar kelimeyi içeren aramalar
- **Kapsam**: Orta kapsam
- **Maliyet**: Orta tıklama maliyeti
- **Dönüşüm**: Orta dönüşüm

**Örnek**: "deri cüzdan" → "kadın deri cüzdan", "deri cüzdan siyah" gibi aramalar

### Tam Eşleme (Exact Match)
- **Tanım**: Sadece tam eşleşen aramalar
- **Kapsam**: En dar kapsam
- **Maliyet**: Yüksek tıklama maliyeti
- **Dönüşüm**: Yüksek dönüşüm (ilgili aramalar)

**Örnek**: "deri cüzdan" → Sadece "deri cüzdan" araması

## Arama Niyeti Farkı

### Yüksek Niyet (High Intent)
- **Özellikler**: Satın alma niyeti yüksek
- **Örnekler**: "satın al", "fiyat", "en iyi", "karşılaştır"
- **Dönüşüm**: Yüksek dönüşüm
- **Maliyet**: Yüksek maliyet

### Orta Niyet (Medium Intent)
- **Özellikler**: Araştırma aşaması
- **Örnekler**: "nasıl", "neden", "hangi"
- **Dönüşüm**: Orta dönüşüm
- **Maliyet**: Orta maliyet

### Düşük Niyet (Low Intent)
- **Özellikler**: Keşif aşaması
- **Örnekler**: "nedir", "hakkında", "bilgi"
- **Dönüşüm**: Düşük dönüşüm
- **Maliyet**: Düşük maliyet

## "En Çok Aranan ≠ En Kârlı"

### En Çok Aranan Kelimeler
- **Yüksek hacim**: Çok sayıda arama
- **Yüksek rekabet**: Çok sayıda reklam veren
- **Yüksek maliyet**: Tıklama başına yüksek maliyet
- **Düşük dönüşüm**: Rekabet nedeniyle düşük dönüşüm

### En Kârlı Kelimeler
- **Orta hacim**: Yeterli arama hacmi
- **Düşük rekabet**: Az sayıda reklam veren
- **Düşük maliyet**: Tıklama başına düşük maliyet
- **Yüksek dönüşüm**: Rekabet az olduğu için yüksek dönüşüm

### Kârlı Kelime Stratejisi
- **Uzun kuyruk**: Daha spesifik kelime grupları
- **Niş kelimeler**: Özel ve benzersiz kelimeler
- **Rekabet analizi**: Düşük rekabetli kelimeler
- **Test & öğrenme**: Küçük testlerle öğrenme

### Örnek Karşılaştırma

#### En Çok Aranan: "cüzdan"
- **Arama hacmi**: 10,000+ aylık
- **Rekabet**: Çok yüksek
- **Tıklama maliyeti**: 3-5₺
- **Dönüşüm**: %2-3
- **ROI**: Düşük

#### En Kârlı: "kadın deri cüzdan organize"
- **Arama hacmi**: 500-1,000 aylık
- **Rekabet**: Düşük
- **Tıklama maliyeti**: 0.5-1₺
- **Dönüşüm**: %5-10
- **ROI**: Yüksek

## Anahtar Kelime Seçim İpuçları
- **Uzun kuyruk**: Daha spesifik kelime grupları
- **Rekabet analizi**: Düşük rekabetli kelimeler
- **Niyet analizi**: Yüksek niyetli kelimeler
- **Test & öğrenme**: Küçük testlerle öğrenme

## Sonraki Adım

Anahtar kelime mantığını öğrendikten sonra mini reklam planı oluşturma görevine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-5",
      type: "task",
      title: "Mini Reklam Planı Oluştur",
      description:
        "Test bütçesi ile küçük bir reklam planı oluşturun.",
      tasks: [
        {
          id: "field-1",
          type: "field",
          label: "Ana anahtar kelime",
          placeholder: "Örn: kadın deri cüzdan",
          required: true,
        },
        {
          id: "field-2",
          type: "field",
          label: "2 yardımcı anahtar kelime",
          placeholder: "Örn: organize cüzdan, RFID korumalı cüzdan",
          required: true,
        },
        {
          id: "field-3",
          type: "field",
          label: "Günlük test bütçesi",
          placeholder: "Örn: 50₺, 100₺",
          required: true,
        },
        {
          id: "field-4",
          type: "field",
          label: "Test süresi (gün)",
          placeholder: "Örn: 7, 14",
          required: true,
        },
        {
          id: "checkbox-1",
          type: "checkbox",
          label: "Bütçeyi küçük başlayacağım",
          required: true,
        },
        {
          id: "checkbox-2",
          type: "checkbox",
          label: "Sonuçları 3–7 gün izleyeceğim",
          required: true,
        },
      ],
      requiredTasksCount: 6,
    },
    {
      id: "step-6",
      type: "checkpoint",
      title: "Reklam Farkındalık Testi",
      description: "Öğrendiklerinizi kontrol edin.",
      questions: [
        {
          id: "q1",
          question: "Reklam neden her zaman satış getirmez?",
          options: [
            "Çünkü reklam çalışmaz",
            "Listeleme hazır değilse (kötü görseller, zayıf açıklama, yüksek fiyat), reklam tıklamaları satışa dönüşmez; reklam sadece görünürlük sağlar, satış için hazır listeleme gerekir",
            "Çünkü reklam pahalıdır",
            "Çünkü reklam yasaktır",
          ],
          correctIndex: 1,
          explanation:
            "Reklam her zaman satış getirmez çünkü reklam sadece görünürlük sağlar. Listeleme hazır değilse (kötü görseller, zayıf açıklama, yüksek fiyat, stok sorunu), reklam tıklamaları satışa dönüşmez. Reklam başarısı için hazır listeleme, rekabetçi fiyat ve stok hazırlığı gerekir.",
        },
        {
          id: "q2",
          question: "Test bütçesi neden küçük tutulur?",
          options: [
            "Çünkü para yoktur",
            "Küçük testlerle öğrenmek, hataları minimize etmek, maliyeti kontrol etmek ve başarılı testleri ölçeklendirmek için",
            "Çünkü reklam yasaktır",
            "Çünkü reklam çalışmaz",
          ],
          correctIndex: 1,
          explanation:
            "Test bütçesi küçük tutulur çünkü küçük testlerle öğrenmek, hataları minimize etmek, maliyeti kontrol etmek ve başarılı testleri ölçeklendirmek için. Büyük bütçe ile başlamak, hatalı stratejilerde büyük para kaybına neden olur. Küçük testlerle öğrenip, başarılı stratejileri ölçeklendirmek daha sağlıklıdır.",
        },
        {
          id: "q3",
          question: "Anahtar kelime seçerken en büyük hata nedir?",
          options: [
            "Sadece en çok aranan kelimeleri seçmek; en çok aranan ≠ en kârlı, yüksek rekabet ve maliyet nedeniyle düşük ROI",
            "Hiç kelime seçmemek",
            "Sadece kısa kelimeler seçmek",
            "Sadece uzun kelimeler seçmek",
          ],
          correctIndex: 0,
          explanation:
            "Anahtar kelime seçerken en büyük hata, sadece en çok aranan kelimeleri seçmektir. En çok aranan kelimeler, yüksek rekabet ve maliyet nedeniyle düşük ROI sağlar. Bunun yerine, orta hacimli, düşük rekabetli, uzun kuyruk kelimeler seçmek daha kârlıdır. Test & öğrenme yaklaşımı ile en kârlı kelimeleri bulmak gerekir.",
        },
      ],
      requiredCorrectCount: 3,
    },
  ],
};

export const operationsSopTrainingContent: TrainingContent = {
  trainingId: "operasyon-sop",
  steps: [
    {
      id: "step-1",
      type: "lesson",
      title: "SOP Nedir, Neden Gereklidir?",
      description:
        "Standard Operating Procedure (SOP) kavramı, faydaları ve operasyonel süreçlerdeki önemi.",
      content: `
# SOP Nedir, Neden Gereklidir?

SOP (Standard Operating Procedure), iş süreçlerinizi standartlaştıran yazılı prosedürlerdir.

## SOP = Standard Operating Procedure

### SOP Tanımı
- **Açılım**: Standard Operating Procedure (Standart Operasyon Prosedürü)
- **Amaç**: İş süreçlerini standartlaştırmak
- **Kapsam**: Her adımın net tanımı
- **Sonuç**: Tutarlı ve kaliteli iş akışı

### SOP Özellikleri
- **Yazılı**: Sözlü değil, yazılı prosedür
- **Net**: Her adım açık ve anlaşılır
- **Uygulanabilir**: Pratikte uygulanabilir
- **Güncellenebilir**: Süreç değişince güncellenir

## "Kafaya Göre İş" vs "Standart İş"

### Kafaya Göre İş Sorunları
- **Tutarsızlık**: Her seferinde farklı yapılır
- **Hata riski**: Unutma ve hata riski yüksek
- **Ölçeklenemez**: Büyüdükçe karmaşıklaşır
- **Eğitim zorluğu**: Yeni kişilere öğretmek zor

### Standart İş Avantajları
- **Tutarlılık**: Her seferinde aynı şekilde yapılır
- **Hata azaltma**: Standart prosedür hata riskini azaltır
- **Hız**: Prosedürü takip etmek daha hızlı
- **Ölçeklenebilirlik**: Büyüdükçe kolaylaşır

### Örnek Karşılaştırma

#### Kafaya Göre İş
- Sipariş geldi → "Hemen paketleyeyim" → "Kargo bilgisi nerede?" → "Takip numarası unuttum"
- **Sonuç**: Hata riski, tutarsızlık, zaman kaybı

#### Standart İş (SOP)
- Sipariş geldi → Kontrol listesi → Paketleme prosedürü → Kargo çıkışı → Takip mesajı
- **Sonuç**: Tutarlılık, hata azaltma, hız

## Hata Azaltma, Hız, Ölçeklenebilirlik

### Hata Azaltma
- **Kontrol listesi**: Her adım kontrol edilir
- **Standart süreç**: Hata yapma riski azalır
- **Dokümantasyon**: Hatalar kaydedilir ve düzeltilir
- **Sürekli iyileştirme**: Prosedürler iyileştirilir

### Hız
- **Net adımlar**: Ne yapılacağı belli
- **Karar verme**: Hızlı karar verme
- **Zaman tasarrufu**: Düşünme zamanı azalır
- **Verimlilik**: Daha verimli çalışma

### Ölçeklenebilirlik
- **Yeni kişi**: SOP'u okuyarak öğrenir
- **Büyüme**: Süreçler büyüdükçe kolaylaşır
- **Tutarlılık**: Büyüdükçe tutarlılık korunur
- **Kalite**: Büyüdükçe kalite korunur

## SOP Yazmanın Önemi
- **Tek kişi bile olsan**: SOP yazmak önemli
- **Gelecek için**: İleride büyüdüğünde hazır
- **Hata önleme**: Hataları önlemek için
- **Zaman tasarrufu**: Her seferinde düşünmek yerine prosedürü takip etmek

## Sonraki Adım

SOP'un önemini öğrendikten sonra sipariş akışı SOP'sine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-2",
      type: "lesson",
      title: "Sipariş Akışı SOP'si",
      description:
        "Sipariş geldiğinde yapılacaklar, kontrol noktaları ve takip süreçleri.",
      content: `
# Sipariş Akışı SOP'si

Sipariş akışı SOP'si, siparişten teslimata kadar tüm süreci standartlaştırır.

## Sipariş Geldi → Kontrol → Hazırlık → Kargo → Takip

### 1. Sipariş Geldi
- **Bildirim**: Sipariş bildirimi alınır
- **Kayıt**: Sipariş sisteme kaydedilir
- **Onay**: Sipariş onaylanır
- **Bildirim**: Müşteriye sipariş alındı mesajı gönderilir

### 2. Kontrol
- **Stok kontrolü**: Stok durumu kontrol edilir
- **Adres kontrolü**: Teslimat adresi kontrol edilir
- **Ödeme kontrolü**: Ödeme durumu kontrol edilir
- **Özel not kontrolü**: Müşteri özel notu varsa kontrol edilir

### 3. Hazırlık
- **Ürün seçimi**: Doğru ürün seçilir
- **Paketleme**: Standart paketleme prosedürü
- **Etiketleme**: Kargo etiketi hazırlanır
- **Kontrol**: Paket içeriği kontrol edilir

### 4. Kargo
- **Kargo çıkışı**: Kargo şirketine teslim edilir
- **Takip numarası**: Takip numarası alınır
- **Kayıt**: Takip numarası sisteme kaydedilir
- **Bildirim**: Müşteriye kargo çıktı mesajı gönderilir

### 5. Takip
- **Takip**: Kargo takip edilir
- **Gecikme kontrolü**: Gecikme varsa müşteri bilgilendirilir
- **Teslimat**: Teslimat onayı alınır
- **Takip mesajı**: Teslimat sonrası takip mesajı gönderilir

## Kim, Ne Zaman, Ne Yapar Mantığı

### Kim?
- **Sorumlu kişi**: Her adımda sorumlu kişi belirlenir
- **Yedek kişi**: Sorumlu kişi yoksa yedek kişi
- **Kontrol kişisi**: Kontrol yapan kişi

### Ne Zaman?
- **Zaman limiti**: Her adım için zaman limiti
- **Öncelik**: Acil siparişler için öncelik
- **Takvim**: Günlük/haftalık takvim

### Ne Yapar?
- **Net adımlar**: Her adımda ne yapılacağı belli
- **Kontrol noktaları**: Kontrol edilecek noktalar
- **Dokümantasyon**: Yapılanlar kaydedilir

## Tek Kişi Bile Olsan SOP Yazmanın Önemi

### Neden Önemli?
- **Unutma önleme**: Unutma riskini azaltır
- **Hata önleme**: Hata yapma riskini azaltır
- **Zaman tasarrufu**: Her seferinde düşünmek yerine prosedürü takip etmek
- **Gelecek hazırlık**: İleride büyüdüğünde hazır

### Tek Kişi SOP Örneği
1. Sipariş geldi → Kontrol et → Onayla
2. Stok kontrolü → Ürün hazırla
3. Paketleme → Etiketleme → Kontrol
4. Kargo çıkışı → Takip numarası → Mesaj gönder
5. Takip → Teslimat onayı

## SOP Avantajları
- **Tutarlılık**: Her sipariş aynı şekilde işlenir
- **Hız**: Prosedürü takip etmek daha hızlı
- **Hata azaltma**: Kontrol noktaları hata riskini azaltır
- **Ölçeklenebilirlik**: Büyüdükçe kolaylaşır

## Sonraki Adım

Sipariş akışı SOP'sini öğrendikten sonra sipariş SOP taslağı oluşturma görevine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-3",
      type: "task",
      title: "Sipariş SOP Taslağı Oluştur",
      description:
        "Sipariş akışı için standart prosedür taslağınızı oluşturun.",
      tasks: [
        {
          id: "checkbox-1",
          type: "checkbox",
          label: "Sipariş kontrol adımı tanımladım",
          required: true,
        },
        {
          id: "checkbox-2",
          type: "checkbox",
          label: "Paketleme kontrol noktaları belirledim",
          required: true,
        },
        {
          id: "checkbox-3",
          type: "checkbox",
          label: "Kargo çıkışı sonrası takip adımı ekledim",
          required: true,
        },
        {
          id: "field-1",
          type: "field",
          label: "Sipariş akışı kısa notu (1–2 cümle)",
          placeholder: "Örn: Sipariş geldi → kontrol → paketleme → kargo → takip",
          required: true,
        },
      ],
      requiredTasksCount: 4,
    },
    {
      id: "step-4",
      type: "lesson",
      title: "İade SOP'si",
      description:
        "İade talebi geldiğinde yapılacaklar, hasarlı/kusurlu/cayma farkı ve prosedürel yaklaşım.",
      content: `
# İade SOP'si

İade SOP'si, iade süreçlerini standartlaştırarak tutarlı ve adil iade yönetimi sağlar.

## İade Talebi Geldiğinde Yapılacaklar

### 1. İade Talebi Alınır
- **Bildirim**: İade talebi bildirimi alınır
- **Kayıt**: İade talebi sisteme kaydedilir
- **İnceleme**: İade nedeni incelenir
- **Yanıt süresi**: Belirlenen süre içinde yanıt verilir

### 2. İade Nedeni Kontrolü
- **Neden**: İade nedeni kontrol edilir
- **Kategori**: Hasarlı / kusurlu / cayma / diğer
- **Uygunluk**: İade politikasına uygun mu?
- **Karar**: İade onayı / reddi kararı

### 3. İade Onayı
- **Onay**: İade onaylanır
- **Talimat**: İade talimatı gönderilir
- **Adres**: İade adresi paylaşılır
- **Takip**: İade takip edilir

### 4. Ürün Kontrolü
- **Alındı**: Ürün alındığında kontrol edilir
- **Durum**: Ürün durumu kontrol edilir
- **Karar**: Para iadesi / yeniden gönderim kararı
- **İşlem**: İade işlemi tamamlanır

## Hasarlı / Kusurlu / Cayma Farkı (Genel)

### Hasarlı Ürün
- **Tanım**: Ürün teslimat sırasında hasar görmüş
- **Sorumluluk**: Kargo şirketi / satıcı
- **Çözüm**: Para iadesi / yeniden gönderim
- **Dokümantasyon**: Hasar fotoğrafı gerekli

### Kusurlu Ürün
- **Tanım**: Ürün üretim hatası veya kalite sorunu
- **Sorumluluk**: Satıcı
- **Çözüm**: Para iadesi / yeniden gönderim
- **Dokümantasyon**: Kusur fotoğrafı gerekli

### Cayma (İade Hakkı)
- **Tanım**: Müşteri cayma hakkını kullanıyor
- **Sorumluluk**: Müşteri (genellikle)
- **Çözüm**: Para iadesi (kargo ücreti hariç olabilir)
- **Dokümantasyon**: Genellikle gerekli değil

### Diğer Nedenler
- **Yanlış ürün**: Yanlış ürün gönderilmiş
- **Eksik ürün**: Eksik ürün gönderilmiş
- **Uyumsuzluk**: Ürün açıklamaya uymuyor

## Duygusal Değil, Prosedürel Yaklaşım

### Duygusal Yaklaşım Sorunları
- **Kişisel algı**: İade talebi kişisel algılanır
- **Duygusal tepki**: Duygusal tepki verilir
- **Tutarsızlık**: Her seferinde farklı karar
- **Zaman kaybı**: Duygusal tepki zaman kaybı

### Prosedürel Yaklaşım Avantajları
- **Nesnel**: İade nedeni nesnel değerlendirilir
- **Tutarlı**: Her seferinde aynı prosedür
- **Hızlı**: Prosedürü takip etmek hızlı
- **Adil**: Müşteri ve satıcı için adil

### Prosedürel Yaklaşım Adımları
1. **İade nedeni**: İade nedeni kontrol edilir
2. **Politika kontrolü**: İade politikasına uygun mu?
3. **Karar**: Prosedüre göre karar verilir
4. **İletişim**: Müşteriye net mesaj gönderilir
5. **İşlem**: İade işlemi tamamlanır

## İade SOP Avantajları
- **Tutarlılık**: Her iade aynı şekilde işlenir
- **Hız**: Prosedürü takip etmek hızlı
- **Adillik**: Müşteri ve satıcı için adil
- **Dokümantasyon**: İade süreçleri kaydedilir

## Sonraki Adım

İade SOP'sini öğrendikten sonra iade SOP ve karar ağacı görevine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-5",
      type: "task",
      title: "İade SOP & Karar Ağacı",
      description:
        "İade süreçleri için standart prosedür ve karar ağacı oluşturun.",
      tasks: [
        {
          id: "checkbox-1",
          type: "checkbox",
          label: "İade talebi alınca yanıt süresi belirledim",
          required: true,
        },
        {
          id: "checkbox-2",
          type: "checkbox",
          label: "Ürün kontrol kriterlerini yazdım",
          required: true,
        },
        {
          id: "checkbox-3",
          type: "checkbox",
          label: "Para iadesi / yeniden gönderim kararını netleştirdim",
          required: true,
        },
        {
          id: "field-1",
          type: "field",
          label: "İade karar notu (kısa)",
          placeholder: "Örn: Hasarlı → para iadesi, kusurlu → yeniden gönderim",
          required: true,
        },
      ],
      requiredTasksCount: 4,
    },
    {
      id: "step-6",
      type: "lesson",
      title: "Müşteri Mesaj Şablonları",
      description:
        "Hazır mesaj şablonlarının avantajları, ton ve çözüm odaklı iletişim.",
      content: `
# Müşteri Mesaj Şablonları

Hazır mesaj şablonları, müşteri iletişimini standartlaştırarak zaman ve stres tasarrufu sağlar.

## Hazır Şablon Kullanmanın Avantajı

### Zaman Tasarrufu
- **Hızlı yanıt**: Şablonu kullanarak hızlı yanıt
- **Düşünme zamanı**: Her seferinde düşünmek yerine şablonu kullanmak
- **Verimlilik**: Daha verimli çalışma
- **Ölçeklenebilirlik**: Çok sayıda mesajı hızlı yanıtlama

### Tutarlılık
- **Aynı ton**: Her mesajda aynı ton
- **Aynı bilgi**: Her mesajda aynı bilgi
- **Profesyonellik**: Profesyonel görünüm
- **Güven**: Müşteri güveni artar

### Hata Önleme
- **Eksik bilgi**: Önemli bilgiler unutulmaz
- **Yanlış bilgi**: Yanlış bilgi verilmez
- **Tutarlılık**: Her mesajda tutarlı bilgi
- **Kalite**: Yüksek kaliteli iletişim

### Stres Azaltma
- **Kriz anı**: Kriz anında ne yazacağını bilmek
- **Zaman baskısı**: Zaman baskısında hızlı yanıt
- **Duygusal kontrol**: Duygusal tepki vermemek
- **Sakinlik**: Sakin ve profesyonel yanıt

## Ton: Nazik, Net, Çözüm Odaklı

### Nazik Ton
- **Saygılı**: Müşteriye saygılı yaklaşım
- **Anlayışlı**: Müşterinin durumunu anlama
- **Empati**: Müşteri ile empati kurma
- **Olumlu**: Olumlu dil kullanma

### Net Ton
- **Açık**: Net ve anlaşılır mesaj
- **Kısa**: Gereksiz detay yok
- **Odaklı**: Ana mesaja odaklanma
- **Yapılandırılmış**: Yapılandırılmış mesaj

### Çözüm Odaklı Ton
- **Sorun çözme**: Sorunu çözmeye odaklanma
- **Alternatif**: Çözüm alternatifleri sunma
- **Hızlı çözüm**: Hızlı çözüm önerme
- **Takip**: Çözüm takibi yapma

## Kriz Anında Mesaj Yazmamak 🙂

### Kriz Anı Sorunları
- **Duygusal tepki**: Duygusal tepki verme riski
- **Yanlış mesaj**: Yanlış mesaj gönderme riski
- **Zaman kaybı**: Duygusal tepki zaman kaybı
- **İlişki zararı**: Müşteri ilişkisi zarar görebilir

### Şablon Kullanımı
- **Hazır mesaj**: Hazır şablonu kullanmak
- **Sakinlik**: Sakin ve profesyonel yanıt
- **Tutarlılık**: Tutarlı mesaj
- **Kalite**: Yüksek kaliteli iletişim

## Mesaj Şablonu Türleri

### Sipariş Alındı Mesajı
- **Amaç**: Sipariş alındığını bildirmek
- **İçerik**: Sipariş numarası, tahmini teslimat
- **Ton**: Nazik, bilgilendirici

### Kargo Çıktı Mesajı
- **Amaç**: Kargo çıktığını bildirmek
- **İçerik**: Takip numarası, tahmini teslimat
- **Ton**: Nazik, bilgilendirici

### Gecikme Bilgilendirme Mesajı
- **Amaç**: Gecikmeyi bildirmek
- **İçerik**: Gecikme nedeni, yeni tahmini teslimat
- **Ton**: Özür dileyici, çözüm odaklı

### İade Onay Mesajı
- **Amaç**: İade onayını bildirmek
- **İçerik**: İade talimatı, adres, süreç
- **Ton**: Nazik, net, çözüm odaklı

## Mesaj Şablonu İpuçları
- **Kişiselleştirme**: Müşteri adı ekleme
- **Güncelleme**: Şablonları güncelleme
- **Test**: Şablonları test etme
- **İyileştirme**: Sürekli iyileştirme

## Sonraki Adım

Mesaj şablonlarının önemini öğrendikten sonra mesaj şablonları oluşturma görevine geçeceksiniz.
      `.trim(),
    },
    {
      id: "step-7",
      type: "task",
      title: "Mesaj Şablonları Oluştur",
      description:
        "Sipariş, kargo, gecikme ve iade için hazır mesaj şablonlarınızı oluşturun.",
      tasks: [
        {
          id: "textarea-1",
          type: "textarea",
          label: "Sipariş alındı mesajı",
          placeholder: "Örn: Merhaba [Müşteri Adı], siparişiniz alınmıştır. Sipariş numaranız: [Sipariş No]. Tahmini teslimat: [Tarih]. Teşekkürler!",
          required: true,
        },
        {
          id: "textarea-2",
          type: "textarea",
          label: "Kargo çıktı mesajı",
          placeholder: "Örn: Merhaba [Müşteri Adı], siparişiniz kargoya verilmiştir. Takip numaranız: [Takip No]. Tahmini teslimat: [Tarih]. İyi günler!",
          required: true,
        },
        {
          id: "textarea-3",
          type: "textarea",
          label: "Gecikme bilgilendirme mesajı",
          placeholder: "Örn: Merhaba [Müşteri Adı], kargonuzda gecikme yaşanmıştır. Yeni tahmini teslimat: [Tarih]. Özür dileriz, anlayışınız için teşekkürler.",
          required: true,
        },
        {
          id: "textarea-4",
          type: "textarea",
          label: "İade onay mesajı",
          placeholder: "Örn: Merhaba [Müşteri Adı], iade talebiniz onaylanmıştır. İade adresi: [Adres]. İade işlemi tamamlandığında para iadesi yapılacaktır. Teşekkürler!",
          required: true,
        },
        {
          id: "checkbox-1",
          type: "checkbox",
          label: "Kısa ve net dil kullandım",
          required: true,
        },
        {
          id: "checkbox-2",
          type: "checkbox",
          label: "Müşteriye güven veren ifadeler kullandım",
          required: true,
        },
      ],
      requiredTasksCount: 6,
    },
    {
      id: "step-8",
      type: "checkpoint",
      title: "Operasyon Farkındalık Testi",
      description: "Öğrendiklerinizi kontrol edin.",
      questions: [
        {
          id: "q1",
          question: "SOP yazmanın en büyük faydası nedir?",
          options: [
            "Sadece zaman tasarrufu",
            "Hata azaltma, hız, tutarlılık ve ölçeklenebilirlik; 'kafaya göre iş' yerine standart iş akışı",
            "Sadece hata önleme",
            "Hiçbir faydası yoktur",
          ],
          correctIndex: 1,
          explanation:
            "SOP yazmanın en büyük faydası, hata azaltma, hız, tutarlılık ve ölçeklenebilirliktir. 'Kafaya göre iş' yerine standart iş akışı oluşturarak, her seferinde aynı şekilde iş yapılır, hata riski azalır, iş hızlanır ve büyüdükçe kolaylaşır. Tek kişi bile olsan SOP yazmak önemlidir.",
        },
        {
          id: "q2",
          question: "İade süreçlerinde neden standart önemlidir?",
          options: [
            "Sadece hız için",
            "Duygusal tepki vermemek, tutarlı karar vermek, adil işlem yapmak ve müşteri güveni için",
            "Sadece müşteri memnuniyeti için",
            "Hiçbir önemi yoktur",
          ],
          correctIndex: 1,
          explanation:
            "İade süreçlerinde standart önemlidir çünkü duygusal tepki vermemek, tutarlı karar vermek, adil işlem yapmak ve müşteri güveni için gereklidir. Prosedürel yaklaşım, her iade talebini nesnel değerlendirir, tutarlı karar verir ve müşteri ile satıcı için adil işlem sağlar.",
        },
        {
          id: "q3",
          question: "Mesaj şablonları hangi problemi çözer?",
          options: [
            "Sadece zaman tasarrufu",
            "Zaman tasarrufu, tutarlılık, hata önleme, stres azaltma ve kriz anında sakin yanıt verme",
            "Sadece hata önleme",
            "Hiçbir problemi çözmez",
          ],
          correctIndex: 1,
          explanation:
            "Mesaj şablonları, zaman tasarrufu, tutarlılık, hata önleme, stres azaltma ve kriz anında sakin yanıt verme problemlerini çözer. Hazır şablonlar, her seferinde düşünmek yerine hızlı yanıt vermeyi sağlar, tutarlı iletişim sağlar, önemli bilgilerin unutulmasını önler ve kriz anında duygusal tepki vermek yerine sakin ve profesyonel yanıt vermeyi sağlar.",
        },
      ],
      requiredCorrectCount: 3,
    },
  ],
};

// Tüm eğitim içeriklerini export et
export const trainingContents: Record<string, TrainingContent> = {
  "amazon-satisa-baslangic": amazonTrainingContent,
  "etsy-magaza-kurulumu-seo": etsyTrainingContent,
  "ebay-global-satis-kargo": ebayTrainingContent,
  "odeme-altyapilari-payoneer-wise": paymentsTrainingContent,
  "uk-eu-us-firma-kurulusuna-giris": companySetupTrainingContent,
  "shopify-baslangic": shopifyTrainingContent,
  "woocommerce-baslangic": woocommerceTrainingContent,
  "lojistik-kargo-iade-musteri": logisticsTrainingContent,
  "urun-arastirmasi-talep-analizi": productResearchTrainingContent,
  "fiyatlandirma-karlilik": pricingProfitTrainingContent,
  "marka-listeleme-metni-seo": brandListingTrainingContent,
  "reklam-temelleri-amazon-etsy-ads": adsBasicsTrainingContent,
  "operasyon-sopleri-siparis-iade-mesaj": operationsSopTrainingContent,
};

