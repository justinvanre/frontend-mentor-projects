// Initialization swiper (slideshow)

var swiper = new Swiper(".swiper", {

    loop: true, 
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 15,

    pagination: {
      clickable: true,
    },

    navigation: {
        nextEl: "#arrow__btn__right",
        prevEl: "#arrow__btn__left",
    },

    breakpoints: {
      768: {
        spaceBetween: 30,
      }
    }
  });