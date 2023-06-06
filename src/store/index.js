import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentFirstBreadcrumb:'',
    currentSecondBreadcrumb:'',
  },
  getters: {
  },
  mutations: {
    UPDATEFIRSTBREADCRUMB(state , payload) {
      state.currentFirstBreadcrumb = payload
    },
    UPDATESECONDBREADCRUMB(state , payload) {
      state.currentSecondBreadcrumb = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
