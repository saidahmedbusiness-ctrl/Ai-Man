/**
 * ============================================================================
 * AI MAN — Creative AI Video Studio (Vanilla JavaScript)
 * ============================================================================
 * 1. STUDIO_CONFIG: Single location to configure WhatsApp, Form Backend, Hero
 *    Showreel video, and Social Links (never invents fake contact info).
 * 2. PORTFOLIO_ITEMS: Easy-to-edit array of video samples & demo placeholders.
 * ============================================================================
 */

const STUDIO_CONFIG = {
  // رابط التواصل المباشر عبر واتساب في الهيدر والزر العائم والفوتر
  whatsappLink: "https://wa.link/bin58x",

  // رابط واتساب المخصص لنموذج طلب الفيديو
  orderWhatsappLink: "https://wa.link/jsn2h7",

  // رقم واتساب الحقيقي المستخرج من وجهة الرابط الرسمي (https://wa.link/jsn2h7 -> 201557331713)
  // يُستخدم لتمرير نص رسالة الطلب المخصصة كاملة عبر https://wa.me/201557331713?text=ENCODED_MESSAGE
  whatsappNumber: "201557331713",

  // اختياري: رابط خدمة استقبال النماذج مثل Formspree (مثال: "https://formspree.io/f/your_id")
  formEndpointUrl: "",

  // اختياري: بريد إلكتروني رسمي للاستوديو (يظهر في الفوتر فقط في حال كتابته هنا)
  contactEmail: "",

  // اختياري: فيديو الخلفية في القسم الرئيسي (Hero Showreel)
  // ضع مسار الفيديو المحلي مثل "assets/showreel.mp4" وسيتم تشغيله تلقائياً
  heroShowreelVideoUrl: "",

  // روابط التواصل الاجتماعي (تظهر في الفوتر فقط عند إضافة رابط حقيقي لها)
  socialLinks: {
    instagram: "",
    tiktok: "",
    youtube: "",
    behance: ""
  }
};

/**
 * قائمة أعمال المعرض (Portfolio Items)
 * لاستبدال أي نموذج بفيديو حقيقي خاص بك:
 * - غيّر `thumbnail` إلى مسار صورتك المصغرة داخل `assets/`
 * - ضع مسار ملف الفيديو في `videoUrl` (مثال: "assets/my-burger-ad.mp4")
 * - اجعل `isDemo: false` عندما يكون الفيديو مشروعاً فعلياً لك
 */
const PORTFOLIO_ITEMS = [
  {
    id: "rest-burger-01",
    category: "restaurant",
    categoryLabel: "إعلانات المطاعم",
    orderType: "إعلان مطعم",
    title: "إعلان برجر سينمائي — لهب ولقطات ماكرو بطيئة",
    summary: "مشهد ترويجي تجريبي يستعرض تفاصيل البرجر والجبن الذائب مع إضاءة نارية وحركة كاميرا سريعة.",
    thumbnail: "",
    videoUrl: "assets/burger-ad.mp4",
    inlineVideoCard: true,
    duration: "00:20",
    aspectRatio: "9:16 & 16:9",
    isDemo: false
  },
  {
    id: "char-presenter-01",
    category: "character",
    categoryLabel: "الشخصيات الواقعية",
    orderType: "شخصية واقعية بالـ AI",
    title: "مقدم افتراضي واقعي — متحدث رسمي للعلامة التجارية",
    summary: "شخصية مولدة بالذكاء الاصطناعي بملامح واقعية وحركة شفاه متزامنة لإلقاء سكريبت إعلاني باللغة العربية.",
    thumbnail: "assets/thumb-character.svg",
    videoUrl: "assets/aiman-character-ad.mp4",
    duration: "00:10",
    aspectRatio: "9:16 Reels",
    isDemo: false
  },
  {
    id: "prod-perfume-01",
    category: "product",
    categoryLabel: "إعلانات المنتجات",
    orderType: "إعلان منتج",
    title: "إعلان عطر فاخر — إضاءة استوديو وانعكاسات سينمائية",
    summary: "تحويل صورة زجاجة عطر إلى إعلان بصري فخم محاط بجزيئات مضيئة وحركة كاميرا ناعمة.",
    thumbnail: "",
    videoUrl: "assets/perfume-ad.mp4",
    inlineVideoCard: true,
    duration: "00:25",
    aspectRatio: "16:9 & 9:16",
    isDemo: false
  },
  {
    id: "real-villa-01",
    category: "realestate",
    categoryLabel: "العقارات",
    orderType: "فيديو عقاري",
    title: "جولة جوية لفيلا عصرية — تصور معماري سينمائي",
    summary: "استعراض خارجي وداخلي لمشروع عقاري وقت الغروب مع إضاءة دافئة وانعكاسات المسبح.",
    thumbnail: "",
    videoUrl: "assets/real-estate-tour.mp4",
    inlineVideoCard: true,
    duration: "00:40",
    aspectRatio: "16:9 4K",
    isDemo: false
  },
  {
    id: "crea-scifi-01",
    category: "creative",
    categoryLabel: "قصص أطفال",
    orderType: "فيديو إبداعي",
    title: "قصص أطفال ومشاهد خيالية",
    summary: "قصص أطفال خيالية ومشاهد ساحرة من عوالم سحرية، مليئة بالمغامرات والشخصيات المميزة، نحول فيها الخيال إلى تجربة بصرية ممتعة بالذكاء الاصطناعي.",
    thumbnail: "",
    videoUrl: "assets/kids-fantasy-ad.mp4",
    inlineVideoCard: true,
    duration: "00:45",
    aspectRatio: "21:9 Cinema",
    isDemo: false
  },
  {
    id: "rest-coffee-02",
    category: "restaurant",
    categoryLabel: "إعلانات الكافيهات",
    orderType: "إعلان مطعم",
    title: "إعلان كافيه فاخر — تجربة من الرقي والفخامة",
    summary: "مشاهد سينمائية راقية لأجواء كافيه فاخر، من تحضير القهوة المختصة وتصاعد البخار الناعم إلى تفاصيل الأكواب الفاخرة والإضاءة الدافئة والديكورات الأنيقة، في إعلان بصري جذاب يبرز جودة التجربة وفخامة المكان بالذكاء الاصطناعي.",
    thumbnail: "",
    videoUrl: "assets/luxury-cafe-ad.mp4",
    inlineVideoCard: true,
    duration: "00:15",
    aspectRatio: "9:16 Reels",
    isDemo: false
  }
];

