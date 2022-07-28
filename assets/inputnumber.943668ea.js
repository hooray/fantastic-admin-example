
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as e,f as l,h as t,w as a,bs as m,G as o,bt as n,b as u,bw as d}from"./index.84c9bfd8.js";import{E as s}from"./el-input-number.16144ee5.js";import"./el-input.f69128cc.js";import i from"./alert.62ee8977.js";import"./event.d298a7ab.js";import"./index.358b0b8c.js";import"./el-alert.0cce966b.js";import"./el-link.9df77598.js";const r={components:{Alert:i},data:()=>({num:1,num2:1,num3:5,num4:1,num5:1})};"function"==typeof m&&m(r);const p=e(r,[["render",function(e,m,i,r,p,c){const f=o("Alert"),V=d,b=s,j=n;return u(),l("div",null,[t(f),t(V,{title:"计数器"}),t(j,{title:"基础用法",class:"demo"},{default:a((()=>[t(b,{modelValue:p.num,"onUpdate:modelValue":m[0]||(m[0]=e=>p.num=e),min:1,max:10,label:"描述文字"},null,8,["modelValue"])])),_:1}),t(j,{title:"禁用状态",class:"demo"},{default:a((()=>[t(b,{modelValue:p.num2,"onUpdate:modelValue":m[1]||(m[1]=e=>p.num2=e),disabled:!0},null,8,["modelValue"])])),_:1}),t(j,{title:"步数",class:"demo"},{default:a((()=>[t(b,{modelValue:p.num3,"onUpdate:modelValue":m[2]||(m[2]=e=>p.num3=e),step:2},null,8,["modelValue"])])),_:1}),t(j,{title:"精度",class:"demo"},{default:a((()=>[t(b,{modelValue:p.num4,"onUpdate:modelValue":m[3]||(m[3]=e=>p.num4=e),precision:2,step:.1,max:10},null,8,["modelValue","step"])])),_:1}),t(j,{title:"按钮位置",class:"demo"},{default:a((()=>[t(b,{modelValue:p.num5,"onUpdate:modelValue":m[4]||(m[4]=e=>p.num5=e),"controls-position":"right",min:1,max:10},null,8,["modelValue"])])),_:1})])}]]);export{p as default};
