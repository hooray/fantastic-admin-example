
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,a=(t,s,n)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,r=(e,t)=>{for(var s in t||(t={}))o.call(t,s)&&a(e,s,t[s]);if(n)for(var s of n(t))l.call(t,s)&&a(e,s,t[s]);return e},i=(e,n)=>t(e,s(n));import{Y as u,u as d,r as c,aO as p,dB as m,ab as b,ad as v,w as f,aq as g,ar as y,h as w,T as x,a5 as h,ak as k,aC as C,af as _,a7 as j,a9 as A,aS as $,dV as O,a4 as L,d as P,b as V,f as B,dW as E,g as T,x as I,aD as S,aw as N,bN as D,bl as q,bL as z,cf as M,i as R,C as H,M as U,$ as W,az as Y,bO as Z,D as F}from"./index.4888643e.js";/* empty css               *//* empty css                       *//* empty css                        *//* empty css                   */import{E as G,a as J}from"./index.8f1fd86e.js";import{E as K}from"./index.8350a019.js";import"./event.6c7ea317.js";let Q;const X=function(e={}){if(!h)return;const t=ee(e);if(t.fullscreen&&Q)return Q;const s=function(e){let t;const s=d("loading"),n=c(!1),o=p(i(r({},e),{originalPosition:"",originalOverflow:"",visible:!1}));function l(){const e=o.parent;if(!e.vLoadingAddClassList){let t=e.getAttribute("loading-number");t=Number.parseInt(t)-1,t?e.setAttribute("loading-number",t.toString()):(b(e,s.bm("parent","relative")),e.removeAttribute("loading-number")),b(e,s.bm("parent","hidden"))}a(),k.unmount()}function a(){var e,t;null==(t=null==(e=C.$el)?void 0:e.parentNode)||t.removeChild(C.$el)}function h(){n.value&&(n.value=!1,l())}const k=m({name:"ElLoading",setup:()=>()=>{const e=o.spinner||o.svg,t=v("svg",r({class:"circular",viewBox:o.svgViewBox?o.svgViewBox:"25 25 50 50"},e?{innerHTML:e}:{}),[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none"})]),n=o.text?v("p",{class:s.b("text")},[o.text]):void 0;return v(x,{name:s.b("fade"),onAfterLeave:h},{default:f((()=>[g(w("div",{style:{backgroundColor:o.background||""},class:[s.b("mask"),o.customClass,o.fullscreen?"is-fullscreen":""]},[v("div",{class:s.b("spinner")},[t,n])]),[[y,o.visible]])]))})}}),C=k.mount(document.createElement("div"));return i(r({},u(o)),{setText:function(e){o.text=e},removeElLoadingChild:a,close:function(){var s;e.beforeClose&&!e.beforeClose()||(o.parent.vLoadingAddClassList=void 0,n.value=!0,clearTimeout(t),t=window.setTimeout((()=>{n.value&&(n.value=!1,l())}),400),o.visible=!1,null==(s=e.closed)||s.call(e))},handleAfterLeave:h,vm:C,get $el(){return C.$el}})}(i(r({},t),{closed:()=>{var e;null==(e=t.closed)||e.call(t),t.fullscreen&&(Q=void 0)}}));te(t,t.parent,s),se(t,t.parent,s),t.parent.vLoadingAddClassList=()=>se(t,t.parent,s);let n=t.parent.getAttribute("loading-number");return n=n?`${Number.parseInt(n)+1}`:"1",t.parent.setAttribute("loading-number",n),t.parent.appendChild(s.$el),k((()=>s.visible.value=t.visible)),t.fullscreen&&(Q=s),s},ee=e=>{var t,s,n,o;let l;return l=C(e.target)?null!=(t=document.querySelector(e.target))?t:document.body:e.target||document.body,{parent:l===document.body||e.body?document.body:l,background:e.background||"",svg:e.svg||"",svgViewBox:e.svgViewBox||"",spinner:e.spinner||!1,text:e.text||"",fullscreen:l===document.body&&(null==(s=e.fullscreen)||s),lock:null!=(n=e.lock)&&n,customClass:e.customClass||"",visible:null==(o=e.visible)||o,target:l}},te=async(e,t,s)=>{const{nextZIndex:n}=_(),o={};if(e.fullscreen)s.originalPosition.value=j(document.body,"position"),s.originalOverflow.value=j(document.body,"overflow"),o.zIndex=n();else if(e.parent===document.body){s.originalPosition.value=j(document.body,"position"),await k();for(const t of["top","left"]){const s="top"===t?"scrollTop":"scrollLeft";o[t]=e.target.getBoundingClientRect()[t]+document.body[s]+document.documentElement[s]-Number.parseInt(j(document.body,`margin-${t}`),10)+"px"}for(const t of["height","width"])o[t]=`${e.target.getBoundingClientRect()[t]}px`}else s.originalPosition.value=j(t,"position");for(const[l,a]of Object.entries(o))s.$el.style[l]=a},se=(e,t,s)=>{const n=d("loading");"absolute"!==s.originalPosition.value&&"fixed"!==s.originalPosition.value?A(t,n.bm("parent","relative")):b(t,n.bm("parent","relative")),e.fullscreen&&e.lock?A(t,n.bm("parent","hidden")):b(t,n.bm("parent","hidden"))},ne=Symbol("ElLoading"),oe=(e,t)=>{var s,n,o,l;const a=t.instance,r=e=>$(t.value)?t.value[e]:void 0,i=t=>(e=>{const t=C(e)&&(null==a?void 0:a[e])||e;return t?c(t):t})(r(t)||e.getAttribute(`element-loading-${O(t)}`)),u=null!=(s=r("fullscreen"))?s:t.modifiers.fullscreen,d={text:i("text"),svg:i("svg"),svgViewBox:i("svgViewBox"),spinner:i("spinner"),background:i("background"),customClass:i("customClass"),fullscreen:u,target:null!=(n=r("target"))?n:u?void 0:e,body:null!=(o=r("body"))?o:t.modifiers.body,lock:null!=(l=r("lock"))?l:t.modifiers.lock};e[ne]={options:d,instance:X(d)}},le={mounted(e,t){t.value&&oe(e,t)},updated(e,t){const s=e[ne];t.oldValue!==t.value&&(t.value&&!t.oldValue?oe(e,t):t.value&&t.oldValue?$(t.value)&&((e,t)=>{for(const s of Object.keys(t))L(t[s])&&(t[s].value=e[s])})(t.value,s.options):null==s||s.instance.close())},unmounted(e){var t;null==(t=e[ne])||t.instance.close()}},ae={install(e){e.directive("loading",le),e.config.globalProperties.$loading=X},directive:le,service:X},re=P({name:"AuthAll"}),ie=Object.assign(re,{props:{value:{type:Array,default:()=>[]}},setup(e){const t=e;return(e,s)=>(V(),B("div",null,[E().authAll(t.value)?T(e.$slots,"default",{key:0}):T(e.$slots,"no-auth",{key:1})]))}}),ue=P({name:"Auth"}),de=Object.assign(ue,{props:{value:{type:[String,Array],default:""}},setup(e){const t=e;return(e,s)=>(V(),B("div",null,[E().auth(t.value)?T(e.$slots,"default",{key:0}):T(e.$slots,"no-auth",{key:1})]))}});const ce={key:0},pe={key:1},me=H("h3",null,"切换帐号",-1),be=H("h3",null,"帐号权限",-1),ve=H("h3",null,"鉴权组件（请对照代码查看）",-1),fe=W("你有 permission.browse 权限"),ge=W("你没有 permission.browse 权限"),ye=W("你有 permission.create 权限"),we=W("你没有 permission.create 权限"),xe=W("你有 permission.browse 或 permission.create 权限"),he=W("你没有 permission.browse 或 permission.create 权限"),ke=W("你有 permission.browse 和 permission.create 权限"),Ce=W("你没有 permission.browse 和 permission.create 权限"),_e=H("h3",null,"鉴权指令（请对照代码查看）",-1),je=[W(" 如果你有 permission.browse 权限则能看到这句话 ")],Ae=[W(" 如果你有 permission.create 权限则能看到这句话 ")],$e=[W(" 如果你有 permission.browse 或 permission.create 权限则能看到这句话 ")],Oe=[W(" 如果你有 permission.browse 和 permission.create 权限则能看到这句话 ")],Le=H("h3",null,"鉴权函数（请对照代码查看）",-1),Pe=W("校验 permission.browse 权限"),Ve=W("校验 permission.create 权限"),Be=W("校验 permission.browse 或 permission.create 权限"),Ee=W("校验 permission.browse 和 permission.create 权限"),Te={__name:"index",setup(e){const{proxy:t}=F(),s=I(),n=S();function o(e){ae.service({lock:!0,text:"帐号切换中",background:"rgba(0, 0, 0, 0.7)"}),n.login({account:e,password:""}).then((()=>{setTimeout((()=>{location.reload()}),1e3)}))}function l(e){t.$auth(e)?Y.success("校验通过"):Y.error("校验不通过")}return(e,a)=>{const r=Z,i=G,u=J,d=K,c=de,p=ie,m=N,b=D,v=z,y=M("auth"),x=M("auth-all");return V(),B("div",null,[w(r,{title:"权限验证"}),w(v,null,{default:f((()=>[R(s).app.enablePermission?(V(),B("div",pe,[me,w(u,{modelValue:R(n).account,"onUpdate:modelValue":a[0]||(a[0]=e=>R(n).account=e),onChange:o},{default:f((()=>[w(i,{label:"admin"}),w(i,{label:"test"})])),_:1},8,["modelValue"]),be,H("div",null,U(R(n).permissions),1),ve,H("div",null,[w(c,{value:"permission.browse",style:{"margin-bottom":"10px"}},{"no-auth":f((()=>[w(d,{type:"danger"},{default:f((()=>[ge])),_:1})])),default:f((()=>[w(d,null,{default:f((()=>[fe])),_:1})])),_:1}),w(c,{value:"permission.create",style:{"margin-bottom":"10px"}},{"no-auth":f((()=>[w(d,{type:"danger"},{default:f((()=>[we])),_:1})])),default:f((()=>[w(d,null,{default:f((()=>[ye])),_:1})])),_:1}),w(c,{value:["permission.browse","permission.create"],style:{"margin-bottom":"10px"}},{"no-auth":f((()=>[w(d,{type:"danger"},{default:f((()=>[he])),_:1})])),default:f((()=>[w(d,null,{default:f((()=>[xe])),_:1})])),_:1},8,["value"]),w(p,{value:["permission.browse","permission.create"]},{"no-auth":f((()=>[w(d,{type:"danger"},{default:f((()=>[Ce])),_:1})])),default:f((()=>[w(d,null,{default:f((()=>[ke])),_:1})])),_:1},8,["value"])]),_e,H("div",null,[g((V(),B("div",null,je)),[[y,"permission.browse"]]),g((V(),B("div",null,Ae)),[[y,"permission.create"]]),g((V(),B("div",null,$e)),[[y,["permission.browse","permission.create"]]]),g((V(),B("div",null,Oe)),[[x,["permission.browse","permission.create"]]])]),Le,H("div",null,[w(b,{style:{display:"block","margin-bottom":"10px"}},{default:f((()=>[w(m,{onClick:a[1]||(a[1]=e=>l("permission.browse"))},{default:f((()=>[Pe])),_:1}),w(m,{onClick:a[2]||(a[2]=e=>l("permission.create"))},{default:f((()=>[Ve])),_:1})])),_:1}),w(b,null,{default:f((()=>[w(m,{onClick:a[3]||(a[3]=e=>l(["permission.browse","permission.create"]))},{default:f((()=>[Be])),_:1}),w(m,{onClick:a[4]||(a[4]=e=>{return s=["permission.browse","permission.create"],void(t.$authAll(s)?Y.success("校验通过"):Y.error("校验不通过"));var s})},{default:f((()=>[Ee])),_:1})])),_:1})])])):(V(),B("div",ce,"请到 seeting.js 里打开权限功能，再进入该页面查看演示"))])),_:1})])}}};"function"==typeof q&&q(Te);export{Te as default};