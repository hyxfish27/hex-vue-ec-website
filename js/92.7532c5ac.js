"use strict";(self["webpackChunkhex_vue_ec_website"]=self["webpackChunkhex_vue_ec_website"]||[]).push([[92],{535:function(e,t,l){l.d(t,{Z:function(){return y}});var s=l(3396),a=l(7139),i=l(9242);const o={"aria-label":"Page navigation example"},d={class:"pagination justify-content-center"},n=(0,s._)("span",{"aria-hidden":"true"},"«",-1),r=[n],c={key:0,class:"page-link"},u=["onClick"],p=(0,s._)("span",{"aria-hidden":"true"},"»",-1),m=[p];function h(e,t,l,n,p,h){return(0,s.wg)(),(0,s.iD)("nav",o,[(0,s._)("ul",d,[(0,s._)("li",{class:(0,a.C_)([{disabled:!l.pages.has_pre},"page-item"])},[(0,s._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=(0,i.iM)((e=>h.updatePage(l.pages.current_page-1)),["prevent"]))},r)],2),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.pages.total_pages,(e=>((0,s.wg)(),(0,s.iD)("li",{class:(0,a.C_)(["page-item",{active:l.pages.current_page===e}]),key:e},[e===l.pages.current_page?((0,s.wg)(),(0,s.iD)("span",c,(0,a.zw)(e),1)):((0,s.wg)(),(0,s.iD)("a",{key:1,class:"page-link",href:"#",onClick:(0,i.iM)((t=>h.updatePage(e)),["prevent"])},(0,a.zw)(e),9,u))],2)))),128)),(0,s._)("li",{class:(0,a.C_)(["page-item",{disabled:!l.pages.has_next}])},[(0,s._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=(0,i.iM)((e=>h.updatePage(l.pages.current_page+1)),["prevent"]))},m)],2)])])}var g={props:["pages"],methods:{updatePage(e){this.$emit("emit-pages",e)}}},_=l(89);const b=(0,_.Z)(g,[["render",h]]);var y=b},5612:function(e,t,l){l.r(t),l.d(t,{default:function(){return Le}});var s=l(3396),a=l(7139),i=l(9242);const o={class:"container"},d=(0,s._)("p",{class:"h2 text-center my-4"},[(0,s._)("span",{class:"text-dark bg-secondary"},"產品列表")],-1),n={class:"row justify-content-center"},r={class:"col-12"},c={class:"text-end mt-4"},u={class:"table mt-4 d-none d-md-table"},p=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{width:"120"}," 分類 "),(0,s._)("th",null,"名稱"),(0,s._)("th",{width:"120"}," 原價 "),(0,s._)("th",{width:"120"}," 售價 "),(0,s._)("th",{width:"100"}," 狀態 "),(0,s._)("th",{width:"120"}," 操作 ")])],-1),m={class:"text-end"},h={class:"text-end"},g={class:"form-check form-switch"},_=["id","onUpdate:modelValue","onChange"],b=["for"],y={key:0,class:"text-primary"},f={key:1,class:"text-light"},w={class:"btn-group"},P=["onClick"],v=["onClick"],k={class:"table mt-4 d-table d-md-none"},x=(0,s._)("th",null,"分類",-1),U=(0,s._)("th",null,"名稱",-1),M=(0,s._)("th",null,"原價",-1),D=(0,s._)("th",null,"售價",-1),C=(0,s._)("th",null,"狀態",-1),$={class:"form-check form-switch"},j=["id","onUpdate:modelValue","onChange"],z=["for"],R={key:0,class:"text-primary"},V={key:1,class:"text-light"},S=(0,s._)("th",null,"操作",-1),Z={class:"btn-group"},I=["onClick"],N=["onClick"];function A(e,t,l,A,E,H){const Y=(0,s.up)("Loading"),K=(0,s.up)("Pagination"),L=(0,s.up)("ProductModal"),W=(0,s.up)("DelModal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(Y,{"is-ready":E.isReady},null,8,["is-ready"]),(0,s._)("div",o,[d,(0,s._)("div",n,[(0,s._)("div",r,[(0,s._)("div",c,[(0,s._)("button",{class:"btn btn-success text-white",onClick:t[0]||(t[0]=e=>H.openModal("new"))}," 建立新的產品 ")]),(0,s._)("table",u,[p,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(E.products,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",null,(0,a.zw)(t.category),1),(0,s._)("td",null,(0,a.zw)(t.title),1),(0,s._)("td",m,(0,a.zw)(e.$filters.currency(t.origin_price)),1),(0,s._)("td",h,(0,a.zw)(e.$filters.currency(t.price)),1),(0,s._)("td",null,[(0,s._)("div",g,[(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"checkbox",id:`enableSwitch${t.id}`,"onUpdate:modelValue":e=>t.is_enabled=e,"true-value":1,"false-value":0,onChange:e=>H.updateEnableStatus(t)},null,40,_),[[i.e8,t.is_enabled]]),(0,s._)("label",{class:"form-check-label",for:`enableSwitch${t.id}}`},[t.is_enabled?((0,s.wg)(),(0,s.iD)("span",y,"上架")):((0,s.wg)(),(0,s.iD)("span",f,"下架"))],8,b)])]),(0,s._)("td",null,[(0,s._)("div",w,[(0,s._)("button",{type:"button",class:"btn btn-outline-success btn-sm",onClick:e=>H.openModal("edit",t)}," 編輯 ",8,P),(0,s._)("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:e=>H.openDelModal(t)}," 刪除 ",8,v)])])])))),128))])]),(0,s._)("table",k,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(E.products,(t=>((0,s.wg)(),(0,s.iD)("tbody",{key:t.id},[(0,s._)("tr",null,[x,(0,s._)("td",null,(0,a.zw)(t.category),1)]),(0,s._)("tr",null,[U,(0,s._)("td",null,(0,a.zw)(t.title),1)]),(0,s._)("tr",null,[M,(0,s._)("td",null,(0,a.zw)(e.$filters.currency(t.origin_price)),1)]),(0,s._)("tr",null,[D,(0,s._)("td",null,(0,a.zw)(e.$filters.currency(t.price)),1)]),(0,s._)("tr",null,[C,(0,s._)("td",null,[(0,s._)("div",$,[(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"checkbox",id:`enableSwitch${t.id}`,"onUpdate:modelValue":e=>t.is_enabled=e,"true-value":1,"false-value":0,onChange:e=>H.updateEnableStatus(t)},null,40,j),[[i.e8,t.is_enabled]]),(0,s._)("label",{class:"form-check-label",for:`enableSwitch${t.id}}`},[t.is_enabled?((0,s.wg)(),(0,s.iD)("span",R,"上架")):((0,s.wg)(),(0,s.iD)("span",V,"下架"))],8,z)])])]),(0,s._)("tr",null,[S,(0,s._)("td",null,[(0,s._)("div",Z,[(0,s._)("button",{type:"button",class:"btn btn-outline-success btn-sm",onClick:e=>H.openModal("edit",t)}," 編輯 ",8,I),(0,s._)("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:e=>H.openDelModal(t)}," 刪除 ",8,N)])])])])))),128))])])]),(0,s.Wm)(K,{pages:E.pagination,onEmitPages:H.getProducts},null,8,["pages","onEmitPages"]),(0,s.Wm)(L,{"temp-product":E.tempProduct,"is-new":E.isNew,onAddProduct:H.addProduct,onUpdateProduct:H.updateProduct,ref:"ProductModal"},null,8,["temp-product","is-new","onAddProduct","onUpdateProduct"]),(0,s.Wm)(W,{"del-item":E.tempProduct,onRemoveItem:H.removeProduct,onGetItems:H.getProducts,ref:"delModal"},null,8,["del-item","onRemoveItem","onGetItems"])])],64)}const E={id:"productModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},H={class:"modal-dialog modal-xl"},Y={class:"modal-content border-0"},K={class:"modal-header bg-success text-white"},L={id:"productModalLabel",class:"modal-title"},W=(0,s._)("button",{type:"button",class:"btn-close bg-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),G={class:"modal-body"},q={class:"row"},B={class:"col-sm-4"},F={class:"mb-2"},J={class:"mb-3"},O=(0,s._)("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),Q=["src"],T={key:0},X={class:"form-group"},ee=(0,s._)("label",{for:"imageUrl",class:"form-label"},"圖片網址",-1),te=["onUpdate:modelValue"],le=["src"],se={key:0},ae={key:1},ie={key:1},oe={class:"col-sm-8"},de={class:"mb-3"},ne=(0,s._)("label",{for:"title",class:"form-label"},"標題",-1),re={class:"row"},ce={class:"mb-3 col-md-6"},ue=(0,s._)("label",{for:"category",class:"form-label"},"分類",-1),pe={class:"mb-3 col-md-6"},me=(0,s._)("label",{for:"price",class:"form-label"},"單位",-1),he={class:"row"},ge={class:"mb-3 col-md-6"},_e=(0,s._)("label",{for:"origin_price",class:"form-label"},"原價",-1),be={class:"mb-3 col-md-6"},ye=(0,s._)("label",{for:"price",class:"form-label"},"售價",-1),fe=(0,s._)("hr",null,null,-1),we={class:"mb-3"},Pe=(0,s._)("label",{for:"description",class:"form-label"},"產品描述",-1),ve={class:"mb-3"},ke=(0,s._)("label",{for:"content",class:"form-label"},"說明內容",-1),xe={class:"mb-3"},Ue={class:"form-check form-switch"},Me=["id"],De=["for"],Ce={key:0,class:"text-primary"},$e={key:1,class:"text-light"},je={class:"modal-footer"},ze=(0,s._)("button",{type:"button",class:"btn btn-outline-success","data-bs-dismiss":"modal"}," 取消 ",-1);function Re(e,t,l,o,d,n){return(0,s.wg)(),(0,s.iD)("div",E,[(0,s._)("div",H,[(0,s._)("div",Y,[(0,s._)("div",K,[(0,s._)("h5",L,[(0,s._)("span",null,(0,a.zw)(e.isNew?"新增產品":"編輯產品"),1)]),W]),(0,s._)("div",G,[(0,s._)("div",q,[(0,s._)("div",B,[(0,s._)("div",F,[(0,s._)("div",J,[O,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":t[0]||(t[0]=t=>e.tempProduct.imageUrl=t)},null,512),[[i.nr,e.tempProduct.imageUrl]]),(0,s._)("img",{class:"img-fluid",src:e.tempProduct.imageUrl,alt:""},null,8,Q)])]),Array.isArray(e.tempProduct.imagesUrl)?((0,s.wg)(),(0,s.iD)("div",T,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.tempProduct.imagesUrl,((t,l)=>((0,s.wg)(),(0,s.iD)("div",{class:"mb-1",key:l},[(0,s._)("div",X,[ee,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t=>e.tempProduct.imagesUrl[l]=t,type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,8,te),[[i.nr,e.tempProduct.imagesUrl[l]]])]),(0,s._)("img",{class:"img-fluid",src:t},null,8,le)])))),128)),!e.tempProduct.imagesUrl.length||e.tempProduct.imagesUrl[e.tempProduct.imagesUrl.length-1]?((0,s.wg)(),(0,s.iD)("div",se,[(0,s._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[1]||(t[1]=t=>e.tempProduct.imagesUrl.push(""))}," 新增圖片 ")])):((0,s.wg)(),(0,s.iD)("div",ae,[(0,s._)("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:t[2]||(t[2]=t=>e.tempProduct.imagesUrl.pop())}," 刪除圖片 ")]))])):((0,s.wg)(),(0,s.iD)("div",ie,[(0,s._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[3]||(t[3]=(...t)=>e.initialImgArray&&e.initialImgArray(...t))}," 新增圖片 ")]))]),(0,s._)("div",oe,[(0,s._)("div",de,[ne,(0,s.wy)((0,s._)("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":t[4]||(t[4]=t=>e.tempProduct.title=t)},null,512),[[i.nr,e.tempProduct.title]])]),(0,s._)("div",re,[(0,s._)("div",ce,[ue,(0,s.wy)((0,s._)("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":t[5]||(t[5]=t=>e.tempProduct.category=t)},null,512),[[i.nr,e.tempProduct.category]])]),(0,s._)("div",pe,[me,(0,s.wy)((0,s._)("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":t[6]||(t[6]=t=>e.tempProduct.unit=t)},null,512),[[i.nr,e.tempProduct.unit]])])]),(0,s._)("div",he,[(0,s._)("div",ge,[_e,(0,s.wy)((0,s._)("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":t[7]||(t[7]=t=>e.tempProduct.origin_price=t)},null,512),[[i.nr,e.tempProduct.origin_price]])]),(0,s._)("div",be,[ye,(0,s.wy)((0,s._)("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":t[8]||(t[8]=t=>e.tempProduct.price=t)},null,512),[[i.nr,e.tempProduct.price]])])]),fe,(0,s._)("div",we,[Pe,(0,s.wy)((0,s._)("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":t[9]||(t[9]=t=>e.tempProduct.description=t)},"\r\n                ",512),[[i.nr,e.tempProduct.description]])]),(0,s._)("div",ve,[ke,(0,s.wy)((0,s._)("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":t[10]||(t[10]=t=>e.tempProduct.content=t)},"\r\n                ",512),[[i.nr,e.tempProduct.content]])]),(0,s._)("div",xe,[(0,s._)("div",Ue,[(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"checkbox",id:`enableSwitch${e.tempProduct.id}`,"onUpdate:modelValue":t[11]||(t[11]=t=>e.tempProduct.is_enabled=t),"true-value":1,"false-value":0},null,8,Me),[[i.e8,e.tempProduct.is_enabled]]),(0,s._)("label",{class:"form-check-label",for:`enableSwitch${e.tempProduct.id}}`},[e.tempProduct.is_enabled?((0,s.wg)(),(0,s.iD)("span",Ce," 上架 ")):((0,s.wg)(),(0,s.iD)("span",$e,"下架"))],8,De)])])])])]),(0,s._)("div",je,[ze,(0,s._)("button",{type:"button",class:"btn btn-outline-primary",onClick:t[12]||(t[12]=t=>e.isNew?e.$emit("add-product",e.tempProduct):e.$emit("update-product",e.tempProduct))}," 確認 ")])])])],512)}var Ve=l(1339),Se={props:["temp-product","is-new"],mixins:[Ve.Z]},Ze=l(89);const Ie=(0,Ze.Z)(Se,[["render",Re]]);var Ne=Ie,Ae=l(3167),Ee=l(535),He=l(5517),Ye={data(){return{products:[],productId:"",tempProduct:{imagesUrl:[]},isNew:!1,isReady:!1,pagination:{},productModal:"",delModal:""}},inject:["emitter"],components:{ProductModal:Ne,DelModal:Ae.Z,Pagination:Ee.Z,Loading:He.Z},methods:{getProducts(e=1){this.isReady=!1;const t=`https://vue3-course-api.hexschool.io/v2/api/hyxfish27/admin/products?page=${e}`;this.$http.get(t).then((e=>{this.products=e.data.products,this.pagination=e.data.pagination,this.isReady=!0})).catch((e=>{this.emitter.emit("push-message",{style:"danger",title:e.response.data.message,emoji:"emoji-dizzy"})}))},addProduct(){this.isReady=!1;const e="https://vue3-course-api.hexschool.io/v2/api/hyxfish27/admin/product";this.$http.post(e,{data:this.tempProduct}).then((e=>{this.getProducts(),this.emitter.emit("push-message",{style:"success",title:e.data.message,emoji:"emoji-laughing"}),this.isReady=!0})).catch((e=>{this.emitter.emit("push-message",{style:"danger",title:e.response.data.message,emoji:"emoji-dizzy"}),this.isReady=!0})),this.$refs.ProductModal.hideModal()},updateProduct(){this.isReady=!1;const e=`https://vue3-course-api.hexschool.io/v2/api/hyxfish27/admin/product/${this.tempProduct.id}`;this.$http.put(e,{data:this.tempProduct}).then((e=>{this.emitter.emit("push-message",{style:"success",title:e.data.message,emoji:"emoji-laughing"}),this.getProducts(this.pagination.current_page),this.isReady=!0})).catch((e=>{this.emitter.emit("push-message",{style:"danger",title:e.response.data.message,emoji:"emoji-dizzy"}),this.isReady=!0})),this.$refs.ProductModal.hideModal()},removeProduct(e){this.isReady=!1;const t=`https://vue3-course-api.hexschool.io/v2/api/hyxfish27/admin/product/${e}`;this.$http.delete(t).then((e=>{this.emitter.emit("push-message",{style:"success",title:e.data.message,emoji:"emoji-laughing"}),this.getProducts(this.pagination.current_page),this.isReady=!0})).catch((e=>{this.emitter.emit("push-message",{style:"danger",title:e.response.data.message,emoji:"emoji-dizzy"}),this.isReady=!0})),this.$refs.delModal.hideModal()},updateEnableStatus(e){this.isReady=!1;const t=`https://vue3-course-api.hexschool.io/v2/api/hyxfish27/admin/product/${e.id}`;this.$http.put(t,{data:e}).then((e=>{this.emitter.emit("push-message",{style:"success",title:e.data.message,emoji:"emoji-laughing"}),this.getProducts(this.pagination.current_page),this.isReady=!0})).catch((e=>{this.emitter.emit("push-message",{style:"danger",title:e.response.data.message,emoji:"emoji-dizzy"}),this.isReady=!0}))},openModal(e,t=""){"new"===e?(this.tempProduct={imagesUrl:[]},this.isNew=!0):"edit"===e&&(this.tempProduct={...t},this.isNew=!1),this.$refs.ProductModal.openModal()},openDelModal(e){this.tempProduct={...e},this.$refs.delModal.openModal()}},mounted(){this.getProducts()}};const Ke=(0,Ze.Z)(Ye,[["render",A]]);var Le=Ke}}]);
//# sourceMappingURL=92.7532c5ac.js.map