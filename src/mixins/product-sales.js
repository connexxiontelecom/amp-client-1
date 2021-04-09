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
  },
}
