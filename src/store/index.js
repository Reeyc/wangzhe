import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collectEquip: [] //收藏的武器
  },
  mutations: {
    handleCollectEquip(state, data) {
      state.collectEquip.push(data)
    }
  }
})
