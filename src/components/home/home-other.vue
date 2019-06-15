<template>
  <div>
    <!-- 悬浮广告 -->
    <div class="positon-td td-left-fixed">
      <banner-ad v-if="adLists.length>0" :image="adLists[0]" :height="350" :width="150">
        <img class="close" slot="close"  src="../../assets/close.png">
      </banner-ad>
    </div>
    <div class="positon-td td-rigth-fixed">
      <banner-ad v-if="adLists.length>0" :image="adLists[1]" :height="350" :width="150">
          <img class="close" slot="close"  src="../../assets/close.png">
      </banner-ad>
    </div>
    <div id="wrapper">
      <div class="content">
        <nav-bar></nav-bar>
        <div class="home-cont">
          <div class="banner-cont">
            <banner-ad v-if="adLists.length>0" :image="adLists[2]" :height="380"></banner-ad>
            <banner-ad :image="adLists[3]" :height="380"></banner-ad>
          </div>
          <class-public :mclass="1" :sclass="101" :row="12"></class-public>
          <!-- 广告 -->
          <div class="banner-default">
            <banner-ad :image="adLists[4]" :height="148"></banner-ad>
          </div>
          <class-public :mclass="2" :sclass="201"  :row="12"></class-public>

          <div class="banner-default">
            <banner-ad :image="adLists[5]" :height="148"></banner-ad>
          </div>
          <class-public :mclass="3" :sclass="301"  :row="12"></class-public>

          <div class="banner-default">
            <banner-ad :image="adLists[5]" :height="148"></banner-ad>
          </div>
          <class-public :mclass="3" :sclass="301"  :row="12"></class-public>

          <div class="banner-default">
            <banner-ad :image="adLists[5]" :height="148"></banner-ad>
          </div>
          <class-public :mclass="3" :sclass="301"  :row="12"></class-public>
         

          <div class="banner-cont">
            <banner-ad v-if="adLists.length>0" :image="adLists[13]" :height="380"  :width="1200"></banner-ad>
            <banner-ad :image="adLists[14]" :height="380"  :width="1200"></banner-ad>
          </div>

        </div>
      </div>
      <!-- <footer-bar></footer-bar> -->
    </div>

  </div>
</template>
<script>
//js效果
import axios from "axios";
import * as api from "../../api/home.js";
import apis from "../../api/apis.js";
import NavBar from "../common/nav-bar.vue";
import FooterBar from "../common/footer-bar.vue"; 
import BannerAd from "../common/banner-ad.vue"; // 广告
import ClassPublic from "../common/class-public-other.vue"; // 频道
export default {
  name: "home-other",
  props: {},
  components: {
    NavBar,
    FooterBar,
    BannerAd,
    ClassPublic
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
<style lang="less" scoped>
</style>


