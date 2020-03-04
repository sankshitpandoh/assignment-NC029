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
$('.mob-grid-slider').owlCarousel({
    loop:true,
    margin:100,
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
var Open = false;
$('.hamburger').on('click', function(){
    if (Open == false){
    $('.ham-nav').css({'width': '35%','transition':'0.5s ease-in'});
    $('body').addClass('scroll-fixed');
    Open = true;
    }
    else{
      $('.ham-nav').css({'width': '0%'});
      $('body').removeClass('scroll-fixed');
      Open = false
    }
    });
});
