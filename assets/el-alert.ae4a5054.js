
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,s=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(s,t,a)=>t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a;import{U as i,bc as n,bd as c,d as p,aY as f,u as d,r as u,c as b,b as y,e as v,w as m,aq as g,ar as k,B as O,i as w,E as h,n as j,I as S,m as _,f as x,g as E,$ as P,L as $,h as B,M as I,T,_ as C,be as q,q as M}from"./index.d2f116bb.js";const A=i({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:n(c),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:["light","dark"],default:"light"}}),D={close:e=>e instanceof MouseEvent},L=p((U=((e,s)=>{for(var t in s||(s={}))l.call(s,t)&&r(e,t,s[t]);if(a)for(var t of a(s))o.call(s,t)&&r(e,t,s[t]);return e})({},{name:"ElAlert"}),s(U,t({props:A,emits:D,setup(e,{emit:s}){const t=e,{Close:a}=q,l=f(),o=d("alert"),r=u(!0),i=b((()=>c[t.type])),n=b((()=>[o.e("icon"),{[o.is("big")]:!!t.description||!!l.default}])),p=b((()=>t.description||{[o.is("bold")]:l.default})),C=e=>{r.value=!1,s("close",e)};return(e,s)=>(y(),v(T,{name:w(o).b("fade"),persisted:""},{default:m((()=>[g(O("div",{class:j([w(o).b(),w(o).m(e.type),w(o).is("center",e.center),w(o).is(e.effect)]),role:"alert"},[e.showIcon&&w(i)?(y(),v(w(h),{key:0,class:j(w(n))},{default:m((()=>[(y(),v(S(w(i))))])),_:1},8,["class"])):_("v-if",!0),O("div",{class:j(w(o).e("content"))},[e.title||e.$slots.title?(y(),x("span",{key:0,class:j([w(o).e("title"),w(p)])},[E(e.$slots,"title",{},(()=>[P($(e.title),1)]))],2)):_("v-if",!0),e.$slots.default||e.description?(y(),x("p",{key:1,class:j(w(o).e("description"))},[E(e.$slots,"default",{},(()=>[P($(e.description),1)]))],2)):_("v-if",!0),e.closable?(y(),x(I,{key:2},[e.closeText?(y(),x("div",{key:0,class:j([w(o).e("close-btn"),w(o).is("customed")]),onClick:C},$(e.closeText),3)):(y(),v(w(h),{key:1,class:j(w(o).e("close-btn")),onClick:C},{default:m((()=>[B(w(a))])),_:1},8,["class"]))],64)):_("v-if",!0)],2)],2),[[k,r.value]])])),_:3},8,["name"]))}}))));var U;const Y=M(C(L,[["__file","/home/runner/work/element-plus/element-plus/packages/components/alert/src/alert.vue"]]));export{Y as E};