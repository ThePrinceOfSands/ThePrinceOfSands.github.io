(function(t){function e(e){for(var r,s,l=e[0],a=e[1],c=e[2],d=0,f=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],r=!0,l=1;l<o.length;l++){var a=o[l];0!==n[a]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=o[0]))}return t}var r={},n={app:0},i=[];function s(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=r,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(o,r,function(e){return t[e]}.bind(null,r));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/gameSimon/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=a;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"122e":function(t,e,o){t.exports=o.p+"media/2.d2c4a2c4.mp3"},"3f26":function(t,e,o){t.exports=o.p+"media/4.36d5a722.mp3"},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("circleGame")],1)},i=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"circleGame"},[o("message",{on:{select:t.levelSetting}}),o("div",{staticClass:"circleGame__topLeft",on:{click:function(e){return e.preventDefault(),t.activateTopLeft(e)}}}),o("div",{staticClass:"circleGame__topRight",on:{click:function(e){return e.preventDefault(),t.activateTopRight(e)}}}),o("div",{staticClass:"circleGame__bottomLeft",on:{click:function(e){return e.preventDefault(),t.activateBottomLeft(e)}}}),o("div",{staticClass:"circleGame__bottomRight",on:{click:function(e){return e.preventDefault(),t.activateBottomRight(e)}}}),o("div",{staticClass:"circleGame__innerCircle"},[o("div",{staticClass:"platform"},[o("div",{staticClass:"platform__title"},[t._v(" SIMON! ")]),o("div",{staticClass:"switches"},[o("div",{staticClass:"switches__tableCompl"}),o("button",{staticClass:"switches__button",on:{click:function(e){return e.preventDefault(),t.play(e)}}},[t._v(" Start")]),o("div",{staticClass:"switches__turn"})]),t._m(0)])]),o("winModelWindow",{attrs:{result:t.turn},on:{restart:t.restart}}),o("loseModelWindow",{attrs:{result:t.turn},on:{restart:t.restart}})],1)},l=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text"},[o("span",{staticClass:"text__one"},[t._v("LEVEL")]),o("span",{staticClass:"text__two"},[t._v("COUNT")])])}],a=(o("b64b"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"message"},[t._m(0),o("div",{staticClass:"message__subtitle"},[t._v(" Выберете уровень сложности ")]),o("div",{staticClass:"buttons"},[o("button",{staticClass:"buttons__level",on:{click:function(e){return e.preventDefault(),t.levelGet("easy")}}},[t._v(" Easy")]),o("button",{staticClass:"buttons__level",on:{click:function(e){return e.preventDefault(),t.levelGet("mid")}}},[t._v(" Middle")]),o("button",{staticClass:"buttons__level",on:{click:function(e){return e.preventDefault(),t.levelGet("hard")}}},[t._v(" Hard")])])])}),c=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"message__title"},[t._v("Добро пожаловать "),o("br"),t._v("на игру Simon!")])}],u={name:"message",props:["levelSetting"],methods:{levelGet:function(t){document.querySelector(".message").style.display="none",this.$emit("select",{lev:t})}}},d=u,f=o("2877"),h=Object(f["a"])(d,a,c,!1,null,null,null),m=h.exports,p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"winModelWindow"},[o("div",{staticClass:"winModelWindow__title"},[t._v("Игра Окончена!!!")]),t._m(0),o("div",{staticClass:"winModelWindow__result"},[t._v("Ваш итоговый счет: "+t._s(t.result)+" "),o("br"),o("br"),t._v("Хотите начать сначала?")]),o("div",{staticClass:"buttons"},[o("button",{staticClass:"buttons__button",on:{click:t.restart}},[t._v(" Сначало ")])])])},_=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"winModelWindow__subtitle"},[t._v("Поздравляю!!! "),o("br"),t._v('Вы полностью прошли игру "Simon game".')])}],v={name:"winModelWindow",props:["result"],methods:{restart:function(){document.querySelector(".winModelWindow").style.display="none",this.$emit("restart",{flag:"restart"})}}},y=v,b=Object(f["a"])(y,p,_,!1,null,null,null),C=b.exports,g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"loseModelWindow"},[o("div",{staticClass:"loseModelWindow__title"},[t._v("Игра Окончена!!!")]),t._m(0),o("div",{staticClass:"loseModelWindow__result"},[t._v("Ваш итоговый счет: "+t._s(t.result)+" "),o("br"),o("br"),t._v("Хотите начать сначала?")]),o("div",{staticClass:"buttons"},[o("button",{staticClass:"buttons__button",on:{click:t.restart}},[t._v(" Сначало ")])])])},w=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"loseModelWindow__subtitle"},[t._v("Мне жаль!!! "),o("br"),t._v('Вы потерпели поражение в "Simon game".')])}],k={name:"loseModelWindow",props:["result"],methods:{restart:function(){document.querySelector(".loseModelWindow").style.display="none",this.$emit("restart",{flag:"restart"})}}},S=k,O=Object(f["a"])(S,g,w,!1,null,null,null),G=O.exports,M={components:{message:m,winModelWindow:C,loseModelWindow:G},name:"circleGame",data:function(){return{level:"",order:[],interval:"",turn:1,win:!1,playerOrder:[],turnCounter:1,time:0,flash:0,compTurn:!1,noise:!0,good:""}},methods:{restart:function(t){var e=Object.keys(t);"restart"===t[e]&&(document.querySelector(".message").style.display="block")},clearColor:function(){document.querySelector(".circleGame__topLeft").style.backgroundColor="#5fdb5f",document.querySelector(".circleGame__topRight").style.backgroundColor="#db4444",document.querySelector(".circleGame__bottomLeft").style.backgroundColor="#e5d77d",document.querySelector(".circleGame__bottomRight").style.backgroundColor="#385a94"},flashColor:function(){document.querySelector(".circleGame__topLeft").style.backgroundColor="#33ff00",document.querySelector(".circleGame__topRight").style.backgroundColor="#ff0000",document.querySelector(".circleGame__bottomLeft").style.backgroundColor="#ffdd00",document.querySelector(".circleGame__bottomRight").style.backgroundColor="#005eff"},addCounter:function(t){document.querySelector(".switches__turn").textContent=t},levelSetting:function(t){var e=Object.keys(t);document.querySelector(".switches__tableCompl").textContent=t[e],"easy"===t[e]?this.time=1500:"mid"===t[e]?this.time=1e3:this.time=400},one:function(){if(this.noise){var t=new Audio(o("fdf0"));t.play()}this.noise=!0,document.querySelector(".circleGame__topLeft").style.backgroundColor="#33ff00"},two:function(){if(this.noise){var t=new Audio(o("122e"));t.play()}this.noise=!0,document.querySelector(".circleGame__topRight").style.backgroundColor="#ff0000"},three:function(){if(this.noise){var t=new Audio(o("aedf"));t.play()}this.noise=!0,document.querySelector(".circleGame__bottomLeft").style.backgroundColor="#ffdd00"},four:function(){if(this.noise){var t=new Audio(o("3f26"));t.play()}this.noise=!0,document.querySelector(".circleGame__bottomRight").style.backgroundColor="#005eff"},play:function(){this.win=!1,this.turn=1,this.order=[],this.playerOrder=[],this.interval=0,this.turnCounter=1,this.flash=0,this.good=!0,this.addCounter(this.turnCounter),document.querySelector(".switches__button").disable=!1;for(var t=0;t<7;t++)this.order.push(Math.floor(4*Math.random())+1);this.compTurn=!0,this.interval=setInterval(this.gameTurn,800)},gameTurn:function(){var t=this;this.flash===this.turn&&(clearInterval(this.interval),this.compTurn=!1,this.clearColor()),this.compTurn&&(this.clearColor(),setTimeout((function(){1===t.order[t.flash]?t.one():2===t.order[t.flash]?t.two():3===t.order[t.flash]?t.three():4===t.order[t.flash]&&t.four(),t.flash++}),200))},activateTopLeft:function(){var t=this;this.playerOrder.push(1),this.check(),this.one(),this.win||setTimeout((function(){t.clearColor()}),300)},activateTopRight:function(){var t=this;this.playerOrder.push(2),this.check(),this.two(),this.win||setTimeout((function(){t.clearColor()}),300)},activateBottomLeft:function(){var t=this;this.playerOrder.push(3),this.check(),this.three(),this.win||setTimeout((function(){t.clearColor()}),300)},activateBottomRight:function(){var t=this;this.playerOrder.push(4),this.check(),this.four(),this.win||setTimeout((function(){t.clearColor()}),300)},check:function(){var t=this;this.playerOrder[this.playerOrder.length-1]!==this.order[this.playerOrder.length-1]&&(this.good=!1),7===this.playerOrder.length&&this.good&&this.winGame(),!1===this.good&&(this.flashColor(),this.addCounter("no"),setTimeout((function(){document.querySelector(".loseModelWindow").style.display="block",t.addCounter(t.turn),t.clearColor(),t.compTurn=!1,t.flash=0,t.playerOrder=[],t.good=!0}),800)),this.turn===this.playerOrder.length&&this.good&&!this.win&&(this.turn++,this.playerOrder=[],this.compTurn=!0,this.flash=0,this.addCounter(this.turn),this.interval=setInterval(this.gameTurn,this.time))},winGame:function(){var t=this;this.flashColor(),this.addCounter("yes"),this.win=!0,setTimeout((function(){document.querySelector(".winModelWindow").style.display="block",t.clearColor()}),800)}}},T=M,q=Object(f["a"])(T,s,l,!1,null,null,null),x=q.exports,W={name:"app",components:{circleGame:x}},j=W,L=Object(f["a"])(j,n,i,!1,null,null,null),$=L.exports;o("96ef");r["a"].config.productionTip=!1,r["a"].config.devtools=!0,new r["a"]({render:function(t){return t($)}}).$mount("#app")},"96ef":function(t,e,o){},aedf:function(t,e,o){t.exports=o.p+"media/3.c1c96b44.mp3"},fdf0:function(t,e,o){t.exports=o.p+"media/1.99e50f7d.mp3"}});
//# sourceMappingURL=app.6aefaddc.js.map