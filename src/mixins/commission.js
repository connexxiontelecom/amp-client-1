export default {
  methods: {
    getCommissions() {
      this.$store.dispatch('commission/getAllCommissions').then().catch(error => {
        this.toast('Get All Commissions', 'BellIcon', error.response.data.messages.error, 'danger')
      })
    },
    setCurrentGeneration(commissionID) {
      this.$store.dispatch('commission/setCurrentGeneration', { commissionID }).then(() => {
        this.toast('Set Current Generation', 'BellIcon', 'You changed the current generation successfully', 'success')
      }).catch(error => {
        this.toast('Set Current Generation', 'BellIcon', error.response.data.messages.error, 'danger')
      })
    },
  },
}
