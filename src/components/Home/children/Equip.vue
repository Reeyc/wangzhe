<template>
  <div class="equip">
    <div class="title">
      <h4>装备信息</h4>
      <router-link to="/equip/all">
        <p>全部装备 ></p>
      </router-link>
    </div>
    <!-- 这里写了4件固定装备，由于有些装备信息过于简单，就不弄随机展示了，避免随机出现 “铁剑”、“拳套” 之类简单的装备 -->
    <ul class="main">
      <li class="equip-item" @click="go('辉月')">
        <span>辉月</span>
      </li>
      <li class="equip-item" @click="go('时之预言')">
        <span>时之预言</span>
      </li>
      <li class="equip-item" @click="go('末世')">
        <span>末世</span>
      </li>
      <li class="equip-item" @click="go('纯净苍穹')">
        <span>纯净苍穹</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    go(val) {
      this.$router.push(`/equip/${encodeURIComponent(val)}`);
    }
  }
};
</script>

<style lang="stylus" scoped>
.equip
  margin-top: 30px
  padding: 0 10px
  .title
    line-height: 20px
    padding: 0 6px
    display: flex
    justify-content: space-between
    h4
      font-weight: bold
    p
      color: #333
      cursor: pointer
.main
  .equip-item
    height: 60px
    line-height: 60px
    text-align: center
    margin: 10px 0
    border-radius: 4px
    box-shadow: 0 2px 10px 0 #0074d9
    color: #fff
    font-size: 1.4em
    cursor: pointer
    //网上找不到好的尺寸图片资源，用些背景颜色代替好了
    &:nth-child(1)
      background-color: #3d9970
    &:nth-child(2)
      background-color: #0074d9
    &:nth-child(3)
      background-color: #d3291f
    &:nth-child(4)
      background-color: #85144b
</style>

