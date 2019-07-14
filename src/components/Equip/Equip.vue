<!--武器列表-->
<template>
  <div>
    <!-- 搜索框 -->
    <el-autocomplete
      v-model="val"
      :fetch-suggestions="querySearch"
      :trigger-on-focus="false"
      @select="selectItem"
      clearable
      placeholder="请输入装备名称"
    ></el-autocomplete>
    <div class="container">
      <!-- 单选框组 -->
      <el-radio-group v-model="radio" @change="radioChange">
        <el-radio label="all">全部</el-radio>
        <el-radio :label="1">攻击</el-radio>
        <el-radio :label="2">法术</el-radio>
        <el-radio :label="3">防御</el-radio>
        <el-radio :label="4">移动</el-radio>
        <el-radio :label="5">打野</el-radio>
        <el-radio :label="7">辅助</el-radio>
      </el-radio-group>
      <!-- 武器列表 -->
      <el-row class="card">
        <el-col
          v-for="item of filterData"
          :key="item.item_id"
          :xs="24"
          :sm="8"
          :md="8"
          :lg="6"
          :xl="6"
        >
          <el-card :ref="item.item_name">
            <template slot="header">
              <span>{{item.item_name}}</span>
              <i class="el-icon-star-off" @click="collect" :isCollect="0" :index="item.item_id"></i>
            </template>
            <div class="info">
              <i class="el-icon-loading" v-show="loading"></i>
              <img :src="item.imgUrl" width="30%" height="30%" @load="loading=false" />
              <div class="desc">
                <p>售价：{{item.price}}</p>
                <p>总价：{{item.total_price}}</p>
                <p v-html="item.des1"></p>
              </div>
            </div>
            <el-dropdown trigger="click" class="el-dropdown-link">
              <span>
                查看主动 / 被动技能
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-if="item.des2">
                  <p v-html="item.des2"></p>
                </el-dropdown-item>
                <el-dropdown-item v-else>无更多技能</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!-- 顶部回滚 -->
    <back-top :visibility-height="100" :back-position="0" transition-name="fade" />
  </div>
</template>

<script>
import BackTop from "base/BackTop";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Equip",
  data() {
    return {
      val: "", //搜索框变量
      radio: "", //单选框变量
      data: [], //数据
      filterData: [], //单选框筛选后的数据
      queryData: [], //搜索框查询数据
      radioQueryData: [], //单选框筛选后,搜索框的查询数据
      loading: true, //图片加载占位
      currentItem: null //当前选中的武器
    };
  },
  created() {
    //获取数据
    this.$axios.get("/static/item.json").then(res => {
      if (!res.data) return;
      res.data.forEach(item => {
        item.imgUrl = `https://game.gtimg.cn/images/yxzj/img201606/itemimg/${item.item_id}.jpg`;
        this.queryData.push({ value: item.item_name });
        this.radioQueryData.push({ value: item.item_name });
      });
      this.data = res.data;
      this.filterData = res.data;
    });
  },
  mounted() {
    //根据首页传递的参数，高亮对应武器
    setTimeout(() => {
      this.selectItem(this.$route.query.equip);
    }, 100);
  },
  computed: {
    ...mapState(["collectEquip"])
  },
  methods: {
    ...mapMutations(["handleCollectEquip"]),
    //收藏
    collect(e) {
      let isCollect = e.target.getAttribute("isCollect");
      let id = e.target.getAttribute("index");
      if (Number(isCollect) === 0) {
        //收藏
        let currentEquip = null;
        this.data.forEach(item => {
          if (Number(id) === item.item_id) {
            currentEquip = item;
            return;
          }
        });
        this.handleCollectEquip(currentEquip);
        e.target.setAttribute("isCollect", 1);
        e.target.className += " el-icon-star-on";
      } else {
        //取消收藏
        this.collectEquip.forEach((item, index) => {
          if (Number(id) === item.item_id) {
            this.collectEquip.splice(index, 1);
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
    //搜索结果高亮
    selectItem(item) {
      item = typeof item === "object" ? item.value : item;
      //排他
      if (this.currentItem) {
        this.currentItem.className = this.currentItem.className.replace(
          "currentItem",
          ""
        );
      }
      this.currentItem = this.$refs[item][0].$el;
      document.body.scrollTop = document.documentElement.scrollTop = this.currentItem.offsetTop;
      this.currentItem.className += " currentItem";
    },
    //单选框筛选
    radioChange() {
      if (this.radio === "all") {
        //筛选全部
        this.filterData = this.data;
        //筛选全部后，同步搜索框查询数据
        this.radioQueryData = this.queryData;
        return;
      }

      this.filterData = this.data.filter(item => {
        //筛选类别
        return item.item_type === this.radio;
      });
      this.radioQueryData = [];
      this.filterData.forEach(item => {
        //筛选类别后，同步搜索框查询数据
        this.radioQueryData.push({ value: item.item_name });
      });
    }
  },
  components: { BackTop }
};
</script>

<style lang="stylus" scoped>
.el-autocomplete
  width: 100%
  padding: 0 10px
  position: fixed
  z-index: 998
.container
  padding: 10px
  padding-top: 40px
  .el-radio-group
    margin-top: 15px
    display: flex
    justify-content: space-between
    .el-radio
      margin: 0
      & >>> .el-radio__label
        padding-left: 2px
  .card
    display: flex
    flex-wrap: wrap
    margin-top: 15px
    text-align: center
    .el-col
      padding: 2px
    .el-card
      width: 100%
      &.currentItem
        border: 2px solid #ffa500
        box-shadow: 0 0 6px #FF6666
      & >>> .el-card__header
        height: 40px
        display: flex
        justify-content: space-between
        align-items: center
        i
          cursor: pointer
          font-size: 1.2em
        .el-icon-star-on
          color: #ff4136
      .info
        display: flex
        align-items: center
        .el-icon-loading
          color: #409EFF
          font-size: 2em
        .desc
          margin-left: 2em
          p
            line-height: 1.6em
    .el-dropdown-link
      margin-top: 1.5em
      cursor: pointer
      color: #409EFF
@media (min-width: 768px)
  .container >>> .el-radio-group
    padding: 0 20px
  .container >>> .el-radio__label
    padding-left: 5px !important
@media (min-width: 900px)
  .el-autocomplete
    width: 75%
</style>