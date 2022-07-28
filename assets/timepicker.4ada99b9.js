
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{V as e,aX as l,X as t,bL as a,b9 as s,d as n,bD as r,u as i,r as o,c as u,b as d,e as m,w as c,i as p,E as f,n as b,I as v,m as h,f as g,R as j,N as V,_ as S,v as x,h as y,bs as T,G as _,bt as k,bw as I}from"./index.84c9bfd8.js";import{E as $}from"./el-time-picker.e7426735.js";import"./el-input.f69128cc.js";/* empty css               */import{a as H}from"./el-select.50875c12.js";import U from"./alert.62ee8977.js";import{c as M}from"./panel-time-pick.126100bb.js";import"./_baseFlatten.8f82f422.js";import"./isEqual.7e94fa38.js";import"./event.d298a7ab.js";import"./index.b8cf1a00.js";import"./index.f7155ad7.js";import"./validator.3268d51f.js";import"./el-alert.0cce966b.js";import"./el-link.9df77598.js";import"./index.358b0b8c.js";const w=e({format:{type:String,default:"HH:mm"},modelValue:String,disabled:Boolean,editable:{type:Boolean,default:!0},effect:{type:String,default:"light"},clearable:{type:Boolean,default:!0},size:l,placeholder:String,start:{type:String,default:"09:00"},end:{type:String,default:"18:00"},step:{type:String,default:"00:30"},minTime:String,maxTime:String,name:String,prefixIcon:{type:t([String,Object]),default:()=>a},clearIcon:{type:t([String,Object]),default:()=>s}}),z=e=>{const l=(e||"").split(":");if(l.length>=2){let t=Number.parseInt(l[0],10);const a=Number.parseInt(l[1],10),s=e.toUpperCase();return s.includes("AM")&&12===t?t=0:s.includes("PM")&&12!==t&&(t+=12),{hours:t,minutes:a}}return null},B=(e,l)=>{const t=z(e);if(!t)return-1;const a=z(l);if(!a)return-1;const s=t.minutes+60*t.hours,n=a.minutes+60*a.hours;return s===n?0:s>n?1:-1},E=e=>`${e}`.padStart(2,"0"),A=e=>`${E(e.hours)}:${E(e.minutes)}`,N=(e,l)=>{const t=z(e);if(!t)return"";const a=z(l);if(!a)return"";const s={hours:t.hours,minutes:t.minutes};return s.minutes+=a.minutes,s.hours+=a.hours,s.hours+=Math.floor(s.minutes/60),s.minutes=s.minutes%60,A(s)};var O=S(n({name:"ElTimeSelect",props:w,emits:["change","blur","focus","update:modelValue"],setup(e,{expose:l}){const t=e;r.extend(M);const{Option:a}=H,s=i("input"),n=o(),S=u((()=>t.modelValue)),x=u((()=>{const e=z(t.start);return e?A(e):null})),y=u((()=>{const e=z(t.end);return e?A(e):null})),T=u((()=>{const e=z(t.step);return e?A(e):null})),_=u((()=>{const e=z(t.minTime||"");return e?A(e):null})),k=u((()=>{const e=z(t.maxTime||"");return e?A(e):null})),I=u((()=>{const e=[];if(t.start&&t.end&&t.step){let l,a=x.value;for(;a&&y.value&&B(a,y.value)<=0;)l=r(a,"HH:mm").format(t.format),e.push({value:l,disabled:B(a,_.value||"-1:-1")<=0||B(a,k.value||"100:100")>=0}),a=N(a,T.value)}return e}));return l({blur:()=>{var e,l;null==(l=null==(e=n.value)?void 0:e.blur)||l.call(e)},focus:()=>{var e,l;null==(l=null==(e=n.value)?void 0:e.focus)||l.call(e)}}),(e,l)=>(d(),m(p(H),{ref_key:"select",ref:n,"model-value":p(S),disabled:e.disabled,clearable:e.clearable,"clear-icon":e.clearIcon,size:e.size,effect:e.effect,placeholder:e.placeholder,"default-first-option":"",filterable:e.editable,"onUpdate:modelValue":l[0]||(l[0]=l=>e.$emit("update:modelValue",l)),onChange:l[1]||(l[1]=l=>e.$emit("change",l)),onBlur:l[2]||(l[2]=l=>e.$emit("blur",l)),onFocus:l[3]||(l[3]=l=>e.$emit("focus",l))},{prefix:c((()=>[e.prefixIcon?(d(),m(p(f),{key:0,class:b(p(s).e("prefix-icon"))},{default:c((()=>[(d(),m(v(e.prefixIcon)))])),_:1},8,["class"])):h("v-if",!0)])),default:c((()=>[(d(!0),g(V,null,j(p(I),(e=>(d(),m(p(a),{key:e.value,label:e.value,value:e.value,disabled:e.disabled},null,8,["label","value","disabled"])))),128))])),_:1},8,["model-value","disabled","clearable","clear-icon","size","effect","placeholder","filterable"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/time-select/src/time-select.vue"]]);O.install=e=>{e.component(O.name,O)};const C=O,D=(e,l)=>{const t=[];for(let a=e;a<=l;a++)t.push(a);return t},F={components:{Alert:U},data:()=>({value:"",value1:new Date(2016,9,10,18,40),startTime:"",endTime:""}),methods:{disabledHours:()=>D(0,16).concat(D(19,23)),disabledMinutes:e=>17===e?D(0,29):18===e?D(31,59):void 0,disabledSeconds(e,l){if(18===e&&30===l)return D(1,59)}}};"function"==typeof T&&T(F);const X=x(F,[["render",function(e,l,t,a,s,n){const r=_("Alert"),i=I,o=C,u=k,m=$;return d(),g("div",null,[y(r),y(i,{title:"时间选择器"}),y(u,{title:"固定时间点",class:"demo"},{default:c((()=>[y(o,{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=e=>s.value=e),start:"08:30",step:"00:15",end:"18:30",placeholder:"选择时间"},null,8,["modelValue"])])),_:1}),y(u,{title:"任意时间点",class:"demo"},{default:c((()=>[y(m,{modelValue:s.value1,"onUpdate:modelValue":l[1]||(l[1]=e=>s.value1=e),"disabled-hours":n.disabledHours,"disabled-minutes":n.disabledMinutes,"disabled-seconds":n.disabledSeconds,placeholder:"任意时间点"},null,8,["modelValue","disabled-hours","disabled-minutes","disabled-seconds"])])),_:1}),y(u,{title:"固定时间范围",class:"demo"},{default:c((()=>[y(o,{modelValue:s.startTime,"onUpdate:modelValue":l[2]||(l[2]=e=>s.startTime=e),placeholder:"起始时间",start:"08:30",step:"00:15",end:"18:30",style:{"margin-right":"10px"}},null,8,["modelValue"]),y(o,{modelValue:s.endTime,"onUpdate:modelValue":l[3]||(l[3]=e=>s.endTime=e),placeholder:"结束时间",start:"08:30",step:"00:15",end:"18:30","min-time":s.startTime},null,8,["modelValue","min-time"])])),_:1})])}]]);export{X as default};
