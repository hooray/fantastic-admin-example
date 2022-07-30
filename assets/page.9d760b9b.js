
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as e,d as a,z as l,r as t,bt as s,az as o,f as i,h as n,w as d,bu as u,aE as m,bv as c,b as p,D as v,R as b,by as r}from"./index.8b097f1d.js";import{E as f}from"./el-input-number.04bef713.js";import"./el-input.d32b4523.js";import{E as k}from"./el-switch.294472bf.js";import"./event.d298a7ab.js";import"./index.358b0b8c.js";import"./validator.5a52a3fb.js";const x={class:"block"},j={class:"block"},E={class:"block"},h=b("进入同级路由页面"),V=b("进入下级路由页面"),A=a({name:"KeepAliveExamplePage"}),D=Object.assign(A,{setup(e){const a=m(),u=l(),b=t(!1),A=t(1);function D(e){let l;switch(e){case 1:l="keepAliveExampleDetail";break;case 2:l="keepAliveExampleNestedDetail"}a.push({name:l})}return s(((e,a)=>{const l=a.matched[e.matched.length-1].components.default.name;b.value&&["keepAliveExampleDetail","keepAliveExampleNestedDetail"].includes(e.name)?u.add(l):u.remove(l)})),(e,a)=>{const l=r,t=k,s=f,u=o,m=c;return p(),i("div",null,[n(l,{title:"页面缓存",content:"除了可以在路由里配置页面是否需要缓存外，你也可以不使用框架提供的方法，而是在页面里自行实现。"}),n(m,null,{default:d((()=>[v("div",x,[n(t,{modelValue:b.value,"onUpdate:modelValue":a[0]||(a[0]=e=>b.value=e),"active-text":"开启缓存","inactive-text":"关闭缓存"},null,8,["modelValue"])]),v("div",j,[n(s,{modelValue:A.value,"onUpdate:modelValue":a[1]||(a[1]=e=>A.value=e)},null,8,["modelValue"])]),v("div",E,[n(u,{onClick:a[2]||(a[2]=e=>D(1))},{default:d((()=>[h])),_:1}),n(u,{onClick:a[3]||(a[3]=e=>D(2))},{default:d((()=>[V])),_:1})])])),_:1})])}}});"function"==typeof u&&u(D);const _=e(D,[["__scopeId","data-v-73abe561"]]);export{_ as default};
