$(document).ready(function(){
var owl = $('.hero-banner-slider');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
$('.display-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        }
    }
})
$('.hamburger').on('click', function(){
    $('.ham-nav').css({'width': '100%'});
    $('body').addClass('scroll-fixed');
});
});
