import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
  title: "movie",
  color: "rgb(33,150,243)"
}

export default new Vuex.Store({
  state,
})
