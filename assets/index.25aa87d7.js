
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{u as e,r as s,aP as t,dE as n,a0 as o,ae as l,w as a,ar as i,as as r,h as u,T as d,ac as c,a6 as m,al as p,aC as b,ag as v,a8 as f,aa as g,aV as y,a4 as w,dY as x,d as h,b as k,f as C,g as _,dZ as A,y as $,aF as j,az as L,bx as V,bu as B,bv as P,cg as E,i as T,D as O,G as I,R as N,ax as S,by as R}from"./index.8b097f1d.js";/* empty css               *//* empty css                       *//* empty css                        *//* empty css                   */import{E as z,a as Z}from"./index.5efb4453.js";import{E as q}from"./index.582372db.js";import"./event.d298a7ab.js";let D;const F=function(b={}){if(!m)return;const v=G(b);if(v.fullscreen&&D)return D;const f=function(m){let p;const b=e("loading"),v=s(!1),f=t({...m,originalPosition:"",originalOverflow:"",visible:!1});function g(){const e=f.parent;if(!e.vLoadingAddClassList){let s=e.getAttribute("loading-number");s=Number.parseInt(s)-1,s?e.setAttribute("loading-number",s.toString()):(c(e,b.bm("parent","relative")),e.removeAttribute("loading-number")),c(e,b.bm("parent","hidden"))}y(),x.unmount()}function y(){var e,s;null==(s=null==(e=h.$el)?void 0:e.parentNode)||s.removeChild(h.$el)}function w(){v.value&&(v.value=!1,g())}const x=n({name:"ElLoading",setup:()=>()=>{const e=f.spinner||f.svg,s=l("svg",{class:"circular",viewBox:f.svgViewBox?f.svgViewBox:"25 25 50 50",...e?{innerHTML:e}:{}},[l("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none"})]),t=f.text?l("p",{class:b.b("text")},[f.text]):void 0;return l(d,{name:b.b("fade"),onAfterLeave:w},{default:a((()=>[i(u("div",{style:{backgroundColor:f.background||""},class:[b.b("mask"),f.customClass,f.fullscreen?"is-fullscreen":""]},[l("div",{class:b.b("spinner")},[s,t])]),[[r,f.visible]])]))})}}),h=x.mount(document.createElement("div"));return{...o(f),setText:function(e){f.text=e},removeElLoadingChild:y,close:function(){var e;m.beforeClose&&!m.beforeClose()||(f.parent.vLoadingAddClassList=void 0,v.value=!0,clearTimeout(p),p=window.setTimeout((()=>{v.value&&(v.value=!1,g())}),400),f.visible=!1,null==(e=m.closed)||e.call(m))},handleAfterLeave:w,vm:h,get $el(){return h.$el}}}({...v,closed:()=>{var e;null==(e=v.closed)||e.call(v),v.fullscreen&&(D=void 0)}});H(v,v.parent,f),M(v,v.parent,f),v.parent.vLoadingAddClassList=()=>M(v,v.parent,f);let g=v.parent.getAttribute("loading-number");return g=g?`${Number.parseInt(g)+1}`:"1",v.parent.setAttribute("loading-number",g),v.parent.appendChild(f.$el),p((()=>f.visible.value=v.visible)),v.fullscreen&&(D=f),f},G=e=>{var s,t,n,o;let l;return l=b(e.target)?null!=(s=document.querySelector(e.target))?s:document.body:e.target||document.body,{parent:l===document.body||e.body?document.body:l,background:e.background||"",svg:e.svg||"",svgViewBox:e.svgViewBox||"",spinner:e.spinner||!1,text:e.text||"",fullscreen:l===document.body&&(null==(t=e.fullscreen)||t),lock:null!=(n=e.lock)&&n,customClass:e.customClass||"",visible:null==(o=e.visible)||o,target:l}},H=async(e,s,t)=>{const{nextZIndex:n}=v(),o={};if(e.fullscreen)t.originalPosition.value=f(document.body,"position"),t.originalOverflow.value=f(document.body,"overflow"),o.zIndex=n();else if(e.parent===document.body){t.originalPosition.value=f(document.body,"position"),await p();for(const s of["top","left"]){const t="top"===s?"scrollTop":"scrollLeft";o[s]=e.target.getBoundingClientRect()[s]+document.body[t]+document.documentElement[t]-Number.parseInt(f(document.body,`margin-${s}`),10)+"px"}for(const s of["height","width"])o[s]=`${e.target.getBoundingClientRect()[s]}px`}else t.originalPosition.value=f(s,"position");for(const[l,a]of Object.entries(o))t.$el.style[l]=a},M=(s,t,n)=>{const o=e("loading");"absolute"!==n.originalPosition.value&&"fixed"!==n.originalPosition.value?g(t,o.bm("parent","relative")):c(t,o.bm("parent","relative")),s.fullscreen&&s.lock?g(t,o.bm("parent","hidden")):c(t,o.bm("parent","hidden"))},U=Symbol("ElLoading"),Y=(e,t)=>{var n,o,l,a;const i=t.instance,r=e=>y(t.value)?t.value[e]:void 0,u=t=>(e=>{const t=b(e)&&(null==i?void 0:i[e])||e;return t?s(t):t})(r(t)||e.getAttribute(`element-loading-${x(t)}`)),d=null!=(n=r("fullscreen"))?n:t.modifiers.fullscreen,c={text:u("text"),svg:u("svg"),svgViewBox:u("svgViewBox"),spinner:u("spinner"),background:u("background"),customClass:u("customClass"),fullscreen:d,target:null!=(o=r("target"))?o:d?void 0:e,body:null!=(l=r("body"))?l:t.modifiers.body,lock:null!=(a=r("lock"))?a:t.modifiers.lock};e[U]={options:c,instance:F(c)}},J={mounted(e,s){s.value&&Y(e,s)},updated(e,s){const t=e[U];s.oldValue!==s.value&&(s.value&&!s.oldValue?Y(e,s):s.value&&s.oldValue?y(s.value)&&((e,s)=>{for(const t of Object.keys(s))w(s[t])&&(s[t].value=e[t])})(s.value,t.options):null==t||t.instance.close())},unmounted(e){var s;null==(s=e[U])||s.instance.close()}},K={install(e){e.directive("loading",J),e.config.globalProperties.$loading=F},directive:J,service:F},Q=h({name:"AuthAll"}),W=Object.assign(Q,{props:{value:{type:Array,default:()=>[]}},setup(e){const s=e;return(e,t)=>(k(),C("div",null,[A().authAll(s.value)?_(e.$slots,"default",{key:0}):_(e.$slots,"no-auth",{key:1})]))}}),X=h({name:"Auth"}),ee=Object.assign(X,{props:{value:{type:[String,Array],default:""}},setup(e){const s=e;return(e,t)=>(k(),C("div",null,[A().auth(s.value)?_(e.$slots,"default",{key:0}):_(e.$slots,"no-auth",{key:1})]))}}),se={key:0},te={key:1},ne=O("h3",null,"切换帐号",-1),oe=O("h3",null,"帐号权限",-1),le=O("h3",null,"鉴权组件（请对照代码查看）",-1),ae=N("你有 permission.browse 权限"),ie=N("你没有 permission.browse 权限"),re=N("你有 permission.create 权限"),ue=N("你没有 permission.create 权限"),de=N("你有 permission.browse 或 permission.create 权限"),ce=N("你没有 permission.browse 或 permission.create 权限"),me=N("你有 permission.browse 和 permission.create 权限"),pe=N("你没有 permission.browse 和 permission.create 权限"),be=O("h3",null,"鉴权指令（请对照代码查看）",-1),ve=[N(" 如果你有 permission.browse 权限则能看到这句话 ")],fe=[N(" 如果你有 permission.create 权限则能看到这句话 ")],ge=[N(" 如果你有 permission.browse 或 permission.create 权限则能看到这句话 ")],ye=[N(" 如果你有 permission.browse 和 permission.create 权限则能看到这句话 ")],we=O("h3",null,"鉴权函数（请对照代码查看）",-1),xe=N("校验 permission.browse 权限"),he=N("校验 permission.create 权限"),ke=N("校验 permission.browse 或 permission.create 权限"),Ce=N("校验 permission.browse 和 permission.create 权限"),_e={__name:"index",setup(e){const s=$(),t=j(),{auth:n,authAll:o}=A();function l(e){K.service({lock:!0,text:"帐号切换中",background:"rgba(0, 0, 0, 0.7)"}),t.login({account:e,password:""}).then((()=>{setTimeout((()=>{location.reload()}),1e3)}))}function r(e){n(e)?S.success("校验通过"):S.error("校验不通过")}return(e,n)=>{const d=R,c=z,m=Z,p=q,b=ee,v=W,f=L,g=V,y=P,w=E("auth"),x=E("auth-all");return k(),C("div",null,[u(d,{title:"权限验证"}),u(y,null,{default:a((()=>[T(s).app.enablePermission?(k(),C("div",te,[ne,u(m,{modelValue:T(t).account,"onUpdate:modelValue":n[0]||(n[0]=e=>T(t).account=e),onChange:l},{default:a((()=>[u(c,{label:"admin"}),u(c,{label:"test"})])),_:1},8,["modelValue"]),oe,O("div",null,I(T(t).permissions),1),le,O("div",null,[u(b,{value:"permission.browse",style:{"margin-bottom":"10px"}},{"no-auth":a((()=>[u(p,{type:"danger"},{default:a((()=>[ie])),_:1})])),default:a((()=>[u(p,null,{default:a((()=>[ae])),_:1})])),_:1}),u(b,{value:"permission.create",style:{"margin-bottom":"10px"}},{"no-auth":a((()=>[u(p,{type:"danger"},{default:a((()=>[ue])),_:1})])),default:a((()=>[u(p,null,{default:a((()=>[re])),_:1})])),_:1}),u(b,{value:["permission.browse","permission.create"],style:{"margin-bottom":"10px"}},{"no-auth":a((()=>[u(p,{type:"danger"},{default:a((()=>[ce])),_:1})])),default:a((()=>[u(p,null,{default:a((()=>[de])),_:1})])),_:1},8,["value"]),u(v,{value:["permission.browse","permission.create"]},{"no-auth":a((()=>[u(p,{type:"danger"},{default:a((()=>[pe])),_:1})])),default:a((()=>[u(p,null,{default:a((()=>[me])),_:1})])),_:1},8,["value"])]),be,O("div",null,[i((k(),C("div",null,ve)),[[w,"permission.browse"]]),i((k(),C("div",null,fe)),[[w,"permission.create"]]),i((k(),C("div",null,ge)),[[w,["permission.browse","permission.create"]]]),i((k(),C("div",null,ye)),[[x,["permission.browse","permission.create"]]])]),we,O("div",null,[u(g,{style:{display:"block","margin-bottom":"10px"}},{default:a((()=>[u(f,{onClick:n[1]||(n[1]=e=>r("permission.browse"))},{default:a((()=>[xe])),_:1}),u(f,{onClick:n[2]||(n[2]=e=>r("permission.create"))},{default:a((()=>[he])),_:1})])),_:1}),u(g,null,{default:a((()=>[u(f,{onClick:n[3]||(n[3]=e=>r(["permission.browse","permission.create"]))},{default:a((()=>[ke])),_:1}),u(f,{onClick:n[4]||(n[4]=e=>{o(["permission.browse","permission.create"])?S.success("校验通过"):S.error("校验不通过")})},{default:a((()=>[Ce])),_:1})])),_:1})])])):(k(),C("div",se,"请到 seeting.js 里打开权限功能，再进入该页面查看演示"))])),_:1})])}}};"function"==typeof B&&B(_e);export{_e as default};