// --- 1. DATA PROYEK (CENTRALIZED) ---
const projectsData = [
  {
    id: 1,
    image: "asset/images/project-apotek.jpg",
    title: "Sistem Informasi Manajemen Stok Obat Apotek Restu Ibu",
    description:
      "Aplikasi manajemen stok obat berbasis web untuk Apotek Restu Ibu. Membantu apoteker memantau jumlah stok, kategori obat, dan status ketersediaan secara real-time, lengkap dengan notifikasi otomatis saat stok menipis serta rekap laporan untuk kebutuhan administrasi apotek.",
    liveDemo: "#",
    githubLink: "#",
    screenshots: ["asset/images/project-apotek.jpg"],
    features: [
      "Dashboard Monitoring Stok Real-time",
      "Notifikasi Otomatis Saat Stok Menipis",
      "Kelola Data & Kategori Obat",
      "Cetak Laporan Stok",
      "Riwayat Aktivitas & Barang Dihapus",
    ],
    technologies: ["PHP", "Bootstrap", "MySQL", "JavaScript"],
  },
  {
    id: 2,
    image: "asset/images/project-perfume.jpg",
    title: "Website Rekomendasi Parfum Berbasis Content-Based Filtering",
    description:
      "Website yang membantu pengguna menemukan parfum terbaik sesuai kepribadian mereka. Sistem rekomendasi dibangun menggunakan pendekatan Content-Based Filtering dengan perhitungan Cosine Similarity, mencocokkan parfum berdasarkan karakteristik aroma, aktivitas, dan waktu penggunaan.",
    liveDemo: "#",
    githubLink: "#",
    screenshots: ["asset/images/project-perfume.jpg"],
    features: [
      "Rekomendasi Personalisasi Berbasis Preferensi Pengguna",
      "Algoritma Content-Based Filtering & Cosine Similarity",
      "Filter Berdasarkan Aroma, Aktivitas & Waktu Pemakaian",
      "Autentikasi & Login Pengguna",
    ],
    technologies: ["Python", "Flask", "Scikit-learn", "Bootstrap"],
  },
  {
    id: 3,
    image: "asset/images/project-carmarket-bi.png",
    title: "Dashboard Business Intelligence Analisis Pasar Mobil Bekas",
    description:
      "Dashboard interaktif yang menganalisis tren pasar mobil bekas, mencakup perbandingan rata-rata harga antar merek, pergerakan harga bulanan, segmentasi bahan bakar, hingga jumlah listing per tipe kendaraan, untuk mendukung pengambilan keputusan berbasis data.",
    liveDemo: "#",
    githubLink: "#",
    screenshots: ["asset/images/project-carmarket-bi.png"],
    features: [
      "Analisis Tren Harga Pasar Bulanan",
      "Perbandingan Harga Rata-rata Antar Merek",
      "Segmentasi Berdasarkan Bahan Bakar & Tipe Mobil",
      "Visualisasi KPI & Grafik Interaktif",
    ],
    technologies: ["Power BI", "SQL", "Excel", "DAX"],
  },
  {
    id: 4,
    image: "asset/images/velio.jpg",
    title: "Website PT Velio Mobili",
    description:
      "Velio Mobili adalah website interior dan custom furniture yang menyajikan katalog produk, hasil pekerjaan, serta layanan konsultasi.",
    liveDemo: "#",
    githubLink: "#",
    screenshots: ["asset/images/velio.jpg", "asset/images/project-velio-uiux.jpg"],
    features: ["Katalog Furniture", "Portofolio Project", "Form Konsultasi"],
    technologies: ["HTML", "Bootstrap", "JavaScript"],
  },
];

