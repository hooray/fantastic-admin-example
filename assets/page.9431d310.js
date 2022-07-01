
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as e,d as a,y as l,r as t,bk as s,aw as i,f as o,h as n,w as d,bl as c,F as m,bL as u,b as p,B as f,$ as v,bO as r}from"./index.1763518e.js";import{E as b}from"./el-input-number.4cb354be.js";import"./el-input.da2df40f.js";import{E as k}from"./el-switch.f893b056.js";import"./event.fa25aaef.js";import"./index.8f23dffd.js";import"./validator.cf2c6b9b.js";const x={class:"block"},j={class:"block"},h={class:"block"},E=v("进入同级路由页面"),A=v("进入下级路由页面"),V=a({name:"KeepAliveExamplePage"}),_=Object.assign(V,{setup(e){const a=m(),c=l(),v=t(!1),V=t(1);function _(e){let l;switch(e){case 1:l="keepAliveExampleDetail";break;case 2:l="keepAliveExampleNestedDetail"}a.push({name:l})}return s(((e,a)=>{const l=a.matched[e.matched.length-1].components.default.name;v.value&&["keepAliveExampleDetail","keepAliveExampleNestedDetail"].includes(e.name)?c.add(l):c.remove(l)})),(e,a)=>{const l=r,t=k,s=b,c=i,m=u;return p(),o("div",null,[n(l,{title:"页面缓存",content:"除了可以在路由里配置页面是否需要缓存外，你也可以不使用框架提供的方法，而是在页面里自行实现，该方法目前仅支持在 Options API 中实现。"}),n(m,null,{default:d((()=>[f("div",x,[n(t,{modelValue:v.value,"onUpdate:modelValue":a[0]||(a[0]=e=>v.value=e),"active-text":"开启缓存","inactive-text":"关闭缓存"},null,8,["modelValue"])]),f("div",j,[n(s,{modelValue:V.value,"onUpdate:modelValue":a[1]||(a[1]=e=>V.value=e)},null,8,["modelValue"])]),f("div",h,[n(c,{onClick:a[2]||(a[2]=e=>_(1))},{default:d((()=>[E])),_:1}),n(c,{onClick:a[3]||(a[3]=e=>_(2))},{default:d((()=>[A])),_:1})])])),_:1})])}}});"function"==typeof c&&c(_);var w=e(_,[["__scopeId","data-v-6510f400"]]);export{w as default};
