"use strict";(self["webpackChunkhex_vue_ec_website"]=self["webpackChunkhex_vue_ec_website"]||[]).push([[928],{5531:function(e,r,a){a.d(r,{Z:function(){return c}});var s=a(3396),l=a(7139);const t={class:"header text-white text-center d-flex justify-content-center align-items-center"},o={class:"h1 px-5 py-3 my-0 text-white border border-white border-3 bg-secondary bg-opacity-25"};function d(e,r,a,d,i,n){return(0,s.wg)(),(0,s.iD)("div",t,[(0,s._)("p",o,(0,l.zw)(a.title),1)])}var i={props:["title"]},n=a(89);const m=(0,n.Z)(i,[["render",d]]);var c=m},5517:function(e,r,a){a.d(r,{Z:function(){return u}});var s=a(3396),l=a(355);const t={key:0,class:"loader",id:"loader"},o=(0,s._)("img",{src:l,alt:"loading..."},null,-1),d=[o];function i(e,r,a,l,o,i){return e.isReady?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",t,d))}var n={props:["is-ready"]},m=a(89);const c=(0,m.Z)(n,[["render",i]]);var u=c},7928:function(e,r,a){a.r(r),a.d(r,{default:function(){return W}});var s=a(3396),l=a(7139),t=a(9242);const o={class:"container"},d={class:"my-5 row justify-content-center"},i={class:"mb-3"},n=(0,s._)("label",{for:"email",class:"form-label h5 text-dark"},"Email",-1),m={class:"mb-3"},c=(0,s._)("label",{for:"name",class:"form-label h5 text-dark"},"收件人姓名",-1),u={class:"mb-3"},f=(0,s._)("label",{for:"tel",class:"form-label h5 text-dark"},"收件人電話",-1),p={class:"mb-3"},b=(0,s._)("label",{for:"address",class:"form-label h5 text-dark"},"收件人地址",-1),h={class:"mb-3"},y=(0,s._)("label",{for:"message",class:"form-label h5 text-dark"},"留言",-1),v={class:"text-end"};function _(e,r,a,_,g,x){const k=(0,s.up)("Loading"),w=(0,s.up)("HeaderPic"),V=(0,s.up)("Field"),W=(0,s.up)("ErrorMessage"),j=(0,s.up)("Form");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(k,{"is-ready":g.isReady},null,8,["is-ready"]),(0,s.Wm)(w,{title:g.title},null,8,["title"]),(0,s._)("div",o,[(0,s._)("div",d,[(0,s.Wm)(j,{ref:"form",class:"col-md-6 border border-primary border-5 py-2 py-md-4",onSubmit:x.createOrder},{default:(0,s.w5)((({errors:e})=>[(0,s._)("div",i,[n,(0,s.Wm)(V,{id:"email",name:"email",type:"email",class:(0,l.C_)(["form-control border-secondary",{"is-invalid":e["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:g.form.user.email,"onUpdate:modelValue":r[0]||(r[0]=e=>g.form.user.email=e)},null,8,["class","modelValue"]),(0,s.Wm)(W,{name:"email",class:"invalid-feedback"})]),(0,s._)("div",m,[c,(0,s.Wm)(V,{id:"name",name:"姓名",type:"text",class:(0,l.C_)(["form-control border-secondary",{"is-invalid":e["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:g.form.user.name,"onUpdate:modelValue":r[1]||(r[1]=e=>g.form.user.name=e)},null,8,["class","modelValue"]),(0,s.Wm)(W,{name:"姓名",class:"invalid-feedback"})]),(0,s._)("div",u,[f,(0,s.Wm)(V,{id:"tel",name:"電話",type:"tel",class:(0,l.C_)(["form-control border-secondary",{"is-invalid":e["電話"]}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:g.form.user.tel,"onUpdate:modelValue":r[2]||(r[2]=e=>g.form.user.tel=e)},null,8,["class","modelValue"]),(0,s.Wm)(W,{name:"電話",class:"invalid-feedback"})]),(0,s._)("div",p,[b,(0,s.Wm)(V,{id:"address",name:"地址",type:"text",class:(0,l.C_)(["form-control border-secondary",{"is-invalid":e["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:g.form.user.address,"onUpdate:modelValue":r[3]||(r[3]=e=>g.form.user.address=e)},null,8,["class","modelValue"]),(0,s.Wm)(W,{name:"地址",class:"invalid-feedback"})]),(0,s._)("div",h,[y,(0,s.wy)((0,s._)("textarea",{name:"",id:"message",class:"form-control border-secondary",cols:"30",rows:"10","onUpdate:modelValue":r[4]||(r[4]=e=>g.form.message=e)},null,512),[[t.nr,g.form.message]])]),(0,s._)("div",v,[(0,s._)("button",{class:"btn btn-success",onClick:r[5]||(r[5]=(...e)=>x.createOrder&&x.createOrder(...e))},"送出訂單")])])),_:1},8,["onSubmit"])])])],64)}var g=a(5531),x=a(5517),k={data(){return{title:"填寫訂購資料",isReady:!0,form:{user:{name:"",email:"",tel:"",address:""},message:""}}},components:{HeaderPic:g.Z,Loading:x.Z},inject:["emitter"],methods:{createOrder(){this.isReady=!1;const e="https://vue3-course-api.hexschool.io/v2/api/hyxfish27/order",r=this.form;this.$http.post(e,{data:r}).then((e=>{this.emitter.emit("push-message",{style:"success",title:e.data.message,emoji:"emoji-heart-eyes"}),this.$refs.form.resetForm(),this.isReady=!0,this.$router.push(`/order/${e.data.orderId}`)})).catch((e=>{this.emitter.emit("push-message",{style:"danger",title:e.response.data.message,emoji:"emoji-dizzy"}),this.isReady=!0}))}}},w=a(89);const V=(0,w.Z)(k,[["render",_]]);var W=V},355:function(e,r,a){e.exports=a.p+"img/loader.bf1579b8.svg"}}]);
//# sourceMappingURL=928.f2fa2420.js.map