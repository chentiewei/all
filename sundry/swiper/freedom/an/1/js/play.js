/************图片滚动轮播*************/
(function(window) {
	var timer = null;
	var add = 1226;//每次滚动距离
	var turn = $("#banner .turn")[0];
	var a = parseFloat(getComputedStyle(turn).left);//得到计算宽度
	var i = null;
//移入时停止定时器
	$("#banner .play>span").on("mouseover", function () {
		clearInterval(timer);
		timer = null;
	});

//移出时开始定时器
	$('#banner .play>span').on("mouseout", function () {
		turn1();
	});

//启动定时器
	function turn1() {
		timer = setInterval(function () {
			i = $("#index>span.active").index() + 1;
			if (i == 5) {
				i = 0;
			}
			$("#banner .turn").animate({'left': -add * i + 'px'});
			$("#index>span").eq(i).addClass('active').siblings('.active').removeClass('active');
		}, 6000);
	}

	turn1();
//点击转换页面事件
	$("#index>span").on("mouseover", function () {
		clearInterval(timer);
		timer = null;
	});
	$("#index>span").on("mouseout", function () {
		turn1();
	});

	$("#index>span").on("click", function () {
		$(this).addClass('active').siblings('.active').removeClass('active');
		var i = $(this).index();
		$("#banner .turn").animate({'left': -add * i + 'px'});
	});
//左右切换
	$('.play>span').click(function () {
		var a = parseFloat(getComputedStyle(turn).left);
		if (a % 1226 == 0) {
			//改变方向
			if ($(this).index() == 2) {
				var c = -1;
			} else {
				var c = 1
			}
			var j = $("#index>span.active").index() + c;
			if (j == 5) {
				j = 0;
			} else if (j == -1) {
				j = 4;
			}
			$("#banner .turn").animate({'left': -add * j + 'px'});
			$("#index>span").eq(j).addClass('active').siblings('.active').removeClass('active');
		}
	});


	/*********************************
	 明星单品item轮播
	 *******************************/
	var timer1 = null;  //定义定时器
	var move = 2;		//轮播状态  left=0则为1否则为0
	function fun() {
		timer1 = setInterval(function () {
			if (move == 2) {
				$('#banner .star-goods div').animate({'left': '-1226px'});
				move = 1;
				$('.star-goods h6 span:nth-child(' + move + ')').addClass('active').siblings(".active").removeClass('active');
			} else if (move == 1) {
				$('#banner .star-goods div').animate({'left': '0'});
				move = 2;
				$('.star-goods h6 span:nth-child(' + move + ')').addClass('active').siblings(".active").removeClass('active');
			}
		}, 6000)
	}

	fun();
	$('.star-goods  span').on("mouseover", function () {
		clearInterval(timer1);
		timer1 = null;
	});
	$('.star-goods  span').on("mouseout", function () {
		fun();
	});
	$('.star-goods h6 span ').on("click", function () {
		var index = $(this).index();
		if (index == 0) {
			$('#banner .star-goods div').animate({'left': '0px'});
		} else if (index == 1) {
			$('#banner .star-goods div').animate({'left': '-1226px'});
		}
		$(this).removeClass('active').siblings().addClass('active');
	});


	/****************
	 #main recommend 下的图片轮播
	 ********************/
	var timer2 = null;
	var reco = $('#main .reco')[0];
	var c = -1;
//设置定时器
	function turn2() {
		timer2 = setInterval(function () {
			var recoLeft = parseFloat(getComputedStyle(reco).left);
			var i = recoLeft / 1240;
			if (i == 0) {
				c = -1;

			} else if (i == -3) {
				c = 1;

			}
			i += c;
			if (i == 0) {
				$(".recommend span.fa-angle-right").addClass('active').siblings('.active').removeClass('active');
			} else if (i == -3) {
				$(".recommend span.fa-angle-left").addClass('active').siblings('.active').removeClass('active');
			} else {
				$(".recommend p span").addClass('active')
			}
			recoLeft += 1240 * c;
			$('#main .reco').animate({'left': recoLeft});

		}, 6000)
	}

	turn2();

	/**************** reco 下图片点击切换效果*********************/
	$(".recommend p span").mouseover(function () {
		clearInterval(timer2);
		timer = null;
	});
	$(".recommend p span").mouseout(function () {
		turn2();
	});
	$(".recommend p span.fa-angle-right").click(function () {
		var recoLeft = parseFloat(getComputedStyle(reco).left);
		if (recoLeft % 1240 == 0) {
			var i = recoLeft / 1240;
			i != -3 && (i -= 1);
			if (i == -3) {
				$(".recommend span.fa-angle-left").addClass('active');
				$(this).removeClass('active');
			} else if (i == 0) {
				$(".recommend span.fa-angle-left").removeClass('active');
				$(this).addClass('active');
			} else {
				$(".recommend p span").addClass('active')
			}
			$('#main .reco').animate({'left': 1240 * i});
		}
	});
	$(".recommend p span.fa-angle-left").click(function () {
		var recoLeft = parseFloat(getComputedStyle(reco).left);
		if (recoLeft % 1240 == 0) {
			var i = recoLeft / 1240;
			i != 0 && (i += 1);
			if (i == 0) {
				$(".recommend span.fa-angle-right").addClass('active');
				$(this).removeClass('active');
			} else if (i == -3) {
				$(".recommend span.fa-angle-right").removeClass('active');
				$(this).addClass('active');
			} else {
				$(".recommend p span").addClass('active')
			}
			$('#main .reco').animate({'left': 1240 * i});
		}
	});


	/**************** contain 轮播效果*********************/
		//点击下方按钮就跳转
	$(".contain-btn>li").click(function () {
		var index = $(this).index();
		$(this).addClass("active").siblings('.active').removeClass('active');
		$(this).parent().siblings('.contain-fun').animate({'left': -index * 296})
	});
	//自动轮播
//var timer3=null;
//var containFun=$("#main .contain-fun")[0];
//var moveo=-1;	//设置状态
//function turn3(){
//	timer3=setInterval(function(){
//		var funLeft=parseFloat(getComputedStyle(containFun).left);
//		var i=funLeft/296;
//		var length=$("#main .contain-fun li").length;
//		if(i==0){
//			moveo=-1;
//		}else if(i==-(length-1)){
//			moveo=1;
//		}
//		i+=moveo;
//		$("#main .contain-btn>li:nth-child("+(-i+1)+")").addClass("active").siblings('.active').removeClass('active');
//		//改变相应右下角的li的样式
//		funLeft+=moveo*296;
//		//console.log(funLeft)
//		$("#main .contain-fun").animate({'left':funLeft});
//	},6000)
//}
//turn3();

	//点击切换事件

	$(".matter .fa-angle-left").click(function () {
		var containFun = $(this).siblings('ul.contain-fun')[0];
		var funLeft = parseFloat(getComputedStyle(containFun).left);
		var i = funLeft / 296;
		if (funLeft % 296 == 0) {
			if (i != 0) {
				funLeft += 296;
				var active = $(this).siblings("ul.contain-btn").children(".active");
				active.prev().addClass('active');
				active.removeClass('active');
				$(this).siblings("ul.contain-fun").animate({'left': funLeft});
			}
		}
	})
	$(".matter .fa-angle-right").click(function () {
		var containFun = $(this).siblings('ul.contain-fun')[0];
		var funLeft = parseFloat(getComputedStyle(containFun).left);
		var i = funLeft / 296;
		if (funLeft % 296 == 0) {
			if (i != -3) {
				funLeft -= 296;
				var active = $(this).siblings("ul.contain-btn").children(".active");
				active.next().addClass('active');
				active.removeClass('active');
				$(this).siblings("ul.contain-fun").animate({'left': funLeft});
			}
		}
	})


	//鼠标滚动 楼层点亮事件
	//求任意elem距页面顶部的总距离
	var timers=null;
	function getElemTop(elem){
		//声明一个sum,初始化为elem.offsetTop
		var sum=elem.offsetTop;
		//循环:elem.offsetParent!=null
		while(elem.offsetParent!=null){
			//获得elem.offsetParent.offsetTop，累加s到sum上
			sum+=elem.offsetParent.offsetTop;
			//将elem替换为其offsetParent
			elem=elem.offsetParent;
		}//(循环结束)
		return sum
	}
	function light() {
		var divs = $("#main>div");//获取main下面的所有子元素div
		//获得页面滚动的距离，保存在变量scrollTop
		var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
		//console.log(scrollTop)
		var main=document.getElementById("main");//获取main元素
		var elemTop = getElemTop(main);//获得main到页面顶部的距离
		var style = getComputedStyle(main);
		var fHeight = parseFloat(style.height);//获得计算的main的高度
		if (elemTop<scrollTop  &&( elemTop +fHeight)>scrollTop ){//执行判断，当滚动距离在（元素距离页面高度-（元素距离页面高度+高度））之间时楼层显示
			$('.floor').show();
		}else{
			$('.floor').hide();
		}
		for (i = 0; i < divs.length; i++) {
			var elemTop = getElemTop(divs[i]);
			var style = getComputedStyle(divs[i]);
			var fHeight = parseFloat(style.height);
			var upLevel = (innerHeight - fHeight) / 2;//亮灯上限
			var downLevel = upLevel + fHeight;//亮灯下限
			if (elemTop >= (scrollTop + upLevel) && elemTop < (scrollTop + downLevel)) {
				console.log(i)
				$('.floor').show();
				$(".floor ul li").eq(i).addClass("hover").siblings().removeClass("hover");
			}
		}
	}
	$(".floor ul li a").click(function(e) {

		e.preventDefault();
		if(timers==null) {
			var f = $(this).attr('href');
			var elemTop = getElemTop($(f)[0]);
			var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
			var fHeight = parseFloat(getComputedStyle($(f)[0]).height);
			var upLevel = (innerHeight - fHeight);
			var moved = elemTop - scrollTop - upLevel;
			var step = moved / 20;
			var move = 0;
			timers = setInterval(function () {
				window.scrollBy(0, step);
				move += step;
				if (moved > 0 && move >= moved) {
					clearInterval(timers);
					timers = null
				}
				if (moved < 0 && move <= moved) {
					clearInterval(timers);
					timers = null
				}

			}, 100)
		}
	})
	window.addEventListener('scroll',light);//给window绑定滚动事件
})(window)



