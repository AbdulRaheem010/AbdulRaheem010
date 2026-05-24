// Mobile navigation toggle
const menuBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('show');
  menuBtn.setAttribute('aria-expanded', isOpen);
});

// Theme persistence and toggle
const themeToggle = document.getElementById('theme-toggle');
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'light') {
  document.body.classList.add('light');
  themeToggle.textContent = '☀️';
}
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  themeToggle.textContent = isLight ? '☀️' : '🌙';
});

// Testimonial slider controls
const testimonials = [...document.querySelectorAll('.testimonial')];
let currentTestimonial = 0;
const showTestimonial = (index) => {
  testimonials.forEach((item, i) => item.classList.toggle('active', i === index));
};
document.getElementById('next-testimonial').addEventListener('click', () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
});
document.getElementById('prev-testimonial').addEventListener('click', () => {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
});

// Reveal animations on scroll
const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });
revealItems.forEach((item) => observer.observe(item));

// Contact form validation
const form = document.getElementById('contact-form');
const statusMessage = document.getElementById('form-status');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    statusMessage.textContent = 'Please complete all fields with valid information.';
    statusMessage.style.color = '#ffb4b4';
    return;
  }

  statusMessage.textContent = 'Thanks! Your message has been sent successfully.';
  statusMessage.style.color = '#8dffc0';
  form.reset();
});
