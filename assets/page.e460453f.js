
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as e,d as a,y as l,r as t,bk as s,aw as i,f as o,h as n,w as d,bl as m,G as u,bL as c,b as p,C as v,$ as r,bO as f}from"./index.4888643e.js";import{E as b}from"./el-input-number.bd735ecb.js";import"./el-input.fe77ed94.js";import{E as k}from"./el-switch.7532208b.js";import"./event.6c7ea317.js";import"./index.22f0152a.js";import"./validator.91d89f30.js";const x={class:"block"},j={class:"block"},h={class:"block"},E=r("进入同级路由页面"),A=r("进入下级路由页面"),V=a({name:"KeepAliveExamplePage"}),_=Object.assign(V,{setup(e){const a=u(),m=l(),r=t(!1),V=t(1);function _(e){let l;switch(e){case 1:l="keepAliveExampleDetail";break;case 2:l="keepAliveExampleNestedDetail"}a.push({name:l})}return s(((e,a)=>{const l=a.matched[e.matched.length-1].components.default.name;r.value&&["keepAliveExampleDetail","keepAliveExampleNestedDetail"].includes(e.name)?m.add(l):m.remove(l)})),(e,a)=>{const l=f,t=k,s=b,m=i,u=c;return p(),o("div",null,[n(l,{title:"页面缓存",content:"除了可以在路由里配置页面是否需要缓存外，你也可以不使用框架提供的方法，而是在页面里自行实现，该方法目前仅支持在 Options API 中实现。"}),n(u,null,{default:d((()=>[v("div",x,[n(t,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=e=>r.value=e),"active-text":"开启缓存","inactive-text":"关闭缓存"},null,8,["modelValue"])]),v("div",j,[n(s,{modelValue:V.value,"onUpdate:modelValue":a[1]||(a[1]=e=>V.value=e)},null,8,["modelValue"])]),v("div",h,[n(m,{onClick:a[2]||(a[2]=e=>_(1))},{default:d((()=>[E])),_:1}),n(m,{onClick:a[3]||(a[3]=e=>_(2))},{default:d((()=>[A])),_:1})])])),_:1})])}}});"function"==typeof m&&m(_);var w=e(_,[["__scopeId","data-v-6510f400"]]);export{w as default};