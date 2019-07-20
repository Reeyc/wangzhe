<template>
  <div>
    <!-- 皮肤 -->
    <div class="skin">
      <i class="el-icon-loading" v-show="loading.bigSkin"></i>
      <img :src="currentSkin" class="big-skin" @load="loading.bigSkin=false" />
      <ul class="small-skin">
        <li v-for="item of skinList" :key="item.name">
          <img :src="item.smallImgUrl" ref="firstSkin" @click="toggleSkin($event,item)" />
        </li>
      </ul>
      <div class="hero-info">{{data.name}}</div>
    </div>
    <el-row type="flex" justify="space-between" class="container first">
      <!-- ##################### module1 技能介绍 ##################### -->
      <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16" class="item skill">
        <el-card>
          <template slot="header">
            <div class="header">
              <i class="iconfont">&#xe62e;</i>
              <h2>技能介绍</h2>
            </div>
          </template>
          <!-- 技能图片 -->
          <ul class="skill-img">
            <li v-for="item of data.skill" :key="item.id">
              <i class="el-icon-loading" v-show="loading.skillLoading"></i>
              <img
                :src="item.skillImg"
                ref="firstSkill"
                @click="toggleSkill($event,item)"
                @load="loading.skillLoading=false"
              />
            </li>
          </ul>
          <!-- 技能名称 -->
          <div class="skill-name">
            <h3>{{currentSkill.title}}</h3>
            <span>冷却值：{{formatColling}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>消耗：{{currentSkill.consume}}</span>
          </div>
          <!-- 技能描述 -->
          <div class="skill-desc">{{currentSkill.des}}</div>
          <div class="skill-tips">Tips：{{currentSkill.tips}}</div>
        </el-card>
      </el-col>
      <!-- ##################### module2 铭文搭配建议 ##################### -->
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="item ming">
        <el-card>
          <template slot="header">
            <div class="header">
              <i class="iconfont">&#xe631;</i>
              <h2>铭文搭配建议</h2>
            </div>
          </template>
          <ul class="ming-container">
            <li v-for="item of suggMing" :key="item.ming_name">
              <i class="el-icon-loading" v-show="loading.mingLoading"></i>
              <img :src="item.mingUrl" @load="loading.mingLoading=false" />
              <h4>{{item.ming_name}}</h4>
              <div v-html="item.ming_des"></div>
            </li>
          </ul>
          <div class="ming-tips" v-if="data">Tips：{{data.ming.tips}}</div>
        </el-card>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-between" class="container second">
      <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
        <!-- ##################### module3 技能加点建议 ##################### -->
        <el-col class="item summoner">
          <el-card>
            <template slot="header">
              <div class="header">
                <i class="iconfont">&#xe63f;</i>
                <h2>技能加点建议</h2>
              </div>
            </template>
            <el-row>
              <el-col :xs="24" :sm="7" :md="7" :lg="7" :xl="7" class="item">
                <div class="name">
                  <h3>主升</h3>
                  <p>{{suggSummoner.heroMain.title}}</p>
                </div>
                <div class="images">
                  <img :src="suggSummoner.heroMain.skillImg" />
                </div>
              </el-col>
              <el-col :xs="24" :sm="7" :md="7" :lg="7" :xl="7" class="item">
                <div class="name">
                  <h3>副升</h3>
                  <p>{{suggSummoner.heroVice.title}}</p>
                </div>
                <div class="images">
                  <img :src="suggSummoner.heroVice.skillImg" />
                </div>
              </el-col>
              <el-col :xs="24" :sm="10" :md="10" :lg="10" :xl="10" class="item last">
                <div class="name">
                  <h3>召唤师技能</h3>
                  <p>{{suggSummoner.formatSummoner}}</p>
                </div>
                <div class="images">
                  <img
                    v-for="item of suggSummoner.main"
                    :key="item.summoner_id"
                    :src="item.summonerUrl"
                  />
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <!-- ##################### module4 英雄关系 ##################### -->
        <el-col class="item restrain">
          <el-card>
            <template slot="header">
              <div class="header">
                <i class="iconfont">&#xe63d;</i>
                <h2>英雄关系</h2>
              </div>
            </template>
            <el-tabs :stretch="true" @tab-click="clickTab" v-if="data">
              <el-tab-pane label="最佳搭档" :val="data.restrain.best" class="restrain-item">
                <div class="restrain-hero">
                  <img
                    v-for="item of data.restrain.best"
                    :key="item.hero"
                    :src="item.imgUrl"
                    @click="toggleRestrain($event,item)"
                    ref="firstRestrain"
                  />
                </div>
                <div class="restrain-desc">{{currentRestrain}}</div>
              </el-tab-pane>
              <el-tab-pane label="压制英雄" :val="data.restrain.sup" class="restrain-item">
                <div class="restrain-hero">
                  <img
                    v-for="item of data.restrain.sup"
                    :key="item.hero"
                    :src="item.imgUrl"
                    @click="toggleRestrain($event,item)"
                  />
                </div>
                <div class="restrain-desc">{{currentRestrain}}</div>
              </el-tab-pane>
              <el-tab-pane label="被压制英雄" :val="data.restrain.be_sup" class="restrain-item">
                <div class="restrain-hero">
                  <img
                    v-for="item of data.restrain.be_sup"
                    :key="item.hero"
                    :src="item.imgUrl"
                    @click="toggleRestrain($event,item)"
                  />
                </div>
                <div class="restrain-desc">{{currentRestrain}}</div>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
      </el-col>
      <!-- ##################### module5 出装建议 ##################### -->
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="item equip">
        <el-card>
          <template slot="header">
            <div class="header">
              <i class="iconfont">&#xe639;</i>
              <h2>出装建议</h2>
            </div>
          </template>
          <el-tabs v-model="suggEquip.val" :stretch="true">
            <el-tab-pane label="推荐出装一" name="1">
              <ul class="equip-container">
                <li v-for="item of suggEquip.oneEquip" :key="item.ietn_id" class="equip-item">
                  <i class="el-icon-loading" v-show="loading.equipLoading.one"></i>
                  <img :src="item.imgUrl" @load="loading.equipLoading.one=false" />
                  <p>{{item.item_name}}</p>
                </li>
              </ul>
              <p v-if="data" class="equip-tips">Tips：{{data.equip[0].tips}}</p>
            </el-tab-pane>
            <el-tab-pane label="推荐出装二" name="2">
              <ul class="equip-container">
                <li v-for="item of suggEquip.twoEquip" :key="item.ietn_id" class="equip-item">
                  <i class="el-icon-loading" v-show="loading.equipLoading.two"></i>
                  <img :src="item.imgUrl" @load="loading.equipLoading.two=false" />
                  <p>{{item.item_name}}</p>
                </li>
              </ul>
              <p v-if="data" class="equip-tips">Tips：{{data.equip[1].tips}}</p>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
    <!-- 回滚顶部 -->
    <back-top :visibility-height="100" :back-position="0" transition-name="fade" />
  </div>
</template>

<script>
import BackTop from "base/BackTop";
import getSpread from "api/getSpread";
import { tabs, getType } from "styles/js/dom";
export default {
  data() {
    return {
      data: "", //当前英雄信息
      skinList: [], //当前英雄皮肤
      currentSkin: "", //tab皮肤切换
      currentSkill: "", //tab技能切换
      currentRestrain: "", //tab英雄克制切换
      formatColling: 0, //技能冷却格式化
      suggMing: [], //铭文搭配建议
      //图片加载占位
      loading: {
        bigSkin: true,
        skillLoading: true,
        mingLoading: true,
        equipLoading: {
          one: true,
          two: true
        }
      },
      //技能加点建议
      suggSummoner: {
        main: [],
        formatSummoner: "",
        heroMain: "",
        heroVice: ""
      },
      //出装建议
      suggEquip: {
        val: "1",
        oneEquip: [],
        twoEquip: []
      }
    };
  },
  created() {
    this.spread();
  },
  methods: {
    //获取数据（由于数据间的耦合度很高，可以使用并发请求来处理，避免数据加载的先后速度会影响其他数据）
    spread() {
      getSpread().then(res => {
        res.forEach((e, i) => {
          if (!e.data) return;
          switch (i) {
            case 0:
              this.heroDetail(e.data);
              break;
              return;
            case 1:
              this.ming(e.data);
              break;
              return;
            case 2:
              this.summoner(e.data);
              break;
              return;
            case 3:
              this.equip(e.data);
              break;
              return;
          }
        });
      });
    },
    //处理当前英雄数据
    heroDetail(res) {
      if (!res || !getType(res, "Array")) return;
      res.forEach(item => {
        if (item.id !== Number(this.$route.query.hero)) return;
        //########## 获取当前英雄皮肤图片 ############
        const skins = decodeURIComponent(this.$route.query.skin).split("|");
        skins.forEach((e, i) => {
          this.skinList.push({
            name: e,
            bigImgUrl: `http://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/${
              item.id
            }/${item.id}-bigskin-${i + 1}.jpg`,
            smallImgUrl: `http://game.gtimg.cn/images/yxzj/img201606/heroimg/${
              item.id
            }/${item.id}-smallskin-${i + 1}.jpg`
          });
        });
        //########## 获取当前英雄技能图片 ############
        item.skill.forEach((e, i) => {
          e.skillImg = `http://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.id}/${item.id}${i}0.png`;
        });
        //########## 获取英雄克制关系图片 ############
        const bigArr = [
          item.restrain.best,
          item.restrain.sup,
          item.restrain.be_sup
        ];
        bigArr.forEach(item => {
          item.forEach(e => {
            e.imgUrl = `http://game.gtimg.cn/images/yxzj/img201606/heroimg/${e.hero}/${e.hero}.jpg`;
          });
        });
        //初始化tab选项卡系列为第一项
        this.$nextTick(() => {
          //皮肤
          this.toggleSkin(this.$refs.firstSkin[0], this.skinList[0]);
          //技能
          this.toggleSkill(this.$refs.firstSkill[0], item.skill[0]);
          //英雄克制
          this.toggleRestrain(
            this.$refs.firstRestrain[0],
            item.restrain.best[0]
          );
        });
        this.data = item;
      });
    },
    //处理铭文信息
    ming(res) {
      if (!res || !this.data || !getType(res, "Array")) return;
      res.forEach(item => {
        this.data.ming.main.forEach(e => {
          if (e === Number(item.ming_id)) {
            item.mingUrl = `http://game.gtimg.cn/images/yxzj/img201606/mingwen/${Number(
              item.ming_id
            )}.png`;
            this.suggMing.push(item);
          }
        });
      });
    },
    //处理技能加点信息
    summoner(res) {
      if (!res || !getType(res, "Array")) return;
      res.forEach(item => {
        this.data.summoner.forEach(e => {
          if (e === Number(item.summoner_id)) {
            item.summonerUrl = `http://game.gtimg.cn/images/yxzj/img201606/summoner/${item.summoner_id}.jpg`;
            this.suggSummoner.main.push(item);
          }
        });
        //############ 获取召唤师技能 ################
        this.suggSummoner.formatSummoner = "";
        this.suggSummoner.main.forEach((e, i, r) => {
          if (i === r.length - 1) {
            this.suggSummoner.formatSummoner += e.summoner_name;
            return;
          }
          this.suggSummoner.formatSummoner += e.summoner_name + " / ";
        });
        //############ 获取英雄技能 ################
        this.data.skill.forEach(item => {
          for (let key in this.data.skill_up) {
            const val = this.data.skill_up[key];
            if (val === item.id) {
              if (key === "main") {
                this.suggSummoner.heroMain = item;
              } else if (key === "vice") {
                this.suggSummoner.heroVice = item;
              }
              return;
            }
          }
        });
      });
    },
    //处理推荐装备信息
    equip(res) {
      if (!res || !getType(res, "Array")) return;
      this.suggEquip.oneEquip = this.data.equip[0].main;
      this.suggEquip.twoEquip = this.data.equip[1].main;
      //############### 推荐一 ####################
      this.suggEquip.oneEquip.forEach((e, i, r) => {
        res.forEach(item => {
          if (e !== item.item_id) return;
          item.imgUrl = `https://game.gtimg.cn/images/yxzj/img201606/itemimg/${item.item_id}.jpg`;
          r.splice(i, 1, item);
        });
      });
      //############### 推荐二 ####################
      this.suggEquip.twoEquip.forEach((e, i, r) => {
        res.forEach(item => {
          if (e !== item.item_id) return;
          item.imgUrl = `https://game.gtimg.cn/images/yxzj/img201606/itemimg/${item.item_id}.jpg`;
          r.splice(i, 1, item);
        });
      });
    },
    //皮肤图片切换
    toggleSkin(e, item) {
      const currentImg = e.target || e; //初始化传进来的是dom，不是event
      tabs(currentImg, "current");
      this.currentSkin = item.bigImgUrl;
    },
    //技能图片切换
    toggleSkill(e, item) {
      const currentImg = e.target || e; //初始化传进来的是dom，不是event
      tabs(currentImg, "current");
      //格式化技能冷却时间
      if (getType(item.colling, "Array")) {
        this.formatColling = "";
        item.colling.forEach((e, i, r) => {
          if (i === r.length - 1) {
            this.formatColling += e;
            return;
          }
          this.formatColling += e + "/";
        });
      } else {
        this.formatColling = item.colling;
      }
      this.currentSkill = item;
    },
    //英雄克制图片切换
    toggleRestrain(e, item) {
      const currentImg = e.target || e; //初始化传进来的是dom，不是event
      tabs(currentImg, "current");
      this.currentRestrain = item.des;
    },
    //英雄克制tab点击
    clickTab(cur) {
      const firstImg = cur.$el.children[0].children[0]; //tab切换后获取第一个img元素
      const img = cur.$attrs.val[0]; //对应的数据
      this.toggleRestrain(firstImg, img); //切换
    }
  },
  components: { BackTop }
};
</script>

<style lang="stylus" scoped>
@import '~styles/style/mixins.styl'
@import '~styles/style/varible.styl'
// ===特殊===
.iconfont
  font-size: 20px // 无法继承
  margin-right: 10px
.el-icon-loading
  color: $theme-color
  font-size: 2em
.first
  padding-bottom: 0 !important
.second
  padding-top: 0 !important
// ===皮肤===
.skin
  position: relative
  padding: 20px 20px 0 20px
  i
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
  .big-skin
    width: 100%
  .small-skin
    position: absolute
    bottom: 0.5em
    right: 1.5em
    li
      float: left
      margin: 3px
      img
        width: 35px
        border: 2px solid #7a7a7a
        border-radius: 0 12px
        &.current
          border: 2px solid orange
  .hero-info
    font-size: 26px
    color: #fff
    position: absolute
    top: 1.3em
    left: 1.3em
    background-image: linear-gradient(160deg, #FFDEA8, #FFA719)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
// ===模块容器===
.container
  flex-wrap: wrap
  padding: 15px
  .item
    padding: 5px
    line-height: 1.5em
    .el-card
      height: 100%
      .header
        display: flex
        font-size: 20px
  // ===英雄技能===
  .skill
    .skill-img
      padding: 0 3px
      display: flex
      justify-content: space-between
      text-align: center
      li
        width: 15%
        &:last-child
          margin-right: 0
        img
          width: 100%
          &.current
            box-shadow: 0 0 15px 0 red
            border-radius: 50%
    .skill-name
      margin-top: 20px
      h3
        font-weight: bold
        margin: 10px 0
    .skill-desc
      margin-top: 10px
      letter-spacing: 0.3px
    .skill-tips
      tips()
  // ===英雄铭文===
  .ming
    .ming-container
      display: flex
      justify-content: space-between
      text-align: center
      h4
        font-weight: bold
        margin: 10px 0
    .ming-tips
      tips()
      margin-top: 30px
  // ===技能加点===
  .summoner
    .item
      display: flex
      align-items: center
      margin: 10px 0
      &.last
        margin-right: 0
        .images
          width: 60%
          img
            width: 30%
            margin: 5px
      .name
        line-height: 1.8em
        margin-right: 15px
        h3
          font-size: 16px
          font-weight: bold
      .images
        width: 50%
        img
          width: 40%
          border-radius: 50%
  // ===装备推荐===
  .equip
    & >>> .el-tabs__active-bar
      height: 4px
    .equip-container
      display: flex
      flex-wrap: wrap
      justify-content: space-between
      .equip-item
        width: 30%
        text-align: center
        margin-top: 1.1em
        img
          width: 80%
          border-radius: 50%
        p
          line-height: 2.5em
    .equip-tips
      tips()
  // ===英雄克制===
  .restrain
    .restrain-item
      padding: 5px
      display: flex
      justify-content: space-between
      align-items: center
      .restrain-hero
        display: flex
        justify-content: space-around
        align-items: center
        width: 40%
        img
          width: 40%
          border-radius: 0 15px
          margin: 5px
          &.current
            border: solid 4px orangered
      .restrain-desc
        width: 55%
// ===ipad及ipad以上宽屏===
@media (min-width: 768px)
  .small-skin
    bottom: 1em !important
    right: 3em !important
    li
      margin: 8px !important
      img
        width: 60px !important
  .hero-info
    font-size: 40px !important
    letter-spacing: 5px
  .last
    .images
      img
        width: 50% !important
        margin: 0 !important
  .images
    width: 55% !important
    img
      width: 75% !important
</style>