/**
 * بيانات قسم "من مجرد فكرة... إلى إعلان يخطف الأنظار" (Idea-to-Result Concept Showcase)
 */
const CONCEPT_EXAMPLES = {
  product: {
    rawType: "صورة أولية + فكرة سريعة",
    rawSub: "بدون كاميرات أو استوديو تصوير",
    iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>`,
    beforeTitle: "صورة هاتف عادية لزجاجة عطر + سطرين وصف",
    beforeDesc: "«عندي صورة لزجاجة عطر على مكتب، ومحتاج إعلان فخم يظهر العطر وسط إضاءة ليلية ودخان ناعم يناسب انستجرام وتيك توك.»",
    chips: ["صورة منتج ثابتة", "فكرة مبدئية بسيطة", "بدون استوديو تصوير"],
    afterImg: "assets/thumb-product.svg",
    afterTag: "CGI + AI LIGHTING • 4K",
    afterTitle: "إعلان عطر سينمائي بإضاءة نيون وحركة كاميرا احترافية",
    afterDesc: "تحريك سينمائي للكاميرا حول الزجاجة، انعكاسات إضاءة مدروسة، مؤثرات جزيئات ذهبية، وموسيقى وتصميم صوتي متكامل.",
    specs: ["إضاءة سينمائية 4K", "تحريك كاميرا بالـ AI", "تصميم صوتي مدمج"],
    sampleLabel: "نموذج من أعمال الاستوديو",
    portfolioId: "prod-perfume-01"
  },
  script: {
    rawType: "نص مكتوب (Script) + نبرة صوت",
    rawSub: "بدون ممثلين أو معدات إضاءة وصوت",
    iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
    beforeTitle: "سكريبت مكتوب من 30 ثانية لتقديم علامتك التجارية",
    beforeDesc: "«محتاج شخصية واقعية تظهر قدام الكاميرا بأسلوب احترافي وتقدم خدمات البراند باللهجة العربية بدقة وثقة.»",
    chips: ["نص إعلاني مكتوب", "تحديد ملامح المتحدث", "تعليق صوتي طبيعي"],
    afterImg: "assets/thumb-character.svg",
    afterTag: "NEURAL AVATAR • LIP-SYNC AI",
    afterTitle: "شخصية متحدثة واقعية بالـ AI تقدم رسالتك الإعلانية بثقة",
    afterDesc: "متحدث رقمي بملامح وتعبيرات وجه طبيعية ومزامنة دقيقة لحركة الشفاه مع الصوت داخل بيئة استوديو سينمائية.",
    specs: ["مزامنة شفاه دقيقة", "تعبيرات وجه واقعية", "صوت عربي احترافي"],
    sampleLabel: "نموذج من أعمال الاستوديو",
    portfolioId: "char-presenter-01"
  },
  sketch: {
    rawType: "فكرة خيالية أو سطر وصفي",
    rawSub: "عوالم ومشاهد يستحيل تصويرها تقليديًا",
    iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`,
    beforeTitle: "فكرة خيالية لقصة أو مشهد سينمائي خارج حدود الواقع",
    beforeDesc: "«تخيل عالم سحري مضيء وشخصيات خيالية تتحرك وسط غابة متوهجة في لقطات سينمائية تبهر المشاهد من أول ثانية.»",
    chips: ["فكرة خيالية حرة", "بناء عالم كامل بالـ AI", "مؤثرات بصرية سينمائية"],
    afterImg: "assets/thumb-creative.svg",
    afterTag: "AI WORLD BUILDING • CINEMATIC FX",
    afterTitle: "مشهد سينمائي خيالي متكامل ينبض بالحياة والتفاصيل",
    afterDesc: "تحويل الخيال المجرد إلى مشاهد بصرية ساحرة بإضاءة درامية وتحريك سلس للشخصيات والكاميرا بجودة استوديو.",
    specs: ["بناء عوالم سحرية", "تحريك شخصيات سينمائي", "مؤثرات بصرية وصوتية"],
    sampleLabel: "نموذج من أعمال الاستوديو",
    portfolioId: "crea-scifi-01"
  }
};

/**
 * بيانات قسم آراء وتجارب العملاء (قابلة للتعديل أو الاستبدال بسهولة)
 */
