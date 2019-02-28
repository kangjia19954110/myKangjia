
(function($){
	
	$.fn.Tab = function(options){
		
		var defaultVal = {
			
			btnClass:'._product_details', //按钮的父级class
			
			conClass:'.product_cont',//内容展示的父级class
			
			bind:'hover',//事件参数click,hover
			
			animation:'0',//动画方向left,up,fadeIn,0为无动画方向
			
			speed:300,//动画运动速度
			
			delay:200,//Tab延迟速度
			
			auto:true,//是否开启自动运行
			
			autoSpeed:3000//自动运行速度
		};
		
		//全局变量
		var obj = $.extend(defaultVal,options),
		
		evt = obj.bind,
		
		btn = $(this).find(obj.btnClass),
		
		con = $(this).find(obj.conClass),
		
		anim = obj.animation,
		
		conWidth = con.width(),
		
		conHeight = con.height(),
		
		len = con.children().length;
		
		sw = len * conWidth,
		
		sh = len * conHeight,
		
		i = 0,
		
		len,t,timer;
		
		return this.each(function(){
			
			//判断动画方向
			function judgeAnim(){
				
				var w = i * conWidth,
				
				h = i * conHeight;
				
				btn.children().removeClass('current').eq(i).addClass('current');
				
				switch(anim){
					
					case '0':
					
					con.children().hide().eq(i).show();
					
					break;
					
					case 'left':
					
					con.css({position:'absolute',width:sw}).children().css({float:'left',display:'block'}).end().stop().animate({left:-w},obj.speed);
					
					break;
					
					case 'up':
					
					con.css({position:'absolute',height:sh}).children().css({display:'block'}).end().stop().animate({top:-h},obj.speed);
					
					break;
					
					case 'fadein':
					
					con.children().hide().eq(i).fadeIn();
					
					break;
				}
			}
			
			//判断事件类型
			if(evt == 'hover'){
				
				btn.children().hover(function(){
					
					var j = $(this).index();
					
					function $(){
						
						i = j;
						
						judgeAnim();
					}
					timer = setTimeout(s,obj.delay);
				},function(){
					
					clearTimeout(timer);
				})
			}else{
				
				btn.children().bind(evt,function(){
					
					i = $(this).index();
					
					judgeAnim();
				})
			}
			
			function startRun(){
				
				t = setInteval(function(){
					
					i++;
					
					if(i >= len){
						
						switch(anim){
							
							case 'left':
							
							con.stop().css({left:conWidth});
							
							break;
							
							case 'up':
							
							con.stop().css({top:conHeight});
						}
						
						i = 0;
						
					}
					judgeAnim();
				},obj.autoSpeed)
			}
			
			if(obj.auto){
				
				$(this).hover(function(){
					
					clearInterval(t);
				},function(){
					
					startRun();
				})
				startRun();
			}
		})
	}
})(jQuery);
