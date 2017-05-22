import $ from "jquery"
import slick from 'slick-carousel'

function initAnchorScroll () {
  $('a[href^="#"]').on('click', function() {
    const el = $(this).attr('href');
    $('body').animate({scrollTop: $(el).offset().top}, 500);
  });
}

$(document).ready(() => {
  initAnchorScroll()

  $('.features-list').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  })
});
