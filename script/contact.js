// MOBILE MENU TOGGLE
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");

  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", (e) => {
      e.preventDefault();
      const isHidden = mobileNav.style.display === "none" || mobileNav.style.display === "";
      mobileNav.style.display = isHidden ? "flex" : "none";
    });
  }

  // CONTACT FORM VALIDATION
  const form = document.getElementById("myForm");
  
  if (form) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const productsInput = document.getElementById("products");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const marketError = document.getElementById("marketError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successful");

    // Validation functions
    function validateName(name) {
      return name && name.trim().length >= 2;
    }

    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return email && emailRegex.test(email);
    }

    function validatePhone(phone) {
      const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
      return phone && phoneRegex.test(phone);
    }

    function validateMessage(message) {
      return message && message.trim().length >= 10;
    }

    // Clear error messages
    function clearErrors() {
      if (nameError) nameError.textContent = "";
      if (emailError) emailError.textContent = "";
      if (phoneError) phoneError.textContent = "";
      if (marketError) marketError.textContent = "";
      if (messageError) messageError.textContent = "";
      if (successMessage) successMessage.textContent = "";
    }

    // Form submission handler
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      clearErrors();

      let isValid = true;

      // Validate name
      if (!validateName(nameInput.value)) {
        if (nameError) nameError.textContent = "Name must be at least 2 characters long";
        isValid = false;
      }

      // Validate email
      if (!validateEmail(emailInput.value)) {
        if (emailError) emailError.textContent = "Please enter a valid email address";
        isValid = false;
      }

      // Validate phone
      if (!validatePhone(phoneInput.value)) {
        if (phoneError) phoneError.textContent = "Please enter a valid phone number";
        isValid = false;
      }

      // Validate products (not empty)
      if (!productsInput.value || productsInput.value.trim().length === 0) {
        if (marketError) marketError.textContent = "Please specify the products you're interested in";
        isValid = false;
      }

      // Validate message
      if (!validateMessage(messageInput.value)) {
        if (messageError) messageError.textContent = "Message must be at least 10 characters long";
        isValid = false;
      }

      if (isValid) {
        // Form is valid - show success message
        if (successMessage) {
          successMessage.textContent = "Thank you for reaching out! We'll get back to you within 24 hours.";
        }

        // Optional: reset form after success
        setTimeout(() => {
          form.reset();
          clearErrors();
        }, 1000);
      }
    });
  }
});
