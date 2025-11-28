// Reveal on scroll
const reveals = document.querySelectorAll('.reveal, .slide-left, .slide-right, .zoom-in, .stagger');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.2 });

revealObserver.observe(document.body);

reveals.forEach(el => revealObserver.observe(el));