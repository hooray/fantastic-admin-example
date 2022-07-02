
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as e,f as a,h as l,w as t,bl as d,H as o,bL as r,b as s,B as i,bO as m}from"./index.c1b4762b.js";import{E as n}from"./el-date-picker.eb9b532f.js";import"./el-input.929f8d7a.js";import"./el-scrollbar.b6863d9c.js";import u from"./alert.40cdc32e.js";import"./panel-time-pick.a2b0dbc6.js";import"./isEqual.2ee0e089.js";import"./index.1e433460.js";import"./arrays.0b773881.js";import"./event.a088884a.js";import"./el-alert.dd2eea72.js";import"./el-link.c96d1012.js";const p={components:{Alert:u},data:()=>({value1:"",value2:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value3:""})},c=i("div",null,"起始日期时刻为 12:00:00，结束日期时刻为 08:00:00",-1);"function"==typeof d&&d(p);var f=e(p,[["render",function(e,d,i,u,p,f){const v=o("Alert"),b=m,j=n,V=r;return s(),a("div",null,[l(v),l(b,{title:"日期时间选择器"}),l(V,{title:"日期和时间点",class:"demo"},{default:t((()=>[l(j,{modelValue:p.value1,"onUpdate:modelValue":d[0]||(d[0]=e=>p.value1=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),l(V,{title:"日期和时间范围",class:"demo"},{default:t((()=>[l(j,{modelValue:p.value2,"onUpdate:modelValue":d[1]||(d[1]=e=>p.value2=e),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])),_:1}),l(V,{title:"默认的起始与结束时刻",class:"demo"},{default:t((()=>[c,l(j,{modelValue:p.value3,"onUpdate:modelValue":d[2]||(d[2]=e=>p.value3=e),type:"datetimerange",align:"right","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)]},null,8,["modelValue","default-time"])])),_:1})])}]]);export{f as default};
