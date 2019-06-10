<template>
  <div :style="{background:'red',width:'23px',height:'123px'}">
    反反复复发
  </div>
</template>
<script>
export default {
  name: "login",
  props: {},
  data() {
    return {
     
    };
  },

  mounted() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
          console.log( '/home-app')
        }else{
          console.log(  '/home')
        }
  },
  methods: {
   
  }
};
</script>
<style lang="less" scoped>
</style>


