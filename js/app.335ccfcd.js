(function(t){function e(e){for(var n,i,l=e[0],a=e[1],s=e[2],d=0,f=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);u&&u(e);while(f.length)f.shift()();return c.push.apply(c,s||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,l=1;l<o.length;l++){var a=o[l];0!==r[a]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},c=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/Jtodo/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=a;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"1e32":function(t,e,o){"use strict";var n=o("ee63"),r=o.n(n);r.a},"4c22":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"cover"}}),t._v(" "),o("Header"),o("Todo"),o("Footer")],1)},c=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"main-header"},[o("h1",[t._v("Todo")])])}],a=(o("1e32"),o("2877")),s={},u=Object(a["a"])(s,i,l,!1,null,"f137712e",null),d=u.exports,f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"real-app"},[o("input",{staticClass:"add-input",attrs:{type:"text",autofocus:"autofocus",placeholder:"接下来做什么"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)}}}),t._l(t.filterTodos,(function(e){return o("Item",{key:e.id,attrs:{todo:e},on:{del:t.deleteTodo}})})),o("Tabs",{attrs:{filter:t.filter,todos:t.todos},on:{toggle:t.toggleFilter,clearAll:t.clearAllCompletedTodo}})],2)},p=[],m=(o("4de4"),o("c740"),o("a434"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:["todo-item",t.todo.completed?"completed":""]},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.completed,expression:"todo.completed"}],staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.todo.completed)?t._i(t.todo.completed,null)>-1:t.todo.completed},on:{change:function(e){var o=t.todo.completed,n=e.target,r=!!n.checked;if(Array.isArray(o)){var c=null,i=t._i(o,c);n.checked?i<0&&t.$set(t.todo,"completed",o.concat([c])):i>-1&&t.$set(t.todo,"completed",o.slice(0,i).concat(o.slice(i+1)))}else t.$set(t.todo,"completed",r)}}}),o("label",{attrs:{for:""}},[t._v(t._s(t.todo.content))]),o("button",{staticClass:"destory",on:{click:t.deleteTodo}})])}),h=[],v={props:{todo:{type:Object,required:!0}},methods:{deleteTodo:function(){this.$emit("del",this.todo.id)}}},b=v,y=(o("9c19"),Object(a["a"])(b,m,h,!1,null,"29d8ba80",null)),g=y.exports,_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"helper"},[o("span",{staticClass:"left"},[t._v(t._s(this.unfinishedTodo.length)+" items left")]),o("span",{staticClass:"tabs"},t._l(t.states,(function(e){return o("span",{key:e,class:[e,t.filter===e?"actived":""],on:{click:function(o){return t.toggleFilter(e)}}},[t._v(" "+t._s(e)+" ")])})),0),o("span",{staticClass:"clear",on:{click:t.clearAllCompleted}},[t._v("Clear Completed")])])},T=[],O={props:{filter:{type:String,required:!0},todos:{type:Array,required:!0}},data:function(){return{states:["all","active","completed"]}},computed:{unfinishedTodo:function(){return this.todos.filter((function(t){return!1===t.completed}))}},methods:{clearAllCompleted:function(){this.$emit("clearAll")},toggleFilter:function(t){this.$emit("toggle",t)}}},k=O,x=(o("e878"),Object(a["a"])(k,_,T,!1,null,"4344b52c",null)),C=x.exports,j=0,w={data:function(){return{todos:[],filter:"all"}},components:{Item:g,Tabs:C},computed:{filterTodos:function(){if("all"===this.filter)return this.todos;var t="completed"===this.filter;return this.todos.filter((function(e){return e.completed===t}))}},methods:{addTodo:function(t){this.todos.unshift({id:j++,content:t.target.value,completed:!1}),t.target.value=""},deleteTodo:function(t){this.todos.splice(this.todos.findIndex((function(e){return t===e.id})),1)},toggleFilter:function(t){console.log(t),this.filter=t},clearAllCompletedTodo:function(){this.todos=this.todos.filter((function(t){return!1===t.completed}))}}},$=w,A=(o("6be7"),Object(a["a"])($,f,p,!1,null,"7ec4ad3a",null)),P=A.exports,E=(o("67bb"),{data:function(){return{author:"no one"}},render:function(){var t=arguments[0];return t("div",{attrs:{id:"footer"}},[t("span",["Written by ",this.author])])}}),S={components:{Header:d,Todo:P,Footer:E}},F=S,J=(o("a063"),Object(a["a"])(F,r,c,!1,null,"7ac3dc78",null)),M=J.exports,q=o("8c4f");n["a"].use(q["a"]);var I=[{path:"/",name:"",component:{}}],H=new q["a"]({mode:"history",base:"/Jtodo/",routes:I}),N=H,W=o("2f62");n["a"].use(W["a"]);var z=new W["a"].Store({state:{},mutations:{},actions:{},modules:{}});o("79b0");n["a"].config.productionTip=!1,new n["a"]({router:N,store:z,render:function(t){return t(M)}}).$mount("#app")},"67bb":function(t,e,o){},"6be7":function(t,e,o){"use strict";var n=o("4c22"),r=o.n(n);r.a},"6d37":function(t,e,o){},"79b0":function(t,e,o){},"9c19":function(t,e,o){"use strict";var n=o("e5c5"),r=o.n(n);r.a},a063:function(t,e,o){"use strict";var n=o("6d37"),r=o.n(n);r.a},e5c5:function(t,e,o){},e878:function(t,e,o){"use strict";var n=o("e957"),r=o.n(n);r.a},e957:function(t,e,o){},ee63:function(t,e,o){}});
//# sourceMappingURL=app.335ccfcd.js.map