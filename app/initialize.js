import $     from "jquery";

function initAnchorScroll () {
  $('a[href^="#"]').on('click', function() {
    const el = $(this).attr('href');
    $('body').animate({scrollTop: $(el).offset().top}, 500);
  });
}

$(document).ready(() => {
  initAnchorScroll()
});
