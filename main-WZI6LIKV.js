var fb=Object.create;var eh=Object.defineProperty,hb=Object.defineProperties,pb=Object.getOwnPropertyDescriptor,mb=Object.getOwnPropertyDescriptors,gb=Object.getOwnPropertyNames,Cv=Object.getOwnPropertySymbols,vb=Object.getPrototypeOf,Av=Object.prototype.hasOwnProperty,yb=Object.prototype.propertyIsEnumerable;var Dv=(n,e,t)=>e in n?eh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,de=(n,e)=>{for(var t in e||={})Av.call(e,t)&&Dv(n,t,e[t]);if(Cv)for(var t of Cv(e))yb.call(e,t)&&Dv(n,t,e[t]);return n},xt=(n,e)=>hb(n,mb(e));var _b=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var xb=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of gb(e))!Av.call(n,r)&&r!==t&&eh(n,r,{get:()=>e[r],enumerable:!(i=pb(e,r))||i.enumerable});return n};var Sb=(n,e,t)=>(t=n!=null?fb(vb(n)):{},xb(e||!n||!n.__esModule?eh(t,"default",{value:n,enumerable:!0}):t,n));var bS=_b((sc,Qm)=>{"use strict";(function(n,e){typeof sc=="object"&&typeof Qm=="object"?Qm.exports=e():typeof define=="function"&&define.amd?define("Typewriter",[],e):typeof sc=="object"?sc.Typewriter=e():n.Typewriter=e()})(typeof self<"u"?self:sc,()=>(()=>{var n={3146:(r,s,o)=>{for(var a=o(3491),c=typeof window>"u"?o.g:window,l=["moz","webkit"],u="AnimationFrame",d=c["request"+u],f=c["cancel"+u]||c["cancelRequest"+u],h=0;!d&&h<l.length;h++)d=c[l[h]+"Request"+u],f=c[l[h]+"Cancel"+u]||c[l[h]+"CancelRequest"+u];if(!d||!f){var g=0,x=0,m=[],p=1e3/60;d=function(E){if(m.length===0){var b=a(),M=Math.max(0,p-(b-g));g=M+b,setTimeout(function(){var N=m.slice(0);m.length=0;for(var w=0;w<N.length;w++)if(!N[w].cancelled)try{N[w].callback(g)}catch(I){setTimeout(function(){throw I},0)}},Math.round(M))}return m.push({handle:++x,callback:E,cancelled:!1}),x},f=function(E){for(var b=0;b<m.length;b++)m[b].handle===E&&(m[b].cancelled=!0)}}r.exports=function(E){return d.call(c,E)},r.exports.cancel=function(){f.apply(c,arguments)},r.exports.polyfill=function(E){E||(E=c),E.requestAnimationFrame=d,E.cancelAnimationFrame=f}},3491:function(r){(function(){var s,o,a,c,l,u;typeof performance<"u"&&performance!==null&&performance.now?r.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(r.exports=function(){return(s()-l)/1e6},o=process.hrtime,c=(s=function(){var d;return 1e9*(d=o())[0]+d[1]})(),u=1e9*process.uptime(),l=c-u):Date.now?(r.exports=function(){return Date.now()-a},a=Date.now()):(r.exports=function(){return new Date().getTime()-a},a=new Date().getTime())}).call(this)}},e={};function t(r){var s=e[r];if(s!==void 0)return s.exports;var o=e[r]={exports:{}};return n[r].call(o.exports,o,o.exports,t),o.exports}t.n=r=>{var s=r&&r.__esModule?()=>r.default:()=>r;return t.d(s,{a:s}),s},t.d=(r,s)=>{for(var o in s)t.o(s,o)&&!t.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:s[o]})},t.g=(function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}})(),t.o=(r,s)=>Object.prototype.hasOwnProperty.call(r,s);var i={};return(()=>{"use strict";t.d(i,{default:()=>H});var r=t(3146),s=t.n(r);let o=function(V){return new RegExp(/<[a-z][\s\S]*>/i).test(V)},a=function(V,k){return Math.floor(Math.random()*(k-V+1))+V};var c="TYPE_CHARACTER",l="REMOVE_CHARACTER",u="REMOVE_ALL",d="REMOVE_LAST_VISIBLE_NODE",f="PAUSE_FOR",h="CALL_FUNCTION",g="ADD_HTML_TAG_ELEMENT",x="CHANGE_DELETE_SPEED",m="CHANGE_DELAY",p="CHANGE_CURSOR",E="PASTE_STRING",b="HTML_TAG";function M(V){return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(k){return typeof k}:function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k},M(V)}function N(V,k){var A=Object.keys(V);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(V);k&&(O=O.filter(function(U){return Object.getOwnPropertyDescriptor(V,U).enumerable})),A.push.apply(A,O)}return A}function w(V){for(var k=1;k<arguments.length;k++){var A=arguments[k]!=null?arguments[k]:{};k%2?N(Object(A),!0).forEach(function(O){L(V,O,A[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(V,Object.getOwnPropertyDescriptors(A)):N(Object(A)).forEach(function(O){Object.defineProperty(V,O,Object.getOwnPropertyDescriptor(A,O))})}return V}function I(V){return(function(k){if(Array.isArray(k))return y(k)})(V)||(function(k){if(typeof Symbol<"u"&&k[Symbol.iterator]!=null||k["@@iterator"]!=null)return Array.from(k)})(V)||(function(k,A){if(k){if(typeof k=="string")return y(k,A);var O={}.toString.call(k).slice(8,-1);return O==="Object"&&k.constructor&&(O=k.constructor.name),O==="Map"||O==="Set"?Array.from(k):O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O)?y(k,A):void 0}})(V)||(function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function y(V,k){(k==null||k>V.length)&&(k=V.length);for(var A=0,O=Array(k);A<k;A++)O[A]=V[A];return O}function T(V,k){for(var A=0;A<k.length;A++){var O=k[A];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(V,D(O.key),O)}}function L(V,k,A){return(k=D(k))in V?Object.defineProperty(V,k,{value:A,enumerable:!0,configurable:!0,writable:!0}):V[k]=A,V}function D(V){var k=(function(A){if(M(A)!="object"||!A)return A;var O=A[Symbol.toPrimitive];if(O!==void 0){var U=O.call(A,"string");if(M(U)!="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(A)})(V);return M(k)=="symbol"?k:k+""}let H=(function(){function V(O,U){var C=this;if((function($,te){if(!($ instanceof te))throw new TypeError("Cannot call a class as a function")})(this,V),L(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),L(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),L(this,"setupWrapperElement",function(){C.state.elements.container&&(C.state.elements.wrapper.className=C.options.wrapperClassName,C.state.elements.cursor.className=C.options.cursorClassName,C.state.elements.cursor.innerHTML=C.options.cursor,C.state.elements.container.innerHTML="",C.state.elements.container.appendChild(C.state.elements.wrapper),C.state.elements.container.appendChild(C.state.elements.cursor))}),L(this,"start",function(){return C.state.eventLoopPaused=!1,C.runEventLoop(),C}),L(this,"pause",function(){return C.state.eventLoopPaused=!0,C}),L(this,"stop",function(){return C.state.eventLoop&&((0,r.cancel)(C.state.eventLoop),C.state.eventLoop=null),C}),L(this,"pauseFor",function($){return C.addEventToQueue(f,{ms:$}),C}),L(this,"typeOutAllStrings",function(){return typeof C.options.strings=="string"?(C.typeString(C.options.strings).pauseFor(C.options.pauseFor),C):(C.options.strings.forEach(function($){C.typeString($).pauseFor(C.options.pauseFor).deleteAll(C.options.deleteSpeed)}),C)}),L(this,"typeString",function($){var te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(o($))return C.typeOutHTMLString($,te);if($){var me=(C.options||{}).stringSplitter,Ie=typeof me=="function"?me($):$.split("");C.typeCharacters(Ie,te)}return C}),L(this,"pasteString",function($){var te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return o($)?C.typeOutHTMLString($,te,!0):($&&C.addEventToQueue(E,{character:$,node:te}),C)}),L(this,"typeOutHTMLString",function($){var te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,me=arguments.length>2?arguments[2]:void 0,Ie=(function(fe){var ne=document.createElement("div");return ne.innerHTML=fe,ne.childNodes})($);if(Ie.length>0)for(var Ce=0;Ce<Ie.length;Ce++){var Te=Ie[Ce],Y=Te.innerHTML;Te&&Te.nodeType!==3?(Te.innerHTML="",C.addEventToQueue(g,{node:Te,parentNode:te}),me?C.pasteString(Y,Te):C.typeString(Y,Te)):Te.textContent&&(me?C.pasteString(Te.textContent,te):C.typeString(Te.textContent,te))}return C}),L(this,"deleteAll",function(){var $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return C.addEventToQueue(u,{speed:$}),C}),L(this,"changeDeleteSpeed",function($){if(!$)throw new Error("Must provide new delete speed");return C.addEventToQueue(x,{speed:$}),C}),L(this,"changeDelay",function($){if(!$)throw new Error("Must provide new delay");return C.addEventToQueue(m,{delay:$}),C}),L(this,"changeCursor",function($){if(!$)throw new Error("Must provide new cursor");return C.addEventToQueue(p,{cursor:$}),C}),L(this,"deleteChars",function($){if(!$)throw new Error("Must provide amount of characters to delete");for(var te=0;te<$;te++)C.addEventToQueue(l);return C}),L(this,"callFunction",function($,te){if(!$||typeof $!="function")throw new Error("Callback must be a function");return C.addEventToQueue(h,{cb:$,thisArg:te}),C}),L(this,"typeCharacters",function($){var te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$||!Array.isArray($))throw new Error("Characters must be an array");return $.forEach(function(me){C.addEventToQueue(c,{character:me,node:te})}),C}),L(this,"removeCharacters",function($){if(!$||!Array.isArray($))throw new Error("Characters must be an array");return $.forEach(function(){C.addEventToQueue(l)}),C}),L(this,"addEventToQueue",function($,te){var me=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return C.addEventToStateProperty($,te,me,"eventQueue")}),L(this,"addReverseCalledEvent",function($,te){var me=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return C.options.loop?C.addEventToStateProperty($,te,me,"reverseCalledEvents"):C}),L(this,"addEventToStateProperty",function($,te){var me=arguments.length>2&&arguments[2]!==void 0&&arguments[2],Ie=arguments.length>3?arguments[3]:void 0,Ce={eventName:$,eventArgs:te||{}};return C.state[Ie]=me?[Ce].concat(I(C.state[Ie])):[].concat(I(C.state[Ie]),[Ce]),C}),L(this,"runEventLoop",function(){C.state.lastFrameTime||(C.state.lastFrameTime=Date.now());var $=Date.now(),te=$-C.state.lastFrameTime;if(!C.state.eventQueue.length){if(!C.options.loop)return;C.state.eventQueue=I(C.state.calledEvents),C.state.calledEvents=[],C.options=w({},C.state.initialOptions)}if(C.state.eventLoop=s()(C.runEventLoop),!C.state.eventLoopPaused){if(C.state.pauseUntil){if($<C.state.pauseUntil)return;C.state.pauseUntil=null}var me,Ie=I(C.state.eventQueue),Ce=Ie.shift();if(!(te<=(me=Ce.eventName===d||Ce.eventName===l?C.options.deleteSpeed==="natural"?a(40,80):C.options.deleteSpeed:C.options.delay==="natural"?a(120,160):C.options.delay))){var Te=Ce.eventName,Y=Ce.eventArgs;switch(C.logInDevMode({currentEvent:Ce,state:C.state,delay:me}),Te){case E:case c:var fe=Y.character,ne=Y.node,De=document.createTextNode(fe),Pe=De;C.options.onCreateTextNode&&typeof C.options.onCreateTextNode=="function"&&(Pe=C.options.onCreateTextNode(fe,De)),Pe&&(ne?ne.appendChild(Pe):C.state.elements.wrapper.appendChild(Pe)),C.state.visibleNodes=[].concat(I(C.state.visibleNodes),[{type:"TEXT_NODE",character:fe,node:Pe}]);break;case l:Ie.unshift({eventName:d,eventArgs:{removingCharacterNode:!0}});break;case f:var Re=Ce.eventArgs.ms;C.state.pauseUntil=Date.now()+parseInt(Re);break;case h:var Tt=Ce.eventArgs,Ze=Tt.cb,dt=Tt.thisArg;Ze.call(dt,{elements:C.state.elements});break;case g:var gt=Ce.eventArgs,Ge=gt.node,It=gt.parentNode;It?It.appendChild(Ge):C.state.elements.wrapper.appendChild(Ge),C.state.visibleNodes=[].concat(I(C.state.visibleNodes),[{type:b,node:Ge,parentNode:It||C.state.elements.wrapper}]);break;case u:var Dt=C.state.visibleNodes,Jt=Y.speed,P=[];Jt&&P.push({eventName:x,eventArgs:{speed:Jt,temp:!0}});for(var Rt=0,Je=Dt.length;Rt<Je;Rt++)P.push({eventName:d,eventArgs:{removingCharacterNode:!1}});Jt&&P.push({eventName:x,eventArgs:{speed:C.options.deleteSpeed,temp:!0}}),Ie.unshift.apply(Ie,P);break;case d:var vt=Ce.eventArgs.removingCharacterNode;if(C.state.visibleNodes.length){var ue=C.state.visibleNodes.pop(),At=ue.type,S=ue.node,v=ue.character;C.options.onRemoveNode&&typeof C.options.onRemoveNode=="function"&&C.options.onRemoveNode({node:S,character:v}),S&&S.parentNode.removeChild(S),At===b&&vt&&Ie.unshift({eventName:d,eventArgs:{}})}break;case x:C.options.deleteSpeed=Ce.eventArgs.speed;break;case m:C.options.delay=Ce.eventArgs.delay;break;case p:C.options.cursor=Ce.eventArgs.cursor,C.state.elements.cursor.innerHTML=Ce.eventArgs.cursor}C.options.loop&&(Ce.eventName===d||Ce.eventArgs&&Ce.eventArgs.temp||(C.state.calledEvents=[].concat(I(C.state.calledEvents),[Ce]))),C.state.eventQueue=Ie,C.state.lastFrameTime=$}}}),O)if(typeof O=="string"){var ee=document.querySelector(O);if(!ee)throw new Error("Could not find container element");this.state.elements.container=ee}else this.state.elements.container=O;U&&(this.options=w(w({},this.options),U)),this.state.initialOptions=w({},this.options),this.init()}var k,A;return k=V,(A=[{key:"init",value:function(){var O,U;this.setupWrapperElement(),this.addEventToQueue(p,{cursor:this.options.cursor},!0),this.addEventToQueue(u,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(O=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(U=document.createElement("style")).appendChild(document.createTextNode(O)),document.head.appendChild(U),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(O){this.options.devMode&&console.log(O)}}])&&T(k.prototype,A),Object.defineProperty(k,"prototype",{writable:!1}),V})()})(),i.default})())});var sn=null,jc=!1,th=1,Eb=null,Tn=Symbol("SIGNAL");function Ke(n){let e=sn;return sn=n,e}function $c(){return sn}var zo={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Go(n){if(jc)throw new Error("");if(sn===null)return;sn.consumerOnSignalRead(n);let e=sn.producersTail;if(e!==void 0&&e.producer===n)return;let t,i=sn.recomputing;if(i&&(t=e!==void 0?e.nextProducer:sn.producers,t!==void 0&&t.producer===n)){sn.producersTail=t,t.lastReadVersion=n.version;return}let r=n.consumersTail;if(r!==void 0&&r.consumer===sn&&(!i||Mb(r,sn)))return;let s=Is(sn),o={producer:n,consumer:sn,nextProducer:t,prevConsumer:r,lastReadVersion:n.version,nextConsumer:void 0};sn.producersTail=o,e!==void 0?e.nextProducer=o:sn.producers=o,s&&Pv(n,o)}function Iv(){th++}function nh(n){if(!(Is(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===th)){if(!n.producerMustRecompute(n)&&!Xc(n)){Wc(n);return}n.producerRecomputeValue(n),Wc(n)}}function ih(n){if(n.consumers===void 0)return;let e=jc;jc=!0;try{for(let t=n.consumers;t!==void 0;t=t.nextConsumer){let i=t.consumer;i.dirty||bb(i)}}finally{jc=e}}function rh(){return sn?.consumerAllowSignalWrites!==!1}function bb(n){n.dirty=!0,ih(n),n.consumerMarkedDirty?.(n)}function Wc(n){n.dirty=!1,n.lastCleanEpoch=th}function jo(n){return n&&Rv(n),Ke(n)}function Rv(n){n.producersTail=void 0,n.recomputing=!0}function qc(n,e){Ke(e),n&&Nv(n)}function Nv(n){n.recomputing=!1;let e=n.producersTail,t=e!==void 0?e.nextProducer:n.producers;if(t!==void 0){if(Is(n))do t=sh(t);while(t!==void 0);e!==void 0?e.nextProducer=void 0:n.producers=void 0}}function Xc(n){for(let e=n.producers;e!==void 0;e=e.nextProducer){let t=e.producer,i=e.lastReadVersion;if(i!==t.version||(nh(t),i!==t.version))return!0}return!1}function Wo(n){if(Is(n)){let e=n.producers;for(;e!==void 0;)e=sh(e)}n.producers=void 0,n.producersTail=void 0,n.consumers=void 0,n.consumersTail=void 0}function Pv(n,e){let t=n.consumersTail,i=Is(n);if(t!==void 0?(e.nextConsumer=t.nextConsumer,t.nextConsumer=e):(e.nextConsumer=void 0,n.consumers=e),e.prevConsumer=t,n.consumersTail=e,!i)for(let r=n.producers;r!==void 0;r=r.nextProducer)Pv(r.producer,r)}function sh(n){let e=n.producer,t=n.nextProducer,i=n.nextConsumer,r=n.prevConsumer;if(n.nextConsumer=void 0,n.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:e.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(e.consumers=i,!Is(e)){let s=e.producers;for(;s!==void 0;)s=sh(s)}return t}function Is(n){return n.consumerIsAlwaysLive||n.consumers!==void 0}function oh(n){Eb?.(n)}function Mb(n,e){let t=e.producersTail;if(t!==void 0){let i=e.producers;do{if(i===n)return!0;if(i===t)break;i=i.nextProducer}while(i!==void 0)}return!1}function ah(n,e){return Object.is(n,e)}function wb(){throw new Error}var Lv=wb;function Ov(n){Lv(n)}function ch(n){Lv=n}var Tb=null;function lh(n,e){let t=Object.create(Yc);t.value=n,e!==void 0&&(t.equal=e);let i=()=>Fv(t);return i[Tn]=t,oh(t),[i,o=>Rs(t,o),o=>uh(t,o)]}function Fv(n){return Go(n),n.value}function Rs(n,e){rh()||Ov(n),n.equal(n.value,e)||(n.value=e,Cb(n))}function uh(n,e){rh()||Ov(n),Rs(n,e(n.value))}var Yc=xt(de({},zo),{equal:ah,value:void 0,kind:"signal"});function Cb(n){n.version++,Iv(),ih(n),Tb?.(n)}function Ve(n){return typeof n=="function"}function Ns(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Zc=Ns(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function $o(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Kt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Ve(i))try{i()}catch(s){e=s instanceof Zc?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{kv(s)}catch(o){e=e??[],o instanceof Zc?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Zc(e)}}add(e){var t;if(e&&e!==this)if(this.closed)kv(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&$o(t,e)}remove(e){let{_finalizers:t}=this;t&&$o(t,e),e instanceof n&&e._removeParent(this)}};Kt.EMPTY=(()=>{let n=new Kt;return n.closed=!0,n})();var dh=Kt.EMPTY;function Jc(n){return n instanceof Kt||n&&"closed"in n&&Ve(n.remove)&&Ve(n.add)&&Ve(n.unsubscribe)}function kv(n){Ve(n)?n():n.unsubscribe()}var Qn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Ps={setTimeout(n,e,...t){let{delegate:i}=Ps;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=Ps;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function Kc(n){Ps.setTimeout(()=>{let{onUnhandledError:e}=Qn;if(e)e(n);else throw n})}function qo(){}var Uv=fh("C",void 0,void 0);function Bv(n){return fh("E",void 0,n)}function Vv(n){return fh("N",n,void 0)}function fh(n,e,t){return{kind:n,value:e,error:t}}var Wr=null;function Ls(n){if(Qn.useDeprecatedSynchronousErrorHandling){let e=!Wr;if(e&&(Wr={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=Wr;if(Wr=null,t)throw i}}else n()}function Hv(n){Qn.useDeprecatedSynchronousErrorHandling&&Wr&&(Wr.errorThrown=!0,Wr.error=n)}var $r=class extends Kt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Jc(e)&&e.add(this)):this.destination=Ib}static create(e,t,i){return new Os(e,t,i)}next(e){this.isStopped?ph(Vv(e),this):this._next(e)}error(e){this.isStopped?ph(Bv(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?ph(Uv,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Db=Function.prototype.bind;function hh(n,e){return Db.call(n,e)}var mh=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){Qc(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){Qc(i)}else Qc(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Qc(t)}}},Os=class extends $r{constructor(e,t,i){super();let r;if(Ve(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Qn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&hh(e.next,s),error:e.error&&hh(e.error,s),complete:e.complete&&hh(e.complete,s)}):r=e}this.destination=new mh(r)}};function Qc(n){Qn.useDeprecatedSynchronousErrorHandling?Hv(n):Kc(n)}function Ab(n){throw n}function ph(n,e){let{onStoppedNotification:t}=Qn;t&&Ps.setTimeout(()=>t(n,e))}var Ib={closed:!0,next:qo,error:Ab,complete:qo};var Fs=typeof Symbol=="function"&&Symbol.observable||"@@observable";function ei(n){return n}function gh(...n){return vh(n)}function vh(n){return n.length===0?ei:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var ot=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=Nb(t)?t:new Os(t,i,r);return Ls(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=zv(i),new i((r,s)=>{let o=new Os({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[Fs](){return this}pipe(...t){return vh(t)(this)}toPromise(t){return t=zv(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function zv(n){var e;return(e=n??Qn.Promise)!==null&&e!==void 0?e:Promise}function Rb(n){return n&&Ve(n.next)&&Ve(n.error)&&Ve(n.complete)}function Nb(n){return n&&n instanceof $r||Rb(n)&&Jc(n)}function Pb(n){return Ve(n?.lift)}function ft(n){return e=>{if(Pb(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function St(n,e,t,i,r){return new yh(n,e,t,i,r)}var yh=class extends $r{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};var Gv=Ns(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var on=(()=>{class n extends ot{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new el(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new Gv}next(t){Ls(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){Ls(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){Ls(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?dh:(this.currentObservers=null,s.push(t),new Kt(()=>{this.currentObservers=null,$o(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new ot;return t.source=this,t}}return n.create=(e,t)=>new el(e,t),n})(),el=class extends on{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:dh}};var Qt=class extends on{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var en=new ot(n=>n.complete());function jv(n){return n&&Ve(n.schedule)}function Wv(n){return n[n.length-1]}function $v(n){return Ve(Wv(n))?n.pop():void 0}function lr(n){return jv(Wv(n))?n.pop():void 0}function Xv(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function qv(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function qr(n){return this instanceof qr?(this.v=n,this):new qr(n)}function Yv(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(h){return function(g){return Promise.resolve(g).then(h,d)}}function a(h,g){i[h]&&(r[h]=function(x){return new Promise(function(m,p){s.push([h,x,m,p])>1||c(h,x)})},g&&(r[h]=g(r[h])))}function c(h,g){try{l(i[h](g))}catch(x){f(s[0][3],x)}}function l(h){h.value instanceof qr?Promise.resolve(h.value.v).then(u,d):f(s[0][2],h)}function u(h){c("next",h)}function d(h){c("throw",h)}function f(h,g){h(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function Zv(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof qv=="function"?qv(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var tl=n=>n&&typeof n.length=="number"&&typeof n!="function";function nl(n){return Ve(n?.then)}function il(n){return Ve(n[Fs])}function rl(n){return Symbol.asyncIterator&&Ve(n?.[Symbol.asyncIterator])}function sl(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Lb(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var ol=Lb();function al(n){return Ve(n?.[ol])}function cl(n){return Yv(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield qr(t.read());if(r)return yield qr(void 0);yield yield qr(i)}}finally{t.releaseLock()}})}function ll(n){return Ve(n?.getReader)}function qt(n){if(n instanceof ot)return n;if(n!=null){if(il(n))return Ob(n);if(tl(n))return Fb(n);if(nl(n))return kb(n);if(rl(n))return Jv(n);if(al(n))return Ub(n);if(ll(n))return Bb(n)}throw sl(n)}function Ob(n){return new ot(e=>{let t=n[Fs]();if(Ve(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Fb(n){return new ot(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function kb(n){return new ot(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,Kc)})}function Ub(n){return new ot(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function Jv(n){return new ot(e=>{Vb(n,e).catch(t=>e.error(t))})}function Bb(n){return Jv(cl(n))}function Vb(n,e){var t,i,r,s;return Xv(this,void 0,void 0,function*(){try{for(t=Zv(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function vn(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function ul(n,e=0){return ft((t,i)=>{t.subscribe(St(i,r=>vn(i,n,()=>i.next(r),e),()=>vn(i,n,()=>i.complete(),e),r=>vn(i,n,()=>i.error(r),e)))})}function dl(n,e=0){return ft((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function Kv(n,e){return qt(n).pipe(dl(e),ul(e))}function Qv(n,e){return qt(n).pipe(dl(e),ul(e))}function ey(n,e){return new ot(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function ty(n,e){return new ot(t=>{let i;return vn(t,e,()=>{i=n[ol](),vn(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Ve(i?.return)&&i.return()})}function fl(n,e){if(!n)throw new Error("Iterable cannot be null");return new ot(t=>{vn(t,e,()=>{let i=n[Symbol.asyncIterator]();vn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function ny(n,e){return fl(cl(n),e)}function iy(n,e){if(n!=null){if(il(n))return Kv(n,e);if(tl(n))return ey(n,e);if(nl(n))return Qv(n,e);if(rl(n))return fl(n,e);if(al(n))return ty(n,e);if(ll(n))return ny(n,e)}throw sl(n)}function Vt(n,e){return e?iy(n,e):qt(n)}function et(...n){let e=lr(n);return Vt(n,e)}function _h(n,e){let t=Ve(n)?n:()=>n,i=r=>r.error(t());return new ot(e?r=>e.schedule(i,0,r):i)}function hl(n){return!!n&&(n instanceof ot||Ve(n.lift)&&Ve(n.subscribe))}var Xr=Ns(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function Pt(n,e){return ft((t,i)=>{let r=0;t.subscribe(St(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:Hb}=Array;function zb(n,e){return Hb(e)?n(...e):n(e)}function ry(n){return Pt(e=>zb(n,e))}var{isArray:Gb}=Array,{getPrototypeOf:jb,prototype:Wb,keys:$b}=Object;function sy(n){if(n.length===1){let e=n[0];if(Gb(e))return{args:e,keys:null};if(qb(e)){let t=$b(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function qb(n){return n&&typeof n=="object"&&jb(n)===Wb}function oy(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function xh(...n){let e=lr(n),t=$v(n),{args:i,keys:r}=sy(n);if(i.length===0)return Vt([],e);let s=new ot(Xb(i,e,r?o=>oy(r,o):ei));return t?s.pipe(ry(t)):s}function Xb(n,e,t=ei){return i=>{ay(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)ay(e,()=>{let l=Vt(n[c],e),u=!1;l.subscribe(St(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function ay(n,e,t){n?vn(t,n,e):e()}function cy(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},h=x=>l<i?g(x):c.push(x),g=x=>{s&&e.next(x),l++;let m=!1;qt(t(x,u++)).subscribe(St(e,p=>{r?.(p),s?h(p):e.next(p)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let p=c.shift();o?vn(e,o,()=>g(p)):g(p)}f()}catch(p){e.error(p)}}))};return n.subscribe(St(e,h,()=>{d=!0,f()})),()=>{a?.()}}function hn(n,e,t=1/0){return Ve(e)?hn((i,r)=>Pt((s,o)=>e(i,s,r,o))(qt(n(i,r))),t):(typeof e=="number"&&(t=e),ft((i,r)=>cy(i,r,n,t)))}function ly(n=1/0){return hn(ei,n)}function uy(){return ly(1)}function ks(...n){return uy()(Vt(n,lr(n)))}function Xo(n){return new ot(e=>{qt(n()).subscribe(e)})}function Vi(n,e){return ft((t,i)=>{let r=0;t.subscribe(St(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Yo(n){return ft((e,t)=>{let i=null,r=!1,s;i=e.subscribe(St(t,void 0,void 0,o=>{s=qt(n(o,Yo(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function pl(n,e){return Ve(e)?hn(n,e,1):hn(n,1)}function dy(n){return ft((e,t)=>{let i=!1;e.subscribe(St(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function Hi(n){return n<=0?()=>en:ft((e,t)=>{let i=0;e.subscribe(St(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function fy(n=Yb){return ft((e,t)=>{let i=!1;e.subscribe(St(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function Yb(){return new Xr}function Sh(n){return ft((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function zi(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Vi((r,s)=>n(r,s,i)):ei,Hi(1),t?dy(e):fy(()=>new Xr))}function ml(n){return n<=0?()=>en:ft((e,t)=>{let i=[];e.subscribe(St(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function Eh(...n){let e=lr(n);return ft((t,i)=>{(e?ks(n,t,e):ks(n,t)).subscribe(i)})}function ti(n,e){return ft((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(St(i,c=>{r?.unsubscribe();let l=0,u=s++;qt(n(c,u)).subscribe(r=St(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function Zo(n){return ft((e,t)=>{qt(n).subscribe(St(t,()=>t.complete(),qo)),!t.closed&&e.subscribe(t)})}function zn(n,e,t){let i=Ve(n)||e||t?{next:n,error:e,complete:t}:n;return i?ft((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(St(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):ei}var bh;function gl(){return bh}function yi(n){let e=bh;return bh=n,e}var hy=Symbol("NotFound");function Us(n){return n===hy||n?.name==="\u0275NotFound"}function py(n){let e=Ke(null);try{return n()}finally{Ke(e)}}var Ae=class extends Error{code;constructor(e,t){super(na(e,t)),this.code=e}};function Qb(n){return`NG0${Math.abs(n)}`}function na(n,e){return`${Qb(n)}${e?": "+e:""}`}function ht(n){for(let e in n)if(n[e]===ht)return e;throw Error("")}function El(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(El).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function Uh(n,e){return n?e?`${n} ${e}`:n:e||""}var eM=ht({__forward_ref__:ht});function bl(n){return n.__forward_ref__=bl,n}function yn(n){return Bh(n)?n():n}function Bh(n){return typeof n=="function"&&n.hasOwnProperty(eM)&&n.__forward_ref__===bl}function Fe(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Hs(n){return{providers:n.providers||[],imports:n.imports||[]}}function ia(n){return tM(n,Ml)}function Vh(n){return ia(n)!==null}function tM(n,e){return n.hasOwnProperty(e)&&n[e]||null}function nM(n){let e=n?.[Ml]??null;return e||null}function wh(n){return n&&n.hasOwnProperty(yl)?n[yl]:null}var Ml=ht({\u0275prov:ht}),yl=ht({\u0275inj:ht}),Oe=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Fe({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Hh(n){return n&&!!n.\u0275providers}var zh=ht({\u0275cmp:ht}),Gh=ht({\u0275dir:ht}),jh=ht({\u0275pipe:ht}),Wh=ht({\u0275mod:ht}),Ko=ht({\u0275fac:ht}),Qr=ht({__NG_ELEMENT_ID__:ht}),my=ht({__NG_ENV_ID__:ht});function $h(n){return wl(n,"@NgModule"),n[Wh]||null}function dr(n){return wl(n,"@Component"),n[zh]||null}function qh(n){return wl(n,"@Directive"),n[Gh]||null}function _y(n){return wl(n,"@Pipe"),n[jh]||null}function wl(n,e){if(n==null)throw new Ae(-919,!1)}var xy=ht({ngErrorCode:ht}),iM=ht({ngErrorMessage:ht}),rM=ht({ngTokenPath:ht});function Xh(n,e){return Sy("",-200,e)}function Tl(n,e){throw new Ae(-201,!1)}function Sy(n,e,t){let i=new Ae(e,n);return i[xy]=e,i[iM]=n,t&&(i[rM]=t),i}function sM(n){return n[xy]}var Th;function Ey(){return Th}function Cn(n){let e=Th;return Th=n,e}function Yh(n,e,t){let i=ia(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&8)return null;if(e!==void 0)return e;Tl(n,"")}var oM={},Yr=oM,aM="__NG_DI_FLAG__",Ch=class{injector;constructor(e){this.injector=e}retrieve(e,t){let i=Zr(t)||0;try{return this.injector.get(e,i&8?null:Yr,i)}catch(r){if(Us(r))return r;throw r}}};function cM(n,e=0){let t=gl();if(t===void 0)throw new Ae(-203,!1);if(t===null)return Yh(n,void 0,e);{let i=lM(e),r=t.retrieve(n,i);if(Us(r)){if(i.optional)return null;throw r}return r}}function We(n,e=0){return(Ey()||cM)(yn(n),e)}function le(n,e){return We(n,Zr(e))}function Zr(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function lM(n){return{optional:!!(n&8),host:!!(n&1),self:!!(n&2),skipSelf:!!(n&4)}}function Dh(n){let e=[];for(let t=0;t<n.length;t++){let i=yn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Ae(900,!1);let r,s=0;for(let o=0;o<i.length;o++){let a=i[o],c=uM(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(We(r,s))}else e.push(We(i))}return e}function uM(n){return n[aM]}function Jr(n,e){let t=n.hasOwnProperty(Ko);return t?n[Ko]:null}function Cl(n,e){n.forEach(t=>Array.isArray(t)?Cl(t,e):e(t))}function Zh(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function ra(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}var es={},ni=[],ts=new Oe(""),Jh=new Oe("",-1),Kh=new Oe(""),Qo=class{get(e,t=Yr){if(t===Yr){let r=Sy("",-201);throw r.name="\u0275NotFound",r}return t}};function zs(n){return{\u0275providers:n}}function by(n){return zs([{provide:ts,multi:!0,useValue:n}])}function My(...n){return{\u0275providers:Qh(!0,n),\u0275fromNgModule:!0}}function Qh(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return Cl(e,o=>{let a=o;_l(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&wy(r,s),t}function wy(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];ep(r,s=>{e(s,i)})}}function _l(n,e,t,i){if(n=yn(n),!n)return!1;let r=null,s=wh(n),o=!s&&dr(n);if(!s&&!o){let c=n.ngModule;if(s=wh(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)_l(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;Cl(s.imports,u=>{_l(u,e,t,i)&&(l||=[],l.push(u))}),l!==void 0&&wy(l,e)}if(!a){let l=Jr(r)||(()=>new r);e({provide:r,useFactory:l,deps:ni},r),e({provide:Kh,useValue:r,multi:!0},r),e({provide:ts,useValue:()=>We(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;ep(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function ep(n,e){for(let t of n)Hh(t)&&(t=t.\u0275providers),Array.isArray(t)?ep(t,e):e(t)}var dM=ht({provide:String,useValue:ht});function Ty(n){return n!==null&&typeof n=="object"&&dM in n}function fM(n){return!!(n&&n.useExisting)}function hM(n){return!!(n&&n.useFactory)}function xl(n){return typeof n=="function"}var sa=new Oe(""),vl={},gy={},Mh;function oa(){return Mh===void 0&&(Mh=new Qo),Mh}var Gt=class{},Kr=class extends Gt{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,Ih(e,o=>this.processProvider(o)),this.records.set(Jh,Bs(void 0,this)),r.has("environment")&&this.records.set(Gt,Bs(void 0,this));let s=this.records.get(sa);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(Kh,ni,{self:!0}))}retrieve(e,t){let i=Zr(t)||0;try{return this.get(e,Yr,i)}catch(r){if(Us(r))return r;throw r}}destroy(){Jo(this),this._destroyed=!0;let e=Ke(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),Ke(e)}}onDestroy(e){return Jo(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){Jo(this);let t=yi(this),i=Cn(void 0),r;try{return e()}finally{yi(t),Cn(i)}}get(e,t=Yr,i){if(Jo(this),e.hasOwnProperty(my))return e[my](this);let r=Zr(i),s,o=yi(this),a=Cn(void 0);try{if(!(r&4)){let l=this.records.get(e);if(l===void 0){let u=yM(e)&&ia(e);u&&this.injectableDefInScope(u)?l=Bs(Ah(e),vl):l=null,this.records.set(e,l)}if(l!=null)return this.hydrate(e,l,r)}let c=r&2?oa():this.parent;return t=r&8&&t===Yr?null:t,c.get(e,t)}catch(c){let l=sM(c);throw l===-200||l===-201?new Ae(l,null):c}finally{Cn(a),yi(o)}}resolveInjectorInitializers(){let e=Ke(null),t=yi(this),i=Cn(void 0),r;try{let s=this.get(ts,ni,{self:!0});for(let o of s)o()}finally{yi(t),Cn(i),Ke(e)}}toString(){return"R3Injector[...]"}processProvider(e){e=yn(e);let t=xl(e)?e:yn(e&&e.provide),i=mM(e);if(!xl(e)&&e.multi===!0){let r=this.records.get(t);r||(r=Bs(void 0,vl,!0),r.factory=()=>Dh(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t,i){let r=Ke(null);try{if(t.value===gy)throw Xh("");return t.value===vl&&(t.value=gy,t.value=t.factory(void 0,i)),typeof t.value=="object"&&t.value&&vM(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{Ke(r)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=yn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function Ah(n){let e=ia(n),t=e!==null?e.factory:Jr(n);if(t!==null)return t;if(n instanceof Oe)throw new Ae(-204,!1);if(n instanceof Function)return pM(n);throw new Ae(-204,!1)}function pM(n){if(n.length>0)throw new Ae(-204,!1);let t=nM(n);return t!==null?()=>t.factory(n):()=>new n}function mM(n){if(Ty(n))return Bs(void 0,n.useValue);{let e=Cy(n);return Bs(e,vl)}}function Cy(n,e,t){let i;if(xl(n)){let r=yn(n);return Jr(r)||Ah(r)}else if(Ty(n))i=()=>yn(n.useValue);else if(hM(n))i=()=>n.useFactory(...Dh(n.deps||[]));else if(fM(n))i=(r,s)=>We(yn(n.useExisting),s!==void 0&&s&8?8:void 0);else{let r=yn(n&&(n.useClass||n.provide));if(gM(n))i=()=>new r(...Dh(n.deps));else return Jr(r)||Ah(r)}return i}function Jo(n){if(n.destroyed)throw new Ae(-205,!1)}function Bs(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function gM(n){return!!n.deps}function vM(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function yM(n){return typeof n=="function"||typeof n=="object"&&n.ngMetadataName==="InjectionToken"}function Ih(n,e){for(let t of n)Array.isArray(t)?Ih(t,e):t&&Hh(t)?Ih(t.\u0275providers,e):e(t)}function an(n,e){let t;n instanceof Kr?(Jo(n),t=n):t=new Ch(n);let i,r=yi(t),s=Cn(void 0);try{return e()}finally{yi(r),Cn(s)}}function Dy(){return Ey()!==void 0||gl()!=null}var ii=0,Ye=1,$e=2,tn=3,Gn=4,jn=5,aa=6,Gs=7,_n=8,fr=9,xi=10,xn=11,js=12,tp=13,Ws=14,Wn=15,$s=16,ns=17,ca=18,hr=19,np=20,Gi=21,Dl=22,la=23,An=24,Al=25,qs=26,$n=27,Ay=1;var pr=7,ua=8,da=9,Sn=10;function mr(n){return Array.isArray(n)&&typeof n[Ay]=="object"}function ri(n){return Array.isArray(n)&&n[Ay]===!0}function ip(n){return(n.flags&4)!==0}function gr(n){return n.componentOffset>-1}function Il(n){return(n.flags&1)===1}function is(n){return!!n.template}function Xs(n){return(n[$e]&512)!==0}function rs(n){return(n[$e]&256)===256}var Iy="svg",Ry="math";function si(n){for(;Array.isArray(n);)n=n[ii];return n}function Wi(n,e){return si(e[n.index])}function Ny(n,e){return n.data[e]}function Si(n,e){let t=e[n];return mr(t)?t:t[ii]}function Rl(n){return(n[$e]&128)===128}function Py(n){return ri(n[tn])}function fa(n,e){return e==null?null:n[e]}function rp(n){n[ns]=0}function sp(n){n[$e]&1024||(n[$e]|=1024,Rl(n)&&pa(n))}function ha(n){return!!(n[$e]&9216||n[An]?.dirty)}function Nl(n){n[xi].changeDetectionScheduler?.notify(8),n[$e]&64&&(n[$e]|=1024),ha(n)&&pa(n)}function pa(n){n[xi].changeDetectionScheduler?.notify(0);let e=ur(n);for(;e!==null&&!(e[$e]&8192||(e[$e]|=8192,!Rl(e)));)e=ur(e)}function op(n,e){if(rs(n))throw new Ae(911,!1);n[Gi]===null&&(n[Gi]=[]),n[Gi].push(e)}function Ly(n,e){if(n[Gi]===null)return;let t=n[Gi].indexOf(e);t!==-1&&n[Gi].splice(t,1)}function ur(n){let e=n[tn];return ri(e)?e[tn]:e}function Oy(n){return n[Gs]??=[]}function Fy(n){return n.cleanup??=[]}var Et={lFrame:Xy(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Rh=!1;function ky(){return Et.lFrame.elementDepthCount}function Uy(){Et.lFrame.elementDepthCount++}function ap(){Et.lFrame.elementDepthCount--}function By(){return Et.bindingsEnabled}function Vy(){return Et.skipHydrationRootTNode!==null}function cp(n){return Et.skipHydrationRootTNode===n}function lp(){Et.skipHydrationRootTNode=null}function En(){return Et.lFrame.lView}function Pl(){return Et.lFrame.tView}function Ei(){let n=up();for(;n!==null&&n.type===64;)n=n.parent;return n}function up(){return Et.lFrame.currentTNode}function Hy(){let n=Et.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function ma(n,e){let t=Et.lFrame;t.currentTNode=n,t.isParent=e}function dp(){return Et.lFrame.isParent}function zy(){Et.lFrame.isParent=!1}function fp(){return Rh}function hp(n){let e=Rh;return Rh=n,e}function Gy(n){return Et.lFrame.bindingIndex=n}function jy(){return Et.lFrame.inI18n}function Wy(n,e){let t=Et.lFrame;t.bindingIndex=t.bindingRootIndex=n,Ll(e)}function $y(){return Et.lFrame.currentDirectiveIndex}function Ll(n){Et.lFrame.currentDirectiveIndex=n}function pp(n){Et.lFrame.currentQueryIndex=n}function _M(n){let e=n[Ye];return e.type===2?e.declTNode:e.type===1?n[jn]:null}function mp(n,e,t){if(t&4){let r=e,s=n;for(;r=r.parent,r===null&&!(t&1);)if(r=_M(s),r===null||(s=s[Ws],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=Et.lFrame=qy();return i.currentTNode=e,i.lView=n,!0}function Ol(n){let e=qy(),t=n[Ye];Et.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function qy(){let n=Et.lFrame,e=n===null?null:n.child;return e===null?Xy(n):e}function Xy(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function Yy(){let n=Et.lFrame;return Et.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var gp=Yy;function Fl(){let n=Yy();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function Zy(){return Et.lFrame.selectedIndex}function vr(n){Et.lFrame.selectedIndex=n}function vp(){return Et.lFrame.currentNamespace}var Jy=!0;function yp(){return Jy}function _p(n){Jy=n}function Nh(n,e=null,t=null,i){let r=xp(n,e,t,i);return r.resolveInjectorInitializers(),r}function xp(n,e=null,t=null,i,r=new Set){let s=[t||ni,My(n)],o;return new Kr(s,e||oa(),o||null,r)}var _i=class n{static THROW_IF_NOT_FOUND=Yr;static NULL=new Qo;static create(e,t){if(Array.isArray(e))return Nh({name:""},t,e,"");{let i=e.name??"";return Nh({name:i},e.parent,e.providers,i)}}static \u0275prov=Fe({token:n,providedIn:"any",factory:()=>We(Jh)});static __NG_ELEMENT_ID__=-1},jt=new Oe(""),yr=(()=>{class n{static __NG_ELEMENT_ID__=xM;static __NG_ENV_ID__=t=>t}return n})(),Ph=class extends yr{_lView;constructor(e){super(),this._lView=e}get destroyed(){return rs(this._lView)}onDestroy(e){let t=this._lView;return op(t,e),()=>Ly(t,e)}};function xM(){return new Ph(En())}var Ky=!1,Qy=new Oe(""),_r=(()=>{class n{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Qt(!1);debugTaskTracker=le(Qy,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new ot(t=>{t.next(!1),t.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),this.debugTaskTracker?.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.debugTaskTracker?.remove(t),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=Fe({token:n,providedIn:"root",factory:()=>new n})}return n})(),Lh=class extends on{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,Dy()&&(this.destroyRef=le(yr,{optional:!0})??void 0,this.pendingTasks=le(_r,{optional:!0})??void 0)}emit(e){let t=Ke(null);try{super.next(e)}finally{Ke(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Kt&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{e(t)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},pn=Lh;function Sl(...n){}function Sp(n){let e,t;function i(){n=Sl;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function e_(n){return queueMicrotask(()=>n()),()=>{n=Sl}}var Ep="isAngularZone",ea=Ep+"_ID",SM=0,Dn=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new pn(!1);onMicrotaskEmpty=new pn(!1);onStable=new pn(!1);onError=new pn(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=Ky}=e;if(typeof Zone>"u")throw new Ae(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,MM(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Ep)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Ae(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Ae(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,EM,Sl,Sl);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},EM={};function bp(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function bM(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){Sp(()=>{n.callbackScheduled=!1,Oh(n),n.isCheckStableRunning=!0,bp(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),Oh(n)}function MM(n){let e=()=>{bM(n)},t=SM++;n._inner=n._inner.fork({name:"angular",properties:{[Ep]:!0,[ea]:t,[ea+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(wM(c))return i.invokeTask(s,o,a,c);try{return vy(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),yy(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return vy(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!TM(c)&&e(),yy(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,Oh(n),bp(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function Oh(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function vy(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function yy(n){n._nesting--,bp(n)}var ta=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new pn;onMicrotaskEmpty=new pn;onStable=new pn;onError=new pn;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function wM(n){return t_(n,"__ignore_ng_zone__")}function TM(n){return t_(n,"__scheduler_tick__")}function t_(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var ji=class{_console=console;handleError(e){this._console.error("ERROR",e)}},bi=new Oe("",{factory:()=>{let n=le(Dn),e=le(Gt),t;return i=>{n.runOutsideAngular(()=>{e.destroyed&&!t?setTimeout(()=>{throw i}):(t??=e.get(ji),t.handleError(i))})}}}),n_={provide:ts,useValue:()=>{let n=le(ji,{optional:!0})},multi:!0},CM=new Oe("",{factory:()=>{let n=le(jt).defaultView;if(!n)return;let e=le(bi),t=s=>{e(s.reason),s.preventDefault()},i=s=>{s.error?e(s.error):e(new Error(s.message,{cause:s})),s.preventDefault()},r=()=>{n.addEventListener("unhandledrejection",t),n.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),le(yr).onDestroy(()=>{n.removeEventListener("error",i),n.removeEventListener("unhandledrejection",t)})}});function Mp(){return zs([by(()=>{le(CM)})])}function xr(n,e){let[t,i,r]=lh(n,e?.equal),s=t,o=s[Tn];return s.set=i,s.update=r,s.asReadonly=i_.bind(s),s}function i_(){let n=this[Tn];if(n.readonlyFn===void 0){let e=()=>this();e[Tn]=n,n.readonlyFn=e}return n.readonlyFn}var Vs=class{},ga=new Oe("",{factory:()=>!0});var wp=new Oe("");var Tp=(()=>{class n{static \u0275prov=Fe({token:n,providedIn:"root",factory:()=>new Fh})}return n})(),Fh=class{dirtyEffectCount=0;queues=new Map;add(e){this.enqueue(e),this.schedule(e)}schedule(e){e.dirty&&this.dirtyEffectCount++}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),e.dirty&&this.dirtyEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||i.add(e)}flush(){for(;this.dirtyEffectCount>0;){let e=!1;for(let[t,i]of this.queues)t===null?e||=this.flushQueue(i):e||=t.run(()=>this.flushQueue(i));e||(this.dirtyEffectCount=0)}}flushQueue(e){let t=!1;for(let i of e)i.dirty&&(this.dirtyEffectCount--,t=!0,i.run());return t}},kh=class{[Tn];constructor(e){this[Tn]=e}destroy(){this[Tn].destroy()}};function Ma(n){return{toString:n}.toString()}function zM(n){return typeof n=="function"}function R_(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var Vl=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}},Jl=(()=>{let n=()=>N_;return n.ngInherit=!0,n})();function N_(n){return n.type.prototype.ngOnChanges&&(n.setInput=jM),GM}function GM(){let n=L_(this),e=n?.current;if(e){let t=n.previous;if(t===es)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function jM(n,e,t,i,r){let s=this.declaredInputs[i],o=L_(n)||WM(n,{previous:es,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new Vl(l&&l.currentValue,t,c===es),R_(n,e,r,t)}var P_="__ngSimpleChanges__";function L_(n){return n[P_]||null}function WM(n,e){return n[P_]=e}var r_=[];var bt=function(n,e=null,t){for(let i=0;i<r_.length;i++){let r=r_[i];r(n,e,t)}},at=(function(n){return n[n.TemplateCreateStart=0]="TemplateCreateStart",n[n.TemplateCreateEnd=1]="TemplateCreateEnd",n[n.TemplateUpdateStart=2]="TemplateUpdateStart",n[n.TemplateUpdateEnd=3]="TemplateUpdateEnd",n[n.LifecycleHookStart=4]="LifecycleHookStart",n[n.LifecycleHookEnd=5]="LifecycleHookEnd",n[n.OutputStart=6]="OutputStart",n[n.OutputEnd=7]="OutputEnd",n[n.BootstrapApplicationStart=8]="BootstrapApplicationStart",n[n.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",n[n.BootstrapComponentStart=10]="BootstrapComponentStart",n[n.BootstrapComponentEnd=11]="BootstrapComponentEnd",n[n.ChangeDetectionStart=12]="ChangeDetectionStart",n[n.ChangeDetectionEnd=13]="ChangeDetectionEnd",n[n.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",n[n.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",n[n.AfterRenderHooksStart=16]="AfterRenderHooksStart",n[n.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",n[n.ComponentStart=18]="ComponentStart",n[n.ComponentEnd=19]="ComponentEnd",n[n.DeferBlockStateStart=20]="DeferBlockStateStart",n[n.DeferBlockStateEnd=21]="DeferBlockStateEnd",n[n.DynamicComponentStart=22]="DynamicComponentStart",n[n.DynamicComponentEnd=23]="DynamicComponentEnd",n[n.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",n[n.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",n})(at||{});function $M(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=N_(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function qM(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function kl(n,e,t){O_(n,e,3,t)}function Ul(n,e,t,i){(n[$e]&3)===t&&O_(n,e,t,i)}function Cp(n,e){let t=n[$e];(t&3)===e&&(t&=16383,t+=1,n[$e]=t)}function O_(n,e,t,i){let r=i!==void 0?n[ns]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[ns]+=65536),(a<s||s==-1)&&(XM(n,t,e,c),n[ns]=(n[ns]&4294901760)+c+2),c++}function s_(n,e){bt(at.LifecycleHookStart,n,e);let t=Ke(null);try{e.call(n)}finally{Ke(t),bt(at.LifecycleHookEnd,n,e)}}function XM(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[$e]>>14<n[ns]>>16&&(n[$e]&3)===e&&(n[$e]+=16384,s_(a,s)):s_(a,s)}var Zs=-1,xa=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i,r){this.factory=e,this.name=r,this.canSeeViewProviders=t,this.injectImpl=i}};function YM(n){return(n.flags&8)!==0}function ZM(n){return(n.flags&16)!==0}function JM(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];QM(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function KM(n){return n===3||n===4||n===6}function QM(n){return n.charCodeAt(0)===64}function Wp(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?o_(n,t,r,null,e[++i]):o_(n,t,r,null,null))}}return n}function o_(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){r!==null&&(n[s+1]=r);return}s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),r!==null&&n.splice(s++,0,r)}function F_(n){return n!==Zs}function Hl(n){return n&32767}function ew(n){return n>>16}function zl(n,e){let t=ew(n),i=e;for(;t>0;)i=i[Ws],t--;return i}var Rp=!0;function a_(n){let e=Rp;return Rp=n,e}var tw=256,k_=tw-1,U_=5,nw=0,Mi={};function iw(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(Qr)&&(i=t[Qr]),i==null&&(i=t[Qr]=nw++);let r=i&k_,s=1<<r;e.data[n+(r>>U_)]|=s}function B_(n,e){let t=V_(n,e);if(t!==-1)return t;let i=e[Ye];i.firstCreatePass&&(n.injectorIndex=e.length,Dp(i.data,n),Dp(e,null),Dp(i.blueprint,null));let r=$p(n,e),s=n.injectorIndex;if(F_(r)){let o=Hl(r),a=zl(r,e),c=a[Ye].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function Dp(n,e){n.push(0,0,0,0,0,0,0,0,e)}function V_(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function $p(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=W_(r),i===null)return Zs;if(t++,r=r[Ws],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return Zs}function rw(n,e,t){iw(n,e,t)}function H_(n,e,t){if(t&8||n!==void 0)return n;Tl(e,"NodeInjector")}function z_(n,e,t,i){if(t&8&&i===void 0&&(i=null),(t&3)===0){let r=n[fr],s=Cn(void 0);try{return r?r.get(e,i,t&8):Yh(e,i,t&8)}finally{Cn(s)}}return H_(i,e,t)}function G_(n,e,t,i=0,r){if(n!==null){if(e[$e]&2048&&!(i&2)){let o=lw(n,e,t,i,Mi);if(o!==Mi)return o}let s=j_(n,e,t,i,Mi);if(s!==Mi)return s}return z_(e,t,i,r)}function j_(n,e,t,i,r){let s=aw(t);if(typeof s=="function"){if(!mp(e,n,i))return i&1?H_(r,t,i):z_(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&8))Tl(t);else return o}finally{gp()}}else if(typeof s=="number"){let o=null,a=V_(n,e),c=Zs,l=i&1?e[Wn][jn]:null;for((a===-1||i&4)&&(c=a===-1?$p(n,e):e[a+8],c===Zs||!l_(i,!1)?a=-1:(o=e[Ye],a=Hl(c),e=zl(c,e)));a!==-1;){let u=e[Ye];if(c_(s,a,u.data)){let d=sw(a,e,t,o,i,l);if(d!==Mi)return d}c=e[a+8],c!==Zs&&l_(i,e[Ye].data[a+8]===l)&&c_(s,a,e)?(o=u,a=Hl(c),e=zl(c,e)):a=-1}}return r}function sw(n,e,t,i,r,s){let o=e[Ye],a=o.data[n+8],c=i==null?gr(a)&&Rp:i!=o&&(a.type&3)!==0,l=r&1&&s===a,u=ow(a,o,t,c,l);return u!==null?Np(e,o,u,a,r):Mi}function ow(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let h=d;h<f;h++){let g=o[h];if(h<c&&t===g||h>=c&&g.type===t)return h}if(r){let h=o[c];if(h&&is(h)&&h.type===t)return c}return null}function Np(n,e,t,i,r){let s=n[t],o=e.data;if(s instanceof xa){let a=s;if(a.resolving)throw Xh("");let c=a_(a.canSeeViewProviders);a.resolving=!0;let l=o[t].type||o[t],u,d=a.injectImpl?Cn(a.injectImpl):null,f=mp(n,i,0);try{s=n[t]=a.factory(void 0,r,o,n,i),e.firstCreatePass&&t>=i.directiveStart&&$M(t,o[t],e)}finally{d!==null&&Cn(d),a_(c),a.resolving=!1,gp()}}return s}function aw(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(Qr)?n[Qr]:void 0;return typeof e=="number"?e>=0?e&k_:cw:e}function c_(n,e,t){let i=1<<n;return!!(t[e+(n>>U_)]&i)}function l_(n,e){return!(n&2)&&!(n&1&&e)}var ss=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return G_(this._tNode,this._lView,e,Zr(i),t)}};function cw(){return new ss(Ei(),En())}function wa(n){return Ma(()=>{let e=n.prototype.constructor,t=e[Ko]||Pp(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[Ko]||Pp(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function Pp(n){return Bh(n)?()=>{let e=Pp(yn(n));return e&&e()}:Jr(n)}function lw(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[$e]&2048&&!Xs(o);){let a=j_(s,o,t,i|2,Mi);if(a!==Mi)return a;let c=s.parent;if(!c){let l=o[np];if(l){let u=l.get(t,Mi,i&-5);if(u!==Mi)return u}c=W_(o),o=o[Ws]}s=c}return r}function W_(n){let e=n[Ye],t=e.type;return t===2?e.declTNode:t===1?n[jn]:null}function uw(){return qp(Ei(),En())}function qp(n,e){return new Xp(Wi(n,e))}var Xp=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=uw}return n})();function $_(n){return(n.flags&128)===128}var Yp=(function(n){return n[n.OnPush=0]="OnPush",n[n.Eager=1]="Eager",n[n.Default=1]="Default",n})(Yp||{}),q_=new Map,dw=0;function fw(){return dw++}function hw(n){q_.set(n[hr],n)}function Lp(n){q_.delete(n[hr])}var u_="__ngContext__";function Sa(n,e){mr(e)?(n[u_]=e[hr],hw(e)):n[u_]=e}function X_(n){return Z_(n[js])}function Y_(n){return Z_(n[Gn])}function Z_(n){for(;n!==null&&!ri(n);)n=n[Gn];return n}var pw;function Zp(n){pw=n}var Kl=new Oe("",{factory:()=>mw}),mw="ng";var Ql=new Oe(""),Ta=new Oe("",{providedIn:"platform",factory:()=>"unknown"});var eu=new Oe("",{factory:()=>le(jt).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var J_=!1,K_=new Oe("",{factory:()=>J_});var d_=new WeakMap;function gw(n,e){if(n==null||typeof n!="object")return;let t=d_.get(n);t||(t=new WeakSet,d_.set(n,t)),t.add(e)}var vw=(n,e,t,i)=>{};function yw(n,e,t,i){vw(n,e,t,i)}function Jp(n){return(n.flags&32)===32}var _w=()=>null;function Q_(n,e,t=!1){return _w(n,e,t)}function e0(n,e){let t=n.contentQueries;if(t!==null){let i=Ke(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];pp(s),a.contentQueries(2,e[o],o)}}}finally{Ke(i)}}}function Op(n,e,t){pp(0);let i=Ke(null);try{e(n,t)}finally{Ke(i)}}function t0(n,e,t){if(ip(e)){let i=Ke(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{Ke(i)}}}var ai=(function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n[n.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",n})(ai||{});function xw(n,e){return n.createText(e)}function n0(n,e,t){return n.createElement(e,t)}function Gl(n,e,t,i,r){n.insertBefore(e,t,i,r)}function i0(n,e,t){n.appendChild(e,t)}function f_(n,e,t,i,r){i!==null?Gl(n,e,t,i,r):i0(n,e,t)}function Sw(n,e,t,i){n.removeChild(null,e,t,i)}function Ew(n,e,t){n.setAttribute(e,"style",t)}function bw(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function r0(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&JM(n,e,i),r!==null&&bw(n,e,r),s!==null&&Ew(n,e,s)}function s0(n){return n instanceof Function?n():n}function Mw(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}var o0="ng-template";function ww(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&Mw(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(Kp(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function Kp(n){return n.type===4&&n.value!==o0}function Tw(n,e,t){let i=n.type===4&&!t?o0:n.value;return e===i}function Cw(n,e,t){let i=4,r=n.attrs,s=r!==null?Iw(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!oi(i)&&!oi(c))return!1;if(o&&oi(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!Tw(n,c,t)||c===""&&e.length===1){if(oi(i))return!1;o=!0}}else if(i&8){if(r===null||!ww(n,r,c,t)){if(oi(i))return!1;o=!0}}else{let l=e[++a],u=Dw(c,r,Kp(n),t);if(u===-1){if(oi(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(oi(i))return!1;o=!0}}}}return oi(i)||o}function oi(n){return(n&1)===0}function Dw(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return Rw(e,n)}function Aw(n,e,t=!1){for(let i=0;i<e.length;i++)if(Cw(n,e[i],t))return!0;return!1}function Iw(n){for(let e=0;e<n.length;e++){let t=n[e];if(KM(t))return e}return n.length}function Rw(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function h_(n,e){return n?":not("+e.trim()+")":e}function Nw(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!oi(o)&&(e+=h_(s,r),r=""),i=o,s=s||!oi(i);t++}return r!==""&&(e+=h_(s,r)),e}function Pw(n){return n.map(Nw).join(",")}function Lw(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!oi(r))break;r=s}i++}return t.length&&e.push(1,...t),e}var Qp={};function a0(n,e,t,i,r,s,o,a,c,l,u){let d=$n+i,f=d+r,h=Ow(d,f),g=typeof l=="function"?l():l;return h[Ye]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function Ow(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Qp);return t}function Fw(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=a0(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function c0(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[ii]=r,d[$e]=i|4|128|8|64|1024,(l!==null||n&&n[$e]&2048)&&(d[$e]|=2048),rp(d),d[tn]=d[Ws]=n,d[_n]=t,d[xi]=o||n&&n[xi],d[xn]=a||n&&n[xn],d[fr]=c||n&&n[fr]||null,d[jn]=s,d[hr]=fw(),d[aa]=u,d[np]=l,d[Wn]=e.type==2?n[Wn]:d,d}function kw(n,e,t){let i=Wi(e,n),r=Fw(t),s=n[xi].rendererFactory,o=d0(n,c0(n,r,null,l0(t),i,e,null,s.createRenderer(i,t),null,null,null));return n[e.index]=o}function l0(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function u0(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function d0(n,e){return n[js]?n[tp][Gn]=e:n[js]=e,n[tp]=e,e}function Uw(n,e,t,i){if(!i)if((e[$e]&3)===3){let s=n.preOrderCheckHooks;s!==null&&kl(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Ul(e,s,0,t)}vr(t)}var tu=(function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n})(tu||{});function Fp(n,e,t,i){let r=Ke(null);try{let[s,o,a]=n.inputs[t],c=null;(o&tu.SignalBased)!==0&&(c=e[s][Tn]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(e,i)),n.setInput!==null?n.setInput(e,c,i,t,s):R_(e,c,s,i)}finally{Ke(r)}}var cs=(function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n})(cs||{}),Bw;function em(n,e){return Bw(n,e)}var LB=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var kp=new WeakMap,va=new WeakSet;function Vw(n,e){let t=kp.get(n);if(!t||t.length===0)return;let i=e.parentNode,r=e.previousSibling;for(let s=t.length-1;s>=0;s--){let o=t[s],a=o.parentNode;o===e?(t.splice(s,1),va.add(o),o.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&o===r||a&&i&&a!==i)&&(t.splice(s,1),o.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),o.parentNode?.removeChild(o))}}function Hw(n,e){let t=kp.get(n);t?t.includes(e)||t.push(e):kp.set(n,[e])}var Js=new Set,tm=(function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n})(tm||{}),eo=new Oe(""),p_=new Set;function nm(n){p_.has(n)||(p_.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var f0=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=Fe({token:n,providedIn:"root",factory:()=>new n})}return n})();var zw=new Oe("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:le(Gt)})});function h0(n,e,t){let i=n.get(zw);if(Array.isArray(e))for(let r of e)i.queue.add(r),t?.detachedLeaveAnimationFns?.push(r);else i.queue.add(e),t?.detachedLeaveAnimationFns?.push(e);i.scheduler&&i.scheduler(n)}function Gw(n,e){for(let[t,i]of e)h0(n,i.animateFns)}function m_(n,e,t,i){let r=n?.[qs]?.enter;e!==null&&r&&r.has(t.index)&&Gw(i,r)}function Ys(n,e,t,i,r,s,o,a){if(r!=null){let c,l=!1;ri(r)?c=r:mr(r)&&(l=!0,r=r[ii]);let u=si(r);n===0&&i!==null?(m_(a,i,s,t),o==null?i0(e,i,u):Gl(e,i,u,o||null,!0)):n===1&&i!==null?(m_(a,i,s,t),Gl(e,i,u,o||null,!0),Vw(s,u)):n===2?(a?.[qs]?.leave?.has(s.index)&&Hw(s,u),va.delete(u),g_(a,s,t,d=>{if(va.has(u)){va.delete(u);return}Sw(e,u,l,d)})):n===3&&(va.delete(u),g_(a,s,t,()=>{e.destroyNode(u)})),c!=null&&nT(e,n,t,c,s,i,o)}}function jw(n,e){p0(n,e),e[ii]=null,e[jn]=null}function Ww(n,e,t,i,r,s){i[ii]=r,i[jn]=e,nu(n,i,t,1,r,s)}function p0(n,e){e[xi].changeDetectionScheduler?.notify(9),nu(n,e,e[xn],2,null,null)}function $w(n){let e=n[js];if(!e)return Ap(n[Ye],n);for(;e;){let t=null;if(mr(e))t=e[js];else{let i=e[Sn];i&&(t=i)}if(!t){for(;e&&!e[Gn]&&e!==n;)mr(e)&&Ap(e[Ye],e),e=e[tn];e===null&&(e=n),mr(e)&&Ap(e[Ye],e),t=e&&e[Gn]}e=t}}function im(n,e){let t=n[da],i=t.indexOf(e);t.splice(i,1)}function m0(n,e){if(rs(e))return;let t=e[xn];t.destroyNode&&nu(n,e,t,3,null,null),$w(e)}function Ap(n,e){if(rs(e))return;let t=Ke(null);try{e[$e]&=-129,e[$e]|=256,e[An]&&Wo(e[An]),Yw(n,e),Xw(n,e),e[Ye].type===1&&e[xn].destroy();let i=e[$s];if(i!==null&&ri(e[tn])){i!==e[tn]&&im(i,e);let r=e[ca];r!==null&&r.detachView(n)}Lp(e)}finally{Ke(t)}}function g_(n,e,t,i){let r=n?.[qs];if(r==null||r.leave==null||!r.leave.has(e.index))return i(!1);n&&Js.add(n[hr]),h0(t,()=>{if(r.leave&&r.leave.has(e.index)){let o=r.leave.get(e.index),a=[];if(o){for(let c=0;c<o.animateFns.length;c++){let l=o.animateFns[c],{promise:u}=l();a.push(u)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(a),qw(n,i)}else n&&Js.delete(n[hr]),i(!1)},r)}function qw(n,e){let t=n[qs]?.running;if(t){t.then(()=>{n[qs].running=void 0,Js.delete(n[hr]),e(!0)});return}e(!1)}function Xw(n,e){let t=n.cleanup,i=e[Gs];if(t!==null)for(let o=0;o<t.length-1;o+=2)if(typeof t[o]=="string"){let a=t[o+3];a>=0?i[a]():i[-a].unsubscribe(),o+=2}else{let a=i[t[o+1]];t[o].call(a)}i!==null&&(e[Gs]=null);let r=e[Gi];if(r!==null){e[Gi]=null;for(let o=0;o<r.length;o++){let a=r[o];a()}}let s=e[la];if(s!==null){e[la]=null;for(let o of s)o.destroy()}}function Yw(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof xa)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];bt(at.LifecycleHookStart,a,c);try{c.call(a)}finally{bt(at.LifecycleHookEnd,a,c)}}else{bt(at.LifecycleHookStart,r,s);try{s.call(r)}finally{bt(at.LifecycleHookEnd,r,s)}}}}}function Zw(n,e,t){return Jw(n,e.parent,t)}function Jw(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[ii];if(gr(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===ai.None||r===ai.Emulated)return null}return Wi(i,t)}function Kw(n,e,t){return eT(n,e,t)}function Qw(n,e,t){return n.type&40?Wi(n,t):null}var eT=Qw,v_;function g0(n,e,t,i){let r=Zw(n,i,e),s=e[xn],o=i.parent||e[jn],a=Kw(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)f_(s,r,t[c],a,!1);else f_(s,r,t,a,!1);v_!==void 0&&v_(s,i,e,t,r)}function ya(n,e){if(e!==null){let t=e.type;if(t&3)return Wi(e,n);if(t&4)return Up(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return ya(n,i);{let r=n[e.index];return ri(r)?Up(-1,r):si(r)}}else{if(t&128)return ya(n,e.next);if(t&32)return em(e,n)()||si(n[e.index]);{let i=v0(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=ur(n[Wn]);return ya(r,i)}else return ya(n,e.next)}}}return null}function v0(n,e){if(e!==null){let i=n[Wn][jn],r=e.projection;return i.projection[r]}return null}function Up(n,e){let t=Sn+n+1;if(t<e.length){let i=e[t],r=i[Ye].firstChild;if(r!==null)return ya(i,r)}return e[pr]}function rm(n,e,t,i,r,s,o){for(;t!=null;){let a=i[fr];if(t.type===128){t=t.next;continue}let c=i[t.index],l=t.type;if(o&&e===0&&(c&&Sa(si(c),i),t.flags|=2),!Jp(t))if(l&8)rm(n,e,t.child,i,r,s,!1),Ys(e,n,a,r,c,t,s,i);else if(l&32){let u=em(t,i),d;for(;d=u();)Ys(e,n,a,r,d,t,s,i);Ys(e,n,a,r,c,t,s,i)}else l&16?tT(n,e,i,t,r,s):Ys(e,n,a,r,c,t,s,i);t=o?t.projectionNext:t.next}}function nu(n,e,t,i,r,s){rm(t,i,n.firstChild,e,r,s,!1)}function tT(n,e,t,i,r,s){let o=t[Wn],c=o[jn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Ys(e,n,t[fr],r,u,i,s,t)}else{let l=c,u=o[tn];$_(i)&&(l.flags|=128),rm(n,e,l,u,r,s,!0)}}function nT(n,e,t,i,r,s,o){let a=i[pr],c=si(i);a!==c&&Ys(e,n,t,s,a,r,o);for(let l=Sn;l<i.length;l++){let u=i[l];nu(u[Ye],u,n,e,s,a)}}function y0(n,e,t,i,r){let s=Zy(),o=i&2;try{vr(-1),o&&e.length>$n&&Uw(n,e,$n,!1);let a=o?at.TemplateUpdateStart:at.TemplateCreateStart;bt(a,r,t),t(i,r)}finally{vr(s);let a=o?at.TemplateUpdateEnd:at.TemplateCreateEnd;bt(a,r,t)}}function _0(n,e,t){oT(n,e,t),(t.flags&64)===64&&aT(n,e,t)}function x0(n,e,t=Wi){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function iT(n,e,t,i){let s=i.get(K_,J_)||t===ai.ShadowDom||t===ai.ExperimentalIsolatedShadowDom,o=n.selectRootElement(e,s);if(o.tagName.toLowerCase()==="script")throw new Ae(905,!1);return rT(o),o}function rT(n){sT(n)}var sT=()=>null;function oT(n,e,t){let i=t.directiveStart,r=t.directiveEnd;gr(t)&&kw(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||B_(t,e);let s=t.initialInputs;for(let o=i;o<r;o++){let a=n.data[o],c=Np(e,n,o,t);if(Sa(c,e),s!==null&&uT(e,o-i,c,a,t,s),is(a)){let l=Si(t.index,e);l[_n]=Np(e,n,o,t)}}}function aT(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=$y();try{vr(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];Ll(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&cT(c,l)}}finally{vr(-1),Ll(o)}}function cT(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function lT(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let s=t[r];Aw(e,s.selectors,!1)&&(i??=[],is(s)?i.unshift(s):i.push(s))}return i}function uT(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;a+=2){let c=o[a],l=o[a+1];Fp(i,t,c,l)}}function S0(n,e,t,i,r){let s=$n+t,o=e[Ye],a=r(o,e,n,i,t);e[s]=a,ma(n,!0);let c=n.type===2;return c?(r0(e[xn],a,n),(ky()===0||Il(n))&&Sa(a,e),Uy()):Sa(a,e),yp()&&(!c||!Jp(n))&&g0(o,e,a,n),n}function E0(n){let e=n;return dp()?zy():(e=e.parent,ma(e,!1)),e}function dT(n,e){let t=n[fr];if(!t)return;let i;try{i=t.get(bi,null)}catch{i=null}i?.(e)}function b0(n,e,t,i,r){let s=n.inputs?.[i],o=n.hostDirectiveInputs?.[i],a=!1;if(o)for(let c=0;c<o.length;c+=2){let l=o[c],u=o[c+1],d=e.data[l];Fp(d,t[l],u,r),a=!0}if(s)for(let c of s){let l=t[c],u=e.data[c];Fp(u,l,i,r),a=!0}return a}function fT(n,e){let t=Si(e,n),i=t[Ye];hT(i,t);let r=t[ii];r!==null&&t[aa]===null&&(t[aa]=Q_(r,t[fr])),bt(at.ComponentStart);try{M0(i,t,t[_n])}finally{bt(at.ComponentEnd,t[_n])}}function hT(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function M0(n,e,t){Ol(e);try{let i=n.viewQuery;i!==null&&Op(1,i,t);let r=n.template;r!==null&&y0(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[ca]?.finishViewCreation(n),n.staticContentQueries&&e0(n,e),n.staticViewQueries&&Op(2,n.viewQuery,t);let s=n.components;s!==null&&pT(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[$e]&=-5,Fl()}}function pT(n,e){for(let t=0;t<e.length;t++)fT(n,e[t])}function y_(n,e){return!e||e.firstChild===null||$_(n)}function Ea(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(si(s)),ri(s)&&w0(s,i);let o=t.type;if(o&8)Ea(n,e,t.child,i);else if(o&32){let a=em(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=v0(e,t);if(Array.isArray(a))i.push(...a);else{let c=ur(e[Wn]);Ea(c[Ye],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function w0(n,e){for(let t=Sn;t<n.length;t++){let i=n[t],r=i[Ye].firstChild;r!==null&&Ea(i[Ye],i,r,e)}n[pr]!==n[ii]&&e.push(n[pr])}function T0(n){if(n[Al]!==null){for(let e of n[Al])e.impl.addSequence(e);n[Al].length=0}}var C0=[];function mT(n){return n[An]??gT(n)}function gT(n){let e=C0.pop()??Object.create(yT);return e.lView=n,e}function vT(n){n.lView[An]!==n&&(n.lView=null,C0.push(n))}var yT=xt(de({},zo),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{pa(n.lView)},consumerOnSignalRead(){this.lView[An]=this}});function _T(n){let e=n[An]??Object.create(xT);return e.lView=n,e}var xT=xt(de({},zo),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=ur(n.lView);for(;e&&!D0(e[Ye]);)e=ur(e);e&&sp(e)},consumerOnSignalRead(){this.lView[An]=this}});function D0(n){return n.type!==2}function A0(n){if(n[la]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[la])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[$e]&8192)}}var ST=100;function I0(n,e=0){let i=n[xi].rendererFactory,r=!1;r||i.begin?.();try{ET(n,e)}finally{r||i.end?.()}}function ET(n,e){let t=fp();try{hp(!0),Bp(n,e);let i=0;for(;ha(n);){if(i===ST)throw new Ae(103,!1);i++,Bp(n,1)}}finally{hp(t)}}function bT(n,e,t,i){if(rs(e))return;let r=e[$e],s=!1,o=!1;Ol(e);let a=!0,c=null,l=null;s||(D0(n)?(l=mT(e),c=jo(l)):$c()===null?(a=!1,l=_T(e),c=jo(l)):e[An]&&(Wo(e[An]),e[An]=null));try{rp(e),Gy(n.bindingStartIndex),t!==null&&y0(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let h=n.preOrderCheckHooks;h!==null&&kl(e,h,null)}else{let h=n.preOrderHooks;h!==null&&Ul(e,h,0,null),Cp(e,0)}if(o||MT(e),A0(e),R0(e,0),n.contentQueries!==null&&e0(n,e),!s)if(u){let h=n.contentCheckHooks;h!==null&&kl(e,h)}else{let h=n.contentHooks;h!==null&&Ul(e,h,1),Cp(e,1)}TT(n,e);let d=n.components;d!==null&&P0(e,d,0);let f=n.viewQuery;if(f!==null&&Op(2,f,i),!s)if(u){let h=n.viewCheckHooks;h!==null&&kl(e,h)}else{let h=n.viewHooks;h!==null&&Ul(e,h,2),Cp(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Dl]){for(let h of e[Dl])h();e[Dl]=null}s||(T0(e),e[$e]&=-73)}catch(u){throw s||pa(e),u}finally{l!==null&&(qc(l,c),a&&vT(l)),Fl()}}function R0(n,e){for(let t=X_(n);t!==null;t=Y_(t))for(let i=Sn;i<t.length;i++){let r=t[i];N0(r,e)}}function MT(n){for(let e=X_(n);e!==null;e=Y_(e)){if(!(e[$e]&2))continue;let t=e[da];for(let i=0;i<t.length;i++){let r=t[i];sp(r)}}}function wT(n,e,t){bt(at.ComponentStart);let i=Si(e,n);try{N0(i,t)}finally{bt(at.ComponentEnd,i[_n])}}function N0(n,e){Rl(n)&&Bp(n,e)}function Bp(n,e){let i=n[Ye],r=n[$e],s=n[An],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Xc(s)),o||=!1,s&&(s.dirty=!1),n[$e]&=-9217,o)bT(i,n,i.template,n[_n]);else if(r&8192){let a=Ke(null);try{A0(n),R0(n,1);let c=i.components;c!==null&&P0(n,c,1),T0(n)}finally{Ke(a)}}}function P0(n,e,t){for(let i=0;i<e.length;i++)wT(n,e[i],t)}function TT(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)vr(~r);else{let s=r,o=t[++i],a=t[++i];Wy(o,s);let c=e[s];bt(at.HostBindingsUpdateStart,c);try{a(2,c)}finally{bt(at.HostBindingsUpdateEnd,c)}}}}finally{vr(-1)}}function sm(n,e){let t=fp()?64:1088;for(n[xi].changeDetectionScheduler?.notify(e);n;){n[$e]|=t;let i=ur(n);if(Xs(n)&&!i)return n;n=i}return null}function CT(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function DT(n,e,t,i=!0){let r=e[Ye];if(AT(r,e,n,t),i){let o=Up(t,n),a=e[xn],c=a.parentNode(n[pr]);c!==null&&Ww(r,n[jn],a,e,c,o)}let s=e[aa];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function Vp(n,e){if(n.length<=Sn)return;let t=Sn+e,i=n[t];if(i){let r=i[$s];r!==null&&r!==n&&im(r,i),e>0&&(n[t-1][Gn]=i[Gn]);let s=ra(n,Sn+e);jw(i[Ye],i);let o=s[ca];o!==null&&o.detachView(s[Ye]),i[tn]=null,i[Gn]=null,i[$e]&=-129}return i}function AT(n,e,t,i){let r=Sn+i,s=t.length;i>0&&(t[r-1][Gn]=e),i<s-Sn?(e[Gn]=t[r],Zh(t,Sn+i,e)):(t.push(e),e[Gn]=null),e[tn]=t;let o=e[$s];o!==null&&t!==o&&L0(o,e);let a=e[ca];a!==null&&a.insertView(n),Nl(e),e[$e]|=128}function L0(n,e){let t=n[da],i=e[tn];if(mr(i))n[$e]|=2;else{let r=i[tn][Wn];e[Wn]!==r&&(n[$e]|=2)}t===null?n[da]=[e]:t.push(e)}var os=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let e=this._lView,t=e[Ye];return Ea(t,e,t.firstChild,[])}constructor(e,t){this._lView=e,this._cdRefInjectingView=t}get context(){return this._lView[_n]}set context(e){this._lView[_n]=e}get destroyed(){return rs(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[tn];if(ri(e)){let t=e[ua],i=t?t.indexOf(this):-1;i>-1&&(Vp(e,i),ra(t,i))}this._attachedToViewContainer=!1}m0(this._lView[Ye],this._lView)}onDestroy(e){op(this._lView,e)}markForCheck(){sm(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[$e]&=-129}reattach(){Nl(this._lView),this._lView[$e]|=128}detectChanges(){this._lView[$e]|=1024,I0(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Ae(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=Xs(this._lView),t=this._lView[$s];t!==null&&!e&&im(t,this._lView),p0(this._lView[Ye],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Ae(902,!1);this._appRef=e;let t=Xs(this._lView),i=this._lView[$s];i!==null&&!t&&L0(i,this._lView),Nl(this._lView)}};function om(n,e,t,i,r){let s=n.data[e];if(s===null)s=IT(n,e,t,i,r),jy()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=Hy();s.injectorIndex=o===null?-1:o.injectorIndex}return ma(s,!0),s}function IT(n,e,t,i,r){let s=up(),o=dp(),a=o?s:s&&s.parent,c=n.data[e]=NT(n,a,t,e,i,r);return RT(n,c,s,o),c}function RT(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function NT(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return Vy()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,namespace:vp(),attrs:s,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var PT=()=>null;function __(n,e){return PT(n,e)}var O0=class{},iu=class{},Hp=class{resolveComponentFactory(e){throw new Ae(917,!1)}},Ca=class{static NULL=new Hp},as=class{};var F0=(()=>{class n{static \u0275prov=Fe({token:n,providedIn:"root",factory:()=>null})}return n})();var Bl={},zp=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){let r=this.injector.get(e,Bl,i);return r!==Bl||t===Bl?r:this.parentInjector.get(e,t,i)}};function jl(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=Uh(r,a);else if(s==2){let c=a,l=e[++o];i=Uh(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function am(n,e=0){let t=En();if(t===null)return We(n,e);let i=Ei();return G_(i,t,yn(n),e)}function LT(n,e,t,i,r){let s=i===null?null:{"":-1},o=r(n,t);if(o!==null){let a=o,c=null,l=null;for(let u of o)if(u.resolveHostDirectives!==null){[a,c,l]=u.resolveHostDirectives(o);break}kT(n,e,t,a,s,c,l)}s!==null&&i!==null&&OT(t,i,s)}function OT(n,e,t){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Ae(-301,!1);i.push(e[r],s)}}function FT(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function kT(n,e,t,i,r,s,o){let a=i.length,c=null;for(let f=0;f<a;f++){let h=i[f];c===null&&is(h)&&(c=h,FT(n,t,f)),rw(B_(t,e),n,h.type)}GT(t,n.data.length,a),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let f=0;f<a;f++){let h=i[f];h.providersResolver&&h.providersResolver(h)}let l=!1,u=!1,d=u0(n,e,a,null);a>0&&(t.directiveToIndex=new Map);for(let f=0;f<a;f++){let h=i[f];if(t.mergedAttrs=Wp(t.mergedAttrs,h.hostAttrs),BT(n,t,e,d,h),zT(d,h,r),o!==null&&o.has(h)){let[x,m]=o.get(h);t.directiveToIndex.set(h.type,[d,x+t.directiveStart,m+t.directiveStart])}else(s===null||!s.has(h))&&t.directiveToIndex.set(h.type,d);h.contentQueries!==null&&(t.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(t.flags|=64);let g=h.type.prototype;!l&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),l=!0),!u&&(g.ngOnChanges||g.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),u=!0),d++}UT(n,t,s)}function UT(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++){let r=n.data[i];if(t===null||!t.has(r))x_(0,e,r,i),x_(1,e,r,i),E_(e,i,!1);else{let s=t.get(r);S_(0,e,s,i),S_(1,e,s,i),E_(e,i,!0)}}}function x_(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o;n===0?o=e.inputs??={}:o=e.outputs??={},o[s]??=[],o[s].push(i),k0(e,s)}}function S_(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o=r[s],a;n===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[o]??=[],a[o].push(i,s),k0(e,o)}}function k0(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function E_(n,e,t){let{attrs:i,inputs:r,hostDirectiveInputs:s}=n;if(i===null||!t&&r===null||t&&s===null||Kp(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let o=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!t&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===e){o??=[],o.push(c,i[a+1]);break}}else if(t&&s.hasOwnProperty(c)){let l=s[c];for(let u=0;u<l.length;u+=2)if(l[u]===e){o??=[],o.push(l[u+1],i[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(o)}function BT(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=Jr(r.type,!0)),o=new xa(s,is(r),am,null);n.blueprint[i]=o,t[i]=o,VT(n,e,i,u0(n,t,r.hostVars,Qp),r)}function VT(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;HT(o)!=a&&o.push(a),o.push(t,i,s)}}function HT(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function zT(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;is(e)&&(t[""]=n)}}function GT(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function U0(n,e,t,i,r,s,o,a){let c=e[Ye],l=c.consts,u=fa(l,o),d=om(c,n,t,i,u);return s&&LT(c,e,d,fa(l,a),r),d.mergedAttrs=Wp(d.mergedAttrs,d.attrs),d.attrs!==null&&jl(d,d.attrs,!1),d.mergedAttrs!==null&&jl(d,d.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,d),d}function B0(n,e){qM(n,e),ip(e)&&n.queries.elementEnd(e)}function jT(n,e,t,i,r,s){let o=e.consts,a=fa(o,r),c=om(e,n,t,i,a);if(c.mergedAttrs=Wp(c.mergedAttrs,c.attrs),s!=null){let l=fa(o,s);c.localNames=[];for(let u=0;u<l.length;u+=2)c.localNames.push(l[u],-1)}return c.attrs!==null&&jl(c,c.attrs,!1),c.mergedAttrs!==null&&jl(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function WT(n,e,t){return function i(r){let s=i.__ngNativeEl__;s!==void 0&&gw(r,s);let o=gr(n)?Si(n.index,e):e;sm(o,5);let a=e[_n],c=b_(e,a,t,r),l=i.__ngNextListenerFn__;for(;l;)c=b_(e,a,l,r)&&c,l=l.__ngNextListenerFn__;return c}}function b_(n,e,t,i){let r=Ke(null);try{return bt(at.OutputStart,e,t),t(i)!==!1}catch(s){return dT(n,s),!1}finally{bt(at.OutputEnd,e,t),Ke(r)}}function $T(n,e,t,i,r,s,o,a){let c=Il(n),l=!1,u=null;if(!i&&c&&(u=XT(e,t,s,n.index)),u!==null){let d=u.__ngLastListenerFn__||u;d.__ngNextListenerFn__=o,u.__ngLastListenerFn__=o,l=!0}else{let d=Wi(n,t),f=i?i(d):d;yw(t,f,s,a),i||(a.__ngNativeEl__=d);let h=r.listen(f,s,a);if(!qT(s)){let g=i?x=>i(si(x[n.index])):n.index;YT(g,e,t,s,a,h,!1)}}return l}function qT(n){return n.startsWith("animation")||n.startsWith("transition")}function XT(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[Gs],c=r[s+2];return a&&a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function YT(n,e,t,i,r,s,o){let a=e.firstCreatePass?Fy(e):null,c=Oy(t),l=c.length;c.push(r,s),a&&a.push(i,n,l,(l+1)*(o?-1:1))}var Gp=Symbol("BINDING");function V0(n){return n.debugInfo?.className||n.type.name||null}var Wl=class extends Ca{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=dr(e);return new Ks(t,this.ngModule)}};function ZT(n){return Object.keys(n).map(e=>{let[t,i,r]=n[e],s={propName:t,templateName:e,isSignal:(i&tu.SignalBased)!==0};return r&&(s.transform=r),s})}function JT(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function KT(n,e,t){let i=e instanceof Gt?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new zp(t,i):t}function QT(n){let e=n.get(as,null);if(e===null)throw new Ae(407,!1);let t=n.get(F0,null),i=n.get(Vs,null),r=n.get(eo,null,{optional:!0});return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function eC(n,e){let t=H0(n);return n0(e,t,t==="svg"?Iy:t==="math"?Ry:null)}function H0(n){return(n.selectors[0][0]||"div").toLowerCase()}var Ks=class extends iu{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=ZT(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=JT(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=Pw(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r,s,o){bt(at.DynamicComponentStart);let a=Ke(null);try{let c=this.componentDef,l=KT(c,r||this.ngModule,e),u=QT(l),d=u.tracingService;return d&&d.componentCreate?d.componentCreate(V0(c),()=>this.createComponentRef(u,l,t,i,s,o)):this.createComponentRef(u,l,t,i,s,o)}finally{Ke(a)}}createComponentRef(e,t,i,r,s,o){let a=this.componentDef,c=tC(r,a,o,s),l=e.rendererFactory.createRenderer(null,a),u=r?iT(l,r,a.encapsulation,t):eC(a,l),d=o?.some(M_)||s?.some(g=>typeof g!="function"&&g.bindings.some(M_)),f=c0(null,c,null,512|l0(a),null,null,e,l,t,null,Q_(u,t,!0));f[$n]=u,Ol(f);let h=null;try{let g=U0($n,f,2,"#host",()=>c.directiveRegistry,!0,0);r0(l,u,g),Sa(u,f),_0(c,f,g),t0(c,g,f),B0(c,g),i!==void 0&&iC(g,this.ngContentSelectors,i),h=Si(g.index,f),f[_n]=h[_n],M0(c,f,null)}catch(g){throw h!==null&&Lp(h),Lp(f),g}finally{bt(at.DynamicComponentEnd),Fl()}return new $l(this.componentType,f,!!d)}};function tC(n,e,t,i){let r=n?["ng-version","21.2.16"]:Lw(e.selectors[0]),s=null,o=null,a=0;if(t)for(let u of t)a+=u[Gp].requiredVars,u.create&&(u.targetIdx=0,(s??=[]).push(u)),u.update&&(u.targetIdx=0,(o??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let d=i[u];if(typeof d!="function")for(let f of d.bindings){a+=f[Gp].requiredVars;let h=u+1;f.create&&(f.targetIdx=h,(s??=[]).push(f)),f.update&&(f.targetIdx=h,(o??=[]).push(f))}}let c=[e];if(i)for(let u of i){let d=typeof u=="function"?u:u.type,f=qh(d);c.push(f)}return a0(0,null,nC(s,o),1,a,c,null,null,null,[r],null)}function nC(n,e){return!n&&!e?null:t=>{if(t&1&&n)for(let i of n)i.create();if(t&2&&e)for(let i of e)i.update()}}function M_(n){let e=n[Gp].kind;return e==="input"||e==="twoWay"}var $l=class extends O0{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t,i){super(),this._rootLView=t,this._hasInputBindings=i,this._tNode=Ny(t[Ye],$n),this.location=qp(this._tNode,t),this.instance=Si(this._tNode.index,t)[_n],this.hostView=this.changeDetectorRef=new os(t,void 0),this.componentType=e}setInput(e,t){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let r=this._rootLView,s=b0(i,r[Ye],r,e,t);this.previousInputValues.set(e,t);let o=Si(i.index,r);sm(o,1)}get injector(){return new ss(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function iC(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null&&s.length?Array.from(s):null)}}var Da=(()=>{class n{static __NG_ELEMENT_ID__=rC}return n})();function rC(){let n=Ei();return sC(n,En())}var jp=class n extends Da{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return qp(this._hostTNode,this._hostLView)}get injector(){return new ss(this._hostTNode,this._hostLView)}get parentInjector(){let e=$p(this._hostTNode,this._hostLView);if(F_(e)){let t=zl(e,this._hostLView),i=Hl(e),r=t[Ye].data[i+8];return new ss(r,t)}else return new ss(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=w_(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-Sn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=__(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,y_(this._hostTNode,o)),a}createComponent(e,t,i,r,s,o,a){let c=e&&!zM(e),l;if(c)l=t;else{let m=t||{};l=m.index,i=m.injector,r=m.projectableNodes,s=m.environmentInjector||m.ngModuleRef,o=m.directives,a=m.bindings}let u=c?e:new Ks(dr(e)),d=i||this.parentInjector;if(!s&&u.ngModule==null){let p=(c?d:this.parentInjector).get(Gt,null);p&&(s=p)}let f=dr(u.componentType??{}),h=__(this._lContainer,f?.id??null),g=h?.firstChild??null,x=u.create(d,r,g,s,o,a);return this.insertImpl(x.hostView,l,y_(this._hostTNode,h)),x}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(Py(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[tn],l=new n(c,c[jn],c[tn]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return DT(o,r,s,i),e.attachToViewContainerRef(),Zh(Ip(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=w_(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=Vp(this._lContainer,t);i&&(ra(Ip(this._lContainer),t),m0(i[Ye],i))}detach(e){let t=this._adjustIndex(e,-1),i=Vp(this._lContainer,t);return i&&ra(Ip(this._lContainer),t)!=null?new os(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function w_(n){return n[ua]}function Ip(n){return n[ua]||(n[ua]=[])}function sC(n,e){let t,i=e[n.index];return ri(i)?t=i:(t=CT(i,e,null,n),e[n.index]=t,d0(e,t)),aC(t,e,n,i),new jp(t,n,e)}function oC(n,e){let t=n[xn],i=t.createComment(""),r=Wi(e,n),s=t.parentNode(r);return Gl(t,s,i,t.nextSibling(r),!1),i}var aC=cC;function cC(n,e,t,i){if(n[pr])return;let r;t.type&8?r=si(i):r=oC(e,t),n[pr]=r}var Qs=class{},ru=class{};var ql=class extends Qs{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Wl(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let s=$h(e);this._bootstrapComponents=s0(s.bootstrap),this._r3Injector=xp(e,t,[{provide:Qs,useValue:this},{provide:Ca,useValue:this.componentFactoryResolver},...i],El(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Xl=class extends ru{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new ql(this.moduleType,e,[])}};var ba=class extends Qs{injector;componentFactoryResolver=new Wl(this);instance=null;constructor(e){super();let t=new Kr([...e.providers,{provide:Qs,useValue:this},{provide:Ca,useValue:this.componentFactoryResolver}],e.parent||oa(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function Aa(n,e,t=null){return new ba({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var lC=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=Qh(!1,t.type),r=i.length>0?Aa([i],this._injector,""):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Fe({token:n,providedIn:"environment",factory:()=>new n(We(Gt))})}return n})();function mn(n){return Ma(()=>{let e=z0(n),t=xt(de({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Yp.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(lC).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||ai.Emulated,styles:n.styles||ni,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&nm("NgStandalone"),G0(t);let i=n.dependencies;return t.directiveDefs=T_(i,uC),t.pipeDefs=T_(i,_y),t.id=hC(t),t})}function uC(n){return dr(n)||qh(n)}function Ia(n){return Ma(()=>({type:n.type,bootstrap:n.bootstrap||ni,declarations:n.declarations||ni,imports:n.imports||ni,exports:n.exports||ni,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function dC(n,e){if(n==null)return es;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a,c;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s,c=r[3]||null):(s=r,o=r,a=tu.None,c=null),t[s]=[i,a,c],e[s]=o}return t}function fC(n){if(n==null)return es;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function su(n){return Ma(()=>{let e=z0(n);return G0(e),e})}function z0(n){let e={};return{type:n.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||es,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||ni,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:dC(n.inputs,e),outputs:fC(n.outputs),debugInfo:null}}function G0(n){n.features?.forEach(e=>e(n))}function T_(n,e){return n?()=>{let t=typeof n=="function"?n():n,i=[];for(let r of t){let s=e(r);s!==null&&i.push(s)}return i}:null}function hC(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let s of i.join("|"))e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}var cm=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();var lm=new Oe("");function Ra(n){return!!n&&typeof n.then=="function"}function j0(n){return!!n&&typeof n.subscribe=="function"}var W0=new Oe("");var um=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=le(W0,{optional:!0})??[];injector=le(_i);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=an(this.injector,r);if(Ra(s))t.push(s);else if(j0(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ou=new Oe("");function $0(){ch(()=>{let n="";throw new Ae(600,n)})}function q0(n){return n.isBoundToModule}var pC=10;var to=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=le(bi);afterRenderManager=le(f0);zonelessEnabled=le(ga);rootEffectScheduler=le(Tp);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new on;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=le(_r);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(Pt(t=>!t))}constructor(){le(eo,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=le(Gt);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){return this.bootstrapImpl(t,i)}bootstrapImpl(t,i,r=_i.NULL){return this._injector.get(Dn).run(()=>{bt(at.BootstrapComponentStart);let o=t instanceof iu;if(!this._injector.get(um).done){let g="";throw new Ae(405,g)}let c;o?c=t:c=this._injector.get(Ca).resolveComponentFactory(t),this.componentTypes.push(c.componentType);let l=q0(c)?void 0:this._injector.get(Qs),u=i||c.selector,d=c.create(r,[],u,l),f=d.location.nativeElement,h=d.injector.get(lm,null);return h?.registerApplication(f),d.onDestroy(()=>{this.detachView(d.hostView),_a(this.components,d),h?.unregisterApplication(f)}),this._loadComponent(d),bt(at.BootstrapComponentEnd,d),d})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){bt(at.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(tm.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw bt(at.ChangeDetectionEnd),new Ae(101,!1);let t=Ke(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,Ke(t),this.afterTick.next(),bt(at.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(as,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<pC;){bt(at.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{bt(at.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let t=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!ha(r))continue;let s=i&&!this.zonelessEnabled?0:1;I0(r,s),t=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}t||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>ha(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;_a(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(t),this._injector.get(ou,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>_a(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Ae(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function _a(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function C_(n,e,t,i,r){b0(e,n,t,r?"class":"style",i)}function Yl(n,e,t,i){let r=En(),s=r[Ye],o=n+$n,a=s.firstCreatePass?U0(o,r,2,e,lT,By(),t,i):s.data[o];if(gr(a)){let c=r[xi].tracingService;if(c&&c.componentCreate){let l=s.data[a.directiveStart+a.componentOffset];return c.componentCreate(V0(l),()=>(D_(n,e,r,a,i),Yl))}}return D_(n,e,r,a,i),Yl}function D_(n,e,t,i,r){if(S0(i,t,n,e,X0),Il(i)){let s=t[Ye];_0(s,t,i),t0(s,i,t)}r!=null&&x0(t,i)}function dm(){let n=Pl(),e=Ei(),t=E0(e);return n.firstCreatePass&&B0(n,t),cp(t)&&lp(),ap(),t.classesWithoutHost!=null&&YM(t)&&C_(n,t,En(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&ZM(t)&&C_(n,t,En(),t.stylesWithoutHost,!1),dm}function no(n,e,t,i){return Yl(n,e,t,i),dm(),no}function Qe(n,e,t,i){let r=En(),s=r[Ye],o=n+$n,a=s.firstCreatePass?jT(o,s,2,e,t,i):s.data[o];return S0(a,r,n,e,X0),i!=null&&x0(r,a),Qe}function tt(){let n=Ei(),e=E0(n);return cp(e)&&lp(),ap(),tt}function wi(n,e,t,i){return Qe(n,e,t,i),tt(),wi}var X0=(n,e,t,i,r)=>(_p(!0),n0(e[xn],i,vp()));var Na="en-US";var mC=Na;function Y0(n){typeof n=="string"&&(mC=n.toLowerCase().replace(/_/g,"-"))}function io(n,e,t){let i=En(),r=Pl(),s=Ei();return(s.type&3||t)&&$T(s,r,i,t,i[xn],n,e,WT(s,i,e)),io}function ct(n,e=""){let t=En(),i=Pl(),r=n+$n,s=i.firstCreatePass?om(i,r,1,e,null):i.data[r],o=gC(i,t,s,e);t[r]=o,yp()&&g0(i,t,o,s),ma(s,!1)}var gC=(n,e,t,i)=>(_p(!0),xw(e[xn],i));var Zl=class{ngModuleFactory;componentFactories;constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},fm=(()=>{class n{compileModuleSync(t){return new Xl(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=$h(t),s=s0(r.declarations).reduce((o,a)=>{let c=dr(a);return c&&o.push(new Ks(c)),o},[]);return new Zl(i,s)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Z0=(()=>{class n{applicationErrorHandler=le(bi);appRef=le(to);taskService=le(_r);ngZone=le(Dn);zonelessEnabled=le(ga);tracing=le(eo,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Kt;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(ea):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(le(wp,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let t=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(t);return}this.switchToMicrotaskScheduler(),this.taskService.remove(t)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let t=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})})}notify(t){if(!this.zonelessEnabled&&t===5)return;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?e_:Sp;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(ea+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(t),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function J0(){return[{provide:Vs,useExisting:Z0},{provide:Dn,useClass:ta},{provide:ga,useValue:!0}]}function vC(){return typeof $localize<"u"&&$localize.locale||Na}var hm=new Oe("",{factory:()=>le(hm,{optional:!0,skipSelf:!0})||vC()});function Sr(n){return py(n)}var ex=Symbol("InputSignalNode#UNSET"),NC=xt(de({},Yc),{transformFn:void 0,applyValueToInputSignal(n,e){Rs(n,e)}});function tx(n,e){let t=Object.create(NC);t.value=n,t.transformFn=e?.transform;function i(){if(Go(t),t.value===ex){let r=null;throw new Ae(-950,r)}return t.value}return i[Tn]=t,i}function K0(n,e){return tx(n,e)}function PC(n){return tx(ex,n)}var nx=(K0.required=PC,K0);var pm=new Oe(""),LC=new Oe("");function Pa(n){return!n.moduleRef}function OC(n){let e=Pa(n)?n.r3Injector:n.moduleRef.injector,t=e.get(Dn);return t.run(()=>{Pa(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(bi),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:i})}),Pa(n)){let s=()=>e.destroy(),o=n.platformInjector.get(pm);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(pm);o.add(s),n.moduleRef.onDestroy(()=>{_a(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return kC(i,t,()=>{let s=e.get(_r),o=s.add(),a=e.get(um);return a.runInitializers(),a.donePromise.then(()=>{let c=e.get(hm,Na);if(Y0(c||Na),!e.get(LC,!0))return Pa(n)?e.get(to):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(Pa(n)){let u=e.get(to);return n.rootComponent!==void 0&&u.bootstrap(n.rootComponent),u}else return FC?.(n.moduleRef,n.allPlatformModules),n.moduleRef}).finally(()=>{s.remove(o)})})})}var FC;function kC(n,e,t){try{let i=t();return Ra(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n(i)),i}}var au=null;function UC(n=[],e){return _i.create({name:e,providers:[{provide:sa,useValue:"platform"},{provide:pm,useValue:new Set([()=>au=null])},...n]})}function BC(n=[]){if(au)return au;let e=UC(n);return au=e,$0(),VC(e),e}function VC(n){let e=n.get(Ql,null);an(n,()=>{e?.forEach(t=>t())})}var HC=1e4;var J5=HC-1e3;var mm=(()=>{class n{static __NG_ELEMENT_ID__=zC}return n})();function zC(n){return GC(Ei(),En(),(n&16)===16)}function GC(n,e,t){if(gr(n)&&!t){let i=Si(n.index,e);return new os(i,i)}else if(n.type&175){let i=e[Wn];return new os(i,e)}return null}function ix(n){let{rootComponent:e,appProviders:t,platformProviders:i,platformRef:r}=n;bt(at.BootstrapApplicationStart);try{let s=r?.injector??BC(i),o=[J0(),n_,...t||[]],a=new ba({providers:o,parent:s,debugName:"",runEnvironmentInitializers:!1});return OC({r3Injector:a.injector,platformInjector:s,rootComponent:e})}catch(s){return Promise.reject(s)}finally{bt(at.BootstrapApplicationEnd)}}var rx=null;function $i(){return rx}function gm(n){rx??=n}var La=class{},cu=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:()=>le(sx),providedIn:"platform"})}return n})();var sx=(()=>{class n extends cu{_location;_history;_doc=le(jt);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return $i().getBaseHref(this._doc)}onPopState(t){let i=$i().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=$i().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function cx(n,e){return n?e?n.endsWith("/")?e.startsWith("/")?n+e.slice(1):n+e:e.startsWith("/")?n+e:`${n}/${e}`:n:e}function ox(n){let e=n.search(/#|\?|$/);return n[e-1]==="/"?n.slice(0,e-1)+n.slice(e):n}function Er(n){return n&&n[0]!=="?"?`?${n}`:n}var lu=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:()=>le(WC),providedIn:"root"})}return n})(),jC=new Oe(""),WC=(()=>{class n extends lu{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??le(jt).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return cx(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+Er(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+Er(s));this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+Er(s));this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(We(cu),We(jC,8))};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var so=(()=>{class n{_subject=new on;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=XC(ox(ax(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+Er(i))}normalize(t){return n.stripTrailingSlash(qC(this._basePath,ax(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Er(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Er(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Er;static joinWithSlash=cx;static stripTrailingSlash=ox;static \u0275fac=function(i){return new(i||n)(We(lu))};static \u0275prov=Fe({token:n,factory:()=>$C(),providedIn:"root"})}return n})();function $C(){return new so(We(lu))}function qC(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function ax(n){return n.replace(/\/index\.html$/,"")}function XC(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}var uu=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ia({type:n});static \u0275inj=Hs({})}return n})();function vm(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var Oa=class{};var lx="browser";var Fa=class{_doc;constructor(e){this._doc=e}manager},du=(()=>{class n extends Fa{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,s){return t.addEventListener(i,r,s),()=>this.removeEventListener(t,i,r,s)}removeEventListener(t,i,r,s){return t.removeEventListener(i,r,s)}static \u0275fac=function(i){return new(i||n)(We(jt))};static \u0275prov=Fe({token:n,factory:n.\u0275fac})}return n})(),pu=new Oe(""),Sm=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(o=>{o.manager=this});let r=t.filter(o=>!(o instanceof du));this._plugins=r.slice().reverse();let s=t.find(o=>o instanceof du);s&&this._plugins.push(s)}addEventListener(t,i,r,s){return this._findPluginFor(i).addEventListener(t,i,r,s)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new Ae(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(We(pu),We(Dn))};static \u0275prov=Fe({token:n,factory:n.\u0275fac})}return n})(),ym="ng-app-id";function ux(n){for(let e of n)e.remove()}function dx(n,e){let t=e.createElement("style");return t.textContent=n,t}function ZC(n,e,t,i){let r=n.head?.querySelectorAll(`style[${ym}="${e}"],link[${ym}="${e}"]`);if(r)for(let s of r)s.removeAttribute(ym),s instanceof HTMLLinkElement?i.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function xm(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var Em=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,ZC(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,dx);i?.forEach(r=>this.addUsage(r,this.external,xm))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let s=i.get(t);s?s.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(ux(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])ux(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,dx(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,xm(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(We(jt),We(Kl),We(eu,8),We(Ta))};static \u0275prov=Fe({token:n,factory:n.\u0275fac})}return n})(),_m={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},bm=/%COMP%/g;var hx="%COMP%",JC=`_nghost-${hx}`,KC=`_ngcontent-${hx}`,QC=!0,eD=new Oe("",{factory:()=>QC});function tD(n){return KC.replace(bm,n)}function nD(n){return JC.replace(bm,n)}function px(n,e){return e.map(t=>t.replace(bm,n))}var Mm=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(t,i,r,s,o,a,c=null,l=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.ngZone=a,this.nonce=c,this.tracingService=l,this.defaultRenderer=new ka(t,o,a,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(t,i);return r instanceof hu?r.applyToHost(t):r instanceof Ua&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.tracingService;switch(i.encapsulation){case ai.Emulated:s=new hu(c,l,i,this.appId,u,o,a,d);break;case ai.ShadowDom:return new fu(c,t,i,o,a,this.nonce,d,l);case ai.ExperimentalIsolatedShadowDom:return new fu(c,t,i,o,a,this.nonce,d);default:s=new Ua(c,l,i,u,o,a,d);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(We(Sm),We(Em),We(Kl),We(eD),We(jt),We(Dn),We(eu),We(eo,8))};static \u0275prov=Fe({token:n,factory:n.\u0275fac})}return n})(),ka=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(_m[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(fx(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(fx(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Ae(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=_m[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=_m[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(cs.DashCase|cs.Important)?e.style.setProperty(t,i,r&cs.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&cs.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=$i().getGlobalEventTarget(this.doc,e),!e))throw new Ae(5102,!1);let s=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;e(t)===!1&&t.preventDefault()}}};function fx(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var fu=class extends ka{hostEl;sharedStylesHost;shadowRoot;constructor(e,t,i,r,s,o,a,c){super(e,r,s,a),this.hostEl=t,this.sharedStylesHost=c,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=i.styles;l=px(i.id,l);for(let d of l){let f=document.createElement("style");o&&f.setAttribute("nonce",o),f.textContent=d,this.shadowRoot.appendChild(f)}let u=i.getExternalStyles?.();if(u)for(let d of u){let f=xm(d,r);o&&f.setAttribute("nonce",o),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Ua=class extends ka{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let l=i.styles;this.styles=c?px(c,l):l,this.styleUrls=i.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Js.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},hu=class extends Ua{contentAttr;hostAttr;constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=tD(l),this.hostAttr=nD(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}};var mu=class n extends La{supportsDOMEvents=!0;static makeCurrent(){gm(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=iD();return t==null?null:rD(t)}resetBaseElement(){Ba=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return vm(document.cookie,e)}},Ba=null;function iD(){return Ba=Ba||document.head.querySelector("base"),Ba?Ba.getAttribute("href"):null}function rD(n){return new URL(n,document.baseURI).pathname}var sD=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:n.\u0275fac})}return n})(),mx=["alt","control","meta","shift"],oD={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},aD={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},gx=(()=>{class n extends Fa{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,s){let o=n.parseEventName(i),a=n.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>$i().onAndCancel(t,o.domEventName,a,s))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),mx.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=oD[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),mx.forEach(o=>{if(o!==r){let a=aD[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(We(jt))};static \u0275prov=Fe({token:n,factory:n.\u0275fac})}return n})();async function wm(n,e,t){let i=de({rootComponent:n},cD(e,t));return ix(i)}function cD(n,e){return{platformRef:e?.platformRef,appProviders:[...hD,...n?.providers??[]],platformProviders:fD}}function lD(){mu.makeCurrent()}function uD(){return new ji}function dD(){return Zp(document),document}var fD=[{provide:Ta,useValue:lx},{provide:Ql,useValue:lD,multi:!0},{provide:jt,useFactory:dD}];var hD=[{provide:sa,useValue:"root"},{provide:ji,useFactory:uD},{provide:pu,useClass:du,multi:!0},{provide:pu,useClass:gx,multi:!0},Mm,Em,Sm,{provide:as,useExisting:Mm},{provide:Oa,useClass:sD},[]];var vx=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(We(jt))};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ue="primary",Qa=Symbol("RouteTitle"),Im=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function us(n){return new Im(n)}function Tm(n,e,t){for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(r[0]===":")t[r.substring(1)]=s;else if(r!==s.path)return!1}return!0}function wx(n,e,t){let i=t.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let c={},l=n.slice(0,i.length);return Tm(i,l,c)?{consumed:l,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let s=i.slice(0,r),o=i.slice(r+1);if(s.length+o.length>n.length||t.pathMatch==="full"&&e.hasChildren()&&t.path!=="**")return null;let a={};return!Tm(s,n.slice(0,s.length),a)||!Tm(o,n.slice(n.length-o.length),a)?null:{consumed:n,posParams:a}}function Su(n){return new Promise((e,t)=>{n.pipe(zi()).subscribe({next:i=>e(i),error:i=>t(i)})})}function gD(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!Ti(n[t],e[t]))return!1;return!0}function Ti(n,e){let t=n?Rm(n):void 0,i=e?Rm(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!Tx(n[r],e[r]))return!1;return!0}function Rm(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Tx(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function vD(n){return n.length>0?n[n.length-1]:null}function hs(n){return hl(n)?n:Ra(n)?Vt(Promise.resolve(n)):et(n)}function Cx(n){return hl(n)?Su(n):Promise.resolve(n)}var yD={exact:Ix,subset:Rx},Dx={exact:_D,subset:xD,ignored:()=>!0},Ax={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Nm={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function yx(n,e,t){return yD[t.paths](n.root,e.root,t.matrixParams)&&Dx[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function _D(n,e){return Ti(n,e)}function Ix(n,e,t){if(!ls(n.segments,e.segments)||!yu(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!Ix(n.children[i],e.children[i],t))return!1;return!0}function xD(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>Tx(n[t],e[t]))}function Rx(n,e,t){return Nx(n,e,e.segments,t)}function Nx(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!ls(r,t)||e.hasChildren()||!yu(r,t,i))}else if(n.segments.length===t.length){if(!ls(n.segments,t)||!yu(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!Rx(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!ls(n.segments,r)||!yu(n.segments,r,i)||!n.children[Ue]?!1:Nx(n.children[Ue],e,s,i)}}function yu(n,e,t){return e.every((i,r)=>Dx[t](n[r].parameters,i.parameters))}var Xn=class{root;queryParams;fragment;_queryParamMap;constructor(e=new lt([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=us(this.queryParams),this._queryParamMap}toString(){return bD.serialize(this)}},lt=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return _u(this)}},br=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=us(this.parameters),this._parameterMap}toString(){return Lx(this)}};function SD(n,e){return ls(n,e)&&n.every((t,i)=>Ti(t.parameters,e[i].parameters))}function ls(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function ED(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Ue&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Ue&&(t=t.concat(e(r,i)))}),t}var ec=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:()=>new Mr,providedIn:"root"})}return n})(),Mr=class{parse(e){let t=new Lm(e);return new Xn(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Va(e.root,!0)}`,i=TD(e.queryParams),r=typeof e.fragment=="string"?`#${MD(e.fragment)}`:"";return`${t}${i}${r}`}},bD=new Mr;function _u(n){return n.segments.map(e=>Lx(e)).join("/")}function Va(n,e){if(!n.hasChildren())return _u(n);if(e){let t=n.children[Ue]?Va(n.children[Ue],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==Ue&&i.push(`${r}:${Va(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=ED(n,(i,r)=>r===Ue?[Va(n.children[Ue],!1)]:[`${r}:${Va(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Ue]!=null?`${_u(n)}/${t[0]}`:`${_u(n)}/(${t.join("//")})`}}function Px(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function gu(n){return Px(n).replace(/%3B/gi,";")}function MD(n){return encodeURI(n)}function Pm(n){return Px(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function xu(n){return decodeURIComponent(n)}function _x(n){return xu(n.replace(/\+/g,"%20"))}function Lx(n){return`${Pm(n.path)}${wD(n.parameters)}`}function wD(n){return Object.entries(n).map(([e,t])=>`;${Pm(e)}=${Pm(t)}`).join("")}function TD(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${gu(t)}=${gu(r)}`).join("&"):`${gu(t)}=${gu(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var CD=/^[^\/()?;#]+/;function Cm(n){let e=n.match(CD);return e?e[0]:""}var DD=/^[^\/()?;=#]+/;function AD(n){let e=n.match(DD);return e?e[0]:""}var ID=/^[^=?&#]+/;function RD(n){let e=n.match(ID);return e?e[0]:""}var ND=/^[^&#]+/;function PD(n){let e=n.match(ND);return e?e[0]:""}var Lm=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new lt([],{}):new lt([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(e=0){if(e>50)throw new Ae(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,e));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,e)),(t.length>0||Object.keys(i).length>0)&&(r[Ue]=new lt(t,i)),r}parseSegment(){let e=Cm(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Ae(4009,!1);return this.capture(e),new br(xu(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=AD(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Cm(this.remaining);r&&(i=r,this.capture(i))}e[xu(t)]=xu(i)}parseQueryParam(e){let t=RD(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=PD(this.remaining);o&&(i=o,this.capture(i))}let r=_x(t),s=_x(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e,t){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Cm(this.remaining),s=this.remaining[r.length];if(s!=="/"&&s!==")"&&s!==";")throw new Ae(4010,!1);let o;r.indexOf(":")>-1?(o=r.slice(0,r.indexOf(":")),this.capture(o),this.capture(":")):e&&(o=Ue);let a=this.parseChildren(t+1);i[o??Ue]=Object.keys(a).length===1&&a[Ue]?a[Ue]:new lt([],a),this.consumeOptional("//")}return i}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Ae(4011,!1)}};function Ox(n){return n.segments.length>0?new lt([],{[Ue]:n}):n}function Fx(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=Fx(r);if(i===Ue&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new lt(n.segments,e);return LD(t)}function LD(n){if(n.numberOfChildren===1&&n.children[Ue]){let e=n.children[Ue];return new lt(n.segments.concat(e.segments),e.children)}return n}function lo(n){return n instanceof Xn}function kx(n,e,t=null,i=null,r=new Mr){let s=Ux(n);return Bx(s,e,t,i,r)}function Ux(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new lt(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=Ox(i);return e??r}function Bx(n,e,t,i,r){let s=n;for(;s.parent;)s=s.parent;if(e.length===0)return Dm(s,s,s,t,i,r);let o=OD(e);if(o.toRoot())return Dm(s,s,new lt([],{}),t,i,r);let a=FD(o,s,n),c=a.processChildren?za(a.segmentGroup,a.index,o.commands):Hx(a.segmentGroup,a.index,o.commands);return Dm(s,a.segmentGroup,c,t,i,r)}function Eu(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Wa(n){return typeof n=="object"&&n!=null&&n.outlets}function xx(n,e,t){n||="\u0275";let i=new Xn;return i.queryParams={[n]:e},t.parse(t.serialize(i)).queryParams[n]}function Dm(n,e,t,i,r,s){let o={};for(let[l,u]of Object.entries(i??{}))o[l]=Array.isArray(u)?u.map(d=>xx(l,d,s)):xx(l,u,s);let a;n===e?a=t:a=Vx(n,e,t);let c=Ox(Fx(a));return new Xn(c,o,r)}function Vx(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=Vx(s,e,t)}),new lt(n.segments,i)}var bu=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&Eu(i[0]))throw new Ae(4003,!1);let r=i.find(Wa);if(r&&r!==vD(i))throw new Ae(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function OD(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new bu(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new bu(t,e,i)}var ao=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function FD(n,e,t){if(n.isAbsolute)return new ao(e,!0,0);if(!t)return new ao(e,!1,NaN);if(t.parent===null)return new ao(t,!0,0);let i=Eu(n.commands[0])?0:1,r=t.segments.length-1+i;return kD(t,r,n.numberOfDoubleDots)}function kD(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new Ae(4005,!1);r=i.segments.length}return new ao(i,!1,r-s)}function UD(n){return Wa(n[0])?n[0].outlets:{[Ue]:n}}function Hx(n,e,t){if(n??=new lt([],{}),n.segments.length===0&&n.hasChildren())return za(n,e,t);let i=BD(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new lt(n.segments.slice(0,i.pathIndex),{});return s.children[Ue]=new lt(n.segments.slice(i.pathIndex),n.children),za(s,0,r)}else return i.match&&r.length===0?new lt(n.segments,{}):i.match&&!n.hasChildren()?Om(n,e,t):i.match?za(n,0,r):Om(n,e,t)}function za(n,e,t){if(t.length===0)return new lt(n.segments,{});{let i=UD(t),r={};if(Object.keys(i).some(s=>s!==Ue)&&n.children[Ue]&&n.numberOfChildren===1&&n.children[Ue].segments.length===0){let s=za(n.children[Ue],e,t);return new lt(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=Hx(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new lt(n.segments,r)}}function BD(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(Wa(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!Ex(c,l,o))return s;i+=2}else{if(!Ex(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Om(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(Wa(s)){let c=VD(s.outlets);return new lt(i,c)}if(r===0&&Eu(t[0])){let c=n.segments[e];i.push(new br(c.path,Sx(t[0]))),r++;continue}let o=Wa(s)?s.outlets[Ue]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&Eu(a)?(i.push(new br(o,Sx(a))),r+=2):(i.push(new br(o,{})),r++)}return new lt(i,{})}function VD(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=Om(new lt([],{}),0,i))}),e}function Sx(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function Ex(n,e,t){return n==t.path&&Ti(e,t.parameters)}var Ga="imperative",Xt=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(Xt||{}),Nn=class{id;url;constructor(e,t){this.id=e,this.url=t}},ds=class extends Nn{type=Xt.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Xi=class extends Nn{urlAfterRedirects;type=Xt.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},cn=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(cn||{}),$a=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})($a||{}),qn=class extends Nn{reason;code;type=Xt.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function zx(n){return n instanceof qn&&(n.code===cn.Redirect||n.code===cn.SupersededByNewNavigation)}var Yi=class extends Nn{reason;code;type=Xt.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},fs=class extends Nn{error;target;type=Xt.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},qa=class extends Nn{urlAfterRedirects;state;type=Xt.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Mu=class extends Nn{urlAfterRedirects;state;type=Xt.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},wu=class extends Nn{urlAfterRedirects;state;shouldActivate;type=Xt.GuardsCheckEnd;constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Tu=class extends Nn{urlAfterRedirects;state;type=Xt.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Cu=class extends Nn{urlAfterRedirects;state;type=Xt.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Du=class{route;type=Xt.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Au=class{route;type=Xt.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Iu=class{snapshot;type=Xt.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ru=class{snapshot;type=Xt.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Nu=class{snapshot;type=Xt.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Pu=class{snapshot;type=Xt.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var uo=class{},Xa=class{},fo=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function HD(n){return!(n instanceof uo)&&!(n instanceof fo)&&!(n instanceof Xa)}var Lu=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new go(this.rootInjector)}},go=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new Lu(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(We(Gt))};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ou=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=Fm(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=Fm(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=km(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return km(e,this._root).map(t=>t.value)}};function Fm(n,e){if(n===e.value)return e;for(let t of e.children){let i=Fm(n,t);if(i)return i}return null}function km(n,e){if(n===e.value)return[e];for(let t of e.children){let i=km(n,t);if(i.length)return i.unshift(e),i}return[]}var Rn=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function oo(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var Ya=class extends Ou{snapshot;constructor(e,t){super(e),this.snapshot=t,$m(this,e)}toString(){return this.snapshot.toString()}};function Gx(n,e){let t=zD(n,e),i=new Qt([new br("",{})]),r=new Qt({}),s=new Qt({}),o=new Qt({}),a=new Qt(""),c=new wr(i,r,o,a,s,Ue,n,t.root);return c.snapshot=t.root,new Ya(new Rn(c,[]),t)}function zD(n,e){let t={},i={},r={},o=new ho([],t,r,"",i,Ue,n,null,{},e);return new Za("",new Rn(o,[]))}var wr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(Pt(l=>l[Qa]))??et(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Pt(e=>us(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Pt(e=>us(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Wm(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:de(de({},e.params),n.params),data:de(de({},e.data),n.data),resolve:de(de(de(de({},n.data),e.data),r?.data),n._resolvedData)}:i={params:de({},n.params),data:de({},n.data),resolve:de(de({},n.data),n._resolvedData??{})},r&&Wx(r)&&(i.resolve[Qa]=r.title),i}var ho=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Qa]}constructor(e,t,i,r,s,o,a,c,l,u){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=us(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=us(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Za=class extends Ou{url;constructor(e,t){super(t),this.url=e,$m(this,t)}toString(){return jx(this._root)}};function $m(n,e){e.value._routerState=n,e.children.forEach(t=>$m(n,t))}function jx(n){let e=n.children.length>0?` { ${n.children.map(jx).join(", ")} } `:"";return`${n.value}${e}`}function Am(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,Ti(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),Ti(e.params,t.params)||n.paramsSubject.next(t.params),gD(e.url,t.url)||n.urlSubject.next(t.url),Ti(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Um(n,e){let t=Ti(n.params,e.params)&&SD(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||Um(n.parent,e.parent))}function Wx(n){return typeof n.title=="string"||n.title===null}var $x=new Oe(""),tc=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=Ue;activateEvents=new pn;deactivateEvents=new pn;attachEvents=new pn;detachEvents=new pn;routerOutletData=nx();parentContexts=le(go);location=le(Da);changeDetector=le(mm);inputBinder=le(Bu,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Ae(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Ae(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Ae(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new Ae(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new Bm(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=su({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Jl]})}return n})(),Bm=class{route;childContexts;parent;outletData;constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===wr?this.route:e===go?this.childContexts:e===$x?this.outletData:this.parent.get(e,t)}},Bu=new Oe("");var qm=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=mn({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&no(0,"router-outlet")},dependencies:[tc],encapsulation:2})}return n})();function Xm(n){let e=n.children&&n.children.map(Xm),t=e?xt(de({},n),{children:e}):de({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Ue&&(t.component=qm),t}function GD(n,e,t){let i=Ja(n,e._root,t?t._root:void 0);return new Ya(i,e)}function Ja(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=jD(n,e,t);return new Rn(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>Ja(n,a)),o}}let i=WD(e.value),r=e.children.map(s=>Ja(n,s));return new Rn(i,r)}}function jD(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return Ja(n,i,r);return Ja(n,i)})}function WD(n){return new wr(new Qt(n.url),new Qt(n.params),new Qt(n.queryParams),new Qt(n.fragment),new Qt(n.data),n.outlet,n.component,n)}var po=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},qx="ngNavigationCancelingError";function Fu(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=lo(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=Xx(!1,cn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function Xx(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[qx]=!0,t.cancellationCode=e,t}function $D(n){return Yx(n)&&lo(n.url)}function Yx(n){return!!n&&n[qx]}var Vm=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),Am(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=oo(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=oo(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=oo(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=oo(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new Pu(s.value.snapshot))}),e.children.length&&this.forwardEvent(new Ru(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(Am(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),Am(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,i)}},ku=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},co=class{component;route;constructor(e,t){this.component=e,this.route=t}};function qD(n,e,t){let i=n._root,r=e?e._root:null;return Ha(i,r,t,[i.value])}function XD(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function vo(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!Vh(n)?n:e.get(n):i}function Ha(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=oo(e);return n.children.forEach(o=>{YD(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>ja(a,t.getContext(o),r)),r}function YD(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=ZD(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new ku(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Ha(n,e,a?a.children:null,i,r):Ha(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new co(a.outlet.component,o))}else o&&ja(e,a,r),r.canActivateChecks.push(new ku(i)),s.component?Ha(n,null,a?a.children:null,i,r):Ha(n,null,t,i,r);return r}function ZD(n,e,t){if(typeof t=="function")return an(e._environmentInjector,()=>t(n,e));switch(t){case"pathParamsChange":return!ls(n.url,e.url);case"pathParamsOrQueryParamsChange":return!ls(n.url,e.url)||!Ti(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Um(n,e)||!Ti(n.queryParams,e.queryParams);default:return!Um(n,e)}}function ja(n,e,t){let i=oo(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?ja(o,e.children.getContext(s),t):ja(o,null,t):ja(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new co(e.outlet.component,r)):t.canDeactivateChecks.push(new co(null,r)):t.canDeactivateChecks.push(new co(null,r))}function nc(n){return typeof n=="function"}function JD(n){return typeof n=="boolean"}function KD(n){return n&&nc(n.canLoad)}function QD(n){return n&&nc(n.canActivate)}function eA(n){return n&&nc(n.canActivateChild)}function tA(n){return n&&nc(n.canDeactivate)}function nA(n){return n&&nc(n.canMatch)}function Zx(n){return n instanceof Xr||n?.name==="EmptyError"}var vu=Symbol("INITIAL_VALUE");function mo(){return ti(n=>xh(n.map(e=>e.pipe(Hi(1),Eh(vu)))).pipe(Pt(e=>{for(let t of e)if(t!==!0){if(t===vu)return vu;if(t===!1||iA(t))return t}return!0}),Vi(e=>e!==vu),Hi(1)))}function iA(n){return lo(n)||n instanceof po}function Jx(n){return n.aborted?et(void 0).pipe(Hi(1)):new ot(e=>{let t=()=>{e.next(),e.complete()};return n.addEventListener("abort",t),()=>n.removeEventListener("abort",t)})}function Kx(n){return Zo(Jx(n))}function rA(n){return hn(e=>{let{targetSnapshot:t,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:s}}=e;return s.length===0&&r.length===0?et(xt(de({},e),{guardsResult:!0})):sA(s,t,i).pipe(hn(o=>o&&JD(o)?oA(t,r,n):et(o)),Pt(o=>xt(de({},e),{guardsResult:o})))})}function sA(n,e,t){return Vt(n).pipe(hn(i=>dA(i.component,i.route,t,e)),zi(i=>i!==!0,!0))}function oA(n,e,t){return Vt(e).pipe(pl(i=>ks(cA(i.route.parent,t),aA(i.route,t),uA(n,i.path),lA(n,i.route))),zi(i=>i!==!0,!0))}function aA(n,e){return n!==null&&e&&e(new Nu(n)),et(!0)}function cA(n,e){return n!==null&&e&&e(new Iu(n)),et(!0)}function lA(n,e){let t=e.routeConfig?e.routeConfig.canActivate:null;if(!t||t.length===0)return et(!0);let i=t.map(r=>Xo(()=>{let s=e._environmentInjector,o=vo(r,s),a=QD(o)?o.canActivate(e,n):an(s,()=>o(e,n));return hs(a).pipe(zi())}));return et(i).pipe(mo())}function uA(n,e){let t=e[e.length-1],r=e.slice(0,e.length-1).reverse().map(s=>XD(s)).filter(s=>s!==null).map(s=>Xo(()=>{let o=s.guards.map(a=>{let c=s.node._environmentInjector,l=vo(a,c),u=eA(l)?l.canActivateChild(t,n):an(c,()=>l(t,n));return hs(u).pipe(zi())});return et(o).pipe(mo())}));return et(r).pipe(mo())}function dA(n,e,t,i){let r=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!r||r.length===0)return et(!0);let s=r.map(o=>{let a=e._environmentInjector,c=vo(o,a),l=tA(c)?c.canDeactivate(n,e,t,i):an(a,()=>c(n,e,t,i));return hs(l).pipe(zi())});return et(s).pipe(mo())}function fA(n,e,t,i,r){let s=e.canLoad;if(s===void 0||s.length===0)return et(!0);let o=s.map(a=>{let c=vo(a,n),l=KD(c)?c.canLoad(e,t):an(n,()=>c(e,t)),u=hs(l);return r?u.pipe(Kx(r)):u});return et(o).pipe(mo(),Qx(i))}function Qx(n){return gh(zn(e=>{if(typeof e!="boolean")throw Fu(n,e)}),Pt(e=>e===!0))}function hA(n,e,t,i,r,s){let o=e.canMatch;if(!o||o.length===0)return et(!0);let a=o.map(c=>{let l=vo(c,n),u=nA(l)?l.canMatch(e,t,r):an(n,()=>l(e,t,r));return hs(u).pipe(Kx(s))});return et(a).pipe(mo(),Qx(i))}var qi=class n extends Error{segmentGroup;constructor(e){super(),this.segmentGroup=e||null,Object.setPrototypeOf(this,n.prototype)}},Ka=class n extends Error{urlTree;constructor(e){super(),this.urlTree=e,Object.setPrototypeOf(this,n.prototype)}};function pA(n){throw new Ae(4e3,!1)}function mA(n){throw Xx(!1,cn.GuardRejected)}var Hm=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}async lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[Ue])throw pA(`${e.redirectTo}`);r=r.children[Ue]}}async applyRedirectCommands(e,t,i,r,s){let o=await gA(t,r,s);if(o instanceof Xn)throw new Ka(o);let a=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),e,i);if(o[0]==="/")throw new Ka(a);return a}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new Xn(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new lt(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Ae(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}};function gA(n,e,t){if(typeof n=="string")return Promise.resolve(n);let i=n;return Su(hs(an(t,()=>i(e))))}function vA(n,e){return n.providers&&!n._injector&&(n._injector=Aa(n.providers,e,`Route: ${n.path}`)),n._injector??e}function ci(n){return n.outlet||Ue}function yA(n,e){let t=n.filter(i=>ci(i)===e);return t.push(...n.filter(i=>ci(i)!==e)),t}var zm={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function eS(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function _A(n,e,t,i,r,s,o){let a=tS(n,e,t);if(!a.matched)return et(a);let c=eS(s(a));return i=vA(e,i),hA(i,e,t,r,c,o).pipe(Pt(l=>l===!0?a:de({},zm)))}function tS(n,e,t){if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?de({},zm):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||wx)(t,n,e);if(!r)return de({},zm);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?de(de({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function bx(n,e,t,i,r){return t.length>0&&EA(n,t,i,r)?{segmentGroup:new lt(e,SA(i,new lt(t,n.children))),slicedSegments:[]}:t.length===0&&bA(n,t,i)?{segmentGroup:new lt(n.segments,xA(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new lt(n.segments,n.children),slicedSegments:t}}function xA(n,e,t,i){let r={};for(let s of t)if(Vu(n,e,s)&&!i[ci(s)]){let o=new lt([],{});r[ci(s)]=o}return de(de({},i),r)}function SA(n,e){let t={};t[Ue]=e;for(let i of n)if(i.path===""&&ci(i)!==Ue){let r=new lt([],{});t[ci(i)]=r}return t}function EA(n,e,t,i){return t.some(r=>!Vu(n,e,r)||!(ci(r)!==Ue)?!1:!(i!==void 0&&ci(r)===i))}function bA(n,e,t){return t.some(i=>Vu(n,e,i))}function Vu(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function MA(n,e,t){return e.length===0&&!n.children[t]}var Gm=class{};async function wA(n,e,t,i,r,s,o="emptyOnly",a){return new jm(n,e,t,i,r,o,s,a).recognize()}var TA=31,jm=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,s,o,a,c){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.abortSignal=c,this.applyRedirects=new Hm(this.urlSerializer,this.urlTree)}noMatchError(e){return new Ae(4002,`'${e.segmentGroup}'`)}async recognize(){let e=bx(this.urlTree.root,[],[],this.config).segmentGroup,{children:t,rootSnapshot:i}=await this.match(e),r=new Rn(i,t),s=new Za("",r),o=kx(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}async match(e){let t=new ho([],Object.freeze({}),Object.freeze(de({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Ue,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,e,Ue,t),rootSnapshot:t}}catch(i){if(i instanceof Ka)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof qi?this.noMatchError(i):i}}async processSegmentGroup(e,t,i,r,s){if(i.segments.length===0&&i.hasChildren())return this.processChildren(e,t,i,s);let o=await this.processSegment(e,t,i,i.segments,r,!0,s);return o instanceof Rn?[o]:[]}async processChildren(e,t,i,r){let s=[];for(let c of Object.keys(i.children))c==="primary"?s.unshift(c):s.push(c);let o=[];for(let c of s){let l=i.children[c],u=yA(t,c),d=await this.processSegmentGroup(e,u,l,c,r);o.push(...d)}let a=nS(o);return CA(a),a}async processSegment(e,t,i,r,s,o,a){for(let c of t)try{return await this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,s,o,a)}catch(l){if(l instanceof qi||Zx(l))continue;throw l}if(MA(i,r,s))return new Gm;throw new qi(i)}async processSegmentAgainstRoute(e,t,i,r,s,o,a,c){if(ci(i)!==o&&(o===Ue||!Vu(r,s,i)))throw new qi(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(e,r,i,s,o,c);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o,c);throw new qi(r)}async expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:f}=tS(t,r,s);if(!c)throw new qi(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>TA&&(this.allowRedirects=!1));let h=this.createSnapshot(e,r,s,l,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let g=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,eS(h),e),x=await this.applyRedirects.lineralizeSegments(r,g);return this.processSegment(e,i,t,x.concat(f),o,!1,a)}createSnapshot(e,t,i,r,s){let o=new ho(i,r,Object.freeze(de({},this.urlTree.queryParams)),this.urlTree.fragment,AA(t),ci(t),t.component??t._loadedComponent??null,t,IA(t),e),a=Wm(o,s,this.paramsInheritanceStrategy);return o.params=Object.freeze(a.params),o.data=Object.freeze(a.data),o}async matchSegmentAgainstRoute(e,t,i,r,s,o){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=b=>this.createSnapshot(e,i,b.consumedSegments,b.parameters,o),c=await Su(_A(t,i,r,e,this.urlSerializer,a,this.abortSignal));if(i.path==="**"&&(t.children={}),!c?.matched)throw new qi(t);e=i._injector??e;let{routes:l}=await this.getChildConfig(e,i,r),u=i._loadedInjector??e,{parameters:d,consumedSegments:f,remainingSegments:h}=c,g=this.createSnapshot(e,i,f,d,o),{segmentGroup:x,slicedSegments:m}=bx(t,f,h,l,s);if(m.length===0&&x.hasChildren()){let b=await this.processChildren(u,l,x,g);return new Rn(g,b)}if(l.length===0&&m.length===0)return new Rn(g,[]);let p=ci(i)===s,E=await this.processSegment(u,l,x,m,p?Ue:s,!0,g);return new Rn(g,E instanceof Rn?[E]:[])}async getChildConfig(e,t,i){if(t.children)return{routes:t.children,injector:e};if(t.loadChildren){if(t._loadedRoutes!==void 0){let s=t._loadedNgModuleFactory;return s&&!t._loadedInjector&&(t._loadedInjector=s.create(e).injector),{routes:t._loadedRoutes,injector:t._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Su(fA(e,t,i,this.urlSerializer,this.abortSignal))){let s=await this.configLoader.loadChildren(e,t);return t._loadedRoutes=s.routes,t._loadedInjector=s.injector,t._loadedNgModuleFactory=s.factory,s}throw mA(t)}return{routes:[],injector:e}}};function CA(n){n.sort((e,t)=>e.value.outlet===Ue?-1:t.value.outlet===Ue?1:e.value.outlet.localeCompare(t.value.outlet))}function DA(n){let e=n.value.routeConfig;return e&&e.path===""}function nS(n){let e=[],t=new Set;for(let i of n){if(!DA(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=nS(i.children);e.push(new Rn(i.value,r))}return e.filter(i=>!t.has(i))}function AA(n){return n.data||{}}function IA(n){return n.resolve||{}}function RA(n,e,t,i,r,s,o){return hn(async a=>{let{state:c,tree:l}=await wA(n,e,t,i,a.extractedUrl,r,s,o);return xt(de({},a),{targetSnapshot:c,urlAfterRedirects:l})})}function NA(n){return hn(e=>{let{targetSnapshot:t,guards:{canActivateChecks:i}}=e;if(!i.length)return et(e);let r=new Set(i.map(a=>a.route)),s=new Set;for(let a of r)if(!s.has(a))for(let c of iS(a))s.add(c);let o=0;return Vt(s).pipe(pl(a=>r.has(a)?PA(a,t,n):(a.data=Wm(a,a.parent,n).resolve,et(void 0))),zn(()=>o++),ml(1),hn(a=>o===s.size?et(e):en))})}function iS(n){let e=n.children.map(t=>iS(t)).flat();return[n,...e]}function PA(n,e,t){let i=n.routeConfig,r=n._resolve;return i?.title!==void 0&&!Wx(i)&&(r[Qa]=i.title),Xo(()=>(n.data=Wm(n,n.parent,t).resolve,LA(r,n,e).pipe(Pt(s=>(n._resolvedData=s,n.data=de(de({},n.data),s),null)))))}function LA(n,e,t){let i=Rm(n);if(i.length===0)return et({});let r={};return Vt(i).pipe(hn(s=>OA(n[s],e,t).pipe(zi(),zn(o=>{if(o instanceof po)throw Fu(new Mr,o);r[s]=o}))),ml(1),Pt(()=>r),Yo(s=>Zx(s)?en:_h(s)))}function OA(n,e,t){let i=e._environmentInjector,r=vo(n,i),s=r.resolve?r.resolve(e,t):an(i,()=>r(e,t));return hs(s)}function Mx(n){return ti(e=>{let t=n(e);return t?Vt(t).pipe(Pt(()=>e)):et(e)})}var Ym=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(s=>s.outlet===Ue);return i}getResolvedTitleForRoute(t){return t.data[Qa]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:()=>le(rS),providedIn:"root"})}return n})(),rS=(()=>{class n extends Ym{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(We(vx))};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ic=new Oe("",{factory:()=>({})}),rc=new Oe(""),sS=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=le(fm);async loadComponent(t,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let s=await Cx(an(t,()=>i.loadComponent())),o=await cS(aS(s));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=o,o}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let s=await oS(i,this.compiler,t,this.onLoadEndListener);return i._loadedRoutes=s.routes,i._loadedInjector=s.injector,i._loadedNgModuleFactory=s.factory,s}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();async function oS(n,e,t,i){let r=await Cx(an(t,()=>n.loadChildren())),s=await cS(aS(r)),o;s instanceof ru||Array.isArray(s)?o=s:o=await e.compileModuleAsync(s),i&&i(n);let a,c,l=!1,u;return Array.isArray(o)?(c=o,l=!0):(a=o.create(t).injector,u=o,c=a.get(rc,[],{optional:!0,self:!0}).flat()),{routes:c.map(Xm),injector:a,factory:u}}function FA(n){return n&&typeof n=="object"&&"default"in n}function aS(n){return FA(n)?n.default:n}async function cS(n){return n}var Hu=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:()=>le(kA),providedIn:"root"})}return n})(),kA=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),lS=new Oe("");var UA=()=>{},uS=new Oe(""),dS=(()=>{class n{currentNavigation=xr(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=xr(null);events=new on;transitionAbortWithErrorSubject=new on;configLoader=le(sS);environmentInjector=le(Gt);destroyRef=le(yr);urlSerializer=le(ec);rootContexts=le(go);location=le(so);inputBindingEnabled=le(Bu,{optional:!0})!==null;titleStrategy=le(Ym);options=le(ic,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=le(Hu);createViewTransition=le(lS,{optional:!0});navigationErrorHandler=le(uS,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>et(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new Du(r)),i=r=>this.events.next(new Au(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;Sr(()=>{this.transitions?.next(xt(de({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(t){return this.transitions=new Qt(null),this.transitions.pipe(Vi(i=>i!==null),ti(i=>{let r=!1,s=new AbortController,o=()=>!r&&this.currentTransition?.id===i.id;return et(i).pipe(ti(a=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",cn.SupersededByNewNavigation),en;this.currentTransition=i;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:c?xt(de({},c),{previousNavigation:null}):null,abort:()=>s.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let l=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=a.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!l&&u!=="reload")return this.events.next(new Yi(a.id,this.urlSerializer.serialize(a.rawUrl),"",$a.IgnoredSameUrlNavigation)),a.resolve(!1),en;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return et(a).pipe(ti(d=>(this.events.next(new ds(d.id,this.urlSerializer.serialize(d.extractedUrl),d.source,d.restoredState)),d.id!==this.navigationId?en:Promise.resolve(d))),RA(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy,s.signal),zn(d=>{i.targetSnapshot=d.targetSnapshot,i.urlAfterRedirects=d.urlAfterRedirects,this.currentNavigation.update(f=>(f.finalUrl=d.urlAfterRedirects,f)),this.events.next(new Xa)}),ti(d=>Vt(i.routesRecognizeHandler.deferredHandle??et(void 0)).pipe(Pt(()=>d))),zn(()=>{let d=new qa(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(d)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:d,extractedUrl:f,source:h,restoredState:g,extras:x}=a,m=new ds(d,this.urlSerializer.serialize(f),h,g);this.events.next(m);let p=Gx(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=xt(de({},a),{targetSnapshot:p,urlAfterRedirects:f,extras:xt(de({},x),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(E=>(E.finalUrl=f,E)),et(i)}else return this.events.next(new Yi(a.id,this.urlSerializer.serialize(a.extractedUrl),"",$a.IgnoredByUrlHandlingStrategy)),a.resolve(!1),en}),Pt(a=>{let c=new Mu(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(c),this.currentTransition=i=xt(de({},a),{guards:qD(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),i}),rA(a=>this.events.next(a)),ti(a=>{if(i.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw Fu(this.urlSerializer,a.guardsResult);let c=new wu(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(c),!o())return en;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",cn.GuardRejected),en;if(a.guards.canActivateChecks.length===0)return et(a);let l=new Tu(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(l),!o())return en;let u=!1;return et(a).pipe(NA(this.paramsInheritanceStrategy),zn({next:()=>{u=!0;let d=new Cu(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(d)},complete:()=>{u||this.cancelNavigationTransition(a,"",cn.NoDataFromResolver)}}))}),Mx(a=>{let c=u=>{let d=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let f=u._environmentInjector;d.push(this.configLoader.loadComponent(f,u.routeConfig).then(h=>{u.component=h}))}for(let f of u.children)d.push(...c(f));return d},l=c(a.targetSnapshot.root);return l.length===0?et(a):Vt(Promise.all(l).then(()=>a))}),Mx(()=>this.afterPreactivation()),ti(()=>{let{currentSnapshot:a,targetSnapshot:c}=i,l=this.createViewTransition?.(this.environmentInjector,a.root,c.root);return l?Vt(l).pipe(Pt(()=>i)):et(i)}),Hi(1),ti(a=>{let c=GD(t.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);this.currentTransition=i=a=xt(de({},a),{targetRouterState:c}),this.currentNavigation.update(u=>(u.targetRouterState=c,u)),this.events.next(new uo);let l=i.beforeActivateHandler.deferredHandle;return l?Vt(l.then(()=>a)):et(a)}),zn(a=>{new Vm(t.routeReuseStrategy,i.targetRouterState,i.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),o()&&(r=!0,this.currentNavigation.update(c=>(c.abort=UA,c)),this.lastSuccessfulNavigation.set(Sr(this.currentNavigation)),this.events.next(new Xi(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),Zo(Jx(s.signal).pipe(Vi(()=>!r&&!i.targetRouterState),zn(()=>{this.cancelNavigationTransition(i,s.signal.reason+"",cn.Aborted)}))),zn({complete:()=>{r=!0}}),Zo(this.transitionAbortWithErrorSubject.pipe(zn(a=>{throw a}))),Sh(()=>{s.abort(),r||this.cancelNavigationTransition(i,"",cn.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Yo(a=>{if(r=!0,this.destroyed)return i.resolve(!1),en;if(Yx(a))this.events.next(new qn(i.id,this.urlSerializer.serialize(i.extractedUrl),a.message,a.cancellationCode)),$D(a)?this.events.next(new fo(a.url,a.navigationBehaviorOptions)):i.resolve(!1);else{let c=new fs(i.id,this.urlSerializer.serialize(i.extractedUrl),a,i.targetSnapshot??void 0);try{let l=an(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(l instanceof po){let{message:u,cancellationCode:d}=Fu(this.urlSerializer,l);this.events.next(new qn(i.id,this.urlSerializer.serialize(i.extractedUrl),u,d)),this.events.next(new fo(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(c),a}catch(l){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(l)}}return en}))}))}cancelNavigationTransition(t,i,r){let s=new qn(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=Sr(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return t.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function BA(n){return n!==Ga}var fS=new Oe("");var hS=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:()=>le(VA),providedIn:"root"})}return n})(),Uu=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}shouldDestroyInjector(e){return!0}},VA=(()=>{class n extends Uu{static \u0275fac=(()=>{let t;return function(r){return(t||(t=wa(n)))(r||n)}})();static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Zm=(()=>{class n{urlSerializer=le(ec);options=le(ic,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=le(so);urlHandlingStrategy=le(Hu);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Xn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:i,targetBrowserUrl:r}){let s=t!==void 0?this.urlHandlingStrategy.merge(t,i):i,o=r??s;return o instanceof Xn?this.urlSerializer.serialize(o):o}routerUrlState(t){return t?.targetBrowserUrl===void 0||t?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(t.finalUrl)}}commitTransition({targetRouterState:t,finalUrl:i,initialUrl:r}){i&&t?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=t):this.rawUrlTree=r}routerState=Gx(null,le(Gt));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:()=>le(HA),providedIn:"root"})}return n})(),HA=(()=>{class n extends Zm{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{t(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(t,i){t instanceof ds?this.updateStateMemento():t instanceof Yi?this.commitTransition(i):t instanceof qa?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof uo?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof qn&&!zx(t)?this.restoreHistory(i):t instanceof fs?this.restoreHistory(i,!0):t instanceof Xi&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,i){let{extras:r,id:s}=i,{replaceUrl:o,state:a}=r;if(this.location.isCurrentPathEqualTo(t)||o){let c=this.browserPageId,l=de(de({},a),this.generateNgRouterState(s,c,i));this.location.replaceState(t,"",l)}else{let c=de(de({},a),this.generateNgRouterState(s,this.browserPageId+1,i));this.location.go(t,"",c)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.getCurrentUrlTree()===t.finalUrl&&s===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i,r){return this.canceledNavigationResolution==="computed"?de({navigationId:t,\u0275routerPageId:i},this.routerUrlState(r)):de({navigationId:t},this.routerUrlState(r))}static \u0275fac=(()=>{let t;return function(r){return(t||(t=wa(n)))(r||n)}})();static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Jm(n,e){n.events.pipe(Vi(t=>t instanceof Xi||t instanceof qn||t instanceof fs||t instanceof Yi),Pt(t=>t instanceof Xi||t instanceof Yi?0:(t instanceof qn?t.code===cn.Redirect||t.code===cn.SupersededByNewNavigation:!1)?2:1),Vi(t=>t!==2),Hi(1)).subscribe(()=>{e()})}var zu=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=le(cm);stateManager=le(Zm);options=le(ic,{optional:!0})||{};pendingTasks=le(_r);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=le(dS);urlSerializer=le(ec);location=le(so);urlHandlingStrategy=le(Hu);injector=le(Gt);_events=new on;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=le(hS);injectorCleanup=le(fS,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=le(rc,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!le(Bu,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Kt;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,s=Sr(this.navigationTransitions.currentNavigation);if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof qn&&i.code!==cn.Redirect&&i.code!==cn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Xi)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof fo){let o=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=de({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||BA(r.source)},o);this.scheduleNavigation(a,Ga,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}HD(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ga,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i,r,s)=>{this.navigateToSyncWithBrowser(t,r,i,s)})}navigateToSyncWithBrowser(t,i,r,s){let o=r?.navigationId?r:null,a=r?.\u0275routerUrl??t;if(r?.\u0275routerUrl&&(s=xt(de({},s),{browserUrl:t})),r){let l=de({},r);delete l.navigationId,delete l.\u0275routerPageId,delete l.\u0275routerUrl,Object.keys(l).length!==0&&(s.state=l)}let c=this.parseUrl(a);this.scheduleNavigation(c,i,o,s).catch(l=>{this.disposed||this.injector.get(bi)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Sr(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Xm),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=de(de({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let f=r?r.snapshot:this.routerState.snapshot.root;d=Ux(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return Bx(d,t,u,l??null,this.urlSerializer)}navigateByUrl(t,i={skipLocationChange:!1}){let r=lo(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,Ga,null,i)}navigate(t,i={skipLocationChange:!1}){return zA(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.console.warn(na(4018,!1)),this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=de({},Ax):i===!1?r=de({},Nm):r=de(de({},Nm),i),lo(t))return yx(this.currentUrlTree,t,r);let s=this.parseUrl(t);return yx(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,s])=>(s!=null&&(i[r]=s),i),{})}scheduleNavigation(t,i,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((d,f)=>{a=d,c=f});let u=this.pendingTasks.add();return Jm(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function zA(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Ae(4008,!1)}var WA=new Oe("");function Km(n,...e){return zs([{provide:rc,multi:!0,useValue:n},[],{provide:wr,useFactory:$A},{provide:ou,multi:!0,useFactory:qA},e.map(t=>t.\u0275providers)])}function $A(){return le(zu).routerState.root}function qA(){let n=le(_i);return e=>{let t=n.get(to);if(e!==t.components[0])return;let i=n.get(zu),r=n.get(XA);n.get(YA)===1&&i.initialNavigation(),n.get(ZA,null,{optional:!0})?.setUpPreloading(),n.get(WA,null,{optional:!0})?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var XA=new Oe("",{factory:()=>new on}),YA=new Oe("",{factory:()=>1});var ZA=new Oe("");var Yn=class{constructor(e=0,t="Network Error"){this.status=e,this.text=t}};var pS=()=>{if(!(typeof localStorage>"u"))return{get:n=>Promise.resolve(localStorage.getItem(n)),set:(n,e)=>Promise.resolve(localStorage.setItem(n,e)),remove:n=>Promise.resolve(localStorage.removeItem(n))}};var Bt={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:pS()};var yo=n=>n?typeof n=="string"?{publicKey:n}:n.toString()==="[object Object]"?n:{}:{};var mS=(n,e="https://api.emailjs.com")=>{if(!n)return;let t=yo(n);Bt.publicKey=t.publicKey,Bt.blockHeadless=t.blockHeadless,Bt.storageProvider=t.storageProvider,Bt.blockList=t.blockList,Bt.limitRate=t.limitRate,Bt.origin=t.origin||e};var Gu=async(n,e,t={})=>{let i=await fetch(Bt.origin+n,{method:"POST",headers:t,body:e}),r=await i.text(),s=new Yn(i.status,r);if(i.ok)return s;throw s};var ju=(n,e,t)=>{if(!n||typeof n!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"};var gS=n=>{if(n&&n.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"};var Wu=n=>n.webdriver||!n.languages||n.languages.length===0;var $u=()=>new Yn(451,"Unavailable For Headless Browser");var vS=(n,e)=>{if(!Array.isArray(n))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"};var KA=n=>!n.list?.length||!n.watchVariable,QA=(n,e)=>n instanceof FormData?n.get(e):n[e],qu=(n,e)=>{if(KA(n))return!1;vS(n.list,n.watchVariable);let t=QA(e,n.watchVariable);return typeof t!="string"?!1:n.list.includes(t)};var Xu=()=>new Yn(403,"Forbidden");var yS=(n,e)=>{if(typeof n!="number"||n<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"};var eI=async(n,e,t)=>{let i=Number(await t.get(n)||0);return e-Date.now()+i},Yu=async(n,e,t)=>{if(!e.throttle||!t)return!1;yS(e.throttle,e.id);let i=e.id||n;return await eI(i,e.throttle,t)>0?!0:(await t.set(i,Date.now().toString()),!1)};var Zu=()=>new Yn(429,"Too Many Requests");var _S=async(n,e,t,i)=>{let r=yo(i),s=r.publicKey||Bt.publicKey,o=r.blockHeadless||Bt.blockHeadless,a=r.storageProvider||Bt.storageProvider,c=de(de({},Bt.blockList),r.blockList),l=de(de({},Bt.limitRate),r.limitRate);return o&&Wu(navigator)?Promise.reject($u()):(ju(s,n,e),gS(t),t&&qu(c,t)?Promise.reject(Xu()):await Yu(location.pathname,l,a)?Promise.reject(Zu()):Gu("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"}))};var xS=n=>{if(!n||n.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"};var tI=n=>typeof n=="string"?document.querySelector(n):n,SS=async(n,e,t,i)=>{let r=yo(i),s=r.publicKey||Bt.publicKey,o=r.blockHeadless||Bt.blockHeadless,a=Bt.storageProvider||r.storageProvider,c=de(de({},Bt.blockList),r.blockList),l=de(de({},Bt.limitRate),r.limitRate);if(o&&Wu(navigator))return Promise.reject($u());let u=tI(t);ju(s,n,e),xS(u);let d=new FormData(u);return qu(c,d)?Promise.reject(Xu()):await Yu(location.pathname,l,a)?Promise.reject(Zu()):(d.append("lib_version","4.4.1"),d.append("service_id",n),d.append("template_id",e),d.append("user_id",s),Gu("/api/v1.0/email/send-form",d))};var ES={init:mS,send:_S,sendForm:SS,EmailJSResponseStatus:Yn};var Ju=class n{sendEmail(e){e.preventDefault(),ES.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",e.target,"YOUR_PUBLIC_KEY")}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=mn({type:n,selectors:[["app-contact"]],decls:10,vars:0,consts:[["id","contact",1,"py-24","bg-gray-950","text-white","px-6"],[1,"max-w-xl","mx-auto"],[1,"text-4xl","font-bold","mb-8","text-center"],[1,"space-y-4",3,"submit"],["placeholder","Name","name","name",1,"w-full","p-3","bg-black","border","rounded"],["placeholder","Email","name","email",1,"w-full","p-3","bg-black","border","rounded"],["placeholder","Message","name","message",1,"w-full","p-3","bg-black","border","rounded"],[1,"w-full","bg-blue-500","py-3","rounded","hover:bg-blue-600"]],template:function(t,i){t&1&&(Qe(0,"section",0)(1,"div",1)(2,"h2",2),ct(3,"Contact Me"),tt(),Qe(4,"form",3),io("submit",function(s){return i.sendEmail(s)}),wi(5,"input",4)(6,"input",5)(7,"textarea",6),Qe(8,"button",7),ct(9," Send Message "),tt()()()())},encapsulation:2})};var Ku=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=mn({type:n,selectors:[["app-projects"]],decls:19,vars:0,consts:[["id","projects",1,"py-24","bg-black","text-white","px-6"],[1,"text-4xl","font-bold","text-center","mb-12"],[1,"grid","md:grid-cols-3","gap-6","max-w-6xl","mx-auto"],[1,"bg-gray-900","p-6","rounded-2xl","hover:scale-105","transition","cursor-pointer"],[1,"text-xl","font-semibold"],[1,"text-gray-400"]],template:function(t,i){t&1&&(Qe(0,"section",0)(1,"h2",1),ct(2,"Projects"),tt(),Qe(3,"div",2)(4,"div",3)(5,"h3",4),ct(6,"ERP System"),tt(),Qe(7,"p",5),ct(8,"Microservices ERP with .NET + Angular"),tt()(),Qe(9,"div",3)(10,"h3",4),ct(11,"HCM Platform"),tt(),Qe(12,"p",5),ct(13,"HR management system with CI/CD"),tt()(),Qe(14,"div",3)(15,"h3",4),ct(16,"Finance System"),tt(),Qe(17,"p",5),ct(18,"Enterprise financial module"),tt()()()())},encapsulation:2})};var Qu=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=mn({type:n,selectors:[["app-about"]],decls:26,vars:0,consts:[["id","about",1,"py-24","bg-gray-950","text-white","px-6"],[1,"max-w-5xl","mx-auto","grid","md:grid-cols-2","gap-10"],[1,"text-4xl","font-bold","mb-4"],[1,"text-gray-400","leading-relaxed"],[1,"text-xl","mb-3"],[1,"space-y-3"],[1,"w-full","bg-gray-800","h-2","rounded"],[1,"bg-blue-500","h-2","w-[95%]"],[1,"bg-blue-500","h-2","w-[90%]"],[1,"bg-blue-500","h-2","w-[85%]"]],template:function(t,i){t&1&&(Qe(0,"section",0)(1,"div",1)(2,"div")(3,"h2",2),ct(4,"About Me"),tt(),Qe(5,"p",3),ct(6," Senior Software Engineer with expertise in .NET, Angular, Azure, and Microservices. I design scalable ERP systems, HRM platforms, and enterprise architectures. "),tt()(),Qe(7,"div")(8,"h3",4),ct(9,"Core Skills"),tt(),Qe(10,"div",5)(11,"div")(12,"p"),ct(13,".NET / C#"),tt(),Qe(14,"div",6),wi(15,"div",7),tt()(),Qe(16,"div")(17,"p"),ct(18,"Angular"),tt(),Qe(19,"div",6),wi(20,"div",8),tt()(),Qe(21,"div")(22,"p"),ct(23,"Azure / DevOps"),tt(),Qe(24,"div",6),wi(25,"div",9),tt()()()()()())},encapsulation:2})};var tb=Sb(bS());var zS=0,Ng=1,GS=2;var Ac=1,jS=2,Fo=3,nr=0,gn=1,Li=2,Oi=0,xs=1,Pg=2,Lg=3,Og=4,WS=5;var Pr=100,$S=101,qS=102,XS=103,YS=104,ZS=200,JS=201,KS=202,QS=203,Sd=204,Ed=205,eE=206,tE=207,nE=208,iE=209,rE=210,sE=211,oE=212,aE=213,cE=214,bd=0,Md=1,wd=2,Ss=3,Td=4,Cd=5,Dd=6,Ad=7,Fg=0,lE=1,uE=2,hi=0,kg=1,Ug=2,Bg=3,Vg=4,Hg=5,zg=6,Gg=7;var bg=300,Br=301,Ms=302,ef=303,tf=304,Ic=306,Id=1e3,Ai=1001,Rd=1002,Zt=1003,dE=1004;var Rc=1005;var nn=1006,nf=1007;var Vr=1008;var Vn=1009,jg=1010,Wg=1011,ko=1012,rf=1013,pi=1014,mi=1015,Fi=1016,sf=1017,of=1018,Uo=1020,$g=35902,qg=35899,Xg=1021,Yg=1022,Kn=1023,Ii=1026,Hr=1027,Zg=1028,af=1029,zr=1030,cf=1031;var lf=1033,Nc=33776,Pc=33777,Lc=33778,Oc=33779,uf=35840,df=35841,ff=35842,hf=35843,pf=36196,mf=37492,gf=37496,vf=37488,yf=37489,Fc=37490,_f=37491,xf=37808,Sf=37809,Ef=37810,bf=37811,Mf=37812,wf=37813,Tf=37814,Cf=37815,Df=37816,Af=37817,If=37818,Rf=37819,Nf=37820,Pf=37821,Lf=36492,Of=36494,Ff=36495,kf=36283,Uf=36284,kc=36285,Bf=36286;var dc=2300,Nd=2301,xd=2302,Mg=2303,wg=2400,Tg=2401,Cg=2402;var fE=3200;var Jg=0,hE=1,rr="",On="srgb",fc="srgb-linear",hc="linear",pt="srgb";var ys=7680;var Dg=519,pE=512,mE=513,gE=514,Vf=515,vE=516,yE=517,Hf=518,_E=519,Ag=35044;var Kg="300 es",fi=2e3,pc=2001;function nI(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function iI(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function mc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xE(){let n=mc("canvas");return n.style.display="block",n}var MS={},No=null;function Qg(...n){let e="THREE."+n.shift();No?No("log",e,...n):console.log(e,...n)}function SE(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ne(...n){n=SE(n);let e="THREE."+n.shift();if(No)No("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Le(...n){n=SE(n);let e="THREE."+n.shift();if(No)No("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Pd(...n){let e=n.join(" ");e in MS||(MS[e]=!0,Ne(...n))}function EE(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var bE={[bd]:Md,[wd]:Dd,[Td]:Ad,[Ss]:Cd,[Md]:bd,[Dd]:wd,[Ad]:Td,[Cd]:Ss},Ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var eg=Math.PI/180,Ld=180/Math.PI;function Uc(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function rI(n,e){return(n%e+e)%e}function tg(n,e,t){return(1-t)*n+t*e}function oc(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function bn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var mt=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ni=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],g=s[o+2],x=s[o+3];if(d!==x||c!==f||l!==h||u!==g){let m=c*f+l*h+u*g+d*x;m<0&&(f=-f,h=-h,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let E=Math.acos(m),b=Math.sin(E);p=Math.sin(p*E)/b,a=Math.sin(a*E)/b,c=c*p+f*a,l=l*p+h*a,u=u*p+g*a,d=d*p+x*a}else{c=c*p+f*a,l=l*p+h*a,u=u*p+g*a,d=d*p+x*a;let E=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=E,l*=E,u*=E,d*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*h-l*f,e[t+1]=c*g+u*f+l*d-a*h,e[t+2]=l*g+u*h+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),h=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},j=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wS.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wS.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ng.copy(this).projectOnVector(e),this.sub(ng)}reflect(e){return this.sub(ng.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ng=new j,wS=new Ni,Be=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,r,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],x=r[0],m=r[3],p=r[6],E=r[1],b=r[4],M=r[7],N=r[2],w=r[5],I=r[8];return s[0]=o*x+a*E+c*N,s[3]=o*m+a*b+c*w,s[6]=o*p+a*M+c*I,s[1]=l*x+u*E+d*N,s[4]=l*m+u*b+d*w,s[7]=l*p+u*M+d*I,s[2]=f*x+h*E+g*N,s[5]=f*m+h*b+g*w,s[8]=f*p+h*M+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,h=l*s-o*c,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(r*l-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=h*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ig.makeScale(e,t)),this}rotate(e){return this.premultiply(ig.makeRotation(-e)),this}translate(e,t){return this.premultiply(ig.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ig=new Be,TS=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),CS=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sI(){let n={enabled:!0,workingColorSpace:fc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===pt&&(r.r=tr(r.r),r.g=tr(r.g),r.b=tr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(r.r=Ro(r.r),r.g=Ro(r.g),r.b=Ro(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===rr?hc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Pd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Pd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[fc]:{primaries:e,whitePoint:i,transfer:hc,toXYZ:TS,fromXYZ:CS,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:TS,fromXYZ:CS,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),n}var nt=sI();function tr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ro(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var _o,Od=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_o===void 0&&(_o=mc("canvas")),_o.width=e.width,_o.height=e.height;let r=_o.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=_o}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=mc("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=tr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(tr(t[i]/255)*255):t[i]=tr(t[i]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},oI=0,Po=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oI++}),this.uuid=Uc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(rg(r[o].image)):s.push(rg(r[o]))}else s=rg(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function rg(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Od.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}var aI=0,sg=new j,sr=(()=>{class n extends Ri{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Ai,s=Ai,o=nn,a=Vr,c=Kn,l=Vn,u=n.DEFAULT_ANISOTROPY,d=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aI++}),this.uuid=Uc(),this.name="",this.source=new Po(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sg).x}get height(){return this.source.getSize(sg).y}get depth(){return this.source.getSize(sg).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Ne(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let s=this[i];if(s===void 0){Ne(`Texture.setValues(): property '${i}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Id:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case Rd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Id:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case Rd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=bg,n.DEFAULT_ANISOTROPY=1,n})(),Ot=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,M=(h+1)/2,N=(p+1)/2,w=(u+f)/4,I=(d+x)/4,y=(g+m)/4;return b>M&&b>N?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=w/i,s=I/i):M>N?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=w/r,s=y/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=I/s,r=y/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-x)/E,this.z=(f-u)/E,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fd=class extends Ri{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},s=new sr(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Po(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},kn=class extends Fd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},gc=class extends sr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var kd=class extends sr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zt=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,r,s,o,a,c,l,u,d,f,h,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,x,m)}set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,r=1/xo.setFromMatrixColumn(e,0).length(),s=1/xo.setFromMatrixColumn(e,1).length(),o=1/xo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,g=a*u,x=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,h=c*d,g=l*u,x=l*d;t[0]=f+x*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,h=c*d,g=l*u,x=l*d;t[0]=f-x*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,h=o*d,g=a*u,x=a*d;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+x,t[1]=c*d,t[5]=x*l+f,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,h=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+g,t[10]=f-x*d}else if(e.order==="XZY"){let f=o*c,h=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+x,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cI,e,lI)}lookAt(e,t,i){let r=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Tr.crossVectors(i,Pn),Tr.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Tr.crossVectors(i,Pn)),Tr.normalize(),ed.crossVectors(Pn,Tr),r[0]=Tr.x,r[4]=ed.x,r[8]=Pn.x,r[1]=Tr.y,r[5]=ed.y,r[9]=Pn.y,r[2]=Tr.z,r[6]=ed.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],x=i[6],m=i[10],p=i[14],E=i[3],b=i[7],M=i[11],N=i[15],w=r[0],I=r[4],y=r[8],T=r[12],L=r[1],D=r[5],H=r[9],V=r[13],k=r[2],A=r[6],O=r[10],U=r[14],C=r[3],ee=r[7],$=r[11],te=r[15];return s[0]=o*w+a*L+c*k+l*C,s[4]=o*I+a*D+c*A+l*ee,s[8]=o*y+a*H+c*O+l*$,s[12]=o*T+a*V+c*U+l*te,s[1]=u*w+d*L+f*k+h*C,s[5]=u*I+d*D+f*A+h*ee,s[9]=u*y+d*H+f*O+h*$,s[13]=u*T+d*V+f*U+h*te,s[2]=g*w+x*L+m*k+p*C,s[6]=g*I+x*D+m*A+p*ee,s[10]=g*y+x*H+m*O+p*$,s[14]=g*T+x*V+m*U+p*te,s[3]=E*w+b*L+M*k+N*C,s[7]=E*I+b*D+M*A+N*ee,s[11]=E*y+b*H+M*O+N*$,s[15]=E*T+b*V+M*U+N*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],x=e[7],m=e[11],p=e[15],E=c*h-l*f,b=a*h-l*d,M=a*f-c*d,N=o*h-l*u,w=o*f-c*u,I=o*d-a*u;return t*(x*E-m*b+p*M)-i*(g*E-m*N+p*w)+r*(g*b-x*N+p*I)-s*(g*M-x*w+m*I)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],x=e[13],m=e[14],p=e[15],E=t*a-i*o,b=t*c-r*o,M=t*l-s*o,N=i*c-r*a,w=i*l-s*a,I=r*l-s*c,y=u*x-d*g,T=u*m-f*g,L=u*p-h*g,D=d*m-f*x,H=d*p-h*x,V=f*p-h*m,k=E*V-b*H+M*D+N*L-w*T+I*y;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(a*V-c*H+l*D)*A,e[1]=(r*H-i*V-s*D)*A,e[2]=(x*I-m*w+p*N)*A,e[3]=(f*w-d*I-h*N)*A,e[4]=(c*L-o*V-l*T)*A,e[5]=(t*V-r*L+s*T)*A,e[6]=(m*M-g*I-p*b)*A,e[7]=(u*I-f*M+h*b)*A,e[8]=(o*H-a*L+l*y)*A,e[9]=(i*L-t*H-s*y)*A,e[10]=(g*w-x*M+p*E)*A,e[11]=(d*M-u*w-h*E)*A,e[12]=(a*T-o*D-c*y)*A,e[13]=(t*D-i*T+r*y)*A,e[14]=(x*b-g*N-m*E)*A,e[15]=(u*N-d*b+f*E)*A,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,h=s*u,g=s*d,x=o*u,m=o*d,p=a*d,E=c*l,b=c*u,M=c*d,N=i.x,w=i.y,I=i.z;return r[0]=(1-(x+p))*N,r[1]=(h+M)*N,r[2]=(g-b)*N,r[3]=0,r[4]=(h-M)*w,r[5]=(1-(f+p))*w,r[6]=(m+E)*w,r[7]=0,r[8]=(g+b)*I,r[9]=(m-E)*I,r[10]=(1-(f+x))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let o=xo.set(r[0],r[1],r[2]).length(),a=xo.set(r[4],r[5],r[6]).length(),c=xo.set(r[8],r[9],r[10]).length();s<0&&(o=-o),li.copy(this);let l=1/o,u=1/a,d=1/c;return li.elements[0]*=l,li.elements[1]*=l,li.elements[2]*=l,li.elements[4]*=u,li.elements[5]*=u,li.elements[6]*=u,li.elements[8]*=d,li.elements[9]*=d,li.elements[10]*=d,t.setFromRotationMatrix(li),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,r,s,o,a=fi,c=!1){let l=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r),g,x;if(c)g=s/(o-s),x=o*s/(o-s);else if(a===fi)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===pc)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=fi,c=!1){let l=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r),g,x;if(c)g=1/(o-s),x=o/(o-s);else if(a===fi)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===pc)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},xo=new j,li=new zt,cI=new j(0,0,0),lI=new j(1,1,1),Tr=new j,ed=new j,Pn=new j,DS=new zt,AS=new Ni,vc=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],h=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return DS.makeRotationFromQuaternion(t),this.setFromRotationMatrix(DS,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return AS.setFromEuler(this),this.setFromQuaternion(AS,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),yc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},uI=0,IS=new j,So=new Ni,Zi=new zt,td=new j,ac=new j,dI=new j,fI=new Ni,RS=new j(1,0,0),NS=new j(0,1,0),PS=new j(0,0,1),LS={type:"added"},hI={type:"removed"},Eo={type:"childadded",child:null},og={type:"childremoved",child:null},ws=(()=>{class n extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uI++}),this.uuid=Uc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new j,i=new vc,r=new Ni,s=new j(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new zt},normalMatrix:{value:new Be}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return So.setFromAxisAngle(t,i),this.quaternion.multiply(So),this}rotateOnWorldAxis(t,i){return So.setFromAxisAngle(t,i),this.quaternion.premultiply(So),this}rotateX(t){return this.rotateOnAxis(RS,t)}rotateY(t){return this.rotateOnAxis(NS,t)}rotateZ(t){return this.rotateOnAxis(PS,t)}translateOnAxis(t,i){return IS.copy(t).applyQuaternion(this.quaternion),this.position.add(IS.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(RS,t)}translateY(t){return this.translateOnAxis(NS,t)}translateZ(t){return this.translateOnAxis(PS,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?td.copy(t):td.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),ac.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(ac,td,this.up):Zi.lookAt(td,ac,this.up),this.quaternion.setFromRotationMatrix(Zi),s&&(Zi.extractRotation(s.matrixWorld),So.setFromRotationMatrix(Zi),this.quaternion.premultiply(So.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(LS),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(hI),og.child=t,this.dispatchEvent(og),og.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(LS),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ac,t,dI),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ac,fI,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,s=t.z,o=this.matrix.elements;o[12]+=i-o[0]*i-o[4]*r-o[8]*s,o[13]+=r-o[1]*i-o[5]*r-o[9]*s,o[14]+=s-o[2]*i-o[6]*r-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>xt(de({},c),{boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>de({},c)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),g=a(t.animations),x=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),g.length>0&&(r.animations=g),x.length>0&&(r.nodes=x)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new j(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),_s=class extends ws{constructor(){super(),this.isGroup=!0,this.type="Group"}},pI={type:"move"},Lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pI)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new _s;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ME={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},nd={h:0,s:0,l:0};function ag(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ut=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=rI(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ag(o,s,e+1/3),this.g=ag(o,s,e),this.b=ag(o,s,e-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(e,t=On){function i(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=On){let i=ME[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=Ro(e.r),this.g=Ro(e.g),this.b=Ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return nt.workingToColorSpace(un.copy(this),e),Math.round(it(un.r*255,0,255))*65536+Math.round(it(un.g*255,0,255))*256+Math.round(it(un.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(un.copy(this),t);let i=un.r,r=un.g,s=un.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=On){nt.workingToColorSpace(un.copy(this),e);let t=un.r,i=un.g,r=un.b;return e!==On?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(nd);let i=tg(Cr.h,nd.h,t),r=tg(Cr.s,nd.s,t),s=tg(Cr.l,nd.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new ut;ut.NAMES=ME;var _c=class extends ws{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vc,this.environmentIntensity=1,this.environmentRotation=new vc,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ui=new j,Ji=new j,cg=new j,Ki=new j,bo=new j,Mo=new j,OS=new j,lg=new j,ug=new j,dg=new j,fg=new Ot,hg=new Ot,pg=new Ot,Nr=class n{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ui.subVectors(e,t),r.cross(ui);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ui.subVectors(r,t),Ji.subVectors(i,t),cg.subVectors(e,t);let o=ui.dot(ui),a=ui.dot(Ji),c=ui.dot(cg),l=Ji.dot(Ji),u=Ji.dot(cg),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Ki)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ki.x),c.addScaledVector(o,Ki.y),c.addScaledVector(a,Ki.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return fg.setScalar(0),hg.setScalar(0),pg.setScalar(0),fg.fromBufferAttribute(e,t),hg.fromBufferAttribute(e,i),pg.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(fg,s.x),o.addScaledVector(hg,s.y),o.addScaledVector(pg,s.z),o}static isFrontFacing(e,t,i,r){return ui.subVectors(i,t),Ji.subVectors(e,t),ui.cross(Ji).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),ui.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;bo.subVectors(r,i),Mo.subVectors(s,i),lg.subVectors(e,i);let c=bo.dot(lg),l=Mo.dot(lg);if(c<=0&&l<=0)return t.copy(i);ug.subVectors(e,r);let u=bo.dot(ug),d=Mo.dot(ug);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(bo,o);dg.subVectors(e,s);let h=bo.dot(dg),g=Mo.dot(dg);if(g>=0&&h<=g)return t.copy(s);let x=h*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Mo,a);let m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return OS.subVectors(s,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(OS,a);let p=1/(m+x+f);return o=x*p,a=f*p,t.copy(i).addScaledVector(bo,o).addScaledVector(Mo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Lr=class{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,di):di.fromBufferAttribute(s,o),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),id.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),id.copy(i.boundingBox)),id.applyMatrix4(e.matrixWorld),this.union(id)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cc),rd.subVectors(this.max,cc),wo.subVectors(e.a,cc),To.subVectors(e.b,cc),Co.subVectors(e.c,cc),Dr.subVectors(To,wo),Ar.subVectors(Co,To),ps.subVectors(wo,Co);let t=[0,-Dr.z,Dr.y,0,-Ar.z,Ar.y,0,-ps.z,ps.y,Dr.z,0,-Dr.x,Ar.z,0,-Ar.x,ps.z,0,-ps.x,-Dr.y,Dr.x,0,-Ar.y,Ar.x,0,-ps.y,ps.x,0];return!mg(t,wo,To,Co,rd)||(t=[1,0,0,0,1,0,0,0,1],!mg(t,wo,To,Co,rd))?!1:(sd.crossVectors(Dr,Ar),t=[sd.x,sd.y,sd.z],mg(t,wo,To,Co,rd))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Qi=[new j,new j,new j,new j,new j,new j,new j,new j],di=new j,id=new Lr,wo=new j,To=new j,Co=new j,Dr=new j,Ar=new j,ps=new j,cc=new j,rd=new j,sd=new j,ms=new j;function mg(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ms.fromArray(n,s);let a=r.x*Math.abs(ms.x)+r.y*Math.abs(ms.y)+r.z*Math.abs(ms.z),c=e.dot(ms),l=t.dot(ms),u=i.dot(ms);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Ht=new j,od=new mt,mI=0,Fn=class extends Ri{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mI++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ag,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)od.fromBufferAttribute(this,t),od.applyMatrix3(e),this.setXY(t,od.x,od.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=oc(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oc(t,this.array)),t}setX(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oc(t,this.array)),t}setY(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oc(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oc(t,this.array)),t}setW(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),i=bn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),i=bn(i,this.array),r=bn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),i=bn(i,this.array),r=bn(r,this.array),s=bn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ag&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var xc=class extends Fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Sc=class extends Fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Jn=class extends Fn{constructor(e,t,i){super(new Float32Array(e),t,i)}},gI=new Lr,lc=new j,gg=new j,Oo=class{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):gI.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lc.subVectors(e,this.center);let t=lc.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(lc,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gg.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lc.copy(e.center).add(gg)),this.expandByPoint(lc.copy(e.center).sub(gg))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},vI=0,Zn=new zt,vg=new ws,Do=new j,Ln=new Lr,uc=new Lr,Yt=new j,Pi=class n extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vI++}),this.uuid=Uc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nI(e)?Sc:xc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,i){return Zn.makeTranslation(e,t,i),this.applyMatrix4(Zn),this}scale(e,t,i){return Zn.makeScale(e,t,i),this.applyMatrix4(Zn),this}lookAt(e){return vg.lookAt(e),vg.updateMatrix(),this.applyMatrix4(vg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Do).negate(),this.translate(Do.x,Do.y,Do.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jn(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){let i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];uc.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Ln.min,uc.min),Ln.expandByPoint(Yt),Yt.addVectors(Ln.max,uc.max),Ln.expandByPoint(Yt)):(Ln.expandByPoint(uc.min),Ln.expandByPoint(uc.max))}Ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Yt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Yt.fromBufferAttribute(a,l),c&&(Do.fromBufferAttribute(e,l),Yt.add(Do)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let y=0;y<i.count;y++)a[y]=new j,c[y]=new j;let l=new j,u=new j,d=new j,f=new mt,h=new mt,g=new mt,x=new j,m=new j;function p(y,T,L){l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,L),f.fromBufferAttribute(s,y),h.fromBufferAttribute(s,T),g.fromBufferAttribute(s,L),u.sub(l),d.sub(l),h.sub(f),g.sub(f);let D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(D),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),a[y].add(x),a[T].add(x),a[L].add(x),c[y].add(m),c[T].add(m),c[L].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let y=0,T=E.length;y<T;++y){let L=E[y],D=L.start,H=L.count;for(let V=D,k=D+H;V<k;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let b=new j,M=new j,N=new j,w=new j;function I(y){N.fromBufferAttribute(r,y),w.copy(N);let T=a[y];b.copy(T),b.sub(N.multiplyScalar(N.dot(T))).normalize(),M.crossVectors(w,T);let D=M.dot(c[y])<0?-1:1;o.setXYZW(y,b.x,b.y,b.z,D)}for(let y=0,T=E.length;y<T;++y){let L=E[y],D=L.start,H=L.count;for(let V=D,k=D+H;V<k;V+=3)I(e.getX(V+0)),I(e.getX(V+1)),I(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new j,s=new j,o=new j,a=new j,c=new j,l=new j,u=new j,d=new j;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),h=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?h=c[x]*a.data.stride+a.offset:h=c[x]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new Fn(f,u,d)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var yI=0,Es=class extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yI++}),this.uuid=Uc(),this.name="",this.type="Material",this.blending=xs,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=Ed,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sd&&(i.blendSrc=this.blendSrc),this.blendDst!==Ed&&(i.blendDst=this.blendDst),this.blendEquation!==Pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var er=new j,yg=new j,ad=new j,Ir=new j,_g=new j,cd=new j,xg=new j,Ud=class{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=er.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(er.copy(this.origin).addScaledVector(this.direction,t),er.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){yg.copy(e).add(t).multiplyScalar(.5),ad.copy(t).sub(e).normalize(),Ir.copy(this.origin).sub(yg);let s=e.distanceTo(t)*.5,o=-this.direction.dot(ad),a=Ir.dot(this.direction),c=-Ir.dot(ad),l=Ir.lengthSq(),u=Math.abs(1-o*o),d,f,h,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){let x=1/u;d*=x,f*=x,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),h=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(yg).addScaledVector(ad,f),h}intersectSphere(e,t){er.subVectors(e.center,this.origin);let i=er.dot(this.direction),r=er.dot(er)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,er)!==null}intersectTriangle(e,t,i,r,s){_g.subVectors(t,e),cd.subVectors(i,e),xg.crossVectors(_g,cd);let o=this.direction.dot(xg),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ir.subVectors(this.origin,e);let c=a*this.direction.dot(cd.crossVectors(Ir,cd));if(c<0)return null;let l=a*this.direction.dot(_g.cross(Ir));if(l<0||c+l>o)return null;let u=-a*Ir.dot(xg);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bs=class extends Es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vc,this.combine=Fg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},FS=new zt,gs=new Ud,ld=new Oo,kS=new j,ud=new j,dd=new j,fd=new j,Sg=new j,hd=new j,US=new j,pd=new j,Mn=class extends ws{constructor(e=new Pi,t=new bs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){hd.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(Sg.fromBufferAttribute(d,e),o?hd.addScaledVector(Sg,u):hd.addScaledVector(Sg.sub(t),u))}t.add(hd)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ld.copy(i.boundingSphere),ld.applyMatrix4(s),gs.copy(e.ray).recast(e.near),!(ld.containsPoint(gs.origin)===!1&&(gs.intersectSphere(ld,kS)===null||gs.origin.distanceToSquared(kS)>(e.far-e.near)**2))&&(FS.copy(s).invert(),gs.copy(e.ray).applyMatrix4(FS),!(i.boundingBox!==null&&gs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],E=Math.max(m.start,h.start),b=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let M=E,N=b;M<N;M+=3){let w=a.getX(M),I=a.getX(M+1),y=a.getX(M+2);r=md(this,p,e,i,l,u,d,w,I,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){let E=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);r=md(this,o,e,i,l,u,d,E,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],E=Math.max(m.start,h.start),b=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let M=E,N=b;M<N;M+=3){let w=M,I=M+1,y=M+2;r=md(this,p,e,i,l,u,d,w,I,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){let E=m,b=m+1,M=m+2;r=md(this,o,e,i,l,u,d,E,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function _I(n,e,t,i,r,s,o,a){let c;if(e.side===gn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===nr,a),c===null)return null;pd.copy(a),pd.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(pd);return l<t.near||l>t.far?null:{distance:l,point:pd.clone(),object:n}}function md(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,ud),n.getVertexPosition(c,dd),n.getVertexPosition(l,fd);let u=_I(n,e,t,i,ud,dd,fd,US);if(u){let d=new j;Nr.getBarycoord(US,ud,dd,fd,d),r&&(u.uv=Nr.getInterpolatedAttribute(r,a,c,l,d,new mt)),s&&(u.uv1=Nr.getInterpolatedAttribute(s,a,c,l,d,new mt)),o&&(u.normal=Nr.getInterpolatedAttribute(o,a,c,l,d,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new j,materialIndex:0};Nr.getNormal(ud,dd,fd,f.normal),u.face=f,u.barycoord=d}return u}var Bd=class extends sr{constructor(e=null,t=1,i=1,r,s,o,a,c,l=Zt,u=Zt,d,f){super(null,o,a,c,l,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Eg=new j,xI=new j,SI=new Be,Di=class{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Eg.subVectors(i,t).cross(xI.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Eg),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||SI.getNormalMatrix(e),r=this.coplanarPoint(Eg).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},vs=new Oo,EI=new mt(.5,.5),gd=new j,Ec=class{constructor(e=new Di,t=new Di,i=new Di,r=new Di,s=new Di,o=new Di){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fi,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],f=s[6],h=s[7],g=s[8],x=s[9],m=s[10],p=s[11],E=s[12],b=s[13],M=s[14],N=s[15];if(r[0].setComponents(l-o,h-u,p-g,N-E).normalize(),r[1].setComponents(l+o,h+u,p+g,N+E).normalize(),r[2].setComponents(l+a,h+d,p+x,N+b).normalize(),r[3].setComponents(l-a,h-d,p-x,N-b).normalize(),i)r[4].setComponents(c,f,m,M).normalize(),r[5].setComponents(l-c,h-f,p-m,N-M).normalize();else if(r[4].setComponents(l-c,h-f,p-m,N-M).normalize(),t===fi)r[5].setComponents(l+c,h+f,p+m,N+M).normalize();else if(t===pc)r[5].setComponents(c,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);let t=EI.distanceTo(e.center);return vs.radius=.7071067811865476+t,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(gd.x=r.normal.x>0?e.max.x:e.min.x,gd.y=r.normal.y>0?e.max.y:e.min.y,gd.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gd)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bc=class extends sr{constructor(e=[],t=Br,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var ir=class extends sr{constructor(e,t,i=pi,r,s,o,a=Zt,c=Zt,l,u=Ii,d=1){if(u!==Ii&&u!==Hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Po(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Vd=class extends ir{constructor(e,t=pi,i=Br,r,s,o=Zt,a=Zt,c,l=Ii){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Mc=class extends sr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Or=class n extends Pi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Jn(l,3)),this.setAttribute("normal",new Jn(u,3)),this.setAttribute("uv",new Jn(d,2));function g(x,m,p,E,b,M,N,w,I,y,T){let L=M/I,D=N/y,H=M/2,V=N/2,k=w/2,A=I+1,O=y+1,U=0,C=0,ee=new j;for(let $=0;$<O;$++){let te=$*D-V;for(let me=0;me<A;me++){let Ie=me*L-H;ee[x]=Ie*E,ee[m]=te*b,ee[p]=k,l.push(ee.x,ee.y,ee.z),ee[x]=0,ee[m]=0,ee[p]=w>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(me/I),d.push(1-$/y),U+=1}}for(let $=0;$<y;$++)for(let te=0;te<I;te++){let me=f+te+A*$,Ie=f+te+A*($+1),Ce=f+(te+1)+A*($+1),Te=f+(te+1)+A*$;c.push(me,Ie,Te),c.push(Ie,Ce,Te),C+=6}a.addGroup(h,C,T),h+=C,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var wc=class n extends Pi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,h=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let E=p*f-o;for(let b=0;b<l;b++){let M=b*d-s;g.push(M,-E,0),x.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<a;E++){let b=E+l*p,M=E+l*(p+1),N=E+1+l*(p+1),w=E+1+l*p;h.push(b,M,w),h.push(M,N,w)}this.setIndex(h),this.setAttribute("position",new Jn(g,3)),this.setAttribute("normal",new Jn(x,3)),this.setAttribute("uv",new Jn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};function Ts(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(BS(r))r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(BS(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function fn(n){let e={};for(let t=0;t<n.length;t++){let i=Ts(n[t]);for(let r in i)e[r]=i[r]}return e}function BS(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function bI(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ev(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var wE={clone:Ts,merge:fn},MI=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wI=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends Es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MI,this.fragmentShader=wI,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=bI(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Hd=class extends Un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var zd=class extends Es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gd=class extends Es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function vd(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var Fr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},jd=class extends Fr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wg,endingEnd:wg}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Tg:s=e,a=2*t-i;break;case Cg:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Tg:o=e,c=2*i-t;break;case Cg:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-t)/(r-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,E=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,b=(-1-h)*m+(1.5+h)*x+.5*g,M=h*m-h*x;for(let N=0;N!==a;++N)s[N]=p*o[u+N]+E*o[l+N]+b*o[c+N]+M*o[d+N];return s}},Wd=class extends Fr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},$d=class extends Fr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},qd=class extends Fr{interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.settings||this.DefaultSettings_,d=u.inTangents,f=u.outTangents;if(!d||!f){let x=(i-t)/(r-t),m=1-x;for(let p=0;p!==a;++p)s[p]=o[l+p]*m+o[c+p]*x;return s}let h=a*2,g=e-1;for(let x=0;x!==a;++x){let m=o[l+x],p=o[c+x],E=g*h+x*2,b=f[E],M=f[E+1],N=e*h+x*2,w=d[N],I=d[N+1],y=(i-t)/(r-t),T,L,D,H,V;for(let k=0;k<8;k++){T=y*y,L=T*y,D=1-y,H=D*D,V=H*D;let O=V*t+3*H*y*b+3*D*T*w+L*r-i;if(Math.abs(O)<1e-10)break;let U=3*H*(b-t)+6*D*y*(w-b)+3*T*(r-w);if(Math.abs(U)<1e-10)break;y=y-O/U,y=Math.max(0,Math.min(1,y))}s[x]=V*m+3*H*y*M+3*D*T*I+L*p}return s}},Bn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vd(t,this.TimeBufferType),this.values=vd(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:vd(e.times,Array),values:vd(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new $d(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new qd(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case dc:t=this.InterpolantFactoryMethodDiscrete;break;case Nd:t=this.InterpolantFactoryMethodLinear;break;case xd:t=this.InterpolantFactoryMethodSmooth;break;case Mg:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ne("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dc;case this.InterpolantFactoryMethodLinear:return Nd;case this.InterpolantFactoryMethodSmooth:return xd;case this.InterpolantFactoryMethodBezier:return Mg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){Le("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Le("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&iI(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){Le("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===xd,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,h=d+i;for(let g=0;g!==i;++g){let x=t[d+g];if(x!==t[f+g]||x!==t[h+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Nd;var kr=class extends Bn{constructor(e,t,i){super(e,t,i)}};kr.prototype.ValueTypeName="bool";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=dc;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Xd=class extends Bn{constructor(e,t,i,r){super(e,t,i,r)}};Xd.prototype.ValueTypeName="color";var Yd=class extends Bn{constructor(e,t,i,r){super(e,t,i,r)}};Yd.prototype.ValueTypeName="number";var Zd=class extends Fr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Ni.slerpFlat(s,0,o,l-a,o,l,c);return s}},Tc=class extends Bn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Zd(this.times,this.values,this.getValueSize(),e)}};Tc.prototype.ValueTypeName="quaternion";Tc.prototype.InterpolantFactoryMethodSmooth=void 0;var Ur=class extends Bn{constructor(e,t,i){super(e,t,i)}};Ur.prototype.ValueTypeName="string";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=dc;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Jd=class extends Bn{constructor(e,t,i,r){super(e,t,i,r)}};Jd.prototype.ValueTypeName="vector";var yd=new j,_d=new Ni,Ci=new j,Cc=class extends ws{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yd,_d,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yd,_d,Ci.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(yd,_d,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yd,_d,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Rr=new j,VS=new mt,HS=new mt,dn=class extends Cc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ld*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(eg*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ld*2*Math.atan(Math.tan(eg*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){return this.getViewBounds(e,VS,HS),t.subVectors(HS,VS)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(eg*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Dc=class extends Cc{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Ao=-90,Io=1,Kd=class extends ws{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new dn(Ao,Io,e,t);r.layers=this.layers,this.add(r);let s=new dn(Ao,Io,e,t);s.layers=this.layers,this.add(s);let o=new dn(Ao,Io,e,t);o.layers=this.layers,this.add(o);let a=new dn(Ao,Io,e,t);a.layers=this.layers,this.add(a);let c=new dn(Ao,Io,e,t);c.layers=this.layers,this.add(c);let l=new dn(Ao,Io,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===pc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Qd=class extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var tv="\\[\\]\\.:\\/",TI=new RegExp("["+tv+"]","g"),nv="[^"+tv+"]",CI="[^"+tv.replace("\\.","")+"]",DI=/((?:WC+[\/:])*)/.source.replace("WC",nv),AI=/(WCOD+)?/.source.replace("WCOD",CI),II=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nv),RI=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nv),NI=new RegExp("^"+DI+AI+II+RI+"$"),PI=["material","materials","bones","map"],Ig=class{constructor(e,t,i){let r=i||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Lt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(TI,"")}static parseTrackName(t){let i=NI.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);PI.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;Le("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=Ig,n})();Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var x9=new Float32Array(1);var Rg=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};function iv(n,e,t,i){let r=LI(i);switch(t){case Xg:return n*e;case Zg:return n*e/r.components*r.byteLength;case af:return n*e/r.components*r.byteLength;case zr:return n*e*2/r.components*r.byteLength;case cf:return n*e*2/r.components*r.byteLength;case Yg:return n*e*3/r.components*r.byteLength;case Kn:return n*e*4/r.components*r.byteLength;case lf:return n*e*4/r.components*r.byteLength;case Nc:case Pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Lc:case Oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case df:case hf:return Math.max(n,16)*Math.max(e,8)/4;case uf:case ff:return Math.max(n,8)*Math.max(e,8)/2;case pf:case mf:case vf:case yf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gf:case Fc:case _f:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case bf:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case wf:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Df:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Af:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case If:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Rf:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Nf:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Pf:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Lf:case Of:case Ff:return Math.ceil(n/4)*Math.ceil(e/4)*16;case kf:case Uf:return Math.ceil(n/4)*Math.ceil(e/4)*8;case kc:case Bf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function LI(n){switch(n){case Vn:case jg:return{byteLength:1,components:1};case ko:case Wg:case Fi:return{byteLength:2,components:1};case sf:case of:return{byteLength:2,components:4};case pi:case rf:case mi:return{byteLength:4,components:1};case $g:case qg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function XE(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function FI(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){let g=d[f],x=d[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){let x=d[h];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var kI=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UI=`#ifdef USE_ALPHAHASH
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
#endif`,BI=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VI=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HI=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zI=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GI=`#ifdef USE_AOMAP
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
#endif`,jI=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WI=`#ifdef USE_BATCHING
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
#endif`,$I=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qI=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XI=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YI=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ZI=`#ifdef USE_IRIDESCENCE
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
#endif`,JI=`#ifdef USE_BUMPMAP
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
#endif`,KI=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,QI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,iR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,oR=`#define PI 3.141592653589793
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
} // validated`,aR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cR=`vec3 transformedNormal = objectNormal;
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
#endif`,lR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hR="gl_FragColor = linearToOutputTexel( gl_FragColor );",pR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mR=`#ifdef USE_ENVMAP
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
#endif`,gR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vR=`#ifdef USE_ENVMAP
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
#endif`,yR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_R=`#ifdef USE_ENVMAP
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
#endif`,xR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ER=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MR=`#ifdef USE_GRADIENTMAP
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
}`,wR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DR=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,AR=`#ifdef USE_ENVMAP
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
#endif`,IR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LR=`PhysicalMaterial material;
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
#endif`,OR=`uniform sampler2D dfgLUT;
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
}`,FR=`
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
#endif`,kR=`#if defined( RE_IndirectDiffuse )
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
#endif`,UR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BR=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,VR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$R=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qR=`#if defined( USE_POINTS_UV )
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
#endif`,XR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QR=`#ifdef USE_MORPHTARGETS
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
#endif`,e1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o1=`#ifdef USE_NORMALMAP
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
#endif`,a1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,h1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,E1=`float getShadowMask() {
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
}`,b1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M1=`#ifdef USE_SKINNING
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
#endif`,w1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T1=`#ifdef USE_SKINNING
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
#endif`,C1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,R1=`#ifdef USE_TRANSMISSION
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
#endif`,N1=`#ifdef USE_TRANSMISSION
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
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,k1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U1=`uniform sampler2D t2D;
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
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`#include <common>
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
}`,j1=`#if DEPTH_PACKING == 3200
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
}`,W1=`#define DISTANCE
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
}`,$1=`#define DISTANCE
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
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y1=`uniform float scale;
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
}`,Z1=`uniform vec3 diffuse;
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
}`,J1=`#include <common>
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
}`,K1=`uniform vec3 diffuse;
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
}`,Q1=`#define LAMBERT
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
}`,eN=`#define LAMBERT
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
}`,tN=`#define MATCAP
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
}`,nN=`#define MATCAP
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
}`,iN=`#define NORMAL
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
}`,rN=`#define NORMAL
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
}`,sN=`#define PHONG
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
}`,oN=`#define PHONG
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
}`,aN=`#define STANDARD
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
}`,cN=`#define STANDARD
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
}`,lN=`#define TOON
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
}`,uN=`#define TOON
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
}`,dN=`uniform float size;
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
}`,fN=`uniform vec3 diffuse;
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
}`,hN=`#include <common>
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
}`,pN=`uniform vec3 color;
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
}`,mN=`uniform float rotation;
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
}`,gN=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:kI,alphahash_pars_fragment:UI,alphamap_fragment:BI,alphamap_pars_fragment:VI,alphatest_fragment:HI,alphatest_pars_fragment:zI,aomap_fragment:GI,aomap_pars_fragment:jI,batching_pars_vertex:WI,batching_vertex:$I,begin_vertex:qI,beginnormal_vertex:XI,bsdfs:YI,iridescence_fragment:ZI,bumpmap_pars_fragment:JI,clipping_planes_fragment:KI,clipping_planes_pars_fragment:QI,clipping_planes_pars_vertex:eR,clipping_planes_vertex:tR,color_fragment:nR,color_pars_fragment:iR,color_pars_vertex:rR,color_vertex:sR,common:oR,cube_uv_reflection_fragment:aR,defaultnormal_vertex:cR,displacementmap_pars_vertex:lR,displacementmap_vertex:uR,emissivemap_fragment:dR,emissivemap_pars_fragment:fR,colorspace_fragment:hR,colorspace_pars_fragment:pR,envmap_fragment:mR,envmap_common_pars_fragment:gR,envmap_pars_fragment:vR,envmap_pars_vertex:yR,envmap_physical_pars_fragment:AR,envmap_vertex:_R,fog_vertex:xR,fog_pars_vertex:SR,fog_fragment:ER,fog_pars_fragment:bR,gradientmap_pars_fragment:MR,lightmap_pars_fragment:wR,lights_lambert_fragment:TR,lights_lambert_pars_fragment:CR,lights_pars_begin:DR,lights_toon_fragment:IR,lights_toon_pars_fragment:RR,lights_phong_fragment:NR,lights_phong_pars_fragment:PR,lights_physical_fragment:LR,lights_physical_pars_fragment:OR,lights_fragment_begin:FR,lights_fragment_maps:kR,lights_fragment_end:UR,lightprobes_pars_fragment:BR,logdepthbuf_fragment:VR,logdepthbuf_pars_fragment:HR,logdepthbuf_pars_vertex:zR,logdepthbuf_vertex:GR,map_fragment:jR,map_pars_fragment:WR,map_particle_fragment:$R,map_particle_pars_fragment:qR,metalnessmap_fragment:XR,metalnessmap_pars_fragment:YR,morphinstance_vertex:ZR,morphcolor_vertex:JR,morphnormal_vertex:KR,morphtarget_pars_vertex:QR,morphtarget_vertex:e1,normal_fragment_begin:t1,normal_fragment_maps:n1,normal_pars_fragment:i1,normal_pars_vertex:r1,normal_vertex:s1,normalmap_pars_fragment:o1,clearcoat_normal_fragment_begin:a1,clearcoat_normal_fragment_maps:c1,clearcoat_pars_fragment:l1,iridescence_pars_fragment:u1,opaque_fragment:d1,packing:f1,premultiplied_alpha_fragment:h1,project_vertex:p1,dithering_fragment:m1,dithering_pars_fragment:g1,roughnessmap_fragment:v1,roughnessmap_pars_fragment:y1,shadowmap_pars_fragment:_1,shadowmap_pars_vertex:x1,shadowmap_vertex:S1,shadowmask_pars_fragment:E1,skinbase_vertex:b1,skinning_pars_vertex:M1,skinning_vertex:w1,skinnormal_vertex:T1,specularmap_fragment:C1,specularmap_pars_fragment:D1,tonemapping_fragment:A1,tonemapping_pars_fragment:I1,transmission_fragment:R1,transmission_pars_fragment:N1,uv_pars_fragment:P1,uv_pars_vertex:L1,uv_vertex:O1,worldpos_vertex:F1,background_vert:k1,background_frag:U1,backgroundCube_vert:B1,backgroundCube_frag:V1,cube_vert:H1,cube_frag:z1,depth_vert:G1,depth_frag:j1,distance_vert:W1,distance_frag:$1,equirect_vert:q1,equirect_frag:X1,linedashed_vert:Y1,linedashed_frag:Z1,meshbasic_vert:J1,meshbasic_frag:K1,meshlambert_vert:Q1,meshlambert_frag:eN,meshmatcap_vert:tN,meshmatcap_frag:nN,meshnormal_vert:iN,meshnormal_frag:rN,meshphong_vert:sN,meshphong_frag:oN,meshphysical_vert:aN,meshphysical_frag:cN,meshtoon_vert:lN,meshtoon_frag:uN,points_vert:dN,points_frag:fN,shadow_vert:hN,shadow_frag:pN,sprite_vert:mN,sprite_frag:gN},he={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Ui={basic:{uniforms:fn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:fn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ut(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:fn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:fn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:fn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new ut(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:fn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:fn([he.points,he.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:fn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:fn([he.common,he.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:fn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:fn([he.sprite,he.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:fn([he.common,he.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:fn([he.lights,he.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Ui.physical={uniforms:fn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var zf={r:0,b:0,g:0},vN=new zt,YE=new Be;YE.set(-1,0,0,0,1,0,0,0,1);function yN(n,e,t,i,r,s){let o=new ut(0),a=r===!0?0:1,c,l,u=null,d=0,f=null;function h(E){let b=E.isScene===!0?E.background:null;if(b&&b.isTexture){let M=E.backgroundBlurriness>0;b=e.get(b,M)}return b}function g(E){let b=!1,M=h(E);M===null?m(o,a):M&&M.isColor&&(m(M,1),b=!0);let N=n.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,s):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(E,b){let M=h(b);M&&(M.isCubeTexture||M.mapping===Ic)?(l===void 0&&(l=new Mn(new Or(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Ts(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(N,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(vN.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(YE),l.material.toneMapped=nt.getTransfer(M.colorSpace)!==pt,(u!==M||d!==M.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,f=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Mn(new wc(2,2),new Un({name:"BackgroundMaterial",uniforms:Ts(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=nt.getTransfer(M.colorSpace)!==pt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,b){E.getRGB(zf,ev(n)),t.buffers.color.setClear(zf.r,zf.g,zf.b,b,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,b=1){o.set(E),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,m(o,a)},render:g,addToRenderList:x,dispose:p}}function _N(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(D,H,V,k,A){let O=!1,U=d(D,k,V,H);s!==U&&(s=U,l(s.object)),O=h(D,k,V,A),O&&g(D,k,V,A),A!==null&&e.update(A,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,M(D,H,V,k),A!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))}function c(){return n.createVertexArray()}function l(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function d(D,H,V,k){let A=k.wireframe===!0,O=i[H.id];O===void 0&&(O={},i[H.id]=O);let U=D.isInstancedMesh===!0?D.id:0,C=O[U];C===void 0&&(C={},O[U]=C);let ee=C[V.id];ee===void 0&&(ee={},C[V.id]=ee);let $=ee[A];return $===void 0&&($=f(c()),ee[A]=$),$}function f(D){let H=[],V=[],k=[];for(let A=0;A<t;A++)H[A]=0,V[A]=0,k[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:V,attributeDivisors:k,object:D,attributes:{},index:null}}function h(D,H,V,k){let A=s.attributes,O=H.attributes,U=0,C=V.getAttributes();for(let ee in C)if(C[ee].location>=0){let te=A[ee],me=O[ee];if(me===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(me=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(me=D.instanceColor)),te===void 0||te.attribute!==me||me&&te.data!==me.data)return!0;U++}return s.attributesNum!==U||s.index!==k}function g(D,H,V,k){let A={},O=H.attributes,U=0,C=V.getAttributes();for(let ee in C)if(C[ee].location>=0){let te=O[ee];te===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));let me={};me.attribute=te,te&&te.data&&(me.data=te.data),A[ee]=me,U++}s.attributes=A,s.attributesNum=U,s.index=k}function x(){let D=s.newAttributes;for(let H=0,V=D.length;H<V;H++)D[H]=0}function m(D){p(D,0)}function p(D,H){let V=s.newAttributes,k=s.enabledAttributes,A=s.attributeDivisors;V[D]=1,k[D]===0&&(n.enableVertexAttribArray(D),k[D]=1),A[D]!==H&&(n.vertexAttribDivisor(D,H),A[D]=H)}function E(){let D=s.newAttributes,H=s.enabledAttributes;for(let V=0,k=H.length;V<k;V++)H[V]!==D[V]&&(n.disableVertexAttribArray(V),H[V]=0)}function b(D,H,V,k,A,O,U){U===!0?n.vertexAttribIPointer(D,H,V,A,O):n.vertexAttribPointer(D,H,V,k,A,O)}function M(D,H,V,k){x();let A=k.attributes,O=V.getAttributes(),U=H.defaultAttributeValues;for(let C in O){let ee=O[C];if(ee.location>=0){let $=A[C];if($===void 0&&(C==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),C==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){let te=$.normalized,me=$.itemSize,Ie=e.get($);if(Ie===void 0)continue;let Ce=Ie.buffer,Te=Ie.type,Y=Ie.bytesPerElement,fe=Te===n.INT||Te===n.UNSIGNED_INT||$.gpuType===rf;if($.isInterleavedBufferAttribute){let ne=$.data,De=ne.stride,Pe=$.offset;if(ne.isInstancedInterleavedBuffer){for(let Re=0;Re<ee.locationSize;Re++)p(ee.location+Re,ne.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Re=0;Re<ee.locationSize;Re++)m(ee.location+Re);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let Re=0;Re<ee.locationSize;Re++)b(ee.location+Re,me/ee.locationSize,Te,te,De*Y,(Pe+me/ee.locationSize*Re)*Y,fe)}else{if($.isInstancedBufferAttribute){for(let ne=0;ne<ee.locationSize;ne++)p(ee.location+ne,$.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ne=0;ne<ee.locationSize;ne++)m(ee.location+ne);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let ne=0;ne<ee.locationSize;ne++)b(ee.location+ne,me/ee.locationSize,Te,te,me*Y,me/ee.locationSize*ne*Y,fe)}}else if(U!==void 0){let te=U[C];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(ee.location,te);break;case 3:n.vertexAttrib3fv(ee.location,te);break;case 4:n.vertexAttrib4fv(ee.location,te);break;default:n.vertexAttrib1fv(ee.location,te)}}}}E()}function N(){T();for(let D in i){let H=i[D];for(let V in H){let k=H[V];for(let A in k){let O=k[A];for(let U in O)u(O[U].object),delete O[U];delete k[A]}}delete i[D]}}function w(D){if(i[D.id]===void 0)return;let H=i[D.id];for(let V in H){let k=H[V];for(let A in k){let O=k[A];for(let U in O)u(O[U].object),delete O[U];delete k[A]}}delete i[D.id]}function I(D){for(let H in i){let V=i[H];for(let k in V){let A=V[k];if(A[D.id]===void 0)continue;let O=A[D.id];for(let U in O)u(O[U].object),delete O[U];delete A[D.id]}}}function y(D){for(let H in i){let V=i[H],k=D.isInstancedMesh===!0?D.id:0,A=V[k];if(A!==void 0){for(let O in A){let U=A[O];for(let C in U)u(U[C].object),delete U[C];delete A[O]}delete V[k],Object.keys(V).length===0&&delete i[H]}}}function T(){L(),o=!0,s!==r&&(s=r,l(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:L,dispose:N,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function xN(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let f=0;for(let h=0;h<u;h++)f+=l[h];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function SN(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==Kn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let y=I===Fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Vn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==mi&&!y)}function c(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(Ne("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:M,maxSamples:N,samples:w}}function EN(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Di,a=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let E=s?0:i,b=E*4,M=p.clippingState||null;c.value=M,M=u(g,f,b,h);for(let N=0;N!==b;++N)M[N]=t[N];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=h+x*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=h;b!==x;++b,M+=4)o.copy(d[b]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Gr=4,TE=[.125,.215,.35,.446,.526,.582],Cs=20,bN=256,Bc=new Dc,CE=new ut,rv=null,sv=0,ov=0,av=!1,MN=new j,jf=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=MN}=s;rv=this._renderer.getRenderTarget(),sv=this._renderer.getActiveCubeFace(),ov=this._renderer.getActiveMipmapLevel(),av=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=IE(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=AE(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(rv,sv,ov),this._renderer.xr.enabled=av,e.scissorTest=!1,Bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Br||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rv=this._renderer.getRenderTarget(),sv=this._renderer.getActiveCubeFace(),ov=this._renderer.getActiveMipmapLevel(),av=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Fi,format:Kn,colorSpace:fc,depthBuffer:!1},r=DE(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=DE(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=wN(s)),this._blurMaterial=CN(s,e,t),this._ggxMaterial=TN(s,e,t)}return r}_compileMaterial(e){let t=new Mn(new Pi,e);this._renderer.compile(t,Bc)}_sceneToCubeUV(e,t,i,r,s){let c=new dn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(CE),d.toneMapping=hi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mn(new Or,new bs({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,p=!0):(m.color.copy(CE),p=!0);for(let b=0;b<6;b++){let M=b%3;M===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[b],s.y,s.z)):M===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[b]));let N=this._cubeSize;Bo(r,M*N,b>2?N:0,N,N),d.setRenderTarget(r),p&&d.render(x,c),d.render(e,c)}d.toneMapping=h,d.autoClear=f,e.background=E}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Br||e.mapping===Ms;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=IE()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=AE());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Bo(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Bc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),f=0+l*1.25,h=d*f,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-Gr?i-g+Gr:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=g-t,Bo(s,m,p,3*x,2*x),r.setRenderTarget(s),r.render(a,Bc),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,Bo(e,m,p,3*x,2*x),r.setRenderTarget(e),r.render(a,Bc)}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[r];d.material=l;let f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Cs-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Cs;m>Cs&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cs}`);let p=[],E=0;for(let I=0;I<Cs;++I){let y=I/x,T=Math.exp(-y*y/2);p.push(T),I===0?E+=T:I<m&&(E+=2*T)}for(let I=0;I<p.length;I++)p[I]=p[I]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;let M=this._sizeLods[r],N=3*M*(r>b-Gr?r-b+Gr:0),w=4*(this._cubeSize-M);Bo(t,N,w,3*M,2*M),c.setRenderTarget(t),c.render(d,Bc)}};function wN(n){let e=[],t=[],i=[],r=n,s=n-Gr+1+TE.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>n-Gr?c=TE[o-n+Gr-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,x=3,m=2,p=1,E=new Float32Array(x*g*h),b=new Float32Array(m*g*h),M=new Float32Array(p*g*h);for(let w=0;w<h;w++){let I=w%3*2/3-1,y=w>2?0:-1,T=[I,y,0,I+2/3,y,0,I+2/3,y+1,0,I,y,0,I+2/3,y+1,0,I,y+1,0];E.set(T,x*g*w),b.set(f,m*g*w);let L=[w,w,w,w,w,w];M.set(L,p*g*w)}let N=new Pi;N.setAttribute("position",new Fn(E,x)),N.setAttribute("uv",new Fn(b,m)),N.setAttribute("faceIndex",new Fn(M,p)),i.push(new Mn(N,null)),r>Gr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function DE(n,e,t){let i=new kn(n,e,t);return i.texture.mapping=Ic,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function TN(n,e,t){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bN,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qf(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function CN(n,e,t){let i=new Float32Array(Cs),r=new j(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qf(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function AE(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qf(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function IE(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function qf(){return`

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
	`}var Wf=class extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new bc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Or(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:Oi});s.uniforms.tEquirect.value=t;let o=new Mn(r,s),a=t.minFilter;return t.minFilter===Vr&&(t.minFilter=nn),new Kd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}};function DN(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?o(f):s(f)}function s(f){if(f&&f.isTexture){let h=f.mapping;if(h===ef||h===tf)if(e.has(f)){let g=e.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new Wf(g.height);return x.fromEquirectangularTexture(n,f),e.set(f,x),f.addEventListener("dispose",l),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let h=f.mapping,g=h===ef||h===tf,x=h===Br||h===Ms;if(g||x){let m=t.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new jf(n)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let E=f.image;return g&&E&&E.height>0||x&&E&&c(E)?(i===null&&(i=new jf(n)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,h){return h===ef?f.mapping=Br:h===tf&&(f.mapping=Ms),f}function c(f){let h=0,g=6;for(let x=0;x<g;x++)f[x]!==void 0&&h++;return h===g}function l(f){let h=f.target;h.removeEventListener("dispose",l);let g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(f){let h=f.target;h.removeEventListener("dispose",u);let g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function AN(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Pd("WebGLRenderer: "+i+" extension not supported."),r}}}function IN(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function l(d){let f=[],h=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(h!==null){let E=h.array;x=h.version;for(let b=0,M=E.length;b<M;b+=3){let N=E[b+0],w=E[b+1],I=E[b+2];f.push(N,w,w,I,I,N)}}else{let E=g.array;x=g.version;for(let b=0,M=E.length/3-1;b<M;b+=3){let N=b+0,w=b+1,I=b+2;f.push(N,w,w,I,I,N)}}let m=new(g.count>=65535?Sc:xc)(f,1);m.version=x;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function RN(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,s,d*o),t.update(f,i,1)}function l(d,f,h){h!==0&&(n.drawElementsInstanced(i,f,s,d*o,h),t.update(f,i,h))}function u(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,h);let x=0;for(let m=0;m<h;m++)x+=f[m];t.update(x,i,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function NN(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Le("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function PN(n,e,t){let i=new WeakMap,r=new Ot;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let L=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",L)};var h=L;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],M=0;g===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let N=a.attributes.position.count*M,w=1;N>e.maxTextureSize&&(w=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);let I=new Float32Array(N*w*4*d),y=new gc(I,N,w,d);y.type=mi,y.needsUpdate=!0;let T=M*4;for(let D=0;D<d;D++){let H=p[D],V=E[D],k=b[D],A=N*w*4*D;for(let O=0;O<H.count;O++){let U=O*T;g===!0&&(r.fromBufferAttribute(H,O),I[A+U+0]=r.x,I[A+U+1]=r.y,I[A+U+2]=r.z,I[A+U+3]=0),x===!0&&(r.fromBufferAttribute(V,O),I[A+U+4]=r.x,I[A+U+5]=r.y,I[A+U+6]=r.z,I[A+U+7]=0),m===!0&&(r.fromBufferAttribute(k,O),I[A+U+8]=r.x,I[A+U+9]=r.y,I[A+U+10]=r.z,I[A+U+11]=k.itemSize===4?r.w:1)}}f={count:d,texture:y,size:new mt(N,w)},i.set(a,f),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function LN(n,e,t,i,r){let s=new WeakMap;function o(l){let u=r.render.frame,d=l.geometry,f=e.get(l,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function a(){s=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var ON={[kg]:"LINEAR_TONE_MAPPING",[Ug]:"REINHARD_TONE_MAPPING",[Bg]:"CINEON_TONE_MAPPING",[Vg]:"ACES_FILMIC_TONE_MAPPING",[zg]:"AGX_TONE_MAPPING",[Gg]:"NEUTRAL_TONE_MAPPING",[Hg]:"CUSTOM_TONE_MAPPING"};function FN(n,e,t,i,r){let s=new kn(e,t,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new ir(e,t):void 0}),o=new kn(e,t,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),a=new Pi;a.setAttribute("position",new Jn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Jn([0,2,0,0,2,0],2));let c=new Hd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new Mn(a,c),u=new Dc(-1,1,1,-1,0,1),d=null,f=null,h=!1,g,x=null,m=[],p=!1;this.setSize=function(E,b){s.setSize(E,b),o.setSize(E,b);for(let M=0;M<m.length;M++){let N=m[M];N.setSize&&N.setSize(E,b)}},this.setEffects=function(E){m=E,p=m.length>0&&m[0].isRenderPass===!0;let b=s.width,M=s.height;for(let N=0;N<m.length;N++){let w=m[N];w.setSize&&w.setSize(b,M)}},this.begin=function(E,b){if(h||E.toneMapping===hi&&m.length===0)return!1;if(x=b,b!==null){let M=b.width,N=b.height;(s.width!==M||s.height!==N)&&this.setSize(M,N)}return p===!1&&E.setRenderTarget(s),g=E.toneMapping,E.toneMapping=hi,!0},this.hasRenderPass=function(){return p},this.end=function(E,b){E.toneMapping=g,h=!0;let M=s,N=o;for(let w=0;w<m.length;w++){let I=m[w];if(I.enabled!==!1&&(I.render(E,N,M,b),I.needsSwap!==!1)){let y=M;M=N,N=y}}if(d!==E.outputColorSpace||f!==E.toneMapping){d=E.outputColorSpace,f=E.toneMapping,c.defines={},nt.getTransfer(d)===pt&&(c.defines.SRGB_TRANSFER="");let w=ON[f];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,E.setRenderTarget(x),E.render(l,u),x=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),c.dispose()}}var ZE=new sr,uv=new ir(1,1),JE=new gc,KE=new kd,QE=new bc,RE=[],NE=[],PE=new Float32Array(16),LE=new Float32Array(9),OE=new Float32Array(4);function Ho(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=RE[r];if(s===void 0&&(s=new Float32Array(r),RE[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xf(n,e){let t=NE[e];t===void 0&&(t=new Int32Array(e),NE[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function kN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function UN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function BN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function VN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function HN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Wt(t,i))return;OE.set(i),n.uniformMatrix2fv(this.addr,!1,OE),$t(t,i)}}function zN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Wt(t,i))return;LE.set(i),n.uniformMatrix3fv(this.addr,!1,LE),$t(t,i)}}function GN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Wt(t,i))return;PE.set(i),n.uniformMatrix4fv(this.addr,!1,PE),$t(t,i)}}function jN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function WN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2iv(this.addr,e),$t(t,e)}}function $N(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3iv(this.addr,e),$t(t,e)}}function qN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4iv(this.addr,e),$t(t,e)}}function XN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function YN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2uiv(this.addr,e),$t(t,e)}}function ZN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3uiv(this.addr,e),$t(t,e)}}function JN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4uiv(this.addr,e),$t(t,e)}}function KN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(uv.compareFunction=t.isReversedDepthBuffer()?Hf:Vf,s=uv):s=ZE,t.setTexture2D(e||s,r)}function QN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||KE,r)}function eP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||QE,r)}function tP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||JE,r)}function nP(n){switch(n){case 5126:return kN;case 35664:return UN;case 35665:return BN;case 35666:return VN;case 35674:return HN;case 35675:return zN;case 35676:return GN;case 5124:case 35670:return jN;case 35667:case 35671:return WN;case 35668:case 35672:return $N;case 35669:case 35673:return qN;case 5125:return XN;case 36294:return YN;case 36295:return ZN;case 36296:return JN;case 35678:case 36198:case 36298:case 36306:case 35682:return KN;case 35679:case 36299:case 36307:return QN;case 35680:case 36300:case 36308:case 36293:return eP;case 36289:case 36303:case 36311:case 36292:return tP}}function iP(n,e){n.uniform1fv(this.addr,e)}function rP(n,e){let t=Ho(e,this.size,2);n.uniform2fv(this.addr,t)}function sP(n,e){let t=Ho(e,this.size,3);n.uniform3fv(this.addr,t)}function oP(n,e){let t=Ho(e,this.size,4);n.uniform4fv(this.addr,t)}function aP(n,e){let t=Ho(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cP(n,e){let t=Ho(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function lP(n,e){let t=Ho(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function uP(n,e){n.uniform1iv(this.addr,e)}function dP(n,e){n.uniform2iv(this.addr,e)}function fP(n,e){n.uniform3iv(this.addr,e)}function hP(n,e){n.uniform4iv(this.addr,e)}function pP(n,e){n.uniform1uiv(this.addr,e)}function mP(n,e){n.uniform2uiv(this.addr,e)}function gP(n,e){n.uniform3uiv(this.addr,e)}function vP(n,e){n.uniform4uiv(this.addr,e)}function yP(n,e,t){let i=this.cache,r=e.length,s=Xf(t,r);Wt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=uv:o=ZE;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function _P(n,e,t){let i=this.cache,r=e.length,s=Xf(t,r);Wt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||KE,s[o])}function xP(n,e,t){let i=this.cache,r=e.length,s=Xf(t,r);Wt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||QE,s[o])}function SP(n,e,t){let i=this.cache,r=e.length,s=Xf(t,r);Wt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||JE,s[o])}function EP(n){switch(n){case 5126:return iP;case 35664:return rP;case 35665:return sP;case 35666:return oP;case 35674:return aP;case 35675:return cP;case 35676:return lP;case 5124:case 35670:return uP;case 35667:case 35671:return dP;case 35668:case 35672:return fP;case 35669:case 35673:return hP;case 5125:return pP;case 36294:return mP;case 36295:return gP;case 36296:return vP;case 35678:case 36198:case 36298:case 36306:case 35682:return yP;case 35679:case 36299:case 36307:return _P;case 35680:case 36300:case 36308:case 36293:return xP;case 36289:case 36303:case 36311:case 36292:return SP}}var dv=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=nP(t.type)}},fv=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=EP(t.type)}},hv=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},cv=/(\w+)(\])?(\[|\.)?/g;function FE(n,e){n.seq.push(e),n.map[e.id]=e}function bP(n,e,t){let i=n.name,r=i.length;for(cv.lastIndex=0;;){let s=cv.exec(i),o=cv.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){FE(t,l===void 0?new dv(a,n,e):new fv(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new hv(a),FE(t,d)),t=d}}}var Vo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);bP(a,c,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function kE(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var MP=37297,wP=0;function TP(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var UE=new Be;function CP(n){nt._getMatrix(UE,nt.workingColorSpace,n);let e=`mat3( ${UE.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case hc:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function BE(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+TP(n.getShaderSource(e),a)}else return s}function DP(n,e){let t=CP(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var AP={[kg]:"Linear",[Ug]:"Reinhard",[Bg]:"Cineon",[Vg]:"ACESFilmic",[zg]:"AgX",[Gg]:"Neutral",[Hg]:"Custom"};function IP(n,e){let t=AP[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Gf=new j;function RP(){nt.getLuminanceCoefficients(Gf);let n=Gf.x.toFixed(4),e=Gf.y.toFixed(4),t=Gf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hc).join(`
`)}function PP(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function LP(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Hc(n){return n!==""}function VE(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function HE(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var OP=/^[ \t]*#include +<([\w\d./]+)>/gm;function pv(n){return n.replace(OP,kP)}var FP=new Map;function kP(n,e){let t=qe[e];if(t===void 0){let i=FP.get(e);if(i!==void 0)t=qe[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return pv(t)}var UP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zE(n){return n.replace(UP,BP)}function BP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function GE(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var VP={[Ac]:"SHADOWMAP_TYPE_PCF",[Fo]:"SHADOWMAP_TYPE_VSM"};function HP(n){return VP[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var zP={[Br]:"ENVMAP_TYPE_CUBE",[Ms]:"ENVMAP_TYPE_CUBE",[Ic]:"ENVMAP_TYPE_CUBE_UV"};function GP(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":zP[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var jP={[Ms]:"ENVMAP_MODE_REFRACTION"};function WP(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":jP[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $P={[Fg]:"ENVMAP_BLENDING_MULTIPLY",[lE]:"ENVMAP_BLENDING_MIX",[uE]:"ENVMAP_BLENDING_ADD"};function qP(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":$P[n.combine]||"ENVMAP_BLENDING_NONE"}function XP(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function YP(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=HP(t),l=GP(t),u=WP(t),d=qP(t),f=XP(t),h=NP(t),g=PP(s),x=r.createProgram(),m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hc).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hc).join(`
`),p.length>0&&(p+=`
`)):(m=[GE(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hc).join(`
`),p=[GE(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?qe.tonemapping_pars_fragment:"",t.toneMapping!==hi?IP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,DP("linearToOutputTexel",t.outputColorSpace),RP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hc).join(`
`)),o=pv(o),o=VE(o,t),o=HE(o,t),a=pv(a),a=VE(a,t),a=HE(a,t),o=zE(o),a=zE(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Kg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=E+m+o,M=E+p+a,N=kE(r,r.VERTEX_SHADER,b),w=kE(r,r.FRAGMENT_SHADER,M);r.attachShader(x,N),r.attachShader(x,w),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function I(D){if(n.debug.checkShaderErrors){let H=r.getProgramInfoLog(x)||"",V=r.getShaderInfoLog(N)||"",k=r.getShaderInfoLog(w)||"",A=H.trim(),O=V.trim(),U=k.trim(),C=!0,ee=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(C=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,N,w);else{let $=BE(r,N,"vertex"),te=BE(r,w,"fragment");Le("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+A+`
`+$+`
`+te)}else A!==""?Ne("WebGLProgram: Program Info Log:",A):(O===""||U==="")&&(ee=!1);ee&&(D.diagnostics={runnable:C,programLog:A,vertexShader:{log:O,prefix:m},fragmentShader:{log:U,prefix:p}})}r.deleteShader(N),r.deleteShader(w),y=new Vo(r,x),T=LP(r,x)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(x,MP)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wP++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=N,this.fragmentShader=w,this}var ZP=0,mv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new gv(e),t.set(e,i)),i}},gv=class{constructor(e){this.id=ZP++,this.code=e,this.usedTimes=0}};function JP(n){return n===zr||n===Fc||n===kc}function KP(n,e,t,i,r,s){let o=new yc,a=new mv,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer,f=i.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,T,L,D,H,V){let k=D.fog,A=H.geometry,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,U=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,C=e.get(y.envMap||O,U),ee=C&&C.mapping===Ic?C.image.height:null,$=h[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&Ne("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let te=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,me=te!==void 0?te.length:0,Ie=0;A.morphAttributes.position!==void 0&&(Ie=1),A.morphAttributes.normal!==void 0&&(Ie=2),A.morphAttributes.color!==void 0&&(Ie=3);let Ce,Te,Y,fe;if($){let He=Ui[$];Ce=He.vertexShader,Te=He.fragmentShader}else Ce=y.vertexShader,Te=y.fragmentShader,a.update(y),Y=a.getVertexShaderID(y),fe=a.getFragmentShaderID(y);let ne=n.getRenderTarget(),De=n.state.buffers.depth.getReversed(),Pe=H.isInstancedMesh===!0,Re=H.isBatchedMesh===!0,Tt=!!y.map,Ze=!!y.matcap,dt=!!C,gt=!!y.aoMap,Ge=!!y.lightMap,It=!!y.bumpMap,Dt=!!y.normalMap,Jt=!!y.displacementMap,P=!!y.emissiveMap,Rt=!!y.metalnessMap,Je=!!y.roughnessMap,vt=y.anisotropy>0,ue=y.clearcoat>0,At=y.dispersion>0,S=y.iridescence>0,v=y.sheen>0,B=y.transmission>0,Z=vt&&!!y.anisotropyMap,Q=ue&&!!y.clearcoatMap,ie=ue&&!!y.clearcoatNormalMap,ce=ue&&!!y.clearcoatRoughnessMap,q=S&&!!y.iridescenceMap,J=S&&!!y.iridescenceThicknessMap,ve=v&&!!y.sheenColorMap,xe=v&&!!y.sheenRoughnessMap,oe=!!y.specularMap,re=!!y.specularColorMap,ke=!!y.specularIntensityMap,je=B&&!!y.transmissionMap,st=B&&!!y.thicknessMap,R=!!y.gradientMap,se=!!y.alphaMap,X=y.alphaTest>0,ye=!!y.alphaHash,ae=!!y.extensions,K=hi;y.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(K=n.toneMapping);let be={shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:Ce,fragmentShader:Te,defines:y.defines,customVertexShaderID:Y,customFragmentShaderID:fe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Re,batchingColor:Re&&H._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&H.instanceColor!==null,instancingMorph:Pe&&H.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Tt,matcap:Ze,envMap:dt,envMapMode:dt&&C.mapping,envMapCubeUVHeight:ee,aoMap:gt,lightMap:Ge,bumpMap:It,normalMap:Dt,displacementMap:Jt,emissiveMap:P,normalMapObjectSpace:Dt&&y.normalMapType===hE,normalMapTangentSpace:Dt&&y.normalMapType===Jg,packedNormalMap:Dt&&y.normalMapType===Jg&&JP(y.normalMap.format),metalnessMap:Rt,roughnessMap:Je,anisotropy:vt,anisotropyMap:Z,clearcoat:ue,clearcoatMap:Q,clearcoatNormalMap:ie,clearcoatRoughnessMap:ce,dispersion:At,iridescence:S,iridescenceMap:q,iridescenceThicknessMap:J,sheen:v,sheenColorMap:ve,sheenRoughnessMap:xe,specularMap:oe,specularColorMap:re,specularIntensityMap:ke,transmission:B,transmissionMap:je,thicknessMap:st,gradientMap:R,opaque:y.transparent===!1&&y.blending===xs&&y.alphaToCoverage===!1,alphaMap:se,alphaTest:X,alphaHash:ye,combine:y.combine,mapUv:Tt&&g(y.map.channel),aoMapUv:gt&&g(y.aoMap.channel),lightMapUv:Ge&&g(y.lightMap.channel),bumpMapUv:It&&g(y.bumpMap.channel),normalMapUv:Dt&&g(y.normalMap.channel),displacementMapUv:Jt&&g(y.displacementMap.channel),emissiveMapUv:P&&g(y.emissiveMap.channel),metalnessMapUv:Rt&&g(y.metalnessMap.channel),roughnessMapUv:Je&&g(y.roughnessMap.channel),anisotropyMapUv:Z&&g(y.anisotropyMap.channel),clearcoatMapUv:Q&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ie&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(y.sheenRoughnessMap.channel),specularMapUv:oe&&g(y.specularMap.channel),specularColorMapUv:re&&g(y.specularColorMap.channel),specularIntensityMapUv:ke&&g(y.specularIntensityMap.channel),transmissionMapUv:je&&g(y.transmissionMap.channel),thicknessMapUv:st&&g(y.thicknessMap.channel),alphaMapUv:se&&g(y.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(Dt||vt),vertexNormals:!!A.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!A.attributes.uv&&(Tt||se),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||A.attributes.normal===void 0&&Dt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:De,skinning:H.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ie,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:K,decodeVideoTexture:Tt&&y.map.isVideoTexture===!0&&nt.getTransfer(y.map.colorSpace)===pt,decodeVideoTextureEmissive:P&&y.emissiveMap.isVideoTexture===!0&&nt.getTransfer(y.emissiveMap.colorSpace)===pt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Li,flipSided:y.side===gn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ae&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&y.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function m(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)T.push(L),T.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(p(T,y),E(T,y),T.push(n.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function p(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function E(y,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),y.push(o.mask)}function b(y){let T=h[y.type],L;if(T){let D=Ui[T];L=wE.clone(D.uniforms)}else L=y.uniforms;return L}function M(y,T){let L=u.get(T);return L!==void 0?++L.usedTimes:(L=new YP(n,T,y,r),l.push(L),u.set(T,L)),L}function N(y){if(--y.usedTimes===0){let T=l.indexOf(y);l[T]=l[l.length-1],l.pop(),u.delete(y.cacheKey),y.destroy()}}function w(y){a.remove(y)}function I(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:b,acquireProgram:M,releaseProgram:N,releaseShaderCache:w,programs:l,dispose:I}}function QP(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function eL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function jE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function WE(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,g,x,m,p){let E=n[e];return E===void 0?(E={id:f.id,object:f,geometry:h,material:g,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:p},n[e]=E):(E.id=f.id,E.object=f,E.geometry=h,E.material=g,E.materialVariant=o(f),E.groupOrder=x,E.renderOrder=f.renderOrder,E.z=m,E.group=p),e++,E}function c(f,h,g,x,m,p){let E=a(f,h,g,x,m,p);g.transmission>0?i.push(E):g.transparent===!0?r.push(E):t.push(E)}function l(f,h,g,x,m,p){let E=a(f,h,g,x,m,p);g.transmission>0?i.unshift(E):g.transparent===!0?r.unshift(E):t.unshift(E)}function u(f,h){t.length>1&&t.sort(f||eL),i.length>1&&i.sort(h||jE),r.length>1&&r.sort(h||jE)}function d(){for(let f=e,h=n.length;f<h;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:d,sort:u}}function tL(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new WE,n.set(i,[o])):r>=s.length?(o=new WE,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function nL(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new ut};break;case"SpotLight":t={position:new j,direction:new j,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function iL(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var rL=0;function sL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function oL(n){let e=new nL,t=iL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new j);let r=new j,s=new zt,o=new zt;function a(l){let u=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let h=0,g=0,x=0,m=0,p=0,E=0,b=0,M=0,N=0,w=0,I=0;l.sort(sL);for(let T=0,L=l.length;T<L;T++){let D=l[T],H=D.color,V=D.intensity,k=D.distance,A=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===zr?A=D.shadow.map.texture:A=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=H.r*V,d+=H.g*V,f+=H.b*V;else if(D.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(D.sh.coefficients[O],V);I++}else if(D.isDirectionalLight){let O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let U=D.shadow,C=t.get(D);C.shadowIntensity=U.intensity,C.shadowBias=U.bias,C.shadowNormalBias=U.normalBias,C.shadowRadius=U.radius,C.shadowMapSize=U.mapSize,i.directionalShadow[h]=C,i.directionalShadowMap[h]=A,i.directionalShadowMatrix[h]=D.shadow.matrix,E++}i.directional[h]=O,h++}else if(D.isSpotLight){let O=e.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(H).multiplyScalar(V),O.distance=k,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,i.spot[x]=O;let U=D.shadow;if(D.map&&(i.spotLightMap[N]=D.map,N++,U.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[x]=U.matrix,D.castShadow){let C=t.get(D);C.shadowIntensity=U.intensity,C.shadowBias=U.bias,C.shadowNormalBias=U.normalBias,C.shadowRadius=U.radius,C.shadowMapSize=U.mapSize,i.spotShadow[x]=C,i.spotShadowMap[x]=A,M++}x++}else if(D.isRectAreaLight){let O=e.get(D);O.color.copy(H).multiplyScalar(V),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=O,m++}else if(D.isPointLight){let O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),O.distance=D.distance,O.decay=D.decay,D.castShadow){let U=D.shadow,C=t.get(D);C.shadowIntensity=U.intensity,C.shadowBias=U.bias,C.shadowNormalBias=U.normalBias,C.shadowRadius=U.radius,C.shadowMapSize=U.mapSize,C.shadowCameraNear=U.camera.near,C.shadowCameraFar=U.camera.far,i.pointShadow[g]=C,i.pointShadowMap[g]=A,i.pointShadowMatrix[g]=D.shadow.matrix,b++}i.point[g]=O,g++}else if(D.isHemisphereLight){let O=e.get(D);O.skyColor.copy(D.color).multiplyScalar(V),O.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[p]=O,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let y=i.hash;(y.directionalLength!==h||y.pointLength!==g||y.spotLength!==x||y.rectAreaLength!==m||y.hemiLength!==p||y.numDirectionalShadows!==E||y.numPointShadows!==b||y.numSpotShadows!==M||y.numSpotMaps!==N||y.numLightProbes!==I)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+N-w,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=I,y.directionalLength=h,y.pointLength=g,y.spotLength=x,y.rectAreaLength=m,y.hemiLength=p,y.numDirectionalShadows=E,y.numPointShadows=b,y.numSpotShadows=M,y.numSpotMaps=N,y.numLightProbes=I,i.version=rL++)}function c(l,u){let d=0,f=0,h=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){let b=l[p];if(b.isDirectionalLight){let M=i.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(b.isSpotLight){let M=i.spot[h];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(b.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let M=i.hemi[x];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function $E(n){let e=new oL(n),t=[],i=[],r=[];function s(f){d.camera=f,t.length=0,i.length=0,r.length=0}function o(f){t.push(f)}function a(f){i.push(f)}function c(f){r.push(f)}function l(){e.setup(t)}function u(f){e.setupView(t,f)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function aL(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new $E(n),e.set(r,[a])):s>=o.length?(a=new $E(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var cL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lL=`uniform sampler2D shadow_pass;
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
}`,uL=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],dL=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],qE=new zt,Vc=new j,lv=new j;function fL(n,e,t){let i=new Ec,r=new mt,s=new mt,o=new Ot,a=new zd,c=new Gd,l={},u=t.maxTextureSize,d={[nr]:gn,[gn]:nr,[Li]:Li},f=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:cL,fragmentShader:lL}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new Pi;g.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Mn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ac;let p=this.type;this.render=function(w,I,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===jS&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ac);let T=n.getRenderTarget(),L=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Oi),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let V=p!==this.type;V&&I.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(A=>A.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,A=w.length;k<A;k++){let O=w[k],U=O.shadow;if(U===void 0){Ne("WebGLShadowMap:",O,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);let C=U.getFrameExtents();r.multiply(C),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/C.x),r.x=s.x*C.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/C.y),r.y=s.y*C.y,U.mapSize.y=s.y));let ee=n.state.buffers.depth.getReversed();if(U.camera._reversedDepth=ee,U.map===null||V===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Fo){if(O.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new kn(r.x,r.y,{format:zr,type:Fi,minFilter:nn,magFilter:nn,generateMipmaps:!1}),U.map.texture.name=O.name+".shadowMap",U.map.depthTexture=new ir(r.x,r.y,mi),U.map.depthTexture.name=O.name+".shadowMapDepth",U.map.depthTexture.format=Ii,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Zt,U.map.depthTexture.magFilter=Zt}else O.isPointLight?(U.map=new Wf(r.x),U.map.depthTexture=new Vd(r.x,pi)):(U.map=new kn(r.x,r.y),U.map.depthTexture=new ir(r.x,r.y,pi)),U.map.depthTexture.name=O.name+".shadowMap",U.map.depthTexture.format=Ii,this.type===Ac?(U.map.depthTexture.compareFunction=ee?Hf:Vf,U.map.depthTexture.minFilter=nn,U.map.depthTexture.magFilter=nn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Zt,U.map.depthTexture.magFilter=Zt);U.camera.updateProjectionMatrix()}let $=U.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<$;te++){if(U.map.isWebGLCubeRenderTarget)n.setRenderTarget(U.map,te),n.clear();else{te===0&&(n.setRenderTarget(U.map),n.clear());let me=U.getViewport(te);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),H.viewport(o)}if(O.isPointLight){let me=U.camera,Ie=U.matrix,Ce=O.distance||me.far;Ce!==me.far&&(me.far=Ce,me.updateProjectionMatrix()),Vc.setFromMatrixPosition(O.matrixWorld),me.position.copy(Vc),lv.copy(me.position),lv.add(uL[te]),me.up.copy(dL[te]),me.lookAt(lv),me.updateMatrixWorld(),Ie.makeTranslation(-Vc.x,-Vc.y,-Vc.z),qE.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),U._frustum.setFromProjectionMatrix(qE,me.coordinateSystem,me.reversedDepth)}else U.updateMatrices(O);i=U.getFrustum(),M(I,y,U.camera,O,this.type)}U.isPointLightShadow!==!0&&this.type===Fo&&E(U,y),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,L,D)};function E(w,I){let y=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new kn(r.x,r.y,{format:zr,type:Fi})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(I,null,y,f,x,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(I,null,y,h,x,null)}function b(w,I,y,T){let L=null,D=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)L=D;else if(L=y.isPointLight===!0?c:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let H=L.uuid,V=I.uuid,k=l[H];k===void 0&&(k={},l[H]=k);let A=k[V];A===void 0&&(A=L.clone(),k[V]=A,I.addEventListener("dispose",N)),L=A}if(L.visible=I.visible,L.wireframe=I.wireframe,T===Fo?L.side=I.shadowSide!==null?I.shadowSide:I.side:L.side=I.shadowSide!==null?I.shadowSide:d[I.side],L.alphaMap=I.alphaMap,L.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,L.map=I.map,L.clipShadows=I.clipShadows,L.clippingPlanes=I.clippingPlanes,L.clipIntersection=I.clipIntersection,L.displacementMap=I.displacementMap,L.displacementScale=I.displacementScale,L.displacementBias=I.displacementBias,L.wireframeLinewidth=I.wireframeLinewidth,L.linewidth=I.linewidth,y.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let H=n.properties.get(L);H.light=y}return L}function M(w,I,y,T,L){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===Fo)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let V=e.update(w),k=w.material;if(Array.isArray(k)){let A=V.groups;for(let O=0,U=A.length;O<U;O++){let C=A[O],ee=k[C.materialIndex];if(ee&&ee.visible){let $=b(w,ee,T,L);w.onBeforeShadow(n,w,I,y,V,$,C),n.renderBufferDirect(y,null,V,$,w,C),w.onAfterShadow(n,w,I,y,V,$,C)}}}else if(k.visible){let A=b(w,k,T,L);w.onBeforeShadow(n,w,I,y,V,A,null),n.renderBufferDirect(y,null,V,A,w,null),w.onAfterShadow(n,w,I,y,V,A,null)}}let H=w.children;for(let V=0,k=H.length;V<k;V++)M(H[V],I,y,T,L)}function N(w){w.target.removeEventListener("dispose",N);for(let y in l){let T=l[y],L=w.target.uuid;L in T&&(T[L].dispose(),delete T[L])}}}function hL(n,e){function t(){let R=!1,se=new Ot,X=null,ye=new Ot(0,0,0,0);return{setMask:function(ae){X!==ae&&!R&&(n.colorMask(ae,ae,ae,ae),X=ae)},setLocked:function(ae){R=ae},setClear:function(ae,K,be,He,Ft){Ft===!0&&(ae*=He,K*=He,be*=He),se.set(ae,K,be,He),ye.equals(se)===!1&&(n.clearColor(ae,K,be,He),ye.copy(se))},reset:function(){R=!1,X=null,ye.set(-1,0,0,0)}}}function i(){let R=!1,se=!1,X=null,ye=null,ae=null;return{setReversed:function(K){if(se!==K){let be=e.get("EXT_clip_control");K?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),se=K;let He=ae;ae=null,this.setClear(He)}},getReversed:function(){return se},setTest:function(K){K?ne(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(K){X!==K&&!R&&(n.depthMask(K),X=K)},setFunc:function(K){if(se&&(K=bE[K]),ye!==K){switch(K){case bd:n.depthFunc(n.NEVER);break;case Md:n.depthFunc(n.ALWAYS);break;case wd:n.depthFunc(n.LESS);break;case Ss:n.depthFunc(n.LEQUAL);break;case Td:n.depthFunc(n.EQUAL);break;case Cd:n.depthFunc(n.GEQUAL);break;case Dd:n.depthFunc(n.GREATER);break;case Ad:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=K}},setLocked:function(K){R=K},setClear:function(K){ae!==K&&(ae=K,se&&(K=1-K),n.clearDepth(K))},reset:function(){R=!1,X=null,ye=null,ae=null,se=!1}}}function r(){let R=!1,se=null,X=null,ye=null,ae=null,K=null,be=null,He=null,Ft=null;return{setTest:function(yt){R||(yt?ne(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(yt){se!==yt&&!R&&(n.stencilMask(yt),se=yt)},setFunc:function(yt,Bi,gi){(X!==yt||ye!==Bi||ae!==gi)&&(n.stencilFunc(yt,Bi,gi),X=yt,ye=Bi,ae=gi)},setOp:function(yt,Bi,gi){(K!==yt||be!==Bi||He!==gi)&&(n.stencilOp(yt,Bi,gi),K=yt,be=Bi,He=gi)},setLocked:function(yt){R=yt},setClear:function(yt){Ft!==yt&&(n.clearStencil(yt),Ft=yt)},reset:function(){R=!1,se=null,X=null,ye=null,ae=null,K=null,be=null,He=null,Ft=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},f={},h=new WeakMap,g=[],x=null,m=!1,p=null,E=null,b=null,M=null,N=null,w=null,I=null,y=new ut(0,0,0),T=0,L=!1,D=null,H=null,V=null,k=null,A=null,O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,C=0,ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(C=parseFloat(/^WebGL (\d)/.exec(ee)[1]),U=C>=1):ee.indexOf("OpenGL ES")!==-1&&(C=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),U=C>=2);let $=null,te={},me=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),Ce=new Ot().fromArray(me),Te=new Ot().fromArray(Ie);function Y(R,se,X,ye){let ae=new Uint8Array(4),K=n.createTexture();n.bindTexture(R,K),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let be=0;be<X;be++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(se+be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return K}let fe={};fe[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(n.DEPTH_TEST),o.setFunc(Ss),It(!1),Dt(Ng),ne(n.CULL_FACE),gt(Oi);function ne(R){u[R]!==!0&&(n.enable(R),u[R]=!0)}function De(R){u[R]!==!1&&(n.disable(R),u[R]=!1)}function Pe(R,se){return f[R]!==se?(n.bindFramebuffer(R,se),f[R]=se,R===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=se),R===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=se),!0):!1}function Re(R,se){let X=g,ye=!1;if(R){X=h.get(se),X===void 0&&(X=[],h.set(se,X));let ae=R.textures;if(X.length!==ae.length||X[0]!==n.COLOR_ATTACHMENT0){for(let K=0,be=ae.length;K<be;K++)X[K]=n.COLOR_ATTACHMENT0+K;X.length=ae.length,ye=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,ye=!0);ye&&n.drawBuffers(X)}function Tt(R){return x!==R?(n.useProgram(R),x=R,!0):!1}let Ze={[Pr]:n.FUNC_ADD,[$S]:n.FUNC_SUBTRACT,[qS]:n.FUNC_REVERSE_SUBTRACT};Ze[XS]=n.MIN,Ze[YS]=n.MAX;let dt={[ZS]:n.ZERO,[JS]:n.ONE,[KS]:n.SRC_COLOR,[Sd]:n.SRC_ALPHA,[rE]:n.SRC_ALPHA_SATURATE,[nE]:n.DST_COLOR,[eE]:n.DST_ALPHA,[QS]:n.ONE_MINUS_SRC_COLOR,[Ed]:n.ONE_MINUS_SRC_ALPHA,[iE]:n.ONE_MINUS_DST_COLOR,[tE]:n.ONE_MINUS_DST_ALPHA,[sE]:n.CONSTANT_COLOR,[oE]:n.ONE_MINUS_CONSTANT_COLOR,[aE]:n.CONSTANT_ALPHA,[cE]:n.ONE_MINUS_CONSTANT_ALPHA};function gt(R,se,X,ye,ae,K,be,He,Ft,yt){if(R===Oi){m===!0&&(De(n.BLEND),m=!1);return}if(m===!1&&(ne(n.BLEND),m=!0),R!==WS){if(R!==p||yt!==L){if((E!==Pr||N!==Pr)&&(n.blendEquation(n.FUNC_ADD),E=Pr,N=Pr),yt)switch(R){case xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pg:n.blendFunc(n.ONE,n.ONE);break;case Lg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Og:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Le("WebGLState: Invalid blending: ",R);break}else switch(R){case xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pg:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Lg:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Og:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",R);break}b=null,M=null,w=null,I=null,y.set(0,0,0),T=0,p=R,L=yt}return}ae=ae||se,K=K||X,be=be||ye,(se!==E||ae!==N)&&(n.blendEquationSeparate(Ze[se],Ze[ae]),E=se,N=ae),(X!==b||ye!==M||K!==w||be!==I)&&(n.blendFuncSeparate(dt[X],dt[ye],dt[K],dt[be]),b=X,M=ye,w=K,I=be),(He.equals(y)===!1||Ft!==T)&&(n.blendColor(He.r,He.g,He.b,Ft),y.copy(He),T=Ft),p=R,L=!1}function Ge(R,se){R.side===Li?De(n.CULL_FACE):ne(n.CULL_FACE);let X=R.side===gn;se&&(X=!X),It(X),R.blending===xs&&R.transparent===!1?gt(Oi):gt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),s.setMask(R.colorWrite);let ye=R.stencilWrite;a.setTest(ye),ye&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),P(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function It(R){D!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),D=R)}function Dt(R){R!==zS?(ne(n.CULL_FACE),R!==H&&(R===Ng?n.cullFace(n.BACK):R===GS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),H=R}function Jt(R){R!==V&&(U&&n.lineWidth(R),V=R)}function P(R,se,X){R?(ne(n.POLYGON_OFFSET_FILL),(k!==se||A!==X)&&(k=se,A=X,o.getReversed()&&(se=-se),n.polygonOffset(se,X))):De(n.POLYGON_OFFSET_FILL)}function Rt(R){R?ne(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function Je(R){R===void 0&&(R=n.TEXTURE0+O-1),$!==R&&(n.activeTexture(R),$=R)}function vt(R,se,X){X===void 0&&($===null?X=n.TEXTURE0+O-1:X=$);let ye=te[X];ye===void 0&&(ye={type:void 0,texture:void 0},te[X]=ye),(ye.type!==R||ye.texture!==se)&&($!==X&&(n.activeTexture(X),$=X),n.bindTexture(R,se||fe[R]),ye.type=R,ye.texture=se)}function ue(){let R=te[$];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function At(){try{n.compressedTexImage2D(...arguments)}catch(R){Le("WebGLState:",R)}}function S(){try{n.compressedTexImage3D(...arguments)}catch(R){Le("WebGLState:",R)}}function v(){try{n.texSubImage2D(...arguments)}catch(R){Le("WebGLState:",R)}}function B(){try{n.texSubImage3D(...arguments)}catch(R){Le("WebGLState:",R)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(R){Le("WebGLState:",R)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(R){Le("WebGLState:",R)}}function ie(){try{n.texStorage2D(...arguments)}catch(R){Le("WebGLState:",R)}}function ce(){try{n.texStorage3D(...arguments)}catch(R){Le("WebGLState:",R)}}function q(){try{n.texImage2D(...arguments)}catch(R){Le("WebGLState:",R)}}function J(){try{n.texImage3D(...arguments)}catch(R){Le("WebGLState:",R)}}function ve(R){return d[R]!==void 0?d[R]:n.getParameter(R)}function xe(R,se){d[R]!==se&&(n.pixelStorei(R,se),d[R]=se)}function oe(R){Ce.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),Ce.copy(R))}function re(R){Te.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),Te.copy(R))}function ke(R,se){let X=l.get(se);X===void 0&&(X=new WeakMap,l.set(se,X));let ye=X.get(R);ye===void 0&&(ye=n.getUniformBlockIndex(se,R.name),X.set(R,ye))}function je(R,se){let ye=l.get(se).get(R);c.get(se)!==ye&&(n.uniformBlockBinding(se,ye,R.__bindingPointIndex),c.set(se,ye))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},$=null,te={},f={},h=new WeakMap,g=[],x=null,m=!1,p=null,E=null,b=null,M=null,N=null,w=null,I=null,y=new ut(0,0,0),T=0,L=!1,D=null,H=null,V=null,k=null,A=null,Ce.set(0,0,n.canvas.width,n.canvas.height),Te.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:De,bindFramebuffer:Pe,drawBuffers:Re,useProgram:Tt,setBlending:gt,setMaterial:Ge,setFlipSided:It,setCullFace:Dt,setLineWidth:Jt,setPolygonOffset:P,setScissorTest:Rt,activeTexture:Je,bindTexture:vt,unbindTexture:ue,compressedTexImage2D:At,compressedTexImage3D:S,texImage2D:q,texImage3D:J,pixelStorei:xe,getParameter:ve,updateUBOMapping:ke,uniformBlockBinding:je,texStorage2D:ie,texStorage3D:ce,texSubImage2D:v,texSubImage3D:B,compressedTexSubImage2D:Z,compressedTexSubImage3D:Q,scissor:oe,viewport:re,reset:st}}function pL(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new mt,u=new WeakMap,d=new Set,f,h=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(S,v){return g?new OffscreenCanvas(S,v):mc("canvas")}function m(S,v,B){let Z=1,Q=At(S);if((Q.width>B||Q.height>B)&&(Z=B/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let ie=Math.floor(Z*Q.width),ce=Math.floor(Z*Q.height);f===void 0&&(f=x(ie,ce));let q=v?x(ie,ce):f;return q.width=ie,q.height=ce,q.getContext("2d").drawImage(S,0,0,ie,ce),Ne("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ie+"x"+ce+")."),q}else return"data"in S&&Ne("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),S;return S}function p(S){return S.generateMipmaps}function E(S){n.generateMipmap(S)}function b(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(S,v,B,Z,Q,ie=!1){if(S!==null){if(n[S]!==void 0)return n[S];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ce;Z&&(ce=e.get("EXT_texture_norm16"),ce||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=v;if(v===n.RED&&(B===n.FLOAT&&(q=n.R32F),B===n.HALF_FLOAT&&(q=n.R16F),B===n.UNSIGNED_BYTE&&(q=n.R8),B===n.UNSIGNED_SHORT&&ce&&(q=ce.R16_EXT),B===n.SHORT&&ce&&(q=ce.R16_SNORM_EXT)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.R8UI),B===n.UNSIGNED_SHORT&&(q=n.R16UI),B===n.UNSIGNED_INT&&(q=n.R32UI),B===n.BYTE&&(q=n.R8I),B===n.SHORT&&(q=n.R16I),B===n.INT&&(q=n.R32I)),v===n.RG&&(B===n.FLOAT&&(q=n.RG32F),B===n.HALF_FLOAT&&(q=n.RG16F),B===n.UNSIGNED_BYTE&&(q=n.RG8),B===n.UNSIGNED_SHORT&&ce&&(q=ce.RG16_EXT),B===n.SHORT&&ce&&(q=ce.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RG8UI),B===n.UNSIGNED_SHORT&&(q=n.RG16UI),B===n.UNSIGNED_INT&&(q=n.RG32UI),B===n.BYTE&&(q=n.RG8I),B===n.SHORT&&(q=n.RG16I),B===n.INT&&(q=n.RG32I)),v===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGB8UI),B===n.UNSIGNED_SHORT&&(q=n.RGB16UI),B===n.UNSIGNED_INT&&(q=n.RGB32UI),B===n.BYTE&&(q=n.RGB8I),B===n.SHORT&&(q=n.RGB16I),B===n.INT&&(q=n.RGB32I)),v===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),B===n.UNSIGNED_INT&&(q=n.RGBA32UI),B===n.BYTE&&(q=n.RGBA8I),B===n.SHORT&&(q=n.RGBA16I),B===n.INT&&(q=n.RGBA32I)),v===n.RGB&&(B===n.UNSIGNED_SHORT&&ce&&(q=ce.RGB16_EXT),B===n.SHORT&&ce&&(q=ce.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),v===n.RGBA){let J=ie?hc:nt.getTransfer(Q);B===n.FLOAT&&(q=n.RGBA32F),B===n.HALF_FLOAT&&(q=n.RGBA16F),B===n.UNSIGNED_BYTE&&(q=J===pt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&ce&&(q=ce.RGBA16_EXT),B===n.SHORT&&ce&&(q=ce.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function N(S,v){let B;return S?v===null||v===pi||v===Uo?B=n.DEPTH24_STENCIL8:v===mi?B=n.DEPTH32F_STENCIL8:v===ko&&(B=n.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===pi||v===Uo?B=n.DEPTH_COMPONENT24:v===mi?B=n.DEPTH_COMPONENT32F:v===ko&&(B=n.DEPTH_COMPONENT16),B}function w(S,v){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==Zt&&S.minFilter!==nn?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function I(S){let v=S.target;v.removeEventListener("dispose",I),T(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function y(S){let v=S.target;v.removeEventListener("dispose",y),D(v)}function T(S){let v=i.get(S);if(v.__webglInit===void 0)return;let B=S.source,Z=h.get(B);if(Z){let Q=Z[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&L(S),Object.keys(Z).length===0&&h.delete(B)}i.remove(S)}function L(S){let v=i.get(S);n.deleteTexture(v.__webglTexture);let B=S.source,Z=h.get(B);delete Z[v.__cacheKey],o.memory.textures--}function D(S){let v=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let Q=0;Q<v.__webglFramebuffer[Z].length;Q++)n.deleteFramebuffer(v.__webglFramebuffer[Z][Q]);else n.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[Z]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let B=S.textures;for(let Z=0,Q=B.length;Z<Q;Z++){let ie=i.get(B[Z]);ie.__webglTexture&&(n.deleteTexture(ie.__webglTexture),o.memory.textures--),i.remove(B[Z])}i.remove(S)}let H=0;function V(){H=0}function k(){return H}function A(S){H=S}function O(){let S=H;return S>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),H+=1,S}function U(S){let v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function C(S,v){let B=i.get(S);if(S.isVideoTexture&&vt(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&B.__version!==S.version){let Z=S.image;if(Z===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{De(B,S,v);return}}else S.isExternalTexture&&(B.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function ee(S,v){let B=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){De(B,S,v);return}else S.isExternalTexture&&(B.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function $(S,v){let B=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){De(B,S,v);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function te(S,v){let B=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&B.__version!==S.version){Pe(B,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}let me={[Id]:n.REPEAT,[Ai]:n.CLAMP_TO_EDGE,[Rd]:n.MIRRORED_REPEAT},Ie={[Zt]:n.NEAREST,[dE]:n.NEAREST_MIPMAP_NEAREST,[Rc]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[nf]:n.LINEAR_MIPMAP_NEAREST,[Vr]:n.LINEAR_MIPMAP_LINEAR},Ce={[pE]:n.NEVER,[_E]:n.ALWAYS,[mE]:n.LESS,[Vf]:n.LEQUAL,[gE]:n.EQUAL,[Hf]:n.GEQUAL,[vE]:n.GREATER,[yE]:n.NOTEQUAL};function Te(S,v){if(v.type===mi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===nn||v.magFilter===nf||v.magFilter===Rc||v.magFilter===Vr||v.minFilter===nn||v.minFilter===nf||v.minFilter===Rc||v.minFilter===Vr)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,me[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,me[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,me[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,Ie[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,Ie[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Ce[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Zt||v.minFilter!==Rc&&v.minFilter!==Vr||v.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Y(S,v){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",I));let Z=v.source,Q=h.get(Z);Q===void 0&&(Q={},h.set(Z,Q));let ie=U(v);if(ie!==S.__cacheKey){Q[ie]===void 0&&(Q[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[ie].usedTimes++;let ce=Q[S.__cacheKey];ce!==void 0&&(Q[S.__cacheKey].usedTimes--,ce.usedTimes===0&&L(v)),S.__cacheKey=ie,S.__webglTexture=Q[ie].texture}return B}function fe(S,v,B){return Math.floor(Math.floor(S/B)/v)}function ne(S,v,B,Z){let ie=S.updateRanges;if(ie.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,B,Z,v.data);else{ie.sort((xe,oe)=>xe.start-oe.start);let ce=0;for(let xe=1;xe<ie.length;xe++){let oe=ie[ce],re=ie[xe],ke=oe.start+oe.count,je=fe(re.start,v.width,4),st=fe(oe.start,v.width,4);re.start<=ke+1&&je===st&&fe(re.start+re.count-1,v.width,4)===je?oe.count=Math.max(oe.count,re.start+re.count-oe.start):(++ce,ie[ce]=re)}ie.length=ce+1;let q=t.getParameter(n.UNPACK_ROW_LENGTH),J=t.getParameter(n.UNPACK_SKIP_PIXELS),ve=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let xe=0,oe=ie.length;xe<oe;xe++){let re=ie[xe],ke=Math.floor(re.start/4),je=Math.ceil(re.count/4),st=ke%v.width,R=Math.floor(ke/v.width),se=je,X=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,st),t.pixelStorei(n.UNPACK_SKIP_ROWS,R),t.texSubImage2D(n.TEXTURE_2D,0,st,R,se,X,B,Z,v.data)}S.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,J),t.pixelStorei(n.UNPACK_SKIP_ROWS,ve)}}function De(S,v,B){let Z=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=n.TEXTURE_3D);let Q=Y(S,v),ie=v.source;t.bindTexture(Z,S.__webglTexture,n.TEXTURE0+B);let ce=i.get(ie);if(ie.version!==ce.__version||Q===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let X=nt.getPrimaries(nt.workingColorSpace),ye=v.colorSpace===rr?null:nt.getPrimaries(v.colorSpace),ae=v.colorSpace===rr||X===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let J=m(v.image,!1,r.maxTextureSize);J=ue(v,J);let ve=s.convert(v.format,v.colorSpace),xe=s.convert(v.type),oe=M(v.internalFormat,ve,xe,v.normalized,v.colorSpace,v.isVideoTexture);Te(Z,v);let re,ke=v.mipmaps,je=v.isVideoTexture!==!0,st=ce.__version===void 0||Q===!0,R=ie.dataReady,se=w(v,J);if(v.isDepthTexture)oe=N(v.format===Hr,v.type),st&&(je?t.texStorage2D(n.TEXTURE_2D,1,oe,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,oe,J.width,J.height,0,ve,xe,null));else if(v.isDataTexture)if(ke.length>0){je&&st&&t.texStorage2D(n.TEXTURE_2D,se,oe,ke[0].width,ke[0].height);for(let X=0,ye=ke.length;X<ye;X++)re=ke[X],je?R&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,re.width,re.height,ve,xe,re.data):t.texImage2D(n.TEXTURE_2D,X,oe,re.width,re.height,0,ve,xe,re.data);v.generateMipmaps=!1}else je?(st&&t.texStorage2D(n.TEXTURE_2D,se,oe,J.width,J.height),R&&ne(v,J,ve,xe)):t.texImage2D(n.TEXTURE_2D,0,oe,J.width,J.height,0,ve,xe,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){je&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,oe,ke[0].width,ke[0].height,J.depth);for(let X=0,ye=ke.length;X<ye;X++)if(re=ke[X],v.format!==Kn)if(ve!==null)if(je){if(R)if(v.layerUpdates.size>0){let ae=iv(re.width,re.height,v.format,v.type);for(let K of v.layerUpdates){let be=re.data.subarray(K*ae/re.data.BYTES_PER_ELEMENT,(K+1)*ae/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,K,re.width,re.height,1,ve,be)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,re.width,re.height,J.depth,ve,re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,oe,re.width,re.height,J.depth,0,re.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?R&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,re.width,re.height,J.depth,ve,xe,re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,oe,re.width,re.height,J.depth,0,ve,xe,re.data)}else{je&&st&&t.texStorage2D(n.TEXTURE_2D,se,oe,ke[0].width,ke[0].height);for(let X=0,ye=ke.length;X<ye;X++)re=ke[X],v.format!==Kn?ve!==null?je?R&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,re.width,re.height,ve,re.data):t.compressedTexImage2D(n.TEXTURE_2D,X,oe,re.width,re.height,0,re.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?R&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,re.width,re.height,ve,xe,re.data):t.texImage2D(n.TEXTURE_2D,X,oe,re.width,re.height,0,ve,xe,re.data)}else if(v.isDataArrayTexture)if(je){if(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,oe,J.width,J.height,J.depth),R)if(v.layerUpdates.size>0){let X=iv(J.width,J.height,v.format,v.type);for(let ye of v.layerUpdates){let ae=J.data.subarray(ye*X/J.data.BYTES_PER_ELEMENT,(ye+1)*X/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ye,J.width,J.height,1,ve,xe,ae)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ve,xe,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,oe,J.width,J.height,J.depth,0,ve,xe,J.data);else if(v.isData3DTexture)je?(st&&t.texStorage3D(n.TEXTURE_3D,se,oe,J.width,J.height,J.depth),R&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ve,xe,J.data)):t.texImage3D(n.TEXTURE_3D,0,oe,J.width,J.height,J.depth,0,ve,xe,J.data);else if(v.isFramebufferTexture){if(st)if(je)t.texStorage2D(n.TEXTURE_2D,se,oe,J.width,J.height);else{let X=J.width,ye=J.height;for(let ae=0;ae<se;ae++)t.texImage2D(n.TEXTURE_2D,ae,oe,X,ye,0,ve,xe,null),X>>=1,ye>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let X=n.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),J.parentNode!==X){X.appendChild(J),d.add(v),X.onpaint=He=>{let Ft=He.changedElements;for(let yt of d)Ft.includes(yt.image)&&(yt.needsUpdate=!0)},X.requestPaint();return}let ye=0,ae=n.RGBA,K=n.RGBA,be=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,ye,ae,K,be,J),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ke.length>0){if(je&&st){let X=At(ke[0]);t.texStorage2D(n.TEXTURE_2D,se,oe,X.width,X.height)}for(let X=0,ye=ke.length;X<ye;X++)re=ke[X],je?R&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ve,xe,re):t.texImage2D(n.TEXTURE_2D,X,oe,ve,xe,re);v.generateMipmaps=!1}else if(je){if(st){let X=At(J);t.texStorage2D(n.TEXTURE_2D,se,oe,X.width,X.height)}R&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,xe,J)}else t.texImage2D(n.TEXTURE_2D,0,oe,ve,xe,J);p(v)&&E(Z),ce.__version=ie.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function Pe(S,v,B){if(v.image.length!==6)return;let Z=Y(S,v),Q=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+B);let ie=i.get(Q);if(Q.version!==ie.__version||Z===!0){t.activeTexture(n.TEXTURE0+B);let ce=nt.getPrimaries(nt.workingColorSpace),q=v.colorSpace===rr?null:nt.getPrimaries(v.colorSpace),J=v.colorSpace===rr||ce===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ve=v.isCompressedTexture||v.image[0].isCompressedTexture,xe=v.image[0]&&v.image[0].isDataTexture,oe=[];for(let K=0;K<6;K++)!ve&&!xe?oe[K]=m(v.image[K],!0,r.maxCubemapSize):oe[K]=xe?v.image[K].image:v.image[K],oe[K]=ue(v,oe[K]);let re=oe[0],ke=s.convert(v.format,v.colorSpace),je=s.convert(v.type),st=M(v.internalFormat,ke,je,v.normalized,v.colorSpace),R=v.isVideoTexture!==!0,se=ie.__version===void 0||Z===!0,X=Q.dataReady,ye=w(v,re);Te(n.TEXTURE_CUBE_MAP,v);let ae;if(ve){R&&se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,st,re.width,re.height);for(let K=0;K<6;K++){ae=oe[K].mipmaps;for(let be=0;be<ae.length;be++){let He=ae[be];v.format!==Kn?ke!==null?R?X&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,be,0,0,He.width,He.height,ke,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,be,st,He.width,He.height,0,He.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,be,0,0,He.width,He.height,ke,je,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,be,st,He.width,He.height,0,ke,je,He.data)}}}else{if(ae=v.mipmaps,R&&se){ae.length>0&&ye++;let K=At(oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,st,K.width,K.height)}for(let K=0;K<6;K++)if(xe){R?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,oe[K].width,oe[K].height,ke,je,oe[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,st,oe[K].width,oe[K].height,0,ke,je,oe[K].data);for(let be=0;be<ae.length;be++){let Ft=ae[be].image[K].image;R?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,be+1,0,0,Ft.width,Ft.height,ke,je,Ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,be+1,st,Ft.width,Ft.height,0,ke,je,Ft.data)}}else{R?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ke,je,oe[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,st,ke,je,oe[K]);for(let be=0;be<ae.length;be++){let He=ae[be];R?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,be+1,0,0,ke,je,He.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,be+1,st,ke,je,He.image[K])}}}p(v)&&E(n.TEXTURE_CUBE_MAP),ie.__version=Q.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function Re(S,v,B,Z,Q,ie){let ce=s.convert(B.format,B.colorSpace),q=s.convert(B.type),J=M(B.internalFormat,ce,q,B.normalized,B.colorSpace),ve=i.get(v),xe=i.get(B);if(xe.__renderTarget=v,!ve.__hasExternalTextures){let oe=Math.max(1,v.width>>ie),re=Math.max(1,v.height>>ie);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,ie,J,oe,re,v.depth,0,ce,q,null):t.texImage2D(Q,ie,J,oe,re,0,ce,q,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),Je(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Q,xe.__webglTexture,0,Rt(v)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,Q,xe.__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Tt(S,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer){let Z=v.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,ie=N(v.stencilBuffer,Q),ce=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Je(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt(v),ie,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt(v),ie,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ie,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,S)}else{let Z=v.textures;for(let Q=0;Q<Z.length;Q++){let ie=Z[Q],ce=s.convert(ie.format,ie.colorSpace),q=s.convert(ie.type),J=M(ie.internalFormat,ce,q,ie.normalized,ie.colorSpace);Je(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt(v),J,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt(v),J,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,J,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ze(S,v,B){let Z=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(v.depthTexture);if(Q.__renderTarget=v,(!Q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,v.depthTexture.addEventListener("dispose",I)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Te(n.TEXTURE_CUBE_MAP,v.depthTexture);let ve=s.convert(v.depthTexture.format),xe=s.convert(v.depthTexture.type),oe;v.depthTexture.format===Ii?oe=n.DEPTH_COMPONENT24:v.depthTexture.format===Hr&&(oe=n.DEPTH24_STENCIL8);for(let re=0;re<6;re++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,oe,v.width,v.height,0,ve,xe,null)}}else C(v.depthTexture,0);let ie=Q.__webglTexture,ce=Rt(v),q=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,J=v.depthTexture.format===Hr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ii)Je(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,q,ie,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,J,q,ie,0);else if(v.depthTexture.format===Hr)Je(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,q,ie,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,J,q,ie,0);else throw new Error("Unknown depthTexture format")}function dt(S){let v=i.get(S),B=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){let Z=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){let Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=Z}if(S.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let Z=0;Z<6;Z++)Ze(v.__webglFramebuffer[Z],S,Z);else{let Z=S.texture.mipmaps;Z&&Z.length>0?Ze(v.__webglFramebuffer[0],S,0):Ze(v.__webglFramebuffer,S,0)}else if(B){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=n.createRenderbuffer(),Tt(v.__webglDepthbuffer[Z],S,!1);else{let Q=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=v.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ie)}}else{let Z=S.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Tt(v.__webglDepthbuffer,S,!1);else{let Q=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ie)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(S,v,B){let Z=i.get(S);v!==void 0&&Re(Z.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&dt(S)}function Ge(S){let v=S.texture,B=i.get(S),Z=i.get(v);S.addEventListener("dispose",y);let Q=S.textures,ie=S.isWebGLCubeRenderTarget===!0,ce=Q.length>1;if(ce||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=v.version,o.memory.textures++),ie){B.__webglFramebuffer=[];for(let q=0;q<6;q++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[q]=[];for(let J=0;J<v.mipmaps.length;J++)B.__webglFramebuffer[q][J]=n.createFramebuffer()}else B.__webglFramebuffer[q]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let q=0;q<v.mipmaps.length;q++)B.__webglFramebuffer[q]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(ce)for(let q=0,J=Q.length;q<J;q++){let ve=i.get(Q[q]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&Je(S)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let q=0;q<Q.length;q++){let J=Q[q];B.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[q]);let ve=s.convert(J.format,J.colorSpace),xe=s.convert(J.type),oe=M(J.internalFormat,ve,xe,J.normalized,J.colorSpace,S.isXRRenderTarget===!0),re=Rt(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,re,oe,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,B.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Tt(B.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Te(n.TEXTURE_CUBE_MAP,v);for(let q=0;q<6;q++)if(v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Re(B.__webglFramebuffer[q][J],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,J);else Re(B.__webglFramebuffer[q],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);p(v)&&E(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let q=0,J=Q.length;q<J;q++){let ve=Q[q],xe=i.get(ve),oe=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(oe=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,xe.__webglTexture),Te(oe,ve),Re(B.__webglFramebuffer,S,ve,n.COLOR_ATTACHMENT0+q,oe,0),p(ve)&&E(oe)}t.unbindTexture()}else{let q=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(q=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,Z.__webglTexture),Te(q,v),v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Re(B.__webglFramebuffer[J],S,v,n.COLOR_ATTACHMENT0,q,J);else Re(B.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,q,0);p(v)&&E(q),t.unbindTexture()}S.depthBuffer&&dt(S)}function It(S){let v=S.textures;for(let B=0,Z=v.length;B<Z;B++){let Q=v[B];if(p(Q)){let ie=b(S),ce=i.get(Q).__webglTexture;t.bindTexture(ie,ce),E(ie),t.unbindTexture()}}}let Dt=[],Jt=[];function P(S){if(S.samples>0){if(Je(S)===!1){let v=S.textures,B=S.width,Z=S.height,Q=n.COLOR_BUFFER_BIT,ie=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(S),q=v.length>1;if(q)for(let ve=0;ve<v.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let J=S.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ve=0;ve<v.length;ve++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[ve]);let xe=i.get(v[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xe,0)}n.blitFramebuffer(0,0,B,Z,0,0,B,Z,Q,n.NEAREST),c===!0&&(Dt.length=0,Jt.length=0,Dt.push(n.COLOR_ATTACHMENT0+ve),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Dt.push(ie),Jt.push(ie),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Jt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Dt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let ve=0;ve<v.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,ce.__webglColorRenderbuffer[ve]);let xe=i.get(v[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let v=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Rt(S){return Math.min(r.maxSamples,S.samples)}function Je(S){let v=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function vt(S){let v=o.render.frame;u.get(S)!==v&&(u.set(S,v),S.update())}function ue(S,v){let B=S.colorSpace,Z=S.format,Q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||B!==fc&&B!==rr&&(nt.getTransfer(B)===pt?(Z!==Kn||Q!==Vn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",B)),v}function At(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=V,this.getTextureUnits=k,this.setTextureUnits=A,this.setTexture2D=C,this.setTexture2DArray=ee,this.setTexture3D=$,this.setTextureCube=te,this.rebindTextures=gt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function mL(n,e){function t(i,r=rr){let s,o=nt.getTransfer(r);if(i===Vn)return n.UNSIGNED_BYTE;if(i===sf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===of)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$g)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===qg)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===jg)return n.BYTE;if(i===Wg)return n.SHORT;if(i===ko)return n.UNSIGNED_SHORT;if(i===rf)return n.INT;if(i===pi)return n.UNSIGNED_INT;if(i===mi)return n.FLOAT;if(i===Fi)return n.HALF_FLOAT;if(i===Xg)return n.ALPHA;if(i===Yg)return n.RGB;if(i===Kn)return n.RGBA;if(i===Ii)return n.DEPTH_COMPONENT;if(i===Hr)return n.DEPTH_STENCIL;if(i===Zg)return n.RED;if(i===af)return n.RED_INTEGER;if(i===zr)return n.RG;if(i===cf)return n.RG_INTEGER;if(i===lf)return n.RGBA_INTEGER;if(i===Nc||i===Pc||i===Lc||i===Oc)if(o===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Nc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Nc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Oc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===uf||i===df||i===ff||i===hf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===uf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===df)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ff)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pf||i===mf||i===gf||i===vf||i===yf||i===Fc||i===_f)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===pf||i===mf)return o===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===gf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===vf)return s.COMPRESSED_R11_EAC;if(i===yf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Fc)return s.COMPRESSED_RG11_EAC;if(i===_f)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===xf||i===Sf||i===Ef||i===bf||i===Mf||i===wf||i===Tf||i===Cf||i===Df||i===Af||i===If||i===Rf||i===Nf||i===Pf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===xf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ef)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Df)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Af)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===If)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lf||i===Of||i===Ff)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Lf)return o===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Of)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ff)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kf||i===Uf||i===kc||i===Bf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===kf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Uf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Uo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var gL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vL=`
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

}`,vv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Mc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Un({vertexShader:gL,fragmentShader:vL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mn(new wc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yv=class extends Ri{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null,x=typeof XRWebGLBinding<"u",m=new vv,p={},E=t.getContextAttributes(),b=null,M=null,N=[],w=[],I=new mt,y=null,T=new dn;T.viewport=new Ot;let L=new dn;L.viewport=new Ot;let D=[T,L],H=new Qd,V=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let fe=N[Y];return fe===void 0&&(fe=new Lo,N[Y]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Y){let fe=N[Y];return fe===void 0&&(fe=new Lo,N[Y]=fe),fe.getGripSpace()},this.getHand=function(Y){let fe=N[Y];return fe===void 0&&(fe=new Lo,N[Y]=fe),fe.getHandSpace()};function A(Y){let fe=w.indexOf(Y.inputSource);if(fe===-1)return;let ne=N[fe];ne!==void 0&&(ne.update(Y.inputSource,Y.frame,l||o),ne.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",U);for(let Y=0;Y<N.length;Y++){let fe=w[Y];fe!==null&&(w[Y]=null,N[Y].disconnect(fe))}V=null,k=null,m.reset();for(let Y in p)delete p[Y];e.setRenderTarget(b),h=null,f=null,d=null,r=null,M=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",O),r.addEventListener("inputsourceschange",U),E.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,De=null,Pe=null;E.depth&&(Pe=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=E.stencil?Hr:Ii,De=E.stencil?Uo:pi);let Re={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new kn(f.textureWidth,f.textureHeight,{format:Kn,type:Vn,depthTexture:new ir(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ne={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new kn(h.framebufferWidth,h.framebufferHeight,{format:Kn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Te.setContext(r),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(Y){for(let fe=0;fe<Y.removed.length;fe++){let ne=Y.removed[fe],De=w.indexOf(ne);De>=0&&(w[De]=null,N[De].disconnect(ne))}for(let fe=0;fe<Y.added.length;fe++){let ne=Y.added[fe],De=w.indexOf(ne);if(De===-1){for(let Re=0;Re<N.length;Re++)if(Re>=w.length){w.push(ne),De=Re;break}else if(w[Re]===null){w[Re]=ne,De=Re;break}if(De===-1)break}let Pe=N[De];Pe&&Pe.connect(ne)}}let C=new j,ee=new j;function $(Y,fe,ne){C.setFromMatrixPosition(fe.matrixWorld),ee.setFromMatrixPosition(ne.matrixWorld);let De=C.distanceTo(ee),Pe=fe.projectionMatrix.elements,Re=ne.projectionMatrix.elements,Tt=Pe[14]/(Pe[10]-1),Ze=Pe[14]/(Pe[10]+1),dt=(Pe[9]+1)/Pe[5],gt=(Pe[9]-1)/Pe[5],Ge=(Pe[8]-1)/Pe[0],It=(Re[8]+1)/Re[0],Dt=Tt*Ge,Jt=Tt*It,P=De/(-Ge+It),Rt=P*-Ge;if(fe.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Rt),Y.translateZ(P),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Pe[10]===-1)Y.projectionMatrix.copy(fe.projectionMatrix),Y.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{let Je=Tt+P,vt=Ze+P,ue=Dt-Rt,At=Jt+(De-Rt),S=dt*Ze/vt*Je,v=gt*Ze/vt*Je;Y.projectionMatrix.makePerspective(ue,At,S,v,Je,vt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function te(Y,fe){fe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(fe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let fe=Y.near,ne=Y.far;m.texture!==null&&(m.depthNear>0&&(fe=m.depthNear),m.depthFar>0&&(ne=m.depthFar)),H.near=L.near=T.near=fe,H.far=L.far=T.far=ne,(V!==H.near||k!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),V=H.near,k=H.far),H.layers.mask=Y.layers.mask|6,T.layers.mask=H.layers.mask&-5,L.layers.mask=H.layers.mask&-3;let De=Y.parent,Pe=H.cameras;te(H,De);for(let Re=0;Re<Pe.length;Re++)te(Pe[Re],De);Pe.length===2?$(H,T,L):H.projectionMatrix.copy(T.projectionMatrix),me(Y,H,De)};function me(Y,fe,ne){ne===null?Y.matrix.copy(fe.matrixWorld):(Y.matrix.copy(ne.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(fe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(fe.projectionMatrix),Y.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ld*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(Y){return p[Y]};let Ie=null;function Ce(Y,fe){if(u=fe.getViewerPose(l||o),g=fe,u!==null){let ne=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let De=!1;ne.length!==H.cameras.length&&(H.cameras.length=0,De=!0);for(let Ze=0;Ze<ne.length;Ze++){let dt=ne[Ze],gt=null;if(h!==null)gt=h.getViewport(dt);else{let It=d.getViewSubImage(f,dt);gt=It.viewport,Ze===0&&(e.setRenderTargetTextures(M,It.colorTexture,It.depthStencilTexture),e.setRenderTarget(M))}let Ge=D[Ze];Ge===void 0&&(Ge=new dn,Ge.layers.enable(Ze),Ge.viewport=new Ot,D[Ze]=Ge),Ge.matrix.fromArray(dt.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(dt.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(gt.x,gt.y,gt.width,gt.height),Ze===0&&(H.matrix.copy(Ge.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),De===!0&&H.cameras.push(Ge)}let Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let Ze=d.getDepthInformation(ne[0]);Ze&&Ze.isValid&&Ze.texture&&m.init(Ze,r.renderState)}if(Pe&&Pe.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let Ze=0;Ze<ne.length;Ze++){let dt=ne[Ze].camera;if(dt){let gt=p[dt];gt||(gt=new Mc,p[dt]=gt);let Ge=d.getCameraImage(dt);gt.sourceTexture=Ge}}}}for(let ne=0;ne<N.length;ne++){let De=w[ne],Pe=N[ne];De!==null&&Pe!==void 0&&Pe.update(De,fe,l||o)}Ie&&Ie(Y,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),g=null}let Te=new XE;Te.setAnimationLoop(Ce),this.setAnimationLoop=function(Y){Ie=Y},this.dispose=function(){}}},yL=new zt,eb=new Be;eb.set(-1,0,0,0,1,0,0,0,1);function _L(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ev(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,b,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,E,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=e.get(p),b=E.envMap,M=E.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(yL.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(eb),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xL(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,b){let M=b.program;i.uniformBlockBinding(E,M)}function l(E,b){let M=r[E.id];M===void 0&&(g(E),M=u(E),r[E.id]=M,E.addEventListener("dispose",m));let N=b.program;i.updateUBOMapping(E,N);let w=e.render.frame;s[E.id]!==w&&(f(E),s[E.id]=w)}function u(E){let b=d();E.__bindingPointIndex=b;let M=n.createBuffer(),N=E.__size,w=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,N,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let b=r[E.id],M=E.uniforms,N=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let w=0,I=M.length;w<I;w++){let y=Array.isArray(M[w])?M[w]:[M[w]];for(let T=0,L=y.length;T<L;T++){let D=y[T];if(h(D,w,T,N)===!0){let H=D.__offset,V=Array.isArray(D.value)?D.value:[D.value],k=0;for(let A=0;A<V.length;A++){let O=V[A],U=x(O);typeof O=="number"||typeof O=="boolean"?(D.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,H+k,D.__data)):O.isMatrix3?(D.__data[0]=O.elements[0],D.__data[1]=O.elements[1],D.__data[2]=O.elements[2],D.__data[3]=0,D.__data[4]=O.elements[3],D.__data[5]=O.elements[4],D.__data[6]=O.elements[5],D.__data[7]=0,D.__data[8]=O.elements[6],D.__data[9]=O.elements[7],D.__data[10]=O.elements[8],D.__data[11]=0):ArrayBuffer.isView(O)?D.__data.set(new O.constructor(O.buffer,O.byteOffset,D.__data.length)):(O.toArray(D.__data,k),k+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(E,b,M,N){let w=E.value,I=b+"_"+M;if(N[I]===void 0)return typeof w=="number"||typeof w=="boolean"?N[I]=w:ArrayBuffer.isView(w)?N[I]=w.slice():N[I]=w.clone(),!0;{let y=N[I];if(typeof w=="number"||typeof w=="boolean"){if(y!==w)return N[I]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(y.equals(w)===!1)return y.copy(w),!0}}return!1}function g(E){let b=E.uniforms,M=0,N=16;for(let I=0,y=b.length;I<y;I++){let T=Array.isArray(b[I])?b[I]:[b[I]];for(let L=0,D=T.length;L<D;L++){let H=T[L],V=Array.isArray(H.value)?H.value:[H.value];for(let k=0,A=V.length;k<A;k++){let O=V[k],U=x(O),C=M%N,ee=C%U.boundary,$=C+ee;M+=ee,$!==0&&N-$<U.storage&&(M+=N-$),H.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=U.storage}}}let w=M%N;return w>0&&(M+=N-w),E.__size=M,E.__cache={},this}function x(E){let b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(b.boundary=16,b.storage=E.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){let b=E.target;b.removeEventListener("dispose",m);let M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(let E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var SL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ki=null;function EL(){return ki===null&&(ki=new Bd(SL,16,16,zr,Fi),ki.name="DFG_LUT",ki.minFilter=nn,ki.magFilter=nn,ki.wrapS=Ai,ki.wrapT=Ai,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}var $f=class{constructor(e={}){let{canvas:t=xE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Vn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let x=h,m=new Set([lf,cf,af]),p=new Set([Vn,pi,ko,Uo,sf,of]),E=new Uint32Array(4),b=new Int32Array(4),M=new j,N=null,w=null,I=[],y=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,D=!1,H=null;this._outputColorSpace=On;let V=0,k=0,A=null,O=-1,U=null,C=new Ot,ee=new Ot,$=null,te=new ut(0),me=0,Ie=t.width,Ce=t.height,Te=1,Y=null,fe=null,ne=new Ot(0,0,Ie,Ce),De=new Ot(0,0,Ie,Ce),Pe=!1,Re=new Ec,Tt=!1,Ze=!1,dt=new zt,gt=new j,Ge=new Ot,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Dt=!1;function Jt(){return A===null?Te:1}let P=i;function Rt(_,F){return t.getContext(_,F)}try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"184"}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",He,!1),P===null){let F="webgl2";if(P=Rt(F,_),P===null)throw Rt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw Le("WebGLRenderer: "+_.message),_}let Je,vt,ue,At,S,v,B,Z,Q,ie,ce,q,J,ve,xe,oe,re,ke,je,st,R,se,X;function ye(){Je=new AN(P),Je.init(),R=new mL(P,Je),vt=new SN(P,Je,e,R),ue=new hL(P,Je),vt.reversedDepthBuffer&&f&&ue.buffers.depth.setReversed(!0),At=new NN(P),S=new QP,v=new pL(P,Je,ue,S,vt,R,At),B=new DN(L),Z=new FI(P),se=new _N(P,Z),Q=new IN(P,Z,At,se),ie=new LN(P,Q,Z,se,At),ke=new PN(P,vt,v),xe=new EN(S),ce=new KP(L,B,Je,vt,se,xe),q=new _L(L,S),J=new tL,ve=new aL(Je),re=new yN(L,B,ue,ie,g,c),oe=new fL(L,ie,vt),X=new xL(P,At,vt,ue),je=new xN(P,Je,At),st=new RN(P,Je,At),At.programs=ce.programs,L.capabilities=vt,L.extensions=Je,L.properties=S,L.renderLists=J,L.shadowMap=oe,L.state=ue,L.info=At}ye(),x!==Vn&&(T=new FN(x,t.width,t.height,r,s));let ae=new yv(L,P);this.xr=ae,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let _=Je.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=Je.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(_){_!==void 0&&(Te=_,this.setSize(Ie,Ce,!1))},this.getSize=function(_){return _.set(Ie,Ce)},this.setSize=function(_,F,W=!0){if(ae.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=_,Ce=F,t.width=Math.floor(_*Te),t.height=Math.floor(F*Te),W===!0&&(t.style.width=_+"px",t.style.height=F+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,_,F)},this.getDrawingBufferSize=function(_){return _.set(Ie*Te,Ce*Te).floor()},this.setDrawingBufferSize=function(_,F,W){Ie=_,Ce=F,Te=W,t.width=Math.floor(_*W),t.height=Math.floor(F*W),this.setViewport(0,0,_,F)},this.setEffects=function(_){if(x===Vn){Le("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let F=0;F<_.length;F++)if(_[F].isOutputPass===!0){Ne("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(C)},this.getViewport=function(_){return _.copy(ne)},this.setViewport=function(_,F,W,z){_.isVector4?ne.set(_.x,_.y,_.z,_.w):ne.set(_,F,W,z),ue.viewport(C.copy(ne).multiplyScalar(Te).round())},this.getScissor=function(_){return _.copy(De)},this.setScissor=function(_,F,W,z){_.isVector4?De.set(_.x,_.y,_.z,_.w):De.set(_,F,W,z),ue.scissor(ee.copy(De).multiplyScalar(Te).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(_){ue.setScissorTest(Pe=_)},this.setOpaqueSort=function(_){Y=_},this.setTransparentSort=function(_){fe=_},this.getClearColor=function(_){return _.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(_=!0,F=!0,W=!0){let z=0;if(_){let G=!1;if(A!==null){let ge=A.texture.format;G=m.has(ge)}if(G){let ge=A.texture.type,Se=p.has(ge),pe=re.getClearColor(),Ee=re.getClearAlpha(),Me=pe.r,ze=pe.g,Xe=pe.b;Se?(E[0]=Me,E[1]=ze,E[2]=Xe,E[3]=Ee,P.clearBufferuiv(P.COLOR,0,E)):(b[0]=Me,b[1]=ze,b[2]=Xe,b[3]=Ee,P.clearBufferiv(P.COLOR,0,b))}else z|=P.COLOR_BUFFER_BIT}F&&(z|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),H=_},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",He,!1),re.dispose(),J.dispose(),ve.dispose(),S.dispose(),B.dispose(),ie.dispose(),se.dispose(),X.dispose(),ce.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",_v),ae.removeEventListener("sessionend",xv),jr.stop()};function K(_){_.preventDefault(),Qg("WebGLRenderer: Context Lost."),D=!0}function be(){Qg("WebGLRenderer: Context Restored."),D=!1;let _=At.autoReset,F=oe.enabled,W=oe.autoUpdate,z=oe.needsUpdate,G=oe.type;ye(),At.autoReset=_,oe.enabled=F,oe.autoUpdate=W,oe.needsUpdate=z,oe.type=G}function He(_){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Ft(_){let F=_.target;F.removeEventListener("dispose",Ft),yt(F)}function yt(_){Bi(_),S.remove(_)}function Bi(_){let F=S.get(_).programs;F!==void 0&&(F.forEach(function(W){ce.releaseProgram(W)}),_.isShaderMaterial&&ce.releaseShaderCache(_))}this.renderBufferDirect=function(_,F,W,z,G,ge){F===null&&(F=It);let Se=G.isMesh&&G.matrixWorld.determinant()<0,pe=ob(_,F,W,z,G);ue.setMaterial(z,Se);let Ee=W.index,Me=1;if(z.wireframe===!0){if(Ee=Q.getWireframeAttribute(W),Ee===void 0)return;Me=2}let ze=W.drawRange,Xe=W.attributes.position,we=ze.start*Me,_t=(ze.start+ze.count)*Me;ge!==null&&(we=Math.max(we,ge.start*Me),_t=Math.min(_t,(ge.start+ge.count)*Me)),Ee!==null?(we=Math.max(we,0),_t=Math.min(_t,Ee.count)):Xe!=null&&(we=Math.max(we,0),_t=Math.min(_t,Xe.count));let kt=_t-we;if(kt<0||kt===1/0)return;se.setup(G,z,pe,W,Ee);let Nt,Mt=je;if(Ee!==null&&(Nt=Z.get(Ee),Mt=st,Mt.setIndex(Nt)),G.isMesh)z.wireframe===!0?(ue.setLineWidth(z.wireframeLinewidth*Jt()),Mt.setMode(P.LINES)):Mt.setMode(P.TRIANGLES);else if(G.isLine){let rn=z.linewidth;rn===void 0&&(rn=1),ue.setLineWidth(rn*Jt()),G.isLineSegments?Mt.setMode(P.LINES):G.isLineLoop?Mt.setMode(P.LINE_LOOP):Mt.setMode(P.LINE_STRIP)}else G.isPoints?Mt.setMode(P.POINTS):G.isSprite&&Mt.setMode(P.TRIANGLES);if(G.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))Mt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let rn=G._multiDrawStarts,_e=G._multiDrawCounts,wn=G._multiDrawCount,rt=Ee?Z.get(Ee).bytesPerElement:1,Hn=S.get(z).currentProgram.getUniforms();for(let vi=0;vi<wn;vi++)Hn.setValue(P,"_gl_DrawID",vi),Mt.render(rn[vi]/rt,_e[vi])}else if(G.isInstancedMesh)Mt.renderInstances(we,kt,G.count);else if(W.isInstancedBufferGeometry){let rn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,_e=Math.min(W.instanceCount,rn);Mt.renderInstances(we,kt,_e)}else Mt.render(we,kt)};function gi(_,F,W){_.transparent===!0&&_.side===Li&&_.forceSinglePass===!1?(_.side=gn,_.needsUpdate=!0,Gc(_,F,W),_.side=nr,_.needsUpdate=!0,Gc(_,F,W),_.side=Li):Gc(_,F,W)}this.compile=function(_,F,W=null){W===null&&(W=_),w=ve.get(W),w.init(F),y.push(w),W.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),_!==W&&_.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights();let z=new Set;return _.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ge=G.material;if(ge)if(Array.isArray(ge))for(let Se=0;Se<ge.length;Se++){let pe=ge[Se];gi(pe,W,G),z.add(pe)}else gi(ge,W,G),z.add(ge)}),w=y.pop(),z},this.compileAsync=function(_,F,W=null){let z=this.compile(_,F,W);return new Promise(G=>{function ge(){if(z.forEach(function(Se){S.get(Se).currentProgram.isReady()&&z.delete(Se)}),z.size===0){G(_);return}setTimeout(ge,10)}Je.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Kf=null;function rb(_){Kf&&Kf(_)}function _v(){jr.stop()}function xv(){jr.start()}let jr=new XE;jr.setAnimationLoop(rb),typeof self<"u"&&jr.setContext(self),this.setAnimationLoop=function(_){Kf=_,ae.setAnimationLoop(_),_===null?jr.stop():jr.start()},ae.addEventListener("sessionstart",_v),ae.addEventListener("sessionend",xv),this.render=function(_,F){if(F!==void 0&&F.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;H!==null&&H.renderStart(_,F);let W=ae.enabled===!0&&ae.isPresenting===!0,z=T!==null&&(A===null||W)&&T.begin(L,A);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(F),F=ae.getCamera()),_.isScene===!0&&_.onBeforeRender(L,_,F,A),w=ve.get(_,y.length),w.init(F),w.state.textureUnits=v.getTextureUnits(),y.push(w),dt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Re.setFromProjectionMatrix(dt,fi,F.reversedDepth),Ze=this.localClippingEnabled,Tt=xe.init(this.clippingPlanes,Ze),N=J.get(_,I.length),N.init(),I.push(N),ae.enabled===!0&&ae.isPresenting===!0){let Se=L.xr.getDepthSensingMesh();Se!==null&&Qf(Se,F,-1/0,L.sortObjects)}Qf(_,F,0,L.sortObjects),N.finish(),L.sortObjects===!0&&N.sort(Y,fe),Dt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Dt&&re.addToRenderList(N,_),this.info.render.frame++,Tt===!0&&xe.beginShadows();let G=w.state.shadowsArray;if(oe.render(G,_,F),Tt===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&T.hasRenderPass())===!1){let Se=N.opaque,pe=N.transmissive;if(w.setupLights(),F.isArrayCamera){let Ee=F.cameras;if(pe.length>0)for(let Me=0,ze=Ee.length;Me<ze;Me++){let Xe=Ee[Me];Ev(Se,pe,_,Xe)}Dt&&re.render(_);for(let Me=0,ze=Ee.length;Me<ze;Me++){let Xe=Ee[Me];Sv(N,_,Xe,Xe.viewport)}}else pe.length>0&&Ev(Se,pe,_,F),Dt&&re.render(_),Sv(N,_,F)}A!==null&&k===0&&(v.updateMultisampleRenderTarget(A),v.updateRenderTargetMipmap(A)),z&&T.end(L),_.isScene===!0&&_.onAfterRender(L,_,F),se.resetDefaultState(),O=-1,U=null,y.pop(),y.length>0?(w=y[y.length-1],v.setTextureUnits(w.state.textureUnits),Tt===!0&&xe.setGlobalState(L.clippingPlanes,w.state.camera)):w=null,I.pop(),I.length>0?N=I[I.length-1]:N=null,H!==null&&H.renderEnd()};function Qf(_,F,W,z){if(_.visible===!1)return;if(_.layers.test(F.layers)){if(_.isGroup)W=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(F);else if(_.isLightProbeGrid)w.pushLightProbeGrid(_);else if(_.isLight)w.pushLight(_),_.castShadow&&w.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Re.intersectsSprite(_)){z&&Ge.setFromMatrixPosition(_.matrixWorld).applyMatrix4(dt);let Se=ie.update(_),pe=_.material;pe.visible&&N.push(_,Se,pe,W,Ge.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Re.intersectsObject(_))){let Se=ie.update(_),pe=_.material;if(z&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ge.copy(_.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ge.copy(Se.boundingSphere.center)),Ge.applyMatrix4(_.matrixWorld).applyMatrix4(dt)),Array.isArray(pe)){let Ee=Se.groups;for(let Me=0,ze=Ee.length;Me<ze;Me++){let Xe=Ee[Me],we=pe[Xe.materialIndex];we&&we.visible&&N.push(_,Se,we,W,Ge.z,Xe)}}else pe.visible&&N.push(_,Se,pe,W,Ge.z,null)}}let ge=_.children;for(let Se=0,pe=ge.length;Se<pe;Se++)Qf(ge[Se],F,W,z)}function Sv(_,F,W,z){let{opaque:G,transmissive:ge,transparent:Se}=_;w.setupLightsView(W),Tt===!0&&xe.setGlobalState(L.clippingPlanes,W),z&&ue.viewport(C.copy(z)),G.length>0&&zc(G,F,W),ge.length>0&&zc(ge,F,W),Se.length>0&&zc(Se,F,W),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Ev(_,F,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[z.id]===void 0){let we=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[z.id]=new kn(1,1,{generateMipmaps:!0,type:we?Fi:Vn,minFilter:Vr,samples:Math.max(4,vt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let ge=w.state.transmissionRenderTarget[z.id],Se=z.viewport||C;ge.setSize(Se.z*L.transmissionResolutionScale,Se.w*L.transmissionResolutionScale);let pe=L.getRenderTarget(),Ee=L.getActiveCubeFace(),Me=L.getActiveMipmapLevel();L.setRenderTarget(ge),L.getClearColor(te),me=L.getClearAlpha(),me<1&&L.setClearColor(16777215,.5),L.clear(),Dt&&re.render(W);let ze=L.toneMapping;L.toneMapping=hi;let Xe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),w.setupLightsView(z),Tt===!0&&xe.setGlobalState(L.clippingPlanes,z),zc(_,W,z),v.updateMultisampleRenderTarget(ge),v.updateRenderTargetMipmap(ge),Je.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let _t=0,kt=F.length;_t<kt;_t++){let Nt=F[_t],{object:Mt,geometry:rn,material:_e,group:wn}=Nt;if(_e.side===Li&&Mt.layers.test(z.layers)){let rt=_e.side;_e.side=gn,_e.needsUpdate=!0,bv(Mt,W,z,rn,_e,wn),_e.side=rt,_e.needsUpdate=!0,we=!0}}we===!0&&(v.updateMultisampleRenderTarget(ge),v.updateRenderTargetMipmap(ge))}L.setRenderTarget(pe,Ee,Me),L.setClearColor(te,me),Xe!==void 0&&(z.viewport=Xe),L.toneMapping=ze}function zc(_,F,W){let z=F.isScene===!0?F.overrideMaterial:null;for(let G=0,ge=_.length;G<ge;G++){let Se=_[G],{object:pe,geometry:Ee,group:Me}=Se,ze=Se.material;ze.allowOverride===!0&&z!==null&&(ze=z),pe.layers.test(W.layers)&&bv(pe,F,W,Ee,ze,Me)}}function bv(_,F,W,z,G,ge){_.onBeforeRender(L,F,W,z,G,ge),_.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),G.onBeforeRender(L,F,W,z,_,ge),G.transparent===!0&&G.side===Li&&G.forceSinglePass===!1?(G.side=gn,G.needsUpdate=!0,L.renderBufferDirect(W,F,z,G,_,ge),G.side=nr,G.needsUpdate=!0,L.renderBufferDirect(W,F,z,G,_,ge),G.side=Li):L.renderBufferDirect(W,F,z,G,_,ge),_.onAfterRender(L,F,W,z,G,ge)}function Gc(_,F,W){F.isScene!==!0&&(F=It);let z=S.get(_),G=w.state.lights,ge=w.state.shadowsArray,Se=G.state.version,pe=ce.getParameters(_,G.state,ge,F,W,w.state.lightProbeGridArray),Ee=ce.getProgramCacheKey(pe),Me=z.programs;z.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?F.environment:null,z.fog=F.fog;let ze=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;z.envMap=B.get(_.envMap||z.environment,ze),z.envMapRotation=z.environment!==null&&_.envMap===null?F.environmentRotation:_.envMapRotation,Me===void 0&&(_.addEventListener("dispose",Ft),Me=new Map,z.programs=Me);let Xe=Me.get(Ee);if(Xe!==void 0){if(z.currentProgram===Xe&&z.lightsStateVersion===Se)return wv(_,pe),Xe}else pe.uniforms=ce.getUniforms(_),H!==null&&_.isNodeMaterial&&H.build(_,W,pe),_.onBeforeCompile(pe,L),Xe=ce.acquireProgram(pe,Ee),Me.set(Ee,Xe),z.uniforms=pe.uniforms;let we=z.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(we.clippingPlanes=xe.uniform),wv(_,pe),z.needsLights=cb(_),z.lightsStateVersion=Se,z.needsLights&&(we.ambientLightColor.value=G.state.ambient,we.lightProbe.value=G.state.probe,we.directionalLights.value=G.state.directional,we.directionalLightShadows.value=G.state.directionalShadow,we.spotLights.value=G.state.spot,we.spotLightShadows.value=G.state.spotShadow,we.rectAreaLights.value=G.state.rectArea,we.ltc_1.value=G.state.rectAreaLTC1,we.ltc_2.value=G.state.rectAreaLTC2,we.pointLights.value=G.state.point,we.pointLightShadows.value=G.state.pointShadow,we.hemisphereLights.value=G.state.hemi,we.directionalShadowMatrix.value=G.state.directionalShadowMatrix,we.spotLightMatrix.value=G.state.spotLightMatrix,we.spotLightMap.value=G.state.spotLightMap,we.pointShadowMatrix.value=G.state.pointShadowMatrix),z.lightProbeGrid=w.state.lightProbeGridArray.length>0,z.currentProgram=Xe,z.uniformsList=null,Xe}function Mv(_){if(_.uniformsList===null){let F=_.currentProgram.getUniforms();_.uniformsList=Vo.seqWithValue(F.seq,_.uniforms)}return _.uniformsList}function wv(_,F){let W=S.get(_);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function sb(_,F){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;M.setFromMatrixPosition(F.matrixWorld);for(let W=0,z=_.length;W<z;W++){let G=_[W];if(G.texture!==null&&G.boundingBox.containsPoint(M))return G}return null}function ob(_,F,W,z,G){F.isScene!==!0&&(F=It),v.resetTextureUnits();let ge=F.fog,Se=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?F.environment:null,pe=A===null?L.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:nt.workingColorSpace,Ee=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Me=B.get(z.envMap||Se,Ee),ze=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Xe=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),we=!!W.morphAttributes.position,_t=!!W.morphAttributes.normal,kt=!!W.morphAttributes.color,Nt=hi;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Nt=L.toneMapping);let Mt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,rn=Mt!==void 0?Mt.length:0,_e=S.get(z),wn=w.state.lights;if(Tt===!0&&(Ze===!0||_!==U)){let Ct=_===U&&z.id===O;xe.setState(z,_,Ct)}let rt=!1;z.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==wn.state.version||_e.outputColorSpace!==pe||G.isBatchedMesh&&_e.batching===!1||!G.isBatchedMesh&&_e.batching===!0||G.isBatchedMesh&&_e.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&_e.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&_e.instancing===!1||!G.isInstancedMesh&&_e.instancing===!0||G.isSkinnedMesh&&_e.skinning===!1||!G.isSkinnedMesh&&_e.skinning===!0||G.isInstancedMesh&&_e.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&_e.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&_e.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&_e.instancingMorph===!1&&G.morphTexture!==null||_e.envMap!==Me||z.fog===!0&&_e.fog!==ge||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==xe.numPlanes||_e.numIntersection!==xe.numIntersection)||_e.vertexAlphas!==ze||_e.vertexTangents!==Xe||_e.morphTargets!==we||_e.morphNormals!==_t||_e.morphColors!==kt||_e.toneMapping!==Nt||_e.morphTargetsCount!==rn||!!_e.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,_e.__version=z.version);let Hn=_e.currentProgram;rt===!0&&(Hn=Gc(z,F,G),H&&z.isNodeMaterial&&H.onUpdateProgram(z,Hn,_e));let vi=!1,or=!1,Ds=!1,wt=Hn.getUniforms(),Ut=_e.uniforms;if(ue.useProgram(Hn.program)&&(vi=!0,or=!0,Ds=!0),z.id!==O&&(O=z.id,or=!0),_e.needsLights){let Ct=sb(w.state.lightProbeGridArray,G);_e.lightProbeGrid!==Ct&&(_e.lightProbeGrid=Ct,or=!0)}if(vi||U!==_){ue.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),wt.setValue(P,"projectionMatrix",_.projectionMatrix),wt.setValue(P,"viewMatrix",_.matrixWorldInverse);let cr=wt.map.cameraPosition;cr!==void 0&&cr.setValue(P,gt.setFromMatrixPosition(_.matrixWorld)),vt.logarithmicDepthBuffer&&wt.setValue(P,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&wt.setValue(P,"isOrthographic",_.isOrthographicCamera===!0),U!==_&&(U=_,or=!0,Ds=!0)}if(_e.needsLights&&(wn.state.directionalShadowMap.length>0&&wt.setValue(P,"directionalShadowMap",wn.state.directionalShadowMap,v),wn.state.spotShadowMap.length>0&&wt.setValue(P,"spotShadowMap",wn.state.spotShadowMap,v),wn.state.pointShadowMap.length>0&&wt.setValue(P,"pointShadowMap",wn.state.pointShadowMap,v)),G.isSkinnedMesh){wt.setOptional(P,G,"bindMatrix"),wt.setOptional(P,G,"bindMatrixInverse");let Ct=G.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),wt.setValue(P,"boneTexture",Ct.boneTexture,v))}G.isBatchedMesh&&(wt.setOptional(P,G,"batchingTexture"),wt.setValue(P,"batchingTexture",G._matricesTexture,v),wt.setOptional(P,G,"batchingIdTexture"),wt.setValue(P,"batchingIdTexture",G._indirectTexture,v),wt.setOptional(P,G,"batchingColorTexture"),G._colorsTexture!==null&&wt.setValue(P,"batchingColorTexture",G._colorsTexture,v));let ar=W.morphAttributes;if((ar.position!==void 0||ar.normal!==void 0||ar.color!==void 0)&&ke.update(G,W,Hn),(or||_e.receiveShadow!==G.receiveShadow)&&(_e.receiveShadow=G.receiveShadow,wt.setValue(P,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&F.environment!==null&&(Ut.envMapIntensity.value=F.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=EL()),or){if(wt.setValue(P,"toneMappingExposure",L.toneMappingExposure),_e.needsLights&&ab(Ut,Ds),ge&&z.fog===!0&&q.refreshFogUniforms(Ut,ge),q.refreshMaterialUniforms(Ut,z,Te,Ce,w.state.transmissionRenderTarget[_.id]),_e.needsLights&&_e.lightProbeGrid){let Ct=_e.lightProbeGrid;Ut.probesSH.value=Ct.texture,Ut.probesMin.value.copy(Ct.boundingBox.min),Ut.probesMax.value.copy(Ct.boundingBox.max),Ut.probesResolution.value.copy(Ct.resolution)}Vo.upload(P,Mv(_e),Ut,v)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Vo.upload(P,Mv(_e),Ut,v),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&wt.setValue(P,"center",G.center),wt.setValue(P,"modelViewMatrix",G.modelViewMatrix),wt.setValue(P,"normalMatrix",G.normalMatrix),wt.setValue(P,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){let Ct=z.uniformsGroups;for(let cr=0,As=Ct.length;cr<As;cr++){let Tv=Ct[cr];X.update(Tv,Hn),X.bind(Tv,Hn)}}return Hn}function ab(_,F){_.ambientLightColor.needsUpdate=F,_.lightProbe.needsUpdate=F,_.directionalLights.needsUpdate=F,_.directionalLightShadows.needsUpdate=F,_.pointLights.needsUpdate=F,_.pointLightShadows.needsUpdate=F,_.spotLights.needsUpdate=F,_.spotLightShadows.needsUpdate=F,_.rectAreaLights.needsUpdate=F,_.hemisphereLights.needsUpdate=F}function cb(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(_,F,W){let z=S.get(_);z.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),S.get(_.texture).__webglTexture=F,S.get(_.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,F){let W=S.get(_);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};let lb=P.createFramebuffer();this.setRenderTarget=function(_,F=0,W=0){A=_,V=F,k=W;let z=null,G=!1,ge=!1;if(_){let pe=S.get(_);if(pe.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(P.FRAMEBUFFER,pe.__webglFramebuffer),C.copy(_.viewport),ee.copy(_.scissor),$=_.scissorTest,ue.viewport(C),ue.scissor(ee),ue.setScissorTest($),O=-1;return}else if(pe.__webglFramebuffer===void 0)v.setupRenderTarget(_);else if(pe.__hasExternalTextures)v.rebindTextures(_,S.get(_.texture).__webglTexture,S.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let ze=_.depthTexture;if(pe.__boundDepthTexture!==ze){if(ze!==null&&S.has(ze)&&(_.width!==ze.image.width||_.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(_)}}let Ee=_.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ge=!0);let Me=S.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Me[F])?z=Me[F][W]:z=Me[F],G=!0):_.samples>0&&v.useMultisampledRTT(_)===!1?z=S.get(_).__webglMultisampledFramebuffer:Array.isArray(Me)?z=Me[W]:z=Me,C.copy(_.viewport),ee.copy(_.scissor),$=_.scissorTest}else C.copy(ne).multiplyScalar(Te).floor(),ee.copy(De).multiplyScalar(Te).floor(),$=Pe;if(W!==0&&(z=lb),ue.bindFramebuffer(P.FRAMEBUFFER,z)&&ue.drawBuffers(_,z),ue.viewport(C),ue.scissor(ee),ue.setScissorTest($),G){let pe=S.get(_.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,pe.__webglTexture,W)}else if(ge){let pe=F;for(let Ee=0;Ee<_.textures.length;Ee++){let Me=S.get(_.textures[Ee]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ee,Me.__webglTexture,W,pe)}}else if(_!==null&&W!==0){let pe=S.get(_.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,pe.__webglTexture,W)}O=-1},this.readRenderTargetPixels=function(_,F,W,z,G,ge,Se,pe=0){if(!(_&&_.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=S.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){ue.bindFramebuffer(P.FRAMEBUFFER,Ee);try{let Me=_.textures[pe],ze=Me.format,Xe=Me.type;if(_.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+pe),!vt.textureFormatReadable(ze)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Xe)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=_.width-z&&W>=0&&W<=_.height-G&&P.readPixels(F,W,z,G,R.convert(ze),R.convert(Xe),ge)}finally{let Me=A!==null?S.get(A).__webglFramebuffer:null;ue.bindFramebuffer(P.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(_,F,W,z,G,ge,Se,pe=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=S.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee)if(F>=0&&F<=_.width-z&&W>=0&&W<=_.height-G){ue.bindFramebuffer(P.FRAMEBUFFER,Ee);let Me=_.textures[pe],ze=Me.format,Xe=Me.type;if(_.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+pe),!vt.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let we=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,we),P.bufferData(P.PIXEL_PACK_BUFFER,ge.byteLength,P.STREAM_READ),P.readPixels(F,W,z,G,R.convert(ze),R.convert(Xe),0);let _t=A!==null?S.get(A).__webglFramebuffer:null;ue.bindFramebuffer(P.FRAMEBUFFER,_t);let kt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await EE(P,kt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,we),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ge),P.deleteBuffer(we),P.deleteSync(kt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,F=null,W=0){let z=Math.pow(2,-W),G=Math.floor(_.image.width*z),ge=Math.floor(_.image.height*z),Se=F!==null?F.x:0,pe=F!==null?F.y:0;v.setTexture2D(_,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,Se,pe,G,ge),ue.unbindTexture()};let ub=P.createFramebuffer(),db=P.createFramebuffer();this.copyTextureToTexture=function(_,F,W=null,z=null,G=0,ge=0){let Se,pe,Ee,Me,ze,Xe,we,_t,kt,Nt=_.isCompressedTexture?_.mipmaps[ge]:_.image;if(W!==null)Se=W.max.x-W.min.x,pe=W.max.y-W.min.y,Ee=W.isBox3?W.max.z-W.min.z:1,Me=W.min.x,ze=W.min.y,Xe=W.isBox3?W.min.z:0;else{let Ut=Math.pow(2,-G);Se=Math.floor(Nt.width*Ut),pe=Math.floor(Nt.height*Ut),_.isDataArrayTexture?Ee=Nt.depth:_.isData3DTexture?Ee=Math.floor(Nt.depth*Ut):Ee=1,Me=0,ze=0,Xe=0}z!==null?(we=z.x,_t=z.y,kt=z.z):(we=0,_t=0,kt=0);let Mt=R.convert(F.format),rn=R.convert(F.type),_e;F.isData3DTexture?(v.setTexture3D(F,0),_e=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(v.setTexture2DArray(F,0),_e=P.TEXTURE_2D_ARRAY):(v.setTexture2D(F,0),_e=P.TEXTURE_2D),ue.activeTexture(P.TEXTURE0),ue.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),ue.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ue.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);let wn=ue.getParameter(P.UNPACK_ROW_LENGTH),rt=ue.getParameter(P.UNPACK_IMAGE_HEIGHT),Hn=ue.getParameter(P.UNPACK_SKIP_PIXELS),vi=ue.getParameter(P.UNPACK_SKIP_ROWS),or=ue.getParameter(P.UNPACK_SKIP_IMAGES);ue.pixelStorei(P.UNPACK_ROW_LENGTH,Nt.width),ue.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Nt.height),ue.pixelStorei(P.UNPACK_SKIP_PIXELS,Me),ue.pixelStorei(P.UNPACK_SKIP_ROWS,ze),ue.pixelStorei(P.UNPACK_SKIP_IMAGES,Xe);let Ds=_.isDataArrayTexture||_.isData3DTexture,wt=F.isDataArrayTexture||F.isData3DTexture;if(_.isDepthTexture){let Ut=S.get(_),ar=S.get(F),Ct=S.get(Ut.__renderTarget),cr=S.get(ar.__renderTarget);ue.bindFramebuffer(P.READ_FRAMEBUFFER,Ct.__webglFramebuffer),ue.bindFramebuffer(P.DRAW_FRAMEBUFFER,cr.__webglFramebuffer);for(let As=0;As<Ee;As++)Ds&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,S.get(_).__webglTexture,G,Xe+As),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,S.get(F).__webglTexture,ge,kt+As)),P.blitFramebuffer(Me,ze,Se,pe,we,_t,Se,pe,P.DEPTH_BUFFER_BIT,P.NEAREST);ue.bindFramebuffer(P.READ_FRAMEBUFFER,null),ue.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(G!==0||_.isRenderTargetTexture||S.has(_)){let Ut=S.get(_),ar=S.get(F);ue.bindFramebuffer(P.READ_FRAMEBUFFER,ub),ue.bindFramebuffer(P.DRAW_FRAMEBUFFER,db);for(let Ct=0;Ct<Ee;Ct++)Ds?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ut.__webglTexture,G,Xe+Ct):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ut.__webglTexture,G),wt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ar.__webglTexture,ge,kt+Ct):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ar.__webglTexture,ge),G!==0?P.blitFramebuffer(Me,ze,Se,pe,we,_t,Se,pe,P.COLOR_BUFFER_BIT,P.NEAREST):wt?P.copyTexSubImage3D(_e,ge,we,_t,kt+Ct,Me,ze,Se,pe):P.copyTexSubImage2D(_e,ge,we,_t,Me,ze,Se,pe);ue.bindFramebuffer(P.READ_FRAMEBUFFER,null),ue.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else wt?_.isDataTexture||_.isData3DTexture?P.texSubImage3D(_e,ge,we,_t,kt,Se,pe,Ee,Mt,rn,Nt.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(_e,ge,we,_t,kt,Se,pe,Ee,Mt,Nt.data):P.texSubImage3D(_e,ge,we,_t,kt,Se,pe,Ee,Mt,rn,Nt):_.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ge,we,_t,Se,pe,Mt,rn,Nt.data):_.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ge,we,_t,Nt.width,Nt.height,Mt,Nt.data):P.texSubImage2D(P.TEXTURE_2D,ge,we,_t,Se,pe,Mt,rn,Nt);ue.pixelStorei(P.UNPACK_ROW_LENGTH,wn),ue.pixelStorei(P.UNPACK_IMAGE_HEIGHT,rt),ue.pixelStorei(P.UNPACK_SKIP_PIXELS,Hn),ue.pixelStorei(P.UNPACK_SKIP_ROWS,vi),ue.pixelStorei(P.UNPACK_SKIP_IMAGES,or),ge===0&&F.generateMipmaps&&P.generateMipmap(_e),ue.unbindTexture()},this.initRenderTarget=function(_){S.get(_).__webglFramebuffer===void 0&&v.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?v.setTextureCube(_,0):_.isData3DTexture?v.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?v.setTexture2DArray(_,0):v.setTexture2D(_,0),ue.unbindTexture()},this.resetState=function(){V=0,k=0,A=null,ue.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var Yf=class n{constructor(){}ngAfterViewInit(){new tb.default("#typewriter",{loop:!0,delay:75}).typeString("Senior Software Engineer").pauseFor(1e3).deleteAll().typeString(".NET \u2022 Angular \u2022 Azure").pauseFor(1e3).deleteAll().typeString("Microservices Architect").start();let e=new _c,t=new dn(75,window.innerWidth/window.innerHeight,.1,1e3),i=new $f({alpha:!0});i.setSize(window.innerWidth,window.innerHeight),document.getElementById("home")?.appendChild(i.domElement);let r=new Or,s=new bs({color:3900150,wireframe:!0}),o=new Mn(r,s);e.add(o),t.position.z=3;let a=()=>{requestAnimationFrame(a),o.rotation.x+=.01,o.rotation.y+=.01,i.render(e,t)};a()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=mn({type:n,selectors:[["app-home"]],decls:13,vars:0,consts:[["id","home",1,"h-screen","relative","overflow-hidden"],["id","tsparticles",1,"absolute","inset-0"],[1,"relative","z-10","flex","items-center","justify-center","h-full","text-center"],[1,"text-6xl","md:text-8xl","font-bold","animate-float"],["id","typewriter",1,"text-xl","text-gray-300","mt-4"],[1,"mt-8","flex","gap-4","justify-center"],["href","#projects",1,"px-6","py-3","bg-blue-500","rounded-xl"],["href","/assets/cv.pdf",1,"px-6","py-3","border","rounded-xl"]],template:function(t,i){t&1&&(Qe(0,"section",0),wi(1,"div",1),Qe(2,"div",2)(3,"div")(4,"h1",3),ct(5,"Kokila Sanjeewa"),tt(),Qe(6,"p",4),ct(7," Senior Software Engineer \u2022 Architect \u2022 Tech Lead "),tt(),Qe(8,"div",5)(9,"a",6),ct(10," View Work "),tt(),Qe(11,"a",7),ct(12," Download CV "),tt()()()()())},dependencies:[uu],encapsulation:2})};var Zf=class n{theme="dark";toggleTheme(){this.theme=this.theme==="dark"?"light":"dark",document.documentElement.classList.toggle("dark")}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=mn({type:n,selectors:[["app-navbar"]],decls:14,vars:0,consts:[[1,"fixed","w-full","z-50","backdrop-blur-md","bg-black/30","text-white","px-6","py-4","flex","justify-between"],[1,"font-bold","text-lg"],[1,"space-x-6"],["href","./home"],["href","./about"],["href","./projects"],["href","./contact"],[1,"px-3","py-1","border","rounded",3,"click"]],template:function(t,i){t&1&&(Qe(0,"nav",0)(1,"div",1),ct(2,"Kokila.dev"),tt(),Qe(3,"div",2)(4,"a",3),ct(5,"Home"),tt(),Qe(6,"a",4),ct(7,"About"),tt(),Qe(8,"a",5),ct(9,"Projects"),tt(),Qe(10,"a",6),ct(11,"Contact"),tt()(),Qe(12,"button",7),io("click",function(){return i.toggleTheme()}),ct(13," \u{1F319} "),tt()())},encapsulation:2})};var nb=[{path:"",component:Zf},{path:"home",component:Yf},{path:"about",component:Qu},{path:"projects",component:Ku},{path:"contact",component:Ju}];var ib={providers:[Mp(),Km(nb)]};var Jf=class n{title=xr("portfolio");theme="dark";toggleTheme(){this.theme=this.theme==="dark"?"light":"dark",document.documentElement.classList.toggle("dark")}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=mn({type:n,selectors:[["app-root"]],decls:1,vars:0,template:function(t,i){t&1&&no(0,"router-outlet")},dependencies:[tc],encapsulation:2})};wm(Jf,ib).catch(n=>console.error(n));
