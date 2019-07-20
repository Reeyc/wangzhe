<!--首页图标菜单-->
<template>
  <ul class="icon-container">
    <li class="icon-item">
      <div class="icon" @click.prevent.stop="go(6)">
        <i class="iconfont">&#xe682;</i>
      </div>
      <p>辅助</p>
    </li>
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
        <i class="iconfont">&#xe6b2;</i>
      </div>
      <p>法师</p>
    </li>
    <li class="icon-item">
      <div class="icon" @click.prevent.stop="go('all')">
        <i class="iconfont">&#xe610;</i>
      </div>
      <p>全部英雄</p>
    </li>
    <li class="icon-item">
      <div class="icon" @click.prevent.stop="empty">
        <i class="iconfont">&#xe637;</i>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    go(val) {
      this.$router.push(`/hero/${val}`);
    },
    empty() {
      this.$alert(`敬请期待...`, `暂无更多`, {
        type: "info",
        customClass: "my-alert"
      })
        .then()
        .catch();
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
    height: 25%
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
  :nth-child(7) .icon
    background-color: #85144b
  :nth-child(8) .icon
    background-color: #aaa
  .icon
    display: inline-block
    width: 70%
    height: 0
    padding-bottom: 70% // 已知宽，不知高的情况下，求高：paddingBottom = width的100%
    margin: 6px 0
    border-radius: 18px
    color: #fff
    cursor: pointer
    position: relative
    i
      position: absolute
      left: 50%
      top: 50%
      transform: translate(-50%, -50%)
      font-size: 30px
@media (min-width: 768px)
  .icon-container .icon
    width: 40%
    padding-bottom: 40%
    margin: 10px 0
  .icon-container p
    font-size: 1.2em
@media (min-width: 900px)
  .icon-container .icon
    width: 25%
    padding-bottom: 25%
</style>
<style lang="stylus">
// 没有作用域的style
@media only screen and (min-device-width: 320px) and (max-device-width: 736px)
  .my-alert
    width: 300px !important
</style>





