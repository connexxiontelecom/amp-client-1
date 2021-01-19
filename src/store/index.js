import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'
import auth from './auth'
import admin from './admin'
import product from './product'
import affiliate from './affiliate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    auth,
    admin,
    product,
    affiliate,
  },
  strict: process.env.DEV,
})
