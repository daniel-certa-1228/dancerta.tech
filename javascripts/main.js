"use strict";
// console.log( "main.js" );

//quick fade-in of all JumboTron content during page transitions
$(".fadein").hide(0);
$(".fadein").fadeIn(200);

//logo-animation
$('.logo-container').hide(0);

$('.logo-container').each(function(logo){

	$(this).delay(logo * 60).fadeIn(300);

});
