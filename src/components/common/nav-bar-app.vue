<template>
  <div id="header" class="header">
    <h4>www.12345.com</h4>
    <div class="scroll">
      <ul>
        <scrolls :scrollBounce="false" :sdata="navList">
          <li v-for="(item,index) in navList" :key="item.name" @click="tab(index,item)" :class="{libg:addStyleIndex==index}">{{item.name}}</li>
        </scrolls>
      </ul>
    </div>
  </div>
</template>
<script>
import Scrolls from "../common/scroll/index.vue";
export default {
  props: {},
  components: {
    Scrolls
  },
  data() {
    return {
      addStyleIndex: false,
      actionIndex: 0,
      navList: [
        {
          name: "首页"
        },
        {
          name: "其他频道1"
        },
        {
          name: "其他频道2"
        },
        {
          name: "其他频道3"
        },
        {
          name: "其他频道4"
        },
        {
          name: "其他频道5"
        },
        {
          name: "其他频道6"
        },
        {
          name: "其他频道7"
        },
        {
          name: "其他频道8"
        },
        {
          name: "其他频道9"
        },
        {
          name: "其他频道10"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    //切换
    tab(index, item) {
      console.log(index, 324);
      this.addStyleIndex = index;
      // this.$refs.scrollMin.scrollTop=0
    }
  }
};
</script>
<style lang="less">
@import url("../common/scroll/scroll.less");
.header {
  height: 1.6rem;
  width: 100%;
  background: #140a0a;
  position: fixed;
  top: 0;
  z-index: 99;
  overflow: hidden;
  h4 {
    width: 100%;
    font-size: 0.26rem;
    color: #ff9900;
    line-height: 0.72rem;
    height: 0.72rem;
    text-align: center;
    margin: 0;
    border-bottom: 0.01rem solid #313131;
  }
}
.scroll {
  width: 100%;
  height: 0.9rem;
  z-index: 100;
  margin: 0 0.1rem 0 0.1rem;
  ul {
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    background: #140a0a;
    li {
      float: left;
      padding: 0 0.3rem;
      text-align: center;
      color: #cccccc;
      font-size: 0.26rem;
    }
    .libg {
      font-size: 0.3rem;
      color: #ff9900;
      border-bottom: 0.06rem solid #ff9900;
    }
  }
}
</style>


