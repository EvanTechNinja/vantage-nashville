// ============ VANTAGE ANIMATIONS ============
// GSAP + ScrollTrigger + Lenis powered animations
// All animations respect prefers-reduced-motion

(function () {
  'use strict';

  // ---- Reduced Motion Check ----
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Remove page-load overlay immediately
    const overlay = document.getElementById('page-load-overlay');
    if (overlay) overlay.remove();
    // Make sure nothing is invisible
    document.querySelectorAll('.gs-reveal, .gs-hero').forEach(function (el) {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return; // Skip all animations
  }

  // ---- Wait for GSAP ----
  function init() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      setTimeout(init, 50);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // ---- Lenis Smooth Scroll ----
    if (typeof Lenis !== 'undefined') {
      const lenis = new Lenis({
        duration: 1.2,
        easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
        smoothWheel: true,
        touchMultiplier: 1.5,
      });

      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
      gsap.ticker.lagSmoothing(0);

      // Store for external access (e.g., modal open/close)
      window.__lenis = lenis;
    }

    // ---- Page Load Transition ----
    const overlay = document.getElementById('page-load-overlay');
    if (overlay) {
      gsap.to(overlay, {
        clipPath: 'inset(0 0 100% 0)',
        duration: 0.8,
        ease: 'power2.inOut',
        delay: 0.1,
        onComplete: function () { overlay.remove(); }
      });
    }

    // ---- Hero Animations (on page load, not scroll) ----
    initHeroAnimations();

    // ---- Scroll-Triggered Animations ----
    initScrollAnimations();

    // ---- Custom Cursor (desktop only) ----
    if (window.innerWidth > 768) {
      initCustomCursor();
    }

    // ---- Magnetic Buttons (desktop only) ----
    if (window.innerWidth > 768) {
      initMagneticButtons();
    }

    // ---- Floating Particles in Hero ----
    initFloatingParticles();
  }

  // ===============================
  // HERO ANIMATIONS
  // ===============================
  function initHeroAnimations() {
    var heroH1 = document.querySelector('.hero-section h1, section:first-of-type h1');
    var heroSubtitle = document.querySelector('.hero-section .hero-subtitle, section:first-of-type .hero-subtitle');
    var heroBody = document.querySelector('.hero-section .hero-body, section:first-of-type .hero-body');
    var heroCtas = document.querySelector('.hero-section .hero-ctas, section:first-of-type .hero-ctas');

    var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // H1 — word-by-word reveal
    if (heroH1) {
      var words = heroH1.textContent.trim().split(/\s+/);
      heroH1.innerHTML = words.map(function (w) {
        return '<span class="hero-word"><span class="hero-word-inner">' + w + '</span></span>';
      }).join(' ');

      heroH1.style.opacity = '1';
      gsap.set('.hero-word-inner', { y: 50, opacity: 0 });
      tl.to('.hero-word-inner', {
        y: 0, opacity: 1, stagger: 0.1, duration: 0.7
      }, 0.3);
    }

    // Subtitle — slide from left
    if (heroSubtitle) {
      gsap.set(heroSubtitle, { x: -30, opacity: 0 });
      tl.to(heroSubtitle, { x: 0, opacity: 1, duration: 0.7 }, 0.6);
    }

    // Body text — fade in
    if (heroBody) {
      gsap.set(heroBody, { opacity: 0 });
      tl.to(heroBody, { opacity: 1, duration: 0.6 }, 0.8);
    }

    // CTA buttons — fade up
    if (heroCtas) {
      gsap.set(heroCtas, { y: 20, opacity: 0 });
      tl.to(heroCtas, { y: 0, opacity: 1, duration: 0.5 }, 1.0);
    }
  }

  // ===============================
  // SCROLL ANIMATIONS
  // ===============================
  function initScrollAnimations() {
    // ---- Section headings: fade-up ----
    gsap.utils.toArray('section h2').forEach(function (el) {
      gsap.from(el, {
        y: 30, opacity: 0, duration: 0.7,
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
      });
    });

    // ---- Section subheadings / lead text right after h2 ----
    gsap.utils.toArray('section h2 + p').forEach(function (el) {
      gsap.from(el, {
        y: 20, opacity: 0, duration: 0.6, delay: 0.15,
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
      });
    });

    // ---- Value prop cards (3 cols on index) ----
    var valuePropGrid = document.querySelector('.value-props-grid');
    if (valuePropGrid) {
      var cards = valuePropGrid.children;
      gsap.from(cards, {
        y: 40, opacity: 0, stagger: 0.15, duration: 0.7,
        scrollTrigger: { trigger: valuePropGrid, start: 'top 80%', toggleActions: 'play none none none' }
      });

      // Bounce icons in
      gsap.utils.toArray(valuePropGrid.querySelectorAll('.value-icon')).forEach(function (icon, i) {
        gsap.from(icon, {
          scale: 0, duration: 0.5, ease: 'back.out(1.7)', delay: 0.1 + i * 0.15,
          scrollTrigger: { trigger: valuePropGrid, start: 'top 80%', toggleActions: 'play none none none' }
        });
      });
    }

    // ---- Membership cards (staggered fade-up) ----
    gsap.utils.toArray('.membership-grid').forEach(function (grid) {
      var items = grid.children;
      gsap.from(items, {
        y: 60, opacity: 0, stagger: 0.15, duration: 0.8,
        scrollTrigger: { trigger: grid, start: 'top 80%', toggleActions: 'play none none none' }
      });
    });

    // ---- Meeting space cards (alternate left/right) ----
    gsap.utils.toArray('.space-card').forEach(function (card, i) {
      var fromX = i % 2 === 0 ? -40 : 40;
      gsap.from(card, {
        x: fromX, opacity: 0, duration: 0.7,
        scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' }
      });
    });

    // ---- Gallery images (scale reveal) ----
    gsap.utils.toArray('.gallery-grid > div').forEach(function (el, i) {
      gsap.from(el, {
        scale: 0.85, opacity: 0, duration: 0.8, delay: i * 0.12,
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
      });
    });

    // ---- Enhancement cards (stagger) ----
    var enhGrid = document.querySelector('.enhancements-grid');
    if (enhGrid) {
      gsap.from(enhGrid.children, {
        y: 30, opacity: 0, stagger: 0.12, duration: 0.6,
        scrollTrigger: { trigger: enhGrid, start: 'top 80%', toggleActions: 'play none none none' }
      });
    }

    // ---- CTA banners ----
    gsap.utils.toArray('.cta-banner').forEach(function (banner) {
      var bannerH2 = banner.querySelector('h2');
      var bannerBtns = banner.querySelector('.cta-banner-buttons');
      var tl2 = gsap.timeline({
        scrollTrigger: { trigger: banner, start: 'top 85%', toggleActions: 'play none none none' }
      });
      if (bannerH2) tl2.from(bannerH2, { y: 20, opacity: 0, duration: 0.6 });
      if (bannerBtns) tl2.from(bannerBtns, { y: 15, opacity: 0, duration: 0.5 }, '-=0.3');
    });

    // ---- Footer columns ----
    var footerGrid = document.querySelector('footer .grid');
    if (footerGrid) {
      gsap.from(footerGrid.children, {
        y: 20, opacity: 0, stagger: 0.1, duration: 0.6,
        scrollTrigger: { trigger: footerGrid, start: 'top 90%', toggleActions: 'play none none none' }
      });
    }
  }

  // ===============================
  // CUSTOM CURSOR
  // ===============================
  function initCustomCursor() {
    var dot = document.createElement('div');
    dot.className = 'cursor-dot';
    var circle = document.createElement('div');
    circle.className = 'cursor-circle';
    document.body.appendChild(dot);
    document.body.appendChild(circle);

    var posX = 0, posY = 0;
    var circleX = 0, circleY = 0;

    document.addEventListener('mousemove', function (e) {
      posX = e.clientX;
      posY = e.clientY;
      dot.style.left = posX + 'px';
      dot.style.top = posY + 'px';
    });

    // Smooth follow for the circle
    gsap.ticker.add(function () {
      circleX += (posX - circleX) * 0.15;
      circleY += (posY - circleY) * 0.15;
      circle.style.left = circleX + 'px';
      circle.style.top = circleY + 'px';
    });

    // Scale up on interactive elements
    var interactiveEls = 'a, button, .cta-button, .cta-button-outline, .cta-button-light, .amenity-toggle';
    document.querySelectorAll(interactiveEls).forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        circle.classList.add('cursor-hover');
      });
      el.addEventListener('mouseleave', function () {
        circle.classList.remove('cursor-hover');
      });
    });
  }

  // ===============================
  // MAGNETIC BUTTONS
  // ===============================
  function initMagneticButtons() {
    document.querySelectorAll('.cta-button, .cta-button-outline, .cta-button-light').forEach(function (btn) {
      var xTo = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3' });
      var yTo = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3' });

      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var relX = e.clientX - rect.left - rect.width / 2;
        var relY = e.clientY - rect.top - rect.height / 2;
        xTo(relX * 0.2);
        yTo(relY * 0.2);
      });

      btn.addEventListener('mouseleave', function () {
        xTo(0);
        yTo(0);
      });
    });
  }

  // ===============================
  // FLOATING PARTICLES
  // ===============================
  function initFloatingParticles() {
    var heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    var particleContainer = document.createElement('div');
    particleContainer.className = 'hero-particles';
    particleContainer.setAttribute('aria-hidden', 'true');
    heroSection.style.position = 'relative';

    // Find the overlay div and insert after it
    var overlayDiv = heroSection.querySelector('.absolute.inset-0.bg-navy\\/70') ||
                     heroSection.querySelector('[class*="bg-navy"]');
    if (overlayDiv && overlayDiv.parentElement) {
      overlayDiv.parentElement.insertBefore(particleContainer, overlayDiv.nextSibling);
    } else {
      heroSection.appendChild(particleContainer);
    }

    for (var i = 0; i < 6; i++) {
      var p = document.createElement('div');
      p.className = 'hero-particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.top = Math.random() * 100 + '%';
      p.style.width = (3 + Math.random() * 4) + 'px';
      p.style.height = p.style.width;
      p.style.opacity = (0.15 + Math.random() * 0.2).toString();
      particleContainer.appendChild(p);

      gsap.to(p, {
        x: 'random(-60, 60)',
        y: 'random(-40, 40)',
        duration: 'random(4, 8)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 3
      });
    }
  }

  // ---- Kick off ----
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
