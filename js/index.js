const navLinks = document.querySelectorAll('.nav__items a');
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
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if (navItems.classList.contains('active')) {
            navItems.classList.remove('active');
            burgerButton.classList.remove('active');
            body.classList.remove('active');
            setTimeout(() => {
                smoothScroll(link.getAttribute('href'));
            }, 300); // Задержка, чтобы убедиться, что класс 'active' удален
        } else {
            smoothScroll(link.getAttribute('href'));
        }
    });
});

function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
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