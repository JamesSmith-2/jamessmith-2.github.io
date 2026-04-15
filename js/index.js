// Image Carousel Functionality
let currentImageIndex = 0;
const images = document.querySelectorAll(".carousel-image");
const dots = document.querySelectorAll(".dot");
const totalImages = images.length;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove("active");
  });
  dots.forEach((dot, i) => {
    dot.classList.remove("active");
  });
  images[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % totalImages;
  showImage(currentImageIndex);
}

// Auto-rotate every 5 seconds
setInterval(nextImage, 5000);

// Initialize carousel
document.addEventListener("DOMContentLoaded", function () {
  if (images.length > 0) {
    showImage(0);
  }

  // Add click event to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentImageIndex = index;
      showImage(currentImageIndex);
    });
  });
});

// Save user's theme choice
function setTheme(theme) {
  localStorage.setItem("userTheme", theme);
  document.body.className = theme;
}

// Load saved theme on page load
window.addEventListener("load", function () {
  const savedTheme = localStorage.getItem("userTheme") || "light";
  document.body.className = savedTheme;
});

// Save language choice
function setLanguage(lang) {
  localStorage.setItem("userLanguage", lang);
  // Update page content based on language
}

// Load on page visit
const userLang = localStorage.getItem("userLanguage") || "en";

// Save accessibility settings
function saveA11ySettings(settings) {
  localStorage.setItem("a11yPrefs", JSON.stringify(settings));
  applyA11ySettings(settings);
}

// Example: Font size preference
const fontSize = localStorage.getItem("fontSize") || "medium";
document.documentElement.style.fontSize = fontSize;

// Save form data as user types
document.getElementById("myForm").addEventListener("input", function (e) {
  localStorage.setItem(
    "formData",
    JSON.stringify({
      [e.target.name]: e.target.value,
    }),
  );
});

// Restore form data on page load
const savedData = JSON.parse(localStorage.getItem("formData") || "{}");
