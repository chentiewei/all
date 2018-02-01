/************顶部*************/
(function(window) {

	$.get("php/mi_footer.php",function(data){
		$("#footer").html(data);
	})
	//获取本地存储信息uname;
	var save=localStorage.getItem("uname");

	if(save==null){//如果存在信息直接使用，否则使用原登陆页面
		$("#top .login").html('<a href="enter.html">登录</a><b>|</b><a href="login.html">注册</a>');
	}else{
		$("#top .login").html('欢迎回来：'+save+'<b>|</b><a href="#" class="cancel">注销账号</a>');
	}
	$("#top .login").on('click',".cancel",function(){//注销账号，确认
		if(confirm("是否确认注销")){
			localStorage.removeItem("uname")
			$("#top .login").html('<a href="enter.html">登录</a><b>|</b><a href="login.html">注册</a>');
		}

	})

	$(".cart").mouseover(function () {
		$(".cart a").addClass("hover");
		var html = $(".cart a span ").html();
		if (html == "（0）") {
			$(".cart-menu>div").html("购物车中还没有商品，赶紧选购吧！")
		}
		$(".cart .cart-menu").css("display", "block");
	})
	$(".cart").mouseout(function () {
		$(".cart a").removeClass("hover");
		$(".cart .cart-menu").css("display", "none");
	})

	/***************头部*******************/
	$("#header .nav>li").hover(function () {
		$(this).children(".container").show();
		$(this).siblings().children(".container").hide();
	}, function () {
		$(this).children(".container").hide();
	})
	$("#header>form>input").focus(function () {
		$(this).addClass("active").siblings("a").fadeOut().siblings("ul").show();
	})
	$("#header>form>input").blur(function () {
		$(this).removeClass("active").siblings("a").fadeIn().siblings("ul").hide();
	})
	/*****************banner部分*******************/

	$("#banner>ul.lt>li").hover(function () {
		$(this).addClass('hover').siblings('.hover').removeClass('hover');
		$(this).children('.kinds').show();
	}, function () {
		$("#banner>ul.lt>li.hover").removeClass('hover');
		$("#banner .kinds").hide();
	})


	/************************
	 主体部分#main 搭配标签页切换
	 **************************/
	$('#main div.match ul.rt li').mouseover(function () {
		var index = $(this).index();
		$(this).addClass('active').siblings('.active').removeClass('active');
		$(this).parent().parent().parent().children('ul:nth-child(' + (index + 2) + ')').addClass('active').siblings('ul.active').removeClass('active');
	})


	/*******************
	 移入出现 移除消失评论
	 **************/
	$("#main .classify  ul.match>li").hover(function () {
		$(this).children('.review').animate({"bottom": "0"});
	}, function () {
		$(this).children('.review').animate({"bottom": "-75px"})
	})

	//视频播放功能
	$(".details b").click(function(){
		var index=$(this).parent().index();
		$('.hot-bar').show();
		$('.hot-bar>div:nth-child('+(index+1)+')').show().siblings().hide();
	})
	//点击取消视频播放
	$(".hot-bar span").click(function(){
		$(this).parent().parent().hide();
	})
})(window)



