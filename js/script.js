$(function(){
    'use strict'
    //back to top button
$('.back-to-top').on('click',function(){
    $('html,body').animate({
      scrollTop:0,
    },1000);
  });
  $(window).scroll(function () {
    var scrolling2 =  $(this).scrollTop();

    if(scrolling2 > 200){
      $('.back-to-top').fadeIn();

    }else{
      $('.back-to-top').fadeOut()
    }
  });

  // sticky menu
var navOff = $('.main_manu').offset().top;
$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  if (scrolling > navOff) {
    $('.main_manu').addClass('menu-fix');
  }else{
    $('.main_manu').removeClass('menu-fix');
  }
});

// smooth scroll

$("a").on('click', function (event) {

    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html,body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {
            window.location.hash = hash;
        });

    }
});

});

