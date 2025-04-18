document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const addSiteBtn = document.getElementById('add-site-btn');
    const modal = document.getElementById('add-site-modal');
    const cancelBtn = document.getElementById('cancel-btn');
    const addSiteForm = document.getElementById('add-site-form');
    const mainGrid = document.querySelector('main');
    
    // Show modal
    addSiteBtn.addEventListener('click', function() {
        modal.classList.remove('hidden');
        modal.classList.add('show');
    });
    
    // Hide modal
    cancelBtn.addEventListener('click', function() {
        modal.classList.add('hidden');
        modal.classList.remove('show');
        addSiteForm.reset();
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.add('hidden');
            modal.classList.remove('show');
            addSiteForm.reset();
        }
    });
    
    // Add new website
    addSiteForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const siteName = document.getElementById('site-name').value;
        const siteDesc = document.getElementById('site-desc').value;
        const siteUrl = document.getElementById('site-url').value;
        
        // Create new website card
        const newCard = createWebsiteCard(siteName, siteDesc, siteUrl);
        mainGrid.appendChild(newCard);
        
        // Save to local storage
        saveToLocalStorage(siteName, siteDesc, siteUrl);
        
        // Hide modal and reset form
        modal.classList.add('hidden');
        modal.classList.remove('show');
        addSiteForm.reset();
    });
    
    // Load saved websites on page load
    loadFromLocalStorage();
    
    // Function to create a website card element
    function createWebsiteCard(name, description, url) {
        const card = document.createElement('div');
        card.className = 'website-card bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300';
        
        card.innerHTML = `
            <h2 class="text-xl font-semibold text-gray-800 mb-2">${name}</h2>
            <p class="text-gray-600 mb-4">${description}</p>
            <a href="${url}" target="_blank" class="text-blue-600 hover:text-blue-800">Visit Site →</a>
        `;
        
        return card;
    }
    
    // Function to save website to local storage
    function saveToLocalStorage(name, description, url) {
        let websites = JSON.parse(localStorage.getItem('websites')) || [];
        websites.push({ name, description, url });
        localStorage.setItem('websites', JSON.stringify(websites));
    }
    
    // Function to load websites from local storage
    function loadFromLocalStorage() {
        const websites = JSON.parse(localStorage.getItem('websites')) || [];
        
        websites.forEach(site => {
            const card = createWebsiteCard(site.name, site.description, site.url);
            mainGrid.appendChild(card);
        });
    }
});
