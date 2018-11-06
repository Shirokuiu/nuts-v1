import owlCarousel from 'static/js/plugins/owlCarousel/owl.carousel.min.js';

let cartPlugin = require('./util/cartPlugin.js');

// width absolute element
window.addEventListener('load', function () {
  const title = document.querySelectorAll('.cart .img .item .text');

  for (let i = 0, len = title.length; i < len; i++) {
    const val = -(title[i].getBoundingClientRect().width / 2);

    title[i].style.marginLeft = val + 'px';
  };
});

//calculate carts

new cartPlugin({
  cart: '.cart',
  select: '.cart .cont .row-calc .weight .weight-select',
  price: '.cart .cont .row-price .current-price p .text',
  calc: '.cart .cont .row-calc .calc-wrap .calc',
  add: '.cart .cont .add',
  basket: {
    count: '.page-header .row-top .basket a .round .count',
    price: '.page-header .row-top .basket a .price p'
  }
});

$(document).ready(function(){
  $(".my-slider .slider").owlCarousel({
    slideTransition: 'ease',
    smartSpeed: 200,
    autoplay: false,
    nav: true,
    responsive: {
      1885: {
        items: 5,
        margin: 70,
        dots: true,
        stagePadding: 5
      },
      1600: {
        items: 5,
        margin: 20,
        dots: true,
        stagePadding: 5
      },
      1285: {
        items: 4,
        margin: 20,
        dots: true,
        stagePadding: 5
      },
      980: {
        items: 3,
        margin: 20,
        dots: false,
        stagePadding: 5
      },
      675: {
        items: 2,
        margin: 20,
        dots: false,
        stagePadding: 5
      },
      320: {
        items: 1,
        margin: 5,
        dots: false,
        stagePadding: 5
      }
    }
  });
});