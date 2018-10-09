
//1.导入模块的公用部分
!function($){
	$('#header').load('header.html');
	//第一个参数：地址。
	//第二个参数：选择器。
	$('#footer').load('footer.html');
}(jQuery);
 $(function(){
	var i = 0 ;
	var timer;
	$("#igs").mouseenter(function(){//实现当鼠标移动到box上时，不执行自动轮播功能
				clearInterval(timer);//移动进去时清除定时器
	         }).mouseleave(function(){
	             showTime();//移出后执行go函数
	         });

	$(document).ready(function(){
	    //用jquery方法设置第一张图片显示，其余隐藏
	    $('.ig').eq(0).show().siblings('.ig').hide();
	
	    //调用showTime()函数（轮播函数）
	    showTime();
	
	    //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
	    $('.tab').hover(function(){
	        //获取当前i的值，并显示，同时还要清除定时器
	        i = $(this).index();
	        Show();
	        clearInterval(timer);
	    },function(){
	        //
	        showTime();
	    });
	
	    //鼠标点击左侧的箭头
	    $('.prev').click(function(){
	        clearInterval(timer);
	        if(i == 0){
	            i = 6;//注意此时i的值
	        }
	        i--;
	        Show();
	        showTime();
	    });
	
	    //鼠标点击右侧的箭头
	    $('.next').click(function(){
	        clearInterval(timer);
	        if(i == 5){
	            i = -1;
	        }
	        i++;
	        Show();
	        showTime();
	    });
	});
	
	//创建一个showTime函数
	function showTime(){
	    //定时器
	     timer = setInterval(function(){
	        //调用一个Show()函数
	        Show();
	        i++;
	        //当图片是最后一张的后面时，设置图片为第一张
	        if(i==6){ i=0;}
	    },4000);
	}
	
	
	//创建一个Show函数
	function Show(){
	   
	    $('.ig').eq(i).fadeIn(500).siblings('.ig').fadeOut(500);
	    $('.tab').eq(i).addClass('bg').siblings('.tab').removeClass('bg');
	
	}
 });
 
 $(function(){
    $(function(){
        var _index=0;
		var nav=$(".float_nav"); //得到导航对象
		var win=$(window); //得到窗口对象
		var sc=$(document);//得到document文档对象。
		
        $(".float_nav  li").click(function(){
            $(this).find("a").addClass("active").parent().siblings().find("a").removeClass("active");
            _index=$(this).index()+1;
            //通过拼接字符串获取元素，再取得相对于文档的高度
            var _top=$("#louti"+_index).offset().top;
            //scrollTop滚动到对应高度
            $("body,html").animate({scrollTop:_top},500);
        });
       
        win.scroll(function(){

          if(sc.scrollTop()>=600){
           $(".float_nav").show(); 
           //获取滚动元素对应的索引!!!重难点
            var index=Math.floor(sc.scrollTop()/600);

            $(".float_nav  li a").eq(index-1).addClass("active").parent().siblings().find("a").removeClass("active");
          }else{
           $(".float_nav").hide();
          }
        });
		
		$('float_nav li').on('click', function() {
			$(this).addClass('active').siblings('li').removeClass('active');
			const $top = $('#louti').eq($(this).index()).offset().top;
			$('html,body').animate({ //赋值时考虑兼容。
				scrollTop: $top
			});
		});
		
		
    });
 }())
	
     