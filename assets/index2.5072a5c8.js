
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{c2 as e,c3 as a}from"./index.330aad3b.js";var t={beforeMount(t,n){let o,l=null;const r=()=>n.value&&n.value(),u=()=>{Date.now()-o<100&&r(),clearInterval(l),l=null};e(t,"mousedown",(e=>{0===e.button&&(o=Date.now(),a(document,"mouseup",u),clearInterval(l),l=setInterval(r,100))}))}};export{t as v};
