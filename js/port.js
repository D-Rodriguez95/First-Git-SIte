$(document).ready(function () {
	console.log("Yous ready for some dank?!");

	$('.hide-title img').mouseenter(function (){
		$(this).siblings().animate({
			opacity: "1",
			right:"50px"
		});

	});

	$('.hide-title img').mouseleave(function (){
		$(this).siblings().animate({
			opacity: "0",
			right:"0"
		});

	});
});