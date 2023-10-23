
const menuIcon = document.querySelector('.menu__icon img');
const nav = document.querySelector('.nav .wrapper');

console.log(nav); 

menuIcon.addEventListener('click', (e) => {

    nav.classList.toggle('clicked');

    if (menuIcon.src.endsWith("hamburger.svg")) {
        menuIcon.src = "./assets/images/icon-close.svg";
    } else {
        menuIcon.src = "./assets/images/icon-hamburger.svg";  
    }

});
