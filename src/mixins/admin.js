export default {
  methods: {
    getAdmins() {
      this.$store.dispatch('admin/getAdmins').then().catch(error => {
        this.toast('Get All Admins', 'BellIcon', error.response.data.messages.error, 'danger')
      })
    },
    addAdmin() {
      const form = {
        firstname: this.firstname,
        lastname: this.lastname,
        username: this.username,
        password: this.password,
        status: this.status,
        roles: this.roles,
      }
      this.$store.dispatch('admin/addAdmin', { form }).then(response => {
        this.$router.push({ name: 'admin-accounts' }).then(() => {
          this.toast('Add Admin', 'BellIcon', response.data, 'success')
        })
      }).catch(error => {
        this.toast('Add Admin Attempt', 'BellIcon', error.response.data.messages.error, 'danger')
      })
    },
    getAdmin(adminID) {
      this.$store.dispatch('admin/getAdmin', { adminID }).then(response => {
        console.log(response.data)
        this.$router.push({ name: 'view-admin', params: { adminID } }).catch()
      }).catch(error => {
        this.toast('Get Affiliate', 'BellIcon', error.response.data.messages.error, 'danger')
      })
    },
  },
}
