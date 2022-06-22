
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as e,d as a,x as s,z as o,r as l,i as n,f as u,h as t,n as i,m as d,w as m,b as p,S as r,M as c,Q as b,e as f}from"./index.773474dc.js";import"./el-tooltip.0ca4bad9.js";import g from"./index.9b9c3a33.js";import{E as h,S as v}from"./index.85c131ae.js";import"./logo.96f1da49.js";import"./aria2.cb38723d.js";const M=a({name:"SubSidebar"});var j=e(Object.assign(M,{setup(e){const a=s(),M=o(),j=l(0);function w(e){j.value=e.target.scrollTop}return(e,s)=>{const o=h;return["side","head","single"].includes(n(a).menu.menuMode)||"mobile"===n(a).mode?(p(),u("div",{key:0,class:i(["sub-sidebar-container",{"is-collapse":"pc"===n(a).mode&&n(a).menu.subMenuCollapse}]),onScroll:w},[t(g,{"show-logo":"single"===n(a).menu.menuMode,class:i({"sidebar-logo":!0,"sidebar-logo-bg":"single"===n(a).menu.menuMode,shadow:j.value})},null,8,["show-logo","class"]),d(" 侧边栏模式（无主导航） "),t(o,{"unique-opened":n(a).menu.subMenuUniqueOpened,"default-openeds":n(M).defaultOpenedPaths,"default-active":e.$route.meta.activeMenu||e.$route.path,collapse:"pc"===n(a).mode&&n(a).menu.subMenuCollapse,"collapse-transition":!1,class:i({"is-collapse-without-logo":"single"!==n(a).menu.menuMode&&n(a).menu.subMenuCollapse})},{default:m((()=>[t(r,{name:"sub-sidebar"},{default:m((()=>[(p(!0),u(c,null,b(n(M).sidebarMenus,((e,a)=>(p(),u(c,null,[!1!==e.meta.sidebar?(p(),f(v,{key:e.path||a,item:e,"base-path":e.path},null,8,["item","base-path"])):d("v-if",!0)],64)))),256))])),_:1})])),_:1},8,["unique-opened","default-openeds","default-active","collapse","class"])],34)):d("v-if",!0)}}}),[["__scopeId","data-v-e6fe94ea"]]);export{j as default};
