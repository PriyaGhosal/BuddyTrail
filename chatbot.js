// Constants and Configuration
const RESPONSES = {
    GREETING: "👋 Hello! How can I help you today? For example you can ask places to visit in india or any state of india",
    ABOUT_BUDDYTRAIL: "🧳 BuddyTrail is your premier travel companion designed to assist you in planning and organizing your trips. ✈️ Whether you are arranging a family vacation or an adventure with friends, BuddyTrail helps you discover and explore remarkable destinations. 🌍 We simplify the process of finding the best hotels and securing affordable flights, ensuring a seamless travel experience from start to finish.",
    DEFAULT: "🤔 I'm sorry, I don't understand that. Can you ask me something else?"
};

const DESTINATIONS = {
    INDIA: [
        { name: "Taj Mahal, Agra", description: "Iconic mausoleum, explore stunning architecture" },
        { name: "Jaipur, Rajasthan", description: "Amer Fort, Hawa Mahal, rich culture and crafts" },
        { name: "Varanasi, Uttar Pradesh", description: "Ghats, Temples, Sacred Ganges" },
        { name: "Kerala Backwaters", description: "Boat rides, lush greenery, serene beauty" },
        { name: "Mumbai", description: "Gateway of India, Marine Drive, Elephanta Caves" },
        { name: "Pune", description: "Shaniwar Wada, Aga Khan Palace, Osho Ashram" },
        { name: "Aurangabad", description: "Ajanta and Ellora Caves, Bibi Ka Maqbara" },
        { name: "Goa", description: "Beaches, Water Sports, Portuguese Architecture" },
        { name: "Kolkata", description: "Victoria Memorial, Howrah Bridge, Indian Museum" },
        { name: "Hyderabad", description: "Charminar, Golconda Fort, Laad Bazaar" },
        { name: "Chennai", description: "Marina Beach, Kapaleeshwarar Temple, Fort St. George" },
        { name: "Bengaluru", description: "Lalbagh Botanical Garden, Cubbon Park, Tipu Sultan's Summer Palace" },
        { name: "Amritsar", description: "Golden Temple, Wagah Border, Jallianwala Bagh" },
        { name: "Shimla", description: "Mall Road, Christ Church, Jakhu Temple" },
        { name: "Manali", description: "Solang Valley, Beas River, Himalayan National Park" },
        { name: "Kashmir", description: "Dal Lake, Nishat Bagh, Mughal Gardens" },
        { name: "Varanasi", description: "Ghats, Temples, Sacred Ganges" },
        { name: "Mysore", description: "Mysore Palace, Brindavan Gardens, Chamundi Hills" },
        { name: "Ooty", description: "Dodabetta Peak, Botanical Gardens, Nilgiri Mountain Railway" },
        { name: "Kodaikanal", description: "Kodaikanal Lake, Bryant Park, Green Valley View" }
    ]
};

const STATE_DESTINATIONS = {
    maharashtra: [
        { name: "Mumbai", attractions: ["Gateway of India", "Marine Drive", "Elephanta Caves"] },
        { name: "Pune", attractions: ["Shaniwar Wada", "Aga Khan Palace", "Osho Ashram"] },
        { name: "Aurangabad", attractions: ["Ajanta and Ellora Caves", "Bibi Ka Maqbara"] },
        { name: "Nashik", attractions: ["Trimbakeshwar Shiva Temple", "Sula Vineyards", "Pandavleni Caves"] },
        { name: "Aurangabad", attractions: ["Ajanta and Ellora Caves", "Bibi Ka Maqbara", "Daulatabad Fort"] },
        { name: "Pune", attractions: ["Shaniwar Wada", "Aga Khan Palace", "Osho Ashram"] },
        { name: "Mumbai", attractions: ["Gateway of India", "Marine Drive", "Elephanta Caves"] },
    ],
    karnataka: [
        { name: "Mysore", attractions: ["Mysore Palace", "Brindavan Gardens", "Chamundi Hills"] },
        { name: "Ooty", attractions: ["Dodabetta Peak", "Botanical Gardens", "Nilgiri Mountain Railway"] },
        { name: "Kodaikanal", attractions: ["Kodaikanal Lake", "Bryant Park", "Green Valley View"] },
        { name: "Munnar", attractions: ["Mattupetty Dam", "Eravikulam National Park", "Kundala Lake"] },
        { name: "Alleppey", attractions: ["Backwaters", "Houseboat", "Alappuzha Beach"] },
        { name: "Kovalam", attractions: ["Lighthouse Beach", "Sree Padmanabha Swamy Temple", "Vizhinjam"] }
    ],
    tamilnadu: [
        { name: "Chennai", attractions: ["Marina Beach", "Kapaleeshwarar Temple", "Fort St. George"] },
        { name: "Bengaluru", attractions: ["Lalbagh Botanical Garden", "Cubbon Park", "Tipu Sultan's Summer Palace"] },
        { name: "Munnar", attractions: ["Mattupetty Dam", "Eravikulam National Park", "Kundala Lake"] },
        { name: "Alleppey", attractions: ["Backwaters", "Houseboat", "Alappuzha Beach"] },
        { name: "Kovalam", attractions: ["Lighthouse Beach", "Sree Padmanabha Swamy Temple", "Vizhinjam"] }
    ],
    kerala: [
        { name: "Kerala Backwaters", attractions: ["Boat rides", "Lush greenery", "Serene beauty"] },
        { name: "Munnar", attractions: ["Mattupetty Dam", "Eravikulam National Park", "Kundala Lake"] },
        { name: "Alleppey", attractions: ["Backwaters", "Houseboat", "Alappuzha Beach"] },
        { name: "Munnar", attractions: ["Mattupetty Dam", "Eravikulam National Park", "Kundala Lake"] },
        { name: "Kovalam", attractions: ["Lighthouse Beach", "Sree Padmanabha Swamy Temple", "Vizhinjam"] }
    ],
    uttarpradesh: [
        { name: "Varanasi", attractions: ["Ghats", "Temples", "Sacred Ganges"] },
        { name: "Agra", attractions: ["Taj Mahal", "Fatehpur Sikri", "Agra Fort"] },
        { name: "Jaipur", attractions: ["Amer Fort", "Hawa Mahal", "Jaigarh Fort"] },
        { name: "Lucknow", attractions: ["Bara Imambara", "Chota Imambara", "Lucknow Zoo"] },
        { name: "Varanasi", attractions: ["Ghats", "Temples", "Sacred Ganges"] },
        { name: "Agra", attractions: ["Taj Mahal", "Fatehpur Sikri", "Agra Fort"] },
        { name: "Jaipur", attractions: ["Amer Fort", "Hawa Mahal", "Jaigarh Fort"] },
        { name: "Lucknow", attractions: ["Bara Imambara", "Chota Imambara", "Lucknow Zoo"] },
        { name: "Varanasi", attractions: ["Ghats", "Temples", "Sacred Ganges"] },
    ],
    // ... other states
};

