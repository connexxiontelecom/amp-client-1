import Vue from 'vue'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'

import base from '@/mixins/base'
import router from './router'
import store from './store'
import App from './App.vue'

// Global Components
import './global-components'

// 3rd party plugins
import '@axios'
import '@/libs/portal-vue'
import '@/libs/toastification'

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)

// Composition API
Vue.use(VueCompositionAPI)

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

Vue.config.productionTip = false
Vue.mixin(base)

new Vue({
  router,
  store,
  created() {
    this.reinitializeSession()
    // eslint-disable-next-line func-names
    // window.onbeforeunload = function () {
    //   return 'Do not reload Vue app'
    // }
  },
  render: h => h(App),
}).$mount('#app')
