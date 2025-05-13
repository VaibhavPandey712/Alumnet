document.addEventListener('DOMContentLoaded', function() {
    // Sample data for placement guides
    const guides = [
        {
            id: 1,
            title: "Cracking Google's Coding Interview",
            company: "google",
            role: "sde",
            year: "2023",
            author: {
                name: "Rahul Sharma",
                role: "Software Engineer II at Google",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            excerpt: "How I prepared for 3 months and solved over 300 problems to get into Google...",
            content: `<h4>My Preparation Journey</h4>
                     <p>I started my preparation 6 months before the interview season. The first step was to strengthen my DSA fundamentals. I followed these steps:</p>
                     <ol>
                         <li>Completed the 'Algorithmic Toolbox' course on Coursera</li>
                         <li>Solved all easy and medium problems on LeetCode (about 250 problems)</li>
                         <li>Focused on Google's most frequent 50 questions</li>
                         <li>Practiced system design using Grokking the System Design Interview</li>
                     </ol>
                     <h4>Interview Experience</h4>
                     <p>The interview process consisted of:</p>
                     <ul>
                         <li>2 phone screening rounds (45 mins each)</li>
                         <li>5 onsite interviews (3 coding, 1 system design, 1 behavioral)</li>
                     </ul>
                     <h4>Key Takeaways</h4>
                     <p>Communication is as important as coding. Always explain your thought process clearly.</p>`,
            difficulty: "hard",
            tags: ["DSA", "System Design", "Behavioral"],
            likes: 124,
            comments: 28
        },
        {
            id: 2,
            title: "Amazon SDE Interview Experience",
            company: "amazon",
            role: "sde",
            year: "2022",
            author: {
                name: "Priya Patel",
                role: "SDE at Amazon",
                image: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            excerpt: "My complete preparation strategy and interview questions from Amazon's hiring process...",
            content: `<h4>Preparation Strategy</h4>
                     <p>Amazon focuses heavily on their Leadership Principles. I made sure to prepare examples for each principle.</p>
                     <p>For coding:</p>
                     <ul>
                         <li>Solved all Amazon tagged questions on LeetCode (about 100)</li>
                         <li>Practiced implementing common data structures from scratch</li>
                         <li>Did mock interviews with seniors</li>
                     </ul>
                     <h4>Interview Questions</h4>
                     <p>Some questions I was asked:</p>
                     <ol>
                         <li>Design a parking lot system (OOD)</li>
                         <li>Find all anagrams in a string (LeetCode medium)</li>
                         <li>Tell me about a time you disagreed with your manager</li>
                     </ol>`,
            difficulty: "medium",
            tags: ["OOP", "Leadership Principles", "LP"],
            likes: 89,
            comments: 15
        },
        {
            id: 3,
            title: "From Campus to Microsoft",
            company: "microsoft",
            role: "sde",
            year: "2021",
            author: {
                name: "Arjun Mehta",
                role: "Software Engineer at Microsoft",
                image: "https://randomuser.me/api/portraits/men/67.jpg"
            },
            excerpt: "How I leveraged my college projects and campus resources to get into Microsoft...",
            content: `<h4>Campus Preparation</h4>
                     <p>Microsoft visits our campus every year. I focused on:</p>
                     <ul>
                         <li>Maintaining a strong CGPA (9.2)</li>
                         <li>Participating in coding competitions</li>
                         <li>Building meaningful projects</li>
                     </ul>
                     <h4>Interview Process</h4>
                     <p>The process consisted of:</p>
                     <ol>
                         <li>Online coding test (2 questions in 60 mins)</li>
                         <li>Group fly round (solve problem on whiteboard)</li>
                         <li>2 technical interviews</li>
                         <li>1 HR interview</li>
                     </ol>
                     <h4>Advice for Juniors</h4>
                     <p>Start early, focus on fundamentals rather than just interview questions.</p>`,
            difficulty: "medium",
            tags: ["Campus", "Projects", "CGPA"],
            likes: 76,
            comments: 12
        },
        {
            id: 4,
            title: "Breaking into Data Science at Meta",
            company: "facebook",
            role: "ds",
            year: "2023",
            author: {
                name: "Neha Gupta",
                role: "Data Scientist at Meta",
                image: "https://randomuser.me/api/portraits/women/63.jpg"
            },
            excerpt: "Transitioning from computer science to data science - my complete guide...",
            content: `<h4>Background</h4>
                     <p>I was a CS major but wanted to transition to Data Science. Here's how I did it:</p>
                     <h4>Skill Development</h4>
                     <ol>
                         <li>Took Andrew Ng's ML course</li>
                         <li>Practiced SQL daily (LeetCode and StrataScratch)</li>
                         <li>Built 3 end-to-end ML projects</li>
                         <li>Learned A/B testing fundamentals</li>
                     </ol>
                     <h4>Interview Experience</h4>
                     <p>Meta's DS interview consists of:</p>
                     <ul>
                         <li>SQL and Python coding</li>
                         <li>Statistics and ML theory</li>
                         <li>Product sense case studies</li>
                         <li>Behavioral questions</li>
                     </ul>`,
            difficulty: "hard",
            tags: ["Machine Learning", "SQL", "Statistics"],
            likes: 112,
            comments: 34
        },
        {
            id: 5,
            title: "UI/UX Design at Apple",
            company: "apple",
            role: "uiux",
            year: "2022",
            author: {
                name: "Sofia Chen",
                role: "UI/UX Designer at Apple",
                image: "https://randomuser.me/api/portraits/women/28.jpg"
            },
            excerpt: "Building a design portfolio that got me noticed by Apple recruiters...",
            content: `<h4>Portfolio Building</h4>
                     <p>Apple looks for:</p>
                     <ul>
                         <li>Clean, minimalist design aesthetic</li>
                         <li>Attention to detail</li>
                         <li>Understanding of human interface guidelines</li>
                     </ul>
                     <h4>Interview Process</h4>
                     <p>The process was design-heavy:</p>
                     <ol>
                         <li>Portfolio review (3 projects)</li>
                         <li>Design challenge (48-hour take-home)</li>
                         <li>4 onsite interviews (2 with designers, 1 with PM, 1 with engineer)</li>
                     </ol>
                     <h4>Tips</h4>
                     <p>Focus on the why behind every design decision. Apple cares deeply about intentionality.</p>`,
            difficulty: "medium",
            tags: ["Portfolio", "Design Thinking", "HIG"],
            likes: 68,
            comments: 9
        },
        {
            id: 6,
            title: "Product Management at Microsoft",
            company: "microsoft",
            role: "pm",
            year: "2023",
            author: {
                name: "Amit Joshi",
                role: "Product Manager at Microsoft",
                image: "https://randomuser.me/api/portraits/men/75.jpg"
            },
            excerpt: "How I transitioned from engineering to product management...",
            content: `<h4>Transition Strategy</h4>
                     <p>As an engineer, I took these steps to move into PM:</p>
                     <ol>
                         <li>Took product management courses on Udemy</li>
                         <li>Volunteered to write PRDs for my team</li>
                         <li>Shadowed PMs during meetings</li>
                         <li>Built a side project as a PM would</li>
                     </ol>
                     <h4>Interview Preparation</h4>
                     <p>Microsoft PM interviews focus on:</p>
                     <ul>
                         <li>Product sense (case studies)</li>
                         <li>Execution (how would you launch X)</li>
                         <li>Behavioral (working with engineers)</li>
                     </ul>`,
            difficulty: "medium",
            tags: ["Product Sense", "Case Studies", "Transition"],
            likes: 92,
            comments: 18
        }
    ];

    // DOM Elements
    const guideContainer = document.getElementById('guideContainer');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const noResults = document.getElementById('noResults');
    const applyFiltersBtn = document.getElementById('applyFilters');
    const applyMobileFiltersBtn = document.getElementById('applyMobileFilters');
    const mobileFilterBtn = document.getElementById('mobileFilterBtn');
    const mobileFilterModal = new bootstrap.Modal(document.getElementById('mobileFilterModal'));
    const guideDetailModal = new bootstrap.Modal(document.getElementById('guideDetailModal'));

    // Company logo mapping
    const companyLogos = {
        google: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png",
        microsoft: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
        amazon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
        facebook: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Meta_logo_%282021%29.svg/1200px-Meta_logo_%282021%29.svg.png",
        apple: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png"
    };

    // Company name mapping
    const companyNames = {
        google: "Google",
        microsoft: "Microsoft",
        amazon: "Amazon",
        facebook: "Meta",
        apple: "Apple"
    };

    // Role name mapping
    const roleNames = {
        sde: "Software Developer",
        ds: "Data Scientist",
        pm: "Product Manager",
        uiux: "UI/UX Designer"
    };

    // Initialize the page
    function init() {
        // Load all guides initially
        filterAndDisplayGuides();
        
        // Event listeners
        applyFiltersBtn.addEventListener('click', filterAndDisplayGuides);
        applyMobileFiltersBtn.addEventListener('click', applyMobileFilters);
        mobileFilterBtn.addEventListener('click', showMobileFilters);
        
        // Simulate loading
        setTimeout(() => {
            loadingSpinner.style.display = 'none';
        }, 1000);
    }

    // Filter and display guides based on selected filters
    function filterAndDisplayGuides() {
        const companyFilter = document.getElementById('companyFilter').value;
        const roleFilter = document.getElementById('roleFilter').value;
        const yearFilter = document.getElementById('yearFilter').value;
        
        // Filter guides
        const filteredGuides = guides.filter(guide => {
            return (companyFilter === 'all' || guide.company === companyFilter) &&
                   (roleFilter === 'all' || guide.role === roleFilter) &&
                   (yearFilter === 'all' || guide.year === yearFilter);
        });
        
        displayGuides(filteredGuides);
    }

    // Apply filters from mobile modal
    function applyMobileFilters() {
        // Get values from mobile filters
        document.getElementById('companyFilter').value = document.getElementById('mobileCompanyFilter').value;
        document.getElementById('roleFilter').value = document.getElementById('mobileRoleFilter').value;
        document.getElementById('yearFilter').value = document.getElementById('mobileYearFilter').value;
        
        // Apply filters
        filterAndDisplayGuides();
        
        // Close modal
        mobileFilterModal.hide();
    }

    // Show mobile filters modal
    function showMobileFilters() {
        // Set current values in mobile filters
        document.getElementById('mobileCompanyFilter').value = document.getElementById('companyFilter').value;
        document.getElementById('mobileRoleFilter').value = document.getElementById('roleFilter').value;
        document.getElementById('mobileYearFilter').value = document.getElementById('yearFilter').value;
        
        mobileFilterModal.show();
    }

    // Display guides in the container
    function displayGuides(guidesToDisplay) {
        guideContainer.innerHTML = '';
        
        if (guidesToDisplay.length === 0) {
            noResults.classList.remove('d-none');
            return;
        } else {
            noResults.classList.add('d-none');
        }
        
        guidesToDisplay.forEach((guide, index) => {
            const guideCard = createGuideCard(guide, index);
            guideContainer.appendChild(guideCard);
        });
    }

    // Create a guide card element
    function createGuideCard(guide, index) {
        const col = document.createElement('div');
        col.className = `col-md-6 col-lg-4 mb-4 animate__animated animate__fadeIn animate__delay-${index % 3}`;
        
        const card = document.createElement('div');
        card.className = 'guide-card h-100';
        card.addEventListener('click', () => showGuideDetails(guide));
        
        // Card header
        const cardHeader = document.createElement('div');
        cardHeader.className = 'guide-card-header';
        
        const companyLogo = document.createElement('div');
        companyLogo.className = 'guide-company';
        companyLogo.innerHTML = `<img src="${companyLogos[guide.company]}" alt="${companyNames[guide.company]}" style="height:20px;">`;
        
        const title = document.createElement('h5');
        title.className = 'mb-0';
        title.textContent = guide.title;
        
        cardHeader.appendChild(title);
        cardHeader.appendChild(companyLogo);
        
        // Card body
        const cardBody = document.createElement('div');
        cardBody.className = 'guide-card-body';
        
        const authorDiv = document.createElement('div');
        authorDiv.className = 'guide-author';
        authorDiv.innerHTML = `
            <img src="${guide.author.image}" alt="${guide.author.name}">
            <div>
                <h6 class="mb-0">${guide.author.name}</h6>
                <small class="text-muted">${guide.author.role}</small>
            </div>
        `;
        
        const excerpt = document.createElement('p');
        excerpt.className = 'mb-3';
        excerpt.textContent = guide.excerpt;
        
        const difficulty = document.createElement('span');
        difficulty.className = `badge badge-${guide.difficulty} mb-2`;
        difficulty.textContent = guide.difficulty.charAt(0).toUpperCase() + guide.difficulty.slice(1);
        
        const tagsDiv = document.createElement('div');
        tagsDiv.className = 'guide-tags';
        guide.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'tag';
            tagSpan.textContent = tag;
            tagsDiv.appendChild(tagSpan);
        });
        
        const statsDiv = document.createElement('div');
        statsDiv.className = 'guide-stats';
        statsDiv.innerHTML = `
            <span><i class="far fa-calendar-alt me-1"></i> ${guide.year}</span>
            <span><i class="fas fa-briefcase me-1"></i> ${roleNames[guide.role]}</span>
        `;
        
        cardBody.appendChild(authorDiv);
        cardBody.appendChild(difficulty);
        cardBody.appendChild(excerpt);
        cardBody.appendChild(tagsDiv);
        cardBody.appendChild(statsDiv);
        
        // Assemble card
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        col.appendChild(card);
        
        return col;
    }

    // Show guide details in modal
    function showGuideDetails(guide) {
        document.getElementById('guideModalTitle').textContent = guide.title;
        
        const modalBody = document.getElementById('guideModalBody');
        modalBody.innerHTML = `
            <div class="row mb-4">
                <div class="col-md-2">
                    <img src="${guide.author.image}" alt="${guide.author.name}" class="img-fluid rounded-circle">
                </div>
                <div class="col-md-10">
                    <h5>${guide.author.name}</h5>
                    <p class="text-muted">${guide.author.role}</p>
                    <div class="d-flex flex-wrap gap-2">
                        <span class="badge bg-secondary">${companyNames[guide.company]}</span>
                        <span class="badge bg-secondary">${roleNames[guide.role]}</span>
                        <span class="badge bg-secondary">${guide.year}</span>
                        <span class="badge ${guide.difficulty === 'easy' ? 'bg-success' : guide.difficulty === 'medium' ? 'bg-warning text-dark' : 'bg-danger'}">
                            ${guide.difficulty.charAt(0).toUpperCase() + guide.difficulty.slice(1)}
                        </span>
                    </div>
                </div>
            </div>
            <hr>
            <div class="guide-content">
                ${guide.content}
            </div>
            <hr>
            <div class="d-flex justify-content-between">
                <div>
                    <button class="btn btn-outline-success btn-sm me-2">
                        <i class="far fa-thumbs-up me-1"></i> ${guide.likes} Likes
                    </button>
                    <button class="btn btn-outline-info btn-sm">
                        <i class="far fa-comment me-1"></i> ${guide.comments} Comments
                    </button>
                </div>
                <button class="btn btn-outline-primary btn-sm">
                    <i class="fas fa-share-alt me-1"></i> Share
                </button>
            </div>
        `;
        
        guideDetailModal.show();
    }

    // Initialize the page
    init();
});