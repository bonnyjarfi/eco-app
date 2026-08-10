# AGENTS.md

# 🌿 Eco App — AI Development Guide

> **Explore Nature, Preserve Culture, Empower Local**

Dokumen ini berisi instruksi dan konteks yang harus dipahami oleh AI coding agent sebelum melakukan perubahan pada project **Eco App**.

Eco App adalah platform digital ecotourism yang berfokus pada promosi destinasi wisata alam, budaya, konservasi, serta pemberdayaan masyarakat lokal di **Sorong, Papua Barat Daya, Indonesia**.

---

# 1. Project Overview

## Nama Project

**Eco App**

## Tagline

**Explore Nature, Empower Local**

## Konsep

Eco App bukan sekadar website daftar tempat wisata.

Platform ini dirancang sebagai ekosistem digital yang menghubungkan:

```text
Wisatawan
    │
    ▼
Eco App
    │
    ├── Destinasi
    ├── Explore Map
    ├── Experience
    ├── Local Guide
    ├── Homestay
    ├── Kampung Wisata
    ├── Budaya
    ├── UMKM / Produk Lokal
    ├── Artikel
    └── Conservation
```

Tujuan utama:

1. Mempromosikan ekowisata Sorong.
2. Mempermudah wisatawan menemukan destinasi.
3. Memperkenalkan budaya Papua.
4. Mendukung konservasi lingkungan.
5. Memberdayakan masyarakat lokal.
6. Mempromosikan Local Guide dan Homestay.
7. Membantu UMKM dan produk lokal mendapatkan exposure.

---

# 2. Target Users

Eco App memiliki beberapa kelompok pengguna.

## Wisatawan

Wisatawan dapat:

* Menjelajahi destinasi.
* Melihat lokasi pada peta.
* Melihat foto destinasi.
* Melihat aktivitas wisata.
* Melihat informasi perjalanan.
* Menemukan Local Guide.
* Menemukan Homestay.
* Membaca informasi budaya.
* Melihat rekomendasi wisata.
* Menghubungi pengelola melalui WhatsApp.

## Masyarakat Lokal

Masyarakat dapat berpartisipasi sebagai:

* Local Guide
* Pengelola Homestay
* Pengelola Kampung Wisata
* Pelaku UMKM
* Penyedia kuliner
* Penyedia transportasi lokal
* Pengelola aktivitas wisata

## Administrator

Administrator mengelola:

* Destinasi
* Kategori
* Galeri
* Local Guide
* Homestay
* Kampung Wisata
* Produk lokal
* Budaya
* Artikel
* Review
* User
* Statistik

---

# 3. Technology Stack

Gunakan teknologi berikut kecuali terdapat alasan teknis yang kuat untuk mengubahnya.

## Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* Lucide React

## Backend

Pilihan utama:

* Next.js API / Route Handlers

Jika project membutuhkan backend terpisah:

* Laravel REST API

## Database

Pilihan utama:

* PostgreSQL

Alternatif:

* MySQL
* Supabase

## Map

Gunakan:

* Leaflet
* OpenStreetMap

Jangan menggunakan Google Maps API kecuali memang diperlukan dan sudah disetujui.

## Storage

Pilihan:

* Supabase Storage
* Cloudinary

## Deployment

Frontend:

* Vercel

Backend/database:

* Supabase atau layanan cloud yang sesuai.

---

# 4. General Development Rules

AI harus:

1. Membaca `README.md` sebelum mulai bekerja.
2. Membaca `AGENTS.md` sebelum melakukan perubahan.
3. Memahami struktur project sebelum membuat file baru.
4. Memeriksa komponen yang sudah tersedia sebelum membuat komponen baru.
5. Mengutamakan reusable components.
6. Menghindari duplikasi kode.
7. Menggunakan TypeScript secara konsisten.
8. Menjaga responsive design.
9. Memastikan perubahan tidak merusak fitur yang sudah ada.
10. Menjalankan lint/build/test jika tersedia setelah perubahan besar.

Jangan langsung melakukan refactor besar hanya karena menemukan kode yang dapat diperbaiki.

Jika sebuah perubahan tidak diperlukan untuk menyelesaikan task, jangan lakukan perubahan tersebut.

---

# 5. UI / UX Design Direction

Eco App memiliki identitas visual:

**Natural + Modern + Clean + Premium + Local**

Desain harus terasa seperti platform travel modern, tetapi tetap memiliki identitas Papua dan lingkungan.

## Warna

