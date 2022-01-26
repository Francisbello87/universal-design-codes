const swiper3 = new Swiper(".mySwiper2", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
