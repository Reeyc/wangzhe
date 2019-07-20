<template>
  <div>
    <slide></slide>
    <icon-menu></icon-menu>
    <toptic></toptic>
    <equip></equip>
    <category></category>
    <back-top :visibility-height="100" :back-position="0" transition-name="fade" />
  </div>
</template>

<script>
import Slide from "./children/Slide";
import IconMenu from "./children/IconMenu";
import Toptic from "./children/Toptic";
import Equip from "./children/Equip";
import Category from "./children/Category";
import BackTop from "base/BackTop";

export default {
  name: "Home",
  components: { Slide, IconMenu, Toptic, Equip, Category, BackTop }
};
</script>

