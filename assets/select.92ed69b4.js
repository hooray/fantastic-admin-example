
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as l,f as e,h as a,w as u,bu as o,C as t,bv as d,b as s,H as v,Q as b,by as n,e as i}from"./index.edceb537.js";import"./el-input.7941ab17.js";/* empty css               */import{E as m,a as p}from"./el-select.6b73bac6.js";import r from"./alert.6c5246b2.js";import"./event.d298a7ab.js";import"./index.abd9b2d1.js";import"./isEqual.0ad9494d.js";import"./index.8b0b2c0f.js";import"./validator.b834a4fe.js";import"./el-alert.9066d762.js";import"./el-link.7532a844.js";const c={components:{Alert:r},data:()=>({options1:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value1:"",options2:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶",disabled:!0},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value2:"",value3:[]})};"function"==typeof o&&o(c);const f=l(c,[["render",function(l,o,r,c,f,V){const j=t("Alert"),_=n,y=m,h=p,k=d;return s(),e("div",null,[a(j),a(_,{title:"选择器"}),a(k,{title:"基础用法",class:"demo"},{default:u((()=>[a(h,{modelValue:f.value1,"onUpdate:modelValue":o[0]||(o[0]=l=>f.value1=l),placeholder:"请选择"},{default:u((()=>[(s(!0),e(v,null,b(f.options1,(l=>(s(),i(y,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),a(k,{title:"有禁用选项",class:"demo"},{default:u((()=>[a(h,{modelValue:f.value2,"onUpdate:modelValue":o[1]||(o[1]=l=>f.value2=l),placeholder:"请选择"},{default:u((()=>[(s(!0),e(v,null,b(f.options2,(l=>(s(),i(y,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),a(k,{title:"禁用状态",class:"demo"},{default:u((()=>[a(h,{modelValue:f.value1,"onUpdate:modelValue":o[2]||(o[2]=l=>f.value1=l),disabled:"",placeholder:"请选择"},{default:u((()=>[(s(!0),e(v,null,b(f.options1,(l=>(s(),i(y,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),a(k,{title:"可清空单选",class:"demo"},{default:u((()=>[a(h,{modelValue:f.value1,"onUpdate:modelValue":o[3]||(o[3]=l=>f.value1=l),clearable:"",placeholder:"请选择"},{default:u((()=>[(s(!0),e(v,null,b(f.options1,(l=>(s(),i(y,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),a(k,{title:"基础多选",class:"demo"},{default:u((()=>[a(h,{modelValue:f.value3,"onUpdate:modelValue":o[4]||(o[4]=l=>f.value3=l),multiple:"",placeholder:"请选择"},{default:u((()=>[(s(!0),e(v,null,b(f.options1,(l=>(s(),i(y,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),a(k,{title:"可搜索",class:"demo"},{default:u((()=>[a(h,{modelValue:f.value1,"onUpdate:modelValue":o[5]||(o[5]=l=>f.value1=l),filterable:"",placeholder:"请选择"},{default:u((()=>[(s(!0),e(v,null,b(f.options1,(l=>(s(),i(y,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])}]]);export{f as default};
