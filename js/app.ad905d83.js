(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/wallet-app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0560":function(t,e,a){},"0974":function(t,e,a){"use strict";a("e5b0")},"0d8e":function(t,e,a){},1774:function(t,e,a){},"18e7":function(t,e,a){t.exports=a.p+"img/chip-light.5bf3177c.svg"},"1eee":function(t,e,a){"use strict";a("1774")},"2e0d":function(t,e,a){"use strict";a("b11f")},4163:function(t,e,a){},5492:function(t,e,a){t.exports=a.p+"img/chip-dark.fc147077.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"global-wrapper"},[a("the-header"),a("section",{staticClass:"home-wrapper"},[a("router-view")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"the-header"},[r("div",{staticClass:"logo"},[r("router-link",{attrs:{to:"/"}},[r("img",{staticClass:"wallet-logo",attrs:{src:a("8d77"),alt:""}})])],1),this.$root.loggedIn?r("div",{staticClass:"nav"},[r("router-link",{attrs:{to:"/"}},[r("base-button",{attrs:{btn:"LOG OUT"}})],1)],1):r("div",{staticClass:"nav"},[r("router-link",{attrs:{to:"/log-in"}},[r("base-button",{attrs:{btn:"LOG IN"}})],1)],1)])},s=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",[t._v(t._s(t.btn))])},l=[],u={props:["btn"]},p=u,d=(a("8439"),a("2877")),v=Object(d["a"])(p,c,l,!1,null,"ee1db682",null),h=v.exports,f={components:{BaseButton:h}},m=f,b=(a("796c"),Object(d["a"])(m,i,s,!1,null,"0a9d196c",null)),g=b.exports,C={components:{TheHeader:g},data:function(){return{btnT:"Go to the log in site"}}},_=C,N=(a("5c0b"),Object(d["a"])(_,n,o,!1,null,null,null)),w=N.exports,S=a("8c4f"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"header-comp"},[a("wallet-header",{attrs:{headerTitle:"E-WALLET",headerText:"ACTIVE CARD"}})],1),a("div",{staticClass:"base-card-comp"},[a("base-card",{style:this.$root.activeCardData.cardColor,attrs:{chipSource:this.$root.activeCardData.chipSource,logoSource:this.$root.activeCardData.logoSource,cardNumber:this.$root.activeCardData.inputNumber,fullname:this.$root.activeCardData.inputName,MM:this.$root.activeCardData.inputMonth,YY:this.$root.activeCardData.inputYear}})],1),a("div",{staticClass:"cards-pile-comp"},[a("cards-pile")],1),a("div",{staticClass:"btn"},[a("router-link",{attrs:{to:"/new-card"}},[a("base-button",{attrs:{btn:t.btnT}})],1)],1)])},x=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("h1",{staticClass:"center"},[t._v(t._s(t.headerTitle))]),a("p",{staticClass:"center"},[t._v(t._s(t.headerText))])])},T=[],M={props:["headerTitle","headerText"]},D=M,k=(a("906e"),Object(d["a"])(D,y,T,!1,null,"40b97f7b",null)),O=k.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"cardStyle",staticClass:"base-card",on:{click:function(e){return t.emitCardContentToCardsPile()}}},[r("div",{staticClass:"chip-logo"},[r("img",{attrs:{src:a("5492"),alt:"chip-light no pic"}}),r("img",{attrs:{src:t.logoSource,alt:""}})]),r("div",{staticClass:"number-name-date"},[r("div",{staticClass:"number"},[r("p",[t._v(t._s(t.cardNumber))])]),r("div",{staticClass:"name-date"},[r("div",{staticClass:"name"},[r("h6",[t._v("CARDHOLDER NAME")]),r("p",[t._v(t._s(t.fullname.toUpperCase()))])]),r("div",{staticClass:"date"},[r("h6",[t._v("VALID UNTIL")]),r("p",[t._v(t._s(t.MM)+" / "+t._s(t.YY))])])])])])},Y=[],$={props:["chipSource","logoSource","cardNumber","fullname","MM","YY"],methods:{emitCardContentToCardsPile:function(){this.$root.updateActiveCard({inputNumber:this.cardNumber,inputName:this.fullname.toUpperCase(),inputMonth:this.MM,inputYear:this.YY,cardColor:this.$refs.cardStyle.style.cssText,chipSource:this.chipSource,logoSource:this.logoSource})}}},j=$,R=(a("a7f9"),Object(d["a"])(j,A,Y,!1,null,"59fc7bfa",null)),B=R.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cards-pile-wrapper"},t._l(t.usersData,(function(t){return a("base-card",{key:t.input,ref:t.id,refInFor:!0,staticClass:"base-card",style:t.cardColor,attrs:{chipSource:t.chipSource,logoSource:t.logoSource,cardNumber:t.inputNumber,fullname:t.inputName,MM:t.inputMonth,YY:t.inputYear}})})),1)},X=[],P={components:{BaseCard:B},data:function(){return{usersData:this.$root.data}},methods:{}},I=P,V=(a("6392"),Object(d["a"])(I,L,X,!1,null,"6e434613",null)),W=V.exports,U={components:{BaseButton:h,WalletHeader:O,BaseCard:B,CardsPile:W},data:function(){return{btnT:"ADD NEW CARD"}}},G=U,F=(a("2e0d"),Object(d["a"])(G,E,x,!1,null,"4c9d3f84",null)),H=F.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"showed-card"},[a("wallet-header",{attrs:{headerTitle:"ADD NEW CARD",headerText:"NEW CARD"}}),a("base-card",{style:t.cardColor,attrs:{chipSource:t.chipSource,logoSource:t.logoSource,cardNumber:t.spaceEveryFourDigits(t.inputNumber),fullname:t.inputName,MM:t.inputMonth,YY:t.inputYear}})],1),a("div",{staticClass:"form"},[a("div",{staticClass:"form-number"},[a("label",{attrs:{for:"inputNumber"}},[t._v("CARD NUMBER")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputNumber,expression:"inputNumber"}],attrs:{maxlength:"16",id:"inputNumber",type:"text",placeholder:"XXXX XXXX XXXX XXXX"},domProps:{value:t.inputNumber},on:{input:function(e){e.target.composing||(t.inputNumber=e.target.value)}}})]),a("div",{staticClass:"form-name"},[a("label",{attrs:{for:"inputName"}},[t._v("CARDHOLDER NAME")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputName,expression:"inputName"}],attrs:{maxlength:"18",id:"inputName",type:"text",placeholder:"Firstname Lastname"},domProps:{value:t.inputName},on:{input:function(e){e.target.composing||(t.inputName=e.target.value)}}})]),a("div",{staticClass:"form-month-year"},[a("div",{staticClass:"month"},[a("label",{attrs:{for:"month"}},[t._v("MONTH")]),a("select",{ref:"selectedMonth",attrs:{id:"month",name:"month"},on:{input:t.showSelMonth}},[a("option",{staticStyle:{display:"none"},attrs:{value:"123",selected:"selected"}}),a("option",{attrs:{value:"01"}},[t._v("01")]),a("option",{attrs:{value:"02"}},[t._v("02")]),a("option",{attrs:{value:"03"}},[t._v("03")]),a("option",{attrs:{value:"04"}},[t._v("04")]),a("option",{attrs:{value:"05"}},[t._v("05")]),a("option",{attrs:{value:"06"}},[t._v("06")]),a("option",{attrs:{value:"07"}},[t._v("07")]),a("option",{attrs:{value:"08"}},[t._v("08")]),a("option",{attrs:{value:"09"}},[t._v("09")]),a("option",{attrs:{value:"10"}},[t._v("10")]),a("option",{attrs:{value:"11"}},[t._v("11")]),a("option",{attrs:{value:"12"}},[t._v("12")])])]),a("div",{staticClass:"year"},[a("label",{attrs:{for:"year"}},[t._v("YEAR")]),a("select",{ref:"selectedYear",attrs:{name:"year",id:"year"},on:{input:t.showSelYear}},[a("option",{staticStyle:{display:"none"},attrs:{value:"999",selected:"selected"}}),a("option",{attrs:{value:"21"}},[t._v("21")]),a("option",{attrs:{value:"22"}},[t._v("22")]),a("option",{attrs:{value:"23"}},[t._v("23")]),a("option",{attrs:{value:"24"}},[t._v("24")]),a("option",{attrs:{value:"25"}},[t._v("25")])])])]),a("div",{staticClass:"form-vendor"},[a("label",{attrs:{for:"vendor"}},[t._v("VENDOR")]),a("select",{ref:"selectedVendor",attrs:{name:"vendor",id:"vendor"},on:{input:t.showVendor}},[a("option",{staticStyle:{display:"none"},attrs:{selected:"selected",value:""}}),a("option",{attrs:{value:"bitcoin"}},[t._v("Bitcoin Inc")]),a("option",{attrs:{value:"blockchain"}},[t._v("Blockchainn Inc")]),a("option",{attrs:{value:"evil"}},[t._v("Evil Corp")]),a("option",{attrs:{value:"ninja"}},[t._v("Ninja Bank")])])])]),a("div",{staticClass:"btn",on:{click:t.test}},[a("router-link",{attrs:{to:"/home"}},[a("base-button",{attrs:{btn:t.btnT}})],1)],1)])},K=[],q={components:{BaseButton:h,BaseCard:B,WalletHeader:O},data:function(){return{btnT:"ADD CARD",inputNumber:"",inputName:"",inputMonth:"MM",inputYear:"YY",cardColor:"backgroundColor: lightgrey; position:relative; margin-top: -160px",chipSource:"/img/chip-light.5bf3177c.svg",logoSource:" "}},methods:{showSelMonth:function(){this.inputMonth=this.$refs.selectedMonth.value},showSelYear:function(){this.inputYear=this.$refs.selectedYear.value},showVendor:function(){"ninja"==this.$refs.selectedVendor.value&&(this.cardColor="background: rgb(37,37,37);background: linear-gradient(90deg, rgba(37,37,37,1) 8%, rgba(54,54,54,1) 75%, rgba(70,70,70,1) 100%); color: white; marginTop: -160px; position: relative",this.chipSource="/wallet-app/img/chip-light.5bf3177c.svg",this.logoSource="/wallet-app/img/vendor-ninja.046254ea.svg"),"bitcoin"==this.$refs.selectedVendor.value&&(this.cardColor="backgroundColor: #f5aa48; color:black; ; marginTop: -160px; position: relative",this.chipSource="/wallet-app/img/chip-dark.fc147077.svg",this.logoSource="/wallet-app/img/vendor-bitcoin.6d450848.svg"),"blockchain"==this.$refs.selectedVendor.value&&(this.cardColor="backgroundColor: #834ad7; color:white; ; marginTop: -160px; position: relative ",this.chipSource="/wallet-app/img/chip-light.5bf3177c.svg",this.logoSource="/wallet-app/img/vendor-blockchain.a2171465.svg"),"evil"==this.$refs.selectedVendor.value&&(this.cardColor="background: linear-gradient(248.3deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 100%), #F33355; color:white; ; marginTop: -160px; position: relative",this.chipSource="/wallet-app/img/chip-light.5bf3177c.svg",this.logoSource="/wallet-app/img/vendor-evil.1c4415c7.svg")},spaceEveryFourDigits:function(){for(var t="",e=0;e<this.inputNumber.length;e++)e%4==3?t=t+this.inputNumber[e]+" ":t+=this.inputNumber[e];return t},test:function(){this.inputNumber=this.spaceEveryFourDigits(this.inputNumber),this.$root.pushToData({inputNumber:this.inputNumber,inputName:this.inputName,inputMonth:this.inputMonth,inputYear:this.inputYear,cardColor:this.cardColor,chipSource:this.chipSource,logoSource:this.logoSource})}}},z=q,Q=(a("1eee"),Object(d["a"])(z,J,K,!1,null,"1094b363",null)),Z=Q.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"log-in-wrapper"},[a("div",{staticClass:"form-wrapper"},[t._m(0),t._m(1),a("div",{staticClass:"form-button"},[a("base-button",{attrs:{btn:"confirm"}})],1)])]),a("div",{staticClass:"buttons"},[a("router-link",{staticClass:"btn",attrs:{to:"/"}},[a("base-button",{attrs:{btn:t.btnT}})],1),a("router-link",{attrs:{to:"/home"}},[a("base-button",{attrs:{btn:"SEE MY CARDS"}})],1)],1)])},et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-header"},[a("p",[t._v("LOG IN")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-data"},[a("div",{staticClass:"user"},[a("label",{attrs:{for:"userName"}},[t._v("Username:")]),a("input",{attrs:{type:"text",id:"userName"}})]),a("div",{staticClass:"password"},[a("label",{attrs:{for:"password"}},[t._v("Password: ")]),a("input",{attrs:{type:"password",name:"password",id:"password"}})])])}],at={components:{BaseButton:h},data:function(){return{btnT:"BACK TO HOME PAGE"}}},rt=at,nt=(a("0974"),Object(d["a"])(rt,tt,et,!1,null,"bb97ba30",null)),ot=nt.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"text-box"},[t._m(0),a("div",{staticClass:"button"},[a("router-link",{attrs:{to:"/log-in"}},[a("base-button",{attrs:{btn:t.btnT}})],1)],1)])])},st=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-container"},[a("h1",[a("span",{staticClass:"header-main"},[t._v("VIRTUAL WALLET")]),a("span",{staticClass:"header-sub"},[t._v("A NEW WAY TO CARRY YOUR CARDS")])])])}],ct={components:{BaseButton:h},data:function(){return{btnT:"GET ME ENROLLED"}}},lt=ct,ut=(a("f8f7"),Object(d["a"])(lt,it,st,!1,null,"d194f8d2",null)),pt=ut.exports;r["a"].use(S["a"]);var dt=[{path:"/",name:"presentation",component:pt},{path:"/log-in",name:"log-in",component:ot},{path:"/new-card",name:"new-card",component:Z},{path:"/home",name:"home",component:H}],vt=new S["a"]({mode:"history",base:"/wallet-app/",routes:dt}),ht=vt,ft=a("5492"),mt=a.n(ft),bt=a("18e7"),gt=a.n(bt),Ct=a("aad4"),_t=a.n(Ct),Nt=a("5b0f"),wt=a.n(Nt),St=a("95db"),Et=a.n(St),xt=a("6fbc"),yt=a.n(xt);r["a"].config.productionTip=!1,new r["a"]({data:function(){return{data:[{id:"1",inputNumber:"1234 5678 9101 1121",inputName:"christoffer WALLENBERG",inputMonth:"03",inputYear:"21",cardColor:"backgroundColor: #834ad7; color:white; marginTop: -160px; position: relative",chipSource:"/wallet-app/img/chip-light.5bf3177c.svg",logoSource:"/wallet-app/img/vendor-blockchain.a2171465.svg"},{id:"2",inputNumber:"2222 2222 2222 2222",inputName:"JUANITA LA DEL BARRIO",inputMonth:"03",inputYear:"21",cardColor:"backgroundColor: #f5aa48; color:black; marginTop: -160px; position: relative",chipSource:"/wallet-app/img/chip-dark.fc147077.svg",logoSource:"/wallet-app/img/vendor-bitcoin.6d450848.svg"}],activeCardData:{id:"3",inputNumber:"6666 6666 6666 6666",inputName:"christoffer WALLENBERG",inputMonth:"03",inputYear:"21",cardColor:"background: linear-gradient(248.3deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 100%), #F33355; color:white; marginTop: -160px; position: relative",chipSource:"/wallet-app/img/chip-light.5bf3177c.svg",logoSource:"/wallet-app/img/vendor-evil.1c4415c7.svg"},chipDark:mt.a,chipLight:gt.a,vendorBitcoin:_t.a,vendorBlockchain:wt.a,vendorEvil:Et.a,vendorNinja:yt.a,loggedIn:!1}},methods:{pushToData:function(t){this.data.push(t)},updateActiveCard:function(t){this.activeCardData=t}},router:ht,render:function(t){return t(w)}}).$mount("#app")},"5b0f":function(t,e,a){t.exports=a.p+"img/vendor-blockchain.a2171465.svg"},"5c0b":function(t,e,a){"use strict";a("9c0c")},6392:function(t,e,a){"use strict";a("6bc7")},"6bc7":function(t,e,a){},"6fbc":function(t,e,a){t.exports=a.p+"img/vendor-ninja.046254ea.svg"},"796c":function(t,e,a){"use strict";a("fe3c")},8439:function(t,e,a){"use strict";a("ff2e")},"8d77":function(t,e,a){t.exports=a.p+"img/wallet-logo-white.404795be.svg"},"906e":function(t,e,a){"use strict";a("0560")},"95db":function(t,e,a){t.exports=a.p+"img/vendor-evil.1c4415c7.svg"},"9c0c":function(t,e,a){},a7f9:function(t,e,a){"use strict";a("4163")},aad4:function(t,e,a){t.exports=a.p+"img/vendor-bitcoin.6d450848.svg"},b11f:function(t,e,a){},e5b0:function(t,e,a){},f8f7:function(t,e,a){"use strict";a("0d8e")},fe3c:function(t,e,a){},ff2e:function(t,e,a){}});
//# sourceMappingURL=app.ad905d83.js.map