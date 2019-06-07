<template>
  <div id="footer">
    <div class="footer-cont">
     <ul>
       <li>网址介绍占位网址介绍占位网址介绍占位网址网址介绍占位网址介绍占位网址介绍占位网址网址介绍占位网址介绍占位网址介绍占位网址网址介绍占位网址介绍占位网址介绍占位网址网址介绍占位网址介绍占位网址介绍占位网址网址介绍占位网址介绍占位网址介绍占位网址网址介绍占位网址介绍占位网址介绍占位网址网址介绍占位网址介绍占位网址介绍占位网址</li>
       <li>网址介绍占位网址介绍占位网址介绍占位网址网址介绍占位网址介绍占位网址介绍占位网址网址介绍占位网址介绍占位网址介绍占位网址</li>
       <li>网址介绍占位网址介绍占位网址介绍占位网址网址介绍占位网址介绍占位网址介绍占位网址网址介绍占位网址介绍占位网址介绍占位网址</li>
       <li>网址介绍占位网址介绍占位网址介绍占位网址网址介绍占位网址介绍占位网址介绍占位网址网址介绍占位网址介绍占位网址介绍占位网址</li>
     </ul>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
       
       
    };
  },
  mounted() {
  },
  methods: {
   handleAction(item,index){
     this.actionIndex = index;
   }
  }
};
</script>
<style lang="less" scoped>
 .footer-cont{
   width:1200px;
   margin: 40px auto 40px auto;

   ul{
     li{
       color:#fff;
       font-size:20px;
       cursor: pointer;
       line-height: 30px;
       text-align: center;
       margin-top:20px;
     }
     li:hover{
       color: #FF9900
     }
   }
 }
</style>