Gunakan warna utama bernuansa:

* Forest Green
* Emerald Green
* Natural Green
* Earth Tone
* White
* Soft Gray

Gunakan warna secara konsisten.

Jangan menggunakan terlalu banyak warna mencolok.

## Visual

Prioritaskan:

* Foto alam berkualitas tinggi.
* Hutan.
* Laut.
* Pulau.
* Mangrove.
* Burung endemik Papua.
* Kampung.
* Masyarakat lokal.
* Aktivitas wisata.

Foto harus menjadi elemen penting dalam desain.

---

# 6. Design Principles

Setiap halaman harus memperhatikan:

### Visual Hierarchy

Informasi penting harus mudah ditemukan.

### Whitespace

Jangan membuat halaman terlalu padat.

### Cards

Gunakan card untuk:

* Destinasi
* Guide
* Homestay
* Experience
* Artikel
* Produk lokal

### Rounded UI

Gunakan border-radius yang modern dan konsisten.

### Icons

Gunakan `lucide-react` jika icon tersedia.

Jangan menggunakan emoji sebagai icon utama UI production.

Emoji boleh digunakan pada konten atau placeholder jika sesuai.

---

# 7. Responsive Design

Eco App harus mobile-first.

Minimal mendukung:

```text
Mobile
Tablet
Desktop
Large Desktop
```

Perhatikan:

* Navigation
* Hero
* Search
* Cards
* Map
* Gallery
* Buttons
* Forms
* Tables
* Dashboard

Tidak boleh ada horizontal overflow pada mobile kecuali komponen memang membutuhkan horizontal scrolling.

---

# 8. Website Structure

Struktur navigasi utama:

```text
Eco App
│
├── Beranda
│
├── Destinasi
│
├── Explore Map
│
├── Experience
│
├── Budaya
│
├── Homestay
│
├── Local Guide
│
├── Artikel
│
└── Kontak
```

---

# 9. Homepage

Homepage harus menjadi landing page utama Eco App.

Urutan section yang direkomendasikan:

```text
Navbar
│
├── Hero
│
├── Search Destination
│
├── Tourism Categories
│
├── Featured Destinations
│
├── Explore Map Preview
│
├── Experiences
│
├── Why Ecotourism?
│
├── Local Community
│
├── Culture / Stories
│
├── Articles
│
├── CTA
│
└── Footer
```

Hero harus memiliki visual alam yang kuat.

Contoh headline:

> **Explore Sorong Naturally**

Contoh supporting text:

> Temukan keindahan alam, budaya dan keramahan masyarakat Sorong, Papua Barat Daya.

---

# 10. Destination Module

Destination merupakan salah satu fitur inti.

Setiap destination minimal memiliki:

```text
id
name
slug
description
shortDescription
category
location
district
latitude
longitude
coverImage
gallery
rating
ecoScore
activities
facilities
transportation
travelTime
bestTime
internetAvailability
electricityAvailability
guideAvailability
homestayAvailability
status
createdAt
updatedAt
```

Jangan membuat field baru secara sembarangan jika database sudah tersedia.

---

# 11. Destination Detail Page

Halaman detail destinasi harus memberikan pengalaman seperti travel platform.

Struktur:

```text
Breadcrumb
│
├── Destination Header
│
├── Rating
│
├── Location
│
├── Category
│
├── Gallery
│
├── About Destination
│
├── Activities
│
├── Eco Information
│
├── Eco Score
│
├── Local Guide
│
├── Travel Information
│
└── CTA
```

Informasi harus mudah dipindai.

---

# 12. Eco Score

Eco App menggunakan konsep:

**Eco Score**

Contoh:

```text
Eco Score
92 / 100

Conservation       ★★★★★
Community Impact   ★★★★★
Waste Management   ★★★★☆
Biodiversity       ★★★★★
```

Eco Score harus digunakan untuk memberikan edukasi mengenai keberlanjutan, bukan sekadar rating popularitas.

Jangan mengklaim suatu destinasi memiliki skor tertentu jika data belum tersedia.

Gunakan data dummy hanya pada tahap development dan tandai sebagai mock/demo data.

---

# 13. Explore Map

Explore Map merupakan fitur utama.

Map harus dapat menampilkan:

* Destination markers
* Destination categories
* Location
* Basic information
* Link ke detail destinasi

Gunakan Leaflet + OpenStreetMap jika memungkinkan.

Jangan mengekspos API key atau secret ke client.

---

# 14. Local Guide

