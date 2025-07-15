
// Initialize Lucide icons
lucide.createIcons();

// Dark mode functionality
let isDark = false;

function toggleDarkMode() {
    isDark = !isDark;
    document.body.classList.toggle('dark', isDark);
    
    const themeIcon = document.getElementById('theme-icon');
    themeIcon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
    lucide.createIcons();
}

// Scroll animations
function handleScroll() {
    const scrollTop = window.pageYOffset;
    const scrollButton = document.getElementById('scrollTop');
    
    // Show/hide scroll to top button
    if (scrollTop > 400) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
    
    // Blow up animation on scroll
    const elements = document.querySelectorAll('.blow-up');
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('in-view');
        }
    });
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Smooth scrolling for navigation links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Event listeners
window.addEventListener('scroll', handleScroll);
document.getElementById('scrollTop').addEventListener('click', scrollToTop);

// Add smooth scrolling to navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        smoothScroll(target);
    });
});

// Hover effects for cards
document.querySelectorAll('.card img').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    handleScroll();
    
    // Initialize Lucide icons after DOM is loaded
    lucide.createIcons();
});