export default {
  getEditCommissionsForm(form) {
    const formData = new FormData()
    formData.append('commission_id', form.commissionID)
    formData.append('num_gens', form.commissionNumGens)
    formData.append('gen_1', form.commissionGen1)
    formData.append('gen_2', form.commissionGen2)
    formData.append('gen_3', form.commissionGen3)
    formData.append('gen_4', form.commissionGen4)
    formData.append('gen_5', form.commissionGen5)
    return formData
  },
}