const TESTIMONIAL_ITEMS = [
  {
    id: "kw-01",
    name: "عميل من الكويت",
    country: "الكويت",
    flag: "🇰🇼",
    stars: 5,
    quote: "رائع جدًا، أحييك على شغلك والإبداع اللي بتقدمه. النتيجة فعلًا مبهرة.",
    isSample: true
  },
  {
    id: "eg-01",
    name: "عميل من مصر",
    country: "مصر",
    flag: "🇪🇬",
    stars: 5,
    quote: "شخص محترم وثقة وباله طويل بصراحة، وبيسمع كل التفاصيل لحد ما نوصل للنتيجة المطلوبة.",
    isSample: true
  },
  {
    id: "sa-01",
    name: "عميل من السعودية",
    country: "السعودية",
    flag: "🇸🇦",
    stars: 5,
    quote: "والله من أفضل الناس البروفيشنال اللي اتعاملت معاهم. شكرًا لك على الذوق والاحترافية.",
    isSample: true
  }
];

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initHeroShowreel();
  renderPortfolioGrid("all");
  initPortfolioFilters();
  initServiceCardShortcuts();
  initConceptShowcase();
  initVideoModal();
  initOrderForm();
  initFooterContacts();
  initScrollReveal();
});

/* ==========================================================================
   1. MOBILE NAVIGATION
   ========================================================================== */
function initMobileNav() {
  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");
  if (!menuToggle || !mainNav) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ==========================================================================
   2. HERO SHOWREEL STAGE (AI ROBOT TO HUMAN MORPH)
   ========================================================================== */
function initHeroShowreel() {
  const morphStage = document.getElementById("hero-morph-stage");
  const statusText = document.getElementById("morph-status-text");
  const replayBtn = document.getElementById("replay-morph-btn");
  const phaseSteps = document.querySelectorAll(".phase-step");

  if (!morphStage) return;

  let timers = [];

  const clearMorphTimers = () => {
    timers.forEach((t) => clearTimeout(t));
    timers = [];
  };

  const setActivePhaseStep = (stepKey) => {
    phaseSteps.forEach((el) => {
      el.classList.toggle("is-active", el.getAttribute("data-step") === stepKey);
    });
  };

  const runMorphSequence = () => {
    clearMorphTimers();

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      morphStage.setAttribute("data-morph-state", "complete");
      if (statusText) statusText.textContent = "AI MAN // DEVELOPED BY SAID AHMED";
      setActivePhaseStep("human");
      return;
    }

    // Reset to initial sleek robot state
    morphStage.setAttribute("data-morph-state", "idle");
    if (statusText) statusText.textContent = "01 // AI ROBOT INITIALIZED";
    setActivePhaseStep("robot");

    // Phase 1: Robot optics illuminate gradually
    timers.push(
      setTimeout(() => {
        morphStage.setAttribute("data-morph-state", "awakening");
        if (statusText) statusText.textContent = "OPTICAL NEURAL CORE // ACTIVE";
      }, 350)
    );

    // Phase 2: Controlled digital scan, subtle scanlines & particles -> Morph to realistic human
    timers.push(
      setTimeout(() => {
        morphStage.setAttribute("data-morph-state", "scanning");
        if (statusText) statusText.textContent = "02 // DIGITAL MORPH TO REAL HUMAN";
        setActivePhaseStep("scan");
      }, 1350)
    );

    // Phase 3: Morph complete -> Settle on realistic human & reveal AI MAN + Developed by Said Ahmed
    timers.push(
      setTimeout(() => {
        morphStage.setAttribute("data-morph-state", "complete");
        if (statusText) statusText.textContent = "03 // AI MAN STUDIO READY";
        setActivePhaseStep("human");
      }, 3050)
    );
  };

  // Run once automatically upon entering the page
  runMorphSequence();

  // Allow visitor to replay the transformation on click
  if (replayBtn) {
    replayBtn.addEventListener("click", () => {
      runMorphSequence();
    });
  }
}

/* ==========================================================================
   3. PORTFOLIO GRID & FILTERS
   ========================================================================== */
