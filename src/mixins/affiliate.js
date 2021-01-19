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
  },
}
