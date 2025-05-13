document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Profile dropdown functionality
    const profileDropdown = document.querySelector('.profile-dropdown');
    if (profileDropdown) {
        profileDropdown.addEventListener('click', function() {
            // This would toggle a dropdown menu in a real implementation
            console.log('Profile dropdown clicked');
        });
    }

    // Like button functionality
    document.querySelectorAll('.post-actions button').forEach(button => {
        button.addEventListener('click', function() {
            if (this.innerHTML.includes('Like')) {
                // Toggle like state
                const icon = this.querySelector('i');
                if (icon.classList.contains('far')) {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                    this.style.color = '#0a66c2';
                } else {
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                    this.style.color = '';
                }
            }
        });
    });

    // Follow button functionality
    document.querySelectorAll('.btn-follow').forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent === '+ Follow') {
                this.textContent = 'Following';
                this.style.backgroundColor = '#e2f0fe';
                this.style.borderColor = '#0a66c2';
                this.style.color = '#0a66c2';
            } else {
                this.textContent = '+ Follow';
                this.style.backgroundColor = '';
                this.style.borderColor = '';
                this.style.color = '';
            }
        });
    });

    // Checkbox functionality for skills
    document.querySelectorAll('.skill-checkbox input').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const skillItem = this.closest('.skill-item');
            if (this.checked) {
                skillItem.style.opacity = '1';
            } else {
                skillItem.style.opacity = '0.6';
            }
        });
    });

    // Animation for elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.profile-section, .sidebar-section, .post').forEach(section => {
        observer.observe(section);
    });
});