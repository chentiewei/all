var swiperH = new Swiper('.swiper-container-h', {
	pagination: '.swiper-pagination-h',
	paginationClickable: true,
	onSlideChangeEnd: function(swiper) {
		swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	},
	onTouchEnd: function(swiper) {
		swiperAnimate(swiper);
	}
});
var swiperX = new Swiper('.swiper-container-x', {
	pagination: '.swiper-pagination-h',
	paginationClickable: true,
	onSlideChangeEnd: function(swiper) {
		swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	},
	onTouchEnd: function(swiper) {
		swiperAnimate(swiper);
	}
});
var swiperZ = new Swiper('.swiper-container-z', {
	pagination: '.swiper-pagination-h',
	paginationClickable: true,
	onSlideChangeEnd: function(swiper) {
		swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	},
	onTouchEnd: function(swiper) {
		swiperAnimate(swiper);
	}
});
var swiperV = new Swiper('.swiper-container-v', {
	pagination: '.swiper-pagination-v',
	paginationClickable: true,
	direction: 'vertical',
	mousewheelControl: true,
	onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
		swiperAnimateCache(swiper); //隐藏动画元素
		swiperAnimate(swiper); //初始化完成开始动画
	},
	onSlideChangeEnd: function(swiper) {
		swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	    if(swiper.activeIndex==4){
	        $('.five').removeClass('hidden');
	    }else{
	        $('.five').addClass('hidden');
	    }
	}
});
//百度api
var map = new BMap.Map("container"); // 创建地图实例  
var point = new BMap.Point(120.243017,30.467478); // 创建点坐标
map.centerAndZoom(point, 20); // 初始化地图，设置中心点坐标和地图级别 
var marker = new BMap.Marker(point); // 创建标注    
map.addOverlay(marker); // 将标注添加到地图中
//自适应rem的代码
(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			if (clientWidth >= 640) {
				docEl.style.fontSize = '100px';
			} else {
				docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
			}
		};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

var game={
	init:function(){
		this.login();
		this.relation();
		this.boot();
	},
	login:function(){
		var im=$('nav>div:nth-child(1)>img');
    		$('nav>div:nth-child(1)').on('click',function(){
    			$('aside').hasClass('hidden')?(
	    											$('aside').removeClass('hidden'),
	    											im.attr('src','img/moblie/logo_l2.png'),
	    											$('aside>ul').animate({top:'0.8rem'},500)
    											):(
    												im.attr('src','img/moblie/logo_l.png'),
    												$('aside>ul').animate({left:'-100%'},500,function(){
    													$('aside>ul').css({top:'-100%',left:'0'});
    													$('aside').addClass('hidden');
    												})
    											)
    												
    		});
    		$('aside').on('click',function(e){
    			var e=e.target;
    			console.log(e)
    			if(e==$('aside')[0]){
    			!$(this).hasClass('hidden')&&(
	    				im.attr('src','img/moblie/logo_l.png'),
		    			$('aside>ul').animate({left:'-100%'},300,function(){
		    				$('aside>ul').css({top:'-100%',left:'0'});
		    				$('aside').addClass('hidden');
		    			})
	    			)
    			}
    		})
	},
	relation:function(){
		var im=$('nav>div:nth-child(3)>img');
		$('nav>div:nth-child(3)').on('click',function(){
			$('.contact').hasClass('hidden')?(
				$('.contact').removeClass('hidden'),
				im.attr('src','img/moblie/logo_r2.png'),
	    		$('.contact>div').animate({top:'0.8rem'},500)
			):(
				im.attr('src','img/moblie/logo_r.png'),
    			$('.contact>div').animate({top:'-0.8rem'},500,function(){
    				$('.contact').addClass('hidden');
    			})  			
			)
		})
		$('.contact').on('click',function(e){
			var e=e.target;
			var ind=$(e).parent().index();
			var imc=$($(this).find('div:nth-child(2)>img')[ind]);
			$.each($('.contact>div:nth-child(2)>img'),function(i,p){
				!$(p).hasClass('hidden')&&$(p).addClass('hidden');
			})
			if(e==$('.contact')[0]){
				!$(this).hasClass('hidden')&&(
					im.attr('src','img/moblie/logo_r.png'),
			    	$('.contact>div').animate({top:'-0.8rem'},300,function(){
			    		$('.contact').addClass('hidden');
			    	})
				)
			}else if(e.tagName=='IMG'){
				imc.hasClass('hidden')?imc.removeClass('hidden').siblings().addClass('hidden'):
										imc.addClass('hidden');
			}
		})
	},
	boot:function(){
		$('.five>div:nth-child(1)>img').on('click',function(){
			!parseInt($('.five').css('bottom'))==0?$('.five').animate({bottom:'0'},500):$('.five').animate({bottom:'-2.5rem'},500);
		})
	}
}

$(function(){
	game.init();
})


var mask=0;
function load(){
   if(mask==70){
       $(".mask_loading").fadeOut(0);
   }
}
var imgsEnemy1 = [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()];
downloadResource();
function downloadResource(){
    imgsEnemy1[0].src ='img/moblie/1/h1.png';
    imgsEnemy1[0].onload= function(){
        mask+=10;
        load()
    };
    imgsEnemy1[1].src ='img/moblie/1/h2.png';
    imgsEnemy1[1].onload= function(){
        mask+=10;
        load()
    };
    imgsEnemy1[2].src ='img/moblie/1/h3.png';
    imgsEnemy1[2].onload= function(){
        mask+=10;
        load()
    };
    imgsEnemy1[3].src ='img/moblie/2/bg2.png';
    imgsEnemy1[3].onload= function(){
        mask+=10;
        load()
    };
    imgsEnemy1[4].src ='img/moblie/3/bg3.png';
    imgsEnemy1[4].onload= function(){
        mask+=10;
        load()
    };
    imgsEnemy1[5].src ='img/moblie/4/bg4.png';
    imgsEnemy1[5].onload= function(){
        mask+=10;
        load()
    };
    imgsEnemy1[6].src ='img/moblie/sign_bk.png';
    imgsEnemy1[6].onload= function(){
        mask+=10;
        load()
    }
}








