//页面加载时加载页面注脚
$.get("php/login_footer.php",function(data){
    $(".footer").html(data);
})


//定义jquery对象

var uname=$("[name='username']");
var pwd=$(".pwd1");
var pwdMore=$(".pwd2");
var p1=$(".pwd-input>div>p>i")[0];
var p2=$(".pwd-input>div>p>i")[1];
var p3=$(".pwd-input>div>p>i")[2];
var btn=$("[type='button']")
function valLength(val){
   return  val.replace(/[^x00-xff]/g,'aa').length;
}
//用户名输入框获取状态

uname.focus(function(){
    $(this).parent().siblings('p').show();
    $(this).addClass("focus")
})
uname.focus();
uname.keyup(function(){
    var val=$(this).val();
    //console.log( $(".count"))
    $(".login .count").css("visibility","visible");
    var count=valLength(val);
    //console.log(count);
    $("b.count").html(" "+count+"个字符")
    if(count==0){
        $(".count").hide();
    }else{
        $(".count").show();
    }
})
function unameBlur(){
    var val=$(this).val();
    var reg=/[^\w\u4e00-\u9fa5]/;
    var count=valLength(val);
    if(reg.test(val)){
        $(this).parent().siblings('p').html("<i class='fa fa-exclamation-circle'></i>含有非法字符").addClass("alert");
        $(this).attr("class","alert");
    }else if(val==""){
        $(this).parent().siblings('p').html("<i class='fa fa-exclamation-circle'></i>不能为空").addClass("alert");
        $(this).attr("class","alert");
    }else if(count>25){
        $(this).parent().siblings('p').html("<i class='fa fa-exclamation-circle'></i>长度不能多于25个字符").addClass("alert");
        $(this).attr("class","alert");
    }else if(count<5){
        $(this).parent().siblings('p').html("<i class='fa fa-exclamation-circle'></i>长度不能少于5个字符").addClass("alert");
        $(this).attr("class","alert");
    }else{
        $.post('php/check.php',{uname:val},function(data){
           if(data=="cunzai"){
               $(this).parent().siblings('p').html("<i class='fa fa-exclamation-circle'></i>用户名已存在").addClass("alert");
               $(this).attr("class","alert");
           }else{
               $(this).parent().siblings('p').html("<i class='fa fa-check-circle'></i>用户名可以使用").removeClass("alert");
               $(this).attr("class","");
           }
        }.bind(this))

    }
}
uname.blur(unameBlur)
//密码验证
pwd.focus(function(){
    $(".pwd-input>div>p").show();
    $(this).addClass("focus")
})
function pwdKeyup(){
    var val=pwd.val();
    var count=valLength(val);
    var reg=/^[\d]{1,9}$/
    var state=0;
    //var reg=/^[/d]/;
    if(count<6||count>12){
        p1.className="fa fa-exclamation-circle"
        p1.parentNode.className="alert";
    }else{
        p1.className="fa fa-check-circle";
        p1.parentNode.className="msg"
        state+=1;
    }

    if(reg.test(val)){
        p2.className="fa fa-exclamation-circle"
        p2.parentNode.className="alert";
    }else{
        p2.className="fa fa-check-circle";
        p2.parentNode.className="msg"
        state+=1;
    }
    if(/\s/.test(val)){
        p3.className="fa fa-exclamation-circle"
        p3.parentNode.className="alert";
    }else{
        p3.className="fa fa-check-circle";
        p3.parentNode.className="msg"
        state+=1;
    }
    if(val.length<6){
        $(".pwd-check em").eq(0).addClass('active');
        $(".pwd-check em").eq(1).removeClass('active');
        $(".pwd-check em").eq(2).removeClass('active');
    }else if(val.length<=12){
        $(".pwd-check em").eq(1).addClass('active');
        $(".pwd-check em").eq(2).removeClass('active');
        $('.pwd2').removeAttr("disabled")
        console.log("i")
    }else if(val.length<=16){
        $(".pwd-check em").eq(2).addClass('active');
    }
    if(state==3){return true}
}
pwd.keyup(pwdKeyup)
pwd.blur(function(){
    if(pwdKeyup()){
        $(this).removeAttr("class")
    }else{$(this).removeAttr("class").addClass('alert')};
    if($(this).val()==""){
        p1.className="fa fa-exclamation-circle"
        p1.parentNode.className="alert";
        p2.className="fa fa-exclamation-circle"
        p2.parentNode.className="alert";
        p3.className="fa fa-exclamation-circle"
        p3.parentNode.className="alert";
    }
})
//再次输入密码验证
pwdMore.focus(function(){
    $(this).parent().siblings('p').show();
    $(this).addClass("focus")
})
function pwdMoreBlur(){
    if($(this).val()==pwd.val()){
        $(this).parent().siblings('p').html("<i class='fa fa-check-circle'></i>").removeClass("alert");
        $(this).attr("class","");
        return true;
    }else{
        $(this).parent().siblings('p').html("<i class='fa fa-exclamation-circle'></i>两次输入密码不同").addClass("alert");
        $(this).removeClass("focus").addClass("alert");
    }
}
pwdMore.blur(pwdMoreBlur)

