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
      this.$store.dispatch('affiliate/getAffiliate', { affiliateID }).then(() => {
        this.$router.push({ name: 'view-affiliate', params: { affiliateID } }).catch()
      }).catch(error => {
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
    updateAffiliateAccount() {
      this.$refs.updateAffiliateAccountValidation.validate().then(success => {
        if (success) {
          let upstreamAffiliate = 0
          // eslint-disable-next-line no-unused-expressions
          this.upstreamAffiliate !== null ? upstreamAffiliate = this.upstreamAffiliate.value : upstreamAffiliate = 0
          const form = {
            affiliateID: this.affiliateID,
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.emailAddr,
            upstreamAffiliate,
          }
          this.$store.dispatch('affiliate/updateAffiliateAccount', { form }).then(() => {
            this.toast('Update Affiliate Account', 'BellIcon', 'You have successfully updated the affiliate account', 'success')
            this.$nextTick(() => {
              this.$refs['update-affiliate-modal'].toggle('#edit-affiliate-btn')
            })
          }).catch(error => {
            this.toast('Update Affiliate Attempt', 'BellIcon', error.response.data.messages.error, 'danger')
          })
        } else {
          this.toast('Update Affiliate Attempt', 'BellIcon', 'You must fill in all form fields correctly', 'warning')
        }
      })
    },
    updateAffiliateInfo() {
      this.$refs.updateAffiliateInformationValidation.validate().then(success => {
        if (success) {
          const form = {
            affiliateID: this.affiliateID,
            affiliateInfoID: this.affiliateInfoID,
            dob: this.dob,
            mobile: this.mobile,
            gender: this.gender,
            address: this.address,
            country: this.country,
          }
          this.$store.dispatch('affiliate/updateAffiliateInformation', { form }).then(() => {
            this.toast('Update Affiliate Information', 'BellIcon', 'You have successfully updated the affiliate information', 'success')
            this.$nextTick(() => {
              this.$refs['update-info-modal'].toggle('#edit-info-btn')
            })
          }).catch(error => {
            this.toast('Update Affiliate Info Attempt', 'BellIcon', error.response.data.messages.error, 'danger')
          })
        } else {
          this.toast('Update Affiliate Info Attempt', 'BellIcon', 'You must fill in all form fields correctly', 'warning')
        }
      })
    },
    updateAffiliateBank() {
      this.$refs.updateAffiliateBankValidation.validate().then(success => {
        if (success) {
          const form = {
            affiliateID: this.affiliateID,
            bankID: this.bankID,
            bankName: this.bankName,
            bankAccountName: this.bankAccountName,
            bankAccountNumber: this.bankAccountNumber,
          }
          this.$store.dispatch('affiliate/updateAffiliateBank', { form }).then(() => {
            this.toast('Update Affiliate Bank', 'BellIcon', 'You have successfully updated the affiliate bank', 'success')
            this.$nextTick(() => {
              this.$refs['update-bank-modal'].toggle('#edit-bank-btn')
            })
          }).catch(error => {
            this.toast('Update Affiliate Bank Attempt', 'BellIcon', error.response.data.messages.error, 'danger')
          })
        } else {
          this.toast('Update Affiliate Bank Attempt', 'BellIcon', 'You must fill in all form fields correctly', 'warning')
        }
      })
    },
  },
}
