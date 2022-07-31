
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as e,f as l,h as a,w as t,bu as m,C as o,bv as n,b as u,by as d}from"./index.cc47405f.js";import{E as s}from"./el-input-number.4c96ea72.js";import"./el-input.3ca4a104.js";import i from"./alert.9797144d.js";import"./event.d298a7ab.js";import"./index.358b0b8c.js";import"./el-alert.ddb5f59f.js";import"./el-link.b241828a.js";const r={components:{Alert:i},data:()=>({num:1,num2:1,num3:5,num4:1,num5:1})};"function"==typeof m&&m(r);const p=e(r,[["render",function(e,m,i,r,p,c){const f=o("Alert"),V=d,b=s,j=n;return u(),l("div",null,[a(f),a(V,{title:"计数器"}),a(j,{title:"基础用法",class:"demo"},{default:t((()=>[a(b,{modelValue:p.num,"onUpdate:modelValue":m[0]||(m[0]=e=>p.num=e),min:1,max:10,label:"描述文字"},null,8,["modelValue"])])),_:1}),a(j,{title:"禁用状态",class:"demo"},{default:t((()=>[a(b,{modelValue:p.num2,"onUpdate:modelValue":m[1]||(m[1]=e=>p.num2=e),disabled:!0},null,8,["modelValue"])])),_:1}),a(j,{title:"步数",class:"demo"},{default:t((()=>[a(b,{modelValue:p.num3,"onUpdate:modelValue":m[2]||(m[2]=e=>p.num3=e),step:2},null,8,["modelValue"])])),_:1}),a(j,{title:"精度",class:"demo"},{default:t((()=>[a(b,{modelValue:p.num4,"onUpdate:modelValue":m[3]||(m[3]=e=>p.num4=e),precision:2,step:.1,max:10},null,8,["modelValue","step"])])),_:1}),a(j,{title:"按钮位置",class:"demo"},{default:t((()=>[a(b,{modelValue:p.num5,"onUpdate:modelValue":m[4]||(m[4]=e=>p.num5=e),"controls-position":"right",min:1,max:10},null,8,["modelValue"])])),_:1})])}]]);export{p as default};
