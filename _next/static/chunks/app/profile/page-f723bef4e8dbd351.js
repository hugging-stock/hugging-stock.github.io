(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[589],{5884:function(e,t,a){Promise.resolve().then(a.bind(a,9860))},9860:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var s=a(7437),l=a(306),n=a(2265),r=a(2575),o=a(3635),i=a(6480),d=a(6782),c=a(1423);let u={username:"",password:""};function m(e){let t="https://e32lo3t2uikatpsxb6u2ewexqq0gvlvm.lambda-url.us-west-1.on.aws",[a,l]=(0,n.useState)(!1),[m,x]=(0,n.useState)(u),[h,p]=(0,n.useState)(""),[f,b]=(0,n.useState)(""),[g,N]=(0,n.useState)(""),[j,w]=(0,n.useState)(""),[y,v]=(0,n.useState)(""),[k,_]=(0,n.useState)(""),[S,P]=(0,n.useState)(""),C=(0,o.a9)();(0,n.useEffect)(()=>{fetch("".concat(t,"/traders/").concat(C.id,"/"),{headers:{authorization:"Bearer ".concat(C.token)}}).then(e=>e.json()).then(e=>{x({username:e.username,firstName:e.first_name,lastName:e.last_name,password:e.password,email:e.email}),l(!1)}).catch(e=>{let t="Get Trader Error: ".concat(e);p(t),l(!1),console.log(t)})},[e]);let E=async e=>{var a,s,n,r,o;e.preventDefault();let i={first_name:null!==(a=m.firstName)&&void 0!==a?a:"",last_name:null!==(s=m.lastName)&&void 0!==s?s:"",username:null!==(n=m.username)&&void 0!==n?n:"",email:null!==(r=m.email)&&void 0!==r?r:"",password:null!==(o=m.password)&&void 0!==o?o:""};""==i.first_name.trim()&&w("First Name is required"),""==i.last_name.trim()&&v("Last Name is required"),""!=i.first_name.trim()&&""!=i.last_name.trim()?(l(!0),fetch("".concat(t,"/traders/").concat(C.id),{body:JSON.stringify(i),method:"PATCH",headers:{Authorization:"Bearer ".concat(C.token),"content-type":"application/json"}}).then(e=>{if(200==e.status)return e.json();p(e.statusText),l(!1)}).then(e=>{e&&void 0!=e.status_code&&200!=e.status_code?p(e.detail.message):b("Your profile has been updated."),l(!1)}).catch(e=>console.log("Profile Page Error: ".concat(e)))):p("Please correct all red items above.")};return(0,s.jsx)("main",{children:(0,s.jsxs)("div",{className:"bg-gray-900 dark:bg-gray-900 min-h-screen w-full flex flex-col rounded-2xl",children:[(0,s.jsx)(i.Z,{trader:C,currentPage:"profile"}),(0,s.jsxs)("div",{className:"self-center",children:[(0,s.jsx)("div",{children:(0,s.jsx)(d.Z,{ticker:"S&P"})}),(0,s.jsx)("div",{className:"ml-2 text-center text-white",children:(0,s.jsx)("h1",{className:"text-2xl lg:text-3xl font-bold",children:"Profile Settings"})}),a?(0,s.jsx)(r.Z,{}):null,(0,s.jsxs)("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",onSubmit:E,children:[(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"".concat(""!=g?"text-red-300":"text-gray-700"," block text-sm font-bold mb-2"),children:""!=g?g:"Email"}),(0,s.jsx)("input",{disabled:!0,className:"shadow appearance-none border rounded w-72 py-2 px-3 text-black dark:text-black leading-tight focus:outline-none focus:shadow-outline",id:"email",type:"text",placeholder:"Email",name:"email",defaultValue:m.email,onChange:e=>{m.email=e.target.value,x(m),N("")}})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"".concat(""!=j?"text-red-300":"text-gray-700"," block text-gray-700 text-sm font-bold mb-2"),children:""!=j?j:"First Name"}),(0,s.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-black leading-tight focus:outline-none focus:shadow-outline",id:"first-name",type:"text",placeholder:"First Name",name:"first-name",defaultValue:m.firstName,onChange:e=>{m.firstName=e.target.value,x(m),w("")}})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"".concat(""!=y?"text-red-300":"text-gray-700"," block text-gray-700 text-sm font-bold mb-2"),children:""!=y?y:"Last Name"}),(0,s.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-black leading-tight focus:outline-none focus:shadow-outline",id:"last-name",type:"text",placeholder:"Last Name",name:"last-name",defaultValue:m.lastName,onChange:e=>{m.lastName=e.target.value,x(m),v("")}})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"".concat(""!=k?"text-red-300":"text-gray-700"," block text-gray-700 text-sm font-bold mb-2"),children:""!=k?k:"Username"}),(0,s.jsx)("input",{disabled:!0,className:"shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-black leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:"Username",name:"username",defaultValue:m.username,onChange:e=>{m.username=e.target.value,x(m),_("")}})]}),(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("label",{className:"".concat(""!=S?"text-red-300":"text-gray-700"," block text-gray-700 text-sm font-bold mb-2"),children:""!=S?S:"Password"}),(0,s.jsx)("input",{disabled:!0,className:"shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"******************",name:"password",defaultValue:m.password,onChange:e=>{m.password=e.target.value,x(m),P("")}})]}),(0,s.jsx)("div",{className:"flex items-center justify-center",children:(0,s.jsx)("button",{className:"bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Update Profile"})}),(0,s.jsxs)("div",{className:"flex items-center justify-center",children:[""!==h?(0,s.jsx)("p",{className:"text-center mt-5 text-red-500 text-xs italic",children:h}):null,""!==f?(0,s.jsx)("p",{className:"text-center mt-5 text-primary text-xs italic",children:f}):null]})]}),(0,s.jsx)("p",{className:"text-center text-white dark:text-white text-xs",children:"\xa92023 Hula Hoopsters. All rights reserved."})]}),(0,s.jsx)(c.$,{ticker:"S&P"})]})})}function x(){return(0,s.jsx)(l.Z,{children:(0,s.jsx)(m,{})})}},4033:function(e,t,a){e.exports=a(8165)}},function(e){e.O(0,[719,666,971,596,744],function(){return e(e.s=5884)}),_N_E=e.O()}]);