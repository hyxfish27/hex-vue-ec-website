"use strict";(self["webpackChunkhex_vue_ec_website"]=self["webpackChunkhex_vue_ec_website"]||[]).push([[779],{779:function(e,s,n){n.r(s),n.d(s,{default:function(){return b}});var t=n(3396),o=n(9242);const r={class:"container-fluid min-vh-100 d-flex flex-column justify-content-center",id:"login_bg"},a=(0,t._)("h3",{class:"h3 text-center text-white mb-4"},"請先登入",-1),i={class:"row justify-content-center"},l={class:"col-10 col-md-8 col-lg-6"},d={id:"form",class:"form-signin"},u={class:"form-floating mb-3"},c=(0,t._)("label",{for:"username"},"Email address",-1),p={class:"form-floating"},m=(0,t._)("label",{for:"password"},"Password",-1);function f(e,s,n,f,h,w){return(0,t.wg)(),(0,t.iD)("div",r,[a,(0,t._)("div",i,[(0,t._)("div",l,[(0,t._)("form",d,[(0,t._)("div",u,[(0,t.wy)((0,t._)("input",{type:"email",class:"form-control rounded-pill px-3",id:"username","onUpdate:modelValue":s[0]||(s[0]=e=>h.user.username=e),placeholder:"name@example.com",required:"",autofocus:""},null,512),[[o.nr,h.user.username]]),c]),(0,t._)("div",p,[(0,t.wy)((0,t._)("input",{type:"password",class:"form-control rounded-pill px-3",id:"password","onUpdate:modelValue":s[1]||(s[1]=e=>h.user.password=e),placeholder:"Password",required:""},null,512),[[o.nr,h.user.password]]),m]),(0,t._)("button",{class:"btn btn-lg btn-primary text-white rounded-pill w-100 mt-3",onClick:s[2]||(s[2]=(...e)=>w.signIn&&w.signIn(...e)),type:"button"}," 登入 ")])])])])}var h={data(){return{user:{username:"",password:""}}},methods:{signIn(){const e="https://vue3-course-api.hexschool.io/v2/admin/signin";this.$http.post(e,this.user).then((e=>{const{token:s,expired:n}=e.data;document.cookie=`myToken = ${s}; expires = ${new Date(n)}`,this.$router.push("/admin/products")})).catch((e=>{console.dir(e.response.data.message)}))}}},w=n(89);const _=(0,w.Z)(h,[["render",f]]);var b=_}}]);
//# sourceMappingURL=779.11cd7cdb.js.map