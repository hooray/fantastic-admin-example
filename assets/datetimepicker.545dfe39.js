
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as e,f as a,h as l,w as t,bu as o,C as d,bv as r,b as s,D as i,by as n}from"./index.2c25f648.js";import{E as u}from"./el-date-picker.1d70eceb.js";import"./el-input.68675235.js";import m from"./alert.ba2c9d73.js";import"./panel-time-pick.e5571a7a.js";import"./isEqual.044bc597.js";import"./index.358b0b8c.js";import"./arrays.21a21ad5.js";import"./index.3527bb5f.js";import"./event.d298a7ab.js";import"./el-alert.254c8453.js";import"./el-link.6cea01f5.js";const p={components:{Alert:m},data:()=>({value1:"",value2:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value3:""})},c=i("div",null,"起始日期时刻为 12:00:00，结束日期时刻为 08:00:00",-1);"function"==typeof o&&o(p);const f=e(p,[["render",function(e,o,i,m,p,f){const v=d("Alert"),b=n,j=u,V=r;return s(),a("div",null,[l(v),l(b,{title:"日期时间选择器"}),l(V,{title:"日期和时间点",class:"demo"},{default:t((()=>[l(j,{modelValue:p.value1,"onUpdate:modelValue":o[0]||(o[0]=e=>p.value1=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),l(V,{title:"日期和时间范围",class:"demo"},{default:t((()=>[l(j,{modelValue:p.value2,"onUpdate:modelValue":o[1]||(o[1]=e=>p.value2=e),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])),_:1}),l(V,{title:"默认的起始与结束时刻",class:"demo"},{default:t((()=>[c,l(j,{modelValue:p.value3,"onUpdate:modelValue":o[2]||(o[2]=e=>p.value3=e),type:"datetimerange",align:"right","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)]},null,8,["modelValue","default-time"])])),_:1})])}]]);export{f as default};
