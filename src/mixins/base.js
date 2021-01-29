import jwtDecode from 'jwt-decode'
import notify from '@/mixins/notify'
import axios from '@/libs/axios'

export default {
  mixins: [notify],
  methods: {
    reinitializeSession() {
      if (localStorage.getItem('t')) {
        const token = localStorage.getItem('t')
        const decodedToken = jwtDecode(token)
        delete decodedToken.user.password
        this.$store.commit('auth/INIT_SESSION', { user: decodedToken.user, session: decodedToken.session })
      }
    },
    generateVerifyCode(length) {
      let result = ''
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      const charactersLength = characters.length
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
      }
      return result
    },
    apiResponseHandler() {
      axios.interceptors.response.use(response => Promise.resolve(response), error => {
        if (typeof error.response !== 'undefined') {
          if (error.response.status === 401) {
            this.$store.dispatch('auth/logout').then(() => {
              this.$router.push('/login').then(() => {
                this.toast('Unauthorized', 'InfoIcon', 'Sorry. This action is unauthorized and you have been logged out of the system', 'danger')
              }).catch(() => {})
            })
          }
        }
      })
    },
  },
}
