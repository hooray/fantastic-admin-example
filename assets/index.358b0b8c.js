
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
const e={beforeMount(e,n){let t=null,l=!1;const o=()=>n.value&&n.value(),a=()=>{clearInterval(t),t=null,l||o(),l=!1};e.addEventListener("mousedown",(e=>{0===e.button&&(document.addEventListener("mouseup",a,{once:!0}),clearInterval(t),t=setInterval((()=>{l=!0,o()}),100))}))}};export{e as R};
