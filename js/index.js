$(function(){
	//index
	$(".in_photo").mouseenter(function(){
		$(this).addClass("in_p_hover");
	}).mouseleave(function(){
		$(this).removeClass("in_p_hover");
	}).click(function(){
		window.location.href="list.html";
	});
	//list
	$(".item .con").mouseenter(function(){
		return;
		/*$(this).addClass("an_rotateX");
		var _this = this;
		setTimeout(function(){
			//$(_this).hide();
			$(_this).css("backgroundColor","#fff");
		},2000);*/
		$(this)[0].style.webkitTransition='-webkit-transform 3s linear';
		$(this)[0].style.webkitTransform = "rotateY("+180+"deg)";  
		$(this).siblings()[0].style.webkitTransition='-webkit-transform 3s linear';
		$(this).siblings()[0].style.webkitTransform = "rotateY("+180+"deg)";  
	}).mouseleave(function(){
		//$(this).removeClass("an_rotateX");
	});
});