// Utility Functions
const formatDestinations = (destinations) => {
    return destinations.map((dest, index) => 
        `[${index + 1}]. ${dest.name} - ${dest.description || dest.attractions.join(", ")}`
    ).join("\n");
};

const formatStateResponse = (state) => {
    if (!STATE_DESTINATIONS[state]) return null;
    return `Famous places to visit in ${state.charAt(0).toUpperCase() + state.slice(1)}:\n` +
           formatDestinations(STATE_DESTINATIONS[state]);
};

// Main Response Handler
class ChatbotResponseHandler {
    constructor() {
        this.initializeResponses();
    }

    initializeResponses() {
        this.responsePatterns = [
            {
                patterns: ['hello', 'hi', 'hey'],
                response: RESPONSES.GREETING
            },
            {
                patterns: ['what is buddytrail'],
                response: RESPONSES.ABOUT_BUDDYTRAIL
            },
            {
                patterns: ['group travel'],
                response: this.getGroupTravelOptions
            },
            // ... more patterns
        ];
    }

    getGroupTravelOptions() {
        return `We also offer group travel options for trains, planes, and cars! How can I assist with your group booking?\n
        [1]. Group Train Bookings\n
        [2]. Group Plane Bookings\n
        [3]. Group Car Rentals and Rides\n
        [4]. Group Discounts and Packages\n
        [5]. Custom Itineraries for Groups\n
        Please select an option, and I'll guide you through the group travel booking process!`;
    }

    findResponse(userText) {
        userText = userText.toLowerCase();

        // Check for state-specific queries
        for (const state in STATE_DESTINATIONS) {
            if (userText.includes(state)) {
                return formatStateResponse(state);
            }
        }

        // Check pattern matches
        for (const pattern of this.responsePatterns) {
            if (pattern.patterns.some(p => userText.includes(p))) {
                return typeof pattern.response === 'function' ? 
                    pattern.response() : pattern.response;
            }
        }

        return RESPONSES.DEFAULT;
    }
}

// UI Controller
class ChatbotUI {
    constructor() {
        this.initializeElements();
        this.bindEvents();
        this.responseHandler = new ChatbotResponseHandler();
    }

    initializeElements() {
        this.messagesDiv = document.getElementById('messages');
        this.userInput = document.getElementById('user-input');
        this.sendButton = document.getElementById('send-button');
        this.chatIcon = document.getElementById('chat-icon');
        this.chatbotContainer = document.getElementById('chatbot');
        this.closeButton = document.getElementById('close-button');
    }

    bindEvents() {
        this.chatIcon.addEventListener('click', () => this.toggleChatbot());
        this.sendButton.addEventListener('click', () => this.handleSendMessage());
        this.userInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') this.handleSendMessage();
        });
        this.closeButton.addEventListener('click', () => this.hideChatbot());
    }

    toggleChatbot() {
        const isVisible = this.chatbotContainer.style.display === 'flex';
        this.chatbotContainer.style.display = isVisible ? 'none' : 'flex';
    }

    hideChatbot() {
        this.chatbotContainer.style.display = 'none';
    }

    appendMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add(sender);
        messageElement.textContent = text;
        this.messagesDiv.appendChild(messageElement);
        this.messagesDiv.scrollTop = this.messagesDiv.scrollHeight;
    }

    handleSendMessage() {
        const userText = this.userInput.value.trim();
        if (userText) {
            this.appendMessage('user', userText);
            this.userInput.value = '';
            const botResponse = this.responseHandler.findResponse(userText);
            this.appendMessage('bot', botResponse);
        }
    }
}

// Initialize the chatbot
document.addEventListener('DOMContentLoaded', () => {
    new ChatbotUI();
});