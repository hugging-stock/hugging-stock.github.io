(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[562],{764:function(e,t,a){Promise.resolve().then(a.bind(a,9389))},6360:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var s=a(7437),n=a(2265),l=a(3635);let i={id:0,date_start:"",info:void 0,path:null,url_pickle:null,filename:null,time_created:"",date_end:"",ticker:"",info_type:"",url:null,size:0,content_type:null,time_updated:null,title:null,description1:null,descLink1:null,description2:null,descLink2:null,description3:null,descLink3:null,action:null,message:null,html_content:null,html_markups:{__html:""},chart_url:""};var r=a(2575);let c=e=>{var t;new DOMParser().parseFromString(null!==(t=e.html_content)&&void 0!==t?t:"","text/html");let a=e.html_content;return a},o=e=>{var t,a,o,d,u;let h=(0,l.a9)(),{width:m,height:x}=(0,l.dz)(),[g,f]=(0,n.useState)(!1),[p,j]=(0,n.useState)(new Date),[v,w]=(0,n.useState)(new Date),[k,N]=(0,n.useState)(30),[_,b]=(0,n.useState)(30),[y,S]=(0,n.useState)(i),[D,C]=(0,n.useState)(""),[E,z]=(0,n.useState)("lg"),P=t=>{if(p>v||v>new Date||p>new Date){C("You're dates are off.  Please fix first then Recalculate.");return}f(!0),C(""),z(t),fetch("".concat("https://e32lo3t2uikatpsxb6u2ewexqq0gvlvm.lambda-url.us-west-1.on.aws","/stocks/").concat(e.item.ticker,"/").concat(e.item.chart_url,"?date_start=").concat(p.toISOString().split("T")[0],"&date_end=").concat(v.toISOString().split("T")[0]).concat("sm"==t?"&width=430&height=430":""),{headers:{authorization:"Bearer ".concat(h.token)}}).then(e=>e.json()).then(t=>{t[0].chart_url=e.item.chart_url,S(t[0]);let a=new Date(t[0].date_start),s=new Date(t[0].date_end);j(a),w(s),f(!1)}).catch(e=>{let t="Chart Display Error: ".concat(e);C(t),f(!1),console.log(t)})};return(0,n.useEffect)(()=>{console.log("width adjusting"),m<=500&&"lg"==E&&!g&&P("sm"),m>500&&"sm"==E&&!g&&P("lg")},[m]),(0,n.useEffect)(()=>{if(e.item&&0==y.id){S(e.item);let t=new Date(e.item.date_start),a=new Date(e.item.date_end);j(t),w(a)}},[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"pb-1 w-full ".concat((e.bgColor,"bg-gray-900")),children:(0,s.jsxs)("div",{className:"items-center w-full",children:[g?(0,s.jsx)(r.Z,{}):null,""!=D?(0,s.jsx)("p",{className:"text-center text-red-500 text-xs italic",children:D}):null,(0,s.jsxs)("div",{className:"stats shadow mb-3 flex-col lg:flex-row",children:[(0,s.jsxs)("div",{className:"stat bg-white flex-wrap}",children:[(0,s.jsx)("div",{className:"stat-figure text-primary",children:(0,s.jsx)("a",{href:null!==(a=y.descLink1)&&void 0!==a?a:"",target:"_blank",children:(0,s.jsx)("img",{src:"/images/information.png"})})}),(0,s.jsx)("div",{className:"stat-value text-xl lg:text-2xl",children:m>500||y.title&&y.title.length<=33?y.title:(null===(t=y.title)||void 0===t?void 0:t.substring(0,33))+"..."}),(0,s.jsx)("div",{className:"flex flex-wrap",children:y.description1})]}),y.description2&&m>500?(0,s.jsxs)("div",{className:"stat bg-gray-900 text-white",children:[(0,s.jsx)("div",{className:"stat-figure text-secondary",children:(0,s.jsx)("a",{href:null!==(o=y.descLink2)&&void 0!==o?o:"",target:"_blank",children:(0,s.jsx)("img",{src:"/images/information.png"})})}),(0,s.jsx)("div",{className:"flex flex-wrap",children:y.description2})]}):null,y.description3&&m>500?(0,s.jsxs)("div",{className:"stat bg-white",children:[(0,s.jsx)("div",{className:"stat-figure text-secondary",children:(0,s.jsx)("a",{href:null!==(d=y.descLink3)&&void 0!==d?d:"",target:"_blank",children:(0,s.jsx)("img",{src:"/images/information.png"})})}),(0,s.jsx)("div",{className:"flex flex-wrap",children:y.description3})]}):null]}),"png"==y.content_type?(0,s.jsx)("img",{className:"mt-2",src:null!==(u=y.url)&&void 0!==u?u:"",alt:y.ticker}):(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"justify-center lg:grid lg:grid-cols-3 gap-2",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{htmlFor:"start-range",className:"justify-center flex mr-2 text-sm font-bold text-gray-400 dark:text-gray-400",children:["Start Date ",p.toLocaleDateString()]}),(0,s.jsx)("input",{name:"start-range",type:"range",min:-366,max:"366",value:k,className:"range range-primary bg-white",onChange:t=>{let a=Number(t.target.value);N(a);let s=new Date(new Date(e.item.date_start).getTime()+864e5*a);j(s)},step:"1"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{htmlFor:"end-range",className:"justify-center flex mr-2 text-sm font-bold text-gray-400 dark:text-gray-400",children:["End Date ",v.toLocaleDateString()]}),(0,s.jsx)("input",{name:"end-range",type:"range",min:-366,max:"366",value:_,className:"range range-primary bg-white",onChange:t=>{let a=Number(t.target.value);b(a);let s=new Date(new Date(e.item.date_end).getTime()+864e5*a);w(s)},step:"1"})]}),(0,s.jsx)("div",{className:"flex justify-center lg:justify-start",children:(0,s.jsx)("button",{className:"my-2 bg-primary hover:bg-primary text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline",onClick:()=>{P(m>500?"lg":"sm")},children:"Recalculate"})})]}),(0,s.jsx)("div",{style:{position:"relative",paddingBottom:"".concat("lg"==E?"56.25%":"100%")},children:(0,s.jsx)("iframe",{style:{width:"100%",height:"100%",position:"absolute",left:"0px",top:"0px"},frameBorder:"0",allowFullScreen:!0,allow:"autoplay",srcDoc:"".concat(c(y))})})]}),(0,s.jsx)("div",{className:"divider"})]})})})};var d=e=>(n.useRef(),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"pl-0 lg:pl-1 mb-1",children:[e.showNoneText&&0==e.data.length?(0,s.jsx)("p",{className:"text-sm p-5",children:"No Charts To Show"}):"",e.data&&e.data.length>0?e.data.map((e,t)=>(0,s.jsx)(o,{item:e,bgColor:(t+1)%2==0?"light":"dark"},t)):null]})}))},9389:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var s=a(7437),n=a(306),l=a(1423),i=a(6480),r=a(3635),c=a(4033),o=a(2265),d=a(2575),u=a(6360);let h=()=>{let e="https://e32lo3t2uikatpsxb6u2ewexqq0gvlvm.lambda-url.us-west-1.on.aws",[t,a]=(0,o.useState)(1),[n,l]=(0,o.useState)(100),[i,c]=(0,o.useState)([]),[h,m]=(0,o.useState)(!1),x=(0,r.a9)(),{width:g,height:f}=(0,r.dz)();(0,o.useEffect)(()=>{m(!0),fetch("".concat(e,"/stocks/snp/?start=-1&end=-1&stock_start=").concat(t,"&stock_end=").concat(n,"&").concat(g<=500?"&width=430&height=430":""),{headers:{authorization:"Bearer ".concat(x.token)}}).then(e=>{if(n<503)a(n+1),l(n+100);else{let e=[];p(1,1,e),c(e)}m(!1)}).catch(e=>{m(!1),console.log("Get S&P Stocks Error: ".concat(e))})},[t,n]);let p=(t,a,s)=>{m(!0),fetch("".concat(e,"/stocks/snp/?start=").concat(t,"&end=").concat(a,"&").concat(g<=500?"&width=430&height=430":""),{headers:{authorization:"Bearer ".concat(x.token)}}).then(e=>e.json()).then(e=>{e[0].chart_url="squeeze",s.push(e[0]),m(!1),e&&e.length>0&&p(t+1,a+1,s)}).catch(e=>{m(!1),console.log("Get Chart Items Error: ".concat(e))})};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("main",{children:(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"text-white dark:text-white",children:h?(0,s.jsx)(d.Z,{text:"Analyzing S&P Companies"}):null}),h?(0,s.jsx)("div",{className:"flex items-center justify-center text-white dark:text-white",children:"...Please Wait. This might take awhile..."}):null,(0,s.jsx)("div",{className:"mb-5 ml-2 text-center text-primary",children:(0,s.jsx)("h1",{className:"text-xl lg:text-2xl font-bold",children:"S&P500 Companies Daily Analysis"})}),(0,s.jsx)(u.Z,{data:i,showNoneText:!1})]})})})};var m=a(6782);function x(){(0,c.useRouter)();let{width:e,height:t}=(0,r.dz)();return(0,r.a9)(),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("main",{children:(0,s.jsxs)("div",{className:"bg-gray-900",children:[(0,s.jsx)(i.Z,{}),(0,s.jsx)(m.Z,{ticker:"S&P"}),(0,s.jsx)(h,{}),(0,s.jsx)(l.$,{ticker:"S&P"})]})})})}function g(){return(0,s.jsx)(n.Z,{children:(0,s.jsx)(x,{})})}},4033:function(e,t,a){e.exports=a(8165)}},function(e){e.O(0,[719,666,971,596,744],function(){return e(e.s=764)}),_N_E=e.O()}]);