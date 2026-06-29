const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');

function setMenuState(isOpen) {
    if (!mobileMenu || !navMenu) return;

    mobileMenu.classList.toggle('active', isOpen);
    navMenu.classList.toggle('active', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    mobileMenu.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
}

if (mobileMenu && navMenu) {
    mobileMenu.addEventListener('click', () => {
        setMenuState(!navMenu.classList.contains('active'));
    });
}

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        setMenuState(false);
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        setMenuState(false);
    }
});

function updateNavbarState() {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 24);
}

updateNavbarState();
window.addEventListener('scroll', updateNavbarState, { passive: true });

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (event) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        event.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach((header) => {
    header.setAttribute('aria-expanded', 'false');

    const content = header.nextElementSibling;
    if (content) {
        const contentId = `faq-${Math.random().toString(36).slice(2, 9)}`;
        content.id = contentId;
        header.setAttribute('aria-controls', contentId);
    }

    header.addEventListener('click', () => {
        const accordionContent = header.nextElementSibling;
        const willOpen = !header.classList.contains('active');

        accordionHeaders.forEach((otherHeader) => {
            const otherContent = otherHeader.nextElementSibling;
            otherHeader.classList.remove('active');
            otherHeader.setAttribute('aria-expanded', 'false');
            if (otherContent) {
                otherContent.style.maxHeight = null;
            }
        });

        if (willOpen && accordionContent) {
            header.classList.add('active');
            header.setAttribute('aria-expanded', 'true');
            accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`;
        }
    });
});

const reviewTrack = document.getElementById('reviews-track');
const nextReviewButton = document.getElementById('review-next-btn');
const prevReviewButton = document.getElementById('review-prev-btn');

function scrollReviews(direction) {
    if (!reviewTrack) return;
    const firstCard = reviewTrack.querySelector('.review-card');
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 310;
    reviewTrack.scrollBy({
        left: direction * (cardWidth + 16),
        behavior: 'smooth',
    });
}

if (reviewTrack && nextReviewButton && prevReviewButton) {
    nextReviewButton.addEventListener('click', () => scrollReviews(1));
    prevReviewButton.addEventListener('click', () => scrollReviews(-1));
}
