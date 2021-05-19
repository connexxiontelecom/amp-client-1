/* eslint-disable dot-notation */
import jwtDecode from 'jwt-decode'
import axios from '@/libs/axios'
import helpers from './auth-helpers'

export default {
  namespaced: true,
  state: {
    session: {
      user: {},
      permissions: [],
      isAdmin: false,
      isAffiliate: false,
      isVerified: false,
    },
  },
  getters: {
    getUser: state => state.session.user,
    getPermissions: state => state.session.permissions,
    getIsAdmin: state => state.session.isAdmin,
    getIsAffiliate: state => state.session.isAffiliate,
    getIsVerified: state => state.session.isVerified,
  },
  mutations: {
    INIT_SESSION(state, payload) {
      state.session.user = payload.user
      state.session.permissions = payload.permissions
      state.session.isAdmin = payload.session.admin
      state.session.isAffiliate = payload.session.affiliate
    },
    CLEAR_SESSION(state) {
      state.session.user = {}
      state.session.permissions = []
      state.session.isAdmin = false
      state.session.isAffiliate = false
    },
    SET_IS_VERIFIED(state, payload) {
      state.session.isVerified = payload.isVerified
    },
  },
  actions: {
    login({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: 'auth/login', data: helpers.getLoginForm(payload.form), method: 'post' }).then(response => {
          const token = response.data
          localStorage.setItem('t', token)
          const decodedToken = jwtDecode(token)
          commit('INIT_SESSION', { user: decodedToken.user, session: decodedToken.session, permissions: decodedToken.permissions })
          axios.defaults.headers['Authorization'] = `Bearer ${token}`
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    logout({ commit }) {
      localStorage.clear()
      commit('CLEAR_SESSION')
      delete axios.defaults.headers['Authorization']
    },
    // eslint-disable-next-line no-unused-vars
    register({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: 'auth/register', data: helpers.getRegisterForm(payload.form), method: 'post' }).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    verifyAccount({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: 'auth/verify_account', data: helpers.getVerifyCodeForm(payload.form), method: 'post' }).then(response => {
          commit('SET_IS_VERIFIED', { isVerified: response.data.verified })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // eslint-disable-next-line no-unused-vars
    resendConfirmation({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios({ url: 'auth/resend_confirmation', data: helpers.getResendConfirmationForm(payload.form), method: 'post' }).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
  },
}
