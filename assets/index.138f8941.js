import{S as d}from"./index.ca0138a7.js";import{S as _}from"./index.61c30525.js";import{A as f}from"./AppType.51e8aa5c.js";import{S as w}from"./index.26e8fd60.js";import{u as j,a as m,_ as x,b as S,c as b,w as A}from"./en-US.c590db11.js";import{_ as C}from"./elevation.61c5e873.js";import{d as r,o as k,c as F,h as t,w as e,F as y,W as I,X as U,l as n,t as i,a}from"./vendor.7d218dee.js";import"./provide.ed44fd18.js";import"./components.59a7770d.js";import"./shared.2d2ec151.js";import"./elements.fbcbc1e3.js";import"./index.b0b2fe50.js";import"./index.d0776ff2.js";import"./zIndex.c8f68d30.js";import"./index.dcdb83c2.js";import"./lock.1e771457.js";var E={basicUsage:"\u57FA\u672C\u4F7F\u7528",forbidLoop:"\u7981\u6B62\u5FAA\u73AF\u8F6E\u64AD",autoplay:"\u5F00\u542F\u81EA\u52A8\u64AD\u653E",vertical:"\u5782\u76F4\u8F6E\u64AD",handleChange:"\u76D1\u542C\u5207\u6362",customIndicator:"\u81EA\u5B9A\u4E49\u6307\u793A\u5668"},N={basicUsage:"Basic Usage",forbidLoop:"Forbid Loop",autoplay:"Autoplay",vertical:"Vertical Swipe",handleChange:"Handle Change",customIndicator:"Custom Indicator"};const{add:g,use:B,pack:L,packs:Ae,merge:Ce}=j(),z=c=>{b(c),B(c)};m("zh-CN",x);m("en-US",S);g("zh-CN",E);g("en-US",N);const D={name:"SwipeExample",components:{[d.name]:d,[_.name]:_,AppType:f},setup(){return A(z),{pack:L,Snackbar:w}}},s=c=>(I("data-v-68ee4a60"),c=c(),U(),c),V=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),T=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),H=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),W=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),X=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),q=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),G=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),J=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),K=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),M=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),O=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),P=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),Q=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),R=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),Y=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),Z=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),$=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),ee=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),te={class:"indicators"},ae=s(()=>a("div",{class:"space"},null,-1));function se(c,le,ie,o,ce,oe){const u=r("app-type"),l=r("var-swipe-item"),p=r("var-swipe");return k(),F(y,null,[t(u,null,{default:e(()=>[n(i(o.pack.basicUsage),1)]),_:1}),t(p,{class:"swipe",ref:"swipe"},{default:e(()=>[t(l,null,{default:e(()=>[V]),_:1}),t(l,null,{default:e(()=>[T]),_:1}),t(l,null,{default:e(()=>[H]),_:1})]),_:1},512),t(u,null,{default:e(()=>[n(i(o.pack.forbidLoop),1)]),_:1}),t(p,{class:"swipe",loop:!1},{default:e(()=>[t(l,null,{default:e(()=>[W]),_:1}),t(l,null,{default:e(()=>[X]),_:1}),t(l,null,{default:e(()=>[q]),_:1})]),_:1}),t(u,null,{default:e(()=>[n(i(o.pack.autoplay),1)]),_:1}),t(p,{class:"swipe",autoplay:2e3},{default:e(()=>[t(l,null,{default:e(()=>[G]),_:1}),t(l,null,{default:e(()=>[J]),_:1}),t(l,null,{default:e(()=>[K]),_:1})]),_:1}),t(u,null,{default:e(()=>[n(i(o.pack.vertical),1)]),_:1}),t(p,{class:"swipe",vertical:""},{default:e(()=>[t(l,null,{default:e(()=>[M]),_:1}),t(l,null,{default:e(()=>[O]),_:1}),t(l,null,{default:e(()=>[P]),_:1})]),_:1}),t(u,null,{default:e(()=>[n(i(o.pack.handleChange),1)]),_:1}),t(p,{class:"swipe",onChange:o.Snackbar},{default:e(()=>[t(l,null,{default:e(()=>[Q]),_:1}),t(l,null,{default:e(()=>[R]),_:1}),t(l,null,{default:e(()=>[Y]),_:1})]),_:1},8,["onChange"]),t(u,null,{default:e(()=>[n(i(o.pack.customIndicator),1)]),_:1}),t(p,{class:"swipe"},{default:e(()=>[t(l,null,{default:e(()=>[Z]),_:1}),t(l,null,{default:e(()=>[$]),_:1}),t(l,null,{default:e(()=>[ee]),_:1})]),indicator:e(({index:h,length:v})=>[a("div",te,i(h+1)+" / "+i(v),1)]),_:1}),ae],64)}var ke=C(D,[["render",se],["__scopeId","data-v-68ee4a60"]]);export{ke as default};