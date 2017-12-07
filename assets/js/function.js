//Full navigation
$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
});

//Smooth scrolling
$(function() {
  $('a.scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

//Back to top
var offset = 100,
  offset_opacity = 1200,
  scroll_top_duration = 700,
  $back_to_top = $('.cd-top');

$(window).scroll(function() {
  ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
  if ($(this).scrollTop() > offset_opacity) {
    $back_to_top.addClass('cd-fade-out');
  }
});

$back_to_top.on('click', function(event) {
event.preventDefault();
$('body,html').animate({
  scrollTop: 0,
}, scroll_top_duration);
});
