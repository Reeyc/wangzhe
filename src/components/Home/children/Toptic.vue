<template>
  <div class="toptic">
    <div class="title">
      <h4>专题推荐</h4>
      <p>更多专题 ></p>
    </div>
    <ul class="main">
      <li class="toptic-item">
        <p>李白</p>
      </li>
      <li class="toptic-item">
        <p>韩信</p>
      </li>
      <li class="toptic-item">
        <p>嫦娥</p>
      </li>
      <li class="toptic-item">
        <p>庄周</p>
      </li>
    </ul>
  </div>
</template>

<style lang="stylus" scoped>
.toptic
  margin-top: 10px
  .title
    line-height: 20px
    padding: 0 6px
    display: flex
    justify-content: space-between
    h4
      font-weight: bold
    p
      cursor: pointer
  .main
    display: flex
    flex-wrap: wrap
    .toptic-item
      width: calc(50% - 20px)
      height: 100px
      padding: 10px
      margin: 10px
      box-sizing: border-box
      border-radius: 6px
      color: #fff
      font-family: 'SimSun'
      font-weight: bold
      background: url('../../../assets/images/8e49326eeeec6bb9d5ae566cf3d1aa5c.jpeg')
      background-size: 100%
      box-shadow: 0 4px 16px 0 #0074d9
      cursor: pointer
      p
        float: right
      &:nth-child(2)
        background-image: url('../../../assets/images/9825bc315c6034a84bc1f16ec013495409237639.jpg')
        p
          float: none
      &:nth-child(3)
        background-image: url('../../../assets/images/7aacf2262cf4f04049368558ec2ab64e9009bbeb.jpg')
      &:nth-child(4)
        background-image: url('../../../assets/images/20170823121242_EvxMT.jpeg')
        p
          float: none
@media (min-width: 768px)
  .main .toptic-item
    background-size: cover
    p
      font-size: 1.4em
    &:nth-child(1)
      background-position: 0 -8px
    &:nth-child(2)
      background-position: 0 -35px
    &:nth-child(3)
      background-position: 0 -50px
    &:nth-child(4)
      background-position: 0 -65px  
</style>
