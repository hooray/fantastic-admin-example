
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(s,a,t)=>a in s?e(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t;import{V as r,aA as c,d as i,b0 as p,u,c as f,b,f as d,C as m,g as y,n as g,i as k,e as v,w as C,h as O,an as h,l as j,E as w,m as E,k as _,T as P,_ as S,q as B}from"./index.4888643e.js";const T=r({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:c,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),$={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},x=i((z=((e,s)=>{for(var a in s||(s={}))o.call(s,a)&&n(e,a,s[a]);if(t)for(var a of t(s))l.call(s,a)&&n(e,a,s[a]);return e})({},{name:"ElTag"}),s(z,a({props:T,emits:$,setup(e,{emit:s}){const a=e,t=p(),o=u("tag"),l=f((()=>{const{type:e,hit:s,effect:l,closable:n,round:r}=a;return[o.b(),o.is("closable",n),o.m(e),o.m(t.value),o.m(l),o.is("hit",s),o.is("round",r)]})),n=e=>{s("close",e)},r=e=>{s("click",e)};return(e,s)=>e.disableTransitions?(b(),d("span",{key:0,class:g(k(l)),style:_({backgroundColor:e.color}),onClick:r},[m("span",{class:g(k(o).e("content"))},[y(e.$slots,"default")],2),e.closable?(b(),v(k(w),{key:0,class:g(k(o).e("close")),onClick:j(n,["stop"])},{default:C((()=>[O(k(h))])),_:1},8,["class","onClick"])):E("v-if",!0)],6)):(b(),v(P,{key:1,name:`${k(o).namespace.value}-zoom-in-center`,appear:""},{default:C((()=>[m("span",{class:g(k(l)),style:_({backgroundColor:e.color}),onClick:r},[m("span",{class:g(k(o).e("content"))},[y(e.$slots,"default")],2),e.closable?(b(),v(k(w),{key:0,class:g(k(o).e("close")),onClick:j(n,["stop"])},{default:C((()=>[O(k(h))])),_:1},8,["class","onClick"])):E("v-if",!0)],6)])),_:3},8,["name"]))}}))));var z;const M=B(S(x,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]));export{M as E,T as t};
