import{S as p}from"./index.1d38c8d6.js";import{a as d,f as _}from"./components.673b276d.js";import{T as u,a as f}from"./provide.e7052e43.js";import{_ as v}from"./elevation.83e0d1f2.js";import{q as l,r as c,b,d as I,o as T,k as S,w as B,B as C,f as w,m as E}from"./vendor.1cdc2555.js";function x(){const{parentProvider:e,bindParent:s}=d(u),{index:t}=_(f);if(!e||!s||!t)throw Error("<var-tab-item/> must in <var-tabs-items/>");return{index:t,tabsItems:e,bindTabsItems:s}}const P={name:{type:[String,Number]}};const j=l({name:"VarTabItem",components:{VarSwipeItem:p},props:P,setup(e){const s=c(!1),t=c(!1),r=b(()=>e.name),{index:n,bindTabsItems:o}=x();return o({index:n,name:r,setCurrent:m=>{!t.value&&m&&(t.value=!0),s.value=m}}),{current:s,initSlot:t}}});function A(e,s,t,r,n,o){const i=I("var-swipe-item");return T(),S(i,{class:E(["var-tab-item",[!e.current&&"var-tab-item--inactive"]]),"var-tab-item-cover":""},{default:B(()=>[e.initSlot?C(e.$slots,"default",{key:0}):w("v-if",!0)]),_:3},8,["class"])}var a=v(j,[["render",A]]);a.install=function(e){e.component(a.name,a)};export{a as T};