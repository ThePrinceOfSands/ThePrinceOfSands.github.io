(function(t){function e(e){for(var r,o,n=e[0],l=e[1],c=e[2],u=0,p=[];u<n.length;u++)o=n[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],r=!0,n=1;n<s.length;n++){var l=s[n];0!==i[l]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=s[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=r,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(s,r,function(e){return t[e]}.bind(null,r));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/client_form/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var d=l;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),i=s("1dce"),a=s.n(i),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"window"},[s("formClientOneStep",{directives:[{name:"show",rawName:"v-show",value:1===t.step,expression:"step === 1"}],attrs:{"next-step":t.nextStep}}),s("formClientTwoStep",{directives:[{name:"show",rawName:"v-show",value:2===t.step,expression:"step === 2"}],attrs:{"next-step":t.nextStep,"back-step":t.backStep}}),s("formClientThreeStep",{directives:[{name:"show",rawName:"v-show",value:3===t.step,expression:"step === 3"}],attrs:{"next-step":t.nextStep,"back-step":t.backStep}}),s("formClientFourStep",{directives:[{name:"show",rawName:"v-show",value:4===t.step,expression:"step === 4"}],attrs:{"back-step":t.backStep}}),s("div",{staticClass:"dots"},[s("div",{staticClass:"dots__dot",class:{"dots__dot-active":1===t.step}}),s("div",{staticClass:"dots__dot",class:{"dots__dot-active":2===t.step}}),s("div",{staticClass:"dots__dot",class:{"dots__dot-active":3===t.step}}),s("div",{staticClass:"dots__dot",class:{"dots__dot-active":4===t.step}})])],1),t._v("> ")])},n=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"formClient_1_step"},[s("div",{staticClass:"main"},[t._v("Форма создания клиента")]),s("form",{staticClass:"formFirst",attrs:{novalidate:""},on:{submit:function(e){return e.preventDefault(),t.submitHandler(e)}}},[s("div",{staticClass:"beforeString"},[s("div",{staticClass:"string"},[s("div",{staticClass:"row"},[t._m(0),s("div",[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.surname,expression:"form.surname",modifiers:{trim:!0}}],class:{invalid:t.$v.form.surname.$dirty&&!t.$v.form.surname.required},attrs:{type:"text",id:"surname",name:"surname",placeholder:"Иванов"},domProps:{value:t.form.surname},on:{input:function(e){e.target.composing||t.$set(t.form,"surname",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),s("div",{staticClass:"tooltip"},[t.$v.form.surname.$dirty&&!t.$v.form.surname.required?s("div",[s("small",{staticClass:"tooltip__left tooltip__left-first"},[t._v("Пожалуйста, введите свою фамилию.")])]):t._e()])]),s("div",{staticClass:"row"},[t._m(1),s("div",[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.name,expression:"form.name",modifiers:{trim:!0}}],class:{invalid:t.$v.form.name.$dirty&&!t.$v.form.name.required},attrs:{type:"text",id:"name",name:"firstname",placeholder:"Иван"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),s("div",{staticClass:"tooltip"},[t.$v.form.name.$dirty&&!t.$v.form.name.required?s("div",[s("small",{staticClass:"tooltip__left tooltip__left-second"},[t._v("Пожалуйста, введите свое имя.")])]):t._e()])]),t._m(2),s("div",{staticClass:"row row__gender"},[s("label",{staticClass:"require",attrs:{for:"gender"}},[t._v("Пол")]),s("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.gender,expression:"form.gender",modifiers:{trim:!0}}],staticClass:"genderSelect",class:{invalid:t.$v.form.gender.$dirty&&!t.$v.form.gender.required},attrs:{id:"gender",value:" "},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"gender",e.target.multiple?s:s[0])}}},[s("option",[t._v("Муж.")]),s("option",[t._v("Жен.")])]),s("div",{staticClass:"tooltip"},[t.$v.form.gender.$dirty&&!t.$v.form.gender.required?s("div",[s("small",{staticClass:"tooltip__left tooltip__left-third"},[t._v("Пожалуйста, укажите свой пол.")])]):t._e()])])]),s("div",{staticClass:"string string__dateAndTel"},[s("div",{staticClass:"row"},[t._m(3),s("div",[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.birthday,expression:"form.birthday",modifiers:{trim:!0}}],class:{invalid:t.$v.form.birthday.$dirty&&!t.$v.form.birthday.required||t.$v.form.birthday.$dirty&&!t.$v.form.birthday.minLength},attrs:{type:"date",id:"date"},domProps:{value:t.form.birthday},on:{input:function(e){e.target.composing||t.$set(t.form,"birthday",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("div",{staticClass:"tooltip"},[t.$v.form.birthday.$dirty&&!t.$v.form.birthday.required||t.$v.form.birthday.$dirty&&!t.$v.form.birthday.minLength?s("div",[s("small",{staticClass:"tooltip__right tooltip__right-first"},[t._v("Пожалуйста, укажите день своего рождения.")])]):t._e()])])]),s("div",{staticClass:"row"},[t._m(4),s("div",[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.tel,expression:"form.tel",modifiers:{trim:!0}}],class:t.$v.form.tel.$error?"invalid":"",attrs:{type:"tel",id:"tel",name:"tel",placeholder:"Телефон"},domProps:{value:t.form.tel},on:{input:function(e){e.target.composing||t.$set(t.form,"tel",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("div",{staticClass:"tooltip"},[t.$v.form.tel.$dirty&&!t.$v.form.tel.required?s("div",[s("small",{staticClass:"tooltip__right tooltip__right-second"},[t._v("Пожалуйста, введите номер своего телефона.")])]):t.$v.form.tel.$dirty&&!t.$v.form.tel.integer?s("div",[s("small",{staticClass:"tooltip__right tooltip__right-second tooltip__right-second-two"},[t._v("Пожалуйста, вводите в поле только цифры.")])]):t._e()])])])])]),s("div",{staticClass:"groupsDoctors"},[s("div",{staticClass:"doctors"},[s("div",{staticClass:"doctors__name require"},[t._v("Группа клиентов")]),s("multiselect",{class:{invalid:t.$v.form.groupClient.$dirty&&!t.$v.form.groupClient.required},attrs:{options:t.GroupClients,"value-property":"value","display-property":"name"},model:{value:t.form.groupClient,callback:function(e){t.$set(t.form,"groupClient","string"===typeof e?e.trim():e)},expression:"form.groupClient"}}),s("div",{staticClass:"tooltip"},[t.$v.form.groupClient.$dirty&&!t.$v.form.groupClient.required?s("div",[s("small",{staticClass:"tooltip__left tooltip__left-fourth"},[t._v(" Пожалуйста, укажите группу клиентов.")])]):t._e()])],1),s("div",{staticClass:"doctors doctors__mobile"},[s("div",{staticClass:"doctors__name require"},[t._v("Врач")]),s("vSelect",{class:{invalid:t.$v.form.doctor.$dirty&&!t.$v.form.doctor.required},attrs:{options:t.namesDoctors,selected:t.form.doctor},on:{select:t.optionSelect},model:{value:t.form.doctor,callback:function(e){t.$set(t.form,"doctor","string"===typeof e?e.trim():e)},expression:"form.doctor"}}),s("div",{staticClass:"tooltip"},[t.$v.form.doctor.$dirty&&!t.$v.form.doctor.required?s("div",[s("small",{staticClass:"tooltip__right tooltip__right-third"},[t._v(" Пожалуйста, укажите желаемого врача.")])]):t._e()])],1)]),t._m(5),t._m(6)])])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("label",{staticClass:"require",attrs:{for:"surname"}},[t._v(" Фамилия")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("label",{staticClass:"require",attrs:{for:"name"}},[t._v("Имя")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",[s("label",{staticClass:"notNec",attrs:{for:"patronymic"}},[t._v("Отчество")])]),s("div",[s("input",{attrs:{type:"text",id:"patronymic",name:"lastname",placeholder:"Иванович"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("label",{staticClass:"require",attrs:{for:"date"}},[t._v("Дата рождения")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("label",{staticClass:"require",attrs:{for:"tel"}},[t._v("Номер телефона")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"checkbox"},[s("input",{staticClass:"checkbox__check",attrs:{type:"checkbox",id:"checkbox"}}),s("label",{staticClass:"checkbox__text",attrs:{for:"checkbox"}},[t._v("не отправлять смс")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"buttonAndWarning"},[s("div",{staticClass:"buttonAndWarning__star"},[s("span",[t._v("*")]),t._v(" - поле обязательное для заполнения ")]),s("button",{staticClass:"buttons__stepForward buttons__stepForward__formOne",attrs:{type:"submit"}},[t._v(" Далее")])])}],d=(s("b0c0"),s("ac1f"),s("1276"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"parent",staticClass:"select title",attrs:{tabindex:"-1"},on:{click:function(e){t.areOptionsVisible=!t.areOptionsVisible}}},[t._v(" "+t._s(t.selected)+" "),t.areOptionsVisible?s("div",{staticClass:"options",style:{top:t.optionsTop}},t._l(t.options,(function(e){return s("p",{key:e.value,on:{click:function(s){return t.selectOption(e)}}},[t._v(" "+t._s(e.name)+" ")])})),0):t._e()])}),u=[],p={name:"vSelect",props:{options:{type:Array,default:function(){return[]}},selected:{type:String,default:function(){return""}}},data:function(){return{areOptionsVisible:!1,optionsTop:"1px;"}},methods:{selectOption:function(t){this.$emit("select",t),this.areOptionsVisible=!1,setTimeout(this.fixTop,100)},hideSelect:function(){this.areOptionsVisible=!1},fixTop:function(){this.optionsTop=this.$refs.parent.clientHeight+1+"px"}},mounted:function(){document.addEventListener("click",this.hideSelect.bind(this),!0),this.fixTop()},beforeDestroy:function(){document.removeEventListener("click",this.hideSelect)}},m=p,v=s("2877"),f=Object(v["a"])(m,d,u,!1,null,null,null),_=f.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"parent",staticClass:"multiselect",attrs:{tabindex:"-1"},on:{click:t.handleClick,blur:function(e){t.focused=!1}}},[t._l(t.formattedOptions,(function(e,r){return s("div",{directives:[{name:"show",rawName:"v-show",value:e.checked,expression:"option.checked"}],key:r,staticClass:"multiselect__selected"},[t._v(" "+t._s(e[t.displayProperty])+" "),s("span",{staticClass:"multiselect__remove",on:{click:function(e){t.preventClose(e),t.handleOptionClick(r)}}},[t._v(" ×")])])})),s("div",{directives:[{name:"show",rawName:"v-show",value:t.focused,expression:"focused"}],staticClass:"multiselect__options",style:{top:t.optionsTop},on:{click:t.preventClose}},t._l(t.formattedOptions,(function(e,r){return s("div",{key:r,staticClass:"multiselect__option",class:{"multiselect__option--checked":e.checked},on:{click:function(e){return t.handleOptionClick(r)}}},[s("div",{staticClass:"multiselect__checkbox"}),s("div",{staticClass:"multiselect__text"},[t._v(" "+t._s(e[t.displayProperty])+" ")])])})),0)],2)},C=[],b=(s("c740"),s("d81d"),s("45fc"),s("a434"),s("2909")),$=s("5530"),y={name:"multiselect",data:function(){return{focused:!1,value:[],optionsTop:"34px;"}},computed:{formattedOptions:function(){var t=this;return this.options.map((function(e){var s=t.value.some((function(s){return s===e[t.displayProperty]}));return Object($["a"])(Object($["a"])({},e),{},{checked:s})}))}},mounted:function(){this.fixTop()},methods:{fixTop:function(){this.optionsTop=this.$refs.parent.clientHeight+2+"px"},handleClick:function(){this.focused=!this.focused},preventClose:function(t){t.stopPropagation()},handleOptionClick:function(t){var e=this.options[t][this.displayProperty],s=this.value.findIndex((function(t){return t===e})),r=Object(b["a"])(this.value);-1===s?(this.value.push(e),r.push(e)):(this.value.splice(s,1),r.splice(s,1)),this.$emit("input",r),setTimeout(this.fixTop,100)}},props:{options:{type:Array,default:function(){return[]}},displayProperty:{type:String,default:function(){return"name"}}}},g=y,x=Object(v["a"])(g,h,C,!1,null,null,null),w=x.exports,S=s("b5ae"),k={name:"formClient_1_step",props:["nextStep"],components:{vSelect:_,multiselect:w},data:function(){return{namesDoctors:[{name:"Иванов",value:"1"},{name:"Захаров",value:"2"},{name:"Чернышева",value:"3"}],GroupClients:[{name:"VIP",value:1},{name:"Проблемные",value:2},{name:"ОМС",value:3}],form:{groupClient:"",name:"",surname:"",birthday:"",tel:"",gender:"",doctor:""}}},methods:{optionSelect:function(t){this.form.doctor=t.name},stepForward:function(){this.nextStep({})},submitHandler:function(){this.$v.form.$touch(),this.$v.form.$error||this.stepForward()}},validations:{form:{name:{required:S["required"]},surname:{required:S["required"]},gender:{required:S["required"]},birthday:{required:S["required"],minLength:function(t){return 3===t.split("-").length}},tel:{required:S["required"],integer:S["integer"]},groupClient:{required:S["required"]},doctor:{required:S["required"]}}}},q=k,O=Object(v["a"])(q,l,c,!1,null,null,null),P=O.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"formClientTwoStep"},[s("div",{staticClass:"main"},[t._v(" Адрес ")]),s("form",{staticClass:"formFirst",attrs:{novalidate:""},on:{submit:function(e){return e.preventDefault(),t.submitHandler(e)}}},[s("div",{staticClass:"address"},[t._m(0),s("div",{staticClass:"address__step2"},[t._m(1),s("div",{staticClass:"address__step"},[t._m(2),s("div",[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.town,expression:"form.town",modifiers:{trim:!0}}],class:{invalid:t.$v.form.town.$dirty&&!t.$v.form.town.required},attrs:{type:"text",id:"town"},domProps:{value:t.form.town},on:{input:function(e){e.target.composing||t.$set(t.form,"town",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("div",{staticClass:"tooltip"},[t.$v.form.town.$dirty&&!t.$v.form.town.required?s("div",[s("small",{staticClass:"tooltip__right tooltip__right-second tooltip__right-second-mobile "},[t._v("Пожалуйста, укажите Ваш город.")])]):t._e()])])])])]),s("div",{staticClass:"buttonAndWarning"},[t._m(3),s("div",{staticClass:"buttons"},[s("button",{staticClass:"buttons__stepBack",on:{click:function(e){return e.preventDefault(),t.nextStepBack(e)}}},[t._v(" Назад")]),s("button",{staticClass:"buttons__stepForward",attrs:{type:"submit"}},[t._v(" Далее")])])])])])},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"address__step1"},[s("div",{staticClass:"address__step"},[s("div",[s("label",{staticClass:"index",attrs:{for:"index"}},[t._v("Индекс")])]),s("div",[s("input",{attrs:{type:"number",id:"index",onKeyPress:"if(this.value.length===6) return false;"}})])]),s("div",{staticClass:"address__step"},[s("div",[s("label",{staticClass:"region",attrs:{for:"region"}},[t._v("Область")])]),s("div",[s("input",{attrs:{type:"text",id:"region"}})])]),s("div",{staticClass:"address__step"},[s("div",[s("label",{staticClass:"street",attrs:{for:"street"}},[t._v("Улица")])]),s("div",[s("input",{attrs:{type:"text",id:"street"}})])]),s("div",{staticClass:"address__step"},[s("div",[s("label",{staticClass:"house",attrs:{for:"house"}},[t._v("Дом")])]),s("div",[s("input",{attrs:{type:"number",id:"house"}})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"address__step"},[s("div",[s("label",{staticClass:"town",attrs:{for:"country"}},[t._v("Страна")])]),s("div",[s("input",{attrs:{type:"text",id:"country",required:""}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("label",{staticClass:"town require",attrs:{for:"town"}},[t._v("Город")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"buttonAndWarning__star"},[s("span",[t._v("*")]),t._v(" - поле обязательное для заполнения ")])}],j={name:"formClientTwoStep",props:["nextStep","backStep"],data:function(){return{form:{town:""}}},methods:{nextStepForward:function(){this.nextStep({})},nextStepBack:function(){this.backStep({})},submitHandler:function(){this.$v.form.$touch(),this.$v.form.$error||this.nextStepForward()}},validations:{form:{town:{required:S["required"]}}}},F=j,I=Object(v["a"])(F,E,T,!1,null,null,null),N=I.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"passport"},[s("div",{staticClass:"main"},[t._v(" Паспорт ")]),s("form",{staticClass:"formFirst",attrs:{novalidate:""},on:{submit:function(e){return e.preventDefault(),t.submitHandler(e)}}},[s("div",{staticClass:"dataPassport"},[s("div",{staticClass:"dataPassport__step dataPassport__step-typeDocument"},[s("div",{staticClass:"dataPassport__step__ch"},[t._m(0),s("div",{staticClass:"dataPassport__step__ch__select"},[s("vSelect",{attrs:{options:t.typePassport,selected:t.selected},on:{select:t.optionSelect}})],1)])]),s("div",{staticClass:"dataPassport__step dataPassport__step__align"},[t._m(1),t._m(2),t._m(3),s("div",{staticClass:"dataPassport__step__ch"},[t._m(4),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.dataIssue,expression:"form.dataIssue"}],class:{invalid:t.$v.form.dataIssue.$dirty&&!t.$v.form.dataIssue.required},attrs:{type:"date",id:"dataIssue"},domProps:{value:t.form.dataIssue},on:{input:function(e){e.target.composing||t.$set(t.form,"dataIssue",e.target.value)}}}),s("div",{staticClass:"tooltip"},[t.$v.form.dataIssue.$dirty&&!t.$v.form.dataIssue.required?s("div",[s("small",{staticClass:"tooltip__right tooltip__right-fourth"},[t._v("Пожалуйста, укажите дату получения паспорта.")])]):t._e()])])])])]),s("div",{staticClass:"buttonAndWarning"},[t._m(5),s("div",{staticClass:"buttons"},[s("button",{staticClass:"buttons__stepBack buttons__stepBack-formThree",on:{click:function(e){return e.preventDefault(),t.nextStepBack(e)}}},[t._v(" Назад")]),s("button",{staticClass:"buttons__stepForward buttons__stepForward-formThree",attrs:{type:"submit"}},[t._v(" Далее")])])])])])},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("label",[t._v("Тип документа")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dataPassport__step__ch"},[s("div",[s("label",{staticClass:"series",attrs:{for:"series"}},[t._v("Серия")])]),s("div",[s("input",{attrs:{type:"number",id:"series",onKeyPress:"if(this.value.length===4) return false;"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dataPassport__step__ch"},[s("div",[s("label",{staticClass:"Number",attrs:{for:"number"}},[t._v("Номер")])]),s("div",[s("input",{attrs:{type:"number",id:"number",onKeyPress:"if(this.value.length===6) return false;"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dataPassport__step__ch"},[s("div",[s("label",{staticClass:"whom",attrs:{for:"whom"}},[t._v("Кем выдан")])]),s("div",[s("input",{attrs:{type:"text",id:"whom"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("label",{staticClass:"dataIssue require",attrs:{for:"dataIssue"}},[t._v("Дата выдачи")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"buttonAndWarning__star"},[s("span",[t._v("*")]),t._v(" - поле обязательное для заполнения ")])}],H={name:"formClientThreeStep",props:["nextStep","backStep"],components:{vSelect:_},data:function(){return{typePassport:[{name:"Паспорт",value:1},{name:"Свидетельство о рождении",value:2},{name:"Вод. удостоверение",value:3}],selected:"",form:{dataIssue:""}}},methods:{optionSelect:function(t){this.selected=t.name},nextStepForward:function(){this.nextStep({})},nextStepBack:function(){this.backStep({})},submitHandler:function(){this.$v.form.$touch(),this.$v.form.$error||this.nextStepForward()}},validations:{form:{dataIssue:{required:S["required"]}}}},B=H,V=Object(v["a"])(B,A,D,!1,null,null,null),W=V.exports,L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"confirmation"},[s("div",{staticClass:"confirmation__text"},[t._v(" Новый клиент успешно создан. ")]),s("div",{staticClass:"confirmation__checkMark"})])}],U={name:"formClientFourStep"},K=U,G=Object(v["a"])(K,L,M,!1,null,null,null),J=G.exports,z={name:"app",components:{formClientOneStep:P,formClientTwoStep:N,formClientThreeStep:W,formClientFourStep:J},data:function(){return{step:1}},methods:{nextStep:function(){this.step<4&&this.step++},backStep:function(){this.step>1&&this.step--}}},Q=z,R=Object(v["a"])(Q,o,n,!1,null,null,null),X=R.exports;s("96ef");r["a"].config.productionTip=!1,r["a"].config.devtools=!0,r["a"].use(a.a),new r["a"]({render:function(t){return t(X)}}).$mount("#app")},"96ef":function(t,e,s){}});
//# sourceMappingURL=app.c8fb671a.js.map