Local Guide merupakan bagian penting dari konsep pemberdayaan masyarakat.

Data guide dapat berisi:

```text
name
photo
location
bio
languages
specialties
rating
phone
whatsapp
status
```

UI harus memberikan kesan terpercaya dan profesional.

CTA utama:

**Hubungi via WhatsApp**

Jangan menampilkan nomor pribadi jika data tersebut belum diberikan atau belum diizinkan untuk dipublikasikan.

---

# 15. Homestay

Homestay ditujukan untuk mempromosikan akomodasi yang dikelola masyarakat lokal.

Informasi:

```text
name
location
description
images
price
facilities
owner
contact
rating
status
```

Harga harus ditampilkan sebagai data aktual hanya jika tersedia.

Jika masih mockup, gunakan label:

**Harga mulai dari...**

atau

**Informasi harga tersedia melalui pengelola.**

---

# 16. Culture

Culture section digunakan untuk memperkenalkan:

* Tradisi
* Sejarah
* Tarian
* Bahasa
* Kuliner
* Kerajinan
* Festival
* Cerita masyarakat
* Kearifan lokal

Jangan membuat klaim budaya atau sejarah yang tidak memiliki sumber.

Jika informasi belum diverifikasi, gunakan placeholder atau data sementara.

---

# 17. Community Empowerment

Eco App harus menempatkan masyarakat lokal sebagai bagian penting dari platform.

CTA yang dapat digunakan:

```text
Daftarkan Kampung Wisata
Tawarkan Homestay
Jadilah Local Guide
Promosikan Produk Lokal
```

Tujuannya adalah:

**Tourism → Community → Economic Impact → Conservation**

---

# 18. Content Guidelines

Konten harus:

* Informatif.
* Singkat.
* Mudah dipahami.
* Ramah wisatawan.
* Tidak berlebihan.
* Tidak membuat klaim palsu.

Gunakan Bahasa Indonesia untuk konten utama.

Bahasa Inggris dapat digunakan untuk elemen branding atau multilingual feature jika diperlukan.

Contoh:

```text
Explore Sorong Naturally
Temukan keindahan alam, budaya dan keramahan masyarakat Sorong.
```

---

# 19. Data Integrity

AI tidak boleh mengarang:

* Nama destinasi.
* Koordinat.
* Harga.
* Nomor telepon.
* Nama guide.
* Rating.
* Review.
* Data statistik.
* Informasi budaya.
* Informasi transportasi.

Jika data belum tersedia:

```text
TODO
Mock Data
Placeholder
Data belum tersedia
```

harus digunakan secara jelas.

---

# 20. Image Guidelines

Gambar sangat penting dalam Eco App.

Gunakan gambar yang:

* Relevan dengan lokasi.
* Berkualitas tinggi.
* Memiliki rasio yang sesuai.
* Tidak merusak layout.

Gunakan `next/image` jika menggunakan Next.js.

Pastikan:

* `alt` tersedia.
* Width/height/aspect ratio ditentukan.
* Lazy loading digunakan untuk gambar yang tidak berada di viewport awal.

---

# 21. Accessibility

Setiap halaman harus memperhatikan accessibility.

Minimal:

* Semantic HTML.
* Alt text.
* Keyboard navigation.
* Focus state.
* Button yang jelas.
* Contrast yang cukup.
* Label pada form.
* ARIA hanya jika memang diperlukan.

Jangan menggunakan `<div>` sebagai button jika `<button>` dapat digunakan.

---

# 22. Component Architecture

Gunakan komponen reusable.

Contoh:

```text
components/
│
├── layout/
│   ├── Navbar
│   ├── Footer
│   └── MobileMenu
│
├── home/
│   ├── Hero
│   ├── CategoryList
│   ├── FeaturedDestinations
│   ├── ExperienceSection
│   └── CommunitySection
│
├── destination/
│   ├── DestinationCard
│   ├── DestinationGrid
│   ├── DestinationGallery
│   ├── DestinationInfo
│   ├── EcoScore
│   └── TravelInfo
│
├── guide/
│   └── GuideCard
│
├── homestay/
│   └── HomestayCard
│
└── map/
    └── ExploreMap
```

Nama komponen harus menggambarkan tanggung jawabnya.

Hindari komponen terlalu besar.

---

# 23. State Management

Gunakan state lokal jika state hanya digunakan oleh satu komponen.

Gunakan Context atau state management lain jika state digunakan lintas halaman/fitur.

Jangan menambahkan library state management hanya untuk kebutuhan sederhana.

