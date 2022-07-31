
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{W as e,X as s,d as a,u as n,b as i,f as l,e as t,w as o,F as d,i as f,E as r,m as c,n as u,g as p,_ as k,q as m}from"./index.cc47405f.js";const y=e({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:s,default:""}}),b=["href"];const v=m(k(a({name:"ElLink",props:y,emits:{click:e=>e instanceof MouseEvent},setup(e,{emit:s}){const a=e,k=n("link");function m(e){a.disabled||s("click",e)}return(e,s)=>(i(),l("a",{class:u([f(k).b(),f(k).m(e.type),f(k).is("disabled",e.disabled),f(k).is("underline",e.underline&&!e.disabled)]),href:e.disabled||!e.href?void 0:e.href,onClick:m},[e.icon?(i(),t(f(r),{key:0},{default:o((()=>[(i(),t(d(e.icon)))])),_:1})):c("v-if",!0),e.$slots.default?(i(),l("span",{key:1,class:u(f(k).e("inner"))},[p(e.$slots,"default")],2)):c("v-if",!0),e.$slots.icon?p(e.$slots,"icon",{key:2}):c("v-if",!0)],10,b))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]));export{v as E};
