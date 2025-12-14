// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)'; // Darker Navy
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
        navbar.style.padding = '0'; // Optional smooth shrink effect could be added here
    } else {
        navbar.style.background = '#0f172a'; // Solid Navy at top
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    }
});

// FAQ Accordion
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionContent = header.nextElementSibling;

        // Close other open items
        document.querySelectorAll('.accordion-content').forEach(content => {
            if (content !== accordionContent) {
                content.style.maxHeight = null;
                content.parentElement.querySelector('.accordion-header').classList.remove('active');
            }
        });

        // Toggle current item
        header.classList.toggle('active');
        if (header.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        } else {
            accordionContent.style.maxHeight = null;
        }
    });
});

// Smooth Scroll for anchor links (polyfill for older browsers if needed, but CSS scroll-behavior usually handles it)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Offset for fixed header
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// Reviews Carousel Logic
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('reviews-track');
    const nextBtn = document.getElementById('review-next-btn');
    const prevBtn = document.getElementById('review-prev-btn');

    if (track && nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: 320, behavior: 'smooth' }); // 300px card + 20px gap
        });

        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -320, behavior: 'smooth' });
        });
    }
});
