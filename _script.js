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