(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[4365],{629:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});var o=t(641),i={locks:{},zIndex:2e3,touchmoveForbid:!0};(0,o.qj)(i);const r=(0,o.qj)(i)},4793:(e,n,t)=>{"use strict";t.d(n,{Z:()=>m});var o=t(6156),i=t(629),r=t(6062),l=t.n(r),a=t(526);l()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;var c=t(4352);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e){var n=this,t=this._ripple;t.removeRipple(),t.disabled||t.tasker||(t.tasker=window.setTimeout((function(){var o;t.tasker=null;var i,r,l,a,c=function(e,n){var t=e.getBoundingClientRect(),o=t.top,i=t.left,r=e.clientWidth,l=e.clientHeight,a=Math.sqrt(Math.pow(r,2)+Math.pow(l,2))/2,c=2*a;return{x:n.touches[0].clientX-i-a,y:n.touches[0].clientY-o-a,centerX:(r-2*a)/2,centerY:(l-2*a)/2,size:c}}(n,e),s=c.x,d=c.y,u=c.centerX,v=c.centerY,p=c.size,m=document.createElement("div");m.classList.add("var-ripple"),m.style.opacity="0",m.style.transform="translate(".concat(s,"px, ").concat(d,"px) scale3d(.3, .3, .3)"),m.style.width="".concat(p,"px"),m.style.height="".concat(p,"px"),m.style.backgroundColor=null!==(o=t.color)&&void 0!==o?o:"currentColor",m.dataset.createdAt=String(performance.now()),i=n,l=(r=window.getComputedStyle(i)).zIndex,a=r.position,i.style.overflow="hidden",i.style.overflowX="hidden",i.style.overflowY="hidden","static"===a&&(i.style.position="relative"),"auto"===l&&(i.style.zIndex="1"),n.appendChild(m),window.setTimeout((function(){m.style.transform="translate(".concat(u,"px, ").concat(v,"px) scale3d(1, 1, 1)"),m.style.opacity=".25"}),20)}),60))}function v(){var e=this,n=function(){var n=e.querySelectorAll(".var-ripple");if(n.length){var t=n[n.length-1],o=250-performance.now()+Number(t.dataset.createdAt);setTimeout((function(){t.style.opacity="0",setTimeout((function(){var e;return null===(e=t.parentNode)||void 0===e?void 0:e.removeChild(t)}),250)}),o)}};this._ripple.tasker?setTimeout(n,60):n()}function p(){var e=this._ripple;e.touchmoveForbid&&(e.tasker&&window.clearTimeout(e.tasker),e.tasker=null)}l()(c.Z,{insert:"head",singleton:!1}),c.Z.locals;const m={mounted:function(e,n){var t,o,r;e._ripple=d(d({tasker:null},null!==(t=n.value)&&void 0!==t?t:{}),{},{touchmoveForbid:null!==(o=null===(r=n.value)||void 0===r?void 0:r.touchmoveForbid)&&void 0!==o?o:i.Z.touchmoveForbid,removeRipple:v.bind(e)}),e.addEventListener("touchstart",u,{passive:!0}),e.addEventListener("touchmove",p,{passive:!0}),e.addEventListener("dragstart",v,{passive:!0}),document.addEventListener("touchend",e._ripple.removeRipple,{passive:!0}),document.addEventListener("touchcancel",e._ripple.removeRipple,{passive:!0})},unmounted:function(e){e.removeEventListener("touchstart",u),e.removeEventListener("touchmove",p),e.removeEventListener("dragstart",v),document.removeEventListener("touchend",e._ripple.removeRipple),document.removeEventListener("touchcancel",e._ripple.removeRipple)},updated:function(e,n){var t,o,r;e._ripple=d(d(d({},e._ripple),null!==(t=n.value)&&void 0!==t?t:{}),{},{touchmoveForbid:null!==(o=null===(r=n.value)||void 0===r?void 0:r.touchmoveForbid)&&void 0!==o?o:i.Z.touchmoveForbid,tasker:null})},install:function(e){e.directive("ripple",this)}}},526:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});var o=t(2609),i=t.n(o)()((function(e){return e[1]}));i.push([e.id,".var-ripple {\n  position: absolute;\n  transition: transform 0.2s cubic-bezier(0.68, 0.01, 0.62, 0.6), opacity 0.08s linear;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  opacity: 0;\n  will-change: transform, opacity;\n  pointer-events: none;\n  z-index: 100;\n}\n",""]);const r=i},4352:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});var o=t(2609),i=t.n(o)()((function(e){return e[1]}));i.push([e.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n",""]);const r=i},4362:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});var o=t(2609),i=t.n(o)()((function(e){return e[1]}));i.push([e.id,".logo[data-v-c0b8f78c] {\n  height: 100px;\n  padding-top: 30px;\n  margin-bottom: 20px;\n}\n.varlet-home__title[data-v-c0b8f78c] {\n  margin: 0 0 16px;\n  font-size: 32px;\n}\n.varlet-home__title[data-v-c0b8f78c],\n.varlet-home__desc[data-v-c0b8f78c] {\n  padding-left: 16px;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.varlet-home__desc[data-v-c0b8f78c] {\n  margin: 0 0 40px;\n  color: rgba(69, 90, 100, 0.6);\n  font-size: 14px;\n}\n.varlet-home__image[data-v-c0b8f78c] {\n  width: 32px;\n  height: 32px;\n}\n.varlet-home__image[data-v-c0b8f78c],\n.varlet-home__title span[data-v-c0b8f78c] {\n  display: inline-block;\n  vertical-align: middle;\n}\n.varlet-home__title span[data-v-c0b8f78c] {\n  margin-left: 16px;\n}\n.var-cell[data-v-c0b8f78c] {\n  cursor: pointer;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  transition: all 0.3s;\n  color: #555;\n}\n.var-cell[data-v-c0b8f78c]:hover {\n  background: #edf5ff;\n  color: #3a7afe;\n}\n",""]);const r=i},4365:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>k});var o=t(7875),i=t(349),r=(0,o.HX)("data-v-c0b8f78c");(0,o.dD)("data-v-c0b8f78c");var l={class:"logo"},a={class:"varlet-home__title"},c={class:"varlet-home__desc"};(0,o.Cn)();var s,d=r((function(e,n,t,s,d,u){var v=(0,o.up)("var-icon"),p=(0,o.up)("var-cell");return(0,o.wg)(),(0,o.j4)(o.HY,null,[(0,o.Wm)("div",l,[(0,o.Wm)("h1",a,[(0,o.Wm)("img",{class:"varlet-home__image",src:s.logo},null,8,["src"]),(0,o.Wm)("span",null,(0,i.zw)(s.title),1)]),(0,o.Wm)("h2",c,(0,i.zw)(s.description[s.lang]),1)]),((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(s.components,(function(e){return(0,o.wg)(),(0,o.j4)(p,{key:e.text,onClick:function(n){return s.toComponent(e)}},{extra:r((function(){return[(0,o.Wm)(v,{name:"chevron-right",size:"14"})]})),default:r((function(){return[(0,o.Uk)((0,i.zw)(e.text[s.lang]),1)]})),_:2},1032,["onClick"])})),128))],64)})),u=t(6156),v=t(535),p=t(1381),m=t(4793),f=t(3091),h=t(2049),b=t(641),g=t(3638);const y={name:"HomeExample",directives:{Ripple:m.Z},components:(s={},(0,u.Z)(s,v.Z.name,v.Z),(0,u.Z)(s,p.Z.name,p.Z),s),setup:function(){var e,n,t,o,i,r,l=(0,b.iH)(null!==(e=null==f?void 0:f.title)&&void 0!==e?e:""),a=(0,b.iH)(null!==(n=null==f?void 0:f.logo)&&void 0!==n?n:""),c=(0,b.iH)(null!==(t=null==f||null===(o=f.mobile)||void 0===o?void 0:o.title)&&void 0!==t?t:{}),s=(0,b.iH)(null!==(i=null==f||null===(r=f.pc)||void 0===r?void 0:r.menu)&&void 0!==i?i:[]).value.filter((function(e){return!e.isTitle&&!e.nonComponent})),d=(0,b.qj)(s),u=(0,b.iH)("zh-CN"),v=(0,b.iH)("mobile"),p=(0,h.tv)();return(0,g.jS)((function(e){u.value=e})),(0,g.Id)((function(e){v.value=e})),{components:d,lang:u,toComponent:function(e){p.push({path:"/".concat(e.doc),query:{language:u.value,platform:v.value,path:e.doc}})},logo:a,title:l,description:c}}};var x=t(6062),w=t.n(x),_=t(4362);w()(_.Z,{insert:"head",singleton:!1}),_.Z.locals,y.render=d,y.__scopeId="data-v-c0b8f78c";const k=y}}]);