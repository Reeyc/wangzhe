// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

import 'styles/style/reset.css'
import 'styles/style/iconfont.css'
import 'swiper/dist/css/swiper.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import fastClick from 'fastClick'
fastClick.attach(document.body);

import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
Vue.component('chart', ECharts)

import {
  Pagination,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  Input,
  Radio,
  RadioGroup,
  Switch,
  Select,
  Option,
  Button,
  Table,
  TableColumn,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Icon,
  Row,
  Col,
  Card,
  Collapse,
  CollapseItem,
  Link,
  Divider,
  Backtop,
  MessageBox,
  Message,
  Scrollbar
} from 'element-ui';

Vue.use(Pagination);
Vue.use(Autocomplete);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Link);
Vue.use(Divider);
Vue.use(Backtop);
Vue.use(Scrollbar);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;

Vue.prototype.$axios = axios
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
