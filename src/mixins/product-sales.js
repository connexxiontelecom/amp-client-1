export default {
  methods: {
    getProductSales() {
      this.$store.dispatch('productSales/getProductSales').then().catch(error => {
        this.toast('Get Product Sales Attempt', 'BellIcon', error.response.data.messages.error, 'danger')
      })
    },
    getAffiliateProductSales(referralCode) {
      this.$store.dispatch('productSales/getAffiliateProductSales', { referralCode }).then().catch(error => {
        this.toast('Get Product Sales Attempt', 'BellIcon', error.response.data.messages.error, 'danger')
      })
    },
    getMonthlyCommission(referralCode) {
      this.$store.dispatch('productSales/getMonthlyCommission', { referralCode }).then().catch(error => {
        this.toast('Get Monthly COmmission Attempt', 'BellIcon', error.response.data.messages.error, 'danger')
      })
    },
  },
}
