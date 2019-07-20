<template>
  <div class="category">
    <div class="title">
      <h4>英雄分类</h4>
      <router-link to="/hero/all">
        <p>全部英雄 ></p>
      </router-link>
    </div>
    <ul class="main">
      <li class="category-item" @click="go(1)">战士</li>
      <li class="category-item" @click="go(2)">法师</li>
      <li class="category-item" @click="go(3)">坦克</li>
      <li class="category-item" @click="go(4)">刺客</li>
      <li class="category-item" @click="go(5)">射手</li>
      <li class="category-item" @click="go(6)">辅助</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    go(val) {
      this.$router.push(`/hero/${val}`);
    }
  }
};
</script>

<style lang="stylus" scoped>
.category
  margin-top: 30px
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
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    margin-top: 5px
    background-image: url('../../../assets/images/timg.jpg')
    background-size: cover
    .category-item
      width: 33.33333%
      line-height: 100px
      border: 1px solid #fff
      box-sizing: border-box
      font-size: 1.2em
      color: #fff
      text-align: center
      cursor: pointer
      &:nth-child(1)
        width: 50%
        margin: 0
        background-color: rgba(220, 129, 55, 0.7)
      &:nth-child(2)
        width: 50%
        margin: 0
        background-color: rgba(38, 191, 142, 0.7)
      &:nth-child(3)
        background-color: rgba(72, 137, 199, 0.7)
      &:nth-child(4)
        background-color: rgba(220, 129, 55, 0.7)
      &:nth-child(5)
        background-color: rgba(38, 191, 142, 0.7)
      &:last-child
        width: 100%
        background-color: rgba(72, 137, 199, 0.7)
</style>
