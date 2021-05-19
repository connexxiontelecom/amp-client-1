// import emailjs from 'emailjs-com'
// import api from '@/api-config'

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
            verifyCode: this.generateVerifyCode(10),
            upstreamAffiliate,
          }
          this.$store.dispatch('affiliate/addAffiliate', { form }).then(() => {
            this.toast('Add Affiliate', 'BellIcon', 'The affiliate was added successfully', 'success')
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
    updateAccount() {
      this.$refs.editAccountValidation.validate().then(success => {
        if (success) {
          const form = {
            affiliateID: this.affiliateID,
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.emailAddr,
          }
          this.$store.dispatch('affiliate/updateAccount', { form }).then(() => {
            this.toast('Update Account', 'BellIcon', ' You have successfully updated your account', 'success')
          }).catch(error => {
            this.toast('Update Account', 'BellIcon', error.response.data.messages.error, 'danger')
          })
        } else {
          this.toast('Update Account Attempt', 'BellIcon', 'You must fill in all form fields correctly', 'warning')
        }
      })
    },
    updateInfo() {
      this.$refs.editInfoValidation.validate().then(success => {
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
          this.$store.dispatch('affiliate/updateInfo', { form }).then(() => {
            this.toast('Update Information', 'BellIcon', 'You have successfully updated your information', 'success')
          }).catch(error => {
            this.toast('Update Information', 'BellIcon', error.response.data.messages.error, 'danger')
          })
        } else {
          this.toast('Update Information Attempt', 'BellIcon', 'You must fill in all form fields correctly', 'warning')
        }
      })
    },
    updateBank() {
      this.$refs.editBankValidation.validate().then(success => {
        if (success) {
          const form = {
            affiliateID: this.affiliateID,
            bankID: this.bankID,
            bankName: this.bankName,
            bankAccountName: this.bankAccountName,
            bankAccountNumber: this.bankAccountNumber,
          }
          this.$store.dispatch('affiliate/updateBank', { form }).then(() => {
            this.toast('Update Bank', 'BellIcon', 'You have successfully updated your bank', 'success')
          }).catch(error => {
            this.toast('Update Bank', 'BellIcon', error.response.data.messages.error, 'danger')
          })
        } else {
          this.toast('Update Bank Attempt', 'BellIcon', 'You must fill in all form fields correctly', 'warning')
        }
      })
    },
    getDownstreamAffiliates(affiliateID) {
      this.$store.dispatch('affiliate/getDownstreamAffiliates', { affiliateID }).then().catch(error => {
        this.toast('Get Downstream Affiliates', 'BellIcon', error.response.data.messages.error, 'danger')
      })
    },
    addDownstreamAffiliate() {
      this.$refs.addDownstreamAffiliateValidation.validate().then(success => {
        if (success) {
          const form = {
            firstname: this.firstname,
            lastname: this.lastname,
            username: this.username,
            email: this.emailAddr,
            password: this.password,
            upstreamAffiliate: this.upstreamAffiliate,
          }
          this.$store.dispatch('affiliate/addDownstreamAffiliate', { form }).then(() => {
            this.toast('Add Affiliate', 'BellIcon', 'You have successfully added an affiliate', 'success')
          }).catch(error => {
            this.toast('Add Affiliate', 'BellIcon', error.response.data.messages.error, 'danger')
          })
        } else {
          this.toast('Add Affiliate', 'BellIcon', 'You must fill in all form fields correctly', 'warning')
        }
      })
    },
    getDownstreamAffiliate(affiliateID) {
      this.$store.dispatch('affiliate/getAffiliate', { affiliateID }).then(() => {
        this.$router.push({ name: 'view-downstream-affiliate', params: { affiliateID } }).catch()
      }).catch(error => {
        this.toast('Get Affiliate', 'BellIcon', error.response.data.messages.error, 'danger')
      })
    },
    changePassword() {
      this.$refs.changePasswordValidation.validate().then(success => {
        if (success) {
          const form = {
            affiliateID: this.affiliateID,
            password: this.password,
            newPassword: this.newPassword,
            confirmPassword: this.confirmPassword,
          }
          this.$store.dispatch('affiliate/changePassword', { form }).then(response => {
            this.$router.push({ name: 'login' }).then(() => {
              this.$store.dispatch('auth/logout').then(() => {
                this.toast('Change Password', 'LogOutIcon', response.data, 'success')
              })
            })
          }).catch(error => {
            this.toast('Change Password', 'BellIcon', error.response.data.messages.error, 'danger')
          })
        } else {
          this.toast('Change Password', 'BellIcon', 'You must fill in all form fields correctly', 'warning')
        }
      })
    },
    updateProfilePicture(profilePicture) {
      const form = {
        affiliateID: this.affiliateID,
        profilePicture,
      }
      this.$store.dispatch('affiliate/updateProfilePicture', { form }).then(() => {
        this.toast('Update Profile Picture', 'BellIcon', 'You have successfully updated the profile picture', 'success')
      }).catch(error => {
        this.toast('Update Profile Picture Attempt', 'BellIcon', error.response.data.messages.error, 'danger')
      })
    },
    removeProfilePicture() {
      const form = {
        affiliateID: this.affiliateID,
      }
      this.$store.dispatch('affiliate/removeProfilePicture', { form }).then(() => {
        this.toast('Remove Profile Picture', 'BellIcon', 'You have successfully removed the profile picture', 'success')
      }).catch(error => {
        this.toast('Remove Profile Picture Attempt', 'BellIcon', error.response.data.messages.error, 'danger')
      })
    },
  },
}
