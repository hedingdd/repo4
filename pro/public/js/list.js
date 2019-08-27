$(function(){
    var pno=location.search.split("=")[1];
    var pageSize=6;
    console.log(pno);
    $.ajax({
        url:"http://127.0.0.1:3000/list",
        type:"get",
        dataType:"json",
        data:{pno:pno},
        success:function(result){
          console.log(result);
          var html='';
          for(var pro of result){
              console.log(pro);
              html+=`
            <div class="list_product">
			  <img src="${pro.pic}" alt="">
				<p>${pro.pname}：￥ ${pro.price}</p>
				<a href="#">${pro.title}</a>
				<div class="list_number">
				   <span>数量：</span>
				   <button>+</button>
					 <input type="text" value=1>
					 <button>-</button>
            </div>
            </div>`   
          }
          //console.log(html);
          $(".list_products").html(html);
         // console.log($(".list_foot>ul>li:first"))
      
        }
    })
    $(".list_foot>ul>li:first").on("click",function(){
     console.log(this.pno);
    })
    
})