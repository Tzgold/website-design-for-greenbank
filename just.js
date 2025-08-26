// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-out'
    });

    // Mobile Menu Functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.mobile-nav-overlay');

    function toggleMobileMenu() {
        nav.classList.toggle('mobile-nav-active');
        document.body.classList.toggle('no-scroll');
        
        if (nav.classList.contains('mobile-nav-active')) {
            overlay.style.display = 'block';
            setTimeout(() => {
                overlay.style.opacity = '1';
            }, 10);
        } else {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 300);
        }
    }

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    overlay.addEventListener('click', toggleMobileMenu);

    // Navigation Active State
    const navLinksAll = document.querySelectorAll('.nav-link');
    
    navLinksAll.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinksAll.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            // Close mobile menu if open
            if (nav.classList.contains('mobile-nav-active')) {
                toggleMobileMenu();
            }
        });
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Credit Card Interactive Effects
    const creditCard = document.querySelector('.credit-card');
    
    if (creditCard) {
        // Subtle floating animation
        let floatingAnimation = anime({
            targets: creditCard,
            translateY: [0, -20],
            duration: 1500,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutQuad',
            autoplay: true
        });

        // Mouse move effect
        document.addEventListener('mousemove', function(e) {
            if (window.innerWidth > 1024) { // Only on desktop
                const rect = creditCard.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                const moveX = (e.clientX - centerX) / 20;
                const moveY = (e.clientY - centerY) / 20;
                
                creditCard.style.transform = `
                    rotate(-15deg)
                    perspective(1000px)
                    rotateY(${moveX}deg)
                    rotateX(${-moveY}deg)
                `;
            }
        });

        // Reset transform on mouse leave
        document.addEventListener('mouseleave', function() {
            if (window.innerWidth > 1024) {
                creditCard.style.transform = 'rotate(-15deg)';
            }
        });
    }

    // Get Started Button Effect
    const getStartedBtn = document.querySelector('.get-started');
    
    if (getStartedBtn) {
        getStartedBtn.addEventListener('mouseenter', function() {
            anime({
                targets: this.querySelector('span'),
                translateX: 5,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });

        getStartedBtn.addEventListener('mouseleave', function() {
            anime({
                targets: this.querySelector('span'),
                translateX: 0,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    }

    // Partner Logos Animation
    const partnerLogos = document.querySelectorAll('.partners-grid img');
    
    partnerLogos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.1,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });

        logo.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });

    // Scroll Progress Indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = `${progress}%`;
    });
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const nav = document.querySelector('nav');
        const overlay = document.querySelector('.mobile-nav-overlay');
        
        nav.classList.remove('mobile-nav-active');
        document.body.classList.remove('no-scroll');
        overlay.style.display = 'none';
    }
});

// Add to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    // Floating cards animation
    const cards = document.querySelectorAll('.floating-cards .card');
    
    cards.forEach((card, index) => {
        anime({
            targets: card,
            translateY: [10, -10],
            duration: 2000,
            delay: index * 200,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutQuad'
        });
    });

    // Testimonial cards hover effect
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.background = 'rgba(255, 255, 255, 0.08)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.background = 'rgba(255, 255, 255, 0.05)';
        });
    });
});





// Add to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    // Floating animation for app screenshots
    const screens = document.querySelectorAll('.screen');
    
    screens.forEach((screen, index) => {
        anime({
            targets: screen,
            translateY: ['-50%', '-55%'],
            duration: 2000,
            delay: index * 200,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutQuad'
        });
    });
});







// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Create animated background lines
    const bgLines = document.querySelector('.bg-lines');
    for (let i = 0; i < 10; i++) {
        const line = document.createElement('div');
        line.className = 'bg-line';
        line.style.top = `${Math.random() * 100}%`;
        line.style.animationDelay = `${Math.random() * 5}s`;
        bgLines.appendChild(line);
    }

    // Create animated background dots
    const bgDots = document.querySelector('.bg-dots');
    for (let i = 0; i < 50; i++) {
        const dot = document.createElement('div');
        dot.className = 'bg-dot';
        dot.style.width = `${Math.random() * 4 + 2}px`;
        dot.style.height = dot.style.width;
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.animation = `dotFloat ${Math.random() * 3 + 2}s ease-in-out infinite`;
        dot.style.animationDelay = `${Math.random() * 2}s`;
        bgDots.appendChild(dot);
    }

    // Parallax effect for background elements
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        const dots = document.querySelectorAll('.bg-dot');
        dots.forEach(dot => {
            const offsetX = (mouseX - 0.5) * 20;
            const offsetY = (mouseY - 0.5) * 20;
            dot.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });

        const lines = document.querySelectorAll('.bg-line');
        lines.forEach(line => {
            const offsetX = (mouseX - 0.5) * 10;
            line.style.transform = `translateX(${offsetX}px) rotate(-45deg)`;
        });
    });
});

// Add smooth scrolling effect
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const dots = document.querySelectorAll('.bg-dot');
    dots.forEach(dot => {
        dot.style.transform = `translateY(${scrolled * 0.1}px)`;
    });
});



// Throttle mouse move events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Use throttled version for mouse move
document.addEventListener('mousemove', throttle(function(e) {
    // ... existing mousemove code ...
}, 50));




// Add to your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Add hover effect for roadmap items
    const roadmapItems = document.querySelectorAll('.roadmap-item');
    
    roadmapItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.02)';
            item.style.zIndex = '3';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
            item.style.zIndex = '2';
        });
    });
});