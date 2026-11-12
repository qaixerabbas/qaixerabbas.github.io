document.querySelectorAll('a[href]:not(.site-nav a):not(.bibtex-link)').forEach((link) => {
    link.target = '_blank';
    link.rel = 'noopener';
});

const siteNav = document.querySelector('.site-nav');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});
