export default {
  getUpdateAccountForm(form) {
    const formData = new FormData()
    formData.append('affiliate_id', form.affiliateID)
    formData.append('email', form.email)
    formData.append('firstname', form.firstname)
    formData.append('lastname', form.lastname)
    return formData
  },
  getAddAffiliateForm(form) {
    const formData = new FormData()
    formData.append('firstname', form.firstname)
    formData.append('lastname', form.lastname)
    formData.append('username', form.username)
    formData.append('email', form.email)
    formData.append('password', form.password)
    formData.append('verify_code', form.verifyCode)
    formData.append('upstream_affiliate_id', form.upstreamAffiliate)
    return formData
  },
  getUpdateAffiliateAccountForm(form) {
    const formData = new FormData()
    formData.append('affiliate_id', form.affiliateID)
    formData.append('email', form.email)
    formData.append('firstname', form.firstname)
    formData.append('lastname', form.lastname)
    formData.append('upstream_affiliate_id', form.upstreamAffiliate)
    return formData
  },
  getUpdateAffiliateInfoForm(form) {
    const formData = new FormData()
    formData.append('affiliate_info_id', form.affiliateInfoID)
    formData.append('affiliate_id', form.affiliateID)
    formData.append('phone', form.mobile)
    formData.append('dob', form.dob)
    formData.append('gender', form.gender)
    formData.append('address', form.address)
    formData.append('country', form.country)
    return formData
  },
  getUpdateAffiliateBankForm(form) {
    const formData = new FormData()
    formData.append('bank_id', form.bankID)
    formData.append('affiliate_id', form.affiliateID)
    formData.append('bank_name', form.bankName)
    formData.append('bank_acc_name', form.bankAccountName)
    formData.append('bank_acc_number', form.bankAccountNumber)
    return formData
  },
  getChangePasswordForm(form) {
    const formData = new FormData()
    formData.append('affiliate_id', form.affiliateID)
    formData.append('password', form.password)
    formData.append('new_password', form.newPassword)
    formData.append('confirm_password', form.confirmPassword)
    return formData
  },
  getUpdateProfilePictureForm(form) {
    const formData = new FormData()
    formData.append('affiliate_id', form.affiliateID)
    formData.append('profile_pic', form.profilePicture)
    return formData
  },
  getRemoveProfilePictureForm(form) {
    const formData = new FormData()
    formData.append('affiliate_id', form.affiliateID)
    return formData
  },
}
