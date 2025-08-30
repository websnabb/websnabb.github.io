// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        htmlElement.classList.add('light');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        htmlElement.classList.remove('light');
        htmlElement.classList.add('dark');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    }
});

// Testimonial Carousel
const testimonialContainer = document.getElementById('testimonial-container');
let currentTestimonial = 0;

function changeTestimonial(direction) {
    const testimonials = testimonialContainer.children;
    currentTestimonial = (currentTestimonial + direction + testimonials.length) % testimonials.length;
    testimonialContainer.style.transform = `translateX(-${currentTestimonial * 100}%)`;
}

// FAQs Accordion
function toggleAccordion(id) {
    const content = document.getElementById(`${id}-content`);
    const icon = document.getElementById(`${id}-icon`);
    content.classList.toggle('open');
    icon.classList.toggle('rotate-180');
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});