(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2519:function(e,t,n){Promise.resolve().then(n.bind(n,1660))},1660:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var c=n(7437),s=n(306),a=n(4260),r=n(6593),o=n(2265),u=n(3635),i=n(4585),l=n(2575),h=n(4033),d=n(6480),x=n(6782),k=n(1423);function f(){let e=(0,u.a9)(),t=(0,h.useRouter)(),{width:n,height:s}=(0,u.dz)(),[f,j]=(0,o.useState)(0),[m,b]=(0,o.useState)(0),[p,v]=(0,o.useState)([]),[S,g]=(0,o.useState)([]),[Z,w]=(0,o.useState)(!1),[C,E]=(0,o.useState)("");return(0,o.useEffect)(()=>{w(!0),E(""),fetch("".concat("https://e32lo3t2uikatpsxb6u2ewexqq0gvlvm.lambda-url.us-west-1.on.aws","/traders/").concat(e.id,"/stocks/"),{headers:{Authorization:"Bearer ".concat(e.token)}}).then(e=>e.json()).then(e=>{g(e),w(!1)}).catch(e=>{let t="Get Nav Items Error: ".concat(e);E(t),w(!1),console.log(t)})},[]),(0,o.useEffect)(()=>{S.length>0?t.push("/stocks?ticker=".concat(encodeURIComponent(S[f].ticker))):t.push("/news?ticker=".concat(encodeURIComponent("S&P")))},[S,f,m]),(0,c.jsxs)("main",{children:[(0,c.jsx)(d.Z,{trader:e,currentPage:"home"}),(0,c.jsxs)("div",{className:"bg-base-100 dark:bg-base-100 mt-20 ".concat(n>1020?"ml-24":""),children:[(0,c.jsx)(r.Z,{data:S,activeTab:f,setActiveTab:j}),S&&S.length>0?(0,c.jsx)(i.Z,{activeChart:m,setActiveChart:b}):null,(0,c.jsx)(x.Z,{ticker:"".concat(S&&S[f]?S[f].ticker:"S&P")}),""!=C?(0,c.jsx)("p",{className:"text-center text-red-500 text-xs italic",children:C}):null,Z?(0,c.jsx)(l.Z,{}):null,S&&S.length>0?(0,c.jsx)(a.Z,{data:p}):null]}),(0,c.jsx)(k.$,{ticker:"".concat(S&&S[f]?S[f].ticker:"S&P")})]})}function j(){return(0,c.jsx)(s.Z,{children:(0,c.jsx)(f,{})})}}},function(e){e.O(0,[719,396,666,515,971,596,744],function(){return e(e.s=2519)}),_N_E=e.O()}]);