function renderPortfolioGrid(filterKey = "all") {
  const grid = document.getElementById("portfolio-grid");
  if (!grid) return;

  const filtered =
    filterKey === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === filterKey);

  grid.innerHTML = "";

  filtered.forEach((item) => {
    const card = document.createElement("article");
    card.className = "portfolio-card";
    card.setAttribute("data-item-id", item.id);
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `مشاهدة تفاصيل فيديو: ${item.title}`);

    const statusBadge = item.videoUrl
      ? `<span class="badge-demo">فيديو كامل</span>`
      : item.isDemo
      ? `<span class="badge-demo">معاينة تجريبية</span>`
      : "";

    const isInlineVideoCard = Boolean(item.inlineVideoCard && item.videoUrl);
    const resolvedInlineUrl = isInlineVideoCard
      ? new URL(item.videoUrl.trim(), document.baseURI).href
      : "";

    const mediaMarkup = isInlineVideoCard
      ? `<video
           class="portfolio-card__inline-video"
           data-video-src="${item.videoUrl.trim()}"
           src="${resolvedInlineUrl}#t=0.001"
           preload="metadata"
           playsinline
           webkit-playsinline
           aria-label="${item.title}"
         ></video>`
      : `<img src="${item.thumbnail}" alt="${item.title}" loading="lazy" />`;

    card.innerHTML = `
      <div class="portfolio-card__thumb">
        ${mediaMarkup}
        <div class="portfolio-card__play" aria-hidden="true">
          <div class="play-icon-circle">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        <div class="portfolio-card__badges">
          <span class="badge-cat">${item.categoryLabel}</span>
          ${statusBadge}
        </div>
      </div>
      <div class="portfolio-card__content">
        <h3 class="portfolio-card__title">${item.title}</h3>
        <p class="portfolio-card__summary">${item.summary}</p>
        <div class="portfolio-card__footer">
          <span>اضغط للمعاينة السينمائية</span>
          <span dir="ltr">${item.duration} • ${item.aspectRatio}</span>
        </div>
      </div>
    `;

    if (isInlineVideoCard) {
      const inlineVideo = card.querySelector(".portfolio-card__inline-video");
      const playOverlay = card.querySelector(".portfolio-card__play");
      const thumbArea = card.querySelector(".portfolio-card__thumb");

      const startInlinePlayback = (e) => {
        if (e) e.stopPropagation();
        if (!inlineVideo) return;
        // Pause any other inline videos that might be playing
        document.querySelectorAll(".portfolio-card__inline-video").forEach((otherVid) => {
          if (otherVid !== inlineVideo && !otherVid.paused) {
            otherVid.pause();
          }
        });
        if (inlineVideo.paused) {
          inlineVideo.controls = true;
          if (playOverlay) playOverlay.classList.add("is-hidden");
          inlineVideo.play().catch(() => {});
        }
      };

      if (playOverlay) {
        playOverlay.addEventListener("click", startInlinePlayback);
      }

      if (inlineVideo) {
        inlineVideo.addEventListener("click", (e) => {
          e.stopPropagation();
        });

        inlineVideo.addEventListener("play", () => {
          inlineVideo.controls = true;
          if (playOverlay) playOverlay.classList.add("is-hidden");
        });

        inlineVideo.addEventListener("ended", () => {
          inlineVideo.controls = false;
          if (playOverlay) playOverlay.classList.remove("is-hidden");
        });
      }

      if (thumbArea) {
        thumbArea.addEventListener("click", (e) => {
          e.stopPropagation();
          if (inlineVideo && inlineVideo.paused && !inlineVideo.controls) {
            startInlinePlayback(e);
          }
        });
      }

      card.addEventListener("click", () => openVideoModal(item));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          startInlinePlayback(e);
        }
      });
    } else {
      card.addEventListener("click", () => openVideoModal(item));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openVideoModal(item);
        }
      });
    }

    grid.appendChild(card);
  });
}

function setActivePortfolioFilter(filterKey) {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    const isMatch = btn.getAttribute("data-filter") === filterKey;
    btn.classList.toggle("is-active", isMatch);
    btn.setAttribute("aria-selected", String(isMatch));
  });
  renderPortfolioGrid(filterKey);
}

function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filterKey = btn.getAttribute("data-filter") || "all";
      setActivePortfolioFilter(filterKey);
    });
  });
}

/* ==========================================================================
   4. SERVICE CARD SHORTCUTS ("شوف الأمثلة" & "اطلب فيديو مشابه")
   ========================================================================== */
function initServiceCardShortcuts() {
  // Jump to Portfolio & Filter
  document.querySelectorAll(".js-filter-jump").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const filterKey = btn.getAttribute("data-filter") || "all";
      setActivePortfolioFilter(filterKey);
      const portfolioSection = document.getElementById("portfolio");
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Jump to Order Form & Pre-select Video Type
  document.querySelectorAll(".js-order-preset").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const videoType = btn.getAttribute("data-video-type");
      selectOrderVideoType(videoType);
    });
  });
}

function selectOrderVideoType(videoType) {
  const videoTypeSelect = document.getElementById("video-type");
  const orderSection = document.getElementById("order");

  if (videoTypeSelect && videoType) {
    Array.from(videoTypeSelect.options).forEach((opt) => {
      if (opt.value === videoType) {
        videoTypeSelect.value = videoType;
      }
    });
  }

  if (orderSection) {
    orderSection.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      const ideaInput = document.getElementById("idea-description");
      if (ideaInput) ideaInput.focus({ preventScroll: true });
    }, 650);
  }
}

/* ==========================================================================
   5. CONCEPT SHOWCASE (BEFORE & AFTER IDEA-TO-VIDEO)
   ========================================================================== */
