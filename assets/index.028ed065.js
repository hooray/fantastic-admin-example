
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as e,u as a,s as t,r as o,c as s,a as i,o as l,t as r,b as n,e as m,w as d,f as u,g as p,h as c,i as b,j as f,n as v,E as j,k as g,l as y,m as h,T as x,_ as k,p as C,q as _,v as w,x as S,y as $,z as q,A as B,B as M,C as E,D as T,F as D,K as A}from"./index.edceb537.js";import{_ as F}from"./index.75a787e1.js";import{h as L,S as N}from"./index.6051120c.js";import H from"./index.b3029eab.js";import P from"./index.dc305a4f.js";import z from"./index.f9e71d4e.js";import I from"./index.c317f8f2.js";import K from"./index.ba665101.js";import O from"./index.96dfaa67.js";import{u as R}from"./index.2e5ac402.js";import"./el-input.7941ab17.js";import"./event.d298a7ab.js";import"./eventBus.4bd846bd.js";import"./index.f5f39880.js";import"./logo.d9b7b1d5.js";import"./index.40748038.js";import"./el-tooltip.89296c46.js";import"./index.8a035c56.js";import"./aria.aa9fd7b6.js";/* empty css                       *//* empty css                        */import"./el-switch.d7c1965d.js";import"./validator.b834a4fe.js";import"./el-alert.9066d762.js";/* empty css                   */import"./index.2158c17b.js";import"./index.222279e5.js";import"./el-notification.7abbf358.js";const G=e=>e**3,J=["onClick"];const Q=_(k(e({name:"ElBacktop",props:{visibilityHeight:{type:Number,default:200},target:{type:String,default:""},right:{type:Number,default:40},bottom:{type:Number,default:40}},emits:{click:e=>e instanceof MouseEvent},setup(e,{emit:k}){const _=e,w=a("backtop"),S=t(),$=t(),q=o(!1),B=s((()=>({right:`${_.right}px`,bottom:`${_.bottom}px`}))),M=()=>{if(!S.value)return;const e=Date.now(),a=S.value.scrollTop,t=()=>{if(!S.value)return;const o=(Date.now()-e)/500;var s;o<1?(S.value.scrollTop=a*(1-((s=o)<.5?G(2*s)/2:1-G(2*(1-s))/2)),requestAnimationFrame(t)):S.value.scrollTop=0};requestAnimationFrame(t)},E=e=>{M(),k("click",e)},T=C((()=>{S.value&&(q.value=S.value.scrollTop>=_.visibilityHeight)}),300);return i($,"scroll",T),l((()=>{var e;$.value=document,S.value=document.documentElement,_.target&&(S.value=null!=(e=document.querySelector(_.target))?e:void 0,S.value||r("ElBacktop",`target is not existed: ${_.target}`),$.value=S.value)})),(e,a)=>(n(),m(x,{name:`${b(w).namespace.value}-fade-in`},{default:d((()=>[q.value?(n(),u("div",{key:0,style:g(b(B)),class:v(b(w).b()),onClick:y(E,["stop"])},[p(e.$slots,"default",{},(()=>[c(b(j),{class:v(b(w).e("icon"))},{default:d((()=>[c(b(f))])),_:1},8,["class"])]))],14,J)):h("v-if",!0)])),_:3},8,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/backtop/src/backtop.vue"]])),U={class:"layout"},V={id:"app-main"},W={class:"wrapper"},X={class:"main"},Y=e({name:"Layout"}),Z=w(Object.assign(Y,{setup(e){const a=S(),t=$(),o=q(),i=s((()=>void 0!==a.meta.copyright?a.meta.copyright:t.copyright.enable));return B((()=>t.menu.subMenuCollapse),(e=>{"mobile"===t.mode&&(e?document.querySelector("body").classList.remove("hidden"):document.querySelector("body").classList.add("hidden"))})),B((()=>a.path),(()=>{"mobile"===t.mode&&t.$patch((e=>{e.menu.subMenuCollapse=!0}))})),l((()=>{L("f5",(e=>{t.topbar.enablePageReload&&(e.preventDefault(),R().reload())}))})),M((()=>{L.unbind("f5")})),(e,a)=>{const s=E("router-view"),l=F,r=Q;return n(),u("div",U,[T("div",V,[c(H),T("div",W,[T("div",{class:v(["sidebar-container",{show:"mobile"===b(t).mode&&!b(t).menu.subMenuCollapse}])},[c(P),c(z)],2),T("div",{class:v(["sidebar-mask",{show:"mobile"===b(t).mode&&!b(t).menu.subMenuCollapse}]),onClick:a[0]||(a[0]=e=>b(t).toggleSidebarCollapse())},null,2),T("div",{class:"main-container",style:g({"padding-bottom":e.$route.meta.paddingBottom})},["head"!==b(t).menu.menuMode||b(t).topbar.enableSidebarCollapse||b(t).topbar.enableBreadcrumb?(n(),m(I,{key:0})):h("v-if",!0),T("div",X,[c(s,null,{default:d((({Component:e,route:a})=>[c(x,{name:"main",mode:"out-in",appear:""},{default:d((()=>[(n(),m(A,{include:b(o).list},[(n(),m(D(e),{key:a.fullPath}))],1032,["include"]))])),_:2},1024)])),_:1})]),b(i)?(n(),m(l,{key:1})):h("v-if",!0)],4)]),c(r,{right:20,bottom:20,title:"回到顶部"})]),c(N),c(K),c(O)])}}}),[["__scopeId","data-v-751b4172"]]);export{Z as default};