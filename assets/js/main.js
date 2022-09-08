//Navbar
const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
};
openNavBtn.addEventListener('click', openNav);


const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}
closeNavBtn.addEventListener('click', closeNav);


//Navbar color
window.onscroll = () => {
    const nav = document.getElementById('header');

    if(this.scrollY >= 100) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}

//Popup
let popup = document.getElementById('popup')
let openBtn = document.querySelector('#openPopup')
let closeBtn = document.querySelector('#closePopup')


openBtn.addEventListener('click', () => {
    popup.classList.add('open-popup')
}) 

closeBtn.addEventListener('click', () => {
    popup.classList.remove('open-popup')
})

