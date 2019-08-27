$(function(){
    var $btn=$(".button-submit");
    $btn.on("click",function(){
       var $uname=$("#uname").val();
        var $upwd=$("#upwd").val();
        var $phone=$("#phone").val();
        var $email=$("#email").val();
    $.ajax({
        url:"http://127.0.0.1:3000/register",
            type:"post",
            dataType:"json",
            data:{uname:$uname,upwd:$upwd,phone:$phone,email:$email},
            success:function(result){
                if(result.code==1){
                    alert(result.msg)
                    location.href="login.html"
                }else if(result.code==-1){
                    alert(result.msg)
                }else if(result.code==-2){
                    alert(result.msg)
                }
            }
    })
})
})