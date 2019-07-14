<template>
  <div class="equip">
    <div class="title">
      <h4>装备信息</h4>
      <router-link to="/equip">
        <p>全部装备 ></p>
      </router-link>
    </div>
    <ul class="main">
      <li class="equip-item" @click="go('辉月')">
        <div class="shade"></div>
        <span>辉月</span>
      </li>
      <li class="equip-item" @click="go('时之预言')">
        <div class="shade"></div>
        <span>时之预言</span>
      </li>
      <li class="equip-item" @click="go('末世')">
        <div class="shade"></div>
        <span>末世</span>
      </li>
      <li class="equip-item" @click="go('纯净苍穹')">
        <div class="shade"></div>
        <span>纯净苍穹</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    go(val) {
      this.$router.push({
        path: "/equip",
        query: {
          equip: val
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.equip
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
  .equip-item
    position: relative
    height: 60px
    margin: 10px 0
    border-radius: 4px
    box-shadow: 0 2px 10px 0 #0074d9
    background-color: #000
    span
      position: absolute
      left: 50%
      top: 50%
      transform: translate(-50%, -50%)
      font-size: 1.4em
      color: #fff
    .shade
      height: 100%
      opacity: 0.3
    &:nth-child(1) .shade
      background: url('../../../assets/images/9684d016dbc18541946ce8541b9ea889.jpeg') no-repeat
      background-position: 0 -100px
    &:nth-child(2) .shade
      background: url('../../../assets/images/u=2217509420,2433567456&fm=214&gp=0.jpg') no-repeat
      background-position: -420px -130px
    &:nth-child(3) .shade
      background: url('../../../assets/images/031355112064.jpg') no-repeat
      background-position: -140px -45px
    &:nth-child(4) .shade
      background: url('../../../assets/images/20181208200153_d41d8cd98f00b204e9800998ecf8427e_1.jpeg') no-repeat
      background-position: -180px -80px
@media (min-width: 768px)
  .main
    .equip-item
      &:nth-child(1) .shade
        background-size: cover
        background-position: 0 -130px
      &:nth-child(2) .shade
        background-position: -210px -130px
      &:nth-child(3) .shade
        background-size: cover
        background-position: 0 -70px
      &:nth-child(4) .shade
        background-size: cover
        background-position: -100px -110px
@media (min-width: 900px)
  .main
    .equip-item
      line-height: 80px
      &:nth-child(1) .shade
        background-size: cover
        background-position: 0 -210px
      &:nth-child(2) .shade
        background-position: 0 -130px
      &:nth-child(3) .shade
        background-size: cover
        background-position: 0 -130px
      &:nth-child(4) .shade
        background-size: cover
        background-position: 0 -180px
</style>
<!--图片太难找，全是上网乱找的规格不一的图片，还要处理各种设备的bg-position，冗余代码比较多-->

