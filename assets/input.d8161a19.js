
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as e,E as l,f as a,h as t,w as d,bl as o,H as u,bL as n,b as p,bO as s,R as m}from"./index.773474dc.js";import{E as i}from"./el-input.4de9b81e.js";import r from"./alert.c3eb6172.js";import"./event2.c09267d7.js";import"./el-alert.5c137829.js";import"./el-link.1df0c4c7.js";const c={components:{Alert:r},data:()=>({input:"",input1:"",input2:"",textarea:""})};"function"==typeof o&&o(c);var V=e(c,[["render",function(e,o,r,c,V,f){const h=u("Alert"),_=s,b=i,x=n,U=m,j=l;return p(),a("div",null,[t(h),t(_,{title:"输入框"}),t(x,{title:"基础用法",class:"demo"},{default:d((()=>[t(b,{modelValue:V.input,"onUpdate:modelValue":o[0]||(o[0]=e=>V.input=e),placeholder:"请输入内容"},null,8,["modelValue"])])),_:1}),t(x,{title:"禁用状态",class:"demo"},{default:d((()=>[t(b,{modelValue:V.input,"onUpdate:modelValue":o[1]||(o[1]=e=>V.input=e),placeholder:"请输入内容",disabled:!0},null,8,["modelValue"])])),_:1}),t(x,{title:"可清空",class:"demo"},{default:d((()=>[t(b,{modelValue:V.input,"onUpdate:modelValue":o[2]||(o[2]=e=>V.input=e),placeholder:"请输入内容",clearable:""},null,8,["modelValue"])])),_:1}),t(x,{title:"密码框",class:"demo"},{default:d((()=>[t(b,{modelValue:V.input,"onUpdate:modelValue":o[3]||(o[3]=e=>V.input=e),placeholder:"请输入内容","show-password":""},null,8,["modelValue"])])),_:1}),t(x,{title:"带 icon 的输入框",class:"demo"},{default:d((()=>[t(b,{modelValue:V.input1,"onUpdate:modelValue":o[4]||(o[4]=e=>V.input1=e),placeholder:"请选择日期"},{suffix:d((()=>[t(j,null,{default:d((()=>[t(U,{name:"ep:calendar"})])),_:1})])),_:1},8,["modelValue"]),t(b,{modelValue:V.input2,"onUpdate:modelValue":o[5]||(o[5]=e=>V.input2=e),placeholder:"请输入内容"},{prefix:d((()=>[t(j,null,{default:d((()=>[t(U,{name:"ep:search"})])),_:1})])),_:1},8,["modelValue"])])),_:1}),t(x,{title:"文本域",class:"demo"},{default:d((()=>[t(b,{modelValue:V.textarea,"onUpdate:modelValue":o[6]||(o[6]=e=>V.textarea=e),type:"textarea",rows:2,placeholder:"请输入内容"},null,8,["modelValue"])])),_:1})])}]]);export{V as default};
