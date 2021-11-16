var j=Object.defineProperty,U=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var w=(a,e,l)=>e in a?j(a,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[e]=l,b=(a,e)=>{for(var l in e||(e={}))D.call(e,l)&&w(a,l,e[l]);if(B)for(var l of B(e))S.call(e,l)&&w(a,l,e[l]);return a},h=(a,e)=>U(a,A(e));import{D as m}from"./index.6b55b1bf.js";import{B as F}from"./index.ecf1fce8.js";import{I as x}from"./index.e4108909.js";import{S as f}from"./index.be7e2a4e.js";import{C as T}from"./index.fad4990b.js";import{A as N}from"./AppType.b1df95e4.js";import{u as I,a as _,_ as V,b as z,c as M,w as P}from"./en-US.e5d54f64.js";import{_ as H}from"./elevation.83e0d1f2.js";import{p as L,Z as R,d as C,o as W,c as Z,h as s,w as n,F as q,l as t,t as i}from"./vendor.1cdc2555.js";import"./index.82dd182c.js";import"./lock.04ad72d0.js";import"./index.639c3ac8.js";import"./zIndex.e22a1185.js";import"./components.673b276d.js";import"./shared.cba5a5a3.js";import"./index.e3473c6d.js";import"./index.85e38b10.js";import"./elements.524bf92a.js";var G={functionCall:"\u51FD\u6570\u8C03\u7528",basicUsage:"\u57FA\u672C\u4F7F\u7528",modifyTitle:"\u4FEE\u6539\u6807\u9898",hideButton:"\u9690\u85CF\u6309\u94AE",handleUserBehavior:"\u5904\u7406\u7528\u6237\u884C\u4E3A",asyncClose:"\u5F02\u6B65\u5173\u95ED",componentCall:"\u7EC4\u4EF6\u8C03\u7528",title:"\u5170\u4EAD\u5E8F",message:"\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34",customSlots:"\u81EA\u5B9A\u4E49\u63D2\u69FD",asyncCloseProgress:"\u6B63\u5728\u5F02\u6B65\u5173\u95ED"},J={functionCall:"Function Call",basicUsage:"Basic Usage",modifyTitle:"Modify Title",hideButton:"Hide Button",handleUserBehavior:"Handle User Behavior",asyncClose:"Asynchronous closing",componentCall:"Component Call",title:"Beat It",message:"Don't Wanna See No Blood, Don't Be A Macho Man",customSlots:"Custom Slots",asyncCloseProgress:"Asynchronous shutdown in progress"};const{add:E,use:K,pack:u,packs:ge,merge:ye}=I(),O=a=>{M(a),K(a)};_("zh-CN",V);_("en-US",z);E("zh-CN",G);E("en-US",J);const Q={name:"DialogExample",components:{VarDialog:m.Component,VarButton:F,VarIcon:x,VarCell:T,AppType:N},setup(){const a=L({show:!1,show1:!1,show2:!1,value:""}),e={confirm:()=>f.success("confirm"),cancel:()=>f.error("cancel"),close:()=>f.info("close")},l=()=>m({message:u.value.message}),o=async()=>e[await m(u.value.message)](),y=()=>{m({title:u.value.title,message:u.value.message})},v=()=>{m({message:u.value.message,confirmButton:!1,cancelButton:!1})},d=(p,k)=>{f.loading(u.value.asyncCloseProgress),setTimeout(()=>{e[p](),k()},1e3)},r=()=>{m({message:u.value.message,onBeforeClose:d})};return P(O),h(b({pack:u},R(a)),{asyncClose:r,createBasic:l,createAction:o,modifyTitle:y,hideButton:v,onBeforeClose:d,Snackbar:f})}};function X(a,e,l,o,y,v){const d=C("app-type"),r=C("var-button"),p=C("var-dialog"),k=C("var-icon"),g=C("var-cell");return W(),Z(q,null,[s(d,null,{default:n(()=>[t(i(o.pack.functionCall),1)]),_:1}),s(r,{type:"primary",block:"",onClick:o.createBasic},{default:n(()=>[t(i(o.pack.basicUsage),1)]),_:1},8,["onClick"]),s(r,{type:"primary",block:"",onClick:o.modifyTitle},{default:n(()=>[t(i(o.pack.modifyTitle),1)]),_:1},8,["onClick"]),s(r,{type:"primary",block:"",onClick:o.hideButton},{default:n(()=>[t(i(o.pack.hideButton),1)]),_:1},8,["onClick"]),s(r,{type:"primary",block:"",onClick:o.createAction},{default:n(()=>[t(i(o.pack.handleUserBehavior),1)]),_:1},8,["onClick"]),s(r,{type:"primary",block:"",onClick:o.asyncClose},{default:n(()=>[t(i(o.pack.asyncClose),1)]),_:1},8,["onClick"]),s(d,null,{default:n(()=>[t(i(o.pack.componentCall),1)]),_:1}),s(r,{type:"warning",block:"",onClick:e[0]||(e[0]=c=>a.show=!0)},{default:n(()=>[t(i(o.pack.basicUsage),1)]),_:1}),s(p,{show:a.show,"onUpdate:show":e[1]||(e[1]=c=>a.show=c),title:o.pack.title,message:o.pack.message,onConfirm:e[2]||(e[2]=()=>o.Snackbar.success("confirm")),onCancel:e[3]||(e[3]=()=>o.Snackbar.error("cancel")),onClosed:e[4]||(e[4]=()=>o.Snackbar.info("closed"))},null,8,["show","title","message"]),s(r,{type:"warning",block:"",onClick:e[5]||(e[5]=c=>a.show1=!0)},{default:n(()=>[t(i(o.pack.asyncClose),1)]),_:1}),s(p,{show:a.show1,"onUpdate:show":e[6]||(e[6]=c=>a.show1=c),title:o.pack.title,message:o.pack.message,onBeforeClose:o.onBeforeClose},null,8,["show","title","message","onBeforeClose"]),s(r,{type:"warning",block:"",onClick:e[7]||(e[7]=c=>a.show2=!0)},{default:n(()=>[t(i(o.pack.customSlots),1)]),_:1}),s(p,{show:a.show2,"onUpdate:show":e[8]||(e[8]=c=>a.show2=c)},{title:n(()=>[s(k,{name:"information",color:"#2979ff"})]),default:n(()=>[s(g,null,{default:n(()=>[t(i(o.pack.message),1)]),_:1}),s(g,null,{default:n(()=>[t(i(o.pack.message),1)]),_:1}),s(g,null,{default:n(()=>[t(i(o.pack.message),1)]),_:1})]),_:1},8,["show"])],64)}var ve=H(Q,[["render",X],["__scopeId","data-v-65185fda"]]);export{ve as default};