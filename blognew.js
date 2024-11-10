const articleContent = {
    'santorini': {
        title: 'Hidden Gems of Santorini',
        content: `
            <h1>Hidden Gems of Santorini</h1>
            <p>Discover the secret spots and local favorites that make Santorini truly special...</p>
            <h2>1. Secret Beach Spots</h2>
            <p>Away from the crowded beaches of Oia, there are hidden coves only locals know about...</p>
            <h2>2. Family Tavernas</h2>
            <p>Skip the tourist traps and discover authentic Greek cuisine...</p>
        `
    },
    'kyoto': {
        title: 'Autumn in Kyoto',
        content: `
            <h1>Autumn in Kyoto</h1>
            <p>Experience the magical transformation of Kyoto in autumn...</p>
            <h2>Best Viewing Spots</h2>
            <p>From temples to hidden gardens, here are the most spectacular locations...</p>
        `
    },
    'inca-trail': {
        title: 'Hiking the Inca Trail',
        content: `
            <h1>Hiking the Inca Trail</h1>
            <p>A comprehensive guide to one of the world's most famous treks...</p>
            <h2>Preparation Tips</h2>
            <p>Essential information for making the most of your journey...</p>
        `
    }
};

// Get DOM elements
const modal = document.getElementById('articleModal');
const modalContent = document.getElementById('modalContent');
const closeButton = document.querySelector('.modal-close');

// Add click handlers to all Read More buttons
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', async function() {
        const articleId = this.dataset.article;
        
        // Show loading state
        this.classList.add('loading');
        this.disabled = true;

        try {
            // Simulate API call with setTimeout
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Update modal content
            modalContent.innerHTML = articleContent[articleId].content;
            
            // Show modal
            modal.classList.add('active');
        } finally {
            // Remove loading state
            this.classList.remove('loading');
            this.disabled = false;
        }
    });
});

// Close modal when clicking the close button
closeButton.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Close modal when clicking outside the content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});