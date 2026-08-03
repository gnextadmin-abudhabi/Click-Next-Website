/**
 * Shared page motion: scroll progress, scroll reveal, count-up figures,
 * cursor spotlights and magnetic buttons.
 *
 * Importing this module runs it. Every behaviour is opt-in via class name, so
 * a page only gets what its markup asks for. Honours prefers-reduced-motion:
 * revealed content is shown immediately and figures jump to their final value.
 */

export const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Scroll progress rail (#lp-progress) ---------- */
const progress = document.getElementById('lp-progress');
if (progress) {
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------- Reveal on scroll (.lp-reveal) ---------- */
const revealables = document.querySelectorAll<HTMLElement>('.lp-reveal');
if (prefersReducedMotion) {
  revealables.forEach((el) => el.classList.add('is-in'));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );
  revealables.forEach((el) => revealObserver.observe(el));
}

/* ---------- Count-up figures (.lp-count) ---------- */
const counters = document.querySelectorAll<HTMLElement>('.lp-count');
if (counters.length) {
  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        countObserver.unobserve(el);

        const target = Number(el.dataset.count || 0);
        const decimals = Number(el.dataset.decimals || 0);

        if (prefersReducedMotion) {
          el.textContent = target.toFixed(decimals);
          return;
        }

        const duration = 1600;
        let start: number | null = null;
        const tick = (ts: number) => {
          if (start === null) start = ts;
          const p = Math.min((ts - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = (target * eased).toFixed(decimals);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((el) => countObserver.observe(el));
}

/* ---------- Cursor spotlight (.lp-spot) ---------- */
document.querySelectorAll<HTMLElement>('.lp-spot').forEach((card) => {
  card.addEventListener('pointermove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  });
});

/* ---------- Magnetic buttons ([data-magnetic]) ---------- */
if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((btn) => {
    btn.addEventListener('pointermove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
    });
    btn.addEventListener('pointerleave', () => {
      btn.style.transform = '';
    });
  });
}
