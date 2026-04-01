/**
 * TOPMIX EVENTOS – JavaScript Principal
 * Funcionalidades: Loader, Cursor, Navbar, Hero Parallax,
 * Partículas, Animações scroll, Contador, Portfólio + Filtros,
 * Lightbox, Smooth scroll
 */

// ============================================================
// DADOS DO PORTFÓLIO (mockados)
// ============================================================
const portfolioData = [
  {
    id: 1,
    title: 'Festival Rock na Cidade',
    category: 'show',
    categoryLabel: 'Show',
    location: 'São Paulo – SP',
    year: '2024',
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #8b1a00 40%, #ff4500 100%)',
    accent: '#ff4500',
    description: 'Sistema de PA Line Array L-Acoustics para 15.000 pessoas, palco 20m, iluminação cênica completa.'
  },
  {
    id: 2,
    title: 'Convenção Corporativa Tech',
    category: 'corporativo',
    categoryLabel: 'Corporativo',
    location: 'São Paulo – SP',
    year: '2024',
    gradient: 'linear-gradient(135deg, #000a1a 0%, #00308b 50%, #0066ff 100%)',
    accent: '#0066ff',
    description: 'Painel LED 12×6m, transmissão ao vivo, sonorização para 3.000 participantes.'
  },
  {
    id: 3,
    title: 'Casamento dos Sonhos',
    category: 'casamento',
    categoryLabel: 'Casamento',
    location: 'Campinas – SP',
    year: '2024',
    gradient: 'linear-gradient(135deg, #1a1000 0%, #8b6900 50%, #ffd700 100%)',
    accent: '#ffd700',
    description: 'Iluminação cênica com moving heads, tendas elegantes e sonorização cristalina.'
  },
  {
    id: 4,
    title: 'Show Sertanejo – 20k',
    category: 'show',
    categoryLabel: 'Show',
    location: 'Ribeirão Preto – SP',
    year: '2023',
    gradient: 'linear-gradient(135deg, #0a001a 0%, #6b008b 50%, #cc00ff 100%)',
    accent: '#cc00ff',
    description: 'Palco 24m, Line Array duplo, 2000 moving heads, painéis LED cenográficos.'
  },
  {
    id: 5,
    title: 'Formatura UNICAMP',
    category: 'formatura',
    categoryLabel: 'Formatura',
    location: 'Campinas – SP',
    year: '2023',
    gradient: 'linear-gradient(135deg, #001a0a 0%, #008b45 50%, #00ff88 100%)',
    accent: '#00ff88',
    description: 'Estrutura completa para 5.000 formandos, sonorização e telão LED 8×4m.'
  },
  {
    id: 6,
    title: 'Summit Empresarial 2023',
    category: 'corporativo',
    categoryLabel: 'Corporativo',
    location: 'São Paulo – SP',
    year: '2023',
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #2a2a2a 50%, #888888 100%)',
    accent: '#aaaaaa',
    description: 'Cenografia digital, transmissão simultânea para 10 cidades, operação técnica completa.'
  },
  {
    id: 7,
    title: 'Festa de 15 Anos Premium',
    category: 'casamento',
    categoryLabel: 'Evento Social',
    location: 'Santos – SP',
    year: '2023',
    gradient: 'linear-gradient(135deg, #1a000a 0%, #8b0050 50%, #ff0099 100%)',
    accent: '#ff0099',
    description: 'Iluminação cenográfica, pista interativa, DJ set com laser show.'
  },
  {
    id: 8,
    title: 'Festival Eletrônico Noturno',
    category: 'show',
    categoryLabel: 'Show',
    location: 'São Paulo – SP',
    year: '2023',
    gradient: 'linear-gradient(135deg, #00001a 0%, #000055 50%, #0000cc 100%)',
    accent: '#4488ff',
    description: 'Festival 48h, 6 palcos simultâneos, sistema L-Acoustics, laser shows.'
  },
  {
    id: 9,
    title: 'Formatura FUVEST',
    category: 'formatura',
    categoryLabel: 'Formatura',
    location: 'São Paulo – SP',
    year: '2022',
    gradient: 'linear-gradient(135deg, #1a0800 0%, #8b4000 50%, #ff7700 100%)',
    accent: '#ff7700',
    description: 'Palco 16m, sonorização d&b audiotechnik, iluminação cênica GLP.'
  }
];

