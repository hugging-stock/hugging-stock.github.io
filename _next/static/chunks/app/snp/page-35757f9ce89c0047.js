(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[562],{4999:function(t,e,s){Promise.resolve().then(s.bind(s,9389))},9389:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return f}});var n=s(7437),c=s(306),a=s(1423),r=s(6480),i=s(3635),l=s(4033),o=s(8344),h=s(2265),u=s(2575),x=s(4260);let d=()=>{let t="https://e32lo3t2uikatpsxb6u2ewexqq0gvlvm.lambda-url.us-west-1.on.aws",[e,s]=(0,h.useState)(1),[c,a]=(0,h.useState)(100),[r,l]=(0,h.useState)([]),[d,m]=(0,h.useState)(!1),[j,f]=(0,h.useState)(o.r),k=(0,i.a9)(),{width:g,height:p}=(0,i.dz)();(0,h.useEffect)(()=>{m(!0),fetch("".concat(t,"/stocks/snp/?start=-1&end=-1&stock_start=").concat(e,"&stock_end=").concat(c).concat(g<=500?"&width=430&height=430":""),{headers:{authorization:"Bearer ".concat(k.token)}}).then(t=>{c<503?(s(c+1),a(c+100)):w(1,1),m(!1)}).catch(t=>{m(!1),console.log("Get S&P Stocks Error: ".concat(t))})},[e,c]),(0,h.useEffect)(()=>{j&&""!=j.ticker&&0==r.filter(t=>t.ticker==j.ticker).length&&(r.push(j),l(r))},[j,f]);let w=(e,s)=>{m(!0),fetch("".concat(t,"/stocks/snp/?start=").concat(e,"&end=").concat(s).concat(g<=500?"&width=430&height=430":""),{headers:{authorization:"Bearer ".concat(k.token)}}).then(t=>t.json()).then(t=>{t&&t.length>0&&(t[0].chart_url="squeeze",f(t[0]),w(e+1,s+1)),m(!1)}).catch(t=>{m(!1),console.log("Get Chart Items Error: ".concat(t))})};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("main",{children:(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"text-white dark:text-white",children:d?(0,n.jsx)(u.Z,{text:"Analyzing S&P Companies"}):null}),d?(0,n.jsx)("div",{className:"flex items-center justify-center text-white dark:text-white",children:"...Please Wait. This might take awhile..."}):null,(0,n.jsx)("div",{className:"mb-5 ml-2 text-center text-primary",children:(0,n.jsx)("h1",{className:"text-xl lg:text-2xl font-bold",children:"S&P500 Companies Daily Analysis"})}),(0,n.jsxs)("div",{className:"min-h-screen",children:[r&&!(r.length<=0)||d?"":(0,n.jsx)("p",{className:"text-center text-primary text-lg italic",children:"No Charts to Show..."}),(0,n.jsx)(x.Z,{data:r,showNoneText:!1})]})]})})})};var m=s(6782);function j(){(0,l.useRouter)();let{width:t,height:e}=(0,i.dz)(),s=(0,i.a9)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("main",{children:[(0,n.jsx)(r.Z,{trader:s,currentPage:"snp"}),(0,n.jsxs)("div",{className:"bg-base-100 mt-20 ".concat(t>1020?"ml-24":""),children:[(0,n.jsx)(m.Z,{ticker:"S&P"}),(0,n.jsx)(d,{})]}),(0,n.jsx)(a.$,{ticker:"S&P"})]})})}function f(){return(0,n.jsx)(c.Z,{children:(0,n.jsx)(j,{})})}}},function(t){t.O(0,[719,666,419,971,596,744],function(){return t(t.s=4999)}),_N_E=t.O()}]);