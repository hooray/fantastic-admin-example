
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l;import{a5 as i,_ as r,d as u,u as d,b as c,e as p,w as m,g as v,aI as h,aJ as f,i as b,T as g,aK as y,a9 as x,ab as M,a6 as _,c as k,aL as S,U as P,P as I,t as w,r as C,aM as T,aN as E,aO as O,A as z,G as B,o as A,aP as $,ad as L,E as N,av as j,aq as H,ar as R,M as W,C as q,al as D,W as U,aQ as G,aR as J,aC as V,aS as F,ak as K,aT as Q,aU as Y,H as X,f as Z,B as ee,n as te,$ as ae,L as le,q as ne,Y as oe,v as se,aV as ie,h as re,m as ue,Q as de,J as ce,R as pe}from"./index.dbeb19dd.js";import{t as me}from"./aria.0167242e.js";const ve=function(e){for(const t of e){const e=t.target.__resizeListeners__||[];e.length&&e.forEach((e=>{e()}))}},he={beforeMount(e,t){var a,l;e._handleResize=()=>{var a;e&&(null==(a=t.value)||a.call(t,e))},a=e,l=e._handleResize,i&&a&&(a.__resizeListeners__||(a.__resizeListeners__=[],a.__ro__=new ResizeObserver(ve),a.__ro__.observe(a)),a.__resizeListeners__.push(l))},beforeUnmount(e){var t,a,l;t=e,a=e._handleResize,t&&t.__resizeListeners__&&(t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(a),1),t.__resizeListeners__.length||null==(l=t.__ro__)||l.disconnect())}},fe=u((be=((e,t)=>{for(var a in t||(t={}))n.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))o.call(t,a)&&s(e,a,t[a]);return e})({},{name:"ElCollapseTransition"}),t(be,a({setup(e){const t=d("collapse-transition"),a={beforeEnter(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0},enter(e){e.dataset.oldOverflow=e.style.overflow,0!==e.scrollHeight?(e.style.maxHeight=`${e.scrollHeight}px`,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom):(e.style.maxHeight=0,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom),e.style.overflow="hidden"},afterEnter(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow},beforeLeave(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.maxHeight=`${e.scrollHeight}px`,e.style.overflow="hidden"},leave(e){0!==e.scrollHeight&&(e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0)},afterLeave(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom}};return(e,l)=>(c(),p(g,h({name:b(t).b()},f(a)),{default:m((()=>[v(e.$slots,"default")])),_:3},16,["name"]))}}))));var be,ge=r(fe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);ge.install=e=>{e.component(ge.name,ge)};const ye=ge;class xe{constructor(e,t){this.parent=e,this.domNode=t,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(e){e===this.subMenuItems.length?e=0:e<0&&(e=this.subMenuItems.length-1),this.subMenuItems[e].focus(),this.subIndex=e}addListeners(){const e=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,(t=>{t.addEventListener("keydown",(t=>{let a=!1;switch(t.code){case y.down:this.gotoSubIndex(this.subIndex+1),a=!0;break;case y.up:this.gotoSubIndex(this.subIndex-1),a=!0;break;case y.tab:me(e,"mouseleave");break;case y.enter:case y.space:a=!0,t.currentTarget.click()}return a&&(t.preventDefault(),t.stopPropagation()),!1}))}))}}class Me{constructor(e,t){this.domNode=e,this.submenu=null,this.submenu=null,this.init(t)}init(e){this.domNode.setAttribute("tabindex","0");const t=this.domNode.querySelector(`.${e}-menu`);t&&(this.submenu=new xe(this,t)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",(e=>{let t=!1;switch(e.code){case y.down:me(e.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),t=!0;break;case y.up:me(e.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),t=!0;break;case y.tab:me(e.currentTarget,"mouseleave");break;case y.enter:case y.space:t=!0,e.currentTarget.click()}t&&e.preventDefault()}))}}class _e{constructor(e,t){this.domNode=e,this.init(t)}init(e){const t=this.domNode.childNodes;Array.from(t).forEach((t=>{1===t.nodeType&&new Me(t,e)}))}}var ke=r(u({name:"ElMenuCollapseTransition",setup(){const e=d("menu");return{listeners:{onBeforeEnter:e=>e.style.opacity="0.2",onEnter(t,a){x(t,`${e.namespace.value}-opacity-transition`),t.style.opacity="1",a()},onAfterEnter(t){M(t,`${e.namespace.value}-opacity-transition`),t.style.opacity=""},onBeforeLeave(t){t.dataset||(t.dataset={}),_(t,e.m("collapse"))?(M(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),x(t,e.m("collapse"))):(x(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),M(t,e.m("collapse"))),t.style.width=`${t.scrollWidth}px`,t.style.overflow="hidden"},onLeave(e){x(e,"horizontal-collapse-transition"),e.style.width=`${e.dataset.scrollWidth}px`}}}}}),[["render",function(e,t,a,l,n,o){return c(),p(g,h({mode:"out-in"},e.listeners),{default:m((()=>[v(e.$slots,"default")])),_:3},16)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function Se(e,t){const a=k((()=>{let a=e.parent;const l=[t.value];for(;"ElMenu"!==a.type.name;)a.props.index&&l.unshift(a.props.index),a=a.parent;return l}));return{parentMenu:k((()=>{let t=e.parent;for(;t&&!["ElMenu","ElSubMenu"].includes(t.type.name);)t=t.parent;return t})),indexPath:a}}function Pe(e){return k((()=>{const t=e.backgroundColor;return t?new S(t).shade(20).toString():""}))}const Ie=(e,t)=>{const a=d("menu");return k((()=>a.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":Pe(e).value||"","active-color":e.activeTextColor||"",level:`${t}`})))},we=P({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6}});var Ce=u({name:"ElSubMenu",props:we,setup(e,{slots:t,expose:a}){const l=q(),{indexPath:n,parentMenu:o}=Se(l,k((()=>e.index))),s=d("menu"),i=d("sub-menu"),r=I("rootMenu");r||w("ElSubMenu","can not inject root menu");const u=I(`subMenu:${o.value.uid}`);u||w("ElSubMenu","can not inject sub menu");const c=C({}),p=C({});let m;const v=C(!1),h=C(),f=C(null),b=k((()=>"horizontal"===V.value&&y.value?"bottom-start":"right-start")),g=k((()=>"horizontal"===V.value&&y.value||"vertical"===V.value&&!r.props.collapse?T:E)),y=k((()=>0===u.level)),x=k((()=>void 0===e.popperAppendToBody?y.value:Boolean(e.popperAppendToBody))),M=k((()=>r.props.collapse?`${s.namespace.value}-zoom-in-left`:`${s.namespace.value}-zoom-in-top`)),_=k((()=>"horizontal"===V.value&&y.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","left-start","bottom-start","bottom-end","top-start","top-end"])),S=k((()=>r.openedMenus.includes(e.index))),P=k((()=>{let e=!1;return Object.values(c.value).forEach((t=>{t.active&&(e=!0)})),Object.values(p.value).forEach((t=>{t.active&&(e=!0)})),e})),U=k((()=>r.props.backgroundColor||"")),G=k((()=>r.props.activeTextColor||"")),J=k((()=>r.props.textColor||"")),V=k((()=>r.props.mode)),F=O({index:e.index,indexPath:n,active:P}),K=k((()=>"horizontal"!==V.value?{color:J.value}:{borderBottomColor:P.value?r.props.activeTextColor?G.value:"":"transparent",color:P.value?G.value:J.value})),Q=e=>{var t,a,l;e||null==(l=null==(a=null==(t=f.value)?void 0:t.popperRef)?void 0:a.popperInstanceRef)||l.destroy()},Y=()=>{"hover"===r.props.menuTrigger&&"horizontal"===r.props.mode||r.props.collapse&&"vertical"===r.props.mode||e.disabled||r.handleSubMenuClick({index:e.index,indexPath:n.value,active:P.value})},X=(t,a=e.showTimeout)=>{var l;("focus"!==t.type||t.relatedTarget)&&("click"===r.props.menuTrigger&&"horizontal"===r.props.mode||!r.props.collapse&&"vertical"===r.props.mode||e.disabled||(u.mouseInChild.value=!0,null==m||m(),({stop:m}=D((()=>{r.openMenu(e.index,n.value)}),a)),x.value&&(null==(l=o.value.vnode.el)||l.dispatchEvent(new MouseEvent("mouseenter")))))},Z=(t=!1)=>{var a,o;"click"===r.props.menuTrigger&&"horizontal"===r.props.mode||!r.props.collapse&&"vertical"===r.props.mode||(null==m||m(),u.mouseInChild.value=!1,({stop:m}=D((()=>!v.value&&r.closeMenu(e.index,n.value)),e.hideTimeout)),x.value&&t&&"ElSubMenu"===(null==(a=l.parent)?void 0:a.type.name)&&(null==(o=u.handleMouseleave)||o.call(u,!0)))};z((()=>r.props.collapse),(e=>Q(Boolean(e))));{const e=e=>{p.value[e.index]=e},t=e=>{delete p.value[e.index]};B(`subMenu:${l.uid}`,{addSubMenu:e,removeSubMenu:t,handleMouseleave:Z,mouseInChild:v,level:u.level+1})}return a({opened:S}),A((()=>{r.addSubMenu(F),u.addSubMenu(F)})),$((()=>{u.removeSubMenu(F),r.removeSubMenu(F)})),()=>{var a;const l=[null==(a=t.title)?void 0:a.call(t),L(N,{class:i.e("icon-arrow")},{default:()=>L(g.value)})],n=Ie(r.props,u.level+1),o=r.isMenuPopup?L(j,{ref:f,visible:S.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:b.value,teleported:x.value,fallbackPlacements:_.value,transition:M.value,gpuAcceleration:!1},{content:()=>{var a;return L("div",{class:[s.m(V.value),s.m("popup-container"),e.popperClass],onMouseenter:e=>X(e,100),onMouseleave:()=>Z(!0),onFocus:e=>X(e,100)},[L("ul",{class:[s.b(),s.m("popup"),s.m(`popup-${b.value}`)],style:n.value},[null==(a=t.default)?void 0:a.call(t)])])},default:()=>L("div",{class:i.e("title"),style:[K.value,{backgroundColor:U.value}],onClick:Y},l)}):L(W,{},[L("div",{class:i.e("title"),style:[K.value,{backgroundColor:U.value}],ref:h,onClick:Y},l),L(ye,{},{default:()=>{var e;return H(L("ul",{role:"menu",class:[s.b(),s.m("inline")],style:n.value},[null==(e=t.default)?void 0:e.call(t)]),[[R,S.value]])}})]);return L("li",{class:[i.b(),i.is("active",P.value),i.is("opened",S.value),i.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:S.value,onMouseenter:X,onMouseleave:()=>Z(!0),onFocus:X},[o])}}});const Te=P({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:U(Array),default:()=>G([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0}}),Ee=e=>Array.isArray(e)&&e.every((e=>V(e)));var Oe=u({name:"ElMenu",props:Te,emits:{close:(e,t)=>V(e)&&Ee(t),open:(e,t)=>V(e)&&Ee(t),select:(e,t,a,l)=>V(e)&&Ee(t)&&F(a)&&(void 0===l||l instanceof Promise)},setup(e,{emit:t,slots:a,expose:l}){const n=q(),o=n.appContext.config.globalProperties.$router,s=C(),i=d("menu"),r=d("sub-menu"),u=C(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),c=C(e.defaultActive),p=C({}),m=C({}),v=k((()=>"horizontal"===e.mode||"vertical"===e.mode&&e.collapse)),h=()=>{const t=c.value&&p.value[c.value];if(!t||"horizontal"===e.mode||e.collapse)return;t.indexPath.forEach((e=>{const t=m.value[e];t&&f(e,t.indexPath)}))},f=(a,l)=>{u.value.includes(a)||(e.uniqueOpened&&(u.value=u.value.filter((e=>l.includes(e)))),u.value.push(a),t("open",a,l))},b=(e,a)=>{const l=u.value.indexOf(e);-1!==l&&u.value.splice(l,1),t("close",e,a)},g=({index:e,indexPath:t})=>{u.value.includes(e)?b(e,t):f(e,t)},y=a=>{("horizontal"===e.mode||e.collapse)&&(u.value=[]);const{index:l,indexPath:n}=a;if(void 0!==l&&void 0!==n)if(e.router&&o){const e=a.route||l,s=o.push(e).then((e=>(e||(c.value=l),e)));t("select",l,n,{index:l,indexPath:n,route:e},s)}else c.value=l,t("select",l,n,{index:l,indexPath:n})},x=()=>{K((()=>n.proxy.$forceUpdate()))};z((()=>e.defaultActive),(t=>{p.value[t]||(c.value=""),(t=>{const a=p.value,l=a[t]||c.value&&a[c.value]||a[e.defaultActive];l?(c.value=l.index,h()):c.value=t})(t)})),z(p.value,(()=>h())),z((()=>e.collapse),(e=>{e&&(u.value=[])}));{const t=e=>{m.value[e.index]=e},a=e=>{delete m.value[e.index]},l=e=>{p.value[e.index]=e},o=e=>{delete p.value[e.index]};B("rootMenu",O({props:e,openedMenus:u,items:p,subMenus:m,activeIndex:c,isMenuPopup:v,addMenuItem:l,removeMenuItem:o,addSubMenu:t,removeSubMenu:a,openMenu:f,closeMenu:b,handleMenuItemClick:y,handleSubMenuClick:g})),B(`subMenu:${n.uid}`,{addSubMenu:t,removeSubMenu:a,mouseInChild:C(!1),level:0})}A((()=>{h(),"horizontal"===e.mode&&new _e(n.vnode.el,i.namespace.value)}));l({open:e=>{const{indexPath:t}=m.value[e];t.forEach((e=>f(e,t)))},close:b,handleResize:x});const M=e=>{const t=Array.isArray(e)?e:[e],a=[];return t.forEach((e=>{Array.isArray(e.children)?a.push(...M(e.children)):a.push(e)})),a};return()=>{var t,l,n,o;let u=null!=(l=null==(t=a.default)?void 0:t.call(a))?l:[];const d=[];if("horizontal"===e.mode&&s.value){const t=Array.from(null!=(o=null==(n=s.value)?void 0:n.childNodes)?o:[]).filter((e=>"#text"!==e.nodeName||e.nodeValue)),a=M(u),l=64,i=Number.parseInt(getComputedStyle(s.value).paddingLeft,10),c=Number.parseInt(getComputedStyle(s.value).paddingRight,10),p=s.value.clientWidth-i-c;let m=0,v=0;t.forEach(((e,t)=>{m+=e.offsetWidth||0,m<=p-l&&(v=t+1)}));const h=a.slice(0,v),f=a.slice(v);(null==f?void 0:f.length)&&e.ellipsis&&(u=h,d.push(L(Ce,{index:"sub-menu-more",class:r.e("hide-arrow")},{title:()=>L(N,{class:r.e("icon-more")},{default:()=>L(J)}),default:()=>f})))}const c=Ie(e,0),p=(m=L("ul",{key:String(e.collapse),role:"menubar",ref:s,style:c.value,class:{[i.b()]:!0,[i.m(e.mode)]:!0,[i.m("collapse")]:e.collapse}},[...u,...d]),e.ellipsis?(v=m,"horizontal"===e.mode?H(v,[[he,x]]):v):m);var m,v;return e.collapseTransition&&"vertical"===e.mode?L(ke,(()=>p)):p}}});const ze=P({index:{type:U([String,null]),default:null},route:{type:U([String,Object])},disabled:Boolean});var Be=r(u({name:"ElMenuItem",components:{ElTooltip:j},props:ze,emits:{click:e=>V(e.index)&&Array.isArray(e.indexPath)},setup(e,{emit:t}){const a=q(),l=I("rootMenu"),n=d("menu"),o=d("menu-item");l||w("ElMenuItem","can not inject root menu");const{parentMenu:s,indexPath:i}=Se(a,Q(e,"index")),r=I(`subMenu:${s.value.uid}`);r||w("ElMenuItem","can not inject sub menu");const u=k((()=>e.index===l.activeIndex)),c=O({index:e.index,indexPath:i,active:u});return A((()=>{r.addSubMenu(c),l.addMenuItem(c)})),$((()=>{r.removeSubMenu(c),l.removeMenuItem(c)})),{Effect:Y,parentMenu:s,rootMenu:l,active:u,nsMenu:n,nsMenuItem:o,handleClick:()=>{e.disabled||(l.handleMenuItemClick({index:e.index,indexPath:i.value,route:e.route}),t("click",c))}}}}),[["render",function(e,t,a,l,n,o){const s=X("el-tooltip");return c(),Z("li",{class:te([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:t[0]||(t[0]=(...t)=>e.handleClick&&e.handleClick(...t))},["ElMenu"===e.parentMenu.type.name&&e.rootMenu.props.collapse&&e.$slots.title?(c(),p(s,{key:0,effect:e.Effect.DARK,placement:"right","fallback-placements":["left"],persistent:""},{content:m((()=>[v(e.$slots,"title")])),default:m((()=>[ee("div",{class:te(e.nsMenu.be("tooltip","trigger"))},[v(e.$slots,"default")],2)])),_:3},8,["effect"])):(c(),Z(W,{key:1},[v(e.$slots,"default"),v(e.$slots,"title")],64))],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);var Ae=r(u({name:"ElMenuItemGroup",props:{title:String},setup:()=>({ns:d("menu-item-group")})}),[["render",function(e,t,a,l,n,o){return c(),Z("li",{class:te(e.ns.b())},[ee("div",{class:te(e.ns.e("title"))},[e.$slots.title?v(e.$slots,"title",{key:1}):(c(),Z(W,{key:0},[ae(le(e.title),1)],64))],2),ee("ul",null,[v(e.$slots,"default")])],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);const $e=ne(Oe,{MenuItem:Be,MenuItemGroup:Ae,SubMenu:Ce}),Le=oe(Be);oe(Ae);const Ne=oe(Ce);const je={class:"sidebar-item"},He={class:"title"},Re=["href","target","onClick"],We={class:"title"},qe={class:"title"},De=u({name:"SidebarItem"});var Ue=se(Object.assign(De,{props:{item:{type:Object,required:!0},basePath:{type:String,default:""}},setup(e){const t=e,a=k((()=>{let e=!0;return t.item.children?t.item.children.every((e=>!1===e.meta.sidebar))&&(e=!1):e=!1,e}));return(t,l)=>{const n=pe,o=N,s=Ne,i=Le,r=X("router-link");return c(),Z("div",je,[null==e.item.path?(c(),p(s,{key:0,title:e.item.meta.title,index:JSON.stringify(e.item)},{title:m((()=>[e.item.meta.icon?(c(),p(o,{key:0,class:"title-icon"},{default:m((()=>[re(n,{name:e.item.meta.icon},null,8,["name"])])),_:1})):ue("v-if",!0),ee("span",He,le(e.item.meta.title),1)])),default:m((()=>[(c(!0),Z(W,null,de(e.item.children,(e=>(c(),Z(W,null,[!1!==e.meta.sidebar?(c(),p(Ue,{key:e.path,item:e},null,8,["item"])):ue("v-if",!0)],64)))),256))])),_:1},8,["title","index"])):b(a)?(c(),p(s,{key:2,title:e.item.meta.title,index:b(ie)(e.basePath,e.item.path)},{title:m((()=>[e.item.meta.icon?(c(),p(o,{key:0,class:"title-icon"},{default:m((()=>[re(n,{name:e.item.meta.icon},null,8,["name"])])),_:1})):ue("v-if",!0),ee("span",qe,le(e.item.meta.title),1)])),default:m((()=>[(c(!0),Z(W,null,de(e.item.children,(t=>(c(),Z(W,null,[!1!==t.meta.sidebar?(c(),p(Ue,{key:t.path,item:t,"base-path":b(ie)(e.basePath,e.item.path)},null,8,["item","base-path"])):ue("v-if",!0)],64)))),256))])),_:1},8,["title","index"])):(c(),p(r,{key:1,custom:"",to:b(ie)(e.basePath,e.item.path)},{default:m((({href:t,navigate:a,isActive:l,isExactActive:s})=>[ee("a",{href:b(ce)(b(ie)(e.basePath,e.item.path))?b(ie)(e.basePath,e.item.path):t,class:te([l&&"router-link-active",s&&"router-link-exact-active"]),target:b(ce)(b(ie)(e.basePath,e.item.path))?"_blank":"_self",onClick:a},[re(i,{title:e.item.meta.title,index:b(ie)(e.basePath,e.item.path)},{default:m((()=>[e.item.meta.icon?(c(),p(o,{key:0,class:"title-icon"},{default:m((()=>[re(n,{name:e.item.meta.icon},null,8,["name"])])),_:1})):ue("v-if",!0),ee("span",We,le(e.item.meta.title),1)])),_:1},8,["title","index"])],10,Re)])),_:1},8,["to"]))])}}}),[["__scopeId","data-v-74e3e6a6"]]),Ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ue});export{$e as E,Ue as S,Ge as i};