// ============================================================
// AGUARDA DOM PRONTO
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initNavbar();
  initParticles();
  initScrollAnimations();
  initCounters();
  initPortfolio();
  initLightbox();
  initSmoothScroll();
  initHeroAnimations();
  initParallax();
});

// ============================================================
// 1. LOADER
// ============================================================
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  // Aguarda carregamento completo
  const hideLoader = () => {
    loader.classList.add('hidden');
    document.body.style.overflow = '';
    // Dispara animações de entrada do hero
    triggerHeroAnimations();
  };

  document.body.style.overflow = 'hidden';

  // Tempo mínimo de exibição: 2.2s
  if (document.readyState === 'complete') {
    setTimeout(hideLoader, 2200);
  } else {
    window.addEventListener('load', () => {
      setTimeout(hideLoader, 2200);
    });
  }
}

// ============================================================
// 2. CURSOR PERSONALIZADO
// ============================================================
function initCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  if (!cursor || !follower) return;

  // Verifica suporte a hover (não-touch)
  if (!window.matchMedia('(hover: hover)').matches) return;

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;
  let rafId;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  // Follower com atraso suave
  const animateFollower = () => {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    follower.style.left = followerX + 'px';
    follower.style.top  = followerY + 'px';
    rafId = requestAnimationFrame(animateFollower);
  };
  animateFollower();

  // Hover em elementos interativos
  const interactives = document.querySelectorAll('a, button, .portfolio-card, .portfolio__filter, .servico-card');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor--hover');
      follower.classList.add('cursor-follower--hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor--hover');
      follower.classList.remove('cursor-follower--hover');
    });
  });

  // Esconde quando mouse sai da janela
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    follower.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    follower.style.opacity = '0.5';
  });
}

// ============================================================
// 3. NAVBAR
// ============================================================
function initNavbar() {
  const navbar  = document.getElementById('navbar');
  const toggle  = document.getElementById('menuToggle');
  const mobile  = document.getElementById('mobileMenu');
  const links   = document.querySelectorAll('.navbar__mobile-link');
  if (!navbar) return;

  // Scroll: adiciona classe "scrolled"
  const handleScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveLink();
  };
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Menu mobile toggle
  if (toggle && mobile) {
    toggle.addEventListener('click', () => {
      const isOpen = mobile.classList.contains('open');
      mobile.classList.toggle('open');
      toggle.classList.toggle('open');
      toggle.setAttribute('aria-expanded', !isOpen);
      mobile.setAttribute('aria-hidden', isOpen);
    });

    // Fecha ao clicar nos links
    links.forEach(link => {
      link.addEventListener('click', () => {
        mobile.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        mobile.setAttribute('aria-hidden', 'true');
      });
    });

    // Fecha ao clicar fora
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && mobile.classList.contains('open')) {
        mobile.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        mobile.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // Link ativo no scroll
  function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar__link');
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
      const top    = section.offsetTop;
      const height = section.offsetHeight;
      const id     = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}

// ============================================================
// 4. PARTÍCULAS HERO
// ============================================================
function initParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;

  const count = window.innerWidth < 768 ? 15 : 30;

  for (let i = 0; i < count; i++) {
    createParticle(container);
  }
}

