(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[589],{5884:function(e,t,a){Promise.resolve().then(a.bind(a,9860))},9860:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var s=a(7437),r=a(306),n=a(2265),l=a(2575),o=a(3635),i=a(6480),d=a(6782),c=a(1423);let u={username:"",password:""};function m(e){let t="https://e32lo3t2uikatpsxb6u2ewexqq0gvlvm.lambda-url.us-west-1.on.aws",{width:a,height:r}=(0,o.dz)(),[m,x]=(0,n.useState)(!1),[h,p]=(0,n.useState)(u),[f,b]=(0,n.useState)(""),[g,N]=(0,n.useState)(""),[j,w]=(0,n.useState)(""),[y,v]=(0,n.useState)(""),[k,_]=(0,n.useState)(""),[S,P]=(0,n.useState)(""),[C,E]=(0,n.useState)(""),V=(0,o.a9)();(0,n.useEffect)(()=>{fetch("".concat(t,"/traders/").concat(V.id,"/"),{headers:{authorization:"Bearer ".concat(V.token)}}).then(e=>e.json()).then(e=>{p({username:e.username,firstName:e.first_name,lastName:e.last_name,password:e.password,email:e.email}),x(!1)}).catch(e=>{let t="Get Trader Error: ".concat(e);b(t),x(!1),console.log(t)})},[e]);let q=async e=>{var a,s,r,n,l;e.preventDefault();let o={first_name:null!==(a=h.firstName)&&void 0!==a?a:"",last_name:null!==(s=h.lastName)&&void 0!==s?s:"",username:null!==(r=h.username)&&void 0!==r?r:"",email:null!==(n=h.email)&&void 0!==n?n:"",password:null!==(l=h.password)&&void 0!==l?l:""};""==o.first_name.trim()&&v("First Name is required"),""==o.last_name.trim()&&_("Last Name is required"),""!=o.first_name.trim()&&""!=o.last_name.trim()?(x(!0),fetch("".concat(t,"/traders/").concat(V.id),{body:JSON.stringify(o),method:"PATCH",headers:{Authorization:"Bearer ".concat(V.token),"content-type":"application/json"}}).then(e=>{if(200==e.status)return e.json();b(e.statusText),x(!1)}).then(e=>{e&&void 0!=e.status_code&&200!=e.status_code?b(e.detail.message):N("Your profile has been updated."),x(!1)}).catch(e=>console.log("Profile Page Error: ".concat(e)))):b("Please correct all red items above.")};return(0,s.jsxs)("main",{children:[(0,s.jsx)(i.Z,{trader:V,currentPage:"profile"}),(0,s.jsx)("div",{className:"bg-base-100 dark:bg-base-100 min-h-screen w-full flex flex-col \n       mt-20 ".concat(a>1020?"ml-24":""),children:(0,s.jsxs)("div",{className:"self-center",children:[(0,s.jsx)("div",{children:(0,s.jsx)(d.Z,{ticker:"S&P"})}),(0,s.jsx)("div",{className:"ml-2 text-center text-neutral",children:(0,s.jsx)("h1",{className:"text-2xl lg:text-3xl font-bold",children:"Profile Settings"})}),m?(0,s.jsx)(l.Z,{}):null,(0,s.jsxs)("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",onSubmit:q,children:[(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"".concat(""!=j?"text-error":"text-gray-700"," block text-sm font-bold mb-2"),children:""!=j?j:"Email"}),(0,s.jsx)("input",{disabled:!0,className:"shadow appearance-none border rounded w-72 py-2 px-3 text-base-100 dark:text-base-100 leading-tight focus:outline-none focus:shadow-outline",id:"email",type:"text",placeholder:"Email",name:"email",defaultValue:h.email,onChange:e=>{h.email=e.target.value,p(h),w("")}})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"".concat(""!=y?"text-error":"text-gray-700"," block text-gray-700 text-sm font-bold mb-2"),children:""!=y?y:"First Name"}),(0,s.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-base-100 dark:text-base-100 leading-tight focus:outline-none focus:shadow-outline",id:"first-name",type:"text",placeholder:"First Name",name:"first-name",defaultValue:h.firstName,onChange:e=>{h.firstName=e.target.value,p(h),v("")}})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"".concat(""!=k?"text-error":"text-gray-700"," block text-gray-700 text-sm font-bold mb-2"),children:""!=k?k:"Last Name"}),(0,s.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-base-100 dark:text-base-100 leading-tight focus:outline-none focus:shadow-outline",id:"last-name",type:"text",placeholder:"Last Name",name:"last-name",defaultValue:h.lastName,onChange:e=>{h.lastName=e.target.value,p(h),_("")}})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"".concat(""!=S?"text-error":"text-gray-700"," block text-gray-700 text-sm font-bold mb-2"),children:""!=S?S:"Username"}),(0,s.jsx)("input",{disabled:!0,className:"shadow appearance-none border rounded w-full py-2 px-3 text-base-100 dark:text-base-100 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:"Username",name:"username",defaultValue:h.username,onChange:e=>{h.username=e.target.value,p(h),P("")}})]}),(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("label",{className:"".concat(""!=C?"text-error":"text-gray-700"," block text-gray-700 text-sm font-bold mb-2"),children:""!=C?C:"Password"}),(0,s.jsx)("input",{disabled:!0,className:"shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"******************",name:"password",defaultValue:h.password,onChange:e=>{h.password=e.target.value,p(h),E("")}})]}),(0,s.jsx)("div",{className:"flex items-center justify-center",children:(0,s.jsx)("button",{className:"bg-primary hover:bg-primary text-base-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Update Profile"})}),(0,s.jsxs)("div",{className:"flex items-center justify-center",children:[""!==f?(0,s.jsx)("p",{className:"text-center mt-5 text-error text-xs italic",children:f}):null,""!==g?(0,s.jsx)("p",{className:"text-center mt-5 text-primary text-xs italic",children:g}):null]})]}),(0,s.jsx)("p",{className:"text-center text-white dark:text-white text-xs",children:"\xa92023 Hula Hoopsters. All rights reserved."})]})}),(0,s.jsx)(c.$,{ticker:"S&P"})]})}function x(){return(0,s.jsx)(r.Z,{children:(0,s.jsx)(m,{})})}},4033:function(e,t,a){e.exports=a(8165)}},function(e){e.O(0,[719,666,971,596,744],function(){return e(e.s=5884)}),_N_E=e.O()}]);