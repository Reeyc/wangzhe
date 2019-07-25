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
    <!-- 英雄列表 -->
    <el-row class="hero-container">
      <el-col v-for="item of filterData" :key="item.ename" :xs="6" :sm="3" class="hero-item">
        <i
          class="el-icon-star-off collect"
          @click.prevent.stop="collect"
          :isCollect="0"
          :index="item.ename"
          :name="item.cname"
        ></i>
        <i class="el-icon-loading" v-show="loading"></i>
        <img :src="item.imgUrl" class="avatar" @load="loading=false" @click="heroDetail(item)" />
        <p class="name">{{item.cname}}</p>
      </el-col>
    </el-row>
    <back-top :visibility-height="100" :back-position="0" transition-name="fade" />
  </div>
</template>

<script>
import BackTop from "base/BackTop";
import getHeroList from "api/getHeroList";
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
    this.heroList(); //获取数据
  },
  mounted() {
    setTimeout(() => {
      //当前页面刷新，从url取得的参数为string
      this.radio = Number(this.$route.params.category) || "all";
    }, 100);
  },
  computed: {
    ...mapState(["collectHero"])
  },
  methods: {
    ...mapMutations(["handleCollectHero"]),
    //获取数据
    heroList() {
      getHeroList().then(res => {
        if (!res) return;
        //搜索框数据
        this.queryData = this.radioQueryData = res.map(item => {
          return (item = {
            value: item.cname,
            ename: item.ename,
            skin_name: item.skin_name
          });
        });
        this.data = this.filterData = res;
      });
    },
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
    selectItem(val) {
      let skinName = encodeURIComponent(val.skin_name); //皮肤信息
      this.$router.push({
        name: "heroDetail",
        query: {
          hero: val.ename,
          skin: skinName
        }
      });
    },
    //英雄选中
    heroDetail(val) {
      let skinName = encodeURIComponent(val.skin_name); //皮肤信息
      this.$router.push({
        name: "heroDetail",
        query: {
          hero: val.ename,
          skin: skinName
        }
      });
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
  padding: 10px
  text-align: center
  overflow: hidden
  .hero-item
    float: left
    padding: 10px
    box-sizing: border-box
    text-align: center
    cursor: pointer
    position: relative
    .collect
      position: absolute
      right: 0
      top: 0
      font-size: 1.6em
      &.el-icon-star-on
        color: #ff4136
    .el-icon-loading
      color: $theme-color
      font-size: 2em
    .avatar
      border-radius: 10px
      width: 100%
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
      width: 10%
    .avatar
      width: 80px !important
      height: 80px !important
    .name
      line-height: 2em !important
</style>
