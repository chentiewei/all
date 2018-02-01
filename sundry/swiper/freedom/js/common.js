$(function(){
	$(window).resize(infinite);
	function infinite() {
		var htmlWidth = $('html').width();
		if (htmlWidth >= 640) {
			$("html").css({
				"font-size" : "40px"
			});
		} else {
			$("html").css({
				"font-size" :  40 / 640 * htmlWidth + "px"
			});
		}
	}infinite();
});

function add(obj){
    var city1=$(obj).attr("src");
    $(obj).addClass("active").removeClass("inactive");
    $(obj).parent().siblings("div").find("img").addClass("inactive").removeClass("active");
    $(obj).parent().siblings("#two").attr("src",city1);
}

$("#two").click( function() {
	var city2=$(this).attr("src");
	if(city2=="images/lantin.png"){
		window.open("http://www.lantin.me/web/companyProfile.html","_self");
	}else if(city2=="images/sanguozhi.png"){
        window.open("http://sgzdz.qcplay.com/wap.php/Guide/1","_self");
	}else if(city2=="images/yun.jpg"){
        window.open("http://www.yunmai56.com/m/index.html","_self");
	}else if(city2=="images/code1.jpg"){
        window.open("http://sgzdz.qcplay.com/wap.php/Guide/4#userconsent#","_self");
	}else{
        window.open("http://baidu.com","_self");
	}
});
function add1(obj){
	alert("陛下/女王、请移驾到pc端进行体验！");
}
function add2(obj){
    var city3=$(obj).attr("src");
    $(obj).addClass("active").removeClass("inactive");
    $(obj).parent().siblings("div").find("img").addClass("inactive").removeClass("active");
    $(obj).parent().siblings("#two1").attr("src",city3);
}
$("#two1").click( function() {
    var city2=$(this).attr("src");
    if(city2=="images/tuya.jpg"){
        window.open("http://api.weixin.qcplay.com/qcplay/son3/graffiti/","_self");
    }else if(city2=="images/sanguozhi.png"){
        window.open("http://sgzdz.qcplay.com/wap.php/Guide/1","_self");
    }else if(city2=="images/yun.jpg"){
        window.open("http://www.yunmai56.com/m/index.html","_self");
    }else if(city2=="images/code1.jpg"){
        window.open("http://sgzdz.qcplay.com/wap.php/Guide/4#userconsent#","_self");
    }else{
        window.open("http://baidu.com","_self");
    }
});
//百度api
var map = new BMap.Map("container"); // 创建地图实例  
var point = new BMap.Point(120.243017,30.467478); // 创建点坐标
map.centerAndZoom(point, 20); // 初始化地图，设置中心点坐标和地图级别 
var marker = new BMap.Marker(point); // 创建标注    
map.addOverlay(marker); // 将标注添加到地图中
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
	    											$('aside>ul').animate({top:'1.8rem'},500)
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
	    		$('.contact>div').animate({top:'1.8rem'},500)
			):(
				im.attr('src','img/moblie/logo_r.png'),
    			$('.contact>div').animate({top:'-1.8rem'},500,function(){
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
			!parseInt($('.five').css('bottom'))==0?$('.five').animate({bottom:'0'},500):$('.five').animate({bottom:'-6rem'},500);
		})
	}
}

$(function(){
	game.init();
})