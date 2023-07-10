$(document).ready(function() {
  $('.carousel.juegos-carousel').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<button type="button" class="slick-prev">◀</button>',
    nextArrow: '<button type="button" class="slick-next">▶</button>'
  });

  $('.carousel.consolas-carousel').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<button type="button" class="slick-prev">◀</button>',
    nextArrow: '<button type="button" class="slick-next">▶</button>'
  });

  $('.carousel.servicios-carousel').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<button type="button" class="slick-prev">◀</button>',
    nextArrow: '<button type="button" class="slick-next">▶</button>'
  });
});
