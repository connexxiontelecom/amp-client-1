/* eslint-disable no-unused-vars */
import axios from '@/libs/axios'
import helpers from './admin-helpers'

export default {
  namespaced: true,
  state: {
    allAdmins: [],
    numAdmins: 0,
  },
  getters: {
    getAllAdmins: state => state.allAdmins,
    getNumAdmins: state => state.numAdmins,
  },
  mutations: {
    SET_ALL_ADMINS(state, payload) {
      state.allAdmins = payload.allAdmins
      state.numAdmins = payload.allAdmins.length
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
  },
}
