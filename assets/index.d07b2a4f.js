
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{aD as t,E as n,aw as e,f as a,h as o,w as s,bl as i,bO as l,bL as c,b as u,$ as f,R as r}from"./index.b8cb1fc0.js";import{E as d}from"./el-notification.d1eb1efd.js";const m=f(" Mock.js 官网 "),p=f("测试：获取用户权限"),k={__name:"index",setup(i){const f=t();function k(){f.getPermissions().then((t=>{d({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:t.map((t=>`<p>${t}</p>`)).join("")})}))}return(t,i)=>{const f=r,d=n,b=e,_=l,j=c;return u(),a("div",null,[o(_,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:s((()=>[o(b,{onClick:i[0]||(i[0]=t=>{return n="http://mockjs.com/",void window.open(n,"top");var n})},{icon:s((()=>[o(d,null,{default:s((()=>[o(f,{name:"ep:link"})])),_:1})])),default:s((()=>[m])),_:1})])),_:1}),o(j,null,{default:s((()=>[o(b,{onClick:k},{default:s((()=>[p])),_:1})])),_:1})])}}};"function"==typeof i&&i(k);export{k as default};
