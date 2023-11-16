(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[834],{2418:function(e,t,s){Promise.resolve().then(s.bind(s,6009))},1423:function(e,t,s){"use strict";s.d(t,{$:function(){return n}});var a=s(7437);let n=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("footer",{className:"bg-primary  text-xl text-black text-center  border-t-4 border-black fixed  inset-x-0  bottom-0  p-2",children:(0,a.jsxs)("ul",{className:"steps text-white steps-vertical lg:steps-horizontal",children:[(0,a.jsx)("li",{className:"step step-secondary ",children:"Search/Add A Stock Ticker"}),(0,a.jsx)("li",{className:"step step-info",children:"Utilize Relevant Charts"}),(0,a.jsx)("li",{className:"step step-warning",children:"Make A Move Or Not"}),(0,a.jsx)("li",{className:"step step-success",children:"Do Something Kind!"})]})})})},2575:function(e,t,s){"use strict";var a=s(7437);t.Z=e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"flex items-center justify-center",children:e.text}),(0,a.jsxs)("div",{className:"flex items-center justify-center",children:[(0,a.jsx)("span",{className:"loading loading-bars loading-lg text-primary "}),(0,a.jsx)("span",{className:"loading loading-bars loading-md text-primary"}),(0,a.jsx)("span",{className:"loading loading-bars loading-md text-primary"}),(0,a.jsx)("span",{className:"loading loading-bars loading-lg text-primary"})]})]})},6480:function(e,t,s){"use strict";var a=s(7437),n=s(2265),r=s(4033);t.Z=()=>{let[e,t]=(0,n.useState)(""),s=(0,r.useRouter)();(0,n.useRef)();let l=()=>{e&&""!=e&&s.push("/stocks?ticker=".concat(e))};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"navbar bg-base-100 mb-3",children:[(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)("a",{className:"text-primary btn btn-ghost normal-case text-2xl",children:(0,a.jsxs)("h1",{className:"font-extrabold leading-none tracking-tight xs:text-lg md:text-4xl lg:text-5xl text-black",children:["Hugging",(0,a.jsx)("span",{className:"underline underline-offset-3 decoration-8 decoration-primary",children:"Stock"})]})})}),(0,a.jsxs)("div",{className:"flex-none gap-2",children:[(0,a.jsx)("div",{className:"form-control",children:(0,a.jsx)("form",{onSubmit:e=>{e.preventDefault(),l()},children:(0,a.jsx)("input",{name:"searchText",type:"text",placeholder:"Search By Ticker",className:"bg-white text-black input input-bordered w-auto",onChange:e=>{t(e.target.value)}})})}),(0,a.jsxs)("div",{className:"dropdown dropdown-end",children:[(0,a.jsx)("label",{tabIndex:0,className:"btn btn-ghost btn-circle avatar",children:(0,a.jsx)("div",{className:"avatar placeholder",children:(0,a.jsx)("div",{className:"bg-neutral-focus text-neutral-content rounded-full w-10",children:(0,a.jsx)("span",{children:"MX"})})})}),(0,a.jsxs)("ul",{tabIndex:0,className:"mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"justify-between",children:"Profile"})}),(0,a.jsx)("li",{children:(0,a.jsxs)("a",{children:["Settings",(0,a.jsx)("span",{className:"badge",children:"Soon"})]})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{children:"Logout"})})]})]})]})]})})}},6782:function(e,t,s){"use strict";var a=s(7437);t.Z=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("ul",{className:"menu bg-primary text-white rounded-box",children:[(0,a.jsx)("img",{className:"mask mask-heart w-12",src:"/images/hugging-cactus.png"}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"tooltip tooltip-right","data-tip":"Charts",href:"/",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"tooltip tooltip-right","data-tip":"News",href:"/news?ticker=".concat(e.ticker),children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"tooltip tooltip-right","data-tip":"S&P",href:"/snp",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"})})})})]})})},6593:function(e,t,s){"use strict";var a=s(7437),n=s(1396),r=s.n(n),l=s(2265),c=s(6782),i=s(3635),o=s(4033);let d=[];t.Z=e=>{(0,o.useRouter)();let t=(0,i.a9)(),s="https://e32lo3t2uikatpsxb6u2ewexqq0gvlvm.lambda-url.us-west-1.on.aws",[n,h]=(0,l.useState)(!1),[u,m]=(0,l.useState)(""),[x,p]=(0,l.useState)(""),[j,g]=(0,l.useState)(""),[k,v]=(0,l.useState)(d),[f,b]=(0,l.useState)(0);(0,l.useEffect)(()=>{v(e.data),b(e.activeTab)},[e.data,e.activeTab]);let w=()=>{fetch("".concat(s,"/traders/").concat(t.username,"/stocks/?ticker_list=").concat(j),{method:"delete",headers:{authorization:"Bearer ".concat(t.token)}}).then(e=>{200==e.status&&(b(0),v(k.filter(e=>e.ticker!=j)),h(!1))}).catch(e=>{console.log("Delete Stock Ticker: ".concat(e))})},N=e=>{p("Delete ".concat(e," from your stock list?")),m("Delete Stock"),h(!0)},y=()=>{fetch("".concat(s,"/traders/").concat(t.id,"/stocks/"),{headers:{authorization:"Bearer ".concat(t.token)}}).then(e=>e.json()).then(e=>{v(e)}).catch(e=>{console.log("Get Stock List: ".concat(e))})},S=e=>{let a={ticker:e,trader_username:t.username};fetch("".concat(s,"/traders/").concat(t.username,"/stocks"),{body:JSON.stringify(a),method:"POST",headers:{authorization:"Bearer ".concat(t.token)}}).then(e=>{200==e.status&&y()}).catch(e=>{console.log("Delete Stock Ticker: ".concat(e))})};return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"z-20 flex shrink-0 grow-0 backdrop-opacity-0 justify-around gap-4 border-t bg-white p-1 shadow-lg fixed top-2/4 -translate-y-2/4 left-1 min-h-[auto] min-w-[30px] flex-col rounded-2xl border",children:(0,a.jsx)(c.Z,{ticker:"".concat(k[f]?k[f].ticker:"")})}),k&&k.length>0?(0,a.jsx)("div",{className:"tabs pl-5 flex-nowrap",children:k.map((t,s)=>(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{className:"align-middle btn btn-circle btn-xs",onClick:()=>{t.ticker_new?S(t.ticker):(g(t.ticker),N(t.ticker))},children:t.ticker_new?(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})}):(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),(0,a.jsx)(r(),{className:"ml-1 pl-1 tab tab-rounded-lg"+(f==s?" tab-active text-lg text-primary":""),onClick:()=>{e.setActiveTab(s),null!=n||h(!1)},href:"",children:t.ticker},s)]},(k[f]?k[f].ticker:"")+s))}):null,n?(0,a.jsx)("div",{className:"ml-8 mt-2",children:(0,a.jsxs)("div",{className:"alert",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"stroke-info shrink-0 w-6 h-6",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,a.jsx)("span",{children:x}),(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{className:"btn btn-sm",onClick:()=>{w()},children:"Yes"}),(0,a.jsx)("button",{className:"btn btn-sm btn-primary",onClick:()=>{h(!1)},children:"No"})]})]})}):null]})}},3635:function(e,t,s){"use strict";s.d(t,{a9:function(){return l}});var a=s(4033),n=s(2265),r=s(8970);function l(){let e=(0,a.useRouter)(),t=(0,r.CG)(e=>e.trader);return(0,n.useEffect)(()=>{t&&""!=t.token||e.push("/login"),fetch("".concat("https://e32lo3t2uikatpsxb6u2ewexqq0gvlvm.lambda-url.us-west-1.on.aws","/auth/verify-token/"),{method:"POST",headers:{authorization:"Bearer ".concat(t.token)}}).then(t=>{200!=t.status&&e.push("/login")}).catch(e=>console.log("JWT Expired Error: ".concat(e)))},[t]),t}},6009:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return g}});var a=s(7437),n=s(306),r=s(1423),l=s(2575),c=s(6480),i=s(6593),o=s(3635),d=s(4033),h=s(2265),u=s(3581),m=s(5082),x=s(8809),p=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"mt-2",children:[(0,a.jsx)("div",{className:"ml-2 text-center text-primary",children:(0,a.jsx)("h1",{className:"xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold",children:"Stock Daily News"})}),(0,a.jsx)("div",{className:"max-w-fit mb-36",children:e.data.map((e,t)=>(0,a.jsxs)("div",{className:"m-1 stats shadow-lg ",children:[(0,a.jsxs)("div",{className:"collapse-open stat",children:[(0,a.jsxs)("div",{className:"collapse-title text-sm font-medium",children:[(0,a.jsx)("p",{className:"font-bold",children:e.title}),(0,a.jsxs)("ul",{className:"steps",children:[(0,a.jsx)("li",{"data-content":"●",className:"italic step step-neutral",children:e.published_date}),(0,a.jsx)("li",{"data-content":"".concat("Positive"==e.sentiment.label?"★":"Negative"==e.sentiment.label?"!":"●"),className:"step step-".concat("Positive"==e.sentiment.label?"success":"Negative"==e.sentiment.label?"error":"neutral"),children:e.sentiment.label})]})]}),(0,a.jsx)("div",{className:"collapse-content",children:(0,a.jsx)(u.U,{className:"link ".concat("Positive"==e.sentiment.label?"link-primary":"link-error"),remarkPlugins:[x.Z],rehypePlugins:[m.Z],children:e.summary})})]}),(0,a.jsxs)("div",{className:"stat",children:[(0,a.jsx)("p",{children:"Sentiment Score"}),(0,a.jsx)("div",{className:"radial-progress ".concat("Positive"==e.sentiment.label?"bg-primary":"bg-error"," text-white border-4 ").concat("Positive"==e.sentiment.label?"border-primary":"border-error"),style:{"--value":100*e.sentiment.score},children:Math.floor(100*e.sentiment.score)+"%"})]})]},t))})]})});function j(){let e=(0,d.useRouter)(),t=(0,o.a9)(),[s,n]=(0,h.useState)(0),[u,m]=(0,h.useState)([]),[x,j]=(0,h.useState)([]),[g,k]=(0,h.useState)(!1),[v,f]=(0,h.useState)(""),b="https://e32lo3t2uikatpsxb6u2ewexqq0gvlvm.lambda-url.us-west-1.on.aws",w=(0,d.useSearchParams)();return(0,h.useEffect)(()=>{let e=w.get("ticker");k(!0),f(""),fetch("".concat(b,"/traders/").concat(t.id,"/stocks/"),{headers:{authorization:"Bearer ".concat(t.token)}}).then(e=>e.json()).then(t=>{let s=0;t.map((t,a)=>{t.ticker==e&&(s=a)}),j(t),!t||!t[s]||t&&t[s]&&t[s].ticker!=e?(t.push({ticker:e}),j(t),n(t.length-1)):n(s),k(!1)}).catch(e=>{let t="Get Nav Items Error: ".concat(e);f(t),k(!1),console.log(t)})},[]),(0,h.useEffect)(()=>{x.length>0&&e.push("/news?ticker=".concat(x[s].ticker))},[s]),(0,h.useEffect)(()=>{if(x.length>0){let e=x[s].ticker;k(!0),f(""),fetch("".concat(b,"/stocks/").concat(e,"/news/"),{headers:{authorization:"Bearer ".concat(t.token)}}).then(e=>e.json()).then(e=>{m(e),k(!1)}).catch(e=>{let t="News error: ".concat(e);f(t),k(!1),console.log(t)})}},[x,s]),(0,a.jsxs)("main",{children:[(0,a.jsx)(c.Z,{}),(0,a.jsx)(i.Z,{data:x,activeTab:s,setActiveTab:n}),""!=v?(0,a.jsx)("p",{className:"text-center text-red-500 text-xs italic",children:v}):null,g?(0,a.jsx)(l.Z,{}):null,(0,a.jsx)(p,{data:u}),(0,a.jsx)(r.$,{})]})}function g(){return(0,a.jsx)(n.Z,{children:(0,a.jsx)(j,{})})}},306:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var a=s(7437),n=s(3198),r=s(8970);function l(e){let{children:t}=e;return(0,a.jsx)(n.zt,{store:r.ZP,children:t})}(0,s(1267).p5)(r.ZP)},8081:function(e,t,s){"use strict";s.d(t,{QM:function(){return r}});var a=s(663);let n=(0,a.oM)({name:"trader",initialState:{email:"",token:""},reducers:{LOGIN_TRADER:(e,t)=>({...t.payload}),GET_TRADER:e=>e}}),{LOGIN_TRADER:r,GET_TRADER:l}=n.actions;t.ZP=n.reducer},8970:function(e,t,s){"use strict";s.d(t,{ZP:function(){return x},TL:function(){return p},CG:function(){return j}});var a=s(7373),n=s(663),r=s(8081),l=s(1267),c=s(3944),i=s.n(c),o=s(5456);let d=(0,o.Z)("local");var h=s(3198);let u=(0,a.UY)({trader:(0,l.OJ)({key:"trader",storage:d,whitelist:["id","username","email","first_name","last_name","token","refresh_token"]},r.ZP)}),m=(0,n.xC)({reducer:u,middleware:e=>e({serializableCheck:!1}).concat(i())});var x=m;let p=()=>(0,h.I0)(),j=h.v9}},function(e){e.O(0,[277,396,826,971,596,744],function(){return e(e.s=2418)}),_N_E=e.O()}]);