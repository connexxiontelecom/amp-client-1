(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20f529b0"],{"0722":function(e,o,t){"use strict";t("d719")},"088b":function(e,o,t){"use strict";var a=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("img",{attrs:{id:"logo",src:t("587b"),alt:"amp-logo"}})},r=[],i=(t("6f45"),t("2877")),n={},s=Object(i["a"])(n,a,r,!1,null,"2de93016",null);o["a"]=s.exports},"0f91":function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.EmailJSResponseStatus=o.sendForm=o.send=o.init=void 0;var a=t("3245");Object.defineProperty(o,"EmailJSResponseStatus",{enumerable:!0,get:function(){return a.EmailJSResponseStatus}});var r=t("5129"),i=null,n="https://api.emailjs.com";function s(e,o,t){return void 0===t&&(t={}),new Promise((function(r,i){var n=new XMLHttpRequest;for(var s in n.addEventListener("load",(function(e){var o=new a.EmailJSResponseStatus(e.target);200===o.status||"OK"===o.text?r(o):i(o)})),n.addEventListener("error",(function(e){i(new a.EmailJSResponseStatus(e.target))})),n.open("POST",e,!0),t)n.setRequestHeader(s,t[s]);n.send(o)}))}function c(e){var o=document&&document.getElementById("g-recaptcha-response");return o&&o.value&&(e["g-recaptcha-response"]=o.value),o=null,e}function l(e){return"#"!==e[0]&&"."!==e[0]?"#"+e:e}function u(e,o){i=e,n=o||"https://api.emailjs.com"}function p(e,o,t,a){var r={lib_version:"2.6.4",user_id:a||i,service_id:e,template_id:o,template_params:c(t)};return s(n+"/api/v1.0/email/send",JSON.stringify(r),{"Content-type":"application/json"})}function v(e,o,t,a){if("string"===typeof t&&(t=document.querySelector(l(t))),!t||"FORM"!==t.nodeName)throw"Expected the HTML form element or the style selector of form";r.UI.progressState(t);var c=new FormData(t);return c.append("lib_version","2.6.4"),c.append("service_id",e),c.append("template_id",o),c.append("user_id",a||i),s(n+"/api/v1.0/email/send-form",c).then((function(e){return r.UI.successState(t),e}),(function(e){return r.UI.errorState(t),Promise.reject(e)}))}o.init=u,o.send=p,o.sendForm=v,o.default={init:u,send:p,sendForm:v}},"18ac":function(e,o,t){"use strict";t.r(o);var a=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"misc-wrapper"},[t("b-link",{staticClass:"brand-logo",attrs:{to:"/"}},[t("vuexy-logo"),t("h2",{staticClass:"brand-text text-primary ml-1"},[e._v(" Affiliate Marketing Portal "),t("br"),t("small",[e._v("Powered by Connexxion Telecom")])])],1),t("div",{staticClass:"mt-5 p-2 p-sm-3"},[e._m(0),t("b-button",{staticClass:"mb-1 btn-sm-block mt-2",attrs:{variant:"primary",to:{name:"register"}}},[e._v(" Go Back ")])],1)],1)},r=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"w-100"},[t("h2",{staticClass:"mb-1",staticStyle:{"text-align":"center"}},[t("b",[e._v("PRIVACY POLICY")])]),t("p",[e._v("Effective date: 2021-04-01")]),t("p",[e._v("1. "),t("b",[e._v("Introduction")])]),t("p",[e._v("Welcome to "),t("b",[e._v(" AMP Powered by Connexxion Telecom")]),e._v(".")]),t("p",[t("b",[e._v("AMP Powered by Connexxion Telecom")]),e._v(" (“us”, “we”, or “our”) operates "),t("b",[e._v("https://amp.connexxiontelecom.com")]),e._v(" (hereinafter referred to as "),t("b",[e._v("“Service”")]),e._v(").")]),t("p",[e._v("Our Privacy Policy governs your visit to "),t("b",[e._v("https://amp.connexxiontelecom.com")]),e._v(", and explains how we collect, safeguard and disclose information that results from your use of our Service.")]),t("p",[e._v("We use your data to provide and improve Service. By using Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.")]),t("p",[e._v("Our Terms and Conditions ("),t("b",[e._v("“Terms”")]),e._v(") govern all use of our Service and together with the Privacy Policy constitutes your agreement with us ("),t("b",[e._v("“agreement”")]),e._v(").")]),t("p",[e._v("2. "),t("b",[e._v("Definitions")])]),t("p",[t("b",[e._v("SERVICE")]),e._v(" means the https://amp.connexxiontelecom.com website operated by AMP Powered by Connexxion Telecom.")]),t("p",[t("b",[e._v("PERSONAL DATA")]),e._v(" means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).")]),t("p",[t("b",[e._v("USAGE DATA")]),e._v(" is data collected automatically either generated by the use of Service or from Service infrastructure itself (for example, the duration of a page visit).")]),t("p",[t("b",[e._v("COOKIES")]),e._v(" are small files stored on your device (computer or mobile device).")]),t("p",[t("b",[e._v("DATA CONTROLLER")]),e._v(" means a natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal data are, or are to be, processed. For the purpose of this Privacy Policy, we are a Data Controller of your data.")]),t("p",[t("b",[e._v("DATA PROCESSORS (OR SERVICE PROVIDERS)")]),e._v(" means any natural or legal person who processes the data on behalf of the Data Controller. We may use the services of various Service Providers in order to process your data more effectively.")]),e._v(" "),t("p",[t("b",[e._v("DATA SUBJECT")]),e._v(" is any living individual who is the subject of Personal Data.")]),t("p",[t("b",[e._v("THE USER")]),e._v(" is the individual using our Service. The User corresponds to the Data Subject, who is the subject of Personal Data.")]),t("p",[e._v("3. "),t("b",[e._v("Information Collection and Use")])]),t("p",[e._v("We collect several different types of information for various purposes to provide and improve our Service to you.")]),t("p",[e._v("4. "),t("b",[e._v("Types of Data Collected")])]),t("p",[t("b",[e._v("Personal Data")])]),t("p",[e._v("While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("),t("b",[e._v("“Personal Data”")]),e._v("). Personally identifiable information may include, but is not limited to:")]),t("p",[e._v("0.1. Email address")]),t("p",[e._v("0.2. First name and last name")]),t("p",[e._v("0.3. Phone number")]),t("p",[e._v("0.4. Address, Country, State, Province, ZIP/Postal code, City")]),t("p",[e._v("0.5. Cookies and Usage Data")]),t("p",[e._v("We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link.")]),t("p",[t("b",[e._v("Usage Data")])]),t("p",[e._v("We may also collect information that your browser sends whenever you visit our Service or when you access Service by or through any device ("),t("b",[e._v("“Usage Data”")]),e._v(").")]),t("p",[e._v("This Usage Data may include information such as your computer’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.")]),t("p",[e._v("When you access Service with a device, this Usage Data may include information such as the type of device you use, your device unique ID, the IP address of your device, your device operating system, the type of Internet browser you use, unique device identifiers and other diagnostic data.")]),t("p",[t("b",[e._v("Tracking Cookies Data")])]),t("p",[e._v("We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.")]),t("p",[e._v("Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyze our Service.")]),t("p",[e._v("You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.")]),t("p",[e._v("Examples of Cookies we use:")]),t("p",[e._v("0.1. "),t("b",[e._v("Session Cookies:")]),e._v(" We use Session Cookies to operate our Service.")]),t("p",[e._v("0.2. "),t("b",[e._v("Preference Cookies:")]),e._v(" We use Preference Cookies to remember your preferences and various settings.")]),t("p",[e._v("0.3. "),t("b",[e._v("Security Cookies:")]),e._v(" We use Security Cookies for security purposes.")]),t("p",[e._v("0.4. "),t("b",[e._v("Advertising Cookies:")]),e._v(" Advertising Cookies are used to serve you with advertisements that may be relevant to you and your interests.")]),t("p",[t("b",[e._v("Other Data")])]),t("p",[e._v("While using our Service, we may also collect the following information: sex, age, date of birth, place of birth, passport details, citizenship, registration at place of residence and actual address, telephone number (work, mobile), details of documents on education, qualification, professional training, employment agreements, "),t("a",{attrs:{href:"https://policymaker.io/non-disclosure-agreement/"}},[e._v("NDA agreements")]),e._v(", information on bonuses and compensation, information on marital status, family members, social security (or other taxpayer identification) number, office location and other data.")]),t("p",[e._v("5. "),t("b",[e._v("Use of Data")])]),t("p",[e._v("AMP Powered by Connexxion Telecom uses the collected data for various purposes:")]),t("p",[e._v("0.1. to provide and maintain our Service;")]),t("p",[e._v("0.2. to notify you about changes to our Service;")]),t("p",[e._v("0.3. to allow you to participate in interactive features of our Service when you choose to do so;")]),t("p",[e._v("0.4. to provide customer support;")]),t("p",[e._v("0.5. to gather analysis or valuable information so that we can improve our Service;")]),t("p",[e._v("0.6. to monitor the usage of our Service;")]),t("p",[e._v("0.7. to detect, prevent and address technical issues;")]),t("p",[e._v("0.8. to fulfil any other purpose for which you provide it;")]),t("p",[e._v("0.9. to carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection;")]),t("p",[e._v("0.10. to provide you with notices about your account and/or subscription, including expiration and renewal notices, email-instructions, etc.;")]),t("p",[e._v("0.11. to provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information;")]),t("p",[e._v("0.12. in any other way we may describe when you provide the information;")]),t("p",[e._v("0.13. for any other purpose with your consent.")]),t("p",[e._v("6. "),t("b",[e._v("Retention of Data")])]),t("p",[e._v("We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.")]),t("p",[e._v("We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.")]),t("p",[e._v("7. "),t("b",[e._v("Transfer of Data")])]),t("p",[e._v("Your information, including Personal Data, may be transferred to – and maintained on – computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.")]),t("p",[e._v("If you are located outside Nigeria and choose to provide information to us, please note that we transfer the data, including Personal Data, to Nigeria and process it there.")]),t("p",[e._v("Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.")]),t("p",[e._v("AMP Powered by Connexxion Telecom will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organisation or a country unless there are adequate controls in place including the security of your data and other personal information.")]),t("p",[e._v("8. "),t("b",[e._v("Disclosure of Data")])]),t("p",[e._v("We may disclose personal information that we collect, or you provide:")]),t("p",[e._v("0.1. "),t("b",[e._v("Business Transaction.")])]),t("p",[e._v("If we or our subsidiaries are involved in a merger, acquisition or asset sale, your Personal Data may be transferred.")]),t("p",[e._v("0.2. "),t("b",[e._v("Other cases. We may disclose your information also:")])]),t("p",[e._v("0.2.1. to our subsidiaries and affiliates;")]),t("p",[e._v("0.2.2. to contractors, service providers, and other third parties we use to support our business;")]),t("p",[e._v("0.2.3. to fulfill the purpose for which you provide it;")]),t("p",[e._v("0.2.4. for the purpose of including your company’s logo on our website;")]),t("p",[e._v("0.2.5. for any other purpose disclosed by us when you provide the information;")]),t("p",[e._v("0.2.6. with your consent in any other cases;")]),t("p",[e._v("0.2.7. if we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, our customers, or others.")]),t("p",[e._v("9. "),t("b",[e._v("Security of Data")])]),t("p",[e._v("The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.")]),t("p",[e._v("10. "),t("b",[e._v("Your Data Protection Rights Under General Data Protection Regulation (GDPR) ")])]),t("p",[e._v("If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data protection rights, covered by GDPR.")]),t("p",[e._v("We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.")]),t("p",[e._v(" If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please email us at "),t("b",[e._v("support@connexxiontelecom.com")]),e._v(".")]),t("p",[e._v("In certain circumstances, you have the following data protection rights:")]),t("p",[e._v("0.1. the right to access, update or to delete the information we have on you;")]),t("p",[e._v("0.2. the right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete;")]),t("p",[e._v("0.3. the right to object. You have the right to object to our processing of your Personal Data;")]),t("p",[e._v("0.4. the right of restriction. You have the right to request that we restrict the processing of your personal information;")]),t("p",[e._v("0.5. the right to data portability. You have the right to be provided with a copy of your Personal Data in a structured, machine-readable and commonly used format;")]),t("p",[e._v("0.6. the right to withdraw consent. You also have the right to withdraw your consent at any time where we rely on your consent to process your personal information;")]),t("p",[e._v("Please note that we may ask you to verify your identity before responding to such requests. Please note, we may not able to provide Service without some necessary data.")]),t("p",[e._v("You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the European Economic Area (EEA).")]),t("p",[e._v("11. "),t("b",[e._v("Your Data Protection Rights under the California Privacy Protection Act (CalOPPA)")])]),t("p",[e._v("CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law’s reach stretches well beyond California to require a person or company in the United States (and conceivable the world) that operates websites collecting personally identifiable information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals with whom it is being shared, and to comply with this policy.")]),t("p",[e._v("According to CalOPPA we agree to the following:")]),t("p",[e._v("0.1. users can visit our site anonymously;")]),t("p",[e._v("0.2. our Privacy Policy link includes the word “Privacy”, and can easily be found on the home page of our website;")]),t("p",[e._v("0.3. users will be notified of any privacy policy changes on our Privacy Policy Page;")]),t("p",[e._v("0.4. users are able to change their personal information by emailing us at "),t("b",[e._v("support@connexxiontelecom.com")]),e._v(".")]),t("p",[e._v("Our Policy on “Do Not Track” Signals:")]),t("p",[e._v("We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track browser mechanism is in place. Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked.")]),t("p",[e._v("You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.")]),t("p",[e._v("12. "),t("b",[e._v("Your Data Protection Rights under the California Consumer Privacy Act (CCPA)")])]),t("p",[e._v("If you are a California resident, you are entitled to learn what data we collect about you, ask to delete your data and not to sell (share) it. To exercise your data protection rights, you can make certain requests and ask us:")]),t("p",[t("b",[e._v("0.1. What personal information we have about you. If you make this request, we will return to you:")])]),t("p",[e._v("0.0.1. The categories of personal information we have collected about you.")]),t("p",[e._v("0.0.2. The categories of sources from which we collect your personal information.")]),t("p",[e._v("0.0.3. The business or commercial purpose for collecting or selling your personal information.")]),t("p",[e._v("0.0.4. The categories of third parties with whom we share personal information.")]),t("p",[e._v("0.0.5. The specific pieces of personal information we have collected about you.")]),t("p",[e._v("0.0.6. A list of categories of personal information that we have sold, along with the category of any other company we sold it to. If we have not sold your personal information, we will inform you of that fact.")]),t("p",[e._v("0.0.7. A list of categories of personal information that we have disclosed for a business purpose, along with the category of any other company we shared it with.")]),t("p",[e._v("Please note, you are entitled to ask us to provide you with this information up to two times in a rolling twelve-month period. When you make this request, the information provided may be limited to the personal information we collected about you in the previous 12 months.")]),t("p",[t("b",[e._v("0.2. To delete your personal information. If you make this request, we will delete the personal information we hold about you as of the date of your request from our records and direct any service providers to do the same. In some cases, deletion may be accomplished through de-identification of the information. If you choose to delete your personal information, you may not be able to use certain functions that require your personal information to operate.")])]),t("p",[t("b",[e._v("0.3. To stop selling your personal information. We don’t sell or rent your personal information to any third parties for any purpose. We do not sell your personal information for monetary consideration. However, under some circumstances, a transfer of personal information to a third party, or within our family of companies, without monetary consideration may be considered a “sale” under California law. You are the only owner of your Personal Data and can request disclosure or deletion at any time.")])]),t("p",[e._v("If you submit a request to stop selling your personal information, we will stop making such transfers.")]),t("p",[e._v("Please note, if you ask us to delete or stop selling your data, it may impact your experience with us, and you may not be able to participate in certain programs or membership services which require the usage of your personal information to function. But in no circumstances, we will discriminate against you for exercising your rights.")]),t("p",[e._v("To exercise your California data protection rights described above, please send your request(s) by email: "),t("b",[e._v("support@connexxiontelecom.com")]),e._v(".")]),t("p",[e._v("Your data protection rights, described above, are covered by the CCPA, short for the California Consumer Privacy Act. To find out more, visit the official California Legislative Information website. The CCPA took effect on 01/01/2020.")]),t("p",[e._v("13. "),t("b",[e._v("Service Providers")])]),t("p",[e._v("We may employ third party companies and individuals to facilitate our Service ("),t("b",[e._v("“Service Providers”")]),e._v("), provide Service on our behalf, perform Service-related services or assist us in analysing how our Service is used.")]),t("p",[e._v("These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.")]),t("p",[e._v("14. "),t("b",[e._v("Analytics")])]),t("p",[e._v("We may use third-party Service Providers to monitor and analyze the use of our Service.")]),t("p",[e._v("15. "),t("b",[e._v("CI/CD tools")])]),t("p",[e._v("We may use third-party Service Providers to automate the development process of our Service.")]),t("p",[e._v("16. "),t("b",[e._v("Behavioral Remarketing")])]),t("p",[e._v("We may use remarketing services to advertise on third party websites to you after you visited our Service. We and our third-party vendors use cookies to inform, optimise and serve ads based on your past visits to our Service.")]),t("p",[e._v("17. "),t("b",[e._v("Links to Other Sites")])]),t("p",[e._v("Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.")]),t("p",[e._v("We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.")]),t("p",[e._v("For example, the outlined "),t("a",{attrs:{href:"https://policymaker.io/privacy-policy/"}},[e._v("privacy policy")]),e._v(" has been made using "),t("a",{attrs:{href:"https://policymaker.io/"}},[e._v("PolicyMaker.io")]),e._v(", a free tool that helps create high-quality legal documents. PolicyMaker’s "),t("a",{attrs:{href:"https://policymaker.io/privacy-policy/"}},[e._v("privacy policy generator")]),e._v(" is an easy-to-use tool for creating a "),t("a",{attrs:{href:"https://policymaker.io/blog-privacy-policy/"}},[e._v("privacy policy for blog")]),e._v(", website, e-commerce store or mobile app.")]),t("p",[e._v("18. "),t("b",[t("b",[e._v("Children’s Privacy")])])]),t("p",[e._v("Our Services are not intended for use by children under the age of 18 ("),t("b",[e._v("“Child”")]),e._v(" or "),t("b",[e._v("“Children”")]),e._v(").")]),t("p",[e._v("We do not knowingly collect personally identifiable information from Children under 18. If you become aware that a Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from Children without verification of parental consent, we take steps to remove that information from our servers.")]),t("p",[e._v("19. "),t("b",[e._v("Changes to This Privacy Policy")])]),t("p",[e._v("We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.")]),t("p",[e._v("We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update “effective date” at the top of this Privacy Policy.")]),t("p",[e._v("You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.")]),t("p",[e._v("20. "),t("b",[e._v("Contact Us")])]),t("p",[e._v("If you have any questions about this Privacy Policy, please contact us by email: "),t("b",[e._v("support@connexxiontelecom.com")]),e._v(".")])])}],i=t("aa59"),n=t("1947"),s=t("088b"),c=t("a189"),l={components:{BLink:i["a"],VuexyLogo:s["a"],BButton:n["a"]},mixins:[c["a"]]},u=l,p=(t("0722"),t("2877")),v=Object(p["a"])(u,a,r,!1,null,null,null);o["default"]=v.exports},3245:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.EmailJSResponseStatus=void 0;var a=function(){function e(e){this.status=e.status,this.text=e.responseText}return e}();o.EmailJSResponseStatus=a},5129:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.UI=void 0;var a=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();o.UI=a},"6f45":function(e,o,t){"use strict";t("726d")},"726d":function(e,o,t){},a189:function(e,o,t){"use strict";t("99af");var a=t("0f91"),r=t.n(a),i=t("3b53");o["a"]={methods:{login:function(){var e=this;this.$refs.loginValidation.validate().then((function(o){if(o){var t={username:e.username,password:e.password};e.$store.dispatch("auth/login",{form:t}).then((function(){e.$router.push({name:"home"}).then((function(){e.toast("Welcome","LogInIcon","You have logged in successfully","success")}))})).catch((function(o){e.toast("Login Attempt","LogInIcon",o.response.data.messages.error,"danger")}))}else e.toast("Login Attempt","LogInIcon","You must fill in all form fields correctly","warning")}))},logout:function(){var e=this;this.$router.push({name:"login"}).then((function(){e.$store.dispatch("auth/logout").then((function(){e.toast("Thank You","LogOutIcon","You have logged out successfully","success")}))}))},register:function(){var e=this;this.$refs.registerValidation.validate().then((function(o){if(o){var t={firstname:e.firstname,lastname:e.lastname,username:e.username,email:e.regEmail,password:e.password,verifyCode:e.generateVerifyCode(10),confirmPassword:e.confirmPassword};e.$store.dispatch("auth/register",{form:t}).then((function(o){r.a.send("service_dmcc3uc","template_ats6kji",{firstname:t.firstname,lastname:t.lastname,verification_link:"".concat(i["a"].frontend,"/verify-").concat(t.verifyCode),to_email:t.email},"user_BcSkabdz4FX6q4l5oeeXI").catch(),e.$router.push({name:"login"}).then((function(){e.toast("Register","LogInIcon",o.data,"success")}))})).catch((function(o){e.toast("Register Attempt","LogInIcon",o.response.data.messages.error,"danger")}))}else e.toast("Register Attempt","LogInIcon","You must fill in all form fields correctly","warning")}))},verifyAccount:function(){var e=this,o={verifyCode:this.verifyCode};this.$store.dispatch("auth/verifyAccount",{form:o}).then().catch((function(o){e.toast("Verify Account","BellIcon",o.response.data.messages.error,"danger")}))}}}},d719:function(e,o,t){}}]);
//# sourceMappingURL=chunk-20f529b0.08269439.js.map