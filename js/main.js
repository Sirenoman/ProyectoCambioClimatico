//Cambio de imagenes
var swiper = new Swiper(".BdSlider-thumbs", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 0,
  });
  var swiper2 = new Swiper(".BdSlider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
  });