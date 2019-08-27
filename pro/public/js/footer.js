$(function(){
  //1. 发送ajax请求
  $.ajax({
    url:"footer.html",
    type:"get",
    success:function(footer){
      $(footer).replaceAll("footer")
      $(`<link rel="stylesheet" href="css/footer.css">`)
      .appendTo("head")
    }
  })
})