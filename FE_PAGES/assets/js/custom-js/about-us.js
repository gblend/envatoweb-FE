

//initialize wow.js for animation on scroll
$( document ).ready(function() {
    new WOW().init();
});

//initialize and Configure Slick Carousel
$(document).ready(function () {
    $('.sponsors-icon-row').slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
        responsive: [
            {
            breakpoint: 576,
            settings: {slidesToShow: 4}
            },
            
            {
            breakpoint: 768,
            settings: {slidesToShow: 6}
            },
        
        ]
    });
  });