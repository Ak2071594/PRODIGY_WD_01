// Navbar behavior and mobile menu toggle
const navbar = document.getElementById('navbar');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle mobile menu
mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
  })
);

// Change navbar background on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(200, 70, 90, 0.95)';
  } else {
    navbar.style.backgroundColor = 'rgba(240, 89, 108, 0.95)';
  }
});
