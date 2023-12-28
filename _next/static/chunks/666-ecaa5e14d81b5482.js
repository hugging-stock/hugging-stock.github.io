"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[666],{1423:function(e,t,r){r.d(t,{$:function(){return a}});var s=r(7437),n=r(3635);let a=e=>{let{width:t,height:r}=(0,n.dz)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("footer",{className:"bg-white border-t-4 border-secondary fixed  inset-x-0  bottom-0  p-2",children:t>1020?null:(0,s.jsxs)("div",{className:"grid h-full max-w-lg grid-cols-3 mx-auto text-base-100 dark:text-base-100",children:[(0,s.jsxs)("a",{"data-tip":"Charts",href:"/stocks?ticker=".concat(encodeURIComponent(e.ticker)),className:"inline-flex flex-col items-center justify-center font-bold px-5 group",children:[(0,s.jsx)("img",{src:"/images/chart1.png",width:35}),(0,s.jsx)("span",{className:"text-sm group-hover:text-base-100 dark:group-hover:text-base-100",children:"Charts"})]}),(0,s.jsxs)("a",{"data-tip":"News",href:"/news?ticker=".concat(encodeURIComponent(e.ticker)),className:"inline-flex font-bold flex-col items-center justify-center px-5 group",children:[(0,s.jsx)("img",{src:"/images/chart2.png",width:35}),(0,s.jsx)("span",{className:"text-sm  group-hover:text-base-100 dark:group-hover:text-base-100",children:"News"})]}),(0,s.jsxs)("button",{type:"button",className:"inline-flex flex-col items-center justify-center font-bold px-5 group",children:[(0,s.jsx)("a",{className:"tooltip tooltip-right","data-tip":"S&P",href:"/snp",children:(0,s.jsx)("img",{src:"/images/chart3.png",width:35})}),(0,s.jsx)("span",{className:"text-sm  group-hover:text-base-100 dark:group-hover:text-base-100",children:"S&P"})]})]})})})}},2575:function(e,t,r){var s=r(7437);t.Z=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"flex items-center justify-center",children:e.text}),(0,s.jsxs)("div",{className:"flex items-center justify-center",children:[(0,s.jsx)("span",{className:"loading loading-bars loading-lg text-primary "}),(0,s.jsx)("span",{className:"loading loading-bars loading-md text-success"}),(0,s.jsx)("span",{className:"loading loading-bars loading-md text-secondary"}),(0,s.jsx)("span",{className:"loading loading-bars loading-lg text-error"})]})]})},6480:function(e,t,r){var s=r(7437),n=r(2265),a=r(4033),o=r(3635),l=r(8970),i=r(8081);t.Z=e=>{let[t,r]=(0,n.useState)("");(0,n.useRef)();let c=(0,a.useRouter)(),{width:d,height:h}=(0,o.dz)(),m=(0,o.a9)(),[x,u]=(0,n.useState)(!1),b=(0,l.TL)(),g={email:"",token:""},p=()=>{t&&""!=t&&("news"!=e.currentPage?c.push("/news?ticker=".concat(encodeURIComponent(t))):c.push("/stocks?ticker=".concat(encodeURIComponent(t))))};(0,n.useEffect)(()=>{console.log("trader ".concat(m.email))},[]);let f=()=>{u(!0),fetch("".concat("https://e32lo3t2uikatpsxb6u2ewexqq0gvlvm.lambda-url.us-west-1.on.aws","/auth/logout/"),{body:JSON.stringify({email:m.email}),method:"POST",headers:{"content-type":"application/json"}}).then(e=>{200!=e.status?console.log("Error with signout"):(b((0,i.oK)(g)),c.push("/login")),u(!1)}).catch(e=>console.log("Signout Error: ".concat(e)))};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("header",{className:" border-b-4 border-base-100 fixed  inset-x-0  top-0 m-0 p-0 z-20",children:(0,s.jsxs)("div",{className:"navbar max-w-full bg-gradient-to-r from-base-100 from-50% via-base-100 to-base-100",children:[(0,s.jsx)("div",{className:"flex-1",children:(0,s.jsx)("a",{className:"font-title text-primary btn btn-ghost normal-case m-0 p-0",children:(0,s.jsxs)("h1",{className:"font-extrabold leading-none tracking-tight text-4xl lg:text-6xl text-white",children:["Hugging",(0,s.jsx)("span",{className:"underline underline-offset-3 decoration-8 decoration-primary",children:"Stock"})]})})}),(0,s.jsxs)("div",{className:"flex-none gap-2 font-body",children:[(0,s.jsx)("div",{className:"form-control",children:(0,s.jsx)("form",{onSubmit:e=>{e.preventDefault(),p()},children:(0,s.jsx)("input",{name:"searchText",type:"text",placeholder:"Search By Ticker",className:"bg-white w-40 text-base-100 input input-bordered",onChange:e=>{r(e.target.value)}})})}),(0,s.jsxs)("div",{className:"dropdown dropdown-end",children:[(0,s.jsx)("label",{tabIndex:0,className:"btn border-2 border-white btn-circle avatar hover:border-white",children:(0,s.jsx)("div",{className:"avatar placeholder font-title",children:(0,s.jsx)("div",{className:"bg-secondary-focus text-base-100 rounded-full w-10",children:(0,s.jsx)("span",{children:m&&m.username?"".concat(m.username[0]).concat(m.username[1]):""})})})}),(0,s.jsxs)("ul",{tabIndex:0,className:"mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white text-base-100 rounded-box w-52",children:[(0,s.jsx)("li",{children:(0,s.jsxs)("a",{className:"justify-between",href:"/profile",children:["Profile",(0,s.jsx)("img",{src:"/images/settings.png"})]})}),(0,s.jsx)("li",{children:(0,s.jsxs)("a",{className:"justify-between",onClick:()=>{f()},children:["Logout",(0,s.jsx)("img",{src:"/images/logoff.png"})]})})]})]})]})]})})})}},6782:function(e,t,r){var s=r(7437),n=r(2265),a=r(3635),o=r(2601);t.Z=e=>{let{width:t,height:r}=(0,a.dz)(),[l,i]=(0,n.useState)(""),[c,d]=(0,n.useState)(""),[h,m]=(0,n.useState)(0);return o.env.LINKEDIN,(0,n.useEffect)(()=>{i("https://www.linkedin.com/company/hugging-stock"),d("https://www.instagram.com/huggingstock")},[e]),(0,s.jsx)(s.Fragment,{children:t>1020?(0,s.jsx)("aside",{id:"default-sidebar",className:"fixed font-title top-0 left-1 h-screen transition-transform -translate-x-full sm:translate-x-0 ","aria-label":"Sidebar",children:(0,s.jsx)("div",{className:"h-full pt-20 pb-8 overflow-hidden bg-base-100 ",children:(0,s.jsxs)("ul",{className:"menu h-full border-1 border-neutral-200 bg-base-100 text-base-100 rounded-box",children:[(0,s.jsxs)("div",{className:"flex-1",children:[(0,s.jsx)("li",{className:"".concat("bg-primary text-base-100"," \n                  border-x-2 border-t-2 border-b-8 hover:bg-primary hover:border-neutral  \n                  border-base-100 border-b-base-100 rounded-xl items-center \n                  "),onClick:()=>{m(0)},children:(0,s.jsxs)("a",{className:"tooltip tooltip-right hover:text-base-100 font-bold",href:"/stocks?ticker=".concat(encodeURIComponent(e.ticker)),onClick:()=>{m(0)},children:[(0,s.jsx)("img",{className:"w-8",src:"/images/chart1.png"}),(0,s.jsx)("p",{className:"",children:"Charts"})]})}),(0,s.jsx)("li",{className:"".concat("bg-primary text-base-100"," \n                  border-x-2 border-t-2 border-b-8 hover:bg-primary hover:border-neutral  \n                  border-base-100 border-b-base-100 rounded-xl items-center"),onClick:()=>{m(1)},children:(0,s.jsxs)("a",{className:"tooltip tooltip-right hover:text-base-100 font-bold",href:"/news?ticker=".concat(encodeURIComponent(e.ticker)),onClick:()=>{m(1)},children:[(0,s.jsx)("img",{className:"w-8",src:"/images/chart2.png"}),(0,s.jsx)("p",{className:"text-xs ",children:"News"})]})}),(0,s.jsx)("li",{className:"".concat("bg-primary text-base-100"," \n                  border-x-2 border-t-2 border-b-8 hover:bg-primary hover:border-neutral  \n                  border-base-100 border-b-base-100 rounded-xl items-center"),onClick:()=>m(2),children:(0,s.jsxs)("a",{className:"tooltip tooltip-right hover:text-base-100 font-bold",href:"/snp",children:[(0,s.jsx)("img",{className:"w-8",src:"/images/chart3.png"}),(0,s.jsx)("p",{className:"",children:"S&P"})]})})]}),(0,s.jsxs)("div",{className:"flex-none",children:[(0,s.jsx)("li",{className:"bg-primary text-base-100\n                   border-l-4 border-b-8   \n                   border-primary rounded-xl items-center mb-1\n                  ",children:(0,s.jsx)("a",{className:"tooltip tooltip-right ",href:c,target:"_blank",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7 inline-block",fill:"currentColor",style:{color:"#c13584"},viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})})}),(0,s.jsx)("li",{className:"bg-primary text-base-100\n                   border-x-2 border-t-8   \n                   border-primary rounded-xl items-center \n                  ",children:(0,s.jsx)("a",{className:"tooltip tooltip-right",href:l,target:"_blank",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7 inline-block",fill:"currentColor",style:{color:"#0077b5"},viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"})})})})]})]})})}):null})}},3635:function(e,t,r){r.d(t,{a9:function(){return o},dz:function(){return i}});var s=r(4033),n=r(2265),a=r(8970);function o(){let e=(0,s.useRouter)(),t=(0,a.CG)(e=>e.trader);return(0,n.useEffect)(()=>{t&&""!=t.token||e.push("/login"),fetch("".concat("https://e32lo3t2uikatpsxb6u2ewexqq0gvlvm.lambda-url.us-west-1.on.aws","/auth/verify-token/"),{method:"POST",headers:{authorization:"Bearer ".concat(t.token)}}).then(t=>{200!=t.status&&e.push("/login")}).catch(e=>console.log("JWT Expired Error: ".concat(e)))},[t]),t}function l(){let{innerWidth:e,innerHeight:t}=window;return{width:e,height:t}}function i(){let[e,t]=(0,n.useState)(l());return(0,n.useEffect)(()=>{function e(){t(l())}return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e}},306:function(e,t,r){r.d(t,{Z:function(){return o}});var s=r(7437),n=r(3198),a=r(8970);function o(e){let{children:t}=e;return(0,s.jsx)(n.zt,{store:a.ZP,children:t})}(0,r(1267).p5)(a.ZP)},8081:function(e,t,r){r.d(t,{QM:function(){return o},oK:function(){return i}});var s=r(663);let n={email:"",token:""},a=(0,s.oM)({name:"trader",initialState:n,reducers:{LOGIN_TRADER:(e,t)=>({...t.payload}),LOGOUT_TRADER:(e,t)=>n,GET_TRADER:e=>e}}),{LOGIN_TRADER:o,GET_TRADER:l,LOGOUT_TRADER:i}=a.actions;t.ZP=a.reducer},8970:function(e,t,r){r.d(t,{ZP:function(){return u},TL:function(){return b},CG:function(){return g}});var s=r(7373),n=r(663),a=r(8081),o=r(1267),l=r(3944),i=r.n(l),c=r(5456);let d=(0,c.Z)("local");var h=r(3198);let m=(0,s.UY)({trader:(0,o.OJ)({key:"trader",storage:d,whitelist:["id","username","email","first_name","last_name","token","refresh_token"]},a.ZP)}),x=(0,n.xC)({reducer:m,middleware:e=>e({serializableCheck:!1}).concat(i())});var u=x;let b=()=>(0,h.I0)(),g=h.v9}}]);