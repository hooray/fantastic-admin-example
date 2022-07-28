
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as e,v as a,r as l,C as d,b as t,f as u,g as o,h as r,w as s,$ as n,M as c,m,S as f,E as p,az as _,cj as b,bu as i,bs as h,bt as v,cf as V,ar as j,e as w,as as y,bw as g}from"./index.84c9bfd8.js";import{E as x,a as U}from"./el-form.7850f0f1.js";import{E as k}from"./el-checkbox.d344784d.js";import{E as M}from"./el-input.f69128cc.js";/* empty css               */import{E,a as z}from"./el-select.50875c12.js";import"./el-form-item.2e22de35.js";import"./isEqual.7e94fa38.js";import"./event.d298a7ab.js";import"./index.b8cf1a00.js";import"./index.f7155ad7.js";import"./validator.3268d51f.js";const B={class:"search-container"},S={key:0,class:"more"},C=e({name:"SearchBar"}),T=a(Object.assign(C,{props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(e,{emit:a}){const b=e,i=l(!b.unfold);function h(){i.value=!i.value,a("toggle",i.value)}return d((()=>b.unfold),(()=>h()),{immediate:!0}),(a,l)=>{const d=f,b=p,v=_;return t(),u("div",B,[o(a.$slots,"default",{},void 0,!0),e.showMore?(t(),u("div",S,[r(v,{text:"",size:"small",onClick:h},{icon:s((()=>[r(b,null,{default:s((()=>[r(d,{name:i.value?"ep:caret-top":"ep:caret-bottom"},null,8,["name"])])),_:1})])),default:s((()=>[n(" "+c(i.value?"收起":"展开"),1)])),_:1})])):m("v-if",!0)])}}}),[["__scopeId","data-v-73f7a32e"]]),$={data:()=>({search:{name:"",department_id:"",department_job_id:"",role_id:"",check1:!0,check2:!1},searchMore:!1,searchMore2:!1})},q=n("备选项"),I=n("备选项"),O=n(" 筛选 "),A=n("导出"),D=n("查看已导出记录"),F=n("备选项"),G=n("备选项"),H=n(" 筛选 "),J=n("导出"),K=n("查看已导出记录");"function"==typeof h&&h($);const L=a($,[["render",function(e,a,l,d,o,n){const c=g,m=M,h=x,B=b,S=i,C=E,$=z,L=k,N=f,P=p,Q=_,R=U,W=T,X=v,Y=V("auth");return t(),u("div",null,[r(c,{title:"搜索面板",content:"SearchBar"}),r(X,null,{default:s((()=>[r(W,{"show-more":"",onToggle:a[4]||(a[4]=e=>o.searchMore=e)},{default:s((()=>[r(R,{model:o.search,size:"default","label-width":"120px"},{default:s((()=>[r(S,null,{default:s((()=>[r(B,{span:12},{default:s((()=>[r(h,{label:"姓名 / 手机号"},{default:s((()=>[r(m,{modelValue:o.search.name,"onUpdate:modelValue":a[0]||(a[0]=e=>o.search.name=e),placeholder:"请输入姓名或者手机号，支持模糊查询",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),r(S,null,{default:s((()=>[r(B,{span:6},{default:s((()=>[j((t(),w(h,{label:"部门"},{default:s((()=>[r($,{modelValue:o.search.department_id,"onUpdate:modelValue":a[1]||(a[1]=e=>o.search.department_id=e),clearable:"",placeholder:"请选择部门"},{default:s((()=>[r(C,{label:"技术部",value:1}),r(C,{label:"设计部",value:2}),r(C,{label:"行政部",value:3})])),_:1},8,["modelValue"])])),_:1})),[[Y,"supplay.department.browse"]])])),_:1}),r(B,{span:6},{default:s((()=>[j((t(),w(h,{label:"职位"},{default:s((()=>[r($,{modelValue:o.search.department_job_id,"onUpdate:modelValue":a[2]||(a[2]=e=>o.search.department_job_id=e),clearable:"",placeholder:"请选择职位"},{default:s((()=>[r(C,{label:"程序员",value:1}),r(C,{label:"设计师",value:2}),r(C,{label:"人事",value:3})])),_:1},8,["modelValue"])])),_:1})),[[Y,"supplay.department_job.browse"]])])),_:1}),r(B,{span:6},{default:s((()=>[j((t(),w(h,{label:"角色"},{default:s((()=>[r($,{modelValue:o.search.role_id,"onUpdate:modelValue":a[3]||(a[3]=e=>o.search.role_id=e),clearable:"",placeholder:"请选择角色"},{default:s((()=>[r(C,{label:"主管",value:1}),r(C,{label:"普通职员",value:2})])),_:1},8,["modelValue"])])),_:1})),[[Y,"supplay.role.browse"]])])),_:1})])),_:1}),j(r(S,null,{default:s((()=>[r(B,{span:24},{default:s((()=>[r(h,{label:"角色"},{default:s((()=>[r(L,{value:!0},{default:s((()=>[q])),_:1}),r(L,{value:!1},{default:s((()=>[I])),_:1})])),_:1})])),_:1})])),_:1},512),[[y,o.searchMore]]),r(h,null,{default:s((()=>[r(Q,{type:"primary"},{icon:s((()=>[r(P,null,{default:s((()=>[r(N,{name:"ep:search"})])),_:1})])),default:s((()=>[O])),_:1}),r(Q,null,{default:s((()=>[A])),_:1}),r(Q,{text:""},{default:s((()=>[D])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])),_:1}),r(X,{title:"默认展开"},{default:s((()=>[r(W,{"show-more":"",unfold:"",onToggle:a[11]||(a[11]=e=>o.searchMore2=e)},{default:s((()=>[r(R,{model:o.search,size:"default","label-width":"120px"},{default:s((()=>[r(S,null,{default:s((()=>[r(B,{span:12},{default:s((()=>[r(h,{label:"姓名 / 手机号"},{default:s((()=>[r(m,{modelValue:o.search.name,"onUpdate:modelValue":a[5]||(a[5]=e=>o.search.name=e),placeholder:"请输入姓名或者手机号，支持模糊查询",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),r(S,null,{default:s((()=>[r(B,{span:6},{default:s((()=>[j((t(),w(h,{label:"部门"},{default:s((()=>[r($,{modelValue:o.search.department_id,"onUpdate:modelValue":a[6]||(a[6]=e=>o.search.department_id=e),clearable:"",placeholder:"请选择部门"},{default:s((()=>[r(C,{label:"技术部",value:1}),r(C,{label:"设计部",value:2}),r(C,{label:"行政部",value:3})])),_:1},8,["modelValue"])])),_:1})),[[Y,"supplay.department.browse"]])])),_:1}),r(B,{span:6},{default:s((()=>[j((t(),w(h,{label:"职位"},{default:s((()=>[r($,{modelValue:o.search.department_job_id,"onUpdate:modelValue":a[7]||(a[7]=e=>o.search.department_job_id=e),clearable:"",placeholder:"请选择职位"},{default:s((()=>[r(C,{label:"程序员",value:1}),r(C,{label:"设计师",value:2}),r(C,{label:"人事",value:3})])),_:1},8,["modelValue"])])),_:1})),[[Y,"supplay.department_job.browse"]])])),_:1}),r(B,{span:6},{default:s((()=>[j((t(),w(h,{label:"角色"},{default:s((()=>[r($,{modelValue:o.search.role_id,"onUpdate:modelValue":a[8]||(a[8]=e=>o.search.role_id=e),clearable:"",placeholder:"请选择角色"},{default:s((()=>[r(C,{label:"主管",value:1}),r(C,{label:"普通职员",value:2})])),_:1},8,["modelValue"])])),_:1})),[[Y,"supplay.role.browse"]])])),_:1})])),_:1}),j(r(S,null,{default:s((()=>[r(B,{span:24},{default:s((()=>[r(h,{label:"角色"},{default:s((()=>[r(L,{modelValue:o.search.check1,"onUpdate:modelValue":a[9]||(a[9]=e=>o.search.check1=e)},{default:s((()=>[F])),_:1},8,["modelValue"]),r(L,{modelValue:o.search.check2,"onUpdate:modelValue":a[10]||(a[10]=e=>o.search.check2=e)},{default:s((()=>[G])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},512),[[y,o.searchMore2]]),r(h,null,{default:s((()=>[r(Q,{type:"primary"},{icon:s((()=>[r(P,null,{default:s((()=>[r(N,{name:"ep:search"})])),_:1})])),default:s((()=>[H])),_:1}),r(Q,null,{default:s((()=>[J])),_:1}),r(Q,{text:""},{default:s((()=>[K])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})])}]]);export{L as default};