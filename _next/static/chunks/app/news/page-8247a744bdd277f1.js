(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[834],{2418:function(e,t,s){Promise.resolve().then(s.bind(s,6009))},6593:function(e,t,s){"use strict";var a=s(7437),c=s(1396),n=s.n(c),r=s(2265),l=s(3635),i=s(4033);let o=[];t.Z=e=>{(0,i.useRouter)();let t=(0,l.a9)(),s="https://e32lo3t2uikatpsxb6u2ewexqq0gvlvm.lambda-url.us-west-1.on.aws",[c,d]=(0,r.useState)(!1),[h,m]=(0,r.useState)(""),[u,x]=(0,r.useState)(""),[k,b]=(0,r.useState)(""),[j,v]=(0,r.useState)(o),[f,p]=(0,r.useState)(0);(0,r.useEffect)(()=>{v(e.data),p(e.activeTab)},[e.data,e.activeTab]);let g=()=>{fetch("".concat(s,"/traders/").concat(t.username,"/stocks/?ticker_list=").concat(k),{method:"delete",headers:{authorization:"Bearer ".concat(t.token)}}).then(e=>{200==e.status&&(p(0),v(j.filter(e=>e.ticker!=k)),d(!1))}).catch(e=>{console.log("Delete Stock Ticker: ".concat(e))})},w=e=>{x("Delete ".concat(e," from your stock list?")),m("Delete Stock"),d(!0)},N=()=>{fetch("".concat(s,"/traders/").concat(t.id,"/stocks/"),{headers:{authorization:"Bearer ".concat(t.token)}}).then(e=>e.json()).then(e=>{v(e)}).catch(e=>{console.log("Get Stock List: ".concat(e))})},S=e=>{let a={ticker:e,trader_username:t.username};fetch("".concat(s,"/traders/").concat(t.username,"/stocks"),{body:JSON.stringify(a),method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(t.token)}}).then(e=>{200==e.status&&N()}).catch(e=>{console.log("Delete Stock Ticker: ".concat(e))})};return(0,a.jsxs)("div",{className:"",children:[j&&j.length>0?(0,a.jsx)("div",{className:"tabs pl-5 flex-wrap",children:j.map((t,s)=>(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{className:"align-middle btn btn-circle btn-xs",onClick:()=>{t.ticker_new?S(t.ticker):(b(t.ticker),w(t.ticker))},children:t.ticker_new?(0,a.jsx)("img",{src:"/images/add.png"}):(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,a.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})})}),(0,a.jsx)(n(),{className:"ml-1 pl-1 tab tab-rounded-lg font-bold "+(f==s?" tab-active text-lg text-secondary":" text-neutral text-md"),onClick:()=>{e.setActiveTab(s),null!=c||d(!1)},href:"",children:t.ticker},s)]},(j[f]?j[f].ticker:"")+s))}):null,c?(0,a.jsx)("div",{className:"ml-8 mt-2",children:(0,a.jsxs)("div",{className:"alert bg-white",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"stroke-info shrink-0 w-6 h-6",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,a.jsx)("span",{children:u}),(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{className:"btn btn-sm mr-2",onClick:()=>{g()},children:"Yes"}),(0,a.jsx)("button",{className:"btn btn-sm btn-primary",onClick:()=>{d(!1)},children:"No"})]})]})}):null]})}},6009:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return v}});var a=s(7437),c=s(306),n=s(1423),r=s(2575),l=s(6480),i=s(6593),o=s(3635),d=s(4033),h=s(2265),m=s(3581),u=s(5082),x=s(8809),k=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"mt-2",children:[(0,a.jsx)("div",{className:"ml-2 text-center text-primary",children:(0,a.jsx)("h1",{className:"text-2xl lg:text-3xl font-bold",children:"Stock Daily News"})}),(0,a.jsx)("div",{className:"max-w-fit mb-36",children:e&&e.data&&e.data.length>0&&e.data.map((e,t)=>(0,a.jsxs)("div",{className:"m-1 stats shadow-lg bg-white ",children:[(0,a.jsxs)("div",{className:"collapse-open stat",children:[(0,a.jsx)("div",{className:"collapse-title text-sm text-neutral-500 font-medium",children:(0,a.jsx)("div",{className:"inline-block",children:e.published_date})}),(0,a.jsx)("div",{className:"collapse-content",children:(0,a.jsx)(m.U,{className:"link ".concat("Positive"==e.sentiment.label?"link-secondary":"link-error"),remarkPlugins:[x.Z],rehypePlugins:[u.Z],children:e.summary})})]}),(0,a.jsxs)("div",{className:"stat text-base-100",children:[(0,a.jsx)("p",{className:"".concat("Positive"==e.sentiment.label?"text-secondary":"text-error"),children:e.sentiment.label}),(0,a.jsx)("div",{className:"justify-center self-center text-center radial-progress ".concat("Positive"==e.sentiment.label?"bg-secondary":"bg-error"," border-4 ").concat("Positive"==e.sentiment.label?"text-white border-secondary":"text-white border-error"),style:{"--value":100*e.sentiment.score},children:Math.floor(100*e.sentiment.score)+"%"})]})]},t))})]})}),b=s(6782);function j(){let e=(0,d.useRouter)(),t=(0,o.a9)(),{width:s,height:c}=(0,o.dz)(),[m,u]=(0,h.useState)(0),[x,j]=(0,h.useState)([]),[v,f]=(0,h.useState)([]),[p,g]=(0,h.useState)(!1),[w,N]=(0,h.useState)(""),S="https://e32lo3t2uikatpsxb6u2ewexqq0gvlvm.lambda-url.us-west-1.on.aws",y=(0,d.useSearchParams)();return(0,h.useEffect)(()=>{let e=y.get("ticker")?decodeURIComponent(y.get("ticker")):"";e&&""!=e||(e="S&P"),g(!0),N(""),fetch("".concat(S,"/traders/").concat(t.id,"/stocks/"),{headers:{authorization:"Bearer ".concat(t.token)}}).then(e=>e.json()).then(t=>{let s=0;t.map((t,a)=>{t.ticker==e&&(s=a)}),f(t),!t||!t[s]||t&&t[s]&&t[s].ticker!=e?(t.push({ticker:e,ticker_new:!0}),f(t),u(t.length-1)):u(s),e&&t&&t[m]&&e!=t[m].ticker&&t.map((t,s)=>{t.ticker==e&&u(s)}),g(!1)}).catch(e=>{let t="Get Nav Items Error: ".concat(e);N(t),g(!1),console.log(t)})},[]),(0,h.useEffect)(()=>{v.length>0&&e.push("/news?ticker=".concat(encodeURIComponent(v[m].ticker)))},[m]),(0,h.useEffect)(()=>{if(v.length>0){let e=v[m].ticker;g(!0),N(""),fetch("".concat(S,"/stocks/").concat(e,"/news/"),{headers:{authorization:"Bearer ".concat(t.token)}}).then(e=>e.json()).then(e=>{j(e),g(!1)}).catch(e=>{let t="News error: ".concat(e);N(t),g(!1),console.log(t)})}},[v,m]),(0,a.jsx)("main",{children:(0,a.jsxs)("div",{className:"bg-base-100",children:[(0,a.jsx)(l.Z,{trader:t,currentPage:"news"}),(0,a.jsx)(i.Z,{data:v,activeTab:m,setActiveTab:u}),(0,a.jsx)(b.Z,{ticker:"".concat(v&&v[m]?v[m].ticker:"S&P")}),""!=w?(0,a.jsx)("p",{className:"text-center text-red-500 text-xs italic",children:w}):null,p?(0,a.jsx)(r.Z,{}):null,(0,a.jsx)(k,{data:x}),(0,a.jsx)(n.$,{ticker:"".concat(v&&v[m]?v[m].ticker:"")})]})})}function v(){return(0,a.jsx)(c.Z,{children:(0,a.jsx)(j,{})})}}},function(e){e.O(0,[719,396,69,666,971,596,744],function(){return e(e.s=2418)}),_N_E=e.O()}]);