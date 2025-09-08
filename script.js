// -------- Event Handling & Interactive Elements --------

// 1. Change Background Color on Button Click
const colorChanger = document.getElementById("colorChanger");
colorChanger.addEventListener("click", () => {
  // Generate a random color
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.body.style.backgroundColor = randomColor;
});

// 2. Font Size Slider
const fontSlider = document.getElementById("fontSlider");
const sliderText = document.getElementById("sliderText");

fontSlider.addEventListener("input", () => {
  // Adjust the font size dynamically based on slider value
  sliderText.style.fontSize = `${fontSlider.value}px`;
});

// 3. Modal Functionality
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openModal.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// -------- Custom Form Validation --------

const form = document.getElementById("signupForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const errorDisplay = document.getElementById("formError");

form.addEventListener("submit", (e) => {
  let errorMessage = "";

  // Check for empty fields
  if (!username.value || !email.value) {
    errorMessage = "All fields are required.";
  }
  // Check for username length
  else if (username.value.length < 5) {
    errorMessage = "Username must be at least 5 characters.";
  }
  // Basic email format validation
  else if (!email.value.includes("@") || !email.value.includes(".")) {
    errorMessage = "Please enter a valid email address.";
  }

  if (errorMessage) {
    e.preventDefault(); // Stop form from submitting
    errorDisplay.textContent = errorMessage;
  } else {
    errorDisplay.textContent = "";
    alert("Form submitted successfully!");
  }
});
