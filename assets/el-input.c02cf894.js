
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,r=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))l.call(t,a)&&s(e,a,t[a]);return e};import{r as i,ah as u,U as p,aW as d,W as c,V as f,aQ as v,aB as m,d as y,aX as b,aY as x,c as g,aZ as h,a_ as w,a$ as S,b0 as k,b1 as $,u as z,s as I,b2 as C,b3 as E,b4 as P,b5 as O,b6 as j,A as F,ak as B,b7 as M,o as V,b8 as _,aT as A,aq as N,ar as R,b as W,f as T,m as H,M as q,n as K,i as L,g as D,B as U,e as X,w as Q,I as Y,E as Z,aI as G,h as J,b9 as ee,l as te,ac as ae,L as oe,k as ne,_ as le,a5 as se,aS as re,C as ie,q as ue}from"./index.6dffb2c9.js";import{U as pe}from"./event2.c09267d7.js";const de=e=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e);let ce;const fe=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function ve(e,t=1,a){var o;ce||(ce=document.createElement("textarea"),document.body.appendChild(ce));const{paddingSize:n,borderSize:l,boxSizing:s,contextStyle:r}=function(e){const t=window.getComputedStyle(e),a=t.getPropertyValue("box-sizing"),o=Number.parseFloat(t.getPropertyValue("padding-bottom"))+Number.parseFloat(t.getPropertyValue("padding-top")),n=Number.parseFloat(t.getPropertyValue("border-bottom-width"))+Number.parseFloat(t.getPropertyValue("border-top-width"));return{contextStyle:fe.map((e=>`${e}:${t.getPropertyValue(e)}`)).join(";"),paddingSize:o,borderSize:n,boxSizing:a}}(e);ce.setAttribute("style",`${r};\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n`),ce.value=e.value||e.placeholder||"";let i=ce.scrollHeight;const p={};"border-box"===s?i+=l:"content-box"===s&&(i-=n),ce.value="";const d=ce.scrollHeight-n;if(u(t)){let e=d*t;"border-box"===s&&(e=e+n+l),i=Math.max(e,i),p.minHeight=`${e}px`}if(u(a)){let e=d*a;"border-box"===s&&(e=e+n+l),i=Math.min(e,i)}return p.height=`${i}px`,null==(o=ce.parentNode)||o.removeChild(ce),ce=void 0,p}const me=p({id:{type:String,default:void 0},size:d,disabled:Boolean,modelValue:{type:c([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:c([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String,default:""},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:f,default:""},prefixIcon:{type:f,default:""},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:c([Object,Array,String]),default:()=>v({})}}),ye={[pe]:e=>m(e),input:e=>m(e),change:e=>m(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},be=["role"],xe=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder"],ge=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder"];var he;const we=ue(le(y((he=r({},{name:"ElInput",inheritAttrs:!1}),t(he,a({props:me,emits:ye,setup(e,{expose:t,emit:a}){const o=e,n={suffix:"append",prefix:"prepend"},l=ie(),s=b(),u=x(),p=g((()=>{const e={};return"combobox"===o.containerRole&&(e["aria-haspopup"]=s["aria-haspopup"],e["aria-owns"]=s["aria-owns"],e["aria-expanded"]=s["aria-expanded"]),e})),d=h({excludeKeys:g((()=>Object.keys(p.value)))}),{form:c,formItem:f}=w(),{inputId:v}=S(o,{formItemContext:f}),m=k(),y=$(),le=z("input"),ue=z("textarea"),ce=I(),fe=I(),me=i(!1),ye=i(!1),he=i(!1),we=i(!1),Se=i(),ke=I(o.inputStyle),$e=g((()=>ce.value||fe.value)),ze=g((()=>{var e;return null!=(e=null==c?void 0:c.statusIcon)&&e})),Ie=g((()=>(null==f?void 0:f.validateState)||"")),Ce=g((()=>Ie.value&&C[Ie.value])),Ee=g((()=>we.value?E:P)),Pe=g((()=>[s.style,o.inputStyle])),Oe=g((()=>[o.inputStyle,ke.value,{resize:o.resize}])),je=g((()=>O(o.modelValue)?"":String(o.modelValue))),Fe=g((()=>o.clearable&&!y.value&&!o.readonly&&!!je.value&&(me.value||ye.value))),Be=g((()=>o.showPassword&&!y.value&&!o.readonly&&!!je.value&&(!!je.value||me.value))),Me=g((()=>o.showWordLimit&&!!d.value.maxlength&&("text"===o.type||"textarea"===o.type)&&!y.value&&!o.readonly&&!o.showPassword)),Ve=g((()=>Array.from(je.value).length)),_e=g((()=>!!Me.value&&Ve.value>Number(d.value.maxlength))),Ae=g((()=>!!u.suffix||!!o.suffixIcon||Fe.value||o.showPassword||Me.value||!!Ie.value&&ze.value)),[Ne,Re]=function(e){const t=i();return[function(){if(null==e.value)return;const{selectionStart:a,selectionEnd:o,value:n}=e.value;if(null==a||null==o)return;const l=n.slice(0,Math.max(0,a)),s=n.slice(Math.max(0,o));t.value={selectionStart:a,selectionEnd:o,value:n,beforeTxt:l,afterTxt:s}},function(){if(null==e.value||null==t.value)return;const{value:a}=e.value,{beforeTxt:o,afterTxt:n,selectionStart:l}=t.value;if(null==o||null==n||null==l)return;let s=a.length;if(a.endsWith(n))s=a.length-n.length;else if(a.startsWith(o))s=o.length;else{const e=o[l-1],t=a.indexOf(e,l-1);-1!==t&&(s=t+1)}e.value.setSelectionRange(s,s)}]}(ce);j(fe,(e=>{if(!Me.value||"both"!==o.resize)return;const t=e[0],{width:a}=t.contentRect;Se.value={right:`calc(100% - ${a+15+6}px)`}}));const We=()=>{const{type:e,autosize:t}=o;if(se&&"textarea"===e)if(t){const e=re(t)?t.minRows:void 0,a=re(t)?t.maxRows:void 0;ke.value=r({},ve(fe.value,e,a))}else ke.value={minHeight:ve(fe.value).minHeight}},Te=()=>{const e=$e.value;e&&e.value!==je.value&&(e.value=je.value)},He=e=>{const{el:t}=l.vnode;if(!t)return;const a=Array.from(t.querySelectorAll(`.${le.e(e)}`)).find((e=>e.parentNode===t));if(!a)return;const o=n[e];u[o]?a.style.transform=`translateX(${"suffix"===e?"-":""}${t.querySelector(`.${le.be("group",o)}`).offsetWidth}px)`:a.removeAttribute("style")},qe=()=>{He("prefix"),He("suffix")},Ke=async e=>{Ne();let{value:t}=e.target;o.formatter&&(t=o.parser?o.parser(t):t,t=o.formatter(t)),he.value||t!==je.value&&(a(pe,t),a("input",t),await B(),Te(),Re())},Le=e=>{a("change",e.target.value)},De=e=>{a("compositionstart",e),he.value=!0},Ue=e=>{var t;a("compositionupdate",e);const o=null==(t=e.target)?void 0:t.value,n=o[o.length-1]||"";he.value=!de(n)},Xe=e=>{a("compositionend",e),he.value&&(he.value=!1,Ke(e))},Qe=()=>{we.value=!we.value,Ye()},Ye=async()=>{var e;await B(),null==(e=$e.value)||e.focus()},Ze=e=>{me.value=!0,a("focus",e)},Ge=e=>{var t;me.value=!1,a("blur",e),o.validateEvent&&(null==(t=null==f?void 0:f.validate)||t.call(f,"blur").catch((e=>M())))},Je=e=>{ye.value=!1,a("mouseleave",e)},et=e=>{ye.value=!0,a("mouseenter",e)},tt=e=>{a("keydown",e)},at=()=>{a(pe,""),a("change",""),a("clear"),a("input","")};return F((()=>o.modelValue),(()=>{var e;B((()=>We())),o.validateEvent&&(null==(e=null==f?void 0:f.validate)||e.call(f,"change").catch((e=>M())))})),F(je,(()=>Te())),F((()=>o.type),(async()=>{await B(),Te(),We(),qe()})),V((async()=>{!o.formatter&&o.parser,Te(),qe(),await B(),We()})),_((async()=>{await B(),qe()})),t({input:ce,textarea:fe,ref:$e,textareaStyle:Oe,autosize:A(o,"autosize"),focus:Ye,blur:()=>{var e;return null==(e=$e.value)?void 0:e.blur()},select:()=>{var e;null==(e=$e.value)||e.select()},clear:at,resizeTextarea:We}),(e,t)=>N((W(),T("div",G(L(p),{class:["textarea"===e.type?L(ue).b():L(le).b(),L(le).m(L(m)),L(le).is("disabled",L(y)),L(le).is("exceed",L(_e)),{[L(le).b("group")]:e.$slots.prepend||e.$slots.append,[L(le).bm("group","append")]:e.$slots.append,[L(le).bm("group","prepend")]:e.$slots.prepend,[L(le).m("prefix")]:e.$slots.prefix||e.prefixIcon,[L(le).m("suffix")]:e.$slots.suffix||e.suffixIcon||e.clearable||e.showPassword,[L(le).bm("suffix","password-clear")]:L(Fe)&&L(Be)},e.$attrs.class],style:L(Pe),role:e.containerRole,onMouseenter:et,onMouseleave:Je}),[H(" input "),"textarea"!==e.type?(W(),T(q,{key:0},[H(" prepend slot "),e.$slots.prepend?(W(),T("div",{key:0,class:K(L(le).be("group","prepend"))},[D(e.$slots,"prepend")],2)):H("v-if",!0),U("div",{class:K([L(le).e("wrapper"),L(le).is("focus",me.value)])},[H(" prefix slot "),e.$slots.prefix||e.prefixIcon?(W(),T("span",{key:0,class:K(L(le).e("prefix"))},[U("span",{class:K(L(le).e("prefix-inner"))},[D(e.$slots,"prefix"),e.prefixIcon?(W(),X(L(Z),{key:0,class:K(L(le).e("icon"))},{default:Q((()=>[(W(),X(Y(e.prefixIcon)))])),_:1},8,["class"])):H("v-if",!0)],2)],2)):H("v-if",!0),U("input",G({id:L(v),ref_key:"input",ref:ce,class:L(le).e("inner")},L(d),{type:e.showPassword?we.value?"text":"password":e.type,disabled:L(y),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,onCompositionstart:De,onCompositionupdate:Ue,onCompositionend:Xe,onInput:Ke,onFocus:Ze,onBlur:Ge,onChange:Le,onKeydown:tt}),null,16,xe),H(" suffix slot "),L(Ae)?(W(),T("span",{key:1,class:K(L(le).e("suffix"))},[U("span",{class:K(L(le).e("suffix-inner"))},[L(Fe)&&L(Be)&&L(Me)?H("v-if",!0):(W(),T(q,{key:0},[D(e.$slots,"suffix"),e.suffixIcon?(W(),X(L(Z),{key:0,class:K(L(le).e("icon"))},{default:Q((()=>[(W(),X(Y(e.suffixIcon)))])),_:1},8,["class"])):H("v-if",!0)],64)),L(Fe)?(W(),X(L(Z),{key:1,class:K([L(le).e("icon"),L(le).e("clear")]),onMousedown:te(L(ae),["prevent"]),onClick:at},{default:Q((()=>[J(L(ee))])),_:1},8,["class","onMousedown"])):H("v-if",!0),L(Be)?(W(),X(L(Z),{key:2,class:K([L(le).e("icon"),L(le).e("password")]),onClick:Qe},{default:Q((()=>[(W(),X(Y(L(Ee))))])),_:1},8,["class"])):H("v-if",!0),L(Me)?(W(),T("span",{key:3,class:K(L(le).e("count"))},[U("span",{class:K(L(le).e("count-inner"))},oe(L(Ve))+" / "+oe(L(d).maxlength),3)],2)):H("v-if",!0),L(Ie)&&L(Ce)&&L(ze)?(W(),X(L(Z),{key:4,class:K([L(le).e("icon"),L(le).e("validateIcon"),L(le).is("loading","validating"===L(Ie))])},{default:Q((()=>[(W(),X(Y(L(Ce))))])),_:1},8,["class"])):H("v-if",!0)],2)],2)):H("v-if",!0)],2),H(" append slot "),e.$slots.append?(W(),T("div",{key:1,class:K(L(le).be("group","append"))},[D(e.$slots,"append")],2)):H("v-if",!0)],64)):(W(),T(q,{key:1},[H(" textarea "),U("textarea",G({id:L(v),ref_key:"textarea",ref:fe,class:L(ue).e("inner")},L(d),{tabindex:e.tabindex,disabled:L(y),readonly:e.readonly,autocomplete:e.autocomplete,style:L(Oe),"aria-label":e.label,placeholder:e.placeholder,onCompositionstart:De,onCompositionupdate:Ue,onCompositionend:Xe,onInput:Ke,onFocus:Ze,onBlur:Ge,onChange:Le,onKeydown:tt}),null,16,ge),L(Me)?(W(),T("span",{key:0,style:ne(Se.value),class:K(L(le).e("count"))},oe(L(Ve))+" / "+oe(L(d).maxlength),7)):H("v-if",!0)],64))],16,be)),[[R,"hidden"!==e.type]])}})))),[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]));export{we as E,de as i};
