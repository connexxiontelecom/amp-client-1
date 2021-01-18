export default {
  getLoginForm(form) {
    const formData = new FormData()
    formData.append('username', form.username)
    formData.append('password', form.password)
    return formData
  },
  getRegisterForm(form) {
    const formData = new FormData()
    formData.append('firstname', form.firstname)
    formData.append('lastname', form.lastname)
    formData.append('username', form.username)
    formData.append('email', form.email)
    formData.append('password', form.password)
    formData.append('confirm_password', form.confirmPassword)
    return formData
  },
}
