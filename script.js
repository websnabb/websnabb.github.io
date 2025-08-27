// Toggle mobile menu
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Pricing toggle
const toggle = document.getElementById("pricing-toggle");
const litePrice = document.getElementById("lite-price");
const starterPrice = document.getElementById("starter-price");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    litePrice.textContent = "€189/yr";
    starterPrice.textContent = "€290/yr";
  } else {
    litePrice.textContent = "€18.99/mo";
    starterPrice.textContent = "€29/mo";
  }
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    mobileMenu.classList.add("hidden"); // close menu on mobile
  });
});
