//Menu
const openMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    } 
};
openMenu('nav-toggle', 'nav-menu')



const navLink = document.querySelectorAll('.nav__link');
navMenu = document.getElementById('nav-menu');

function linkAction() {
    navMenu.classList.remove('show');
}
navLink.forEach(headerNav => headerNav.addEventListener('click', linkAction));


//Navbar color
window.onscroll = () => {
    const nav = document.getElementById('header');

    if(this.scrollY >= 100) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}












//Scroll page
const headerNav = document.querySelectorAll('.nav__menu ul li a[href^="#"]');

headerNav.forEach(item => {
    item.addEventListener('click', scrollOnClick);
});

function scrollOnClick(event) {
    event.preventDefault();
    const to = scrollToHref(event.target) -60;

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

//Habilidades
const progressBars = document.querySelectorAll('#progress-bar');

for (let progressBar of progressBars) {
    progressBar.style.width = progressBar.getAttribute('data-percent') + '%';
}









