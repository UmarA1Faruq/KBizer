# 🧩 Proyek Fullstack Monorepo (Next.js + Prisma + MySQL + CMS)

Proyek ini merupakan aplikasi web fullstack yang terdiri dari:

- 🔧 **Backend**: API dibangun dengan Next.js, Prisma ORM, dan MySQL
- 🌐 **Frontend**: Tampilan utama pengguna dengan Next.js
- 📝 **CMS (Admin Panel)**: Sistem manajemen konten, juga berbasis Next.js

---

## 📁 Struktur Direktori

```bash
├── 📁 backend/         # API dan server logic
├── 📁 frontend/        # Tampilan pengguna
│── 📁 Dokumentasi/     # Panduan & dokumentasi teknis
└── 📄 README.md        # Dokumentasi utama proyek
```

## ⚙️ Persyaratan

Sebelum memulai, pastikan kamu telah menginstal:

- [Node.js (v18+)](https://nodejs.org/)
- [MySQL Server](https://www.mysql.com/) atau bisa juga Web server lain (XAMPP, Laragon)
- [Yarn](https://classic.yarnpkg.com/lang/en/) atau `npm`
- (Opsional) [PNPM](https://pnpm.io) jika kamu menggunakan pnpm
- `.env` file untuk masing-masing bagian

---

## 🔧 Setup Awal

### 1. Clone Repository

```bash
git clone https://github.com/UmarA1Faruq/KBizer.git
cd KBizer/ 
```

### 2. Install Dependency & Jalankan Program

**Backend**
```bash
cd backend/
npm install # jika menggunakan npm
```
Setup environment backend:
- Salin file `.env.example` lalu ubah menjadi `.env`
- jalankan perintah `npx prisma migrate dev --name init`

| Jalankan Program: `npm run dev`
Backend berjalan di: `localhost:3001`

**Frontend**

```bash
cd frontend/
npm install # jika menggunakan npm
```

| Jalankan Program: `npm run dev`


**CMS**

```bash
cd cms/
npm install # jika menggunakan npm
```

| Jalankan Program: `npm run dev`
