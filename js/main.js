$(function(){
  // Slick js
  $('.header__slider').slick({
    autoplaySpeed: 5000,
    autoplay: true,
    infinite: true,
    default: true
  });

  // Nav js
  $(".fa-bars").click(function(){
    $(".nav").addClass('navClass');
  })

  $(".close").click(function(){
    $(".nav").removeClass('navClass');
  })

});