(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45e89a42"],{"07ef":function(t,a,e){},5326:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"auth-wrapper auth-v2"},[e("b-row",{staticClass:"auth-inner m-0"},[e("b-link",{staticClass:"brand-logo",attrs:{to:"/"}},[e("vuexy-logo"),e("h2",{staticClass:"brand-text text-primary ml-1"},[t._v(" Affiliate Marketing Portal "),e("br"),e("small",[t._v("Powered by Connexxion Telecom")])])],1),e("b-col",{staticClass:"d-none d-lg-flex align-items-center p-5",attrs:{lg:"8"}},[e("div",{staticClass:"w-100 d-lg-flex align-items-center justify-content-center px-5"},[e("b-img",{attrs:{fluid:"",src:t.imgUrl,alt:"Login V2"}})],1)]),e("b-col",{staticClass:"d-flex align-items-center auth-bg px-2 p-lg-5",attrs:{lg:"4"}},[e("b-col",{staticClass:"px-xl-2 mx-auto",attrs:{sm:"8",md:"6",lg:"12"}},[e("b-card-title",{staticClass:"font-weight-bold mb-1",attrs:{"title-tag":"h2"}},[t._v(" Welcome to "),e("strong",[t._v("AMP!")]),t._v(" 👋 ")]),e("b-card-text",{staticClass:"mb-2"},[t._v(" Please sign-in with your credentials to access your account ")]),e("validation-observer",{ref:"loginValidation"},[e("b-form",{staticClass:"auth-login-form mt-2",on:{submit:function(t){t.preventDefault()}}},[e("b-form-group",{attrs:{label:"Username","label-for":"login-username"}},[e("validation-provider",{attrs:{name:"username",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors;return[e("b-form-input",{attrs:{id:"login-username",state:!(s.length>0)&&null,name:"login-username",placeholder:"johndoe"},model:{value:t.username,callback:function(a){t.username=a},expression:"username"}}),e("small",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}])})],1),e("b-form-group",[e("div",{staticClass:"d-flex justify-content-between"},[e("label",{attrs:{for:"login-password"}},[t._v("Password")]),e("b-link",{attrs:{to:{name:"auth-forgot-password-v2"}}},[e("small",[t._v("Forgot Password?")])])],1),e("validation-provider",{attrs:{name:"password",rules:"required|min:5"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors;return[e("b-input-group",{staticClass:"input-group-merge",class:s.length>0?"is-invalid":null},[e("b-form-input",{staticClass:"form-control-merge",attrs:{id:"login-password",state:!(s.length>0)&&null,type:t.passwordFieldType,name:"login-password",placeholder:"············"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}}),e("b-input-group-append",{attrs:{"is-text":""}},[e("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:t.passwordToggleIcon},on:{click:t.togglePasswordVisibility}})],1)],1),e("small",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}])})],1),e("b-form-group",[e("b-form-checkbox",{attrs:{id:"remember-me",name:"checkbox-1"},model:{value:t.status,callback:function(a){t.status=a},expression:"status"}},[t._v(" Remember Me ")])],1),e("b-button",{attrs:{type:"submit",variant:"primary",block:""},on:{click:t.login}},[t._v(" Sign in ")])],1)],1),e("b-card-text",{staticClass:"text-center mt-2"},[e("span",[t._v("New on our platform? ")]),e("b-link",{attrs:{to:{name:"register"}}},[e("span",[t._v(" Create an account")])])],1)],1)],1)],1)],1)},r=[],o=e("7bb1"),n=e("088b"),i=e("a15b"),l=e("b28b"),c=e("aa59"),u=e("8226"),d=e("4797"),m=e("ccc0"),p=e("5e12"),g=e("c3e6"),b=e("d6e4"),f=e("4968"),v=e("4918"),w=e("11de"),x=e("1947"),h=e("8f03"),C=e("b91d"),k=e("4360"),_=e("a189"),y={components:{BRow:i["a"],BCol:l["a"],BLink:c["a"],BFormGroup:u["a"],BFormInput:d["a"],BInputGroupAppend:m["a"],BInputGroup:p["a"],BFormCheckbox:g["a"],BCardText:b["a"],BCardTitle:f["a"],BImg:v["a"],BForm:w["a"],BButton:x["a"],VuexyLogo:n["a"],ValidationProvider:o["b"],ValidationObserver:o["a"]},mixins:[C["a"],_["a"]],data:function(){return{status:"",password:"",userEmail:"",username:"",sideImg:e("5aa9"),required:h["c"],email:h["b"]}},computed:{passwordToggleIcon:function(){return"password"===this.passwordFieldType?"EyeIcon":"EyeOffIcon"},imgUrl:function(){return"dark"===k["a"].state.appConfig.layout.skin?(this.sideImg=e("ff0f"),this.sideImg):this.sideImg}}},B=y,I=(e("e21c"),e("2877")),P=Object(I["a"])(B,s,r,!1,null,null,null);a["default"]=P.exports},"5aa9":function(t,a,e){t.exports=e.p+"img/login-v2.72cd8a26.svg"},e21c:function(t,a,e){"use strict";e("07ef")},ff0f:function(t,a,e){t.exports=e.p+"img/login-v2-dark.58db2eaf.svg"}}]);
//# sourceMappingURL=chunk-45e89a42.9590040b.js.map