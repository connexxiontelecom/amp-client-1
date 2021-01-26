// import Vue from 'vue'
import api from '@/apiConfig'

// axios
import axios from 'axios'

export default axios.create({
  // You can add your headers here
  // ================================
  baseURL: api.endpoint,
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
})

//
// Vue.prototype.$http = axiosIns
//
// export default axiosIns
