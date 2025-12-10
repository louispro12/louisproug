// Simple fade-in animation when page loads
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 1;
});

// Mobile menu toggle (optional future feature)
// Scroll animation: floating from bottom
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});

