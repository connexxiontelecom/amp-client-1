// import Vue from 'vue'

// axios
import axios from 'axios'

const baseURL = {
  dev: 'http://localhost:8080',
  prod: 'https://amp-api.connexxiontelecom.com/public/',
}

export default axios.create({
  // You can add your headers here
  // ================================
  baseURL: baseURL.dev,
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
})

//
// Vue.prototype.$http = axiosIns
//
// export default axiosIns
