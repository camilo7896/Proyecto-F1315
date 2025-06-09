function IR(i,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in i)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(i,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function t1(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var sp={exports:{}},ou={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mb;function RR(){if(mb)return ou;mb=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var m in a)m!=="key"&&(l[m]=a[m])}else l=a;return a=l.ref,{$$typeof:i,type:r,key:c,ref:a!==void 0?a:null,props:l}}return ou.Fragment=e,ou.jsx=t,ou.jsxs=t,ou}var pb;function CR(){return pb||(pb=1,sp.exports=RR()),sp.exports}var A=CR(),ap={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gb;function xR(){if(gb)return xe;gb=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function S(D){return D===null||typeof D!="object"?null:(D=E&&D[E]||D["@@iterator"],typeof D=="function"?D:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,Y={};function U(D,ee,ue){this.props=D,this.context=ee,this.refs=Y,this.updater=ue||V}U.prototype.isReactComponent={},U.prototype.setState=function(D,ee){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,ee,"setState")},U.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function te(){}te.prototype=U.prototype;function ne(D,ee,ue){this.props=D,this.context=ee,this.refs=Y,this.updater=ue||V}var $=ne.prototype=new te;$.constructor=ne,F($,U.prototype),$.isPureReactComponent=!0;var oe=Array.isArray,le={H:null,A:null,T:null,S:null,V:null},me=Object.prototype.hasOwnProperty;function M(D,ee,ue,se,ve,Pe){return ue=Pe.ref,{$$typeof:i,type:D,key:ee,ref:ue!==void 0?ue:null,props:Pe}}function R(D,ee){return M(D.type,ee,void 0,void 0,void 0,D.props)}function I(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function N(D){var ee={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ue){return ee[ue]})}var O=/\/+/g;function P(D,ee){return typeof D=="object"&&D!==null&&D.key!=null?N(""+D.key):ee.toString(36)}function C(){}function ze(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(C,C):(D.status="pending",D.then(function(ee){D.status==="pending"&&(D.status="fulfilled",D.value=ee)},function(ee){D.status==="pending"&&(D.status="rejected",D.reason=ee)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function Je(D,ee,ue,se,ve){var Pe=typeof D;(Pe==="undefined"||Pe==="boolean")&&(D=null);var we=!1;if(D===null)we=!0;else switch(Pe){case"bigint":case"string":case"number":we=!0;break;case"object":switch(D.$$typeof){case i:case e:we=!0;break;case v:return we=D._init,Je(we(D._payload),ee,ue,se,ve)}}if(we)return ve=ve(D),we=se===""?"."+P(D,0):se,oe(ve)?(ue="",we!=null&&(ue=we.replace(O,"$&/")+"/"),Je(ve,ee,ue,"",function(Jn){return Jn})):ve!=null&&(I(ve)&&(ve=R(ve,ue+(ve.key==null||D&&D.key===ve.key?"":(""+ve.key).replace(O,"$&/")+"/")+we)),ee.push(ve)),1;we=0;var Vt=se===""?".":se+":";if(oe(D))for(var st=0;st<D.length;st++)se=D[st],Pe=Vt+P(se,st),we+=Je(se,ee,ue,Pe,ve);else if(st=S(D),typeof st=="function")for(D=st.call(D),st=0;!(se=D.next()).done;)se=se.value,Pe=Vt+P(se,st++),we+=Je(se,ee,ue,Pe,ve);else if(Pe==="object"){if(typeof D.then=="function")return Je(ze(D),ee,ue,se,ve);throw ee=String(D),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return we}function K(D,ee,ue){if(D==null)return D;var se=[],ve=0;return Je(D,se,"","",function(Pe){return ee.call(ue,Pe,ve++)}),se}function re(D){if(D._status===-1){var ee=D._result;ee=ee(),ee.then(function(ue){(D._status===0||D._status===-1)&&(D._status=1,D._result=ue)},function(ue){(D._status===0||D._status===-1)&&(D._status=2,D._result=ue)}),D._status===-1&&(D._status=0,D._result=ee)}if(D._status===1)return D._result.default;throw D._result}var de=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function De(){}return xe.Children={map:K,forEach:function(D,ee,ue){K(D,function(){ee.apply(this,arguments)},ue)},count:function(D){var ee=0;return K(D,function(){ee++}),ee},toArray:function(D){return K(D,function(ee){return ee})||[]},only:function(D){if(!I(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},xe.Component=U,xe.Fragment=t,xe.Profiler=a,xe.PureComponent=ne,xe.StrictMode=r,xe.Suspense=p,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=le,xe.__COMPILER_RUNTIME={__proto__:null,c:function(D){return le.H.useMemoCache(D)}},xe.cache=function(D){return function(){return D.apply(null,arguments)}},xe.cloneElement=function(D,ee,ue){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var se=F({},D.props),ve=D.key,Pe=void 0;if(ee!=null)for(we in ee.ref!==void 0&&(Pe=void 0),ee.key!==void 0&&(ve=""+ee.key),ee)!me.call(ee,we)||we==="key"||we==="__self"||we==="__source"||we==="ref"&&ee.ref===void 0||(se[we]=ee[we]);var we=arguments.length-2;if(we===1)se.children=ue;else if(1<we){for(var Vt=Array(we),st=0;st<we;st++)Vt[st]=arguments[st+2];se.children=Vt}return M(D.type,ve,void 0,void 0,Pe,se)},xe.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:l,_context:D},D},xe.createElement=function(D,ee,ue){var se,ve={},Pe=null;if(ee!=null)for(se in ee.key!==void 0&&(Pe=""+ee.key),ee)me.call(ee,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(ve[se]=ee[se]);var we=arguments.length-2;if(we===1)ve.children=ue;else if(1<we){for(var Vt=Array(we),st=0;st<we;st++)Vt[st]=arguments[st+2];ve.children=Vt}if(D&&D.defaultProps)for(se in we=D.defaultProps,we)ve[se]===void 0&&(ve[se]=we[se]);return M(D,Pe,void 0,void 0,null,ve)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(D){return{$$typeof:m,render:D}},xe.isValidElement=I,xe.lazy=function(D){return{$$typeof:v,_payload:{_status:-1,_result:D},_init:re}},xe.memo=function(D,ee){return{$$typeof:g,type:D,compare:ee===void 0?null:ee}},xe.startTransition=function(D){var ee=le.T,ue={};le.T=ue;try{var se=D(),ve=le.S;ve!==null&&ve(ue,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(De,de)}catch(Pe){de(Pe)}finally{le.T=ee}},xe.unstable_useCacheRefresh=function(){return le.H.useCacheRefresh()},xe.use=function(D){return le.H.use(D)},xe.useActionState=function(D,ee,ue){return le.H.useActionState(D,ee,ue)},xe.useCallback=function(D,ee){return le.H.useCallback(D,ee)},xe.useContext=function(D){return le.H.useContext(D)},xe.useDebugValue=function(){},xe.useDeferredValue=function(D,ee){return le.H.useDeferredValue(D,ee)},xe.useEffect=function(D,ee,ue){var se=le.H;if(typeof ue=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return se.useEffect(D,ee)},xe.useId=function(){return le.H.useId()},xe.useImperativeHandle=function(D,ee,ue){return le.H.useImperativeHandle(D,ee,ue)},xe.useInsertionEffect=function(D,ee){return le.H.useInsertionEffect(D,ee)},xe.useLayoutEffect=function(D,ee){return le.H.useLayoutEffect(D,ee)},xe.useMemo=function(D,ee){return le.H.useMemo(D,ee)},xe.useOptimistic=function(D,ee){return le.H.useOptimistic(D,ee)},xe.useReducer=function(D,ee,ue){return le.H.useReducer(D,ee,ue)},xe.useRef=function(D){return le.H.useRef(D)},xe.useState=function(D){return le.H.useState(D)},xe.useSyncExternalStore=function(D,ee,ue){return le.H.useSyncExternalStore(D,ee,ue)},xe.useTransition=function(){return le.H.useTransition()},xe.version="19.1.0",xe}var yb;function jg(){return yb||(yb=1,ap.exports=xR()),ap.exports}var J=jg();const Af=t1(J),NR=IR({__proto__:null,default:Af},[J]);var op={exports:{}},lu={},lp={exports:{}},up={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vb;function OR(){return vb||(vb=1,function(i){function e(K,re){var de=K.length;K.push(re);e:for(;0<de;){var De=de-1>>>1,D=K[De];if(0<a(D,re))K[De]=re,K[de]=D,de=De;else break e}}function t(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var re=K[0],de=K.pop();if(de!==re){K[0]=de;e:for(var De=0,D=K.length,ee=D>>>1;De<ee;){var ue=2*(De+1)-1,se=K[ue],ve=ue+1,Pe=K[ve];if(0>a(se,de))ve<D&&0>a(Pe,se)?(K[De]=Pe,K[ve]=de,De=ve):(K[De]=se,K[ue]=de,De=ue);else if(ve<D&&0>a(Pe,de))K[De]=Pe,K[ve]=de,De=ve;else break e}}return re}function a(K,re){var de=K.sortIndex-re.sortIndex;return de!==0?de:K.id-re.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,m=c.now();i.unstable_now=function(){return c.now()-m}}var p=[],g=[],v=1,E=null,S=3,V=!1,F=!1,Y=!1,U=!1,te=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;function oe(K){for(var re=t(g);re!==null;){if(re.callback===null)r(g);else if(re.startTime<=K)r(g),re.sortIndex=re.expirationTime,e(p,re);else break;re=t(g)}}function le(K){if(Y=!1,oe(K),!F)if(t(p)!==null)F=!0,me||(me=!0,P());else{var re=t(g);re!==null&&Je(le,re.startTime-K)}}var me=!1,M=-1,R=5,I=-1;function N(){return U?!0:!(i.unstable_now()-I<R)}function O(){if(U=!1,me){var K=i.unstable_now();I=K;var re=!0;try{e:{F=!1,Y&&(Y=!1,ne(M),M=-1),V=!0;var de=S;try{t:{for(oe(K),E=t(p);E!==null&&!(E.expirationTime>K&&N());){var De=E.callback;if(typeof De=="function"){E.callback=null,S=E.priorityLevel;var D=De(E.expirationTime<=K);if(K=i.unstable_now(),typeof D=="function"){E.callback=D,oe(K),re=!0;break t}E===t(p)&&r(p),oe(K)}else r(p);E=t(p)}if(E!==null)re=!0;else{var ee=t(g);ee!==null&&Je(le,ee.startTime-K),re=!1}}break e}finally{E=null,S=de,V=!1}re=void 0}}finally{re?P():me=!1}}}var P;if(typeof $=="function")P=function(){$(O)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,ze=C.port2;C.port1.onmessage=O,P=function(){ze.postMessage(null)}}else P=function(){te(O,0)};function Je(K,re){M=te(function(){K(i.unstable_now())},re)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(K){K.callback=null},i.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<K?Math.floor(1e3/K):5},i.unstable_getCurrentPriorityLevel=function(){return S},i.unstable_next=function(K){switch(S){case 1:case 2:case 3:var re=3;break;default:re=S}var de=S;S=re;try{return K()}finally{S=de}},i.unstable_requestPaint=function(){U=!0},i.unstable_runWithPriority=function(K,re){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var de=S;S=K;try{return re()}finally{S=de}},i.unstable_scheduleCallback=function(K,re,de){var De=i.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?De+de:De):de=De,K){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=de+D,K={id:v++,callback:re,priorityLevel:K,startTime:de,expirationTime:D,sortIndex:-1},de>De?(K.sortIndex=de,e(g,K),t(p)===null&&K===t(g)&&(Y?(ne(M),M=-1):Y=!0,Je(le,de-De))):(K.sortIndex=D,e(p,K),F||V||(F=!0,me||(me=!0,P()))),K},i.unstable_shouldYield=N,i.unstable_wrapCallback=function(K){var re=S;return function(){var de=S;S=re;try{return K.apply(this,arguments)}finally{S=de}}}}(up)),up}var _b;function DR(){return _b||(_b=1,lp.exports=OR()),lp.exports}var cp={exports:{}},Zt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bb;function PR(){if(bb)return Zt;bb=1;var i=jg();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var r={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:E==null?null:""+E,children:p,containerInfo:g,implementation:v}}var c=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Zt.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,v)},Zt.flushSync=function(p){var g=c.T,v=r.p;try{if(c.T=null,r.p=2,p)return p()}finally{c.T=g,r.p=v,r.d.f()}},Zt.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(p,g))},Zt.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Zt.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,E=m(v,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,V=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?r.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:S,fetchPriority:V}):v==="script"&&r.d.X(p,{crossOrigin:E,integrity:S,fetchPriority:V,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Zt.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);r.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(p)},Zt.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,E=m(v,g.crossOrigin);r.d.L(p,v,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Zt.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=m(g.as,g.crossOrigin);r.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(p)},Zt.requestFormReset=function(p){r.d.r(p)},Zt.unstable_batchedUpdates=function(p,g){return p(g)},Zt.useFormState=function(p,g,v){return c.H.useFormState(p,g,v)},Zt.useFormStatus=function(){return c.H.useHostTransitionStatus()},Zt.version="19.1.0",Zt}var Eb;function n1(){if(Eb)return cp.exports;Eb=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),cp.exports=PR(),cp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tb;function kR(){if(Tb)return lu;Tb=1;var i=DR(),e=jg(),t=n1();function r(n){var s="https://react.dev/errors/"+n;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var s=n,o=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(o=s.return),n=s.return;while(n)}return s.tag===3?o:null}function c(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function m(n){if(l(n)!==n)throw Error(r(188))}function p(n){var s=n.alternate;if(!s){if(s=l(n),s===null)throw Error(r(188));return s!==n?null:n}for(var o=n,u=s;;){var f=o.return;if(f===null)break;var d=f.alternate;if(d===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===o)return m(f),n;if(d===u)return m(f),s;d=d.sibling}throw Error(r(188))}if(o.return!==u.return)o=f,u=d;else{for(var b=!1,T=f.child;T;){if(T===o){b=!0,o=f,u=d;break}if(T===u){b=!0,u=f,o=d;break}T=T.sibling}if(!b){for(T=d.child;T;){if(T===o){b=!0,o=d,u=f;break}if(T===u){b=!0,u=d,o=f;break}T=T.sibling}if(!b)throw Error(r(189))}}if(o.alternate!==u)throw Error(r(190))}if(o.tag!==3)throw Error(r(188));return o.stateNode.current===o?n:s}function g(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n;for(n=n.child;n!==null;){if(s=g(n),s!==null)return s;n=n.sibling}return null}var v=Object.assign,E=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),te=Symbol.for("react.provider"),ne=Symbol.for("react.consumer"),$=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function P(n){return n===null||typeof n!="object"?null:(n=O&&n[O]||n["@@iterator"],typeof n=="function"?n:null)}var C=Symbol.for("react.client.reference");function ze(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===C?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case U:return"Profiler";case Y:return"StrictMode";case le:return"Suspense";case me:return"SuspenseList";case I:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case V:return"Portal";case $:return(n.displayName||"Context")+".Provider";case ne:return(n._context.displayName||"Context")+".Consumer";case oe:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case M:return s=n.displayName||null,s!==null?s:ze(n.type)||"Memo";case R:s=n._payload,n=n._init;try{return ze(n(s))}catch{}}return null}var Je=Array.isArray,K=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},De=[],D=-1;function ee(n){return{current:n}}function ue(n){0>D||(n.current=De[D],De[D]=null,D--)}function se(n,s){D++,De[D]=n.current,n.current=s}var ve=ee(null),Pe=ee(null),we=ee(null),Vt=ee(null);function st(n,s){switch(se(we,s),se(Pe,n),se(ve,null),s.nodeType){case 9:case 11:n=(n=s.documentElement)&&(n=n.namespaceURI)?F0(n):0;break;default:if(n=s.tagName,s=s.namespaceURI)s=F0(s),n=q0(s,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ue(ve),se(ve,n)}function Jn(){ue(ve),ue(Pe),ue(we)}function gr(n){n.memoizedState!==null&&se(Vt,n);var s=ve.current,o=q0(s,n.type);s!==o&&(se(Pe,n),se(ve,o))}function Ni(n){Pe.current===n&&(ue(ve),ue(Pe)),Vt.current===n&&(ue(Vt),nu._currentValue=de)}var As=Object.prototype.hasOwnProperty,Ss=i.unstable_scheduleCallback,ws=i.unstable_cancelCallback,Zo=i.unstable_shouldYield,Zu=i.unstable_requestPaint,Rn=i.unstable_now,sd=i.unstable_getCurrentPriorityLevel,el=i.unstable_ImmediatePriority,Ta=i.unstable_UserBlockingPriority,Is=i.unstable_NormalPriority,ad=i.unstable_LowPriority,Aa=i.unstable_IdlePriority,tl=i.log,ec=i.unstable_setDisableYieldValue,dt=null,Qe=null;function gn(n){if(typeof tl=="function"&&ec(n),Qe&&typeof Qe.setStrictMode=="function")try{Qe.setStrictMode(dt,n)}catch{}}var Wt=Math.clz32?Math.clz32:Rs,tc=Math.log,od=Math.LN2;function Rs(n){return n>>>=0,n===0?32:31-(tc(n)/od|0)|0}var Cs=256,xs=4194304;function qn(n){var s=n&42;if(s!==0)return s;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Sa(n,s,o){var u=n.pendingLanes;if(u===0)return 0;var f=0,d=n.suspendedLanes,b=n.pingedLanes;n=n.warmLanes;var T=u&134217727;return T!==0?(u=T&~d,u!==0?f=qn(u):(b&=T,b!==0?f=qn(b):o||(o=T&~n,o!==0&&(f=qn(o))))):(T=u&~d,T!==0?f=qn(T):b!==0?f=qn(b):o||(o=u&~n,o!==0&&(f=qn(o)))),f===0?0:s!==0&&s!==f&&(s&d)===0&&(d=f&-f,o=s&-s,d>=o||d===32&&(o&4194048)!==0)?s:f}function Ns(n,s){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&s)===0}function nl(n,s){switch(n){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function il(){var n=Cs;return Cs<<=1,(Cs&4194048)===0&&(Cs=256),n}function rl(){var n=xs;return xs<<=1,(xs&62914560)===0&&(xs=4194304),n}function Oi(n){for(var s=[],o=0;31>o;o++)s.push(n);return s}function Di(n,s){n.pendingLanes|=s,s!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function sl(n,s,o,u,f,d){var b=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var T=n.entanglements,x=n.expirationTimes,B=n.hiddenUpdates;for(o=b&~o;0<o;){var Q=31-Wt(o),W=1<<Q;T[Q]=0,x[Q]=-1;var q=B[Q];if(q!==null)for(B[Q]=null,Q=0;Q<q.length;Q++){var H=q[Q];H!==null&&(H.lane&=-536870913)}o&=~W}u!==0&&Zn(n,u,0),d!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=d&~(b&~s))}function Zn(n,s,o){n.pendingLanes|=s,n.suspendedLanes&=~s;var u=31-Wt(s);n.entangledLanes|=s,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194090}function al(n,s){var o=n.entangledLanes|=s;for(n=n.entanglements;o;){var u=31-Wt(o),f=1<<u;f&s|n[u]&s&&(n[u]|=s),o&=~f}}function yr(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function wa(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function vr(){var n=re.p;return n!==0?n:(n=window.event,n===void 0?32:lb(n.type))}function nc(n,s){var o=re.p;try{return re.p=n,s()}finally{re.p=o}}var lt=Math.random().toString(36).slice(2),xt="__reactFiber$"+lt,Et="__reactProps$"+lt,Cn="__reactContainer$"+lt,ol="__reactEvents$"+lt,ld="__reactListeners$"+lt,_r="__reactHandles$"+lt,ic="__reactResources$"+lt,Os="__reactMarker$"+lt;function br(n){delete n[xt],delete n[Et],delete n[ol],delete n[ld],delete n[_r]}function Pi(n){var s=n[xt];if(s)return s;for(var o=n.parentNode;o;){if(s=o[Cn]||o[xt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(n=K0(n);n!==null;){if(o=n[xt])return o;n=K0(n)}return s}n=o,o=n.parentNode}return null}function ei(n){if(n=n[xt]||n[Cn]){var s=n.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return n}return null}function ti(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n.stateNode;throw Error(r(33))}function an(n){var s=n[ic];return s||(s=n[ic]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function gt(n){n[Os]=!0}var ll=new Set,Ia={};function Hn(n,s){ki(n,s),ki(n+"Capture",s)}function ki(n,s){for(Ia[n]=s,n=0;n<s.length;n++)ll.add(s[n])}var rc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sc={},Ds={};function ac(n){return As.call(Ds,n)?!0:As.call(sc,n)?!1:rc.test(n)?Ds[n]=!0:(sc[n]=!0,!1)}function Er(n,s,o){if(ac(s))if(o===null)n.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(s);return}}n.setAttribute(s,""+o)}}function ni(n,s,o){if(o===null)n.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttribute(s,""+o)}}function qt(n,s,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(s,o,""+u)}}var Ps,oc;function Mi(n){if(Ps===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Ps=s&&s[1]||"",oc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ps+n+oc}var Ra=!1;function Ca(n,s){if(!n||Ra)return"";Ra=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(H){var q=H}Reflect.construct(n,[],W)}else{try{W.call()}catch(H){q=H}n.call(W.prototype)}}else{try{throw Error()}catch(H){q=H}(W=n())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(H){if(H&&q&&typeof H.stack=="string")return[H.stack,q.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=u.DetermineComponentFrameRoot(),b=d[0],T=d[1];if(b&&T){var x=b.split(`
`),B=T.split(`
`);for(f=u=0;u<x.length&&!x[u].includes("DetermineComponentFrameRoot");)u++;for(;f<B.length&&!B[f].includes("DetermineComponentFrameRoot");)f++;if(u===x.length||f===B.length)for(u=x.length-1,f=B.length-1;1<=u&&0<=f&&x[u]!==B[f];)f--;for(;1<=u&&0<=f;u--,f--)if(x[u]!==B[f]){if(u!==1||f!==1)do if(u--,f--,0>f||x[u]!==B[f]){var Q=`
`+x[u].replace(" at new "," at ");return n.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",n.displayName)),Q}while(1<=u&&0<=f);break}}}finally{Ra=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?Mi(o):""}function ul(n){switch(n.tag){case 26:case 27:case 5:return Mi(n.type);case 16:return Mi("Lazy");case 13:return Mi("Suspense");case 19:return Mi("SuspenseList");case 0:case 15:return Ca(n.type,!1);case 11:return Ca(n.type.render,!1);case 1:return Ca(n.type,!0);case 31:return Mi("Activity");default:return""}}function xa(n){try{var s="";do s+=ul(n),n=n.return;while(n);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function on(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function cl(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ud(n){var s=cl(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),u=""+n[s];if(!n.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,d=o.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return f.call(this)},set:function(b){u=""+b,d.call(this,b)}}),Object.defineProperty(n,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(b){u=""+b},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function Na(n){n._valueTracker||(n._valueTracker=ud(n))}function hl(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return n&&(u=cl(n)?n.checked?"true":"false":n.value),n=u,n!==o?(s.setValue(n),!0):!1}function ks(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var cd=/[\n"\\]/g;function Tt(n){return n.replace(cd,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function yn(n,s,o,u,f,d,b,T){n.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.type=b:n.removeAttribute("type"),s!=null?b==="number"?(s===0&&n.value===""||n.value!=s)&&(n.value=""+on(s)):n.value!==""+on(s)&&(n.value=""+on(s)):b!=="submit"&&b!=="reset"||n.removeAttribute("value"),s!=null?Tr(n,b,on(s)):o!=null?Tr(n,b,on(o)):u!=null&&n.removeAttribute("value"),f==null&&d!=null&&(n.defaultChecked=!!d),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.name=""+on(T):n.removeAttribute("name")}function Ms(n,s,o,u,f,d,b,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),s!=null||o!=null){if(!(d!=="submit"&&d!=="reset"||s!=null))return;o=o!=null?""+on(o):"",s=s!=null?""+on(s):o,T||s===n.value||(n.value=s),n.defaultValue=s}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=T?n.checked:!!u,n.defaultChecked=!!u,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(n.name=b)}function Tr(n,s,o){s==="number"&&ks(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function Vi(n,s,o,u){if(n=n.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=s.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&u&&(n[o].defaultSelected=!0)}else{for(o=""+on(o),s=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}s!==null||n[f].disabled||(s=n[f])}s!==null&&(s.selected=!0)}}function Ze(n,s,o){if(s!=null&&(s=""+on(s),s!==n.value&&(n.value=s),o==null)){n.defaultValue!==s&&(n.defaultValue=s);return}n.defaultValue=o!=null?""+on(o):""}function Vs(n,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(r(92));if(Je(u)){if(1<u.length)throw Error(r(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=on(s),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function xn(n,s){if(s){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=s;return}}n.textContent=s}var Ls=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function lc(n,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(s,""):s==="float"?n.cssFloat="":n[s]="":u?n.setProperty(s,o):typeof o!="number"||o===0||Ls.has(s)?s==="float"?n.cssFloat=o:n[s]=(""+o).trim():n[s]=o+"px"}function fl(n,s,o){if(s!=null&&typeof s!="object")throw Error(r(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var f in s)u=s[f],s.hasOwnProperty(f)&&o[f]!==u&&lc(n,f,u)}else for(var d in s)s.hasOwnProperty(d)&&lc(n,d,s[d])}function dl(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Oa(n){return fd.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Li=null;function Nn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ui=null,ji=null;function ml(n){var s=ei(n);if(s&&(n=s.stateNode)){var o=n[Et]||null;e:switch(n=s.stateNode,s.type){case"input":if(yn(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Tt(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==n&&u.form===n.form){var f=u[Et]||null;if(!f)throw Error(r(90));yn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===n.form&&hl(u)}break e;case"textarea":Ze(n,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Vi(n,!!o.multiple,s,!1)}}}var ii=!1;function uc(n,s,o){if(ii)return n(s,o);ii=!0;try{var u=n(s);return u}finally{if(ii=!1,(Ui!==null||ji!==null)&&(nh(),Ui&&(s=Ui,n=ji,ji=Ui=null,ml(s),n)))for(s=0;s<n.length;s++)ml(n[s])}}function Us(n,s){var o=n.stateNode;if(o===null)return null;var u=o[Et]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(r(231,s,typeof o));return o}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),On=!1;if(Gn)try{var js={};Object.defineProperty(js,"passive",{get:function(){On=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{On=!1}var ri=null,Ar=null,zi=null;function pl(){if(zi)return zi;var n,s=Ar,o=s.length,u,f="value"in ri?ri.value:ri.textContent,d=f.length;for(n=0;n<o&&s[n]===f[n];n++);var b=o-n;for(u=1;u<=b&&s[o-u]===f[d-u];u++);return zi=f.slice(n,1<u?1-u:void 0)}function si(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function ai(){return!0}function gl(){return!1}function Lt(n){function s(o,u,f,d,b){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=d,this.target=b,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(o=n[T],this[T]=o?o(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ai:gl,this.isPropagationStopped=gl,this}return v(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ai)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ai)},persist:function(){},isPersistent:ai}),s}var Ke={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Da=Lt(Ke),zs=v({},Ke,{view:0,detail:0}),cc=Lt(zs),Pa,ka,oi,Bs=v({},zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hs,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==oi&&(oi&&n.type==="mousemove"?(Pa=n.screenX-oi.screenX,ka=n.screenY-oi.screenY):ka=Pa=0,oi=n),Pa)},movementY:function(n){return"movementY"in n?n.movementY:ka}}),Dn=Lt(Bs),hc=v({},Bs,{dataTransfer:0}),dd=Lt(hc),Fs=v({},zs,{relatedTarget:0}),Ma=Lt(Fs),yl=v({},Ke,{animationName:0,elapsedTime:0,pseudoElement:0}),Va=Lt(yl),fc=v({},Ke,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),La=Lt(fc),md=v({},Ke,{data:0}),vl=Lt(md),qs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _l(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=mc[n])?!!s[n]:!1}function Hs(){return _l}var pc=v({},zs,{key:function(n){if(n.key){var s=qs[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=si(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?dc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hs,charCode:function(n){return n.type==="keypress"?si(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?si(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ua=Lt(pc),gc=v({},Bs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bl=Lt(gc),Bi=v({},zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hs}),yc=Lt(Bi),vc=v({},Ke,{propertyName:0,elapsedTime:0,pseudoElement:0}),_c=Lt(vc),bc=v({},Bs,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ja=Lt(bc),ln=v({},Ke,{newState:0,oldState:0}),Ec=Lt(ln),Tc=[9,13,27,32],li=Gn&&"CompositionEvent"in window,h=null;Gn&&"documentMode"in document&&(h=document.documentMode);var y=Gn&&"TextEvent"in window&&!h,_=Gn&&(!li||h&&8<h&&11>=h),w=" ",j=!1;function G(n,s){switch(n){case"keyup":return Tc.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ce(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Be=!1;function Nt(n,s){switch(n){case"compositionend":return ce(s);case"keypress":return s.which!==32?null:(j=!0,w);case"textInput":return n=s.data,n===w&&j?null:n;default:return null}}function Fe(n,s){if(Be)return n==="compositionend"||!li&&G(n,s)?(n=pl(),zi=Ar=ri=null,Be=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return _&&s.locale!=="ko"?null:s.data;default:return null}}var Ut={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ot(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!Ut[n.type]:s==="textarea"}function Fi(n,s,o,u){Ui?ji?ji.push(u):ji=[u]:Ui=u,s=lh(s,"onChange"),0<s.length&&(o=new Da("onChange","change",null,o,u),n.push({event:o,listeners:s}))}var Ht=null,ui=null;function El(n){L0(n,0)}function Ac(n){var s=ti(n);if(hl(s))return n}function rv(n,s){if(n==="change")return s}var sv=!1;if(Gn){var pd;if(Gn){var gd="oninput"in document;if(!gd){var av=document.createElement("div");av.setAttribute("oninput","return;"),gd=typeof av.oninput=="function"}pd=gd}else pd=!1;sv=pd&&(!document.documentMode||9<document.documentMode)}function ov(){Ht&&(Ht.detachEvent("onpropertychange",lv),ui=Ht=null)}function lv(n){if(n.propertyName==="value"&&Ac(ui)){var s=[];Fi(s,ui,n,Nn(n)),uc(El,s)}}function nI(n,s,o){n==="focusin"?(ov(),Ht=s,ui=o,Ht.attachEvent("onpropertychange",lv)):n==="focusout"&&ov()}function iI(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ac(ui)}function rI(n,s){if(n==="click")return Ac(s)}function sI(n,s){if(n==="input"||n==="change")return Ac(s)}function aI(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var vn=typeof Object.is=="function"?Object.is:aI;function Tl(n,s){if(vn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var o=Object.keys(n),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!As.call(s,f)||!vn(n[f],s[f]))return!1}return!0}function uv(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function cv(n,s){var o=uv(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=s&&u>=s)return{node:o,offset:s-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=uv(o)}}function hv(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?hv(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function fv(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var s=ks(n.document);s instanceof n.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)n=s.contentWindow;else break;s=ks(n.document)}return s}function yd(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}var oI=Gn&&"documentMode"in document&&11>=document.documentMode,za=null,vd=null,Al=null,_d=!1;function dv(n,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;_d||za==null||za!==ks(u)||(u=za,"selectionStart"in u&&yd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Al&&Tl(Al,u)||(Al=u,u=lh(vd,"onSelect"),0<u.length&&(s=new Da("onSelect","select",null,s,o),n.push({event:s,listeners:u}),s.target=za)))}function Gs(n,s){var o={};return o[n.toLowerCase()]=s.toLowerCase(),o["Webkit"+n]="webkit"+s,o["Moz"+n]="moz"+s,o}var Ba={animationend:Gs("Animation","AnimationEnd"),animationiteration:Gs("Animation","AnimationIteration"),animationstart:Gs("Animation","AnimationStart"),transitionrun:Gs("Transition","TransitionRun"),transitionstart:Gs("Transition","TransitionStart"),transitioncancel:Gs("Transition","TransitionCancel"),transitionend:Gs("Transition","TransitionEnd")},bd={},mv={};Gn&&(mv=document.createElement("div").style,"AnimationEvent"in window||(delete Ba.animationend.animation,delete Ba.animationiteration.animation,delete Ba.animationstart.animation),"TransitionEvent"in window||delete Ba.transitionend.transition);function $s(n){if(bd[n])return bd[n];if(!Ba[n])return n;var s=Ba[n],o;for(o in s)if(s.hasOwnProperty(o)&&o in mv)return bd[n]=s[o];return n}var pv=$s("animationend"),gv=$s("animationiteration"),yv=$s("animationstart"),lI=$s("transitionrun"),uI=$s("transitionstart"),cI=$s("transitioncancel"),vv=$s("transitionend"),_v=new Map,Ed="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ed.push("scrollEnd");function $n(n,s){_v.set(n,s),Hn(s,[n])}var bv=new WeakMap;function Pn(n,s){if(typeof n=="object"&&n!==null){var o=bv.get(n);return o!==void 0?o:(s={value:n,source:s,stack:xa(s)},bv.set(n,s),s)}return{value:n,source:s,stack:xa(s)}}var kn=[],Fa=0,Td=0;function Sc(){for(var n=Fa,s=Td=Fa=0;s<n;){var o=kn[s];kn[s++]=null;var u=kn[s];kn[s++]=null;var f=kn[s];kn[s++]=null;var d=kn[s];if(kn[s++]=null,u!==null&&f!==null){var b=u.pending;b===null?f.next=f:(f.next=b.next,b.next=f),u.pending=f}d!==0&&Ev(o,f,d)}}function wc(n,s,o,u){kn[Fa++]=n,kn[Fa++]=s,kn[Fa++]=o,kn[Fa++]=u,Td|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function Ad(n,s,o,u){return wc(n,s,o,u),Ic(n)}function qa(n,s){return wc(n,null,null,s),Ic(n)}function Ev(n,s,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var f=!1,d=n.return;d!==null;)d.childLanes|=o,u=d.alternate,u!==null&&(u.childLanes|=o),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(f=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,f&&s!==null&&(f=31-Wt(o),n=d.hiddenUpdates,u=n[f],u===null?n[f]=[s]:u.push(s),s.lane=o|536870912),d):null}function Ic(n){if(50<Yl)throw Yl=0,xm=null,Error(r(185));for(var s=n.return;s!==null;)n=s,s=n.return;return n.tag===3?n.stateNode:null}var Ha={};function hI(n,s,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(n,s,o,u){return new hI(n,s,o,u)}function Sd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function qi(n,s){var o=n.alternate;return o===null?(o=_n(n.tag,s,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=s,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,s=n.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function Tv(n,s){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=s,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,s=o.dependencies,n.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),n}function Rc(n,s,o,u,f,d){var b=0;if(u=n,typeof n=="function")Sd(n)&&(b=1);else if(typeof n=="string")b=dR(n,o,ve.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case I:return n=_n(31,o,s,f),n.elementType=I,n.lanes=d,n;case F:return Ks(o.children,f,d,s);case Y:b=8,f|=24;break;case U:return n=_n(12,o,s,f|2),n.elementType=U,n.lanes=d,n;case le:return n=_n(13,o,s,f),n.elementType=le,n.lanes=d,n;case me:return n=_n(19,o,s,f),n.elementType=me,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case te:case $:b=10;break e;case ne:b=9;break e;case oe:b=11;break e;case M:b=14;break e;case R:b=16,u=null;break e}b=29,o=Error(r(130,n===null?"null":typeof n,"")),u=null}return s=_n(b,o,s,f),s.elementType=n,s.type=u,s.lanes=d,s}function Ks(n,s,o,u){return n=_n(7,n,u,s),n.lanes=o,n}function wd(n,s,o){return n=_n(6,n,null,s),n.lanes=o,n}function Id(n,s,o){return s=_n(4,n.children!==null?n.children:[],n.key,s),s.lanes=o,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}var Ga=[],$a=0,Cc=null,xc=0,Mn=[],Vn=0,Ys=null,Hi=1,Gi="";function Qs(n,s){Ga[$a++]=xc,Ga[$a++]=Cc,Cc=n,xc=s}function Av(n,s,o){Mn[Vn++]=Hi,Mn[Vn++]=Gi,Mn[Vn++]=Ys,Ys=n;var u=Hi;n=Gi;var f=32-Wt(u)-1;u&=~(1<<f),o+=1;var d=32-Wt(s)+f;if(30<d){var b=f-f%5;d=(u&(1<<b)-1).toString(32),u>>=b,f-=b,Hi=1<<32-Wt(s)+f|o<<f|u,Gi=d+n}else Hi=1<<d|o<<f|u,Gi=n}function Rd(n){n.return!==null&&(Qs(n,1),Av(n,1,0))}function Cd(n){for(;n===Cc;)Cc=Ga[--$a],Ga[$a]=null,xc=Ga[--$a],Ga[$a]=null;for(;n===Ys;)Ys=Mn[--Vn],Mn[Vn]=null,Gi=Mn[--Vn],Mn[Vn]=null,Hi=Mn[--Vn],Mn[Vn]=null}var un=null,mt=null,$e=!1,Xs=null,ci=!1,xd=Error(r(519));function Ws(n){var s=Error(r(418,""));throw Il(Pn(s,n)),xd}function Sv(n){var s=n.stateNode,o=n.type,u=n.memoizedProps;switch(s[xt]=n,s[Et]=u,o){case"dialog":Le("cancel",s),Le("close",s);break;case"iframe":case"object":case"embed":Le("load",s);break;case"video":case"audio":for(o=0;o<Xl.length;o++)Le(Xl[o],s);break;case"source":Le("error",s);break;case"img":case"image":case"link":Le("error",s),Le("load",s);break;case"details":Le("toggle",s);break;case"input":Le("invalid",s),Ms(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Na(s);break;case"select":Le("invalid",s);break;case"textarea":Le("invalid",s),Vs(s,u.value,u.defaultValue,u.children),Na(s)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||B0(s.textContent,o)?(u.popover!=null&&(Le("beforetoggle",s),Le("toggle",s)),u.onScroll!=null&&Le("scroll",s),u.onScrollEnd!=null&&Le("scrollend",s),u.onClick!=null&&(s.onclick=uh),s=!0):s=!1,s||Ws(n)}function wv(n){for(un=n.return;un;)switch(un.tag){case 5:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:un=un.return}}function Sl(n){if(n!==un)return!1;if(!$e)return wv(n),$e=!0,!1;var s=n.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||Gm(n.type,n.memoizedProps)),o=!o),o&&mt&&Ws(n),wv(n),s===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(s===0){mt=Yn(n.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;n=n.nextSibling}mt=null}}else s===27?(s=mt,jr(n.type)?(n=Qm,Qm=null,mt=n):mt=s):mt=un?Yn(n.stateNode.nextSibling):null;return!0}function wl(){mt=un=null,$e=!1}function Iv(){var n=Xs;return n!==null&&(fn===null?fn=n:fn.push.apply(fn,n),Xs=null),n}function Il(n){Xs===null?Xs=[n]:Xs.push(n)}var Nd=ee(null),Js=null,$i=null;function Sr(n,s,o){se(Nd,s._currentValue),s._currentValue=o}function Ki(n){n._currentValue=Nd.current,ue(Nd)}function Od(n,s,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),n===o)break;n=n.return}}function Dd(n,s,o,u){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var d=f.dependencies;if(d!==null){var b=f.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=f;for(var x=0;x<s.length;x++)if(T.context===s[x]){d.lanes|=o,T=d.alternate,T!==null&&(T.lanes|=o),Od(d.return,o,n),u||(b=null);break e}d=T.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(r(341));b.lanes|=o,d=b.alternate,d!==null&&(d.lanes|=o),Od(b,o,n),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===n){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function Rl(n,s,o,u){n=null;for(var f=s,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(r(387));if(b=b.memoizedProps,b!==null){var T=f.type;vn(f.pendingProps.value,b.value)||(n!==null?n.push(T):n=[T])}}else if(f===Vt.current){if(b=f.alternate,b===null)throw Error(r(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(nu):n=[nu])}f=f.return}n!==null&&Dd(s,n,o,u),s.flags|=262144}function Nc(n){for(n=n.firstContext;n!==null;){if(!vn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Zs(n){Js=n,$i=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Jt(n){return Rv(Js,n)}function Oc(n,s){return Js===null&&Zs(n),Rv(n,s)}function Rv(n,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},$i===null){if(n===null)throw Error(r(308));$i=s,n.dependencies={lanes:0,firstContext:s},n.flags|=524288}else $i=$i.next=s;return o}var fI=typeof AbortController<"u"?AbortController:function(){var n=[],s=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){s.aborted=!0,n.forEach(function(o){return o()})}},dI=i.unstable_scheduleCallback,mI=i.unstable_NormalPriority,Dt={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pd(){return{controller:new fI,data:new Map,refCount:0}}function Cl(n){n.refCount--,n.refCount===0&&dI(mI,function(){n.controller.abort()})}var xl=null,kd=0,Ka=0,Ya=null;function pI(n,s){if(xl===null){var o=xl=[];kd=0,Ka=Vm(),Ya={status:"pending",value:void 0,then:function(u){o.push(u)}}}return kd++,s.then(Cv,Cv),s}function Cv(){if(--kd===0&&xl!==null){Ya!==null&&(Ya.status="fulfilled");var n=xl;xl=null,Ka=0,Ya=null;for(var s=0;s<n.length;s++)(0,n[s])()}}function gI(n,s){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return n.then(function(){u.status="fulfilled",u.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var xv=K.S;K.S=function(n,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&pI(n,s),xv!==null&&xv(n,s)};var ea=ee(null);function Md(){var n=ea.current;return n!==null?n:at.pooledCache}function Dc(n,s){s===null?se(ea,ea.current):se(ea,s.pool)}function Nv(){var n=Md();return n===null?null:{parent:Dt._currentValue,pool:n}}var Nl=Error(r(460)),Ov=Error(r(474)),Pc=Error(r(542)),Vd={then:function(){}};function Dv(n){return n=n.status,n==="fulfilled"||n==="rejected"}function kc(){}function Pv(n,s,o){switch(o=n[o],o===void 0?n.push(s):o!==s&&(s.then(kc,kc),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,Mv(n),n;default:if(typeof s.status=="string")s.then(kc,kc);else{if(n=at,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=s,n.status="pending",n.then(function(u){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=u}},function(u){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,Mv(n),n}throw Ol=s,Nl}}var Ol=null;function kv(){if(Ol===null)throw Error(r(459));var n=Ol;return Ol=null,n}function Mv(n){if(n===Nl||n===Pc)throw Error(r(483))}var wr=!1;function Ld(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ud(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Ir(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Rr(n,s,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Xe&2)!==0){var f=u.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s,s=Ic(n),Ev(n,null,o),s}return wc(n,u,s,o),Ic(n)}function Dl(n,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,al(n,o)}}function jd(n,s){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,d=null;if(o=o.firstBaseUpdate,o!==null){do{var b={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};d===null?f=d=b:d=d.next=b,o=o.next}while(o!==null);d===null?f=d=s:d=d.next=s}else f=d=s;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=s:n.next=s,o.lastBaseUpdate=s}var zd=!1;function Pl(){if(zd){var n=Ya;if(n!==null)throw n}}function kl(n,s,o,u){zd=!1;var f=n.updateQueue;wr=!1;var d=f.firstBaseUpdate,b=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var x=T,B=x.next;x.next=null,b===null?d=B:b.next=B,b=x;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,T=Q.lastBaseUpdate,T!==b&&(T===null?Q.firstBaseUpdate=B:T.next=B,Q.lastBaseUpdate=x))}if(d!==null){var W=f.baseState;b=0,Q=B=x=null,T=d;do{var q=T.lane&-536870913,H=q!==T.lane;if(H?(qe&q)===q:(u&q)===q){q!==0&&q===Ka&&(zd=!0),Q!==null&&(Q=Q.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ae=n,be=T;q=s;var nt=o;switch(be.tag){case 1:if(Ae=be.payload,typeof Ae=="function"){W=Ae.call(nt,W,q);break e}W=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=be.payload,q=typeof Ae=="function"?Ae.call(nt,W,q):Ae,q==null)break e;W=v({},W,q);break e;case 2:wr=!0}}q=T.callback,q!==null&&(n.flags|=64,H&&(n.flags|=8192),H=f.callbacks,H===null?f.callbacks=[q]:H.push(q))}else H={lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Q===null?(B=Q=H,x=W):Q=Q.next=H,b|=q;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;H=T,T=H.next,H.next=null,f.lastBaseUpdate=H,f.shared.pending=null}}while(!0);Q===null&&(x=W),f.baseState=x,f.firstBaseUpdate=B,f.lastBaseUpdate=Q,d===null&&(f.shared.lanes=0),Mr|=b,n.lanes=b,n.memoizedState=W}}function Vv(n,s){if(typeof n!="function")throw Error(r(191,n));n.call(s)}function Lv(n,s){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)Vv(o[n],s)}var Qa=ee(null),Mc=ee(0);function Uv(n,s){n=er,se(Mc,n),se(Qa,s),er=n|s.baseLanes}function Bd(){se(Mc,er),se(Qa,Qa.current)}function Fd(){er=Mc.current,ue(Qa),ue(Mc)}var Cr=0,Ne=null,et=null,At=null,Vc=!1,Xa=!1,ta=!1,Lc=0,Ml=0,Wa=null,yI=0;function yt(){throw Error(r(321))}function qd(n,s){if(s===null)return!1;for(var o=0;o<s.length&&o<n.length;o++)if(!vn(n[o],s[o]))return!1;return!0}function Hd(n,s,o,u,f,d){return Cr=d,Ne=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,K.H=n===null||n.memoizedState===null?E_:T_,ta=!1,d=o(u,f),ta=!1,Xa&&(d=zv(s,o,u,f)),jv(n),d}function jv(n){K.H=qc;var s=et!==null&&et.next!==null;if(Cr=0,At=et=Ne=null,Vc=!1,Ml=0,Wa=null,s)throw Error(r(300));n===null||jt||(n=n.dependencies,n!==null&&Nc(n)&&(jt=!0))}function zv(n,s,o,u){Ne=n;var f=0;do{if(Xa&&(Wa=null),Ml=0,Xa=!1,25<=f)throw Error(r(301));if(f+=1,At=et=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}K.H=SI,d=s(o,u)}while(Xa);return d}function vI(){var n=K.H,s=n.useState()[0];return s=typeof s.then=="function"?Vl(s):s,n=n.useState()[0],(et!==null?et.memoizedState:null)!==n&&(Ne.flags|=1024),s}function Gd(){var n=Lc!==0;return Lc=0,n}function $d(n,s,o){s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~o}function Kd(n){if(Vc){for(n=n.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}Vc=!1}Cr=0,At=et=Ne=null,Xa=!1,Ml=Lc=0,Wa=null}function cn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?Ne.memoizedState=At=n:At=At.next=n,At}function St(){if(et===null){var n=Ne.alternate;n=n!==null?n.memoizedState:null}else n=et.next;var s=At===null?Ne.memoizedState:At.next;if(s!==null)At=s,et=n;else{if(n===null)throw Ne.alternate===null?Error(r(467)):Error(r(310));et=n,n={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},At===null?Ne.memoizedState=At=n:At=At.next=n}return At}function Yd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vl(n){var s=Ml;return Ml+=1,Wa===null&&(Wa=[]),n=Pv(Wa,n,s),s=Ne,(At===null?s.memoizedState:At.next)===null&&(s=s.alternate,K.H=s===null||s.memoizedState===null?E_:T_),n}function Uc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Vl(n);if(n.$$typeof===$)return Jt(n)}throw Error(r(438,String(n)))}function Qd(n){var s=null,o=Ne.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=Ne.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=Yd(),Ne.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(n),u=0;u<n;u++)o[u]=N;return s.index++,o}function Yi(n,s){return typeof s=="function"?s(n):s}function jc(n){var s=St();return Xd(s,et,n)}function Xd(n,s,o){var u=n.queue;if(u===null)throw Error(r(311));u.lastRenderedReducer=o;var f=n.baseQueue,d=u.pending;if(d!==null){if(f!==null){var b=f.next;f.next=d.next,d.next=b}s.baseQueue=f=d,u.pending=null}if(d=n.baseState,f===null)n.memoizedState=d;else{s=f.next;var T=b=null,x=null,B=s,Q=!1;do{var W=B.lane&-536870913;if(W!==B.lane?(qe&W)===W:(Cr&W)===W){var q=B.revertLane;if(q===0)x!==null&&(x=x.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),W===Ka&&(Q=!0);else if((Cr&q)===q){B=B.next,q===Ka&&(Q=!0);continue}else W={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},x===null?(T=x=W,b=d):x=x.next=W,Ne.lanes|=q,Mr|=q;W=B.action,ta&&o(d,W),d=B.hasEagerState?B.eagerState:o(d,W)}else q={lane:W,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},x===null?(T=x=q,b=d):x=x.next=q,Ne.lanes|=W,Mr|=W;B=B.next}while(B!==null&&B!==s);if(x===null?b=d:x.next=T,!vn(d,n.memoizedState)&&(jt=!0,Q&&(o=Ya,o!==null)))throw o;n.memoizedState=d,n.baseState=b,n.baseQueue=x,u.lastRenderedState=d}return f===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function Wd(n){var s=St(),o=s.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=n;var u=o.dispatch,f=o.pending,d=s.memoizedState;if(f!==null){o.pending=null;var b=f=f.next;do d=n(d,b.action),b=b.next;while(b!==f);vn(d,s.memoizedState)||(jt=!0),s.memoizedState=d,s.baseQueue===null&&(s.baseState=d),o.lastRenderedState=d}return[d,u]}function Bv(n,s,o){var u=Ne,f=St(),d=$e;if(d){if(o===void 0)throw Error(r(407));o=o()}else o=s();var b=!vn((et||f).memoizedState,o);b&&(f.memoizedState=o,jt=!0),f=f.queue;var T=Hv.bind(null,u,f,n);if(Ll(2048,8,T,[n]),f.getSnapshot!==s||b||At!==null&&At.memoizedState.tag&1){if(u.flags|=2048,Ja(9,zc(),qv.bind(null,u,f,o,s),null),at===null)throw Error(r(349));d||(Cr&124)!==0||Fv(u,s,o)}return o}function Fv(n,s,o){n.flags|=16384,n={getSnapshot:s,value:o},s=Ne.updateQueue,s===null?(s=Yd(),Ne.updateQueue=s,s.stores=[n]):(o=s.stores,o===null?s.stores=[n]:o.push(n))}function qv(n,s,o,u){s.value=o,s.getSnapshot=u,Gv(s)&&$v(n)}function Hv(n,s,o){return o(function(){Gv(s)&&$v(n)})}function Gv(n){var s=n.getSnapshot;n=n.value;try{var o=s();return!vn(n,o)}catch{return!0}}function $v(n){var s=qa(n,2);s!==null&&Sn(s,n,2)}function Jd(n){var s=cn();if(typeof n=="function"){var o=n;if(n=o(),ta){gn(!0);try{o()}finally{gn(!1)}}}return s.memoizedState=s.baseState=n,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:n},s}function Kv(n,s,o,u){return n.baseState=o,Xd(n,et,typeof u=="function"?u:Yi)}function _I(n,s,o,u,f){if(Fc(n))throw Error(r(485));if(n=s.action,n!==null){var d={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){d.listeners.push(b)}};K.T!==null?o(!0):d.isTransition=!1,u(d),o=s.pending,o===null?(d.next=s.pending=d,Yv(s,d)):(d.next=o.next,s.pending=o.next=d)}}function Yv(n,s){var o=s.action,u=s.payload,f=n.state;if(s.isTransition){var d=K.T,b={};K.T=b;try{var T=o(f,u),x=K.S;x!==null&&x(b,T),Qv(n,s,T)}catch(B){Zd(n,s,B)}finally{K.T=d}}else try{d=o(f,u),Qv(n,s,d)}catch(B){Zd(n,s,B)}}function Qv(n,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Xv(n,s,u)},function(u){return Zd(n,s,u)}):Xv(n,s,o)}function Xv(n,s,o){s.status="fulfilled",s.value=o,Wv(s),n.state=o,s=n.pending,s!==null&&(o=s.next,o===s?n.pending=null:(o=o.next,s.next=o,Yv(n,o)))}function Zd(n,s,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,Wv(s),s=s.next;while(s!==u)}n.action=null}function Wv(n){n=n.listeners;for(var s=0;s<n.length;s++)(0,n[s])()}function Jv(n,s){return s}function Zv(n,s){if($e){var o=at.formState;if(o!==null){e:{var u=Ne;if($e){if(mt){t:{for(var f=mt,d=ci;f.nodeType!==8;){if(!d){f=null;break t}if(f=Yn(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){mt=Yn(f.nextSibling),u=f.data==="F!";break e}}Ws(u)}u=!1}u&&(s=o[0])}}return o=cn(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jv,lastRenderedState:s},o.queue=u,o=v_.bind(null,Ne,u),u.dispatch=o,u=Jd(!1),d=rm.bind(null,Ne,!1,u.queue),u=cn(),f={state:s,dispatch:null,action:n,pending:null},u.queue=f,o=_I.bind(null,Ne,f,d,o),f.dispatch=o,u.memoizedState=n,[s,o,!1]}function e_(n){var s=St();return t_(s,et,n)}function t_(n,s,o){if(s=Xd(n,s,Jv)[0],n=jc(Yi)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=Vl(s)}catch(b){throw b===Nl?Pc:b}else u=s;s=St();var f=s.queue,d=f.dispatch;return o!==s.memoizedState&&(Ne.flags|=2048,Ja(9,zc(),bI.bind(null,f,o),null)),[u,d,n]}function bI(n,s){n.action=s}function n_(n){var s=St(),o=et;if(o!==null)return t_(s,o,n);St(),s=s.memoizedState,o=St();var u=o.queue.dispatch;return o.memoizedState=n,[s,u,!1]}function Ja(n,s,o,u){return n={tag:n,create:o,deps:u,inst:s,next:null},s=Ne.updateQueue,s===null&&(s=Yd(),Ne.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,s.lastEffect=n),n}function zc(){return{destroy:void 0,resource:void 0}}function i_(){return St().memoizedState}function Bc(n,s,o,u){var f=cn();u=u===void 0?null:u,Ne.flags|=n,f.memoizedState=Ja(1|s,zc(),o,u)}function Ll(n,s,o,u){var f=St();u=u===void 0?null:u;var d=f.memoizedState.inst;et!==null&&u!==null&&qd(u,et.memoizedState.deps)?f.memoizedState=Ja(s,d,o,u):(Ne.flags|=n,f.memoizedState=Ja(1|s,d,o,u))}function r_(n,s){Bc(8390656,8,n,s)}function s_(n,s){Ll(2048,8,n,s)}function a_(n,s){return Ll(4,2,n,s)}function o_(n,s){return Ll(4,4,n,s)}function l_(n,s){if(typeof s=="function"){n=n();var o=s(n);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function u_(n,s,o){o=o!=null?o.concat([n]):null,Ll(4,4,l_.bind(null,s,n),o)}function em(){}function c_(n,s){var o=St();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&qd(s,u[1])?u[0]:(o.memoizedState=[n,s],n)}function h_(n,s){var o=St();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&qd(s,u[1]))return u[0];if(u=n(),ta){gn(!0);try{n()}finally{gn(!1)}}return o.memoizedState=[u,s],u}function tm(n,s,o){return o===void 0||(Cr&1073741824)!==0?n.memoizedState=s:(n.memoizedState=o,n=m0(),Ne.lanes|=n,Mr|=n,o)}function f_(n,s,o,u){return vn(o,s)?o:Qa.current!==null?(n=tm(n,o,u),vn(n,s)||(jt=!0),n):(Cr&42)===0?(jt=!0,n.memoizedState=o):(n=m0(),Ne.lanes|=n,Mr|=n,s)}function d_(n,s,o,u,f){var d=re.p;re.p=d!==0&&8>d?d:8;var b=K.T,T={};K.T=T,rm(n,!1,s,o);try{var x=f(),B=K.S;if(B!==null&&B(T,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var Q=gI(x,u);Ul(n,s,Q,An(n))}else Ul(n,s,u,An(n))}catch(W){Ul(n,s,{then:function(){},status:"rejected",reason:W},An())}finally{re.p=d,K.T=b}}function EI(){}function nm(n,s,o,u){if(n.tag!==5)throw Error(r(476));var f=m_(n).queue;d_(n,f,s,de,o===null?EI:function(){return p_(n),o(u)})}function m_(n){var s=n.memoizedState;if(s!==null)return s;s={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:de},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:o},next:null},n.memoizedState=s,n=n.alternate,n!==null&&(n.memoizedState=s),s}function p_(n){var s=m_(n).next.queue;Ul(n,s,{},An())}function im(){return Jt(nu)}function g_(){return St().memoizedState}function y_(){return St().memoizedState}function TI(n){for(var s=n.return;s!==null;){switch(s.tag){case 24:case 3:var o=An();n=Ir(o);var u=Rr(s,n,o);u!==null&&(Sn(u,s,o),Dl(u,s,o)),s={cache:Pd()},n.payload=s;return}s=s.return}}function AI(n,s,o){var u=An();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Fc(n)?__(s,o):(o=Ad(n,s,o,u),o!==null&&(Sn(o,n,u),b_(o,s,u)))}function v_(n,s,o){var u=An();Ul(n,s,o,u)}function Ul(n,s,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Fc(n))__(s,f);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=s.lastRenderedReducer,d!==null))try{var b=s.lastRenderedState,T=d(b,o);if(f.hasEagerState=!0,f.eagerState=T,vn(T,b))return wc(n,s,f,0),at===null&&Sc(),!1}catch{}finally{}if(o=Ad(n,s,f,u),o!==null)return Sn(o,n,u),b_(o,s,u),!0}return!1}function rm(n,s,o,u){if(u={lane:2,revertLane:Vm(),action:u,hasEagerState:!1,eagerState:null,next:null},Fc(n)){if(s)throw Error(r(479))}else s=Ad(n,o,u,2),s!==null&&Sn(s,n,2)}function Fc(n){var s=n.alternate;return n===Ne||s!==null&&s===Ne}function __(n,s){Xa=Vc=!0;var o=n.pending;o===null?s.next=s:(s.next=o.next,o.next=s),n.pending=s}function b_(n,s,o){if((o&4194048)!==0){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,al(n,o)}}var qc={readContext:Jt,use:Uc,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useLayoutEffect:yt,useInsertionEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useSyncExternalStore:yt,useId:yt,useHostTransitionStatus:yt,useFormState:yt,useActionState:yt,useOptimistic:yt,useMemoCache:yt,useCacheRefresh:yt},E_={readContext:Jt,use:Uc,useCallback:function(n,s){return cn().memoizedState=[n,s===void 0?null:s],n},useContext:Jt,useEffect:r_,useImperativeHandle:function(n,s,o){o=o!=null?o.concat([n]):null,Bc(4194308,4,l_.bind(null,s,n),o)},useLayoutEffect:function(n,s){return Bc(4194308,4,n,s)},useInsertionEffect:function(n,s){Bc(4,2,n,s)},useMemo:function(n,s){var o=cn();s=s===void 0?null:s;var u=n();if(ta){gn(!0);try{n()}finally{gn(!1)}}return o.memoizedState=[u,s],u},useReducer:function(n,s,o){var u=cn();if(o!==void 0){var f=o(s);if(ta){gn(!0);try{o(s)}finally{gn(!1)}}}else f=s;return u.memoizedState=u.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},u.queue=n,n=n.dispatch=AI.bind(null,Ne,n),[u.memoizedState,n]},useRef:function(n){var s=cn();return n={current:n},s.memoizedState=n},useState:function(n){n=Jd(n);var s=n.queue,o=v_.bind(null,Ne,s);return s.dispatch=o,[n.memoizedState,o]},useDebugValue:em,useDeferredValue:function(n,s){var o=cn();return tm(o,n,s)},useTransition:function(){var n=Jd(!1);return n=d_.bind(null,Ne,n.queue,!0,!1),cn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,s,o){var u=Ne,f=cn();if($e){if(o===void 0)throw Error(r(407));o=o()}else{if(o=s(),at===null)throw Error(r(349));(qe&124)!==0||Fv(u,s,o)}f.memoizedState=o;var d={value:o,getSnapshot:s};return f.queue=d,r_(Hv.bind(null,u,d,n),[n]),u.flags|=2048,Ja(9,zc(),qv.bind(null,u,d,o,s),null),o},useId:function(){var n=cn(),s=at.identifierPrefix;if($e){var o=Gi,u=Hi;o=(u&~(1<<32-Wt(u)-1)).toString(32)+o,s="«"+s+"R"+o,o=Lc++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=yI++,s="«"+s+"r"+o.toString(32)+"»";return n.memoizedState=s},useHostTransitionStatus:im,useFormState:Zv,useActionState:Zv,useOptimistic:function(n){var s=cn();s.memoizedState=s.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=rm.bind(null,Ne,!0,o),o.dispatch=s,[n,s]},useMemoCache:Qd,useCacheRefresh:function(){return cn().memoizedState=TI.bind(null,Ne)}},T_={readContext:Jt,use:Uc,useCallback:c_,useContext:Jt,useEffect:s_,useImperativeHandle:u_,useInsertionEffect:a_,useLayoutEffect:o_,useMemo:h_,useReducer:jc,useRef:i_,useState:function(){return jc(Yi)},useDebugValue:em,useDeferredValue:function(n,s){var o=St();return f_(o,et.memoizedState,n,s)},useTransition:function(){var n=jc(Yi)[0],s=St().memoizedState;return[typeof n=="boolean"?n:Vl(n),s]},useSyncExternalStore:Bv,useId:g_,useHostTransitionStatus:im,useFormState:e_,useActionState:e_,useOptimistic:function(n,s){var o=St();return Kv(o,et,n,s)},useMemoCache:Qd,useCacheRefresh:y_},SI={readContext:Jt,use:Uc,useCallback:c_,useContext:Jt,useEffect:s_,useImperativeHandle:u_,useInsertionEffect:a_,useLayoutEffect:o_,useMemo:h_,useReducer:Wd,useRef:i_,useState:function(){return Wd(Yi)},useDebugValue:em,useDeferredValue:function(n,s){var o=St();return et===null?tm(o,n,s):f_(o,et.memoizedState,n,s)},useTransition:function(){var n=Wd(Yi)[0],s=St().memoizedState;return[typeof n=="boolean"?n:Vl(n),s]},useSyncExternalStore:Bv,useId:g_,useHostTransitionStatus:im,useFormState:n_,useActionState:n_,useOptimistic:function(n,s){var o=St();return et!==null?Kv(o,et,n,s):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:Qd,useCacheRefresh:y_},Za=null,jl=0;function Hc(n){var s=jl;return jl+=1,Za===null&&(Za=[]),Pv(Za,n,s)}function zl(n,s){s=s.props.ref,n.ref=s!==void 0?s:null}function Gc(n,s){throw s.$$typeof===E?Error(r(525)):(n=Object.prototype.toString.call(s),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n)))}function A_(n){var s=n._init;return s(n._payload)}function S_(n){function s(L,k){if(n){var z=L.deletions;z===null?(L.deletions=[k],L.flags|=16):z.push(k)}}function o(L,k){if(!n)return null;for(;k!==null;)s(L,k),k=k.sibling;return null}function u(L){for(var k=new Map;L!==null;)L.key!==null?k.set(L.key,L):k.set(L.index,L),L=L.sibling;return k}function f(L,k){return L=qi(L,k),L.index=0,L.sibling=null,L}function d(L,k,z){return L.index=z,n?(z=L.alternate,z!==null?(z=z.index,z<k?(L.flags|=67108866,k):z):(L.flags|=67108866,k)):(L.flags|=1048576,k)}function b(L){return n&&L.alternate===null&&(L.flags|=67108866),L}function T(L,k,z,X){return k===null||k.tag!==6?(k=wd(z,L.mode,X),k.return=L,k):(k=f(k,z),k.return=L,k)}function x(L,k,z,X){var fe=z.type;return fe===F?Q(L,k,z.props.children,X,z.key):k!==null&&(k.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===R&&A_(fe)===k.type)?(k=f(k,z.props),zl(k,z),k.return=L,k):(k=Rc(z.type,z.key,z.props,null,L.mode,X),zl(k,z),k.return=L,k)}function B(L,k,z,X){return k===null||k.tag!==4||k.stateNode.containerInfo!==z.containerInfo||k.stateNode.implementation!==z.implementation?(k=Id(z,L.mode,X),k.return=L,k):(k=f(k,z.children||[]),k.return=L,k)}function Q(L,k,z,X,fe){return k===null||k.tag!==7?(k=Ks(z,L.mode,X,fe),k.return=L,k):(k=f(k,z),k.return=L,k)}function W(L,k,z){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=wd(""+k,L.mode,z),k.return=L,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return z=Rc(k.type,k.key,k.props,null,L.mode,z),zl(z,k),z.return=L,z;case V:return k=Id(k,L.mode,z),k.return=L,k;case R:var X=k._init;return k=X(k._payload),W(L,k,z)}if(Je(k)||P(k))return k=Ks(k,L.mode,z,null),k.return=L,k;if(typeof k.then=="function")return W(L,Hc(k),z);if(k.$$typeof===$)return W(L,Oc(L,k),z);Gc(L,k)}return null}function q(L,k,z,X){var fe=k!==null?k.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return fe!==null?null:T(L,k,""+z,X);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case S:return z.key===fe?x(L,k,z,X):null;case V:return z.key===fe?B(L,k,z,X):null;case R:return fe=z._init,z=fe(z._payload),q(L,k,z,X)}if(Je(z)||P(z))return fe!==null?null:Q(L,k,z,X,null);if(typeof z.then=="function")return q(L,k,Hc(z),X);if(z.$$typeof===$)return q(L,k,Oc(L,z),X);Gc(L,z)}return null}function H(L,k,z,X,fe){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return L=L.get(z)||null,T(k,L,""+X,fe);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return L=L.get(X.key===null?z:X.key)||null,x(k,L,X,fe);case V:return L=L.get(X.key===null?z:X.key)||null,B(k,L,X,fe);case R:var ke=X._init;return X=ke(X._payload),H(L,k,z,X,fe)}if(Je(X)||P(X))return L=L.get(z)||null,Q(k,L,X,fe,null);if(typeof X.then=="function")return H(L,k,z,Hc(X),fe);if(X.$$typeof===$)return H(L,k,z,Oc(k,X),fe);Gc(k,X)}return null}function Ae(L,k,z,X){for(var fe=null,ke=null,ge=k,Ee=k=0,Bt=null;ge!==null&&Ee<z.length;Ee++){ge.index>Ee?(Bt=ge,ge=null):Bt=ge.sibling;var Ge=q(L,ge,z[Ee],X);if(Ge===null){ge===null&&(ge=Bt);break}n&&ge&&Ge.alternate===null&&s(L,ge),k=d(Ge,k,Ee),ke===null?fe=Ge:ke.sibling=Ge,ke=Ge,ge=Bt}if(Ee===z.length)return o(L,ge),$e&&Qs(L,Ee),fe;if(ge===null){for(;Ee<z.length;Ee++)ge=W(L,z[Ee],X),ge!==null&&(k=d(ge,k,Ee),ke===null?fe=ge:ke.sibling=ge,ke=ge);return $e&&Qs(L,Ee),fe}for(ge=u(ge);Ee<z.length;Ee++)Bt=H(ge,L,Ee,z[Ee],X),Bt!==null&&(n&&Bt.alternate!==null&&ge.delete(Bt.key===null?Ee:Bt.key),k=d(Bt,k,Ee),ke===null?fe=Bt:ke.sibling=Bt,ke=Bt);return n&&ge.forEach(function(Hr){return s(L,Hr)}),$e&&Qs(L,Ee),fe}function be(L,k,z,X){if(z==null)throw Error(r(151));for(var fe=null,ke=null,ge=k,Ee=k=0,Bt=null,Ge=z.next();ge!==null&&!Ge.done;Ee++,Ge=z.next()){ge.index>Ee?(Bt=ge,ge=null):Bt=ge.sibling;var Hr=q(L,ge,Ge.value,X);if(Hr===null){ge===null&&(ge=Bt);break}n&&ge&&Hr.alternate===null&&s(L,ge),k=d(Hr,k,Ee),ke===null?fe=Hr:ke.sibling=Hr,ke=Hr,ge=Bt}if(Ge.done)return o(L,ge),$e&&Qs(L,Ee),fe;if(ge===null){for(;!Ge.done;Ee++,Ge=z.next())Ge=W(L,Ge.value,X),Ge!==null&&(k=d(Ge,k,Ee),ke===null?fe=Ge:ke.sibling=Ge,ke=Ge);return $e&&Qs(L,Ee),fe}for(ge=u(ge);!Ge.done;Ee++,Ge=z.next())Ge=H(ge,L,Ee,Ge.value,X),Ge!==null&&(n&&Ge.alternate!==null&&ge.delete(Ge.key===null?Ee:Ge.key),k=d(Ge,k,Ee),ke===null?fe=Ge:ke.sibling=Ge,ke=Ge);return n&&ge.forEach(function(wR){return s(L,wR)}),$e&&Qs(L,Ee),fe}function nt(L,k,z,X){if(typeof z=="object"&&z!==null&&z.type===F&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case S:e:{for(var fe=z.key;k!==null;){if(k.key===fe){if(fe=z.type,fe===F){if(k.tag===7){o(L,k.sibling),X=f(k,z.props.children),X.return=L,L=X;break e}}else if(k.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===R&&A_(fe)===k.type){o(L,k.sibling),X=f(k,z.props),zl(X,z),X.return=L,L=X;break e}o(L,k);break}else s(L,k);k=k.sibling}z.type===F?(X=Ks(z.props.children,L.mode,X,z.key),X.return=L,L=X):(X=Rc(z.type,z.key,z.props,null,L.mode,X),zl(X,z),X.return=L,L=X)}return b(L);case V:e:{for(fe=z.key;k!==null;){if(k.key===fe)if(k.tag===4&&k.stateNode.containerInfo===z.containerInfo&&k.stateNode.implementation===z.implementation){o(L,k.sibling),X=f(k,z.children||[]),X.return=L,L=X;break e}else{o(L,k);break}else s(L,k);k=k.sibling}X=Id(z,L.mode,X),X.return=L,L=X}return b(L);case R:return fe=z._init,z=fe(z._payload),nt(L,k,z,X)}if(Je(z))return Ae(L,k,z,X);if(P(z)){if(fe=P(z),typeof fe!="function")throw Error(r(150));return z=fe.call(z),be(L,k,z,X)}if(typeof z.then=="function")return nt(L,k,Hc(z),X);if(z.$$typeof===$)return nt(L,k,Oc(L,z),X);Gc(L,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,k!==null&&k.tag===6?(o(L,k.sibling),X=f(k,z),X.return=L,L=X):(o(L,k),X=wd(z,L.mode,X),X.return=L,L=X),b(L)):o(L,k)}return function(L,k,z,X){try{jl=0;var fe=nt(L,k,z,X);return Za=null,fe}catch(ge){if(ge===Nl||ge===Pc)throw ge;var ke=_n(29,ge,null,L.mode);return ke.lanes=X,ke.return=L,ke}finally{}}}var eo=S_(!0),w_=S_(!1),Ln=ee(null),hi=null;function xr(n){var s=n.alternate;se(Pt,Pt.current&1),se(Ln,n),hi===null&&(s===null||Qa.current!==null||s.memoizedState!==null)&&(hi=n)}function I_(n){if(n.tag===22){if(se(Pt,Pt.current),se(Ln,n),hi===null){var s=n.alternate;s!==null&&s.memoizedState!==null&&(hi=n)}}else Nr()}function Nr(){se(Pt,Pt.current),se(Ln,Ln.current)}function Qi(n){ue(Ln),hi===n&&(hi=null),ue(Pt)}var Pt=ee(0);function $c(n){for(var s=n;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Ym(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function sm(n,s,o,u){s=n.memoizedState,o=o(u,s),o=o==null?s:v({},s,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var am={enqueueSetState:function(n,s,o){n=n._reactInternals;var u=An(),f=Ir(u);f.payload=s,o!=null&&(f.callback=o),s=Rr(n,f,u),s!==null&&(Sn(s,n,u),Dl(s,n,u))},enqueueReplaceState:function(n,s,o){n=n._reactInternals;var u=An(),f=Ir(u);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Rr(n,f,u),s!==null&&(Sn(s,n,u),Dl(s,n,u))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var o=An(),u=Ir(o);u.tag=2,s!=null&&(u.callback=s),s=Rr(n,u,o),s!==null&&(Sn(s,n,o),Dl(s,n,o))}};function R_(n,s,o,u,f,d,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,d,b):s.prototype&&s.prototype.isPureReactComponent?!Tl(o,u)||!Tl(f,d):!0}function C_(n,s,o,u){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==n&&am.enqueueReplaceState(s,s.state,null)}function na(n,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(n=n.defaultProps){o===s&&(o=v({},o));for(var f in n)o[f]===void 0&&(o[f]=n[f])}return o}var Kc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function x_(n){Kc(n)}function N_(n){console.error(n)}function O_(n){Kc(n)}function Yc(n,s){try{var o=n.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function D_(n,s,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function om(n,s,o){return o=Ir(o),o.tag=3,o.payload={element:null},o.callback=function(){Yc(n,s)},o}function P_(n){return n=Ir(n),n.tag=3,n}function k_(n,s,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var d=u.value;n.payload=function(){return f(d)},n.callback=function(){D_(s,o,u)}}var b=o.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(n.callback=function(){D_(s,o,u),typeof f!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var T=u.stack;this.componentDidCatch(u.value,{componentStack:T!==null?T:""})})}function wI(n,s,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&Rl(s,o,f,!0),o=Ln.current,o!==null){switch(o.tag){case 13:return hi===null?Om():o.alternate===null&&pt===0&&(pt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Vd?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),Pm(n,u,f)),!1;case 22:return o.flags|=65536,u===Vd?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),Pm(n,u,f)),!1}throw Error(r(435,o.tag))}return Pm(n,u,f),Om(),!1}if($e)return s=Ln.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,u!==xd&&(n=Error(r(422),{cause:u}),Il(Pn(n,o)))):(u!==xd&&(s=Error(r(423),{cause:u}),Il(Pn(s,o))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,u=Pn(u,o),f=om(n.stateNode,u,f),jd(n,f),pt!==4&&(pt=2)),!1;var d=Error(r(520),{cause:u});if(d=Pn(d,o),Kl===null?Kl=[d]:Kl.push(d),pt!==4&&(pt=2),s===null)return!0;u=Pn(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,n=f&-f,o.lanes|=n,n=om(o.stateNode,u,n),jd(o,n),!1;case 1:if(s=o.type,d=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Vr===null||!Vr.has(d))))return o.flags|=65536,f&=-f,o.lanes|=f,f=P_(f),k_(f,n,o,u),jd(o,f),!1}o=o.return}while(o!==null);return!1}var M_=Error(r(461)),jt=!1;function Gt(n,s,o,u){s.child=n===null?w_(s,null,o,u):eo(s,n.child,o,u)}function V_(n,s,o,u,f){o=o.render;var d=s.ref;if("ref"in u){var b={};for(var T in u)T!=="ref"&&(b[T]=u[T])}else b=u;return Zs(s),u=Hd(n,s,o,b,d,f),T=Gd(),n!==null&&!jt?($d(n,s,f),Xi(n,s,f)):($e&&T&&Rd(s),s.flags|=1,Gt(n,s,u,f),s.child)}function L_(n,s,o,u,f){if(n===null){var d=o.type;return typeof d=="function"&&!Sd(d)&&d.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=d,U_(n,s,d,u,f)):(n=Rc(o.type,null,u,s,s.mode,f),n.ref=s.ref,n.return=s,s.child=n)}if(d=n.child,!pm(n,f)){var b=d.memoizedProps;if(o=o.compare,o=o!==null?o:Tl,o(b,u)&&n.ref===s.ref)return Xi(n,s,f)}return s.flags|=1,n=qi(d,u),n.ref=s.ref,n.return=s,s.child=n}function U_(n,s,o,u,f){if(n!==null){var d=n.memoizedProps;if(Tl(d,u)&&n.ref===s.ref)if(jt=!1,s.pendingProps=u=d,pm(n,f))(n.flags&131072)!==0&&(jt=!0);else return s.lanes=n.lanes,Xi(n,s,f)}return lm(n,s,o,u,f)}function j_(n,s,o){var u=s.pendingProps,f=u.children,d=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((s.flags&128)!==0){if(u=d!==null?d.baseLanes|o:o,n!==null){for(f=s.child=n.child,d=0;f!==null;)d=d|f.lanes|f.childLanes,f=f.sibling;s.childLanes=d&~u}else s.childLanes=0,s.child=null;return z_(n,s,u,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},n!==null&&Dc(s,d!==null?d.cachePool:null),d!==null?Uv(s,d):Bd(),I_(s);else return s.lanes=s.childLanes=536870912,z_(n,s,d!==null?d.baseLanes|o:o,o)}else d!==null?(Dc(s,d.cachePool),Uv(s,d),Nr(),s.memoizedState=null):(n!==null&&Dc(s,null),Bd(),Nr());return Gt(n,s,f,o),s.child}function z_(n,s,o,u){var f=Md();return f=f===null?null:{parent:Dt._currentValue,pool:f},s.memoizedState={baseLanes:o,cachePool:f},n!==null&&Dc(s,null),Bd(),I_(s),n!==null&&Rl(n,s,u,!0),null}function Qc(n,s){var o=s.ref;if(o===null)n!==null&&n.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(r(284));(n===null||n.ref!==o)&&(s.flags|=4194816)}}function lm(n,s,o,u,f){return Zs(s),o=Hd(n,s,o,u,void 0,f),u=Gd(),n!==null&&!jt?($d(n,s,f),Xi(n,s,f)):($e&&u&&Rd(s),s.flags|=1,Gt(n,s,o,f),s.child)}function B_(n,s,o,u,f,d){return Zs(s),s.updateQueue=null,o=zv(s,u,o,f),jv(n),u=Gd(),n!==null&&!jt?($d(n,s,d),Xi(n,s,d)):($e&&u&&Rd(s),s.flags|=1,Gt(n,s,o,d),s.child)}function F_(n,s,o,u,f){if(Zs(s),s.stateNode===null){var d=Ha,b=o.contextType;typeof b=="object"&&b!==null&&(d=Jt(b)),d=new o(u,d),s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=am,s.stateNode=d,d._reactInternals=s,d=s.stateNode,d.props=u,d.state=s.memoizedState,d.refs={},Ld(s),b=o.contextType,d.context=typeof b=="object"&&b!==null?Jt(b):Ha,d.state=s.memoizedState,b=o.getDerivedStateFromProps,typeof b=="function"&&(sm(s,o,b,u),d.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(b=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),b!==d.state&&am.enqueueReplaceState(d,d.state,null),kl(s,u,d,f),Pl(),d.state=s.memoizedState),typeof d.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(n===null){d=s.stateNode;var T=s.memoizedProps,x=na(o,T);d.props=x;var B=d.context,Q=o.contextType;b=Ha,typeof Q=="object"&&Q!==null&&(b=Jt(Q));var W=o.getDerivedStateFromProps;Q=typeof W=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=s.pendingProps!==T,Q||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||B!==b)&&C_(s,d,u,b),wr=!1;var q=s.memoizedState;d.state=q,kl(s,u,d,f),Pl(),B=s.memoizedState,T||q!==B||wr?(typeof W=="function"&&(sm(s,o,W,u),B=s.memoizedState),(x=wr||R_(s,o,x,u,q,B,b))?(Q||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(s.flags|=4194308)):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=B),d.props=u,d.state=B,d.context=b,u=x):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{d=s.stateNode,Ud(n,s),b=s.memoizedProps,Q=na(o,b),d.props=Q,W=s.pendingProps,q=d.context,B=o.contextType,x=Ha,typeof B=="object"&&B!==null&&(x=Jt(B)),T=o.getDerivedStateFromProps,(B=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b!==W||q!==x)&&C_(s,d,u,x),wr=!1,q=s.memoizedState,d.state=q,kl(s,u,d,f),Pl();var H=s.memoizedState;b!==W||q!==H||wr||n!==null&&n.dependencies!==null&&Nc(n.dependencies)?(typeof T=="function"&&(sm(s,o,T,u),H=s.memoizedState),(Q=wr||R_(s,o,Q,u,q,H,x)||n!==null&&n.dependencies!==null&&Nc(n.dependencies))?(B||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(u,H,x),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(u,H,x)),typeof d.componentDidUpdate=="function"&&(s.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof d.componentDidUpdate!="function"||b===n.memoizedProps&&q===n.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&q===n.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=H),d.props=u,d.state=H,d.context=x,u=Q):(typeof d.componentDidUpdate!="function"||b===n.memoizedProps&&q===n.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&q===n.memoizedState||(s.flags|=1024),u=!1)}return d=u,Qc(n,s),u=(s.flags&128)!==0,d||u?(d=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:d.render(),s.flags|=1,n!==null&&u?(s.child=eo(s,n.child,null,f),s.child=eo(s,null,o,f)):Gt(n,s,o,f),s.memoizedState=d.state,n=s.child):n=Xi(n,s,f),n}function q_(n,s,o,u){return wl(),s.flags|=256,Gt(n,s,o,u),s.child}var um={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cm(n){return{baseLanes:n,cachePool:Nv()}}function hm(n,s,o){return n=n!==null?n.childLanes&~o:0,s&&(n|=Un),n}function H_(n,s,o){var u=s.pendingProps,f=!1,d=(s.flags&128)!==0,b;if((b=d)||(b=n!==null&&n.memoizedState===null?!1:(Pt.current&2)!==0),b&&(f=!0,s.flags&=-129),b=(s.flags&32)!==0,s.flags&=-33,n===null){if($e){if(f?xr(s):Nr(),$e){var T=mt,x;if(x=T){e:{for(x=T,T=ci;x.nodeType!==8;){if(!T){T=null;break e}if(x=Yn(x.nextSibling),x===null){T=null;break e}}T=x}T!==null?(s.memoizedState={dehydrated:T,treeContext:Ys!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},x=_n(18,null,null,0),x.stateNode=T,x.return=s,s.child=x,un=s,mt=null,x=!0):x=!1}x||Ws(s)}if(T=s.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Ym(T)?s.lanes=32:s.lanes=536870912,null;Qi(s)}return T=u.children,u=u.fallback,f?(Nr(),f=s.mode,T=Xc({mode:"hidden",children:T},f),u=Ks(u,f,o,null),T.return=s,u.return=s,T.sibling=u,s.child=T,f=s.child,f.memoizedState=cm(o),f.childLanes=hm(n,b,o),s.memoizedState=um,u):(xr(s),fm(s,T))}if(x=n.memoizedState,x!==null&&(T=x.dehydrated,T!==null)){if(d)s.flags&256?(xr(s),s.flags&=-257,s=dm(n,s,o)):s.memoizedState!==null?(Nr(),s.child=n.child,s.flags|=128,s=null):(Nr(),f=u.fallback,T=s.mode,u=Xc({mode:"visible",children:u.children},T),f=Ks(f,T,o,null),f.flags|=2,u.return=s,f.return=s,u.sibling=f,s.child=u,eo(s,n.child,null,o),u=s.child,u.memoizedState=cm(o),u.childLanes=hm(n,b,o),s.memoizedState=um,s=f);else if(xr(s),Ym(T)){if(b=T.nextSibling&&T.nextSibling.dataset,b)var B=b.dgst;b=B,u=Error(r(419)),u.stack="",u.digest=b,Il({value:u,source:null,stack:null}),s=dm(n,s,o)}else if(jt||Rl(n,s,o,!1),b=(o&n.childLanes)!==0,jt||b){if(b=at,b!==null&&(u=o&-o,u=(u&42)!==0?1:yr(u),u=(u&(b.suspendedLanes|o))!==0?0:u,u!==0&&u!==x.retryLane))throw x.retryLane=u,qa(n,u),Sn(b,n,u),M_;T.data==="$?"||Om(),s=dm(n,s,o)}else T.data==="$?"?(s.flags|=192,s.child=n.child,s=null):(n=x.treeContext,mt=Yn(T.nextSibling),un=s,$e=!0,Xs=null,ci=!1,n!==null&&(Mn[Vn++]=Hi,Mn[Vn++]=Gi,Mn[Vn++]=Ys,Hi=n.id,Gi=n.overflow,Ys=s),s=fm(s,u.children),s.flags|=4096);return s}return f?(Nr(),f=u.fallback,T=s.mode,x=n.child,B=x.sibling,u=qi(x,{mode:"hidden",children:u.children}),u.subtreeFlags=x.subtreeFlags&65011712,B!==null?f=qi(B,f):(f=Ks(f,T,o,null),f.flags|=2),f.return=s,u.return=s,u.sibling=f,s.child=u,u=f,f=s.child,T=n.child.memoizedState,T===null?T=cm(o):(x=T.cachePool,x!==null?(B=Dt._currentValue,x=x.parent!==B?{parent:B,pool:B}:x):x=Nv(),T={baseLanes:T.baseLanes|o,cachePool:x}),f.memoizedState=T,f.childLanes=hm(n,b,o),s.memoizedState=um,u):(xr(s),o=n.child,n=o.sibling,o=qi(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,n!==null&&(b=s.deletions,b===null?(s.deletions=[n],s.flags|=16):b.push(n)),s.child=o,s.memoizedState=null,o)}function fm(n,s){return s=Xc({mode:"visible",children:s},n.mode),s.return=n,n.child=s}function Xc(n,s){return n=_n(22,n,null,s),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function dm(n,s,o){return eo(s,n.child,null,o),n=fm(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function G_(n,s,o){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s),Od(n.return,s,o)}function mm(n,s,o,u,f){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(d.isBackwards=s,d.rendering=null,d.renderingStartTime=0,d.last=u,d.tail=o,d.tailMode=f)}function $_(n,s,o){var u=s.pendingProps,f=u.revealOrder,d=u.tail;if(Gt(n,s,u.children,o),u=Pt.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&G_(n,o,s);else if(n.tag===19)G_(n,o,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(se(Pt,u),f){case"forwards":for(o=s.child,f=null;o!==null;)n=o.alternate,n!==null&&$c(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),mm(s,!1,f,o,d);break;case"backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(n=f.alternate,n!==null&&$c(n)===null){s.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}mm(s,!0,o,null,d);break;case"together":mm(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Xi(n,s,o){if(n!==null&&(s.dependencies=n.dependencies),Mr|=s.lanes,(o&s.childLanes)===0)if(n!==null){if(Rl(n,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(n!==null&&s.child!==n.child)throw Error(r(153));if(s.child!==null){for(n=s.child,o=qi(n,n.pendingProps),s.child=o,o.return=s;n.sibling!==null;)n=n.sibling,o=o.sibling=qi(n,n.pendingProps),o.return=s;o.sibling=null}return s.child}function pm(n,s){return(n.lanes&s)!==0?!0:(n=n.dependencies,!!(n!==null&&Nc(n)))}function II(n,s,o){switch(s.tag){case 3:st(s,s.stateNode.containerInfo),Sr(s,Dt,n.memoizedState.cache),wl();break;case 27:case 5:gr(s);break;case 4:st(s,s.stateNode.containerInfo);break;case 10:Sr(s,s.type,s.memoizedProps.value);break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(xr(s),s.flags|=128,null):(o&s.child.childLanes)!==0?H_(n,s,o):(xr(s),n=Xi(n,s,o),n!==null?n.sibling:null);xr(s);break;case 19:var f=(n.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(Rl(n,s,o,!1),u=(o&s.childLanes)!==0),f){if(u)return $_(n,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),se(Pt,Pt.current),u)break;return null;case 22:case 23:return s.lanes=0,j_(n,s,o);case 24:Sr(s,Dt,n.memoizedState.cache)}return Xi(n,s,o)}function K_(n,s,o){if(n!==null)if(n.memoizedProps!==s.pendingProps)jt=!0;else{if(!pm(n,o)&&(s.flags&128)===0)return jt=!1,II(n,s,o);jt=(n.flags&131072)!==0}else jt=!1,$e&&(s.flags&1048576)!==0&&Av(s,xc,s.index);switch(s.lanes=0,s.tag){case 16:e:{n=s.pendingProps;var u=s.elementType,f=u._init;if(u=f(u._payload),s.type=u,typeof u=="function")Sd(u)?(n=na(u,n),s.tag=1,s=F_(null,s,u,n,o)):(s.tag=0,s=lm(null,s,u,n,o));else{if(u!=null){if(f=u.$$typeof,f===oe){s.tag=11,s=V_(null,s,u,n,o);break e}else if(f===M){s.tag=14,s=L_(null,s,u,n,o);break e}}throw s=ze(u)||u,Error(r(306,s,""))}}return s;case 0:return lm(n,s,s.type,s.pendingProps,o);case 1:return u=s.type,f=na(u,s.pendingProps),F_(n,s,u,f,o);case 3:e:{if(st(s,s.stateNode.containerInfo),n===null)throw Error(r(387));u=s.pendingProps;var d=s.memoizedState;f=d.element,Ud(n,s),kl(s,u,null,o);var b=s.memoizedState;if(u=b.cache,Sr(s,Dt,u),u!==d.cache&&Dd(s,[Dt],o,!0),Pl(),u=b.element,d.isDehydrated)if(d={element:u,isDehydrated:!1,cache:b.cache},s.updateQueue.baseState=d,s.memoizedState=d,s.flags&256){s=q_(n,s,u,o);break e}else if(u!==f){f=Pn(Error(r(424)),s),Il(f),s=q_(n,s,u,o);break e}else{switch(n=s.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(mt=Yn(n.firstChild),un=s,$e=!0,Xs=null,ci=!0,o=w_(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(wl(),u===f){s=Xi(n,s,o);break e}Gt(n,s,u,o)}s=s.child}return s;case 26:return Qc(n,s),n===null?(o=W0(s.type,null,s.pendingProps,null))?s.memoizedState=o:$e||(o=s.type,n=s.pendingProps,u=ch(we.current).createElement(o),u[xt]=s,u[Et]=n,Kt(u,o,n),gt(u),s.stateNode=u):s.memoizedState=W0(s.type,n.memoizedProps,s.pendingProps,n.memoizedState),null;case 27:return gr(s),n===null&&$e&&(u=s.stateNode=Y0(s.type,s.pendingProps,we.current),un=s,ci=!0,f=mt,jr(s.type)?(Qm=f,mt=Yn(u.firstChild)):mt=f),Gt(n,s,s.pendingProps.children,o),Qc(n,s),n===null&&(s.flags|=4194304),s.child;case 5:return n===null&&$e&&((f=u=mt)&&(u=eR(u,s.type,s.pendingProps,ci),u!==null?(s.stateNode=u,un=s,mt=Yn(u.firstChild),ci=!1,f=!0):f=!1),f||Ws(s)),gr(s),f=s.type,d=s.pendingProps,b=n!==null?n.memoizedProps:null,u=d.children,Gm(f,d)?u=null:b!==null&&Gm(f,b)&&(s.flags|=32),s.memoizedState!==null&&(f=Hd(n,s,vI,null,null,o),nu._currentValue=f),Qc(n,s),Gt(n,s,u,o),s.child;case 6:return n===null&&$e&&((n=o=mt)&&(o=tR(o,s.pendingProps,ci),o!==null?(s.stateNode=o,un=s,mt=null,n=!0):n=!1),n||Ws(s)),null;case 13:return H_(n,s,o);case 4:return st(s,s.stateNode.containerInfo),u=s.pendingProps,n===null?s.child=eo(s,null,u,o):Gt(n,s,u,o),s.child;case 11:return V_(n,s,s.type,s.pendingProps,o);case 7:return Gt(n,s,s.pendingProps,o),s.child;case 8:return Gt(n,s,s.pendingProps.children,o),s.child;case 12:return Gt(n,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,Sr(s,s.type,u.value),Gt(n,s,u.children,o),s.child;case 9:return f=s.type._context,u=s.pendingProps.children,Zs(s),f=Jt(f),u=u(f),s.flags|=1,Gt(n,s,u,o),s.child;case 14:return L_(n,s,s.type,s.pendingProps,o);case 15:return U_(n,s,s.type,s.pendingProps,o);case 19:return $_(n,s,o);case 31:return u=s.pendingProps,o=s.mode,u={mode:u.mode,children:u.children},n===null?(o=Xc(u,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=qi(n.child,u),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return j_(n,s,o);case 24:return Zs(s),u=Jt(Dt),n===null?(f=Md(),f===null&&(f=at,d=Pd(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=o),f=d),s.memoizedState={parent:u,cache:f},Ld(s),Sr(s,Dt,f)):((n.lanes&o)!==0&&(Ud(n,s),kl(s,null,null,o),Pl()),f=n.memoizedState,d=s.memoizedState,f.parent!==u?(f={parent:u,cache:u},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Sr(s,Dt,u)):(u=d.cache,Sr(s,Dt,u),u!==f.cache&&Dd(s,[Dt],o,!0))),Gt(n,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(r(156,s.tag))}function Wi(n){n.flags|=4}function Y_(n,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!nb(s)){if(s=Ln.current,s!==null&&((qe&4194048)===qe?hi!==null:(qe&62914560)!==qe&&(qe&536870912)===0||s!==hi))throw Ol=Vd,Ov;n.flags|=8192}}function Wc(n,s){s!==null&&(n.flags|=4),n.flags&16384&&(s=n.tag!==22?rl():536870912,n.lanes|=s,ro|=s)}function Bl(n,s){if(!$e)switch(n.tailMode){case"hidden":s=n.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function ht(n){var s=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(s)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=o,s}function RI(n,s,o){var u=s.pendingProps;switch(Cd(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(s),null;case 1:return ht(s),null;case 3:return o=s.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),Ki(Dt),Jn(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(Sl(s)?Wi(s):n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Iv())),ht(s),null;case 26:return o=s.memoizedState,n===null?(Wi(s),o!==null?(ht(s),Y_(s,o)):(ht(s),s.flags&=-16777217)):o?o!==n.memoizedState?(Wi(s),ht(s),Y_(s,o)):(ht(s),s.flags&=-16777217):(n.memoizedProps!==u&&Wi(s),ht(s),s.flags&=-16777217),null;case 27:Ni(s),o=we.current;var f=s.type;if(n!==null&&s.stateNode!=null)n.memoizedProps!==u&&Wi(s);else{if(!u){if(s.stateNode===null)throw Error(r(166));return ht(s),null}n=ve.current,Sl(s)?Sv(s):(n=Y0(f,u,o),s.stateNode=n,Wi(s))}return ht(s),null;case 5:if(Ni(s),o=s.type,n!==null&&s.stateNode!=null)n.memoizedProps!==u&&Wi(s);else{if(!u){if(s.stateNode===null)throw Error(r(166));return ht(s),null}if(n=ve.current,Sl(s))Sv(s);else{switch(f=ch(we.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}n[xt]=s,n[Et]=u;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=n;e:switch(Kt(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Wi(s)}}return ht(s),s.flags&=-16777217,null;case 6:if(n&&s.stateNode!=null)n.memoizedProps!==u&&Wi(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(r(166));if(n=we.current,Sl(s)){if(n=s.stateNode,o=s.memoizedProps,u=null,f=un,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}n[xt]=s,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||B0(n.nodeValue,o)),n||Ws(s)}else n=ch(n).createTextNode(u),n[xt]=s,s.stateNode=n}return ht(s),null;case 13:if(u=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=Sl(s),u!==null&&u.dehydrated!==null){if(n===null){if(!f)throw Error(r(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[xt]=s}else wl(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ht(s),f=!1}else f=Iv(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(Qi(s),s):(Qi(s),null)}if(Qi(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=s.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var d=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(d=u.memoizedState.cachePool.pool),d!==f&&(u.flags|=2048)}return o!==n&&o&&(s.child.flags|=8192),Wc(s,s.updateQueue),ht(s),null;case 4:return Jn(),n===null&&zm(s.stateNode.containerInfo),ht(s),null;case 10:return Ki(s.type),ht(s),null;case 19:if(ue(Pt),f=s.memoizedState,f===null)return ht(s),null;if(u=(s.flags&128)!==0,d=f.rendering,d===null)if(u)Bl(f,!1);else{if(pt!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(d=$c(n),d!==null){for(s.flags|=128,Bl(f,!1),n=d.updateQueue,s.updateQueue=n,Wc(s,n),s.subtreeFlags=0,n=o,o=s.child;o!==null;)Tv(o,n),o=o.sibling;return se(Pt,Pt.current&1|2),s.child}n=n.sibling}f.tail!==null&&Rn()>eh&&(s.flags|=128,u=!0,Bl(f,!1),s.lanes=4194304)}else{if(!u)if(n=$c(d),n!==null){if(s.flags|=128,u=!0,n=n.updateQueue,s.updateQueue=n,Wc(s,n),Bl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!d.alternate&&!$e)return ht(s),null}else 2*Rn()-f.renderingStartTime>eh&&o!==536870912&&(s.flags|=128,u=!0,Bl(f,!1),s.lanes=4194304);f.isBackwards?(d.sibling=s.child,s.child=d):(n=f.last,n!==null?n.sibling=d:s.child=d,f.last=d)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=Rn(),s.sibling=null,n=Pt.current,se(Pt,u?n&1|2:n&1),s):(ht(s),null);case 22:case 23:return Qi(s),Fd(),u=s.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(ht(s),s.subtreeFlags&6&&(s.flags|=8192)):ht(s),o=s.updateQueue,o!==null&&Wc(s,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),n!==null&&ue(ea),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Ki(Dt),ht(s),null;case 25:return null;case 30:return null}throw Error(r(156,s.tag))}function CI(n,s){switch(Cd(s),s.tag){case 1:return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return Ki(Dt),Jn(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 26:case 27:case 5:return Ni(s),null;case 13:if(Qi(s),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(r(340));wl()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return ue(Pt),null;case 4:return Jn(),null;case 10:return Ki(s.type),null;case 22:case 23:return Qi(s),Fd(),n!==null&&ue(ea),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 24:return Ki(Dt),null;case 25:return null;default:return null}}function Q_(n,s){switch(Cd(s),s.tag){case 3:Ki(Dt),Jn();break;case 26:case 27:case 5:Ni(s);break;case 4:Jn();break;case 13:Qi(s);break;case 19:ue(Pt);break;case 10:Ki(s.type);break;case 22:case 23:Qi(s),Fd(),n!==null&&ue(ea);break;case 24:Ki(Dt)}}function Fl(n,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&n)===n){u=void 0;var d=o.create,b=o.inst;u=d(),b.destroy=u}o=o.next}while(o!==f)}}catch(T){rt(s,s.return,T)}}function Or(n,s,o){try{var u=s.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var d=f.next;u=d;do{if((u.tag&n)===n){var b=u.inst,T=b.destroy;if(T!==void 0){b.destroy=void 0,f=s;var x=o,B=T;try{B()}catch(Q){rt(f,x,Q)}}}u=u.next}while(u!==d)}}catch(Q){rt(s,s.return,Q)}}function X_(n){var s=n.updateQueue;if(s!==null){var o=n.stateNode;try{Lv(s,o)}catch(u){rt(n,n.return,u)}}}function W_(n,s,o){o.props=na(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){rt(n,s,u)}}function ql(n,s){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(f){rt(n,s,f)}}function fi(n,s){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){rt(n,s,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){rt(n,s,f)}else o.current=null}function J_(n){var s=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){rt(n,n.return,f)}}function gm(n,s,o){try{var u=n.stateNode;QI(u,n.type,o,s),u[Et]=s}catch(f){rt(n,n.return,f)}}function Z_(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&jr(n.type)||n.tag===4}function ym(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Z_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&jr(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function vm(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(n),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=uh));else if(u!==4&&(u===27&&jr(n.type)&&(o=n.stateNode,s=null),n=n.child,n!==null))for(vm(n,s,o),n=n.sibling;n!==null;)vm(n,s,o),n=n.sibling}function Jc(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?o.insertBefore(n,s):o.appendChild(n);else if(u!==4&&(u===27&&jr(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(Jc(n,s,o),n=n.sibling;n!==null;)Jc(n,s,o),n=n.sibling}function e0(n){var s=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);Kt(s,u,o),s[xt]=n,s[Et]=o}catch(d){rt(n,n.return,d)}}var Ji=!1,vt=!1,_m=!1,t0=typeof WeakSet=="function"?WeakSet:Set,zt=null;function xI(n,s){if(n=n.containerInfo,qm=gh,n=fv(n),yd(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,d=u.focusNode;u=u.focusOffset;try{o.nodeType,d.nodeType}catch{o=null;break e}var b=0,T=-1,x=-1,B=0,Q=0,W=n,q=null;t:for(;;){for(var H;W!==o||f!==0&&W.nodeType!==3||(T=b+f),W!==d||u!==0&&W.nodeType!==3||(x=b+u),W.nodeType===3&&(b+=W.nodeValue.length),(H=W.firstChild)!==null;)q=W,W=H;for(;;){if(W===n)break t;if(q===o&&++B===f&&(T=b),q===d&&++Q===u&&(x=b),(H=W.nextSibling)!==null)break;W=q,q=W.parentNode}W=H}o=T===-1||x===-1?null:{start:T,end:x}}else o=null}o=o||{start:0,end:0}}else o=null;for(Hm={focusedElem:n,selectionRange:o},gh=!1,zt=s;zt!==null;)if(s=zt,n=s.child,(s.subtreeFlags&1024)!==0&&n!==null)n.return=s,zt=n;else for(;zt!==null;){switch(s=zt,d=s.alternate,n=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,o=s,f=d.memoizedProps,d=d.memoizedState,u=o.stateNode;try{var Ae=na(o.type,f,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(Ae,d),u.__reactInternalSnapshotBeforeUpdate=n}catch(be){rt(o,o.return,be)}}break;case 3:if((n&1024)!==0){if(n=s.stateNode.containerInfo,o=n.nodeType,o===9)Km(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Km(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(r(163))}if(n=s.sibling,n!==null){n.return=s.return,zt=n;break}zt=s.return}}function n0(n,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Dr(n,o),u&4&&Fl(5,o);break;case 1:if(Dr(n,o),u&4)if(n=o.stateNode,s===null)try{n.componentDidMount()}catch(b){rt(o,o.return,b)}else{var f=na(o.type,s.memoizedProps);s=s.memoizedState;try{n.componentDidUpdate(f,s,n.__reactInternalSnapshotBeforeUpdate)}catch(b){rt(o,o.return,b)}}u&64&&X_(o),u&512&&ql(o,o.return);break;case 3:if(Dr(n,o),u&64&&(n=o.updateQueue,n!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{Lv(n,s)}catch(b){rt(o,o.return,b)}}break;case 27:s===null&&u&4&&e0(o);case 26:case 5:Dr(n,o),s===null&&u&4&&J_(o),u&512&&ql(o,o.return);break;case 12:Dr(n,o);break;case 13:Dr(n,o),u&4&&s0(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=UI.bind(null,o),nR(n,o))));break;case 22:if(u=o.memoizedState!==null||Ji,!u){s=s!==null&&s.memoizedState!==null||vt,f=Ji;var d=vt;Ji=u,(vt=s)&&!d?Pr(n,o,(o.subtreeFlags&8772)!==0):Dr(n,o),Ji=f,vt=d}break;case 30:break;default:Dr(n,o)}}function i0(n){var s=n.alternate;s!==null&&(n.alternate=null,i0(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&br(s)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ut=null,hn=!1;function Zi(n,s,o){for(o=o.child;o!==null;)r0(n,s,o),o=o.sibling}function r0(n,s,o){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(dt,o)}catch{}switch(o.tag){case 26:vt||fi(o,s),Zi(n,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:vt||fi(o,s);var u=ut,f=hn;jr(o.type)&&(ut=o.stateNode,hn=!1),Zi(n,s,o),Jl(o.stateNode),ut=u,hn=f;break;case 5:vt||fi(o,s);case 6:if(u=ut,f=hn,ut=null,Zi(n,s,o),ut=u,hn=f,ut!==null)if(hn)try{(ut.nodeType===9?ut.body:ut.nodeName==="HTML"?ut.ownerDocument.body:ut).removeChild(o.stateNode)}catch(d){rt(o,s,d)}else try{ut.removeChild(o.stateNode)}catch(d){rt(o,s,d)}break;case 18:ut!==null&&(hn?(n=ut,$0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),au(n)):$0(ut,o.stateNode));break;case 4:u=ut,f=hn,ut=o.stateNode.containerInfo,hn=!0,Zi(n,s,o),ut=u,hn=f;break;case 0:case 11:case 14:case 15:vt||Or(2,o,s),vt||Or(4,o,s),Zi(n,s,o);break;case 1:vt||(fi(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&W_(o,s,u)),Zi(n,s,o);break;case 21:Zi(n,s,o);break;case 22:vt=(u=vt)||o.memoizedState!==null,Zi(n,s,o),vt=u;break;default:Zi(n,s,o)}}function s0(n,s){if(s.memoizedState===null&&(n=s.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{au(n)}catch(o){rt(s,s.return,o)}}function NI(n){switch(n.tag){case 13:case 19:var s=n.stateNode;return s===null&&(s=n.stateNode=new t0),s;case 22:return n=n.stateNode,s=n._retryCache,s===null&&(s=n._retryCache=new t0),s;default:throw Error(r(435,n.tag))}}function bm(n,s){var o=NI(n);s.forEach(function(u){var f=jI.bind(null,n,u);o.has(u)||(o.add(u),u.then(f,f))})}function bn(n,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],d=n,b=s,T=b;e:for(;T!==null;){switch(T.tag){case 27:if(jr(T.type)){ut=T.stateNode,hn=!1;break e}break;case 5:ut=T.stateNode,hn=!1;break e;case 3:case 4:ut=T.stateNode.containerInfo,hn=!0;break e}T=T.return}if(ut===null)throw Error(r(160));r0(d,b,f),ut=null,hn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)a0(s,n),s=s.sibling}var Kn=null;function a0(n,s){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:bn(s,n),En(n),u&4&&(Or(3,n,n.return),Fl(3,n),Or(5,n,n.return));break;case 1:bn(s,n),En(n),u&512&&(vt||o===null||fi(o,o.return)),u&64&&Ji&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=Kn;if(bn(s,n),En(n),u&512&&(vt||o===null||fi(o,o.return)),u&4){var d=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":d=f.getElementsByTagName("title")[0],(!d||d[Os]||d[xt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(u),f.head.insertBefore(d,f.querySelector("head > title"))),Kt(d,u,o),d[xt]=n,gt(d),u=d;break e;case"link":var b=eb("link","href",f).get(u+(o.href||""));if(b){for(var T=0;T<b.length;T++)if(d=b[T],d.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&d.getAttribute("rel")===(o.rel==null?null:o.rel)&&d.getAttribute("title")===(o.title==null?null:o.title)&&d.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){b.splice(T,1);break t}}d=f.createElement(u),Kt(d,u,o),f.head.appendChild(d);break;case"meta":if(b=eb("meta","content",f).get(u+(o.content||""))){for(T=0;T<b.length;T++)if(d=b[T],d.getAttribute("content")===(o.content==null?null:""+o.content)&&d.getAttribute("name")===(o.name==null?null:o.name)&&d.getAttribute("property")===(o.property==null?null:o.property)&&d.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&d.getAttribute("charset")===(o.charSet==null?null:o.charSet)){b.splice(T,1);break t}}d=f.createElement(u),Kt(d,u,o),f.head.appendChild(d);break;default:throw Error(r(468,u))}d[xt]=n,gt(d),u=d}n.stateNode=u}else tb(f,n.type,n.stateNode);else n.stateNode=Z0(f,u,n.memoizedProps);else d!==u?(d===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):d.count--,u===null?tb(f,n.type,n.stateNode):Z0(f,u,n.memoizedProps)):u===null&&n.stateNode!==null&&gm(n,n.memoizedProps,o.memoizedProps)}break;case 27:bn(s,n),En(n),u&512&&(vt||o===null||fi(o,o.return)),o!==null&&u&4&&gm(n,n.memoizedProps,o.memoizedProps);break;case 5:if(bn(s,n),En(n),u&512&&(vt||o===null||fi(o,o.return)),n.flags&32){f=n.stateNode;try{xn(f,"")}catch(H){rt(n,n.return,H)}}u&4&&n.stateNode!=null&&(f=n.memoizedProps,gm(n,f,o!==null?o.memoizedProps:f)),u&1024&&(_m=!0);break;case 6:if(bn(s,n),En(n),u&4){if(n.stateNode===null)throw Error(r(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(H){rt(n,n.return,H)}}break;case 3:if(dh=null,f=Kn,Kn=hh(s.containerInfo),bn(s,n),Kn=f,En(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{au(s.containerInfo)}catch(H){rt(n,n.return,H)}_m&&(_m=!1,o0(n));break;case 4:u=Kn,Kn=hh(n.stateNode.containerInfo),bn(s,n),En(n),Kn=u;break;case 12:bn(s,n),En(n);break;case 13:bn(s,n),En(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Im=Rn()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,bm(n,u)));break;case 22:f=n.memoizedState!==null;var x=o!==null&&o.memoizedState!==null,B=Ji,Q=vt;if(Ji=B||f,vt=Q||x,bn(s,n),vt=Q,Ji=B,En(n),u&8192)e:for(s=n.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||x||Ji||vt||ia(n)),o=null,s=n;;){if(s.tag===5||s.tag===26){if(o===null){x=o=s;try{if(d=x.stateNode,f)b=d.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{T=x.stateNode;var W=x.memoizedProps.style,q=W!=null&&W.hasOwnProperty("display")?W.display:null;T.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(H){rt(x,x.return,H)}}}else if(s.tag===6){if(o===null){x=s;try{x.stateNode.nodeValue=f?"":x.memoizedProps}catch(H){rt(x,x.return,H)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===n)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break e;for(;s.sibling===null;){if(s.return===null||s.return===n)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,bm(n,o))));break;case 19:bn(s,n),En(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,bm(n,u)));break;case 30:break;case 21:break;default:bn(s,n),En(n)}}function En(n){var s=n.flags;if(s&2){try{for(var o,u=n.return;u!==null;){if(Z_(u)){o=u;break}u=u.return}if(o==null)throw Error(r(160));switch(o.tag){case 27:var f=o.stateNode,d=ym(n);Jc(n,d,f);break;case 5:var b=o.stateNode;o.flags&32&&(xn(b,""),o.flags&=-33);var T=ym(n);Jc(n,T,b);break;case 3:case 4:var x=o.stateNode.containerInfo,B=ym(n);vm(n,B,x);break;default:throw Error(r(161))}}catch(Q){rt(n,n.return,Q)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function o0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var s=n;o0(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),n=n.sibling}}function Dr(n,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)n0(n,s.alternate,s),s=s.sibling}function ia(n){for(n=n.child;n!==null;){var s=n;switch(s.tag){case 0:case 11:case 14:case 15:Or(4,s,s.return),ia(s);break;case 1:fi(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&W_(s,s.return,o),ia(s);break;case 27:Jl(s.stateNode);case 26:case 5:fi(s,s.return),ia(s);break;case 22:s.memoizedState===null&&ia(s);break;case 30:ia(s);break;default:ia(s)}n=n.sibling}}function Pr(n,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,f=n,d=s,b=d.flags;switch(d.tag){case 0:case 11:case 15:Pr(f,d,o),Fl(4,d);break;case 1:if(Pr(f,d,o),u=d,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(B){rt(u,u.return,B)}if(u=d,f=u.updateQueue,f!==null){var T=u.stateNode;try{var x=f.shared.hiddenCallbacks;if(x!==null)for(f.shared.hiddenCallbacks=null,f=0;f<x.length;f++)Vv(x[f],T)}catch(B){rt(u,u.return,B)}}o&&b&64&&X_(d),ql(d,d.return);break;case 27:e0(d);case 26:case 5:Pr(f,d,o),o&&u===null&&b&4&&J_(d),ql(d,d.return);break;case 12:Pr(f,d,o);break;case 13:Pr(f,d,o),o&&b&4&&s0(f,d);break;case 22:d.memoizedState===null&&Pr(f,d,o),ql(d,d.return);break;case 30:break;default:Pr(f,d,o)}s=s.sibling}}function Em(n,s){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(n=s.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Cl(o))}function Tm(n,s){n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&Cl(n))}function di(n,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)l0(n,s,o,u),s=s.sibling}function l0(n,s,o,u){var f=s.flags;switch(s.tag){case 0:case 11:case 15:di(n,s,o,u),f&2048&&Fl(9,s);break;case 1:di(n,s,o,u);break;case 3:di(n,s,o,u),f&2048&&(n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&Cl(n)));break;case 12:if(f&2048){di(n,s,o,u),n=s.stateNode;try{var d=s.memoizedProps,b=d.id,T=d.onPostCommit;typeof T=="function"&&T(b,s.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(x){rt(s,s.return,x)}}else di(n,s,o,u);break;case 13:di(n,s,o,u);break;case 23:break;case 22:d=s.stateNode,b=s.alternate,s.memoizedState!==null?d._visibility&2?di(n,s,o,u):Hl(n,s):d._visibility&2?di(n,s,o,u):(d._visibility|=2,to(n,s,o,u,(s.subtreeFlags&10256)!==0)),f&2048&&Em(b,s);break;case 24:di(n,s,o,u),f&2048&&Tm(s.alternate,s);break;default:di(n,s,o,u)}}function to(n,s,o,u,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var d=n,b=s,T=o,x=u,B=b.flags;switch(b.tag){case 0:case 11:case 15:to(d,b,T,x,f),Fl(8,b);break;case 23:break;case 22:var Q=b.stateNode;b.memoizedState!==null?Q._visibility&2?to(d,b,T,x,f):Hl(d,b):(Q._visibility|=2,to(d,b,T,x,f)),f&&B&2048&&Em(b.alternate,b);break;case 24:to(d,b,T,x,f),f&&B&2048&&Tm(b.alternate,b);break;default:to(d,b,T,x,f)}s=s.sibling}}function Hl(n,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=n,u=s,f=u.flags;switch(u.tag){case 22:Hl(o,u),f&2048&&Em(u.alternate,u);break;case 24:Hl(o,u),f&2048&&Tm(u.alternate,u);break;default:Hl(o,u)}s=s.sibling}}var Gl=8192;function no(n){if(n.subtreeFlags&Gl)for(n=n.child;n!==null;)u0(n),n=n.sibling}function u0(n){switch(n.tag){case 26:no(n),n.flags&Gl&&n.memoizedState!==null&&pR(Kn,n.memoizedState,n.memoizedProps);break;case 5:no(n);break;case 3:case 4:var s=Kn;Kn=hh(n.stateNode.containerInfo),no(n),Kn=s;break;case 22:n.memoizedState===null&&(s=n.alternate,s!==null&&s.memoizedState!==null?(s=Gl,Gl=16777216,no(n),Gl=s):no(n));break;default:no(n)}}function c0(n){var s=n.alternate;if(s!==null&&(n=s.child,n!==null)){s.child=null;do s=n.sibling,n.sibling=null,n=s;while(n!==null)}}function $l(n){var s=n.deletions;if((n.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];zt=u,f0(u,n)}c0(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)h0(n),n=n.sibling}function h0(n){switch(n.tag){case 0:case 11:case 15:$l(n),n.flags&2048&&Or(9,n,n.return);break;case 3:$l(n);break;case 12:$l(n);break;case 22:var s=n.stateNode;n.memoizedState!==null&&s._visibility&2&&(n.return===null||n.return.tag!==13)?(s._visibility&=-3,Zc(n)):$l(n);break;default:$l(n)}}function Zc(n){var s=n.deletions;if((n.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];zt=u,f0(u,n)}c0(n)}for(n=n.child;n!==null;){switch(s=n,s.tag){case 0:case 11:case 15:Or(8,s,s.return),Zc(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,Zc(s));break;default:Zc(s)}n=n.sibling}}function f0(n,s){for(;zt!==null;){var o=zt;switch(o.tag){case 0:case 11:case 15:Or(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Cl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,zt=u;else e:for(o=n;zt!==null;){u=zt;var f=u.sibling,d=u.return;if(i0(u),u===o){zt=null;break e}if(f!==null){f.return=d,zt=f;break e}zt=d}}}var OI={getCacheForType:function(n){var s=Jt(Dt),o=s.data.get(n);return o===void 0&&(o=n(),s.data.set(n,o)),o}},DI=typeof WeakMap=="function"?WeakMap:Map,Xe=0,at=null,Ve=null,qe=0,We=0,Tn=null,kr=!1,io=!1,Am=!1,er=0,pt=0,Mr=0,ra=0,Sm=0,Un=0,ro=0,Kl=null,fn=null,wm=!1,Im=0,eh=1/0,th=null,Vr=null,$t=0,Lr=null,so=null,ao=0,Rm=0,Cm=null,d0=null,Yl=0,xm=null;function An(){if((Xe&2)!==0&&qe!==0)return qe&-qe;if(K.T!==null){var n=Ka;return n!==0?n:Vm()}return vr()}function m0(){Un===0&&(Un=(qe&536870912)===0||$e?il():536870912);var n=Ln.current;return n!==null&&(n.flags|=32),Un}function Sn(n,s,o){(n===at&&(We===2||We===9)||n.cancelPendingCommit!==null)&&(oo(n,0),Ur(n,qe,Un,!1)),Di(n,o),((Xe&2)===0||n!==at)&&(n===at&&((Xe&2)===0&&(ra|=o),pt===4&&Ur(n,qe,Un,!1)),mi(n))}function p0(n,s,o){if((Xe&6)!==0)throw Error(r(327));var u=!o&&(s&124)===0&&(s&n.expiredLanes)===0||Ns(n,s),f=u?MI(n,s):Dm(n,s,!0),d=u;do{if(f===0){io&&!u&&Ur(n,s,0,!1);break}else{if(o=n.current.alternate,d&&!PI(o)){f=Dm(n,s,!1),d=!1;continue}if(f===2){if(d=s,n.errorRecoveryDisabledLanes&d)var b=0;else b=n.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){s=b;e:{var T=n;f=Kl;var x=T.current.memoizedState.isDehydrated;if(x&&(oo(T,b).flags|=256),b=Dm(T,b,!1),b!==2){if(Am&&!x){T.errorRecoveryDisabledLanes|=d,ra|=d,f=4;break e}d=fn,fn=f,d!==null&&(fn===null?fn=d:fn.push.apply(fn,d))}f=b}if(d=!1,f!==2)continue}}if(f===1){oo(n,0),Ur(n,s,0,!0);break}e:{switch(u=n,d=f,d){case 0:case 1:throw Error(r(345));case 4:if((s&4194048)!==s)break;case 6:Ur(u,s,Un,!kr);break e;case 2:fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((s&62914560)===s&&(f=Im+300-Rn(),10<f)){if(Ur(u,s,Un,!kr),Sa(u,0,!0)!==0)break e;u.timeoutHandle=H0(g0.bind(null,u,o,fn,th,wm,s,Un,ra,ro,kr,d,2,-0,0),f);break e}g0(u,o,fn,th,wm,s,Un,ra,ro,kr,d,0,-0,0)}}break}while(!0);mi(n)}function g0(n,s,o,u,f,d,b,T,x,B,Q,W,q,H){if(n.timeoutHandle=-1,W=s.subtreeFlags,(W&8192||(W&16785408)===16785408)&&(tu={stylesheets:null,count:0,unsuspend:mR},u0(s),W=gR(),W!==null)){n.cancelPendingCommit=W(A0.bind(null,n,s,d,o,u,f,b,T,x,Q,1,q,H)),Ur(n,d,b,!B);return}A0(n,s,d,o,u,f,b,T,x)}function PI(n){for(var s=n;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],d=f.getSnapshot;f=f.value;try{if(!vn(d(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ur(n,s,o,u){s&=~Sm,s&=~ra,n.suspendedLanes|=s,n.pingedLanes&=~s,u&&(n.warmLanes|=s),u=n.expirationTimes;for(var f=s;0<f;){var d=31-Wt(f),b=1<<d;u[d]=-1,f&=~b}o!==0&&Zn(n,o,s)}function nh(){return(Xe&6)===0?(Ql(0),!1):!0}function Nm(){if(Ve!==null){if(We===0)var n=Ve.return;else n=Ve,$i=Js=null,Kd(n),Za=null,jl=0,n=Ve;for(;n!==null;)Q_(n.alternate,n),n=n.return;Ve=null}}function oo(n,s){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,WI(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Nm(),at=n,Ve=o=qi(n.current,null),qe=s,We=0,Tn=null,kr=!1,io=Ns(n,s),Am=!1,ro=Un=Sm=ra=Mr=pt=0,fn=Kl=null,wm=!1,(s&8)!==0&&(s|=s&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=s;0<u;){var f=31-Wt(u),d=1<<f;s|=n[f],u&=~d}return er=s,Sc(),o}function y0(n,s){Ne=null,K.H=qc,s===Nl||s===Pc?(s=kv(),We=3):s===Ov?(s=kv(),We=4):We=s===M_?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Tn=s,Ve===null&&(pt=1,Yc(n,Pn(s,n.current)))}function v0(){var n=K.H;return K.H=qc,n===null?qc:n}function _0(){var n=K.A;return K.A=OI,n}function Om(){pt=4,kr||(qe&4194048)!==qe&&Ln.current!==null||(io=!0),(Mr&134217727)===0&&(ra&134217727)===0||at===null||Ur(at,qe,Un,!1)}function Dm(n,s,o){var u=Xe;Xe|=2;var f=v0(),d=_0();(at!==n||qe!==s)&&(th=null,oo(n,s)),s=!1;var b=pt;e:do try{if(We!==0&&Ve!==null){var T=Ve,x=Tn;switch(We){case 8:Nm(),b=6;break e;case 3:case 2:case 9:case 6:Ln.current===null&&(s=!0);var B=We;if(We=0,Tn=null,lo(n,T,x,B),o&&io){b=0;break e}break;default:B=We,We=0,Tn=null,lo(n,T,x,B)}}kI(),b=pt;break}catch(Q){y0(n,Q)}while(!0);return s&&n.shellSuspendCounter++,$i=Js=null,Xe=u,K.H=f,K.A=d,Ve===null&&(at=null,qe=0,Sc()),b}function kI(){for(;Ve!==null;)b0(Ve)}function MI(n,s){var o=Xe;Xe|=2;var u=v0(),f=_0();at!==n||qe!==s?(th=null,eh=Rn()+500,oo(n,s)):io=Ns(n,s);e:do try{if(We!==0&&Ve!==null){s=Ve;var d=Tn;t:switch(We){case 1:We=0,Tn=null,lo(n,s,d,1);break;case 2:case 9:if(Dv(d)){We=0,Tn=null,E0(s);break}s=function(){We!==2&&We!==9||at!==n||(We=7),mi(n)},d.then(s,s);break e;case 3:We=7;break e;case 4:We=5;break e;case 7:Dv(d)?(We=0,Tn=null,E0(s)):(We=0,Tn=null,lo(n,s,d,7));break;case 5:var b=null;switch(Ve.tag){case 26:b=Ve.memoizedState;case 5:case 27:var T=Ve;if(!b||nb(b)){We=0,Tn=null;var x=T.sibling;if(x!==null)Ve=x;else{var B=T.return;B!==null?(Ve=B,ih(B)):Ve=null}break t}}We=0,Tn=null,lo(n,s,d,5);break;case 6:We=0,Tn=null,lo(n,s,d,6);break;case 8:Nm(),pt=6;break e;default:throw Error(r(462))}}VI();break}catch(Q){y0(n,Q)}while(!0);return $i=Js=null,K.H=u,K.A=f,Xe=o,Ve!==null?0:(at=null,qe=0,Sc(),pt)}function VI(){for(;Ve!==null&&!Zo();)b0(Ve)}function b0(n){var s=K_(n.alternate,n,er);n.memoizedProps=n.pendingProps,s===null?ih(n):Ve=s}function E0(n){var s=n,o=s.alternate;switch(s.tag){case 15:case 0:s=B_(o,s,s.pendingProps,s.type,void 0,qe);break;case 11:s=B_(o,s,s.pendingProps,s.type.render,s.ref,qe);break;case 5:Kd(s);default:Q_(o,s),s=Ve=Tv(s,er),s=K_(o,s,er)}n.memoizedProps=n.pendingProps,s===null?ih(n):Ve=s}function lo(n,s,o,u){$i=Js=null,Kd(s),Za=null,jl=0;var f=s.return;try{if(wI(n,f,s,o,qe)){pt=1,Yc(n,Pn(o,n.current)),Ve=null;return}}catch(d){if(f!==null)throw Ve=f,d;pt=1,Yc(n,Pn(o,n.current)),Ve=null;return}s.flags&32768?($e||u===1?n=!0:io||(qe&536870912)!==0?n=!1:(kr=n=!0,(u===2||u===9||u===3||u===6)&&(u=Ln.current,u!==null&&u.tag===13&&(u.flags|=16384))),T0(s,n)):ih(s)}function ih(n){var s=n;do{if((s.flags&32768)!==0){T0(s,kr);return}n=s.return;var o=RI(s.alternate,s,er);if(o!==null){Ve=o;return}if(s=s.sibling,s!==null){Ve=s;return}Ve=s=n}while(s!==null);pt===0&&(pt=5)}function T0(n,s){do{var o=CI(n.alternate,n);if(o!==null){o.flags&=32767,Ve=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(n=n.sibling,n!==null)){Ve=n;return}Ve=n=o}while(n!==null);pt=6,Ve=null}function A0(n,s,o,u,f,d,b,T,x){n.cancelPendingCommit=null;do rh();while($t!==0);if((Xe&6)!==0)throw Error(r(327));if(s!==null){if(s===n.current)throw Error(r(177));if(d=s.lanes|s.childLanes,d|=Td,sl(n,o,d,b,T,x),n===at&&(Ve=at=null,qe=0),so=s,Lr=n,ao=o,Rm=d,Cm=f,d0=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,zI(Is,function(){return C0(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=K.T,K.T=null,f=re.p,re.p=2,b=Xe,Xe|=4;try{xI(n,s,o)}finally{Xe=b,re.p=f,K.T=u}}$t=1,S0(),w0(),I0()}}function S0(){if($t===1){$t=0;var n=Lr,s=so,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=K.T,K.T=null;var u=re.p;re.p=2;var f=Xe;Xe|=4;try{a0(s,n);var d=Hm,b=fv(n.containerInfo),T=d.focusedElem,x=d.selectionRange;if(b!==T&&T&&T.ownerDocument&&hv(T.ownerDocument.documentElement,T)){if(x!==null&&yd(T)){var B=x.start,Q=x.end;if(Q===void 0&&(Q=B),"selectionStart"in T)T.selectionStart=B,T.selectionEnd=Math.min(Q,T.value.length);else{var W=T.ownerDocument||document,q=W&&W.defaultView||window;if(q.getSelection){var H=q.getSelection(),Ae=T.textContent.length,be=Math.min(x.start,Ae),nt=x.end===void 0?be:Math.min(x.end,Ae);!H.extend&&be>nt&&(b=nt,nt=be,be=b);var L=cv(T,be),k=cv(T,nt);if(L&&k&&(H.rangeCount!==1||H.anchorNode!==L.node||H.anchorOffset!==L.offset||H.focusNode!==k.node||H.focusOffset!==k.offset)){var z=W.createRange();z.setStart(L.node,L.offset),H.removeAllRanges(),be>nt?(H.addRange(z),H.extend(k.node,k.offset)):(z.setEnd(k.node,k.offset),H.addRange(z))}}}}for(W=[],H=T;H=H.parentNode;)H.nodeType===1&&W.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<W.length;T++){var X=W[T];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}gh=!!qm,Hm=qm=null}finally{Xe=f,re.p=u,K.T=o}}n.current=s,$t=2}}function w0(){if($t===2){$t=0;var n=Lr,s=so,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=K.T,K.T=null;var u=re.p;re.p=2;var f=Xe;Xe|=4;try{n0(n,s.alternate,s)}finally{Xe=f,re.p=u,K.T=o}}$t=3}}function I0(){if($t===4||$t===3){$t=0,Zu();var n=Lr,s=so,o=ao,u=d0;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?$t=5:($t=0,so=Lr=null,R0(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Vr=null),wa(o),s=s.stateNode,Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(dt,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=K.T,f=re.p,re.p=2,K.T=null;try{for(var d=n.onRecoverableError,b=0;b<u.length;b++){var T=u[b];d(T.value,{componentStack:T.stack})}}finally{K.T=s,re.p=f}}(ao&3)!==0&&rh(),mi(n),f=n.pendingLanes,(o&4194090)!==0&&(f&42)!==0?n===xm?Yl++:(Yl=0,xm=n):Yl=0,Ql(0)}}function R0(n,s){(n.pooledCacheLanes&=s)===0&&(s=n.pooledCache,s!=null&&(n.pooledCache=null,Cl(s)))}function rh(n){return S0(),w0(),I0(),C0()}function C0(){if($t!==5)return!1;var n=Lr,s=Rm;Rm=0;var o=wa(ao),u=K.T,f=re.p;try{re.p=32>o?32:o,K.T=null,o=Cm,Cm=null;var d=Lr,b=ao;if($t=0,so=Lr=null,ao=0,(Xe&6)!==0)throw Error(r(331));var T=Xe;if(Xe|=4,h0(d.current),l0(d,d.current,b,o),Xe=T,Ql(0,!1),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(dt,d)}catch{}return!0}finally{re.p=f,K.T=u,R0(n,s)}}function x0(n,s,o){s=Pn(o,s),s=om(n.stateNode,s,2),n=Rr(n,s,2),n!==null&&(Di(n,2),mi(n))}function rt(n,s,o){if(n.tag===3)x0(n,n,o);else for(;s!==null;){if(s.tag===3){x0(s,n,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Vr===null||!Vr.has(u))){n=Pn(o,n),o=P_(2),u=Rr(s,o,2),u!==null&&(k_(o,u,s,n),Di(u,2),mi(u));break}}s=s.return}}function Pm(n,s,o){var u=n.pingCache;if(u===null){u=n.pingCache=new DI;var f=new Set;u.set(s,f)}else f=u.get(s),f===void 0&&(f=new Set,u.set(s,f));f.has(o)||(Am=!0,f.add(o),n=LI.bind(null,n,s,o),s.then(n,n))}function LI(n,s,o){var u=n.pingCache;u!==null&&u.delete(s),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,at===n&&(qe&o)===o&&(pt===4||pt===3&&(qe&62914560)===qe&&300>Rn()-Im?(Xe&2)===0&&oo(n,0):Sm|=o,ro===qe&&(ro=0)),mi(n)}function N0(n,s){s===0&&(s=rl()),n=qa(n,s),n!==null&&(Di(n,s),mi(n))}function UI(n){var s=n.memoizedState,o=0;s!==null&&(o=s.retryLane),N0(n,o)}function jI(n,s){var o=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(r(314))}u!==null&&u.delete(s),N0(n,o)}function zI(n,s){return Ss(n,s)}var sh=null,uo=null,km=!1,ah=!1,Mm=!1,sa=0;function mi(n){n!==uo&&n.next===null&&(uo===null?sh=uo=n:uo=uo.next=n),ah=!0,km||(km=!0,FI())}function Ql(n,s){if(!Mm&&ah){Mm=!0;do for(var o=!1,u=sh;u!==null;){if(n!==0){var f=u.pendingLanes;if(f===0)var d=0;else{var b=u.suspendedLanes,T=u.pingedLanes;d=(1<<31-Wt(42|n)+1)-1,d&=f&~(b&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(o=!0,k0(u,d))}else d=qe,d=Sa(u,u===at?d:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(d&3)===0||Ns(u,d)||(o=!0,k0(u,d));u=u.next}while(o);Mm=!1}}function BI(){O0()}function O0(){ah=km=!1;var n=0;sa!==0&&(XI()&&(n=sa),sa=0);for(var s=Rn(),o=null,u=sh;u!==null;){var f=u.next,d=D0(u,s);d===0?(u.next=null,o===null?sh=f:o.next=f,f===null&&(uo=o)):(o=u,(n!==0||(d&3)!==0)&&(ah=!0)),u=f}Ql(n)}function D0(n,s){for(var o=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var b=31-Wt(d),T=1<<b,x=f[b];x===-1?((T&o)===0||(T&u)!==0)&&(f[b]=nl(T,s)):x<=s&&(n.expiredLanes|=T),d&=~T}if(s=at,o=qe,o=Sa(n,n===s?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===s&&(We===2||We===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&ws(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||Ns(n,o)){if(s=o&-o,s===n.callbackPriority)return s;switch(u!==null&&ws(u),wa(o)){case 2:case 8:o=Ta;break;case 32:o=Is;break;case 268435456:o=Aa;break;default:o=Is}return u=P0.bind(null,n),o=Ss(o,u),n.callbackPriority=s,n.callbackNode=o,s}return u!==null&&u!==null&&ws(u),n.callbackPriority=2,n.callbackNode=null,2}function P0(n,s){if($t!==0&&$t!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(rh()&&n.callbackNode!==o)return null;var u=qe;return u=Sa(n,n===at?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(p0(n,u,s),D0(n,Rn()),n.callbackNode!=null&&n.callbackNode===o?P0.bind(null,n):null)}function k0(n,s){if(rh())return null;p0(n,s,!0)}function FI(){JI(function(){(Xe&6)!==0?Ss(el,BI):O0()})}function Vm(){return sa===0&&(sa=il()),sa}function M0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Oa(""+n)}function V0(n,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,n.id&&o.setAttribute("form",n.id),s.parentNode.insertBefore(o,s),n=new FormData(n),o.parentNode.removeChild(o),n}function qI(n,s,o,u,f){if(s==="submit"&&o&&o.stateNode===f){var d=M0((f[Et]||null).action),b=u.submitter;b&&(s=(s=b[Et]||null)?M0(s.formAction):b.getAttribute("formAction"),s!==null&&(d=s,b=null));var T=new Da("action","action",null,u,f);n.push({event:T,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(sa!==0){var x=b?V0(f,b):new FormData(f);nm(o,{pending:!0,data:x,method:f.method,action:d},null,x)}}else typeof d=="function"&&(T.preventDefault(),x=b?V0(f,b):new FormData(f),nm(o,{pending:!0,data:x,method:f.method,action:d},d,x))},currentTarget:f}]})}}for(var Lm=0;Lm<Ed.length;Lm++){var Um=Ed[Lm],HI=Um.toLowerCase(),GI=Um[0].toUpperCase()+Um.slice(1);$n(HI,"on"+GI)}$n(pv,"onAnimationEnd"),$n(gv,"onAnimationIteration"),$n(yv,"onAnimationStart"),$n("dblclick","onDoubleClick"),$n("focusin","onFocus"),$n("focusout","onBlur"),$n(lI,"onTransitionRun"),$n(uI,"onTransitionStart"),$n(cI,"onTransitionCancel"),$n(vv,"onTransitionEnd"),ki("onMouseEnter",["mouseout","mouseover"]),ki("onMouseLeave",["mouseout","mouseover"]),ki("onPointerEnter",["pointerout","pointerover"]),ki("onPointerLeave",["pointerout","pointerover"]),Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$I=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xl));function L0(n,s){s=(s&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],f=u.event;u=u.listeners;e:{var d=void 0;if(s)for(var b=u.length-1;0<=b;b--){var T=u[b],x=T.instance,B=T.currentTarget;if(T=T.listener,x!==d&&f.isPropagationStopped())break e;d=T,f.currentTarget=B;try{d(f)}catch(Q){Kc(Q)}f.currentTarget=null,d=x}else for(b=0;b<u.length;b++){if(T=u[b],x=T.instance,B=T.currentTarget,T=T.listener,x!==d&&f.isPropagationStopped())break e;d=T,f.currentTarget=B;try{d(f)}catch(Q){Kc(Q)}f.currentTarget=null,d=x}}}}function Le(n,s){var o=s[ol];o===void 0&&(o=s[ol]=new Set);var u=n+"__bubble";o.has(u)||(U0(s,n,2,!1),o.add(u))}function jm(n,s,o){var u=0;s&&(u|=4),U0(o,n,u,s)}var oh="_reactListening"+Math.random().toString(36).slice(2);function zm(n){if(!n[oh]){n[oh]=!0,ll.forEach(function(o){o!=="selectionchange"&&($I.has(o)||jm(o,!1,n),jm(o,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[oh]||(s[oh]=!0,jm("selectionchange",!1,s))}}function U0(n,s,o,u){switch(lb(s)){case 2:var f=_R;break;case 8:f=bR;break;default:f=ep}o=f.bind(null,s,o,n),f=void 0,!On||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(s,o,{capture:!0,passive:f}):n.addEventListener(s,o,!0):f!==void 0?n.addEventListener(s,o,{passive:f}):n.addEventListener(s,o,!1)}function Bm(n,s,o,u,f){var d=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var T=u.stateNode.containerInfo;if(T===f)break;if(b===4)for(b=u.return;b!==null;){var x=b.tag;if((x===3||x===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;T!==null;){if(b=Pi(T),b===null)return;if(x=b.tag,x===5||x===6||x===26||x===27){u=d=b;continue e}T=T.parentNode}}u=u.return}uc(function(){var B=d,Q=Nn(o),W=[];e:{var q=_v.get(n);if(q!==void 0){var H=Da,Ae=n;switch(n){case"keypress":if(si(o)===0)break e;case"keydown":case"keyup":H=Ua;break;case"focusin":Ae="focus",H=Ma;break;case"focusout":Ae="blur",H=Ma;break;case"beforeblur":case"afterblur":H=Ma;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Dn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=yc;break;case pv:case gv:case yv:H=Va;break;case vv:H=_c;break;case"scroll":case"scrollend":H=cc;break;case"wheel":H=ja;break;case"copy":case"cut":case"paste":H=La;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=bl;break;case"toggle":case"beforetoggle":H=Ec}var be=(s&4)!==0,nt=!be&&(n==="scroll"||n==="scrollend"),L=be?q!==null?q+"Capture":null:q;be=[];for(var k=B,z;k!==null;){var X=k;if(z=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||z===null||L===null||(X=Us(k,L),X!=null&&be.push(Wl(k,X,z))),nt)break;k=k.return}0<be.length&&(q=new H(q,Ae,null,o,Q),W.push({event:q,listeners:be}))}}if((s&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",H=n==="mouseout"||n==="pointerout",q&&o!==Li&&(Ae=o.relatedTarget||o.fromElement)&&(Pi(Ae)||Ae[Cn]))break e;if((H||q)&&(q=Q.window===Q?Q:(q=Q.ownerDocument)?q.defaultView||q.parentWindow:window,H?(Ae=o.relatedTarget||o.toElement,H=B,Ae=Ae?Pi(Ae):null,Ae!==null&&(nt=l(Ae),be=Ae.tag,Ae!==nt||be!==5&&be!==27&&be!==6)&&(Ae=null)):(H=null,Ae=B),H!==Ae)){if(be=Dn,X="onMouseLeave",L="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(be=bl,X="onPointerLeave",L="onPointerEnter",k="pointer"),nt=H==null?q:ti(H),z=Ae==null?q:ti(Ae),q=new be(X,k+"leave",H,o,Q),q.target=nt,q.relatedTarget=z,X=null,Pi(Q)===B&&(be=new be(L,k+"enter",Ae,o,Q),be.target=z,be.relatedTarget=nt,X=be),nt=X,H&&Ae)t:{for(be=H,L=Ae,k=0,z=be;z;z=co(z))k++;for(z=0,X=L;X;X=co(X))z++;for(;0<k-z;)be=co(be),k--;for(;0<z-k;)L=co(L),z--;for(;k--;){if(be===L||L!==null&&be===L.alternate)break t;be=co(be),L=co(L)}be=null}else be=null;H!==null&&j0(W,q,H,be,!1),Ae!==null&&nt!==null&&j0(W,nt,Ae,be,!0)}}e:{if(q=B?ti(B):window,H=q.nodeName&&q.nodeName.toLowerCase(),H==="select"||H==="input"&&q.type==="file")var fe=rv;else if(Ot(q))if(sv)fe=sI;else{fe=iI;var ke=nI}else H=q.nodeName,!H||H.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?B&&dl(B.elementType)&&(fe=rv):fe=rI;if(fe&&(fe=fe(n,B))){Fi(W,fe,o,Q);break e}ke&&ke(n,q,B),n==="focusout"&&B&&q.type==="number"&&B.memoizedProps.value!=null&&Tr(q,"number",q.value)}switch(ke=B?ti(B):window,n){case"focusin":(Ot(ke)||ke.contentEditable==="true")&&(za=ke,vd=B,Al=null);break;case"focusout":Al=vd=za=null;break;case"mousedown":_d=!0;break;case"contextmenu":case"mouseup":case"dragend":_d=!1,dv(W,o,Q);break;case"selectionchange":if(oI)break;case"keydown":case"keyup":dv(W,o,Q)}var ge;if(li)e:{switch(n){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Be?G(n,o)&&(Ee="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(Ee="onCompositionStart");Ee&&(_&&o.locale!=="ko"&&(Be||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Be&&(ge=pl()):(ri=Q,Ar="value"in ri?ri.value:ri.textContent,Be=!0)),ke=lh(B,Ee),0<ke.length&&(Ee=new vl(Ee,n,null,o,Q),W.push({event:Ee,listeners:ke}),ge?Ee.data=ge:(ge=ce(o),ge!==null&&(Ee.data=ge)))),(ge=y?Nt(n,o):Fe(n,o))&&(Ee=lh(B,"onBeforeInput"),0<Ee.length&&(ke=new vl("onBeforeInput","beforeinput",null,o,Q),W.push({event:ke,listeners:Ee}),ke.data=ge)),qI(W,n,B,o,Q)}L0(W,s)})}function Wl(n,s,o){return{instance:n,listener:s,currentTarget:o}}function lh(n,s){for(var o=s+"Capture",u=[];n!==null;){var f=n,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Us(n,o),f!=null&&u.unshift(Wl(n,f,d)),f=Us(n,s),f!=null&&u.push(Wl(n,f,d))),n.tag===3)return u;n=n.return}return[]}function co(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function j0(n,s,o,u,f){for(var d=s._reactName,b=[];o!==null&&o!==u;){var T=o,x=T.alternate,B=T.stateNode;if(T=T.tag,x!==null&&x===u)break;T!==5&&T!==26&&T!==27||B===null||(x=B,f?(B=Us(o,d),B!=null&&b.unshift(Wl(o,B,x))):f||(B=Us(o,d),B!=null&&b.push(Wl(o,B,x)))),o=o.return}b.length!==0&&n.push({event:s,listeners:b})}var KI=/\r\n?/g,YI=/\u0000|\uFFFD/g;function z0(n){return(typeof n=="string"?n:""+n).replace(KI,`
`).replace(YI,"")}function B0(n,s){return s=z0(s),z0(n)===s}function uh(){}function tt(n,s,o,u,f,d){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||xn(n,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&xn(n,""+u);break;case"className":ni(n,"class",u);break;case"tabIndex":ni(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":ni(n,o,u);break;case"style":fl(n,u,d);break;case"data":if(s!=="object"){ni(n,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Oa(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(o==="formAction"?(s!=="input"&&tt(n,s,"name",f.name,f,null),tt(n,s,"formEncType",f.formEncType,f,null),tt(n,s,"formMethod",f.formMethod,f,null),tt(n,s,"formTarget",f.formTarget,f,null)):(tt(n,s,"encType",f.encType,f,null),tt(n,s,"method",f.method,f,null),tt(n,s,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Oa(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=uh);break;case"onScroll":u!=null&&Le("scroll",n);break;case"onScrollEnd":u!=null&&Le("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(r(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=Oa(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":Le("beforetoggle",n),Le("toggle",n),Er(n,"popover",u);break;case"xlinkActuate":qt(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":qt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":qt(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":qt(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":qt(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":qt(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":qt(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":qt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":qt(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Er(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=hd.get(o)||o,Er(n,o,u))}}function Fm(n,s,o,u,f,d){switch(o){case"style":fl(n,u,d);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(r(60));n.innerHTML=o}}break;case"children":typeof u=="string"?xn(n,u):(typeof u=="number"||typeof u=="bigint")&&xn(n,""+u);break;case"onScroll":u!=null&&Le("scroll",n);break;case"onScrollEnd":u!=null&&Le("scrollend",n);break;case"onClick":u!=null&&(n.onclick=uh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ia.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),d=n[Et]||null,d=d!=null?d[o]:null,typeof d=="function"&&n.removeEventListener(s,d,f),typeof u=="function")){typeof d!="function"&&d!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(s,u,f);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):Er(n,o,u)}}}function Kt(n,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Le("error",n),Le("load",n);var u=!1,f=!1,d;for(d in o)if(o.hasOwnProperty(d)){var b=o[d];if(b!=null)switch(d){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:tt(n,s,d,b,o,null)}}f&&tt(n,s,"srcSet",o.srcSet,o,null),u&&tt(n,s,"src",o.src,o,null);return;case"input":Le("invalid",n);var T=d=b=f=null,x=null,B=null;for(u in o)if(o.hasOwnProperty(u)){var Q=o[u];if(Q!=null)switch(u){case"name":f=Q;break;case"type":b=Q;break;case"checked":x=Q;break;case"defaultChecked":B=Q;break;case"value":d=Q;break;case"defaultValue":T=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(r(137,s));break;default:tt(n,s,u,Q,o,null)}}Ms(n,d,T,x,B,b,f,!1),Na(n);return;case"select":Le("invalid",n),u=b=d=null;for(f in o)if(o.hasOwnProperty(f)&&(T=o[f],T!=null))switch(f){case"value":d=T;break;case"defaultValue":b=T;break;case"multiple":u=T;default:tt(n,s,f,T,o,null)}s=d,o=b,n.multiple=!!u,s!=null?Vi(n,!!u,s,!1):o!=null&&Vi(n,!!u,o,!0);return;case"textarea":Le("invalid",n),d=f=u=null;for(b in o)if(o.hasOwnProperty(b)&&(T=o[b],T!=null))switch(b){case"value":u=T;break;case"defaultValue":f=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:tt(n,s,b,T,o,null)}Vs(n,u,f,d),Na(n);return;case"option":for(x in o)if(o.hasOwnProperty(x)&&(u=o[x],u!=null))switch(x){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:tt(n,s,x,u,o,null)}return;case"dialog":Le("beforetoggle",n),Le("toggle",n),Le("cancel",n),Le("close",n);break;case"iframe":case"object":Le("load",n);break;case"video":case"audio":for(u=0;u<Xl.length;u++)Le(Xl[u],n);break;case"image":Le("error",n),Le("load",n);break;case"details":Le("toggle",n);break;case"embed":case"source":case"link":Le("error",n),Le("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in o)if(o.hasOwnProperty(B)&&(u=o[B],u!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:tt(n,s,B,u,o,null)}return;default:if(dl(s)){for(Q in o)o.hasOwnProperty(Q)&&(u=o[Q],u!==void 0&&Fm(n,s,Q,u,o,void 0));return}}for(T in o)o.hasOwnProperty(T)&&(u=o[T],u!=null&&tt(n,s,T,u,o,null))}function QI(n,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,b=null,T=null,x=null,B=null,Q=null;for(H in o){var W=o[H];if(o.hasOwnProperty(H)&&W!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":x=W;default:u.hasOwnProperty(H)||tt(n,s,H,null,u,W)}}for(var q in u){var H=u[q];if(W=o[q],u.hasOwnProperty(q)&&(H!=null||W!=null))switch(q){case"type":d=H;break;case"name":f=H;break;case"checked":B=H;break;case"defaultChecked":Q=H;break;case"value":b=H;break;case"defaultValue":T=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(r(137,s));break;default:H!==W&&tt(n,s,q,H,u,W)}}yn(n,b,T,x,B,Q,d,f);return;case"select":H=b=T=q=null;for(d in o)if(x=o[d],o.hasOwnProperty(d)&&x!=null)switch(d){case"value":break;case"multiple":H=x;default:u.hasOwnProperty(d)||tt(n,s,d,null,u,x)}for(f in u)if(d=u[f],x=o[f],u.hasOwnProperty(f)&&(d!=null||x!=null))switch(f){case"value":q=d;break;case"defaultValue":T=d;break;case"multiple":b=d;default:d!==x&&tt(n,s,f,d,u,x)}s=T,o=b,u=H,q!=null?Vi(n,!!o,q,!1):!!u!=!!o&&(s!=null?Vi(n,!!o,s,!0):Vi(n,!!o,o?[]:"",!1));return;case"textarea":H=q=null;for(T in o)if(f=o[T],o.hasOwnProperty(T)&&f!=null&&!u.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:tt(n,s,T,null,u,f)}for(b in u)if(f=u[b],d=o[b],u.hasOwnProperty(b)&&(f!=null||d!=null))switch(b){case"value":q=f;break;case"defaultValue":H=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==d&&tt(n,s,b,f,u,d)}Ze(n,q,H);return;case"option":for(var Ae in o)if(q=o[Ae],o.hasOwnProperty(Ae)&&q!=null&&!u.hasOwnProperty(Ae))switch(Ae){case"selected":n.selected=!1;break;default:tt(n,s,Ae,null,u,q)}for(x in u)if(q=u[x],H=o[x],u.hasOwnProperty(x)&&q!==H&&(q!=null||H!=null))switch(x){case"selected":n.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:tt(n,s,x,q,u,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in o)q=o[be],o.hasOwnProperty(be)&&q!=null&&!u.hasOwnProperty(be)&&tt(n,s,be,null,u,q);for(B in u)if(q=u[B],H=o[B],u.hasOwnProperty(B)&&q!==H&&(q!=null||H!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,s));break;default:tt(n,s,B,q,u,H)}return;default:if(dl(s)){for(var nt in o)q=o[nt],o.hasOwnProperty(nt)&&q!==void 0&&!u.hasOwnProperty(nt)&&Fm(n,s,nt,void 0,u,q);for(Q in u)q=u[Q],H=o[Q],!u.hasOwnProperty(Q)||q===H||q===void 0&&H===void 0||Fm(n,s,Q,q,u,H);return}}for(var L in o)q=o[L],o.hasOwnProperty(L)&&q!=null&&!u.hasOwnProperty(L)&&tt(n,s,L,null,u,q);for(W in u)q=u[W],H=o[W],!u.hasOwnProperty(W)||q===H||q==null&&H==null||tt(n,s,W,q,u,H)}var qm=null,Hm=null;function ch(n){return n.nodeType===9?n:n.ownerDocument}function F0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function q0(n,s){if(n===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&s==="foreignObject"?0:n}function Gm(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var $m=null;function XI(){var n=window.event;return n&&n.type==="popstate"?n===$m?!1:($m=n,!0):($m=null,!1)}var H0=typeof setTimeout=="function"?setTimeout:void 0,WI=typeof clearTimeout=="function"?clearTimeout:void 0,G0=typeof Promise=="function"?Promise:void 0,JI=typeof queueMicrotask=="function"?queueMicrotask:typeof G0<"u"?function(n){return G0.resolve(null).then(n).catch(ZI)}:H0;function ZI(n){setTimeout(function(){throw n})}function jr(n){return n==="head"}function $0(n,s){var o=s,u=0,f=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(0<u&&8>u){o=u;var b=n.ownerDocument;if(o&1&&Jl(b.documentElement),o&2&&Jl(b.body),o&4)for(o=b.head,Jl(o),b=o.firstChild;b;){var T=b.nextSibling,x=b.nodeName;b[Os]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&b.rel.toLowerCase()==="stylesheet"||o.removeChild(b),b=T}}if(f===0){n.removeChild(d),au(s);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=d}while(o);au(s)}function Km(n){var s=n.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Km(o),br(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function eR(n,s,o,u){for(;n.nodeType===1;){var f=o;if(n.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[Os])switch(s){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(s==="input"&&n.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=Yn(n.nextSibling),n===null)break}return null}function tR(n,s,o){if(s==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=Yn(n.nextSibling),n===null))return null;return n}function Ym(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function nR(n,s){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function Yn(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return n}var Qm=null;function K0(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return n;s--}else o==="/$"&&s++}n=n.previousSibling}return null}function Y0(n,s,o){switch(s=ch(o),n){case"html":if(n=s.documentElement,!n)throw Error(r(452));return n;case"head":if(n=s.head,!n)throw Error(r(453));return n;case"body":if(n=s.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}function Jl(n){for(var s=n.attributes;s.length;)n.removeAttributeNode(s[0]);br(n)}var jn=new Map,Q0=new Set;function hh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var tr=re.d;re.d={f:iR,r:rR,D:sR,C:aR,L:oR,m:lR,X:cR,S:uR,M:hR};function iR(){var n=tr.f(),s=nh();return n||s}function rR(n){var s=ei(n);s!==null&&s.tag===5&&s.type==="form"?p_(s):tr.r(n)}var ho=typeof document>"u"?null:document;function X0(n,s,o){var u=ho;if(u&&typeof s=="string"&&s){var f=Tt(s);f='link[rel="'+n+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),Q0.has(f)||(Q0.add(f),n={rel:n,crossOrigin:o,href:s},u.querySelector(f)===null&&(s=u.createElement("link"),Kt(s,"link",n),gt(s),u.head.appendChild(s)))}}function sR(n){tr.D(n),X0("dns-prefetch",n,null)}function aR(n,s){tr.C(n,s),X0("preconnect",n,s)}function oR(n,s,o){tr.L(n,s,o);var u=ho;if(u&&n&&s){var f='link[rel="preload"][as="'+Tt(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Tt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Tt(o.imageSizes)+'"]')):f+='[href="'+Tt(n)+'"]';var d=f;switch(s){case"style":d=fo(n);break;case"script":d=mo(n)}jn.has(d)||(n=v({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:n,as:s},o),jn.set(d,n),u.querySelector(f)!==null||s==="style"&&u.querySelector(Zl(d))||s==="script"&&u.querySelector(eu(d))||(s=u.createElement("link"),Kt(s,"link",n),gt(s),u.head.appendChild(s)))}}function lR(n,s){tr.m(n,s);var o=ho;if(o&&n){var u=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Tt(u)+'"][href="'+Tt(n)+'"]',d=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=mo(n)}if(!jn.has(d)&&(n=v({rel:"modulepreload",href:n},s),jn.set(d,n),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(eu(d)))return}u=o.createElement("link"),Kt(u,"link",n),gt(u),o.head.appendChild(u)}}}function uR(n,s,o){tr.S(n,s,o);var u=ho;if(u&&n){var f=an(u).hoistableStyles,d=fo(n);s=s||"default";var b=f.get(d);if(!b){var T={loading:0,preload:null};if(b=u.querySelector(Zl(d)))T.loading=5;else{n=v({rel:"stylesheet",href:n,"data-precedence":s},o),(o=jn.get(d))&&Xm(n,o);var x=b=u.createElement("link");gt(x),Kt(x,"link",n),x._p=new Promise(function(B,Q){x.onload=B,x.onerror=Q}),x.addEventListener("load",function(){T.loading|=1}),x.addEventListener("error",function(){T.loading|=2}),T.loading|=4,fh(b,s,u)}b={type:"stylesheet",instance:b,count:1,state:T},f.set(d,b)}}}function cR(n,s){tr.X(n,s);var o=ho;if(o&&n){var u=an(o).hoistableScripts,f=mo(n),d=u.get(f);d||(d=o.querySelector(eu(f)),d||(n=v({src:n,async:!0},s),(s=jn.get(f))&&Wm(n,s),d=o.createElement("script"),gt(d),Kt(d,"link",n),o.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},u.set(f,d))}}function hR(n,s){tr.M(n,s);var o=ho;if(o&&n){var u=an(o).hoistableScripts,f=mo(n),d=u.get(f);d||(d=o.querySelector(eu(f)),d||(n=v({src:n,async:!0,type:"module"},s),(s=jn.get(f))&&Wm(n,s),d=o.createElement("script"),gt(d),Kt(d,"link",n),o.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},u.set(f,d))}}function W0(n,s,o,u){var f=(f=we.current)?hh(f):null;if(!f)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=fo(o.href),o=an(f).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=fo(o.href);var d=an(f).hoistableStyles,b=d.get(n);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,b),(d=f.querySelector(Zl(n)))&&!d._p&&(b.instance=d,b.state.loading=5),jn.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},jn.set(n,o),d||fR(f,n,o,b.state))),s&&u===null)throw Error(r(528,""));return b}if(s&&u!==null)throw Error(r(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=mo(o),o=an(f).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function fo(n){return'href="'+Tt(n)+'"'}function Zl(n){return'link[rel="stylesheet"]['+n+"]"}function J0(n){return v({},n,{"data-precedence":n.precedence,precedence:null})}function fR(n,s,o,u){n.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=n.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),Kt(s,"link",o),gt(s),n.head.appendChild(s))}function mo(n){return'[src="'+Tt(n)+'"]'}function eu(n){return"script[async]"+n}function Z0(n,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=n.querySelector('style[data-href~="'+Tt(o.href)+'"]');if(u)return s.instance=u,gt(u),u;var f=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),gt(u),Kt(u,"style",f),fh(u,o.precedence,n),s.instance=u;case"stylesheet":f=fo(o.href);var d=n.querySelector(Zl(f));if(d)return s.state.loading|=4,s.instance=d,gt(d),d;u=J0(o),(f=jn.get(f))&&Xm(u,f),d=(n.ownerDocument||n).createElement("link"),gt(d);var b=d;return b._p=new Promise(function(T,x){b.onload=T,b.onerror=x}),Kt(d,"link",u),s.state.loading|=4,fh(d,o.precedence,n),s.instance=d;case"script":return d=mo(o.src),(f=n.querySelector(eu(d)))?(s.instance=f,gt(f),f):(u=o,(f=jn.get(d))&&(u=v({},o),Wm(u,f)),n=n.ownerDocument||n,f=n.createElement("script"),gt(f),Kt(f,"link",u),n.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(r(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,fh(u,o.precedence,n));return s.instance}function fh(n,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,d=f,b=0;b<u.length;b++){var T=u[b];if(T.dataset.precedence===s)d=T;else if(d!==f)break}d?d.parentNode.insertBefore(n,d.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(n,s.firstChild))}function Xm(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.title==null&&(n.title=s.title)}function Wm(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.integrity==null&&(n.integrity=s.integrity)}var dh=null;function eb(n,s,o){if(dh===null){var u=new Map,f=dh=new Map;f.set(o,u)}else f=dh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),f=0;f<o.length;f++){var d=o[f];if(!(d[Os]||d[xt]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var b=d.getAttribute(s)||"";b=n+b;var T=u.get(b);T?T.push(d):u.set(b,[d])}}return u}function tb(n,s,o){n=n.ownerDocument||n,n.head.insertBefore(o,s==="title"?n.querySelector("head > title"):null)}function dR(n,s,o){if(o===1||s.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return n=s.disabled,typeof s.precedence=="string"&&n==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function nb(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var tu=null;function mR(){}function pR(n,s,o){if(tu===null)throw Error(r(475));var u=tu;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=fo(o.href),d=n.querySelector(Zl(f));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=mh.bind(u),n.then(u,u)),s.state.loading|=4,s.instance=d,gt(d);return}d=n.ownerDocument||n,o=J0(o),(f=jn.get(f))&&Xm(o,f),d=d.createElement("link"),gt(d);var b=d;b._p=new Promise(function(T,x){b.onload=T,b.onerror=x}),Kt(d,"link",o),s.instance=d}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(u.count++,s=mh.bind(u),n.addEventListener("load",s),n.addEventListener("error",s))}}function gR(){if(tu===null)throw Error(r(475));var n=tu;return n.stylesheets&&n.count===0&&Jm(n,n.stylesheets),0<n.count?function(s){var o=setTimeout(function(){if(n.stylesheets&&Jm(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=s,function(){n.unsuspend=null,clearTimeout(o)}}:null}function mh(){if(this.count--,this.count===0){if(this.stylesheets)Jm(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var ph=null;function Jm(n,s){n.stylesheets=null,n.unsuspend!==null&&(n.count++,ph=new Map,s.forEach(yR,n),ph=null,mh.call(n))}function yR(n,s){if(!(s.state.loading&4)){var o=ph.get(n);if(o)var u=o.get(null);else{o=new Map,ph.set(n,o);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var b=f[d];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(o.set(b.dataset.precedence,b),u=b)}u&&o.set(null,u)}f=s.instance,b=f.getAttribute("data-precedence"),d=o.get(b)||u,d===u&&o.set(null,f),o.set(b,f),this.count++,u=mh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),d?d.parentNode.insertBefore(f,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),s.state.loading|=4}}var nu={$$typeof:$,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function vR(n,s,o,u,f,d,b,T){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Oi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oi(0),this.hiddenUpdates=Oi(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function ib(n,s,o,u,f,d,b,T,x,B,Q,W){return n=new vR(n,s,o,b,T,x,B,W),s=1,d===!0&&(s|=24),d=_n(3,null,null,s),n.current=d,d.stateNode=n,s=Pd(),s.refCount++,n.pooledCache=s,s.refCount++,d.memoizedState={element:u,isDehydrated:o,cache:s},Ld(d),n}function rb(n){return n?(n=Ha,n):Ha}function sb(n,s,o,u,f,d){f=rb(f),u.context===null?u.context=f:u.pendingContext=f,u=Ir(s),u.payload={element:o},d=d===void 0?null:d,d!==null&&(u.callback=d),o=Rr(n,u,s),o!==null&&(Sn(o,n,s),Dl(o,n,s))}function ab(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<s?o:s}}function Zm(n,s){ab(n,s),(n=n.alternate)&&ab(n,s)}function ob(n){if(n.tag===13){var s=qa(n,67108864);s!==null&&Sn(s,n,67108864),Zm(n,67108864)}}var gh=!0;function _R(n,s,o,u){var f=K.T;K.T=null;var d=re.p;try{re.p=2,ep(n,s,o,u)}finally{re.p=d,K.T=f}}function bR(n,s,o,u){var f=K.T;K.T=null;var d=re.p;try{re.p=8,ep(n,s,o,u)}finally{re.p=d,K.T=f}}function ep(n,s,o,u){if(gh){var f=tp(u);if(f===null)Bm(n,s,u,yh,o),ub(n,u);else if(TR(f,n,s,o,u))u.stopPropagation();else if(ub(n,u),s&4&&-1<ER.indexOf(n)){for(;f!==null;){var d=ei(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var b=qn(d.pendingLanes);if(b!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;b;){var x=1<<31-Wt(b);T.entanglements[1]|=x,b&=~x}mi(d),(Xe&6)===0&&(eh=Rn()+500,Ql(0))}}break;case 13:T=qa(d,2),T!==null&&Sn(T,d,2),nh(),Zm(d,2)}if(d=tp(u),d===null&&Bm(n,s,u,yh,o),d===f)break;f=d}f!==null&&u.stopPropagation()}else Bm(n,s,u,null,o)}}function tp(n){return n=Nn(n),np(n)}var yh=null;function np(n){if(yh=null,n=Pi(n),n!==null){var s=l(n);if(s===null)n=null;else{var o=s.tag;if(o===13){if(n=c(s),n!==null)return n;n=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null)}}return yh=n,null}function lb(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sd()){case el:return 2;case Ta:return 8;case Is:case ad:return 32;case Aa:return 268435456;default:return 32}default:return 32}}var ip=!1,zr=null,Br=null,Fr=null,iu=new Map,ru=new Map,qr=[],ER="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ub(n,s){switch(n){case"focusin":case"focusout":zr=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":iu.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":ru.delete(s.pointerId)}}function su(n,s,o,u,f,d){return n===null||n.nativeEvent!==d?(n={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:d,targetContainers:[f]},s!==null&&(s=ei(s),s!==null&&ob(s)),n):(n.eventSystemFlags|=u,s=n.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),n)}function TR(n,s,o,u,f){switch(s){case"focusin":return zr=su(zr,n,s,o,u,f),!0;case"dragenter":return Br=su(Br,n,s,o,u,f),!0;case"mouseover":return Fr=su(Fr,n,s,o,u,f),!0;case"pointerover":var d=f.pointerId;return iu.set(d,su(iu.get(d)||null,n,s,o,u,f)),!0;case"gotpointercapture":return d=f.pointerId,ru.set(d,su(ru.get(d)||null,n,s,o,u,f)),!0}return!1}function cb(n){var s=Pi(n.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){n.blockedOn=s,nc(n.priority,function(){if(o.tag===13){var u=An();u=yr(u);var f=qa(o,u);f!==null&&Sn(f,o,u),Zm(o,u)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function vh(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var o=tp(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Li=u,o.target.dispatchEvent(u),Li=null}else return s=ei(o),s!==null&&ob(s),n.blockedOn=o,!1;s.shift()}return!0}function hb(n,s,o){vh(n)&&o.delete(s)}function AR(){ip=!1,zr!==null&&vh(zr)&&(zr=null),Br!==null&&vh(Br)&&(Br=null),Fr!==null&&vh(Fr)&&(Fr=null),iu.forEach(hb),ru.forEach(hb)}function _h(n,s){n.blockedOn===s&&(n.blockedOn=null,ip||(ip=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,AR)))}var bh=null;function fb(n){bh!==n&&(bh=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){bh===n&&(bh=null);for(var s=0;s<n.length;s+=3){var o=n[s],u=n[s+1],f=n[s+2];if(typeof u!="function"){if(np(u||o)===null)continue;break}var d=ei(o);d!==null&&(n.splice(s,3),s-=3,nm(d,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function au(n){function s(x){return _h(x,n)}zr!==null&&_h(zr,n),Br!==null&&_h(Br,n),Fr!==null&&_h(Fr,n),iu.forEach(s),ru.forEach(s);for(var o=0;o<qr.length;o++){var u=qr[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<qr.length&&(o=qr[0],o.blockedOn===null);)cb(o),o.blockedOn===null&&qr.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],d=o[u+1],b=f[Et]||null;if(typeof d=="function")b||fb(o);else if(b){var T=null;if(d&&d.hasAttribute("formAction")){if(f=d,b=d[Et]||null)T=b.formAction;else if(np(f)!==null)continue}else T=b.action;typeof T=="function"?o[u+1]=T:(o.splice(u,3),u-=3),fb(o)}}}function rp(n){this._internalRoot=n}Eh.prototype.render=rp.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(r(409));var o=s.current,u=An();sb(o,u,n,s,null,null)},Eh.prototype.unmount=rp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;sb(n.current,2,null,n,null,null),nh(),s[Cn]=null}};function Eh(n){this._internalRoot=n}Eh.prototype.unstable_scheduleHydration=function(n){if(n){var s=vr();n={blockedOn:null,target:n,priority:s};for(var o=0;o<qr.length&&s!==0&&s<qr[o].priority;o++);qr.splice(o,0,n),o===0&&cb(n)}};var db=e.version;if(db!=="19.1.0")throw Error(r(527,db,"19.1.0"));re.findDOMNode=function(n){var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=p(s),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var SR={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Th=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Th.isDisabled&&Th.supportsFiber)try{dt=Th.inject(SR),Qe=Th}catch{}}return lu.createRoot=function(n,s){if(!a(n))throw Error(r(299));var o=!1,u="",f=x_,d=N_,b=O_,T=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(d=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(T=s.unstable_transitionCallbacks)),s=ib(n,1,!1,null,null,o,u,f,d,b,T,null),n[Cn]=s.current,zm(n),new rp(s)},lu.hydrateRoot=function(n,s,o){if(!a(n))throw Error(r(299));var u=!1,f="",d=x_,b=N_,T=O_,x=null,B=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(d=o.onUncaughtError),o.onCaughtError!==void 0&&(b=o.onCaughtError),o.onRecoverableError!==void 0&&(T=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(x=o.unstable_transitionCallbacks),o.formState!==void 0&&(B=o.formState)),s=ib(n,1,!0,s,o??null,u,f,d,b,T,x,B),s.context=rb(null),o=s.current,u=An(),u=yr(u),f=Ir(u),f.callback=null,Rr(o,f,u),o=u,s.current.lanes=o,Di(s,o),mi(s),n[Cn]=s.current,zm(n),new Eh(s)},lu.version="19.1.0",lu}var Ab;function MR(){if(Ab)return op.exports;Ab=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),op.exports=kR(),op.exports}var VR=MR();n1();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Iu(){return Iu=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Iu.apply(this,arguments)}var Jr;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(Jr||(Jr={}));const Sb="popstate";function LR(i){i===void 0&&(i={});function e(r,a){let{pathname:l,search:c,hash:m}=r.location;return Up("",{pathname:l,search:c,hash:m},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(r,a){return typeof a=="string"?a:Kh(a)}return jR(e,t,null,i)}function bt(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function i1(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function UR(){return Math.random().toString(36).substr(2,8)}function wb(i,e){return{usr:i.state,key:i.key,idx:e}}function Up(i,e,t,r){return t===void 0&&(t=null),Iu({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof e=="string"?Bo(e):e,{state:t,key:e&&e.key||r||UR()})}function Kh(i){let{pathname:e="/",search:t="",hash:r=""}=i;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Bo(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substr(t),i=i.substr(0,t));let r=i.indexOf("?");r>=0&&(e.search=i.substr(r),i=i.substr(0,r)),i&&(e.pathname=i)}return e}function jR(i,e,t,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,c=a.history,m=Jr.Pop,p=null,g=v();g==null&&(g=0,c.replaceState(Iu({},c.state,{idx:g}),""));function v(){return(c.state||{idx:null}).idx}function E(){m=Jr.Pop;let U=v(),te=U==null?null:U-g;g=U,p&&p({action:m,location:Y.location,delta:te})}function S(U,te){m=Jr.Push;let ne=Up(Y.location,U,te);g=v()+1;let $=wb(ne,g),oe=Y.createHref(ne);try{c.pushState($,"",oe)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;a.location.assign(oe)}l&&p&&p({action:m,location:Y.location,delta:1})}function V(U,te){m=Jr.Replace;let ne=Up(Y.location,U,te);g=v();let $=wb(ne,g),oe=Y.createHref(ne);c.replaceState($,"",oe),l&&p&&p({action:m,location:Y.location,delta:0})}function F(U){let te=a.location.origin!=="null"?a.location.origin:a.location.href,ne=typeof U=="string"?U:Kh(U);return ne=ne.replace(/ $/,"%20"),bt(te,"No window.location.(origin|href) available to create URL for href: "+ne),new URL(ne,te)}let Y={get action(){return m},get location(){return i(a,c)},listen(U){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(Sb,E),p=U,()=>{a.removeEventListener(Sb,E),p=null}},createHref(U){return e(a,U)},createURL:F,encodeLocation(U){let te=F(U);return{pathname:te.pathname,search:te.search,hash:te.hash}},push:S,replace:V,go(U){return c.go(U)}};return Y}var Ib;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(Ib||(Ib={}));function zR(i,e,t){return t===void 0&&(t="/"),BR(i,e,t)}function BR(i,e,t,r){let a=typeof e=="string"?Bo(e):e,l=zg(a.pathname||"/",t);if(l==null)return null;let c=r1(i);FR(c);let m=null;for(let p=0;m==null&&p<c.length;++p){let g=eC(l);m=WR(c[p],g)}return m}function r1(i,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let a=(l,c,m)=>{let p={relativePath:m===void 0?l.path||"":m,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(bt(p.relativePath.startsWith(r),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(r.length));let g=es([r,p.relativePath]),v=t.concat(p);l.children&&l.children.length>0&&(bt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),r1(l.children,e,v,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:QR(g,l.index),routesMeta:v})};return i.forEach((l,c)=>{var m;if(l.path===""||!((m=l.path)!=null&&m.includes("?")))a(l,c);else for(let p of s1(l.path))a(l,c,p)}),e}function s1(i){let e=i.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let c=s1(r.join("/")),m=[];return m.push(...c.map(p=>p===""?l:[l,p].join("/"))),a&&m.push(...c),m.map(p=>i.startsWith("/")&&p===""?"/":p)}function FR(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:XR(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const qR=/^:[\w-]+$/,HR=3,GR=2,$R=1,KR=10,YR=-2,Rb=i=>i==="*";function QR(i,e){let t=i.split("/"),r=t.length;return t.some(Rb)&&(r+=YR),e&&(r+=GR),t.filter(a=>!Rb(a)).reduce((a,l)=>a+(qR.test(l)?HR:l===""?$R:KR),r)}function XR(i,e){return i.length===e.length&&i.slice(0,-1).every((r,a)=>r===e[a])?i[i.length-1]-e[e.length-1]:0}function WR(i,e,t){let{routesMeta:r}=i,a={},l="/",c=[];for(let m=0;m<r.length;++m){let p=r[m],g=m===r.length-1,v=l==="/"?e:e.slice(l.length)||"/",E=JR({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},v),S=p.route;if(!E)return null;Object.assign(a,E.params),c.push({params:a,pathname:es([l,E.pathname]),pathnameBase:rC(es([l,E.pathnameBase])),route:S}),E.pathnameBase!=="/"&&(l=es([l,E.pathnameBase]))}return c}function JR(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,r]=ZR(i.path,i.caseSensitive,i.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),m=a.slice(1);return{params:r.reduce((g,v,E)=>{let{paramName:S,isOptional:V}=v;if(S==="*"){let Y=m[E]||"";c=l.slice(0,l.length-Y.length).replace(/(.)\/+$/,"$1")}const F=m[E];return V&&!F?g[S]=void 0:g[S]=(F||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:i}}function ZR(i,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),i1(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let r=[],a="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,m,p)=>(r.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(r.push({paramName:"*"}),a+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":i!==""&&i!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function eC(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return i1(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),i}}function zg(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=i.charAt(t);return r&&r!=="/"?null:i.slice(t)||"/"}function tC(i,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:a=""}=typeof i=="string"?Bo(i):i;return{pathname:t?t.startsWith("/")?t:nC(t,e):e,search:sC(r),hash:aC(a)}}function nC(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function hp(i,e,t,r){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function iC(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Bg(i,e){let t=iC(i);return e?t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Fg(i,e,t,r){r===void 0&&(r=!1);let a;typeof i=="string"?a=Bo(i):(a=Iu({},i),bt(!a.pathname||!a.pathname.includes("?"),hp("?","pathname","search",a)),bt(!a.pathname||!a.pathname.includes("#"),hp("#","pathname","hash",a)),bt(!a.search||!a.search.includes("#"),hp("#","search","hash",a)));let l=i===""||a.pathname==="",c=l?"/":a.pathname,m;if(c==null)m=t;else{let E=e.length-1;if(!r&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),E-=1;a.pathname=S.join("/")}m=E>=0?e[E]:"/"}let p=tC(a,m),g=c&&c!=="/"&&c.endsWith("/"),v=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(g||v)&&(p.pathname+="/"),p}const es=i=>i.join("/").replace(/\/\/+/g,"/"),rC=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),sC=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,aC=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function oC(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const a1=["post","put","patch","delete"];new Set(a1);const lC=["get",...a1];new Set(lC);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ru(){return Ru=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Ru.apply(this,arguments)}const qg=J.createContext(null),uC=J.createContext(null),vs=J.createContext(null),Sf=J.createContext(null),dr=J.createContext({outlet:null,matches:[],isDataRoute:!1}),o1=J.createContext(null);function cC(i,e){let{relative:t}=e===void 0?{}:e;Fo()||bt(!1);let{basename:r,navigator:a}=J.useContext(vs),{hash:l,pathname:c,search:m}=u1(i,{relative:t}),p=c;return r!=="/"&&(p=c==="/"?r:es([r,c])),a.createHref({pathname:p,search:m,hash:l})}function Fo(){return J.useContext(Sf)!=null}function ju(){return Fo()||bt(!1),J.useContext(Sf).location}function l1(i){J.useContext(vs).static||J.useLayoutEffect(i)}function wf(){let{isDataRoute:i}=J.useContext(dr);return i?wC():hC()}function hC(){Fo()||bt(!1);let i=J.useContext(qg),{basename:e,future:t,navigator:r}=J.useContext(vs),{matches:a}=J.useContext(dr),{pathname:l}=ju(),c=JSON.stringify(Bg(a,t.v7_relativeSplatPath)),m=J.useRef(!1);return l1(()=>{m.current=!0}),J.useCallback(function(g,v){if(v===void 0&&(v={}),!m.current)return;if(typeof g=="number"){r.go(g);return}let E=Fg(g,JSON.parse(c),l,v.relative==="path");i==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:es([e,E.pathname])),(v.replace?r.replace:r.push)(E,v.state,v)},[e,r,c,l,i])}const fC=J.createContext(null);function dC(i){let e=J.useContext(dr).outlet;return e&&J.createElement(fC.Provider,{value:i},e)}function u1(i,e){let{relative:t}=e===void 0?{}:e,{future:r}=J.useContext(vs),{matches:a}=J.useContext(dr),{pathname:l}=ju(),c=JSON.stringify(Bg(a,r.v7_relativeSplatPath));return J.useMemo(()=>Fg(i,JSON.parse(c),l,t==="path"),[i,c,l,t])}function mC(i,e){return pC(i,e)}function pC(i,e,t,r){Fo()||bt(!1);let{navigator:a,static:l}=J.useContext(vs),{matches:c}=J.useContext(dr),m=c[c.length-1],p=m?m.params:{};m&&m.pathname;let g=m?m.pathnameBase:"/";m&&m.route;let v=ju(),E;if(e){var S;let te=typeof e=="string"?Bo(e):e;g==="/"||(S=te.pathname)!=null&&S.startsWith(g)||bt(!1),E=te}else E=v;let V=E.pathname||"/",F=V;if(g!=="/"){let te=g.replace(/^\//,"").split("/");F="/"+V.replace(/^\//,"").split("/").slice(te.length).join("/")}let Y=zR(i,{pathname:F}),U=bC(Y&&Y.map(te=>Object.assign({},te,{params:Object.assign({},p,te.params),pathname:es([g,a.encodeLocation?a.encodeLocation(te.pathname).pathname:te.pathname]),pathnameBase:te.pathnameBase==="/"?g:es([g,a.encodeLocation?a.encodeLocation(te.pathnameBase).pathname:te.pathnameBase])})),c,t,r);return e&&U?J.createElement(Sf.Provider,{value:{location:Ru({pathname:"/",search:"",hash:"",state:null,key:"default"},E),navigationType:Jr.Pop}},U):U}function gC(){let i=SC(),e=oC(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return J.createElement(J.Fragment,null,J.createElement("h2",null,"Unexpected Application Error!"),J.createElement("h3",{style:{fontStyle:"italic"}},e),t?J.createElement("pre",{style:a},t):null,null)}const yC=J.createElement(gC,null);class vC extends J.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?J.createElement(dr.Provider,{value:this.props.routeContext},J.createElement(o1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _C(i){let{routeContext:e,match:t,children:r}=i,a=J.useContext(qg);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),J.createElement(dr.Provider,{value:e},r)}function bC(i,e,t,r){var a;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),i==null){var l;if(!t)return null;if(t.errors)i=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let c=i,m=(a=t)==null?void 0:a.errors;if(m!=null){let v=c.findIndex(E=>E.route.id&&(m==null?void 0:m[E.route.id])!==void 0);v>=0||bt(!1),c=c.slice(0,Math.min(c.length,v+1))}let p=!1,g=-1;if(t&&r&&r.v7_partialHydration)for(let v=0;v<c.length;v++){let E=c[v];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(g=v),E.route.id){let{loaderData:S,errors:V}=t,F=E.route.loader&&S[E.route.id]===void 0&&(!V||V[E.route.id]===void 0);if(E.route.lazy||F){p=!0,g>=0?c=c.slice(0,g+1):c=[c[0]];break}}}return c.reduceRight((v,E,S)=>{let V,F=!1,Y=null,U=null;t&&(V=m&&E.route.id?m[E.route.id]:void 0,Y=E.route.errorElement||yC,p&&(g<0&&S===0?(IC("route-fallback"),F=!0,U=null):g===S&&(F=!0,U=E.route.hydrateFallbackElement||null)));let te=e.concat(c.slice(0,S+1)),ne=()=>{let $;return V?$=Y:F?$=U:E.route.Component?$=J.createElement(E.route.Component,null):E.route.element?$=E.route.element:$=v,J.createElement(_C,{match:E,routeContext:{outlet:v,matches:te,isDataRoute:t!=null},children:$})};return t&&(E.route.ErrorBoundary||E.route.errorElement||S===0)?J.createElement(vC,{location:t.location,revalidation:t.revalidation,component:Y,error:V,children:ne(),routeContext:{outlet:null,matches:te,isDataRoute:!0}}):ne()},null)}var c1=function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i}(c1||{}),h1=function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i}(h1||{});function EC(i){let e=J.useContext(qg);return e||bt(!1),e}function TC(i){let e=J.useContext(uC);return e||bt(!1),e}function AC(i){let e=J.useContext(dr);return e||bt(!1),e}function f1(i){let e=AC(),t=e.matches[e.matches.length-1];return t.route.id||bt(!1),t.route.id}function SC(){var i;let e=J.useContext(o1),t=TC(),r=f1();return e!==void 0?e:(i=t.errors)==null?void 0:i[r]}function wC(){let{router:i}=EC(c1.UseNavigateStable),e=f1(h1.UseNavigateStable),t=J.useRef(!1);return l1(()=>{t.current=!0}),J.useCallback(function(a,l){l===void 0&&(l={}),t.current&&(typeof a=="number"?i.navigate(a):i.navigate(a,Ru({fromRouteId:e},l)))},[i,e])}const Cb={};function IC(i,e,t){Cb[i]||(Cb[i]=!0)}function RC(i,e){i==null||i.v7_startTransition,i==null||i.v7_relativeSplatPath}function CC(i){let{to:e,replace:t,state:r,relative:a}=i;Fo()||bt(!1);let{future:l,static:c}=J.useContext(vs),{matches:m}=J.useContext(dr),{pathname:p}=ju(),g=wf(),v=Fg(e,Bg(m,l.v7_relativeSplatPath),p,a==="path"),E=JSON.stringify(v);return J.useEffect(()=>g(JSON.parse(E),{replace:t,state:r,relative:a}),[g,E,a,t,r]),null}function Hg(i){return dC(i.context)}function tn(i){bt(!1)}function xC(i){let{basename:e="/",children:t=null,location:r,navigationType:a=Jr.Pop,navigator:l,static:c=!1,future:m}=i;Fo()&&bt(!1);let p=e.replace(/^\/*/,"/"),g=J.useMemo(()=>({basename:p,navigator:l,static:c,future:Ru({v7_relativeSplatPath:!1},m)}),[p,m,l,c]);typeof r=="string"&&(r=Bo(r));let{pathname:v="/",search:E="",hash:S="",state:V=null,key:F="default"}=r,Y=J.useMemo(()=>{let U=zg(v,p);return U==null?null:{location:{pathname:U,search:E,hash:S,state:V,key:F},navigationType:a}},[p,v,E,S,V,F,a]);return Y==null?null:J.createElement(vs.Provider,{value:g},J.createElement(Sf.Provider,{children:t,value:Y}))}function NC(i){let{children:e,location:t}=i;return mC(jp(e),t)}new Promise(()=>{});function jp(i,e){e===void 0&&(e=[]);let t=[];return J.Children.forEach(i,(r,a)=>{if(!J.isValidElement(r))return;let l=[...e,a];if(r.type===J.Fragment){t.push.apply(t,jp(r.props.children,l));return}r.type!==tn&&bt(!1),!r.props.index||!r.props.children||bt(!1);let c={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=jp(r.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zp(){return zp=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},zp.apply(this,arguments)}function OC(i,e){if(i==null)return{};var t={},r=Object.keys(i),a,l;for(l=0;l<r.length;l++)a=r[l],!(e.indexOf(a)>=0)&&(t[a]=i[a]);return t}function DC(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function PC(i,e){return i.button===0&&(!e||e==="_self")&&!DC(i)}const kC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],MC="6";try{window.__reactRouterVersion=MC}catch{}const VC="startTransition",xb=NR[VC];function LC(i){let{basename:e,children:t,future:r,window:a}=i,l=J.useRef();l.current==null&&(l.current=LR({window:a,v5Compat:!0}));let c=l.current,[m,p]=J.useState({action:c.action,location:c.location}),{v7_startTransition:g}=r||{},v=J.useCallback(E=>{g&&xb?xb(()=>p(E)):p(E)},[p,g]);return J.useLayoutEffect(()=>c.listen(v),[c,v]),J.useEffect(()=>RC(r),[r]),J.createElement(xC,{basename:e,children:t,location:m.location,navigationType:m.action,navigator:c,future:r})}const UC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ca=J.forwardRef(function(e,t){let{onClick:r,relative:a,reloadDocument:l,replace:c,state:m,target:p,to:g,preventScrollReset:v,viewTransition:E}=e,S=OC(e,kC),{basename:V}=J.useContext(vs),F,Y=!1;if(typeof g=="string"&&jC.test(g)&&(F=g,UC))try{let $=new URL(window.location.href),oe=g.startsWith("//")?new URL($.protocol+g):new URL(g),le=zg(oe.pathname,V);oe.origin===$.origin&&le!=null?g=le+oe.search+oe.hash:Y=!0}catch{}let U=cC(g,{relative:a}),te=zC(g,{replace:c,state:m,target:p,preventScrollReset:v,relative:a,viewTransition:E});function ne($){r&&r($),$.defaultPrevented||te($)}return J.createElement("a",zp({},S,{href:F||U,onClick:Y||l?r:ne,ref:t,target:p}))});var Nb;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(Nb||(Nb={}));var Ob;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(Ob||(Ob={}));function zC(i,e){let{target:t,replace:r,state:a,preventScrollReset:l,relative:c,viewTransition:m}=e===void 0?{}:e,p=wf(),g=ju(),v=u1(i,{relative:c});return J.useCallback(E=>{if(PC(E,t)){E.preventDefault();let S=r!==void 0?r:Kh(g)===Kh(v);p(i,{replace:S,state:a,preventScrollReset:l,relative:c,viewTransition:m})}},[g,p,v,r,a,t,i,l,c,m])}const BC=()=>{};var Db={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=function(i){const e=[];let t=0;for(let r=0;r<i.length;r++){let a=i.charCodeAt(r);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++r)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},FC=function(i){const e=[];let t=0,r=0;for(;t<i.length;){const a=i[t++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[t++];e[r++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[t++],c=i[t++],m=i[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|m&63)-65536;e[r++]=String.fromCharCode(55296+(p>>10)),e[r++]=String.fromCharCode(56320+(p&1023))}else{const l=i[t++],c=i[t++];e[r++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},m1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<i.length;a+=3){const l=i[a],c=a+1<i.length,m=c?i[a+1]:0,p=a+2<i.length,g=p?i[a+2]:0,v=l>>2,E=(l&3)<<4|m>>4;let S=(m&15)<<2|g>>6,V=g&63;p||(V=64,c||(S=64)),r.push(t[v],t[E],t[S],t[V])}return r.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(d1(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):FC(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<i.length;){const l=t[i.charAt(a++)],m=a<i.length?t[i.charAt(a)]:0;++a;const g=a<i.length?t[i.charAt(a)]:64;++a;const E=a<i.length?t[i.charAt(a)]:64;if(++a,l==null||m==null||g==null||E==null)throw new qC;const S=l<<2|m>>4;if(r.push(S),g!==64){const V=m<<4&240|g>>2;if(r.push(V),E!==64){const F=g<<6&192|E;r.push(F)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class qC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const HC=function(i){const e=d1(i);return m1.encodeByteArray(e,!0)},Yh=function(i){return HC(i).replace(/\./g,"")},Gg=function(i){try{return m1.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C=()=>GC().__FIREBASE_DEFAULTS__,KC=()=>{if(typeof process>"u"||typeof Db>"u")return;const i=Db.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},YC=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Gg(i[1]);return e&&JSON.parse(e)},If=()=>{try{return BC()||$C()||KC()||YC()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},p1=i=>{var e,t;return(t=(e=If())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},QC=i=>{const e=p1(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},g1=()=>{var i;return(i=If())===null||i===void 0?void 0:i.config},y1=i=>{var e;return(e=If())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(i){return i.endsWith(".cloudworkstations.dev")}async function v1(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",a=i.iat||0,l=i.sub||i.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Yh(JSON.stringify(t)),Yh(JSON.stringify(c)),""].join(".")}const pu={};function JC(){const i={prod:[],emulator:[]};for(const e of Object.keys(pu))pu[e]?i.emulator.push(e):i.prod.push(e);return i}function ZC(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let Pb=!1;function Rf(i,e){if(typeof window>"u"||typeof document>"u"||!qo(window.location.host)||pu[i]===e||pu[i]||Pb)return;pu[i]=e;function t(S){return`__firebase__banner__${S}`}const r="__firebase__banner",l=JC().prod.length>0;function c(){const S=document.getElementById(r);S&&S.remove()}function m(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,V){S.setAttribute("width","24"),S.setAttribute("id",V),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{Pb=!0,c()},S}function v(S,V){S.setAttribute("id",V),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function E(){const S=ZC(r),V=t("text"),F=document.getElementById(V)||document.createElement("span"),Y=t("learnmore"),U=document.getElementById(Y)||document.createElement("a"),te=t("preprendIcon"),ne=document.getElementById(te)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const $=S.element;m($),v(U,Y);const oe=g();p(ne,te),$.append(ne,F,U,oe),document.body.appendChild($)}l?(F.innerText="Preview backend disconnected.",ne.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ne.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,F.innerText="Preview backend running in this workspace."),F.setAttribute("id",V)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function e2(){var i;const e=(i=If())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function b1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function E1(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function T1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function A1(){const i=it();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function t2(){return!e2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function n2(){try{return typeof indexedDB=="object"}catch{return!1}}function i2(){return new Promise((i,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(r),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2="FirebaseError";class Bn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=r2,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_s.prototype.create)}}class _s{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?s2(l,r):"Error",m=`${this.serviceName}: ${c} (${a}).`;return new Bn(a,m,r)}}function s2(i,e){return i.replace(a2,(t,r)=>{const a=e[r];return a!=null?String(a):`<${r}?>`})}const a2=/\{\$([^}]+)}/g;function S1(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ss(i,e){if(i===e)return!0;const t=Object.keys(i),r=Object.keys(e);for(const a of t){if(!r.includes(a))return!1;const l=i[a],c=e[a];if(kb(l)&&kb(c)){if(!ss(l,c))return!1}else if(l!==c)return!1}for(const a of r)if(!t.includes(a))return!1;return!0}function kb(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(i){const e=[];for(const[t,r]of Object.entries(i))Array.isArray(r)?r.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function o2(i){const e={};return i.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[a,l]=r.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function w1(i,e){const t=new l2(i,e);return t.subscribe.bind(t)}class l2{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let a;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");u2(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:r},a.next===void 0&&(a.next=fp),a.error===void 0&&(a.error=fp),a.complete===void 0&&(a.complete=fp);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function u2(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function fp(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(i){return i&&i._delegate?i._delegate:i}class ar{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new XC;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(f2(e))try{this.getOrInitializeService({instanceIdentifier:aa})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});r.resolve(l)}catch{}}}}clearInstance(e=aa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=aa){return this.instances.has(e)}getOptions(e=aa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[l,c]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(l);r===m&&c.resolve(a)}return a}onInit(e,t){var r;const a=this.normalizeInstanceIdentifier(t),l=(r=this.onInitCallbacks.get(a))!==null&&r!==void 0?r:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const a of r)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:h2(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=aa){return this.component?this.component.multipleInstances?e:aa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function h2(i){return i===aa?void 0:i}function f2(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new c2(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Me||(Me={}));const m2={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},p2=Me.INFO,g2={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},y2=(i,e,...t)=>{if(e<i.logLevel)return;const r=new Date().toISOString(),a=g2[e];if(a)console[a](`[${r}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cf{constructor(e){this.name=e,this._logLevel=p2,this._logHandler=y2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?m2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}const v2=(i,e)=>e.some(t=>i instanceof t);let Mb,Vb;function _2(){return Mb||(Mb=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function b2(){return Vb||(Vb=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const I1=new WeakMap,Bp=new WeakMap,R1=new WeakMap,dp=new WeakMap,$g=new WeakMap;function E2(i){const e=new Promise((t,r)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",c)},l=()=>{t(ts(i.result)),a()},c=()=>{r(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&I1.set(t,i)}).catch(()=>{}),$g.set(e,i),e}function T2(i){if(Bp.has(i))return;const e=new Promise((t,r)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",c),i.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{r(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",c),i.addEventListener("abort",c)});Bp.set(i,e)}let Fp={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Bp.get(i);if(e==="objectStoreNames")return i.objectStoreNames||R1.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ts(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function A2(i){Fp=i(Fp)}function S2(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=i.call(mp(this),e,...t);return R1.set(r,e.sort?e.sort():[e]),ts(r)}:b2().includes(i)?function(...e){return i.apply(mp(this),e),ts(I1.get(this))}:function(...e){return ts(i.apply(mp(this),e))}}function w2(i){return typeof i=="function"?S2(i):(i instanceof IDBTransaction&&T2(i),v2(i,_2())?new Proxy(i,Fp):i)}function ts(i){if(i instanceof IDBRequest)return E2(i);if(dp.has(i))return dp.get(i);const e=w2(i);return e!==i&&(dp.set(i,e),$g.set(e,i)),e}const mp=i=>$g.get(i);function I2(i,e,{blocked:t,upgrade:r,blocking:a,terminated:l}={}){const c=indexedDB.open(i,e),m=ts(c);return r&&c.addEventListener("upgradeneeded",p=>{r(ts(c.result),p.oldVersion,p.newVersion,ts(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),m.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),m}const R2=["get","getKey","getAll","getAllKeys","count"],C2=["put","add","delete","clear"],pp=new Map;function Lb(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(pp.get(e))return pp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,a=C2.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(a||R2.includes(t)))return;const l=async function(c,...m){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return r&&(g=g.index(m.shift())),(await Promise.all([g[t](...m),a&&p.done]))[0]};return pp.set(e,l),l}A2(i=>({...i,get:(e,t,r)=>Lb(e,t)||i.get(e,t,r),has:(e,t)=>!!Lb(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(N2(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function N2(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qp="@firebase/app",Ub="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new Cf("@firebase/app"),O2="@firebase/app-compat",D2="@firebase/analytics-compat",P2="@firebase/analytics",k2="@firebase/app-check-compat",M2="@firebase/app-check",V2="@firebase/auth",L2="@firebase/auth-compat",U2="@firebase/database",j2="@firebase/data-connect",z2="@firebase/database-compat",B2="@firebase/functions",F2="@firebase/functions-compat",q2="@firebase/installations",H2="@firebase/installations-compat",G2="@firebase/messaging",$2="@firebase/messaging-compat",K2="@firebase/performance",Y2="@firebase/performance-compat",Q2="@firebase/remote-config",X2="@firebase/remote-config-compat",W2="@firebase/storage",J2="@firebase/storage-compat",Z2="@firebase/firestore",ex="@firebase/ai",tx="@firebase/firestore-compat",nx="firebase",ix="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="[DEFAULT]",rx={[qp]:"fire-core",[O2]:"fire-core-compat",[P2]:"fire-analytics",[D2]:"fire-analytics-compat",[M2]:"fire-app-check",[k2]:"fire-app-check-compat",[V2]:"fire-auth",[L2]:"fire-auth-compat",[U2]:"fire-rtdb",[j2]:"fire-data-connect",[z2]:"fire-rtdb-compat",[B2]:"fire-fn",[F2]:"fire-fn-compat",[q2]:"fire-iid",[H2]:"fire-iid-compat",[G2]:"fire-fcm",[$2]:"fire-fcm-compat",[K2]:"fire-perf",[Y2]:"fire-perf-compat",[Q2]:"fire-rc",[X2]:"fire-rc-compat",[W2]:"fire-gcs",[J2]:"fire-gcs-compat",[Z2]:"fire-fst",[tx]:"fire-fst-compat",[ex]:"fire-vertex","fire-js":"fire-js",[nx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh=new Map,sx=new Map,Gp=new Map;function jb(i,e){try{i.container.addComponent(e)}catch(t){or.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function as(i){const e=i.name;if(Gp.has(e))return or.debug(`There were multiple attempts to register component ${e}.`),!1;Gp.set(e,i);for(const t of Qh.values())jb(t,i);for(const t of sx.values())jb(t,i);return!0}function zu(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function It(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ns=new _s("app","Firebase",ax);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ns.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=ix;function C1(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Hp,automaticDataCollectionEnabled:!0},e),a=r.name;if(typeof a!="string"||!a)throw ns.create("bad-app-name",{appName:String(a)});if(t||(t=g1()),!t)throw ns.create("no-options");const l=Qh.get(a);if(l){if(ss(t,l.options)&&ss(r,l.config))return l;throw ns.create("duplicate-app",{appName:a})}const c=new d2(a);for(const p of Gp.values())c.addComponent(p);const m=new ox(t,r,c);return Qh.set(a,m),m}function Kg(i=Hp){const e=Qh.get(i);if(!e&&i===Hp&&g1())return C1();if(!e)throw ns.create("no-app",{appName:i});return e}function bi(i,e,t){var r;let a=(r=rx[i])!==null&&r!==void 0?r:i;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const m=[`Unable to register library "${a}" with version "${e}":`];l&&m.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&m.push("and"),c&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),or.warn(m.join(" "));return}as(new ar(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx="firebase-heartbeat-database",ux=1,Cu="firebase-heartbeat-store";let gp=null;function x1(){return gp||(gp=I2(lx,ux,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Cu)}catch(t){console.warn(t)}}}}).catch(i=>{throw ns.create("idb-open",{originalErrorMessage:i.message})})),gp}async function cx(i){try{const t=(await x1()).transaction(Cu),r=await t.objectStore(Cu).get(N1(i));return await t.done,r}catch(e){if(e instanceof Bn)or.warn(e.message);else{const t=ns.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});or.warn(t.message)}}}async function zb(i,e){try{const r=(await x1()).transaction(Cu,"readwrite");await r.objectStore(Cu).put(e,N1(i)),await r.done}catch(t){if(t instanceof Bn)or.warn(t.message);else{const r=ns.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});or.warn(r.message)}}}function N1(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx=1024,fx=30;class dx{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new px(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Bb();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>fx){const c=gx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){or.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bb(),{heartbeatsToSend:r,unsentEntries:a}=mx(this._heartbeatsCache.heartbeats),l=Yh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return or.warn(t),""}}}function Bb(){return new Date().toISOString().substring(0,10)}function mx(i,e=hx){const t=[];let r=i.slice();for(const a of i){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),Fb(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),Fb(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class px{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return n2()?i2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await cx(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return zb(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return zb(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function Fb(i){return Yh(JSON.stringify({version:2,heartbeats:i})).length}function gx(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let r=1;r<i.length;r++)i[r].date<t&&(t=i[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(i){as(new ar("platform-logger",e=>new x2(e),"PRIVATE")),as(new ar("heartbeat",e=>new dx(e),"PRIVATE")),bi(qp,Ub,i),bi(qp,Ub,"esm2017"),bi("fire-js","")}yx("");function Ho(i,e){var t={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&e.indexOf(r)<0&&(t[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(i);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(i,r[a])&&(t[r[a]]=i[r[a]]);return t}function O1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vx=O1,D1=new _s("auth","Firebase",O1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=new Cf("@firebase/auth");function _x(i,...e){Xh.logLevel<=Me.WARN&&Xh.warn(`Auth (${xi}): ${i}`,...e)}function Dh(i,...e){Xh.logLevel<=Me.ERROR&&Xh.error(`Auth (${xi}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(i,...e){throw Qg(i,...e)}function Xn(i,...e){return Qg(i,...e)}function Yg(i,e,t){const r=Object.assign(Object.assign({},vx()),{[e]:t});return new _s("auth","Firebase",r).create(e,{appName:i.name})}function ha(i){return Yg(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bx(i,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Si(i,"argument-error"),Yg(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Qg(i,...e){if(typeof i!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(t,...r)}return D1.create(i,...e)}function Se(i,e,...t){if(!i)throw Qg(e,...t)}function nr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Dh(e),new Error(e)}function lr(i,e){i||nr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Ex(){return qb()==="http:"||qb()==="https:"}function qb(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ex()||E1()||"connection"in navigator)?navigator.onLine:!0}function Ax(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bu=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,lr(t>e,"Short delay should be less than long delay!"),this.isMobile=_1()||T1()}get(){return Tx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(i,e){lr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P1=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ix=new Bu(3e4,6e4);function Wg(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Go(i,e,t,r,a={}){return k1(i,a,async()=>{let l={},c={};r&&(e==="GET"?c=r:l={body:JSON.stringify(r)});const m=mr(Object.assign({key:i.config.apiKey},c)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},l);return b1()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&qo(i.emulatorConfig.host)&&(g.credentials="include"),P1.fetch()(await M1(i,i.config.apiHost,t,m),g)})}async function k1(i,e,t){i._canInitEmulator=!1;const r=Object.assign(Object.assign({},Sx),e);try{const a=new Cx(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Ah(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const m=l.ok?c.errorMessage:c.error.message,[p,g]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ah(i,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Ah(i,"email-already-in-use",c);if(p==="USER_DISABLED")throw Ah(i,"user-disabled",c);const v=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Yg(i,v,g);Si(i,v)}}catch(a){if(a instanceof Bn)throw a;Si(i,"network-request-failed",{message:String(a)})}}async function Rx(i,e,t,r,a={}){const l=await Go(i,e,t,r,a);return"mfaPendingCredential"in l&&Si(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function M1(i,e,t,r){const a=`${e}${t}?${r}`,l=i,c=l.config.emulator?Xg(i.config,a):`${i.config.apiScheme}://${a}`;return wx.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}let Cx=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Xn(this.auth,"network-request-failed")),Ix.get())})}};function Ah(i,e,t){const r={appName:i.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const a=Xn(i,e,r);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xx(i,e){return Go(i,"POST","/v1/accounts:delete",e)}async function Wh(i,e){return Go(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Nx(i,e=!1){const t=Ct(i),r=await t.getIdToken(e),a=Jg(r);Se(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:r,authTime:gu(yp(a.auth_time)),issuedAtTime:gu(yp(a.iat)),expirationTime:gu(yp(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function yp(i){return Number(i)*1e3}function Jg(i){const[e,t,r]=i.split(".");if(e===void 0||t===void 0||r===void 0)return Dh("JWT malformed, contained fewer than 3 sections"),null;try{const a=Gg(t);return a?JSON.parse(a):(Dh("Failed to decode base64 JWT payload"),null)}catch(a){return Dh("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Hb(i){const e=Jg(i);return Se(e,"internal-error"),Se(typeof e.exp<"u","internal-error"),Se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xu(i,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Bn&&Ox(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function Ox({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dx=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kp=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gu(this.lastLoginAt),this.creationTime=gu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jh(i){var e;const t=i.auth,r=await i.getIdToken(),a=await xu(i,Wh(t,{idToken:r}));Se(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];i._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?V1(l.providerUserInfo):[],m=kx(i.providerData,c),p=i.isAnonymous,g=!(i.email&&l.passwordHash)&&!(m!=null&&m.length),v=p?g:!1,E={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:m,metadata:new Kp(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(i,E)}async function Px(i){const e=Ct(i);await Jh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kx(i,e){return[...i.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function V1(i){return i.map(e=>{var{providerId:t}=e,r=Ho(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mx(i,e){const t=await k1(i,{},async()=>{const r=mr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,c=await M1(i,a,"/v1/token",`key=${l}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",P1.fetch()(c,{method:"POST",headers:m,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Vx(i,e){return Go(i,"POST","/v2/accounts:revokeToken",Wg(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vp=class Yp{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Se(e.idToken,"internal-error"),Se(typeof e.idToken<"u","internal-error"),Se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Se(e.length!==0,"internal-error");const t=Hb(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:a,expiresIn:l}=await Mx(e,t);this.updateTokensAndExpiration(r,a,Number(l))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:a,expirationTime:l}=t,c=new Yp;return r&&(Se(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),a&&(Se(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Se(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yp,this.toJSON())}_performRefresh(){return nr("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(i,e){Se(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}let Ao=class uu{constructor(e){var{uid:t,auth:r,stsTokenManager:a}=e,l=Ho(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Dx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Kp(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await xu(this,this.stsTokenManager.getToken(this.auth,e));return Se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Nx(this,e)}reload(){return Px(this)}_assign(e){this!==e&&(Se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new uu(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Jh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(It(this.auth.app))return Promise.reject(ha(this.auth));const e=await this.getIdToken();return await xu(this,xx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,a,l,c,m,p,g,v;const E=(r=t.displayName)!==null&&r!==void 0?r:void 0,S=(a=t.email)!==null&&a!==void 0?a:void 0,V=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,F=(c=t.photoURL)!==null&&c!==void 0?c:void 0,Y=(m=t.tenantId)!==null&&m!==void 0?m:void 0,U=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,te=(g=t.createdAt)!==null&&g!==void 0?g:void 0,ne=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:$,emailVerified:oe,isAnonymous:le,providerData:me,stsTokenManager:M}=t;Se($&&M,e,"internal-error");const R=vp.fromJSON(this.name,M);Se(typeof $=="string",e,"internal-error"),Gr(E,e.name),Gr(S,e.name),Se(typeof oe=="boolean",e,"internal-error"),Se(typeof le=="boolean",e,"internal-error"),Gr(V,e.name),Gr(F,e.name),Gr(Y,e.name),Gr(U,e.name),Gr(te,e.name),Gr(ne,e.name);const I=new uu({uid:$,auth:e,email:S,emailVerified:oe,displayName:E,isAnonymous:le,photoURL:F,phoneNumber:V,tenantId:Y,stsTokenManager:R,createdAt:te,lastLoginAt:ne});return me&&Array.isArray(me)&&(I.providerData=me.map(N=>Object.assign({},N))),U&&(I._redirectEventId=U),I}static async _fromIdTokenResponse(e,t,r=!1){const a=new vp;a.updateFromServerResponse(t);const l=new uu({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await Jh(l),l}static async _fromGetAccountInfoResponse(e,t,r){const a=t.users[0];Se(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?V1(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),m=new vp;m.updateFromIdToken(r);const p=new uu({uid:a.localId,auth:e,stsTokenManager:m,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Kp(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=new Map;function ir(i){lr(i instanceof Function,"Expected a class definition");let e=Gb.get(i);return e?(lr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Gb.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let L1=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};L1.type="NONE";const $b=L1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(i,e,t){return`firebase:${i}:${e}:${t}`}let Kb=class kh{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:a,name:l}=this.auth;this.fullUserKey=Ph(this.userKey,a.apiKey,l),this.fullPersistenceKey=Ph("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Wh(this.auth,{idToken:e}).catch(()=>{});return t?Ao._fromGetAccountInfoResponse(this.auth,t,e):null}return Ao._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new kh(ir($b),e,r);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||ir($b);const c=Ph(r,e.config.apiKey,e.name);let m=null;for(const g of t)try{const v=await g._get(c);if(v){let E;if(typeof v=="string"){const S=await Wh(e,{idToken:v}).catch(()=>{});if(!S)break;E=await Ao._fromGetAccountInfoResponse(e,S,v)}else E=Ao._fromJSON(e,v);g!==l&&(m=E),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new kh(l,e,r):(l=p[0],m&&await l._set(c,m.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new kh(l,e,r))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(B1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(U1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(q1(e))return"Blackberry";if(H1(e))return"Webos";if(j1(e))return"Safari";if((e.includes("chrome/")||z1(e))&&!e.includes("edge/"))return"Chrome";if(F1(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function U1(i=it()){return/firefox\//i.test(i)}function j1(i=it()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function z1(i=it()){return/crios\//i.test(i)}function B1(i=it()){return/iemobile/i.test(i)}function F1(i=it()){return/android/i.test(i)}function q1(i=it()){return/blackberry/i.test(i)}function H1(i=it()){return/webos/i.test(i)}function Zg(i=it()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Lx(i=it()){var e;return Zg(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ux(){return A1()&&document.documentMode===10}function G1(i=it()){return Zg(i)||F1(i)||H1(i)||q1(i)||/windows phone/i.test(i)||B1(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(i,e=[]){let t;switch(i){case"Browser":t=Yb(it());break;case"Worker":t=`${Yb(it())}-${i}`;break;default:t=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jx=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=l=>new Promise((c,m)=>{try{const p=e(l);c(p)}catch(p){m(p)}});r.onAbort=t,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zx(i,e={}){return Go(i,"GET","/v2/passwordPolicy",Wg(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx=6;let Fx=class{constructor(e){var t,r,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:Bx,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,a,l,c,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(r=p.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qx=class{constructor(e,t,r,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qb(this),this.idTokenSubscription=new Qb(this),this.beforeStateQueue=new jx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=D1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ir(t)),this._initializationPromise=this.queue(async()=>{var r,a,l;if(!this._deleted&&(this.persistenceManager=await Kb.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Wh(this,{idToken:e}),r=await Ao._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(It(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(m,m))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===m)&&(p!=null&&p.user)&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Jh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ax()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(It(this.app))return Promise.reject(ha(this));const t=e?Ct(e):null;return t&&Se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return It(this.app)?Promise.reject(ha(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return It(this.app)?Promise.reject(ha(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ir(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zx(this),t=new Fx(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _s("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Vx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ir(e)||this._popupRedirectResolver;Se(t,this,"argument-error"),this.redirectPersistenceManager=await Kb.create(this,[ir(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Se(m,this,"internal-error"),m.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,r,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(It(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&_x(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}};function xf(i){return Ct(i)}let Qb=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=w1(t=>this.observer=t)}get next(){return Se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ey={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Hx(i){ey=i}function Gx(i){return ey.loadJS(i)}function $x(){return ey.gapiScript}function Kx(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yx(i,e){const t=zu(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(ss(l,e??{}))return a;Si(a,"already-initialized")}return t.initialize({options:e})}function Qx(i,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ir);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Xx(i,e,t){const r=xf(i);Se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const a=!1,l=K1(e),{host:c,port:m}=Wx(e),p=m===null?"":`:${m}`,g={url:`${l}//${c}${p}/`},v=Object.freeze({host:c,port:m,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!r._canInitEmulator){Se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Se(ss(g,r.config.emulator)&&ss(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,qo(c)?(Rf("Auth",!0),v1(`${l}//${c}${p}`)):Jx()}function K1(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function Wx(i){const e=K1(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const l=a[1];return{host:l,port:Xb(r.substr(l.length+1))}}else{const[l,c]=r.split(":");return{host:l,port:Xb(c)}}}function Xb(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Jx(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Y1=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return nr("not implemented")}_getIdTokenResponse(e){return nr("not implemented")}_linkToIdToken(e,t){return nr("not implemented")}_getReauthenticationResolver(e){return nr("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io(i,e){return Rx(i,"POST","/v1/accounts:signInWithIdp",Wg(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zx="http://localhost";let Nf=class Qp extends Y1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Qp(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Si("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=t,l=Ho(t,["providerId","signInMethod"]);if(!r||!a)return null;const c=new Qp(r,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Io(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Io(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Io(e,t)}buildRequest(){const e={requestUri:Zx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=mr(t)}return e}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ty=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fu=class extends ty{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Q1=class po extends Fu{constructor(){super("facebook.com")}static credential(e){return Nf._fromParams({providerId:po.PROVIDER_ID,signInMethod:po.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return po.credentialFromTaggedObject(e)}static credentialFromError(e){return po.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return po.credential(e.oauthAccessToken)}catch{return null}}};Q1.FACEBOOK_SIGN_IN_METHOD="facebook.com";Q1.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ny=class go extends Fu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Nf._fromParams({providerId:go.PROVIDER_ID,signInMethod:go.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return go.credentialFromTaggedObject(e)}static credentialFromError(e){return go.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return go.credential(t,r)}catch{return null}}};ny.GOOGLE_SIGN_IN_METHOD="google.com";ny.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let X1=class yo extends Fu{constructor(){super("github.com")}static credential(e){return Nf._fromParams({providerId:yo.PROVIDER_ID,signInMethod:yo.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yo.credentialFromTaggedObject(e)}static credentialFromError(e){return yo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yo.credential(e.oauthAccessToken)}catch{return null}}};X1.GITHUB_SIGN_IN_METHOD="github.com";X1.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let W1=class vo extends Fu{constructor(){super("twitter.com")}static credential(e,t){return Nf._fromParams({providerId:vo.PROVIDER_ID,signInMethod:vo.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vo.credentialFromTaggedObject(e)}static credentialFromError(e){return vo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return vo.credential(t,r)}catch{return null}}};W1.TWITTER_SIGN_IN_METHOD="twitter.com";W1.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iy=class Xp{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,a=!1){const l=await Ao._fromIdTokenResponse(e,r,a),c=Wb(r);return new Xp({user:l,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const a=Wb(r);return new Xp({user:e,providerId:a,_tokenResponse:r,operationType:t})}};function Wb(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eN=class Wp extends Bn{constructor(e,t,r,a){var l;super(t.code,t.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,Wp.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,a){return new Wp(e,t,r,a)}};function J1(i,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?eN._fromErrorAndOperation(i,l,e,r):l})}async function tN(i,e,t=!1){const r=await xu(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return iy._forOperation(i,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nN(i,e,t=!1){const{auth:r}=i;if(It(r.app))return Promise.reject(ha(r));const a="reauthenticate";try{const l=await xu(i,J1(r,a,e,i),t);Se(l.idToken,r,"internal-error");const c=Jg(l.idToken);Se(c,r,"internal-error");const{sub:m}=c;return Se(i.uid===m,r,"user-mismatch"),iy._forOperation(i,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Si(r,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iN(i,e,t=!1){if(It(i.app))return Promise.reject(ha(i));const r="signIn",a=await J1(i,r,e),l=await iy._fromIdTokenResponse(i,r,a);return t||await i._updateCurrentUser(l.user),l}function rN(i,e,t,r){return Ct(i).onIdTokenChanged(e,t,r)}function sN(i,e,t){return Ct(i).beforeAuthStateChanged(e,t)}function Z1(i,e,t,r){return Ct(i).onAuthStateChanged(e,t,r)}function aN(i){return Ct(i).signOut()}const Zh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eA=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Zh,"1"),this.storage.removeItem(Zh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN=1e3,lN=10;let tA=class extends eA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=G1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),a=this.localCache[t];r!==a&&e(t,a,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,m,p)=>{this.notifyListeners(c,p)});return}const r=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},l=this.storage.getItem(r);Ux()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,lN):a()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},oN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};tA.type="LOCAL";const uN=tA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nA=class extends eA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};nA.type="SESSION";const iA=nA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rA=class sA{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const r=new sA(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const m=Array.from(c).map(async g=>g(t.origin,l)),p=await cN(m);t.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};rA.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(i="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hN=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((m,p)=>{const g=ry("",20);a.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},r);c={messageChannel:a,onMessage(E){const S=E;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),m(S.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(){return window}function fN(i){Ei().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(){return typeof Ei().WorkerGlobalScope<"u"&&typeof Ei().importScripts=="function"}async function dN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mN(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function pN(){return aA()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA="firebaseLocalStorageDb",gN=1,ef="firebaseLocalStorage",lA="fbase_key";let qu=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function Of(i,e){return i.transaction([ef],e?"readwrite":"readonly").objectStore(ef)}function yN(){const i=indexedDB.deleteDatabase(oA);return new qu(i).toPromise()}function Jp(){const i=indexedDB.open(oA,gN);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(ef,{keyPath:lA})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(ef)?e(r):(r.close(),await yN(),e(await Jp()))})})}async function Jb(i,e,t){const r=Of(i,!0).put({[lA]:e,value:t});return new qu(r).toPromise()}async function vN(i,e){const t=Of(i,!1).get(e),r=await new qu(t).toPromise();return r===void 0?null:r.value}function Zb(i,e){const t=Of(i,!0).delete(e);return new qu(t).toPromise()}const _N=800,bN=3;let uA=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>bN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return aA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rA._getInstance(pN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await dN(),!this.activeServiceWorker)return;this.sender=new hN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jp();return await Jb(e,Zh,"1"),await Zb(e,Zh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jb(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>vN(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zb(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Of(a,!1).getAll();return new qu(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_N)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};uA.type="LOCAL";const EN=uA;new Bu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(i,e){return e?ir(e):(Se(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sy=class extends Y1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Io(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Io(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Io(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function TN(i){return iN(i.auth,new sy(i),i.bypassAuthState)}function AN(i){const{auth:e,user:t}=i;return Se(t,e,"internal-error"),nN(t,new sy(i),i.bypassAuthState)}async function SN(i){const{auth:e,user:t}=i;return Se(t,e,"internal-error"),tN(t,new sy(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hA=class{constructor(e,t,r,a,l=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:a,tenantId:l,error:c,type:m}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:r,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TN;case"linkViaPopup":case"linkViaRedirect":return SN;case"reauthViaPopup":case"reauthViaRedirect":return AN;default:Si(this.auth,"internal-error")}}resolve(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=new Bu(2e3,1e4);async function IN(i,e,t){if(It(i.app))return Promise.reject(Xn(i,"operation-not-supported-in-this-environment"));const r=xf(i);bx(i,e,ty);const a=cA(r,t);return new oa(r,"signInViaPopup",e,a).executeNotNull()}class oa extends hA{constructor(e,t,r,a,l){super(e,t,a,l),this.provider=r,this.authWindow=null,this.pollId=null,oa.currentPopupAction&&oa.currentPopupAction.cancel(),oa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Se(e,this.auth,"internal-error"),e}async onExecution(){lr(this.filter.length===1,"Popup operations only handle one event");const e=ry();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oa.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wN.get())};e()}}oa.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN="pendingRedirect",Mh=new Map;let CN=class extends hA{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Mh.get(this.auth._key());if(!e){try{const r=await xN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Mh.set(this.auth._key(),e)}return this.bypassAuthState||Mh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function xN(i,e){const t=DN(e),r=ON(i);if(!await r._isAvailable())return!1;const a=await r._get(t)==="true";return await r._remove(t),a}function NN(i,e){Mh.set(i._key(),e)}function ON(i){return ir(i._redirectPersistence)}function DN(i){return Ph(RN,i.config.apiKey,i.name)}async function PN(i,e,t=!1){if(It(i.app))return Promise.reject(ha(i));const r=xf(i),a=cA(r,e),c=await new CN(r,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN=10*60*1e3;let MN=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VN(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!fA(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Xn(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kN&&this.cachedEventUids.clear(),this.cachedEventUids.has(eE(e))}saveEventToCache(e){this.cachedEventUids.add(eE(e)),this.lastProcessedEventTime=Date.now()}};function eE(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function fA({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VN(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fA(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LN(i,e={}){return Go(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jN=/^https?/;async function zN(i){if(i.config.emulator)return;const{authorizedDomains:e}=await LN(i);for(const t of e)try{if(BN(t))return}catch{}Si(i,"unauthorized-domain")}function BN(i){const e=$p(),{protocol:t,hostname:r}=new URL(e);if(i.startsWith("chrome-extension://")){const c=new URL(i);return c.hostname===""&&r===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===r}if(!jN.test(t))return!1;if(UN.test(i))return r===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=new Bu(3e4,6e4);function tE(){const i=Ei().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function qN(i){return new Promise((e,t)=>{var r,a,l;function c(){tE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tE(),t(Xn(i,"network-request-failed"))},timeout:FN.get()})}if(!((a=(r=Ei().gapi)===null||r===void 0?void 0:r.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=Ei().gapi)===null||l===void 0)&&l.load)c();else{const m=Kx("iframefcb");return Ei()[m]=()=>{gapi.load?c():t(Xn(i,"network-request-failed"))},Gx(`${$x()}?onload=${m}`).catch(p=>t(p))}}).catch(e=>{throw Vh=null,e})}let Vh=null;function HN(i){return Vh=Vh||qN(i),Vh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=new Bu(5e3,15e3),$N="__/auth/iframe",KN="emulator/auth/iframe",YN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XN(i){const e=i.config;Se(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Xg(e,KN):`https://${i.config.authDomain}/${$N}`,r={apiKey:e.apiKey,appName:i.name,v:xi},a=QN.get(i.config.apiHost);a&&(r.eid=a);const l=i._getFrameworks();return l.length&&(r.fw=l.join(",")),`${t}?${mr(r).slice(1)}`}async function WN(i){const e=await HN(i),t=Ei().gapi;return Se(t,i,"internal-error"),e.open({where:document.body,url:XN(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YN,dontclear:!0},r=>new Promise(async(a,l)=>{await r.restyle({setHideOnLeave:!1});const c=Xn(i,"network-request-failed"),m=Ei().setTimeout(()=>{l(c)},GN.get());function p(){Ei().clearTimeout(m),a(r)}r.ping(p).then(p,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZN=500,eO=600,tO="_blank",nO="http://localhost";class nE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iO(i,e,t,r=ZN,a=eO){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let m="";const p=Object.assign(Object.assign({},JN),{width:r.toString(),height:a.toString(),top:l,left:c}),g=it().toLowerCase();t&&(m=z1(g)?tO:t),U1(g)&&(e=e||nO,p.scrollbars="yes");const v=Object.entries(p).reduce((S,[V,F])=>`${S}${V}=${F},`,"");if(Lx(g)&&m!=="_self")return rO(e||"",m),new nE(null);const E=window.open(e||"",m,v);Se(E,i,"popup-blocked");try{E.focus()}catch{}return new nE(E)}function rO(i,e){const t=document.createElement("a");t.href=i,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO="__/auth/handler",aO="emulator/auth/handler",oO=encodeURIComponent("fac");async function iE(i,e,t,r,a,l){Se(i.config.authDomain,i,"auth-domain-config-required"),Se(i.config.apiKey,i,"invalid-api-key");const c={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:r,v:xi,eventId:a};if(e instanceof ty){e.setDefaultLanguage(i.languageCode),c.providerId=e.providerId||"",S1(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,E]of Object.entries({}))c[v]=E}if(e instanceof Fu){const v=e.getScopes().filter(E=>E!=="");v.length>0&&(c.scopes=v.join(","))}i.tenantId&&(c.tid=i.tenantId);const m=c;for(const v of Object.keys(m))m[v]===void 0&&delete m[v];const p=await i._getAppCheckToken(),g=p?`#${oO}=${encodeURIComponent(p)}`:"";return`${lO(i)}?${mr(m).slice(1)}${g}`}function lO({config:i}){return i.emulator?Xg(i,aO):`https://${i.authDomain}/${sO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="webStorageSupport";class uO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=iA,this._completeRedirectFn=PN,this._overrideRedirectResult=NN}async _openPopup(e,t,r,a){var l;lr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await iE(e,t,r,$p(),a);return iO(e,c,ry())}async _openRedirect(e,t,r,a){await this._originValidation(e);const l=await iE(e,t,r,$p(),a);return fN(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(lr(l,"If manager is not set, promise should be"),l)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await WN(e),r=new MN(e);return t.register("authEvent",a=>(Se(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:r.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_p,{type:_p},a=>{var l;const c=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[_p];c!==void 0&&t(!!c),Si(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=zN(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return G1()||j1()||Zg()}}const cO=uO;var rE="@firebase/auth",sE="1.10.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hO=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fO(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dO(i){as(new ar("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:m}=r.options;Se(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:c,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$1(i)},g=new qx(r,a,l,p);return Qx(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),as(new ar("auth-internal",e=>{const t=xf(e.getProvider("auth").getImmediate());return(r=>new hO(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),bi(rE,sE,fO(i)),bi(rE,sE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO=5*60,pO=y1("authIdTokenMaxAge")||mO;let aE=null;const gO=i=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>pO)return;const a=t==null?void 0:t.token;aE!==a&&(aE=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function Df(i=Kg()){const e=zu(i,"auth");if(e.isInitialized())return e.getImmediate();const t=Yx(i,{popupRedirectResolver:cO,persistence:[EN,uN,iA]}),r=y1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(r,location.origin);if(location.origin===l.origin){const c=gO(l.toString());sN(t,c,()=>c(t.currentUser)),rN(t,m=>c(m))}}const a=p1("auth");return a?Xx(t,`http://${a}`):Rf("Auth",!1),t}function yO(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}Hx({loadJS(i){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=e,r.onerror=a=>{const l=Xn("internal-error");l.customData=a,t(l)},r.type="text/javascript",r.charset="UTF-8",yO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dO("Browser");var vO="firebase",_O="11.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bi(vO,_O,"app");const bO={apiKey:"AIzaSyBu90rcUqw574sLzB_Ka-IRUlTGWo0sjBk",authDomain:"proyectouno-d09e0.firebaseapp.com",databaseURL:"https://proyectouno-d09e0-default-rtdb.firebaseio.com",projectId:"proyectouno-d09e0",storageBucket:"proyectouno-d09e0.firebasestorage.app",messagingSenderId:"567007730982",appId:"1:567007730982:web:cde41dd58a20780201f5e7",measurementId:"G-BJTNZ2M8DH"},Fn=C1(bO);var oE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var is,dA;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(M,R){function I(){}I.prototype=R.prototype,M.D=R.prototype,M.prototype=new I,M.prototype.constructor=M,M.C=function(N,O,P){for(var C=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)C[ze-2]=arguments[ze];return R.prototype[O].apply(N,C)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(M,R,I){I||(I=0);var N=Array(16);if(typeof R=="string")for(var O=0;16>O;++O)N[O]=R.charCodeAt(I++)|R.charCodeAt(I++)<<8|R.charCodeAt(I++)<<16|R.charCodeAt(I++)<<24;else for(O=0;16>O;++O)N[O]=R[I++]|R[I++]<<8|R[I++]<<16|R[I++]<<24;R=M.g[0],I=M.g[1],O=M.g[2];var P=M.g[3],C=R+(P^I&(O^P))+N[0]+3614090360&4294967295;R=I+(C<<7&4294967295|C>>>25),C=P+(O^R&(I^O))+N[1]+3905402710&4294967295,P=R+(C<<12&4294967295|C>>>20),C=O+(I^P&(R^I))+N[2]+606105819&4294967295,O=P+(C<<17&4294967295|C>>>15),C=I+(R^O&(P^R))+N[3]+3250441966&4294967295,I=O+(C<<22&4294967295|C>>>10),C=R+(P^I&(O^P))+N[4]+4118548399&4294967295,R=I+(C<<7&4294967295|C>>>25),C=P+(O^R&(I^O))+N[5]+1200080426&4294967295,P=R+(C<<12&4294967295|C>>>20),C=O+(I^P&(R^I))+N[6]+2821735955&4294967295,O=P+(C<<17&4294967295|C>>>15),C=I+(R^O&(P^R))+N[7]+4249261313&4294967295,I=O+(C<<22&4294967295|C>>>10),C=R+(P^I&(O^P))+N[8]+1770035416&4294967295,R=I+(C<<7&4294967295|C>>>25),C=P+(O^R&(I^O))+N[9]+2336552879&4294967295,P=R+(C<<12&4294967295|C>>>20),C=O+(I^P&(R^I))+N[10]+4294925233&4294967295,O=P+(C<<17&4294967295|C>>>15),C=I+(R^O&(P^R))+N[11]+2304563134&4294967295,I=O+(C<<22&4294967295|C>>>10),C=R+(P^I&(O^P))+N[12]+1804603682&4294967295,R=I+(C<<7&4294967295|C>>>25),C=P+(O^R&(I^O))+N[13]+4254626195&4294967295,P=R+(C<<12&4294967295|C>>>20),C=O+(I^P&(R^I))+N[14]+2792965006&4294967295,O=P+(C<<17&4294967295|C>>>15),C=I+(R^O&(P^R))+N[15]+1236535329&4294967295,I=O+(C<<22&4294967295|C>>>10),C=R+(O^P&(I^O))+N[1]+4129170786&4294967295,R=I+(C<<5&4294967295|C>>>27),C=P+(I^O&(R^I))+N[6]+3225465664&4294967295,P=R+(C<<9&4294967295|C>>>23),C=O+(R^I&(P^R))+N[11]+643717713&4294967295,O=P+(C<<14&4294967295|C>>>18),C=I+(P^R&(O^P))+N[0]+3921069994&4294967295,I=O+(C<<20&4294967295|C>>>12),C=R+(O^P&(I^O))+N[5]+3593408605&4294967295,R=I+(C<<5&4294967295|C>>>27),C=P+(I^O&(R^I))+N[10]+38016083&4294967295,P=R+(C<<9&4294967295|C>>>23),C=O+(R^I&(P^R))+N[15]+3634488961&4294967295,O=P+(C<<14&4294967295|C>>>18),C=I+(P^R&(O^P))+N[4]+3889429448&4294967295,I=O+(C<<20&4294967295|C>>>12),C=R+(O^P&(I^O))+N[9]+568446438&4294967295,R=I+(C<<5&4294967295|C>>>27),C=P+(I^O&(R^I))+N[14]+3275163606&4294967295,P=R+(C<<9&4294967295|C>>>23),C=O+(R^I&(P^R))+N[3]+4107603335&4294967295,O=P+(C<<14&4294967295|C>>>18),C=I+(P^R&(O^P))+N[8]+1163531501&4294967295,I=O+(C<<20&4294967295|C>>>12),C=R+(O^P&(I^O))+N[13]+2850285829&4294967295,R=I+(C<<5&4294967295|C>>>27),C=P+(I^O&(R^I))+N[2]+4243563512&4294967295,P=R+(C<<9&4294967295|C>>>23),C=O+(R^I&(P^R))+N[7]+1735328473&4294967295,O=P+(C<<14&4294967295|C>>>18),C=I+(P^R&(O^P))+N[12]+2368359562&4294967295,I=O+(C<<20&4294967295|C>>>12),C=R+(I^O^P)+N[5]+4294588738&4294967295,R=I+(C<<4&4294967295|C>>>28),C=P+(R^I^O)+N[8]+2272392833&4294967295,P=R+(C<<11&4294967295|C>>>21),C=O+(P^R^I)+N[11]+1839030562&4294967295,O=P+(C<<16&4294967295|C>>>16),C=I+(O^P^R)+N[14]+4259657740&4294967295,I=O+(C<<23&4294967295|C>>>9),C=R+(I^O^P)+N[1]+2763975236&4294967295,R=I+(C<<4&4294967295|C>>>28),C=P+(R^I^O)+N[4]+1272893353&4294967295,P=R+(C<<11&4294967295|C>>>21),C=O+(P^R^I)+N[7]+4139469664&4294967295,O=P+(C<<16&4294967295|C>>>16),C=I+(O^P^R)+N[10]+3200236656&4294967295,I=O+(C<<23&4294967295|C>>>9),C=R+(I^O^P)+N[13]+681279174&4294967295,R=I+(C<<4&4294967295|C>>>28),C=P+(R^I^O)+N[0]+3936430074&4294967295,P=R+(C<<11&4294967295|C>>>21),C=O+(P^R^I)+N[3]+3572445317&4294967295,O=P+(C<<16&4294967295|C>>>16),C=I+(O^P^R)+N[6]+76029189&4294967295,I=O+(C<<23&4294967295|C>>>9),C=R+(I^O^P)+N[9]+3654602809&4294967295,R=I+(C<<4&4294967295|C>>>28),C=P+(R^I^O)+N[12]+3873151461&4294967295,P=R+(C<<11&4294967295|C>>>21),C=O+(P^R^I)+N[15]+530742520&4294967295,O=P+(C<<16&4294967295|C>>>16),C=I+(O^P^R)+N[2]+3299628645&4294967295,I=O+(C<<23&4294967295|C>>>9),C=R+(O^(I|~P))+N[0]+4096336452&4294967295,R=I+(C<<6&4294967295|C>>>26),C=P+(I^(R|~O))+N[7]+1126891415&4294967295,P=R+(C<<10&4294967295|C>>>22),C=O+(R^(P|~I))+N[14]+2878612391&4294967295,O=P+(C<<15&4294967295|C>>>17),C=I+(P^(O|~R))+N[5]+4237533241&4294967295,I=O+(C<<21&4294967295|C>>>11),C=R+(O^(I|~P))+N[12]+1700485571&4294967295,R=I+(C<<6&4294967295|C>>>26),C=P+(I^(R|~O))+N[3]+2399980690&4294967295,P=R+(C<<10&4294967295|C>>>22),C=O+(R^(P|~I))+N[10]+4293915773&4294967295,O=P+(C<<15&4294967295|C>>>17),C=I+(P^(O|~R))+N[1]+2240044497&4294967295,I=O+(C<<21&4294967295|C>>>11),C=R+(O^(I|~P))+N[8]+1873313359&4294967295,R=I+(C<<6&4294967295|C>>>26),C=P+(I^(R|~O))+N[15]+4264355552&4294967295,P=R+(C<<10&4294967295|C>>>22),C=O+(R^(P|~I))+N[6]+2734768916&4294967295,O=P+(C<<15&4294967295|C>>>17),C=I+(P^(O|~R))+N[13]+1309151649&4294967295,I=O+(C<<21&4294967295|C>>>11),C=R+(O^(I|~P))+N[4]+4149444226&4294967295,R=I+(C<<6&4294967295|C>>>26),C=P+(I^(R|~O))+N[11]+3174756917&4294967295,P=R+(C<<10&4294967295|C>>>22),C=O+(R^(P|~I))+N[2]+718787259&4294967295,O=P+(C<<15&4294967295|C>>>17),C=I+(P^(O|~R))+N[9]+3951481745&4294967295,M.g[0]=M.g[0]+R&4294967295,M.g[1]=M.g[1]+(O+(C<<21&4294967295|C>>>11))&4294967295,M.g[2]=M.g[2]+O&4294967295,M.g[3]=M.g[3]+P&4294967295}r.prototype.u=function(M,R){R===void 0&&(R=M.length);for(var I=R-this.blockSize,N=this.B,O=this.h,P=0;P<R;){if(O==0)for(;P<=I;)a(this,M,P),P+=this.blockSize;if(typeof M=="string"){for(;P<R;)if(N[O++]=M.charCodeAt(P++),O==this.blockSize){a(this,N),O=0;break}}else for(;P<R;)if(N[O++]=M[P++],O==this.blockSize){a(this,N),O=0;break}}this.h=O,this.o+=R},r.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var R=1;R<M.length-8;++R)M[R]=0;var I=8*this.o;for(R=M.length-8;R<M.length;++R)M[R]=I&255,I/=256;for(this.u(M),M=Array(16),R=I=0;4>R;++R)for(var N=0;32>N;N+=8)M[I++]=this.g[R]>>>N&255;return M};function l(M,R){var I=m;return Object.prototype.hasOwnProperty.call(I,M)?I[M]:I[M]=R(M)}function c(M,R){this.h=R;for(var I=[],N=!0,O=M.length-1;0<=O;O--){var P=M[O]|0;N&&P==R||(I[O]=P,N=!1)}this.g=I}var m={};function p(M){return-128<=M&&128>M?l(M,function(R){return new c([R|0],0>R?-1:0)}):new c([M|0],0>M?-1:0)}function g(M){if(isNaN(M)||!isFinite(M))return E;if(0>M)return U(g(-M));for(var R=[],I=1,N=0;M>=I;N++)R[N]=M/I|0,I*=4294967296;return new c(R,0)}function v(M,R){if(M.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(M.charAt(0)=="-")return U(v(M.substring(1),R));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=g(Math.pow(R,8)),N=E,O=0;O<M.length;O+=8){var P=Math.min(8,M.length-O),C=parseInt(M.substring(O,O+P),R);8>P?(P=g(Math.pow(R,P)),N=N.j(P).add(g(C))):(N=N.j(I),N=N.add(g(C)))}return N}var E=p(0),S=p(1),V=p(16777216);i=c.prototype,i.m=function(){if(Y(this))return-U(this).m();for(var M=0,R=1,I=0;I<this.g.length;I++){var N=this.i(I);M+=(0<=N?N:4294967296+N)*R,R*=4294967296}return M},i.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(F(this))return"0";if(Y(this))return"-"+U(this).toString(M);for(var R=g(Math.pow(M,6)),I=this,N="";;){var O=oe(I,R).g;I=te(I,O.j(R));var P=((0<I.g.length?I.g[0]:I.h)>>>0).toString(M);if(I=O,F(I))return P+N;for(;6>P.length;)P="0"+P;N=P+N}},i.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function F(M){if(M.h!=0)return!1;for(var R=0;R<M.g.length;R++)if(M.g[R]!=0)return!1;return!0}function Y(M){return M.h==-1}i.l=function(M){return M=te(this,M),Y(M)?-1:F(M)?0:1};function U(M){for(var R=M.g.length,I=[],N=0;N<R;N++)I[N]=~M.g[N];return new c(I,~M.h).add(S)}i.abs=function(){return Y(this)?U(this):this},i.add=function(M){for(var R=Math.max(this.g.length,M.g.length),I=[],N=0,O=0;O<=R;O++){var P=N+(this.i(O)&65535)+(M.i(O)&65535),C=(P>>>16)+(this.i(O)>>>16)+(M.i(O)>>>16);N=C>>>16,P&=65535,C&=65535,I[O]=C<<16|P}return new c(I,I[I.length-1]&-2147483648?-1:0)};function te(M,R){return M.add(U(R))}i.j=function(M){if(F(this)||F(M))return E;if(Y(this))return Y(M)?U(this).j(U(M)):U(U(this).j(M));if(Y(M))return U(this.j(U(M)));if(0>this.l(V)&&0>M.l(V))return g(this.m()*M.m());for(var R=this.g.length+M.g.length,I=[],N=0;N<2*R;N++)I[N]=0;for(N=0;N<this.g.length;N++)for(var O=0;O<M.g.length;O++){var P=this.i(N)>>>16,C=this.i(N)&65535,ze=M.i(O)>>>16,Je=M.i(O)&65535;I[2*N+2*O]+=C*Je,ne(I,2*N+2*O),I[2*N+2*O+1]+=P*Je,ne(I,2*N+2*O+1),I[2*N+2*O+1]+=C*ze,ne(I,2*N+2*O+1),I[2*N+2*O+2]+=P*ze,ne(I,2*N+2*O+2)}for(N=0;N<R;N++)I[N]=I[2*N+1]<<16|I[2*N];for(N=R;N<2*R;N++)I[N]=0;return new c(I,0)};function ne(M,R){for(;(M[R]&65535)!=M[R];)M[R+1]+=M[R]>>>16,M[R]&=65535,R++}function $(M,R){this.g=M,this.h=R}function oe(M,R){if(F(R))throw Error("division by zero");if(F(M))return new $(E,E);if(Y(M))return R=oe(U(M),R),new $(U(R.g),U(R.h));if(Y(R))return R=oe(M,U(R)),new $(U(R.g),R.h);if(30<M.g.length){if(Y(M)||Y(R))throw Error("slowDivide_ only works with positive integers.");for(var I=S,N=R;0>=N.l(M);)I=le(I),N=le(N);var O=me(I,1),P=me(N,1);for(N=me(N,2),I=me(I,2);!F(N);){var C=P.add(N);0>=C.l(M)&&(O=O.add(I),P=C),N=me(N,1),I=me(I,1)}return R=te(M,O.j(R)),new $(O,R)}for(O=E;0<=M.l(R);){for(I=Math.max(1,Math.floor(M.m()/R.m())),N=Math.ceil(Math.log(I)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),P=g(I),C=P.j(R);Y(C)||0<C.l(M);)I-=N,P=g(I),C=P.j(R);F(P)&&(P=S),O=O.add(P),M=te(M,C)}return new $(O,M)}i.A=function(M){return oe(this,M).h},i.and=function(M){for(var R=Math.max(this.g.length,M.g.length),I=[],N=0;N<R;N++)I[N]=this.i(N)&M.i(N);return new c(I,this.h&M.h)},i.or=function(M){for(var R=Math.max(this.g.length,M.g.length),I=[],N=0;N<R;N++)I[N]=this.i(N)|M.i(N);return new c(I,this.h|M.h)},i.xor=function(M){for(var R=Math.max(this.g.length,M.g.length),I=[],N=0;N<R;N++)I[N]=this.i(N)^M.i(N);return new c(I,this.h^M.h)};function le(M){for(var R=M.g.length+1,I=[],N=0;N<R;N++)I[N]=M.i(N)<<1|M.i(N-1)>>>31;return new c(I,M.h)}function me(M,R){var I=R>>5;R%=32;for(var N=M.g.length-I,O=[],P=0;P<N;P++)O[P]=0<R?M.i(P+I)>>>R|M.i(P+I+1)<<32-R:M.i(P+I);return new c(O,M.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,dA=r,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,is=c}).apply(typeof oE<"u"?oE:typeof self<"u"?self:typeof window<"u"?window:{});var Sh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mA,cu,pA,Lh,Zp,gA,yA,vA;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,y,_){return h==Array.prototype||h==Object.prototype||(h[y]=_.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sh=="object"&&Sh];for(var y=0;y<h.length;++y){var _=h[y];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var r=t(this);function a(h,y){if(y)e:{var _=r;h=h.split(".");for(var w=0;w<h.length-1;w++){var j=h[w];if(!(j in _))break e;_=_[j]}h=h[h.length-1],w=_[h],y=y(w),y!=w&&y!=null&&e(_,h,{configurable:!0,writable:!0,value:y})}}function l(h,y){h instanceof String&&(h+="");var _=0,w=!1,j={next:function(){if(!w&&_<h.length){var G=_++;return{value:y(G,h[G]),done:!1}}return w=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}a("Array.prototype.values",function(h){return h||function(){return l(this,function(y,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},m=this||self;function p(h){var y=typeof h;return y=y!="object"?y:h?Array.isArray(h)?"array":y:"null",y=="array"||y=="object"&&typeof h.length=="number"}function g(h){var y=typeof h;return y=="object"&&h!=null||y=="function"}function v(h,y,_){return h.call.apply(h.bind,arguments)}function E(h,y,_){if(!h)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,w),h.apply(y,j)}}return function(){return h.apply(y,arguments)}}function S(h,y,_){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:E,S.apply(null,arguments)}function V(h,y){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),h.apply(this,w)}}function F(h,y){function _(){}_.prototype=y.prototype,h.aa=y.prototype,h.prototype=new _,h.prototype.constructor=h,h.Qb=function(w,j,G){for(var ce=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)ce[Be-2]=arguments[Be];return y.prototype[j].apply(w,ce)}}function Y(h){const y=h.length;if(0<y){const _=Array(y);for(let w=0;w<y;w++)_[w]=h[w];return _}return[]}function U(h,y){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(p(w)){const j=h.length||0,G=w.length||0;h.length=j+G;for(let ce=0;ce<G;ce++)h[j+ce]=w[ce]}else h.push(w)}}class te{constructor(y,_){this.i=y,this.j=_,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function ne(h){return/^[\s\xa0]*$/.test(h)}function $(){var h=m.navigator;return h&&(h=h.userAgent)?h:""}function oe(h){return oe[" "](h),h}oe[" "]=function(){};var le=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function me(h,y,_){for(const w in h)y.call(_,h[w],w,h)}function M(h,y){for(const _ in h)y.call(void 0,h[_],_,h)}function R(h){const y={};for(const _ in h)y[_]=h[_];return y}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(h,y){let _,w;for(let j=1;j<arguments.length;j++){w=arguments[j];for(_ in w)h[_]=w[_];for(let G=0;G<I.length;G++)_=I[G],Object.prototype.hasOwnProperty.call(w,_)&&(h[_]=w[_])}}function O(h){var y=1;h=h.split(":");const _=[];for(;0<y&&h.length;)_.push(h.shift()),y--;return h.length&&_.push(h.join(":")),_}function P(h){m.setTimeout(()=>{throw h},0)}function C(){var h=De;let y=null;return h.g&&(y=h.g,h.g=h.g.next,h.g||(h.h=null),y.next=null),y}class ze{constructor(){this.h=this.g=null}add(y,_){const w=Je.get();w.set(y,_),this.h?this.h.next=w:this.g=w,this.h=w}}var Je=new te(()=>new K,h=>h.reset());class K{constructor(){this.next=this.g=this.h=null}set(y,_){this.h=y,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let re,de=!1,De=new ze,D=()=>{const h=m.Promise.resolve(void 0);re=()=>{h.then(ee)}};var ee=()=>{for(var h;h=C();){try{h.h.call(h.g)}catch(_){P(_)}var y=Je;y.j(h),100>y.h&&(y.h++,h.next=y.g,y.g=h)}de=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(h,y){this.type=h,this.g=this.target=y,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var ve=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var h=!1,y=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const _=()=>{};m.addEventListener("test",_,y),m.removeEventListener("test",_,y)}catch{}return h}();function Pe(h,y){if(se.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var _=this.type=h.type,w=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=y,y=h.relatedTarget){if(le){e:{try{oe(y.nodeName);var j=!0;break e}catch{}j=!1}j||(y=null)}}else _=="mouseover"?y=h.fromElement:_=="mouseout"&&(y=h.toElement);this.relatedTarget=y,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:we[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Pe.aa.h.call(this)}}F(Pe,se);var we={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Vt="closure_listenable_"+(1e6*Math.random()|0),st=0;function Jn(h,y,_,w,j){this.listener=h,this.proxy=null,this.src=y,this.type=_,this.capture=!!w,this.ha=j,this.key=++st,this.da=this.fa=!1}function gr(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Ni(h){this.src=h,this.g={},this.h=0}Ni.prototype.add=function(h,y,_,w,j){var G=h.toString();h=this.g[G],h||(h=this.g[G]=[],this.h++);var ce=Ss(h,y,w,j);return-1<ce?(y=h[ce],_||(y.fa=!1)):(y=new Jn(y,this.src,G,!!w,j),y.fa=_,h.push(y)),y};function As(h,y){var _=y.type;if(_ in h.g){var w=h.g[_],j=Array.prototype.indexOf.call(w,y,void 0),G;(G=0<=j)&&Array.prototype.splice.call(w,j,1),G&&(gr(y),h.g[_].length==0&&(delete h.g[_],h.h--))}}function Ss(h,y,_,w){for(var j=0;j<h.length;++j){var G=h[j];if(!G.da&&G.listener==y&&G.capture==!!_&&G.ha==w)return j}return-1}var ws="closure_lm_"+(1e6*Math.random()|0),Zo={};function Zu(h,y,_,w,j){if(Array.isArray(y)){for(var G=0;G<y.length;G++)Zu(h,y[G],_,w,j);return null}return _=ec(_),h&&h[Vt]?h.K(y,_,g(w)?!!w.capture:!1,j):Rn(h,y,_,!1,w,j)}function Rn(h,y,_,w,j,G){if(!y)throw Error("Invalid event type");var ce=g(j)?!!j.capture:!!j,Be=Aa(h);if(Be||(h[ws]=Be=new Ni(h)),_=Be.add(y,_,w,ce,G),_.proxy)return _;if(w=sd(),_.proxy=w,w.src=h,w.listener=_,h.addEventListener)ve||(j=ce),j===void 0&&(j=!1),h.addEventListener(y.toString(),w,j);else if(h.attachEvent)h.attachEvent(Is(y.toString()),w);else if(h.addListener&&h.removeListener)h.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function sd(){function h(_){return y.call(h.src,h.listener,_)}const y=ad;return h}function el(h,y,_,w,j){if(Array.isArray(y))for(var G=0;G<y.length;G++)el(h,y[G],_,w,j);else w=g(w)?!!w.capture:!!w,_=ec(_),h&&h[Vt]?(h=h.i,y=String(y).toString(),y in h.g&&(G=h.g[y],_=Ss(G,_,w,j),-1<_&&(gr(G[_]),Array.prototype.splice.call(G,_,1),G.length==0&&(delete h.g[y],h.h--)))):h&&(h=Aa(h))&&(y=h.g[y.toString()],h=-1,y&&(h=Ss(y,_,w,j)),(_=-1<h?y[h]:null)&&Ta(_))}function Ta(h){if(typeof h!="number"&&h&&!h.da){var y=h.src;if(y&&y[Vt])As(y.i,h);else{var _=h.type,w=h.proxy;y.removeEventListener?y.removeEventListener(_,w,h.capture):y.detachEvent?y.detachEvent(Is(_),w):y.addListener&&y.removeListener&&y.removeListener(w),(_=Aa(y))?(As(_,h),_.h==0&&(_.src=null,y[ws]=null)):gr(h)}}}function Is(h){return h in Zo?Zo[h]:Zo[h]="on"+h}function ad(h,y){if(h.da)h=!0;else{y=new Pe(y,this);var _=h.listener,w=h.ha||h.src;h.fa&&Ta(h),h=_.call(w,y)}return h}function Aa(h){return h=h[ws],h instanceof Ni?h:null}var tl="__closure_events_fn_"+(1e9*Math.random()>>>0);function ec(h){return typeof h=="function"?h:(h[tl]||(h[tl]=function(y){return h.handleEvent(y)}),h[tl])}function dt(){ue.call(this),this.i=new Ni(this),this.M=this,this.F=null}F(dt,ue),dt.prototype[Vt]=!0,dt.prototype.removeEventListener=function(h,y,_,w){el(this,h,y,_,w)};function Qe(h,y){var _,w=h.F;if(w)for(_=[];w;w=w.F)_.push(w);if(h=h.M,w=y.type||y,typeof y=="string")y=new se(y,h);else if(y instanceof se)y.target=y.target||h;else{var j=y;y=new se(w,h),N(y,j)}if(j=!0,_)for(var G=_.length-1;0<=G;G--){var ce=y.g=_[G];j=gn(ce,w,!0,y)&&j}if(ce=y.g=h,j=gn(ce,w,!0,y)&&j,j=gn(ce,w,!1,y)&&j,_)for(G=0;G<_.length;G++)ce=y.g=_[G],j=gn(ce,w,!1,y)&&j}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var h=this.i,y;for(y in h.g){for(var _=h.g[y],w=0;w<_.length;w++)gr(_[w]);delete h.g[y],h.h--}}this.F=null},dt.prototype.K=function(h,y,_,w){return this.i.add(String(h),y,!1,_,w)},dt.prototype.L=function(h,y,_,w){return this.i.add(String(h),y,!0,_,w)};function gn(h,y,_,w){if(y=h.i.g[String(y)],!y)return!0;y=y.concat();for(var j=!0,G=0;G<y.length;++G){var ce=y[G];if(ce&&!ce.da&&ce.capture==_){var Be=ce.listener,Nt=ce.ha||ce.src;ce.fa&&As(h.i,ce),j=Be.call(Nt,w)!==!1&&j}}return j&&!w.defaultPrevented}function Wt(h,y,_){if(typeof h=="function")_&&(h=S(h,_));else if(h&&typeof h.handleEvent=="function")h=S(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:m.setTimeout(h,y||0)}function tc(h){h.g=Wt(()=>{h.g=null,h.i&&(h.i=!1,tc(h))},h.l);const y=h.h;h.h=null,h.m.apply(null,y)}class od extends ue{constructor(y,_){super(),this.m=y,this.l=_,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:tc(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rs(h){ue.call(this),this.h=h,this.g={}}F(Rs,ue);var Cs=[];function xs(h){me(h.g,function(y,_){this.g.hasOwnProperty(_)&&Ta(y)},h),h.g={}}Rs.prototype.N=function(){Rs.aa.N.call(this),xs(this)},Rs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qn=m.JSON.stringify,Sa=m.JSON.parse,Ns=class{stringify(h){return m.JSON.stringify(h,void 0)}parse(h){return m.JSON.parse(h,void 0)}};function nl(){}nl.prototype.h=null;function il(h){return h.h||(h.h=h.i())}function rl(){}var Oi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Di(){se.call(this,"d")}F(Di,se);function sl(){se.call(this,"c")}F(sl,se);var Zn={},al=null;function yr(){return al=al||new dt}Zn.La="serverreachability";function wa(h){se.call(this,Zn.La,h)}F(wa,se);function vr(h){const y=yr();Qe(y,new wa(y))}Zn.STAT_EVENT="statevent";function nc(h,y){se.call(this,Zn.STAT_EVENT,h),this.stat=y}F(nc,se);function lt(h){const y=yr();Qe(y,new nc(y,h))}Zn.Ma="timingevent";function xt(h,y){se.call(this,Zn.Ma,h),this.size=y}F(xt,se);function Et(h,y){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){h()},y)}function Cn(){this.g=!0}Cn.prototype.xa=function(){this.g=!1};function ol(h,y,_,w,j,G){h.info(function(){if(h.g)if(G)for(var ce="",Be=G.split("&"),Nt=0;Nt<Be.length;Nt++){var Fe=Be[Nt].split("=");if(1<Fe.length){var Ut=Fe[0];Fe=Fe[1];var Ot=Ut.split("_");ce=2<=Ot.length&&Ot[1]=="type"?ce+(Ut+"="+Fe+"&"):ce+(Ut+"=redacted&")}}else ce=null;else ce=G;return"XMLHTTP REQ ("+w+") [attempt "+j+"]: "+y+`
`+_+`
`+ce})}function ld(h,y,_,w,j,G,ce){h.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+j+"]: "+y+`
`+_+`
`+G+" "+ce})}function _r(h,y,_,w){h.info(function(){return"XMLHTTP TEXT ("+y+"): "+Os(h,_)+(w?" "+w:"")})}function ic(h,y){h.info(function(){return"TIMEOUT: "+y})}Cn.prototype.info=function(){};function Os(h,y){if(!h.g)return y;if(!y)return null;try{var _=JSON.parse(y);if(_){for(h=0;h<_.length;h++)if(Array.isArray(_[h])){var w=_[h];if(!(2>w.length)){var j=w[1];if(Array.isArray(j)&&!(1>j.length)){var G=j[0];if(G!="noop"&&G!="stop"&&G!="close")for(var ce=1;ce<j.length;ce++)j[ce]=""}}}}return qn(_)}catch{return y}}var br={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Pi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ei;function ti(){}F(ti,nl),ti.prototype.g=function(){return new XMLHttpRequest},ti.prototype.i=function(){return{}},ei=new ti;function an(h,y,_,w){this.j=h,this.i=y,this.l=_,this.R=w||1,this.U=new Rs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gt}function gt(){this.i=null,this.g="",this.h=!1}var ll={},Ia={};function Hn(h,y,_){h.L=1,h.v=Vs(yn(y)),h.m=_,h.P=!0,ki(h,null)}function ki(h,y){h.F=Date.now(),Ds(h),h.A=yn(h.v);var _=h.A,w=h.R;Array.isArray(w)||(w=[String(w)]),ml(_.i,"t",w),h.C=0,_=h.j.J,h.h=new gt,h.g=_c(h.j,_?y:null,!h.m),0<h.O&&(h.M=new od(S(h.Y,h,h.g),h.O)),y=h.U,_=h.g,w=h.ca;var j="readystatechange";Array.isArray(j)||(j&&(Cs[0]=j.toString()),j=Cs);for(var G=0;G<j.length;G++){var ce=Zu(_,j[G],w||y.handleEvent,!1,y.h||y);if(!ce)break;y.g[ce.key]=ce}y=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,y)):(h.u="GET",h.g.ea(h.A,h.u,null,y)),vr(),ol(h.i,h.u,h.A,h.l,h.R,h.m)}an.prototype.ca=function(h){h=h.target;const y=this.M;y&&Dn(h)==3?y.j():this.Y(h)},an.prototype.Y=function(h){try{if(h==this.g)e:{const Ot=Dn(this.g);var y=this.g.Ba();const Fi=this.g.Z();if(!(3>Ot)&&(Ot!=3||this.g&&(this.h.h||this.g.oa()||hc(this.g)))){this.J||Ot!=4||y==7||(y==8||0>=Fi?vr(3):vr(2)),Er(this);var _=this.g.Z();this.X=_;t:if(rc(this)){var w=hc(this.g);h="";var j=w.length,G=Dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qt(this),ni(this);var ce="";break t}this.h.i=new m.TextDecoder}for(y=0;y<j;y++)this.h.h=!0,h+=this.h.i.decode(w[y],{stream:!(G&&y==j-1)});w.length=0,this.h.g+=h,this.C=0,ce=this.h.g}else ce=this.g.oa();if(this.o=_==200,ld(this.i,this.u,this.A,this.l,this.R,Ot,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,Nt=this.g;if((Be=Nt.g?Nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ne(Be)){var Fe=Be;break t}}Fe=null}if(_=Fe)_r(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ps(this,_);else{this.o=!1,this.s=3,lt(12),qt(this),ni(this);break e}}if(this.P){_=!0;let Ht;for(;!this.J&&this.C<ce.length;)if(Ht=sc(this,ce),Ht==Ia){Ot==4&&(this.s=4,lt(14),_=!1),_r(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==ll){this.s=4,lt(15),_r(this.i,this.l,ce,"[Invalid Chunk]"),_=!1;break}else _r(this.i,this.l,Ht,null),Ps(this,Ht);if(rc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ot!=4||ce.length!=0||this.h.h||(this.s=1,lt(16),_=!1),this.o=this.o&&_,!_)_r(this.i,this.l,ce,"[Invalid Chunked Response]"),qt(this),ni(this);else if(0<ce.length&&!this.W){this.W=!0;var Ut=this.j;Ut.g==this&&Ut.ba&&!Ut.M&&(Ut.j.info("Great, no buffering proxy detected. Bytes received: "+ce.length),Hs(Ut),Ut.M=!0,lt(11))}}else _r(this.i,this.l,ce,null),Ps(this,ce);Ot==4&&qt(this),this.o&&!this.J&&(Ot==4?gc(this.j,this):(this.o=!1,Ds(this)))}else dd(this.g),_==400&&0<ce.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),qt(this),ni(this)}}}catch{}finally{}};function rc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function sc(h,y){var _=h.C,w=y.indexOf(`
`,_);return w==-1?Ia:(_=Number(y.substring(_,w)),isNaN(_)?ll:(w+=1,w+_>y.length?Ia:(y=y.slice(w,w+_),h.C=w+_,y)))}an.prototype.cancel=function(){this.J=!0,qt(this)};function Ds(h){h.S=Date.now()+h.I,ac(h,h.I)}function ac(h,y){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Et(S(h.ba,h),y)}function Er(h){h.B&&(m.clearTimeout(h.B),h.B=null)}an.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(ic(this.i,this.A),this.L!=2&&(vr(),lt(17)),qt(this),this.s=2,ni(this)):ac(this,this.S-h)};function ni(h){h.j.G==0||h.J||gc(h.j,h)}function qt(h){Er(h);var y=h.M;y&&typeof y.ma=="function"&&y.ma(),h.M=null,xs(h.U),h.g&&(y=h.g,h.g=null,y.abort(),y.ma())}function Ps(h,y){try{var _=h.j;if(_.G!=0&&(_.g==h||ul(_.h,h))){if(!h.K&&ul(_.h,h)&&_.G==3){try{var w=_.Da.g.parse(y)}catch{w=null}if(Array.isArray(w)&&w.length==3){var j=w;if(j[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<h.F)Ua(_),Va(_);else break e;_l(_),lt(18)}}else _.za=j[1],0<_.za-_.T&&37500>j[2]&&_.F&&_.v==0&&!_.C&&(_.C=Et(S(_.Za,_),6e3));if(1>=Ca(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Bi(_,11)}else if((h.K||_.g==h)&&Ua(_),!ne(y))for(j=_.Da.g.parse(y),y=0;y<j.length;y++){let Fe=j[y];if(_.T=Fe[0],Fe=Fe[1],_.G==2)if(Fe[0]=="c"){_.K=Fe[1],_.ia=Fe[2];const Ut=Fe[3];Ut!=null&&(_.la=Ut,_.j.info("VER="+_.la));const Ot=Fe[4];Ot!=null&&(_.Aa=Ot,_.j.info("SVER="+_.Aa));const Fi=Fe[5];Fi!=null&&typeof Fi=="number"&&0<Fi&&(w=1.5*Fi,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const Ht=h.g;if(Ht){const ui=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ui){var G=w.h;G.g||ui.indexOf("spdy")==-1&&ui.indexOf("quic")==-1&&ui.indexOf("h2")==-1||(G.j=G.l,G.g=new Set,G.h&&(xa(G,G.h),G.h=null))}if(w.D){const El=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;El&&(w.ya=El,Ze(w.I,w.D,El))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-h.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var ce=h;if(w.qa=vc(w,w.J?w.ia:null,w.W),ce.K){on(w.h,ce);var Be=ce,Nt=w.L;Nt&&(Be.I=Nt),Be.B&&(Er(Be),Ds(Be)),w.g=ce}else mc(w);0<_.i.length&&La(_)}else Fe[0]!="stop"&&Fe[0]!="close"||Bi(_,7);else _.G==3&&(Fe[0]=="stop"||Fe[0]=="close"?Fe[0]=="stop"?Bi(_,7):yl(_):Fe[0]!="noop"&&_.l&&_.l.ta(Fe),_.v=0)}}vr(4)}catch{}}var oc=class{constructor(h,y){this.g=h,this.map=y}};function Mi(h){this.l=h||10,m.PerformanceNavigationTiming?(h=m.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ra(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Ca(h){return h.h?1:h.g?h.g.size:0}function ul(h,y){return h.h?h.h==y:h.g?h.g.has(y):!1}function xa(h,y){h.g?h.g.add(y):h.h=y}function on(h,y){h.h&&h.h==y?h.h=null:h.g&&h.g.has(y)&&h.g.delete(y)}Mi.prototype.cancel=function(){if(this.i=cl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function cl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let y=h.i;for(const _ of h.g.values())y=y.concat(_.D);return y}return Y(h.i)}function ud(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var y=[],_=h.length,w=0;w<_;w++)y.push(h[w]);return y}y=[],_=0;for(w in h)y[_++]=h[w];return y}function Na(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var y=[];h=h.length;for(var _=0;_<h;_++)y.push(_);return y}y=[],_=0;for(const w in h)y[_++]=w;return y}}}function hl(h,y){if(h.forEach&&typeof h.forEach=="function")h.forEach(y,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,y,void 0);else for(var _=Na(h),w=ud(h),j=w.length,G=0;G<j;G++)y.call(void 0,w[G],_&&_[G],h)}var ks=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cd(h,y){if(h){h=h.split("&");for(var _=0;_<h.length;_++){var w=h[_].indexOf("="),j=null;if(0<=w){var G=h[_].substring(0,w);j=h[_].substring(w+1)}else G=h[_];y(G,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Tt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Tt){this.h=h.h,Ms(this,h.j),this.o=h.o,this.g=h.g,Tr(this,h.s),this.l=h.l;var y=h.i,_=new Li;_.i=y.i,y.g&&(_.g=new Map(y.g),_.h=y.h),Vi(this,_),this.m=h.m}else h&&(y=String(h).match(ks))?(this.h=!1,Ms(this,y[1]||"",!0),this.o=xn(y[2]||""),this.g=xn(y[3]||"",!0),Tr(this,y[4]),this.l=xn(y[5]||"",!0),Vi(this,y[6]||"",!0),this.m=xn(y[7]||"")):(this.h=!1,this.i=new Li(null,this.h))}Tt.prototype.toString=function(){var h=[],y=this.j;y&&h.push(Ls(y,fl,!0),":");var _=this.g;return(_||y=="file")&&(h.push("//"),(y=this.o)&&h.push(Ls(y,fl,!0),"@"),h.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&h.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&h.push("/"),h.push(Ls(_,_.charAt(0)=="/"?hd:dl,!0))),(_=this.i.toString())&&h.push("?",_),(_=this.m)&&h.push("#",Ls(_,Oa)),h.join("")};function yn(h){return new Tt(h)}function Ms(h,y,_){h.j=_?xn(y,!0):y,h.j&&(h.j=h.j.replace(/:$/,""))}function Tr(h,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);h.s=y}else h.s=null}function Vi(h,y,_){y instanceof Li?(h.i=y,uc(h.i,h.h)):(_||(y=Ls(y,fd)),h.i=new Li(y,h.h))}function Ze(h,y,_){h.i.set(y,_)}function Vs(h){return Ze(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function xn(h,y){return h?y?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Ls(h,y,_){return typeof h=="string"?(h=encodeURI(h).replace(y,lc),_&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function lc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var fl=/[#\/\?@]/g,dl=/[#\?:]/g,hd=/[#\?]/g,fd=/[#\?@]/g,Oa=/#/g;function Li(h,y){this.h=this.g=null,this.i=h||null,this.j=!!y}function Nn(h){h.g||(h.g=new Map,h.h=0,h.i&&cd(h.i,function(y,_){h.add(decodeURIComponent(y.replace(/\+/g," ")),_)}))}i=Li.prototype,i.add=function(h,y){Nn(this),this.i=null,h=ii(this,h);var _=this.g.get(h);return _||this.g.set(h,_=[]),_.push(y),this.h+=1,this};function Ui(h,y){Nn(h),y=ii(h,y),h.g.has(y)&&(h.i=null,h.h-=h.g.get(y).length,h.g.delete(y))}function ji(h,y){return Nn(h),y=ii(h,y),h.g.has(y)}i.forEach=function(h,y){Nn(this),this.g.forEach(function(_,w){_.forEach(function(j){h.call(y,j,w,this)},this)},this)},i.na=function(){Nn(this);const h=Array.from(this.g.values()),y=Array.from(this.g.keys()),_=[];for(let w=0;w<y.length;w++){const j=h[w];for(let G=0;G<j.length;G++)_.push(y[w])}return _},i.V=function(h){Nn(this);let y=[];if(typeof h=="string")ji(this,h)&&(y=y.concat(this.g.get(ii(this,h))));else{h=Array.from(this.g.values());for(let _=0;_<h.length;_++)y=y.concat(h[_])}return y},i.set=function(h,y){return Nn(this),this.i=null,h=ii(this,h),ji(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[y]),this.h+=1,this},i.get=function(h,y){return h?(h=this.V(h),0<h.length?String(h[0]):y):y};function ml(h,y,_){Ui(h,y),0<_.length&&(h.i=null,h.g.set(ii(h,y),Y(_)),h.h+=_.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],y=Array.from(this.g.keys());for(var _=0;_<y.length;_++){var w=y[_];const G=encodeURIComponent(String(w)),ce=this.V(w);for(w=0;w<ce.length;w++){var j=G;ce[w]!==""&&(j+="="+encodeURIComponent(String(ce[w]))),h.push(j)}}return this.i=h.join("&")};function ii(h,y){return y=String(y),h.j&&(y=y.toLowerCase()),y}function uc(h,y){y&&!h.j&&(Nn(h),h.i=null,h.g.forEach(function(_,w){var j=w.toLowerCase();w!=j&&(Ui(this,w),ml(this,j,_))},h)),h.j=y}function Us(h,y){const _=new Cn;if(m.Image){const w=new Image;w.onload=V(On,_,"TestLoadImage: loaded",!0,y,w),w.onerror=V(On,_,"TestLoadImage: error",!1,y,w),w.onabort=V(On,_,"TestLoadImage: abort",!1,y,w),w.ontimeout=V(On,_,"TestLoadImage: timeout",!1,y,w),m.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=h}else y(!1)}function Gn(h,y){const _=new Cn,w=new AbortController,j=setTimeout(()=>{w.abort(),On(_,"TestPingServer: timeout",!1,y)},1e4);fetch(h,{signal:w.signal}).then(G=>{clearTimeout(j),G.ok?On(_,"TestPingServer: ok",!0,y):On(_,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(j),On(_,"TestPingServer: error",!1,y)})}function On(h,y,_,w,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),w(_)}catch{}}function js(){this.g=new Ns}function ri(h,y,_){const w=_||"";try{hl(h,function(j,G){let ce=j;g(j)&&(ce=qn(j)),y.push(w+G+"="+encodeURIComponent(ce))})}catch(j){throw y.push(w+"type="+encodeURIComponent("_badmap")),j}}function Ar(h){this.l=h.Ub||null,this.j=h.eb||!1}F(Ar,nl),Ar.prototype.g=function(){return new zi(this.l,this.j)},Ar.prototype.i=function(h){return function(){return h}}({});function zi(h,y){dt.call(this),this.D=h,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}F(zi,dt),i=zi.prototype,i.open=function(h,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=y,this.readyState=1,ai(this)},i.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(y.body=h),(this.D||m).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,si(this)),this.readyState=0},i.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,ai(this)),this.g&&(this.readyState=3,ai(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;pl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function pl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}i.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var y=h.value?h.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!h.done}))&&(this.response=this.responseText+=y)}h.done?si(this):ai(this),this.readyState==3&&pl(this)}},i.Ra=function(h){this.g&&(this.response=this.responseText=h,si(this))},i.Qa=function(h){this.g&&(this.response=h,si(this))},i.ga=function(){this.g&&si(this)};function si(h){h.readyState=4,h.l=null,h.j=null,h.v=null,ai(h)}i.setRequestHeader=function(h,y){this.u.append(h,y)},i.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],y=this.h.entries();for(var _=y.next();!_.done;)_=_.value,h.push(_[0]+": "+_[1]),_=y.next();return h.join(`\r
`)};function ai(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function gl(h){let y="";return me(h,function(_,w){y+=w,y+=":",y+=_,y+=`\r
`}),y}function Lt(h,y,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=gl(_),typeof h=="string"?_!=null&&encodeURIComponent(String(_)):Ze(h,y,_))}function Ke(h){dt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}F(Ke,dt);var Da=/^https?$/i,zs=["POST","PUT"];i=Ke.prototype,i.Ha=function(h){this.J=h},i.ea=function(h,y,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);y=y?y.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ei.g(),this.v=this.o?il(this.o):il(ei),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(y,String(h),!0),this.B=!1}catch(G){cc(this,G);return}if(h=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var j in w)_.set(j,w[j]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const G of w.keys())_.set(G,w.get(G));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(G=>G.toLowerCase()=="content-type"),j=m.FormData&&h instanceof m.FormData,!(0<=Array.prototype.indexOf.call(zs,y,void 0))||w||j||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[G,ce]of _)this.g.setRequestHeader(G,ce);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bs(this),this.u=!0,this.g.send(h),this.u=!1}catch(G){cc(this,G)}};function cc(h,y){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=y,h.m=5,Pa(h),oi(h)}function Pa(h){h.A||(h.A=!0,Qe(h,"complete"),Qe(h,"error"))}i.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Qe(this,"complete"),Qe(this,"abort"),oi(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),oi(this,!0)),Ke.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?ka(this):this.bb())},i.bb=function(){ka(this)};function ka(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Dn(h)!=4||h.Z()!=2)){if(h.u&&Dn(h)==4)Wt(h.Ea,0,h);else if(Qe(h,"readystatechange"),Dn(h)==4){h.h=!1;try{const ce=h.Z();e:switch(ce){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var _;if(!(_=y)){var w;if(w=ce===0){var j=String(h.D).match(ks)[1]||null;!j&&m.self&&m.self.location&&(j=m.self.location.protocol.slice(0,-1)),w=!Da.test(j?j.toLowerCase():"")}_=w}if(_)Qe(h,"complete"),Qe(h,"success");else{h.m=6;try{var G=2<Dn(h)?h.g.statusText:""}catch{G=""}h.l=G+" ["+h.Z()+"]",Pa(h)}}finally{oi(h)}}}}function oi(h,y){if(h.g){Bs(h);const _=h.g,w=h.v[0]?()=>{}:null;h.g=null,h.v=null,y||Qe(h,"ready");try{_.onreadystatechange=w}catch{}}}function Bs(h){h.I&&(m.clearTimeout(h.I),h.I=null)}i.isActive=function(){return!!this.g};function Dn(h){return h.g?h.g.readyState:0}i.Z=function(){try{return 2<Dn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(h){if(this.g){var y=this.g.responseText;return h&&y.indexOf(h)==0&&(y=y.substring(h.length)),Sa(y)}};function hc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function dd(h){const y={};h=(h.g&&2<=Dn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<h.length;w++){if(ne(h[w]))continue;var _=O(h[w]);const j=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const G=y[j]||[];y[j]=G,G.push(_)}M(y,function(w){return w.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fs(h,y,_){return _&&_.internalChannelParams&&_.internalChannelParams[h]||y}function Ma(h){this.Aa=0,this.i=[],this.j=new Cn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fs("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fs("baseRetryDelayMs",5e3,h),this.cb=Fs("retryDelaySeedMs",1e4,h),this.Wa=Fs("forwardChannelMaxRetries",2,h),this.wa=Fs("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Mi(h&&h.concurrentRequestLimit),this.Da=new js,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Ma.prototype,i.la=8,i.G=1,i.connect=function(h,y,_,w){lt(0),this.W=h,this.H=y||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=vc(this,null,this.W),La(this)};function yl(h){if(fc(h),h.G==3){var y=h.U++,_=yn(h.I);if(Ze(_,"SID",h.K),Ze(_,"RID",y),Ze(_,"TYPE","terminate"),qs(h,_),y=new an(h,h.j,y),y.L=2,y.v=Vs(yn(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(y.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=y.v,_=!0),_||(y.g=_c(y.j,null),y.g.ea(y.v)),y.F=Date.now(),Ds(y)}yc(h)}function Va(h){h.g&&(Hs(h),h.g.cancel(),h.g=null)}function fc(h){Va(h),h.u&&(m.clearTimeout(h.u),h.u=null),Ua(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&m.clearTimeout(h.s),h.s=null)}function La(h){if(!Ra(h.h)&&!h.s){h.s=!0;var y=h.Ga;re||D(),de||(re(),de=!0),De.add(y,h),h.B=0}}function md(h,y){return Ca(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=y.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Et(S(h.Ga,h,y),bl(h,h.B)),h.B++,!0)}i.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const j=new an(this,this.j,h);let G=this.o;if(this.S&&(G?(G=R(G),N(G,this.S)):G=this.S),this.m!==null||this.O||(j.H=G,G=null),this.P)e:{for(var y=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(y+=w,4096<y){y=_;break e}if(y===4096||_===this.i.length-1){y=_+1;break e}}y=1e3}else y=1e3;y=dc(this,j,y),_=yn(this.I),Ze(_,"RID",h),Ze(_,"CVER",22),this.D&&Ze(_,"X-HTTP-Session-Id",this.D),qs(this,_),G&&(this.O?y="headers="+encodeURIComponent(String(gl(G)))+"&"+y:this.m&&Lt(_,this.m,G)),xa(this.h,j),this.Ua&&Ze(_,"TYPE","init"),this.P?(Ze(_,"$req",y),Ze(_,"SID","null"),j.T=!0,Hn(j,_,null)):Hn(j,_,y),this.G=2}}else this.G==3&&(h?vl(this,h):this.i.length==0||Ra(this.h)||vl(this))};function vl(h,y){var _;y?_=y.l:_=h.U++;const w=yn(h.I);Ze(w,"SID",h.K),Ze(w,"RID",_),Ze(w,"AID",h.T),qs(h,w),h.m&&h.o&&Lt(w,h.m,h.o),_=new an(h,h.j,_,h.B+1),h.m===null&&(_.H=h.o),y&&(h.i=y.D.concat(h.i)),y=dc(h,_,1e3),_.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),xa(h.h,_),Hn(_,w,y)}function qs(h,y){h.H&&me(h.H,function(_,w){Ze(y,w,_)}),h.l&&hl({},function(_,w){Ze(y,w,_)})}function dc(h,y,_){_=Math.min(h.i.length,_);var w=h.l?S(h.l.Na,h.l,h):null;e:{var j=h.i;let G=-1;for(;;){const ce=["count="+_];G==-1?0<_?(G=j[0].g,ce.push("ofs="+G)):G=0:ce.push("ofs="+G);let Be=!0;for(let Nt=0;Nt<_;Nt++){let Fe=j[Nt].g;const Ut=j[Nt].map;if(Fe-=G,0>Fe)G=Math.max(0,j[Nt].g-100),Be=!1;else try{ri(Ut,ce,"req"+Fe+"_")}catch{w&&w(Ut)}}if(Be){w=ce.join("&");break e}}}return h=h.i.splice(0,_),y.D=h,w}function mc(h){if(!h.g&&!h.u){h.Y=1;var y=h.Fa;re||D(),de||(re(),de=!0),De.add(y,h),h.v=0}}function _l(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Et(S(h.Fa,h),bl(h,h.v)),h.v++,!0)}i.Fa=function(){if(this.u=null,pc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Et(S(this.ab,this),h)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),Va(this),pc(this))};function Hs(h){h.A!=null&&(m.clearTimeout(h.A),h.A=null)}function pc(h){h.g=new an(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var y=yn(h.qa);Ze(y,"RID","rpc"),Ze(y,"SID",h.K),Ze(y,"AID",h.T),Ze(y,"CI",h.F?"0":"1"),!h.F&&h.ja&&Ze(y,"TO",h.ja),Ze(y,"TYPE","xmlhttp"),qs(h,y),h.m&&h.o&&Lt(y,h.m,h.o),h.L&&(h.g.I=h.L);var _=h.g;h=h.ia,_.L=1,_.v=Vs(yn(y)),_.m=null,_.P=!0,ki(_,h)}i.Za=function(){this.C!=null&&(this.C=null,Va(this),_l(this),lt(19))};function Ua(h){h.C!=null&&(m.clearTimeout(h.C),h.C=null)}function gc(h,y){var _=null;if(h.g==y){Ua(h),Hs(h),h.g=null;var w=2}else if(ul(h.h,y))_=y.D,on(h.h,y),w=1;else return;if(h.G!=0){if(y.o)if(w==1){_=y.m?y.m.length:0,y=Date.now()-y.F;var j=h.B;w=yr(),Qe(w,new xt(w,_)),La(h)}else mc(h);else if(j=y.s,j==3||j==0&&0<y.X||!(w==1&&md(h,y)||w==2&&_l(h)))switch(_&&0<_.length&&(y=h.h,y.i=y.i.concat(_)),j){case 1:Bi(h,5);break;case 4:Bi(h,10);break;case 3:Bi(h,6);break;default:Bi(h,2)}}}function bl(h,y){let _=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(_*=2),_*y}function Bi(h,y){if(h.j.info("Error code "+y),y==2){var _=S(h.fb,h),w=h.Xa;const j=!w;w=new Tt(w||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Ms(w,"https"),Vs(w),j?Us(w.toString(),_):Gn(w.toString(),_)}else lt(2);h.G=0,h.l&&h.l.sa(y),yc(h),fc(h)}i.fb=function(h){h?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function yc(h){if(h.G=0,h.ka=[],h.l){const y=cl(h.h);(y.length!=0||h.i.length!=0)&&(U(h.ka,y),U(h.ka,h.i),h.h.i.length=0,Y(h.i),h.i.length=0),h.l.ra()}}function vc(h,y,_){var w=_ instanceof Tt?yn(_):new Tt(_);if(w.g!="")y&&(w.g=y+"."+w.g),Tr(w,w.s);else{var j=m.location;w=j.protocol,y=y?y+"."+j.hostname:j.hostname,j=+j.port;var G=new Tt(null);w&&Ms(G,w),y&&(G.g=y),j&&Tr(G,j),_&&(G.l=_),w=G}return _=h.D,y=h.ya,_&&y&&Ze(w,_,y),Ze(w,"VER",h.la),qs(h,w),w}function _c(h,y,_){if(y&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=h.Ca&&!h.pa?new Ke(new Ar({eb:_})):new Ke(h.pa),y.Ha(h.J),y}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function bc(){}i=bc.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function ja(){}ja.prototype.g=function(h,y){return new ln(h,y)};function ln(h,y){dt.call(this),this.g=new Ma(y),this.l=h,this.h=y&&y.messageUrlParams||null,h=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(h?h["X-WebChannel-Content-Type"]=y.messageContentType:h={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(h?h["X-WebChannel-Client-Profile"]=y.va:h={"X-WebChannel-Client-Profile":y.va}),this.g.S=h,(h=y&&y.Sb)&&!ne(h)&&(this.g.m=h),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!ne(y)&&(this.g.D=y,h=this.h,h!==null&&y in h&&(h=this.h,y in h&&delete h[y])),this.j=new li(this)}F(ln,dt),ln.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ln.prototype.close=function(){yl(this.g)},ln.prototype.o=function(h){var y=this.g;if(typeof h=="string"){var _={};_.__data__=h,h=_}else this.u&&(_={},_.__data__=qn(h),h=_);y.i.push(new oc(y.Ya++,h)),y.G==3&&La(y)},ln.prototype.N=function(){this.g.l=null,delete this.j,yl(this.g),delete this.g,ln.aa.N.call(this)};function Ec(h){Di.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var y=h.__sm__;if(y){e:{for(const _ in y){h=_;break e}h=void 0}(this.i=h)&&(h=this.i,y=y!==null&&h in y?y[h]:void 0),this.data=y}else this.data=h}F(Ec,Di);function Tc(){sl.call(this),this.status=1}F(Tc,sl);function li(h){this.g=h}F(li,bc),li.prototype.ua=function(){Qe(this.g,"a")},li.prototype.ta=function(h){Qe(this.g,new Ec(h))},li.prototype.sa=function(h){Qe(this.g,new Tc)},li.prototype.ra=function(){Qe(this.g,"b")},ja.prototype.createWebChannel=ja.prototype.g,ln.prototype.send=ln.prototype.o,ln.prototype.open=ln.prototype.m,ln.prototype.close=ln.prototype.close,vA=function(){return new ja},yA=function(){return yr()},gA=Zn,Zp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},br.NO_ERROR=0,br.TIMEOUT=8,br.HTTP_ERROR=6,Lh=br,Pi.COMPLETE="complete",pA=Pi,rl.EventType=Oi,Oi.OPEN="a",Oi.CLOSE="b",Oi.ERROR="c",Oi.MESSAGE="d",dt.prototype.listen=dt.prototype.K,cu=rl,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,mA=Ke}).apply(typeof Sh<"u"?Sh:typeof self<"u"?self:typeof window<"u"?window:{});const lE="@firebase/firestore",uE="4.7.15";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nn.UNAUTHENTICATED=new nn(null),nn.GOOGLE_CREDENTIALS=new nn("google-credentials-uid"),nn.FIRST_PARTY=new nn("first-party-uid"),nn.MOCK_USER=new nn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o="11.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=new Cf("@firebase/firestore");function _o(){return da.logLevel}function he(i,...e){if(da.logLevel<=Me.DEBUG){const t=e.map(ay);da.debug(`Firestore (${$o}): ${i}`,...t)}}function ur(i,...e){if(da.logLevel<=Me.ERROR){const t=e.map(ay);da.error(`Firestore (${$o}): ${i}`,...t)}}function Do(i,...e){if(da.logLevel<=Me.WARN){const t=e.map(ay);da.warn(`Firestore (${$o}): ${i}`,...t)}}function ay(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(i,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,_A(i,r,t)}function _A(i,e,t){let r=`FIRESTORE (${$o}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw ur(r),new Error(r)}function Ye(i,e,t,r){let a="Unexpected state";typeof t=="string"?a=t:r=t,i||_A(e,a,r)}function Ce(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ye extends Bn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class EO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(nn.UNAUTHENTICATED))}shutdown(){}}class TO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class AO{constructor(e){this.t=e,this.currentUser=nn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ye(this.o===void 0,42304);let r=this.i;const a=p=>this.i!==r?(r=this.i,t(p)):Promise.resolve();let l=new sr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new sr,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},m=p=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>m(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new sr)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ye(typeof r.accessToken=="string",31837,{l:r}),new bA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ye(e===null||typeof e=="string",2055,{h:e}),new nn(e)}}class SO{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=nn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class wO{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new SO(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(nn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IO{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,It(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ye(this.o===void 0,3512);const r=l=>{l.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,he("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>r(l))};const a=l=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new cE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ye(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new cE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<i;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const a=RO(40);for(let l=0;l<a.length;++l)r.length<20&&a[l]<t&&(r+=e.charAt(a[l]%62))}return r}}function Oe(i,e){return i<e?-1:i>e?1:0}function eg(i,e){let t=0;for(;t<i.length&&t<e.length;){const r=i.codePointAt(t),a=e.codePointAt(t);if(r!==a){if(r<128&&a<128)return Oe(r,a);{const l=EA(),c=CO(l.encode(hE(i,t)),l.encode(hE(e,t)));return c!==0?c:Oe(r,a)}}t+=r>65535?2:1}return Oe(i.length,e.length)}function hE(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function CO(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Oe(i[t],e[t]);return Oe(i.length,e.length)}function Po(i,e,t){return i.length===e.length&&i.every((r,a)=>t(r,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=-62135596800,dE=1e6;class Rt{static now(){return Rt.fromMillis(Date.now())}static fromDate(e){return Rt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*dE);return new Rt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ye(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ye(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<fE)throw new ye(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ye(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/dE}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-fE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new Rt(0,0))}static max(){return new Ie(new Rt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE="__name__";class pi{constructor(e,t,r){t===void 0?t=0:t>e.length&&Te(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Te(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return pi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof pi?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let a=0;a<r;a++){const l=pi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Oe(e.length,t.length)}static compareSegments(e,t){const r=pi.isNumericId(e),a=pi.isNumericId(t);return r&&!a?-1:!r&&a?1:r&&a?pi.extractNumericId(e).compare(pi.extractNumericId(t)):eg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return is.fromString(e.substring(4,e.length-2))}}class ct extends pi{construct(e,t,r){return new ct(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ye(ie.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(a=>a.length>0))}return new ct(t)}static emptyPath(){return new ct([])}}const xO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends pi{construct(e,t,r){return new Qt(e,t,r)}static isValidIdentifier(e){return xO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===mE}static keyField(){return new Qt([mE])}static fromServerFormat(e){const t=[];let r="",a=0;const l=()=>{if(r.length===0)throw new ye(ie.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let c=!1;for(;a<e.length;){const m=e[a];if(m==="\\"){if(a+1===e.length)throw new ye(ie.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ye(ie.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=p,a+=2}else m==="`"?(c=!c,a++):m!=="."||c?(r+=m,a++):(l(),a++)}if(l(),c)throw new ye(ie.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qt(t)}static emptyPath(){return new Qt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(ct.fromString(e))}static fromName(e){return new _e(ct.fromString(e).popFirst(5))}static empty(){return new _e(ct.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ct.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ct.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new ct(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=-1;function NO(i,e){const t=i.toTimestamp().seconds,r=i.toTimestamp().nanoseconds+1,a=Ie.fromTimestamp(r===1e9?new Rt(t+1,0):new Rt(t,r));return new os(a,_e.empty(),e)}function OO(i){return new os(i.readTime,i.key,Nu)}class os{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new os(Ie.min(),_e.empty(),Nu)}static max(){return new os(Ie.max(),_e.empty(),Nu)}}function DO(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(i.documentKey,e.documentKey),t!==0?t:Oe(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(i){if(i.code!==ie.FAILED_PRECONDITION||i.message!==PO)throw i;he("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Z((r,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(r,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(r,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Z?t:Z.resolve(t)}catch(t){return Z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.reject(t)}static resolve(e){return new Z((t,r)=>{t(e)})}static reject(e){return new Z((t,r)=>{r(e)})}static waitFor(e){return new Z((t,r)=>{let a=0,l=0,c=!1;e.forEach(m=>{++a,m.next(()=>{++l,c&&l===a&&t()},p=>r(p))}),c=!0,l===a&&t()})}static or(e){let t=Z.resolve(!1);for(const r of e)t=t.next(a=>a?Z.resolve(a):r());return t}static forEach(e,t){const r=[];return e.forEach((a,l)=>{r.push(t.call(this,a,l))}),this.waitFor(r)}static mapArray(e,t){return new Z((r,a)=>{const l=e.length,c=new Array(l);let m=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next(v=>{c[g]=v,++m,m===l&&r(c)},v=>a(v))}})}static doWhile(e,t){return new Z((r,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):r()};l()})}}function MO(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Yo(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Pf.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=-1;function kf(i){return i==null}function tf(i){return i===0&&1/i==-1/0}function VO(i){return typeof i=="number"&&Number.isInteger(i)&&!tf(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA="";function LO(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=pE(e)),e=UO(i.get(t),e);return pE(e)}function UO(i,e){let t=e;const r=i.length;for(let a=0;a<r;a++){const l=i.charAt(a);switch(l){case"\0":t+="";break;case AA:t+="";break;default:t+=l}}return t}function pE(i){return i+AA+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function bs(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function SA(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t){this.comparator=e,this.root=t||Yt.EMPTY}insert(e,t){return new ft(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Yt.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Yt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const a=this.comparator(e,r.key);if(a===0)return t+r.left.size;a<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wh(this.root,e,this.comparator,!1)}getReverseIterator(){return new wh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wh(this.root,e,this.comparator,!0)}}class wh{constructor(e,t,r,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?r(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Yt{constructor(e,t,r,a,l){this.key=e,this.value=t,this.color=r??Yt.RED,this.left=a??Yt.EMPTY,this.right=l??Yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,a,l){return new Yt(e??this.key,t??this.value,r??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let a=this;const l=r(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,r),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,r)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Yt.EMPTY;r=a.right.min(),a=a.copy(r.key,r.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Te(27949);return e+(this.isRed()?0:1)}}Yt.EMPTY=null,Yt.RED=!0,Yt.BLACK=!1;Yt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te(57766)}get value(){throw Te(16141)}get color(){throw Te(16727)}get left(){throw Te(29726)}get right(){throw Te(36894)}copy(e,t,r,a,l){return this}insert(e,t,r){return new Yt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const a=r.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new yE(this.data.getIterator())}getIteratorFrom(e){return new yE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Mt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=r.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Mt(this.comparator);return t.data=e,t}}class yE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.fields=e,e.sort(Qt.comparator)}static empty(){return new wn([])}unionWith(e){let t=new Mt(Qt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new wn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Po(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new wA("Invalid base64 string: "+l):l}}(e);return new Xt(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new Xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let a=0;a<t.length;a++)r[a]=t.charCodeAt(a);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xt.EMPTY_BYTE_STRING=new Xt("");const jO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ls(i){if(Ye(!!i,39018),typeof i=="string"){let e=0;const t=jO.exec(i);if(Ye(!!t,46558,{timestamp:i}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const r=new Date(i);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_t(i.seconds),nanos:_t(i.nanos)}}function _t(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function us(i){return typeof i=="string"?Xt.fromBase64String(i):Xt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA="server_timestamp",RA="__type__",CA="__previous_value__",xA="__local_write_time__";function ly(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[RA])===null||t===void 0?void 0:t.stringValue)===IA}function Mf(i){const e=i.mapValue.fields[CA];return ly(e)?Mf(e):e}function Ou(i){const e=ls(i.mapValue.fields[xA].timestampValue);return new Rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e,t,r,a,l,c,m,p,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=v}}const nf="(default)";class Du{constructor(e,t){this.projectId=e,this.database=t||nf}static empty(){return new Du("","")}get isDefaultDatabase(){return this.database===nf}isEqual(e){return e instanceof Du&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA="__type__",BO="__max__",Ih={mapValue:{}},OA="__vector__",rf="value";function cs(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?ly(i)?4:qO(i)?9007199254740991:FO(i)?10:11:Te(28295,{value:i})}function wi(i,e){if(i===e)return!0;const t=cs(i);if(t!==cs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ou(i).isEqual(Ou(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=ls(a.timestampValue),m=ls(l.timestampValue);return c.seconds===m.seconds&&c.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,l){return us(a.bytesValue).isEqual(us(l.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,l){return _t(a.geoPointValue.latitude)===_t(l.geoPointValue.latitude)&&_t(a.geoPointValue.longitude)===_t(l.geoPointValue.longitude)}(i,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return _t(a.integerValue)===_t(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=_t(a.doubleValue),m=_t(l.doubleValue);return c===m?tf(c)===tf(m):isNaN(c)&&isNaN(m)}return!1}(i,e);case 9:return Po(i.arrayValue.values||[],e.arrayValue.values||[],wi);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},m=l.mapValue.fields||{};if(gE(c)!==gE(m))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(m[p]===void 0||!wi(c[p],m[p])))return!1;return!0}(i,e);default:return Te(52216,{left:i})}}function Pu(i,e){return(i.values||[]).find(t=>wi(t,e))!==void 0}function ko(i,e){if(i===e)return 0;const t=cs(i),r=cs(e);if(t!==r)return Oe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Oe(i.booleanValue,e.booleanValue);case 2:return function(l,c){const m=_t(l.integerValue||l.doubleValue),p=_t(c.integerValue||c.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1}(i,e);case 3:return vE(i.timestampValue,e.timestampValue);case 4:return vE(Ou(i),Ou(e));case 5:return eg(i.stringValue,e.stringValue);case 6:return function(l,c){const m=us(l),p=us(c);return m.compareTo(p)}(i.bytesValue,e.bytesValue);case 7:return function(l,c){const m=l.split("/"),p=c.split("/");for(let g=0;g<m.length&&g<p.length;g++){const v=Oe(m[g],p[g]);if(v!==0)return v}return Oe(m.length,p.length)}(i.referenceValue,e.referenceValue);case 8:return function(l,c){const m=Oe(_t(l.latitude),_t(c.latitude));return m!==0?m:Oe(_t(l.longitude),_t(c.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return _E(i.arrayValue,e.arrayValue);case 10:return function(l,c){var m,p,g,v;const E=l.fields||{},S=c.fields||{},V=(m=E[rf])===null||m===void 0?void 0:m.arrayValue,F=(p=S[rf])===null||p===void 0?void 0:p.arrayValue,Y=Oe(((g=V==null?void 0:V.values)===null||g===void 0?void 0:g.length)||0,((v=F==null?void 0:F.values)===null||v===void 0?void 0:v.length)||0);return Y!==0?Y:_E(V,F)}(i.mapValue,e.mapValue);case 11:return function(l,c){if(l===Ih.mapValue&&c===Ih.mapValue)return 0;if(l===Ih.mapValue)return 1;if(c===Ih.mapValue)return-1;const m=l.fields||{},p=Object.keys(m),g=c.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let E=0;E<p.length&&E<v.length;++E){const S=eg(p[E],v[E]);if(S!==0)return S;const V=ko(m[p[E]],g[v[E]]);if(V!==0)return V}return Oe(p.length,v.length)}(i.mapValue,e.mapValue);default:throw Te(23264,{Pe:t})}}function vE(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Oe(i,e);const t=ls(i),r=ls(e),a=Oe(t.seconds,r.seconds);return a!==0?a:Oe(t.nanos,r.nanos)}function _E(i,e){const t=i.values||[],r=e.values||[];for(let a=0;a<t.length&&a<r.length;++a){const l=ko(t[a],r[a]);if(l)return l}return Oe(t.length,r.length)}function Mo(i){return tg(i)}function tg(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const r=ls(t);return`time(${r.seconds},${r.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return us(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return _e.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let r="[",a=!0;for(const l of t.values||[])a?a=!1:r+=",",r+=tg(l);return r+"]"}(i.arrayValue):"mapValue"in i?function(t){const r=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of r)l?l=!1:a+=",",a+=`${c}:${tg(t.fields[c])}`;return a+"}"}(i.mapValue):Te(61005,{value:i})}function Uh(i){switch(cs(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mf(i);return e?16+Uh(e):16;case 5:return 2*i.stringValue.length;case 6:return us(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((a,l)=>a+Uh(l),0)}(i.arrayValue);case 10:case 11:return function(r){let a=0;return bs(r.fields,(l,c)=>{a+=l.length+Uh(c)}),a}(i.mapValue);default:throw Te(13486,{value:i})}}function ng(i){return!!i&&"integerValue"in i}function uy(i){return!!i&&"arrayValue"in i}function bE(i){return!!i&&"nullValue"in i}function EE(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function jh(i){return!!i&&"mapValue"in i}function FO(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[NA])===null||t===void 0?void 0:t.stringValue)===OA}function yu(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return bs(i.mapValue.fields,(t,r)=>e.mapValue.fields[t]=yu(r)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=yu(i.arrayValue.values[t]);return e}return Object.assign({},i)}function qO(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===BO}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.value=e}static empty(){return new mn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!jh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=yu(t)}setAll(e){let t=Qt.emptyPath(),r={},a=[];e.forEach((c,m)=>{if(!t.isImmediateParentOf(m)){const p=this.getFieldsMap(t);this.applyChanges(p,r,a),r={},a=[],t=m.popLast()}c?r[m.lastSegment()]=yu(c):a.push(m.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,r,a)}delete(e){const t=this.field(e.popLast());jh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return wi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let a=t.mapValue.fields[e.get(r)];jh(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,r){bs(t,(a,l)=>e[a]=l);for(const a of r)delete e[a]}clone(){return new mn(yu(this.value))}}function DA(i){const e=[];return bs(i.fields,(t,r)=>{const a=new Qt([t]);if(jh(r)){const l=DA(r.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new wn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t,r,a,l,c,m){this.key=e,this.documentType=t,this.version=r,this.readTime=a,this.createTime=l,this.data=c,this.documentState=m}static newInvalidDocument(e){return new rn(e,0,Ie.min(),Ie.min(),Ie.min(),mn.empty(),0)}static newFoundDocument(e,t,r,a){return new rn(e,1,t,Ie.min(),r,a,0)}static newNoDocument(e,t){return new rn(e,2,t,Ie.min(),Ie.min(),mn.empty(),0)}static newUnknownDocument(e,t){return new rn(e,3,t,Ie.min(),Ie.min(),mn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,t){this.position=e,this.inclusive=t}}function TE(i,e,t){let r=0;for(let a=0;a<i.position.length;a++){const l=e[a],c=i.position[a];if(l.field.isKeyField()?r=_e.comparator(_e.fromName(c.referenceValue),t.key):r=ko(c,t.data.field(l.field)),l.dir==="desc"&&(r*=-1),r!==0)break}return r}function AE(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!wi(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,t="asc"){this.field=e,this.dir=t}}function HO(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{}class kt extends PA{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new $O(e,t,r):t==="array-contains"?new QO(e,r):t==="in"?new XO(e,r):t==="not-in"?new WO(e,r):t==="array-contains-any"?new JO(e,r):new kt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new KO(e,r):new YO(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ko(t,this.value)):t!==null&&cs(this.value)===cs(t)&&this.matchesComparison(ko(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ii extends PA{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Ii(e,t)}matches(e){return kA(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function kA(i){return i.op==="and"}function MA(i){return GO(i)&&kA(i)}function GO(i){for(const e of i.filters)if(e instanceof Ii)return!1;return!0}function ig(i){if(i instanceof kt)return i.field.canonicalString()+i.op.toString()+Mo(i.value);if(MA(i))return i.filters.map(e=>ig(e)).join(",");{const e=i.filters.map(t=>ig(t)).join(",");return`${i.op}(${e})`}}function VA(i,e){return i instanceof kt?function(r,a){return a instanceof kt&&r.op===a.op&&r.field.isEqual(a.field)&&wi(r.value,a.value)}(i,e):i instanceof Ii?function(r,a){return a instanceof Ii&&r.op===a.op&&r.filters.length===a.filters.length?r.filters.reduce((l,c,m)=>l&&VA(c,a.filters[m]),!0):!1}(i,e):void Te(19439)}function LA(i){return i instanceof kt?function(t){return`${t.field.canonicalString()} ${t.op} ${Mo(t.value)}`}(i):i instanceof Ii?function(t){return t.op.toString()+" {"+t.getFilters().map(LA).join(" ,")+"}"}(i):"Filter"}class $O extends kt{constructor(e,t,r){super(e,t,r),this.key=_e.fromName(r.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class KO extends kt{constructor(e,t){super(e,"in",t),this.keys=UA("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class YO extends kt{constructor(e,t){super(e,"not-in",t),this.keys=UA("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function UA(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>_e.fromName(r.referenceValue))}class QO extends kt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return uy(t)&&Pu(t.arrayValue,this.value)}}class XO extends kt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Pu(this.value.arrayValue,t)}}class WO extends kt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Pu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Pu(this.value.arrayValue,t)}}class JO extends kt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!uy(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Pu(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(e,t=null,r=[],a=[],l=null,c=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=a,this.limit=l,this.startAt=c,this.endAt=m,this.Ie=null}}function SE(i,e=null,t=[],r=[],a=null,l=null,c=null){return new ZO(i,e,t,r,a,l,c)}function cy(i){const e=Ce(i);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ig(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(l){return l.field.canonicalString()+l.dir}(r)).join(","),kf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Mo(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Mo(r)).join(",")),e.Ie=t}return e.Ie}function hy(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!HO(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!VA(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!AE(i.startAt,e.startAt)&&AE(i.endAt,e.endAt)}function rg(i){return _e.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,t=null,r=[],a=[],l=null,c="F",m=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=a,this.limit=l,this.limitType=c,this.startAt=m,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function eD(i,e,t,r,a,l,c,m){return new Vf(i,e,t,r,a,l,c,m)}function fy(i){return new Vf(i)}function wE(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function tD(i){return i.collectionGroup!==null}function vu(i){const e=Ce(i);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let m=new Mt(Qt.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(m=m.add(g.field))})}),m})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new af(l,r))}),t.has(Qt.keyField().canonicalString())||e.Ee.push(new af(Qt.keyField(),r))}return e.Ee}function Ti(i){const e=Ce(i);return e.de||(e.de=nD(e,vu(i))),e.de}function nD(i,e){if(i.limitType==="F")return SE(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new af(a.field,l)});const t=i.endAt?new sf(i.endAt.position,i.endAt.inclusive):null,r=i.startAt?new sf(i.startAt.position,i.startAt.inclusive):null;return SE(i.path,i.collectionGroup,e,i.filters,i.limit,t,r)}}function sg(i,e,t){return new Vf(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Lf(i,e){return hy(Ti(i),Ti(e))&&i.limitType===e.limitType}function jA(i){return`${cy(Ti(i))}|lt:${i.limitType}`}function bo(i){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(a=>LA(a)).join(", ")}]`),kf(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(a=>Mo(a)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(a=>Mo(a)).join(",")),`Target(${r})`}(Ti(i))}; limitType=${i.limitType})`}function Uf(i,e){return e.isFoundDocument()&&function(r,a){const l=a.key.path;return r.collectionGroup!==null?a.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(l):_e.isDocumentKey(r.path)?r.path.isEqual(l):r.path.isImmediateParentOf(l)}(i,e)&&function(r,a){for(const l of vu(r))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(i,e)&&function(r,a){for(const l of r.filters)if(!l.matches(a))return!1;return!0}(i,e)&&function(r,a){return!(r.startAt&&!function(c,m,p){const g=TE(c,m,p);return c.inclusive?g<=0:g<0}(r.startAt,vu(r),a)||r.endAt&&!function(c,m,p){const g=TE(c,m,p);return c.inclusive?g>=0:g>0}(r.endAt,vu(r),a))}(i,e)}function iD(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function zA(i){return(e,t)=>{let r=!1;for(const a of vu(i)){const l=rD(a,e,t);if(l!==0)return l;r=r||a.field.isKeyField()}return 0}}function rD(i,e,t){const r=i.field.isKeyField()?_e.comparator(e.key,t.key):function(l,c,m){const p=c.data.field(l),g=m.data.field(l);return p!==null&&g!==null?ko(p,g):Te(42886)}(i.field,e,t);switch(i.dir){case"asc":return r;case"desc":return-1*r;default:return Te(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[a,l]of r)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),a=this.inner[r];if(a===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let a=0;a<r.length;a++)if(this.equalsFn(r[a][0],e))return r.length===1?delete this.inner[t]:r.splice(a,1),this.innerSize--,!0;return!1}forEach(e){bs(this.inner,(t,r)=>{for(const[a,l]of r)e(a,l)})}isEmpty(){return SA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD=new ft(_e.comparator);function cr(){return sD}const BA=new ft(_e.comparator);function hu(...i){let e=BA;for(const t of i)e=e.insert(t.key,t);return e}function FA(i){let e=BA;return i.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function la(){return _u()}function qA(){return _u()}function _u(){return new _a(i=>i.toString(),(i,e)=>i.isEqual(e))}const aD=new ft(_e.comparator),oD=new Mt(_e.comparator);function je(...i){let e=oD;for(const t of i)e=e.add(t);return e}const lD=new Mt(Oe);function uD(){return lD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tf(e)?"-0":e}}function HA(i){return{integerValue:""+i}}function cD(i,e){return VO(e)?HA(e):dy(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(){this._=void 0}}function hD(i,e,t){return i instanceof of?function(a,l){const c={fields:{[RA]:{stringValue:IA},[xA]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&ly(l)&&(l=Mf(l)),l&&(c.fields[CA]=l),{mapValue:c}}(t,e):i instanceof ku?$A(i,e):i instanceof Mu?KA(i,e):function(a,l){const c=GA(a,l),m=IE(c)+IE(a.Re);return ng(c)&&ng(a.Re)?HA(m):dy(a.serializer,m)}(i,e)}function fD(i,e,t){return i instanceof ku?$A(i,e):i instanceof Mu?KA(i,e):t}function GA(i,e){return i instanceof lf?function(r){return ng(r)||function(l){return!!l&&"doubleValue"in l}(r)}(e)?e:{integerValue:0}:null}class of extends jf{}class ku extends jf{constructor(e){super(),this.elements=e}}function $A(i,e){const t=YA(e);for(const r of i.elements)t.some(a=>wi(a,r))||t.push(r);return{arrayValue:{values:t}}}class Mu extends jf{constructor(e){super(),this.elements=e}}function KA(i,e){let t=YA(e);for(const r of i.elements)t=t.filter(a=>!wi(a,r));return{arrayValue:{values:t}}}class lf extends jf{constructor(e,t){super(),this.serializer=e,this.Re=t}}function IE(i){return _t(i.integerValue||i.doubleValue)}function YA(i){return uy(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function dD(i,e){return i.field.isEqual(e.field)&&function(r,a){return r instanceof ku&&a instanceof ku||r instanceof Mu&&a instanceof Mu?Po(r.elements,a.elements,wi):r instanceof lf&&a instanceof lf?wi(r.Re,a.Re):r instanceof of&&a instanceof of}(i.transform,e.transform)}class mD{constructor(e,t){this.version=e,this.transformResults=t}}class Wn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Wn}static exists(e){return new Wn(void 0,e)}static updateTime(e){return new Wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zh(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class zf{}function QA(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new WA(i.key,Wn.none()):new Hu(i.key,i.data,Wn.none());{const t=i.data,r=mn.empty();let a=new Mt(Qt.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?r.delete(l):r.set(l,c),a=a.add(l)}return new Es(i.key,r,new wn(a.toArray()),Wn.none())}}function pD(i,e,t){i instanceof Hu?function(a,l,c){const m=a.value.clone(),p=CE(a.fieldTransforms,l,c.transformResults);m.setAll(p),l.convertToFoundDocument(c.version,m).setHasCommittedMutations()}(i,e,t):i instanceof Es?function(a,l,c){if(!zh(a.precondition,l))return void l.convertToUnknownDocument(c.version);const m=CE(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(XA(a)),p.setAll(m),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(i,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function bu(i,e,t,r){return i instanceof Hu?function(l,c,m,p){if(!zh(l.precondition,c))return m;const g=l.value.clone(),v=xE(l.fieldTransforms,p,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(i,e,t,r):i instanceof Es?function(l,c,m,p){if(!zh(l.precondition,c))return m;const g=xE(l.fieldTransforms,p,c),v=c.data;return v.setAll(XA(l)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),m===null?null:m.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(E=>E.field))}(i,e,t,r):function(l,c,m){return zh(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):m}(i,e,t)}function gD(i,e){let t=null;for(const r of i.fieldTransforms){const a=e.data.field(r.field),l=GA(r.transform,a||null);l!=null&&(t===null&&(t=mn.empty()),t.set(r.field,l))}return t||null}function RE(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(r,a){return r===void 0&&a===void 0||!(!r||!a)&&Po(r,a,(l,c)=>dD(l,c))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Hu extends zf{constructor(e,t,r,a=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Es extends zf{constructor(e,t,r,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function XA(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=i.data.field(t);e.set(t,r)}}),e}function CE(i,e,t){const r=new Map;Ye(i.length===t.length,32656,{Ve:t.length,me:i.length});for(let a=0;a<t.length;a++){const l=i[a],c=l.transform,m=e.data.field(l.field);r.set(l.field,fD(c,m,t[a]))}return r}function xE(i,e,t){const r=new Map;for(const a of i){const l=a.transform,c=t.data.field(a.field);r.set(a.field,hD(l,c,e))}return r}class WA extends zf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yD extends zf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e,t,r,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=a}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&pD(l,e,r[a])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=bu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=bu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=qA();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let m=this.applyToLocalView(c,l.mutatedFields);m=t.has(a.key)?null:m;const p=QA(c,m);p!==null&&r.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(Ie.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),je())}isEqual(e){return this.batchId===e.batchId&&Po(this.mutations,e.mutations,(t,r)=>RE(t,r))&&Po(this.baseMutations,e.baseMutations,(t,r)=>RE(t,r))}}class my{constructor(e,t,r,a){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=a}static from(e,t,r){Ye(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let a=function(){return aD}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,r[c].version);return new my(e,t,r,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt,He;function ED(i){switch(i){case ie.OK:return Te(64938);case ie.CANCELLED:case ie.UNKNOWN:case ie.DEADLINE_EXCEEDED:case ie.RESOURCE_EXHAUSTED:case ie.INTERNAL:case ie.UNAVAILABLE:case ie.UNAUTHENTICATED:return!1;case ie.INVALID_ARGUMENT:case ie.NOT_FOUND:case ie.ALREADY_EXISTS:case ie.PERMISSION_DENIED:case ie.FAILED_PRECONDITION:case ie.ABORTED:case ie.OUT_OF_RANGE:case ie.UNIMPLEMENTED:case ie.DATA_LOSS:return!0;default:return Te(15467,{code:i})}}function JA(i){if(i===void 0)return ur("GRPC error has no .code"),ie.UNKNOWN;switch(i){case wt.OK:return ie.OK;case wt.CANCELLED:return ie.CANCELLED;case wt.UNKNOWN:return ie.UNKNOWN;case wt.DEADLINE_EXCEEDED:return ie.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return ie.RESOURCE_EXHAUSTED;case wt.INTERNAL:return ie.INTERNAL;case wt.UNAVAILABLE:return ie.UNAVAILABLE;case wt.UNAUTHENTICATED:return ie.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return ie.INVALID_ARGUMENT;case wt.NOT_FOUND:return ie.NOT_FOUND;case wt.ALREADY_EXISTS:return ie.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return ie.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return ie.FAILED_PRECONDITION;case wt.ABORTED:return ie.ABORTED;case wt.OUT_OF_RANGE:return ie.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return ie.UNIMPLEMENTED;case wt.DATA_LOSS:return ie.DATA_LOSS;default:return Te(39323,{code:i})}}(He=wt||(wt={}))[He.OK=0]="OK",He[He.CANCELLED=1]="CANCELLED",He[He.UNKNOWN=2]="UNKNOWN",He[He.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",He[He.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",He[He.NOT_FOUND=5]="NOT_FOUND",He[He.ALREADY_EXISTS=6]="ALREADY_EXISTS",He[He.PERMISSION_DENIED=7]="PERMISSION_DENIED",He[He.UNAUTHENTICATED=16]="UNAUTHENTICATED",He[He.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",He[He.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",He[He.ABORTED=10]="ABORTED",He[He.OUT_OF_RANGE=11]="OUT_OF_RANGE",He[He.UNIMPLEMENTED=12]="UNIMPLEMENTED",He[He.INTERNAL=13]="INTERNAL",He[He.UNAVAILABLE=14]="UNAVAILABLE",He[He.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TD=new is([4294967295,4294967295],0);function NE(i){const e=EA().encode(i),t=new dA;return t.update(e),new Uint8Array(t.digest())}function OE(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new is([t,r],0),new is([a,l],0)]}class py{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new fu(`Invalid padding: ${t}`);if(r<0)throw new fu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fu(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new fu(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=is.fromNumber(this.pe)}we(e,t,r){let a=e.add(t.multiply(is.fromNumber(r)));return a.compare(TD)===1&&(a=new is([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=NE(e),[r,a]=OE(t);for(let l=0;l<this.hashCount;l++){const c=this.we(r,a,l);if(!this.Se(c))return!1}return!0}static create(e,t,r){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new py(l,a,t);return r.forEach(m=>c.insert(m)),c}insert(e){if(this.pe===0)return;const t=NE(e),[r,a]=OE(t);for(let l=0;l<this.hashCount;l++){const c=this.we(r,a,l);this.be(c)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class fu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,t,r,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const a=new Map;return a.set(e,Gu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Bf(Ie.min(),a,new ft(Oe),cr(),je())}}class Gu{constructor(e,t,r,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Gu(r,t,je(),je(),je())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,t,r,a){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=a}}class ZA{constructor(e,t){this.targetId=e,this.Ce=t}}class eS{constructor(e,t,r=Xt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=a}}class DE{constructor(){this.Fe=0,this.Me=PE(),this.xe=Xt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=je(),t=je(),r=je();return this.Me.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:r=r.add(a);break;default:Te(38017,{changeType:l})}}),new Gu(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=PE()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ye(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class AD{constructor(e){this.ze=e,this.je=new Map,this.He=cr(),this.Je=Rh(),this.Ye=Rh(),this.Ze=new ft(Oe)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:Te(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,a)=>{this.it(a)&&t(a)})}ot(e){const t=e.targetId,r=e.Ce.count,a=this._t(t);if(a){const l=a.target;if(rg(l))if(r===0){const c=new _e(l.path);this.tt(t,c,rn.newNoDocument(c,Ie.min()))}else Ye(r===1,20013,{expectedCount:r});else{const c=this.ut(t);if(c!==r){const m=this.ct(e),p=m?this.lt(m,e,c):1;if(p!==0){this.st(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,g)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:a=0},hashCount:l=0}=t;let c,m;try{c=us(r).toUint8Array()}catch(p){if(p instanceof wA)return Do("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new py(c,a,l)}catch(p){return Do(p instanceof fu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.pe===0?null:m}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let a=0;return r.forEach(l=>{const c=this.ze.Pt(),m=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(m)||(this.tt(t,l,null),a++)}),a}It(e){const t=new Map;this.je.forEach((l,c)=>{const m=this._t(c);if(m){if(l.current&&rg(m.target)){const p=new _e(m.target.path);this.Et(p).has(c)||this.dt(c,p)||this.tt(c,p,rn.newNoDocument(p,e))}l.Le&&(t.set(c,l.qe()),l.Qe())}});let r=je();this.Ye.forEach((l,c)=>{let m=!0;c.forEachWhile(p=>{const g=this._t(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(r=r.add(l))}),this.He.forEach((l,c)=>c.setReadTime(e));const a=new Bf(e,t,this.Ze,this.He,r);return this.He=cr(),this.Je=Rh(),this.Ye=Rh(),this.Ze=new ft(Oe),a}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const a=this.rt(e);this.dt(e,t)?a.$e(t,1):a.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new DE,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new Mt(Oe),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Mt(Oe),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||he("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new DE),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Rh(){return new ft(_e.comparator)}function PE(){return new ft(_e.comparator)}const SD={asc:"ASCENDING",desc:"DESCENDING"},wD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ID={and:"AND",or:"OR"};class RD{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ag(i,e){return i.useProto3Json||kf(e)?e:{value:e}}function uf(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tS(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function CD(i,e){return uf(i,e.toTimestamp())}function Ai(i){return Ye(!!i,49232),Ie.fromTimestamp(function(t){const r=ls(t);return new Rt(r.seconds,r.nanos)}(i))}function gy(i,e){return og(i,e).canonicalString()}function og(i,e){const t=function(a){return new ct(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?t:t.child(e)}function nS(i){const e=ct.fromString(i);return Ye(oS(e),10190,{key:e.toString()}),e}function lg(i,e){return gy(i.databaseId,e.path)}function bp(i,e){const t=nS(e);if(t.get(1)!==i.databaseId.projectId)throw new ye(ie.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ye(ie.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new _e(rS(t))}function iS(i,e){return gy(i.databaseId,e)}function xD(i){const e=nS(i);return e.length===4?ct.emptyPath():rS(e)}function ug(i){return new ct(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function rS(i){return Ye(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function kE(i,e,t){return{name:lg(i,e),fields:t.value.mapValue.fields}}function ND(i,e){let t;if("targetChange"in e){e.targetChange;const r=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Te(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,v){return g.useProto3Json?(Ye(v===void 0||typeof v=="string",58123),Xt.fromBase64String(v||"")):(Ye(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Xt.fromUint8Array(v||new Uint8Array))}(i,e.targetChange.resumeToken),c=e.targetChange.cause,m=c&&function(g){const v=g.code===void 0?ie.UNKNOWN:JA(g.code);return new ye(v,g.message||"")}(c);t=new eS(r,a,l,m||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const a=bp(i,r.document.name),l=Ai(r.document.updateTime),c=r.document.createTime?Ai(r.document.createTime):Ie.min(),m=new mn({mapValue:{fields:r.document.fields}}),p=rn.newFoundDocument(a,l,c,m),g=r.targetIds||[],v=r.removedTargetIds||[];t=new Bh(g,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const a=bp(i,r.document),l=r.readTime?Ai(r.readTime):Ie.min(),c=rn.newNoDocument(a,l),m=r.removedTargetIds||[];t=new Bh([],m,c.key,c)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const a=bp(i,r.document),l=r.removedTargetIds||[];t=new Bh([],l,a,null)}else{if(!("filter"in e))return Te(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:a=0,unchangedNames:l}=r,c=new bD(a,l),m=r.targetId;t=new ZA(m,c)}}return t}function OD(i,e){let t;if(e instanceof Hu)t={update:kE(i,e.key,e.value)};else if(e instanceof WA)t={delete:lg(i,e.key)};else if(e instanceof Es)t={update:kE(i,e.key,e.data),updateMask:zD(e.fieldMask)};else{if(!(e instanceof yD))return Te(16599,{ft:e.type});t={verify:lg(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(l,c){const m=c.transform;if(m instanceof of)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof ku)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Mu)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof lf)return{fieldPath:c.field.canonicalString(),increment:m.Re};throw Te(20930,{transform:c.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:CD(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te(27497)}(i,e.precondition)),t}function DD(i,e){return i&&i.length>0?(Ye(e!==void 0,14353),i.map(t=>function(a,l){let c=a.updateTime?Ai(a.updateTime):Ai(l);return c.isEqual(Ie.min())&&(c=Ai(l)),new mD(c,a.transformResults||[])}(t,e))):[]}function PD(i,e){return{documents:[iS(i,e.path)]}}function kD(i,e){const t={structuredQuery:{}},r=e.path;let a;e.collectionGroup!==null?(a=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=iS(i,a);const l=function(g){if(g.length!==0)return aS(Ii.create(g,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(v=>function(S){return{field:Eo(S.field),direction:LD(S.dir)}}(v))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const m=ag(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{gt:t,parent:a}}function MD(i){let e=xD(i.parent);const t=i.structuredQuery,r=t.from?t.from.length:0;let a=null;if(r>0){Ye(r===1,65062);const v=t.from[0];v.allDescendants?a=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=function(E){const S=sS(E);return S instanceof Ii&&MA(S)?S.getFilters():[S]}(t.where));let c=[];t.orderBy&&(c=function(E){return E.map(S=>function(F){return new af(To(F.field),function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(F.direction))}(S))}(t.orderBy));let m=null;t.limit&&(m=function(E){let S;return S=typeof E=="object"?E.value:E,kf(S)?null:S}(t.limit));let p=null;t.startAt&&(p=function(E){const S=!!E.before,V=E.values||[];return new sf(V,S)}(t.startAt));let g=null;return t.endAt&&(g=function(E){const S=!E.before,V=E.values||[];return new sf(V,S)}(t.endAt)),eD(e,a,c,l,m,"F",p,g)}function VD(i,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te(28987,{purpose:a})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function sS(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=To(t.unaryFilter.field);return kt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const a=To(t.unaryFilter.field);return kt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=To(t.unaryFilter.field);return kt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=To(t.unaryFilter.field);return kt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Te(61313);default:return Te(60726)}}(i):i.fieldFilter!==void 0?function(t){return kt.create(To(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Te(58110);default:return Te(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Ii.create(t.compositeFilter.filters.map(r=>sS(r)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Te(1026)}}(t.compositeFilter.op))}(i):Te(30097,{filter:i})}function LD(i){return SD[i]}function UD(i){return wD[i]}function jD(i){return ID[i]}function Eo(i){return{fieldPath:i.canonicalString()}}function To(i){return Qt.fromServerFormat(i.fieldPath)}function aS(i){return i instanceof kt?function(t){if(t.op==="=="){if(EE(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NAN"}};if(bE(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(EE(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NOT_NAN"}};if(bE(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Eo(t.field),op:UD(t.op),value:t.value}}}(i):i instanceof Ii?function(t){const r=t.getFilters().map(a=>aS(a));return r.length===1?r[0]:{compositeFilter:{op:jD(t.op),filters:r}}}(i):Te(54877,{filter:i})}function zD(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function oS(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,t,r,a,l=Ie.min(),c=Ie.min(),m=Xt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(e){return new Zr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e){this.wt=e}}function FD(i){const e=MD({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?sg(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(){this.Cn=new HD}addToCollectionParentIndex(e,t){return this.Cn.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(os.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(os.min())}updateCollectionGroup(e,t,r){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}}class HD{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t]||new Mt(ct.comparator),l=!a.has(r);return this.index[t]=a.add(r),l}has(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t];return a&&a.has(r)}getEntries(e){return(this.index[e]||new Mt(ct.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},lS=41943040;class dn{static withCacheSize(e){return new dn(e,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn.DEFAULT_COLLECTION_PERCENTILE=10,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dn.DEFAULT=new dn(lS,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dn.DISABLED=new dn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Vo(0)}static lr(){return new Vo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE="LruGarbageCollector",GD=1048576;function LE([i,e],[t,r]){const a=Oe(i,t);return a===0?Oe(e,r):a}class $D{constructor(e){this.Er=e,this.buffer=new Mt(LE),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();LE(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class KD{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){he(VE,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Yo(t)?he(VE,"Ignoring IndexedDB error during garbage collection: ",t):await Ko(t)}await this.mr(3e5)})}}class YD{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return Z.resolve(Pf.le);const r=new $D(t);return this.gr.forEachTarget(e,a=>r.Rr(a.sequenceNumber)).next(()=>this.gr.yr(e,a=>r.Rr(a))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(ME)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ME):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,a,l,c,m,p,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),a=this.params.maximumSequenceNumbersToCollect):a=E,c=Date.now(),this.nthSequenceNumber(e,a))).next(E=>(r=E,m=Date.now(),this.removeTargets(e,r,t))).next(E=>(l=E,p=Date.now(),this.removeOrphanedDocuments(e,r))).next(E=>(g=Date.now(),_o()<=Me.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${a} in `+(m-c)+`ms
	Removed ${l} targets in `+(p-m)+`ms
	Removed ${E} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:E})))}}function QD(i,e){return new YD(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(){this.changes=new _a(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?Z.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e,t,r,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=a}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(r=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(r!==null&&bu(r.mutation,a,wn.empty(),Rt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,je()).next(()=>r))}getLocalViewOfDocuments(e,t,r=je()){const a=la();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,r).next(l=>{let c=hu();return l.forEach((m,p)=>{c=c.insert(m,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const r=la();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,je()))}populateOverlays(e,t,r){const a=[];return r.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,m)=>{t.set(c,m)})})}computeViews(e,t,r,a){let l=cr();const c=_u(),m=function(){return _u()}();return t.forEach((p,g)=>{const v=r.get(g.key);a.has(g.key)&&(v===void 0||v.mutation instanceof Es)?l=l.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),bu(v.mutation,g,v.mutation.getFieldMask(),Rt.now())):c.set(g.key,wn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((g,v)=>c.set(g,v)),t.forEach((g,v)=>{var E;return m.set(g,new WD(v,(E=c.get(g))!==null&&E!==void 0?E:null))}),m))}recalculateAndSaveOverlays(e,t){const r=_u();let a=new ft((c,m)=>c-m),l=je();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const m of c)m.keys().forEach(p=>{const g=t.get(p);if(g===null)return;let v=r.get(p)||wn.empty();v=m.applyToLocalView(g,v),r.set(p,v);const E=(a.get(m.batchId)||je()).add(p);a=a.insert(m.batchId,E)})}).next(()=>{const c=[],m=a.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),g=p.key,v=p.value,E=qA();v.forEach(S=>{if(!l.has(S)){const V=QA(t.get(S),r.get(S));V!==null&&E.set(S,V),l=l.add(S)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,E))}return Z.waitFor(c)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,a){return function(c){return _e.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):tD(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,a):this.getDocumentsMatchingCollectionQuery(e,t,r,a)}getNextDocuments(e,t,r,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,a-l.size):Z.resolve(la());let m=Nu,p=l;return c.next(g=>Z.forEach(g,(v,E)=>(m<E.largestBatchId&&(m=E.largestBatchId),l.get(v)?Z.resolve():this.remoteDocumentCache.getEntry(e,v).next(S=>{p=p.insert(v,S)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,p,g,je())).next(v=>({batchId:m,changes:FA(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next(r=>{let a=hu();return r.isFoundDocument()&&(a=a.insert(r.key,r)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,r,a){const l=t.collectionGroup;let c=hu();return this.indexManager.getCollectionParents(e,l).next(m=>Z.forEach(m,p=>{const g=function(E,S){return new Vf(S,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,r,a).next(v=>{v.forEach((E,S)=>{c=c.insert(E,S)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,r,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,l,a))).next(c=>{l.forEach((p,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,rn.newInvalidDocument(v)))});let m=hu();return c.forEach((p,g)=>{const v=l.get(p);v!==void 0&&bu(v.mutation,g,wn.empty(),Rt.now()),Uf(t,g)&&(m=m.insert(p,g))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return Z.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Ai(a.createTime)}}(t)),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(a){return{name:a.name,query:FD(a.bundledQuery),readTime:Ai(a.readTime)}}(t)),Z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(){this.overlays=new ft(_e.comparator),this.Qr=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){const r=la();return Z.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&r.set(a,l)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((a,l)=>{this.bt(e,t,l)}),Z.resolve()}removeOverlaysForBatchId(e,t,r){const a=this.Qr.get(r);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Qr.delete(r)),Z.resolve()}getOverlaysForCollection(e,t,r){const a=la(),l=t.length+1,c=new _e(t.child("")),m=this.overlays.getIteratorFrom(c);for(;m.hasNext();){const p=m.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>r&&a.set(p.getKey(),p)}return Z.resolve(a)}getOverlaysForCollectionGroup(e,t,r,a){let l=new ft((g,v)=>g-v);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>r){let v=l.get(g.largestBatchId);v===null&&(v=la(),l=l.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const m=la(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,v)=>m.set(g,v)),!(m.size()>=a)););return Z.resolve(m)}bt(e,t,r){const a=this.overlays.get(r.key);if(a!==null){const c=this.Qr.get(a.largestBatchId).delete(r.key);this.Qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new _D(t,r));let l=this.Qr.get(t);l===void 0&&(l=je(),this.Qr.set(t,l)),this.Qr.set(t,l.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(){this.sessionToken=Xt.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(){this.$r=new Mt(Ft.Ur),this.Kr=new Mt(Ft.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new Ft(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new Ft(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new _e(new ct([])),r=new Ft(t,e),a=new Ft(t,e+1),l=[];return this.Kr.forEachInRange([r,a],c=>{this.zr(c),l.push(c.key)}),l}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new _e(new ct([])),r=new Ft(t,e),a=new Ft(t,e+1);let l=je();return this.Kr.forEachInRange([r,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new Ft(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ft{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return _e.comparator(e.key,t.key)||Oe(e.Zr,t.Zr)}static Wr(e,t){return Oe(e.Zr,t.Zr)||_e.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new Mt(Ft.Ur)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,a){const l=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new vD(l,t,r,a);this.mutationQueue.push(c);for(const m of a)this.Xr=this.Xr.add(new Ft(m.key,l)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return Z.resolve(c)}lookupMutationBatch(e,t){return Z.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=this.ti(r),l=a<0?0:a;return Z.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?oy:this.nr-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ft(t,0),a=new Ft(t,Number.POSITIVE_INFINITY),l=[];return this.Xr.forEachInRange([r,a],c=>{const m=this.ei(c.Zr);l.push(m)}),Z.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Mt(Oe);return t.forEach(a=>{const l=new Ft(a,0),c=new Ft(a,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([l,c],m=>{r=r.add(m.Zr)})}),Z.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1;let l=r;_e.isDocumentKey(l)||(l=l.child(""));const c=new Ft(new _e(l),0);let m=new Mt(Oe);return this.Xr.forEachWhile(p=>{const g=p.key.path;return!!r.isPrefixOf(g)&&(g.length===a&&(m=m.add(p.Zr)),!0)},c),Z.resolve(this.ni(m))}ni(e){const t=[];return e.forEach(r=>{const a=this.ei(r);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){Ye(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return Z.forEach(t.mutations,a=>{const l=new Ft(a.key,t.batchId);return r=r.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new Ft(t,0),a=this.Xr.firstAfterOrEqual(r);return Z.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e){this.ii=e,this.docs=function(){return new ft(_e.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,a=this.docs.get(r),l=a?a.size:0,c=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return Z.resolve(r?r.document.mutableCopy():rn.newInvalidDocument(t))}getEntries(e,t){let r=cr();return t.forEach(a=>{const l=this.docs.get(a);r=r.insert(a,l?l.document.mutableCopy():rn.newInvalidDocument(a))}),Z.resolve(r)}getDocumentsMatchingQuery(e,t,r,a){let l=cr();const c=t.path,m=new _e(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||DO(OO(v),r)<=0||(a.has(v.key)||Uf(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return Z.resolve(l)}getAllFromCollectionGroup(e,t,r,a){Te(9500)}si(e,t){return Z.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new rP(this)}getSize(e){return Z.resolve(this.size)}}class rP extends XD{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,a)=>{a.isValidDocument()?t.push(this.Br.addEntry(e,a)):this.Br.removeEntry(r)}),Z.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e){this.persistence=e,this.oi=new _a(t=>cy(t),hy),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this._i=0,this.ai=new yy,this.targetCount=0,this.ui=Vo.cr()}forEachTarget(e,t){return this.oi.forEach((r,a)=>t(a)),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),Z.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new Vo(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.Tr(t),Z.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,t,r){let a=0;const l=[];return this.oi.forEach((c,m)=>{m.sequenceNumber<=t&&r.get(m.targetId)===null&&(this.oi.delete(c),l.push(this.removeMatchingKeysForTargetId(e,m.targetId)),a++)}),Z.waitFor(l).next(()=>a)}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return Z.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),Z.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),Z.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),Z.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return Z.resolve(r)}containsKey(e,t){return Z.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,t){this.ci={},this.overlays={},this.li=new Pf(0),this.hi=!1,this.hi=!0,this.Pi=new tP,this.referenceDelegate=e(this),this.Ti=new sP(this),this.indexManager=new qD,this.remoteDocumentCache=function(a){return new iP(a)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new BD(t),this.Ei=new ZD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new eP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new nP(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){he("MemoryPersistence","Starting transaction:",e);const a=new aP(this.li.next());return this.referenceDelegate.di(),r(a).next(l=>this.referenceDelegate.Ai(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ri(e,t){return Z.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class aP extends kO{constructor(e){super(),this.currentSequenceNumber=e}}class vy{constructor(e){this.persistence=e,this.Vi=new yy,this.mi=null}static fi(e){return new vy(e)}get gi(){if(this.mi)return this.mi;throw Te(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),Z.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),Z.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(a=>this.gi.add(a.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.gi.add(l.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.gi,r=>{const a=_e.fromPath(r);return this.pi(e,a).next(l=>{l||t.removeEntry(a,Ie.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return Z.or([()=>Z.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class cf{constructor(e,t){this.persistence=e,this.yi=new _a(r=>LO(r.path),(r,a)=>r.isEqual(a)),this.garbageCollector=QD(this,t)}static fi(e,t){return new cf(e,t)}di(){}Ai(e){return Z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}Sr(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return Z.forEach(this.yi,(r,a)=>this.Dr(e,r,a).next(l=>l?Z.resolve():t(a)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.si(e,c=>this.Dr(e,c,t).next(m=>{m||(r++,l.removeEntry(c,Ie.min()))})).next(()=>l.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),Z.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),Z.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),Z.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Uh(e.data.value)),t}Dr(e,t,r){return Z.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.yi.get(t);return Z.resolve(a!==void 0&&a>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,t,r,a){this.targetId=e,this.fromCache=t,this.ds=r,this.As=a}static Rs(e,t){let r=je(),a=je();for(const l of t.docChanges)switch(l.type){case 0:r=r.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new _y(e,t.fromCache,r,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return t2()?8:MO(it())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,a){const l={result:null};return this.ws(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.Ss(e,t,a,r).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new oP;return this.bs(e,t,c).next(m=>{if(l.result=m,this.fs)return this.Ds(e,t,c,m.size)})}).next(()=>l.result)}Ds(e,t,r,a){return r.documentReadCount<this.gs?(_o()<=Me.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",bo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),Z.resolve()):(_o()<=Me.DEBUG&&he("QueryEngine","Query:",bo(t),"scans",r.documentReadCount,"local documents and returns",a,"documents as results."),r.documentReadCount>this.ps*a?(_o()<=Me.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",bo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ti(t))):Z.resolve())}ws(e,t){if(wE(t))return Z.resolve(null);let r=Ti(t);return this.indexManager.getIndexType(e,r).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=sg(t,null,"F"),r=Ti(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(l=>{const c=je(...l);return this.ys.getDocuments(e,c).next(m=>this.indexManager.getMinOffset(e,r).next(p=>{const g=this.vs(t,m);return this.Cs(t,g,c,p.readTime)?this.ws(e,sg(t,null,"F")):this.Fs(e,g,t,p)}))})))}Ss(e,t,r,a){return wE(t)||a.isEqual(Ie.min())?Z.resolve(null):this.ys.getDocuments(e,r).next(l=>{const c=this.vs(t,l);return this.Cs(t,c,r,a)?Z.resolve(null):(_o()<=Me.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),bo(t)),this.Fs(e,c,t,NO(a,Nu)).next(m=>m))})}vs(e,t){let r=new Mt(zA(e));return t.forEach((a,l)=>{Uf(e,l)&&(r=r.add(l))}),r}Cs(e,t,r,a){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}bs(e,t,r){return _o()<=Me.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",bo(t)),this.ys.getDocumentsMatchingQuery(e,t,os.min(),r)}Fs(e,t,r,a){return this.ys.getDocumentsMatchingQuery(e,r,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by="LocalStore",uP=3e8;class cP{constructor(e,t,r,a){this.persistence=e,this.Ms=t,this.serializer=a,this.xs=new ft(Oe),this.Os=new _a(l=>cy(l),hy),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JD(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function hP(i,e,t,r){return new cP(i,e,t,r)}async function cS(i,e){const t=Ce(i);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let a;return t.mutationQueue.getAllMutationBatches(r).next(l=>(a=l,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(l=>{const c=[],m=[];let p=je();for(const g of a){c.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of l){m.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(r,p).next(g=>({ks:g,removedBatchIds:c,addedBatchIds:m}))})})}function fP(i,e){const t=Ce(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const a=e.batch.keys(),l=t.Bs.newChangeBuffer({trackRemovals:!0});return function(m,p,g,v){const E=g.batch,S=E.keys();let V=Z.resolve();return S.forEach(F=>{V=V.next(()=>v.getEntry(p,F)).next(Y=>{const U=g.docVersions.get(F);Ye(U!==null,48541),Y.version.compareTo(U)<0&&(E.applyToRemoteDocument(Y,g),Y.isValidDocument()&&(Y.setReadTime(g.commitVersion),v.addEntry(Y)))})}),V.next(()=>m.mutationQueue.removeMutationBatch(p,E))}(t,r,e,l).next(()=>l.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(m){let p=je();for(let g=0;g<m.mutationResults.length;++g)m.mutationResults[g].transformResults.length>0&&(p=p.add(m.batch.mutations[g].key));return p}(e))).next(()=>t.localDocuments.getDocuments(r,a))})}function hS(i){const e=Ce(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function dP(i,e){const t=Ce(i),r=e.snapshotVersion;let a=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.Bs.newChangeBuffer({trackRemovals:!0});a=t.xs;const m=[];e.targetChanges.forEach((v,E)=>{const S=a.get(E);if(!S)return;m.push(t.Ti.removeMatchingKeys(l,v.removedDocuments,E).next(()=>t.Ti.addMatchingKeys(l,v.addedDocuments,E)));let V=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(E)!==null?V=V.withResumeToken(Xt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):v.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(v.resumeToken,r)),a=a.insert(E,V),function(Y,U,te){return Y.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=uP?!0:te.addedDocuments.size+te.modifiedDocuments.size+te.removedDocuments.size>0}(S,V,v)&&m.push(t.Ti.updateTargetData(l,V))});let p=cr(),g=je();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))}),m.push(mP(l,c,e.documentUpdates).next(v=>{p=v.qs,g=v.Qs})),!r.isEqual(Ie.min())){const v=t.Ti.getLastRemoteSnapshotVersion(l).next(E=>t.Ti.setTargetsMetadata(l,l.currentSequenceNumber,r));m.push(v)}return Z.waitFor(m).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(t.xs=a,l))}function mP(i,e,t){let r=je(),a=je();return t.forEach(l=>r=r.add(l)),e.getEntries(i,r).next(l=>{let c=cr();return t.forEach((m,p)=>{const g=l.get(m);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(m)),p.isNoDocument()&&p.version.isEqual(Ie.min())?(e.removeEntry(m,p.readTime),c=c.insert(m,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(m,p)):he(by,"Ignoring outdated watch update for ",m,". Current version:",g.version," Watch version:",p.version)}),{qs:c,Qs:a}})}function pP(i,e){const t=Ce(i);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=oy),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gP(i,e){const t=Ce(i);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let a;return t.Ti.getTargetData(r,e).next(l=>l?(a=l,Z.resolve(a)):t.Ti.allocateTargetId(r).next(c=>(a=new Zr(e,c,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,a).next(()=>a))))}).then(r=>{const a=t.xs.get(r.targetId);return(a===null||r.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}async function cg(i,e,t){const r=Ce(i),a=r.xs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",l,c=>r.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!Yo(c))throw c;he(by,`Failed to update sequence numbers for target ${e}: ${c}`)}r.xs=r.xs.remove(e),r.Os.delete(a.target)}function UE(i,e,t){const r=Ce(i);let a=Ie.min(),l=je();return r.persistence.runTransaction("Execute query","readwrite",c=>function(p,g,v){const E=Ce(p),S=E.Os.get(v);return S!==void 0?Z.resolve(E.xs.get(S)):E.Ti.getTargetData(g,v)}(r,c,Ti(e)).next(m=>{if(m)return a=m.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(c,m.targetId).next(p=>{l=p})}).next(()=>r.Ms.getDocumentsMatchingQuery(c,e,t?a:Ie.min(),t?l:je())).next(m=>(yP(r,iD(e),m),{documents:m,$s:l})))}function yP(i,e,t){let r=i.Ns.get(e)||Ie.min();t.forEach((a,l)=>{l.readTime.compareTo(r)>0&&(r=l.readTime)}),i.Ns.set(e,r)}class jE{constructor(){this.activeTargetIds=uD()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vP{constructor(){this.xo=new jE,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new jE,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE="ConnectivityMonitor";class BE{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){he(zE,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){he(zE,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ch=null;function hg(){return Ch===null?Ch=function(){return 268435456+Math.round(2147483648*Math.random())}():Ch++,"0x"+Ch.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="RestConnection",bP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class EP{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${a}`,this.Go=this.databaseId.database===nf?`project_id=${r}`:`project_id=${r}&database_id=${a}`}zo(e,t,r,a,l){const c=hg(),m=this.jo(e,t.toUriEncodedString());he(Ep,`Sending RPC '${e}' ${c}:`,m,r);const p={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(p,a,l);const{host:g}=new URL(m),v=qo(g);return this.Jo(e,m,p,r,v).then(E=>(he(Ep,`Received RPC '${e}' ${c}: `,E),E),E=>{throw Do(Ep,`RPC '${e}' ${c} failed with error: `,E,"url: ",m,"request:",r),E})}Yo(e,t,r,a,l,c){return this.zo(e,t,r,a,l)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$o}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),r&&r.headers.forEach((a,l)=>e[l]=a)}jo(e,t){const r=bP[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en="WebChannelConnection";class AP extends EP{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,a,l){const c=hg();return new Promise((m,p)=>{const g=new mA;g.setWithCredentials(!0),g.listenOnce(pA.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Lh.NO_ERROR:const E=g.getResponseJson();he(en,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(E)),m(E);break;case Lh.TIMEOUT:he(en,`RPC '${e}' ${c} timed out`),p(new ye(ie.DEADLINE_EXCEEDED,"Request time out"));break;case Lh.HTTP_ERROR:const S=g.getStatus();if(he(en,`RPC '${e}' ${c} failed with status:`,S,"response text:",g.getResponseText()),S>0){let V=g.getResponseJson();Array.isArray(V)&&(V=V[0]);const F=V==null?void 0:V.error;if(F&&F.status&&F.message){const Y=function(te){const ne=te.toLowerCase().replace(/_/g,"-");return Object.values(ie).indexOf(ne)>=0?ne:ie.UNKNOWN}(F.status);p(new ye(Y,F.message))}else p(new ye(ie.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ye(ie.UNAVAILABLE,"Connection failed."));break;default:Te(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{he(en,`RPC '${e}' ${c} completed.`)}});const v=JSON.stringify(a);he(en,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",v,r,15)})}T_(e,t,r){const a=hg(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=vA(),m=yA(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Ho(p.initMessageHeaders,t,r),p.encodeInitMessageHeaders=!0;const v=l.join("");he(en,`Creating RPC '${e}' stream ${a}: ${v}`,p);const E=c.createWebChannel(v,p);let S=!1,V=!1;const F=new TP({Zo:U=>{V?he(en,`Not sending because RPC '${e}' stream ${a} is closed:`,U):(S||(he(en,`Opening RPC '${e}' stream ${a} transport.`),E.open(),S=!0),he(en,`RPC '${e}' stream ${a} sending:`,U),E.send(U))},Xo:()=>E.close()}),Y=(U,te,ne)=>{U.listen(te,$=>{try{ne($)}catch(oe){setTimeout(()=>{throw oe},0)}})};return Y(E,cu.EventType.OPEN,()=>{V||(he(en,`RPC '${e}' stream ${a} transport opened.`),F.__())}),Y(E,cu.EventType.CLOSE,()=>{V||(V=!0,he(en,`RPC '${e}' stream ${a} transport closed`),F.u_())}),Y(E,cu.EventType.ERROR,U=>{V||(V=!0,Do(en,`RPC '${e}' stream ${a} transport errored. Name:`,U.name,"Message:",U.message),F.u_(new ye(ie.UNAVAILABLE,"The operation could not be completed")))}),Y(E,cu.EventType.MESSAGE,U=>{var te;if(!V){const ne=U.data[0];Ye(!!ne,16349);const $=ne,oe=($==null?void 0:$.error)||((te=$[0])===null||te===void 0?void 0:te.error);if(oe){he(en,`RPC '${e}' stream ${a} received error:`,oe);const le=oe.status;let me=function(I){const N=wt[I];if(N!==void 0)return JA(N)}(le),M=oe.message;me===void 0&&(me=ie.INTERNAL,M="Unknown error status: "+le+" with message "+oe.message),V=!0,F.u_(new ye(me,M)),E.close()}else he(en,`RPC '${e}' stream ${a} received:`,ne),F.c_(ne)}}),Y(m,gA.STAT_EVENT,U=>{U.stat===Zp.PROXY?he(en,`RPC '${e}' stream ${a} detected buffering proxy`):U.stat===Zp.NOPROXY&&he(en,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{F.a_()},0),F}}function Tp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(i){return new RD(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,t,r=1e3,a=1.5,l=6e4){this.xi=e,this.timerId=t,this.I_=r,this.E_=a,this.d_=l,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),a=Math.max(0,t-r);a>0&&he("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,a,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE="PersistentStream";class dS{constructor(e,t,r,a,l,c,m,p){this.xi=e,this.y_=r,this.w_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new fS(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===ie.RESOURCE_EXHAUSTED?(ur(t.toString()),ur("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===ie.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,a])=>{this.S_===t&&this.K_(r,a)},r=>{e(()=>{const a=new ye(ie.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(a)})})}K_(e,t){const r=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(a=>{r(()=>this.W_(a))}),this.stream.onMessage(a=>{r(()=>++this.v_==1?this.z_(a):this.onNext(a))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return he(FE,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(he(FE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SP extends dS{constructor(e,t,r,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,a,c),this.serializer=l}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=ND(this.serializer,e),r=function(l){if(!("targetChange"in l))return Ie.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ie.min():c.readTime?Ai(c.readTime):Ie.min()}(e);return this.listener.j_(t,r)}H_(e){const t={};t.database=ug(this.serializer),t.addTarget=function(l,c){let m;const p=c.target;if(m=rg(p)?{documents:PD(l,p)}:{query:kD(l,p).gt},m.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){m.resumeToken=tS(l,c.resumeToken);const g=ag(l,c.expectedCount);g!==null&&(m.expectedCount=g)}else if(c.snapshotVersion.compareTo(Ie.min())>0){m.readTime=uf(l,c.snapshotVersion.toTimestamp());const g=ag(l,c.expectedCount);g!==null&&(m.expectedCount=g)}return m}(this.serializer,e);const r=VD(this.serializer,e);r&&(t.labels=r),this.L_(t)}J_(e){const t={};t.database=ug(this.serializer),t.removeTarget=e,this.L_(t)}}class wP extends dS{constructor(e,t,r,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,a,c),this.serializer=l}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return Ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){Ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=DD(e.writeResults,e.commitTime),r=Ai(e.commitTime);return this.listener.ea(r,t)}ta(){const e={};e.database=ug(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>OD(this.serializer,r))};this.L_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{}class RP extends IP{constructor(e,t,r,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=a,this.na=!1}ra(){if(this.na)throw new ye(ie.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,a){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.zo(e,og(t,r),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ye(ie.UNKNOWN,l.toString())})}Yo(e,t,r,a,l){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,m])=>this.connection.Yo(e,og(t,r),a,c,m,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ye(ie.UNKNOWN,c.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class CP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(ur(t),this.oa=!1):he("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma="RemoteStore";class xP{constructor(e,t,r,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=l,this.Ea.No(c=>{r.enqueueAndForget(async()=>{ba(this)&&(he(ma,"Restarting streams for network reachability change."),await async function(p){const g=Ce(p);g.Ta.add(4),await $u(g),g.da.set("Unknown"),g.Ta.delete(4),await qf(g)}(this))})}),this.da=new CP(r,a)}}async function qf(i){if(ba(i))for(const e of i.Ia)await e(!0)}async function $u(i){for(const e of i.Ia)await e(!1)}function mS(i,e){const t=Ce(i);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),Sy(t)?Ay(t):Qo(t).M_()&&Ty(t,e))}function Ey(i,e){const t=Ce(i),r=Qo(t);t.Pa.delete(e),r.M_()&&pS(t,e),t.Pa.size===0&&(r.M_()?r.N_():ba(t)&&t.da.set("Unknown"))}function Ty(i,e){if(i.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Qo(i).H_(e)}function pS(i,e){i.Aa.Ke(e),Qo(i).J_(e)}function Ay(i){i.Aa=new AD({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>i.Pa.get(e)||null,Pt:()=>i.datastore.serializer.databaseId}),Qo(i).start(),i.da._a()}function Sy(i){return ba(i)&&!Qo(i).F_()&&i.Pa.size>0}function ba(i){return Ce(i).Ta.size===0}function gS(i){i.Aa=void 0}async function NP(i){i.da.set("Online")}async function OP(i){i.Pa.forEach((e,t)=>{Ty(i,e)})}async function DP(i,e){gS(i),Sy(i)?(i.da.ca(e),Ay(i)):i.da.set("Unknown")}async function PP(i,e,t){if(i.da.set("Online"),e instanceof eS&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const m of l.targetIds)a.Pa.has(m)&&(await a.remoteSyncer.rejectListen(m,c),a.Pa.delete(m),a.Aa.removeTarget(m))}(i,e)}catch(r){he(ma,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hf(i,r)}else if(e instanceof Bh?i.Aa.Xe(e):e instanceof ZA?i.Aa.ot(e):i.Aa.nt(e),!t.isEqual(Ie.min()))try{const r=await hS(i.localStore);t.compareTo(r)>=0&&await function(l,c){const m=l.Aa.It(c);return m.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.Pa.get(g);v&&l.Pa.set(g,v.withResumeToken(p.resumeToken,c))}}),m.targetMismatches.forEach((p,g)=>{const v=l.Pa.get(p);if(!v)return;l.Pa.set(p,v.withResumeToken(Xt.EMPTY_BYTE_STRING,v.snapshotVersion)),pS(l,p);const E=new Zr(v.target,p,g,v.sequenceNumber);Ty(l,E)}),l.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(r){he(ma,"Failed to raise snapshot:",r),await hf(i,r)}}async function hf(i,e,t){if(!Yo(e))throw e;i.Ta.add(1),await $u(i),i.da.set("Offline"),t||(t=()=>hS(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{he(ma,"Retrying IndexedDB access"),await t(),i.Ta.delete(1),await qf(i)})}function yS(i,e){return e().catch(t=>hf(i,t,e))}async function Hf(i){const e=Ce(i),t=hs(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:oy;for(;kP(e);)try{const a=await pP(e.localStore,r);if(a===null){e.ha.length===0&&t.N_();break}r=a.batchId,MP(e,a)}catch(a){await hf(e,a)}vS(e)&&_S(e)}function kP(i){return ba(i)&&i.ha.length<10}function MP(i,e){i.ha.push(e);const t=hs(i);t.M_()&&t.Y_&&t.Z_(e.mutations)}function vS(i){return ba(i)&&!hs(i).F_()&&i.ha.length>0}function _S(i){hs(i).start()}async function VP(i){hs(i).ta()}async function LP(i){const e=hs(i);for(const t of i.ha)e.Z_(t.mutations)}async function UP(i,e,t){const r=i.ha.shift(),a=my.from(r,e,t);await yS(i,()=>i.remoteSyncer.applySuccessfulWrite(a)),await Hf(i)}async function jP(i,e){e&&hs(i).Y_&&await async function(r,a){if(function(c){return ED(c)&&c!==ie.ABORTED}(a.code)){const l=r.ha.shift();hs(r).O_(),await yS(r,()=>r.remoteSyncer.rejectFailedWrite(l.batchId,a)),await Hf(r)}}(i,e),vS(i)&&_S(i)}async function qE(i,e){const t=Ce(i);t.asyncQueue.verifyOperationInProgress(),he(ma,"RemoteStore received new credentials");const r=ba(t);t.Ta.add(3),await $u(t),r&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await qf(t)}async function zP(i,e){const t=Ce(i);e?(t.Ta.delete(2),await qf(t)):e||(t.Ta.add(2),await $u(t),t.da.set("Unknown"))}function Qo(i){return i.Ra||(i.Ra=function(t,r,a){const l=Ce(t);return l.ra(),new SP(r,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{e_:NP.bind(null,i),n_:OP.bind(null,i),i_:DP.bind(null,i),j_:PP.bind(null,i)}),i.Ia.push(async e=>{e?(i.Ra.O_(),Sy(i)?Ay(i):i.da.set("Unknown")):(await i.Ra.stop(),gS(i))})),i.Ra}function hs(i){return i.Va||(i.Va=function(t,r,a){const l=Ce(t);return l.ra(),new wP(r,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{e_:()=>Promise.resolve(),n_:VP.bind(null,i),i_:jP.bind(null,i),X_:LP.bind(null,i),ea:UP.bind(null,i)}),i.Ia.push(async e=>{e?(i.Va.O_(),await Hf(i)):(await i.Va.stop(),i.ha.length>0&&(he(ma,`Stopping write stream with ${i.ha.length} pending writes`),i.ha=[]))})),i.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,t,r,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=a,this.removalCallback=l,this.deferred=new sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,a,l){const c=Date.now()+r,m=new wy(e,t,c,a,l);return m.start(r),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(ie.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Iy(i,e){if(ur("AsyncQueue",`${e}: ${i}`),Yo(i))return new ye(ie.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{static emptySet(e){return new Ro(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||_e.comparator(t.key,r.key):(t,r)=>_e.comparator(t.key,r.key),this.keyedMap=hu(),this.sortedSet=new ft(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ro)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=r.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ro;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(){this.ma=new ft(_e.comparator)}track(e){const t=e.doc.key,r=this.ma.get(t);r?e.type!==0&&r.type===3?this.ma=this.ma.insert(t,e):e.type===3&&r.type!==1?this.ma=this.ma.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ma=this.ma.remove(t):e.type===1&&r.type===2?this.ma=this.ma.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):Te(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,r)=>{e.push(r)}),e}}class Lo{constructor(e,t,r,a,l,c,m,p,g){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,r,a,l){const c=[];return t.forEach(m=>{c.push({type:0,doc:m})}),new Lo(e,t,Ro.emptySet(t),c,r,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==r[a].type||!t[a].doc.isEqual(r[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class FP{constructor(){this.queries=GE(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,r){const a=Ce(t),l=a.queries;a.queries=GE(),l.forEach((c,m)=>{for(const p of m.ya)p.onError(r)})})(this,new ye(ie.ABORTED,"Firestore shutting down"))}}function GE(){return new _a(i=>jA(i),Lf)}async function bS(i,e){const t=Ce(i);let r=3;const a=e.query;let l=t.queries.get(a);l?!l.wa()&&e.Sa()&&(r=2):(l=new BP,r=e.Sa()?0:1);try{switch(r){case 0:l.pa=await t.onListen(a,!0);break;case 1:l.pa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const m=Iy(c,`Initialization of query '${bo(e.query)}' failed`);return void e.onError(m)}t.queries.set(a,l),l.ya.push(e),e.Da(t.onlineState),l.pa&&e.va(l.pa)&&Ry(t)}async function ES(i,e){const t=Ce(i),r=e.query;let a=3;const l=t.queries.get(r);if(l){const c=l.ya.indexOf(e);c>=0&&(l.ya.splice(c,1),l.ya.length===0?a=e.Sa()?0:1:!l.wa()&&e.Sa()&&(a=2))}switch(a){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function qP(i,e){const t=Ce(i);let r=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const m of c.ya)m.va(a)&&(r=!0);c.pa=a}}r&&Ry(t)}function HP(i,e,t){const r=Ce(i),a=r.queries.get(e);if(a)for(const l of a.ya)l.onError(t);r.queries.delete(e)}function Ry(i){i.ba.forEach(e=>{e.next()})}var fg,$E;($E=fg||(fg={})).Ca="default",$E.Cache="cache";class TS{constructor(e,t,r){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){const r=[];for(const a of e.docChanges)a.type!==3&&r.push(a);e=new Lo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const r=t!=="Offline";return(!this.options.La||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=Lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==fg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e){this.key=e}}class SS{constructor(e){this.key=e}}class GP{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=je(),this.mutatedKeys=je(),this.Ha=zA(e),this.Ja=new Ro(this.Ha)}get Ya(){return this.Ga}Za(e,t){const r=t?t.Xa:new HE,a=t?t.Ja:this.Ja;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,m=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((v,E)=>{const S=a.get(v),V=Uf(this.query,E)?E:null,F=!!S&&this.mutatedKeys.has(S.key),Y=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let U=!1;S&&V?S.data.isEqual(V.data)?F!==Y&&(r.track({type:3,doc:V}),U=!0):this.eu(S,V)||(r.track({type:2,doc:V}),U=!0,(p&&this.Ha(V,p)>0||g&&this.Ha(V,g)<0)&&(m=!0)):!S&&V?(r.track({type:0,doc:V}),U=!0):S&&!V&&(r.track({type:1,doc:S}),U=!0,(p||g)&&(m=!0)),U&&(V?(c=c.add(V),l=Y?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),r.track({type:1,doc:v})}return{Ja:c,Xa:r,Cs:m,mutatedKeys:l}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,a){const l=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const c=e.Xa.ga();c.sort((v,E)=>function(V,F){const Y=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te(20277,{Vt:U})}};return Y(V)-Y(F)}(v.type,E.type)||this.Ha(v.doc,E.doc)),this.tu(r),a=a!=null&&a;const m=t&&!a?this.nu():[],p=this.ja.size===0&&this.current&&!a?1:0,g=p!==this.za;return this.za=p,c.length!==0||g?{snapshot:new Lo(this.query,e.Ja,l,c,e.mutatedKeys,p===0,g,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:m}:{ru:m}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new HE,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=je(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const t=[];return e.forEach(r=>{this.ja.has(r)||t.push(new SS(r))}),this.ja.forEach(r=>{e.has(r)||t.push(new AS(r))}),t}su(e){this.Ga=e.$s,this.ja=je();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return Lo.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const Cy="SyncEngine";class $P{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class KP{constructor(e){this.key=e,this._u=!1}}class YP{constructor(e,t,r,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.au={},this.uu=new _a(m=>jA(m),Lf),this.cu=new Map,this.lu=new Set,this.hu=new ft(_e.comparator),this.Pu=new Map,this.Tu=new yy,this.Iu={},this.Eu=new Map,this.du=Vo.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function QP(i,e,t=!0){const r=NS(i);let a;const l=r.uu.get(e);return l?(r.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.ou()):a=await wS(r,e,t,!0),a}async function XP(i,e){const t=NS(i);await wS(t,e,!0,!1)}async function wS(i,e,t,r){const a=await gP(i.localStore,Ti(e)),l=a.targetId,c=i.sharedClientState.addLocalQueryTarget(l,t);let m;return r&&(m=await WP(i,e,l,c==="current",a.resumeToken)),i.isPrimaryClient&&t&&mS(i.remoteStore,a),m}async function WP(i,e,t,r,a){i.Ru=(E,S,V)=>async function(Y,U,te,ne){let $=U.view.Za(te);$.Cs&&($=await UE(Y.localStore,U.query,!1).then(({documents:M})=>U.view.Za(M,$)));const oe=ne&&ne.targetChanges.get(U.targetId),le=ne&&ne.targetMismatches.get(U.targetId)!=null,me=U.view.applyChanges($,Y.isPrimaryClient,oe,le);return YE(Y,U.targetId,me.ru),me.snapshot}(i,E,S,V);const l=await UE(i.localStore,e,!0),c=new GP(e,l.$s),m=c.Za(l.documents),p=Gu.createSynthesizedTargetChangeForCurrentChange(t,r&&i.onlineState!=="Offline",a),g=c.applyChanges(m,i.isPrimaryClient,p);YE(i,t,g.ru);const v=new $P(e,t,c);return i.uu.set(e,v),i.cu.has(t)?i.cu.get(t).push(e):i.cu.set(t,[e]),g.snapshot}async function JP(i,e,t){const r=Ce(i),a=r.uu.get(e),l=r.cu.get(a.targetId);if(l.length>1)return r.cu.set(a.targetId,l.filter(c=>!Lf(c,e))),void r.uu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(a.targetId),r.sharedClientState.isActiveQueryTarget(a.targetId)||await cg(r.localStore,a.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(a.targetId),t&&Ey(r.remoteStore,a.targetId),dg(r,a.targetId)}).catch(Ko)):(dg(r,a.targetId),await cg(r.localStore,a.targetId,!0))}async function ZP(i,e){const t=Ce(i),r=t.uu.get(e),a=t.cu.get(r.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ey(t.remoteStore,r.targetId))}async function ek(i,e,t){const r=ok(i);try{const a=await function(c,m){const p=Ce(c),g=Rt.now(),v=m.reduce((V,F)=>V.add(F.key),je());let E,S;return p.persistence.runTransaction("Locally write mutations","readwrite",V=>{let F=cr(),Y=je();return p.Bs.getEntries(V,v).next(U=>{F=U,F.forEach((te,ne)=>{ne.isValidDocument()||(Y=Y.add(te))})}).next(()=>p.localDocuments.getOverlayedDocuments(V,F)).next(U=>{E=U;const te=[];for(const ne of m){const $=gD(ne,E.get(ne.key).overlayedDocument);$!=null&&te.push(new Es(ne.key,$,DA($.value.mapValue),Wn.exists(!0)))}return p.mutationQueue.addMutationBatch(V,g,te,m)}).next(U=>{S=U;const te=U.applyToLocalDocumentSet(E,Y);return p.documentOverlayCache.saveOverlays(V,U.batchId,te)})}).then(()=>({batchId:S.batchId,changes:FA(E)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(a.batchId),function(c,m,p){let g=c.Iu[c.currentUser.toKey()];g||(g=new ft(Oe)),g=g.insert(m,p),c.Iu[c.currentUser.toKey()]=g}(r,a.batchId,t),await Ku(r,a.changes),await Hf(r.remoteStore)}catch(a){const l=Iy(a,"Failed to persist write");t.reject(l)}}async function IS(i,e){const t=Ce(i);try{const r=await dP(t.localStore,e);e.targetChanges.forEach((a,l)=>{const c=t.Pu.get(l);c&&(Ye(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c._u=!0:a.modifiedDocuments.size>0?Ye(c._u,14607):a.removedDocuments.size>0&&(Ye(c._u,42227),c._u=!1))}),await Ku(t,r,e)}catch(r){await Ko(r)}}function KE(i,e,t){const r=Ce(i);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const a=[];r.uu.forEach((l,c)=>{const m=c.view.Da(e);m.snapshot&&a.push(m.snapshot)}),function(c,m){const p=Ce(c);p.onlineState=m;let g=!1;p.queries.forEach((v,E)=>{for(const S of E.ya)S.Da(m)&&(g=!0)}),g&&Ry(p)}(r.eventManager,e),a.length&&r.au.j_(a),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tk(i,e,t){const r=Ce(i);r.sharedClientState.updateQueryState(e,"rejected",t);const a=r.Pu.get(e),l=a&&a.key;if(l){let c=new ft(_e.comparator);c=c.insert(l,rn.newNoDocument(l,Ie.min()));const m=je().add(l),p=new Bf(Ie.min(),new Map,new ft(Oe),c,m);await IS(r,p),r.hu=r.hu.remove(l),r.Pu.delete(e),xy(r)}else await cg(r.localStore,e,!1).then(()=>dg(r,e,t)).catch(Ko)}async function nk(i,e){const t=Ce(i),r=e.batch.batchId;try{const a=await fP(t.localStore,e);CS(t,r,null),RS(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ku(t,a)}catch(a){await Ko(a)}}async function ik(i,e,t){const r=Ce(i);try{const a=await function(c,m){const p=Ce(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let v;return p.mutationQueue.lookupMutationBatch(g,m).next(E=>(Ye(E!==null,37113),v=E.keys(),p.mutationQueue.removeMutationBatch(g,E))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,m)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v)).next(()=>p.localDocuments.getDocuments(g,v))})}(r.localStore,e);CS(r,e,t),RS(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ku(r,a)}catch(a){await Ko(a)}}function RS(i,e){(i.Eu.get(e)||[]).forEach(t=>{t.resolve()}),i.Eu.delete(e)}function CS(i,e,t){const r=Ce(i);let a=r.Iu[r.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),r.Iu[r.currentUser.toKey()]=a}}function dg(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const r of i.cu.get(e))i.uu.delete(r),t&&i.au.Vu(r,t);i.cu.delete(e),i.isPrimaryClient&&i.Tu.Hr(e).forEach(r=>{i.Tu.containsKey(r)||xS(i,r)})}function xS(i,e){i.lu.delete(e.path.canonicalString());const t=i.hu.get(e);t!==null&&(Ey(i.remoteStore,t),i.hu=i.hu.remove(e),i.Pu.delete(t),xy(i))}function YE(i,e,t){for(const r of t)r instanceof AS?(i.Tu.addReference(r.key,e),rk(i,r)):r instanceof SS?(he(Cy,"Document no longer in limbo: "+r.key),i.Tu.removeReference(r.key,e),i.Tu.containsKey(r.key)||xS(i,r.key)):Te(19791,{mu:r})}function rk(i,e){const t=e.key,r=t.path.canonicalString();i.hu.get(t)||i.lu.has(r)||(he(Cy,"New document in limbo: "+t),i.lu.add(r),xy(i))}function xy(i){for(;i.lu.size>0&&i.hu.size<i.maxConcurrentLimboResolutions;){const e=i.lu.values().next().value;i.lu.delete(e);const t=new _e(ct.fromString(e)),r=i.du.next();i.Pu.set(r,new KP(t)),i.hu=i.hu.insert(t,r),mS(i.remoteStore,new Zr(Ti(fy(t.path)),r,"TargetPurposeLimboResolution",Pf.le))}}async function Ku(i,e,t){const r=Ce(i),a=[],l=[],c=[];r.uu.isEmpty()||(r.uu.forEach((m,p)=>{c.push(r.Ru(p,e,t).then(g=>{var v;if((g||t)&&r.isPrimaryClient){const E=g?!g.fromCache:(v=t==null?void 0:t.targetChanges.get(p.targetId))===null||v===void 0?void 0:v.current;r.sharedClientState.updateQueryState(p.targetId,E?"current":"not-current")}if(g){a.push(g);const E=_y.Rs(p.targetId,g);l.push(E)}}))}),await Promise.all(c),r.au.j_(a),await async function(p,g){const v=Ce(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>Z.forEach(g,S=>Z.forEach(S.ds,V=>v.persistence.referenceDelegate.addReference(E,S.targetId,V)).next(()=>Z.forEach(S.As,V=>v.persistence.referenceDelegate.removeReference(E,S.targetId,V)))))}catch(E){if(!Yo(E))throw E;he(by,"Failed to update sequence numbers: "+E)}for(const E of g){const S=E.targetId;if(!E.fromCache){const V=v.xs.get(S),F=V.snapshotVersion,Y=V.withLastLimboFreeSnapshotVersion(F);v.xs=v.xs.insert(S,Y)}}}(r.localStore,l))}async function sk(i,e){const t=Ce(i);if(!t.currentUser.isEqual(e)){he(Cy,"User change. New user:",e.toKey());const r=await cS(t.localStore,e);t.currentUser=e,function(l,c){l.Eu.forEach(m=>{m.forEach(p=>{p.reject(new ye(ie.CANCELLED,c))})}),l.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ku(t,r.ks)}}function ak(i,e){const t=Ce(i),r=t.Pu.get(e);if(r&&r._u)return je().add(r.key);{let a=je();const l=t.cu.get(e);if(!l)return a;for(const c of l){const m=t.uu.get(c);a=a.unionWith(m.view.Ya)}return a}}function NS(i){const e=Ce(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=IS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ak.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tk.bind(null,e),e.au.j_=qP.bind(null,e.eventManager),e.au.Vu=HP.bind(null,e.eventManager),e}function ok(i){const e=Ce(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ik.bind(null,e),e}class ff{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ff(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return hP(this.persistence,new lP,e.initialUser,this.serializer)}yu(e){return new uS(vy.fi,this.serializer)}pu(e){return new vP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ff.provider={build:()=>new ff};class lk extends ff{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){Ye(this.persistence.referenceDelegate instanceof cf,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new KD(r,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?dn.withCacheSize(this.cacheSizeBytes):dn.DEFAULT;return new uS(r=>cf.fi(r,t),this.serializer)}}class mg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>KE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sk.bind(null,this.syncEngine),await zP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new FP}()}createDatastore(e){const t=Ff(e.databaseInfo.databaseId),r=function(l){return new AP(l)}(e.databaseInfo);return function(l,c,m,p){return new RP(l,c,m,p)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,a,l,c,m){return new xP(r,a,l,c,m)}(this.localStore,this.datastore,e.asyncQueue,t=>KE(this.syncEngine,t,0),function(){return BE.C()?new BE:new _P}())}createSyncEngine(e,t){return function(a,l,c,m,p,g,v){const E=new YP(a,l,c,m,p,g);return v&&(E.Au=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=Ce(a);he(ma,"RemoteStore shutting down."),l.Ta.add(5),await $u(l),l.Ea.shutdown(),l.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}mg.provider={build:()=>new mg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):ur("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="FirestoreClient";class uk{constructor(e,t,r,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=a,this.user=nn.UNAUTHENTICATED,this.clientId=TA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(r,async c=>{he(fs,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(r,c=>(he(fs,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Iy(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ap(i,e){i.asyncQueue.verifyOperationInProgress(),he(fs,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let r=t.initialUser;i.setCredentialChangeListener(async a=>{r.isEqual(a)||(await cS(e.localStore,a),r=a)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function QE(i,e){i.asyncQueue.verifyOperationInProgress();const t=await ck(i);he(fs,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(r=>qE(e.remoteStore,r)),i.setAppCheckTokenChangeListener((r,a)=>qE(e.remoteStore,a)),i._onlineComponents=e}async function ck(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){he(fs,"Using user provided OfflineComponentProvider");try{await Ap(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===ie.FAILED_PRECONDITION||a.code===ie.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;Do("Error using user provided cache. Falling back to memory cache: "+t),await Ap(i,new ff)}}else he(fs,"Using default OfflineComponentProvider"),await Ap(i,new lk(void 0));return i._offlineComponents}async function DS(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(he(fs,"Using user provided OnlineComponentProvider"),await QE(i,i._uninitializedComponentsProvider._online)):(he(fs,"Using default OnlineComponentProvider"),await QE(i,new mg))),i._onlineComponents}function hk(i){return DS(i).then(e=>e.syncEngine)}async function PS(i){const e=await DS(i),t=e.eventManager;return t.onListen=QP.bind(null,e.syncEngine),t.onUnlisten=JP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=XP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ZP.bind(null,e.syncEngine),t}function fk(i,e,t={}){const r=new sr;return i.asyncQueue.enqueueAndForget(async()=>function(l,c,m,p,g){const v=new OS({next:S=>{v.Cu(),c.enqueueAndForget(()=>ES(l,E));const V=S.docs.has(m);!V&&S.fromCache?g.reject(new ye(ie.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&S.fromCache&&p&&p.source==="server"?g.reject(new ye(ie.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(S)},error:S=>g.reject(S)}),E=new TS(fy(m.path),v,{includeMetadataChanges:!0,La:!0});return bS(l,E)}(await PS(i),i.asyncQueue,e,t,r)),r.promise}function dk(i,e,t={}){const r=new sr;return i.asyncQueue.enqueueAndForget(async()=>function(l,c,m,p,g){const v=new OS({next:S=>{v.Cu(),c.enqueueAndForget(()=>ES(l,E)),S.fromCache&&p.source==="server"?g.reject(new ye(ie.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(S)},error:S=>g.reject(S)}),E=new TS(m,v,{includeMetadataChanges:!0,La:!0});return bS(l,E)}(await PS(i),i.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(i,e,t){if(!t)throw new ye(ie.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function mk(i,e,t,r){if(e===!0&&r===!0)throw new ye(ie.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function WE(i){if(!_e.isDocumentKey(i))throw new ye(ie.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function JE(i){if(_e.isDocumentKey(i))throw new ye(ie.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Ny(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Te(12329,{type:typeof i})}function Ri(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ye(ie.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ny(i);throw new ye(ie.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS="firestore.googleapis.com",ZE=!0;class eT{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ye(ie.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=VS,this.ssl=ZE}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:ZE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=lS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<GD)throw new ye(ie.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ye(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ye(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ye(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,a){return r.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gf{constructor(e,t,r,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new eT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ye(ie.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ye(ie.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new eT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new EO;switch(r.type){case"firstParty":return new wO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ye(ie.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,Rf("Firestore",this._settings.isUsingEmulator),this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=XE.get(t);r&&(he("ComponentProvider","Removing Datastore"),XE.delete(t),r.terminate())}(this),Promise.resolve()}}function pk(i,e,t,r={}){var a;i=Ri(i,Gf);const l=qo(e),c=i._getSettings(),m=Object.assign(Object.assign({},c),{emulatorOptions:i._getEmulatorOptions()}),p=`${e}:${t}`;c.host!==VS&&c.host!==p&&Do("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},c),{host:p,ssl:l,emulatorOptions:r});if(!ss(g,m)&&(i._setSettings(g),l&&(v1(`https://${p}`),Rf("Firestore",!0)),r.mockUserToken)){let v,E;if(typeof r.mockUserToken=="string")v=r.mockUserToken,E=nn.MOCK_USER;else{v=WC(r.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const S=r.mockUserToken.sub||r.mockUserToken.user_id;if(!S)throw new ye(ie.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new nn(S)}i._authCredentials=new TO(new bA(v,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $f(this.firestore,e,this._query)}}class pn{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pn(this.firestore,e,this._key)}}class rs extends $f{constructor(e,t,r){super(e,t,fy(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pn(this.firestore,null,new _e(e))}withConverter(e){return new rs(this.firestore,e,this._path)}}function zn(i,e,...t){if(i=Ct(i),MS("collection","path",e),i instanceof Gf){const r=ct.fromString(e,...t);return JE(r),new rs(i,null,r)}{if(!(i instanceof pn||i instanceof rs))throw new ye(ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(ct.fromString(e,...t));return JE(r),new rs(i.firestore,null,r)}}function Oy(i,e,...t){if(i=Ct(i),arguments.length===1&&(e=TA.newId()),MS("doc","path",e),i instanceof Gf){const r=ct.fromString(e,...t);return WE(r),new pn(i,null,new _e(r))}{if(!(i instanceof pn||i instanceof rs))throw new ye(ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(ct.fromString(e,...t));return WE(r),new pn(i.firestore,i instanceof rs?i.converter:null,new _e(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT="AsyncQueue";class nT{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new fS(this,"async_queue_retry"),this.ec=()=>{const r=Tp();r&&he(tT,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const t=Tp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=Tp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new sr;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!Yo(e))throw e;he(tT,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,ur("INTERNAL UNHANDLED ERROR: ",iT(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=t,t}enqueueAfterDelay(e,t,r){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const a=wy.createAndSchedule(this,e,t,r,l=>this.oc(l));return this.Hu.push(a),a}nc(){this.Ju&&Te(47125,{_c:iT(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function iT(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Xo extends Gf{constructor(e,t,r,a){super(e,t,r,a),this.type="firestore",this._queue=new nT,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new nT(e),this._firestoreClient=void 0,await e}}}function Ts(i,e){const t=typeof i=="object"?i:Kg(),r=typeof i=="string"?i:nf,a=zu(t,"firestore").getImmediate({identifier:r});if(!a._initialized){const l=QC("firestore");l&&pk(a,...l)}return a}function Dy(i){if(i._terminated)throw new ye(ie.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||gk(i),i._firestoreClient}function gk(i){var e,t,r;const a=i._freezeSettings(),l=function(m,p,g,v){return new zO(m,p,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,kS(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=a.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new uk(i._authCredentials,i._appCheckCredentials,i._queue,l,i._componentsProvider&&function(m){const p=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(p),_online:p}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Uo(Xt.fromBase64String(e))}catch(t){throw new ye(ie.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Uo(Xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ye(ie.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ye(ie.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ye(ie.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,a){if(r.length!==a.length)return!1;for(let l=0;l<r.length;++l)if(r[l]!==a[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=/^__.*__$/;class vk{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Es(e,this.data,this.fieldMask,t,this.fieldTransforms):new Hu(e,this.data,t,this.fieldTransforms)}}class LS{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Es(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function US(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te(40011,{hc:i})}}class Vy{constructor(e,t,r,a,l,c){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=a,l===void 0&&this.Pc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new Vy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Tc({path:r,Ec:!1});return a.dc(e),a}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Tc({path:r,Ec:!1});return a.Pc(),a}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return df(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(US(this.hc)&&yk.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class _k{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ff(e)}gc(e,t,r,a=!1){return new Vy({hc:e,methodName:t,fc:r,path:Qt.emptyPath(),Ec:!1,mc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ly(i){const e=i._freezeSettings(),t=Ff(i._databaseId);return new _k(i._databaseId,!!e.ignoreUndefinedProperties,t)}function jS(i,e,t,r,a,l={}){const c=i.gc(l.merge||l.mergeFields?2:0,e,t,a);Uy("Data must be an object, but it was:",c,r);const m=zS(r,c);let p,g;if(l.merge)p=new wn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const E of l.mergeFields){const S=pg(e,E,t);if(!c.contains(S))throw new ye(ie.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);FS(v,S)||v.push(S)}p=new wn(v),g=c.fieldTransforms.filter(E=>p.covers(E.field))}else p=null,g=c.fieldTransforms;return new vk(new mn(m),p,g)}class Yf extends Py{_toFieldTransform(e){if(e.hc!==2)throw e.hc===1?e.Vc(`${this._methodName}() can only appear at the top level of your update data`):e.Vc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yf}}function bk(i,e,t,r){const a=i.gc(1,e,t);Uy("Data must be an object, but it was:",a,r);const l=[],c=mn.empty();bs(r,(p,g)=>{const v=jy(e,p,t);g=Ct(g);const E=a.Ac(v);if(g instanceof Yf)l.push(v);else{const S=Qf(g,E);S!=null&&(l.push(v),c.set(v,S))}});const m=new wn(l);return new LS(c,m,a.fieldTransforms)}function Ek(i,e,t,r,a,l){const c=i.gc(1,e,t),m=[pg(e,r,t)],p=[a];if(l.length%2!=0)throw new ye(ie.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<l.length;S+=2)m.push(pg(e,l[S])),p.push(l[S+1]);const g=[],v=mn.empty();for(let S=m.length-1;S>=0;--S)if(!FS(g,m[S])){const V=m[S];let F=p[S];F=Ct(F);const Y=c.Ac(V);if(F instanceof Yf)g.push(V);else{const U=Qf(F,Y);U!=null&&(g.push(V),v.set(V,U))}}const E=new wn(g);return new LS(v,E,c.fieldTransforms)}function Qf(i,e){if(BS(i=Ct(i)))return Uy("Unsupported field value:",e,i),zS(i,e);if(i instanceof Py)return function(r,a){if(!US(a.hc))throw a.Vc(`${r._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Vc(`${r._methodName}() is not currently supported inside arrays`);const l=r._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,a){const l=[];let c=0;for(const m of r){let p=Qf(m,a.Rc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(i,e)}return function(r,a){if((r=Ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cD(a.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const l=Rt.fromDate(r);return{timestampValue:uf(a.serializer,l)}}if(r instanceof Rt){const l=new Rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:uf(a.serializer,l)}}if(r instanceof ky)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Uo)return{bytesValue:tS(a.serializer,r._byteString)};if(r instanceof pn){const l=a.databaseId,c=r.firestore._databaseId;if(!c.isEqual(l))throw a.Vc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:gy(r.firestore._databaseId||a.databaseId,r._key.path)}}if(r instanceof My)return function(c,m){return{mapValue:{fields:{[NA]:{stringValue:OA},[rf]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw m.Vc("VectorValues must only contain numeric values.");return dy(m.serializer,g)})}}}}}}(r,a);throw a.Vc(`Unsupported field value: ${Ny(r)}`)}(i,e)}function zS(i,e){const t={};return SA(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bs(i,(r,a)=>{const l=Qf(a,e.Ic(r));l!=null&&(t[r]=l)}),{mapValue:{fields:t}}}function BS(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Rt||i instanceof ky||i instanceof Uo||i instanceof pn||i instanceof Py||i instanceof My)}function Uy(i,e,t){if(!BS(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const r=Ny(t);throw r==="an object"?e.Vc(i+" a custom object"):e.Vc(i+" "+r)}}function pg(i,e,t){if((e=Ct(e))instanceof Kf)return e._internalPath;if(typeof e=="string")return jy(i,e);throw df("Field path arguments must be of type string or ",i,!1,void 0,t)}const Tk=new RegExp("[~\\*/\\[\\]]");function jy(i,e,t){if(e.search(Tk)>=0)throw df(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Kf(...e.split("."))._internalPath}catch{throw df(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function df(i,e,t,r,a){const l=r&&!r.isEmpty(),c=a!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${r}`),c&&(p+=` in document ${a}`),p+=")"),new ye(ie.INVALID_ARGUMENT,m+i+p)}function FS(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,t,r,a,l){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new pn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ak(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(HS("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ak extends qS{data(){return super.data()}}function HS(i,e){return typeof e=="string"?jy(i,e):e instanceof Kf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ye(ie.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wk{convertValue(e,t="none"){switch(cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _t(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return bs(e,(a,l)=>{r[a]=this.convertValue(l,t)}),r}convertVectorValue(e){var t,r,a;const l=(a=(r=(t=e.fields)===null||t===void 0?void 0:t[rf].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.map(c=>_t(c.doubleValue));return new My(l)}convertGeoPoint(e){return new ky(_t(e.latitude),_t(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Mf(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ou(e));default:return null}}convertTimestamp(e){const t=ls(e);return new Rt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ct.fromString(e);Ye(oS(r),9688,{name:e});const a=new Du(r.get(1),r.get(3)),l=new _e(r.popFirst(5));return a.isEqual(t)||ur(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(i,e,t){let r;return r=i?i.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $S extends qS{constructor(e,t,r,a,l,c){super(e,t,r,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Fh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(HS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Fh extends $S{data(e={}){return super.data(e)}}class Ik{constructor(e,t,r,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new du(a.hasPendingWrites,a.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Fh(this._firestore,this._userDataWriter,r.key,r,new du(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ye(ie.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(m=>{const p=new Fh(a._firestore,a._userDataWriter,m.doc.key,m.doc,new du(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(m=>l||m.type!==3).map(m=>{const p=new Fh(a._firestore,a._userDataWriter,m.doc.key,m.doc,new du(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,v=-1;return m.type!==0&&(g=c.indexOf(m.doc.key),c=c.delete(m.doc.key)),m.type!==1&&(c=c.add(m.doc),v=c.indexOf(m.doc.key)),{type:Rk(m.type),doc:p,oldIndex:g,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Rk(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te(61501,{type:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(i){i=Ri(i,pn);const e=Ri(i.firestore,Xo);return fk(Dy(e),i._key).then(t=>Ok(e,i,t))}class KS extends wk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Uo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pn(this.firestore,null,t)}}function ds(i){i=Ri(i,$f);const e=Ri(i.firestore,Xo),t=Dy(e),r=new KS(e);return Sk(i._query),dk(t,i._query).then(a=>new Ik(e,r,i,a))}function xk(i,e,t){i=Ri(i,pn);const r=Ri(i.firestore,Xo),a=GS(i.converter,e);return zy(r,[jS(Ly(r),"setDoc",i._key,a,i.converter!==null,t).toMutation(i._key,Wn.none())])}function Nk(i,e,t,...r){i=Ri(i,pn);const a=Ri(i.firestore,Xo),l=Ly(a);let c;return c=typeof(e=Ct(e))=="string"||e instanceof Kf?Ek(l,"updateDoc",i._key,e,t,r):bk(l,"updateDoc",i._key,e),zy(a,[c.toMutation(i._key,Wn.exists(!0))])}function Xf(i,e){const t=Ri(i.firestore,Xo),r=Oy(i),a=GS(i.converter,e);return zy(t,[jS(Ly(i.firestore),"addDoc",r._key,a,i.converter!==null,{}).toMutation(r._key,Wn.exists(!1))]).then(()=>r)}function zy(i,e){return function(r,a){const l=new sr;return r.asyncQueue.enqueueAndForget(async()=>ek(await hk(r),a,l)),l.promise}(Dy(i),e)}function Ok(i,e,t){const r=t.docs.get(e._key),a=new KS(i);return new $S(i,a,e._key,r,new du(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(a){$o=a})(xi),as(new ar("firestore",(r,{instanceIdentifier:a,options:l})=>{const c=r.getProvider("app").getImmediate(),m=new Xo(new AO(r.getProvider("auth-internal")),new IO(c,r.getProvider("app-check-internal")),function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ye(ie.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Du(g.options.projectId,v)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),m._setSettings(l),m},"PUBLIC").setMultipleInstances(!0)),bi(lE,uE,e),bi(lE,uE,"esm2017")})();const Dk=Ts(Fn),Pk=Df(Fn),kk=()=>{const i=wf(),e=async t=>{var r;t.preventDefault();try{const a=new ny,l=await IN(Pk,a);if(!l.user)throw new Error("Error al loguear con google");const c=Oy(Dk,"users",l.user.uid);(await Ck(c)).exists()||await xk(c,{username:(r=l.user.email)==null?void 0:r.split("@"),email:l.user.email,role:null,avatar:"default.png"}),i("/home")}catch(a){console.log(a)}};return A.jsx(A.Fragment,{children:A.jsx("div",{className:"w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 relative",children:A.jsxs("div",{className:"w-full sm:max-w-md p-5 mx-auto",children:[A.jsx("h2",{className:"mb-12 text-center text-5xl font-extrabold",children:"El Caballo S.A."}),A.jsxs("form",{children:[A.jsxs("div",{className:"mb-4",children:[A.jsx("label",{className:"block mb-1",htmlFor:"email",children:"Usuario"}),A.jsx("input",{id:"email",type:"text",name:"email",className:"py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"})]}),A.jsxs("div",{className:"mb-4",children:[A.jsx("label",{className:"block mb-1",htmlFor:"password",children:"Contraseña"}),A.jsx("input",{id:"password",type:"password",name:"password",className:"py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"})]}),A.jsxs("div",{className:"mt-6 flex items-center justify-between",children:[A.jsxs("div",{className:"flex items-center",children:[A.jsx("input",{id:"remember_me",type:"checkbox",className:"border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"}),A.jsxs("label",{htmlFor:"remember_me",className:"ml-2 block text-sm leading-5 text-gray-900",children:[" ","Remember me"," "]})]}),A.jsxs("a",{href:"#",className:"text-sm",children:[" ","Olvidaste tu contraseña?"," "]})]}),A.jsx("div",{className:"mt-6",children:A.jsx("button",{className:"cursor-pointer w-full inline-flex items-center justify-center px-4 py-2 bg-blue-950 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-800 active:bg-green-500 focus:outline-none focus:border-green-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition",children:"Sign In"})})]}),A.jsxs("div",{className:"flex justify-center flex-col items-center mt-4",children:[A.jsxs("svg",{className:"cursor-pointer",onClick:e,width:"40",height:"auto",viewBox:"0 0 256 262",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",children:[A.jsx("path",{d:"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",fill:"#4285F4"}),A.jsx("path",{d:"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",fill:"#34A853"}),A.jsx("path",{d:"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",fill:"#FBBC05"}),A.jsx("path",{d:"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",fill:"#EB4335"})]}),A.jsx("small",{children:"Iniciar con Google"})]})]})})})};function Mk(){return A.jsx(A.Fragment,{children:A.jsx("div",{className:"bg-amber-100",children:A.jsx(kk,{})})})}function rT(){return A.jsx(A.Fragment,{children:A.jsx("div",{className:"transition-transform duration-300 ease-in-out",children:A.jsxs("div",{className:"p-8 bg-gray-100 min-h-screen flex flex-col items-center justify-start",children:[A.jsx("h1",{className:"text-4xl font-bold mb-4",children:"¡Bienvenido!"}),A.jsx("p",{className:"text-lg mb-8 text-center max-w-2xl",children:"Aquí puedes gestionar y visualizar los registros de horómetros y eficiencias de tus máquinas. Usa los enlaces abajo para navegar rápidamente por las funciones principales."}),A.jsxs("div",{className:"flex flex-wrap",children:[A.jsx(ca,{to:"/picado",className:"button",children:"Registrar Nuevo"}),A.jsx(ca,{to:"/data",className:"button",children:"Ver Reportes"}),A.jsx(ca,{to:"/configurations",className:"button",children:"Configuración"})]}),A.jsx("div",{className:"mt-6 text-center italic text-gray-700 max-w-2xl",children:'"El éxito es la suma de pequeños esfuerzos repetidos día tras día."'})]})})})}const By=J.createContext(void 0),Vk=({children:i})=>{const e=Df(),[t,r]=J.useState(null);J.useEffect(()=>{const m=Z1(e,p=>{r(p)});return()=>m()},[]);const[a,l]=J.useState(!1),c=()=>{l(m=>!m)};return A.jsx(By.Provider,{value:{user:t,openMenu:a,toogleMenu:c},children:i})},Sp=Ts(Fn),Lk=()=>{const[i,e]=J.useState(""),[t,r]=J.useState([]),[a,l]=J.useState([]),[,c]=J.useState([]);J.useEffect(()=>{(async()=>{try{const E=(await ds(zn(Sp,"machines"))).docs.map(F=>({id:F.id,...F.data()}));l(E);const V=(await ds(zn(Sp,"operators"))).docs.map(F=>({id:F.id,...F.data()}));c(V)}catch(v){console.error("Error al obtener máquinas:",v)}})()},[]);const m=g=>{r(v=>v.includes(g)?v.filter(E=>E!==g):[...v,g])};async function p(g){g.preventDefault();const v={operator:i.toUpperCase(),machines:t,timestamp:Rt.now()};try{await Xf(zn(Sp,"assignments"),v),console.log("Asignación guardada correctamente:",v),e(""),r([]),alert("Asignación guardada exitosamente")}catch(E){console.error("Error al guardar la asignación:",E),alert("Hubo un error al guardar la asignación")}}return A.jsxs("div",{className:"p-6 rounded-lg shadow-md w-full max-w-lg mx-auto backgroundForm",children:[A.jsx("h2",{className:"text-xl font-bold mb-4 text-white",children:"Asignar Máquinas"}),A.jsxs("form",{onSubmit:p,className:"space-y-4",children:[A.jsxs("div",{children:[A.jsx("label",{className:"block mb-1 text-white",children:"Operario"}),A.jsx("input",{type:"text",value:i,onChange:g=>e(g.target.value),className:"w-full border px-3 bg-gray-200 py-2 rounded-md",required:!0})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block mb-1 text-white",children:"Seleccionar maquinas"}),A.jsx("div",{className:"space-y-2 text-white pl-2",children:a&&a.map(g=>g.abbreviation?A.jsxs("div",{children:[A.jsx("input",{type:"checkbox",id:g.id,onChange:()=>m(g.abbreviation),checked:t.includes(g.abbreviation)}),A.jsx("label",{className:"pl-2",htmlFor:g.id,children:g.abbreviation})]},g.id):null)})]}),A.jsx("button",{type:"submit",className:"bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700",children:"Asignar"})]})]})};function sT(){return A.jsx(A.Fragment,{children:A.jsx(Lk,{})})}const Uk=[{title:"F1315",slug:"f1315"},{title:"Eficiencia",slug:"eficence"}];function jk({item:i}){return A.jsx(ca,{to:`/picado/${i.slug}`,children:A.jsx("button",{className:"button",children:i.title})})}const zk=()=>A.jsx(A.Fragment,{children:A.jsxs("div",{className:"flex flex-col items-center p-4 space-y-6 md:space-y-8",children:[A.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:Uk.map((i,e)=>A.jsx(jk,{item:i},e))}),A.jsx("div",{className:"w-full ",children:A.jsx(Hg,{})})]})}),wp=Ts(Fn),Ip=({editable:i=!1})=>{const[e,t]=J.useState([]),[r,a]=J.useState(null),[l,c]=J.useState({}),[m,p]=J.useState(""),[g,v]=J.useState(null),[E,S]=J.useState({}),[V,F]=J.useState(null),[Y,U]=J.useState(()=>new Date().toISOString().slice(0,7)),te=async()=>{try{const I=await ds(zn(wp,"machines")),N={};I.forEach(O=>{const P=O.data();P.abbreviation&&P.efficiency&&(N[P.abbreviation]=P.efficiency)}),S(N)}catch(I){console.error("Error fetching machine standards:",I)}};J.useEffect(()=>{(async()=>{try{const O=(await ds(zn(wp,"registro_horometros"))).docs.map(P=>{const C=P.data();return{id:P.id,...C}});t(O)}catch(N){console.error("Error fetching collection:",N)}})(),te()},[]);const ne=e.filter(I=>I.fecha.slice(0,7)===Y),$=(I,N)=>{a(I.id+"-"+N);const O=I.machines[N];c(O),p(String(O.horasAsignadas))},oe=I=>{p(I)},le=async(I,N)=>{var ee;const P=Df(Fn).currentUser,C=P&&P.email?P.email:"usuario_desconocido",ze=e.findIndex(ue=>ue.id===I);if(ze===-1)return;const Je=e[ze],K=[...Je.machines],re=(ee=Je.originalMachines)==null?void 0:ee[N],de=parseFloat(m);if(isNaN(de)){alert("Por favor ingresa un número válido para horas.");return}K[N]={horasAsignadas:de,horometroFinal:l.horometroFinal??(re==null?void 0:re.horometroFinal)??"",horometroInicial:l.horometroInicial??(re==null?void 0:re.horometroInicial)??"",machine:l.machine??(re==null?void 0:re.machine)??"",observaciones:l.observaciones??(re==null?void 0:re.observaciones)??""};const De=[];["horometroInicial","horometroFinal","machine","observaciones","horasAsignadas"].forEach(ue=>{const se=re==null?void 0:re[ue],ve=K[N][ue];ue==="horasAsignadas"?parseFloat(String(se))!==de&&De.push(ue):ve!==se&&De.push(ue)});const D={machines:K,editadoPor:C??void 0,camposModificados:De.join(", "),fechaUltimaEdicion:new Date().toISOString()};try{const ue=Oy(wp,"registro_horometros",I);await Nk(ue,D);const se=[...e];se[ze]={...Je,...D,machines:K},t(se),a(null)}catch(ue){console.error("Error al guardar:",ue)}},me=(I,N)=>{console.log("click en",I);const O=N.currentTarget.getBoundingClientRect();console.log("rect",O),F({x:O.right+-350,y:O.top}),v(I)},M=()=>{console.log("hover end"),v(null),F(null)},R=I=>typeof I=="number"?I.toFixed(2):String(I);return A.jsxs("div",{className:"p-6 w-full bg-white rounded-lg border border-gray-200 shadow-lg overflow-x-auto relative",children:[A.jsxs("div",{className:"flex items-center mb-4",children:[A.jsx("span",{className:"mr-4 font-semibold",children:"Filtrar por mes:"}),A.jsx("input",{type:"month",value:Y,onChange:I=>U(I.target.value),className:"border p-1 rounded"})]}),A.jsx("h2",{className:"text-xl font-bold mb-4",children:"Eficencias"}),A.jsxs("table",{className:"min-w-full border border-gray-300 text-sm text-left",children:[A.jsx("thead",{className:"backgroundForm text-white",children:A.jsxs("tr",{children:[A.jsx("th",{className:"px-3 py-2 border",children:"Fecha"}),A.jsx("th",{className:"px-3 py-2 border",children:"Operario"}),A.jsx("th",{className:"px-3 py-2 border",children:"Maquina"}),A.jsx("th",{className:"px-3 py-2 border",children:"Horometro inicial"}),A.jsx("th",{className:"px-3 py-2 border",children:"Horometro final"}),A.jsx("th",{className:"px-3 py-2 border",children:"Referencia"}),A.jsx("th",{className:"px-3 py-2 border",children:"Paradas mayores"}),A.jsx("th",{className:"px-3 py-2 border",children:"Observaciones"}),A.jsx("th",{className:"px-3 py-2 border",children:"Horas Asignadas"}),A.jsx("th",{className:"px-3 py-2 border",children:"Total horas"}),A.jsx("th",{className:"px-3 py-2 border",children:"Stand"}),A.jsx("th",{className:"px-3 py-2 border",children:"Eficiencia"}),i&&A.jsx("th",{className:"px-3 py-2 border",children:"Acciones"}),A.jsx("th",{className:"px-3 py-2 border",children:"📝"})]})}),A.jsx("tbody",{children:ne.map(I=>{var N;return(N=I.machines)==null?void 0:N.map((O,P)=>{const C=parseFloat(O.horometroFinal),ze=parseFloat(O.horometroInicial),Je=isNaN(C)||isNaN(ze)?0:C-ze,K=r===I.id+"-"+P;return A.jsxs("tr",{className:"hover:bg-gray-100",children:[A.jsx("td",{className:"px-3 py-2 border",children:I.fecha}),A.jsx("td",{className:"px-3 py-2 border",children:I.operatorCode}),A.jsx("td",{className:"px-3 py-2 border",children:O.machine}),A.jsx("td",{className:"px-3 py-2 border",children:O.horometroInicial}),A.jsx("td",{className:"px-3 py-2 border",children:O.horometroFinal}),A.jsx("td",{className:"px-3 py-2 border",children:I.reference||""}),A.jsx("td",{className:"px-3 py-2 border",children:I.majorStops||""}),A.jsx("td",{className:"px-3 py-2 border",children:O.observaciones}),A.jsx("td",{className:"px-3 py-2 border",children:K?A.jsx("input",{type:"number",step:"0.01",value:m,onChange:re=>oe(re.target.value),className:"w-full border p-1",min:"0"}):R(O.horasAsignadas)}),A.jsx("td",{className:"px-3 py-2 border",children:Je.toFixed(2)}),i&&A.jsx("td",{className:"px-3 py-2 border",children:K?A.jsx("button",{onClick:()=>le(I.id,P),className:"bg-blue-500 text-white px-2 py-1 rounded cursor-pointer",children:"Guardar"}):A.jsx("button",{onClick:()=>$(I,P),className:"bg-gray-500 text-white px-2 py-1 rounded cursor-pointer",children:"Editar"})}),A.jsxs("td",{className:"px-3 py-2 border",children:[" ",E[O.machine]??"N/A"]}),A.jsx("td",{className:"px-3 py-2 border",children:(()=>{const re=isNaN(C)||isNaN(ze)?0:C-ze,de=E[O.machine]??"0",De=parseFloat(de),D=typeof O.horasAsignadas=="string"?parseFloat(O.horasAsignadas):O.horasAsignadas;return isNaN(re)||isNaN(De)||isNaN(D)?"0":(re-De*D).toFixed(2)})()}),A.jsx("td",{className:"px-3 py-2 border relative",children:I.editadoPor&&A.jsx("span",{className:"cursor-pointer",onMouseEnter:re=>me(I,re),onMouseLeave:M,children:"👤"})})]},`${I.id}-${P}`)})})})]}),g&&V&&A.jsxs("div",{className:"absolute bg-white border p-2 shadow-lg text-xs rounded z-50",style:{top:V.y,left:V.x},children:[A.jsxs("div",{children:[A.jsx("strong",{children:"Editado por:"})," ",g.editadoPor]}),A.jsxs("div",{children:[A.jsx("strong",{children:"Fecha de edición:"})," ",new Date(g.fechaUltimaEdicion??"").toLocaleString()]})]})]})},Bk=[{title:"Operarios",subtitle:"Gestión de tareas y seguimiento de operarios",url:"/picado"},{title:"Supervisores",subtitle:"Supervisión y control de actividades",url:"/supervisor"},{title:"Datos",subtitle:"Visualización y exportación de registros",url:"/data"},{title:"Configuracion",subtitle:"Ajustes del sistema y parámetros de operación",url:"/configurations"}],aT=Df(Fn),Fk=Bk,qk=({openMenu:i})=>{const[e,t]=J.useState({user:null,photoURL:null}),r=wf();J.useEffect(()=>{const l=Z1(aT,c=>{t(c?{user:c.displayName||c.email||c.uid,photoURL:c.photoURL||null}:{user:null,photoURL:null})});return()=>{l()}},[]);const a=()=>{aN(aT).then(()=>{console.log("Sesion cerrada correctamente"),r("/")}).catch(l=>{console.log(l)})};return A.jsx(A.Fragment,{children:A.jsxs("div",{id:"menu",className:"bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed top-0 h-screen overflow-y-scroll transition-transform duration-300 ease-in-out  translate-x-1 right-1",children:[A.jsx("div",{id:"logo",className:"my-4 px-6",children:A.jsxs("h1",{className:"text-lg md:text-2xl font-bold text-white",children:["El Caballo",A.jsx("span",{className:"text-blue-500",children:"S.A"}),"."]})}),A.jsxs("div",{id:"profile",className:"px-6 py-10",children:[A.jsx("p",{className:"text-slate-500",children:"Bienvenido,"}),A.jsxs("a",{href:"#",className:"inline-flex space-x-2 items-center",children:[A.jsx("span",{children:e.photoURL?A.jsx("img",{className:"rounded-full w-full h-auto",src:e.photoURL,alt:""}):A.jsx("div",{children:"Sin foto"})}),A.jsx("span",{className:"text-sm md:text-base font-bold",children:e.user?A.jsx("p",{children:e.user}):A.jsx("p",{children:"No hay usuario autenticado"})})]})]}),A.jsx("div",{className:"flex justify-center items-center pb-5",children:A.jsx("button",{onClick:a,className:"bg-red-600 w-full rounded-2xl mx-5 hover:bg-white/8 cursor-pointer",children:"Salir"})}),A.jsx("div",{id:"nav",className:"w-full px-6",children:Fk.map((l,c)=>A.jsx(ca,{to:l.url,className:"w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150",children:A.jsxs("div",{className:"flex flex-col",children:[A.jsx("span",{className:"text-lg font-bold leading-5 text-white",children:l.title}),A.jsx("span",{className:"text-sm text-white/50 hidden md:block",children:l.subtitle})]})},c))})]})})};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Hk={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},Gk={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function $k(i,e,t){return(e=Yk(e))in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function oT(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable})),t.push.apply(t,r)}return t}function ae(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?oT(Object(t),!0).forEach(function(r){$k(i,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):oT(Object(t)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(t,r))})}return i}function Kk(i,e){if(typeof i!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var r=t.call(i,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function Yk(i){var e=Kk(i,"string");return typeof e=="symbol"?e:e+""}const lT=()=>{};let Fy={},YS={},QS=null,XS={mark:lT,measure:lT};try{typeof window<"u"&&(Fy=window),typeof document<"u"&&(YS=document),typeof MutationObserver<"u"&&(QS=MutationObserver),typeof performance<"u"&&(XS=performance)}catch{}const{userAgent:uT=""}=Fy.navigator||{},ms=Fy,ot=YS,cT=QS,xh=XS;ms.document;const pr=!!ot.documentElement&&!!ot.head&&typeof ot.addEventListener=="function"&&typeof ot.createElement=="function",WS=~uT.indexOf("MSIE")||~uT.indexOf("Trident/");var Qk=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Xk=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,JS={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Wk={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},ZS=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],sn="classic",Wf="duotone",Jk="sharp",Zk="sharp-duotone",ew=[sn,Wf,Jk,Zk],eM={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},tM={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},nM=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),iM={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},rM=["fak","fa-kit","fakd","fa-kit-duotone"],hT={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},sM=["kit"],aM={kit:{"fa-kit":"fak"}},oM=["fak","fakd"],lM={kit:{fak:"fa-kit"}},fT={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Nh={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},uM=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],cM=["fak","fa-kit","fakd","fa-kit-duotone"],hM={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},fM={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},dM={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},gg={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},mM=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],yg=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...uM,...mM],pM=["solid","regular","light","thin","duotone","brands"],tw=[1,2,3,4,5,6,7,8,9,10],gM=tw.concat([11,12,13,14,15,16,17,18,19,20]),yM=[...Object.keys(dM),...pM,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Nh.GROUP,Nh.SWAP_OPACITY,Nh.PRIMARY,Nh.SECONDARY].concat(tw.map(i=>"".concat(i,"x"))).concat(gM.map(i=>"w-".concat(i))),vM={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const hr="___FONT_AWESOME___",vg=16,nw="fa",iw="svg-inline--fa",pa="data-fa-i2svg",_g="data-fa-pseudo-element",_M="data-fa-pseudo-element-pending",qy="data-prefix",Hy="data-icon",dT="fontawesome-i2svg",bM="async",EM=["HTML","HEAD","STYLE","SCRIPT"],rw=(()=>{try{return!0}catch{return!1}})();function Yu(i){return new Proxy(i,{get(e,t){return t in e?e[t]:e[sn]}})}const sw=ae({},JS);sw[sn]=ae(ae(ae(ae({},{"fa-duotone":"duotone"}),JS[sn]),hT.kit),hT["kit-duotone"]);const TM=Yu(sw),bg=ae({},iM);bg[sn]=ae(ae(ae(ae({},{duotone:"fad"}),bg[sn]),fT.kit),fT["kit-duotone"]);const mT=Yu(bg),Eg=ae({},gg);Eg[sn]=ae(ae({},Eg[sn]),lM.kit);const Gy=Yu(Eg),Tg=ae({},fM);Tg[sn]=ae(ae({},Tg[sn]),aM.kit);Yu(Tg);const AM=Qk,aw="fa-layers-text",SM=Xk,wM=ae({},eM);Yu(wM);const IM=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Rp=Wk,RM=[...sM,...yM],Eu=ms.FontAwesomeConfig||{};function CM(i){var e=ot.querySelector("script["+i+"]");if(e)return e.getAttribute(i)}function xM(i){return i===""?!0:i==="false"?!1:i==="true"?!0:i}ot&&typeof ot.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,r]=e;const a=xM(CM(t));a!=null&&(Eu[r]=a)});const ow={styleDefault:"solid",familyDefault:sn,cssPrefix:nw,replacementClass:iw,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Eu.familyPrefix&&(Eu.cssPrefix=Eu.familyPrefix);const jo=ae(ae({},ow),Eu);jo.autoReplaceSvg||(jo.observeMutations=!1);const pe={};Object.keys(ow).forEach(i=>{Object.defineProperty(pe,i,{enumerable:!0,set:function(e){jo[i]=e,Tu.forEach(t=>t(pe))},get:function(){return jo[i]}})});Object.defineProperty(pe,"familyPrefix",{enumerable:!0,set:function(i){jo.cssPrefix=i,Tu.forEach(e=>e(pe))},get:function(){return jo.cssPrefix}});ms.FontAwesomeConfig=pe;const Tu=[];function NM(i){return Tu.push(i),()=>{Tu.splice(Tu.indexOf(i),1)}}const $r=vg,yi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function OM(i){if(!i||!pr)return;const e=ot.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=i;const t=ot.head.childNodes;let r=null;for(let a=t.length-1;a>-1;a--){const l=t[a],c=(l.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(c)>-1&&(r=l)}return ot.head.insertBefore(e,r),i}const DM="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vu(){let i=12,e="";for(;i-- >0;)e+=DM[Math.random()*62|0];return e}function Wo(i){const e=[];for(let t=(i||[]).length>>>0;t--;)e[t]=i[t];return e}function $y(i){return i.classList?Wo(i.classList):(i.getAttribute("class")||"").split(" ").filter(e=>e)}function lw(i){return"".concat(i).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function PM(i){return Object.keys(i||{}).reduce((e,t)=>e+"".concat(t,'="').concat(lw(i[t]),'" '),"").trim()}function Jf(i){return Object.keys(i||{}).reduce((e,t)=>e+"".concat(t,": ").concat(i[t].trim(),";"),"")}function Ky(i){return i.size!==yi.size||i.x!==yi.x||i.y!==yi.y||i.rotate!==yi.rotate||i.flipX||i.flipY}function kM(i){let{transform:e,containerWidth:t,iconWidth:r}=i;const a={transform:"translate(".concat(t/2," 256)")},l="translate(".concat(e.x*32,", ").concat(e.y*32,") "),c="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),m="rotate(".concat(e.rotate," 0 0)"),p={transform:"".concat(l," ").concat(c," ").concat(m)},g={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:p,path:g}}function MM(i){let{transform:e,width:t=vg,height:r=vg,startCentered:a=!1}=i,l="";return a&&WS?l+="translate(".concat(e.x/$r-t/2,"em, ").concat(e.y/$r-r/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/$r,"em), calc(-50% + ").concat(e.y/$r,"em)) "):l+="translate(".concat(e.x/$r,"em, ").concat(e.y/$r,"em) "),l+="scale(".concat(e.size/$r*(e.flipX?-1:1),", ").concat(e.size/$r*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var VM=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function uw(){const i=nw,e=iw,t=pe.cssPrefix,r=pe.replacementClass;let a=VM;if(t!==i||r!==e){const l=new RegExp("\\.".concat(i,"\\-"),"g"),c=new RegExp("\\--".concat(i,"\\-"),"g"),m=new RegExp("\\.".concat(e),"g");a=a.replace(l,".".concat(t,"-")).replace(c,"--".concat(t,"-")).replace(m,".".concat(r))}return a}let pT=!1;function Cp(){pe.autoAddCss&&!pT&&(OM(uw()),pT=!0)}var LM={mixout(){return{dom:{css:uw,insertCss:Cp}}},hooks(){return{beforeDOMElementCreation(){Cp()},beforeI2svg(){Cp()}}}};const fr=ms||{};fr[hr]||(fr[hr]={});fr[hr].styles||(fr[hr].styles={});fr[hr].hooks||(fr[hr].hooks={});fr[hr].shims||(fr[hr].shims=[]);var vi=fr[hr];const cw=[],hw=function(){ot.removeEventListener("DOMContentLoaded",hw),mf=1,cw.map(i=>i())};let mf=!1;pr&&(mf=(ot.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ot.readyState),mf||ot.addEventListener("DOMContentLoaded",hw));function UM(i){pr&&(mf?setTimeout(i,0):cw.push(i))}function Qu(i){const{tag:e,attributes:t={},children:r=[]}=i;return typeof i=="string"?lw(i):"<".concat(e," ").concat(PM(t),">").concat(r.map(Qu).join(""),"</").concat(e,">")}function gT(i,e,t){if(i&&i[e]&&i[e][t])return{prefix:e,iconName:t,icon:i[e][t]}}var xp=function(e,t,r,a){var l=Object.keys(e),c=l.length,m=t,p,g,v;for(r===void 0?(p=1,v=e[l[0]]):(p=0,v=r);p<c;p++)g=l[p],v=m(v,e[g],g,e);return v};function jM(i){const e=[];let t=0;const r=i.length;for(;t<r;){const a=i.charCodeAt(t++);if(a>=55296&&a<=56319&&t<r){const l=i.charCodeAt(t++);(l&64512)==56320?e.push(((a&1023)<<10)+(l&1023)+65536):(e.push(a),t--)}else e.push(a)}return e}function Ag(i){const e=jM(i);return e.length===1?e[0].toString(16):null}function zM(i,e){const t=i.length;let r=i.charCodeAt(e),a;return r>=55296&&r<=56319&&t>e+1&&(a=i.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function yT(i){return Object.keys(i).reduce((e,t)=>{const r=i[t];return!!r.icon?e[r.iconName]=r.icon:e[t]=r,e},{})}function Sg(i,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=t,a=yT(e);typeof vi.hooks.addPack=="function"&&!r?vi.hooks.addPack(i,yT(e)):vi.styles[i]=ae(ae({},vi.styles[i]||{}),a),i==="fas"&&Sg("fa",e)}const{styles:Lu,shims:BM}=vi,fw=Object.keys(Gy),FM=fw.reduce((i,e)=>(i[e]=Object.keys(Gy[e]),i),{});let Yy=null,dw={},mw={},pw={},gw={},yw={};function qM(i){return~RM.indexOf(i)}function HM(i,e){const t=e.split("-"),r=t[0],a=t.slice(1).join("-");return r===i&&a!==""&&!qM(a)?a:null}const vw=()=>{const i=r=>xp(Lu,(a,l,c)=>(a[c]=xp(l,r,{}),a),{});dw=i((r,a,l)=>(a[3]&&(r[a[3]]=l),a[2]&&a[2].filter(m=>typeof m=="number").forEach(m=>{r[m.toString(16)]=l}),r)),mw=i((r,a,l)=>(r[l]=l,a[2]&&a[2].filter(m=>typeof m=="string").forEach(m=>{r[m]=l}),r)),yw=i((r,a,l)=>{const c=a[2];return r[l]=l,c.forEach(m=>{r[m]=l}),r});const e="far"in Lu||pe.autoFetchSvg,t=xp(BM,(r,a)=>{const l=a[0];let c=a[1];const m=a[2];return c==="far"&&!e&&(c="fas"),typeof l=="string"&&(r.names[l]={prefix:c,iconName:m}),typeof l=="number"&&(r.unicodes[l.toString(16)]={prefix:c,iconName:m}),r},{names:{},unicodes:{}});pw=t.names,gw=t.unicodes,Yy=Zf(pe.styleDefault,{family:pe.familyDefault})};NM(i=>{Yy=Zf(i.styleDefault,{family:pe.familyDefault})});vw();function Qy(i,e){return(dw[i]||{})[e]}function GM(i,e){return(mw[i]||{})[e]}function ua(i,e){return(yw[i]||{})[e]}function _w(i){return pw[i]||{prefix:null,iconName:null}}function $M(i){const e=gw[i],t=Qy("fas",i);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function ps(){return Yy}const bw=()=>({prefix:null,iconName:null,rest:[]});function KM(i){let e=sn;const t=fw.reduce((r,a)=>(r[a]="".concat(pe.cssPrefix,"-").concat(a),r),{});return ew.forEach(r=>{(i.includes(t[r])||i.some(a=>FM[r].includes(a)))&&(e=r)}),e}function Zf(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=sn}=e,r=TM[t][i];if(t===Wf&&!i)return"fad";const a=mT[t][i]||mT[t][r],l=i in vi.styles?i:null;return a||l||null}function YM(i){let e=[],t=null;return i.forEach(r=>{const a=HM(pe.cssPrefix,r);a?t=a:r&&e.push(r)}),{iconName:t,rest:e}}function vT(i){return i.sort().filter((e,t,r)=>r.indexOf(e)===t)}function ed(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e;let r=null;const a=yg.concat(cM),l=vT(i.filter(E=>a.includes(E))),c=vT(i.filter(E=>!yg.includes(E))),m=l.filter(E=>(r=E,!ZS.includes(E))),[p=null]=m,g=KM(l),v=ae(ae({},YM(c)),{},{prefix:Zf(p,{family:g})});return ae(ae(ae({},v),JM({values:i,family:g,styles:Lu,config:pe,canonical:v,givenPrefix:r})),QM(t,r,v))}function QM(i,e,t){let{prefix:r,iconName:a}=t;if(i||!r||!a)return{prefix:r,iconName:a};const l=e==="fa"?_w(a):{},c=ua(r,a);return a=l.iconName||c||a,r=l.prefix||r,r==="far"&&!Lu.far&&Lu.fas&&!pe.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const XM=ew.filter(i=>i!==sn||i!==Wf),WM=Object.keys(gg).filter(i=>i!==sn).map(i=>Object.keys(gg[i])).flat();function JM(i){const{values:e,family:t,canonical:r,givenPrefix:a="",styles:l={},config:c={}}=i,m=t===Wf,p=e.includes("fa-duotone")||e.includes("fad"),g=c.familyDefault==="duotone",v=r.prefix==="fad"||r.prefix==="fa-duotone";if(!m&&(p||g||v)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&XM.includes(t)&&(Object.keys(l).find(S=>WM.includes(S))||c.autoFetchSvg)){const S=nM.get(t).defaultShortPrefixId;r.prefix=S,r.iconName=ua(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=ps()||"fas"),r}class ZM{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];const a=t.reduce(this._pullDefinitions,{});Object.keys(a).forEach(l=>{this.definitions[l]=ae(ae({},this.definitions[l]||{}),a[l]),Sg(l,a[l]);const c=Gy[sn][l];c&&Sg(c,a[l]),vw()})}reset(){this.definitions={}}_pullDefinitions(e,t){const r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(a=>{const{prefix:l,iconName:c,icon:m}=r[a],p=m[2];e[l]||(e[l]={}),p.length>0&&p.forEach(g=>{typeof g=="string"&&(e[l][g]=m)}),e[l][c]=m}),e}}let _T=[],So={};const Co={},e4=Object.keys(Co);function t4(i,e){let{mixoutsTo:t}=e;return _T=i,So={},Object.keys(Co).forEach(r=>{e4.indexOf(r)===-1&&delete Co[r]}),_T.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(l=>{typeof a[l]=="function"&&(t[l]=a[l]),typeof a[l]=="object"&&Object.keys(a[l]).forEach(c=>{t[l]||(t[l]={}),t[l][c]=a[l][c]})}),r.hooks){const l=r.hooks();Object.keys(l).forEach(c=>{So[c]||(So[c]=[]),So[c].push(l[c])})}r.provides&&r.provides(Co)}),t}function wg(i,e){for(var t=arguments.length,r=new Array(t>2?t-2:0),a=2;a<t;a++)r[a-2]=arguments[a];return(So[i]||[]).forEach(c=>{e=c.apply(null,[e,...r])}),e}function ga(i){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];(So[i]||[]).forEach(l=>{l.apply(null,t)})}function gs(){const i=arguments[0],e=Array.prototype.slice.call(arguments,1);return Co[i]?Co[i].apply(null,e):void 0}function Ig(i){i.prefix==="fa"&&(i.prefix="fas");let{iconName:e}=i;const t=i.prefix||ps();if(e)return e=ua(t,e)||e,gT(Ew.definitions,t,e)||gT(vi.styles,t,e)}const Ew=new ZM,n4=()=>{pe.autoReplaceSvg=!1,pe.observeMutations=!1,ga("noAuto")},i4={i2svg:function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return pr?(ga("beforeI2svg",i),gs("pseudoElements2svg",i),gs("i2svg",i)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=i;pe.autoReplaceSvg===!1&&(pe.autoReplaceSvg=!0),pe.observeMutations=!0,UM(()=>{s4({autoReplaceSvgRoot:e}),ga("watch",i)})}},r4={icon:i=>{if(i===null)return null;if(typeof i=="object"&&i.prefix&&i.iconName)return{prefix:i.prefix,iconName:ua(i.prefix,i.iconName)||i.iconName};if(Array.isArray(i)&&i.length===2){const e=i[1].indexOf("fa-")===0?i[1].slice(3):i[1],t=Zf(i[0]);return{prefix:t,iconName:ua(t,e)||e}}if(typeof i=="string"&&(i.indexOf("".concat(pe.cssPrefix,"-"))>-1||i.match(AM))){const e=ed(i.split(" "),{skipLookups:!0});return{prefix:e.prefix||ps(),iconName:ua(e.prefix,e.iconName)||e.iconName}}if(typeof i=="string"){const e=ps();return{prefix:e,iconName:ua(e,i)||i}}}},In={noAuto:n4,config:pe,dom:i4,parse:r4,library:Ew,findIconDefinition:Ig,toHtml:Qu},s4=function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=ot}=i;(Object.keys(vi.styles).length>0||pe.autoFetchSvg)&&pr&&pe.autoReplaceSvg&&In.dom.i2svg({node:e})};function td(i,e){return Object.defineProperty(i,"abstract",{get:e}),Object.defineProperty(i,"html",{get:function(){return i.abstract.map(t=>Qu(t))}}),Object.defineProperty(i,"node",{get:function(){if(!pr)return;const t=ot.createElement("div");return t.innerHTML=i.html,t.children}}),i}function a4(i){let{children:e,main:t,mask:r,attributes:a,styles:l,transform:c}=i;if(Ky(c)&&t.found&&!r.found){const{width:m,height:p}=t,g={x:m/p/2,y:.5};a.style=Jf(ae(ae({},l),{},{"transform-origin":"".concat(g.x+c.x/16,"em ").concat(g.y+c.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function o4(i){let{prefix:e,iconName:t,children:r,attributes:a,symbol:l}=i;const c=l===!0?"".concat(e,"-").concat(pe.cssPrefix,"-").concat(t):l;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:ae(ae({},a),{},{id:c}),children:r}]}]}function Xy(i){const{icons:{main:e,mask:t},prefix:r,iconName:a,transform:l,symbol:c,title:m,maskId:p,titleId:g,extra:v,watchable:E=!1}=i,{width:S,height:V}=t.found?t:e,F=oM.includes(r),Y=[pe.replacementClass,a?"".concat(pe.cssPrefix,"-").concat(a):""].filter(le=>v.classes.indexOf(le)===-1).filter(le=>le!==""||!!le).concat(v.classes).join(" ");let U={children:[],attributes:ae(ae({},v.attributes),{},{"data-prefix":r,"data-icon":a,class:Y,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(V)})};const te=F&&!~v.classes.indexOf("fa-fw")?{width:"".concat(S/V*16*.0625,"em")}:{};E&&(U.attributes[pa]=""),m&&(U.children.push({tag:"title",attributes:{id:U.attributes["aria-labelledby"]||"title-".concat(g||Vu())},children:[m]}),delete U.attributes.title);const ne=ae(ae({},U),{},{prefix:r,iconName:a,main:e,mask:t,maskId:p,transform:l,symbol:c,styles:ae(ae({},te),v.styles)}),{children:$,attributes:oe}=t.found&&e.found?gs("generateAbstractMask",ne)||{children:[],attributes:{}}:gs("generateAbstractIcon",ne)||{children:[],attributes:{}};return ne.children=$,ne.attributes=oe,c?o4(ne):a4(ne)}function bT(i){const{content:e,width:t,height:r,transform:a,title:l,extra:c,watchable:m=!1}=i,p=ae(ae(ae({},c.attributes),l?{title:l}:{}),{},{class:c.classes.join(" ")});m&&(p[pa]="");const g=ae({},c.styles);Ky(a)&&(g.transform=MM({transform:a,startCentered:!0,width:t,height:r}),g["-webkit-transform"]=g.transform);const v=Jf(g);v.length>0&&(p.style=v);const E=[];return E.push({tag:"span",attributes:p,children:[e]}),l&&E.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),E}function l4(i){const{content:e,title:t,extra:r}=i,a=ae(ae(ae({},r.attributes),t?{title:t}:{}),{},{class:r.classes.join(" ")}),l=Jf(r.styles);l.length>0&&(a.style=l);const c=[];return c.push({tag:"span",attributes:a,children:[e]}),t&&c.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),c}const{styles:Np}=vi;function Rg(i){const e=i[0],t=i[1],[r]=i.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(pe.cssPrefix,"-").concat(Rp.GROUP)},children:[{tag:"path",attributes:{class:"".concat(pe.cssPrefix,"-").concat(Rp.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(pe.cssPrefix,"-").concat(Rp.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:t,icon:a}}const u4={found:!1,width:512,height:512};function c4(i,e){!rw&&!pe.showMissingIcons&&i&&console.error('Icon with name "'.concat(i,'" and prefix "').concat(e,'" is missing.'))}function Cg(i,e){let t=e;return e==="fa"&&pe.styleDefault!==null&&(e=ps()),new Promise((r,a)=>{if(t==="fa"){const l=_w(i)||{};i=l.iconName||i,e=l.prefix||e}if(i&&e&&Np[e]&&Np[e][i]){const l=Np[e][i];return r(Rg(l))}c4(i,e),r(ae(ae({},u4),{},{icon:pe.showMissingIcons&&i?gs("missingIconAbstract")||{}:{}}))})}const ET=()=>{},xg=pe.measurePerformance&&xh&&xh.mark&&xh.measure?xh:{mark:ET,measure:ET},mu='FA "6.7.2"',h4=i=>(xg.mark("".concat(mu," ").concat(i," begins")),()=>Tw(i)),Tw=i=>{xg.mark("".concat(mu," ").concat(i," ends")),xg.measure("".concat(mu," ").concat(i),"".concat(mu," ").concat(i," begins"),"".concat(mu," ").concat(i," ends"))};var Wy={begin:h4,end:Tw};const qh=()=>{};function TT(i){return typeof(i.getAttribute?i.getAttribute(pa):null)=="string"}function f4(i){const e=i.getAttribute?i.getAttribute(qy):null,t=i.getAttribute?i.getAttribute(Hy):null;return e&&t}function d4(i){return i&&i.classList&&i.classList.contains&&i.classList.contains(pe.replacementClass)}function m4(){return pe.autoReplaceSvg===!0?Hh.replace:Hh[pe.autoReplaceSvg]||Hh.replace}function p4(i){return ot.createElementNS("http://www.w3.org/2000/svg",i)}function g4(i){return ot.createElement(i)}function Aw(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=i.tag==="svg"?p4:g4}=e;if(typeof i=="string")return ot.createTextNode(i);const r=t(i.tag);return Object.keys(i.attributes||[]).forEach(function(l){r.setAttribute(l,i.attributes[l])}),(i.children||[]).forEach(function(l){r.appendChild(Aw(l,{ceFn:t}))}),r}function y4(i){let e=" ".concat(i.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Hh={replace:function(i){const e=i[0];if(e.parentNode)if(i[1].forEach(t=>{e.parentNode.insertBefore(Aw(t),e)}),e.getAttribute(pa)===null&&pe.keepOriginalSource){let t=ot.createComment(y4(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(i){const e=i[0],t=i[1];if(~$y(e).indexOf(pe.replacementClass))return Hh.replace(i);const r=new RegExp("".concat(pe.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const l=t[0].attributes.class.split(" ").reduce((c,m)=>(m===pe.replacementClass||m.match(r)?c.toSvg.push(m):c.toNode.push(m),c),{toNode:[],toSvg:[]});t[0].attributes.class=l.toSvg.join(" "),l.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",l.toNode.join(" "))}const a=t.map(l=>Qu(l)).join(`
`);e.setAttribute(pa,""),e.innerHTML=a}};function AT(i){i()}function Sw(i,e){const t=typeof e=="function"?e:qh;if(i.length===0)t();else{let r=AT;pe.mutateApproach===bM&&(r=ms.requestAnimationFrame||AT),r(()=>{const a=m4(),l=Wy.begin("mutate");i.map(a),l(),t()})}}let Jy=!1;function ww(){Jy=!0}function Ng(){Jy=!1}let pf=null;function ST(i){if(!cT||!pe.observeMutations)return;const{treeCallback:e=qh,nodeCallback:t=qh,pseudoElementsCallback:r=qh,observeMutationsRoot:a=ot}=i;pf=new cT(l=>{if(Jy)return;const c=ps();Wo(l).forEach(m=>{if(m.type==="childList"&&m.addedNodes.length>0&&!TT(m.addedNodes[0])&&(pe.searchPseudoElements&&r(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&pe.searchPseudoElements&&r(m.target.parentNode),m.type==="attributes"&&TT(m.target)&&~IM.indexOf(m.attributeName))if(m.attributeName==="class"&&f4(m.target)){const{prefix:p,iconName:g}=ed($y(m.target));m.target.setAttribute(qy,p||c),g&&m.target.setAttribute(Hy,g)}else d4(m.target)&&t(m.target)})}),pr&&pf.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function v4(){pf&&pf.disconnect()}function _4(i){const e=i.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((r,a)=>{const l=a.split(":"),c=l[0],m=l.slice(1);return c&&m.length>0&&(r[c]=m.join(":").trim()),r},{})),t}function b4(i){const e=i.getAttribute("data-prefix"),t=i.getAttribute("data-icon"),r=i.innerText!==void 0?i.innerText.trim():"";let a=ed($y(i));return a.prefix||(a.prefix=ps()),e&&t&&(a.prefix=e,a.iconName=t),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=GM(a.prefix,i.innerText)||Qy(a.prefix,Ag(i.innerText))),!a.iconName&&pe.autoFetchSvg&&i.firstChild&&i.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=i.firstChild.data)),a}function E4(i){const e=Wo(i.attributes).reduce((a,l)=>(a.name!=="class"&&a.name!=="style"&&(a[l.name]=l.value),a),{}),t=i.getAttribute("title"),r=i.getAttribute("data-fa-title-id");return pe.autoA11y&&(t?e["aria-labelledby"]="".concat(pe.replacementClass,"-title-").concat(r||Vu()):(e["aria-hidden"]="true",e.focusable="false")),e}function T4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:yi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function wT(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:r,rest:a}=b4(i),l=E4(i),c=wg("parseNodeAttributes",{},i);let m=e.styleParser?_4(i):[];return ae({iconName:t,title:i.getAttribute("title"),titleId:i.getAttribute("data-fa-title-id"),prefix:r,transform:yi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:m,attributes:l}},c)}const{styles:A4}=vi;function Iw(i){const e=pe.autoReplaceSvg==="nest"?wT(i,{styleParser:!1}):wT(i);return~e.extra.classes.indexOf(aw)?gs("generateLayersText",i,e):gs("generateSvgReplacementMutation",i,e)}function S4(){return[...rM,...yg]}function IT(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!pr)return Promise.resolve();const t=ot.documentElement.classList,r=v=>t.add("".concat(dT,"-").concat(v)),a=v=>t.remove("".concat(dT,"-").concat(v)),l=pe.autoFetchSvg?S4():ZS.concat(Object.keys(A4));l.includes("fa")||l.push("fa");const c=[".".concat(aw,":not([").concat(pa,"])")].concat(l.map(v=>".".concat(v,":not([").concat(pa,"])"))).join(", ");if(c.length===0)return Promise.resolve();let m=[];try{m=Wo(i.querySelectorAll(c))}catch{}if(m.length>0)r("pending"),a("complete");else return Promise.resolve();const p=Wy.begin("onTree"),g=m.reduce((v,E)=>{try{const S=Iw(E);S&&v.push(S)}catch(S){rw||S.name==="MissingIcon"&&console.error(S)}return v},[]);return new Promise((v,E)=>{Promise.all(g).then(S=>{Sw(S,()=>{r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),p(),v()})}).catch(S=>{p(),E(S)})})}function w4(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Iw(i).then(t=>{t&&Sw([t],e)})}function I4(i){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Ig(e||{});let{mask:a}=t;return a&&(a=(a||{}).icon?a:Ig(a||{})),i(r,ae(ae({},t),{},{mask:a}))}}const R4=function(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=yi,symbol:r=!1,mask:a=null,maskId:l=null,title:c=null,titleId:m=null,classes:p=[],attributes:g={},styles:v={}}=e;if(!i)return;const{prefix:E,iconName:S,icon:V}=i;return td(ae({type:"icon"},i),()=>(ga("beforeDOMElementCreation",{iconDefinition:i,params:e}),pe.autoA11y&&(c?g["aria-labelledby"]="".concat(pe.replacementClass,"-title-").concat(m||Vu()):(g["aria-hidden"]="true",g.focusable="false")),Xy({icons:{main:Rg(V),mask:a?Rg(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:S,transform:ae(ae({},yi),t),symbol:r,title:c,maskId:l,titleId:m,extra:{attributes:g,styles:v,classes:p}})))};var C4={mixout(){return{icon:I4(R4)}},hooks(){return{mutationObserverCallbacks(i){return i.treeCallback=IT,i.nodeCallback=w4,i}}},provides(i){i.i2svg=function(e){const{node:t=ot,callback:r=()=>{}}=e;return IT(t,r)},i.generateSvgReplacementMutation=function(e,t){const{iconName:r,title:a,titleId:l,prefix:c,transform:m,symbol:p,mask:g,maskId:v,extra:E}=t;return new Promise((S,V)=>{Promise.all([Cg(r,c),g.iconName?Cg(g.iconName,g.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(F=>{let[Y,U]=F;S([e,Xy({icons:{main:Y,mask:U},prefix:c,iconName:r,transform:m,symbol:p,maskId:v,title:a,titleId:l,extra:E,watchable:!0})])}).catch(V)})},i.generateAbstractIcon=function(e){let{children:t,attributes:r,main:a,transform:l,styles:c}=e;const m=Jf(c);m.length>0&&(r.style=m);let p;return Ky(l)&&(p=gs("generateAbstractTransformGrouping",{main:a,transform:l,containerWidth:a.width,iconWidth:a.width})),t.push(p||a.icon),{children:t,attributes:r}}}},x4={mixout(){return{layer(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return td({type:"layer"},()=>{ga("beforeDOMElementCreation",{assembler:i,params:e});let r=[];return i(a=>{Array.isArray(a)?a.map(l=>{r=r.concat(l.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(pe.cssPrefix,"-layers"),...t].join(" ")},children:r}]})}}}},N4={mixout(){return{counter(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:r=[],attributes:a={},styles:l={}}=e;return td({type:"counter",content:i},()=>(ga("beforeDOMElementCreation",{content:i,params:e}),l4({content:i.toString(),title:t,extra:{attributes:a,styles:l,classes:["".concat(pe.cssPrefix,"-layers-counter"),...r]}})))}}}},O4={mixout(){return{text(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=yi,title:r=null,classes:a=[],attributes:l={},styles:c={}}=e;return td({type:"text",content:i},()=>(ga("beforeDOMElementCreation",{content:i,params:e}),bT({content:i,transform:ae(ae({},yi),t),title:r,extra:{attributes:l,styles:c,classes:["".concat(pe.cssPrefix,"-layers-text"),...a]}})))}}},provides(i){i.generateLayersText=function(e,t){const{title:r,transform:a,extra:l}=t;let c=null,m=null;if(WS){const p=parseInt(getComputedStyle(e).fontSize,10),g=e.getBoundingClientRect();c=g.width/p,m=g.height/p}return pe.autoA11y&&!r&&(l.attributes["aria-hidden"]="true"),Promise.resolve([e,bT({content:e.innerHTML,width:c,height:m,transform:a,title:r,extra:l,watchable:!0})])}}};const D4=new RegExp('"',"ug"),RT=[1105920,1112319],CT=ae(ae(ae(ae({},{FontAwesome:{normal:"fas",400:"fas"}}),tM),vM),hM),Og=Object.keys(CT).reduce((i,e)=>(i[e.toLowerCase()]=CT[e],i),{}),P4=Object.keys(Og).reduce((i,e)=>{const t=Og[e];return i[e]=t[900]||[...Object.entries(t)][0][1],i},{});function k4(i){const e=i.replace(D4,""),t=zM(e,0),r=t>=RT[0]&&t<=RT[1],a=e.length===2?e[0]===e[1]:!1;return{value:Ag(a?e[0]:e),isSecondary:r||a}}function M4(i,e){const t=i.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),a=isNaN(r)?"normal":r;return(Og[t]||{})[a]||P4[t]}function xT(i,e){const t="".concat(_M).concat(e.replace(":","-"));return new Promise((r,a)=>{if(i.getAttribute(t)!==null)return r();const c=Wo(i.children).filter(S=>S.getAttribute(_g)===e)[0],m=ms.getComputedStyle(i,e),p=m.getPropertyValue("font-family"),g=p.match(SM),v=m.getPropertyValue("font-weight"),E=m.getPropertyValue("content");if(c&&!g)return i.removeChild(c),r();if(g&&E!=="none"&&E!==""){const S=m.getPropertyValue("content");let V=M4(p,v);const{value:F,isSecondary:Y}=k4(S),U=g[0].startsWith("FontAwesome");let te=Qy(V,F),ne=te;if(U){const $=$M(F);$.iconName&&$.prefix&&(te=$.iconName,V=$.prefix)}if(te&&!Y&&(!c||c.getAttribute(qy)!==V||c.getAttribute(Hy)!==ne)){i.setAttribute(t,ne),c&&i.removeChild(c);const $=T4(),{extra:oe}=$;oe.attributes[_g]=e,Cg(te,V).then(le=>{const me=Xy(ae(ae({},$),{},{icons:{main:le,mask:bw()},prefix:V,iconName:ne,extra:oe,watchable:!0})),M=ot.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?i.insertBefore(M,i.firstChild):i.appendChild(M),M.outerHTML=me.map(R=>Qu(R)).join(`
`),i.removeAttribute(t),r()}).catch(a)}else r()}else r()})}function V4(i){return Promise.all([xT(i,"::before"),xT(i,"::after")])}function L4(i){return i.parentNode!==document.head&&!~EM.indexOf(i.tagName.toUpperCase())&&!i.getAttribute(_g)&&(!i.parentNode||i.parentNode.tagName!=="svg")}function NT(i){if(pr)return new Promise((e,t)=>{const r=Wo(i.querySelectorAll("*")).filter(L4).map(V4),a=Wy.begin("searchPseudoElements");ww(),Promise.all(r).then(()=>{a(),Ng(),e()}).catch(()=>{a(),Ng(),t()})})}var U4={hooks(){return{mutationObserverCallbacks(i){return i.pseudoElementsCallback=NT,i}}},provides(i){i.pseudoElements2svg=function(e){const{node:t=ot}=e;pe.searchPseudoElements&&NT(t)}}};let OT=!1;var j4={mixout(){return{dom:{unwatch(){ww(),OT=!0}}}},hooks(){return{bootstrap(){ST(wg("mutationObserverCallbacks",{}))},noAuto(){v4()},watch(i){const{observeMutationsRoot:e}=i;OT?Ng():ST(wg("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const DT=i=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return i.toLowerCase().split(" ").reduce((t,r)=>{const a=r.toLowerCase().split("-"),l=a[0];let c=a.slice(1).join("-");if(l&&c==="h")return t.flipX=!0,t;if(l&&c==="v")return t.flipY=!0,t;if(c=parseFloat(c),isNaN(c))return t;switch(l){case"grow":t.size=t.size+c;break;case"shrink":t.size=t.size-c;break;case"left":t.x=t.x-c;break;case"right":t.x=t.x+c;break;case"up":t.y=t.y-c;break;case"down":t.y=t.y+c;break;case"rotate":t.rotate=t.rotate+c;break}return t},e)};var z4={mixout(){return{parse:{transform:i=>DT(i)}}},hooks(){return{parseNodeAttributes(i,e){const t=e.getAttribute("data-fa-transform");return t&&(i.transform=DT(t)),i}}},provides(i){i.generateAbstractTransformGrouping=function(e){let{main:t,transform:r,containerWidth:a,iconWidth:l}=e;const c={transform:"translate(".concat(a/2," 256)")},m="translate(".concat(r.x*32,", ").concat(r.y*32,") "),p="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),g="rotate(".concat(r.rotate," 0 0)"),v={transform:"".concat(m," ").concat(p," ").concat(g)},E={transform:"translate(".concat(l/2*-1," -256)")},S={outer:c,inner:v,path:E};return{tag:"g",attributes:ae({},S.outer),children:[{tag:"g",attributes:ae({},S.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:ae(ae({},t.icon.attributes),S.path)}]}]}}}};const Op={x:0,y:0,width:"100%",height:"100%"};function PT(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return i.attributes&&(i.attributes.fill||e)&&(i.attributes.fill="black"),i}function B4(i){return i.tag==="g"?i.children:[i]}var F4={hooks(){return{parseNodeAttributes(i,e){const t=e.getAttribute("data-fa-mask"),r=t?ed(t.split(" ").map(a=>a.trim())):bw();return r.prefix||(r.prefix=ps()),i.mask=r,i.maskId=e.getAttribute("data-fa-mask-id"),i}}},provides(i){i.generateAbstractMask=function(e){let{children:t,attributes:r,main:a,mask:l,maskId:c,transform:m}=e;const{width:p,icon:g}=a,{width:v,icon:E}=l,S=kM({transform:m,containerWidth:v,iconWidth:p}),V={tag:"rect",attributes:ae(ae({},Op),{},{fill:"white"})},F=g.children?{children:g.children.map(PT)}:{},Y={tag:"g",attributes:ae({},S.inner),children:[PT(ae({tag:g.tag,attributes:ae(ae({},g.attributes),S.path)},F))]},U={tag:"g",attributes:ae({},S.outer),children:[Y]},te="mask-".concat(c||Vu()),ne="clip-".concat(c||Vu()),$={tag:"mask",attributes:ae(ae({},Op),{},{id:te,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[V,U]},oe={tag:"defs",children:[{tag:"clipPath",attributes:{id:ne},children:B4(E)},$]};return t.push(oe,{tag:"rect",attributes:ae({fill:"currentColor","clip-path":"url(#".concat(ne,")"),mask:"url(#".concat(te,")")},Op)}),{children:t,attributes:r}}}},q4={provides(i){let e=!1;ms.matchMedia&&(e=ms.matchMedia("(prefers-reduced-motion: reduce)").matches),i.missingIconAbstract=function(){const t=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:ae(ae({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const l=ae(ae({},a),{},{attributeName:"opacity"}),c={tag:"circle",attributes:ae(ae({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||c.children.push({tag:"animate",attributes:ae(ae({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:ae(ae({},l),{},{values:"1;0;1;1;0;1;"})}),t.push(c),t.push({tag:"path",attributes:ae(ae({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:ae(ae({},l),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:ae(ae({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:ae(ae({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},H4={hooks(){return{parseNodeAttributes(i,e){const t=e.getAttribute("data-fa-symbol"),r=t===null?!1:t===""?!0:t;return i.symbol=r,i}}}},G4=[LM,C4,x4,N4,O4,U4,j4,z4,F4,q4,H4];t4(G4,{mixoutsTo:In});In.noAuto;In.config;In.library;In.dom;const Dg=In.parse;In.findIconDefinition;In.toHtml;const $4=In.icon;In.layer;In.text;In.counter;var Dp={exports:{}},Pp,kT;function K4(){if(kT)return Pp;kT=1;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Pp=i,Pp}var kp,MT;function Y4(){if(MT)return kp;MT=1;var i=K4();function e(){}function t(){}return t.resetWarningCache=e,kp=function(){function r(c,m,p,g,v,E){if(E!==i){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}r.isRequired=r;function a(){return r}var l={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},kp}var VT;function Q4(){return VT||(VT=1,Dp.exports=Y4()()),Dp.exports}var X4=Q4();const Ue=t1(X4);function LT(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable})),t.push.apply(t,r)}return t}function gi(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?LT(Object(t),!0).forEach(function(r){wo(i,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):LT(Object(t)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(t,r))})}return i}function gf(i){"@babel/helpers - typeof";return gf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gf(i)}function wo(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function W4(i,e){if(i==null)return{};var t={},r=Object.keys(i),a,l;for(l=0;l<r.length;l++)a=r[l],!(e.indexOf(a)>=0)&&(t[a]=i[a]);return t}function J4(i,e){if(i==null)return{};var t=W4(i,e),r,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(i);for(a=0;a<l.length;a++)r=l[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(i,r)&&(t[r]=i[r])}return t}function Pg(i){return Z4(i)||e3(i)||t3(i)||n3()}function Z4(i){if(Array.isArray(i))return kg(i)}function e3(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function t3(i,e){if(i){if(typeof i=="string")return kg(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return kg(i,e)}}function kg(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=i[t];return r}function n3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i3(i){var e,t=i.beat,r=i.fade,a=i.beatFade,l=i.bounce,c=i.shake,m=i.flash,p=i.spin,g=i.spinPulse,v=i.spinReverse,E=i.pulse,S=i.fixedWidth,V=i.inverse,F=i.border,Y=i.listItem,U=i.flip,te=i.size,ne=i.rotation,$=i.pull,oe=(e={"fa-beat":t,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":l,"fa-shake":c,"fa-flash":m,"fa-spin":p,"fa-spin-reverse":v,"fa-spin-pulse":g,"fa-pulse":E,"fa-fw":S,"fa-inverse":V,"fa-border":F,"fa-li":Y,"fa-flip":U===!0,"fa-flip-horizontal":U==="horizontal"||U==="both","fa-flip-vertical":U==="vertical"||U==="both"},wo(e,"fa-".concat(te),typeof te<"u"&&te!==null),wo(e,"fa-rotate-".concat(ne),typeof ne<"u"&&ne!==null&&ne!==0),wo(e,"fa-pull-".concat($),typeof $<"u"&&$!==null),wo(e,"fa-swap-opacity",i.swapOpacity),e);return Object.keys(oe).map(function(le){return oe[le]?le:null}).filter(function(le){return le})}function r3(i){return i=i-0,i===i}function Rw(i){return r3(i)?i:(i=i.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),i.substr(0,1).toLowerCase()+i.substr(1))}var s3=["style"];function a3(i){return i.charAt(0).toUpperCase()+i.slice(1)}function o3(i){return i.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r=t.indexOf(":"),a=Rw(t.slice(0,r)),l=t.slice(r+1).trim();return a.startsWith("webkit")?e[a3(a)]=l:e[a]=l,e},{})}function Cw(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(p){return Cw(i,p)}),a=Object.keys(e.attributes||{}).reduce(function(p,g){var v=e.attributes[g];switch(g){case"class":p.attrs.className=v,delete e.attributes.class;break;case"style":p.attrs.style=o3(v);break;default:g.indexOf("aria-")===0||g.indexOf("data-")===0?p.attrs[g.toLowerCase()]=v:p.attrs[Rw(g)]=v}return p},{attrs:{}}),l=t.style,c=l===void 0?{}:l,m=J4(t,s3);return a.attrs.style=gi(gi({},a.attrs.style),c),i.apply(void 0,[e.tag,gi(gi({},a.attrs),m)].concat(Pg(r)))}var xw=!1;try{xw=!0}catch{}function l3(){if(!xw&&console&&typeof console.error=="function"){var i;(i=console).error.apply(i,arguments)}}function UT(i){if(i&&gf(i)==="object"&&i.prefix&&i.iconName&&i.icon)return i;if(Dg.icon)return Dg.icon(i);if(i===null)return null;if(i&&gf(i)==="object"&&i.prefix&&i.iconName)return i;if(Array.isArray(i)&&i.length===2)return{prefix:i[0],iconName:i[1]};if(typeof i=="string")return{prefix:"fas",iconName:i}}function Mp(i,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?wo({},i,e):{}}var jT={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},nd=Af.forwardRef(function(i,e){var t=gi(gi({},jT),i),r=t.icon,a=t.mask,l=t.symbol,c=t.className,m=t.title,p=t.titleId,g=t.maskId,v=UT(r),E=Mp("classes",[].concat(Pg(i3(t)),Pg((c||"").split(" ")))),S=Mp("transform",typeof t.transform=="string"?Dg.transform(t.transform):t.transform),V=Mp("mask",UT(a)),F=$4(v,gi(gi(gi(gi({},E),S),V),{},{symbol:l,title:m,titleId:p,maskId:g}));if(!F)return l3("Could not find icon",v),null;var Y=F.abstract,U={ref:e};return Object.keys(t).forEach(function(te){jT.hasOwnProperty(te)||(U[te]=t[te])}),u3(Y[0],U)});nd.displayName="FontAwesomeIcon";nd.propTypes={beat:Ue.bool,border:Ue.bool,beatFade:Ue.bool,bounce:Ue.bool,className:Ue.string,fade:Ue.bool,flash:Ue.bool,mask:Ue.oneOfType([Ue.object,Ue.array,Ue.string]),maskId:Ue.string,fixedWidth:Ue.bool,inverse:Ue.bool,flip:Ue.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Ue.oneOfType([Ue.object,Ue.array,Ue.string]),listItem:Ue.bool,pull:Ue.oneOf(["right","left"]),pulse:Ue.bool,rotation:Ue.oneOf([0,90,180,270]),shake:Ue.bool,size:Ue.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Ue.bool,spinPulse:Ue.bool,spinReverse:Ue.bool,symbol:Ue.oneOfType([Ue.bool,Ue.string]),title:Ue.string,titleId:Ue.string,transform:Ue.oneOfType([Ue.string,Ue.object]),swapOpacity:Ue.bool};var u3=Cw.bind(null,Af.createElement);const c3=({isOpen:i,toggle:e})=>A.jsx("div",{className:"flex justify-end",children:A.jsxs("button",{onClick:e,className:"flex flex-col items-center p-2 bg text-white font top-4 left-4 z-50 rounded-2xl hover:text-black-500 cursor-pointer",children:[A.jsx(nd,{icon:Hk,className:"mr-2 w-auto"}),i?"Cerrar Menú":"Abrir Menú"]})}),h3=()=>{const{openMenu:i,toogleMenu:e}=Af.useContext(By)||{};return A.jsx(A.Fragment,{children:A.jsxs("div",{className:"bg-gray-900 text-slate-300 w-full h-16 flex items-center justify-between px-4",children:[A.jsx(c3,{isOpen:!!i,toggle:e||(()=>{})}),A.jsx("div",{children:A.jsxs(ca,{to:"/home",className:" text-white p-2 flex flex-col rounded shadow hover:bg-gray-600 transition",children:[A.jsx(nd,{icon:Gk,style:{color:"#fcfcfc"}}),A.jsx("small",{children:"Inicio"})]})})]})})},f3=()=>{const{openMenu:i}=J.useContext(By)??{},e="16rem";return A.jsxs("div",{className:"flex min-h-screen relative",children:[A.jsx("div",{className:"fixed top-0 left-0 h-full bg-gray-900 z-30 transition-transform duration-300 ease-in-out",style:{width:e,transform:`translateX(${i?"0":`-${e}`})`},children:A.jsx(qk,{openMenu:i??!1})}),A.jsxs("div",{className:"flex flex-col flex-1 w-full transition-all duration-300",style:{paddingLeft:i?e:"0"},children:[A.jsx("div",{className:"w-full bg-white z-40 shadow-md",children:A.jsx(h3,{})}),A.jsx("main",{className:"p-4",children:A.jsx(Hg,{})})]})]})},yf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d3(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const r=new id(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const m=Array.from(c).map(async g=>g(t.origin,l)),p=await d3(m);t.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}id.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m3(i="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p3{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((m,p)=>{const g=m3("",20);a.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},r);c={messageChannel:a,onMessage(E){const S=E;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),m(S.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(){return typeof zT().WorkerGlobalScope<"u"&&typeof zT().importScripts=="function"}async function g3(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function y3(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function v3(){return Nw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="firebaseLocalStorageDb",_3=1,vf="firebaseLocalStorage",Dw="fbase_key";class Xu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function rd(i,e){return i.transaction([vf],e?"readwrite":"readonly").objectStore(vf)}function b3(){const i=indexedDB.deleteDatabase(Ow);return new Xu(i).toPromise()}function Mg(){const i=indexedDB.open(Ow,_3);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(vf,{keyPath:Dw})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(vf)?e(r):(r.close(),await b3(),e(await Mg()))})})}async function BT(i,e,t){const r=rd(i,!0).put({[Dw]:e,value:t});return new Xu(r).toPromise()}async function E3(i,e){const t=rd(i,!1).get(e),r=await new Xu(t).toPromise();return r===void 0?null:r.value}function FT(i,e){const t=rd(i,!0).delete(e);return new Xu(t).toPromise()}const T3=800,A3=3;class Pw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>A3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=id._getInstance(v3()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await g3(),!this.activeServiceWorker)return;this.sender=new p3(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||y3()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mg();return await BT(e,yf,"1"),await FT(e,yf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>BT(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>E3(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>FT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=rd(a,!1).getAll();return new Xu(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),T3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pw.type="LOCAL";const S3=Pw;function kw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const w3=kw,Mw=new _s("auth","Firebase",kw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=new Cf("@firebase/auth");function I3(i,...e){_f.logLevel<=Me.WARN&&_f.warn(`Auth (${xi}): ${i}`,...e)}function Gh(i,...e){_f.logLevel<=Me.ERROR&&_f.error(`Auth (${xi}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(i,...e){throw Zy(i,...e)}function Ea(i,...e){return Zy(i,...e)}function Vw(i,e,t){const r=Object.assign(Object.assign({},w3()),{[e]:t});return new _s("auth","Firebase",r).create(e,{appName:i.name})}function fa(i){return Vw(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zy(i,...e){if(typeof i!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(t,...r)}return Mw.create(i,...e)}function Re(i,e,...t){if(!i)throw Zy(e,...t)}function rr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Gh(e),new Error(e)}function ys(i,e){i||rr(e)}function R3(){return qT()==="http:"||qT()==="https:"}function qT(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C3(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(R3()||E1()||"connection"in navigator)?navigator.onLine:!0}function x3(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N3{constructor(e,t){this.shortDelay=e,this.longDelay=t,ys(t>e,"Short delay should be less than long delay!"),this.isMobile=_1()||T1()}get(){return C3()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(i,e){ys(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O3={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D3=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],P3=new N3(3e4,6e4);function ev(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Jo(i,e,t,r,a={}){return jw(i,a,async()=>{let l={},c={};r&&(e==="GET"?c=r:l={body:JSON.stringify(r)});const m=mr(Object.assign({key:i.config.apiKey},c)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},l);return b1()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&qo(i.emulatorConfig.host)&&(g.credentials="include"),Uw.fetch()(await zw(i,i.config.apiHost,t,m),g)})}async function jw(i,e,t){i._canInitEmulator=!1;const r=Object.assign(Object.assign({},O3),e);try{const a=new M3(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Oh(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const m=l.ok?c.errorMessage:c.error.message,[p,g]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oh(i,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Oh(i,"email-already-in-use",c);if(p==="USER_DISABLED")throw Oh(i,"user-disabled",c);const v=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Vw(i,v,g);Ci(i,v)}}catch(a){if(a instanceof Bn)throw a;Ci(i,"network-request-failed",{message:String(a)})}}async function k3(i,e,t,r,a={}){const l=await Jo(i,e,t,r,a);return"mfaPendingCredential"in l&&Ci(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function zw(i,e,t,r){const a=`${e}${t}?${r}`,l=i,c=l.config.emulator?Lw(i.config,a):`${i.config.apiScheme}://${a}`;return D3.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class M3{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ea(this.auth,"network-request-failed")),P3.get())})}}function Oh(i,e,t){const r={appName:i.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const a=Ea(i,e,r);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V3(i,e){return Jo(i,"POST","/v1/accounts:delete",e)}async function bf(i,e){return Jo(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function L3(i,e=!1){const t=Ct(i),r=await t.getIdToken(e),a=tv(r);Re(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:r,authTime:Au(Vp(a.auth_time)),issuedAtTime:Au(Vp(a.iat)),expirationTime:Au(Vp(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Vp(i){return Number(i)*1e3}function tv(i){const[e,t,r]=i.split(".");if(e===void 0||t===void 0||r===void 0)return Gh("JWT malformed, contained fewer than 3 sections"),null;try{const a=Gg(t);return a?JSON.parse(a):(Gh("Failed to decode base64 JWT payload"),null)}catch(a){return Gh("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function HT(i){const e=tv(i);return Re(e,"internal-error"),Re(typeof e.exp<"u","internal-error"),Re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uu(i,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Bn&&U3(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function U3({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j3{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Au(this.lastLoginAt),this.creationTime=Au(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ef(i){var e;const t=i.auth,r=await i.getIdToken(),a=await Uu(i,bf(t,{idToken:r}));Re(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];i._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Bw(l.providerUserInfo):[],m=B3(i.providerData,c),p=i.isAnonymous,g=!(i.email&&l.passwordHash)&&!(m!=null&&m.length),v=p?g:!1,E={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:m,metadata:new Vg(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(i,E)}async function z3(i){const e=Ct(i);await Ef(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function B3(i,e){return[...i.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function Bw(i){return i.map(e=>{var{providerId:t}=e,r=Ho(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F3(i,e){const t=await jw(i,{},async()=>{const r=mr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,c=await zw(i,a,"/v1/token",`key=${l}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",Uw.fetch()(c,{method:"POST",headers:m,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function q3(i,e){return Jo(i,"POST","/v2/accounts:revokeToken",ev(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Re(e.idToken,"internal-error"),Re(typeof e.idToken<"u","internal-error"),Re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):HT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Re(e.length!==0,"internal-error");const t=HT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:a,expiresIn:l}=await F3(e,t);this.updateTokensAndExpiration(r,a,Number(l))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:a,expirationTime:l}=t,c=new xo;return r&&(Re(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),a&&(Re(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Re(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xo,this.toJSON())}_performRefresh(){return rr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(i,e){Re(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Qn{constructor(e){var{uid:t,auth:r,stsTokenManager:a}=e,l=Ho(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new j3(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Vg(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Uu(this,this.stsTokenManager.getToken(this.auth,e));return Re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return L3(this,e)}reload(){return z3(this)}_assign(e){this!==e&&(Re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ef(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(It(this.auth.app))return Promise.reject(fa(this.auth));const e=await this.getIdToken();return await Uu(this,V3(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,a,l,c,m,p,g,v;const E=(r=t.displayName)!==null&&r!==void 0?r:void 0,S=(a=t.email)!==null&&a!==void 0?a:void 0,V=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,F=(c=t.photoURL)!==null&&c!==void 0?c:void 0,Y=(m=t.tenantId)!==null&&m!==void 0?m:void 0,U=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,te=(g=t.createdAt)!==null&&g!==void 0?g:void 0,ne=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:$,emailVerified:oe,isAnonymous:le,providerData:me,stsTokenManager:M}=t;Re($&&M,e,"internal-error");const R=xo.fromJSON(this.name,M);Re(typeof $=="string",e,"internal-error"),Kr(E,e.name),Kr(S,e.name),Re(typeof oe=="boolean",e,"internal-error"),Re(typeof le=="boolean",e,"internal-error"),Kr(V,e.name),Kr(F,e.name),Kr(Y,e.name),Kr(U,e.name),Kr(te,e.name),Kr(ne,e.name);const I=new Qn({uid:$,auth:e,email:S,emailVerified:oe,displayName:E,isAnonymous:le,photoURL:F,phoneNumber:V,tenantId:Y,stsTokenManager:R,createdAt:te,lastLoginAt:ne});return me&&Array.isArray(me)&&(I.providerData=me.map(N=>Object.assign({},N))),U&&(I._redirectEventId=U),I}static async _fromIdTokenResponse(e,t,r=!1){const a=new xo;a.updateFromServerResponse(t);const l=new Qn({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await Ef(l),l}static async _fromGetAccountInfoResponse(e,t,r){const a=t.users[0];Re(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?Bw(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),m=new xo;m.updateFromIdToken(r);const p=new Qn({uid:a.localId,auth:e,stsTokenManager:m,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Vg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=new Map;function _i(i){ys(i instanceof Function,"Expected a class definition");let e=GT.get(i);return e?(ys(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,GT.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Fw.type="NONE";const $T=Fw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(i,e,t){return`firebase:${i}:${e}:${t}`}class No{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:a,name:l}=this.auth;this.fullUserKey=Su(this.userKey,a.apiKey,l),this.fullPersistenceKey=Su("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await bf(this.auth,{idToken:e}).catch(()=>{});return t?Qn._fromGetAccountInfoResponse(this.auth,t,e):null}return Qn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new No(_i($T),e,r);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||_i($T);const c=Su(r,e.config.apiKey,e.name);let m=null;for(const g of t)try{const v=await g._get(c);if(v){let E;if(typeof v=="string"){const S=await bf(e,{idToken:v}).catch(()=>{});if(!S)break;E=await Qn._fromGetAccountInfoResponse(e,S,v)}else E=Qn._fromJSON(e,v);g!==l&&(m=E),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new No(l,e,r):(l=p[0],m&&await l._set(c,m.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new No(l,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(H3(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hw(e))return"Blackberry";if(Gw(e))return"Webos";if(G3(e))return"Safari";if((e.includes("chrome/")||$3(e))&&!e.includes("edge/"))return"Chrome";if(Wu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function H3(i=it()){return/firefox\//i.test(i)}function G3(i=it()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $3(i=it()){return/crios\//i.test(i)}function qw(i=it()){return/iemobile/i.test(i)}function Wu(i=it()){return/android/i.test(i)}function Hw(i=it()){return/blackberry/i.test(i)}function Gw(i=it()){return/webos/i.test(i)}function nv(i=it()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function K3(i=it()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(i)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(i)}function Y3(){return A1()&&document.documentMode===10}function Q3(i=it()){return nv(i)||Wu(i)||Gw(i)||Hw(i)||/windows phone/i.test(i)||qw(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(i,e=[]){let t;switch(i){case"Browser":t=KT(it());break;case"Worker":t=`${KT(it())}-${i}`;break;default:t=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X3{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=l=>new Promise((c,m)=>{try{const p=e(l);c(p)}catch(p){m(p)}});r.onAbort=t,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W3(i,e={}){return Jo(i,"GET","/v2/passwordPolicy",ev(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J3=6;class Z3{constructor(e){var t,r,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:J3,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,a,l,c,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(r=p.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e,t,r,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new YT(this),this.idTokenSubscription=new YT(this),this.beforeStateQueue=new X3(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_i(t)),this._initializationPromise=this.queue(async()=>{var r,a,l;if(!this._deleted&&(this.persistenceManager=await No.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await bf(this,{idToken:e}),r=await Qn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(It(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(m,m))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===m)&&(p!=null&&p.user)&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ef(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x3()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(It(this.app))return Promise.reject(fa(this));const t=e?Ct(e):null;return t&&Re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return It(this.app)?Promise.reject(fa(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return It(this.app)?Promise.reject(fa(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_i(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await W3(this),t=new Z3(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _s("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await q3(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_i(e)||this._popupRedirectResolver;Re(t,this,"argument-error"),this.redirectPersistenceManager=await No.create(this,[_i(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Re(m,this,"internal-error"),m.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,r,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$w(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(It(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&I3(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Kw(i){return Ct(i)}class YT{constructor(e){this.auth=e,this.observer=null,this.addObserver=w1(t=>this.observer=t)}get next(){return Re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tV(i,e){const t=zu(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(ss(l,e??{}))return a;Ci(a,"already-initialized")}return t.initialize({options:e})}function nV(i,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(_i);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return rr("not implemented")}_getIdTokenResponse(e){return rr("not implemented")}_linkToIdToken(e,t){return rr("not implemented")}_getReauthenticationResolver(e){return rr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(i,e){return k3(i,"POST","/v1/accounts:signInWithIdp",ev(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iV="http://localhost";class ya extends Yw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ya(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ci("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=t,l=Ho(t,["providerId","signInMethod"]);if(!r||!a)return null;const c=new ya(r,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Oo(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Oo(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Oo(e,t)}buildRequest(){const e={requestUri:iV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=mr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends Qw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends Ju{constructor(){super("facebook.com")}static credential(e){return ya._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yr.credential(e.oauthAccessToken)}catch{return null}}}Yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends Ju{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ya._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Qr.credential(t,r)}catch{return null}}}Qr.GOOGLE_SIGN_IN_METHOD="google.com";Qr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends Ju{constructor(){super("github.com")}static credential(e){return ya._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xr.credential(e.oauthAccessToken)}catch{return null}}}Xr.GITHUB_SIGN_IN_METHOD="github.com";Xr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends Ju{constructor(){super("twitter.com")}static credential(e,t){return ya._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Wr.credential(t,r)}catch{return null}}}Wr.TWITTER_SIGN_IN_METHOD="twitter.com";Wr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,a=!1){const l=await Qn._fromIdTokenResponse(e,r,a),c=QT(r);return new zo({user:l,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const a=QT(r);return new zo({user:e,providerId:a,_tokenResponse:r,operationType:t})}}function QT(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf extends Bn{constructor(e,t,r,a){var l;super(t.code,t.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,Tf.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,a){return new Tf(e,t,r,a)}}function Xw(i,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Tf._fromErrorAndOperation(i,l,e,r):l})}async function rV(i,e,t=!1){const r=await Uu(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return zo._forOperation(i,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sV(i,e,t=!1){const{auth:r}=i;if(It(r.app))return Promise.reject(fa(r));const a="reauthenticate";try{const l=await Uu(i,Xw(r,a,e,i),t);Re(l.idToken,r,"internal-error");const c=tv(l.idToken);Re(c,r,"internal-error");const{sub:m}=c;return Re(i.uid===m,r,"user-mismatch"),zo._forOperation(i,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Ci(r,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aV(i,e,t=!1){if(It(i.app))return Promise.reject(fa(i));const r="signIn",a=await Xw(i,r,e),l=await zo._fromIdTokenResponse(i,r,a);return t||await i._updateCurrentUser(l.user),l}var XT="@firebase/auth",WT="1.10.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lV(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uV(i){as(new ar("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:m}=r.options;Re(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:c,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$w(i)},g=new eV(r,a,l,p);return nV(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),as(new ar("auth-internal",e=>{const t=Kw(e.getProvider("auth").getImmediate());return(r=>new oV(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),bi(XT,WT,lV(i)),bi(XT,WT,"esm2017")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(yf,"1"),this.storage.removeItem(yf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cV=1e3,hV=10;class Jw extends Ww{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Q3(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),a=this.localCache[t];r!==a&&e(t,a,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,m,p)=>{this.notifyListeners(c,p)});return}const r=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},l=this.storage.getItem(r);Y3()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,hV):a()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},cV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jw.type="LOCAL";const fV=Jw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw extends Ww{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Zw.type="SESSION";const dV=Zw;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mV(i,e){return e?_i(e):(Re(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv extends Yw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Oo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Oo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function pV(i){return aV(i.auth,new iv(i),i.bypassAuthState)}function gV(i){const{auth:e,user:t}=i;return Re(t,e,"internal-error"),sV(t,new iv(i),i.bypassAuthState)}async function yV(i){const{auth:e,user:t}=i;return Re(t,e,"internal-error"),rV(t,new iv(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vV{constructor(e,t,r,a,l=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:a,tenantId:l,error:c,type:m}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:r,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pV;case"linkViaPopup":case"linkViaRedirect":return yV;case"reauthViaPopup":case"reauthViaRedirect":return gV;default:Ci(this.auth,"internal-error")}}resolve(e){ys(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ys(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _V="pendingRedirect",wu=new Map;class bV extends vV{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=wu.get(this.auth._key());if(!e){try{const r=await EV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}wu.set(this.auth._key(),e)}return this.bypassAuthState||wu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function EV(i,e){const t=wV(e),r=SV(i);if(!await r._isAvailable())return!1;const a=await r._get(t)==="true";return await r._remove(t),a}function TV(){wu.clear()}function AV(i,e){wu.set(i._key(),e)}function SV(i){return _i(i._redirectPersistence)}function wV(i){return Su(_V,i.config.apiKey,i.name)}async function IV(i,e,t=!1){if(It(i.app))return Promise.reject(fa(i));const r=Kw(i),a=mV(r,e),c=await new bV(r,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RV="__/auth/handler",CV="emulator/auth/handler",xV=encodeURIComponent("fac");async function NV(i,e,t,r,a,l){Re(i.config.authDomain,i,"auth-domain-config-required"),Re(i.config.apiKey,i,"invalid-api-key");const c={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:r,v:xi,eventId:a};if(e instanceof Qw){e.setDefaultLanguage(i.languageCode),c.providerId=e.providerId||"",S1(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,E]of Object.entries(l||{}))c[v]=E}if(e instanceof Ju){const v=e.getScopes().filter(E=>E!=="");v.length>0&&(c.scopes=v.join(","))}i.tenantId&&(c.tid=i.tenantId);const m=c;for(const v of Object.keys(m))m[v]===void 0&&delete m[v];const p=await i._getAppCheckToken(),g=p?`#${xV}=${encodeURIComponent(p)}`:"";return`${OV(i)}?${mr(m).slice(1)}${g}`}function OV({config:i}){return i.emulator?Lw(i,CV):`https://${i.authDomain}/${RV}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DV(i,e={}){return Jo(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PV=2e3;async function kV(i,e,t){var r;const{BuildInfo:a}=va();ys(e.sessionId,"AuthEvent did not contain a session ID");const l=await jV(e.sessionId),c={};return nv()?c.ibi=a.packageName:Wu()?c.apn=a.packageName:Ci(i,"operation-not-supported-in-this-environment"),a.displayName&&(c.appDisplayName=a.displayName),c.sessionId=l,NV(i,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,c)}async function MV(i){const{BuildInfo:e}=va(),t={};nv()?t.iosBundleId=e.packageName:Wu()?t.androidPackageName=e.packageName:Ci(i,"operation-not-supported-in-this-environment"),await DV(i,t)}function VV(i){const{cordova:e}=va();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let a=null;r?e.plugins.browsertab.openUrl(i):a=e.InAppBrowser.open(i,K3()?"_blank":"_system","location=yes"),t(a)})})}async function LV(i,e,t){const{cordova:r}=va();let a=()=>{};try{await new Promise((l,c)=>{let m=null;function p(){var E;l();const S=(E=r.plugins.browsertab)===null||E===void 0?void 0:E.close;typeof S=="function"&&S(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function g(){m||(m=window.setTimeout(()=>{c(Ea(i,"redirect-cancelled-by-user"))},PV))}function v(){(document==null?void 0:document.visibilityState)==="visible"&&g()}e.addPassiveListener(p),document.addEventListener("resume",g,!1),Wu()&&document.addEventListener("visibilitychange",v,!1),a=()=>{e.removePassiveListener(p),document.removeEventListener("resume",g,!1),document.removeEventListener("visibilitychange",v,!1),m&&window.clearTimeout(m)}})}finally{a()}}function UV(i){var e,t,r,a,l,c,m,p,g,v;const E=va();Re(typeof((e=E==null?void 0:E.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),Re(typeof((t=E==null?void 0:E.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),Re(typeof((l=(a=(r=E==null?void 0:E.cordova)===null||r===void 0?void 0:r.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.openUrl)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Re(typeof((p=(m=(c=E==null?void 0:E.cordova)===null||c===void 0?void 0:c.plugins)===null||m===void 0?void 0:m.browsertab)===null||p===void 0?void 0:p.isAvailable)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Re(typeof((v=(g=E==null?void 0:E.cordova)===null||g===void 0?void 0:g.InAppBrowser)===null||v===void 0?void 0:v.open)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function jV(i){const e=zV(i),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function zV(i){if(ys(/[0-9a-zA-Z]+/.test(i),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(i);const e=new ArrayBuffer(i.length),t=new Uint8Array(e);for(let r=0;r<i.length;r++)t[r]=i.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BV=10*60*1e3;class FV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qV(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!eI(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ea(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BV&&this.cachedEventUids.clear(),this.cachedEventUids.has(JT(e))}saveEventToCache(e){this.cachedEventUids.add(JT(e)),this.lastProcessedEventTime=Date.now()}}function JT(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function eI({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qV(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eI(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HV=20;class GV extends FV{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function $V(i,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:QV(),postBody:null,tenantId:i.tenantId,error:Ea(i,"no-auth-event")}}function KV(i,e){return Lg()._set(Ug(i),e)}async function ZT(i){const e=await Lg()._get(Ug(i));return e&&await Lg()._remove(Ug(i)),e}function YV(i,e){var t,r;const a=WV(e);if(a.includes("/__/auth/callback")){const l=$h(a),c=l.firebaseError?XV(decodeURIComponent(l.firebaseError)):null,m=(r=(t=c==null?void 0:c.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],p=m?Ea(m):null;return p?{type:i.type,eventId:i.eventId,tenantId:i.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:i.type,eventId:i.eventId,tenantId:i.tenantId,sessionId:i.sessionId,urlResponse:a,postBody:null}}return null}function QV(){const i=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<HV;t++){const r=Math.floor(Math.random()*e.length);i.push(e.charAt(r))}return i.join("")}function Lg(){return _i(fV)}function Ug(i){return Su("authEvent",i.config.apiKey,i.name)}function XV(i){try{return JSON.parse(i)}catch{return null}}function WV(i){const e=$h(i),t=e.link?decodeURIComponent(e.link):void 0,r=$h(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return $h(a).link||a||r||t||i}function $h(i){if(!(i!=null&&i.includes("?")))return{};const[e,...t]=i.split("?");return o2(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JV=500;class ZV{constructor(){this._redirectPersistence=dV,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=IV,this._overrideRedirectResult=AV}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new GV(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ci(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,a){UV(e);const l=await this._initialize(e);await l.initialized(),l.resetRedirect(),TV(),await this._originValidation(e);const c=$V(e,r,a);await KV(e,c);const m=await kV(e,c,t),p=await VV(m);return LV(e,l,p)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=MV(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:a,BuildInfo:l}=va(),c=setTimeout(async()=>{await ZT(e),t.onEvent(e1())},JV),m=async v=>{clearTimeout(c);const E=await ZT(e);let S=null;E&&(v!=null&&v.url)&&(S=YV(E,v.url)),t.onEvent(S||e1())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,m);const p=a,g=`${l.packageName.toLowerCase()}://`;va().handleOpenURL=async v=>{if(v.toLowerCase().startsWith(g)&&m({url:v}),typeof p=="function")try{p(v)}catch(E){console.error(E)}}}}const e6=ZV;function e1(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ea("no-auth-event")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t6(i=Kg()){const e=zu(i,"auth");return e.isInitialized()?e.getImmediate():tV(i,{persistence:S3,popupRedirectResolver:e6})}uV("Cordova");const n6=t6(Fn),i6=i=>n6.currentUser?i.children:A.jsx(CC,{to:"/"}),r6=[{title:"Crear usuario",slug:"createUser"},{title:"Crear maquina",slug:"createMachine"},{title:"Editar registros",slug:"editingRegister"}];function s6({item:i}){return A.jsx(ca,{to:`/configurations/${i.slug}`,children:A.jsx("button",{className:"button",children:i.title})})}const a6=()=>A.jsxs("div",{className:"flex flex-col items-center p-4 space-y-6 md:space-y-8",children:[A.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:r6.map((i,e)=>A.jsx(s6,{item:i},e))}),A.jsx("div",{className:"w-full max-w-4xl",children:A.jsx(Hg,{})})]}),o6=[{name:"firstName",label:"Nombres",type:"text",required:!0,placeholder:"Ingrese sus nombres"},{name:"lastName",label:"Apellidos",type:"text",required:!0,placeholder:"Ingrese sus apellidos"},{name:"code",label:"Codigo",type:"text",required:!0,placeholder:"Ingrese su codigo"},{name:"section",label:"Seccion",type:"text",required:!0,placeholder:"Ingrese su seccion"}],l6=[{name:"date",label:"Fecha",type:"date",required:!0,placeholder:"Seleccione una fecha"},{name:"abbreviation",label:"Abreviacion de maquina",type:"text",required:!0,placeholder:"e.g., F1315"},{name:"machineName",label:"Nombre de maquina",type:"text",required:!0,placeholder:"e.g., Cutter Alpha"},{name:"efficiency",label:"Eficiencia (%)",type:"number",required:!0,placeholder:"e.g., 92"}],tI=({type:i="success",title:e,message:t,onClose:r})=>{const l={success:{bg:"bg-green-50",border:"border-green-300",text:"text-green-800",darkBg:"dark:bg-gray-800",darkText:"dark:text-green-400",darkBorder:"dark:border-green-800"},error:{bg:"bg-red-50",border:"border-red-300",text:"text-red-800",darkBg:"dark:bg-gray-800",darkText:"dark:text-red-400",darkBorder:"dark:border-red-800"}}[i];return A.jsxs("div",{className:`p-4 mb-4 border rounded-lg ${l.bg} ${l.border} ${l.text} ${l.darkBg} ${l.darkText} ${l.darkBorder}`,role:"alert",children:[A.jsxs("div",{className:"flex items-center justify-between",children:[A.jsx("h3",{className:"text-lg font-medium",children:e}),A.jsx("button",{onClick:r,className:`text-sm px-2 py-1 rounded ${l.text} border ${l.border} hover:bg-opacity-20`,children:"Cerrar"})]}),A.jsx("p",{className:"mt-2 text-sm",children:t})]})},u6=Ts(Fn),c6=()=>{const[i,e]=J.useState({}),[t,r]=J.useState(null),a=c=>{const{name:m,value:p}=c.target;e(g=>({...g,[m]:p.toLocaleUpperCase()}))},l=async c=>{c.preventDefault();try{await Xf(zn(u6,"machines"),i),r({type:"success",title:"Maquina creada",message:"Maquina creada correctamente.",onClose:()=>r(null)}),e({})}catch(m){console.error("Error al crear la máquina:",m),r({type:"error",title:"Error al crear maquina",message:"Ha ocurrido un error al crear el usuario. Por favor, inténtalo de nuevo.",onClose:()=>r(null)})}};return A.jsx("div",{className:"roun min-h-screen flex items-center justify-center rounded-2xl backgroundForm",children:A.jsxs("form",{onSubmit:l,className:"bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md text-white space-y-6",children:[A.jsx("h2",{className:"text-2xl font-semibold text-center",children:"Crear máquina"}),l6.map(c=>A.jsxs("div",{children:[A.jsx("label",{htmlFor:c.name,className:"block text-sm font-medium mb-1",children:c.label}),A.jsx("input",{type:c.type,id:c.name,name:c.name,required:c.required,placeholder:c.placeholder,value:i[c.name]||"",onChange:a,className:"w-full px-4 py-2 rounded border bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"})]},c.name)),A.jsx("button",{type:"submit",className:"cursor-pointer w-full py-2 rounded bg-blue-600 hover:bg-blue-800 transition-colors duration-300 text-white font-semibold",children:"Crear máquina"}),t&&A.jsx(tI,{type:t.type,title:t.title,message:t.message,onClose:t.onClose})]})})},h6=Ts(Fn),f6=()=>{const[i,e]=J.useState({}),[t,r]=J.useState(null),a=c=>{const{name:m,value:p}=c.target;e(g=>({...g,[m]:p.toLocaleUpperCase()}))},l=async c=>{c.preventDefault();try{await Xf(zn(h6,"operators"),i),r({type:"success",title:"Usuario creado",message:"El usuario se ha creado correctamente.",onClose:()=>r(null)}),e({})}catch(m){console.error("Error al crear el usuario:",m),r({type:"error",title:"Error al crear usuario",message:"Ha ocurrido un error al crear el usuario. Por favor, inténtalo de nuevo.",onClose:()=>r(null)})}};return A.jsx(A.Fragment,{children:A.jsx("div",{className:"min-h-screen flex items-center justify-center rounded-2xl backgroundForm",children:A.jsxs("form",{onSubmit:l,className:"p-8 rounded-lg shadow-md w-full max-w-md text-white space-y-4",children:[A.jsx("h2",{className:"text-2xl font-semibold text-center",children:"Crear usurio"}),o6.map(c=>A.jsxs("div",{children:[A.jsx("label",{htmlFor:c.name,className:"block text-sm font-medium mb-1",children:c.label}),A.jsx("input",{type:c.type,id:c.name,name:c.name,placeholder:c.placeholder,value:i[c.name]||"",onChange:a,className:"w-full p-2 rounded border border-gray-600 bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500",required:c.required})]},c.name)),A.jsx("button",{type:"submit",className:"cursor-pointer w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded transition-colors",children:"Crear usuario"}),t&&A.jsx(tI,{type:t.type,title:t.title,message:t.message,onClose:t.onClose})]})})})},d6=Ts(Fn),m6=()=>{const[i,e]=J.useState([]);return J.useEffect(()=>{(async()=>{try{const a=(await ds(zn(d6,"registro_horometros"))).docs.map(l=>{const c=l.data();return{id:l.id,...c}});e(a)}catch(r){console.error("Error fetching registros:",r)}})()},[]),A.jsxs("div",{className:"overflow-x-auto p-4",children:[A.jsx("h2",{className:"text-xl font-bold mb-4",children:"Listado de Registros"}),A.jsxs("table",{className:"min-w-full border border-gray-300",children:[A.jsx("thead",{children:A.jsxs("tr",{className:"bg-gray-200",children:[A.jsx("th",{className:"border border-gray-300 px-2 py-1",children:"ID"}),A.jsx("th",{className:"border border-gray-300 px-2 py-1",children:"Operador"}),A.jsx("th",{className:"border border-gray-300 px-2 py-1",children:"Fecha"}),A.jsx("th",{className:"border border-gray-300 px-2 py-1",children:"Paradas Mayores"}),A.jsx("th",{className:"border border-gray-300 px-2 py-1",children:"Máquinas"})]})}),A.jsx("tbody",{children:i.length===0?A.jsx("tr",{children:A.jsx("td",{colSpan:5,className:"text-center p-4",children:"No hay registros."})}):i.map(t=>A.jsxs("tr",{className:"border-b border-gray-200",children:[A.jsx("td",{className:"border border-gray-300 px-2 py-1",children:t.id}),A.jsx("td",{className:"border border-gray-300 px-2 py-1",children:t.operatorCode}),A.jsx("td",{className:"border border-gray-300 px-2 py-1",children:t.fecha}),A.jsx("td",{className:"border border-gray-300 px-2 py-1",children:t.paradasMayores}),A.jsx("td",{className:"border border-gray-300 px-2 py-1",children:t.machines&&t.machines.length>0?t.machines.map((r,a)=>A.jsxs("div",{className:"mb-2 border p-2 rounded bg-gray-50",children:[A.jsxs("p",{children:[A.jsx("strong",{children:"Abreviatura:"})," ",r.machine]}),r.standard&&A.jsxs("div",{className:"text-sm mb-1",children:[A.jsxs("p",{children:[A.jsx("strong",{children:"Nombre máquina:"})," ",r.standard.machineName]}),A.jsxs("p",{children:[A.jsx("strong",{children:"Fecha:"})," ",r.standard.date]}),A.jsxs("p",{children:[A.jsx("strong",{children:"Eficiencia:"})," ",r.standard.efficiency]})]}),A.jsxs("p",{children:[A.jsx("strong",{children:"Horas asignadas:"})," ",r.horasAsignadas]}),A.jsxs("p",{children:[A.jsx("strong",{children:"Horómetro inicial:"})," ",r.horometroInicial]}),A.jsxs("p",{children:[A.jsx("strong",{children:"Horómetro final:"})," ",r.horometroFinal]}),A.jsxs("p",{children:[A.jsx("strong",{children:"Observaciones:"})," ",r.observaciones]})]},a)):A.jsx("em",{children:"No hay máquinas"})})]},t.id))})]})]})},p6=Ts(Fn),g6=()=>{const[i,e]=J.useState([]),[t,r]=J.useState(""),[a,l]=J.useState(""),[c,m]=J.useState(""),[p,g]=J.useState("");J.useEffect(()=>{(async()=>{try{const F=(await ds(zn(p6,"registro_horometros"))).docs.map(Y=>{const U=Y.data();return{id:Y.id,fecha:U.fecha,operatorCode:U.operatorCode,machines:U.machines,reference:U.reference,majorStops:U.majorStops,totalHours:U.totalHours,editadoPor:U.editadoPor,camposModificados:U.camposModificados,fechaUltimaEdicion:U.fechaUltimaEdicion,originalMachines:U.originalMachines}});e(F)}catch(V){console.log(V)}})()},[]);const v=()=>i.filter(S=>{const V=new Date(S.fecha),F=t?new Date(t):null,Y=a?new Date(a):null,U=(!F||V>=F)&&(!Y||V<=Y),te=c?S.operatorCode.toLowerCase().includes(c.toLowerCase()):!0,ne=p?S.machines.some($=>$.machine.toLowerCase().includes(p.toLowerCase())):!0;return U&&te&&ne}),E=()=>{const S=v(),V=["ID","Fecha","Operador","Máquina","Horómetro Inicial","Horómetro Final","Observaciones","Horas Asignadas","editadoPor"],F=S.flatMap($=>$.machines.map(oe=>[$.id,$.fecha,$.operatorCode,oe.machine,oe.horometroInicial,oe.horometroFinal,oe.observaciones,$.machines.reduce((le,me)=>le+Number(me.horasAsignadas||0),0),$.editadoPor??""])),Y=[V.join(","),...F.map($=>$.join(","))].join(`
`),U=new Blob([Y],{type:"text/csv;charset=utf-8;"}),te=URL.createObjectURL(U),ne=document.createElement("a");ne.href=te,ne.setAttribute("download",`registros_${t||"todos"}_${a||"hoy"}.csv`),document.body.appendChild(ne),ne.click(),document.body.removeChild(ne)};return A.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto backgroundForm text-white",children:[A.jsx("h2",{className:"text-2xl font-semibold mb-4 text-center",children:"Exportar registros por rango de fechas"}),A.jsxs("div",{className:"flex flex-col md:flex-row gap-4 mb-4",children:[A.jsxs("div",{className:"flex-1",children:[A.jsx("label",{className:"block mb-1 font-medium text-white",children:"Fecha inicial"}),A.jsx("input",{type:"date",className:"w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400",value:t,onChange:S=>r(S.target.value)})]}),A.jsxs("div",{className:"flex-1",children:[A.jsx("label",{className:"block mb-1 font-medium text-white",children:"Fecha final"}),A.jsx("input",{type:"date",className:"w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400",value:a,onChange:S=>l(S.target.value)})]})]}),A.jsxs("div",{className:"flex flex-col md:flex-row gap-4 mb-4",children:[A.jsxs("div",{className:"flex-1",children:[A.jsx("label",{className:"block mb-1 font-medium text-white",children:"Operario"}),A.jsx("input",{type:"text",placeholder:"Operario",value:c,onChange:S=>m(S.target.value),className:"w-full border rounded px-3 py-2"})]}),A.jsxs("div",{className:"flex-1",children:[A.jsx("label",{className:"block mb-1 font-medium text-white",children:"Máquina"}),A.jsx("input",{type:"text",placeholder:"Máquina",value:p,onChange:S=>g(S.target.value),className:"w-full border rounded px-3 py-2"})]})]}),A.jsx("button",{className:"bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow",onClick:E,children:"Exportar CSV"}),A.jsxs("div",{className:"mt-6 max-h-64 overflow-y-auto border border-gray-200 rounded p-4",children:[A.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Registros filtrados:"}),v().length===0?A.jsx("p",{className:"text-gray-500",children:"No hay registros en ese rango de fechas."}):A.jsx("ul",{className:"list-disc list-inside space-y-1 text-white",children:v().map(S=>A.jsxs("li",{className:"text-sm",children:[A.jsx("strong",{children:S.fecha})," - ",S.operatorCode]},S.id))})]})]})};function y6(){return A.jsxs(A.Fragment,{children:[A.jsx("div",{children:A.jsx(g6,{})}),A.jsx(m6,{})]})}const Lp=Ts(Fn),v6=()=>{const[i,e]=J.useState([]),[t,r]=J.useState(""),[,a]=J.useState([]),[l,c]=J.useState([]),[m,p]=J.useState(""),[g,v]=J.useState(""),[E,S]=J.useState({}),[V,F]=J.useState([]);J.useEffect(()=>{(async()=>{try{const le=(await ds(zn(Lp,"assignments"))).docs.map(me=>({id:me.id,...me.data()}));e(le)}catch(oe){console.error(oe)}})()},[]);const Y=async()=>{try{const $=await ds(zn(Lp,"machines")),oe={};$.forEach(le=>{const me=le.data();oe[me.abbreviation]=me}),S(oe)}catch($){console.error("Error fetching standards:",$)}};J.useEffect(()=>{Y()},[]);const U=$=>{r($);const oe=i.find(le=>le.operator===$);oe?(a(oe.machines),c(oe.machines.map(le=>({machine:le,horometroInicial:"",horometroFinal:"",horasAsignadas:"",observaciones:""})))):(a([]),c([]))},te=()=>{if(!m||!t||l.length===0){alert("Por favor completa todos los campos antes de agregar.");return}const $={id:Date.now().toString(),fecha:m,operatorCode:t,machines:[...l],paradasMayores:g};F([...V,$]),p(""),r(""),a([]),c([]),v("")},ne=async $=>{const oe=V.find(me=>me.id===$);if(!oe)return;const le={operatorCode:oe.operatorCode,fecha:oe.fecha,paradasMayores:oe.paradasMayores,machines:oe.machines,timestamp:new Date().toISOString()};try{await Xf(zn(Lp,"registro_horometros"),le),alert("Registro enviado correctamente ✅"),F(V.filter(me=>me.id!==$))}catch(me){console.error("Error al guardar en Firestore:",me),alert("Error al guardar los datos ❌")}};return A.jsxs("div",{className:"flex p-5 w-full justify-center bg-gray-200 rounded-2xl backgroundForm flex-col items-center",children:[A.jsxs("div",{className:"mb-4 w-full max-w-2xl",children:[A.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",children:"Buscar código de operario"}),A.jsx("input",{type:"number",value:t,onChange:$=>U($.target.value),placeholder:"Código de operario",className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4 mb-2"}),A.jsx("button",{onClick:te,className:"w-full py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition",children:"Agregar registro"})]}),A.jsxs("form",{onSubmit:$=>{$.preventDefault(),te()},className:"w-full max-w-2xl",children:[A.jsx("div",{className:"flex flex-wrap -mx-3 mb-6",children:A.jsxs("div",{className:"w-full md:w-1/2 px-3 mb-6 md:mb-0",children:[A.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",children:"Fecha"}),A.jsx("input",{type:"date",value:m,onChange:$=>p($.target.value),className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4",required:!0})]})}),V.map($=>A.jsxs("div",{className:"border border-amber-400 p-3 mb-4 bg-white rounded",children:[A.jsxs("div",{className:"flex justify-between items-center mb-2",children:[A.jsxs("div",{children:[A.jsxs("p",{className:"font-semibold mb-1",children:["Fecha: ",$.fecha]}),A.jsxs("p",{className:"font-semibold mb-1",children:["Código: ",$.operatorCode]}),A.jsxs("p",{className:"text-sm mb-2",children:["Paradas mayores: ",$.paradasMayores]})]}),A.jsx("button",{onClick:()=>ne($.id),className:"bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700",children:"Enviar"})]}),$.machines.map((oe,le)=>{var me,M,R;return A.jsxs("div",{className:"border p-2 mb-2 rounded bg-gray-50",children:[A.jsx("h4",{className:"font-semibold mb-1",children:oe.machine}),E[oe.machine]&&A.jsxs("div",{className:"mb-2 text-sm border p-2 rounded bg-gray-100",children:[A.jsxs("p",{children:[A.jsx("strong",{children:"Abreviatura:"})," ",E[oe.machine].abbreviation]}),A.jsxs("p",{children:[A.jsx("strong",{children:"Nombre máquina:"})," ",E[oe.machine].machineName]}),A.jsxs("p",{children:[A.jsx("strong",{children:"Fecha estándar:"})," ",E[oe.machine].date]}),A.jsxs("p",{children:[A.jsx("strong",{children:"Eficiencia:"})," ",E[oe.machine].efficiency]})]}),A.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[A.jsxs("div",{children:[A.jsx("label",{className:"block mb-1",children:"Horas asignadas"}),A.jsx("input",{type:"number",min:0,value:((R=(M=(me=V.find(I=>I.id===$.id))==null?void 0:me.machines)==null?void 0:M[le])==null?void 0:R.horasAsignadas)??"",onChange:I=>{const N=I.target.value,O=V.map(P=>P.id!==$.id?P:{...P,machines:P.machines.map((C,ze)=>ze!==le?C:{...C,horasAsignadas:N})});F(O)},className:"w-full border border-gray-300 rounded px-2 py-1"})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block mb-1",children:"Horómetro inicial"}),A.jsx("input",{type:"number",placeholder:"00000000",value:oe.horometroInicial,onChange:I=>{const N=I.target.value,O=V.map(P=>P.id!==$.id?P:{...P,machines:P.machines.map((C,ze)=>ze!==le?C:{...C,horometroInicial:N})});F(O)},className:"w-full border border-gray-300 rounded px-2 py-1"})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block mb-1",children:"Horómetro final"}),A.jsx("input",{type:"number",placeholder:"00000000",value:oe.horometroFinal,onChange:I=>{const N=I.target.value,O=V.map(P=>P.id!==$.id?P:{...P,machines:P.machines.map((C,ze)=>ze!==le?C:{...C,horometroFinal:N})});F(O)},className:"w-full border border-gray-300 rounded px-2 py-1"})]}),A.jsxs("div",{className:"col-span-2",children:[A.jsx("label",{className:"block mb-1",children:"Observaciones"}),A.jsx("textarea",{placeholder:"...",value:oe.observaciones,onChange:I=>{const N=I.target.value,O=V.map(P=>P.id!==$.id?P:{...P,machines:P.machines.map((C,ze)=>ze!==le?C:{...C,observaciones:N})});F(O)},className:"w-full border border-gray-300 rounded px-2 py-1"})]})]})]},le)})]},$.id))]})]})},_6=()=>A.jsx(A.Fragment,{children:A.jsx(v6,{})});function b6(){return A.jsx(Vk,{children:A.jsx(LC,{children:A.jsxs(NC,{children:[A.jsx(tn,{path:"/",element:A.jsx(Mk,{})}),A.jsxs(tn,{path:"/",element:A.jsx(i6,{children:A.jsx(f3,{})}),children:[A.jsx(tn,{path:"home",element:A.jsx(rT,{})}),A.jsx(tn,{path:"supervisor",element:A.jsx(sT,{})}),A.jsx(tn,{path:"eficencia",element:A.jsx(Ip,{})}),A.jsxs(tn,{path:"picado",element:A.jsx(zk,{}),children:[A.jsx(tn,{path:"f1315",element:A.jsx(_6,{})}),A.jsx(tn,{path:"eficence",element:A.jsx(Ip,{})})]}),A.jsx(tn,{path:"/supervisor",element:A.jsx(sT,{})}),A.jsxs(tn,{path:"/configurations",element:A.jsx(a6,{}),children:[A.jsx(tn,{path:"createMachine",element:A.jsx(c6,{})}),A.jsx(tn,{path:"createUser",element:A.jsx(f6,{name:"username",label:"Username",type:"text",required:!0,placeholder:"Enter username"})}),A.jsx(tn,{path:"editingRegister",element:A.jsx(Ip,{editable:!0})})]}),A.jsx(tn,{path:"data",element:A.jsx(y6,{})}),A.jsx(tn,{path:"*",element:A.jsx(rT,{})})]})]})})})}VR.createRoot(document.getElementById("root")).render(A.jsx(J.StrictMode,{children:A.jsx(b6,{})}));
