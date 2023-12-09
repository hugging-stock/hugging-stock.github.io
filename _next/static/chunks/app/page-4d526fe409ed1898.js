(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2519:function(e,t,a){Promise.resolve().then(a.bind(a,1660))},4585:function(e,t,a){"use strict";a.d(t,{g:function(){return r}});var n=a(7437),s=a(1396),c=a.n(s);a(2265);let r=[{label:"Volume Strategies",endpoint:["volume"]},{label:"PSAR Chart/Indicator",endpoint:["psar-candle","psar-average","psar-ha","psar-ha-psar"]},{label:"Squeeze Indicators",endpoint:["squeeze","squeeze-bollinger"]},{label:"Chart Patterns",endpoint:["patterns-chart"]},{label:"Moving Average Indicators",endpoint:["moving-average-sma","moving-average-ema","moving-average-macd"]},{label:"Overbought/Oversold Indicators",endpoint:["ob-os-so","ob-os-rsi"]},{label:"Trend Indicators",endpoint:["trend-aroon","trend-adx"]},{label:"Facts",endpoint:["facts"]}];t.Z=e=>(0,n.jsx)("div",{className:"tabs mb-10 mt-5 flex-wrap lg:flex-wrap",children:r.map((t,a)=>(0,n.jsx)(c(),{className:"tab m-1 px-2 py-1 tabs-boxed text-neutral-600"+(e.activeChart==a?" tab-active bg-secondary text-lg":" bg-primary text-md"),onClick:()=>{e.setActiveChart(a)},href:"",children:(0,n.jsx)("div",{children:t.label})},a))})},6593:function(e,t,a){"use strict";var n=a(7437),s=a(1396),c=a.n(s),r=a(2265),o=a(3635),l=a(4033);let i=[];t.Z=e=>{(0,l.useRouter)();let t=(0,o.a9)(),a="https://e32lo3t2uikatpsxb6u2ewexqq0gvlvm.lambda-url.us-west-1.on.aws",[s,d]=(0,r.useState)(!1),[u,h]=(0,r.useState)(""),[m,x]=(0,r.useState)(""),[b,k]=(0,r.useState)(""),[v,p]=(0,r.useState)(i),[g,f]=(0,r.useState)(0);(0,r.useEffect)(()=>{p(e.data),f(e.activeTab)},[e.data,e.activeTab]);let j=()=>{fetch("".concat(a,"/traders/").concat(t.username,"/stocks/?ticker_list=").concat(b),{method:"delete",headers:{authorization:"Bearer ".concat(t.token)}}).then(e=>{200==e.status&&(f(0),p(v.filter(e=>e.ticker!=b)),d(!1))}).catch(e=>{console.log("Delete Stock Ticker: ".concat(e))})},w=e=>{x("Delete ".concat(e," from your stock list?")),h("Delete Stock"),d(!0)},S=()=>{fetch("".concat(a,"/traders/").concat(t.id,"/stocks/"),{headers:{authorization:"Bearer ".concat(t.token)}}).then(e=>e.json()).then(e=>{p(e)}).catch(e=>{console.log("Get Stock List: ".concat(e))})},N=e=>{let n={ticker:e,trader_username:t.username};fetch("".concat(a,"/traders/").concat(t.username,"/stocks"),{body:JSON.stringify(n),method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(t.token)}}).then(e=>{200==e.status&&S()}).catch(e=>{console.log("Delete Stock Ticker: ".concat(e))})};return(0,n.jsxs)("div",{className:"",children:[v&&v.length>0?(0,n.jsx)("div",{className:"tabs pl-5 flex-wrap",children:v.map((t,a)=>(0,n.jsxs)("div",{children:[(0,n.jsx)("button",{className:"align-middle btn btn-circle btn-xs",onClick:()=>{t.ticker_new?N(t.ticker):(k(t.ticker),w(t.ticker))},children:t.ticker_new?(0,n.jsx)("img",{src:"/images/add.png"}):(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,n.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})})}),(0,n.jsx)(c(),{className:"ml-1 pl-1 tab tab-rounded-lg font-bold "+(g==a?" tab-active text-lg text-secondary":" text-neutral text-md"),onClick:()=>{e.setActiveTab(a),null!=s||d(!1)},href:"",children:t.ticker},a)]},(v[g]?v[g].ticker:"")+a))}):null,s?(0,n.jsx)("div",{className:"ml-8 mt-2",children:(0,n.jsxs)("div",{className:"alert bg-white text-neutral-500",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"stroke-info shrink-0 w-6 h-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,n.jsx)("span",{children:m}),(0,n.jsxs)("div",{children:[(0,n.jsx)("button",{className:"btn btn-sm mr-2 text-white bg-black",onClick:()=>{j()},children:"Yes"}),(0,n.jsx)("button",{className:"btn btn-sm btn-primary text-black",onClick:()=>{d(!1)},children:"No"})]})]})}):null]})}},1660:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return k}});var n=a(7437),s=a(306),c=a(4260),r=a(6593),o=a(2265),l=a(3635),i=a(4585),d=a(2575),u=a(4033),h=a(6480),m=a(6782),x=a(1423);function b(){let e=(0,l.a9)(),t=(0,u.useRouter)(),{width:a,height:s}=(0,l.dz)(),[b,k]=(0,o.useState)(0),[v,p]=(0,o.useState)(0),[g,f]=(0,o.useState)([]),[j,w]=(0,o.useState)([]),[S,N]=(0,o.useState)(!1),[C,_]=(0,o.useState)("");return(0,o.useEffect)(()=>{N(!0),_(""),fetch("".concat("https://e32lo3t2uikatpsxb6u2ewexqq0gvlvm.lambda-url.us-west-1.on.aws","/traders/").concat(e.id,"/stocks/"),{headers:{Authorization:"Bearer ".concat(e.token)}}).then(e=>e.json()).then(e=>{w(e),N(!1)}).catch(e=>{let t="Get Nav Items Error: ".concat(e);_(t),N(!1),console.log(t)})},[]),(0,o.useEffect)(()=>{j.length>0?t.push("/stocks?ticker=".concat(encodeURIComponent(j[b].ticker))):t.push("/news?ticker=".concat(encodeURIComponent("S&P")))},[j,b,v]),(0,n.jsxs)("main",{children:[(0,n.jsx)(h.Z,{trader:e,currentPage:"home"}),(0,n.jsxs)("div",{className:"bg-base-100 dark:bg-base-100 mt-20 ".concat(a>1020?"ml-24":""),children:[(0,n.jsx)(r.Z,{data:j,activeTab:b,setActiveTab:k}),j&&j.length>0?(0,n.jsx)(i.Z,{activeChart:v,setActiveChart:p}):null,(0,n.jsx)(m.Z,{ticker:"".concat(j&&j[b]?j[b].ticker:"S&P")}),""!=C?(0,n.jsx)("p",{className:"text-center text-red-500 text-xs italic",children:C}):null,S?(0,n.jsx)(d.Z,{}):null,j&&j.length>0?(0,n.jsx)(c.Z,{data:g}):null]}),(0,n.jsx)(x.$,{ticker:"".concat(j&&j[b]?j[b].ticker:"S&P")})]})}function k(){return(0,n.jsx)(s.Z,{children:(0,n.jsx)(b,{})})}}},function(e){e.O(0,[719,396,666,419,971,596,744],function(){return e(e.s=2519)}),_N_E=e.O()}]);