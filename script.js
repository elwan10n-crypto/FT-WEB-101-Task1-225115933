const themeButton = document.getElementById("theme-toggle");
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

// Start with the dark theme.
document.body.classList.add("dark");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "Switch to light mode";
  } else {
    themeButton.textContent = "Switch to dark mode";
  }
});

// The form demonstrates validation and displays a greeting on the page.
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const visitorName = document.getElementById("name").value.trim();
  formMessage.textContent = "Thanks for visiting, " + visitorName + "!";
  contactForm.reset();
});
