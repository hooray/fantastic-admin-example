
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(s,a,t)=>a in s?e(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t;import{U as l,V as o,d as c,u as f,b as d,f as p,e as u,w as b,I as y,i as m,E as k,m as v,n as g,g as O,_ as h,q as j}from"./index.6dffb2c9.js";const w=l({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:o,default:""}}),E={click:e=>e instanceof MouseEvent},P=["href"],$=c((_=((e,s)=>{for(var a in s||(s={}))n.call(s,a)&&i(e,a,s[a]);if(t)for(var a of t(s))r.call(s,a)&&i(e,a,s[a]);return e})({},{name:"ElLink"}),s(_,a({props:w,emits:E,setup(e,{emit:s}){const a=e,t=f("link");function n(e){a.disabled||s("click",e)}return(e,s)=>(d(),p("a",{class:g([m(t).b(),m(t).m(e.type),m(t).is("disabled",e.disabled),m(t).is("underline",e.underline&&!e.disabled)]),href:e.disabled||!e.href?void 0:e.href,onClick:n},[e.icon?(d(),u(m(k),{key:0},{default:b((()=>[(d(),u(y(e.icon)))])),_:1})):v("v-if",!0),e.$slots.default?(d(),p("span",{key:1,class:g(m(t).e("inner"))},[O(e.$slots,"default")],2)):v("v-if",!0),e.$slots.icon?O(e.$slots,"icon",{key:2}):v("v-if",!0)],10,P))}}))));var _;const S=j(h($,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]));export{S as E};