function initConceptShowcase() {
  const tabs = Array.from(document.querySelectorAll(".concept-tab"));
  const stage = document.getElementById("concept-stage");
  const engineTrigger = document.getElementById("concept-engine-trigger");
  const beforeIcon = document.getElementById("concept-before-icon");
  const beforeType = document.getElementById("concept-before-type");
  const beforeSub = document.getElementById("concept-before-sub");
  const beforeTitle = document.getElementById("concept-before-title");
  const beforeDesc = document.getElementById("concept-before-desc");
  const beforeBox = document.getElementById("concept-before-box");
  const sampleTag = document.getElementById("concept-sample-tag");
  const afterImg = document.getElementById("concept-after-img");
  const afterTag = document.getElementById("concept-after-tag");
  const afterTitle = document.getElementById("concept-after-title");
  const afterDesc = document.getElementById("concept-after-desc");
  const afterSpecs = document.getElementById("concept-after-specs");
  const watchBtn = document.getElementById("concept-watch-btn");

  if (!tabs.length) return;

  const conceptKeys = ["product", "script", "sketch"];
  let currentKey = "product";
  let switchTimer = null;

  const applyConceptData = (key, animate = true) => {
    const data = CONCEPT_EXAMPLES[key];
    if (!data) return;
    currentKey = key;

    tabs.forEach((t) => {
      const active = t.getAttribute("data-concept") === key;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", String(active));
    });

    const updateDom = () => {
      if (beforeIcon && data.iconSvg) beforeIcon.innerHTML = data.iconSvg;
      if (beforeType && data.rawType) beforeType.textContent = data.rawType;
      if (beforeSub && data.rawSub) beforeSub.textContent = data.rawSub;
      if (beforeTitle) beforeTitle.textContent = data.beforeTitle;
      if (beforeDesc) beforeDesc.textContent = data.beforeDesc;
      if (beforeBox && Array.isArray(data.chips)) {
        beforeBox.innerHTML = data.chips
          .map((chip) => `<div class="input-chip">${chip}</div>`)
          .join("");
      }
      if (sampleTag && data.sampleLabel) sampleTag.textContent = data.sampleLabel;
      if (afterImg) afterImg.src = data.afterImg;
      if (afterTag) afterTag.textContent = data.afterTag;
      if (afterTitle) afterTitle.textContent = data.afterTitle;
      if (afterDesc) afterDesc.textContent = data.afterDesc;
      if (afterSpecs && Array.isArray(data.specs)) {
        afterSpecs.innerHTML = data.specs
          .map((spec) => `<span class="spec-pill">${spec}</span>`)
          .join("");
      }
      if (watchBtn && data.portfolioId) {
        watchBtn.setAttribute("data-portfolio-id", data.portfolioId);
      }
    };

    if (animate && stage) {
      if (switchTimer) clearTimeout(switchTimer);
      stage.classList.add("is-switching");
      switchTimer = setTimeout(() => {
        updateDom();
        stage.classList.remove("is-switching");
      }, 170);
    } else {
      updateDom();
    }
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.getAttribute("data-concept") || "product";
      if (key === currentKey) return;
      applyConceptData(key, true);
    });
  });

  if (engineTrigger) {
    engineTrigger.addEventListener("click", () => {
      const idx = conceptKeys.indexOf(currentKey);
      const nextKey = conceptKeys[(idx + 1) % conceptKeys.length];
      applyConceptData(nextKey, true);
    });
  }

  if (watchBtn) {
    watchBtn.addEventListener("click", () => {
      const portfolioId = watchBtn.getAttribute("data-portfolio-id");
      const matchedItem = PORTFOLIO_ITEMS.find((item) => item.id === portfolioId);
      if (matchedItem) {
        openVideoModal(matchedItem);
      }
    });
  }
}

/* ==========================================================================
   6. PORTFOLIO VIDEO VIEWER MODAL
   ========================================================================== */
let currentModalItem = null;
let lastFocusedElement = null;

