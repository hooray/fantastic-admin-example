
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as e,v as t,c as a,b as l,f as s,L as n,m as u,B as r,h as p,w as f,n as i,i as d,R as o,E as v,ci as c,bM as y,bl as m,bO as x,bL as g}from"./index.b8cb1fc0.js";const _={key:0,class:"prefix"},b={class:"text"},w={key:1,class:"suffix"},S=e({name:"Trend"});var j=t(Object.assign(S,{props:{value:{type:String,required:!0},type:{type:String,validator:e=>["up","down"].includes(e),default:"up"},prefix:{type:String,default:""},suffix:{type:String,default:""},reverse:{type:Boolean,default:!1}},setup(e){const t=e,c=a((()=>{let e="up"===t.type;return t.reverse&&(e=!e),e}));return(t,a)=>{const y=o,m=v;return l(),s("div",{class:i("trend "+(d(c)?"up":"down"))},[e.prefix?(l(),s("span",_,n(e.prefix),1)):u("v-if",!0),r("span",b,n(e.value),1),e.suffix?(l(),s("span",w,n(e.suffix),1)):u("v-if",!0),p(m,null,{default:f((()=>[p(y,{name:"ep:caret-top"})])),_:1})],2)}}}),[["__scopeId","data-v-4323bf46"]]);const k={},B=r("p",null,"Trend",-1),L=r("p",{style:{"margin-bottom":"0"}},"标记上升和下降趋势。通常用绿色代表“好”，红色代表“不好”，股票涨跌场景除外",-1);"function"==typeof m&&m(k);var O=t(k,[["render",function(e,t){const a=x,n=j,u=g,i=c,d=y;return l(),s("div",null,[p(a,{title:"趋势符号"},{content:f((()=>[B,L])),_:1}),p(d,{gutter:20,style:{margin:"0 10px"}},{default:f((()=>[p(i,{md:8},{default:f((()=>[p(u,{title:"基础用法",style:{margin:"0"}},{default:f((()=>[r("p",null,[p(n,{value:"12.3"})]),r("p",null,[p(n,{value:"12.3",type:"down"})])])),_:1})])),_:1}),p(i,{md:8},{default:f((()=>[p(u,{title:"颜色反转",style:{margin:"0"}},{default:f((()=>[r("p",null,[p(n,{value:"12.3",reverse:""})]),r("p",null,[p(n,{value:"12.3",type:"down",reverse:""})])])),_:1})])),_:1}),p(i,{md:8},{default:f((()=>[p(u,{title:"前缀后缀",style:{margin:"0"}},{default:f((()=>[r("p",null,[p(n,{value:"12.3",prefix:"$"})]),r("p",null,[p(n,{value:"12.3",suffix:"%"})])])),_:1})])),_:1})])),_:1})])}]]);export{O as default};
