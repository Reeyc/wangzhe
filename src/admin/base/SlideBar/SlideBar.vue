<!--侧边栏-->
<template>
  <el-menu
    router
    :collapse="isCollapse"
    :default-active="$route.path"
    :unique-opened="true"
    background-color="#304156"
    text-color="#fff"
    active-text-color="rgb(64, 158, 255)"
    class="slide-menu el-menu-vertical-demo"
  >
    <!-- logo -->
    <el-menu-item class="logo" index="/">
      <img src="../../../assets/images/logo.jpg" />
      <span>后台管理</span>
    </el-menu-item>
    <!-- 首页 -->
    <el-menu-item index="/admin">
      <i class="iconfont">&#xe601;</i>
      <span>首页</span>
    </el-menu-item>
    <!-- 英雄 -->
    <el-submenu index="empty">
      <template slot="title">
        <i class="iconfont">&#xe616;</i>
        <span slot="title">英雄</span>
      </template>
      <el-menu-item index="/admin/all-hero">
        <i class="iconfont">&#xe617;</i>
        <span>所有英雄</span>
      </el-menu-item>
      <el-menu-item index="/admin/add-hero">
        <i class="iconfont">&#xe6ab;</i>
        <span>添加英雄</span>
      </el-menu-item>
    </el-submenu>
    <!-- 装备 -->
    <el-submenu index="empty2">
      <template slot="title">
        <i class="iconfont">&#xe672;</i>
        <span>装备</span>
      </template>
      <el-menu-item index="/admin/all-equip">
        <i class="iconfont">&#xe617;</i>
        <span>所有装备</span>
      </el-menu-item>
      <el-menu-item index="/admin/add-equip">
        <i class="iconfont">&#xe6ab;</i>
        <span>添加装备</span>
      </el-menu-item>
    </el-submenu>
    <!-- 管理员信息 -->
    <el-menu-item index="/admin/admintor">
      <i class="iconfont">&#xe600;</i>
      <span>管理员</span>
    </el-menu-item>
    <!-- 项目说明 -->
    <el-menu-item index="/admin/explain">
      <i class="iconfont">&#xe60f;</i>
      <span>说明</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  mounted() {
    this.$bus.$on("collapseMenu", collapse => (this.isCollapse = collapse));
  }
};
</script>

<style lang="stylus" scoped>
.slide-menu
  color: #fff
  border-right-width: 0
  touch-action: none
  .logo
    padding: 0 10px !important
    margin: 10px 0
    font-size: 20px
    img
      border-radius: 50%
      height: 80%
  .iconfont
    vertical-align: baseline
    margin-right: 5px
// 展开时的宽度
.el-menu-vertical-demo:not(.el-menu--collapse)
  width: 260px
@media (max-width: 415px)
  .logo
    width: 200px
  .el-menu-vertical-demo.el-menu--collapse
    width: 0
    display: none
</style>
