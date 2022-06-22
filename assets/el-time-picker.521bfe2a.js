
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,n=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(n,a,t)=>a in n?e(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t,o=(e,n)=>{for(var a in n||(n={}))r.call(n,a)&&s(e,a,n[a]);if(t)for(var a of t(n))l.call(n,a)&&s(e,a,n[a]);return e},i=(e,t)=>n(e,a(t));import{ch as u,bs as c,U as p,W as d,d as m,ap as f,u as v,P as b,c as g,r as h,b as k,f as w,B as y,n as S,i as O,L as A,h as P,m as V,_,bQ as j,bt as x,aK as E,G as R,aI as C}from"./index.6dffb2c9.js";import{d as I,u as T,f as D,g as B,h as M,c as H,t as K,T as U,i as q,C as F}from"./panel-time-pick2.bf310788.js";import{b as G}from"./_baseFlatten.82ec23f0.js";import{a as L,m as Q,p as W,q as $,r as z}from"./isEqual.d6d53991.js";function J(e){return e}function N(e,n,a){switch(a.length){case 0:return e.call(n);case 1:return e.call(n,a[0]);case 2:return e.call(n,a[0],a[1]);case 3:return e.call(n,a[0],a[1],a[2])}return e.apply(n,a)}var X=Date.now;var Y,Z,ee,ne=u?function(e,n){return u(e,"toString",{configurable:!0,enumerable:!1,value:(a=n,function(){return a}),writable:!0});var a}:J,ae=(Y=ne,Z=0,ee=0,function(){var e=X(),n=16-(e-ee);if(ee=e,n>0){if(++Z>=800)return arguments[0]}else Z=0;return Y.apply(void 0,arguments)});function te(e){return e!=e}function re(e,n){return!!(null==e?0:e.length)&&function(e,n,a){return n==n?function(e,n,a){for(var t=a-1,r=e.length;++t<r;)if(e[t]===n)return t;return-1}(e,n,a):function(e,n,a,t){for(var r=e.length,l=a+(t?1:-1);t?l--:++l<r;)if(n(e[l],l,e))return l;return-1}(e,te,a)}(e,n,0)>-1}var le=Math.max;function se(e){return c(e)&&L(e)}function oe(e,n,a){for(var t=-1,r=null==e?0:e.length;++t<r;)if(a(n,e[t]))return!0;return!1}var ie=Q&&1/W(new Q([,-0]))[1]==1/0?function(e){return new Q(e)}:function(){};var ue=function(e,n){return ae(function(e,n,a){return n=le(void 0===n?e.length-1:n,0),function(){for(var t=arguments,r=-1,l=le(t.length-n,0),s=Array(l);++r<l;)s[r]=t[n+r];r=-1;for(var o=Array(n+1);++r<n;)o[r]=t[r];return o[n]=a(s),N(e,this,o)}}(e,n,J),e+"")}((function(e){return function(e,n,a){var t=-1,r=re,l=e.length,s=!0,o=[],i=o;if(a)s=!1,r=oe;else if(l>=200){var u=n?null:ie(e);if(u)return W(u);s=!1,r=z,i=new $}else i=n?[]:o;e:for(;++t<l;){var c=e[t],p=n?n(c):c;if(c=a||0!==c?c:0,s&&p==p){for(var d=i.length;d--;)if(i[d]===p)continue e;n&&i.push(p),o.push(c)}else r(i,p,a)||(i!==o&&i.push(p),o.push(c))}return o}(G(e,1,se,!0))})),ce=ue;const pe=p(i(o({},I),{parsedValue:{type:d(Array)}})),de=["disabled"];var me=_(m({__name:"panel-time-range",props:pe,emits:["pick","select-range","set-picker-option"],setup(e,{emit:n}){const a=e,t=(e,n)=>{const a=[];for(let t=e;t<=n;t++)a.push(t);return a},{t:r,lang:l}=f(),s=v("time"),o=v("picker"),i=b("EP_PICKER_BASE"),{arrowControl:u,disabledHours:c,disabledMinutes:p,disabledSeconds:d,defaultValue:m}=i.props,_=g((()=>a.parsedValue[0])),R=g((()=>a.parsedValue[1])),C=T(a),I=g((()=>a.format.includes("ss"))),H=g((()=>a.format.includes("A")?"A":a.format.includes("a")?"a":"")),K=e=>{q(e.millisecond(0),R.value)},U=e=>{q(_.value,e.millisecond(0))},q=(e,a)=>{n("pick",[e,a],!0)},F=g((()=>_.value>R.value)),G=h([0,2]),L=(e,a)=>{n("select-range",e,a,"min"),G.value=[e,a]},Q=g((()=>I.value?11:8)),W=(e,a)=>{n("select-range",e,a,"max");const t=O(Q);G.value=[e+t,a+t]},$=(e,n)=>{const a=c?c(e):[],r="start"===e,l=(n||(r?R.value:_.value)).hour(),s=r?t(l+1,23):t(0,l-1);return ce(a,s)},z=(e,n,a)=>{const r=p?p(e,n):[],l="start"===n,s=a||(l?R.value:_.value);if(e!==s.hour())return r;const o=s.minute(),i=l?t(o+1,59):t(0,o-1);return ce(r,i)},J=(e,n,a,r)=>{const l=d?d(e,n,a):[],s="start"===a,o=r||(s?R.value:_.value),i=o.hour(),u=o.minute();if(e!==i||n!==u)return l;const c=o.second(),p=s?t(c+1,59):t(0,c-1);return ce(l,p)},N=([e,n])=>[ne(e,"start",!0,n),ne(n,"end",!1,e)],{getAvailableHours:X,getAvailableMinutes:Y,getAvailableSeconds:Z}=D($,z,J),{timePickerOptions:ee,getAvailableTime:ne,onSetOption:ae}=B({getAvailableHours:X,getAvailableMinutes:Y,getAvailableSeconds:Z});return n("set-picker-option",["formatToString",e=>e?x(e)?e.map((e=>e.format(a.format))):e.format(a.format):null]),n("set-picker-option",["parseUserInput",e=>e?x(e)?e.map((e=>j(e,a.format).locale(l.value))):j(e,a.format).locale(l.value):null]),n("set-picker-option",["isValidValue",e=>{const n=e.map((e=>j(e).locale(l.value))),a=N(n);return n[0].isSame(a[0])&&n[1].isSame(a[1])}]),n("set-picker-option",["handleKeydownInput",e=>{const n=e.code,{left:a,right:t,up:r,down:l}=E;if([a,t].includes(n)){return(e=>{const n=I.value?[0,3,6,11,14,17]:[0,3,8,11],a=["hours","minutes"].concat(I.value?["seconds"]:[]),t=(n.indexOf(G.value[0])+e+n.length)%n.length,r=n.length/2;t<r?ee.start_emitSelectRange(a[t]):ee.end_emitSelectRange(a[t-r])})(n===a?-1:1),void e.preventDefault()}if([r,l].includes(n)){const a=n===r?-1:1,t=G.value[0]<Q.value?"start":"end";return ee[`${t}_scrollDown`](a),void e.preventDefault()}}]),n("set-picker-option",["getDefaultValue",()=>{if(x(m))return m.map((e=>j(e).locale(l.value)));const e=j(m).locale(l.value);return[e,e.add(60,"m")]}]),n("set-picker-option",["getRangeAvailableTime",N]),(e,a)=>e.actualVisible?(k(),w("div",{key:0,class:S([O(s).b("range-picker"),O(o).b("panel")])},[y("div",{class:S(O(s).be("range-picker","content"))},[y("div",{class:S(O(s).be("range-picker","cell"))},[y("div",{class:S(O(s).be("range-picker","header"))},A(O(r)("el.datepicker.startTime")),3),y("div",{class:S([O(s).be("range-picker","body"),O(s).be("panel","content"),O(s).is("arrow",O(u)),{"has-seconds":O(I)}])},[P(M,{ref:"minSpinner",role:"start","show-seconds":O(I),"am-pm-mode":O(H),"arrow-control":O(u),"spinner-date":O(_),"disabled-hours":$,"disabled-minutes":z,"disabled-seconds":J,onChange:K,onSetOption:O(ae),onSelectRange:L},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","onSetOption"])],2)],2),y("div",{class:S(O(s).be("range-picker","cell"))},[y("div",{class:S(O(s).be("range-picker","header"))},A(O(r)("el.datepicker.endTime")),3),y("div",{class:S([O(s).be("range-picker","body"),O(s).be("panel","content"),O(s).is("arrow",O(u)),{"has-seconds":O(I)}])},[P(M,{ref:"maxSpinner",role:"end","show-seconds":O(I),"am-pm-mode":O(H),"arrow-control":O(u),"spinner-date":O(R),"disabled-hours":$,"disabled-minutes":z,"disabled-seconds":J,onChange:U,onSetOption:O(ae),onSelectRange:W},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","onSetOption"])],2)],2)],2),y("div",{class:S(O(s).be("panel","footer"))},[y("button",{type:"button",class:S([O(s).be("panel","btn"),"cancel"]),onClick:a[0]||(a[0]=e=>{n("pick",C.value,!1)})},A(O(r)("el.datepicker.cancel")),3),y("button",{type:"button",class:S([O(s).be("panel","btn"),"confirm"]),disabled:O(F),onClick:a[1]||(a[1]=e=>((e=!1)=>{n("pick",[_.value,R.value],e)})())},A(O(r)("el.datepicker.confirm")),11,de)],2)],2)):V("v-if",!0)}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-range.vue"]]);j.extend(H);const fe=m({name:"ElTimePicker",install:null,props:i(o({},K),{isRange:{type:Boolean,default:!1}}),emits:["update:modelValue"],setup(e,n){const a=h(),[t,r]=e.isRange?["timerange",me]:["time",U],l=e=>n.emit("update:modelValue",e);return R("ElPopperOptions",e.popperOptions),n.expose({focus:e=>{var n;null==(n=a.value)||n.handleFocusInput(e)},blur:e=>{var n;null==(n=a.value)||n.handleBlurInput(e)}}),()=>{var n;const s=null!=(n=e.format)?n:q;return P(F,C(e,{ref:a,type:t,format:s,"onUpdate:modelValue":l}),{default:e=>P(r,e,null)})}}});fe.install=e=>{e.component(fe.name,fe)};const ve=fe;export{ve as E};