function initVideoModal() {
  const modal = document.getElementById("video-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const backdrop = document.getElementById("modal-backdrop");
  const orderSimilarBtn = document.getElementById("modal-order-similar-btn");

  if (!modal) return;

  if (closeBtn) closeBtn.addEventListener("click", closeVideoModal);
  if (backdrop) backdrop.addEventListener("click", closeVideoModal);

  if (orderSimilarBtn) {
    orderSimilarBtn.addEventListener("click", () => {
      const targetOrderType = currentModalItem ? currentModalItem.orderType : "طلب مخصص";
      closeVideoModal();
      selectOrderVideoType(targetOrderType);
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) {
      closeVideoModal();
    }
  });
}

function openVideoModal(item) {
  const modal = document.getElementById("video-modal");
  const modalStage = document.getElementById("modal-stage");
  const categoryEl = document.getElementById("modal-category");
  const demoTagEl = document.getElementById("modal-demo-tag");
  const titleEl = document.getElementById("modal-title");
  const descEl = document.getElementById("modal-desc");
  const specsEl = document.getElementById("modal-specs");
  const videoPlayer = document.getElementById("modal-video-player");
  const placeholderStage = document.getElementById("modal-placeholder-stage");
  const placeholderImg = document.getElementById("modal-placeholder-img");
  const placeholderTitle = document.getElementById("modal-placeholder-title");
  const placeholderSub = document.getElementById("modal-placeholder-sub");
  const placeholderEq = document.getElementById("modal-placeholder-equalizer");
  const durationHud = document.getElementById("modal-duration-hud");
  const closeBtn = document.getElementById("modal-close-btn");

  if (!modal || !item) return;

  // Pause any inline card videos before opening modal
  document.querySelectorAll(".portfolio-card__inline-video").forEach((vid) => {
    if (!vid.paused) vid.pause();
  });

  currentModalItem = item;
  lastFocusedElement = document.activeElement;

  const isVerticalVideo =
    typeof item.aspectRatio === "string" &&
    item.aspectRatio.trim().startsWith("9:16");

  if (modalStage) {
    modalStage.classList.toggle("is-vertical", isVerticalVideo);
  }

  if (categoryEl) categoryEl.textContent = item.categoryLabel;
  if (demoTagEl) {
    demoTagEl.textContent = item.videoUrl
      ? "عرض فيديو الاستوديو"
      : "معاينة تجريبية قابلة للاستبدال";
  }
  if (titleEl) titleEl.textContent = item.title;
  if (descEl) descEl.textContent = item.summary;
  if (durationHud) durationHud.textContent = `${item.duration} • ${item.aspectRatio}`;

  if (specsEl) {
    specsEl.innerHTML = `
      <span class="spec-pill">المدة: ${item.duration}</span>
      <span class="spec-pill" dir="ltr">Aspect: ${item.aspectRatio}</span>
      <span class="spec-pill">الفئة: ${item.orderType}</span>
    `;
  }

  // Helper to reset and show the placeholder stage (either as default demo or error state)
  const setPlaceholderState = (mode, customTitle, customSubHtml) => {
    if (!placeholderStage) return;
    placeholderStage.hidden = false;
    if (placeholderImg) {
      if (item.thumbnail) {
        placeholderImg.src = item.thumbnail;
        placeholderImg.alt = item.title;
        placeholderImg.hidden = false;
      } else {
        placeholderImg.removeAttribute("src");
        placeholderImg.hidden = true;
      }
    }
    if (placeholderEq) {
      placeholderEq.hidden = mode === "error";
    }
    if (placeholderTitle) {
      placeholderTitle.textContent = customTitle;
    }
    if (placeholderSub) {
      placeholderSub.innerHTML = customSubHtml;
    }
  };

  // Clean up previous video listeners before loading
  if (videoPlayer) {
    videoPlayer.onloadedmetadata = null;
    videoPlayer.oncanplay = null;
    videoPlayer.onerror = null;
    videoPlayer.pause();
    videoPlayer.removeAttribute("src");
    videoPlayer.hidden = true;
  }

  const rawVideoUrl = typeof item.videoUrl === "string" ? item.videoUrl.trim() : "";

  if (rawVideoUrl.length > 0 && videoPlayer && placeholderStage) {
    // Resolve URL relative to site document (index.html), never relative to js/script.js
    const resolvedVideoUrl = new URL(rawVideoUrl, document.baseURI).href;

    // Keep placeholder visible while loading until loadedmetadata / canplay succeeds
    setPlaceholderState(
      "loading",
      "جاري تحميل الفيديو...",
      `يتم الآن تجهيز عرض الفيديو من المسار <code dir="ltr">${rawVideoUrl}</code>.`
    );

    const revealLoadedVideo = () => {
      placeholderStage.hidden = true;
      videoPlayer.hidden = false;
    };

    videoPlayer.onloadedmetadata = () => {
      revealLoadedVideo();
    };

    videoPlayer.oncanplay = () => {
      revealLoadedVideo();
      videoPlayer.play().catch(() => {
        // Autoplay with sound may require user click; video controls remain visible and ready
      });
    };

    videoPlayer.onerror = () => {
      videoPlayer.pause();
      videoPlayer.hidden = true;
      setPlaceholderState(
        "error",
        "تعذر تحميل ملف الفيديو",
        `تأكد من وجود ملف الفيديو في المسار الصحيح: <code dir="ltr">${rawVideoUrl}</code> وأن صيغته مدعومة (MP4).`
      );
      if (demoTagEl) {
        demoTagEl.textContent = "خطأ في تحميل ملف الفيديو";
      }
    };

    if (item.thumbnail) {
      videoPlayer.poster = item.thumbnail;
    } else {
      videoPlayer.removeAttribute("poster");
    }
    videoPlayer.src = resolvedVideoUrl;
    videoPlayer.load();
  } else {
    setPlaceholderState(
      "demo",
      "نموذج عرض توضيحي (Placeholder)",
      'لإضافة ملف الفيديو الحقيقي الخاص بك لهذا العمل، ضع مسار ملف الـ MP4 في الحقل <code dir="ltr">videoUrl</code> داخل <code dir="ltr">js/script.js</code>.'
    );
  }

  modal.hidden = false;
  document.body.style.overflow = "hidden";
  if (closeBtn) closeBtn.focus();
}

function closeVideoModal() {
  const modal = document.getElementById("video-modal");
  const modalStage = document.getElementById("modal-stage");
  const videoPlayer = document.getElementById("modal-video-player");
  if (!modal) return;

  if (videoPlayer) {
    videoPlayer.onloadedmetadata = null;
    videoPlayer.oncanplay = null;
    videoPlayer.onerror = null;
    videoPlayer.pause();
    videoPlayer.removeAttribute("src");
    videoPlayer.load();
    videoPlayer.hidden = true;
  }

  if (modalStage) {
    modalStage.classList.remove("is-vertical");
  }

  modal.hidden = true;
  document.body.style.overflow = "";
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

/* ==========================================================================
   7. CUSTOM VIDEO ORDER FORM & HONEST WHATSAPP / FRONTEND FLOW
   ========================================================================== */
function initOrderForm() {
  const form = document.getElementById("order-form");
  const contactMethodSelect = document.getElementById("contact-method");
  const contactValueInput = document.getElementById("contact-value");
  const contactValueLabel = document.getElementById("contact-value-label");
  const copyOrderBtn = document.getElementById("copy-order-btn");

  if (!form) return;

  // Update placeholder dynamically based on preferred contact method
  if (contactMethodSelect && contactValueInput && contactValueLabel) {
    contactMethodSelect.addEventListener("change", () => {
      const method = contactMethodSelect.value;
      if (method === "البريد الإلكتروني") {
        contactValueLabel.innerHTML = `البريد الإلكتروني <span class="req">*</span>`;
        contactValueInput.placeholder = "name@example.com";
      } else {
        contactValueLabel.innerHTML = `رقم واتساب أو الهاتف <span class="req">*</span>`;
        contactValueInput.placeholder = "+201xxxxxxxxx";
      }
    });
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearFormErrors();

    const formData = {
      clientName: document.getElementById("client-name")?.value.trim() || "",
      contactMethod: document.getElementById("contact-method")?.value || "",
      contactValue: document.getElementById("contact-value")?.value.trim() || "",
      videoType: document.getElementById("video-type")?.value || "",
      ideaDescription: document.getElementById("idea-description")?.value.trim() || "",
      videoDuration: document.getElementById("video-duration")?.value || "",
      videoLanguage: document.getElementById("video-language")?.value || "",
      hasReferences: document.getElementById("has-references")?.value || "",
      referenceLink: document.getElementById("reference-link")?.value.trim() || "",
      budget: document.getElementById("budget")?.value.trim() || "",
      deliveryDate: document.getElementById("delivery-date")?.value.trim() || "",
      privacyConsent: document.getElementById("privacy-consent")?.checked || false
    };

    if (!validateOrderForm(formData)) {
      return;
    }

    const messageText = buildOrderMessage(formData);
    await handleOrderSubmission(formData, messageText);
  });

  if (copyOrderBtn) {
    copyOrderBtn.addEventListener("click", async () => {
      const summaryBox = document.getElementById("order-summary-text");
      if (!summaryBox) return;
      try {
        await navigator.clipboard.writeText(summaryBox.textContent || "");
        const originalText = copyOrderBtn.textContent;
        copyOrderBtn.textContent = "تم نسخ تفاصيل الطلب بنجاح ✓";
        setTimeout(() => {
          copyOrderBtn.textContent = originalText;
        }, 2500);
      } catch {
        // Fallback selection
        const range = document.createRange();
        range.selectNodeContents(summaryBox);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
    });
  }
}

function clearFormErrors() {
  document.querySelectorAll(".field-error").forEach((el) => {
    el.textContent = "";
  });
  document.querySelectorAll(".form-control.is-invalid").forEach((el) => {
    el.classList.remove("is-invalid");
  });
}

function setFieldError(inputId, errorId, message) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  if (input) input.classList.add("is-invalid");
  if (error) error.textContent = message;
}

function validateOrderForm(data) {
  let isValid = true;

  if (!data.clientName || data.clientName.length < 2) {
    setFieldError("client-name", "error-client-name", "يرجى إدخال اسم العميل أو اسم العلامة التجارية.");
    isValid = false;
  }

  if (!data.contactValue || data.contactValue.length < 5) {
    setFieldError("contact-value", "error-contact-value", "يرجى إدخال رقم واتساب صحيح أو بريد إلكتروني للتواصل.");
    isValid = false;
  } else if (data.contactMethod === "البريد الإلكتروني" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contactValue)) {
    setFieldError("contact-value", "error-contact-value", "يرجى إدخال بريد إلكتروني بصيغة صحيحة.");
    isValid = false;
  }

  if (!data.videoType) {
    setFieldError("video-type", "error-video-type", "يرجى اختيار نوع الفيديو المطلوب.");
    isValid = false;
  }

  if (!data.ideaDescription || data.ideaDescription.length < 10) {
    setFieldError("idea-description", "error-idea-description", "يرجى كتابة وصف مختصر للفكرة (10 أحرف على الأقل).");
    isValid = false;
  }

  if (!data.videoDuration) {
    setFieldError("video-duration", "error-video-duration", "يرجى تحديد المدة التقريبية للفيديو.");
    isValid = false;
  }

  if (data.referenceLink && !/^https?:\/\/.+/i.test(data.referenceLink)) {
    setFieldError("reference-link", "error-reference-link", "يرجى إدخال رابط يبدأ بـ http:// أو https://");
    isValid = false;
  }

  if (!data.privacyConsent) {
    setFieldError("privacy-consent", "error-privacy-consent", "يرجى الموافقة على مشاركة تفاصيل الطلب للمتابعة.");
    isValid = false;
  }

  return isValid;
}

