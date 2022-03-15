<template>
  <transition>
    <div class="backTop" @click="toTop" v-show="showIcon">
      <i class="el-icon-caret-top"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'GoTop',
  data () {
    return {
      showIcon: false
    }
  },
  methods: {
    toTop() {
      // 滚动条移到顶部，兼容不同浏览器
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      this.showIcon = false
    },
    needToTop() {
      const curHeight = document.body.scrollTop || document.documentElement.scrollTop

      if (curHeight > 400) {
        this.topShow = true
      } else {
        this.topShow = false
      }
    }
  },
  mounted() {
    // 等整个视图渲染完毕，监听scroll事件
    this.$nextTick(function() {
      window.addEventListener('scroll', this.needToTop)
    })
  }
}
</script>

<style scoped>
.backTop {
  background-color: #fff;
  position: fixed;
  right: 100px;
  bottom: 150px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  transition: .3s;
  box-shadow: 0 0 6px rgba(0, 0, 0, .12);
  z-index: 5;
  text-align: center;
}
</style>
