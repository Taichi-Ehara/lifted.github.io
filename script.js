$(function() {
//   $(document).ready(function(){
// var hSize = $(window).height();
//   $('#mainslide, .slide-img img').height(hSize); // アドレスバーを除いたサイズを付与
// });
// $(window).resize(function(){ // ページをリサイズした時の処理
// var hSize = $(window).height();
//   $('#mainslide, .slide-img img').height(hSize); // アドレスバーを除いたサイズを付与
//   });

  $('#menuButton').click(function() {
    if ($('.icon').hasClass('close')) {
      $('.icon').removeClass('close');

      $('.hide-menu-wrapper').animate({

        'margin-right': '-300px'

      }, 500, 'easeOutQuad');

      $('.burger-msk').fadeOut();

    } else {
      $('.icon').addClass('close');

      $('.hide-menu-wrapper').animate({

        'margin-right': '0'

      }, 500, 'easeOutQuad');
      $('.burger-msk').fadeIn();
    }
  });
  $('.burger-msk, .nav-list a').click(function(){
    if ($('.icon').hasClass('close'))
      $('.icon').removeClass('close');
      $('.hide-menu-wrapper').animate({

        'margin-right': '-500px'

      }, 500, 'easeOutQuad');

      $('.burger-msk').fadeOut();
    });

  $('header a, footer a, .arrow-box a').click(function() {
    var id = $(this).attr('href');
    var adjust = 100;
    var position = $(id).offset().top - adjust;

    $('html, body').animate({
      'scrollTop' : position
    }, 1000, 'easeOutQuad');
  });

  var count = $('#slide li').length;
  var count = $('.waku h2 img').length;
  var count = $('.index-menu .index-btn').length;

  var current = 1;

  var next = 2;

  var interval = 3000;

  var duration = 600;

  var timer;

  $('#slide li:not(:first-child)').hide();
  $('.waku h2 img:not(:first-child)').hide();
  $('.index-btn:not(:first-child)').css('background-color', '#ffffff');

  timer = setInterval(slideTimer, interval);

  function slideTimer() {
    $('#slide li:nth-child(' + current + ')').fadeOut(duration);
    $('.waku h2 img:nth-child(' + current + ')').fadeOut(duration);
    $('.index-btn:nth-child(' + current + ')').css('background-color', '#ffffff');

    $('#slide li:nth-child(' + next +')').fadeIn(duration);
    $('.waku h2 img:nth-child(' + next +')').fadeIn(duration);
    $('.index-btn:nth-child(' + next + ')').css('background-color', '#333333');

    current = next;

    next = ++next;

    if(next > count) {
      next = 1;
    }
  }
  $('.index-btn').removeClass('target');

  $('.index-btn:nth-child(' + current + ')');

  $('.index-btn').click(function(){
    next = $(this).html();

    clearInterval(timer);
    timer = setInterval(slideTimer, interval);

    slideTimer();

    return false;
  });
});
