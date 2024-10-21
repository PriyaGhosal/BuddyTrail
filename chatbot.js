        
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
        return "👋 Hello! How can I help you today? For example you can ask  places to visit in india or any state of india";
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
    } else if (userText.includes('group travel')) {
        return `We also offer group travel options for trains, planes, and cars! How can I assist with your group booking?\n
        [1]. Group Train Bookings\n
        [2]. Group Plane Bookings\n
        [3]. Group Car Rentals and Rides\n
        [4]. Group Discounts and Packages\n
        [5]. Custom Itineraries for Groups\n
        Please select an option, and I’ll guide you through the group travel booking process!`;
    }
    else if (userText.includes('places to visit in india') || userText.includes('famous places in india')) {
        return `Here are some famous places to visit in India:\n
        [1]. Taj Mahal, Agra - Iconic mausoleum, explore stunning architecture.\n
        [2]. Jaipur, Rajasthan - Amer Fort, Hawa Mahal, rich culture and crafts.\n
        [3]. Varanasi, Uttar Pradesh - Ganges River, spiritual rituals and ancient temples.\n
        [4]. Kerala Backwaters - Scenic houseboat cruises and Ayurvedic treatments.\n
        [5]. Goa - Beautiful beaches, vibrant nightlife, and water sports.\n
        [6]. Ranthambore National Park - Wildlife sanctuary, tiger safaris, and ancient ruins.\n
        [7]. Leh-Ladakh - Breathtaking landscapes, trekking, and monasteries.\n
        [8]. Mysore, Karnataka - Mysore Palace, Chamundi Hill, and gardens.\n
        [9]. Rishikesh and Haridwar - Spiritual towns, yoga, and Ganga Aarti.\n
        [10]. Hampi, Karnataka - Ancient temples and UNESCO World Heritage Site.\n
        Let me know if you want more information about any specific place!`;
    }
    else if (userText.includes('maharashtra') || userText.includes('places to visit in maharashtra')) {
        return `Famous places to visit in Maharashtra:\n
        [1]. Mumbai - Gateway of India, Marine Drive, Elephanta Caves\n
        [2]. Pune - Shaniwar Wada, Aga Khan Palace, Osho Ashram\n
        [3]. Aurangabad - Ajanta and Ellora Caves, Bibi Ka Maqbara\n
        Let me know if you need more information!`;
    }
    else if (userText.includes('rajasthan') || userText.includes('places to visit in rajasthan ' )) {
        return `Famous places to visit in Rajasthan:\n
        [1]. Jaipur - Hawa Mahal, Amer Fort, City Palace\n
        [2]. Udaipur - City Palace, Lake Pichola, Jag Mandir\n
        [3]. Jodhpur - Mehrangarh Fort, Umaid Bhawan Palace\n
        Let me know if you need more information!`;
    }
    else if (userText.includes('uttar pradesh') || userText.includes('places to visit in uttar pradesh')) {
        return `Famous places to visit in Uttar Pradesh:\n
        [1]. Agra - Taj Mahal, Agra Fort, Fatehpur Sikri\n
        [2]. Varanasi - Ganges River, Kashi Vishwanath Temple, Sarnath\n
        [3]. Lucknow - Bara Imambara, Chota Imambara, Rumi Darwaza\n
        Let me know if you need more information!`;
    }
    else if (userText.includes('kerala') || userText.includes('places to visit in kerala')) {
        return `Famous places to visit in Kerala:\n
        [1]. Alleppey - Backwaters, houseboat cruises\n
        [2]. Munnar - Tea Gardens, Anamudi Peak, Attukal Waterfalls\n
        [3]. Kochi - Fort Kochi, Chinese Fishing Nets, Mattancherry Palace\n
        Let me know if you need more information!`;
    }
    else if (userText.includes('west bengal') || userText.includes('places to visit in west bengal')) {
        return `Famous places to visit in West Bengal:\n
        [1]. Kolkata - Victoria Memorial, Howrah Bridge, Dakshineswar Kali Temple\n
        [2]. Darjeeling - Tiger Hill, Batasia Loop, tea plantations\n
        [3]. Sundarbans - UNESCO World Heritage Site, mangrove forests\n
        Let me know if you need more information!`;
    }
    else if (userText.includes('gujarat') || userText.includes('places to visit in gujarat')) {
        return `Famous places to visit in Gujarat:\n
        [1]. Ahmedabad - Sabarmati Ashram, Akshardham Temple\n
        [2]. Kutch - White Desert, Rann Utsav, Kutch Desert Wildlife Sanctuary\n
        [3]. Gir National Park - Asiatic lions, wildlife safaris\n
        Let me know if you need more information!`;
    }
    else if (userText.includes('punjab') || userText.includes('places to visit in punjab')) {
        return `Famous places to visit in Punjab:\n
        [1]. Amritsar - Golden Temple, Jallianwala Bagh, Wagah Border\n
        [2]. Chandigarh - Rock Garden, Sukhna Lake, Rose Garden\n
        [3]. Patiala - Qila Mubarak, Sheesh Mahal\n
        Let me know if you need more information!`;
    }
    else if (userText.includes('odisha') || userText.includes('places to visit in odisha')) {
        return `Famous places to visit in Odisha:\n
        [1]. Bhubaneswar - Lingraj Temple, Mukteshwar Temple\n
        [2]. Puri - Jagannath Temple, Puri Beach, Chilika Lake\n
        [3]. Konark - Sun Temple, Chandrabhaga Beach\n
        Let me know if you need more information!`;
    }
    
    else if (userText.includes('himachal pradesh') || userText.includes('places to visit in himachal pradesh')) {
        return `Famous places to visit in Himachal Pradesh:\n
        [1]. Shimla - Mall Road, Ridge, Jakhoo Temple\n
        [2]. Manali - Solang Valley, Rohtang Pass, Hadimba Temple\n
        [3]. Dharamshala - McLeod Ganj, Dalai Lama Temple, Bhagsunag Waterfall\n
        Let me know if you need more information!`;
    }
    else if (userText.includes('tamil nadu') || userText.includes('places to visit in tamil nadu')) {
        return `Famous places to visit in Tamil Nadu:\n
        [1]. Chennai - Marina Beach, Kapaleeshwarar Temple, Fort St. George\n
        [2]. Madurai - Meenakshi Temple, Thirumalai Nayakkar Mahal\n
        [3]. Ooty - Botanical Gardens, Nilgiri Mountain Railway\n
        Let me know if you need more information!`;
    }
    else if (userText.includes('uttarakhand') || userText.includes('places to visit in uttarakhand')) {
        return `Famous places to visit in Uttarakhand:\n
        [1]. Nainital - Naini Lake, Naina Devi Temple, Snow View Point\n
        [2]. Haridwar - Ganga Aarti, Har Ki Pauri, Chandi Devi Temple\n
        [3]. Mussoorie - Kempty Falls, Gun Hill, Camel's Back Road\n
        Let me know if you need more information!`;
    }
    else if (userText.includes('andhra pradesh') || userText.includes('places to visit in andhra pradesh')) {
        return `Famous places to visit in Andhra Pradesh:\n
        [1]. Amaravati - Amaravati Buddhist Site, Amaravati Stupa\n
        [2]. Visakhapatnam - Rishikonda Beach, Submarine Museum, Kailasagiri\n
        [3]. Tirupati - Tirumala Venkateswara Temple, Kapila Theertham\n
        Let me know if you need more information!`;
    }
    else if (userText.includes('arunachal pradesh') || userText.includes('places to visit in arunachal pradesh')) {
        return `Famous places to visit in Arunachal Pradesh:\n
        [1]. Tawang - Tawang Monastery, Sela Pass, Bumla Pass\n
        [2]. Itanagar - Itanagar Fort, Ganga Lake\n
        [3]. Ziro - Ziro Valley, Apatani Tribal Culture\n
        Let me know if you need more information!`;
    }
    else if (userText.includes('assam') || userText.includes('places to visit in assam')) {
        return `Famous places to visit in Assam:\n
        [1]. Guwahati - Kamakhya Temple, Assam State Museum, Brahmaputra River\n
        [2]. Kaziranga National Park - Home to the one-horned rhinoceros, wildlife safaris\n
        [3]. Majuli - Largest river island, cultural heritage\n
        Let me know if you need more information!`;
    }
    else if (userText.includes('bihar') || userText.includes('places to visit in bihar')) {
        return `Famous places to visit in Bihar:\n
        [1]. Bodh Gaya - Mahabodhi Temple, Bodhi Tree\n
        [2]. Nalanda - Nalanda University ruins, Hiuen Tsang Memorial\n
        [3]. Patna - Golghar, Patna Museum\n
        Let me know if you need more information!`;
    }
    else if (userText.includes('chhattisgarh') || userText.includes('places to visit in chhattisgarh')) {
        return `Famous places to visit in Chhattisgarh:\n
        [1]. Raipur - Mahant Ghasidas Memorial Museum, Nandan Van Zoo\n
        [2]. Bastar - Kanger Valley National Park, Chitrakote Waterfalls\n
        [3]. Bilaspur - Ratanpur Fort, Malhar\n
        Let me know if you need more information!`;
    }
    else if (userText.includes('goa') || userText.includes('places to visit in goa')) {
        return `Famous places to visit in Goa:\n
        [1]. North Goa - Baga Beach, Fort Aguada, Anjuna Beach\n
        [2]. South Goa - Palolem Beach, Dudhsagar Falls, Cabo de Rama Fort\n
        [3]. Old Goa - Basilica of Bom Jesus, Se Cathedral\n
        Let me know if you need more information!`;
    }
    else if (userText.includes('haryana') || userText.includes('places to visit in haryana')) {
        return `Famous places to visit in Haryana:\n
        [1]. Gurgaon - Kingdom of Dreams, DLF CyberHub\n
        [2]. Panchkula - Mansa Devi Temple, Morni Hills\n
        [3]. Kurukshetra - Brahma Sarovar, Dharmikshetra\n
        Let me know if you need more information!`;
    }
    else if (userText.includes('jharkhand') || userText.includes('places to visit in jharkhand')) {
        return `Famous places to visit in Jharkhand:\n
        [1]. Ranchi - Hundru Falls, Rock Garden, Tagore Hill\n
        [2]. Jamshedpur - Jubilee Park, Tata Steel Plant, Dalma Wildlife Sanctuary\n
        [3]. Bokaro - City Park, Bokaro Mall\n
        Let me know if you need more information!`;
    }
    else if (userText.includes('karnataka') || userText.includes('places to visit in karnataka')) {
        return `Famous places to visit in Karnataka:\n
        [1]. Bengaluru - Bangalore Palace, Lalbagh Botanical Garden, Vidhana Soudha\n
        [2]. Mysuru - Mysore Palace, Chamundi Hill, Brindavan Gardens\n
        [3]. Hampi - Virupaksha Temple, Vittala Temple, UNESCO World Heritage Site\n
        Let me know if you need more information!`;
    }
    
    
    else if (userText.includes('madhya pradesh') || userText.includes('places to visit in madhya pradesh')) {
        return `Famous places to visit in Madhya Pradesh:\n
        [1]. Khajuraho - Temples, UNESCO World Heritage Site\n
        [2]. Sanchi - Sanchi Stupa, ancient monuments\n
        [3]. Ujjain - Mahakaleshwar Temple, Kumbh Mela site\n
        Let me know if you need more information!`;
    }
    else if (userText.includes('manipur') || userText.includes('places to visit in manipur')) {
        return `Famous places to visit in Manipur:\n
        [1]. Imphal - Loktak Lake, Kangla Fort, Khwairamband Bazar\n
        [2]. Moirang - Loktak Lake, INA Memorial\n
        [3]. Senapati - Dzuko Valley, scenic landscapes\n
        Let me know if you need more information!`;
    }
    else if (userText.includes('meghalaya') || userText.includes('places to visit in meghalaya')) {
        return `Famous places to visit in Meghalaya:\n
        [1]. Shillong - Elephant Falls, Shillong Peak, Ward's Lake\n
        [2]. Cherrapunji - Living Root Bridges, Nohkalikai Falls\n
        [3]. Dawki - Umngot River, boating experiences\n
        Let me know if you need more information!`;
    }
    else if (userText.includes('mizoram') || userText.includes('places to visit in mizoram')) {
        return `Famous places to visit in Mizoram:\n
        [1]. Aizawl - Mizoram State Museum, Hmuifang Tlang\n
        [2]. Lunglei - Lunglei Hill, Khawbung Village\n
        [3]. Champhai - Mura Puk, scenic landscapes\n
        Let me know if you need more information!`;
    }
    else if (userText.includes('nagaland') || userText.includes('places to visit in nagaland')) {
        return `Famous places to visit in Nagaland:\n
        [1]. Kohima - Kohima War Cemetery, Kisama Heritage Village\n
        [2]. Dimapur - Kachari Ruins, Dimapur Ao Baptist Church\n
        [3]. Mokokchung - Longkhum Village, scenic beauty\n
        Let me know if you need more information!`;
    }
    else if (userText.includes('sikkim') || userText.includes('places to visit in sikkim')) {
        return `Famous places to visit in Sikkim:\n
        [1]. Gangtok - Tsomgo Lake, Nathu La Pass\n
        [2]. Pelling - Khangchendzonga, Pemayangtse Monastery\n
        [3]. Namchi - Samdruptse Hill, Char Dham\n
        Let me know if you need more information!`;
    }
    else if (userText.includes('telangana') || userText.includes('places to visit in telangana')) {
        return `Famous places to visit in Telangana:\n
        [1]. Hyderabad - Charminar, Golconda Fort, Hussain Sagar Lake\n
        [2]. Warangal - Warangal Fort, Thousand Pillar Temple\n
        [3]. Ramoji Film City - Film city, amusement park\n
        Let me know if you need more information!`;
    }
    else if (userText.includes('tripura') || userText.includes('places to visit in tripura')) {
        return `Famous places to visit in Tripura:\n
        [1]. Agartala - Ujjayanta Palace, Tripura State Museum\n
        [2]. Unakoti - Unakoti Rock Carvings, pilgrimage site\n
        [3]. Neermahal - Water palace, scenic beauty\n
        Let me know if you need more information!`;
    }
    
    else if (userText.includes('group train booking') || userText.includes('group train travel')) {
        return "To book a group train ticket, please provide your departure and destination stations, travel date, number of passengers, and preferred train class. I’ll assist you with the group booking process.";
    }
    else if (userText.includes('group plane booking') || userText.includes('group flight booking')) {
        return "Planning a group flight? Please provide your departure and destination airports, travel date, number of passengers, and preferred airline. I’ll guide you through the group booking process.";
    }
    else if (userText.includes('group car rental') || userText.includes('book car for group')) {
        return "Need a car for group travel? Please provide your pick-up location, destination, travel date, and the number of passengers, and I’ll help you book a suitable vehicle for your group.";
    }
    
    
    else if (userText.includes('travel')) {
        return `Welcome to our Travel Chat! How can I assist you today? We offer services for trains, planes, and cars. What would you like help with?\n
        [1]. Train Schedules and Bookings\n
        [2]. Plane Flights and Tickets\n
        [3]. Car Rentals and Rides\n
        [4]. Group Travel Options\n
        [5]. Travel Routes and Itineraries\n
        [6]. Fare Information\n
        [7]. Cancellation and Refunds\n
        Please select an option or ask me directly about your travel needs!`;
    }
    else if (userText.includes('train schedule') || userText.includes('train timings')) {
        return "Please provide your departure and destination stations, along with the date of travel, and I'll find the best train options for you!";
    }
    else if (userText.includes('fare information') || userText.includes('ticket price')) {
        return "Let me help you with fare details. Please provide your travel details (departure and destination) for train, flight, or car, and I'll get the information for you.";
    }
    else if (userText.includes('cancellation') || userText.includes('refund')) {
        return "Need help with cancellations or refunds? Please provide your booking details, and I'll guide you through the process.";
    }
    else if (userText.includes('places to visit in india') || userText.includes('famous places in india')) {
        return `Here are some famous places to visit in India:\n
        [1]. Taj Mahal, Agra - Iconic mausoleum, explore stunning architecture.\n
        [2]. Jaipur, Rajasthan - Amer Fort, Hawa Mahal, rich culture and crafts.\n
        [3]. Varanasi, Uttar Pradesh - Ganges River, spiritual rituals and ancient temples.\n
        [4]. Kerala Backwaters - Scenic houseboat cruises and Ayurvedic treatments.\n
        [5]. Goa - Beautiful beaches, vibrant nightlife, and water sports.\n
        [6]. Ranthambore National Park - Wildlife sanctuary, tiger safaris, and ancient ruins.\n
        [7]. Leh-Ladakh - Breathtaking landscapes, trekking, and monasteries.\n
        [8]. Mysore, Karnataka - Mysore Palace, Chamundi Hill, and gardens.\n
        [9]. Rishikesh and Haridwar - Spiritual towns, yoga, and Ganga Aarti.\n
        [10]. Hampi, Karnataka - Ancient temples and UNESCO World Heritage Site.\n
        Let me know if you want more information about any specific place!`;
    }
    
    
    else if (userText.includes('flight schedule') || userText.includes('plane timings')) {
        return "Please provide your departure and destination airports, along with the date of travel, and I'll find the best flight options for you!";
    }
    else if (userText.includes('book flight') || userText.includes('flight ticket booking')) {
        return "To book a flight, please provide the departure and destination airports, travel date, and preferred airline. I'll guide you through the process step-by-step.";
    }
    else if (userText.includes('flight seat availability') || userText.includes('available seats on flight')) {
        return "Please provide the flight number or airline, travel date, and cabin class (e.g., Economy, Business) to check seat availability.";
    }
    else if (userText.includes('flight fare') || userText.includes('plane ticket cost')) {
        return "Let me help you with flight fare details. Please provide the airline, travel class, and travel date to get the fare information.";
    }
    else if (userText.includes('flight status') || userText.includes('track flight')) {
        return "Please share the flight number and date of travel, and I'll provide you with real-time flight status.";
    }
    else if (userText.includes('flight status') || userText.includes('track flight')) {
        return "Please share the flight number and date of travel, and I'll provide you with real-time flight status.";
    }
    else if (userText.includes('rent car') || userText.includes('car rental')) {
        return "Looking to rent a car? Please provide your pick-up location, date, and preferred car type, and I'll assist you in booking a rental.";
    }
    else if (userText.includes('book car') || userText.includes('car ride')) {
        return "To book a car ride, please share your pick-up location, destination, and travel date, and I'll guide you through the booking process.";
    }
    else if (userText.includes('car fare') || userText.includes('ride cost')) {
        return "Please provide your pick-up and drop-off locations to get an estimate of the car fare for your ride.";
    }
    else if (userText.includes('car fare') || userText.includes('ride cost')) {
        return "Please provide your pick-up and drop-off locations to get an estimate of the car fare for your ride.";
    }
    else if (userText.includes('car availability') || userText.includes('check car')) {
        return "Please share your travel date and location to check the availability of cars in your area.";
    }
    
     else {
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
});: 10;top: 4047px;mix-blend-mode:multiply;