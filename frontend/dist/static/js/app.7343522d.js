(function(t){function e(e){for(var r,o,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(r=!1)}r&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},s={app:0},n=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"06c9":function(t,e,a){"use strict";a("23dd")},2395:function(t,e,a){},"23dd":function(t,e,a){},4169:function(t,e,a){"use strict";a("98b0")},"438a":function(t,e,a){"use strict";a("b522")},"532f":function(t,e,a){},"54e9":function(t,e,a){"use strict";a("6d3d")},"56d7":function(t,e,a){"use strict";a.r(e);var r={};a.r(r),a.d(r,"ORDER_STATUS_PAND",(function(){return ft})),a.d(r,"ORDER_STATUS_SEND",(function(){return mt})),a.d(r,"ORDER_STATUS_DONE",(function(){return pt})),a.d(r,"ORDER_STATUS_CANCEL",(function(){return vt})),a.d(r,"ORDER_STATUS",(function(){return ht}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],i=(a("7c55"),a("2877")),c={},l=Object(i["a"])(c,n,o,!1,null,null,null),u=l.exports,d=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-box"},[a("h2",[t._v("LEJ")]),a("div",{staticClass:"box-main"},t._l(t.dataList,(function(t){return a("a",{key:t.id,staticClass:"item"},[a("div",{staticClass:"img"},[a("router-link",{attrs:{to:{name:"Product",params:{id:t.id}}}},[a("img",{attrs:{src:t.imgs[0],alt:""}})])],1)])})),0),a("Footer")],1)},m=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-tabbar",{attrs:{route:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tabbar-item",{attrs:{name:"home",icon:"wap-home-o",to:{name:"Home"}}}),a("van-tabbar-item",{attrs:{name:"shop",icon:"shop-o",to:{name:"Shop"}}}),a("van-tabbar-item",{attrs:{name:"cart",icon:"bag-o",to:{name:"Cart"}}}),a("van-tabbar-item",{attrs:{name:"user",icon:"user-o",to:{name:"Mine"}}})],1)],1)},v=[],h={data:function(){return{active:"home"}}},b=h,g=Object(i["a"])(b,p,v,!1,null,null,null),_=g.exports,x=(a("ac1f"),a("1276"),a("d3b7"),a("bc3a")),y=a.n(x),C=a("4328"),$=a.n(C);function k(t){for(var e=t+"=",a=document.cookie.split(";"),r=0;r<a.length;r++){var s=a[r];while(" "==s.charAt(0))s=s.substring(1,s.length);if(0==s.indexOf(e))return s.substring(e.length,s.length)}return null}var O=k("csrftoken"),S=y.a.create({headers:{"X-CSRFToken":O},transformRequest:function(t){return $.a.stringify(t)},withCredentials:!0});S.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),S.interceptors.response.use((function(t){return t}),(function(t){return t.response&&(""==t.response.status||500==t.response.status&&console.log("伺服器忙碌中，稍後再試")),Promise.reject(t)}));var w,D="https://jhong-demo-shop-mobile.herokuapp.com/",U={InfoUrl:D+"/info/",LoginUrl:D+"/login/",LogoutUrl:D+"/logout/",RegisterUrl:D+"/register/",ModifyUrl:D+"/modify/"},L={IndexUrl:D+"/index/"},j={ShopUrl:D+"/product/",DetailUrl:D+"/product/#{id}/"},R={TotalOrderDetailUrl:D+"/order/#{id}/",TotalOrderUrl:D+"/order/",CartOrderlUrl:D+"/cart/"},E={data:function(){return{dataList:[]}},components:{Footer:_},methods:{getDataList:function(){var t=this;S.get(L.IndexUrl).then((function(e){var a=e.data;t.dataList=a.objects}))}},created:function(){this.getDataList()}},T=E,A=(a("de16"),Object(i["a"])(T,f,m,!1,null,null,null)),q=A.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shop-box"},[a("van-search",{attrs:{"show-action":"",placeholder:"請輸入搜尋商品"},on:{search:t.onSearchname,clear:t.clear},scopedSlots:t._u([{key:"action",fn:function(){return[a("div",{on:{click:t.onSearchname}},[t._v("搜尋")])]},proxy:!0}]),model:{value:t.productname,callback:function(e){t.productname=e},expression:"productname"}}),a("van-dropdown-menu",[a("van-dropdown-item",{attrs:{options:t.option1},on:{close:t.onSearchclassify},model:{value:t.productclassify,callback:function(e){t.productclassify=e},expression:"productclassify"}})],1),a("div",{staticClass:"box-main"},t._l(t.dataList,(function(e){return a("a",{key:e.id,staticClass:"item"},[a("div",{staticClass:"img"},[a("router-link",{attrs:{to:{name:"Product",params:{id:e.id}}}},[a("img",{attrs:{src:e.imgs[0],alt:""}}),a("span",{staticClass:"info"},[t._v(t._s(e.name))]),a("br"),a("span",{staticClass:"info"},[t._v("TWD "+t._s(e.price))])])],1)])})),0),a("Footer")],1)},I=[],F={data:function(){return{productname:"",dataList:[],productclassify:"All",option1:[{text:"All",value:"All"},{text:"Sports",value:"Sports"},{text:"Smart",value:"Smart"},{text:"Classic",value:"Classic"},{text:"Other",value:"Other"}]}},components:{Footer:_},methods:{onSearchname:function(){this.productname?(this.dataList=[],this.getDataListname()):this.$toast("請輸入")},onSearchclassify:function(){this.dataList=[],this.getDataListclassify()},getDataListname:function(){var t=this;S.get(j.ShopUrl,{params:{name:this.productname}}).then((function(e){var a=e.data;t.dataList=a.objects}))},getDataListclassify:function(){var t=this;S.get(j.ShopUrl,{params:{classify:this.productclassify}}).then((function(e){var a=e.data;t.dataList=a.objects}))},clear:function(){this.dataList=[],this.getDataListclassify()}},created:function(){this.getDataListclassify()}},M=F,N=(a("06c9"),Object(i["a"])(M,P,I,!1,null,null,null)),z=N.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-box"},[a("van-nav-bar",{attrs:{"left-text":"返回","left-arrow":"",fixed:""},on:{"click-left":t.back}}),a("div",{staticClass:"box-main"},t._l(t.dataList,(function(e){return a("a",{key:e.id,staticClass:"item"},[a("div",{staticClass:"img"},[a("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(e.imgs,(function(t){return a("van-swipe-item",{key:t.id},[a("img",{attrs:{src:t,alt:""}})])})),1)],1),a("van-cell-group",{staticClass:"form-group"},[a("van-cell",{attrs:{title:"商品名稱 : ",value:e.name}}),a("van-cell",{attrs:{title:"商品價格 : ",value:e.price}}),a("van-cell",{attrs:{title:"商品編號 : ",value:e.number}}),a("van-cell",{attrs:{title:"商品說明 : ",value:e.content}}),a("van-cell",{attrs:{title:"數量 : "}},[a("van-stepper",{attrs:{min:"1",max:e.count},model:{value:t.count,callback:function(e){t.count=e},expression:"count"}})],1),a("van-cell",{staticClass:"form-price",attrs:{center:"",title:"合計 : "+t.count*e.price}},[a("van-button",{attrs:{plain:"",round:"",block:"",type:"default","native-type":"submit"},on:{click:t.onSubmit}},[t._v("加入購物車")])],1)],1)],1)})),0)],1)},H=[],Z=a("5530"),J=(a("5319"),a("2f62")),W={data:function(){return{id:"",dataList:[],count:1}},methods:{back:function(){this.$router.go(-1)},getDataList:function(){var t=this,e=j.DetailUrl.replace("#{id}",this.id);S.get(e).then((function(e){var a=e.data;t.dataList=a.objects}))},onSubmit:function(){var t=this;S.post(R.CartOrderlUrl,{product:this.id,count:this.count,user:this.user_id}).then((function(){t.$toast.success("加入成功")})).catch((function(e){var a=e.response.data;t.$toast("".concat(a.message)),"401"==a.status&&(t.$router.push({name:"AccountLogin"}),t.$toast("".concat(a.message)))}))}},created:function(){this.id=this.$route.params.id,this.user_id=this.userid,this.getDataList()},computed:Object(Z["a"])({},Object(J["b"])({userid:function(t){return t.user.id}}))},X=W,G=(a("cc2e"),Object(i["a"])(X,B,H,!1,null,null,null)),K=G.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"account-login"},[a("h2",[t._v("登入")]),a("van-form",{on:{submit:t.onSubmit}},[a("van-field",{attrs:{type:"text",label:"帳號",placeholder:"帳號",clearable:"",maxlength:"16",minlength:"4",rules:[{required:!0,message:"請填寫帳號"}]},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("van-field",{attrs:{type:"password",label:"密碼",placeholder:"密碼",clearable:"",maxlength:"16",minlength:"4",rules:[{required:!0,message:"請填寫密碼"}]},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("div",{staticStyle:{margin:"16px"}},[a("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit",color:"#595959"}},[t._v(" 登入 ")])],1)],1),a("div",{staticClass:"tips"},[t._v(" 沒有帳號？ "),a("router-link",{staticStyle:{color:"#595959"},attrs:{to:{name:"AccountRegister"}}},[t._v("點擊註冊>>")])],1),a("Footer")],1)},V=[],Y={data:function(){return{username:"",password:""}},components:{Footer:_},methods:{onSubmit:function(){var t=this;S.post(U.LoginUrl,{username:this.username,password:this.password}).then((function(e){var a=e.data;t.$store.commit("UpdateUserInfo",a),t.$toast("登入成功"),t.$router.replace({name:"Mine"})})).catch((function(e){var a=e.response.data;t.$toast("".concat(a.message))}))}}},tt=Y,et=Object(i["a"])(tt,Q,V,!1,null,null,null),at=et.exports,rt=function(){var t=this,e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"account-register"},[r("h2",[e._v("註冊")]),r("van-form",{on:{submit:e.onSubmit}},[r("van-field",{attrs:{label:"帳號",placeholder:"帳號",type:"test",clearable:"",maxlength:"16",minlength:"4",rules:[{required:!0,message:"請輸入帳號"}]},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}}),r("van-field",{attrs:{label:"密碼",placeholder:"密碼",type:"password",clearable:"",maxlength:"16",minlength:"4",rules:[{required:!0,message:"請輸入密碼"}]},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),r("van-field",{attrs:{type:"password",label:"確認密碼",placeholder:"確認密碼",rules:[{required:!0,message:"請再次輸入密碼"},{validator:function(){return t.form.password===t.form.passwordRepeat},message:"密碼輸入不一致"}]},model:{value:e.form.passwordRepeat,callback:function(t){e.$set(e.form,"passwordRepeat",t)},expression:"form.passwordRepeat"}}),r("van-field",{attrs:{label:"電子信箱",placeholder:"電子信箱",clearable:"",rules:e.requiredemail},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),r("van-field",{attrs:{label:"手機",placeholder:"手機",clearable:"",maxlength:"10",rules:[{required:!0,message:"請輸入手機"},{pattern:/09\d{8}/,message:"請輸入正確手機"}]},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),r("van-field",{attrs:{label:"生日",placeholder:"生日",clearable:"",rules:[{required:!0,message:"請輸入生日"},{pattern:/^[0-9]{4}[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/,message:"請輸入正確生日"}]},model:{value:e.form.birth,callback:function(t){e.$set(e.form,"birth",t)},expression:"form.birth"}}),r("div",{staticStyle:{margin:"16px"}},[r("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit",color:"#595959"}},[e._v(" 註冊 ")])],1)],1),r("div",{staticClass:"tips"},[e._v(" 已有帳號？ "),r("router-link",{staticStyle:{color:"#595959"},attrs:{to:{name:"AccountLogin"}}},[e._v("點擊登入>>")])],1)],1)},st=[],nt={data:function(){return{requiredemail:[{required:!0,message:"請輸入電子信箱"},{pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"請輸入正確電子信箱"}],form:{username:"",password:"",passwordRepeat:"",email:"",phone:"",birth:""}}},methods:{onSubmit:function(){var t=this;S.post(U.RegisterUrl,{username:this.form.username,password:this.form.password,email:this.form.email,phone:this.form.phone,birth:this.form.birth}).then((function(e){var a=e.data;t.$store.commit("UpdateUserInfo",a),t.$toast("註冊成功"),t.$router.replace({name:"Mine"})})).catch((function(e){var a=e.response.data;t.$toast("".concat(a.message))}))}}},ot=nt,it=Object(i["a"])(ot,rt,st,!1,null,null,null),ct=it.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mine"},[a("div",{staticClass:"user-header"},[a("div",{staticClass:"user-img"},[a("van-icon",{attrs:{name:"contact",size:"80"}}),a("p",[t._v("Hi : "+t._s(t.user.username))])],1)]),a("van-row",{staticClass:"user-links"},[a("van-col",{attrs:{span:"6"}},[a("router-link",{attrs:{to:{name:"Order",params:{status:t.constants.ORDER_STATUS_PAND}}}},[a("van-icon",{attrs:{name:"logistics"}}),a("span",{staticStyle:{color:"#000"}},[t._v("待出貨")])],1)],1),a("van-col",{attrs:{span:"6"}},[a("router-link",{attrs:{to:{name:"Order",params:{status:t.constants.ORDER_STATUS_SEND}}}},[a("van-icon",{attrs:{name:"todo-list-o"}}),a("span",{staticStyle:{color:"#000"}},[t._v("待收貨")])],1)],1),a("van-col",{attrs:{span:"6"}},[a("router-link",{attrs:{to:{name:"Order",params:{status:t.constants.ORDER_STATUS_DONE}}}},[a("van-icon",{attrs:{name:"completed"}}),a("span",{staticStyle:{color:"#000"}},[t._v("已完成")])],1)],1),a("van-col",{attrs:{span:"6"}},[a("router-link",{attrs:{to:{name:"Order",params:{status:t.constants.ORDER_STATUS_CANCEL}}}},[a("van-icon",{attrs:{name:"failure"}}),a("span",{staticStyle:{color:"#000"}},[t._v("已取消")])],1)],1)],1),a("van-cell-group",[a("van-cell",{attrs:{value:"基本資訊",to:{name:"Info"}}}),a("van-cell",{attrs:{value:"登出"},on:{click:t.logout}})],1),a("Footer")],1)},ut=[],dt=a("ade3"),ft=0,mt=1,pt=2,vt=3,ht=(w={},Object(dt["a"])(w,ft,"待出貨"),Object(dt["a"])(w,mt,"待收貨"),Object(dt["a"])(w,pt,"已完成"),Object(dt["a"])(w,vt,"已取消"),w),bt={components:{Footer:_},data:function(){return{constants:r}},methods:{getUserInfo:function(){var t=this;S.get(U.InfoUrl).then((function(e){var a=e.data;t.$store.commit("UpdateUserInfo",a)})).catch((function(e){var a=e.response.data;"401"==a.status&&(t.$router.push({name:"AccountLogin"}),t.$toast("".concat(a.message)))}))},logout:function(){var t=this;S.get(U.LogoutUrl).then((function(){t.$store.commit("DeleteUserInfo"),t.$toast("登出"),t.$router.push({name:"Home"})}))}},computed:Object(J["b"])(["user"]),created:function(){this.getUserInfo()}},gt=bt,_t=(a("dcf9"),Object(i["a"])(gt,lt,ut,!1,null,null,null)),xt=_t.exports,yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"userinfo"},[a("van-nav-bar",{attrs:{title:"會員基本訊息","left-text":"返回","left-arrow":"",fixed:"","right-text":"修改資料"},on:{"click-left":t.back,"click-right":t.onClickRight}}),a("van-cell-group",[a("van-cell",{attrs:{title:"姓名",value:t.dataList.username}}),a("van-cell",{attrs:{title:"手機",value:t.dataList.phone}}),a("van-cell",{attrs:{title:"信箱",value:t.dataList.email}}),a("van-cell",{attrs:{title:"生日",value:t.dataList.birth}})],1)],1)},Ct=[],$t={data:function(){return{dataList:[]}},methods:{back:function(){this.$router.go(-1)},getUserInfo:function(){var t=this;S.get(U.InfoUrl).then((function(e){var a=e.data;t.dataList=a}))},onClickRight:function(){this.$router.push({name:"Modify"})}},computed:Object(J["b"])(["user"]),created:function(){this.getUserInfo()}},kt=$t,Ot=(a("7030"),Object(i["a"])(kt,yt,Ct,!1,null,null,null)),St=Ot.exports,wt=function(){var t=this,e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"account-modify"},[r("van-nav-bar",{attrs:{title:"修改會員基本訊息","left-text":"返回","left-arrow":"",fixed:""},on:{"click-left":e.back}}),r("van-form",{on:{submit:e.onSubmit}},[r("van-field",{attrs:{label:"密碼",placeholder:"密碼",type:"password",clearable:"",maxlength:"16",minlength:"4",rules:[{required:!0,message:"請輸入密碼"}]},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),r("van-field",{attrs:{type:"password",label:"確認密碼",placeholder:"確認密碼",rules:[{required:!0,message:"請再次輸入密碼"},{validator:function(){return t.form.password===t.form.passwordRepeat},message:"密碼輸入不一致"}]},model:{value:e.form.passwordRepeat,callback:function(t){e.$set(e.form,"passwordRepeat",t)},expression:"form.passwordRepeat"}}),r("van-field",{attrs:{label:"電子信箱",placeholder:"電子信箱",clearable:"",rules:e.requiredemail},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),r("van-field",{attrs:{label:"手機",placeholder:"手機",clearable:"",maxlength:"10",rules:[{required:!0,message:"請輸入手機"},{pattern:/09\d{8}/,message:"請輸入正確手機"}]},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),r("van-field",{attrs:{label:"生日",placeholder:"生日",clearable:"",rules:[{required:!0,message:"請輸入生日"},{pattern:/^[0-9]{4}[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/,message:"請輸入正確生日"}]},model:{value:e.form.birth,callback:function(t){e.$set(e.form,"birth",t)},expression:"form.birth"}}),r("div",{staticStyle:{margin:"16px"}},[r("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit",color:"#595959"}},[e._v(" 修改 ")])],1)],1),r("div",{staticClass:"tips"})],1)},Dt=[],Ut={data:function(){return{requiredemail:[{required:!0,message:"請輸入電子信箱"},{pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"請輸入正確電子信箱"}],form:{password:"",passwordRepeat:"",email:"",phone:"",birth:""}}},methods:{back:function(){this.$router.go(-1)},onSubmit:function(){var t=this;S.post(U.ModifyUrl,{password:this.form.password,email:this.form.email,phone:this.form.phone,birth:this.form.birth,user:this.user.id}).then((function(e){var a=e.data;t.$store.commit("UpdateUserInfo",a),t.$toast("修改成功"),t.$router.push({name:"Info"})})).catch((function(e){var a=e.response.data;t.$toast("".concat(a.message))}))}},computed:Object(J["b"])(["user"])},Lt=Ut,jt=(a("4169"),Object(i["a"])(Lt,wt,Dt,!1,null,null,null)),Rt=jt.exports,Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cart"},[a("h3",[t._v("---------")]),a("van-nav-bar",{attrs:{title:"購物車","right-text":"去買單",fixed:""},on:{"click-right":t.onPay}}),t._l(t.orderDetail,(function(e){return a("div",{key:e.id,staticClass:"cart-info"},[a("div",{staticClass:"form-group"},[a("div",{staticClass:"img"},[a("router-link",{attrs:{to:{name:"Product",params:{id:e.product_id}}}},[a("img",{attrs:{src:e.img,alt:""}})]),a("van-icon",{attrs:{name:"delete-o",size:"20px",color:"#ff8a7c"},on:{click:function(a){return t.onCancelOrder(e.orderid)}}})],1),t._m(0,!0),a("div",{staticClass:"right"},[a("span",[t._v(t._s(t._f("ellipsis")(e.product)))]),a("p",[t._v(t._s(e.product_price))]),a("van-stepper",{attrs:{"disable-input":"",min:"1",max:e.product_count},on:{change:function(a){return t.onSubmit(e.product_id,e.count,t.user.id)}},model:{value:e.count,callback:function(a){t.$set(e,"count",a)},expression:"item.count"}}),a("p",[t._v(t._s(e.count*e.product_price))])],1)])])})),a("h3",[t._v("---------")]),a("Footer")],2)},Tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("span",[t._v("商品名稱 : ")]),a("p",[t._v("商品單價 :")]),a("p",[t._v("數量 :")]),a("p",[t._v("總價 :")])])}],At=(a("fb6a"),{data:function(){return{orderDetail:[]}},filters:{ellipsis:function(t){return t?t.length>10?t.slice(0,10)+"...":t:""}},components:{Footer:_},methods:{onPay:function(){0==this.orderDetail.length?this.$toast("購物車是空的"):this.$router.push({name:"Pay"})},onSubmit:function(t,e,a){var r=this;S.put(R.CartOrderlUrl,{product:t,count:e,user:a}).then((function(){r.$toast.success("修改成功"),r.getOrderDetail()})).catch((function(t){var e=t.response.data;r.$toast("".concat(e.message))}))},onCancelOrder:function(t){var e=this;S.patch(R.CartOrderlUrl,{order:t}).then((function(){e.$toast.success("刪除"),e.getOrderDetail()})).catch((function(t){var a=t.response.data;e.$toast("".concat(a.message))}))},getOrderDetail:function(){var t=this;S.get(R.CartOrderlUrl).then((function(e){var a=e.data;t.orderDetail=a.objects})).catch((function(e){var a=e.response.data;"401"==a.status&&(t.$router.push({name:"AccountLogin"}),t.$toast("".concat(a.message)))}))}},computed:Object(J["b"])(["user"]),created:function(){this.getOrderDetail()}}),qt=At,Pt=(a("438a"),Object(i["a"])(qt,Et,Tt,!1,null,null,null)),It=Pt.exports,Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pay"},[a("van-nav-bar",{attrs:{"left-text":"返回","left-arrow":"",title:"結帳",fixed:""},on:{"click-left":t.back}}),a("div",{staticClass:"table"},[a("table",[t._m(0),t._l(t.orderDetail,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(t._f("ellipsis")(e.product)))]),a("td",[t._v(t._s(e.product_price))]),a("td",[t._v(t._s(e.count))]),a("td",[t._v(t._s(e.count*e.product_price))])])}))],2),a("hr"),a("table",[a("tr",[a("th",{staticStyle:{width:"150px"}},[t._v("總計")]),a("th",{staticStyle:{width:"90px"}}),a("th",{staticStyle:{width:"50px"}},[t._v(t._s(t.totalCount))]),a("th",{staticStyle:{width:"90px"}},[t._v(t._s(t.totalPrice))])])]),a("hr"),a("van-form",{on:{submit:function(e){return t.onSubmit(t.user.id)}}},[a("van-field",{attrs:{label:"收件人姓名",placeholder:"收件人姓名",type:"test",clearable:"",rules:[{required:!0,message:"請輸入收件人姓名"}]},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),a("van-field",{attrs:{label:"收件人地址",placeholder:"收件人地址",type:"test",clearable:"",rules:[{required:!0,message:"請輸入收件人地址"}]},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}}),a("van-field",{attrs:{label:"收件人手機",placeholder:"收件人手機",clearable:"",maxlength:"10",rules:[{required:!0,message:"請輸入收件人手機"},{pattern:/09\d{8}/,message:"請輸入正確手機"}]},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}}),a("div",{staticStyle:{margin:"16px"}},[a("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit",color:"#595959"}},[t._v(" 付款 ")])],1)],1)],1),a("Footer")],1)},Mt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",{staticStyle:{width:"150px"}},[t._v("名稱")]),a("th",{staticStyle:{width:"90px"}},[t._v("單價")]),a("th",{staticStyle:{width:"50px"}},[t._v("數量")]),a("th",{staticStyle:{width:"90px"}},[t._v("總價")])])}],Nt=(a("b0c0"),{data:function(){return{orderDetail:[],form:{name:"",phone:"",address:""}}},filters:{ellipsis:function(t){return t?t.length>10?t.slice(0,10)+"...":t:""}},components:{Footer:_},methods:{back:function(){this.$router.go(-1)},onSubmit:function(t){var e=this;S.post(R.TotalOrderUrl,{name:this.form.name,phone:this.form.phone,address:this.form.address,user:t}).then((function(){e.$toast("付款成功"),e.$router.replace({name:"Mine"})})).catch((function(t){var a=t.response.data;e.$toast("".concat(a.message))}))},getOrderDetail:function(){var t=this;S.get(R.CartOrderlUrl).then((function(e){var a=e.data;t.orderDetail=a.objects})).catch((function(e){var a=e.response.data;"401"==a.status&&(t.$router.push({name:"AccountLogin"}),t.$toast("".concat(a.message)))}))}},computed:Object(Z["a"])({totalCount:function(){for(var t=0,e=0;e<this.orderDetail.length;e++)t+=this.orderDetail[e].count;return t},totalPrice:function(){for(var t=0,e=0;e<this.orderDetail.length;e++)t+=this.orderDetail[e].price;return t}},Object(J["b"])(["user"])),created:function(){this.getOrderDetail()}}),zt=Nt,Bt=(a("54e9"),Object(i["a"])(zt,Ft,Mt,!1,null,null,null)),Ht=Bt.exports,Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order"},[a("van-nav-bar",{attrs:{title:"訂單","left-text":"返回","left-arrow":"",fixed:""},on:{"click-left":t.goBack}}),a("van-tabs",{on:{click:t.tabChange},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},t._l(t.constants.ORDER_STATUS,(function(t,e,r){return a("van-tab",{key:r,attrs:{title:t,name:e}})})),1),a("div",{staticClass:"order-list"},t._l(t.dataList,(function(e){return a("div",{key:e.id,staticClass:"order-item"},[a("router-link",{staticStyle:{color:"#000"},attrs:{to:{name:"OrderDetail",params:{id:e.id}}}},[a("div",{staticClass:"order-head"},[a("div",{staticClass:"order-num"},[t._v("訂單編號："+t._s(e.number))]),a("div",{staticClass:"order-status text-warning"},[t._v(t._s(t.constants.ORDER_STATUS[e.status]))])]),a("div",{staticClass:"order-body"},[a("div",{staticClass:"left"},[a("van-image",{attrs:{width:"50",height:"75",src:e.order[0].img}})],1),a("div",{staticClass:"right"},[a("div",{staticClass:"name"},[t._v(t._s(t._f("ellipsis")(e.order[0].product)))]),a("div",{staticClass:"info"},[t._v("x "+t._s(e.order[0].count))]),a("div",{staticClass:"info"},[t._v("$ "+t._s(e.order[0].price))])])]),a("hr"),a("div",{staticClass:"order-footer"},[a("div",{staticClass:"left"},[a("div",{staticClass:"count"},[t._v(t._s(e.total_count)+" 件商品")])]),a("div",{staticClass:"right"},[a("div",{staticClass:"price"},[t._v("訂單金額: $"+t._s(e.total_price))])])])])],1)})),0)],1)},Jt=[],Wt={data:function(){return{status:0,dataList:[],constants:r}},filters:{ellipsis:function(t){return t?t.length>15?t.slice(0,15)+"...":t:""}},methods:{getDataList:function(){var t=this;S.get(R.TotalOrderUrl,{params:{status:this.status}}).then((function(e){var a=e.data;t.dataList=a.objects}))},goBack:function(){this.$router.go(-1)},tabChange:function(){this.getDataList()},loadData:function(){this.status=String(this.$route.params.status),this.dataList=[],this.getDataList()}},created:function(){this.loadData()}},Xt=Wt,Gt=(a("7849"),Object(i["a"])(Xt,Zt,Jt,!1,null,null,null)),Kt=Gt.exports,Qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order-list"},[a("van-nav-bar",{attrs:{title:"訂單明細","left-text":"返回","left-arrow":"",fixed:""},on:{"click-left":t.goBack}}),a("div",{staticClass:"order-list"},t._l(t.dataList,(function(e){return a("div",{key:e.id,staticClass:"order-item"},[a("div",{staticClass:"order-head"}),t._l(e.order,(function(e){return a("div",{key:e.id,staticClass:"order-body"},[a("div",{staticClass:"left"},[a("van-image",{attrs:{width:"50",height:"75",src:e.img}})],1),a("div",{staticClass:"right"},[a("div",{staticClass:"name"},[t._v(t._s(t._f("ellipsis")(e.product)))]),a("div",{staticClass:"info"},[t._v("x "+t._s(e.count))]),a("div",{staticClass:"info"},[t._v("$ "+t._s(e.price))]),a("hr")])])})),a("div",{staticClass:"order-m"},[t._m(0,!0),a("div",{staticClass:"right"},[a("div",[t._v("x "+t._s(e.total_count))]),a("div",[t._v("$"+t._s(e.total_price))])])]),a("hr"),a("van-cell-group",[a("van-cell",{attrs:{title:"訂單編號 :",value:e.number}}),a("van-cell",{attrs:{title:"訂單狀態 :",value:t.constants.ORDER_STATUS[e.status]}}),a("van-cell",{attrs:{title:"建立時間 :",value:e.created_at}}),a("van-cell",{attrs:{title:"更新時間 :",value:e.update_at}}),a("hr"),a("van-cell",{attrs:{title:"宅配方式 :",value:""}}),a("van-cell",{attrs:{title:"付款方式 :",value:""}}),a("hr"),a("van-cell",{attrs:{title:"收件人姓名 :",value:e.name}}),a("van-cell",{attrs:{title:"收件人手機 :",value:e.phone}}),a("van-cell",{attrs:{title:"收件人地址 :",value:e.address}})],1)],2)})),0)],1)},Vt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("div",[t._v("訂單件數: ")]),a("div",[t._v("訂單金額: ")])])}],Yt={data:function(){return{id:"",dataList:[],constants:r}},filters:{ellipsis:function(t){return t?t.length>15?t.slice(0,15)+"...":t:""}},methods:{getDataList:function(){var t=this,e=R.TotalOrderDetailUrl.replace("#{id}",this.id);S.get(e).then((function(e){var a=e.data;t.dataList=a.objects}))},goBack:function(){this.$router.go(-1)}},created:function(){this.id=this.$route.params.id,this.getDataList()}},te=Yt,ee=(a("6460"),Object(i["a"])(te,Qt,Vt,!1,null,null,null)),ae=ee.exports;s["a"].use(d["a"]);var re=[{path:"/",name:"Home",component:q},{path:"/shop",name:"Shop",component:z},{path:"/product/:id",name:"Product",component:K},{path:"/account/login",name:"AccountLogin",component:at},{path:"/account/register",name:"AccountRegister",component:ct},{path:"/mine",name:"Mine",component:xt},{path:"/account/info",name:"Info",component:St},{path:"/account/modify",name:"Modify",component:Rt},{path:"/cart",name:"Cart",component:It},{path:"/pay",name:"Pay",component:Ht},{path:"/order",name:"Order",component:Kt},{path:"/order/:id",name:"OrderDetail",component:ae}],se=new d["a"]({routes:re}),ne=se,oe=a("0e44");s["a"].use(J["a"]);var ie=new J["a"].Store({state:{user:{}},mutations:{UpdateUserInfo:function(t,e){t.user=Object(Z["a"])(Object(Z["a"])({},t.user),e)},DeleteUserInfo:function(t){t.user={}}},actions:{},modules:{},plugins:[Object(oe["a"])({storage:window.localStorage})]}),ce=a("b970");a("157a");s["a"].use(ce["a"]),s["a"].config.productionTip=!1,new s["a"]({router:ne,store:ie,render:function(t){return t(u)}}).$mount("#app")},6460:function(t,e,a){"use strict";a("532f")},"64d4":function(t,e,a){},"6d3d":function(t,e,a){},7030:function(t,e,a){"use strict";a("64d4")},7849:function(t,e,a){"use strict";a("eba8")},"7c55":function(t,e,a){"use strict";a("2395")},8884:function(t,e,a){},"8d91":function(t,e,a){},"98b0":function(t,e,a){},b522:function(t,e,a){},cc2e:function(t,e,a){"use strict";a("dc09")},dc09:function(t,e,a){},dcf9:function(t,e,a){"use strict";a("8884")},de16:function(t,e,a){"use strict";a("8d91")},eba8:function(t,e,a){}});
//# sourceMappingURL=app.7343522d.js.map