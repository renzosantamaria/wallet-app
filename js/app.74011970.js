(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,s=1;s<a.length;s++){var c=a[s];0!==o[c]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},o={app:0},n=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/wallet-app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0560":function(t,e,a){},"18e7":function(t,e,a){t.exports=a.p+"img/chip-light.5bf3177c.svg"},"1fd4":function(t,e,a){"use strict";a("f768")},"31d2":function(t,e,a){},5492:function(t,e,a){t.exports=a.p+"img/chip-dark.fc147077.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("a434"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"global-wrapper"},[a("the-header"),a("section",{staticClass:"home-wrapper"},[a("router-view")],1)],1)},n=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"the-header"},[r("div",{staticClass:"logo"},[r("router-link",{attrs:{to:"/"}},[r("img",{staticClass:"wallet-logo",attrs:{src:a("8d77"),alt:""}})])],1),this.$root.loggedIn?r("div",{staticClass:"nav"},[r("router-link",{attrs:{to:"/"}},[r("base-button",{attrs:{btn:"LOG OUT"}})],1)],1):r("div",{staticClass:"nav"},[r("router-link",{attrs:{to:"/log-in"}},[r("base-button",{attrs:{btn:"LOG IN"}})],1)],1)])},s=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",[t._v(t._s(t.btn))])},l=[],u={props:["btn"]},d=u,p=(a("5aca"),a("2877")),h=Object(p["a"])(d,c,l,!1,null,"8b2948fa",null),v=h.exports,m={components:{BaseButton:v}},f=m,b=(a("1fd4"),Object(p["a"])(f,i,s,!1,null,"803ee716",null)),g=b.exports,C={components:{TheHeader:g},data:function(){return{btnT:"Go to the log in site"}}},_=C,S=(a("5c0b"),Object(p["a"])(_,o,n,!1,null,null,null)),y=S.exports,w=a("8c4f"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"header-comp"},[a("wallet-header",{attrs:{headerTitle:t.headerTittle,headerText:t.headerSubText}})],1),t.showActiveCard?a("div",{staticClass:"base-card-comp"},[a("base-card",{staticClass:"inactive",style:this.$root.activeCardData.cardColor,attrs:{chipSource:this.$root.activeCardData.chipSource,logoSource:this.$root.activeCardData.logoSource,cardNumber:this.$root.activeCardData.inputNumber,fullname:this.$root.activeCardData.inputName,MM:this.$root.activeCardData.inputMonth,YY:this.$root.activeCardData.inputYear}})],1):t._e(),a("div",{staticClass:"cards-pile-comp"},[a("cards-pile")],1),a("div",{staticClass:"btn"},[this.$root.deleteBtnActive?t._e():a("div",{staticClass:"add-card-btn"},[a("router-link",{attrs:{to:"/new-card"}},[a("base-button",{attrs:{btn:t.btnT}})],1)],1),t.emptyArray?t._e():a("div",{staticClass:"delete-wrapper",on:{click:t.toggleDeleteStatus}},[a("base-button",{style:this.$root.deleteBtnActive?"backgroundColor: black; color: white":"",attrs:{btn:t.deleteMsgCC}})],1)])])},N=[],A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("h1",{staticClass:"center"},[t._v(t._s(t.headerTitle))]),a("p",{staticClass:"center"},[t._v(t._s(t.headerText))])])},$=[],D={props:["headerTitle","headerText"]},M=D,T=(a("906e"),Object(p["a"])(M,A,$,!1,null,"40b97f7b",null)),E=T.exports,k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"cardStyle",class:t.deleteBtnStatus?t.active:t.inactive,on:{click:function(e){return t.callRootMethods()}}},[r("div",{staticClass:"chip-logo"},[r("img",{attrs:{src:a("5492"),alt:"chip-light no pic"}}),r("img",{attrs:{src:t.logoSource,alt:""}})]),r("div",{staticClass:"number-name-date"},[r("div",{staticClass:"number"},[r("p",[t._v(t._s(t.cardNumber))])]),r("div",{staticClass:"name-date"},[r("div",{staticClass:"name"},[r("h6",[t._v("CARDHOLDER NAME")]),r("p",[t._v(t._s(t.fullname.toUpperCase()))])]),r("div",{staticClass:"date"},[r("h6",[t._v("VALID UNTIL")]),r("p",[t._v(t._s(t.MM)+" / "+t._s(t.YY))])])])])])},Y=[],O={props:["chipSource","logoSource","cardNumber","fullname","MM","YY"],methods:{callRootMethods:function(){0==this.$root.deleteBtnActive?this.$root.updateActiveCard({inputNumber:this.cardNumber,inputName:this.fullname.toUpperCase(),inputMonth:this.MM,inputYear:this.YY,cardColor:this.$refs.cardStyle.style.cssText,chipSource:this.chipSource,logoSource:this.logoSource}):(this.$root.indexToDelete=this.$refs.cardStyle.attributes.cardindex.value,this.$root.cardIsChosen=!0)}},computed:{deleteBtnStatus:function(){return this.$root.deleteBtnActive}},data:function(){return{active:"active",inactive:"base-card"}}},B=O,R=(a("7472"),Object(p["a"])(B,k,Y,!1,null,"d5eb0cf2",null)),j=R.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cards-pile-wrapper"},[t.cardIsChosen?t._e():a("div",{staticClass:"cards-pile-cards"},t._l(t.usersData,(function(t,e){return a("base-card",{key:t.id,ref:t.id,refInFor:!0,style:t.cardColor,attrs:{cardIndex:e,chipSource:t.chipSource,logoSource:t.logoSource,cardNumber:t.inputNumber,fullname:t.inputName,MM:t.inputMonth,YY:t.inputYear}})})),1),this.$root.cardIsChosen?a("div",{staticClass:"message"},[a("p",[t._v("Do you want to delete this card??")]),a("div",{staticClass:"mini-card-wrapper"},[a("base-card",{staticClass:"mini-card",staticStyle:{transform:"scale(0.6)translateY(160px)","letter-spacing":"0px !important"},style:t.cardArray[t.index].cardColor,attrs:{cardNumber:t.cardArray[t.index].inputNumber,fullname:t.cardArray[t.index].inputName,chipSource:t.cardArray[t.index].chipSource,logoSource:t.cardArray[t.index].logoSource,MM:t.cardArray[t.index].inputMonth,YY:t.cardArray[t.index].inputYear}})],1),a("div",{staticClass:"message-btn-container"},[a("button",{on:{click:t.confimAndDelete}},[t._v("Yes")]),a("button",{on:{click:t.abortDeleteMode}},[t._v("No")])])]):t._e()])},L=[],X={components:{BaseCard:j},data:function(){return{usersData:this.$root.data,styleDeleteMode:"box-shadow: 0px 0px 20px red",active:".pile-base-card",inactive:".inactive",cardArray:this.$root.data}},computed:{index:function(){return this.$root.indexToDelete},cardIsChosen:function(){return this.$root.cardIsChosen}},methods:{abortDeleteMode:function(){this.$root.cardIsChosen=!1},confimAndDelete:function(){this.$root.deleteCard(),0==this.$root.data.length&&(this.$root.deleteBtnActive=!1)}}},P=X,V=(a("665c"),Object(p["a"])(P,I,L,!1,null,"6a55e516",null)),W=V.exports,U={components:{BaseButton:v,WalletHeader:E,BaseCard:j,CardsPile:W},computed:{deleteMsgCC:function(){return this.$root.deleteBtnActive?"Exit delete mode":"Delete a card"},emptyArray:function(){return 0==this.$root.data.length},headerSubText:function(){return this.emptyArray?"Your don't have any saved cards. Start by adding one":this.$root.deleteBtnActive?"":"ACTIVE CARD"},headerTittle:function(){return this.$root.cardIsChosen?" ":this.$root.deleteBtnActive?"CLICK ON A CARD":"E-WALLET"},showActiveCard:function(){return!this.$root.deleteBtnActive&&!this.emptyArray}},data:function(){return{btnT:"ADD NEW CARD"}},methods:{toggleDeleteStatus:function(){this.$root.deleteBtnActive=!this.$root.deleteBtnActive,this.$root.cardIsChosen=!1}}},G=U,F=(a("ddcd"),Object(p["a"])(G,x,N,!1,null,"04045714",null)),H=F.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"showed-card"},[a("wallet-header",{attrs:{headerTitle:"ADD NEW CARD",headerText:"NEW CARD"}}),a("base-card",{style:t.cardColor,attrs:{chipSource:t.chipSource,logoSource:t.logoSource,cardNumber:t.spaceEveryFour(t.inputNumber),fullname:t.inputName,MM:t.inputMonth,YY:t.inputYear}})],1),a("div",{staticClass:"form"},[a("div",{staticClass:"form-number"},[a("label",{attrs:{for:"inputNumber"}},[t._v("CARD NUMBER")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputNumber,expression:"inputNumber"}],attrs:{maxlength:"16",id:"inputNumber",type:"text",placeholder:"XXXX XXXX XXXX XXXX"},domProps:{value:t.inputNumber},on:{input:function(e){e.target.composing||(t.inputNumber=e.target.value)}}})]),a("div",{staticClass:"form-name"},[a("label",{attrs:{for:"inputName"}},[t._v("CARDHOLDER NAME")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputName,expression:"inputName"}],attrs:{maxlength:"18",id:"inputName",type:"text",placeholder:"Firstname Lastname"},domProps:{value:t.inputName},on:{input:function(e){e.target.composing||(t.inputName=e.target.value)}}})]),a("div",{staticClass:"form-month-year"},[a("div",{staticClass:"month"},[a("label",{attrs:{for:"month"}},[t._v("MONTH")]),a("select",{ref:"selectedMonth",attrs:{id:"month",name:"month"},on:{input:t.showSelMonth}},[a("option",{staticStyle:{display:"none"},attrs:{value:"123",selected:"selected"}}),a("option",{attrs:{value:"01"}},[t._v("01")]),a("option",{attrs:{value:"02"}},[t._v("02")]),a("option",{attrs:{value:"03"}},[t._v("03")]),a("option",{attrs:{value:"04"}},[t._v("04")]),a("option",{attrs:{value:"05"}},[t._v("05")]),a("option",{attrs:{value:"06"}},[t._v("06")]),a("option",{attrs:{value:"07"}},[t._v("07")]),a("option",{attrs:{value:"08"}},[t._v("08")]),a("option",{attrs:{value:"09"}},[t._v("09")]),a("option",{attrs:{value:"10"}},[t._v("10")]),a("option",{attrs:{value:"11"}},[t._v("11")]),a("option",{attrs:{value:"12"}},[t._v("12")])])]),a("div",{staticClass:"year"},[a("label",{attrs:{for:"year"}},[t._v("YEAR")]),a("select",{ref:"selectedYear",attrs:{name:"year",id:"year"},on:{input:t.showSelYear}},[a("option",{staticStyle:{display:"none"},attrs:{value:"999",selected:"selected"}}),a("option",{attrs:{value:"21"}},[t._v("21")]),a("option",{attrs:{value:"22"}},[t._v("22")]),a("option",{attrs:{value:"23"}},[t._v("23")]),a("option",{attrs:{value:"24"}},[t._v("24")]),a("option",{attrs:{value:"25"}},[t._v("25")])])])]),a("div",{staticClass:"form-vendor"},[a("label",{attrs:{for:"vendor"}},[t._v("VENDOR")]),a("select",{ref:"selectedVendor",attrs:{name:"vendor",id:"vendor"},on:{input:t.showVendor}},[a("option",{staticStyle:{display:"none"},attrs:{selected:"selected",value:""}}),a("option",{attrs:{value:"bitcoin"}},[t._v("Bitcoin Inc")]),a("option",{attrs:{value:"blockchain"}},[t._v("Blockchainn Inc")]),a("option",{attrs:{value:"evil"}},[t._v("Evil Corp")]),a("option",{attrs:{value:"ninja"}},[t._v("Ninja Bank")])])])]),a("div",{staticClass:"btn-wrapper"},[a("div",{staticClass:"btn",on:{click:t.addCardToCardObject}},[a("router-link",{attrs:{to:"/home"}},[a("base-button",{attrs:{btn:t.btnT}})],1)],1),a("div",{staticClass:"btn"},[a("router-link",{attrs:{to:"/home"}},[a("base-button",{attrs:{btn:"BACK TO CARDS"}})],1)],1)])])},K=[],q={components:{BaseButton:v,BaseCard:j,WalletHeader:E},data:function(){return{btnT:"ADD CARD",inputNumber:"",inputName:"",inputMonth:"MM",inputYear:"YY",cardColor:"backgroundColor: lightgrey; position:relative; margin-top: -160px",chipSource:"/img/chip-light.5bf3177c.svg",logoSource:" "}},methods:{showSelMonth:function(){this.inputMonth=this.$refs.selectedMonth.value},showSelYear:function(){this.inputYear=this.$refs.selectedYear.value},showVendor:function(){"ninja"==this.$refs.selectedVendor.value&&(this.cardColor="background: rgb(37,37,37);background: linear-gradient(90deg, rgba(37,37,37,1) 8%, rgba(54,54,54,1) 75%, rgba(70,70,70,1) 100%); color: white; marginTop: -160px; position: relative",this.chipSource="/wallet-app/img/chip-light.5bf3177c.svg",this.logoSource="/wallet-app/img/vendor-ninja.046254ea.svg"),"bitcoin"==this.$refs.selectedVendor.value&&(this.cardColor="backgroundColor: #f5aa48; color:black; ; marginTop: -160px; position: relative",this.chipSource="/wallet-app/img/chip-dark.fc147077.svg",this.logoSource="/wallet-app/img/vendor-bitcoin.6d450848.svg"),"blockchain"==this.$refs.selectedVendor.value&&(this.cardColor="backgroundColor: #834ad7; color:white; ; marginTop: -160px; position: relative ",this.chipSource="/wallet-app/img/chip-light.5bf3177c.svg",this.logoSource="/wallet-app/img/vendor-blockchain.a2171465.svg"),"evil"==this.$refs.selectedVendor.value&&(this.cardColor="background: linear-gradient(248.3deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 100%), #F33355; color:white; ; marginTop: -160px; position: relative",this.chipSource="/wallet-app/img/chip-light.5bf3177c.svg",this.logoSource="/wallet-app/img/vendor-evil.1c4415c7.svg")},spaceEveryFour:function(t){for(var e="",a=0;a<t.length;a++)a%4==3?e=e+this.inputNumber[a]+" ":e+=this.inputNumber[a];return e},addCardToCardObject:function(){this.$root.pushToData({id:this.$root.data.length+50,inputNumber:this.spaceEveryFour(this.inputNumber),inputName:this.inputName,inputMonth:this.inputMonth,inputYear:this.inputYear,cardColor:this.cardColor,chipSource:this.chipSource,logoSource:this.logoSource})}}},z=q,Q=(a("d96f"),Object(p["a"])(z,J,K,!1,null,"488b6c75",null)),Z=Q.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"log-in-wrapper"},[a("div",{staticClass:"form-wrapper"},[t._m(0),t._m(1),a("div",{staticClass:"form-button"},[a("base-button",{attrs:{btn:"confirm"}})],1)])]),a("div",{staticClass:"buttons"},[a("router-link",{staticClass:"btn",attrs:{to:"/"}},[a("base-button",{attrs:{btn:t.btnT}})],1),a("router-link",{attrs:{to:"/home"}},[a("base-button",{attrs:{btn:"SEE MY CARDS"}})],1)],1)])},et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-header"},[a("p",[t._v("LOG IN")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-data"},[a("div",{staticClass:"user"},[a("label",{attrs:{for:"userName"}},[t._v("Username:")]),a("input",{attrs:{type:"text",id:"userName"}})]),a("div",{staticClass:"password"},[a("label",{attrs:{for:"password"}},[t._v("Password: ")]),a("input",{attrs:{type:"password",name:"password",id:"password"}})])])}],at={components:{BaseButton:v},data:function(){return{btnT:"BACK TO HOME PAGE"}}},rt=at,ot=(a("d1dc"),Object(p["a"])(rt,tt,et,!1,null,"77282ee0",null)),nt=ot.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"text-box"},[t._m(0),a("div",{staticClass:"button"},[a("router-link",{attrs:{to:"/home"}},[a("base-button",{attrs:{btn:"See my cards"}})],1)],1)])])},st=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-container"},[a("h1",[a("span",{staticClass:"header-main"},[t._v("VIRTUAL WALLET")]),a("span",{staticClass:"header-sub"},[t._v("A NEW WAY TO CARRY YOUR CARDS")])])])}],ct={components:{BaseButton:v},data:function(){return{btnT:"GET ME ENROLLED"}}},lt=ct,ut=(a("9749"),Object(p["a"])(lt,it,st,!1,null,"09a2edf4",null)),dt=ut.exports;r["a"].use(w["a"]);var pt=[{path:"/",name:"presentation",component:dt},{path:"/log-in",name:"log-in",component:nt},{path:"/new-card",name:"new-card",component:Z},{path:"/home",name:"home",component:H}],ht=new w["a"]({mode:"history",base:"/wallet-app/",routes:pt}),vt=ht,mt=a("5492"),ft=a.n(mt),bt=a("18e7"),gt=a.n(bt),Ct=a("aad4"),_t=a.n(Ct),St=a("5b0f"),yt=a.n(St),wt=a("95db"),xt=a.n(wt),Nt=a("6fbc"),At=a.n(Nt);r["a"].config.productionTip=!1,new r["a"]({data:function(){return{data:[{id:"1",inputNumber:"1234 5678 9101 1121",inputName:"christoffer WALLENBERG",inputMonth:"03",inputYear:"21",cardColor:"backgroundColor: #834ad7; color:white; marginTop: -160px; position: relative",chipSource:"/wallet-app/img/chip-light.5bf3177c.svg",logoSource:"/wallet-app/img/vendor-blockchain.a2171465.svg"},{id:"2",inputNumber:"2222 2222 2222 2222",inputName:"JUANITA LA DEL BARRIO",inputMonth:"03",inputYear:"21",cardColor:"backgroundColor: #f5aa48; color:black; marginTop: -160px; position: relative",chipSource:"/wallet-app/img/chip-dark.fc147077.svg",logoSource:"/wallet-app/img/vendor-bitcoin.6d450848.svg"}],activeCardData:{id:"3",inputNumber:"6666 6666 6666 6666",inputName:"christoffer WALLENBERG",inputMonth:"03",inputYear:"21",cardColor:"background: linear-gradient(248.3deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 100%), #F33355; color:white; marginTop: -160px; position: relative",chipSource:"/wallet-app/img/chip-light.5bf3177c.svg",logoSource:"/wallet-app/img/vendor-evil.1c4415c7.svg"},emptyCardData:{id:"3",inputNumber:"",inputName:"",inputMonth:"MM",inputYear:"YY",cardColor:"backgroundColor: lightgrey; position:relative; margin-top: -160px",chipSource:"/img/chip-light.5bf3177c.svg",logoSource:" "},chipDark:ft.a,chipLight:gt.a,vendorBitcoin:_t.a,vendorBlockchain:yt.a,vendorEvil:xt.a,vendorNinja:At.a,loggedIn:!1,deleteBtnActive:!1,cardIsChosen:!1,indexToDelete:""}},methods:{pushToData:function(t){this.data.push(t)},updateActiveCard:function(t){this.activeCardData=t},deleteCard:function(){this.data.splice(this.indexToDelete,1),this.cardIsChosen=!1,0==this.data.length&&(this.activeCardData=this.emptyCardData)}},router:vt,render:function(t){return t(y)}}).$mount("#app")},"5aca":function(t,e,a){"use strict";a("b90e")},"5b0f":function(t,e,a){t.exports=a.p+"img/vendor-blockchain.a2171465.svg"},"5c0b":function(t,e,a){"use strict";a("9c0c")},"5ed0":function(t,e,a){},"60f9":function(t,e,a){},"665c":function(t,e,a){"use strict";a("31d2")},"6fbc":function(t,e,a){t.exports=a.p+"img/vendor-ninja.046254ea.svg"},7472:function(t,e,a){"use strict";a("f305")},"8d0a":function(t,e,a){},"8d77":function(t,e,a){t.exports=a.p+"img/wallet-logo-white.404795be.svg"},"906e":function(t,e,a){"use strict";a("0560")},"95db":function(t,e,a){t.exports=a.p+"img/vendor-evil.1c4415c7.svg"},9749:function(t,e,a){"use strict";a("8d0a")},"9c0c":function(t,e,a){},aad4:function(t,e,a){t.exports=a.p+"img/vendor-bitcoin.6d450848.svg"},b90e:function(t,e,a){},d1dc:function(t,e,a){"use strict";a("f859")},d96f:function(t,e,a){"use strict";a("5ed0")},ddcd:function(t,e,a){"use strict";a("60f9")},f305:function(t,e,a){},f768:function(t,e,a){},f859:function(t,e,a){}});
//# sourceMappingURL=app.74011970.js.map