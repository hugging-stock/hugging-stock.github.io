(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{1728:function(e,t,n){Promise.resolve().then(n.bind(n,2320))},2575:function(e,t,n){"use strict";var a=n(7437);t.Z=e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"flex items-center justify-center",children:e.text}),(0,a.jsxs)("div",{className:"flex items-center justify-center",children:[(0,a.jsx)("span",{className:"loading loading-bars loading-lg text-primary "}),(0,a.jsx)("span",{className:"loading loading-bars loading-md text-primary"}),(0,a.jsx)("span",{className:"loading loading-bars loading-md text-primary"}),(0,a.jsx)("span",{className:"loading loading-bars loading-lg text-primary"})]})]})},2320:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var a=n(7437),s=n(306),r=n(2265),l=n(8081),o=n(4033),i=n(8970),c=n(2575);let d={username:"",password:""},u={email:"",token:""};var m=()=>{var e;let[t,n]=(0,r.useState)(!1),[s,m]=(0,r.useState)(d),[x,p]=(0,r.useState)(""),h=(0,o.useRouter)(),f=(0,i.TL)(),{href:g,pathname:b}=null!==(e=function(){let[e,t]=(0,r.useState)(null);return(0,r.useEffect)(()=>{t(window.location.href)},[]),e?new URL(e):null}())&&void 0!==e?e:{},w=(0,i.CG)(e=>e.trader.token),j=e=>{if(e.detail||""==e.token)p(e.detail),f((0,l.QM)(u));else{let t={...e};f((0,l.QM)(t)),console.log("ACCESS TOKEN FROM STORE: ".concat(w)),p("");let n=new URL("/",g);h.replace(n.toString())}},y=async e=>{var t,a;e.preventDefault();let r=new URLSearchParams;r.append("username",null!==(t=s.username)&&void 0!==t?t:""),r.append("password",null!==(a=s.password)&&void 0!==a?a:""),n(!0),fetch("".concat("https://3stsyqf6axry36mkcypmadt2ce0rufza.lambda-url.us-west-1.on.aws","/auth/login/"),{body:r.toString(),method:"post",headers:{"content-type":"application/x-www-form-urlencoded","access-control-allow-origin":"*"}}).then(e=>{if(200==e.status)return e.json();p(e.statusText),f((0,l.QM)(u)),n(!1)}).then(e=>{j(e),n(!1)}).catch(e=>console.log("Login Page Error: ".concat(e)))};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"h-screen flex flex-col items-center",children:[(0,a.jsxs)("h1",{className:"mb-3 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-black",children:["Hugging",(0,a.jsx)("span",{className:"underline underline-offset-3 decoration-8 decoration-primary",children:"Stock"})]}),(0,a.jsx)("p",{className:"text-primary text-md mb-3",children:"Stock Chart Patterns App"}),t?(0,a.jsx)(c.Z,{}):null,(0,a.jsxs)("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",onSubmit:y,children:[(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Username"}),(0,a.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:"Username",name:"username",onChange:e=>{s.username=e.target.value,m(s)}})]}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Password"}),(0,a.jsx)("input",{className:"shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"******************",name:"password",onChange:e=>{s.password=e.target.value,m(s)}}),(0,a.jsx)("p",{className:"text-center text-red-500 text-xs italic",children:x})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Sign In"}),(0,a.jsx)("a",{className:"inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800",href:"#",children:"Forgot Password?"})]})]}),(0,a.jsx)("p",{className:"text-center text-gray-500 text-xs",children:"\xa92023 Hula Hoopsters. All rights reserved."})]})})};function x(){return(0,a.jsx)(s.Z,{children:(0,a.jsx)(m,{})})}},306:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(7437),s=n(3198),r=n(8970);function l(e){let{children:t}=e;return(0,a.jsx)(s.zt,{store:r.ZP,children:t})}(0,n(1267).p5)(r.ZP)},8081:function(e,t,n){"use strict";n.d(t,{QM:function(){return r}});var a=n(663);let s=(0,a.oM)({name:"trader",initialState:{email:"",token:""},reducers:{LOGIN_TRADER:(e,t)=>({...t.payload}),GET_TRADER:e=>e}}),{LOGIN_TRADER:r,GET_TRADER:l}=s.actions;t.ZP=s.reducer},8970:function(e,t,n){"use strict";n.d(t,{ZP:function(){return p},TL:function(){return h},CG:function(){return f}});var a=n(7373),s=n(663),r=n(8081),l=n(1267),o=n(3944),i=n.n(o),c=n(5456);let d=(0,c.Z)("local");var u=n(3198);let m=(0,a.UY)({trader:(0,l.OJ)({key:"trader",storage:d,whitelist:["id","username","email","first_name","last_name","token","refresh_token"]},r.ZP)}),x=(0,s.xC)({reducer:m,middleware:e=>e({serializableCheck:!1}).concat(i())});var p=x;let h=()=>(0,u.I0)(),f=u.v9}},function(e){e.O(0,[277,971,596,744],function(){return e(e.s=1728)}),_N_E=e.O()}]);