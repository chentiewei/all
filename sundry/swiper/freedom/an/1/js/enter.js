//页面加载时加载页面注脚
$.get("php/login_footer.php",function(data){
    $(".footer").html(data);
})
//按钮点击异步验证成功并提交
$("[type='button']").click(function(){
    var val=$("[type='text']").val();
    var meg=$("form").serialize();//表单序列化
    $.post('php/check.php',{uname:val},function(data){//异步验证账号是否输错
        if(data=='bucunzai'){
            $(".info>p").hide();
            $(".info>p").eq(0).show();
        }else{
            $.post('php/check_password.php',meg,function(data){//异步验证密码是否正确
                if(data=='bucunzai'){
                    $(".info>p").hide();
                    $(".info>p").eq(1).show();
                }else{
                    localStorage.setItem("uname",val);
                    alert("登录成功")
                    form.submit();
                }
            })
        }
    })
})