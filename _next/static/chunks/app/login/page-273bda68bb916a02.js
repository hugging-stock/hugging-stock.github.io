(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{6543:function(e,t,a){Promise.resolve().then(a.bind(a,5674))},2575:function(e,t,a){"use strict";var s=a(7437);t.Z=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"flex items-center justify-center",children:e.text}),(0,s.jsxs)("div",{className:"flex items-center justify-center",children:[(0,s.jsx)("span",{className:"loading loading-bars loading-lg text-primary "}),(0,s.jsx)("span",{className:"loading loading-bars loading-md text-success"}),(0,s.jsx)("span",{className:"loading loading-bars loading-md text-secondary"}),(0,s.jsx)("span",{className:"loading loading-bars loading-lg text-error"})]})]})},5674:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var s=a(7437),r=a(306),n=a(2265),l=a(8081),o=a(4033),i=a(8970),d=a(2575);let c={username:"",password:""},u={email:"",token:""};function m(e){var t;let[a,r]=(0,n.useState)(!1),[m,x]=(0,n.useState)(""),[h,g]=(0,n.useState)(c),p=(0,o.useRouter)(),f=(0,i.TL)(),{href:b,pathname:w}=null!==(t=function(){let[e,t]=(0,n.useState)(null);return(0,n.useEffect)(()=>{t(window.location.href)},[]),e?new URL(e):null}())&&void 0!==t?t:{},N=(0,i.CG)(e=>e.trader.token),j=e=>{if(e.detail||""==e.token)x(e.detail),f((0,l.QM)(u));else{let t={...e};f((0,l.QM)(t)),console.log("ACCESS TOKEN FROM STORE: ".concat(N)),x("");let a=new URL("/",b);p.replace(a.toString())}},y=async e=>{var t,a;e.preventDefault();let s=new URLSearchParams;s.append("username",null!==(t=h.username)&&void 0!==t?t:""),s.append("password",null!==(a=h.password)&&void 0!==a?a:""),r(!0),fetch("".concat("https://e32lo3t2uikatpsxb6u2ewexqq0gvlvm.lambda-url.us-west-1.on.aws","/auth/login/"),{body:s.toString(),method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"}}).then(e=>{if(200==e.status)return e.json();x(e.statusText),f((0,l.QM)(u)),r(!1)}).then(e=>{void 0!=e.status_code&&200!=e.status_code?(x(e.detail.message),f((0,l.QM)(u))):j(e),r(!1)}).catch(e=>console.log("Login Page Error: ".concat(e)))};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("h1",{className:"mb-3 font-extrabold leading-none tracking-tight text-4xl text-white dark:text-white",children:["Hugging",(0,s.jsx)("span",{className:"underline underline-offset-3 decoration-8 decoration-primary",children:"Stock"})]}),a?(0,s.jsx)(d.Z,{}):null,(0,s.jsxs)("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",onSubmit:y,children:[(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Username"}),(0,s.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-base-100 dark:text-base-100 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:"Username",name:"username",onChange:t=>{h.username=t.target.value,g(h),e.setMessage("")}})]}),(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Password"}),(0,s.jsx)("input",{className:"shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"******************",name:"password",onChange:t=>{h.password=t.target.value,g(h),e.setMessage("")}})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)("button",{className:"bg-primary text-base-100 hover:bg-primary font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"SIGN IN"}),(0,s.jsx)("a",{className:"inline-block align-baseline text-sm text-base-100 hover:underline",href:"/password-reset",children:"Forgot Password?"})]}),(0,s.jsxs)("div",{className:"font-bold py-5 text-sm text-gray-700 dark:text-gray-700",children:["Not registered yet?"," ",(0,s.jsx)("a",{className:"text-base-100 hover:underline dark:text-base-100",onClick:()=>{e.setForm("register")},children:"Create account"})]})]}),(0,s.jsx)("p",{className:"text-center text-white dark:text-white text-xs",children:"\xa92023 Hula Hoopsters. All rights reserved."}),""!==m?(0,s.jsx)("div",{className:"flex flex-wrap text-center mt-5 text-error text-xs italic",children:m}):null]})}var x=a(1396),h=a.n(x);let g={username:"",password:""};function p(e){let[t,a]=(0,n.useState)(!1),[r,l]=(0,n.useState)(g),[o,i]=(0,n.useState)(""),[c,u]=(0,n.useState)(""),[m,x]=(0,n.useState)(""),[p,f]=(0,n.useState)(""),[b,w]=(0,n.useState)(""),[N,j]=(0,n.useState)(""),y=async t=>{var s,n,l,o,d;t.preventDefault();let c={email:null!==(s=r.email)&&void 0!==s?s:"",userid:null!==(n=r.username)&&void 0!==n?n:"",password:null!==(l=r.password)&&void 0!==l?l:"",firstName:null!==(o=r.firstName)&&void 0!==o?o:"",lastName:null!==(d=r.lastName)&&void 0!==d?d:""};/\S+@\S+\.\S+/.test(c.email)||u("Email is invalid"),""==c.userid.trim()&&w("Username is required"),c.password.trim().length<6&&j("Password must be 6 characters or more"),""==c.firstName.trim()&&x("First Name is required"),""==c.lastName.trim()&&f("Last Name is required"),/\S+@\S+\.\S+/.test(c.email)&&""!=c.userid.trim()&&c.password.trim().length>=6&&""!=c.firstName.trim()&&""!=c.lastName.trim()?(a(!0),fetch("".concat("https://e32lo3t2uikatpsxb6u2ewexqq0gvlvm.lambda-url.us-west-1.on.aws","/auth/signup/"),{body:JSON.stringify(c),method:"POST",headers:{"content-type":"application/json"}}).then(e=>{if(200==e.status)return e.json();i(e.statusText),a(!1)}).then(t=>{void 0!=t.status_code&&200!=t.status_code?i(t.detail.message):(e.setForm("login"),e.setMessage("Please verify your email first before logging in.")),a(!1)}).catch(e=>console.log("Registration Page Error: ".concat(e)))):i("Please correct all red items above.")};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("h1",{className:"mb-3 font-extrabold leading-none tracking-tight text-4xl text-white dark:text-white",children:["Hugging",(0,s.jsx)("span",{className:"underline underline-offset-3 decoration-8 decoration-primary",children:"Stock"})]}),t?(0,s.jsx)(d.Z,{}):null,(0,s.jsxs)("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",onSubmit:y,children:[(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"".concat(""!=c?"text-error":"text-gray-700"," block text-sm font-bold mb-2"),children:""!=c?c:"Email"}),(0,s.jsx)("input",{className:"shadow appearance-none border rounded w-72 py-2 px-3 text-base-100 dark:text-base-100 leading-tight focus:outline-none focus:shadow-outline",id:"email",type:"text",placeholder:"Email",name:"email",onChange:e=>{r.email=e.target.value,l(r),u("")}})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"".concat(""!=m?"error":"text-gray-700"," block text-gray-700 text-sm font-bold mb-2"),children:""!=m?m:"First Name"}),(0,s.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-base-100 dark:text-base-100 leading-tight focus:outline-none focus:shadow-outline",id:"first-name",type:"text",placeholder:"First Name",name:"first-name",onChange:e=>{r.firstName=e.target.value,l(r),x("")}})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"".concat(""!=p?"text-error":"text-gray-700"," block text-gray-700 text-sm font-bold mb-2"),children:""!=p?p:"Last Name"}),(0,s.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-base-100 dark:text-base-100 leading-tight focus:outline-none focus:shadow-outline",id:"last-name",type:"text",placeholder:"Last Name",name:"last-name",onChange:e=>{r.lastName=e.target.value,l(r),f("")}})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"".concat(""!=b?"text-error":"text-gray-700"," block text-gray-700 text-sm font-bold mb-2"),children:""!=b?b:"Username"}),(0,s.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-base-100 dark:text-base-100 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:"Username",name:"username",onChange:e=>{r.username=e.target.value,l(r),w("")}})]}),(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("label",{className:"".concat(""!=N?"text-error":"text-gray-700"," block text-gray-700 text-sm font-bold mb-2"),children:""!=N?N:"Password"}),(0,s.jsx)("input",{className:"shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"******************",name:"password",onChange:e=>{r.password=e.target.value,l(r),j("")}})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)("button",{className:"text-base-100 bg-primary hover:bg-primary font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"REGISTER"}),(0,s.jsx)("a",{className:"inline-block align-baseline text-sm text-base-100 hover:underline",onClick:()=>{e.setForm("login")},children:"Back To Login"})]})]}),(0,s.jsx)("p",{className:"text-center my-5 text-primary dark:text-primary text-mg hover:underline",children:(0,s.jsx)(h(),{href:"/user-agreement",children:"Read Our User Agreement"})}),(0,s.jsx)("p",{className:"text-center text-white dark:text-white text-xs",children:"\xa92023 Hula Hoopsters. All rights reserved."}),""!==o?(0,s.jsx)("p",{className:"text-center mt-5 text-error text-xs italic",children:o}):null]})}var f=()=>{let[e,t]=(0,n.useState)("login"),[a,r]=(0,n.useState)(""),l=(0,o.useSearchParams)();return(0,n.useEffect)(()=>{let e=l.get("form");e&&t(e)},[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("section",{className:"bg-base-100 dark:bg-base-100 h-full",children:(0,s.jsxs)("div",{className:"py-8 px-4 mx-auto max-w-screen-xl lg:py-0 grid lg:grid-cols-2 gap-8 lg:gap-16",children:[(0,s.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,s.jsx)("img",{src:"/images/hugging-cactus.png",width:50}),(0,s.jsx)("h1",{className:"mb-4 text-4xl font-extrabold tracking-tight leading-none text-white lg:text-6xl dark:text-white",children:"Make informed stock trades and decisions"}),(0,s.jsx)("h2",{className:"mb-4 text-2xl font-extrabold tracking-tight leading-none text-white lg:text-4xl dark:text-white",children:"Or just be curious about stocks"}),(0,s.jsx)("p",{className:"mb-6 text-lg font-normal text-gray-400 lg:text-xl dark:text-gray-400",children:"Easy to read charts, patterns and trends. A collaboration of data science and machine learning models."}),(0,s.jsxs)("a",{href:"/about-us",className:"text-primary dark:text-primary hover:underline font-medium text-lg inline-flex items-center",children:["Read more about our app",(0,s.jsx)("svg",{className:"w-3.5 h-3.5 ms-2 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10",children:(0,s.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})})]})]}),(0,s.jsx)("div",{className:"h-screen flex flex-col items-center py-16",children:"login"==e?(0,s.jsx)(m,{setForm:t,setMessage:r}):(0,s.jsx)(p,{setForm:t,setMessage:r})}),""!==a?(0,s.jsx)("div",{className:"flex flex-wrap text-center mt-5 text-error text-xs italic",children:a}):null]})})})};function b(){return(0,s.jsx)(r.Z,{children:(0,s.jsx)(f,{})})}},306:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var s=a(7437),r=a(3198),n=a(8970);function l(e){let{children:t}=e;return(0,s.jsx)(r.zt,{store:n.ZP,children:t})}(0,a(1267).p5)(n.ZP)},8081:function(e,t,a){"use strict";a.d(t,{QM:function(){return l},oK:function(){return i}});var s=a(663);let r={email:"",token:""},n=(0,s.oM)({name:"trader",initialState:r,reducers:{LOGIN_TRADER:(e,t)=>({...t.payload}),LOGOUT_TRADER:(e,t)=>r,GET_TRADER:e=>e}}),{LOGIN_TRADER:l,GET_TRADER:o,LOGOUT_TRADER:i}=n.actions;t.ZP=n.reducer},8970:function(e,t,a){"use strict";a.d(t,{ZP:function(){return h},TL:function(){return g},CG:function(){return p}});var s=a(7373),r=a(663),n=a(8081),l=a(1267),o=a(3944),i=a.n(o),d=a(5456);let c=(0,d.Z)("local");var u=a(3198);let m=(0,s.UY)({trader:(0,l.OJ)({key:"trader",storage:c,whitelist:["id","username","email","first_name","last_name","token","refresh_token"]},n.ZP)}),x=(0,r.xC)({reducer:m,middleware:e=>e({serializableCheck:!1}).concat(i())});var h=x;let g=()=>(0,u.I0)(),p=u.v9},4033:function(e,t,a){e.exports=a(8165)}},function(e){e.O(0,[719,396,971,596,744],function(){return e(e.s=6543)}),_N_E=e.O()}]);