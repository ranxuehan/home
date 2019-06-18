<template>
  <div class="home-app">
        <!-- 悬浮广告 -->
        <!-- <div class="positon-td td-left-fixed">
          <banner-ad v-if="adLists.length>0" :image="adLists[0]" :height="350" :width="150">
            <img class="close" slot="close"  src="../../assets/close.png">
          </banner-ad>
        </div>
         <div class="positon-td td-rigth-fixed">
          <banner-ad v-if="adLists.length>0" :image="adLists[1]" :height="350" :width="150">
             <img class="close" slot="close"  src="../../assets/close.png">
          </banner-ad>
        </div> -->
    <div id="wrapper">
      <div class="content">
        <nav-bar-app></nav-bar-app>
        <div class="main">

        </div>
      </div>
      <!-- <footer-bar></footer-bar> -->
    </div>

  </div>
</template>
<script>
import axios from "axios";
import * as api from "../../api/home.js";
import apis from "../../api/apis.js";
import NavBarApp from "../common/nav-bar-app.vue";
import FooterBar from "../common/footer-bar.vue"; 
import BannerAd from "../common/banner-ad.vue"; // 广告
import ClassPublic from "../common/class-public.vue"; // 频道

export default {
  name: "home",
  props: {},
  components: {
    NavBarApp,
    FooterBar,
    BannerAd,
    ClassPublic,
  },
  data() {
    return {
      adLists: [],
      videoDatas: []
    };
  },
  mounted() {
    this.adList();
  },
  methods: {
    // 获取广告
    adList() {
      let params = {
        page_no: 1
      };
      api.homeApi
        .adList(params)
        .then(res => {
          if (res.code == 0) {
            this.adLists = res.data;
          }
        })
        .catch(error => {});
    }
  }
};
</script>
<style lang="less">
@import url("../styles/me-home-app.less");
.home-app{
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden;
}
.main {
  width: 100%;
  position: absolute;
  bottom: 0;
  top: 1rem;
  overflow-y: scroll;
}
</style>


