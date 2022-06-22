
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(a,t,o)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o;import{d as n,u as l,s as u,r as p,c as m,a as d,o as c,t as b,b as v,e as f,w as y,f as j,g,h,i as k,j as x,n as w,E as M,k as C,l as P,m as _,T as O,_ as D,p as $,q as S,v as q,x as E,y as F,z as A,A as B,B as T,C as H,D as I,F as L,G as N,H as J,I as z,K as G,J as K}from"./index.773474dc.js";import{_ as R}from"./index.097a5ef7.js";import Q from"./index.fc090af0.js";import U from"./index.52e946ae.js";import V from"./index.be4f37a2.js";import W from"./index.f0caab31.js";import X from"./index.90bcbbde.js";import Y from"./index.929ba43a.js";import Z from"./index.8b401d7f.js";import"./index.9b9c3a33.js";import"./logo.96f1da49.js";import"./index.9c9a9785.js";import"./el-tooltip.0ca4bad9.js";import"./index.85c131ae.js";import"./aria2.cb38723d.js";import"./el-input.4de9b81e.js";import"./event2.c09267d7.js";/* empty css                       *//* empty css                        */import"./el-switch.783ba9e9.js";import"./validator2.7c472023.js";import"./el-alert.5c137829.js";import"./index2.15a76773.js";import"./index2.c6b1a183.js";const ee=e=>e**3,ae={visibilityHeight:{type:Number,default:200},target:{type:String,default:""},right:{type:Number,default:40},bottom:{type:Number,default:40}},te={click:e=>e instanceof MouseEvent},oe=["onClick"],se=n((re=((e,a)=>{for(var t in a||(a={}))s.call(a,t)&&i(e,t,a[t]);if(o)for(var t of o(a))r.call(a,t)&&i(e,t,a[t]);return e})({},{name:"ElBacktop"}),a(re,t({props:ae,emits:te,setup(e,{emit:a}){const t=e,o=l("backtop"),s=u(),r=u(),i=p(!1),n=m((()=>({right:`${t.right}px`,bottom:`${t.bottom}px`}))),D=()=>{if(!s.value)return;const e=Date.now(),a=s.value.scrollTop,t=()=>{if(!s.value)return;const o=(Date.now()-e)/500;var r;o<1?(s.value.scrollTop=a*(1-((r=o)<.5?ee(2*r)/2:1-ee(2*(1-r))/2)),requestAnimationFrame(t)):s.value.scrollTop=0};requestAnimationFrame(t)},S=e=>{D(),a("click",e)},q=$((()=>{s.value&&(i.value=s.value.scrollTop>=t.visibilityHeight)}),300);return d(r,"scroll",q),c((()=>{var e;r.value=document,s.value=document.documentElement,t.target&&(s.value=null!=(e=document.querySelector(t.target))?e:void 0,s.value||b("ElBacktop",`target is not existed: ${t.target}`),r.value=s.value)})),(e,a)=>(v(),f(O,{name:`${k(o).namespace.value}-fade-in`},{default:y((()=>[i.value?(v(),j("div",{key:0,style:C(k(n)),class:w(k(o).b()),onClick:P(S,["stop"])},[g(e.$slots,"default",{},(()=>[h(k(M),{class:w(k(o).e("icon"))},{default:y((()=>[h(k(x))])),_:1},8,["class"])]))],14,oe)):_("v-if",!0)])),_:3},8,["name"]))}}))));var re;const ie=S(D(se,[["__file","/home/runner/work/element-plus/element-plus/packages/components/backtop/src/backtop.vue"]]));const ne={class:"layout"},le={id:"app-main"},ue={class:"wrapper"},pe={class:"main"},me=n({name:"Layout"});var de=q(Object.assign(me,{setup(e){const{proxy:a}=H(),t=I(),o=L(),s=E(),r=F(),i=A(),n=m((()=>void 0!==t.meta.copyright?t.meta.copyright:s.copyright.enable));function l(){o.push({name:"reload"})}return B((()=>s.menu.subMenuCollapse),(e=>{"mobile"===s.mode&&(e?document.querySelector("body").classList.remove("hidden"):document.querySelector("body").classList.add("hidden"))})),B((()=>t.path),(()=>{"mobile"===s.mode&&s.$patch((e=>{e.menu.subMenuCollapse=!0}))})),c((()=>{a.$hotkeys("f5",(e=>{s.topbar.enablePageReload&&(e.preventDefault(),l())}))})),N("reload",l),N("switchMenu",(function(e){i.setActived(e),s.menu.switchMainMenuAndPageJump&&(K(i.sidebarMenusFirstDeepestPath)?window.open(i.sidebarMenusFirstDeepestPath,"_blank"):o.push(i.sidebarMenusFirstDeepestPath))})),(e,a)=>{const t=J("router-view"),o=R,i=ie;return v(),j("div",ne,[T("div",le,[h(Q),T("div",ue,[T("div",{class:w(["sidebar-container",{show:"mobile"===k(s).mode&&!k(s).menu.subMenuCollapse}])},[h(U),h(V)],2),T("div",{class:w(["sidebar-mask",{show:"mobile"===k(s).mode&&!k(s).menu.subMenuCollapse}]),onClick:a[0]||(a[0]=e=>k(s).toggleSidebarCollapse())},null,2),T("div",{class:"main-container",style:C({"padding-bottom":e.$route.meta.paddingBottom})},["head"!==k(s).menu.menuMode||k(s).topbar.enableSidebarCollapse||k(s).topbar.enableBreadcrumb?(v(),f(W,{key:0})):_("v-if",!0),T("div",pe,[h(t,null,{default:y((({Component:e,route:a})=>[h(O,{name:"main",mode:"out-in",appear:""},{default:y((()=>[(v(),f(G,{include:k(r).list},[(v(),f(z(e),{key:a.fullPath}))],1032,["include"]))])),_:2},1024)])),_:1})]),k(n)?(v(),f(o,{key:1})):_("v-if",!0)],4)]),h(i,{right:20,bottom:20,title:"回到顶部"})]),h(X),h(Y),h(Z)])}}}),[["__scopeId","data-v-e387dc48"]]);export{de as default};
