<template>
  <div id="app">
   <div class="index-container">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide>
          <img class="swiperimg" src="../assets/images/1.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="swiperimg" src="../assets/images/3.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="swiperimg" src="../assets/images/5.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="swiperimg" src="../assets/images/a.jpg" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> 
      </swiper>
   </div>
   <div class=index-floor>
      <div class="firstfloor">
         <div class="classful">
           <span class="classful-one">沐浴系列</span>
           <span class="classful-two">
             <a href="#">更多>></a>
           </span>
           
         </div>
          
          <div class="firstfloor-product">
           <ul>
              <li v-for="product in indexproducts">
               <img class="indeximg" :src="product.imgurl" alt="">
               <div class="indexproduct-title">
                 <p>
                   <a href="#">
                      {{product.title}}
                   </a>
                 </p>
                  <p>￥{{product.price}}</p>
               </div>
               <div class="indexproduct-buy">
                  <div class="tobuy">
                    <img class="icon" src="../assets/images/heart.png" alt="">
                    <span>
                      收藏
                    </span>
                   </div>
                  <div class="buy">
                   <img class="icon" src="../assets/images/cart.png" alt="">
                    <span>加入购物车</span>
                  </div>
               </div>
              </li>
           </ul>
          </div>
      </div>
   </div>
  </div>
</template>

<script>

  export default{
  name:"index",
 
    data(){
       return {
        swiperOption: {
            pagination: {
               el: '.swiper-pagination',
               clickable: true,
               clickableClass : 'my-pagination-clickable',
             },
             loop : true,
             autoplay:true,
             navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                         }
                      },
               indexproducts:[
                 {
                   imgurl:"/static/img/1.2069e78.jpg",
                   title:"璀璨星空",
                   price:"50000"
                 },
                 {
                  imgurl:"/static/img/3.44223b5.jpg",
                   title:"海上夕阳",
                   price:"20000"
                 },
                 {
                   imgurl:"/static/img/5.f7092c2.jpg",
                   title:"惊涛破浪",
                   price:"10000"

                 },
                 {
                  imgurl:"/static/img/a.faeb0d0.jpg",
                   title:"剑客索隆",
                   price:"80000"
                 }
               ]
              }
         }
  }
</script>

<style scope>
   *{padding:0;margin:0;}
   a{text-decoration:none;}
   ul{list-style:none;}
   .swiperimg{
     width:100%;
     height:620px;
   }
   .classful{
     position:relative;
     height:33px;
   }
   .classful::after{
     width:100%;
     content:"";
     display:block;
     clear:both;
     border:2px solid #eee;
     position:absolute;
     top:25px;left:0px;
   }
   .classful-one,.classful-two{
     position:absolute;
     top:0px;
   }
   .classful-one{
     left:10px;
   }
   .classful-two{
      right:10px;
   }
   .index-floor{
     max-width:1023px;
     margin:0 auto;
     margin-top:50px;
   }
   .indeximg{
     width:200px;
     height:200px;
   }
   .icon{width:10px;height:10px;}
   .firstfloor-product ul{
     display:flex;
     justify-content:space-between;
     margin:10px 0;
   }
   .firstfloor-product ul li{
     border:1px solid #ccc;
     padding:20px 10px;
   }
   .indexproduct-title{
     color:#666;
     margin-top:20px;
    
   }
   .indexproduct-title p{
      display: flex;
     justify-content: center;
     margin:10px 0px;
   }
   .indexproduct-title a{
     color:#666;
   }
   .indexproduct-buy{
     display:flex;
     justify-content:space-between;
     margin-top:20px;
   }
   .tobuy,.buy{
     border:1px solid #ccc;
     padding:5px 10px;
   }

</style>