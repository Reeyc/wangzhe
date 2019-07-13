<template>
  <div ref="backTop">
    <slide></slide>
    <icon-menu></icon-menu>
    <toptic></toptic>
    <equip></equip>
    <category></category>
    <el-backtop :target="$refs.backTop" :visibility-height="20"></el-backtop>
  </div>
</template>

<script>
import Slide from "./children/Slide";
import IconMenu from "./children/IconMenu";
import Toptic from "./children/Toptic";
import Equip from "./children/Equip";
import Category from "./children/Category";
export default {
  components: { Slide, IconMenu, Toptic, Equip, Category }
};
</script>

