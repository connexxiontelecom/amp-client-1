(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b675300a"],{"07ef":function(t,e,s){},"088b":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("img",{attrs:{id:"logo",src:s("587b"),alt:"amp-logo"}})},n=[],o=(s("6f45"),s("2877")),r={},i=Object(o["a"])(r,a,n,!1,null,"2de93016",null);e["a"]=i.exports},5326:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"auth-wrapper auth-v1 px-2"},[s("div",{staticClass:"auth-inner py-2"},[s("b-card",{staticClass:"mb-0"},[s("b-link",{staticClass:"brand-logo"},[s("vuexy-logo")],1),s("b-card-title",{staticClass:"mb-1"},[t._v(" Welcome to "),s("strong",[t._v("AMP!")]),t._v(" 👋 ")]),s("b-card-text",{staticClass:"mb-2"},[t._v(" Please sign in with your credentials to access your account ")]),s("validation-observer",{ref:"loginValidation"},[s("b-form",{staticClass:"auth-login-form mt-2",on:{submit:function(t){t.preventDefault()}}},[s("b-form-group",{attrs:{label:"Username","label-for":"login-username"}},[s("validation-provider",{attrs:{name:"username",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("b-form-input",{attrs:{id:"login-username",state:!(a.length>0)&&null,name:"login-username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),s("small",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}])})],1),s("b-form-group",[s("div",{staticClass:"d-flex justify-content-between"},[s("label",{attrs:{for:"login-password"}},[t._v("Password")])]),s("validation-provider",{attrs:{name:"password",rules:"required|min:5"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("b-input-group",{staticClass:"input-group-merge",class:a.length>0?"is-invalid":null},[s("b-form-input",{staticClass:"form-control-merge",attrs:{id:"login-password",state:!(a.length>0)&&null,type:t.passwordFieldType,name:"login-password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("b-input-group-append",{attrs:{"is-text":""}},[s("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:t.passwordToggleIcon},on:{click:t.togglePasswordVisibility}})],1)],1),s("small",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}])})],1),s("b-form-group",[s("b-form-checkbox",{attrs:{id:"remember-me",name:"checkbox-1"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[t._v(" Remember Me ")])],1),s("b-button",{attrs:{type:"submit",variant:"primary",block:""},on:{click:t.login}},[t._v(" Sign in ")])],1)],1),s("b-card-text",{staticClass:"text-center mt-2"},[s("span",[t._v("New on our platform? ")]),s("b-link",{attrs:{to:{name:"register"}}},[s("span",[t._v("Create an account")])])],1)],1)],1)])},n=[],o=s("7bb1"),r=s("088b"),i=s("8f03"),c=s("b91d"),l=s("4360"),u=s("a189"),d={components:{VuexyLogo:r["a"],ValidationProvider:o["b"],ValidationObserver:o["a"]},mixins:[c["a"],u["a"]],data:function(){return{status:"",password:"",userEmail:"",username:"",sideImg:s("5aa9"),required:i["c"],email:i["b"]}},computed:{passwordToggleIcon:function(){return"password"===this.passwordFieldType?"EyeIcon":"EyeOffIcon"},imgUrl:function(){return"dark"===l["a"].state.appConfig.layout.skin?(this.sideImg=s("ff0f"),this.sideImg):this.sideImg}}},f=d,m=(s("e21c"),s("2877")),p=Object(m["a"])(f,a,n,!1,null,null,null);e["default"]=p.exports},"5aa9":function(t,e,s){t.exports=s.p+"img/login-v2.72cd8a26.svg"},"6f45":function(t,e,s){"use strict";s("726d")},"726d":function(t,e,s){},a189:function(t,e,s){"use strict";e["a"]={methods:{login:function(){var t=this;this.$refs.loginValidation.validate().then((function(e){if(e){var s={username:t.username,password:t.password};t.$store.dispatch("auth/login",{form:s}).then((function(){t.$router.push({name:"home"}).then((function(){t.toast("Welcome","LogInIcon","You have logged in successfully","success")}))})).catch((function(e){t.toast("Login Attempt","LogInIcon",e.response.data.messages.error,"danger")}))}else t.toast("Login Attempt","LogInIcon","You must fill in all form fields correctly","warning")}))},logout:function(){var t=this;this.$router.push({name:"login"}).then((function(){t.$store.dispatch("auth/logout").then((function(){t.toast("Thank You","LogOutIcon","You have logged out successfully","success")}))}))},register:function(){var t=this;this.$refs.registerValidation.validate().then((function(e){if(e){var s={firstname:t.firstname,lastname:t.lastname,username:t.username,email:t.regEmail,password:t.password,verifyCode:t.generateVerifyCode(10),confirmPassword:t.confirmPassword};t.$store.dispatch("auth/register",{form:s}).then((function(e){t.$router.push({name:"login"}).then((function(){t.toast("Register","LogInIcon",e.data,"success")}))})).catch((function(e){t.toast("Register Attempt","LogInIcon",e.response.data.messages.error,"danger")}))}else t.toast("Register Attempt","LogInIcon","You must fill in all form fields correctly","warning")}))},verifyAccount:function(){var t=this,e={verifyCode:this.verifyCode};this.$store.dispatch("auth/verifyAccount",{form:e}).then().catch((function(e){t.toast("Verify Account","BellIcon",e.response.data.messages.error,"danger")}))}}}},b91d:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var a={data:function(){return{passwordFieldType:"password"}},methods:{togglePasswordVisibility:function(){this.passwordFieldType="password"===this.passwordFieldType?"text":"password"}}}},e21c:function(t,e,s){"use strict";s("07ef")},ff0f:function(t,e,s){t.exports=s.p+"img/login-v2-dark.58db2eaf.svg"}}]);
//# sourceMappingURL=chunk-b675300a.c7b4abc8.js.map