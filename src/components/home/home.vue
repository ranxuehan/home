<template>
  <div>
    <div class="home" >
       <router-link to="/home-other" tag="h6">跳转page1</router-link>
       <router-link to="/home-details" tag="h6">跳转page2</router-link>
       <router-link to="/home-video" tag="h6">跳转page3</router-link>
    </div>

  </div>
</template>
<script>
//js效果
import axios from "axios";
import * as api from "../../api/home.js";
import apis from "../../api/apis.js";

export default {
  name: "home",
  props: {},
  data() {
    return {};
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
        toast(error)
      })
    }
  }
};
</script>
<style lang="less" scoped>
</style>


