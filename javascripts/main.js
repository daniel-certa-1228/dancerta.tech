"use strict";
console.log( "main.js" );

$(".fadein").hide(0);
$(".fadein").fadeIn(200);

$('.logo-container').hide(0);

$('.logo-container').each(function(logo){

	$(this).delay(logo * 80).fadeIn(300);

});
