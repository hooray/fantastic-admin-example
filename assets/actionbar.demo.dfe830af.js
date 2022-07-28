
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.6ec8bfca.js";import{v as l,cj as a,bu as o,az as d,f as t,h as m,w as u,bs as r,bw as f,bt as n,b as p,H as s,$ as i}from"./index.84c9bfd8.js";import{E as b,a as V}from"./el-form.7850f0f1.js";/* empty css                       *//* empty css                 *//* empty css                          */import{E as c,a as _}from"./el-checkbox.d344784d.js";import{E as y}from"./el-switch.d46439b7.js";import{E as j}from"./el-time-picker.e7426735.js";import{E as h}from"./el-input.f69128cc.js";import{E as U}from"./el-date-picker.e766168c.js";/* empty css               */import{E as g,a as v}from"./el-select.50875c12.js";import"./el-form-item.2e22de35.js";import{b as x,a as w}from"./index.28428bc0.js";import"./isEqual.7e94fa38.js";import"./event.d298a7ab.js";import"./validator.3268d51f.js";import"./panel-time-pick.126100bb.js";import"./index.358b0b8c.js";import"./_baseFlatten.8f82f422.js";import"./arrays.21a21ad5.js";import"./index.f7155ad7.js";import"./index.b8cf1a00.js";const E={data:()=>({form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}})},k=s("p",null,"FixedActionBar",-1),z=s("p",{style:{"margin-bottom":"0"}},"避免因页面过长导致操作按钮需要滚动到页面底部才能操作，例如表单页",-1),F=i("-"),q=i("-"),A=i("-"),B=i("立即创建"),H=i("取消");"function"==typeof r&&r(E);const $=l(E,[["render",function(l,r,s,i,E,$){const C=f,D=h,G=b,I=g,J=v,K=U,L=a,M=j,N=y,O=c,P=_,Q=x,R=w,S=V,T=o,W=n,X=d,Y=e;return p(),t("div",null,[m(C,{title:"固定底部操作栏",content:"避免因页面过长导致操作按钮需要滚动到页面底部才能操作，例如表单页"},{content:u((()=>[k,z])),_:1}),m(W,null,{default:u((()=>[m(T,null,{default:u((()=>[m(L,{md:24,lg:12},{default:u((()=>[m(S,{ref:"form",model:E.form,"label-width":"120px"},{default:u((()=>[m(G,{label:"活动名称"},{default:u((()=>[m(D,{modelValue:E.form.name,"onUpdate:modelValue":r[0]||(r[0]=e=>E.form.name=e)},null,8,["modelValue"])])),_:1}),m(G,{label:"活动区域"},{default:u((()=>[m(J,{modelValue:E.form.region,"onUpdate:modelValue":r[1]||(r[1]=e=>E.form.region=e),placeholder:"请选择活动区域"},{default:u((()=>[m(I,{label:"区域一",value:"shanghai"}),m(I,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),m(G,{label:"活动时间"},{default:u((()=>[m(L,{span:11},{default:u((()=>[m(K,{modelValue:E.form.date1,"onUpdate:modelValue":r[2]||(r[2]=e=>E.form.date1=e),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),m(L,{class:"line",span:2},{default:u((()=>[F])),_:1}),m(L,{span:11},{default:u((()=>[m(M,{modelValue:E.form.date2,"onUpdate:modelValue":r[3]||(r[3]=e=>E.form.date2=e),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),m(G,{label:"即时配送"},{default:u((()=>[m(N,{modelValue:E.form.delivery,"onUpdate:modelValue":r[4]||(r[4]=e=>E.form.delivery=e)},null,8,["modelValue"])])),_:1}),m(G,{label:"活动性质"},{default:u((()=>[m(P,{modelValue:E.form.type,"onUpdate:modelValue":r[5]||(r[5]=e=>E.form.type=e)},{default:u((()=>[m(O,{label:"美食/餐厅线上活动",name:"type"}),m(O,{label:"地推活动",name:"type"}),m(O,{label:"线下主题活动",name:"type"}),m(O,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),m(G,{label:"特殊资源"},{default:u((()=>[m(R,{modelValue:E.form.resource,"onUpdate:modelValue":r[6]||(r[6]=e=>E.form.resource=e)},{default:u((()=>[m(Q,{label:"线上品牌商赞助"}),m(Q,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),m(G,{label:"活动形式"},{default:u((()=>[m(D,{modelValue:E.form.desc,"onUpdate:modelValue":r[7]||(r[7]=e=>E.form.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1}),m(G,{label:"活动名称"},{default:u((()=>[m(D,{modelValue:E.form.name,"onUpdate:modelValue":r[8]||(r[8]=e=>E.form.name=e)},null,8,["modelValue"])])),_:1}),m(G,{label:"活动区域"},{default:u((()=>[m(J,{modelValue:E.form.region,"onUpdate:modelValue":r[9]||(r[9]=e=>E.form.region=e),placeholder:"请选择活动区域"},{default:u((()=>[m(I,{label:"区域一",value:"shanghai"}),m(I,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),m(G,{label:"活动时间"},{default:u((()=>[m(L,{span:11},{default:u((()=>[m(K,{modelValue:E.form.date1,"onUpdate:modelValue":r[10]||(r[10]=e=>E.form.date1=e),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),m(L,{class:"line",span:2},{default:u((()=>[q])),_:1}),m(L,{span:11},{default:u((()=>[m(M,{modelValue:E.form.date2,"onUpdate:modelValue":r[11]||(r[11]=e=>E.form.date2=e),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),m(G,{label:"即时配送"},{default:u((()=>[m(N,{modelValue:E.form.delivery,"onUpdate:modelValue":r[12]||(r[12]=e=>E.form.delivery=e)},null,8,["modelValue"])])),_:1}),m(G,{label:"活动性质"},{default:u((()=>[m(P,{modelValue:E.form.type,"onUpdate:modelValue":r[13]||(r[13]=e=>E.form.type=e)},{default:u((()=>[m(O,{label:"美食/餐厅线上活动",name:"type"}),m(O,{label:"地推活动",name:"type"}),m(O,{label:"线下主题活动",name:"type"}),m(O,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),m(G,{label:"特殊资源"},{default:u((()=>[m(R,{modelValue:E.form.resource,"onUpdate:modelValue":r[14]||(r[14]=e=>E.form.resource=e)},{default:u((()=>[m(Q,{label:"线上品牌商赞助"}),m(Q,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),m(G,{label:"活动形式"},{default:u((()=>[m(D,{modelValue:E.form.desc,"onUpdate:modelValue":r[15]||(r[15]=e=>E.form.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1}),m(G,{label:"活动名称"},{default:u((()=>[m(D,{modelValue:E.form.name,"onUpdate:modelValue":r[16]||(r[16]=e=>E.form.name=e)},null,8,["modelValue"])])),_:1}),m(G,{label:"活动区域"},{default:u((()=>[m(J,{modelValue:E.form.region,"onUpdate:modelValue":r[17]||(r[17]=e=>E.form.region=e),placeholder:"请选择活动区域"},{default:u((()=>[m(I,{label:"区域一",value:"shanghai"}),m(I,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),m(G,{label:"活动时间"},{default:u((()=>[m(L,{span:11},{default:u((()=>[m(K,{modelValue:E.form.date1,"onUpdate:modelValue":r[18]||(r[18]=e=>E.form.date1=e),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),m(L,{class:"line",span:2},{default:u((()=>[A])),_:1}),m(L,{span:11},{default:u((()=>[m(M,{modelValue:E.form.date2,"onUpdate:modelValue":r[19]||(r[19]=e=>E.form.date2=e),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),m(G,{label:"即时配送"},{default:u((()=>[m(N,{modelValue:E.form.delivery,"onUpdate:modelValue":r[20]||(r[20]=e=>E.form.delivery=e)},null,8,["modelValue"])])),_:1}),m(G,{label:"活动性质"},{default:u((()=>[m(P,{modelValue:E.form.type,"onUpdate:modelValue":r[21]||(r[21]=e=>E.form.type=e)},{default:u((()=>[m(O,{label:"美食/餐厅线上活动",name:"type"}),m(O,{label:"地推活动",name:"type"}),m(O,{label:"线下主题活动",name:"type"}),m(O,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),m(G,{label:"特殊资源"},{default:u((()=>[m(R,{modelValue:E.form.resource,"onUpdate:modelValue":r[22]||(r[22]=e=>E.form.resource=e)},{default:u((()=>[m(Q,{label:"线上品牌商赞助"}),m(Q,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),m(G,{label:"活动形式"},{default:u((()=>[m(D,{modelValue:E.form.desc,"onUpdate:modelValue":r[23]||(r[23]=e=>E.form.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})])),_:1}),m(Y,null,{default:u((()=>[m(X,{type:"primary",size:"large"},{default:u((()=>[B])),_:1}),m(X,{size:"large"},{default:u((()=>[H])),_:1})])),_:1})])}]]);export{$ as default};