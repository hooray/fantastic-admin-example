
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as e,E as l,f as a,h as t,w as d,bl as o,H as u,bL as n,b as p,bO as s,R as m}from"./index.dbeb19dd.js";import{E as i}from"./el-input.923c393f.js";import r from"./alert.b2b5cc8c.js";import"./event.fa25aaef.js";import"./el-alert.83855865.js";import"./el-link.c28e9f5d.js";const c={components:{Alert:r},data:()=>({input:"",input1:"",input2:"",textarea:""})};"function"==typeof o&&o(c);var f=e(c,[["render",function(e,o,r,c,f,V){const b=u("Alert"),h=s,_=i,x=n,U=m,j=l;return p(),a("div",null,[t(b),t(h,{title:"输入框"}),t(x,{title:"基础用法",class:"demo"},{default:d((()=>[t(_,{modelValue:f.input,"onUpdate:modelValue":o[0]||(o[0]=e=>f.input=e),placeholder:"请输入内容"},null,8,["modelValue"])])),_:1}),t(x,{title:"禁用状态",class:"demo"},{default:d((()=>[t(_,{modelValue:f.input,"onUpdate:modelValue":o[1]||(o[1]=e=>f.input=e),placeholder:"请输入内容",disabled:!0},null,8,["modelValue"])])),_:1}),t(x,{title:"可清空",class:"demo"},{default:d((()=>[t(_,{modelValue:f.input,"onUpdate:modelValue":o[2]||(o[2]=e=>f.input=e),placeholder:"请输入内容",clearable:""},null,8,["modelValue"])])),_:1}),t(x,{title:"密码框",class:"demo"},{default:d((()=>[t(_,{modelValue:f.input,"onUpdate:modelValue":o[3]||(o[3]=e=>f.input=e),placeholder:"请输入内容","show-password":""},null,8,["modelValue"])])),_:1}),t(x,{title:"带 icon 的输入框",class:"demo"},{default:d((()=>[t(_,{modelValue:f.input1,"onUpdate:modelValue":o[4]||(o[4]=e=>f.input1=e),placeholder:"请选择日期"},{suffix:d((()=>[t(j,null,{default:d((()=>[t(U,{name:"ep:calendar"})])),_:1})])),_:1},8,["modelValue"]),t(_,{modelValue:f.input2,"onUpdate:modelValue":o[5]||(o[5]=e=>f.input2=e),placeholder:"请输入内容"},{prefix:d((()=>[t(j,null,{default:d((()=>[t(U,{name:"ep:search"})])),_:1})])),_:1},8,["modelValue"])])),_:1}),t(x,{title:"文本域",class:"demo"},{default:d((()=>[t(_,{modelValue:f.textarea,"onUpdate:modelValue":o[6]||(o[6]=e=>f.textarea=e),type:"textarea",rows:2,placeholder:"请输入内容"},null,8,["modelValue"])])),_:1})])}]]);export{f as default};
