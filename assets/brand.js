(() => {
  const brand = { name: "Ultron's Pigeon", descriptor: 'Development Codename', status: 'Final product name: TBD' };
  document.querySelectorAll('[data-brand]').forEach(e => e.textContent = `${brand.name} (${brand.descriptor})`);
  document.querySelectorAll('[data-status]').forEach(e => e.textContent = brand.status);
  document.querySelectorAll('[data-title]').forEach(e => document.title = `${e.dataset.title} | ${brand.name} (${brand.descriptor})`);
  const button = document.querySelector('.nav-toggle'), nav = document.querySelector('.site-nav');
  if (button && nav) button.addEventListener('click', () => { const open = button.getAttribute('aria-expanded') === 'true'; button.setAttribute('aria-expanded', String(!open)); nav.classList.toggle('open', !open); });
})();