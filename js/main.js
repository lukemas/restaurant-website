(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
       //smooth scrolling
        $('li.smoth-menu a').click(function(){
			 var headerH = "70";
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top- headerH + 'px'
    }, 1208, 'easeInOutExpo');
    
});
       //smooth scrolling
	   //scroll spying
	   $('body').scrollspy({ target: '.navbar-collapse' ,offset : 95 });
	   
      //scroll spying
	  //parallax start
	  $('.parallax-bg,.top-area-bg').scrolly({bgParallax: true});
	  //paralaxx
	  //toggle-menu
	  $('.toggle-menu').click(function(){
		  $('body').addClass('mobile-menu-actiated');
		  
	  });
	   $('.toggle-menu').click(function(){
		  $('.navbar-collapse').addClass('in');
		  
	  });
	  $('ul.nav.navbar-nav li a').click(function(){
		  $('.navbar-collapse').removeClass('in');
		  
	  });
    });
    

    jQuery(window).load(function(){

        
    });


}(jQuery));	