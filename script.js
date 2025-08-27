// Mobile navbar toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Pricing toggle
const pricingToggle = document.getElementById("pricing-toggle");
const litePrice = document.getElementById("lite-price");
const starterPrice = document.getElementById("starter-price");

pricingToggle.addEventListener("change", () => {
  if (pricingToggle.checked) {
    litePrice.textContent = "€189/year";
    starterPrice.textContent = "€290/year";
  } else {
    litePrice.textContent = "€18.99/mo";
    starterPrice.textContent = "€29/mo";
  }
});
