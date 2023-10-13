var swiper = new Swiper(".swiper", {

    loop: true, 
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 15,

    pagination: {
      clickable: true,
    },

    navigation: {
        nextEl: "#swiper-right",
        prevEl: "#swiper-left",
    }
  });