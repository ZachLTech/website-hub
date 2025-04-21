document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    setupHashBasedTabs();
    adjustHeight();
    window.addEventListener('resize', adjustHeight);
});

function adjustHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}

async function loadProjects() {
    try {
        const projects = await (await fetch('./assets/links.json')).json();
        
        const projectsBySection = projects.reduce((acc, project) => {
            const section = project.section || 'projects';
            if (!acc[section]) acc[section] = [];
            acc[section].push(project);
            return acc;
        }, {});
        
        Object.keys(projectsBySection).forEach(section => 
            displayProjects(projectsBySection[section], section));
        
        handleHashChange();
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

function displayProjects(projects, containerId) {
    const container = document.getElementById(`${containerId}-container`);
    
    if (!container) {
        console.error(`Container ${containerId}-container not found`);
        return;
    }
    
    container.innerHTML = '';
    
    let delay = 0;
    projects.forEach(project => {
        container.appendChild(createLinkCard(project, delay));
        delay += 100;
    });
}

function createLinkCard(project, delay) {
    const cardLink = document.createElement('a');
    let statusColor = project.status.toLowerCase()
    cardLink.href = project.link || '#';
    cardLink.target = "_blank";
    cardLink.rel = "noopener noreferrer";
    cardLink.className = 'card fade-in cursor-pointer';
    cardLink.style.animationDelay = `${delay}ms`;
    cardLink.setAttribute('aria-label', `Visit ${project.title}`);

    statusColor = ["archived", "active", "development"].includes(statusColor) ? statusColor : "default";
    
    let statusHtml = project.status ? 
        `<span class="status status-${statusColor}">${project.status}</span>` : '';
    
    let tagsHtml = '';
    if (project.tags?.length) {
        tagsHtml = '<div class="card-tags">';
        project.tags.forEach(tag => {
            // Handle color-based tag structure
            if (typeof tag === 'object' && tag.name) {
                const color = tag.color || 'default';
                tagsHtml += `<span class="tag tag-${color}">${tag.name}</span>`;
            } else if (typeof tag === 'string') {
                // Fallback for old structure
                tagsHtml += `<span class="tag tag-default">${tag}</span>`;
            }
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

function setupHashBasedTabs() {
    document.querySelectorAll('.tab-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const hash = link.getAttribute('href');
            window.history.pushState(null, null, hash);
            switchToTab(hash.substring(1));
        });
    });
    
    window.addEventListener('hashchange', handleHashChange);
}

function handleHashChange() {
    let tabId = window.location.hash.substring(1) || 'featured';
    
    if (!['featured', 'projects', 'work', 'self-hosted', 'friends'].includes(tabId)) {
        tabId = 'featured';
    }
    
    switchToTab(tabId);
}

function switchToTab(tabId) {
    document.querySelectorAll('[id$="-content"]').forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('block');
    });
    
    const selectedContent = document.getElementById(tabId + '-content');
    if (selectedContent) {
        selectedContent.classList.remove('hidden');
        selectedContent.classList.add('block');
    }
    
    document.querySelectorAll('.tab-link').forEach(link => {
        link.classList.remove('border-white', 'border-opacity-30');
        link.classList.add('border-transparent');
    });
    
    const activeLink = document.querySelector(`.tab-link[href="#${tabId}"]`);
    if (activeLink) {
        activeLink.classList.remove('border-transparent');
        activeLink.classList.add('border-white', 'border-opacity-30');
    }
}