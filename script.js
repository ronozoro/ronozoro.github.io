// Data loading and DOM manipulation
document.addEventListener('DOMContentLoaded', async function() {
    // Load resume data
    try {
        const response = await fetch('./data.json');
        const data = await response.json();
        
        // Populate experience timeline
        populateExperience(data.experience);
        
        // Populate skills
        populateSkills(data.skills);
        
        // Populate education
        populateEducation(data.education);
        
    } catch (error) {
        console.error('Error loading data:', error);
        // Fallback to show static content if data loading fails
        showStaticContent();
    }
    
    // Initialize interactive features
    initNavigation();
    initThemeToggle();
    initSmoothScroll();
    initAnimations();
});

// Populate experience timeline
function populateExperience(experiences) {
    const container = document.getElementById('experience-timeline');
    if (!container || !experiences) return;
    
    container.innerHTML = experiences.map(exp => `
        <div class="timeline__item">
            <div class="timeline__header">
                <h3 class="timeline__title">${exp.title}</h3>
                <div class="timeline__company">${exp.company}</div>
                <div class="timeline__meta">${exp.period} • ${exp.location}</div>
            </div>
            <div class="timeline__content">
                <ul class="timeline__highlights">
                    ${exp.highlights.map(highlight => `
                        <li class="timeline__highlight">${highlight}</li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// Populate skills section
function populateSkills(skills) {
    const container = document.getElementById('skills-container');
    if (!container || !skills) return;
    
    container.innerHTML = Object.entries(skills).map(([category, skillList]) => `
        <div class="skills__category">
            <h3 class="skills__category-title">${category}</h3>
            <div class="skills__list">
                ${skillList.map(skill => `
                    <span class="skill">${skill}</span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Populate education section
function populateEducation(education) {
    const container = document.getElementById('education-container');
    if (!container || !education) return;
    
    container.innerHTML = education.map(edu => `
        <div class="education__item">
            <h3 class="education__degree">${edu.degree}${edu.minor ? `, ${edu.minor}` : ''}</h3>
            <div class="education__school">${edu.school}</div>
            <div class="education__meta">${edu.location} • ${edu.year}</div>
        </div>
    `).join('');
}

// Fallback static content if data loading fails
function showStaticContent() {
    // Show basic experience if data loading fails
    const experienceContainer = document.getElementById('experience-timeline');
    if (experienceContainer) {
        experienceContainer.innerHTML = `
            <div class="timeline__item">
                <div class="timeline__header">
                    <h3 class="timeline__title">Software Engineer</h3>
                    <div class="timeline__company">Freight Right</div>
                    <div class="timeline__meta">Jan 2025 - Present • Los Angeles, CA</div>
                </div>
                <div class="timeline__content">
                    <ul class="timeline__highlights">
                        <li class="timeline__highlight">Building high-performance freight quote systems</li>
                        <li class="timeline__highlight">Optimizing database performance and API integrations</li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    // Show basic skills if data loading fails
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        skillsContainer.innerHTML = `
            <div class="skills__category">
                <h3 class="skills__category-title">Programming</h3>
                <div class="skills__list">
                    <span class="skill">Python</span>
                    <span class="skill">Java</span>
                    <span class="skill">JavaScript</span>
                    <span class="skill">Spring Boot</span>
                    <span class="skill">Flask</span>
                </div>
            </div>
        `;
    }
}

// Navigation functionality
function initNavigation() {
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    const navLinks = document.querySelectorAll('.nav__link');
    
    if (!navToggle || !navMenu) return;
    
    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        const isOpen = navMenu.classList.contains('nav__menu--open');
        
        navMenu.classList.toggle('nav__menu--open');
        navToggle.setAttribute('aria-expanded', !isOpen);
        
        // Animate hamburger lines
        const lines = navToggle.querySelectorAll('.nav__toggle-line');
        if (!isOpen) {
            lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
        }
    });
    
    // Close menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('nav__menu--open');
            navToggle.setAttribute('aria-expanded', 'false');
            
            // Reset hamburger lines
            const lines = navToggle.querySelectorAll('.nav__toggle-line');
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('nav__menu--open');
            navToggle.setAttribute('aria-expanded', 'false');
            
            // Reset hamburger lines
            const lines = navToggle.querySelectorAll('.nav__toggle-line');
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
        }
    });
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-toggle__icon');
    
    if (!themeToggle || !themeIcon) return;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    // Apply initial theme
    document.documentElement.setAttribute('data-theme', initialTheme);
    updateThemeIcon(initialTheme);
    
    // Theme toggle click handler
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add a subtle animation to the toggle
        themeIcon.style.transform = 'rotate(180deg)';
        setTimeout(() => {
            themeIcon.style.transform = 'none';
        }, 300);
    });
    
    function updateThemeIcon(theme) {
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            updateThemeIcon(newTheme);
        }
    });
}

// Smooth scrolling for navigation links
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize animations and intersection observer
function initAnimations() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.timeline__item, .stat, .education__item, .skill, .contact__method'
    );
    
    animatedElements.forEach((el, index) => {
        // Initial state
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        // Observe for intersection
        observer.observe(el);
    });
}

// Form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            // Let the default mailto behavior work, but add some UX feedback
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Opening email client...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });
    }
});

// Lazy loading for images (if any are added later)
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Performance optimization: debounce resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(function() {
    // Close mobile menu on resize to larger screen
    const navMenu = document.querySelector('.nav__menu');
    const navToggle = document.querySelector('.nav__toggle');
    
    if (window.innerWidth > 768 && navMenu && navToggle) {
        navMenu.classList.remove('nav__menu--open');
        navToggle.setAttribute('aria-expanded', 'false');
        
        // Reset hamburger lines
        const lines = navToggle.querySelectorAll('.nav__toggle-line');
        lines[0].style.transform = 'none';
        lines[1].style.opacity = '1';
        lines[2].style.transform = 'none';
    }
}, 250));

// Error handling for failed network requests
window.addEventListener('error', function(e) {
    console.error('Script error:', e.error);
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav__menu');
        const navToggle = document.querySelector('.nav__toggle');
        
        if (navMenu && navMenu.classList.contains('nav__menu--open')) {
            navMenu.classList.remove('nav__menu--open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.focus();
            
            // Reset hamburger lines
            const lines = navToggle.querySelectorAll('.nav__toggle-line');
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
        }
    }
});