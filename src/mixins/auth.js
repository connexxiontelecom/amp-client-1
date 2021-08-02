// import notify from '@/mixins/notify'
// import emailjs from 'emailjs-com'
// import api from '@/api-config'

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
            // return the session type and chose which one..
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
      this.$router.push({ name: 'login' }).then(() => {
        this.$store.dispatch('auth/logout').then(() => {
          this.toast('Thank You', 'LogOutIcon', 'You have logged out successfully', 'success')
        })
      })
    },
    register() {
      this.$refs.registerValidation.validate().then(success => {
        if (success) {
          const form = {
            firstname: this.firstname,
            lastname: this.lastname,
            username: this.username,
            email: this.regEmail,
            password: this.password,
            verifyCode: this.generateVerifyCode(10),
            confirmPassword: this.confirmPassword,
          }
          this.$store.dispatch('auth/register', { form }).then(response => {
            this.$router.push({ name: 'login' }).then(() => {
              this.toast('Register', 'LogInIcon', response.data, 'success')
            })
          }).catch(error => {
            this.toast('Register Attempt', 'LogInIcon', error.response.data.messages.error, 'danger')
          })
        } else {
          this.toast('Register Attempt', 'LogInIcon', 'You must fill in all form fields correctly', 'warning')
        }
      })
    },
    verifyAccount() {
      const form = {
        verifyCode: this.verifyCode,
      }
      this.$store.dispatch('auth/verifyAccount', { form }).then().catch(error => {
        this.toast('Verify Account', 'BellIcon', error.response.data.messages.error, 'danger')
      })
    },
    resendConfirmation() {
      const form = {
        firstname: this.firstname,
        lastname: this.lastname,
        verifyCode: this.verifyCode,
        email: this.emailAddr,
      }
      this.$store.dispatch('auth/resendConfirmation', { form }).then(() => {
        this.toast('Resend Confirmation', 'BellIcon', 'Confirmation email sent successful', 'success')
      }).catch(() => {
        this.toast('Resend Confirmation', 'BellIcon', 'Confirmation email could not be sent. Try again later', 'danger')
      })
    },
    forgotPassword() {
      this.$refs.forgotPasswordValidation.validate().then(success => {
        if (success) {
          const form = {
            email: this.userEmail,
          }
          this.$store.dispatch('auth/sendResetPasswordLink', { form }).then(response => {
            this.toast('Send Reset Password Link', 'BellIcon', response.data, 'success')
          }).catch(error => {
            this.toast('Send Reset Password Link', 'BellIcon', error.response.data.messages.error, 'danger')
          })
        } else {
          this.toast('Forgot Password', 'LogInIcon', 'You must fill in all form fields correctly', 'warning')
        }
      })
    },
    resetPassword() {
      this.$refs.resetPasswordValidation.validate().then(success => {
        if (success) {
          const form = {
            verificationCode: this.verificationCode,
            password: this.password,
            cPassword: this.cPassword,
          }
          this.$store.dispatch('auth/resetPassword', { form }).then(response => {
            this.$router.push({ name: 'login' }).then(() => {
              this.toast('Reset Password', 'BellIcon', response.data, 'success')
            })
          }).catch(error => {
            this.toast('Reset Password', 'BellIcon', error.response.data.messages.error, 'danger')
          })
        } else {
          this.toast('Reset Password', 'LogInIcon', 'You must fill in all form fields correctly', 'warning')
        }
      })
    },
  },
}
