/**
 * Created by Administrator on 2016/11/19.
 */

function add(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        mousewheelControl: true,
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });
}
$(".case-name").hover(function(){
   $(this).children(".mask").addClass("active")
},function(){
    $(this).children(".mask").removeClass("active")
});
/***移动板块设计***/
function screen(){
    var screen=$(window).width();
   if(screen==1366){
       $(".goBottom").css("left","9.6rem");
       $(".design").css({
           top:"36%",
           left:"31%"
       })
   }
}
screen();
var mask=0;
function load(){
   if(mask==50){
       $(".mask1").fadeOut(0);
       add();
   }
}
var imgsEnemy1 = [new Image(),new Image(),new Image(),new Image(),new Image()];
downloadResource();
function downloadResource(){
    imgsEnemy1[0].src ='img/bg.png';
    imgsEnemy1[0].onload= function(){
        mask+=10;
        load()
    };
    imgsEnemy1[1].src ='img/bg2.png';
    imgsEnemy1[1].onload= function(){
        mask+=10;
        load()
    };
    imgsEnemy1[2].src ='img/bg3.png';
    imgsEnemy1[2].onload= function(){
        mask+=10;
        load()
    };
    imgsEnemy1[3].src ='img/bg4.png';
    imgsEnemy1[3].onload= function(){
        mask+=10;
        load()
    };
    imgsEnemy1[4].src ='img/bg5.png';
    imgsEnemy1[4].onload= function(){
        mask+=10;
        load()
    }
}
//百度api
var map = new BMap.Map("container"); // 创建地图实例  
var point = new BMap.Point(120.243017,30.467478); // 创建点坐标
map.centerAndZoom(point, 19); // 初始化地图，设置中心点坐标和地图级别
var marker = new BMap.Marker(point); // 创建标注    
map.addOverlay(marker); // 将标注添加到地图中
var game={
    	init:function(){
    		this.inting();
    	},
    	/*点击用户出现登陆框*/
    	inting:function(){
    		var im=$('nav>ul>li:nth-child(5)>img');
    		$('nav>ul>li:nth-child(5)').on('click',function(){
    			$('.aside2').hasClass('hidden')?(
	    											$('.aside2').removeClass('hidden'),
	    											im.attr('src','img/head2.png'),
	    											$('.aside2>.shade').animate({top:'0'},500)
    											):(
    												im.attr('src','img/head1.png'),
    												$('.aside2>.shade').animate({right:'-100%'},500,function(){
    													$('.aside2>.shade').css({top:'-100%',right:'0'});
    													$('.aside2').addClass('hidden');
    												})
    											)
    												
    		});
    		$('.aside2').on('click',function(e){
    			var e=e.target;
    			$(e).hasClass('aside2')&&(
	    				im.attr('src','img/head1.png'),
		    			$('.aside2>.shade').animate({right:'-100%'},300,function(){
		    				$('.aside2>.shade').css({top:'-100%',right:'0'});
		    				$('.aside2').addClass('hidden');
		    			})
	    			)
    		})
    	}
    }    
    
    /*我的js*/
   	$(function(){
   		game.init();
   	})

