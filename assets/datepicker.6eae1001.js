
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as e,f as l,h as a,w as t,bs as d,G as o,bt as u,b as s,H as n,bw as r}from"./index.84c9bfd8.js";import{E as m}from"./el-date-picker.e766168c.js";import"./el-input.f69128cc.js";import p from"./alert.62ee8977.js";import"./panel-time-pick.126100bb.js";import"./isEqual.7e94fa38.js";import"./index.358b0b8c.js";import"./arrays.21a21ad5.js";import"./index.f7155ad7.js";import"./event.d298a7ab.js";import"./el-alert.0cce966b.js";import"./el-link.9df77598.js";const i={components:{Alert:p},data:()=>({disabledDate:e=>e.getTime()>Date.now(),shortcuts:[{text:"今天",value:new Date},{text:"昨天",value:(()=>{const e=new Date;return e.setTime(e.getTime()-864e5),e})()},{text:"一周前",value:(()=>{const e=new Date;return e.setTime(e.getTime()-6048e5),e})()}],value1:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:"",value8:""})},v=n("div",null,"默认",-1),c=n("div",null,"带快捷选项",-1),V=n("div",null,"周",-1),f=n("div",null,"月",-1),h=n("div",null,"年",-1),b=n("div",null,"多个日期",-1);"function"==typeof d&&d(i);const g=e(i,[["render",function(e,d,n,p,i,g){const j=o("Alert"),y=r,w=m,U=u;return s(),l("div",null,[a(j),a(y,{title:"日期选择器"}),a(U,{title:"选择日",class:"demo"},{default:t((()=>[v,a(w,{modelValue:i.value1,"onUpdate:modelValue":d[0]||(d[0]=e=>i.value1=e),type:"date",placeholder:"选择日期"},null,8,["modelValue"]),c,a(w,{modelValue:i.value2,"onUpdate:modelValue":d[1]||(d[1]=e=>i.value2=e),align:"right",type:"date",placeholder:"选择日期","disabled-date":i.disabledDate,shortcuts:i.shortcuts},null,8,["modelValue","disabled-date","shortcuts"])])),_:1}),a(U,{title:"其他日期单位",class:"demo"},{default:t((()=>[V,a(w,{modelValue:i.value3,"onUpdate:modelValue":d[2]||(d[2]=e=>i.value3=e),type:"week",format:"gggg 第 ww 周",placeholder:"选择周"},null,8,["modelValue"]),f,a(w,{modelValue:i.value4,"onUpdate:modelValue":d[3]||(d[3]=e=>i.value4=e),type:"month",placeholder:"选择月"},null,8,["modelValue"]),h,a(w,{modelValue:i.value5,"onUpdate:modelValue":d[4]||(d[4]=e=>i.value5=e),type:"year",placeholder:"选择年"},null,8,["modelValue"]),b,a(w,{modelValue:i.value6,"onUpdate:modelValue":d[5]||(d[5]=e=>i.value6=e),type:"dates",placeholder:"选择一个或多个日期"},null,8,["modelValue"])])),_:1}),a(U,{title:"选择日期范围",class:"demo"},{default:t((()=>[a(w,{modelValue:i.value7,"onUpdate:modelValue":d[6]||(d[6]=e=>i.value7=e),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])),_:1}),a(U,{title:"选择月份范围",class:"demo"},{default:t((()=>[a(w,{modelValue:i.value8,"onUpdate:modelValue":d[7]||(d[7]=e=>i.value8=e),type:"monthrange","range-separator":"至","start-placeholder":"开始月份","end-placeholder":"结束月份"},null,8,["modelValue"])])),_:1})])}]]);export{g as default};
