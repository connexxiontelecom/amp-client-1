export default {
  methods: {
    getAffiliates() {
      this.$store.dispatch('affiliate/getAffiliates').then().catch(error => {
        this.toast('Get All Affiliates', 'BellIcon', error.response.data.messages.error, 'danger')
      })
    },
  },
}
