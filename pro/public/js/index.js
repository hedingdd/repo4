 $(function(){
     $.ajax({
         url:"http://127.0.0.1:3000/index",
        type:"get",
        //data:"",
        dataType:"json",
        success:function(result){
          console.log(result);
          var html=`<div class="louceng">
          <a href="${result[0].href}">
          <img src="${result[0].pic}" alt="">
         <p>${result[0].pname}</p>
         <div class="index-price">
           零售价：${result[0].price.toFixed(2)}￥
         </div>
         </a>
     </div>
     <div class="louceng">
     <a href="${result[1].href}">
      <img src="${result[1].pic}" alt="">
         <p>${result[1].pname}</p>
         <div class="index-price">
           零售价：${result[1].price.toFixed(2)}￥
         </div>
      </a>
     </div>
     <div class="louceng">
     <a href="${result[2].href}">
       <img src="${result[2].pic}" alt="">
         <p>${result[2].pname}</p>
         <div class="index-price">
           零售价：${result[2].price.toFixed(2)}￥
         </div>
      </a>
     </div>`
         var divP1=document.querySelector(".louceng01");
         divP1.innerHTML=html;

         var html=`
         <div class="louceng">
         <a href="${result[9].href}">
         <img src="${result[9].pic}" alt="">
           <p>${result[9].pname}</p>
           <div class="index-price">
             零售价：${result[9].price.toFixed(2)}￥
           </div>
          </a>
        </div>
       <div class="louceng">
       <a href="${result[7].href}">
         <img src="${result[7].pic}" alt="">
           <p>${result[7].pname}</p>
           <div class="index-price">
             零售价：${result[7].price.toFixed(2)}￥
           </div>
        </a>
       </div>
       <div class="louceng">
       <a href="${result[8].href}">
         <img src="${result[8].pic}" alt="">
           <p>${result[8].pname}</p>
           <div class="index-price">
             零售价：${result[8].price.toFixed(2)}￥
           </div>
        </a>
       </div>`
       //divP1.nextElementSibling.innerHTML=html;
       var divP2=divP1.nextElementSibling.nextElementSibling;
       divP2.innerHTML=html;
       console.log(divP2.innerHTML);
       var html=`
       <div class="louceng">
       <a href="${result[13].href}">
		  <img src="${result[13].pic}" alt="">
			<p>${result[13].pname}</p>
			<div class="index-price">
			  零售价：${result[13].price.toFixed(2)}￥
      </div>
      </a>
		</div>
    <div class="louceng">
    <a href="${result[12].href}">
		  <img src="${result[12].pic}" alt="">
			<p>${result[12].pname}</p>
			<div class="index-price">
			  零售价：${result[12].price.toFixed(2)}￥
      </div>
    </a>
		</div>
    <div class="louceng">
    <a href="${result[17].href}">
		  <img src="${result[17].pic}" alt="">
			<p>${result[17].pname}</p>
			<div class="index-price">
			  零售价：${result[17].price.toFixed(2)}￥
      </div>
    </a>
        </div>`
        var divP3=divP2.nextElementSibling.nextElementSibling
        divP3.innerHTML=html
        }
     })
 })

 