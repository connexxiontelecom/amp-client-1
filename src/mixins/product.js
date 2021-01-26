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
            logo: this.logo,
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
    getProduct(productID) {
      this.$store.dispatch('product/getProduct', { productID }).then(() => {
        this.$router.push({ name: 'view-product', params: { productID } }).catch()
      }).catch(error => {
        this.toast('Get Product Attempt', 'BellIcon', error.response.data.messages.error, 'danger')
      })
    },
    addPlan() {
      this.$refs.addPlanValidation.validate().then(success => {
        if (success) {
          const form = {
            productID: this.productID,
            planName: this.planName,
            planPrice: this.planPrice,
            planLink: this.planLink,
            planCommission: this.planCommission,
            planSlug: this.planSlug,
          }
          this.$store.dispatch('product/addPlan', { form }).then(() => {
            this.toast('Add Product Plan', 'BellIcon', 'You have successfully added the product plan', 'success')
            this.$nextTick(() => {
              this.$refs['add-plan-modal'].toggle('#add-btn')
            })
            this.planName = null
            this.planPrice = null
            this.planLink = null
            this.planCommission = null
            this.planSlug = null
          }).catch(error => {
            this.toast('Add Product Plan Attempt', 'BellIcon', error.response.data.messages.error, 'danger')
          })
        } else {
          this.toast('Add Product Plan Attempt', 'BellIcon', 'You must fill in all form fields correctly', 'warning')
        }
      })
    },
    toggleStatus(status, productID) {
      if (status === '1') {
        this.$bvModal.msgBoxConfirm('Please confirm that you want to deactivate this product?', {
          title: 'Deactivate Product',
          size: 'sm',
          okVariant: 'primary',
          okTitle: 'Confirm',
          cancelTitle: 'Cancel',
          cancelVariant: 'outline-secondary',
          hideHeaderClose: false,
          centered: true,
        }).then(value => {
          if (value) {
            this.$store.dispatch('product/toggleProductStatus', { productID }).then(() => {
              this.toast('Deactivate Product', 'BellIcon', 'The product was deactivated successfully', 'success')
            }).catch(error => {
              this.toast('Deactivate Product', 'BellIcon', error.response.data.messages.error, 'danger')
            })
          }
        })
      } else if (status === '0') {
        this.$bvModal.msgBoxConfirm('Please confirm that you want to reactivate this product?', {
          title: 'Reactivate Product',
          size: 'sm',
          okVariant: 'primary',
          okTitle: 'Confirm',
          cancelTitle: 'Cancel',
          cancelVariant: 'outline-secondary',
          hideHeaderClose: false,
          centered: true,
        }).then(value => {
          if (value) {
            this.$store.dispatch('product/toggleProductStatus', { productID }).then(() => {
              this.toast('Reactivate Product', 'BellIcon', 'The product was reactivated successfully', 'success')
            }).catch(error => {
              this.toast('Reactivate Product', 'BellIcon', error.response.data.messages.error, 'danger')
            })
          }
        })
      }
    },
  },
}
