
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as e,d as a,y as l,r as t,bk as s,aw as i,f as o,h as n,w as d,bl as c,F as m,bL as u,b as p,B as v,$ as r,bO as b}from"./index.330aad3b.js";import{E as f}from"./el-input-number.562b6727.js";import"./el-input.3ad1d7ec.js";import{E as k}from"./el-switch.c9be0b13.js";import"./event2.c09267d7.js";import"./index2.5072a5c8.js";import"./validator2.5cab362f.js";const x={class:"block"},j={class:"block"},h={class:"block"},E=r("进入同级路由页面"),A=r("进入下级路由页面"),V=a({name:"KeepAliveExamplePage"}),_=Object.assign(V,{setup(e){const a=m(),c=l(),r=t(!1),V=t(1);function _(e){let l;switch(e){case 1:l="keepAliveExampleDetail";break;case 2:l="keepAliveExampleNestedDetail"}a.push({name:l})}return s(((e,a)=>{const l=a.matched[e.matched.length-1].components.default.name;r.value&&["keepAliveExampleDetail","keepAliveExampleNestedDetail"].includes(e.name)?c.add(l):c.remove(l)})),(e,a)=>{const l=b,t=k,s=f,c=i,m=u;return p(),o("div",null,[n(l,{title:"页面缓存",content:"除了可以在路由里配置页面是否需要缓存外，你也可以不使用框架提供的方法，而是在页面里自行实现，该方法目前仅支持在 Options API 中实现。"}),n(m,null,{default:d((()=>[v("div",x,[n(t,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=e=>r.value=e),"active-text":"开启缓存","inactive-text":"关闭缓存"},null,8,["modelValue"])]),v("div",j,[n(s,{modelValue:V.value,"onUpdate:modelValue":a[1]||(a[1]=e=>V.value=e)},null,8,["modelValue"])]),v("div",h,[n(c,{onClick:a[2]||(a[2]=e=>_(1))},{default:d((()=>[E])),_:1}),n(c,{onClick:a[3]||(a[3]=e=>_(2))},{default:d((()=>[A])),_:1})])])),_:1})])}}});"function"==typeof c&&c(_);var w=e(_,[["__scopeId","data-v-6510f400"]]);export{w as default};