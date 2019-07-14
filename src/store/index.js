import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collectEquip: [], //收藏的武器
    collectHero: [] //收藏的英雄
  },
  mutations: {
    handleCollectEquip(state, data) {
      state.collectEquip.push(data)
    },
    handleCollectHero(state, data) {
      state.collectHero.push(data)
    }
  }
})
