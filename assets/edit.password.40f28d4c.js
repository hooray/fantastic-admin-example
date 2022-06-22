
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.0e18a160.js";import{d as a,D as s,F as l,aD as r,r as o,b as d,f as t,h as u,w as p,bl as n,$ as m,az as i,bO as c,ci as f,bM as w,bL as g,aw as b,C as h}from"./index.6dffb2c9.js";import{E as v,a as _}from"./el-form.5b5b497f.js";import"./el-form-item.3d23d1d6.js";import{E as y}from"./el-input.c02cf894.js";import"./isEqual.d6d53991.js";import"./event2.c09267d7.js";const V=m("提交"),j=a({name:"PersonalEditPassword"}),k=Object.assign(j,{setup(a){const n=s(),m=l(),{proxy:j}=h(),k=r(),x=o({password:"",newpassword:"",checkpassword:""}),q=o({password:[{required:!0,message:"请输入原密码",trigger:"blur"}],newpassword:[{required:!0,message:"请输入新密码",trigger:"blur"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}],checkpassword:[{required:!0,message:"请输入新密码",trigger:"blur"},{validator:(e,a,s)=>{a!==x.value.newpassword?s(new Error("请确认新密码")):s()}}]});function E(){j.$refs.formRef.validate((e=>{e&&k.editPassword(x.value).then((()=>{i({type:"success",message:"模拟修改成功，请重新登录"}),k.logout().then((()=>{m.push({name:"login",query:{redirect:n.fullPath}})}))})).catch((()=>{}))}))}return(a,s)=>{const l=c,r=y,o=v,n=_,m=f,i=w,h=g,j=b,k=e;return d(),t("div",null,[u(l,{title:"修改密码",content:"定期修改密码可以提高帐号安全性噢~"}),u(h,null,{default:p((()=>[u(i,null,{default:p((()=>[u(m,{md:24,lg:12},{default:p((()=>[u(n,{ref:"formRef",model:x.value,rules:q.value,"label-width":"120px"},{default:p((()=>[u(o,{label:"原密码",prop:"password"},{default:p((()=>[u(r,{modelValue:x.value.password,"onUpdate:modelValue":s[0]||(s[0]=e=>x.value.password=e),type:"password",placeholder:"请输入原密码"},null,8,["modelValue"])])),_:1}),u(o,{label:"新密码",prop:"newpassword"},{default:p((()=>[u(r,{modelValue:x.value.newpassword,"onUpdate:modelValue":s[1]||(s[1]=e=>x.value.newpassword=e),type:"password",placeholder:"请输入原密码"},null,8,["modelValue"])])),_:1}),u(o,{label:"确认新密码",prop:"checkpassword"},{default:p((()=>[u(r,{modelValue:x.value.checkpassword,"onUpdate:modelValue":s[2]||(s[2]=e=>x.value.checkpassword=e),type:"password",placeholder:"请输入原密码"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])),_:1})])),_:1}),u(k,null,{default:p((()=>[u(j,{type:"primary",size:"large",onClick:E},{default:p((()=>[V])),_:1})])),_:1})])}}});"function"==typeof n&&n(k);export{k as default};
