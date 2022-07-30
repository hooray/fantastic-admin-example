
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as t,v as e,r as o,o as s,B as n,b as a,f as c,g as d,n as i}from"./index.8b097f1d.js";const l=t({name:"FixedActionBar"}),m=e(Object.assign(l,{setup(t){const e=o({isBottom:!0});function l(){var t=document.documentElement.scrollTop||document.body.scrollTop,o=document.documentElement.clientHeight||document.body.clientHeight,s=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(t+o)>=s?e.value.isBottom=!0:e.value.isBottom=!1}return s((()=>{l(),window.addEventListener("scroll",l)})),n((()=>{window.removeEventListener("scroll",l)})),(t,o)=>(a(),c("div",{class:i(["actionbar",{shadow:!e.value.isBottom}]),"data-fixed-calc-width":""},[d(t.$slots,"default",{},void 0,!0)],2))}}),[["__scopeId","data-v-e79fa78c"]]);export{m as _};
