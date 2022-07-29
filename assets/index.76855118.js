
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as e,d as s,y as a,M as o,r as l,i as n,b as u,f as t,h as i,n as d,m,w as p,V as r,H as c,Q as b,e as f}from"./index.2c25f648.js";import"./el-tooltip.89296c46.js";import g from"./index.caf63ee8.js";import{E as h,S as M}from"./index.3040f8d4.js";import"./logo.d9b7b1d5.js";import"./aria.aa9fd7b6.js";const v=s({name:"SubSidebar"}),j=e(Object.assign(v,{setup(e){const s=a(),v=o(),j=l(0);function w(e){j.value=e.target.scrollTop}return(e,a)=>{const o=h;return["side","head","single"].includes(n(s).menu.menuMode)||"mobile"===n(s).mode?(u(),t("div",{key:0,class:d(["sub-sidebar-container",{"is-collapse":"pc"===n(s).mode&&n(s).menu.subMenuCollapse}]),onScroll:w},[i(g,{"show-logo":"single"===n(s).menu.menuMode,class:d({"sidebar-logo":!0,"sidebar-logo-bg":"single"===n(s).menu.menuMode,shadow:j.value})},null,8,["show-logo","class"]),m(" 侧边栏模式（无主导航） "),i(o,{"unique-opened":n(s).menu.subMenuUniqueOpened,"default-openeds":n(v).defaultOpenedPaths,"default-active":e.$route.meta.activeMenu||e.$route.path,collapse:"pc"===n(s).mode&&n(s).menu.subMenuCollapse,"collapse-transition":!1,class:d({"is-collapse-without-logo":"single"!==n(s).menu.menuMode&&n(s).menu.subMenuCollapse})},{default:p((()=>[i(r,{name:"sub-sidebar"},{default:p((()=>[(u(!0),t(c,null,b(n(v).sidebarMenus,((e,s)=>(u(),t(c,null,[!1!==e.meta.sidebar?(u(),f(M,{key:e.path||s,item:e,"base-path":e.path},null,8,["item","base-path"])):m("v-if",!0)],64)))),256))])),_:1})])),_:1},8,["unique-opened","default-openeds","default-active","collapse","class"])],34)):m("v-if",!0)}}}),[["__scopeId","data-v-a8f2cffe"]]);export{j as default};
