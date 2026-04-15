const navToggle = document.querySelector(".nav-toggle");

const navMenu = document.querySelector(".nav-menu");

//toggle menu on click
navToggle.addEventListener("click", function () {
  navMenu.classList.toggle("active"); //visual feedback
  const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isExpanded)); //updates ARIA for screen reader
  // navMenu.classList.toggle('show');
});

navToggle.addEventListener("click", showMenu);

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

//Light / Dark Mode
let button = document.querySelector("#theme").addEventListener("click", theme);

function theme() {
  // console.log("theme works");
  setTheme("light");
}

// // Save user's theme choice
// function setTheme(theme) {
//     let inTheme = theme;
//     if(inTheme == 'dark'){
//         theme = 'light';
//     }
//     else {
//         theme = 'dark';
//     }
//     localStorage.setItem('userTheme', theme);
//     document.body.className = theme;
// };

// // Load saved theme on page load
// window.addEventListener('load', function() {
//     const savedTheme = localStorage.getItem('userTheme') || 'light';
//     document.body.className = savedTheme;
// });

//These are the footer buttons that determine the size of text on the page
const small_txt = document.querySelector("#small-text");
const med_txt = document.querySelector("#med-text");
const large_txt = document.querySelector("#large-text");
const clear_txt_pref = document.querySelector("#clear-preferences");

function set_text_size() {
  if(localStorage.getItem("fontSize") !== null) {
    let temp_size = localStorage.getItem("fontSize");
    document.querySelector("html").style.fontSize = String(temp_size) + px;
    
  }
}

function change_text_size(size) {
  let size_in_px = size * 16;

  document.querySelector("html").style.fontSize = String(size_in_px) + "px";

  localStorage.setItem("fontSize", size_in_px);

  console.log("change function");
}

function clear_local_storage(size) {
  let size_in_px = size * 16;

  localStorage.clear();
  document.querySelector("html").style.fontSize = String(size_in_px) + "px";
}

small_txt.addEventListener("click", () => {
  change_text_size(0.8);
});
med_txt.addEventListener("click", () => {
  change_text_size(1);
});
large_txt.addEventListener("click", () => {
  change_text_size(1.5);
});
clear_txt_pref.addEventListener("click", () => {
  clear_local_storage(1);
});
