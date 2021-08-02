(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f11bfc5"],{"088b":function(s,t,e){"use strict";var o=function(){var s=this,t=s.$createElement,o=s._self._c||t;return o("img",{attrs:{id:"logo",src:e("587b"),alt:"amp-logo"}})},a=[],r=(e("6f45"),e("2877")),n={},i=Object(r["a"])(n,o,a,!1,null,"2de93016",null);t["a"]=i.exports},"0bff":function(s,t,e){"use strict";e.r(t);var o=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"auth-wrapper auth-v1 px-2"},[e("div",{staticClass:"auth-inner py-2"},[e("b-card",{staticClass:"mb-0"},[e("b-link",{staticClass:"brand-logo"},[e("vuexy-logo")],1),e("b-card-title",{staticClass:"mb-1"},[s._v(" Reset Password 🔒 ")]),e("b-card-text",{staticClass:"mb-2"},[s._v(" Please enter a new password for your AMP account. ")]),e("validation-observer",{ref:"resetPasswordValidation"},[e("b-form",{staticClass:"auth-reset-password-form mt-2",attrs:{method:"POST"},on:{submit:function(t){return t.preventDefault(),s.resetPassword(t)}}},[e("b-form-group",{attrs:{label:"New Password","label-for":"reset-password-new"}},[e("validation-provider",{attrs:{name:"Password",vid:"Password",rules:"required|password"},scopedSlots:s._u([{key:"default",fn:function(t){var o=t.errors;return[e("b-input-group",{staticClass:"input-group-merge",class:o.length>0?"is-invalid":null},[e("b-form-input",{staticClass:"form-control-merge",attrs:{id:"reset-password-new",type:s.password1FieldType,state:!(o.length>0)&&null,name:"reset-password-new",placeholder:"············"},model:{value:s.password,callback:function(t){s.password=t},expression:"password"}}),e("b-input-group-append",{attrs:{"is-text":""}},[e("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:s.password1ToggleIcon},on:{click:s.togglePassword1Visibility}})],1)],1),e("small",{staticClass:"text-danger"},[s._v(s._s(o[0]))])]}}])})],1),e("b-form-group",{attrs:{"label-for":"reset-password-confirm",label:"Confirm Password"}},[e("validation-provider",{attrs:{name:"Confirm Password",rules:"required|confirmed:Password"},scopedSlots:s._u([{key:"default",fn:function(t){var o=t.errors;return[e("b-input-group",{staticClass:"input-group-merge",class:o.length>0?"is-invalid":null},[e("b-form-input",{staticClass:"form-control-merge",attrs:{id:"reset-password-confirm",type:s.password2FieldType,state:!(o.length>0)&&null,name:"reset-password-confirm",placeholder:"············"},model:{value:s.cPassword,callback:function(t){s.cPassword=t},expression:"cPassword"}}),e("b-input-group-append",{attrs:{"is-text":""}},[e("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:s.password2ToggleIcon},on:{click:s.togglePassword2Visibility}})],1)],1),e("small",{staticClass:"text-danger"},[s._v(s._s(o[0]))])]}}])})],1),e("b-button",{attrs:{block:"",type:"submit",variant:"primary"}},[s._v(" Set New Password ")])],1)],1),e("p",{staticClass:"text-center mt-2"},[e("b-link",{attrs:{to:{name:"login"}}},[e("feather-icon",{attrs:{icon:"ChevronLeftIcon"}}),s._v(" Back To Login ")],1)],1)],1)],1)])},a=[],r=e("7bb1"),n=e("088b"),i=e("8f03"),c=e("a189"),l={components:{VuexyLogo:n["a"],ValidationProvider:r["b"],ValidationObserver:r["a"]},mixins:[c["a"]],data:function(){return{userEmail:"",cPassword:"",password:"",verificationCode:this.$route.params.pathMatch,required:i["c"],password1FieldType:"password",password2FieldType:"password"}},computed:{password1ToggleIcon:function(){return"password"===this.password1FieldType?"EyeIcon":"EyeOffIcon"},password2ToggleIcon:function(){return"password"===this.password2FieldType?"EyeIcon":"EyeOffIcon"}},methods:{togglePassword1Visibility:function(){this.password1FieldType="password"===this.password1FieldType?"text":"password"},togglePassword2Visibility:function(){this.password2FieldType="password"===this.password2FieldType?"text":"password"}}},d=l,u=(e("e731"),e("2877")),f=Object(u["a"])(d,o,a,!1,null,null,null);t["default"]=f.exports},"6f45":function(s,t,e){"use strict";e("726d")},"726d":function(s,t,e){},"9a00":function(s,t,e){},a189:function(s,t,e){"use strict";t["a"]={methods:{login:function(){var s=this;this.$refs.loginValidation.validate().then((function(t){if(t){var e={username:s.username,password:s.password};s.$store.dispatch("auth/login",{form:e}).then((function(){s.$router.push({name:"home"}).then((function(){s.toast("Welcome","LogInIcon","You have logged in successfully","success")}))})).catch((function(t){s.toast("Login Attempt","LogInIcon",t.response.data.messages.error,"danger")}))}else s.toast("Login Attempt","LogInIcon","You must fill in all form fields correctly","warning")}))},logout:function(){var s=this;this.$router.push({name:"login"}).then((function(){s.$store.dispatch("auth/logout").then((function(){s.toast("Thank You","LogOutIcon","You have logged out successfully","success")}))}))},register:function(){var s=this;this.$refs.registerValidation.validate().then((function(t){if(t){var e={firstname:s.firstname,lastname:s.lastname,username:s.username,email:s.regEmail,password:s.password,verifyCode:s.generateVerifyCode(10),confirmPassword:s.confirmPassword};s.$store.dispatch("auth/register",{form:e}).then((function(t){s.$router.push({name:"login"}).then((function(){s.toast("Register","LogInIcon",t.data,"success")}))})).catch((function(t){s.toast("Register Attempt","LogInIcon",t.response.data.messages.error,"danger")}))}else s.toast("Register Attempt","LogInIcon","You must fill in all form fields correctly","warning")}))},verifyAccount:function(){var s=this,t={verifyCode:this.verifyCode};this.$store.dispatch("auth/verifyAccount",{form:t}).then().catch((function(t){s.toast("Verify Account","BellIcon",t.response.data.messages.error,"danger")}))},resendConfirmation:function(){var s=this,t={firstname:this.firstname,lastname:this.lastname,verifyCode:this.verifyCode,email:this.emailAddr};this.$store.dispatch("auth/resendConfirmation",{form:t}).then((function(){s.toast("Resend Confirmation","BellIcon","Confirmation email sent successful","success")})).catch((function(){s.toast("Resend Confirmation","BellIcon","Confirmation email could not be sent. Try again later","danger")}))},forgotPassword:function(){var s=this;this.$refs.forgotPasswordValidation.validate().then((function(t){if(t){var e={email:s.userEmail};s.$store.dispatch("auth/sendResetPasswordLink",{form:e}).then((function(t){s.toast("Send Reset Password Link","BellIcon",t.data,"success")})).catch((function(t){s.toast("Send Reset Password Link","BellIcon",t.response.data.messages.error,"danger")}))}else s.toast("Forgot Password","LogInIcon","You must fill in all form fields correctly","warning")}))},resetPassword:function(){var s=this;this.$refs.resetPasswordValidation.validate().then((function(t){if(t){var e={verificationCode:s.verificationCode,password:s.password,cPassword:s.cPassword};s.$store.dispatch("auth/resetPassword",{form:e}).then((function(t){s.$router.push({name:"login"}).then((function(){s.toast("Reset Password","BellIcon",t.data,"success")}))})).catch((function(t){s.toast("Reset Password","BellIcon",t.response.data.messages.error,"danger")}))}else s.toast("Reset Password","LogInIcon","You must fill in all form fields correctly","warning")}))}}}},e731:function(s,t,e){"use strict";e("9a00")}}]);
//# sourceMappingURL=chunk-1f11bfc5.d511be7f.js.map