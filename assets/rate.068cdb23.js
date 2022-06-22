
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,u=(a,l,o)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[l]=o;import{U as s,W as d,aQ as i,c6 as n,V as v,c7 as c,ah as m,d as f,P as p,bu as b,bw as y,b0 as h,u as V,a$ as x,r as w,c as g,bt as j,aS as S,A as O,b as k,f as C,M as T,Q as I,n as H,i as M,h as P,w as _,e as A,I as B,m as N,k as U,E as $,L as D,_ as E,aK as L,a6 as W,q,v as F,bl as K,H as Q,bL as z,bO as R}from"./index.6dffb2c9.js";import X from"./alert.b40c4dad.js";import{i as G}from"./validator2.83701729.js";import{C as J,U as Y}from"./event2.c09267d7.js";import"./el-alert.526805b9.js";import"./el-link.d14a435d.js";const Z=s({modelValue:{type:Number,default:0},id:{type:String,default:void 0},lowThreshold:{type:Number,default:2},highThreshold:{type:Number,default:4},max:{type:Number,default:5},colors:{type:d([Array,Object]),default:()=>i(["","",""])},voidColor:{type:String,default:""},disabledVoidColor:{type:String,default:""},icons:{type:d([Array,Object]),default:()=>[n,n,n]},voidIcon:{type:v,default:()=>c},disabledVoidIcon:{type:v,default:()=>n},disabled:{type:Boolean},allowHalf:{type:Boolean},showText:{type:Boolean},showScore:{type:Boolean},textColor:{type:String,default:""},texts:{type:d(Array),default:()=>i(["Extremely bad","Disappointed","Fair","Satisfied","Surprise"])},scoreTemplate:{type:String,default:"{value}"},size:{type:String,validator:G},label:{type:String,default:void 0}}),ee={[J]:e=>m(e),[Y]:e=>m(e)},ae=["id","aria-label","aria-labelledby","aria-valuenow","aria-valuetext","aria-valuemax"],le=["onMousemove","onClick"],oe=f((te=((e,a)=>{for(var l in a||(a={}))t.call(a,l)&&u(e,l,a[l]);if(o)for(var l of o(a))r.call(a,l)&&u(e,l,a[l]);return e})({},{name:"ElRate"}),re={props:Z,emits:ee,setup(e,{expose:a,emit:l}){const o=e;function t(e,a){const l=e=>S(e),o=Object.keys(a).map((e=>+e)).filter((o=>{const t=a[o];return l(t)&&t.excluded?e<o:e<=o})).sort(((e,a)=>e-a)),t=a[o[0]];return l(t)&&t.value||t}const r=p(b,void 0),u=p(y,void 0),s=h(),d=V("rate"),{inputId:i,isLabeledByFormItem:n}=x(o,{formItemContext:u}),v=w(o.modelValue),c=w(-1),m=w(!0),f=g((()=>[d.b(),d.m(s.value)])),E=g((()=>o.disabled||(null==r?void 0:r.disabled))),q=g((()=>d.cssVarBlock({"void-color":o.voidColor,"disabled-void-color":o.disabledVoidColor,"fill-color":z.value}))),F=g((()=>{let e="";return o.showScore?e=o.scoreTemplate.replace(/\{\s*value\s*\}/,E.value?`${o.modelValue}`:`${v.value}`):o.showText&&(e=o.texts[Math.ceil(v.value)-1]),e})),K=g((()=>100*o.modelValue-100*Math.floor(o.modelValue))),Q=g((()=>j(o.colors)?{[o.lowThreshold]:o.colors[0],[o.highThreshold]:{value:o.colors[1],excluded:!0},[o.max]:o.colors[2]}:o.colors)),z=g((()=>{const e=t(v.value,Q.value);return S(e)?"":e})),R=g((()=>{let e="";return E.value?e=`${K.value}%`:o.allowHalf&&(e="50%"),{color:z.value,width:e}})),X=g((()=>j(o.icons)?{[o.lowThreshold]:o.icons[0],[o.highThreshold]:{value:o.icons[1],excluded:!0},[o.max]:o.icons[2]}:o.icons)),G=g((()=>t(o.modelValue,X.value))),J=g((()=>E.value?o.disabledVoidIcon:o.voidIcon)),Z=g((()=>t(v.value,X.value))),ee=g((()=>{const e=Array.from({length:o.max}),a=v.value;return e.fill(Z.value,0,a),e.fill(J.value,a,o.max),e}));function oe(e){const a=E.value&&K.value>0&&e-1<o.modelValue&&e>o.modelValue,l=o.allowHalf&&m.value&&e-.5<=v.value&&e>v.value;return a||l}function te(e){if(E.value)return;let a=v.value;const t=e.code;return t===L.up||t===L.right?(o.allowHalf?a+=.5:a+=1,e.stopPropagation(),e.preventDefault()):t!==L.left&&t!==L.down||(o.allowHalf?a-=.5:a-=1,e.stopPropagation(),e.preventDefault()),a=a<0?0:a,a=a>o.max?o.max:a,l(Y,a),l("change",a),a}function re(e,a){if(!E.value){if(o.allowHalf){let l=a.target;W(l,d.e("item"))&&(l=l.querySelector(`.${d.e("icon")}`)),(0===l.clientWidth||W(l,d.e("decimal")))&&(l=l.parentNode),m.value=2*a.offsetX<=l.clientWidth,v.value=m.value?e-.5:e}else v.value=e;c.value=e}}function ue(){E.value||(o.allowHalf&&(m.value=o.modelValue!==Math.floor(o.modelValue)),v.value=o.modelValue,c.value=-1)}return O((()=>o.modelValue),(e=>{v.value=e,m.value=o.modelValue!==Math.floor(o.modelValue)})),o.modelValue||l(Y,0),a({setCurrentValue:re,resetCurrentValue:ue}),(e,a)=>(k(),C("div",{id:M(i),class:H([M(f),M(d).is("disabled",M(E))]),role:"slider","aria-label":M(n)?void 0:e.label||"rating","aria-labelledby":M(n)?M(u).labelId:void 0,"aria-valuenow":v.value,"aria-valuetext":M(F)||void 0,"aria-valuemin":"0","aria-valuemax":e.max,tabindex:"0",style:U(M(q)),onKeydown:te},[(k(!0),C(T,null,I(e.max,((e,a)=>(k(),C("span",{key:a,class:H(M(d).e("item")),onMousemove:a=>re(e,a),onMouseleave:ue,onClick:a=>{return t=e,void(E.value||(o.allowHalf&&m.value?(l(Y,v.value),o.modelValue!==v.value&&l("change",v.value)):(l(Y,t),o.modelValue!==t&&l("change",t))));var t}},[P(M($),{class:H([M(d).e("icon"),{hover:c.value===e},M(d).is("active",e<=v.value)])},{default:_((()=>[oe(e)?N("v-if",!0):(k(),A(B(M(ee)[e-1]),{key:0})),oe(e)?(k(),A(M($),{key:1,style:U(M(R)),class:H([M(d).e("icon"),M(d).e("decimal")])},{default:_((()=>[(k(),A(B(M(G))))])),_:1},8,["style","class"])):N("v-if",!0)])),_:2},1032,["class"])],42,le)))),128)),e.showText||e.showScore?(k(),C("span",{key:0,class:H(M(d).e("text"))},D(M(F)),3)):N("v-if",!0)],46,ae))}},a(te,l(re))));var te,re;const ue=q(E(oe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/rate/src/rate.vue"]]));const se={components:{Alert:X},data:()=>({value1:null,value2:null,value3:3.7})};"function"==typeof K&&K(se);var de=F(se,[["render",function(e,a,l,o,t,r){const u=Q("Alert"),s=R,d=ue,i=z;return k(),C("div",null,[P(u),P(s,{title:"评分"}),P(i,{title:"基础用法",class:"demo"},{default:_((()=>[P(d,{modelValue:t.value1,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value1=e)},null,8,["modelValue"])])),_:1}),P(i,{title:"辅助文字",class:"demo"},{default:_((()=>[P(d,{modelValue:t.value2,"onUpdate:modelValue":a[1]||(a[1]=e=>t.value2=e),"show-text":"",texts:["极差","差","一般","好","极好"]},null,8,["modelValue"])])),_:1}),P(i,{title:"只读",class:"demo"},{default:_((()=>[P(d,{modelValue:t.value3,"onUpdate:modelValue":a[2]||(a[2]=e=>t.value3=e),disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},null,8,["modelValue"])])),_:1})])}]]);export{de as default};
