<!--英雄列表-->
<template>
  <div>
    <!-- 搜索框 -->
    <el-autocomplete
      v-model="val"
      :fetch-suggestions="querySearch"
      :trigger-on-focus="false"
      @select="selectItem"
      clearable
      placeholder="请输入英雄名称"
    ></el-autocomplete>
    <!-- 单选框 -->
    <div class="container">
      <el-radio-group v-model="radio" @change="radioChange">
        <el-radio label="all">全部</el-radio>
        <el-radio :label="1">战士</el-radio>
        <el-radio :label="2">法师</el-radio>
        <el-radio :label="3">坦克</el-radio>
        <el-radio :label="4">刺客</el-radio>
        <el-radio :label="5">射手</el-radio>
        <el-radio :label="6">辅助</el-radio>
      </el-radio-group>
    </div>
    <ul class="hero-container">
      <li v-for="item of filterData" :key="item.ename" class="hero-item" @click="heroDetail">
        <i
          class="el-icon-star-off collect"
          @click.prevent.stop="collect"
          :isCollect="0"
          :index="item.ename"
          :name="item.cname"
        ></i>
        <i class="el-icon-loading" v-show="loading"></i>
        <img :src="item.imgUrl" class="avatar" @load="loading=false" />
        <p class="name">{{item.cname}}</p>
      </li>
    </ul>
    <back-top :visibility-height="100" :back-position="0" transition-name="fade" />
  </div>
</template>

<script>
import BackTop from "base/BackTop";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      val: "",
      radio: "",
      data: [],
      filterData: [],
      queryData: [],
      radioQueryData: [],
      loading: true
    };
  },
  created() {
    //获取数据
    this.$axios.get("/static/herolist.json").then(res => {
      if (!res.data) return;
      res.data.forEach(item => {
        item.imgUrl = `https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${item.ename}.jpg`;
        this.queryData.push({ value: item.cname });
        this.radioQueryData.push({ value: item.cname });
      });
      this.data = res.data;
      this.filterData = res.data;
    });
  },
  mounted() {
    setTimeout(() => {
      this.radio = this.$route.query.hero;
    }, 50);
  },
  computed: {
    ...mapState(["collectHero"])
  },
  methods: {
    ...mapMutations(["handleCollectHero"]),
    //收藏英雄
    collect(e) {
      let isCollect = e.target.getAttribute("isCollect");
      let id = e.target.getAttribute("index");
      if (Number(isCollect) === 0) {
        //收藏
        let currentHero = null;
        this.data.forEach(item => {
          if (Number(id) === item.ename) {
            currentHero = item;
            return;
          }
        });
        this.handleCollectHero(currentHero);
        e.target.setAttribute("isCollect", 1);
        e.target.className += " el-icon-star-on";
        this.$message({
          message: `将【${e.target.getAttribute("name")}】添加至收藏夹`,
          duration: 1500,
          type: "success"
        });
      } else {
        //取消收藏
        this.collectHero.forEach((item, index) => {
          if (Number(id) === item.ename) {
            this.collectHero.splice(index, 1);
          }
          e.target.setAttribute("isCollect", 0);
          e.target.className = e.target.className.replace(
            "el-icon-star-on",
            ""
          );
        });
      }
    },
    //搜索框过滤
    querySearch(queryString, cb) {
      let results = null;
      if (queryString) {
        results = this.radioQueryData.filter(e => {
          return e.value.toLowerCase().indexOf(queryString.toLowerCase()) > -1;
        });
      } else {
        results = this.radioQueryData;
      }
      cb(results);
    },
    //搜索框选中
    selectItem(item) {
      console.log(`选中${item}了`);
    },
    //英雄选中
    heroDetail() {
      console.log(`前往英雄详情页`);
    },
    //单选框筛选
    radioChange() {
      //全选
      if (this.radio === "all" || !this.radio) {
        this.filterData = this.data;
        this.radioQueryData = this.queryData;
        return;
      }
      //筛选
      this.filterData = this.data.filter(item => {
        return item.hero_type === this.radio;
      });
      this.radioQueryData = [];
      this.filterData.forEach(item => {
        this.radioQueryData.push({ value: item.cname });
      });
    }
  },
  watch: {
    radio() {
      this.radioChange();
    }
  },
  components: { BackTop }
};
</script>

<style lang="stylus" scoped>
@import '~styles/style/mixins.styl'
@import '~styles/style/varible.styl'
.el-autocomplete
  autocomplete()
.container
  padding: 10px
  padding-top: 40px
  .el-radio-group
    radio-group()
    .el-radio
      margin: 0
      & >>> .el-radio__label
        padding-left: 2px
.hero-container
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  padding: 10px
  text-align: center
  .hero-item
    margin: 5px
    text-align: center
    cursor: pointer
    position: relative
    .collect
      position: absolute
      right: -8px
      top: -8px
      font-size: 1.6em
      &.el-icon-star-on
        color: #ff4136
    .el-icon-loading
      color: $theme-color
      font-size: 2em
    .avatar
      border-radius: 10px
      width: 65px
      height: 65px
    .name
      line-height: 1.5em
@media (min-width: 768px)
  .container >>> .el-radio-group
    padding: 0 20px
  .container >>> .el-radio__label
    padding-left: 5px !important
@media (min-width: 900px)
  .el-autocomplete
    width: 75%
  .hero-container
    .hero-item
      margin: 10px !important
    .avatar
      width: 80px !important
      height: 80px !important
    .name
      line-height: 2em !important
</style>
