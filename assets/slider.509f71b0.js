
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as e,f as l,h as a,w as o,bl as t,I as u,bL as s,b as d,C as m,bO as n}from"./index.4888643e.js";import{E as p}from"./el-slider.38273989.js";import"./el-input-number.bd735ecb.js";import"./el-input.fe77ed94.js";import"./el-tooltip.586473e3.js";import i from"./alert.c94c943c.js";import"./event.6c7ea317.js";import"./index.22f0152a.js";import"./el-alert.3fbe979f.js";import"./el-link.df311090.js";const r={components:{Alert:i},data:()=>({value1:0,value2:50,value3:36,value4:48,value5:42,value6:0,value7:0,value8:[4,8],value9:0}),methods:{formatTooltip:e=>e/100}},v=m("span",{class:"demonstration"},"默认",-1),V=m("span",{class:"demonstration"},"自定义初始值",-1),c=m("span",{class:"demonstration"},"隐藏 Tooltip",-1),f=m("span",{class:"demonstration"},"格式化 Tooltip",-1),j=m("span",{class:"demonstration"},"禁用",-1),U=m("span",{class:"demonstration"},"不显示间断点",-1),b=m("span",{class:"demonstration"},"显示间断点",-1);"function"==typeof t&&t(r);var h=e(r,[["render",function(e,t,m,i,r,h){const w=u("Alert"),x=n,_=p,T=s;return d(),l("div",null,[a(w),a(x,{title:"滑块"}),a(T,{title:"基础用法",class:"demo"},{default:o((()=>[v,a(_,{modelValue:r.value1,"onUpdate:modelValue":t[0]||(t[0]=e=>r.value1=e)},null,8,["modelValue"]),V,a(_,{modelValue:r.value2,"onUpdate:modelValue":t[1]||(t[1]=e=>r.value2=e)},null,8,["modelValue"]),c,a(_,{modelValue:r.value3,"onUpdate:modelValue":t[2]||(t[2]=e=>r.value3=e),"show-tooltip":!1},null,8,["modelValue"]),f,a(_,{modelValue:r.value4,"onUpdate:modelValue":t[3]||(t[3]=e=>r.value4=e),"format-tooltip":h.formatTooltip},null,8,["modelValue","format-tooltip"]),j,a(_,{modelValue:r.value5,"onUpdate:modelValue":t[4]||(t[4]=e=>r.value5=e),disabled:""},null,8,["modelValue"])])),_:1}),a(T,{title:"离散值",class:"demo"},{default:o((()=>[U,a(_,{modelValue:r.value6,"onUpdate:modelValue":t[5]||(t[5]=e=>r.value6=e),step:10},null,8,["modelValue"]),b,a(_,{modelValue:r.value6,"onUpdate:modelValue":t[6]||(t[6]=e=>r.value6=e),step:10,"show-stops":""},null,8,["modelValue"])])),_:1}),a(T,{title:"带有输入框",class:"demo"},{default:o((()=>[a(_,{modelValue:r.value7,"onUpdate:modelValue":t[7]||(t[7]=e=>r.value7=e),"show-input":""},null,8,["modelValue"])])),_:1}),a(T,{title:"范围选择",class:"demo"},{default:o((()=>[a(_,{modelValue:r.value8,"onUpdate:modelValue":t[8]||(t[8]=e=>r.value8=e),range:"","show-stops":"",max:10},null,8,["modelValue"])])),_:1}),a(T,{title:"竖向模式",class:"demo"},{default:o((()=>[a(_,{modelValue:r.value9,"onUpdate:modelValue":t[9]||(t[9]=e=>r.value9=e),vertical:"",height:"200px"},null,8,["modelValue"])])),_:1})])}]]);export{h as default};