---

# 24. API Rules

API harus:

* Memiliki struktur response yang konsisten.
* Memvalidasi input.
* Menangani error.
* Tidak membocorkan secret.
* Tidak mengembalikan data sensitif.

Contoh response:

```json
{
  "success": true,
  "data": {},
  "message": "Destination retrieved successfully"
}
```

Error:

```json
{
  "success": false,
  "data": null,
  "message": "Destination not found"
}
```

---

# 25. Environment Variables

Secret dan API key tidak boleh ditulis langsung di source code.

Gunakan:

```text
.env.local
```

Contoh:

```env
DATABASE_URL=
NEXT_PUBLIC_MAP_URL=
SUPABASE_URL=
SUPABASE_ANON_KEY=
```

Jangan commit:

```text
.env
.env.local
.env.production
```

ke repository.

Pastikan `.gitignore` sudah benar.

---

# 26. Security

AI harus memperhatikan:

* Input validation
* Authentication
* Authorization
* SQL injection
* XSS
* CSRF jika relevan
* File upload validation
* Rate limiting jika diperlukan
* Secret management

Jangan menyimpan password dalam plain text.

Jangan mempercayai input dari client.

---

# 27. Admin Dashboard

Dashboard admin harus menggunakan layout yang berbeda dari public website jika diperlukan.

Fokus dashboard:

```text
Dashboard
│
├── Statistics
├── Destinations
├── Guides
├── Homestays
├── Kampung Wisata
├── Products
├── Articles
├── Culture
├── Reviews
└── Users
```

Dashboard harus tetap responsive.

---

# 28. Mock Data

Pada tahap awal, mock data diperbolehkan.

Mock data harus:

* Mudah dibedakan dari production data.
* Tidak menggunakan informasi pribadi nyata.
* Tidak membuat klaim seolah-olah data tersebut sudah terverifikasi.

Contoh:

```text
Demo Guide
Demo Homestay
Sample Destination
Mock Review
```

---

# 29. Coding Style

Gunakan:

* TypeScript
* Functional Components
* Hooks
* Clean naming
* Reusable components

Nama variable:

```ts
const destinationName = "...";
```

bukan:

```ts
const dn = "...";
```

Gunakan nama yang jelas.

---

# 30. Error Handling

Jangan membiarkan error menghasilkan halaman kosong.

Setiap fitur penting harus memiliki:

```text
Loading State
Empty State
Error State
Success State
```

Contoh:

```text
Loading...
Destinasi belum tersedia.
Gagal memuat destinasi.
Destinasi berhasil dimuat.
```

---

# 31. SEO

Setiap halaman publik harus memperhatikan SEO.

Gunakan:

* Page title
* Meta description
* Open Graph
* Semantic HTML
* Clean URL
* Sitemap
* Robots
* Structured data jika relevan

Contoh URL:

```text
/destinasi
/destinasi/klasow-valley
/destinasi/pulau-doom
/guide
/homestay
/budaya
/artikel
```

Hindari URL seperti:

```text
/page?id=123
```

jika slug dapat digunakan.

---

# 32. Performance

Prioritaskan:

* Image optimization
* Lazy loading
* Code splitting
* Server rendering jika sesuai
* Caching
* Minimal JavaScript
* Reusable components

Jangan menambahkan library besar jika fitur dapat dibuat menggunakan library yang sudah tersedia atau native functionality.

---

# 33. Git Workflow

Gunakan commit yang jelas.

Contoh:

```text
feat: add destination listing
feat: add explore map
feat: add local guide section
fix: mobile navigation issue
fix: destination image loading
refactor: improve destination card
docs: update README
style: improve homepage layout
```

Jangan menggunakan commit seperti:

```text
update
fix
test
coba
aaa
```

---

# 34. Before Making Changes

Sebelum coding:

1. Baca `README.md`.
2. Baca `AGENTS.md`.
3. Periksa struktur project.
4. Cari komponen yang sudah ada.
5. Cari route yang berkaitan.
6. Periksa dependency.
7. Pahami data model yang sudah tersedia.
8. Tentukan file yang benar-benar perlu diubah.

Jangan membuat ulang komponen yang sudah tersedia.

---

# 35. After Making Changes

Setelah coding:

1. Periksa TypeScript error.
2. Jalankan lint jika tersedia.
3. Jalankan build jika perubahan cukup besar.
4. Periksa responsive layout.
5. Periksa console error.
6. Pastikan route dapat diakses.
7. Pastikan tidak ada secret yang ikut ter-commit.
8. Jelaskan file yang berubah.

