import owlCarousel from 'static/js/plugins/owlCarousel/owl.carousel.min.js';

$(document).ready(function(){
  $(".hero__slider").owlCarousel({
    slideTransition: 'ease',
    smartSpeed: 200,
    autoplay: false,
    nav: true,
    dots: true,
    items: 1
  });
});