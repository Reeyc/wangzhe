<template>
  <el-col :md="18" :lg="18" :xl="18" id="app">
    <!-- 公共头部 -->
    <Header></Header>
    <!-- 本来想用element-ui的scrollbar滚动条组件，但是在移动端体验很卡，无奈放弃滚动条，保留固定滚动效果 -->
    <div style="margin-top:50px;">
      <router-view />
    </div>
    <!-- 公共底部 -->
    <copyright></copyright>
  </el-col>
</template>

<script>
import Header from "base/Header";
import Copyright from "base/Copyright";
export default {
  name: "App",
  components: { Header, Copyright }
};
</script>

<style lang="stylus">
html, body
  // 网页条纹背景
  background-image: linear-gradient(90deg, #dfdfdf 2px, transparent 0), linear-gradient(#dfdfdf 2px, transparent 0), linear-gradient(90deg, #dfdfdf 1px, transparent 0), linear-gradient(#dfdfdf 1px, transparent 0)
  background-size: 100px 100px, 100px 100px, 40px 40px, 40px 40px
  background-color: #f3f3f3
#app
  margin: 0 auto
  float: none
  background-color: #fff
</style>