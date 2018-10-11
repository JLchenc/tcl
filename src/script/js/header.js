!function($){
	
		$('.ht_l a').mouseenter(function(){
			$(this).css({color: "#fff"})
		}).mouseleave(function(){
			$(this).css({color: "#ccc"})
		})
		$('.ht_r a').mouseenter(function(){
			$(this).css({color: "#fff"})
		}).mouseleave(function(){
			$(this).css({color: "#ccc"})
		})
		$('#wechat').mouseenter(function(){
			$('.wechat').show()
		}).mouseleave(function(){
			$('.wechat').hide();
		})
		$('.hb_l').mouseenter(function(){
			$(this).css({color: 'red'})
		}).mouseleave(function(){
			$(this).css({color: "#333"})
		})
		$('.hb_l').mouseenter(function(){
			$(this).css({borderBottom: "4px red solid"});
			$('.li_nav').show();
		}).mouseleave(function(){
			$(this).css({border: 0})
		     $('.li_nav').hide();
		}) 
		
// 		$('.hb_l').mouseover(function(){
// 			$('.hb_l').css('border-bottom','4px red solid');
// 			$('.li_nav').show();
// 		});
// 		$('.hb_l').mouseout(function(){
// 			$('.hb_l').css('border','none');
// 			$('.li_nav').hide();
// 		});
		
	}(jQuery);	
	