(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ddeaa65"],{"088b":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("img",{attrs:{id:"logo",src:s("587b"),alt:"amp-logo"}})},r=[],o=(s("6f45"),s("2877")),n={},i=Object(o["a"])(n,a,r,!1,null,"2de93016",null);e["a"]=i.exports},"6f45":function(t,e,s){"use strict";s("726d")},"70e5":function(t,e,s){},"726d":function(t,e,s){},9090:function(t,e,s){"use strict";s("70e5")},"935e":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"auth-wrapper auth-v1 px-2"},[s("div",{staticClass:"auth-inner py-2"},[s("b-card",{staticClass:"mb-0"},[s("b-link",{staticClass:"brand-logo"},[s("vuexy-logo")],1),s("b-card-title",{staticClass:"mb-1"},[t._v(" Welcome to "),s("strong",[t._v("AMP")]),t._v(" 🚀 ")]),s("b-card-text",{staticClass:"mb-2"},[t._v(" Register below to join our global network of marketers that earn passively by marketing our products. ")]),s("validation-observer",{ref:"registerValidation"},[s("b-form",{staticClass:"auth-register-form mt-2",on:{submit:function(e){return e.preventDefault(),t.validationForm(e)}}},[s("b-row",[s("b-col",{attrs:{lg:"6"}},[s("b-form-group",[s("label",{attrs:{for:"firstname"}},[t._v("Firstname")]),s("span",{staticStyle:{color:"red"}},[t._v(" *")]),s("validation-provider",{attrs:{name:"firstname",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("b-form-input",{attrs:{id:"firstname",state:!(a.length>0)&&null,name:"firstname",placeholder:"John"},model:{value:t.firstname,callback:function(e){t.firstname=e},expression:"firstname"}}),s("small",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}])})],1)],1),s("b-col",{attrs:{lg:"6"}},[s("b-form-group",[s("label",{attrs:{for:"lastname"}},[t._v("Lastname")]),s("span",{staticStyle:{color:"red"}},[t._v(" *")]),s("validation-provider",{attrs:{name:"lastname",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("b-form-input",{attrs:{id:"lastname",state:!(a.length>0)&&null,name:"lastname",placeholder:"Doe"},model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}}),s("small",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}])})],1)],1)],1),s("b-row",[s("b-col",{attrs:{lg:"6"}},[s("b-form-group",[s("label",{attrs:{for:"username"}},[t._v("Username")]),s("span",{staticStyle:{color:"red"}},[t._v(" *")]),s("validation-provider",{attrs:{name:"Username",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("b-form-input",{attrs:{id:"username",state:!(a.length>0)&&null,name:"register-username",placeholder:"johndoe"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),s("small",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}])})],1)],1),s("b-col",{attrs:{lg:"6"}},[s("b-form-group",[s("label",{attrs:{for:"email"}},[t._v("Email")]),s("span",{staticStyle:{color:"red"}},[t._v(" *")]),s("validation-provider",{attrs:{name:"Email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("b-form-input",{attrs:{id:"email",state:!(a.length>0)&&null,name:"register-email",placeholder:"john@example.com"},model:{value:t.regEmail,callback:function(e){t.regEmail=e},expression:"regEmail"}}),s("small",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}])})],1)],1)],1),s("b-row",[s("b-col",{attrs:{lg:"6"}},[s("b-form-group",[s("label",{attrs:{for:"password"}},[t._v("Password")]),s("span",{staticStyle:{color:"red"}},[t._v(" *")]),s("validation-provider",{attrs:{name:"password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("b-input-group",{staticClass:"input-group-merge",class:a.length>0?"is-invalid":null},[s("b-form-input",{staticClass:"form-control-merge",attrs:{id:"password",type:t.passwordFieldType,state:!(a.length>0)&&null,name:"password",placeholder:"············"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("b-input-group-append",{attrs:{"is-text":""}},[s("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:t.passwordToggleIcon},on:{click:t.togglePasswordVisibility}})],1)],1),s("small",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}])})],1)],1),s("b-col",{attrs:{lg:"6"}},[s("b-form-group",[s("label",{attrs:{for:"confirm-password"}},[t._v("Confirm Password")]),s("span",{staticStyle:{color:"red"}},[t._v(" *")]),s("validation-provider",{attrs:{name:"confirm password",rules:"required|confirmed:password"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("b-input-group",{staticClass:"input-group-merge",class:a.length>0?"is-invalid":null},[s("b-form-input",{staticClass:"form-control-merge",attrs:{id:"confirm-password",type:t.passwordFieldType,state:!(a.length>0)&&null,name:"confirm-password",placeholder:"············"},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}}),s("b-input-group-append",{attrs:{"is-text":""}},[s("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:t.passwordToggleIcon},on:{click:t.togglePasswordVisibility}})],1)],1),s("small",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}])})],1)],1)],1),s("b-form-group",[s("b-form-checkbox",{staticClass:"mt-1",attrs:{id:"register-privacy-policy",name:"checkbox-1"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[t._v(" I have read and understood the "),s("b-link",{attrs:{to:"/privacy-policy"}},[t._v(" Privacy Policy ")])],1)],1),s("b-button",{staticClass:"mt-2",attrs:{variant:"primary",block:""},on:{click:t.register}},[t._v(" Sign Up & Start Earning ")])],1)],1),s("b-card-text",{staticClass:"text-center mt-2"},[s("span",[t._v("Already have an account? ")]),s("b-link",{attrs:{to:{name:"login"}}},[s("span",[t._v("Sign in instead")])])],1)],1)],1)])},r=[],o=s("7bb1"),n=s("205f"),i=s("aa59"),l=s("4968"),c=s("d6e4"),u=s("11de"),d=s("1947"),m=s("4797"),f=s("8226"),p=s("5e12"),g=s("ccc0"),v=s("c3e6"),h=s("a15b"),b=s("b28b"),w=s("088b"),y=s("8f03"),_=s("b91d"),C=s("223c"),k=s("a189"),I={components:{VuexyLogo:w["a"],BCard:n["a"],BLink:i["a"],BCardTitle:l["a"],BCardText:c["a"],BForm:u["a"],BButton:d["a"],BFormInput:m["a"],BFormGroup:f["a"],BInputGroup:p["a"],BInputGroupAppend:g["a"],BFormCheckbox:v["a"],BRow:h["a"],BCol:b["a"],ValidationProvider:o["b"],ValidationObserver:o["a"]},mixins:[_["a"],k["a"]],data:function(){return{firstname:"",lastname:"",regEmail:"",username:"",password:"",confirmPassword:"",status:"",required:y["c"],email:y["b"],confirmed:y["a"]}},computed:{passwordToggleIcon:function(){return"password"===this.passwordFieldType?"EyeIcon":"EyeOffIcon"}},methods:{validationForm:function(){var t=this;this.$refs.registerForm.validate().then((function(e){e&&t.$toast({component:C["a"],props:{title:"Form Submitted",icon:"EditIcon",variant:"success"}})}))}}},x=I,P=(s("9090"),s("2877")),B=Object(P["a"])(x,a,r,!1,null,null,null);e["default"]=B.exports},a189:function(t,e,s){"use strict";e["a"]={methods:{login:function(){var t=this;this.$refs.loginValidation.validate().then((function(e){if(e){var s={username:t.username,password:t.password};t.$store.dispatch("auth/login",{form:s}).then((function(){t.$router.push({name:"home"}).then((function(){t.toast("Welcome","LogInIcon","You have logged in successfully","success")}))})).catch((function(e){t.toast("Login Attempt","LogInIcon",e.response.data.messages.error,"danger")}))}else t.toast("Login Attempt","LogInIcon","You must fill in all form fields correctly","warning")}))},logout:function(){var t=this;this.$router.push({name:"login"}).then((function(){t.$store.dispatch("auth/logout").then((function(){t.toast("Thank You","LogOutIcon","You have logged out successfully","success")}))}))},register:function(){var t=this;this.$refs.registerValidation.validate().then((function(e){if(e){var s={firstname:t.firstname,lastname:t.lastname,username:t.username,email:t.regEmail,password:t.password,verifyCode:t.generateVerifyCode(10),confirmPassword:t.confirmPassword};t.$store.dispatch("auth/register",{form:s}).then((function(e){t.$router.push({name:"login"}).then((function(){t.toast("Register","LogInIcon",e.data,"success")}))})).catch((function(e){t.toast("Register Attempt","LogInIcon",e.response.data.messages.error,"danger")}))}else t.toast("Register Attempt","LogInIcon","You must fill in all form fields correctly","warning")}))},verifyAccount:function(){var t=this,e={verifyCode:this.verifyCode};this.$store.dispatch("auth/verifyAccount",{form:e}).then().catch((function(e){t.toast("Verify Account","BellIcon",e.response.data.messages.error,"danger")}))},resendConfirmation:function(){var t=this,e={firstname:this.firstname,lastname:this.lastname,verifyCode:this.verifyCode,email:this.emailAddr};this.$store.dispatch("auth/resendConfirmation",{form:e}).then((function(){t.toast("Resend Confirmation","BellIcon","Confirmation email sent successful","success")})).catch((function(){t.toast("Resend Confirmation","BellIcon","Confirmation email could not be sent. Try again later","danger")}))},forgotPassword:function(){var t=this;this.$refs.forgotPasswordValidation.validate().then((function(e){if(e){var s={email:t.userEmail};t.$store.dispatch("auth/sendResetPasswordLink",{form:s}).then((function(e){t.toast("Send Reset Password Link","BellIcon",e.data,"success")})).catch((function(e){t.toast("Send Reset Password Link","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Forgot Password","LogInIcon","You must fill in all form fields correctly","warning")}))},resetPassword:function(){var t=this;this.$refs.resetPasswordValidation.validate().then((function(e){if(e){var s={verificationCode:t.verificationCode,password:t.password,cPassword:t.cPassword};t.$store.dispatch("auth/resetPassword",{form:s}).then((function(e){t.$router.push({name:"login"}).then((function(){t.toast("Reset Password","BellIcon",e.data,"success")}))})).catch((function(e){t.toast("Reset Password","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Reset Password","LogInIcon","You must fill in all form fields correctly","warning")}))}}}},b91d:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var a={data:function(){return{passwordFieldType:"password"}},methods:{togglePasswordVisibility:function(){this.passwordFieldType="password"===this.passwordFieldType?"text":"password"}}}}}]);
//# sourceMappingURL=chunk-5ddeaa65.999a7cf1.js.map