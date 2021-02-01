/* eslint-disable no-unused-vars */
import axios from '@/libs/axios'
import helpers from './admin-helpers'

export default {
  namespaced: true,
  state: {
    allAdmins: [],
    numAdmins: 0,
    currentAdmin: {},
  },
  getters: {
    getAllAdmins: state => state.allAdmins,
    getNumAdmins: state => state.numAdmins,
    getCurrentAdmin: state => state.currentAdmin,
  },
  mutations: {
    SET_ALL_ADMINS(state, payload) {
      state.allAdmins = payload.allAdmins
      state.numAdmins = payload.allAdmins.length
    },
    SET_CURRENT_ADMIN(state, payload) {
      state.currentAdmin = payload.currentAdmin
    },
  },
  actions: {
    getAdmins({ commit }) {
      return new Promise((resolve, reject) => {
        axios({ url: 'admin/all_admins', method: 'get' }).then(response => {
          commit('SET_ALL_ADMINS', { allAdmins: response.data })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    addAdmin({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: 'admin/add_admin', data: helpers.getAddAdminForm(payload.form), method: 'post' }).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getAdmin({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: `admin/get_admin/${payload.adminID}`, method: 'get' }).then(response => {
          commit('SET_CURRENT_ADMIN', { currentAdmin: response.data })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
  },
}
