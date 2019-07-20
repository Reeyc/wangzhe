<!--首页轮播图-->
<template>
  <swiper :options="options" class="slide">
    <swiper-slide>
      <img src="../../../assets/images/2.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="../../../assets/images/1.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="../../../assets/images/3.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="../../../assets/images/4.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="../../../assets/images/5.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="../../../assets/images/6.jpg" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  data() {
    return {
      options: {
        pagination: ".swiper-pagination", //页码圆点类名
        autoplay: 3000, //播放且每页停留3秒
        autoplayDisableOnInteraction: false, //触摸后不停止
        speed: 500, //播放速度
        loop: true, //循环播放
        observer: true, //修改swiper子元素时自动初始化swiper
        observeParents: true //修改swiper父元素时自动初始化swiper
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.slide
  height: 160px
.slide >>> .swiper-slide img
  width: 100%
  height: 100%
.slide >>> .swiper-pagination-bullet-active
  width: 12px
  height: 12px
  background: #fff
@media (min-width: 768px)
  .slide
    height: 250px
@media (min-width: 900px)
  .slide
    height: 350px
</style>