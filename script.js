
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

const artworks = [
  { title: "Veiled Motion", artist: "Aria Sol", category: "abstract", image: "https://images.unsplash.com/photo-1577083552431-6e5fd01988f1?auto=format&fit=crop&w=1200&q=80" },
  { title: "Ivory Muse", artist: "Noah Ren", category: "portrait", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80" },
  { title: "Distant Quiet", artist: "Mara Lin", category: "landscape", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80" },
  { title: "Neon Archive", artist: "Kian Voss", category: "digital", image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=80" },
  { title: "Fragment Study", artist: "Elio Vane", category: "abstract", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80" },
  { title: "Silent Monarch", artist: "Isla Greer", category: "portrait", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200&q=80" },
  { title: "Aurum Coast", artist: "Luka Aster", category: "landscape", image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1200&q=80" },
  { title: "Lattice Bloom", artist: "Rin Hale", category: "digital", image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=1200&q=80" }
];

const gallery = document.getElementById("gallery");
const filterButtons = document.querySelectorAll(".filter");
const modal = document.getElementById("artworkModal");
const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalArtist = document.getElementById("modalArtist");
const modalCategory = document.getElementById("modalCategory");

function createCard(artwork, index) {
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.category = artwork.category;
  card.style.animationDelay = `${index * 70}ms`;

  card.innerHTML = `
    <img src="${artwork.image}" alt="${artwork.title} by ${artwork.artist}" loading="lazy" />
    <div class="card-info">
      <h3>${artwork.title}</h3>
      <p>${artwork.artist}</p>
    </div>
  `;

  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = ((y / rect.height) - 0.5) * -12;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;
    card.style.borderColor = "rgba(215,180,131,0.45)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
    card.style.borderColor = "rgba(255,255,255,0.08)";
  });

  card.addEventListener("click", () => {
    modalImage.src = artwork.image;
    modalTitle.textContent = artwork.title;
    modalArtist.textContent = artwork.artist;
    modalCategory.textContent = artwork.category;
    modal.showModal();
  });

  gallery.appendChild(card);
}

artworks.forEach(createCard);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("is-active"));
    button.classList.add("is-active");

    const selected = button.dataset.filter;
    document.querySelectorAll(".card").forEach((card) => {
      const match = selected === "all" || card.dataset.category === selected;
      card.classList.toggle("hidden", !match);
    });
  });
});

closeModal.addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.open) {
    modal.close();
  }

});
