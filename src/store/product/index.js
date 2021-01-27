import axios from '@/libs/axios'
import helpers from './product-helpers'

export default {
  namespaced: true,
  state: {
    allProducts: [],
    numProducts: 0,
    currentProduct: {},
    currentProductPlans: [],
    numProductPlans: 0,
  },
  getters: {
    getAllProducts: state => state.allProducts,
    getNumProducts: state => state.numProducts,
    getCurrentProduct: state => state.currentProduct,
    getCurrentProductPlans: state => state.currentProductPlans,
    getNumProductPlans: state => state.numProductPlans,
  },
  mutations: {
    SET_ALL_PRODUCTS(state, payload) {
      state.allProducts = payload.allProducts
      state.numProducts = payload.allProducts.length
    },
    SET_CURRENT_PRODUCT(state, payload) {
      state.currentProduct = payload.product
      state.currentProductPlans = payload.plans
      state.numProductPlans = payload.plans.length
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
    addProduct({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: 'product/add_product',
          data: helpers.getAddProductForm(payload.form),
          method: 'post',
          headers: { 'Content-Type': 'multipart/form-data' },
        }).then(response => {
          commit('SET_ALL_PRODUCTS', { allProducts: response.data })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    updateProduct({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: 'product/update_product',
          data: helpers.getUpdateProductForm(payload.form),
          method: 'post',
        }).then(response => {
          commit('SET_CURRENT_PRODUCT', { product: response.data.product, plans: response.data.plans })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    updateLogo({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: 'product/update_logo',
          data: helpers.getUpdateProductLogoForm(payload.form),
          method: 'post',
          headers: { 'Content-Type': 'multipart/form-data' },
        }).then(response => {
          commit('SET_CURRENT_PRODUCT', { product: response.data.product, plans: response.data.plans })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    removeLogo({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: 'product/remove_logo',
          data: helpers.getRemoveProductLogo(payload.form),
          method: 'post',
        }).then(response => {
          console.log(response)
          commit('SET_CURRENT_PRODUCT', { product: response.data.product, plans: response.data.plans })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getProduct({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: `product/get_product/${payload.productID}`, method: 'get' }).then(response => {
          commit('SET_CURRENT_PRODUCT', { product: response.data.product, plans: response.data.plans })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    addPlan({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: 'product/add_plan', data: helpers.getAddPlanForm(payload.form), method: 'post' }).then(response => {
          commit('SET_CURRENT_PRODUCT', { product: response.data.product, plans: response.data.plans })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    editPlan({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: 'product/edit_plan', data: helpers.getEditPlanForm(payload.form), method: 'post' }).then(response => {
          commit('SET_CURRENT_PRODUCT', { product: response.data.product, plans: response.data.plans })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    toggleProductStatus({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: `product/toggle_product_status/${payload.productID}`, method: 'get' }).then(response => {
          commit('SET_CURRENT_PRODUCT', { product: response.data.product, plans: response.data.plans })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
  },
}
