const navToggle = document.querySelector(".nav-toggle");

const navMenu = document.querySelector(".nav-menu");

//toggle menu on click
navToggle.addEventListener("click", function () {
  navMenu.classList.toggle("active"); //visual feedback
  const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isExpanded)); //updates ARIA for screen reader
  // navMenu.classList.toggle('show');
});

navMenu.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    navMenu.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

const filterSelect = document.querySelector("#filter");
const resourceCards = document.querySelectorAll(".resource-card");

filterSelect.addEventListener("change", () => {
  const category = filterSelect.value;
  resourceCards.forEach(function (card) {
    card.style.display =
      id === "all" || card.dataset.id === id ? "block" : "none";
  });
}); // Card will show up when picked from filter

//accessibility toggle
//high contrast
const accessibilityToggle = document.querySelector("#accessibility-toggle");
accessibilityToggle.addEventListener("click", () => {
  document.body.classList.toggle("high-contrast");
});

//feedback form validation
const feedbackForm = document.querySelector("#feedback-form");
feedbackForm.addEventListener("submit", (e) => {
  const message = document.querySelector("#message").value.trim();
  if (!message) {
    e.preventDefault();
    alert("Please enter a message before submitting.");
  }
});
