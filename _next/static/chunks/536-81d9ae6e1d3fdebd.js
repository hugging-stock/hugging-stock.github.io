(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[536],{6360:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var s=a(7437),n=a(2265),l=a(3635);let r={id:0,date_start:"",info:void 0,path:null,url_pickle:null,filename:null,time_created:"",date_end:"",ticker:"",info_type:"",url:null,size:0,content_type:null,time_updated:null,title:null,description1:null,descLink1:null,description2:null,descLink2:null,description3:null,descLink3:null,action:null,message:null,html_content:null,html_markups:{__html:""},chart_url:""};var i=a(2575);let c=e=>{var t;new DOMParser().parseFromString(null!==(t=e.html_content)&&void 0!==t?t:"","text/html");let a=e.html_content;return a},o=e=>{var t,a,o,d,m;let h=(0,l.a9)(),{width:u,height:x}=(0,l.dz)(),[g,p]=(0,n.useState)(!1),[v,f]=(0,n.useState)(new Date),[b,j]=(0,n.useState)(new Date),[k,w]=(0,n.useState)(30),[N,y]=(0,n.useState)(30),[_,S]=(0,n.useState)(r),[D,C]=(0,n.useState)(""),[L,T]=(0,n.useState)("lg"),z=t=>{if(v>b||b>new Date||v>new Date){C("You're dates are off.  Please fix first then Recalculate.");return}p(!0),C(""),T(t),fetch("".concat("https://e32lo3t2uikatpsxb6u2ewexqq0gvlvm.lambda-url.us-west-1.on.aws","/stocks/").concat(e.item.ticker,"/").concat(e.item.chart_url,"?date_start=").concat(v.toISOString().split("T")[0],"&date_end=").concat(b.toISOString().split("T")[0]).concat("sm"==t?"&width=430&height=430":""),{headers:{authorization:"Bearer ".concat(h.token)}}).then(e=>e.json()).then(t=>{t[0].chart_url=e.item.chart_url,S(t[0]);let a=new Date(t[0].date_start),s=new Date(t[0].date_end);f(a),j(s),p(!1)}).catch(e=>{let t="Chart Display Error: ".concat(e);C(t),p(!1),console.log(t)})};return(0,n.useEffect)(()=>{console.log("width adjusting"),u<=500&&"lg"==L&&!g&&z("sm"),u>500&&"sm"==L&&!g&&z("lg")},[u]),(0,n.useEffect)(()=>{if(e.item&&0==_.id){S(e.item);let t=new Date(e.item.date_start),a=new Date(e.item.date_end);f(t),j(a)}},[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"pb-1 w-full ".concat((e.bgColor,"bg-gray-900")),children:(0,s.jsxs)("div",{className:"items-center w-full",children:[g?(0,s.jsx)(i.Z,{}):null,""!=D?(0,s.jsx)("p",{className:"text-center text-red-500 text-xs italic",children:D}):null,(0,s.jsxs)("div",{className:"stats shadow mb-3 flex-col lg:flex-row",children:[(0,s.jsxs)("div",{className:"stat bg-white flex-wrap}",children:[(0,s.jsx)("div",{className:"stat-figure text-primary",children:(0,s.jsx)("a",{href:null!==(a=_.descLink1)&&void 0!==a?a:"",target:"_blank",children:(0,s.jsx)("img",{src:"/images/information.png"})})}),(0,s.jsx)("div",{className:"stat-value text-xl lg:text-2xl",children:u>500||_.title&&_.title.length<=33?_.title:(null===(t=_.title)||void 0===t?void 0:t.substring(0,33))+"..."}),(0,s.jsx)("div",{className:"flex flex-wrap",children:_.description1})]}),_.description2&&u>500?(0,s.jsxs)("div",{className:"stat bg-gray-900 text-white",children:[(0,s.jsx)("div",{className:"stat-figure text-secondary",children:(0,s.jsx)("a",{href:null!==(o=_.descLink2)&&void 0!==o?o:"",target:"_blank",children:(0,s.jsx)("img",{src:"/images/information.png"})})}),(0,s.jsx)("div",{className:"flex flex-wrap",children:_.description2})]}):null,_.description3&&u>500?(0,s.jsxs)("div",{className:"stat bg-white",children:[(0,s.jsx)("div",{className:"stat-figure text-secondary",children:(0,s.jsx)("a",{href:null!==(d=_.descLink3)&&void 0!==d?d:"",target:"_blank",children:(0,s.jsx)("img",{src:"/images/information.png"})})}),(0,s.jsx)("div",{className:"flex flex-wrap",children:_.description3})]}):null]}),"png"==_.content_type?(0,s.jsx)("img",{className:"mt-2",src:null!==(m=_.url)&&void 0!==m?m:"",alt:_.ticker}):(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"justify-center lg:grid lg:grid-cols-3 gap-2",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{htmlFor:"start-range",className:"justify-center flex mr-2 text-sm font-bold text-gray-400 dark:text-gray-400",children:["Start Date ",v.toLocaleDateString()]}),(0,s.jsx)("input",{name:"start-range",type:"range",min:-366,max:"366",value:k,className:"range range-primary bg-white",onChange:t=>{let a=Number(t.target.value);w(a);let s=new Date(new Date(e.item.date_start).getTime()+864e5*a);f(s)},step:"1"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{htmlFor:"end-range",className:"justify-center flex mr-2 text-sm font-bold text-gray-400 dark:text-gray-400",children:["End Date ",b.toLocaleDateString()]}),(0,s.jsx)("input",{name:"end-range",type:"range",min:-366,max:"366",value:N,className:"range range-primary bg-white",onChange:t=>{let a=Number(t.target.value);y(a);let s=new Date(new Date(e.item.date_end).getTime()+864e5*a);j(s)},step:"1"})]}),(0,s.jsx)("div",{className:"flex justify-center lg:justify-start",children:(0,s.jsx)("button",{className:"my-2 bg-primary hover:bg-primary text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline",onClick:()=>{z(u>500?"lg":"sm")},children:"Recalculate"})})]}),(0,s.jsx)("div",{style:{position:"relative",paddingBottom:"".concat("lg"==L?"56.25%":"100%")},children:(0,s.jsx)("iframe",{style:{width:"100%",height:"100%",position:"absolute",left:"0px",top:"0px"},frameBorder:"0",allowFullScreen:!0,allow:"autoplay",srcDoc:"".concat(c(_))})})]}),(0,s.jsx)("div",{className:"divider"})]})})})};var d=e=>(n.useRef(),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"pl-0 lg:pl-1 mb-1",children:[e.showNoneText&&0==e.data.length?(0,s.jsx)("p",{className:"text-sm p-5",children:"No Charts To Show"}):"",e.data&&e.data.length>0?e.data.map((e,t)=>(0,s.jsx)(o,{item:e,bgColor:(t+1)%2==0?"light":"dark"},t)):null]})}))},4585:function(e,t,a){"use strict";a.d(t,{g:function(){return r}});var s=a(7437),n=a(1396),l=a.n(n);a(2265);let r=[{label:"Volume Strategies",endpoint:["volume"]},{label:"PSAR Chart/Indicator",endpoint:["psar-candle","psar-average","psar-ha","psar-ha-psar"]},{label:"Squeeze Indicators",endpoint:["squeeze","squeeze-bollinger"]},{label:"Chart Patterns",endpoint:["patterns-chart"]},{label:"Moving Average Indicators",endpoint:["moving-average-sma","moving-average-ema","moving-average-macd"]},{label:"Overbought/Oversold Indicators",endpoint:["ob-os-so","ob-os-rsi"]},{label:"Trend Indicators",endpoint:["trend-aroon","trend-adx"]},{label:"Facts",endpoint:["facts"]}];t.Z=e=>(0,s.jsx)("div",{className:"tabs mb-10 mt-5 flex-wrap lg:flex-wrap",children:r.map((t,a)=>(0,s.jsx)(l(),{className:"tab m-1 px-2 py-1 tabs-boxed bg-white dark:bg-white"+(e.activeChart==a?" tab-active text-primary dark:text-primary font-bold text-lg":" text-gray-900 dark:text-gray-900 text-lg font-bold"),onClick:()=>{e.setActiveChart(a)},href:"",children:(0,s.jsx)("div",{children:t.label})},a))})},6593:function(e,t,a){"use strict";var s=a(7437),n=a(1396),l=a.n(n),r=a(2265),i=a(3635),c=a(4033);let o=[];t.Z=e=>{(0,c.useRouter)();let t=(0,i.a9)(),a="https://e32lo3t2uikatpsxb6u2ewexqq0gvlvm.lambda-url.us-west-1.on.aws",[n,d]=(0,r.useState)(!1),[m,h]=(0,r.useState)(""),[u,x]=(0,r.useState)(""),[g,p]=(0,r.useState)(""),[v,f]=(0,r.useState)(o),[b,j]=(0,r.useState)(0);(0,r.useEffect)(()=>{f(e.data),j(e.activeTab)},[e.data,e.activeTab]);let k=()=>{fetch("".concat(a,"/traders/").concat(t.username,"/stocks/?ticker_list=").concat(g),{method:"delete",headers:{authorization:"Bearer ".concat(t.token)}}).then(e=>{200==e.status&&(j(0),f(v.filter(e=>e.ticker!=g)),d(!1))}).catch(e=>{console.log("Delete Stock Ticker: ".concat(e))})},w=e=>{x("Delete ".concat(e," from your stock list?")),h("Delete Stock"),d(!0)},N=()=>{fetch("".concat(a,"/traders/").concat(t.id,"/stocks/"),{headers:{authorization:"Bearer ".concat(t.token)}}).then(e=>e.json()).then(e=>{f(e)}).catch(e=>{console.log("Get Stock List: ".concat(e))})},y=e=>{let s={ticker:e,trader_username:t.username};fetch("".concat(a,"/traders/").concat(t.username,"/stocks"),{body:JSON.stringify(s),method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(t.token)}}).then(e=>{200==e.status&&N()}).catch(e=>{console.log("Delete Stock Ticker: ".concat(e))})};return(0,s.jsxs)("div",{className:"",children:[v&&v.length>0?(0,s.jsx)("div",{className:"tabs pl-5 flex-wrap",children:v.map((t,a)=>(0,s.jsxs)("div",{children:[(0,s.jsx)("button",{className:"align-middle btn btn-circle btn-xs",onClick:()=>{t.ticker_new?y(t.ticker):(p(t.ticker),w(t.ticker))},children:t.ticker_new?(0,s.jsx)("img",{src:"/images/add.png"}):(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,s.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})})}),(0,s.jsx)(l(),{className:"ml-1 pl-1 tab tab-rounded-lg font-bold "+(b==a?" tab-active text-lg text-primary":" text-gray-200 text-md"),onClick:()=>{e.setActiveTab(a),null!=n||d(!1)},href:"",children:t.ticker},a)]},(v[b]?v[b].ticker:"")+a))}):null,n?(0,s.jsx)("div",{className:"ml-8 mt-2",children:(0,s.jsxs)("div",{className:"alert bg-white",children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"stroke-info shrink-0 w-6 h-6",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,s.jsx)("span",{children:u}),(0,s.jsxs)("div",{children:[(0,s.jsx)("button",{className:"btn btn-sm mr-2",onClick:()=>{k()},children:"Yes"}),(0,s.jsx)("button",{className:"btn btn-sm btn-primary",onClick:()=>{d(!1)},children:"No"})]})]})}):null]})}},4033:function(e,t,a){e.exports=a(8165)}}]);