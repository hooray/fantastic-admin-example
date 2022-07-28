
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{V as e,bc as s,bd as t,d as a,aZ as l,u as i,r as o,c,b as n,e as r,w as d,ar as f,as as p,H as u,i as y,E as m,n as b,I as v,m as k,f as g,g as h,$ as _,M as x,h as S,N as $,T as w,_ as E,be as T,q as B}from"./index.84c9bfd8.js";const C=B(E(a({name:"ElAlert",props:e({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:s(t),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:["light","dark"],default:"light"}}),emits:{close:e=>e instanceof MouseEvent},setup(e,{emit:s}){const a=e,{Close:E}=T,B=l(),C=i("alert"),I=o(!0),M=c((()=>t[a.type])),j=c((()=>[C.e("icon"),{[C.is("big")]:!!a.description||!!B.default}])),q=c((()=>a.description||{[C.is("bold")]:B.default})),A=e=>{I.value=!1,s("close",e)};return(e,s)=>(n(),r(w,{name:y(C).b("fade"),persisted:""},{default:d((()=>[f(u("div",{class:b([y(C).b(),y(C).m(e.type),y(C).is("center",e.center),y(C).is(e.effect)]),role:"alert"},[e.showIcon&&y(M)?(n(),r(y(m),{key:0,class:b(y(j))},{default:d((()=>[(n(),r(v(y(M))))])),_:1},8,["class"])):k("v-if",!0),u("div",{class:b(y(C).e("content"))},[e.title||e.$slots.title?(n(),g("span",{key:0,class:b([y(C).e("title"),y(q)])},[h(e.$slots,"title",{},(()=>[_(x(e.title),1)]))],2)):k("v-if",!0),e.$slots.default||e.description?(n(),g("p",{key:1,class:b(y(C).e("description"))},[h(e.$slots,"default",{},(()=>[_(x(e.description),1)]))],2)):k("v-if",!0),e.closable?(n(),g($,{key:2},[e.closeText?(n(),g("div",{key:0,class:b([y(C).e("close-btn"),y(C).is("customed")]),onClick:A},x(e.closeText),3)):(n(),r(y(m),{key:1,class:b(y(C).e("close-btn")),onClick:A},{default:d((()=>[S(y(E))])),_:1},8,["class"]))],64)):k("v-if",!0)],2)],2),[[p,I.value]])])),_:3},8,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/alert/src/alert.vue"]]));export{C as E};