//验证码验证
$(".auth-code input").focus(function(){
    $(this).parent().siblings('p').show();
    $(this).addClass("focus")
});
function codeCheck(){
    var up=container.toUpperCase();
    var lower=container.toLowerCase();
    var val=$(this).val();
    if(val==container||val==up||val==lower){
        $(this).parent().siblings('p').html("<i class='fa fa-check-circle'></i>").removeClass("alert");
        $(this).attr("class","");
        return true;
    }else{
        $(this).parent().siblings('p').html("<i class='fa fa-exclamation-circle'></i>验证码有误").addClass("alert");
        $(this).removeClass("focus").addClass("alert");
    }
}
$(".auth-code input").blur(codeCheck)
//canvas绘制验证码

var str="abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"//设置验证码获取字数组
var canv=document.getElementById("canv")
var ctx=canv.getContext("2d");//建立画布
var container="";//获取验证码内的文字初始为""
ctx.textBaseline="bottom";//设置文字对齐基线
ctx.font="20px SimHei";//设置字体样式
function rgb(min,max){//设置生成随机颜色函数
    var r=parseInt(Math.random()*(max-min)+min);
    var g=parseInt(Math.random()*(max-min)+min);
    var b=parseInt(Math.random()*(max-min)+min);
    return "rgb("+r+","+g+","+b+")";
}
function size(min,max){
    var g=parseInt(Math.random()*(max-min)+min);
    return g;
}
function line(){//在画布上生成随机线
    var x=parseInt(Math.random()*81);
    var y=parseInt(Math.random()*36);
    var x1=parseInt(Math.random()*81);
    var y1=parseInt(Math.random()*36);
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x1,y1);
    ctx.strokeStyle=rgb(0,171);
    ctx.stroke();
}
function rotate(){//设置字体随机旋转函数 在-45- +45之间
    var x=parseInt(Math.random()*90+315)*Math.PI/180;
    return x;
}
function auth(){
    container="";
    ctx.clearRect(0,0,80,35)
    for(var i=1;i<=4;i++){//写入随机码和随机线
        ctx.translate((i-1)*20+10,17.5);
        var r=rotate();
        ctx.rotate(r);
        var cha=parseInt(Math.random()*str.length);
        var txt=String(str[cha]);
        container+=txt;
        var b=size(16,25);
        ctx.font=b+"px SimHei";
        var a=ctx.measureText(txt).width;
        var g=rgb(0,171);
        canv.style.background=rgb(170,256);
        ctx.fillStyle=g;
        ctx.fillText(txt,-2/a,b/2);
        ctx.rotate(-r);
        ctx.translate(-((i-1)*20+10),-17.5);
        line();
    }
    for(var i=1;i<=50;i++){//生成随机杂色点
        ctx.beginPath();
        var x=parseInt(Math.random()*81);
        var y=parseInt(Math.random()*36);
        ctx.fillStyle=rgb(200,256);
        ctx.arc(x,y,1,0,Math.PI*2);
        ctx.fill();
    }
    //console.log(container)
    return container;
}
auth();//页面加载时自动生成一次
$('.auth-code a').click(function(e){
    e.preventDefault();
    auth();
})


//点击按钮实现提交注册信息
btn.click(function(e){
    var val1=$('input').eq(0).val();
    var val2=$('input').eq(1).val()
    var i=$("i");
    if(!(i[0].className=="fa fa-check-circle")){
        uname[0].focus();
        e.preventDefault()
    }else if(!((i[1].className=="fa fa-check-circle")&&(i[2].className=="fa fa-check-circle")&&(i[3].className=="fa fa-check-circle"))){
        pwd[0].focus();
        e.preventDefault()
    }else if(!(i[4].className=="fa fa-check-circle")){
        pwdMore[0].focus();
        e.preventDefault()
    }else if(!(i[5].className=="fa fa-check-circle")){
        $('input')[3].focus();
        e.preventDefault()
    }else{
        $.post("php/login.php",{uname:val1,pwd:val2},function(){});
        alert("注册成功,跳转登录页面");
        form.submit();
    }
})