function buildOrderMessage(data) {
  const safeVal = (val) => (typeof val === "string" ? val.trim() : "");

  const clientName = safeVal(data.clientName);
  const contactMethod = safeVal(data.contactMethod);
  const contactValue = safeVal(data.contactValue);
  const videoType = safeVal(data.videoType);
  const ideaDescription = safeVal(data.ideaDescription);
  const videoDuration = safeVal(data.videoDuration);
  const videoLanguage = safeVal(data.videoLanguage);
  const hasReferences = safeVal(data.hasReferences);
  const referenceLink = safeVal(data.referenceLink);
  const budget = safeVal(data.budget);
  const deliveryDate = safeVal(data.deliveryDate);
  const extraNotes = safeVal(data.extraNotes);

  const lines = [
    "طلب جديد من موقع AI MAN",
    "──────────────────────",
    clientName ? `اسم العميل: ${clientName}` : null,
    contactMethod && contactValue
      ? `وسيلة التواصل: ${contactMethod} (${contactValue})`
      : contactValue
      ? `بيانات التواصل: ${contactValue}`
      : null,
    videoType ? `نوع الخدمة: ${videoType}` : null,
    ideaDescription ? `تفاصيل الفكرة:\n${ideaDescription}` : null,
    videoDuration ? `مدة الفيديو: ${videoDuration}` : null,
    videoLanguage ? `اللغة المطلوبة: ${videoLanguage}` : null,
    hasReferences ? `المواد المرجعية: ${hasReferences}` : null,
    referenceLink ? `رابط المواد المرجعية: ${referenceLink}` : null,
    budget ? `الميزانية التقريبية: ${budget}` : null,
    deliveryDate ? `موعد التسليم: ${deliveryDate}` : null,
    extraNotes ? `ملاحظات إضافية: ${extraNotes}` : null
  ];

  return lines.filter(Boolean).join("\n\n");
}

