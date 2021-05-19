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
    formData.append('verify_code', form.verifyCode)
    formData.append('confirm_password', form.confirmPassword)
    return formData
  },
  getResendConfirmationForm(form) {
    const formData = new FormData()
    formData.append('firstname', form.firstname)
    formData.append('lastname', form.lastname)
    formData.append('email', form.email)
    formData.append('verify_code', form.verifyCode)
    return formData
  },
  getVerifyCodeForm(form) {
    const formData = new FormData()
    formData.append('verify_code', form.verifyCode)
    return formData
  },
}
