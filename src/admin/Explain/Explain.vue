<template>
  <div class="container">
    <p class="title">王者荣耀资料站</p>
    <p class="result">项目开发</p>
    <ul>
      <li>
        <p>技术栈：Vue全家桶 / Axios / Element-ui</p>
      </li>
      <li>
        <p>构建工具：Webpack / Vue-cli2.x脚手架</p>
      </li>
      <li>
        <p>使用插件：Echars图表 / Swiper轮播 / Iconfont图标 / FastClick</p>
      </li>
      <li>
        <p>
          项目管理：
          <a href="https://github.com/Reeyc/wangzhe">https://github.com/Reeyc/wangzhe</a>
        </p>
      </li>
      <li>
        <p>
          所有数据来自官网：
          <a
            href="https://pvp.qq.com/web201605/herolist.shtml"
          >https://pvp.qq.com/web201605/herolist.shtml</a>
        </p>
      </li>
    </ul>
    <p class="result">已完善功能</p>
    <ul>
      <li>
        <p>前端响应式</p>
        <el-switch v-model="finish.one" active-text="已完成"></el-switch>
      </li>
      <li>
        <p>武器列表页：筛选、搜索功能</p>
        <el-switch v-model="finish.two" active-text="已完成"></el-switch>
      </li>
      <li>
        <p>英雄列表页：筛选、搜索功能</p>
        <el-switch v-model="finish.three" active-text="已完成"></el-switch>
      </li>
      <li>
        <p>英雄详情页：数据的处理切换展示</p>
        <el-switch v-model="finish.four" active-text="已完成"></el-switch>
      </li>
      <li>
        <p>后台登录页</p>
        <el-switch v-model="finish.five" active-text="已完成"></el-switch>
      </li>
      <li>
        <p>后台管理界面：首页图表数据绘制、英雄/武器数据展示</p>
        <el-switch v-model="finish.six" active-text="已完成"></el-switch>
      </li>
    </ul>
    <p class="result">未完善功能</p>
    <ul>
      <li>
        <p>后台响应式</p>
        <el-switch v-model="unfinish.one" active-text="已完成"></el-switch>
      </li>
      <li>
        <p>后台登录功能 / 权限控制</p>
        <el-switch v-model="unfinish.two" active-text="已完成"></el-switch>
      </li>
      <li>
        <p>后台添加英雄 / 编辑英雄</p>
        <el-switch v-model="unfinish.three" active-text="已完成"></el-switch>
      </li>
      <li>
        <p>后台添加武器 / 编辑武器</p>
        <el-switch v-model="unfinish.four" active-text="已完成"></el-switch>
      </li>
      <li>
        <p>后台管理权限</p>
        <el-switch v-model="unfinish.five" active-text="已完成"></el-switch>
      </li>
      <li>
        <p>数据连接远程Server</p>
        <el-switch v-model="unfinish.six" active-text="已完成"></el-switch>
      </li>
      <li>
        <p>敬请期待...</p>
        <el-switch v-model="unfinish.seven" active-text="已完成"></el-switch>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      finish: {
        one: true,
        two: true,
        three: true,
        four: true,
        five: true,
        six: true
      },
      unfinish: {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.container
  padding: 20px 0 0 20px
  .title
    font-size: 30px
  .result
    width: 300px
    font-size: 20px
    padding: 10px 0 10px 15px
    margin-top: 20px
    border-left: 10px solid #409EFF
    border-radius: 4px
    background-color: #f5f5f5
  li
    margin: 10px 0
    p
      display: inline-block
      margin-right: 10px
</style>
