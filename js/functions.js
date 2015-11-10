// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs
// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }
//
// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// remap jQuery to $
/*
(function($){
  /* trigger when page is ready */
$(document).ready(function (){
  //$('.nav-menu').animate({"left":"-200px"}, 350);
  
});

$(function() {
    var pull = $('#pull');
    menu = $('.link_menu');
    menuHeight = menu.height();
 
    $(pull).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
    });
});
  /* optional triggers

  $(window).load(function() {
    //Funzione!!!
  });*/

  $(window).resize(function() {
    var w = $(window).width();
    if(w > 800 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  /*

})(window.jQuery);

*/
  function ResponsiveMenu_Open() {
	$('.nav-menu').animate({"left":"0px"}, 700);
  }
  function ResponsiveMenu_Close() {
	$('.nav-menu').animate({"left":"-200px"}, 700);
  }