function createParticle(container) {
  const particle = document.createElement('div');
  particle.classList.add('hero__particle');

  const size    = Math.random() * 4 + 1;
  const left    = Math.random() * 100;
  const delay   = Math.random() * 15;
  const duration= Math.random() * 15 + 10;

  particle.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    left: ${left}%;
    bottom: -10px;
    animation-duration: ${duration}s;
    animation-delay: ${delay}s;
    opacity: 0;
  `;

  container.appendChild(particle);
}

// ============================================================
// 5. ANIMAÇÕES DE ENTRADA (HERO)
// ============================================================
function initHeroAnimations() {
  // As animações são ativadas após o loader terminar
}

function triggerHeroAnimations() {
  const elements = document.querySelectorAll('.animate-fade-up');
  elements.forEach(el => {
    const delay = parseInt(el.dataset.delay || 0);
    setTimeout(() => {
      el.classList.add('visible');
    }, delay);
  });
}

// ============================================================
// 6. ANIMAÇÕES DE SCROLL (Intersection Observer)
// ============================================================
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || 0);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ============================================================
// 7. CONTADORES ANIMADOS
// ============================================================
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target   = parseInt(el.dataset.count);
  const duration = 2000;
  const step     = 16; // ~60fps
  const steps    = duration / step;
  const increment = target / steps;
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current);
    }
  }, step);
}

// ============================================================
// 8. PARALLAX HERO
// ============================================================
function initParallax() {
  const heroBg = document.getElementById('heroBg');
  if (!heroBg) return;

  // Desativa em mobile (performance)
  if (window.innerWidth < 768) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        heroBg.style.transform = `translateY(${scrollY * 0.35}px)`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ============================================================
// 9. PORTFÓLIO – RENDERIZAÇÃO E FILTROS
// ============================================================
function initPortfolio() {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;

  // Renderiza cards
  renderPortfolioCards(portfolioData, grid);

  // Filtros
  const filters = document.querySelectorAll('.portfolio__filter');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      // Atualiza botão ativo
      filters.forEach(f => f.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      filterPortfolio(filter, grid);
    });
  });

  // Lazy init das animações de scroll dos cards
  initPortfolioScrollAnimation();
}

function renderPortfolioCards(data, grid) {
  grid.innerHTML = '';

  data.forEach((item, index) => {
    const card = createPortfolioCard(item, index);
    grid.appendChild(card);
  });

  // Recria listeners de cursor após renderizar
  recheckCursorListeners();
}

function createPortfolioCard(item, index) {
  const card = document.createElement('article');
  card.classList.add('portfolio-card', 'animate-on-scroll');
  card.dataset.category = item.category;
  card.dataset.index    = index;
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `Ver detalhes: ${item.title}`);

  card.innerHTML = `
    <div class="portfolio-card__bg" style="background: ${item.gradient};" aria-hidden="true">
      <!-- Decoração interna com ícones de equipamento -->
      <div style="
        position: absolute; inset: 0;
        display: flex; align-items: center; justify-content: center;
        font-size: 4rem; opacity: 0.08; user-select: none;
      ">
        ${getCategoryIcon(item.category)}
      </div>
      <!-- Linhas decorativas -->
      <div style="
        position: absolute; inset: 0;
        background-image: repeating-linear-gradient(
          45deg,
          transparent, transparent 20px,
          rgba(255,255,255,0.02) 20px, rgba(255,255,255,0.02) 21px
        );
      "></div>
      <!-- Glow accent -->
      <div style="
        position: absolute; bottom: -40px; right: -40px;
        width: 160px; height: 160px; border-radius: 50%;
        background: radial-gradient(circle, ${item.accent}55 0%, transparent 70%);
        filter: blur(20px);
      "></div>
    </div>
    <div class="portfolio-card__overlay" aria-hidden="true"></div>
    <div class="portfolio-card__content">
      <p class="portfolio-card__category">${item.categoryLabel}</p>
      <h3 class="portfolio-card__title">${item.title}</h3>
      <p class="portfolio-card__meta">📍 ${item.location} &nbsp;·&nbsp; ${item.year}</p>
    </div>
    <div class="portfolio-card__zoom" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
      </svg>
    </div>
  `;

  // Abre lightbox ao clicar
  card.addEventListener('click', () => openLightbox(item.id - 1));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox(item.id - 1);
    }
  });

  return card;
}

function getCategoryIcon(category) {
  const icons = {
    show:        '🎵',
    corporativo: '💼',
    casamento:   '💍',
    formatura:   '🎓'
  };
  return icons[category] || '🎉';
}

function filterPortfolio(filter, grid) {
  const cards = grid.querySelectorAll('.portfolio-card');

  cards.forEach(card => {
    const category = card.dataset.category;
    const matches  = filter === 'all' || category === filter;

    if (matches) {
      card.classList.remove('hidden');
      card.style.animation = 'none';
      void card.offsetWidth; // força reflow
      card.style.animation = 'cardFadeIn 0.4s ease forwards';
    } else {
      card.style.animation = 'cardFadeOut 0.2s ease forwards';
      setTimeout(() => card.classList.add('hidden'), 200);
    }
  });
}

function initPortfolioScrollAnimation() {
  // Reobserva os cards após renderização
  setTimeout(() => {
    const cards = document.querySelectorAll('.portfolio-card.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 60);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
  }, 100);
}

function recheckCursorListeners() {
  // Reaplica cursor hover nos cards novos
  const cursor   = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  if (!cursor || !follower) return;

  const newCards = document.querySelectorAll('.portfolio-card');
  newCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor--hover');
      follower.classList.add('cursor-follower--hover');
    });
    card.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor--hover');
      follower.classList.remove('cursor-follower--hover');
    });
  });
}

// ============================================================
// 10. LIGHTBOX
// ============================================================
let lightboxCurrentIndex = 0;
let lightboxVisibleItems  = [];

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const overlay  = document.getElementById('lightboxOverlay');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn  = document.getElementById('lightboxPrev');
  const nextBtn  = document.getElementById('lightboxNext');

  if (!lightbox) return;

  // Fechar
  overlay?.addEventListener('click', closeLightbox);
  closeBtn?.addEventListener('click', closeLightbox);

  // Navegar
  prevBtn?.addEventListener('click', () => navigateLightbox(-1));
  nextBtn?.addEventListener('click', () => navigateLightbox(1));

  // Teclado
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   navigateLightbox(-1);
    if (e.key === 'ArrowRight')  navigateLightbox(1);
  });

  // Touch swipe
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  lightbox.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      navigateLightbox(diff > 0 ? 1 : -1);
    }
  });
}

function openLightbox(index) {
  // Pega somente os cards visíveis
  const grid     = document.getElementById('portfolioGrid');
  const cards    = Array.from(grid?.querySelectorAll('.portfolio-card:not(.hidden)') || []);
  lightboxVisibleItems = cards.map(c => portfolioData[parseInt(c.dataset.index)]);

  // Encontra índice no array de visíveis
  const clickedItem   = portfolioData[index];
  lightboxCurrentIndex = lightboxVisibleItems.findIndex(i => i?.id === clickedItem?.id);
  if (lightboxCurrentIndex === -1) lightboxCurrentIndex = 0;

  renderLightboxItem(lightboxCurrentIndex);

  const lightbox = document.getElementById('lightbox');
  lightbox?.classList.add('open');
  lightbox?.removeAttribute('aria-hidden');
  document.body.style.overflow = 'hidden';

  // Foco no botão fechar
  setTimeout(() => document.getElementById('lightboxClose')?.focus(), 100);
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox?.classList.remove('open');
  lightbox?.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function navigateLightbox(dir) {
  lightboxCurrentIndex = (lightboxCurrentIndex + dir + lightboxVisibleItems.length) % lightboxVisibleItems.length;
  renderLightboxItem(lightboxCurrentIndex);
}

function renderLightboxItem(index) {
  const item    = lightboxVisibleItems[index];
  const imgEl   = document.getElementById('lightboxImage');
  const titleEl = document.getElementById('lightboxTitle');
  const metaEl  = document.getElementById('lightboxMeta');

  if (!item || !imgEl) return;

  // Anima saída
  imgEl.style.opacity = '0';
  imgEl.style.transform = 'scale(0.98)';

  setTimeout(() => {
    // Renderiza placeholder visual do projeto
    imgEl.style.cssText = `
      width: 100%;
      height: 100%;
      background: ${item.gradient};
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    `;

    imgEl.innerHTML = `
      <div style="
        position: absolute; inset: 0;
        background-image: repeating-linear-gradient(
          45deg, transparent, transparent 20px,
          rgba(255,255,255,0.03) 20px, rgba(255,255,255,0.03) 21px
        );
      "></div>
      <div style="
        position: absolute; bottom: -80px; right: -80px;
        width: 300px; height: 300px; border-radius: 50%;
        background: radial-gradient(circle, ${item.accent}66 0%, transparent 70%);
        filter: blur(40px);
      "></div>
      <div style="
        position: absolute; top: -60px; left: -60px;
        width: 250px; height: 250px; border-radius: 50%;
        background: radial-gradient(circle, ${item.accent}33 0%, transparent 70%);
        filter: blur(30px);
      "></div>
      <div style="position: relative; text-align: center; padding: 2rem;">
        <div style="font-size: 5rem; margin-bottom: 1rem; filter: drop-shadow(0 0 20px ${item.accent});">
          ${getCategoryIcon(item.category)}
        </div>
        <div style="
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          color: white;
          text-shadow: 0 2px 20px rgba(0,0,0,0.8);
          margin-bottom: 0.5rem;
        ">${item.title}</div>
        <div style="
          font-size: 0.9rem;
          color: rgba(255,255,255,0.7);
          margin-bottom: 1rem;
        ">${item.description}</div>
        <div style="
          display: inline-block;
          background: ${item.accent}33;
          border: 1px solid ${item.accent}88;
          color: ${item.accent};
          padding: 0.3rem 1rem;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 700;
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        ">${item.categoryLabel}</div>
      </div>
    `;

    if (titleEl) titleEl.textContent = item.title;
    if (metaEl)  metaEl.textContent  = `${item.location}  ·  ${item.year}`;

    // Anima entrada
    imgEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    imgEl.style.opacity     = '1';
    imgEl.style.transform   = 'scale(1)';
  }, 150);
}

// ============================================================
// 11. SMOOTH SCROLL
// ============================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const navbarH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-h')) || 80;
      const offset  = target.getBoundingClientRect().top + window.scrollY - navbarH;

      window.scrollTo({ top: offset, behavior: 'smooth' });
    });
  });
}

// ============================================================
// 12. EFEITO GLOW NO BOTÃO PRIMÁRIO (microinteração)
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const primaryBtns = document.querySelectorAll('.btn--primary');
  primaryBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top)  / rect.height) * 100;
      btn.style.setProperty('--mouse-x', `${x}%`);
      btn.style.setProperty('--mouse-y', `${y}%`);
    });
  });
});

// ============================================================
// 13. PRELOAD DE FONTES
// ============================================================
if ('fonts' in document) {
  Promise.all([
    document.fonts.load('700 1em Montserrat'),
    document.fonts.load('900 1em Montserrat'),
    document.fonts.load('400 1em Inter')
  ]).then(() => {
    document.documentElement.classList.add('fonts-loaded');
  });
}

// ============================================================
// 14. DETECÇÃO DE PREFERÊNCIA DE MOVIMENTO REDUZIDO
// ============================================================
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Desativa animações complexas para acessibilidade
  document.documentElement.style.setProperty('--transition-fast', '0s');
  document.documentElement.style.setProperty('--transition-base', '0s');
  document.documentElement.style.setProperty('--transition-slow', '0s');
}
