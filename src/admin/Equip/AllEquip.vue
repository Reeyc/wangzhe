<template>
  <div class="container">
    <!-- 批量删除 / 筛选 / 搜索 -->
    <div class="filter">
      <!-- 批量删除 -->
      <el-button type="danger" size="small" :disabled="!checkData.length">批量删除</el-button>
      <!-- 选择职业 -->
      <el-select
        v-model="selectVal"
        @change="selectChange"
        size="small"
        placeholder="请选择武器类别"
        class="select"
      >
        <el-option label="全部" value="all"></el-option>
        <el-option label="攻击" :value="1"></el-option>
        <el-option label="法术" :value="2"></el-option>
        <el-option label="防御" :value="3"></el-option>
        <el-option label="移动" :value="4"></el-option>
        <el-option label="打野" :value="5"></el-option>
        <el-option label="辅助" :value="7"></el-option>
      </el-select>
      <!-- 搜索 -->
      <el-autocomplete
        v-model="searchVal"
        :fetch-suggestions="querySearch"
        :trigger-on-focus="false"
        clearable
        @select="selectItem"
        size="small"
        placeholder="请输入名字"
      ></el-autocomplete>
    </div>
    <!-- 表格 -->
    <el-table :data="filterTableData" stripe highlight-current-row @selection-change="selectRow">
      <el-table-column type="selection"></el-table-column>
      <el-table-column type="index"></el-table-column>
      <el-table-column label="名字" prop="item_name"></el-table-column>
      <el-table-column label="ID" prop="item_id"></el-table-column>
      <el-table-column label="图片">
        <template slot-scope="scope">
          <i class="el-icon-loading" v-show="loading"></i>
          <img :src="scope.row.imgUrl" @load="loading=false" width="60" />
        </template>
      </el-table-column>
      <el-table-column label="类别">
        <template slot-scope="scope">
          <span>{{ type(scope.row.item_type) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button plain size="small" type="info" @click="awaitFor">编辑</el-button>
          <el-button plain size="small" type="danger" @click="awaitFor">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      layout="sizes, prev, pager, next, jumper"
      prev-text="上一页"
      next-text="下一页"
      background
      :total="paginations.total"
      :page-size="paginations.pageSize"
      :current-page="paginations.currentPage"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    ></el-pagination>
  </div>
</template>

<script>
import getEquipList from "api/getEquip";
export default {
  data() {
    return {
      loading: true, //图片加载
      selectVal: "", //选择器变量
      searchVal: "", //搜索框变量
      equipData: [], //所有武器数据
      filterData: [], //选择器筛选后的数据
      queryData: [], //搜索框搜索后数据
      seleQueryData: [], //选择器筛选后搜索框搜索数据
      checkData: [], //复选框选中的数据
      paginations: {
        total: 0, //总条数
        pageSize: 10, //当前页展示的条数
        currentPage: 1 //当前页
      }
    };
  },
  computed: {
    //分页与数据联动
    filterTableData() {
      //从首页到上一页的表单数据
      const oldTableData =
        (this.paginations.currentPage - 1) * this.paginations.pageSize;
      //从首页到当前页的表单数据
      const newTableData =
        this.paginations.currentPage * this.paginations.pageSize;
      //截取上一页到当前页的表单数据
      return this.filterData.slice(oldTableData, newTableData);
    }
  },
  methods: {
    //初始化数据
    getEquip() {
      getEquipList().then(res => {
        if (!res) return;
        this.queryData = this.seleQueryData = res.map(item => {
          return (item = { value: item.item_name });
        });
        this.equipData = this.filterData = res;
      });
    },
    //格式化类别
    type(category) {
      switch (category) {
        case 1:
          return "攻击";
        case 2:
          return "法术";
        case 3:
          return "防御";
        case 4:
          return "移动";
        case 5:
          return "打野";
        case 7:
          return "辅助";
      }
    },
    //搜索框搜索
    querySearch(queryString, cb) {
      let results = null;
      if (queryString) {
        results = this.seleQueryData.filter(e => {
          return e.value.toLowerCase().indexOf(queryString.toLowerCase()) > -1;
        });
      } else {
        results = this.seleQueryData;
      }
      cb(results);
    },
    //搜索框选中
    selectItem(val) {
      this.filterData = this.filterData.filter(item => {
        return item.item_name === val.value;
      });
      this.seleQueryData = [];
      this.filterData.forEach(item => {
        this.seleQueryData.push({ value: item.item_name }); //同步搜索框数据
      });
    },
    //选择器选中
    selectChange(newVal) {
      this.paginations.currentPage = 1; //筛选后跳到第一页
      //选中全部
      if (newVal === "all") {
        this.filterData = this.equipData;
        this.seleQueryData = this.queryData; //同步搜索框数据
        return;
      }
      //选中类别
      this.filterData = this.equipData.filter(item => {
        return item.item_type === newVal;
      });
      this.seleQueryData = [];
      this.filterData.forEach(item => {
        this.seleQueryData.push({ value: item.item_name }); //同步搜索框数据
      });
    },
    //复选框选中
    selectRow(rowArr) {
      this.checkData = rowArr;
    },
    //更新当前页数
    handleCurrentChange(val) {
      this.paginations.currentPage = val;
    },
    //更新每页的条数
    handleSizeChange(val) {
      this.paginations.pageSize = val;
    },
    awaitFor(){
      this.$alert(`敬请期待...`)
    }
  },
  watch: {
    //更新总条数
    filterData(val) {
      this.paginations.total = val.length;
    }
  },
  created() {
    this.getEquip();
  }
};
</script>

<style lang="stylus" scoped>
.container
  padding: 10px 20px
  .filter
    display: flex
    margin-bottom: 15px
    button
      margin-right: 10px
    .select
      margin-right: 10px
  .cell
    button
      margin: 0 !important
      margin-right: 5px !important
</style>

<!-- 修改element-ui组件内置样式，不能有scoped作用域 -->
<style lang="stylus">
.container .el-pagination
  padding: 30px 0
  overflow-x: auto
</style>

