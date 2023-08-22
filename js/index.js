const navLinks = document.querySelectorAll('.nav__left a');
const backToTopButton = document.getElementById('backToTop');
const languageSelector = document.getElementById('languageSelector');
const burgerButton = document.querySelector('.burger');
const navItems = document.querySelector('.nav__items');
const body = document.querySelector('body');

burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('active');
    navItems.classList.toggle('active');
    body.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
    console.log('click');
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.offsetTop;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

backToTopButton.style.display = 'none';

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});


backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



// languageSelector.addEventListener('change', () => {
//     const selectedLanguage = languageSelector.value;
//     window.location.href = selectedLanguage; // Replace '.html' with the appropriate file extension of your pages
// });


function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: 'ru',
            includedLanguages: 'en,ky,ru',
            autoDisplay: false
        },
        'google_translate_element'
    );
}
const test = document.querySelector('#google_translate_element');
console.log(test);