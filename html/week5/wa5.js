const navToggle = document.querySelector('.nav-toggle');

const navMenu = document.querySelector('.nav-menu');

//toggle menu on click
navToggle.addEventListener('click',function() {
    navMenu.classList.toggle('active'); //visual feedback
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', string(!isExpanded));
    navMenu.classList.toggle('show');
});

navMenu.addEventListener('click', function() {
    navMenu.classList.toggle('active');});

const dropdownButton = document.querySelector('.dropdown-button');
const projectOverview = document.querySelector('.project_overview');
dropdownButton.addEventListener('click', function() {
    projectOverview.classList.toggle('active');
});
