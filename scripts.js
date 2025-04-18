document.addEventListener('DOMContentLoaded', function() {
    // Load and display projects
    loadProjects();
    
    // Set up tab navigation
    setupTabs();
    
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
        const response = await fetch('config.json');
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
        const card = createCard(project, delay);
        container.appendChild(card);
        delay += 100;
    });
}

// Create a card element from project data
function createCard(project, delay) {
    const card = document.createElement('div');
    card.className = 'card fade-in cursor-pointer';
    card.style.animationDelay = `${delay}ms`;
    
    // Make the entire card clickable
    card.addEventListener('click', () => {
        if (project.link) {
            window.open(project.link, '_blank');
        }
    });
    
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
    
    card.innerHTML = `
        ${statusHtml}
        <div class="card-content">
            <h3 class="card-title">${project.title}</h3>
            <p class="card-description">${project.description}</p>
            ${tagsHtml}
        </div>
    `;
    
    return card;
}

// Setup tab functionality
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Hide all tab contents first
            tabContents.forEach(content => {
                content.classList.remove('active');
                content.classList.add('hidden');
            });
            
            // Show active tab content with animation
            const activeContent = document.getElementById(`${tabId}-content`);
            activeContent.classList.remove('hidden');
            
            // Small delay to ensure transition works
            setTimeout(() => {
                activeContent.classList.add('active');
            }, 50);
        });
    });
}

// Setup copy functions
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
