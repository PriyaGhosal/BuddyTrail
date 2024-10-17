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
            
            if (userText.includes('hello')) {
                return "Hello! How can I help you today?";
            } else if (userText.includes('how are you')) {
                return "I'm just a bot, but thanks for asking!";
            } else if (userText.includes('bye')) {
                return "Goodbye! Have a great day!";
            } else if (userText.includes('what is buddytrail?') || userText.includes('what is buddytrail ?') || userText.includes('what is buddytrail')){
                return "BuddyTrail is your premier travel companion designed to assist you in planning and organizing your trips. Whether you are arranging a family vacation or an adventure with friends, BuddyTrail helps you discover and explore remarkable destinations. We simplify the process of finding the best hotels and securing affordable flights, ensuring a seamless travel experience from start to finish.";
            } else {
                return "I'm sorry, I don't understand that.";
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