# Catatan Workshop Day 1

**Tema:** Building with AI, Managing Change with GitHub
**Pemateri:** Nugi Farhan (Senior Product Designer)
**Peserta:** Rava Nayla Ryanti Pribadi, Kelompok 25 My Talking Tom

---

## 1. Materi atau Topik yang Disampaikan

1. Prompt engineering
2. Git: version control system
3. Alur kerja Git (working directory, staging area, repository)
4. Git vs GitHub
5. Perintah dasar Git dan GitHub
6. Setup Git, VS Code, dan koneksi ke GitHub (SSH)
7. Praktik: membuat Student Task Planner dengan AI, lalu mengunggahnya ke GitHub

### Capaian yang ditargetkan
- Menjelaskan bagaimana prompt AI yang lebih spesifik menghasilkan hasil yang lebih baik.
- Membedakan Git dan GitHub.
- Mengidentifikasi repository, commit, branch, dan pull request.
- Melakukan version control.

---

## 2. Catatan dan Rangkuman Materi

### 2.1 Prompt Engineering
**Prompt** adalah instruksi atau masukan yang diberikan kepada model AI untuk mendapatkan hasil tertentu. Bentuknya bisa berupa pertanyaan sederhana, kata kunci, instruksi yang rumit, atau potongan kode.

**Prompt engineering** adalah cara merancang instruksi agar AI memberikan jawaban yang tepat, relevan, dan layak digunakan.

**Konteks itu kunci.** Prompt "Create student task planner" terlalu umum, sehingga AI harus menebak sendiri. Prompt yang menjelaskan siapa pengguna, fitur yang dibutuhkan, dan batasannya menghasilkan hasil yang jauh lebih sesuai.

**Struktur prompt yang baik:**

| Bagian | Fungsi | Contoh dari workshop |
|---|---|---|
| Role | Peran yang diberikan ke AI | "You are helping me build a beginner-friendly student task planner..." |
| Task | Tujuan yang ingin dicapai | Membuat task planner untuk mahasiswa baru |
| Context | Kebutuhan dan batasan | Daftar tugas, filter, HTML/CSS/vanilla JS, tanpa library tambahan |
| Format | Bentuk hasil yang diinginkan | Kode lengkap tiap file, cara menjalankan, cara mengetes |

**Taktik menulis prompt:**
- Gunakan kata kerja yang jelas untuk aksi yang diminta.
- Tentukan panjang dan format hasil.
- Sebutkan target audiens.
- Sertakan fakta dan data yang relevan.
- Rujuk dokumen atau sumber tertentu.
- Jelaskan istilah dan konsep penting.

**Keuntungan prompt engineering:**
- Meningkatkan performa model AI.
- Mengurangi bias dan respons yang offensive.
- Meningkatkan kontrol dan prediktabilitas hasil.
- Memberikan pengalaman pengguna yang lebih baik.

### 2.2 Apa itu Git
Git adalah **version control system** yang melacak siapa, kapan, dan apa saja yang berubah dalam suatu file. Git dibuat oleh Linus Torvalds pada tahun 2005.

### 2.3 Alur Kerja Git
Ada tiga area utama:

| Area | Penjelasan |
|---|---|
| **Working directory** | Salinan satu versi proyek yang sedang dikerjakan di komputer. File di sini yang kita ubah langsung. |
| **Staging area (index)** | Tempat menyimpan informasi perubahan apa saja yang akan masuk ke commit berikutnya. |
| **Git directory (repository)** | Tempat Git menyimpan metadata dan database objek proyek. Bagian inilah yang disalin saat `git clone`. |

Alurnya: ubah file di working directory, lalu `git add` (ke staging area), lalu `git commit` (ke repository).

### 2.4 Git vs GitHub

| | Git | GitHub |
|---|---|---|
| Jenis | Sistem version control terdistribusi (DVCS) | Platform berbasis web |
| Fungsi | Melacak dan mengelola perubahan kode secara **lokal** | Menyimpan repository Git secara **online** dan mendukung kolaborasi |

Git adalah alatnya, GitHub adalah tempat menyimpan dan berkolaborasi.

### 2.5 Perintah Dasar

| Perintah | Fungsi |
|---|---|
| `git init` | Memulai repository baru di folder |
| `git clone "url"` | Menyalin repository dari GitHub ke komputer |
| `git add .` | Memasukkan perubahan ke staging area |
| `git add -A` / `git add --all` | Memasukkan semua perubahan (baru, diubah, dihapus) ke staging area |
| `git commit -m "pesan"` | Menyimpan perubahan di staging area ke repository |
| `git remote add <nama> <url>` | Menghubungkan repository lokal ke repository di GitHub |
| `git push origin main` | Mengirim commit dari lokal ke GitHub |
| `git pull origin main` | Mengambil perubahan dari GitHub dan menggabungkannya ke branch saat ini |

### 2.6 Setup
1. Install Git, lalu cek dengan `git --version`.
2. Atur identitas Git:
   ```
   git config --global user.name "Nama Kamu"
   git config --global user.email "email@example.com"
   ```
3. Cek konfigurasi dengan `git config --global --list`.
4. Install VS Code dan cek dengan `code --version`.
5. Hubungkan ke GitHub. Di workshop memakai SSH key (`ssh-keygen -t ed25519 -C "email"`, lalu menambahkan public key di pengaturan SSH keys GitHub, dan mengecek dengan `ssh -T git@github.com`). Untuk Windows, bisa juga memakai alamat HTTPS.

---

## 3. Poin Penting dan Pengetahuan Baru

- Prompt yang spesifik (ada peran, tujuan, konteks, format) menghasilkan hasil AI yang lebih baik daripada prompt singkat.
- Hasil dari AI perlu dicek sendiri. Prompt contoh bahkan meminta AI tidak mengklaim aplikasinya berfungsi sebelum perilakunya diverifikasi.
- Git bekerja lokal, GitHub menyimpan online. Keduanya saling melengkapi, tapi bukan hal yang sama.
- Commit yang sering dengan pesan yang jelas membuat riwayat perubahan mudah dilacak.
- Alur dasar yang diulang terus: ubah file, `add`, `commit`, `push`.

---

## 4. Praktik: Student Task Planner

Aplikasi web sederhana untuk membantu mahasiswa baru memantau tugas dan tenggat. Fiturnya:
- Daftar tugas contoh dengan judul, tanggal tenggat, dan status.
- Menandai tugas selesai.
- Filter All, Pending, dan Completed.
- Tampilan responsif.

Kode ada di folder [`student-task-planner`](./student-task-planner). Dibuat dengan HTML, CSS, dan JavaScript tanpa library tambahan, dengan bantuan AI (Claude) memakai prompt yang terstruktur seperti pada bagian 2.1.
