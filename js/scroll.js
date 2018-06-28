$(function(){ 
	$(window).scroll(function(){ 
		if($(this).scrollTop()!=0){ 
			$('.button-up').fadeIn(); 
		} 
		else{ 
			$('.button-up').fadeOut(); 
		} 
	}); 
		$('.button-up').click(function(){ 
			$('body,html').animate({scrollTop:0},500); 
		}); 
}); 
$(function() { 
	$('a[href="#scroll"]').click(function(event) { 
		event.preventDefault() 
		var el = $('.block-scroll'); 
		$('body,html').animate({ 
			scrollTop: $(el).offset().top 
		}, 1000); 
	}); 
});
