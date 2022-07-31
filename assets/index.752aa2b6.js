
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{W as s,aA as e,d as a,b3 as l,u as o,c as n,b as t,f as c,D as i,g as r,n as u,i as p,e as f,w as d,h as k,ao as m,l as g,E as b,m as y,k as v,T as C,_ as h,q as _}from"./index.cc47405f.js";const E=s({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:e,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean});const B=_(h(a({name:"ElTag",props:E,emits:{close:s=>s instanceof MouseEvent,click:s=>s instanceof MouseEvent},setup(s,{emit:e}){const a=s,h=l(),_=o("tag"),E=n((()=>{const{type:s,hit:e,effect:l,closable:o,round:n}=a;return[_.b(),_.is("closable",o),_.m(s),_.m(h.value),_.m(l),_.is("hit",e),_.is("round",n)]})),B=s=>{e("close",s)},S=s=>{e("click",s)};return(s,e)=>s.disableTransitions?(t(),c("span",{key:0,class:u(p(E)),style:v({backgroundColor:s.color}),onClick:S},[i("span",{class:u(p(_).e("content"))},[r(s.$slots,"default")],2),s.closable?(t(),f(p(b),{key:0,class:u(p(_).e("close")),onClick:g(B,["stop"])},{default:d((()=>[k(p(m))])),_:1},8,["class","onClick"])):y("v-if",!0)],6)):(t(),f(C,{key:1,name:`${p(_).namespace.value}-zoom-in-center`,appear:""},{default:d((()=>[i("span",{class:u(p(E)),style:v({backgroundColor:s.color}),onClick:S},[i("span",{class:u(p(_).e("content"))},[r(s.$slots,"default")],2),s.closable?(t(),f(p(b),{key:0,class:u(p(_).e("close")),onClick:g(B,["stop"])},{default:d((()=>[k(p(m))])),_:1},8,["class","onClick"])):y("v-if",!0)],6)])),_:3},8,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]));export{B as E,E as t};
