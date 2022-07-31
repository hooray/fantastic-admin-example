
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{W as e,be as s,bf as t,d as a,a$ as l,u as i,r as o,c,b as n,e as r,w as d,ar as f,as as p,D as u,i as y,E as m,n as v,F as b,m as g,f as k,g as h,R as _,G as x,h as S,H as $,T as w,_ as E,bg as T,q as B}from"./index.cc47405f.js";const C=B(E(a({name:"ElAlert",props:e({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:s(t),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:["light","dark"],default:"light"}}),emits:{close:e=>e instanceof MouseEvent},setup(e,{emit:s}){const a=e,{Close:E}=T,B=l(),C=i("alert"),I=o(!0),j=c((()=>t[a.type])),q=c((()=>[C.e("icon"),{[C.is("big")]:!!a.description||!!B.default}])),A=c((()=>a.description||{[C.is("bold")]:B.default})),D=e=>{I.value=!1,s("close",e)};return(e,s)=>(n(),r(w,{name:y(C).b("fade"),persisted:""},{default:d((()=>[f(u("div",{class:v([y(C).b(),y(C).m(e.type),y(C).is("center",e.center),y(C).is(e.effect)]),role:"alert"},[e.showIcon&&y(j)?(n(),r(y(m),{key:0,class:v(y(q))},{default:d((()=>[(n(),r(b(y(j))))])),_:1},8,["class"])):g("v-if",!0),u("div",{class:v(y(C).e("content"))},[e.title||e.$slots.title?(n(),k("span",{key:0,class:v([y(C).e("title"),y(A)])},[h(e.$slots,"title",{},(()=>[_(x(e.title),1)]))],2)):g("v-if",!0),e.$slots.default||e.description?(n(),k("p",{key:1,class:v(y(C).e("description"))},[h(e.$slots,"default",{},(()=>[_(x(e.description),1)]))],2)):g("v-if",!0),e.closable?(n(),k($,{key:2},[e.closeText?(n(),k("div",{key:0,class:v([y(C).e("close-btn"),y(C).is("customed")]),onClick:D},x(e.closeText),3)):(n(),r(y(m),{key:1,class:v(y(C).e("close-btn")),onClick:D},{default:d((()=>[S(y(E))])),_:1},8,["class"]))],64)):g("v-if",!0)],2)],2),[[p,I.value]])])),_:3},8,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/alert/src/alert.vue"]]));export{C as E};
