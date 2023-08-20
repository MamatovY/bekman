const navLinks = document.querySelectorAll('.nav__left a');

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
