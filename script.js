/* Preview gallery and checkout. No Pixel is loaded until its ID is confirmed. */
(() => {
  let expiredOfferApplied = false;
  function refreshOffer() {
    if (expiredOfferApplied || !isMathMasteryOfferExpired()) return;
    expiredOfferApplied = true;
    document.querySelectorAll('[data-promo-note]').forEach(note => {
      note.textContent = 'Tawaran RM39 telah tamat pada 30 Oktober 2026. Hubungi kami untuk semak tawaran terkini. Akses pembelian sedia ada tidak terjejas.';
    });
    document.querySelectorAll('[data-checkout]').forEach(link => {
      link.href = 'https://wa.me/60139216335';
      link.textContent = 'SEMAK TAWARAN TERKINI';
      link.removeAttribute('data-checkout');
    });
    document.querySelectorAll('[data-view-offer]').forEach(link => { link.textContent = 'LIHAT TAWARAN TERKINI'; });
    document.querySelector('.expired-contact').hidden = false;
    document.querySelector('.price-card').hidden = true;
    document.querySelector('.sticky-buy strong').textContent = 'Info akses';
    document.querySelector('.sticky-buy span').textContent = 'Semak tawaran terkini';
  }
  refreshOffer();
  const countdown = document.querySelector('.offer-countdown');
  function refreshCountdown() {
    refreshOffer();
    const left = getMathMasteryTimeLeft();
    Object.entries(left).forEach(([unit, value]) => {
      countdown.querySelector(`[data-count="${unit}"]`).textContent = String(value).padStart(2, '0');
    });
    const expired = isMathMasteryOfferExpired();
    countdown.querySelector('.countdown-title').hidden = expired;
    countdown.querySelector('.countdown-digits').hidden = expired;
    countdown.querySelector('.countdown-end').hidden = !expired;
    countdown.hidden = false;
  }
  refreshCountdown();
  setInterval(refreshCountdown, 1000);
  document.addEventListener('visibilitychange', refreshCountdown);
  document.addEventListener('visibilitychange', refreshOffer);
  const dialog = document.querySelector('.image-dialog');
  const image = document.getElementById('large-image');
  const title = document.getElementById('image-title');
  let trigger;
  document.querySelectorAll('[data-preview]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || typeof dialog.showModal !== 'function') return;
      event.preventDefault();
      trigger = link;
      title.textContent = link.dataset.preview;
      image.src = link.href;
      image.alt = link.querySelector('img').alt;
      dialog.showModal();
      dialog.scrollTop = 0;
    });
  });
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
  dialog.addEventListener('close', () => { if (trigger) trigger.focus({preventScroll:true}); });
  const sticky = document.querySelector('.sticky-buy');
  const hero = document.querySelector('.hero');
  const price = document.querySelector('.price-card');
  const closing = document.querySelector('.closing');
  const visible = new Map([[hero,true],[price,false],[closing,false]]);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => visible.set(entry.target,entry.isIntersecting));
      sticky.hidden = [...visible.values()].some(Boolean);
    });
    [hero,price,closing].forEach(element => observer.observe(element));
  }
  document.addEventListener('click', event => {
    refreshOffer();
    if (!event.target.closest('[data-checkout]')) return;
    if (typeof window.fbq === 'function') {
      try { window.fbq('track','InitiateCheckout',{content_name:'Math Mastery Bundle',value:39,currency:'MYR'}); } catch (_) { /* Preserve checkout navigation. */ }
    }
  });
})();


