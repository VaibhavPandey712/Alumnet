// ALUMNET JavaScript - Enhanced Interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations with delay for better UX
    initAnimations();
    
    // Back to top button functionality
    initBackToTop();
    
    // Initialize search functionality
    initSearch();
    
    // Enhance navbar interactions
    enhanceNavbar();
    
    // Add hover effects to blog cards
    enhanceBlogCards();
});

/**
 * Initialize animations with sequential timing
 */
function initAnimations() {
    // Add animation classes with delay to create a sequence
    const animatedElements = document.querySelectorAll('.animate__animated');
    
    animatedElements.forEach((element, index) => {
        // Only add delay if not already specified
        if (!element.style.animationDelay) {
            element.style.animationDelay = `${index * 0.1}s`;
        }
        
        // Add animation class
        element.classList.add('animate__animated');
    });
}

/**
 * Back to top button functionality
 */
function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    // Smooth scroll to top when clicked
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Initialize search functionality
 */
function initSearch() {
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.getElementById('searchInput');
    
    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const searchTerm = searchInput.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                showSearchFeedback('Please enter a search term');
                return;
            }
            
            // Define searchable pages
            const pages = [
                { name: 'home', url: 'first.html', keywords: ['home', 'alumnet', 'blog', 'main', 'posts'] },
                { name: 'connect', url: 'connect.html', keywords: ['connect', 'network', 'people', 'alumni', 'students'] },
                { name: 'projects', url: 'project.html', keywords: ['projects', 'research', 'work', 'development', 'ideas'] },
                { name: 'placement', url: 'placement.html', keywords: ['placement', 'jobs', 'career', 'opportunities', 'interview'] },
                { name: 'profile', url: 'profile.html', keywords: ['profile', 'account', 'personal', 'user', 'settings'] }
            ];
            
            // Find matching page
            const matchingPage = findMatchingPage(searchTerm, pages);
            
            if (matchingPage) {
                // Show feedback before redirecting
                showSearchFeedback(`Redirecting to ${matchingPage.name}...`);
                
                // Redirect after a short delay for user feedback
                setTimeout(() => {
                    window.location.href = matchingPage.url;
                }, 800);
            } else {
                showSearchFeedback('No matching results found');
            }
        });
    }
}

/**
 * Find matching page based on search term
 */
function findMatchingPage(searchTerm, pages) {
    // First try exact matches
    for (const page of pages) {
        if (page.name.toLowerCase() === searchTerm) {
            return page;
        }
    }
    
    // Then try keyword matches
    for (const page of pages) {
        for (const keyword of page.keywords) {
            if (keyword.toLowerCase() === searchTerm || 
                keyword.toLowerCase().includes(searchTerm) || 
                searchTerm.includes(keyword.toLowerCase())) {
                return page;
            }
        }
    }
    
    return null;
}

/**
 * Show search feedback to user
 */
function showSearchFeedback(message) {
    // Check if feedback element already exists
    let feedbackElement = document.querySelector('.search-feedback');
    
    if (!feedbackElement) {
        // Create feedback element if it doesn't exist
        feedbackElement = document.createElement('div');
        feedbackElement.className = 'search-feedback alert alert-info mt-2';
        feedbackElement.style.position = 'absolute';
        feedbackElement.style.zIndex = '1000';
        feedbackElement.style.width = '100%';
        
        // Add to the DOM after the search form
        document.querySelector('.search-form').after(feedbackElement);
    }
    
    // Update message
    feedbackElement.textContent = message;
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        feedbackElement.style.display = 'none';
    }, 3000);
}

/**
 * Enhance navbar interactions
 */
function enhanceNavbar() {
    const navbarBrand = document.querySelector('.navbar-brand');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add hover effect to navbar brand
    if (navbarBrand) {
        navbarBrand.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        navbarBrand.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Add hover effect to nav links
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('mouseover', function() {
                this.style.color = '#3a86ff';
            });
            
            link.addEventListener('mouseout', function() {
                if (!this.classList.contains('active')) {
                    this.style.color = '';
                }
            });
        });
    }
    
    // Add active class to current page link
    const currentPage = window.location.pathname.split('/').pop();
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        if (linkPage === currentPage) {
            link.classList.add('active');
            link.style.color = '#3a86ff';
        }
    });
}

/**
 * Enhance blog cards with interactive effects
 */
function enhanceBlogCards() {
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
            
            // Find and animate the image
            const image = this.querySelector('.blog-image');
            if (image) {
                image.style.transform = 'scale(1.05)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            
            // Reset image animation
            const image = this.querySelector('.blog-image');
            if (image) {
                image.style.transform = '';
            }
        });
        
        // Add click functionality to the whole card
        card.addEventListener('click', function(e) {
            // Prevent click if clicking on a link or button
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || 
                e.target.closest('a') || e.target.closest('button')) {
                return;
            }
            
            // Otherwise, navigate to the blog post
            window.location.href = this.querySelector('.blog-actions a').getAttribute('href');
        });
    });
}

/**
 * Apply smooth scrolling to all internal links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});

/**
 * Add page transition effects
 */
window.addEventListener('beforeunload', function() {
    document.body.classList.add('page-transition');
});

/**
 * Console easter egg
 */
console.log('%c🎓 ALUMNET - Connecting Knowledge ', 'background: #3a86ff; color: white; padding: 10px; font-size: 16px; border-radius: 5px;');
console.log('%cWelcome to the network of innovation and collaboration!', 'font-style: italic; color: #333;');