$(function(){
    var pid=location.search.slice(1).split("=")[1];
    $.ajax({
        url:"http://127.0.0.1:3000/detail",
        type:"get",
        data:{pid},
        dataType:"json",
        success:function(result){
        //console.log(result);
        $(".detail_left-top>img:first").attr("src",result[0].pic1)  ;
        $(".lg").attr("background-image",'url('+result[0].pic1+')');
        //console.log($(".lg").attr("background-image"))
        $(".detail_left-bottom>img:first").attr("src",result[0].pic1)
        .next().attr("src",result[0].pic2)
        .next().attr("src",result[0].pic3)
        .next().attr("src",result[0].pic4);
        //console.log($(".detail_left-bottom>img:first").attr("src"));
        $(".detail_right>h3").html(result[0].title);
        $(".detail_price>p>span").html(result[0].price.toFixed(2)+"&nbsp;&nbsp;&nbsp;RMB");
        $(".detail_active>p:first").html("特价优惠活动："+result[0].active);
        }
    })
})