(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47f7416a"],{"0e1a":function(t,e,a){},"0e20":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return n}));a("4160"),a("a15b9"),a("d81d"),a("fb6a"),a("b680"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("1276"),a("159b"),a("ca6e");var i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if(!t)return"";var a=t.toString(),i=a.split(e),n=[];return i.forEach((function(t){var e=t.charAt(0).toUpperCase()+t.slice(1);n.push(e)})),n.join(" ")},n=function(t){if(!t)return"";var e=t.split(" ");return e.map((function(t){return t.charAt(0).toUpperCase()})).join("")}},1148:function(t,e,a){"use strict";var i=a("a691"),n=a("1d80");t.exports="".repeat||function(t){var e=String(n(this)),a="",s=i(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(a+=e);return a}},1276:function(t,e,a){"use strict";var i=a("d784"),n=a("44e7"),s=a("825a"),o=a("1d80"),r=a("4840"),c=a("8aa5"),l=a("50c4"),u=a("14c3"),f=a("9263"),d=a("d039"),m=[].push,h=Math.min,p=4294967295,g=!d((function(){return!RegExp(p,"y")}));i("split",2,(function(t,e,a){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var i=String(o(this)),s=void 0===a?p:a>>>0;if(0===s)return[];if(void 0===t)return[i];if(!n(t))return e.call(i,t,s);var r,c,l,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=new RegExp(t.source,d+"g");while(r=f.call(g,i)){if(c=g.lastIndex,c>h&&(u.push(i.slice(h,r.index)),r.length>1&&r.index<i.length&&m.apply(u,r.slice(1)),l=r[0].length,h=c,u.length>=s))break;g.lastIndex===r.index&&g.lastIndex++}return h===i.length?!l&&g.test("")||u.push(""):u.push(i.slice(h)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var n=o(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,n,a):i.call(String(n),e,a)},function(t,n){var o=a(i,t,this,n,i!==e);if(o.done)return o.value;var f=s(t),d=String(this),m=r(f,RegExp),v=f.unicode,A=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(g?"y":"g"),I=new m(g?f:"^(?:"+f.source+")",A),b=void 0===n?p:n>>>0;if(0===b)return[];if(0===d.length)return null===u(I,d)?[d]:[];var y=0,P=0,w=[];while(P<d.length){I.lastIndex=g?P:0;var C,$=u(I,g?d:d.slice(P));if(null===$||(C=h(l(I.lastIndex+(g?0:P)),d.length))===y)P=c(d,P,v);else{if(w.push(d.slice(y,P)),w.length===b)return w;for(var _=1;_<=$.length-1;_++)if(w.push($[_]),w.length===b)return w;P=y=C}}return w.push(d.slice(y)),w}]}),!g)},"37a4":function(t,e,a){"use strict";e["a"]={methods:{getAffiliates:function(){var t=this;this.$store.dispatch("affiliate/getAffiliates").then().catch((function(e){t.toast("Get All Affiliates","BellIcon",e.response.data.messages.error,"danger")}))},addAffiliate:function(){var t=this;this.$refs.addAffiliateValidation.validate().then((function(e){if(e){var a=0;a=null!==t.upstreamAffiliate?t.upstreamAffiliate.value:0;var i={firstname:t.firstname,lastname:t.lastname,username:t.username,email:t.emailAddr,password:t.password,verifyCode:t.generateVerifyCode(10),upstreamAffiliate:a};t.$store.dispatch("affiliate/addAffiliate",{form:i}).then((function(){t.toast("Add Affiliate","BellIcon","The affiliate was added successfully","success")})).catch((function(e){t.toast("Add Admin Attempt","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Add Affiliate Attempt","BellIcon","You must fill in all form fields correctly","warning")}))},getAffiliate:function(t){var e=this;this.$store.dispatch("affiliate/getAffiliate",{affiliateID:t}).then((function(){e.$router.push({name:"view-affiliate",params:{affiliateID:t}}).catch()})).catch((function(t){e.toast("Get Affiliate","BellIcon",t.response.data.messages.error,"danger")}))},toggleStatus:function(t,e){var a=this;"1"===t?this.$bvModal.msgBoxConfirm("Please confirm that you want to deactivate this account?",{title:"Deactivate Account",size:"sm",okVariant:"primary",okTitle:"Confirm",cancelTitle:"Cancel",cancelVariant:"outline-secondary",hideHeaderClose:!1,centered:!0}).then((function(t){t&&a.$store.dispatch("affiliate/toggleAffiliateStatus",{affiliateID:e}).then((function(){a.toast("Deactivate Account","BellIcon","The affiliate was deactivated successfully","success")})).catch((function(t){a.toast("Deactivate Account","BellIcon",t.response.data.messages.error,"danger")}))})):"0"===t&&this.$bvModal.msgBoxConfirm("Please confirm that you want to reactivate this account?",{title:"Reactivate Account",size:"sm",okVariant:"primary",okTitle:"Confirm",cancelTitle:"Cancel",cancelVariant:"outline-secondary",hideHeaderClose:!1,centered:!0}).then((function(t){t&&a.$store.dispatch("affiliate/toggleAffiliateStatus",{affiliateID:e}).then((function(){a.toast("Reactivate Account","BellIcon","The affiliate was reactivated successfully","success")})).catch((function(t){a.toast("Reactivate Account","BellIcon",t.response.data.messages.error,"danger")}))}))},updateAffiliateAccount:function(){var t=this;this.$refs.updateAffiliateAccountValidation.validate().then((function(e){if(e){var a=0;a=null!==t.upstreamAffiliate?t.upstreamAffiliate.value:0;var i={affiliateID:t.affiliateID,firstname:t.firstname,lastname:t.lastname,email:t.emailAddr,upstreamAffiliate:a};t.$store.dispatch("affiliate/updateAffiliateAccount",{form:i}).then((function(){t.toast("Update Affiliate Account","BellIcon","You have successfully updated the affiliate account","success"),t.$nextTick((function(){t.$refs["update-affiliate-modal"].toggle("#edit-affiliate-btn")}))})).catch((function(e){t.toast("Update Affiliate Attempt","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Update Affiliate Attempt","BellIcon","You must fill in all form fields correctly","warning")}))},updateAffiliateInfo:function(){var t=this;this.$refs.updateAffiliateInformationValidation.validate().then((function(e){if(e){var a={affiliateID:t.affiliateID,affiliateInfoID:t.affiliateInfoID,dob:t.dob,mobile:t.mobile,gender:t.gender,address:t.address,country:t.country};t.$store.dispatch("affiliate/updateAffiliateInformation",{form:a}).then((function(){t.toast("Update Affiliate Information","BellIcon","You have successfully updated the affiliate information","success"),t.$nextTick((function(){t.$refs["update-info-modal"].toggle("#edit-info-btn")}))})).catch((function(e){t.toast("Update Affiliate Info Attempt","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Update Affiliate Info Attempt","BellIcon","You must fill in all form fields correctly","warning")}))},updateAffiliateBank:function(){var t=this;this.$refs.updateAffiliateBankValidation.validate().then((function(e){if(e){var a={affiliateID:t.affiliateID,bankID:t.bankID,bankName:t.bankName,bankAccountName:t.bankAccountName,bankAccountNumber:t.bankAccountNumber};t.$store.dispatch("affiliate/updateAffiliateBank",{form:a}).then((function(){t.toast("Update Affiliate Bank","BellIcon","You have successfully updated the affiliate bank","success"),t.$nextTick((function(){t.$refs["update-bank-modal"].toggle("#edit-bank-btn")}))})).catch((function(e){t.toast("Update Affiliate Bank Attempt","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Update Affiliate Bank Attempt","BellIcon","You must fill in all form fields correctly","warning")}))},updateAccount:function(){var t=this;this.$refs.editAccountValidation.validate().then((function(e){if(e){var a={affiliateID:t.affiliateID,firstname:t.firstname,lastname:t.lastname,email:t.emailAddr};t.$store.dispatch("affiliate/updateAccount",{form:a}).then((function(){t.toast("Update Account","BellIcon"," You have successfully updated your account","success")})).catch((function(e){t.toast("Update Account","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Update Account Attempt","BellIcon","You must fill in all form fields correctly","warning")}))},updateInfo:function(){var t=this;this.$refs.editInfoValidation.validate().then((function(e){if(e){var a={affiliateID:t.affiliateID,affiliateInfoID:t.affiliateInfoID,dob:t.dob,mobile:t.mobile,gender:t.gender,address:t.address,country:t.country};t.$store.dispatch("affiliate/updateInfo",{form:a}).then((function(){t.toast("Update Information","BellIcon","You have successfully updated your information","success")})).catch((function(e){t.toast("Update Information","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Update Information Attempt","BellIcon","You must fill in all form fields correctly","warning")}))},updateBank:function(){var t=this;this.$refs.editBankValidation.validate().then((function(e){if(e){var a={affiliateID:t.affiliateID,bankID:t.bankID,bankName:t.bankName,bankAccountName:t.bankAccountName,bankAccountNumber:t.bankAccountNumber};t.$store.dispatch("affiliate/updateBank",{form:a}).then((function(){t.toast("Update Bank","BellIcon","You have successfully updated your bank","success")})).catch((function(e){t.toast("Update Bank","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Update Bank Attempt","BellIcon","You must fill in all form fields correctly","warning")}))},getDownstreamAffiliates:function(t){var e=this;this.$store.dispatch("affiliate/getDownstreamAffiliates",{affiliateID:t}).then().catch((function(t){e.toast("Get Downstream Affiliates","BellIcon",t.response.data.messages.error,"danger")}))},addDownstreamAffiliate:function(){var t=this;this.$refs.addDownstreamAffiliateValidation.validate().then((function(e){if(e){var a={firstname:t.firstname,lastname:t.lastname,username:t.username,email:t.emailAddr,password:t.password,upstreamAffiliate:t.upstreamAffiliate};t.$store.dispatch("affiliate/addDownstreamAffiliate",{form:a}).then((function(){t.toast("Add Affiliate","BellIcon","You have successfully added an affiliate","success")})).catch((function(e){t.toast("Add Affiliate","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Add Affiliate","BellIcon","You must fill in all form fields correctly","warning")}))},getDownstreamAffiliate:function(t){var e=this;this.$store.dispatch("affiliate/getAffiliate",{affiliateID:t}).then((function(){e.$router.push({name:"view-downstream-affiliate",params:{affiliateID:t}}).catch()})).catch((function(t){e.toast("Get Affiliate","BellIcon",t.response.data.messages.error,"danger")}))},changePassword:function(){var t=this;this.$refs.changePasswordValidation.validate().then((function(e){if(e){var a={affiliateID:t.affiliateID,password:t.password,newPassword:t.newPassword,confirmPassword:t.confirmPassword};t.$store.dispatch("affiliate/changePassword",{form:a}).then((function(e){t.$router.push({name:"login"}).then((function(){t.$store.dispatch("auth/logout").then((function(){t.toast("Change Password","LogOutIcon",e.data,"success")}))}))})).catch((function(e){t.toast("Change Password","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Change Password","BellIcon","You must fill in all form fields correctly","warning")}))},updateProfilePicture:function(t){var e=this,a={affiliateID:this.affiliateID,profilePicture:t};this.$store.dispatch("affiliate/updateProfilePicture",{form:a}).then((function(){e.toast("Update Profile Picture","BellIcon","You have successfully updated the profile picture","success")})).catch((function(t){e.toast("Update Profile Picture Attempt","BellIcon",t.response.data.messages.error,"danger")}))},removeProfilePicture:function(){var t=this,e={affiliateID:this.affiliateID};this.$store.dispatch("affiliate/removeProfilePicture",{form:e}).then((function(){t.toast("Remove Profile Picture","BellIcon","You have successfully removed the profile picture","success")})).catch((function(e){t.toast("Remove Profile Picture Attempt","BellIcon",e.response.data.messages.error,"danger")}))}}}},"408a":function(t,e,a){var i=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},"44e7":function(t,e,a){var i=a("861d"),n=a("c6b6"),s=a("b622"),o=s("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==n(t))}},5319:function(t,e,a){"use strict";var i=a("d784"),n=a("825a"),s=a("7b0b"),o=a("50c4"),r=a("a691"),c=a("1d80"),l=a("8aa5"),u=a("14c3"),f=Math.max,d=Math.min,m=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};i("replace",2,(function(t,e,a,i){var v=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,A=i.REPLACE_KEEPS_$0,I=v?"$":"$0";return[function(a,i){var n=c(this),s=void 0==a?void 0:a[t];return void 0!==s?s.call(a,n,i):e.call(String(n),a,i)},function(t,i){if(!v&&A||"string"===typeof i&&-1===i.indexOf(I)){var s=a(e,t,this,i);if(s.done)return s.value}var c=n(t),m=String(this),h="function"===typeof i;h||(i=String(i));var p=c.global;if(p){var y=c.unicode;c.lastIndex=0}var P=[];while(1){var w=u(c,m);if(null===w)break;if(P.push(w),!p)break;var C=String(w[0]);""===C&&(c.lastIndex=l(m,o(c.lastIndex),y))}for(var $="",_=0,k=0;k<P.length;k++){w=P[k];for(var B=String(w[0]),D=f(d(r(w.index),m.length),0),x=[],S=1;S<w.length;S++)x.push(g(w[S]));var G=w.groups;if(h){var U=[B].concat(x,D,m);void 0!==G&&U.push(G);var V=String(i.apply(void 0,U))}else V=b(B,m,D,x,G,i);D>=_&&($+=m.slice(_,D)+V,_=D+B.length)}return $+m.slice(_)}];function b(t,a,i,n,o,r){var c=i+t.length,l=n.length,u=p;return void 0!==o&&(o=s(o),u=h),e.call(r,u,(function(e,s){var r;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,i);case"'":return a.slice(c);case"<":r=o[s.slice(1,-1)];break;default:var u=+s;if(0===u)return e;if(u>l){var f=m(u/10);return 0===f?e:f<=l?void 0===n[f-1]?s.charAt(1):n[f-1]+s.charAt(1):e}r=n[u-1]}return void 0===r?"":r}))}}))},"5d23":function(t,e,a){},7504:function(t,e,a){"use strict";a("0e1a")},a15b9:function(t,e,a){"use strict";var i=a("23e7"),n=a("44ad"),s=a("fc6a"),o=a("a640"),r=[].join,c=n!=Object,l=o("join",",");i({target:"Array",proto:!0,forced:c||!l},{join:function(t){return r.call(s(this),void 0===t?",":t)}})},a4f4:function(t,e,a){"use strict";e["a"]={methods:{getCommissions:function(){var t=this;this.$store.dispatch("commission/getAllCommissions").then().catch((function(e){t.toast("Get All Commissions","BellIcon",e.response.data.messages.error,"danger")}))},setCurrentGeneration:function(t){var e=this;this.$store.dispatch("commission/setCurrentGeneration",{commissionID:t}).then((function(){e.toast("Set Current Generation","BellIcon","You changed the current generation successfully","success")})).catch((function(t){e.toast("Set Current Generation","BellIcon",t.response.data.messages.error,"danger")}))},submitEdit:function(){var t=this,e=0;switch(this.commissionNumGens){case 1:e=parseInt(this.commissionGen1)+parseInt(this.commissionGen2);break;case 2:e=parseInt(this.commissionGen1)+parseInt(this.commissionGen2)+parseInt(this.commissionGen3);break;case 3:e=parseInt(this.commissionGen1)+parseInt(this.commissionGen2)+parseInt(this.commissionGen3)+parseInt(this.commissionGen4);break;case 4:e=parseInt(this.commissionGen1)+parseInt(this.commissionGen2)+parseInt(this.commissionGen3)+parseInt(this.commissionGen4)+parseInt(this.commissionGen5);break}if(100!==e)this.toast("Edit Commissions","BellIcon","The sum of the commissions must equal 100. Currently, it is ".concat(e),"warning");else{var a={commissionID:this.commissionID,commissionNumGens:this.commissionNumGens,commissionGen1:this.commissionGen1,commissionGen2:this.commissionGen2,commissionGen3:this.commissionGen3,commissionGen4:this.commissionGen4,commissionGen5:this.commissionGen5};this.$store.dispatch("commission/editCommissions",{form:a}).then((function(){t.toast("Edit Commissions","BellIcon","You changed commission percentages successfully","success")})).catch((function(e){t.toast("Edit Commissions","BellIcon",e.response.data.messages.error,"danger")}))}},getPlanCommissions:function(){var t=this;this.$store.dispatch("commission/getPlanCommissions").then().catch((function(e){t.toast("Get Plan Commissions","BellIcon",e.response.data.messages.error,"danger")}))}}}},b075:function(t,e,a){"use strict";e["a"]={methods:{getAdmins:function(){var t=this;this.$store.dispatch("admin/getAdmins").then().catch((function(e){t.toast("Get All Admins","BellIcon",e.response.data.messages.error,"danger")}))},addAdmin:function(){var t=this,e={firstname:this.firstname,lastname:this.lastname,username:this.username,password:this.password,status:this.status,roles:this.roles};this.$store.dispatch("admin/addAdmin",{form:e}).then((function(e){t.$router.push({name:"admin-accounts"}).then((function(){t.toast("Add Admin","BellIcon",e.data,"success")}))})).catch((function(e){t.toast("Add Admin Attempt","BellIcon",e.response.data.messages.error,"danger")}))},updateAdmin:function(){var t=this;this.$refs.editAdminValidation.validate().then((function(e){if(e){var a={adminID:t.adminID,firstname:t.firstname,lastname:t.lastname,roles:t.roles};t.$store.dispatch("admin/updateAdmin",{form:a}).then((function(e){t.$router.push({name:"admin-accounts"}).then((function(){t.toast("Update Admin","BellIcon",e.data,"success")}))})).catch((function(e){t.toast("Update Admin","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Edit Admin","BellIcon","You must fill in all form fields correctly","warning")}))},getAdmin:function(t){var e=this;this.$store.dispatch("admin/getAdmin",{adminID:t}).then((function(){e.$router.push({name:"view-admin",params:{adminID:t}}).catch()})).catch((function(t){e.toast("Get Affiliate","BellIcon",t.response.data.messages.error,"danger")}))},editAdmin:function(t){var e=this;this.$store.dispatch("admin/getAdmin",{adminID:t}).then((function(){e.$router.push({name:"edit-admin",params:{adminID:t}}).catch()})).catch((function(t){e.toast("Get Affiliate","BellIcon",t.response.data.messages.error,"danger")}))}}}},b3d7:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isAdmin?a("admin-home"):t.isAffiliate?a("affiliate-home"):t._e()],1)},n=[],s=a("5530"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isAffiliate?a("div",[a("h1",{staticClass:"font-weight-normal"},[t._v(" "+t._s(t.greeting)+", "+t._s(t.user.firstname)+" "+t._s(t.user.lastname)+" 🎉 ")]),a("h6",{staticClass:"font-weight-light mb-1"},[t._v(" Pick up where you left off and view your latest activities ")]),a("h5",{staticClass:"mt-3 mb-2"},[t._v(" Get started with AMP ")]),a("b-row",[a("b-col",{attrs:{md:"5",lg:"5",xl:"3"}},[a("b-card",[a("h5",{staticClass:"mb-1"},[t._v(" Manage sales "),a("span",{staticClass:"float-right"},[a("b-badge",{attrs:{variant:"light-primary"}},[t._v(" "+t._s(t.numProductSales)+" total sales ")])],1)]),a("b-card-text",{staticClass:"font-small-4"},[a("h3",{staticClass:"mt-1 mb-1"},[t._v(" ₦ "+t._s(t.monthlyCommission.toLocaleString())+" ")]),t._v(" Your commission earnings for "),a("strong",[t._v(t._s((new Date).toLocaleString("default",{month:"long"})))])]),a("b-link",{attrs:{to:"/product-sales"}},[t._v(" Product Sales "),a("feather-icon",{attrs:{size:"16",icon:"ArrowRightIcon"}})],1)],1)],1),a("b-col",{attrs:{md:"5",lg:"5",xl:"3"}},[a("b-card",[a("h5",{staticClass:"mb-1"},[t._v(" Verify your account "),a("span",{staticClass:"float-right ml-auto"},["1"===t.user.profile?a("b-badge",{attrs:{variant:"light-success"}},[a("feather-icon",{staticClass:"mr-25",attrs:{icon:"CheckIcon"}}),t._v(" verified ")],1):"0"===t.user.profile?a("b-badge",{attrs:{variant:"light-warning"}},[a("feather-icon",{staticClass:"mr-25",attrs:{icon:"XIcon"}}),t._v(" unverified ")],1):t._e()],1)]),a("b-card-text",{staticClass:"font-small-4"},[t._v(" Confirm your basic details, verify your email address, and enter your bank information. ")]),a("b-link",{attrs:{to:"/account"}},[t._v(" Account "),a("feather-icon",{attrs:{size:"16",icon:"ArrowRightIcon"}})],1)],1)],1),a("b-col",{attrs:{md:"5",lg:"5",xl:"3"}},[a("b-card",[a("h5",{staticClass:"mb-1"},[t._v(" Manage affiliates "),a("span",{staticClass:"float-right"},[a("b-badge",{attrs:{variant:"light-primary"}},[t._v(" "+t._s(t.numDownstreamAffiliates)+" affiliates ")])],1)]),a("b-card-text",{staticClass:"font-small-4"},[t._v(" View information on your downstream affiliates and add new affiliates under you. ")]),a("b-link",{attrs:{to:"/affiliates"}},[t._v(" Affiliates "),a("feather-icon",{attrs:{size:"16",icon:"ArrowRightIcon"}})],1)],1)],1),a("b-col",{attrs:{md:"5",lg:"5",xl:"3"}},[a("b-card",[a("h5",{staticClass:"mb-1"},[t._v(" View products "),a("span",{staticClass:"float-right"},[a("b-badge",{attrs:{variant:"light-primary"}},[t._v(" "+t._s(t.numProducts)+" products ")])],1)]),a("b-card-text",{staticClass:"font-small-4"},[t._v(" View active Connexxion Telecom products and copy your referral link for your clients. ")]),a("b-link",{attrs:{to:"/products"}},[t._v(" Products "),a("feather-icon",{attrs:{size:"16",icon:"ArrowRightIcon"}})],1)],1)],1)],1)],1):t.isAdmin?a("div",[a("b-jumbotron",{staticClass:"px-lg-5",scopedSlots:t._u([{key:"header",fn:function(){return[a("span",{staticClass:"font-large-3"},[t._v(" AMP Admin ")])]},proxy:!0},{key:"lead",fn:function(){return[t._v(" "+t._s(t.greeting)+" "+t._s(t.user.firstname)+" "+t._s(t.user.lastname)+", pick up where you left off managing the AMP system. ")]},proxy:!0}])},[a("b-button",{attrs:{variant:"primary",to:"/product-sales"}},[t._v(" Product Sales ")])],1),a("h5",{staticClass:"mt-3 mb-2"},[t._v(" Configure AMP ")]),a("b-row",[a("b-col",{attrs:{md:"5",lg:"5",xl:"3"}},[a("b-card",[a("h5",[t._v("Manage products")]),a("b-card-text",{staticClass:"font-small-4"},[t._v(" The products are central to AMP. Add and manage products to the AMP system. ")]),a("b-link",{attrs:{to:"/products"}},[t._v(" Products "),a("feather-icon",{attrs:{size:"16",icon:"ArrowRightIcon"}})],1)],1)],1),a("b-col",{attrs:{md:"5",lg:"5",xl:"3"}},[a("b-card",[a("h5",[t._v("Manage Affiliates")]),a("b-card-text",{staticClass:"font-small-4"},[t._v(" View, manage, and add information for the affiliate marketers on the AMP system. ")]),a("b-link",{attrs:{to:"/affiliate-accounts"}},[t._v(" Affiliate Accounts "),a("feather-icon",{attrs:{size:"16",icon:"ArrowRightIcon"}})],1)],1)],1),a("b-col",{attrs:{md:"5",lg:"5",xl:"3"}},[a("b-card",[a("h5",[t._v(" Manage admins ")]),a("b-card-text",{staticClass:"font-small-4"},[t._v(" Add and manage admin accounts including permissions on the AMP system. ")]),a("b-link",{attrs:{to:"/admin-accounts"}},[t._v(" Admin Accounts "),a("feather-icon",{attrs:{size:"16",icon:"ArrowRightIcon"}})],1)],1)],1),a("b-col",{attrs:{md:"5",lg:"5",xl:"3"}},[a("b-card",[a("h5",[t._v("Manage Commission")]),a("b-card-text",{staticClass:"font-small-4"},[t._v(" View and manage how commissions are shared among the affiliates on the AMP system. ")]),a("b-link",{attrs:{to:"/commission"}},[t._v(" Commission "),a("feather-icon",{attrs:{size:"16",icon:"ArrowRightIcon"}})],1)],1)],1)],1)],1):t._e()])},r=[],c=(a("99af"),a("b075")),l=a("e350"),u=a("37a4"),f=a("a4f4"),d=a("d16f"),m=a("2f62"),h=a("0e20"),p=a("3b53"),g={mixins:[c["a"],l["a"],u["a"],f["a"],d["a"]],data:function(){return{greeting:null,avatarText:h["a"],api:p["a"],referralLink:null}},computed:Object(s["a"])({},Object(m["b"])({user:"auth/getUser",isAdmin:"auth/getIsAdmin",isAffiliate:"auth/getIsAffiliate",numProducts:"product/getNumProducts",numProductSales:"productSales/getNumProductSales",numDownstreamAffiliates:"affiliate/getNumDownstreamAffiliates",monthlyCommission:"productSales/getMonthlyCommission"})),created:function(){if(this.generateGreetings(),this.$store.getters["auth/getIsAdmin"])this.getAdmins(),this.getAffiliates(),this.getPlanCommissions(),this.getCommissions();else if(this.$store.getters["auth/getIsAffiliate"]){var t=this.$store.getters["auth/getUser"].ref_code,e=this.$store.getters["auth/getUser"].affiliate_id;this.getAffiliateProducts(),this.getMonthlyCommission(t),this.getAffiliateProductSales(t),this.getDownstreamAffiliates(e)}},methods:{generateGreetings:function(){var t=new Date,e=t.getHours();e<12?this.greeting="Good morning":e>=12&&e<=17?this.greeting="Good afternoon":e>=17&&e<=24&&(this.greeting="Good evening")},copyReferralLink:function(t){this.referralLink="".concat(t.registration_link,"/").concat(this.$store.getters["auth/getUser"].ref_code),this.$copyText(this.referralLink).then().catch(),this.toast("Copied Referral Link!","CopyIcon","","success")}}},v=g,A=(a("c730"),a("2877")),I=Object(A["a"])(v,o,r,!1,null,null,null),b=I.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"font-weight-normal"},[t._v(" "+t._s(t.greeting)+", "+t._s(t.user.firstname)+" "+t._s(t.user.lastname)+" 🎉 ")]),a("h6",{staticClass:"font-weight-light mb-1"},[t._v(" Pick up where you left off and view your latest activities ")]),a("h5",{staticClass:"mt-3 mb-2"},[t._v(" Get started with AMP ")]),a("b-row",[a("b-col",{attrs:{md:"5",lg:"5",xl:"3"}},[a("b-card",[a("h5",{staticClass:"mb-1"},[t._v(" Manage sales "),a("span",{staticClass:"float-right"},[a("b-badge",{attrs:{variant:"light-primary"}},[t._v(" "+t._s(t.numProductSales)+" total sales ")])],1)]),a("b-card-text",{staticClass:"font-small-4"},[a("h3",{staticClass:"mt-1 mb-1"},[t._v(" ₦ "+t._s(t.monthlyCommission.toLocaleString())+" ")]),t._v(" Your commission earnings for "),a("strong",[t._v(t._s((new Date).toLocaleString("default",{month:"long"})))])]),a("b-link",{attrs:{to:"/product-sales"}},[t._v(" Product Sales "),a("feather-icon",{attrs:{size:"16",icon:"ArrowRightIcon"}})],1)],1)],1),a("b-col",{attrs:{md:"5",lg:"5",xl:"3"}},[a("b-card",[a("h5",{staticClass:"mb-1"},[t._v(" Verify your account "),a("span",{staticClass:"float-right ml-auto"},["1"===t.user.profile?a("b-badge",{attrs:{variant:"light-success"}},[a("feather-icon",{staticClass:"mr-25",attrs:{icon:"CheckIcon"}}),t._v(" verified ")],1):"0"===t.user.profile?a("b-badge",{attrs:{variant:"light-warning"}},[a("feather-icon",{staticClass:"mr-25",attrs:{icon:"XIcon"}}),t._v(" unverified ")],1):t._e()],1)]),a("b-card-text",{staticClass:"font-small-4"},[t._v(" Confirm your basic details, verify your email address, and enter your bank information. ")]),a("b-link",{attrs:{to:"/account"}},[t._v(" Account "),a("feather-icon",{attrs:{size:"16",icon:"ArrowRightIcon"}})],1)],1)],1),a("b-col",{attrs:{md:"5",lg:"5",xl:"3"}},[a("b-card",[a("h5",{staticClass:"mb-1"},[t._v(" Manage affiliates "),a("span",{staticClass:"float-right"},[a("b-badge",{attrs:{variant:"light-primary"}},[t._v(" "+t._s(t.numDownstreamAffiliates)+" affiliates ")])],1)]),a("b-card-text",{staticClass:"font-small-4"},[t._v(" View information on your downstream affiliates and add new affiliates under you. ")]),a("b-link",{attrs:{to:"/affiliates"}},[t._v(" Affiliates "),a("feather-icon",{attrs:{size:"16",icon:"ArrowRightIcon"}})],1)],1)],1),a("b-col",{attrs:{md:"5",lg:"5",xl:"3"}},[a("b-card",[a("h5",{staticClass:"mb-1"},[t._v(" View products "),a("span",{staticClass:"float-right"},[a("b-badge",{attrs:{variant:"light-primary"}},[t._v(" "+t._s(t.numProducts)+" products ")])],1)]),a("b-card-text",{staticClass:"font-small-4"},[t._v(" View active Connexxion Telecom products and copy your referral link for your clients. ")]),a("b-link",{attrs:{to:"/products"}},[t._v(" Products "),a("feather-icon",{attrs:{size:"16",icon:"ArrowRightIcon"}})],1)],1)],1)],1)],1)},P=[],w={mixins:[c["a"],l["a"],u["a"],f["a"],d["a"]],data:function(){return{greeting:null}},computed:Object(s["a"])({},Object(m["b"])({user:"auth/getUser",numProducts:"product/getNumProducts",numProductSales:"productSales/getNumProductSales",numDownstreamAffiliates:"affiliate/getNumDownstreamAffiliates",monthlyCommission:"productSales/getMonthlyCommission"})),created:function(){this.generateGreetings();var t=this.$store.getters["auth/getUser"].ref_code,e=this.$store.getters["auth/getUser"].affiliate_id;this.getAffiliateProducts(),this.getMonthlyCommission(t),this.getAffiliateProductSales(t),this.getDownstreamAffiliates(e)},methods:{generateGreetings:function(){var t=new Date,e=t.getHours();e<12?this.greeting="Good morning":e>=12&&e<=17?this.greeting="Good afternoon":e>=17&&e<=24&&(this.greeting="Good evening")}}},C=w,$=(a("7504"),Object(A["a"])(C,y,P,!1,null,null,null)),_=$.exports,k={components:{AdminHome:b,AffiliateHome:_},computed:Object(s["a"])({},Object(m["b"])({isAdmin:"auth/getIsAdmin",isAffiliate:"auth/getIsAffiliate"}))},B=k,D=Object(A["a"])(B,i,n,!1,null,null,null);e["default"]=D.exports},b680:function(t,e,a){"use strict";var i=a("23e7"),n=a("a691"),s=a("408a"),o=a("1148"),r=a("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,a){return 0===e?a:e%2===1?u(t,e-1,a*t):u(t*t,e/2,a)},f=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},d=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){c.call({})}));i({target:"Number",proto:!0,forced:d},{toFixed:function(t){var e,a,i,r,c=s(this),d=n(t),m=[0,0,0,0,0,0],h="",p="0",g=function(t,e){var a=-1,i=e;while(++a<6)i+=t*m[a],m[a]=i%1e7,i=l(i/1e7)},v=function(t){var e=6,a=0;while(--e>=0)a+=m[e],m[e]=l(a/t),a=a%t*1e7},A=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==m[t]){var a=String(m[t]);e=""===e?a:e+o.call("0",7-a.length)+a}return e};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(h="-",c=-c),c>1e-21)if(e=f(c*u(2,69,1))-69,a=e<0?c*u(2,-e,1):c/u(2,e,1),a*=4503599627370496,e=52-e,e>0){g(0,a),i=d;while(i>=7)g(1e7,0),i-=7;g(u(10,i,1),0),i=e-1;while(i>=23)v(1<<23),i-=23;v(1<<i),g(1,1),v(2),p=A()}else g(0,a),g(1<<-e,0),p=A()+o.call("0",d);return d>0?(r=p.length,p=h+(r<=d?"0."+o.call("0",d-r)+p:p.slice(0,r-d)+"."+p.slice(r-d))):p=h+p,p}})},c730:function(t,e,a){"use strict";a("5d23")},ca6e:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return s}));a("5530"),a("a4d3"),a("e01a"),a("d28b"),a("d3b7"),a("3ca3"),a("ddb0");function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}a("a18c"),a("a6f4");var n=function(t){return"object"===i(t)&&null!==t},s=function(t){var e=new Date;return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}},d16f:function(t,e,a){"use strict";e["a"]={methods:{getProductSales:function(){var t=this;this.$store.dispatch("productSales/getProductSales").then().catch((function(e){t.toast("Get Product Sales Attempt","BellIcon",e.response.data.messages.error,"danger")}))},getAffiliateProductSales:function(t){var e=this;this.$store.dispatch("productSales/getAffiliateProductSales",{referralCode:t}).then().catch((function(t){e.toast("Get Product Sales Attempt","BellIcon",t.response.data.messages.error,"danger")}))},getMonthlyCommission:function(t){var e=this;this.$store.dispatch("productSales/getMonthlyCommission",{referralCode:t}).then().catch((function(t){e.toast("Get Monthly Commission Attempt","BellIcon",t.response.data.messages.error,"danger")}))},getYearlyCommission:function(t){var e=this;this.$store.dispatch("productSales/getYearlyCommission",{referralCode:t}).then().catch((function(t){e.toast("Get Yearly Commission Attempt","BellIcon",t.response.data.messages.error,"danger")}))}}}},d81d:function(t,e,a){"use strict";var i=a("23e7"),n=a("b727").map,s=a("1dde"),o=a("ae40"),r=s("map"),c=o("map");i({target:"Array",proto:!0,forced:!r||!c},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e350:function(t,e,a){"use strict";a("a4d3"),a("e01a"),a("b0c0");e["a"]={methods:{getProducts:function(){var t=this;this.$store.dispatch("product/getProducts").then().catch((function(e){t.toast("Get All Products Attempt","BellIcon",e.response.data.messages.error,"danger")}))},getAffiliateProducts:function(){var t=this;this.$store.dispatch("product/getAffiliateProducts").then().catch((function(e){t.toast("Get All Products Attempt","BellIcon",e.response.data.messages.error,"danger")}))},addProduct:function(){var t=this;this.$refs.addProductValidation.validate().then((function(e){if(e){var a={name:t.name,url:t.productUrl,link:t.registrationLink,category:t.category.value,description:t.description,logo:t.logo};t.$store.dispatch("product/addProduct",{form:a}).then((function(){t.$router.push({name:"products"}).then((function(){t.toast("Add Product","BellIcon","You have successfully added the product","success")}))})).catch((function(e){t.toast("Add Product Attempt","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Add Product Attempt","BellIcon","You must fill in all form fields correctly","warning")}))},updateProduct:function(){var t=this;this.$refs.updateProductValidation.validate().then((function(e){if(e){var a={productID:t.productID,name:t.name,url:t.productUrl,link:t.registrationLink,category:t.category.value,description:t.description,logo:t.logo};void 0===a.category&&(a.category=t.category),t.$store.dispatch("product/updateProduct",{form:a}).then((function(){t.toast("Update Product","BellIcon","You have successfully updated product","success"),t.$nextTick((function(){t.$refs["update-product-modal"].toggle("#edit-product-btn")}))})).catch((function(e){t.toast("Update Product Attempt","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Update Product Attempt","BellIcon","You must fill in all form fields correctly","warning")}))},updateProductLogo:function(t){var e=this,a={productID:this.productID,logo:t};this.$store.dispatch("product/updateLogo",{form:a}).then((function(){e.toast("Update Logo","BellIcon","You have successfully updated the product logo","success")})).catch((function(t){e.toast("Update Logo Attempt","BellIcon",t.response.data.messages.error,"danger")}))},removeProductLogo:function(){var t=this,e={productID:this.productID};this.$store.dispatch("product/removeLogo",{form:e}).then((function(){t.toast("Remove Logo","BellIcon","You have successfully removed the product logo","success")})).catch((function(e){t.toast("Remove Logo Attempt","BellIcon",e.response.data.messages.error,"danger")}))},getProduct:function(t){var e=this;this.$store.dispatch("product/getProduct",{productID:t}).then((function(){e.$router.push({name:"view-product",params:{productID:t}}).catch()})).catch((function(t){e.toast("Get Product Attempt","BellIcon",t.response.data.messages.error,"danger")}))},addPlan:function(){var t=this;this.$refs.addPlanValidation.validate().then((function(e){if(e){var a={productID:t.productID,planName:t.planName,planPrice:t.planPrice,planLink:t.planLink,planCommission:t.planCommission,planSlug:t.planSlug};t.$store.dispatch("product/addPlan",{form:a}).then((function(){t.toast("Add Product Plan","BellIcon","You have successfully added the product plan","success"),t.$nextTick((function(){t.$refs["add-plan-modal"].toggle("#add-btn")})),t.planName=null,t.planPrice=null,t.planLink=null,t.planCommission=null,t.planSlug=null})).catch((function(e){t.toast("Add Product Plan Attempt","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Add Product Plan Attempt","BellIcon","You must fill in all form fields correctly","warning")}))},editPlan:function(){var t=this;this.$refs.editPlanValidation.validate().then((function(e){if(e){var a={productID:t.productIDView,productPlanID:t.productPlanID,planName:t.planNameView,planPrice:t.planPriceView,planLink:t.planLinkView,planCommission:t.planCommissionView,planSlug:t.planSlugView};t.$store.dispatch("product/editPlan",{form:a}).then((function(){t.toast("Update Product Plan","BellIcon","You have successfully updated the product plan","success"),t.$nextTick((function(){t.$refs["edit-plan-modal"].toggle("#edit-btn")})),t.planName=null,t.planPrice=null,t.planLink=null,t.planCommission=null,t.planSlug=null})).catch((function(e){t.toast("Update Product Plan Attempt","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Update Product Plan Attempt","BellIcon","You must fill in all form fields correctly","warning")}))},deletePlan:function(){var t=this;this.$bvModal.msgBoxConfirm("Please confirm that you want to delete this product plan",{title:"Delete Plan",size:"sm",okVariant:"primary",okTitle:"Confirm",cancelTitle:"Cancel",cancelVariant:"outline-secondary",hideHeaderClose:!1,centered:!0}).then((function(e){if(e){var a={productID:t.productID,productPlanID:t.productPlanID};t.$store.dispatch("product/deletePlan",{form:a}).then((function(){t.toast("Delete Plan","BellIcon","You have successfully deleted the product plan","success")})).catch((function(e){t.toast("Delete Plan Attempt","BellIcon",e.response.data.messages.error,"danger")}))}}))},toggleStatus:function(t,e){var a=this;"1"===t?this.$bvModal.msgBoxConfirm("Please confirm that you want to deactivate this product?",{title:"Deactivate Product",size:"sm",okVariant:"primary",okTitle:"Confirm",cancelTitle:"Cancel",cancelVariant:"outline-secondary",hideHeaderClose:!1,centered:!0}).then((function(t){t&&a.$store.dispatch("product/toggleProductStatus",{productID:e}).then((function(){a.toast("Deactivate Product","BellIcon","The product was deactivated successfully","success")})).catch((function(t){a.toast("Deactivate Product","BellIcon",t.response.data.messages.error,"danger")}))})):"0"===t&&this.$bvModal.msgBoxConfirm("Please confirm that you want to reactivate this product?",{title:"Reactivate Product",size:"sm",okVariant:"primary",okTitle:"Confirm",cancelTitle:"Cancel",cancelVariant:"outline-secondary",hideHeaderClose:!1,centered:!0}).then((function(t){t&&a.$store.dispatch("product/toggleProductStatus",{productID:e}).then((function(){a.toast("Reactivate Product","BellIcon","The product was reactivated successfully","success")})).catch((function(t){a.toast("Reactivate Product","BellIcon",t.response.data.messages.error,"danger")}))}))}}}}}]);
//# sourceMappingURL=chunk-47f7416a.b8f077a7.js.map