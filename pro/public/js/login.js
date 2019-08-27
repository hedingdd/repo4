$(function(){
    var $btn=$(" .login-anniu")
    $btn.on("click",function(){
        var $uname=$("input.uname").val()
        var $upwd=$("input.upwd").val()
        $.ajax({
            url:"http://127.0.0.1:3000/login",
            type:"get",
            dataType:"json",
            data:{uname:$uname,upwd:$upwd},
            success:function(result){
               if(result.code==-1){
                   alert(result.msg)
               }else if(result.code==1){
                   alert(result.msg)
                   location.href="index.html"
               }
            }
        })
    })   
})