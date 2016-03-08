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

$(window).resize(function (){
	document.getElementById("debug").innerHTML = "my current window width is "+ $(window).width();
});

$(document).mousemove(function (){
	if($(window).width()-event.pageX < 200) {
		$(".menu").css("right","0");
	}else{
		$(".menu").css("right","-400");
	}
});




