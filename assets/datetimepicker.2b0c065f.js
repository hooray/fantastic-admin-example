
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as e,f as a,h as l,w as t,bl as d,H as o,bL as r,b as s,B as i,bO as m}from"./index.4baba6e2.js";import{E as n}from"./el-date-picker.de72edb1.js";import"./el-input.e2514560.js";import"./el-scrollbar.16dea6ab.js";import u from"./alert.78379ce7.js";import"./panel-time-pick.5cd21cba.js";import"./isEqual.2d65dbdc.js";import"./index.07109109.js";import"./arrays.0b773881.js";import"./event.a088884a.js";import"./el-alert.3766ec37.js";import"./el-link.d9d8863a.js";const p={components:{Alert:u},data:()=>({value1:"",value2:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value3:""})},c=i("div",null,"起始日期时刻为 12:00:00，结束日期时刻为 08:00:00",-1);"function"==typeof d&&d(p);var v=e(p,[["render",function(e,d,i,u,p,v){const f=o("Alert"),b=m,j=n,V=r;return s(),a("div",null,[l(f),l(b,{title:"日期时间选择器"}),l(V,{title:"日期和时间点",class:"demo"},{default:t((()=>[l(j,{modelValue:p.value1,"onUpdate:modelValue":d[0]||(d[0]=e=>p.value1=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),l(V,{title:"日期和时间范围",class:"demo"},{default:t((()=>[l(j,{modelValue:p.value2,"onUpdate:modelValue":d[1]||(d[1]=e=>p.value2=e),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])),_:1}),l(V,{title:"默认的起始与结束时刻",class:"demo"},{default:t((()=>[c,l(j,{modelValue:p.value3,"onUpdate:modelValue":d[2]||(d[2]=e=>p.value3=e),type:"datetimerange",align:"right","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)]},null,8,["modelValue","default-time"])])),_:1})])}]]);export{v as default};
