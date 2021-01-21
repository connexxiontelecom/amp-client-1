/* eslint-disable no-unused-vars */
import axios from '@/libs/axios'

export default {
  namespaced: true,
  state: {
    allCommissions: [],
    numCommissions: 0,
    currentGeneration: {},
    planCommissions: [],
    numPlanCommissions: 0,
  },
  getters: {
    getAllCommissions: state => state.allCommissions,
    getNumCommissions: state => state.numCommissions,
    getCurrentGeneration: state => state.currentGeneration,
    getPlanCommissions: state => state.planCommissions,
    getNumPlanCommissions: state => state.numPlanCommissions,
  },
  mutations: {
    SET_ALL_COMMISSIONS(state, payload) {
      state.allCommissions = payload.allCommissions
      state.numCommissions = payload.allCommissions.length
    },
    SET_CURRENT_GENERATION(state, payload) {
      state.currentGeneration = payload.currentGeneration
    },
    SET_PLAN_COMMISSIONS(state, payload) {
      state.planCommissions = payload.planCommissions
      state.numPlanCommissions = payload.planCommissions.length
    },
  },
  actions: {
    getAllCommissions({ commit }) {
      return new Promise((resolve, reject) => {
        axios({ url: 'commission/get_commissions', method: 'get' }).then(response => {
          commit('SET_ALL_COMMISSIONS', { allCommissions: response.data.commissions })
          commit('SET_CURRENT_GENERATION', { currentGeneration: response.data.current_generation })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
  },
}
