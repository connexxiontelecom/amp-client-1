export default {
  getAddPlanForm(form) {
    const formData = new FormData()
    formData.append('product_id', form.productID)
    formData.append('plan_name', form.planName)
    formData.append('plan_price', form.planPrice)
    formData.append('plan_link', form.planLink)
    formData.append('plan_commission', form.planCommission)
    formData.append('plan_slug', form.planSlug)
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
    formData.append('plan_slug', form.planSlug)
    return formData
  },
  getDeletePlanForm(form) {
    const formData = new FormData()
    formData.append('product_id', form.productID)
    formData.append('product_plan_id', form.productPlanID)
    return formData
  },
  getAddProductForm(form) {
    const formData = new FormData()
    formData.append('name', form.name)
    formData.append('url', form.url)
    formData.append('category', form.category)
    formData.append('logo', form.logo)
    formData.append('description', form.description)
    return formData
  },
  getUpdateProductForm(form) {
    const formData = new FormData()
    formData.append('product_id', form.productID)
    formData.append('name', form.name)
    formData.append('url', form.url)
    formData.append('category', form.category)
    formData.append('description', form.description)
    return formData
  },
  getUpdateProductLogoForm(form) {
    const formData = new FormData()
    formData.append('product_id', form.productID)
    formData.append('logo', form.logo)
    return formData
  },
  getRemoveProductLogo(form) {
    const formData = new FormData()
    console.log(form.productID)
    formData.append('product_id', form.productID)
    return formData
  },
}