// Menunggu semua konten HTML dimuat sebelum menjalankan script
document.addEventListener("DOMContentLoaded", () => {
  // --- Variabel ---
  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileLinks = document.querySelectorAll(".mobile-link");
  const sections = document.querySelectorAll("section");

  // --- Logika Efek Scroll ---
  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    let currentSectionId = "Home";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 150) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });

    mobileLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  // --- Logika Menu Mobile ---
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    if (mobileMenu.classList.contains("open")) {
      menuToggle.textContent = "X";
      document.body.style.overflow = "hidden";
    } else {
      menuToggle.textContent = "☰";
      document.body.style.overflow = "unset";
    }
  });

  const allLinks = document.querySelectorAll(".mobile-link, .nav-link");
  allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (mobileMenu.classList.contains("open")) {
        mobileMenu.classList.remove("open");
        menuToggle.textContent = "☰";
        document.body.style.overflow = "unset";
      }
    });
  });

  // ======== KODE UNTUK SECTION HOME ========

  AOS.init({
    once: true,
    offset: 10,
    duration: 1000,
    easing: "ease-in-out",
  });

  const typingTextElement = document.getElementById("typing-text");
  const WORDS = ["Data Analyst", "UI/UX Designer", "Web Developer", "SQL Enthusiast"];
  const TYPING_SPEED = 100;
  const ERASING_SPEED = 50;
  const PAUSE_DURATION = 2000;

  let wordIndex = 0;
  let charIndex = 0;
  let isTyping = true;

  const handleTyping = () => {
    if (!typingTextElement) return;
    const currentWord = WORDS[wordIndex];

    if (isTyping) {
      if (charIndex < currentWord.length) {
        typingTextElement.textContent += currentWord[charIndex];
        charIndex++;
        setTimeout(handleTyping, TYPING_SPEED);
      } else {
        isTyping = false;
        setTimeout(handleTyping, PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        typingTextElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(handleTyping, ERASING_SPEED);
      } else {
        isTyping = true;
        wordIndex = (wordIndex + 1) % WORDS.length;
        setTimeout(handleTyping, TYPING_SPEED);
      }
    }
  };

  setTimeout(handleTyping, 1000);

  // ======== KODE STATISTIK & PORTOFOLIO (DIPERBARUI) ========

  // --- 2. DATA TECH STACK ---
  const techStackData = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      name: "HTML",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      name: "CSS",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      name: "JavaScript",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
      name: "SQL / MySQL",
    },
    {
      icon: "https://cdn.simpleicons.org/powerbi/F5B841",
      name: "Power BI",
    },
    {
      icon: "https://cdn.simpleicons.org/figma",
      name: "Figma",
    },
    {
      icon: "https://devicon-website.vercel.app/api/php/original.svg",
      name: "PHP",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      name: "Bootstrap",
    },
  ];

  // --- 3. UPDATE KARTU STATISTIK ---
  const projectCountEl = document.getElementById("project-count");
  if (projectCountEl) {
    projectCountEl.textContent = projectsData.length;
  }

  // --- 4. MEMUAT KARTU PROYEK (UPDATED: TOMBOL DETAILS BERFUNGSI) ---
  const projectGridContainer = document.getElementById(
    "project-grid-container"
  );

  function renderProjects() {
    if (!projectGridContainer) return;

    projectGridContainer.innerHTML = "";

    projectsData.forEach((project, index) => {
      const aosDelay = (index % 3) * 100 + 100;

      // Perhatikan: Kita pakai <div> sebagai pembungkus, bukan <a>
      // Agar tombol Live Demo dan Details bisa diklik terpisah
      projectGridContainer.innerHTML += `
          <div class="project-card" data-aos="fade-up" data-aos-delay="${aosDelay}">
              <img src="${project.image}" alt="${project.title}" class="project-card-image">
              <div class="project-card-content">
                  <h3 class="project-card-title">${project.title}</h3>
                  <p class="project-card-description">${project.description}</p>
                  
                  

                      <button onclick="viewProjectDetails(${index})" class="project-card-link" style="margin-left: 1rem; background:none; border:none; cursor:pointer; font-family:inherit; font-size:inherit;">
                          Details
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                      </button>
                  </div>
              </div>
          </div>
      `;
    });
  }

  // --- 5. MEMUAT KARTU TECH STACK ---
  const techStackGridContainer = document.getElementById(
    "tech-stack-grid-container"
  );

  function renderTechStack() {
    if (!techStackGridContainer) return;
    techStackGridContainer.innerHTML = "";
    techStackData.forEach((tech, index) => {
      const aosDelay = (index % 5) * 50 + 100;
      techStackGridContainer.innerHTML += `
          <div class="tech-stack-card" data-aos="fade-up" data-aos-delay="${aosDelay}">
              <img src="${tech.icon}" alt="${tech.name} Icon">
              <span>${tech.name}</span>
          </div>
      `;
    });
  }

  // --- 6. LOGIKA TAB PORTOFOLIO ---
  const portfolioTabs = document.querySelectorAll(".portfolio-tab");
  const tabContents = document.querySelectorAll(".tab-content");

  portfolioTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetTab = tab.dataset.tab;
      portfolioTabs.forEach((t) => t.classList.remove("active"));
      tabContents.forEach((tc) => tc.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(`${targetTab}-content`).classList.add("active");
      AOS.refresh();
    });
  });

  renderProjects();
  renderTechStack();

  // ======== KODE UNTUK FORM KONTAK ========
  const contactForm = document.getElementById("contact-form");
  const submitButton = document.getElementById("submit-button");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      submitButton.disabled = true;
      submitButton.textContent = "Mengirim...";
      const formData = new FormData(contactForm);
      const submitData = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
        _subject: `Pesan Baru dari Website Portofolio ${formData.get("name")}`,
        _captcha: "false",
        _template: "table",
      };
      // GANTI EMAIL DI SINI DENGAN EMAIL AKTIF ANDA
      const formSubmitUrl =
        "https://formsubmit.co/rizkynurzihan12@gmail.com";

      try {
        await axios.post(formSubmitUrl, submitData);
        Swal.fire({
          title: "Berhasil!",
          text: "Pesan Anda telah berhasil terkirim!",
          icon: "success",
          confirmButtonColor: "#4F8CFF",
          timer: 3000,
          timerProgressBar: true,
        });
        contactForm.reset();
      } catch (error) {
        console.error(error);
        Swal.fire({
          title: "Gagal!",
          text: "Terjadi kesalahan. Silakan coba lagi nanti.",
          icon: "error",
          confirmButtonColor: "#4F8CFF",
        });
      } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = `
            Kirim Pesan
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        `;
      }
    });
  }
});

// ======== FUNGSI GLOBAL UNTUK PINDAH HALAMAN (DITARUH DI LUAR) ========
// Ini fungsi agar tombol "Details" bisa bekerja
window.viewProjectDetails = function (index) {
  if (index >= 0 && index < projectsData.length) {
    const selectedProject = projectsData[index];
    localStorage.setItem("currentProject", JSON.stringify(selectedProject));
    window.location.href = "project-details.html";
  } else {
    console.error("Project index out of bounds");
  }
};
