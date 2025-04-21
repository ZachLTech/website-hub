document.addEventListener('DOMContentLoaded', function() {
    // Load and display projects
    loadProjects();
    
    // Set up tab navigation with hash support
    setupHashBasedTabs();
    
    // Copy to clipboard functionality
    setupCopyFunctions();
    
    // Ensure full height on mobile
    adjustHeight();
    window.addEventListener('resize', adjustHeight);
});

// Adjust height for mobile
function adjustHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Load projects from configuration
async function loadProjects() {
    try {
        const response = await fetch('links.json');
        const projects = await response.json();
        
        // Group projects by section
        const projectsBySection = projects.reduce((acc, project) => {
            const section = project.section || 'projects'; // Default to projects if no section specified
            if (!acc[section]) acc[section] = [];
            acc[section].push(project);
            return acc;
        }, {});
        
        // Display projects for each section
        Object.keys(projectsBySection).forEach(section => {
            displayProjects(projectsBySection[section], section);
        });
        
        // After loading projects, check URL hash to determine which tab to display
        handleHashChange();
        
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

// Display projects in the specified container
function displayProjects(projects, containerId) {
    const container = document.getElementById(`${containerId}-container`);
    
    if (!container) {
        console.error(`Container ${containerId}-container not found`);
        return;
    }
    
    // Clear existing content
    container.innerHTML = '';
    
    let delay = 0;
    
    projects.forEach(project => {
        const card = createLinkCard(project, delay);
        container.appendChild(card);
        delay += 100;
    });
}

// Create a card element from project data - now as an anchor element
function createLinkCard(project, delay) {
    // Create an anchor wrapper for the entire card
    const cardLink = document.createElement('a');
    cardLink.href = project.link || '#';
    cardLink.target = "_blank";
    cardLink.rel = "noopener noreferrer";
    cardLink.className = 'card fade-in cursor-pointer';
    cardLink.style.animationDelay = `${delay}ms`;
    cardLink.setAttribute('aria-label', `Visit ${project.title}`);
    
    // Create status indicator if provided
    let statusHtml = '';
    if (project.status) {
        statusHtml = `<span class="status status-${project.status.toLowerCase()}">${project.status}</span>`;
    }
    
    // Create tags
    let tagsHtml = '';
    if (project.tags && project.tags.length > 0) {
        tagsHtml = '<div class="card-tags">';
        project.tags.forEach(tag => {
            // Convert tag to lowercase and replace spaces with dashes for CSS class
            const tagClass = tag.toLowerCase().replace(/\s+/g, '-');
            tagsHtml += `<span class="tag tag-${tagClass}">${tag}</span>`;
        });
        tagsHtml += '</div>';
    }
    
    cardLink.innerHTML = `
        ${statusHtml}
        <div class="card-content">
            <h3 class="card-title">${project.title}</h3>
            <p class="card-description">${project.description}</p>
            ${tagsHtml}
        </div>
    `;
    
    return cardLink;
}

// Setup hash-based tab navigation
function setupHashBasedTabs() {
    // Update tab navigation links to handle clicking properly
    document.querySelectorAll('.tab-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            
            // Extract tab name from href attribute
            const hash = this.getAttribute('href');
            const tabId = hash.substring(1); // Remove # from the beginning
            
            // Update URL without reloading the page
            window.history.pushState(null, null, hash);
            
            // Switch to the selected tab
            switchToTab(tabId);
        });
    });
    
    // Handle browser back/forward navigation
    window.addEventListener('hashchange', handleHashChange);
}

// Handle hash changes to switch tabs
function handleHashChange() {
    // Get the current hash (without #) or default to 'featured'
    let tabId = window.location.hash.substring(1) || 'featured';
    
    // Only accept valid tab IDs
    if (!['featured', 'projects', 'work', 'self-hosted', 'friends'].includes(tabId)) {
        tabId = 'featured';
    }
    
    // Switch to the tab
    switchToTab(tabId);
}

// Switch to specified tab
function switchToTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('[id$="-content"]').forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('block');
    });
    
    // Show the selected tab content
    const selectedContent = document.getElementById(tabId + '-content');
    if (selectedContent) {
        selectedContent.classList.remove('hidden');
        selectedContent.classList.add('block');
    }
    
    // Update tab link styles
    document.querySelectorAll('.tab-link').forEach(link => {
        // Remove active styles
        link.classList.remove('border-white', 'border-opacity-30');
        link.classList.add('border-transparent');
    });
    
    // Set active tab style
    const activeLink = document.querySelector(`.tab-link[href="#${tabId}"]`);
    if (activeLink) {
        activeLink.classList.remove('border-transparent');
        activeLink.classList.add('border-white', 'border-opacity-30');
    }
}

// Setup copy functions - preserved from original code
function setupCopyFunctions() {
    // Discord username copy function
    window.copyToClipboardDiscord = function() {
        copyText("zachltech");
        showToast("Discord username copied!");
    };
    
    // URL copy function
    window.copyToClipboard = function() {
        copyText("https://www.zachl.tech");
        showToast("URL copied to clipboard!");
    };
}

// Helper function to copy text to clipboard
function copyText(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    } else {
        // Fallback for older browsers
        const tempInput = document.createElement("input");
        document.body.appendChild(tempInput);
        tempInput.value = text;
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    }
}

// Show toast notification
function showToast(message) {
    // Check if a toast container already exists
    let toastContainer = document.querySelector('.toast-container');
    
    // If not, create one
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        toastContainer.style.position = 'fixed';
        toastContainer.style.bottom = '20px';
        toastContainer.style.left = '50%';
        toastContainer.style.transform = 'translateX(-50%)';
        toastContainer.style.zIndex = '9999';
        document.body.appendChild(toastContainer);
    }
    
    // Create toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.backgroundColor = 'rgba(20, 20, 20, 0.9)';
    toast.style.color = 'white';
    toast.style.padding = '8px 16px';
    toast.style.borderRadius = '4px';
    toast.style.marginTop = '10px';
    toast.style.fontFamily = 'Space Mono, monospace';
    toast.style.fontSize = '0.875rem';
    toast.style.border = '1px solid rgba(255, 255, 255, 0.1)';
    
    // Add toast to container
    toastContainer.appendChild(toast);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            toastContainer.removeChild(toast);
            
            // Remove container if no toasts left
            if (toastContainer.children.length === 0) {
                document.body.removeChild(toastContainer);
            }
        }, 500);
    }, 3000);
}
