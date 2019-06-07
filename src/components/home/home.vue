<template>
  <div>
    <div id="wrapper">
      <div class="content">
        <nav-bar></nav-bar>
      </div>
        <footer-bar></footer-bar>
    </div>

  </div>
</template>
<script>
//js效果
import axios from "axios";
import * as api from "../../api/home.js";
import apis from "../../api/apis.js";
import NavBar from "../common/nav-bar.vue"
import FooterBar from "../common/footer-bar.vue"
 
export default {
  name: "home",
  props: {},
  components: {
    NavBar,
    FooterBar
  },
  data() {
    return {
    };
  },
  mounted() {
    this.homeApi()
  },
  methods: {
    homeApi(){
      let params = {
        "mclass": 1,  
        "sclass": 101,  
        "num": 1
      }
      api.homeApi.videoList(params).then(res=>{
        console.log(res,'res')
      }).catch(error=>{
      })
    }
  }
};
</script>
<style lang="less" scoped>
</style>


