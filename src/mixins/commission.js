export default {
  methods: {
    getCommissions() {
      this.$store.dispatch('commission/getAllCommissions').then().catch(error => {
        this.toast('Get All Commissions', 'BellIcon', error.response.data.messages.error, 'danger')
      })
    },
  },
}
