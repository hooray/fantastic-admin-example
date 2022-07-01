
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as e,E as l,f as a,h as t,w as o,bl as d,H as u,bL as n,b as p,bO as s,R as m}from"./index.1763518e.js";import{E as i}from"./el-input.da2df40f.js";import r from"./alert.f1ae7d5c.js";import"./event.fa25aaef.js";import"./el-alert.81f303c4.js";import"./el-link.f9b2948e.js";const f={components:{Alert:r},data:()=>({input:"",input1:"",input2:"",textarea:""})};"function"==typeof d&&d(f);var c=e(f,[["render",function(e,d,r,f,c,V){const h=u("Alert"),_=s,x=i,b=n,U=m,j=l;return p(),a("div",null,[t(h),t(_,{title:"输入框"}),t(b,{title:"基础用法",class:"demo"},{default:o((()=>[t(x,{modelValue:c.input,"onUpdate:modelValue":d[0]||(d[0]=e=>c.input=e),placeholder:"请输入内容"},null,8,["modelValue"])])),_:1}),t(b,{title:"禁用状态",class:"demo"},{default:o((()=>[t(x,{modelValue:c.input,"onUpdate:modelValue":d[1]||(d[1]=e=>c.input=e),placeholder:"请输入内容",disabled:!0},null,8,["modelValue"])])),_:1}),t(b,{title:"可清空",class:"demo"},{default:o((()=>[t(x,{modelValue:c.input,"onUpdate:modelValue":d[2]||(d[2]=e=>c.input=e),placeholder:"请输入内容",clearable:""},null,8,["modelValue"])])),_:1}),t(b,{title:"密码框",class:"demo"},{default:o((()=>[t(x,{modelValue:c.input,"onUpdate:modelValue":d[3]||(d[3]=e=>c.input=e),placeholder:"请输入内容","show-password":""},null,8,["modelValue"])])),_:1}),t(b,{title:"带 icon 的输入框",class:"demo"},{default:o((()=>[t(x,{modelValue:c.input1,"onUpdate:modelValue":d[4]||(d[4]=e=>c.input1=e),placeholder:"请选择日期"},{suffix:o((()=>[t(j,null,{default:o((()=>[t(U,{name:"ep:calendar"})])),_:1})])),_:1},8,["modelValue"]),t(x,{modelValue:c.input2,"onUpdate:modelValue":d[5]||(d[5]=e=>c.input2=e),placeholder:"请输入内容"},{prefix:o((()=>[t(j,null,{default:o((()=>[t(U,{name:"ep:search"})])),_:1})])),_:1},8,["modelValue"])])),_:1}),t(b,{title:"文本域",class:"demo"},{default:o((()=>[t(x,{modelValue:c.textarea,"onUpdate:modelValue":d[6]||(d[6]=e=>c.textarea=e),type:"textarea",rows:2,placeholder:"请输入内容"},null,8,["modelValue"])])),_:1})])}]]);export{c as default};
