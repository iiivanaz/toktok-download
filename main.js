/* ======== i18n (tambahkan key baru di bawah) ======== */
const i18n = {
  id: {
    nav_downloader: "Downloader",
    nav_fitur: "Fitur",
    nav_howto: "Cara Pakai",
    nav_faq: "FAQ",
    hero_h1: "TikTok Save by Ivan",
    hero_sub: "Tanpa watermark • Cepat • Gratis",
    input_placeholder: "Tempel tautan TikTok di sini...",
    download_btn: "Unduh Video",
    fitur_h2: "Kenapa Pilih Kami?",
    fitur_1_title: "Super Cepat",
    fitur_1_desc: "Proses unduh hanya hitungan detik tanpa antre.",
    fitur_2_title: "Aman & Privasi",
    fitur_2_desc: "Tidak perlu login, tidak menyimpan data Anda.",
    fitur_3_title: "Semua Perangkat",
    fitur_3_desc: "Bisa dipakai di HP, tablet, PC, atau browser mana pun.",
    cara_h2: "Cara Pakai",
    cara_1_t: "Buka TikTok",
    cara_1_d: "Ketuk Bagikan → Salin Tautan.",
    cara_2_t: "Tempel Tautan",
    cara_2_d: "Kembali ke situs ini, paste di kotak input.",
    cara_3_t: "Klik Unduh",
    cara_3_d: "Tunggu 2 detik, video akan terunduh otomatis.",
    faq_h2: "Pertanyaan Umum",
    faq_1_q: "Apakah harus bayar?",
    faq_1_a: "100 % gratis, tidak ada batasan jumlah unduhan.",
    faq_2_q: "Apakah aman untuk HP saya?",
    faq_2_a: "Ya, tidak perlu instal apapun, cuma pakai browser.",
    faq_3_q: "Bisa unduh MP3 juga?",
    faq_3_a: "Sekarang hanya video MP4; fitur MP3 akan menyusul.",
    footer_note: "Tidak berafiliasi dengan TikTok / Bytedance.",
    status_processing: "Memproses...",
    status_downloading: "Mengunduh...",
    status_failed: "Gagal. Tautan tidak valid / API terblokir.",
    status_error: "Kesalahan server.",
  },
  en: {
    nav_downloader: "Downloader",
    nav_fitur: "Features",
    nav_howto: "How to Use",
    nav_faq: "FAQ",
    hero_h1: "TikTok Save by Ivan",
    hero_sub: "No watermark • Fast • Free",
    input_placeholder: "Paste TikTok link here...",
    download_btn: "Download Video",
    fitur_h2: "Why Choose Us?",
    fitur_1_title: "Super Fast",
    fitur_1_desc: "Download finished in seconds, no queue.",
    fitur_2_title: "Safe & Private",
    fitur_2_desc: "No login required, we store nothing.",
    fitur_3_title: "All Devices",
    fitur_3_desc: "Works on mobile, tablet, PC, any browser.",
    cara_h2: "How to Use",
    cara_1_t: "Open TikTok",
    cara_1_d: "Tap Share → Copy Link.",
    cara_2_t: "Paste Link",
    cara_2_d: "Come back here, paste into the input box.",
    cara_3_t: "Click Download",
    cara_3_d: "Wait 2 seconds, video will be saved automatically.",
    faq_h2: "Frequently Asked",
    faq_1_q: "Is it free?",
    faq_1_a: "100 % free, no download limit.",
    faq_2_q: "Is it safe for my phone?",
    faq_2_a: "Yes, no installation needed, just browser.",
    faq_3_q: "Can I download MP3 too?",
    faq_3_a: "Currently MP4 only; MP3 feature coming soon.",
    footer_note: "Not affiliated with TikTok / Bytedance.",
    status_processing: "Processing...",
    status_downloading: "Downloading...",
    status_failed: "Failed. Link invalid / API blocked.",
    status_error: "Server error.",
  },
};

/* ======== bahasa & section switch ======== */
let currentLang = "id";
function applyLang(lang) {
  currentLang = lang;
  document.querySelectorAll("[data-text]").forEach((el) => {
    const key = el.dataset.text;
    if (i18n[lang][key]) el.textContent = i18n[lang][key];
  });
  document.querySelectorAll("[data-placeholder]").forEach((el) => {
    const key = el.dataset.placeholder;
    if (i18n[lang][key]) el.placeholder = i18n[lang][key];
  });
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}
document.querySelectorAll(".lang-switch button").forEach((btn) => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang));
});

/* ---------- section navigation ---------- */
const sectionBtns = document.querySelectorAll("[data-section]");
const sections = document.querySelectorAll(".section");
function goToSection(id) {
  sections.forEach((s) => s.classList.toggle("active", s.id === id));
  sectionBtns.forEach((b) => b.classList.toggle("active", b.dataset.section === id));
}
sectionBtns.forEach((btn) => {
  btn.addEventListener("click", () => goToSection(btn.dataset.section));
});

/* ---------- sticky topbar solid on scroll ---------- */
window.addEventListener("scroll", () => {
  document.getElementById("topbar").classList.toggle("solid", window.scrollY > 60);
});

/* ---------- accordion ---------- */
document.querySelectorAll(".ask").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const ans = btn.nextElementSibling;
    ans.classList.toggle("open");
  });
});

/* ---------- downloader (tiktok) ---------- */
document.getElementById("download-btn").addEventListener("click", async () => {
  const url = document.getElementById("input-url").value.trim();
  const status = document.getElementById("status");
  if (!url) return (status.textContent = "Masukkan tautan dulu / Please enter a link");
  status.textContent = i18n[currentLang].status_processing;
  try {
    const res = await fetch("https://www.tikwm.com/api/", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
      body: `url=${encodeURIComponent(url)}&hd=1`,
    });
    const data = await res.json();
    if (data.data && data.data.play) {
      status.textContent = i18n[currentLang].status_downloading
