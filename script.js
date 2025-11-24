// ===================================
// Set Current Year
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

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
    '.about-card, .schedule-card, .pricing-card, .document-card, .contact-item, .contact-form, .important-notice'
);

animatableElements.forEach(el => observer.observe(el));

// ===================================
// Contact Form Handler avec FormSubmit + hCaptcha
// ===================================

// Charger la configuration hCaptcha depuis config.js
document.addEventListener('DOMContentLoaded', () => {
    if (typeof CONFIG !== 'undefined') {
        // Configurer la clé hCaptcha
        if (CONFIG.hcaptchaSiteKey && CONFIG.hcaptchaSiteKey !== 'VOTRE_SITE_KEY_HCAPTCHA_ICI') {
            const hcaptchaDiv = document.querySelector('.h-captcha');
            if (hcaptchaDiv) {
                hcaptchaDiv.setAttribute('data-sitekey', CONFIG.hcaptchaSiteKey);
            }
        }

        // Configurer l'URL de redirection (optionnel)
        if (CONFIG.redirectUrl) {
            const redirectInput = document.getElementById('redirectUrl');
            if (redirectInput) {
                redirectInput.value = CONFIG.redirectUrl;
            }
        }
    }
});

// Note: FormSubmit gère automatiquement la soumission du formulaire
// Le formulaire HTML utilise method="POST" et action="https://formsubmit.co/..."
// Pas besoin de JavaScript pour l'envoi !

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

// ===================================
// Message de confirmation après envoi - VERSION CORRIGÉE
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Script chargé, vérification du paramètre sent...');
    
    // Vérifier si le paramètre ?sent=1 est présent dans l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const sentParam = urlParams.get('sent');
    
    console.log('Paramètre sent:', sentParam);
    
    if (sentParam === '1') {
        console.log('Paramètre sent=1 détecté, affichage du message...');
        
        // Afficher le message de confirmation
        const successMessage = document.getElementById('successMessage');
        console.log('Element successMessage:', successMessage);
        
        if (successMessage) {
            successMessage.style.display = 'flex';
            console.log('Message affiché');
            
            // Scroll vers le haut
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Nettoyer l'URL après 2 secondes (enlever le paramètre ?sent=1)
            setTimeout(() => {
                const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
                window.history.replaceState({}, document.title, newUrl);
                console.log('URL nettoyée');
            }, 2000);
        } else {
            console.error('Element successMessage non trouvé dans le DOM');
        }
    }
});

// Fonction pour fermer le message de confirmation
function closeSuccessMessage() {
    console.log('Fermeture du message...');
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 300);
    }
}
