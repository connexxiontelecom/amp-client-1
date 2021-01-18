import axios from '@/libs/axios'

export default {
  namespaced: true,
  state: {
    allProducts: [],
    numProducts: 0,
  },
  getters: {
    getAllProducts: state => state.allProducts,
    getNumProducts: state => state.numProducts,
    getCurrentProduct: state => state.currentProduct,
    getCurrentProductPlans: state => state.currentProductPlans,
  },
  mutations: {
    SET_ALL_PRODUCTS(state, payload) {
      state.allProducts = payload.allProducts
      state.numProducts = payload.allProducts.length
    },
    SET_CURRENT_PRODUCT(state, payload) {
      state.currentProduct = payload.product
      state.currentProductPlans = payload.plans
    },
  },
  actions: {
    getProducts({ commit }) {
      return new Promise((resolve, reject) => {
        axios({ url: 'product/all_products ', method: 'get' }).then(response => {
          commit('SET_ALL_PRODUCTS', { allProducts: response.data })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
  },
}
