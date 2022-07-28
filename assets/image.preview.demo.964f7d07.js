
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as t,v as e,c as s,b as i,e as a,w as r,C as n,h as l,k as c,i as d,S as o,E as h,dM as u,f as p,bl as g,bL as f,bO as w}from"./index.7e6c6c91.js";const v={class:"image-slot"},m=t({name:"ImagePreview"});var y=e(Object.assign(m,{props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(t){const e=t,p=s((()=>"string"==typeof e.width?e.width:`${e.width}px`)),g=s((()=>"string"==typeof e.height?e.height:`${e.height}px`));return(e,s)=>{const f=o,w=h,m=u;return i(),a(m,{src:t.src,fit:"cover",style:c(`width:${d(p)};height:${d(g)};`),"preview-src-list":[t.src]},{error:r((()=>[n("div",v,[l(w,null,{default:r((()=>[l(f,{name:"image-load-fail"})])),_:1})])])),_:1},8,["src","style","preview-src-list"])}}}),[["__scopeId","data-v-1cef01d2"]]);const b={};"function"==typeof g&&g(b);var x=e(b,[["render",function(t,e){const s=w,a=y,c=f;return i(),p("div",null,[l(s,{title:"图片预览",content:"ImagePreview"}),l(c,null,{default:r((()=>[n("div",null,[l(a,{src:"https://hooray.gitee.io/fantastic-admin/logo.png",width:200},null,8,["src"])])])),_:1}),l(c,{title:"图片加载失败时"},{default:r((()=>[n("div",null,[l(a,{src:"http://www.baidu.com",width:"100px",height:"100px"})])])),_:1})])}]]);export{x as default};
