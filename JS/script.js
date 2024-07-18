const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navLinks');
const icon = document.querySelector('i.fa-solid');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    if (icon.classList.contains('fa-bars')) {
        icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        icon.classList.replace('fa-xmark', 'fa-bars');
    }
})