(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a0a2f84"],{"088b":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("img",{attrs:{id:"logo",src:s("587b"),alt:"amp-logo"}})},i=[],a=(s("6f45"),s("2877")),r={},o=Object(a["a"])(r,n,i,!1,null,"2de93016",null);t["a"]=o.exports},"0f91":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var n=s("3245");Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return n.EmailJSResponseStatus}});var i=s("5129"),a=null,r="https://api.emailjs.com";function o(e,t,s){return void 0===s&&(s={}),new Promise((function(i,a){var r=new XMLHttpRequest;for(var o in r.addEventListener("load",(function(e){var t=new n.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?i(t):a(t)})),r.addEventListener("error",(function(e){a(new n.EmailJSResponseStatus(e.target))})),r.open("POST",e,!0),s)r.setRequestHeader(o,s[o]);r.send(t)}))}function c(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function u(e){return"#"!==e[0]&&"."!==e[0]?"#"+e:e}function l(e,t){a=e,r=t||"https://api.emailjs.com"}function d(e,t,s,n){var i={lib_version:"2.6.4",user_id:n||a,service_id:e,template_id:t,template_params:c(s)};return o(r+"/api/v1.0/email/send",JSON.stringify(i),{"Content-type":"application/json"})}function f(e,t,s,n){if("string"===typeof s&&(s=document.querySelector(u(s))),!s||"FORM"!==s.nodeName)throw"Expected the HTML form element or the style selector of form";i.UI.progressState(s);var c=new FormData(s);return c.append("lib_version","2.6.4"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",n||a),o(r+"/api/v1.0/email/send-form",c).then((function(e){return i.UI.successState(s),e}),(function(e){return i.UI.errorState(s),Promise.reject(e)}))}t.init=l,t.send=d,t.sendForm=f,t.default={init:l,send:d,sendForm:f}},3245:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var n=function(){function e(e){this.status=e.status,this.text=e.responseText}return e}();t.EmailJSResponseStatus=n},5129:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var n=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=n},"6f45":function(e,t,s){"use strict";s("726d")},"726d":function(e,t,s){},"93d4":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"misc-wrapper"},[s("b-link",{staticClass:"brand-logo",attrs:{to:"/"}},[s("vuexy-logo"),s("h2",{staticClass:"brand-text text-primary ml-1"},[e._v(" Affiliate Marketing Portal "),s("br"),s("small",[e._v("Powered by Connexxion Telecom")])])],1),e.isVerified?s("div",{staticClass:"misc-inner p-2 p-sm-3"},[s("div",{staticClass:"w-100 text-center"},[s("h2",{staticClass:"mb-1"},[e._v(" AMP Email Address Verification 👋 ")]),s("p",{staticClass:"mb-2"},[e._v(" Your email address has been successfully verified. ")]),s("b-button",{staticClass:"mb-1 btn-sm-block",attrs:{variant:"primary",to:{name:"login"}}},[e._v(" Sign in here to continue ")])],1)]):e.isVerified?e._e():s("div",{staticClass:"misc-inner p-2 p-sm-3"},[s("div",{staticClass:"w-100 text-center"},[s("h2",{staticClass:"mb-1"},[e._v(" AMP Email Address Verified 🎉 ")]),s("p",{staticClass:"mb-2"},[e._v(" Your email address has already been verified. ")]),s("b-button",{staticClass:"mb-1 btn-sm-block",attrs:{variant:"primary",to:{name:"home"}}},[e._v(" Continue to dashboard ")])],1)])],1)},i=[],a=s("5530"),r=s("aa59"),o=s("1947"),c=s("088b"),u=s("2f62"),l=s("a189"),d={components:{BLink:r["a"],BButton:o["a"],VuexyLogo:c["a"]},mixins:[l["a"]],data:function(){return{downImg:s("e767"),verifyCode:this.$route.params.pathMatch}},computed:Object(a["a"])({},Object(u["b"])({isVerified:"auth/getIsVerified"})),created:function(){this.verifyAccount()}},f=d,m=(s("bfb1"),s("2877")),p=Object(m["a"])(f,n,i,!1,null,null,null);t["default"]=p.exports},a189:function(e,t,s){"use strict";s("99af");var n=s("0f91"),i=s.n(n),a=s("3b53");t["a"]={methods:{login:function(){var e=this;this.$refs.loginValidation.validate().then((function(t){if(t){var s={username:e.username,password:e.password};e.$store.dispatch("auth/login",{form:s}).then((function(){e.$router.push({name:"home"}).then((function(){e.toast("Welcome","LogInIcon","You have logged in successfully","success")}))})).catch((function(t){e.toast("Login Attempt","LogInIcon",t.response.data.messages.error,"danger")}))}else e.toast("Login Attempt","LogInIcon","You must fill in all form fields correctly","warning")}))},logout:function(){var e=this;this.$router.push({name:"login"}).then((function(){e.$store.dispatch("auth/logout").then((function(){e.toast("Thank You","LogOutIcon","You have logged out successfully","success")}))}))},register:function(){var e=this;this.$refs.registerValidation.validate().then((function(t){if(t){var s={firstname:e.firstname,lastname:e.lastname,username:e.username,email:e.regEmail,password:e.password,verifyCode:e.generateVerifyCode(10),confirmPassword:e.confirmPassword};e.$store.dispatch("auth/register",{form:s}).then((function(t){i.a.send("service_dmcc3uc","template_ats6kji",{firstname:s.firstname,lastname:s.lastname,verification_link:"".concat(a["a"].frontend,"/verify-").concat(s.verifyCode),to_email:s.email},"user_BcSkabdz4FX6q4l5oeeXI").catch(),e.$router.push({name:"login"}).then((function(){e.toast("Register","LogInIcon",t.data,"success")}))})).catch((function(t){e.toast("Register Attempt","LogInIcon",t.response.data.messages.error,"danger")}))}else e.toast("Register Attempt","LogInIcon","You must fill in all form fields correctly","warning")}))},verifyAccount:function(){var e=this,t={verifyCode:this.verifyCode};this.$store.dispatch("auth/verifyAccount",{form:t}).then().catch((function(t){e.toast("Verify Account","BellIcon",t.response.data.messages.error,"danger")}))}}}},bfb1:function(e,t,s){"use strict";s("eff9")},e767:function(e,t,s){e.exports=s.p+"img/not-authorized.e9c47c33.svg"},eff9:function(e,t,s){}}]);
//# sourceMappingURL=chunk-6a0a2f84.71aa819a.js.map