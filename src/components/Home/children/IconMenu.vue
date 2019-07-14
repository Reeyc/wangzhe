<!--首页图标菜单-->
<template>
  <ul class="icon-container">
    <li class="icon-item">
      <div class="icon" @click.prevent.stop="go(3)">
        <i class="iconfont">&#xe63e;</i>
      </div>
      <p>坦克</p>
    </li>
    <li class="icon-item">
      <div class="icon" @click.prevent.stop="go(1)">
        <i class="iconfont">&#xe60a;</i>
      </div>
      <p>战士</p>
    </li>
    <li class="icon-item">
      <div class="icon" @click.prevent.stop="go(4)">
        <i class="iconfont">&#xe656;</i>
      </div>
      <p>刺客</p>
    </li>
    <li class="icon-item">
      <div class="icon" @click.prevent.stop="go(5)">
        <i class="iconfont">&#xe62a;</i>
      </div>
      <p>射手</p>
    </li>
    <li class="icon-item">
      <div class="icon" @click.prevent.stop="go(2)">
        <i class="iconfont">&#xe602;</i>
      </div>
      <p>法师</p>
    </li>
    <li class="icon-item">
      <div class="icon" @click.prevent.stop="go(6)">
        <i class="iconfont">&#xe682;</i>
      </div>
      <p>辅助</p>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    go(val) {
      this.$router.push({
        path: "/hero",
        query: {
          hero: val
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.icon-container
  display: flex
  flex-wrap: wrap
  padding: 10px
  .icon-item
    width: 25%
    margin-top: 4px
    text-align: center
  :nth-child(1) .icon
    background-color: #ff851b
  :nth-child(2) .icon
    background-color: #ff4136
  :nth-child(3) .icon
    background-color: #f012be
  :nth-child(4) .icon
    background-color: #3d9970
  :nth-child(5) .icon
    background-color: #0074d9
  :nth-child(6) .icon
    background-color: #7fdbff
  .icon
    display: inline-block
    width: 40px
    line-height: 40px
    margin: 6px 0
    border-radius: 50%
    color: #fff
    cursor: pointer
    i
      font-size: 20px
@media (min-width: 768px)
  .icon-container .icon
    width: 50px
    line-height: 50px
    margin: 10px 0
  .icon-container p
    font-size: 1.2em
</style>




