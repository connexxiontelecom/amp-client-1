/* eslint-disable no-unused-vars */
import axios from '@/libs/axios'
import helpers from './affiliate-helpers'
import auth from '../auth'

export default {
  namespaced: true,
  state: {
    allAffiliates: [],
    numAffiliates: 0,

    currentAffiliate: {},

    downstreamAffiliates: [],
    numDownstreamAffiliates: 0,
  },
  getters: {
    getAllAffiliates: state => state.allAffiliates,
    getNumAffiliates: state => state.numAffiliates,
    getCurrentAffiliate: state => state.currentAffiliate,
    getDownstreamAffiliates: state => state.downstreamAffiliates,
    getNumDownstreamAffiliates: state => state.numDownstreamAffiliates,
  },
  mutations: {
    UPDATE_SESSION(state, payload) {
      auth.state.session.user = payload.user
      auth.state.session.isAdmin = payload.session.admin
      auth.state.session.isAffiliate = payload.session.affiliate
    },
    SET_ALL_AFFILIATES(state, payload) {
      state.allAffiliates = payload.allAffiliates
      state.numAffiliates = payload.allAffiliates.length
    },
    SET_CURRENT_AFFILIATE(state, payload) {
      state.currentAffiliate = payload.currentAffiliate
    },
    SET_DOWNSTREAM_AFFILIATES(state, payload) {
      state.downstreamAffiliates = payload.downstreamAffiliates
      state.numDownstreamAffiliates = payload.downstreamAffiliates.length
    },
  },
  actions: {
    getAffiliates({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: 'affiliate/all_affiliates', method: 'get' }).then(response => {
          commit('SET_ALL_AFFILIATES', { allAffiliates: response.data })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    addAffiliate({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: 'affiliate/add_affiliate', data: helpers.getAddAffiliateForm(payload.form), method: 'post' }).then(response => {
          commit('SET_ALL_AFFILIATES', { allAffiliates: response.data })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
  },
}
