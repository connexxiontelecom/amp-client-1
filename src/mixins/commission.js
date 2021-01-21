/* eslint-disable radix */
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
    submitEdit() {
      let totalCommission = 0
      // eslint-disable-next-line default-case
      switch (this.commissionNumGens) {
        case 1:
          totalCommission = parseInt(this.commissionGen1) + parseInt(this.commissionGen2)
          break
        case 2:
          totalCommission = parseInt(this.commissionGen1) + parseInt(this.commissionGen2) + parseInt(this.commissionGen3)
          break
        case 3:
          totalCommission = parseInt(this.commissionGen1) + parseInt(this.commissionGen2) + parseInt(this.commissionGen3) + parseInt(this.commissionGen4)
          break
        case 4:
          totalCommission = parseInt(this.commissionGen1) + parseInt(this.commissionGen2) + parseInt(this.commissionGen3) + parseInt(this.commissionGen4) + parseInt(this.commissionGen5)
          break
      }
      if (totalCommission !== 100) {
        this.toast('Edit Commissions', 'BellIcon', `The sum of the commissions must equal 100. Currently, it is ${totalCommission}`, 'warning')
      } else {
        const form = {
          commissionID: this.commissionID,
          commissionNumGens: this.commissionNumGens,
          commissionGen1: this.commissionGen1,
          commissionGen2: this.commissionGen2,
          commissionGen3: this.commissionGen3,
          commissionGen4: this.commissionGen4,
          commissionGen5: this.commissionGen5,
        }
        this.$store.dispatch('commission/editCommissions', { form }).then(() => {
          this.toast('Edit Commissions', 'BellIcon', 'You changed commission percentages successfully', 'success')
        }).catch(error => {
          this.toast('Edit Commissions', 'BellIcon', error.response.data.messages.error, 'danger')
        })
      }
    },
    getPlanCommissions() {
      this.$store.dispatch('commission/getPlanCommissions').then().catch(error => {
        this.toast('Get Plan Commissions', 'BellIcon', error.response.data.messages.error, 'danger')
      })
    },
  },
}
