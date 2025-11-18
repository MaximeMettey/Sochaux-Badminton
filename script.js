// ===================================
// Navigation Toggle
// ===================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ===================================
// Navbar Scroll Effect
// ===================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===================================
// Smooth Scroll
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offset = 80; // Navbar height
            const targetPosition = target.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');

            // For staggered animations
            if (entry.target.classList.contains('about-card') ||
                entry.target.classList.contains('stat-item')) {
                const siblings = entry.target.parentElement.children;
                const index = Array.from(siblings).indexOf(entry.target);
                entry.target.style.animationDelay = `${index * 0.1}s`;
            }
        }
    });
}, observerOptions);

// Observe all animatable elements
const animatableElements = document.querySelectorAll(
    '.about-card, .stat-item, .schedule-card, .pricing-card, .document-card, .contact-item, .contact-form, .important-notice'
);

animatableElements.forEach(el => observer.observe(el));

// ===================================
// Animated Counter for Stats
// ===================================
const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
        current += increment;

        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            animateCounter(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => statsObserver.observe(stat));

// ===================================
// Contact Form Handler avec Web3Forms
// ===================================
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

// Charger la clé API depuis config.js
document.addEventListener('DOMContentLoaded', () => {
    if (typeof CONFIG !== 'undefined' && CONFIG.web3formsKey && CONFIG.web3formsKey !== 'VOTRE_CLE_API_ICI') {
        document.getElementById('accessKey').value = CONFIG.web3formsKey;
    }
});

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Vérifier si la clé API est configurée
    const accessKey = document.getElementById('accessKey').value;
    if (!accessKey || accessKey === '') {
        showErrorMessage('Configuration manquante. Veuillez configurer la clé API dans config.js');
        return;
    }

    // Désactiver le bouton pendant l'envoi
    const originalHTML = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Envoi en cours...</span>';

    try {
        const formData = new FormData(contactForm);

        // Ajouter le sujet personnalisé au message
        const userSubject = formData.get('user_subject');
        const originalMessage = formData.get('message');
        formData.set('message', `Sujet: ${userSubject}\n\n${originalMessage}`);

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            showSuccessMessage('Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
            contactForm.reset();
        } else {
            throw new Error(data.message || 'Erreur lors de l\'envoi');
        }
    } catch (error) {
        console.error('Erreur:', error);
        showErrorMessage('Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.');
    } finally {
        // Réactiver le bouton
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHTML;
    }
});

function showSuccessMessage(message) {
    // Remove existing messages if any
    const existingMessage = document.querySelector('.form-success, .form-error');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create success message
    const successMessage = document.createElement('div');
    successMessage.className = 'form-success';
    successMessage.textContent = message || 'Message envoyé avec succès !';

    // Insert before form
    contactForm.parentNode.insertBefore(successMessage, contactForm);

    // Remove after 5 seconds
    setTimeout(() => {
        successMessage.style.animation = 'fadeOut 0.5s ease-out forwards';
        setTimeout(() => successMessage.remove(), 500);
    }, 5000);
}

function showErrorMessage(message) {
    // Remove existing messages if any
    const existingMessage = document.querySelector('.form-success, .form-error');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create error message
    const errorMessage = document.createElement('div');
    errorMessage.className = 'form-error';
    errorMessage.textContent = message || 'Une erreur est survenue.';

    // Insert before form
    contactForm.parentNode.insertBefore(errorMessage, contactForm);

    // Remove after 7 seconds
    setTimeout(() => {
        errorMessage.style.animation = 'fadeOut 0.5s ease-out forwards';
        setTimeout(() => errorMessage.remove(), 500);
    }, 7000);
}

// ===================================
// Parallax Effect on Hero
// ===================================
const heroBackground = document.querySelector('.hero-background');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;

    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// ===================================
// Dynamic Background Particles (Optional)
// ===================================
function createParticle() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 4 + 1 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = Math.random() > 0.5 ? 'rgba(255, 215, 0, 0.3)' : 'rgba(30, 144, 255, 0.3)';
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.pointerEvents = 'none';
    particle.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out infinite`;
    particle.style.zIndex = '0';

    hero.appendChild(particle);

    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, 5000);
}

// Create particles periodically
setInterval(createParticle, 2000);

// ===================================
// Cursor Trail Effect (Desktop only)
// ===================================
if (window.innerWidth > 768) {
    let cursorTrail = [];
    const maxTrailLength = 10;

    document.addEventListener('mousemove', (e) => {
        // Limit trail creation to reduce performance impact
        if (Math.random() > 0.7) {
            const trail = document.createElement('div');
            trail.style.position = 'fixed';
            trail.style.width = '6px';
            trail.style.height = '6px';
            trail.style.borderRadius = '50%';
            trail.style.background = 'rgba(255, 215, 0, 0.5)';
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
            trail.style.pointerEvents = 'none';
            trail.style.zIndex = '9999';
            trail.style.transition = 'all 0.5s ease-out';
            trail.style.transform = 'scale(1)';

            document.body.appendChild(trail);
            cursorTrail.push(trail);

            // Fade out and remove
            setTimeout(() => {
                trail.style.transform = 'scale(0)';
                trail.style.opacity = '0';
            }, 10);

            setTimeout(() => {
                trail.remove();
                cursorTrail.shift();
            }, 500);

            // Limit trail length
            if (cursorTrail.length > maxTrailLength) {
                const oldTrail = cursorTrail.shift();
                oldTrail.remove();
            }
        }
    });
}

// ===================================
// Add hover effect to buttons
// ===================================
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.width = '0';
        ripple.style.height = '0';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.pointerEvents = 'none';

        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        // Animate ripple
        ripple.animate([
            { width: '0', height: '0', opacity: 1 },
            { width: '200px', height: '200px', opacity: 0 }
        ], {
            duration: 600,
            easing: 'ease-out'
        });

        setTimeout(() => ripple.remove(), 600);
    });
});

// ===================================
// Active Link Highlighting
// ===================================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ===================================
// Loading Animation
// ===================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===================================
// Keyboard Navigation
// ===================================
document.addEventListener('keydown', (e) => {
    // ESC to close mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ===================================
// Accessibility: Focus visible
// ===================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ===================================
// Console Easter Egg
// ===================================
console.log('%c🏸 Sochaux Badminton', 'color: #FFD700; font-size: 24px; font-weight: bold;');
console.log('%cRejoignez-nous pour jouer au badminton !', 'color: #1E90FF; font-size: 14px;');
console.log('%ccontact@sochauxbadminton.com', 'color: #a0a8c0; font-size: 12px;');
