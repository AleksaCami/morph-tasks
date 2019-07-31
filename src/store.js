import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // isLoggingIn: false,
    // loginError: null,
    // loginSuccessful: false
  },
  mutations: {
    // loginStart: state => (state.loggingIn = true),
    // loginStop: (state, errorMessage) => {
    //   state.loggingIn = false
    //   state.loginError = errorMessage
    //   state.loginSuccessful = !errorMessage
    // }
  },
  actions: {
    // doLogin ({ commit }, loginData) {
    //   commit('loginStart')
    //   localStorage.setItem(JSON.stringify(...loginData))
    //   console.log('logged in')
    // }
  }
})
