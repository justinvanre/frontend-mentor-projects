
const menuIcon = document.querySelector('.menu__icon img');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

console.log(nav); 

menuIcon.addEventListener('click', (e) => {

    nav.classList.toggle('clicked');
    body.classList.toggle('modal-open');

    if (menuIcon.src.endsWith("hamburger.svg")) {
        menuIcon.src = "./assets/images/icon-close.svg";
    } else {
        menuIcon.src = "./assets/images/icon-hamburger.svg";  
    }

});
