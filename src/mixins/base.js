import jwtDecode from 'jwt-decode'
import notify from '@/mixins/notify'

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
  },
}
