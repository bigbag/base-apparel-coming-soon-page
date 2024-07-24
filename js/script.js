// Constants for DOM elements and styles
const FORM_SELECTOR = '.signup-form';
const EMAIL_INPUT_ID = 'email';
const ERROR_ICON_SELECTOR = '.error-icon';
const VALIDATION_MESSAGE_SELECTOR = '.validation-message';
const ERROR_COLOR = 'hsl(0, 93%, 68%)';
const SUCCESS_COLOR = 'hsl(0, 6%, 24%)';
const ERROR_CLASS = 'error';
const VISIBLE_CLASS = 'visible';

// DOM element references
const form = document.querySelector(FORM_SELECTOR);
const emailInput = document.getElementById(EMAIL_INPUT_ID);
const errorIcon = document.querySelector(ERROR_ICON_SELECTOR);
const validationMessage = document.querySelector(VALIDATION_MESSAGE_SELECTOR);

// Email validation function using regex
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(String(email).toLowerCase());
};

// Function to update UI based on validation result
const updateUI = (isValid) => {
    if (isValid) {
        validationMessage.textContent = "Thank you!";
        validationMessage.style.color = SUCCESS_COLOR;
        errorIcon.classList.remove(VISIBLE_CLASS);
        emailInput.classList.remove(ERROR_CLASS);
        emailInput.value = "";
    } else {
        validationMessage.textContent = "Please enter a valid email";
        validationMessage.style.color = ERROR_COLOR;
        errorIcon.classList.add(VISIBLE_CLASS);
        emailInput.classList.add(ERROR_CLASS);
    }
};

// Form submission event handler
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const isValid = isValidEmail(emailInput.value);
    updateUI(isValid);
});