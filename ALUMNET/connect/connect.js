document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize hover effects
    initializeHoverEffects();
    
    // Check for dark mode preference
    checkDarkModePreference();
});

/**
 * Initialize animations for various elements
 */
function initAnimations() {
    // Staggered animation for connection cards
    const connectionCards = document.querySelectorAll('.connection-card');
    connectionCards.forEach((card, index) => {
        card.classList.add('animate__animated', 'animate__fadeIn');
        card.style.animationDelay = `${0.1 * (index % 4)}s`;
    });
    
    // Add entrance animation to list-group-items
    const listItems = document.querySelectorAll('.list-group-item');
    listItems.forEach((item, index) => {
        item.classList.add('animate__animated', 'animate__fadeInLeft');
        item.style.animationDelay = `${0.1 * index}s`;
    });
}

/**
 * Set up event listeners for various elements
 */
function setupEventListeners() {
    // Connect button click handlers
    const connectButtons = document.querySelectorAll('.connect-btn');
    connectButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.connection-card');
            const name = card.querySelector('h5').textContent;
            
            // Change button text and style
            this.innerHTML = '<i class="fas fa-check me-2"></i>Pending';
            this.classList.remove('btn-outline-primary');
            this.classList.add('btn-light', 'text-muted');
            this.disabled = true;
            
            // Show toast notification
            showToast(`Connection request sent to ${name}`);
            
            // Add subtle animation to the card
            card.classList.add('animate__animated', 'animate__pulse');
            setTimeout(() => {
                card.classList.remove('animate__animated', 'animate__pulse');
            }, 1000);
        });
    });
    
    // Dismiss buttons
    const dismissButtons = document.querySelectorAll('.dismiss-btn .btn-close');
    dismissButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.col');
            card.classList.add('animate__animated', 'animate__fadeOut');
            
            setTimeout(() => {
                card.remove();
            }, 500);
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            const cards = document.querySelectorAll('.connection-card');
            
            cards.forEach(card => {
                const name = card.querySelector('h5').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                const parentCol = card.closest('.col');
                
                if (query === '' || name.includes(query) || description.includes(query)) {
                    parentCol.style.display = 'block';
                } else {
                    parentCol.style.display = 'none';
                }
            });
        });
    }
    
    // Show all links
    const showAllLinks = document.querySelectorAll('.show-all');
    showAllLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showToast('Loading more connections...');
        });
    });
    
    // Messaging button
    const messagingBtn = document.querySelector('.messaging-button .btn');
    if (messagingBtn) {
        messagingBtn.addEventListener('click', function() {
            showToast('Messaging panel coming soon!');
            this.classList.add('animate__animated', 'animate__rubberBand');
            setTimeout(() => {
                this.classList.remove('animate__animated', 'animate__rubberBand');
            }, 1000);
        });
    }
}

/**
 * Initialize hover effects for various elements
 */
function initializeHoverEffects() {
    // Add hover effect to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        });
    });
}

/**
 * Check user's dark mode preference and apply it
 */
function checkDarkModePreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }
    
    // Listen for changes in color scheme preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (e.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
}

/**
 * Show a toast notification
 * @param {string} message - The message to display in the toast
 */
function showToast(message) {
    // Create toast container if it doesn't exist
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
        document.body.appendChild(toastContainer);
    }
    
    // Create the toast element
    const toastId = 'toast-' + Date.now();
    const toastHTML = `
        <div id="${toastId}" class="toast align-items-center text-white bg-primary border-0 animate__animated animate__fadeInUp" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                    ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    `;
    
    // Add toast to container
    toastContainer.insertAdjacentHTML('beforeend', toastHTML);
    
    // Initialize and show the toast
    const toastElement = document.getElementById(toastId);
    const toast = new bootstrap.Toast(toastElement, {
        autohide: true,
        delay: 3000
    });
    
    toast.show();
    
    // Remove toast from DOM after it's hidden
    toastElement.addEventListener('hidden.bs.toast', function() {
        this.remove();
    });
}

/**
 * Create a ripple effect on button click
 * @param {Event} e - The click event
 */
function createRippleEffect(e) {
    const button = e.currentTarget;
    
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');
    
    const ripple = button.querySelector('.ripple');
    if (ripple) {
        ripple.remove();
    }
    
    button.appendChild(circle);
}

// Add ripple effect to all buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('click', createRippleEffect);
});

// Add ripple style
const style = document.createElement('style');
style.textContent = `
.btn {
    position: relative;
    overflow: hidden;
}

.ripple {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    transform: scale(0);
    animation: ripple 0.6s linear;
    pointer-events: none;
}

@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);