# Electron Desktop Uygulama Kurulum Rehberi

## 📦 Kurulum Adımları

### 1. Bağımlılıkları Yükleyin

```bash
npm install
```

Bu komut şunları yükler:
- `electron` - Electron framework
- `electron-builder` - Installer oluşturma aracı
- Diğer tüm Next.js ve React bağımlılıkları

### 2. Build İşlemleri

#### Geliştirme Modu
```bash
# Next.js dev server (tarayıcıda)
npm run dev

# Electron ile geliştirme
npm run electron:dev
```

#### Production Build
```bash
# Tüm build işlemleri
npm run build:all

# Sadece Next.js
npm run build:next

# Sadece Electron
npm run build:electron
```

### 3. Installer Oluşturma

```bash
# Tüm platformlar için
npm run dist

# Sadece Windows
npm run dist:win

# Sadece macOS
npm run dist:mac

# Sadece Linux
npm run dist:linux
```

## 🏗️ Build Süreci

1. **Next.js Standalone Build**: `.next/standalone` ve `.next/static` klasörleri oluşturulur
2. **Electron TypeScript Build**: `electron/main.ts` → `dist-electron/main.js` derlenir
3. **Electron Builder**: Tüm dosyalar paketlenir ve installer oluşturulur

## 📁 Dosya Yapısı

```
egitim/
├── electron/
│   ├── main.ts              # Electron ana process
│   ├── utils/
│   │   └── findPort.ts      # Port bulma yardımcısı
│   └── tsconfig.json        # Electron TS config
├── .next/
│   ├── standalone/          # Standalone server (build sonrası)
│   └── static/              # Statik dosyalar
├── dist-electron/           # Electron build çıktısı
└── dist/                    # Installer çıktısı
```

## 🔧 Yapılandırma

### next.config.ts
- `output: "standalone"` - Standalone build modu

### package.json
- `main: "dist-electron/main.js"` - Electron entry point
- `build` - Electron builder yapılandırması

### electron/main.ts
- Port bulma: 3000'den başlayarak boş port bulur
- Server başlatma: Next.js standalone server'ı child process olarak başlatır
- Window yönetimi: Server hazır olunca Electron penceresi açılır

## 🚨 Sorun Giderme

### Port Zaten Kullanımda
- Uygulama otomatik olarak 3001, 3002... portlarını dener
- Manuel kontrol: `netstat -ano | findstr :3000` (Windows)

### Server Başlamıyor
- `.next/standalone` klasörünün mevcut olduğundan emin olun
- `npm run build:next` komutunu çalıştırın
- Console loglarını kontrol edin

### Windows Path Sorunları
- `process.resourcesPath` kullanılarak çözülmüştür
- Packaged uygulamada otomatik olarak doğru path kullanılır

### Build Hataları
- TypeScript hataları: `npm run build:electron` ile kontrol edin
- Next.js hataları: `npm run build:next` ile kontrol edin
- Electron builder hataları: `npm run dist` loglarını kontrol edin

## 📝 Notlar

- **LocalStorage**: Tarayıcı bağlamında otomatik saklanır
- **User Data**: `app.getPath("userData")` ile erişilebilir
- **Node.js Gereksinimi**: Kullanıcının bilgisayarında Node.js kurulu olmasına gerek yok
- **Standalone Mode**: Tüm bağımlılıklar `.next/standalone` içinde paketlenir

## 🎯 Sonraki Adımlar

1. Installer'ı test edin
2. Farklı platformlarda test edin
3. Icon dosyalarını ekleyin (şu an favicon.ico kullanılıyor)
4. Auto-updater ekleyebilirsiniz (opsiyonel)

