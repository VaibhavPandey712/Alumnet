/**
 * ALUMNET Project Showcase
 * JavaScript functionality for the project showcase page
 */

// Initialize AOS animation library
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Project form submission
    const projectForm = document.getElementById('projectUploadForm');
    const projectImage = document.getElementById('projectImage');
    let imagePreviewContainer;

    // Create image preview functionality
    if (projectImage) {
        // Create image preview container
        imagePreviewContainer = document.createElement('div');
        imagePreviewContainer.className = 'image-preview mt-2';
        imagePreviewContainer.innerHTML = '<p class="text-muted">Image preview will appear here</p>';
        projectImage.parentNode.appendChild(imagePreviewContainer);

        // Handle image preview
        projectImage.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file && file.type.match('image.*')) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    imagePreviewContainer.innerHTML = '';
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.className = 'img-fluid';
                    imagePreviewContainer.appendChild(img);
                    
                    // Add animation to the preview
                    imagePreviewContainer.style.animation = 'fadeIn 0.5s';
                };
                
                reader.readAsDataURL(file);
            }
        });
    }

    // Handle form submission
    if (projectForm) {
        projectForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = projectForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submitting...';
            submitBtn.disabled = true;
            
            // Simulate form submission (would be replaced with actual AJAX in production)
            setTimeout(function() {
                // Reset form and button
                projectForm.reset();
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                
                // Reset image preview
                if (imagePreviewContainer) {
                    imagePreviewContainer.innerHTML = '<p class="text-muted">Image preview will appear here</p>';
                }
                
                // Show success modal
                const successModal = new bootstrap.Modal(document.getElementById('successModal'));
                successModal.show();
            }, 1500);
        });
    }

    // Project filtering functionality
    const filterButtons = document.querySelectorAll('.filter-buttons .btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to current button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects
            projectItems.forEach(item => {
                // Reset animations
                item.classList.remove('animate__animated', 'animate__fadeIn');
                void item.offsetWidth; // Trigger reflow
                
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    item.classList.add('animate__animated', 'animate__fadeIn');
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Project search functionality
    const searchInput = document.getElementById('projectSearchInput');
    
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const searchTerm = this.value.toLowerCase();
            
            projectItems.forEach(item => {
                const projectTitle = item.querySelector('.card-title').textContent.toLowerCase();
                const projectDesc = item.querySelector('.card-text').textContent.toLowerCase();
                const projectAuthor = item.querySelector('.project-author').textContent.toLowerCase();
                
                if (
                    projectTitle.includes(searchTerm) || 
                    projectDesc.includes(searchTerm) || 
                    projectAuthor.includes(searchTerm)
                ) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // Project modal functionality
    const projectModal = document.getElementById('projectModal');
    const viewProjectButtons = document.querySelectorAll('.view-project');
    
    if (projectModal && viewProjectButtons.length > 0) {
        viewProjectButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get project ID
                const projectId = this.getAttribute('data-id');
                
                // Get project data (in real app would fetch from server)
                const projectCard = this.closest('.project-card');
                const projectTitle = projectCard.querySelector('.card-title').textContent;
                const projectDesc = projectCard.querySelector('.card-text').textContent;
                const projectAuthor = projectCard.querySelector('.project-author').textContent;
                const projectImage = projectCard.querySelector('img').src;
                const githubLink = projectCard.querySelector('a[target="_blank"]').href;
                const projectTags = projectCard.querySelectorAll('.badge');
                
                // Set modal content
                document.getElementById('modalProjectTitle').textContent = projectTitle;
                document.getElementById('modalProjectDescription').textContent = projectDesc;
                document.getElementById('modalProjectAuthor').textContent = projectAuthor.replace('', '');
                document.getElementById('modalProjectImage').querySelector('img').src = projectImage;
                document.getElementById('modalGithubLink').href = githubLink;
                
                // Set tags
                const tagsContainer = document.getElementById('modalProjectTags');
                tagsContainer.innerHTML = '';
                projectTags.forEach(tag => {
                    const newTag = document.createElement('span');
                    newTag.className = tag.className;
                    newTag.textContent = tag.textContent;
                    newTag.style.marginRight = '5px';
                    tagsContainer.appendChild(newTag);
                });
                
                // Show modal
                const modal = new bootstrap.Modal(projectModal);
                modal.show();
            });
        });
    }

    // Back to top button functionality
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Load more projects functionality (simulated)
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    if (loadMoreBtn) {
        let clickCount = 0;
        
        loadMoreBtn.addEventListener('click', function() {
            // Show loading state
            this.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...';
            this.disabled = true;
            
            // Simulate loading delay
            setTimeout(() => {
                clickCount++;
                
                if (clickCount >= 2) {
                    // If clicked twice, hide the button
                    this.style.display = 'none';
                    return;
                }
                
                // Clone existing projects to simulate loading more
                const projectsGrid = document.getElementById('projectsGrid');
                const existingProjects = document.querySelectorAll('.project-item');
                
                // Get first 3 projects and clone them
                for (let i = 0; i < 3; i++) {
                    if (existingProjects[i]) {
                        const clone = existingProjects[i].cloneNode(true);
                        
                        // Modify some details to make it look different
                        const titleEl = clone.querySelector('.card-title');
                        if (titleEl) {
                            titleEl.textContent += ' ' + (Math.floor(Math.random() * 100) + 1);
                        }
                        
                        // Add to grid with animation
                        clone.style.opacity = '0';
                        projectsGrid.appendChild(clone);
                        
                        // Trigger animation
                        setTimeout(() => {
                            clone.style.transition = 'opacity 0.5s ease';
                            clone.style.opacity = '1';
                        }, 10);
                    }
                }
                
                // Reset button state
                this.innerHTML = '<i class="fas fa-plus-circle me-2"></i>Load More';
                this.disabled = false;
                
                // Reinitialize event listeners for new elements
                initProjectEventListeners();
            }, 1500);
        });
    }

    // Function to initialize event listeners for dynamically added projects
    function initProjectEventListeners() {
        // Reinitialize view project buttons
        document.querySelectorAll('.view-project').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                const projectCard = this.closest('.project-card');
                const projectTitle = projectCard.querySelector('.card-title').textContent;
                const projectDesc = projectCard.querySelector('.card-text').textContent;
                const projectAuthor = projectCard.querySelector('.project-author').textContent;
                const projectImage = projectCard.querySelector('img').src;
                const githubLink = projectCard.querySelector('a[target="_blank"]').href;
                
                document.getElementById('modalProjectTitle').textContent = projectTitle;
                document.getElementById('modalProjectDescription').textContent = projectDesc;
                document.getElementById('modalProjectAuthor').textContent = projectAuthor.replace('', '');
                document.getElementById('modalProjectImage').querySelector('img').src = projectImage;
                document.getElementById('modalGithubLink').href = githubLink;
                
                const modal = new bootstrap.Modal(document.getElementById('projectModal'));
                modal.show();
            });
        });
    }

    // Animated counting for stats (if added later)
    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-target'));
        const duration = 2000; // ms
        const steps = 50;
        const stepTime = duration / steps;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            el.textContent = Math.floor(current);
            if (current >= target) {
                el.textContent = target;
                clearInterval(timer);
            }
        }, stepTime);
    }

    // Activate counting animation when in view
    const counters = document.querySelectorAll('.counter');
    if (counters.length > 0) {
        const options = {
            threshold: 1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, options);
        
        counters.forEach(counter => {
            observer.observe(counter);
        });
    }

    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.classList.add('card-hover-effect');
    });

    // Add glow effect to primary buttons
    const primaryButtons = document.querySelectorAll('.btn-primary');
    primaryButtons.forEach(button => {
        button.classList.add('btn-glow');
    });

    // Add download animation to get project buttons
    const downloadButtons = document.querySelectorAll('.btn-success');
    downloadButtons.forEach(button => {
        button.classList.add('btn-download');
    });
});