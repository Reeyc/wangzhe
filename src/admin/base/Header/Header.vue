<template>
  <div class="header-container">
    <!-- 顶部 -->
    <el-row class="header">
      <!-- 展开折叠 -->
      <el-col class="iconfont">
        <div @click="toggleMenu">&#xe611;</div>
      </el-col>
      <!-- 面包屑 (填满父宽度) -->
      <el-col class="crumbs">{{crumbs}}</el-col>
      <!-- 头像信息 -->
      <el-col class="avatar">
        <img src="../../../assets/images/logo.jpg" />
      </el-col>
    </el-row>
    <!-- 标签 -->
    <div class="tag">
      <el-tag closable>首页</el-tag>
      <el-tag closable>添加英雄</el-tag>
      <el-tag closable>添加装备</el-tag>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isCollapse: false,
      crumbs: "首页"
    };
  },
  methods: {
    toggleMenu() {
      this.isCollapse = !this.isCollapse;
      this.$bus.$emit("collapseMenu", this.isCollapse);
    }
  },
  watch: {
    $route(to) {
      setTimeout(() => {
        this.crumbs = to.name;
      }, 0);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/style/mixins.styl'
.header-container
  padding: 10px
  .header
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 10px
    .iconfont
      width: 24px
      font-size: 24px
      color: rgb(84, 92, 100)
      cursor: pointer
    .crumbs
      flex: 1
      padding: 0 20px
      ellipsis()
    .avatar
      width: 44px
      cursor: pointer
      img
        width: 100%
        border-radius: 50%
  .tag
    background-color: #f8f8f8
    padding: 5px 0
    &>*
      margin: 3px
</style>


