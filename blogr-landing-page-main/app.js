
const menuIcon = document.querySelector('.menu__icon img');

menuIcon.addEventListener('click', (e) => {

    if (menuIcon.src.endsWith("hamburger.svg")) {
        menuIcon.src = "./assets/images/icon-close.svg";
    } else {
        menuIcon.src = "./assets/images/icon-hamburger.svg";  
    }

});
