<template>
  <div class="">
    <div id="header-app" class="header-app">
      <h4>www.12345.com</h4>
      <ul class="com-nav">
        <li v-for="(item,index) in navList" :key="item.name" @click="handleAction(item,index)" :class="{'activation-nav' : index == actionIndex}">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
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
    handleAction(item, index) {
      this.actionIndex = index;
    }
  }
};
</script>
<style lang="less" scoped>
.header-app {
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    font-size: 24px;
    color: #ff9900;
    flex: 0 0 auto;
    height: 60px;
    margin-right: 15px;
  }
}
.com-nav {
  display: flex;
  background: #313131;
  height: 60px;
  line-height: 60px;
  flex: auto;
  li {
    color: #fff;
    flex: auto;
    cursor: pointer;
    text-align: center;
    font-size: 18px;
  }
  .activation-nav {
    background: #ff9900;
    color: #222222;
  }
}
</style>


