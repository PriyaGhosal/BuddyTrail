document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("newsletter-form");
    const subscriptionMessage = document.getElementById("subscription-message");
  
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const email = document.getElementById("email").value;
  
      try {
        const response = await fetch("http://localhost:5000/api/subscribe/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
  
        if (response.ok) {
          subscriptionMessage.textContent = "Thank you for subscribing!";
          subscriptionMessage.style.color = "green";
          form.reset();
        } else {
          const errorData = await response.json();
          subscriptionMessage.textContent = errorData.message || "Subscription failed. Please try again.";
          subscriptionMessage.style.color = "red";
        }
      } catch (error) {
        console.error("Error:", error);
        subscriptionMessage.textContent = "An error occurred. Please try again.";
        subscriptionMessage.style.color = "red";
      }
    });
  });
  