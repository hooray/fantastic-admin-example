
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as e,E as l,f as a,h as t,w as o,bu as d,C as u,bv as n,b as p,by as s,U as m}from"./index.8b097f1d.js";import{E as i}from"./el-input.d32b4523.js";import r from"./alert.2376be83.js";import"./event.d298a7ab.js";import"./el-alert.14368c78.js";import"./el-link.b1547d17.js";const c={components:{Alert:r},data:()=>({input:"",input1:"",input2:"",textarea:""})};"function"==typeof d&&d(c);const V=e(c,[["render",function(e,d,r,c,V,f){const b=u("Alert"),h=s,_=i,x=n,U=m,j=l;return p(),a("div",null,[t(b),t(h,{title:"输入框"}),t(x,{title:"基础用法",class:"demo"},{default:o((()=>[t(_,{modelValue:V.input,"onUpdate:modelValue":d[0]||(d[0]=e=>V.input=e),placeholder:"请输入内容"},null,8,["modelValue"])])),_:1}),t(x,{title:"禁用状态",class:"demo"},{default:o((()=>[t(_,{modelValue:V.input,"onUpdate:modelValue":d[1]||(d[1]=e=>V.input=e),placeholder:"请输入内容",disabled:!0},null,8,["modelValue"])])),_:1}),t(x,{title:"可清空",class:"demo"},{default:o((()=>[t(_,{modelValue:V.input,"onUpdate:modelValue":d[2]||(d[2]=e=>V.input=e),placeholder:"请输入内容",clearable:""},null,8,["modelValue"])])),_:1}),t(x,{title:"密码框",class:"demo"},{default:o((()=>[t(_,{modelValue:V.input,"onUpdate:modelValue":d[3]||(d[3]=e=>V.input=e),placeholder:"请输入内容","show-password":""},null,8,["modelValue"])])),_:1}),t(x,{title:"带 icon 的输入框",class:"demo"},{default:o((()=>[t(_,{modelValue:V.input1,"onUpdate:modelValue":d[4]||(d[4]=e=>V.input1=e),placeholder:"请选择日期"},{suffix:o((()=>[t(j,null,{default:o((()=>[t(U,{name:"ep:calendar"})])),_:1})])),_:1},8,["modelValue"]),t(_,{modelValue:V.input2,"onUpdate:modelValue":d[5]||(d[5]=e=>V.input2=e),placeholder:"请输入内容"},{prefix:o((()=>[t(j,null,{default:o((()=>[t(U,{name:"ep:search"})])),_:1})])),_:1},8,["modelValue"])])),_:1}),t(x,{title:"文本域",class:"demo"},{default:o((()=>[t(_,{modelValue:V.textarea,"onUpdate:modelValue":d[6]||(d[6]=e=>V.textarea=e),type:"textarea",rows:2,placeholder:"请输入内容"},null,8,["modelValue"])])),_:1})])}]]);export{V as default};
