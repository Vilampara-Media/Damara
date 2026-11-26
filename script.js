// 100% Authentic Service & Package Catalog from https://westintodamaraspa.com/
const TREATMENTS_DATA = {
  facials: [
    {
      category: "Guinot",
      title: "Guinot Hydradermie Lift Facial",
      duration: "60 Min",
      desc: "Targeted lifting facial treatment available at Damara Day Spa in Downtown Toronto.",
      url: "https://westintodamaraspa.com/guinot-hydradermie-lift-facial-60-min/",
      img: "https://cdn11.bigcommerce.com/s-wgboxqzs9q/images/stencil/600x600/products/754/1342/e96df0d1-8c6d-4ada-975d-404604548170__88636.1791390663.jpg?c=1"
    },
    {
      category: "Guinot",
      title: "Guinot Hydradermie Deluxe Facial",
      duration: "90 Min",
      desc: "Extended deluxe cellular hydration and facial sculpting ritual at The Westin Harbour Castle.",
      url: "https://westintodamaraspa.com/guinot-hydradermie-deluxe-facial-90-min/",
      img: "https://cdn11.bigcommerce.com/s-wgboxqzs9q/images/stencil/600x600/products/753/1340/Hydradermie-facial-toronto-2__61531.1791390473.jpg?c=1"
    },
    {
      category: "Guinot",
      title: "Guinot Age Summum Facial Treatment",
      duration: "60 Min",
      desc: "Anti-aging facial treatment designed to restore radiance and firmness.",
      url: "https://westintodamaraspa.com/guinot-age-summum-facial-treatment-60-min/",
      img: "https://cdn11.bigcommerce.com/s-wgboxqzs9q/images/stencil/600x600/products/751/1335/2b31fc3a-433e-49c2-8123-7b09b8ee159e__61581.1791386151.jpg?c=1"
    },
    {
      category: "SkinCeuticals",
      title: "SkinCeuticals Mixology Facial",
      duration: "60 Minutes",
      desc: "Customized clinical SkinCeuticals facial tailored to your skin's exact needs.",
      url: "https://westintodamaraspa.com/skinceuticals-mixology-facial-60-minutes/",
      img: "https://cdn11.bigcommerce.com/s-wgboxqzs9q/images/stencil/600x600/products/728/1296/5f3a19d8-dd4d-4ae7-8eb6-ce17620cad21__74074.1783607209.png?c=1"
    },
    {
      category: "SkinCeuticals",
      title: "SkinCeuticals Gel Peel",
      duration: "30 Minutes",
      desc: "Express clinical resurfacing peel for smoother, brighter skin texture.",
      url: "https://westintodamaraspa.com/skinceuticals-gel-peel-30-minutes/",
      img: "images/facial-aesthetics.jpg"
    },
    {
      category: "Medical & Clinical",
      title: "Geneo X, ESSE & Microchanneling",
      duration: "Custom",
      desc: "Explore Geneo X Facial, ESSE Probiotic Facials, G.M. Collin Facials, Microchanneling & Injectables.",
      url: "https://westintodamaraspa.com/geneo-x-facial/",
      img: "images/orig/facials.png"
    }
  ],
  massage: [
    {
      category: "Aesthetician",
      title: "Tranquility Massage (Aesthetician)",
      duration: "60 Mins",
      desc: "Soothing relaxation massage at Damara Day Spa, Downtown Toronto.",
      url: "https://westintodamaraspa.com/relaxation-massage-aesthetician-60-mins/",
      img: "https://cdn11.bigcommerce.com/s-wgboxqzs9q/images/stencil/600x600/products/694/1244/AdobeStock_72075539__28462.1770132950.jpg?c=1"
    },
    {
      category: "Couples",
      title: "Couples Relaxation Massage",
      duration: "60 Mins · $155.00 pp",
      desc: "Side-by-side couples relaxation massage in Downtown Toronto.",
      url: "https://westintodamaraspa.com/couples-Relaxation-massage-60-mins-155-00-pp/",
      img: "https://cdn11.bigcommerce.com/s-wgboxqzs9q/images/stencil/600x600/products/692/1242/couple-massage-toronto__64577.1743532139.1280.1280__38040.1774279997.jpg?c=1"
    },
    {
      category: "RMT",
      title: "RMT Massage Treatment",
      duration: "Registered Massage",
      desc: "Therapeutic Registered Massage Therapy tailored to muscle recovery and relief.",
      url: "https://westintodamaraspa.com/rmt-massage-treatment/",
      img: "images/orig/rmt-massage.png"
    },
    {
      category: "Therapeutic",
      title: "Deep Tissue Massage",
      duration: "Downtown Toronto",
      desc: "Targeted deep tissue bodywork to release chronic muscle tension.",
      url: "https://westintodamaraspa.com/massage-services/deep-tissue-massage-downtown-toronto/",
      img: "images/massage-couples.jpg"
    },
    {
      category: "Holistic",
      title: "Swedish | Hot Stone | Aromatherapy",
      duration: "Downtown Toronto",
      desc: "Holistic, Hot Stone, Swedish, and Aromatherapy massage treatments.",
      url: "https://westintodamaraspa.com/massage-services/swedish-massage-treatment-downtown-toronto/",
      img: "images/orig/couples.png"
    },
    {
      category: "Specialty",
      title: "Maternity & Reflexology Massage",
      duration: "Downtown Toronto",
      desc: "Specialized prenatal massage and restorative foot reflexology.",
      url: "https://westintodamaraspa.com/maternity-massage/",
      img: "images/orig/rejuv.png"
    }
  ],
  headspa: [
    {
      category: "Head Spa",
      title: "Luxury Head and Scalp Ritual",
      duration: "60 Min · $225.00 CAD",
      desc: "Tension-melting scalp massage, warm aromatherapy oils, steam therapy, and pressure-point ritual.",
      url: "https://westintodamaraspa.com/head-spa/",
      img: "images/facial-aesthetics.jpg"
    },
    {
      category: "Head Spa",
      title: "Luxury Head and Scalp Ritual (Extended)",
      duration: "90 Min · $299.00 CAD",
      desc: "Extended 90-minute scalp rejuvenation and deep relaxation journey in Downtown Toronto.",
      url: "https://westintodamaraspa.com/head-spa/",
      img: "images/orig/rejuv.png"
    },
    {
      category: "Couples Head Spa",
      title: "Couples Luxury Hair and Scalp Ritual",
      duration: "60 Min · $399.00 CAD",
      desc: "Intimate side-by-side Head Spa treatment for two at Damara Spa Westin Harbour Castle.",
      url: "https://westintodamaraspa.com/couples-luxury-hair-and-scalp-ritual/",
      img: "https://cdn11.bigcommerce.com/s-wgboxqzs9q/images/stencil/600x600/products/720/1273/59c86203-eb17-4841-8623-5d31d2e1114f__56383.1774279207.jpg?c=1"
    },
    {
      category: "Scalp Restoration",
      title: "Procell Hair Restoration",
      duration: "45 Min · $450.00 CAD",
      desc: "Non-surgical microchanneling technology with specialized growth factors to support scalp health and density.",
      url: "https://westintodamaraspa.com/head-spa/",
      img: "images/orig/facials.png"
    },
    {
      category: "Seasonal Scrub",
      title: "Cranberry Orange Body Scrub",
      duration: "45 Mins",
      desc: "Invigorating seasonal exfoliation at Damara Day Spa, The Westin Harbour Castle.",
      url: "https://westintodamaraspa.com/cranberry-orange-body-scrub-45-mins/",
      img: "https://cdn11.bigcommerce.com/s-wgboxqzs9q/images/stencil/600x600/products/757/1369/scrub__42656.1794597769.png?c=1"
    }
  ],
  nails: [
    {
      category: "Feet",
      title: "Luxury Pedicure",
      duration: "75 Mins",
      desc: "Indulgent 75-minute luxury pedicure at Damara Day Spa Downtown Toronto.",
      url: "https://westintodamaraspa.com/luxury-pedicure-service-75-mins/",
      img: "https://cdn11.bigcommerce.com/s-wgboxqzs9q/images/stencil/600x600/products/492/558/deluxe-pedicure-toronto_1_1__65345.1738897344.1280.1280__41229.1739235575.jpg?c=1"
    },
    {
      category: "Medical Foot Care",
      title: "Footlogix Medical Pedicure Foot Care",
      duration: "60 Mins",
      desc: "Specialized Footlogix medical pedicure for restorative foot health.",
      url: "https://westintodamaraspa.com/footlogix-medical-pedicure-foot-care-60-mins/",
      img: "https://cdn11.bigcommerce.com/s-wgboxqzs9q/images/stencil/600x600/products/489/377/footlogix-pedicure-toronto__62094.1738684506.jpg?c=1"
    },
    {
      category: "Couples",
      title: "Luxury Couples Pedicure",
      duration: "75 Mins · $120.00 pp",
      desc: "Side-by-side luxury pedicure experience for two in Downtown Toronto.",
      url: "https://westintodamaraspa.com/luxury-couples-pedicure-75-mins-110-00-pp/",
      img: "https://cdn11.bigcommerce.com/s-wgboxqzs9q/images/stencil/600x600/products/487/392/couples-luxury-pedicure-downtown-Toronto__16875.1738706586.jpg?c=1"
    },
    {
      category: "Hands",
      title: "Signature Shellac & Luxury Manicures",
      duration: "60 Mins",
      desc: "Signature Manicure (30m), Signature Shellac Manicure (60m), and Luxury Manicure (60m).",
      url: "https://westintodamaraspa.com/signature-shellac-manicure-60-mins/",
      img: "https://cdn11.bigcommerce.com/s-wgboxqzs9q/images/stencil/600x600/products/440/453/shellac-manicures-toronto_1__90878.1738860880.jpg?c=1"
    },
    {
      category: "Men's Spa",
      title: "The Ultimate Gentleman's Indulgence",
      duration: "Men's Package",
      desc: "Curated men's spa experience alongside Sports Manicure (45 Mins) & Men's Hair Removal.",
      url: "https://westintodamaraspa.com/the-ultimate-gentleman-s-indulgence/",
      img: "https://cdn11.bigcommerce.com/s-wgboxqzs9q/images/stencil/600x600/products/691/1241/AdobeStock_898247702__06321.1761833334.jpg?c=1"
    }
  ],
  packages: [
    {
      category: "Seasonal Ritual",
      title: "Chocolate Peppermint Body Ritual",
      duration: "80 Mins · $215.00 CAD",
      desc: "Indulge in the ultimate Chocolate Peppermint Spa Experience at Damara Day Spa Westin.",
      url: "https://westintodamaraspa.com/chocolate-peppermint-body-ritual-80-mins/",
      img: "https://cdn11.bigcommerce.com/s-wgboxqzs9q/images/stencil/600x600/products/759/1371/rituals__13415.1794598336.png?c=1"
    },
    {
      category: "Seasonal Ritual",
      title: "Cranberry Orange Head-to-Toe",
      duration: "70 Mins · $159.00 CAD",
      desc: "Seasonal Head-to-Toe Spa Escape exclusively at Damara Day Spa, The Westin Harbour Castle.",
      url: "https://westintodamaraspa.com/cranberry-orange-head-to-toe-70-mins/",
      img: "https://cdn11.bigcommerce.com/s-wgboxqzs9q/images/stencil/600x600/products/758/1370/toe__33696.1794597928.png?c=1"
    },
    {
      category: "Signature Package",
      title: "The Damara Spa Escape",
      duration: "2.25 Hr (per person)",
      desc: "Signature multi-treatment spa escape at The Westin Harbour Castle.",
      url: "https://westintodamaraspa.com/the-damara-spa-escape-per-person/",
      img: "https://cdn11.bigcommerce.com/s-wgboxqzs9q/images/stencil/600x600/products/688/1238/AdobeStock_1583739711__18902.1761831319.jpg?c=1"
    },
    {
      category: "All-Inclusive",
      title: "A Day at Damara Spa",
      duration: "All-Inclusive Retreat",
      desc: "Full-day restorative spa retreat with complimentary Westin Harbour Castle amenities.",
      url: "https://westintodamaraspa.com/the-damara-all-inclusive-retreat/",
      img: "https://cdn11.bigcommerce.com/s-wgboxqzs9q/images/stencil/600x600/products/687/1236/AdobeStock_543115952__01182.1761830133.jpg?c=1"
    },
    {
      category: "Luxury",
      title: "The Damara Luxe Escape",
      duration: "Luxury Package",
      desc: "Elevated luxury spa package designed for complete head-to-toe renewal.",
      url: "https://westintodamaraspa.com/the-damara-luxe-escape/",
      img: "https://cdn11.bigcommerce.com/s-wgboxqzs9q/images/stencil/600x600/products/689/1239/AdobeStock_66303604__72957.1761832354.jpg?c=1"
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("siteHeader");
  const scrollProgress = document.getElementById("scrollProgress");
  const atelierList = document.getElementById("atelierList");
  const previewImg = document.getElementById("atelierPreviewImg");
  const previewCat = document.getElementById("atelierPreviewCat");
  const previewTitle = document.getElementById("atelierPreviewTitle");
  const tabBtns = document.querySelectorAll(".at-tab");
  const bookingModal = document.getElementById("bookingModal");
  const modalClose = document.getElementById("modalClose");
  const selectedServiceInput = document.getElementById("selectedServiceInput");
  const bookingForm = document.getElementById("bookingForm");
  const bookingSuccess = document.getElementById("bookingSuccess");
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerClose = document.getElementById("drawerClose");
  const newsletterForm = document.getElementById("newsletterForm");
  const newsletterMsg = document.getElementById("newsletterMsg");

  // Scroll Progress + Smart Auto-Hide Header (hides on scroll down, reveals on scroll up)
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    const currentY = window.scrollY;
    header.classList.toggle("scrolled", currentY > 50);

    if (currentY > lastScrollY && currentY > 120) {
      header.classList.add("header-hidden");
    } else if (currentY < lastScrollY) {
      header.classList.remove("header-hidden");
    }
    lastScrollY = currentY;

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (currentY / docHeight) * 100 : 0;
    scrollProgress.style.width = `${pct}%`;
  });

  function updatePreview(item) {
    previewImg.style.opacity = "0.5";
    setTimeout(() => {
      previewImg.src = item.img;
      previewImg.onerror = () => {
        previewImg.src = "images/hero-sanctuary.jpg";
      };
      previewCat.textContent = item.category;
      previewTitle.textContent = item.title;
      previewImg.style.opacity = "1";
    }, 120);
  }

  function renderAtelier(categoryKey) {
    const items = TREATMENTS_DATA[categoryKey] || TREATMENTS_DATA.facials;
    updatePreview(items[0]);

    atelierList.innerHTML = items
      .map(
        (item, idx) => `
      <div class="atelier-row" data-idx="${idx}">
        <div>
          <span class="atelier-row-cat">${item.category}</span>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
        <div class="atelier-row-right">
          <span class="atelier-dur">${item.duration}</span>
          <div class="atelier-actions">
            <a href="${item.url}" target="_blank" rel="noopener">Details</a>
            <button class="open-booking-btn" data-service="${item.title} (${item.duration})">Reserve &rarr;</button>
          </div>
        </div>
      </div>
    `
      )
      .join("");

    // Hovering an index row smoothly swaps the sticky preview image
    atelierList.querySelectorAll(".atelier-row").forEach((row) => {
      row.addEventListener("mouseenter", () => {
        const item = items[Number(row.dataset.idx)];
        if (item) updatePreview(item);
      });
    });

    if (typeof observeReveals === "function") {
      observeReveals(atelierList);
    }
    attachBookingTriggers();
  }

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderAtelier(btn.dataset.tab);
    });
  });

  document.querySelectorAll("[data-tab-jump]").forEach((link) => {
    link.addEventListener("click", () => {
      const targetTab = link.dataset.tabJump;
      const matchingBtn = document.querySelector(`.at-tab[data-tab="${targetTab}"]`);
      if (matchingBtn) matchingBtn.click();
    });
  });

  function openModal(serviceName) {
    selectedServiceInput.value = serviceName || "Damara Day Spa Appointment";
    bookingForm.hidden = false;
    bookingSuccess.hidden = true;
    bookingModal.classList.add("open");
    bookingModal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    bookingModal.classList.remove("open");
    bookingModal.setAttribute("aria-hidden", "true");
  }

  function attachBookingTriggers() {
    document.querySelectorAll(".open-booking-btn").forEach((btn) => {
      btn.onclick = (e) => {
        e.stopPropagation();
        openModal(btn.dataset.service);
      };
    });
  }

  modalClose.addEventListener("click", closeModal);
  bookingModal.addEventListener("click", (e) => {
    if (e.target === bookingModal) closeModal();
  });

  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    bookingForm.hidden = true;
    bookingSuccess.hidden = false;
  });

  mobileMenuToggle.addEventListener("click", () => {
    mobileDrawer.classList.add("open");
    mobileDrawer.setAttribute("aria-hidden", "false");
  });

  function closeDrawer() {
    mobileDrawer.classList.remove("open");
    mobileDrawer.setAttribute("aria-hidden", "true");
  }

  drawerClose.addEventListener("click", closeDrawer);
  document.querySelectorAll(".drawer-link").forEach((l) => l.addEventListener("click", closeDrawer));

  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    newsletterMsg.textContent = "Subscribed to Damara Day Spa updates.";
    newsletterForm.reset();
  });

  // Smooth Staggered Scroll Reveal Observer
  const revealObserver = new IntersectionObserver(
    (entries) => {
      let batchIndex = 0;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = Math.min(batchIndex * 90, 450);
          entry.target.style.transitionDelay = `${delay}ms`;
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
          batchIndex++;
        }
      });
    },
    { rootMargin: "0px 0px -50px 0px", threshold: 0.08 }
  );

  function observeReveals(root = document) {
    root.querySelectorAll(".reveal, .step-row, .atelier-row, .split-media").forEach((el) => {
      if (!el.classList.contains("visible")) {
        revealObserver.observe(el);
      }
    });
  }

  observeReveals();
  renderAtelier("facials");
  observeReveals(atelierList);
  attachBookingTriggers();
});
