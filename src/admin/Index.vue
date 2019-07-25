<!--后台模板页-->
<template>
  <el-row type="flex" class="container">
    <!-- 侧边栏 -->
    <slide-bar></slide-bar>
    <!-- 内容区 -->
    <el-col class="right">
      <Header></Header>
      <!-- 默认为首页 -->
      <div class="main">
        <transition name="el-zoom-in-center">
          <home v-if="$route.name==='admin'"></home>
          <router-view></router-view>
        </transition>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import SlideBar from "@/admin/base/SlideBar/SlideBar";
import Header from "@/admin/base/Header/Header";
import Home from "@/admin/Home/Home";
export default {
  components: { SlideBar, Header, Home }
};
</script>

<style lang="stylus" scoped>
.container
  background-color: #fff
  .right
    overflow: auto
    .main
      padding: 0 10px 10px
      background-color: #fff
@media (min-width: 415px)
  .container
    height: 100%
</style>