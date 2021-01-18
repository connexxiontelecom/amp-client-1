export default {
  methods: {
    getProducts() {
      this.$store.dispatch('product/getProducts').then().catch(error => {
        this.toast('Get All Products Attempt', 'BellIcon', error.response.data.messages.error, 'danger')
      })
    },
    addProduct() {
      this.$refs.addProductValidation.validate().then(success => {
        if (success) {
          const form = {
            name: this.name,
            url: this.productUrl,
            category: this.category.value,
            description: this.description,
          }
          this.$store.dispatch('product/addProduct', { form }).then(() => {
            this.$router.push({ name: 'products' }).then(() => {
              this.toast('Add Admin', 'BellIcon', 'You have successfully added the product', 'success')
            })
          }).catch(error => {
            this.toast('Add Product Attempt', 'BellIcon', error.response.data.messages.error, 'danger')
          })
        } else {
          this.toast('Add Product Attempt', 'BellIcon', 'You must fill in all form fields correctly', 'warning')
        }
      })
    },
  },
}
