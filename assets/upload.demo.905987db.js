
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as e,v as t,b as a,e as s,w as i,f as l,C as n,h as r,m as o,O as d,P as u,az as p,S as c,E as m,$ as h,r as f,N as g,R as y,k as v,aq as x,ar as b,n as w,dM as $,dN as k,bl as _,bL as S,bO as O}from"./index.7e6c6c91.js";import{E as j,a as z,_ as I}from"./index.48f66efd.js";import{E as C}from"./el-alert.d1fb4618.js";/* empty css                   */const U={class:"slot"},N=(e=>(d("data-v-6f2f9936"),e=e(),u(),e))((()=>n("div",{class:"el-upload__text"},[h("将文件拖到此处，或"),n("em",null,"点击上传")],-1))),V={key:0,class:"el-upload__tip"},B={style:{display:"inline-block"}},E=e({name:"FileUpload"});var M=t(Object.assign(E,{props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},size:{type:Number,default:2},max:{type:Number,default:3},files:{type:Array,default:()=>[]},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["zip","rar"]}},emits:["on-success"],setup(e,{emit:t}){const d=e;function u(e){const t=e.name.split("."),a=t[t.length-1],s=d.ext.indexOf(a)>=0,i=e.size/1024/1024<d.size;return s||p.error(`上传文件只支持 ${d.ext.join(" / ")} 格式！`),i||p.error(`上传文件大小不能超过 ${d.size}MB！`),s&&i}function h(){p.warning("文件上传超过限制")}function f(e,a){t("on-success",e,a)}return(t,d)=>{const p=c,g=m,y=C,v=j;return a(),s(v,{headers:e.headers,action:e.action,data:e.data,name:e.name,"before-upload":u,"on-exceed":h,"on-success":f,"file-list":e.files,limit:e.max,drag:""},{tip:i((()=>[e.notip?o("v-if",!0):(a(),l("div",V,[n("div",B,[r(y,{title:`上传文件支持 ${e.ext.join(" / ")} 格式，单个文件大小不超过 ${e.size}MB，且文件数量不超过 ${e.max} 个`,type:"info","show-icon":"",closable:!1},null,8,["title"])])]))])),default:i((()=>[n("div",U,[r(g,{class:"el-icon--upload"},{default:i((()=>[r(p,{name:"ep:upload-filled"})])),_:1}),N])])),_:1},8,["headers","action","data","name","file-list","limit"])}}}),[["__scopeId","data-v-6f2f9936"]]);const A={class:"upload-container"},T={class:"mask"},q={class:"actions"},K=["onClick"],L=["onClick"],R=["onClick"],F=["onClick"],P={key:0,class:"el-upload__tip"},D={style:{display:"inline-block"}},G=e({name:"ImagesUpload"});var H=t(Object.assign(G,{props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},url:{type:Array,default:()=>[]},max:{type:Number,default:3},size:{type:Number,default:2},width:{type:Number,default:150},height:{type:Number,default:150},placeholder:{type:String,default:""},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["jpg","png","gif","bmp"]}},emits:["update:url","on-success"],setup(e,{emit:t}){const d=e,u=f({dialogImageIndex:0,imageViewerVisible:!1,progress:{preview:"",percent:0}});function h(){u.value.imageViewerVisible=!1}function _(e,a){let s=d.url;"left"==a&&0!=e&&(s[e]=s.splice(e-1,1,s[e])[0]),"right"==a&&e!=s.length-1&&(s[e]=s.splice(e+1,1,s[e])[0]),t("update:url",s)}function S(e){const t=e.name.split("."),a=t[t.length-1],s=d.ext.indexOf(a)>=0,i=e.size/1024/1024<d.size;return s||p.error(`上传图片只支持 ${d.ext.join(" / ")} 格式！`),i||p.error(`上传图片大小不能超过 ${d.size}MB！`),s&&i&&(u.value.progress.preview=URL.createObjectURL(e)),s&&i}function O(e){u.value.progress.percent=~~e.percent}function I(e){u.value.progress.preview="",u.value.progress.percent=0,t("on-success",e)}return(p,f)=>{const U=$,N=c,V=m,B=z,E=j,M=C,G=k;return a(),l("div",A,[(a(!0),l(g,null,y(e.url,((p,c)=>(a(),l("div",{key:c,class:"images"},[c<e.max?(a(),s(U,{key:0,src:p,style:v(`width:${e.width}px;height:${e.height}px;`),fit:"cover"},null,8,["src","style"])):o("v-if",!0),n("div",T,[n("div",q,[n("span",{title:"预览",onClick:e=>function(e){u.value.dialogImageIndex=e,u.value.imageViewerVisible=!0}(c)},[r(V,null,{default:i((()=>[r(N,{name:"ep:zoom-in"})])),_:1})],8,K),n("span",{title:"移除",onClick:e=>function(e){let a=d.url;a.splice(e,1),t("update:url",a)}(c)},[r(V,null,{default:i((()=>[r(N,{name:"ep:delete"})])),_:1})],8,L),x(n("span",{title:"左移",class:w({disabled:0==c}),onClick:e=>_(c,"left")},[r(V,null,{default:i((()=>[r(N,{name:"ep:back"})])),_:1})],10,R),[[b,e.url.length>1]]),x(n("span",{title:"右移",class:w({disabled:c==e.url.length-1}),onClick:e=>_(c,"right")},[r(V,null,{default:i((()=>[r(N,{name:"ep:right"})])),_:1})],10,F),[[b,e.url.length>1]])])])])))),128)),x(r(E,{"show-file-list":!1,headers:e.headers,action:e.action,data:e.data,name:e.name,"before-upload":S,"on-progress":O,"on-success":I,drag:"",class:"images-upload"},{default:i((()=>[n("div",{class:"image-slot",style:v(`width:${e.width}px;height:${e.height}px;`)},[r(V,null,{default:i((()=>[r(N,{name:"ep:plus"})])),_:1})],4),x(n("div",{class:"progress",style:v(`width:${e.width}px;height:${e.height}px;`)},[r(U,{src:u.value.progress.preview,style:v(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},null,8,["src","style"]),r(B,{type:"circle",width:.8*Math.min(e.width,e.height),percentage:u.value.progress.percent},null,8,["width","percentage"])],4),[[b,u.value.progress.percent]])])),_:1},8,["headers","action","data","name"]),[[b,e.url.length<e.max]]),e.notip?o("v-if",!0):(a(),l("div",P,[n("div",D,[r(M,{title:`上传图片支持 ${e.ext.join(" / ")} 格式，单张图片大小不超过 ${e.size}MB，建议图片尺寸为 ${e.width}*${e.height}，且图片数量不超过 ${e.max} 张`,type:"info","show-icon":"",closable:!1},null,8,["title"])])])),u.value.imageViewerVisible?(a(),s(G,{key:1,"url-list":e.url,"initial-index":u.value.dialogImageIndex,onClose:h},null,8,["url-list","initial-index"])):o("v-if",!0)])}}}),[["__scopeId","data-v-03d915b6"]]);const J={data:()=>({image:"",images:[],files:[{name:"测试文件.zip",url:"http://images.lookbi.com/uploads/apply/96/d8521fc691e472eec91a170201866e7d.zip"}]}),mounted(){this.image="https://picsum.photos/400",this.images=["https://picsum.photos/400","https://picsum.photos/600","https://picsum.photos/500"]},methods:{handleSuccess1(e){""==e.error?this.image=e.data.path:this.$message.warning(e.error)},handleSuccess2(e){""==e.error?this.images.push(e.data.path):this.$message.warning(e.error)},handleSuccess3(e,t){this.files.push({name:t.name,url:""==e.error?e.data.path:""}),this.$nextTick((()=>{""!=e.error&&(this.$message.warning(e.error),this.files.pop())}))}}};"function"==typeof _&&_(J);var Q=t(J,[["render",function(e,t,s,n,o,d){const u=O,p=I,c=S,m=H,h=M;return a(),l("div",null,[r(u,{title:"上传",content:"ImageUpload / ImagesUpload / FileUpload"}),r(c,{title:"单图上传"},{default:i((()=>[r(p,{url:o.image,"onUpdate:url":t[0]||(t[0]=e=>o.image=e),action:"http://scrm.1daas.com/api/upload/upload",name:"image",width:250,height:150,data:{token:"TKE615916022101558"},onOnSuccess:d.handleSuccess1},null,8,["url","onOnSuccess"])])),_:1}),r(c,{title:"多图上传（默认最多3张）"},{default:i((()=>[r(m,{url:o.images,"onUpdate:url":t[1]||(t[1]=e=>o.images=e),action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:d.handleSuccess2},null,8,["url","onOnSuccess"])])),_:1}),r(c,{title:"文件上传（默认最多3个）"},{default:i((()=>[r(h,{files:o.files,action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:d.handleSuccess3},null,8,["files","onOnSuccess"])])),_:1})])}]]);export{Q as default};
