//indexのメインイメージ
TweenMax.fromTo('.hero', 1, {height:'0%'}, {height:'65%',ease: Power2.easeInOut});
TweenMax.fromTo('.hero', 1, {width:'100%'}, {width:'50%',ease: Power2.easeInOut, delay:1.2});
TweenMax.fromTo('.overlay', 1, {x:'-100%'}, {x:'0%',ease: Power2.easeInOut, delay:1.2});

TweenMax.fromTo('.hero-r', 1, {height:'0%'}, {height:'100%',ease: Power2.easeInOut});
TweenMax.fromTo('.hero-r', 1, {width:'100%'}, {width:'100%',ease: Power2.easeInOut, delay:1.2});

TweenMax.staggerFromTo('.leters', 0.5, {x:'1em',y:'1.2em',rotateZ: 180}, {x:0,y:0,rotateZ:0,ease: Power2.easeInOut, delay:1.8},0.05);


//indexのslideメニュー
$(document).on('ready', function() {
  $(".regular_3").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
});

//スクロールでフェードインするアニメーション
jQuery(function ($) {
  var fadeIn = $('.fade-in');
  $(window).scroll(function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop(); 
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("scroll-in");
      }
    });
  });
});

//ハンバーガーメニュー
$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });
});
