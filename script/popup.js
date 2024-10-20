 // Delay in milliseconds 
 const popupDelay = 15000; 

 // Function to show the popup if it hasn't been shown yet in this session
 function showPopupIfNeeded() {
     if (!sessionStorage.getItem('popupShown')) {
         // Delay the popup display
         setTimeout(() => {
             document.getElementById('popup').style.display = 'flex';
             sessionStorage.setItem('popupShown', 'true'); // Mark popup as shown
         }, popupDelay);
     }
 }

    // Use pageshow to handle page loads and back navigation
    window.addEventListener('pageshow', function(event) {
        if (event.persisted || performance.getEntriesByType('navigation')[0].type === 'back_forward') {
            // Detect browser back/forward navigation
            showPopupIfNeeded();
        } else {
            // Handle normal page load
            showPopupIfNeeded();
        }
    });

    // Close the pop-up when the user clicks outside of it
    window.onclick = function(event) {
        if (event.target === document.getElementById('popup')) {
            document.getElementById('popup').style.display = 'none';
        }
    };

    // Handle form submission
    document.getElementById('emailForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        if (email) {
            alert(`Thank you! A 20% discount code has been sent to ${email}`);
            document.getElementById('popup').style.display = 'none';
        }
    });

    // Handle "No thanks" button
    document.getElementById('no-thanks').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('popup').style.display = 'none';
    });
