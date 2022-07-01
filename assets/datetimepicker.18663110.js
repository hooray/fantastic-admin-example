
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as e,f as a,h as l,w as t,bl as d,H as o,bL as r,b as s,B as i,bO as m}from"./index.1763518e.js";import{E as n}from"./el-date-picker.7744572f.js";import"./el-input.da2df40f.js";import"./el-scrollbar.2db8917c.js";import u from"./alert.f1ae7d5c.js";import"./panel-time-pick.491c66a1.js";import"./isEqual.52782dfd.js";import"./index.8f23dffd.js";import"./arrays.7864a962.js";import"./event.fa25aaef.js";import"./el-alert.81f303c4.js";import"./el-link.f9b2948e.js";const p={components:{Alert:u},data:()=>({value1:"",value2:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value3:""})},f=i("div",null,"起始日期时刻为 12:00:00，结束日期时刻为 08:00:00",-1);"function"==typeof d&&d(p);var c=e(p,[["render",function(e,d,i,u,p,c){const v=o("Alert"),j=m,V=n,b=r;return s(),a("div",null,[l(v),l(j,{title:"日期时间选择器"}),l(b,{title:"日期和时间点",class:"demo"},{default:t((()=>[l(V,{modelValue:p.value1,"onUpdate:modelValue":d[0]||(d[0]=e=>p.value1=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),l(b,{title:"日期和时间范围",class:"demo"},{default:t((()=>[l(V,{modelValue:p.value2,"onUpdate:modelValue":d[1]||(d[1]=e=>p.value2=e),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])),_:1}),l(b,{title:"默认的起始与结束时刻",class:"demo"},{default:t((()=>[f,l(V,{modelValue:p.value3,"onUpdate:modelValue":d[2]||(d[2]=e=>p.value3=e),type:"datetimerange",align:"right","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)]},null,8,["modelValue","default-time"])])),_:1})])}]]);export{c as default};
