// import notify from '@/mixins/notify'

export default {
  // mixins: [notify],
  methods: {
    login() {
      this.$refs.loginValidation.validate().then(success => {
        if (success) {
          const form = {
            username: this.username,
            password: this.password,
          }
          this.$store.dispatch('auth/login', { form }).then(() => {
            this.$router.push({ name: 'home' }).then(() => {
              this.toast('Welcome', 'LogInIcon', 'You have logged in successfully', 'success')
            })
          }).catch(error => {
            this.toast('Login Attempt', 'LogInIcon', error.response.data.messages.error, 'danger')
          })
        } else {
          this.toast('Login Attempt', 'LogInIcon', 'You must fill in all form fields correctly', 'warning')
        }
      })
    },
    logout() {
      this.$store.dispatch('auth/logout').then(() => {
        this.$router.push({ name: 'login' }).then(() => {
          this.toast('Thank You', 'LogOutIcon', 'You have logged out successfully', 'success')
        })
      })
    },
  },
}
