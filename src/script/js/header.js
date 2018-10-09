!function($){
	
		$('.ht_l a').mouseenter(function(){
			$(this).css("color", "#fff")
		}).mouseleave(function(){
			$(this).css("color", "#ccc")
		})
		$('.ht_r a').mouseenter(function(){
			$(this).css("color", "#fff")
		}).mouseleave(function(){
			$(this).css("color", "#ccc")
		})
		$('#wechat').mouseenter(function(){
			$('.wechat').css("display:block")
		})
		$('.hb_l a').mouseenter(function(){
			$(this).css('border-bottom' '4px' 'solid' 'red')
		})
	}(jQuery);	
	