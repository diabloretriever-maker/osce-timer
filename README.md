# Timer OSCE

Timer berbasis suara untuk ujian OSCE dengan tiga fase per stasiun: membaca soal, ujian di dalam ruangan, dan pindah ke stasiun berikutnya.

Buka: https://diabloretriever-maker.github.io/osce-timer/

## Fitur

- Jumlah stasiun dan durasi tiap fase bisa diatur (menit dan detik). Fase dengan durasi 0 dilewati.
- Bel dan pengumuman suara bahasa Indonesia di setiap pergantian fase.
- Peringatan 30 detik sampai 5 menit sebelum waktu ujian habis.
- Jeda, lanjut, mundur, dan lompat ke fase berikutnya.
- Mode layar penuh dengan hitung mundur besar untuk proyektor atau TV.
- Preset pengaturan tersimpan di browser.
- Setelah dibuka sekali, tetap jalan tanpa internet.

## Pintasan keyboard

| Tombol | Fungsi |
|---|---|
| Spasi | Mulai / jeda / lanjut |
| → | Fase berikutnya |
| ← | Mundur ke awal fase (tekan dua kali untuk fase sebelumnya) |
| F | Layar penuh |

## Urutan per stasiun

Membaca soal → Ujian → Pindah stasiun. Setelah stasiun terakhir tidak ada fase pindah; timer langsung mengumumkan bahwa ujian selesai.

## Tips saat ujian

- Sambungkan ke speaker yang cukup keras dan tekan "Tes" sebelum ujian dimulai.
- Jangan tutup tab selama ujian. Layar dijaga tetap menyala otomatis di browser yang mendukung.
- Di iPhone/iPad, matikan mode senyap.

## Mengganti rekaman suara

File suara ada di folder `audio/`. Ganti file `.mp3` dengan nama yang sama untuk memakai rekaman sendiri.
