(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f52558c"],{"07ef":function(t,e,a){},"088b":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{attrs:{src:a("587b"),alt:"amp-logo",width:"60"}})},s=[],r=a("2877"),o={},i=Object(r["a"])(o,n,s,!1,null,null,null);e["a"]=i.exports},5326:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"auth-wrapper auth-v2"},[a("b-row",{staticClass:"auth-inner m-0"},[a("b-link",{staticClass:"brand-logo",attrs:{to:"/"}},[a("vuexy-logo"),a("h2",{staticClass:"brand-text text-primary ml-1"},[t._v(" Affiliate Marketing Portal "),a("br"),a("small",[t._v("Powered by Connexxion Telecom")])])],1),a("b-col",{staticClass:"d-none d-lg-flex align-items-center p-5",attrs:{lg:"8"}},[a("div",{staticClass:"w-100 d-lg-flex align-items-center justify-content-center px-5"},[a("b-img",{attrs:{fluid:"",src:t.imgUrl,alt:"Login V2"}})],1)]),a("b-col",{staticClass:"d-flex align-items-center auth-bg px-2 p-lg-5",attrs:{lg:"4"}},[a("b-col",{staticClass:"px-xl-2 mx-auto",attrs:{sm:"8",md:"6",lg:"12"}},[a("b-card-title",{staticClass:"font-weight-bold mb-1",attrs:{"title-tag":"h2"}},[t._v(" Welcome to "),a("strong",[t._v("AMP!")]),t._v(" 👋 ")]),a("b-card-text",{staticClass:"mb-2"},[t._v(" Please sign-in with your credentials to access your account ")]),a("validation-observer",{ref:"loginValidation"},[a("b-form",{staticClass:"auth-login-form mt-2",on:{submit:function(t){t.preventDefault()}}},[a("b-form-group",{attrs:{label:"Username","label-for":"login-username"}},[a("validation-provider",{attrs:{name:"username",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("b-form-input",{attrs:{id:"login-username",state:!(n.length>0)&&null,name:"login-username",placeholder:"johndoe"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("small",{staticClass:"text-danger"},[t._v(t._s(n[0]))])]}}])})],1),a("b-form-group",[a("div",{staticClass:"d-flex justify-content-between"},[a("label",{attrs:{for:"login-password"}},[t._v("Password")]),a("b-link",{attrs:{to:{name:"auth-forgot-password-v2"}}},[a("small",[t._v("Forgot Password?")])])],1),a("validation-provider",{attrs:{name:"password",rules:"required|min:5"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("b-input-group",{staticClass:"input-group-merge",class:n.length>0?"is-invalid":null},[a("b-form-input",{staticClass:"form-control-merge",attrs:{id:"login-password",state:!(n.length>0)&&null,type:t.passwordFieldType,name:"login-password",placeholder:"············"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("b-input-group-append",{attrs:{"is-text":""}},[a("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:t.passwordToggleIcon},on:{click:t.togglePasswordVisibility}})],1)],1),a("small",{staticClass:"text-danger"},[t._v(t._s(n[0]))])]}}])})],1),a("b-form-group",[a("b-form-checkbox",{attrs:{id:"remember-me",name:"checkbox-1"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[t._v(" Remember Me ")])],1),a("b-button",{attrs:{type:"submit",variant:"primary",block:""},on:{click:t.login}},[t._v(" Sign in ")])],1)],1),a("b-card-text",{staticClass:"text-center mt-2"},[a("span",[t._v("New on our platform? ")]),a("b-link",{attrs:{to:{name:"register"}}},[a("span",[t._v(" Create an account")])])],1)],1)],1)],1)],1)},s=[],r=a("7bb1"),o=a("088b"),i=a("a15b"),c=a("b28b"),l=a("aa59"),u=a("8226"),d=a("4797"),m=a("ccc0"),f=a("5e12"),p=a("c3e6"),g=a("d6e4"),b=a("4968"),h=a("4918"),v=a("11de"),w=a("1947"),x=a("8f03"),y=a("b91d"),O=a("4360"),k=a("a189"),C={components:{BRow:i["a"],BCol:c["a"],BLink:l["a"],BFormGroup:u["a"],BFormInput:d["a"],BInputGroupAppend:m["a"],BInputGroup:f["a"],BFormCheckbox:p["a"],BCardText:g["a"],BCardTitle:b["a"],BImg:h["a"],BForm:v["a"],BButton:w["a"],VuexyLogo:o["a"],ValidationProvider:r["b"],ValidationObserver:r["a"]},mixins:[y["a"],k["a"]],data:function(){return{status:"",password:"",userEmail:"",username:"",sideImg:a("5aa9"),required:x["c"],email:x["b"]}},computed:{passwordToggleIcon:function(){return"password"===this.passwordFieldType?"EyeIcon":"EyeOffIcon"},imgUrl:function(){return"dark"===O["a"].state.appConfig.layout.skin?(this.sideImg=a("ff0f"),this.sideImg):this.sideImg}}},j=C,I=(a("e21c"),a("2877")),_=Object(I["a"])(j,n,s,!1,null,null,null);e["default"]=_.exports},"5aa9":function(t,e,a){t.exports=a.p+"img/login-v2.72cd8a26.svg"},a189:function(t,e,a){"use strict";e["a"]={methods:{login:function(){var t=this;this.$refs.loginValidation.validate().then((function(e){if(e){var a={username:t.username,password:t.password};t.$store.dispatch("auth/login",{form:a}).then((function(){t.$router.push({name:"home"}).then((function(){t.toast("Welcome","LogInIcon","You have logged in successfully","success")}))})).catch((function(e){t.toast("Login Attempt","LogInIcon",e.response.data.messages.error,"danger")}))}else t.toast("Login Attempt","LogInIcon","You must fill in all form fields correctly","warning")}))},logout:function(){var t=this;this.$router.push({name:"login"}).then((function(){t.$store.dispatch("auth/logout").then((function(){t.toast("Thank You","LogOutIcon","You have logged out successfully","success")}))}))},register:function(){var t=this;this.$refs.registerValidation.validate().then((function(e){if(e){var a={firstname:t.firstname,lastname:t.lastname,username:t.username,email:t.regEmail,password:t.password,confirmPassword:t.confirmPassword};t.$store.dispatch("auth/register",{form:a}).then((function(e){t.$router.push({name:"login"}).then((function(){t.toast("Register","LogInIcon",e.data,"success")}))})).catch((function(e){t.toast("Register Attempt","LogInIcon",e.response.data.messages.error,"danger")}))}else t.toast("Register Attempt","LogInIcon","You must fill in all form fields correctly","warning")}))}}}},b91d:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n={data:function(){return{passwordFieldType:"password"}},methods:{togglePasswordVisibility:function(){this.passwordFieldType="password"===this.passwordFieldType?"text":"password"}}}},c3e6:function(t,e,a){"use strict";a.d(e,"a",(function(){return x}));var n,s=a("2b0e"),r=a("c637"),o=a("0056"),i=a("a723"),c=a("7b1e"),l=a("3c21"),u=function(t,e){for(var a=0;a<t.length;a++)if(Object(l["a"])(t[a],e))return a;return-1},d=a("d82f"),m=a("cf75"),f=a("d3cb");function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var h="indeterminate",v=o["Y"]+h,w=Object(m["d"])(Object(d["m"])(g(g({},f["c"]),{},(n={},b(n,h,Object(m["c"])(i["f"],!1)),b(n,"switch",Object(m["c"])(i["f"],!1)),b(n,"uncheckedValue",Object(m["c"])(i["a"],!1)),b(n,"value",Object(m["c"])(i["a"],!0)),n))),r["x"]),x=s["default"].extend({name:r["x"],mixins:[f["b"]],inject:{bvGroup:{from:"bvCheckGroup",default:null}},props:w,computed:{isChecked:function(){var t=this.value,e=this.computedLocalChecked;return Object(c["a"])(e)?u(e,t)>-1:Object(l["a"])(e,t)},isRadio:function(){return!1}},watch:b({},h,(function(t,e){Object(l["a"])(t,e)||this.setIndeterminate(t)})),mounted:function(){this.setIndeterminate(this[h])},methods:{computedLocalCheckedWatcher:function(t,e){if(!Object(l["a"])(t,e)){this.$emit(f["a"],t);var a=this.$refs.input;a&&this.$emit(v,a.indeterminate)}},handleChange:function(t){var e=this,a=t.target,n=a.checked,s=a.indeterminate,r=this.value,i=this.uncheckedValue,l=this.computedLocalChecked;if(Object(c["a"])(l)){var d=u(l,r);n&&d<0?l=l.concat(r):!n&&d>-1&&(l=l.slice(0,d).concat(l.slice(d+1)))}else l=n?r:i;this.computedLocalChecked=l,this.$nextTick((function(){e.$emit(o["d"],l),e.isGroup&&e.bvGroup.$emit(o["d"],l),e.$emit(v,s)}))},setIndeterminate:function(t){Object(c["a"])(this.computedLocalChecked)&&(t=!1);var e=this.$refs.input;e&&(e.indeterminate=t,this.$emit(v,t))}}})},e21c:function(t,e,a){"use strict";a("07ef")},ff0f:function(t,e,a){t.exports=a.p+"img/login-v2-dark.58db2eaf.svg"}}]);
//# sourceMappingURL=chunk-5f52558c.dec3029e.js.map