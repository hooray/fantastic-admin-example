
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as e,d as a,z as l,r as t,bt as s,az as o,f as i,h as n,w as c,bu as d,aE as u,bv as m,b as p,D as v,R as r,by as b}from"./index.cc47405f.js";import{E as f}from"./el-input-number.4c96ea72.js";import"./el-input.3ca4a104.js";import{E as k}from"./el-switch.31628084.js";import"./event.d298a7ab.js";import"./index.358b0b8c.js";import"./validator.7e88199f.js";const x={class:"block"},j={class:"block"},E={class:"block"},h=r("进入同级路由页面"),V=r("进入下级路由页面"),A=a({name:"KeepAliveExamplePage"}),D=Object.assign(A,{setup(e){const a=u(),d=l(),r=t(!1),A=t(1);function D(e){let l;switch(e){case 1:l="keepAliveExampleDetail";break;case 2:l="keepAliveExampleNestedDetail"}a.push({name:l})}return s(((e,a)=>{const l=a.matched[e.matched.length-1].components.default.name;r.value&&["keepAliveExampleDetail","keepAliveExampleNestedDetail"].includes(e.name)?d.add(l):d.remove(l)})),(e,a)=>{const l=b,t=k,s=f,d=o,u=m;return p(),i("div",null,[n(l,{title:"页面缓存",content:"除了可以在路由里配置页面是否需要缓存外，你也可以不使用框架提供的方法，而是在页面里自行实现。"}),n(u,null,{default:c((()=>[v("div",x,[n(t,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=e=>r.value=e),"active-text":"开启缓存","inactive-text":"关闭缓存"},null,8,["modelValue"])]),v("div",j,[n(s,{modelValue:A.value,"onUpdate:modelValue":a[1]||(a[1]=e=>A.value=e)},null,8,["modelValue"])]),v("div",E,[n(d,{onClick:a[2]||(a[2]=e=>D(1))},{default:c((()=>[h])),_:1}),n(d,{onClick:a[3]||(a[3]=e=>D(2))},{default:c((()=>[V])),_:1})])])),_:1})])}}});"function"==typeof d&&d(D);const _=e(D,[["__scopeId","data-v-73abe561"]]);export{_ as default};
