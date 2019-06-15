<template>
  <div class="class-public">
    <div class="class-title">
      <!-- <div class="class-name">
        <img src="../../assets/sp-icon.png" />
        <span>类别一</span>
      </div>
      <div class="more-class">
        更多 >
      </div> -->
    </div>
    <div class="video-cont">
      <ul>
        <li v-for="item in newVideoData" >
          <img :src="item.imgage" />
          <!-- <span>{{item.v_title}}</span> -->
          <span>世界电影世界电影世界世界世界</span>
          <i>{{item.v_addtime}}</i>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>
<script>
import axios from "axios";
import * as api from "../../api/home.js";
import apis from "../../api/apis.js";
export default {
  props: {
    // videoData: {
    //   type: [String, Array,Object],
    //   default: []
    // },
    row: {
      type: [String, Array,Object,Number],
      default: 6
    },
    mclass: {
      type: [String, Array,Object,Number],
      default: ''
    },
    sclass: {
      type: [String, Array,Object,Number],
      default: ''
    }
  },
  data() {
    return {
      videoData:[],
      newVideoData:[]
    };
  },
  mounted() {
    this.videoList();
  },
  methods: {
    videoList() {
      let params = {
        mclass: this.mclass, // 频道
        sclass: this.sclass, // 每个频道下的小类
        num: 1
      };
      api.homeApi
        .videoList(params)
        .then(res => {
          if (res.code == 0) {
            this.videoData = res.data;
            this.newVideoData = this.videoData.splice(0,this.row)
            console.log(this.newVideoData,'this.videoData')  
          }
        })
        .catch(error => {});
    },
  }
};
</script>
<style lang="less" scoped>
.class-title {
  border-bottom: 1px solid #cccccc;
  height: 48px;
  line-height: 48px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  .class-name {
    height: 48px;
    margin-left: 7px;
    img {
      width: 18px;
      height: 18px;
      margin-right:5px;
    }
    span {
      font-size: 20px;
      color: #ff9900;
    }
  }
  .more-class {
    color: #ff9900;
    font-size: 18px;
    margin-right: 7px;
  }
}
.video-cont{
  margin-top:20px;
  font-size:14px;
  color:#ff9900;
  ul{
    li{
      margin-bottom: 15px;
    }
  }
  span:hover{
    color:#ff9900;
    cursor: pointer;
  }
}
</style>


