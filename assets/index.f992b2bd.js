import{A as m}from"./AppType.b1df95e4.js";import{I as _}from"./index.e4108909.js";import{C as f}from"./index.fad4990b.js";import{u as h,a as p,_ as k,b as w,c as C,w as F}from"./en-US.e5d54f64.js";import{_ as v}from"./elevation.83e0d1f2.js";import{d,o as x,c as b,a as s,h as e,w as o,F as B,l as t,t as c}from"./vendor.1cdc2555.js";import"./shared.cba5a5a3.js";import"./elements.524bf92a.js";var U={basicUsage:"\u57FA\u672C\u4F7F\u7528",showIcon:"\u663E\u793A\u56FE\u6807",showDesc:"\u663E\u793A\u63CF\u8FF0",showBorder:"\u663E\u793A\u8FB9\u6846",content:"\u8FD9\u662F\u5355\u5143\u683C",description:"\u63CF\u8FF0"},j={basicUsage:"Basic Usage",showIcon:"Show Icon",showDesc:"Show Description",showBorder:"Show Border",content:"This is Cell",description:"Description"};const{add:u,use:N,pack:S,packs:M,merge:O}=h(),g=l=>{C(l),N(l)};p("zh-CN",k);p("en-US",w);u("zh-CN",U);u("en-US",j);const A={name:"CellExample",components:{VarIcon:_,VarCell:f,AppType:m},setup(){return F(g),{pack:S}}};function D(l,I,E,a,y,V){const r=d("app-type"),n=d("var-cell"),i=d("var-icon");return x(),b(B,null,[s("div",null,[e(r,null,{default:o(()=>[t(c(a.pack.basicUsage),1)]),_:1}),e(n,null,{default:o(()=>[t(c(a.pack.content),1)]),_:1}),e(n,null,{default:o(()=>[t(c(a.pack.content),1)]),_:1})]),s("div",null,[e(r,null,{default:o(()=>[t(c(a.pack.showIcon),1)]),_:1}),e(n,{icon:"fire",title:a.pack.content},{extra:o(()=>[e(i,{name:"information"})]),_:1},8,["title"]),e(n,{icon:"fire",title:a.pack.content},{extra:o(()=>[e(i,{name:"information"})]),_:1},8,["title"])]),s("div",null,[e(r,null,{default:o(()=>[t(c(a.pack.showDesc),1)]),_:1}),e(n,{icon:"fire",title:a.pack.content,desc:a.pack.description},{extra:o(()=>[e(i,{name:"information"})]),_:1},8,["title","desc"]),e(n,{title:a.pack.content,desc:a.pack.description},null,8,["title","desc"])]),s("div",null,[e(r,null,{default:o(()=>[t(c(a.pack.showBorder),1)]),_:1}),e(n,{border:""},{default:o(()=>[t(c(a.pack.content),1)]),_:1}),e(n,{border:""},{default:o(()=>[t(c(a.pack.content),1)]),_:1})])],64)}var P=v(A,[["render",D]]);export{P as default};