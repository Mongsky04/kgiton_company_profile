# KGITON Company Profile

Website company profile modern untuk KGITON yang dibangun menggunakan React, Vite, dan Tailwind CSS. Website ini menampilkan informasi lengkap tentang perusahaan, layanan, dan cara menghubungi tim.

![KGITON Company Profile](https://img.shields.io/badge/React-19.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-7.2.4-purple) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-cyan)

## 📋 Daftar Isi

- [Fitur](#fitur)
- [Teknologi](#teknologi)
- [Struktur Proyek](#struktur-proyek)
- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)
- [Build untuk Production](#build-untuk-production)
- [Komponen Utama](#komponen-utama)
- [Kustomisasi](#kustomisasi)
- [Lisensi](#lisensi)

## ✨ Fitur

- **Desain Modern & Responsif** - Tampilan yang menarik dan optimal di semua ukuran layar
- **Hero Section** - Landing page yang eye-catching dengan call-to-action
- **About Section** - Informasi lengkap tentang perusahaan
- **Services Section** - Showcase layanan yang ditawarkan dengan visual menarik
- **Industries Section** - Industri-industri yang dilayani
- **Why Choose Us** - Keunggulan dan nilai tambah perusahaan
- **Contact Section** - Form dan informasi kontak lengkap
- **Fast Performance** - Optimasi dengan Vite untuk loading yang cepat
- **Local Assets** - Semua gambar tersimpan lokal untuk performa optimal

## 🛠 Teknologi

Proyek ini dibangun dengan teknologi modern:

- **React 19.2.0** - Library JavaScript untuk membangun user interface
- **Vite 7.2.4** - Build tool yang super cepat
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **ESLint** - Linting untuk code quality
- **PostCSS** - CSS transformations

## 📁 Struktur Proyek

```
kgiton_company_profile/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images dan media files
│   │   ├── images.js      # Export semua images
│   │   ├── hero-image.png
│   │   ├── logo-container.svg
│   │   ├── pattern.svg
│   │   ├── vector.svg
│   │   ├── feature-icon-*.svg
│   │   ├── service-image-*.png
│   │   ├── service-icon-container-*.svg
│   │   ├── industries-image.png
│   │   ├── contact-icon-*.svg
│   │   └── footer.svg
│   ├── components/        # React components
│   │   ├── Header.jsx     # Navigation header
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── IndustriesSection.jsx
│   │   ├── WhyChooseUsSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   ├── LandingPage.jsx
│   │   └── Button.jsx     # Reusable button component
│   ├── App.jsx            # Main App component
│   ├── App.css            # App styles
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles + Tailwind
├── eslint.config.js       # ESLint configuration
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
├── index.html             # HTML template
├── package.json           # Dependencies
└── README.md              # Documentation

```

## 🚀 Instalasi

### Prasyarat

Pastikan Anda sudah menginstall:

- Node.js (versi 16 atau lebih tinggi)
- npm atau yarn

### Langkah Instalasi

1. **Clone repository**

   ```bash
   git clone https://github.com/Mongsky04/kgiton_company_profile.git
   cd kgiton_company_profile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   atau jika menggunakan yarn:
   ```bash
   yarn install
   ```

## 💻 Penggunaan

### Development Mode

Jalankan development server dengan hot-reload:

```bash
npm run dev
```

Website akan berjalan di `http://localhost:5173` (atau port lain jika 5173 sudah digunakan)

### Linting

Cek code quality dengan ESLint:

```bash
npm run lint
```

### Preview Production Build

Preview build production sebelum deploy:

```bash
npm run preview
```

## 📦 Build untuk Production

Build aplikasi untuk production:

```bash
npm run build
```

File hasil build akan tersimpan di folder `dist/`. Folder ini siap untuk di-deploy ke hosting pilihan Anda.

### Deploy Options

- **Vercel**: Connect repository dan deploy otomatis
- **Netlify**: Drag & drop folder `dist/` atau connect dengan Git
- **GitHub Pages**: Gunakan GitHub Actions untuk deploy otomatis
- **VPS/Hosting**: Upload folder `dist/` ke web server Anda

## 🧩 Komponen Utama

### Header

Navigation bar dengan logo perusahaan dan menu navigasi

### HeroSection

Landing page dengan hero image, headline, dan call-to-action button

### AboutSection

Informasi tentang visi, misi, dan sejarah perusahaan

### ServicesSection

Showcase layanan yang ditawarkan dengan gambar dan deskripsi

### IndustriesSection

Industri-industri yang menjadi fokus layanan perusahaan

### WhyChooseUsSection

Keunggulan dan nilai tambah yang membedakan dari kompetitor

### ContactSection

Form kontak dan informasi kontak (email, telepon, alamat)

### Footer

Footer dengan informasi perusahaan dan social media links

### Button

Reusable button component dengan berbagai variants

## 🎨 Kustomisasi

### Mengubah Warna

Edit file `tailwind.config.js` untuk mengubah color palette:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#your-color",
        secondary: "#your-color",
      },
    },
  },
};
```

### Mengubah Konten

Setiap section dapat dikustomisasi dengan mengedit file component yang sesuai di folder `src/components/`.

### Menambah/Mengganti Gambar

1. Tambahkan gambar ke folder `src/assets/`
2. Import gambar di `src/assets/images.js`
3. Export dengan nama yang sesuai
4. Gunakan di component dengan import dari `images.js`

```javascript
// Di images.js
import newImage from "./new-image.png";
export const imgNewImage = newImage;

// Di component
import { imgNewImage } from "../assets/images";
```

## 🤝 Kontribusi

Kontribusi selalu welcome! Silakan:

1. Fork repository ini
2. Buat branch fitur baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 Lisensi

Proyek ini dibuat untuk KGITON Company.

## 📧 Kontak

Untuk pertanyaan atau feedback, silakan hubungi:

- Email: info@kgiton.com
- Website: [kgiton.com](https://kgiton.com)

---

Made with ❤️ by KGITON Team
