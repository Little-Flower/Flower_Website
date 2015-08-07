$(function(){
	$('.navconL ul li').mouseover(function(){
		var myindexli=$('.navconL ul li').index(this);
		for(var i=0;i<$('.navconL ul li').length;i++){
			if(myindexli==i){
				$(".nav_con"+(i+1)).show(700);
			}else{
				$(".nav_con"+(i+1)).hide(700);
			}
		}
	});
	$('#nav').mouseleave(function(){
		for(var i=0;i<$('.navconL ul li').length;i++){
			$('.nav_con'+(i+1)).hide(700);
		}
	});
})