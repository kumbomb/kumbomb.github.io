"use strict";(self.webpackChunkshop_pwa=self.webpackChunkshop_pwa||[]).push([[892],{3892:function(e,n,t){t.r(n);var i=t(885),c=t(2791),s=t(6871),r=t(8390),d=t(9434),l=t(8026),a=t(184);function u(e){var n=e.tab,t=(0,c.useState)(""),s=(0,i.Z)(t,2),r=s[0],d=s[1];return(0,c.useEffect)((function(){var e=setTimeout((function(){d("end")}),100);return function(){clearTimeout(e),d("")}}),[n]),(0,a.jsx)("div",{className:"start "+r,children:[(0,a.jsx)("div",{children:"\ub0b4\uc6a90"}),(0,a.jsx)("div",{children:"\ub0b4\uc6a91"}),(0,a.jsx)("div",{children:"\ub0b4\uc6a92"})][n]})}n.default=function(e){var n=(0,d.I0)(),t=(0,c.useState)(""),o=(0,i.Z)(t,2),h=(o[0],o[1]),f=(0,c.useState)(0),x=(0,i.Z)(f,2),j=(x[0],x[1],(0,c.useState)(0)),p=(0,i.Z)(j,2),v=(p[0],p[1],(0,c.useState)(0)),m=(0,i.Z)(v,2),k=m[0],Z=m[1],S=(0,s.UO)().id,g=e.product.findIndex((function(e){return e.id==S}));return(0,c.useEffect)((function(){var n=localStorage.getItem("recentView");(n=JSON.parse(n)).push(e.product[g].id),n=new Set(n),n=Array.from(n),localStorage.setItem("recentView",JSON.stringify(n))}),[]),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-md-6",children:(0,a.jsx)("img",{src:e.itemImg[g],width:"100%"})}),(0,a.jsxs)("div",{className:"col-md-6 mt-4",children:[(0,a.jsx)("div",{children:(0,a.jsx)("input",{onChange:function(e){h(e.target.value)}})}),(0,a.jsx)("h4",{children:e.product[g].title}),(0,a.jsx)("p",{children:e.product[g].content}),(0,a.jsxs)("p",{children:["KRW ",e.product[g].price]}),(0,a.jsx)("button",{onClick:function(){n((0,l.gK)({id:1,name:e.product[g].title,count:e.product[g].count}))},children:"\uad6c\ub9e4\ud558\uae30"})]})]}),(0,a.jsxs)(r.Z,{variant:"tabs",defaultActiveKey:"link0",children:[(0,a.jsx)(r.Z.Item,{children:(0,a.jsx)(r.Z.Link,{eventkey:"link0",onClick:function(){Z(0)},children:"Active"})}),(0,a.jsx)(r.Z.Item,{children:(0,a.jsx)(r.Z.Link,{eventKey:"link1",onClick:function(){Z(1)},children:"Option 2"})}),(0,a.jsx)(r.Z.Item,{children:(0,a.jsx)(r.Z.Link,{eventKey:"link2",onClick:function(){Z(2)},children:"Disabled"})})]}),(0,a.jsx)(u,{tab:k})]})}}}]);
//# sourceMappingURL=892.148acc90.chunk.js.map