async function handleOrderSubmission(formData, messageText) {
  const resultPanel = document.getElementById("order-result-panel");
  const statusBadge = document.getElementById("result-status-badge");
  const panelTitle = document.getElementById("result-panel-title");
  const panelNote = document.getElementById("result-panel-note");
  const summaryBox = document.getElementById("order-summary-text");
  const waLink = document.getElementById("whatsapp-direct-link");

  if (!resultPanel || !summaryBox) return;

  summaryBox.textContent = messageText;
  resultPanel.hidden = false;

  const cleanWaNumber = (STUDIO_CONFIG.whatsappNumber || "").replace(/[^\d]/g, "");
  const configuredOrderWaLink = (
    STUDIO_CONFIG.orderWhatsappLink ||
    STUDIO_CONFIG.whatsappLink ||
    ""
  ).trim();

  // Case 1: Direct WhatsApp number from wa.link/jsn2h7 destination is available -> pre-fill full custom message via wa.me
  if (cleanWaNumber.length >= 8 || configuredOrderWaLink) {
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl =
      cleanWaNumber.length >= 8
        ? `https://wa.me/${cleanWaNumber}?text=${encodedMessage}`
        : configuredOrderWaLink;

    if (waLink) {
      waLink.href = whatsappUrl;
      waLink.hidden = false;
    }
    if (statusBadge) statusBadge.textContent = "جاهز للإرسال عبر واتساب";
    if (panelTitle) panelTitle.textContent = "تم تجهيز رسالتك إلى واتساب AI MAN";
    if (panelNote) {
      panelNote.textContent =
        "تم فتح محادثة واتساب في تبويب جديد مع كتابة تفاصيل طلبك بالكامل بشكل مسبق. راجع الرسالة واضغط على زر الإرسال داخل واتساب.";
    }
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    resultPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    return;
  }

  // Case 2: Form backend endpoint is configured (e.g. Formspree)
  if (STUDIO_CONFIG.formEndpointUrl) {
    try {
      const response = await fetch(STUDIO_CONFIG.formEndpointUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        if (statusBadge) statusBadge.textContent = "تم الإرسال";
        if (panelTitle) panelTitle.textContent = "تم إرسال تفاصيل مشروعك بنجاح";
        if (panelNote) panelNote.textContent = "شكراً لك! تم استلام بيانات الطلب عبر خدمة النماذج وسنتواصل معك قريباً.";
        resultPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
        return;
      }
    } catch {
      // Fall through to honest offline/unconfigured mode if network fails
    }
  }

  // Case 3: No backend or WhatsApp configured yet -> Honest Front-End Summary Mode
  if (waLink) waLink.hidden = true;
  if (statusBadge) statusBadge.textContent = "ملخص الطلب جاهز (وضع المعاينة)";
  if (panelTitle) panelTitle.textContent = "تم تنسيق تفاصيل طلبك بنجاح";
  if (panelNote) {
    panelNote.textContent =
      "ملاحظة شفافة: لم يتم ربط رقم واتساب أو خادم استقبال في ملف الإعدادات (js/script.js) حتى الآن، لذا لم يتم إرسال البيانات تلقائياً. يمكنك نسخ ملخص الطلب الجاهز أدناه، أو إضافة رقم واتساب في STUDIO_CONFIG لتفعيل الإرسال المباشر.";
  }

  resultPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* ==========================================================================
   8. DYNAMIC FOOTER CONTACTS (ONLY SHOWN WHEN REAL LINKS ARE CONFIGURED)
   ========================================================================== */
function initFooterContacts() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const configuredWaLink = (STUDIO_CONFIG.whatsappLink || "").trim();
  const cleanWa = (STUDIO_CONFIG.whatsappNumber || "").replace(/[^\d]/g, "");
  const primaryWhatsappHref =
    configuredWaLink || (cleanWa.length >= 8 ? `https://wa.me/${cleanWa}` : "");

  // Sync all WhatsApp buttons (.js-whatsapp-link) from STUDIO_CONFIG single source of truth
  if (primaryWhatsappHref) {
    document.querySelectorAll(".js-whatsapp-link").forEach((el) => {
      el.setAttribute("href", primaryWhatsappHref);
    });
  }

  const contactCol = document.getElementById("footer-contact-col");
  const contactList = document.getElementById("footer-contact-list");
  if (!contactCol || !contactList) return;

  const items = [];

  if (primaryWhatsappHref) {
    items.push({
      label: "تواصل معنا على واتساب",
      href: primaryWhatsappHref
    });
  }

  if (STUDIO_CONFIG.contactEmail) {
    items.push({
      label: STUDIO_CONFIG.contactEmail,
      href: `mailto:${STUDIO_CONFIG.contactEmail}`
    });
  }

  const socialLabels = {
    instagram: "Instagram",
    tiktok: "TikTok",
    youtube: "YouTube",
    behance: "Behance"
  };

  Object.entries(STUDIO_CONFIG.socialLinks || {}).forEach(([key, url]) => {
    if (url && /^https?:\/\/.+/i.test(url)) {
      items.push({
        label: socialLabels[key] || key,
        href: url
      });
    }
  });

  if (items.length > 0) {
    contactList.innerHTML = items
      .map(
        (item) =>
          `<li><a href="${item.href}" target="_blank" rel="noopener noreferrer">${item.label}</a></li>`
      )
      .join("");
    contactCol.hidden = false;
  }
}

/* ==========================================================================
   9. SUBTLE SCROLL REVEAL
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((el) => observer.observe(el));
}
