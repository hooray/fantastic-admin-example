
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{aD as t,E as n,az as a,f as o,h as s,w as e,bs as i,bw as l,bt as c,b as f,$ as u,S as r}from"./index.84c9bfd8.js";import{E as d}from"./el-notification.f4af3834.js";const m=u(" Mock.js 官网 "),p=u("测试：获取用户权限"),k={__name:"index",setup(i){const u=t();function k(){u.getPermissions().then((t=>{d({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:t.map((t=>`<p>${t}</p>`)).join("")})}))}return(t,i)=>{const u=r,d=n,_=a,j=l,b=c;return f(),o("div",null,[s(j,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:e((()=>[s(_,{onClick:i[0]||(i[0]=t=>{return n="http://mockjs.com/",void window.open(n,"top");var n})},{icon:e((()=>[s(d,null,{default:e((()=>[s(u,{name:"ep:link"})])),_:1})])),default:e((()=>[m])),_:1})])),_:1}),s(b,null,{default:e((()=>[s(_,{onClick:k},{default:e((()=>[p])),_:1})])),_:1})])}}};"function"==typeof i&&i(k);export{k as default};
