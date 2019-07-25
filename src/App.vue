<template>
  <el-row id="app">
    <!-- 前端view -->
    <el-col :md="18" :lg="18" :xl="18" class="front" v-if="!$route.meta.isAdmin">
      <Header></Header>
      <div style="margin-top:60px;">
        <router-view />
      </div>
      <copyright></copyright>
    </el-col>
    <!-- 后台view -->
    <el-col class="admin" v-if="$route.meta.isAdmin">
      <router-view />
    </el-col>
  </el-row>
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
  width: 100%
  height: 100%
#app
  height: 100%
.front
  margin: 0 auto
  float: none
  background-color: #fff
.admin
  height: 100%
</style>