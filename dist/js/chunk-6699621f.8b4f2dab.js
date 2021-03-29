(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6699621f"],{"3b00":function(t,e,a){"use strict";a("a2c5")},"404f":function(t,e,a){},"4a79":function(t,e,a){"use strict";a("404f")},a2c5:function(t,e,a){},e13e:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-card",{staticClass:"mb-0",attrs:{"no-body":""}},[a("div",{staticClass:"m-2"},[a("b-row",[a("b-col",{staticClass:"d-flex align-items-center justify-content-start mb-1 mb-md-0",attrs:{cols:"12",md:"6"}},[a("label",[t._v("Show")]),a("v-select",{staticClass:"per-page-selector d-inline-block mx-50",attrs:{options:t.perPageOptions,clearable:!1},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),a("label",[t._v("entries")])],1),a("b-col",{attrs:{cols:"12",md:"6"}},[a("div",{staticClass:"d-flex align-items-center justify-content-end"},[a("b-form-input",{staticClass:"d-inline-block mr-1",attrs:{placeholder:"Search..."},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),t.isAdmin?a("b-button",{attrs:{variant:"primary",to:{name:"add-product"}}},[a("span",{staticClass:"text-nowrap"},[t._v("Add Product")])]):t._e()],1)])],1)],1),a("b-table",{staticClass:"position-relative mb-0",attrs:{items:t.products,fields:t.fields,"per-page":t.perPage,"current-page":t.currentPage,filter:t.filter,striped:"",responsive:"","show-empty":""},on:{filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(name)",fn:function(e){return[a("b-media",{attrs:{"vertical-align":"center"},scopedSlots:t._u([{key:"aside",fn:function(){return[a("b-avatar",{attrs:{size:"32",rounded:"",src:t.api.endpoint+"/uploads/products/"+e.item.logo,text:t.avatarText(""+e.item.name),variant:"light-info"},on:{click:function(a){return t.getProduct(e.item.product_id)}}})]},proxy:!0}],null,!0)},[a("b-link",{staticClass:"font-weight-bold d-block text-nowrap text-uppercase",on:{click:function(a){return t.getProduct(e.item.product_id)}}},[t._v(" "+t._s(e.item.name)+" ")]),a("small",{staticClass:"text-muted"},[t._v(t._s(e.item.category))])],1)]}},{key:"cell(url)",fn:function(e){return[a("a",{attrs:{href:e.item.url,target:"_blank"}},[t._v(" "+t._s(e.item.url)+" ")])]}},{key:"cell(num_plans)",fn:function(e){return[t._v(" "+t._s(e.item.num_plans)+" plans ")]}},{key:"cell(status)",fn:function(e){return["1"===e.item.status?a("b-badge",{staticClass:"text-capitalize",attrs:{pill:"",variant:"light-success"}},[t._v(" Active ")]):t._e(),"0"===e.item.status?a("b-badge",{staticClass:"text-capitalize",attrs:{pill:"",variant:"light-danger"}},[t._v(" Inactive ")]):t._e()]}},{key:"cell(created_at)",fn:function(e){return[t._v(" "+t._s(new Date(e.item.created_at).toDateString())+" ")]}},{key:"cell(actions)",fn:function(e){return[a("div",{staticClass:"text-nowrap"},[a("feather-icon",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"View",expression:"'View'",modifiers:{hover:!0,top:!0}}],staticClass:"cursor-pointer mx-1",attrs:{id:"view-"+e.item.product_id,icon:"EyeIcon",size:"16"},on:{click:function(a){return t.getProduct(e.item.product_id)}}})],1)]}}])}),a("div",{staticClass:"mx-2 mb-2 mt-1"},[a("b-row",[a("b-col",{staticClass:"d-flex align-items-center justify-content-center justify-content-sm-start",attrs:{cols:"12",sm:"6"}},[a("span",{staticClass:"text-muted"},[t._v("There are "+t._s(t.numProducts)+" products")])]),a("b-col",{staticClass:"d-flex align-items-center justify-content-center justify-content-sm-end",attrs:{cols:"12",sm:"6"}},[a("b-pagination",{staticClass:"mb-0 mt-1 mt-sm-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)],1)],1)},n=[],s=a("5530"),c=a("205f"),r=a("34b6"),l=a("e8a3"),i=a("e98b"),u=a("a15b"),d=a("b28b"),p=a("29a1"),m=a("4797"),f=a("1947"),g=a("26d2"),h=a("aa59"),v=a("2616"),P=a("4a7a"),b=a.n(P),y=a("e350"),I=a("0e20"),k=a("3b53"),w=a("2f62"),B={components:{BCard:c["a"],BMedia:r["a"],BAvatar:l["a"],BBadge:i["a"],BRow:u["a"],BCol:d["a"],BTable:p["a"],BFormInput:m["a"],BButton:f["a"],BPagination:g["a"],BLink:h["a"],vSelect:b.a},directives:{"b-tooltip":v["a"]},mixins:[y["a"]],data:function(){return{api:k["a"],perPage:5,perPageOptions:[5,10,25,100],filter:null,totalRows:this.$store.getters["product/getNumProducts"],currentPage:1,avatarText:I["a"],fields:[{key:"name",sortable:!0},{key:"url",sortable:!0},{key:"num_plans",label:"product plans",sortable:!0},{key:"status"},{key:"created_at",label:"Added",sortable:!0},{key:"actions",thStyle:{width:"10%"}}]}},computed:Object(s["a"])({},Object(w["b"])({products:"product/getAllProducts",numProducts:"product/getNumProducts",isAdmin:"auth/getIsAdmin"})),created:function(){this.getProducts()},methods:{onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}}},C=B,_=(a("3b00"),a("4a79"),a("2877")),x=Object(_["a"])(C,o,n,!1,null,"4544eb38",null);e["default"]=x.exports},e350:function(t,e,a){"use strict";a("a4d3"),a("e01a"),a("b0c0");e["a"]={methods:{getProducts:function(){var t=this;this.$store.dispatch("product/getProducts").then().catch((function(e){t.toast("Get All Products Attempt","BellIcon",e.response.data.messages.error,"danger")}))},addProduct:function(){var t=this;this.$refs.addProductValidation.validate().then((function(e){if(e){var a={name:t.name,url:t.productUrl,category:t.category.value,description:t.description,logo:t.logo};t.$store.dispatch("product/addProduct",{form:a}).then((function(){t.$router.push({name:"products"}).then((function(){t.toast("Add Product","BellIcon","You have successfully added the product","success")}))})).catch((function(e){t.toast("Add Product Attempt","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Add Product Attempt","BellIcon","You must fill in all form fields correctly","warning")}))},updateProduct:function(){var t=this;this.$refs.updateProductValidation.validate().then((function(e){if(e){var a={productID:t.productID,name:t.name,url:t.productUrl,category:t.category.value,description:t.description,logo:t.logo};void 0===a.category&&(a.category=t.category),t.$store.dispatch("product/updateProduct",{form:a}).then((function(){t.toast("Update Product","BellIcon","You have successfully updated product","success"),t.$nextTick((function(){t.$refs["update-product-modal"].toggle("#edit-product-btn")}))})).catch((function(e){t.toast("Update Product Attempt","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Update Product Attempt","BellIcon","You must fill in all form fields correctly","warning")}))},updateProductLogo:function(t){var e=this,a={productID:this.productID,logo:t};this.$store.dispatch("product/updateLogo",{form:a}).then((function(){e.toast("Update Logo","BellIcon","You have successfully updated the product logo","success")})).catch((function(t){e.toast("Update Logo Attempt","BellIcon",t.response.data.messages.error,"danger")}))},removeProductLogo:function(){var t=this,e={productID:this.productID};this.$store.dispatch("product/removeLogo",{form:e}).then((function(){t.toast("Remove Logo","BellIcon","You have successfully removed the product logo","success")})).catch((function(e){t.toast("Remove Logo Attempt","BellIcon",e.response.data.messages.error,"danger")}))},getProduct:function(t){var e=this;this.$store.dispatch("product/getProduct",{productID:t}).then((function(){e.$router.push({name:"view-product",params:{productID:t}}).catch()})).catch((function(t){e.toast("Get Product Attempt","BellIcon",t.response.data.messages.error,"danger")}))},addPlan:function(){var t=this;this.$refs.addPlanValidation.validate().then((function(e){if(e){var a={productID:t.productID,planName:t.planName,planPrice:t.planPrice,planLink:t.planLink,planCommission:t.planCommission,planSlug:t.planSlug};t.$store.dispatch("product/addPlan",{form:a}).then((function(){t.toast("Add Product Plan","BellIcon","You have successfully added the product plan","success"),t.$nextTick((function(){t.$refs["add-plan-modal"].toggle("#add-btn")})),t.planName=null,t.planPrice=null,t.planLink=null,t.planCommission=null,t.planSlug=null})).catch((function(e){t.toast("Add Product Plan Attempt","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Add Product Plan Attempt","BellIcon","You must fill in all form fields correctly","warning")}))},editPlan:function(){var t=this;this.$refs.editPlanValidation.validate().then((function(e){if(e){var a={productID:t.productIDView,productPlanID:t.productPlanID,planName:t.planNameView,planPrice:t.planPriceView,planLink:t.planLinkView,planCommission:t.planCommissionView,planSlug:t.planSlugView};t.$store.dispatch("product/editPlan",{form:a}).then((function(){t.toast("Update Product Plan","BellIcon","You have successfully updated the product plan","success"),t.$nextTick((function(){t.$refs["edit-plan-modal"].toggle("#edit-btn")})),t.planName=null,t.planPrice=null,t.planLink=null,t.planCommission=null,t.planSlug=null})).catch((function(e){t.toast("Update Product Plan Attempt","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Update Product Plan Attempt","BellIcon","You must fill in all form fields correctly","warning")}))},deletePlan:function(){var t=this;this.$bvModal.msgBoxConfirm("Please confirm that you want to delete this product plan",{title:"Delete Plan",size:"sm",okVariant:"primary",okTitle:"Confirm",cancelTitle:"Cancel",cancelVariant:"outline-secondary",hideHeaderClose:!1,centered:!0}).then((function(e){if(e){var a={productID:t.productID,productPlanID:t.productPlanID};t.$store.dispatch("product/deletePlan",{form:a}).then((function(){t.toast("Delete Plan","BellIcon","You have successfully deleted the product plan","success")})).catch((function(e){t.toast("Delete Plan Attempt","BellIcon",e.response.data.messages.error,"danger")}))}}))},toggleStatus:function(t,e){var a=this;"1"===t?this.$bvModal.msgBoxConfirm("Please confirm that you want to deactivate this product?",{title:"Deactivate Product",size:"sm",okVariant:"primary",okTitle:"Confirm",cancelTitle:"Cancel",cancelVariant:"outline-secondary",hideHeaderClose:!1,centered:!0}).then((function(t){t&&a.$store.dispatch("product/toggleProductStatus",{productID:e}).then((function(){a.toast("Deactivate Product","BellIcon","The product was deactivated successfully","success")})).catch((function(t){a.toast("Deactivate Product","BellIcon",t.response.data.messages.error,"danger")}))})):"0"===t&&this.$bvModal.msgBoxConfirm("Please confirm that you want to reactivate this product?",{title:"Reactivate Product",size:"sm",okVariant:"primary",okTitle:"Confirm",cancelTitle:"Cancel",cancelVariant:"outline-secondary",hideHeaderClose:!1,centered:!0}).then((function(t){t&&a.$store.dispatch("product/toggleProductStatus",{productID:e}).then((function(){a.toast("Reactivate Product","BellIcon","The product was reactivated successfully","success")})).catch((function(t){a.toast("Reactivate Product","BellIcon",t.response.data.messages.error,"danger")}))}))}}}}}]);
//# sourceMappingURL=chunk-6699621f.8b4f2dab.js.map