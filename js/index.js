/*菜单显示隐藏*/
$(function(){
    var tabNum = $(".news-t").children("a.x");
    var contentNum = $(".news-bt").find("div");
    var news = $(".news-t").find("div");
    var timer;
    var i = 0;
    $(tabNum).each(function(index){
    	$(this).hover(function(){
    		if($(this).index()!=i){
    			i=$(this).index()
    			$(contentNum).eq(index).css({"display":"block"});
                $(contentNum).eq(index).siblings().css({"display":"none"});
                news.stop().toggleClass("more-one");
    		}   
    	})
    })
});
/*第二个轮播图*/
$(function(){
var 
	 index = 0 ;
	 Swidth = 1190;
	 timer = null;
	 len = $(".box-slider").length ; 
	 
	function NextPage()
	{	
		if(index>3)
		{
			index = 0 ;
		}
		$(".slider-list").stop(true, false).animate({left: -index*Swidth+"px"},600)
		$(".slider-icon i").eq(index).addClass("slider-btn").siblings().removeClass("slider-btn")
	}
	
	function PrevPage()
	{	
		if(index<0)
		{
			index = 3 ;
		}
		$(".slider-list").stop(true, false).animate({left: -index*Swidth+"px"},600)		
	}
    //下一页
	$(".slider-r").click(function(){
		 index++ ;
		 NextPage();
	});
	//上一页
	$(".slider-l").click(function(){
		 index-- ;
		 PrevPage();
	});
    //按钮被移入事件
		$(".slider-icon i").mouseenter(function()
		{
			index = $(this).index();
			$(".slider-list").stop(true, false).animate({left: -index*Swidth+"px"},600);
		$(".slider-icon i").eq(index).addClass("slider-btn").siblings().removeClass("slider-btn");
		})
    //自动滚动
	var timer = setInterval(function(){
			index++ ;
			NextPage();
	},4000);
});
/*用最蠢的办法实现技术有待提高*/
$(function(){
	$(".grid-col1>ul").hover(function(){
		$(".popCtn").toggle();
  })
    $(".popCtn").hover(function(){
		$(".popCtn").toggle();
	});
});
/*轮播*/
$(function(){
   var i = 0;
   //设置定时器，控制自动轮播
   var timer = setInterval(run,3000)
//定时器调用函数
function run(){
  	  i++;
  	  i = i==8?0:i;
  	  $("#flash .bct").eq(i).fadeIn(300).siblings(".bct").fadeOut(300);
  	  $(".circle li").eq(i).addClass("current").siblings().removeClass("current");
  }
 //鼠标经过暂停
 $("#flash").hover(function(){
 	//清理定时器
 	clearInterval(timer);
},function(){
	timer = setInterval(run,3000)
})
//鼠标移入小圆点的效果  
  $(".circle li").mouseenter(function(){
  	var jqthis = $(this);
    timer = setTimeout(function(){
  	 i = jqthis.index();
  	 $("#flash .bct").eq(i).stop().fadeIn(300).siblings(".bct").stop().fadeOut(300);
  	 $(".circle li").eq(i).addClass("current").siblings().removeClass("current");	
  	},200)	 
})
  $(".circle li").mouseleave(function(){
  	clearTimeout(timer);
})
//上一张图片  
   $(".arrow-l").click(function(){
   	i--;
   	i = i==-1?7:i;
   	$("#flash .bct").eq(i).fadeIn(300).siblings(".bct").fadeOut(300);
  	$(".circle li").eq(i).addClass("current").siblings().removeClass("current");
  })
//下一张图片  
   $(".arrow-r").click(function(){
   	i++;
   	i = i==8?0:i;
   	$("#flash .bct").eq(i).fadeIn(300).siblings(".bct").fadeOut(300);
  	$(".circle li").eq(i).addClass("current").siblings().removeClass("current");
  })
});

/*回到顶部*/
$(function(){
            //当点击跳转链接后，回到页面顶部位置
            $("#top").click(function(){
                //$('body,html').animate({scrollTop:0},1000);
        if ($('html').scrollTop()) {
                $('html').animate({ scrollTop: 0 }, 1000);
                return false;
            }
            $('body').animate({ scrollTop: 0 }, 1000);
                 return false;            
           });         
});
//细节处理代码滑过于快---鼠标停留一秒才能发生渲染
//$(".circle li").mouseenter(function(){
//  
//    timer = setTimeout(function(){   /*这是定时炸弹 */
//	 	     alert('移进来了');
//	 },1000)
//$(".circle li").mouseleave(function(){
//	  clearTimeout(timer);
//	
// })
//});