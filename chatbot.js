const messagesDiv = document.getElementById('messages');
        const userInput = document.getElementById('user-input');
        const sendButton = document.getElementById('send-button');
        const chatIcon = document.getElementById('chat-icon');
        const chatbotContainer = document.getElementById('chatbot');

        // Function to append messages to the chatbox
        function appendMessage(sender, text) {
            const messageElement = document.createElement('div');
            messageElement.classList.add(sender);
            messageElement.textContent = text;
            messagesDiv.appendChild(messageElement);
            messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
        }

        // Simple bot responses
        function getBotResponse(userText) {
            userText = userText.toLowerCase();
        
            if (userText.includes('hello') || userText.includes('hi') || userText.includes('hey')) {
                return "👋 Hello! How can I help you today?";
            } else if (userText.includes('what is buddytrail?') || userText.includes('what is buddytrail ?') || userText.includes('what is buddytrail')) {
                return "🧳 BuddyTrail is your premier travel companion designed to assist you in planning and organizing your trips. ✈️ Whether you are arranging a family vacation or an adventure with friends, BuddyTrail helps you discover and explore remarkable destinations. 🌍 We simplify the process of finding the best hotels and securing affordable flights, ensuring a seamless travel experience from start to finish.";
            } else if (userText.includes('how can you book') || userText.includes('how do i book') || userText.includes('how to book')) {
                return "🖱️ Booking with BuddyTrail is simple! Just visit our website or app, select your destination 🌐, choose the type of accommodation 🏨 or flight ✈️ you're looking for, and follow the easy steps to confirm your booking. You can also customize your trip itinerary 🗺️ for the perfect travel experience.";
            } else if (userText.includes('best destinations') || userText.includes('destinations') || userText.includes('what are the best destinations')) {
                return "🌟 Some of the best destinations to explore with BuddyTrail include Bali 🏖️, Paris 🗼, Tokyo 🏯, New York 🗽, and Santorini 🌅. We recommend based on your preferences and budget 💸, making sure your trip is unforgettable!";
            } else if (userText.includes('why choose buddytrail') || userText.includes('why to choose buddytrail') || userText.includes('why buddytrail')) {
                return "💡 Why choose BuddyTrail? We provide personalized travel planning, competitive pricing 💰, and a smooth, hassle-free booking process. Our user-friendly interface and 24/7 customer support 📞 ensure you have the best possible experience, from planning to your return home 🏠.";
            } else if (userText.includes('buddytrail discounts') || userText.includes('are there any discounts') || userText.includes('do you offer discounts')) {
                return "🎉 Yes! BuddyTrail regularly offers discounts and special deals on flights ✈️, hotels 🏨, and holiday packages 🎁. Keep an eye on our promotions section or sign up for our newsletter 📨 to stay updated with the latest offers.";
            } else if (userText.includes('group travel') || userText.includes('can i book group travel')) {
                return "👥 Yes, BuddyTrail specializes in group travel bookings! Whether you're traveling with family 👨‍👩‍👧‍👦, friends 👫, or a corporate group 🏢, we make it easy to book accommodations and flights for large groups.";
            } else {
                return "🤔 I'm sorry, I don't understand that. Can you ask me something else?";
            }
        }
        

        // Show/hide chatbot on icon click
        chatIcon.addEventListener('click', () => {
            const isVisible = chatbotContainer.style.display === 'flex';
            chatbotContainer.style.display = isVisible ? 'none' : 'flex';
            console.log("Chatbot visibility: ", chatbotContainer.style.display); // Debugging statement
        });

        // Event listener for the send button
        sendButton.addEventListener('click', () => {
            const userText = userInput.value;
            if (userText) {
                appendMessage('user', userText);
                userInput.value = ''; // Clear input field
                const botResponse = getBotResponse(userText);
                appendMessage('bot', botResponse);
            }
        });

        // Optional: Allow pressing 'Enter' to send messages
        userInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                sendButton.click();
            }
        });

        // Event listener for the close button
document.getElementById('close-button').addEventListener('click', () => {
    chatbotContainer.style.display = 'none'; // Hide chatbot on close
});