
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{aF as t,E as n,az as a,f as o,h as e,w as s,bu as i,by as c,bv as l,b as u,R as f,U as r}from"./index.2c25f648.js";import{E as d}from"./el-notification.ac11c79f.js";const m=f(" Mock.js 官网 "),p=f("测试：获取用户权限"),k={__name:"index",setup(i){const f=t();function k(){f.getPermissions().then((t=>{d({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:t.map((t=>`<p>${t}</p>`)).join("")})}))}return(t,i)=>{const f=r,d=n,_=a,j=c,b=l;return u(),o("div",null,[e(j,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:s((()=>[e(_,{onClick:i[0]||(i[0]=t=>{return n="http://mockjs.com/",void window.open(n,"top");var n})},{icon:s((()=>[e(d,null,{default:s((()=>[e(f,{name:"ep:link"})])),_:1})])),default:s((()=>[m])),_:1})])),_:1}),e(b,null,{default:s((()=>[e(_,{onClick:k},{default:s((()=>[p])),_:1})])),_:1})])}}};"function"==typeof i&&i(k);export{k as default};
