class FormValidator {
  constructor(formSelector) {
    this.forms = document.querySelectorAll(formSelector);
    this.init();
  }

  init() {
    this.forms.forEach((form) => {
      form.addEventListener("submit", (e) => this.handleFormSubmit(e));
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const emailInput = form.querySelector(".form__input");
    const emailValue = emailInput.value.trim();
    const formGroup = emailInput.closest(".form__group");

    if (this.validateEmail(emailValue)) {
      formGroup.classList.remove("form__group--error");
      console.log("Form submitted successfully:", emailValue); // Replace with actual submission logic
    } else {
      formGroup.classList.add("form__group--error");
      console.error("Invalid email:", emailValue);
    }
  }

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(String(email).toLowerCase());
  }
}

// Initialize the FormValidator for all forms with the class "form"
new FormValidator(".form");
