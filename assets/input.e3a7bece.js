
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as e,E as l,f as a,h as t,w as o,bl as d,H as u,bL as n,b as p,bO as s,R as m}from"./index.606e36ef.js";import{E as i}from"./el-input.0368c0d2.js";import r from"./alert.8343ce24.js";import"./event2.c09267d7.js";import"./el-alert.96f6e526.js";import"./el-link.233a28fa.js";const c={components:{Alert:r},data:()=>({input:"",input1:"",input2:"",textarea:""})};"function"==typeof d&&d(c);var f=e(c,[["render",function(e,d,r,c,f,V){const h=u("Alert"),_=s,x=i,U=n,b=m,j=l;return p(),a("div",null,[t(h),t(_,{title:"输入框"}),t(U,{title:"基础用法",class:"demo"},{default:o((()=>[t(x,{modelValue:f.input,"onUpdate:modelValue":d[0]||(d[0]=e=>f.input=e),placeholder:"请输入内容"},null,8,["modelValue"])])),_:1}),t(U,{title:"禁用状态",class:"demo"},{default:o((()=>[t(x,{modelValue:f.input,"onUpdate:modelValue":d[1]||(d[1]=e=>f.input=e),placeholder:"请输入内容",disabled:!0},null,8,["modelValue"])])),_:1}),t(U,{title:"可清空",class:"demo"},{default:o((()=>[t(x,{modelValue:f.input,"onUpdate:modelValue":d[2]||(d[2]=e=>f.input=e),placeholder:"请输入内容",clearable:""},null,8,["modelValue"])])),_:1}),t(U,{title:"密码框",class:"demo"},{default:o((()=>[t(x,{modelValue:f.input,"onUpdate:modelValue":d[3]||(d[3]=e=>f.input=e),placeholder:"请输入内容","show-password":""},null,8,["modelValue"])])),_:1}),t(U,{title:"带 icon 的输入框",class:"demo"},{default:o((()=>[t(x,{modelValue:f.input1,"onUpdate:modelValue":d[4]||(d[4]=e=>f.input1=e),placeholder:"请选择日期"},{suffix:o((()=>[t(j,null,{default:o((()=>[t(b,{name:"ep:calendar"})])),_:1})])),_:1},8,["modelValue"]),t(x,{modelValue:f.input2,"onUpdate:modelValue":d[5]||(d[5]=e=>f.input2=e),placeholder:"请输入内容"},{prefix:o((()=>[t(j,null,{default:o((()=>[t(b,{name:"ep:search"})])),_:1})])),_:1},8,["modelValue"])])),_:1}),t(U,{title:"文本域",class:"demo"},{default:o((()=>[t(x,{modelValue:f.textarea,"onUpdate:modelValue":d[6]||(d[6]=e=>f.textarea=e),type:"textarea",rows:2,placeholder:"请输入内容"},null,8,["modelValue"])])),_:1})])}]]);export{f as default};
