var k=Object.defineProperty;var d=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var u=(e,o,t)=>o in e?k(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,p=(e,o)=>{for(var t in o||(o={}))w.call(o,t)&&u(e,t,o[t]);if(d)for(var t of d(o))C.call(o,t)&&u(e,t,o[t]);return e};import{q as S,y as b,o as r,k as z,h as y,i as f,w as g,v as B,a as I,c as v,m as P,n as c,f as m,T as h,B as $,A as F,M as O}from"./vendor.8a125dba.js";import{u as j}from"./lock.2797eacf.js";import{u as A}from"./zIndex.2c847fc6.js";import{u as V,d as L}from"./components.581beddd.js";import{_ as T}from"./elevation.a5b7a62e.js";function E(e){return["top","bottom","right","left","center"].includes(e)}const N={show:{type:Boolean,default:!1},position:{type:String,default:"center",validator:E},transition:{type:String},overlay:{type:Boolean,default:!0},overlayClass:{type:String},overlayStyle:{type:Object},lockScroll:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0},teleport:{type:String},onOpen:{type:Function},onOpened:{type:Function},onClose:{type:Function},onClosed:{type:Function},onClickOverlay:{type:Function},onRouteChange:{type:Function},"onUpdate:show":{type:Function}};const R=S({name:"VarPopup",inheritAttrs:!1,props:N,setup(e){const{zIndex:o}=A(()=>e.show,3),{disabled:t}=V(),i=()=>{var a;const{closeOnClickOverlay:s,onClickOverlay:n}=e;n==null||n(),!!s&&((a=e["onUpdate:show"])==null||a.call(e,!1))};return j(e,"show","lockScroll"),b(()=>e.show,s=>{const{onOpen:n,onClose:a}=e;s?n==null||n():a==null||a()}),L(()=>{var s;return(s=e.onRouteChange)==null?void 0:s.call(e)}),{zIndex:o,disabled:t,hidePopup:i}}});function U(e,o,t,i,s,n){return r(),z(O,{to:e.teleport,disabled:!e.teleport||e.disabled},[y(h,{name:"var-fade",onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:f(()=>[g(I("div",{class:"var--box var-popup",style:c({zIndex:e.zIndex-2})},[e.overlay?(r(),v("div",{key:0,class:P(["var-popup__overlay",[e.overlayClass]]),style:c(p({zIndex:e.zIndex-1},e.overlayStyle)),onClick:o[0]||(o[0]=(...a)=>e.hidePopup&&e.hidePopup(...a))},null,6)):m("v-if",!0),y(h,{name:e.transition?e.transition:`var-pop-${e.position}`},{default:f(()=>[e.show?(r(),v("div",F({key:0,class:["var-popup__content var-elevation--3",[`var-popup--${e.position}`]],style:{zIndex:e.zIndex}},e.$attrs),[$(e.$slots,"default")],16)):m("v-if",!0)]),_:3},8,["name"])],4),[[B,e.show]])]),_:3},8,["onAfterEnter","onAfterLeave"])],8,["to","disabled"])}var l=T(R,[["render",U]]);l.install=function(e){e.component(l.name,l)};export{l as P,N as p};