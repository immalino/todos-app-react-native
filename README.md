# Aplikasi Todo React Native dengan Expo & Convex

Aplikasi daftar tugas (todo list) lintas platform sederhana yang dibangun menggunakan React Native, Expo Router, dan Convex sebagai backend.

## Fitur

- **Buat, Baca, Perbarui, Hapus (CRUD) Tugas:** Tambah, lihat, edit, tandai selesai, dan hapus tugas.
- **Backend Realtime:** Menggunakan Convex untuk sinkronisasi data realtime di seluruh perangkat.
- **Navigasi Berbasis Tab:** Menggunakan Expo Router untuk navigasi tab antara layar Todos dan Pengaturan.
- **Manajemen State:** Menggunakan hook `useState` dan `useQuery`/`useMutation` dari Convex untuk mengelola state aplikasi dan data.
- **Styling Dinamis:** Menggunakan StyleSheet React Native dan hook kustom (`useTheme`) untuk tema terang/gelap yang dinamis.
- **Komponen UI Kustom:** Termasuk komponen seperti Header, TodoInput, EmptyState, ProgressStats, Preferences, dan DangerZone.
- **Pengaturan:**
  - Statistik Progres (Total, Selesai, Aktif).
  - Preferensi (Mode Gelap, Notifikasi [Placeholder], Auto Sync [Placeholder]).
  - Zona Bahaya (Reset Aplikasi - Hapus semua tugas).
- **Penanganan Loading & State Kosong:** Menampilkan indikator loading dan state kosong yang informatif.

## Tumpukan Teknologi

- **Frontend:**
  - React Native
  - Expo & Expo Router
  - TypeScript
  - Expo Vector Icons (@expo/vector-icons)
  - Expo Linear Gradient
- **Backend:**
  - Convex (Platform Backend Realtime)
- **Penyimpanan Lokal:**
  - AsyncStorage (untuk preferensi tema)

## Memulai

### Prasyarat

- Node.js (versi LTS direkomendasikan)
- npm atau pnpm (pnpm digunakan dalam lockfile)
- Akun Convex ([https://convex.dev](https://convex.dev))
- Expo Go app di perangkat seluler Anda atau simulator/emulator yang terpasang.

### Instalasi & Setup

1.  **Clone Repositori:**

    ```bash
    git clone https://github.com/immalino/todos-app-react-native
    cd todos-app-react-native
    ```

2.  **Instal Dependensi:**
    Jika menggunakan pnpm (berdasarkan `pnpm-lock.yaml`):

    ```bash
    pnpm install
    ```

    Atau jika menggunakan npm:

    ```bash
    npm install
    ```

3.  **Setup Convex:**
    - Instal Convex CLI: `npm install -g convex` atau `pnpm add -g convex`
    - Jalakan dan ikuti perintahnya untuk memulai inisiasi project: `npx convex dev`

4.  **Konfigurasi Variabel Lingkungan:**
    - Setelah menjalankan `npx convex dev`, `.env.local` akan tergenerate di root proyek.
    - Tampilannya akan seperti ini:

      ```env
      CONVEX_DEPLOYMENT=<OTOMATIS_TERGENERATE>

      EXPO_PUBLIC_CONVEX_URL=<OTOMATIS_TERGENERATE>
      ```

5.  **Jalankan Aplikasi:**

    ```bash
    npx expo start
    ```

    Ikuti instruksi di terminal untuk membuka aplikasi:
    - Di aplikasi Expo Go (scan QR code)
    - Di simulator iOS (`i`)
    - Di emulator Android (`a`)
    - Di browser web (`w`)

## Struktur Proyek

Tentu, berikut adalah draf README.md yang didokumentasikan untuk repositori Anda, berdasarkan file yang disediakan:

Markdown

# Aplikasi Todo React Native dengan Expo & Convex

Aplikasi daftar tugas (todo list) lintas platform sederhana yang dibangun menggunakan React Native, Expo Router, dan Convex sebagai backend.

## Fitur

- **Buat, Baca, Perbarui, Hapus (CRUD) Tugas:** Tambah, lihat, edit, tandai selesai, dan hapus tugas.
- **Backend Realtime:** Menggunakan Convex untuk sinkronisasi data realtime di seluruh perangkat.
- **Navigasi Berbasis Tab:** Menggunakan Expo Router untuk navigasi tab antara layar Todos dan Pengaturan.
- **Manajemen State:** Menggunakan hook `useState` dan `useQuery`/`useMutation` dari Convex untuk mengelola state aplikasi dan data.
- **Styling Dinamis:** Menggunakan StyleSheet React Native dan hook kustom (`useTheme`) untuk tema terang/gelap yang dinamis.
- **Komponen UI Kustom:** Termasuk komponen seperti Header, TodoInput, EmptyState, ProgressStats, Preferences, dan DangerZone.
- **Pengaturan:**
  - Statistik Progres (Total, Selesai, Aktif).
  - Preferensi (Mode Gelap, Notifikasi [Placeholder], Auto Sync [Placeholder]).
  - Zona Bahaya (Reset Aplikasi - Hapus semua tugas).
- **Penanganan Loading & State Kosong:** Menampilkan indikator loading dan state kosong yang informatif.

## Tumpukan Teknologi

- **Frontend:**
  - React Native
  - Expo & Expo Router
  - TypeScript
  - Expo Vector Icons (@expo/vector-icons)
  - Expo Linear Gradient
- **Backend:**
  - Convex (Platform Backend Realtime)
- **Penyimpanan Lokal:**
  - AsyncStorage (untuk preferensi tema)

## Memulai

### Prasyarat

- Node.js (versi LTS direkomendasikan)
- npm atau pnpm (pnpm digunakan dalam lockfile)
- Akun Convex ([https://convex.dev](https://convex.dev))
- Expo Go app di perangkat seluler Anda atau simulator/emulator yang terpasang.

### Instalasi & Setup

1.  **Clone Repositori:**

    ```bash
    git clone <URL_REPOSITORI_ANDA>
    cd <NAMA_DIREKTORI_PROYEK>
    ```

2.  **Instal Dependensi:**
    Jika menggunakan pnpm (berdasarkan `pnpm-lock.yaml`):

    ```bash
    pnpm install
    ```

    Atau jika menggunakan npm:

    ```bash
    npm install
    ```

3.  **Setup Convex:**
    - Instal Convex CLI: `npm install -g convex` atau `pnpm add -g convex`
    - Login ke akun Convex Anda: `npx convex login`
    - Inisialisasi Convex di proyek Anda (jika belum): `npx convex init`
    - Deploy fungsi backend: `npx convex deploy`
    - Dapatkan URL deployment Convex Anda dari dashboard Convex atau output CLI.

4.  **Konfigurasi Variabel Lingkungan:**
    - Buat file `.env` di root proyek.
    - Tambahkan URL Convex Anda:
      ```env
      EXPO_PUBLIC_CONVEX_URL=<URL_CONVEX_ANDA>
      ```

5.  **Jalankan Aplikasi:**

    ```bash
    npx expo start
    ```

    Ikuti instruksi di terminal untuk membuka aplikasi:
    - Di aplikasi Expo Go (scan QR code)
    - Di simulator iOS (`i`)
    - Di emulator Android (`a`)
    - Di browser web (`w`)
