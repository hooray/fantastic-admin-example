
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{aD as n,E as t,aw as a,f as e,h as s,w as o,bl as i,bO as l,bL as c,b as u,$ as d,R as f}from"./index.6dffb2c9.js";import{E as r}from"./index2.6736fad5.js";const m=d(" Mock.js 官网 "),p=d("测试：获取用户权限"),k={__name:"index",setup(i){const d=n();function k(){d.getPermissions().then((n=>{r({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:n.map((n=>`<p>${n}</p>`)).join("")})}))}return(n,i)=>{const d=f,r=t,_=a,j=l,b=c;return u(),e("div",null,[s(j,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:o((()=>[s(_,{onClick:i[0]||(i[0]=n=>{return t="http://mockjs.com/",void window.open(t,"top");var t})},{icon:o((()=>[s(r,null,{default:o((()=>[s(d,{name:"ep:link"})])),_:1})])),default:o((()=>[m])),_:1})])),_:1}),s(b,null,{default:o((()=>[s(_,{onClick:k},{default:o((()=>[p])),_:1})])),_:1})])}}};"function"==typeof i&&i(k);export{k as default};