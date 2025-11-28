/* ======== i18n baru (tambahkan key baru) ======== */
const i18n = {
  id: {
    nav_downloader: "Downloader",
    nav_fitur: "Fitur",
    nav_howto: "Cara Pakai",
    nav_faq: "FAQ",
    hero_h1: "TikTok Save by Ivan",
    hero_sub: "Tanpa watermark · Cepat · Gratis",
    input_placeholder: "Tempel tautan TikTok di sini...",
    download_btn: "Unduh Video",
    desc_h2: "Mengapa Anda mengunduh video & foto TikTok dengan TikTok Save?",
    desc_p1:
      "Karena dengan TikTok Save memungkinkan Anda mengunduh video dari TikTok tanpa logo, tanpa watermark. Simpan dan unduh video TikTok di peramban web, tidak perlu menginstal perangkat lunak atau ekstensi apa pun.",
    desc_p2:
      "TikTok Save Downloader tidak menyimpan video, juga tidak menyimpan salinan video yang telah diunduh. Semua video tersimpan di server TikTok. Selain itu, alat ini tidak mengumpulkan data atau melacak riwayat unduhan pengguna. Itulah mengapa menggunakan Save TikTok sepenuhnya anonim.",
    desc_p3:
      "Dengan TikTok Save, alat ini akan membantu Anda mengunduh setiap gambar atau video TikTok ke perangkat Anda dengan mudah dan cepat. Kami akan terus meningkatkan perangkat lunak untuk memberikan pengalaman pengguna terbaik! Silakan bagikan alat ini dengan teman dan kerabat untuk digunakan. Terima kasih!",
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
    cara_3_t: "Pilih Resolusi & Unduh",
    cara_3_d: "Pilih 720p/1080p lalu klik Unduh.",
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
    hero_sub: "No watermark · Fast · Free",
    input_placeholder: "Paste TikTok link here...",
    download_btn: "Download Video",
    desc_h2: "Why download TikTok videos & photos with TikTok Save?",
    desc_p1:
      "TikTok Save lets you download TikTok videos without logo, without watermark. Save and download TikTok videos in your browser – no software or extension required.",
    desc_p2:
      "TikTok Save Downloader does not store videos, nor keep copies of downloaded videos. All videos stay on TikTok servers. Besides, the tool neither collects data nor tracks user download history. Hence, Save TikTok is completely anonymous.",
    desc_p3:
      "With TikTok Save we help you download any TikTok image or video to your device quickly and easily. We keep improving the software to give you the best experience! Please share this tool with friends and relatives. Thank you!",
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
    cara_3_t: "Choose Quality & Download",
    cara_3_d: "Pick 720p/1080p then click Download.",
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

/* ---------- bahasa ---------- */
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

/* ---------- navbar scroll spy ---------- */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let cur = "";
  sections.forEach((sec) => {
    const top = sec.offsetTop - 100;
    if (scrollY >= top) cur = sec.getAttribute("id");
  });
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + cur);
  });
  document.getElementById("navbar").classList.toggle("solid", window.scrollY > 60);
});

/* ---------- accordion ---------- */
document.querySelectorAll(".ask").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const ans = btn.nextElementSibling;
    ans.classList.toggle("open");
  });
});

/* ---------- downloader + baca resolusi ---------- */
document.getElementById("download-btn").addEventListener("click", async () => {
  const url = document.getElementById("input-url").value.trim();
  const res = document.querySelector('input[name="res"]:checked').value; // 720 atau 1080
  const status = document.getElementById("status");
  if (!url) return (status.textContent = "Masukkan tautan dulu / Please enter a link");
  status.textContent = i18n[currentLang].status_processing;
  try {
    const resApi = await fetch("https://www.tikwm.com/api/", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
      body: `url=${encodeURIComponent(url)}&hd=${res}`,
    });
    const data = await resApi.json();
    if (data.data && data.data.play) {
      status.textContent = i18n[currentLang].status_downloading;
      window.open(data.data.play, "_blank");
    } else {
      status.textContent = i18n[currentLang].status_failed;
    }
  } catch {
    status.textContent = i18n[currentLang].status_error;
  }
});

/* footer tahun */
document.getElementById("thn").textContent = new Date().getFullYear();

/* init */
applyLang(currentLang);
