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
    getAffiliate({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: `affiliate/get_affiliate/${payload.affiliateID}`, method: 'get' }).then(response => {
          commit('SET_CURRENT_AFFILIATE', { currentAffiliate: response.data })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    toggleAffiliateStatus({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: `affiliate/toggle_affiliate_status/${payload.affiliateID}`, method: 'get' }).then(response => {
          commit('SET_CURRENT_AFFILIATE', { currentAffiliate: response.data })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    updateAffiliateAccount({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: 'affiliate/update_affiliate_account', data: helpers.getUpdateAffiliateAccountForm(payload.form), method: 'post' }).then(response => {
          commit('SET_CURRENT_AFFILIATE', { currentAffiliate: response.data })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    updateAffiliateInformation({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: 'affiliate/update_affiliate_info', data: helpers.getUpdateAffiliateInfoForm(payload.form), method: 'post' }).then(response => {
          commit('SET_CURRENT_AFFILIATE', { currentAffiliate: response.data })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    updateAffiliateBank({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: 'affiliate/update_affiliate_bank', data: helpers.getUpdateAffiliateBankForm(payload.form), method: 'post' }).then(response => {
          commit('SET_CURRENT_AFFILIATE', { currentAffiliate: response.data })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    updateAccount({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: 'affiliate/update_account', data: helpers.getUpdateAccountForm(payload.form), method: 'post' }).then(response => {
          commit('UPDATE_SESSION', { user: response.data.user, session: response.data.session })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    updateInfo({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: 'affiliate/update_info', data: helpers.getUpdateAffiliateInfoForm(payload.form), method: 'post' }).then(response => {
          commit('UPDATE_SESSION', { user: response.data.user, session: response.data.session })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    updateBank({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: 'affiliate/update_bank', data: helpers.getUpdateAffiliateBankForm(payload.form), method: 'post' }).then(response => {
          commit('UPDATE_SESSION', { user: response.data.user, session: response.data.session })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    updateProfilePicture({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: 'affiliate/update_image', data: helpers.getUpdateProfilePictureForm(payload.form), method: 'post' }).then(response => {
          commit('UPDATE_SESSION', { user: response.data.user, session: response.data.session })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    removeProfilePicture({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: 'affiliate/remove_image', data: helpers.getRemoveProfilePictureForm(payload.form), method: 'post' }).then(response => {
          commit('UPDATE_SESSION', { user: response.data.user, session: response.data.session })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getDownstreamAffiliates({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: `affiliate/get_downstream_affiliates/${payload.affiliateID}`, method: 'get' }).then(response => {
          commit('SET_DOWNSTREAM_AFFILIATES', { downstreamAffiliates: response.data })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    addDownstreamAffiliate({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: 'affiliate/add_downstream_affiliate', data: helpers.getAddAffiliateForm(payload.form), method: 'post' }).then(response => {
          commit('SET_DOWNSTREAM_AFFILIATES', { downstreamAffiliates: response.data })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    changePassword({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: 'affiliate/change_password', data: helpers.getChangePasswordForm(payload.form), method: 'post' }).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
  },
}
