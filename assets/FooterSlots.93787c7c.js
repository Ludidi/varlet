import{T as d,u as p,p as u,g as m}from"./index.863cdc7d.js";import{w as h}from"./en-US.e5d54f64.js";import{_ as v}from"./elevation.83e0d1f2.js";import{d as _,o as l,k as f,w as i,a as t,t as e,r as y,h as B,c as g,j,F}from"./vendor.1cdc2555.js";import"./index.11b8287f.js";import{P as S}from"./Pagination.aa848f5d.js";const V={name:"BasicExample",components:{VarTable:d},setup(){return h(p,"pc"),{pack:u}}},w=t("td",null,"124",-1),C=t("td",null,"38",-1),E=t("td",null,"100",-1),P=t("td",null,"135",-1);function T(n,s,r,a,k,x){const c=_("var-table");return l(),f(c,{class:"reset"},{default:i(()=>[t("thead",null,[t("tr",null,[t("th",null,e(a.pack.name),1),t("th",null,e(a.pack.math),1),t("th",null,e(a.pack.english),1)])]),t("tbody",null,[t("tr",null,[t("td",null,e(a.pack.jerry),1),w,C]),t("tr",null,[t("td",null,e(a.pack.tom),1),E,P])])]),_:1})}var G=v(V,[["render",T]]);const L={name:"BasicExample",components:{VarTable:d,VarPagination:S},setup(){const n=y(m(1,10)),s=(r,a)=>{n.value=m(r,a)};return h(p,"pc"),{pack:u,get:s,list:n}}},N={class:"footer"};function z(n,s,r,a,k,x){const c=_("var-pagination"),b=_("var-table");return l(),f(b,{class:"reset"},{footer:i(()=>[t("div",N,[B(c,{simple:!1,current:1,total:100,"size-option":[5,10],onChange:a.get},null,8,["onChange"])])]),default:i(()=>[t("thead",null,[t("tr",null,[t("th",null,e(a.pack.name),1),t("th",null,e(a.pack.math),1),t("th",null,e(a.pack.english),1)])]),t("tbody",null,[(l(!0),g(F,null,j(a.list,o=>(l(),g("tr",{key:o.name},[t("td",null,e(o.name),1),t("td",null,e(o.math),1),t("td",null,e(o.english),1)]))),128))])]),_:1})}var H=v(L,[["render",z],["__scopeId","data-v-2374b689"]]);export{G as B,H as F};