(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bfa65d7"],{"17ad":function(t,e,a){},"26d2":function(t,e,a){"use strict";a.d(e,"a",(function(){return J}));var i,n=a("2b0e"),s=a("c637"),r=a("0056"),l=a("a723"),o=a("6d40"),c=a("906c"),f=a("7b1e"),u=a("a8c8"),d=a("3a58"),m=a("d82f"),b=a("cf75"),p=a("9bfa"),h=a("9b76"),g=a("2326"),v=a("6b77"),O=a("58f2"),j=a("fa73"),P=a("686b"),A=a("8c18"),k=a("aa59");function w(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function y(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?w(Object(a),!0).forEach((function(e){I(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function I(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var x=Object(O["a"])("value",{type:l["h"],defaultValue:null,validator:function(t){return!(!Object(f["f"])(t)&&Object(d["c"])(t,0)<1)||(Object(P["a"])('"v-model" value must be a number greater than "0"',s["ab"]),!1)}}),B=x.mixin,C=x.props,D=x.prop,$=x.event,N=3,T=5,_=function(t,e){return Object(g["c"])(e,(function(e,a){return{number:t+a,classes:null}}))},S=function(t){var e=Object(d["c"])(t)||1;return e<1?T:e},L=function(t,e){var a=Object(d["c"])(t)||1;return a>e?e:a<1?1:a},U=function(t){if(t.keyCode===p["j"])return Object(v["f"])(t,{immediatePropagation:!0}),t.currentTarget.click(),!1},z=Object(b["d"])(Object(m["m"])(y(y({},C),{},{align:Object(b["c"])(l["s"],"left"),ariaLabel:Object(b["c"])(l["s"],"Pagination"),disabled:Object(b["c"])(l["f"],!1),ellipsisClass:Object(b["c"])(l["d"]),ellipsisText:Object(b["c"])(l["s"],"…"),firstClass:Object(b["c"])(l["d"]),firstNumber:Object(b["c"])(l["f"],!1),firstText:Object(b["c"])(l["s"],"«"),hideEllipsis:Object(b["c"])(l["f"],!1),hideGotoEndButtons:Object(b["c"])(l["f"],!1),labelFirstPage:Object(b["c"])(l["s"],"Go to first page"),labelLastPage:Object(b["c"])(l["s"],"Go to last page"),labelNextPage:Object(b["c"])(l["s"],"Go to next page"),labelPage:Object(b["c"])(l["k"],"Go to page"),labelPrevPage:Object(b["c"])(l["s"],"Go to previous page"),lastClass:Object(b["c"])(l["d"]),lastNumber:Object(b["c"])(l["f"],!1),lastText:Object(b["c"])(l["s"],"»"),limit:Object(b["c"])(l["n"],T,(function(t){return!(Object(d["c"])(t,0)<1)||(Object(P["a"])('Prop "limit" must be a number greater than "0"',s["ab"]),!1)})),nextClass:Object(b["c"])(l["d"]),nextText:Object(b["c"])(l["s"],"›"),pageClass:Object(b["c"])(l["d"]),pills:Object(b["c"])(l["f"],!1),prevClass:Object(b["c"])(l["d"]),prevText:Object(b["c"])(l["s"],"‹"),size:Object(b["c"])(l["s"])})),"pagination"),E=n["default"].extend({mixins:[B,A["a"]],props:z,data:function(){var t=Object(d["c"])(this[D],0);return t=t>0?t:-1,{currentPage:t,localNumberOfPages:1,localLimit:T}},computed:{btnSize:function(){var t=this.size;return t?"pagination-".concat(t):""},alignment:function(){var t=this.align;return"center"===t?"justify-content-center":"end"===t||"right"===t?"justify-content-end":"fill"===t?"text-center":""},styleClass:function(){return this.pills?"b-pagination-pills":""},computedCurrentPage:function(){return L(this.currentPage,this.localNumberOfPages)},paginationParams:function(){var t=this.localLimit,e=this.localNumberOfPages,a=this.computedCurrentPage,i=this.hideEllipsis,n=this.firstNumber,s=this.lastNumber,r=!1,l=!1,o=t,c=1;e<=t?o=e:a<t-1&&t>N?(i&&!s||(l=!0,o=t-(n?0:1)),o=Object(u["d"])(o,t)):e-a+2<t&&t>N?(i&&!n||(r=!0,o=t-(s?0:1)),c=e-o+1):(t>N&&(o=t-(i?0:2),r=!(i&&!n),l=!(i&&!s)),c=a-Object(u["b"])(o/2)),c<1?(c=1,r=!1):c>e-o&&(c=e-o+1,l=!1),r&&n&&c<4&&(o+=2,c=1,r=!1);var f=c+o-1;return l&&s&&f>e-3&&(o+=f===e-2?2:3,l=!1),t<=N&&(n&&1===c?o=Object(u["d"])(o+1,e,t+1):s&&e===c+o-1&&(c=Object(u["c"])(c-1,1),o=Object(u["d"])(e-c+1,e,t+1))),o=Object(u["d"])(o,e-c+1),{showFirstDots:r,showLastDots:l,numberOfLinks:o,startNumber:c}},pageList:function(){var t=this.paginationParams,e=t.numberOfLinks,a=t.startNumber,i=this.computedCurrentPage,n=_(a,e);if(n.length>3){var s=i-a,r="bv-d-xs-down-none";if(0===s)for(var l=3;l<n.length;l++)n[l].classes=r;else if(s===n.length-1)for(var o=0;o<n.length-3;o++)n[o].classes=r;else{for(var c=0;c<s-1;c++)n[c].classes=r;for(var f=n.length-1;f>s+1;f--)n[f].classes=r}}return n}},watch:(i={},I(i,D,(function(t,e){t!==e&&(this.currentPage=L(t,this.localNumberOfPages))})),I(i,"currentPage",(function(t,e){t!==e&&this.$emit($,t>0?t:null)})),I(i,"limit",(function(t,e){t!==e&&(this.localLimit=S(t))})),i),created:function(){var t=this;this.localLimit=S(this.limit),this.$nextTick((function(){t.currentPage=t.currentPage>t.localNumberOfPages?t.localNumberOfPages:t.currentPage}))},methods:{handleKeyNav:function(t){var e=t.keyCode,a=t.shiftKey;this.isNav||(e===p["f"]||e===p["k"]?(Object(v["f"])(t,{propagation:!1}),a?this.focusFirst():this.focusPrev()):e!==p["i"]&&e!==p["a"]||(Object(v["f"])(t,{propagation:!1}),a?this.focusLast():this.focusNext()))},getButtons:function(){return Object(c["D"])("button.page-link, a.page-link",this.$el).filter((function(t){return Object(c["u"])(t)}))},focusCurrent:function(){var t=this;this.$nextTick((function(){var e=t.getButtons().find((function(e){return Object(d["c"])(Object(c["h"])(e,"aria-posinset"),0)===t.computedCurrentPage}));Object(c["d"])(e)||t.focusFirst()}))},focusFirst:function(){var t=this;this.$nextTick((function(){var e=t.getButtons().find((function(t){return!Object(c["r"])(t)}));Object(c["d"])(e)}))},focusLast:function(){var t=this;this.$nextTick((function(){var e=t.getButtons().reverse().find((function(t){return!Object(c["r"])(t)}));Object(c["d"])(e)}))},focusPrev:function(){var t=this;this.$nextTick((function(){var e=t.getButtons(),a=e.indexOf(Object(c["g"])());a>0&&!Object(c["r"])(e[a-1])&&Object(c["d"])(e[a-1])}))},focusNext:function(){var t=this;this.$nextTick((function(){var e=t.getButtons(),a=e.indexOf(Object(c["g"])());a<e.length-1&&!Object(c["r"])(e[a+1])&&Object(c["d"])(e[a+1])}))}},render:function(t){var e=this,a=this.disabled,i=this.labelPage,n=this.ariaLabel,s=this.isNav,r=this.localNumberOfPages,l=this.computedCurrentPage,o=this.pageList.map((function(t){return t.number})),c=this.paginationParams,u=c.showFirstDots,d=c.showLastDots,m="fill"===this.align,p=[],g=function(t){return t===l},v=this.currentPage<1,O=function(i,n,l,o,c,f,u){var d=a||g(f)||v||i<1||i>r,b=i<1?1:i>r?r:i,p={disabled:d,page:b,index:b-1},h=e.normalizeSlot(l,p)||Object(j["g"])(o)||t(),O=t(d?"span":s?k["a"]:"button",{staticClass:"page-link",class:{"flex-grow-1":!s&&!d&&m},props:d||!s?{}:e.linkProps(i),attrs:{role:s?null:"menuitem",type:s||d?null:"button",tabindex:d||s?null:"-1","aria-label":n,"aria-controls":e.ariaControls||null,"aria-disabled":d?"true":null},on:d?{}:{"!click":function(t){e.onClick(t,i)},keydown:U}},[h]);return t("li",{key:u,staticClass:"page-item",class:[{disabled:d,"flex-fill":m,"d-flex":m&&!s&&!d},c],attrs:{role:s?null:"presentation","aria-hidden":d?"true":null}},[O])},P=function(a){return t("li",{staticClass:"page-item",class:["disabled","bv-d-xs-down-none",m?"flex-fill":"",e.ellipsisClass],attrs:{role:"separator"},key:"ellipsis-".concat(a?"last":"first")},[t("span",{staticClass:"page-link"},[e.normalizeSlot(h["k"])||Object(j["g"])(e.ellipsisText)||t()])])},A=function(n,l){var o=n.number,c=g(o)&&!v,u=a?null:c||v&&0===l?"0":"-1",d={role:s?null:"menuitemradio",type:s||a?null:"button","aria-disabled":a?"true":null,"aria-controls":e.ariaControls||null,"aria-label":Object(b["b"])(i)?i(o):"".concat(Object(f["e"])(i)?i():i," ").concat(o),"aria-checked":s?null:c?"true":"false","aria-current":s&&c?"page":null,"aria-posinset":s?null:o,"aria-setsize":s?null:r,tabindex:s?null:u},p=Object(j["g"])(e.makePage(o)),O={page:o,index:o-1,content:p,active:c,disabled:a},P=t(a?"span":s?k["a"]:"button",{props:a||!s?{}:e.linkProps(o),staticClass:"page-link",class:{"flex-grow-1":!s&&!a&&m},attrs:d,on:a?{}:{"!click":function(t){e.onClick(t,o)},keydown:U}},[e.normalizeSlot(h["C"],O)||p]);return t("li",{staticClass:"page-item",class:[{disabled:a,active:c,"flex-fill":m,"d-flex":m&&!s&&!a},n.classes,e.pageClass],attrs:{role:s?null:"presentation"},key:"page-".concat(o)},[P])},w=t();this.firstNumber||this.hideGotoEndButtons||(w=O(1,this.labelFirstPage,h["n"],this.firstText,this.firstClass,1,"pagination-goto-first")),p.push(w),p.push(O(l-1,this.labelPrevPage,h["E"],this.prevText,this.prevClass,1,"pagination-goto-prev")),p.push(this.firstNumber&&1!==o[0]?A({number:1},0):t()),p.push(u?P(!1):t()),this.pageList.forEach((function(t,a){var i=u&&e.firstNumber&&1!==o[0]?1:0;p.push(A(t,a+i))})),p.push(d?P(!0):t()),p.push(this.lastNumber&&o[o.length-1]!==r?A({number:r},-1):t()),p.push(O(l+1,this.labelNextPage,h["B"],this.nextText,this.nextClass,r,"pagination-goto-next"));var y=t();this.lastNumber||this.hideGotoEndButtons||(y=O(r,this.labelLastPage,h["t"],this.lastText,this.lastClass,r,"pagination-goto-last")),p.push(y);var I=t("ul",{staticClass:"pagination",class:["b-pagination",this.btnSize,this.alignment,this.styleClass],attrs:{role:s?null:"menubar","aria-disabled":a?"true":"false","aria-label":s?null:n||null},on:s?{}:{keydown:this.handleKeyNav},ref:"ul"},p);return s?t("nav",{attrs:{"aria-disabled":a?"true":null,"aria-hidden":a?"true":"false","aria-label":s&&n||null}},[I]):I}});function V(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function Y(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?V(Object(a),!0).forEach((function(e){R(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):V(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function R(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var G=20,F=0,K=function(t){return Object(u["c"])(Object(d["c"])(t)||G,1)},M=function(t){return Object(u["c"])(Object(d["c"])(t)||F,0)},H=Object(b["d"])(Object(m["m"])(Y(Y({},z),{},{ariaControls:Object(b["c"])(l["s"]),perPage:Object(b["c"])(l["n"],G),totalRows:Object(b["c"])(l["n"],F)})),s["ab"]),J=n["default"].extend({name:s["ab"],mixins:[E],props:H,computed:{numberOfPages:function(){var t=Object(u["a"])(M(this.totalRows)/K(this.perPage));return t<1?1:t},pageSizeNumberOfPages:function(){return{perPage:K(this.perPage),totalRows:M(this.totalRows),numberOfPages:this.numberOfPages}}},watch:{pageSizeNumberOfPages:function(t,e){Object(f["o"])(e)||(t.perPage!==e.perPage&&t.totalRows===e.totalRows||t.numberOfPages!==e.numberOfPages&&this.currentPage>t.numberOfPages)&&(this.currentPage=1),this.localNumberOfPages=t.numberOfPages}},created:function(){var t=this;this.localNumberOfPages=this.numberOfPages;var e=Object(d["c"])(this[D],0);e>0?this.currentPage=e:this.$nextTick((function(){t.currentPage=0}))},methods:{onClick:function(t,e){var a=this;if(e!==this.currentPage){var i=t.target,n=new o["a"](r["E"],{cancelable:!0,vueTarget:this,target:i});this.$emit(n.type,n,e),n.defaultPrevented||(this.currentPage=e,this.$emit(r["d"],this.currentPage),this.$nextTick((function(){Object(c["u"])(i)&&a.$el.contains(i)?Object(c["d"])(i):a.focusCurrent()})))}},makePage:function(t){return t},linkProps:function(){return{}}}})},"37a4":function(t,e,a){"use strict";e["a"]={methods:{getAffiliates:function(){var t=this;this.$store.dispatch("affiliate/getAffiliates").then().catch((function(e){t.toast("Get All Affiliates","BellIcon",e.response.data.messages.error,"danger")}))},addAffiliate:function(){var t=this;this.$refs.addAffiliateValidation.validate().then((function(e){if(e){var a=0;a=null!==t.upstreamAffiliate?t.upstreamAffiliate.value:0;var i={firstname:t.firstname,lastname:t.lastname,username:t.username,email:t.emailAddr,password:t.password,upstreamAffiliate:a};t.$store.dispatch("affiliate/addAffiliate",{form:i}).then((function(){t.$router.push({name:"affiliate-accounts"}).then((function(){t.toast("Add Affiliate","BellIcon","The affiliate was added successfully","success")}))})).catch((function(e){t.toast("Add Admin Attempt","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Add Affiliate Attempt","BellIcon","You must fill in all form fields correctly","warning")}))},getAffiliate:function(t){var e=this;this.$store.dispatch("affiliate/getAffiliate",{affiliateID:t}).then((function(){e.$router.push({name:"view-affiliate",params:{affiliateID:t}}).catch()})).catch((function(t){e.toast("Get Affiliate","BellIcon",t.response.data.messages.error,"danger")}))},toggleStatus:function(t,e){var a=this;"1"===t?this.$bvModal.msgBoxConfirm("Please confirm that you want to deactivate this account?",{title:"Deactivate Account",size:"sm",okVariant:"primary",okTitle:"Confirm",cancelTitle:"Cancel",cancelVariant:"outline-secondary",hideHeaderClose:!1,centered:!0}).then((function(t){t&&a.$store.dispatch("affiliate/toggleAffiliateStatus",{affiliateID:e}).then((function(){a.toast("Deactivate Account","BellIcon","The affiliate was deactivated successfully","success")})).catch((function(t){a.toast("Deactivate Account","BellIcon",t.response.data.messages.error,"danger")}))})):"0"===t&&this.$bvModal.msgBoxConfirm("Please confirm that you want to reactivate this account?",{title:"Reactivate Account",size:"sm",okVariant:"primary",okTitle:"Confirm",cancelTitle:"Cancel",cancelVariant:"outline-secondary",hideHeaderClose:!1,centered:!0}).then((function(t){t&&a.$store.dispatch("affiliate/toggleAffiliateStatus",{affiliateID:e}).then((function(){a.toast("Reactivate Account","BellIcon","The affiliate was reactivated successfully","success")})).catch((function(t){a.toast("Reactivate Account","BellIcon",t.response.data.messages.error,"danger")}))}))},updateAffiliateAccount:function(){var t=this;this.$refs.updateAffiliateAccountValidation.validate().then((function(e){if(e){var a=0;a=null!==t.upstreamAffiliate?t.upstreamAffiliate.value:0;var i={affiliateID:t.affiliateID,firstname:t.firstname,lastname:t.lastname,email:t.emailAddr,upstreamAffiliate:a};t.$store.dispatch("affiliate/updateAffiliateAccount",{form:i}).then((function(){t.toast("Update Affiliate Account","BellIcon","You have successfully updated the affiliate account","success"),t.$nextTick((function(){t.$refs["update-affiliate-modal"].toggle("#edit-affiliate-btn")}))})).catch((function(e){t.toast("Update Affiliate Attempt","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Update Affiliate Attempt","BellIcon","You must fill in all form fields correctly","warning")}))},updateAffiliateInfo:function(){var t=this;this.$refs.updateAffiliateInformationValidation.validate().then((function(e){if(e){var a={affiliateID:t.affiliateID,affiliateInfoID:t.affiliateInfoID,dob:t.dob,mobile:t.mobile,gender:t.gender,address:t.address,country:t.country};t.$store.dispatch("affiliate/updateAffiliateInformation",{form:a}).then((function(){t.toast("Update Affiliate Information","BellIcon","You have successfully updated the affiliate information","success"),t.$nextTick((function(){t.$refs["update-info-modal"].toggle("#edit-info-btn")}))})).catch((function(e){t.toast("Update Affiliate Info Attempt","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Update Affiliate Info Attempt","BellIcon","You must fill in all form fields correctly","warning")}))},updateAffiliateBank:function(){var t=this;this.$refs.updateAffiliateBankValidation.validate().then((function(e){if(e){var a={affiliateID:t.affiliateID,bankID:t.bankID,bankName:t.bankName,bankAccountName:t.bankAccountName,bankAccountNumber:t.bankAccountNumber};t.$store.dispatch("affiliate/updateAffiliateBank",{form:a}).then((function(){t.toast("Update Affiliate Bank","BellIcon","You have successfully updated the affiliate bank","success"),t.$nextTick((function(){t.$refs["update-bank-modal"].toggle("#edit-bank-btn")}))})).catch((function(e){t.toast("Update Affiliate Bank Attempt","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Update Affiliate Bank Attempt","BellIcon","You must fill in all form fields correctly","warning")}))},updateAccount:function(){var t=this;this.$refs.editAccountValidation.validate().then((function(e){if(e){var a={affiliateID:t.affiliateID,firstname:t.firstname,lastname:t.lastname,email:t.emailAddr};t.$store.dispatch("affiliate/updateAccount",{form:a}).then((function(){t.toast("Update Account","BellIcon"," You have successfully updated your account","success")})).catch((function(e){t.toast("Update Account","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Update Account Attempt","BellIcon","You must fill in all form fields correctly","warning")}))},updateInfo:function(){var t=this;this.$refs.editInfoValidation.validate().then((function(e){if(e){var a={affiliateID:t.affiliateID,affiliateInfoID:t.affiliateInfoID,dob:t.dob,mobile:t.mobile,gender:t.gender,address:t.address,country:t.country};t.$store.dispatch("affiliate/updateInfo",{form:a}).then((function(){t.toast("Update Information","BellIcon","You have successfully updated your information","success")})).catch((function(e){t.toast("Update Information","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Update Information Attempt","BellIcon","You must fill in all form fields correctly","warning")}))},updateBank:function(){var t=this;this.$refs.editBankValidation.validate().then((function(e){if(e){var a={affiliateID:t.affiliateID,bankID:t.bankID,bankName:t.bankName,bankAccountName:t.bankAccountName,bankAccountNumber:t.bankAccountNumber};t.$store.dispatch("affiliate/updateBank",{form:a}).then((function(){t.toast("Update Bank","BellIcon","You have successfully updated your bank","success")})).catch((function(e){t.toast("Update Bank","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Update Bank Attempt","BellIcon","You must fill in all form fields correctly","warning")}))},getDownstreamAffiliates:function(t){var e=this;this.$store.dispatch("affiliate/getDownstreamAffiliates",{affiliateID:t}).then().catch((function(t){e.toast("Get Downstream Affiliates","BellIcon",t.response.data.messages.error,"danger")}))},addDownstreamAffiliate:function(){var t=this;this.$refs.addDownstreamAffiliateValidation.validate().then((function(e){if(e){var a={firstname:t.firstname,lastname:t.lastname,username:t.username,email:t.emailAddr,password:t.password,upstreamAffiliate:t.upstreamAffiliate};t.$store.dispatch("affiliate/addDownstreamAffiliate",{form:a}).then((function(){t.toast("Add Affiliate","BellIcon","You have successfully added an affiliate","success")})).catch((function(e){t.toast("Add Affiliate","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Add Affiliate","BellIcon","You must fill in all form fields correctly","warning")}))},getDownstreamAffiliate:function(t){var e=this;this.$store.dispatch("affiliate/getAffiliate",{affiliateID:t}).then((function(){e.$router.push({name:"view-downstream-affiliate",params:{affiliateID:t}}).catch()})).catch((function(t){e.toast("Get Affiliate","BellIcon",t.response.data.messages.error,"danger")}))},changePassword:function(){var t=this;this.$refs.changePasswordValidation.validate().then((function(e){if(e){var a={affiliateID:t.affiliateID,password:t.password,newPassword:t.newPassword,confirmPassword:t.confirmPassword};t.$store.dispatch("affiliate/changePassword",{form:a}).then((function(e){t.$router.push({name:"login"}).then((function(){t.$store.dispatch("auth/logout").then((function(){t.toast("Change Password","LogOutIcon",e.data,"success")}))}))})).catch((function(e){t.toast("Change Password","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Change Password","BellIcon","You must fill in all form fields correctly","warning")}))}}}},"3fba":function(t,e,a){"use strict";a("ade4")},"6edc":function(t,e,a){"use strict";a("17ad")},"8cf0":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-card",{staticClass:"mb-0",attrs:{"no-body":""}},[a("div",{staticClass:"m-2"},[a("b-row",[a("b-col",{staticClass:"d-flex align-items-center justify-content-start mb-1 mb-md-0",attrs:{cols:"12",md:"6"}},[a("label",[t._v("Show")]),a("v-select",{staticClass:"per-page-selector d-inline-block mx-50",attrs:{options:t.perPageOptions,clearable:!1},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),a("label",[t._v("entries")])],1),a("b-col",{attrs:{cols:"12",md:"6"}},[a("div",{staticClass:"d-flex align-items-center justify-content-end"},[a("b-form-input",{staticClass:"d-inline-block mr-1",attrs:{placeholder:"Search..."},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),a("b-button",{attrs:{variant:"primary",to:{name:"add-affiliate"}}},[a("span",{staticClass:"text-nowrap"},[t._v("Add Affiliate")])])],1)])],1)],1),a("b-table",{staticClass:"position-relative mb-0",attrs:{items:t.affiliates,fields:t.fields,"per-page":t.perPage,"current-page":t.currentPage,filter:t.filter,striped:"",responsive:"","show-empty":""},on:{filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(username)",fn:function(e){return[a("b-media",{attrs:{"vertical-align":"center"},scopedSlots:t._u([{key:"aside",fn:function(){return[a("b-avatar",{attrs:{size:"32",rounded:"",src:"",text:t.avatarText(e.item.firstname+" "+e.item.lastname),variant:"light-success"},on:{click:function(a){return t.getAffiliate(e.item.affiliate_id)}}})]},proxy:!0}],null,!0)},[a("b-link",{staticClass:"font-weight-bold d-block text-nowrap",on:{click:function(a){return t.getAffiliate(e.item.affiliate_id)}}},[t._v(" "+t._s(e.item.firstname+" "+e.item.lastname)+" ")]),a("small",{staticClass:"text-muted"},[t._v("@"+t._s(e.item.username))])],1)]}},{key:"cell(status)",fn:function(e){return["1"===e.item.status?a("b-badge",{staticClass:"text-capitalize",attrs:{pill:"",variant:"light-success"}},[t._v(" Active ")]):t._e(),"0"===e.item.status?a("b-badge",{staticClass:"text-capitalize",attrs:{pill:"",variant:"light-danger"}},[t._v(" Inactive ")]):t._e()]}},{key:"cell(created_at)",fn:function(e){return[t._v(" "+t._s(new Date(e.item.created_at).toDateString())+" ")]}},{key:"cell(actions)",fn:function(e){return[a("div",{staticClass:"text-nowrap"},[a("feather-icon",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"View",expression:"'View'",modifiers:{hover:!0,top:!0}}],staticClass:"cursor-pointer mx-1",attrs:{id:"view-"+e.item.affiliate_id,icon:"EyeIcon",size:"16"},on:{click:function(a){return t.getAffiliate(e.item.affiliate_id)}}}),a("feather-icon",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Edit",expression:"'Edit'",modifiers:{hover:!0,top:!0}}],staticClass:"cursor-pointer",attrs:{id:"edit-"+e.item.affiliate_id,icon:"EditIcon",size:"16"}})],1)]}}])}),a("div",{staticClass:"mx-2 mb-2 mt-1"},[a("b-row",[a("b-col",{staticClass:"d-flex align-items-center justify-content-center justify-content-sm-start",attrs:{cols:"12",sm:"6"}},[a("span",{staticClass:"text-muted"},[t._v("There are "+t._s(t.numAffiliates)+" affiliate accounts")])]),a("b-col",{staticClass:"d-flex align-items-center justify-content-center justify-content-sm-end",attrs:{cols:"12",sm:"6"}},[a("b-pagination",{staticClass:"mb-0 mt-1 mt-sm-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)],1)],1)},n=[],s=a("5530"),r=a("205f"),l=a("34b6"),o=a("e8a3"),c=a("e98b"),f=a("a15b"),u=a("b28b"),d=a("29a1"),m=a("4797"),b=a("1947"),p=a("26d2"),h=a("aa59"),g=a("2616"),v=a("4a7a"),O=a.n(v),j=a("37a4"),P=a("0e20"),A=a("2f62"),k={components:{BCard:r["a"],BMedia:l["a"],BAvatar:o["a"],BBadge:c["a"],BRow:f["a"],BCol:u["a"],BTable:d["a"],BFormInput:m["a"],BButton:b["a"],BPagination:p["a"],BLink:h["a"],vSelect:O.a},directives:{"b-tooltip":g["a"]},mixins:[j["a"]],data:function(){return{perPage:5,perPageOptions:[5,10,25,100],filter:null,totalRows:this.$store.getters["affiliate/getNumAffiliates"],currentPage:1,avatarText:P["a"],fields:[{key:"username",label:"user",sortable:!0},{key:"email",sortable:!0},{key:"ref_code",sortable:!0},{key:"upstream_affiliate",sortable:!0},{key:"status",label:"status"},{key:"created_at",label:"Added",sortable:!0},{key:"actions",thStyle:{width:"10%"}}]}},computed:Object(s["a"])({},Object(A["b"])({affiliates:"affiliate/getAllAffiliates",numAffiliates:"affiliate/getNumAffiliates"})),created:function(){this.getAffiliates()},methods:{onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}}},w=k,y=(a("6edc"),a("3fba"),a("2877")),I=Object(y["a"])(w,i,n,!1,null,"50fd21ea",null);e["default"]=I.exports},ade4:function(t,e,a){}}]);
//# sourceMappingURL=chunk-6bfa65d7.d328c678.js.map