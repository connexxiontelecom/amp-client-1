export default {
  methods: {
    getAffiliates() {
      this.$store.dispatch('affiliate/getAffiliates').then().catch(error => {
        this.toast('Get All Affiliates', 'BellIcon', error.response.data.messages.error, 'danger')
      })
    },
    addAffiliate() {
      this.$refs.addAffiliateValidation.validate().then(success => {
        if (success) {
          let upstreamAffiliate = 0
          // eslint-disable-next-line no-unused-expressions
          this.upstreamAffiliate !== null ? upstreamAffiliate = this.upstreamAffiliate.value : upstreamAffiliate = 0
          const form = {
            firstname: this.firstname,
            lastname: this.lastname,
            username: this.username,
            email: this.emailAddr,
            password: this.password,
            upstreamAffiliate,
          }
          this.$store.dispatch('affiliate/addAffiliate', { form }).then(() => {
            this.$router.push({ name: 'affiliate-accounts' }).then(() => {
              this.toast('Add Affiliate', 'BellIcon', 'The affiliate was added successfully', 'success')
            })
          }).catch(error => {
            this.toast('Add Admin Attempt', 'BellIcon', error.response.data.messages.error, 'danger')
          })
        } else {
          this.toast('Add Affiliate Attempt', 'BellIcon', 'You must fill in all form fields correctly', 'warning')
        }
      })
    },
    getAffiliate(affiliateID) {
      this.$store.dispatch('affiliate/getAffiliate', { affiliateID }).then().catch(error => {
        this.toast('Get Affiliate', 'BellIcon', error.response.data.messages.error, 'danger')
      })
    },
    // eslint-disable-next-line no-unused-vars
    toggleStatus(status, affiliateID) {
      if (status === '1') {
        this.$bvModal.msgBoxConfirm('Please confirm that you want to deactivate this account?', {
          title: 'Deactivate Account',
          size: 'sm',
          okVariant: 'primary',
          okTitle: 'Confirm',
          cancelTitle: 'Cancel',
          cancelVariant: 'outline-secondary',
          hideHeaderClose: false,
          centered: true,
        }).then(value => {
          if (value) {
            this.$store.dispatch('affiliate/toggleAffiliateStatus', { affiliateID }).then(() => {
              this.toast('Deactivate Account', 'BellIcon', 'The affiliate was deactivated successfully', 'success')
            }).catch(error => {
              this.toast('Deactivate Account', 'BellIcon', error.response.data.messages.error, 'danger')
            })
          }
        })
      } else if (status === '0') {
        this.$bvModal.msgBoxConfirm('Please confirm that you want to reactivate this account?', {
          title: 'Reactivate Account',
          size: 'sm',
          okVariant: 'primary',
          okTitle: 'Confirm',
          cancelTitle: 'Cancel',
          cancelVariant: 'outline-secondary',
          hideHeaderClose: false,
          centered: true,
        }).then(value => {
          if (value) {
            this.$store.dispatch('affiliate/toggleAffiliateStatus', { affiliateID }).then(() => {
              this.toast('Reactivate Account', 'BellIcon', 'The affiliate was reactivated successfully', 'success')
            }).catch(error => {
              this.toast('Reactivate Account', 'BellIcon', error.response.data.messages.error, 'danger')
            })
          }
        })
      }
    },
  },
}
