(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62392853"],{"26d2":function(t,e,a){"use strict";a.d(e,"a",(function(){return q}));var n,r=a("2b0e"),s=a("c637"),i=a("0056"),c=a("a723"),o=a("6d40"),l=a("906c"),u=a("7b1e"),d=a("a8c8"),f=a("3a58"),b=a("d82f"),p=a("cf75"),g=a("9bfa"),m=a("9b76"),h=a("2326"),O=a("6b77"),v=a("58f2"),P=a("fa73"),j=a("686b"),x=a("8c18"),y=a("aa59");function k(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function w(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?k(Object(a),!0).forEach((function(e){C(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function C(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var N=Object(v["a"])("value",{type:c["h"],defaultValue:null,validator:function(t){return!(!Object(u["f"])(t)&&Object(f["c"])(t,0)<1)||(Object(j["a"])('"v-model" value must be a number greater than "0"',s["ab"]),!1)}}),_=N.mixin,B=N.props,T=N.prop,$=N.event,L=3,S=5,A=function(t,e){return Object(h["c"])(e,(function(e,a){return{number:t+a,classes:null}}))},D=function(t){var e=Object(f["c"])(t)||1;return e<1?S:e},E=function(t,e){var a=Object(f["c"])(t)||1;return a>e?e:a<1?1:a},I=function(t){if(t.keyCode===g["j"])return Object(O["f"])(t,{immediatePropagation:!0}),t.currentTarget.click(),!1},z=Object(p["d"])(Object(b["m"])(w(w({},B),{},{align:Object(p["c"])(c["s"],"left"),ariaLabel:Object(p["c"])(c["s"],"Pagination"),disabled:Object(p["c"])(c["f"],!1),ellipsisClass:Object(p["c"])(c["d"]),ellipsisText:Object(p["c"])(c["s"],"…"),firstClass:Object(p["c"])(c["d"]),firstNumber:Object(p["c"])(c["f"],!1),firstText:Object(p["c"])(c["s"],"«"),hideEllipsis:Object(p["c"])(c["f"],!1),hideGotoEndButtons:Object(p["c"])(c["f"],!1),labelFirstPage:Object(p["c"])(c["s"],"Go to first page"),labelLastPage:Object(p["c"])(c["s"],"Go to last page"),labelNextPage:Object(p["c"])(c["s"],"Go to next page"),labelPage:Object(p["c"])(c["k"],"Go to page"),labelPrevPage:Object(p["c"])(c["s"],"Go to previous page"),lastClass:Object(p["c"])(c["d"]),lastNumber:Object(p["c"])(c["f"],!1),lastText:Object(p["c"])(c["s"],"»"),limit:Object(p["c"])(c["n"],S,(function(t){return!(Object(f["c"])(t,0)<1)||(Object(j["a"])('Prop "limit" must be a number greater than "0"',s["ab"]),!1)})),nextClass:Object(p["c"])(c["d"]),nextText:Object(p["c"])(c["s"],"›"),pageClass:Object(p["c"])(c["d"]),pills:Object(p["c"])(c["f"],!1),prevClass:Object(p["c"])(c["d"]),prevText:Object(p["c"])(c["s"],"‹"),size:Object(p["c"])(c["s"])})),"pagination"),F=r["default"].extend({mixins:[_,x["a"]],props:z,data:function(){var t=Object(f["c"])(this[T],0);return t=t>0?t:-1,{currentPage:t,localNumberOfPages:1,localLimit:S}},computed:{btnSize:function(){var t=this.size;return t?"pagination-".concat(t):""},alignment:function(){var t=this.align;return"center"===t?"justify-content-center":"end"===t||"right"===t?"justify-content-end":"fill"===t?"text-center":""},styleClass:function(){return this.pills?"b-pagination-pills":""},computedCurrentPage:function(){return E(this.currentPage,this.localNumberOfPages)},paginationParams:function(){var t=this.localLimit,e=this.localNumberOfPages,a=this.computedCurrentPage,n=this.hideEllipsis,r=this.firstNumber,s=this.lastNumber,i=!1,c=!1,o=t,l=1;e<=t?o=e:a<t-1&&t>L?(n&&!s||(c=!0,o=t-(r?0:1)),o=Object(d["d"])(o,t)):e-a+2<t&&t>L?(n&&!r||(i=!0,o=t-(s?0:1)),l=e-o+1):(t>L&&(o=t-(n?0:2),i=!(n&&!r),c=!(n&&!s)),l=a-Object(d["b"])(o/2)),l<1?(l=1,i=!1):l>e-o&&(l=e-o+1,c=!1),i&&r&&l<4&&(o+=2,l=1,i=!1);var u=l+o-1;return c&&s&&u>e-3&&(o+=u===e-2?2:3,c=!1),t<=L&&(r&&1===l?o=Object(d["d"])(o+1,e,t+1):s&&e===l+o-1&&(l=Object(d["c"])(l-1,1),o=Object(d["d"])(e-l+1,e,t+1))),o=Object(d["d"])(o,e-l+1),{showFirstDots:i,showLastDots:c,numberOfLinks:o,startNumber:l}},pageList:function(){var t=this.paginationParams,e=t.numberOfLinks,a=t.startNumber,n=this.computedCurrentPage,r=A(a,e);if(r.length>3){var s=n-a,i="bv-d-xs-down-none";if(0===s)for(var c=3;c<r.length;c++)r[c].classes=i;else if(s===r.length-1)for(var o=0;o<r.length-3;o++)r[o].classes=i;else{for(var l=0;l<s-1;l++)r[l].classes=i;for(var u=r.length-1;u>s+1;u--)r[u].classes=i}}return r}},watch:(n={},C(n,T,(function(t,e){t!==e&&(this.currentPage=E(t,this.localNumberOfPages))})),C(n,"currentPage",(function(t,e){t!==e&&this.$emit($,t>0?t:null)})),C(n,"limit",(function(t,e){t!==e&&(this.localLimit=D(t))})),n),created:function(){var t=this;this.localLimit=D(this.limit),this.$nextTick((function(){t.currentPage=t.currentPage>t.localNumberOfPages?t.localNumberOfPages:t.currentPage}))},methods:{handleKeyNav:function(t){var e=t.keyCode,a=t.shiftKey;this.isNav||(e===g["f"]||e===g["k"]?(Object(O["f"])(t,{propagation:!1}),a?this.focusFirst():this.focusPrev()):e!==g["i"]&&e!==g["a"]||(Object(O["f"])(t,{propagation:!1}),a?this.focusLast():this.focusNext()))},getButtons:function(){return Object(l["D"])("button.page-link, a.page-link",this.$el).filter((function(t){return Object(l["u"])(t)}))},focusCurrent:function(){var t=this;this.$nextTick((function(){var e=t.getButtons().find((function(e){return Object(f["c"])(Object(l["h"])(e,"aria-posinset"),0)===t.computedCurrentPage}));Object(l["d"])(e)||t.focusFirst()}))},focusFirst:function(){var t=this;this.$nextTick((function(){var e=t.getButtons().find((function(t){return!Object(l["r"])(t)}));Object(l["d"])(e)}))},focusLast:function(){var t=this;this.$nextTick((function(){var e=t.getButtons().reverse().find((function(t){return!Object(l["r"])(t)}));Object(l["d"])(e)}))},focusPrev:function(){var t=this;this.$nextTick((function(){var e=t.getButtons(),a=e.indexOf(Object(l["g"])());a>0&&!Object(l["r"])(e[a-1])&&Object(l["d"])(e[a-1])}))},focusNext:function(){var t=this;this.$nextTick((function(){var e=t.getButtons(),a=e.indexOf(Object(l["g"])());a<e.length-1&&!Object(l["r"])(e[a+1])&&Object(l["d"])(e[a+1])}))}},render:function(t){var e=this,a=this.disabled,n=this.labelPage,r=this.ariaLabel,s=this.isNav,i=this.localNumberOfPages,c=this.computedCurrentPage,o=this.pageList.map((function(t){return t.number})),l=this.paginationParams,d=l.showFirstDots,f=l.showLastDots,b="fill"===this.align,g=[],h=function(t){return t===c},O=this.currentPage<1,v=function(n,r,c,o,l,u,d){var f=a||h(u)||O||n<1||n>i,p=n<1?1:n>i?i:n,g={disabled:f,page:p,index:p-1},m=e.normalizeSlot(c,g)||Object(P["g"])(o)||t(),v=t(f?"span":s?y["a"]:"button",{staticClass:"page-link",class:{"flex-grow-1":!s&&!f&&b},props:f||!s?{}:e.linkProps(n),attrs:{role:s?null:"menuitem",type:s||f?null:"button",tabindex:f||s?null:"-1","aria-label":r,"aria-controls":e.ariaControls||null,"aria-disabled":f?"true":null},on:f?{}:{"!click":function(t){e.onClick(t,n)},keydown:I}},[m]);return t("li",{key:d,staticClass:"page-item",class:[{disabled:f,"flex-fill":b,"d-flex":b&&!s&&!f},l],attrs:{role:s?null:"presentation","aria-hidden":f?"true":null}},[v])},j=function(a){return t("li",{staticClass:"page-item",class:["disabled","bv-d-xs-down-none",b?"flex-fill":"",e.ellipsisClass],attrs:{role:"separator"},key:"ellipsis-".concat(a?"last":"first")},[t("span",{staticClass:"page-link"},[e.normalizeSlot(m["k"])||Object(P["g"])(e.ellipsisText)||t()])])},x=function(r,c){var o=r.number,l=h(o)&&!O,d=a?null:l||O&&0===c?"0":"-1",f={role:s?null:"menuitemradio",type:s||a?null:"button","aria-disabled":a?"true":null,"aria-controls":e.ariaControls||null,"aria-label":Object(p["b"])(n)?n(o):"".concat(Object(u["e"])(n)?n():n," ").concat(o),"aria-checked":s?null:l?"true":"false","aria-current":s&&l?"page":null,"aria-posinset":s?null:o,"aria-setsize":s?null:i,tabindex:s?null:d},g=Object(P["g"])(e.makePage(o)),v={page:o,index:o-1,content:g,active:l,disabled:a},j=t(a?"span":s?y["a"]:"button",{props:a||!s?{}:e.linkProps(o),staticClass:"page-link",class:{"flex-grow-1":!s&&!a&&b},attrs:f,on:a?{}:{"!click":function(t){e.onClick(t,o)},keydown:I}},[e.normalizeSlot(m["C"],v)||g]);return t("li",{staticClass:"page-item",class:[{disabled:a,active:l,"flex-fill":b,"d-flex":b&&!s&&!a},r.classes,e.pageClass],attrs:{role:s?null:"presentation"},key:"page-".concat(o)},[j])},k=t();this.firstNumber||this.hideGotoEndButtons||(k=v(1,this.labelFirstPage,m["n"],this.firstText,this.firstClass,1,"pagination-goto-first")),g.push(k),g.push(v(c-1,this.labelPrevPage,m["E"],this.prevText,this.prevClass,1,"pagination-goto-prev")),g.push(this.firstNumber&&1!==o[0]?x({number:1},0):t()),g.push(d?j(!1):t()),this.pageList.forEach((function(t,a){var n=d&&e.firstNumber&&1!==o[0]?1:0;g.push(x(t,a+n))})),g.push(f?j(!0):t()),g.push(this.lastNumber&&o[o.length-1]!==i?x({number:i},-1):t()),g.push(v(c+1,this.labelNextPage,m["B"],this.nextText,this.nextClass,i,"pagination-goto-next"));var w=t();this.lastNumber||this.hideGotoEndButtons||(w=v(i,this.labelLastPage,m["t"],this.lastText,this.lastClass,i,"pagination-goto-last")),g.push(w);var C=t("ul",{staticClass:"pagination",class:["b-pagination",this.btnSize,this.alignment,this.styleClass],attrs:{role:s?null:"menubar","aria-disabled":a?"true":"false","aria-label":s?null:r||null},on:s?{}:{keydown:this.handleKeyNav},ref:"ul"},g);return s?t("nav",{attrs:{"aria-disabled":a?"true":null,"aria-hidden":a?"true":"false","aria-label":s&&r||null}},[C]):C}});function G(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function R(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?G(Object(a),!0).forEach((function(e){V(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):G(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function V(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var Y=20,K=0,J=function(t){return Object(d["c"])(Object(f["c"])(t)||Y,1)},M=function(t){return Object(d["c"])(Object(f["c"])(t)||K,0)},U=Object(p["d"])(Object(b["m"])(R(R({},z),{},{ariaControls:Object(p["c"])(c["s"]),perPage:Object(p["c"])(c["n"],Y),totalRows:Object(p["c"])(c["n"],K)})),s["ab"]),q=r["default"].extend({name:s["ab"],mixins:[F],props:U,computed:{numberOfPages:function(){var t=Object(d["a"])(M(this.totalRows)/J(this.perPage));return t<1?1:t},pageSizeNumberOfPages:function(){return{perPage:J(this.perPage),totalRows:M(this.totalRows),numberOfPages:this.numberOfPages}}},watch:{pageSizeNumberOfPages:function(t,e){Object(u["o"])(e)||(t.perPage!==e.perPage&&t.totalRows===e.totalRows||t.numberOfPages!==e.numberOfPages&&this.currentPage>t.numberOfPages)&&(this.currentPage=1),this.localNumberOfPages=t.numberOfPages}},created:function(){var t=this;this.localNumberOfPages=this.numberOfPages;var e=Object(f["c"])(this[T],0);e>0?this.currentPage=e:this.$nextTick((function(){t.currentPage=0}))},methods:{onClick:function(t,e){var a=this;if(e!==this.currentPage){var n=t.target,r=new o["a"](i["E"],{cancelable:!0,vueTarget:this,target:n});this.$emit(r.type,r,e),r.defaultPrevented||(this.currentPage=e,this.$emit(i["d"],this.currentPage),this.$nextTick((function(){Object(l["u"])(n)&&a.$el.contains(n)?Object(l["d"])(n):a.focusCurrent()})))}},makePage:function(t){return t},linkProps:function(){return{}}}})},"2ea8":function(t,e,a){},"404f":function(t,e,a){},"4a79":function(t,e,a){"use strict";a("404f")},b4ef:function(t,e,a){"use strict";a("2ea8")},e13e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-card",{staticClass:"mb-0",attrs:{"no-body":""}},[a("div",{staticClass:"m-2"},[a("b-row",[a("b-col",{staticClass:"d-flex align-items-center justify-content-start mb-1 mb-md-0",attrs:{cols:"12",md:"6"}},[a("label",[t._v("Show")]),a("v-select",{staticClass:"per-page-selector d-inline-block mx-50",attrs:{options:t.perPageOptions,clearable:!1},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),a("label",[t._v("entries")])],1),a("b-col",{attrs:{cols:"12",md:"6"}},[a("div",{staticClass:"d-flex align-items-center justify-content-end"},[a("b-form-input",{staticClass:"d-inline-block mr-1",attrs:{placeholder:"Search..."},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),a("b-button",{attrs:{variant:"primary",to:{name:"add-product"}}},[a("span",{staticClass:"text-nowrap"},[t._v("Add Product")])])],1)])],1)],1),a("b-table",{staticClass:"position-relative mb-0",attrs:{items:t.products,fields:t.fields,"per-page":t.perPage,"current-page":t.currentPage,filter:t.filter,striped:"",responsive:"","show-empty":""},on:{filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(name)",fn:function(e){return[a("b-media",{attrs:{"vertical-align":"center"},scopedSlots:t._u([{key:"aside",fn:function(){return[a("b-avatar",{attrs:{size:"32",rounded:"",src:"",text:t.avatarText(""+e.item.name),variant:"light-info",to:{name:"view-admin"}}})]},proxy:!0}],null,!0)},[a("b-link",{staticClass:"font-weight-bold d-block text-nowrap text-uppercase",attrs:{to:{name:"view-admin"}}},[t._v(" "+t._s(e.item.name)+" ")]),a("small",{staticClass:"text-muted"},[t._v(t._s(e.item.category))])],1)]}},{key:"cell(url)",fn:function(e){return[a("a",{attrs:{href:e.item.url,target:"_blank"}},[t._v(" "+t._s(e.item.url)+" ")])]}},{key:"cell(num_plans)",fn:function(e){return[t._v(" "+t._s(e.item.num_plans)+" plans ")]}},{key:"cell(status)",fn:function(e){return["1"===e.item.status?a("b-badge",{staticClass:"text-capitalize",attrs:{pill:"",variant:"light-success"}},[t._v(" Active ")]):t._e(),"0"===e.item.status?a("b-badge",{staticClass:"text-capitalize",attrs:{pill:"",variant:"light-danger"}},[t._v(" Inactive ")]):t._e()]}},{key:"cell(created_at)",fn:function(e){return[t._v(" "+t._s(new Date(e.item.created_at).toDateString())+" ")]}},{key:"cell(actions)",fn:function(e){return[a("div",{staticClass:"text-nowrap"},[a("feather-icon",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"View",expression:"'View'",modifiers:{hover:!0,top:!0}}],staticClass:"cursor-pointer mx-1",attrs:{id:"view-"+e.item.product_id,icon:"EyeIcon",size:"16"},on:{click:function(a){return t.$router.push({name:"view-product",params:{productID:e.item.product_id}})}}}),a("feather-icon",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Edit",expression:"'Edit'",modifiers:{hover:!0,top:!0}}],staticClass:"cursor-pointer",attrs:{id:"edit-"+e.item.product_id,icon:"EditIcon",size:"16"}})],1)]}}])}),a("div",{staticClass:"mx-2 mb-2 mt-1"},[a("b-row",[a("b-col",{staticClass:"d-flex align-items-center justify-content-center justify-content-sm-start",attrs:{cols:"12",sm:"6"}},[a("span",{staticClass:"text-muted"},[t._v("There are "+t._s(t.numProducts)+" products")])]),a("b-col",{staticClass:"d-flex align-items-center justify-content-center justify-content-sm-end",attrs:{cols:"12",sm:"6"}},[a("b-pagination",{staticClass:"mb-0 mt-1 mt-sm-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)],1)],1)},r=[],s=a("5530"),i=a("205f"),c=a("34b6"),o=a("e8a3"),l=a("e98b"),u=a("a15b"),d=a("b28b"),f=a("29a1"),b=a("4797"),p=a("1947"),g=a("26d2"),m=a("aa59"),h=a("2616"),O=a("4a7a"),v=a.n(O),P=a("e350"),j=a("0e20"),x=a("2f62"),y={components:{BCard:i["a"],BMedia:c["a"],BAvatar:o["a"],BBadge:l["a"],BRow:u["a"],BCol:d["a"],BTable:f["a"],BFormInput:b["a"],BButton:p["a"],BPagination:g["a"],BLink:m["a"],vSelect:v.a},directives:{"b-tooltip":h["a"]},mixins:[P["a"]],data:function(){return{perPage:5,perPageOptions:[5,10,25,100],filter:null,totalRows:this.$store.getters["admin/getNumAdmins"],currentPage:1,avatarText:j["a"],fields:[{key:"name",sortable:!0},{key:"url",sortable:!0},{key:"num_plans",label:"product plans",sortable:!0},{key:"status"},{key:"created_at",label:"Added",sortable:!0},{key:"actions",thStyle:{width:"10%"}}]}},computed:Object(s["a"])({},Object(x["b"])({products:"product/getAllProducts",numProducts:"product/getNumProducts"})),created:function(){this.getProducts()},methods:{onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}}},k=y,w=(a("b4ef"),a("4a79"),a("2877")),C=Object(w["a"])(k,n,r,!1,null,"135f1ad6",null);e["default"]=C.exports},e350:function(t,e,a){"use strict";a("a4d3"),a("e01a"),a("b0c0");e["a"]={methods:{getProducts:function(){var t=this;this.$store.dispatch("product/getProducts").then().catch((function(e){t.toast("Get All Products Attempt","BellIcon",e.response.data.messages.error,"danger")}))},addProduct:function(){var t=this;this.$refs.addProductValidation.validate().then((function(e){if(e){var a={name:t.name,url:t.productUrl,category:t.category.value,description:t.description};t.$store.dispatch("product/addProduct",{form:a}).then((function(){t.$router.push({name:"products"}).then((function(){t.toast("Add Admin","BellIcon","You have successfully added the product","success")}))})).catch((function(e){t.toast("Add Product Attempt","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Add Product Attempt","BellIcon","You must fill in all form fields correctly","warning")}))},getProduct:function(t){var e=this;this.$store.dispatch("product/getProduct",{productID:t}).then().catch((function(t){e.toast("Get Product Attempt","BellIcon",t.response.data.messages.error,"danger")}))},addPlan:function(){var t=this;this.$refs.addPlanValidation.validate().then((function(e){if(e){var a={productID:t.productID,planName:t.planName,planPrice:t.planPrice,planLink:t.planLink,planCommission:t.planCommission,planSlug:t.planSlug};t.$store.dispatch("product/addPlan",{form:a}).then((function(){t.toast("Add Product Plan","BellIcon","You have successfully added the product plan","success"),t.$nextTick((function(){t.$refs["add-plan-modal"].toggle("#add-btn")})),t.planName=null,t.planPrice=null,t.planLink=null,t.planCommission=null,t.planSlug=null})).catch((function(e){t.toast("Add Product Plan Attempt","BellIcon",e.response.data.messages.error,"danger")}))}else t.toast("Add Product Plan Attempt","BellIcon","You must fill in all form fields correctly","warning")}))}}}}}]);
//# sourceMappingURL=chunk-62392853.9e4b1ba9.js.map