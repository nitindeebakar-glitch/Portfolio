// Get the form and message elements
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");
const formMsg = document.getElementById("formMsg");

// Listen for the form submit event
form.addEventListener("submit", function (event) {
  // Stop the page from refreshing (default form behavior)
  event.preventDefault();

  // Get the values typed by the user
  const name = nameInput.value;
  const email = emailInput.value;

  // Show a simple thank-you message
  formMsg.textContent = "Thanks, " + name + "! Your message has been received.";

  // Clear the form
  form.reset();
});