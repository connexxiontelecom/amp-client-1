export default {
  getAddAdminForm(form) {
    const formData = new FormData()
    formData.append('firstname', form.firstname)
    formData.append('lastname', form.lastname)
    formData.append('username', form.username)
    formData.append('password', form.password)
    // eslint-disable-next-line no-unused-expressions
    form.status ? formData.append('status', '1') : formData.append('status', '0')
    return formData
  },
  getUpdateStatusForm(form) {
    const formData = new FormData()
    formData.append('admin_id', form.adminID)
    // eslint-disable-next-line no-unused-expressions
    form.status ? formData.append('status', '0') : formData.append('status', '1')
    return formData
  },
}
