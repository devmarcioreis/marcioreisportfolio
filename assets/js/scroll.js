//Scroll page
const headerNav = document.querySelectorAll('.nav__container ul li a[href^="#"]');

headerNav.forEach(item => {
    item.addEventListener('click', scrollOnClick);
});

function scrollOnClick(event) {
    event.preventDefault();
    const to = scrollToHref(event.target) -80;

    scrollToPosition(to);
};

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth",
    });
};

function scrollToHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
};