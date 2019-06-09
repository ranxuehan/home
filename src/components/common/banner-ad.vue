<template>
    <div class="banner">
      <img :src="image.a_pic" :style="{width: width + 'px',height: height + 'px'}" />
      <slot name="close"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: [String, Array,Object,Number],
      default: 0
    },
    height: {
      type: [String, Number],
      default: ""
    },
    width:{
      type: [String, Number],
      default: "1200px"
    }
  },
  computed: {
    style() {
      return this.height ? {
        height: this.height
      } : {};
    }
  },
  data() {
    return {
    };
  },
  mounted() {
    
  },
  methods: {
    
  }
};
</script>
<style lang="less" scoped>
.banner{
  position:relative;
  .close{
    width:28px;
    height: 28px;
    position: absolute;
    right: 0;
    margin:5px;
    top:0;
  }
}
</style>


