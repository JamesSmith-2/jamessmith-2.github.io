// Save user's theme choice
function setTheme(theme) {
    localStorage.setItem('userTheme', theme);
    document.body.className = theme;
}

// Load saved theme on page load
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('userTheme') || 'light';
    document.body.className = savedTheme;
});

// Save language choice
function setLanguage(lang) {
    localStorage.setItem('userLanguage', lang);
    // Update page content based on language
};

// Load on page visit
const userLang = localStorage.getItem('userLanguage') || 'en';

// Save accessibility settings
function saveA11ySettings(settings) {
    localStorage.setItem('a11yPrefs', JSON.stringify(settings));
    applyA11ySettings(settings);
}

// Example: Font size preference
const fontSize = localStorage.getItem('fontSize') || 'medium';
document.documentElement.style.fontSize = fontSize;

// Save form data as user types
document.getElementById('myForm').addEventListener('input', function(e) {
    localStorage.setItem('formData', JSON.stringify({
        [e.target.name]: e.target.value
    }));
});

// Restore form data on page load
const savedData = JSON.parse(localStorage.getItem('formData') || '{}');