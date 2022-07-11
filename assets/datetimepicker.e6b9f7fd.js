
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as e,f as a,h as l,w as t,bl as o,I as r,bL as d,b as s,C as i,bO as m}from"./index.4888643e.js";import{E as n}from"./el-date-picker.49c2a466.js";import"./el-input.fe77ed94.js";import"./el-scrollbar.7275b0a9.js";import u from"./alert.c94c943c.js";import"./panel-time-pick.53af8602.js";import"./isEqual.2b036dac.js";import"./index.22f0152a.js";import"./arrays.65a60b1b.js";import"./event.6c7ea317.js";import"./el-alert.3fbe979f.js";import"./el-link.df311090.js";const p={components:{Alert:u},data:()=>({value1:"",value2:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value3:""})},c=i("div",null,"起始日期时刻为 12:00:00，结束日期时刻为 08:00:00",-1);"function"==typeof o&&o(p);var f=e(p,[["render",function(e,o,i,u,p,f){const v=r("Alert"),j=m,b=n,V=d;return s(),a("div",null,[l(v),l(j,{title:"日期时间选择器"}),l(V,{title:"日期和时间点",class:"demo"},{default:t((()=>[l(b,{modelValue:p.value1,"onUpdate:modelValue":o[0]||(o[0]=e=>p.value1=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),l(V,{title:"日期和时间范围",class:"demo"},{default:t((()=>[l(b,{modelValue:p.value2,"onUpdate:modelValue":o[1]||(o[1]=e=>p.value2=e),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])),_:1}),l(V,{title:"默认的起始与结束时刻",class:"demo"},{default:t((()=>[c,l(b,{modelValue:p.value3,"onUpdate:modelValue":o[2]||(o[2]=e=>p.value3=e),type:"datetimerange",align:"right","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)]},null,8,["modelValue","default-time"])])),_:1})])}]]);export{f as default};
