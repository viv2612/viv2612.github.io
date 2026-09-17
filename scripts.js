// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function() {
  var navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      var isOpen = document.querySelector('.nav-links').classList.toggle('nav-open');
      this.classList.toggle('nav-toggle--open', isOpen);
      this.setAttribute('aria-expanded', String(isOpen));
    });
  }

  var currentPath = window.location.pathname.replace(/\/$/, '/index.html');
  document.querySelectorAll('.nav-links a, .marketing-home-brand').forEach(function(link) {
    var linkPath = new URL(link.href, window.location.href).pathname.replace(/\/$/, '/index.html');
    if (linkPath === currentPath) {
      link.setAttribute('aria-current', 'page');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.card').forEach(card => {
    card.classList.add('scroll-animate');
    observer.observe(card);
  });

  document.querySelectorAll('.reveal-fall').forEach(element => {
    observer.observe(element);
  });
});
