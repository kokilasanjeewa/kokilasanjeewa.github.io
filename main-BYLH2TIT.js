var JC=Object.create;var Bp=Object.defineProperty,KC=Object.defineProperties,QC=Object.getOwnPropertyDescriptor,eT=Object.getOwnPropertyDescriptors,tT=Object.getOwnPropertyNames,h_=Object.getOwnPropertySymbols,nT=Object.getPrototypeOf,m_=Object.prototype.hasOwnProperty,iT=Object.prototype.propertyIsEnumerable;var p_=(n,e,t)=>e in n?Bp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,re=(n,e)=>{for(var t in e||={})m_.call(e,t)&&p_(n,t,e[t]);if(h_)for(var t of h_(e))iT.call(e,t)&&p_(n,t,e[t]);return n},st=(n,e)=>KC(n,eT(e));var rT=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var oT=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of tT(e))!m_.call(n,r)&&r!==t&&Bp(n,r,{get:()=>e[r],enumerable:!(i=QC(e,r))||i.enumerable});return n};var sT=(n,e,t)=>(t=n!=null?JC(nT(n)):{},oT(e||!n||!n.__esModule?Bp(t,"default",{value:n,enumerable:!0}):t,n));var rw=rT((vl,By)=>{"use strict";(function(n,e){typeof vl=="object"&&typeof By=="object"?By.exports=e():typeof define=="function"&&define.amd?define("Typewriter",[],e):typeof vl=="object"?vl.Typewriter=e():n.Typewriter=e()})(typeof self<"u"?self:vl,()=>(()=>{var n={3146:(r,o,s)=>{for(var a=s(3491),c=typeof window>"u"?s.g:window,l=["moz","webkit"],u="AnimationFrame",d=c["request"+u],f=c["cancel"+u]||c["cancelRequest"+u],h=0;!d&&h<l.length;h++)d=c[l[h]+"Request"+u],f=c[l[h]+"Cancel"+u]||c[l[h]+"CancelRequest"+u];if(!d||!f){var g=0,x=0,m=[],p=1e3/60;d=function(b){if(m.length===0){var E=a(),M=Math.max(0,p-(E-g));g=M+E,setTimeout(function(){var N=m.slice(0);m.length=0;for(var w=0;w<N.length;w++)if(!N[w].cancelled)try{N[w].callback(g)}catch(I){setTimeout(function(){throw I},0)}},Math.round(M))}return m.push({handle:++x,callback:b,cancelled:!1}),x},f=function(b){for(var E=0;E<m.length;E++)m[E].handle===b&&(m[E].cancelled=!0)}}r.exports=function(b){return d.call(c,b)},r.exports.cancel=function(){f.apply(c,arguments)},r.exports.polyfill=function(b){b||(b=c),b.requestAnimationFrame=d,b.cancelAnimationFrame=f}},3491:function(r){(function(){var o,s,a,c,l,u;typeof performance<"u"&&performance!==null&&performance.now?r.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(r.exports=function(){return(o()-l)/1e6},s=process.hrtime,c=(o=function(){var d;return 1e9*(d=s())[0]+d[1]})(),u=1e9*process.uptime(),l=c-u):Date.now?(r.exports=function(){return Date.now()-a},a=Date.now()):(r.exports=function(){return new Date().getTime()-a},a=new Date().getTime())}).call(this)}},e={};function t(r){var o=e[r];if(o!==void 0)return o.exports;var s=e[r]={exports:{}};return n[r].call(s.exports,s,s.exports,t),s.exports}t.n=r=>{var o=r&&r.__esModule?()=>r.default:()=>r;return t.d(o,{a:o}),o},t.d=(r,o)=>{for(var s in o)t.o(o,s)&&!t.o(r,s)&&Object.defineProperty(r,s,{enumerable:!0,get:o[s]})},t.g=(function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}})(),t.o=(r,o)=>Object.prototype.hasOwnProperty.call(r,o);var i={};return(()=>{"use strict";t.d(i,{default:()=>H});var r=t(3146),o=t.n(r);let s=function(V){return new RegExp(/<[a-z][\s\S]*>/i).test(V)},a=function(V,k){return Math.floor(Math.random()*(k-V+1))+V};var c="TYPE_CHARACTER",l="REMOVE_CHARACTER",u="REMOVE_ALL",d="REMOVE_LAST_VISIBLE_NODE",f="PAUSE_FOR",h="CALL_FUNCTION",g="ADD_HTML_TAG_ELEMENT",x="CHANGE_DELETE_SPEED",m="CHANGE_DELAY",p="CHANGE_CURSOR",b="PASTE_STRING",E="HTML_TAG";function M(V){return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(k){return typeof k}:function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k},M(V)}function N(V,k){var A=Object.keys(V);if(Object.getOwnPropertySymbols){var F=Object.getOwnPropertySymbols(V);k&&(F=F.filter(function(U){return Object.getOwnPropertyDescriptor(V,U).enumerable})),A.push.apply(A,F)}return A}function w(V){for(var k=1;k<arguments.length;k++){var A=arguments[k]!=null?arguments[k]:{};k%2?N(Object(A),!0).forEach(function(F){O(V,F,A[F])}):Object.getOwnPropertyDescriptors?Object.defineProperties(V,Object.getOwnPropertyDescriptors(A)):N(Object(A)).forEach(function(F){Object.defineProperty(V,F,Object.getOwnPropertyDescriptor(A,F))})}return V}function I(V){return(function(k){if(Array.isArray(k))return y(k)})(V)||(function(k){if(typeof Symbol<"u"&&k[Symbol.iterator]!=null||k["@@iterator"]!=null)return Array.from(k)})(V)||(function(k,A){if(k){if(typeof k=="string")return y(k,A);var F={}.toString.call(k).slice(8,-1);return F==="Object"&&k.constructor&&(F=k.constructor.name),F==="Map"||F==="Set"?Array.from(k):F==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F)?y(k,A):void 0}})(V)||(function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function y(V,k){(k==null||k>V.length)&&(k=V.length);for(var A=0,F=Array(k);A<k;A++)F[A]=V[A];return F}function C(V,k){for(var A=0;A<k.length;A++){var F=k[A];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(V,D(F.key),F)}}function O(V,k,A){return(k=D(k))in V?Object.defineProperty(V,k,{value:A,enumerable:!0,configurable:!0,writable:!0}):V[k]=A,V}function D(V){var k=(function(A){if(M(A)!="object"||!A)return A;var F=A[Symbol.toPrimitive];if(F!==void 0){var U=F.call(A,"string");if(M(U)!="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(A)})(V);return M(k)=="symbol"?k:k+""}let H=(function(){function V(F,U){var T=this;if((function($,oe){if(!($ instanceof oe))throw new TypeError("Cannot call a class as a function")})(this,V),O(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),O(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),O(this,"setupWrapperElement",function(){T.state.elements.container&&(T.state.elements.wrapper.className=T.options.wrapperClassName,T.state.elements.cursor.className=T.options.cursorClassName,T.state.elements.cursor.innerHTML=T.options.cursor,T.state.elements.container.innerHTML="",T.state.elements.container.appendChild(T.state.elements.wrapper),T.state.elements.container.appendChild(T.state.elements.cursor))}),O(this,"start",function(){return T.state.eventLoopPaused=!1,T.runEventLoop(),T}),O(this,"pause",function(){return T.state.eventLoopPaused=!0,T}),O(this,"stop",function(){return T.state.eventLoop&&((0,r.cancel)(T.state.eventLoop),T.state.eventLoop=null),T}),O(this,"pauseFor",function($){return T.addEventToQueue(f,{ms:$}),T}),O(this,"typeOutAllStrings",function(){return typeof T.options.strings=="string"?(T.typeString(T.options.strings).pauseFor(T.options.pauseFor),T):(T.options.strings.forEach(function($){T.typeString($).pauseFor(T.options.pauseFor).deleteAll(T.options.deleteSpeed)}),T)}),O(this,"typeString",function($){var oe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(s($))return T.typeOutHTMLString($,oe);if($){var _e=(T.options||{}).stringSplitter,Fe=typeof _e=="function"?_e($):$.split("");T.typeCharacters(Fe,oe)}return T}),O(this,"pasteString",function($){var oe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return s($)?T.typeOutHTMLString($,oe,!0):($&&T.addEventToQueue(b,{character:$,node:oe}),T)}),O(this,"typeOutHTMLString",function($){var oe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,_e=arguments.length>2?arguments[2]:void 0,Fe=(function(ge){var se=document.createElement("div");return se.innerHTML=ge,se.childNodes})($);if(Fe.length>0)for(var Pe=0;Pe<Fe.length;Pe++){var Ne=Fe[Pe],Y=Ne.innerHTML;Ne&&Ne.nodeType!==3?(Ne.innerHTML="",T.addEventToQueue(g,{node:Ne,parentNode:oe}),_e?T.pasteString(Y,Ne):T.typeString(Y,Ne)):Ne.textContent&&(_e?T.pasteString(Ne.textContent,oe):T.typeString(Ne.textContent,oe))}return T}),O(this,"deleteAll",function(){var $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return T.addEventToQueue(u,{speed:$}),T}),O(this,"changeDeleteSpeed",function($){if(!$)throw new Error("Must provide new delete speed");return T.addEventToQueue(x,{speed:$}),T}),O(this,"changeDelay",function($){if(!$)throw new Error("Must provide new delay");return T.addEventToQueue(m,{delay:$}),T}),O(this,"changeCursor",function($){if(!$)throw new Error("Must provide new cursor");return T.addEventToQueue(p,{cursor:$}),T}),O(this,"deleteChars",function($){if(!$)throw new Error("Must provide amount of characters to delete");for(var oe=0;oe<$;oe++)T.addEventToQueue(l);return T}),O(this,"callFunction",function($,oe){if(!$||typeof $!="function")throw new Error("Callback must be a function");return T.addEventToQueue(h,{cb:$,thisArg:oe}),T}),O(this,"typeCharacters",function($){var oe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$||!Array.isArray($))throw new Error("Characters must be an array");return $.forEach(function(_e){T.addEventToQueue(c,{character:_e,node:oe})}),T}),O(this,"removeCharacters",function($){if(!$||!Array.isArray($))throw new Error("Characters must be an array");return $.forEach(function(){T.addEventToQueue(l)}),T}),O(this,"addEventToQueue",function($,oe){var _e=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return T.addEventToStateProperty($,oe,_e,"eventQueue")}),O(this,"addReverseCalledEvent",function($,oe){var _e=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return T.options.loop?T.addEventToStateProperty($,oe,_e,"reverseCalledEvents"):T}),O(this,"addEventToStateProperty",function($,oe){var _e=arguments.length>2&&arguments[2]!==void 0&&arguments[2],Fe=arguments.length>3?arguments[3]:void 0,Pe={eventName:$,eventArgs:oe||{}};return T.state[Fe]=_e?[Pe].concat(I(T.state[Fe])):[].concat(I(T.state[Fe]),[Pe]),T}),O(this,"runEventLoop",function(){T.state.lastFrameTime||(T.state.lastFrameTime=Date.now());var $=Date.now(),oe=$-T.state.lastFrameTime;if(!T.state.eventQueue.length){if(!T.options.loop)return;T.state.eventQueue=I(T.state.calledEvents),T.state.calledEvents=[],T.options=w({},T.state.initialOptions)}if(T.state.eventLoop=o()(T.runEventLoop),!T.state.eventLoopPaused){if(T.state.pauseUntil){if($<T.state.pauseUntil)return;T.state.pauseUntil=null}var _e,Fe=I(T.state.eventQueue),Pe=Fe.shift();if(!(oe<=(_e=Pe.eventName===d||Pe.eventName===l?T.options.deleteSpeed==="natural"?a(40,80):T.options.deleteSpeed:T.options.delay==="natural"?a(120,160):T.options.delay))){var Ne=Pe.eventName,Y=Pe.eventArgs;switch(T.logInDevMode({currentEvent:Pe,state:T.state,delay:_e}),Ne){case b:case c:var ge=Y.character,se=Y.node,Oe=document.createTextNode(ge),Ve=Oe;T.options.onCreateTextNode&&typeof T.options.onCreateTextNode=="function"&&(Ve=T.options.onCreateTextNode(ge,Oe)),Ve&&(se?se.appendChild(Ve):T.state.elements.wrapper.appendChild(Ve)),T.state.visibleNodes=[].concat(I(T.state.visibleNodes),[{type:"TEXT_NODE",character:ge,node:Ve}]);break;case l:Fe.unshift({eventName:d,eventArgs:{removingCharacterNode:!0}});break;case f:var Le=Pe.eventArgs.ms;T.state.pauseUntil=Date.now()+parseInt(Le);break;case h:var Rt=Pe.eventArgs,rt=Rt.cb,gt=Rt.thisArg;rt.call(gt,{elements:T.state.elements});break;case g:var Et=Pe.eventArgs,Ke=Et.node,Ht=Et.parentNode;Ht?Ht.appendChild(Ke):T.state.elements.wrapper.appendChild(Ke),T.state.visibleNodes=[].concat(I(T.state.visibleNodes),[{type:E,node:Ke,parentNode:Ht||T.state.elements.wrapper}]);break;case u:var Lt=T.state.visibleNodes,yn=Y.speed,P=[];yn&&P.push({eventName:x,eventArgs:{speed:yn,temp:!0}});for(var Wt=0,ot=Lt.length;Wt<ot;Wt++)P.push({eventName:d,eventArgs:{removingCharacterNode:!1}});yn&&P.push({eventName:x,eventArgs:{speed:T.options.deleteSpeed,temp:!0}}),Fe.unshift.apply(Fe,P);break;case d:var Mt=Pe.eventArgs.removingCharacterNode;if(T.state.visibleNodes.length){var me=T.state.visibleNodes.pop(),Bt=me.type,S=me.node,v=me.character;T.options.onRemoveNode&&typeof T.options.onRemoveNode=="function"&&T.options.onRemoveNode({node:S,character:v}),S&&S.parentNode.removeChild(S),Bt===E&&Mt&&Fe.unshift({eventName:d,eventArgs:{}})}break;case x:T.options.deleteSpeed=Pe.eventArgs.speed;break;case m:T.options.delay=Pe.eventArgs.delay;break;case p:T.options.cursor=Pe.eventArgs.cursor,T.state.elements.cursor.innerHTML=Pe.eventArgs.cursor}T.options.loop&&(Pe.eventName===d||Pe.eventArgs&&Pe.eventArgs.temp||(T.state.calledEvents=[].concat(I(T.state.calledEvents),[Pe]))),T.state.eventQueue=Fe,T.state.lastFrameTime=$}}}),F)if(typeof F=="string"){var ne=document.querySelector(F);if(!ne)throw new Error("Could not find container element");this.state.elements.container=ne}else this.state.elements.container=F;U&&(this.options=w(w({},this.options),U)),this.state.initialOptions=w({},this.options),this.init()}var k,A;return k=V,(A=[{key:"init",value:function(){var F,U;this.setupWrapperElement(),this.addEventToQueue(p,{cursor:this.options.cursor},!0),this.addEventToQueue(u,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(F=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(U=document.createElement("style")).appendChild(document.createTextNode(F)),document.head.appendChild(U),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(F){this.options.devMode&&console.log(F)}}])&&C(k.prototype,A),Object.defineProperty(k,"prototype",{writable:!1}),V})()})(),i.default})())});var Dn=null,nu=!1,Vp=1,aT=null,An=Symbol("SIGNAL");function ke(n){let e=Dn;return Dn=n,e}function su(){return Dn}var Rs={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Ns(n){if(nu)throw new Error("");if(Dn===null)return;Dn.consumerOnSignalRead(n);let e=Dn.producersTail;if(e!==void 0&&e.producer===n)return;let t,i=Dn.recomputing;if(i&&(t=e!==void 0?e.nextProducer:Dn.producers,t!==void 0&&t.producer===n)){Dn.producersTail=t,t.lastReadVersion=n.version;return}let r=n.consumersTail;if(r!==void 0&&r.consumer===Dn&&(!i||lT(r,Dn)))return;let o=Os(Dn),s={producer:n,consumer:Dn,nextProducer:t,prevConsumer:r,lastReadVersion:n.version,nextConsumer:void 0};Dn.producersTail=s,e!==void 0?e.nextProducer=s:Dn.producers=s,o&&__(n,s)}function g_(){Vp++}function au(n){if(!(Os(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Vp)){if(!n.producerMustRecompute(n)&&!cu(n)){ou(n);return}n.producerRecomputeValue(n),ou(n)}}function Hp(n){if(n.consumers===void 0)return;let e=nu;nu=!0;try{for(let t=n.consumers;t!==void 0;t=t.nextConsumer){let i=t.consumer;i.dirty||cT(i)}}finally{nu=e}}function zp(){return Dn?.consumerAllowSignalWrites!==!1}function cT(n){n.dirty=!0,Hp(n),n.consumerMarkedDirty?.(n)}function ou(n){n.dirty=!1,n.lastCleanEpoch=Vp}function Ps(n){return n&&v_(n),ke(n)}function v_(n){n.producersTail=void 0,n.recomputing=!0}function ec(n,e){ke(e),n&&y_(n)}function y_(n){n.recomputing=!1;let e=n.producersTail,t=e!==void 0?e.nextProducer:n.producers;if(t!==void 0){if(Os(n))do t=Gp(t);while(t!==void 0);e!==void 0?e.nextProducer=void 0:n.producers=void 0}}function cu(n){for(let e=n.producers;e!==void 0;e=e.nextProducer){let t=e.producer,i=e.lastReadVersion;if(i!==t.version||(au(t),i!==t.version))return!0}return!1}function tc(n){if(Os(n)){let e=n.producers;for(;e!==void 0;)e=Gp(e)}n.producers=void 0,n.producersTail=void 0,n.consumers=void 0,n.consumersTail=void 0}function __(n,e){let t=n.consumersTail,i=Os(n);if(t!==void 0?(e.nextConsumer=t.nextConsumer,t.nextConsumer=e):(e.nextConsumer=void 0,n.consumers=e),e.prevConsumer=t,n.consumersTail=e,!i)for(let r=n.producers;r!==void 0;r=r.nextProducer)__(r.producer,r)}function Gp(n){let e=n.producer,t=n.nextProducer,i=n.nextConsumer,r=n.prevConsumer;if(n.nextConsumer=void 0,n.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:e.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(e.consumers=i,!Os(e)){let o=e.producers;for(;o!==void 0;)o=Gp(o)}return t}function Os(n){return n.consumerIsAlwaysLive||n.consumers!==void 0}function lu(n){aT?.(n)}function lT(n,e){let t=e.producersTail;if(t!==void 0){let i=e.producers;do{if(i===n)return!0;if(i===t)break;i=i.nextProducer}while(i!==void 0)}return!1}function uu(n,e){return Object.is(n,e)}function du(n,e){let t=Object.create(uT);t.computation=n,e!==void 0&&(t.equal=e);let i=()=>{if(au(t),Ns(t),t.value===Qa)throw t.error;return t.value};return i[An]=t,lu(t),i}var iu=Symbol("UNSET"),ru=Symbol("COMPUTING"),Qa=Symbol("ERRORED"),uT=st(re({},Rs),{value:iu,dirty:!0,error:null,equal:uu,kind:"computed",producerMustRecompute(n){return n.value===iu||n.value===ru},producerRecomputeValue(n){if(n.value===ru)throw new Error("");let e=n.value;n.value=ru;let t=Ps(n),i,r=!1;try{i=n.computation(),ke(null),r=e!==iu&&e!==Qa&&i!==Qa&&n.equal(e,i)}catch(o){i=Qa,n.error=o}finally{ec(n,t)}if(r){n.value=e;return}n.value=i,n.version++}});function dT(){throw new Error}var x_=dT;function b_(n){x_(n)}function jp(n){x_=n}var fT=null;function Wp(n,e){let t=Object.create(fu);t.value=n,e!==void 0&&(t.equal=e);let i=()=>S_(t);return i[An]=t,lu(t),[i,s=>Fs(t,s),s=>$p(t,s)]}function S_(n){return Ns(n),n.value}function Fs(n,e){zp()||b_(n),n.equal(n.value,e)||(n.value=e,hT(n))}function $p(n,e){zp()||b_(n),Fs(n,e(n.value))}var fu=st(re({},Rs),{equal:uu,value:void 0,kind:"signal"});function hT(n){n.version++,g_(),Hp(n),fT?.(n)}function qe(n){return typeof n=="function"}function Ls(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var hu=Ls(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function nc(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var _n=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let o of t)o.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(qe(i))try{i()}catch(o){e=o instanceof hu?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{E_(o)}catch(s){e=e??[],s instanceof hu?e=[...e,...s.errors]:e.push(s)}}if(e)throw new hu(e)}}add(e){var t;if(e&&e!==this)if(this.closed)E_(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&nc(t,e)}remove(e){let{_finalizers:t}=this;t&&nc(t,e),e instanceof n&&e._removeParent(this)}};_n.EMPTY=(()=>{let n=new _n;return n.closed=!0,n})();var qp=_n.EMPTY;function pu(n){return n instanceof _n||n&&"closed"in n&&qe(n.remove)&&qe(n.add)&&qe(n.unsubscribe)}function E_(n){qe(n)?n():n.unsubscribe()}var Ai={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var ks={setTimeout(n,e,...t){let{delegate:i}=ks;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=ks;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function mu(n){ks.setTimeout(()=>{let{onUnhandledError:e}=Ai;if(e)e(n);else throw n})}function ic(){}var M_=Xp("C",void 0,void 0);function w_(n){return Xp("E",void 0,n)}function C_(n){return Xp("N",n,void 0)}function Xp(n,e,t){return{kind:n,value:e,error:t}}var Io=null;function Us(n){if(Ai.useDeprecatedSynchronousErrorHandling){let e=!Io;if(e&&(Io={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=Io;if(Io=null,t)throw i}}else n()}function T_(n){Ai.useDeprecatedSynchronousErrorHandling&&Io&&(Io.errorThrown=!0,Io.error=n)}var Ro=class extends _n{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,pu(e)&&e.add(this)):this.destination=gT}static create(e,t,i){return new Bs(e,t,i)}next(e){this.isStopped?Zp(C_(e),this):this._next(e)}error(e){this.isStopped?Zp(w_(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Zp(M_,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},pT=Function.prototype.bind;function Yp(n,e){return pT.call(n,e)}var Jp=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){gu(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){gu(i)}else gu(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){gu(t)}}},Bs=class extends Ro{constructor(e,t,i){super();let r;if(qe(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let o;this&&Ai.useDeprecatedNextContext?(o=Object.create(e),o.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Yp(e.next,o),error:e.error&&Yp(e.error,o),complete:e.complete&&Yp(e.complete,o)}):r=e}this.destination=new Jp(r)}};function gu(n){Ai.useDeprecatedSynchronousErrorHandling?T_(n):mu(n)}function mT(n){throw n}function Zp(n,e){let{onStoppedNotification:t}=Ai;t&&ks.setTimeout(()=>t(n,e))}var gT={closed:!0,next:ic,error:mT,complete:ic};var Vs=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Ii(n){return n}function Kp(...n){return Qp(n)}function Qp(n){return n.length===0?Ii:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var ft=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let o=yT(t)?t:new Bs(t,i,r);return Us(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=D_(i),new i((r,o)=>{let s=new Bs({next:a=>{try{t(a)}catch(c){o(c),s.unsubscribe()}},error:o,complete:r});this.subscribe(s)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[Vs](){return this}pipe(...t){return Qp(t)(this)}toPromise(t){return t=D_(t),new t((i,r)=>{let o;this.subscribe(s=>o=s,s=>r(s),()=>i(o))})}}return n.create=e=>new n(e),n})();function D_(n){var e;return(e=n??Ai.Promise)!==null&&e!==void 0?e:Promise}function vT(n){return n&&qe(n.next)&&qe(n.error)&&qe(n.complete)}function yT(n){return n&&n instanceof Ro||vT(n)&&pu(n)}function _T(n){return qe(n?.lift)}function vt(n){return e=>{if(_T(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function yt(n,e,t,i,r){return new em(n,e,t,i,r)}var em=class extends Ro{constructor(e,t,i,r,o,s){super(e),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};var A_=Ls(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var hn=(()=>{class n extends ft{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new vu(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new A_}next(t){Us(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){Us(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){Us(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:o}=this;return i||r?qp:(this.currentObservers=null,o.push(t),new _n(()=>{this.currentObservers=null,nc(o,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:o}=this;i?t.error(r):o&&t.complete()}asObservable(){let t=new ft;return t.source=this,t}}return n.create=(e,t)=>new vu(e,t),n})(),vu=class extends hn{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:qp}};var xn=class extends hn{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var bn=new ft(n=>n.complete());function I_(n){return n&&qe(n.schedule)}function R_(n){return n[n.length-1]}function yu(n){return qe(R_(n))?n.pop():void 0}function Xr(n){return I_(R_(n))?n.pop():void 0}function P_(n,e,t,i){function r(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(u){try{l(i.next(u))}catch(d){s(d)}}function c(u){try{l(i.throw(u))}catch(d){s(d)}}function l(u){u.done?o(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function N_(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function No(n){return this instanceof No?(this.v=n,this):new No(n)}function O_(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),r[Symbol.asyncIterator]=function(){return this},r;function s(h){return function(g){return Promise.resolve(g).then(h,d)}}function a(h,g){i[h]&&(r[h]=function(x){return new Promise(function(m,p){o.push([h,x,m,p])>1||c(h,x)})},g&&(r[h]=g(r[h])))}function c(h,g){try{l(i[h](g))}catch(x){f(o[0][3],x)}}function l(h){h.value instanceof No?Promise.resolve(h.value.v).then(u,d):f(o[0][2],h)}function u(h){c("next",h)}function d(h){c("throw",h)}function f(h,g){h(g),o.shift(),o.length&&c(o[0][0],o[0][1])}}function F_(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof N_=="function"?N_(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(o){t[o]=n[o]&&function(s){return new Promise(function(a,c){s=n[o](s),r(a,c,s.done,s.value)})}}function r(o,s,a,c){Promise.resolve(c).then(function(l){o({value:l,done:a})},s)}}var _u=n=>n&&typeof n.length=="number"&&typeof n!="function";function xu(n){return qe(n?.then)}function bu(n){return qe(n[Vs])}function Su(n){return Symbol.asyncIterator&&qe(n?.[Symbol.asyncIterator])}function Eu(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function xT(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Mu=xT();function wu(n){return qe(n?.[Mu])}function Cu(n){return O_(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield No(t.read());if(r)return yield No(void 0);yield yield No(i)}}finally{t.releaseLock()}})}function Tu(n){return qe(n?.getReader)}function rn(n){if(n instanceof ft)return n;if(n!=null){if(bu(n))return bT(n);if(_u(n))return ST(n);if(xu(n))return ET(n);if(Su(n))return L_(n);if(wu(n))return MT(n);if(Tu(n))return wT(n)}throw Eu(n)}function bT(n){return new ft(e=>{let t=n[Vs]();if(qe(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function ST(n){return new ft(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function ET(n){return new ft(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,mu)})}function MT(n){return new ft(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function L_(n){return new ft(e=>{CT(n,e).catch(t=>e.error(t))})}function wT(n){return L_(Cu(n))}function CT(n,e){var t,i,r,o;return P_(this,void 0,void 0,function*(){try{for(t=F_(n);i=yield t.next(),!i.done;){let s=i.value;if(e.next(s),e.closed)return}}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=t.return)&&(yield o.call(t))}finally{if(r)throw r.error}}e.complete()})}function Gn(n,e,t,i=0,r=!1){let o=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(o),!r)return o}function Du(n,e=0){return vt((t,i)=>{t.subscribe(yt(i,r=>Gn(i,n,()=>i.next(r),e),()=>Gn(i,n,()=>i.complete(),e),r=>Gn(i,n,()=>i.error(r),e)))})}function Au(n,e=0){return vt((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function k_(n,e){return rn(n).pipe(Au(e),Du(e))}function U_(n,e){return rn(n).pipe(Au(e),Du(e))}function B_(n,e){return new ft(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function V_(n,e){return new ft(t=>{let i;return Gn(t,e,()=>{i=n[Mu](),Gn(t,e,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(s){t.error(s);return}o?t.complete():t.next(r)},0,!0)}),()=>qe(i?.return)&&i.return()})}function Iu(n,e){if(!n)throw new Error("Iterable cannot be null");return new ft(t=>{Gn(t,e,()=>{let i=n[Symbol.asyncIterator]();Gn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function H_(n,e){return Iu(Cu(n),e)}function z_(n,e){if(n!=null){if(bu(n))return k_(n,e);if(_u(n))return B_(n,e);if(xu(n))return U_(n,e);if(Su(n))return Iu(n,e);if(wu(n))return V_(n,e);if(Tu(n))return H_(n,e)}throw Eu(n)}function qt(n,e){return e?z_(n,e):rn(n)}function at(...n){let e=Xr(n);return qt(n,e)}function tm(n,e){let t=qe(n)?n:()=>n,i=r=>r.error(t());return new ft(e?r=>e.schedule(i,0,r):i)}function Ru(n){return!!n&&(n instanceof ft||qe(n.lift)&&qe(n.subscribe))}var Po=Ls(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function Vt(n,e){return vt((t,i)=>{let r=0;t.subscribe(yt(i,o=>{i.next(n.call(e,o,r++))}))})}var{isArray:TT}=Array;function DT(n,e){return TT(e)?n(...e):n(e)}function Nu(n){return Vt(e=>DT(n,e))}var{isArray:AT}=Array,{getPrototypeOf:IT,prototype:RT,keys:NT}=Object;function Pu(n){if(n.length===1){let e=n[0];if(AT(e))return{args:e,keys:null};if(PT(e)){let t=NT(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function PT(n){return n&&typeof n=="object"&&IT(n)===RT}function Ou(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function nm(...n){let e=Xr(n),t=yu(n),{args:i,keys:r}=Pu(n);if(i.length===0)return qt([],e);let o=new ft(OT(i,e,r?s=>Ou(r,s):Ii));return t?o.pipe(Nu(t)):o}function OT(n,e,t=Ii){return i=>{G_(e,()=>{let{length:r}=n,o=new Array(r),s=r,a=r;for(let c=0;c<r;c++)G_(e,()=>{let l=qt(n[c],e),u=!1;l.subscribe(yt(i,d=>{o[c]=d,u||(u=!0,a--),a||i.next(t(o.slice()))},()=>{--s||i.complete()}))},i)},i)}}function G_(n,e,t){n?Gn(t,n,e):e()}function j_(n,e,t,i,r,o,s,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},h=x=>l<i?g(x):c.push(x),g=x=>{o&&e.next(x),l++;let m=!1;rn(t(x,u++)).subscribe(yt(e,p=>{r?.(p),o?h(p):e.next(p)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let p=c.shift();s?Gn(e,s,()=>g(p)):g(p)}f()}catch(p){e.error(p)}}))};return n.subscribe(yt(e,h,()=>{d=!0,f()})),()=>{a?.()}}function Un(n,e,t=1/0){return qe(e)?Un((i,r)=>Vt((o,s)=>e(i,o,r,s))(rn(n(i,r))),t):(typeof e=="number"&&(t=e),vt((i,r)=>j_(i,r,n,t)))}function W_(n=1/0){return Un(Ii,n)}function $_(){return W_(1)}function Hs(...n){return $_()(qt(n,Xr(n)))}function rc(n){return new ft(e=>{rn(n()).subscribe(e)})}function im(...n){let e=yu(n),{args:t,keys:i}=Pu(n),r=new ft(o=>{let{length:s}=t;if(!s){o.complete();return}let a=new Array(s),c=s,l=s;for(let u=0;u<s;u++){let d=!1;rn(t[u]).subscribe(yt(o,f=>{d||(d=!0,l--),a[u]=f},()=>c--,void 0,()=>{(!c||!d)&&(l||o.next(i?Ou(i,a):a),o.complete())}))}});return e?r.pipe(Nu(e)):r}function yr(n,e){return vt((t,i)=>{let r=0;t.subscribe(yt(i,o=>n.call(e,o,r++)&&i.next(o)))})}function oc(n){return vt((e,t)=>{let i=null,r=!1,o;i=e.subscribe(yt(t,void 0,void 0,s=>{o=rn(n(s,oc(n)(e))),i?(i.unsubscribe(),i=null,o.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(t))})}function Fu(n,e){return qe(e)?Un(n,e,1):Un(n,1)}function q_(n){return vt((e,t)=>{let i=!1;e.subscribe(yt(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function _r(n){return n<=0?()=>bn:vt((e,t)=>{let i=0;e.subscribe(yt(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function X_(n=FT){return vt((e,t)=>{let i=!1;e.subscribe(yt(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function FT(){return new Po}function rm(n){return vt((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function xr(n,e){let t=arguments.length>=2;return i=>i.pipe(n?yr((r,o)=>n(r,o,i)):Ii,_r(1),t?q_(e):X_(()=>new Po))}function Lu(n){return n<=0?()=>bn:vt((e,t)=>{let i=[];e.subscribe(yt(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function om(...n){let e=Xr(n);return vt((t,i)=>{(e?Hs(n,t,e):Hs(n,t)).subscribe(i)})}function Ri(n,e){return vt((t,i)=>{let r=null,o=0,s=!1,a=()=>s&&!r&&i.complete();t.subscribe(yt(i,c=>{r?.unsubscribe();let l=0,u=o++;rn(n(c,u)).subscribe(r=yt(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{s=!0,a()}))})}function sc(n){return vt((e,t)=>{rn(n).subscribe(yt(t,()=>t.complete(),ic)),!t.closed&&e.subscribe(t)})}function fi(n,e,t){let i=qe(n)||e||t?{next:n,error:e,complete:t}:n;return i?vt((r,o)=>{var s;(s=i.subscribe)===null||s===void 0||s.call(i);let a=!0;r.subscribe(yt(o,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),o.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),o.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),o.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):Ii}var sm;function ku(){return sm}function Qi(n){let e=sm;return sm=n,e}var Y_=Symbol("NotFound");function zs(n){return n===Y_||n?.name==="\u0275NotFound"}function Z_(n){let e=ke(null);try{return n()}finally{ke(e)}}var zu="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",De=class extends Error{code;constructor(e,t){super(Ws(e,t)),this.code=e}};function UT(n){return`NG0${Math.abs(n)}`}function Ws(n,e){return`${UT(n)}${e?": "+e:""}`}var Bo=globalThis;function _t(n){for(let e in n)if(n[e]===_t)return e;throw Error("")}function tx(n,e){for(let t in e)e.hasOwnProperty(t)&&!n.hasOwnProperty(t)&&(n[t]=e[t])}function fc(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(fc).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function Gu(n,e){return n?e?`${n} ${e}`:n:e||""}var BT=_t({__forward_ref__:_t});function Vo(n){return n.__forward_ref__=Vo,n}function Sn(n){return bm(n)?n():n}function bm(n){return typeof n=="function"&&n.hasOwnProperty(BT)&&n.__forward_ref__===Vo}function Ge(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Er(n){return{providers:n.providers||[],imports:n.imports||[]}}function hc(n){return VT(n,ju)}function Sm(n){return hc(n)!==null}function VT(n,e){return n.hasOwnProperty(e)&&n[e]||null}function HT(n){let e=n?.[ju]??null;return e||null}function cm(n){return n&&n.hasOwnProperty(Bu)?n[Bu]:null}var ju=_t({\u0275prov:_t}),Bu=_t({\u0275inj:_t}),Re=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Ge({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Em(n){return n&&!!n.\u0275providers}var pc=_t({\u0275cmp:_t}),mc=_t({\u0275dir:_t}),Mm=_t({\u0275pipe:_t}),wm=_t({\u0275mod:_t}),cc=_t({\u0275fac:_t}),Ho=_t({__NG_ELEMENT_ID__:_t}),J_=_t({__NG_ENV_ID__:_t});function Cm(n){return Wu(n,"@NgModule"),n[wm]||null}function Zr(n){return Wu(n,"@Component"),n[pc]||null}function Tm(n){return Wu(n,"@Directive"),n[mc]||null}function nx(n){return Wu(n,"@Pipe"),n[Mm]||null}function Wu(n,e){if(n==null)throw new De(-919,!1)}function gc(n){return typeof n=="string"?n:n==null?"":String(n)}var ix=_t({ngErrorCode:_t}),zT=_t({ngErrorMessage:_t}),GT=_t({ngTokenPath:_t});function Dm(n,e){return rx("",-200,e)}function $u(n,e){throw new De(-201,!1)}function rx(n,e,t){let i=new De(e,n);return i[ix]=e,i[zT]=n,t&&(i[GT]=t),i}function jT(n){return n[ix]}var lm;function ox(){return lm}function Zn(n){let e=lm;return lm=n,e}function Am(n,e,t){let i=hc(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&8)return null;if(e!==void 0)return e;$u(n,"")}var WT={},Oo=WT,$T="__NG_DI_FLAG__",um=class{injector;constructor(e){this.injector=e}retrieve(e,t){let i=Fo(t)||0;try{return this.injector.get(e,i&8?null:Oo,i)}catch(r){if(zs(r))return r;throw r}}};function qT(n,e=0){let t=ku();if(t===void 0)throw new De(-203,!1);if(t===null)return Am(n,void 0,e);{let i=XT(e),r=t.retrieve(n,i);if(zs(r)){if(i.optional)return null;throw r}return r}}function et(n,e=0){return(ox()||qT)(Sn(n),e)}function ue(n,e){return et(n,Fo(e))}function Fo(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function XT(n){return{optional:!!(n&8),host:!!(n&1),self:!!(n&2),skipSelf:!!(n&4)}}function dm(n){let e=[];for(let t=0;t<n.length;t++){let i=Sn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new De(900,!1);let r,o=0;for(let s=0;s<i.length;s++){let a=i[s],c=YT(a);typeof c=="number"?c===-1?r=a.token:o|=c:r=a}e.push(et(r,o))}else e.push(et(i))}return e}function YT(n){return n[$T]}function Lo(n,e){let t=n.hasOwnProperty(cc);return t?n[cc]:null}function qu(n,e){n.forEach(t=>Array.isArray(t)?qu(t,e):e(t))}function Im(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function vc(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function sx(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let o=r-2;n[r]=n[o],r--}n[e]=t,n[e+1]=i}}function Rm(n,e,t){let i=$s(n,e);return i>=0?n[i|1]=t:(i=~i,sx(n,i,e,t)),i}function Xu(n,e){let t=$s(n,e);if(t>=0)return n[t|1]}function $s(n,e){return ZT(n,e,1)}function ZT(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let o=i+(r-i>>1),s=n[o<<t];if(e===s)return o<<t;s>e?r=o:i=o+1}return~(r<<t)}var Jr={},Bn=[],zo=new Re(""),Nm=new Re("",-1),Pm=new Re(""),lc=class{get(e,t=Oo){if(t===Oo){let r=rx("",-201);throw r.name="\u0275NotFound",r}return t}};function qs(n){return{\u0275providers:n}}function ax(n){return qs([{provide:zo,multi:!0,useValue:n}])}function cx(...n){return{\u0275providers:Om(!0,n),\u0275fromNgModule:!0}}function Om(n,...e){let t=[],i=new Set,r,o=s=>{t.push(s)};return qu(e,s=>{let a=s;Vu(a,o,[],i)&&(r||=[],r.push(a))}),r!==void 0&&lx(r,o),t}function lx(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Fm(r,o=>{e(o,i)})}}function Vu(n,e,t,i){if(n=Sn(n),!n)return!1;let r=null,o=cm(n),s=!o&&Zr(n);if(!o&&!s){let c=n.ngModule;if(o=cm(c),o)r=c;else return!1}else{if(s&&!s.standalone)return!1;r=n}let a=i.has(r);if(s){if(a)return!1;if(i.add(r),s.dependencies){let c=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let l of c)Vu(l,e,t,i)}}else if(o){if(o.imports!=null&&!a){i.add(r);let l;qu(o.imports,u=>{Vu(u,e,t,i)&&(l||=[],l.push(u))}),l!==void 0&&lx(l,e)}if(!a){let l=Lo(r)||(()=>new r);e({provide:r,useFactory:l,deps:Bn},r),e({provide:Pm,useValue:r,multi:!0},r),e({provide:zo,useValue:()=>et(r),multi:!0},r)}let c=o.providers;if(c!=null&&!a){let l=n;Fm(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Fm(n,e){for(let t of n)Em(t)&&(t=t.\u0275providers),Array.isArray(t)?Fm(t,e):e(t)}var JT=_t({provide:String,useValue:_t});function ux(n){return n!==null&&typeof n=="object"&&JT in n}function KT(n){return!!(n&&n.useExisting)}function QT(n){return!!(n&&n.useFactory)}function ko(n){return typeof n=="function"}function dx(n){return!!n.useClass}var yc=new Re(""),Uu={},K_={},am;function _c(){return am===void 0&&(am=new lc),am}var ln=class{},Uo=class extends ln{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,hm(e,s=>this.processProvider(s)),this.records.set(Nm,Gs(void 0,this)),r.has("environment")&&this.records.set(ln,Gs(void 0,this));let o=this.records.get(yc);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Pm,Bn,{self:!0}))}retrieve(e,t){let i=Fo(t)||0;try{return this.get(e,Oo,i)}catch(r){if(zs(r))return r;throw r}}destroy(){ac(this),this._destroyed=!0;let e=ke(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),ke(e)}}onDestroy(e){return ac(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){ac(this);let t=Qi(this),i=Zn(void 0),r;try{return e()}finally{Qi(t),Zn(i)}}get(e,t=Oo,i){if(ac(this),e.hasOwnProperty(J_))return e[J_](this);let r=Fo(i),o,s=Qi(this),a=Zn(void 0);try{if(!(r&4)){let l=this.records.get(e);if(l===void 0){let u=rD(e)&&hc(e);u&&this.injectableDefInScope(u)?l=Gs(fm(e),Uu):l=null,this.records.set(e,l)}if(l!=null)return this.hydrate(e,l,r)}let c=r&2?_c():this.parent;return t=r&8&&t===Oo?null:t,c.get(e,t)}catch(c){let l=jT(c);throw l===-200||l===-201?new De(l,null):c}finally{Zn(a),Qi(s)}}resolveInjectorInitializers(){let e=ke(null),t=Qi(this),i=Zn(void 0),r;try{let o=this.get(zo,Bn,{self:!0});for(let s of o)s()}finally{Qi(t),Zn(i),ke(e)}}toString(){return"R3Injector[...]"}processProvider(e){e=Sn(e);let t=ko(e)?e:Sn(e&&e.provide),i=tD(e);if(!ko(e)&&e.multi===!0){let r=this.records.get(t);r||(r=Gs(void 0,Uu,!0),r.factory=()=>dm(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t,i){let r=ke(null);try{if(t.value===K_)throw Dm("");return t.value===Uu&&(t.value=K_,t.value=t.factory(void 0,i)),typeof t.value=="object"&&t.value&&iD(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{ke(r)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=Sn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function fm(n){let e=hc(n),t=e!==null?e.factory:Lo(n);if(t!==null)return t;if(n instanceof Re)throw new De(-204,!1);if(n instanceof Function)return eD(n);throw new De(-204,!1)}function eD(n){if(n.length>0)throw new De(-204,!1);let t=HT(n);return t!==null?()=>t.factory(n):()=>new n}function tD(n){if(ux(n))return Gs(void 0,n.useValue);{let e=Lm(n);return Gs(e,Uu)}}function Lm(n,e,t){let i;if(ko(n)){let r=Sn(n);return Lo(r)||fm(r)}else if(ux(n))i=()=>Sn(n.useValue);else if(QT(n))i=()=>n.useFactory(...dm(n.deps||[]));else if(KT(n))i=(r,o)=>et(Sn(n.useExisting),o!==void 0&&o&8?8:void 0);else{let r=Sn(n&&(n.useClass||n.provide));if(nD(n))i=()=>new r(...dm(n.deps));else return Lo(r)||fm(r)}return i}function ac(n){if(n.destroyed)throw new De(-205,!1)}function Gs(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function nD(n){return!!n.deps}function iD(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function rD(n){return typeof n=="function"||typeof n=="object"&&n.ngMetadataName==="InjectionToken"}function hm(n,e){for(let t of n)Array.isArray(t)?hm(t,e):t&&Em(t)?hm(t.\u0275providers,e):e(t)}function In(n,e){let t;n instanceof Uo?(ac(n),t=n):t=new um(n);let i,r=Qi(t),o=Zn(void 0);try{return e()}finally{Qi(r),Zn(o)}}function fx(){return ox()!==void 0||ku()!=null}var Ni=0,je=1,Xe=2,pn=3,pi=4,mi=5,Xs=6,Ys=7,Qt=8,Mr=9,Pi=10,kt=11,Zs=12,km=13,Go=14,Kn=15,jo=16,Wo=17,$o=18,wr=19,Um=20,br=21,Yu=22,xc=23,Qn=24,Zu=25,Kr=26,En=27,hx=1,Bm=6,Qr=7,bc=8,Sc=9,en=10;function Cr(n){return Array.isArray(n)&&typeof n[hx]=="object"}function Oi(n){return Array.isArray(n)&&n[hx]===!0}function Vm(n){return(n.flags&4)!==0}function Tr(n){return n.componentOffset>-1}function Ju(n){return(n.flags&1)===1}function er(n){return!!n.template}function Js(n){return(n[Xe]&512)!==0}function qo(n){return(n[Xe]&256)===256}var Hm="svg",px="math";function gi(n){for(;Array.isArray(n);)n=n[Ni];return n}function zm(n,e){return gi(e[n])}function Fi(n,e){return gi(e[n.index])}function Ku(n,e){return n.data[e]}function vi(n,e){let t=e[n];return Cr(t)?t:t[Ni]}function Qu(n){return(n[Xe]&128)===128}function mx(n){return Oi(n[pn])}function tr(n,e){return e==null?null:n[e]}function Gm(n){n[Wo]=0}function jm(n){n[Xe]&1024||(n[Xe]|=1024,Qu(n)&&Mc(n))}function gx(n,e){for(;n>0;)e=e[Go],n--;return e}function Ec(n){return!!(n[Xe]&9216||n[Qn]?.dirty)}function ed(n){n[Pi].changeDetectionScheduler?.notify(8),n[Xe]&64&&(n[Xe]|=1024),Ec(n)&&Mc(n)}function Mc(n){n[Pi].changeDetectionScheduler?.notify(0);let e=Yr(n);for(;e!==null&&!(e[Xe]&8192||(e[Xe]|=8192,!Qu(e)));)e=Yr(e)}function Wm(n,e){if(qo(n))throw new De(911,!1);n[br]===null&&(n[br]=[]),n[br].push(e)}function vx(n,e){if(n[br]===null)return;let t=n[br].indexOf(e);t!==-1&&n[br].splice(t,1)}function Yr(n){let e=n[pn];return Oi(e)?e[pn]:e}function yx(n){return n[Ys]??=[]}function _x(n){return n.cleanup??=[]}var it={lFrame:Nx(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var pm=!1;function xx(){return it.lFrame.elementDepthCount}function bx(){it.lFrame.elementDepthCount++}function $m(){it.lFrame.elementDepthCount--}function Sx(){return it.bindingsEnabled}function Ex(){return it.skipHydrationRootTNode!==null}function qm(n){return it.skipHydrationRootTNode===n}function Xm(){it.skipHydrationRootTNode=null}function lt(){return it.lFrame.lView}function Mn(){return it.lFrame.tView}function jn(n){return it.lFrame.contextLView=n,n[Qt]}function Wn(n){return it.lFrame.contextLView=null,n}function ei(){let n=Ym();for(;n!==null&&n.type===64;)n=n.parent;return n}function Ym(){return it.lFrame.currentTNode}function Mx(){let n=it.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Ks(n,e){let t=it.lFrame;t.currentTNode=n,t.isParent=e}function Zm(){return it.lFrame.isParent}function wx(){it.lFrame.isParent=!1}function Jm(){return pm}function Km(n){let e=pm;return pm=n,e}function Qm(){let n=it.lFrame,e=n.bindingRootIndex;return e===-1&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function Cx(n){return it.lFrame.bindingIndex=n}function eo(){return it.lFrame.bindingIndex++}function eg(n){let e=it.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function Tx(){return it.lFrame.inI18n}function Dx(n,e){let t=it.lFrame;t.bindingIndex=t.bindingRootIndex=n,td(e)}function Ax(){return it.lFrame.currentDirectiveIndex}function td(n){it.lFrame.currentDirectiveIndex=n}function Ix(n){let e=it.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function tg(n){it.lFrame.currentQueryIndex=n}function oD(n){let e=n[je];return e.type===2?e.declTNode:e.type===1?n[mi]:null}function ng(n,e,t){if(t&4){let r=e,o=n;for(;r=r.parent,r===null&&!(t&1);)if(r=oD(o),r===null||(o=o[Go],r.type&10))break;if(r===null)return!1;e=r,n=o}let i=it.lFrame=Rx();return i.currentTNode=e,i.lView=n,!0}function nd(n){let e=Rx(),t=n[je];it.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function Rx(){let n=it.lFrame,e=n===null?null:n.child;return e===null?Nx(n):e}function Nx(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function Px(){let n=it.lFrame;return it.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var ig=Px;function id(){let n=Px();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function Ox(n){return(it.lFrame.contextLView=gx(n,it.lFrame.contextLView))[Qt]}function Dr(){return it.lFrame.selectedIndex}function to(n){it.lFrame.selectedIndex=n}function wc(){let n=it.lFrame;return Ku(n.tView,n.selectedIndex)}function Rn(){it.lFrame.currentNamespace=Hm}function Li(){sD()}function sD(){it.lFrame.currentNamespace=null}function rg(){return it.lFrame.currentNamespace}var Fx=!0;function rd(){return Fx}function od(n){Fx=n}function mm(n,e=null,t=null,i){let r=og(n,e,t,i);return r.resolveInjectorInitializers(),r}function og(n,e=null,t=null,i,r=new Set){let o=[t||Bn,cx(n)],s;return new Uo(o,e||_c(),s||null,r)}var hi=class n{static THROW_IF_NOT_FOUND=Oo;static NULL=new lc;static create(e,t){if(Array.isArray(e))return mm({name:""},t,e,"");{let i=e.name??"";return mm({name:i},e.parent,e.providers,i)}}static \u0275prov=Ge({token:n,providedIn:"any",factory:()=>et(Nm)});static __NG_ELEMENT_ID__=-1},un=new Re(""),Ar=(()=>{class n{static __NG_ELEMENT_ID__=aD;static __NG_ENV_ID__=t=>t}return n})(),gm=class extends Ar{_lView;constructor(e){super(),this._lView=e}get destroyed(){return qo(this._lView)}onDestroy(e){let t=this._lView;return Wm(t,e),()=>vx(t,e)}};function aD(){return new gm(lt())}var Lx=!1,kx=new Re(""),no=(()=>{class n{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new xn(!1);debugTaskTracker=ue(kx,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new ft(t=>{t.next(!1),t.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),this.debugTaskTracker?.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.debugTaskTracker?.remove(t),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=Ge({token:n,providedIn:"root",factory:()=>new n})}return n})(),vm=class extends hn{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,fx()&&(this.destroyRef=ue(Ar,{optional:!0})??void 0,this.pendingTasks=ue(no,{optional:!0})??void 0)}emit(e){let t=ke(null);try{super.next(e)}finally{ke(t)}}subscribe(e,t,i){let r=e,o=t||(()=>null),s=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),o=c.error?.bind(c),s=c.complete?.bind(c)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:r,error:o,complete:s});return e instanceof _n&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{e(t)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},cn=vm;function Hu(...n){}function sg(n){let e,t;function i(){n=Hu;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function Ux(n){return queueMicrotask(()=>n()),()=>{n=Hu}}var ag="isAngularZone",uc=ag+"_ID",cD=0,Jn=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new cn(!1);onMicrotaskEmpty=new cn(!1);onStable=new cn(!1);onError=new cn(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=Lx}=e;if(typeof Zone>"u")throw new De(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&i,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=o,dD(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(ag)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new De(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new De(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,e,lD,Hu,Hu);try{return o.runTask(s,t,i)}finally{o.cancelTask(s)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},lD={};function cg(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function uD(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){sg(()=>{n.callbackScheduled=!1,ym(n),n.isCheckStableRunning=!0,cg(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),ym(n)}function dD(n){let e=()=>{uD(n)},t=cD++;n._inner=n._inner.fork({name:"angular",properties:{[ag]:!0,[uc]:t,[uc+t]:!0},onInvokeTask:(i,r,o,s,a,c)=>{if(fD(c))return i.invokeTask(o,s,a,c);try{return Q_(n),i.invokeTask(o,s,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),ex(n)}},onInvoke:(i,r,o,s,a,c,l)=>{try{return Q_(n),i.invoke(o,s,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!hD(c)&&e(),ex(n)}},onHasTask:(i,r,o,s)=>{i.hasTask(o,s),r===o&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,ym(n),cg(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(i,r,o,s)=>(i.handleError(o,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function ym(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Q_(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function ex(n){n._nesting--,cg(n)}var dc=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new cn;onMicrotaskEmpty=new cn;onStable=new cn;onError=new cn;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function fD(n){return Bx(n,"__ignore_ng_zone__")}function hD(n){return Bx(n,"__scheduler_tick__")}function Bx(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var Sr=class{_console=console;handleError(e){this._console.error("ERROR",e)}},ki=new Re("",{factory:()=>{let n=ue(Jn),e=ue(ln),t;return i=>{n.runOutsideAngular(()=>{e.destroyed&&!t?setTimeout(()=>{throw i}):(t??=e.get(Sr),t.handleError(i))})}}}),Vx={provide:zo,useValue:()=>{let n=ue(Sr,{optional:!0})},multi:!0},pD=new Re("",{factory:()=>{let n=ue(un).defaultView;if(!n)return;let e=ue(ki),t=o=>{e(o.reason),o.preventDefault()},i=o=>{o.error?e(o.error):e(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{n.addEventListener("unhandledrejection",t),n.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),ue(Ar).onDestroy(()=>{n.removeEventListener("error",i),n.removeEventListener("unhandledrejection",t)})}});function lg(){return qs([ax(()=>{ue(pD)})])}function on(n,e){let[t,i,r]=Wp(n,e?.equal),o=t,s=o[An];return o.set=i,o.update=r,o.asReadonly=Hx.bind(o),o}function Hx(){let n=this[An];if(n.readonlyFn===void 0){let e=()=>this();e[An]=n,n.readonlyFn=e}return n.readonlyFn}var js=class{},Cc=new Re("",{factory:()=>!0});var ug=new Re("");var dg=(()=>{class n{static \u0275prov=Ge({token:n,providedIn:"root",factory:()=>new _m})}return n})(),_m=class{dirtyEffectCount=0;queues=new Map;add(e){this.enqueue(e),this.schedule(e)}schedule(e){e.dirty&&this.dirtyEffectCount++}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),e.dirty&&this.dirtyEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||i.add(e)}flush(){for(;this.dirtyEffectCount>0;){let e=!1;for(let[t,i]of this.queues)t===null?e||=this.flushQueue(i):e||=t.run(()=>this.flushQueue(i));e||(this.dirtyEffectCount=0)}}flushQueue(e){let t=!1;for(let i of e)i.dirty&&(this.dirtyEffectCount--,t=!0,i.run());return t}},xm=class{[An];constructor(e){this[An]=e}destroy(){this[An].destroy()}};function Fc(n){return{toString:n}.toString()}function MD(n){return typeof n=="function"}function Mb(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var hd=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}},oa=(()=>{let n=()=>wb;return n.ngInherit=!0,n})();function wb(n){return n.type.prototype.ngOnChanges&&(n.setInput=CD),wD}function wD(){let n=Tb(this),e=n?.current;if(e){let t=n.previous;if(t===Jr)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function CD(n,e,t,i,r){let o=this.declaredInputs[i],s=Tb(n)||TD(n,{previous:Jr,current:null}),a=s.current||(s.current={}),c=s.previous,l=c[o];a[o]=new hd(l&&l.currentValue,t,c===Jr),Mb(n,e,r,t)}var Cb="__ngSimpleChanges__";function Tb(n){return n[Cb]||null}function TD(n,e){return n[Cb]=e}var zx=[];var Tt=function(n,e=null,t){for(let i=0;i<zx.length;i++){let r=zx[i];r(n,e,t)}},pt=(function(n){return n[n.TemplateCreateStart=0]="TemplateCreateStart",n[n.TemplateCreateEnd=1]="TemplateCreateEnd",n[n.TemplateUpdateStart=2]="TemplateUpdateStart",n[n.TemplateUpdateEnd=3]="TemplateUpdateEnd",n[n.LifecycleHookStart=4]="LifecycleHookStart",n[n.LifecycleHookEnd=5]="LifecycleHookEnd",n[n.OutputStart=6]="OutputStart",n[n.OutputEnd=7]="OutputEnd",n[n.BootstrapApplicationStart=8]="BootstrapApplicationStart",n[n.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",n[n.BootstrapComponentStart=10]="BootstrapComponentStart",n[n.BootstrapComponentEnd=11]="BootstrapComponentEnd",n[n.ChangeDetectionStart=12]="ChangeDetectionStart",n[n.ChangeDetectionEnd=13]="ChangeDetectionEnd",n[n.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",n[n.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",n[n.AfterRenderHooksStart=16]="AfterRenderHooksStart",n[n.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",n[n.ComponentStart=18]="ComponentStart",n[n.ComponentEnd=19]="ComponentEnd",n[n.DeferBlockStateStart=20]="DeferBlockStateStart",n[n.DeferBlockStateEnd=21]="DeferBlockStateEnd",n[n.DynamicComponentStart=22]="DynamicComponentStart",n[n.DynamicComponentEnd=23]="DynamicComponentEnd",n[n.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",n[n.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",n})(pt||{});function DD(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=e.type.prototype;if(i){let s=wb(e);(t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s)}r&&(t.preOrderHooks??=[]).push(0-n,r),o&&((t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o))}function AD(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let o=n.data[t].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=o;s&&(n.contentHooks??=[]).push(-t,s),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function ud(n,e,t){Db(n,e,3,t)}function dd(n,e,t,i){(n[Xe]&3)===t&&Db(n,e,t,i)}function fg(n,e){let t=n[Xe];(t&3)===e&&(t&=16383,t+=1,n[Xe]=t)}function Db(n,e,t,i){let r=i!==void 0?n[Wo]&65535:0,o=i??-1,s=e.length-1,a=0;for(let c=r;c<s;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Wo]+=65536),(a<o||o==-1)&&(ID(n,t,e,c),n[Wo]=(n[Wo]&4294901760)+c+2),c++}function Gx(n,e){Tt(pt.LifecycleHookStart,n,e);let t=ke(null);try{e.call(n)}finally{ke(t),Tt(pt.LifecycleHookEnd,n,e)}}function ID(n,e,t,i){let r=t[i]<0,o=t[i+1],s=r?-t[i]:t[i],a=n[s];r?n[Xe]>>14<n[Wo]>>16&&(n[Xe]&3)===e&&(n[Xe]+=16384,Gx(a,o)):Gx(a,o)}var ea=-1,Yo=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i,r){this.factory=e,this.name=r,this.canSeeViewProviders=t,this.injectImpl=i}};function RD(n){return(n.flags&8)!==0}function ND(n){return(n.flags&16)!==0}function PD(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let o=t[i++],s=t[i++],a=t[i++];n.setAttribute(e,s,a,o)}else{let o=r,s=t[++i];FD(o)?n.setProperty(e,o,s):n.setAttribute(e,o,s),i++}}return i}function OD(n){return n===3||n===4||n===6}function FD(n){return n.charCodeAt(0)===64}function ta(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?jx(n,t,r,null,e[++i]):jx(n,t,r,null,null))}}return n}function jx(n,e,t,i,r){let o=0,s=n.length;if(e===-1)s=-1;else for(;o<n.length;){let a=n[o++];if(typeof a=="number"){if(a===e){s=-1;break}else if(a>e){s=o-1;break}}}for(;o<n.length;){let a=n[o];if(typeof a=="number")break;if(a===t){r!==null&&(n[o+1]=r);return}o++,r!==null&&o++}s!==-1&&(n.splice(s,0,e),o=s+1),n.splice(o++,0,t),r!==null&&n.splice(o++,0,r)}function Ab(n){return n!==ea}function pd(n){return n&32767}function LD(n){return n>>16}function md(n,e){let t=LD(n),i=e;for(;t>0;)i=i[Go],t--;return i}var Eg=!0;function Wx(n){let e=Eg;return Eg=n,e}var kD=256,Ib=kD-1,Rb=5,UD=0,nr={};function BD(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(Ho)&&(i=t[Ho]),i==null&&(i=t[Ho]=UD++);let r=i&Ib,o=1<<r;e.data[n+(r>>Rb)]|=o}function gd(n,e){let t=Nb(n,e);if(t!==-1)return t;let i=e[je];i.firstCreatePass&&(n.injectorIndex=e.length,hg(i.data,n),hg(e,null),hg(i.blueprint,null));let r=Jg(n,e),o=n.injectorIndex;if(Ab(r)){let s=pd(r),a=md(r,e),c=a[je].data;for(let l=0;l<8;l++)e[o+l]=a[s+l]|c[s+l]}return e[o+8]=r,o}function hg(n,e){n.push(0,0,0,0,0,0,0,0,e)}function Nb(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function Jg(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=kb(r),i===null)return ea;if(t++,r=r[Go],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return ea}function Mg(n,e,t){BD(n,e,t)}function Pb(n,e,t){if(t&8||n!==void 0)return n;$u(e,"NodeInjector")}function Ob(n,e,t,i){if(t&8&&i===void 0&&(i=null),(t&3)===0){let r=n[Mr],o=Zn(void 0);try{return r?r.get(e,i,t&8):Am(e,i,t&8)}finally{Zn(o)}}return Pb(i,e,t)}function Fb(n,e,t,i=0,r){if(n!==null){if(e[Xe]&2048&&!(i&2)){let s=jD(n,e,t,i,nr);if(s!==nr)return s}let o=Lb(n,e,t,i,nr);if(o!==nr)return o}return Ob(e,t,i,r)}function Lb(n,e,t,i,r){let o=zD(t);if(typeof o=="function"){if(!ng(e,n,i))return i&1?Pb(r,t,i):Ob(e,t,i,r);try{let s;if(s=o(i),s==null&&!(i&8))$u(t);else return s}finally{ig()}}else if(typeof o=="number"){let s=null,a=Nb(n,e),c=ea,l=i&1?e[Kn][mi]:null;for((a===-1||i&4)&&(c=a===-1?Jg(n,e):e[a+8],c===ea||!qx(i,!1)?a=-1:(s=e[je],a=pd(c),e=md(c,e)));a!==-1;){let u=e[je];if($x(o,a,u.data)){let d=VD(a,e,t,s,i,l);if(d!==nr)return d}c=e[a+8],c!==ea&&qx(i,e[je].data[a+8]===l)&&$x(o,a,e)?(s=u,a=pd(c),e=md(c,e)):a=-1}}return r}function VD(n,e,t,i,r,o){let s=e[je],a=s.data[n+8],c=i==null?Tr(a)&&Eg:i!=s&&(a.type&3)!==0,l=r&1&&o===a,u=HD(a,s,t,c,l);return u!==null?vd(e,s,u,a,r):nr}function HD(n,e,t,i,r){let o=n.providerIndexes,s=e.data,a=o&1048575,c=n.directiveStart,l=n.directiveEnd,u=o>>20,d=i?a:a+u,f=r?a+u:l;for(let h=d;h<f;h++){let g=s[h];if(h<c&&t===g||h>=c&&g.type===t)return h}if(r){let h=s[c];if(h&&er(h)&&h.type===t)return c}return null}function vd(n,e,t,i,r){let o=n[t],s=e.data;if(o instanceof Yo){let a=o;if(a.resolving)throw Dm("");let c=Wx(a.canSeeViewProviders);a.resolving=!0;let l=s[t].type||s[t],u,d=a.injectImpl?Zn(a.injectImpl):null,f=ng(n,i,0);try{o=n[t]=a.factory(void 0,r,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&DD(t,s[t],e)}finally{d!==null&&Zn(d),Wx(c),a.resolving=!1,ig()}}return o}function zD(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(Ho)?n[Ho]:void 0;return typeof e=="number"?e>=0?e&Ib:GD:e}function $x(n,e,t){let i=1<<n;return!!(t[e+(n>>Rb)]&i)}function qx(n,e){return!(n&2)&&!(n&1&&e)}var Xo=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return Fb(this._tNode,this._lView,e,Fo(i),t)}};function GD(){return new Xo(ei(),lt())}function ts(n){return Fc(()=>{let e=n.prototype.constructor,t=e[cc]||wg(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let o=r[cc]||wg(r);if(o&&o!==t)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function wg(n){return bm(n)?()=>{let e=wg(Sn(n));return e&&e()}:Lo(n)}function jD(n,e,t,i,r){let o=n,s=e;for(;o!==null&&s!==null&&s[Xe]&2048&&!Js(s);){let a=Lb(o,s,t,i|2,nr);if(a!==nr)return a;let c=o.parent;if(!c){let l=s[Um];if(l){let u=l.get(t,nr,i&-5);if(u!==nr)return u}c=kb(s),s=s[Go]}o=c}return r}function kb(n){let e=n[je],t=e.type;return t===2?e.declTNode:t===1?n[mi]:null}function WD(){return Kg(ei(),lt())}function Kg(n,e){return new io(Fi(n,e))}var io=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=WD}return n})();function Ub(n){return(n.flags&128)===128}var Qg=(function(n){return n[n.OnPush=0]="OnPush",n[n.Eager=1]="Eager",n[n.Default=1]="Default",n})(Qg||{}),Bb=new Map,$D=0;function qD(){return $D++}function XD(n){Bb.set(n[wr],n)}function Cg(n){Bb.delete(n[wr])}var Xx="__ngContext__";function na(n,e){Cr(e)?(n[Xx]=e[wr],XD(e)):n[Xx]=e}function Vb(n){return zb(n[Zs])}function Hb(n){return zb(n[pi])}function zb(n){for(;n!==null&&!Oi(n);)n=n[pi];return n}var Tg;function ev(n){Tg=n}function Gb(){if(Tg!==void 0)return Tg;if(typeof document<"u")return document;throw new De(210,!1)}var Rd=new Re("",{factory:()=>YD}),YD="ng";var Nd=new Re(""),Lc=new Re("",{providedIn:"platform",factory:()=>"unknown"});var Pd=new Re("",{factory:()=>ue(un).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var jb="r";var Wb="di";var $b=!1,qb=new Re("",{factory:()=>$b});var Yx=new WeakMap;function ZD(n,e){if(n==null||typeof n!="object")return;let t=Yx.get(n);t||(t=new WeakSet,Yx.set(n,t)),t.add(e)}var JD=(n,e,t,i)=>{};function KD(n,e,t,i){JD(n,e,t,i)}function tv(n){return(n.flags&32)===32}var QD=()=>null;function Xb(n,e,t=!1){return QD(n,e,t)}function Yb(n,e){let t=n.contentQueries;if(t!==null){let i=ke(null);try{for(let r=0;r<t.length;r+=2){let o=t[r],s=t[r+1];if(s!==-1){let a=n.data[s];tg(o),a.contentQueries(2,e[s],s)}}}finally{ke(i)}}}function Dg(n,e,t){tg(0);let i=ke(null);try{e(n,t)}finally{ke(i)}}function Zb(n,e,t){if(Vm(e)){let i=ke(null);try{let r=e.directiveStart,o=e.directiveEnd;for(let s=r;s<o;s++){let a=n.data[s];if(a.contentQueries){let c=t[s];a.contentQueries(1,c,s)}}}finally{ke(i)}}}var Bi=(function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n[n.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",n})(Bi||{});var sd;function eA(){if(sd===void 0&&(sd=null,Bo.trustedTypes))try{sd=Bo.trustedTypes.createPolicy("angular",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return sd}function Od(n){return eA()?.createHTML(n)||n}var ad;function tA(){if(ad===void 0&&(ad=null,Bo.trustedTypes))try{ad=Bo.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return ad}function Zx(n){return tA()?.createHTML(n)||n}var yd=class{changingThisBreaksApplicationSecurity;constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${zu})`}};function sa(n){return n instanceof yd?n.changingThisBreaksApplicationSecurity:n}function nv(n,e){let t=Jb(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${zu})`)}return t===e}function Jb(n){return n instanceof yd&&n.getTypeName()||null}function nA(n){let e=new Ig(n);return iA()?new Ag(e):e}var Ag=class{inertDocumentHelper;constructor(e){this.inertDocumentHelper=e}getInertBodyElement(e){e="<body><remove></remove>"+e;try{let t=new window.DOMParser().parseFromString(Od(e),"text/html").body;return t===null?this.inertDocumentHelper.getInertBodyElement(e):(t.firstChild?.remove(),t)}catch{return null}}},Ig=class{defaultDoc;inertDocument;constructor(e){this.defaultDoc=e,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(e){let t=this.inertDocument.createElement("template");return t.innerHTML=Od(e),t}};function iA(){try{return!!new window.DOMParser().parseFromString(Od(""),"text/html")}catch{return!1}}var rA=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function iv(n){return n=String(n),n.match(rA)?n:"unsafe:"+n}function Ir(n){let e={};for(let t of n.split(","))e[t]=!0;return e}function kc(...n){let e={};for(let t of n)for(let i in t)t.hasOwnProperty(i)&&(e[i]=!0);return e}var Kb=Ir("area,br,col,hr,img,wbr"),Qb=Ir("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),eS=Ir("rp,rt"),oA=kc(eS,Qb),sA=kc(Qb,Ir("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),aA=kc(eS,Ir("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Jx=kc(Kb,sA,aA,oA),tS=Ir("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),cA=Ir("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),lA=Ir("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),uA=kc(tS,cA,lA),dA=Ir("script,style,template"),Rg=class{sanitizedSomething=!1;buf=[];sanitizeChildren(e){let t=e.firstChild,i=!0,r=[];for(;t;){if(t.nodeType===Node.ELEMENT_NODE?i=this.startElement(t):t.nodeType===Node.TEXT_NODE?this.chars(t.nodeValue):this.sanitizedSomething=!0,i&&t.firstChild){r.push(t),t=pA(t);continue}for(;t;){t.nodeType===Node.ELEMENT_NODE&&this.endElement(t);let o=hA(t);if(o){t=o;break}t=r.pop()}}return this.buf.join("")}startElement(e){let t=Kx(e).toLowerCase();if(!Jx.hasOwnProperty(t))return this.sanitizedSomething=!0,!dA.hasOwnProperty(t);this.buf.push("<"),this.buf.push(t);let i=e.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),s=o.name,a=s.toLowerCase();if(!uA.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let c=o.value;tS[a]&&(c=iv(c)),this.buf.push(" ",s,'="',Qx(c),'"')}return this.buf.push(">"),!0}endElement(e){let t=Kx(e).toLowerCase();Jx.hasOwnProperty(t)&&!Kb.hasOwnProperty(t)&&(this.buf.push("</"),this.buf.push(t),this.buf.push(">"))}chars(e){this.buf.push(Qx(e))}};function fA(n,e){return(n.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function hA(n){let e=n.nextSibling;if(e&&n!==e.previousSibling)throw nS(e);return e}function pA(n){let e=n.firstChild;if(e&&fA(n,e))throw nS(e);return e}function Kx(n){let e=n.nodeName;return typeof e=="string"?e:"FORM"}function nS(n){return new Error(`Failed to sanitize html because the element is clobbered: ${n.outerHTML}`)}var mA=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,gA=/([^\#-~ |!])/g;function Qx(n){return n.replace(/&/g,"&amp;").replace(mA,function(e){let t=e.charCodeAt(0),i=e.charCodeAt(1);return"&#"+((t-55296)*1024+(i-56320)+65536)+";"}).replace(gA,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var cd;function iS(n,e){let t=null;try{cd=cd||nA(n);let i=e?String(e):"";t=cd.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=t.innerHTML,t=cd.getInertBodyElement(i)}while(i!==o);let a=new Rg().sanitizeChildren(eb(t)||t);return Od(a)}finally{if(t){let i=eb(t)||t;for(;i.firstChild;)i.firstChild.remove()}}}function eb(n){return"content"in n&&vA(n)?n.content:null}function vA(n){return n.nodeType===Node.ELEMENT_NODE&&n.nodeName==="TEMPLATE"}function yA(n,e){return n.createText(e)}function _A(n,e,t){n.setValue(e,t)}function rS(n,e,t){return n.createElement(e,t)}function _d(n,e,t,i,r){n.insertBefore(e,t,i,r)}function oS(n,e,t){n.appendChild(e,t)}function tb(n,e,t,i,r){i!==null?_d(n,e,t,i,r):oS(n,e,t)}function sS(n,e,t,i){n.removeChild(null,e,t,i)}function xA(n,e,t){n.setAttribute(e,"style",t)}function bA(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function aS(n,e,t){let{mergedAttrs:i,classes:r,styles:o}=t;i!==null&&PD(n,e,i),r!==null&&bA(n,e,r),o!==null&&xA(n,e,o)}var Fd=(function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n[n.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",n})(Fd||{});function aa(n){let e=cS();return e?Zx(e.sanitize(Fd.HTML,n)||""):nv(n,"HTML")?Zx(sa(n)):iS(Gb(),gc(n))}function ti(n){let e=cS();return e?e.sanitize(Fd.URL,n)||"":nv(n,"URL")?sa(n):iv(gc(n))}function cS(){let n=lt();return n&&n[Pi].sanitizer}function rv(n){return n.ownerDocument.defaultView}function lS(n){return n instanceof Function?n():n}function SA(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let o=e.length;if(r+o===i||n.charCodeAt(r+o)<=32)return r}t=r+1}}var uS="ng-template";function EA(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&SA(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(ov(n))return!1;if(r=e.indexOf(1,r),r>-1){let o;for(;++r<e.length&&typeof(o=e[r])=="string";)if(o.toLowerCase()===t)return!0}return!1}function ov(n){return n.type===4&&n.value!==uS}function MA(n,e,t){let i=n.type===4&&!t?uS:n.value;return e===i}function wA(n,e,t){let i=4,r=n.attrs,o=r!==null?DA(r):0,s=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!s&&!Ui(i)&&!Ui(c))return!1;if(s&&Ui(c))continue;s=!1,i=c|i&1;continue}if(!s)if(i&4){if(i=2|i&1,c!==""&&!MA(n,c,t)||c===""&&e.length===1){if(Ui(i))return!1;s=!0}}else if(i&8){if(r===null||!EA(n,r,c,t)){if(Ui(i))return!1;s=!0}}else{let l=e[++a],u=CA(c,r,ov(n),t);if(u===-1){if(Ui(i))return!1;s=!0;continue}if(l!==""){let d;if(u>o?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(Ui(i))return!1;s=!0}}}}return Ui(i)||s}function Ui(n){return(n&1)===0}function CA(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let o=!1;for(;r<e.length;){let s=e[r];if(s===n)return r;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=o?1:2}return-1}else return AA(e,n)}function TA(n,e,t=!1){for(let i=0;i<e.length;i++)if(wA(n,e[i],t))return!0;return!1}function DA(n){for(let e=0;e<n.length;e++){let t=n[e];if(OD(t))return e}return n.length}function AA(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function nb(n,e){return n?":not("+e.trim()+")":e}function IA(n){let e=n[0],t=1,i=2,r="",o=!1;for(;t<n.length;){let s=n[t];if(typeof s=="string")if(i&2){let a=n[++t];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+s:i&4&&(r+=" "+s);else r!==""&&!Ui(s)&&(e+=nb(o,r),r=""),i=s,o=o||!Ui(i);t++}return r!==""&&(e+=nb(o,r)),e}function RA(n){return n.map(IA).join(",")}function NA(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let o=n[i];if(typeof o=="string")r===2?o!==""&&e.push(o,n[++i]):r===8&&t.push(o);else{if(!Ui(r))break;r=o}i++}return t.length&&e.push(1,...t),e}var _i={};function sv(n,e,t,i,r,o,s,a,c,l,u){let d=En+i,f=d+r,h=PA(d,f),g=typeof l=="function"?l():l;return h[je]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function PA(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:_i);return t}function OA(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=sv(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function av(n,e,t,i,r,o,s,a,c,l,u){let d=e.blueprint.slice();return d[Ni]=r,d[Xe]=i|4|128|8|64|1024,(l!==null||n&&n[Xe]&2048)&&(d[Xe]|=2048),Gm(d),d[pn]=d[Go]=n,d[Qt]=t,d[Pi]=s||n&&n[Pi],d[kt]=a||n&&n[kt],d[Mr]=c||n&&n[Mr]||null,d[mi]=o,d[wr]=qD(),d[Xs]=u,d[Um]=l,d[Kn]=e.type==2?n[Kn]:d,d}function FA(n,e,t){let i=Fi(e,n),r=OA(t),o=n[Pi].rendererFactory,s=cv(n,av(n,r,null,dS(t),i,e,null,o.createRenderer(i,t),null,null,null));return n[e.index]=s}function dS(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function fS(n,e,t,i){if(t===0)return-1;let r=e.length;for(let o=0;o<t;o++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function cv(n,e){return n[Zs]?n[km][pi]=e:n[Zs]=e,n[km]=e,e}function pe(n=1){hS(Mn(),lt(),Dr()+n,!1)}function hS(n,e,t,i){if(!i)if((e[Xe]&3)===3){let o=n.preOrderCheckHooks;o!==null&&ud(e,o,t)}else{let o=n.preOrderHooks;o!==null&&dd(e,o,0,t)}to(t)}var Ld=(function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n})(Ld||{});function Ng(n,e,t,i){let r=ke(null);try{let[o,s,a]=n.inputs[t],c=null;(s&Ld.SignalBased)!==0&&(c=e[o][An]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(e,i)),n.setInput!==null?n.setInput(e,c,i,t,o):Mb(e,c,o,i)}finally{ke(r)}}var Vi=(function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n})(Vi||{}),LA;function lv(n,e){return LA(n,e)}var N5=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Pg=new WeakMap,Tc=new WeakSet;function kA(n,e){let t=Pg.get(n);if(!t||t.length===0)return;let i=e.parentNode,r=e.previousSibling;for(let o=t.length-1;o>=0;o--){let s=t[o],a=s.parentNode;s===e?(t.splice(o,1),Tc.add(s),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&s===r||a&&i&&a!==i)&&(t.splice(o,1),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),s.parentNode?.removeChild(s))}}function UA(n,e){let t=Pg.get(n);t?t.includes(e)||t.push(e):Pg.set(n,[e])}var Zo=new Set,uv=(function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n})(uv||{}),ca=new Re(""),ib=new Set;function ns(n){ib.has(n)||(ib.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var pS=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=Ge({token:n,providedIn:"root",factory:()=>new n})}return n})();var mS=new Re("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:ue(ln)})});function gS(n,e,t){let i=n.get(mS);if(Array.isArray(e))for(let r of e)i.queue.add(r),t?.detachedLeaveAnimationFns?.push(r);else i.queue.add(e),t?.detachedLeaveAnimationFns?.push(e);i.scheduler&&i.scheduler(n)}function BA(n,e){let t=n.get(mS);if(e.detachedLeaveAnimationFns){for(let i of e.detachedLeaveAnimationFns)t.queue.delete(i);e.detachedLeaveAnimationFns=void 0}}function VA(n,e){for(let[t,i]of e)gS(n,i.animateFns)}function rb(n,e,t,i){let r=n?.[Kr]?.enter;e!==null&&r&&r.has(t.index)&&VA(i,r)}function Qs(n,e,t,i,r,o,s,a){if(r!=null){let c,l=!1;Oi(r)?c=r:Cr(r)&&(l=!0,r=r[Ni]);let u=gi(r);n===0&&i!==null?(rb(a,i,o,t),s==null?oS(e,i,u):_d(e,i,u,s||null,!0)):n===1&&i!==null?(rb(a,i,o,t),_d(e,i,u,s||null,!0),kA(o,u)):n===2?(a?.[Kr]?.leave?.has(o.index)&&UA(o,u),Tc.delete(u),ob(a,o,t,d=>{if(Tc.has(u)){Tc.delete(u);return}sS(e,u,l,d)})):n===3&&(Tc.delete(u),ob(a,o,t,()=>{e.destroyNode(u)})),c!=null&&QA(e,n,t,c,o,i,s)}}function HA(n,e){vS(n,e),e[Ni]=null,e[mi]=null}function zA(n,e,t,i,r,o){i[Ni]=r,i[mi]=e,Ud(n,i,t,1,r,o)}function vS(n,e){e[Pi].changeDetectionScheduler?.notify(9),Ud(n,e,e[kt],2,null,null)}function GA(n){let e=n[Zs];if(!e)return pg(n[je],n);for(;e;){let t=null;if(Cr(e))t=e[Zs];else{let i=e[en];i&&(t=i)}if(!t){for(;e&&!e[pi]&&e!==n;)Cr(e)&&pg(e[je],e),e=e[pn];e===null&&(e=n),Cr(e)&&pg(e[je],e),t=e&&e[pi]}e=t}}function dv(n,e){let t=n[Sc],i=t.indexOf(e);t.splice(i,1)}function kd(n,e){if(qo(e))return;let t=e[kt];t.destroyNode&&Ud(n,e,t,3,null,null),GA(e)}function pg(n,e){if(qo(e))return;let t=ke(null);try{e[Xe]&=-129,e[Xe]|=256,e[Qn]&&tc(e[Qn]),$A(n,e),WA(n,e),e[je].type===1&&e[kt].destroy();let i=e[jo];if(i!==null&&Oi(e[pn])){i!==e[pn]&&dv(i,e);let r=e[$o];r!==null&&r.detachView(n)}Cg(e)}finally{ke(t)}}function ob(n,e,t,i){let r=n?.[Kr];if(r==null||r.leave==null||!r.leave.has(e.index))return i(!1);n&&Zo.add(n[wr]),gS(t,()=>{if(r.leave&&r.leave.has(e.index)){let s=r.leave.get(e.index),a=[];if(s){for(let c=0;c<s.animateFns.length;c++){let l=s.animateFns[c],{promise:u}=l();a.push(u)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(a),jA(n,i)}else n&&Zo.delete(n[wr]),i(!1)},r)}function jA(n,e){let t=n[Kr]?.running;if(t){t.then(()=>{n[Kr].running=void 0,Zo.delete(n[wr]),e(!0)});return}e(!1)}function WA(n,e){let t=n.cleanup,i=e[Ys];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let a=t[s+3];a>=0?i[a]():i[-a].unsubscribe(),s+=2}else{let a=i[t[s+1]];t[s].call(a)}i!==null&&(e[Ys]=null);let r=e[br];if(r!==null){e[br]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}let o=e[xc];if(o!==null){e[xc]=null;for(let s of o)s.destroy()}}function $A(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof Yo)){let o=t[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=r[o[s]],c=o[s+1];Tt(pt.LifecycleHookStart,a,c);try{c.call(a)}finally{Tt(pt.LifecycleHookEnd,a,c)}}else{Tt(pt.LifecycleHookStart,r,o);try{o.call(r)}finally{Tt(pt.LifecycleHookEnd,r,o)}}}}}function qA(n,e,t){return XA(n,e.parent,t)}function XA(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[Ni];if(Tr(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===Bi.None||r===Bi.Emulated)return null}return Fi(i,t)}function YA(n,e,t){return JA(n,e,t)}function ZA(n,e,t){return n.type&40?Fi(n,t):null}var JA=ZA,sb;function fv(n,e,t,i){let r=qA(n,i,e),o=e[kt],s=i.parent||e[mi],a=YA(s,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)tb(o,r,t[c],a,!1);else tb(o,r,t,a,!1);sb!==void 0&&sb(o,i,e,t,r)}function Dc(n,e){if(e!==null){let t=e.type;if(t&3)return Fi(e,n);if(t&4)return Og(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Dc(n,i);{let r=n[e.index];return Oi(r)?Og(-1,r):gi(r)}}else{if(t&128)return Dc(n,e.next);if(t&32)return lv(e,n)()||gi(n[e.index]);{let i=yS(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=Yr(n[Kn]);return Dc(r,i)}else return Dc(n,e.next)}}}return null}function yS(n,e){if(e!==null){let i=n[Kn][mi],r=e.projection;return i.projection[r]}return null}function Og(n,e){let t=en+n+1;if(t<e.length){let i=e[t],r=i[je].firstChild;if(r!==null)return Dc(i,r)}return e[Qr]}function hv(n,e,t,i,r,o,s){for(;t!=null;){let a=i[Mr];if(t.type===128){t=t.next;continue}let c=i[t.index],l=t.type;if(s&&e===0&&(c&&na(gi(c),i),t.flags|=2),!tv(t))if(l&8)hv(n,e,t.child,i,r,o,!1),Qs(e,n,a,r,c,t,o,i);else if(l&32){let u=lv(t,i),d;for(;d=u();)Qs(e,n,a,r,d,t,o,i);Qs(e,n,a,r,c,t,o,i)}else l&16?KA(n,e,i,t,r,o):Qs(e,n,a,r,c,t,o,i);t=s?t.projectionNext:t.next}}function Ud(n,e,t,i,r,o){hv(t,i,n.firstChild,e,r,o,!1)}function KA(n,e,t,i,r,o){let s=t[Kn],c=s[mi].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Qs(e,n,t[Mr],r,u,i,o,t)}else{let l=c,u=s[pn];Ub(i)&&(l.flags|=128),hv(n,e,l,u,r,o,!0)}}function QA(n,e,t,i,r,o,s){let a=i[Qr],c=gi(i);a!==c&&Qs(e,n,t,o,a,r,s);for(let l=en;l<i.length;l++){let u=i[l];Ud(u[je],u,n,e,o,a)}}function eI(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let o=i.indexOf("-")===-1?void 0:Vi.DashCase;r==null?n.removeStyle(t,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=Vi.Important),n.setStyle(t,i,r,o))}}function _S(n,e,t,i,r){let o=Dr(),s=i&2;try{to(-1),s&&e.length>En&&hS(n,e,En,!1);let a=s?pt.TemplateUpdateStart:pt.TemplateCreateStart;Tt(a,r,t),t(i,r)}finally{to(o);let a=s?pt.TemplateUpdateEnd:pt.TemplateCreateEnd;Tt(a,r,t)}}function xS(n,e,t){sI(n,e,t),(t.flags&64)===64&&aI(n,e,t)}function pv(n,e,t=Fi){let i=e.localNames;if(i!==null){let r=e.index+1;for(let o=0;o<i.length;o+=2){let s=i[o+1],a=s===-1?t(e,n):n[s];n[r++]=a}}}function tI(n,e,t,i){let o=i.get(qb,$b)||t===Bi.ShadowDom||t===Bi.ExperimentalIsolatedShadowDom,s=n.selectRootElement(e,o);if(s.tagName.toLowerCase()==="script")throw new De(905,!1);return nI(s),s}function nI(n){iI(n)}var iI=()=>null;function rI(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function bS(n,e,t,i,r,o){let s=e[je];if(mv(n,s,e,t,i)){Tr(n)&&oI(e,n.index);return}n.type&3&&(t=rI(t)),SS(n,e,t,i,r,o)}function SS(n,e,t,i,r,o){if(n.type&3){let s=Fi(n,e);i=o!=null?o(i,n.value||"",t):i,r.setProperty(s,t,i)}else n.type&12}function oI(n,e){let t=vi(e,n);t[Xe]&16||(t[Xe]|=64)}function sI(n,e,t){let i=t.directiveStart,r=t.directiveEnd;Tr(t)&&FA(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||gd(t,e);let o=t.initialInputs;for(let s=i;s<r;s++){let a=n.data[s],c=vd(e,n,s,t);if(na(c,e),o!==null&&fI(e,s-i,c,a,t,o),er(a)){let l=vi(t.index,e);l[Qt]=vd(e,n,s,t)}}}function aI(n,e,t){let i=t.directiveStart,r=t.directiveEnd,o=t.index,s=Ax();try{to(o);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];td(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&cI(c,l)}}finally{to(-1),td(s)}}function cI(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function lI(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let o=t[r];TA(e,o.selectors,!1)&&(i??=[],er(o)?i.unshift(o):i.push(o))}return i}function uI(n,e,t,i,r,o){let s=Fi(n,e);dI(e[kt],s,o,n.value,t,i,r)}function dI(n,e,t,i,r,o,s){if(o==null)n.removeAttribute(e,r,t);else{let a=s==null?gc(o):s(o,i||"",r);n.setAttribute(e,r,a,t)}}function fI(n,e,t,i,r,o){let s=o[e];if(s!==null)for(let a=0;a<s.length;a+=2){let c=s[a],l=s[a+1];Ng(i,t,c,l)}}function ES(n,e,t,i,r){let o=En+t,s=e[je],a=r(s,e,n,i,t);e[o]=a,Ks(n,!0);let c=n.type===2;return c?(aS(e[kt],a,n),(xx()===0||Ju(n))&&na(a,e),bx()):na(a,e),rd()&&(!c||!tv(n))&&fv(s,e,a,n),n}function MS(n){let e=n;return Zm()?wx():(e=e.parent,Ks(e,!1)),e}function hI(n,e){let t=n[Mr];if(!t)return;let i;try{i=t.get(ki,null)}catch{i=null}i?.(e)}function mv(n,e,t,i,r){let o=n.inputs?.[i],s=n.hostDirectiveInputs?.[i],a=!1;if(s)for(let c=0;c<s.length;c+=2){let l=s[c],u=s[c+1],d=e.data[l];Ng(d,t[l],u,r),a=!0}if(o)for(let c of o){let l=t[c],u=e.data[c];Ng(u,l,i,r),a=!0}return a}function pI(n,e){let t=vi(e,n),i=t[je];mI(i,t);let r=t[Ni];r!==null&&t[Xs]===null&&(t[Xs]=Xb(r,t[Mr])),Tt(pt.ComponentStart);try{gv(i,t,t[Qt])}finally{Tt(pt.ComponentEnd,t[Qt])}}function mI(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function gv(n,e,t){nd(e);try{let i=n.viewQuery;i!==null&&Dg(1,i,t);let r=n.template;r!==null&&_S(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[$o]?.finishViewCreation(n),n.staticContentQueries&&Yb(n,e),n.staticViewQueries&&Dg(2,n.viewQuery,t);let o=n.components;o!==null&&gI(e,o)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Xe]&=-5,id()}}function gI(n,e){for(let t=0;t<e.length;t++)pI(n,e[t])}function vv(n,e,t,i){let r=ke(null);try{let o=e.tView,a=n[Xe]&4096?4096:16,c=av(n,o,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[jo]=l;let u=n[$o];return u!==null&&(c[$o]=u.createEmbeddedView(o)),gv(o,c,t),c}finally{ke(r)}}function Ic(n,e){return!e||e.firstChild===null||Ub(n)}function Rc(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let o=e[t.index];o!==null&&i.push(gi(o)),Oi(o)&&wS(o,i);let s=t.type;if(s&8)Rc(n,e,t.child,i);else if(s&32){let a=lv(t,e),c;for(;c=a();)i.push(c)}else if(s&16){let a=yS(e,t);if(Array.isArray(a))i.push(...a);else{let c=Yr(e[Kn]);Rc(c[je],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function wS(n,e){for(let t=en;t<n.length;t++){let i=n[t],r=i[je].firstChild;r!==null&&Rc(i[je],i,r,e)}n[Qr]!==n[Ni]&&e.push(n[Qr])}function CS(n){if(n[Zu]!==null){for(let e of n[Zu])e.impl.addSequence(e);n[Zu].length=0}}var TS=[];function vI(n){return n[Qn]??yI(n)}function yI(n){let e=TS.pop()??Object.create(xI);return e.lView=n,e}function _I(n){n.lView[Qn]!==n&&(n.lView=null,TS.push(n))}var xI=st(re({},Rs),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{Mc(n.lView)},consumerOnSignalRead(){this.lView[Qn]=this}});function bI(n){let e=n[Qn]??Object.create(SI);return e.lView=n,e}var SI=st(re({},Rs),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=Yr(n.lView);for(;e&&!DS(e[je]);)e=Yr(e);e&&jm(e)},consumerOnSignalRead(){this.lView[Qn]=this}});function DS(n){return n.type!==2}function AS(n){if(n[xc]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[xc])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[Xe]&8192)}}var EI=100;function IS(n,e=0){let i=n[Pi].rendererFactory,r=!1;r||i.begin?.();try{MI(n,e)}finally{r||i.end?.()}}function MI(n,e){let t=Jm();try{Km(!0),Fg(n,e);let i=0;for(;Ec(n);){if(i===EI)throw new De(103,!1);i++,Fg(n,1)}}finally{Km(t)}}function wI(n,e,t,i){if(qo(e))return;let r=e[Xe],o=!1,s=!1;nd(e);let a=!0,c=null,l=null;o||(DS(n)?(l=vI(e),c=Ps(l)):su()===null?(a=!1,l=bI(e),c=Ps(l)):e[Qn]&&(tc(e[Qn]),e[Qn]=null));try{Gm(e),Cx(n.bindingStartIndex),t!==null&&_S(n,e,t,2,i);let u=(r&3)===3;if(!o)if(u){let h=n.preOrderCheckHooks;h!==null&&ud(e,h,null)}else{let h=n.preOrderHooks;h!==null&&dd(e,h,0,null),fg(e,0)}if(s||CI(e),AS(e),RS(e,0),n.contentQueries!==null&&Yb(n,e),!o)if(u){let h=n.contentCheckHooks;h!==null&&ud(e,h)}else{let h=n.contentHooks;h!==null&&dd(e,h,1),fg(e,1)}DI(n,e);let d=n.components;d!==null&&PS(e,d,0);let f=n.viewQuery;if(f!==null&&Dg(2,f,i),!o)if(u){let h=n.viewCheckHooks;h!==null&&ud(e,h)}else{let h=n.viewHooks;h!==null&&dd(e,h,2),fg(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Yu]){for(let h of e[Yu])h();e[Yu]=null}o||(CS(e),e[Xe]&=-73)}catch(u){throw o||Mc(e),u}finally{l!==null&&(ec(l,c),a&&_I(l)),id()}}function RS(n,e){for(let t=Vb(n);t!==null;t=Hb(t))for(let i=en;i<t.length;i++){let r=t[i];NS(r,e)}}function CI(n){for(let e=Vb(n);e!==null;e=Hb(e)){if(!(e[Xe]&2))continue;let t=e[Sc];for(let i=0;i<t.length;i++){let r=t[i];jm(r)}}}function TI(n,e,t){Tt(pt.ComponentStart);let i=vi(e,n);try{NS(i,t)}finally{Tt(pt.ComponentEnd,i[Qt])}}function NS(n,e){Qu(n)&&Fg(n,e)}function Fg(n,e){let i=n[je],r=n[Xe],o=n[Qn],s=!!(e===0&&r&16);if(s||=!!(r&64&&e===0),s||=!!(r&1024),s||=!!(o?.dirty&&cu(o)),s||=!1,o&&(o.dirty=!1),n[Xe]&=-9217,s)wI(i,n,i.template,n[Qt]);else if(r&8192){let a=ke(null);try{AS(n),RS(n,1);let c=i.components;c!==null&&PS(n,c,1),CS(n)}finally{ke(a)}}}function PS(n,e,t){for(let i=0;i<e.length;i++)TI(n,e[i],t)}function DI(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)to(~r);else{let o=r,s=t[++i],a=t[++i];Dx(s,o);let c=e[o];Tt(pt.HostBindingsUpdateStart,c);try{a(2,c)}finally{Tt(pt.HostBindingsUpdateEnd,c)}}}}finally{to(-1)}}function yv(n,e){let t=Jm()?64:1088;for(n[Pi].changeDetectionScheduler?.notify(e);n;){n[Xe]|=t;let i=Yr(n);if(Js(n)&&!i)return n;n=i}return null}function OS(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function FS(n,e){let t=en+e;if(t<n.length)return n[t]}function Bd(n,e,t,i=!0){let r=e[je];if(AI(r,e,n,t),i){let s=Og(t,n),a=e[kt],c=a.parentNode(n[Qr]);c!==null&&zA(r,n[mi],a,e,c,s)}let o=e[Xs];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function LS(n,e){let t=Nc(n,e);return t!==void 0&&kd(t[je],t),t}function Nc(n,e){if(n.length<=en)return;let t=en+e,i=n[t];if(i){let r=i[jo];r!==null&&r!==n&&dv(r,i),e>0&&(n[t-1][pi]=i[pi]);let o=vc(n,en+e);HA(i[je],i);let s=o[$o];s!==null&&s.detachView(o[je]),i[pn]=null,i[pi]=null,i[Xe]&=-129}return i}function AI(n,e,t,i){let r=en+i,o=t.length;i>0&&(t[r-1][pi]=e),i<o-en?(e[pi]=t[r],Im(t,en+i,e)):(t.push(e),e[pi]=null),e[pn]=t;let s=e[jo];s!==null&&t!==s&&kS(s,e);let a=e[$o];a!==null&&a.insertView(n),ed(e),e[Xe]|=128}function kS(n,e){let t=n[Sc],i=e[pn];if(Cr(i))n[Xe]|=2;else{let r=i[pn][Kn];e[Kn]!==r&&(n[Xe]|=2)}t===null?n[Sc]=[e]:t.push(e)}var Jo=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let e=this._lView,t=e[je];return Rc(t,e,t.firstChild,[])}constructor(e,t){this._lView=e,this._cdRefInjectingView=t}get context(){return this._lView[Qt]}set context(e){this._lView[Qt]=e}get destroyed(){return qo(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[pn];if(Oi(e)){let t=e[bc],i=t?t.indexOf(this):-1;i>-1&&(Nc(e,i),vc(t,i))}this._attachedToViewContainer=!1}kd(this._lView[je],this._lView)}onDestroy(e){Wm(this._lView,e)}markForCheck(){yv(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Xe]&=-129}reattach(){ed(this._lView),this._lView[Xe]|=128}detectChanges(){this._lView[Xe]|=1024,IS(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new De(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=Js(this._lView),t=this._lView[jo];t!==null&&!e&&dv(t,this._lView),vS(this._lView[je],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new De(902,!1);this._appRef=e;let t=Js(this._lView),i=this._lView[jo];i!==null&&!t&&kS(i,this._lView),ed(this._lView)}};function Vd(n,e,t,i,r){let o=n.data[e];if(o===null)o=II(n,e,t,i,r),Tx()&&(o.flags|=32);else if(o.type&64){o.type=t,o.value=i,o.attrs=r;let s=Mx();o.injectorIndex=s===null?-1:s.injectorIndex}return Ks(o,!0),o}function II(n,e,t,i,r){let o=Ym(),s=Zm(),a=s?o:o&&o.parent,c=n.data[e]=NI(n,a,t,e,i,r);return RI(n,c,o,s),c}function RI(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function NI(n,e,t,i,r,o){let s=e?e.injectorIndex:-1,a=0;return Ex()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,namespace:rg(),attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function PI(n){let e=n[Bm]??[],i=n[pn][kt],r=[];for(let o of e)o.data[Wb]!==void 0?r.push(o):OI(o,i);n[Bm]=r}function OI(n,e){let t=0,i=n.firstChild;if(i){let r=n.data[jb];for(;t<r;){let o=i.nextSibling;sS(e,i,!1),i=o,t++}}}var FI=()=>null,LI=()=>null;function Lg(n,e){return FI(n,e)}function US(n,e,t){return LI(n,e,t)}var BS=class{},Hd=class{},kg=class{resolveComponentFactory(e){throw new De(917,!1)}},Uc=class{static NULL=new kg},Ko=class{},is=(()=>{class n{destroyNode=null;static __NG_ELEMENT_ID__=()=>kI()}return n})();function kI(){let n=lt(),e=ei(),t=vi(e.index,n);return(Cr(t)?t:n)[kt]}var VS=(()=>{class n{static \u0275prov=Ge({token:n,providedIn:"root",factory:()=>null})}return n})();var fd={},Ug=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){let r=this.injector.get(e,fd,i);return r!==fd||t===fd?r:this.parentInjector.get(e,t,i)}};function xd(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,o=0;if(e!==null)for(let s=0;s<e.length;s++){let a=e[s];if(typeof a=="number")o=a;else if(o==1)r=Gu(r,a);else if(o==2){let c=a,l=e[++s];i=Gu(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function zt(n,e=0){let t=lt();if(t===null)return et(n,e);let i=ei();return Fb(i,t,Sn(n),e)}function UI(n,e,t,i,r){let o=i===null?null:{"":-1},s=r(n,t);if(s!==null){let a=s,c=null,l=null;for(let u of s)if(u.resolveHostDirectives!==null){[a,c,l]=u.resolveHostDirectives(s);break}HI(n,e,t,a,o,c,l)}o!==null&&i!==null&&BI(t,i,o)}function BI(n,e,t){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let o=t[e[r+1]];if(o==null)throw new De(-301,!1);i.push(e[r],o)}}function VI(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function HI(n,e,t,i,r,o,s){let a=i.length,c=null;for(let f=0;f<a;f++){let h=i[f];c===null&&er(h)&&(c=h,VI(n,t,f)),Mg(gd(t,e),n,h.type)}qI(t,n.data.length,a),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let f=0;f<a;f++){let h=i[f];h.providersResolver&&h.providersResolver(h)}let l=!1,u=!1,d=fS(n,e,a,null);a>0&&(t.directiveToIndex=new Map);for(let f=0;f<a;f++){let h=i[f];if(t.mergedAttrs=ta(t.mergedAttrs,h.hostAttrs),GI(n,t,e,d,h),$I(d,h,r),s!==null&&s.has(h)){let[x,m]=s.get(h);t.directiveToIndex.set(h.type,[d,x+t.directiveStart,m+t.directiveStart])}else(o===null||!o.has(h))&&t.directiveToIndex.set(h.type,d);h.contentQueries!==null&&(t.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(t.flags|=64);let g=h.type.prototype;!l&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),l=!0),!u&&(g.ngOnChanges||g.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),u=!0),d++}zI(n,t,o)}function zI(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++){let r=n.data[i];if(t===null||!t.has(r))ab(0,e,r,i),ab(1,e,r,i),lb(e,i,!1);else{let o=t.get(r);cb(0,e,o,i),cb(1,e,o,i),lb(e,i,!0)}}}function ab(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s;n===0?s=e.inputs??={}:s=e.outputs??={},s[o]??=[],s[o].push(i),HS(e,o)}}function cb(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s=r[o],a;n===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[s]??=[],a[s].push(i,o),HS(e,s)}}function HS(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function lb(n,e,t){let{attrs:i,inputs:r,hostDirectiveInputs:o}=n;if(i===null||!t&&r===null||t&&o===null||ov(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let s=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!t&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===e){s??=[],s.push(c,i[a+1]);break}}else if(t&&o.hasOwnProperty(c)){let l=o[c];for(let u=0;u<l.length;u+=2)if(l[u]===e){s??=[],s.push(l[u+1],i[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(s)}function GI(n,e,t,i,r){n.data[i]=r;let o=r.factory||(r.factory=Lo(r.type,!0)),s=new Yo(o,er(r),zt,null);n.blueprint[i]=s,t[i]=s,jI(n,e,i,fS(n,t,r.hostVars,_i),r)}function jI(n,e,t,i,r){let o=r.hostBindings;if(o){let s=n.hostBindingOpCodes;s===null&&(s=n.hostBindingOpCodes=[]);let a=~e.index;WI(s)!=a&&s.push(a),s.push(t,i,o)}}function WI(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function $I(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;er(e)&&(t[""]=n)}}function qI(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function zS(n,e,t,i,r,o,s,a){let c=e[je],l=c.consts,u=tr(l,s),d=Vd(c,n,t,i,u);return o&&UI(c,e,d,tr(l,a),r),d.mergedAttrs=ta(d.mergedAttrs,d.attrs),d.attrs!==null&&xd(d,d.attrs,!1),d.mergedAttrs!==null&&xd(d,d.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,d),d}function GS(n,e){AD(n,e),Vm(e)&&n.queries.elementEnd(e)}function XI(n,e,t,i,r,o){let s=e.consts,a=tr(s,r),c=Vd(e,n,t,i,a);if(c.mergedAttrs=ta(c.mergedAttrs,c.attrs),o!=null){let l=tr(s,o);c.localNames=[];for(let u=0;u<l.length;u+=2)c.localNames.push(l[u],-1)}return c.attrs!==null&&xd(c,c.attrs,!1),c.mergedAttrs!==null&&xd(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function _v(n){return n!==null&&(typeof n=="function"||typeof n=="object")}function jS(n,e,t){return n[e]=t}function yi(n,e,t){if(t===_i)return!1;let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function YI(n,e,t,i){let r=yi(n,e,t);return yi(n,e+1,i)||r}function mg(n,e,t){return function i(r){let o=i.__ngNativeEl__;o!==void 0&&ZD(r,o);let s=Tr(n)?vi(n.index,e):e;yv(s,5);let a=e[Qt],c=ub(e,a,t,r),l=i.__ngNextListenerFn__;for(;l;)c=ub(e,a,l,r)&&c,l=l.__ngNextListenerFn__;return c}}function ub(n,e,t,i){let r=ke(null);try{return Tt(pt.OutputStart,e,t),t(i)!==!1}catch(o){return hI(n,o),!1}finally{Tt(pt.OutputEnd,e,t),ke(r)}}function ZI(n,e,t,i,r,o,s,a){let c=Ju(n),l=!1,u=null;if(!i&&c&&(u=KI(e,t,o,n.index)),u!==null){let d=u.__ngLastListenerFn__||u;d.__ngNextListenerFn__=s,u.__ngLastListenerFn__=s,l=!0}else{let d=Fi(n,t),f=i?i(d):d;KD(t,f,o,a),i||(a.__ngNativeEl__=d);let h=r.listen(f,o,a);if(!JI(o)){let g=i?x=>i(gi(x[n.index])):n.index;WS(g,e,t,o,a,h,!1)}}return l}function JI(n){return n.startsWith("animation")||n.startsWith("transition")}function KI(n,e,t,i){let r=n.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let s=r[o];if(s===t&&r[o+1]===i){let a=e[Ys],c=r[o+2];return a&&a.length>c?a[c]:null}typeof s=="string"&&(o+=2)}return null}function WS(n,e,t,i,r,o,s){let a=e.firstCreatePass?_x(e):null,c=yx(t),l=c.length;c.push(r,o),a&&a.push(i,n,l,(l+1)*(s?-1:1))}function db(n,e,t,i,r,o){let s=e[t],a=e[je],l=a.data[t].outputs[i],d=s[l].subscribe(o);WS(n.index,a,e,r,o,d,!0)}var Bg=Symbol("BINDING");function $S(n){return n.debugInfo?.className||n.type.name||null}var bd=class extends Uc{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=Zr(e);return new ia(t,this.ngModule)}};function QI(n){return Object.keys(n).map(e=>{let[t,i,r]=n[e],o={propName:t,templateName:e,isSignal:(i&Ld.SignalBased)!==0};return r&&(o.transform=r),o})}function e1(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function t1(n,e,t){let i=e instanceof ln?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new Ug(t,i):t}function n1(n){let e=n.get(Ko,null);if(e===null)throw new De(407,!1);let t=n.get(VS,null),i=n.get(js,null),r=n.get(ca,null,{optional:!0});return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function i1(n,e){let t=qS(n);return rS(e,t,t==="svg"?Hm:t==="math"?px:null)}function qS(n){return(n.selectors[0][0]||"div").toLowerCase()}var ia=class extends Hd{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=QI(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=e1(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=RA(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r,o,s){Tt(pt.DynamicComponentStart);let a=ke(null);try{let c=this.componentDef,l=t1(c,r||this.ngModule,e),u=n1(l),d=u.tracingService;return d&&d.componentCreate?d.componentCreate($S(c),()=>this.createComponentRef(u,l,t,i,o,s)):this.createComponentRef(u,l,t,i,o,s)}finally{ke(a)}}createComponentRef(e,t,i,r,o,s){let a=this.componentDef,c=r1(r,a,s,o),l=e.rendererFactory.createRenderer(null,a),u=r?tI(l,r,a.encapsulation,t):i1(a,l),d=s?.some(fb)||o?.some(g=>typeof g!="function"&&g.bindings.some(fb)),f=av(null,c,null,512|dS(a),null,null,e,l,t,null,Xb(u,t,!0));f[En]=u,nd(f);let h=null;try{let g=zS(En,f,2,"#host",()=>c.directiveRegistry,!0,0);aS(l,u,g),na(u,f),xS(c,f,g),Zb(c,g,f),GS(c,g),i!==void 0&&s1(g,this.ngContentSelectors,i),h=vi(g.index,f),f[Qt]=h[Qt],gv(c,f,null)}catch(g){throw h!==null&&Cg(h),Cg(f),g}finally{Tt(pt.DynamicComponentEnd),id()}return new Sd(this.componentType,f,!!d)}};function r1(n,e,t,i){let r=n?["ng-version","21.2.16"]:NA(e.selectors[0]),o=null,s=null,a=0;if(t)for(let u of t)a+=u[Bg].requiredVars,u.create&&(u.targetIdx=0,(o??=[]).push(u)),u.update&&(u.targetIdx=0,(s??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let d=i[u];if(typeof d!="function")for(let f of d.bindings){a+=f[Bg].requiredVars;let h=u+1;f.create&&(f.targetIdx=h,(o??=[]).push(f)),f.update&&(f.targetIdx=h,(s??=[]).push(f))}}let c=[e];if(i)for(let u of i){let d=typeof u=="function"?u:u.type,f=Tm(d);c.push(f)}return sv(0,null,o1(o,s),1,a,c,null,null,null,[r],null)}function o1(n,e){return!n&&!e?null:t=>{if(t&1&&n)for(let i of n)i.create();if(t&2&&e)for(let i of e)i.update()}}function fb(n){let e=n[Bg].kind;return e==="input"||e==="twoWay"}var Sd=class extends BS{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t,i){super(),this._rootLView=t,this._hasInputBindings=i,this._tNode=Ku(t[je],En),this.location=Kg(this._tNode,t),this.instance=vi(this._tNode.index,t)[Qt],this.hostView=this.changeDetectorRef=new Jo(t,void 0),this.componentType=e}setInput(e,t){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let r=this._rootLView,o=mv(i,r[je],r,e,t);this.previousInputValues.set(e,t);let s=vi(i.index,r);yv(s,1)}get injector(){return new Xo(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function s1(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let o=t[r];i.push(o!=null&&o.length?Array.from(o):null)}}var Bc=(()=>{class n{static __NG_ELEMENT_ID__=a1}return n})();function a1(){let n=ei();return c1(n,lt())}var Vg=class n extends Bc{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Kg(this._hostTNode,this._hostLView)}get injector(){return new Xo(this._hostTNode,this._hostLView)}get parentInjector(){let e=Jg(this._hostTNode,this._hostLView);if(Ab(e)){let t=md(e,this._hostLView),i=pd(e),r=t[je].data[i+8];return new Xo(r,t)}else return new Xo(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=hb(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-en}createEmbeddedView(e,t,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let s=Lg(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},o,s);return this.insertImpl(a,r,Ic(this._hostTNode,s)),a}createComponent(e,t,i,r,o,s,a){let c=e&&!MD(e),l;if(c)l=t;else{let m=t||{};l=m.index,i=m.injector,r=m.projectableNodes,o=m.environmentInjector||m.ngModuleRef,s=m.directives,a=m.bindings}let u=c?e:new ia(Zr(e)),d=i||this.parentInjector;if(!o&&u.ngModule==null){let p=(c?d:this.parentInjector).get(ln,null);p&&(o=p)}let f=Zr(u.componentType??{}),h=Lg(this._lContainer,f?.id??null),g=h?.firstChild??null,x=u.create(d,r,g,o,s,a);return this.insertImpl(x.hostView,l,Ic(this._hostTNode,h)),x}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(mx(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[pn],l=new n(c,c[mi],c[pn]);l.detach(l.indexOf(e))}}let o=this._adjustIndex(t),s=this._lContainer;return Bd(s,r,o,i),e.attachToViewContainerRef(),Im(gg(s),o,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=hb(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=Nc(this._lContainer,t);i&&(vc(gg(this._lContainer),t),kd(i[je],i))}detach(e){let t=this._adjustIndex(e,-1),i=Nc(this._lContainer,t);return i&&vc(gg(this._lContainer),t)!=null?new Jo(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function hb(n){return n[bc]}function gg(n){return n[bc]||(n[bc]=[])}function c1(n,e){let t,i=e[n.index];return Oi(i)?t=i:(t=OS(i,e,null,n),e[n.index]=t,cv(e,t)),u1(t,e,n,i),new Vg(t,n,e)}function l1(n,e){let t=n[kt],i=t.createComment(""),r=Fi(e,n),o=t.parentNode(r);return _d(t,o,i,t.nextSibling(r),!1),i}var u1=h1,d1=()=>!1;function f1(n,e,t){return d1(n,e,t)}function h1(n,e,t,i){if(n[Qr])return;let r;t.type&8?r=gi(i):r=l1(e,t),n[Qr]=r}var Qo=class{},zd=class{};var Ed=class extends Qo{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new bd(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let o=Cm(e);this._bootstrapComponents=lS(o.bootstrap),this._r3Injector=og(e,t,[{provide:Qo,useValue:this},{provide:Uc,useValue:this.componentFactoryResolver},...i],fc(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Md=class extends zd{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new Ed(this.moduleType,e,[])}};var Pc=class extends Qo{injector;componentFactoryResolver=new bd(this);instance=null;constructor(e){super();let t=new Uo([...e.providers,{provide:Qo,useValue:this},{provide:Uc,useValue:this.componentFactoryResolver}],e.parent||_c(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function Vc(n,e,t=null){return new Pc({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var p1=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=Om(!1,t.type),r=i.length>0?Vc([i],this._injector,""):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Ge({token:n,providedIn:"environment",factory:()=>new n(et(ln))})}return n})();function Gt(n){return Fc(()=>{let e=XS(n),t=st(re({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Qg.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(p1).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||Bi.Emulated,styles:n.styles||Bn,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&ns("NgStandalone"),YS(t);let i=n.dependencies;return t.directiveDefs=pb(i,m1),t.pipeDefs=pb(i,nx),t.id=y1(t),t})}function m1(n){return Zr(n)||Tm(n)}function ro(n){return Fc(()=>({type:n.type,bootstrap:n.bootstrap||Bn,declarations:n.declarations||Bn,imports:n.imports||Bn,exports:n.exports||Bn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function g1(n,e){if(n==null)return Jr;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],o,s,a,c;Array.isArray(r)?(a=r[0],o=r[1],s=r[2]??o,c=r[3]||null):(o=r,s=r,a=Ld.None,c=null),t[o]=[i,a,c],e[o]=s}return t}function v1(n){if(n==null)return Jr;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function xi(n){return Fc(()=>{let e=XS(n);return YS(e),e})}function XS(n){let e={};return{type:n.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||Jr,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||Bn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:g1(n.inputs,e),outputs:v1(n.outputs),debugInfo:null}}function YS(n){n.features?.forEach(e=>e(n))}function pb(n,e){return n?()=>{let t=typeof n=="function"?n():n,i=[];for(let r of t){let o=e(r);o!==null&&i.push(o)}return i}:null}function y1(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let o of i.join("|"))e=Math.imul(31,e)+o.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function _1(n){return Object.getPrototypeOf(n.prototype).constructor}function rs(n){let e=_1(n.type),t=!0,i=[n];for(;e&&e!==Function.prototype&&e!==Object.prototype;){let r,o=Object.hasOwn(e,pc)?e[pc]:void 0,s=Object.hasOwn(e,mc)?e[mc]:void 0;if(er(n))r=o??s;else{if(o)throw new De(903,!1);r=s}if(r){if(t){i.push(r);let c=n;c.inputs=vg(n.inputs),c.declaredInputs=vg(n.declaredInputs),c.outputs=vg(n.outputs);let l=r.hostBindings;l&&M1(n,l);let u=r.viewQuery,d=r.contentQueries;if(u&&S1(n,u),d&&E1(n,d),x1(n,r),tx(n.outputs,r.outputs),er(r)&&r.data.animation){let f=n.data;f.animation=(f.animation||[]).concat(r.data.animation)}}let a=r.features;if(a)for(let c=0;c<a.length;c++){let l=a[c];l&&l.ngInherit&&l(n),l===rs&&(t=!1)}}e=Object.getPrototypeOf(e)}b1(i)}function x1(n,e){for(let t in e.inputs){if(!e.inputs.hasOwnProperty(t)||n.inputs.hasOwnProperty(t))continue;let i=e.inputs[t];i!==void 0&&(n.inputs[t]=i,n.declaredInputs[t]=e.declaredInputs[t])}}function b1(n){let e=0,t=null;for(let i=n.length-1;i>=0;i--){let r=n[i];r.hostVars=e+=r.hostVars,r.hostAttrs=ta(r.hostAttrs,t=ta(t,r.hostAttrs))}}function vg(n){return n===Jr?{}:n===Bn?[]:n}function S1(n,e){let t=n.viewQuery;t?n.viewQuery=(i,r)=>{e(i,r),t(i,r)}:n.viewQuery=e}function E1(n,e){let t=n.contentQueries;t?n.contentQueries=(i,r,o)=>{e(i,r,o),t(i,r,o)}:n.contentQueries=e}function M1(n,e){let t=n.hostBindings;t?n.hostBindings=(i,r)=>{e(i,r),t(i,r)}:n.hostBindings=e}function w1(n,e,t,i,r,o,s,a){if(t.firstCreatePass){n.mergedAttrs=ta(n.mergedAttrs,n.attrs);let u=n.tView=sv(2,n,r,o,s,t.directiveRegistry,t.pipeRegistry,null,t.schemas,t.consts,null);t.queries!==null&&(t.queries.template(t,n),u.queries=t.queries.embeddedTView(n))}a&&(n.flags|=a),Ks(n,!1);let c=C1(t,e,n,i);rd()&&fv(t,e,c,n),na(c,e);let l=OS(c,e,c,n);e[i+En]=l,cv(e,l),f1(l,n,e)}function wd(n,e,t,i,r,o,s,a,c,l,u){let d=t+En,f;if(e.firstCreatePass){if(f=Vd(e,d,4,s||null,a||null),l!=null){let h=tr(e.consts,l);f.localNames=[];for(let g=0;g<h.length;g+=2)f.localNames.push(h[g],-1)}}else f=e.data[d];return w1(f,n,e,t,i,r,o,c),l!=null&&pv(n,f,u),f}var C1=T1;function T1(n,e,t,i){return od(!0),e[kt].createComment("")}var xv=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ge({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();function bv(n){return typeof n=="function"&&n[An]!==void 0}function Sv(n){return bv(n)&&typeof n.set=="function"}var Ev=new Re("");function oo(n){return!!n&&typeof n.then=="function"}function Mv(n){return!!n&&typeof n.subscribe=="function"}var ZS=new Re("");var wv=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=ue(ZS,{optional:!0})??[];injector=ue(hi);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let o=In(this.injector,r);if(oo(o))t.push(o);else if(Mv(o)){let s=new Promise((a,c)=>{o.subscribe({complete:a,error:c})});t.push(s)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ge({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Gd=new Re("");function JS(){jp(()=>{let n="";throw new De(600,n)})}function KS(n){return n.isBoundToModule}var D1=10;var os=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=ue(ki);afterRenderManager=ue(pS);zonelessEnabled=ue(Cc);rootEffectScheduler=ue(dg);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new hn;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=ue(no);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(Vt(t=>!t))}constructor(){ue(ca,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=ue(ln);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){return this.bootstrapImpl(t,i)}bootstrapImpl(t,i,r=hi.NULL){return this._injector.get(Jn).run(()=>{Tt(pt.BootstrapComponentStart);let s=t instanceof Hd;if(!this._injector.get(wv).done){let g="";throw new De(405,g)}let c;s?c=t:c=this._injector.get(Uc).resolveComponentFactory(t),this.componentTypes.push(c.componentType);let l=KS(c)?void 0:this._injector.get(Qo),u=i||c.selector,d=c.create(r,[],u,l),f=d.location.nativeElement,h=d.injector.get(Ev,null);return h?.registerApplication(f),d.onDestroy(()=>{this.detachView(d.hostView),Ac(this.components,d),h?.unregisterApplication(f)}),this._loadComponent(d),Tt(pt.BootstrapComponentEnd,d),d})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Tt(pt.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(uv.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Tt(pt.ChangeDetectionEnd),new De(101,!1);let t=ke(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,ke(t),this.afterTick.next(),Tt(pt.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Ko,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<D1;){Tt(pt.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Tt(pt.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let t=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!Ec(r))continue;let o=i&&!this.zonelessEnabled?0:1;IS(r,o),t=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}t||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Ec(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Ac(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(t),this._injector.get(Gd,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Ac(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new De(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ge({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ac(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Hc(n,e,t,i){let r=lt(),o=eo();if(yi(r,o,e)){let s=Mn(),a=wc();uI(a,r,n,e,t,i)}return Hc}var Hg=class{destroy(e){}updateValue(e,t){}swap(e,t){let i=Math.min(e,t),r=Math.max(e,t),o=this.detach(r);if(r-i>1){let s=this.detach(i);this.attach(i,o),this.attach(r,s)}else this.attach(i,o)}move(e,t){this.attach(t,this.detach(e))}};function yg(n,e,t,i,r){return n===t&&Object.is(e,i)?1:Object.is(r(n,e),r(t,i))?-1:0}function A1(n,e,t,i){let r,o,s=0,a=n.length-1,c=void 0;if(Array.isArray(e)){ke(i);let l=e.length-1;for(ke(null);s<=a&&s<=l;){let u=n.at(s),d=e[s],f=yg(s,u,s,d,t);if(f!==0){f<0&&n.updateValue(s,d),s++;continue}let h=n.at(a),g=e[l],x=yg(a,h,l,g,t);if(x!==0){x<0&&n.updateValue(a,g),a--,l--;continue}let m=t(s,u),p=t(a,h),b=t(s,d);if(Object.is(b,p)){let E=t(l,g);Object.is(E,m)?(n.swap(s,a),n.updateValue(a,g),l--,a--):n.move(a,s),n.updateValue(s,d),s++;continue}if(r??=new Cd,o??=gb(n,s,a,t),zg(n,r,s,b))n.updateValue(s,d),s++,a++;else if(o.has(b))r.set(m,n.detach(s)),a--;else{let E=n.create(s,e[s]);n.attach(s,E),s++,a++}}for(;s<=l;)mb(n,r,t,s,e[s]),s++}else if(e!=null){ke(i);let l=e[Symbol.iterator]();ke(null);let u=l.next();for(;!u.done&&s<=a;){let d=n.at(s),f=u.value,h=yg(s,d,s,f,t);if(h!==0)h<0&&n.updateValue(s,f),s++,u=l.next();else{r??=new Cd,o??=gb(n,s,a,t);let g=t(s,f);if(zg(n,r,s,g))n.updateValue(s,f),s++,a++,u=l.next();else if(!o.has(g))n.attach(s,n.create(s,f)),s++,a++,u=l.next();else{let x=t(s,d);r.set(x,n.detach(s)),a--}}}for(;!u.done;)mb(n,r,t,n.length,u.value),u=l.next()}for(;s<=a;)n.destroy(n.detach(a--));r?.forEach(l=>{n.destroy(l)})}function zg(n,e,t,i){return e!==void 0&&e.has(i)?(n.attach(t,e.get(i)),e.delete(i),!0):!1}function mb(n,e,t,i,r){if(zg(n,e,i,t(i,r)))n.updateValue(i,r);else{let o=n.create(i,r);n.attach(i,o)}}function gb(n,e,t,i){let r=new Set;for(let o=e;o<=t;o++)r.add(i(o,n.at(o)));return r}var Cd=class{kvMap=new Map;_vMap=void 0;has(e){return this.kvMap.has(e)}delete(e){if(!this.has(e))return!1;let t=this.kvMap.get(e);return this._vMap!==void 0&&this._vMap.has(t)?(this.kvMap.set(e,this._vMap.get(t)),this._vMap.delete(t)):this.kvMap.delete(e),!0}get(e){return this.kvMap.get(e)}set(e,t){if(this.kvMap.has(e)){let i=this.kvMap.get(e);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,t)}else this.kvMap.set(e,t)}forEach(e){for(let[t,i]of this.kvMap)if(e(i,t),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),e(i,t)}}};function bi(n,e,t,i,r,o,s,a){ns("NgControlFlow");let c=lt(),l=Mn(),u=tr(l.consts,o);return wd(c,l,n,e,t,i,r,u,256,s,a),Cv}function Cv(n,e,t,i,r,o,s,a){ns("NgControlFlow");let c=lt(),l=Mn(),u=tr(l.consts,o);return wd(c,l,n,e,t,i,r,u,512,s,a),Cv}function Si(n,e){ns("NgControlFlow");let t=lt(),i=eo(),r=t[i]!==_i?t[i]:-1,o=r!==-1?Td(t,En+r):void 0,s=0;if(yi(t,i,n)){let a=ke(null);try{if(o!==void 0&&LS(o,s),n!==-1){let c=En+n,l=Td(t,c),u=$g(t[je],c),d=US(l,u,t),f=vv(t,u,e,{dehydratedView:d});Bd(l,f,s,Ic(u,d))}}finally{ke(a)}}else if(o!==void 0){let a=FS(o,s);a!==void 0&&(a[Qt]=e)}}var Gg=class{lContainer;$implicit;$index;constructor(e,t,i){this.lContainer=e,this.$implicit=t,this.$index=i}get $count(){return this.lContainer.length-en}};function Rr(n,e){return e}var jg=class{hasEmptyBlock;trackByFn;liveCollection;constructor(e,t,i){this.hasEmptyBlock=e,this.trackByFn=t,this.liveCollection=i}};function Pt(n,e,t,i,r,o,s,a,c,l,u,d,f){ns("NgControlFlow");let h=lt(),g=Mn(),x=c!==void 0,m=lt(),p=a?s.bind(m[Kn][Qt]):s,b=new jg(x,p);m[En+n]=b,wd(h,g,n+1,e,t,i,r,tr(g.consts,o),256),x&&wd(h,g,n+2,c,l,u,d,tr(g.consts,f),512)}var Wg=class extends Hg{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(e,t,i){super(),this.lContainer=e,this.hostLView=t,this.templateTNode=i}get length(){return this.lContainer.length-en}at(e){return this.getLView(e)[Qt].$implicit}attach(e,t){let i=t[Xs];this.needsIndexUpdate||=e!==this.length,Bd(this.lContainer,t,e,Ic(this.templateTNode,i)),I1(this.lContainer,e)}detach(e){return this.needsIndexUpdate||=e!==this.length-1,R1(this.lContainer,e),N1(this.lContainer,e)}create(e,t){let i=Lg(this.lContainer,this.templateTNode.tView.ssrId);return vv(this.hostLView,this.templateTNode,new Gg(this.lContainer,t,e),{dehydratedView:i})}destroy(e){kd(e[je],e)}updateValue(e,t){this.getLView(e)[Qt].$implicit=t}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let e=0;e<this.length;e++)this.getLView(e)[Qt].$index=e}getLView(e){return P1(this.lContainer,e)}};function Ot(n){let e=ke(null),t=Dr();try{let i=lt(),r=i[je],o=i[t],s=t+1,a=Td(i,s);if(o.liveCollection===void 0){let l=$g(r,s);o.liveCollection=new Wg(a,i,l)}else o.liveCollection.reset();let c=o.liveCollection;if(A1(c,n,o.trackByFn,e),c.updateIndexes(),o.hasEmptyBlock){let l=eo(),u=c.length===0;if(yi(i,l,u)){let d=t+2,f=Td(i,d);if(u){let h=$g(r,d),g=US(f,h,i),x=vv(i,h,void 0,{dehydratedView:g});Bd(f,x,0,Ic(h,g))}else r.firstUpdatePass&&PI(f),LS(f,0)}}}finally{ke(e)}}function Td(n,e){return n[e]}function I1(n,e){if(n.length<=en)return;let t=en+e,i=n[t],r=i?i[Kr]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[Mr];BA(o,r),Zo.delete(i[wr]),r.detachedLeaveAnimationFns=void 0}}function R1(n,e){if(n.length<=en)return;let t=en+e,i=n[t],r=i?i[Kr]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function N1(n,e){return Nc(n,e)}function P1(n,e){return FS(n,e)}function $g(n,e){return Ku(n,e)}function Ut(n,e,t){let i=lt(),r=eo();if(yi(i,r,e)){let o=Mn(),s=wc();bS(s,i,n,e,i[kt],t)}return Ut}function qg(n,e,t,i,r){mv(e,n,t,r?"class":"style",i)}function ee(n,e,t,i){let r=lt(),o=r[je],s=n+En,a=o.firstCreatePass?zS(s,r,2,e,lI,Sx(),t,i):o.data[s];if(Tr(a)){let c=r[Pi].tracingService;if(c&&c.componentCreate){let l=o.data[a.directiveStart+a.componentOffset];return c.componentCreate($S(l),()=>(vb(n,e,r,a,i),ee))}}return vb(n,e,r,a,i),ee}function vb(n,e,t,i,r){if(ES(i,t,n,e,QS),Ju(i)){let o=t[je];xS(o,t,i),Zb(o,i,t)}r!=null&&pv(t,i)}function ie(){let n=Mn(),e=ei(),t=MS(e);return n.firstCreatePass&&GS(n,t),qm(t)&&Xm(),$m(),t.classesWithoutHost!=null&&RD(t)&&qg(n,t,lt(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&ND(t)&&qg(n,t,lt(),t.stylesWithoutHost,!1),ie}function Dt(n,e,t,i){return ee(n,e,t,i),ie(),Dt}function Ue(n,e,t,i){let r=lt(),o=r[je],s=n+En,a=o.firstCreatePass?XI(s,o,2,e,t,i):o.data[s];return ES(a,r,n,e,QS),i!=null&&pv(r,a),Ue}function He(){let n=ei(),e=MS(n);return qm(e)&&Xm(),$m(),He}function Nn(n,e,t,i){return Ue(n,e,t,i),He(),Nn}var QS=(n,e,t,i,r)=>(od(!0),rS(e[kt],i,rg()));function Nr(){return lt()}function so(n,e,t){let i=lt(),r=eo();if(yi(i,r,e)){let o=Mn(),s=wc();SS(s,i,n,e,i[kt],t)}return so}var zc="en-US";var O1=zc;function eE(n){typeof n=="string"&&(O1=n.toLowerCase().replace(/_/g,"-"))}function $n(n,e,t){let i=lt(),r=Mn(),o=ei();return tE(r,i,i[kt],o,n,e,t),$n}function tE(n,e,t,i,r,o,s){let a=!0,c=null;if((i.type&3||s)&&(c??=mg(i,e,o),ZI(i,n,e,s,t,r,o,c)&&(a=!1)),a){let l=i.outputs?.[r],u=i.hostDirectiveOutputs?.[r];if(u&&u.length)for(let d=0;d<u.length;d+=2){let f=u[d],h=u[d+1];c??=mg(i,e,o),db(i,e,f,h,r,c)}if(l&&l.length)for(let d of l)c??=mg(i,e,o),db(i,e,d,r,r,c)}}function tn(n=1){return Ox(n)}function ld(n,e){return n<<17|e<<2}function es(n){return n>>17&32767}function F1(n){return(n&2)==2}function L1(n,e){return n&131071|e<<17}function Xg(n){return n|2}function ra(n){return(n&131068)>>2}function _g(n,e){return n&-131069|e<<2}function k1(n){return(n&1)===1}function Yg(n){return n|1}function U1(n,e,t,i,r,o){let s=o?e.classBindings:e.styleBindings,a=es(s),c=ra(s);n[i]=t;let l=!1,u;if(Array.isArray(t)){let d=t;u=d[1],(u===null||$s(d,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let f=es(n[a+1]);n[i+1]=ld(f,a),f!==0&&(n[f+1]=_g(n[f+1],i)),n[a+1]=L1(n[a+1],i)}else n[i+1]=ld(a,0),a!==0&&(n[a+1]=_g(n[a+1],i)),a=i;else n[i+1]=ld(c,0),a===0?a=i:n[c+1]=_g(n[c+1],i),c=i;l&&(n[i+1]=Xg(n[i+1])),yb(n,u,i,!0),yb(n,u,i,!1),B1(e,u,n,i,o),s=ld(a,c),o?e.classBindings=s:e.styleBindings=s}function B1(n,e,t,i,r){let o=r?n.residualClasses:n.residualStyles;o!=null&&typeof e=="string"&&$s(o,e)>=0&&(t[i+1]=Yg(t[i+1]))}function yb(n,e,t,i){let r=n[t+1],o=e===null,s=i?es(r):ra(r),a=!1;for(;s!==0&&(a===!1||o);){let c=n[s],l=n[s+1];V1(c,e)&&(a=!0,n[s+1]=i?Yg(l):Xg(l)),s=i?es(l):ra(l)}a&&(n[t+1]=i?Xg(r):Yg(r))}function V1(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?$s(n,e)>=0:!1}var Vn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function H1(n){return n.substring(Vn.key,Vn.keyEnd)}function z1(n){return n.substring(Vn.value,Vn.valueEnd)}function G1(n){return j1(n),nE(n,Dd(n,0,Vn.textEnd))}function nE(n,e){let t=Vn.textEnd,i=Vn.key=Dd(n,e,t);return t===i?-1:(i=Vn.keyEnd=W1(n,i,t),i=_b(n,i,t,58),i=Vn.value=Dd(n,i,t),i=Vn.valueEnd=$1(n,i,t),_b(n,i,t,59))}function j1(n){Vn.key=0,Vn.keyEnd=0,Vn.value=0,Vn.valueEnd=0,Vn.textEnd=n.length}function Dd(n,e,t){for(;e<t&&n.charCodeAt(e)<=32;)e++;return e}function W1(n,e,t){let i;for(;e<t&&((i=n.charCodeAt(e))===45||i===95||(i&-33)>=65&&(i&-33)<=90||i>=48&&i<=57);)e++;return e}function _b(n,e,t,i){return e=Dd(n,e,t),e<t&&e++,e}function $1(n,e,t){let i=-1,r=-1,o=-1,s=e,a=s;for(;s<t;){let c=n.charCodeAt(s++);if(c===59)return a;c===34||c===39?a=s=xb(n,c,s,t):e===s-4&&o===85&&r===82&&i===76&&c===40?a=s=xb(n,41,s,t):c>32&&(a=s),o=r,r=i,i=c&-33}return a}function xb(n,e,t,i){let r=-1,o=t;for(;o<i;){let s=n.charCodeAt(o++);if(s==e&&r!==92)return o;s==92&&r===92?r=0:r=s}throw new Error}function la(n,e){return X1(n,e,null,!0),la}function Gc(n){Y1(oE,q1,n,!1)}function q1(n,e){for(let t=G1(e);t>=0;t=nE(e,t))oE(n,H1(e),z1(e))}function X1(n,e,t,i){let r=lt(),o=Mn(),s=eg(2);if(o.firstUpdatePass&&rE(o,n,s,i),e!==_i&&yi(r,s,e)){let a=o.data[Dr()];sE(o,a,r,r[kt],n,r[s+1]=nR(e,t),i,s)}}function Y1(n,e,t,i){let r=Mn(),o=eg(2);r.firstUpdatePass&&rE(r,null,o,i);let s=lt();if(t!==_i&&yi(s,o,t)){let a=r.data[Dr()];if(aE(a,i)&&!iE(r,o)){let c=i?a.classesWithoutHost:a.stylesWithoutHost;c!==null&&(t=Gu(c,t||"")),qg(r,a,s,t,i)}else tR(r,a,s,s[kt],s[o+1],s[o+1]=eR(n,e,t),i,o)}}function iE(n,e){return e>=n.expandoStartIndex}function rE(n,e,t,i){let r=n.data;if(r[t+1]===null){let o=r[Dr()],s=iE(n,t);aE(o,i)&&e===null&&!s&&(e=!1),e=Z1(r,o,e,i),U1(r,o,e,t,s,i)}}function Z1(n,e,t,i){let r=Ix(n),o=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=xg(null,n,e,t,i),t=Oc(t,e.attrs,i),o=null);else{let s=e.directiveStylingLast;if(s===-1||n[s]!==r)if(t=xg(r,n,e,t,i),o===null){let c=J1(n,e,i);c!==void 0&&Array.isArray(c)&&(c=xg(null,n,e,c[1],i),c=Oc(c,e.attrs,i),K1(n,e,i,c))}else o=Q1(n,e,i)}return o!==void 0&&(i?e.residualClasses=o:e.residualStyles=o),t}function J1(n,e,t){let i=t?e.classBindings:e.styleBindings;if(ra(i)!==0)return n[es(i)]}function K1(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[es(r)]=i}function Q1(n,e,t){let i,r=e.directiveEnd;for(let o=1+e.directiveStylingLast;o<r;o++){let s=n[o].hostAttrs;i=Oc(i,s,t)}return Oc(i,e.attrs,t)}function xg(n,e,t,i,r){let o=null,s=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<s&&(o=e[a],i=Oc(i,o.hostAttrs,r),o!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function Oc(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let o=0;o<e.length;o++){let s=e[o];typeof s=="number"?r=s:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),Rm(n,s,t?!0:e[++o]))}return n===void 0?null:n}function eR(n,e,t){if(t==null||t==="")return Bn;let i=[],r=sa(t);if(Array.isArray(r))for(let o=0;o<r.length;o++)n(i,r[o],!0);else if(r instanceof Set)for(let o of r)n(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&n(i,o,r[o]);else typeof r=="string"&&e(i,r);return i}function oE(n,e,t){Rm(n,e,sa(t))}function tR(n,e,t,i,r,o,s,a){r===_i&&(r=Bn);let c=0,l=0,u=0<r.length?r[0]:null,d=0<o.length?o[0]:null;for(;u!==null||d!==null;){let f=c<r.length?r[c+1]:void 0,h=l<o.length?o[l+1]:void 0,g=null,x;u===d?(c+=2,l+=2,f!==h&&(g=d,x=h)):d===null||u!==null&&u<d?(c+=2,g=u):(l+=2,g=d,x=h),g!==null&&sE(n,e,t,i,g,x,s,a),u=c<r.length?r[c]:null,d=l<o.length?o[l]:null}}function sE(n,e,t,i,r,o,s,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=k1(l)?bb(c,e,t,r,ra(l),s):void 0;if(!Ad(u)){Ad(o)||F1(l)&&(o=bb(c,null,t,r,a,s));let d=zm(Dr(),t);eI(i,s,d,r,o)}}function bb(n,e,t,i,r,o){let s=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,d=u===null,f=t[r+1];f===_i&&(f=d?Bn:void 0);let h=d?Xu(f,i):u===i?f:void 0;if(l&&!Ad(h)&&(h=Xu(c,i)),Ad(h)&&(a=h,s))return a;let g=n[r+1];r=s?es(g):ra(g)}if(e!==null){let c=o?e.residualClasses:e.residualStyles;c!=null&&(a=Xu(c,i))}return a}function Ad(n){return n!==void 0}function nR(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=fc(sa(n)))),n}function aE(n,e){return(n.flags&(e?8:16))!==0}function te(n,e=""){let t=lt(),i=Mn(),r=n+En,o=i.firstCreatePass?Vd(i,r,1,e,null):i.data[r],s=iR(i,t,o,e);t[r]=s,rd()&&fv(i,t,s,o),Ks(o,!1)}var iR=(n,e,t,i)=>(od(!0),yA(e[kt],i));function rR(n,e,t,i=""){return yi(n,eo(),t)?e+gc(t)+i:_i}function jt(n){return Ft("",n),jt}function Ft(n,e,t){let i=lt(),r=rR(i,n,e,t);return r!==_i&&oR(i,Dr(),r),Ft}function oR(n,e,t){let i=zm(e,n);_A(n[kt],i,t)}function ss(n,e,t){Sv(e)&&(e=e());let i=lt(),r=eo();if(yi(i,r,e)){let o=Mn(),s=wc();bS(s,i,n,e,i[kt],t)}return ss}function ua(n,e){let t=Sv(n);return t&&n.set(e),t}function as(n,e){let t=lt(),i=Mn(),r=ei();return tE(i,t,t[kt],r,n,e),as}function Sb(n,e,t){let i=Mn();i.firstCreatePass&&cE(e,i.data,i.blueprint,er(n),t)}function cE(n,e,t,i,r){if(n=Sn(n),Array.isArray(n))for(let o=0;o<n.length;o++)cE(n[o],e,t,i,r);else{let o=Mn(),s=lt(),a=ei(),c=ko(n)?n:Sn(n.provide),l=Lm(n),u=a.providerIndexes&1048575,d=a.directiveStart,f=a.providerIndexes>>20;if(ko(n)||!n.multi){let h=new Yo(l,r,zt,null),g=Sg(c,e,r?u:u+f,d);g===-1?(Mg(gd(a,s),o,c),bg(o,n,e.length),e.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),t.push(h),s.push(h)):(t[g]=h,s[g]=h)}else{let h=Sg(c,e,u+f,d),g=Sg(c,e,u,u+f),x=h>=0&&t[h],m=g>=0&&t[g];if(r&&!m||!r&&!x){Mg(gd(a,s),o,c);let p=cR(r?aR:sR,t.length,r,i,l,n);!r&&m&&(t[g].providerFactory=p),bg(o,n,e.length,0),e.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),t.push(p),s.push(p)}else{let p=lE(t[r?g:h],l,!r&&i);bg(o,n,h>-1?h:g,p)}!r&&i&&m&&t[g].componentProviders++}}}function bg(n,e,t,i){let r=ko(e),o=dx(e);if(r||o){let c=(o?Sn(e.useClass):e).prototype.ngOnDestroy;if(c){let l=n.destroyHooks||(n.destroyHooks=[]);if(!r&&e.multi){let u=l.indexOf(t);u===-1?l.push(t,[i,c]):l[u+1].push(i,c)}else l.push(t,c)}}}function lE(n,e,t){return t&&n.componentProviders++,n.multi.push(e)-1}function Sg(n,e,t,i){for(let r=t;r<i;r++)if(e[r]===n)return r;return-1}function sR(n,e,t,i,r){return Zg(this.multi,[])}function aR(n,e,t,i,r){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,c=vd(i,i[je],this.providerFactory.index,r);s=c.slice(0,a),Zg(o,s);for(let l=a;l<c.length;l++)s.push(c[l])}else s=[],Zg(o,s);return s}function Zg(n,e){for(let t=0;t<n.length;t++){let i=n[t];e.push(i())}return e}function cR(n,e,t,i,r,o){let s=new Yo(n,t,zt,null);return s.multi=[],s.index=e,s.componentProviders=0,lE(s,r,i&&!t),s}function jd(n,e){return t=>{t.providersResolver=(i,r)=>Sb(i,r?r(n):n,!1),e&&(t.viewProvidersResolver=(i,r)=>Sb(i,r?r(e):e,!0))}}function Wd(n,e,t){return lR(lt(),Qm(),n,e,t)}function Tv(n,e,t,i){return uR(lt(),Qm(),n,e,t,i)}function uE(n,e){let t=n[e];return t===_i?void 0:t}function lR(n,e,t,i,r,o){let s=e+t;return yi(n,s,r)?jS(n,s+1,o?i.call(o,r):i(r)):uE(n,s+1)}function uR(n,e,t,i,r,o,s){let a=e+t;return YI(n,a,r,o)?jS(n,a+2,s?i.call(s,r,o):i(r,o)):uE(n,a+2)}var Id=class{ngModuleFactory;componentFactories;constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},Dv=(()=>{class n{compileModuleSync(t){return new Md(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=Cm(t),o=lS(r.declarations).reduce((s,a)=>{let c=Zr(a);return c&&s.push(new ia(c)),s},[]);return new Id(i,o)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ge({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var dE=(()=>{class n{applicationErrorHandler=ue(ki);appRef=ue(os);taskService=ue(no);ngZone=ue(Jn);zonelessEnabled=ue(Cc);tracing=ue(ca,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new _n;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(uc):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(ue(ug,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let t=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(t);return}this.switchToMicrotaskScheduler(),this.taskService.remove(t)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let t=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})})}notify(t){if(!this.zonelessEnabled&&t===5)return;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?Ux:sg;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(uc+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(t),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ge({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function fE(){return[{provide:js,useExisting:dE},{provide:Jn,useClass:dc},{provide:Cc,useValue:!0}]}function dR(){return typeof $localize<"u"&&$localize.locale||zc}var $d=new Re("",{factory:()=>ue($d,{optional:!0,skipSelf:!0})||dR()});function Pn(n){return Z_(n)}function Pr(n,e){return du(n,e?.equal)}var mE=Symbol("InputSignalNode#UNSET"),NR=st(re({},fu),{transformFn:void 0,applyValueToInputSignal(n,e){Fs(n,e)}});function gE(n,e){let t=Object.create(NR);t.value=n,t.transformFn=e?.transform;function i(){if(Ns(t),t.value===mE){let r=null;throw new De(-950,r)}return t.value}return i[An]=t,i}function hE(n,e){return gE(n,e)}function PR(n){return gE(mE,n)}var vE=(hE.required=PR,hE);var Av=new Re(""),OR=new Re("");function jc(n){return!n.moduleRef}function FR(n){let e=jc(n)?n.r3Injector:n.moduleRef.injector,t=e.get(Jn);return t.run(()=>{jc(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(ki),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:i})}),jc(n)){let o=()=>e.destroy(),s=n.platformInjector.get(Av);s.add(o),e.onDestroy(()=>{r.unsubscribe(),s.delete(o)})}else{let o=()=>n.moduleRef.destroy(),s=n.platformInjector.get(Av);s.add(o),n.moduleRef.onDestroy(()=>{Ac(n.allPlatformModules,n.moduleRef),r.unsubscribe(),s.delete(o)})}return kR(i,t,()=>{let o=e.get(no),s=o.add(),a=e.get(wv);return a.runInitializers(),a.donePromise.then(()=>{let c=e.get($d,zc);if(eE(c||zc),!e.get(OR,!0))return jc(n)?e.get(os):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(jc(n)){let u=e.get(os);return n.rootComponent!==void 0&&u.bootstrap(n.rootComponent),u}else return LR?.(n.moduleRef,n.allPlatformModules),n.moduleRef}).finally(()=>{o.remove(s)})})})}var LR;function kR(n,e,t){try{let i=t();return oo(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n(i)),i}}var qd=null;function UR(n=[],e){return hi.create({name:e,providers:[{provide:yc,useValue:"platform"},{provide:Av,useValue:new Set([()=>qd=null])},...n]})}function BR(n=[]){if(qd)return qd;let e=UR(n);return qd=e,JS(),VR(e),e}function VR(n){let e=n.get(Nd,null);In(n,()=>{e?.forEach(t=>t())})}var HR=1e4;var c7=HR-1e3;var Wc=(()=>{class n{static __NG_ELEMENT_ID__=zR}return n})();function zR(n){return GR(ei(),lt(),(n&16)===16)}function GR(n,e,t){if(Tr(n)&&!t){let i=vi(n.index,e);return new Jo(i,i)}else if(n.type&175){let i=e[Kn];return new Jo(i,e)}return null}var Iv=class{supports(e){return e instanceof Map||_v(e)}create(){return new Rv}},Rv=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(e){let t;for(t=this._mapHead;t!==null;t=t._next)e(t)}forEachPreviousItem(e){let t;for(t=this._previousMapHead;t!==null;t=t._nextPrevious)e(t)}forEachChangedItem(e){let t;for(t=this._changesHead;t!==null;t=t._nextChanged)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;t!==null;t=t._nextAdded)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;t!==null;t=t._nextRemoved)e(t)}diff(e){if(!e)e=new Map;else if(!(e instanceof Map||_v(e)))throw new De(900,!1);return this.check(e)?this:null}check(e){this._reset();let t=this._mapHead;if(this._appendAfter=null,this._forEach(e,(i,r)=>{if(t&&t.key===r)this._maybeAddToChanges(t,i),this._appendAfter=t,t=t._next;else{let o=this._getOrCreateRecordForKey(r,i);t=this._insertBeforeOrAppend(t,o)}}),t){t._prev&&(t._prev._next=null),this._removalsHead=t;for(let i=t;i!==null;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(e,t){if(e){let i=e._prev;return t._next=e,t._prev=i,e._prev=t,i&&(i._next=t),e===this._mapHead&&(this._mapHead=t),this._appendAfter=e,e}return this._appendAfter?(this._appendAfter._next=t,t._prev=this._appendAfter):this._mapHead=t,this._appendAfter=t,null}_getOrCreateRecordForKey(e,t){if(this._records.has(e)){let r=this._records.get(e);this._maybeAddToChanges(r,t);let o=r._prev,s=r._next;return o&&(o._next=s),s&&(s._prev=o),r._next=null,r._prev=null,r}let i=new Nv(e);return this._records.set(e,i),i.currentValue=t,this._addToAdditions(i),i}_reset(){if(this.isDirty){let e;for(this._previousMapHead=this._mapHead,e=this._previousMapHead;e!==null;e=e._next)e._nextPrevious=e._next;for(e=this._changesHead;e!==null;e=e._nextChanged)e.previousValue=e.currentValue;for(e=this._additionsHead;e!=null;e=e._nextAdded)e.previousValue=e.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(e,t){Object.is(t,e.currentValue)||(e.previousValue=e.currentValue,e.currentValue=t,this._addToChanges(e))}_addToAdditions(e){this._additionsHead===null?this._additionsHead=this._additionsTail=e:(this._additionsTail._nextAdded=e,this._additionsTail=e)}_addToChanges(e){this._changesHead===null?this._changesHead=this._changesTail=e:(this._changesTail._nextChanged=e,this._changesTail=e)}_forEach(e,t){e instanceof Map?e.forEach(t):Object.keys(e).forEach(i=>t(e[i],i))}},Nv=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(e){this.key=e}};function pE(){return new Ov([new Iv])}var Ov=(()=>{class n{static \u0275prov=Ge({token:n,providedIn:"root",factory:pE});factories;constructor(t){this.factories=t}static create(t,i){if(i){let r=i.factories.slice();t=t.concat(r)}return new n(t)}static extend(t){return{provide:n,useFactory:()=>{let i=ue(n,{optional:!0,skipSelf:!0});return n.create(t,i||pE())}}}find(t){let i=this.factories.find(r=>r.supports(t));if(i)return i;throw new De(901,!1)}}return n})();function yE(n){let{rootComponent:e,appProviders:t,platformProviders:i,platformRef:r}=n;Tt(pt.BootstrapApplicationStart);try{let o=r?.injector??BR(i),s=[fE(),Vx,...t||[]],a=new Pc({providers:s,parent:o,debugName:"",runEnvironmentInitializers:!1});return FR({r3Injector:a.injector,platformInjector:o,rootComponent:e})}catch(o){return Promise.reject(o)}finally{Tt(pt.BootstrapApplicationEnd)}}function Fv(n){return typeof n=="boolean"?n:n!=null&&n!=="false"}var _E=null;function Ei(){return _E}function Lv(n){_E??=n}var $c=class{},Xd=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ge({token:n,factory:()=>ue(xE),providedIn:"platform"})}return n})();var xE=(()=>{class n extends Xd{_location;_history;_doc=ue(un);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Ei().getBaseHref(this._doc)}onPopState(t){let i=Ei().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=Ei().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ge({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function EE(n,e){return n?e?n.endsWith("/")?e.startsWith("/")?n+e.slice(1):n+e:e.startsWith("/")?n+e:`${n}/${e}`:n:e}function bE(n){let e=n.search(/#|\?|$/);return n[e-1]==="/"?n.slice(0,e-1)+n.slice(e):n}function ao(n){return n&&n[0]!=="?"?`?${n}`:n}var Yd=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ge({token:n,factory:()=>ue(WR),providedIn:"root"})}return n})(),jR=new Re(""),WR=(()=>{class n extends Yd{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??ue(un).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return EE(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+ao(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,o){let s=this.prepareExternalUrl(r+ao(o));this._platformLocation.pushState(t,i,s)}replaceState(t,i,r,o){let s=this.prepareExternalUrl(r+ao(o));this._platformLocation.replaceState(t,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(et(Xd),et(jR,8))};static \u0275prov=Ge({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var da=(()=>{class n{_subject=new hn;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=XR(bE(SE(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+ao(i))}normalize(t){return n.stripTrailingSlash(qR(this._basePath,SE(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+ao(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+ao(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=ao;static joinWithSlash=EE;static stripTrailingSlash=bE;static \u0275fac=function(i){return new(i||n)(et(Yd))};static \u0275prov=Ge({token:n,factory:()=>$R(),providedIn:"root"})}return n})();function $R(){return new da(et(Yd))}function qR(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function SE(n){return n.replace(/\/index\.html$/,"")}function XR(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}var kv=/\s+/,ME=[],cs=(()=>{class n{_ngEl;_renderer;initialClasses=ME;rawClass;stateMap=new Map;constructor(t,i){this._ngEl=t,this._renderer=i}set klass(t){this.initialClasses=t!=null?t.trim().split(kv):ME}set ngClass(t){this.rawClass=typeof t=="string"?t.trim().split(kv):t}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let t=this.rawClass;if(Array.isArray(t)||t instanceof Set)for(let i of t)this._updateState(i,!0);else if(t!=null)for(let i of Object.keys(t))this._updateState(i,!!t[i]);this._applyStateDiff()}_updateState(t,i){let r=this.stateMap.get(t);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(t,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let t of this.stateMap){let i=t[0],r=t[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(t,i){t=t.trim(),t.length>0&&t.split(kv).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(i){return new(i||n)(zt(io),zt(is))};static \u0275dir=xi({type:n,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return n})();var Uv=(()=>{class n{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(t,i,r){this._ngEl=t,this._differs=i,this._renderer=r}set ngStyle(t){this._ngStyle=t,!this._differ&&t&&(this._differ=this._differs.find(t).create())}ngDoCheck(){if(this._differ){let t=this._differ.diff(this._ngStyle);t&&this._applyChanges(t)}}_setStyle(t,i){let[r,o]=t.split("."),s=r.indexOf("-")===-1?void 0:Vi.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${i}${o}`:i,s):this._renderer.removeStyle(this._ngEl.nativeElement,r,s)}_applyChanges(t){t.forEachRemovedItem(i=>this._setStyle(i.key,null)),t.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),t.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}static \u0275fac=function(i){return new(i||n)(zt(io),zt(Ov),zt(is))};static \u0275dir=xi({type:n,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return n})();var Zd=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=ro({type:n});static \u0275inj=Er({})}return n})();function Bv(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,o]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(o)}return null}var qc=class{};var wE="browser";var Xc=class{_doc;constructor(e){this._doc=e}manager},Jd=(()=>{class n extends Xc{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,o){return t.addEventListener(i,r,o),()=>this.removeEventListener(t,i,r,o)}removeEventListener(t,i,r,o){return t.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||n)(et(un))};static \u0275prov=Ge({token:n,factory:n.\u0275fac})}return n})(),ef=new Re(""),Gv=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(s=>{s.manager=this});let r=t.filter(s=>!(s instanceof Jd));this._plugins=r.slice().reverse();let o=t.find(s=>s instanceof Jd);o&&this._plugins.push(o)}addEventListener(t,i,r,o){return this._findPluginFor(i).addEventListener(t,i,r,o)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(o=>o.supports(t)),!i)throw new De(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(et(ef),et(Jn))};static \u0275prov=Ge({token:n,factory:n.\u0275fac})}return n})(),Vv="ng-app-id";function CE(n){for(let e of n)e.remove()}function TE(n,e){let t=e.createElement("style");return t.textContent=n,t}function ZR(n,e,t,i){let r=n.head?.querySelectorAll(`style[${Vv}="${e}"],link[${Vv}="${e}"]`);if(r)for(let o of r)o.removeAttribute(Vv),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&t.set(o.textContent,{usage:0,elements:[o]})}function zv(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var jv=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,i,r,o={}){this.doc=t,this.appId=i,this.nonce=r,ZR(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,TE);i?.forEach(r=>this.addUsage(r,this.external,zv))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let o=i.get(t);o?o.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(CE(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])CE(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,TE(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,zv(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(et(un),et(Rd),et(Pd,8),et(Lc))};static \u0275prov=Ge({token:n,factory:n.\u0275fac})}return n})(),Hv={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Wv=/%COMP%/g;var AE="%COMP%",JR=`_nghost-${AE}`,KR=`_ngcontent-${AE}`,QR=!0,eN=new Re("",{factory:()=>QR});function tN(n){return KR.replace(Wv,n)}function nN(n){return JR.replace(Wv,n)}function IE(n,e){return e.map(t=>t.replace(Wv,n))}var $v=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(t,i,r,o,s,a,c=null,l=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=c,this.tracingService=l,this.defaultRenderer=new Yc(t,s,a,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(t,i);return r instanceof Qd?r.applyToHost(t):r instanceof Zc&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.tracingService;switch(i.encapsulation){case Bi.Emulated:o=new Qd(c,l,i,this.appId,u,s,a,d);break;case Bi.ShadowDom:return new Kd(c,t,i,s,a,this.nonce,d,l);case Bi.ExperimentalIsolatedShadowDom:return new Kd(c,t,i,s,a,this.nonce,d);default:o=new Zc(c,l,i,u,s,a,d);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(et(Gv),et(jv),et(Rd),et(eN),et(un),et(Jn),et(Pd),et(ca,8))};static \u0275prov=Ge({token:n,factory:n.\u0275fac})}return n})(),Yc=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Hv[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(DE(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(DE(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new De(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let o=Hv[r];o?e.setAttributeNS(o,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Hv[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(Vi.DashCase|Vi.Important)?e.style.setProperty(t,i,r&Vi.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&Vi.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=Ei().getGlobalEventTarget(this.doc,e),!e))throw new De(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(e,t,o)),this.eventManager.addEventListener(e,t,o,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;e(t)===!1&&t.preventDefault()}}};function DE(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Kd=class extends Yc{hostEl;sharedStylesHost;shadowRoot;constructor(e,t,i,r,o,s,a,c){super(e,r,o,a),this.hostEl=t,this.sharedStylesHost=c,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=i.styles;l=IE(i.id,l);for(let d of l){let f=document.createElement("style");s&&f.setAttribute("nonce",s),f.textContent=d,this.shadowRoot.appendChild(f)}let u=i.getExternalStyles?.();if(u)for(let d of u){let f=zv(d,r);s&&f.setAttribute("nonce",s),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Zc=class extends Yc{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,o,s,a,c){super(e,o,s,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let l=i.styles;this.styles=c?IE(c,l):l,this.styleUrls=i.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Zo.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Qd=class extends Zc{contentAttr;hostAttr;constructor(e,t,i,r,o,s,a,c){let l=r+"-"+i.id;super(e,t,i,o,s,a,c,l),this.contentAttr=tN(l),this.hostAttr=nN(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}};var tf=class n extends $c{supportsDOMEvents=!0;static makeCurrent(){Lv(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=iN();return t==null?null:rN(t)}resetBaseElement(){Jc=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Bv(document.cookie,e)}},Jc=null;function iN(){return Jc=Jc||document.head.querySelector("base"),Jc?Jc.getAttribute("href"):null}function rN(n){return new URL(n,document.baseURI).pathname}var oN=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ge({token:n,factory:n.\u0275fac})}return n})(),RE=["alt","control","meta","shift"],sN={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},aN={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},NE=(()=>{class n extends Xc{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,o){let s=n.parseEventName(i),a=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ei().onAndCancel(t,s.domEventName,a,o))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(i.pop()),s="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),s="code."),RE.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),s+=l+".")}),s+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=s,c}static matchEventFullKeyCode(t,i){let r=sN[t.key]||t.key,o="";return i.indexOf("code.")>-1&&(r=t.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),RE.forEach(s=>{if(s!==r){let a=aN[s];a(t)&&(o+=s+".")}}),o+=r,o===i)}static eventCallback(t,i,r){return o=>{n.matchEventFullKeyCode(o,t)&&r.runGuarded(()=>i(o))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(et(un))};static \u0275prov=Ge({token:n,factory:n.\u0275fac})}return n})();async function qv(n,e,t){let i=re({rootComponent:n},cN(e,t));return yE(i)}function cN(n,e){return{platformRef:e?.platformRef,appProviders:[...hN,...n?.providers??[]],platformProviders:fN}}function lN(){tf.makeCurrent()}function uN(){return new Sr}function dN(){return ev(document),document}var fN=[{provide:Lc,useValue:wE},{provide:Nd,useValue:lN,multi:!0},{provide:un,useFactory:dN}];var hN=[{provide:yc,useValue:"root"},{provide:Sr,useFactory:uN},{provide:ef,useClass:Jd,multi:!0},{provide:ef,useClass:NE,multi:!0},$v,jv,Gv,{provide:Ko,useExisting:$v},{provide:qc,useClass:oN},[]];var PE=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(et(un))};static \u0275prov=Ge({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ye="primary",ll=Symbol("RouteTitle"),Kv=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function ma(n){return new Kv(n)}function Xv(n,e,t){for(let i=0;i<n.length;i++){let r=n[i],o=e[i];if(r[0]===":")t[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function mN(n,e,t){let i=t.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let c={},l=n.slice(0,i.length);return Xv(i,l,c)?{consumed:l,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),s=i.slice(r+1);if(o.length+s.length>n.length||t.pathMatch==="full"&&e.hasChildren()&&t.path!=="**")return null;let a={};return!Xv(o,n.slice(0,o.length),a)||!Xv(s,n.slice(n.length-s.length),a)?null:{consumed:n,posParams:a}}function cf(n){return new Promise((e,t)=>{n.pipe(xr()).subscribe({next:i=>e(i),error:i=>t(i)})})}function gN(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!rr(n[t],e[t]))return!1;return!0}function rr(n,e){let t=n?Qv(n):void 0,i=e?Qv(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let o=0;o<t.length;o++)if(r=t[o],!HE(n[r],e[r]))return!1;return!0}function Qv(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function HE(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,o)=>i[o]===r)}else return n===e}function vN(n){return n.length>0?n[n.length-1]:null}function hs(n){return Ru(n)?n:oo(n)?qt(Promise.resolve(n)):at(n)}function zE(n){return Ru(n)?cf(n):Promise.resolve(n)}var yN={exact:WE,subset:$E},GE={exact:_N,subset:xN,ignored:()=>!0},jE={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},ey={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function OE(n,e,t){return yN[t.paths](n.root,e.root,t.matrixParams)&&GE[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function _N(n,e){return rr(n,e)}function WE(n,e,t){if(!us(n.segments,e.segments)||!of(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!WE(n.children[i],e.children[i],t))return!1;return!0}function xN(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>HE(n[t],e[t]))}function $E(n,e,t){return qE(n,e,e.segments,t)}function qE(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!us(r,t)||e.hasChildren()||!of(r,t,i))}else if(n.segments.length===t.length){if(!us(n.segments,t)||!of(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!$E(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),o=t.slice(n.segments.length);return!us(n.segments,r)||!of(n.segments,r,i)||!n.children[Ye]?!1:qE(n.children[Ye],e,o,i)}}function of(n,e,t){return e.every((i,r)=>GE[t](n[r].parameters,i.parameters))}var Gi=class{root;queryParams;fragment;_queryParamMap;constructor(e=new xt([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=ma(this.queryParams),this._queryParamMap}toString(){return EN.serialize(this)}},xt=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return sf(this)}},ls=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=ma(this.parameters),this._parameterMap}toString(){return YE(this)}};function bN(n,e){return us(n,e)&&n.every((t,i)=>rr(t.parameters,e[i].parameters))}function us(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function SN(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Ye&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Ye&&(t=t.concat(e(r,i)))}),t}var yf=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ge({token:n,factory:()=>new ds,providedIn:"root"})}return n})(),ds=class{parse(e){let t=new ny(e);return new Gi(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Kc(e.root,!0)}`,i=CN(e.queryParams),r=typeof e.fragment=="string"?`#${MN(e.fragment)}`:"";return`${t}${i}${r}`}},EN=new ds;function sf(n){return n.segments.map(e=>YE(e)).join("/")}function Kc(n,e){if(!n.hasChildren())return sf(n);if(e){let t=n.children[Ye]?Kc(n.children[Ye],!1):"",i=[];return Object.entries(n.children).forEach(([r,o])=>{r!==Ye&&i.push(`${r}:${Kc(o,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=SN(n,(i,r)=>r===Ye?[Kc(n.children[Ye],!1)]:[`${r}:${Kc(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Ye]!=null?`${sf(n)}/${t[0]}`:`${sf(n)}/(${t.join("//")})`}}function XE(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function nf(n){return XE(n).replace(/%3B/gi,";")}function MN(n){return encodeURI(n)}function ty(n){return XE(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function af(n){return decodeURIComponent(n)}function FE(n){return af(n.replace(/\+/g,"%20"))}function YE(n){return`${ty(n.path)}${wN(n.parameters)}`}function wN(n){return Object.entries(n).map(([e,t])=>`;${ty(e)}=${ty(t)}`).join("")}function CN(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${nf(t)}=${nf(r)}`).join("&"):`${nf(t)}=${nf(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var TN=/^[^\/()?;#]+/;function Yv(n){let e=n.match(TN);return e?e[0]:""}var DN=/^[^\/()?;=#]+/;function AN(n){let e=n.match(DN);return e?e[0]:""}var IN=/^[^=?&#]+/;function RN(n){let e=n.match(IN);return e?e[0]:""}var NN=/^[^&#]+/;function PN(n){let e=n.match(NN);return e?e[0]:""}var ny=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new xt([],{}):new xt([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(e=0){if(e>50)throw new De(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,e));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,e)),(t.length>0||Object.keys(i).length>0)&&(r[Ye]=new xt(t,i)),r}parseSegment(){let e=Yv(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new De(4009,!1);return this.capture(e),new ls(af(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=AN(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Yv(this.remaining);r&&(i=r,this.capture(i))}e[af(t)]=af(i)}parseQueryParam(e){let t=RN(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let s=PN(this.remaining);s&&(i=s,this.capture(i))}let r=FE(t),o=FE(i);if(e.hasOwnProperty(r)){let s=e[r];Array.isArray(s)||(s=[s],e[r]=s),s.push(o)}else e[r]=o}parseParens(e,t){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Yv(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new De(4010,!1);let s;r.indexOf(":")>-1?(s=r.slice(0,r.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Ye);let a=this.parseChildren(t+1);i[s??Ye]=Object.keys(a).length===1&&a[Ye]?a[Ye]:new xt([],a),this.consumeOptional("//")}return i}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new De(4011,!1)}};function ZE(n){return n.segments.length>0?new xt([],{[Ye]:n}):n}function JE(n){let e={};for(let[i,r]of Object.entries(n.children)){let o=JE(r);if(i===Ye&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))e[s]=a;else(o.segments.length>0||o.hasChildren())&&(e[i]=o)}let t=new xt(n.segments,e);return ON(t)}function ON(n){if(n.numberOfChildren===1&&n.children[Ye]){let e=n.children[Ye];return new xt(n.segments.concat(e.segments),e.children)}return n}function ga(n){return n instanceof Gi}function FN(n,e,t=null,i=null,r=new ds){let o=KE(n);return QE(o,e,t,i,r)}function KE(n){let e;function t(o){let s={};for(let c of o.children){let l=t(c);s[c.outlet]=l}let a=new xt(o.url,s);return o===n&&(e=a),a}let i=t(n.root),r=ZE(i);return e??r}function QE(n,e,t,i,r){let o=n;for(;o.parent;)o=o.parent;if(e.length===0)return Zv(o,o,o,t,i,r);let s=LN(e);if(s.toRoot())return Zv(o,o,new xt([],{}),t,i,r);let a=kN(s,o,n),c=a.processChildren?el(a.segmentGroup,a.index,s.commands):tM(a.segmentGroup,a.index,s.commands);return Zv(o,a.segmentGroup,c,t,i,r)}function lf(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function il(n){return typeof n=="object"&&n!=null&&n.outlets}function LE(n,e,t){n||="\u0275";let i=new Gi;return i.queryParams={[n]:e},t.parse(t.serialize(i)).queryParams[n]}function Zv(n,e,t,i,r,o){let s={};for(let[l,u]of Object.entries(i??{}))s[l]=Array.isArray(u)?u.map(d=>LE(l,d,o)):LE(l,u,o);let a;n===e?a=t:a=eM(n,e,t);let c=ZE(JE(a));return new Gi(c,s,r)}function eM(n,e,t){let i={};return Object.entries(n.children).forEach(([r,o])=>{o===e?i[r]=t:i[r]=eM(o,e,t)}),new xt(n.segments,i)}var uf=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&lf(i[0]))throw new De(4003,!1);let r=i.find(il);if(r&&r!==vN(i))throw new De(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function LN(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new uf(!0,0,n);let e=0,t=!1,i=n.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,o]},[]);return new uf(t,e,i)}var ha=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function kN(n,e,t){if(n.isAbsolute)return new ha(e,!0,0);if(!t)return new ha(e,!1,NaN);if(t.parent===null)return new ha(t,!0,0);let i=lf(n.commands[0])?0:1,r=t.segments.length-1+i;return UN(t,r,n.numberOfDoubleDots)}function UN(n,e,t){let i=n,r=e,o=t;for(;o>r;){if(o-=r,i=i.parent,!i)throw new De(4005,!1);r=i.segments.length}return new ha(i,!1,r-o)}function BN(n){return il(n[0])?n[0].outlets:{[Ye]:n}}function tM(n,e,t){if(n??=new xt([],{}),n.segments.length===0&&n.hasChildren())return el(n,e,t);let i=VN(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let o=new xt(n.segments.slice(0,i.pathIndex),{});return o.children[Ye]=new xt(n.segments.slice(i.pathIndex),n.children),el(o,0,r)}else return i.match&&r.length===0?new xt(n.segments,{}):i.match&&!n.hasChildren()?iy(n,e,t):i.match?el(n,0,r):iy(n,e,t)}function el(n,e,t){if(t.length===0)return new xt(n.segments,{});{let i=BN(t),r={};if(Object.keys(i).some(o=>o!==Ye)&&n.children[Ye]&&n.numberOfChildren===1&&n.children[Ye].segments.length===0){let o=el(n.children[Ye],e,t);return new xt(n.segments,o.children)}return Object.entries(i).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=tM(n.children[o],e,s))}),Object.entries(n.children).forEach(([o,s])=>{i[o]===void 0&&(r[o]=s)}),new xt(n.segments,r)}}function VN(n,e,t){let i=0,r=e,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return o;let s=n.segments[r],a=t[i];if(il(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!UE(c,l,s))return o;i+=2}else{if(!UE(c,{},s))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function iy(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let o=t[r];if(il(o)){let c=HN(o.outlets);return new xt(i,c)}if(r===0&&lf(t[0])){let c=n.segments[e];i.push(new ls(c.path,kE(t[0]))),r++;continue}let s=il(o)?o.outlets[Ye]:`${o}`,a=r<t.length-1?t[r+1]:null;s&&a&&lf(a)?(i.push(new ls(s,kE(a))),r+=2):(i.push(new ls(s,{})),r++)}return new xt(i,{})}function HN(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=iy(new xt([],{}),0,i))}),e}function kE(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function UE(n,e,t){return n==t.path&&rr(e,t.parameters)}var tl="imperative",wn=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(wn||{}),Mi=class{id;url;constructor(e,t){this.id=e,this.url=t}},va=class extends Mi{type=wn.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},co=class extends Mi{urlAfterRedirects;type=wn.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Hn=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(Hn||{}),df=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(df||{}),Hi=class extends Mi{reason;code;type=wn.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function nM(n){return n instanceof Hi&&(n.code===Hn.Redirect||n.code===Hn.SupersededByNewNavigation)}var lo=class extends Mi{reason;code;type=wn.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},ya=class extends Mi{error;target;type=wn.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},ff=class extends Mi{urlAfterRedirects;state;type=wn.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ry=class extends Mi{urlAfterRedirects;state;type=wn.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},oy=class extends Mi{urlAfterRedirects;state;shouldActivate;type=wn.GuardsCheckEnd;constructor(e,t,i,r,o){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},sy=class extends Mi{urlAfterRedirects;state;type=wn.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ay=class extends Mi{urlAfterRedirects;state;type=wn.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},cy=class{route;type=wn.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},ly=class{route;type=wn.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},uy=class{snapshot;type=wn.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},dy=class{snapshot;type=wn.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},fy=class{snapshot;type=wn.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},hy=class{snapshot;type=wn.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var _a=class{},rl=class{},xa=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function zN(n){return!(n instanceof _a)&&!(n instanceof xa)&&!(n instanceof rl)}var py=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new ul(this.rootInjector)}},ul=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new py(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(et(ln))};static \u0275prov=Ge({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),hf=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=my(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=my(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=gy(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return gy(e,this._root).map(t=>t.value)}};function my(n,e){if(n===e.value)return e;for(let t of e.children){let i=my(n,t);if(i)return i}return null}function gy(n,e){if(n===e.value)return[e];for(let t of e.children){let i=gy(n,t);if(i.length)return i.unshift(e),i}return[]}var ni=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function fa(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var pf=class extends hf{snapshot;constructor(e,t){super(e),this.snapshot=t,Cy(this,e)}toString(){return this.snapshot.toString()}};function iM(n,e){let t=GN(n,e),i=new xn([new ls("",{})]),r=new xn({}),o=new xn({}),s=new xn({}),a=new xn(""),c=new fs(i,r,s,a,o,Ye,n,t.root);return c.snapshot=t.root,new pf(new ni(c,[]),t)}function GN(n,e){let t={},i={},r={},s=new ol([],t,r,"",i,Ye,n,null,{},e);return new mf("",new ni(s,[]))}var fs=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,o,s,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(Vt(l=>l[ll]))??at(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Vt(e=>ma(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Vt(e=>ma(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function wy(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:re(re({},e.params),n.params),data:re(re({},e.data),n.data),resolve:re(re(re(re({},n.data),e.data),r?.data),n._resolvedData)}:i={params:re({},n.params),data:re({},n.data),resolve:re(re({},n.data),n._resolvedData??{})},r&&oM(r)&&(i.resolve[ll]=r.title),i}var ol=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[ll]}constructor(e,t,i,r,o,s,a,c,l,u){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.routeConfig=c,this._resolve=l,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ma(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ma(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},mf=class extends hf{url;constructor(e,t){super(t),this.url=e,Cy(this,t)}toString(){return rM(this._root)}};function Cy(n,e){e.value._routerState=n,e.children.forEach(t=>Cy(n,t))}function rM(n){let e=n.children.length>0?` { ${n.children.map(rM).join(", ")} } `:"";return`${n.value}${e}`}function Jv(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,rr(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),rr(e.params,t.params)||n.paramsSubject.next(t.params),gN(e.url,t.url)||n.urlSubject.next(t.url),rr(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function vy(n,e){let t=rr(n.params,e.params)&&bN(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||vy(n.parent,e.parent))}function oM(n){return typeof n.title=="string"||n.title===null}var jN=new Re(""),sM=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=Ye;activateEvents=new cn;deactivateEvents=new cn;attachEvents=new cn;detachEvents=new cn;routerOutletData=vE();parentContexts=ue(ul);location=ue(Bc);changeDetector=ue(Wc);inputBinder=ue(_f,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new De(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new De(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new De(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new De(4013,!1);this._activatedRoute=t;let r=this.location,s=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new yy(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=xi({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[oa]})}return n})(),yy=class{route;childContexts;parent;outletData;constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===fs?this.route:e===ul?this.childContexts:e===jN?this.outletData:this.parent.get(e,t)}},_f=new Re("");var aM=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Gt({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&Dt(0,"router-outlet")},dependencies:[sM],encapsulation:2})}return n})();function Ty(n){let e=n.children&&n.children.map(Ty),t=e?st(re({},n),{children:e}):re({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Ye&&(t.component=aM),t}function WN(n,e,t){let i=sl(n,e._root,t?t._root:void 0);return new pf(i,e)}function sl(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=$N(n,e,t);return new ni(i,r)}else{if(n.shouldAttach(e.value)){let o=n.retrieve(e.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=e.value,s.children=e.children.map(a=>sl(n,a)),s}}let i=qN(e.value),r=e.children.map(o=>sl(n,o));return new ni(i,r)}}function $N(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return sl(n,i,r);return sl(n,i)})}function qN(n){return new fs(new xn(n.url),new xn(n.params),new xn(n.queryParams),new xn(n.fragment),new xn(n.data),n.outlet,n.component,n)}var al=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},cM="ngNavigationCancelingError";function gf(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=ga(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=lM(!1,Hn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function lM(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[cM]=!0,t.cancellationCode=e,t}function XN(n){return uM(n)&&ga(n.url)}function uM(n){return!!n&&n[cM]}var _y=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,o){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),Jv(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=fa(t);e.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],i),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(e,t,i){let r=e.value,o=t?t.value:null;if(r===o)if(r.component){let s=i.getContext(r.outlet);s&&this.deactivateChildRoutes(e,t,s.children)}else this.deactivateChildRoutes(e,t,i);else o&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,o=fa(e);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(i&&i.outlet){let s=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:s,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,o=fa(e);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=fa(t);e.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new hy(o.value.snapshot))}),e.children.length&&this.forwardEvent(new dy(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,o=t?t.value:null;if(Jv(r),r===o)if(r.component){let s=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,s.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let s=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Jv(a.route.value),this.activateChildRoutes(e,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(e,null,s.children)}else this.activateChildRoutes(e,null,i)}},vf=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},pa=class{component;route;constructor(e,t){this.component=e,this.route=t}};function YN(n,e,t){let i=n._root,r=e?e._root:null;return Qc(i,r,t,[i.value])}function ZN(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function Sa(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!Sm(n)?n:e.get(n):i}function Qc(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=fa(e);return n.children.forEach(s=>{JN(s,o[s.value.outlet],t,i.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>nl(a,t.getContext(s),r)),r}function JN(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,s=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let c=KN(s,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new vf(i)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?Qc(n,e,a?a.children:null,i,r):Qc(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new pa(a.outlet.component,s))}else s&&nl(e,a,r),r.canActivateChecks.push(new vf(i)),o.component?Qc(n,null,a?a.children:null,i,r):Qc(n,null,t,i,r);return r}function KN(n,e,t){if(typeof t=="function")return In(e._environmentInjector,()=>t(n,e));switch(t){case"pathParamsChange":return!us(n.url,e.url);case"pathParamsOrQueryParamsChange":return!us(n.url,e.url)||!rr(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!vy(n,e)||!rr(n.queryParams,e.queryParams);default:return!vy(n,e)}}function nl(n,e,t){let i=fa(n),r=n.value;Object.entries(i).forEach(([o,s])=>{r.component?e?nl(s,e.children.getContext(o),t):nl(s,null,t):nl(s,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new pa(e.outlet.component,r)):t.canDeactivateChecks.push(new pa(null,r)):t.canDeactivateChecks.push(new pa(null,r))}function dl(n){return typeof n=="function"}function QN(n){return typeof n=="boolean"}function eP(n){return n&&dl(n.canLoad)}function tP(n){return n&&dl(n.canActivate)}function nP(n){return n&&dl(n.canActivateChild)}function iP(n){return n&&dl(n.canDeactivate)}function rP(n){return n&&dl(n.canMatch)}function dM(n){return n instanceof Po||n?.name==="EmptyError"}var rf=Symbol("INITIAL_VALUE");function ba(){return Ri(n=>nm(n.map(e=>e.pipe(_r(1),om(rf)))).pipe(Vt(e=>{for(let t of e)if(t!==!0){if(t===rf)return rf;if(t===!1||oP(t))return t}return!0}),yr(e=>e!==rf),_r(1)))}function oP(n){return ga(n)||n instanceof al}function fM(n){return n.aborted?at(void 0).pipe(_r(1)):new ft(e=>{let t=()=>{e.next(),e.complete()};return n.addEventListener("abort",t),()=>n.removeEventListener("abort",t)})}function hM(n){return sc(fM(n))}function sP(n){return Un(e=>{let{targetSnapshot:t,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=e;return o.length===0&&r.length===0?at(st(re({},e),{guardsResult:!0})):aP(o,t,i).pipe(Un(s=>s&&QN(s)?cP(t,r,n):at(s)),Vt(s=>st(re({},e),{guardsResult:s})))})}function aP(n,e,t){return qt(n).pipe(Un(i=>hP(i.component,i.route,t,e)),xr(i=>i!==!0,!0))}function cP(n,e,t){return qt(e).pipe(Fu(i=>Hs(uP(i.route.parent,t),lP(i.route,t),fP(n,i.path),dP(n,i.route))),xr(i=>i!==!0,!0))}function lP(n,e){return n!==null&&e&&e(new fy(n)),at(!0)}function uP(n,e){return n!==null&&e&&e(new uy(n)),at(!0)}function dP(n,e){let t=e.routeConfig?e.routeConfig.canActivate:null;if(!t||t.length===0)return at(!0);let i=t.map(r=>rc(()=>{let o=e._environmentInjector,s=Sa(r,o),a=tP(s)?s.canActivate(e,n):In(o,()=>s(e,n));return hs(a).pipe(xr())}));return at(i).pipe(ba())}function fP(n,e){let t=e[e.length-1],r=e.slice(0,e.length-1).reverse().map(o=>ZN(o)).filter(o=>o!==null).map(o=>rc(()=>{let s=o.guards.map(a=>{let c=o.node._environmentInjector,l=Sa(a,c),u=nP(l)?l.canActivateChild(t,n):In(c,()=>l(t,n));return hs(u).pipe(xr())});return at(s).pipe(ba())}));return at(r).pipe(ba())}function hP(n,e,t,i){let r=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!r||r.length===0)return at(!0);let o=r.map(s=>{let a=e._environmentInjector,c=Sa(s,a),l=iP(c)?c.canDeactivate(n,e,t,i):In(a,()=>c(n,e,t,i));return hs(l).pipe(xr())});return at(o).pipe(ba())}function pP(n,e,t,i,r){let o=e.canLoad;if(o===void 0||o.length===0)return at(!0);let s=o.map(a=>{let c=Sa(a,n),l=eP(c)?c.canLoad(e,t):In(n,()=>c(e,t)),u=hs(l);return r?u.pipe(hM(r)):u});return at(s).pipe(ba(),pM(i))}function pM(n){return Kp(fi(e=>{if(typeof e!="boolean")throw gf(n,e)}),Vt(e=>e===!0))}function mP(n,e,t,i,r,o){let s=e.canMatch;if(!s||s.length===0)return at(!0);let a=s.map(c=>{let l=Sa(c,n),u=rP(l)?l.canMatch(e,t,r):In(n,()=>l(e,t,r));return hs(u).pipe(hM(o))});return at(a).pipe(ba(),pM(i))}var Or=class n extends Error{segmentGroup;constructor(e){super(),this.segmentGroup=e||null,Object.setPrototypeOf(this,n.prototype)}},cl=class n extends Error{urlTree;constructor(e){super(),this.urlTree=e,Object.setPrototypeOf(this,n.prototype)}};function gP(n){throw new De(4e3,!1)}function vP(n){throw lM(!1,Hn.GuardRejected)}var xy=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}async lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[Ye])throw gP(`${e.redirectTo}`);r=r.children[Ye]}}async applyRedirectCommands(e,t,i,r,o){let s=await yP(t,r,o);if(s instanceof Gi)throw new cl(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),e,i);if(s[0]==="/")throw new cl(a);return a}applyRedirectCreateUrlTree(e,t,i,r){let o=this.createSegmentGroup(e,t.root,i,r);return new Gi(o,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);i[r]=t[a]}else i[r]=o}),i}createSegmentGroup(e,t,i,r){let o=this.createSegments(e,t.segments,i,r),s={};return Object.entries(t.children).forEach(([a,c])=>{s[a]=this.createSegmentGroup(e,c,i,r)}),new xt(o,s)}createSegments(e,t,i,r){return t.map(o=>o.path[0]===":"?this.findPosParam(e,o,r):this.findOrReturn(o,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new De(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}};function yP(n,e,t){if(typeof n=="string")return Promise.resolve(n);let i=n;return cf(hs(In(t,()=>i(e))))}function _P(n,e){return n.providers&&!n._injector&&(n._injector=Vc(n.providers,e,`Route: ${n.path}`)),n._injector??e}function zi(n){return n.outlet||Ye}function xP(n,e){let t=n.filter(i=>zi(i)===e);return t.push(...n.filter(i=>zi(i)!==e)),t}var by={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function mM(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function bP(n,e,t,i,r,o,s){let a=gM(n,e,t);if(!a.matched)return at(a);let c=mM(o(a));return i=_P(e,i),mP(i,e,t,r,c,s).pipe(Vt(l=>l===!0?a:re({},by)))}function gM(n,e,t){if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?re({},by):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||mN)(t,n,e);if(!r)return re({},by);let o={};Object.entries(r.posParams??{}).forEach(([a,c])=>{o[a]=c.path});let s=r.consumed.length>0?re(re({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function BE(n,e,t,i,r){return t.length>0&&MP(n,t,i,r)?{segmentGroup:new xt(e,EP(i,new xt(t,n.children))),slicedSegments:[]}:t.length===0&&wP(n,t,i)?{segmentGroup:new xt(n.segments,SP(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new xt(n.segments,n.children),slicedSegments:t}}function SP(n,e,t,i){let r={};for(let o of t)if(xf(n,e,o)&&!i[zi(o)]){let s=new xt([],{});r[zi(o)]=s}return re(re({},i),r)}function EP(n,e){let t={};t[Ye]=e;for(let i of n)if(i.path===""&&zi(i)!==Ye){let r=new xt([],{});t[zi(i)]=r}return t}function MP(n,e,t,i){return t.some(r=>!xf(n,e,r)||!(zi(r)!==Ye)?!1:!(i!==void 0&&zi(r)===i))}function wP(n,e,t){return t.some(i=>xf(n,e,i))}function xf(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function CP(n,e,t){return e.length===0&&!n.children[t]}var Sy=class{};async function TP(n,e,t,i,r,o,s="emptyOnly",a){return new Ey(n,e,t,i,r,s,o,a).recognize()}var DP=31,Ey=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,o,s,a,c){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=c,this.applyRedirects=new xy(this.urlSerializer,this.urlTree)}noMatchError(e){return new De(4002,`'${e.segmentGroup}'`)}async recognize(){let e=BE(this.urlTree.root,[],[],this.config).segmentGroup,{children:t,rootSnapshot:i}=await this.match(e),r=new ni(i,t),o=new mf("",r),s=FN(i,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}async match(e){let t=new ol([],Object.freeze({}),Object.freeze(re({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Ye,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,e,Ye,t),rootSnapshot:t}}catch(i){if(i instanceof cl)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Or?this.noMatchError(i):i}}async processSegmentGroup(e,t,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(e,t,i,o);let s=await this.processSegment(e,t,i,i.segments,r,!0,o);return s instanceof ni?[s]:[]}async processChildren(e,t,i,r){let o=[];for(let c of Object.keys(i.children))c==="primary"?o.unshift(c):o.push(c);let s=[];for(let c of o){let l=i.children[c],u=xP(t,c),d=await this.processSegmentGroup(e,u,l,c,r);s.push(...d)}let a=vM(s);return AP(a),a}async processSegment(e,t,i,r,o,s,a){for(let c of t)try{return await this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,o,s,a)}catch(l){if(l instanceof Or||dM(l))continue;throw l}if(CP(i,r,o))return new Sy;throw new Or(i)}async processSegmentAgainstRoute(e,t,i,r,o,s,a,c){if(zi(i)!==s&&(s===Ye||!xf(r,o,i)))throw new Or(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(e,r,i,o,s,c);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,o,s,c);throw new Or(r)}async expandSegmentAgainstRouteUsingRedirect(e,t,i,r,o,s,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:f}=gM(t,r,o);if(!c)throw new Or(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>DP&&(this.allowRedirects=!1));let h=this.createSnapshot(e,r,o,l,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let g=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,mM(h),e),x=await this.applyRedirects.lineralizeSegments(r,g);return this.processSegment(e,i,t,x.concat(f),s,!1,a)}createSnapshot(e,t,i,r,o){let s=new ol(i,r,Object.freeze(re({},this.urlTree.queryParams)),this.urlTree.fragment,RP(t),zi(t),t.component??t._loadedComponent??null,t,NP(t),e),a=wy(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}async matchSegmentAgainstRoute(e,t,i,r,o,s){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=E=>this.createSnapshot(e,i,E.consumedSegments,E.parameters,s),c=await cf(bP(t,i,r,e,this.urlSerializer,a,this.abortSignal));if(i.path==="**"&&(t.children={}),!c?.matched)throw new Or(t);e=i._injector??e;let{routes:l}=await this.getChildConfig(e,i,r),u=i._loadedInjector??e,{parameters:d,consumedSegments:f,remainingSegments:h}=c,g=this.createSnapshot(e,i,f,d,s),{segmentGroup:x,slicedSegments:m}=BE(t,f,h,l,o);if(m.length===0&&x.hasChildren()){let E=await this.processChildren(u,l,x,g);return new ni(g,E)}if(l.length===0&&m.length===0)return new ni(g,[]);let p=zi(i)===o,b=await this.processSegment(u,l,x,m,p?Ye:o,!0,g);return new ni(g,b instanceof ni?[b]:[])}async getChildConfig(e,t,i){if(t.children)return{routes:t.children,injector:e};if(t.loadChildren){if(t._loadedRoutes!==void 0){let o=t._loadedNgModuleFactory;return o&&!t._loadedInjector&&(t._loadedInjector=o.create(e).injector),{routes:t._loadedRoutes,injector:t._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await cf(pP(e,t,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(e,t);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}throw vP(t)}return{routes:[],injector:e}}};function AP(n){n.sort((e,t)=>e.value.outlet===Ye?-1:t.value.outlet===Ye?1:e.value.outlet.localeCompare(t.value.outlet))}function IP(n){let e=n.value.routeConfig;return e&&e.path===""}function vM(n){let e=[],t=new Set;for(let i of n){if(!IP(i)){e.push(i);continue}let r=e.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=vM(i.children);e.push(new ni(i.value,r))}return e.filter(i=>!t.has(i))}function RP(n){return n.data||{}}function NP(n){return n.resolve||{}}function PP(n,e,t,i,r,o,s){return Un(async a=>{let{state:c,tree:l}=await TP(n,e,t,i,a.extractedUrl,r,o,s);return st(re({},a),{targetSnapshot:c,urlAfterRedirects:l})})}function OP(n){return Un(e=>{let{targetSnapshot:t,guards:{canActivateChecks:i}}=e;if(!i.length)return at(e);let r=new Set(i.map(a=>a.route)),o=new Set;for(let a of r)if(!o.has(a))for(let c of yM(a))o.add(c);let s=0;return qt(o).pipe(Fu(a=>r.has(a)?FP(a,t,n):(a.data=wy(a,a.parent,n).resolve,at(void 0))),fi(()=>s++),Lu(1),Un(a=>s===o.size?at(e):bn))})}function yM(n){let e=n.children.map(t=>yM(t)).flat();return[n,...e]}function FP(n,e,t){let i=n.routeConfig,r=n._resolve;return i?.title!==void 0&&!oM(i)&&(r[ll]=i.title),rc(()=>(n.data=wy(n,n.parent,t).resolve,LP(r,n,e).pipe(Vt(o=>(n._resolvedData=o,n.data=re(re({},n.data),o),null)))))}function LP(n,e,t){let i=Qv(n);if(i.length===0)return at({});let r={};return qt(i).pipe(Un(o=>kP(n[o],e,t).pipe(xr(),fi(s=>{if(s instanceof al)throw gf(new ds,s);r[o]=s}))),Lu(1),Vt(()=>r),oc(o=>dM(o)?bn:tm(o)))}function kP(n,e,t){let i=e._environmentInjector,r=Sa(n,i),o=r.resolve?r.resolve(e,t):In(i,()=>r(e,t));return hs(o)}function VE(n){return Ri(e=>{let t=n(e);return t?qt(t).pipe(Vt(()=>e)):at(e)})}var _M=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===Ye);return i}getResolvedTitleForRoute(t){return t.data[ll]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ge({token:n,factory:()=>ue(UP),providedIn:"root"})}return n})(),UP=(()=>{class n extends _M{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(et(PE))};static \u0275prov=Ge({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),bf=new Re("",{factory:()=>({})}),Sf=new Re(""),xM=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=ue(Dv);async loadComponent(t,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await zE(In(t,()=>i.loadComponent())),s=await SM(bM(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=s,s}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await BP(i,this.compiler,t,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ge({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();async function BP(n,e,t,i){let r=await zE(In(t,()=>n.loadChildren())),o=await SM(bM(r)),s;o instanceof zd||Array.isArray(o)?s=o:s=await e.compileModuleAsync(o),i&&i(n);let a,c,l=!1,u;return Array.isArray(s)?(c=s,l=!0):(a=s.create(t).injector,u=s,c=a.get(Sf,[],{optional:!0,self:!0}).flat()),{routes:c.map(Ty),injector:a,factory:u}}function VP(n){return n&&typeof n=="object"&&"default"in n}function bM(n){return VP(n)?n.default:n}async function SM(n){return n}var Dy=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ge({token:n,factory:()=>ue(HP),providedIn:"root"})}return n})(),HP=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ge({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),EM=new Re("");var zP=()=>{},MM=new Re(""),wM=(()=>{class n{currentNavigation=on(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=on(null);events=new hn;transitionAbortWithErrorSubject=new hn;configLoader=ue(xM);environmentInjector=ue(ln);destroyRef=ue(Ar);urlSerializer=ue(yf);rootContexts=ue(ul);location=ue(da);inputBindingEnabled=ue(_f,{optional:!0})!==null;titleStrategy=ue(_M);options=ue(bf,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=ue(Dy);createViewTransition=ue(EM,{optional:!0});navigationErrorHandler=ue(MM,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>at(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new cy(r)),i=r=>this.events.next(new ly(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;Pn(()=>{this.transitions?.next(st(re({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(t){return this.transitions=new xn(null),this.transitions.pipe(yr(i=>i!==null),Ri(i=>{let r=!1,o=new AbortController,s=()=>!r&&this.currentTransition?.id===i.id;return at(i).pipe(Ri(a=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",Hn.SupersededByNewNavigation),bn;this.currentTransition=i;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:c?st(re({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let l=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=a.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!l&&u!=="reload")return this.events.next(new lo(a.id,this.urlSerializer.serialize(a.rawUrl),"",df.IgnoredSameUrlNavigation)),a.resolve(!1),bn;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return at(a).pipe(Ri(d=>(this.events.next(new va(d.id,this.urlSerializer.serialize(d.extractedUrl),d.source,d.restoredState)),d.id!==this.navigationId?bn:Promise.resolve(d))),PP(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),fi(d=>{i.targetSnapshot=d.targetSnapshot,i.urlAfterRedirects=d.urlAfterRedirects,this.currentNavigation.update(f=>(f.finalUrl=d.urlAfterRedirects,f)),this.events.next(new rl)}),Ri(d=>qt(i.routesRecognizeHandler.deferredHandle??at(void 0)).pipe(Vt(()=>d))),fi(()=>{let d=new ff(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(d)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:d,extractedUrl:f,source:h,restoredState:g,extras:x}=a,m=new va(d,this.urlSerializer.serialize(f),h,g);this.events.next(m);let p=iM(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=st(re({},a),{targetSnapshot:p,urlAfterRedirects:f,extras:st(re({},x),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(b=>(b.finalUrl=f,b)),at(i)}else return this.events.next(new lo(a.id,this.urlSerializer.serialize(a.extractedUrl),"",df.IgnoredByUrlHandlingStrategy)),a.resolve(!1),bn}),Vt(a=>{let c=new ry(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(c),this.currentTransition=i=st(re({},a),{guards:YN(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),i}),sP(a=>this.events.next(a)),Ri(a=>{if(i.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw gf(this.urlSerializer,a.guardsResult);let c=new oy(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(c),!s())return bn;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",Hn.GuardRejected),bn;if(a.guards.canActivateChecks.length===0)return at(a);let l=new sy(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(l),!s())return bn;let u=!1;return at(a).pipe(OP(this.paramsInheritanceStrategy),fi({next:()=>{u=!0;let d=new ay(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(d)},complete:()=>{u||this.cancelNavigationTransition(a,"",Hn.NoDataFromResolver)}}))}),VE(a=>{let c=u=>{let d=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let f=u._environmentInjector;d.push(this.configLoader.loadComponent(f,u.routeConfig).then(h=>{u.component=h}))}for(let f of u.children)d.push(...c(f));return d},l=c(a.targetSnapshot.root);return l.length===0?at(a):qt(Promise.all(l).then(()=>a))}),VE(()=>this.afterPreactivation()),Ri(()=>{let{currentSnapshot:a,targetSnapshot:c}=i,l=this.createViewTransition?.(this.environmentInjector,a.root,c.root);return l?qt(l).pipe(Vt(()=>i)):at(i)}),_r(1),Ri(a=>{let c=WN(t.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);this.currentTransition=i=a=st(re({},a),{targetRouterState:c}),this.currentNavigation.update(u=>(u.targetRouterState=c,u)),this.events.next(new _a);let l=i.beforeActivateHandler.deferredHandle;return l?qt(l.then(()=>a)):at(a)}),fi(a=>{new _y(t.routeReuseStrategy,i.targetRouterState,i.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),s()&&(r=!0,this.currentNavigation.update(c=>(c.abort=zP,c)),this.lastSuccessfulNavigation.set(Pn(this.currentNavigation)),this.events.next(new co(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),sc(fM(o.signal).pipe(yr(()=>!r&&!i.targetRouterState),fi(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",Hn.Aborted)}))),fi({complete:()=>{r=!0}}),sc(this.transitionAbortWithErrorSubject.pipe(fi(a=>{throw a}))),rm(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",Hn.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),oc(a=>{if(r=!0,this.destroyed)return i.resolve(!1),bn;if(uM(a))this.events.next(new Hi(i.id,this.urlSerializer.serialize(i.extractedUrl),a.message,a.cancellationCode)),XN(a)?this.events.next(new xa(a.url,a.navigationBehaviorOptions)):i.resolve(!1);else{let c=new ya(i.id,this.urlSerializer.serialize(i.extractedUrl),a,i.targetSnapshot??void 0);try{let l=In(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(l instanceof al){let{message:u,cancellationCode:d}=gf(this.urlSerializer,l);this.events.next(new Hi(i.id,this.urlSerializer.serialize(i.extractedUrl),u,d)),this.events.next(new xa(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(c),a}catch(l){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(l)}}return bn}))}))}cancelNavigationTransition(t,i,r){let o=new Hi(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(o),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=Pn(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return t.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ge({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function GP(n){return n!==tl}var CM=new Re("");var jP=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ge({token:n,factory:()=>ue(WP),providedIn:"root"})}return n})(),My=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}shouldDestroyInjector(e){return!0}},WP=(()=>{class n extends My{static \u0275fac=(()=>{let t;return function(r){return(t||(t=ts(n)))(r||n)}})();static \u0275prov=Ge({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ay=(()=>{class n{urlSerializer=ue(yf);options=ue(bf,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=ue(da);urlHandlingStrategy=ue(Dy);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Gi;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:i,targetBrowserUrl:r}){let o=t!==void 0?this.urlHandlingStrategy.merge(t,i):i,s=r??o;return s instanceof Gi?this.urlSerializer.serialize(s):s}routerUrlState(t){return t?.targetBrowserUrl===void 0||t?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(t.finalUrl)}}commitTransition({targetRouterState:t,finalUrl:i,initialUrl:r}){i&&t?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=t):this.rawUrlTree=r}routerState=iM(null,ue(ln));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ge({token:n,factory:()=>ue($P),providedIn:"root"})}return n})(),$P=(()=>{class n extends Ay{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{t(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(t,i){t instanceof va?this.updateStateMemento():t instanceof lo?this.commitTransition(i):t instanceof ff?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof _a?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof Hi&&!nM(t)?this.restoreHistory(i):t instanceof ya?this.restoreHistory(i,!0):t instanceof co&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,i){let{extras:r,id:o}=i,{replaceUrl:s,state:a}=r;if(this.location.isCurrentPathEqualTo(t)||s){let c=this.browserPageId,l=re(re({},a),this.generateNgRouterState(o,c,i));this.location.replaceState(t,"",l)}else{let c=re(re({},a),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(t,"",c)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===t.finalUrl&&o===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i,r){return this.canceledNavigationResolution==="computed"?re({navigationId:t,\u0275routerPageId:i},this.routerUrlState(r)):re({navigationId:t},this.routerUrlState(r))}static \u0275fac=(()=>{let t;return function(r){return(t||(t=ts(n)))(r||n)}})();static \u0275prov=Ge({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function TM(n,e){n.events.pipe(yr(t=>t instanceof co||t instanceof Hi||t instanceof ya||t instanceof lo),Vt(t=>t instanceof co||t instanceof lo?0:(t instanceof Hi?t.code===Hn.Redirect||t.code===Hn.SupersededByNewNavigation:!1)?2:1),yr(t=>t!==2),_r(1)).subscribe(()=>{e()})}var Iy=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=ue(xv);stateManager=ue(Ay);options=ue(bf,{optional:!0})||{};pendingTasks=ue(no);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=ue(wM);urlSerializer=ue(yf);location=ue(da);urlHandlingStrategy=ue(Dy);injector=ue(ln);_events=new hn;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=ue(jP);injectorCleanup=ue(CM,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=ue(Sf,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!ue(_f,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new _n;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=Pn(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof Hi&&i.code!==Hn.Redirect&&i.code!==Hn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof co)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof xa){let s=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=re({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||GP(r.source)},s);this.scheduleNavigation(a,tl,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}zN(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),tl,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i,r,o)=>{this.navigateToSyncWithBrowser(t,r,i,o)})}navigateToSyncWithBrowser(t,i,r,o){let s=r?.navigationId?r:null,a=r?.\u0275routerUrl??t;if(r?.\u0275routerUrl&&(o=st(re({},o),{browserUrl:t})),r){let l=re({},r);delete l.navigationId,delete l.\u0275routerPageId,delete l.\u0275routerUrl,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(a);this.scheduleNavigation(c,i,s,o).catch(l=>{this.disposed||this.injector.get(ki)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Pn(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Ty),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:s,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=re(re({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let f=r?r.snapshot:this.routerState.snapshot.root;d=KE(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return QE(d,t,u,l??null,this.urlSerializer)}navigateByUrl(t,i={skipLocationChange:!1}){let r=ga(t)?t:this.parseUrl(t),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,tl,null,i)}navigate(t,i={skipLocationChange:!1}){return qP(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.console.warn(Ws(4018,!1)),this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=re({},jE):i===!1?r=re({},ey):r=re(re({},ey),i),ga(t))return OE(this.currentUrlTree,t,r);let o=this.parseUrl(t);return OE(this.currentUrlTree,o,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(t,i,r,o,s){if(this.disposed)return Promise.resolve(!1);let a,c,l;s?(a=s.resolve,c=s.reject,l=s.promise):l=new Promise((d,f)=>{a=d,c=f});let u=this.pendingTasks.add();return TM(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:o,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ge({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function qP(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new De(4008,!1)}var XP=new Re("");function Ry(n,...e){return qs([{provide:Sf,multi:!0,useValue:n},[],{provide:fs,useFactory:YP},{provide:Gd,multi:!0,useFactory:ZP},e.map(t=>t.\u0275providers)])}function YP(){return ue(Iy).routerState.root}function ZP(){let n=ue(hi);return e=>{let t=n.get(os);if(e!==t.components[0])return;let i=n.get(Iy),r=n.get(JP);n.get(KP)===1&&i.initialNavigation(),n.get(QP,null,{optional:!0})?.setUpPreloading(),n.get(XP,null,{optional:!0})?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var JP=new Re("",{factory:()=>new hn}),KP=new Re("",{factory:()=>1});var QP=new Re("");var FM=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||n)(zt(is),zt(io))};static \u0275dir=xi({type:n})}return n})(),tO=(()=>{class n extends FM{static \u0275fac=(()=>{let t;return function(r){return(t||(t=ts(n)))(r||n)}})();static \u0275dir=xi({type:n,features:[rs]})}return n})(),LM=new Re("");var nO={provide:LM,useExisting:Vo(()=>Tf),multi:!0};function iO(){let n=Ei()?Ei().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var rO=new Re(""),Tf=(()=>{class n extends FM{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!iO())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||n)(zt(is),zt(io),zt(rO,8))};static \u0275dir=xi({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&$n("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[jd([nO]),rs]})}return n})();var oO=new Re(""),sO=new Re("");function kM(n){return n!=null}function UM(n){return oo(n)?qt(n):n}function BM(n){let e={};return n.forEach(t=>{e=t!=null?re(re({},e),t):e}),Object.keys(e).length===0?null:e}function VM(n,e){return e.map(t=>t(n))}function aO(n){return!n.validate}function HM(n){return n.map(e=>aO(e)?e:t=>e.validate(t))}function cO(n){if(!n)return null;let e=n.filter(kM);return e.length==0?null:function(t){return BM(VM(t,e))}}function zM(n){return n!=null?cO(HM(n)):null}function lO(n){if(!n)return null;let e=n.filter(kM);return e.length==0?null:function(t){let i=VM(t,e).map(UM);return im(i).pipe(Vt(BM))}}function GM(n){return n!=null?lO(HM(n)):null}function DM(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function uO(n){return n._rawValidators}function dO(n){return n._rawAsyncValidators}function Ny(n){return n?Array.isArray(n)?n:[n]:[]}function Mf(n,e){return Array.isArray(n)?n.includes(e):n===e}function AM(n,e){let t=Ny(e);return Ny(n).forEach(r=>{Mf(t,r)||t.push(r)}),t}function IM(n,e){return Ny(e).filter(t=>!Mf(n,t))}var wf=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=zM(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=GM(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control?.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},Py=class extends wf{name;get formDirective(){return null}get path(){return null}},gl=class extends wf{_parent=null;name=null;valueAccessor=null},Oy=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var jM=(()=>{class n extends Oy{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(zt(gl,2))};static \u0275dir=xi({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&la("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[rs]})}return n})();var fl="VALID",Ef="INVALID",Ea="PENDING",hl="DISABLED",ps=class{},Cf=class extends ps{value;source;constructor(e,t){super(),this.value=e,this.source=t}},pl=class extends ps{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},ml=class extends ps{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},Ma=class extends ps{status;source;constructor(e,t){super(),this.status=e,this.source=t}};var Fy=class extends ps{source;constructor(e){super(),this.source=e}};function fO(n){return(Df(n)?n.validators:n)||null}function hO(n){return Array.isArray(n)?zM(n):n||null}function pO(n,e){return(Df(e)?e.asyncValidators:n)||null}function mO(n){return Array.isArray(n)?GM(n):n||null}function Df(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}var Ly=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return Pn(this.statusReactive)}set status(e){Pn(()=>this.statusReactive.set(e))}_status=Pr(()=>this.statusReactive());statusReactive=on(void 0);get valid(){return this.status===fl}get invalid(){return this.status===Ef}get pending(){return this.status===Ea}get disabled(){return this.status===hl}get enabled(){return this.status!==hl}errors;get pristine(){return Pn(this.pristineReactive)}set pristine(e){Pn(()=>this.pristineReactive.set(e))}_pristine=Pr(()=>this.pristineReactive());pristineReactive=on(!0);get dirty(){return!this.pristine}get touched(){return Pn(this.touchedReactive)}set touched(e){Pn(()=>this.touchedReactive.set(e))}_touched=Pr(()=>this.touchedReactive());touchedReactive=on(!1);get untouched(){return!this.touched}_events=new hn;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(AM(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(AM(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(IM(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(IM(e,this._rawAsyncValidators))}hasValidator(e){return Mf(this._rawValidators,e)}hasAsyncValidator(e){return Mf(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;e.onlySelf||this._parent?.markAsTouched(st(re({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new ml(!0,i))}markAllAsDirty(e={}){this.markAsDirty({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(e))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),e.onlySelf||this._parent?._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new ml(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;e.onlySelf||this._parent?.markAsDirty(st(re({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new pl(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),e.onlySelf||this._parent?._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new pl(!0,i))}markAsPending(e={}){this.status=Ea;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Ma(this.status,t)),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.markAsPending(st(re({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=hl,this.errors=null,this._forEachChild(r=>{r.disable(st(re({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Cf(this.value,i)),this._events.next(new Ma(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(st(re({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=fl,this._forEachChild(i=>{i.enable(st(re({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(st(re({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){e.onlySelf||(this._parent?.updateValueAndValidity(e),e.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===fl||this.status===Ea)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Cf(this.value,t)),this._events.next(new Ma(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.updateValueAndValidity(st(re({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?hl:fl}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=Ea,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:e!==!1};let i=UM(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i?.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new Ma(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new cn,this.statusChanges=new cn}_calculateStatus(){return this._allControlsDisabled()?hl:this.errors?Ef:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ea)?Ea:this._anyControlsHaveStatus(Ef)?Ef:fl}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,e.onlySelf||this._parent?._updatePristine(e,t),r&&this._events.next(new pl(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new ml(this.touched,t)),e.onlySelf||this._parent?._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Df(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=hO(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=mO(this._rawAsyncValidators)}};var WM=new Re("",{factory:()=>ky}),ky="always";function gO(n,e){return[...e.path,n]}function vO(n,e,t=ky){_O(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),xO(n,e),SO(n,e),bO(n,e),yO(n,e)}function RM(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function yO(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function _O(n,e){let t=uO(n);e.validator!==null?n.setValidators(DM(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=dO(n);e.asyncValidator!==null?n.setAsyncValidators(DM(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();RM(e._rawValidators,r),RM(e._rawAsyncValidators,r)}function xO(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&$M(n,e)})}function bO(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&$M(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function $M(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function SO(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function EO(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function MO(n){return Object.getPrototypeOf(n.constructor)===tO}function wO(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(o=>{o.constructor===Tf?t=o:MO(o)?i=o:r=o}),r||i||t||null}function NM(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function PM(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var CO=class extends Ly{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(fO(t),pO(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Df(t)&&(t.nonNullable||t.initialValueIsDefault)&&(PM(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new Fy(this))}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){NM(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){NM(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){PM(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var TO={provide:gl,useExisting:Vo(()=>Uy)},OM=Promise.resolve(),Uy=(()=>{class n extends gl{_changeDetectorRef;callSetDisabledState;control=new CO;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new cn;constructor(t,i,r,o,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=wO(this,o)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),EO(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){vO(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){OM.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,r=i!==0&&Fv(i);OM.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?gO(t,this._parent):[t]}static \u0275fac=function(i){return new(i||n)(zt(Py,9),zt(oO,10),zt(sO,10),zt(LM,10),zt(Wc,8),zt(WM,8))};static \u0275dir=xi({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[jd([TO]),rs,oa]})}return n})();var DO=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=ro({type:n});static \u0275inj=Er({})}return n})();var qM=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:WM,useValue:t.callSetDisabledState??ky}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=ro({type:n});static \u0275inj=Er({imports:[DO]})}return n})();var wi=class{constructor(e=0,t="Network Error"){this.status=e,this.text=t}};var XM=()=>{if(!(typeof localStorage>"u"))return{get:n=>Promise.resolve(localStorage.getItem(n)),set:(n,e)=>Promise.resolve(localStorage.setItem(n,e)),remove:n=>Promise.resolve(localStorage.removeItem(n))}};var nn={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:XM()};var wa=n=>n?typeof n=="string"?{publicKey:n}:n.toString()==="[object Object]"?n:{}:{};var YM=(n,e="https://api.emailjs.com")=>{if(!n)return;let t=wa(n);nn.publicKey=t.publicKey,nn.blockHeadless=t.blockHeadless,nn.storageProvider=t.storageProvider,nn.blockList=t.blockList,nn.limitRate=t.limitRate,nn.origin=t.origin||e};var Af=async(n,e,t={})=>{let i=await fetch(nn.origin+n,{method:"POST",headers:t,body:e}),r=await i.text(),o=new wi(i.status,r);if(i.ok)return o;throw o};var If=(n,e,t)=>{if(!n||typeof n!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"};var ZM=n=>{if(n&&n.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"};var Rf=n=>n.webdriver||!n.languages||n.languages.length===0;var Nf=()=>new wi(451,"Unavailable For Headless Browser");var JM=(n,e)=>{if(!Array.isArray(n))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"};var IO=n=>!n.list?.length||!n.watchVariable,RO=(n,e)=>n instanceof FormData?n.get(e):n[e],Pf=(n,e)=>{if(IO(n))return!1;JM(n.list,n.watchVariable);let t=RO(e,n.watchVariable);return typeof t!="string"?!1:n.list.includes(t)};var Of=()=>new wi(403,"Forbidden");var KM=(n,e)=>{if(typeof n!="number"||n<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"};var NO=async(n,e,t)=>{let i=Number(await t.get(n)||0);return e-Date.now()+i},Ff=async(n,e,t)=>{if(!e.throttle||!t)return!1;KM(e.throttle,e.id);let i=e.id||n;return await NO(i,e.throttle,t)>0?!0:(await t.set(i,Date.now().toString()),!1)};var Lf=()=>new wi(429,"Too Many Requests");var QM=async(n,e,t,i)=>{let r=wa(i),o=r.publicKey||nn.publicKey,s=r.blockHeadless||nn.blockHeadless,a=r.storageProvider||nn.storageProvider,c=re(re({},nn.blockList),r.blockList),l=re(re({},nn.limitRate),r.limitRate);return s&&Rf(navigator)?Promise.reject(Nf()):(If(o,n,e),ZM(t),t&&Pf(c,t)?Promise.reject(Of()):await Ff(location.pathname,l,a)?Promise.reject(Lf()):Af("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:o,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"}))};var ew=n=>{if(!n||n.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"};var PO=n=>typeof n=="string"?document.querySelector(n):n,tw=async(n,e,t,i)=>{let r=wa(i),o=r.publicKey||nn.publicKey,s=r.blockHeadless||nn.blockHeadless,a=nn.storageProvider||r.storageProvider,c=re(re({},nn.blockList),r.blockList),l=re(re({},nn.limitRate),r.limitRate);if(s&&Rf(navigator))return Promise.reject(Nf());let u=PO(t);If(o,n,e),ew(u);let d=new FormData(u);return Pf(c,d)?Promise.reject(Of()):await Ff(location.pathname,l,a)?Promise.reject(Lf()):(d.append("lib_version","4.4.1"),d.append("service_id",n),d.append("template_id",e),d.append("user_id",o),Af("/api/v1.0/email/send-form",d))};var nw={init:YM,send:QM,sendForm:tw,EmailJSResponseStatus:wi};var OO=(n,e)=>e.label;function FO(n,e){if(n&1&&(ee(0,"a",7),Dt(1,"div",10),ee(2,"div")(3,"p",11),te(4),ie(),ee(5,"p",12),te(6),ie()(),Rn(),ee(7,"svg",13),Dt(8,"line",14)(9,"polyline",15),ie()()),n&2){let t=e.$implicit;Ut("href",t.href,ti),pe(),Gc("background:"+t.bg+";color:"+t.color),Ut("innerHTML",t.icon,aa),pe(3),Ft(" ",t.label," "),pe(2),jt(t.value)}}function LO(n,e){if(n&1){let t=Nr();ee(0,"div",9)(1,"div",16),Rn(),ee(2,"svg",17),Dt(3,"path",18)(4,"polyline",19),ie()(),Li(),ee(5,"h3",20),te(6,"Message sent!"),ie(),ee(7,"p",21),te(8," Thanks for reaching out. I'll get back to you within 24 hours. "),ie(),ee(9,"button",22),$n("click",function(){jn(t);let r=tn();return Wn(r.sent.set(!1))}),te(10,"Send another"),ie()()}}function kO(n,e){if(n&1){let t=Nr();ee(0,"h3",23),te(1,"Send a message"),ie(),ee(2,"div",24)(3,"div",25)(4,"label",26),te(5,"Your name"),ie(),ee(6,"input",27),as("ngModelChange",function(r){jn(t);let o=tn();return ua(o.form.name,r)||(o.form.name=r),Wn(r)}),ie()(),ee(7,"div",25)(8,"label",26),te(9,"Email address"),ie(),ee(10,"input",28),as("ngModelChange",function(r){jn(t);let o=tn();return ua(o.form.email,r)||(o.form.email=r),Wn(r)}),ie()()(),ee(11,"div",29)(12,"label",26),te(13,"Subject"),ie(),ee(14,"input",30),as("ngModelChange",function(r){jn(t);let o=tn();return ua(o.form.subject,r)||(o.form.subject=r),Wn(r)}),ie()(),ee(15,"div",31)(16,"label",26),te(17,"Message"),ie(),ee(18,"textarea",32),as("ngModelChange",function(r){jn(t);let o=tn();return ua(o.form.message,r)||(o.form.message=r),Wn(r)}),te(19,"              "),ie()(),ee(20,"button",33),$n("click",function(){jn(t);let r=tn();return Wn(r.submit())}),Rn(),ee(21,"svg",34),Dt(22,"line",35)(23,"polygon",36),ie(),te(24," Send message "),ie()}if(n&2){let t=tn();pe(6),ss("ngModel",t.form.name),pe(4),ss("ngModel",t.form.email),pe(4),ss("ngModel",t.form.subject),pe(4),ss("ngModel",t.form.message)}}var Ca=class n{sent=on(!1);form={name:"",email:"",subject:"",message:""};methods=[{label:"Email",value:"kokila@example.com",href:"mailto:kokila@example.com",color:"#DD0031",bg:"rgba(221,0,49,0.1)",icon:'<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>'},{label:"LinkedIn",value:"linkedin.com/in/kokilasanjeewa",href:"https://linkedin.com",color:"#3b82f6",bg:"rgba(59,130,246,0.1)",icon:'<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></div>'},{label:"GitHub",value:"github.com/kokilasanjeewa",href:"https://github.com/kokilasanjeewa",color:"#a1a1aa",bg:"rgba(161,161,170,0.1)",icon:'<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg></div>'}];submit(){this.form.name&&this.form.email&&this.form.message&&(this.sent.set(!0),this.form={name:"",email:"",subject:"",message:""})}sendEmail(e){e.preventDefault(),nw.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",e.target,"YOUR_PUBLIC_KEY")}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Gt({type:n,selectors:[["app-contact"]],decls:18,vars:1,consts:[["id","contact",1,"py-24","px-6","border-t","border-white/[0.06]"],[1,"max-w-[1160px]","mx-auto","grid","grid-cols-1","lg:grid-cols-2","gap-20","items-start"],[1,"section-label"],[1,"section-title"],[1,"text-red"],[1,"text-[15px]","text-zinc-400","leading-relaxed","mb-9"],[1,"flex","flex-col","gap-3"],["target","_blank",1,"flex","items-center","gap-3.5","card","p-3.5","no-underline","hover:border-red/30","transition-all","duration-200","group",3,"href"],[1,"card","p-8","rounded-3xl"],[1,"text-center","py-6"],[1,"w-10","h-10","rounded-lg","flex","items-center","justify-center","flex-shrink-0",2,"display","flex","align-items","center","justify-content","center",3,"innerHTML"],[1,"font-mono","text-[10px]","tracking-widest","uppercase","text-zinc-600","mb-0.5"],[1,"text-[14px]","text-zinc-50","font-medium"],["width","15","height","15","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2",1,"ml-auto","text-zinc-600","group-hover:text-red","group-hover:translate-x-1","transition-all","duration-200"],["x1","5","y1","12","x2","19","y2","12"],["points","12 5 19 12 12 19"],[1,"w-16","h-16","rounded-full","bg-green-500/10","border","border-green-500/20","flex","items-center","justify-center","text-green-400","mx-auto","mb-4",2,"display","flex","align-items","center","justify-content","center"],["width","28","height","28","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],["d","M22 11.08V12a10 10 0 1 1-5.93-9.14"],["points","22 4 12 14.01 9 11.01"],[1,"font-display","font-bold","text-[22px]","mb-2"],[1,"text-[14px]","text-zinc-400","mb-6"],[1,"btn-outline",3,"click"],[1,"font-display","font-bold","text-[20px]","mb-6"],[1,"grid","grid-cols-2","gap-3.5","mb-3.5"],[1,"flex","flex-col","gap-1.5"],[1,"text-[12px]","text-zinc-400","font-medium"],["placeholder","Kokila Sanjeewa",1,"bg-zinc-900","border","border-white/10","rounded-md","px-3.5","py-2.5","text-[13px]","text-zinc-50","outline-none","font-body","focus:border-red/40","transition-colors","placeholder:text-zinc-700",3,"ngModelChange","ngModel"],["type","email","placeholder","hello@example.com",1,"bg-zinc-900","border","border-white/10","rounded-md","px-3.5","py-2.5","text-[13px]","text-zinc-50","outline-none","font-body","focus:border-red/40","transition-colors","placeholder:text-zinc-700",3,"ngModelChange","ngModel"],[1,"flex","flex-col","gap-1.5","mb-3.5"],["placeholder","Project inquiry, collaboration\u2026",1,"bg-zinc-900","border","border-white/10","rounded-md","px-3.5","py-2.5","text-[13px]","text-zinc-50","outline-none","font-body","focus:border-red/40","transition-colors","placeholder:text-zinc-700",3,"ngModelChange","ngModel"],[1,"flex","flex-col","gap-1.5","mb-5"],["rows","5","placeholder","Tell me about your project\u2026",1,"bg-zinc-900","border","border-white/10","rounded-md","px-3.5","py-2.5","text-[13px]","text-zinc-50","outline-none","font-body","resize-none","focus:border-red/40","transition-colors","placeholder:text-zinc-700",3,"ngModelChange","ngModel"],[1,"btn-primary","w-full","justify-center","py-3.5","text-[15px]",3,"click"],["width","15","height","15","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],["x1","22","y1","2","x2","11","y2","13"],["points","22 2 15 22 11 13 2 9 22 2"]],template:function(t,i){t&1&&(ee(0,"section",0)(1,"div",1)(2,"div")(3,"p",2),te(4,"Get in touch"),ie(),ee(5,"h2",3),te(6," Let's build something"),Dt(7,"br"),ee(8,"span",4),te(9,"great together"),ie()(),ee(10,"p",5),te(11," I'm currently open to new opportunities. Whether you have a project in mind, want to collaborate, or just want to say hi \u2014 my inbox is always open. "),ie(),ee(12,"div",6),Pt(13,FO,10,6,"a",7,OO),ie()(),ee(15,"div",8),bi(16,LO,11,0,"div",9)(17,kO,25,4),ie()()()),t&2&&(pe(13),Ot(i.methods),pe(3),Si(i.sent()?16:17))},dependencies:[qM,Tf,jM,Uy],encapsulation:2})};var UO=(n,e)=>e.title;function BO(n,e){if(n&1){let t=Nr();ee(0,"button",13),$n("click",function(){let r=jn(t).$implicit,o=tn();return Wn(o.activeTab.set(r))}),te(1),ie()}if(n&2){let t=e.$implicit,i=tn();Ut("ngClass",i.activeTab()===t?"bg-red text-white border-red":"bg-transparent text-zinc-400 border-white/10 hover:text-zinc-50 hover:border-white/20"),pe(),Ft(" ",t," ")}}function VO(n,e){n&1&&(ee(0,"div",14),te(1," Featured "),ie())}function HO(n,e){if(n&1&&(ee(0,"a",21),Rn(),ee(1,"svg",32),Dt(2,"path",12),ie()()),n&2){let t=tn().$implicit;Ut("href",t.repo,ti)}}function zO(n,e){if(n&1&&(ee(0,"a",22),Rn(),ee(1,"svg",33),Dt(2,"path",34)(3,"polyline",35)(4,"line",36),ie()()),n&2){let t=tn().$implicit;Ut("href",t.demo,ti)}}function GO(n,e){if(n&1&&(ee(0,"span",26),te(1),ie()),n&2){let t=e.$implicit;pe(),jt(t)}}function jO(n,e){if(n&1&&(ee(0,"div",8),bi(1,VO,2,0,"div",14),ee(2,"div",15)(3,"div",16),Rn(),ee(4,"svg",17),Dt(5,"path",18)(6,"polyline",19),ie()(),Li(),ee(7,"div",20),bi(8,HO,3,1,"a",21),bi(9,zO,5,1,"a",22),ie()(),ee(10,"h3",23),te(11),ie(),ee(12,"p",24),te(13),ie(),ee(14,"div",25),Pt(15,GO,2,1,"span",26,Rr),ie(),ee(17,"div",27)(18,"span",28),Rn(),ee(19,"svg",29),Dt(20,"path",30),ie(),te(21),ie(),Li(),ee(22,"span",31),te(23),ie()()()),n&2){let t=e.$implicit;Ut("ngClass",t.featured?"border-red/30":""),pe(),Si(t.featured?1:-1),pe(7),Si(t.repo?8:-1),pe(),Si(t.demo?9:-1),pe(2),jt(t.title),pe(2),jt(t.desc),pe(2),Ot(t.tags),pe(6),Ft(" ",t.stars," "),pe(2),jt(t.category)}}var Ta=class n{tabs=["All","Frontend","Full Stack","Backend"];activeTab=on("All");projects=[{title:"NgX Dashboard Pro",desc:"Production-ready Angular 19 admin dashboard with signals-based state, dark mode, real-time charts, and a full RBAC system.",tags:["Angular 19","Signals","NgRx","SCSS"],category:"Frontend",stars:312,featured:!0,demo:"#",repo:"#"},{title:"DevBlog API",desc:"RESTful blog platform API built with Node.js and PostgreSQL. Features JWT auth, file uploads, and full-text search.",tags:["Node.js","Express","PostgreSQL","JWT"],category:"Backend",stars:148,featured:!1,repo:"#"},{title:"E-Commerce Platform",desc:"Full-stack e-commerce app with Angular frontend, .NET backend, Stripe integration, and real-time inventory management.",tags:["Angular",".NET","SQL Server","Stripe"],category:"Full Stack",stars:224,featured:!0,demo:"#",repo:"#"},{title:"Real-Time Chat App",desc:"WebSocket-powered chat with rooms, typing indicators, message reactions, and end-to-end message history.",tags:["Angular","Socket.io","Node.js","MongoDB"],category:"Full Stack",stars:196,featured:!1,demo:"#",repo:"#"},{title:"Angular Component Library",desc:"A collection of 30+ reusable Angular standalone components with full a11y support and Storybook documentation.",tags:["Angular","TypeScript","Storybook","WCAG"],category:"Frontend",stars:408,featured:!1,repo:"#"},{title:"Microservices Boilerplate",desc:"Production-ready Node.js microservices starter with Docker, API Gateway, service discovery, and distributed tracing.",tags:["Node.js","Docker","RabbitMQ","Redis"],category:"Backend",stars:175,featured:!1,repo:"#"}];filtered=Pr(()=>{let e=this.activeTab();return e==="All"?this.projects:this.projects.filter(t=>t.category===e)});static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Gt({type:n,selectors:[["app-projects"]],decls:19,vars:0,consts:[["id","projects",1,"py-24","px-6","border-t","border-white/[0.06]"],[1,"max-w-[1160px]","mx-auto"],[1,"section-label"],[1,"section-title"],[1,"section-desc"],[1,"flex","flex-wrap","gap-1.5","mb-10"],[1,"text-[13px]","px-4","py-1.5","rounded-full","border","cursor-pointer","transition-all","duration-200","font-body",3,"ngClass"],[1,"grid","grid-cols-1","md:grid-cols-2","xl:grid-cols-3","gap-5","mb-10"],[1,"card","p-6","flex","flex-col","relative","transition-all","duration-200","hover:border-white/10","hover:-translate-y-0.5",3,"ngClass"],[1,"flex","justify-center"],["href","https://github.com/kokilasanjeewa","target","_blank",1,"btn-outline"],["width","15","height","15","viewBox","0 0 24 24","fill","currentColor"],["d","M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"],[1,"text-[13px]","px-4","py-1.5","rounded-full","border","cursor-pointer","transition-all","duration-200","font-body",3,"click","ngClass"],[1,"absolute","-top-px","right-5","bg-red","text-white","text-[10px]","font-mono","px-2.5","py-0.5","rounded-b-md"],[1,"flex","justify-between","items-center","mb-4"],[1,"w-10","h-10","rounded-lg","bg-red/10","border","border-red/25","flex","items-center","justify-center","text-red"],["width","17","height","17","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","1.5"],["d","M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"],["points","9 22 9 12 15 12 15 22"],[1,"flex","gap-1.5"],["target","_blank","aria-label","GitHub repo",1,"w-7","h-7","rounded-md","border","border-white/[0.08]","flex","items-center","justify-center","text-zinc-400","no-underline","hover:text-red","hover:border-red/30","transition-all","duration-200",2,"display","flex","align-items","center","justify-content","center",3,"href"],["target","_blank","aria-label","Live demo",1,"w-7","h-7","rounded-md","border","border-white/[0.08]","flex","items-center","justify-center","text-zinc-400","no-underline","hover:text-red","hover:border-red/30","transition-all","duration-200",2,"display","flex","align-items","center","justify-content","center",3,"href"],[1,"font-display","font-bold","text-[17px]","mb-2"],[1,"text-[13px]","text-zinc-400","leading-relaxed","flex-1","mb-4"],[1,"flex","flex-wrap","gap-1.5","mb-4"],[1,"tag"],[1,"flex","justify-between","items-center"],[1,"flex","items-center","gap-1","font-mono","text-[12px]","text-amber-400"],["width","12","height","12","viewBox","0 0 24 24","fill","currentColor"],["d","M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"],[1,"font-mono","text-[11px]","text-zinc-600"],["width","13","height","13","viewBox","0 0 24 24","fill","currentColor"],["width","13","height","13","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],["d","M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"],["points","15 3 21 3 21 9"],["x1","10","y1","14","x2","21","y2","3"]],template:function(t,i){t&1&&(ee(0,"section",0)(1,"div",1)(2,"p",2),te(3,"What I've built"),ie(),ee(4,"h2",3),te(5,"Featured Projects"),ie(),ee(6,"p",4),te(7," A selection of projects that showcase my skills across frontend, backend, and full-stack development. "),ie(),ee(8,"div",5),Pt(9,BO,2,2,"button",6,Rr),ie(),ee(11,"div",7),Pt(12,jO,24,8,"div",8,UO),ie(),ee(14,"div",9)(15,"a",10),Rn(),ee(16,"svg",11),Dt(17,"path",12),ie(),te(18," View all on GitHub "),ie()()()()),t&2&&(pe(9),Ot(i.tabs),pe(3),Ot(i.filtered()))},dependencies:[cs],encapsulation:2})};var iw=(n,e)=>e.label;function WO(n,e){if(n&1&&(Ue(0,"div",15)(1,"div",18),te(2),He(),Ue(3,"div",19),te(4),He()()),n&2){let t=e.$implicit;pe(2),Ft(" ",t.value," "),pe(2),jt(t.label)}}function $O(n,e){if(n&1&&(Ue(0,"div",20)(1,"span",21),te(2),He(),Ue(3,"span",22),te(4),He()()),n&2){let t=e.$implicit,i=e.$index,r=e.$count;la("border-b",i!==r-1)("border-white",i!==r-1)("border-opacity-5",i!==r-1),pe(2),jt(t.label),pe(2),jt(t.value)}}var Da=class n{stats=[{value:"5+",label:"Years experience"},{value:"40+",label:"Projects delivered"},{value:"20+",label:"Happy clients"},{value:"15+",label:"Technologies"}];info=[{label:"Location",value:"Sri Lanka"},{label:"Role",value:"Full Stack Developer"},{label:"Focus",value:"Angular & Node.js"},{label:"Education",value:"BSc Computer Science"},{label:"Availability",value:"Open to work"}];static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Gt({type:n,selectors:[["app-about"]],decls:31,vars:0,consts:[["id","about",1,"py-24","px-6","border-t","border-white/[0.06]"],[1,"max-w-[1160px]","mx-auto","grid","grid-cols-1","lg:grid-cols-2","gap-20","items-start"],[1,"section-label"],[1,"section-title"],[1,"text-red"],[1,"text-[15px]","text-zinc-400","leading-[1.8]","mb-4"],[1,"text-[15px]","text-zinc-400","leading-[1.8]","mb-8"],[1,"flex","items-center","gap-3"],["href","#","download","",1,"btn-primary"],["width","14","height","14","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],["d","M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"],["points","7 10 12 15 17 10"],["x1","12","y1","15","x2","12","y2","3"],["href","#contact",1,"btn-outline"],[1,"grid","grid-cols-2","gap-3","mb-6"],[1,"card","p-6","text-center","hover:border-red/30","transition-colors","duration-200","cursor-default"],[1,"flex","flex-col"],[1,"flex","items-center","justify-between","py-3",3,"border-b","border-white","border-opacity-5"],[1,"font-display","font-extrabold","text-red","mb-1.5",2,"font-size","40px","line-height","1"],[1,"text-[13px]","text-zinc-400"],[1,"flex","items-center","justify-between","py-3"],[1,"font-mono","text-[12px]","text-zinc-500"],[1,"text-[14px]","text-zinc-50","font-medium"]],template:function(t,i){t&1&&(Ue(0,"section",0)(1,"div",1)(2,"div")(3,"p",2),te(4,"About me"),He(),Ue(5,"h2",3),te(6," Crafting digital"),Nn(7,"br"),Ue(8,"span",4),te(9,"experiences"),He(),te(10," that matter "),He(),Ue(11,"p",5),te(12," I'm Kokila Sanjeewa, a Full Stack Developer based in Sri Lanka with a passion for building clean, performant, and scalable web applications. I specialize in Angular on the frontend and Node.js / .NET on the backend. "),He(),Ue(13,"p",6),te(14," I care deeply about code quality, architecture, and the fine details that make software feel polished. When I'm not coding, I'm exploring new technologies or contributing to open source. "),He(),Ue(15,"div",7)(16,"a",8),Rn(),Ue(17,"svg",9),Nn(18,"path",10)(19,"polyline",11)(20,"line",12),He(),te(21," Download CV "),He(),Li(),Ue(22,"a",13),te(23,"Get in touch"),He()()(),Ue(24,"div")(25,"div",14),Pt(26,WO,5,2,"div",15,iw),He(),Ue(28,"div",16),Pt(29,$O,5,8,"div",17,iw),He()()()()),t&2&&(pe(26),Ot(i.stats),pe(3),Ot(i.info))},encapsulation:2})};var LC=sT(rw());var Ew=0,y0=1,Mw=2;var Hl=1,ww=2,$a=3,Hr=0,zn=1,fr=2,hr=0,bs=1,_0=2,x0=3,b0=4,Cw=5;var yo=100,Tw=101,Dw=102,Aw=103,Iw=104,Rw=200,Nw=201,Pw=202,Ow=203,rh=204,oh=205,Fw=206,Lw=207,kw=208,Uw=209,Bw=210,Vw=211,Hw=212,zw=213,Gw=214,sh=0,ah=1,ch=2,Ss=3,lh=4,uh=5,dh=6,fh=7,S0=0,jw=1,Ww=2,Xi=0,E0=1,M0=2,w0=3,C0=4,T0=5,D0=6,A0=7;var l0=300,Mo=301,ws=302,kh=303,Uh=304,zl=306,hh=1e3,ar=1001,ph=1002,vn=1003,$w=1004;var Gl=1005;var Cn=1006,Bh=1007;var wo=1008;var ui=1009,I0=1010,R0=1011,qa=1012,Vh=1013,Yi=1014,Zi=1015,pr=1016,Hh=1017,zh=1018,Xa=1020,N0=35902,P0=35899,O0=1021,F0=1022,Di=1023,cr=1026,Co=1027,L0=1028,Gh=1029,To=1030,jh=1031;var Wh=1033,jl=33776,Wl=33777,$l=33778,ql=33779,$h=35840,qh=35841,Xh=35842,Yh=35843,Zh=36196,Jh=37492,Kh=37496,Qh=37488,ep=37489,Xl=37490,tp=37491,np=37808,ip=37809,rp=37810,op=37811,sp=37812,ap=37813,cp=37814,lp=37815,up=37816,dp=37817,fp=37818,hp=37819,pp=37820,mp=37821,gp=36492,vp=36494,yp=36495,_p=36283,xp=36284,Yl=36285,bp=36286;var El=2300,mh=2301,ih=2302,u0=2303,d0=2400,f0=2401,h0=2402;var qw=3200;var k0=0,Xw=1,Gr="",oi="srgb",Ml="srgb-linear",wl="linear",bt="srgb";var _s=7680;var p0=519,Yw=512,Zw=513,Jw=514,Sp=515,Kw=516,Qw=517,Ep=518,eC=519,m0=35044;var U0="300 es",qi=2e3,Cl=2001;function qO(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function XO(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Tl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tC(){let n=Tl("canvas");return n.style.display="block",n}var ow={},za=null;function B0(...n){let e="THREE."+n.shift();za?za("log",e,...n):console.log(e,...n)}function nC(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Be(...n){n=nC(n);let e="THREE."+n.shift();if(za)za("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ze(...n){n=nC(n);let e="THREE."+n.shift();if(za)za("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function gh(...n){let e=n.join(" ");e in ow||(ow[e]=!0,Be(...n))}function iC(n,e,t){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}var rC={[sh]:ah,[ch]:dh,[lh]:fh,[Ss]:uh,[ah]:sh,[dh]:ch,[fh]:lh,[uh]:Ss},lr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}},On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Vy=Math.PI/180,vh=180/Math.PI;function Zl(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(On[n&255]+On[n>>8&255]+On[n>>16&255]+On[n>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[t&63|128]+On[t>>8&255]+"-"+On[t>>16&255]+On[t>>24&255]+On[i&255]+On[i>>8&255]+On[i>>16&255]+On[i>>24&255]).toLowerCase()}function ut(n,e,t){return Math.max(e,Math.min(t,n))}function YO(n,e){return(n%e+e)%e}function Hy(n,e,t){return(1-t)*n+t*e}function yl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var St=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ur=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,s,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=o[s+0],h=o[s+1],g=o[s+2],x=o[s+3];if(d!==x||c!==f||l!==h||u!==g){let m=c*f+l*h+u*g+d*x;m<0&&(f=-f,h=-h,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let b=Math.acos(m),E=Math.sin(b);p=Math.sin(p*b)/E,a=Math.sin(a*b)/E,c=c*p+f*a,l=l*p+h*a,u=u*p+g*a,d=d*p+x*a}else{c=c*p+f*a,l=l*p+h*a,u=u*p+g*a,d=d*p+x*a;let b=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=b,l*=b,u*=b,d*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,o,s){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=o[s],f=o[s+1],h=o[s+2],g=o[s+3];return e[t]=a*g+u*d+c*h-l*f,e[t+1]=c*g+u*f+l*d-a*h,e[t+2]=l*g+u*h+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(o/2),f=c(i/2),h=c(r/2),g=c(o/2);switch(s){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],o=t[8],s=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(o-l)*h,this._z=(s-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+s)/h,this._z=(o+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(o-l)/h,this._x=(r+s)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(s-r)/h,this._x=(o+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,o=e._z,s=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+s*a+r*l-o*c,this._y=r*u+s*c+o*a-i*l,this._z=o*u+s*l+i*c-r*a,this._w=s*u-i*a-r*c-o*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,o=-o,s=-s,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},j=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sw.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sw.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,c=e.w,l=2*(s*r-a*i),u=2*(a*t-o*r),d=2*(o*i-s*t);return this.x=t+c*l+s*d-a*u,this.y=i+c*u+a*l-o*d,this.z=r+c*d+o*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,o=e.z,s=t.x,a=t.y,c=t.z;return this.x=r*c-o*a,this.y=o*s-i*c,this.z=i*a-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zy.copy(this).projectOnVector(e),this.sub(zy)}reflect(e){return this.sub(zy.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zy=new j,sw=new ur,$e=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,r,o,s,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l)}set(e,t,i,r,o,s,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=c,u[6]=i,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],x=r[0],m=r[3],p=r[6],b=r[1],E=r[4],M=r[7],N=r[2],w=r[5],I=r[8];return o[0]=s*x+a*b+c*N,o[3]=s*m+a*E+c*w,o[6]=s*p+a*M+c*I,o[1]=l*x+u*b+d*N,o[4]=l*m+u*E+d*w,o[7]=l*p+u*M+d*I,o[2]=f*x+h*b+g*N,o[5]=f*m+h*E+g*w,o[8]=f*p+h*M+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*a*l-i*o*u+i*a*c+r*o*l-r*s*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*s-a*l,f=a*c-u*o,h=l*o-s*c,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(r*l-u*i)*x,e[2]=(a*i-r*s)*x,e[3]=f*x,e[4]=(u*t-r*c)*x,e[5]=(r*o-a*t)*x,e[6]=h*x,e[7]=(i*c-l*t)*x,e[8]=(s*t-i*o)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,s,a){let c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*s+l*a)+s+e,-r*l,r*c,-r*(-l*s+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Gy.makeScale(e,t)),this}rotate(e){return this.premultiply(Gy.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gy.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Gy=new $e,aw=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cw=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ZO(){let n={enabled:!0,workingColorSpace:Ml,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===bt&&(r.r=Vr(r.r),r.g=Vr(r.g),r.b=Vr(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===bt&&(r.r=Ha(r.r),r.g=Ha(r.g),r.b=Ha(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Gr?wl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return gh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return gh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ml]:{primaries:e,whitePoint:i,transfer:wl,toXYZ:aw,fromXYZ:cw,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:i,transfer:bt,toXYZ:aw,fromXYZ:cw,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),n}var ct=ZO();function Vr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ha(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Aa,yh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Aa===void 0&&(Aa=Tl("canvas")),Aa.width=e.width,Aa.height=e.height;let r=Aa.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Aa}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Tl("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Vr(o[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vr(t[i]/255)*255):t[i]=Vr(t[i]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},JO=0,Ga=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JO++}),this.uuid=Zl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(jy(r[s].image)):o.push(jy(r[s]))}else o=jy(r);i.url=o}return t||(e.images[this.uuid]=i),i}};function jy(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}var KO=0,Wy=new j,jr=(()=>{class n extends lr{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=ar,o=ar,s=Cn,a=wo,c=Di,l=ui,u=n.DEFAULT_ANISOTROPY,d=Gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KO++}),this.uuid=Zl(),this.name="",this.source=new Ga(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wy).x}get height(){return this.source.getSize(Wy).y}get depth(){return this.source.getSize(Wy).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Be(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let o=this[i];if(o===void 0){Be(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==l0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hh:t.x=t.x-Math.floor(t.x);break;case ar:t.x=t.x<0?0:1;break;case ph:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hh:t.y=t.y-Math.floor(t.y);break;case ar:t.y=t.y<0?0:1;break;case ph:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=l0,n.DEFAULT_ANISOTROPY=1,n})(),Yt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,M=(h+1)/2,N=(p+1)/2,w=(u+f)/4,I=(d+x)/4,y=(g+m)/4;return E>M&&E>N?E<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(E),r=w/i,o=I/i):M>N?M<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(M),i=w/r,o=y/r):N<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(N),i=I/o,r=y/o),this.set(i,r,o,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-x)/b,this.z=(f-u)/b,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_h=class extends lr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},o=new jr(r),s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ga(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends _h{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Dl=class extends jr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xh=class extends jr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var an=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,r,o,s,a,c,l,u,d,f,h,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l,u,d,f,h,g,x,m)}set(e,t,i,r,o,s,a,c,l,u,d,f,h,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,r=1/Ia.setFromMatrixColumn(e,0).length(),o=1/Ia.setFromMatrixColumn(e,1).length(),s=1/Ia.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){let f=s*u,h=s*d,g=a*u,x=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=g+h*l,t[10]=s*c}else if(e.order==="YXZ"){let f=c*u,h=c*d,g=l*u,x=l*d;t[0]=f+x*a,t[4]=g*a-h,t[8]=s*l,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=h*a-g,t[6]=x+f*a,t[10]=s*c}else if(e.order==="ZXY"){let f=c*u,h=c*d,g=l*u,x=l*d;t[0]=f-x*a,t[4]=-s*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=s*u,t[9]=x-f*a,t[2]=-s*l,t[6]=a,t[10]=s*c}else if(e.order==="ZYX"){let f=s*u,h=s*d,g=a*u,x=a*d;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+x,t[1]=c*d,t[5]=x*l+f,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=s*c}else if(e.order==="YZX"){let f=s*c,h=s*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-f*d,t[8]=g*d+h,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+g,t[10]=f-x*d}else if(e.order==="XZY"){let f=s*c,h=s*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+x,t[5]=s*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QO,e,eF)}lookAt(e,t,i){let r=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),uo.crossVectors(i,ii),uo.lengthSq()===0&&(Math.abs(i.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),uo.crossVectors(i,ii)),uo.normalize(),kf.crossVectors(ii,uo),r[0]=uo.x,r[4]=kf.x,r[8]=ii.x,r[1]=uo.y,r[5]=kf.y,r[9]=ii.y,r[2]=uo.z,r[6]=kf.z,r[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],x=i[6],m=i[10],p=i[14],b=i[3],E=i[7],M=i[11],N=i[15],w=r[0],I=r[4],y=r[8],C=r[12],O=r[1],D=r[5],H=r[9],V=r[13],k=r[2],A=r[6],F=r[10],U=r[14],T=r[3],ne=r[7],$=r[11],oe=r[15];return o[0]=s*w+a*O+c*k+l*T,o[4]=s*I+a*D+c*A+l*ne,o[8]=s*y+a*H+c*F+l*$,o[12]=s*C+a*V+c*U+l*oe,o[1]=u*w+d*O+f*k+h*T,o[5]=u*I+d*D+f*A+h*ne,o[9]=u*y+d*H+f*F+h*$,o[13]=u*C+d*V+f*U+h*oe,o[2]=g*w+x*O+m*k+p*T,o[6]=g*I+x*D+m*A+p*ne,o[10]=g*y+x*H+m*F+p*$,o[14]=g*C+x*V+m*U+p*oe,o[3]=b*w+E*O+M*k+N*T,o[7]=b*I+E*D+M*A+N*ne,o[11]=b*y+E*H+M*F+N*$,o[15]=b*C+E*V+M*U+N*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],x=e[7],m=e[11],p=e[15],b=c*h-l*f,E=a*h-l*d,M=a*f-c*d,N=s*h-l*u,w=s*f-c*u,I=s*d-a*u;return t*(x*b-m*E+p*M)-i*(g*b-m*N+p*w)+r*(g*E-x*N+p*I)-o*(g*M-x*w+m*I)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],x=e[13],m=e[14],p=e[15],b=t*a-i*s,E=t*c-r*s,M=t*l-o*s,N=i*c-r*a,w=i*l-o*a,I=r*l-o*c,y=u*x-d*g,C=u*m-f*g,O=u*p-h*g,D=d*m-f*x,H=d*p-h*x,V=f*p-h*m,k=b*V-E*H+M*D+N*O-w*C+I*y;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(a*V-c*H+l*D)*A,e[1]=(r*H-i*V-o*D)*A,e[2]=(x*I-m*w+p*N)*A,e[3]=(f*w-d*I-h*N)*A,e[4]=(c*O-s*V-l*C)*A,e[5]=(t*V-r*O+o*C)*A,e[6]=(m*M-g*I-p*E)*A,e[7]=(u*I-f*M+h*E)*A,e[8]=(s*H-a*O+l*y)*A,e[9]=(i*O-t*H-o*y)*A,e[10]=(g*w-x*M+p*b)*A,e[11]=(d*M-u*w-h*b)*A,e[12]=(a*C-s*D-c*y)*A,e[13]=(t*D-i*C+r*y)*A,e[14]=(x*E-g*N-m*b)*A,e[15]=(u*N-d*E+f*b)*A,this}scale(e){let t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),o=1-i,s=e.x,a=e.y,c=e.z,l=o*s,u=o*a;return this.set(l*s+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*s,0,l*c-r*a,u*c+r*s,o*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,o=t._x,s=t._y,a=t._z,c=t._w,l=o+o,u=s+s,d=a+a,f=o*l,h=o*u,g=o*d,x=s*u,m=s*d,p=a*d,b=c*l,E=c*u,M=c*d,N=i.x,w=i.y,I=i.z;return r[0]=(1-(x+p))*N,r[1]=(h+M)*N,r[2]=(g-E)*N,r[3]=0,r[4]=(h-M)*w,r[5]=(1-(f+p))*w,r[6]=(m+b)*w,r[7]=0,r[8]=(g+E)*I,r[9]=(m-b)*I,r[10]=(1-(f+x))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let o=this.determinant();if(o===0)return i.set(1,1,1),t.identity(),this;let s=Ia.set(r[0],r[1],r[2]).length(),a=Ia.set(r[4],r[5],r[6]).length(),c=Ia.set(r[8],r[9],r[10]).length();o<0&&(s=-s),ji.copy(this);let l=1/s,u=1/a,d=1/c;return ji.elements[0]*=l,ji.elements[1]*=l,ji.elements[2]*=l,ji.elements[4]*=u,ji.elements[5]*=u,ji.elements[6]*=u,ji.elements[8]*=d,ji.elements[9]*=d,ji.elements[10]*=d,t.setFromRotationMatrix(ji),i.x=s,i.y=a,i.z=c,this}makePerspective(e,t,i,r,o,s,a=qi,c=!1){let l=this.elements,u=2*o/(t-e),d=2*o/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r),g,x;if(c)g=o/(s-o),x=s*o/(s-o);else if(a===qi)g=-(s+o)/(s-o),x=-2*s*o/(s-o);else if(a===Cl)g=-s/(s-o),x=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,o,s,a=qi,c=!1){let l=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r),g,x;if(c)g=1/(s-o),x=s/(s-o);else if(a===qi)g=-2/(s-o),x=-(s+o)/(s-o);else if(a===Cl)g=-1/(s-o),x=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ia=new j,ji=new an,QO=new j(0,0,0),eF=new j(1,1,1),uo=new j,kf=new j,ii=new j,lw=new an,uw=new ur,Al=(()=>{class n{constructor(t=0,i=0,r=0,o=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,o=this._order){return this._x=t,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let o=t.elements,s=o[0],a=o[4],c=o[8],l=o[1],u=o[5],d=o[9],f=o[2],h=o[6],g=o[10];switch(i){case"XYZ":this._y=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return lw.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lw,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return uw.setFromEuler(this),this.setFromQuaternion(uw,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Il=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},tF=0,dw=new j,Ra=new ur,Fr=new an,Uf=new j,_l=new j,nF=new j,iF=new ur,fw=new j(1,0,0),hw=new j(0,1,0),pw=new j(0,0,1),mw={type:"added"},rF={type:"removed"},Na={type:"childadded",child:null},$y={type:"childremoved",child:null},Cs=(()=>{class n extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tF++}),this.uuid=Zl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new j,i=new Al,r=new ur,o=new j(1,1,1);function s(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(s),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new an},normalMatrix:{value:new $e}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ra.setFromAxisAngle(t,i),this.quaternion.multiply(Ra),this}rotateOnWorldAxis(t,i){return Ra.setFromAxisAngle(t,i),this.quaternion.premultiply(Ra),this}rotateX(t){return this.rotateOnAxis(fw,t)}rotateY(t){return this.rotateOnAxis(hw,t)}rotateZ(t){return this.rotateOnAxis(pw,t)}translateOnAxis(t,i){return dw.copy(t).applyQuaternion(this.quaternion),this.position.add(dw.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(fw,t)}translateY(t){return this.translateOnAxis(hw,t)}translateZ(t){return this.translateOnAxis(pw,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fr.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Uf.copy(t):Uf.set(t,i,r);let o=this.parent;this.updateWorldMatrix(!0,!1),_l.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fr.lookAt(_l,Uf,this.up):Fr.lookAt(Uf,_l,this.up),this.quaternion.setFromRotationMatrix(Fr),o&&(Fr.extractRotation(o.matrixWorld),Ra.setFromRotationMatrix(Fr),this.quaternion.premultiply(Ra.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(ze("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mw),Na.child=t,this.dispatchEvent(Na),Na.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(rF),$y.child=t,this.dispatchEvent($y),$y.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fr.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mw),Na.child=t,this.dispatchEvent(Na),Na.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,o=this.children.length;r<o;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,t,nF),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,iF,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,o=t.z,s=this.matrix.elements;s[12]+=i-s[0]*i-s[4]*r-s[8]*o,s[13]+=r-s[1]*i-s[5]*r-s[9]*o,s[14]+=o-s[2]*i-s[6]*r-s[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(c=>st(re({},c),{boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(c=>re({},c)),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function s(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(s(t.materials,this.material[l]));o.material=c}else o.material=s(t.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];o.animations.push(s(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),g=a(t.animations),x=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),g.length>0&&(r.animations=g),x.length>0&&(r.nodes=x)}return r.object=o,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let o=t.children[r];this.add(o.clone())}return this}}return n.DEFAULT_UP=new j(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),xs=class extends Cs{constructor(){super(),this.isGroup=!0,this.type="Group"}},oF={type:"move"},ja=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,s=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(oF)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new xs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},oC={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fo={h:0,s:0,l:0},Bf={h:0,s:0,l:0};function qy(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var mt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ct.workingColorSpace){if(e=YO(e,1),t=ut(t,0,1),i=ut(i,0,1),t===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+t):i+t-i*t,s=2*i-o;this.r=qy(s,o,e+1/3),this.g=qy(s,o,e),this.b=qy(s,o,e-1/3)}return ct.colorSpaceToWorking(this,r),this}setStyle(e,t=oi){function i(o){o!==void 0&&parseFloat(o)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=oi){let i=oC[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}copyLinearToSRGB(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return ct.workingToColorSpace(Fn.copy(this),e),Math.round(ut(Fn.r*255,0,255))*65536+Math.round(ut(Fn.g*255,0,255))*256+Math.round(ut(Fn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Fn.copy(this),t);let i=Fn.r,r=Fn.g,o=Fn.b,s=Math.max(i,r,o),a=Math.min(i,r,o),c,l,u=(a+s)/2;if(a===s)c=0,l=0;else{let d=s-a;switch(l=u<=.5?d/(s+a):d/(2-s-a),s){case i:c=(r-o)/d+(r<o?6:0);break;case r:c=(o-i)/d+2;break;case o:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=oi){ct.workingToColorSpace(Fn.copy(this),e);let t=Fn.r,i=Fn.g,r=Fn.b;return e!==oi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(fo),this.setHSL(fo.h+e,fo.s+t,fo.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fo),e.getHSL(Bf);let i=Hy(fo.h,Bf.h,t),r=Hy(fo.s,Bf.s,t),o=Hy(fo.l,Bf.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new mt;mt.NAMES=oC;var Rl=class extends Cs{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Al,this.environmentIntensity=1,this.environmentRotation=new Al,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Wi=new j,Lr=new j,Xy=new j,kr=new j,Pa=new j,Oa=new j,gw=new j,Yy=new j,Zy=new j,Jy=new j,Ky=new Yt,Qy=new Yt,e0=new Yt,vo=class n{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wi.subVectors(e,t),r.cross(Wi);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){Wi.subVectors(r,t),Lr.subVectors(i,t),Xy.subVectors(e,t);let s=Wi.dot(Wi),a=Wi.dot(Lr),c=Wi.dot(Xy),l=Lr.dot(Lr),u=Lr.dot(Xy),d=s*l-a*a;if(d===0)return o.set(0,0,0),null;let f=1/d,h=(l*c-a*u)*f,g=(s*u-a*c)*f;return o.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,kr)===null?!1:kr.x>=0&&kr.y>=0&&kr.x+kr.y<=1}static getInterpolation(e,t,i,r,o,s,a,c){return this.getBarycoord(e,t,i,r,kr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,kr.x),c.addScaledVector(s,kr.y),c.addScaledVector(a,kr.z),c)}static getInterpolatedAttribute(e,t,i,r,o,s){return Ky.setScalar(0),Qy.setScalar(0),e0.setScalar(0),Ky.fromBufferAttribute(e,t),Qy.fromBufferAttribute(e,i),e0.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Ky,o.x),s.addScaledVector(Qy,o.y),s.addScaledVector(e0,o.z),s}static isFrontFacing(e,t,i,r){return Wi.subVectors(i,t),Lr.subVectors(e,t),Wi.cross(Lr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wi.subVectors(this.c,this.b),Lr.subVectors(this.a,this.b),Wi.cross(Lr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,o){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,o=this.c,s,a;Pa.subVectors(r,i),Oa.subVectors(o,i),Yy.subVectors(e,i);let c=Pa.dot(Yy),l=Oa.dot(Yy);if(c<=0&&l<=0)return t.copy(i);Zy.subVectors(e,r);let u=Pa.dot(Zy),d=Oa.dot(Zy);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(i).addScaledVector(Pa,s);Jy.subVectors(e,o);let h=Pa.dot(Jy),g=Oa.dot(Jy);if(g>=0&&h<=g)return t.copy(o);let x=h*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Oa,a);let m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return gw.subVectors(o,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(gw,a);let p=1/(m+x+f);return s=x*p,a=f*p,t.copy(i).addScaledVector(Pa,s).addScaledVector(Oa,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_o=class{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=$i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,$i):$i.fromBufferAttribute(o,s),$i.applyMatrix4(e.matrixWorld),this.expandByPoint($i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vf.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vf.copy(i.boundingBox)),Vf.applyMatrix4(e.matrixWorld),this.union(Vf)}let r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$i),$i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xl),Hf.subVectors(this.max,xl),Fa.subVectors(e.a,xl),La.subVectors(e.b,xl),ka.subVectors(e.c,xl),ho.subVectors(La,Fa),po.subVectors(ka,La),ms.subVectors(Fa,ka);let t=[0,-ho.z,ho.y,0,-po.z,po.y,0,-ms.z,ms.y,ho.z,0,-ho.x,po.z,0,-po.x,ms.z,0,-ms.x,-ho.y,ho.x,0,-po.y,po.x,0,-ms.y,ms.x,0];return!t0(t,Fa,La,ka,Hf)||(t=[1,0,0,0,1,0,0,0,1],!t0(t,Fa,La,ka,Hf))?!1:(zf.crossVectors(ho,po),t=[zf.x,zf.y,zf.z],t0(t,Fa,La,ka,Hf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ur=[new j,new j,new j,new j,new j,new j,new j,new j],$i=new j,Vf=new _o,Fa=new j,La=new j,ka=new j,ho=new j,po=new j,ms=new j,xl=new j,Hf=new j,zf=new j,gs=new j;function t0(n,e,t,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){gs.fromArray(n,o);let a=r.x*Math.abs(gs.x)+r.y*Math.abs(gs.y)+r.z*Math.abs(gs.z),c=e.dot(gs),l=t.dot(gs),u=i.dot(gs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var sn=new j,Gf=new St,sF=0,si=class extends lr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sF++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=m0,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gf.fromBufferAttribute(this,t),Gf.applyMatrix3(e),this.setXY(t,Gf.x,Gf.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yl(t,this.array)),t}setX(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yl(t,this.array)),t}setY(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yl(t,this.array)),t}setW(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),i=qn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),i=qn(i,this.array),r=qn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),i=qn(i,this.array),r=qn(r,this.array),o=qn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==m0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Nl=class extends si{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Pl=class extends si{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ti=class extends si{constructor(e,t,i){super(new Float32Array(e),t,i)}},aF=new _o,bl=new j,n0=new j,Wa=class{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):aF.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bl.subVectors(e,this.center);let t=bl.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(bl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(n0.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bl.copy(e.center).add(n0)),this.expandByPoint(bl.copy(e.center).sub(n0))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},cF=0,Ci=new an,i0=new Cs,Ua=new j,ri=new _o,Sl=new _o,gn=new j,dr=class n extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cF++}),this.uuid=Zl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qO(e)?Pl:Nl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new $e().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,t,i){return Ci.makeTranslation(e,t,i),this.applyMatrix4(Ci),this}scale(e,t,i){return Ci.makeScale(e,t,i),this.applyMatrix4(Ci),this}lookAt(e){return i0.lookAt(e),i0.updateMatrix(),this.applyMatrix4(i0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ua).negate(),this.translate(Ua.x,Ua.y,Ua.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,o=e.length;r<o;r++){let s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ti(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _o);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let o=t[i];ri.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wa);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){let i=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){let a=t[o];Sl.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(ri.min,Sl.min),ri.expandByPoint(gn),gn.addVectors(ri.max,Sl.max),ri.expandByPoint(gn)):(ri.expandByPoint(Sl.min),ri.expandByPoint(Sl.max))}ri.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)gn.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(gn));if(t)for(let o=0,s=t.length;o<s;o++){let a=t[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)gn.fromBufferAttribute(a,l),c&&(Ua.fromBufferAttribute(e,l),gn.add(Ua)),r=Math.max(r,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*i.count),4));let s=this.getAttribute("tangent"),a=[],c=[];for(let y=0;y<i.count;y++)a[y]=new j,c[y]=new j;let l=new j,u=new j,d=new j,f=new St,h=new St,g=new St,x=new j,m=new j;function p(y,C,O){l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,O),f.fromBufferAttribute(o,y),h.fromBufferAttribute(o,C),g.fromBufferAttribute(o,O),u.sub(l),d.sub(l),h.sub(f),g.sub(f);let D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(D),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),a[y].add(x),a[C].add(x),a[O].add(x),c[y].add(m),c[C].add(m),c[O].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let y=0,C=b.length;y<C;++y){let O=b[y],D=O.start,H=O.count;for(let V=D,k=D+H;V<k;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let E=new j,M=new j,N=new j,w=new j;function I(y){N.fromBufferAttribute(r,y),w.copy(N);let C=a[y];E.copy(C),E.sub(N.multiplyScalar(N.dot(C))).normalize(),M.crossVectors(w,C);let D=M.dot(c[y])<0?-1:1;s.setXYZW(y,E.x,E.y,E.z,D)}for(let y=0,C=b.length;y<C;++y){let O=b[y],D=O.start,H=O.count;for(let V=D,k=D+H;V<k;V+=3)I(e.getX(V+0)),I(e.getX(V+1)),I(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new si(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new j,o=new j,s=new j,a=new j,c=new j,l=new j,u=new j,d=new j;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,x),s.fromBufferAttribute(t,m),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),h=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?h=c[x]*a.data.stride+a.offset:h=c[x]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new si(f,u,d)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let o=this.morphAttributes;for(let a in o){let c=[],l=o[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,c=s.length;a<c;a++){let l=s[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},o=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let o=e.morphAttributes;for(let l in o){let u=[],d=o[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,u=s.length;l<u;l++){let d=s[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var lF=0,Es=class extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lF++}),this.uuid=Zl(),this.name="",this.type="Material",this.blending=bs,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=oh,this.blendEquation=yo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=p0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==Hr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rh&&(i.blendSrc=this.blendSrc),this.blendDst!==oh&&(i.blendDst=this.blendDst),this.blendEquation!==yo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==p0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){let s=[];for(let a in o){let c=o[a];delete c.metadata,s.push(c)}return s}if(t){let o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Br=new j,r0=new j,jf=new j,mo=new j,o0=new j,Wf=new j,s0=new j,bh=class{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Br)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Br.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Br.copy(this.origin).addScaledVector(this.direction,t),Br.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){r0.copy(e).add(t).multiplyScalar(.5),jf.copy(t).sub(e).normalize(),mo.copy(this.origin).sub(r0);let o=e.distanceTo(t)*.5,s=-this.direction.dot(jf),a=mo.dot(this.direction),c=-mo.dot(jf),l=mo.lengthSq(),u=Math.abs(1-s*s),d,f,h,g;if(u>0)if(d=s*c-a,f=s*a-c,g=o*u,d>=0)if(f>=-g)if(f<=g){let x=1/u;d*=x,f*=x,h=d*(d+s*f+2*a)+f*(s*d+f+2*c)+l}else f=o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*c)+l;else f=-o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-c),o),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-o,-c),o),h=f*(f+2*c)+l):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-c),o),h=-d*d+f*(f+2*c)+l);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(r0).addScaledVector(jf,f),h}intersectSphere(e,t){Br.subVectors(e.center,this.origin);let i=Br.dot(this.direction),r=Br.dot(Br)-i*i,o=e.radius*e.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=i-s,c=i+s;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,s,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(o=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Br)!==null}intersectTriangle(e,t,i,r,o){o0.subVectors(t,e),Wf.subVectors(i,e),s0.crossVectors(o0,Wf);let s=this.direction.dot(s0),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;mo.subVectors(this.origin,e);let c=a*this.direction.dot(Wf.crossVectors(mo,Wf));if(c<0)return null;let l=a*this.direction.dot(o0.cross(mo));if(l<0||c+l>s)return null;let u=-a*mo.dot(s0);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ms=class extends Es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Al,this.combine=S0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},vw=new an,vs=new bh,$f=new Wa,yw=new j,qf=new j,Xf=new j,Yf=new j,a0=new j,Zf=new j,_w=new j,Jf=new j,Xn=class extends Cs{constructor(e=new dr,t=new Ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(o&&a){Zf.set(0,0,0);for(let c=0,l=o.length;c<l;c++){let u=a[c],d=o[c];u!==0&&(a0.fromBufferAttribute(d,e),s?Zf.addScaledVector(a0,u):Zf.addScaledVector(a0.sub(t),u))}t.add(Zf)}return t}raycast(e,t){let i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$f.copy(i.boundingSphere),$f.applyMatrix4(o),vs.copy(e.ray).recast(e.near),!($f.containsPoint(vs.origin)===!1&&(vs.intersectSphere($f,yw)===null||vs.origin.distanceToSquared(yw)>(e.far-e.near)**2))&&(vw.copy(o).invert(),vs.copy(e.ray).applyMatrix4(vw),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,i){let r,o=this.geometry,s=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,h=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=s[m.materialIndex],b=Math.max(m.start,h.start),E=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let M=b,N=E;M<N;M+=3){let w=a.getX(M),I=a.getX(M+1),y=a.getX(M+2);r=Kf(this,p,e,i,l,u,d,w,I,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){let b=a.getX(m),E=a.getX(m+1),M=a.getX(m+2);r=Kf(this,s,e,i,l,u,d,b,E,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=s[m.materialIndex],b=Math.max(m.start,h.start),E=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let M=b,N=E;M<N;M+=3){let w=M,I=M+1,y=M+2;r=Kf(this,p,e,i,l,u,d,w,I,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){let b=m,E=m+1,M=m+2;r=Kf(this,s,e,i,l,u,d,b,E,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function uF(n,e,t,i,r,o,s,a){let c;if(e.side===zn?c=i.intersectTriangle(s,o,r,!0,a):c=i.intersectTriangle(r,o,s,e.side===Hr,a),c===null)return null;Jf.copy(a),Jf.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Jf);return l<t.near||l>t.far?null:{distance:l,point:Jf.clone(),object:n}}function Kf(n,e,t,i,r,o,s,a,c,l){n.getVertexPosition(a,qf),n.getVertexPosition(c,Xf),n.getVertexPosition(l,Yf);let u=uF(n,e,t,i,qf,Xf,Yf,_w);if(u){let d=new j;vo.getBarycoord(_w,qf,Xf,Yf,d),r&&(u.uv=vo.getInterpolatedAttribute(r,a,c,l,d,new St)),o&&(u.uv1=vo.getInterpolatedAttribute(o,a,c,l,d,new St)),s&&(u.normal=vo.getInterpolatedAttribute(s,a,c,l,d,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new j,materialIndex:0};vo.getNormal(qf,Xf,Yf,f.normal),u.face=f,u.barycoord=d}return u}var Sh=class extends jr{constructor(e=null,t=1,i=1,r,o,s,a,c,l=vn,u=vn,d,f){super(null,s,a,c,l,u,r,o,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var c0=new j,dF=new j,fF=new $e,sr=class{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=c0.subVectors(i,t).cross(dF.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(c0),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||fF.getNormalMatrix(e),r=this.coplanarPoint(c0).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ys=new Wa,hF=new St(.5,.5),Qf=new j,Ol=class{constructor(e=new sr,t=new sr,i=new sr,r=new sr,o=new sr,s=new sr){this.planes=[e,t,i,r,o,s]}set(e,t,i,r,o,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qi,i=!1){let r=this.planes,o=e.elements,s=o[0],a=o[1],c=o[2],l=o[3],u=o[4],d=o[5],f=o[6],h=o[7],g=o[8],x=o[9],m=o[10],p=o[11],b=o[12],E=o[13],M=o[14],N=o[15];if(r[0].setComponents(l-s,h-u,p-g,N-b).normalize(),r[1].setComponents(l+s,h+u,p+g,N+b).normalize(),r[2].setComponents(l+a,h+d,p+x,N+E).normalize(),r[3].setComponents(l-a,h-d,p-x,N-E).normalize(),i)r[4].setComponents(c,f,m,M).normalize(),r[5].setComponents(l-c,h-f,p-m,N-M).normalize();else if(r[4].setComponents(l-c,h-f,p-m,N-M).normalize(),t===qi)r[5].setComponents(l+c,h+f,p+m,N+M).normalize();else if(t===Cl)r[5].setComponents(c,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){ys.center.set(0,0,0);let t=hF.distanceTo(e.center);return ys.radius=.7071067811865476+t,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Qf.x=r.normal.x>0?e.max.x:e.min.x,Qf.y=r.normal.y>0?e.max.y:e.min.y,Qf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qf)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Fl=class extends jr{constructor(e=[],t=Mo,i,r,o,s,a,c,l,u){super(e,t,i,r,o,s,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var zr=class extends jr{constructor(e,t,i=Yi,r,o,s,a=vn,c=vn,l,u=cr,d=1){if(u!==cr&&u!==Co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,r,o,s,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ga(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Eh=class extends zr{constructor(e,t=Yi,i=Mo,r,o,s=vn,a=vn,c,l=cr){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,o,s,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ll=class extends jr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},xo=class n extends dr{constructor(e=1,t=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let c=[],l=[],u=[],d=[],f=0,h=0;g("z","y","x",-1,-1,i,t,e,s,o,0),g("z","y","x",1,-1,i,t,-e,s,o,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,o,4),g("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new Ti(l,3)),this.setAttribute("normal",new Ti(u,3)),this.setAttribute("uv",new Ti(d,2));function g(x,m,p,b,E,M,N,w,I,y,C){let O=M/I,D=N/y,H=M/2,V=N/2,k=w/2,A=I+1,F=y+1,U=0,T=0,ne=new j;for(let $=0;$<F;$++){let oe=$*D-V;for(let _e=0;_e<A;_e++){let Fe=_e*O-H;ne[x]=Fe*b,ne[m]=oe*E,ne[p]=k,l.push(ne.x,ne.y,ne.z),ne[x]=0,ne[m]=0,ne[p]=w>0?1:-1,u.push(ne.x,ne.y,ne.z),d.push(_e/I),d.push(1-$/y),U+=1}}for(let $=0;$<y;$++)for(let oe=0;oe<I;oe++){let _e=f+oe+A*$,Fe=f+oe+A*($+1),Pe=f+(oe+1)+A*($+1),Ne=f+(oe+1)+A*$;c.push(_e,Fe,Ne),c.push(Fe,Pe,Ne),T+=6}a.addGroup(h,T,C),h+=T,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var kl=class n extends dr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let o=e/2,s=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,h=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let b=p*f-s;for(let E=0;E<l;E++){let M=E*d-o;g.push(M,-b,0),x.push(0,0,1),m.push(E/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){let E=b+l*p,M=b+l*(p+1),N=b+1+l*(p+1),w=b+1+l*p;h.push(E,M,w),h.push(M,N,w)}this.setIndex(h),this.setAttribute("position",new Ti(g,3)),this.setAttribute("normal",new Ti(x,3)),this.setAttribute("uv",new Ti(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};function Ts(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(xw(r))r.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(xw(r[0])){let o=[];for(let s=0,a=r.length;s<a;s++)o[s]=r[s].clone();e[t][i]=o}else e[t][i]=r.slice();else e[t][i]=r}}return e}function kn(n){let e={};for(let t=0;t<n.length;t++){let i=Ts(n[t]);for(let r in i)e[r]=i[r]}return e}function xw(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function pF(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function V0(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var sC={clone:Ts,merge:kn},mF=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gF=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ci=class extends Es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mF,this.fragmentShader=gF,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=pF(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Mh=class extends ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var wh=class extends Es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ch=class extends Es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function eh(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var bo=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],o=t[i-1];n:{e:{let s;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<o)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(o=r,r=t[++i],e<r)break e}s=t.length;break t}if(!(e>=o)){let a=t[1];e<a&&(i=2,o=a);for(let c=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=o,o=t[--i-1],e>=o)break e}s=i,i=0;break t}break n}for(;i<s;){let a=i+s>>>1;e<t[a]?s=a:i=a+1}if(r=t[i],o=t[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=e*r;for(let s=0;s!==r;++s)t[s]=i[o+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Th=class extends bo{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:d0,endingEnd:d0}}intervalChanged_(e,t,i){let r=this.parameterPositions,o=e-2,s=e+1,a=r[o],c=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case f0:o=e,a=2*t-i;break;case h0:o=r.length-2,a=t+r[o]-r[o+1];break;default:o=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case f0:s=e,c=2*i-t;break;case h0:s=1,c=i+r[1]-r[0];break;default:s=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=o*u,this._offsetNext=s*u}interpolate_(e,t,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-t)/(r-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,b=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,E=(-1-h)*m+(1.5+h)*x+.5*g,M=h*m-h*x;for(let N=0;N!==a;++N)o[N]=p*s[u+N]+b*s[l+N]+E*s[c+N]+M*s[d+N];return o}},Dh=class extends bo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)o[f]=s[l+f]*d+s[c+f]*u;return o}},Ah=class extends bo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ih=class extends bo{interpolate_(e,t,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.settings||this.DefaultSettings_,d=u.inTangents,f=u.outTangents;if(!d||!f){let x=(i-t)/(r-t),m=1-x;for(let p=0;p!==a;++p)o[p]=s[l+p]*m+s[c+p]*x;return o}let h=a*2,g=e-1;for(let x=0;x!==a;++x){let m=s[l+x],p=s[c+x],b=g*h+x*2,E=f[b],M=f[b+1],N=e*h+x*2,w=d[N],I=d[N+1],y=(i-t)/(r-t),C,O,D,H,V;for(let k=0;k<8;k++){C=y*y,O=C*y,D=1-y,H=D*D,V=H*D;let F=V*t+3*H*y*E+3*D*C*w+O*r-i;if(Math.abs(F)<1e-10)break;let U=3*H*(E-t)+6*D*y*(w-E)+3*C*(r-w);if(Math.abs(U)<1e-10)break;y=y-F/U,y=Math.max(0,Math.min(1,y))}o[x]=V*m+3*H*y*M+3*D*C*I+O*p}return o}},li=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=eh(t,this.TimeBufferType),this.values=eh(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:eh(e.times,Array),values:eh(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Dh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Th(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ih(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case El:t=this.InterpolantFactoryMethodDiscrete;break;case mh:t=this.InterpolantFactoryMethodLinear;break;case ih:t=this.InterpolantFactoryMethodSmooth;break;case u0:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Be("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return El;case this.InterpolantFactoryMethodLinear:return mh;case this.InterpolantFactoryMethodSmooth:return ih;case this.InterpolantFactoryMethodBezier:return u0}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,o=0,s=r-1;for(;o!==r&&i[o]<e;)++o;for(;s!==-1&&i[s]>t;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=i.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,o=i.length;o===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==o;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){ze("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(s!==null&&s>c){ze("KeyframeTrack: Out of order keys.",this,a,c,s),e=!1;break}s=c}if(r!==void 0&&XO(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){ze("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ih,o=e.length-1,s=1;for(let a=1;a<o;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,h=d+i;for(let g=0;g!==i;++g){let x=t[d+g];if(x!==t[f+g]||x!==t[h+g]){c=!0;break}}}if(c){if(a!==s){e[s]=e[a];let d=a*i,f=s*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++s}}if(o>0){e[s]=e[o];for(let a=o*i,c=s*i,l=0;l!==i;++l)t[c+l]=t[a+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};li.prototype.ValueTypeName="";li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=mh;var So=class extends li{constructor(e,t,i){super(e,t,i)}};So.prototype.ValueTypeName="bool";So.prototype.ValueBufferType=Array;So.prototype.DefaultInterpolation=El;So.prototype.InterpolantFactoryMethodLinear=void 0;So.prototype.InterpolantFactoryMethodSmooth=void 0;var Rh=class extends li{constructor(e,t,i,r){super(e,t,i,r)}};Rh.prototype.ValueTypeName="color";var Nh=class extends li{constructor(e,t,i,r){super(e,t,i,r)}};Nh.prototype.ValueTypeName="number";var Ph=class extends bo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)ur.slerpFlat(o,0,s,l-a,s,l,c);return o}},Ul=class extends li{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Ph(this.times,this.values,this.getValueSize(),e)}};Ul.prototype.ValueTypeName="quaternion";Ul.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends li{constructor(e,t,i){super(e,t,i)}};Eo.prototype.ValueTypeName="string";Eo.prototype.ValueBufferType=Array;Eo.prototype.DefaultInterpolation=El;Eo.prototype.InterpolantFactoryMethodLinear=void 0;Eo.prototype.InterpolantFactoryMethodSmooth=void 0;var Oh=class extends li{constructor(e,t,i,r){super(e,t,i,r)}};Oh.prototype.ValueTypeName="vector";var th=new j,nh=new ur,or=new j,Bl=class extends Cs{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(th,nh,or),or.x===1&&or.y===1&&or.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(th,nh,or.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(th,nh,or),or.x===1&&or.y===1&&or.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(th,nh,or.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},go=new j,bw=new St,Sw=new St,Ln=class extends Bl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=vh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Vy*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vh*2*Math.atan(Math.tan(Vy*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){go.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(go.x,go.y).multiplyScalar(-e/go.z),go.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(go.x,go.y).multiplyScalar(-e/go.z)}getViewSize(e,t){return this.getViewBounds(e,bw,Sw),t.subVectors(Sw,bw)}setViewOffset(e,t,i,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Vy*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let c=s.fullWidth,l=s.fullHeight;o+=s.offsetX*r/c,t-=s.offsetY*i/l,r*=s.width/c,i*=s.height/l}let a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Vl=class extends Bl{constructor(e=-1,t=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=i-e,s=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,s=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Ba=-90,Va=1,Fh=class extends Cs{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ln(Ba,Va,e,t);r.layers=this.layers,this.add(r);let o=new Ln(Ba,Va,e,t);o.layers=this.layers,this.add(o);let s=new Ln(Ba,Va,e,t);s.layers=this.layers,this.add(s);let a=new Ln(Ba,Va,e,t);a.layers=this.layers,this.add(a);let c=new Ln(Ba,Va,e,t);c.layers=this.layers,this.add(c);let l=new Ln(Ba,Va,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,o,s,a,c]=t;for(let l of t)this.remove(l);if(e===qi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Cl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Lh=class extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var H0="\\[\\]\\.:\\/",vF=new RegExp("["+H0+"]","g"),z0="[^"+H0+"]",yF="[^"+H0.replace("\\.","")+"]",_F=/((?:WC+[\/:])*)/.source.replace("WC",z0),xF=/(WCOD+)?/.source.replace("WCOD",yF),bF=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",z0),SF=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",z0),EF=new RegExp("^"+_F+xF+bF+SF+"$"),MF=["material","materials","bones","map"],g0=class{constructor(e,t,i){let r=i||Xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Xt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(vF,"")}static parseTrackName(t){let i=EF.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},o=r.nodeName&&r.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){let s=r.nodeName.substring(o+1);MF.indexOf(s)!==-1&&(r.nodeName=r.nodeName.substring(0,o),r.objectName=s)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(s){for(let a=0;a<s.length;a++){let c=s[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},o=r(t.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)t[i++]=r[o]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)r[o]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)r[o]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)r[o]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,o=i.propertyName,s=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[o];if(a===void 0){let u=i.nodeName;ze("PropertyBinding: Trying to update property for track: "+u+"."+o+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(o==="morphTargetInfluences"){if(!t.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=o;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=g0,n})();Xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xt.prototype.GetterByBindingType=[Xt.prototype._getValue_direct,Xt.prototype._getValue_array,Xt.prototype._getValue_arrayElement,Xt.prototype._getValue_toArray];Xt.prototype.SetterByBindingTypeAndVersioning=[[Xt.prototype._setValue_direct,Xt.prototype._setValue_direct_setNeedsUpdate,Xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_array,Xt.prototype._setValue_array_setNeedsUpdate,Xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_arrayElement,Xt.prototype._setValue_arrayElement_setNeedsUpdate,Xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_fromArray,Xt.prototype._setValue_fromArray_setNeedsUpdate,Xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var aJ=new Float32Array(1);var v0=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let o=this.elements;return o[0]=e,o[2]=t,o[1]=i,o[3]=r,this}};function G0(n,e,t,i){let r=wF(i);switch(t){case O0:return n*e;case L0:return n*e/r.components*r.byteLength;case Gh:return n*e/r.components*r.byteLength;case To:return n*e*2/r.components*r.byteLength;case jh:return n*e*2/r.components*r.byteLength;case F0:return n*e*3/r.components*r.byteLength;case Di:return n*e*4/r.components*r.byteLength;case Wh:return n*e*4/r.components*r.byteLength;case jl:case Wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $l:case ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qh:case Yh:return Math.max(n,16)*Math.max(e,8)/4;case $h:case Xh:return Math.max(n,8)*Math.max(e,8)/2;case Zh:case Jh:case Qh:case ep:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Kh:case Xl:case tp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case np:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ip:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case rp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case op:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case sp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ap:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case cp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case lp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case up:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case dp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case fp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case hp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case pp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case mp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case gp:case vp:case yp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case _p:case xp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Yl:case bp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wF(n){switch(n){case ui:case I0:return{byteLength:1,components:1};case qa:case R0:case pr:return{byteLength:2,components:1};case Hh:case zh:return{byteLength:2,components:4};case Yi:case Vh:case Zi:return{byteLength:4,components:1};case N0:case P0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function AC(){let n=null,e=!1,t=null,i=null;function r(o,s){t(o,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function TF(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){let g=d[f],x=d[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){let x=d[h];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function s(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:o,update:s}}var DF=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AF=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,IF=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RF=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NF=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PF=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OF=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,FF=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LF=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,kF=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UF=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BF=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VF=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,HF=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zF=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,GF=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$F=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qF=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,XF=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,YF=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ZF=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,JF=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,KF=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,QF=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rL="gl_FragColor = linearToOutputTexel( gl_FragColor );",oL=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,aL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cL=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mL=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yL=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_L=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,xL=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SL=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ML=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wL=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,CL=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,TL=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,DL=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AL=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IL=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,RL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,UL=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HL=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zL=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jL=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,WL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$L=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qL=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,XL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JL=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,KL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,r2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,d2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,f2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,h2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,p2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,g2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,y2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,S2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,E2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,M2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,C2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,T2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,D2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,F2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,L2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,k2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,U2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,G2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,q2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Y2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Z2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Q2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ek=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tk=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nk=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ik=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rk=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ok=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sk=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ak=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:DF,alphahash_pars_fragment:AF,alphamap_fragment:IF,alphamap_pars_fragment:RF,alphatest_fragment:NF,alphatest_pars_fragment:PF,aomap_fragment:OF,aomap_pars_fragment:FF,batching_pars_vertex:LF,batching_vertex:kF,begin_vertex:UF,beginnormal_vertex:BF,bsdfs:VF,iridescence_fragment:HF,bumpmap_pars_fragment:zF,clipping_planes_fragment:GF,clipping_planes_pars_fragment:jF,clipping_planes_pars_vertex:WF,clipping_planes_vertex:$F,color_fragment:qF,color_pars_fragment:XF,color_pars_vertex:YF,color_vertex:ZF,common:JF,cube_uv_reflection_fragment:KF,defaultnormal_vertex:QF,displacementmap_pars_vertex:eL,displacementmap_vertex:tL,emissivemap_fragment:nL,emissivemap_pars_fragment:iL,colorspace_fragment:rL,colorspace_pars_fragment:oL,envmap_fragment:sL,envmap_common_pars_fragment:aL,envmap_pars_fragment:cL,envmap_pars_vertex:lL,envmap_physical_pars_fragment:xL,envmap_vertex:uL,fog_vertex:dL,fog_pars_vertex:fL,fog_fragment:hL,fog_pars_fragment:pL,gradientmap_pars_fragment:mL,lightmap_pars_fragment:gL,lights_lambert_fragment:vL,lights_lambert_pars_fragment:yL,lights_pars_begin:_L,lights_toon_fragment:bL,lights_toon_pars_fragment:SL,lights_phong_fragment:EL,lights_phong_pars_fragment:ML,lights_physical_fragment:wL,lights_physical_pars_fragment:CL,lights_fragment_begin:TL,lights_fragment_maps:DL,lights_fragment_end:AL,lightprobes_pars_fragment:IL,logdepthbuf_fragment:RL,logdepthbuf_pars_fragment:NL,logdepthbuf_pars_vertex:PL,logdepthbuf_vertex:OL,map_fragment:FL,map_pars_fragment:LL,map_particle_fragment:kL,map_particle_pars_fragment:UL,metalnessmap_fragment:BL,metalnessmap_pars_fragment:VL,morphinstance_vertex:HL,morphcolor_vertex:zL,morphnormal_vertex:GL,morphtarget_pars_vertex:jL,morphtarget_vertex:WL,normal_fragment_begin:$L,normal_fragment_maps:qL,normal_pars_fragment:XL,normal_pars_vertex:YL,normal_vertex:ZL,normalmap_pars_fragment:JL,clearcoat_normal_fragment_begin:KL,clearcoat_normal_fragment_maps:QL,clearcoat_pars_fragment:e2,iridescence_pars_fragment:t2,opaque_fragment:n2,packing:i2,premultiplied_alpha_fragment:r2,project_vertex:o2,dithering_fragment:s2,dithering_pars_fragment:a2,roughnessmap_fragment:c2,roughnessmap_pars_fragment:l2,shadowmap_pars_fragment:u2,shadowmap_pars_vertex:d2,shadowmap_vertex:f2,shadowmask_pars_fragment:h2,skinbase_vertex:p2,skinning_pars_vertex:m2,skinning_vertex:g2,skinnormal_vertex:v2,specularmap_fragment:y2,specularmap_pars_fragment:_2,tonemapping_fragment:x2,tonemapping_pars_fragment:b2,transmission_fragment:S2,transmission_pars_fragment:E2,uv_pars_fragment:M2,uv_pars_vertex:w2,uv_vertex:C2,worldpos_vertex:T2,background_vert:D2,background_frag:A2,backgroundCube_vert:I2,backgroundCube_frag:R2,cube_vert:N2,cube_frag:P2,depth_vert:O2,depth_frag:F2,distance_vert:L2,distance_frag:k2,equirect_vert:U2,equirect_frag:B2,linedashed_vert:V2,linedashed_frag:H2,meshbasic_vert:z2,meshbasic_frag:G2,meshlambert_vert:j2,meshlambert_frag:W2,meshmatcap_vert:$2,meshmatcap_frag:q2,meshnormal_vert:X2,meshnormal_frag:Y2,meshphong_vert:Z2,meshphong_frag:J2,meshphysical_vert:K2,meshphysical_frag:Q2,meshtoon_vert:ek,meshtoon_frag:tk,points_vert:nk,points_frag:ik,shadow_vert:rk,shadow_frag:ok,sprite_vert:sk,sprite_frag:ak},ve={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},gr={basic:{uniforms:kn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:kn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new mt(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:kn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:kn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:kn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new mt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:kn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:kn([ve.points,ve.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:kn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:kn([ve.common,ve.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:kn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:kn([ve.sprite,ve.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:kn([ve.common,ve.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:kn([ve.lights,ve.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};gr.physical={uniforms:kn([gr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var Mp={r:0,b:0,g:0},ck=new an,IC=new $e;IC.set(-1,0,0,0,1,0,0,0,1);function lk(n,e,t,i,r,o){let s=new mt(0),a=r===!0?0:1,c,l,u=null,d=0,f=null;function h(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){let M=b.backgroundBlurriness>0;E=e.get(E,M)}return E}function g(b){let E=!1,M=h(b);M===null?m(s,a):M&&M.isColor&&(m(M,1),E=!0);let N=n.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(b,E){let M=h(E);M&&(M.isCubeTexture||M.mapping===zl)?(l===void 0&&(l=new Xn(new xo(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Ts(gr.backgroundCube.uniforms),vertexShader:gr.backgroundCube.vertexShader,fragmentShader:gr.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(N,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ck.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(IC),l.material.toneMapped=ct.getTransfer(M.colorSpace)!==bt,(u!==M||d!==M.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,f=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Xn(new kl(2,2),new ci({name:"BackgroundMaterial",uniforms:Ts(gr.background.uniforms),vertexShader:gr.background.vertexShader,fragmentShader:gr.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ct.getTransfer(M.colorSpace)!==bt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,E){b.getRGB(Mp,V0(n)),t.buffers.color.setClear(Mp.r,Mp.g,Mp.b,E,o)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(b,E=1){s.set(b),a=E,m(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(s,a)},render:g,addToRenderList:x,dispose:p}}function uk(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),o=r,s=!1;function a(D,H,V,k,A){let F=!1,U=d(D,k,V,H);o!==U&&(o=U,l(o.object)),F=h(D,k,V,A),F&&g(D,k,V,A),A!==null&&e.update(A,n.ELEMENT_ARRAY_BUFFER),(F||s)&&(s=!1,M(D,H,V,k),A!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))}function c(){return n.createVertexArray()}function l(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function d(D,H,V,k){let A=k.wireframe===!0,F=i[H.id];F===void 0&&(F={},i[H.id]=F);let U=D.isInstancedMesh===!0?D.id:0,T=F[U];T===void 0&&(T={},F[U]=T);let ne=T[V.id];ne===void 0&&(ne={},T[V.id]=ne);let $=ne[A];return $===void 0&&($=f(c()),ne[A]=$),$}function f(D){let H=[],V=[],k=[];for(let A=0;A<t;A++)H[A]=0,V[A]=0,k[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:V,attributeDivisors:k,object:D,attributes:{},index:null}}function h(D,H,V,k){let A=o.attributes,F=H.attributes,U=0,T=V.getAttributes();for(let ne in T)if(T[ne].location>=0){let oe=A[ne],_e=F[ne];if(_e===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(_e=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(_e=D.instanceColor)),oe===void 0||oe.attribute!==_e||_e&&oe.data!==_e.data)return!0;U++}return o.attributesNum!==U||o.index!==k}function g(D,H,V,k){let A={},F=H.attributes,U=0,T=V.getAttributes();for(let ne in T)if(T[ne].location>=0){let oe=F[ne];oe===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor));let _e={};_e.attribute=oe,oe&&oe.data&&(_e.data=oe.data),A[ne]=_e,U++}o.attributes=A,o.attributesNum=U,o.index=k}function x(){let D=o.newAttributes;for(let H=0,V=D.length;H<V;H++)D[H]=0}function m(D){p(D,0)}function p(D,H){let V=o.newAttributes,k=o.enabledAttributes,A=o.attributeDivisors;V[D]=1,k[D]===0&&(n.enableVertexAttribArray(D),k[D]=1),A[D]!==H&&(n.vertexAttribDivisor(D,H),A[D]=H)}function b(){let D=o.newAttributes,H=o.enabledAttributes;for(let V=0,k=H.length;V<k;V++)H[V]!==D[V]&&(n.disableVertexAttribArray(V),H[V]=0)}function E(D,H,V,k,A,F,U){U===!0?n.vertexAttribIPointer(D,H,V,A,F):n.vertexAttribPointer(D,H,V,k,A,F)}function M(D,H,V,k){x();let A=k.attributes,F=V.getAttributes(),U=H.defaultAttributeValues;for(let T in F){let ne=F[T];if(ne.location>=0){let $=A[T];if($===void 0&&(T==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),T==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){let oe=$.normalized,_e=$.itemSize,Fe=e.get($);if(Fe===void 0)continue;let Pe=Fe.buffer,Ne=Fe.type,Y=Fe.bytesPerElement,ge=Ne===n.INT||Ne===n.UNSIGNED_INT||$.gpuType===Vh;if($.isInterleavedBufferAttribute){let se=$.data,Oe=se.stride,Ve=$.offset;if(se.isInstancedInterleavedBuffer){for(let Le=0;Le<ne.locationSize;Le++)p(ne.location+Le,se.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Le=0;Le<ne.locationSize;Le++)m(ne.location+Le);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let Le=0;Le<ne.locationSize;Le++)E(ne.location+Le,_e/ne.locationSize,Ne,oe,Oe*Y,(Ve+_e/ne.locationSize*Le)*Y,ge)}else{if($.isInstancedBufferAttribute){for(let se=0;se<ne.locationSize;se++)p(ne.location+se,$.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let se=0;se<ne.locationSize;se++)m(ne.location+se);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let se=0;se<ne.locationSize;se++)E(ne.location+se,_e/ne.locationSize,Ne,oe,_e*Y,_e/ne.locationSize*se*Y,ge)}}else if(U!==void 0){let oe=U[T];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(ne.location,oe);break;case 3:n.vertexAttrib3fv(ne.location,oe);break;case 4:n.vertexAttrib4fv(ne.location,oe);break;default:n.vertexAttrib1fv(ne.location,oe)}}}}b()}function N(){C();for(let D in i){let H=i[D];for(let V in H){let k=H[V];for(let A in k){let F=k[A];for(let U in F)u(F[U].object),delete F[U];delete k[A]}}delete i[D]}}function w(D){if(i[D.id]===void 0)return;let H=i[D.id];for(let V in H){let k=H[V];for(let A in k){let F=k[A];for(let U in F)u(F[U].object),delete F[U];delete k[A]}}delete i[D.id]}function I(D){for(let H in i){let V=i[H];for(let k in V){let A=V[k];if(A[D.id]===void 0)continue;let F=A[D.id];for(let U in F)u(F[U].object),delete F[U];delete A[D.id]}}}function y(D){for(let H in i){let V=i[H],k=D.isInstancedMesh===!0?D.id:0,A=V[k];if(A!==void 0){for(let F in A){let U=A[F];for(let T in U)u(U[T].object),delete U[T];delete A[F]}delete V[k],Object.keys(V).length===0&&delete i[H]}}}function C(){O(),s=!0,o!==r&&(o=r,l(o.object))}function O(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:O,dispose:N,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function dk(n,e,t){let i;function r(c){i=c}function o(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function s(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let f=0;for(let h=0;h<u;h++)f+=l[h];t.update(f,i,1)}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a}function fk(n,e,t,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(I){return!(I!==Di&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let y=I===pr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ui&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Zi&&!y)}function c(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(Be("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:M,maxSamples:N,samples:w}}function hk(n){let e=this,t=null,i=0,r=!1,o=!1,s=new sr,a=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||o&&!m)o?u(null):l();else{let b=o?0:i,E=b*4,M=p.clippingState||null;c.value=M,M=u(g,f,E,h);for(let N=0;N!==E;++N)M[N]=t[N];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=h+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,M=h;E!==x;++E,M+=4)s.copy(d[E]).applyMatrix4(b,a),s.normal.toArray(m,M),m[M+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Do=4,aC=[.125,.215,.35,.446,.526,.582],Ds=20,pk=256,Jl=new Vl,cC=new mt,j0=null,W0=0,$0=0,q0=!1,mk=new j,Cp=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,o={}){let{size:s=256,position:a=mk}=o;j0=this._renderer.getRenderTarget(),W0=this._renderer.getActiveCubeFace(),$0=this._renderer.getActiveMipmapLevel(),q0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dC(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uC(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(j0,W0,$0),this._renderer.xr.enabled=q0,e.scissorTest=!1,Ya(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mo||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),j0=this._renderer.getRenderTarget(),W0=this._renderer.getActiveCubeFace(),$0=this._renderer.getActiveMipmapLevel(),q0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:pr,format:Di,colorSpace:Ml,depthBuffer:!1},r=lC(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lC(e,t,i);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gk(o)),this._blurMaterial=yk(o,e,t),this._ggxMaterial=vk(o,e,t)}return r}_compileMaterial(e){let t=new Xn(new dr,e);this._renderer.compile(t,Jl)}_sceneToCubeUV(e,t,i,r,o){let c=new Ln(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(cC),d.toneMapping=Xi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xn(new xo,new Ms({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(cC),p=!0);for(let E=0;E<6;E++){let M=E%3;M===0?(c.up.set(0,l[E],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+u[E],o.y,o.z)):M===1?(c.up.set(0,0,l[E]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+u[E],o.z)):(c.up.set(0,l[E],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+u[E]));let N=this._cubeSize;Ya(r,M*N,E>2?N:0,N,N),d.setRenderTarget(r),p&&d.render(x,c),d.render(e,c)}d.toneMapping=h,d.autoClear=f,e.background=b}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Mo||e.mapping===ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dC()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uC());let o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;let a=o.uniforms;a.envMap.value=e;let c=this._cubeSize;Ya(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,Jl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[i];a.material=s;let c=s.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),f=0+l*1.25,h=d*f,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-Do?i-g+Do:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=g-t,Ya(o,m,p,3*x,2*x),r.setRenderTarget(o),r.render(a,Jl),c.envMap.value=o.texture,c.roughness.value=0,c.mipInt.value=g-i,Ya(e,m,p,3*x,2*x),r.setRenderTarget(e),r.render(a,Jl)}_blur(e,t,i,r,o){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,s,a){let c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&ze("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[r];d.material=l;let f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*h):2*Math.PI/(2*Ds-1),x=o/g,m=isFinite(o)?1+Math.floor(u*x):Ds;m>Ds&&Be(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ds}`);let p=[],b=0;for(let I=0;I<Ds;++I){let y=I/x,C=Math.exp(-y*y/2);p.push(C),I===0?b+=C:I<m&&(b+=2*C)}for(let I=0;I<p.length;I++)p[I]=p[I]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;let M=this._sizeLods[r],N=3*M*(r>E-Do?r-E+Do:0),w=4*(this._cubeSize-M);Ya(t,N,w,3*M,2*M),c.setRenderTarget(t),c.render(d,Jl)}};function gk(n){let e=[],t=[],i=[],r=n,o=n-Do+1+aC.length;for(let s=0;s<o;s++){let a=Math.pow(2,r);e.push(a);let c=1/a;s>n-Do?c=aC[s-n+Do-1]:s===0&&(c=0),t.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,x=3,m=2,p=1,b=new Float32Array(x*g*h),E=new Float32Array(m*g*h),M=new Float32Array(p*g*h);for(let w=0;w<h;w++){let I=w%3*2/3-1,y=w>2?0:-1,C=[I,y,0,I+2/3,y,0,I+2/3,y+1,0,I,y,0,I+2/3,y+1,0,I,y+1,0];b.set(C,x*g*w),E.set(f,m*g*w);let O=[w,w,w,w,w,w];M.set(O,p*g*w)}let N=new dr;N.setAttribute("position",new si(b,x)),N.setAttribute("uv",new si(E,m)),N.setAttribute("faceIndex",new si(M,p)),i.push(new Xn(N,null)),r>Do&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function lC(n,e,t){let i=new ai(n,e,t);return i.texture.mapping=zl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ya(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function vk(n,e,t){return new ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pk,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ap(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function yk(n,e,t){let i=new Float32Array(Ds),r=new j(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function uC(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function dC(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Ap(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Tp=class extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Fl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new xo(5,5,5),o=new ci({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zn,blending:hr});o.uniforms.tEquirect.value=t;let s=new Xn(r,o),a=t.minFilter;return t.minFilter===wo&&(t.minFilter=Cn),new Fh(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(o)}};function _k(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?s(f):o(f)}function o(f){if(f&&f.isTexture){let h=f.mapping;if(h===kh||h===Uh)if(e.has(f)){let g=e.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new Tp(g.height);return x.fromEquirectangularTexture(n,f),e.set(f,x),f.addEventListener("dispose",l),a(x.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){let h=f.mapping,g=h===kh||h===Uh,x=h===Mo||h===ws;if(g||x){let m=t.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new Cp(n)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let b=f.image;return g&&b&&b.height>0||x&&b&&c(b)?(i===null&&(i=new Cp(n)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,h){return h===kh?f.mapping=Mo:h===Uh&&(f.mapping=ws),f}function c(f){let h=0,g=6;for(let x=0;x<g;x++)f[x]!==void 0&&h++;return h===g}function l(f){let h=f.target;h.removeEventListener("dispose",l);let g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(f){let h=f.target;h.removeEventListener("dispose",u);let g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function xk(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&gh("WebGLRenderer: "+i+" extension not supported."),r}}}function bk(n,e,t,i){let r={},o=new WeakMap;function s(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete r[f.id];let h=o.get(f);h&&(e.remove(h),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function l(d){let f=[],h=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(h!==null){let b=h.array;x=h.version;for(let E=0,M=b.length;E<M;E+=3){let N=b[E+0],w=b[E+1],I=b[E+2];f.push(N,w,w,I,I,N)}}else{let b=g.array;x=g.version;for(let E=0,M=b.length/3-1;E<M;E+=3){let N=E+0,w=E+1,I=E+2;f.push(N,w,w,I,I,N)}}let m=new(g.count>=65535?Pl:Nl)(f,1);m.version=x;let p=o.get(d);p&&e.remove(p),o.set(d,m)}function u(d){let f=o.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return o.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Sk(n,e,t){let i;function r(d){i=d}let o,s;function a(d){o=d.type,s=d.bytesPerElement}function c(d,f){n.drawElements(i,f,o,d*s),t.update(f,i,1)}function l(d,f,h){h!==0&&(n.drawElementsInstanced(i,f,o,d*s,h),t.update(f,i,h))}function u(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,o,d,0,h);let x=0;for(let m=0;m<h;m++)x+=f[m];t.update(x,i,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ek(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:ze("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Mk(n,e,t){let i=new WeakMap,r=new Yt;function o(s,a,c){let l=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let O=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",O)};var h=O;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],M=0;g===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let N=a.attributes.position.count*M,w=1;N>e.maxTextureSize&&(w=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);let I=new Float32Array(N*w*4*d),y=new Dl(I,N,w,d);y.type=Zi,y.needsUpdate=!0;let C=M*4;for(let D=0;D<d;D++){let H=p[D],V=b[D],k=E[D],A=N*w*4*D;for(let F=0;F<H.count;F++){let U=F*C;g===!0&&(r.fromBufferAttribute(H,F),I[A+U+0]=r.x,I[A+U+1]=r.y,I[A+U+2]=r.z,I[A+U+3]=0),x===!0&&(r.fromBufferAttribute(V,F),I[A+U+4]=r.x,I[A+U+5]=r.y,I[A+U+6]=r.z,I[A+U+7]=0),m===!0&&(r.fromBufferAttribute(k,F),I[A+U+8]=r.x,I[A+U+9]=r.y,I[A+U+10]=r.z,I[A+U+11]=k.itemSize===4?r.w:1)}}f={count:d,texture:y,size:new St(N,w)},i.set(a,f),a.addEventListener("dispose",O)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:o}}function wk(n,e,t,i,r){let o=new WeakMap;function s(l){let u=r.render.frame,d=l.geometry,f=e.get(l,d);if(o.get(f)!==u&&(e.update(f),o.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),o.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),o.set(l,u))),l.isSkinnedMesh){let h=l.skeleton;o.get(h)!==u&&(h.update(),o.set(h,u))}return f}function a(){o=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}var Ck={[E0]:"LINEAR_TONE_MAPPING",[M0]:"REINHARD_TONE_MAPPING",[w0]:"CINEON_TONE_MAPPING",[C0]:"ACES_FILMIC_TONE_MAPPING",[D0]:"AGX_TONE_MAPPING",[A0]:"NEUTRAL_TONE_MAPPING",[T0]:"CUSTOM_TONE_MAPPING"};function Tk(n,e,t,i,r){let o=new ai(e,t,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new zr(e,t):void 0}),s=new ai(e,t,{type:pr,depthBuffer:!1,stencilBuffer:!1}),a=new dr;a.setAttribute("position",new Ti([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ti([0,2,0,0,2,0],2));let c=new Mh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Xn(a,c),u=new Vl(-1,1,1,-1,0,1),d=null,f=null,h=!1,g,x=null,m=[],p=!1;this.setSize=function(b,E){o.setSize(b,E),s.setSize(b,E);for(let M=0;M<m.length;M++){let N=m[M];N.setSize&&N.setSize(b,E)}},this.setEffects=function(b){m=b,p=m.length>0&&m[0].isRenderPass===!0;let E=o.width,M=o.height;for(let N=0;N<m.length;N++){let w=m[N];w.setSize&&w.setSize(E,M)}},this.begin=function(b,E){if(h||b.toneMapping===Xi&&m.length===0)return!1;if(x=E,E!==null){let M=E.width,N=E.height;(o.width!==M||o.height!==N)&&this.setSize(M,N)}return p===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=Xi,!0},this.hasRenderPass=function(){return p},this.end=function(b,E){b.toneMapping=g,h=!0;let M=o,N=s;for(let w=0;w<m.length;w++){let I=m[w];if(I.enabled!==!1&&(I.render(b,N,M,E),I.needsSwap!==!1)){let y=M;M=N,N=y}}if(d!==b.outputColorSpace||f!==b.toneMapping){d=b.outputColorSpace,f=b.toneMapping,c.defines={},ct.getTransfer(d)===bt&&(c.defines.SRGB_TRANSFER="");let w=Ck[f];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,b.setRenderTarget(x),b.render(l,u),x=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),a.dispose(),c.dispose()}}var RC=new jr,Z0=new zr(1,1),NC=new Dl,PC=new xh,OC=new Fl,fC=[],hC=[],pC=new Float32Array(16),mC=new Float32Array(9),gC=new Float32Array(4);function Ja(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,o=fC[r];if(o===void 0&&(o=new Float32Array(r),fC[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function dn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function fn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ip(n,e){let t=hC[e];t===void 0&&(t=new Int32Array(e),hC[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Dk(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ak(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2fv(this.addr,e),fn(t,e)}}function Ik(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;n.uniform3fv(this.addr,e),fn(t,e)}}function Rk(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4fv(this.addr,e),fn(t,e)}}function Nk(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,i))return;gC.set(i),n.uniformMatrix2fv(this.addr,!1,gC),fn(t,i)}}function Pk(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,i))return;mC.set(i),n.uniformMatrix3fv(this.addr,!1,mC),fn(t,i)}}function Ok(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,i))return;pC.set(i),n.uniformMatrix4fv(this.addr,!1,pC),fn(t,i)}}function Fk(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Lk(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2iv(this.addr,e),fn(t,e)}}function kk(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3iv(this.addr,e),fn(t,e)}}function Uk(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4iv(this.addr,e),fn(t,e)}}function Bk(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Vk(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2uiv(this.addr,e),fn(t,e)}}function Hk(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3uiv(this.addr,e),fn(t,e)}}function zk(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4uiv(this.addr,e),fn(t,e)}}function Gk(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(Z0.compareFunction=t.isReversedDepthBuffer()?Ep:Sp,o=Z0):o=RC,t.setTexture2D(e||o,r)}function jk(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||PC,r)}function Wk(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||OC,r)}function $k(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||NC,r)}function qk(n){switch(n){case 5126:return Dk;case 35664:return Ak;case 35665:return Ik;case 35666:return Rk;case 35674:return Nk;case 35675:return Pk;case 35676:return Ok;case 5124:case 35670:return Fk;case 35667:case 35671:return Lk;case 35668:case 35672:return kk;case 35669:case 35673:return Uk;case 5125:return Bk;case 36294:return Vk;case 36295:return Hk;case 36296:return zk;case 35678:case 36198:case 36298:case 36306:case 35682:return Gk;case 35679:case 36299:case 36307:return jk;case 35680:case 36300:case 36308:case 36293:return Wk;case 36289:case 36303:case 36311:case 36292:return $k}}function Xk(n,e){n.uniform1fv(this.addr,e)}function Yk(n,e){let t=Ja(e,this.size,2);n.uniform2fv(this.addr,t)}function Zk(n,e){let t=Ja(e,this.size,3);n.uniform3fv(this.addr,t)}function Jk(n,e){let t=Ja(e,this.size,4);n.uniform4fv(this.addr,t)}function Kk(n,e){let t=Ja(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Qk(n,e){let t=Ja(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function e3(n,e){let t=Ja(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function t3(n,e){n.uniform1iv(this.addr,e)}function n3(n,e){n.uniform2iv(this.addr,e)}function i3(n,e){n.uniform3iv(this.addr,e)}function r3(n,e){n.uniform4iv(this.addr,e)}function o3(n,e){n.uniform1uiv(this.addr,e)}function s3(n,e){n.uniform2uiv(this.addr,e)}function a3(n,e){n.uniform3uiv(this.addr,e)}function c3(n,e){n.uniform4uiv(this.addr,e)}function l3(n,e,t){let i=this.cache,r=e.length,o=Ip(t,r);dn(i,o)||(n.uniform1iv(this.addr,o),fn(i,o));let s;this.type===n.SAMPLER_2D_SHADOW?s=Z0:s=RC;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||s,o[a])}function u3(n,e,t){let i=this.cache,r=e.length,o=Ip(t,r);dn(i,o)||(n.uniform1iv(this.addr,o),fn(i,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||PC,o[s])}function d3(n,e,t){let i=this.cache,r=e.length,o=Ip(t,r);dn(i,o)||(n.uniform1iv(this.addr,o),fn(i,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||OC,o[s])}function f3(n,e,t){let i=this.cache,r=e.length,o=Ip(t,r);dn(i,o)||(n.uniform1iv(this.addr,o),fn(i,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||NC,o[s])}function h3(n){switch(n){case 5126:return Xk;case 35664:return Yk;case 35665:return Zk;case 35666:return Jk;case 35674:return Kk;case 35675:return Qk;case 35676:return e3;case 5124:case 35670:return t3;case 35667:case 35671:return n3;case 35668:case 35672:return i3;case 35669:case 35673:return r3;case 5125:return o3;case 36294:return s3;case 36295:return a3;case 36296:return c3;case 35678:case 36198:case 36298:case 36306:case 35682:return l3;case 35679:case 36299:case 36307:return u3;case 35680:case 36300:case 36308:case 36293:return d3;case 36289:case 36303:case 36311:case 36292:return f3}}var J0=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=qk(t.type)}},K0=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=h3(t.type)}},Q0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(e,t[a.id],i)}}},X0=/(\w+)(\])?(\[|\.)?/g;function vC(n,e){n.seq.push(e),n.map[e.id]=e}function p3(n,e,t){let i=n.name,r=i.length;for(X0.lastIndex=0;;){let o=X0.exec(i),s=X0.lastIndex,a=o[1],c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&s+2===r){vC(t,l===void 0?new J0(a,n,e):new K0(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Q0(a),vC(t,d)),t=d}}}var Za=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);p3(a,c,this)}let r=[],o=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(e,t,i,r){let o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,s=t.length;o!==s;++o){let a=t[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,o=e.length;r!==o;++r){let s=e[r];s.id in t&&i.push(s)}return i}};function yC(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var m3=37297,g3=0;function v3(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){let a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}var _C=new $e;function y3(n){ct._getMatrix(_C,ct.workingColorSpace,n);let e=`mat3( ${_C.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case wl:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function xC(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+v3(n.getShaderSource(e),a)}else return o}function _3(n,e){let t=y3(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var x3={[E0]:"Linear",[M0]:"Reinhard",[w0]:"Cineon",[C0]:"ACESFilmic",[D0]:"AgX",[A0]:"Neutral",[T0]:"Custom"};function b3(n,e){let t=x3[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wp=new j;function S3(){ct.getLuminanceCoefficients(wp);let n=wp.x.toFixed(4),e=wp.y.toFixed(4),t=wp.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ql).join(`
`)}function M3(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function w3(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let o=n.getActiveAttrib(e,r),s=o.name,a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function Ql(n){return n!==""}function bC(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function SC(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var C3=/^[ \t]*#include +<([\w\d./]+)>/gm;function e_(n){return n.replace(C3,D3)}var T3=new Map;function D3(n,e){let t=tt[e];if(t===void 0){let i=T3.get(e);if(i!==void 0)t=tt[i],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return e_(t)}var A3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function EC(n){return n.replace(A3,I3)}function I3(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function MC(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var R3={[Hl]:"SHADOWMAP_TYPE_PCF",[$a]:"SHADOWMAP_TYPE_VSM"};function N3(n){return R3[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var P3={[Mo]:"ENVMAP_TYPE_CUBE",[ws]:"ENVMAP_TYPE_CUBE",[zl]:"ENVMAP_TYPE_CUBE_UV"};function O3(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":P3[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var F3={[ws]:"ENVMAP_MODE_REFRACTION"};function L3(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":F3[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var k3={[S0]:"ENVMAP_BLENDING_MULTIPLY",[jw]:"ENVMAP_BLENDING_MIX",[Ww]:"ENVMAP_BLENDING_ADD"};function U3(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":k3[n.combine]||"ENVMAP_BLENDING_NONE"}function B3(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function V3(n,e,t,i){let r=n.getContext(),o=t.defines,s=t.vertexShader,a=t.fragmentShader,c=N3(t),l=O3(t),u=L3(t),d=U3(t),f=B3(t),h=E3(t),g=M3(o),x=r.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ql).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ql).join(`
`),p.length>0&&(p+=`
`)):(m=[MC(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ql).join(`
`),p=[MC(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?tt.tonemapping_pars_fragment:"",t.toneMapping!==Xi?b3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,_3("linearToOutputTexel",t.outputColorSpace),S3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ql).join(`
`)),s=e_(s),s=bC(s,t),s=SC(s,t),a=e_(a),a=bC(a,t),a=SC(a,t),s=EC(s),a=EC(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===U0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===U0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=b+m+s,M=b+p+a,N=yC(r,r.VERTEX_SHADER,E),w=yC(r,r.FRAGMENT_SHADER,M);r.attachShader(x,N),r.attachShader(x,w),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function I(D){if(n.debug.checkShaderErrors){let H=r.getProgramInfoLog(x)||"",V=r.getShaderInfoLog(N)||"",k=r.getShaderInfoLog(w)||"",A=H.trim(),F=V.trim(),U=k.trim(),T=!0,ne=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(T=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,N,w);else{let $=xC(r,N,"vertex"),oe=xC(r,w,"fragment");ze("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+A+`
`+$+`
`+oe)}else A!==""?Be("WebGLProgram: Program Info Log:",A):(F===""||U==="")&&(ne=!1);ne&&(D.diagnostics={runnable:T,programLog:A,vertexShader:{log:F,prefix:m},fragmentShader:{log:U,prefix:p}})}r.deleteShader(N),r.deleteShader(w),y=new Za(r,x),C=w3(r,x)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(x,m3)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=g3++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=N,this.fragmentShader=w,this}var H3=0,t_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new n_(e),t.set(e,i)),i}},n_=class{constructor(e){this.id=H3++,this.code=e,this.usedTimes=0}};function z3(n){return n===To||n===Xl||n===Yl}function G3(n,e,t,i,r,o){let s=new Il,a=new t_,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer,f=i.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,C,O,D,H,V){let k=D.fog,A=H.geometry,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,U=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,T=e.get(y.envMap||F,U),ne=T&&T.mapping===zl?T.image.height:null,$=h[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&Be("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let oe=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,_e=oe!==void 0?oe.length:0,Fe=0;A.morphAttributes.position!==void 0&&(Fe=1),A.morphAttributes.normal!==void 0&&(Fe=2),A.morphAttributes.color!==void 0&&(Fe=3);let Pe,Ne,Y,ge;if($){let Ze=gr[$];Pe=Ze.vertexShader,Ne=Ze.fragmentShader}else Pe=y.vertexShader,Ne=y.fragmentShader,a.update(y),Y=a.getVertexShaderID(y),ge=a.getFragmentShaderID(y);let se=n.getRenderTarget(),Oe=n.state.buffers.depth.getReversed(),Ve=H.isInstancedMesh===!0,Le=H.isBatchedMesh===!0,Rt=!!y.map,rt=!!y.matcap,gt=!!T,Et=!!y.aoMap,Ke=!!y.lightMap,Ht=!!y.bumpMap,Lt=!!y.normalMap,yn=!!y.displacementMap,P=!!y.emissiveMap,Wt=!!y.metalnessMap,ot=!!y.roughnessMap,Mt=y.anisotropy>0,me=y.clearcoat>0,Bt=y.dispersion>0,S=y.iridescence>0,v=y.sheen>0,B=y.transmission>0,Z=Mt&&!!y.anisotropyMap,Q=me&&!!y.clearcoatMap,ae=me&&!!y.clearcoatNormalMap,he=me&&!!y.clearcoatRoughnessMap,q=S&&!!y.iridescenceMap,J=S&&!!y.iridescenceThicknessMap,be=v&&!!y.sheenColorMap,Me=v&&!!y.sheenRoughnessMap,de=!!y.specularMap,ce=!!y.specularColorMap,We=!!y.specularIntensityMap,Qe=B&&!!y.transmissionMap,ht=B&&!!y.thicknessMap,R=!!y.gradientMap,le=!!y.alphaMap,X=y.alphaTest>0,Se=!!y.alphaHash,fe=!!y.extensions,K=Xi;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(K=n.toneMapping);let Te={shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:Pe,fragmentShader:Ne,defines:y.defines,customVertexShaderID:Y,customFragmentShaderID:ge,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Le,batchingColor:Le&&H._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&H.instanceColor!==null,instancingMorph:Ve&&H.morphTexture!==null,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Rt,matcap:rt,envMap:gt,envMapMode:gt&&T.mapping,envMapCubeUVHeight:ne,aoMap:Et,lightMap:Ke,bumpMap:Ht,normalMap:Lt,displacementMap:yn,emissiveMap:P,normalMapObjectSpace:Lt&&y.normalMapType===Xw,normalMapTangentSpace:Lt&&y.normalMapType===k0,packedNormalMap:Lt&&y.normalMapType===k0&&z3(y.normalMap.format),metalnessMap:Wt,roughnessMap:ot,anisotropy:Mt,anisotropyMap:Z,clearcoat:me,clearcoatMap:Q,clearcoatNormalMap:ae,clearcoatRoughnessMap:he,dispersion:Bt,iridescence:S,iridescenceMap:q,iridescenceThicknessMap:J,sheen:v,sheenColorMap:be,sheenRoughnessMap:Me,specularMap:de,specularColorMap:ce,specularIntensityMap:We,transmission:B,transmissionMap:Qe,thicknessMap:ht,gradientMap:R,opaque:y.transparent===!1&&y.blending===bs&&y.alphaToCoverage===!1,alphaMap:le,alphaTest:X,alphaHash:Se,combine:y.combine,mapUv:Rt&&g(y.map.channel),aoMapUv:Et&&g(y.aoMap.channel),lightMapUv:Ke&&g(y.lightMap.channel),bumpMapUv:Ht&&g(y.bumpMap.channel),normalMapUv:Lt&&g(y.normalMap.channel),displacementMapUv:yn&&g(y.displacementMap.channel),emissiveMapUv:P&&g(y.emissiveMap.channel),metalnessMapUv:Wt&&g(y.metalnessMap.channel),roughnessMapUv:ot&&g(y.roughnessMap.channel),anisotropyMapUv:Z&&g(y.anisotropyMap.channel),clearcoatMapUv:Q&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:be&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(y.sheenRoughnessMap.channel),specularMapUv:de&&g(y.specularMap.channel),specularColorMapUv:ce&&g(y.specularColorMap.channel),specularIntensityMapUv:We&&g(y.specularIntensityMap.channel),transmissionMapUv:Qe&&g(y.transmissionMap.channel),thicknessMapUv:ht&&g(y.thicknessMap.channel),alphaMapUv:le&&g(y.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(Lt||Mt),vertexNormals:!!A.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!A.attributes.uv&&(Rt||le),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||A.attributes.normal===void 0&&Lt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Oe,skinning:H.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Fe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:K,decodeVideoTexture:Rt&&y.map.isVideoTexture===!0&&ct.getTransfer(y.map.colorSpace)===bt,decodeVideoTextureEmissive:P&&y.emissiveMap.isVideoTexture===!0&&ct.getTransfer(y.emissiveMap.colorSpace)===bt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===fr,flipSided:y.side===zn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:fe&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&y.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function m(y){let C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(let O in y.defines)C.push(O),C.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(p(C,y),b(C,y),C.push(n.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function p(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function b(y,C){s.disableAll(),C.instancing&&s.enable(0),C.instancingColor&&s.enable(1),C.instancingMorph&&s.enable(2),C.matcap&&s.enable(3),C.envMap&&s.enable(4),C.normalMapObjectSpace&&s.enable(5),C.normalMapTangentSpace&&s.enable(6),C.clearcoat&&s.enable(7),C.iridescence&&s.enable(8),C.alphaTest&&s.enable(9),C.vertexColors&&s.enable(10),C.vertexAlphas&&s.enable(11),C.vertexUv1s&&s.enable(12),C.vertexUv2s&&s.enable(13),C.vertexUv3s&&s.enable(14),C.vertexTangents&&s.enable(15),C.anisotropy&&s.enable(16),C.alphaHash&&s.enable(17),C.batching&&s.enable(18),C.dispersion&&s.enable(19),C.batchingColor&&s.enable(20),C.gradientMap&&s.enable(21),C.packedNormalMap&&s.enable(22),C.vertexNormals&&s.enable(23),y.push(s.mask),s.disableAll(),C.fog&&s.enable(0),C.useFog&&s.enable(1),C.flatShading&&s.enable(2),C.logarithmicDepthBuffer&&s.enable(3),C.reversedDepthBuffer&&s.enable(4),C.skinning&&s.enable(5),C.morphTargets&&s.enable(6),C.morphNormals&&s.enable(7),C.morphColors&&s.enable(8),C.premultipliedAlpha&&s.enable(9),C.shadowMapEnabled&&s.enable(10),C.doubleSided&&s.enable(11),C.flipSided&&s.enable(12),C.useDepthPacking&&s.enable(13),C.dithering&&s.enable(14),C.transmission&&s.enable(15),C.sheen&&s.enable(16),C.opaque&&s.enable(17),C.pointsUvs&&s.enable(18),C.decodeVideoTexture&&s.enable(19),C.decodeVideoTextureEmissive&&s.enable(20),C.alphaToCoverage&&s.enable(21),C.numLightProbeGrids>0&&s.enable(22),y.push(s.mask)}function E(y){let C=h[y.type],O;if(C){let D=gr[C];O=sC.clone(D.uniforms)}else O=y.uniforms;return O}function M(y,C){let O=u.get(C);return O!==void 0?++O.usedTimes:(O=new V3(n,C,y,r),l.push(O),u.set(C,O)),O}function N(y){if(--y.usedTimes===0){let C=l.indexOf(y);l[C]=l[l.length-1],l.pop(),u.delete(y.cacheKey),y.destroy()}}function w(y){a.remove(y)}function I(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:E,acquireProgram:M,releaseProgram:N,releaseShaderCache:w,programs:l,dispose:I}}function j3(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function i(s){n.delete(s)}function r(s,a,c){n.get(s)[a]=c}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:o}}function W3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function wC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function CC(){let n=[],e=0,t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function s(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,g,x,m,p){let b=n[e];return b===void 0?(b={id:f.id,object:f,geometry:h,material:g,materialVariant:s(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:p},n[e]=b):(b.id=f.id,b.object=f,b.geometry=h,b.material=g,b.materialVariant=s(f),b.groupOrder=x,b.renderOrder=f.renderOrder,b.z=m,b.group=p),e++,b}function c(f,h,g,x,m,p){let b=a(f,h,g,x,m,p);g.transmission>0?i.push(b):g.transparent===!0?r.push(b):t.push(b)}function l(f,h,g,x,m,p){let b=a(f,h,g,x,m,p);g.transmission>0?i.unshift(b):g.transparent===!0?r.unshift(b):t.unshift(b)}function u(f,h){t.length>1&&t.sort(f||W3),i.length>1&&i.sort(h||wC),r.length>1&&r.sort(h||wC)}function d(){for(let f=e,h=n.length;f<h;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:c,unshift:l,finish:d,sort:u}}function $3(){let n=new WeakMap;function e(i,r){let o=n.get(i),s;return o===void 0?(s=new CC,n.set(i,[s])):r>=o.length?(s=new CC,o.push(s)):s=o[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function q3(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new mt};break;case"SpotLight":t={position:new j,direction:new j,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function X3(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Y3=0;function Z3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function J3(n){let e=new q3,t=X3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new j);let r=new j,o=new an,s=new an;function a(l){let u=0,d=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let h=0,g=0,x=0,m=0,p=0,b=0,E=0,M=0,N=0,w=0,I=0;l.sort(Z3);for(let C=0,O=l.length;C<O;C++){let D=l[C],H=D.color,V=D.intensity,k=D.distance,A=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===To?A=D.shadow.map.texture:A=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=H.r*V,d+=H.g*V,f+=H.b*V;else if(D.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(D.sh.coefficients[F],V);I++}else if(D.isDirectionalLight){let F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let U=D.shadow,T=t.get(D);T.shadowIntensity=U.intensity,T.shadowBias=U.bias,T.shadowNormalBias=U.normalBias,T.shadowRadius=U.radius,T.shadowMapSize=U.mapSize,i.directionalShadow[h]=T,i.directionalShadowMap[h]=A,i.directionalShadowMatrix[h]=D.shadow.matrix,b++}i.directional[h]=F,h++}else if(D.isSpotLight){let F=e.get(D);F.position.setFromMatrixPosition(D.matrixWorld),F.color.copy(H).multiplyScalar(V),F.distance=k,F.coneCos=Math.cos(D.angle),F.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),F.decay=D.decay,i.spot[x]=F;let U=D.shadow;if(D.map&&(i.spotLightMap[N]=D.map,N++,U.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[x]=U.matrix,D.castShadow){let T=t.get(D);T.shadowIntensity=U.intensity,T.shadowBias=U.bias,T.shadowNormalBias=U.normalBias,T.shadowRadius=U.radius,T.shadowMapSize=U.mapSize,i.spotShadow[x]=T,i.spotShadowMap[x]=A,M++}x++}else if(D.isRectAreaLight){let F=e.get(D);F.color.copy(H).multiplyScalar(V),F.halfWidth.set(D.width*.5,0,0),F.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=F,m++}else if(D.isPointLight){let F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),F.distance=D.distance,F.decay=D.decay,D.castShadow){let U=D.shadow,T=t.get(D);T.shadowIntensity=U.intensity,T.shadowBias=U.bias,T.shadowNormalBias=U.normalBias,T.shadowRadius=U.radius,T.shadowMapSize=U.mapSize,T.shadowCameraNear=U.camera.near,T.shadowCameraFar=U.camera.far,i.pointShadow[g]=T,i.pointShadowMap[g]=A,i.pointShadowMatrix[g]=D.shadow.matrix,E++}i.point[g]=F,g++}else if(D.isHemisphereLight){let F=e.get(D);F.skyColor.copy(D.color).multiplyScalar(V),F.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[p]=F,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let y=i.hash;(y.directionalLength!==h||y.pointLength!==g||y.spotLength!==x||y.rectAreaLength!==m||y.hemiLength!==p||y.numDirectionalShadows!==b||y.numPointShadows!==E||y.numSpotShadows!==M||y.numSpotMaps!==N||y.numLightProbes!==I)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=M+N-w,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=I,y.directionalLength=h,y.pointLength=g,y.spotLength=x,y.rectAreaLength=m,y.hemiLength=p,y.numDirectionalShadows=b,y.numPointShadows=E,y.numSpotShadows=M,y.numSpotMaps=N,y.numLightProbes=I,i.version=Y3++)}function c(l,u){let d=0,f=0,h=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let E=l[p];if(E.isDirectionalLight){let M=i.directional[d];M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(E.isSpotLight){let M=i.spot[h];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(E.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),s.identity(),o.copy(E.matrixWorld),o.premultiply(m),s.extractRotation(o),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),g++}else if(E.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let M=i.hemi[x];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function TC(n){let e=new J3(n),t=[],i=[],r=[];function o(f){d.camera=f,t.length=0,i.length=0,r.length=0}function s(f){t.push(f)}function a(f){i.push(f)}function c(f){r.push(f)}function l(){e.setup(t)}function u(f){e.setupView(t,f)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:d,setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a,pushLightProbeGrid:c}}function K3(n){let e=new WeakMap;function t(r,o=0){let s=e.get(r),a;return s===void 0?(a=new TC(n),e.set(r,[a])):o>=s.length?(a=new TC(n),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Q3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,tU=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],nU=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],DC=new an,Kl=new j,Y0=new j;function iU(n,e,t){let i=new Ol,r=new St,o=new St,s=new Yt,a=new wh,c=new Ch,l={},u=t.maxTextureSize,d={[Hr]:zn,[zn]:Hr,[fr]:fr},f=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:Q3,fragmentShader:eU}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new dr;g.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Xn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hl;let p=this.type;this.render=function(w,I,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===ww&&(Be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Hl);let C=n.getRenderTarget(),O=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),H=n.state;H.setBlending(hr),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let V=p!==this.type;V&&I.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(A=>A.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,A=w.length;k<A;k++){let F=w[k],U=F.shadow;if(U===void 0){Be("WebGLShadowMap:",F,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);let T=U.getFrameExtents();r.multiply(T),o.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/T.x),r.x=o.x*T.x,U.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/T.y),r.y=o.y*T.y,U.mapSize.y=o.y));let ne=n.state.buffers.depth.getReversed();if(U.camera._reversedDepth=ne,U.map===null||V===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===$a){if(F.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new ai(r.x,r.y,{format:To,type:pr,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),U.map.texture.name=F.name+".shadowMap",U.map.depthTexture=new zr(r.x,r.y,Zi),U.map.depthTexture.name=F.name+".shadowMapDepth",U.map.depthTexture.format=cr,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=vn,U.map.depthTexture.magFilter=vn}else F.isPointLight?(U.map=new Tp(r.x),U.map.depthTexture=new Eh(r.x,Yi)):(U.map=new ai(r.x,r.y),U.map.depthTexture=new zr(r.x,r.y,Yi)),U.map.depthTexture.name=F.name+".shadowMap",U.map.depthTexture.format=cr,this.type===Hl?(U.map.depthTexture.compareFunction=ne?Ep:Sp,U.map.depthTexture.minFilter=Cn,U.map.depthTexture.magFilter=Cn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=vn,U.map.depthTexture.magFilter=vn);U.camera.updateProjectionMatrix()}let $=U.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<$;oe++){if(U.map.isWebGLCubeRenderTarget)n.setRenderTarget(U.map,oe),n.clear();else{oe===0&&(n.setRenderTarget(U.map),n.clear());let _e=U.getViewport(oe);s.set(o.x*_e.x,o.y*_e.y,o.x*_e.z,o.y*_e.w),H.viewport(s)}if(F.isPointLight){let _e=U.camera,Fe=U.matrix,Pe=F.distance||_e.far;Pe!==_e.far&&(_e.far=Pe,_e.updateProjectionMatrix()),Kl.setFromMatrixPosition(F.matrixWorld),_e.position.copy(Kl),Y0.copy(_e.position),Y0.add(tU[oe]),_e.up.copy(nU[oe]),_e.lookAt(Y0),_e.updateMatrixWorld(),Fe.makeTranslation(-Kl.x,-Kl.y,-Kl.z),DC.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),U._frustum.setFromProjectionMatrix(DC,_e.coordinateSystem,_e.reversedDepth)}else U.updateMatrices(F);i=U.getFrustum(),M(I,y,U.camera,F,this.type)}U.isPointLightShadow!==!0&&this.type===$a&&b(U,y),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(C,O,D)};function b(w,I){let y=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ai(r.x,r.y,{format:To,type:pr})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(I,null,y,f,x,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(I,null,y,h,x,null)}function E(w,I,y,C){let O=null,D=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)O=D;else if(O=y.isPointLight===!0?c:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let H=O.uuid,V=I.uuid,k=l[H];k===void 0&&(k={},l[H]=k);let A=k[V];A===void 0&&(A=O.clone(),k[V]=A,I.addEventListener("dispose",N)),O=A}if(O.visible=I.visible,O.wireframe=I.wireframe,C===$a?O.side=I.shadowSide!==null?I.shadowSide:I.side:O.side=I.shadowSide!==null?I.shadowSide:d[I.side],O.alphaMap=I.alphaMap,O.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,O.map=I.map,O.clipShadows=I.clipShadows,O.clippingPlanes=I.clippingPlanes,O.clipIntersection=I.clipIntersection,O.displacementMap=I.displacementMap,O.displacementScale=I.displacementScale,O.displacementBias=I.displacementBias,O.wireframeLinewidth=I.wireframeLinewidth,O.linewidth=I.linewidth,y.isPointLight===!0&&O.isMeshDistanceMaterial===!0){let H=n.properties.get(O);H.light=y}return O}function M(w,I,y,C,O){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&O===$a)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let V=e.update(w),k=w.material;if(Array.isArray(k)){let A=V.groups;for(let F=0,U=A.length;F<U;F++){let T=A[F],ne=k[T.materialIndex];if(ne&&ne.visible){let $=E(w,ne,C,O);w.onBeforeShadow(n,w,I,y,V,$,T),n.renderBufferDirect(y,null,V,$,w,T),w.onAfterShadow(n,w,I,y,V,$,T)}}}else if(k.visible){let A=E(w,k,C,O);w.onBeforeShadow(n,w,I,y,V,A,null),n.renderBufferDirect(y,null,V,A,w,null),w.onAfterShadow(n,w,I,y,V,A,null)}}let H=w.children;for(let V=0,k=H.length;V<k;V++)M(H[V],I,y,C,O)}function N(w){w.target.removeEventListener("dispose",N);for(let y in l){let C=l[y],O=w.target.uuid;O in C&&(C[O].dispose(),delete C[O])}}}function rU(n,e){function t(){let R=!1,le=new Yt,X=null,Se=new Yt(0,0,0,0);return{setMask:function(fe){X!==fe&&!R&&(n.colorMask(fe,fe,fe,fe),X=fe)},setLocked:function(fe){R=fe},setClear:function(fe,K,Te,Ze,Zt){Zt===!0&&(fe*=Ze,K*=Ze,Te*=Ze),le.set(fe,K,Te,Ze),Se.equals(le)===!1&&(n.clearColor(fe,K,Te,Ze),Se.copy(le))},reset:function(){R=!1,X=null,Se.set(-1,0,0,0)}}}function i(){let R=!1,le=!1,X=null,Se=null,fe=null;return{setReversed:function(K){if(le!==K){let Te=e.get("EXT_clip_control");K?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),le=K;let Ze=fe;fe=null,this.setClear(Ze)}},getReversed:function(){return le},setTest:function(K){K?se(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(K){X!==K&&!R&&(n.depthMask(K),X=K)},setFunc:function(K){if(le&&(K=rC[K]),Se!==K){switch(K){case sh:n.depthFunc(n.NEVER);break;case ah:n.depthFunc(n.ALWAYS);break;case ch:n.depthFunc(n.LESS);break;case Ss:n.depthFunc(n.LEQUAL);break;case lh:n.depthFunc(n.EQUAL);break;case uh:n.depthFunc(n.GEQUAL);break;case dh:n.depthFunc(n.GREATER);break;case fh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=K}},setLocked:function(K){R=K},setClear:function(K){fe!==K&&(fe=K,le&&(K=1-K),n.clearDepth(K))},reset:function(){R=!1,X=null,Se=null,fe=null,le=!1}}}function r(){let R=!1,le=null,X=null,Se=null,fe=null,K=null,Te=null,Ze=null,Zt=null;return{setTest:function(wt){R||(wt?se(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(wt){le!==wt&&!R&&(n.stencilMask(wt),le=wt)},setFunc:function(wt,vr,Ji){(X!==wt||Se!==vr||fe!==Ji)&&(n.stencilFunc(wt,vr,Ji),X=wt,Se=vr,fe=Ji)},setOp:function(wt,vr,Ji){(K!==wt||Te!==vr||Ze!==Ji)&&(n.stencilOp(wt,vr,Ji),K=wt,Te=vr,Ze=Ji)},setLocked:function(wt){R=wt},setClear:function(wt){Zt!==wt&&(n.clearStencil(wt),Zt=wt)},reset:function(){R=!1,le=null,X=null,Se=null,fe=null,K=null,Te=null,Ze=null,Zt=null}}}let o=new t,s=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},f={},h=new WeakMap,g=[],x=null,m=!1,p=null,b=null,E=null,M=null,N=null,w=null,I=null,y=new mt(0,0,0),C=0,O=!1,D=null,H=null,V=null,k=null,A=null,F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,T=0,ne=n.getParameter(n.VERSION);ne.indexOf("WebGL")!==-1?(T=parseFloat(/^WebGL (\d)/.exec(ne)[1]),U=T>=1):ne.indexOf("OpenGL ES")!==-1&&(T=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),U=T>=2);let $=null,oe={},_e=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),Pe=new Yt().fromArray(_e),Ne=new Yt().fromArray(Fe);function Y(R,le,X,Se){let fe=new Uint8Array(4),K=n.createTexture();n.bindTexture(R,K),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Te=0;Te<X;Te++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(le+Te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return K}let ge={};ge[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),ge[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ge[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),se(n.DEPTH_TEST),s.setFunc(Ss),Ht(!1),Lt(y0),se(n.CULL_FACE),Et(hr);function se(R){u[R]!==!0&&(n.enable(R),u[R]=!0)}function Oe(R){u[R]!==!1&&(n.disable(R),u[R]=!1)}function Ve(R,le){return f[R]!==le?(n.bindFramebuffer(R,le),f[R]=le,R===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=le),R===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Le(R,le){let X=g,Se=!1;if(R){X=h.get(le),X===void 0&&(X=[],h.set(le,X));let fe=R.textures;if(X.length!==fe.length||X[0]!==n.COLOR_ATTACHMENT0){for(let K=0,Te=fe.length;K<Te;K++)X[K]=n.COLOR_ATTACHMENT0+K;X.length=fe.length,Se=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,Se=!0);Se&&n.drawBuffers(X)}function Rt(R){return x!==R?(n.useProgram(R),x=R,!0):!1}let rt={[yo]:n.FUNC_ADD,[Tw]:n.FUNC_SUBTRACT,[Dw]:n.FUNC_REVERSE_SUBTRACT};rt[Aw]=n.MIN,rt[Iw]=n.MAX;let gt={[Rw]:n.ZERO,[Nw]:n.ONE,[Pw]:n.SRC_COLOR,[rh]:n.SRC_ALPHA,[Bw]:n.SRC_ALPHA_SATURATE,[kw]:n.DST_COLOR,[Fw]:n.DST_ALPHA,[Ow]:n.ONE_MINUS_SRC_COLOR,[oh]:n.ONE_MINUS_SRC_ALPHA,[Uw]:n.ONE_MINUS_DST_COLOR,[Lw]:n.ONE_MINUS_DST_ALPHA,[Vw]:n.CONSTANT_COLOR,[Hw]:n.ONE_MINUS_CONSTANT_COLOR,[zw]:n.CONSTANT_ALPHA,[Gw]:n.ONE_MINUS_CONSTANT_ALPHA};function Et(R,le,X,Se,fe,K,Te,Ze,Zt,wt){if(R===hr){m===!0&&(Oe(n.BLEND),m=!1);return}if(m===!1&&(se(n.BLEND),m=!0),R!==Cw){if(R!==p||wt!==O){if((b!==yo||N!==yo)&&(n.blendEquation(n.FUNC_ADD),b=yo,N=yo),wt)switch(R){case bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _0:n.blendFunc(n.ONE,n.ONE);break;case x0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case b0:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ze("WebGLState: Invalid blending: ",R);break}else switch(R){case bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _0:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case x0:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case b0:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",R);break}E=null,M=null,w=null,I=null,y.set(0,0,0),C=0,p=R,O=wt}return}fe=fe||le,K=K||X,Te=Te||Se,(le!==b||fe!==N)&&(n.blendEquationSeparate(rt[le],rt[fe]),b=le,N=fe),(X!==E||Se!==M||K!==w||Te!==I)&&(n.blendFuncSeparate(gt[X],gt[Se],gt[K],gt[Te]),E=X,M=Se,w=K,I=Te),(Ze.equals(y)===!1||Zt!==C)&&(n.blendColor(Ze.r,Ze.g,Ze.b,Zt),y.copy(Ze),C=Zt),p=R,O=!1}function Ke(R,le){R.side===fr?Oe(n.CULL_FACE):se(n.CULL_FACE);let X=R.side===zn;le&&(X=!X),Ht(X),R.blending===bs&&R.transparent===!1?Et(hr):Et(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),s.setFunc(R.depthFunc),s.setTest(R.depthTest),s.setMask(R.depthWrite),o.setMask(R.colorWrite);let Se=R.stencilWrite;a.setTest(Se),Se&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),P(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(R){D!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),D=R)}function Lt(R){R!==Ew?(se(n.CULL_FACE),R!==H&&(R===y0?n.cullFace(n.BACK):R===Mw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),H=R}function yn(R){R!==V&&(U&&n.lineWidth(R),V=R)}function P(R,le,X){R?(se(n.POLYGON_OFFSET_FILL),(k!==le||A!==X)&&(k=le,A=X,s.getReversed()&&(le=-le),n.polygonOffset(le,X))):Oe(n.POLYGON_OFFSET_FILL)}function Wt(R){R?se(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function ot(R){R===void 0&&(R=n.TEXTURE0+F-1),$!==R&&(n.activeTexture(R),$=R)}function Mt(R,le,X){X===void 0&&($===null?X=n.TEXTURE0+F-1:X=$);let Se=oe[X];Se===void 0&&(Se={type:void 0,texture:void 0},oe[X]=Se),(Se.type!==R||Se.texture!==le)&&($!==X&&(n.activeTexture(X),$=X),n.bindTexture(R,le||ge[R]),Se.type=R,Se.texture=le)}function me(){let R=oe[$];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Bt(){try{n.compressedTexImage2D(...arguments)}catch(R){ze("WebGLState:",R)}}function S(){try{n.compressedTexImage3D(...arguments)}catch(R){ze("WebGLState:",R)}}function v(){try{n.texSubImage2D(...arguments)}catch(R){ze("WebGLState:",R)}}function B(){try{n.texSubImage3D(...arguments)}catch(R){ze("WebGLState:",R)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(R){ze("WebGLState:",R)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(R){ze("WebGLState:",R)}}function ae(){try{n.texStorage2D(...arguments)}catch(R){ze("WebGLState:",R)}}function he(){try{n.texStorage3D(...arguments)}catch(R){ze("WebGLState:",R)}}function q(){try{n.texImage2D(...arguments)}catch(R){ze("WebGLState:",R)}}function J(){try{n.texImage3D(...arguments)}catch(R){ze("WebGLState:",R)}}function be(R){return d[R]!==void 0?d[R]:n.getParameter(R)}function Me(R,le){d[R]!==le&&(n.pixelStorei(R,le),d[R]=le)}function de(R){Pe.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),Pe.copy(R))}function ce(R){Ne.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),Ne.copy(R))}function We(R,le){let X=l.get(le);X===void 0&&(X=new WeakMap,l.set(le,X));let Se=X.get(R);Se===void 0&&(Se=n.getUniformBlockIndex(le,R.name),X.set(R,Se))}function Qe(R,le){let Se=l.get(le).get(R);c.get(le)!==Se&&(n.uniformBlockBinding(le,Se,R.__bindingPointIndex),c.set(le,Se))}function ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},$=null,oe={},f={},h=new WeakMap,g=[],x=null,m=!1,p=null,b=null,E=null,M=null,N=null,w=null,I=null,y=new mt(0,0,0),C=0,O=!1,D=null,H=null,V=null,k=null,A=null,Pe.set(0,0,n.canvas.width,n.canvas.height),Ne.set(0,0,n.canvas.width,n.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:se,disable:Oe,bindFramebuffer:Ve,drawBuffers:Le,useProgram:Rt,setBlending:Et,setMaterial:Ke,setFlipSided:Ht,setCullFace:Lt,setLineWidth:yn,setPolygonOffset:P,setScissorTest:Wt,activeTexture:ot,bindTexture:Mt,unbindTexture:me,compressedTexImage2D:Bt,compressedTexImage3D:S,texImage2D:q,texImage3D:J,pixelStorei:Me,getParameter:be,updateUBOMapping:We,uniformBlockBinding:Qe,texStorage2D:ae,texStorage3D:he,texSubImage2D:v,texSubImage3D:B,compressedTexSubImage2D:Z,compressedTexSubImage3D:Q,scissor:de,viewport:ce,reset:ht}}function oU(n,e,t,i,r,o,s){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new St,u=new WeakMap,d=new Set,f,h=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(S,v){return g?new OffscreenCanvas(S,v):Tl("canvas")}function m(S,v,B){let Z=1,Q=Bt(S);if((Q.width>B||Q.height>B)&&(Z=B/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let ae=Math.floor(Z*Q.width),he=Math.floor(Z*Q.height);f===void 0&&(f=x(ae,he));let q=v?x(ae,he):f;return q.width=ae,q.height=he,q.getContext("2d").drawImage(S,0,0,ae,he),Be("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ae+"x"+he+")."),q}else return"data"in S&&Be("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),S;return S}function p(S){return S.generateMipmaps}function b(S){n.generateMipmap(S)}function E(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(S,v,B,Z,Q,ae=!1){if(S!==null){if(n[S]!==void 0)return n[S];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let he;Z&&(he=e.get("EXT_texture_norm16"),he||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=v;if(v===n.RED&&(B===n.FLOAT&&(q=n.R32F),B===n.HALF_FLOAT&&(q=n.R16F),B===n.UNSIGNED_BYTE&&(q=n.R8),B===n.UNSIGNED_SHORT&&he&&(q=he.R16_EXT),B===n.SHORT&&he&&(q=he.R16_SNORM_EXT)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.R8UI),B===n.UNSIGNED_SHORT&&(q=n.R16UI),B===n.UNSIGNED_INT&&(q=n.R32UI),B===n.BYTE&&(q=n.R8I),B===n.SHORT&&(q=n.R16I),B===n.INT&&(q=n.R32I)),v===n.RG&&(B===n.FLOAT&&(q=n.RG32F),B===n.HALF_FLOAT&&(q=n.RG16F),B===n.UNSIGNED_BYTE&&(q=n.RG8),B===n.UNSIGNED_SHORT&&he&&(q=he.RG16_EXT),B===n.SHORT&&he&&(q=he.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RG8UI),B===n.UNSIGNED_SHORT&&(q=n.RG16UI),B===n.UNSIGNED_INT&&(q=n.RG32UI),B===n.BYTE&&(q=n.RG8I),B===n.SHORT&&(q=n.RG16I),B===n.INT&&(q=n.RG32I)),v===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGB8UI),B===n.UNSIGNED_SHORT&&(q=n.RGB16UI),B===n.UNSIGNED_INT&&(q=n.RGB32UI),B===n.BYTE&&(q=n.RGB8I),B===n.SHORT&&(q=n.RGB16I),B===n.INT&&(q=n.RGB32I)),v===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),B===n.UNSIGNED_INT&&(q=n.RGBA32UI),B===n.BYTE&&(q=n.RGBA8I),B===n.SHORT&&(q=n.RGBA16I),B===n.INT&&(q=n.RGBA32I)),v===n.RGB&&(B===n.UNSIGNED_SHORT&&he&&(q=he.RGB16_EXT),B===n.SHORT&&he&&(q=he.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),v===n.RGBA){let J=ae?wl:ct.getTransfer(Q);B===n.FLOAT&&(q=n.RGBA32F),B===n.HALF_FLOAT&&(q=n.RGBA16F),B===n.UNSIGNED_BYTE&&(q=J===bt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&he&&(q=he.RGBA16_EXT),B===n.SHORT&&he&&(q=he.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function N(S,v){let B;return S?v===null||v===Yi||v===Xa?B=n.DEPTH24_STENCIL8:v===Zi?B=n.DEPTH32F_STENCIL8:v===qa&&(B=n.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Yi||v===Xa?B=n.DEPTH_COMPONENT24:v===Zi?B=n.DEPTH_COMPONENT32F:v===qa&&(B=n.DEPTH_COMPONENT16),B}function w(S,v){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==vn&&S.minFilter!==Cn?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function I(S){let v=S.target;v.removeEventListener("dispose",I),C(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function y(S){let v=S.target;v.removeEventListener("dispose",y),D(v)}function C(S){let v=i.get(S);if(v.__webglInit===void 0)return;let B=S.source,Z=h.get(B);if(Z){let Q=Z[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&O(S),Object.keys(Z).length===0&&h.delete(B)}i.remove(S)}function O(S){let v=i.get(S);n.deleteTexture(v.__webglTexture);let B=S.source,Z=h.get(B);delete Z[v.__cacheKey],s.memory.textures--}function D(S){let v=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let Q=0;Q<v.__webglFramebuffer[Z].length;Q++)n.deleteFramebuffer(v.__webglFramebuffer[Z][Q]);else n.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[Z]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let B=S.textures;for(let Z=0,Q=B.length;Z<Q;Z++){let ae=i.get(B[Z]);ae.__webglTexture&&(n.deleteTexture(ae.__webglTexture),s.memory.textures--),i.remove(B[Z])}i.remove(S)}let H=0;function V(){H=0}function k(){return H}function A(S){H=S}function F(){let S=H;return S>=r.maxTextures&&Be("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),H+=1,S}function U(S){let v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function T(S,v){let B=i.get(S);if(S.isVideoTexture&&Mt(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&B.__version!==S.version){let Z=S.image;if(Z===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(B,S,v);return}}else S.isExternalTexture&&(B.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function ne(S,v){let B=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){Oe(B,S,v);return}else S.isExternalTexture&&(B.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function $(S,v){let B=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){Oe(B,S,v);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function oe(S,v){let B=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&B.__version!==S.version){Ve(B,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}let _e={[hh]:n.REPEAT,[ar]:n.CLAMP_TO_EDGE,[ph]:n.MIRRORED_REPEAT},Fe={[vn]:n.NEAREST,[$w]:n.NEAREST_MIPMAP_NEAREST,[Gl]:n.NEAREST_MIPMAP_LINEAR,[Cn]:n.LINEAR,[Bh]:n.LINEAR_MIPMAP_NEAREST,[wo]:n.LINEAR_MIPMAP_LINEAR},Pe={[Yw]:n.NEVER,[eC]:n.ALWAYS,[Zw]:n.LESS,[Sp]:n.LEQUAL,[Jw]:n.EQUAL,[Ep]:n.GEQUAL,[Kw]:n.GREATER,[Qw]:n.NOTEQUAL};function Ne(S,v){if(v.type===Zi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Cn||v.magFilter===Bh||v.magFilter===Gl||v.magFilter===wo||v.minFilter===Cn||v.minFilter===Bh||v.minFilter===Gl||v.minFilter===wo)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,_e[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,_e[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,_e[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,Fe[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,Fe[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Pe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===vn||v.minFilter!==Gl&&v.minFilter!==wo||v.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Y(S,v){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",I));let Z=v.source,Q=h.get(Z);Q===void 0&&(Q={},h.set(Z,Q));let ae=U(v);if(ae!==S.__cacheKey){Q[ae]===void 0&&(Q[ae]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,B=!0),Q[ae].usedTimes++;let he=Q[S.__cacheKey];he!==void 0&&(Q[S.__cacheKey].usedTimes--,he.usedTimes===0&&O(v)),S.__cacheKey=ae,S.__webglTexture=Q[ae].texture}return B}function ge(S,v,B){return Math.floor(Math.floor(S/B)/v)}function se(S,v,B,Z){let ae=S.updateRanges;if(ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,B,Z,v.data);else{ae.sort((Me,de)=>Me.start-de.start);let he=0;for(let Me=1;Me<ae.length;Me++){let de=ae[he],ce=ae[Me],We=de.start+de.count,Qe=ge(ce.start,v.width,4),ht=ge(de.start,v.width,4);ce.start<=We+1&&Qe===ht&&ge(ce.start+ce.count-1,v.width,4)===Qe?de.count=Math.max(de.count,ce.start+ce.count-de.start):(++he,ae[he]=ce)}ae.length=he+1;let q=t.getParameter(n.UNPACK_ROW_LENGTH),J=t.getParameter(n.UNPACK_SKIP_PIXELS),be=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Me=0,de=ae.length;Me<de;Me++){let ce=ae[Me],We=Math.floor(ce.start/4),Qe=Math.ceil(ce.count/4),ht=We%v.width,R=Math.floor(We/v.width),le=Qe,X=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ht),t.pixelStorei(n.UNPACK_SKIP_ROWS,R),t.texSubImage2D(n.TEXTURE_2D,0,ht,R,le,X,B,Z,v.data)}S.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,J),t.pixelStorei(n.UNPACK_SKIP_ROWS,be)}}function Oe(S,v,B){let Z=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=n.TEXTURE_3D);let Q=Y(S,v),ae=v.source;t.bindTexture(Z,S.__webglTexture,n.TEXTURE0+B);let he=i.get(ae);if(ae.version!==he.__version||Q===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let X=ct.getPrimaries(ct.workingColorSpace),Se=v.colorSpace===Gr?null:ct.getPrimaries(v.colorSpace),fe=v.colorSpace===Gr||X===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let J=m(v.image,!1,r.maxTextureSize);J=me(v,J);let be=o.convert(v.format,v.colorSpace),Me=o.convert(v.type),de=M(v.internalFormat,be,Me,v.normalized,v.colorSpace,v.isVideoTexture);Ne(Z,v);let ce,We=v.mipmaps,Qe=v.isVideoTexture!==!0,ht=he.__version===void 0||Q===!0,R=ae.dataReady,le=w(v,J);if(v.isDepthTexture)de=N(v.format===Co,v.type),ht&&(Qe?t.texStorage2D(n.TEXTURE_2D,1,de,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,de,J.width,J.height,0,be,Me,null));else if(v.isDataTexture)if(We.length>0){Qe&&ht&&t.texStorage2D(n.TEXTURE_2D,le,de,We[0].width,We[0].height);for(let X=0,Se=We.length;X<Se;X++)ce=We[X],Qe?R&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ce.width,ce.height,be,Me,ce.data):t.texImage2D(n.TEXTURE_2D,X,de,ce.width,ce.height,0,be,Me,ce.data);v.generateMipmaps=!1}else Qe?(ht&&t.texStorage2D(n.TEXTURE_2D,le,de,J.width,J.height),R&&se(v,J,be,Me)):t.texImage2D(n.TEXTURE_2D,0,de,J.width,J.height,0,be,Me,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Qe&&ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,de,We[0].width,We[0].height,J.depth);for(let X=0,Se=We.length;X<Se;X++)if(ce=We[X],v.format!==Di)if(be!==null)if(Qe){if(R)if(v.layerUpdates.size>0){let fe=G0(ce.width,ce.height,v.format,v.type);for(let K of v.layerUpdates){let Te=ce.data.subarray(K*fe/ce.data.BYTES_PER_ELEMENT,(K+1)*fe/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,K,ce.width,ce.height,1,be,Te)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,ce.width,ce.height,J.depth,be,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,de,ce.width,ce.height,J.depth,0,ce.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?R&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,ce.width,ce.height,J.depth,be,Me,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,de,ce.width,ce.height,J.depth,0,be,Me,ce.data)}else{Qe&&ht&&t.texStorage2D(n.TEXTURE_2D,le,de,We[0].width,We[0].height);for(let X=0,Se=We.length;X<Se;X++)ce=We[X],v.format!==Di?be!==null?Qe?R&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,ce.width,ce.height,be,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,X,de,ce.width,ce.height,0,ce.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?R&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ce.width,ce.height,be,Me,ce.data):t.texImage2D(n.TEXTURE_2D,X,de,ce.width,ce.height,0,be,Me,ce.data)}else if(v.isDataArrayTexture)if(Qe){if(ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,de,J.width,J.height,J.depth),R)if(v.layerUpdates.size>0){let X=G0(J.width,J.height,v.format,v.type);for(let Se of v.layerUpdates){let fe=J.data.subarray(Se*X/J.data.BYTES_PER_ELEMENT,(Se+1)*X/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Se,J.width,J.height,1,be,Me,fe)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,be,Me,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,de,J.width,J.height,J.depth,0,be,Me,J.data);else if(v.isData3DTexture)Qe?(ht&&t.texStorage3D(n.TEXTURE_3D,le,de,J.width,J.height,J.depth),R&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,be,Me,J.data)):t.texImage3D(n.TEXTURE_3D,0,de,J.width,J.height,J.depth,0,be,Me,J.data);else if(v.isFramebufferTexture){if(ht)if(Qe)t.texStorage2D(n.TEXTURE_2D,le,de,J.width,J.height);else{let X=J.width,Se=J.height;for(let fe=0;fe<le;fe++)t.texImage2D(n.TEXTURE_2D,fe,de,X,Se,0,be,Me,null),X>>=1,Se>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let X=n.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),J.parentNode!==X){X.appendChild(J),d.add(v),X.onpaint=Ze=>{let Zt=Ze.changedElements;for(let wt of d)Zt.includes(wt.image)&&(wt.needsUpdate=!0)},X.requestPaint();return}let Se=0,fe=n.RGBA,K=n.RGBA,Te=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Se,fe,K,Te,J),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(We.length>0){if(Qe&&ht){let X=Bt(We[0]);t.texStorage2D(n.TEXTURE_2D,le,de,X.width,X.height)}for(let X=0,Se=We.length;X<Se;X++)ce=We[X],Qe?R&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,be,Me,ce):t.texImage2D(n.TEXTURE_2D,X,de,be,Me,ce);v.generateMipmaps=!1}else if(Qe){if(ht){let X=Bt(J);t.texStorage2D(n.TEXTURE_2D,le,de,X.width,X.height)}R&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Me,J)}else t.texImage2D(n.TEXTURE_2D,0,de,be,Me,J);p(v)&&b(Z),he.__version=ae.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function Ve(S,v,B){if(v.image.length!==6)return;let Z=Y(S,v),Q=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+B);let ae=i.get(Q);if(Q.version!==ae.__version||Z===!0){t.activeTexture(n.TEXTURE0+B);let he=ct.getPrimaries(ct.workingColorSpace),q=v.colorSpace===Gr?null:ct.getPrimaries(v.colorSpace),J=v.colorSpace===Gr||he===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let be=v.isCompressedTexture||v.image[0].isCompressedTexture,Me=v.image[0]&&v.image[0].isDataTexture,de=[];for(let K=0;K<6;K++)!be&&!Me?de[K]=m(v.image[K],!0,r.maxCubemapSize):de[K]=Me?v.image[K].image:v.image[K],de[K]=me(v,de[K]);let ce=de[0],We=o.convert(v.format,v.colorSpace),Qe=o.convert(v.type),ht=M(v.internalFormat,We,Qe,v.normalized,v.colorSpace),R=v.isVideoTexture!==!0,le=ae.__version===void 0||Z===!0,X=Q.dataReady,Se=w(v,ce);Ne(n.TEXTURE_CUBE_MAP,v);let fe;if(be){R&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,ht,ce.width,ce.height);for(let K=0;K<6;K++){fe=de[K].mipmaps;for(let Te=0;Te<fe.length;Te++){let Ze=fe[Te];v.format!==Di?We!==null?R?X&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te,0,0,Ze.width,Ze.height,We,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te,ht,Ze.width,Ze.height,0,Ze.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te,0,0,Ze.width,Ze.height,We,Qe,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te,ht,Ze.width,Ze.height,0,We,Qe,Ze.data)}}}else{if(fe=v.mipmaps,R&&le){fe.length>0&&Se++;let K=Bt(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,ht,K.width,K.height)}for(let K=0;K<6;K++)if(Me){R?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,de[K].width,de[K].height,We,Qe,de[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ht,de[K].width,de[K].height,0,We,Qe,de[K].data);for(let Te=0;Te<fe.length;Te++){let Zt=fe[Te].image[K].image;R?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te+1,0,0,Zt.width,Zt.height,We,Qe,Zt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te+1,ht,Zt.width,Zt.height,0,We,Qe,Zt.data)}}else{R?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,We,Qe,de[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ht,We,Qe,de[K]);for(let Te=0;Te<fe.length;Te++){let Ze=fe[Te];R?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te+1,0,0,We,Qe,Ze.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te+1,ht,We,Qe,Ze.image[K])}}}p(v)&&b(n.TEXTURE_CUBE_MAP),ae.__version=Q.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function Le(S,v,B,Z,Q,ae){let he=o.convert(B.format,B.colorSpace),q=o.convert(B.type),J=M(B.internalFormat,he,q,B.normalized,B.colorSpace),be=i.get(v),Me=i.get(B);if(Me.__renderTarget=v,!be.__hasExternalTextures){let de=Math.max(1,v.width>>ae),ce=Math.max(1,v.height>>ae);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,ae,J,de,ce,v.depth,0,he,q,null):t.texImage2D(Q,ae,J,de,ce,0,he,q,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),ot(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Q,Me.__webglTexture,0,Wt(v)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,Q,Me.__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Rt(S,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer){let Z=v.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,ae=N(v.stencilBuffer,Q),he=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ot(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Wt(v),ae,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Wt(v),ae,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ae,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,S)}else{let Z=v.textures;for(let Q=0;Q<Z.length;Q++){let ae=Z[Q],he=o.convert(ae.format,ae.colorSpace),q=o.convert(ae.type),J=M(ae.internalFormat,he,q,ae.normalized,ae.colorSpace);ot(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Wt(v),J,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Wt(v),J,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,J,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function rt(S,v,B){let Z=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(v.depthTexture);if(Q.__renderTarget=v,(!Q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,v.depthTexture.addEventListener("dispose",I)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,v.depthTexture);let be=o.convert(v.depthTexture.format),Me=o.convert(v.depthTexture.type),de;v.depthTexture.format===cr?de=n.DEPTH_COMPONENT24:v.depthTexture.format===Co&&(de=n.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,de,v.width,v.height,0,be,Me,null)}}else T(v.depthTexture,0);let ae=Q.__webglTexture,he=Wt(v),q=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,J=v.depthTexture.format===Co?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===cr)ot(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,q,ae,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,J,q,ae,0);else if(v.depthTexture.format===Co)ot(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,q,ae,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,J,q,ae,0);else throw new Error("Unknown depthTexture format")}function gt(S){let v=i.get(S),B=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){let Z=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){let Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=Z}if(S.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let Z=0;Z<6;Z++)rt(v.__webglFramebuffer[Z],S,Z);else{let Z=S.texture.mipmaps;Z&&Z.length>0?rt(v.__webglFramebuffer[0],S,0):rt(v.__webglFramebuffer,S,0)}else if(B){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=n.createRenderbuffer(),Rt(v.__webglDepthbuffer[Z],S,!1);else{let Q=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ae)}}else{let Z=S.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Rt(v.__webglDepthbuffer,S,!1);else{let Q=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ae)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Et(S,v,B){let Z=i.get(S);v!==void 0&&Le(Z.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&gt(S)}function Ke(S){let v=S.texture,B=i.get(S),Z=i.get(v);S.addEventListener("dispose",y);let Q=S.textures,ae=S.isWebGLCubeRenderTarget===!0,he=Q.length>1;if(he||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=v.version,s.memory.textures++),ae){B.__webglFramebuffer=[];for(let q=0;q<6;q++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[q]=[];for(let J=0;J<v.mipmaps.length;J++)B.__webglFramebuffer[q][J]=n.createFramebuffer()}else B.__webglFramebuffer[q]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let q=0;q<v.mipmaps.length;q++)B.__webglFramebuffer[q]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(he)for(let q=0,J=Q.length;q<J;q++){let be=i.get(Q[q]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),s.memory.textures++)}if(S.samples>0&&ot(S)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let q=0;q<Q.length;q++){let J=Q[q];B.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[q]);let be=o.convert(J.format,J.colorSpace),Me=o.convert(J.type),de=M(J.internalFormat,be,Me,J.normalized,J.colorSpace,S.isXRRenderTarget===!0),ce=Wt(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,de,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,B.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Rt(B.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,v);for(let q=0;q<6;q++)if(v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Le(B.__webglFramebuffer[q][J],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,J);else Le(B.__webglFramebuffer[q],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);p(v)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let q=0,J=Q.length;q<J;q++){let be=Q[q],Me=i.get(be),de=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(de=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,Me.__webglTexture),Ne(de,be),Le(B.__webglFramebuffer,S,be,n.COLOR_ATTACHMENT0+q,de,0),p(be)&&b(de)}t.unbindTexture()}else{let q=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(q=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,Z.__webglTexture),Ne(q,v),v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Le(B.__webglFramebuffer[J],S,v,n.COLOR_ATTACHMENT0,q,J);else Le(B.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,q,0);p(v)&&b(q),t.unbindTexture()}S.depthBuffer&&gt(S)}function Ht(S){let v=S.textures;for(let B=0,Z=v.length;B<Z;B++){let Q=v[B];if(p(Q)){let ae=E(S),he=i.get(Q).__webglTexture;t.bindTexture(ae,he),b(ae),t.unbindTexture()}}}let Lt=[],yn=[];function P(S){if(S.samples>0){if(ot(S)===!1){let v=S.textures,B=S.width,Z=S.height,Q=n.COLOR_BUFFER_BIT,ae=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(S),q=v.length>1;if(q)for(let be=0;be<v.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let J=S.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let be=0;be<v.length;be++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[be]);let Me=i.get(v[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Me,0)}n.blitFramebuffer(0,0,B,Z,0,0,B,Z,Q,n.NEAREST),c===!0&&(Lt.length=0,yn.length=0,Lt.push(n.COLOR_ATTACHMENT0+be),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Lt.push(ae),yn.push(ae),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,yn)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Lt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let be=0;be<v.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,he.__webglColorRenderbuffer[be]);let Me=i.get(v[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,Me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let v=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Wt(S){return Math.min(r.maxSamples,S.samples)}function ot(S){let v=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Mt(S){let v=s.render.frame;u.get(S)!==v&&(u.set(S,v),S.update())}function me(S,v){let B=S.colorSpace,Z=S.format,Q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||B!==Ml&&B!==Gr&&(ct.getTransfer(B)===bt?(Z!==Di||Q!==ui)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",B)),v}function Bt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=V,this.getTextureUnits=k,this.setTextureUnits=A,this.setTexture2D=T,this.setTexture2DArray=ne,this.setTexture3D=$,this.setTextureCube=oe,this.rebindTextures=Et,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=ot,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function sU(n,e){function t(i,r=Gr){let o,s=ct.getTransfer(r);if(i===ui)return n.UNSIGNED_BYTE;if(i===Hh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===zh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===N0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===P0)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===I0)return n.BYTE;if(i===R0)return n.SHORT;if(i===qa)return n.UNSIGNED_SHORT;if(i===Vh)return n.INT;if(i===Yi)return n.UNSIGNED_INT;if(i===Zi)return n.FLOAT;if(i===pr)return n.HALF_FLOAT;if(i===O0)return n.ALPHA;if(i===F0)return n.RGB;if(i===Di)return n.RGBA;if(i===cr)return n.DEPTH_COMPONENT;if(i===Co)return n.DEPTH_STENCIL;if(i===L0)return n.RED;if(i===Gh)return n.RED_INTEGER;if(i===To)return n.RG;if(i===jh)return n.RG_INTEGER;if(i===Wh)return n.RGBA_INTEGER;if(i===jl||i===Wl||i===$l||i===ql)if(s===bt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===jl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$l)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ql)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===jl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$l)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ql)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$h||i===qh||i===Xh||i===Yh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===$h)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zh||i===Jh||i===Kh||i===Qh||i===ep||i===Xl||i===tp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Zh||i===Jh)return s===bt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Kh)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Qh)return o.COMPRESSED_R11_EAC;if(i===ep)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Xl)return o.COMPRESSED_RG11_EAC;if(i===tp)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===np||i===ip||i===rp||i===op||i===sp||i===ap||i===cp||i===lp||i===up||i===dp||i===fp||i===hp||i===pp||i===mp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===np)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ip)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rp)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===op)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sp)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ap)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cp)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lp)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===up)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dp)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fp)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hp)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pp)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mp)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gp||i===vp||i===yp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===gp)return s===bt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_p||i===xp||i===Yl||i===bp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===_p)return o.COMPRESSED_RED_RGTC1_EXT;if(i===xp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var aU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,i_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ll(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ci({vertexShader:aU,fragmentShader:cU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xn(new kl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},r_=class extends lr{constructor(e,t){super();let i=this,r=null,o=1,s=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null,x=typeof XRWebGLBinding<"u",m=new i_,p={},b=t.getContextAttributes(),E=null,M=null,N=[],w=[],I=new St,y=null,C=new Ln;C.viewport=new Yt;let O=new Ln;O.viewport=new Yt;let D=[C,O],H=new Lh,V=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ge=N[Y];return ge===void 0&&(ge=new ja,N[Y]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(Y){let ge=N[Y];return ge===void 0&&(ge=new ja,N[Y]=ge),ge.getGripSpace()},this.getHand=function(Y){let ge=N[Y];return ge===void 0&&(ge=new ja,N[Y]=ge),ge.getHandSpace()};function A(Y){let ge=w.indexOf(Y.inputSource);if(ge===-1)return;let se=N[ge];se!==void 0&&(se.update(Y.inputSource,Y.frame,l||s),se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",U);for(let Y=0;Y<N.length;Y++){let ge=w[Y];ge!==null&&(w[Y]=null,N[Y].disconnect(ge))}V=null,k=null,m.reset();for(let Y in p)delete p[Y];e.setRenderTarget(E),h=null,f=null,d=null,r=null,M=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",F),r.addEventListener("inputsourceschange",U),b.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Oe=null,Ve=null;b.depth&&(Ve=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=b.stencil?Co:cr,Oe=b.stencil?Xa:Yi);let Le={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:o};d=this.getBinding(),f=d.createProjectionLayer(Le),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new ai(f.textureWidth,f.textureHeight,{format:Di,type:ui,depthTexture:new zr(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let se={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new ai(h.framebufferWidth,h.framebufferHeight,{format:Di,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(a),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(Y){for(let ge=0;ge<Y.removed.length;ge++){let se=Y.removed[ge],Oe=w.indexOf(se);Oe>=0&&(w[Oe]=null,N[Oe].disconnect(se))}for(let ge=0;ge<Y.added.length;ge++){let se=Y.added[ge],Oe=w.indexOf(se);if(Oe===-1){for(let Le=0;Le<N.length;Le++)if(Le>=w.length){w.push(se),Oe=Le;break}else if(w[Le]===null){w[Le]=se,Oe=Le;break}if(Oe===-1)break}let Ve=N[Oe];Ve&&Ve.connect(se)}}let T=new j,ne=new j;function $(Y,ge,se){T.setFromMatrixPosition(ge.matrixWorld),ne.setFromMatrixPosition(se.matrixWorld);let Oe=T.distanceTo(ne),Ve=ge.projectionMatrix.elements,Le=se.projectionMatrix.elements,Rt=Ve[14]/(Ve[10]-1),rt=Ve[14]/(Ve[10]+1),gt=(Ve[9]+1)/Ve[5],Et=(Ve[9]-1)/Ve[5],Ke=(Ve[8]-1)/Ve[0],Ht=(Le[8]+1)/Le[0],Lt=Rt*Ke,yn=Rt*Ht,P=Oe/(-Ke+Ht),Wt=P*-Ke;if(ge.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Wt),Y.translateZ(P),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ve[10]===-1)Y.projectionMatrix.copy(ge.projectionMatrix),Y.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{let ot=Rt+P,Mt=rt+P,me=Lt-Wt,Bt=yn+(Oe-Wt),S=gt*rt/Mt*ot,v=Et*rt/Mt*ot;Y.projectionMatrix.makePerspective(me,Bt,S,v,ot,Mt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function oe(Y,ge){ge===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ge.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ge=Y.near,se=Y.far;m.texture!==null&&(m.depthNear>0&&(ge=m.depthNear),m.depthFar>0&&(se=m.depthFar)),H.near=O.near=C.near=ge,H.far=O.far=C.far=se,(V!==H.near||k!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),V=H.near,k=H.far),H.layers.mask=Y.layers.mask|6,C.layers.mask=H.layers.mask&-5,O.layers.mask=H.layers.mask&-3;let Oe=Y.parent,Ve=H.cameras;oe(H,Oe);for(let Le=0;Le<Ve.length;Le++)oe(Ve[Le],Oe);Ve.length===2?$(H,C,O):H.projectionMatrix.copy(C.projectionMatrix),_e(Y,H,Oe)};function _e(Y,ge,se){se===null?Y.matrix.copy(ge.matrixWorld):(Y.matrix.copy(se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ge.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ge.projectionMatrix),Y.projectionMatrixInverse.copy(ge.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=vh*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(Y){return p[Y]};let Fe=null;function Pe(Y,ge){if(u=ge.getViewerPose(l||s),g=ge,u!==null){let se=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let Oe=!1;se.length!==H.cameras.length&&(H.cameras.length=0,Oe=!0);for(let rt=0;rt<se.length;rt++){let gt=se[rt],Et=null;if(h!==null)Et=h.getViewport(gt);else{let Ht=d.getViewSubImage(f,gt);Et=Ht.viewport,rt===0&&(e.setRenderTargetTextures(M,Ht.colorTexture,Ht.depthStencilTexture),e.setRenderTarget(M))}let Ke=D[rt];Ke===void 0&&(Ke=new Ln,Ke.layers.enable(rt),Ke.viewport=new Yt,D[rt]=Ke),Ke.matrix.fromArray(gt.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(gt.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(Et.x,Et.y,Et.width,Et.height),rt===0&&(H.matrix.copy(Ke.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Oe===!0&&H.cameras.push(Ke)}let Ve=r.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let rt=d.getDepthInformation(se[0]);rt&&rt.isValid&&rt.texture&&m.init(rt,r.renderState)}if(Ve&&Ve.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let rt=0;rt<se.length;rt++){let gt=se[rt].camera;if(gt){let Et=p[gt];Et||(Et=new Ll,p[gt]=Et);let Ke=d.getCameraImage(gt);Et.sourceTexture=Ke}}}}for(let se=0;se<N.length;se++){let Oe=w[se],Ve=N[se];Oe!==null&&Ve!==void 0&&Ve.update(Oe,ge,l||s)}Fe&&Fe(Y,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),g=null}let Ne=new AC;Ne.setAnimationLoop(Pe),this.setAnimationLoop=function(Y){Fe=Y},this.dispose=function(){}}},lU=new an,FC=new $e;FC.set(-1,0,0,0,1,0,0,0,1);function uU(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,V0(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,E,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?o(m,p):p.isMeshLambertMaterial?(o(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(o(m,p),d(m,p)):p.isMeshPhongMaterial?(o(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(o(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,M)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),x(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),E=b.envMap,M=b.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(lU.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(FC),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dU(n,e,t,i){let r={},o={},s=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,E){let M=E.program;i.uniformBlockBinding(b,M)}function l(b,E){let M=r[b.id];M===void 0&&(g(b),M=u(b),r[b.id]=M,b.addEventListener("dispose",m));let N=E.program;i.updateUBOMapping(b,N);let w=e.render.frame;o[b.id]!==w&&(f(b),o[b.id]=w)}function u(b){let E=d();b.__bindingPointIndex=E;let M=n.createBuffer(),N=b.__size,w=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,N,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,M),M}function d(){for(let b=0;b<a;b++)if(s.indexOf(b)===-1)return s.push(b),b;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let E=r[b.id],M=b.uniforms,N=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let w=0,I=M.length;w<I;w++){let y=Array.isArray(M[w])?M[w]:[M[w]];for(let C=0,O=y.length;C<O;C++){let D=y[C];if(h(D,w,C,N)===!0){let H=D.__offset,V=Array.isArray(D.value)?D.value:[D.value],k=0;for(let A=0;A<V.length;A++){let F=V[A],U=x(F);typeof F=="number"||typeof F=="boolean"?(D.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,H+k,D.__data)):F.isMatrix3?(D.__data[0]=F.elements[0],D.__data[1]=F.elements[1],D.__data[2]=F.elements[2],D.__data[3]=0,D.__data[4]=F.elements[3],D.__data[5]=F.elements[4],D.__data[6]=F.elements[5],D.__data[7]=0,D.__data[8]=F.elements[6],D.__data[9]=F.elements[7],D.__data[10]=F.elements[8],D.__data[11]=0):ArrayBuffer.isView(F)?D.__data.set(new F.constructor(F.buffer,F.byteOffset,D.__data.length)):(F.toArray(D.__data,k),k+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(b,E,M,N){let w=b.value,I=E+"_"+M;if(N[I]===void 0)return typeof w=="number"||typeof w=="boolean"?N[I]=w:ArrayBuffer.isView(w)?N[I]=w.slice():N[I]=w.clone(),!0;{let y=N[I];if(typeof w=="number"||typeof w=="boolean"){if(y!==w)return N[I]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(y.equals(w)===!1)return y.copy(w),!0}}return!1}function g(b){let E=b.uniforms,M=0,N=16;for(let I=0,y=E.length;I<y;I++){let C=Array.isArray(E[I])?E[I]:[E[I]];for(let O=0,D=C.length;O<D;O++){let H=C[O],V=Array.isArray(H.value)?H.value:[H.value];for(let k=0,A=V.length;k<A;k++){let F=V[k],U=x(F),T=M%N,ne=T%U.boundary,$=T+ne;M+=ne,$!==0&&N-$<U.storage&&(M+=N-$),H.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=U.storage}}}let w=M%N;return w>0&&(M+=N-w),b.__size=M,b.__cache={},this}function x(b){let E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(E.boundary=16,E.storage=b.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",b),E}function m(b){let E=b.target;E.removeEventListener("dispose",m);let M=s.indexOf(E.__bindingPointIndex);s.splice(M,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete o[E.id]}function p(){for(let b in r)n.deleteBuffer(r[b]);s=[],r={},o={}}return{bind:c,update:l,dispose:p}}var fU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),mr=null;function hU(){return mr===null&&(mr=new Sh(fU,16,16,To,pr),mr.name="DFG_LUT",mr.minFilter=Cn,mr.magFilter=Cn,mr.wrapS=ar,mr.wrapT=ar,mr.generateMipmaps=!1,mr.needsUpdate=!0),mr}var Dp=class{constructor(e={}){let{canvas:t=tC(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=ui}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=s;let x=h,m=new Set([Wh,jh,Gh]),p=new Set([ui,Yi,qa,Xa,Hh,zh]),b=new Uint32Array(4),E=new Int32Array(4),M=new j,N=null,w=null,I=[],y=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,D=!1,H=null;this._outputColorSpace=oi;let V=0,k=0,A=null,F=-1,U=null,T=new Yt,ne=new Yt,$=null,oe=new mt(0),_e=0,Fe=t.width,Pe=t.height,Ne=1,Y=null,ge=null,se=new Yt(0,0,Fe,Pe),Oe=new Yt(0,0,Fe,Pe),Ve=!1,Le=new Ol,Rt=!1,rt=!1,gt=new an,Et=new j,Ke=new Yt,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Lt=!1;function yn(){return A===null?Ne:1}let P=i;function Wt(_,L){return t.getContext(_,L)}try{let _={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"184"}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Ze,!1),P===null){let L="webgl2";if(P=Wt(L,_),P===null)throw Wt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw ze("WebGLRenderer: "+_.message),_}let ot,Mt,me,Bt,S,v,B,Z,Q,ae,he,q,J,be,Me,de,ce,We,Qe,ht,R,le,X;function Se(){ot=new xk(P),ot.init(),R=new sU(P,ot),Mt=new fk(P,ot,e,R),me=new rU(P,ot),Mt.reversedDepthBuffer&&f&&me.buffers.depth.setReversed(!0),Bt=new Ek(P),S=new j3,v=new oU(P,ot,me,S,Mt,R,Bt),B=new _k(O),Z=new TF(P),le=new uk(P,Z),Q=new bk(P,Z,Bt,le),ae=new wk(P,Q,Z,le,Bt),We=new Mk(P,Mt,v),Me=new hk(S),he=new G3(O,B,ot,Mt,le,Me),q=new uU(O,S),J=new $3,be=new K3(ot),ce=new lk(O,B,me,ae,g,c),de=new iU(O,ae,Mt),X=new dU(P,Bt,Mt,me),Qe=new dk(P,ot,Bt),ht=new Sk(P,ot,Bt),Bt.programs=he.programs,O.capabilities=Mt,O.extensions=ot,O.properties=S,O.renderLists=J,O.shadowMap=de,O.state=me,O.info=Bt}Se(),x!==ui&&(C=new Tk(x,t.width,t.height,r,o));let fe=new r_(O,P);this.xr=fe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let _=ot.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=ot.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(_){_!==void 0&&(Ne=_,this.setSize(Fe,Pe,!1))},this.getSize=function(_){return _.set(Fe,Pe)},this.setSize=function(_,L,W=!0){if(fe.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}Fe=_,Pe=L,t.width=Math.floor(_*Ne),t.height=Math.floor(L*Ne),W===!0&&(t.style.width=_+"px",t.style.height=L+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,_,L)},this.getDrawingBufferSize=function(_){return _.set(Fe*Ne,Pe*Ne).floor()},this.setDrawingBufferSize=function(_,L,W){Fe=_,Pe=L,Ne=W,t.width=Math.floor(_*W),t.height=Math.floor(L*W),this.setViewport(0,0,_,L)},this.setEffects=function(_){if(x===ui){ze("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let L=0;L<_.length;L++)if(_[L].isOutputPass===!0){Be("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(T)},this.getViewport=function(_){return _.copy(se)},this.setViewport=function(_,L,W,z){_.isVector4?se.set(_.x,_.y,_.z,_.w):se.set(_,L,W,z),me.viewport(T.copy(se).multiplyScalar(Ne).round())},this.getScissor=function(_){return _.copy(Oe)},this.setScissor=function(_,L,W,z){_.isVector4?Oe.set(_.x,_.y,_.z,_.w):Oe.set(_,L,W,z),me.scissor(ne.copy(Oe).multiplyScalar(Ne).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(_){me.setScissorTest(Ve=_)},this.setOpaqueSort=function(_){Y=_},this.setTransparentSort=function(_){ge=_},this.getClearColor=function(_){return _.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(_=!0,L=!0,W=!0){let z=0;if(_){let G=!1;if(A!==null){let xe=A.texture.format;G=m.has(xe)}if(G){let xe=A.texture.type,we=p.has(xe),ye=ce.getClearColor(),Ce=ce.getClearAlpha(),Ae=ye.r,Je=ye.g,nt=ye.b;we?(b[0]=Ae,b[1]=Je,b[2]=nt,b[3]=Ce,P.clearBufferuiv(P.COLOR,0,b)):(E[0]=Ae,E[1]=Je,E[2]=nt,E[3]=Ce,P.clearBufferiv(P.COLOR,0,E))}else z|=P.COLOR_BUFFER_BIT}L&&(z|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),H=_},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Ze,!1),ce.dispose(),J.dispose(),be.dispose(),S.dispose(),B.dispose(),ae.dispose(),le.dispose(),X.dispose(),he.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",o_),fe.removeEventListener("sessionend",s_),Ao.stop()};function K(_){_.preventDefault(),B0("WebGLRenderer: Context Lost."),D=!0}function Te(){B0("WebGLRenderer: Context Restored."),D=!1;let _=Bt.autoReset,L=de.enabled,W=de.autoUpdate,z=de.needsUpdate,G=de.type;Se(),Bt.autoReset=_,de.enabled=L,de.autoUpdate=W,de.needsUpdate=z,de.type=G}function Ze(_){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Zt(_){let L=_.target;L.removeEventListener("dispose",Zt),wt(L)}function wt(_){vr(_),S.remove(_)}function vr(_){let L=S.get(_).programs;L!==void 0&&(L.forEach(function(W){he.releaseProgram(W)}),_.isShaderMaterial&&he.releaseShaderCache(_))}this.renderBufferDirect=function(_,L,W,z,G,xe){L===null&&(L=Ht);let we=G.isMesh&&G.matrixWorld.determinant()<0,ye=WC(_,L,W,z,G);me.setMaterial(z,we);let Ce=W.index,Ae=1;if(z.wireframe===!0){if(Ce=Q.getWireframeAttribute(W),Ce===void 0)return;Ae=2}let Je=W.drawRange,nt=W.attributes.position,Ie=Je.start*Ae,Ct=(Je.start+Je.count)*Ae;xe!==null&&(Ie=Math.max(Ie,xe.start*Ae),Ct=Math.min(Ct,(xe.start+xe.count)*Ae)),Ce!==null?(Ie=Math.max(Ie,0),Ct=Math.min(Ct,Ce.count)):nt!=null&&(Ie=Math.max(Ie,0),Ct=Math.min(Ct,nt.count));let Jt=Ct-Ie;if(Jt<0||Jt===1/0)return;le.setup(G,z,ye,W,Ce);let $t,At=Qe;if(Ce!==null&&($t=Z.get(Ce),At=ht,At.setIndex($t)),G.isMesh)z.wireframe===!0?(me.setLineWidth(z.wireframeLinewidth*yn()),At.setMode(P.LINES)):At.setMode(P.TRIANGLES);else if(G.isLine){let Tn=z.linewidth;Tn===void 0&&(Tn=1),me.setLineWidth(Tn*yn()),G.isLineSegments?At.setMode(P.LINES):G.isLineLoop?At.setMode(P.LINE_LOOP):At.setMode(P.LINE_STRIP)}else G.isPoints?At.setMode(P.POINTS):G.isSprite&&At.setMode(P.TRIANGLES);if(G.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))At.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Tn=G._multiDrawStarts,Ee=G._multiDrawCounts,Yn=G._multiDrawCount,dt=Ce?Z.get(Ce).bytesPerElement:1,di=S.get(z).currentProgram.getUniforms();for(let Ki=0;Ki<Yn;Ki++)di.setValue(P,"_gl_DrawID",Ki),At.render(Tn[Ki]/dt,Ee[Ki])}else if(G.isInstancedMesh)At.renderInstances(Ie,Jt,G.count);else if(W.isInstancedBufferGeometry){let Tn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ee=Math.min(W.instanceCount,Tn);At.renderInstances(Ie,Jt,Ee)}else At.render(Ie,Jt)};function Ji(_,L,W){_.transparent===!0&&_.side===fr&&_.forceSinglePass===!1?(_.side=zn,_.needsUpdate=!0,tu(_,L,W),_.side=Hr,_.needsUpdate=!0,tu(_,L,W),_.side=fr):tu(_,L,W)}this.compile=function(_,L,W=null){W===null&&(W=_),w=be.get(W),w.init(L),y.push(w),W.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),_!==W&&_.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights();let z=new Set;return _.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let xe=G.material;if(xe)if(Array.isArray(xe))for(let we=0;we<xe.length;we++){let ye=xe[we];Ji(ye,W,G),z.add(ye)}else Ji(xe,W,G),z.add(xe)}),w=y.pop(),z},this.compileAsync=function(_,L,W=null){let z=this.compile(_,L,W);return new Promise(G=>{function xe(){if(z.forEach(function(we){S.get(we).currentProgram.isReady()&&z.delete(we)}),z.size===0){G(_);return}setTimeout(xe,10)}ot.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let kp=null;function GC(_){kp&&kp(_)}function o_(){Ao.stop()}function s_(){Ao.start()}let Ao=new AC;Ao.setAnimationLoop(GC),typeof self<"u"&&Ao.setContext(self),this.setAnimationLoop=function(_){kp=_,fe.setAnimationLoop(_),_===null?Ao.stop():Ao.start()},fe.addEventListener("sessionstart",o_),fe.addEventListener("sessionend",s_),this.render=function(_,L){if(L!==void 0&&L.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;H!==null&&H.renderStart(_,L);let W=fe.enabled===!0&&fe.isPresenting===!0,z=C!==null&&(A===null||W)&&C.begin(O,A);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(L),L=fe.getCamera()),_.isScene===!0&&_.onBeforeRender(O,_,L,A),w=be.get(_,y.length),w.init(L),w.state.textureUnits=v.getTextureUnits(),y.push(w),gt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Le.setFromProjectionMatrix(gt,qi,L.reversedDepth),rt=this.localClippingEnabled,Rt=Me.init(this.clippingPlanes,rt),N=J.get(_,I.length),N.init(),I.push(N),fe.enabled===!0&&fe.isPresenting===!0){let we=O.xr.getDepthSensingMesh();we!==null&&Up(we,L,-1/0,O.sortObjects)}Up(_,L,0,O.sortObjects),N.finish(),O.sortObjects===!0&&N.sort(Y,ge),Lt=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Lt&&ce.addToRenderList(N,_),this.info.render.frame++,Rt===!0&&Me.beginShadows();let G=w.state.shadowsArray;if(de.render(G,_,L),Rt===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&C.hasRenderPass())===!1){let we=N.opaque,ye=N.transmissive;if(w.setupLights(),L.isArrayCamera){let Ce=L.cameras;if(ye.length>0)for(let Ae=0,Je=Ce.length;Ae<Je;Ae++){let nt=Ce[Ae];c_(we,ye,_,nt)}Lt&&ce.render(_);for(let Ae=0,Je=Ce.length;Ae<Je;Ae++){let nt=Ce[Ae];a_(N,_,nt,nt.viewport)}}else ye.length>0&&c_(we,ye,_,L),Lt&&ce.render(_),a_(N,_,L)}A!==null&&k===0&&(v.updateMultisampleRenderTarget(A),v.updateRenderTargetMipmap(A)),z&&C.end(O),_.isScene===!0&&_.onAfterRender(O,_,L),le.resetDefaultState(),F=-1,U=null,y.pop(),y.length>0?(w=y[y.length-1],v.setTextureUnits(w.state.textureUnits),Rt===!0&&Me.setGlobalState(O.clippingPlanes,w.state.camera)):w=null,I.pop(),I.length>0?N=I[I.length-1]:N=null,H!==null&&H.renderEnd()};function Up(_,L,W,z){if(_.visible===!1)return;if(_.layers.test(L.layers)){if(_.isGroup)W=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(L);else if(_.isLightProbeGrid)w.pushLightProbeGrid(_);else if(_.isLight)w.pushLight(_),_.castShadow&&w.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Le.intersectsSprite(_)){z&&Ke.setFromMatrixPosition(_.matrixWorld).applyMatrix4(gt);let we=ae.update(_),ye=_.material;ye.visible&&N.push(_,we,ye,W,Ke.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Le.intersectsObject(_))){let we=ae.update(_),ye=_.material;if(z&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ke.copy(_.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ke.copy(we.boundingSphere.center)),Ke.applyMatrix4(_.matrixWorld).applyMatrix4(gt)),Array.isArray(ye)){let Ce=we.groups;for(let Ae=0,Je=Ce.length;Ae<Je;Ae++){let nt=Ce[Ae],Ie=ye[nt.materialIndex];Ie&&Ie.visible&&N.push(_,we,Ie,W,Ke.z,nt)}}else ye.visible&&N.push(_,we,ye,W,Ke.z,null)}}let xe=_.children;for(let we=0,ye=xe.length;we<ye;we++)Up(xe[we],L,W,z)}function a_(_,L,W,z){let{opaque:G,transmissive:xe,transparent:we}=_;w.setupLightsView(W),Rt===!0&&Me.setGlobalState(O.clippingPlanes,W),z&&me.viewport(T.copy(z)),G.length>0&&eu(G,L,W),xe.length>0&&eu(xe,L,W),we.length>0&&eu(we,L,W),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function c_(_,L,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[z.id]===void 0){let Ie=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[z.id]=new ai(1,1,{generateMipmaps:!0,type:Ie?pr:ui,minFilter:wo,samples:Math.max(4,Mt.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let xe=w.state.transmissionRenderTarget[z.id],we=z.viewport||T;xe.setSize(we.z*O.transmissionResolutionScale,we.w*O.transmissionResolutionScale);let ye=O.getRenderTarget(),Ce=O.getActiveCubeFace(),Ae=O.getActiveMipmapLevel();O.setRenderTarget(xe),O.getClearColor(oe),_e=O.getClearAlpha(),_e<1&&O.setClearColor(16777215,.5),O.clear(),Lt&&ce.render(W);let Je=O.toneMapping;O.toneMapping=Xi;let nt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),w.setupLightsView(z),Rt===!0&&Me.setGlobalState(O.clippingPlanes,z),eu(_,W,z),v.updateMultisampleRenderTarget(xe),v.updateRenderTargetMipmap(xe),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Ct=0,Jt=L.length;Ct<Jt;Ct++){let $t=L[Ct],{object:At,geometry:Tn,material:Ee,group:Yn}=$t;if(Ee.side===fr&&At.layers.test(z.layers)){let dt=Ee.side;Ee.side=zn,Ee.needsUpdate=!0,l_(At,W,z,Tn,Ee,Yn),Ee.side=dt,Ee.needsUpdate=!0,Ie=!0}}Ie===!0&&(v.updateMultisampleRenderTarget(xe),v.updateRenderTargetMipmap(xe))}O.setRenderTarget(ye,Ce,Ae),O.setClearColor(oe,_e),nt!==void 0&&(z.viewport=nt),O.toneMapping=Je}function eu(_,L,W){let z=L.isScene===!0?L.overrideMaterial:null;for(let G=0,xe=_.length;G<xe;G++){let we=_[G],{object:ye,geometry:Ce,group:Ae}=we,Je=we.material;Je.allowOverride===!0&&z!==null&&(Je=z),ye.layers.test(W.layers)&&l_(ye,L,W,Ce,Je,Ae)}}function l_(_,L,W,z,G,xe){_.onBeforeRender(O,L,W,z,G,xe),_.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),G.onBeforeRender(O,L,W,z,_,xe),G.transparent===!0&&G.side===fr&&G.forceSinglePass===!1?(G.side=zn,G.needsUpdate=!0,O.renderBufferDirect(W,L,z,G,_,xe),G.side=Hr,G.needsUpdate=!0,O.renderBufferDirect(W,L,z,G,_,xe),G.side=fr):O.renderBufferDirect(W,L,z,G,_,xe),_.onAfterRender(O,L,W,z,G,xe)}function tu(_,L,W){L.isScene!==!0&&(L=Ht);let z=S.get(_),G=w.state.lights,xe=w.state.shadowsArray,we=G.state.version,ye=he.getParameters(_,G.state,xe,L,W,w.state.lightProbeGridArray),Ce=he.getProgramCacheKey(ye),Ae=z.programs;z.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,z.fog=L.fog;let Je=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;z.envMap=B.get(_.envMap||z.environment,Je),z.envMapRotation=z.environment!==null&&_.envMap===null?L.environmentRotation:_.envMapRotation,Ae===void 0&&(_.addEventListener("dispose",Zt),Ae=new Map,z.programs=Ae);let nt=Ae.get(Ce);if(nt!==void 0){if(z.currentProgram===nt&&z.lightsStateVersion===we)return d_(_,ye),nt}else ye.uniforms=he.getUniforms(_),H!==null&&_.isNodeMaterial&&H.build(_,W,ye),_.onBeforeCompile(ye,O),nt=he.acquireProgram(ye,Ce),Ae.set(Ce,nt),z.uniforms=ye.uniforms;let Ie=z.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ie.clippingPlanes=Me.uniform),d_(_,ye),z.needsLights=qC(_),z.lightsStateVersion=we,z.needsLights&&(Ie.ambientLightColor.value=G.state.ambient,Ie.lightProbe.value=G.state.probe,Ie.directionalLights.value=G.state.directional,Ie.directionalLightShadows.value=G.state.directionalShadow,Ie.spotLights.value=G.state.spot,Ie.spotLightShadows.value=G.state.spotShadow,Ie.rectAreaLights.value=G.state.rectArea,Ie.ltc_1.value=G.state.rectAreaLTC1,Ie.ltc_2.value=G.state.rectAreaLTC2,Ie.pointLights.value=G.state.point,Ie.pointLightShadows.value=G.state.pointShadow,Ie.hemisphereLights.value=G.state.hemi,Ie.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ie.spotLightMatrix.value=G.state.spotLightMatrix,Ie.spotLightMap.value=G.state.spotLightMap,Ie.pointShadowMatrix.value=G.state.pointShadowMatrix),z.lightProbeGrid=w.state.lightProbeGridArray.length>0,z.currentProgram=nt,z.uniformsList=null,nt}function u_(_){if(_.uniformsList===null){let L=_.currentProgram.getUniforms();_.uniformsList=Za.seqWithValue(L.seq,_.uniforms)}return _.uniformsList}function d_(_,L){let W=S.get(_);W.outputColorSpace=L.outputColorSpace,W.batching=L.batching,W.batchingColor=L.batchingColor,W.instancing=L.instancing,W.instancingColor=L.instancingColor,W.instancingMorph=L.instancingMorph,W.skinning=L.skinning,W.morphTargets=L.morphTargets,W.morphNormals=L.morphNormals,W.morphColors=L.morphColors,W.morphTargetsCount=L.morphTargetsCount,W.numClippingPlanes=L.numClippingPlanes,W.numIntersection=L.numClipIntersection,W.vertexAlphas=L.vertexAlphas,W.vertexTangents=L.vertexTangents,W.toneMapping=L.toneMapping}function jC(_,L){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;M.setFromMatrixPosition(L.matrixWorld);for(let W=0,z=_.length;W<z;W++){let G=_[W];if(G.texture!==null&&G.boundingBox.containsPoint(M))return G}return null}function WC(_,L,W,z,G){L.isScene!==!0&&(L=Ht),v.resetTextureUnits();let xe=L.fog,we=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?L.environment:null,ye=A===null?O.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ct.workingColorSpace,Ce=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ae=B.get(z.envMap||we,Ce),Je=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,nt=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ie=!!W.morphAttributes.position,Ct=!!W.morphAttributes.normal,Jt=!!W.morphAttributes.color,$t=Xi;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&($t=O.toneMapping);let At=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Tn=At!==void 0?At.length:0,Ee=S.get(z),Yn=w.state.lights;if(Rt===!0&&(rt===!0||_!==U)){let Nt=_===U&&z.id===F;Me.setState(z,_,Nt)}let dt=!1;z.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Yn.state.version||Ee.outputColorSpace!==ye||G.isBatchedMesh&&Ee.batching===!1||!G.isBatchedMesh&&Ee.batching===!0||G.isBatchedMesh&&Ee.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ee.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ee.instancing===!1||!G.isInstancedMesh&&Ee.instancing===!0||G.isSkinnedMesh&&Ee.skinning===!1||!G.isSkinnedMesh&&Ee.skinning===!0||G.isInstancedMesh&&Ee.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ee.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ee.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ee.instancingMorph===!1&&G.morphTexture!==null||Ee.envMap!==Ae||z.fog===!0&&Ee.fog!==xe||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Me.numPlanes||Ee.numIntersection!==Me.numIntersection)||Ee.vertexAlphas!==Je||Ee.vertexTangents!==nt||Ee.morphTargets!==Ie||Ee.morphNormals!==Ct||Ee.morphColors!==Jt||Ee.toneMapping!==$t||Ee.morphTargetsCount!==Tn||!!Ee.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,Ee.__version=z.version);let di=Ee.currentProgram;dt===!0&&(di=tu(z,L,G),H&&z.isNodeMaterial&&H.onUpdateProgram(z,di,Ee));let Ki=!1,Wr=!1,As=!1,It=di.getUniforms(),Kt=Ee.uniforms;if(me.useProgram(di.program)&&(Ki=!0,Wr=!0,As=!0),z.id!==F&&(F=z.id,Wr=!0),Ee.needsLights){let Nt=jC(w.state.lightProbeGridArray,G);Ee.lightProbeGrid!==Nt&&(Ee.lightProbeGrid=Nt,Wr=!0)}if(Ki||U!==_){me.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),It.setValue(P,"projectionMatrix",_.projectionMatrix),It.setValue(P,"viewMatrix",_.matrixWorldInverse);let qr=It.map.cameraPosition;qr!==void 0&&qr.setValue(P,Et.setFromMatrixPosition(_.matrixWorld)),Mt.logarithmicDepthBuffer&&It.setValue(P,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&It.setValue(P,"isOrthographic",_.isOrthographicCamera===!0),U!==_&&(U=_,Wr=!0,As=!0)}if(Ee.needsLights&&(Yn.state.directionalShadowMap.length>0&&It.setValue(P,"directionalShadowMap",Yn.state.directionalShadowMap,v),Yn.state.spotShadowMap.length>0&&It.setValue(P,"spotShadowMap",Yn.state.spotShadowMap,v),Yn.state.pointShadowMap.length>0&&It.setValue(P,"pointShadowMap",Yn.state.pointShadowMap,v)),G.isSkinnedMesh){It.setOptional(P,G,"bindMatrix"),It.setOptional(P,G,"bindMatrixInverse");let Nt=G.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),It.setValue(P,"boneTexture",Nt.boneTexture,v))}G.isBatchedMesh&&(It.setOptional(P,G,"batchingTexture"),It.setValue(P,"batchingTexture",G._matricesTexture,v),It.setOptional(P,G,"batchingIdTexture"),It.setValue(P,"batchingIdTexture",G._indirectTexture,v),It.setOptional(P,G,"batchingColorTexture"),G._colorsTexture!==null&&It.setValue(P,"batchingColorTexture",G._colorsTexture,v));let $r=W.morphAttributes;if(($r.position!==void 0||$r.normal!==void 0||$r.color!==void 0)&&We.update(G,W,di),(Wr||Ee.receiveShadow!==G.receiveShadow)&&(Ee.receiveShadow=G.receiveShadow,It.setValue(P,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&L.environment!==null&&(Kt.envMapIntensity.value=L.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=hU()),Wr){if(It.setValue(P,"toneMappingExposure",O.toneMappingExposure),Ee.needsLights&&$C(Kt,As),xe&&z.fog===!0&&q.refreshFogUniforms(Kt,xe),q.refreshMaterialUniforms(Kt,z,Ne,Pe,w.state.transmissionRenderTarget[_.id]),Ee.needsLights&&Ee.lightProbeGrid){let Nt=Ee.lightProbeGrid;Kt.probesSH.value=Nt.texture,Kt.probesMin.value.copy(Nt.boundingBox.min),Kt.probesMax.value.copy(Nt.boundingBox.max),Kt.probesResolution.value.copy(Nt.resolution)}Za.upload(P,u_(Ee),Kt,v)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Za.upload(P,u_(Ee),Kt,v),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&It.setValue(P,"center",G.center),It.setValue(P,"modelViewMatrix",G.modelViewMatrix),It.setValue(P,"normalMatrix",G.normalMatrix),It.setValue(P,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){let Nt=z.uniformsGroups;for(let qr=0,Is=Nt.length;qr<Is;qr++){let f_=Nt[qr];X.update(f_,di),X.bind(f_,di)}}return di}function $C(_,L){_.ambientLightColor.needsUpdate=L,_.lightProbe.needsUpdate=L,_.directionalLights.needsUpdate=L,_.directionalLightShadows.needsUpdate=L,_.pointLights.needsUpdate=L,_.pointLightShadows.needsUpdate=L,_.spotLights.needsUpdate=L,_.spotLightShadows.needsUpdate=L,_.rectAreaLights.needsUpdate=L,_.hemisphereLights.needsUpdate=L}function qC(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(_,L,W){let z=S.get(_);z.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),S.get(_.texture).__webglTexture=L,S.get(_.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,L){let W=S.get(_);W.__webglFramebuffer=L,W.__useDefaultFramebuffer=L===void 0};let XC=P.createFramebuffer();this.setRenderTarget=function(_,L=0,W=0){A=_,V=L,k=W;let z=null,G=!1,xe=!1;if(_){let ye=S.get(_);if(ye.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(P.FRAMEBUFFER,ye.__webglFramebuffer),T.copy(_.viewport),ne.copy(_.scissor),$=_.scissorTest,me.viewport(T),me.scissor(ne),me.setScissorTest($),F=-1;return}else if(ye.__webglFramebuffer===void 0)v.setupRenderTarget(_);else if(ye.__hasExternalTextures)v.rebindTextures(_,S.get(_.texture).__webglTexture,S.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Je=_.depthTexture;if(ye.__boundDepthTexture!==Je){if(Je!==null&&S.has(Je)&&(_.width!==Je.image.width||_.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(_)}}let Ce=_.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(xe=!0);let Ae=S.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ae[L])?z=Ae[L][W]:z=Ae[L],G=!0):_.samples>0&&v.useMultisampledRTT(_)===!1?z=S.get(_).__webglMultisampledFramebuffer:Array.isArray(Ae)?z=Ae[W]:z=Ae,T.copy(_.viewport),ne.copy(_.scissor),$=_.scissorTest}else T.copy(se).multiplyScalar(Ne).floor(),ne.copy(Oe).multiplyScalar(Ne).floor(),$=Ve;if(W!==0&&(z=XC),me.bindFramebuffer(P.FRAMEBUFFER,z)&&me.drawBuffers(_,z),me.viewport(T),me.scissor(ne),me.setScissorTest($),G){let ye=S.get(_.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+L,ye.__webglTexture,W)}else if(xe){let ye=L;for(let Ce=0;Ce<_.textures.length;Ce++){let Ae=S.get(_.textures[Ce]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ce,Ae.__webglTexture,W,ye)}}else if(_!==null&&W!==0){let ye=S.get(_.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ye.__webglTexture,W)}F=-1},this.readRenderTargetPixels=function(_,L,W,z,G,xe,we,ye=0){if(!(_&&_.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=S.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){me.bindFramebuffer(P.FRAMEBUFFER,Ce);try{let Ae=_.textures[ye],Je=Ae.format,nt=Ae.type;if(_.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ye),!Mt.textureFormatReadable(Je)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(nt)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=_.width-z&&W>=0&&W<=_.height-G&&P.readPixels(L,W,z,G,R.convert(Je),R.convert(nt),xe)}finally{let Ae=A!==null?S.get(A).__webglFramebuffer:null;me.bindFramebuffer(P.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(_,L,W,z,G,xe,we,ye=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=S.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce)if(L>=0&&L<=_.width-z&&W>=0&&W<=_.height-G){me.bindFramebuffer(P.FRAMEBUFFER,Ce);let Ae=_.textures[ye],Je=Ae.format,nt=Ae.type;if(_.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ye),!Mt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ie=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ie),P.bufferData(P.PIXEL_PACK_BUFFER,xe.byteLength,P.STREAM_READ),P.readPixels(L,W,z,G,R.convert(Je),R.convert(nt),0);let Ct=A!==null?S.get(A).__webglFramebuffer:null;me.bindFramebuffer(P.FRAMEBUFFER,Ct);let Jt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await iC(P,Jt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ie),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,xe),P.deleteBuffer(Ie),P.deleteSync(Jt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,L=null,W=0){let z=Math.pow(2,-W),G=Math.floor(_.image.width*z),xe=Math.floor(_.image.height*z),we=L!==null?L.x:0,ye=L!==null?L.y:0;v.setTexture2D(_,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,we,ye,G,xe),me.unbindTexture()};let YC=P.createFramebuffer(),ZC=P.createFramebuffer();this.copyTextureToTexture=function(_,L,W=null,z=null,G=0,xe=0){let we,ye,Ce,Ae,Je,nt,Ie,Ct,Jt,$t=_.isCompressedTexture?_.mipmaps[xe]:_.image;if(W!==null)we=W.max.x-W.min.x,ye=W.max.y-W.min.y,Ce=W.isBox3?W.max.z-W.min.z:1,Ae=W.min.x,Je=W.min.y,nt=W.isBox3?W.min.z:0;else{let Kt=Math.pow(2,-G);we=Math.floor($t.width*Kt),ye=Math.floor($t.height*Kt),_.isDataArrayTexture?Ce=$t.depth:_.isData3DTexture?Ce=Math.floor($t.depth*Kt):Ce=1,Ae=0,Je=0,nt=0}z!==null?(Ie=z.x,Ct=z.y,Jt=z.z):(Ie=0,Ct=0,Jt=0);let At=R.convert(L.format),Tn=R.convert(L.type),Ee;L.isData3DTexture?(v.setTexture3D(L,0),Ee=P.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(v.setTexture2DArray(L,0),Ee=P.TEXTURE_2D_ARRAY):(v.setTexture2D(L,0),Ee=P.TEXTURE_2D),me.activeTexture(P.TEXTURE0),me.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),me.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),me.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);let Yn=me.getParameter(P.UNPACK_ROW_LENGTH),dt=me.getParameter(P.UNPACK_IMAGE_HEIGHT),di=me.getParameter(P.UNPACK_SKIP_PIXELS),Ki=me.getParameter(P.UNPACK_SKIP_ROWS),Wr=me.getParameter(P.UNPACK_SKIP_IMAGES);me.pixelStorei(P.UNPACK_ROW_LENGTH,$t.width),me.pixelStorei(P.UNPACK_IMAGE_HEIGHT,$t.height),me.pixelStorei(P.UNPACK_SKIP_PIXELS,Ae),me.pixelStorei(P.UNPACK_SKIP_ROWS,Je),me.pixelStorei(P.UNPACK_SKIP_IMAGES,nt);let As=_.isDataArrayTexture||_.isData3DTexture,It=L.isDataArrayTexture||L.isData3DTexture;if(_.isDepthTexture){let Kt=S.get(_),$r=S.get(L),Nt=S.get(Kt.__renderTarget),qr=S.get($r.__renderTarget);me.bindFramebuffer(P.READ_FRAMEBUFFER,Nt.__webglFramebuffer),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,qr.__webglFramebuffer);for(let Is=0;Is<Ce;Is++)As&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,S.get(_).__webglTexture,G,nt+Is),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,S.get(L).__webglTexture,xe,Jt+Is)),P.blitFramebuffer(Ae,Je,we,ye,Ie,Ct,we,ye,P.DEPTH_BUFFER_BIT,P.NEAREST);me.bindFramebuffer(P.READ_FRAMEBUFFER,null),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(G!==0||_.isRenderTargetTexture||S.has(_)){let Kt=S.get(_),$r=S.get(L);me.bindFramebuffer(P.READ_FRAMEBUFFER,YC),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,ZC);for(let Nt=0;Nt<Ce;Nt++)As?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Kt.__webglTexture,G,nt+Nt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Kt.__webglTexture,G),It?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,$r.__webglTexture,xe,Jt+Nt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,$r.__webglTexture,xe),G!==0?P.blitFramebuffer(Ae,Je,we,ye,Ie,Ct,we,ye,P.COLOR_BUFFER_BIT,P.NEAREST):It?P.copyTexSubImage3D(Ee,xe,Ie,Ct,Jt+Nt,Ae,Je,we,ye):P.copyTexSubImage2D(Ee,xe,Ie,Ct,Ae,Je,we,ye);me.bindFramebuffer(P.READ_FRAMEBUFFER,null),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else It?_.isDataTexture||_.isData3DTexture?P.texSubImage3D(Ee,xe,Ie,Ct,Jt,we,ye,Ce,At,Tn,$t.data):L.isCompressedArrayTexture?P.compressedTexSubImage3D(Ee,xe,Ie,Ct,Jt,we,ye,Ce,At,$t.data):P.texSubImage3D(Ee,xe,Ie,Ct,Jt,we,ye,Ce,At,Tn,$t):_.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,xe,Ie,Ct,we,ye,At,Tn,$t.data):_.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,xe,Ie,Ct,$t.width,$t.height,At,$t.data):P.texSubImage2D(P.TEXTURE_2D,xe,Ie,Ct,we,ye,At,Tn,$t);me.pixelStorei(P.UNPACK_ROW_LENGTH,Yn),me.pixelStorei(P.UNPACK_IMAGE_HEIGHT,dt),me.pixelStorei(P.UNPACK_SKIP_PIXELS,di),me.pixelStorei(P.UNPACK_SKIP_ROWS,Ki),me.pixelStorei(P.UNPACK_SKIP_IMAGES,Wr),xe===0&&L.generateMipmaps&&P.generateMipmap(Ee),me.unbindTexture()},this.initRenderTarget=function(_){S.get(_).__webglFramebuffer===void 0&&v.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?v.setTextureCube(_,0):_.isData3DTexture?v.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?v.setTexture2DArray(_,0):v.setTexture2D(_,0),me.unbindTexture()},this.resetState=function(){V=0,k=0,A=null,me.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var Rp=class n{constructor(){}ngAfterViewInit(){new LC.default("#typewriter",{loop:!0,delay:75}).typeString("Senior Software Engineer").pauseFor(1e3).deleteAll().typeString(".NET \u2022 Angular \u2022 Azure").pauseFor(1e3).deleteAll().typeString("Microservices Architect").start();let e=new Rl,t=new Ln(75,window.innerWidth/window.innerHeight,.1,1e3),i=new Dp({alpha:!0});i.setSize(window.innerWidth,window.innerHeight),document.getElementById("home")?.appendChild(i.domElement);let r=new xo,o=new Ms({color:3900150,wireframe:!0}),s=new Xn(r,o);e.add(s),t.position.z=3;let a=()=>{requestAnimationFrame(a),s.rotation.x+=.01,s.rotation.y+=.01,i.render(e,t)};a()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Gt({type:n,selectors:[["app-home"]],decls:13,vars:0,consts:[["id","home",1,"h-screen","relative","overflow-hidden"],["id","tsparticles",1,"absolute","inset-0"],[1,"relative","z-10","flex","items-center","justify-center","h-full","text-center"],[1,"text-6xl","md:text-8xl","font-bold","animate-float"],["id","typewriter",1,"text-xl","text-gray-300","mt-4"],[1,"mt-8","flex","gap-4","justify-center"],["href","#projects",1,"px-6","py-3","bg-blue-500","rounded-xl"],["href","/assets/cv.pdf",1,"px-6","py-3","border","rounded-xl"]],template:function(t,i){t&1&&(Ue(0,"section",0),Nn(1,"div",1),Ue(2,"div",2)(3,"div")(4,"h1",3),te(5,"Kokila Sanjeewa"),He(),Ue(6,"p",4),te(7," Senior Software Engineer \u2022 Architect \u2022 Tech Lead "),He(),Ue(8,"div",5)(9,"a",6),te(10," View Work "),He(),Ue(11,"a",7),te(12," Download CV "),He()()()()())},dependencies:[Zd],encapsulation:2})};var kC=(n,e)=>e.href;function mU(n,e){if(n&1&&(ee(0,"li")(1,"a",10),te(2),ie()()),n&2){let t=e.$implicit,i=tn();pe(),Ut("href",t.href,ti)("ngClass",i.activeSection()===t.id?"text-zinc-50 after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-red after:rounded-full":"hover:text-zinc-50"),pe(),Ft(" ",t.label," ")}}function gU(n,e){if(n&1){let t=Nr();ee(0,"a",13),$n("click",function(){jn(t);let r=tn(2);return Wn(r.mobileOpen.set(!1))}),te(1),ie()}if(n&2){let t=e.$implicit;Ut("href",t.href,ti),pe(),Ft(" ",t.label," ")}}function vU(n,e){if(n&1){let t=Nr();ee(0,"div",9),Pt(1,gU,2,2,"a",11,kC),ee(3,"a",12),$n("click",function(){jn(t);let r=tn();return Wn(r.mobileOpen.set(!1))}),te(4," Hire me "),ie()()}if(n&2){let t=tn();pe(),Ot(t.navItems)}}var Ka=class n{isScrolled=on(!1);mobileOpen=on(!1);activeSection=on("home");navItems=[{label:"About",href:"#about",id:"about"},{label:"Skills",href:"#skills",id:"skills"},{label:"Projects",href:"#projects",id:"projects"},{label:"Experience",href:"#experience",id:"experience"},{label:"Contact",href:"#contact",id:"contact"}];onScroll(){this.isScrolled.set(window.scrollY>40);let e=["home","about","skills","projects","experience","contact"];for(let t of[...e].reverse()){let i=document.getElementById(t);if(i&&window.scrollY>=i.offsetTop-120){this.activeSection.set(t);break}}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Gt({type:n,selectors:[["app-navbar"]],hostBindings:function(t,i){t&1&&$n("scroll",function(){return i.onScroll()},rv)},decls:18,vars:5,consts:[[1,"fixed","top-0","left-0","right-0","z-50","transition-all","duration-300",3,"ngClass"],[1,"max-w-[1160px]","mx-auto","px-6","flex","items-center","gap-6"],["href","#home",1,"font-mono","text-[17px]","font-medium","text-zinc-50","no-underline","mr-auto","hover:text-red","transition-colors"],[1,"text-red"],[1,"hidden","md:flex","items-center","gap-1","list-none"],["href","#contact",1,"hidden","md:inline-flex","btn-primary","!py-2","!px-4","text-[13px]"],["aria-label","Toggle menu",1,"md:hidden","bg-transparent","border-none","cursor-pointer","p-1",3,"click"],[1,"w-5","h-0.5","bg-zinc-50","rounded","transition-all","duration-300","mb-1.5",3,"ngClass"],[1,"w-5","h-0.5","bg-zinc-50","rounded","transition-all","duration-300",3,"ngClass"],[1,"md:hidden","flex","flex-col","gap-1","px-6","py-4","bg-zinc-925","border-t","border-white/[0.06]"],[1,"text-[13px]","text-zinc-400","no-underline","px-3","py-1.5","rounded-md","transition-all","duration-200","relative",3,"href","ngClass"],[1,"text-[15px]","text-zinc-400","no-underline","py-2.5","border-b","border-white/[0.06]","hover:text-zinc-50","transition-colors",3,"href"],["href","#contact",1,"btn-primary","mt-2","justify-center",3,"click"],[1,"text-[15px]","text-zinc-400","no-underline","py-2.5","border-b","border-white/[0.06]","hover:text-zinc-50","transition-colors",3,"click","href"]],template:function(t,i){t&1&&(ee(0,"header",0)(1,"nav",1)(2,"a",2)(3,"span",3),te(4,"<"),ie(),te(5,"KS"),ee(6,"span",3),te(7,"/>"),ie()(),ee(8,"ul",4),Pt(9,mU,3,3,"li",null,kC),ie(),ee(11,"a",5),te(12," Hire me "),ie(),ee(13,"button",6),$n("click",function(){return i.mobileOpen.set(!i.mobileOpen())}),Dt(14,"div",7)(15,"div",7)(16,"div",8),ie()(),bi(17,vU,5,0,"div",9),ie()),t&2&&(Ut("ngClass",i.isScrolled()?"py-3 bg-zinc-950/90 backdrop-blur-xl border-b border-white/[0.06]":"py-5"),pe(9),Ot(i.navItems),pe(5),Ut("ngClass",i.mobileOpen()?"rotate-45 translate-y-2":""),pe(),Ut("ngClass",i.mobileOpen()?"opacity-0":""),pe(),Ut("ngClass",i.mobileOpen()?"-rotate-45 -translate-y-2":""),pe(),Si(i.mobileOpen()?17:-1))},dependencies:[cs],encapsulation:2})};var UC=[{path:"",component:Ka},{path:"home",component:Rp},{path:"about",component:Da},{path:"projects",component:Ta},{path:"contact",component:Ca}];var BC={providers:[lg(),Ry(UC)]};var VC=(n,e)=>e.label;function yU(n,e){if(n&1&&(Ue(0,"a",21),Nn(1,"span",32),He()),n&2){let t=e.$implicit;so("href",t.href,ti),Hc("aria-label",t.label),pe(),so("innerHTML",t.icon,aa)}}function _U(n,e){if(n&1&&(Ue(0,"div",33),Nn(1,"span",32),te(2),He()),n&2){let t=e.$implicit;Gc(t.style),pe(),so("innerHTML",t.icon,aa),pe(),Ft(" ",t.label," ")}}var Np=class n{roles=["scalable web apps.","Angular UIs.","REST APIs.","clean code.","great experiences."];roleIdx=0;interval=null;socials=[{label:"GitHub",href:"https://github.com/kokilasanjeewa",icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>'},{label:"LinkedIn",href:"https://linkedin.com",icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>'},{label:"Email",href:"mailto:kokila@example.com",icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>'}];badges=[{label:"Angular 19",style:"top:36px;right:4px;animation:float 6s ease-in-out infinite",icon:'<svg width="13" height="13" viewBox="0 0 250 250" fill="#DD0031"><polygon points="125,30 162,111 197,111 125,218 53,111 88,111"/></svg>'},{label:"TypeScript",style:"bottom:72px;left:-4px;animation:float 7s ease-in-out infinite;animation-delay:-2s",icon:'<svg width="13" height="13" viewBox="0 0 24 24" fill="#3178C6"><path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.937 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z"/></svg>'},{label:"Node.js",style:"bottom:20px;right:10px;animation:float 8s ease-in-out infinite;animation-delay:-4s",icon:'<svg width="13" height="13" viewBox="0 0 24 24" fill="#339933"><path d="M11.998 24a1.357 1.357 0 0 1-.679-.18L8.45 21.988c-.43-.24-.219-.325-.078-.374.592-.207.712-.254 1.343-.614.066-.038.152-.023.22.017l2.186 1.297c.082.043.196.043.271 0l8.52-4.917c.082-.047.136-.142.136-.241V6.921c0-.102-.054-.196-.139-.243l-8.514-4.913a.276.276 0 0 0-.27 0L3.609 6.678a.283.283 0 0 0-.141.244v9.833c0 .099.055.195.141.239l2.334 1.348c1.268.635 2.042-.113 2.042-.865V7.175c0-.138.108-.247.248-.247h1.076c.136 0 .248.109.248.247v10.302c0 1.697-.924 2.672-2.533 2.672-.494 0-.883 0-1.969-.535l-2.238-1.287a1.378 1.378 0 0 1-.68-1.19V6.921c0-.49.261-.943.68-1.19l8.518-4.92a1.418 1.418 0 0 1 1.362 0l8.518 4.92c.42.247.68.7.68 1.19v9.833c0 .49-.26.942-.68 1.19l-8.518 4.917a1.354 1.354 0 0 1-.683.179z"/></svg>'}];ngOnInit(){this.interval=setInterval(()=>{this.roleIdx=(this.roleIdx+1)%this.roles.length;let e=document.getElementById("hero-role");e&&(e.textContent=this.roles[this.roleIdx])},2800)}ngOnDestroy(){this.interval&&clearInterval(this.interval)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Gt({type:n,selectors:[["app-hero"]],decls:48,vars:0,consts:[["id","home",1,"min-h-screen","flex","items-center","relative","overflow-hidden","pt-20","px-6"],[1,"absolute","inset-0","grid-overlay","pointer-events-none"],[1,"absolute","w-[480px]","h-[480px]","rounded-full","pointer-events-none",2,"background","radial-gradient(circle,rgba(221,0,49,0.09) 0%,transparent 70%)","top","-80px","right","-60px","animation","float 9s ease-in-out infinite"],[1,"absolute","w-[320px]","h-[320px]","rounded-full","pointer-events-none",2,"background","radial-gradient(circle,rgba(59,130,246,0.06) 0%,transparent 70%)","bottom","0","left","-40px","animation","float 12s ease-in-out infinite reverse"],[1,"max-w-[1160px]","mx-auto","w-full","grid","grid-cols-1","lg:grid-cols-[1fr_400px]","items-center","gap-14","py-16","relative","z-10"],[1,"inline-flex","items-center","gap-2","bg-green-500/10","border","border-green-500/25","px-4","py-1.5","rounded-full","font-mono","text-[11px]","text-green-400","mb-6",2,"animation","fadeUp .5s .1s both"],[1,"w-2","h-2","rounded-full","bg-green-400","block",2,"animation","pulseDot 2s ease-in-out infinite"],[1,"font-display","font-extrabold","leading-none","tracking-tight","mb-4",2,"font-size","clamp(44px,8vw,84px)","animation","fadeUp .6s .2s both"],[1,"block","text-zinc-400"],[1,"block","text-zinc-50"],[1,"text-red",2,"animation","blink 1.1s step-end infinite"],[1,"flex","items-center","gap-3","text-lg","text-zinc-400","mb-5",2,"animation","fadeUp .6s .35s both"],["id","hero-role",1,"text-red","font-mono","text-[14px]","font-medium","min-w-[200px]"],[1,"text-[15px]","text-zinc-400","leading-relaxed","max-w-[460px]","mb-8",2,"animation","fadeUp .6s .5s both"],[1,"flex","items-center","gap-3","mb-10",2,"animation","fadeUp .6s .65s both"],["href","#projects",1,"btn-primary"],["width","14","height","14","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],["d","M22 11.08V12a10 10 0 1 1-5.93-9.14"],["points","22 4 12 14.01 9 11.01"],["href","#contact",1,"btn-outline"],[1,"flex","items-center","gap-2",2,"animation","fadeUp .6s .8s both"],["target","_blank",1,"w-9","h-9","rounded-md","border","border-white/10","flex","items-center","justify-content:center","text-zinc-400","no-underline","transition-all","duration-200","hover:border-red/40","hover:text-red","hover:bg-red/10",2,"display","flex","align-items","center","justify-content","center",3,"href"],[1,"hidden","lg:flex","items-center","justify-content:center","relative","h-[360px]",2,"justify-content","center","animation","fadeIn .8s .4s both"],[1,"absolute","rounded-full","border","border-red/30",2,"width","280px","height","280px","top","50%","left","50%","transform","translate(-50%,-50%)","animation","spin 22s linear infinite"],[1,"absolute","w-2.5","h-2.5","bg-red","rounded-full",2,"top","-5px","left","50%","transform","translateX(-50%)"],[1,"absolute","rounded-full","border","border-white/[0.06]",2,"width","340px","height","340px","top","50%","left","50%","transform","translate(-50%,-50%)","animation","spin 34s linear infinite reverse"],[1,"absolute","w-1.5","h-1.5","bg-blue-400","rounded-full",2,"bottom","-3px","right","44px"],[1,"w-44","h-44","rounded-full","bg-zinc-900","border-2","border-white/[0.12]","flex","items-center","justify-content:center","relative","z-10",2,"display","flex","align-items","center","justify-content","center"],[1,"font-display","font-extrabold","text-red",2,"font-size","46px","letter-spacing","-2px"],[1,"absolute","flex","items-center","gap-2","bg-zinc-900","border","border-white/10","px-3","py-2","rounded-full","font-mono","text-[11px]","text-zinc-50",3,"style"],[1,"absolute","bottom-8","left-1/2","-translate-x-1/2","flex","flex-col","items-center","gap-2","font-mono","text-[10px]","tracking-[0.15em]","uppercase","text-zinc-700"],[1,"w-px","h-10","bg-gradient-to-b","from-zinc-700","to-transparent",2,"animation","float 2s ease-in-out infinite"],[3,"innerHTML"],[1,"absolute","flex","items-center","gap-2","bg-zinc-900","border","border-white/10","px-3","py-2","rounded-full","font-mono","text-[11px]","text-zinc-50"]],template:function(t,i){t&1&&(Ue(0,"section",0),Nn(1,"div",1)(2,"div",2)(3,"div",3),Ue(4,"div",4)(5,"div")(6,"div",5),Nn(7,"span",6),te(8," Available for work "),He(),Ue(9,"h1",7)(10,"span",8),te(11,"Kokila"),He(),Ue(12,"span",9),te(13," Sanjeewa"),Ue(14,"span",10),te(15,"|"),He()()(),Ue(16,"div",11)(17,"span"),te(18,"I build"),He(),Ue(19,"span",12),te(20,"scalable web apps."),He()(),Ue(21,"p",13),te(22," Full Stack Developer crafting high-performance web apps with Angular, TypeScript & modern backend stacks. Passionate about clean architecture and exceptional user experiences. "),He(),Ue(23,"div",14)(24,"a",15),Rn(),Ue(25,"svg",16),Nn(26,"path",17)(27,"polyline",18),He(),te(28," View my work "),He(),Li(),Ue(29,"a",19),te(30,"Let's talk"),He()(),Ue(31,"div",20),Pt(32,yU,2,3,"a",21,VC),He()(),Ue(34,"div",22)(35,"div",23),Nn(36,"div",24),He(),Ue(37,"div",25),Nn(38,"div",26),He(),Ue(39,"div",27)(40,"span",28),te(41,"KS"),He()(),Pt(42,_U,3,4,"div",29,VC),He()(),Ue(44,"div",30)(45,"span"),te(46,"scroll"),He(),Nn(47,"div",31),He()()),t&2&&(pe(32),Ot(i.socials),pe(10),Ot(i.badges))},encapsulation:2})};var HC=n=>({color:n}),xU=(n,e)=>({width:n,background:e}),zC=(n,e)=>e.name;function bU(n,e){if(n&1&&(ee(0,"div")(1,"div",15)(2,"span",16),te(3),ie(),ee(4,"span",17),te(5),ie()(),ee(6,"div",18),Dt(7,"div",19),ie()()),n&2){let t=e.$implicit,i=tn().$implicit;pe(3),jt(t.name),pe(),Ut("ngStyle",Wd(4,HC,i.color)),pe(),Ft(" ",t.level,"% "),pe(2),Ut("ngStyle",Tv(6,xU,t.level+"%",i.color))}}function SU(n,e){if(n&1&&(ee(0,"div",6)(1,"div",11)(2,"span",12),te(3),ie(),ee(4,"span",13),te(5),ie()(),ee(6,"div",14),Pt(7,bU,8,9,"div",null,zC),ie()()),n&2){let t=e.$implicit;pe(2),Ut("ngStyle",Wd(3,HC,t.color)),pe(),jt(t.icon),pe(2),jt(t.name),pe(2),Ot(t.skills)}}function EU(n,e){if(n&1&&(ee(0,"span",10),te(1),ie()),n&2){let t=e.$implicit;pe(),Ft(" ",t," ")}}var Pp=class n{categories=[{name:"Frontend",icon:"\u25C8",color:"#DD0031",skills:[{name:"Angular",level:95},{name:"TypeScript",level:92},{name:"RxJS",level:85},{name:"CSS / SCSS",level:88}]},{name:"Backend",icon:"\u2B21",color:"#3b82f6",skills:[{name:"Node.js",level:88},{name:".NET / C#",level:82},{name:"REST APIs",level:90},{name:"PostgreSQL",level:80}]},{name:"DevOps & Tools",icon:"\u229E",color:"#22c55e",skills:[{name:"Git / GitHub",level:92},{name:"Docker",level:75},{name:"CI/CD",level:78},{name:"Linux",level:80}]}];extras=["Redux/NgRx","GraphQL","MongoDB","Redis","AWS","Figma","Jest","Cypress","Webpack","Vite","Tailwind CSS","Firebase"];static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Gt({type:n,selectors:[["app-skills"]],decls:17,vars:0,consts:[["id","skills",1,"py-24","px-6","border-t","border-white/[0.06]"],[1,"max-w-[1160px]","mx-auto"],[1,"section-label"],[1,"section-title"],[1,"section-desc"],[1,"grid","grid-cols-1","md:grid-cols-3","gap-5","mb-14"],[1,"card","p-7","hover:border-white/10","transition-colors","duration-200"],[1,"text-center"],[1,"font-mono","text-[11px]","tracking-[0.15em]","uppercase","text-zinc-600","mb-4"],[1,"flex","flex-wrap","gap-2","justify-center"],[1,"tag","hover:text-red","hover:border-red/30","hover:bg-red/10","transition-all","duration-200","cursor-default"],[1,"flex","items-center","gap-2.5","mb-6"],[1,"text-xl",3,"ngStyle"],[1,"font-display","font-bold","text-[15px]"],[1,"flex","flex-col","gap-4"],[1,"flex","justify-between","items-center","mb-1.5"],[1,"text-[13px]","text-zinc-50","font-medium"],[1,"font-mono","text-[11px]","font-medium",3,"ngStyle"],[1,"skill-bar-track"],[1,"h-full","rounded-full","transition-all","duration-[1200ms]","ease-out",3,"ngStyle"]],template:function(t,i){t&1&&(ee(0,"section",0)(1,"div",1)(2,"p",2),te(3,"What I work with"),ie(),ee(4,"h2",3),te(5,"Skills & Technologies"),ie(),ee(6,"p",4),te(7," A curated set of tools and technologies I use to build robust, scalable applications from frontend to backend. "),ie(),ee(8,"div",5),Pt(9,SU,9,5,"div",6,zC),ie(),ee(11,"div",7)(12,"p",8),te(13," Also familiar with "),ie(),ee(14,"div",9),Pt(15,EU,2,1,"span",10,Rr),ie()()()()),t&2&&(pe(9),Ot(i.categories),pe(6),Ot(i.extras))},dependencies:[Uv],encapsulation:2})};var MU=(n,e)=>e.company;function wU(n,e){n&1&&Dt(0,"div",9)}function CU(n,e){n&1&&Dt(0,"div",10)}function TU(n,e){if(n&1&&(ee(0,"div",22),Dt(1,"span",25),te(2),ie()),n&2){let t=e.$implicit;pe(2),Ft(" ",t," ")}}function DU(n,e){if(n&1&&(ee(0,"span",24),te(1),ie()),n&2){let t=e.$implicit;pe(),jt(t)}}function AU(n,e){if(n&1&&(ee(0,"div",6)(1,"div",7)(2,"div",8),bi(3,wU,1,0,"div",9),ie(),bi(4,CU,1,0,"div",10),ie(),ee(5,"div",11)(6,"div",12)(7,"div")(8,"p",13),te(9),ie(),ee(10,"div",14)(11,"p",15),te(12),ie(),ee(13,"span",16),te(14),ie(),ee(15,"span",16),te(16),ie()()(),ee(17,"div",17)(18,"span",18),te(19),ie(),ee(20,"span",19),te(21),ie()()(),ee(22,"p",20),te(23),ie(),ee(24,"div",21),Pt(25,TU,3,1,"div",22,Rr),ie(),ee(27,"div",23),Pt(28,DU,2,1,"span",24,Rr),ie()()()),n&2){let t=e.$implicit,i=e.$index,r=e.$count;pe(2),Ut("ngClass",t.current?"bg-red border-red":"bg-zinc-800 border-white/15"),pe(),Si(t.current?3:-1),pe(),Si(i!==r-1?4:-1),pe(),Ut("ngClass",t.current?"!border-red/30":""),pe(4),jt(t.role),pe(3),jt(t.company),pe(2),Ft(" ",t.type," "),pe(2),Ft(" ",t.location," "),pe(2),Ut("ngClass",t.current?"bg-red/10 border-red/30 text-red":"bg-zinc-900 border-white/[0.08] text-zinc-400"),pe(),Ft(" ",t.period," "),pe(2),jt(t.duration),pe(2),jt(t.desc),pe(2),Ot(t.achievements),pe(3),Ot(t.tech)}}var Op=class n{jobs=[{role:"Senior Software Engineer",company:"Pru Su King (pvt) LTD.",period:"Oct 2024 \u2014 Present",duration:"1 yr 9 mos",type:"Full-time",location:"Remote \xB7 Nugegoda, Sri Lanka",current:!0,desc:"Contributing to the development of a large-scale ERP system designed to streamline operations across multiple departments including Operations, Sales, Accounts, HR, Vehicle Management, Inventory, and Asset Management.",achievements:["Developed User Management Module with authentication and permission-based access control (RBAC) for fine-grained security","Enhanced Operations, Sales, Accounts, HR, and Vehicle Management modules supporting production workflows, order management, financial reporting, and fleet tracking","Integrated RabbitMQ and MassTransit for asynchronous microservices communication, improving scalability and reliability","Implemented SignalR for real-time notifications, alerts, and status updates across the system","Designed and contributed to Microservices Architecture improving scalability, maintainability, and performance","Utilized Docker for containerization and implemented CI/CD pipelines using Azure DevOps","Deployed solutions on Microsoft Azure using App Services, Azure SQL Database, and Azure Container Registry","Optimized system performance through database tuning, auto-scaling strategies, and Portainer container management"],tech:[".NET","Angular","RabbitMQ","MassTransit","SignalR","Docker","Azure DevOps","Azure SQL","Microservices","Portainer"]},{role:"Software Engineer",company:"Evicio",period:"Feb 2020 \u2014 Oct 2020",duration:"9 mos",type:"Full-time",location:"Remote \xB7 Nugegoda, Sri Lanka",current:!1,desc:"Contributed to the development of a comprehensive vehicle parking management system for a USA-based client, providing automated and efficient parking solutions with real-time availability tracking.",achievements:["Developed real-time parking space tracking enabling users to view available spots via web and mobile","Integrated payment gateway systems for seamless online and mobile payments including credit card, digital wallets, and QR codes","Implemented backend logic for advance parking space reservations, improving customer experience","Built admin dashboard for managing parking spaces, monitoring occupancy, and generating capacity reports","Developed analytics systems for space utilization, revenue tracking, and traffic pattern insights"],tech:["Angular",".NET","SQL Server","Payment Gateway","REST API","Azure"]},{role:"Senior Software Engineer",company:"Maliban Wovens (pvt) Ltd",period:"Feb 2018 \u2014 Feb 2020",duration:"2 yrs 1 mo",type:"Full-time",location:"On-site \xB7 Colombo, Sri Lanka",current:!1,desc:"Designed, developed, and deployed a custom Point of Sale (POS) system across 12 factories with 10,000 employees, processing an average of 120,000 daily transactions to streamline retail operations and optimize inventory management.",achievements:["Implemented barcode scanning to automate checkout, reducing manual data entry errors significantly","Developed real-time inventory tracking integrated with POS ensuring accurate stock levels and automatic alerts","Built automated sales reporting and analytics system for real-time performance monitoring and trend analysis","Implemented role-based access control (RBAC) for cashiers, managers, and administrators","Optimized system to handle 120,000+ daily transactions via database indexing, query optimization, and load balancing","Developed offline mode ensuring POS remains operational during network outages with automatic data sync"],tech:["C#",".NET","SQL Server","Angular","Barcode","RBAC","REST API"]},{role:"Associate Software Engineer",company:"Scaf.lk",period:"Jan 2017 \u2014 Mar 2018",duration:"1 yr 3 mos",type:"Part-time",location:"Remote \xB7 Matara, Sri Lanka",current:!1,desc:"Designed, developed, and deployed a comprehensive online E-Learning platform to facilitate employee training and skill development across multiple locations.",achievements:["Built interactive course modules including video tutorials, quizzes, and hands-on assignments for active engagement","Implemented automated progress tracking and reporting for HR and management to monitor training completion rates","Developed certification management enabling employees to earn digital certificates upon course completion","Ensured mobile-friendly responsive design for accessibility across all devices","Deployed on AWS utilizing cloud resources for scalability, security, and high availability"],tech:["Angular","Node.js","MongoDB","AWS","REST API","Responsive Design"]},{role:"System Administrator",company:"EAM Maliban Textiles (pvt) Ltd",period:"Sep 2003 \u2014 Jan 2016",duration:"12 yrs 5 mos",type:"Full-time",location:"On-site \xB7 Colombo, Sri Lanka",current:!1,desc:"Managed the entire IT infrastructure of the factory including servers, networks, and hardware resources, ensuring seamless day-to-day operations and swift troubleshooting of technical issues.",achievements:["Administered Windows Server 2000/2012 environments ensuring optimal performance and security","Managed MS Exchange Server and maintained efficient email communication across the organisation","Managed Red Hat Linux Enterprise Server and implemented Sendmail/Postfix email delivery systems","Handled full network infrastructure including PABX and CCTV camera systems","Introduced automation solutions reducing manual workloads, increasing accuracy, and enhancing workflow efficiency","Implemented data security measures, regular backups, and system updates to safeguard critical business information","Provided user training and acquired CCNA and RHCE qualifications to enhance network administration skills"],tech:["Windows Server","Red Hat Linux","MS Exchange","Postfix","TCP/IP","CCNA","RHCE","CCTV","PABX"]}];static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Gt({type:n,selectors:[["app-experience"]],decls:11,vars:0,consts:[["id","experience",1,"py-24","px-6","border-t","border-white/[0.06]"],[1,"max-w-[760px]","mx-auto"],[1,"section-label"],[1,"section-title"],[1,"section-desc"],[1,"relative"],[1,"grid","gap-6","relative","mb-2",2,"grid-template-columns","28px 1fr"],[1,"flex","flex-col","items-center"],[1,"w-3.5","h-3.5","rounded-full","mt-5","relative","z-10","flex-shrink-0","border-2",3,"ngClass"],[1,"absolute","inset-[-4px]","rounded-full","border","border-red/30",2,"animation","pulseDot 2s ease-out infinite"],[1,"w-px","flex-1","bg-white/[0.06]","mt-1","min-h-[32px]"],[1,"card","p-6","mb-4","transition-colors","duration-200","hover:border-white/10",3,"ngClass"],[1,"flex","flex-wrap","justify-between","items-start","gap-4","mb-3"],[1,"font-display","font-bold","text-[17px]","mb-1"],[1,"flex","flex-wrap","items-center","gap-2"],[1,"text-[14px]","text-red","font-medium"],[1,"font-mono","text-[10px]","px-2","py-0.5","rounded","border","border-white/10","text-zinc-500"],[1,"flex","flex-col","items-end","gap-1"],[1,"font-mono","text-[11px]","px-3","py-1","rounded-full","border",3,"ngClass"],[1,"font-mono","text-[11px]","text-zinc-600"],[1,"text-[14px]","text-zinc-400","leading-relaxed","mb-4"],[1,"flex","flex-col","gap-2","mb-4"],[1,"flex","items-start","gap-2.5","text-[13px]","text-zinc-400"],[1,"flex","flex-wrap","gap-1.5"],[1,"tag"],[1,"w-1.5","h-1.5","rounded-full","bg-red","mt-[5px]","flex-shrink-0"]],template:function(t,i){t&1&&(ee(0,"section",0)(1,"div",1)(2,"p",2),te(3,"Career path"),ie(),ee(4,"h2",3),te(5,"Work Experience"),ie(),ee(6,"p",4),te(7," Over 20 years of hands-on experience across IT infrastructure, software engineering, and enterprise systems. "),ie(),ee(8,"div",5),Pt(9,AU,30,12,"div",6,MU),ie()()()),t&2&&(pe(9),Ot(i.jobs))},dependencies:[cs],encapsulation:2})};var IU=(n,e)=>e.label;function RU(n,e){if(n&1&&(Ue(0,"a",6),te(1),He()),n&2){let t=e.$implicit;so("href",t.href,ti),pe(),Ft(" ",t.label," ")}}var Fp=class n{year=new Date().getFullYear();links=[{label:"About",href:"#about"},{label:"Skills",href:"#skills"},{label:"Projects",href:"#projects"},{label:"Experience",href:"#experience"},{label:"Contact",href:"#contact"}];static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Gt({type:n,selectors:[["app-footer"]],decls:16,vars:1,consts:[[1,"border-t","border-white/[0.06]","py-8","px-6","bg-zinc-925"],[1,"max-w-[1160px]","mx-auto","flex","flex-wrap","items-center","justify-between","gap-4"],["href","#home",1,"font-mono","text-[15px]","text-zinc-50","no-underline"],[1,"text-red"],[1,"font-mono","text-[11px]","text-zinc-700","mt-1"],[1,"flex","flex-wrap","gap-4"],[1,"text-[13px]","text-zinc-400","no-underline","hover:text-red","transition-colors","duration-200",3,"href"],[1,"text-[12px]","text-zinc-700"]],template:function(t,i){t&1&&(Ue(0,"footer",0)(1,"div",1)(2,"div")(3,"a",2)(4,"span",3),te(5,"<"),He(),te(6,"KS"),Ue(7,"span",3),te(8,"/>"),He()(),Ue(9,"p",4),te(10," Built with Angular 19 \xB7 Deployed on GitHub Pages "),He()(),Ue(11,"div",5),Pt(12,RU,2,2,"a",6,IU),He(),Ue(14,"p",7),te(15),He()()()),t&2&&(pe(12),Ot(i.links),pe(3),Ft(" \xA9 ",i.year," Kokila Sanjeewa. All rights reserved. "))},encapsulation:2})};var Lp=class n{title=on("portfolio");theme="dark";toggleTheme(){this.theme=this.theme==="dark"?"light":"dark",document.documentElement.classList.toggle("dark")}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Gt({type:n,selectors:[["app-root"]],decls:9,vars:0,template:function(t,i){t&1&&(Dt(0,"app-navbar"),ee(1,"main"),Dt(2,"app-hero")(3,"app-about")(4,"app-skills")(5,"app-projects")(6,"app-experience")(7,"app-contact"),ie(),Dt(8,"app-footer"))},dependencies:[Ka,Np,Da,Pp,Ta,Op,Ca,Fp],styles:["main[_ngcontent-%COMP%]{position:relative}"]})};qv(Lp,BC).catch(n=>console.error(n));
