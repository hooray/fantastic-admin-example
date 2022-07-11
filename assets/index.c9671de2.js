
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as e,d as s,x as a,z as o,r as l,i as n,f as u,h as t,n as i,m as d,w as m,b as p,U as r,N as c,R as b,e as f}from"./index.4888643e.js";import"./el-tooltip.586473e3.js";import g from"./index.bc040a29.js";import{E as h,S as v}from"./index.3d3879c6.js";import"./logo.96f1da49.js";import"./aria.9e2ca540.js";const M=s({name:"SubSidebar"});var j=e(Object.assign(M,{setup(e){const s=a(),M=o(),j=l(0);function w(e){j.value=e.target.scrollTop}return(e,a)=>{const o=h;return["side","head","single"].includes(n(s).menu.menuMode)||"mobile"===n(s).mode?(p(),u("div",{key:0,class:i(["sub-sidebar-container",{"is-collapse":"pc"===n(s).mode&&n(s).menu.subMenuCollapse}]),onScroll:w},[t(g,{"show-logo":"single"===n(s).menu.menuMode,class:i({"sidebar-logo":!0,"sidebar-logo-bg":"single"===n(s).menu.menuMode,shadow:j.value})},null,8,["show-logo","class"]),d(" 侧边栏模式（无主导航） "),t(o,{"unique-opened":n(s).menu.subMenuUniqueOpened,"default-openeds":n(M).defaultOpenedPaths,"default-active":e.$route.meta.activeMenu||e.$route.path,collapse:"pc"===n(s).mode&&n(s).menu.subMenuCollapse,"collapse-transition":!1,class:i({"is-collapse-without-logo":"single"!==n(s).menu.menuMode&&n(s).menu.subMenuCollapse})},{default:m((()=>[t(r,{name:"sub-sidebar"},{default:m((()=>[(p(!0),u(c,null,b(n(M).sidebarMenus,((e,s)=>(p(),u(c,null,[!1!==e.meta.sidebar?(p(),f(v,{key:e.path||s,item:e,"base-path":e.path},null,8,["item","base-path"])):d("v-if",!0)],64)))),256))])),_:1})])),_:1},8,["unique-opened","default-openeds","default-active","collapse","class"])],34)):d("v-if",!0)}}}),[["__scopeId","data-v-e6fe94ea"]]);export{j as default};
