import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  getters: {
    loginState (state) {
      return state.isUserLoggedIn
    },
    token (state) {
      return state.token.user_session
    },
    user (state) {
      return state.user
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    setToken (context, token) {
      context.commit('setToken', token)
    },
    setUser (context, user) {
      context.commit('setUser', user)
    },
    logout (context) {
      context.commit('setToken', null)
      context.commit('setUser', null)
    }
  }
})
