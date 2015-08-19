$(function(){
	$(".in_photo").mouseenter(function(){
		$(this).addClass("in_p_hover");
	}).mouseleave(function(){
		$(this).removeClass("in_p_hover");
	});
});