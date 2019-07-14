<!--公共头部-->
<template>
  <el-row type="flex" justify="space-between" align="middle" class="header">
    <el-link href="/" :underline="false">
      <div class="logo">
        <img src="../assets/images/logo.jpg" />
        <h1 class="title">王者荣耀资料站</h1>
      </div>
    </el-link>
    <div class="avatar">我</div>
  </el-row>
</template>

<style lang="stylus" scoped>
.header
  width: 100%
  height: 50px
  padding: 10px
  position: fixed
  top: 0
  z-index: 999
  background-color: #fff
  .logo
    float: left
    display: inline-flex
    align-items: center
    cursor: pointer
    & img
      width: 44px
      height: 44px
      border-radius: 50%
    & .title
      font-weight: bold
      margin-left: 5px
      // 文字色渐变
      background-image: linear-gradient(160deg, #7fdbff, #0074d9)
      -webkit-background-clip: text
      -webkit-text-fill-color: transparent
  .avatar
    float: right
    width: 40px
    height: 40px
    line-height: 40px
    text-align: center
    color: #fff
    background-color: #00a8e5
    border-radius: 50%
    cursor: pointer
@media (min-width: 900px)
  .header
    width: 75%
    .logo .title
      font-size: 1.2em
</style>
