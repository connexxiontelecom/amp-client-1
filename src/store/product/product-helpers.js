export default {
  getAddPlanForm(form) {
    const formData = new FormData()
    formData.append('product_id', form.productID)
    formData.append('plan_name', form.planName)
    formData.append('plan_price', form.planPrice)
    formData.append('plan_link', form.planLink)
    formData.append('plan_commission', form.planCommission)
    return formData
  },
  getEditPlanForm(form) {
    const formData = new FormData()
    formData.append('product_id', form.productID)
    formData.append('product_plan_id', form.productPlanID)
    formData.append('plan_name', form.planName)
    formData.append('plan_price', form.planPrice)
    formData.append('plan_link', form.planLink)
    formData.append('plan_commission', form.planCommission)
    return formData
  },
  getAddProductForm(form) {
    const formData = new FormData()
    formData.append('name', form.name)
    formData.append('url', form.url)
    formData.append('category', form.category)
    formData.append('description', form.description)
    return formData
  },
}
