<template>
  <el-row>
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
      <chart :options="orgOptions" :auto-resize="true"></chart>
    </el-col>
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
      <chart :options="orgOptions2" :auto-resize="true"></chart>
    </el-col>
  </el-row>
</template>

<script>
import getHeroList from "api/getHeroList";
import getEquip from "api/getEquip";
import { formatHero, formatEquip } from "styles/js/format";
export default {
  data() {
    return {
      orgOptions: {},
      orgOptions2: {},
      hero: [],
      equip: []
    };
  },
  created() {
    this.heroList();
    this.equipList();
  },
  methods: {
    //获取英雄数据并绘制图表
    heroList() {
      getHeroList().then(res => {
        this.hero = formatHero(res);
        this.heroOptions();
      });
    },
    //获取武器数据并绘制图表
    equipList() {
      getEquip().then(res => {
        this.equip = formatEquip(res);
        this.equipOptions();
      });
    },
    //英雄职业分布（饼状图）
    heroOptions() {
      this.orgOptions = {
        //提示
        tooltip: { trigger: "item", formatter: "{a} <br/>{b} : {c} ({d}%)" },
        //标题
        title: {
          text: "职业分布",
          left: "center",
          textStyle: { fontWeight: "normal", lineHeight: 80 }
        },
        //数据
        series: [
          {
            name: "英雄职业分布",
            type: "pie",
            radius: "55%",
            data: this.hero
          }
        ]
      };
    },
    //武器分类（柱状图）
    equipOptions() {
      this.orgOptions2 = {
        //提示
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "shadow" }
        },
        //标题
        title: {
          text: "武器分类",
          left: "center",
          textStyle: { fontWeight: "normal", lineHeight: 30 }
        },
        //数据
        series: [
          {
            type: "bar",
            barWidth: "60%",
            data: this.equip //数据值
          }
        ],
        //x轴处理
        xAxis: {
          //文本值
          data: ["攻击", "法术", "防御", "移动", "打野", "辅助"],
          //文本样式
          axisLabel: { textStyle: { color: "#000" } },
          //不展示刻度
          axisTick: { show: false },
          //不展示轴线
          axisLine: { show: false }
        },
        //y轴处理（展示的文本值由柱值计算得出，不要自己设置，其余和x轴一样）
        yAxis: {
          axisLabel: { textStyle: { color: "#999" } },
          axisLine: { show: false },
          axisTick: { show: false }
        }
      };
    }
  }
};
</script>

<style lang="stylus" scoped>
.echarts
  width: 100%
</style>

