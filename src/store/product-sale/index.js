import axios from '@/libs/axios'
// import helpers from './product-sale-helpers'

export default {
  namespaced: true,
  state: {
    productSales: [],
    numProductSales: 0,
    monthlyCommission: 0,
    yearlyCommission: 0,
  },
  getters: {
    getAllProductSales: state => state.productSales,
    getNumProductSales: state => state.numProductSales,
    getMonthlyCommission: state => state.monthlyCommission,
    getYearlyCommission: state => state.yearlyCommission,
  },
  mutations: {
    SET_ALL_PRODUCT_SALES(state, payload) {
      state.productSales = payload.productSales
      state.numProductSales = payload.productSales.length
    },
    SET_MONTHLY_COMMISSION(state, payload) {
      state.monthlyCommission = payload.monthlyCommission
    },
    SET_YEARLY_COMMISSION(state, payload) {
      state.yearlyCommission = payload.yearlyCommission
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
    getMonthlyCommission({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: `get-monthly-commission/${payload.referralCode}`, method: 'get' }).then(response => {
          commit('SET_MONTHLY_COMMISSION', { monthlyCommission: response.data })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getYearlyCommission({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: `get-yearly-commission/${payload.referralCode}`, method: 'get' }).then(response => {
          commit('SET_YEARLY_COMMISSION', { yearlyCommission: response.data })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
  },
}