---

# 36. Don't Overengineer

Prioritaskan solusi sederhana.

Jangan:

* Menambahkan library tanpa alasan.
* Membuat abstraction terlalu dini.
* Membuat sistem kompleks untuk kebutuhan sederhana.
* Mengubah seluruh architecture hanya untuk satu fitur.

Prinsip:

> **Simple first, scalable when needed.**

---

# 37. Development Priority

Prioritas pengembangan Eco App:

### Phase 1 — Foundation

```text
Project Setup
Navbar
Footer
Global Styling
Responsive Layout
```

### Phase 2 — Public Website

```text
Homepage
Destinations
Destination Detail
Explore Map
Experience
Culture
```

### Phase 3 — Community

```text
Local Guide
Homestay
Kampung Wisata
UMKM / Products
```

### Phase 4 — Content

```text
Articles
Stories
Gallery
Conservation
Eco Score
```

### Phase 5 — Backend

```text
Database
API
Authentication
Admin Dashboard
CRUD
```

### Phase 6 — Advanced

```text
Reviews
Favorites
Trip Planner
Booking
Payment
Marketplace
Analytics
```

Jangan mengimplementasikan Phase berikutnya sebelum foundation Phase sebelumnya cukup stabil, kecuali user secara eksplisit meminta.

---

# 38. Current Product Vision

Eco App harus terasa seperti:

```text
Modern Travel Platform
        +
Ecotourism Platform
        +
Local Community Platform
        +
Conservation Information Platform
```

Bukan:

```text
Generic Tourism Blog
```

---

# 39. Important Product Principle

Setiap fitur baru harus dapat menjawab minimal salah satu pertanyaan:

### Untuk wisatawan

> "Apakah fitur ini membantu wisatawan menemukan, memahami, atau menikmati destinasi?"

### Untuk lingkungan

> "Apakah fitur ini membantu mendorong wisata yang lebih bertanggung jawab?"

### Untuk masyarakat

> "Apakah fitur ini dapat membantu masyarakat lokal mendapatkan manfaat dari pariwisata?"

Jika jawabannya tidak, pertimbangkan kembali apakah fitur tersebut diperlukan.

---

# 40. AI Agent Behavior

Ketika menerima task dari developer/user:

### Jika task jelas

Langsung implementasikan.

### Jika terdapat beberapa kemungkinan implementasi

Pilih solusi yang:

1. Paling sederhana.
2. Konsisten dengan architecture.
3. Konsisten dengan UI Eco App.
4. Mudah dikembangkan.
5. Tidak merusak fitur existing.

### Jika task berisiko merusak architecture

Jelaskan risiko terlebih dahulu sebelum melakukan perubahan besar.

### Jangan

* Menghapus fitur existing tanpa alasan.
* Mengubah database secara destruktif.
* Mengganti framework.
* Mengganti design system.
* Menghapus dependency yang masih digunakan.
* Mengubah environment production.
* Menghapus data production.

tanpa instruksi eksplisit.

---

# 41. Definition of Done

Sebuah task dianggap selesai apabila:

```text
[ ] Feature berhasil dibuat
[ ] Responsive
[ ] Tidak ada TypeScript error
[ ] Tidak ada console error
[ ] UI konsisten dengan Eco App
[ ] Accessibility dasar diperhatikan
[ ] Loading state tersedia jika diperlukan
[ ] Empty state tersedia jika diperlukan
[ ] Error state tersedia jika diperlukan
[ ] Tidak ada secret/API key yang bocor
[ ] Existing feature tetap berjalan
[ ] Dokumentasi diperbarui jika diperlukan
```

---

# 42. Final Instruction to AI Agent

Sebelum melakukan perubahan pada Eco App, selalu ingat:

> **Eco App bukan hanya website wisata.**
>
> Eco App adalah platform digital yang menghubungkan **alam, budaya, wisatawan, dan masyarakat lokal**.

Prioritaskan:

**🌿 Nature**

**🎭 Culture**

**🤝 Community**

**♻️ Sustainability**

**💻 Technology**

dan selalu jaga keseimbangan antara **desain yang menarik, pengalaman pengguna yang baik, kode yang bersih, dan arsitektur yang dapat dikembangkan.**

---

# 🌿 Eco App

**Explore Nature. Preserve Culture. Empower Local.**

**Sorong, Papua Barat Daya — Indonesia**
