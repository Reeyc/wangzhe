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
              <i
                class="el-icon-star-off"
                @click="collect"
                :isCollect="0"
                :name="item.item_name"
                :index="item.item_id"
              ></i>
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
import getEquip from "api/getEquip";
import { mapState, mapMutations } from "vuex";
import { tabs, getType } from "styles/js/dom";
export default {
  name: "Equip",
  data() {
    return {
      data: [], //数据
      val: "", //搜索框变量
      radio: "", //单选框变量
      filterData: [], //单选框筛选后的数据
      queryData: [], //搜索框查询数据
      radioQueryData: [], //单选框筛选后,搜索框的查询数据
      loading: true, //图片加载占位
      currentItem: null //当前选中的武器
    };
  },
  created() {
    this.equip(); //获取数据
  },
  mounted() {
    //获取路由参数
    setTimeout(() => {
      this.selectItem(this.$route.params.equip);
    }, 100);
  },
  computed: {
    ...mapState(["collectEquip"])
  },
  methods: {
    ...mapMutations(["handleCollectEquip"]),
    //获取数据
    equip() {
      getEquip().then(res => {
        if (!res || !getType(res, "Array")) return;
        res.forEach(item => {
          this.queryData.push({ value: item.item_name });
          this.radioQueryData.push({ value: item.item_name });
        });
        this.data = this.filterData = res;
      });
    },
    //收藏（vuex）
    collect(e) {
      let isCollect = e.target.getAttribute("isCollect");
      let id = e.target.getAttribute("index");
      //收藏
      if (Number(isCollect) === 0) {
        let currentEquip = null;
        this.data.forEach(item => {
          if (Number(id) === item.item_id) {
            this.handleCollectEquip(item); //添加至vuex.stete
            e.target.setAttribute("isCollect", 1);
            return;
          }
        });
        e.target.className += " el-icon-star-on";
        this.$message({
          message: `将【${e.target.getAttribute("name")}】添加至收藏夹`,
          duration: 1500,
          type: "success"
        });
        //取消收藏
      } else {
        this.collectEquip.forEach((item, index) => {
          if (Number(id) === item.item_id) {
            this.collectEquip.splice(index, 1); //从vuex.state删除
            e.target.setAttribute("isCollect", 0);
            return;
          }
        });
        e.target.className = e.target.className.replace("el-icon-star-on", "");
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
      //搜索框传递的参数是对象、路由获取的参数是url字符串
      item = typeof item === "object" ? item.value : decodeURIComponent(item);
      this.currentItem = this.$refs[item][0].$el || null;
      //高亮
      tabs(this.currentItem, "currentItem");
      //位移
      this.currentItem &&
        (document.body.scrollTop = document.documentElement.scrollTop = this.currentItem.offsetTop);
    },
    //单选框筛选
    radioChange() {
      //筛选全部
      if (this.radio === "all" || !this.radio) {
        this.filterData = this.data;
        this.radioQueryData = this.queryData; //筛选全部后，同步搜索框查询数据
        return;
      }
      //筛选类别
      this.filterData = this.data.filter(item => {
        return item.item_type === this.radio;
      });
      this.radioQueryData = [];
      this.filterData.forEach(item => {
        this.radioQueryData.push({ value: item.item_name }); //筛选类别后，同步搜索框查询数据
      });
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
        text-align: center
        .el-icon-loading
          color: $theme-color
          font-size: 2em
        .desc
          margin-left: 2em
          p
            line-height: 1.6em
    .el-dropdown-link
      margin-top: 1.5em
      cursor: pointer
      color: $theme-color
@media (min-width: 768px)
  .container >>> .el-radio-group
    padding: 0 20px
  .container >>> .el-radio__label
    padding-left: 5px !important
@media (min-width: 900px)
  .el-autocomplete
    width: 75%
</style>