import axios from '@/libs/axios'
// import helpers from './product-sale-helpers'

export default {
  namespaced: true,
  state: {
    productSales: [],
    numProductSales: 0,
  },
  getters: {
    getAllProductSales: state => state.productSales,
    getNumProductSales: state => state.numProductSales,
  },
  mutations: {
    SET_ALL_PRODUCT_SALES(state, payload) {
      state.productSales = payload.productSales
      state.numProductSales = payload.productSales.length
    },
  },
  actions: {
    getProductSales({ commit }) {
      return new Promise((resolve, reject) => {
        axios({ url: 'product-sales', method: 'get' }).then(response => {
          commit('SET_ALL_PRODUCT_SALES', { productSales: response.data })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getAffiliateProductSales({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: `affiliate-product-sales/${payload.referralCode}`, method: 'get' }).then(response => {
          commit('SET_ALL_PRODUCT_SALES', { productSales: response.data })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
  },
}
