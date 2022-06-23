
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{aD as a,E as n,aw as t,f as e,h as s,w as o,bl as i,bO as l,bL as u,b as c,$ as r,R as d}from"./index.330aad3b.js";import{E as f}from"./index2.0e6ba495.js";const m=r(" Mock.js 官网 "),p=r("测试：获取用户权限"),k={__name:"index",setup(i){const r=a();function k(){r.getPermissions().then((a=>{f({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:a.map((a=>`<p>${a}</p>`)).join("")})}))}return(a,i)=>{const r=d,f=n,_=t,b=l,j=u;return c(),e("div",null,[s(b,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:o((()=>[s(_,{onClick:i[0]||(i[0]=a=>{return n="http://mockjs.com/",void window.open(n,"top");var n})},{icon:o((()=>[s(f,null,{default:o((()=>[s(r,{name:"ep:link"})])),_:1})])),default:o((()=>[m])),_:1})])),_:1}),s(j,null,{default:o((()=>[s(_,{onClick:k},{default:o((()=>[p])),_:1})])),_:1})])}}};"function"==typeof i&&i(k);export{k as default};
