import{T as d,u as p,p as u,g as m}from"./index.6f5879f0.js";import{d as f}from"./index.77fe3760.js";import{w as h,a as v}from"./utils.16c24a31.js";import{_ as g}from"./elevation.83e98fef.js";import{e as _,o as l,l as k,j as i,a as t,t as e,r as B,i as F,c as x,k as V,F as w}from"./vendor.8243c41e.js";import"./index.e99f498b.js";import{P as C}from"./Pagination.4b06f26b.js";const E={name:"BasicExample",components:{VarTable:d},setup(){return h(p,"pc"),v(f),{pack:u}}},P=t("td",null,"124",-1),S=t("td",null,"38",-1),T=t("td",null,"100",-1),D=t("td",null,"135",-1);function L(n,s,r,a,b,y){const c=_("var-table");return l(),k(c,{class:"reset"},{default:i(()=>[t("thead",null,[t("tr",null,[t("th",null,e(a.pack.name),1),t("th",null,e(a.pack.math),1),t("th",null,e(a.pack.english),1)])]),t("tbody",null,[t("tr",null,[t("td",null,e(a.pack.jerry),1),P,S]),t("tr",null,[t("td",null,e(a.pack.tom),1),T,D])])]),_:1})}var K=g(E,[["render",L]]);const N={name:"BasicExample",components:{VarTable:d,VarPagination:C},setup(){const n=B(m(1,10)),s=(r,a)=>{n.value=m(r,a)};return h(p,"pc"),v(f),{pack:u,get:s,list:n}}},z={class:"footer"};function I(n,s,r,a,b,y){const c=_("var-pagination"),j=_("var-table");return l(),k(j,{class:"reset"},{footer:i(()=>[t("div",z,[F(c,{simple:!1,current:1,total:100,"size-option":[5,10],onChange:a.get},null,8,["onChange"])])]),default:i(()=>[t("thead",null,[t("tr",null,[t("th",null,e(a.pack.name),1),t("th",null,e(a.pack.math),1),t("th",null,e(a.pack.english),1)])]),t("tbody",null,[(l(!0),x(w,null,V(a.list,o=>(l(),x("tr",{key:o.name},[t("td",null,e(o.name),1),t("td",null,e(o.math),1),t("td",null,e(o.english),1)]))),128))])]),_:1})}var O=g(N,[["render",I],["__scopeId","data-v-decaf4f8"]]);export{K as B,O as F};
