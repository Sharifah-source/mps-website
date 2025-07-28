const slides = document.querySelector('.slides');
if (slides) {
const slideCount = document.querySelectorAll('.slide').length;
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let index = 0;
let autoSlideInterval;
const autoSlideDelay = 5000; // 5 saat

function showSlide(i) {
  if (i < 0) index = slideCount - 1;
  else if (i >= slideCount) index = 0;
  else index = i;
  slides.style.transform = `translateX(${-index * 100}%)`;
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    showSlide(index + 1);
  }, autoSlideDelay);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

prevBtn.addEventListener('click', () => {
  showSlide(index - 1);
  resetAutoSlide();
});

nextBtn.addEventListener('click', () => {
  showSlide(index + 1);
  resetAutoSlide();
});

startAutoSlide();
}

document.addEventListener("DOMContentLoaded", () => {
  const responses = [
    {
      keywords: ["apa", "majlis", "perbandaran", "sandakan"],
      reply: "Majlis Perbandaran Sandakan (MPS) adalah pihak berkuasa tempatan yang mentadbir daerah Sandakan, Sabah."
    },
    {
      keywords: ["siapa", "mentadbir", "mps"],
      reply: "MPS ditadbir oleh Presiden MPS bersama ahli-ahli majlis yang dilantik."
    },
    {
      keywords: ["fungsi", "mps"],
      reply: "MPS bertanggungjawab dalam pembangunan bandar, pengurusan sisa, lesen perniagaan, kebersihan, dan perancangan kawasan."
    },
    {
      keywords: ["di", "mana", "wisma", "lokasi", "warisan"],
      reply: "Wisma Warisan terletak di Pusat Bandar Sandakan, berhampiran pejabat utama MPS."
    },
    {
      keywords: ["di", "mana", "wisma", "lokasi","sandaraya"],
      reply: "Wisma Sandaraya juga terletak di Pusat Bandar Sandakan, Sabah."
    },
    {
      keywords: ["di", "mana", "lokasi", "mps", "wisma", "warisan", "sandaraya"],
      reply: "Ibu pejabat MPS, bangunan Wisma Warisan dan Wisma Sandaraya terletak di Pusat Bandar Sandakan, Sandakan, Sabah."
    },
    {
      keywords: ["mohon", "lesen", "perniagaan"],
      reply: "Anda boleh memohon lesen perniagaan atau lesen anjing atau kad kesihatan melalui kaunter bawah Wisma Warisan atau secara atas talian di portal rasmi MPS sekiranya ada."
    },
    {
      keywords: ["waktu", "operasi", "mps"],
      reply: "Waktu operasi MPS adalah Isnin hingga Jumaat, dari jam 8.00 pagi hingga 5.00 petang."
    },
    {
      keywords: ["mps", "beroperasi", "hujung", "minggu"],
      reply: "Tidak. MPS tutup pada Sabtu, Ahad dan cuti umum."
    },
    {
      keywords: ["aduan", "mps"],
      reply: "Anda boleh membuat aduan melalui sistem e-aduan di laman web MPS atau terus ke pejabat MPS."
    },
    {
      keywords: ["nombor", "telefon", "mps"],
      reply: "Anda boleh hubungi MPS di talian 089-273753."
    },
    {
      keywords: ["presiden", "mps"],
      reply: "Presiden MPS terkini boleh dirujuk di laman rasmi MPS kerana ia tertakluk kepada perubahan."
    },
    {
      keywords: ["waktu", "operasi", "kaunter", "bayaran"],
      reply: "Kaunter bayaran dibuka Isnin hingga Khamis dari jam 8.00 pagi hingga 3.00 petang. Jumaat dari 8.00 pagi hingga 11.30 pagi, kemudian 1.30 petang hingga 3.00 petang. Sabtu, Ahad dan cuti umum ditutup."
    },
    {
      keywords: ["cara", "saman", "kereta"],
      reply: "Anda boleh bayar saman secara fizikal di kaunter bawah Wisma Warisan atau semak pilihan bayaran online di laman rasmi MPS."
    },
    {
      keywords: ["di", "mana", "bayar", "saman"],
      reply: "Anda boleh bayar saman di kaunter Wisma Warisan atau guna kaedah bayaran dalam talian jika disediakan oleh MPS."
    },
    {
      keywords: ["di", "mana", "mohon", "e", "kasih"],
      reply: "Anda boleh mohon e-Kasih di Wisma Sandaraya, Pusat Bandar Sandakan, Sandakan, Sabah."
    },
    {
      keywords: ["di", "mana", "bayar", "cukai", "pintu"],
      reply: "Anda boleh menggunakan bayaran online melalui MPS Pay atau guna JomPAY (Biller Code: 3202, Ref 1: No. Cukai Pintu, Ref 2: No. Telefon). Atau anda boleh terus ke Kaunter Bayaran, Tingkat Bawah, Wisma Warisan, Pusat Bandar Sandakan."
    },
    {
      keywords: ["hai"],
      reply: "Hai! Saya Cik Toka. Ada apa yang boleh saya bantu?"
    },
    {
      keywords: ["hello", "hi"],
      reply: "Hai! Nama saya Cik Toka. Selamat datang ke laman web saya."
    },
    {
      keywords: ["bagaimana", "bayar", "cukai", "pintu"],
      reply: "Anda boleh bayar cukai pintu secara online melalui MPS Pay, atau gunakan JomPAY (Biller Code: 3202). Anda juga boleh bayar di Kaunter Bayaran di Wisma Warisan."
    },
    {
      keywords: ["bagaimana", "bayar", "saman"],
      reply: "Anda boleh bayar saman di kaunter bawah Wisma Warisan atau semak pilihan bayaran dalam talian di laman rasmi MPS."
    },
    {
      keywords: ["bagaimana", "mohon", "lesen", "perniagaan"],
      reply: "Anda boleh mohon lesen perniagaan di kaunter bawah Wisma Warisan atau melalui portal rasmi MPS jika tersedia secara online."
    },
    {
      keywords: ["bagaimana", "mohon", "lesen", "anjing"],
      reply: "Permohonan lesen anjing boleh dibuat di kaunter bawah Wisma Warisan atau secara dalam talian sekiranya disediakan."
    },
    {
      keywords: ["di", "mana", "lokasi","mps"],
      reply: "Ibu pejabat Majlis Perbandaran Sandakan (MPS) terletak di Pusat Bandar Sandakan, Sabah."
    },
    {
      keywords: ["dimana", "pejabat", "lokasi", "mps"],
      reply: "Ibu pejabat Majlis Perbandaran Sandakan (MPS) terletak di Pusat Bandar Sandakan, Sabah."
    },
    {
      keywords: ["di", "mana", "ofis", "lokasi", "mps"],
      reply: "Ibu pejabat Majlis Perbandaran Sandakan (MPS) terletak di Pusat Bandar Sandakan, Sabah."
    },
    {
      keywords: ["apa", "itu", "harta", "berkadar"],
      reply: "Harta berkadar ialah mana-mana pegangan hartanah yang mempunyai atau tidak mempunyai bangunan atau struktur kekal, dan terletak di kawasan pentadbiran Majlis, seperti yang dinyatakan dalam Seksyen 72 Ordinan Kerajaan Tempatan 1961 (Pindaan 2000)."
    },
    {
      keywords: ["apakah", "harta", "dikecualikan", "cukai", "pintu"],
      reply: "Harta yang dikecualikan cukai pintu termasuk:\n• Tempat ibadah (masjid, gereja, kuil, dsb.)\n• Tanah perkuburan awam\n• Sekolah tidak berasaskan keuntungan\n• Hospital & klinik awam\n• Tempat sukan/riadah tanpa keuntungan\n• Harta Majlis\n• Harta bernilai tahunan di bawah RM150\n• Harta yang diluluskan oleh Yang Di-Pertua Negeri Sabah dan diwartakan."
    },
    {
      keywords: ["apa", "itu", "cukai", "pintu"],
      reply: "Cukai pintu ialah cukai yang dikenakan ke atas setiap harta berkadar dalam kawasan pentadbiran Majlis. Ia digunakan untuk menampung kos pentadbiran serta penyediaan dan penyelenggaraan perkhidmatan kepada pembayar cukai."
    },
    {
      keywords: ["siapa", "bertanggungjawab", "cukai", "pintu"],
      reply: "Cukai pintu adalah tanggungjawab pemilik atau penghuni harta berkadar. Ia boleh dituntut daripada penyewa/penghuni berdasarkan Seksyen 82 & 92 Ordinan Kerajaan Tempatan 1961."
    },
    {
      keywords: ["bila", "buka", "kaunter", "bayaran"],
      reply: "Kaunter bayaran dibuka Isnin hingga Khamis dari jam 8.00 pagi hingga 3.00 petang. Jumaat dari 8.00 pagi hingga 11.30 pagi, kemudian 1.30 petang hingga 3.00 petang. Sabtu, Ahad dan cuti umum ditutup. Kaunter bayaran di tingkat bawah Wisma Warisan."
    },
    {
      keywords: ["waktu", "operasi", "kaunter", "bayaran"],
      reply: "Kaunter bayaran dibuka Isnin hingga Khamis dari jam 8.00 pagi hingga 3.00 petang. Jumaat dari 8.00 pagi hingga 11.30 pagi, kemudian 1.30 petang hingga 3.00 petang. Sabtu, Ahad dan cuti umum ditutup. Kaunter bayaran di tingkat bawah Wisma Warisan."
    },
    {
      keywords: ["lokasi", "kaunter", "bayaran"],
      reply: "Kaunter bayaran di tingkat bawah Wisma Warisan. Waktu operasi: Isnin – Khamis (8.00 pagi – 3.00 petang), Jumaat (8.00 – 11.30 pagi, 1.30 – 3.00 petang). Sabtu, Ahad dan cuti umum ditutup."
    },
    {
      keywords: ["di", "mana", "kaunter", "bayaran"],
      reply: "Kaunter bayaran terletak di tingkat bawah Wisma Warisan, Sandakan. Waktu operasi adalah Isnin hingga Khamis dari 8.00 pagi hingga 3.00 petang, dan Jumaat dari 8.00 pagi hingga 11.30 pagi, kemudian 1.30 petang hingga 3.00 petang."
    }

 ];

  const chatToggle = document.getElementById("chat-toggle");
  const closeBtn = document.getElementById("close-chat");
  const chatContainer = document.getElementById("chat-container");
  const chatBox = document.getElementById("chat-box");
  const inputField = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");

  function toggleChat() {
    if (chatContainer.style.display === "none" || chatContainer.style.display === "") {
      chatContainer.style.display = "flex";
      inputField.focus();
    } else {
      chatContainer.style.display = "none";
    }
  }

  chatToggle.addEventListener("click", toggleChat);
  closeBtn.addEventListener("click", toggleChat);

  // Add message with avatar
  function addMessage(message, sender) {
    const isUser = sender === "user";
    const messageClass = isUser ? "user-message" : "bot-message";

    const avatarSrc = isUser ? "download (1).jpeg" : "Cartoonify.png"; // ensure these files exist

    const avatar = `
      <div class="avatar">
        <img src="${avatarSrc}" alt="${sender} Avatar" />
      </div>`;

    const messageHTML = `
      <div class="message ${messageClass}">
        ${avatar}
        <div class="bubble">${message}</div>
      </div>
    `;

    chatBox.innerHTML += messageHTML;
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  // Clean input and split into words
  function cleanInput(input) {
    return input
      .toLowerCase()
      .replace(/[?.,!]/g, "")
      .split(/\s+/);
  }

  // Find best response based on keywords
  function findBestResponse(input, responses, threshold = 0.5) {
    const words = cleanInput(input);

    let bestMatch = null;
    let bestScore = 0;

    for (const response of responses) {
      const keywords = response.keywords;

      const matchedKeywords = keywords.filter(k => words.includes(k));
      const score = matchedKeywords.length / keywords.length;

      if (score >= threshold && score > bestScore) {
        bestScore = score;
        bestMatch = response;
      }
    }

    return bestMatch ? bestMatch.reply : "Maaf, saya tidak faham soalan anda.";
  }

  // Handle chat input and send messages
  function handleChat() {
    const userText = inputField.value.trim();
    if (!userText) return;

    addMessage(userText, "user");

    const botReply = findBestResponse(userText, responses);
    setTimeout(() => {
      addMessage(botReply, "bot");
    }, 500);

    inputField.value = "";
    inputField.focus();
  }

  // Event listeners for sending message
  sendBtn.addEventListener("click", handleChat);
  inputField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleChat();
    }
  });
});