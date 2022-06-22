
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
const e=function(e,t,...n){let c;c=t.includes("mouse")||t.includes("click")?"MouseEvents":t.includes("key")?"KeyboardEvent":"HTMLEvents";const s=document.createEvent(c);return s.initEvent(t,...n),e.dispatchEvent(s),e},t=e=>!e.getAttribute("aria-owns"),n=(e,t,n)=>{const{parentNode:c}=e;if(!c)return null;const s=c.querySelectorAll(n);return s[Array.prototype.indexOf.call(s,e)+t]||null},c=e=>{e&&(e.focus(),!t(e)&&e.click())};export{c as f,n as g,t as i,e as t};
