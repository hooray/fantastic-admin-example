
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as e,f as l,h as a,w as m,bl as t,H as o,bL as n,b as u,bO as d}from"./index.dbeb19dd.js";import{E as s}from"./el-input-number.089ca745.js";import"./el-input.923c393f.js";import i from"./alert.b2b5cc8c.js";import"./event.fa25aaef.js";import"./index.1f2f1622.js";import"./el-alert.83855865.js";import"./el-link.c28e9f5d.js";const r={components:{Alert:i},data:()=>({num:1,num2:1,num3:5,num4:1,num5:1})};"function"==typeof t&&t(r);var p=e(r,[["render",function(e,t,i,r,p,f){const c=o("Alert"),V=d,b=s,j=n;return u(),l("div",null,[a(c),a(V,{title:"计数器"}),a(j,{title:"基础用法",class:"demo"},{default:m((()=>[a(b,{modelValue:p.num,"onUpdate:modelValue":t[0]||(t[0]=e=>p.num=e),min:1,max:10,label:"描述文字"},null,8,["modelValue"])])),_:1}),a(j,{title:"禁用状态",class:"demo"},{default:m((()=>[a(b,{modelValue:p.num2,"onUpdate:modelValue":t[1]||(t[1]=e=>p.num2=e),disabled:!0},null,8,["modelValue"])])),_:1}),a(j,{title:"步数",class:"demo"},{default:m((()=>[a(b,{modelValue:p.num3,"onUpdate:modelValue":t[2]||(t[2]=e=>p.num3=e),step:2},null,8,["modelValue"])])),_:1}),a(j,{title:"精度",class:"demo"},{default:m((()=>[a(b,{modelValue:p.num4,"onUpdate:modelValue":t[3]||(t[3]=e=>p.num4=e),precision:2,step:.1,max:10},null,8,["modelValue","step"])])),_:1}),a(j,{title:"按钮位置",class:"demo"},{default:m((()=>[a(b,{modelValue:p.num5,"onUpdate:modelValue":t[4]||(t[4]=e=>p.num5=e),"controls-position":"right",min:1,max:10},null,8,["modelValue"])])),_:1})])}]]);export{p as default};
