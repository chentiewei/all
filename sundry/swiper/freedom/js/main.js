//垂直下拉
    var swiperV = new Swiper('.swiper-container-v', {
        pagination: '.swiper-pagination-v',
        direction: 'vertical',
        keyboardControl: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        mousewheelControl: true,
        slideClass : 'my-slide1',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
           	swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });
//第一个左右滑动
	 var swiperH = new Swiper('.swiper-container-h', {
       	pagination: '.swiper-pagination-h',
        paginationClickable: true,
        keyboardControl: true,
        centeredSlides: true,
//      autoplay: 3000,
//      autoplayDisableOnInteraction: false,
//      loop: true,
        slideClass : 'my-slide2',
       	bulletClass : 'my-bullet2',
        onSlideChangeEnd: function(swiper){
           	swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        },
        onTouchEnd: function (swiper) {                  
            swiperAnimate(swiper);
        }
    });
//第四个左右滑动
	var swiperX = new Swiper('.swiper-container-x', {
        pagination: '.swiper-pagination-x',
        paginationClickable: true,
      	keyboardControl: true,
      	centeredSlides: true,
//   	autoplay: 3000,
//    	autoplayDisableOnInteraction: false,
//	    loop: true,
      	slideClass : 'my-slide3',
      	bulletClass : 'my-bullet3',
        onSlideChangeEnd: function(swiper){
           	swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        },
        onTouchEnd: function (swiper) {                  
            swiperAnimate(swiper);
        }
    });
//百度api
var map = new BMap.Map("container"); // 创建地图实例  
var point = new BMap.Point(120.243017,30.467478); // 创建点坐标
map.centerAndZoom(point, 19); // 初始化地图，设置中心点坐标和地图级别
var marker = new BMap.Marker(point); // 创建标注    
map.addOverlay(marker); // 将标注添加到地图中
    var game={
    	init:function(){
    		this.inting();
    		this.mov();
    		//this.anim();
    		this.two();
    		this.three();
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
    	},
    	/*用户鼠标移入聊天*/
    	mov:function(){
    		var ili=$('.aside1>div:nth-child(1)>ul>li');
    		var ili2=$('.aside1>div:nth-child(2)>ul>li');
    		$('.aside1>div:nth-child(1)>ul').on('mouseenter','li',function(e){
    			var inde=$(this).index();
    			$(ili[inde]).find('img').attr('src','img/'+(inde+2)+'.png');
    			$(ili2[inde]).addClass('show');
    		})
    		$('.aside1>div:nth-child(1)>ul').on('mouseleave','li',function(e){
    			var inde=$(this).index();
    			$(ili[inde]).find('img').attr('src','img/t'+(inde+2)+'.png');
    			$(ili2[inde]).removeClass('show');
    		})
    	},
    	/*下路浮标永久动画*/
    	/*anim:function(){
    		console.log('aa')
    		var css = {bottom:'1%'};
    		var time=3000;
			$('footer>div').animate(css,time,rowBack);
			function rowBack(){
				if(css.bottom==='3.5%'){
					css.bottom='1%';
					css.color='#fff';
					time=3000;
				}else if(css.bottom==='1%'){
					css.bottom='3.5%';
					css.color='#39dfa5';
					time=1000;
				}
				$('footer>div').animate(css,time,rowBack);
			}
    	}*/
    	two:function(){
    		$('.two>div>ul').on('mouseenter','li',function(){
    			var ind=$(this).index();
    			var src=$(this).find('img').attr('src').split('1');
    			src.splice(1,0,'2');
    			$(this).find('img').attr('src',src.join(''));
    			$(this).find('span').stop().fadeIn();
    			
    		})
    		$('.two>div>ul').on('mouseleave','li',function(){
    			var ind=$(this).index();
    			var src=$(this).find('img').attr('src').split('2');
    			src.splice(1,0,'1');
    			$(this).find('img').attr('src',src.join(''));
    			stop();
    			$(this).find('span').stop().fadeOut();
    		})
    	},
    	three:function(){
    		
    	}
    }    
    
    /*我的js*/
   	$(function(){
   		game.init();
   	})
   	
var mask=0;
function load(){
   if(mask==70){
       $(".mask1").fadeOut(0);
   }
}
var imgsEnemy1 = [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()];
downloadResource();
function downloadResource(){
    imgsEnemy1[0].src ='img/p1.png';
    imgsEnemy1[0].onload= function(){
        mask+=10;
        load()
    };
    imgsEnemy1[1].src ='img/p2.png';
    imgsEnemy1[1].onload= function(){
        mask+=10;
        load()
    };
    imgsEnemy1[2].src ='img/p3.png';
    imgsEnemy1[2].onload= function(){
        mask+=10;
        load()
    };
    imgsEnemy1[3].src ='img/p4.png';
    imgsEnemy1[3].onload= function(){
        mask+=10;
        load()
    };
    imgsEnemy1[4].src ='img/p5.png';
    imgsEnemy1[4].onload= function(){
        mask+=10;
        load()
    };
    imgsEnemy1[5].src ='img/p6.png';
    imgsEnemy1[5].onload= function(){
        mask+=10;
        load()
    };
    imgsEnemy1[6].src ='img/p7.png';
    imgsEnemy1[6].onload= function(){
        mask+=10;
        load()
    }
    imgsEnemy1[7].src ='img/p8.png';
    imgsEnemy1[7].onload= function(){
        mask+=10;
        load()
    }
}








