
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as e,f as a,h as l,w as t,bl as d,H as o,bL as r,b as s,B as i,bO as m}from"./index.606e36ef.js";import{E as n}from"./el-date-picker.bc941507.js";import"./el-input.0368c0d2.js";import"./el-scrollbar.fc268547.js";import u from"./alert.8343ce24.js";import"./panel-time-pick2.d63af606.js";import"./isEqual.51ca57ec.js";import"./index2.5da5f97c.js";import"./arrays2.9d0dd0a1.js";import"./event2.c09267d7.js";import"./el-alert.96f6e526.js";import"./el-link.233a28fa.js";const p={components:{Alert:u},data:()=>({value1:"",value2:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value3:""})},c=i("div",null,"起始日期时刻为 12:00:00，结束日期时刻为 08:00:00",-1);"function"==typeof d&&d(p);var f=e(p,[["render",function(e,d,i,u,p,f){const v=o("Alert"),j=m,V=n,h=r;return s(),a("div",null,[l(v),l(j,{title:"日期时间选择器"}),l(h,{title:"日期和时间点",class:"demo"},{default:t((()=>[l(V,{modelValue:p.value1,"onUpdate:modelValue":d[0]||(d[0]=e=>p.value1=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),l(h,{title:"日期和时间范围",class:"demo"},{default:t((()=>[l(V,{modelValue:p.value2,"onUpdate:modelValue":d[1]||(d[1]=e=>p.value2=e),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])),_:1}),l(h,{title:"默认的起始与结束时刻",class:"demo"},{default:t((()=>[c,l(V,{modelValue:p.value3,"onUpdate:modelValue":d[2]||(d[2]=e=>p.value3=e),type:"datetimerange",align:"right","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)]},null,8,["modelValue","default-time"])])),_:1})])}]]);export{f as default};
