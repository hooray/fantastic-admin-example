
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{a5 as n,bh as e}from"./index.dbeb19dd.js";const t=new Map;let o;function a(n,t){let o=[];return Array.isArray(t.arg)?o=t.arg:e(t.arg)&&o.push(t.arg),function(e,a){const s=t.instance.popperRef,d=e.target,u=null==a?void 0:a.target,i=!t||!t.instance,r=!d||!u,c=n.contains(d)||n.contains(u),l=n===d,g=o.length&&o.some((n=>null==n?void 0:n.contains(d)))||o.length&&o.includes(u),p=s&&(s.contains(d)||s.contains(u));i||r||c||l||g||p||t.value(e,a)}}n&&(document.addEventListener("mousedown",(n=>o=n)),document.addEventListener("mouseup",(n=>{for(const e of t.values())for(const{documentHandler:t}of e)t(n,o)})));const s={beforeMount(n,e){t.has(n)||t.set(n,[]),t.get(n).push({documentHandler:a(n,e),bindingFn:e.value})},updated(n,e){t.has(n)||t.set(n,[]);const o=t.get(n),s=o.findIndex((n=>n.bindingFn===e.oldValue)),d={documentHandler:a(n,e),bindingFn:e.value};s>=0?o.splice(s,1,d):o.push(d)},unmounted(n){t.delete(n)}};export{s as C};
