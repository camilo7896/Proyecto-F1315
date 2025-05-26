function eR(i,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in i)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(i,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function VT(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var qm={exports:{}},Zl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0;function tR(){if(Y0)return Zl;Y0=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,a,l){var h=null;if(l!==void 0&&(h=""+l),a.key!==void 0&&(h=""+a.key),"key"in a){l={};for(var m in a)m!=="key"&&(l[m]=a[m])}else l=a;return a=l.ref,{$$typeof:i,type:r,key:h,ref:a!==void 0?a:null,props:l}}return Zl.Fragment=e,Zl.jsx=t,Zl.jsxs=t,Zl}var Q0;function nR(){return Q0||(Q0=1,qm.exports=tR()),qm.exports}var I=nR(),Gm={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0;function iR(){if(X0)return xe;X0=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),T=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=T&&N[T]||N["@@iterator"],typeof N=="function"?N:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,W={};function F(N,J,le){this.props=N,this.context=J,this.refs=W,this.updater=le||j}F.prototype.isReactComponent={},F.prototype.setState=function(N,J){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,J,"setState")},F.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function ee(){}ee.prototype=F.prototype;function ie(N,J,le){this.props=N,this.context=J,this.refs=W,this.updater=le||j}var ne=ie.prototype=new ee;ne.constructor=ie,G(ne,F.prototype),ne.isPureReactComponent=!0;var fe=Array.isArray,ce={H:null,A:null,T:null,S:null,V:null},Ce=Object.prototype.hasOwnProperty;function D(N,J,le,re,ge,De){return le=De.ref,{$$typeof:i,type:N,key:J,ref:le!==void 0?le:null,props:De}}function w(N,J){return D(N.type,J,void 0,void 0,void 0,N.props)}function C(N){return typeof N=="object"&&N!==null&&N.$$typeof===i}function P(N){var J={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(le){return J[le]})}var k=/\/+/g;function V(N,J){return typeof N=="object"&&N!==null&&N.key!=null?P(""+N.key):J.toString(36)}function x(){}function Bt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(x,x):(N.status="pending",N.then(function(J){N.status==="pending"&&(N.status="fulfilled",N.value=J)},function(J){N.status==="pending"&&(N.status="rejected",N.reason=J)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ct(N,J,le,re,ge){var De=typeof N;(De==="undefined"||De==="boolean")&&(N=null);var Se=!1;if(N===null)Se=!0;else switch(De){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(N.$$typeof){case i:case e:Se=!0;break;case b:return Se=N._init,ct(Se(N._payload),J,le,re,ge)}}if(Se)return ge=ge(N),Se=re===""?"."+V(N,0):re,fe(ge)?(le="",Se!=null&&(le=Se.replace(k,"$&/")+"/"),ct(ge,J,le,"",function(Qn){return Qn})):ge!=null&&(C(ge)&&(ge=w(ge,le+(ge.key==null||N&&N.key===ge.key?"":(""+ge.key).replace(k,"$&/")+"/")+Se)),J.push(ge)),1;Se=0;var kt=re===""?".":re+":";if(fe(N))for(var it=0;it<N.length;it++)re=N[it],De=kt+V(re,it),Se+=ct(re,J,le,De,ge);else if(it=S(N),typeof it=="function")for(N=it.call(N),it=0;!(re=N.next()).done;)re=re.value,De=kt+V(re,it++),Se+=ct(re,J,le,De,ge);else if(De==="object"){if(typeof N.then=="function")return ct(Bt(N),J,le,re,ge);throw J=String(N),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Se}function $(N,J,le){if(N==null)return N;var re=[],ge=0;return ct(N,re,"","",function(De){return J.call(le,De,ge++)}),re}function oe(N){if(N._status===-1){var J=N._result;J=J(),J.then(function(le){(N._status===0||N._status===-1)&&(N._status=1,N._result=le)},function(le){(N._status===0||N._status===-1)&&(N._status=2,N._result=le)}),N._status===-1&&(N._status=0,N._result=J)}if(N._status===1)return N._result.default;throw N._result}var pe=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function qe(){}return xe.Children={map:$,forEach:function(N,J,le){$(N,function(){J.apply(this,arguments)},le)},count:function(N){var J=0;return $(N,function(){J++}),J},toArray:function(N){return $(N,function(J){return J})||[]},only:function(N){if(!C(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},xe.Component=F,xe.Fragment=t,xe.Profiler=a,xe.PureComponent=ie,xe.StrictMode=r,xe.Suspense=p,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ce,xe.__COMPILER_RUNTIME={__proto__:null,c:function(N){return ce.H.useMemoCache(N)}},xe.cache=function(N){return function(){return N.apply(null,arguments)}},xe.cloneElement=function(N,J,le){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var re=G({},N.props),ge=N.key,De=void 0;if(J!=null)for(Se in J.ref!==void 0&&(De=void 0),J.key!==void 0&&(ge=""+J.key),J)!Ce.call(J,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&J.ref===void 0||(re[Se]=J[Se]);var Se=arguments.length-2;if(Se===1)re.children=le;else if(1<Se){for(var kt=Array(Se),it=0;it<Se;it++)kt[it]=arguments[it+2];re.children=kt}return D(N.type,ge,void 0,void 0,De,re)},xe.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},xe.createElement=function(N,J,le){var re,ge={},De=null;if(J!=null)for(re in J.key!==void 0&&(De=""+J.key),J)Ce.call(J,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(ge[re]=J[re]);var Se=arguments.length-2;if(Se===1)ge.children=le;else if(1<Se){for(var kt=Array(Se),it=0;it<Se;it++)kt[it]=arguments[it+2];ge.children=kt}if(N&&N.defaultProps)for(re in Se=N.defaultProps,Se)ge[re]===void 0&&(ge[re]=Se[re]);return D(N,De,void 0,void 0,null,ge)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(N){return{$$typeof:m,render:N}},xe.isValidElement=C,xe.lazy=function(N){return{$$typeof:b,_payload:{_status:-1,_result:N},_init:oe}},xe.memo=function(N,J){return{$$typeof:g,type:N,compare:J===void 0?null:J}},xe.startTransition=function(N){var J=ce.T,le={};ce.T=le;try{var re=N(),ge=ce.S;ge!==null&&ge(le,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then(qe,pe)}catch(De){pe(De)}finally{ce.T=J}},xe.unstable_useCacheRefresh=function(){return ce.H.useCacheRefresh()},xe.use=function(N){return ce.H.use(N)},xe.useActionState=function(N,J,le){return ce.H.useActionState(N,J,le)},xe.useCallback=function(N,J){return ce.H.useCallback(N,J)},xe.useContext=function(N){return ce.H.useContext(N)},xe.useDebugValue=function(){},xe.useDeferredValue=function(N,J){return ce.H.useDeferredValue(N,J)},xe.useEffect=function(N,J,le){var re=ce.H;if(typeof le=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return re.useEffect(N,J)},xe.useId=function(){return ce.H.useId()},xe.useImperativeHandle=function(N,J,le){return ce.H.useImperativeHandle(N,J,le)},xe.useInsertionEffect=function(N,J){return ce.H.useInsertionEffect(N,J)},xe.useLayoutEffect=function(N,J){return ce.H.useLayoutEffect(N,J)},xe.useMemo=function(N,J){return ce.H.useMemo(N,J)},xe.useOptimistic=function(N,J){return ce.H.useOptimistic(N,J)},xe.useReducer=function(N,J,le){return ce.H.useReducer(N,J,le)},xe.useRef=function(N){return ce.H.useRef(N)},xe.useState=function(N){return ce.H.useState(N)},xe.useSyncExternalStore=function(N,J,le){return ce.H.useSyncExternalStore(N,J,le)},xe.useTransition=function(){return ce.H.useTransition()},xe.version="19.1.0",xe}var W0;function _g(){return W0||(W0=1,Gm.exports=iR()),Gm.exports}var ae=_g();const pf=VT(ae),rR=eR({__proto__:null,default:pf},[ae]);var $m={exports:{}},eu={},Km={exports:{}},Ym={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function sR(){return J0||(J0=1,function(i){function e($,oe){var pe=$.length;$.push(oe);e:for(;0<pe;){var qe=pe-1>>>1,N=$[qe];if(0<a(N,oe))$[qe]=oe,$[pe]=N,pe=qe;else break e}}function t($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var oe=$[0],pe=$.pop();if(pe!==oe){$[0]=pe;e:for(var qe=0,N=$.length,J=N>>>1;qe<J;){var le=2*(qe+1)-1,re=$[le],ge=le+1,De=$[ge];if(0>a(re,pe))ge<N&&0>a(De,re)?($[qe]=De,$[ge]=pe,qe=ge):($[qe]=re,$[le]=pe,qe=le);else if(ge<N&&0>a(De,pe))$[qe]=De,$[ge]=pe,qe=ge;else break e}}return oe}function a($,oe){var pe=$.sortIndex-oe.sortIndex;return pe!==0?pe:$.id-oe.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var p=[],g=[],b=1,T=null,S=3,j=!1,G=!1,W=!1,F=!1,ee=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;function fe($){for(var oe=t(g);oe!==null;){if(oe.callback===null)r(g);else if(oe.startTime<=$)r(g),oe.sortIndex=oe.expirationTime,e(p,oe);else break;oe=t(g)}}function ce($){if(W=!1,fe($),!G)if(t(p)!==null)G=!0,Ce||(Ce=!0,V());else{var oe=t(g);oe!==null&&ct(ce,oe.startTime-$)}}var Ce=!1,D=-1,w=5,C=-1;function P(){return F?!0:!(i.unstable_now()-C<w)}function k(){if(F=!1,Ce){var $=i.unstable_now();C=$;var oe=!0;try{e:{G=!1,W&&(W=!1,ie(D),D=-1),j=!0;var pe=S;try{t:{for(fe($),T=t(p);T!==null&&!(T.expirationTime>$&&P());){var qe=T.callback;if(typeof qe=="function"){T.callback=null,S=T.priorityLevel;var N=qe(T.expirationTime<=$);if($=i.unstable_now(),typeof N=="function"){T.callback=N,fe($),oe=!0;break t}T===t(p)&&r(p),fe($)}else r(p);T=t(p)}if(T!==null)oe=!0;else{var J=t(g);J!==null&&ct(ce,J.startTime-$),oe=!1}}break e}finally{T=null,S=pe,j=!1}oe=void 0}}finally{oe?V():Ce=!1}}}var V;if(typeof ne=="function")V=function(){ne(k)};else if(typeof MessageChannel<"u"){var x=new MessageChannel,Bt=x.port2;x.port1.onmessage=k,V=function(){Bt.postMessage(null)}}else V=function(){ee(k,0)};function ct($,oe){D=ee(function(){$(i.unstable_now())},oe)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function($){$.callback=null},i.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<$?Math.floor(1e3/$):5},i.unstable_getCurrentPriorityLevel=function(){return S},i.unstable_next=function($){switch(S){case 1:case 2:case 3:var oe=3;break;default:oe=S}var pe=S;S=oe;try{return $()}finally{S=pe}},i.unstable_requestPaint=function(){F=!0},i.unstable_runWithPriority=function($,oe){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var pe=S;S=$;try{return oe()}finally{S=pe}},i.unstable_scheduleCallback=function($,oe,pe){var qe=i.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?qe+pe:qe):pe=qe,$){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=pe+N,$={id:b++,callback:oe,priorityLevel:$,startTime:pe,expirationTime:N,sortIndex:-1},pe>qe?($.sortIndex=pe,e(g,$),t(p)===null&&$===t(g)&&(W?(ie(D),D=-1):W=!0,ct(ce,pe-qe))):($.sortIndex=N,e(p,$),G||j||(G=!0,Ce||(Ce=!0,V()))),$},i.unstable_shouldYield=P,i.unstable_wrapCallback=function($){var oe=S;return function(){var pe=S;S=oe;try{return $.apply(this,arguments)}finally{S=pe}}}}(Ym)),Ym}var Z0;function aR(){return Z0||(Z0=1,Km.exports=sR()),Km.exports}var Qm={exports:{}},Jt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eb;function oR(){if(eb)return Jt;eb=1;var i=_g();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)g+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var r={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,b){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:b}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Jt.createPortal=function(p,g){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,b)},Jt.flushSync=function(p){var g=h.T,b=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=g,r.p=b,r.d.f()}},Jt.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(p,g))},Jt.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Jt.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var b=g.as,T=m(b,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,j=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;b==="style"?r.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:S,fetchPriority:j}):b==="script"&&r.d.X(p,{crossOrigin:T,integrity:S,fetchPriority:j,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Jt.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var b=m(g.as,g.crossOrigin);r.d.M(p,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(p)},Jt.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var b=g.as,T=m(b,g.crossOrigin);r.d.L(p,b,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Jt.preloadModule=function(p,g){if(typeof p=="string")if(g){var b=m(g.as,g.crossOrigin);r.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(p)},Jt.requestFormReset=function(p){r.d.r(p)},Jt.unstable_batchedUpdates=function(p,g){return p(g)},Jt.useFormState=function(p,g,b){return h.H.useFormState(p,g,b)},Jt.useFormStatus=function(){return h.H.useHostTransitionStatus()},Jt.version="19.1.0",Jt}var tb;function LT(){if(tb)return Qm.exports;tb=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Qm.exports=oR(),Qm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nb;function lR(){if(nb)return eu;nb=1;var i=aR(),e=_g(),t=LT();function r(n){var s="https://react.dev/errors/"+n;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var s=n,o=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(o=s.return),n=s.return;while(n)}return s.tag===3?o:null}function h(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function m(n){if(l(n)!==n)throw Error(r(188))}function p(n){var s=n.alternate;if(!s){if(s=l(n),s===null)throw Error(r(188));return s!==n?null:n}for(var o=n,u=s;;){var f=o.return;if(f===null)break;var d=f.alternate;if(d===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===o)return m(f),n;if(d===u)return m(f),s;d=d.sibling}throw Error(r(188))}if(o.return!==u.return)o=f,u=d;else{for(var _=!1,E=f.child;E;){if(E===o){_=!0,o=f,u=d;break}if(E===u){_=!0,u=f,o=d;break}E=E.sibling}if(!_){for(E=d.child;E;){if(E===o){_=!0,o=d,u=f;break}if(E===u){_=!0,u=d,o=f;break}E=E.sibling}if(!_)throw Error(r(189))}}if(o.alternate!==u)throw Error(r(190))}if(o.tag!==3)throw Error(r(188));return o.stateNode.current===o?n:s}function g(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n;for(n=n.child;n!==null;){if(s=g(n),s!==null)return s;n=n.sibling}return null}var b=Object.assign,T=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),ee=Symbol.for("react.provider"),ie=Symbol.for("react.consumer"),ne=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),Ce=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),P=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function V(n){return n===null||typeof n!="object"?null:(n=k&&n[k]||n["@@iterator"],typeof n=="function"?n:null)}var x=Symbol.for("react.client.reference");function Bt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===x?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case G:return"Fragment";case F:return"Profiler";case W:return"StrictMode";case ce:return"Suspense";case Ce:return"SuspenseList";case C:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case j:return"Portal";case ne:return(n.displayName||"Context")+".Provider";case ie:return(n._context.displayName||"Context")+".Consumer";case fe:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case D:return s=n.displayName||null,s!==null?s:Bt(n.type)||"Memo";case w:s=n._payload,n=n._init;try{return Bt(n(s))}catch{}}return null}var ct=Array.isArray,$=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe={pending:!1,data:null,method:null,action:null},qe=[],N=-1;function J(n){return{current:n}}function le(n){0>N||(n.current=qe[N],qe[N]=null,N--)}function re(n,s){N++,qe[N]=n.current,n.current=s}var ge=J(null),De=J(null),Se=J(null),kt=J(null);function it(n,s){switch(re(Se,s),re(De,n),re(ge,null),s.nodeType){case 9:case 11:n=(n=s.documentElement)&&(n=n.namespaceURI)?T0(n):0;break;default:if(n=s.tagName,s=s.namespaceURI)s=T0(s),n=A0(s,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}le(ge),re(ge,n)}function Qn(){le(ge),le(De),le(Se)}function fr(n){n.memoizedState!==null&&re(kt,n);var s=ge.current,o=A0(s,n.type);s!==o&&(re(De,n),re(ge,o))}function Ii(n){De.current===n&&(le(ge),le(De)),kt.current===n&&(le(kt),Yl._currentValue=pe)}var ps=Object.prototype.hasOwnProperty,gs=i.unstable_scheduleCallback,ys=i.unstable_cancelCallback,Go=i.unstable_shouldYield,$u=i.unstable_requestPaint,Sn=i.unstable_now,qf=i.unstable_getCurrentPriorityLevel,$o=i.unstable_ImmediatePriority,pa=i.unstable_UserBlockingPriority,vs=i.unstable_NormalPriority,Gf=i.unstable_LowPriority,ga=i.unstable_IdlePriority,Ko=i.log,Ku=i.unstable_setDisableYieldValue,ht=null,Ye=null;function mn(n){if(typeof Ko=="function"&&Ku(n),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(ht,n)}catch{}}var Xt=Math.clz32?Math.clz32:_s,Yu=Math.log,$f=Math.LN2;function _s(n){return n>>>=0,n===0?32:31-(Yu(n)/$f|0)|0}var bs=256,Es=4194304;function zn(n){var s=n&42;if(s!==0)return s;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ya(n,s,o){var u=n.pendingLanes;if(u===0)return 0;var f=0,d=n.suspendedLanes,_=n.pingedLanes;n=n.warmLanes;var E=u&134217727;return E!==0?(u=E&~d,u!==0?f=zn(u):(_&=E,_!==0?f=zn(_):o||(o=E&~n,o!==0&&(f=zn(o))))):(E=u&~d,E!==0?f=zn(E):_!==0?f=zn(_):o||(o=u&~n,o!==0&&(f=zn(o)))),f===0?0:s!==0&&s!==f&&(s&d)===0&&(d=f&-f,o=s&-s,d>=o||d===32&&(o&4194048)!==0)?s:f}function Ts(n,s){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&s)===0}function Yo(n,s){switch(n){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qo(){var n=bs;return bs<<=1,(bs&4194048)===0&&(bs=256),n}function Xo(){var n=Es;return Es<<=1,(Es&62914560)===0&&(Es=4194304),n}function Ri(n){for(var s=[],o=0;31>o;o++)s.push(n);return s}function Ci(n,s){n.pendingLanes|=s,s!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Wo(n,s,o,u,f,d){var _=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var E=n.entanglements,R=n.expirationTimes,z=n.hiddenUpdates;for(o=_&~o;0<o;){var K=31-Xt(o),Q=1<<K;E[K]=0,R[K]=-1;var B=z[K];if(B!==null)for(z[K]=null,K=0;K<B.length;K++){var H=B[K];H!==null&&(H.lane&=-536870913)}o&=~Q}u!==0&&Xn(n,u,0),d!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=d&~(_&~s))}function Xn(n,s,o){n.pendingLanes|=s,n.suspendedLanes&=~s;var u=31-Xt(s);n.entangledLanes|=s,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194090}function Jo(n,s){var o=n.entangledLanes|=s;for(n=n.entanglements;o;){var u=31-Xt(o),f=1<<u;f&s|n[u]&s&&(n[u]|=s),o&=~f}}function dr(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function va(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function mr(){var n=oe.p;return n!==0?n:(n=window.event,n===void 0?32:F0(n.type))}function Qu(n,s){var o=oe.p;try{return oe.p=n,s()}finally{oe.p=o}}var at=Math.random().toString(36).slice(2),It="__reactFiber$"+at,bt="__reactProps$"+at,wn="__reactContainer$"+at,Zo="__reactEvents$"+at,Kf="__reactListeners$"+at,pr="__reactHandles$"+at,Xu="__reactResources$"+at,As="__reactMarker$"+at;function gr(n){delete n[It],delete n[bt],delete n[Zo],delete n[Kf],delete n[pr]}function xi(n){var s=n[It];if(s)return s;for(var o=n.parentNode;o;){if(s=o[wn]||o[It]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(n=R0(n);n!==null;){if(o=n[It])return o;n=R0(n)}return s}n=o,o=n.parentNode}return null}function Wn(n){if(n=n[It]||n[wn]){var s=n.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return n}return null}function Jn(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n.stateNode;throw Error(r(33))}function sn(n){var s=n[Xu];return s||(s=n[Xu]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function pt(n){n[As]=!0}var el=new Set,_a={};function Bn(n,s){Ni(n,s),Ni(n+"Capture",s)}function Ni(n,s){for(_a[n]=s,n=0;n<s.length;n++)el.add(s[n])}var Wu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ju={},Ss={};function Zu(n){return ps.call(Ss,n)?!0:ps.call(Ju,n)?!1:Wu.test(n)?Ss[n]=!0:(Ju[n]=!0,!1)}function yr(n,s,o){if(Zu(s))if(o===null)n.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(s);return}}n.setAttribute(s,""+o)}}function Zn(n,s,o){if(o===null)n.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttribute(s,""+o)}}function Ft(n,s,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(s,o,""+u)}}var ws,ec;function Oi(n){if(ws===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);ws=s&&s[1]||"",ec=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ws+n+ec}var ba=!1;function Ea(n,s){if(!n||ba)return"";ba=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(H){var B=H}Reflect.construct(n,[],Q)}else{try{Q.call()}catch(H){B=H}n.call(Q.prototype)}}else{try{throw Error()}catch(H){B=H}(Q=n())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(H){if(H&&B&&typeof H.stack=="string")return[H.stack,B.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=u.DetermineComponentFrameRoot(),_=d[0],E=d[1];if(_&&E){var R=_.split(`
`),z=E.split(`
`);for(f=u=0;u<R.length&&!R[u].includes("DetermineComponentFrameRoot");)u++;for(;f<z.length&&!z[f].includes("DetermineComponentFrameRoot");)f++;if(u===R.length||f===z.length)for(u=R.length-1,f=z.length-1;1<=u&&0<=f&&R[u]!==z[f];)f--;for(;1<=u&&0<=f;u--,f--)if(R[u]!==z[f]){if(u!==1||f!==1)do if(u--,f--,0>f||R[u]!==z[f]){var K=`
`+R[u].replace(" at new "," at ");return n.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",n.displayName)),K}while(1<=u&&0<=f);break}}}finally{ba=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?Oi(o):""}function tl(n){switch(n.tag){case 26:case 27:case 5:return Oi(n.type);case 16:return Oi("Lazy");case 13:return Oi("Suspense");case 19:return Oi("SuspenseList");case 0:case 15:return Ea(n.type,!1);case 11:return Ea(n.type.render,!1);case 1:return Ea(n.type,!0);case 31:return Oi("Activity");default:return""}}function Ta(n){try{var s="";do s+=tl(n),n=n.return;while(n);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function an(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function nl(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Yf(n){var s=nl(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),u=""+n[s];if(!n.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,d=o.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return f.call(this)},set:function(_){u=""+_,d.call(this,_)}}),Object.defineProperty(n,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(_){u=""+_},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function Aa(n){n._valueTracker||(n._valueTracker=Yf(n))}function il(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return n&&(u=nl(n)?n.checked?"true":"false":n.value),n=u,n!==o?(s.setValue(n),!0):!1}function Is(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Qf=/[\n"\\]/g;function Et(n){return n.replace(Qf,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function pn(n,s,o,u,f,d,_,E){n.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?n.type=_:n.removeAttribute("type"),s!=null?_==="number"?(s===0&&n.value===""||n.value!=s)&&(n.value=""+an(s)):n.value!==""+an(s)&&(n.value=""+an(s)):_!=="submit"&&_!=="reset"||n.removeAttribute("value"),s!=null?vr(n,_,an(s)):o!=null?vr(n,_,an(o)):u!=null&&n.removeAttribute("value"),f==null&&d!=null&&(n.defaultChecked=!!d),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.name=""+an(E):n.removeAttribute("name")}function Rs(n,s,o,u,f,d,_,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),s!=null||o!=null){if(!(d!=="submit"&&d!=="reset"||s!=null))return;o=o!=null?""+an(o):"",s=s!=null?""+an(s):o,E||s===n.value||(n.value=s),n.defaultValue=s}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=E?n.checked:!!u,n.defaultChecked=!!u,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(n.name=_)}function vr(n,s,o){s==="number"&&Is(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function Di(n,s,o,u){if(n=n.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=s.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&u&&(n[o].defaultSelected=!0)}else{for(o=""+an(o),s=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}s!==null||n[f].disabled||(s=n[f])}s!==null&&(s.selected=!0)}}function We(n,s,o){if(s!=null&&(s=""+an(s),s!==n.value&&(n.value=s),o==null)){n.defaultValue!==s&&(n.defaultValue=s);return}n.defaultValue=o!=null?""+an(o):""}function Cs(n,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(r(92));if(ct(u)){if(1<u.length)throw Error(r(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=an(s),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function In(n,s){if(s){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=s;return}}n.textContent=s}var xs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tc(n,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(s,""):s==="float"?n.cssFloat="":n[s]="":u?n.setProperty(s,o):typeof o!="number"||o===0||xs.has(s)?s==="float"?n.cssFloat=o:n[s]=(""+o).trim():n[s]=o+"px"}function rl(n,s,o){if(s!=null&&typeof s!="object")throw Error(r(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var f in s)u=s[f],s.hasOwnProperty(f)&&o[f]!==u&&tc(n,f,u)}else for(var d in s)s.hasOwnProperty(d)&&tc(n,d,s[d])}function sl(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Sa(n){return Wf.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Pi=null;function Rn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ki=null,Mi=null;function al(n){var s=Wn(n);if(s&&(n=s.stateNode)){var o=n[bt]||null;e:switch(n=s.stateNode,s.type){case"input":if(pn(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Et(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==n&&u.form===n.form){var f=u[bt]||null;if(!f)throw Error(r(90));pn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===n.form&&il(u)}break e;case"textarea":We(n,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Di(n,!!o.multiple,s,!1)}}}var ei=!1;function nc(n,s,o){if(ei)return n(s,o);ei=!0;try{var u=n(s);return u}finally{if(ei=!1,(ki!==null||Mi!==null)&&(Qc(),ki&&(s=ki,n=Mi,Mi=ki=null,al(s),n)))for(s=0;s<n.length;s++)al(n[s])}}function Ns(n,s){var o=n.stateNode;if(o===null)return null;var u=o[bt]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(r(231,s,typeof o));return o}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cn=!1;if(Fn)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){Cn=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{Cn=!1}var ti=null,_r=null,Vi=null;function ol(){if(Vi)return Vi;var n,s=_r,o=s.length,u,f="value"in ti?ti.value:ti.textContent,d=f.length;for(n=0;n<o&&s[n]===f[n];n++);var _=o-n;for(u=1;u<=_&&s[o-u]===f[d-u];u++);return Vi=f.slice(n,1<u?1-u:void 0)}function ni(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function ii(){return!0}function ll(){return!1}function Mt(n){function s(o,u,f,d,_){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var E in n)n.hasOwnProperty(E)&&(o=n[E],this[E]=o?o(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ii:ll,this.isPropagationStopped=ll,this}return b(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ii)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ii)},persist:function(){},isPersistent:ii}),s}var $e={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wa=Mt($e),Ds=b({},$e,{view:0,detail:0}),ic=Mt(Ds),Ia,Ra,ri,Ps=b({},Ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vs,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ri&&(ri&&n.type==="mousemove"?(Ia=n.screenX-ri.screenX,Ra=n.screenY-ri.screenY):Ra=Ia=0,ri=n),Ia)},movementY:function(n){return"movementY"in n?n.movementY:Ra}}),xn=Mt(Ps),rc=b({},Ps,{dataTransfer:0}),Jf=Mt(rc),ks=b({},Ds,{relatedTarget:0}),Ca=Mt(ks),ul=b({},$e,{animationName:0,elapsedTime:0,pseudoElement:0}),xa=Mt(ul),sc=b({},$e,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Na=Mt(sc),Zf=b({},$e,{data:0}),cl=Mt(Zf),Ms={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ac={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hl(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=oc[n])?!!s[n]:!1}function Vs(){return hl}var lc=b({},Ds,{key:function(n){if(n.key){var s=Ms[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=ni(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ac[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vs,charCode:function(n){return n.type==="keypress"?ni(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ni(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Oa=Mt(lc),uc=b({},Ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fl=Mt(uc),Li=b({},Ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vs}),cc=Mt(Li),hc=b({},$e,{propertyName:0,elapsedTime:0,pseudoElement:0}),fc=Mt(hc),dc=b({},Ps,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Da=Mt(dc),on=b({},$e,{newState:0,oldState:0}),mc=Mt(on),pc=[9,13,27,32],si=Fn&&"CompositionEvent"in window,c=null;Fn&&"documentMode"in document&&(c=document.documentMode);var y=Fn&&"TextEvent"in window&&!c,v=Fn&&(!si||c&&8<c&&11>=c),A=" ",L=!1;function q(n,s){switch(n){case"keyup":return pc.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function se(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var je=!1;function Rt(n,s){switch(n){case"compositionend":return se(s);case"keypress":return s.which!==32?null:(L=!0,A);case"textInput":return n=s.data,n===A&&L?null:n;default:return null}}function ze(n,s){if(je)return n==="compositionend"||!si&&q(n,s)?(n=ol(),Vi=_r=ti=null,je=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return v&&s.locale!=="ko"?null:s.data;default:return null}}var Vt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ct(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!Vt[n.type]:s==="textarea"}function Ui(n,s,o,u){ki?Mi?Mi.push(u):Mi=[u]:ki=u,s=th(s,"onChange"),0<s.length&&(o=new wa("onChange","change",null,o,u),n.push({event:o,listeners:s}))}var Ht=null,ai=null;function dl(n){y0(n,0)}function gc(n){var s=Jn(n);if(il(s))return n}function Uy(n,s){if(n==="change")return s}var jy=!1;if(Fn){var ed;if(Fn){var td="oninput"in document;if(!td){var zy=document.createElement("div");zy.setAttribute("oninput","return;"),td=typeof zy.oninput=="function"}ed=td}else ed=!1;jy=ed&&(!document.documentMode||9<document.documentMode)}function By(){Ht&&(Ht.detachEvent("onpropertychange",Fy),ai=Ht=null)}function Fy(n){if(n.propertyName==="value"&&gc(ai)){var s=[];Ui(s,ai,n,Rn(n)),nc(dl,s)}}function Nw(n,s,o){n==="focusin"?(By(),Ht=s,ai=o,Ht.attachEvent("onpropertychange",Fy)):n==="focusout"&&By()}function Ow(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return gc(ai)}function Dw(n,s){if(n==="click")return gc(s)}function Pw(n,s){if(n==="input"||n==="change")return gc(s)}function kw(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var gn=typeof Object.is=="function"?Object.is:kw;function ml(n,s){if(gn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var o=Object.keys(n),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!ps.call(s,f)||!gn(n[f],s[f]))return!1}return!0}function Hy(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function qy(n,s){var o=Hy(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=s&&u>=s)return{node:o,offset:s-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Hy(o)}}function Gy(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?Gy(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function $y(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var s=Is(n.document);s instanceof n.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)n=s.contentWindow;else break;s=Is(n.document)}return s}function nd(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}var Mw=Fn&&"documentMode"in document&&11>=document.documentMode,Pa=null,id=null,pl=null,rd=!1;function Ky(n,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;rd||Pa==null||Pa!==Is(u)||(u=Pa,"selectionStart"in u&&nd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),pl&&ml(pl,u)||(pl=u,u=th(id,"onSelect"),0<u.length&&(s=new wa("onSelect","select",null,s,o),n.push({event:s,listeners:u}),s.target=Pa)))}function Ls(n,s){var o={};return o[n.toLowerCase()]=s.toLowerCase(),o["Webkit"+n]="webkit"+s,o["Moz"+n]="moz"+s,o}var ka={animationend:Ls("Animation","AnimationEnd"),animationiteration:Ls("Animation","AnimationIteration"),animationstart:Ls("Animation","AnimationStart"),transitionrun:Ls("Transition","TransitionRun"),transitionstart:Ls("Transition","TransitionStart"),transitioncancel:Ls("Transition","TransitionCancel"),transitionend:Ls("Transition","TransitionEnd")},sd={},Yy={};Fn&&(Yy=document.createElement("div").style,"AnimationEvent"in window||(delete ka.animationend.animation,delete ka.animationiteration.animation,delete ka.animationstart.animation),"TransitionEvent"in window||delete ka.transitionend.transition);function Us(n){if(sd[n])return sd[n];if(!ka[n])return n;var s=ka[n],o;for(o in s)if(s.hasOwnProperty(o)&&o in Yy)return sd[n]=s[o];return n}var Qy=Us("animationend"),Xy=Us("animationiteration"),Wy=Us("animationstart"),Vw=Us("transitionrun"),Lw=Us("transitionstart"),Uw=Us("transitioncancel"),Jy=Us("transitionend"),Zy=new Map,ad="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ad.push("scrollEnd");function Hn(n,s){Zy.set(n,s),Bn(s,[n])}var ev=new WeakMap;function Nn(n,s){if(typeof n=="object"&&n!==null){var o=ev.get(n);return o!==void 0?o:(s={value:n,source:s,stack:Ta(s)},ev.set(n,s),s)}return{value:n,source:s,stack:Ta(s)}}var On=[],Ma=0,od=0;function yc(){for(var n=Ma,s=od=Ma=0;s<n;){var o=On[s];On[s++]=null;var u=On[s];On[s++]=null;var f=On[s];On[s++]=null;var d=On[s];if(On[s++]=null,u!==null&&f!==null){var _=u.pending;_===null?f.next=f:(f.next=_.next,_.next=f),u.pending=f}d!==0&&tv(o,f,d)}}function vc(n,s,o,u){On[Ma++]=n,On[Ma++]=s,On[Ma++]=o,On[Ma++]=u,od|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function ld(n,s,o,u){return vc(n,s,o,u),_c(n)}function Va(n,s){return vc(n,null,null,s),_c(n)}function tv(n,s,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var f=!1,d=n.return;d!==null;)d.childLanes|=o,u=d.alternate,u!==null&&(u.childLanes|=o),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(f=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,f&&s!==null&&(f=31-Xt(o),n=d.hiddenUpdates,u=n[f],u===null?n[f]=[s]:u.push(s),s.lane=o|536870912),d):null}function _c(n){if(50<zl)throw zl=0,mm=null,Error(r(185));for(var s=n.return;s!==null;)n=s,s=n.return;return n.tag===3?n.stateNode:null}var La={};function jw(n,s,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(n,s,o,u){return new jw(n,s,o,u)}function ud(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ji(n,s){var o=n.alternate;return o===null?(o=yn(n.tag,s,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=s,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,s=n.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function nv(n,s){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=s,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,s=o.dependencies,n.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),n}function bc(n,s,o,u,f,d){var _=0;if(u=n,typeof n=="function")ud(n)&&(_=1);else if(typeof n=="string")_=BI(n,o,ge.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case C:return n=yn(31,o,s,f),n.elementType=C,n.lanes=d,n;case G:return js(o.children,f,d,s);case W:_=8,f|=24;break;case F:return n=yn(12,o,s,f|2),n.elementType=F,n.lanes=d,n;case ce:return n=yn(13,o,s,f),n.elementType=ce,n.lanes=d,n;case Ce:return n=yn(19,o,s,f),n.elementType=Ce,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ee:case ne:_=10;break e;case ie:_=9;break e;case fe:_=11;break e;case D:_=14;break e;case w:_=16,u=null;break e}_=29,o=Error(r(130,n===null?"null":typeof n,"")),u=null}return s=yn(_,o,s,f),s.elementType=n,s.type=u,s.lanes=d,s}function js(n,s,o,u){return n=yn(7,n,u,s),n.lanes=o,n}function cd(n,s,o){return n=yn(6,n,null,s),n.lanes=o,n}function hd(n,s,o){return s=yn(4,n.children!==null?n.children:[],n.key,s),s.lanes=o,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}var Ua=[],ja=0,Ec=null,Tc=0,Dn=[],Pn=0,zs=null,zi=1,Bi="";function Bs(n,s){Ua[ja++]=Tc,Ua[ja++]=Ec,Ec=n,Tc=s}function iv(n,s,o){Dn[Pn++]=zi,Dn[Pn++]=Bi,Dn[Pn++]=zs,zs=n;var u=zi;n=Bi;var f=32-Xt(u)-1;u&=~(1<<f),o+=1;var d=32-Xt(s)+f;if(30<d){var _=f-f%5;d=(u&(1<<_)-1).toString(32),u>>=_,f-=_,zi=1<<32-Xt(s)+f|o<<f|u,Bi=d+n}else zi=1<<d|o<<f|u,Bi=n}function fd(n){n.return!==null&&(Bs(n,1),iv(n,1,0))}function dd(n){for(;n===Ec;)Ec=Ua[--ja],Ua[ja]=null,Tc=Ua[--ja],Ua[ja]=null;for(;n===zs;)zs=Dn[--Pn],Dn[Pn]=null,Bi=Dn[--Pn],Dn[Pn]=null,zi=Dn[--Pn],Dn[Pn]=null}var ln=null,ft=null,Ge=!1,Fs=null,oi=!1,md=Error(r(519));function Hs(n){var s=Error(r(418,""));throw vl(Nn(s,n)),md}function rv(n){var s=n.stateNode,o=n.type,u=n.memoizedProps;switch(s[It]=n,s[bt]=u,o){case"dialog":Ve("cancel",s),Ve("close",s);break;case"iframe":case"object":case"embed":Ve("load",s);break;case"video":case"audio":for(o=0;o<Fl.length;o++)Ve(Fl[o],s);break;case"source":Ve("error",s);break;case"img":case"image":case"link":Ve("error",s),Ve("load",s);break;case"details":Ve("toggle",s);break;case"input":Ve("invalid",s),Rs(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Aa(s);break;case"select":Ve("invalid",s);break;case"textarea":Ve("invalid",s),Cs(s,u.value,u.defaultValue,u.children),Aa(s)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||E0(s.textContent,o)?(u.popover!=null&&(Ve("beforetoggle",s),Ve("toggle",s)),u.onScroll!=null&&Ve("scroll",s),u.onScrollEnd!=null&&Ve("scrollend",s),u.onClick!=null&&(s.onclick=nh),s=!0):s=!1,s||Hs(n)}function sv(n){for(ln=n.return;ln;)switch(ln.tag){case 5:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:ln=ln.return}}function gl(n){if(n!==ln)return!1;if(!Ge)return sv(n),Ge=!0,!1;var s=n.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||Nm(n.type,n.memoizedProps)),o=!o),o&&ft&&Hs(n),sv(n),s===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(s===0){ft=Gn(n.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;n=n.nextSibling}ft=null}}else s===27?(s=ft,Mr(n.type)?(n=km,km=null,ft=n):ft=s):ft=ln?Gn(n.stateNode.nextSibling):null;return!0}function yl(){ft=ln=null,Ge=!1}function av(){var n=Fs;return n!==null&&(fn===null?fn=n:fn.push.apply(fn,n),Fs=null),n}function vl(n){Fs===null?Fs=[n]:Fs.push(n)}var pd=J(null),qs=null,Fi=null;function br(n,s,o){re(pd,s._currentValue),s._currentValue=o}function Hi(n){n._currentValue=pd.current,le(pd)}function gd(n,s,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),n===o)break;n=n.return}}function yd(n,s,o,u){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var d=f.dependencies;if(d!==null){var _=f.child;d=d.firstContext;e:for(;d!==null;){var E=d;d=f;for(var R=0;R<s.length;R++)if(E.context===s[R]){d.lanes|=o,E=d.alternate,E!==null&&(E.lanes|=o),gd(d.return,o,n),u||(_=null);break e}d=E.next}}else if(f.tag===18){if(_=f.return,_===null)throw Error(r(341));_.lanes|=o,d=_.alternate,d!==null&&(d.lanes|=o),gd(_,o,n),_=null}else _=f.child;if(_!==null)_.return=f;else for(_=f;_!==null;){if(_===n){_=null;break}if(f=_.sibling,f!==null){f.return=_.return,_=f;break}_=_.return}f=_}}function _l(n,s,o,u){n=null;for(var f=s,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var _=f.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var E=f.type;gn(f.pendingProps.value,_.value)||(n!==null?n.push(E):n=[E])}}else if(f===kt.current){if(_=f.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(Yl):n=[Yl])}f=f.return}n!==null&&yd(s,n,o,u),s.flags|=262144}function Ac(n){for(n=n.firstContext;n!==null;){if(!gn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Gs(n){qs=n,Fi=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Wt(n){return ov(qs,n)}function Sc(n,s){return qs===null&&Gs(n),ov(n,s)}function ov(n,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Fi===null){if(n===null)throw Error(r(308));Fi=s,n.dependencies={lanes:0,firstContext:s},n.flags|=524288}else Fi=Fi.next=s;return o}var zw=typeof AbortController<"u"?AbortController:function(){var n=[],s=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){s.aborted=!0,n.forEach(function(o){return o()})}},Bw=i.unstable_scheduleCallback,Fw=i.unstable_NormalPriority,xt={$$typeof:ne,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vd(){return{controller:new zw,data:new Map,refCount:0}}function bl(n){n.refCount--,n.refCount===0&&Bw(Fw,function(){n.controller.abort()})}var El=null,_d=0,za=0,Ba=null;function Hw(n,s){if(El===null){var o=El=[];_d=0,za=Em(),Ba={status:"pending",value:void 0,then:function(u){o.push(u)}}}return _d++,s.then(lv,lv),s}function lv(){if(--_d===0&&El!==null){Ba!==null&&(Ba.status="fulfilled");var n=El;El=null,za=0,Ba=null;for(var s=0;s<n.length;s++)(0,n[s])()}}function qw(n,s){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return n.then(function(){u.status="fulfilled",u.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var uv=$.S;$.S=function(n,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&Hw(n,s),uv!==null&&uv(n,s)};var $s=J(null);function bd(){var n=$s.current;return n!==null?n:rt.pooledCache}function wc(n,s){s===null?re($s,$s.current):re($s,s.pool)}function cv(){var n=bd();return n===null?null:{parent:xt._currentValue,pool:n}}var Tl=Error(r(460)),hv=Error(r(474)),Ic=Error(r(542)),Ed={then:function(){}};function fv(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Rc(){}function dv(n,s,o){switch(o=n[o],o===void 0?n.push(s):o!==s&&(s.then(Rc,Rc),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,pv(n),n;default:if(typeof s.status=="string")s.then(Rc,Rc);else{if(n=rt,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=s,n.status="pending",n.then(function(u){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=u}},function(u){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,pv(n),n}throw Al=s,Tl}}var Al=null;function mv(){if(Al===null)throw Error(r(459));var n=Al;return Al=null,n}function pv(n){if(n===Tl||n===Ic)throw Error(r(483))}var Er=!1;function Td(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ad(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Tr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Ar(n,s,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Qe&2)!==0){var f=u.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s,s=_c(n),tv(n,null,o),s}return vc(n,u,s,o),_c(n)}function Sl(n,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,Jo(n,o)}}function Sd(n,s){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,d=null;if(o=o.firstBaseUpdate,o!==null){do{var _={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};d===null?f=d=_:d=d.next=_,o=o.next}while(o!==null);d===null?f=d=s:d=d.next=s}else f=d=s;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=s:n.next=s,o.lastBaseUpdate=s}var wd=!1;function wl(){if(wd){var n=Ba;if(n!==null)throw n}}function Il(n,s,o,u){wd=!1;var f=n.updateQueue;Er=!1;var d=f.firstBaseUpdate,_=f.lastBaseUpdate,E=f.shared.pending;if(E!==null){f.shared.pending=null;var R=E,z=R.next;R.next=null,_===null?d=z:_.next=z,_=R;var K=n.alternate;K!==null&&(K=K.updateQueue,E=K.lastBaseUpdate,E!==_&&(E===null?K.firstBaseUpdate=z:E.next=z,K.lastBaseUpdate=R))}if(d!==null){var Q=f.baseState;_=0,K=z=R=null,E=d;do{var B=E.lane&-536870913,H=B!==E.lane;if(H?(Be&B)===B:(u&B)===B){B!==0&&B===za&&(wd=!0),K!==null&&(K=K.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var Ee=n,ye=E;B=s;var et=o;switch(ye.tag){case 1:if(Ee=ye.payload,typeof Ee=="function"){Q=Ee.call(et,Q,B);break e}Q=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=ye.payload,B=typeof Ee=="function"?Ee.call(et,Q,B):Ee,B==null)break e;Q=b({},Q,B);break e;case 2:Er=!0}}B=E.callback,B!==null&&(n.flags|=64,H&&(n.flags|=8192),H=f.callbacks,H===null?f.callbacks=[B]:H.push(B))}else H={lane:B,tag:E.tag,payload:E.payload,callback:E.callback,next:null},K===null?(z=K=H,R=Q):K=K.next=H,_|=B;if(E=E.next,E===null){if(E=f.shared.pending,E===null)break;H=E,E=H.next,H.next=null,f.lastBaseUpdate=H,f.shared.pending=null}}while(!0);K===null&&(R=Q),f.baseState=R,f.firstBaseUpdate=z,f.lastBaseUpdate=K,d===null&&(f.shared.lanes=0),Or|=_,n.lanes=_,n.memoizedState=Q}}function gv(n,s){if(typeof n!="function")throw Error(r(191,n));n.call(s)}function yv(n,s){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)gv(o[n],s)}var Fa=J(null),Cc=J(0);function vv(n,s){n=Xi,re(Cc,n),re(Fa,s),Xi=n|s.baseLanes}function Id(){re(Cc,Xi),re(Fa,Fa.current)}function Rd(){Xi=Cc.current,le(Fa),le(Cc)}var Sr=0,Ne=null,Je=null,Tt=null,xc=!1,Ha=!1,Ks=!1,Nc=0,Rl=0,qa=null,Gw=0;function gt(){throw Error(r(321))}function Cd(n,s){if(s===null)return!1;for(var o=0;o<s.length&&o<n.length;o++)if(!gn(n[o],s[o]))return!1;return!0}function xd(n,s,o,u,f,d){return Sr=d,Ne=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,$.H=n===null||n.memoizedState===null?t_:n_,Ks=!1,d=o(u,f),Ks=!1,Ha&&(d=bv(s,o,u,f)),_v(n),d}function _v(n){$.H=Vc;var s=Je!==null&&Je.next!==null;if(Sr=0,Tt=Je=Ne=null,xc=!1,Rl=0,qa=null,s)throw Error(r(300));n===null||Lt||(n=n.dependencies,n!==null&&Ac(n)&&(Lt=!0))}function bv(n,s,o,u){Ne=n;var f=0;do{if(Ha&&(qa=null),Rl=0,Ha=!1,25<=f)throw Error(r(301));if(f+=1,Tt=Je=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}$.H=Jw,d=s(o,u)}while(Ha);return d}function $w(){var n=$.H,s=n.useState()[0];return s=typeof s.then=="function"?Cl(s):s,n=n.useState()[0],(Je!==null?Je.memoizedState:null)!==n&&(Ne.flags|=1024),s}function Nd(){var n=Nc!==0;return Nc=0,n}function Od(n,s,o){s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~o}function Dd(n){if(xc){for(n=n.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}xc=!1}Sr=0,Tt=Je=Ne=null,Ha=!1,Rl=Nc=0,qa=null}function cn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?Ne.memoizedState=Tt=n:Tt=Tt.next=n,Tt}function At(){if(Je===null){var n=Ne.alternate;n=n!==null?n.memoizedState:null}else n=Je.next;var s=Tt===null?Ne.memoizedState:Tt.next;if(s!==null)Tt=s,Je=n;else{if(n===null)throw Ne.alternate===null?Error(r(467)):Error(r(310));Je=n,n={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},Tt===null?Ne.memoizedState=Tt=n:Tt=Tt.next=n}return Tt}function Pd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Cl(n){var s=Rl;return Rl+=1,qa===null&&(qa=[]),n=dv(qa,n,s),s=Ne,(Tt===null?s.memoizedState:Tt.next)===null&&(s=s.alternate,$.H=s===null||s.memoizedState===null?t_:n_),n}function Oc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Cl(n);if(n.$$typeof===ne)return Wt(n)}throw Error(r(438,String(n)))}function kd(n){var s=null,o=Ne.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=Ne.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=Pd(),Ne.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(n),u=0;u<n;u++)o[u]=P;return s.index++,o}function qi(n,s){return typeof s=="function"?s(n):s}function Dc(n){var s=At();return Md(s,Je,n)}function Md(n,s,o){var u=n.queue;if(u===null)throw Error(r(311));u.lastRenderedReducer=o;var f=n.baseQueue,d=u.pending;if(d!==null){if(f!==null){var _=f.next;f.next=d.next,d.next=_}s.baseQueue=f=d,u.pending=null}if(d=n.baseState,f===null)n.memoizedState=d;else{s=f.next;var E=_=null,R=null,z=s,K=!1;do{var Q=z.lane&-536870913;if(Q!==z.lane?(Be&Q)===Q:(Sr&Q)===Q){var B=z.revertLane;if(B===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),Q===za&&(K=!0);else if((Sr&B)===B){z=z.next,B===za&&(K=!0);continue}else Q={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},R===null?(E=R=Q,_=d):R=R.next=Q,Ne.lanes|=B,Or|=B;Q=z.action,Ks&&o(d,Q),d=z.hasEagerState?z.eagerState:o(d,Q)}else B={lane:Q,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},R===null?(E=R=B,_=d):R=R.next=B,Ne.lanes|=Q,Or|=Q;z=z.next}while(z!==null&&z!==s);if(R===null?_=d:R.next=E,!gn(d,n.memoizedState)&&(Lt=!0,K&&(o=Ba,o!==null)))throw o;n.memoizedState=d,n.baseState=_,n.baseQueue=R,u.lastRenderedState=d}return f===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function Vd(n){var s=At(),o=s.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=n;var u=o.dispatch,f=o.pending,d=s.memoizedState;if(f!==null){o.pending=null;var _=f=f.next;do d=n(d,_.action),_=_.next;while(_!==f);gn(d,s.memoizedState)||(Lt=!0),s.memoizedState=d,s.baseQueue===null&&(s.baseState=d),o.lastRenderedState=d}return[d,u]}function Ev(n,s,o){var u=Ne,f=At(),d=Ge;if(d){if(o===void 0)throw Error(r(407));o=o()}else o=s();var _=!gn((Je||f).memoizedState,o);_&&(f.memoizedState=o,Lt=!0),f=f.queue;var E=Sv.bind(null,u,f,n);if(xl(2048,8,E,[n]),f.getSnapshot!==s||_||Tt!==null&&Tt.memoizedState.tag&1){if(u.flags|=2048,Ga(9,Pc(),Av.bind(null,u,f,o,s),null),rt===null)throw Error(r(349));d||(Sr&124)!==0||Tv(u,s,o)}return o}function Tv(n,s,o){n.flags|=16384,n={getSnapshot:s,value:o},s=Ne.updateQueue,s===null?(s=Pd(),Ne.updateQueue=s,s.stores=[n]):(o=s.stores,o===null?s.stores=[n]:o.push(n))}function Av(n,s,o,u){s.value=o,s.getSnapshot=u,wv(s)&&Iv(n)}function Sv(n,s,o){return o(function(){wv(s)&&Iv(n)})}function wv(n){var s=n.getSnapshot;n=n.value;try{var o=s();return!gn(n,o)}catch{return!0}}function Iv(n){var s=Va(n,2);s!==null&&Tn(s,n,2)}function Ld(n){var s=cn();if(typeof n=="function"){var o=n;if(n=o(),Ks){mn(!0);try{o()}finally{mn(!1)}}}return s.memoizedState=s.baseState=n,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:n},s}function Rv(n,s,o,u){return n.baseState=o,Md(n,Je,typeof u=="function"?u:qi)}function Kw(n,s,o,u,f){if(Mc(n))throw Error(r(485));if(n=s.action,n!==null){var d={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};$.T!==null?o(!0):d.isTransition=!1,u(d),o=s.pending,o===null?(d.next=s.pending=d,Cv(s,d)):(d.next=o.next,s.pending=o.next=d)}}function Cv(n,s){var o=s.action,u=s.payload,f=n.state;if(s.isTransition){var d=$.T,_={};$.T=_;try{var E=o(f,u),R=$.S;R!==null&&R(_,E),xv(n,s,E)}catch(z){Ud(n,s,z)}finally{$.T=d}}else try{d=o(f,u),xv(n,s,d)}catch(z){Ud(n,s,z)}}function xv(n,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Nv(n,s,u)},function(u){return Ud(n,s,u)}):Nv(n,s,o)}function Nv(n,s,o){s.status="fulfilled",s.value=o,Ov(s),n.state=o,s=n.pending,s!==null&&(o=s.next,o===s?n.pending=null:(o=o.next,s.next=o,Cv(n,o)))}function Ud(n,s,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,Ov(s),s=s.next;while(s!==u)}n.action=null}function Ov(n){n=n.listeners;for(var s=0;s<n.length;s++)(0,n[s])()}function Dv(n,s){return s}function Pv(n,s){if(Ge){var o=rt.formState;if(o!==null){e:{var u=Ne;if(Ge){if(ft){t:{for(var f=ft,d=oi;f.nodeType!==8;){if(!d){f=null;break t}if(f=Gn(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){ft=Gn(f.nextSibling),u=f.data==="F!";break e}}Hs(u)}u=!1}u&&(s=o[0])}}return o=cn(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dv,lastRenderedState:s},o.queue=u,o=Jv.bind(null,Ne,u),u.dispatch=o,u=Ld(!1),d=Hd.bind(null,Ne,!1,u.queue),u=cn(),f={state:s,dispatch:null,action:n,pending:null},u.queue=f,o=Kw.bind(null,Ne,f,d,o),f.dispatch=o,u.memoizedState=n,[s,o,!1]}function kv(n){var s=At();return Mv(s,Je,n)}function Mv(n,s,o){if(s=Md(n,s,Dv)[0],n=Dc(qi)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=Cl(s)}catch(_){throw _===Tl?Ic:_}else u=s;s=At();var f=s.queue,d=f.dispatch;return o!==s.memoizedState&&(Ne.flags|=2048,Ga(9,Pc(),Yw.bind(null,f,o),null)),[u,d,n]}function Yw(n,s){n.action=s}function Vv(n){var s=At(),o=Je;if(o!==null)return Mv(s,o,n);At(),s=s.memoizedState,o=At();var u=o.queue.dispatch;return o.memoizedState=n,[s,u,!1]}function Ga(n,s,o,u){return n={tag:n,create:o,deps:u,inst:s,next:null},s=Ne.updateQueue,s===null&&(s=Pd(),Ne.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,s.lastEffect=n),n}function Pc(){return{destroy:void 0,resource:void 0}}function Lv(){return At().memoizedState}function kc(n,s,o,u){var f=cn();u=u===void 0?null:u,Ne.flags|=n,f.memoizedState=Ga(1|s,Pc(),o,u)}function xl(n,s,o,u){var f=At();u=u===void 0?null:u;var d=f.memoizedState.inst;Je!==null&&u!==null&&Cd(u,Je.memoizedState.deps)?f.memoizedState=Ga(s,d,o,u):(Ne.flags|=n,f.memoizedState=Ga(1|s,d,o,u))}function Uv(n,s){kc(8390656,8,n,s)}function jv(n,s){xl(2048,8,n,s)}function zv(n,s){return xl(4,2,n,s)}function Bv(n,s){return xl(4,4,n,s)}function Fv(n,s){if(typeof s=="function"){n=n();var o=s(n);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function Hv(n,s,o){o=o!=null?o.concat([n]):null,xl(4,4,Fv.bind(null,s,n),o)}function jd(){}function qv(n,s){var o=At();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&Cd(s,u[1])?u[0]:(o.memoizedState=[n,s],n)}function Gv(n,s){var o=At();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&Cd(s,u[1]))return u[0];if(u=n(),Ks){mn(!0);try{n()}finally{mn(!1)}}return o.memoizedState=[u,s],u}function zd(n,s,o){return o===void 0||(Sr&1073741824)!==0?n.memoizedState=s:(n.memoizedState=o,n=Y_(),Ne.lanes|=n,Or|=n,o)}function $v(n,s,o,u){return gn(o,s)?o:Fa.current!==null?(n=zd(n,o,u),gn(n,s)||(Lt=!0),n):(Sr&42)===0?(Lt=!0,n.memoizedState=o):(n=Y_(),Ne.lanes|=n,Or|=n,s)}function Kv(n,s,o,u,f){var d=oe.p;oe.p=d!==0&&8>d?d:8;var _=$.T,E={};$.T=E,Hd(n,!1,s,o);try{var R=f(),z=$.S;if(z!==null&&z(E,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var K=qw(R,u);Nl(n,s,K,En(n))}else Nl(n,s,u,En(n))}catch(Q){Nl(n,s,{then:function(){},status:"rejected",reason:Q},En())}finally{oe.p=d,$.T=_}}function Qw(){}function Bd(n,s,o,u){if(n.tag!==5)throw Error(r(476));var f=Yv(n).queue;Kv(n,f,s,pe,o===null?Qw:function(){return Qv(n),o(u)})}function Yv(n){var s=n.memoizedState;if(s!==null)return s;s={memoizedState:pe,baseState:pe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:pe},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:o},next:null},n.memoizedState=s,n=n.alternate,n!==null&&(n.memoizedState=s),s}function Qv(n){var s=Yv(n).next.queue;Nl(n,s,{},En())}function Fd(){return Wt(Yl)}function Xv(){return At().memoizedState}function Wv(){return At().memoizedState}function Xw(n){for(var s=n.return;s!==null;){switch(s.tag){case 24:case 3:var o=En();n=Tr(o);var u=Ar(s,n,o);u!==null&&(Tn(u,s,o),Sl(u,s,o)),s={cache:vd()},n.payload=s;return}s=s.return}}function Ww(n,s,o){var u=En();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Mc(n)?Zv(s,o):(o=ld(n,s,o,u),o!==null&&(Tn(o,n,u),e_(o,s,u)))}function Jv(n,s,o){var u=En();Nl(n,s,o,u)}function Nl(n,s,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Mc(n))Zv(s,f);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=s.lastRenderedReducer,d!==null))try{var _=s.lastRenderedState,E=d(_,o);if(f.hasEagerState=!0,f.eagerState=E,gn(E,_))return vc(n,s,f,0),rt===null&&yc(),!1}catch{}finally{}if(o=ld(n,s,f,u),o!==null)return Tn(o,n,u),e_(o,s,u),!0}return!1}function Hd(n,s,o,u){if(u={lane:2,revertLane:Em(),action:u,hasEagerState:!1,eagerState:null,next:null},Mc(n)){if(s)throw Error(r(479))}else s=ld(n,o,u,2),s!==null&&Tn(s,n,2)}function Mc(n){var s=n.alternate;return n===Ne||s!==null&&s===Ne}function Zv(n,s){Ha=xc=!0;var o=n.pending;o===null?s.next=s:(s.next=o.next,o.next=s),n.pending=s}function e_(n,s,o){if((o&4194048)!==0){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,Jo(n,o)}}var Vc={readContext:Wt,use:Oc,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useLayoutEffect:gt,useInsertionEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useSyncExternalStore:gt,useId:gt,useHostTransitionStatus:gt,useFormState:gt,useActionState:gt,useOptimistic:gt,useMemoCache:gt,useCacheRefresh:gt},t_={readContext:Wt,use:Oc,useCallback:function(n,s){return cn().memoizedState=[n,s===void 0?null:s],n},useContext:Wt,useEffect:Uv,useImperativeHandle:function(n,s,o){o=o!=null?o.concat([n]):null,kc(4194308,4,Fv.bind(null,s,n),o)},useLayoutEffect:function(n,s){return kc(4194308,4,n,s)},useInsertionEffect:function(n,s){kc(4,2,n,s)},useMemo:function(n,s){var o=cn();s=s===void 0?null:s;var u=n();if(Ks){mn(!0);try{n()}finally{mn(!1)}}return o.memoizedState=[u,s],u},useReducer:function(n,s,o){var u=cn();if(o!==void 0){var f=o(s);if(Ks){mn(!0);try{o(s)}finally{mn(!1)}}}else f=s;return u.memoizedState=u.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},u.queue=n,n=n.dispatch=Ww.bind(null,Ne,n),[u.memoizedState,n]},useRef:function(n){var s=cn();return n={current:n},s.memoizedState=n},useState:function(n){n=Ld(n);var s=n.queue,o=Jv.bind(null,Ne,s);return s.dispatch=o,[n.memoizedState,o]},useDebugValue:jd,useDeferredValue:function(n,s){var o=cn();return zd(o,n,s)},useTransition:function(){var n=Ld(!1);return n=Kv.bind(null,Ne,n.queue,!0,!1),cn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,s,o){var u=Ne,f=cn();if(Ge){if(o===void 0)throw Error(r(407));o=o()}else{if(o=s(),rt===null)throw Error(r(349));(Be&124)!==0||Tv(u,s,o)}f.memoizedState=o;var d={value:o,getSnapshot:s};return f.queue=d,Uv(Sv.bind(null,u,d,n),[n]),u.flags|=2048,Ga(9,Pc(),Av.bind(null,u,d,o,s),null),o},useId:function(){var n=cn(),s=rt.identifierPrefix;if(Ge){var o=Bi,u=zi;o=(u&~(1<<32-Xt(u)-1)).toString(32)+o,s="«"+s+"R"+o,o=Nc++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=Gw++,s="«"+s+"r"+o.toString(32)+"»";return n.memoizedState=s},useHostTransitionStatus:Fd,useFormState:Pv,useActionState:Pv,useOptimistic:function(n){var s=cn();s.memoizedState=s.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Hd.bind(null,Ne,!0,o),o.dispatch=s,[n,s]},useMemoCache:kd,useCacheRefresh:function(){return cn().memoizedState=Xw.bind(null,Ne)}},n_={readContext:Wt,use:Oc,useCallback:qv,useContext:Wt,useEffect:jv,useImperativeHandle:Hv,useInsertionEffect:zv,useLayoutEffect:Bv,useMemo:Gv,useReducer:Dc,useRef:Lv,useState:function(){return Dc(qi)},useDebugValue:jd,useDeferredValue:function(n,s){var o=At();return $v(o,Je.memoizedState,n,s)},useTransition:function(){var n=Dc(qi)[0],s=At().memoizedState;return[typeof n=="boolean"?n:Cl(n),s]},useSyncExternalStore:Ev,useId:Xv,useHostTransitionStatus:Fd,useFormState:kv,useActionState:kv,useOptimistic:function(n,s){var o=At();return Rv(o,Je,n,s)},useMemoCache:kd,useCacheRefresh:Wv},Jw={readContext:Wt,use:Oc,useCallback:qv,useContext:Wt,useEffect:jv,useImperativeHandle:Hv,useInsertionEffect:zv,useLayoutEffect:Bv,useMemo:Gv,useReducer:Vd,useRef:Lv,useState:function(){return Vd(qi)},useDebugValue:jd,useDeferredValue:function(n,s){var o=At();return Je===null?zd(o,n,s):$v(o,Je.memoizedState,n,s)},useTransition:function(){var n=Vd(qi)[0],s=At().memoizedState;return[typeof n=="boolean"?n:Cl(n),s]},useSyncExternalStore:Ev,useId:Xv,useHostTransitionStatus:Fd,useFormState:Vv,useActionState:Vv,useOptimistic:function(n,s){var o=At();return Je!==null?Rv(o,Je,n,s):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:kd,useCacheRefresh:Wv},$a=null,Ol=0;function Lc(n){var s=Ol;return Ol+=1,$a===null&&($a=[]),dv($a,n,s)}function Dl(n,s){s=s.props.ref,n.ref=s!==void 0?s:null}function Uc(n,s){throw s.$$typeof===T?Error(r(525)):(n=Object.prototype.toString.call(s),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n)))}function i_(n){var s=n._init;return s(n._payload)}function r_(n){function s(M,O){if(n){var U=M.deletions;U===null?(M.deletions=[O],M.flags|=16):U.push(O)}}function o(M,O){if(!n)return null;for(;O!==null;)s(M,O),O=O.sibling;return null}function u(M){for(var O=new Map;M!==null;)M.key!==null?O.set(M.key,M):O.set(M.index,M),M=M.sibling;return O}function f(M,O){return M=ji(M,O),M.index=0,M.sibling=null,M}function d(M,O,U){return M.index=U,n?(U=M.alternate,U!==null?(U=U.index,U<O?(M.flags|=67108866,O):U):(M.flags|=67108866,O)):(M.flags|=1048576,O)}function _(M){return n&&M.alternate===null&&(M.flags|=67108866),M}function E(M,O,U,Y){return O===null||O.tag!==6?(O=cd(U,M.mode,Y),O.return=M,O):(O=f(O,U),O.return=M,O)}function R(M,O,U,Y){var he=U.type;return he===G?K(M,O,U.props.children,Y,U.key):O!==null&&(O.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===w&&i_(he)===O.type)?(O=f(O,U.props),Dl(O,U),O.return=M,O):(O=bc(U.type,U.key,U.props,null,M.mode,Y),Dl(O,U),O.return=M,O)}function z(M,O,U,Y){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=hd(U,M.mode,Y),O.return=M,O):(O=f(O,U.children||[]),O.return=M,O)}function K(M,O,U,Y,he){return O===null||O.tag!==7?(O=js(U,M.mode,Y,he),O.return=M,O):(O=f(O,U),O.return=M,O)}function Q(M,O,U){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=cd(""+O,M.mode,U),O.return=M,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case S:return U=bc(O.type,O.key,O.props,null,M.mode,U),Dl(U,O),U.return=M,U;case j:return O=hd(O,M.mode,U),O.return=M,O;case w:var Y=O._init;return O=Y(O._payload),Q(M,O,U)}if(ct(O)||V(O))return O=js(O,M.mode,U,null),O.return=M,O;if(typeof O.then=="function")return Q(M,Lc(O),U);if(O.$$typeof===ne)return Q(M,Sc(M,O),U);Uc(M,O)}return null}function B(M,O,U,Y){var he=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return he!==null?null:E(M,O,""+U,Y);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case S:return U.key===he?R(M,O,U,Y):null;case j:return U.key===he?z(M,O,U,Y):null;case w:return he=U._init,U=he(U._payload),B(M,O,U,Y)}if(ct(U)||V(U))return he!==null?null:K(M,O,U,Y,null);if(typeof U.then=="function")return B(M,O,Lc(U),Y);if(U.$$typeof===ne)return B(M,O,Sc(M,U),Y);Uc(M,U)}return null}function H(M,O,U,Y,he){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return M=M.get(U)||null,E(O,M,""+Y,he);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case S:return M=M.get(Y.key===null?U:Y.key)||null,R(O,M,Y,he);case j:return M=M.get(Y.key===null?U:Y.key)||null,z(O,M,Y,he);case w:var Pe=Y._init;return Y=Pe(Y._payload),H(M,O,U,Y,he)}if(ct(Y)||V(Y))return M=M.get(U)||null,K(O,M,Y,he,null);if(typeof Y.then=="function")return H(M,O,U,Lc(Y),he);if(Y.$$typeof===ne)return H(M,O,U,Sc(O,Y),he);Uc(O,Y)}return null}function Ee(M,O,U,Y){for(var he=null,Pe=null,me=O,be=O=0,jt=null;me!==null&&be<U.length;be++){me.index>be?(jt=me,me=null):jt=me.sibling;var He=B(M,me,U[be],Y);if(He===null){me===null&&(me=jt);break}n&&me&&He.alternate===null&&s(M,me),O=d(He,O,be),Pe===null?he=He:Pe.sibling=He,Pe=He,me=jt}if(be===U.length)return o(M,me),Ge&&Bs(M,be),he;if(me===null){for(;be<U.length;be++)me=Q(M,U[be],Y),me!==null&&(O=d(me,O,be),Pe===null?he=me:Pe.sibling=me,Pe=me);return Ge&&Bs(M,be),he}for(me=u(me);be<U.length;be++)jt=H(me,M,be,U[be],Y),jt!==null&&(n&&jt.alternate!==null&&me.delete(jt.key===null?be:jt.key),O=d(jt,O,be),Pe===null?he=jt:Pe.sibling=jt,Pe=jt);return n&&me.forEach(function(zr){return s(M,zr)}),Ge&&Bs(M,be),he}function ye(M,O,U,Y){if(U==null)throw Error(r(151));for(var he=null,Pe=null,me=O,be=O=0,jt=null,He=U.next();me!==null&&!He.done;be++,He=U.next()){me.index>be?(jt=me,me=null):jt=me.sibling;var zr=B(M,me,He.value,Y);if(zr===null){me===null&&(me=jt);break}n&&me&&zr.alternate===null&&s(M,me),O=d(zr,O,be),Pe===null?he=zr:Pe.sibling=zr,Pe=zr,me=jt}if(He.done)return o(M,me),Ge&&Bs(M,be),he;if(me===null){for(;!He.done;be++,He=U.next())He=Q(M,He.value,Y),He!==null&&(O=d(He,O,be),Pe===null?he=He:Pe.sibling=He,Pe=He);return Ge&&Bs(M,be),he}for(me=u(me);!He.done;be++,He=U.next())He=H(me,M,be,He.value,Y),He!==null&&(n&&He.alternate!==null&&me.delete(He.key===null?be:He.key),O=d(He,O,be),Pe===null?he=He:Pe.sibling=He,Pe=He);return n&&me.forEach(function(ZI){return s(M,ZI)}),Ge&&Bs(M,be),he}function et(M,O,U,Y){if(typeof U=="object"&&U!==null&&U.type===G&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case S:e:{for(var he=U.key;O!==null;){if(O.key===he){if(he=U.type,he===G){if(O.tag===7){o(M,O.sibling),Y=f(O,U.props.children),Y.return=M,M=Y;break e}}else if(O.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===w&&i_(he)===O.type){o(M,O.sibling),Y=f(O,U.props),Dl(Y,U),Y.return=M,M=Y;break e}o(M,O);break}else s(M,O);O=O.sibling}U.type===G?(Y=js(U.props.children,M.mode,Y,U.key),Y.return=M,M=Y):(Y=bc(U.type,U.key,U.props,null,M.mode,Y),Dl(Y,U),Y.return=M,M=Y)}return _(M);case j:e:{for(he=U.key;O!==null;){if(O.key===he)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){o(M,O.sibling),Y=f(O,U.children||[]),Y.return=M,M=Y;break e}else{o(M,O);break}else s(M,O);O=O.sibling}Y=hd(U,M.mode,Y),Y.return=M,M=Y}return _(M);case w:return he=U._init,U=he(U._payload),et(M,O,U,Y)}if(ct(U))return Ee(M,O,U,Y);if(V(U)){if(he=V(U),typeof he!="function")throw Error(r(150));return U=he.call(U),ye(M,O,U,Y)}if(typeof U.then=="function")return et(M,O,Lc(U),Y);if(U.$$typeof===ne)return et(M,O,Sc(M,U),Y);Uc(M,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,O!==null&&O.tag===6?(o(M,O.sibling),Y=f(O,U),Y.return=M,M=Y):(o(M,O),Y=cd(U,M.mode,Y),Y.return=M,M=Y),_(M)):o(M,O)}return function(M,O,U,Y){try{Ol=0;var he=et(M,O,U,Y);return $a=null,he}catch(me){if(me===Tl||me===Ic)throw me;var Pe=yn(29,me,null,M.mode);return Pe.lanes=Y,Pe.return=M,Pe}finally{}}}var Ka=r_(!0),s_=r_(!1),kn=J(null),li=null;function wr(n){var s=n.alternate;re(Nt,Nt.current&1),re(kn,n),li===null&&(s===null||Fa.current!==null||s.memoizedState!==null)&&(li=n)}function a_(n){if(n.tag===22){if(re(Nt,Nt.current),re(kn,n),li===null){var s=n.alternate;s!==null&&s.memoizedState!==null&&(li=n)}}else Ir()}function Ir(){re(Nt,Nt.current),re(kn,kn.current)}function Gi(n){le(kn),li===n&&(li=null),le(Nt)}var Nt=J(0);function jc(n){for(var s=n;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Pm(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function qd(n,s,o,u){s=n.memoizedState,o=o(u,s),o=o==null?s:b({},s,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Gd={enqueueSetState:function(n,s,o){n=n._reactInternals;var u=En(),f=Tr(u);f.payload=s,o!=null&&(f.callback=o),s=Ar(n,f,u),s!==null&&(Tn(s,n,u),Sl(s,n,u))},enqueueReplaceState:function(n,s,o){n=n._reactInternals;var u=En(),f=Tr(u);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Ar(n,f,u),s!==null&&(Tn(s,n,u),Sl(s,n,u))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var o=En(),u=Tr(o);u.tag=2,s!=null&&(u.callback=s),s=Ar(n,u,o),s!==null&&(Tn(s,n,o),Sl(s,n,o))}};function o_(n,s,o,u,f,d,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,d,_):s.prototype&&s.prototype.isPureReactComponent?!ml(o,u)||!ml(f,d):!0}function l_(n,s,o,u){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==n&&Gd.enqueueReplaceState(s,s.state,null)}function Ys(n,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(n=n.defaultProps){o===s&&(o=b({},o));for(var f in n)o[f]===void 0&&(o[f]=n[f])}return o}var zc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function u_(n){zc(n)}function c_(n){console.error(n)}function h_(n){zc(n)}function Bc(n,s){try{var o=n.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function f_(n,s,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function $d(n,s,o){return o=Tr(o),o.tag=3,o.payload={element:null},o.callback=function(){Bc(n,s)},o}function d_(n){return n=Tr(n),n.tag=3,n}function m_(n,s,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var d=u.value;n.payload=function(){return f(d)},n.callback=function(){f_(s,o,u)}}var _=o.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(n.callback=function(){f_(s,o,u),typeof f!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var E=u.stack;this.componentDidCatch(u.value,{componentStack:E!==null?E:""})})}function Zw(n,s,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&_l(s,o,f,!0),o=kn.current,o!==null){switch(o.tag){case 13:return li===null?gm():o.alternate===null&&dt===0&&(dt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Ed?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),vm(n,u,f)),!1;case 22:return o.flags|=65536,u===Ed?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),vm(n,u,f)),!1}throw Error(r(435,o.tag))}return vm(n,u,f),gm(),!1}if(Ge)return s=kn.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,u!==md&&(n=Error(r(422),{cause:u}),vl(Nn(n,o)))):(u!==md&&(s=Error(r(423),{cause:u}),vl(Nn(s,o))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,u=Nn(u,o),f=$d(n.stateNode,u,f),Sd(n,f),dt!==4&&(dt=2)),!1;var d=Error(r(520),{cause:u});if(d=Nn(d,o),jl===null?jl=[d]:jl.push(d),dt!==4&&(dt=2),s===null)return!0;u=Nn(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,n=f&-f,o.lanes|=n,n=$d(o.stateNode,u,n),Sd(o,n),!1;case 1:if(s=o.type,d=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Dr===null||!Dr.has(d))))return o.flags|=65536,f&=-f,o.lanes|=f,f=d_(f),m_(f,n,o,u),Sd(o,f),!1}o=o.return}while(o!==null);return!1}var p_=Error(r(461)),Lt=!1;function qt(n,s,o,u){s.child=n===null?s_(s,null,o,u):Ka(s,n.child,o,u)}function g_(n,s,o,u,f){o=o.render;var d=s.ref;if("ref"in u){var _={};for(var E in u)E!=="ref"&&(_[E]=u[E])}else _=u;return Gs(s),u=xd(n,s,o,_,d,f),E=Nd(),n!==null&&!Lt?(Od(n,s,f),$i(n,s,f)):(Ge&&E&&fd(s),s.flags|=1,qt(n,s,u,f),s.child)}function y_(n,s,o,u,f){if(n===null){var d=o.type;return typeof d=="function"&&!ud(d)&&d.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=d,v_(n,s,d,u,f)):(n=bc(o.type,null,u,s,s.mode,f),n.ref=s.ref,n.return=s,s.child=n)}if(d=n.child,!em(n,f)){var _=d.memoizedProps;if(o=o.compare,o=o!==null?o:ml,o(_,u)&&n.ref===s.ref)return $i(n,s,f)}return s.flags|=1,n=ji(d,u),n.ref=s.ref,n.return=s,s.child=n}function v_(n,s,o,u,f){if(n!==null){var d=n.memoizedProps;if(ml(d,u)&&n.ref===s.ref)if(Lt=!1,s.pendingProps=u=d,em(n,f))(n.flags&131072)!==0&&(Lt=!0);else return s.lanes=n.lanes,$i(n,s,f)}return Kd(n,s,o,u,f)}function __(n,s,o){var u=s.pendingProps,f=u.children,d=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((s.flags&128)!==0){if(u=d!==null?d.baseLanes|o:o,n!==null){for(f=s.child=n.child,d=0;f!==null;)d=d|f.lanes|f.childLanes,f=f.sibling;s.childLanes=d&~u}else s.childLanes=0,s.child=null;return b_(n,s,u,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},n!==null&&wc(s,d!==null?d.cachePool:null),d!==null?vv(s,d):Id(),a_(s);else return s.lanes=s.childLanes=536870912,b_(n,s,d!==null?d.baseLanes|o:o,o)}else d!==null?(wc(s,d.cachePool),vv(s,d),Ir(),s.memoizedState=null):(n!==null&&wc(s,null),Id(),Ir());return qt(n,s,f,o),s.child}function b_(n,s,o,u){var f=bd();return f=f===null?null:{parent:xt._currentValue,pool:f},s.memoizedState={baseLanes:o,cachePool:f},n!==null&&wc(s,null),Id(),a_(s),n!==null&&_l(n,s,u,!0),null}function Fc(n,s){var o=s.ref;if(o===null)n!==null&&n.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(r(284));(n===null||n.ref!==o)&&(s.flags|=4194816)}}function Kd(n,s,o,u,f){return Gs(s),o=xd(n,s,o,u,void 0,f),u=Nd(),n!==null&&!Lt?(Od(n,s,f),$i(n,s,f)):(Ge&&u&&fd(s),s.flags|=1,qt(n,s,o,f),s.child)}function E_(n,s,o,u,f,d){return Gs(s),s.updateQueue=null,o=bv(s,u,o,f),_v(n),u=Nd(),n!==null&&!Lt?(Od(n,s,d),$i(n,s,d)):(Ge&&u&&fd(s),s.flags|=1,qt(n,s,o,d),s.child)}function T_(n,s,o,u,f){if(Gs(s),s.stateNode===null){var d=La,_=o.contextType;typeof _=="object"&&_!==null&&(d=Wt(_)),d=new o(u,d),s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Gd,s.stateNode=d,d._reactInternals=s,d=s.stateNode,d.props=u,d.state=s.memoizedState,d.refs={},Td(s),_=o.contextType,d.context=typeof _=="object"&&_!==null?Wt(_):La,d.state=s.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(qd(s,o,_,u),d.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&Gd.enqueueReplaceState(d,d.state,null),Il(s,u,d,f),wl(),d.state=s.memoizedState),typeof d.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(n===null){d=s.stateNode;var E=s.memoizedProps,R=Ys(o,E);d.props=R;var z=d.context,K=o.contextType;_=La,typeof K=="object"&&K!==null&&(_=Wt(K));var Q=o.getDerivedStateFromProps;K=typeof Q=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=s.pendingProps!==E,K||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||z!==_)&&l_(s,d,u,_),Er=!1;var B=s.memoizedState;d.state=B,Il(s,u,d,f),wl(),z=s.memoizedState,E||B!==z||Er?(typeof Q=="function"&&(qd(s,o,Q,u),z=s.memoizedState),(R=Er||o_(s,o,R,u,B,z,_))?(K||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(s.flags|=4194308)):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=z),d.props=u,d.state=z,d.context=_,u=R):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{d=s.stateNode,Ad(n,s),_=s.memoizedProps,K=Ys(o,_),d.props=K,Q=s.pendingProps,B=d.context,z=o.contextType,R=La,typeof z=="object"&&z!==null&&(R=Wt(z)),E=o.getDerivedStateFromProps,(z=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==Q||B!==R)&&l_(s,d,u,R),Er=!1,B=s.memoizedState,d.state=B,Il(s,u,d,f),wl();var H=s.memoizedState;_!==Q||B!==H||Er||n!==null&&n.dependencies!==null&&Ac(n.dependencies)?(typeof E=="function"&&(qd(s,o,E,u),H=s.memoizedState),(K=Er||o_(s,o,K,u,B,H,R)||n!==null&&n.dependencies!==null&&Ac(n.dependencies))?(z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(u,H,R),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(u,H,R)),typeof d.componentDidUpdate=="function"&&(s.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===n.memoizedProps&&B===n.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===n.memoizedProps&&B===n.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=H),d.props=u,d.state=H,d.context=R,u=K):(typeof d.componentDidUpdate!="function"||_===n.memoizedProps&&B===n.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===n.memoizedProps&&B===n.memoizedState||(s.flags|=1024),u=!1)}return d=u,Fc(n,s),u=(s.flags&128)!==0,d||u?(d=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:d.render(),s.flags|=1,n!==null&&u?(s.child=Ka(s,n.child,null,f),s.child=Ka(s,null,o,f)):qt(n,s,o,f),s.memoizedState=d.state,n=s.child):n=$i(n,s,f),n}function A_(n,s,o,u){return yl(),s.flags|=256,qt(n,s,o,u),s.child}var Yd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qd(n){return{baseLanes:n,cachePool:cv()}}function Xd(n,s,o){return n=n!==null?n.childLanes&~o:0,s&&(n|=Mn),n}function S_(n,s,o){var u=s.pendingProps,f=!1,d=(s.flags&128)!==0,_;if((_=d)||(_=n!==null&&n.memoizedState===null?!1:(Nt.current&2)!==0),_&&(f=!0,s.flags&=-129),_=(s.flags&32)!==0,s.flags&=-33,n===null){if(Ge){if(f?wr(s):Ir(),Ge){var E=ft,R;if(R=E){e:{for(R=E,E=oi;R.nodeType!==8;){if(!E){E=null;break e}if(R=Gn(R.nextSibling),R===null){E=null;break e}}E=R}E!==null?(s.memoizedState={dehydrated:E,treeContext:zs!==null?{id:zi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},R=yn(18,null,null,0),R.stateNode=E,R.return=s,s.child=R,ln=s,ft=null,R=!0):R=!1}R||Hs(s)}if(E=s.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Pm(E)?s.lanes=32:s.lanes=536870912,null;Gi(s)}return E=u.children,u=u.fallback,f?(Ir(),f=s.mode,E=Hc({mode:"hidden",children:E},f),u=js(u,f,o,null),E.return=s,u.return=s,E.sibling=u,s.child=E,f=s.child,f.memoizedState=Qd(o),f.childLanes=Xd(n,_,o),s.memoizedState=Yd,u):(wr(s),Wd(s,E))}if(R=n.memoizedState,R!==null&&(E=R.dehydrated,E!==null)){if(d)s.flags&256?(wr(s),s.flags&=-257,s=Jd(n,s,o)):s.memoizedState!==null?(Ir(),s.child=n.child,s.flags|=128,s=null):(Ir(),f=u.fallback,E=s.mode,u=Hc({mode:"visible",children:u.children},E),f=js(f,E,o,null),f.flags|=2,u.return=s,f.return=s,u.sibling=f,s.child=u,Ka(s,n.child,null,o),u=s.child,u.memoizedState=Qd(o),u.childLanes=Xd(n,_,o),s.memoizedState=Yd,s=f);else if(wr(s),Pm(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var z=_.dgst;_=z,u=Error(r(419)),u.stack="",u.digest=_,vl({value:u,source:null,stack:null}),s=Jd(n,s,o)}else if(Lt||_l(n,s,o,!1),_=(o&n.childLanes)!==0,Lt||_){if(_=rt,_!==null&&(u=o&-o,u=(u&42)!==0?1:dr(u),u=(u&(_.suspendedLanes|o))!==0?0:u,u!==0&&u!==R.retryLane))throw R.retryLane=u,Va(n,u),Tn(_,n,u),p_;E.data==="$?"||gm(),s=Jd(n,s,o)}else E.data==="$?"?(s.flags|=192,s.child=n.child,s=null):(n=R.treeContext,ft=Gn(E.nextSibling),ln=s,Ge=!0,Fs=null,oi=!1,n!==null&&(Dn[Pn++]=zi,Dn[Pn++]=Bi,Dn[Pn++]=zs,zi=n.id,Bi=n.overflow,zs=s),s=Wd(s,u.children),s.flags|=4096);return s}return f?(Ir(),f=u.fallback,E=s.mode,R=n.child,z=R.sibling,u=ji(R,{mode:"hidden",children:u.children}),u.subtreeFlags=R.subtreeFlags&65011712,z!==null?f=ji(z,f):(f=js(f,E,o,null),f.flags|=2),f.return=s,u.return=s,u.sibling=f,s.child=u,u=f,f=s.child,E=n.child.memoizedState,E===null?E=Qd(o):(R=E.cachePool,R!==null?(z=xt._currentValue,R=R.parent!==z?{parent:z,pool:z}:R):R=cv(),E={baseLanes:E.baseLanes|o,cachePool:R}),f.memoizedState=E,f.childLanes=Xd(n,_,o),s.memoizedState=Yd,u):(wr(s),o=n.child,n=o.sibling,o=ji(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,n!==null&&(_=s.deletions,_===null?(s.deletions=[n],s.flags|=16):_.push(n)),s.child=o,s.memoizedState=null,o)}function Wd(n,s){return s=Hc({mode:"visible",children:s},n.mode),s.return=n,n.child=s}function Hc(n,s){return n=yn(22,n,null,s),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Jd(n,s,o){return Ka(s,n.child,null,o),n=Wd(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function w_(n,s,o){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s),gd(n.return,s,o)}function Zd(n,s,o,u,f){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(d.isBackwards=s,d.rendering=null,d.renderingStartTime=0,d.last=u,d.tail=o,d.tailMode=f)}function I_(n,s,o){var u=s.pendingProps,f=u.revealOrder,d=u.tail;if(qt(n,s,u.children,o),u=Nt.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&w_(n,o,s);else if(n.tag===19)w_(n,o,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(re(Nt,u),f){case"forwards":for(o=s.child,f=null;o!==null;)n=o.alternate,n!==null&&jc(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Zd(s,!1,f,o,d);break;case"backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(n=f.alternate,n!==null&&jc(n)===null){s.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}Zd(s,!0,o,null,d);break;case"together":Zd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function $i(n,s,o){if(n!==null&&(s.dependencies=n.dependencies),Or|=s.lanes,(o&s.childLanes)===0)if(n!==null){if(_l(n,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(n!==null&&s.child!==n.child)throw Error(r(153));if(s.child!==null){for(n=s.child,o=ji(n,n.pendingProps),s.child=o,o.return=s;n.sibling!==null;)n=n.sibling,o=o.sibling=ji(n,n.pendingProps),o.return=s;o.sibling=null}return s.child}function em(n,s){return(n.lanes&s)!==0?!0:(n=n.dependencies,!!(n!==null&&Ac(n)))}function eI(n,s,o){switch(s.tag){case 3:it(s,s.stateNode.containerInfo),br(s,xt,n.memoizedState.cache),yl();break;case 27:case 5:fr(s);break;case 4:it(s,s.stateNode.containerInfo);break;case 10:br(s,s.type,s.memoizedProps.value);break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(wr(s),s.flags|=128,null):(o&s.child.childLanes)!==0?S_(n,s,o):(wr(s),n=$i(n,s,o),n!==null?n.sibling:null);wr(s);break;case 19:var f=(n.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(_l(n,s,o,!1),u=(o&s.childLanes)!==0),f){if(u)return I_(n,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),re(Nt,Nt.current),u)break;return null;case 22:case 23:return s.lanes=0,__(n,s,o);case 24:br(s,xt,n.memoizedState.cache)}return $i(n,s,o)}function R_(n,s,o){if(n!==null)if(n.memoizedProps!==s.pendingProps)Lt=!0;else{if(!em(n,o)&&(s.flags&128)===0)return Lt=!1,eI(n,s,o);Lt=(n.flags&131072)!==0}else Lt=!1,Ge&&(s.flags&1048576)!==0&&iv(s,Tc,s.index);switch(s.lanes=0,s.tag){case 16:e:{n=s.pendingProps;var u=s.elementType,f=u._init;if(u=f(u._payload),s.type=u,typeof u=="function")ud(u)?(n=Ys(u,n),s.tag=1,s=T_(null,s,u,n,o)):(s.tag=0,s=Kd(null,s,u,n,o));else{if(u!=null){if(f=u.$$typeof,f===fe){s.tag=11,s=g_(null,s,u,n,o);break e}else if(f===D){s.tag=14,s=y_(null,s,u,n,o);break e}}throw s=Bt(u)||u,Error(r(306,s,""))}}return s;case 0:return Kd(n,s,s.type,s.pendingProps,o);case 1:return u=s.type,f=Ys(u,s.pendingProps),T_(n,s,u,f,o);case 3:e:{if(it(s,s.stateNode.containerInfo),n===null)throw Error(r(387));u=s.pendingProps;var d=s.memoizedState;f=d.element,Ad(n,s),Il(s,u,null,o);var _=s.memoizedState;if(u=_.cache,br(s,xt,u),u!==d.cache&&yd(s,[xt],o,!0),wl(),u=_.element,d.isDehydrated)if(d={element:u,isDehydrated:!1,cache:_.cache},s.updateQueue.baseState=d,s.memoizedState=d,s.flags&256){s=A_(n,s,u,o);break e}else if(u!==f){f=Nn(Error(r(424)),s),vl(f),s=A_(n,s,u,o);break e}else{switch(n=s.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(ft=Gn(n.firstChild),ln=s,Ge=!0,Fs=null,oi=!0,o=s_(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(yl(),u===f){s=$i(n,s,o);break e}qt(n,s,u,o)}s=s.child}return s;case 26:return Fc(n,s),n===null?(o=O0(s.type,null,s.pendingProps,null))?s.memoizedState=o:Ge||(o=s.type,n=s.pendingProps,u=ih(Se.current).createElement(o),u[It]=s,u[bt]=n,$t(u,o,n),pt(u),s.stateNode=u):s.memoizedState=O0(s.type,n.memoizedProps,s.pendingProps,n.memoizedState),null;case 27:return fr(s),n===null&&Ge&&(u=s.stateNode=C0(s.type,s.pendingProps,Se.current),ln=s,oi=!0,f=ft,Mr(s.type)?(km=f,ft=Gn(u.firstChild)):ft=f),qt(n,s,s.pendingProps.children,o),Fc(n,s),n===null&&(s.flags|=4194304),s.child;case 5:return n===null&&Ge&&((f=u=ft)&&(u=CI(u,s.type,s.pendingProps,oi),u!==null?(s.stateNode=u,ln=s,ft=Gn(u.firstChild),oi=!1,f=!0):f=!1),f||Hs(s)),fr(s),f=s.type,d=s.pendingProps,_=n!==null?n.memoizedProps:null,u=d.children,Nm(f,d)?u=null:_!==null&&Nm(f,_)&&(s.flags|=32),s.memoizedState!==null&&(f=xd(n,s,$w,null,null,o),Yl._currentValue=f),Fc(n,s),qt(n,s,u,o),s.child;case 6:return n===null&&Ge&&((n=o=ft)&&(o=xI(o,s.pendingProps,oi),o!==null?(s.stateNode=o,ln=s,ft=null,n=!0):n=!1),n||Hs(s)),null;case 13:return S_(n,s,o);case 4:return it(s,s.stateNode.containerInfo),u=s.pendingProps,n===null?s.child=Ka(s,null,u,o):qt(n,s,u,o),s.child;case 11:return g_(n,s,s.type,s.pendingProps,o);case 7:return qt(n,s,s.pendingProps,o),s.child;case 8:return qt(n,s,s.pendingProps.children,o),s.child;case 12:return qt(n,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,br(s,s.type,u.value),qt(n,s,u.children,o),s.child;case 9:return f=s.type._context,u=s.pendingProps.children,Gs(s),f=Wt(f),u=u(f),s.flags|=1,qt(n,s,u,o),s.child;case 14:return y_(n,s,s.type,s.pendingProps,o);case 15:return v_(n,s,s.type,s.pendingProps,o);case 19:return I_(n,s,o);case 31:return u=s.pendingProps,o=s.mode,u={mode:u.mode,children:u.children},n===null?(o=Hc(u,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=ji(n.child,u),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return __(n,s,o);case 24:return Gs(s),u=Wt(xt),n===null?(f=bd(),f===null&&(f=rt,d=vd(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=o),f=d),s.memoizedState={parent:u,cache:f},Td(s),br(s,xt,f)):((n.lanes&o)!==0&&(Ad(n,s),Il(s,null,null,o),wl()),f=n.memoizedState,d=s.memoizedState,f.parent!==u?(f={parent:u,cache:u},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),br(s,xt,u)):(u=d.cache,br(s,xt,u),u!==f.cache&&yd(s,[xt],o,!0))),qt(n,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(r(156,s.tag))}function Ki(n){n.flags|=4}function C_(n,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!V0(s)){if(s=kn.current,s!==null&&((Be&4194048)===Be?li!==null:(Be&62914560)!==Be&&(Be&536870912)===0||s!==li))throw Al=Ed,hv;n.flags|=8192}}function qc(n,s){s!==null&&(n.flags|=4),n.flags&16384&&(s=n.tag!==22?Xo():536870912,n.lanes|=s,Wa|=s)}function Pl(n,s){if(!Ge)switch(n.tailMode){case"hidden":s=n.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function lt(n){var s=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(s)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=o,s}function tI(n,s,o){var u=s.pendingProps;switch(dd(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(s),null;case 1:return lt(s),null;case 3:return o=s.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),Hi(xt),Qn(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(gl(s)?Ki(s):n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,av())),lt(s),null;case 26:return o=s.memoizedState,n===null?(Ki(s),o!==null?(lt(s),C_(s,o)):(lt(s),s.flags&=-16777217)):o?o!==n.memoizedState?(Ki(s),lt(s),C_(s,o)):(lt(s),s.flags&=-16777217):(n.memoizedProps!==u&&Ki(s),lt(s),s.flags&=-16777217),null;case 27:Ii(s),o=Se.current;var f=s.type;if(n!==null&&s.stateNode!=null)n.memoizedProps!==u&&Ki(s);else{if(!u){if(s.stateNode===null)throw Error(r(166));return lt(s),null}n=ge.current,gl(s)?rv(s):(n=C0(f,u,o),s.stateNode=n,Ki(s))}return lt(s),null;case 5:if(Ii(s),o=s.type,n!==null&&s.stateNode!=null)n.memoizedProps!==u&&Ki(s);else{if(!u){if(s.stateNode===null)throw Error(r(166));return lt(s),null}if(n=ge.current,gl(s))rv(s);else{switch(f=ih(Se.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}n[It]=s,n[bt]=u;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=n;e:switch($t(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Ki(s)}}return lt(s),s.flags&=-16777217,null;case 6:if(n&&s.stateNode!=null)n.memoizedProps!==u&&Ki(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(r(166));if(n=Se.current,gl(s)){if(n=s.stateNode,o=s.memoizedProps,u=null,f=ln,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}n[It]=s,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||E0(n.nodeValue,o)),n||Hs(s)}else n=ih(n).createTextNode(u),n[It]=s,s.stateNode=n}return lt(s),null;case 13:if(u=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=gl(s),u!==null&&u.dehydrated!==null){if(n===null){if(!f)throw Error(r(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[It]=s}else yl(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;lt(s),f=!1}else f=av(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(Gi(s),s):(Gi(s),null)}if(Gi(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=s.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var d=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(d=u.memoizedState.cachePool.pool),d!==f&&(u.flags|=2048)}return o!==n&&o&&(s.child.flags|=8192),qc(s,s.updateQueue),lt(s),null;case 4:return Qn(),n===null&&wm(s.stateNode.containerInfo),lt(s),null;case 10:return Hi(s.type),lt(s),null;case 19:if(le(Nt),f=s.memoizedState,f===null)return lt(s),null;if(u=(s.flags&128)!==0,d=f.rendering,d===null)if(u)Pl(f,!1);else{if(dt!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(d=jc(n),d!==null){for(s.flags|=128,Pl(f,!1),n=d.updateQueue,s.updateQueue=n,qc(s,n),s.subtreeFlags=0,n=o,o=s.child;o!==null;)nv(o,n),o=o.sibling;return re(Nt,Nt.current&1|2),s.child}n=n.sibling}f.tail!==null&&Sn()>Kc&&(s.flags|=128,u=!0,Pl(f,!1),s.lanes=4194304)}else{if(!u)if(n=jc(d),n!==null){if(s.flags|=128,u=!0,n=n.updateQueue,s.updateQueue=n,qc(s,n),Pl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!d.alternate&&!Ge)return lt(s),null}else 2*Sn()-f.renderingStartTime>Kc&&o!==536870912&&(s.flags|=128,u=!0,Pl(f,!1),s.lanes=4194304);f.isBackwards?(d.sibling=s.child,s.child=d):(n=f.last,n!==null?n.sibling=d:s.child=d,f.last=d)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=Sn(),s.sibling=null,n=Nt.current,re(Nt,u?n&1|2:n&1),s):(lt(s),null);case 22:case 23:return Gi(s),Rd(),u=s.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(lt(s),s.subtreeFlags&6&&(s.flags|=8192)):lt(s),o=s.updateQueue,o!==null&&qc(s,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),n!==null&&le($s),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Hi(xt),lt(s),null;case 25:return null;case 30:return null}throw Error(r(156,s.tag))}function nI(n,s){switch(dd(s),s.tag){case 1:return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return Hi(xt),Qn(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 26:case 27:case 5:return Ii(s),null;case 13:if(Gi(s),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(r(340));yl()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return le(Nt),null;case 4:return Qn(),null;case 10:return Hi(s.type),null;case 22:case 23:return Gi(s),Rd(),n!==null&&le($s),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 24:return Hi(xt),null;case 25:return null;default:return null}}function x_(n,s){switch(dd(s),s.tag){case 3:Hi(xt),Qn();break;case 26:case 27:case 5:Ii(s);break;case 4:Qn();break;case 13:Gi(s);break;case 19:le(Nt);break;case 10:Hi(s.type);break;case 22:case 23:Gi(s),Rd(),n!==null&&le($s);break;case 24:Hi(xt)}}function kl(n,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&n)===n){u=void 0;var d=o.create,_=o.inst;u=d(),_.destroy=u}o=o.next}while(o!==f)}}catch(E){nt(s,s.return,E)}}function Rr(n,s,o){try{var u=s.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var d=f.next;u=d;do{if((u.tag&n)===n){var _=u.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,f=s;var R=o,z=E;try{z()}catch(K){nt(f,R,K)}}}u=u.next}while(u!==d)}}catch(K){nt(s,s.return,K)}}function N_(n){var s=n.updateQueue;if(s!==null){var o=n.stateNode;try{yv(s,o)}catch(u){nt(n,n.return,u)}}}function O_(n,s,o){o.props=Ys(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){nt(n,s,u)}}function Ml(n,s){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(f){nt(n,s,f)}}function ui(n,s){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){nt(n,s,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){nt(n,s,f)}else o.current=null}function D_(n){var s=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){nt(n,n.return,f)}}function tm(n,s,o){try{var u=n.stateNode;AI(u,n.type,o,s),u[bt]=s}catch(f){nt(n,n.return,f)}}function P_(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Mr(n.type)||n.tag===4}function nm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||P_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Mr(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function im(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(n),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=nh));else if(u!==4&&(u===27&&Mr(n.type)&&(o=n.stateNode,s=null),n=n.child,n!==null))for(im(n,s,o),n=n.sibling;n!==null;)im(n,s,o),n=n.sibling}function Gc(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?o.insertBefore(n,s):o.appendChild(n);else if(u!==4&&(u===27&&Mr(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(Gc(n,s,o),n=n.sibling;n!==null;)Gc(n,s,o),n=n.sibling}function k_(n){var s=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);$t(s,u,o),s[It]=n,s[bt]=o}catch(d){nt(n,n.return,d)}}var Yi=!1,yt=!1,rm=!1,M_=typeof WeakSet=="function"?WeakSet:Set,Ut=null;function iI(n,s){if(n=n.containerInfo,Cm=uh,n=$y(n),nd(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,d=u.focusNode;u=u.focusOffset;try{o.nodeType,d.nodeType}catch{o=null;break e}var _=0,E=-1,R=-1,z=0,K=0,Q=n,B=null;t:for(;;){for(var H;Q!==o||f!==0&&Q.nodeType!==3||(E=_+f),Q!==d||u!==0&&Q.nodeType!==3||(R=_+u),Q.nodeType===3&&(_+=Q.nodeValue.length),(H=Q.firstChild)!==null;)B=Q,Q=H;for(;;){if(Q===n)break t;if(B===o&&++z===f&&(E=_),B===d&&++K===u&&(R=_),(H=Q.nextSibling)!==null)break;Q=B,B=Q.parentNode}Q=H}o=E===-1||R===-1?null:{start:E,end:R}}else o=null}o=o||{start:0,end:0}}else o=null;for(xm={focusedElem:n,selectionRange:o},uh=!1,Ut=s;Ut!==null;)if(s=Ut,n=s.child,(s.subtreeFlags&1024)!==0&&n!==null)n.return=s,Ut=n;else for(;Ut!==null;){switch(s=Ut,d=s.alternate,n=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,o=s,f=d.memoizedProps,d=d.memoizedState,u=o.stateNode;try{var Ee=Ys(o.type,f,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(Ee,d),u.__reactInternalSnapshotBeforeUpdate=n}catch(ye){nt(o,o.return,ye)}}break;case 3:if((n&1024)!==0){if(n=s.stateNode.containerInfo,o=n.nodeType,o===9)Dm(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Dm(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(r(163))}if(n=s.sibling,n!==null){n.return=s.return,Ut=n;break}Ut=s.return}}function V_(n,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Cr(n,o),u&4&&kl(5,o);break;case 1:if(Cr(n,o),u&4)if(n=o.stateNode,s===null)try{n.componentDidMount()}catch(_){nt(o,o.return,_)}else{var f=Ys(o.type,s.memoizedProps);s=s.memoizedState;try{n.componentDidUpdate(f,s,n.__reactInternalSnapshotBeforeUpdate)}catch(_){nt(o,o.return,_)}}u&64&&N_(o),u&512&&Ml(o,o.return);break;case 3:if(Cr(n,o),u&64&&(n=o.updateQueue,n!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{yv(n,s)}catch(_){nt(o,o.return,_)}}break;case 27:s===null&&u&4&&k_(o);case 26:case 5:Cr(n,o),s===null&&u&4&&D_(o),u&512&&Ml(o,o.return);break;case 12:Cr(n,o);break;case 13:Cr(n,o),u&4&&j_(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=fI.bind(null,o),NI(n,o))));break;case 22:if(u=o.memoizedState!==null||Yi,!u){s=s!==null&&s.memoizedState!==null||yt,f=Yi;var d=yt;Yi=u,(yt=s)&&!d?xr(n,o,(o.subtreeFlags&8772)!==0):Cr(n,o),Yi=f,yt=d}break;case 30:break;default:Cr(n,o)}}function L_(n){var s=n.alternate;s!==null&&(n.alternate=null,L_(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&gr(s)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ot=null,hn=!1;function Qi(n,s,o){for(o=o.child;o!==null;)U_(n,s,o),o=o.sibling}function U_(n,s,o){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(ht,o)}catch{}switch(o.tag){case 26:yt||ui(o,s),Qi(n,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:yt||ui(o,s);var u=ot,f=hn;Mr(o.type)&&(ot=o.stateNode,hn=!1),Qi(n,s,o),ql(o.stateNode),ot=u,hn=f;break;case 5:yt||ui(o,s);case 6:if(u=ot,f=hn,ot=null,Qi(n,s,o),ot=u,hn=f,ot!==null)if(hn)try{(ot.nodeType===9?ot.body:ot.nodeName==="HTML"?ot.ownerDocument.body:ot).removeChild(o.stateNode)}catch(d){nt(o,s,d)}else try{ot.removeChild(o.stateNode)}catch(d){nt(o,s,d)}break;case 18:ot!==null&&(hn?(n=ot,I0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),Jl(n)):I0(ot,o.stateNode));break;case 4:u=ot,f=hn,ot=o.stateNode.containerInfo,hn=!0,Qi(n,s,o),ot=u,hn=f;break;case 0:case 11:case 14:case 15:yt||Rr(2,o,s),yt||Rr(4,o,s),Qi(n,s,o);break;case 1:yt||(ui(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&O_(o,s,u)),Qi(n,s,o);break;case 21:Qi(n,s,o);break;case 22:yt=(u=yt)||o.memoizedState!==null,Qi(n,s,o),yt=u;break;default:Qi(n,s,o)}}function j_(n,s){if(s.memoizedState===null&&(n=s.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Jl(n)}catch(o){nt(s,s.return,o)}}function rI(n){switch(n.tag){case 13:case 19:var s=n.stateNode;return s===null&&(s=n.stateNode=new M_),s;case 22:return n=n.stateNode,s=n._retryCache,s===null&&(s=n._retryCache=new M_),s;default:throw Error(r(435,n.tag))}}function sm(n,s){var o=rI(n);s.forEach(function(u){var f=dI.bind(null,n,u);o.has(u)||(o.add(u),u.then(f,f))})}function vn(n,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],d=n,_=s,E=_;e:for(;E!==null;){switch(E.tag){case 27:if(Mr(E.type)){ot=E.stateNode,hn=!1;break e}break;case 5:ot=E.stateNode,hn=!1;break e;case 3:case 4:ot=E.stateNode.containerInfo,hn=!0;break e}E=E.return}if(ot===null)throw Error(r(160));U_(d,_,f),ot=null,hn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)z_(s,n),s=s.sibling}var qn=null;function z_(n,s){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:vn(s,n),_n(n),u&4&&(Rr(3,n,n.return),kl(3,n),Rr(5,n,n.return));break;case 1:vn(s,n),_n(n),u&512&&(yt||o===null||ui(o,o.return)),u&64&&Yi&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=qn;if(vn(s,n),_n(n),u&512&&(yt||o===null||ui(o,o.return)),u&4){var d=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":d=f.getElementsByTagName("title")[0],(!d||d[As]||d[It]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(u),f.head.insertBefore(d,f.querySelector("head > title"))),$t(d,u,o),d[It]=n,pt(d),u=d;break e;case"link":var _=k0("link","href",f).get(u+(o.href||""));if(_){for(var E=0;E<_.length;E++)if(d=_[E],d.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&d.getAttribute("rel")===(o.rel==null?null:o.rel)&&d.getAttribute("title")===(o.title==null?null:o.title)&&d.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){_.splice(E,1);break t}}d=f.createElement(u),$t(d,u,o),f.head.appendChild(d);break;case"meta":if(_=k0("meta","content",f).get(u+(o.content||""))){for(E=0;E<_.length;E++)if(d=_[E],d.getAttribute("content")===(o.content==null?null:""+o.content)&&d.getAttribute("name")===(o.name==null?null:o.name)&&d.getAttribute("property")===(o.property==null?null:o.property)&&d.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&d.getAttribute("charset")===(o.charSet==null?null:o.charSet)){_.splice(E,1);break t}}d=f.createElement(u),$t(d,u,o),f.head.appendChild(d);break;default:throw Error(r(468,u))}d[It]=n,pt(d),u=d}n.stateNode=u}else M0(f,n.type,n.stateNode);else n.stateNode=P0(f,u,n.memoizedProps);else d!==u?(d===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):d.count--,u===null?M0(f,n.type,n.stateNode):P0(f,u,n.memoizedProps)):u===null&&n.stateNode!==null&&tm(n,n.memoizedProps,o.memoizedProps)}break;case 27:vn(s,n),_n(n),u&512&&(yt||o===null||ui(o,o.return)),o!==null&&u&4&&tm(n,n.memoizedProps,o.memoizedProps);break;case 5:if(vn(s,n),_n(n),u&512&&(yt||o===null||ui(o,o.return)),n.flags&32){f=n.stateNode;try{In(f,"")}catch(H){nt(n,n.return,H)}}u&4&&n.stateNode!=null&&(f=n.memoizedProps,tm(n,f,o!==null?o.memoizedProps:f)),u&1024&&(rm=!0);break;case 6:if(vn(s,n),_n(n),u&4){if(n.stateNode===null)throw Error(r(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(H){nt(n,n.return,H)}}break;case 3:if(ah=null,f=qn,qn=rh(s.containerInfo),vn(s,n),qn=f,_n(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Jl(s.containerInfo)}catch(H){nt(n,n.return,H)}rm&&(rm=!1,B_(n));break;case 4:u=qn,qn=rh(n.stateNode.containerInfo),vn(s,n),_n(n),qn=u;break;case 12:vn(s,n),_n(n);break;case 13:vn(s,n),_n(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(hm=Sn()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,sm(n,u)));break;case 22:f=n.memoizedState!==null;var R=o!==null&&o.memoizedState!==null,z=Yi,K=yt;if(Yi=z||f,yt=K||R,vn(s,n),yt=K,Yi=z,_n(n),u&8192)e:for(s=n.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||R||Yi||yt||Qs(n)),o=null,s=n;;){if(s.tag===5||s.tag===26){if(o===null){R=o=s;try{if(d=R.stateNode,f)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=R.stateNode;var Q=R.memoizedProps.style,B=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;E.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(H){nt(R,R.return,H)}}}else if(s.tag===6){if(o===null){R=s;try{R.stateNode.nodeValue=f?"":R.memoizedProps}catch(H){nt(R,R.return,H)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===n)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break e;for(;s.sibling===null;){if(s.return===null||s.return===n)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,sm(n,o))));break;case 19:vn(s,n),_n(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,sm(n,u)));break;case 30:break;case 21:break;default:vn(s,n),_n(n)}}function _n(n){var s=n.flags;if(s&2){try{for(var o,u=n.return;u!==null;){if(P_(u)){o=u;break}u=u.return}if(o==null)throw Error(r(160));switch(o.tag){case 27:var f=o.stateNode,d=nm(n);Gc(n,d,f);break;case 5:var _=o.stateNode;o.flags&32&&(In(_,""),o.flags&=-33);var E=nm(n);Gc(n,E,_);break;case 3:case 4:var R=o.stateNode.containerInfo,z=nm(n);im(n,z,R);break;default:throw Error(r(161))}}catch(K){nt(n,n.return,K)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function B_(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var s=n;B_(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),n=n.sibling}}function Cr(n,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)V_(n,s.alternate,s),s=s.sibling}function Qs(n){for(n=n.child;n!==null;){var s=n;switch(s.tag){case 0:case 11:case 14:case 15:Rr(4,s,s.return),Qs(s);break;case 1:ui(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&O_(s,s.return,o),Qs(s);break;case 27:ql(s.stateNode);case 26:case 5:ui(s,s.return),Qs(s);break;case 22:s.memoizedState===null&&Qs(s);break;case 30:Qs(s);break;default:Qs(s)}n=n.sibling}}function xr(n,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,f=n,d=s,_=d.flags;switch(d.tag){case 0:case 11:case 15:xr(f,d,o),kl(4,d);break;case 1:if(xr(f,d,o),u=d,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(z){nt(u,u.return,z)}if(u=d,f=u.updateQueue,f!==null){var E=u.stateNode;try{var R=f.shared.hiddenCallbacks;if(R!==null)for(f.shared.hiddenCallbacks=null,f=0;f<R.length;f++)gv(R[f],E)}catch(z){nt(u,u.return,z)}}o&&_&64&&N_(d),Ml(d,d.return);break;case 27:k_(d);case 26:case 5:xr(f,d,o),o&&u===null&&_&4&&D_(d),Ml(d,d.return);break;case 12:xr(f,d,o);break;case 13:xr(f,d,o),o&&_&4&&j_(f,d);break;case 22:d.memoizedState===null&&xr(f,d,o),Ml(d,d.return);break;case 30:break;default:xr(f,d,o)}s=s.sibling}}function am(n,s){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(n=s.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&bl(o))}function om(n,s){n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&bl(n))}function ci(n,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)F_(n,s,o,u),s=s.sibling}function F_(n,s,o,u){var f=s.flags;switch(s.tag){case 0:case 11:case 15:ci(n,s,o,u),f&2048&&kl(9,s);break;case 1:ci(n,s,o,u);break;case 3:ci(n,s,o,u),f&2048&&(n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&bl(n)));break;case 12:if(f&2048){ci(n,s,o,u),n=s.stateNode;try{var d=s.memoizedProps,_=d.id,E=d.onPostCommit;typeof E=="function"&&E(_,s.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(R){nt(s,s.return,R)}}else ci(n,s,o,u);break;case 13:ci(n,s,o,u);break;case 23:break;case 22:d=s.stateNode,_=s.alternate,s.memoizedState!==null?d._visibility&2?ci(n,s,o,u):Vl(n,s):d._visibility&2?ci(n,s,o,u):(d._visibility|=2,Ya(n,s,o,u,(s.subtreeFlags&10256)!==0)),f&2048&&am(_,s);break;case 24:ci(n,s,o,u),f&2048&&om(s.alternate,s);break;default:ci(n,s,o,u)}}function Ya(n,s,o,u,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var d=n,_=s,E=o,R=u,z=_.flags;switch(_.tag){case 0:case 11:case 15:Ya(d,_,E,R,f),kl(8,_);break;case 23:break;case 22:var K=_.stateNode;_.memoizedState!==null?K._visibility&2?Ya(d,_,E,R,f):Vl(d,_):(K._visibility|=2,Ya(d,_,E,R,f)),f&&z&2048&&am(_.alternate,_);break;case 24:Ya(d,_,E,R,f),f&&z&2048&&om(_.alternate,_);break;default:Ya(d,_,E,R,f)}s=s.sibling}}function Vl(n,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=n,u=s,f=u.flags;switch(u.tag){case 22:Vl(o,u),f&2048&&am(u.alternate,u);break;case 24:Vl(o,u),f&2048&&om(u.alternate,u);break;default:Vl(o,u)}s=s.sibling}}var Ll=8192;function Qa(n){if(n.subtreeFlags&Ll)for(n=n.child;n!==null;)H_(n),n=n.sibling}function H_(n){switch(n.tag){case 26:Qa(n),n.flags&Ll&&n.memoizedState!==null&&HI(qn,n.memoizedState,n.memoizedProps);break;case 5:Qa(n);break;case 3:case 4:var s=qn;qn=rh(n.stateNode.containerInfo),Qa(n),qn=s;break;case 22:n.memoizedState===null&&(s=n.alternate,s!==null&&s.memoizedState!==null?(s=Ll,Ll=16777216,Qa(n),Ll=s):Qa(n));break;default:Qa(n)}}function q_(n){var s=n.alternate;if(s!==null&&(n=s.child,n!==null)){s.child=null;do s=n.sibling,n.sibling=null,n=s;while(n!==null)}}function Ul(n){var s=n.deletions;if((n.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];Ut=u,$_(u,n)}q_(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)G_(n),n=n.sibling}function G_(n){switch(n.tag){case 0:case 11:case 15:Ul(n),n.flags&2048&&Rr(9,n,n.return);break;case 3:Ul(n);break;case 12:Ul(n);break;case 22:var s=n.stateNode;n.memoizedState!==null&&s._visibility&2&&(n.return===null||n.return.tag!==13)?(s._visibility&=-3,$c(n)):Ul(n);break;default:Ul(n)}}function $c(n){var s=n.deletions;if((n.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];Ut=u,$_(u,n)}q_(n)}for(n=n.child;n!==null;){switch(s=n,s.tag){case 0:case 11:case 15:Rr(8,s,s.return),$c(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,$c(s));break;default:$c(s)}n=n.sibling}}function $_(n,s){for(;Ut!==null;){var o=Ut;switch(o.tag){case 0:case 11:case 15:Rr(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:bl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Ut=u;else e:for(o=n;Ut!==null;){u=Ut;var f=u.sibling,d=u.return;if(L_(u),u===o){Ut=null;break e}if(f!==null){f.return=d,Ut=f;break e}Ut=d}}}var sI={getCacheForType:function(n){var s=Wt(xt),o=s.data.get(n);return o===void 0&&(o=n(),s.data.set(n,o)),o}},aI=typeof WeakMap=="function"?WeakMap:Map,Qe=0,rt=null,Me=null,Be=0,Xe=0,bn=null,Nr=!1,Xa=!1,lm=!1,Xi=0,dt=0,Or=0,Xs=0,um=0,Mn=0,Wa=0,jl=null,fn=null,cm=!1,hm=0,Kc=1/0,Yc=null,Dr=null,Gt=0,Pr=null,Ja=null,Za=0,fm=0,dm=null,K_=null,zl=0,mm=null;function En(){if((Qe&2)!==0&&Be!==0)return Be&-Be;if($.T!==null){var n=za;return n!==0?n:Em()}return mr()}function Y_(){Mn===0&&(Mn=(Be&536870912)===0||Ge?Qo():536870912);var n=kn.current;return n!==null&&(n.flags|=32),Mn}function Tn(n,s,o){(n===rt&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)&&(eo(n,0),kr(n,Be,Mn,!1)),Ci(n,o),((Qe&2)===0||n!==rt)&&(n===rt&&((Qe&2)===0&&(Xs|=o),dt===4&&kr(n,Be,Mn,!1)),hi(n))}function Q_(n,s,o){if((Qe&6)!==0)throw Error(r(327));var u=!o&&(s&124)===0&&(s&n.expiredLanes)===0||Ts(n,s),f=u?uI(n,s):ym(n,s,!0),d=u;do{if(f===0){Xa&&!u&&kr(n,s,0,!1);break}else{if(o=n.current.alternate,d&&!oI(o)){f=ym(n,s,!1),d=!1;continue}if(f===2){if(d=s,n.errorRecoveryDisabledLanes&d)var _=0;else _=n.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){s=_;e:{var E=n;f=jl;var R=E.current.memoizedState.isDehydrated;if(R&&(eo(E,_).flags|=256),_=ym(E,_,!1),_!==2){if(lm&&!R){E.errorRecoveryDisabledLanes|=d,Xs|=d,f=4;break e}d=fn,fn=f,d!==null&&(fn===null?fn=d:fn.push.apply(fn,d))}f=_}if(d=!1,f!==2)continue}}if(f===1){eo(n,0),kr(n,s,0,!0);break}e:{switch(u=n,d=f,d){case 0:case 1:throw Error(r(345));case 4:if((s&4194048)!==s)break;case 6:kr(u,s,Mn,!Nr);break e;case 2:fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((s&62914560)===s&&(f=hm+300-Sn(),10<f)){if(kr(u,s,Mn,!Nr),ya(u,0,!0)!==0)break e;u.timeoutHandle=S0(X_.bind(null,u,o,fn,Yc,cm,s,Mn,Xs,Wa,Nr,d,2,-0,0),f);break e}X_(u,o,fn,Yc,cm,s,Mn,Xs,Wa,Nr,d,0,-0,0)}}break}while(!0);hi(n)}function X_(n,s,o,u,f,d,_,E,R,z,K,Q,B,H){if(n.timeoutHandle=-1,Q=s.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(Kl={stylesheets:null,count:0,unsuspend:FI},H_(s),Q=qI(),Q!==null)){n.cancelPendingCommit=Q(i0.bind(null,n,s,d,o,u,f,_,E,R,K,1,B,H)),kr(n,d,_,!z);return}i0(n,s,d,o,u,f,_,E,R)}function oI(n){for(var s=n;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],d=f.getSnapshot;f=f.value;try{if(!gn(d(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function kr(n,s,o,u){s&=~um,s&=~Xs,n.suspendedLanes|=s,n.pingedLanes&=~s,u&&(n.warmLanes|=s),u=n.expirationTimes;for(var f=s;0<f;){var d=31-Xt(f),_=1<<d;u[d]=-1,f&=~_}o!==0&&Xn(n,o,s)}function Qc(){return(Qe&6)===0?(Bl(0),!1):!0}function pm(){if(Me!==null){if(Xe===0)var n=Me.return;else n=Me,Fi=qs=null,Dd(n),$a=null,Ol=0,n=Me;for(;n!==null;)x_(n.alternate,n),n=n.return;Me=null}}function eo(n,s){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,wI(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),pm(),rt=n,Me=o=ji(n.current,null),Be=s,Xe=0,bn=null,Nr=!1,Xa=Ts(n,s),lm=!1,Wa=Mn=um=Xs=Or=dt=0,fn=jl=null,cm=!1,(s&8)!==0&&(s|=s&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=s;0<u;){var f=31-Xt(u),d=1<<f;s|=n[f],u&=~d}return Xi=s,yc(),o}function W_(n,s){Ne=null,$.H=Vc,s===Tl||s===Ic?(s=mv(),Xe=3):s===hv?(s=mv(),Xe=4):Xe=s===p_?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,bn=s,Me===null&&(dt=1,Bc(n,Nn(s,n.current)))}function J_(){var n=$.H;return $.H=Vc,n===null?Vc:n}function Z_(){var n=$.A;return $.A=sI,n}function gm(){dt=4,Nr||(Be&4194048)!==Be&&kn.current!==null||(Xa=!0),(Or&134217727)===0&&(Xs&134217727)===0||rt===null||kr(rt,Be,Mn,!1)}function ym(n,s,o){var u=Qe;Qe|=2;var f=J_(),d=Z_();(rt!==n||Be!==s)&&(Yc=null,eo(n,s)),s=!1;var _=dt;e:do try{if(Xe!==0&&Me!==null){var E=Me,R=bn;switch(Xe){case 8:pm(),_=6;break e;case 3:case 2:case 9:case 6:kn.current===null&&(s=!0);var z=Xe;if(Xe=0,bn=null,to(n,E,R,z),o&&Xa){_=0;break e}break;default:z=Xe,Xe=0,bn=null,to(n,E,R,z)}}lI(),_=dt;break}catch(K){W_(n,K)}while(!0);return s&&n.shellSuspendCounter++,Fi=qs=null,Qe=u,$.H=f,$.A=d,Me===null&&(rt=null,Be=0,yc()),_}function lI(){for(;Me!==null;)e0(Me)}function uI(n,s){var o=Qe;Qe|=2;var u=J_(),f=Z_();rt!==n||Be!==s?(Yc=null,Kc=Sn()+500,eo(n,s)):Xa=Ts(n,s);e:do try{if(Xe!==0&&Me!==null){s=Me;var d=bn;t:switch(Xe){case 1:Xe=0,bn=null,to(n,s,d,1);break;case 2:case 9:if(fv(d)){Xe=0,bn=null,t0(s);break}s=function(){Xe!==2&&Xe!==9||rt!==n||(Xe=7),hi(n)},d.then(s,s);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:fv(d)?(Xe=0,bn=null,t0(s)):(Xe=0,bn=null,to(n,s,d,7));break;case 5:var _=null;switch(Me.tag){case 26:_=Me.memoizedState;case 5:case 27:var E=Me;if(!_||V0(_)){Xe=0,bn=null;var R=E.sibling;if(R!==null)Me=R;else{var z=E.return;z!==null?(Me=z,Xc(z)):Me=null}break t}}Xe=0,bn=null,to(n,s,d,5);break;case 6:Xe=0,bn=null,to(n,s,d,6);break;case 8:pm(),dt=6;break e;default:throw Error(r(462))}}cI();break}catch(K){W_(n,K)}while(!0);return Fi=qs=null,$.H=u,$.A=f,Qe=o,Me!==null?0:(rt=null,Be=0,yc(),dt)}function cI(){for(;Me!==null&&!Go();)e0(Me)}function e0(n){var s=R_(n.alternate,n,Xi);n.memoizedProps=n.pendingProps,s===null?Xc(n):Me=s}function t0(n){var s=n,o=s.alternate;switch(s.tag){case 15:case 0:s=E_(o,s,s.pendingProps,s.type,void 0,Be);break;case 11:s=E_(o,s,s.pendingProps,s.type.render,s.ref,Be);break;case 5:Dd(s);default:x_(o,s),s=Me=nv(s,Xi),s=R_(o,s,Xi)}n.memoizedProps=n.pendingProps,s===null?Xc(n):Me=s}function to(n,s,o,u){Fi=qs=null,Dd(s),$a=null,Ol=0;var f=s.return;try{if(Zw(n,f,s,o,Be)){dt=1,Bc(n,Nn(o,n.current)),Me=null;return}}catch(d){if(f!==null)throw Me=f,d;dt=1,Bc(n,Nn(o,n.current)),Me=null;return}s.flags&32768?(Ge||u===1?n=!0:Xa||(Be&536870912)!==0?n=!1:(Nr=n=!0,(u===2||u===9||u===3||u===6)&&(u=kn.current,u!==null&&u.tag===13&&(u.flags|=16384))),n0(s,n)):Xc(s)}function Xc(n){var s=n;do{if((s.flags&32768)!==0){n0(s,Nr);return}n=s.return;var o=tI(s.alternate,s,Xi);if(o!==null){Me=o;return}if(s=s.sibling,s!==null){Me=s;return}Me=s=n}while(s!==null);dt===0&&(dt=5)}function n0(n,s){do{var o=nI(n.alternate,n);if(o!==null){o.flags&=32767,Me=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(n=n.sibling,n!==null)){Me=n;return}Me=n=o}while(n!==null);dt=6,Me=null}function i0(n,s,o,u,f,d,_,E,R){n.cancelPendingCommit=null;do Wc();while(Gt!==0);if((Qe&6)!==0)throw Error(r(327));if(s!==null){if(s===n.current)throw Error(r(177));if(d=s.lanes|s.childLanes,d|=od,Wo(n,o,d,_,E,R),n===rt&&(Me=rt=null,Be=0),Ja=s,Pr=n,Za=o,fm=d,dm=f,K_=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,mI(vs,function(){return l0(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=$.T,$.T=null,f=oe.p,oe.p=2,_=Qe,Qe|=4;try{iI(n,s,o)}finally{Qe=_,oe.p=f,$.T=u}}Gt=1,r0(),s0(),a0()}}function r0(){if(Gt===1){Gt=0;var n=Pr,s=Ja,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=$.T,$.T=null;var u=oe.p;oe.p=2;var f=Qe;Qe|=4;try{z_(s,n);var d=xm,_=$y(n.containerInfo),E=d.focusedElem,R=d.selectionRange;if(_!==E&&E&&E.ownerDocument&&Gy(E.ownerDocument.documentElement,E)){if(R!==null&&nd(E)){var z=R.start,K=R.end;if(K===void 0&&(K=z),"selectionStart"in E)E.selectionStart=z,E.selectionEnd=Math.min(K,E.value.length);else{var Q=E.ownerDocument||document,B=Q&&Q.defaultView||window;if(B.getSelection){var H=B.getSelection(),Ee=E.textContent.length,ye=Math.min(R.start,Ee),et=R.end===void 0?ye:Math.min(R.end,Ee);!H.extend&&ye>et&&(_=et,et=ye,ye=_);var M=qy(E,ye),O=qy(E,et);if(M&&O&&(H.rangeCount!==1||H.anchorNode!==M.node||H.anchorOffset!==M.offset||H.focusNode!==O.node||H.focusOffset!==O.offset)){var U=Q.createRange();U.setStart(M.node,M.offset),H.removeAllRanges(),ye>et?(H.addRange(U),H.extend(O.node,O.offset)):(U.setEnd(O.node,O.offset),H.addRange(U))}}}}for(Q=[],H=E;H=H.parentNode;)H.nodeType===1&&Q.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<Q.length;E++){var Y=Q[E];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}uh=!!Cm,xm=Cm=null}finally{Qe=f,oe.p=u,$.T=o}}n.current=s,Gt=2}}function s0(){if(Gt===2){Gt=0;var n=Pr,s=Ja,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=$.T,$.T=null;var u=oe.p;oe.p=2;var f=Qe;Qe|=4;try{V_(n,s.alternate,s)}finally{Qe=f,oe.p=u,$.T=o}}Gt=3}}function a0(){if(Gt===4||Gt===3){Gt=0,$u();var n=Pr,s=Ja,o=Za,u=K_;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Gt=5:(Gt=0,Ja=Pr=null,o0(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Dr=null),va(o),s=s.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(ht,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=$.T,f=oe.p,oe.p=2,$.T=null;try{for(var d=n.onRecoverableError,_=0;_<u.length;_++){var E=u[_];d(E.value,{componentStack:E.stack})}}finally{$.T=s,oe.p=f}}(Za&3)!==0&&Wc(),hi(n),f=n.pendingLanes,(o&4194090)!==0&&(f&42)!==0?n===mm?zl++:(zl=0,mm=n):zl=0,Bl(0)}}function o0(n,s){(n.pooledCacheLanes&=s)===0&&(s=n.pooledCache,s!=null&&(n.pooledCache=null,bl(s)))}function Wc(n){return r0(),s0(),a0(),l0()}function l0(){if(Gt!==5)return!1;var n=Pr,s=fm;fm=0;var o=va(Za),u=$.T,f=oe.p;try{oe.p=32>o?32:o,$.T=null,o=dm,dm=null;var d=Pr,_=Za;if(Gt=0,Ja=Pr=null,Za=0,(Qe&6)!==0)throw Error(r(331));var E=Qe;if(Qe|=4,G_(d.current),F_(d,d.current,_,o),Qe=E,Bl(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(ht,d)}catch{}return!0}finally{oe.p=f,$.T=u,o0(n,s)}}function u0(n,s,o){s=Nn(o,s),s=$d(n.stateNode,s,2),n=Ar(n,s,2),n!==null&&(Ci(n,2),hi(n))}function nt(n,s,o){if(n.tag===3)u0(n,n,o);else for(;s!==null;){if(s.tag===3){u0(s,n,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Dr===null||!Dr.has(u))){n=Nn(o,n),o=d_(2),u=Ar(s,o,2),u!==null&&(m_(o,u,s,n),Ci(u,2),hi(u));break}}s=s.return}}function vm(n,s,o){var u=n.pingCache;if(u===null){u=n.pingCache=new aI;var f=new Set;u.set(s,f)}else f=u.get(s),f===void 0&&(f=new Set,u.set(s,f));f.has(o)||(lm=!0,f.add(o),n=hI.bind(null,n,s,o),s.then(n,n))}function hI(n,s,o){var u=n.pingCache;u!==null&&u.delete(s),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,rt===n&&(Be&o)===o&&(dt===4||dt===3&&(Be&62914560)===Be&&300>Sn()-hm?(Qe&2)===0&&eo(n,0):um|=o,Wa===Be&&(Wa=0)),hi(n)}function c0(n,s){s===0&&(s=Xo()),n=Va(n,s),n!==null&&(Ci(n,s),hi(n))}function fI(n){var s=n.memoizedState,o=0;s!==null&&(o=s.retryLane),c0(n,o)}function dI(n,s){var o=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(r(314))}u!==null&&u.delete(s),c0(n,o)}function mI(n,s){return gs(n,s)}var Jc=null,no=null,_m=!1,Zc=!1,bm=!1,Ws=0;function hi(n){n!==no&&n.next===null&&(no===null?Jc=no=n:no=no.next=n),Zc=!0,_m||(_m=!0,gI())}function Bl(n,s){if(!bm&&Zc){bm=!0;do for(var o=!1,u=Jc;u!==null;){if(n!==0){var f=u.pendingLanes;if(f===0)var d=0;else{var _=u.suspendedLanes,E=u.pingedLanes;d=(1<<31-Xt(42|n)+1)-1,d&=f&~(_&~E),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(o=!0,m0(u,d))}else d=Be,d=ya(u,u===rt?d:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(d&3)===0||Ts(u,d)||(o=!0,m0(u,d));u=u.next}while(o);bm=!1}}function pI(){h0()}function h0(){Zc=_m=!1;var n=0;Ws!==0&&(SI()&&(n=Ws),Ws=0);for(var s=Sn(),o=null,u=Jc;u!==null;){var f=u.next,d=f0(u,s);d===0?(u.next=null,o===null?Jc=f:o.next=f,f===null&&(no=o)):(o=u,(n!==0||(d&3)!==0)&&(Zc=!0)),u=f}Bl(n)}function f0(n,s){for(var o=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var _=31-Xt(d),E=1<<_,R=f[_];R===-1?((E&o)===0||(E&u)!==0)&&(f[_]=Yo(E,s)):R<=s&&(n.expiredLanes|=E),d&=~E}if(s=rt,o=Be,o=ya(n,n===s?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===s&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&ys(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||Ts(n,o)){if(s=o&-o,s===n.callbackPriority)return s;switch(u!==null&&ys(u),va(o)){case 2:case 8:o=pa;break;case 32:o=vs;break;case 268435456:o=ga;break;default:o=vs}return u=d0.bind(null,n),o=gs(o,u),n.callbackPriority=s,n.callbackNode=o,s}return u!==null&&u!==null&&ys(u),n.callbackPriority=2,n.callbackNode=null,2}function d0(n,s){if(Gt!==0&&Gt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(Wc()&&n.callbackNode!==o)return null;var u=Be;return u=ya(n,n===rt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(Q_(n,u,s),f0(n,Sn()),n.callbackNode!=null&&n.callbackNode===o?d0.bind(null,n):null)}function m0(n,s){if(Wc())return null;Q_(n,s,!0)}function gI(){II(function(){(Qe&6)!==0?gs($o,pI):h0()})}function Em(){return Ws===0&&(Ws=Qo()),Ws}function p0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Sa(""+n)}function g0(n,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,n.id&&o.setAttribute("form",n.id),s.parentNode.insertBefore(o,s),n=new FormData(n),o.parentNode.removeChild(o),n}function yI(n,s,o,u,f){if(s==="submit"&&o&&o.stateNode===f){var d=p0((f[bt]||null).action),_=u.submitter;_&&(s=(s=_[bt]||null)?p0(s.formAction):_.getAttribute("formAction"),s!==null&&(d=s,_=null));var E=new wa("action","action",null,u,f);n.push({event:E,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Ws!==0){var R=_?g0(f,_):new FormData(f);Bd(o,{pending:!0,data:R,method:f.method,action:d},null,R)}}else typeof d=="function"&&(E.preventDefault(),R=_?g0(f,_):new FormData(f),Bd(o,{pending:!0,data:R,method:f.method,action:d},d,R))},currentTarget:f}]})}}for(var Tm=0;Tm<ad.length;Tm++){var Am=ad[Tm],vI=Am.toLowerCase(),_I=Am[0].toUpperCase()+Am.slice(1);Hn(vI,"on"+_I)}Hn(Qy,"onAnimationEnd"),Hn(Xy,"onAnimationIteration"),Hn(Wy,"onAnimationStart"),Hn("dblclick","onDoubleClick"),Hn("focusin","onFocus"),Hn("focusout","onBlur"),Hn(Vw,"onTransitionRun"),Hn(Lw,"onTransitionStart"),Hn(Uw,"onTransitionCancel"),Hn(Jy,"onTransitionEnd"),Ni("onMouseEnter",["mouseout","mouseover"]),Ni("onMouseLeave",["mouseout","mouseover"]),Ni("onPointerEnter",["pointerout","pointerover"]),Ni("onPointerLeave",["pointerout","pointerover"]),Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bI=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fl));function y0(n,s){s=(s&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],f=u.event;u=u.listeners;e:{var d=void 0;if(s)for(var _=u.length-1;0<=_;_--){var E=u[_],R=E.instance,z=E.currentTarget;if(E=E.listener,R!==d&&f.isPropagationStopped())break e;d=E,f.currentTarget=z;try{d(f)}catch(K){zc(K)}f.currentTarget=null,d=R}else for(_=0;_<u.length;_++){if(E=u[_],R=E.instance,z=E.currentTarget,E=E.listener,R!==d&&f.isPropagationStopped())break e;d=E,f.currentTarget=z;try{d(f)}catch(K){zc(K)}f.currentTarget=null,d=R}}}}function Ve(n,s){var o=s[Zo];o===void 0&&(o=s[Zo]=new Set);var u=n+"__bubble";o.has(u)||(v0(s,n,2,!1),o.add(u))}function Sm(n,s,o){var u=0;s&&(u|=4),v0(o,n,u,s)}var eh="_reactListening"+Math.random().toString(36).slice(2);function wm(n){if(!n[eh]){n[eh]=!0,el.forEach(function(o){o!=="selectionchange"&&(bI.has(o)||Sm(o,!1,n),Sm(o,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[eh]||(s[eh]=!0,Sm("selectionchange",!1,s))}}function v0(n,s,o,u){switch(F0(s)){case 2:var f=KI;break;case 8:f=YI;break;default:f=jm}o=f.bind(null,s,o,n),f=void 0,!Cn||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(s,o,{capture:!0,passive:f}):n.addEventListener(s,o,!0):f!==void 0?n.addEventListener(s,o,{passive:f}):n.addEventListener(s,o,!1)}function Im(n,s,o,u,f){var d=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var _=u.tag;if(_===3||_===4){var E=u.stateNode.containerInfo;if(E===f)break;if(_===4)for(_=u.return;_!==null;){var R=_.tag;if((R===3||R===4)&&_.stateNode.containerInfo===f)return;_=_.return}for(;E!==null;){if(_=xi(E),_===null)return;if(R=_.tag,R===5||R===6||R===26||R===27){u=d=_;continue e}E=E.parentNode}}u=u.return}nc(function(){var z=d,K=Rn(o),Q=[];e:{var B=Zy.get(n);if(B!==void 0){var H=wa,Ee=n;switch(n){case"keypress":if(ni(o)===0)break e;case"keydown":case"keyup":H=Oa;break;case"focusin":Ee="focus",H=Ca;break;case"focusout":Ee="blur",H=Ca;break;case"beforeblur":case"afterblur":H=Ca;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=xn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Jf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=cc;break;case Qy:case Xy:case Wy:H=xa;break;case Jy:H=fc;break;case"scroll":case"scrollend":H=ic;break;case"wheel":H=Da;break;case"copy":case"cut":case"paste":H=Na;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=fl;break;case"toggle":case"beforetoggle":H=mc}var ye=(s&4)!==0,et=!ye&&(n==="scroll"||n==="scrollend"),M=ye?B!==null?B+"Capture":null:B;ye=[];for(var O=z,U;O!==null;){var Y=O;if(U=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||U===null||M===null||(Y=Ns(O,M),Y!=null&&ye.push(Hl(O,Y,U))),et)break;O=O.return}0<ye.length&&(B=new H(B,Ee,null,o,K),Q.push({event:B,listeners:ye}))}}if((s&7)===0){e:{if(B=n==="mouseover"||n==="pointerover",H=n==="mouseout"||n==="pointerout",B&&o!==Pi&&(Ee=o.relatedTarget||o.fromElement)&&(xi(Ee)||Ee[wn]))break e;if((H||B)&&(B=K.window===K?K:(B=K.ownerDocument)?B.defaultView||B.parentWindow:window,H?(Ee=o.relatedTarget||o.toElement,H=z,Ee=Ee?xi(Ee):null,Ee!==null&&(et=l(Ee),ye=Ee.tag,Ee!==et||ye!==5&&ye!==27&&ye!==6)&&(Ee=null)):(H=null,Ee=z),H!==Ee)){if(ye=xn,Y="onMouseLeave",M="onMouseEnter",O="mouse",(n==="pointerout"||n==="pointerover")&&(ye=fl,Y="onPointerLeave",M="onPointerEnter",O="pointer"),et=H==null?B:Jn(H),U=Ee==null?B:Jn(Ee),B=new ye(Y,O+"leave",H,o,K),B.target=et,B.relatedTarget=U,Y=null,xi(K)===z&&(ye=new ye(M,O+"enter",Ee,o,K),ye.target=U,ye.relatedTarget=et,Y=ye),et=Y,H&&Ee)t:{for(ye=H,M=Ee,O=0,U=ye;U;U=io(U))O++;for(U=0,Y=M;Y;Y=io(Y))U++;for(;0<O-U;)ye=io(ye),O--;for(;0<U-O;)M=io(M),U--;for(;O--;){if(ye===M||M!==null&&ye===M.alternate)break t;ye=io(ye),M=io(M)}ye=null}else ye=null;H!==null&&_0(Q,B,H,ye,!1),Ee!==null&&et!==null&&_0(Q,et,Ee,ye,!0)}}e:{if(B=z?Jn(z):window,H=B.nodeName&&B.nodeName.toLowerCase(),H==="select"||H==="input"&&B.type==="file")var he=Uy;else if(Ct(B))if(jy)he=Pw;else{he=Ow;var Pe=Nw}else H=B.nodeName,!H||H.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?z&&sl(z.elementType)&&(he=Uy):he=Dw;if(he&&(he=he(n,z))){Ui(Q,he,o,K);break e}Pe&&Pe(n,B,z),n==="focusout"&&z&&B.type==="number"&&z.memoizedProps.value!=null&&vr(B,"number",B.value)}switch(Pe=z?Jn(z):window,n){case"focusin":(Ct(Pe)||Pe.contentEditable==="true")&&(Pa=Pe,id=z,pl=null);break;case"focusout":pl=id=Pa=null;break;case"mousedown":rd=!0;break;case"contextmenu":case"mouseup":case"dragend":rd=!1,Ky(Q,o,K);break;case"selectionchange":if(Mw)break;case"keydown":case"keyup":Ky(Q,o,K)}var me;if(si)e:{switch(n){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else je?q(n,o)&&(be="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(be="onCompositionStart");be&&(v&&o.locale!=="ko"&&(je||be!=="onCompositionStart"?be==="onCompositionEnd"&&je&&(me=ol()):(ti=K,_r="value"in ti?ti.value:ti.textContent,je=!0)),Pe=th(z,be),0<Pe.length&&(be=new cl(be,n,null,o,K),Q.push({event:be,listeners:Pe}),me?be.data=me:(me=se(o),me!==null&&(be.data=me)))),(me=y?Rt(n,o):ze(n,o))&&(be=th(z,"onBeforeInput"),0<be.length&&(Pe=new cl("onBeforeInput","beforeinput",null,o,K),Q.push({event:Pe,listeners:be}),Pe.data=me)),yI(Q,n,z,o,K)}y0(Q,s)})}function Hl(n,s,o){return{instance:n,listener:s,currentTarget:o}}function th(n,s){for(var o=s+"Capture",u=[];n!==null;){var f=n,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Ns(n,o),f!=null&&u.unshift(Hl(n,f,d)),f=Ns(n,s),f!=null&&u.push(Hl(n,f,d))),n.tag===3)return u;n=n.return}return[]}function io(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function _0(n,s,o,u,f){for(var d=s._reactName,_=[];o!==null&&o!==u;){var E=o,R=E.alternate,z=E.stateNode;if(E=E.tag,R!==null&&R===u)break;E!==5&&E!==26&&E!==27||z===null||(R=z,f?(z=Ns(o,d),z!=null&&_.unshift(Hl(o,z,R))):f||(z=Ns(o,d),z!=null&&_.push(Hl(o,z,R)))),o=o.return}_.length!==0&&n.push({event:s,listeners:_})}var EI=/\r\n?/g,TI=/\u0000|\uFFFD/g;function b0(n){return(typeof n=="string"?n:""+n).replace(EI,`
`).replace(TI,"")}function E0(n,s){return s=b0(s),b0(n)===s}function nh(){}function Ze(n,s,o,u,f,d){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||In(n,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&In(n,""+u);break;case"className":Zn(n,"class",u);break;case"tabIndex":Zn(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Zn(n,o,u);break;case"style":rl(n,u,d);break;case"data":if(s!=="object"){Zn(n,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Sa(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(o==="formAction"?(s!=="input"&&Ze(n,s,"name",f.name,f,null),Ze(n,s,"formEncType",f.formEncType,f,null),Ze(n,s,"formMethod",f.formMethod,f,null),Ze(n,s,"formTarget",f.formTarget,f,null)):(Ze(n,s,"encType",f.encType,f,null),Ze(n,s,"method",f.method,f,null),Ze(n,s,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Sa(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=nh);break;case"onScroll":u!=null&&Ve("scroll",n);break;case"onScrollEnd":u!=null&&Ve("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(r(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=Sa(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":Ve("beforetoggle",n),Ve("toggle",n),yr(n,"popover",u);break;case"xlinkActuate":Ft(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Ft(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Ft(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Ft(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Ft(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Ft(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Ft(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Ft(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Ft(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":yr(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Xf.get(o)||o,yr(n,o,u))}}function Rm(n,s,o,u,f,d){switch(o){case"style":rl(n,u,d);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(r(60));n.innerHTML=o}}break;case"children":typeof u=="string"?In(n,u):(typeof u=="number"||typeof u=="bigint")&&In(n,""+u);break;case"onScroll":u!=null&&Ve("scroll",n);break;case"onScrollEnd":u!=null&&Ve("scrollend",n);break;case"onClick":u!=null&&(n.onclick=nh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_a.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),d=n[bt]||null,d=d!=null?d[o]:null,typeof d=="function"&&n.removeEventListener(s,d,f),typeof u=="function")){typeof d!="function"&&d!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(s,u,f);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):yr(n,o,u)}}}function $t(n,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",n),Ve("load",n);var u=!1,f=!1,d;for(d in o)if(o.hasOwnProperty(d)){var _=o[d];if(_!=null)switch(d){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:Ze(n,s,d,_,o,null)}}f&&Ze(n,s,"srcSet",o.srcSet,o,null),u&&Ze(n,s,"src",o.src,o,null);return;case"input":Ve("invalid",n);var E=d=_=f=null,R=null,z=null;for(u in o)if(o.hasOwnProperty(u)){var K=o[u];if(K!=null)switch(u){case"name":f=K;break;case"type":_=K;break;case"checked":R=K;break;case"defaultChecked":z=K;break;case"value":d=K;break;case"defaultValue":E=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(r(137,s));break;default:Ze(n,s,u,K,o,null)}}Rs(n,d,E,R,z,_,f,!1),Aa(n);return;case"select":Ve("invalid",n),u=_=d=null;for(f in o)if(o.hasOwnProperty(f)&&(E=o[f],E!=null))switch(f){case"value":d=E;break;case"defaultValue":_=E;break;case"multiple":u=E;default:Ze(n,s,f,E,o,null)}s=d,o=_,n.multiple=!!u,s!=null?Di(n,!!u,s,!1):o!=null&&Di(n,!!u,o,!0);return;case"textarea":Ve("invalid",n),d=f=u=null;for(_ in o)if(o.hasOwnProperty(_)&&(E=o[_],E!=null))switch(_){case"value":u=E;break;case"defaultValue":f=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Ze(n,s,_,E,o,null)}Cs(n,u,f,d),Aa(n);return;case"option":for(R in o)if(o.hasOwnProperty(R)&&(u=o[R],u!=null))switch(R){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Ze(n,s,R,u,o,null)}return;case"dialog":Ve("beforetoggle",n),Ve("toggle",n),Ve("cancel",n),Ve("close",n);break;case"iframe":case"object":Ve("load",n);break;case"video":case"audio":for(u=0;u<Fl.length;u++)Ve(Fl[u],n);break;case"image":Ve("error",n),Ve("load",n);break;case"details":Ve("toggle",n);break;case"embed":case"source":case"link":Ve("error",n),Ve("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in o)if(o.hasOwnProperty(z)&&(u=o[z],u!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:Ze(n,s,z,u,o,null)}return;default:if(sl(s)){for(K in o)o.hasOwnProperty(K)&&(u=o[K],u!==void 0&&Rm(n,s,K,u,o,void 0));return}}for(E in o)o.hasOwnProperty(E)&&(u=o[E],u!=null&&Ze(n,s,E,u,o,null))}function AI(n,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,_=null,E=null,R=null,z=null,K=null;for(H in o){var Q=o[H];if(o.hasOwnProperty(H)&&Q!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":R=Q;default:u.hasOwnProperty(H)||Ze(n,s,H,null,u,Q)}}for(var B in u){var H=u[B];if(Q=o[B],u.hasOwnProperty(B)&&(H!=null||Q!=null))switch(B){case"type":d=H;break;case"name":f=H;break;case"checked":z=H;break;case"defaultChecked":K=H;break;case"value":_=H;break;case"defaultValue":E=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(r(137,s));break;default:H!==Q&&Ze(n,s,B,H,u,Q)}}pn(n,_,E,R,z,K,d,f);return;case"select":H=_=E=B=null;for(d in o)if(R=o[d],o.hasOwnProperty(d)&&R!=null)switch(d){case"value":break;case"multiple":H=R;default:u.hasOwnProperty(d)||Ze(n,s,d,null,u,R)}for(f in u)if(d=u[f],R=o[f],u.hasOwnProperty(f)&&(d!=null||R!=null))switch(f){case"value":B=d;break;case"defaultValue":E=d;break;case"multiple":_=d;default:d!==R&&Ze(n,s,f,d,u,R)}s=E,o=_,u=H,B!=null?Di(n,!!o,B,!1):!!u!=!!o&&(s!=null?Di(n,!!o,s,!0):Di(n,!!o,o?[]:"",!1));return;case"textarea":H=B=null;for(E in o)if(f=o[E],o.hasOwnProperty(E)&&f!=null&&!u.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ze(n,s,E,null,u,f)}for(_ in u)if(f=u[_],d=o[_],u.hasOwnProperty(_)&&(f!=null||d!=null))switch(_){case"value":B=f;break;case"defaultValue":H=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==d&&Ze(n,s,_,f,u,d)}We(n,B,H);return;case"option":for(var Ee in o)if(B=o[Ee],o.hasOwnProperty(Ee)&&B!=null&&!u.hasOwnProperty(Ee))switch(Ee){case"selected":n.selected=!1;break;default:Ze(n,s,Ee,null,u,B)}for(R in u)if(B=u[R],H=o[R],u.hasOwnProperty(R)&&B!==H&&(B!=null||H!=null))switch(R){case"selected":n.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Ze(n,s,R,B,u,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in o)B=o[ye],o.hasOwnProperty(ye)&&B!=null&&!u.hasOwnProperty(ye)&&Ze(n,s,ye,null,u,B);for(z in u)if(B=u[z],H=o[z],u.hasOwnProperty(z)&&B!==H&&(B!=null||H!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(r(137,s));break;default:Ze(n,s,z,B,u,H)}return;default:if(sl(s)){for(var et in o)B=o[et],o.hasOwnProperty(et)&&B!==void 0&&!u.hasOwnProperty(et)&&Rm(n,s,et,void 0,u,B);for(K in u)B=u[K],H=o[K],!u.hasOwnProperty(K)||B===H||B===void 0&&H===void 0||Rm(n,s,K,B,u,H);return}}for(var M in o)B=o[M],o.hasOwnProperty(M)&&B!=null&&!u.hasOwnProperty(M)&&Ze(n,s,M,null,u,B);for(Q in u)B=u[Q],H=o[Q],!u.hasOwnProperty(Q)||B===H||B==null&&H==null||Ze(n,s,Q,B,u,H)}var Cm=null,xm=null;function ih(n){return n.nodeType===9?n:n.ownerDocument}function T0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function A0(n,s){if(n===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&s==="foreignObject"?0:n}function Nm(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Om=null;function SI(){var n=window.event;return n&&n.type==="popstate"?n===Om?!1:(Om=n,!0):(Om=null,!1)}var S0=typeof setTimeout=="function"?setTimeout:void 0,wI=typeof clearTimeout=="function"?clearTimeout:void 0,w0=typeof Promise=="function"?Promise:void 0,II=typeof queueMicrotask=="function"?queueMicrotask:typeof w0<"u"?function(n){return w0.resolve(null).then(n).catch(RI)}:S0;function RI(n){setTimeout(function(){throw n})}function Mr(n){return n==="head"}function I0(n,s){var o=s,u=0,f=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(0<u&&8>u){o=u;var _=n.ownerDocument;if(o&1&&ql(_.documentElement),o&2&&ql(_.body),o&4)for(o=_.head,ql(o),_=o.firstChild;_;){var E=_.nextSibling,R=_.nodeName;_[As]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&_.rel.toLowerCase()==="stylesheet"||o.removeChild(_),_=E}}if(f===0){n.removeChild(d),Jl(s);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=d}while(o);Jl(s)}function Dm(n){var s=n.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Dm(o),gr(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function CI(n,s,o,u){for(;n.nodeType===1;){var f=o;if(n.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[As])switch(s){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(s==="input"&&n.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=Gn(n.nextSibling),n===null)break}return null}function xI(n,s,o){if(s==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=Gn(n.nextSibling),n===null))return null;return n}function Pm(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function NI(n,s){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function Gn(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return n}var km=null;function R0(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return n;s--}else o==="/$"&&s++}n=n.previousSibling}return null}function C0(n,s,o){switch(s=ih(o),n){case"html":if(n=s.documentElement,!n)throw Error(r(452));return n;case"head":if(n=s.head,!n)throw Error(r(453));return n;case"body":if(n=s.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}function ql(n){for(var s=n.attributes;s.length;)n.removeAttributeNode(s[0]);gr(n)}var Vn=new Map,x0=new Set;function rh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Wi=oe.d;oe.d={f:OI,r:DI,D:PI,C:kI,L:MI,m:VI,X:UI,S:LI,M:jI};function OI(){var n=Wi.f(),s=Qc();return n||s}function DI(n){var s=Wn(n);s!==null&&s.tag===5&&s.type==="form"?Qv(s):Wi.r(n)}var ro=typeof document>"u"?null:document;function N0(n,s,o){var u=ro;if(u&&typeof s=="string"&&s){var f=Et(s);f='link[rel="'+n+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),x0.has(f)||(x0.add(f),n={rel:n,crossOrigin:o,href:s},u.querySelector(f)===null&&(s=u.createElement("link"),$t(s,"link",n),pt(s),u.head.appendChild(s)))}}function PI(n){Wi.D(n),N0("dns-prefetch",n,null)}function kI(n,s){Wi.C(n,s),N0("preconnect",n,s)}function MI(n,s,o){Wi.L(n,s,o);var u=ro;if(u&&n&&s){var f='link[rel="preload"][as="'+Et(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Et(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Et(o.imageSizes)+'"]')):f+='[href="'+Et(n)+'"]';var d=f;switch(s){case"style":d=so(n);break;case"script":d=ao(n)}Vn.has(d)||(n=b({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:n,as:s},o),Vn.set(d,n),u.querySelector(f)!==null||s==="style"&&u.querySelector(Gl(d))||s==="script"&&u.querySelector($l(d))||(s=u.createElement("link"),$t(s,"link",n),pt(s),u.head.appendChild(s)))}}function VI(n,s){Wi.m(n,s);var o=ro;if(o&&n){var u=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Et(u)+'"][href="'+Et(n)+'"]',d=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ao(n)}if(!Vn.has(d)&&(n=b({rel:"modulepreload",href:n},s),Vn.set(d,n),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector($l(d)))return}u=o.createElement("link"),$t(u,"link",n),pt(u),o.head.appendChild(u)}}}function LI(n,s,o){Wi.S(n,s,o);var u=ro;if(u&&n){var f=sn(u).hoistableStyles,d=so(n);s=s||"default";var _=f.get(d);if(!_){var E={loading:0,preload:null};if(_=u.querySelector(Gl(d)))E.loading=5;else{n=b({rel:"stylesheet",href:n,"data-precedence":s},o),(o=Vn.get(d))&&Mm(n,o);var R=_=u.createElement("link");pt(R),$t(R,"link",n),R._p=new Promise(function(z,K){R.onload=z,R.onerror=K}),R.addEventListener("load",function(){E.loading|=1}),R.addEventListener("error",function(){E.loading|=2}),E.loading|=4,sh(_,s,u)}_={type:"stylesheet",instance:_,count:1,state:E},f.set(d,_)}}}function UI(n,s){Wi.X(n,s);var o=ro;if(o&&n){var u=sn(o).hoistableScripts,f=ao(n),d=u.get(f);d||(d=o.querySelector($l(f)),d||(n=b({src:n,async:!0},s),(s=Vn.get(f))&&Vm(n,s),d=o.createElement("script"),pt(d),$t(d,"link",n),o.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},u.set(f,d))}}function jI(n,s){Wi.M(n,s);var o=ro;if(o&&n){var u=sn(o).hoistableScripts,f=ao(n),d=u.get(f);d||(d=o.querySelector($l(f)),d||(n=b({src:n,async:!0,type:"module"},s),(s=Vn.get(f))&&Vm(n,s),d=o.createElement("script"),pt(d),$t(d,"link",n),o.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},u.set(f,d))}}function O0(n,s,o,u){var f=(f=Se.current)?rh(f):null;if(!f)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=so(o.href),o=sn(f).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=so(o.href);var d=sn(f).hoistableStyles,_=d.get(n);if(_||(f=f.ownerDocument||f,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,_),(d=f.querySelector(Gl(n)))&&!d._p&&(_.instance=d,_.state.loading=5),Vn.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Vn.set(n,o),d||zI(f,n,o,_.state))),s&&u===null)throw Error(r(528,""));return _}if(s&&u!==null)throw Error(r(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=ao(o),o=sn(f).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function so(n){return'href="'+Et(n)+'"'}function Gl(n){return'link[rel="stylesheet"]['+n+"]"}function D0(n){return b({},n,{"data-precedence":n.precedence,precedence:null})}function zI(n,s,o,u){n.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=n.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),$t(s,"link",o),pt(s),n.head.appendChild(s))}function ao(n){return'[src="'+Et(n)+'"]'}function $l(n){return"script[async]"+n}function P0(n,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=n.querySelector('style[data-href~="'+Et(o.href)+'"]');if(u)return s.instance=u,pt(u),u;var f=b({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),pt(u),$t(u,"style",f),sh(u,o.precedence,n),s.instance=u;case"stylesheet":f=so(o.href);var d=n.querySelector(Gl(f));if(d)return s.state.loading|=4,s.instance=d,pt(d),d;u=D0(o),(f=Vn.get(f))&&Mm(u,f),d=(n.ownerDocument||n).createElement("link"),pt(d);var _=d;return _._p=new Promise(function(E,R){_.onload=E,_.onerror=R}),$t(d,"link",u),s.state.loading|=4,sh(d,o.precedence,n),s.instance=d;case"script":return d=ao(o.src),(f=n.querySelector($l(d)))?(s.instance=f,pt(f),f):(u=o,(f=Vn.get(d))&&(u=b({},o),Vm(u,f)),n=n.ownerDocument||n,f=n.createElement("script"),pt(f),$t(f,"link",u),n.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(r(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,sh(u,o.precedence,n));return s.instance}function sh(n,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,d=f,_=0;_<u.length;_++){var E=u[_];if(E.dataset.precedence===s)d=E;else if(d!==f)break}d?d.parentNode.insertBefore(n,d.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(n,s.firstChild))}function Mm(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.title==null&&(n.title=s.title)}function Vm(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.integrity==null&&(n.integrity=s.integrity)}var ah=null;function k0(n,s,o){if(ah===null){var u=new Map,f=ah=new Map;f.set(o,u)}else f=ah,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),f=0;f<o.length;f++){var d=o[f];if(!(d[As]||d[It]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(s)||"";_=n+_;var E=u.get(_);E?E.push(d):u.set(_,[d])}}return u}function M0(n,s,o){n=n.ownerDocument||n,n.head.insertBefore(o,s==="title"?n.querySelector("head > title"):null)}function BI(n,s,o){if(o===1||s.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return n=s.disabled,typeof s.precedence=="string"&&n==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function V0(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Kl=null;function FI(){}function HI(n,s,o){if(Kl===null)throw Error(r(475));var u=Kl;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=so(o.href),d=n.querySelector(Gl(f));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=oh.bind(u),n.then(u,u)),s.state.loading|=4,s.instance=d,pt(d);return}d=n.ownerDocument||n,o=D0(o),(f=Vn.get(f))&&Mm(o,f),d=d.createElement("link"),pt(d);var _=d;_._p=new Promise(function(E,R){_.onload=E,_.onerror=R}),$t(d,"link",o),s.instance=d}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(u.count++,s=oh.bind(u),n.addEventListener("load",s),n.addEventListener("error",s))}}function qI(){if(Kl===null)throw Error(r(475));var n=Kl;return n.stylesheets&&n.count===0&&Lm(n,n.stylesheets),0<n.count?function(s){var o=setTimeout(function(){if(n.stylesheets&&Lm(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=s,function(){n.unsuspend=null,clearTimeout(o)}}:null}function oh(){if(this.count--,this.count===0){if(this.stylesheets)Lm(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var lh=null;function Lm(n,s){n.stylesheets=null,n.unsuspend!==null&&(n.count++,lh=new Map,s.forEach(GI,n),lh=null,oh.call(n))}function GI(n,s){if(!(s.state.loading&4)){var o=lh.get(n);if(o)var u=o.get(null);else{o=new Map,lh.set(n,o);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var _=f[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(o.set(_.dataset.precedence,_),u=_)}u&&o.set(null,u)}f=s.instance,_=f.getAttribute("data-precedence"),d=o.get(_)||u,d===u&&o.set(null,f),o.set(_,f),this.count++,u=oh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),d?d.parentNode.insertBefore(f,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),s.state.loading|=4}}var Yl={$$typeof:ne,Provider:null,Consumer:null,_currentValue:pe,_currentValue2:pe,_threadCount:0};function $I(n,s,o,u,f,d,_,E){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ri(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ri(0),this.hiddenUpdates=Ri(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function L0(n,s,o,u,f,d,_,E,R,z,K,Q){return n=new $I(n,s,o,_,E,R,z,Q),s=1,d===!0&&(s|=24),d=yn(3,null,null,s),n.current=d,d.stateNode=n,s=vd(),s.refCount++,n.pooledCache=s,s.refCount++,d.memoizedState={element:u,isDehydrated:o,cache:s},Td(d),n}function U0(n){return n?(n=La,n):La}function j0(n,s,o,u,f,d){f=U0(f),u.context===null?u.context=f:u.pendingContext=f,u=Tr(s),u.payload={element:o},d=d===void 0?null:d,d!==null&&(u.callback=d),o=Ar(n,u,s),o!==null&&(Tn(o,n,s),Sl(o,n,s))}function z0(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<s?o:s}}function Um(n,s){z0(n,s),(n=n.alternate)&&z0(n,s)}function B0(n){if(n.tag===13){var s=Va(n,67108864);s!==null&&Tn(s,n,67108864),Um(n,67108864)}}var uh=!0;function KI(n,s,o,u){var f=$.T;$.T=null;var d=oe.p;try{oe.p=2,jm(n,s,o,u)}finally{oe.p=d,$.T=f}}function YI(n,s,o,u){var f=$.T;$.T=null;var d=oe.p;try{oe.p=8,jm(n,s,o,u)}finally{oe.p=d,$.T=f}}function jm(n,s,o,u){if(uh){var f=zm(u);if(f===null)Im(n,s,u,ch,o),H0(n,u);else if(XI(f,n,s,o,u))u.stopPropagation();else if(H0(n,u),s&4&&-1<QI.indexOf(n)){for(;f!==null;){var d=Wn(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=zn(d.pendingLanes);if(_!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var R=1<<31-Xt(_);E.entanglements[1]|=R,_&=~R}hi(d),(Qe&6)===0&&(Kc=Sn()+500,Bl(0))}}break;case 13:E=Va(d,2),E!==null&&Tn(E,d,2),Qc(),Um(d,2)}if(d=zm(u),d===null&&Im(n,s,u,ch,o),d===f)break;f=d}f!==null&&u.stopPropagation()}else Im(n,s,u,null,o)}}function zm(n){return n=Rn(n),Bm(n)}var ch=null;function Bm(n){if(ch=null,n=xi(n),n!==null){var s=l(n);if(s===null)n=null;else{var o=s.tag;if(o===13){if(n=h(s),n!==null)return n;n=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null)}}return ch=n,null}function F0(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qf()){case $o:return 2;case pa:return 8;case vs:case Gf:return 32;case ga:return 268435456;default:return 32}default:return 32}}var Fm=!1,Vr=null,Lr=null,Ur=null,Ql=new Map,Xl=new Map,jr=[],QI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function H0(n,s){switch(n){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Ur=null;break;case"pointerover":case"pointerout":Ql.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xl.delete(s.pointerId)}}function Wl(n,s,o,u,f,d){return n===null||n.nativeEvent!==d?(n={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:d,targetContainers:[f]},s!==null&&(s=Wn(s),s!==null&&B0(s)),n):(n.eventSystemFlags|=u,s=n.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),n)}function XI(n,s,o,u,f){switch(s){case"focusin":return Vr=Wl(Vr,n,s,o,u,f),!0;case"dragenter":return Lr=Wl(Lr,n,s,o,u,f),!0;case"mouseover":return Ur=Wl(Ur,n,s,o,u,f),!0;case"pointerover":var d=f.pointerId;return Ql.set(d,Wl(Ql.get(d)||null,n,s,o,u,f)),!0;case"gotpointercapture":return d=f.pointerId,Xl.set(d,Wl(Xl.get(d)||null,n,s,o,u,f)),!0}return!1}function q0(n){var s=xi(n.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=h(o),s!==null){n.blockedOn=s,Qu(n.priority,function(){if(o.tag===13){var u=En();u=dr(u);var f=Va(o,u);f!==null&&Tn(f,o,u),Um(o,u)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function hh(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var o=zm(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Pi=u,o.target.dispatchEvent(u),Pi=null}else return s=Wn(o),s!==null&&B0(s),n.blockedOn=o,!1;s.shift()}return!0}function G0(n,s,o){hh(n)&&o.delete(s)}function WI(){Fm=!1,Vr!==null&&hh(Vr)&&(Vr=null),Lr!==null&&hh(Lr)&&(Lr=null),Ur!==null&&hh(Ur)&&(Ur=null),Ql.forEach(G0),Xl.forEach(G0)}function fh(n,s){n.blockedOn===s&&(n.blockedOn=null,Fm||(Fm=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,WI)))}var dh=null;function $0(n){dh!==n&&(dh=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){dh===n&&(dh=null);for(var s=0;s<n.length;s+=3){var o=n[s],u=n[s+1],f=n[s+2];if(typeof u!="function"){if(Bm(u||o)===null)continue;break}var d=Wn(o);d!==null&&(n.splice(s,3),s-=3,Bd(d,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Jl(n){function s(R){return fh(R,n)}Vr!==null&&fh(Vr,n),Lr!==null&&fh(Lr,n),Ur!==null&&fh(Ur,n),Ql.forEach(s),Xl.forEach(s);for(var o=0;o<jr.length;o++){var u=jr[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<jr.length&&(o=jr[0],o.blockedOn===null);)q0(o),o.blockedOn===null&&jr.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],d=o[u+1],_=f[bt]||null;if(typeof d=="function")_||$0(o);else if(_){var E=null;if(d&&d.hasAttribute("formAction")){if(f=d,_=d[bt]||null)E=_.formAction;else if(Bm(f)!==null)continue}else E=_.action;typeof E=="function"?o[u+1]=E:(o.splice(u,3),u-=3),$0(o)}}}function Hm(n){this._internalRoot=n}mh.prototype.render=Hm.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(r(409));var o=s.current,u=En();j0(o,u,n,s,null,null)},mh.prototype.unmount=Hm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;j0(n.current,2,null,n,null,null),Qc(),s[wn]=null}};function mh(n){this._internalRoot=n}mh.prototype.unstable_scheduleHydration=function(n){if(n){var s=mr();n={blockedOn:null,target:n,priority:s};for(var o=0;o<jr.length&&s!==0&&s<jr[o].priority;o++);jr.splice(o,0,n),o===0&&q0(n)}};var K0=e.version;if(K0!=="19.1.0")throw Error(r(527,K0,"19.1.0"));oe.findDOMNode=function(n){var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=p(s),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var JI={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:$,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ph=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ph.isDisabled&&ph.supportsFiber)try{ht=ph.inject(JI),Ye=ph}catch{}}return eu.createRoot=function(n,s){if(!a(n))throw Error(r(299));var o=!1,u="",f=u_,d=c_,_=h_,E=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(d=s.onCaughtError),s.onRecoverableError!==void 0&&(_=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(E=s.unstable_transitionCallbacks)),s=L0(n,1,!1,null,null,o,u,f,d,_,E,null),n[wn]=s.current,wm(n),new Hm(s)},eu.hydrateRoot=function(n,s,o){if(!a(n))throw Error(r(299));var u=!1,f="",d=u_,_=c_,E=h_,R=null,z=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(d=o.onUncaughtError),o.onCaughtError!==void 0&&(_=o.onCaughtError),o.onRecoverableError!==void 0&&(E=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(R=o.unstable_transitionCallbacks),o.formState!==void 0&&(z=o.formState)),s=L0(n,1,!0,s,o??null,u,f,d,_,E,R,z),s.context=U0(null),o=s.current,u=En(),u=dr(u),f=Tr(u),f.callback=null,Ar(o,f,u),o=u,s.current.lanes=o,Ci(s,o),hi(s),n[wn]=s.current,wm(n),new mh(s)},eu.version="19.1.0",eu}var ib;function uR(){if(ib)return $m.exports;ib=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),$m.exports=lR(),$m.exports}var cR=uR();LT();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yu(){return yu=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},yu.apply(this,arguments)}var Yr;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(Yr||(Yr={}));const rb="popstate";function hR(i){i===void 0&&(i={});function e(r,a){let{pathname:l,search:h,hash:m}=r.location;return _p("",{pathname:l,search:h,hash:m},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(r,a){return typeof a=="string"?a:jh(a)}return dR(e,t,null,i)}function _t(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function UT(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function fR(){return Math.random().toString(36).substr(2,8)}function sb(i,e){return{usr:i.state,key:i.key,idx:e}}function _p(i,e,t,r){return t===void 0&&(t=null),yu({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof e=="string"?ko(e):e,{state:t,key:e&&e.key||r||fR()})}function jh(i){let{pathname:e="/",search:t="",hash:r=""}=i;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ko(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substr(t),i=i.substr(0,t));let r=i.indexOf("?");r>=0&&(e.search=i.substr(r),i=i.substr(0,r)),i&&(e.pathname=i)}return e}function dR(i,e,t,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,h=a.history,m=Yr.Pop,p=null,g=b();g==null&&(g=0,h.replaceState(yu({},h.state,{idx:g}),""));function b(){return(h.state||{idx:null}).idx}function T(){m=Yr.Pop;let F=b(),ee=F==null?null:F-g;g=F,p&&p({action:m,location:W.location,delta:ee})}function S(F,ee){m=Yr.Push;let ie=_p(W.location,F,ee);g=b()+1;let ne=sb(ie,g),fe=W.createHref(ie);try{h.pushState(ne,"",fe)}catch(ce){if(ce instanceof DOMException&&ce.name==="DataCloneError")throw ce;a.location.assign(fe)}l&&p&&p({action:m,location:W.location,delta:1})}function j(F,ee){m=Yr.Replace;let ie=_p(W.location,F,ee);g=b();let ne=sb(ie,g),fe=W.createHref(ie);h.replaceState(ne,"",fe),l&&p&&p({action:m,location:W.location,delta:0})}function G(F){let ee=a.location.origin!=="null"?a.location.origin:a.location.href,ie=typeof F=="string"?F:jh(F);return ie=ie.replace(/ $/,"%20"),_t(ee,"No window.location.(origin|href) available to create URL for href: "+ie),new URL(ie,ee)}let W={get action(){return m},get location(){return i(a,h)},listen(F){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(rb,T),p=F,()=>{a.removeEventListener(rb,T),p=null}},createHref(F){return e(a,F)},createURL:G,encodeLocation(F){let ee=G(F);return{pathname:ee.pathname,search:ee.search,hash:ee.hash}},push:S,replace:j,go(F){return h.go(F)}};return W}var ab;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(ab||(ab={}));function mR(i,e,t){return t===void 0&&(t="/"),pR(i,e,t)}function pR(i,e,t,r){let a=typeof e=="string"?ko(e):e,l=bg(a.pathname||"/",t);if(l==null)return null;let h=jT(i);gR(h);let m=null;for(let p=0;m==null&&p<h.length;++p){let g=CR(l);m=wR(h[p],g)}return m}function jT(i,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let a=(l,h,m)=>{let p={relativePath:m===void 0?l.path||"":m,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};p.relativePath.startsWith("/")&&(_t(p.relativePath.startsWith(r),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(r.length));let g=Xr([r,p.relativePath]),b=t.concat(p);l.children&&l.children.length>0&&(_t(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),jT(l.children,e,b,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:AR(g,l.index),routesMeta:b})};return i.forEach((l,h)=>{var m;if(l.path===""||!((m=l.path)!=null&&m.includes("?")))a(l,h);else for(let p of zT(l.path))a(l,h,p)}),e}function zT(i){let e=i.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let h=zT(r.join("/")),m=[];return m.push(...h.map(p=>p===""?l:[l,p].join("/"))),a&&m.push(...h),m.map(p=>i.startsWith("/")&&p===""?"/":p)}function gR(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:SR(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const yR=/^:[\w-]+$/,vR=3,_R=2,bR=1,ER=10,TR=-2,ob=i=>i==="*";function AR(i,e){let t=i.split("/"),r=t.length;return t.some(ob)&&(r+=TR),e&&(r+=_R),t.filter(a=>!ob(a)).reduce((a,l)=>a+(yR.test(l)?vR:l===""?bR:ER),r)}function SR(i,e){return i.length===e.length&&i.slice(0,-1).every((r,a)=>r===e[a])?i[i.length-1]-e[e.length-1]:0}function wR(i,e,t){let{routesMeta:r}=i,a={},l="/",h=[];for(let m=0;m<r.length;++m){let p=r[m],g=m===r.length-1,b=l==="/"?e:e.slice(l.length)||"/",T=IR({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},b),S=p.route;if(!T)return null;Object.assign(a,T.params),h.push({params:a,pathname:Xr([l,T.pathname]),pathnameBase:DR(Xr([l,T.pathnameBase])),route:S}),T.pathnameBase!=="/"&&(l=Xr([l,T.pathnameBase]))}return h}function IR(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,r]=RR(i.path,i.caseSensitive,i.end),a=e.match(t);if(!a)return null;let l=a[0],h=l.replace(/(.)\/+$/,"$1"),m=a.slice(1);return{params:r.reduce((g,b,T)=>{let{paramName:S,isOptional:j}=b;if(S==="*"){let W=m[T]||"";h=l.slice(0,l.length-W.length).replace(/(.)\/+$/,"$1")}const G=m[T];return j&&!G?g[S]=void 0:g[S]=(G||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:h,pattern:i}}function RR(i,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),UT(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let r=[],a="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,m,p)=>(r.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(r.push({paramName:"*"}),a+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":i!==""&&i!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function CR(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return UT(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),i}}function bg(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=i.charAt(t);return r&&r!=="/"?null:i.slice(t)||"/"}function xR(i,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:a=""}=typeof i=="string"?ko(i):i;return{pathname:t?t.startsWith("/")?t:NR(t,e):e,search:PR(r),hash:kR(a)}}function NR(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Xm(i,e,t,r){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function OR(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Eg(i,e){let t=OR(i);return e?t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Tg(i,e,t,r){r===void 0&&(r=!1);let a;typeof i=="string"?a=ko(i):(a=yu({},i),_t(!a.pathname||!a.pathname.includes("?"),Xm("?","pathname","search",a)),_t(!a.pathname||!a.pathname.includes("#"),Xm("#","pathname","hash",a)),_t(!a.search||!a.search.includes("#"),Xm("#","search","hash",a)));let l=i===""||a.pathname==="",h=l?"/":a.pathname,m;if(h==null)m=t;else{let T=e.length-1;if(!r&&h.startsWith("..")){let S=h.split("/");for(;S[0]==="..";)S.shift(),T-=1;a.pathname=S.join("/")}m=T>=0?e[T]:"/"}let p=xR(a,m),g=h&&h!=="/"&&h.endsWith("/"),b=(l||h===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(g||b)&&(p.pathname+="/"),p}const Xr=i=>i.join("/").replace(/\/\/+/g,"/"),DR=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),PR=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,kR=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function MR(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const BT=["post","put","patch","delete"];new Set(BT);const VR=["get",...BT];new Set(VR);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vu(){return vu=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},vu.apply(this,arguments)}const Ag=ae.createContext(null),LR=ae.createContext(null),ds=ae.createContext(null),gf=ae.createContext(null),ur=ae.createContext({outlet:null,matches:[],isDataRoute:!1}),FT=ae.createContext(null);function UR(i,e){let{relative:t}=e===void 0?{}:e;Mo()||_t(!1);let{basename:r,navigator:a}=ae.useContext(ds),{hash:l,pathname:h,search:m}=qT(i,{relative:t}),p=h;return r!=="/"&&(p=h==="/"?r:Xr([r,h])),a.createHref({pathname:p,search:m,hash:l})}function Mo(){return ae.useContext(gf)!=null}function Du(){return Mo()||_t(!1),ae.useContext(gf).location}function HT(i){ae.useContext(ds).static||ae.useLayoutEffect(i)}function yf(){let{isDataRoute:i}=ae.useContext(ur);return i?ZR():jR()}function jR(){Mo()||_t(!1);let i=ae.useContext(Ag),{basename:e,future:t,navigator:r}=ae.useContext(ds),{matches:a}=ae.useContext(ur),{pathname:l}=Du(),h=JSON.stringify(Eg(a,t.v7_relativeSplatPath)),m=ae.useRef(!1);return HT(()=>{m.current=!0}),ae.useCallback(function(g,b){if(b===void 0&&(b={}),!m.current)return;if(typeof g=="number"){r.go(g);return}let T=Tg(g,JSON.parse(h),l,b.relative==="path");i==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:Xr([e,T.pathname])),(b.replace?r.replace:r.push)(T,b.state,b)},[e,r,h,l,i])}const zR=ae.createContext(null);function BR(i){let e=ae.useContext(ur).outlet;return e&&ae.createElement(zR.Provider,{value:i},e)}function qT(i,e){let{relative:t}=e===void 0?{}:e,{future:r}=ae.useContext(ds),{matches:a}=ae.useContext(ur),{pathname:l}=Du(),h=JSON.stringify(Eg(a,r.v7_relativeSplatPath));return ae.useMemo(()=>Tg(i,JSON.parse(h),l,t==="path"),[i,h,l,t])}function FR(i,e){return HR(i,e)}function HR(i,e,t,r){Mo()||_t(!1);let{navigator:a,static:l}=ae.useContext(ds),{matches:h}=ae.useContext(ur),m=h[h.length-1],p=m?m.params:{};m&&m.pathname;let g=m?m.pathnameBase:"/";m&&m.route;let b=Du(),T;if(e){var S;let ee=typeof e=="string"?ko(e):e;g==="/"||(S=ee.pathname)!=null&&S.startsWith(g)||_t(!1),T=ee}else T=b;let j=T.pathname||"/",G=j;if(g!=="/"){let ee=g.replace(/^\//,"").split("/");G="/"+j.replace(/^\//,"").split("/").slice(ee.length).join("/")}let W=mR(i,{pathname:G}),F=YR(W&&W.map(ee=>Object.assign({},ee,{params:Object.assign({},p,ee.params),pathname:Xr([g,a.encodeLocation?a.encodeLocation(ee.pathname).pathname:ee.pathname]),pathnameBase:ee.pathnameBase==="/"?g:Xr([g,a.encodeLocation?a.encodeLocation(ee.pathnameBase).pathname:ee.pathnameBase])})),h,t,r);return e&&F?ae.createElement(gf.Provider,{value:{location:vu({pathname:"/",search:"",hash:"",state:null,key:"default"},T),navigationType:Yr.Pop}},F):F}function qR(){let i=JR(),e=MR(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ae.createElement(ae.Fragment,null,ae.createElement("h2",null,"Unexpected Application Error!"),ae.createElement("h3",{style:{fontStyle:"italic"}},e),t?ae.createElement("pre",{style:a},t):null,null)}const GR=ae.createElement(qR,null);class $R extends ae.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?ae.createElement(ur.Provider,{value:this.props.routeContext},ae.createElement(FT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function KR(i){let{routeContext:e,match:t,children:r}=i,a=ae.useContext(Ag);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),ae.createElement(ur.Provider,{value:e},r)}function YR(i,e,t,r){var a;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),i==null){var l;if(!t)return null;if(t.errors)i=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let h=i,m=(a=t)==null?void 0:a.errors;if(m!=null){let b=h.findIndex(T=>T.route.id&&(m==null?void 0:m[T.route.id])!==void 0);b>=0||_t(!1),h=h.slice(0,Math.min(h.length,b+1))}let p=!1,g=-1;if(t&&r&&r.v7_partialHydration)for(let b=0;b<h.length;b++){let T=h[b];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(g=b),T.route.id){let{loaderData:S,errors:j}=t,G=T.route.loader&&S[T.route.id]===void 0&&(!j||j[T.route.id]===void 0);if(T.route.lazy||G){p=!0,g>=0?h=h.slice(0,g+1):h=[h[0]];break}}}return h.reduceRight((b,T,S)=>{let j,G=!1,W=null,F=null;t&&(j=m&&T.route.id?m[T.route.id]:void 0,W=T.route.errorElement||GR,p&&(g<0&&S===0?(eC("route-fallback"),G=!0,F=null):g===S&&(G=!0,F=T.route.hydrateFallbackElement||null)));let ee=e.concat(h.slice(0,S+1)),ie=()=>{let ne;return j?ne=W:G?ne=F:T.route.Component?ne=ae.createElement(T.route.Component,null):T.route.element?ne=T.route.element:ne=b,ae.createElement(KR,{match:T,routeContext:{outlet:b,matches:ee,isDataRoute:t!=null},children:ne})};return t&&(T.route.ErrorBoundary||T.route.errorElement||S===0)?ae.createElement($R,{location:t.location,revalidation:t.revalidation,component:W,error:j,children:ie(),routeContext:{outlet:null,matches:ee,isDataRoute:!0}}):ie()},null)}var GT=function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i}(GT||{}),$T=function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i}($T||{});function QR(i){let e=ae.useContext(Ag);return e||_t(!1),e}function XR(i){let e=ae.useContext(LR);return e||_t(!1),e}function WR(i){let e=ae.useContext(ur);return e||_t(!1),e}function KT(i){let e=WR(),t=e.matches[e.matches.length-1];return t.route.id||_t(!1),t.route.id}function JR(){var i;let e=ae.useContext(FT),t=XR(),r=KT();return e!==void 0?e:(i=t.errors)==null?void 0:i[r]}function ZR(){let{router:i}=QR(GT.UseNavigateStable),e=KT($T.UseNavigateStable),t=ae.useRef(!1);return HT(()=>{t.current=!0}),ae.useCallback(function(a,l){l===void 0&&(l={}),t.current&&(typeof a=="number"?i.navigate(a):i.navigate(a,vu({fromRouteId:e},l)))},[i,e])}const lb={};function eC(i,e,t){lb[i]||(lb[i]=!0)}function tC(i,e){i==null||i.v7_startTransition,i==null||i.v7_relativeSplatPath}function nC(i){let{to:e,replace:t,state:r,relative:a}=i;Mo()||_t(!1);let{future:l,static:h}=ae.useContext(ds),{matches:m}=ae.useContext(ur),{pathname:p}=Du(),g=yf(),b=Tg(e,Eg(m,l.v7_relativeSplatPath),p,a==="path"),T=JSON.stringify(b);return ae.useEffect(()=>g(JSON.parse(T),{replace:t,state:r,relative:a}),[g,T,a,t,r]),null}function Sg(i){return BR(i.context)}function un(i){_t(!1)}function iC(i){let{basename:e="/",children:t=null,location:r,navigationType:a=Yr.Pop,navigator:l,static:h=!1,future:m}=i;Mo()&&_t(!1);let p=e.replace(/^\/*/,"/"),g=ae.useMemo(()=>({basename:p,navigator:l,static:h,future:vu({v7_relativeSplatPath:!1},m)}),[p,m,l,h]);typeof r=="string"&&(r=ko(r));let{pathname:b="/",search:T="",hash:S="",state:j=null,key:G="default"}=r,W=ae.useMemo(()=>{let F=bg(b,p);return F==null?null:{location:{pathname:F,search:T,hash:S,state:j,key:G},navigationType:a}},[p,b,T,S,j,G,a]);return W==null?null:ae.createElement(ds.Provider,{value:g},ae.createElement(gf.Provider,{children:t,value:W}))}function rC(i){let{children:e,location:t}=i;return FR(bp(e),t)}new Promise(()=>{});function bp(i,e){e===void 0&&(e=[]);let t=[];return ae.Children.forEach(i,(r,a)=>{if(!ae.isValidElement(r))return;let l=[...e,a];if(r.type===ae.Fragment){t.push.apply(t,bp(r.props.children,l));return}r.type!==un&&_t(!1),!r.props.index||!r.props.children||_t(!1);let h={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(h.children=bp(r.props.children,l)),t.push(h)}),t}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ep(){return Ep=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Ep.apply(this,arguments)}function sC(i,e){if(i==null)return{};var t={},r=Object.keys(i),a,l;for(l=0;l<r.length;l++)a=r[l],!(e.indexOf(a)>=0)&&(t[a]=i[a]);return t}function aC(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function oC(i,e){return i.button===0&&(!e||e==="_self")&&!aC(i)}const lC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],uC="6";try{window.__reactRouterVersion=uC}catch{}const cC="startTransition",ub=rR[cC];function hC(i){let{basename:e,children:t,future:r,window:a}=i,l=ae.useRef();l.current==null&&(l.current=hR({window:a,v5Compat:!0}));let h=l.current,[m,p]=ae.useState({action:h.action,location:h.location}),{v7_startTransition:g}=r||{},b=ae.useCallback(T=>{g&&ub?ub(()=>p(T)):p(T)},[p,g]);return ae.useLayoutEffect(()=>h.listen(b),[h,b]),ae.useEffect(()=>tC(r),[r]),ae.createElement(iC,{basename:e,children:t,location:m.location,navigationType:m.action,navigator:h,future:r})}const fC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wg=ae.forwardRef(function(e,t){let{onClick:r,relative:a,reloadDocument:l,replace:h,state:m,target:p,to:g,preventScrollReset:b,viewTransition:T}=e,S=sC(e,lC),{basename:j}=ae.useContext(ds),G,W=!1;if(typeof g=="string"&&dC.test(g)&&(G=g,fC))try{let ne=new URL(window.location.href),fe=g.startsWith("//")?new URL(ne.protocol+g):new URL(g),ce=bg(fe.pathname,j);fe.origin===ne.origin&&ce!=null?g=ce+fe.search+fe.hash:W=!0}catch{}let F=UR(g,{relative:a}),ee=mC(g,{replace:h,state:m,target:p,preventScrollReset:b,relative:a,viewTransition:T});function ie(ne){r&&r(ne),ne.defaultPrevented||ee(ne)}return ae.createElement("a",Ep({},S,{href:G||F,onClick:W||l?r:ie,ref:t,target:p}))});var cb;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(cb||(cb={}));var hb;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(hb||(hb={}));function mC(i,e){let{target:t,replace:r,state:a,preventScrollReset:l,relative:h,viewTransition:m}=e===void 0?{}:e,p=yf(),g=Du(),b=qT(i,{relative:h});return ae.useCallback(T=>{if(oC(T,t)){T.preventDefault();let S=r!==void 0?r:jh(g)===jh(b);p(i,{replace:S,state:a,preventScrollReset:l,relative:h,viewTransition:m})}},[g,p,b,r,a,t,i,l,h,m])}const pC=()=>{};var fb={};/**
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
 */const YT=function(i){const e=[];let t=0;for(let r=0;r<i.length;r++){let a=i.charCodeAt(r);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++r)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},gC=function(i){const e=[];let t=0,r=0;for(;t<i.length;){const a=i[t++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[t++];e[r++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[t++],h=i[t++],m=i[t++],p=((a&7)<<18|(l&63)<<12|(h&63)<<6|m&63)-65536;e[r++]=String.fromCharCode(55296+(p>>10)),e[r++]=String.fromCharCode(56320+(p&1023))}else{const l=i[t++],h=i[t++];e[r++]=String.fromCharCode((a&15)<<12|(l&63)<<6|h&63)}}return e.join("")},QT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<i.length;a+=3){const l=i[a],h=a+1<i.length,m=h?i[a+1]:0,p=a+2<i.length,g=p?i[a+2]:0,b=l>>2,T=(l&3)<<4|m>>4;let S=(m&15)<<2|g>>6,j=g&63;p||(j=64,h||(S=64)),r.push(t[b],t[T],t[S],t[j])}return r.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(YT(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):gC(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<i.length;){const l=t[i.charAt(a++)],m=a<i.length?t[i.charAt(a)]:0;++a;const g=a<i.length?t[i.charAt(a)]:64;++a;const T=a<i.length?t[i.charAt(a)]:64;if(++a,l==null||m==null||g==null||T==null)throw new yC;const S=l<<2|m>>4;if(r.push(S),g!==64){const j=m<<4&240|g>>2;if(r.push(j),T!==64){const G=g<<6&192|T;r.push(G)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class yC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vC=function(i){const e=YT(i);return QT.encodeByteArray(e,!0)},zh=function(i){return vC(i).replace(/\./g,"")},Ig=function(i){try{return QT.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _C(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bC=()=>_C().__FIREBASE_DEFAULTS__,EC=()=>{if(typeof process>"u"||typeof fb>"u")return;const i=fb.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},TC=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Ig(i[1]);return e&&JSON.parse(e)},vf=()=>{try{return pC()||bC()||EC()||TC()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},XT=i=>{var e,t;return(t=(e=vf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},AC=i=>{const e=XT(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},WT=()=>{var i;return(i=vf())===null||i===void 0?void 0:i.config},JT=i=>{var e;return(e=vf())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class SC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Vo(i){return i.endsWith(".cloudworkstations.dev")}async function ZT(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function wC(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",a=i.iat||0,l=i.sub||i.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},i);return[zh(JSON.stringify(t)),zh(JSON.stringify(h)),""].join(".")}const au={};function IC(){const i={prod:[],emulator:[]};for(const e of Object.keys(au))au[e]?i.emulator.push(e):i.prod.push(e);return i}function RC(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let db=!1;function _f(i,e){if(typeof window>"u"||typeof document>"u"||!Vo(window.location.host)||au[i]===e||au[i]||db)return;au[i]=e;function t(S){return`__firebase__banner__${S}`}const r="__firebase__banner",l=IC().prod.length>0;function h(){const S=document.getElementById(r);S&&S.remove()}function m(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,j){S.setAttribute("width","24"),S.setAttribute("id",j),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{db=!0,h()},S}function b(S,j){S.setAttribute("id",j),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function T(){const S=RC(r),j=t("text"),G=document.getElementById(j)||document.createElement("span"),W=t("learnmore"),F=document.getElementById(W)||document.createElement("a"),ee=t("preprendIcon"),ie=document.getElementById(ee)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const ne=S.element;m(ne),b(F,W);const fe=g();p(ie,ee),ne.append(ie,G,F,fe),document.body.appendChild(ne)}l?(G.innerText="Preview backend disconnected.",ie.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ie.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,G.innerText="Preview backend running in this workspace."),G.setAttribute("id",j)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function e1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function CC(){var i;const e=(i=vf())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function t1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function n1(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function i1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function r1(){const i=tt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function xC(){return!CC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function NC(){try{return typeof indexedDB=="object"}catch{return!1}}function OC(){return new Promise((i,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(r),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const DC="FirebaseError";class jn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=DC,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ms.prototype.create)}}class ms{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],h=l?PC(l,r):"Error",m=`${this.serviceName}: ${h} (${a}).`;return new jn(a,m,r)}}function PC(i,e){return i.replace(kC,(t,r)=>{const a=e[r];return a!=null?String(a):`<${r}?>`})}const kC=/\{\$([^}]+)}/g;function s1(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ts(i,e){if(i===e)return!0;const t=Object.keys(i),r=Object.keys(e);for(const a of t){if(!r.includes(a))return!1;const l=i[a],h=e[a];if(mb(l)&&mb(h)){if(!ts(l,h))return!1}else if(l!==h)return!1}for(const a of r)if(!t.includes(a))return!1;return!0}function mb(i){return i!==null&&typeof i=="object"}/**
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
 */function cr(i){const e=[];for(const[t,r]of Object.entries(i))Array.isArray(r)?r.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function MC(i){const e={};return i.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[a,l]=r.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function a1(i,e){const t=new VC(i,e);return t.subscribe.bind(t)}class VC{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let a;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");LC(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:r},a.next===void 0&&(a.next=Wm),a.error===void 0&&(a.error=Wm),a.complete===void 0&&(a.complete=Wm);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LC(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Wm(){}/**
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
 */function nn(i){return i&&i._delegate?i._delegate:i}class nr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Js="[DEFAULT]";/**
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
 */class UC{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new SC;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zC(e))try{this.getOrInitializeService({instanceIdentifier:Js})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});r.resolve(l)}catch{}}}}clearInstance(e=Js){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Js){return this.instances.has(e)}getOptions(e=Js){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[l,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(l);r===m&&h.resolve(a)}return a}onInit(e,t){var r;const a=this.normalizeInstanceIdentifier(t),l=(r=this.onInitCallbacks.get(a))!==null&&r!==void 0?r:new Set;l.add(e),this.onInitCallbacks.set(a,l);const h=this.instances.get(a);return h&&e(h,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const a of r)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jC(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Js){return this.component?this.component.multipleInstances?e:Js:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jC(i){return i===Js?void 0:i}function zC(i){return i.instantiationMode==="EAGER"}/**
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
 */class BC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new UC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ke;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ke||(ke={}));const FC={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},HC=ke.INFO,qC={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},GC=(i,e,...t)=>{if(e<i.logLevel)return;const r=new Date().toISOString(),a=qC[e];if(a)console[a](`[${r}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bf{constructor(e){this.name=e,this._logLevel=HC,this._logHandler=GC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const $C=(i,e)=>e.some(t=>i instanceof t);let pb,gb;function KC(){return pb||(pb=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YC(){return gb||(gb=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const o1=new WeakMap,Tp=new WeakMap,l1=new WeakMap,Jm=new WeakMap,Rg=new WeakMap;function QC(i){const e=new Promise((t,r)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",h)},l=()=>{t(Wr(i.result)),a()},h=()=>{r(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&o1.set(t,i)}).catch(()=>{}),Rg.set(e,i),e}function XC(i){if(Tp.has(i))return;const e=new Promise((t,r)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",h),i.removeEventListener("abort",h)},l=()=>{t(),a()},h=()=>{r(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",h),i.addEventListener("abort",h)});Tp.set(i,e)}let Ap={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Tp.get(i);if(e==="objectStoreNames")return i.objectStoreNames||l1.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Wr(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function WC(i){Ap=i(Ap)}function JC(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=i.call(Zm(this),e,...t);return l1.set(r,e.sort?e.sort():[e]),Wr(r)}:YC().includes(i)?function(...e){return i.apply(Zm(this),e),Wr(o1.get(this))}:function(...e){return Wr(i.apply(Zm(this),e))}}function ZC(i){return typeof i=="function"?JC(i):(i instanceof IDBTransaction&&XC(i),$C(i,KC())?new Proxy(i,Ap):i)}function Wr(i){if(i instanceof IDBRequest)return QC(i);if(Jm.has(i))return Jm.get(i);const e=ZC(i);return e!==i&&(Jm.set(i,e),Rg.set(e,i)),e}const Zm=i=>Rg.get(i);function e2(i,e,{blocked:t,upgrade:r,blocking:a,terminated:l}={}){const h=indexedDB.open(i,e),m=Wr(h);return r&&h.addEventListener("upgradeneeded",p=>{r(Wr(h.result),p.oldVersion,p.newVersion,Wr(h.transaction),p)}),t&&h.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),m.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),m}const t2=["get","getKey","getAll","getAllKeys","count"],n2=["put","add","delete","clear"],ep=new Map;function yb(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(ep.get(e))return ep.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,a=n2.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(a||t2.includes(t)))return;const l=async function(h,...m){const p=this.transaction(h,a?"readwrite":"readonly");let g=p.store;return r&&(g=g.index(m.shift())),(await Promise.all([g[t](...m),a&&p.done]))[0]};return ep.set(e,l),l}WC(i=>({...i,get:(e,t,r)=>yb(e,t)||i.get(e,t,r),has:(e,t)=>!!yb(e,t)||i.has(e,t)}));/**
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
 */class i2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(r2(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function r2(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sp="@firebase/app",vb="0.13.0";/**
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
 */const ir=new bf("@firebase/app"),s2="@firebase/app-compat",a2="@firebase/analytics-compat",o2="@firebase/analytics",l2="@firebase/app-check-compat",u2="@firebase/app-check",c2="@firebase/auth",h2="@firebase/auth-compat",f2="@firebase/database",d2="@firebase/data-connect",m2="@firebase/database-compat",p2="@firebase/functions",g2="@firebase/functions-compat",y2="@firebase/installations",v2="@firebase/installations-compat",_2="@firebase/messaging",b2="@firebase/messaging-compat",E2="@firebase/performance",T2="@firebase/performance-compat",A2="@firebase/remote-config",S2="@firebase/remote-config-compat",w2="@firebase/storage",I2="@firebase/storage-compat",R2="@firebase/firestore",C2="@firebase/ai",x2="@firebase/firestore-compat",N2="firebase",O2="11.8.0";/**
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
 */const wp="[DEFAULT]",D2={[Sp]:"fire-core",[s2]:"fire-core-compat",[o2]:"fire-analytics",[a2]:"fire-analytics-compat",[u2]:"fire-app-check",[l2]:"fire-app-check-compat",[c2]:"fire-auth",[h2]:"fire-auth-compat",[f2]:"fire-rtdb",[d2]:"fire-data-connect",[m2]:"fire-rtdb-compat",[p2]:"fire-fn",[g2]:"fire-fn-compat",[y2]:"fire-iid",[v2]:"fire-iid-compat",[_2]:"fire-fcm",[b2]:"fire-fcm-compat",[E2]:"fire-perf",[T2]:"fire-perf-compat",[A2]:"fire-rc",[S2]:"fire-rc-compat",[w2]:"fire-gcs",[I2]:"fire-gcs-compat",[R2]:"fire-fst",[x2]:"fire-fst-compat",[C2]:"fire-vertex","fire-js":"fire-js",[N2]:"fire-js-all"};/**
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
 */const Bh=new Map,P2=new Map,Ip=new Map;function _b(i,e){try{i.container.addComponent(e)}catch(t){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function ns(i){const e=i.name;if(Ip.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;Ip.set(e,i);for(const t of Bh.values())_b(t,i);for(const t of P2.values())_b(t,i);return!0}function Pu(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function wt(i){return i==null?!1:i.settings!==void 0}/**
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
 */const k2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jr=new ms("app","Firebase",k2);/**
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
 */class M2{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jr.create("app-deleted",{appName:this._name})}}/**
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
 */const wi=O2;function u1(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wp,automaticDataCollectionEnabled:!0},e),a=r.name;if(typeof a!="string"||!a)throw Jr.create("bad-app-name",{appName:String(a)});if(t||(t=WT()),!t)throw Jr.create("no-options");const l=Bh.get(a);if(l){if(ts(t,l.options)&&ts(r,l.config))return l;throw Jr.create("duplicate-app",{appName:a})}const h=new BC(a);for(const p of Ip.values())h.addComponent(p);const m=new M2(t,r,h);return Bh.set(a,m),m}function Cg(i=wp){const e=Bh.get(i);if(!e&&i===wp&&WT())return u1();if(!e)throw Jr.create("no-app",{appName:i});return e}function yi(i,e,t){var r;let a=(r=D2[i])!==null&&r!==void 0?r:i;t&&(a+=`-${t}`);const l=a.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const m=[`Unable to register library "${a}" with version "${e}":`];l&&m.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(m.join(" "));return}ns(new nr(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const V2="firebase-heartbeat-database",L2=1,_u="firebase-heartbeat-store";let tp=null;function c1(){return tp||(tp=e2(V2,L2,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(_u)}catch(t){console.warn(t)}}}}).catch(i=>{throw Jr.create("idb-open",{originalErrorMessage:i.message})})),tp}async function U2(i){try{const t=(await c1()).transaction(_u),r=await t.objectStore(_u).get(h1(i));return await t.done,r}catch(e){if(e instanceof jn)ir.warn(e.message);else{const t=Jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ir.warn(t.message)}}}async function bb(i,e){try{const r=(await c1()).transaction(_u,"readwrite");await r.objectStore(_u).put(e,h1(i)),await r.done}catch(t){if(t instanceof jn)ir.warn(t.message);else{const r=Jr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ir.warn(r.message)}}}function h1(i){return`${i.name}!${i.options.appId}`}/**
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
 */const j2=1024,z2=30;class B2{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new H2(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Eb();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>z2){const h=q2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ir.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Eb(),{heartbeatsToSend:r,unsentEntries:a}=F2(this._heartbeatsCache.heartbeats),l=zh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return ir.warn(t),""}}}function Eb(){return new Date().toISOString().substring(0,10)}function F2(i,e=j2){const t=[];let r=i.slice();for(const a of i){const l=t.find(h=>h.agent===a.agent);if(l){if(l.dates.push(a.date),Tb(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),Tb(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class H2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NC()?OC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await U2(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return bb(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return bb(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function Tb(i){return zh(JSON.stringify({version:2,heartbeats:i})).length}function q2(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let r=1;r<i.length;r++)i[r].date<t&&(t=i[r].date,e=r);return e}/**
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
 */function G2(i){ns(new nr("platform-logger",e=>new i2(e),"PRIVATE")),ns(new nr("heartbeat",e=>new B2(e),"PRIVATE")),yi(Sp,vb,i),yi(Sp,vb,"esm2017"),yi("fire-js","")}G2("");function Lo(i,e){var t={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&e.indexOf(r)<0&&(t[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(i);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(i,r[a])&&(t[r[a]]=i[r[a]]);return t}function f1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $2=f1,d1=new ms("auth","Firebase",f1());/**
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
 */const Fh=new bf("@firebase/auth");function K2(i,...e){Fh.logLevel<=ke.WARN&&Fh.warn(`Auth (${wi}): ${i}`,...e)}function wh(i,...e){Fh.logLevel<=ke.ERROR&&Fh.error(`Auth (${wi}): ${i}`,...e)}/**
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
 */function Ei(i,...e){throw Ng(i,...e)}function Yn(i,...e){return Ng(i,...e)}function xg(i,e,t){const r=Object.assign(Object.assign({},$2()),{[e]:t});return new ms("auth","Firebase",r).create(e,{appName:i.name})}function na(i){return xg(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Y2(i,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ei(i,"argument-error"),xg(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ng(i,...e){if(typeof i!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(t,...r)}return d1.create(i,...e)}function Ae(i,e,...t){if(!i)throw Ng(e,...t)}function Ji(i){const e="INTERNAL ASSERTION FAILED: "+i;throw wh(e),new Error(e)}function rr(i,e){i||Ji(e)}/**
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
 */function Rp(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Q2(){return Ab()==="http:"||Ab()==="https:"}function Ab(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function X2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Q2()||n1()||"connection"in navigator)?navigator.onLine:!0}function W2(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */let ku=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,rr(t>e,"Short delay should be less than long delay!"),this.isMobile=e1()||i1()}get(){return X2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
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
 */function Og(i,e){rr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */let m1=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ji("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ji("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ji("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
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
 */const J2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Z2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ex=new ku(3e4,6e4);function Dg(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Uo(i,e,t,r,a={}){return p1(i,a,async()=>{let l={},h={};r&&(e==="GET"?h=r:l={body:JSON.stringify(r)});const m=cr(Object.assign({key:i.config.apiKey},h)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},l);return t1()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&Vo(i.emulatorConfig.host)&&(g.credentials="include"),m1.fetch()(await g1(i,i.config.apiHost,t,m),g)})}async function p1(i,e,t){i._canInitEmulator=!1;const r=Object.assign(Object.assign({},J2),e);try{const a=new nx(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw gh(i,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const m=l.ok?h.errorMessage:h.error.message,[p,g]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw gh(i,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw gh(i,"email-already-in-use",h);if(p==="USER_DISABLED")throw gh(i,"user-disabled",h);const b=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw xg(i,b,g);Ei(i,b)}}catch(a){if(a instanceof jn)throw a;Ei(i,"network-request-failed",{message:String(a)})}}async function tx(i,e,t,r,a={}){const l=await Uo(i,e,t,r,a);return"mfaPendingCredential"in l&&Ei(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function g1(i,e,t,r){const a=`${e}${t}?${r}`,l=i,h=l.config.emulator?Og(i.config,a):`${i.config.apiScheme}://${a}`;return Z2.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}let nx=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Yn(this.auth,"network-request-failed")),ex.get())})}};function gh(i,e,t){const r={appName:i.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const a=Yn(i,e,r);return a.customData._tokenResponse=t,a}/**
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
 */async function ix(i,e){return Uo(i,"POST","/v1/accounts:delete",e)}async function Hh(i,e){return Uo(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function ou(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rx(i,e=!1){const t=nn(i),r=await t.getIdToken(e),a=Pg(r);Ae(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:a,token:r,authTime:ou(np(a.auth_time)),issuedAtTime:ou(np(a.iat)),expirationTime:ou(np(a.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function np(i){return Number(i)*1e3}function Pg(i){const[e,t,r]=i.split(".");if(e===void 0||t===void 0||r===void 0)return wh("JWT malformed, contained fewer than 3 sections"),null;try{const a=Ig(t);return a?JSON.parse(a):(wh("Failed to decode base64 JWT payload"),null)}catch(a){return wh("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Sb(i){const e=Pg(i);return Ae(e,"internal-error"),Ae(typeof e.exp<"u","internal-error"),Ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function bu(i,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof jn&&sx(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function sx({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */let ax=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
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
 */let Cp=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ou(this.lastLoginAt),this.creationTime=ou(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
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
 */async function qh(i){var e;const t=i.auth,r=await i.getIdToken(),a=await bu(i,Hh(t,{idToken:r}));Ae(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];i._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?y1(l.providerUserInfo):[],m=lx(i.providerData,h),p=i.isAnonymous,g=!(i.email&&l.passwordHash)&&!(m!=null&&m.length),b=p?g:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:m,metadata:new Cp(l.createdAt,l.lastLoginAt),isAnonymous:b};Object.assign(i,T)}async function ox(i){const e=nn(i);await qh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lx(i,e){return[...i.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function y1(i){return i.map(e=>{var{providerId:t}=e,r=Lo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ux(i,e){const t=await p1(i,{},async()=>{const r=cr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,h=await g1(i,a,"/v1/token",`key=${l}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",m1.fetch()(h,{method:"POST",headers:m,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function cx(i,e){return Uo(i,"POST","/v2/accounts:revokeToken",Dg(i,e))}/**
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
 */let ip=class xp{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ae(e.idToken,"internal-error"),Ae(typeof e.idToken<"u","internal-error"),Ae(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ae(e.length!==0,"internal-error");const t=Sb(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:a,expiresIn:l}=await ux(e,t);this.updateTokensAndExpiration(r,a,Number(l))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:a,expirationTime:l}=t,h=new xp;return r&&(Ae(typeof r=="string","internal-error",{appName:e}),h.refreshToken=r),a&&(Ae(typeof a=="string","internal-error",{appName:e}),h.accessToken=a),l&&(Ae(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xp,this.toJSON())}_performRefresh(){return Ji("not implemented")}};/**
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
 */function Br(i,e){Ae(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}let go=class tu{constructor(e){var{uid:t,auth:r,stsTokenManager:a}=e,l=Lo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ax(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Cp(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await bu(this,this.stsTokenManager.getToken(this.auth,e));return Ae(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return rx(this,e)}reload(){return ox(this)}_assign(e){this!==e&&(Ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new tu(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await qh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(na(this.auth));const e=await this.getIdToken();return await bu(this,ix(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,a,l,h,m,p,g,b;const T=(r=t.displayName)!==null&&r!==void 0?r:void 0,S=(a=t.email)!==null&&a!==void 0?a:void 0,j=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,G=(h=t.photoURL)!==null&&h!==void 0?h:void 0,W=(m=t.tenantId)!==null&&m!==void 0?m:void 0,F=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,ee=(g=t.createdAt)!==null&&g!==void 0?g:void 0,ie=(b=t.lastLoginAt)!==null&&b!==void 0?b:void 0,{uid:ne,emailVerified:fe,isAnonymous:ce,providerData:Ce,stsTokenManager:D}=t;Ae(ne&&D,e,"internal-error");const w=ip.fromJSON(this.name,D);Ae(typeof ne=="string",e,"internal-error"),Br(T,e.name),Br(S,e.name),Ae(typeof fe=="boolean",e,"internal-error"),Ae(typeof ce=="boolean",e,"internal-error"),Br(j,e.name),Br(G,e.name),Br(W,e.name),Br(F,e.name),Br(ee,e.name),Br(ie,e.name);const C=new tu({uid:ne,auth:e,email:S,emailVerified:fe,displayName:T,isAnonymous:ce,photoURL:G,phoneNumber:j,tenantId:W,stsTokenManager:w,createdAt:ee,lastLoginAt:ie});return Ce&&Array.isArray(Ce)&&(C.providerData=Ce.map(P=>Object.assign({},P))),F&&(C._redirectEventId=F),C}static async _fromIdTokenResponse(e,t,r=!1){const a=new ip;a.updateFromServerResponse(t);const l=new tu({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await qh(l),l}static async _fromGetAccountInfoResponse(e,t,r){const a=t.users[0];Ae(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?y1(a.providerUserInfo):[],h=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),m=new ip;m.updateFromIdToken(r);const p=new tu({uid:a.localId,auth:e,stsTokenManager:m,isAnonymous:h}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Cp(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}};/**
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
 */const wb=new Map;function Zi(i){rr(i instanceof Function,"Expected a class definition");let e=wb.get(i);return e?(rr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,wb.set(i,e),e)}/**
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
 */let v1=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};v1.type="NONE";const Ib=v1;/**
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
 */function Ih(i,e,t){return`firebase:${i}:${e}:${t}`}let Rb=class Rh{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:a,name:l}=this.auth;this.fullUserKey=Ih(this.userKey,a.apiKey,l),this.fullPersistenceKey=Ih("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Hh(this.auth,{idToken:e}).catch(()=>{});return t?go._fromGetAccountInfoResponse(this.auth,t,e):null}return go._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Rh(Zi(Ib),e,r);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Zi(Ib);const h=Ih(r,e.config.apiKey,e.name);let m=null;for(const g of t)try{const b=await g._get(h);if(b){let T;if(typeof b=="string"){const S=await Hh(e,{idToken:b}).catch(()=>{});if(!S)break;T=await go._fromGetAccountInfoResponse(e,S,b)}else T=go._fromJSON(e,b);g!==l&&(m=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Rh(l,e,r):(l=p[0],m&&await l._set(h,m.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(h)}catch{}})),new Rh(l,e,r))}};/**
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
 */function Cb(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(T1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(S1(e))return"Blackberry";if(w1(e))return"Webos";if(b1(e))return"Safari";if((e.includes("chrome/")||E1(e))&&!e.includes("edge/"))return"Chrome";if(A1(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _1(i=tt()){return/firefox\//i.test(i)}function b1(i=tt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function E1(i=tt()){return/crios\//i.test(i)}function T1(i=tt()){return/iemobile/i.test(i)}function A1(i=tt()){return/android/i.test(i)}function S1(i=tt()){return/blackberry/i.test(i)}function w1(i=tt()){return/webos/i.test(i)}function kg(i=tt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function hx(i=tt()){var e;return kg(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fx(){return r1()&&document.documentMode===10}function I1(i=tt()){return kg(i)||A1(i)||w1(i)||S1(i)||/windows phone/i.test(i)||T1(i)}/**
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
 */function R1(i,e=[]){let t;switch(i){case"Browser":t=Cb(tt());break;case"Worker":t=`${Cb(tt())}-${i}`;break;default:t=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${wi}/${r}`}/**
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
 */let dx=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=l=>new Promise((h,m)=>{try{const p=e(l);h(p)}catch(p){m(p)}});r.onAbort=t,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}};/**
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
 */async function mx(i,e={}){return Uo(i,"GET","/v2/passwordPolicy",Dg(i,e))}/**
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
 */const px=6;let gx=class{constructor(e){var t,r,a,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:px,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,a,l,h,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(r=p.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}};/**
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
 */let yx=class{constructor(e,t,r,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xb(this),this.idTokenSubscription=new xb(this),this.beforeStateQueue=new dx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=d1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Zi(t)),this._initializationPromise=this.queue(async()=>{var r,a,l;if(!this._deleted&&(this.persistenceManager=await Rb.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Hh(this,{idToken:e}),r=await go._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(wt(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===m)&&(p!=null&&p.user)&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(h){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await qh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=W2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject(na(this));const t=e?nn(e):null;return t&&Ae(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(na(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject(na(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mx(this),t=new gx(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ms("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await cx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Zi(e)||this._popupRedirectResolver;Ae(t,this,"argument-error"),this.redirectPersistenceManager=await Rb.create(this,[Zi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ae(m,this,"internal-error"),m.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,r,a);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=R1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&K2(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}};function Ef(i){return nn(i)}let xb=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=a1(t=>this.observer=t)}get next(){return Ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
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
 */let Mg={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vx(i){Mg=i}function _x(i){return Mg.loadJS(i)}function bx(){return Mg.gapiScript}function Ex(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Tx(i,e){const t=Pu(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(ts(l,e??{}))return a;Ei(a,"already-initialized")}return t.initialize({options:e})}function Ax(i,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Zi);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Sx(i,e,t){const r=Ef(i);Ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const a=!1,l=C1(e),{host:h,port:m}=wx(e),p=m===null?"":`:${m}`,g={url:`${l}//${h}${p}/`},b=Object.freeze({host:h,port:m,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!r._canInitEmulator){Ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Ae(ts(g,r.config.emulator)&&ts(b,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=b,r.settings.appVerificationDisabledForTesting=!0,Vo(h)?(_f("Auth",!0),ZT(`${l}//${h}${p}`)):Ix()}function C1(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function wx(i){const e=C1(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const l=a[1];return{host:l,port:Nb(r.substr(l.length+1))}}else{const[l,h]=r.split(":");return{host:l,port:Nb(h)}}}function Nb(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Ix(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */let x1=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ji("not implemented")}_getIdTokenResponse(e){return Ji("not implemented")}_linkToIdToken(e,t){return Ji("not implemented")}_getReauthenticationResolver(e){return Ji("not implemented")}};/**
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
 */async function _o(i,e){return tx(i,"POST","/v1/accounts:signInWithIdp",Dg(i,e))}/**
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
 */const Rx="http://localhost";let Tf=class Np extends x1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Np(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ei("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=t,l=Lo(t,["providerId","signInMethod"]);if(!r||!a)return null;const h=new Np(r,a);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return _o(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,_o(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_o(e,t)}buildRequest(){const e={requestUri:Rx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=cr(t)}return e}};/**
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
 */let Vg=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};/**
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
 */let Mu=class extends Vg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};/**
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
 */let N1=class oo extends Mu{constructor(){super("facebook.com")}static credential(e){return Tf._fromParams({providerId:oo.PROVIDER_ID,signInMethod:oo.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oo.credentialFromTaggedObject(e)}static credentialFromError(e){return oo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oo.credential(e.oauthAccessToken)}catch{return null}}};N1.FACEBOOK_SIGN_IN_METHOD="facebook.com";N1.PROVIDER_ID="facebook.com";/**
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
 */let Lg=class lo extends Mu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Tf._fromParams({providerId:lo.PROVIDER_ID,signInMethod:lo.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return lo.credentialFromTaggedObject(e)}static credentialFromError(e){return lo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return lo.credential(t,r)}catch{return null}}};Lg.GOOGLE_SIGN_IN_METHOD="google.com";Lg.PROVIDER_ID="google.com";/**
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
 */let O1=class uo extends Mu{constructor(){super("github.com")}static credential(e){return Tf._fromParams({providerId:uo.PROVIDER_ID,signInMethod:uo.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return uo.credentialFromTaggedObject(e)}static credentialFromError(e){return uo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return uo.credential(e.oauthAccessToken)}catch{return null}}};O1.GITHUB_SIGN_IN_METHOD="github.com";O1.PROVIDER_ID="github.com";/**
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
 */let D1=class co extends Mu{constructor(){super("twitter.com")}static credential(e,t){return Tf._fromParams({providerId:co.PROVIDER_ID,signInMethod:co.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return co.credentialFromTaggedObject(e)}static credentialFromError(e){return co.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return co.credential(t,r)}catch{return null}}};D1.TWITTER_SIGN_IN_METHOD="twitter.com";D1.PROVIDER_ID="twitter.com";/**
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
 */let Ug=class Op{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,a=!1){const l=await go._fromIdTokenResponse(e,r,a),h=Ob(r);return new Op({user:l,providerId:h,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const a=Ob(r);return new Op({user:e,providerId:a,_tokenResponse:r,operationType:t})}};function Ob(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */let Cx=class Dp extends jn{constructor(e,t,r,a){var l;super(t.code,t.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,Dp.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,a){return new Dp(e,t,r,a)}};function P1(i,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Cx._fromErrorAndOperation(i,l,e,r):l})}async function xx(i,e,t=!1){const r=await bu(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Ug._forOperation(i,"link",r)}/**
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
 */async function Nx(i,e,t=!1){const{auth:r}=i;if(wt(r.app))return Promise.reject(na(r));const a="reauthenticate";try{const l=await bu(i,P1(r,a,e,i),t);Ae(l.idToken,r,"internal-error");const h=Pg(l.idToken);Ae(h,r,"internal-error");const{sub:m}=h;return Ae(i.uid===m,r,"user-mismatch"),Ug._forOperation(i,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Ei(r,"user-mismatch"),l}}/**
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
 */async function Ox(i,e,t=!1){if(wt(i.app))return Promise.reject(na(i));const r="signIn",a=await P1(i,r,e),l=await Ug._fromIdTokenResponse(i,r,a);return t||await i._updateCurrentUser(l.user),l}function Dx(i,e,t,r){return nn(i).onIdTokenChanged(e,t,r)}function Px(i,e,t){return nn(i).beforeAuthStateChanged(e,t)}function k1(i,e,t,r){return nn(i).onAuthStateChanged(e,t,r)}function kx(i){return nn(i).signOut()}const Gh="__sak";/**
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
 */let M1=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Gh,"1"),this.storage.removeItem(Gh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};/**
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
 */const Mx=1e3,Vx=10;let V1=class extends M1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=I1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),a=this.localCache[t];r!==a&&e(t,a,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,p)=>{this.notifyListeners(h,p)});return}const r=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const h=this.storage.getItem(r);!t&&this.localCache[r]===h||this.notifyListeners(r,h)},l=this.storage.getItem(r);fx()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,Vx):a()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Mx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};V1.type="LOCAL";const Lx=V1;/**
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
 */let L1=class extends M1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};L1.type="SESSION";const U1=L1;/**
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
 */function Ux(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */let j1=class z1{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const r=new z1(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:a,data:l}=t.data,h=this.handlersMap[a];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const m=Array.from(h).map(async g=>g(t.origin,l)),p=await Ux(m);t.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};j1.receivers=[];/**
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
 */function jg(i="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */let jx=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,h;return new Promise((m,p)=>{const g=jg("",20);a.port1.start();const b=setTimeout(()=>{p(new Error("unsupported_event"))},r);h={messageChannel:a,onMessage(T){const S=T;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(b),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),m(S.data.response);break;default:clearTimeout(b),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(h),a.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}};/**
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
 */function vi(){return window}function zx(i){vi().location.href=i}/**
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
 */function B1(){return typeof vi().WorkerGlobalScope<"u"&&typeof vi().importScripts=="function"}async function Bx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fx(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function Hx(){return B1()?self:null}/**
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
 */const F1="firebaseLocalStorageDb",qx=1,$h="firebaseLocalStorage",H1="fbase_key";let Vu=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function Af(i,e){return i.transaction([$h],e?"readwrite":"readonly").objectStore($h)}function Gx(){const i=indexedDB.deleteDatabase(F1);return new Vu(i).toPromise()}function Pp(){const i=indexedDB.open(F1,qx);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore($h,{keyPath:H1})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains($h)?e(r):(r.close(),await Gx(),e(await Pp()))})})}async function Db(i,e,t){const r=Af(i,!0).put({[H1]:e,value:t});return new Vu(r).toPromise()}async function $x(i,e){const t=Af(i,!1).get(e),r=await new Vu(t).toPromise();return r===void 0?null:r.value}function Pb(i,e){const t=Af(i,!0).delete(e);return new Vu(t).toPromise()}const Kx=800,Yx=3;let q1=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Yx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return B1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=j1._getInstance(Hx()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Bx(),!this.activeServiceWorker)return;this.sender=new jx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pp();return await Db(e,Gh,"1"),await Pb(e,Gh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Db(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>$x(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Pb(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Af(a,!1).getAll();return new Vu(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};q1.type="LOCAL";const Qx=q1;new ku(3e4,6e4);/**
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
 */function G1(i,e){return e?Zi(e):(Ae(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */let zg=class extends x1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _o(e,this._buildIdpRequest())}_linkToIdToken(e,t){return _o(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return _o(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function Xx(i){return Ox(i.auth,new zg(i),i.bypassAuthState)}function Wx(i){const{auth:e,user:t}=i;return Ae(t,e,"internal-error"),Nx(t,new zg(i),i.bypassAuthState)}async function Jx(i){const{auth:e,user:t}=i;return Ae(t,e,"internal-error"),xx(t,new zg(i),i.bypassAuthState)}/**
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
 */let $1=class{constructor(e,t,r,a,l=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:a,tenantId:l,error:h,type:m}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:t,sessionId:r,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xx;case"linkViaPopup":case"linkViaRedirect":return Jx;case"reauthViaPopup":case"reauthViaRedirect":return Wx;default:Ei(this.auth,"internal-error")}}resolve(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};/**
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
 */const Zx=new ku(2e3,1e4);async function eN(i,e,t){if(wt(i.app))return Promise.reject(Yn(i,"operation-not-supported-in-this-environment"));const r=Ef(i);Y2(i,e,Vg);const a=G1(r,t);return new Zs(r,"signInViaPopup",e,a).executeNotNull()}class Zs extends $1{constructor(e,t,r,a,l){super(e,t,a,l),this.provider=r,this.authWindow=null,this.pollId=null,Zs.currentPopupAction&&Zs.currentPopupAction.cancel(),Zs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ae(e,this.auth,"internal-error"),e}async onExecution(){rr(this.filter.length===1,"Popup operations only handle one event");const e=jg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zx.get())};e()}}Zs.currentPopupAction=null;/**
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
 */const tN="pendingRedirect",Ch=new Map;let nN=class extends $1{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ch.get(this.auth._key());if(!e){try{const r=await iN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ch.set(this.auth._key(),e)}return this.bypassAuthState||Ch.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function iN(i,e){const t=aN(e),r=sN(i);if(!await r._isAvailable())return!1;const a=await r._get(t)==="true";return await r._remove(t),a}function rN(i,e){Ch.set(i._key(),e)}function sN(i){return Zi(i._redirectPersistence)}function aN(i){return Ih(tN,i.config.apiKey,i.name)}async function oN(i,e,t=!1){if(wt(i.app))return Promise.reject(na(i));const r=Ef(i),a=G1(r,e),h=await new nN(r,a,t).execute();return h&&!t&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,e)),h}/**
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
 */const lN=10*60*1e3;let uN=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cN(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!K1(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Yn(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lN&&this.cachedEventUids.clear(),this.cachedEventUids.has(kb(e))}saveEventToCache(e){this.cachedEventUids.add(kb(e)),this.lastProcessedEventTime=Date.now()}};function kb(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function K1({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cN(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return K1(i);default:return!1}}/**
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
 */async function hN(i,e={}){return Uo(i,"GET","/v1/projects",e)}/**
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
 */const fN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dN=/^https?/;async function mN(i){if(i.config.emulator)return;const{authorizedDomains:e}=await hN(i);for(const t of e)try{if(pN(t))return}catch{}Ei(i,"unauthorized-domain")}function pN(i){const e=Rp(),{protocol:t,hostname:r}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&r===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===r}if(!dN.test(t))return!1;if(fN.test(i))return r===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}/**
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
 */const gN=new ku(3e4,6e4);function Mb(){const i=vi().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function yN(i){return new Promise((e,t)=>{var r,a,l;function h(){Mb(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mb(),t(Yn(i,"network-request-failed"))},timeout:gN.get()})}if(!((a=(r=vi().gapi)===null||r===void 0?void 0:r.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=vi().gapi)===null||l===void 0)&&l.load)h();else{const m=Ex("iframefcb");return vi()[m]=()=>{gapi.load?h():t(Yn(i,"network-request-failed"))},_x(`${bx()}?onload=${m}`).catch(p=>t(p))}}).catch(e=>{throw xh=null,e})}let xh=null;function vN(i){return xh=xh||yN(i),xh}/**
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
 */const _N=new ku(5e3,15e3),bN="__/auth/iframe",EN="emulator/auth/iframe",TN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SN(i){const e=i.config;Ae(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Og(e,EN):`https://${i.config.authDomain}/${bN}`,r={apiKey:e.apiKey,appName:i.name,v:wi},a=AN.get(i.config.apiHost);a&&(r.eid=a);const l=i._getFrameworks();return l.length&&(r.fw=l.join(",")),`${t}?${cr(r).slice(1)}`}async function wN(i){const e=await vN(i),t=vi().gapi;return Ae(t,i,"internal-error"),e.open({where:document.body,url:SN(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TN,dontclear:!0},r=>new Promise(async(a,l)=>{await r.restyle({setHideOnLeave:!1});const h=Yn(i,"network-request-failed"),m=vi().setTimeout(()=>{l(h)},_N.get());function p(){vi().clearTimeout(m),a(r)}r.ping(p).then(p,()=>{l(h)})}))}/**
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
 */const IN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RN=500,CN=600,xN="_blank",NN="http://localhost";class Vb{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ON(i,e,t,r=RN,a=CN){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),h=Math.max((window.screen.availWidth-r)/2,0).toString();let m="";const p=Object.assign(Object.assign({},IN),{width:r.toString(),height:a.toString(),top:l,left:h}),g=tt().toLowerCase();t&&(m=E1(g)?xN:t),_1(g)&&(e=e||NN,p.scrollbars="yes");const b=Object.entries(p).reduce((S,[j,G])=>`${S}${j}=${G},`,"");if(hx(g)&&m!=="_self")return DN(e||"",m),new Vb(null);const T=window.open(e||"",m,b);Ae(T,i,"popup-blocked");try{T.focus()}catch{}return new Vb(T)}function DN(i,e){const t=document.createElement("a");t.href=i,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const PN="__/auth/handler",kN="emulator/auth/handler",MN=encodeURIComponent("fac");async function Lb(i,e,t,r,a,l){Ae(i.config.authDomain,i,"auth-domain-config-required"),Ae(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:r,v:wi,eventId:a};if(e instanceof Vg){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",s1(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[b,T]of Object.entries({}))h[b]=T}if(e instanceof Mu){const b=e.getScopes().filter(T=>T!=="");b.length>0&&(h.scopes=b.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const b of Object.keys(m))m[b]===void 0&&delete m[b];const p=await i._getAppCheckToken(),g=p?`#${MN}=${encodeURIComponent(p)}`:"";return`${VN(i)}?${cr(m).slice(1)}${g}`}function VN({config:i}){return i.emulator?Og(i,kN):`https://${i.authDomain}/${PN}`}/**
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
 */const rp="webStorageSupport";class LN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=U1,this._completeRedirectFn=oN,this._overrideRedirectResult=rN}async _openPopup(e,t,r,a){var l;rr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await Lb(e,t,r,Rp(),a);return ON(e,h,jg())}async _openRedirect(e,t,r,a){await this._originValidation(e);const l=await Lb(e,t,r,Rp(),a);return zx(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(rr(l,"If manager is not set, promise should be"),l)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await wN(e),r=new uN(e);return t.register("authEvent",a=>(Ae(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:r.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(rp,{type:rp},a=>{var l;const h=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[rp];h!==void 0&&t(!!h),Ei(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mN(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return I1()||b1()||kg()}}const UN=LN;var Ub="@firebase/auth",jb="1.10.5";/**
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
 */let jN=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
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
 */function zN(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function BN(i){ns(new nr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=r.options;Ae(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:R1(i)},g=new yx(r,a,l,p);return Ax(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ns(new nr("auth-internal",e=>{const t=Ef(e.getProvider("auth").getImmediate());return(r=>new jN(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yi(Ub,jb,zN(i)),yi(Ub,jb,"esm2017")}/**
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
 */const FN=5*60,HN=JT("authIdTokenMaxAge")||FN;let zb=null;const qN=i=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>HN)return;const a=t==null?void 0:t.token;zb!==a&&(zb=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function Bg(i=Cg()){const e=Pu(i,"auth");if(e.isInitialized())return e.getImmediate();const t=Tx(i,{popupRedirectResolver:UN,persistence:[Qx,Lx,U1]}),r=JT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(r,location.origin);if(location.origin===l.origin){const h=qN(l.toString());Px(t,h,()=>h(t.currentUser)),Dx(t,m=>h(m))}}const a=XT("auth");return a?Sx(t,`http://${a}`):_f("Auth",!1),t}function GN(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}vx({loadJS(i){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=e,r.onerror=a=>{const l=Yn("internal-error");l.customData=a,t(l)},r.type="text/javascript",r.charset="UTF-8",GN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});BN("Browser");var $N="firebase",KN="11.8.0";/**
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
 */yi($N,KN,"app");const YN={apiKey:"AIzaSyBu90rcUqw574sLzB_Ka-IRUlTGWo0sjBk",authDomain:"proyectouno-d09e0.firebaseapp.com",databaseURL:"https://proyectouno-d09e0-default-rtdb.firebaseio.com",projectId:"proyectouno-d09e0",storageBucket:"proyectouno-d09e0.firebasestorage.app",messagingSenderId:"567007730982",appId:"1:567007730982:web:cde41dd58a20780201f5e7",measurementId:"G-BJTNZ2M8DH"},Sf=u1(YN);var Bb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zr,Y1;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,w){function C(){}C.prototype=w.prototype,D.D=w.prototype,D.prototype=new C,D.prototype.constructor=D,D.C=function(P,k,V){for(var x=Array(arguments.length-2),Bt=2;Bt<arguments.length;Bt++)x[Bt-2]=arguments[Bt];return w.prototype[k].apply(P,x)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(D,w,C){C||(C=0);var P=Array(16);if(typeof w=="string")for(var k=0;16>k;++k)P[k]=w.charCodeAt(C++)|w.charCodeAt(C++)<<8|w.charCodeAt(C++)<<16|w.charCodeAt(C++)<<24;else for(k=0;16>k;++k)P[k]=w[C++]|w[C++]<<8|w[C++]<<16|w[C++]<<24;w=D.g[0],C=D.g[1],k=D.g[2];var V=D.g[3],x=w+(V^C&(k^V))+P[0]+3614090360&4294967295;w=C+(x<<7&4294967295|x>>>25),x=V+(k^w&(C^k))+P[1]+3905402710&4294967295,V=w+(x<<12&4294967295|x>>>20),x=k+(C^V&(w^C))+P[2]+606105819&4294967295,k=V+(x<<17&4294967295|x>>>15),x=C+(w^k&(V^w))+P[3]+3250441966&4294967295,C=k+(x<<22&4294967295|x>>>10),x=w+(V^C&(k^V))+P[4]+4118548399&4294967295,w=C+(x<<7&4294967295|x>>>25),x=V+(k^w&(C^k))+P[5]+1200080426&4294967295,V=w+(x<<12&4294967295|x>>>20),x=k+(C^V&(w^C))+P[6]+2821735955&4294967295,k=V+(x<<17&4294967295|x>>>15),x=C+(w^k&(V^w))+P[7]+4249261313&4294967295,C=k+(x<<22&4294967295|x>>>10),x=w+(V^C&(k^V))+P[8]+1770035416&4294967295,w=C+(x<<7&4294967295|x>>>25),x=V+(k^w&(C^k))+P[9]+2336552879&4294967295,V=w+(x<<12&4294967295|x>>>20),x=k+(C^V&(w^C))+P[10]+4294925233&4294967295,k=V+(x<<17&4294967295|x>>>15),x=C+(w^k&(V^w))+P[11]+2304563134&4294967295,C=k+(x<<22&4294967295|x>>>10),x=w+(V^C&(k^V))+P[12]+1804603682&4294967295,w=C+(x<<7&4294967295|x>>>25),x=V+(k^w&(C^k))+P[13]+4254626195&4294967295,V=w+(x<<12&4294967295|x>>>20),x=k+(C^V&(w^C))+P[14]+2792965006&4294967295,k=V+(x<<17&4294967295|x>>>15),x=C+(w^k&(V^w))+P[15]+1236535329&4294967295,C=k+(x<<22&4294967295|x>>>10),x=w+(k^V&(C^k))+P[1]+4129170786&4294967295,w=C+(x<<5&4294967295|x>>>27),x=V+(C^k&(w^C))+P[6]+3225465664&4294967295,V=w+(x<<9&4294967295|x>>>23),x=k+(w^C&(V^w))+P[11]+643717713&4294967295,k=V+(x<<14&4294967295|x>>>18),x=C+(V^w&(k^V))+P[0]+3921069994&4294967295,C=k+(x<<20&4294967295|x>>>12),x=w+(k^V&(C^k))+P[5]+3593408605&4294967295,w=C+(x<<5&4294967295|x>>>27),x=V+(C^k&(w^C))+P[10]+38016083&4294967295,V=w+(x<<9&4294967295|x>>>23),x=k+(w^C&(V^w))+P[15]+3634488961&4294967295,k=V+(x<<14&4294967295|x>>>18),x=C+(V^w&(k^V))+P[4]+3889429448&4294967295,C=k+(x<<20&4294967295|x>>>12),x=w+(k^V&(C^k))+P[9]+568446438&4294967295,w=C+(x<<5&4294967295|x>>>27),x=V+(C^k&(w^C))+P[14]+3275163606&4294967295,V=w+(x<<9&4294967295|x>>>23),x=k+(w^C&(V^w))+P[3]+4107603335&4294967295,k=V+(x<<14&4294967295|x>>>18),x=C+(V^w&(k^V))+P[8]+1163531501&4294967295,C=k+(x<<20&4294967295|x>>>12),x=w+(k^V&(C^k))+P[13]+2850285829&4294967295,w=C+(x<<5&4294967295|x>>>27),x=V+(C^k&(w^C))+P[2]+4243563512&4294967295,V=w+(x<<9&4294967295|x>>>23),x=k+(w^C&(V^w))+P[7]+1735328473&4294967295,k=V+(x<<14&4294967295|x>>>18),x=C+(V^w&(k^V))+P[12]+2368359562&4294967295,C=k+(x<<20&4294967295|x>>>12),x=w+(C^k^V)+P[5]+4294588738&4294967295,w=C+(x<<4&4294967295|x>>>28),x=V+(w^C^k)+P[8]+2272392833&4294967295,V=w+(x<<11&4294967295|x>>>21),x=k+(V^w^C)+P[11]+1839030562&4294967295,k=V+(x<<16&4294967295|x>>>16),x=C+(k^V^w)+P[14]+4259657740&4294967295,C=k+(x<<23&4294967295|x>>>9),x=w+(C^k^V)+P[1]+2763975236&4294967295,w=C+(x<<4&4294967295|x>>>28),x=V+(w^C^k)+P[4]+1272893353&4294967295,V=w+(x<<11&4294967295|x>>>21),x=k+(V^w^C)+P[7]+4139469664&4294967295,k=V+(x<<16&4294967295|x>>>16),x=C+(k^V^w)+P[10]+3200236656&4294967295,C=k+(x<<23&4294967295|x>>>9),x=w+(C^k^V)+P[13]+681279174&4294967295,w=C+(x<<4&4294967295|x>>>28),x=V+(w^C^k)+P[0]+3936430074&4294967295,V=w+(x<<11&4294967295|x>>>21),x=k+(V^w^C)+P[3]+3572445317&4294967295,k=V+(x<<16&4294967295|x>>>16),x=C+(k^V^w)+P[6]+76029189&4294967295,C=k+(x<<23&4294967295|x>>>9),x=w+(C^k^V)+P[9]+3654602809&4294967295,w=C+(x<<4&4294967295|x>>>28),x=V+(w^C^k)+P[12]+3873151461&4294967295,V=w+(x<<11&4294967295|x>>>21),x=k+(V^w^C)+P[15]+530742520&4294967295,k=V+(x<<16&4294967295|x>>>16),x=C+(k^V^w)+P[2]+3299628645&4294967295,C=k+(x<<23&4294967295|x>>>9),x=w+(k^(C|~V))+P[0]+4096336452&4294967295,w=C+(x<<6&4294967295|x>>>26),x=V+(C^(w|~k))+P[7]+1126891415&4294967295,V=w+(x<<10&4294967295|x>>>22),x=k+(w^(V|~C))+P[14]+2878612391&4294967295,k=V+(x<<15&4294967295|x>>>17),x=C+(V^(k|~w))+P[5]+4237533241&4294967295,C=k+(x<<21&4294967295|x>>>11),x=w+(k^(C|~V))+P[12]+1700485571&4294967295,w=C+(x<<6&4294967295|x>>>26),x=V+(C^(w|~k))+P[3]+2399980690&4294967295,V=w+(x<<10&4294967295|x>>>22),x=k+(w^(V|~C))+P[10]+4293915773&4294967295,k=V+(x<<15&4294967295|x>>>17),x=C+(V^(k|~w))+P[1]+2240044497&4294967295,C=k+(x<<21&4294967295|x>>>11),x=w+(k^(C|~V))+P[8]+1873313359&4294967295,w=C+(x<<6&4294967295|x>>>26),x=V+(C^(w|~k))+P[15]+4264355552&4294967295,V=w+(x<<10&4294967295|x>>>22),x=k+(w^(V|~C))+P[6]+2734768916&4294967295,k=V+(x<<15&4294967295|x>>>17),x=C+(V^(k|~w))+P[13]+1309151649&4294967295,C=k+(x<<21&4294967295|x>>>11),x=w+(k^(C|~V))+P[4]+4149444226&4294967295,w=C+(x<<6&4294967295|x>>>26),x=V+(C^(w|~k))+P[11]+3174756917&4294967295,V=w+(x<<10&4294967295|x>>>22),x=k+(w^(V|~C))+P[2]+718787259&4294967295,k=V+(x<<15&4294967295|x>>>17),x=C+(V^(k|~w))+P[9]+3951481745&4294967295,D.g[0]=D.g[0]+w&4294967295,D.g[1]=D.g[1]+(k+(x<<21&4294967295|x>>>11))&4294967295,D.g[2]=D.g[2]+k&4294967295,D.g[3]=D.g[3]+V&4294967295}r.prototype.u=function(D,w){w===void 0&&(w=D.length);for(var C=w-this.blockSize,P=this.B,k=this.h,V=0;V<w;){if(k==0)for(;V<=C;)a(this,D,V),V+=this.blockSize;if(typeof D=="string"){for(;V<w;)if(P[k++]=D.charCodeAt(V++),k==this.blockSize){a(this,P),k=0;break}}else for(;V<w;)if(P[k++]=D[V++],k==this.blockSize){a(this,P),k=0;break}}this.h=k,this.o+=w},r.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var w=1;w<D.length-8;++w)D[w]=0;var C=8*this.o;for(w=D.length-8;w<D.length;++w)D[w]=C&255,C/=256;for(this.u(D),D=Array(16),w=C=0;4>w;++w)for(var P=0;32>P;P+=8)D[C++]=this.g[w]>>>P&255;return D};function l(D,w){var C=m;return Object.prototype.hasOwnProperty.call(C,D)?C[D]:C[D]=w(D)}function h(D,w){this.h=w;for(var C=[],P=!0,k=D.length-1;0<=k;k--){var V=D[k]|0;P&&V==w||(C[k]=V,P=!1)}this.g=C}var m={};function p(D){return-128<=D&&128>D?l(D,function(w){return new h([w|0],0>w?-1:0)}):new h([D|0],0>D?-1:0)}function g(D){if(isNaN(D)||!isFinite(D))return T;if(0>D)return F(g(-D));for(var w=[],C=1,P=0;D>=C;P++)w[P]=D/C|0,C*=4294967296;return new h(w,0)}function b(D,w){if(D.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(D.charAt(0)=="-")return F(b(D.substring(1),w));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=g(Math.pow(w,8)),P=T,k=0;k<D.length;k+=8){var V=Math.min(8,D.length-k),x=parseInt(D.substring(k,k+V),w);8>V?(V=g(Math.pow(w,V)),P=P.j(V).add(g(x))):(P=P.j(C),P=P.add(g(x)))}return P}var T=p(0),S=p(1),j=p(16777216);i=h.prototype,i.m=function(){if(W(this))return-F(this).m();for(var D=0,w=1,C=0;C<this.g.length;C++){var P=this.i(C);D+=(0<=P?P:4294967296+P)*w,w*=4294967296}return D},i.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(G(this))return"0";if(W(this))return"-"+F(this).toString(D);for(var w=g(Math.pow(D,6)),C=this,P="";;){var k=fe(C,w).g;C=ee(C,k.j(w));var V=((0<C.g.length?C.g[0]:C.h)>>>0).toString(D);if(C=k,G(C))return V+P;for(;6>V.length;)V="0"+V;P=V+P}},i.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function G(D){if(D.h!=0)return!1;for(var w=0;w<D.g.length;w++)if(D.g[w]!=0)return!1;return!0}function W(D){return D.h==-1}i.l=function(D){return D=ee(this,D),W(D)?-1:G(D)?0:1};function F(D){for(var w=D.g.length,C=[],P=0;P<w;P++)C[P]=~D.g[P];return new h(C,~D.h).add(S)}i.abs=function(){return W(this)?F(this):this},i.add=function(D){for(var w=Math.max(this.g.length,D.g.length),C=[],P=0,k=0;k<=w;k++){var V=P+(this.i(k)&65535)+(D.i(k)&65535),x=(V>>>16)+(this.i(k)>>>16)+(D.i(k)>>>16);P=x>>>16,V&=65535,x&=65535,C[k]=x<<16|V}return new h(C,C[C.length-1]&-2147483648?-1:0)};function ee(D,w){return D.add(F(w))}i.j=function(D){if(G(this)||G(D))return T;if(W(this))return W(D)?F(this).j(F(D)):F(F(this).j(D));if(W(D))return F(this.j(F(D)));if(0>this.l(j)&&0>D.l(j))return g(this.m()*D.m());for(var w=this.g.length+D.g.length,C=[],P=0;P<2*w;P++)C[P]=0;for(P=0;P<this.g.length;P++)for(var k=0;k<D.g.length;k++){var V=this.i(P)>>>16,x=this.i(P)&65535,Bt=D.i(k)>>>16,ct=D.i(k)&65535;C[2*P+2*k]+=x*ct,ie(C,2*P+2*k),C[2*P+2*k+1]+=V*ct,ie(C,2*P+2*k+1),C[2*P+2*k+1]+=x*Bt,ie(C,2*P+2*k+1),C[2*P+2*k+2]+=V*Bt,ie(C,2*P+2*k+2)}for(P=0;P<w;P++)C[P]=C[2*P+1]<<16|C[2*P];for(P=w;P<2*w;P++)C[P]=0;return new h(C,0)};function ie(D,w){for(;(D[w]&65535)!=D[w];)D[w+1]+=D[w]>>>16,D[w]&=65535,w++}function ne(D,w){this.g=D,this.h=w}function fe(D,w){if(G(w))throw Error("division by zero");if(G(D))return new ne(T,T);if(W(D))return w=fe(F(D),w),new ne(F(w.g),F(w.h));if(W(w))return w=fe(D,F(w)),new ne(F(w.g),w.h);if(30<D.g.length){if(W(D)||W(w))throw Error("slowDivide_ only works with positive integers.");for(var C=S,P=w;0>=P.l(D);)C=ce(C),P=ce(P);var k=Ce(C,1),V=Ce(P,1);for(P=Ce(P,2),C=Ce(C,2);!G(P);){var x=V.add(P);0>=x.l(D)&&(k=k.add(C),V=x),P=Ce(P,1),C=Ce(C,1)}return w=ee(D,k.j(w)),new ne(k,w)}for(k=T;0<=D.l(w);){for(C=Math.max(1,Math.floor(D.m()/w.m())),P=Math.ceil(Math.log(C)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),V=g(C),x=V.j(w);W(x)||0<x.l(D);)C-=P,V=g(C),x=V.j(w);G(V)&&(V=S),k=k.add(V),D=ee(D,x)}return new ne(k,D)}i.A=function(D){return fe(this,D).h},i.and=function(D){for(var w=Math.max(this.g.length,D.g.length),C=[],P=0;P<w;P++)C[P]=this.i(P)&D.i(P);return new h(C,this.h&D.h)},i.or=function(D){for(var w=Math.max(this.g.length,D.g.length),C=[],P=0;P<w;P++)C[P]=this.i(P)|D.i(P);return new h(C,this.h|D.h)},i.xor=function(D){for(var w=Math.max(this.g.length,D.g.length),C=[],P=0;P<w;P++)C[P]=this.i(P)^D.i(P);return new h(C,this.h^D.h)};function ce(D){for(var w=D.g.length+1,C=[],P=0;P<w;P++)C[P]=D.i(P)<<1|D.i(P-1)>>>31;return new h(C,D.h)}function Ce(D,w){var C=w>>5;w%=32;for(var P=D.g.length-C,k=[],V=0;V<P;V++)k[V]=0<w?D.i(V+C)>>>w|D.i(V+C+1)<<32-w:D.i(V+C);return new h(k,D.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Y1=r,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=g,h.fromString=b,Zr=h}).apply(typeof Bb<"u"?Bb:typeof self<"u"?self:typeof window<"u"?window:{});var yh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Q1,nu,X1,Nh,kp,W1,J1,Z1;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,y,v){return c==Array.prototype||c==Object.prototype||(c[y]=v.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof yh=="object"&&yh];for(var y=0;y<c.length;++y){var v=c[y];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=t(this);function a(c,y){if(y)e:{var v=r;c=c.split(".");for(var A=0;A<c.length-1;A++){var L=c[A];if(!(L in v))break e;v=v[L]}c=c[c.length-1],A=v[c],y=y(A),y!=A&&y!=null&&e(v,c,{configurable:!0,writable:!0,value:y})}}function l(c,y){c instanceof String&&(c+="");var v=0,A=!1,L={next:function(){if(!A&&v<c.length){var q=v++;return{value:y(q,c[q]),done:!1}}return A=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}a("Array.prototype.values",function(c){return c||function(){return l(this,function(y,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function p(c){var y=typeof c;return y=y!="object"?y:c?Array.isArray(c)?"array":y:"null",y=="array"||y=="object"&&typeof c.length=="number"}function g(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function b(c,y,v){return c.call.apply(c.bind,arguments)}function T(c,y,v){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,A),c.apply(y,L)}}return function(){return c.apply(y,arguments)}}function S(c,y,v){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?b:T,S.apply(null,arguments)}function j(c,y){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function G(c,y){function v(){}v.prototype=y.prototype,c.aa=y.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(A,L,q){for(var se=Array(arguments.length-2),je=2;je<arguments.length;je++)se[je-2]=arguments[je];return y.prototype[L].apply(A,se)}}function W(c){const y=c.length;if(0<y){const v=Array(y);for(let A=0;A<y;A++)v[A]=c[A];return v}return[]}function F(c,y){for(let v=1;v<arguments.length;v++){const A=arguments[v];if(p(A)){const L=c.length||0,q=A.length||0;c.length=L+q;for(let se=0;se<q;se++)c[L+se]=A[se]}else c.push(A)}}class ee{constructor(y,v){this.i=y,this.j=v,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function ie(c){return/^[\s\xa0]*$/.test(c)}function ne(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function fe(c){return fe[" "](c),c}fe[" "]=function(){};var ce=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function Ce(c,y,v){for(const A in c)y.call(v,c[A],A,c)}function D(c,y){for(const v in c)y.call(void 0,c[v],v,c)}function w(c){const y={};for(const v in c)y[v]=c[v];return y}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(c,y){let v,A;for(let L=1;L<arguments.length;L++){A=arguments[L];for(v in A)c[v]=A[v];for(let q=0;q<C.length;q++)v=C[q],Object.prototype.hasOwnProperty.call(A,v)&&(c[v]=A[v])}}function k(c){var y=1;c=c.split(":");const v=[];for(;0<y&&c.length;)v.push(c.shift()),y--;return c.length&&v.push(c.join(":")),v}function V(c){m.setTimeout(()=>{throw c},0)}function x(){var c=qe;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class Bt{constructor(){this.h=this.g=null}add(y,v){const A=ct.get();A.set(y,v),this.h?this.h.next=A:this.g=A,this.h=A}}var ct=new ee(()=>new $,c=>c.reset());class ${constructor(){this.next=this.g=this.h=null}set(y,v){this.h=y,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,pe=!1,qe=new Bt,N=()=>{const c=m.Promise.resolve(void 0);oe=()=>{c.then(J)}};var J=()=>{for(var c;c=x();){try{c.h.call(c.g)}catch(v){V(v)}var y=ct;y.j(c),100>y.h&&(y.h++,c.next=y.g,y.g=c)}pe=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function re(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}re.prototype.h=function(){this.defaultPrevented=!0};var ge=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};m.addEventListener("test",v,y),m.removeEventListener("test",v,y)}catch{}return c}();function De(c,y){if(re.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget){if(ce){e:{try{fe(y.nodeName);var L=!0;break e}catch{}L=!1}L||(y=null)}}else v=="mouseover"?y=c.fromElement:v=="mouseout"&&(y=c.toElement);this.relatedTarget=y,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Se[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&De.aa.h.call(this)}}G(De,re);var Se={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var kt="closure_listenable_"+(1e6*Math.random()|0),it=0;function Qn(c,y,v,A,L){this.listener=c,this.proxy=null,this.src=y,this.type=v,this.capture=!!A,this.ha=L,this.key=++it,this.da=this.fa=!1}function fr(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ii(c){this.src=c,this.g={},this.h=0}Ii.prototype.add=function(c,y,v,A,L){var q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);var se=gs(c,y,A,L);return-1<se?(y=c[se],v||(y.fa=!1)):(y=new Qn(y,this.src,q,!!A,L),y.fa=v,c.push(y)),y};function ps(c,y){var v=y.type;if(v in c.g){var A=c.g[v],L=Array.prototype.indexOf.call(A,y,void 0),q;(q=0<=L)&&Array.prototype.splice.call(A,L,1),q&&(fr(y),c.g[v].length==0&&(delete c.g[v],c.h--))}}function gs(c,y,v,A){for(var L=0;L<c.length;++L){var q=c[L];if(!q.da&&q.listener==y&&q.capture==!!v&&q.ha==A)return L}return-1}var ys="closure_lm_"+(1e6*Math.random()|0),Go={};function $u(c,y,v,A,L){if(Array.isArray(y)){for(var q=0;q<y.length;q++)$u(c,y[q],v,A,L);return null}return v=Ku(v),c&&c[kt]?c.K(y,v,g(A)?!!A.capture:!1,L):Sn(c,y,v,!1,A,L)}function Sn(c,y,v,A,L,q){if(!y)throw Error("Invalid event type");var se=g(L)?!!L.capture:!!L,je=ga(c);if(je||(c[ys]=je=new Ii(c)),v=je.add(y,v,A,se,q),v.proxy)return v;if(A=qf(),v.proxy=A,A.src=c,A.listener=v,c.addEventListener)ge||(L=se),L===void 0&&(L=!1),c.addEventListener(y.toString(),A,L);else if(c.attachEvent)c.attachEvent(vs(y.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function qf(){function c(v){return y.call(c.src,c.listener,v)}const y=Gf;return c}function $o(c,y,v,A,L){if(Array.isArray(y))for(var q=0;q<y.length;q++)$o(c,y[q],v,A,L);else A=g(A)?!!A.capture:!!A,v=Ku(v),c&&c[kt]?(c=c.i,y=String(y).toString(),y in c.g&&(q=c.g[y],v=gs(q,v,A,L),-1<v&&(fr(q[v]),Array.prototype.splice.call(q,v,1),q.length==0&&(delete c.g[y],c.h--)))):c&&(c=ga(c))&&(y=c.g[y.toString()],c=-1,y&&(c=gs(y,v,A,L)),(v=-1<c?y[c]:null)&&pa(v))}function pa(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[kt])ps(y.i,c);else{var v=c.type,A=c.proxy;y.removeEventListener?y.removeEventListener(v,A,c.capture):y.detachEvent?y.detachEvent(vs(v),A):y.addListener&&y.removeListener&&y.removeListener(A),(v=ga(y))?(ps(v,c),v.h==0&&(v.src=null,y[ys]=null)):fr(c)}}}function vs(c){return c in Go?Go[c]:Go[c]="on"+c}function Gf(c,y){if(c.da)c=!0;else{y=new De(y,this);var v=c.listener,A=c.ha||c.src;c.fa&&pa(c),c=v.call(A,y)}return c}function ga(c){return c=c[ys],c instanceof Ii?c:null}var Ko="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ku(c){return typeof c=="function"?c:(c[Ko]||(c[Ko]=function(y){return c.handleEvent(y)}),c[Ko])}function ht(){le.call(this),this.i=new Ii(this),this.M=this,this.F=null}G(ht,le),ht.prototype[kt]=!0,ht.prototype.removeEventListener=function(c,y,v,A){$o(this,c,y,v,A)};function Ye(c,y){var v,A=c.F;if(A)for(v=[];A;A=A.F)v.push(A);if(c=c.M,A=y.type||y,typeof y=="string")y=new re(y,c);else if(y instanceof re)y.target=y.target||c;else{var L=y;y=new re(A,c),P(y,L)}if(L=!0,v)for(var q=v.length-1;0<=q;q--){var se=y.g=v[q];L=mn(se,A,!0,y)&&L}if(se=y.g=c,L=mn(se,A,!0,y)&&L,L=mn(se,A,!1,y)&&L,v)for(q=0;q<v.length;q++)se=y.g=v[q],L=mn(se,A,!1,y)&&L}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var c=this.i,y;for(y in c.g){for(var v=c.g[y],A=0;A<v.length;A++)fr(v[A]);delete c.g[y],c.h--}}this.F=null},ht.prototype.K=function(c,y,v,A){return this.i.add(String(c),y,!1,v,A)},ht.prototype.L=function(c,y,v,A){return this.i.add(String(c),y,!0,v,A)};function mn(c,y,v,A){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();for(var L=!0,q=0;q<y.length;++q){var se=y[q];if(se&&!se.da&&se.capture==v){var je=se.listener,Rt=se.ha||se.src;se.fa&&ps(c.i,se),L=je.call(Rt,A)!==!1&&L}}return L&&!A.defaultPrevented}function Xt(c,y,v){if(typeof c=="function")v&&(c=S(c,v));else if(c&&typeof c.handleEvent=="function")c=S(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:m.setTimeout(c,y||0)}function Yu(c){c.g=Xt(()=>{c.g=null,c.i&&(c.i=!1,Yu(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class $f extends le{constructor(y,v){super(),this.m=y,this.l=v,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Yu(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _s(c){le.call(this),this.h=c,this.g={}}G(_s,le);var bs=[];function Es(c){Ce(c.g,function(y,v){this.g.hasOwnProperty(v)&&pa(y)},c),c.g={}}_s.prototype.N=function(){_s.aa.N.call(this),Es(this)},_s.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zn=m.JSON.stringify,ya=m.JSON.parse,Ts=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function Yo(){}Yo.prototype.h=null;function Qo(c){return c.h||(c.h=c.i())}function Xo(){}var Ri={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ci(){re.call(this,"d")}G(Ci,re);function Wo(){re.call(this,"c")}G(Wo,re);var Xn={},Jo=null;function dr(){return Jo=Jo||new ht}Xn.La="serverreachability";function va(c){re.call(this,Xn.La,c)}G(va,re);function mr(c){const y=dr();Ye(y,new va(y))}Xn.STAT_EVENT="statevent";function Qu(c,y){re.call(this,Xn.STAT_EVENT,c),this.stat=y}G(Qu,re);function at(c){const y=dr();Ye(y,new Qu(y,c))}Xn.Ma="timingevent";function It(c,y){re.call(this,Xn.Ma,c),this.size=y}G(It,re);function bt(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},y)}function wn(){this.g=!0}wn.prototype.xa=function(){this.g=!1};function Zo(c,y,v,A,L,q){c.info(function(){if(c.g)if(q)for(var se="",je=q.split("&"),Rt=0;Rt<je.length;Rt++){var ze=je[Rt].split("=");if(1<ze.length){var Vt=ze[0];ze=ze[1];var Ct=Vt.split("_");se=2<=Ct.length&&Ct[1]=="type"?se+(Vt+"="+ze+"&"):se+(Vt+"=redacted&")}}else se=null;else se=q;return"XMLHTTP REQ ("+A+") [attempt "+L+"]: "+y+`
`+v+`
`+se})}function Kf(c,y,v,A,L,q,se){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+L+"]: "+y+`
`+v+`
`+q+" "+se})}function pr(c,y,v,A){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+As(c,v)+(A?" "+A:"")})}function Xu(c,y){c.info(function(){return"TIMEOUT: "+y})}wn.prototype.info=function(){};function As(c,y){if(!c.g)return y;if(!y)return null;try{var v=JSON.parse(y);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var A=v[c];if(!(2>A.length)){var L=A[1];if(Array.isArray(L)&&!(1>L.length)){var q=L[0];if(q!="noop"&&q!="stop"&&q!="close")for(var se=1;se<L.length;se++)L[se]=""}}}}return zn(v)}catch{return y}}var gr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wn;function Jn(){}G(Jn,Yo),Jn.prototype.g=function(){return new XMLHttpRequest},Jn.prototype.i=function(){return{}},Wn=new Jn;function sn(c,y,v,A){this.j=c,this.i=y,this.l=v,this.R=A||1,this.U=new _s(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new pt}function pt(){this.i=null,this.g="",this.h=!1}var el={},_a={};function Bn(c,y,v){c.L=1,c.v=Cs(pn(y)),c.m=v,c.P=!0,Ni(c,null)}function Ni(c,y){c.F=Date.now(),Ss(c),c.A=pn(c.v);var v=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),al(v.i,"t",A),c.C=0,v=c.j.J,c.h=new pt,c.g=fc(c.j,v?y:null,!c.m),0<c.O&&(c.M=new $f(S(c.Y,c,c.g),c.O)),y=c.U,v=c.g,A=c.ca;var L="readystatechange";Array.isArray(L)||(L&&(bs[0]=L.toString()),L=bs);for(var q=0;q<L.length;q++){var se=$u(v,L[q],A||y.handleEvent,!1,y.h||y);if(!se)break;y.g[se.key]=se}y=c.H?w(c.H):{},c.m?(c.u||(c.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,y)):(c.u="GET",c.g.ea(c.A,c.u,null,y)),mr(),Zo(c.i,c.u,c.A,c.l,c.R,c.m)}sn.prototype.ca=function(c){c=c.target;const y=this.M;y&&xn(c)==3?y.j():this.Y(c)},sn.prototype.Y=function(c){try{if(c==this.g)e:{const Ct=xn(this.g);var y=this.g.Ba();const Ui=this.g.Z();if(!(3>Ct)&&(Ct!=3||this.g&&(this.h.h||this.g.oa()||rc(this.g)))){this.J||Ct!=4||y==7||(y==8||0>=Ui?mr(3):mr(2)),yr(this);var v=this.g.Z();this.X=v;t:if(Wu(this)){var A=rc(this.g);c="";var L=A.length,q=xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ft(this),Zn(this);var se="";break t}this.h.i=new m.TextDecoder}for(y=0;y<L;y++)this.h.h=!0,c+=this.h.i.decode(A[y],{stream:!(q&&y==L-1)});A.length=0,this.h.g+=c,this.C=0,se=this.h.g}else se=this.g.oa();if(this.o=v==200,Kf(this.i,this.u,this.A,this.l,this.R,Ct,v),this.o){if(this.T&&!this.K){t:{if(this.g){var je,Rt=this.g;if((je=Rt.g?Rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ie(je)){var ze=je;break t}}ze=null}if(v=ze)pr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ws(this,v);else{this.o=!1,this.s=3,at(12),Ft(this),Zn(this);break e}}if(this.P){v=!0;let Ht;for(;!this.J&&this.C<se.length;)if(Ht=Ju(this,se),Ht==_a){Ct==4&&(this.s=4,at(14),v=!1),pr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==el){this.s=4,at(15),pr(this.i,this.l,se,"[Invalid Chunk]"),v=!1;break}else pr(this.i,this.l,Ht,null),ws(this,Ht);if(Wu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ct!=4||se.length!=0||this.h.h||(this.s=1,at(16),v=!1),this.o=this.o&&v,!v)pr(this.i,this.l,se,"[Invalid Chunked Response]"),Ft(this),Zn(this);else if(0<se.length&&!this.W){this.W=!0;var Vt=this.j;Vt.g==this&&Vt.ba&&!Vt.M&&(Vt.j.info("Great, no buffering proxy detected. Bytes received: "+se.length),Vs(Vt),Vt.M=!0,at(11))}}else pr(this.i,this.l,se,null),ws(this,se);Ct==4&&Ft(this),this.o&&!this.J&&(Ct==4?uc(this.j,this):(this.o=!1,Ss(this)))}else Jf(this.g),v==400&&0<se.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),Ft(this),Zn(this)}}}catch{}finally{}};function Wu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Ju(c,y){var v=c.C,A=y.indexOf(`
`,v);return A==-1?_a:(v=Number(y.substring(v,A)),isNaN(v)?el:(A+=1,A+v>y.length?_a:(y=y.slice(A,A+v),c.C=A+v,y)))}sn.prototype.cancel=function(){this.J=!0,Ft(this)};function Ss(c){c.S=Date.now()+c.I,Zu(c,c.I)}function Zu(c,y){if(c.B!=null)throw Error("WatchDog timer not null");c.B=bt(S(c.ba,c),y)}function yr(c){c.B&&(m.clearTimeout(c.B),c.B=null)}sn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Xu(this.i,this.A),this.L!=2&&(mr(),at(17)),Ft(this),this.s=2,Zn(this)):Zu(this,this.S-c)};function Zn(c){c.j.G==0||c.J||uc(c.j,c)}function Ft(c){yr(c);var y=c.M;y&&typeof y.ma=="function"&&y.ma(),c.M=null,Es(c.U),c.g&&(y=c.g,c.g=null,y.abort(),y.ma())}function ws(c,y){try{var v=c.j;if(v.G!=0&&(v.g==c||tl(v.h,c))){if(!c.K&&tl(v.h,c)&&v.G==3){try{var A=v.Da.g.parse(y)}catch{A=null}if(Array.isArray(A)&&A.length==3){var L=A;if(L[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)Oa(v),xa(v);else break e;hl(v),at(18)}}else v.za=L[1],0<v.za-v.T&&37500>L[2]&&v.F&&v.v==0&&!v.C&&(v.C=bt(S(v.Za,v),6e3));if(1>=Ea(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Li(v,11)}else if((c.K||v.g==c)&&Oa(v),!ie(y))for(L=v.Da.g.parse(y),y=0;y<L.length;y++){let ze=L[y];if(v.T=ze[0],ze=ze[1],v.G==2)if(ze[0]=="c"){v.K=ze[1],v.ia=ze[2];const Vt=ze[3];Vt!=null&&(v.la=Vt,v.j.info("VER="+v.la));const Ct=ze[4];Ct!=null&&(v.Aa=Ct,v.j.info("SVER="+v.Aa));const Ui=ze[5];Ui!=null&&typeof Ui=="number"&&0<Ui&&(A=1.5*Ui,v.L=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const Ht=c.g;if(Ht){const ai=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ai){var q=A.h;q.g||ai.indexOf("spdy")==-1&&ai.indexOf("quic")==-1&&ai.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Ta(q,q.h),q.h=null))}if(A.D){const dl=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;dl&&(A.ya=dl,We(A.I,A.D,dl))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),A=v;var se=c;if(A.qa=hc(A,A.J?A.ia:null,A.W),se.K){an(A.h,se);var je=se,Rt=A.L;Rt&&(je.I=Rt),je.B&&(yr(je),Ss(je)),A.g=se}else oc(A);0<v.i.length&&Na(v)}else ze[0]!="stop"&&ze[0]!="close"||Li(v,7);else v.G==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?Li(v,7):ul(v):ze[0]!="noop"&&v.l&&v.l.ta(ze),v.v=0)}}mr(4)}catch{}}var ec=class{constructor(c,y){this.g=c,this.map=y}};function Oi(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ba(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ea(c){return c.h?1:c.g?c.g.size:0}function tl(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function Ta(c,y){c.g?c.g.add(y):c.h=y}function an(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}Oi.prototype.cancel=function(){if(this.i=nl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function nl(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const v of c.g.values())y=y.concat(v.D);return y}return W(c.i)}function Yf(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(p(c)){for(var y=[],v=c.length,A=0;A<v;A++)y.push(c[A]);return y}y=[],v=0;for(A in c)y[v++]=c[A];return y}function Aa(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(p(c)||typeof c=="string"){var y=[];c=c.length;for(var v=0;v<c;v++)y.push(v);return y}y=[],v=0;for(const A in c)y[v++]=A;return y}}}function il(c,y){if(c.forEach&&typeof c.forEach=="function")c.forEach(y,void 0);else if(p(c)||typeof c=="string")Array.prototype.forEach.call(c,y,void 0);else for(var v=Aa(c),A=Yf(c),L=A.length,q=0;q<L;q++)y.call(void 0,A[q],v&&v[q],c)}var Is=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qf(c,y){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var A=c[v].indexOf("="),L=null;if(0<=A){var q=c[v].substring(0,A);L=c[v].substring(A+1)}else q=c[v];y(q,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Et(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Et){this.h=c.h,Rs(this,c.j),this.o=c.o,this.g=c.g,vr(this,c.s),this.l=c.l;var y=c.i,v=new Pi;v.i=y.i,y.g&&(v.g=new Map(y.g),v.h=y.h),Di(this,v),this.m=c.m}else c&&(y=String(c).match(Is))?(this.h=!1,Rs(this,y[1]||"",!0),this.o=In(y[2]||""),this.g=In(y[3]||"",!0),vr(this,y[4]),this.l=In(y[5]||"",!0),Di(this,y[6]||"",!0),this.m=In(y[7]||"")):(this.h=!1,this.i=new Pi(null,this.h))}Et.prototype.toString=function(){var c=[],y=this.j;y&&c.push(xs(y,rl,!0),":");var v=this.g;return(v||y=="file")&&(c.push("//"),(y=this.o)&&c.push(xs(y,rl,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(xs(v,v.charAt(0)=="/"?Xf:sl,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",xs(v,Sa)),c.join("")};function pn(c){return new Et(c)}function Rs(c,y,v){c.j=v?In(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function vr(c,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);c.s=y}else c.s=null}function Di(c,y,v){y instanceof Pi?(c.i=y,nc(c.i,c.h)):(v||(y=xs(y,Wf)),c.i=new Pi(y,c.h))}function We(c,y,v){c.i.set(y,v)}function Cs(c){return We(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function In(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function xs(c,y,v){return typeof c=="string"?(c=encodeURI(c).replace(y,tc),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function tc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var rl=/[#\/\?@]/g,sl=/[#\?:]/g,Xf=/[#\?]/g,Wf=/[#\?@]/g,Sa=/#/g;function Pi(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function Rn(c){c.g||(c.g=new Map,c.h=0,c.i&&Qf(c.i,function(y,v){c.add(decodeURIComponent(y.replace(/\+/g," ")),v)}))}i=Pi.prototype,i.add=function(c,y){Rn(this),this.i=null,c=ei(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(y),this.h+=1,this};function ki(c,y){Rn(c),y=ei(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Mi(c,y){return Rn(c),y=ei(c,y),c.g.has(y)}i.forEach=function(c,y){Rn(this),this.g.forEach(function(v,A){v.forEach(function(L){c.call(y,L,A,this)},this)},this)},i.na=function(){Rn(this);const c=Array.from(this.g.values()),y=Array.from(this.g.keys()),v=[];for(let A=0;A<y.length;A++){const L=c[A];for(let q=0;q<L.length;q++)v.push(y[A])}return v},i.V=function(c){Rn(this);let y=[];if(typeof c=="string")Mi(this,c)&&(y=y.concat(this.g.get(ei(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)y=y.concat(c[v])}return y},i.set=function(c,y){return Rn(this),this.i=null,c=ei(this,c),Mi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},i.get=function(c,y){return c?(c=this.V(c),0<c.length?String(c[0]):y):y};function al(c,y,v){ki(c,y),0<v.length&&(c.i=null,c.g.set(ei(c,y),W(v)),c.h+=v.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(var v=0;v<y.length;v++){var A=y[v];const q=encodeURIComponent(String(A)),se=this.V(A);for(A=0;A<se.length;A++){var L=q;se[A]!==""&&(L+="="+encodeURIComponent(String(se[A]))),c.push(L)}}return this.i=c.join("&")};function ei(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function nc(c,y){y&&!c.j&&(Rn(c),c.i=null,c.g.forEach(function(v,A){var L=A.toLowerCase();A!=L&&(ki(this,A),al(this,L,v))},c)),c.j=y}function Ns(c,y){const v=new wn;if(m.Image){const A=new Image;A.onload=j(Cn,v,"TestLoadImage: loaded",!0,y,A),A.onerror=j(Cn,v,"TestLoadImage: error",!1,y,A),A.onabort=j(Cn,v,"TestLoadImage: abort",!1,y,A),A.ontimeout=j(Cn,v,"TestLoadImage: timeout",!1,y,A),m.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else y(!1)}function Fn(c,y){const v=new wn,A=new AbortController,L=setTimeout(()=>{A.abort(),Cn(v,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:A.signal}).then(q=>{clearTimeout(L),q.ok?Cn(v,"TestPingServer: ok",!0,y):Cn(v,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(L),Cn(v,"TestPingServer: error",!1,y)})}function Cn(c,y,v,A,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),A(v)}catch{}}function Os(){this.g=new Ts}function ti(c,y,v){const A=v||"";try{il(c,function(L,q){let se=L;g(L)&&(se=zn(L)),y.push(A+q+"="+encodeURIComponent(se))})}catch(L){throw y.push(A+"type="+encodeURIComponent("_badmap")),L}}function _r(c){this.l=c.Ub||null,this.j=c.eb||!1}G(_r,Yo),_r.prototype.g=function(){return new Vi(this.l,this.j)},_r.prototype.i=function(c){return function(){return c}}({});function Vi(c,y){ht.call(this),this.D=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}G(Vi,ht),i=Vi.prototype,i.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=y,this.readyState=1,ii(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(y.body=c),(this.D||m).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ni(this)),this.readyState=0},i.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ii(this)),this.g&&(this.readyState=3,ii(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ol(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function ol(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}i.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?ni(this):ii(this),this.readyState==3&&ol(this)}},i.Ra=function(c){this.g&&(this.response=this.responseText=c,ni(this))},i.Qa=function(c){this.g&&(this.response=c,ni(this))},i.ga=function(){this.g&&ni(this)};function ni(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ii(c)}i.setRequestHeader=function(c,y){this.u.append(c,y)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var v=y.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=y.next();return c.join(`\r
`)};function ii(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function ll(c){let y="";return Ce(c,function(v,A){y+=A,y+=":",y+=v,y+=`\r
`}),y}function Mt(c,y,v){e:{for(A in v){var A=!1;break e}A=!0}A||(v=ll(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):We(c,y,v))}function $e(c){ht.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}G($e,ht);var wa=/^https?$/i,Ds=["POST","PUT"];i=$e.prototype,i.Ha=function(c){this.J=c},i.ea=function(c,y,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wn.g(),this.v=this.o?Qo(this.o):Qo(Wn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(q){ic(this,q);return}if(c=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var L in A)v.set(L,A[L]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const q of A.keys())v.set(q,A.get(q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(q=>q.toLowerCase()=="content-type"),L=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Ds,y,void 0))||A||L||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,se]of v)this.g.setRequestHeader(q,se);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ps(this),this.u=!0,this.g.send(c),this.u=!1}catch(q){ic(this,q)}};function ic(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.m=5,Ia(c),ri(c)}function Ia(c){c.A||(c.A=!0,Ye(c,"complete"),Ye(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ye(this,"complete"),Ye(this,"abort"),ri(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ri(this,!0)),$e.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Ra(this):this.bb())},i.bb=function(){Ra(this)};function Ra(c){if(c.h&&typeof h<"u"&&(!c.v[1]||xn(c)!=4||c.Z()!=2)){if(c.u&&xn(c)==4)Xt(c.Ea,0,c);else if(Ye(c,"readystatechange"),xn(c)==4){c.h=!1;try{const se=c.Z();e:switch(se){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var v;if(!(v=y)){var A;if(A=se===0){var L=String(c.D).match(Is)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),A=!wa.test(L?L.toLowerCase():"")}v=A}if(v)Ye(c,"complete"),Ye(c,"success");else{c.m=6;try{var q=2<xn(c)?c.g.statusText:""}catch{q=""}c.l=q+" ["+c.Z()+"]",Ia(c)}}finally{ri(c)}}}}function ri(c,y){if(c.g){Ps(c);const v=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,y||Ye(c,"ready");try{v.onreadystatechange=A}catch{}}}function Ps(c){c.I&&(m.clearTimeout(c.I),c.I=null)}i.isActive=function(){return!!this.g};function xn(c){return c.g?c.g.readyState:0}i.Z=function(){try{return 2<xn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),ya(y)}};function rc(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Jf(c){const y={};c=(c.g&&2<=xn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(ie(c[A]))continue;var v=k(c[A]);const L=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const q=y[L]||[];y[L]=q,q.push(v)}D(y,function(A){return A.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ks(c,y,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||y}function Ca(c){this.Aa=0,this.i=[],this.j=new wn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ks("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ks("baseRetryDelayMs",5e3,c),this.cb=ks("retryDelaySeedMs",1e4,c),this.Wa=ks("forwardChannelMaxRetries",2,c),this.wa=ks("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Oi(c&&c.concurrentRequestLimit),this.Da=new Os,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Ca.prototype,i.la=8,i.G=1,i.connect=function(c,y,v,A){at(0),this.W=c,this.H=y||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.I=hc(this,null,this.W),Na(this)};function ul(c){if(sc(c),c.G==3){var y=c.U++,v=pn(c.I);if(We(v,"SID",c.K),We(v,"RID",y),We(v,"TYPE","terminate"),Ms(c,v),y=new sn(c,c.j,y),y.L=2,y.v=Cs(pn(v)),v=!1,m.navigator&&m.navigator.sendBeacon)try{v=m.navigator.sendBeacon(y.v.toString(),"")}catch{}!v&&m.Image&&(new Image().src=y.v,v=!0),v||(y.g=fc(y.j,null),y.g.ea(y.v)),y.F=Date.now(),Ss(y)}cc(c)}function xa(c){c.g&&(Vs(c),c.g.cancel(),c.g=null)}function sc(c){xa(c),c.u&&(m.clearTimeout(c.u),c.u=null),Oa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function Na(c){if(!ba(c.h)&&!c.s){c.s=!0;var y=c.Ga;oe||N(),pe||(oe(),pe=!0),qe.add(y,c),c.B=0}}function Zf(c,y){return Ea(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=y.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=bt(S(c.Ga,c,y),fl(c,c.B)),c.B++,!0)}i.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const L=new sn(this,this.j,c);let q=this.o;if(this.S&&(q?(q=w(q),P(q,this.S)):q=this.S),this.m!==null||this.O||(L.H=q,q=null),this.P)e:{for(var y=0,v=0;v<this.i.length;v++){t:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(y+=A,4096<y){y=v;break e}if(y===4096||v===this.i.length-1){y=v+1;break e}}y=1e3}else y=1e3;y=ac(this,L,y),v=pn(this.I),We(v,"RID",c),We(v,"CVER",22),this.D&&We(v,"X-HTTP-Session-Id",this.D),Ms(this,v),q&&(this.O?y="headers="+encodeURIComponent(String(ll(q)))+"&"+y:this.m&&Mt(v,this.m,q)),Ta(this.h,L),this.Ua&&We(v,"TYPE","init"),this.P?(We(v,"$req",y),We(v,"SID","null"),L.T=!0,Bn(L,v,null)):Bn(L,v,y),this.G=2}}else this.G==3&&(c?cl(this,c):this.i.length==0||ba(this.h)||cl(this))};function cl(c,y){var v;y?v=y.l:v=c.U++;const A=pn(c.I);We(A,"SID",c.K),We(A,"RID",v),We(A,"AID",c.T),Ms(c,A),c.m&&c.o&&Mt(A,c.m,c.o),v=new sn(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),y&&(c.i=y.D.concat(c.i)),y=ac(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Ta(c.h,v),Bn(v,A,y)}function Ms(c,y){c.H&&Ce(c.H,function(v,A){We(y,A,v)}),c.l&&il({},function(v,A){We(y,A,v)})}function ac(c,y,v){v=Math.min(c.i.length,v);var A=c.l?S(c.l.Na,c.l,c):null;e:{var L=c.i;let q=-1;for(;;){const se=["count="+v];q==-1?0<v?(q=L[0].g,se.push("ofs="+q)):q=0:se.push("ofs="+q);let je=!0;for(let Rt=0;Rt<v;Rt++){let ze=L[Rt].g;const Vt=L[Rt].map;if(ze-=q,0>ze)q=Math.max(0,L[Rt].g-100),je=!1;else try{ti(Vt,se,"req"+ze+"_")}catch{A&&A(Vt)}}if(je){A=se.join("&");break e}}}return c=c.i.splice(0,v),y.D=c,A}function oc(c){if(!c.g&&!c.u){c.Y=1;var y=c.Fa;oe||N(),pe||(oe(),pe=!0),qe.add(y,c),c.v=0}}function hl(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=bt(S(c.Fa,c),fl(c,c.v)),c.v++,!0)}i.Fa=function(){if(this.u=null,lc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=bt(S(this.ab,this),c)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),xa(this),lc(this))};function Vs(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function lc(c){c.g=new sn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var y=pn(c.qa);We(y,"RID","rpc"),We(y,"SID",c.K),We(y,"AID",c.T),We(y,"CI",c.F?"0":"1"),!c.F&&c.ja&&We(y,"TO",c.ja),We(y,"TYPE","xmlhttp"),Ms(c,y),c.m&&c.o&&Mt(y,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=Cs(pn(y)),v.m=null,v.P=!0,Ni(v,c)}i.Za=function(){this.C!=null&&(this.C=null,xa(this),hl(this),at(19))};function Oa(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function uc(c,y){var v=null;if(c.g==y){Oa(c),Vs(c),c.g=null;var A=2}else if(tl(c.h,y))v=y.D,an(c.h,y),A=1;else return;if(c.G!=0){if(y.o)if(A==1){v=y.m?y.m.length:0,y=Date.now()-y.F;var L=c.B;A=dr(),Ye(A,new It(A,v)),Na(c)}else oc(c);else if(L=y.s,L==3||L==0&&0<y.X||!(A==1&&Zf(c,y)||A==2&&hl(c)))switch(v&&0<v.length&&(y=c.h,y.i=y.i.concat(v)),L){case 1:Li(c,5);break;case 4:Li(c,10);break;case 3:Li(c,6);break;default:Li(c,2)}}}function fl(c,y){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*y}function Li(c,y){if(c.j.info("Error code "+y),y==2){var v=S(c.fb,c),A=c.Xa;const L=!A;A=new Et(A||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Rs(A,"https"),Cs(A),L?Ns(A.toString(),v):Fn(A.toString(),v)}else at(2);c.G=0,c.l&&c.l.sa(y),cc(c),sc(c)}i.fb=function(c){c?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function cc(c){if(c.G=0,c.ka=[],c.l){const y=nl(c.h);(y.length!=0||c.i.length!=0)&&(F(c.ka,y),F(c.ka,c.i),c.h.i.length=0,W(c.i),c.i.length=0),c.l.ra()}}function hc(c,y,v){var A=v instanceof Et?pn(v):new Et(v);if(A.g!="")y&&(A.g=y+"."+A.g),vr(A,A.s);else{var L=m.location;A=L.protocol,y=y?y+"."+L.hostname:L.hostname,L=+L.port;var q=new Et(null);A&&Rs(q,A),y&&(q.g=y),L&&vr(q,L),v&&(q.l=v),A=q}return v=c.D,y=c.ya,v&&y&&We(A,v,y),We(A,"VER",c.la),Ms(c,A),A}function fc(c,y,v){if(y&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Ca&&!c.pa?new $e(new _r({eb:v})):new $e(c.pa),y.Ha(c.J),y}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function dc(){}i=dc.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Da(){}Da.prototype.g=function(c,y){return new on(c,y)};function on(c,y){ht.call(this),this.g=new Ca(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(c?c["X-WebChannel-Client-Profile"]=y.va:c={"X-WebChannel-Client-Profile":y.va}),this.g.S=c,(c=y&&y.Sb)&&!ie(c)&&(this.g.m=c),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!ie(y)&&(this.g.D=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new si(this)}G(on,ht),on.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},on.prototype.close=function(){ul(this.g)},on.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=zn(c),c=v);y.i.push(new ec(y.Ya++,c)),y.G==3&&Na(y)},on.prototype.N=function(){this.g.l=null,delete this.j,ul(this.g),delete this.g,on.aa.N.call(this)};function mc(c){Ci.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const v in y){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}G(mc,Ci);function pc(){Wo.call(this),this.status=1}G(pc,Wo);function si(c){this.g=c}G(si,dc),si.prototype.ua=function(){Ye(this.g,"a")},si.prototype.ta=function(c){Ye(this.g,new mc(c))},si.prototype.sa=function(c){Ye(this.g,new pc)},si.prototype.ra=function(){Ye(this.g,"b")},Da.prototype.createWebChannel=Da.prototype.g,on.prototype.send=on.prototype.o,on.prototype.open=on.prototype.m,on.prototype.close=on.prototype.close,Z1=function(){return new Da},J1=function(){return dr()},W1=Xn,kp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},gr.NO_ERROR=0,gr.TIMEOUT=8,gr.HTTP_ERROR=6,Nh=gr,xi.COMPLETE="complete",X1=xi,Xo.EventType=Ri,Ri.OPEN="a",Ri.CLOSE="b",Ri.ERROR="c",Ri.MESSAGE="d",ht.prototype.listen=ht.prototype.K,nu=Xo,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,Q1=$e}).apply(typeof yh<"u"?yh:typeof self<"u"?self:typeof window<"u"?window:{});const Fb="@firebase/firestore",Hb="4.7.15";/**
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
 */class en{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}en.UNAUTHENTICATED=new en(null),en.GOOGLE_CREDENTIALS=new en("google-credentials-uid"),en.FIRST_PARTY=new en("first-party-uid"),en.MOCK_USER=new en("mock-user");/**
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
 */let jo="11.8.0";/**
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
 */const ra=new bf("@firebase/firestore");function ho(){return ra.logLevel}function ue(i,...e){if(ra.logLevel<=ke.DEBUG){const t=e.map(Fg);ra.debug(`Firestore (${jo}): ${i}`,...t)}}function sr(i,...e){if(ra.logLevel<=ke.ERROR){const t=e.map(Fg);ra.error(`Firestore (${jo}): ${i}`,...t)}}function wo(i,...e){if(ra.logLevel<=ke.WARN){const t=e.map(Fg);ra.warn(`Firestore (${jo}): ${i}`,...t)}}function Fg(i){if(typeof i=="string")return i;try{/**
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
 */function Te(i,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,eA(i,r,t)}function eA(i,e,t){let r=`FIRESTORE (${jo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw sr(r),new Error(r)}function Ke(i,e,t,r){let a="Unexpected state";typeof t=="string"?a=t:r=t,i||eA(e,a,r)}function Re(i,e){return i}/**
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
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ve extends jn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class es{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class tA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(en.UNAUTHENTICATED))}shutdown(){}}class XN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class WN{constructor(e){this.t=e,this.currentUser=en.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ke(this.o===void 0,42304);let r=this.i;const a=p=>this.i!==r?(r=this.i,t(p)):Promise.resolve();let l=new es;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new es,e.enqueueRetryable(()=>a(this.currentUser))};const h=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},m=p=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(p=>m(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new es)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ke(typeof r.accessToken=="string",31837,{l:r}),new tA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ke(e===null||typeof e=="string",2055,{h:e}),new en(e)}}class JN{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=en.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ZN{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new JN(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(en.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eO{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ke(this.o===void 0,3512);const r=l=>{l.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ue("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>r(l))};const a=l=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new qb(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ke(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new qb(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function tO(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<i;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function nA(){return new TextEncoder}/**
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
 */class iA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const a=tO(40);for(let l=0;l<a.length;++l)r.length<20&&a[l]<t&&(r+=e.charAt(a[l]%62))}return r}}function Oe(i,e){return i<e?-1:i>e?1:0}function Mp(i,e){let t=0;for(;t<i.length&&t<e.length;){const r=i.codePointAt(t),a=e.codePointAt(t);if(r!==a){if(r<128&&a<128)return Oe(r,a);{const l=nA(),h=nO(l.encode(Gb(i,t)),l.encode(Gb(e,t)));return h!==0?h:Oe(r,a)}}t+=r>65535?2:1}return Oe(i.length,e.length)}function Gb(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function nO(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Oe(i[t],e[t]);return Oe(i.length,e.length)}function Io(i,e,t){return i.length===e.length&&i.every((r,a)=>t(r,e[a]))}/**
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
 */const $b=-62135596800,Kb=1e6;class Dt{static now(){return Dt.fromMillis(Date.now())}static fromDate(e){return Dt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Kb);return new Dt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ve(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ve(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<$b)throw new ve(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ve(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Kb}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-$b;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new Dt(0,0))}static max(){return new we(new Dt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Yb="__name__";class fi{constructor(e,t,r){t===void 0?t=0:t>e.length&&Te(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Te(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return fi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof fi?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let a=0;a<r;a++){const l=fi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Oe(e.length,t.length)}static compareSegments(e,t){const r=fi.isNumericId(e),a=fi.isNumericId(t);return r&&!a?-1:!r&&a?1:r&&a?fi.extractNumericId(e).compare(fi.extractNumericId(t)):Mp(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Zr.fromString(e.substring(4,e.length-2))}}class mt extends fi{construct(e,t,r){return new mt(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ve(Z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(a=>a.length>0))}return new mt(t)}static emptyPath(){return new mt([])}}const iO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Yt extends fi{construct(e,t,r){return new Yt(e,t,r)}static isValidIdentifier(e){return iO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Yb}static keyField(){return new Yt([Yb])}static fromServerFormat(e){const t=[];let r="",a=0;const l=()=>{if(r.length===0)throw new ve(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let h=!1;for(;a<e.length;){const m=e[a];if(m==="\\"){if(a+1===e.length)throw new ve(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ve(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=p,a+=2}else m==="`"?(h=!h,a++):m!=="."||h?(r+=m,a++):(l(),a++)}if(l(),h)throw new ve(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Yt(t)}static emptyPath(){return new Yt([])}}/**
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
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(mt.fromString(e))}static fromName(e){return new _e(mt.fromString(e).popFirst(5))}static empty(){return new _e(mt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&mt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return mt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new mt(e.slice()))}}/**
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
 */const Eu=-1;function rO(i,e){const t=i.toTimestamp().seconds,r=i.toTimestamp().nanoseconds+1,a=we.fromTimestamp(r===1e9?new Dt(t+1,0):new Dt(t,r));return new is(a,_e.empty(),e)}function sO(i){return new is(i.readTime,i.key,Eu)}class is{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new is(we.min(),_e.empty(),Eu)}static max(){return new is(we.max(),_e.empty(),Eu)}}function aO(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(i.documentKey,e.documentKey),t!==0?t:Oe(i.largestBatchId,e.largestBatchId))}/**
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
 */const oO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function zo(i){if(i.code!==Z.FAILED_PRECONDITION||i.message!==oO)throw i;ue("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class X{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new X((r,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(r,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(r,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof X?t:X.resolve(t)}catch(t){return X.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):X.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):X.reject(t)}static resolve(e){return new X((t,r)=>{t(e)})}static reject(e){return new X((t,r)=>{r(e)})}static waitFor(e){return new X((t,r)=>{let a=0,l=0,h=!1;e.forEach(m=>{++a,m.next(()=>{++l,h&&l===a&&t()},p=>r(p))}),h=!0,l===a&&t()})}static or(e){let t=X.resolve(!1);for(const r of e)t=t.next(a=>a?X.resolve(a):r());return t}static forEach(e,t){const r=[];return e.forEach((a,l)=>{r.push(t.call(this,a,l))}),this.waitFor(r)}static mapArray(e,t){return new X((r,a)=>{const l=e.length,h=new Array(l);let m=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next(b=>{h[g]=b,++m,m===l&&r(h)},b=>a(b))}})}static doWhile(e,t){return new X((r,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):r()};l()})}}function uO(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Bo(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class wf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}wf.le=-1;/**
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
 */const Hg=-1;function If(i){return i==null}function Kh(i){return i===0&&1/i==-1/0}function cO(i){return typeof i=="number"&&Number.isInteger(i)&&!Kh(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const rA="";function hO(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Qb(e)),e=fO(i.get(t),e);return Qb(e)}function fO(i,e){let t=e;const r=i.length;for(let a=0;a<r;a++){const l=i.charAt(a);switch(l){case"\0":t+="";break;case rA:t+="";break;default:t+=l}}return t}function Qb(i){return i+rA+""}/**
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
 */function Xb(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function ca(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function sA(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class ut{constructor(e,t){this.comparator=e,this.root=t||Kt.EMPTY}insert(e,t){return new ut(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Kt.BLACK,null,null))}remove(e){return new ut(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const a=this.comparator(e,r.key);if(a===0)return t+r.left.size;a<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vh(this.root,e,this.comparator,!1)}getReverseIterator(){return new vh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vh(this.root,e,this.comparator,!0)}}class vh{constructor(e,t,r,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?r(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Kt{constructor(e,t,r,a,l){this.key=e,this.value=t,this.color=r??Kt.RED,this.left=a??Kt.EMPTY,this.right=l??Kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,a,l){return new Kt(e??this.key,t??this.value,r??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let a=this;const l=r(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,r),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,r)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Kt.EMPTY;r=a.right.min(),a=a.copy(r.key,r.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Te(27949);return e+(this.isRed()?0:1)}}Kt.EMPTY=null,Kt.RED=!0,Kt.BLACK=!1;Kt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te(57766)}get value(){throw Te(16141)}get color(){throw Te(16727)}get left(){throw Te(29726)}get right(){throw Te(36894)}copy(e,t,r,a,l){return this}insert(e,t,r){return new Kt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Pt{constructor(e){this.comparator=e,this.data=new ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const a=r.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Wb(this.data.getIterator())}getIteratorFrom(e){return new Wb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Pt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=r.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Pt(this.comparator);return t.data=e,t}}class Wb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class $n{constructor(e){this.fields=e,e.sort(Yt.comparator)}static empty(){return new $n([])}unionWith(e){let t=new Pt(Yt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new $n(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Io(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class aA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new aA("Invalid base64 string: "+l):l}}(e);return new Qt(t)}static fromUint8Array(e){const t=function(a){let l="";for(let h=0;h<a.length;++h)l+=String.fromCharCode(a[h]);return l}(e);return new Qt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let a=0;a<t.length;a++)r[a]=t.charCodeAt(a);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const dO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rs(i){if(Ke(!!i,39018),typeof i=="string"){let e=0;const t=dO.exec(i);if(Ke(!!t,46558,{timestamp:i}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const r=new Date(i);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:vt(i.seconds),nanos:vt(i.nanos)}}function vt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function ss(i){return typeof i=="string"?Qt.fromBase64String(i):Qt.fromUint8Array(i)}/**
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
 */const oA="server_timestamp",lA="__type__",uA="__previous_value__",cA="__local_write_time__";function qg(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[lA])===null||t===void 0?void 0:t.stringValue)===oA}function Rf(i){const e=i.mapValue.fields[uA];return qg(e)?Rf(e):e}function Tu(i){const e=rs(i.mapValue.fields[cA].timestampValue);return new Dt(e.seconds,e.nanos)}/**
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
 */class mO{constructor(e,t,r,a,l,h,m,p,g,b){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=a,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=b}}const Yh="(default)";class Au{constructor(e,t){this.projectId=e,this.database=t||Yh}static empty(){return new Au("","")}get isDefaultDatabase(){return this.database===Yh}isEqual(e){return e instanceof Au&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const hA="__type__",pO="__max__",_h={mapValue:{}},fA="__vector__",Qh="value";function as(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?qg(i)?4:yO(i)?9007199254740991:gO(i)?10:11:Te(28295,{value:i})}function Ti(i,e){if(i===e)return!0;const t=as(i);if(t!==as(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Tu(i).isEqual(Tu(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const h=rs(a.timestampValue),m=rs(l.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,l){return ss(a.bytesValue).isEqual(ss(l.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,l){return vt(a.geoPointValue.latitude)===vt(l.geoPointValue.latitude)&&vt(a.geoPointValue.longitude)===vt(l.geoPointValue.longitude)}(i,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return vt(a.integerValue)===vt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const h=vt(a.doubleValue),m=vt(l.doubleValue);return h===m?Kh(h)===Kh(m):isNaN(h)&&isNaN(m)}return!1}(i,e);case 9:return Io(i.arrayValue.values||[],e.arrayValue.values||[],Ti);case 10:case 11:return function(a,l){const h=a.mapValue.fields||{},m=l.mapValue.fields||{};if(Xb(h)!==Xb(m))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(m[p]===void 0||!Ti(h[p],m[p])))return!1;return!0}(i,e);default:return Te(52216,{left:i})}}function Su(i,e){return(i.values||[]).find(t=>Ti(t,e))!==void 0}function Ro(i,e){if(i===e)return 0;const t=as(i),r=as(e);if(t!==r)return Oe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Oe(i.booleanValue,e.booleanValue);case 2:return function(l,h){const m=vt(l.integerValue||l.doubleValue),p=vt(h.integerValue||h.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1}(i,e);case 3:return Jb(i.timestampValue,e.timestampValue);case 4:return Jb(Tu(i),Tu(e));case 5:return Mp(i.stringValue,e.stringValue);case 6:return function(l,h){const m=ss(l),p=ss(h);return m.compareTo(p)}(i.bytesValue,e.bytesValue);case 7:return function(l,h){const m=l.split("/"),p=h.split("/");for(let g=0;g<m.length&&g<p.length;g++){const b=Oe(m[g],p[g]);if(b!==0)return b}return Oe(m.length,p.length)}(i.referenceValue,e.referenceValue);case 8:return function(l,h){const m=Oe(vt(l.latitude),vt(h.latitude));return m!==0?m:Oe(vt(l.longitude),vt(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return Zb(i.arrayValue,e.arrayValue);case 10:return function(l,h){var m,p,g,b;const T=l.fields||{},S=h.fields||{},j=(m=T[Qh])===null||m===void 0?void 0:m.arrayValue,G=(p=S[Qh])===null||p===void 0?void 0:p.arrayValue,W=Oe(((g=j==null?void 0:j.values)===null||g===void 0?void 0:g.length)||0,((b=G==null?void 0:G.values)===null||b===void 0?void 0:b.length)||0);return W!==0?W:Zb(j,G)}(i.mapValue,e.mapValue);case 11:return function(l,h){if(l===_h.mapValue&&h===_h.mapValue)return 0;if(l===_h.mapValue)return 1;if(h===_h.mapValue)return-1;const m=l.fields||{},p=Object.keys(m),g=h.fields||{},b=Object.keys(g);p.sort(),b.sort();for(let T=0;T<p.length&&T<b.length;++T){const S=Mp(p[T],b[T]);if(S!==0)return S;const j=Ro(m[p[T]],g[b[T]]);if(j!==0)return j}return Oe(p.length,b.length)}(i.mapValue,e.mapValue);default:throw Te(23264,{Pe:t})}}function Jb(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Oe(i,e);const t=rs(i),r=rs(e),a=Oe(t.seconds,r.seconds);return a!==0?a:Oe(t.nanos,r.nanos)}function Zb(i,e){const t=i.values||[],r=e.values||[];for(let a=0;a<t.length&&a<r.length;++a){const l=Ro(t[a],r[a]);if(l)return l}return Oe(t.length,r.length)}function Co(i){return Vp(i)}function Vp(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const r=rs(t);return`time(${r.seconds},${r.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return ss(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return _e.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let r="[",a=!0;for(const l of t.values||[])a?a=!1:r+=",",r+=Vp(l);return r+"]"}(i.arrayValue):"mapValue"in i?function(t){const r=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const h of r)l?l=!1:a+=",",a+=`${h}:${Vp(t.fields[h])}`;return a+"}"}(i.mapValue):Te(61005,{value:i})}function Oh(i){switch(as(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Rf(i);return e?16+Oh(e):16;case 5:return 2*i.stringValue.length;case 6:return ss(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((a,l)=>a+Oh(l),0)}(i.arrayValue);case 10:case 11:return function(r){let a=0;return ca(r.fields,(l,h)=>{a+=l.length+Oh(h)}),a}(i.mapValue);default:throw Te(13486,{value:i})}}function Lp(i){return!!i&&"integerValue"in i}function Gg(i){return!!i&&"arrayValue"in i}function eE(i){return!!i&&"nullValue"in i}function tE(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Dh(i){return!!i&&"mapValue"in i}function gO(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[hA])===null||t===void 0?void 0:t.stringValue)===fA}function lu(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return ca(i.mapValue.fields,(t,r)=>e.mapValue.fields[t]=lu(r)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=lu(i.arrayValue.values[t]);return e}return Object.assign({},i)}function yO(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===pO}/**
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
 */class Ln{constructor(e){this.value=e}static empty(){return new Ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Dh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=lu(t)}setAll(e){let t=Yt.emptyPath(),r={},a=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const p=this.getFieldsMap(t);this.applyChanges(p,r,a),r={},a=[],t=m.popLast()}h?r[m.lastSegment()]=lu(h):a.push(m.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,r,a)}delete(e){const t=this.field(e.popLast());Dh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ti(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let a=t.mapValue.fields[e.get(r)];Dh(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,r){ca(t,(a,l)=>e[a]=l);for(const a of r)delete e[a]}clone(){return new Ln(lu(this.value))}}function dA(i){const e=[];return ca(i.fields,(t,r)=>{const a=new Yt([t]);if(Dh(r)){const l=dA(r.mapValue).fields;if(l.length===0)e.push(a);else for(const h of l)e.push(a.child(h))}else e.push(a)}),new $n(e)}/**
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
 */class tn{constructor(e,t,r,a,l,h,m){this.key=e,this.documentType=t,this.version=r,this.readTime=a,this.createTime=l,this.data=h,this.documentState=m}static newInvalidDocument(e){return new tn(e,0,we.min(),we.min(),we.min(),Ln.empty(),0)}static newFoundDocument(e,t,r,a){return new tn(e,1,t,we.min(),r,a,0)}static newNoDocument(e,t){return new tn(e,2,t,we.min(),we.min(),Ln.empty(),0)}static newUnknownDocument(e,t){return new tn(e,3,t,we.min(),we.min(),Ln.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xh{constructor(e,t){this.position=e,this.inclusive=t}}function nE(i,e,t){let r=0;for(let a=0;a<i.position.length;a++){const l=e[a],h=i.position[a];if(l.field.isKeyField()?r=_e.comparator(_e.fromName(h.referenceValue),t.key):r=Ro(h,t.data.field(l.field)),l.dir==="desc"&&(r*=-1),r!==0)break}return r}function iE(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Ti(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Wh{constructor(e,t="asc"){this.field=e,this.dir=t}}function vO(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class mA{}class Ot extends mA{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new bO(e,t,r):t==="array-contains"?new AO(e,r):t==="in"?new SO(e,r):t==="not-in"?new wO(e,r):t==="array-contains-any"?new IO(e,r):new Ot(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new EO(e,r):new TO(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ro(t,this.value)):t!==null&&as(this.value)===as(t)&&this.matchesComparison(Ro(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ai extends mA{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Ai(e,t)}matches(e){return pA(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function pA(i){return i.op==="and"}function gA(i){return _O(i)&&pA(i)}function _O(i){for(const e of i.filters)if(e instanceof Ai)return!1;return!0}function Up(i){if(i instanceof Ot)return i.field.canonicalString()+i.op.toString()+Co(i.value);if(gA(i))return i.filters.map(e=>Up(e)).join(",");{const e=i.filters.map(t=>Up(t)).join(",");return`${i.op}(${e})`}}function yA(i,e){return i instanceof Ot?function(r,a){return a instanceof Ot&&r.op===a.op&&r.field.isEqual(a.field)&&Ti(r.value,a.value)}(i,e):i instanceof Ai?function(r,a){return a instanceof Ai&&r.op===a.op&&r.filters.length===a.filters.length?r.filters.reduce((l,h,m)=>l&&yA(h,a.filters[m]),!0):!1}(i,e):void Te(19439)}function vA(i){return i instanceof Ot?function(t){return`${t.field.canonicalString()} ${t.op} ${Co(t.value)}`}(i):i instanceof Ai?function(t){return t.op.toString()+" {"+t.getFilters().map(vA).join(" ,")+"}"}(i):"Filter"}class bO extends Ot{constructor(e,t,r){super(e,t,r),this.key=_e.fromName(r.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class EO extends Ot{constructor(e,t){super(e,"in",t),this.keys=_A("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class TO extends Ot{constructor(e,t){super(e,"not-in",t),this.keys=_A("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function _A(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>_e.fromName(r.referenceValue))}class AO extends Ot{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Gg(t)&&Su(t.arrayValue,this.value)}}class SO extends Ot{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Su(this.value.arrayValue,t)}}class wO extends Ot{constructor(e,t){super(e,"not-in",t)}matches(e){if(Su(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Su(this.value.arrayValue,t)}}class IO extends Ot{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Gg(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Su(this.value.arrayValue,r))}}/**
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
 */class RO{constructor(e,t=null,r=[],a=[],l=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=a,this.limit=l,this.startAt=h,this.endAt=m,this.Ie=null}}function rE(i,e=null,t=[],r=[],a=null,l=null,h=null){return new RO(i,e,t,r,a,l,h)}function $g(i){const e=Re(i);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Up(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(l){return l.field.canonicalString()+l.dir}(r)).join(","),If(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Co(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Co(r)).join(",")),e.Ie=t}return e.Ie}function Kg(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!vO(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!yA(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!iE(i.startAt,e.startAt)&&iE(i.endAt,e.endAt)}function jp(i){return _e.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Cf{constructor(e,t=null,r=[],a=[],l=null,h="F",m=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=a,this.limit=l,this.limitType=h,this.startAt=m,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function CO(i,e,t,r,a,l,h,m){return new Cf(i,e,t,r,a,l,h,m)}function Yg(i){return new Cf(i)}function sE(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function xO(i){return i.collectionGroup!==null}function uu(i){const e=Re(i);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new Pt(Yt.comparator);return h.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(m=m.add(g.field))})}),m})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new Wh(l,r))}),t.has(Yt.keyField().canonicalString())||e.Ee.push(new Wh(Yt.keyField(),r))}return e.Ee}function _i(i){const e=Re(i);return e.de||(e.de=NO(e,uu(i))),e.de}function NO(i,e){if(i.limitType==="F")return rE(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new Wh(a.field,l)});const t=i.endAt?new Xh(i.endAt.position,i.endAt.inclusive):null,r=i.startAt?new Xh(i.startAt.position,i.startAt.inclusive):null;return rE(i.path,i.collectionGroup,e,i.filters,i.limit,t,r)}}function zp(i,e,t){return new Cf(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function xf(i,e){return Kg(_i(i),_i(e))&&i.limitType===e.limitType}function bA(i){return`${$g(_i(i))}|lt:${i.limitType}`}function fo(i){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(a=>vA(a)).join(", ")}]`),If(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(a=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(a)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(a=>Co(a)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(a=>Co(a)).join(",")),`Target(${r})`}(_i(i))}; limitType=${i.limitType})`}function Nf(i,e){return e.isFoundDocument()&&function(r,a){const l=a.key.path;return r.collectionGroup!==null?a.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(l):_e.isDocumentKey(r.path)?r.path.isEqual(l):r.path.isImmediateParentOf(l)}(i,e)&&function(r,a){for(const l of uu(r))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(i,e)&&function(r,a){for(const l of r.filters)if(!l.matches(a))return!1;return!0}(i,e)&&function(r,a){return!(r.startAt&&!function(h,m,p){const g=nE(h,m,p);return h.inclusive?g<=0:g<0}(r.startAt,uu(r),a)||r.endAt&&!function(h,m,p){const g=nE(h,m,p);return h.inclusive?g>=0:g>0}(r.endAt,uu(r),a))}(i,e)}function OO(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function EA(i){return(e,t)=>{let r=!1;for(const a of uu(i)){const l=DO(a,e,t);if(l!==0)return l;r=r||a.field.isKeyField()}return 0}}function DO(i,e,t){const r=i.field.isKeyField()?_e.comparator(e.key,t.key):function(l,h,m){const p=h.data.field(l),g=m.data.field(l);return p!==null&&g!==null?Ro(p,g):Te(42886)}(i.field,e,t);switch(i.dir){case"asc":return r;case"desc":return-1*r;default:return Te(19790,{direction:i.dir})}}/**
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
 */class ha{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[a,l]of r)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),a=this.inner[r];if(a===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let a=0;a<r.length;a++)if(this.equalsFn(r[a][0],e))return r.length===1?delete this.inner[t]:r.splice(a,1),this.innerSize--,!0;return!1}forEach(e){ca(this.inner,(t,r)=>{for(const[a,l]of r)e(a,l)})}isEmpty(){return sA(this.inner)}size(){return this.innerSize}}/**
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
 */const PO=new ut(_e.comparator);function ar(){return PO}const TA=new ut(_e.comparator);function iu(...i){let e=TA;for(const t of i)e=e.insert(t.key,t);return e}function AA(i){let e=TA;return i.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ea(){return cu()}function SA(){return cu()}function cu(){return new ha(i=>i.toString(),(i,e)=>i.isEqual(e))}const kO=new ut(_e.comparator),MO=new Pt(_e.comparator);function Ue(...i){let e=MO;for(const t of i)e=e.add(t);return e}const VO=new Pt(Oe);function LO(){return VO}/**
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
 */function Qg(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kh(e)?"-0":e}}function wA(i){return{integerValue:""+i}}function UO(i,e){return cO(e)?wA(e):Qg(i,e)}/**
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
 */class Of{constructor(){this._=void 0}}function jO(i,e,t){return i instanceof Jh?function(a,l){const h={fields:{[lA]:{stringValue:oA},[cA]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&qg(l)&&(l=Rf(l)),l&&(h.fields[uA]=l),{mapValue:h}}(t,e):i instanceof wu?RA(i,e):i instanceof Iu?CA(i,e):function(a,l){const h=IA(a,l),m=aE(h)+aE(a.Re);return Lp(h)&&Lp(a.Re)?wA(m):Qg(a.serializer,m)}(i,e)}function zO(i,e,t){return i instanceof wu?RA(i,e):i instanceof Iu?CA(i,e):t}function IA(i,e){return i instanceof Zh?function(r){return Lp(r)||function(l){return!!l&&"doubleValue"in l}(r)}(e)?e:{integerValue:0}:null}class Jh extends Of{}class wu extends Of{constructor(e){super(),this.elements=e}}function RA(i,e){const t=xA(e);for(const r of i.elements)t.some(a=>Ti(a,r))||t.push(r);return{arrayValue:{values:t}}}class Iu extends Of{constructor(e){super(),this.elements=e}}function CA(i,e){let t=xA(e);for(const r of i.elements)t=t.filter(a=>!Ti(a,r));return{arrayValue:{values:t}}}class Zh extends Of{constructor(e,t){super(),this.serializer=e,this.Re=t}}function aE(i){return vt(i.integerValue||i.doubleValue)}function xA(i){return Gg(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function BO(i,e){return i.field.isEqual(e.field)&&function(r,a){return r instanceof wu&&a instanceof wu||r instanceof Iu&&a instanceof Iu?Io(r.elements,a.elements,Ti):r instanceof Zh&&a instanceof Zh?Ti(r.Re,a.Re):r instanceof Jh&&a instanceof Jh}(i.transform,e.transform)}class FO{constructor(e,t){this.version=e,this.transformResults=t}}class tr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tr}static exists(e){return new tr(void 0,e)}static updateTime(e){return new tr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ph(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Df{}function NA(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new DA(i.key,tr.none()):new Lu(i.key,i.data,tr.none());{const t=i.data,r=Ln.empty();let a=new Pt(Yt.comparator);for(let l of e.fields)if(!a.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?r.delete(l):r.set(l,h),a=a.add(l)}return new fa(i.key,r,new $n(a.toArray()),tr.none())}}function HO(i,e,t){i instanceof Lu?function(a,l,h){const m=a.value.clone(),p=lE(a.fieldTransforms,l,h.transformResults);m.setAll(p),l.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):i instanceof fa?function(a,l,h){if(!Ph(a.precondition,l))return void l.convertToUnknownDocument(h.version);const m=lE(a.fieldTransforms,l,h.transformResults),p=l.data;p.setAll(OA(a)),p.setAll(m),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(i,e,t):function(a,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function hu(i,e,t,r){return i instanceof Lu?function(l,h,m,p){if(!Ph(l.precondition,h))return m;const g=l.value.clone(),b=uE(l.fieldTransforms,p,h);return g.setAll(b),h.convertToFoundDocument(h.version,g).setHasLocalMutations(),null}(i,e,t,r):i instanceof fa?function(l,h,m,p){if(!Ph(l.precondition,h))return m;const g=uE(l.fieldTransforms,p,h),b=h.data;return b.setAll(OA(l)),b.setAll(g),h.convertToFoundDocument(h.version,b).setHasLocalMutations(),m===null?null:m.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(i,e,t,r):function(l,h,m){return Ph(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,e,t)}function qO(i,e){let t=null;for(const r of i.fieldTransforms){const a=e.data.field(r.field),l=IA(r.transform,a||null);l!=null&&(t===null&&(t=Ln.empty()),t.set(r.field,l))}return t||null}function oE(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(r,a){return r===void 0&&a===void 0||!(!r||!a)&&Io(r,a,(l,h)=>BO(l,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Lu extends Df{constructor(e,t,r,a=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class fa extends Df{constructor(e,t,r,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function OA(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=i.data.field(t);e.set(t,r)}}),e}function lE(i,e,t){const r=new Map;Ke(i.length===t.length,32656,{Ve:t.length,me:i.length});for(let a=0;a<t.length;a++){const l=i[a],h=l.transform,m=e.data.field(l.field);r.set(l.field,zO(h,m,t[a]))}return r}function uE(i,e,t){const r=new Map;for(const a of i){const l=a.transform,h=t.data.field(a.field);r.set(a.field,jO(l,h,e))}return r}class DA extends Df{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GO extends Df{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class $O{constructor(e,t,r,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=a}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&HO(l,e,r[a])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=hu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=hu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=SA();return this.mutations.forEach(a=>{const l=e.get(a.key),h=l.overlayedDocument;let m=this.applyToLocalView(h,l.mutatedFields);m=t.has(a.key)?null:m;const p=NA(h,m);p!==null&&r.set(a.key,p),h.isValidDocument()||h.convertToNoDocument(we.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ue())}isEqual(e){return this.batchId===e.batchId&&Io(this.mutations,e.mutations,(t,r)=>oE(t,r))&&Io(this.baseMutations,e.baseMutations,(t,r)=>oE(t,r))}}class Xg{constructor(e,t,r,a){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=a}static from(e,t,r){Ke(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let a=function(){return kO}();const l=e.mutations;for(let h=0;h<l.length;h++)a=a.insert(l[h].key,r[h].version);return new Xg(e,t,r,a)}}/**
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
 */class KO{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class YO{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var St,Fe;function QO(i){switch(i){case Z.OK:return Te(64938);case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0;default:return Te(15467,{code:i})}}function PA(i){if(i===void 0)return sr("GRPC error has no .code"),Z.UNKNOWN;switch(i){case St.OK:return Z.OK;case St.CANCELLED:return Z.CANCELLED;case St.UNKNOWN:return Z.UNKNOWN;case St.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case St.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case St.INTERNAL:return Z.INTERNAL;case St.UNAVAILABLE:return Z.UNAVAILABLE;case St.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case St.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case St.NOT_FOUND:return Z.NOT_FOUND;case St.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case St.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case St.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case St.ABORTED:return Z.ABORTED;case St.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case St.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case St.DATA_LOSS:return Z.DATA_LOSS;default:return Te(39323,{code:i})}}(Fe=St||(St={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const XO=new Zr([4294967295,4294967295],0);function cE(i){const e=nA().encode(i),t=new Y1;return t.update(e),new Uint8Array(t.digest())}function hE(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Zr([t,r],0),new Zr([a,l],0)]}class Wg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ru(`Invalid padding: ${t}`);if(r<0)throw new ru(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ru(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ru(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=Zr.fromNumber(this.pe)}we(e,t,r){let a=e.add(t.multiply(Zr.fromNumber(r)));return a.compare(XO)===1&&(a=new Zr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=cE(e),[r,a]=hE(t);for(let l=0;l<this.hashCount;l++){const h=this.we(r,a,l);if(!this.Se(h))return!1}return!0}static create(e,t,r){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Wg(l,a,t);return r.forEach(m=>h.insert(m)),h}insert(e){if(this.pe===0)return;const t=cE(e),[r,a]=hE(t);for(let l=0;l<this.hashCount;l++){const h=this.we(r,a,l);this.be(h)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ru extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pf{constructor(e,t,r,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const a=new Map;return a.set(e,Uu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Pf(we.min(),a,new ut(Oe),ar(),Ue())}}class Uu{constructor(e,t,r,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Uu(r,t,Ue(),Ue(),Ue())}}/**
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
 */class kh{constructor(e,t,r,a){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=a}}class kA{constructor(e,t){this.targetId=e,this.Ce=t}}class MA{constructor(e,t,r=Qt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=a}}class fE{constructor(){this.Fe=0,this.Me=dE(),this.xe=Qt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Ue(),t=Ue(),r=Ue();return this.Me.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:r=r.add(a);break;default:Te(38017,{changeType:l})}}),new Uu(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=dE()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ke(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class WO{constructor(e){this.ze=e,this.je=new Map,this.He=ar(),this.Je=bh(),this.Ye=bh(),this.Ze=new ut(Oe)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:Te(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,a)=>{this.it(a)&&t(a)})}ot(e){const t=e.targetId,r=e.Ce.count,a=this._t(t);if(a){const l=a.target;if(jp(l))if(r===0){const h=new _e(l.path);this.tt(t,h,tn.newNoDocument(h,we.min()))}else Ke(r===1,20013,{expectedCount:r});else{const h=this.ut(t);if(h!==r){const m=this.ct(e),p=m?this.lt(m,e,h):1;if(p!==0){this.st(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,g)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:a=0},hashCount:l=0}=t;let h,m;try{h=ss(r).toUint8Array()}catch(p){if(p instanceof aA)return wo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new Wg(h,a,l)}catch(p){return wo(p instanceof ru?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.pe===0?null:m}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let a=0;return r.forEach(l=>{const h=this.ze.Pt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(m)||(this.tt(t,l,null),a++)}),a}It(e){const t=new Map;this.je.forEach((l,h)=>{const m=this._t(h);if(m){if(l.current&&jp(m.target)){const p=new _e(m.target.path);this.Et(p).has(h)||this.dt(h,p)||this.tt(h,p,tn.newNoDocument(p,e))}l.Le&&(t.set(h,l.qe()),l.Qe())}});let r=Ue();this.Ye.forEach((l,h)=>{let m=!0;h.forEachWhile(p=>{const g=this._t(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(r=r.add(l))}),this.He.forEach((l,h)=>h.setReadTime(e));const a=new Pf(e,t,this.Ze,this.He,r);return this.He=ar(),this.Je=bh(),this.Ye=bh(),this.Ze=new ut(Oe),a}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const a=this.rt(e);this.dt(e,t)?a.$e(t,1):a.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new fE,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new Pt(Oe),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Pt(Oe),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new fE),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function bh(){return new ut(_e.comparator)}function dE(){return new ut(_e.comparator)}const JO={asc:"ASCENDING",desc:"DESCENDING"},ZO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eD={and:"AND",or:"OR"};class tD{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Bp(i,e){return i.useProto3Json||If(e)?e:{value:e}}function ef(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function VA(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function nD(i,e){return ef(i,e.toTimestamp())}function bi(i){return Ke(!!i,49232),we.fromTimestamp(function(t){const r=rs(t);return new Dt(r.seconds,r.nanos)}(i))}function Jg(i,e){return Fp(i,e).canonicalString()}function Fp(i,e){const t=function(a){return new mt(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?t:t.child(e)}function LA(i){const e=mt.fromString(i);return Ke(FA(e),10190,{key:e.toString()}),e}function Hp(i,e){return Jg(i.databaseId,e.path)}function sp(i,e){const t=LA(e);if(t.get(1)!==i.databaseId.projectId)throw new ve(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ve(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new _e(jA(t))}function UA(i,e){return Jg(i.databaseId,e)}function iD(i){const e=LA(i);return e.length===4?mt.emptyPath():jA(e)}function qp(i){return new mt(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function jA(i){return Ke(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function mE(i,e,t){return{name:Hp(i,e),fields:t.value.mapValue.fields}}function rD(i,e){let t;if("targetChange"in e){e.targetChange;const r=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Te(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,b){return g.useProto3Json?(Ke(b===void 0||typeof b=="string",58123),Qt.fromBase64String(b||"")):(Ke(b===void 0||b instanceof Buffer||b instanceof Uint8Array,16193),Qt.fromUint8Array(b||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(g){const b=g.code===void 0?Z.UNKNOWN:PA(g.code);return new ve(b,g.message||"")}(h);t=new MA(r,a,l,m||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const a=sp(i,r.document.name),l=bi(r.document.updateTime),h=r.document.createTime?bi(r.document.createTime):we.min(),m=new Ln({mapValue:{fields:r.document.fields}}),p=tn.newFoundDocument(a,l,h,m),g=r.targetIds||[],b=r.removedTargetIds||[];t=new kh(g,b,p.key,p)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const a=sp(i,r.document),l=r.readTime?bi(r.readTime):we.min(),h=tn.newNoDocument(a,l),m=r.removedTargetIds||[];t=new kh([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const a=sp(i,r.document),l=r.removedTargetIds||[];t=new kh([],l,a,null)}else{if(!("filter"in e))return Te(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:a=0,unchangedNames:l}=r,h=new YO(a,l),m=r.targetId;t=new kA(m,h)}}return t}function sD(i,e){let t;if(e instanceof Lu)t={update:mE(i,e.key,e.value)};else if(e instanceof DA)t={delete:Hp(i,e.key)};else if(e instanceof fa)t={update:mE(i,e.key,e.data),updateMask:mD(e.fieldMask)};else{if(!(e instanceof GO))return Te(16599,{ft:e.type});t={verify:Hp(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(l,h){const m=h.transform;if(m instanceof Jh)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof wu)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Iu)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Zh)return{fieldPath:h.field.canonicalString(),increment:m.Re};throw Te(20930,{transform:h.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:nD(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te(27497)}(i,e.precondition)),t}function aD(i,e){return i&&i.length>0?(Ke(e!==void 0,14353),i.map(t=>function(a,l){let h=a.updateTime?bi(a.updateTime):bi(l);return h.isEqual(we.min())&&(h=bi(l)),new FO(h,a.transformResults||[])}(t,e))):[]}function oD(i,e){return{documents:[UA(i,e.path)]}}function lD(i,e){const t={structuredQuery:{}},r=e.path;let a;e.collectionGroup!==null?(a=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=UA(i,a);const l=function(g){if(g.length!==0)return BA(Ai.create(g,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(g){if(g.length!==0)return g.map(b=>function(S){return{field:mo(S.field),direction:hD(S.dir)}}(b))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Bp(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{gt:t,parent:a}}function uD(i){let e=iD(i.parent);const t=i.structuredQuery,r=t.from?t.from.length:0;let a=null;if(r>0){Ke(r===1,65062);const b=t.from[0];b.allDescendants?a=b.collectionId:e=e.child(b.collectionId)}let l=[];t.where&&(l=function(T){const S=zA(T);return S instanceof Ai&&gA(S)?S.getFilters():[S]}(t.where));let h=[];t.orderBy&&(h=function(T){return T.map(S=>function(G){return new Wh(po(G.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(G.direction))}(S))}(t.orderBy));let m=null;t.limit&&(m=function(T){let S;return S=typeof T=="object"?T.value:T,If(S)?null:S}(t.limit));let p=null;t.startAt&&(p=function(T){const S=!!T.before,j=T.values||[];return new Xh(j,S)}(t.startAt));let g=null;return t.endAt&&(g=function(T){const S=!T.before,j=T.values||[];return new Xh(j,S)}(t.endAt)),CO(e,a,h,l,m,"F",p,g)}function cD(i,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te(28987,{purpose:a})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function zA(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=po(t.unaryFilter.field);return Ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const a=po(t.unaryFilter.field);return Ot.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=po(t.unaryFilter.field);return Ot.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=po(t.unaryFilter.field);return Ot.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Te(61313);default:return Te(60726)}}(i):i.fieldFilter!==void 0?function(t){return Ot.create(po(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Te(58110);default:return Te(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Ai.create(t.compositeFilter.filters.map(r=>zA(r)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Te(1026)}}(t.compositeFilter.op))}(i):Te(30097,{filter:i})}function hD(i){return JO[i]}function fD(i){return ZO[i]}function dD(i){return eD[i]}function mo(i){return{fieldPath:i.canonicalString()}}function po(i){return Yt.fromServerFormat(i.fieldPath)}function BA(i){return i instanceof Ot?function(t){if(t.op==="=="){if(tE(t.value))return{unaryFilter:{field:mo(t.field),op:"IS_NAN"}};if(eE(t.value))return{unaryFilter:{field:mo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(tE(t.value))return{unaryFilter:{field:mo(t.field),op:"IS_NOT_NAN"}};if(eE(t.value))return{unaryFilter:{field:mo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mo(t.field),op:fD(t.op),value:t.value}}}(i):i instanceof Ai?function(t){const r=t.getFilters().map(a=>BA(a));return r.length===1?r[0]:{compositeFilter:{op:dD(t.op),filters:r}}}(i):Te(54877,{filter:i})}function mD(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function FA(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class Qr{constructor(e,t,r,a,l=we.min(),h=we.min(),m=Qt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(e){return new Qr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class pD{constructor(e){this.wt=e}}function gD(i){const e=uD({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?zp(e,e.limit,"L"):e}/**
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
 */class yD{constructor(){this.Cn=new vD}addToCollectionParentIndex(e,t){return this.Cn.add(t),X.resolve()}getCollectionParents(e,t){return X.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return X.resolve()}deleteFieldIndex(e,t){return X.resolve()}deleteAllFieldIndexes(e){return X.resolve()}createTargetIndexes(e,t){return X.resolve()}getDocumentsMatchingTarget(e,t){return X.resolve(null)}getIndexType(e,t){return X.resolve(0)}getFieldIndexes(e,t){return X.resolve([])}getNextCollectionGroupToUpdate(e){return X.resolve(null)}getMinOffset(e,t){return X.resolve(is.min())}getMinOffsetFromCollectionGroup(e,t){return X.resolve(is.min())}updateCollectionGroup(e,t,r){return X.resolve()}updateIndexEntries(e,t){return X.resolve()}}class vD{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t]||new Pt(mt.comparator),l=!a.has(r);return this.index[t]=a.add(r),l}has(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t];return a&&a.has(r)}getEntries(e){return(this.index[e]||new Pt(mt.comparator)).toArray()}}/**
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
 */const pE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},HA=41943040;class dn{static withCacheSize(e){return new dn(e,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */dn.DEFAULT_COLLECTION_PERCENTILE=10,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dn.DEFAULT=new dn(HA,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dn.DISABLED=new dn(-1,0,0);/**
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
 */class xo{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new xo(0)}static lr(){return new xo(-1)}}/**
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
 */const gE="LruGarbageCollector",_D=1048576;function yE([i,e],[t,r]){const a=Oe(i,t);return a===0?Oe(e,r):a}class bD{constructor(e){this.Er=e,this.buffer=new Pt(yE),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();yE(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ED{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){ue(gE,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Bo(t)?ue(gE,"Ignoring IndexedDB error during garbage collection: ",t):await zo(t)}await this.mr(3e5)})}}class TD{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return X.resolve(wf.le);const r=new bD(t);return this.gr.forEachTarget(e,a=>r.Rr(a.sequenceNumber)).next(()=>this.gr.yr(e,a=>r.Rr(a))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(pE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pE):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,a,l,h,m,p,g;const b=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,h=Date.now(),this.nthSequenceNumber(e,a))).next(T=>(r=T,m=Date.now(),this.removeTargets(e,r,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,r))).next(T=>(g=Date.now(),ho()<=ke.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-b}ms
	Determined least recently used ${a} in `+(m-h)+`ms
	Removed ${l} targets in `+(p-m)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-b}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T})))}}function AD(i,e){return new TD(i,e)}/**
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
 */class SD{constructor(){this.changes=new ha(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?X.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class wD{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class ID{constructor(e,t,r,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=a}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(r=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(r!==null&&hu(r.mutation,a,$n.empty(),Dt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Ue()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Ue()){const a=ea();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,r).next(l=>{let h=iu();return l.forEach((m,p)=>{h=h.insert(m,p.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const r=ea();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Ue()))}populateOverlays(e,t,r){const a=[];return r.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,r,a){let l=ar();const h=cu(),m=function(){return cu()}();return t.forEach((p,g)=>{const b=r.get(g.key);a.has(g.key)&&(b===void 0||b.mutation instanceof fa)?l=l.insert(g.key,g):b!==void 0?(h.set(g.key,b.mutation.getFieldMask()),hu(b.mutation,g,b.mutation.getFieldMask(),Dt.now())):h.set(g.key,$n.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((g,b)=>h.set(g,b)),t.forEach((g,b)=>{var T;return m.set(g,new wD(b,(T=h.get(g))!==null&&T!==void 0?T:null))}),m))}recalculateAndSaveOverlays(e,t){const r=cu();let a=new ut((h,m)=>h-m),l=Ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(p=>{const g=t.get(p);if(g===null)return;let b=r.get(p)||$n.empty();b=m.applyToLocalView(g,b),r.set(p,b);const T=(a.get(m.batchId)||Ue()).add(p);a=a.insert(m.batchId,T)})}).next(()=>{const h=[],m=a.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),g=p.key,b=p.value,T=SA();b.forEach(S=>{if(!l.has(S)){const j=NA(t.get(S),r.get(S));j!==null&&T.set(S,j),l=l.add(S)}}),h.push(this.documentOverlayCache.saveOverlays(e,g,T))}return X.waitFor(h)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,a){return function(h){return _e.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xO(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,a):this.getDocumentsMatchingCollectionQuery(e,t,r,a)}getNextDocuments(e,t,r,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,a).next(l=>{const h=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,a-l.size):X.resolve(ea());let m=Eu,p=l;return h.next(g=>X.forEach(g,(b,T)=>(m<T.largestBatchId&&(m=T.largestBatchId),l.get(b)?X.resolve():this.remoteDocumentCache.getEntry(e,b).next(S=>{p=p.insert(b,S)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,p,g,Ue())).next(b=>({batchId:m,changes:AA(b)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next(r=>{let a=iu();return r.isFoundDocument()&&(a=a.insert(r.key,r)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,r,a){const l=t.collectionGroup;let h=iu();return this.indexManager.getCollectionParents(e,l).next(m=>X.forEach(m,p=>{const g=function(T,S){return new Cf(S,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,r,a).next(b=>{b.forEach((T,S)=>{h=h.insert(T,S)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,r,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,l,a))).next(h=>{l.forEach((p,g)=>{const b=g.getKey();h.get(b)===null&&(h=h.insert(b,tn.newInvalidDocument(b)))});let m=iu();return h.forEach((p,g)=>{const b=l.get(p);b!==void 0&&hu(b.mutation,g,$n.empty(),Dt.now()),Nf(t,g)&&(m=m.insert(p,g))}),m})}}/**
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
 */class RD{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return X.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:bi(a.createTime)}}(t)),X.resolve()}getNamedQuery(e,t){return X.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(a){return{name:a.name,query:gD(a.bundledQuery),readTime:bi(a.readTime)}}(t)),X.resolve()}}/**
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
 */class CD{constructor(){this.overlays=new ut(_e.comparator),this.Qr=new Map}getOverlay(e,t){return X.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ea();return X.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&r.set(a,l)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((a,l)=>{this.bt(e,t,l)}),X.resolve()}removeOverlaysForBatchId(e,t,r){const a=this.Qr.get(r);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Qr.delete(r)),X.resolve()}getOverlaysForCollection(e,t,r){const a=ea(),l=t.length+1,h=new _e(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const p=m.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>r&&a.set(p.getKey(),p)}return X.resolve(a)}getOverlaysForCollectionGroup(e,t,r,a){let l=new ut((g,b)=>g-b);const h=this.overlays.getIterator();for(;h.hasNext();){const g=h.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>r){let b=l.get(g.largestBatchId);b===null&&(b=ea(),l=l.insert(g.largestBatchId,b)),b.set(g.getKey(),g)}}const m=ea(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,b)=>m.set(g,b)),!(m.size()>=a)););return X.resolve(m)}bt(e,t,r){const a=this.overlays.get(r.key);if(a!==null){const h=this.Qr.get(a.largestBatchId).delete(r.key);this.Qr.set(a.largestBatchId,h)}this.overlays=this.overlays.insert(r.key,new KO(t,r));let l=this.Qr.get(t);l===void 0&&(l=Ue(),this.Qr.set(t,l)),this.Qr.set(t,l.add(r.key))}}/**
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
 */class xD{constructor(){this.sessionToken=Qt.EMPTY_BYTE_STRING}getSessionToken(e){return X.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,X.resolve()}}/**
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
 */class Zg{constructor(){this.$r=new Pt(zt.Ur),this.Kr=new Pt(zt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new zt(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new zt(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new _e(new mt([])),r=new zt(t,e),a=new zt(t,e+1),l=[];return this.Kr.forEachInRange([r,a],h=>{this.zr(h),l.push(h.key)}),l}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new _e(new mt([])),r=new zt(t,e),a=new zt(t,e+1);let l=Ue();return this.Kr.forEachInRange([r,a],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new zt(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class zt{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return _e.comparator(e.key,t.key)||Oe(e.Zr,t.Zr)}static Wr(e,t){return Oe(e.Zr,t.Zr)||_e.comparator(e.key,t.key)}}/**
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
 */class ND{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new Pt(zt.Ur)}checkEmpty(e){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,a){const l=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new $O(l,t,r,a);this.mutationQueue.push(h);for(const m of a)this.Xr=this.Xr.add(new zt(m.key,l)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return X.resolve(h)}lookupMutationBatch(e,t){return X.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=this.ti(r),l=a<0?0:a;return X.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?Hg:this.nr-1)}getAllMutationBatches(e){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new zt(t,0),a=new zt(t,Number.POSITIVE_INFINITY),l=[];return this.Xr.forEachInRange([r,a],h=>{const m=this.ei(h.Zr);l.push(m)}),X.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Pt(Oe);return t.forEach(a=>{const l=new zt(a,0),h=new zt(a,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([l,h],m=>{r=r.add(m.Zr)})}),X.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1;let l=r;_e.isDocumentKey(l)||(l=l.child(""));const h=new zt(new _e(l),0);let m=new Pt(Oe);return this.Xr.forEachWhile(p=>{const g=p.key.path;return!!r.isPrefixOf(g)&&(g.length===a&&(m=m.add(p.Zr)),!0)},h),X.resolve(this.ni(m))}ni(e){const t=[];return e.forEach(r=>{const a=this.ei(r);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){Ke(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return X.forEach(t.mutations,a=>{const l=new zt(a.key,t.batchId);return r=r.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new zt(t,0),a=this.Xr.firstAfterOrEqual(r);return X.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,X.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class OD{constructor(e){this.ii=e,this.docs=function(){return new ut(_e.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,a=this.docs.get(r),l=a?a.size:0,h=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return X.resolve(r?r.document.mutableCopy():tn.newInvalidDocument(t))}getEntries(e,t){let r=ar();return t.forEach(a=>{const l=this.docs.get(a);r=r.insert(a,l?l.document.mutableCopy():tn.newInvalidDocument(a))}),X.resolve(r)}getDocumentsMatchingQuery(e,t,r,a){let l=ar();const h=t.path,m=new _e(h.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:g,value:{document:b}}=p.getNext();if(!h.isPrefixOf(g.path))break;g.path.length>h.length+1||aO(sO(b),r)<=0||(a.has(b.key)||Nf(t,b))&&(l=l.insert(b.key,b.mutableCopy()))}return X.resolve(l)}getAllFromCollectionGroup(e,t,r,a){Te(9500)}si(e,t){return X.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new DD(this)}getSize(e){return X.resolve(this.size)}}class DD extends SD{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,a)=>{a.isValidDocument()?t.push(this.Br.addEntry(e,a)):this.Br.removeEntry(r)}),X.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class PD{constructor(e){this.persistence=e,this.oi=new ha(t=>$g(t),Kg),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this._i=0,this.ai=new Zg,this.targetCount=0,this.ui=xo.cr()}forEachTarget(e,t){return this.oi.forEach((r,a)=>t(a)),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),X.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new xo(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,X.resolve()}updateTargetData(e,t){return this.Tr(t),X.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,t,r){let a=0;const l=[];return this.oi.forEach((h,m)=>{m.sequenceNumber<=t&&r.get(m.targetId)===null&&(this.oi.delete(h),l.push(this.removeMatchingKeysForTargetId(e,m.targetId)),a++)}),X.waitFor(l).next(()=>a)}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return X.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),X.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(h=>{l.push(a.markPotentiallyOrphaned(e,h))}),X.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),X.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return X.resolve(r)}containsKey(e,t){return X.resolve(this.ai.containsKey(t))}}/**
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
 */class qA{constructor(e,t){this.ci={},this.overlays={},this.li=new wf(0),this.hi=!1,this.hi=!0,this.Pi=new xD,this.referenceDelegate=e(this),this.Ti=new PD(this),this.indexManager=new yD,this.remoteDocumentCache=function(a){return new OD(a)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new pD(t),this.Ei=new RD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new CD,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new ND(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){ue("MemoryPersistence","Starting transaction:",e);const a=new kD(this.li.next());return this.referenceDelegate.di(),r(a).next(l=>this.referenceDelegate.Ai(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ri(e,t){return X.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class kD extends lO{constructor(e){super(),this.currentSequenceNumber=e}}class ey{constructor(e){this.persistence=e,this.Vi=new Zg,this.mi=null}static fi(e){return new ey(e)}get gi(){if(this.mi)return this.mi;throw Te(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),X.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),X.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),X.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(a=>this.gi.add(a.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.gi.add(l.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.gi,r=>{const a=_e.fromPath(r);return this.pi(e,a).next(l=>{l||t.removeEntry(a,we.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return X.or([()=>X.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class tf{constructor(e,t){this.persistence=e,this.yi=new ha(r=>hO(r.path),(r,a)=>r.isEqual(a)),this.garbageCollector=AD(this,t)}static fi(e,t){return new tf(e,t)}di(){}Ai(e){return X.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}Sr(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return X.forEach(this.yi,(r,a)=>this.Dr(e,r,a).next(l=>l?X.resolve():t(a)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.si(e,h=>this.Dr(e,h,t).next(m=>{m||(r++,l.removeEntry(h,we.min()))})).next(()=>l.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),X.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),X.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),X.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),X.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Oh(e.data.value)),t}Dr(e,t,r){return X.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.yi.get(t);return X.resolve(a!==void 0&&a>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ty{constructor(e,t,r,a){this.targetId=e,this.fromCache=t,this.ds=r,this.As=a}static Rs(e,t){let r=Ue(),a=Ue();for(const l of t.docChanges)switch(l.type){case 0:r=r.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new ty(e,t.fromCache,r,a)}}/**
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
 */class MD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class VD{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return xC()?8:uO(tt())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,a){const l={result:null};return this.ws(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.Ss(e,t,a,r).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new MD;return this.bs(e,t,h).next(m=>{if(l.result=m,this.fs)return this.Ds(e,t,h,m.size)})}).next(()=>l.result)}Ds(e,t,r,a){return r.documentReadCount<this.gs?(ho()<=ke.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",fo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),X.resolve()):(ho()<=ke.DEBUG&&ue("QueryEngine","Query:",fo(t),"scans",r.documentReadCount,"local documents and returns",a,"documents as results."),r.documentReadCount>this.ps*a?(ho()<=ke.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",fo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_i(t))):X.resolve())}ws(e,t){if(sE(t))return X.resolve(null);let r=_i(t);return this.indexManager.getIndexType(e,r).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=zp(t,null,"F"),r=_i(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(l=>{const h=Ue(...l);return this.ys.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,r).next(p=>{const g=this.vs(t,m);return this.Cs(t,g,h,p.readTime)?this.ws(e,zp(t,null,"F")):this.Fs(e,g,t,p)}))})))}Ss(e,t,r,a){return sE(t)||a.isEqual(we.min())?X.resolve(null):this.ys.getDocuments(e,r).next(l=>{const h=this.vs(t,l);return this.Cs(t,h,r,a)?X.resolve(null):(ho()<=ke.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),fo(t)),this.Fs(e,h,t,rO(a,Eu)).next(m=>m))})}vs(e,t){let r=new Pt(EA(e));return t.forEach((a,l)=>{Nf(e,l)&&(r=r.add(l))}),r}Cs(e,t,r,a){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}bs(e,t,r){return ho()<=ke.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",fo(t)),this.ys.getDocumentsMatchingQuery(e,t,is.min(),r)}Fs(e,t,r,a){return this.ys.getDocumentsMatchingQuery(e,r,a).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
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
 */const ny="LocalStore",LD=3e8;class UD{constructor(e,t,r,a){this.persistence=e,this.Ms=t,this.serializer=a,this.xs=new ut(Oe),this.Os=new ha(l=>$g(l),Kg),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ID(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function jD(i,e,t,r){return new UD(i,e,t,r)}async function GA(i,e){const t=Re(i);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let a;return t.mutationQueue.getAllMutationBatches(r).next(l=>(a=l,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(l=>{const h=[],m=[];let p=Ue();for(const g of a){h.push(g.batchId);for(const b of g.mutations)p=p.add(b.key)}for(const g of l){m.push(g.batchId);for(const b of g.mutations)p=p.add(b.key)}return t.localDocuments.getDocuments(r,p).next(g=>({ks:g,removedBatchIds:h,addedBatchIds:m}))})})}function zD(i,e){const t=Re(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const a=e.batch.keys(),l=t.Bs.newChangeBuffer({trackRemovals:!0});return function(m,p,g,b){const T=g.batch,S=T.keys();let j=X.resolve();return S.forEach(G=>{j=j.next(()=>b.getEntry(p,G)).next(W=>{const F=g.docVersions.get(G);Ke(F!==null,48541),W.version.compareTo(F)<0&&(T.applyToRemoteDocument(W,g),W.isValidDocument()&&(W.setReadTime(g.commitVersion),b.addEntry(W)))})}),j.next(()=>m.mutationQueue.removeMutationBatch(p,T))}(t,r,e,l).next(()=>l.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(m){let p=Ue();for(let g=0;g<m.mutationResults.length;++g)m.mutationResults[g].transformResults.length>0&&(p=p.add(m.batch.mutations[g].key));return p}(e))).next(()=>t.localDocuments.getDocuments(r,a))})}function $A(i){const e=Re(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function BD(i,e){const t=Re(i),r=e.snapshotVersion;let a=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.Bs.newChangeBuffer({trackRemovals:!0});a=t.xs;const m=[];e.targetChanges.forEach((b,T)=>{const S=a.get(T);if(!S)return;m.push(t.Ti.removeMatchingKeys(l,b.removedDocuments,T).next(()=>t.Ti.addMatchingKeys(l,b.addedDocuments,T)));let j=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?j=j.withResumeToken(Qt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):b.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(b.resumeToken,r)),a=a.insert(T,j),function(W,F,ee){return W.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-W.snapshotVersion.toMicroseconds()>=LD?!0:ee.addedDocuments.size+ee.modifiedDocuments.size+ee.removedDocuments.size>0}(S,j,b)&&m.push(t.Ti.updateTargetData(l,j))});let p=ar(),g=Ue();if(e.documentUpdates.forEach(b=>{e.resolvedLimboDocuments.has(b)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(l,b))}),m.push(FD(l,h,e.documentUpdates).next(b=>{p=b.qs,g=b.Qs})),!r.isEqual(we.min())){const b=t.Ti.getLastRemoteSnapshotVersion(l).next(T=>t.Ti.setTargetsMetadata(l,l.currentSequenceNumber,r));m.push(b)}return X.waitFor(m).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(t.xs=a,l))}function FD(i,e,t){let r=Ue(),a=Ue();return t.forEach(l=>r=r.add(l)),e.getEntries(i,r).next(l=>{let h=ar();return t.forEach((m,p)=>{const g=l.get(m);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(m)),p.isNoDocument()&&p.version.isEqual(we.min())?(e.removeEntry(m,p.readTime),h=h.insert(m,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),h=h.insert(m,p)):ue(ny,"Ignoring outdated watch update for ",m,". Current version:",g.version," Watch version:",p.version)}),{qs:h,Qs:a}})}function HD(i,e){const t=Re(i);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Hg),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function qD(i,e){const t=Re(i);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let a;return t.Ti.getTargetData(r,e).next(l=>l?(a=l,X.resolve(a)):t.Ti.allocateTargetId(r).next(h=>(a=new Qr(e,h,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,a).next(()=>a))))}).then(r=>{const a=t.xs.get(r.targetId);return(a===null||r.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}async function Gp(i,e,t){const r=Re(i),a=r.xs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",l,h=>r.persistence.referenceDelegate.removeTarget(h,a))}catch(h){if(!Bo(h))throw h;ue(ny,`Failed to update sequence numbers for target ${e}: ${h}`)}r.xs=r.xs.remove(e),r.Os.delete(a.target)}function vE(i,e,t){const r=Re(i);let a=we.min(),l=Ue();return r.persistence.runTransaction("Execute query","readwrite",h=>function(p,g,b){const T=Re(p),S=T.Os.get(b);return S!==void 0?X.resolve(T.xs.get(S)):T.Ti.getTargetData(g,b)}(r,h,_i(e)).next(m=>{if(m)return a=m.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(h,m.targetId).next(p=>{l=p})}).next(()=>r.Ms.getDocumentsMatchingQuery(h,e,t?a:we.min(),t?l:Ue())).next(m=>(GD(r,OO(e),m),{documents:m,$s:l})))}function GD(i,e,t){let r=i.Ns.get(e)||we.min();t.forEach((a,l)=>{l.readTime.compareTo(r)>0&&(r=l.readTime)}),i.Ns.set(e,r)}class _E{constructor(){this.activeTargetIds=LO()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $D{constructor(){this.xo=new _E,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new _E,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class KD{No(e){}shutdown(){}}/**
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
 */const bE="ConnectivityMonitor";class EE{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){ue(bE,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){ue(bE,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Eh=null;function $p(){return Eh===null?Eh=function(){return 268435456+Math.round(2147483648*Math.random())}():Eh++,"0x"+Eh.toString(16)}/**
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
 */const ap="RestConnection",YD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class QD{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${a}`,this.Go=this.databaseId.database===Yh?`project_id=${r}`:`project_id=${r}&database_id=${a}`}zo(e,t,r,a,l){const h=$p(),m=this.jo(e,t.toUriEncodedString());ue(ap,`Sending RPC '${e}' ${h}:`,m,r);const p={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(p,a,l);const{host:g}=new URL(m),b=Vo(g);return this.Jo(e,m,p,r,b).then(T=>(ue(ap,`Received RPC '${e}' ${h}: `,T),T),T=>{throw wo(ap,`RPC '${e}' ${h} failed with error: `,T,"url: ",m,"request:",r),T})}Yo(e,t,r,a,l,h){return this.zo(e,t,r,a,l)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+jo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),r&&r.headers.forEach((a,l)=>e[l]=a)}jo(e,t){const r=YD[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
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
 */class XD{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const Zt="WebChannelConnection";class WD extends QD{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,a,l){const h=$p();return new Promise((m,p)=>{const g=new Q1;g.setWithCredentials(!0),g.listenOnce(X1.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Nh.NO_ERROR:const T=g.getResponseJson();ue(Zt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),m(T);break;case Nh.TIMEOUT:ue(Zt,`RPC '${e}' ${h} timed out`),p(new ve(Z.DEADLINE_EXCEEDED,"Request time out"));break;case Nh.HTTP_ERROR:const S=g.getStatus();if(ue(Zt,`RPC '${e}' ${h} failed with status:`,S,"response text:",g.getResponseText()),S>0){let j=g.getResponseJson();Array.isArray(j)&&(j=j[0]);const G=j==null?void 0:j.error;if(G&&G.status&&G.message){const W=function(ee){const ie=ee.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(ie)>=0?ie:Z.UNKNOWN}(G.status);p(new ve(W,G.message))}else p(new ve(Z.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ve(Z.UNAVAILABLE,"Connection failed."));break;default:Te(9055,{l_:e,streamId:h,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{ue(Zt,`RPC '${e}' ${h} completed.`)}});const b=JSON.stringify(a);ue(Zt,`RPC '${e}' ${h} sending request:`,a),g.send(t,"POST",b,r,15)})}T_(e,t,r){const a=$p(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Z1(),m=J1(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Ho(p.initMessageHeaders,t,r),p.encodeInitMessageHeaders=!0;const b=l.join("");ue(Zt,`Creating RPC '${e}' stream ${a}: ${b}`,p);const T=h.createWebChannel(b,p);let S=!1,j=!1;const G=new XD({Zo:F=>{j?ue(Zt,`Not sending because RPC '${e}' stream ${a} is closed:`,F):(S||(ue(Zt,`Opening RPC '${e}' stream ${a} transport.`),T.open(),S=!0),ue(Zt,`RPC '${e}' stream ${a} sending:`,F),T.send(F))},Xo:()=>T.close()}),W=(F,ee,ie)=>{F.listen(ee,ne=>{try{ie(ne)}catch(fe){setTimeout(()=>{throw fe},0)}})};return W(T,nu.EventType.OPEN,()=>{j||(ue(Zt,`RPC '${e}' stream ${a} transport opened.`),G.__())}),W(T,nu.EventType.CLOSE,()=>{j||(j=!0,ue(Zt,`RPC '${e}' stream ${a} transport closed`),G.u_())}),W(T,nu.EventType.ERROR,F=>{j||(j=!0,wo(Zt,`RPC '${e}' stream ${a} transport errored. Name:`,F.name,"Message:",F.message),G.u_(new ve(Z.UNAVAILABLE,"The operation could not be completed")))}),W(T,nu.EventType.MESSAGE,F=>{var ee;if(!j){const ie=F.data[0];Ke(!!ie,16349);const ne=ie,fe=(ne==null?void 0:ne.error)||((ee=ne[0])===null||ee===void 0?void 0:ee.error);if(fe){ue(Zt,`RPC '${e}' stream ${a} received error:`,fe);const ce=fe.status;let Ce=function(C){const P=St[C];if(P!==void 0)return PA(P)}(ce),D=fe.message;Ce===void 0&&(Ce=Z.INTERNAL,D="Unknown error status: "+ce+" with message "+fe.message),j=!0,G.u_(new ve(Ce,D)),T.close()}else ue(Zt,`RPC '${e}' stream ${a} received:`,ie),G.c_(ie)}}),W(m,W1.STAT_EVENT,F=>{F.stat===kp.PROXY?ue(Zt,`RPC '${e}' stream ${a} detected buffering proxy`):F.stat===kp.NOPROXY&&ue(Zt,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{G.a_()},0),G}}function op(){return typeof document<"u"?document:null}/**
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
 */function kf(i){return new tD(i,!0)}/**
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
 */class KA{constructor(e,t,r=1e3,a=1.5,l=6e4){this.xi=e,this.timerId=t,this.I_=r,this.E_=a,this.d_=l,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),a=Math.max(0,t-r);a>0&&ue("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,a,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
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
 */const TE="PersistentStream";class YA{constructor(e,t,r,a,l,h,m,p){this.xi=e,this.y_=r,this.w_=a,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new KA(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===Z.RESOURCE_EXHAUSTED?(sr(t.toString()),sr("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,a])=>{this.S_===t&&this.K_(r,a)},r=>{e(()=>{const a=new ve(Z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(a)})})}K_(e,t){const r=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(a=>{r(()=>this.W_(a))}),this.stream.onMessage(a=>{r(()=>++this.v_==1?this.z_(a):this.onNext(a))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return ue(TE,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(ue(TE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class JD extends YA{constructor(e,t,r,a,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,a,h),this.serializer=l}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=rD(this.serializer,e),r=function(l){if(!("targetChange"in l))return we.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?bi(h.readTime):we.min()}(e);return this.listener.j_(t,r)}H_(e){const t={};t.database=qp(this.serializer),t.addTarget=function(l,h){let m;const p=h.target;if(m=jp(p)?{documents:oD(l,p)}:{query:lD(l,p).gt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=VA(l,h.resumeToken);const g=Bp(l,h.expectedCount);g!==null&&(m.expectedCount=g)}else if(h.snapshotVersion.compareTo(we.min())>0){m.readTime=ef(l,h.snapshotVersion.toTimestamp());const g=Bp(l,h.expectedCount);g!==null&&(m.expectedCount=g)}return m}(this.serializer,e);const r=cD(this.serializer,e);r&&(t.labels=r),this.L_(t)}J_(e){const t={};t.database=qp(this.serializer),t.removeTarget=e,this.L_(t)}}class ZD extends YA{constructor(e,t,r,a,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,a,h),this.serializer=l}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return Ke(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ke(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){Ke(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=aD(e.writeResults,e.commitTime),r=bi(e.commitTime);return this.listener.ea(r,t)}ta(){const e={};e.database=qp(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>sD(this.serializer,r))};this.L_(t)}}/**
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
 */class eP{}class tP extends eP{constructor(e,t,r,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=a,this.na=!1}ra(){if(this.na)throw new ve(Z.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,a){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.zo(e,Fp(t,r),a,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ve(Z.UNKNOWN,l.toString())})}Yo(e,t,r,a,l){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.Yo(e,Fp(t,r),a,h,m,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ve(Z.UNKNOWN,h.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class nP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(sr(t),this.oa=!1):ue("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
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
 */const sa="RemoteStore";class iP{constructor(e,t,r,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=l,this.Ea.No(h=>{r.enqueueAndForget(async()=>{da(this)&&(ue(sa,"Restarting streams for network reachability change."),await async function(p){const g=Re(p);g.Ta.add(4),await ju(g),g.da.set("Unknown"),g.Ta.delete(4),await Mf(g)}(this))})}),this.da=new nP(r,a)}}async function Mf(i){if(da(i))for(const e of i.Ia)await e(!0)}async function ju(i){for(const e of i.Ia)await e(!1)}function QA(i,e){const t=Re(i);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),ay(t)?sy(t):Fo(t).M_()&&ry(t,e))}function iy(i,e){const t=Re(i),r=Fo(t);t.Pa.delete(e),r.M_()&&XA(t,e),t.Pa.size===0&&(r.M_()?r.N_():da(t)&&t.da.set("Unknown"))}function ry(i,e){if(i.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Fo(i).H_(e)}function XA(i,e){i.Aa.Ke(e),Fo(i).J_(e)}function sy(i){i.Aa=new WO({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>i.Pa.get(e)||null,Pt:()=>i.datastore.serializer.databaseId}),Fo(i).start(),i.da._a()}function ay(i){return da(i)&&!Fo(i).F_()&&i.Pa.size>0}function da(i){return Re(i).Ta.size===0}function WA(i){i.Aa=void 0}async function rP(i){i.da.set("Online")}async function sP(i){i.Pa.forEach((e,t)=>{ry(i,e)})}async function aP(i,e){WA(i),ay(i)?(i.da.ca(e),sy(i)):i.da.set("Unknown")}async function oP(i,e,t){if(i.da.set("Online"),e instanceof MA&&e.state===2&&e.cause)try{await async function(a,l){const h=l.cause;for(const m of l.targetIds)a.Pa.has(m)&&(await a.remoteSyncer.rejectListen(m,h),a.Pa.delete(m),a.Aa.removeTarget(m))}(i,e)}catch(r){ue(sa,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await nf(i,r)}else if(e instanceof kh?i.Aa.Xe(e):e instanceof kA?i.Aa.ot(e):i.Aa.nt(e),!t.isEqual(we.min()))try{const r=await $A(i.localStore);t.compareTo(r)>=0&&await function(l,h){const m=l.Aa.It(h);return m.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const b=l.Pa.get(g);b&&l.Pa.set(g,b.withResumeToken(p.resumeToken,h))}}),m.targetMismatches.forEach((p,g)=>{const b=l.Pa.get(p);if(!b)return;l.Pa.set(p,b.withResumeToken(Qt.EMPTY_BYTE_STRING,b.snapshotVersion)),XA(l,p);const T=new Qr(b.target,p,g,b.sequenceNumber);ry(l,T)}),l.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(r){ue(sa,"Failed to raise snapshot:",r),await nf(i,r)}}async function nf(i,e,t){if(!Bo(e))throw e;i.Ta.add(1),await ju(i),i.da.set("Offline"),t||(t=()=>$A(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{ue(sa,"Retrying IndexedDB access"),await t(),i.Ta.delete(1),await Mf(i)})}function JA(i,e){return e().catch(t=>nf(i,t,e))}async function Vf(i){const e=Re(i),t=os(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:Hg;for(;lP(e);)try{const a=await HD(e.localStore,r);if(a===null){e.ha.length===0&&t.N_();break}r=a.batchId,uP(e,a)}catch(a){await nf(e,a)}ZA(e)&&eS(e)}function lP(i){return da(i)&&i.ha.length<10}function uP(i,e){i.ha.push(e);const t=os(i);t.M_()&&t.Y_&&t.Z_(e.mutations)}function ZA(i){return da(i)&&!os(i).F_()&&i.ha.length>0}function eS(i){os(i).start()}async function cP(i){os(i).ta()}async function hP(i){const e=os(i);for(const t of i.ha)e.Z_(t.mutations)}async function fP(i,e,t){const r=i.ha.shift(),a=Xg.from(r,e,t);await JA(i,()=>i.remoteSyncer.applySuccessfulWrite(a)),await Vf(i)}async function dP(i,e){e&&os(i).Y_&&await async function(r,a){if(function(h){return QO(h)&&h!==Z.ABORTED}(a.code)){const l=r.ha.shift();os(r).O_(),await JA(r,()=>r.remoteSyncer.rejectFailedWrite(l.batchId,a)),await Vf(r)}}(i,e),ZA(i)&&eS(i)}async function AE(i,e){const t=Re(i);t.asyncQueue.verifyOperationInProgress(),ue(sa,"RemoteStore received new credentials");const r=da(t);t.Ta.add(3),await ju(t),r&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await Mf(t)}async function mP(i,e){const t=Re(i);e?(t.Ta.delete(2),await Mf(t)):e||(t.Ta.add(2),await ju(t),t.da.set("Unknown"))}function Fo(i){return i.Ra||(i.Ra=function(t,r,a){const l=Re(t);return l.ra(),new JD(r,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{e_:rP.bind(null,i),n_:sP.bind(null,i),i_:aP.bind(null,i),j_:oP.bind(null,i)}),i.Ia.push(async e=>{e?(i.Ra.O_(),ay(i)?sy(i):i.da.set("Unknown")):(await i.Ra.stop(),WA(i))})),i.Ra}function os(i){return i.Va||(i.Va=function(t,r,a){const l=Re(t);return l.ra(),new ZD(r,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{e_:()=>Promise.resolve(),n_:cP.bind(null,i),i_:dP.bind(null,i),X_:hP.bind(null,i),ea:fP.bind(null,i)}),i.Ia.push(async e=>{e?(i.Va.O_(),await Vf(i)):(await i.Va.stop(),i.ha.length>0&&(ue(sa,`Stopping write stream with ${i.ha.length} pending writes`),i.ha=[]))})),i.Va}/**
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
 */class oy{constructor(e,t,r,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=a,this.removalCallback=l,this.deferred=new es,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,a,l){const h=Date.now()+r,m=new oy(e,t,h,a,l);return m.start(r),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ve(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ly(i,e){if(sr("AsyncQueue",`${e}: ${i}`),Bo(i))return new ve(Z.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class bo{static emptySet(e){return new bo(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||_e.comparator(t.key,r.key):(t,r)=>_e.comparator(t.key,r.key),this.keyedMap=iu(),this.sortedSet=new ut(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof bo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=r.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new bo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class SE{constructor(){this.ma=new ut(_e.comparator)}track(e){const t=e.doc.key,r=this.ma.get(t);r?e.type!==0&&r.type===3?this.ma=this.ma.insert(t,e):e.type===3&&r.type!==1?this.ma=this.ma.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ma=this.ma.remove(t):e.type===1&&r.type===2?this.ma=this.ma.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):Te(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,r)=>{e.push(r)}),e}}class No{constructor(e,t,r,a,l,h,m,p,g){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=a,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,r,a,l){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new No(e,t,bo.emptySet(t),h,r,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==r[a].type||!t[a].doc.isEqual(r[a].doc))return!1;return!0}}/**
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
 */class pP{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class gP{constructor(){this.queries=wE(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,r){const a=Re(t),l=a.queries;a.queries=wE(),l.forEach((h,m)=>{for(const p of m.ya)p.onError(r)})})(this,new ve(Z.ABORTED,"Firestore shutting down"))}}function wE(){return new ha(i=>bA(i),xf)}async function yP(i,e){const t=Re(i);let r=3;const a=e.query;let l=t.queries.get(a);l?!l.wa()&&e.Sa()&&(r=2):(l=new pP,r=e.Sa()?0:1);try{switch(r){case 0:l.pa=await t.onListen(a,!0);break;case 1:l.pa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(h){const m=ly(h,`Initialization of query '${fo(e.query)}' failed`);return void e.onError(m)}t.queries.set(a,l),l.ya.push(e),e.Da(t.onlineState),l.pa&&e.va(l.pa)&&uy(t)}async function vP(i,e){const t=Re(i),r=e.query;let a=3;const l=t.queries.get(r);if(l){const h=l.ya.indexOf(e);h>=0&&(l.ya.splice(h,1),l.ya.length===0?a=e.Sa()?0:1:!l.wa()&&e.Sa()&&(a=2))}switch(a){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function _P(i,e){const t=Re(i);let r=!1;for(const a of e){const l=a.query,h=t.queries.get(l);if(h){for(const m of h.ya)m.va(a)&&(r=!0);h.pa=a}}r&&uy(t)}function bP(i,e,t){const r=Re(i),a=r.queries.get(e);if(a)for(const l of a.ya)l.onError(t);r.queries.delete(e)}function uy(i){i.ba.forEach(e=>{e.next()})}var Kp,IE;(IE=Kp||(Kp={})).Ca="default",IE.Cache="cache";class EP{constructor(e,t,r){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){const r=[];for(const a of e.docChanges)a.type!==3&&r.push(a);e=new No(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const r=t!=="Offline";return(!this.options.La||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=No.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==Kp.Cache}}/**
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
 */class tS{constructor(e){this.key=e}}class nS{constructor(e){this.key=e}}class TP{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=Ue(),this.mutatedKeys=Ue(),this.Ha=EA(e),this.Ja=new bo(this.Ha)}get Ya(){return this.Ga}Za(e,t){const r=t?t.Xa:new SE,a=t?t.Ja:this.Ja;let l=t?t.mutatedKeys:this.mutatedKeys,h=a,m=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((b,T)=>{const S=a.get(b),j=Nf(this.query,T)?T:null,G=!!S&&this.mutatedKeys.has(S.key),W=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let F=!1;S&&j?S.data.isEqual(j.data)?G!==W&&(r.track({type:3,doc:j}),F=!0):this.eu(S,j)||(r.track({type:2,doc:j}),F=!0,(p&&this.Ha(j,p)>0||g&&this.Ha(j,g)<0)&&(m=!0)):!S&&j?(r.track({type:0,doc:j}),F=!0):S&&!j&&(r.track({type:1,doc:S}),F=!0,(p||g)&&(m=!0)),F&&(j?(h=h.add(j),l=W?l.add(b):l.delete(b)):(h=h.delete(b),l=l.delete(b)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const b=this.query.limitType==="F"?h.last():h.first();h=h.delete(b.key),l=l.delete(b.key),r.track({type:1,doc:b})}return{Ja:h,Xa:r,Cs:m,mutatedKeys:l}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,a){const l=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const h=e.Xa.ga();h.sort((b,T)=>function(j,G){const W=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te(20277,{Vt:F})}};return W(j)-W(G)}(b.type,T.type)||this.Ha(b.doc,T.doc)),this.tu(r),a=a!=null&&a;const m=t&&!a?this.nu():[],p=this.ja.size===0&&this.current&&!a?1:0,g=p!==this.za;return this.za=p,h.length!==0||g?{snapshot:new No(this.query,e.Ja,l,h,e.mutatedKeys,p===0,g,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:m}:{ru:m}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new SE,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=Ue(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const t=[];return e.forEach(r=>{this.ja.has(r)||t.push(new nS(r))}),this.ja.forEach(r=>{e.has(r)||t.push(new tS(r))}),t}su(e){this.Ga=e.$s,this.ja=Ue();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return No.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const cy="SyncEngine";class AP{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class SP{constructor(e){this.key=e,this._u=!1}}class wP{constructor(e,t,r,a,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.au={},this.uu=new ha(m=>bA(m),xf),this.cu=new Map,this.lu=new Set,this.hu=new ut(_e.comparator),this.Pu=new Map,this.Tu=new Zg,this.Iu={},this.Eu=new Map,this.du=xo.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function IP(i,e,t=!0){const r=lS(i);let a;const l=r.uu.get(e);return l?(r.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.ou()):a=await iS(r,e,t,!0),a}async function RP(i,e){const t=lS(i);await iS(t,e,!0,!1)}async function iS(i,e,t,r){const a=await qD(i.localStore,_i(e)),l=a.targetId,h=i.sharedClientState.addLocalQueryTarget(l,t);let m;return r&&(m=await CP(i,e,l,h==="current",a.resumeToken)),i.isPrimaryClient&&t&&QA(i.remoteStore,a),m}async function CP(i,e,t,r,a){i.Ru=(T,S,j)=>async function(W,F,ee,ie){let ne=F.view.Za(ee);ne.Cs&&(ne=await vE(W.localStore,F.query,!1).then(({documents:D})=>F.view.Za(D,ne)));const fe=ie&&ie.targetChanges.get(F.targetId),ce=ie&&ie.targetMismatches.get(F.targetId)!=null,Ce=F.view.applyChanges(ne,W.isPrimaryClient,fe,ce);return CE(W,F.targetId,Ce.ru),Ce.snapshot}(i,T,S,j);const l=await vE(i.localStore,e,!0),h=new TP(e,l.$s),m=h.Za(l.documents),p=Uu.createSynthesizedTargetChangeForCurrentChange(t,r&&i.onlineState!=="Offline",a),g=h.applyChanges(m,i.isPrimaryClient,p);CE(i,t,g.ru);const b=new AP(e,t,h);return i.uu.set(e,b),i.cu.has(t)?i.cu.get(t).push(e):i.cu.set(t,[e]),g.snapshot}async function xP(i,e,t){const r=Re(i),a=r.uu.get(e),l=r.cu.get(a.targetId);if(l.length>1)return r.cu.set(a.targetId,l.filter(h=>!xf(h,e))),void r.uu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(a.targetId),r.sharedClientState.isActiveQueryTarget(a.targetId)||await Gp(r.localStore,a.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(a.targetId),t&&iy(r.remoteStore,a.targetId),Yp(r,a.targetId)}).catch(zo)):(Yp(r,a.targetId),await Gp(r.localStore,a.targetId,!0))}async function NP(i,e){const t=Re(i),r=t.uu.get(e),a=t.cu.get(r.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),iy(t.remoteStore,r.targetId))}async function OP(i,e,t){const r=UP(i);try{const a=await function(h,m){const p=Re(h),g=Dt.now(),b=m.reduce((j,G)=>j.add(G.key),Ue());let T,S;return p.persistence.runTransaction("Locally write mutations","readwrite",j=>{let G=ar(),W=Ue();return p.Bs.getEntries(j,b).next(F=>{G=F,G.forEach((ee,ie)=>{ie.isValidDocument()||(W=W.add(ee))})}).next(()=>p.localDocuments.getOverlayedDocuments(j,G)).next(F=>{T=F;const ee=[];for(const ie of m){const ne=qO(ie,T.get(ie.key).overlayedDocument);ne!=null&&ee.push(new fa(ie.key,ne,dA(ne.value.mapValue),tr.exists(!0)))}return p.mutationQueue.addMutationBatch(j,g,ee,m)}).next(F=>{S=F;const ee=F.applyToLocalDocumentSet(T,W);return p.documentOverlayCache.saveOverlays(j,F.batchId,ee)})}).then(()=>({batchId:S.batchId,changes:AA(T)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(a.batchId),function(h,m,p){let g=h.Iu[h.currentUser.toKey()];g||(g=new ut(Oe)),g=g.insert(m,p),h.Iu[h.currentUser.toKey()]=g}(r,a.batchId,t),await zu(r,a.changes),await Vf(r.remoteStore)}catch(a){const l=ly(a,"Failed to persist write");t.reject(l)}}async function rS(i,e){const t=Re(i);try{const r=await BD(t.localStore,e);e.targetChanges.forEach((a,l)=>{const h=t.Pu.get(l);h&&(Ke(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?h._u=!0:a.modifiedDocuments.size>0?Ke(h._u,14607):a.removedDocuments.size>0&&(Ke(h._u,42227),h._u=!1))}),await zu(t,r,e)}catch(r){await zo(r)}}function RE(i,e,t){const r=Re(i);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const a=[];r.uu.forEach((l,h)=>{const m=h.view.Da(e);m.snapshot&&a.push(m.snapshot)}),function(h,m){const p=Re(h);p.onlineState=m;let g=!1;p.queries.forEach((b,T)=>{for(const S of T.ya)S.Da(m)&&(g=!0)}),g&&uy(p)}(r.eventManager,e),a.length&&r.au.j_(a),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function DP(i,e,t){const r=Re(i);r.sharedClientState.updateQueryState(e,"rejected",t);const a=r.Pu.get(e),l=a&&a.key;if(l){let h=new ut(_e.comparator);h=h.insert(l,tn.newNoDocument(l,we.min()));const m=Ue().add(l),p=new Pf(we.min(),new Map,new ut(Oe),h,m);await rS(r,p),r.hu=r.hu.remove(l),r.Pu.delete(e),hy(r)}else await Gp(r.localStore,e,!1).then(()=>Yp(r,e,t)).catch(zo)}async function PP(i,e){const t=Re(i),r=e.batch.batchId;try{const a=await zD(t.localStore,e);aS(t,r,null),sS(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await zu(t,a)}catch(a){await zo(a)}}async function kP(i,e,t){const r=Re(i);try{const a=await function(h,m){const p=Re(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let b;return p.mutationQueue.lookupMutationBatch(g,m).next(T=>(Ke(T!==null,37113),b=T.keys(),p.mutationQueue.removeMutationBatch(g,T))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,b,m)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,b)).next(()=>p.localDocuments.getDocuments(g,b))})}(r.localStore,e);aS(r,e,t),sS(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await zu(r,a)}catch(a){await zo(a)}}function sS(i,e){(i.Eu.get(e)||[]).forEach(t=>{t.resolve()}),i.Eu.delete(e)}function aS(i,e,t){const r=Re(i);let a=r.Iu[r.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),r.Iu[r.currentUser.toKey()]=a}}function Yp(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const r of i.cu.get(e))i.uu.delete(r),t&&i.au.Vu(r,t);i.cu.delete(e),i.isPrimaryClient&&i.Tu.Hr(e).forEach(r=>{i.Tu.containsKey(r)||oS(i,r)})}function oS(i,e){i.lu.delete(e.path.canonicalString());const t=i.hu.get(e);t!==null&&(iy(i.remoteStore,t),i.hu=i.hu.remove(e),i.Pu.delete(t),hy(i))}function CE(i,e,t){for(const r of t)r instanceof tS?(i.Tu.addReference(r.key,e),MP(i,r)):r instanceof nS?(ue(cy,"Document no longer in limbo: "+r.key),i.Tu.removeReference(r.key,e),i.Tu.containsKey(r.key)||oS(i,r.key)):Te(19791,{mu:r})}function MP(i,e){const t=e.key,r=t.path.canonicalString();i.hu.get(t)||i.lu.has(r)||(ue(cy,"New document in limbo: "+t),i.lu.add(r),hy(i))}function hy(i){for(;i.lu.size>0&&i.hu.size<i.maxConcurrentLimboResolutions;){const e=i.lu.values().next().value;i.lu.delete(e);const t=new _e(mt.fromString(e)),r=i.du.next();i.Pu.set(r,new SP(t)),i.hu=i.hu.insert(t,r),QA(i.remoteStore,new Qr(_i(Yg(t.path)),r,"TargetPurposeLimboResolution",wf.le))}}async function zu(i,e,t){const r=Re(i),a=[],l=[],h=[];r.uu.isEmpty()||(r.uu.forEach((m,p)=>{h.push(r.Ru(p,e,t).then(g=>{var b;if((g||t)&&r.isPrimaryClient){const T=g?!g.fromCache:(b=t==null?void 0:t.targetChanges.get(p.targetId))===null||b===void 0?void 0:b.current;r.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(g){a.push(g);const T=ty.Rs(p.targetId,g);l.push(T)}}))}),await Promise.all(h),r.au.j_(a),await async function(p,g){const b=Re(p);try{await b.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>X.forEach(g,S=>X.forEach(S.ds,j=>b.persistence.referenceDelegate.addReference(T,S.targetId,j)).next(()=>X.forEach(S.As,j=>b.persistence.referenceDelegate.removeReference(T,S.targetId,j)))))}catch(T){if(!Bo(T))throw T;ue(ny,"Failed to update sequence numbers: "+T)}for(const T of g){const S=T.targetId;if(!T.fromCache){const j=b.xs.get(S),G=j.snapshotVersion,W=j.withLastLimboFreeSnapshotVersion(G);b.xs=b.xs.insert(S,W)}}}(r.localStore,l))}async function VP(i,e){const t=Re(i);if(!t.currentUser.isEqual(e)){ue(cy,"User change. New user:",e.toKey());const r=await GA(t.localStore,e);t.currentUser=e,function(l,h){l.Eu.forEach(m=>{m.forEach(p=>{p.reject(new ve(Z.CANCELLED,h))})}),l.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zu(t,r.ks)}}function LP(i,e){const t=Re(i),r=t.Pu.get(e);if(r&&r._u)return Ue().add(r.key);{let a=Ue();const l=t.cu.get(e);if(!l)return a;for(const h of l){const m=t.uu.get(h);a=a.unionWith(m.view.Ya)}return a}}function lS(i){const e=Re(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=rS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=DP.bind(null,e),e.au.j_=_P.bind(null,e.eventManager),e.au.Vu=bP.bind(null,e.eventManager),e}function UP(i){const e=Re(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=PP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kP.bind(null,e),e}class rf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=kf(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return jD(this.persistence,new VD,e.initialUser,this.serializer)}yu(e){return new qA(ey.fi,this.serializer)}pu(e){return new $D}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}rf.provider={build:()=>new rf};class jP extends rf{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){Ke(this.persistence.referenceDelegate instanceof tf,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ED(r,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?dn.withCacheSize(this.cacheSizeBytes):dn.DEFAULT;return new qA(r=>tf.fi(r,t),this.serializer)}}class Qp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>RE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VP.bind(null,this.syncEngine),await mP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new gP}()}createDatastore(e){const t=kf(e.databaseInfo.databaseId),r=function(l){return new WD(l)}(e.databaseInfo);return function(l,h,m,p){return new tP(l,h,m,p)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,a,l,h,m){return new iP(r,a,l,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>RE(this.syncEngine,t,0),function(){return EE.C()?new EE:new KD}())}createSyncEngine(e,t){return function(a,l,h,m,p,g,b){const T=new wP(a,l,h,m,p,g);return b&&(T.Au=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=Re(a);ue(sa,"RemoteStore shutting down."),l.Ta.add(5),await ju(l),l.Ea.shutdown(),l.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Qp.provider={build:()=>new Qp};/**
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
 */class zP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):sr("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const ls="FirestoreClient";class BP{constructor(e,t,r,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=a,this.user=en.UNAUTHENTICATED,this.clientId=iA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(r,async h=>{ue(ls,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(r,h=>(ue(ls,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new es;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ly(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lp(i,e){i.asyncQueue.verifyOperationInProgress(),ue(ls,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let r=t.initialUser;i.setCredentialChangeListener(async a=>{r.isEqual(a)||(await GA(e.localStore,a),r=a)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function xE(i,e){i.asyncQueue.verifyOperationInProgress();const t=await FP(i);ue(ls,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(r=>AE(e.remoteStore,r)),i.setAppCheckTokenChangeListener((r,a)=>AE(e.remoteStore,a)),i._onlineComponents=e}async function FP(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ue(ls,"Using user provided OfflineComponentProvider");try{await lp(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===Z.FAILED_PRECONDITION||a.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;wo("Error using user provided cache. Falling back to memory cache: "+t),await lp(i,new rf)}}else ue(ls,"Using default OfflineComponentProvider"),await lp(i,new jP(void 0));return i._offlineComponents}async function uS(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ue(ls,"Using user provided OnlineComponentProvider"),await xE(i,i._uninitializedComponentsProvider._online)):(ue(ls,"Using default OnlineComponentProvider"),await xE(i,new Qp))),i._onlineComponents}function HP(i){return uS(i).then(e=>e.syncEngine)}async function qP(i){const e=await uS(i),t=e.eventManager;return t.onListen=IP.bind(null,e.syncEngine),t.onUnlisten=xP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=RP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=NP.bind(null,e.syncEngine),t}function GP(i,e,t={}){const r=new es;return i.asyncQueue.enqueueAndForget(async()=>function(l,h,m,p,g){const b=new zP({next:S=>{b.Cu(),h.enqueueAndForget(()=>vP(l,T));const j=S.docs.has(m);!j&&S.fromCache?g.reject(new ve(Z.UNAVAILABLE,"Failed to get document because the client is offline.")):j&&S.fromCache&&p&&p.source==="server"?g.reject(new ve(Z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(S)},error:S=>g.reject(S)}),T=new EP(Yg(m.path),b,{includeMetadataChanges:!0,La:!0});return yP(l,T)}(await qP(i),i.asyncQueue,e,t,r)),r.promise}/**
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
 */function cS(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const NE=new Map;/**
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
 */function $P(i,e,t){if(!t)throw new ve(Z.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function KP(i,e,t,r){if(e===!0&&r===!0)throw new ve(Z.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function OE(i){if(!_e.isDocumentKey(i))throw new ve(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function fy(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Te(12329,{type:typeof i})}function Ru(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ve(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=fy(i);throw new ve(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */const hS="firestore.googleapis.com",DE=!0;class PE{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ve(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=hS,this.ssl=DE}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:DE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=HA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<_D)throw new ve(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}KP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ve(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ve(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ve(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,a){return r.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class dy{constructor(e,t,r,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new PE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ve(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ve(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new PE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new QN;switch(r.type){case"firstParty":return new ZN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ve(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,_f("Firestore",this._settings.isUsingEmulator),this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=NE.get(t);r&&(ue("ComponentProvider","Removing Datastore"),NE.delete(t),r.terminate())}(this),Promise.resolve()}}function YP(i,e,t,r={}){var a;i=Ru(i,dy);const l=Vo(e),h=i._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:i._getEmulatorOptions()}),p=`${e}:${t}`;h.host!==hS&&h.host!==p&&wo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},h),{host:p,ssl:l,emulatorOptions:r});if(!ts(g,m)&&(i._setSettings(g),l&&(ZT(`https://${p}`),_f("Firestore",!0)),r.mockUserToken)){let b,T;if(typeof r.mockUserToken=="string")b=r.mockUserToken,T=en.MOCK_USER;else{b=wC(r.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const S=r.mockUserToken.sub||r.mockUserToken.user_id;if(!S)throw new ve(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new en(S)}i._authCredentials=new XN(new tA(b,T))}}/**
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
 */class my{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new my(this.firestore,e,this._query)}}class Un{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Un(this.firestore,e,this._key)}}class Cu extends my{constructor(e,t,r){super(e,t,Yg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Un(this.firestore,null,new _e(e))}withConverter(e){return new Cu(this.firestore,e,this._path)}}function QP(i,e,...t){if(i=nn(i),arguments.length===1&&(e=iA.newId()),$P("doc","path",e),i instanceof dy){const r=mt.fromString(e,...t);return OE(r),new Un(i,null,new _e(r))}{if(!(i instanceof Un||i instanceof Cu))throw new ve(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(mt.fromString(e,...t));return OE(r),new Un(i.firestore,i instanceof Cu?i.converter:null,new _e(r))}}/**
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
 */const kE="AsyncQueue";class ME{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new KA(this,"async_queue_retry"),this.ec=()=>{const r=op();r&&ue(kE,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const t=op();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=op();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new es;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!Bo(e))throw e;ue(kE,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,sr("INTERNAL UNHANDLED ERROR: ",VE(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=t,t}enqueueAfterDelay(e,t,r){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const a=oy.createAndSchedule(this,e,t,r,l=>this.oc(l));return this.Hu.push(a),a}nc(){this.Ju&&Te(47125,{_c:VE(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function VE(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class py extends dy{constructor(e,t,r,a){super(e,t,r,a),this.type="firestore",this._queue=new ME,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ME(e),this._firestoreClient=void 0,await e}}}function XP(i,e){const t=typeof i=="object"?i:Cg(),r=typeof i=="string"?i:Yh,a=Pu(t,"firestore").getImmediate({identifier:r});if(!a._initialized){const l=AC("firestore");l&&YP(a,...l)}return a}function fS(i){if(i._terminated)throw new ve(Z.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||WP(i),i._firestoreClient}function WP(i){var e,t,r;const a=i._freezeSettings(),l=function(m,p,g,b){return new mO(m,p,g,b.host,b.ssl,b.experimentalForceLongPolling,b.experimentalAutoDetectLongPolling,cS(b.experimentalLongPollingOptions),b.useFetchStreams,b.isUsingEmulator)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=a.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new BP(i._authCredentials,i._appCheckCredentials,i._queue,l,i._componentsProvider&&function(m){const p=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(p),_online:p}}(i._componentsProvider))}/**
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
 */class Oo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Oo(Qt.fromBase64String(e))}catch(t){throw new ve(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Oo(Qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class gy{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ve(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class dS{constructor(e){this._methodName=e}}/**
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
 */class yy{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ve(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ve(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}/**
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
 */class vy{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,a){if(r.length!==a.length)return!1;for(let l=0;l<r.length;++l)if(r[l]!==a[l])return!1;return!0}(this._values,e._values)}}/**
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
 */const JP=/^__.*__$/;class ZP{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new fa(e,this.data,this.fieldMask,t,this.fieldTransforms):new Lu(e,this.data,t,this.fieldTransforms)}}function mS(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te(40011,{hc:i})}}class _y{constructor(e,t,r,a,l,h){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=a,l===void 0&&this.Pc(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new _y(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Tc({path:r,Ec:!1});return a.dc(e),a}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Tc({path:r,Ec:!1});return a.Pc(),a}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return sf(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(mS(this.hc)&&JP.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class ek{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||kf(e)}gc(e,t,r,a=!1){return new _y({hc:e,methodName:t,fc:r,path:Yt.emptyPath(),Ec:!1,mc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tk(i){const e=i._freezeSettings(),t=kf(i._databaseId);return new ek(i._databaseId,!!e.ignoreUndefinedProperties,t)}function nk(i,e,t,r,a,l={}){const h=i.gc(l.merge||l.mergeFields?2:0,e,t,a);vS("Data must be an object, but it was:",h,r);const m=gS(r,h);let p,g;if(l.merge)p=new $n(h.fieldMask),g=h.fieldTransforms;else if(l.mergeFields){const b=[];for(const T of l.mergeFields){const S=ik(e,T,t);if(!h.contains(S))throw new ve(Z.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);sk(b,S)||b.push(S)}p=new $n(b),g=h.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,g=h.fieldTransforms;return new ZP(new Ln(m),p,g)}function pS(i,e){if(yS(i=nn(i)))return vS("Unsupported field value:",e,i),gS(i,e);if(i instanceof dS)return function(r,a){if(!mS(a.hc))throw a.Vc(`${r._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Vc(`${r._methodName}() is not currently supported inside arrays`);const l=r._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,a){const l=[];let h=0;for(const m of r){let p=pS(m,a.Rc(h));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),h++}return{arrayValue:{values:l}}}(i,e)}return function(r,a){if((r=nn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return UO(a.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const l=Dt.fromDate(r);return{timestampValue:ef(a.serializer,l)}}if(r instanceof Dt){const l=new Dt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ef(a.serializer,l)}}if(r instanceof yy)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Oo)return{bytesValue:VA(a.serializer,r._byteString)};if(r instanceof Un){const l=a.databaseId,h=r.firestore._databaseId;if(!h.isEqual(l))throw a.Vc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Jg(r.firestore._databaseId||a.databaseId,r._key.path)}}if(r instanceof vy)return function(h,m){return{mapValue:{fields:{[hA]:{stringValue:fA},[Qh]:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw m.Vc("VectorValues must only contain numeric values.");return Qg(m.serializer,g)})}}}}}}(r,a);throw a.Vc(`Unsupported field value: ${fy(r)}`)}(i,e)}function gS(i,e){const t={};return sA(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ca(i,(r,a)=>{const l=pS(a,e.Ic(r));l!=null&&(t[r]=l)}),{mapValue:{fields:t}}}function yS(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Dt||i instanceof yy||i instanceof Oo||i instanceof Un||i instanceof dS||i instanceof vy)}function vS(i,e,t){if(!yS(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const r=fy(t);throw r==="an object"?e.Vc(i+" a custom object"):e.Vc(i+" "+r)}}function ik(i,e,t){if((e=nn(e))instanceof gy)return e._internalPath;if(typeof e=="string")return _S(i,e);throw sf("Field path arguments must be of type string or ",i,!1,void 0,t)}const rk=new RegExp("[~\\*/\\[\\]]");function _S(i,e,t){if(e.search(rk)>=0)throw sf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new gy(...e.split("."))._internalPath}catch{throw sf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function sf(i,e,t,r,a){const l=r&&!r.isEmpty(),h=a!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(l||h)&&(p+=" (found",l&&(p+=` in field ${r}`),h&&(p+=` in document ${a}`),p+=")"),new ve(Z.INVALID_ARGUMENT,m+i+p)}function sk(i,e){return i.some(t=>t.isEqual(e))}/**
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
 */class bS{constructor(e,t,r,a,l){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Un(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ak(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ES("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ak extends bS{data(){return super.data()}}function ES(i,e){return typeof e=="string"?_S(i,e):e instanceof gy?e._internalPath:e._delegate._internalPath}class ok{convertValue(e,t="none"){switch(as(e)){case 0:return null;case 1:return e.booleanValue;case 2:return vt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ca(e,(a,l)=>{r[a]=this.convertValue(l,t)}),r}convertVectorValue(e){var t,r,a;const l=(a=(r=(t=e.fields)===null||t===void 0?void 0:t[Qh].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.map(h=>vt(h.doubleValue));return new vy(l)}convertGeoPoint(e){return new yy(vt(e.latitude),vt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Rf(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Tu(e));default:return null}}convertTimestamp(e){const t=rs(e);return new Dt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=mt.fromString(e);Ke(FA(r),9688,{name:e});const a=new Au(r.get(1),r.get(3)),l=new _e(r.popFirst(5));return a.isEqual(t)||sr(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function lk(i,e,t){let r;return r=i?i.toFirestore(e):e,r}/**
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
 */class uk{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class TS extends bS{constructor(e,t,r,a,l,h){super(e,t,r,a,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ck(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ES("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ck extends TS{data(e={}){return super.data(e)}}/**
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
 */function hk(i){i=Ru(i,Un);const e=Ru(i.firestore,py);return GP(fS(e),i._key).then(t=>pk(e,i,t))}class fk extends ok{constructor(e){super(),this.firestore=e}convertBytes(e){return new Oo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Un(this.firestore,null,t)}}function dk(i,e,t){i=Ru(i,Un);const r=Ru(i.firestore,py),a=lk(i.converter,e);return mk(r,[nk(tk(r),"setDoc",i._key,a,i.converter!==null,t).toMutation(i._key,tr.none())])}function mk(i,e){return function(r,a){const l=new es;return r.asyncQueue.enqueueAndForget(async()=>OP(await HP(r),a,l)),l.promise}(fS(i),e)}function pk(i,e,t){const r=t.docs.get(e._key),a=new fk(i);return new TS(i,a,e._key,r,new uk(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(a){jo=a})(wi),ns(new nr("firestore",(r,{instanceIdentifier:a,options:l})=>{const h=r.getProvider("app").getImmediate(),m=new py(new WN(r.getProvider("auth-internal")),new eO(h,r.getProvider("app-check-internal")),function(g,b){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ve(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Au(g.options.projectId,b)}(h,a),h);return l=Object.assign({useFetchStreams:t},l),m._setSettings(l),m},"PUBLIC").setMultipleInstances(!0)),yi(Fb,Hb,e),yi(Fb,Hb,"esm2017")})();const gk=XP(Sf),yk=Bg(Sf),vk=()=>{const i=yf(),e=async t=>{var r;t.preventDefault();try{const a=new Lg,l=await eN(yk,a);if(!l.user)throw new Error("Error al loguear con google");const h=QP(gk,"users",l.user.uid);(await hk(h)).exists()||await dk(h,{username:(r=l.user.email)==null?void 0:r.split("@"),email:l.user.email,role:null,avatar:"default.png"}),i("/home")}catch(a){console.log(a)}};return I.jsx(I.Fragment,{children:I.jsx("div",{className:"w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 relative",children:I.jsxs("div",{className:"w-full sm:max-w-md p-5 mx-auto",children:[I.jsx("h2",{className:"mb-12 text-center text-5xl font-extrabold",children:"El Caballo S.A."}),I.jsxs("form",{children:[I.jsxs("div",{className:"mb-4",children:[I.jsx("label",{className:"block mb-1",htmlFor:"email",children:"Usuario"}),I.jsx("input",{id:"email",type:"text",name:"email",className:"py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"})]}),I.jsxs("div",{className:"mb-4",children:[I.jsx("label",{className:"block mb-1",htmlFor:"password",children:"Contraseña"}),I.jsx("input",{id:"password",type:"password",name:"password",className:"py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"})]}),I.jsxs("div",{className:"mt-6 flex items-center justify-between",children:[I.jsxs("div",{className:"flex items-center",children:[I.jsx("input",{id:"remember_me",type:"checkbox",className:"border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"}),I.jsxs("label",{htmlFor:"remember_me",className:"ml-2 block text-sm leading-5 text-gray-900",children:[" ","Remember me"," "]})]}),I.jsxs("a",{href:"#",className:"text-sm",children:[" ","Olvidaste tu contraseña?"," "]})]}),I.jsx("div",{className:"mt-6",children:I.jsx("button",{className:"cursor-pointer w-full inline-flex items-center justify-center px-4 py-2 bg-blue-950 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-800 active:bg-green-500 focus:outline-none focus:border-green-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition",children:"Sign In"})})]}),I.jsxs("div",{className:"flex justify-center flex-col items-center mt-4",children:[I.jsxs("svg",{className:"cursor-pointer",onClick:e,width:"40",height:"auto",viewBox:"0 0 256 262",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",children:[I.jsx("path",{d:"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",fill:"#4285F4"}),I.jsx("path",{d:"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",fill:"#34A853"}),I.jsx("path",{d:"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",fill:"#FBBC05"}),I.jsx("path",{d:"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",fill:"#EB4335"})]}),I.jsx("small",{children:"Iniciar con Google"})]})]})})})};function _k(){return I.jsx(I.Fragment,{children:I.jsx("div",{className:"bg-amber-100",children:I.jsx(vk,{})})})}function LE(){return I.jsx(I.Fragment,{children:I.jsx("div",{className:"transition-transform duration-300 ease-in-out"})})}const by=ae.createContext(void 0),bk=({children:i})=>{const e=Bg(),[t,r]=ae.useState(null);ae.useEffect(()=>{const m=k1(e,p=>{r(p)});return()=>m()},[]);const[a,l]=ae.useState(!1),h=()=>{l(m=>!m)};return I.jsx(by.Provider,{value:{user:t,openMenu:a,toogleMenu:h},children:i})},Ek=()=>I.jsx(I.Fragment,{children:I.jsx("div",{className:"flex p-5 w-full justify-center bg-gray-200 rounded-2xl backgroundForm",children:I.jsxs("form",{className:"w-full max-w-lg text-white",children:[I.jsxs("div",{className:"flex flex-wrap -mx-3 mb-6",children:[I.jsxs("div",{className:"w-full md:w-1/2 px-3 mb-6 md:mb-0",children:[I.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"grid-first-name",children:"Fecha"}),I.jsx("input",{className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"grid-first-name",type:"date"})]}),I.jsxs("div",{className:"w-full md:w-1/2 px-3",children:[I.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"code",children:"Codigo de operario"}),I.jsx("input",{className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"code",type:"number",placeholder:"000"})]})]}),I.jsxs("div",{className:"flex flex-wrap -mx-3 mb-6",children:[I.jsxs("div",{className:"w-full md:w-1/2 px-3",children:[I.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"code",children:"Codigo de operario"}),I.jsx("input",{className:"appearance-none block w-full bg-gray-200 text-blue-950 border  border-blue-950 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"code",type:"number",placeholder:"000"})]}),I.jsxs("div",{className:"w-full md:w-1/2 px-3",children:[I.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"code",children:"Horas asignadas"}),I.jsx("input",{className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"code",type:"text",placeholder:"0"})]}),I.jsxs("div",{className:"w-full md:w-1/2 px-3",children:[I.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"code",children:"Paradas mayores"}),I.jsx("input",{className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"code",type:"text",placeholder:"0"})]}),I.jsxs("div",{className:"w-full md:w-1/2 px-3",children:[I.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"code",children:"Total horas"}),I.jsx("input",{className:"appearance-none block w-full text-blue-950 bg-gray-200 text-red-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"code",type:"text",placeholder:"0",readOnly:!0,value:0})]})]}),I.jsxs("div",{className:"flex flex-wrap -mx-3 mb-2",children:[I.jsxs("div",{className:"w-full md:w-1/3 px-3 mb-6 md:mb-0",children:[I.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"grid-city",children:"Horometro inicial"}),I.jsx("input",{className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"HourStart",type:"number",placeholder:"00000000"})]}),I.jsxs("div",{className:"w-full md:w-1/3 px-3 mb-6 md:mb-0",children:[I.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"machine",children:"Maquina"}),I.jsx("div",{className:"relative",children:I.jsxs("select",{className:"block appearance-none w-full bg-gray-200 border border-gray-200 text-blue-950 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"machine",children:[I.jsx("option",{children:"Punt 1"}),I.jsx("option",{children:"Punt 2"}),I.jsx("option",{children:"Punt 2"})]})})]}),I.jsxs("div",{className:"w-full md:w-1/3 px-3 mb-6 md:mb-0",children:[I.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"grid-zip",children:"Horometro final"}),I.jsx("input",{className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"hourEnd",type:"number",placeholder:"00000000"})]}),I.jsxs("div",{className:"w-full  px-3",children:[I.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"code",children:"Observaciones"}),I.jsx("textarea",{className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"code",placeholder:"..."})]})]}),I.jsx("div",{className:"flex justify-center mt-4",children:I.jsx("button",{type:"submit",className:"cursor-pointer w-full py-2 rounded bg-blue-600 hover:bg-blue-800 transition-colors duration-300 text-white font-semibold",children:"Enviar"})})]})})}),Tk=()=>I.jsx("div",{children:I.jsx(Ek,{})}),UE=[{id:"F1315",name:"Excavator F1315"},{id:"F1400",name:"Bulldozer F1400"},{id:"F1200",name:"Loader F1200"}],Ak=()=>{const[i,e]=ae.useState(""),[t,r]=ae.useState([]),a=h=>{r(m=>m.includes(h)?m.filter(p=>p!==h):[...m,h])};function l(h){h.preventDefault(),console.log("Assignment:",{operator:i,machines:t}),e(""),r([])}return I.jsxs("div",{className:"p-6 rounded-lg shadow-md w-full max-w-lg mx-auto backgroundForm",children:[I.jsx("h2",{className:"text-xl font-bold mb-4 text-white",children:"Asignar Máquinas"}),I.jsxs("form",{onSubmit:l,className:"space-y-4",children:[I.jsxs("div",{children:[I.jsx("label",{className:"block mb-1 text-white",children:"Operario"}),I.jsx("input",{type:"text",value:i,onChange:h=>e(h.target.value),className:"w-full border px-3 bg-gray-200 py-2 rounded-md",required:!0})]}),I.jsxs("div",{children:[I.jsx("label",{className:"block mb-1 text-white",children:"Seleccionar maquinas"}),I.jsx("div",{className:"space-y-2 text-white pl-2",children:UE&&UE.map(h=>I.jsxs("div",{children:[I.jsx("input",{type:"checkbox",id:h.id,onChange:()=>a(h.id)}),I.jsx("label",{className:"pl-2",htmlFor:h.id,children:h.name})]},h.id))})]}),I.jsx("button",{type:"submit",className:"bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700",children:"Asignar"})]})]})};function jE(){return I.jsx(I.Fragment,{children:I.jsx(Ak,{})})}const Sk=[{title:"F1315",slug:"f1315"},{title:"Eficiencia",slug:"eficence"}];function wk({item:i}){return I.jsx(wg,{to:`/picado/${i.slug}`,children:I.jsx("button",{className:"button",children:i.title})})}const Ik=()=>I.jsxs("div",{className:"flex flex-col items-center p-4 space-y-6 md:space-y-8",children:[I.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:Sk.map((i,e)=>I.jsx(wk,{item:i},e))}),I.jsx("div",{className:"w-full max-w-4xl",children:I.jsx(Sg,{})})]}),zE=()=>{const i=[{date:"2025-07-24",machine:"F1315",horometroStart:120,horometroEnd:180,reference:"REF-001",majorStops:"No fuel for 30 min",observations:"Normal operation",assignedHours:8,totalHours:6},{date:"2025-07-24",machine:"F1400",horometroStart:100,horometroEnd:160,reference:"REF-002",majorStops:"Broken belt (1h)",observations:"Repair completed",assignedHours:8,totalHours:7},{date:"2025-07-23",machine:"F1200",horometroStart:50,horometroEnd:110,reference:"REF-003",majorStops:"Operator late",observations:"Started 1h late",assignedHours:8,totalHours:5}];return I.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg overflow-x-auto",children:[I.jsx("h2",{className:"text-xl font-bold mb-4",children:"Eficencias"}),I.jsxs("table",{className:"min-w-full border border-gray-300 text-sm text-left",children:[I.jsx("thead",{className:"backgroundForm text-white",children:I.jsxs("tr",{children:[I.jsx("th",{className:"px-3 py-2 border",children:"Fecha"}),I.jsx("th",{className:"px-3 py-2 border",children:"Maquina"}),I.jsx("th",{className:"px-3 py-2 border",children:"Horometro inicial"}),I.jsx("th",{className:"px-3 py-2 border",children:"Horomerto final"}),I.jsx("th",{className:"px-3 py-2 border",children:"Referencia"}),I.jsx("th",{className:"px-3 py-2 border",children:"Paradas mayores"}),I.jsx("th",{className:"px-3 py-2 border",children:"Observaciones"}),I.jsx("th",{className:"px-3 py-2 border",children:"Horas asignadas"}),I.jsx("th",{className:"px-3 py-2 border",children:"Total horas"}),I.jsx("th",{className:"px-3 py-2 border",children:"Eficiencia en horas"})]})}),I.jsx("tbody",{children:i.map((e,t)=>I.jsxs("tr",{className:"hover:bg-gray-100",children:[I.jsx("td",{className:"px-3 py-2 border",children:e.date}),I.jsx("td",{className:"px-3 py-2 border",children:e.machine}),I.jsx("td",{className:"px-3 py-2 border",children:e.horometroStart}),I.jsx("td",{className:"px-3 py-2 border",children:e.horometroEnd}),I.jsx("td",{className:"px-3 py-2 border",children:e.reference}),I.jsx("td",{className:"px-3 py-2 border",children:e.majorStops}),I.jsx("td",{className:"px-3 py-2 border",children:e.observations}),I.jsx("td",{className:"px-3 py-2 border",children:e.assignedHours}),I.jsx("td",{className:"px-3 py-2 border",children:e.totalHours}),I.jsx("td",{className:"px-3 py-2 border",children:e.totalHours})]},t))})]})]})},Rk=[{title:"Operarios",subtitle:"Gestión de tareas y seguimiento de operarios",url:"/picado"},{title:"Supervisores",subtitle:"Supervisión y control de actividades",url:"/supervisor"},{title:"Datos",subtitle:"Visualización y exportación de registros",url:"/data"},{title:"Configuracion",subtitle:"Ajustes del sistema y parámetros de operación",url:"/configurations"}],BE=Bg(Sf),Ck=Rk,xk=({openMenu:i})=>{const[e,t]=ae.useState({user:null,photoURL:null}),r=yf();ae.useEffect(()=>{const l=k1(BE,h=>{t(h?{user:h.displayName||h.email||h.uid,photoURL:h.photoURL||null}:{user:null,photoURL:null})});return()=>{l()}},[]);const a=()=>{kx(BE).then(()=>{console.log("Sesion cerrada correctamente"),r("/")}).catch(l=>{console.log(l)})};return I.jsx(I.Fragment,{children:I.jsxs("div",{id:"menu",className:`bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed top-0 h-screen overflow-y-scroll transition-transform duration-300 ease-in-out  ${i?"translate-x-0":"translate-x-1"} right-0`,children:[I.jsx("div",{id:"logo",className:"my-4 px-6",children:I.jsxs("h1",{className:"text-lg md:text-2xl font-bold text-white",children:["El Caballo",I.jsx("span",{className:"text-blue-500",children:"S.A"}),"."]})}),I.jsxs("div",{id:"profile",className:"px-6 py-10",children:[I.jsx("p",{className:"text-slate-500",children:"Bienvenido,"}),I.jsxs("a",{href:"#",className:"inline-flex space-x-2 items-center",children:[I.jsx("span",{children:e.photoURL?I.jsx("img",{className:"rounded-full w-full h-auto",src:e.photoURL,alt:""}):I.jsx("div",{children:"Sin foto"})}),I.jsx("span",{className:"text-sm md:text-base font-bold",children:e.user?I.jsx("p",{children:e.user}):I.jsx("p",{children:"No hay usuario autenticado"})})]})]}),I.jsx("div",{className:"flex justify-center items-center pb-5",children:I.jsx("button",{onClick:a,className:"bg-red-600 w-full rounded-2xl mx-5 hover:bg-white/8 cursor-pointer",children:"Salir"})}),I.jsx("div",{id:"nav",className:"w-full px-6",children:Ck.map((l,h)=>I.jsx(wg,{to:l.url,className:"w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150",children:I.jsxs("div",{className:"flex flex-col",children:[I.jsx("span",{className:"text-lg font-bold leading-5 text-white",children:l.title}),I.jsx("span",{className:"text-sm text-white/50 hidden md:block",children:l.subtitle})]})},h))})]})})};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Nk={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Ok(i,e,t){return(e=Pk(e))in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function FE(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable})),t.push.apply(t,r)}return t}function te(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?FE(Object(t),!0).forEach(function(r){Ok(i,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):FE(Object(t)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(t,r))})}return i}function Dk(i,e){if(typeof i!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var r=t.call(i,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function Pk(i){var e=Dk(i,"string");return typeof e=="symbol"?e:e+""}const HE=()=>{};let Ey={},AS={},SS=null,wS={mark:HE,measure:HE};try{typeof window<"u"&&(Ey=window),typeof document<"u"&&(AS=document),typeof MutationObserver<"u"&&(SS=MutationObserver),typeof performance<"u"&&(wS=performance)}catch{}const{userAgent:qE=""}=Ey.navigator||{},us=Ey,st=AS,GE=SS,Th=wS;us.document;const hr=!!st.documentElement&&!!st.head&&typeof st.addEventListener=="function"&&typeof st.createElement=="function",IS=~qE.indexOf("MSIE")||~qE.indexOf("Trident/");var kk=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Mk=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,RS={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Vk={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},CS=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],rn="classic",Lf="duotone",Lk="sharp",Uk="sharp-duotone",xS=[rn,Lf,Lk,Uk],jk={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},zk={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Bk=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Fk={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Hk=["fak","fa-kit","fakd","fa-kit-duotone"],$E={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},qk=["kit"],Gk={kit:{"fa-kit":"fak"}},$k=["fak","fakd"],Kk={kit:{fak:"fa-kit"}},KE={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ah={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Yk=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Qk=["fak","fa-kit","fakd","fa-kit-duotone"],Xk={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Wk={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Jk={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Xp={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Zk=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Wp=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Yk,...Zk],eM=["solid","regular","light","thin","duotone","brands"],NS=[1,2,3,4,5,6,7,8,9,10],tM=NS.concat([11,12,13,14,15,16,17,18,19,20]),nM=[...Object.keys(Jk),...eM,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ah.GROUP,Ah.SWAP_OPACITY,Ah.PRIMARY,Ah.SECONDARY].concat(NS.map(i=>"".concat(i,"x"))).concat(tM.map(i=>"w-".concat(i))),iM={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const or="___FONT_AWESOME___",Jp=16,OS="fa",DS="svg-inline--fa",aa="data-fa-i2svg",Zp="data-fa-pseudo-element",rM="data-fa-pseudo-element-pending",Ty="data-prefix",Ay="data-icon",YE="fontawesome-i2svg",sM="async",aM=["HTML","HEAD","STYLE","SCRIPT"],PS=(()=>{try{return!0}catch{return!1}})();function Bu(i){return new Proxy(i,{get(e,t){return t in e?e[t]:e[rn]}})}const kS=te({},RS);kS[rn]=te(te(te(te({},{"fa-duotone":"duotone"}),RS[rn]),$E.kit),$E["kit-duotone"]);const oM=Bu(kS),eg=te({},Fk);eg[rn]=te(te(te(te({},{duotone:"fad"}),eg[rn]),KE.kit),KE["kit-duotone"]);const QE=Bu(eg),tg=te({},Xp);tg[rn]=te(te({},tg[rn]),Kk.kit);const Sy=Bu(tg),ng=te({},Wk);ng[rn]=te(te({},ng[rn]),Gk.kit);Bu(ng);const lM=kk,MS="fa-layers-text",uM=Mk,cM=te({},jk);Bu(cM);const hM=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],up=Vk,fM=[...qk,...nM],fu=us.FontAwesomeConfig||{};function dM(i){var e=st.querySelector("script["+i+"]");if(e)return e.getAttribute(i)}function mM(i){return i===""?!0:i==="false"?!1:i==="true"?!0:i}st&&typeof st.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,r]=e;const a=mM(dM(t));a!=null&&(fu[r]=a)});const VS={styleDefault:"solid",familyDefault:rn,cssPrefix:OS,replacementClass:DS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};fu.familyPrefix&&(fu.cssPrefix=fu.familyPrefix);const Do=te(te({},VS),fu);Do.autoReplaceSvg||(Do.observeMutations=!1);const de={};Object.keys(VS).forEach(i=>{Object.defineProperty(de,i,{enumerable:!0,set:function(e){Do[i]=e,du.forEach(t=>t(de))},get:function(){return Do[i]}})});Object.defineProperty(de,"familyPrefix",{enumerable:!0,set:function(i){Do.cssPrefix=i,du.forEach(e=>e(de))},get:function(){return Do.cssPrefix}});us.FontAwesomeConfig=de;const du=[];function pM(i){return du.push(i),()=>{du.splice(du.indexOf(i),1)}}const Fr=Jp,mi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function gM(i){if(!i||!hr)return;const e=st.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=i;const t=st.head.childNodes;let r=null;for(let a=t.length-1;a>-1;a--){const l=t[a],h=(l.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(h)>-1&&(r=l)}return st.head.insertBefore(e,r),i}const yM="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xu(){let i=12,e="";for(;i-- >0;)e+=yM[Math.random()*62|0];return e}function Ho(i){const e=[];for(let t=(i||[]).length>>>0;t--;)e[t]=i[t];return e}function wy(i){return i.classList?Ho(i.classList):(i.getAttribute("class")||"").split(" ").filter(e=>e)}function LS(i){return"".concat(i).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function vM(i){return Object.keys(i||{}).reduce((e,t)=>e+"".concat(t,'="').concat(LS(i[t]),'" '),"").trim()}function Uf(i){return Object.keys(i||{}).reduce((e,t)=>e+"".concat(t,": ").concat(i[t].trim(),";"),"")}function Iy(i){return i.size!==mi.size||i.x!==mi.x||i.y!==mi.y||i.rotate!==mi.rotate||i.flipX||i.flipY}function _M(i){let{transform:e,containerWidth:t,iconWidth:r}=i;const a={transform:"translate(".concat(t/2," 256)")},l="translate(".concat(e.x*32,", ").concat(e.y*32,") "),h="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),m="rotate(".concat(e.rotate," 0 0)"),p={transform:"".concat(l," ").concat(h," ").concat(m)},g={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:p,path:g}}function bM(i){let{transform:e,width:t=Jp,height:r=Jp,startCentered:a=!1}=i,l="";return a&&IS?l+="translate(".concat(e.x/Fr-t/2,"em, ").concat(e.y/Fr-r/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Fr,"em), calc(-50% + ").concat(e.y/Fr,"em)) "):l+="translate(".concat(e.x/Fr,"em, ").concat(e.y/Fr,"em) "),l+="scale(".concat(e.size/Fr*(e.flipX?-1:1),", ").concat(e.size/Fr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var EM=`:root, :host {
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
}`;function US(){const i=OS,e=DS,t=de.cssPrefix,r=de.replacementClass;let a=EM;if(t!==i||r!==e){const l=new RegExp("\\.".concat(i,"\\-"),"g"),h=new RegExp("\\--".concat(i,"\\-"),"g"),m=new RegExp("\\.".concat(e),"g");a=a.replace(l,".".concat(t,"-")).replace(h,"--".concat(t,"-")).replace(m,".".concat(r))}return a}let XE=!1;function cp(){de.autoAddCss&&!XE&&(gM(US()),XE=!0)}var TM={mixout(){return{dom:{css:US,insertCss:cp}}},hooks(){return{beforeDOMElementCreation(){cp()},beforeI2svg(){cp()}}}};const lr=us||{};lr[or]||(lr[or]={});lr[or].styles||(lr[or].styles={});lr[or].hooks||(lr[or].hooks={});lr[or].shims||(lr[or].shims=[]);var pi=lr[or];const jS=[],zS=function(){st.removeEventListener("DOMContentLoaded",zS),af=1,jS.map(i=>i())};let af=!1;hr&&(af=(st.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(st.readyState),af||st.addEventListener("DOMContentLoaded",zS));function AM(i){hr&&(af?setTimeout(i,0):jS.push(i))}function Fu(i){const{tag:e,attributes:t={},children:r=[]}=i;return typeof i=="string"?LS(i):"<".concat(e," ").concat(vM(t),">").concat(r.map(Fu).join(""),"</").concat(e,">")}function WE(i,e,t){if(i&&i[e]&&i[e][t])return{prefix:e,iconName:t,icon:i[e][t]}}var hp=function(e,t,r,a){var l=Object.keys(e),h=l.length,m=t,p,g,b;for(r===void 0?(p=1,b=e[l[0]]):(p=0,b=r);p<h;p++)g=l[p],b=m(b,e[g],g,e);return b};function SM(i){const e=[];let t=0;const r=i.length;for(;t<r;){const a=i.charCodeAt(t++);if(a>=55296&&a<=56319&&t<r){const l=i.charCodeAt(t++);(l&64512)==56320?e.push(((a&1023)<<10)+(l&1023)+65536):(e.push(a),t--)}else e.push(a)}return e}function ig(i){const e=SM(i);return e.length===1?e[0].toString(16):null}function wM(i,e){const t=i.length;let r=i.charCodeAt(e),a;return r>=55296&&r<=56319&&t>e+1&&(a=i.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function JE(i){return Object.keys(i).reduce((e,t)=>{const r=i[t];return!!r.icon?e[r.iconName]=r.icon:e[t]=r,e},{})}function rg(i,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=t,a=JE(e);typeof pi.hooks.addPack=="function"&&!r?pi.hooks.addPack(i,JE(e)):pi.styles[i]=te(te({},pi.styles[i]||{}),a),i==="fas"&&rg("fa",e)}const{styles:Nu,shims:IM}=pi,BS=Object.keys(Sy),RM=BS.reduce((i,e)=>(i[e]=Object.keys(Sy[e]),i),{});let Ry=null,FS={},HS={},qS={},GS={},$S={};function CM(i){return~fM.indexOf(i)}function xM(i,e){const t=e.split("-"),r=t[0],a=t.slice(1).join("-");return r===i&&a!==""&&!CM(a)?a:null}const KS=()=>{const i=r=>hp(Nu,(a,l,h)=>(a[h]=hp(l,r,{}),a),{});FS=i((r,a,l)=>(a[3]&&(r[a[3]]=l),a[2]&&a[2].filter(m=>typeof m=="number").forEach(m=>{r[m.toString(16)]=l}),r)),HS=i((r,a,l)=>(r[l]=l,a[2]&&a[2].filter(m=>typeof m=="string").forEach(m=>{r[m]=l}),r)),$S=i((r,a,l)=>{const h=a[2];return r[l]=l,h.forEach(m=>{r[m]=l}),r});const e="far"in Nu||de.autoFetchSvg,t=hp(IM,(r,a)=>{const l=a[0];let h=a[1];const m=a[2];return h==="far"&&!e&&(h="fas"),typeof l=="string"&&(r.names[l]={prefix:h,iconName:m}),typeof l=="number"&&(r.unicodes[l.toString(16)]={prefix:h,iconName:m}),r},{names:{},unicodes:{}});qS=t.names,GS=t.unicodes,Ry=jf(de.styleDefault,{family:de.familyDefault})};pM(i=>{Ry=jf(i.styleDefault,{family:de.familyDefault})});KS();function Cy(i,e){return(FS[i]||{})[e]}function NM(i,e){return(HS[i]||{})[e]}function ta(i,e){return($S[i]||{})[e]}function YS(i){return qS[i]||{prefix:null,iconName:null}}function OM(i){const e=GS[i],t=Cy("fas",i);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function cs(){return Ry}const QS=()=>({prefix:null,iconName:null,rest:[]});function DM(i){let e=rn;const t=BS.reduce((r,a)=>(r[a]="".concat(de.cssPrefix,"-").concat(a),r),{});return xS.forEach(r=>{(i.includes(t[r])||i.some(a=>RM[r].includes(a)))&&(e=r)}),e}function jf(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=rn}=e,r=oM[t][i];if(t===Lf&&!i)return"fad";const a=QE[t][i]||QE[t][r],l=i in pi.styles?i:null;return a||l||null}function PM(i){let e=[],t=null;return i.forEach(r=>{const a=xM(de.cssPrefix,r);a?t=a:r&&e.push(r)}),{iconName:t,rest:e}}function ZE(i){return i.sort().filter((e,t,r)=>r.indexOf(e)===t)}function zf(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e;let r=null;const a=Wp.concat(Qk),l=ZE(i.filter(T=>a.includes(T))),h=ZE(i.filter(T=>!Wp.includes(T))),m=l.filter(T=>(r=T,!CS.includes(T))),[p=null]=m,g=DM(l),b=te(te({},PM(h)),{},{prefix:jf(p,{family:g})});return te(te(te({},b),LM({values:i,family:g,styles:Nu,config:de,canonical:b,givenPrefix:r})),kM(t,r,b))}function kM(i,e,t){let{prefix:r,iconName:a}=t;if(i||!r||!a)return{prefix:r,iconName:a};const l=e==="fa"?YS(a):{},h=ta(r,a);return a=l.iconName||h||a,r=l.prefix||r,r==="far"&&!Nu.far&&Nu.fas&&!de.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const MM=xS.filter(i=>i!==rn||i!==Lf),VM=Object.keys(Xp).filter(i=>i!==rn).map(i=>Object.keys(Xp[i])).flat();function LM(i){const{values:e,family:t,canonical:r,givenPrefix:a="",styles:l={},config:h={}}=i,m=t===Lf,p=e.includes("fa-duotone")||e.includes("fad"),g=h.familyDefault==="duotone",b=r.prefix==="fad"||r.prefix==="fa-duotone";if(!m&&(p||g||b)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&MM.includes(t)&&(Object.keys(l).find(S=>VM.includes(S))||h.autoFetchSvg)){const S=Bk.get(t).defaultShortPrefixId;r.prefix=S,r.iconName=ta(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=cs()||"fas"),r}class UM{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];const a=t.reduce(this._pullDefinitions,{});Object.keys(a).forEach(l=>{this.definitions[l]=te(te({},this.definitions[l]||{}),a[l]),rg(l,a[l]);const h=Sy[rn][l];h&&rg(h,a[l]),KS()})}reset(){this.definitions={}}_pullDefinitions(e,t){const r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(a=>{const{prefix:l,iconName:h,icon:m}=r[a],p=m[2];e[l]||(e[l]={}),p.length>0&&p.forEach(g=>{typeof g=="string"&&(e[l][g]=m)}),e[l][h]=m}),e}}let eT=[],yo={};const Eo={},jM=Object.keys(Eo);function zM(i,e){let{mixoutsTo:t}=e;return eT=i,yo={},Object.keys(Eo).forEach(r=>{jM.indexOf(r)===-1&&delete Eo[r]}),eT.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(l=>{typeof a[l]=="function"&&(t[l]=a[l]),typeof a[l]=="object"&&Object.keys(a[l]).forEach(h=>{t[l]||(t[l]={}),t[l][h]=a[l][h]})}),r.hooks){const l=r.hooks();Object.keys(l).forEach(h=>{yo[h]||(yo[h]=[]),yo[h].push(l[h])})}r.provides&&r.provides(Eo)}),t}function sg(i,e){for(var t=arguments.length,r=new Array(t>2?t-2:0),a=2;a<t;a++)r[a-2]=arguments[a];return(yo[i]||[]).forEach(h=>{e=h.apply(null,[e,...r])}),e}function oa(i){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];(yo[i]||[]).forEach(l=>{l.apply(null,t)})}function hs(){const i=arguments[0],e=Array.prototype.slice.call(arguments,1);return Eo[i]?Eo[i].apply(null,e):void 0}function ag(i){i.prefix==="fa"&&(i.prefix="fas");let{iconName:e}=i;const t=i.prefix||cs();if(e)return e=ta(t,e)||e,WE(XS.definitions,t,e)||WE(pi.styles,t,e)}const XS=new UM,BM=()=>{de.autoReplaceSvg=!1,de.observeMutations=!1,oa("noAuto")},FM={i2svg:function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return hr?(oa("beforeI2svg",i),hs("pseudoElements2svg",i),hs("i2svg",i)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=i;de.autoReplaceSvg===!1&&(de.autoReplaceSvg=!0),de.observeMutations=!0,AM(()=>{qM({autoReplaceSvgRoot:e}),oa("watch",i)})}},HM={icon:i=>{if(i===null)return null;if(typeof i=="object"&&i.prefix&&i.iconName)return{prefix:i.prefix,iconName:ta(i.prefix,i.iconName)||i.iconName};if(Array.isArray(i)&&i.length===2){const e=i[1].indexOf("fa-")===0?i[1].slice(3):i[1],t=jf(i[0]);return{prefix:t,iconName:ta(t,e)||e}}if(typeof i=="string"&&(i.indexOf("".concat(de.cssPrefix,"-"))>-1||i.match(lM))){const e=zf(i.split(" "),{skipLookups:!0});return{prefix:e.prefix||cs(),iconName:ta(e.prefix,e.iconName)||e.iconName}}if(typeof i=="string"){const e=cs();return{prefix:e,iconName:ta(e,i)||i}}}},An={noAuto:BM,config:de,dom:FM,parse:HM,library:XS,findIconDefinition:ag,toHtml:Fu},qM=function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=st}=i;(Object.keys(pi.styles).length>0||de.autoFetchSvg)&&hr&&de.autoReplaceSvg&&An.dom.i2svg({node:e})};function Bf(i,e){return Object.defineProperty(i,"abstract",{get:e}),Object.defineProperty(i,"html",{get:function(){return i.abstract.map(t=>Fu(t))}}),Object.defineProperty(i,"node",{get:function(){if(!hr)return;const t=st.createElement("div");return t.innerHTML=i.html,t.children}}),i}function GM(i){let{children:e,main:t,mask:r,attributes:a,styles:l,transform:h}=i;if(Iy(h)&&t.found&&!r.found){const{width:m,height:p}=t,g={x:m/p/2,y:.5};a.style=Uf(te(te({},l),{},{"transform-origin":"".concat(g.x+h.x/16,"em ").concat(g.y+h.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function $M(i){let{prefix:e,iconName:t,children:r,attributes:a,symbol:l}=i;const h=l===!0?"".concat(e,"-").concat(de.cssPrefix,"-").concat(t):l;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:te(te({},a),{},{id:h}),children:r}]}]}function xy(i){const{icons:{main:e,mask:t},prefix:r,iconName:a,transform:l,symbol:h,title:m,maskId:p,titleId:g,extra:b,watchable:T=!1}=i,{width:S,height:j}=t.found?t:e,G=$k.includes(r),W=[de.replacementClass,a?"".concat(de.cssPrefix,"-").concat(a):""].filter(ce=>b.classes.indexOf(ce)===-1).filter(ce=>ce!==""||!!ce).concat(b.classes).join(" ");let F={children:[],attributes:te(te({},b.attributes),{},{"data-prefix":r,"data-icon":a,class:W,role:b.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(j)})};const ee=G&&!~b.classes.indexOf("fa-fw")?{width:"".concat(S/j*16*.0625,"em")}:{};T&&(F.attributes[aa]=""),m&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(g||xu())},children:[m]}),delete F.attributes.title);const ie=te(te({},F),{},{prefix:r,iconName:a,main:e,mask:t,maskId:p,transform:l,symbol:h,styles:te(te({},ee),b.styles)}),{children:ne,attributes:fe}=t.found&&e.found?hs("generateAbstractMask",ie)||{children:[],attributes:{}}:hs("generateAbstractIcon",ie)||{children:[],attributes:{}};return ie.children=ne,ie.attributes=fe,h?$M(ie):GM(ie)}function tT(i){const{content:e,width:t,height:r,transform:a,title:l,extra:h,watchable:m=!1}=i,p=te(te(te({},h.attributes),l?{title:l}:{}),{},{class:h.classes.join(" ")});m&&(p[aa]="");const g=te({},h.styles);Iy(a)&&(g.transform=bM({transform:a,startCentered:!0,width:t,height:r}),g["-webkit-transform"]=g.transform);const b=Uf(g);b.length>0&&(p.style=b);const T=[];return T.push({tag:"span",attributes:p,children:[e]}),l&&T.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),T}function KM(i){const{content:e,title:t,extra:r}=i,a=te(te(te({},r.attributes),t?{title:t}:{}),{},{class:r.classes.join(" ")}),l=Uf(r.styles);l.length>0&&(a.style=l);const h=[];return h.push({tag:"span",attributes:a,children:[e]}),t&&h.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),h}const{styles:fp}=pi;function og(i){const e=i[0],t=i[1],[r]=i.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(de.cssPrefix,"-").concat(up.GROUP)},children:[{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(up.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(up.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:t,icon:a}}const YM={found:!1,width:512,height:512};function QM(i,e){!PS&&!de.showMissingIcons&&i&&console.error('Icon with name "'.concat(i,'" and prefix "').concat(e,'" is missing.'))}function lg(i,e){let t=e;return e==="fa"&&de.styleDefault!==null&&(e=cs()),new Promise((r,a)=>{if(t==="fa"){const l=YS(i)||{};i=l.iconName||i,e=l.prefix||e}if(i&&e&&fp[e]&&fp[e][i]){const l=fp[e][i];return r(og(l))}QM(i,e),r(te(te({},YM),{},{icon:de.showMissingIcons&&i?hs("missingIconAbstract")||{}:{}}))})}const nT=()=>{},ug=de.measurePerformance&&Th&&Th.mark&&Th.measure?Th:{mark:nT,measure:nT},su='FA "6.7.2"',XM=i=>(ug.mark("".concat(su," ").concat(i," begins")),()=>WS(i)),WS=i=>{ug.mark("".concat(su," ").concat(i," ends")),ug.measure("".concat(su," ").concat(i),"".concat(su," ").concat(i," begins"),"".concat(su," ").concat(i," ends"))};var Ny={begin:XM,end:WS};const Mh=()=>{};function iT(i){return typeof(i.getAttribute?i.getAttribute(aa):null)=="string"}function WM(i){const e=i.getAttribute?i.getAttribute(Ty):null,t=i.getAttribute?i.getAttribute(Ay):null;return e&&t}function JM(i){return i&&i.classList&&i.classList.contains&&i.classList.contains(de.replacementClass)}function ZM(){return de.autoReplaceSvg===!0?Vh.replace:Vh[de.autoReplaceSvg]||Vh.replace}function e4(i){return st.createElementNS("http://www.w3.org/2000/svg",i)}function t4(i){return st.createElement(i)}function JS(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=i.tag==="svg"?e4:t4}=e;if(typeof i=="string")return st.createTextNode(i);const r=t(i.tag);return Object.keys(i.attributes||[]).forEach(function(l){r.setAttribute(l,i.attributes[l])}),(i.children||[]).forEach(function(l){r.appendChild(JS(l,{ceFn:t}))}),r}function n4(i){let e=" ".concat(i.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Vh={replace:function(i){const e=i[0];if(e.parentNode)if(i[1].forEach(t=>{e.parentNode.insertBefore(JS(t),e)}),e.getAttribute(aa)===null&&de.keepOriginalSource){let t=st.createComment(n4(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(i){const e=i[0],t=i[1];if(~wy(e).indexOf(de.replacementClass))return Vh.replace(i);const r=new RegExp("".concat(de.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const l=t[0].attributes.class.split(" ").reduce((h,m)=>(m===de.replacementClass||m.match(r)?h.toSvg.push(m):h.toNode.push(m),h),{toNode:[],toSvg:[]});t[0].attributes.class=l.toSvg.join(" "),l.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",l.toNode.join(" "))}const a=t.map(l=>Fu(l)).join(`
`);e.setAttribute(aa,""),e.innerHTML=a}};function rT(i){i()}function ZS(i,e){const t=typeof e=="function"?e:Mh;if(i.length===0)t();else{let r=rT;de.mutateApproach===sM&&(r=us.requestAnimationFrame||rT),r(()=>{const a=ZM(),l=Ny.begin("mutate");i.map(a),l(),t()})}}let Oy=!1;function ew(){Oy=!0}function cg(){Oy=!1}let of=null;function sT(i){if(!GE||!de.observeMutations)return;const{treeCallback:e=Mh,nodeCallback:t=Mh,pseudoElementsCallback:r=Mh,observeMutationsRoot:a=st}=i;of=new GE(l=>{if(Oy)return;const h=cs();Ho(l).forEach(m=>{if(m.type==="childList"&&m.addedNodes.length>0&&!iT(m.addedNodes[0])&&(de.searchPseudoElements&&r(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&de.searchPseudoElements&&r(m.target.parentNode),m.type==="attributes"&&iT(m.target)&&~hM.indexOf(m.attributeName))if(m.attributeName==="class"&&WM(m.target)){const{prefix:p,iconName:g}=zf(wy(m.target));m.target.setAttribute(Ty,p||h),g&&m.target.setAttribute(Ay,g)}else JM(m.target)&&t(m.target)})}),hr&&of.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function i4(){of&&of.disconnect()}function r4(i){const e=i.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((r,a)=>{const l=a.split(":"),h=l[0],m=l.slice(1);return h&&m.length>0&&(r[h]=m.join(":").trim()),r},{})),t}function s4(i){const e=i.getAttribute("data-prefix"),t=i.getAttribute("data-icon"),r=i.innerText!==void 0?i.innerText.trim():"";let a=zf(wy(i));return a.prefix||(a.prefix=cs()),e&&t&&(a.prefix=e,a.iconName=t),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=NM(a.prefix,i.innerText)||Cy(a.prefix,ig(i.innerText))),!a.iconName&&de.autoFetchSvg&&i.firstChild&&i.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=i.firstChild.data)),a}function a4(i){const e=Ho(i.attributes).reduce((a,l)=>(a.name!=="class"&&a.name!=="style"&&(a[l.name]=l.value),a),{}),t=i.getAttribute("title"),r=i.getAttribute("data-fa-title-id");return de.autoA11y&&(t?e["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(r||xu()):(e["aria-hidden"]="true",e.focusable="false")),e}function o4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:mi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function aT(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:r,rest:a}=s4(i),l=a4(i),h=sg("parseNodeAttributes",{},i);let m=e.styleParser?r4(i):[];return te({iconName:t,title:i.getAttribute("title"),titleId:i.getAttribute("data-fa-title-id"),prefix:r,transform:mi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:m,attributes:l}},h)}const{styles:l4}=pi;function tw(i){const e=de.autoReplaceSvg==="nest"?aT(i,{styleParser:!1}):aT(i);return~e.extra.classes.indexOf(MS)?hs("generateLayersText",i,e):hs("generateSvgReplacementMutation",i,e)}function u4(){return[...Hk,...Wp]}function oT(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!hr)return Promise.resolve();const t=st.documentElement.classList,r=b=>t.add("".concat(YE,"-").concat(b)),a=b=>t.remove("".concat(YE,"-").concat(b)),l=de.autoFetchSvg?u4():CS.concat(Object.keys(l4));l.includes("fa")||l.push("fa");const h=[".".concat(MS,":not([").concat(aa,"])")].concat(l.map(b=>".".concat(b,":not([").concat(aa,"])"))).join(", ");if(h.length===0)return Promise.resolve();let m=[];try{m=Ho(i.querySelectorAll(h))}catch{}if(m.length>0)r("pending"),a("complete");else return Promise.resolve();const p=Ny.begin("onTree"),g=m.reduce((b,T)=>{try{const S=tw(T);S&&b.push(S)}catch(S){PS||S.name==="MissingIcon"&&console.error(S)}return b},[]);return new Promise((b,T)=>{Promise.all(g).then(S=>{ZS(S,()=>{r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),p(),b()})}).catch(S=>{p(),T(S)})})}function c4(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;tw(i).then(t=>{t&&ZS([t],e)})}function h4(i){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:ag(e||{});let{mask:a}=t;return a&&(a=(a||{}).icon?a:ag(a||{})),i(r,te(te({},t),{},{mask:a}))}}const f4=function(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=mi,symbol:r=!1,mask:a=null,maskId:l=null,title:h=null,titleId:m=null,classes:p=[],attributes:g={},styles:b={}}=e;if(!i)return;const{prefix:T,iconName:S,icon:j}=i;return Bf(te({type:"icon"},i),()=>(oa("beforeDOMElementCreation",{iconDefinition:i,params:e}),de.autoA11y&&(h?g["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(m||xu()):(g["aria-hidden"]="true",g.focusable="false")),xy({icons:{main:og(j),mask:a?og(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:S,transform:te(te({},mi),t),symbol:r,title:h,maskId:l,titleId:m,extra:{attributes:g,styles:b,classes:p}})))};var d4={mixout(){return{icon:h4(f4)}},hooks(){return{mutationObserverCallbacks(i){return i.treeCallback=oT,i.nodeCallback=c4,i}}},provides(i){i.i2svg=function(e){const{node:t=st,callback:r=()=>{}}=e;return oT(t,r)},i.generateSvgReplacementMutation=function(e,t){const{iconName:r,title:a,titleId:l,prefix:h,transform:m,symbol:p,mask:g,maskId:b,extra:T}=t;return new Promise((S,j)=>{Promise.all([lg(r,h),g.iconName?lg(g.iconName,g.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(G=>{let[W,F]=G;S([e,xy({icons:{main:W,mask:F},prefix:h,iconName:r,transform:m,symbol:p,maskId:b,title:a,titleId:l,extra:T,watchable:!0})])}).catch(j)})},i.generateAbstractIcon=function(e){let{children:t,attributes:r,main:a,transform:l,styles:h}=e;const m=Uf(h);m.length>0&&(r.style=m);let p;return Iy(l)&&(p=hs("generateAbstractTransformGrouping",{main:a,transform:l,containerWidth:a.width,iconWidth:a.width})),t.push(p||a.icon),{children:t,attributes:r}}}},m4={mixout(){return{layer(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return Bf({type:"layer"},()=>{oa("beforeDOMElementCreation",{assembler:i,params:e});let r=[];return i(a=>{Array.isArray(a)?a.map(l=>{r=r.concat(l.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(de.cssPrefix,"-layers"),...t].join(" ")},children:r}]})}}}},p4={mixout(){return{counter(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:r=[],attributes:a={},styles:l={}}=e;return Bf({type:"counter",content:i},()=>(oa("beforeDOMElementCreation",{content:i,params:e}),KM({content:i.toString(),title:t,extra:{attributes:a,styles:l,classes:["".concat(de.cssPrefix,"-layers-counter"),...r]}})))}}}},g4={mixout(){return{text(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=mi,title:r=null,classes:a=[],attributes:l={},styles:h={}}=e;return Bf({type:"text",content:i},()=>(oa("beforeDOMElementCreation",{content:i,params:e}),tT({content:i,transform:te(te({},mi),t),title:r,extra:{attributes:l,styles:h,classes:["".concat(de.cssPrefix,"-layers-text"),...a]}})))}}},provides(i){i.generateLayersText=function(e,t){const{title:r,transform:a,extra:l}=t;let h=null,m=null;if(IS){const p=parseInt(getComputedStyle(e).fontSize,10),g=e.getBoundingClientRect();h=g.width/p,m=g.height/p}return de.autoA11y&&!r&&(l.attributes["aria-hidden"]="true"),Promise.resolve([e,tT({content:e.innerHTML,width:h,height:m,transform:a,title:r,extra:l,watchable:!0})])}}};const y4=new RegExp('"',"ug"),lT=[1105920,1112319],uT=te(te(te(te({},{FontAwesome:{normal:"fas",400:"fas"}}),zk),iM),Xk),hg=Object.keys(uT).reduce((i,e)=>(i[e.toLowerCase()]=uT[e],i),{}),v4=Object.keys(hg).reduce((i,e)=>{const t=hg[e];return i[e]=t[900]||[...Object.entries(t)][0][1],i},{});function _4(i){const e=i.replace(y4,""),t=wM(e,0),r=t>=lT[0]&&t<=lT[1],a=e.length===2?e[0]===e[1]:!1;return{value:ig(a?e[0]:e),isSecondary:r||a}}function b4(i,e){const t=i.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),a=isNaN(r)?"normal":r;return(hg[t]||{})[a]||v4[t]}function cT(i,e){const t="".concat(rM).concat(e.replace(":","-"));return new Promise((r,a)=>{if(i.getAttribute(t)!==null)return r();const h=Ho(i.children).filter(S=>S.getAttribute(Zp)===e)[0],m=us.getComputedStyle(i,e),p=m.getPropertyValue("font-family"),g=p.match(uM),b=m.getPropertyValue("font-weight"),T=m.getPropertyValue("content");if(h&&!g)return i.removeChild(h),r();if(g&&T!=="none"&&T!==""){const S=m.getPropertyValue("content");let j=b4(p,b);const{value:G,isSecondary:W}=_4(S),F=g[0].startsWith("FontAwesome");let ee=Cy(j,G),ie=ee;if(F){const ne=OM(G);ne.iconName&&ne.prefix&&(ee=ne.iconName,j=ne.prefix)}if(ee&&!W&&(!h||h.getAttribute(Ty)!==j||h.getAttribute(Ay)!==ie)){i.setAttribute(t,ie),h&&i.removeChild(h);const ne=o4(),{extra:fe}=ne;fe.attributes[Zp]=e,lg(ee,j).then(ce=>{const Ce=xy(te(te({},ne),{},{icons:{main:ce,mask:QS()},prefix:j,iconName:ie,extra:fe,watchable:!0})),D=st.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?i.insertBefore(D,i.firstChild):i.appendChild(D),D.outerHTML=Ce.map(w=>Fu(w)).join(`
`),i.removeAttribute(t),r()}).catch(a)}else r()}else r()})}function E4(i){return Promise.all([cT(i,"::before"),cT(i,"::after")])}function T4(i){return i.parentNode!==document.head&&!~aM.indexOf(i.tagName.toUpperCase())&&!i.getAttribute(Zp)&&(!i.parentNode||i.parentNode.tagName!=="svg")}function hT(i){if(hr)return new Promise((e,t)=>{const r=Ho(i.querySelectorAll("*")).filter(T4).map(E4),a=Ny.begin("searchPseudoElements");ew(),Promise.all(r).then(()=>{a(),cg(),e()}).catch(()=>{a(),cg(),t()})})}var A4={hooks(){return{mutationObserverCallbacks(i){return i.pseudoElementsCallback=hT,i}}},provides(i){i.pseudoElements2svg=function(e){const{node:t=st}=e;de.searchPseudoElements&&hT(t)}}};let fT=!1;var S4={mixout(){return{dom:{unwatch(){ew(),fT=!0}}}},hooks(){return{bootstrap(){sT(sg("mutationObserverCallbacks",{}))},noAuto(){i4()},watch(i){const{observeMutationsRoot:e}=i;fT?cg():sT(sg("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const dT=i=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return i.toLowerCase().split(" ").reduce((t,r)=>{const a=r.toLowerCase().split("-"),l=a[0];let h=a.slice(1).join("-");if(l&&h==="h")return t.flipX=!0,t;if(l&&h==="v")return t.flipY=!0,t;if(h=parseFloat(h),isNaN(h))return t;switch(l){case"grow":t.size=t.size+h;break;case"shrink":t.size=t.size-h;break;case"left":t.x=t.x-h;break;case"right":t.x=t.x+h;break;case"up":t.y=t.y-h;break;case"down":t.y=t.y+h;break;case"rotate":t.rotate=t.rotate+h;break}return t},e)};var w4={mixout(){return{parse:{transform:i=>dT(i)}}},hooks(){return{parseNodeAttributes(i,e){const t=e.getAttribute("data-fa-transform");return t&&(i.transform=dT(t)),i}}},provides(i){i.generateAbstractTransformGrouping=function(e){let{main:t,transform:r,containerWidth:a,iconWidth:l}=e;const h={transform:"translate(".concat(a/2," 256)")},m="translate(".concat(r.x*32,", ").concat(r.y*32,") "),p="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),g="rotate(".concat(r.rotate," 0 0)"),b={transform:"".concat(m," ").concat(p," ").concat(g)},T={transform:"translate(".concat(l/2*-1," -256)")},S={outer:h,inner:b,path:T};return{tag:"g",attributes:te({},S.outer),children:[{tag:"g",attributes:te({},S.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:te(te({},t.icon.attributes),S.path)}]}]}}}};const dp={x:0,y:0,width:"100%",height:"100%"};function mT(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return i.attributes&&(i.attributes.fill||e)&&(i.attributes.fill="black"),i}function I4(i){return i.tag==="g"?i.children:[i]}var R4={hooks(){return{parseNodeAttributes(i,e){const t=e.getAttribute("data-fa-mask"),r=t?zf(t.split(" ").map(a=>a.trim())):QS();return r.prefix||(r.prefix=cs()),i.mask=r,i.maskId=e.getAttribute("data-fa-mask-id"),i}}},provides(i){i.generateAbstractMask=function(e){let{children:t,attributes:r,main:a,mask:l,maskId:h,transform:m}=e;const{width:p,icon:g}=a,{width:b,icon:T}=l,S=_M({transform:m,containerWidth:b,iconWidth:p}),j={tag:"rect",attributes:te(te({},dp),{},{fill:"white"})},G=g.children?{children:g.children.map(mT)}:{},W={tag:"g",attributes:te({},S.inner),children:[mT(te({tag:g.tag,attributes:te(te({},g.attributes),S.path)},G))]},F={tag:"g",attributes:te({},S.outer),children:[W]},ee="mask-".concat(h||xu()),ie="clip-".concat(h||xu()),ne={tag:"mask",attributes:te(te({},dp),{},{id:ee,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,F]},fe={tag:"defs",children:[{tag:"clipPath",attributes:{id:ie},children:I4(T)},ne]};return t.push(fe,{tag:"rect",attributes:te({fill:"currentColor","clip-path":"url(#".concat(ie,")"),mask:"url(#".concat(ee,")")},dp)}),{children:t,attributes:r}}}},C4={provides(i){let e=!1;us.matchMedia&&(e=us.matchMedia("(prefers-reduced-motion: reduce)").matches),i.missingIconAbstract=function(){const t=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:te(te({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const l=te(te({},a),{},{attributeName:"opacity"}),h={tag:"circle",attributes:te(te({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||h.children.push({tag:"animate",attributes:te(te({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:te(te({},l),{},{values:"1;0;1;1;0;1;"})}),t.push(h),t.push({tag:"path",attributes:te(te({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:te(te({},l),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:te(te({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:te(te({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},x4={hooks(){return{parseNodeAttributes(i,e){const t=e.getAttribute("data-fa-symbol"),r=t===null?!1:t===""?!0:t;return i.symbol=r,i}}}},N4=[TM,d4,m4,p4,g4,A4,S4,w4,R4,C4,x4];zM(N4,{mixoutsTo:An});An.noAuto;An.config;An.library;An.dom;const fg=An.parse;An.findIconDefinition;An.toHtml;const O4=An.icon;An.layer;An.text;An.counter;var mp={exports:{}},pp,pT;function D4(){if(pT)return pp;pT=1;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return pp=i,pp}var gp,gT;function P4(){if(gT)return gp;gT=1;var i=D4();function e(){}function t(){}return t.resetWarningCache=e,gp=function(){function r(h,m,p,g,b,T){if(T!==i){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}r.isRequired=r;function a(){return r}var l={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},gp}var yT;function k4(){return yT||(yT=1,mp.exports=P4()()),mp.exports}var M4=k4();const Le=VT(M4);function vT(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable})),t.push.apply(t,r)}return t}function di(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?vT(Object(t),!0).forEach(function(r){vo(i,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):vT(Object(t)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(t,r))})}return i}function lf(i){"@babel/helpers - typeof";return lf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lf(i)}function vo(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function V4(i,e){if(i==null)return{};var t={},r=Object.keys(i),a,l;for(l=0;l<r.length;l++)a=r[l],!(e.indexOf(a)>=0)&&(t[a]=i[a]);return t}function L4(i,e){if(i==null)return{};var t=V4(i,e),r,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(i);for(a=0;a<l.length;a++)r=l[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(i,r)&&(t[r]=i[r])}return t}function dg(i){return U4(i)||j4(i)||z4(i)||B4()}function U4(i){if(Array.isArray(i))return mg(i)}function j4(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function z4(i,e){if(i){if(typeof i=="string")return mg(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return mg(i,e)}}function mg(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=i[t];return r}function B4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F4(i){var e,t=i.beat,r=i.fade,a=i.beatFade,l=i.bounce,h=i.shake,m=i.flash,p=i.spin,g=i.spinPulse,b=i.spinReverse,T=i.pulse,S=i.fixedWidth,j=i.inverse,G=i.border,W=i.listItem,F=i.flip,ee=i.size,ie=i.rotation,ne=i.pull,fe=(e={"fa-beat":t,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":l,"fa-shake":h,"fa-flash":m,"fa-spin":p,"fa-spin-reverse":b,"fa-spin-pulse":g,"fa-pulse":T,"fa-fw":S,"fa-inverse":j,"fa-border":G,"fa-li":W,"fa-flip":F===!0,"fa-flip-horizontal":F==="horizontal"||F==="both","fa-flip-vertical":F==="vertical"||F==="both"},vo(e,"fa-".concat(ee),typeof ee<"u"&&ee!==null),vo(e,"fa-rotate-".concat(ie),typeof ie<"u"&&ie!==null&&ie!==0),vo(e,"fa-pull-".concat(ne),typeof ne<"u"&&ne!==null),vo(e,"fa-swap-opacity",i.swapOpacity),e);return Object.keys(fe).map(function(ce){return fe[ce]?ce:null}).filter(function(ce){return ce})}function H4(i){return i=i-0,i===i}function nw(i){return H4(i)?i:(i=i.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),i.substr(0,1).toLowerCase()+i.substr(1))}var q4=["style"];function G4(i){return i.charAt(0).toUpperCase()+i.slice(1)}function $4(i){return i.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r=t.indexOf(":"),a=nw(t.slice(0,r)),l=t.slice(r+1).trim();return a.startsWith("webkit")?e[G4(a)]=l:e[a]=l,e},{})}function iw(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(p){return iw(i,p)}),a=Object.keys(e.attributes||{}).reduce(function(p,g){var b=e.attributes[g];switch(g){case"class":p.attrs.className=b,delete e.attributes.class;break;case"style":p.attrs.style=$4(b);break;default:g.indexOf("aria-")===0||g.indexOf("data-")===0?p.attrs[g.toLowerCase()]=b:p.attrs[nw(g)]=b}return p},{attrs:{}}),l=t.style,h=l===void 0?{}:l,m=L4(t,q4);return a.attrs.style=di(di({},a.attrs.style),h),i.apply(void 0,[e.tag,di(di({},a.attrs),m)].concat(dg(r)))}var rw=!1;try{rw=!0}catch{}function K4(){if(!rw&&console&&typeof console.error=="function"){var i;(i=console).error.apply(i,arguments)}}function _T(i){if(i&&lf(i)==="object"&&i.prefix&&i.iconName&&i.icon)return i;if(fg.icon)return fg.icon(i);if(i===null)return null;if(i&&lf(i)==="object"&&i.prefix&&i.iconName)return i;if(Array.isArray(i)&&i.length===2)return{prefix:i[0],iconName:i[1]};if(typeof i=="string")return{prefix:"fas",iconName:i}}function yp(i,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?vo({},i,e):{}}var bT={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Dy=pf.forwardRef(function(i,e){var t=di(di({},bT),i),r=t.icon,a=t.mask,l=t.symbol,h=t.className,m=t.title,p=t.titleId,g=t.maskId,b=_T(r),T=yp("classes",[].concat(dg(F4(t)),dg((h||"").split(" ")))),S=yp("transform",typeof t.transform=="string"?fg.transform(t.transform):t.transform),j=yp("mask",_T(a)),G=O4(b,di(di(di(di({},T),S),j),{},{symbol:l,title:m,titleId:p,maskId:g}));if(!G)return K4("Could not find icon",b),null;var W=G.abstract,F={ref:e};return Object.keys(t).forEach(function(ee){bT.hasOwnProperty(ee)||(F[ee]=t[ee])}),Y4(W[0],F)});Dy.displayName="FontAwesomeIcon";Dy.propTypes={beat:Le.bool,border:Le.bool,beatFade:Le.bool,bounce:Le.bool,className:Le.string,fade:Le.bool,flash:Le.bool,mask:Le.oneOfType([Le.object,Le.array,Le.string]),maskId:Le.string,fixedWidth:Le.bool,inverse:Le.bool,flip:Le.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Le.oneOfType([Le.object,Le.array,Le.string]),listItem:Le.bool,pull:Le.oneOf(["right","left"]),pulse:Le.bool,rotation:Le.oneOf([0,90,180,270]),shake:Le.bool,size:Le.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Le.bool,spinPulse:Le.bool,spinReverse:Le.bool,symbol:Le.oneOfType([Le.bool,Le.string]),title:Le.string,titleId:Le.string,transform:Le.oneOfType([Le.string,Le.object]),swapOpacity:Le.bool};var Y4=iw.bind(null,pf.createElement);const Q4=({isOpen:i,toggle:e})=>I.jsx("div",{className:"flex justify-end",children:I.jsxs("button",{onClick:e,className:"flex flex-col items-center p-2 text-black font top-4 left-4 z-50 rounded-2xl hover:text-black-500 cursor-pointer",children:[I.jsx(Dy,{icon:Nk,className:"mr-2 w-auto"}),i?"Cerrar Menú":"Abrir Menú"]})}),X4=()=>{const{openMenu:i,toogleMenu:e}=pf.useContext(by)||{};return I.jsx(I.Fragment,{children:I.jsx(Q4,{isOpen:!!i,toggle:e||(()=>{})})})},W4=()=>{const{openMenu:i}=ae.useContext(by)??{},e="16rem";return I.jsxs("div",{className:"flex min-h-screen relative",children:[I.jsx("div",{className:"fixed top-0 left-0 h-full bg-gray-900 z-30 transition-transform duration-300 ease-in-out",style:{width:e,transform:`translateX(${i?"0":`-${e}`})`},children:I.jsx(xk,{openMenu:i??!1})}),I.jsxs("div",{className:"flex flex-col flex-1 w-full transition-all duration-300",style:{paddingLeft:i?e:"0"},children:[I.jsx("div",{className:"w-full bg-white z-40 shadow-md",children:I.jsx(X4,{})}),I.jsx("main",{className:"p-4",children:I.jsx(Sg,{})})]})]})},uf="__sak";/**
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
 */function J4(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ff{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const r=new Ff(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:a,data:l}=t.data,h=this.handlersMap[a];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const m=Array.from(h).map(async g=>g(t.origin,l)),p=await J4(m);t.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ff.receivers=[];/**
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
 */function Z4(i="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class e3{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,h;return new Promise((m,p)=>{const g=Z4("",20);a.port1.start();const b=setTimeout(()=>{p(new Error("unsupported_event"))},r);h={messageChannel:a,onMessage(T){const S=T;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(b),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),m(S.data.response);break;default:clearTimeout(b),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(h),a.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function ET(){return window}/**
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
 */function sw(){return typeof ET().WorkerGlobalScope<"u"&&typeof ET().importScripts=="function"}async function t3(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function n3(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function i3(){return sw()?self:null}/**
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
 */const aw="firebaseLocalStorageDb",r3=1,cf="firebaseLocalStorage",ow="fbase_key";class Hu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Hf(i,e){return i.transaction([cf],e?"readwrite":"readonly").objectStore(cf)}function s3(){const i=indexedDB.deleteDatabase(aw);return new Hu(i).toPromise()}function pg(){const i=indexedDB.open(aw,r3);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(cf,{keyPath:ow})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(cf)?e(r):(r.close(),await s3(),e(await pg()))})})}async function TT(i,e,t){const r=Hf(i,!0).put({[ow]:e,value:t});return new Hu(r).toPromise()}async function a3(i,e){const t=Hf(i,!1).get(e),r=await new Hu(t).toPromise();return r===void 0?null:r.value}function AT(i,e){const t=Hf(i,!0).delete(e);return new Hu(t).toPromise()}const o3=800,l3=3;class lw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>l3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ff._getInstance(i3()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await t3(),!this.activeServiceWorker)return;this.sender=new e3(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||n3()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pg();return await TT(e,uf,"1"),await AT(e,uf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>TT(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>a3(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>AT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Hf(a,!1).getAll();return new Hu(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),o3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lw.type="LOCAL";const u3=lw;function uw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c3=uw,cw=new ms("auth","Firebase",uw());/**
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
 */const hf=new bf("@firebase/auth");function h3(i,...e){hf.logLevel<=ke.WARN&&hf.warn(`Auth (${wi}): ${i}`,...e)}function Lh(i,...e){hf.logLevel<=ke.ERROR&&hf.error(`Auth (${wi}): ${i}`,...e)}/**
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
 */function Si(i,...e){throw Py(i,...e)}function ma(i,...e){return Py(i,...e)}function hw(i,e,t){const r=Object.assign(Object.assign({},c3()),{[e]:t});return new ms("auth","Firebase",r).create(e,{appName:i.name})}function ia(i){return hw(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Py(i,...e){if(typeof i!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(t,...r)}return cw.create(i,...e)}function Ie(i,e,...t){if(!i)throw Py(e,...t)}function er(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Lh(e),new Error(e)}function fs(i,e){i||er(e)}function f3(){return ST()==="http:"||ST()==="https:"}function ST(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function d3(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(f3()||n1()||"connection"in navigator)?navigator.onLine:!0}function m3(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class p3{constructor(e,t){this.shortDelay=e,this.longDelay=t,fs(t>e,"Short delay should be less than long delay!"),this.isMobile=e1()||i1()}get(){return d3()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function fw(i,e){fs(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class dw{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const g3={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const y3=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],v3=new p3(3e4,6e4);function ky(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function qo(i,e,t,r,a={}){return mw(i,a,async()=>{let l={},h={};r&&(e==="GET"?h=r:l={body:JSON.stringify(r)});const m=cr(Object.assign({key:i.config.apiKey},h)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},l);return t1()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&Vo(i.emulatorConfig.host)&&(g.credentials="include"),dw.fetch()(await pw(i,i.config.apiHost,t,m),g)})}async function mw(i,e,t){i._canInitEmulator=!1;const r=Object.assign(Object.assign({},g3),e);try{const a=new b3(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Sh(i,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const m=l.ok?h.errorMessage:h.error.message,[p,g]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sh(i,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw Sh(i,"email-already-in-use",h);if(p==="USER_DISABLED")throw Sh(i,"user-disabled",h);const b=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw hw(i,b,g);Si(i,b)}}catch(a){if(a instanceof jn)throw a;Si(i,"network-request-failed",{message:String(a)})}}async function _3(i,e,t,r,a={}){const l=await qo(i,e,t,r,a);return"mfaPendingCredential"in l&&Si(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function pw(i,e,t,r){const a=`${e}${t}?${r}`,l=i,h=l.config.emulator?fw(i.config,a):`${i.config.apiScheme}://${a}`;return y3.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}class b3{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ma(this.auth,"network-request-failed")),v3.get())})}}function Sh(i,e,t){const r={appName:i.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const a=ma(i,e,r);return a.customData._tokenResponse=t,a}/**
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
 */async function E3(i,e){return qo(i,"POST","/v1/accounts:delete",e)}async function ff(i,e){return qo(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function mu(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function T3(i,e=!1){const t=nn(i),r=await t.getIdToken(e),a=My(r);Ie(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:a,token:r,authTime:mu(vp(a.auth_time)),issuedAtTime:mu(vp(a.iat)),expirationTime:mu(vp(a.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function vp(i){return Number(i)*1e3}function My(i){const[e,t,r]=i.split(".");if(e===void 0||t===void 0||r===void 0)return Lh("JWT malformed, contained fewer than 3 sections"),null;try{const a=Ig(t);return a?JSON.parse(a):(Lh("Failed to decode base64 JWT payload"),null)}catch(a){return Lh("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function wT(i){const e=My(i);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ou(i,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof jn&&A3(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function A3({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class S3{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=mu(this.lastLoginAt),this.creationTime=mu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function df(i){var e;const t=i.auth,r=await i.getIdToken(),a=await Ou(i,ff(t,{idToken:r}));Ie(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];i._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?gw(l.providerUserInfo):[],m=I3(i.providerData,h),p=i.isAnonymous,g=!(i.email&&l.passwordHash)&&!(m!=null&&m.length),b=p?g:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:m,metadata:new gg(l.createdAt,l.lastLoginAt),isAnonymous:b};Object.assign(i,T)}async function w3(i){const e=nn(i);await df(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function I3(i,e){return[...i.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function gw(i){return i.map(e=>{var{providerId:t}=e,r=Lo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function R3(i,e){const t=await mw(i,{},async()=>{const r=cr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,h=await pw(i,a,"/v1/token",`key=${l}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",dw.fetch()(h,{method:"POST",headers:m,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function C3(i,e){return qo(i,"POST","/v2/accounts:revokeToken",ky(i,e))}/**
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
 */class To{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const t=wT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:a,expiresIn:l}=await R3(e,t);this.updateTokensAndExpiration(r,a,Number(l))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:a,expirationTime:l}=t,h=new To;return r&&(Ie(typeof r=="string","internal-error",{appName:e}),h.refreshToken=r),a&&(Ie(typeof a=="string","internal-error",{appName:e}),h.accessToken=a),l&&(Ie(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new To,this.toJSON())}_performRefresh(){return er("not implemented")}}/**
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
 */function Hr(i,e){Ie(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Kn{constructor(e){var{uid:t,auth:r,stsTokenManager:a}=e,l=Lo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new S3(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new gg(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Ou(this,this.stsTokenManager.getToken(this.auth,e));return Ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return T3(this,e)}reload(){return w3(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await df(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(ia(this.auth));const e=await this.getIdToken();return await Ou(this,E3(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,a,l,h,m,p,g,b;const T=(r=t.displayName)!==null&&r!==void 0?r:void 0,S=(a=t.email)!==null&&a!==void 0?a:void 0,j=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,G=(h=t.photoURL)!==null&&h!==void 0?h:void 0,W=(m=t.tenantId)!==null&&m!==void 0?m:void 0,F=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,ee=(g=t.createdAt)!==null&&g!==void 0?g:void 0,ie=(b=t.lastLoginAt)!==null&&b!==void 0?b:void 0,{uid:ne,emailVerified:fe,isAnonymous:ce,providerData:Ce,stsTokenManager:D}=t;Ie(ne&&D,e,"internal-error");const w=To.fromJSON(this.name,D);Ie(typeof ne=="string",e,"internal-error"),Hr(T,e.name),Hr(S,e.name),Ie(typeof fe=="boolean",e,"internal-error"),Ie(typeof ce=="boolean",e,"internal-error"),Hr(j,e.name),Hr(G,e.name),Hr(W,e.name),Hr(F,e.name),Hr(ee,e.name),Hr(ie,e.name);const C=new Kn({uid:ne,auth:e,email:S,emailVerified:fe,displayName:T,isAnonymous:ce,photoURL:G,phoneNumber:j,tenantId:W,stsTokenManager:w,createdAt:ee,lastLoginAt:ie});return Ce&&Array.isArray(Ce)&&(C.providerData=Ce.map(P=>Object.assign({},P))),F&&(C._redirectEventId=F),C}static async _fromIdTokenResponse(e,t,r=!1){const a=new To;a.updateFromServerResponse(t);const l=new Kn({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await df(l),l}static async _fromGetAccountInfoResponse(e,t,r){const a=t.users[0];Ie(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?gw(a.providerUserInfo):[],h=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),m=new To;m.updateFromIdToken(r);const p=new Kn({uid:a.localId,auth:e,stsTokenManager:m,isAnonymous:h}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new gg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
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
 */const IT=new Map;function gi(i){fs(i instanceof Function,"Expected a class definition");let e=IT.get(i);return e?(fs(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,IT.set(i,e),e)}/**
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
 */class yw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}yw.type="NONE";const RT=yw;/**
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
 */function pu(i,e,t){return`firebase:${i}:${e}:${t}`}class Ao{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:a,name:l}=this.auth;this.fullUserKey=pu(this.userKey,a.apiKey,l),this.fullPersistenceKey=pu("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ff(this.auth,{idToken:e}).catch(()=>{});return t?Kn._fromGetAccountInfoResponse(this.auth,t,e):null}return Kn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ao(gi(RT),e,r);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||gi(RT);const h=pu(r,e.config.apiKey,e.name);let m=null;for(const g of t)try{const b=await g._get(h);if(b){let T;if(typeof b=="string"){const S=await ff(e,{idToken:b}).catch(()=>{});if(!S)break;T=await Kn._fromGetAccountInfoResponse(e,S,b)}else T=Kn._fromJSON(e,b);g!==l&&(m=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Ao(l,e,r):(l=p[0],m&&await l._set(h,m.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(h)}catch{}})),new Ao(l,e,r))}}/**
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
 */function CT(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(x3(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_w(e))return"Blackberry";if(bw(e))return"Webos";if(N3(e))return"Safari";if((e.includes("chrome/")||O3(e))&&!e.includes("edge/"))return"Chrome";if(qu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function x3(i=tt()){return/firefox\//i.test(i)}function N3(i=tt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function O3(i=tt()){return/crios\//i.test(i)}function vw(i=tt()){return/iemobile/i.test(i)}function qu(i=tt()){return/android/i.test(i)}function _w(i=tt()){return/blackberry/i.test(i)}function bw(i=tt()){return/webos/i.test(i)}function Vy(i=tt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function D3(i=tt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(i)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(i)}function P3(){return r1()&&document.documentMode===10}function k3(i=tt()){return Vy(i)||qu(i)||bw(i)||_w(i)||/windows phone/i.test(i)||vw(i)}/**
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
 */function Ew(i,e=[]){let t;switch(i){case"Browser":t=CT(tt());break;case"Worker":t=`${CT(tt())}-${i}`;break;default:t=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${wi}/${r}`}/**
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
 */class M3{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=l=>new Promise((h,m)=>{try{const p=e(l);h(p)}catch(p){m(p)}});r.onAbort=t,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function V3(i,e={}){return qo(i,"GET","/v2/passwordPolicy",ky(i,e))}/**
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
 */const L3=6;class U3{constructor(e){var t,r,a,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:L3,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,a,l,h,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(r=p.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class j3{constructor(e,t,r,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xT(this),this.idTokenSubscription=new xT(this),this.beforeStateQueue=new M3(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gi(t)),this._initializationPromise=this.queue(async()=>{var r,a,l;if(!this._deleted&&(this.persistenceManager=await Ao.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ff(this,{idToken:e}),r=await Kn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(wt(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===m)&&(p!=null&&p.user)&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(h){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await df(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=m3()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject(ia(this));const t=e?nn(e):null;return t&&Ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(ia(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject(ia(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await V3(this),t=new U3(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ms("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await C3(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gi(e)||this._popupRedirectResolver;Ie(t,this,"argument-error"),this.redirectPersistenceManager=await Ao.create(this,[gi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(m,this,"internal-error"),m.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,r,a);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ew(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&h3(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Tw(i){return nn(i)}class xT{constructor(e){this.auth=e,this.observer=null,this.addObserver=a1(t=>this.observer=t)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function z3(i,e){const t=Pu(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(ts(l,e??{}))return a;Si(a,"already-initialized")}return t.initialize({options:e})}function B3(i,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(gi);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */class Aw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return er("not implemented")}_getIdTokenResponse(e){return er("not implemented")}_linkToIdToken(e,t){return er("not implemented")}_getReauthenticationResolver(e){return er("not implemented")}}/**
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
 */async function So(i,e){return _3(i,"POST","/v1/accounts:signInWithIdp",ky(i,e))}/**
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
 */const F3="http://localhost";class la extends Aw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new la(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Si("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=t,l=Lo(t,["providerId","signInMethod"]);if(!r||!a)return null;const h=new la(r,a);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return So(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,So(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,So(e,t)}buildRequest(){const e={requestUri:F3,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=cr(t)}return e}}/**
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
 */class Sw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gu extends Sw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qr extends Gu{constructor(){super("facebook.com")}static credential(e){return la._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qr.credential(e.oauthAccessToken)}catch{return null}}}qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";qr.PROVIDER_ID="facebook.com";/**
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
 */class Gr extends Gu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return la._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Gr.credential(t,r)}catch{return null}}}Gr.GOOGLE_SIGN_IN_METHOD="google.com";Gr.PROVIDER_ID="google.com";/**
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
 */class $r extends Gu{constructor(){super("github.com")}static credential(e){return la._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $r.credential(e.oauthAccessToken)}catch{return null}}}$r.GITHUB_SIGN_IN_METHOD="github.com";$r.PROVIDER_ID="github.com";/**
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
 */class Kr extends Gu{constructor(){super("twitter.com")}static credential(e,t){return la._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Kr.credential(t,r)}catch{return null}}}Kr.TWITTER_SIGN_IN_METHOD="twitter.com";Kr.PROVIDER_ID="twitter.com";/**
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
 */class Po{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,a=!1){const l=await Kn._fromIdTokenResponse(e,r,a),h=NT(r);return new Po({user:l,providerId:h,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const a=NT(r);return new Po({user:e,providerId:a,_tokenResponse:r,operationType:t})}}function NT(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class mf extends jn{constructor(e,t,r,a){var l;super(t.code,t.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,mf.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,a){return new mf(e,t,r,a)}}function ww(i,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?mf._fromErrorAndOperation(i,l,e,r):l})}async function H3(i,e,t=!1){const r=await Ou(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Po._forOperation(i,"link",r)}/**
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
 */async function q3(i,e,t=!1){const{auth:r}=i;if(wt(r.app))return Promise.reject(ia(r));const a="reauthenticate";try{const l=await Ou(i,ww(r,a,e,i),t);Ie(l.idToken,r,"internal-error");const h=My(l.idToken);Ie(h,r,"internal-error");const{sub:m}=h;return Ie(i.uid===m,r,"user-mismatch"),Po._forOperation(i,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Si(r,"user-mismatch"),l}}/**
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
 */async function G3(i,e,t=!1){if(wt(i.app))return Promise.reject(ia(i));const r="signIn",a=await ww(i,r,e),l=await Po._fromIdTokenResponse(i,r,a);return t||await i._updateCurrentUser(l.user),l}var OT="@firebase/auth",DT="1.10.5";/**
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
 */class $3{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function K3(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Y3(i){ns(new nr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=r.options;Ie(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ew(i)},g=new j3(r,a,l,p);return B3(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ns(new nr("auth-internal",e=>{const t=Tw(e.getProvider("auth").getImmediate());return(r=>new $3(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yi(OT,DT,K3(i)),yi(OT,DT,"esm2017")}/**
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
 */class Iw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(uf,"1"),this.storage.removeItem(uf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Q3=1e3,X3=10;class Rw extends Iw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=k3(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),a=this.localCache[t];r!==a&&e(t,a,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,p)=>{this.notifyListeners(h,p)});return}const r=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const h=this.storage.getItem(r);!t&&this.localCache[r]===h||this.notifyListeners(r,h)},l=this.storage.getItem(r);P3()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,X3):a()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Q3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rw.type="LOCAL";const W3=Rw;/**
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
 */class Cw extends Iw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Cw.type="SESSION";const J3=Cw;/**
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
 */function Z3(i,e){return e?gi(e):(Ie(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Ly extends Aw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return So(e,this._buildIdpRequest())}_linkToIdToken(e,t){return So(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return So(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function e6(i){return G3(i.auth,new Ly(i),i.bypassAuthState)}function t6(i){const{auth:e,user:t}=i;return Ie(t,e,"internal-error"),q3(t,new Ly(i),i.bypassAuthState)}async function n6(i){const{auth:e,user:t}=i;return Ie(t,e,"internal-error"),H3(t,new Ly(i),i.bypassAuthState)}/**
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
 */class i6{constructor(e,t,r,a,l=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:a,tenantId:l,error:h,type:m}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:t,sessionId:r,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return e6;case"linkViaPopup":case"linkViaRedirect":return n6;case"reauthViaPopup":case"reauthViaRedirect":return t6;default:Si(this.auth,"internal-error")}}resolve(e){fs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const r6="pendingRedirect",gu=new Map;class s6 extends i6{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=gu.get(this.auth._key());if(!e){try{const r=await a6(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}gu.set(this.auth._key(),e)}return this.bypassAuthState||gu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function a6(i,e){const t=c6(e),r=u6(i);if(!await r._isAvailable())return!1;const a=await r._get(t)==="true";return await r._remove(t),a}function o6(){gu.clear()}function l6(i,e){gu.set(i._key(),e)}function u6(i){return gi(i._redirectPersistence)}function c6(i){return pu(r6,i.config.apiKey,i.name)}async function h6(i,e,t=!1){if(wt(i.app))return Promise.reject(ia(i));const r=Tw(i),a=Z3(r,e),h=await new s6(r,a,t).execute();return h&&!t&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,e)),h}/**
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
 */const f6="__/auth/handler",d6="emulator/auth/handler",m6=encodeURIComponent("fac");async function p6(i,e,t,r,a,l){Ie(i.config.authDomain,i,"auth-domain-config-required"),Ie(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:r,v:wi,eventId:a};if(e instanceof Sw){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",s1(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[b,T]of Object.entries(l||{}))h[b]=T}if(e instanceof Gu){const b=e.getScopes().filter(T=>T!=="");b.length>0&&(h.scopes=b.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const b of Object.keys(m))m[b]===void 0&&delete m[b];const p=await i._getAppCheckToken(),g=p?`#${m6}=${encodeURIComponent(p)}`:"";return`${g6(i)}?${cr(m).slice(1)}${g}`}function g6({config:i}){return i.emulator?fw(i,d6):`https://${i.authDomain}/${f6}`}/**
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
 */function ua(){return window}/**
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
 */async function y6(i,e={}){return qo(i,"GET","/v1/projects",e)}/**
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
 */const v6=2e3;async function _6(i,e,t){var r;const{BuildInfo:a}=ua();fs(e.sessionId,"AuthEvent did not contain a session ID");const l=await S6(e.sessionId),h={};return Vy()?h.ibi=a.packageName:qu()?h.apn=a.packageName:Si(i,"operation-not-supported-in-this-environment"),a.displayName&&(h.appDisplayName=a.displayName),h.sessionId=l,p6(i,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,h)}async function b6(i){const{BuildInfo:e}=ua(),t={};Vy()?t.iosBundleId=e.packageName:qu()?t.androidPackageName=e.packageName:Si(i,"operation-not-supported-in-this-environment"),await y6(i,t)}function E6(i){const{cordova:e}=ua();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let a=null;r?e.plugins.browsertab.openUrl(i):a=e.InAppBrowser.open(i,D3()?"_blank":"_system","location=yes"),t(a)})})}async function T6(i,e,t){const{cordova:r}=ua();let a=()=>{};try{await new Promise((l,h)=>{let m=null;function p(){var T;l();const S=(T=r.plugins.browsertab)===null||T===void 0?void 0:T.close;typeof S=="function"&&S(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function g(){m||(m=window.setTimeout(()=>{h(ma(i,"redirect-cancelled-by-user"))},v6))}function b(){(document==null?void 0:document.visibilityState)==="visible"&&g()}e.addPassiveListener(p),document.addEventListener("resume",g,!1),qu()&&document.addEventListener("visibilitychange",b,!1),a=()=>{e.removePassiveListener(p),document.removeEventListener("resume",g,!1),document.removeEventListener("visibilitychange",b,!1),m&&window.clearTimeout(m)}})}finally{a()}}function A6(i){var e,t,r,a,l,h,m,p,g,b;const T=ua();Ie(typeof((e=T==null?void 0:T.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),Ie(typeof((t=T==null?void 0:T.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),Ie(typeof((l=(a=(r=T==null?void 0:T.cordova)===null||r===void 0?void 0:r.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.openUrl)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Ie(typeof((p=(m=(h=T==null?void 0:T.cordova)===null||h===void 0?void 0:h.plugins)===null||m===void 0?void 0:m.browsertab)===null||p===void 0?void 0:p.isAvailable)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Ie(typeof((b=(g=T==null?void 0:T.cordova)===null||g===void 0?void 0:g.InAppBrowser)===null||b===void 0?void 0:b.open)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function S6(i){const e=w6(i),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function w6(i){if(fs(/[0-9a-zA-Z]+/.test(i),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(i);const e=new ArrayBuffer(i.length),t=new Uint8Array(e);for(let r=0;r<i.length;r++)t[r]=i.charCodeAt(r);return t}/**
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
 */const I6=10*60*1e3;class R6{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!C6(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!xw(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ma(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=I6&&this.cachedEventUids.clear(),this.cachedEventUids.has(PT(e))}saveEventToCache(e){this.cachedEventUids.add(PT(e)),this.lastProcessedEventTime=Date.now()}}function PT(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function xw({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function C6(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xw(i);default:return!1}}/**
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
 */const x6=20;class N6 extends R6{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function O6(i,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:k6(),postBody:null,tenantId:i.tenantId,error:ma(i,"no-auth-event")}}function D6(i,e){return yg()._set(vg(i),e)}async function kT(i){const e=await yg()._get(vg(i));return e&&await yg()._remove(vg(i)),e}function P6(i,e){var t,r;const a=V6(e);if(a.includes("/__/auth/callback")){const l=Uh(a),h=l.firebaseError?M6(decodeURIComponent(l.firebaseError)):null,m=(r=(t=h==null?void 0:h.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],p=m?ma(m):null;return p?{type:i.type,eventId:i.eventId,tenantId:i.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:i.type,eventId:i.eventId,tenantId:i.tenantId,sessionId:i.sessionId,urlResponse:a,postBody:null}}return null}function k6(){const i=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<x6;t++){const r=Math.floor(Math.random()*e.length);i.push(e.charAt(r))}return i.join("")}function yg(){return gi(W3)}function vg(i){return pu("authEvent",i.config.apiKey,i.name)}function M6(i){try{return JSON.parse(i)}catch{return null}}function V6(i){const e=Uh(i),t=e.link?decodeURIComponent(e.link):void 0,r=Uh(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Uh(a).link||a||r||t||i}function Uh(i){if(!(i!=null&&i.includes("?")))return{};const[e,...t]=i.split("?");return MC(t.join("?"))}/**
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
 */const L6=500;class U6{constructor(){this._redirectPersistence=J3,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=h6,this._overrideRedirectResult=l6}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new N6(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Si(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,a){A6(e);const l=await this._initialize(e);await l.initialized(),l.resetRedirect(),o6(),await this._originValidation(e);const h=O6(e,r,a);await D6(e,h);const m=await _6(e,h,t),p=await E6(m);return T6(e,l,p)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=b6(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:a,BuildInfo:l}=ua(),h=setTimeout(async()=>{await kT(e),t.onEvent(MT())},L6),m=async b=>{clearTimeout(h);const T=await kT(e);let S=null;T&&(b!=null&&b.url)&&(S=P6(T,b.url)),t.onEvent(S||MT())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,m);const p=a,g=`${l.packageName.toLowerCase()}://`;ua().handleOpenURL=async b=>{if(b.toLowerCase().startsWith(g)&&m({url:b}),typeof p=="function")try{p(b)}catch(T){console.error(T)}}}}const j6=U6;function MT(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ma("no-auth-event")}}/**
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
 */function z6(i=Cg()){const e=Pu(i,"auth");return e.isInitialized()?e.getImmediate():z3(i,{persistence:u3,popupRedirectResolver:j6})}Y3("Cordova");const B6=z6(Sf),F6=i=>B6.currentUser?i.children:I.jsx(nC,{to:"/"}),H6=[{title:"Crear usuario",slug:"createUser"},{title:"Crear maquina",slug:"createMachine"}];function q6({item:i}){return I.jsx(wg,{to:`/configurations/${i.slug}`,children:I.jsx("button",{className:"button",children:i.title})})}const G6=()=>I.jsxs("div",{className:"flex flex-col items-center p-4 space-y-6 md:space-y-8",children:[I.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:H6.map((i,e)=>I.jsx(q6,{item:i},e))}),I.jsx("div",{className:"w-full max-w-4xl",children:I.jsx(Sg,{})})]}),$6=()=>I.jsx("div",{className:"roun min-h-screen flex items-center justify-center rounded-2xl backgroundForm",children:I.jsxs("form",{className:"bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md text-white space-y-6",children:[I.jsx("h2",{className:"text-2xl font-semibold text-center",children:"Crear maquina"}),I.jsxs("div",{children:[I.jsx("label",{htmlFor:"date",className:"block text-sm font-medium mb-1",children:"Fecha"}),I.jsx("input",{type:"date",id:"date",name:"date",className:"w-full px-4 py-2 rounded  border bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"})]}),I.jsxs("div",{children:[I.jsx("label",{htmlFor:"abbreviation",className:"block text-sm font-medium mb-1",children:"Abreviacion de maquina"}),I.jsx("input",{type:"text",id:"abbreviation",name:"abbreviation",placeholder:"e.g., F1315",className:"w-full px-4 py-2 rounded  border bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"})]}),I.jsxs("div",{children:[I.jsx("label",{htmlFor:"machineName",className:"block text-sm font-medium mb-1",children:"Nombre de maquina"}),I.jsx("input",{type:"text",id:"machineName",name:"machineName",placeholder:"e.g., Cutter Alpha",className:"w-full px-4 py-2 rounded  border border-gray-600 bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"})]}),I.jsxs("div",{children:[I.jsx("label",{htmlFor:"efficiency",className:"block text-sm font-medium mb-1",children:"Eficiencia(%)"}),I.jsx("input",{type:"number",id:"efficiency",name:"efficiency",min:"0",max:"100",placeholder:"e.g., 92",className:"w-full px-4 py-2 rounded  border border-gray-600 bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"})]}),I.jsx("button",{type:"submit",className:"cursor-pointer w-full py-2 rounded bg-blue-600 hover:bg-blue-800 transition-colors duration-300 text-white font-semibold",children:"Crear maquina"})]})}),K6=()=>I.jsx("div",{className:"min-h-screen flex items-center justify-center rounded-2xl backgroundForm",children:I.jsxs("form",{className:"p-8 rounded-lg shadow-md w-full max-w-md text-white space-y-4",children:[I.jsx("h2",{className:"text-2xl font-semibold text-center",children:"Crear usurio"}),I.jsxs("div",{children:[I.jsx("label",{htmlFor:"firstName",className:"block text-sm font-medium mb-1",children:"Nombres"}),I.jsx("input",{type:"text",id:"firstName",name:"firstName",className:"w-full p-2 rounded  border border-gray-600 bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),I.jsxs("div",{children:[I.jsx("label",{htmlFor:"lastName",className:"block text-sm font-medium mb-1",children:"Apellidos"}),I.jsx("input",{type:"text",id:"lastName",name:"lastName",className:"w-full p-2 rounded  border border-gray-600 bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),I.jsxs("div",{children:[I.jsx("label",{htmlFor:"code",className:"block text-sm font-medium mb-1",children:"Codigo"}),I.jsx("input",{type:"text",id:"code",name:"code",className:"w-full p-2 rounded  border border-gray-600 bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),I.jsxs("div",{children:[I.jsx("label",{htmlFor:"section",className:"block text-sm font-medium mb-1",children:"Seccion"}),I.jsx("input",{type:"text",id:"section",name:"section",className:"w-full p-2 rounded  border border-gray-600 bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),I.jsx("button",{type:"submit",className:"cursor-pointer w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded transition-colors",children:"Crear usuario"})]})});function Y6(){return I.jsx("div",{children:"AdminData"})}function Q6(){return I.jsx(bk,{children:I.jsx(hC,{children:I.jsxs(rC,{children:[I.jsx(un,{path:"/",element:I.jsx(_k,{})}),I.jsxs(un,{path:"/",element:I.jsx(F6,{children:I.jsx(W4,{})}),children:[I.jsx(un,{path:"home",element:I.jsx(LE,{})}),I.jsx(un,{path:"supervisor",element:I.jsx(jE,{})}),I.jsx(un,{path:"eficencia",element:I.jsx(zE,{})}),I.jsxs(un,{path:"picado",element:I.jsx(Ik,{}),children:[I.jsx(un,{path:"f1315",element:I.jsx(Tk,{})}),I.jsx(un,{path:"eficence",element:I.jsx(zE,{})})]}),I.jsx(un,{path:"/supervisor",element:I.jsx(jE,{})}),I.jsxs(un,{path:"/configurations",element:I.jsx(G6,{}),children:[I.jsx(un,{path:"createMachine",element:I.jsx($6,{})}),I.jsx(un,{path:"createUser",element:I.jsx(K6,{})})]}),I.jsx(un,{path:"data",element:I.jsx(Y6,{})}),I.jsx(un,{path:"*",element:I.jsx(LE,{})})]})]})})})}cR.createRoot(document.getElementById("root")).render(I.jsx(ae.StrictMode,{children:I.jsx(Q6,{})}));
