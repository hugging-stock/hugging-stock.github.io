(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[857],{2675:function(e,t,r){"use strict";var s=r(7437),n=r(2265),a=r(4758),i=r.n(a);let l=e=>{var t;new DOMParser().parseFromString(null!==(t=e.html_content)&&void 0!==t?t:"","text/html");let r=e.html_content;return r};t.Z=e=>{var t;return n.useRef(),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"mb-10",children:[e.showNoneText&&0==e.data.length?(0,s.jsx)("p",{className:"text-sm p-5",children:"No Charts To Show"}):"",e.data&&e.data.length>0?e.data.map((e,r)=>(0,s.jsx)("div",{className:"pb-5 w-full",children:(0,s.jsxs)("div",{id:"item"+r,className:"items-center w-full",children:[(0,s.jsxs)("div",{className:"stats shadow flex-col lg:flex-row",children:[(0,s.jsxs)("div",{className:"stat bg-white",children:[(0,s.jsx)("div",{className:"stat-figure text-primary ",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-8 h-8 stroke-current",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),(0,s.jsx)("div",{className:"stat-value text-2xl",children:e.title}),(0,s.jsx)("div",{className:"flex flex-wrap",children:e.description1})]}),e.description2?(0,s.jsxs)("div",{className:"stat bg-white",children:[(0,s.jsx)("div",{className:"stat-figure text-secondary",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-8 h-8 stroke-current",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),(0,s.jsx)("div",{className:"flex flex-wrap",children:e.description2})]}):null,e.description3?(0,s.jsxs)("div",{className:"stat bg-white",children:[(0,s.jsx)("div",{className:"stat-figure text-secondary",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-8 h-8 stroke-current",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),(0,s.jsx)("div",{className:"flex flex-wrap",children:e.description3})]}):null]}),"png"==e.content_type?(0,s.jsx)("img",{className:"mt-2",src:null!==(t=e.url)&&void 0!==t?t:"",alt:e.ticker}):(0,s.jsx)("div",{children:(0,s.jsx)(i(),{srcDoc:"".concat(l(e))})}),(0,s.jsx)("div",{className:"divider"})]},r)},r)):null]})})}},2575:function(e,t,r){"use strict";var s=r(7437);t.Z=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"flex items-center justify-center",children:e.text}),(0,s.jsxs)("div",{className:"flex items-center justify-center",children:[(0,s.jsx)("span",{className:"loading loading-bars loading-lg text-primary "}),(0,s.jsx)("span",{className:"loading loading-bars loading-md text-primary"}),(0,s.jsx)("span",{className:"loading loading-bars loading-md text-primary"}),(0,s.jsx)("span",{className:"loading loading-bars loading-lg text-primary"})]})]})},6480:function(e,t,r){"use strict";var s=r(7437),n=r(2265),a=r(4033);t.Z=()=>{let[e,t]=(0,n.useState)(""),r=(0,a.useRouter)();(0,n.useRef)();let i=()=>{e&&""!=e&&r.push("/stocks?ticker=".concat(e))};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"navbar bg-base-100 mb-3",children:[(0,s.jsx)("div",{className:"flex-1",children:(0,s.jsx)("a",{className:"text-primary btn btn-ghost normal-case text-2xl",children:(0,s.jsxs)("h1",{className:"font-extrabold leading-none tracking-tight xs:text-lg md:text-4xl lg:text-5xl text-black",children:["Hugging",(0,s.jsx)("span",{className:"underline underline-offset-3 decoration-8 decoration-primary",children:"Stock"})]})})}),(0,s.jsxs)("div",{className:"flex-none gap-2",children:[(0,s.jsx)("div",{className:"form-control",children:(0,s.jsx)("form",{onSubmit:e=>{e.preventDefault(),i()},children:(0,s.jsx)("input",{name:"searchText",type:"text",placeholder:"Search By Ticker",className:"bg-white text-black input input-bordered w-auto",onChange:e=>{t(e.target.value)}})})}),(0,s.jsxs)("div",{className:"dropdown dropdown-end",children:[(0,s.jsx)("label",{tabIndex:0,className:"btn btn-ghost btn-circle avatar",children:(0,s.jsx)("div",{className:"avatar placeholder",children:(0,s.jsx)("div",{className:"bg-neutral-focus text-neutral-content rounded-full w-10",children:(0,s.jsx)("span",{children:"MX"})})})}),(0,s.jsxs)("ul",{tabIndex:0,className:"mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52",children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{className:"justify-between",children:"Profile"})}),(0,s.jsx)("li",{children:(0,s.jsxs)("a",{children:["Settings",(0,s.jsx)("span",{className:"badge",children:"Soon"})]})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{children:"Logout"})})]})]})]})]})})}},6782:function(e,t,r){"use strict";var s=r(7437);t.Z=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("ul",{className:"menu bg-primary text-white rounded-box",children:[(0,s.jsx)("img",{className:"mask mask-heart w-12",src:"/images/hugging-cactus.png"}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{className:"tooltip tooltip-right","data-tip":"Charts",href:"/",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{className:"tooltip tooltip-right","data-tip":"News",href:"/news?ticker=".concat(e.ticker),children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"})})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{className:"tooltip tooltip-right","data-tip":"S&P",href:"/snp",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"})})})})]})})},3635:function(e,t,r){"use strict";r.d(t,{a9:function(){return i}});var s=r(4033),n=r(2265),a=r(8970);function i(){let e=(0,s.useRouter)(),t=(0,a.CG)(e=>e.trader);return(0,n.useEffect)(()=>{t&&""!=t.token||e.push("/login"),fetch("".concat("https://e32lo3t2uikatpsxb6u2ewexqq0gvlvm.lambda-url.us-west-1.on.aws","/auth/verify-token/"),{method:"POST",headers:{authorization:"Bearer ".concat(t.token)}}).then(t=>{200!=t.status&&e.push("/login")}).catch(e=>console.log("JWT Expired Error: ".concat(e)))},[t]),t}},306:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var s=r(7437),n=r(3198),a=r(8970);function i(e){let{children:t}=e;return(0,s.jsx)(n.zt,{store:a.ZP,children:t})}(0,r(1267).p5)(a.ZP)},8081:function(e,t,r){"use strict";r.d(t,{QM:function(){return a}});var s=r(663);let n=(0,s.oM)({name:"trader",initialState:{email:"",token:""},reducers:{LOGIN_TRADER:(e,t)=>({...t.payload}),GET_TRADER:e=>e}}),{LOGIN_TRADER:a,GET_TRADER:i}=n.actions;t.ZP=n.reducer},8970:function(e,t,r){"use strict";r.d(t,{ZP:function(){return x},TL:function(){return p},CG:function(){return f}});var s=r(7373),n=r(663),a=r(8081),i=r(1267),l=r(3944),o=r.n(l),c=r(5456);let d=(0,c.Z)("local");var h=r(3198);let u=(0,s.UY)({trader:(0,i.OJ)({key:"trader",storage:d,whitelist:["id","username","email","first_name","last_name","token","refresh_token"]},a.ZP)}),m=(0,n.xC)({reducer:u,middleware:e=>e({serializableCheck:!1}).concat(o())});var x=m;let p=()=>(0,h.I0)(),f=h.v9},3018:function(e,t,r){"use strict";var s=r(1289);function n(){}function a(){}a.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,a,i){if(i!==s){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:n};return r.PropTypes=r,r}},4275:function(e,t,r){e.exports=r(3018)()},1289:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4758:function(e,t,r){"use strict";var s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],s=!0,n=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(s=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);s=!0);}catch(e){n=!0,a=e}finally{try{!s&&l.return&&l.return()}finally{if(n)throw a}}return r}(e,t);throw TypeError("Invalid attempt to destructure non-iterable instance")},n=r(2265),a=r(4275),i=n.createElement.bind(n,"div"),l=n.createElement.bind(n,"iframe"),o={position:"relative",height:0,overflow:"hidden",maxWidth:"100%"},c={position:"absolute",top:0,left:0,width:"100%",height:"100%"},d=function(e){var t=s(e.split(":").map(function(e){return Number(e)}),2),r=t[0];return t[1]/r*100+"%"},h=function(e){var t=Object.assign({},o,{paddingBottom:d(e.ratio)}),r=Object.assign({frameBorder:0},e,{style:c});return delete r.ratio,i({style:t},l(r))};h.defaultProps={src:"https://www.youtube.com/embed/dQw4w9WgXcQ",ratio:"16:9"},h.propTypes={src:a.string,ratio:function(e,t,r){if(!/\d+:\d+/.test(e[t]))return Error('Invalid ratio supplied to ResponsiveEmbed. Expected a string like "16:9" or any 2 numbers seperated by a colon')}},e.exports=h}}]);