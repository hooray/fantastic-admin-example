
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{c2 as e,c3 as t}from"./index.4888643e.js";var a={beforeMount(a,n){let o,l=null;const r=()=>n.value&&n.value(),u=()=>{Date.now()-o<100&&r(),clearInterval(l),l=null};e(a,"mousedown",(e=>{0===e.button&&(o=Date.now(),t(document,"mouseup",u),clearInterval(l),l=setInterval(r,100))}))}};export{a as v};
