function hR(i,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in i)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(i,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Ub(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var $m={exports:{}},nu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function fR(){if(Q0)return nu;Q0=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var m in a)m!=="key"&&(l[m]=a[m])}else l=a;return a=l.ref,{$$typeof:i,type:r,key:c,ref:a!==void 0?a:null,props:l}}return nu.Fragment=e,nu.jsx=t,nu.jsxs=t,nu}var X0;function dR(){return X0||(X0=1,$m.exports=fR()),$m.exports}var R=dR(),Km={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0;function mR(){if(W0)return xe;W0=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),b=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=b&&N[b]||N["@@iterator"],typeof N=="function"?N:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,W={};function F(N,J,le){this.props=N,this.context=J,this.refs=W,this.updater=le||j}F.prototype.isReactComponent={},F.prototype.setState=function(N,J){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,J,"setState")},F.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function ee(){}ee.prototype=F.prototype;function ie(N,J,le){this.props=N,this.context=J,this.refs=W,this.updater=le||j}var ne=ie.prototype=new ee;ne.constructor=ie,G(ne,F.prototype),ne.isPureReactComponent=!0;var fe=Array.isArray,ce={H:null,A:null,T:null,S:null,V:null},Ce=Object.prototype.hasOwnProperty;function D(N,J,le,re,ge,De){return le=De.ref,{$$typeof:i,type:N,key:J,ref:le!==void 0?le:null,props:De}}function w(N,J){return D(N.type,J,void 0,void 0,void 0,N.props)}function C(N){return typeof N=="object"&&N!==null&&N.$$typeof===i}function P(N){var J={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(le){return J[le]})}var k=/\/+/g;function V(N,J){return typeof N=="object"&&N!==null&&N.key!=null?P(""+N.key):J.toString(36)}function x(){}function Bt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(x,x):(N.status="pending",N.then(function(J){N.status==="pending"&&(N.status="fulfilled",N.value=J)},function(J){N.status==="pending"&&(N.status="rejected",N.reason=J)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ht(N,J,le,re,ge){var De=typeof N;(De==="undefined"||De==="boolean")&&(N=null);var Se=!1;if(N===null)Se=!0;else switch(De){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(N.$$typeof){case i:case e:Se=!0;break;case E:return Se=N._init,ht(Se(N._payload),J,le,re,ge)}}if(Se)return ge=ge(N),Se=re===""?"."+V(N,0):re,fe(ge)?(le="",Se!=null&&(le=Se.replace(k,"$&/")+"/"),ht(ge,J,le,"",function(Qn){return Qn})):ge!=null&&(C(ge)&&(ge=w(ge,le+(ge.key==null||N&&N.key===ge.key?"":(""+ge.key).replace(k,"$&/")+"/")+Se)),J.push(ge)),1;Se=0;var kt=re===""?".":re+":";if(fe(N))for(var it=0;it<N.length;it++)re=N[it],De=kt+V(re,it),Se+=ht(re,J,le,De,ge);else if(it=S(N),typeof it=="function")for(N=it.call(N),it=0;!(re=N.next()).done;)re=re.value,De=kt+V(re,it++),Se+=ht(re,J,le,De,ge);else if(De==="object"){if(typeof N.then=="function")return ht(Bt(N),J,le,re,ge);throw J=String(N),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Se}function $(N,J,le){if(N==null)return N;var re=[],ge=0;return ht(N,re,"","",function(De){return J.call(le,De,ge++)}),re}function oe(N){if(N._status===-1){var J=N._result;J=J(),J.then(function(le){(N._status===0||N._status===-1)&&(N._status=1,N._result=le)},function(le){(N._status===0||N._status===-1)&&(N._status=2,N._result=le)}),N._status===-1&&(N._status=0,N._result=J)}if(N._status===1)return N._result.default;throw N._result}var pe=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function qe(){}return xe.Children={map:$,forEach:function(N,J,le){$(N,function(){J.apply(this,arguments)},le)},count:function(N){var J=0;return $(N,function(){J++}),J},toArray:function(N){return $(N,function(J){return J})||[]},only:function(N){if(!C(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},xe.Component=F,xe.Fragment=t,xe.Profiler=a,xe.PureComponent=ie,xe.StrictMode=r,xe.Suspense=p,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ce,xe.__COMPILER_RUNTIME={__proto__:null,c:function(N){return ce.H.useMemoCache(N)}},xe.cache=function(N){return function(){return N.apply(null,arguments)}},xe.cloneElement=function(N,J,le){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var re=G({},N.props),ge=N.key,De=void 0;if(J!=null)for(Se in J.ref!==void 0&&(De=void 0),J.key!==void 0&&(ge=""+J.key),J)!Ce.call(J,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&J.ref===void 0||(re[Se]=J[Se]);var Se=arguments.length-2;if(Se===1)re.children=le;else if(1<Se){for(var kt=Array(Se),it=0;it<Se;it++)kt[it]=arguments[it+2];re.children=kt}return D(N.type,ge,void 0,void 0,De,re)},xe.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},xe.createElement=function(N,J,le){var re,ge={},De=null;if(J!=null)for(re in J.key!==void 0&&(De=""+J.key),J)Ce.call(J,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(ge[re]=J[re]);var Se=arguments.length-2;if(Se===1)ge.children=le;else if(1<Se){for(var kt=Array(Se),it=0;it<Se;it++)kt[it]=arguments[it+2];ge.children=kt}if(N&&N.defaultProps)for(re in Se=N.defaultProps,Se)ge[re]===void 0&&(ge[re]=Se[re]);return D(N,De,void 0,void 0,null,ge)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(N){return{$$typeof:m,render:N}},xe.isValidElement=C,xe.lazy=function(N){return{$$typeof:E,_payload:{_status:-1,_result:N},_init:oe}},xe.memo=function(N,J){return{$$typeof:g,type:N,compare:J===void 0?null:J}},xe.startTransition=function(N){var J=ce.T,le={};ce.T=le;try{var re=N(),ge=ce.S;ge!==null&&ge(le,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then(qe,pe)}catch(De){pe(De)}finally{ce.T=J}},xe.unstable_useCacheRefresh=function(){return ce.H.useCacheRefresh()},xe.use=function(N){return ce.H.use(N)},xe.useActionState=function(N,J,le){return ce.H.useActionState(N,J,le)},xe.useCallback=function(N,J){return ce.H.useCallback(N,J)},xe.useContext=function(N){return ce.H.useContext(N)},xe.useDebugValue=function(){},xe.useDeferredValue=function(N,J){return ce.H.useDeferredValue(N,J)},xe.useEffect=function(N,J,le){var re=ce.H;if(typeof le=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return re.useEffect(N,J)},xe.useId=function(){return ce.H.useId()},xe.useImperativeHandle=function(N,J,le){return ce.H.useImperativeHandle(N,J,le)},xe.useInsertionEffect=function(N,J){return ce.H.useInsertionEffect(N,J)},xe.useLayoutEffect=function(N,J){return ce.H.useLayoutEffect(N,J)},xe.useMemo=function(N,J){return ce.H.useMemo(N,J)},xe.useOptimistic=function(N,J){return ce.H.useOptimistic(N,J)},xe.useReducer=function(N,J,le){return ce.H.useReducer(N,J,le)},xe.useRef=function(N){return ce.H.useRef(N)},xe.useState=function(N){return ce.H.useState(N)},xe.useSyncExternalStore=function(N,J,le){return ce.H.useSyncExternalStore(N,J,le)},xe.useTransition=function(){return ce.H.useTransition()},xe.version="19.1.0",xe}var J0;function Tg(){return J0||(J0=1,Km.exports=mR()),Km.exports}var ae=Tg();const gf=Ub(ae),pR=hR({__proto__:null,default:gf},[ae]);var Ym={exports:{}},iu={},Qm={exports:{}},Xm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function gR(){return Z0||(Z0=1,function(i){function e($,oe){var pe=$.length;$.push(oe);e:for(;0<pe;){var qe=pe-1>>>1,N=$[qe];if(0<a(N,oe))$[qe]=oe,$[pe]=N,pe=qe;else break e}}function t($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var oe=$[0],pe=$.pop();if(pe!==oe){$[0]=pe;e:for(var qe=0,N=$.length,J=N>>>1;qe<J;){var le=2*(qe+1)-1,re=$[le],ge=le+1,De=$[ge];if(0>a(re,pe))ge<N&&0>a(De,re)?($[qe]=De,$[ge]=pe,qe=ge):($[qe]=re,$[le]=pe,qe=le);else if(ge<N&&0>a(De,pe))$[qe]=De,$[ge]=pe,qe=ge;else break e}}return oe}function a($,oe){var pe=$.sortIndex-oe.sortIndex;return pe!==0?pe:$.id-oe.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,m=c.now();i.unstable_now=function(){return c.now()-m}}var p=[],g=[],E=1,b=null,S=3,j=!1,G=!1,W=!1,F=!1,ee=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;function fe($){for(var oe=t(g);oe!==null;){if(oe.callback===null)r(g);else if(oe.startTime<=$)r(g),oe.sortIndex=oe.expirationTime,e(p,oe);else break;oe=t(g)}}function ce($){if(W=!1,fe($),!G)if(t(p)!==null)G=!0,Ce||(Ce=!0,V());else{var oe=t(g);oe!==null&&ht(ce,oe.startTime-$)}}var Ce=!1,D=-1,w=5,C=-1;function P(){return F?!0:!(i.unstable_now()-C<w)}function k(){if(F=!1,Ce){var $=i.unstable_now();C=$;var oe=!0;try{e:{G=!1,W&&(W=!1,ie(D),D=-1),j=!0;var pe=S;try{t:{for(fe($),b=t(p);b!==null&&!(b.expirationTime>$&&P());){var qe=b.callback;if(typeof qe=="function"){b.callback=null,S=b.priorityLevel;var N=qe(b.expirationTime<=$);if($=i.unstable_now(),typeof N=="function"){b.callback=N,fe($),oe=!0;break t}b===t(p)&&r(p),fe($)}else r(p);b=t(p)}if(b!==null)oe=!0;else{var J=t(g);J!==null&&ht(ce,J.startTime-$),oe=!1}}break e}finally{b=null,S=pe,j=!1}oe=void 0}}finally{oe?V():Ce=!1}}}var V;if(typeof ne=="function")V=function(){ne(k)};else if(typeof MessageChannel<"u"){var x=new MessageChannel,Bt=x.port2;x.port1.onmessage=k,V=function(){Bt.postMessage(null)}}else V=function(){ee(k,0)};function ht($,oe){D=ee(function(){$(i.unstable_now())},oe)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function($){$.callback=null},i.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<$?Math.floor(1e3/$):5},i.unstable_getCurrentPriorityLevel=function(){return S},i.unstable_next=function($){switch(S){case 1:case 2:case 3:var oe=3;break;default:oe=S}var pe=S;S=oe;try{return $()}finally{S=pe}},i.unstable_requestPaint=function(){F=!0},i.unstable_runWithPriority=function($,oe){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var pe=S;S=$;try{return oe()}finally{S=pe}},i.unstable_scheduleCallback=function($,oe,pe){var qe=i.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?qe+pe:qe):pe=qe,$){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=pe+N,$={id:E++,callback:oe,priorityLevel:$,startTime:pe,expirationTime:N,sortIndex:-1},pe>qe?($.sortIndex=pe,e(g,$),t(p)===null&&$===t(g)&&(W?(ie(D),D=-1):W=!0,ht(ce,pe-qe))):($.sortIndex=N,e(p,$),G||j||(G=!0,Ce||(Ce=!0,V()))),$},i.unstable_shouldYield=P,i.unstable_wrapCallback=function($){var oe=S;return function(){var pe=S;S=oe;try{return $.apply(this,arguments)}finally{S=pe}}}}(Xm)),Xm}var eE;function yR(){return eE||(eE=1,Qm.exports=gR()),Qm.exports}var Wm={exports:{}},Zt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tE;function vR(){if(tE)return Zt;tE=1;var i=Tg();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var r={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,E){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:b==null?null:""+b,children:p,containerInfo:g,implementation:E}}var c=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Zt.createPortal=function(p,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,E)},Zt.flushSync=function(p){var g=c.T,E=r.p;try{if(c.T=null,r.p=2,p)return p()}finally{c.T=g,r.p=E,r.d.f()}},Zt.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(p,g))},Zt.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Zt.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var E=g.as,b=m(E,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,j=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?r.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:j}):E==="script"&&r.d.X(p,{crossOrigin:b,integrity:S,fetchPriority:j,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Zt.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=m(g.as,g.crossOrigin);r.d.M(p,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(p)},Zt.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,b=m(E,g.crossOrigin);r.d.L(p,E,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Zt.preloadModule=function(p,g){if(typeof p=="string")if(g){var E=m(g.as,g.crossOrigin);r.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(p)},Zt.requestFormReset=function(p){r.d.r(p)},Zt.unstable_batchedUpdates=function(p,g){return p(g)},Zt.useFormState=function(p,g,E){return c.H.useFormState(p,g,E)},Zt.useFormStatus=function(){return c.H.useHostTransitionStatus()},Zt.version="19.1.0",Zt}var nE;function jb(){if(nE)return Wm.exports;nE=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Wm.exports=vR(),Wm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iE;function _R(){if(iE)return iu;iE=1;var i=yR(),e=Tg(),t=jb();function r(n){var s="https://react.dev/errors/"+n;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var s=n,o=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(o=s.return),n=s.return;while(n)}return s.tag===3?o:null}function c(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function m(n){if(l(n)!==n)throw Error(r(188))}function p(n){var s=n.alternate;if(!s){if(s=l(n),s===null)throw Error(r(188));return s!==n?null:n}for(var o=n,u=s;;){var f=o.return;if(f===null)break;var d=f.alternate;if(d===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===o)return m(f),n;if(d===u)return m(f),s;d=d.sibling}throw Error(r(188))}if(o.return!==u.return)o=f,u=d;else{for(var _=!1,T=f.child;T;){if(T===o){_=!0,o=f,u=d;break}if(T===u){_=!0,u=f,o=d;break}T=T.sibling}if(!_){for(T=d.child;T;){if(T===o){_=!0,o=d,u=f;break}if(T===u){_=!0,u=d,o=f;break}T=T.sibling}if(!_)throw Error(r(189))}}if(o.alternate!==u)throw Error(r(190))}if(o.tag!==3)throw Error(r(188));return o.stateNode.current===o?n:s}function g(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n;for(n=n.child;n!==null;){if(s=g(n),s!==null)return s;n=n.sibling}return null}var E=Object.assign,b=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),ee=Symbol.for("react.provider"),ie=Symbol.for("react.consumer"),ne=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),Ce=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),P=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function V(n){return n===null||typeof n!="object"?null:(n=k&&n[k]||n["@@iterator"],typeof n=="function"?n:null)}var x=Symbol.for("react.client.reference");function Bt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===x?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case G:return"Fragment";case F:return"Profiler";case W:return"StrictMode";case ce:return"Suspense";case Ce:return"SuspenseList";case C:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case j:return"Portal";case ne:return(n.displayName||"Context")+".Provider";case ie:return(n._context.displayName||"Context")+".Consumer";case fe:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case D:return s=n.displayName||null,s!==null?s:Bt(n.type)||"Memo";case w:s=n._payload,n=n._init;try{return Bt(n(s))}catch{}}return null}var ht=Array.isArray,$=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe={pending:!1,data:null,method:null,action:null},qe=[],N=-1;function J(n){return{current:n}}function le(n){0>N||(n.current=qe[N],qe[N]=null,N--)}function re(n,s){N++,qe[N]=n.current,n.current=s}var ge=J(null),De=J(null),Se=J(null),kt=J(null);function it(n,s){switch(re(Se,s),re(De,n),re(ge,null),s.nodeType){case 9:case 11:n=(n=s.documentElement)&&(n=n.namespaceURI)?A0(n):0;break;default:if(n=s.tagName,s=s.namespaceURI)s=A0(s),n=S0(s,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}le(ge),re(ge,n)}function Qn(){le(ge),le(De),le(Se)}function fr(n){n.memoizedState!==null&&re(kt,n);var s=ge.current,o=S0(s,n.type);s!==o&&(re(De,n),re(ge,o))}function Ri(n){De.current===n&&(le(ge),le(De)),kt.current===n&&(le(kt),Wl._currentValue=pe)}var gs=Object.prototype.hasOwnProperty,ys=i.unstable_scheduleCallback,vs=i.unstable_cancelCallback,Yo=i.unstable_shouldYield,Ku=i.unstable_requestPaint,wn=i.unstable_now,$f=i.unstable_getCurrentPriorityLevel,Qo=i.unstable_ImmediatePriority,ga=i.unstable_UserBlockingPriority,_s=i.unstable_NormalPriority,Kf=i.unstable_LowPriority,ya=i.unstable_IdlePriority,Xo=i.log,Yu=i.unstable_setDisableYieldValue,ft=null,Ye=null;function mn(n){if(typeof Xo=="function"&&Yu(n),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(ft,n)}catch{}}var Wt=Math.clz32?Math.clz32:Es,Qu=Math.log,Yf=Math.LN2;function Es(n){return n>>>=0,n===0?32:31-(Qu(n)/Yf|0)|0}var Ts=256,bs=4194304;function zn(n){var s=n&42;if(s!==0)return s;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function va(n,s,o){var u=n.pendingLanes;if(u===0)return 0;var f=0,d=n.suspendedLanes,_=n.pingedLanes;n=n.warmLanes;var T=u&134217727;return T!==0?(u=T&~d,u!==0?f=zn(u):(_&=T,_!==0?f=zn(_):o||(o=T&~n,o!==0&&(f=zn(o))))):(T=u&~d,T!==0?f=zn(T):_!==0?f=zn(_):o||(o=u&~n,o!==0&&(f=zn(o)))),f===0?0:s!==0&&s!==f&&(s&d)===0&&(d=f&-f,o=s&-s,d>=o||d===32&&(o&4194048)!==0)?s:f}function As(n,s){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&s)===0}function Wo(n,s){switch(n){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jo(){var n=Ts;return Ts<<=1,(Ts&4194048)===0&&(Ts=256),n}function Zo(){var n=bs;return bs<<=1,(bs&62914560)===0&&(bs=4194304),n}function Ci(n){for(var s=[],o=0;31>o;o++)s.push(n);return s}function xi(n,s){n.pendingLanes|=s,s!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function el(n,s,o,u,f,d){var _=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var T=n.entanglements,I=n.expirationTimes,z=n.hiddenUpdates;for(o=_&~o;0<o;){var K=31-Wt(o),Q=1<<K;T[K]=0,I[K]=-1;var B=z[K];if(B!==null)for(z[K]=null,K=0;K<B.length;K++){var H=B[K];H!==null&&(H.lane&=-536870913)}o&=~Q}u!==0&&Xn(n,u,0),d!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=d&~(_&~s))}function Xn(n,s,o){n.pendingLanes|=s,n.suspendedLanes&=~s;var u=31-Wt(s);n.entangledLanes|=s,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194090}function tl(n,s){var o=n.entangledLanes|=s;for(n=n.entanglements;o;){var u=31-Wt(o),f=1<<u;f&s|n[u]&s&&(n[u]|=s),o&=~f}}function dr(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function _a(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function mr(){var n=oe.p;return n!==0?n:(n=window.event,n===void 0?32:H0(n.type))}function Xu(n,s){var o=oe.p;try{return oe.p=n,s()}finally{oe.p=o}}var at=Math.random().toString(36).slice(2),It="__reactFiber$"+at,Et="__reactProps$"+at,In="__reactContainer$"+at,nl="__reactEvents$"+at,Qf="__reactListeners$"+at,pr="__reactHandles$"+at,Wu="__reactResources$"+at,Ss="__reactMarker$"+at;function gr(n){delete n[It],delete n[Et],delete n[nl],delete n[Qf],delete n[pr]}function Ni(n){var s=n[It];if(s)return s;for(var o=n.parentNode;o;){if(s=o[In]||o[It]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(n=C0(n);n!==null;){if(o=n[It])return o;n=C0(n)}return s}n=o,o=n.parentNode}return null}function Wn(n){if(n=n[It]||n[In]){var s=n.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return n}return null}function Jn(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n.stateNode;throw Error(r(33))}function sn(n){var s=n[Wu];return s||(s=n[Wu]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function pt(n){n[Ss]=!0}var il=new Set,Ea={};function Bn(n,s){Oi(n,s),Oi(n+"Capture",s)}function Oi(n,s){for(Ea[n]=s,n=0;n<s.length;n++)il.add(s[n])}var Ju=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zu={},ws={};function ec(n){return gs.call(ws,n)?!0:gs.call(Zu,n)?!1:Ju.test(n)?ws[n]=!0:(Zu[n]=!0,!1)}function yr(n,s,o){if(ec(s))if(o===null)n.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(s);return}}n.setAttribute(s,""+o)}}function Zn(n,s,o){if(o===null)n.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttribute(s,""+o)}}function Ft(n,s,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(s,o,""+u)}}var Is,tc;function Di(n){if(Is===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Is=s&&s[1]||"",tc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Is+n+tc}var Ta=!1;function ba(n,s){if(!n||Ta)return"";Ta=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(H){var B=H}Reflect.construct(n,[],Q)}else{try{Q.call()}catch(H){B=H}n.call(Q.prototype)}}else{try{throw Error()}catch(H){B=H}(Q=n())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(H){if(H&&B&&typeof H.stack=="string")return[H.stack,B.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=u.DetermineComponentFrameRoot(),_=d[0],T=d[1];if(_&&T){var I=_.split(`
`),z=T.split(`
`);for(f=u=0;u<I.length&&!I[u].includes("DetermineComponentFrameRoot");)u++;for(;f<z.length&&!z[f].includes("DetermineComponentFrameRoot");)f++;if(u===I.length||f===z.length)for(u=I.length-1,f=z.length-1;1<=u&&0<=f&&I[u]!==z[f];)f--;for(;1<=u&&0<=f;u--,f--)if(I[u]!==z[f]){if(u!==1||f!==1)do if(u--,f--,0>f||I[u]!==z[f]){var K=`
`+I[u].replace(" at new "," at ");return n.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",n.displayName)),K}while(1<=u&&0<=f);break}}}finally{Ta=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?Di(o):""}function rl(n){switch(n.tag){case 26:case 27:case 5:return Di(n.type);case 16:return Di("Lazy");case 13:return Di("Suspense");case 19:return Di("SuspenseList");case 0:case 15:return ba(n.type,!1);case 11:return ba(n.type.render,!1);case 1:return ba(n.type,!0);case 31:return Di("Activity");default:return""}}function Aa(n){try{var s="";do s+=rl(n),n=n.return;while(n);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function an(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function sl(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Xf(n){var s=sl(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),u=""+n[s];if(!n.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,d=o.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return f.call(this)},set:function(_){u=""+_,d.call(this,_)}}),Object.defineProperty(n,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(_){u=""+_},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function Sa(n){n._valueTracker||(n._valueTracker=Xf(n))}function al(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return n&&(u=sl(n)?n.checked?"true":"false":n.value),n=u,n!==o?(s.setValue(n),!0):!1}function Rs(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Wf=/[\n"\\]/g;function Tt(n){return n.replace(Wf,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function pn(n,s,o,u,f,d,_,T){n.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?n.type=_:n.removeAttribute("type"),s!=null?_==="number"?(s===0&&n.value===""||n.value!=s)&&(n.value=""+an(s)):n.value!==""+an(s)&&(n.value=""+an(s)):_!=="submit"&&_!=="reset"||n.removeAttribute("value"),s!=null?vr(n,_,an(s)):o!=null?vr(n,_,an(o)):u!=null&&n.removeAttribute("value"),f==null&&d!=null&&(n.defaultChecked=!!d),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.name=""+an(T):n.removeAttribute("name")}function Cs(n,s,o,u,f,d,_,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),s!=null||o!=null){if(!(d!=="submit"&&d!=="reset"||s!=null))return;o=o!=null?""+an(o):"",s=s!=null?""+an(s):o,T||s===n.value||(n.value=s),n.defaultValue=s}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=T?n.checked:!!u,n.defaultChecked=!!u,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(n.name=_)}function vr(n,s,o){s==="number"&&Rs(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function Pi(n,s,o,u){if(n=n.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=s.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&u&&(n[o].defaultSelected=!0)}else{for(o=""+an(o),s=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}s!==null||n[f].disabled||(s=n[f])}s!==null&&(s.selected=!0)}}function We(n,s,o){if(s!=null&&(s=""+an(s),s!==n.value&&(n.value=s),o==null)){n.defaultValue!==s&&(n.defaultValue=s);return}n.defaultValue=o!=null?""+an(o):""}function xs(n,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(r(92));if(ht(u)){if(1<u.length)throw Error(r(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=an(s),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function Rn(n,s){if(s){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=s;return}}n.textContent=s}var Ns=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nc(n,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(s,""):s==="float"?n.cssFloat="":n[s]="":u?n.setProperty(s,o):typeof o!="number"||o===0||Ns.has(s)?s==="float"?n.cssFloat=o:n[s]=(""+o).trim():n[s]=o+"px"}function ol(n,s,o){if(s!=null&&typeof s!="object")throw Error(r(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var f in s)u=s[f],s.hasOwnProperty(f)&&o[f]!==u&&nc(n,f,u)}else for(var d in s)s.hasOwnProperty(d)&&nc(n,d,s[d])}function ll(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wa(n){return Zf.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var ki=null;function Cn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Mi=null,Vi=null;function ul(n){var s=Wn(n);if(s&&(n=s.stateNode)){var o=n[Et]||null;e:switch(n=s.stateNode,s.type){case"input":if(pn(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Tt(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==n&&u.form===n.form){var f=u[Et]||null;if(!f)throw Error(r(90));pn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===n.form&&al(u)}break e;case"textarea":We(n,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Pi(n,!!o.multiple,s,!1)}}}var ei=!1;function ic(n,s,o){if(ei)return n(s,o);ei=!0;try{var u=n(s);return u}finally{if(ei=!1,(Mi!==null||Vi!==null)&&(Xc(),Mi&&(s=Mi,n=Vi,Vi=Mi=null,ul(s),n)))for(s=0;s<n.length;s++)ul(n[s])}}function Os(n,s){var o=n.stateNode;if(o===null)return null;var u=o[Et]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(r(231,s,typeof o));return o}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xn=!1;if(Fn)try{var Ds={};Object.defineProperty(Ds,"passive",{get:function(){xn=!0}}),window.addEventListener("test",Ds,Ds),window.removeEventListener("test",Ds,Ds)}catch{xn=!1}var ti=null,_r=null,Li=null;function cl(){if(Li)return Li;var n,s=_r,o=s.length,u,f="value"in ti?ti.value:ti.textContent,d=f.length;for(n=0;n<o&&s[n]===f[n];n++);var _=o-n;for(u=1;u<=_&&s[o-u]===f[d-u];u++);return Li=f.slice(n,1<u?1-u:void 0)}function ni(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function ii(){return!0}function hl(){return!1}function Mt(n){function s(o,u,f,d,_){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(o=n[T],this[T]=o?o(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ii:hl,this.isPropagationStopped=hl,this}return E(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ii)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ii)},persist:function(){},isPersistent:ii}),s}var $e={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ia=Mt($e),Ps=E({},$e,{view:0,detail:0}),rc=Mt(Ps),Ra,Ca,ri,ks=E({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ls,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ri&&(ri&&n.type==="mousemove"?(Ra=n.screenX-ri.screenX,Ca=n.screenY-ri.screenY):Ca=Ra=0,ri=n),Ra)},movementY:function(n){return"movementY"in n?n.movementY:Ca}}),Nn=Mt(ks),sc=E({},ks,{dataTransfer:0}),ed=Mt(sc),Ms=E({},Ps,{relatedTarget:0}),xa=Mt(Ms),fl=E({},$e,{animationName:0,elapsedTime:0,pseudoElement:0}),Na=Mt(fl),ac=E({},$e,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Oa=Mt(ac),td=E({},$e,{data:0}),dl=Mt(td),Vs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ml(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=lc[n])?!!s[n]:!1}function Ls(){return ml}var uc=E({},Ps,{key:function(n){if(n.key){var s=Vs[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=ni(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?oc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ls,charCode:function(n){return n.type==="keypress"?ni(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ni(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Da=Mt(uc),cc=E({},ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pl=Mt(cc),Ui=E({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ls}),hc=Mt(Ui),fc=E({},$e,{propertyName:0,elapsedTime:0,pseudoElement:0}),dc=Mt(fc),mc=E({},ks,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Pa=Mt(mc),on=E({},$e,{newState:0,oldState:0}),pc=Mt(on),gc=[9,13,27,32],si=Fn&&"CompositionEvent"in window,h=null;Fn&&"documentMode"in document&&(h=document.documentMode);var y=Fn&&"TextEvent"in window&&!h,v=Fn&&(!si||h&&8<h&&11>=h),A=" ",L=!1;function q(n,s){switch(n){case"keyup":return gc.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function se(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var je=!1;function Rt(n,s){switch(n){case"compositionend":return se(s);case"keypress":return s.which!==32?null:(L=!0,A);case"textInput":return n=s.data,n===A&&L?null:n;default:return null}}function ze(n,s){if(je)return n==="compositionend"||!si&&q(n,s)?(n=cl(),Li=_r=ti=null,je=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return v&&s.locale!=="ko"?null:s.data;default:return null}}var Vt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ct(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!Vt[n.type]:s==="textarea"}function ji(n,s,o,u){Mi?Vi?Vi.push(u):Vi=[u]:Mi=u,s=nh(s,"onChange"),0<s.length&&(o=new Ia("onChange","change",null,o,u),n.push({event:o,listeners:s}))}var Ht=null,ai=null;function gl(n){v0(n,0)}function yc(n){var s=Jn(n);if(al(s))return n}function jy(n,s){if(n==="change")return s}var zy=!1;if(Fn){var nd;if(Fn){var id="oninput"in document;if(!id){var By=document.createElement("div");By.setAttribute("oninput","return;"),id=typeof By.oninput=="function"}nd=id}else nd=!1;zy=nd&&(!document.documentMode||9<document.documentMode)}function Fy(){Ht&&(Ht.detachEvent("onpropertychange",Hy),ai=Ht=null)}function Hy(n){if(n.propertyName==="value"&&yc(ai)){var s=[];ji(s,ai,n,Cn(n)),ic(gl,s)}}function Bw(n,s,o){n==="focusin"?(Fy(),Ht=s,ai=o,Ht.attachEvent("onpropertychange",Hy)):n==="focusout"&&Fy()}function Fw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return yc(ai)}function Hw(n,s){if(n==="click")return yc(s)}function qw(n,s){if(n==="input"||n==="change")return yc(s)}function Gw(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var gn=typeof Object.is=="function"?Object.is:Gw;function yl(n,s){if(gn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var o=Object.keys(n),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!gs.call(s,f)||!gn(n[f],s[f]))return!1}return!0}function qy(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Gy(n,s){var o=qy(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=s&&u>=s)return{node:o,offset:s-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=qy(o)}}function $y(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?$y(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function Ky(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var s=Rs(n.document);s instanceof n.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)n=s.contentWindow;else break;s=Rs(n.document)}return s}function rd(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}var $w=Fn&&"documentMode"in document&&11>=document.documentMode,ka=null,sd=null,vl=null,ad=!1;function Yy(n,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ad||ka==null||ka!==Rs(u)||(u=ka,"selectionStart"in u&&rd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),vl&&yl(vl,u)||(vl=u,u=nh(sd,"onSelect"),0<u.length&&(s=new Ia("onSelect","select",null,s,o),n.push({event:s,listeners:u}),s.target=ka)))}function Us(n,s){var o={};return o[n.toLowerCase()]=s.toLowerCase(),o["Webkit"+n]="webkit"+s,o["Moz"+n]="moz"+s,o}var Ma={animationend:Us("Animation","AnimationEnd"),animationiteration:Us("Animation","AnimationIteration"),animationstart:Us("Animation","AnimationStart"),transitionrun:Us("Transition","TransitionRun"),transitionstart:Us("Transition","TransitionStart"),transitioncancel:Us("Transition","TransitionCancel"),transitionend:Us("Transition","TransitionEnd")},od={},Qy={};Fn&&(Qy=document.createElement("div").style,"AnimationEvent"in window||(delete Ma.animationend.animation,delete Ma.animationiteration.animation,delete Ma.animationstart.animation),"TransitionEvent"in window||delete Ma.transitionend.transition);function js(n){if(od[n])return od[n];if(!Ma[n])return n;var s=Ma[n],o;for(o in s)if(s.hasOwnProperty(o)&&o in Qy)return od[n]=s[o];return n}var Xy=js("animationend"),Wy=js("animationiteration"),Jy=js("animationstart"),Kw=js("transitionrun"),Yw=js("transitionstart"),Qw=js("transitioncancel"),Zy=js("transitionend"),ev=new Map,ld="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ld.push("scrollEnd");function Hn(n,s){ev.set(n,s),Bn(s,[n])}var tv=new WeakMap;function On(n,s){if(typeof n=="object"&&n!==null){var o=tv.get(n);return o!==void 0?o:(s={value:n,source:s,stack:Aa(s)},tv.set(n,s),s)}return{value:n,source:s,stack:Aa(s)}}var Dn=[],Va=0,ud=0;function vc(){for(var n=Va,s=ud=Va=0;s<n;){var o=Dn[s];Dn[s++]=null;var u=Dn[s];Dn[s++]=null;var f=Dn[s];Dn[s++]=null;var d=Dn[s];if(Dn[s++]=null,u!==null&&f!==null){var _=u.pending;_===null?f.next=f:(f.next=_.next,_.next=f),u.pending=f}d!==0&&nv(o,f,d)}}function _c(n,s,o,u){Dn[Va++]=n,Dn[Va++]=s,Dn[Va++]=o,Dn[Va++]=u,ud|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function cd(n,s,o,u){return _c(n,s,o,u),Ec(n)}function La(n,s){return _c(n,null,null,s),Ec(n)}function nv(n,s,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var f=!1,d=n.return;d!==null;)d.childLanes|=o,u=d.alternate,u!==null&&(u.childLanes|=o),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(f=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,f&&s!==null&&(f=31-Wt(o),n=d.hiddenUpdates,u=n[f],u===null?n[f]=[s]:u.push(s),s.lane=o|536870912),d):null}function Ec(n){if(50<Hl)throw Hl=0,gm=null,Error(r(185));for(var s=n.return;s!==null;)n=s,s=n.return;return n.tag===3?n.stateNode:null}var Ua={};function Xw(n,s,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(n,s,o,u){return new Xw(n,s,o,u)}function hd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function zi(n,s){var o=n.alternate;return o===null?(o=yn(n.tag,s,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=s,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,s=n.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function iv(n,s){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=s,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,s=o.dependencies,n.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),n}function Tc(n,s,o,u,f,d){var _=0;if(u=n,typeof n=="function")hd(n)&&(_=1);else if(typeof n=="string")_=JI(n,o,ge.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case C:return n=yn(31,o,s,f),n.elementType=C,n.lanes=d,n;case G:return zs(o.children,f,d,s);case W:_=8,f|=24;break;case F:return n=yn(12,o,s,f|2),n.elementType=F,n.lanes=d,n;case ce:return n=yn(13,o,s,f),n.elementType=ce,n.lanes=d,n;case Ce:return n=yn(19,o,s,f),n.elementType=Ce,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ee:case ne:_=10;break e;case ie:_=9;break e;case fe:_=11;break e;case D:_=14;break e;case w:_=16,u=null;break e}_=29,o=Error(r(130,n===null?"null":typeof n,"")),u=null}return s=yn(_,o,s,f),s.elementType=n,s.type=u,s.lanes=d,s}function zs(n,s,o,u){return n=yn(7,n,u,s),n.lanes=o,n}function fd(n,s,o){return n=yn(6,n,null,s),n.lanes=o,n}function dd(n,s,o){return s=yn(4,n.children!==null?n.children:[],n.key,s),s.lanes=o,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}var ja=[],za=0,bc=null,Ac=0,Pn=[],kn=0,Bs=null,Bi=1,Fi="";function Fs(n,s){ja[za++]=Ac,ja[za++]=bc,bc=n,Ac=s}function rv(n,s,o){Pn[kn++]=Bi,Pn[kn++]=Fi,Pn[kn++]=Bs,Bs=n;var u=Bi;n=Fi;var f=32-Wt(u)-1;u&=~(1<<f),o+=1;var d=32-Wt(s)+f;if(30<d){var _=f-f%5;d=(u&(1<<_)-1).toString(32),u>>=_,f-=_,Bi=1<<32-Wt(s)+f|o<<f|u,Fi=d+n}else Bi=1<<d|o<<f|u,Fi=n}function md(n){n.return!==null&&(Fs(n,1),rv(n,1,0))}function pd(n){for(;n===bc;)bc=ja[--za],ja[za]=null,Ac=ja[--za],ja[za]=null;for(;n===Bs;)Bs=Pn[--kn],Pn[kn]=null,Fi=Pn[--kn],Pn[kn]=null,Bi=Pn[--kn],Pn[kn]=null}var ln=null,dt=null,Ge=!1,Hs=null,oi=!1,gd=Error(r(519));function qs(n){var s=Error(r(418,""));throw Tl(On(s,n)),gd}function sv(n){var s=n.stateNode,o=n.type,u=n.memoizedProps;switch(s[It]=n,s[Et]=u,o){case"dialog":Ve("cancel",s),Ve("close",s);break;case"iframe":case"object":case"embed":Ve("load",s);break;case"video":case"audio":for(o=0;o<Gl.length;o++)Ve(Gl[o],s);break;case"source":Ve("error",s);break;case"img":case"image":case"link":Ve("error",s),Ve("load",s);break;case"details":Ve("toggle",s);break;case"input":Ve("invalid",s),Cs(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Sa(s);break;case"select":Ve("invalid",s);break;case"textarea":Ve("invalid",s),xs(s,u.value,u.defaultValue,u.children),Sa(s)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||b0(s.textContent,o)?(u.popover!=null&&(Ve("beforetoggle",s),Ve("toggle",s)),u.onScroll!=null&&Ve("scroll",s),u.onScrollEnd!=null&&Ve("scrollend",s),u.onClick!=null&&(s.onclick=ih),s=!0):s=!1,s||qs(n)}function av(n){for(ln=n.return;ln;)switch(ln.tag){case 5:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:ln=ln.return}}function _l(n){if(n!==ln)return!1;if(!Ge)return av(n),Ge=!0,!1;var s=n.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||Dm(n.type,n.memoizedProps)),o=!o),o&&dt&&qs(n),av(n),s===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(s===0){dt=Gn(n.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;n=n.nextSibling}dt=null}}else s===27?(s=dt,Mr(n.type)?(n=Vm,Vm=null,dt=n):dt=s):dt=ln?Gn(n.stateNode.nextSibling):null;return!0}function El(){dt=ln=null,Ge=!1}function ov(){var n=Hs;return n!==null&&(fn===null?fn=n:fn.push.apply(fn,n),Hs=null),n}function Tl(n){Hs===null?Hs=[n]:Hs.push(n)}var yd=J(null),Gs=null,Hi=null;function Er(n,s,o){re(yd,s._currentValue),s._currentValue=o}function qi(n){n._currentValue=yd.current,le(yd)}function vd(n,s,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),n===o)break;n=n.return}}function _d(n,s,o,u){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var d=f.dependencies;if(d!==null){var _=f.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=f;for(var I=0;I<s.length;I++)if(T.context===s[I]){d.lanes|=o,T=d.alternate,T!==null&&(T.lanes|=o),vd(d.return,o,n),u||(_=null);break e}d=T.next}}else if(f.tag===18){if(_=f.return,_===null)throw Error(r(341));_.lanes|=o,d=_.alternate,d!==null&&(d.lanes|=o),vd(_,o,n),_=null}else _=f.child;if(_!==null)_.return=f;else for(_=f;_!==null;){if(_===n){_=null;break}if(f=_.sibling,f!==null){f.return=_.return,_=f;break}_=_.return}f=_}}function bl(n,s,o,u){n=null;for(var f=s,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var _=f.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var T=f.type;gn(f.pendingProps.value,_.value)||(n!==null?n.push(T):n=[T])}}else if(f===kt.current){if(_=f.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(Wl):n=[Wl])}f=f.return}n!==null&&_d(s,n,o,u),s.flags|=262144}function Sc(n){for(n=n.firstContext;n!==null;){if(!gn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function $s(n){Gs=n,Hi=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Jt(n){return lv(Gs,n)}function wc(n,s){return Gs===null&&$s(n),lv(n,s)}function lv(n,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Hi===null){if(n===null)throw Error(r(308));Hi=s,n.dependencies={lanes:0,firstContext:s},n.flags|=524288}else Hi=Hi.next=s;return o}var Ww=typeof AbortController<"u"?AbortController:function(){var n=[],s=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){s.aborted=!0,n.forEach(function(o){return o()})}},Jw=i.unstable_scheduleCallback,Zw=i.unstable_NormalPriority,xt={$$typeof:ne,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ed(){return{controller:new Ww,data:new Map,refCount:0}}function Al(n){n.refCount--,n.refCount===0&&Jw(Zw,function(){n.controller.abort()})}var Sl=null,Td=0,Ba=0,Fa=null;function eI(n,s){if(Sl===null){var o=Sl=[];Td=0,Ba=Am(),Fa={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Td++,s.then(uv,uv),s}function uv(){if(--Td===0&&Sl!==null){Fa!==null&&(Fa.status="fulfilled");var n=Sl;Sl=null,Ba=0,Fa=null;for(var s=0;s<n.length;s++)(0,n[s])()}}function tI(n,s){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return n.then(function(){u.status="fulfilled",u.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var cv=$.S;$.S=function(n,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&eI(n,s),cv!==null&&cv(n,s)};var Ks=J(null);function bd(){var n=Ks.current;return n!==null?n:rt.pooledCache}function Ic(n,s){s===null?re(Ks,Ks.current):re(Ks,s.pool)}function hv(){var n=bd();return n===null?null:{parent:xt._currentValue,pool:n}}var wl=Error(r(460)),fv=Error(r(474)),Rc=Error(r(542)),Ad={then:function(){}};function dv(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Cc(){}function mv(n,s,o){switch(o=n[o],o===void 0?n.push(s):o!==s&&(s.then(Cc,Cc),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,gv(n),n;default:if(typeof s.status=="string")s.then(Cc,Cc);else{if(n=rt,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=s,n.status="pending",n.then(function(u){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=u}},function(u){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,gv(n),n}throw Il=s,wl}}var Il=null;function pv(){if(Il===null)throw Error(r(459));var n=Il;return Il=null,n}function gv(n){if(n===wl||n===Rc)throw Error(r(483))}var Tr=!1;function Sd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wd(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function br(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Ar(n,s,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Qe&2)!==0){var f=u.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s,s=Ec(n),nv(n,null,o),s}return _c(n,u,s,o),Ec(n)}function Rl(n,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,tl(n,o)}}function Id(n,s){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,d=null;if(o=o.firstBaseUpdate,o!==null){do{var _={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};d===null?f=d=_:d=d.next=_,o=o.next}while(o!==null);d===null?f=d=s:d=d.next=s}else f=d=s;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=s:n.next=s,o.lastBaseUpdate=s}var Rd=!1;function Cl(){if(Rd){var n=Fa;if(n!==null)throw n}}function xl(n,s,o,u){Rd=!1;var f=n.updateQueue;Tr=!1;var d=f.firstBaseUpdate,_=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var I=T,z=I.next;I.next=null,_===null?d=z:_.next=z,_=I;var K=n.alternate;K!==null&&(K=K.updateQueue,T=K.lastBaseUpdate,T!==_&&(T===null?K.firstBaseUpdate=z:T.next=z,K.lastBaseUpdate=I))}if(d!==null){var Q=f.baseState;_=0,K=z=I=null,T=d;do{var B=T.lane&-536870913,H=B!==T.lane;if(H?(Be&B)===B:(u&B)===B){B!==0&&B===Ba&&(Rd=!0),K!==null&&(K=K.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Te=n,_e=T;B=s;var et=o;switch(_e.tag){case 1:if(Te=_e.payload,typeof Te=="function"){Q=Te.call(et,Q,B);break e}Q=Te;break e;case 3:Te.flags=Te.flags&-65537|128;case 0:if(Te=_e.payload,B=typeof Te=="function"?Te.call(et,Q,B):Te,B==null)break e;Q=E({},Q,B);break e;case 2:Tr=!0}}B=T.callback,B!==null&&(n.flags|=64,H&&(n.flags|=8192),H=f.callbacks,H===null?f.callbacks=[B]:H.push(B))}else H={lane:B,tag:T.tag,payload:T.payload,callback:T.callback,next:null},K===null?(z=K=H,I=Q):K=K.next=H,_|=B;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;H=T,T=H.next,H.next=null,f.lastBaseUpdate=H,f.shared.pending=null}}while(!0);K===null&&(I=Q),f.baseState=I,f.firstBaseUpdate=z,f.lastBaseUpdate=K,d===null&&(f.shared.lanes=0),Or|=_,n.lanes=_,n.memoizedState=Q}}function yv(n,s){if(typeof n!="function")throw Error(r(191,n));n.call(s)}function vv(n,s){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)yv(o[n],s)}var Ha=J(null),xc=J(0);function _v(n,s){n=Wi,re(xc,n),re(Ha,s),Wi=n|s.baseLanes}function Cd(){re(xc,Wi),re(Ha,Ha.current)}function xd(){Wi=xc.current,le(Ha),le(xc)}var Sr=0,Ne=null,Je=null,bt=null,Nc=!1,qa=!1,Ys=!1,Oc=0,Nl=0,Ga=null,nI=0;function gt(){throw Error(r(321))}function Nd(n,s){if(s===null)return!1;for(var o=0;o<s.length&&o<n.length;o++)if(!gn(n[o],s[o]))return!1;return!0}function Od(n,s,o,u,f,d){return Sr=d,Ne=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,$.H=n===null||n.memoizedState===null?n_:i_,Ys=!1,d=o(u,f),Ys=!1,qa&&(d=Tv(s,o,u,f)),Ev(n),d}function Ev(n){$.H=Lc;var s=Je!==null&&Je.next!==null;if(Sr=0,bt=Je=Ne=null,Nc=!1,Nl=0,Ga=null,s)throw Error(r(300));n===null||Lt||(n=n.dependencies,n!==null&&Sc(n)&&(Lt=!0))}function Tv(n,s,o,u){Ne=n;var f=0;do{if(qa&&(Ga=null),Nl=0,qa=!1,25<=f)throw Error(r(301));if(f+=1,bt=Je=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}$.H=uI,d=s(o,u)}while(qa);return d}function iI(){var n=$.H,s=n.useState()[0];return s=typeof s.then=="function"?Ol(s):s,n=n.useState()[0],(Je!==null?Je.memoizedState:null)!==n&&(Ne.flags|=1024),s}function Dd(){var n=Oc!==0;return Oc=0,n}function Pd(n,s,o){s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~o}function kd(n){if(Nc){for(n=n.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}Nc=!1}Sr=0,bt=Je=Ne=null,qa=!1,Nl=Oc=0,Ga=null}function cn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?Ne.memoizedState=bt=n:bt=bt.next=n,bt}function At(){if(Je===null){var n=Ne.alternate;n=n!==null?n.memoizedState:null}else n=Je.next;var s=bt===null?Ne.memoizedState:bt.next;if(s!==null)bt=s,Je=n;else{if(n===null)throw Ne.alternate===null?Error(r(467)):Error(r(310));Je=n,n={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},bt===null?Ne.memoizedState=bt=n:bt=bt.next=n}return bt}function Md(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ol(n){var s=Nl;return Nl+=1,Ga===null&&(Ga=[]),n=mv(Ga,n,s),s=Ne,(bt===null?s.memoizedState:bt.next)===null&&(s=s.alternate,$.H=s===null||s.memoizedState===null?n_:i_),n}function Dc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Ol(n);if(n.$$typeof===ne)return Jt(n)}throw Error(r(438,String(n)))}function Vd(n){var s=null,o=Ne.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=Ne.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=Md(),Ne.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(n),u=0;u<n;u++)o[u]=P;return s.index++,o}function Gi(n,s){return typeof s=="function"?s(n):s}function Pc(n){var s=At();return Ld(s,Je,n)}function Ld(n,s,o){var u=n.queue;if(u===null)throw Error(r(311));u.lastRenderedReducer=o;var f=n.baseQueue,d=u.pending;if(d!==null){if(f!==null){var _=f.next;f.next=d.next,d.next=_}s.baseQueue=f=d,u.pending=null}if(d=n.baseState,f===null)n.memoizedState=d;else{s=f.next;var T=_=null,I=null,z=s,K=!1;do{var Q=z.lane&-536870913;if(Q!==z.lane?(Be&Q)===Q:(Sr&Q)===Q){var B=z.revertLane;if(B===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),Q===Ba&&(K=!0);else if((Sr&B)===B){z=z.next,B===Ba&&(K=!0);continue}else Q={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},I===null?(T=I=Q,_=d):I=I.next=Q,Ne.lanes|=B,Or|=B;Q=z.action,Ys&&o(d,Q),d=z.hasEagerState?z.eagerState:o(d,Q)}else B={lane:Q,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},I===null?(T=I=B,_=d):I=I.next=B,Ne.lanes|=Q,Or|=Q;z=z.next}while(z!==null&&z!==s);if(I===null?_=d:I.next=T,!gn(d,n.memoizedState)&&(Lt=!0,K&&(o=Fa,o!==null)))throw o;n.memoizedState=d,n.baseState=_,n.baseQueue=I,u.lastRenderedState=d}return f===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function Ud(n){var s=At(),o=s.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=n;var u=o.dispatch,f=o.pending,d=s.memoizedState;if(f!==null){o.pending=null;var _=f=f.next;do d=n(d,_.action),_=_.next;while(_!==f);gn(d,s.memoizedState)||(Lt=!0),s.memoizedState=d,s.baseQueue===null&&(s.baseState=d),o.lastRenderedState=d}return[d,u]}function bv(n,s,o){var u=Ne,f=At(),d=Ge;if(d){if(o===void 0)throw Error(r(407));o=o()}else o=s();var _=!gn((Je||f).memoizedState,o);_&&(f.memoizedState=o,Lt=!0),f=f.queue;var T=wv.bind(null,u,f,n);if(Dl(2048,8,T,[n]),f.getSnapshot!==s||_||bt!==null&&bt.memoizedState.tag&1){if(u.flags|=2048,$a(9,kc(),Sv.bind(null,u,f,o,s),null),rt===null)throw Error(r(349));d||(Sr&124)!==0||Av(u,s,o)}return o}function Av(n,s,o){n.flags|=16384,n={getSnapshot:s,value:o},s=Ne.updateQueue,s===null?(s=Md(),Ne.updateQueue=s,s.stores=[n]):(o=s.stores,o===null?s.stores=[n]:o.push(n))}function Sv(n,s,o,u){s.value=o,s.getSnapshot=u,Iv(s)&&Rv(n)}function wv(n,s,o){return o(function(){Iv(s)&&Rv(n)})}function Iv(n){var s=n.getSnapshot;n=n.value;try{var o=s();return!gn(n,o)}catch{return!0}}function Rv(n){var s=La(n,2);s!==null&&bn(s,n,2)}function jd(n){var s=cn();if(typeof n=="function"){var o=n;if(n=o(),Ys){mn(!0);try{o()}finally{mn(!1)}}}return s.memoizedState=s.baseState=n,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:n},s}function Cv(n,s,o,u){return n.baseState=o,Ld(n,Je,typeof u=="function"?u:Gi)}function rI(n,s,o,u,f){if(Vc(n))throw Error(r(485));if(n=s.action,n!==null){var d={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};$.T!==null?o(!0):d.isTransition=!1,u(d),o=s.pending,o===null?(d.next=s.pending=d,xv(s,d)):(d.next=o.next,s.pending=o.next=d)}}function xv(n,s){var o=s.action,u=s.payload,f=n.state;if(s.isTransition){var d=$.T,_={};$.T=_;try{var T=o(f,u),I=$.S;I!==null&&I(_,T),Nv(n,s,T)}catch(z){zd(n,s,z)}finally{$.T=d}}else try{d=o(f,u),Nv(n,s,d)}catch(z){zd(n,s,z)}}function Nv(n,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Ov(n,s,u)},function(u){return zd(n,s,u)}):Ov(n,s,o)}function Ov(n,s,o){s.status="fulfilled",s.value=o,Dv(s),n.state=o,s=n.pending,s!==null&&(o=s.next,o===s?n.pending=null:(o=o.next,s.next=o,xv(n,o)))}function zd(n,s,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,Dv(s),s=s.next;while(s!==u)}n.action=null}function Dv(n){n=n.listeners;for(var s=0;s<n.length;s++)(0,n[s])()}function Pv(n,s){return s}function kv(n,s){if(Ge){var o=rt.formState;if(o!==null){e:{var u=Ne;if(Ge){if(dt){t:{for(var f=dt,d=oi;f.nodeType!==8;){if(!d){f=null;break t}if(f=Gn(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){dt=Gn(f.nextSibling),u=f.data==="F!";break e}}qs(u)}u=!1}u&&(s=o[0])}}return o=cn(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pv,lastRenderedState:s},o.queue=u,o=Zv.bind(null,Ne,u),u.dispatch=o,u=jd(!1),d=Gd.bind(null,Ne,!1,u.queue),u=cn(),f={state:s,dispatch:null,action:n,pending:null},u.queue=f,o=rI.bind(null,Ne,f,d,o),f.dispatch=o,u.memoizedState=n,[s,o,!1]}function Mv(n){var s=At();return Vv(s,Je,n)}function Vv(n,s,o){if(s=Ld(n,s,Pv)[0],n=Pc(Gi)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=Ol(s)}catch(_){throw _===wl?Rc:_}else u=s;s=At();var f=s.queue,d=f.dispatch;return o!==s.memoizedState&&(Ne.flags|=2048,$a(9,kc(),sI.bind(null,f,o),null)),[u,d,n]}function sI(n,s){n.action=s}function Lv(n){var s=At(),o=Je;if(o!==null)return Vv(s,o,n);At(),s=s.memoizedState,o=At();var u=o.queue.dispatch;return o.memoizedState=n,[s,u,!1]}function $a(n,s,o,u){return n={tag:n,create:o,deps:u,inst:s,next:null},s=Ne.updateQueue,s===null&&(s=Md(),Ne.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,s.lastEffect=n),n}function kc(){return{destroy:void 0,resource:void 0}}function Uv(){return At().memoizedState}function Mc(n,s,o,u){var f=cn();u=u===void 0?null:u,Ne.flags|=n,f.memoizedState=$a(1|s,kc(),o,u)}function Dl(n,s,o,u){var f=At();u=u===void 0?null:u;var d=f.memoizedState.inst;Je!==null&&u!==null&&Nd(u,Je.memoizedState.deps)?f.memoizedState=$a(s,d,o,u):(Ne.flags|=n,f.memoizedState=$a(1|s,d,o,u))}function jv(n,s){Mc(8390656,8,n,s)}function zv(n,s){Dl(2048,8,n,s)}function Bv(n,s){return Dl(4,2,n,s)}function Fv(n,s){return Dl(4,4,n,s)}function Hv(n,s){if(typeof s=="function"){n=n();var o=s(n);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function qv(n,s,o){o=o!=null?o.concat([n]):null,Dl(4,4,Hv.bind(null,s,n),o)}function Bd(){}function Gv(n,s){var o=At();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&Nd(s,u[1])?u[0]:(o.memoizedState=[n,s],n)}function $v(n,s){var o=At();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&Nd(s,u[1]))return u[0];if(u=n(),Ys){mn(!0);try{n()}finally{mn(!1)}}return o.memoizedState=[u,s],u}function Fd(n,s,o){return o===void 0||(Sr&1073741824)!==0?n.memoizedState=s:(n.memoizedState=o,n=Q_(),Ne.lanes|=n,Or|=n,o)}function Kv(n,s,o,u){return gn(o,s)?o:Ha.current!==null?(n=Fd(n,o,u),gn(n,s)||(Lt=!0),n):(Sr&42)===0?(Lt=!0,n.memoizedState=o):(n=Q_(),Ne.lanes|=n,Or|=n,s)}function Yv(n,s,o,u,f){var d=oe.p;oe.p=d!==0&&8>d?d:8;var _=$.T,T={};$.T=T,Gd(n,!1,s,o);try{var I=f(),z=$.S;if(z!==null&&z(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var K=tI(I,u);Pl(n,s,K,Tn(n))}else Pl(n,s,u,Tn(n))}catch(Q){Pl(n,s,{then:function(){},status:"rejected",reason:Q},Tn())}finally{oe.p=d,$.T=_}}function aI(){}function Hd(n,s,o,u){if(n.tag!==5)throw Error(r(476));var f=Qv(n).queue;Yv(n,f,s,pe,o===null?aI:function(){return Xv(n),o(u)})}function Qv(n){var s=n.memoizedState;if(s!==null)return s;s={memoizedState:pe,baseState:pe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:pe},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:o},next:null},n.memoizedState=s,n=n.alternate,n!==null&&(n.memoizedState=s),s}function Xv(n){var s=Qv(n).next.queue;Pl(n,s,{},Tn())}function qd(){return Jt(Wl)}function Wv(){return At().memoizedState}function Jv(){return At().memoizedState}function oI(n){for(var s=n.return;s!==null;){switch(s.tag){case 24:case 3:var o=Tn();n=br(o);var u=Ar(s,n,o);u!==null&&(bn(u,s,o),Rl(u,s,o)),s={cache:Ed()},n.payload=s;return}s=s.return}}function lI(n,s,o){var u=Tn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Vc(n)?e_(s,o):(o=cd(n,s,o,u),o!==null&&(bn(o,n,u),t_(o,s,u)))}function Zv(n,s,o){var u=Tn();Pl(n,s,o,u)}function Pl(n,s,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Vc(n))e_(s,f);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=s.lastRenderedReducer,d!==null))try{var _=s.lastRenderedState,T=d(_,o);if(f.hasEagerState=!0,f.eagerState=T,gn(T,_))return _c(n,s,f,0),rt===null&&vc(),!1}catch{}finally{}if(o=cd(n,s,f,u),o!==null)return bn(o,n,u),t_(o,s,u),!0}return!1}function Gd(n,s,o,u){if(u={lane:2,revertLane:Am(),action:u,hasEagerState:!1,eagerState:null,next:null},Vc(n)){if(s)throw Error(r(479))}else s=cd(n,o,u,2),s!==null&&bn(s,n,2)}function Vc(n){var s=n.alternate;return n===Ne||s!==null&&s===Ne}function e_(n,s){qa=Nc=!0;var o=n.pending;o===null?s.next=s:(s.next=o.next,o.next=s),n.pending=s}function t_(n,s,o){if((o&4194048)!==0){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,tl(n,o)}}var Lc={readContext:Jt,use:Dc,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useLayoutEffect:gt,useInsertionEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useSyncExternalStore:gt,useId:gt,useHostTransitionStatus:gt,useFormState:gt,useActionState:gt,useOptimistic:gt,useMemoCache:gt,useCacheRefresh:gt},n_={readContext:Jt,use:Dc,useCallback:function(n,s){return cn().memoizedState=[n,s===void 0?null:s],n},useContext:Jt,useEffect:jv,useImperativeHandle:function(n,s,o){o=o!=null?o.concat([n]):null,Mc(4194308,4,Hv.bind(null,s,n),o)},useLayoutEffect:function(n,s){return Mc(4194308,4,n,s)},useInsertionEffect:function(n,s){Mc(4,2,n,s)},useMemo:function(n,s){var o=cn();s=s===void 0?null:s;var u=n();if(Ys){mn(!0);try{n()}finally{mn(!1)}}return o.memoizedState=[u,s],u},useReducer:function(n,s,o){var u=cn();if(o!==void 0){var f=o(s);if(Ys){mn(!0);try{o(s)}finally{mn(!1)}}}else f=s;return u.memoizedState=u.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},u.queue=n,n=n.dispatch=lI.bind(null,Ne,n),[u.memoizedState,n]},useRef:function(n){var s=cn();return n={current:n},s.memoizedState=n},useState:function(n){n=jd(n);var s=n.queue,o=Zv.bind(null,Ne,s);return s.dispatch=o,[n.memoizedState,o]},useDebugValue:Bd,useDeferredValue:function(n,s){var o=cn();return Fd(o,n,s)},useTransition:function(){var n=jd(!1);return n=Yv.bind(null,Ne,n.queue,!0,!1),cn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,s,o){var u=Ne,f=cn();if(Ge){if(o===void 0)throw Error(r(407));o=o()}else{if(o=s(),rt===null)throw Error(r(349));(Be&124)!==0||Av(u,s,o)}f.memoizedState=o;var d={value:o,getSnapshot:s};return f.queue=d,jv(wv.bind(null,u,d,n),[n]),u.flags|=2048,$a(9,kc(),Sv.bind(null,u,d,o,s),null),o},useId:function(){var n=cn(),s=rt.identifierPrefix;if(Ge){var o=Fi,u=Bi;o=(u&~(1<<32-Wt(u)-1)).toString(32)+o,s="«"+s+"R"+o,o=Oc++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=nI++,s="«"+s+"r"+o.toString(32)+"»";return n.memoizedState=s},useHostTransitionStatus:qd,useFormState:kv,useActionState:kv,useOptimistic:function(n){var s=cn();s.memoizedState=s.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Gd.bind(null,Ne,!0,o),o.dispatch=s,[n,s]},useMemoCache:Vd,useCacheRefresh:function(){return cn().memoizedState=oI.bind(null,Ne)}},i_={readContext:Jt,use:Dc,useCallback:Gv,useContext:Jt,useEffect:zv,useImperativeHandle:qv,useInsertionEffect:Bv,useLayoutEffect:Fv,useMemo:$v,useReducer:Pc,useRef:Uv,useState:function(){return Pc(Gi)},useDebugValue:Bd,useDeferredValue:function(n,s){var o=At();return Kv(o,Je.memoizedState,n,s)},useTransition:function(){var n=Pc(Gi)[0],s=At().memoizedState;return[typeof n=="boolean"?n:Ol(n),s]},useSyncExternalStore:bv,useId:Wv,useHostTransitionStatus:qd,useFormState:Mv,useActionState:Mv,useOptimistic:function(n,s){var o=At();return Cv(o,Je,n,s)},useMemoCache:Vd,useCacheRefresh:Jv},uI={readContext:Jt,use:Dc,useCallback:Gv,useContext:Jt,useEffect:zv,useImperativeHandle:qv,useInsertionEffect:Bv,useLayoutEffect:Fv,useMemo:$v,useReducer:Ud,useRef:Uv,useState:function(){return Ud(Gi)},useDebugValue:Bd,useDeferredValue:function(n,s){var o=At();return Je===null?Fd(o,n,s):Kv(o,Je.memoizedState,n,s)},useTransition:function(){var n=Ud(Gi)[0],s=At().memoizedState;return[typeof n=="boolean"?n:Ol(n),s]},useSyncExternalStore:bv,useId:Wv,useHostTransitionStatus:qd,useFormState:Lv,useActionState:Lv,useOptimistic:function(n,s){var o=At();return Je!==null?Cv(o,Je,n,s):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:Vd,useCacheRefresh:Jv},Ka=null,kl=0;function Uc(n){var s=kl;return kl+=1,Ka===null&&(Ka=[]),mv(Ka,n,s)}function Ml(n,s){s=s.props.ref,n.ref=s!==void 0?s:null}function jc(n,s){throw s.$$typeof===b?Error(r(525)):(n=Object.prototype.toString.call(s),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n)))}function r_(n){var s=n._init;return s(n._payload)}function s_(n){function s(M,O){if(n){var U=M.deletions;U===null?(M.deletions=[O],M.flags|=16):U.push(O)}}function o(M,O){if(!n)return null;for(;O!==null;)s(M,O),O=O.sibling;return null}function u(M){for(var O=new Map;M!==null;)M.key!==null?O.set(M.key,M):O.set(M.index,M),M=M.sibling;return O}function f(M,O){return M=zi(M,O),M.index=0,M.sibling=null,M}function d(M,O,U){return M.index=U,n?(U=M.alternate,U!==null?(U=U.index,U<O?(M.flags|=67108866,O):U):(M.flags|=67108866,O)):(M.flags|=1048576,O)}function _(M){return n&&M.alternate===null&&(M.flags|=67108866),M}function T(M,O,U,Y){return O===null||O.tag!==6?(O=fd(U,M.mode,Y),O.return=M,O):(O=f(O,U),O.return=M,O)}function I(M,O,U,Y){var he=U.type;return he===G?K(M,O,U.props.children,Y,U.key):O!==null&&(O.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===w&&r_(he)===O.type)?(O=f(O,U.props),Ml(O,U),O.return=M,O):(O=Tc(U.type,U.key,U.props,null,M.mode,Y),Ml(O,U),O.return=M,O)}function z(M,O,U,Y){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=dd(U,M.mode,Y),O.return=M,O):(O=f(O,U.children||[]),O.return=M,O)}function K(M,O,U,Y,he){return O===null||O.tag!==7?(O=zs(U,M.mode,Y,he),O.return=M,O):(O=f(O,U),O.return=M,O)}function Q(M,O,U){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=fd(""+O,M.mode,U),O.return=M,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case S:return U=Tc(O.type,O.key,O.props,null,M.mode,U),Ml(U,O),U.return=M,U;case j:return O=dd(O,M.mode,U),O.return=M,O;case w:var Y=O._init;return O=Y(O._payload),Q(M,O,U)}if(ht(O)||V(O))return O=zs(O,M.mode,U,null),O.return=M,O;if(typeof O.then=="function")return Q(M,Uc(O),U);if(O.$$typeof===ne)return Q(M,wc(M,O),U);jc(M,O)}return null}function B(M,O,U,Y){var he=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return he!==null?null:T(M,O,""+U,Y);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case S:return U.key===he?I(M,O,U,Y):null;case j:return U.key===he?z(M,O,U,Y):null;case w:return he=U._init,U=he(U._payload),B(M,O,U,Y)}if(ht(U)||V(U))return he!==null?null:K(M,O,U,Y,null);if(typeof U.then=="function")return B(M,O,Uc(U),Y);if(U.$$typeof===ne)return B(M,O,wc(M,U),Y);jc(M,U)}return null}function H(M,O,U,Y,he){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return M=M.get(U)||null,T(O,M,""+Y,he);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case S:return M=M.get(Y.key===null?U:Y.key)||null,I(O,M,Y,he);case j:return M=M.get(Y.key===null?U:Y.key)||null,z(O,M,Y,he);case w:var Pe=Y._init;return Y=Pe(Y._payload),H(M,O,U,Y,he)}if(ht(Y)||V(Y))return M=M.get(U)||null,K(O,M,Y,he,null);if(typeof Y.then=="function")return H(M,O,U,Uc(Y),he);if(Y.$$typeof===ne)return H(M,O,U,wc(O,Y),he);jc(O,Y)}return null}function Te(M,O,U,Y){for(var he=null,Pe=null,me=O,Ee=O=0,jt=null;me!==null&&Ee<U.length;Ee++){me.index>Ee?(jt=me,me=null):jt=me.sibling;var He=B(M,me,U[Ee],Y);if(He===null){me===null&&(me=jt);break}n&&me&&He.alternate===null&&s(M,me),O=d(He,O,Ee),Pe===null?he=He:Pe.sibling=He,Pe=He,me=jt}if(Ee===U.length)return o(M,me),Ge&&Fs(M,Ee),he;if(me===null){for(;Ee<U.length;Ee++)me=Q(M,U[Ee],Y),me!==null&&(O=d(me,O,Ee),Pe===null?he=me:Pe.sibling=me,Pe=me);return Ge&&Fs(M,Ee),he}for(me=u(me);Ee<U.length;Ee++)jt=H(me,M,Ee,U[Ee],Y),jt!==null&&(n&&jt.alternate!==null&&me.delete(jt.key===null?Ee:jt.key),O=d(jt,O,Ee),Pe===null?he=jt:Pe.sibling=jt,Pe=jt);return n&&me.forEach(function(zr){return s(M,zr)}),Ge&&Fs(M,Ee),he}function _e(M,O,U,Y){if(U==null)throw Error(r(151));for(var he=null,Pe=null,me=O,Ee=O=0,jt=null,He=U.next();me!==null&&!He.done;Ee++,He=U.next()){me.index>Ee?(jt=me,me=null):jt=me.sibling;var zr=B(M,me,He.value,Y);if(zr===null){me===null&&(me=jt);break}n&&me&&zr.alternate===null&&s(M,me),O=d(zr,O,Ee),Pe===null?he=zr:Pe.sibling=zr,Pe=zr,me=jt}if(He.done)return o(M,me),Ge&&Fs(M,Ee),he;if(me===null){for(;!He.done;Ee++,He=U.next())He=Q(M,He.value,Y),He!==null&&(O=d(He,O,Ee),Pe===null?he=He:Pe.sibling=He,Pe=He);return Ge&&Fs(M,Ee),he}for(me=u(me);!He.done;Ee++,He=U.next())He=H(me,M,Ee,He.value,Y),He!==null&&(n&&He.alternate!==null&&me.delete(He.key===null?Ee:He.key),O=d(He,O,Ee),Pe===null?he=He:Pe.sibling=He,Pe=He);return n&&me.forEach(function(cR){return s(M,cR)}),Ge&&Fs(M,Ee),he}function et(M,O,U,Y){if(typeof U=="object"&&U!==null&&U.type===G&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case S:e:{for(var he=U.key;O!==null;){if(O.key===he){if(he=U.type,he===G){if(O.tag===7){o(M,O.sibling),Y=f(O,U.props.children),Y.return=M,M=Y;break e}}else if(O.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===w&&r_(he)===O.type){o(M,O.sibling),Y=f(O,U.props),Ml(Y,U),Y.return=M,M=Y;break e}o(M,O);break}else s(M,O);O=O.sibling}U.type===G?(Y=zs(U.props.children,M.mode,Y,U.key),Y.return=M,M=Y):(Y=Tc(U.type,U.key,U.props,null,M.mode,Y),Ml(Y,U),Y.return=M,M=Y)}return _(M);case j:e:{for(he=U.key;O!==null;){if(O.key===he)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){o(M,O.sibling),Y=f(O,U.children||[]),Y.return=M,M=Y;break e}else{o(M,O);break}else s(M,O);O=O.sibling}Y=dd(U,M.mode,Y),Y.return=M,M=Y}return _(M);case w:return he=U._init,U=he(U._payload),et(M,O,U,Y)}if(ht(U))return Te(M,O,U,Y);if(V(U)){if(he=V(U),typeof he!="function")throw Error(r(150));return U=he.call(U),_e(M,O,U,Y)}if(typeof U.then=="function")return et(M,O,Uc(U),Y);if(U.$$typeof===ne)return et(M,O,wc(M,U),Y);jc(M,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,O!==null&&O.tag===6?(o(M,O.sibling),Y=f(O,U),Y.return=M,M=Y):(o(M,O),Y=fd(U,M.mode,Y),Y.return=M,M=Y),_(M)):o(M,O)}return function(M,O,U,Y){try{kl=0;var he=et(M,O,U,Y);return Ka=null,he}catch(me){if(me===wl||me===Rc)throw me;var Pe=yn(29,me,null,M.mode);return Pe.lanes=Y,Pe.return=M,Pe}finally{}}}var Ya=s_(!0),a_=s_(!1),Mn=J(null),li=null;function wr(n){var s=n.alternate;re(Nt,Nt.current&1),re(Mn,n),li===null&&(s===null||Ha.current!==null||s.memoizedState!==null)&&(li=n)}function o_(n){if(n.tag===22){if(re(Nt,Nt.current),re(Mn,n),li===null){var s=n.alternate;s!==null&&s.memoizedState!==null&&(li=n)}}else Ir()}function Ir(){re(Nt,Nt.current),re(Mn,Mn.current)}function $i(n){le(Mn),li===n&&(li=null),le(Nt)}var Nt=J(0);function zc(n){for(var s=n;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Mm(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function $d(n,s,o,u){s=n.memoizedState,o=o(u,s),o=o==null?s:E({},s,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Kd={enqueueSetState:function(n,s,o){n=n._reactInternals;var u=Tn(),f=br(u);f.payload=s,o!=null&&(f.callback=o),s=Ar(n,f,u),s!==null&&(bn(s,n,u),Rl(s,n,u))},enqueueReplaceState:function(n,s,o){n=n._reactInternals;var u=Tn(),f=br(u);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Ar(n,f,u),s!==null&&(bn(s,n,u),Rl(s,n,u))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var o=Tn(),u=br(o);u.tag=2,s!=null&&(u.callback=s),s=Ar(n,u,o),s!==null&&(bn(s,n,o),Rl(s,n,o))}};function l_(n,s,o,u,f,d,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,d,_):s.prototype&&s.prototype.isPureReactComponent?!yl(o,u)||!yl(f,d):!0}function u_(n,s,o,u){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==n&&Kd.enqueueReplaceState(s,s.state,null)}function Qs(n,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(n=n.defaultProps){o===s&&(o=E({},o));for(var f in n)o[f]===void 0&&(o[f]=n[f])}return o}var Bc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function c_(n){Bc(n)}function h_(n){console.error(n)}function f_(n){Bc(n)}function Fc(n,s){try{var o=n.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function d_(n,s,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Yd(n,s,o){return o=br(o),o.tag=3,o.payload={element:null},o.callback=function(){Fc(n,s)},o}function m_(n){return n=br(n),n.tag=3,n}function p_(n,s,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var d=u.value;n.payload=function(){return f(d)},n.callback=function(){d_(s,o,u)}}var _=o.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(n.callback=function(){d_(s,o,u),typeof f!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var T=u.stack;this.componentDidCatch(u.value,{componentStack:T!==null?T:""})})}function cI(n,s,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&bl(s,o,f,!0),o=Mn.current,o!==null){switch(o.tag){case 13:return li===null?vm():o.alternate===null&&mt===0&&(mt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Ad?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),Em(n,u,f)),!1;case 22:return o.flags|=65536,u===Ad?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),Em(n,u,f)),!1}throw Error(r(435,o.tag))}return Em(n,u,f),vm(),!1}if(Ge)return s=Mn.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,u!==gd&&(n=Error(r(422),{cause:u}),Tl(On(n,o)))):(u!==gd&&(s=Error(r(423),{cause:u}),Tl(On(s,o))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,u=On(u,o),f=Yd(n.stateNode,u,f),Id(n,f),mt!==4&&(mt=2)),!1;var d=Error(r(520),{cause:u});if(d=On(d,o),Fl===null?Fl=[d]:Fl.push(d),mt!==4&&(mt=2),s===null)return!0;u=On(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,n=f&-f,o.lanes|=n,n=Yd(o.stateNode,u,n),Id(o,n),!1;case 1:if(s=o.type,d=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Dr===null||!Dr.has(d))))return o.flags|=65536,f&=-f,o.lanes|=f,f=m_(f),p_(f,n,o,u),Id(o,f),!1}o=o.return}while(o!==null);return!1}var g_=Error(r(461)),Lt=!1;function qt(n,s,o,u){s.child=n===null?a_(s,null,o,u):Ya(s,n.child,o,u)}function y_(n,s,o,u,f){o=o.render;var d=s.ref;if("ref"in u){var _={};for(var T in u)T!=="ref"&&(_[T]=u[T])}else _=u;return $s(s),u=Od(n,s,o,_,d,f),T=Dd(),n!==null&&!Lt?(Pd(n,s,f),Ki(n,s,f)):(Ge&&T&&md(s),s.flags|=1,qt(n,s,u,f),s.child)}function v_(n,s,o,u,f){if(n===null){var d=o.type;return typeof d=="function"&&!hd(d)&&d.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=d,__(n,s,d,u,f)):(n=Tc(o.type,null,u,s,s.mode,f),n.ref=s.ref,n.return=s,s.child=n)}if(d=n.child,!nm(n,f)){var _=d.memoizedProps;if(o=o.compare,o=o!==null?o:yl,o(_,u)&&n.ref===s.ref)return Ki(n,s,f)}return s.flags|=1,n=zi(d,u),n.ref=s.ref,n.return=s,s.child=n}function __(n,s,o,u,f){if(n!==null){var d=n.memoizedProps;if(yl(d,u)&&n.ref===s.ref)if(Lt=!1,s.pendingProps=u=d,nm(n,f))(n.flags&131072)!==0&&(Lt=!0);else return s.lanes=n.lanes,Ki(n,s,f)}return Qd(n,s,o,u,f)}function E_(n,s,o){var u=s.pendingProps,f=u.children,d=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((s.flags&128)!==0){if(u=d!==null?d.baseLanes|o:o,n!==null){for(f=s.child=n.child,d=0;f!==null;)d=d|f.lanes|f.childLanes,f=f.sibling;s.childLanes=d&~u}else s.childLanes=0,s.child=null;return T_(n,s,u,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},n!==null&&Ic(s,d!==null?d.cachePool:null),d!==null?_v(s,d):Cd(),o_(s);else return s.lanes=s.childLanes=536870912,T_(n,s,d!==null?d.baseLanes|o:o,o)}else d!==null?(Ic(s,d.cachePool),_v(s,d),Ir(),s.memoizedState=null):(n!==null&&Ic(s,null),Cd(),Ir());return qt(n,s,f,o),s.child}function T_(n,s,o,u){var f=bd();return f=f===null?null:{parent:xt._currentValue,pool:f},s.memoizedState={baseLanes:o,cachePool:f},n!==null&&Ic(s,null),Cd(),o_(s),n!==null&&bl(n,s,u,!0),null}function Hc(n,s){var o=s.ref;if(o===null)n!==null&&n.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(r(284));(n===null||n.ref!==o)&&(s.flags|=4194816)}}function Qd(n,s,o,u,f){return $s(s),o=Od(n,s,o,u,void 0,f),u=Dd(),n!==null&&!Lt?(Pd(n,s,f),Ki(n,s,f)):(Ge&&u&&md(s),s.flags|=1,qt(n,s,o,f),s.child)}function b_(n,s,o,u,f,d){return $s(s),s.updateQueue=null,o=Tv(s,u,o,f),Ev(n),u=Dd(),n!==null&&!Lt?(Pd(n,s,d),Ki(n,s,d)):(Ge&&u&&md(s),s.flags|=1,qt(n,s,o,d),s.child)}function A_(n,s,o,u,f){if($s(s),s.stateNode===null){var d=Ua,_=o.contextType;typeof _=="object"&&_!==null&&(d=Jt(_)),d=new o(u,d),s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Kd,s.stateNode=d,d._reactInternals=s,d=s.stateNode,d.props=u,d.state=s.memoizedState,d.refs={},Sd(s),_=o.contextType,d.context=typeof _=="object"&&_!==null?Jt(_):Ua,d.state=s.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&($d(s,o,_,u),d.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&Kd.enqueueReplaceState(d,d.state,null),xl(s,u,d,f),Cl(),d.state=s.memoizedState),typeof d.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(n===null){d=s.stateNode;var T=s.memoizedProps,I=Qs(o,T);d.props=I;var z=d.context,K=o.contextType;_=Ua,typeof K=="object"&&K!==null&&(_=Jt(K));var Q=o.getDerivedStateFromProps;K=typeof Q=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=s.pendingProps!==T,K||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||z!==_)&&u_(s,d,u,_),Tr=!1;var B=s.memoizedState;d.state=B,xl(s,u,d,f),Cl(),z=s.memoizedState,T||B!==z||Tr?(typeof Q=="function"&&($d(s,o,Q,u),z=s.memoizedState),(I=Tr||l_(s,o,I,u,B,z,_))?(K||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(s.flags|=4194308)):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=z),d.props=u,d.state=z,d.context=_,u=I):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{d=s.stateNode,wd(n,s),_=s.memoizedProps,K=Qs(o,_),d.props=K,Q=s.pendingProps,B=d.context,z=o.contextType,I=Ua,typeof z=="object"&&z!==null&&(I=Jt(z)),T=o.getDerivedStateFromProps,(z=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==Q||B!==I)&&u_(s,d,u,I),Tr=!1,B=s.memoizedState,d.state=B,xl(s,u,d,f),Cl();var H=s.memoizedState;_!==Q||B!==H||Tr||n!==null&&n.dependencies!==null&&Sc(n.dependencies)?(typeof T=="function"&&($d(s,o,T,u),H=s.memoizedState),(K=Tr||l_(s,o,K,u,B,H,I)||n!==null&&n.dependencies!==null&&Sc(n.dependencies))?(z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(u,H,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(u,H,I)),typeof d.componentDidUpdate=="function"&&(s.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===n.memoizedProps&&B===n.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===n.memoizedProps&&B===n.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=H),d.props=u,d.state=H,d.context=I,u=K):(typeof d.componentDidUpdate!="function"||_===n.memoizedProps&&B===n.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===n.memoizedProps&&B===n.memoizedState||(s.flags|=1024),u=!1)}return d=u,Hc(n,s),u=(s.flags&128)!==0,d||u?(d=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:d.render(),s.flags|=1,n!==null&&u?(s.child=Ya(s,n.child,null,f),s.child=Ya(s,null,o,f)):qt(n,s,o,f),s.memoizedState=d.state,n=s.child):n=Ki(n,s,f),n}function S_(n,s,o,u){return El(),s.flags|=256,qt(n,s,o,u),s.child}var Xd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wd(n){return{baseLanes:n,cachePool:hv()}}function Jd(n,s,o){return n=n!==null?n.childLanes&~o:0,s&&(n|=Vn),n}function w_(n,s,o){var u=s.pendingProps,f=!1,d=(s.flags&128)!==0,_;if((_=d)||(_=n!==null&&n.memoizedState===null?!1:(Nt.current&2)!==0),_&&(f=!0,s.flags&=-129),_=(s.flags&32)!==0,s.flags&=-33,n===null){if(Ge){if(f?wr(s):Ir(),Ge){var T=dt,I;if(I=T){e:{for(I=T,T=oi;I.nodeType!==8;){if(!T){T=null;break e}if(I=Gn(I.nextSibling),I===null){T=null;break e}}T=I}T!==null?(s.memoizedState={dehydrated:T,treeContext:Bs!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},I=yn(18,null,null,0),I.stateNode=T,I.return=s,s.child=I,ln=s,dt=null,I=!0):I=!1}I||qs(s)}if(T=s.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Mm(T)?s.lanes=32:s.lanes=536870912,null;$i(s)}return T=u.children,u=u.fallback,f?(Ir(),f=s.mode,T=qc({mode:"hidden",children:T},f),u=zs(u,f,o,null),T.return=s,u.return=s,T.sibling=u,s.child=T,f=s.child,f.memoizedState=Wd(o),f.childLanes=Jd(n,_,o),s.memoizedState=Xd,u):(wr(s),Zd(s,T))}if(I=n.memoizedState,I!==null&&(T=I.dehydrated,T!==null)){if(d)s.flags&256?(wr(s),s.flags&=-257,s=em(n,s,o)):s.memoizedState!==null?(Ir(),s.child=n.child,s.flags|=128,s=null):(Ir(),f=u.fallback,T=s.mode,u=qc({mode:"visible",children:u.children},T),f=zs(f,T,o,null),f.flags|=2,u.return=s,f.return=s,u.sibling=f,s.child=u,Ya(s,n.child,null,o),u=s.child,u.memoizedState=Wd(o),u.childLanes=Jd(n,_,o),s.memoizedState=Xd,s=f);else if(wr(s),Mm(T)){if(_=T.nextSibling&&T.nextSibling.dataset,_)var z=_.dgst;_=z,u=Error(r(419)),u.stack="",u.digest=_,Tl({value:u,source:null,stack:null}),s=em(n,s,o)}else if(Lt||bl(n,s,o,!1),_=(o&n.childLanes)!==0,Lt||_){if(_=rt,_!==null&&(u=o&-o,u=(u&42)!==0?1:dr(u),u=(u&(_.suspendedLanes|o))!==0?0:u,u!==0&&u!==I.retryLane))throw I.retryLane=u,La(n,u),bn(_,n,u),g_;T.data==="$?"||vm(),s=em(n,s,o)}else T.data==="$?"?(s.flags|=192,s.child=n.child,s=null):(n=I.treeContext,dt=Gn(T.nextSibling),ln=s,Ge=!0,Hs=null,oi=!1,n!==null&&(Pn[kn++]=Bi,Pn[kn++]=Fi,Pn[kn++]=Bs,Bi=n.id,Fi=n.overflow,Bs=s),s=Zd(s,u.children),s.flags|=4096);return s}return f?(Ir(),f=u.fallback,T=s.mode,I=n.child,z=I.sibling,u=zi(I,{mode:"hidden",children:u.children}),u.subtreeFlags=I.subtreeFlags&65011712,z!==null?f=zi(z,f):(f=zs(f,T,o,null),f.flags|=2),f.return=s,u.return=s,u.sibling=f,s.child=u,u=f,f=s.child,T=n.child.memoizedState,T===null?T=Wd(o):(I=T.cachePool,I!==null?(z=xt._currentValue,I=I.parent!==z?{parent:z,pool:z}:I):I=hv(),T={baseLanes:T.baseLanes|o,cachePool:I}),f.memoizedState=T,f.childLanes=Jd(n,_,o),s.memoizedState=Xd,u):(wr(s),o=n.child,n=o.sibling,o=zi(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,n!==null&&(_=s.deletions,_===null?(s.deletions=[n],s.flags|=16):_.push(n)),s.child=o,s.memoizedState=null,o)}function Zd(n,s){return s=qc({mode:"visible",children:s},n.mode),s.return=n,n.child=s}function qc(n,s){return n=yn(22,n,null,s),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function em(n,s,o){return Ya(s,n.child,null,o),n=Zd(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function I_(n,s,o){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s),vd(n.return,s,o)}function tm(n,s,o,u,f){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(d.isBackwards=s,d.rendering=null,d.renderingStartTime=0,d.last=u,d.tail=o,d.tailMode=f)}function R_(n,s,o){var u=s.pendingProps,f=u.revealOrder,d=u.tail;if(qt(n,s,u.children,o),u=Nt.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&I_(n,o,s);else if(n.tag===19)I_(n,o,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(re(Nt,u),f){case"forwards":for(o=s.child,f=null;o!==null;)n=o.alternate,n!==null&&zc(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),tm(s,!1,f,o,d);break;case"backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(n=f.alternate,n!==null&&zc(n)===null){s.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}tm(s,!0,o,null,d);break;case"together":tm(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Ki(n,s,o){if(n!==null&&(s.dependencies=n.dependencies),Or|=s.lanes,(o&s.childLanes)===0)if(n!==null){if(bl(n,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(n!==null&&s.child!==n.child)throw Error(r(153));if(s.child!==null){for(n=s.child,o=zi(n,n.pendingProps),s.child=o,o.return=s;n.sibling!==null;)n=n.sibling,o=o.sibling=zi(n,n.pendingProps),o.return=s;o.sibling=null}return s.child}function nm(n,s){return(n.lanes&s)!==0?!0:(n=n.dependencies,!!(n!==null&&Sc(n)))}function hI(n,s,o){switch(s.tag){case 3:it(s,s.stateNode.containerInfo),Er(s,xt,n.memoizedState.cache),El();break;case 27:case 5:fr(s);break;case 4:it(s,s.stateNode.containerInfo);break;case 10:Er(s,s.type,s.memoizedProps.value);break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(wr(s),s.flags|=128,null):(o&s.child.childLanes)!==0?w_(n,s,o):(wr(s),n=Ki(n,s,o),n!==null?n.sibling:null);wr(s);break;case 19:var f=(n.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(bl(n,s,o,!1),u=(o&s.childLanes)!==0),f){if(u)return R_(n,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),re(Nt,Nt.current),u)break;return null;case 22:case 23:return s.lanes=0,E_(n,s,o);case 24:Er(s,xt,n.memoizedState.cache)}return Ki(n,s,o)}function C_(n,s,o){if(n!==null)if(n.memoizedProps!==s.pendingProps)Lt=!0;else{if(!nm(n,o)&&(s.flags&128)===0)return Lt=!1,hI(n,s,o);Lt=(n.flags&131072)!==0}else Lt=!1,Ge&&(s.flags&1048576)!==0&&rv(s,Ac,s.index);switch(s.lanes=0,s.tag){case 16:e:{n=s.pendingProps;var u=s.elementType,f=u._init;if(u=f(u._payload),s.type=u,typeof u=="function")hd(u)?(n=Qs(u,n),s.tag=1,s=A_(null,s,u,n,o)):(s.tag=0,s=Qd(null,s,u,n,o));else{if(u!=null){if(f=u.$$typeof,f===fe){s.tag=11,s=y_(null,s,u,n,o);break e}else if(f===D){s.tag=14,s=v_(null,s,u,n,o);break e}}throw s=Bt(u)||u,Error(r(306,s,""))}}return s;case 0:return Qd(n,s,s.type,s.pendingProps,o);case 1:return u=s.type,f=Qs(u,s.pendingProps),A_(n,s,u,f,o);case 3:e:{if(it(s,s.stateNode.containerInfo),n===null)throw Error(r(387));u=s.pendingProps;var d=s.memoizedState;f=d.element,wd(n,s),xl(s,u,null,o);var _=s.memoizedState;if(u=_.cache,Er(s,xt,u),u!==d.cache&&_d(s,[xt],o,!0),Cl(),u=_.element,d.isDehydrated)if(d={element:u,isDehydrated:!1,cache:_.cache},s.updateQueue.baseState=d,s.memoizedState=d,s.flags&256){s=S_(n,s,u,o);break e}else if(u!==f){f=On(Error(r(424)),s),Tl(f),s=S_(n,s,u,o);break e}else{switch(n=s.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(dt=Gn(n.firstChild),ln=s,Ge=!0,Hs=null,oi=!0,o=a_(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(El(),u===f){s=Ki(n,s,o);break e}qt(n,s,u,o)}s=s.child}return s;case 26:return Hc(n,s),n===null?(o=D0(s.type,null,s.pendingProps,null))?s.memoizedState=o:Ge||(o=s.type,n=s.pendingProps,u=rh(Se.current).createElement(o),u[It]=s,u[Et]=n,$t(u,o,n),pt(u),s.stateNode=u):s.memoizedState=D0(s.type,n.memoizedProps,s.pendingProps,n.memoizedState),null;case 27:return fr(s),n===null&&Ge&&(u=s.stateNode=x0(s.type,s.pendingProps,Se.current),ln=s,oi=!0,f=dt,Mr(s.type)?(Vm=f,dt=Gn(u.firstChild)):dt=f),qt(n,s,s.pendingProps.children,o),Hc(n,s),n===null&&(s.flags|=4194304),s.child;case 5:return n===null&&Ge&&((f=u=dt)&&(u=jI(u,s.type,s.pendingProps,oi),u!==null?(s.stateNode=u,ln=s,dt=Gn(u.firstChild),oi=!1,f=!0):f=!1),f||qs(s)),fr(s),f=s.type,d=s.pendingProps,_=n!==null?n.memoizedProps:null,u=d.children,Dm(f,d)?u=null:_!==null&&Dm(f,_)&&(s.flags|=32),s.memoizedState!==null&&(f=Od(n,s,iI,null,null,o),Wl._currentValue=f),Hc(n,s),qt(n,s,u,o),s.child;case 6:return n===null&&Ge&&((n=o=dt)&&(o=zI(o,s.pendingProps,oi),o!==null?(s.stateNode=o,ln=s,dt=null,n=!0):n=!1),n||qs(s)),null;case 13:return w_(n,s,o);case 4:return it(s,s.stateNode.containerInfo),u=s.pendingProps,n===null?s.child=Ya(s,null,u,o):qt(n,s,u,o),s.child;case 11:return y_(n,s,s.type,s.pendingProps,o);case 7:return qt(n,s,s.pendingProps,o),s.child;case 8:return qt(n,s,s.pendingProps.children,o),s.child;case 12:return qt(n,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,Er(s,s.type,u.value),qt(n,s,u.children,o),s.child;case 9:return f=s.type._context,u=s.pendingProps.children,$s(s),f=Jt(f),u=u(f),s.flags|=1,qt(n,s,u,o),s.child;case 14:return v_(n,s,s.type,s.pendingProps,o);case 15:return __(n,s,s.type,s.pendingProps,o);case 19:return R_(n,s,o);case 31:return u=s.pendingProps,o=s.mode,u={mode:u.mode,children:u.children},n===null?(o=qc(u,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=zi(n.child,u),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return E_(n,s,o);case 24:return $s(s),u=Jt(xt),n===null?(f=bd(),f===null&&(f=rt,d=Ed(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=o),f=d),s.memoizedState={parent:u,cache:f},Sd(s),Er(s,xt,f)):((n.lanes&o)!==0&&(wd(n,s),xl(s,null,null,o),Cl()),f=n.memoizedState,d=s.memoizedState,f.parent!==u?(f={parent:u,cache:u},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Er(s,xt,u)):(u=d.cache,Er(s,xt,u),u!==f.cache&&_d(s,[xt],o,!0))),qt(n,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(r(156,s.tag))}function Yi(n){n.flags|=4}function x_(n,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!L0(s)){if(s=Mn.current,s!==null&&((Be&4194048)===Be?li!==null:(Be&62914560)!==Be&&(Be&536870912)===0||s!==li))throw Il=Ad,fv;n.flags|=8192}}function Gc(n,s){s!==null&&(n.flags|=4),n.flags&16384&&(s=n.tag!==22?Zo():536870912,n.lanes|=s,Ja|=s)}function Vl(n,s){if(!Ge)switch(n.tailMode){case"hidden":s=n.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function ut(n){var s=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(s)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=o,s}function fI(n,s,o){var u=s.pendingProps;switch(pd(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(s),null;case 1:return ut(s),null;case 3:return o=s.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),qi(xt),Qn(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(_l(s)?Yi(s):n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,ov())),ut(s),null;case 26:return o=s.memoizedState,n===null?(Yi(s),o!==null?(ut(s),x_(s,o)):(ut(s),s.flags&=-16777217)):o?o!==n.memoizedState?(Yi(s),ut(s),x_(s,o)):(ut(s),s.flags&=-16777217):(n.memoizedProps!==u&&Yi(s),ut(s),s.flags&=-16777217),null;case 27:Ri(s),o=Se.current;var f=s.type;if(n!==null&&s.stateNode!=null)n.memoizedProps!==u&&Yi(s);else{if(!u){if(s.stateNode===null)throw Error(r(166));return ut(s),null}n=ge.current,_l(s)?sv(s):(n=x0(f,u,o),s.stateNode=n,Yi(s))}return ut(s),null;case 5:if(Ri(s),o=s.type,n!==null&&s.stateNode!=null)n.memoizedProps!==u&&Yi(s);else{if(!u){if(s.stateNode===null)throw Error(r(166));return ut(s),null}if(n=ge.current,_l(s))sv(s);else{switch(f=rh(Se.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}n[It]=s,n[Et]=u;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=n;e:switch($t(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Yi(s)}}return ut(s),s.flags&=-16777217,null;case 6:if(n&&s.stateNode!=null)n.memoizedProps!==u&&Yi(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(r(166));if(n=Se.current,_l(s)){if(n=s.stateNode,o=s.memoizedProps,u=null,f=ln,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}n[It]=s,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||b0(n.nodeValue,o)),n||qs(s)}else n=rh(n).createTextNode(u),n[It]=s,s.stateNode=n}return ut(s),null;case 13:if(u=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=_l(s),u!==null&&u.dehydrated!==null){if(n===null){if(!f)throw Error(r(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[It]=s}else El(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ut(s),f=!1}else f=ov(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?($i(s),s):($i(s),null)}if($i(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=s.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var d=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(d=u.memoizedState.cachePool.pool),d!==f&&(u.flags|=2048)}return o!==n&&o&&(s.child.flags|=8192),Gc(s,s.updateQueue),ut(s),null;case 4:return Qn(),n===null&&Rm(s.stateNode.containerInfo),ut(s),null;case 10:return qi(s.type),ut(s),null;case 19:if(le(Nt),f=s.memoizedState,f===null)return ut(s),null;if(u=(s.flags&128)!==0,d=f.rendering,d===null)if(u)Vl(f,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(d=zc(n),d!==null){for(s.flags|=128,Vl(f,!1),n=d.updateQueue,s.updateQueue=n,Gc(s,n),s.subtreeFlags=0,n=o,o=s.child;o!==null;)iv(o,n),o=o.sibling;return re(Nt,Nt.current&1|2),s.child}n=n.sibling}f.tail!==null&&wn()>Yc&&(s.flags|=128,u=!0,Vl(f,!1),s.lanes=4194304)}else{if(!u)if(n=zc(d),n!==null){if(s.flags|=128,u=!0,n=n.updateQueue,s.updateQueue=n,Gc(s,n),Vl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!d.alternate&&!Ge)return ut(s),null}else 2*wn()-f.renderingStartTime>Yc&&o!==536870912&&(s.flags|=128,u=!0,Vl(f,!1),s.lanes=4194304);f.isBackwards?(d.sibling=s.child,s.child=d):(n=f.last,n!==null?n.sibling=d:s.child=d,f.last=d)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=wn(),s.sibling=null,n=Nt.current,re(Nt,u?n&1|2:n&1),s):(ut(s),null);case 22:case 23:return $i(s),xd(),u=s.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(ut(s),s.subtreeFlags&6&&(s.flags|=8192)):ut(s),o=s.updateQueue,o!==null&&Gc(s,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),n!==null&&le(Ks),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),qi(xt),ut(s),null;case 25:return null;case 30:return null}throw Error(r(156,s.tag))}function dI(n,s){switch(pd(s),s.tag){case 1:return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return qi(xt),Qn(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 26:case 27:case 5:return Ri(s),null;case 13:if($i(s),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(r(340));El()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return le(Nt),null;case 4:return Qn(),null;case 10:return qi(s.type),null;case 22:case 23:return $i(s),xd(),n!==null&&le(Ks),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 24:return qi(xt),null;case 25:return null;default:return null}}function N_(n,s){switch(pd(s),s.tag){case 3:qi(xt),Qn();break;case 26:case 27:case 5:Ri(s);break;case 4:Qn();break;case 13:$i(s);break;case 19:le(Nt);break;case 10:qi(s.type);break;case 22:case 23:$i(s),xd(),n!==null&&le(Ks);break;case 24:qi(xt)}}function Ll(n,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&n)===n){u=void 0;var d=o.create,_=o.inst;u=d(),_.destroy=u}o=o.next}while(o!==f)}}catch(T){nt(s,s.return,T)}}function Rr(n,s,o){try{var u=s.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var d=f.next;u=d;do{if((u.tag&n)===n){var _=u.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,f=s;var I=o,z=T;try{z()}catch(K){nt(f,I,K)}}}u=u.next}while(u!==d)}}catch(K){nt(s,s.return,K)}}function O_(n){var s=n.updateQueue;if(s!==null){var o=n.stateNode;try{vv(s,o)}catch(u){nt(n,n.return,u)}}}function D_(n,s,o){o.props=Qs(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){nt(n,s,u)}}function Ul(n,s){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(f){nt(n,s,f)}}function ui(n,s){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){nt(n,s,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){nt(n,s,f)}else o.current=null}function P_(n){var s=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){nt(n,n.return,f)}}function im(n,s,o){try{var u=n.stateNode;kI(u,n.type,o,s),u[Et]=s}catch(f){nt(n,n.return,f)}}function k_(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Mr(n.type)||n.tag===4}function rm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||k_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Mr(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function sm(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(n),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=ih));else if(u!==4&&(u===27&&Mr(n.type)&&(o=n.stateNode,s=null),n=n.child,n!==null))for(sm(n,s,o),n=n.sibling;n!==null;)sm(n,s,o),n=n.sibling}function $c(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?o.insertBefore(n,s):o.appendChild(n);else if(u!==4&&(u===27&&Mr(n.type)&&(o=n.stateNode),n=n.child,n!==null))for($c(n,s,o),n=n.sibling;n!==null;)$c(n,s,o),n=n.sibling}function M_(n){var s=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);$t(s,u,o),s[It]=n,s[Et]=o}catch(d){nt(n,n.return,d)}}var Qi=!1,yt=!1,am=!1,V_=typeof WeakSet=="function"?WeakSet:Set,Ut=null;function mI(n,s){if(n=n.containerInfo,Nm=ch,n=Ky(n),rd(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,d=u.focusNode;u=u.focusOffset;try{o.nodeType,d.nodeType}catch{o=null;break e}var _=0,T=-1,I=-1,z=0,K=0,Q=n,B=null;t:for(;;){for(var H;Q!==o||f!==0&&Q.nodeType!==3||(T=_+f),Q!==d||u!==0&&Q.nodeType!==3||(I=_+u),Q.nodeType===3&&(_+=Q.nodeValue.length),(H=Q.firstChild)!==null;)B=Q,Q=H;for(;;){if(Q===n)break t;if(B===o&&++z===f&&(T=_),B===d&&++K===u&&(I=_),(H=Q.nextSibling)!==null)break;Q=B,B=Q.parentNode}Q=H}o=T===-1||I===-1?null:{start:T,end:I}}else o=null}o=o||{start:0,end:0}}else o=null;for(Om={focusedElem:n,selectionRange:o},ch=!1,Ut=s;Ut!==null;)if(s=Ut,n=s.child,(s.subtreeFlags&1024)!==0&&n!==null)n.return=s,Ut=n;else for(;Ut!==null;){switch(s=Ut,d=s.alternate,n=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,o=s,f=d.memoizedProps,d=d.memoizedState,u=o.stateNode;try{var Te=Qs(o.type,f,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(Te,d),u.__reactInternalSnapshotBeforeUpdate=n}catch(_e){nt(o,o.return,_e)}}break;case 3:if((n&1024)!==0){if(n=s.stateNode.containerInfo,o=n.nodeType,o===9)km(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":km(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(r(163))}if(n=s.sibling,n!==null){n.return=s.return,Ut=n;break}Ut=s.return}}function L_(n,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Cr(n,o),u&4&&Ll(5,o);break;case 1:if(Cr(n,o),u&4)if(n=o.stateNode,s===null)try{n.componentDidMount()}catch(_){nt(o,o.return,_)}else{var f=Qs(o.type,s.memoizedProps);s=s.memoizedState;try{n.componentDidUpdate(f,s,n.__reactInternalSnapshotBeforeUpdate)}catch(_){nt(o,o.return,_)}}u&64&&O_(o),u&512&&Ul(o,o.return);break;case 3:if(Cr(n,o),u&64&&(n=o.updateQueue,n!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{vv(n,s)}catch(_){nt(o,o.return,_)}}break;case 27:s===null&&u&4&&M_(o);case 26:case 5:Cr(n,o),s===null&&u&4&&P_(o),u&512&&Ul(o,o.return);break;case 12:Cr(n,o);break;case 13:Cr(n,o),u&4&&z_(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=AI.bind(null,o),BI(n,o))));break;case 22:if(u=o.memoizedState!==null||Qi,!u){s=s!==null&&s.memoizedState!==null||yt,f=Qi;var d=yt;Qi=u,(yt=s)&&!d?xr(n,o,(o.subtreeFlags&8772)!==0):Cr(n,o),Qi=f,yt=d}break;case 30:break;default:Cr(n,o)}}function U_(n){var s=n.alternate;s!==null&&(n.alternate=null,U_(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&gr(s)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ot=null,hn=!1;function Xi(n,s,o){for(o=o.child;o!==null;)j_(n,s,o),o=o.sibling}function j_(n,s,o){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(ft,o)}catch{}switch(o.tag){case 26:yt||ui(o,s),Xi(n,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:yt||ui(o,s);var u=ot,f=hn;Mr(o.type)&&(ot=o.stateNode,hn=!1),Xi(n,s,o),Kl(o.stateNode),ot=u,hn=f;break;case 5:yt||ui(o,s);case 6:if(u=ot,f=hn,ot=null,Xi(n,s,o),ot=u,hn=f,ot!==null)if(hn)try{(ot.nodeType===9?ot.body:ot.nodeName==="HTML"?ot.ownerDocument.body:ot).removeChild(o.stateNode)}catch(d){nt(o,s,d)}else try{ot.removeChild(o.stateNode)}catch(d){nt(o,s,d)}break;case 18:ot!==null&&(hn?(n=ot,R0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),tu(n)):R0(ot,o.stateNode));break;case 4:u=ot,f=hn,ot=o.stateNode.containerInfo,hn=!0,Xi(n,s,o),ot=u,hn=f;break;case 0:case 11:case 14:case 15:yt||Rr(2,o,s),yt||Rr(4,o,s),Xi(n,s,o);break;case 1:yt||(ui(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&D_(o,s,u)),Xi(n,s,o);break;case 21:Xi(n,s,o);break;case 22:yt=(u=yt)||o.memoizedState!==null,Xi(n,s,o),yt=u;break;default:Xi(n,s,o)}}function z_(n,s){if(s.memoizedState===null&&(n=s.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{tu(n)}catch(o){nt(s,s.return,o)}}function pI(n){switch(n.tag){case 13:case 19:var s=n.stateNode;return s===null&&(s=n.stateNode=new V_),s;case 22:return n=n.stateNode,s=n._retryCache,s===null&&(s=n._retryCache=new V_),s;default:throw Error(r(435,n.tag))}}function om(n,s){var o=pI(n);s.forEach(function(u){var f=SI.bind(null,n,u);o.has(u)||(o.add(u),u.then(f,f))})}function vn(n,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],d=n,_=s,T=_;e:for(;T!==null;){switch(T.tag){case 27:if(Mr(T.type)){ot=T.stateNode,hn=!1;break e}break;case 5:ot=T.stateNode,hn=!1;break e;case 3:case 4:ot=T.stateNode.containerInfo,hn=!0;break e}T=T.return}if(ot===null)throw Error(r(160));j_(d,_,f),ot=null,hn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)B_(s,n),s=s.sibling}var qn=null;function B_(n,s){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:vn(s,n),_n(n),u&4&&(Rr(3,n,n.return),Ll(3,n),Rr(5,n,n.return));break;case 1:vn(s,n),_n(n),u&512&&(yt||o===null||ui(o,o.return)),u&64&&Qi&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=qn;if(vn(s,n),_n(n),u&512&&(yt||o===null||ui(o,o.return)),u&4){var d=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":d=f.getElementsByTagName("title")[0],(!d||d[Ss]||d[It]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(u),f.head.insertBefore(d,f.querySelector("head > title"))),$t(d,u,o),d[It]=n,pt(d),u=d;break e;case"link":var _=M0("link","href",f).get(u+(o.href||""));if(_){for(var T=0;T<_.length;T++)if(d=_[T],d.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&d.getAttribute("rel")===(o.rel==null?null:o.rel)&&d.getAttribute("title")===(o.title==null?null:o.title)&&d.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){_.splice(T,1);break t}}d=f.createElement(u),$t(d,u,o),f.head.appendChild(d);break;case"meta":if(_=M0("meta","content",f).get(u+(o.content||""))){for(T=0;T<_.length;T++)if(d=_[T],d.getAttribute("content")===(o.content==null?null:""+o.content)&&d.getAttribute("name")===(o.name==null?null:o.name)&&d.getAttribute("property")===(o.property==null?null:o.property)&&d.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&d.getAttribute("charset")===(o.charSet==null?null:o.charSet)){_.splice(T,1);break t}}d=f.createElement(u),$t(d,u,o),f.head.appendChild(d);break;default:throw Error(r(468,u))}d[It]=n,pt(d),u=d}n.stateNode=u}else V0(f,n.type,n.stateNode);else n.stateNode=k0(f,u,n.memoizedProps);else d!==u?(d===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):d.count--,u===null?V0(f,n.type,n.stateNode):k0(f,u,n.memoizedProps)):u===null&&n.stateNode!==null&&im(n,n.memoizedProps,o.memoizedProps)}break;case 27:vn(s,n),_n(n),u&512&&(yt||o===null||ui(o,o.return)),o!==null&&u&4&&im(n,n.memoizedProps,o.memoizedProps);break;case 5:if(vn(s,n),_n(n),u&512&&(yt||o===null||ui(o,o.return)),n.flags&32){f=n.stateNode;try{Rn(f,"")}catch(H){nt(n,n.return,H)}}u&4&&n.stateNode!=null&&(f=n.memoizedProps,im(n,f,o!==null?o.memoizedProps:f)),u&1024&&(am=!0);break;case 6:if(vn(s,n),_n(n),u&4){if(n.stateNode===null)throw Error(r(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(H){nt(n,n.return,H)}}break;case 3:if(oh=null,f=qn,qn=sh(s.containerInfo),vn(s,n),qn=f,_n(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{tu(s.containerInfo)}catch(H){nt(n,n.return,H)}am&&(am=!1,F_(n));break;case 4:u=qn,qn=sh(n.stateNode.containerInfo),vn(s,n),_n(n),qn=u;break;case 12:vn(s,n),_n(n);break;case 13:vn(s,n),_n(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(dm=wn()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,om(n,u)));break;case 22:f=n.memoizedState!==null;var I=o!==null&&o.memoizedState!==null,z=Qi,K=yt;if(Qi=z||f,yt=K||I,vn(s,n),yt=K,Qi=z,_n(n),u&8192)e:for(s=n.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||I||Qi||yt||Xs(n)),o=null,s=n;;){if(s.tag===5||s.tag===26){if(o===null){I=o=s;try{if(d=I.stateNode,f)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{T=I.stateNode;var Q=I.memoizedProps.style,B=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;T.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(H){nt(I,I.return,H)}}}else if(s.tag===6){if(o===null){I=s;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(H){nt(I,I.return,H)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===n)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break e;for(;s.sibling===null;){if(s.return===null||s.return===n)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,om(n,o))));break;case 19:vn(s,n),_n(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,om(n,u)));break;case 30:break;case 21:break;default:vn(s,n),_n(n)}}function _n(n){var s=n.flags;if(s&2){try{for(var o,u=n.return;u!==null;){if(k_(u)){o=u;break}u=u.return}if(o==null)throw Error(r(160));switch(o.tag){case 27:var f=o.stateNode,d=rm(n);$c(n,d,f);break;case 5:var _=o.stateNode;o.flags&32&&(Rn(_,""),o.flags&=-33);var T=rm(n);$c(n,T,_);break;case 3:case 4:var I=o.stateNode.containerInfo,z=rm(n);sm(n,z,I);break;default:throw Error(r(161))}}catch(K){nt(n,n.return,K)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function F_(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var s=n;F_(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),n=n.sibling}}function Cr(n,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)L_(n,s.alternate,s),s=s.sibling}function Xs(n){for(n=n.child;n!==null;){var s=n;switch(s.tag){case 0:case 11:case 14:case 15:Rr(4,s,s.return),Xs(s);break;case 1:ui(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&D_(s,s.return,o),Xs(s);break;case 27:Kl(s.stateNode);case 26:case 5:ui(s,s.return),Xs(s);break;case 22:s.memoizedState===null&&Xs(s);break;case 30:Xs(s);break;default:Xs(s)}n=n.sibling}}function xr(n,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,f=n,d=s,_=d.flags;switch(d.tag){case 0:case 11:case 15:xr(f,d,o),Ll(4,d);break;case 1:if(xr(f,d,o),u=d,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(z){nt(u,u.return,z)}if(u=d,f=u.updateQueue,f!==null){var T=u.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)yv(I[f],T)}catch(z){nt(u,u.return,z)}}o&&_&64&&O_(d),Ul(d,d.return);break;case 27:M_(d);case 26:case 5:xr(f,d,o),o&&u===null&&_&4&&P_(d),Ul(d,d.return);break;case 12:xr(f,d,o);break;case 13:xr(f,d,o),o&&_&4&&z_(f,d);break;case 22:d.memoizedState===null&&xr(f,d,o),Ul(d,d.return);break;case 30:break;default:xr(f,d,o)}s=s.sibling}}function lm(n,s){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(n=s.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Al(o))}function um(n,s){n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&Al(n))}function ci(n,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)H_(n,s,o,u),s=s.sibling}function H_(n,s,o,u){var f=s.flags;switch(s.tag){case 0:case 11:case 15:ci(n,s,o,u),f&2048&&Ll(9,s);break;case 1:ci(n,s,o,u);break;case 3:ci(n,s,o,u),f&2048&&(n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&Al(n)));break;case 12:if(f&2048){ci(n,s,o,u),n=s.stateNode;try{var d=s.memoizedProps,_=d.id,T=d.onPostCommit;typeof T=="function"&&T(_,s.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(I){nt(s,s.return,I)}}else ci(n,s,o,u);break;case 13:ci(n,s,o,u);break;case 23:break;case 22:d=s.stateNode,_=s.alternate,s.memoizedState!==null?d._visibility&2?ci(n,s,o,u):jl(n,s):d._visibility&2?ci(n,s,o,u):(d._visibility|=2,Qa(n,s,o,u,(s.subtreeFlags&10256)!==0)),f&2048&&lm(_,s);break;case 24:ci(n,s,o,u),f&2048&&um(s.alternate,s);break;default:ci(n,s,o,u)}}function Qa(n,s,o,u,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var d=n,_=s,T=o,I=u,z=_.flags;switch(_.tag){case 0:case 11:case 15:Qa(d,_,T,I,f),Ll(8,_);break;case 23:break;case 22:var K=_.stateNode;_.memoizedState!==null?K._visibility&2?Qa(d,_,T,I,f):jl(d,_):(K._visibility|=2,Qa(d,_,T,I,f)),f&&z&2048&&lm(_.alternate,_);break;case 24:Qa(d,_,T,I,f),f&&z&2048&&um(_.alternate,_);break;default:Qa(d,_,T,I,f)}s=s.sibling}}function jl(n,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=n,u=s,f=u.flags;switch(u.tag){case 22:jl(o,u),f&2048&&lm(u.alternate,u);break;case 24:jl(o,u),f&2048&&um(u.alternate,u);break;default:jl(o,u)}s=s.sibling}}var zl=8192;function Xa(n){if(n.subtreeFlags&zl)for(n=n.child;n!==null;)q_(n),n=n.sibling}function q_(n){switch(n.tag){case 26:Xa(n),n.flags&zl&&n.memoizedState!==null&&eR(qn,n.memoizedState,n.memoizedProps);break;case 5:Xa(n);break;case 3:case 4:var s=qn;qn=sh(n.stateNode.containerInfo),Xa(n),qn=s;break;case 22:n.memoizedState===null&&(s=n.alternate,s!==null&&s.memoizedState!==null?(s=zl,zl=16777216,Xa(n),zl=s):Xa(n));break;default:Xa(n)}}function G_(n){var s=n.alternate;if(s!==null&&(n=s.child,n!==null)){s.child=null;do s=n.sibling,n.sibling=null,n=s;while(n!==null)}}function Bl(n){var s=n.deletions;if((n.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];Ut=u,K_(u,n)}G_(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)$_(n),n=n.sibling}function $_(n){switch(n.tag){case 0:case 11:case 15:Bl(n),n.flags&2048&&Rr(9,n,n.return);break;case 3:Bl(n);break;case 12:Bl(n);break;case 22:var s=n.stateNode;n.memoizedState!==null&&s._visibility&2&&(n.return===null||n.return.tag!==13)?(s._visibility&=-3,Kc(n)):Bl(n);break;default:Bl(n)}}function Kc(n){var s=n.deletions;if((n.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];Ut=u,K_(u,n)}G_(n)}for(n=n.child;n!==null;){switch(s=n,s.tag){case 0:case 11:case 15:Rr(8,s,s.return),Kc(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,Kc(s));break;default:Kc(s)}n=n.sibling}}function K_(n,s){for(;Ut!==null;){var o=Ut;switch(o.tag){case 0:case 11:case 15:Rr(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Al(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Ut=u;else e:for(o=n;Ut!==null;){u=Ut;var f=u.sibling,d=u.return;if(U_(u),u===o){Ut=null;break e}if(f!==null){f.return=d,Ut=f;break e}Ut=d}}}var gI={getCacheForType:function(n){var s=Jt(xt),o=s.data.get(n);return o===void 0&&(o=n(),s.data.set(n,o)),o}},yI=typeof WeakMap=="function"?WeakMap:Map,Qe=0,rt=null,Me=null,Be=0,Xe=0,En=null,Nr=!1,Wa=!1,cm=!1,Wi=0,mt=0,Or=0,Ws=0,hm=0,Vn=0,Ja=0,Fl=null,fn=null,fm=!1,dm=0,Yc=1/0,Qc=null,Dr=null,Gt=0,Pr=null,Za=null,eo=0,mm=0,pm=null,Y_=null,Hl=0,gm=null;function Tn(){if((Qe&2)!==0&&Be!==0)return Be&-Be;if($.T!==null){var n=Ba;return n!==0?n:Am()}return mr()}function Q_(){Vn===0&&(Vn=(Be&536870912)===0||Ge?Jo():536870912);var n=Mn.current;return n!==null&&(n.flags|=32),Vn}function bn(n,s,o){(n===rt&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)&&(to(n,0),kr(n,Be,Vn,!1)),xi(n,o),((Qe&2)===0||n!==rt)&&(n===rt&&((Qe&2)===0&&(Ws|=o),mt===4&&kr(n,Be,Vn,!1)),hi(n))}function X_(n,s,o){if((Qe&6)!==0)throw Error(r(327));var u=!o&&(s&124)===0&&(s&n.expiredLanes)===0||As(n,s),f=u?EI(n,s):_m(n,s,!0),d=u;do{if(f===0){Wa&&!u&&kr(n,s,0,!1);break}else{if(o=n.current.alternate,d&&!vI(o)){f=_m(n,s,!1),d=!1;continue}if(f===2){if(d=s,n.errorRecoveryDisabledLanes&d)var _=0;else _=n.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){s=_;e:{var T=n;f=Fl;var I=T.current.memoizedState.isDehydrated;if(I&&(to(T,_).flags|=256),_=_m(T,_,!1),_!==2){if(cm&&!I){T.errorRecoveryDisabledLanes|=d,Ws|=d,f=4;break e}d=fn,fn=f,d!==null&&(fn===null?fn=d:fn.push.apply(fn,d))}f=_}if(d=!1,f!==2)continue}}if(f===1){to(n,0),kr(n,s,0,!0);break}e:{switch(u=n,d=f,d){case 0:case 1:throw Error(r(345));case 4:if((s&4194048)!==s)break;case 6:kr(u,s,Vn,!Nr);break e;case 2:fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((s&62914560)===s&&(f=dm+300-wn(),10<f)){if(kr(u,s,Vn,!Nr),va(u,0,!0)!==0)break e;u.timeoutHandle=w0(W_.bind(null,u,o,fn,Qc,fm,s,Vn,Ws,Ja,Nr,d,2,-0,0),f);break e}W_(u,o,fn,Qc,fm,s,Vn,Ws,Ja,Nr,d,0,-0,0)}}break}while(!0);hi(n)}function W_(n,s,o,u,f,d,_,T,I,z,K,Q,B,H){if(n.timeoutHandle=-1,Q=s.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(Xl={stylesheets:null,count:0,unsuspend:ZI},q_(s),Q=tR(),Q!==null)){n.cancelPendingCommit=Q(r0.bind(null,n,s,d,o,u,f,_,T,I,K,1,B,H)),kr(n,d,_,!z);return}r0(n,s,d,o,u,f,_,T,I)}function vI(n){for(var s=n;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],d=f.getSnapshot;f=f.value;try{if(!gn(d(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function kr(n,s,o,u){s&=~hm,s&=~Ws,n.suspendedLanes|=s,n.pingedLanes&=~s,u&&(n.warmLanes|=s),u=n.expirationTimes;for(var f=s;0<f;){var d=31-Wt(f),_=1<<d;u[d]=-1,f&=~_}o!==0&&Xn(n,o,s)}function Xc(){return(Qe&6)===0?(ql(0),!1):!0}function ym(){if(Me!==null){if(Xe===0)var n=Me.return;else n=Me,Hi=Gs=null,kd(n),Ka=null,kl=0,n=Me;for(;n!==null;)N_(n.alternate,n),n=n.return;Me=null}}function to(n,s){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,VI(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),ym(),rt=n,Me=o=zi(n.current,null),Be=s,Xe=0,En=null,Nr=!1,Wa=As(n,s),cm=!1,Ja=Vn=hm=Ws=Or=mt=0,fn=Fl=null,fm=!1,(s&8)!==0&&(s|=s&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=s;0<u;){var f=31-Wt(u),d=1<<f;s|=n[f],u&=~d}return Wi=s,vc(),o}function J_(n,s){Ne=null,$.H=Lc,s===wl||s===Rc?(s=pv(),Xe=3):s===fv?(s=pv(),Xe=4):Xe=s===g_?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,En=s,Me===null&&(mt=1,Fc(n,On(s,n.current)))}function Z_(){var n=$.H;return $.H=Lc,n===null?Lc:n}function e0(){var n=$.A;return $.A=gI,n}function vm(){mt=4,Nr||(Be&4194048)!==Be&&Mn.current!==null||(Wa=!0),(Or&134217727)===0&&(Ws&134217727)===0||rt===null||kr(rt,Be,Vn,!1)}function _m(n,s,o){var u=Qe;Qe|=2;var f=Z_(),d=e0();(rt!==n||Be!==s)&&(Qc=null,to(n,s)),s=!1;var _=mt;e:do try{if(Xe!==0&&Me!==null){var T=Me,I=En;switch(Xe){case 8:ym(),_=6;break e;case 3:case 2:case 9:case 6:Mn.current===null&&(s=!0);var z=Xe;if(Xe=0,En=null,no(n,T,I,z),o&&Wa){_=0;break e}break;default:z=Xe,Xe=0,En=null,no(n,T,I,z)}}_I(),_=mt;break}catch(K){J_(n,K)}while(!0);return s&&n.shellSuspendCounter++,Hi=Gs=null,Qe=u,$.H=f,$.A=d,Me===null&&(rt=null,Be=0,vc()),_}function _I(){for(;Me!==null;)t0(Me)}function EI(n,s){var o=Qe;Qe|=2;var u=Z_(),f=e0();rt!==n||Be!==s?(Qc=null,Yc=wn()+500,to(n,s)):Wa=As(n,s);e:do try{if(Xe!==0&&Me!==null){s=Me;var d=En;t:switch(Xe){case 1:Xe=0,En=null,no(n,s,d,1);break;case 2:case 9:if(dv(d)){Xe=0,En=null,n0(s);break}s=function(){Xe!==2&&Xe!==9||rt!==n||(Xe=7),hi(n)},d.then(s,s);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:dv(d)?(Xe=0,En=null,n0(s)):(Xe=0,En=null,no(n,s,d,7));break;case 5:var _=null;switch(Me.tag){case 26:_=Me.memoizedState;case 5:case 27:var T=Me;if(!_||L0(_)){Xe=0,En=null;var I=T.sibling;if(I!==null)Me=I;else{var z=T.return;z!==null?(Me=z,Wc(z)):Me=null}break t}}Xe=0,En=null,no(n,s,d,5);break;case 6:Xe=0,En=null,no(n,s,d,6);break;case 8:ym(),mt=6;break e;default:throw Error(r(462))}}TI();break}catch(K){J_(n,K)}while(!0);return Hi=Gs=null,$.H=u,$.A=f,Qe=o,Me!==null?0:(rt=null,Be=0,vc(),mt)}function TI(){for(;Me!==null&&!Yo();)t0(Me)}function t0(n){var s=C_(n.alternate,n,Wi);n.memoizedProps=n.pendingProps,s===null?Wc(n):Me=s}function n0(n){var s=n,o=s.alternate;switch(s.tag){case 15:case 0:s=b_(o,s,s.pendingProps,s.type,void 0,Be);break;case 11:s=b_(o,s,s.pendingProps,s.type.render,s.ref,Be);break;case 5:kd(s);default:N_(o,s),s=Me=iv(s,Wi),s=C_(o,s,Wi)}n.memoizedProps=n.pendingProps,s===null?Wc(n):Me=s}function no(n,s,o,u){Hi=Gs=null,kd(s),Ka=null,kl=0;var f=s.return;try{if(cI(n,f,s,o,Be)){mt=1,Fc(n,On(o,n.current)),Me=null;return}}catch(d){if(f!==null)throw Me=f,d;mt=1,Fc(n,On(o,n.current)),Me=null;return}s.flags&32768?(Ge||u===1?n=!0:Wa||(Be&536870912)!==0?n=!1:(Nr=n=!0,(u===2||u===9||u===3||u===6)&&(u=Mn.current,u!==null&&u.tag===13&&(u.flags|=16384))),i0(s,n)):Wc(s)}function Wc(n){var s=n;do{if((s.flags&32768)!==0){i0(s,Nr);return}n=s.return;var o=fI(s.alternate,s,Wi);if(o!==null){Me=o;return}if(s=s.sibling,s!==null){Me=s;return}Me=s=n}while(s!==null);mt===0&&(mt=5)}function i0(n,s){do{var o=dI(n.alternate,n);if(o!==null){o.flags&=32767,Me=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(n=n.sibling,n!==null)){Me=n;return}Me=n=o}while(n!==null);mt=6,Me=null}function r0(n,s,o,u,f,d,_,T,I){n.cancelPendingCommit=null;do Jc();while(Gt!==0);if((Qe&6)!==0)throw Error(r(327));if(s!==null){if(s===n.current)throw Error(r(177));if(d=s.lanes|s.childLanes,d|=ud,el(n,o,d,_,T,I),n===rt&&(Me=rt=null,Be=0),Za=s,Pr=n,eo=o,mm=d,pm=f,Y_=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,wI(_s,function(){return u0(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=$.T,$.T=null,f=oe.p,oe.p=2,_=Qe,Qe|=4;try{mI(n,s,o)}finally{Qe=_,oe.p=f,$.T=u}}Gt=1,s0(),a0(),o0()}}function s0(){if(Gt===1){Gt=0;var n=Pr,s=Za,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=$.T,$.T=null;var u=oe.p;oe.p=2;var f=Qe;Qe|=4;try{B_(s,n);var d=Om,_=Ky(n.containerInfo),T=d.focusedElem,I=d.selectionRange;if(_!==T&&T&&T.ownerDocument&&$y(T.ownerDocument.documentElement,T)){if(I!==null&&rd(T)){var z=I.start,K=I.end;if(K===void 0&&(K=z),"selectionStart"in T)T.selectionStart=z,T.selectionEnd=Math.min(K,T.value.length);else{var Q=T.ownerDocument||document,B=Q&&Q.defaultView||window;if(B.getSelection){var H=B.getSelection(),Te=T.textContent.length,_e=Math.min(I.start,Te),et=I.end===void 0?_e:Math.min(I.end,Te);!H.extend&&_e>et&&(_=et,et=_e,_e=_);var M=Gy(T,_e),O=Gy(T,et);if(M&&O&&(H.rangeCount!==1||H.anchorNode!==M.node||H.anchorOffset!==M.offset||H.focusNode!==O.node||H.focusOffset!==O.offset)){var U=Q.createRange();U.setStart(M.node,M.offset),H.removeAllRanges(),_e>et?(H.addRange(U),H.extend(O.node,O.offset)):(U.setEnd(O.node,O.offset),H.addRange(U))}}}}for(Q=[],H=T;H=H.parentNode;)H.nodeType===1&&Q.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<Q.length;T++){var Y=Q[T];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}ch=!!Nm,Om=Nm=null}finally{Qe=f,oe.p=u,$.T=o}}n.current=s,Gt=2}}function a0(){if(Gt===2){Gt=0;var n=Pr,s=Za,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=$.T,$.T=null;var u=oe.p;oe.p=2;var f=Qe;Qe|=4;try{L_(n,s.alternate,s)}finally{Qe=f,oe.p=u,$.T=o}}Gt=3}}function o0(){if(Gt===4||Gt===3){Gt=0,Ku();var n=Pr,s=Za,o=eo,u=Y_;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Gt=5:(Gt=0,Za=Pr=null,l0(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Dr=null),_a(o),s=s.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(ft,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=$.T,f=oe.p,oe.p=2,$.T=null;try{for(var d=n.onRecoverableError,_=0;_<u.length;_++){var T=u[_];d(T.value,{componentStack:T.stack})}}finally{$.T=s,oe.p=f}}(eo&3)!==0&&Jc(),hi(n),f=n.pendingLanes,(o&4194090)!==0&&(f&42)!==0?n===gm?Hl++:(Hl=0,gm=n):Hl=0,ql(0)}}function l0(n,s){(n.pooledCacheLanes&=s)===0&&(s=n.pooledCache,s!=null&&(n.pooledCache=null,Al(s)))}function Jc(n){return s0(),a0(),o0(),u0()}function u0(){if(Gt!==5)return!1;var n=Pr,s=mm;mm=0;var o=_a(eo),u=$.T,f=oe.p;try{oe.p=32>o?32:o,$.T=null,o=pm,pm=null;var d=Pr,_=eo;if(Gt=0,Za=Pr=null,eo=0,(Qe&6)!==0)throw Error(r(331));var T=Qe;if(Qe|=4,$_(d.current),H_(d,d.current,_,o),Qe=T,ql(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(ft,d)}catch{}return!0}finally{oe.p=f,$.T=u,l0(n,s)}}function c0(n,s,o){s=On(o,s),s=Yd(n.stateNode,s,2),n=Ar(n,s,2),n!==null&&(xi(n,2),hi(n))}function nt(n,s,o){if(n.tag===3)c0(n,n,o);else for(;s!==null;){if(s.tag===3){c0(s,n,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Dr===null||!Dr.has(u))){n=On(o,n),o=m_(2),u=Ar(s,o,2),u!==null&&(p_(o,u,s,n),xi(u,2),hi(u));break}}s=s.return}}function Em(n,s,o){var u=n.pingCache;if(u===null){u=n.pingCache=new yI;var f=new Set;u.set(s,f)}else f=u.get(s),f===void 0&&(f=new Set,u.set(s,f));f.has(o)||(cm=!0,f.add(o),n=bI.bind(null,n,s,o),s.then(n,n))}function bI(n,s,o){var u=n.pingCache;u!==null&&u.delete(s),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,rt===n&&(Be&o)===o&&(mt===4||mt===3&&(Be&62914560)===Be&&300>wn()-dm?(Qe&2)===0&&to(n,0):hm|=o,Ja===Be&&(Ja=0)),hi(n)}function h0(n,s){s===0&&(s=Zo()),n=La(n,s),n!==null&&(xi(n,s),hi(n))}function AI(n){var s=n.memoizedState,o=0;s!==null&&(o=s.retryLane),h0(n,o)}function SI(n,s){var o=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(r(314))}u!==null&&u.delete(s),h0(n,o)}function wI(n,s){return ys(n,s)}var Zc=null,io=null,Tm=!1,eh=!1,bm=!1,Js=0;function hi(n){n!==io&&n.next===null&&(io===null?Zc=io=n:io=io.next=n),eh=!0,Tm||(Tm=!0,RI())}function ql(n,s){if(!bm&&eh){bm=!0;do for(var o=!1,u=Zc;u!==null;){if(n!==0){var f=u.pendingLanes;if(f===0)var d=0;else{var _=u.suspendedLanes,T=u.pingedLanes;d=(1<<31-Wt(42|n)+1)-1,d&=f&~(_&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(o=!0,p0(u,d))}else d=Be,d=va(u,u===rt?d:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(d&3)===0||As(u,d)||(o=!0,p0(u,d));u=u.next}while(o);bm=!1}}function II(){f0()}function f0(){eh=Tm=!1;var n=0;Js!==0&&(MI()&&(n=Js),Js=0);for(var s=wn(),o=null,u=Zc;u!==null;){var f=u.next,d=d0(u,s);d===0?(u.next=null,o===null?Zc=f:o.next=f,f===null&&(io=o)):(o=u,(n!==0||(d&3)!==0)&&(eh=!0)),u=f}ql(n)}function d0(n,s){for(var o=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var _=31-Wt(d),T=1<<_,I=f[_];I===-1?((T&o)===0||(T&u)!==0)&&(f[_]=Wo(T,s)):I<=s&&(n.expiredLanes|=T),d&=~T}if(s=rt,o=Be,o=va(n,n===s?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===s&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&vs(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||As(n,o)){if(s=o&-o,s===n.callbackPriority)return s;switch(u!==null&&vs(u),_a(o)){case 2:case 8:o=ga;break;case 32:o=_s;break;case 268435456:o=ya;break;default:o=_s}return u=m0.bind(null,n),o=ys(o,u),n.callbackPriority=s,n.callbackNode=o,s}return u!==null&&u!==null&&vs(u),n.callbackPriority=2,n.callbackNode=null,2}function m0(n,s){if(Gt!==0&&Gt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(Jc()&&n.callbackNode!==o)return null;var u=Be;return u=va(n,n===rt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(X_(n,u,s),d0(n,wn()),n.callbackNode!=null&&n.callbackNode===o?m0.bind(null,n):null)}function p0(n,s){if(Jc())return null;X_(n,s,!0)}function RI(){LI(function(){(Qe&6)!==0?ys(Qo,II):f0()})}function Am(){return Js===0&&(Js=Jo()),Js}function g0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:wa(""+n)}function y0(n,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,n.id&&o.setAttribute("form",n.id),s.parentNode.insertBefore(o,s),n=new FormData(n),o.parentNode.removeChild(o),n}function CI(n,s,o,u,f){if(s==="submit"&&o&&o.stateNode===f){var d=g0((f[Et]||null).action),_=u.submitter;_&&(s=(s=_[Et]||null)?g0(s.formAction):_.getAttribute("formAction"),s!==null&&(d=s,_=null));var T=new Ia("action","action",null,u,f);n.push({event:T,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Js!==0){var I=_?y0(f,_):new FormData(f);Hd(o,{pending:!0,data:I,method:f.method,action:d},null,I)}}else typeof d=="function"&&(T.preventDefault(),I=_?y0(f,_):new FormData(f),Hd(o,{pending:!0,data:I,method:f.method,action:d},d,I))},currentTarget:f}]})}}for(var Sm=0;Sm<ld.length;Sm++){var wm=ld[Sm],xI=wm.toLowerCase(),NI=wm[0].toUpperCase()+wm.slice(1);Hn(xI,"on"+NI)}Hn(Xy,"onAnimationEnd"),Hn(Wy,"onAnimationIteration"),Hn(Jy,"onAnimationStart"),Hn("dblclick","onDoubleClick"),Hn("focusin","onFocus"),Hn("focusout","onBlur"),Hn(Kw,"onTransitionRun"),Hn(Yw,"onTransitionStart"),Hn(Qw,"onTransitionCancel"),Hn(Zy,"onTransitionEnd"),Oi("onMouseEnter",["mouseout","mouseover"]),Oi("onMouseLeave",["mouseout","mouseover"]),Oi("onPointerEnter",["pointerout","pointerover"]),Oi("onPointerLeave",["pointerout","pointerover"]),Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OI=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gl));function v0(n,s){s=(s&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],f=u.event;u=u.listeners;e:{var d=void 0;if(s)for(var _=u.length-1;0<=_;_--){var T=u[_],I=T.instance,z=T.currentTarget;if(T=T.listener,I!==d&&f.isPropagationStopped())break e;d=T,f.currentTarget=z;try{d(f)}catch(K){Bc(K)}f.currentTarget=null,d=I}else for(_=0;_<u.length;_++){if(T=u[_],I=T.instance,z=T.currentTarget,T=T.listener,I!==d&&f.isPropagationStopped())break e;d=T,f.currentTarget=z;try{d(f)}catch(K){Bc(K)}f.currentTarget=null,d=I}}}}function Ve(n,s){var o=s[nl];o===void 0&&(o=s[nl]=new Set);var u=n+"__bubble";o.has(u)||(_0(s,n,2,!1),o.add(u))}function Im(n,s,o){var u=0;s&&(u|=4),_0(o,n,u,s)}var th="_reactListening"+Math.random().toString(36).slice(2);function Rm(n){if(!n[th]){n[th]=!0,il.forEach(function(o){o!=="selectionchange"&&(OI.has(o)||Im(o,!1,n),Im(o,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[th]||(s[th]=!0,Im("selectionchange",!1,s))}}function _0(n,s,o,u){switch(H0(s)){case 2:var f=rR;break;case 8:f=sR;break;default:f=Bm}o=f.bind(null,s,o,n),f=void 0,!xn||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(s,o,{capture:!0,passive:f}):n.addEventListener(s,o,!0):f!==void 0?n.addEventListener(s,o,{passive:f}):n.addEventListener(s,o,!1)}function Cm(n,s,o,u,f){var d=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var _=u.tag;if(_===3||_===4){var T=u.stateNode.containerInfo;if(T===f)break;if(_===4)for(_=u.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===f)return;_=_.return}for(;T!==null;){if(_=Ni(T),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){u=d=_;continue e}T=T.parentNode}}u=u.return}ic(function(){var z=d,K=Cn(o),Q=[];e:{var B=ev.get(n);if(B!==void 0){var H=Ia,Te=n;switch(n){case"keypress":if(ni(o)===0)break e;case"keydown":case"keyup":H=Da;break;case"focusin":Te="focus",H=xa;break;case"focusout":Te="blur",H=xa;break;case"beforeblur":case"afterblur":H=xa;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Nn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=ed;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=hc;break;case Xy:case Wy:case Jy:H=Na;break;case Zy:H=dc;break;case"scroll":case"scrollend":H=rc;break;case"wheel":H=Pa;break;case"copy":case"cut":case"paste":H=Oa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=pl;break;case"toggle":case"beforetoggle":H=pc}var _e=(s&4)!==0,et=!_e&&(n==="scroll"||n==="scrollend"),M=_e?B!==null?B+"Capture":null:B;_e=[];for(var O=z,U;O!==null;){var Y=O;if(U=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||U===null||M===null||(Y=Os(O,M),Y!=null&&_e.push($l(O,Y,U))),et)break;O=O.return}0<_e.length&&(B=new H(B,Te,null,o,K),Q.push({event:B,listeners:_e}))}}if((s&7)===0){e:{if(B=n==="mouseover"||n==="pointerover",H=n==="mouseout"||n==="pointerout",B&&o!==ki&&(Te=o.relatedTarget||o.fromElement)&&(Ni(Te)||Te[In]))break e;if((H||B)&&(B=K.window===K?K:(B=K.ownerDocument)?B.defaultView||B.parentWindow:window,H?(Te=o.relatedTarget||o.toElement,H=z,Te=Te?Ni(Te):null,Te!==null&&(et=l(Te),_e=Te.tag,Te!==et||_e!==5&&_e!==27&&_e!==6)&&(Te=null)):(H=null,Te=z),H!==Te)){if(_e=Nn,Y="onMouseLeave",M="onMouseEnter",O="mouse",(n==="pointerout"||n==="pointerover")&&(_e=pl,Y="onPointerLeave",M="onPointerEnter",O="pointer"),et=H==null?B:Jn(H),U=Te==null?B:Jn(Te),B=new _e(Y,O+"leave",H,o,K),B.target=et,B.relatedTarget=U,Y=null,Ni(K)===z&&(_e=new _e(M,O+"enter",Te,o,K),_e.target=U,_e.relatedTarget=et,Y=_e),et=Y,H&&Te)t:{for(_e=H,M=Te,O=0,U=_e;U;U=ro(U))O++;for(U=0,Y=M;Y;Y=ro(Y))U++;for(;0<O-U;)_e=ro(_e),O--;for(;0<U-O;)M=ro(M),U--;for(;O--;){if(_e===M||M!==null&&_e===M.alternate)break t;_e=ro(_e),M=ro(M)}_e=null}else _e=null;H!==null&&E0(Q,B,H,_e,!1),Te!==null&&et!==null&&E0(Q,et,Te,_e,!0)}}e:{if(B=z?Jn(z):window,H=B.nodeName&&B.nodeName.toLowerCase(),H==="select"||H==="input"&&B.type==="file")var he=jy;else if(Ct(B))if(zy)he=qw;else{he=Fw;var Pe=Bw}else H=B.nodeName,!H||H.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?z&&ll(z.elementType)&&(he=jy):he=Hw;if(he&&(he=he(n,z))){ji(Q,he,o,K);break e}Pe&&Pe(n,B,z),n==="focusout"&&z&&B.type==="number"&&z.memoizedProps.value!=null&&vr(B,"number",B.value)}switch(Pe=z?Jn(z):window,n){case"focusin":(Ct(Pe)||Pe.contentEditable==="true")&&(ka=Pe,sd=z,vl=null);break;case"focusout":vl=sd=ka=null;break;case"mousedown":ad=!0;break;case"contextmenu":case"mouseup":case"dragend":ad=!1,Yy(Q,o,K);break;case"selectionchange":if($w)break;case"keydown":case"keyup":Yy(Q,o,K)}var me;if(si)e:{switch(n){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else je?q(n,o)&&(Ee="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(Ee="onCompositionStart");Ee&&(v&&o.locale!=="ko"&&(je||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&je&&(me=cl()):(ti=K,_r="value"in ti?ti.value:ti.textContent,je=!0)),Pe=nh(z,Ee),0<Pe.length&&(Ee=new dl(Ee,n,null,o,K),Q.push({event:Ee,listeners:Pe}),me?Ee.data=me:(me=se(o),me!==null&&(Ee.data=me)))),(me=y?Rt(n,o):ze(n,o))&&(Ee=nh(z,"onBeforeInput"),0<Ee.length&&(Pe=new dl("onBeforeInput","beforeinput",null,o,K),Q.push({event:Pe,listeners:Ee}),Pe.data=me)),CI(Q,n,z,o,K)}v0(Q,s)})}function $l(n,s,o){return{instance:n,listener:s,currentTarget:o}}function nh(n,s){for(var o=s+"Capture",u=[];n!==null;){var f=n,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Os(n,o),f!=null&&u.unshift($l(n,f,d)),f=Os(n,s),f!=null&&u.push($l(n,f,d))),n.tag===3)return u;n=n.return}return[]}function ro(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function E0(n,s,o,u,f){for(var d=s._reactName,_=[];o!==null&&o!==u;){var T=o,I=T.alternate,z=T.stateNode;if(T=T.tag,I!==null&&I===u)break;T!==5&&T!==26&&T!==27||z===null||(I=z,f?(z=Os(o,d),z!=null&&_.unshift($l(o,z,I))):f||(z=Os(o,d),z!=null&&_.push($l(o,z,I)))),o=o.return}_.length!==0&&n.push({event:s,listeners:_})}var DI=/\r\n?/g,PI=/\u0000|\uFFFD/g;function T0(n){return(typeof n=="string"?n:""+n).replace(DI,`
`).replace(PI,"")}function b0(n,s){return s=T0(s),T0(n)===s}function ih(){}function Ze(n,s,o,u,f,d){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||Rn(n,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&Rn(n,""+u);break;case"className":Zn(n,"class",u);break;case"tabIndex":Zn(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Zn(n,o,u);break;case"style":ol(n,u,d);break;case"data":if(s!=="object"){Zn(n,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=wa(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(o==="formAction"?(s!=="input"&&Ze(n,s,"name",f.name,f,null),Ze(n,s,"formEncType",f.formEncType,f,null),Ze(n,s,"formMethod",f.formMethod,f,null),Ze(n,s,"formTarget",f.formTarget,f,null)):(Ze(n,s,"encType",f.encType,f,null),Ze(n,s,"method",f.method,f,null),Ze(n,s,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=wa(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=ih);break;case"onScroll":u!=null&&Ve("scroll",n);break;case"onScrollEnd":u!=null&&Ve("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(r(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=wa(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":Ve("beforetoggle",n),Ve("toggle",n),yr(n,"popover",u);break;case"xlinkActuate":Ft(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Ft(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Ft(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Ft(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Ft(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Ft(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Ft(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Ft(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Ft(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":yr(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Jf.get(o)||o,yr(n,o,u))}}function xm(n,s,o,u,f,d){switch(o){case"style":ol(n,u,d);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(r(60));n.innerHTML=o}}break;case"children":typeof u=="string"?Rn(n,u):(typeof u=="number"||typeof u=="bigint")&&Rn(n,""+u);break;case"onScroll":u!=null&&Ve("scroll",n);break;case"onScrollEnd":u!=null&&Ve("scrollend",n);break;case"onClick":u!=null&&(n.onclick=ih);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ea.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),d=n[Et]||null,d=d!=null?d[o]:null,typeof d=="function"&&n.removeEventListener(s,d,f),typeof u=="function")){typeof d!="function"&&d!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(s,u,f);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):yr(n,o,u)}}}function $t(n,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",n),Ve("load",n);var u=!1,f=!1,d;for(d in o)if(o.hasOwnProperty(d)){var _=o[d];if(_!=null)switch(d){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:Ze(n,s,d,_,o,null)}}f&&Ze(n,s,"srcSet",o.srcSet,o,null),u&&Ze(n,s,"src",o.src,o,null);return;case"input":Ve("invalid",n);var T=d=_=f=null,I=null,z=null;for(u in o)if(o.hasOwnProperty(u)){var K=o[u];if(K!=null)switch(u){case"name":f=K;break;case"type":_=K;break;case"checked":I=K;break;case"defaultChecked":z=K;break;case"value":d=K;break;case"defaultValue":T=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(r(137,s));break;default:Ze(n,s,u,K,o,null)}}Cs(n,d,T,I,z,_,f,!1),Sa(n);return;case"select":Ve("invalid",n),u=_=d=null;for(f in o)if(o.hasOwnProperty(f)&&(T=o[f],T!=null))switch(f){case"value":d=T;break;case"defaultValue":_=T;break;case"multiple":u=T;default:Ze(n,s,f,T,o,null)}s=d,o=_,n.multiple=!!u,s!=null?Pi(n,!!u,s,!1):o!=null&&Pi(n,!!u,o,!0);return;case"textarea":Ve("invalid",n),d=f=u=null;for(_ in o)if(o.hasOwnProperty(_)&&(T=o[_],T!=null))switch(_){case"value":u=T;break;case"defaultValue":f=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ze(n,s,_,T,o,null)}xs(n,u,f,d),Sa(n);return;case"option":for(I in o)if(o.hasOwnProperty(I)&&(u=o[I],u!=null))switch(I){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Ze(n,s,I,u,o,null)}return;case"dialog":Ve("beforetoggle",n),Ve("toggle",n),Ve("cancel",n),Ve("close",n);break;case"iframe":case"object":Ve("load",n);break;case"video":case"audio":for(u=0;u<Gl.length;u++)Ve(Gl[u],n);break;case"image":Ve("error",n),Ve("load",n);break;case"details":Ve("toggle",n);break;case"embed":case"source":case"link":Ve("error",n),Ve("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in o)if(o.hasOwnProperty(z)&&(u=o[z],u!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:Ze(n,s,z,u,o,null)}return;default:if(ll(s)){for(K in o)o.hasOwnProperty(K)&&(u=o[K],u!==void 0&&xm(n,s,K,u,o,void 0));return}}for(T in o)o.hasOwnProperty(T)&&(u=o[T],u!=null&&Ze(n,s,T,u,o,null))}function kI(n,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,_=null,T=null,I=null,z=null,K=null;for(H in o){var Q=o[H];if(o.hasOwnProperty(H)&&Q!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":I=Q;default:u.hasOwnProperty(H)||Ze(n,s,H,null,u,Q)}}for(var B in u){var H=u[B];if(Q=o[B],u.hasOwnProperty(B)&&(H!=null||Q!=null))switch(B){case"type":d=H;break;case"name":f=H;break;case"checked":z=H;break;case"defaultChecked":K=H;break;case"value":_=H;break;case"defaultValue":T=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(r(137,s));break;default:H!==Q&&Ze(n,s,B,H,u,Q)}}pn(n,_,T,I,z,K,d,f);return;case"select":H=_=T=B=null;for(d in o)if(I=o[d],o.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":H=I;default:u.hasOwnProperty(d)||Ze(n,s,d,null,u,I)}for(f in u)if(d=u[f],I=o[f],u.hasOwnProperty(f)&&(d!=null||I!=null))switch(f){case"value":B=d;break;case"defaultValue":T=d;break;case"multiple":_=d;default:d!==I&&Ze(n,s,f,d,u,I)}s=T,o=_,u=H,B!=null?Pi(n,!!o,B,!1):!!u!=!!o&&(s!=null?Pi(n,!!o,s,!0):Pi(n,!!o,o?[]:"",!1));return;case"textarea":H=B=null;for(T in o)if(f=o[T],o.hasOwnProperty(T)&&f!=null&&!u.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ze(n,s,T,null,u,f)}for(_ in u)if(f=u[_],d=o[_],u.hasOwnProperty(_)&&(f!=null||d!=null))switch(_){case"value":B=f;break;case"defaultValue":H=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==d&&Ze(n,s,_,f,u,d)}We(n,B,H);return;case"option":for(var Te in o)if(B=o[Te],o.hasOwnProperty(Te)&&B!=null&&!u.hasOwnProperty(Te))switch(Te){case"selected":n.selected=!1;break;default:Ze(n,s,Te,null,u,B)}for(I in u)if(B=u[I],H=o[I],u.hasOwnProperty(I)&&B!==H&&(B!=null||H!=null))switch(I){case"selected":n.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Ze(n,s,I,B,u,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _e in o)B=o[_e],o.hasOwnProperty(_e)&&B!=null&&!u.hasOwnProperty(_e)&&Ze(n,s,_e,null,u,B);for(z in u)if(B=u[z],H=o[z],u.hasOwnProperty(z)&&B!==H&&(B!=null||H!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(r(137,s));break;default:Ze(n,s,z,B,u,H)}return;default:if(ll(s)){for(var et in o)B=o[et],o.hasOwnProperty(et)&&B!==void 0&&!u.hasOwnProperty(et)&&xm(n,s,et,void 0,u,B);for(K in u)B=u[K],H=o[K],!u.hasOwnProperty(K)||B===H||B===void 0&&H===void 0||xm(n,s,K,B,u,H);return}}for(var M in o)B=o[M],o.hasOwnProperty(M)&&B!=null&&!u.hasOwnProperty(M)&&Ze(n,s,M,null,u,B);for(Q in u)B=u[Q],H=o[Q],!u.hasOwnProperty(Q)||B===H||B==null&&H==null||Ze(n,s,Q,B,u,H)}var Nm=null,Om=null;function rh(n){return n.nodeType===9?n:n.ownerDocument}function A0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function S0(n,s){if(n===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&s==="foreignObject"?0:n}function Dm(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Pm=null;function MI(){var n=window.event;return n&&n.type==="popstate"?n===Pm?!1:(Pm=n,!0):(Pm=null,!1)}var w0=typeof setTimeout=="function"?setTimeout:void 0,VI=typeof clearTimeout=="function"?clearTimeout:void 0,I0=typeof Promise=="function"?Promise:void 0,LI=typeof queueMicrotask=="function"?queueMicrotask:typeof I0<"u"?function(n){return I0.resolve(null).then(n).catch(UI)}:w0;function UI(n){setTimeout(function(){throw n})}function Mr(n){return n==="head"}function R0(n,s){var o=s,u=0,f=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(0<u&&8>u){o=u;var _=n.ownerDocument;if(o&1&&Kl(_.documentElement),o&2&&Kl(_.body),o&4)for(o=_.head,Kl(o),_=o.firstChild;_;){var T=_.nextSibling,I=_.nodeName;_[Ss]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&_.rel.toLowerCase()==="stylesheet"||o.removeChild(_),_=T}}if(f===0){n.removeChild(d),tu(s);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=d}while(o);tu(s)}function km(n){var s=n.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":km(o),gr(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function jI(n,s,o,u){for(;n.nodeType===1;){var f=o;if(n.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[Ss])switch(s){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(s==="input"&&n.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=Gn(n.nextSibling),n===null)break}return null}function zI(n,s,o){if(s==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=Gn(n.nextSibling),n===null))return null;return n}function Mm(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function BI(n,s){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function Gn(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return n}var Vm=null;function C0(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return n;s--}else o==="/$"&&s++}n=n.previousSibling}return null}function x0(n,s,o){switch(s=rh(o),n){case"html":if(n=s.documentElement,!n)throw Error(r(452));return n;case"head":if(n=s.head,!n)throw Error(r(453));return n;case"body":if(n=s.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}function Kl(n){for(var s=n.attributes;s.length;)n.removeAttributeNode(s[0]);gr(n)}var Ln=new Map,N0=new Set;function sh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ji=oe.d;oe.d={f:FI,r:HI,D:qI,C:GI,L:$I,m:KI,X:QI,S:YI,M:XI};function FI(){var n=Ji.f(),s=Xc();return n||s}function HI(n){var s=Wn(n);s!==null&&s.tag===5&&s.type==="form"?Xv(s):Ji.r(n)}var so=typeof document>"u"?null:document;function O0(n,s,o){var u=so;if(u&&typeof s=="string"&&s){var f=Tt(s);f='link[rel="'+n+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),N0.has(f)||(N0.add(f),n={rel:n,crossOrigin:o,href:s},u.querySelector(f)===null&&(s=u.createElement("link"),$t(s,"link",n),pt(s),u.head.appendChild(s)))}}function qI(n){Ji.D(n),O0("dns-prefetch",n,null)}function GI(n,s){Ji.C(n,s),O0("preconnect",n,s)}function $I(n,s,o){Ji.L(n,s,o);var u=so;if(u&&n&&s){var f='link[rel="preload"][as="'+Tt(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Tt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Tt(o.imageSizes)+'"]')):f+='[href="'+Tt(n)+'"]';var d=f;switch(s){case"style":d=ao(n);break;case"script":d=oo(n)}Ln.has(d)||(n=E({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:n,as:s},o),Ln.set(d,n),u.querySelector(f)!==null||s==="style"&&u.querySelector(Yl(d))||s==="script"&&u.querySelector(Ql(d))||(s=u.createElement("link"),$t(s,"link",n),pt(s),u.head.appendChild(s)))}}function KI(n,s){Ji.m(n,s);var o=so;if(o&&n){var u=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Tt(u)+'"][href="'+Tt(n)+'"]',d=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=oo(n)}if(!Ln.has(d)&&(n=E({rel:"modulepreload",href:n},s),Ln.set(d,n),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Ql(d)))return}u=o.createElement("link"),$t(u,"link",n),pt(u),o.head.appendChild(u)}}}function YI(n,s,o){Ji.S(n,s,o);var u=so;if(u&&n){var f=sn(u).hoistableStyles,d=ao(n);s=s||"default";var _=f.get(d);if(!_){var T={loading:0,preload:null};if(_=u.querySelector(Yl(d)))T.loading=5;else{n=E({rel:"stylesheet",href:n,"data-precedence":s},o),(o=Ln.get(d))&&Lm(n,o);var I=_=u.createElement("link");pt(I),$t(I,"link",n),I._p=new Promise(function(z,K){I.onload=z,I.onerror=K}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,ah(_,s,u)}_={type:"stylesheet",instance:_,count:1,state:T},f.set(d,_)}}}function QI(n,s){Ji.X(n,s);var o=so;if(o&&n){var u=sn(o).hoistableScripts,f=oo(n),d=u.get(f);d||(d=o.querySelector(Ql(f)),d||(n=E({src:n,async:!0},s),(s=Ln.get(f))&&Um(n,s),d=o.createElement("script"),pt(d),$t(d,"link",n),o.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},u.set(f,d))}}function XI(n,s){Ji.M(n,s);var o=so;if(o&&n){var u=sn(o).hoistableScripts,f=oo(n),d=u.get(f);d||(d=o.querySelector(Ql(f)),d||(n=E({src:n,async:!0,type:"module"},s),(s=Ln.get(f))&&Um(n,s),d=o.createElement("script"),pt(d),$t(d,"link",n),o.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},u.set(f,d))}}function D0(n,s,o,u){var f=(f=Se.current)?sh(f):null;if(!f)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=ao(o.href),o=sn(f).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=ao(o.href);var d=sn(f).hoistableStyles,_=d.get(n);if(_||(f=f.ownerDocument||f,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,_),(d=f.querySelector(Yl(n)))&&!d._p&&(_.instance=d,_.state.loading=5),Ln.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Ln.set(n,o),d||WI(f,n,o,_.state))),s&&u===null)throw Error(r(528,""));return _}if(s&&u!==null)throw Error(r(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=oo(o),o=sn(f).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function ao(n){return'href="'+Tt(n)+'"'}function Yl(n){return'link[rel="stylesheet"]['+n+"]"}function P0(n){return E({},n,{"data-precedence":n.precedence,precedence:null})}function WI(n,s,o,u){n.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=n.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),$t(s,"link",o),pt(s),n.head.appendChild(s))}function oo(n){return'[src="'+Tt(n)+'"]'}function Ql(n){return"script[async]"+n}function k0(n,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=n.querySelector('style[data-href~="'+Tt(o.href)+'"]');if(u)return s.instance=u,pt(u),u;var f=E({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),pt(u),$t(u,"style",f),ah(u,o.precedence,n),s.instance=u;case"stylesheet":f=ao(o.href);var d=n.querySelector(Yl(f));if(d)return s.state.loading|=4,s.instance=d,pt(d),d;u=P0(o),(f=Ln.get(f))&&Lm(u,f),d=(n.ownerDocument||n).createElement("link"),pt(d);var _=d;return _._p=new Promise(function(T,I){_.onload=T,_.onerror=I}),$t(d,"link",u),s.state.loading|=4,ah(d,o.precedence,n),s.instance=d;case"script":return d=oo(o.src),(f=n.querySelector(Ql(d)))?(s.instance=f,pt(f),f):(u=o,(f=Ln.get(d))&&(u=E({},o),Um(u,f)),n=n.ownerDocument||n,f=n.createElement("script"),pt(f),$t(f,"link",u),n.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(r(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,ah(u,o.precedence,n));return s.instance}function ah(n,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,d=f,_=0;_<u.length;_++){var T=u[_];if(T.dataset.precedence===s)d=T;else if(d!==f)break}d?d.parentNode.insertBefore(n,d.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(n,s.firstChild))}function Lm(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.title==null&&(n.title=s.title)}function Um(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.integrity==null&&(n.integrity=s.integrity)}var oh=null;function M0(n,s,o){if(oh===null){var u=new Map,f=oh=new Map;f.set(o,u)}else f=oh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),f=0;f<o.length;f++){var d=o[f];if(!(d[Ss]||d[It]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(s)||"";_=n+_;var T=u.get(_);T?T.push(d):u.set(_,[d])}}return u}function V0(n,s,o){n=n.ownerDocument||n,n.head.insertBefore(o,s==="title"?n.querySelector("head > title"):null)}function JI(n,s,o){if(o===1||s.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return n=s.disabled,typeof s.precedence=="string"&&n==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function L0(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Xl=null;function ZI(){}function eR(n,s,o){if(Xl===null)throw Error(r(475));var u=Xl;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=ao(o.href),d=n.querySelector(Yl(f));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=lh.bind(u),n.then(u,u)),s.state.loading|=4,s.instance=d,pt(d);return}d=n.ownerDocument||n,o=P0(o),(f=Ln.get(f))&&Lm(o,f),d=d.createElement("link"),pt(d);var _=d;_._p=new Promise(function(T,I){_.onload=T,_.onerror=I}),$t(d,"link",o),s.instance=d}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(u.count++,s=lh.bind(u),n.addEventListener("load",s),n.addEventListener("error",s))}}function tR(){if(Xl===null)throw Error(r(475));var n=Xl;return n.stylesheets&&n.count===0&&jm(n,n.stylesheets),0<n.count?function(s){var o=setTimeout(function(){if(n.stylesheets&&jm(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=s,function(){n.unsuspend=null,clearTimeout(o)}}:null}function lh(){if(this.count--,this.count===0){if(this.stylesheets)jm(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var uh=null;function jm(n,s){n.stylesheets=null,n.unsuspend!==null&&(n.count++,uh=new Map,s.forEach(nR,n),uh=null,lh.call(n))}function nR(n,s){if(!(s.state.loading&4)){var o=uh.get(n);if(o)var u=o.get(null);else{o=new Map,uh.set(n,o);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var _=f[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(o.set(_.dataset.precedence,_),u=_)}u&&o.set(null,u)}f=s.instance,_=f.getAttribute("data-precedence"),d=o.get(_)||u,d===u&&o.set(null,f),o.set(_,f),this.count++,u=lh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),d?d.parentNode.insertBefore(f,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),s.state.loading|=4}}var Wl={$$typeof:ne,Provider:null,Consumer:null,_currentValue:pe,_currentValue2:pe,_threadCount:0};function iR(n,s,o,u,f,d,_,T){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ci(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ci(0),this.hiddenUpdates=Ci(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function U0(n,s,o,u,f,d,_,T,I,z,K,Q){return n=new iR(n,s,o,_,T,I,z,Q),s=1,d===!0&&(s|=24),d=yn(3,null,null,s),n.current=d,d.stateNode=n,s=Ed(),s.refCount++,n.pooledCache=s,s.refCount++,d.memoizedState={element:u,isDehydrated:o,cache:s},Sd(d),n}function j0(n){return n?(n=Ua,n):Ua}function z0(n,s,o,u,f,d){f=j0(f),u.context===null?u.context=f:u.pendingContext=f,u=br(s),u.payload={element:o},d=d===void 0?null:d,d!==null&&(u.callback=d),o=Ar(n,u,s),o!==null&&(bn(o,n,s),Rl(o,n,s))}function B0(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<s?o:s}}function zm(n,s){B0(n,s),(n=n.alternate)&&B0(n,s)}function F0(n){if(n.tag===13){var s=La(n,67108864);s!==null&&bn(s,n,67108864),zm(n,67108864)}}var ch=!0;function rR(n,s,o,u){var f=$.T;$.T=null;var d=oe.p;try{oe.p=2,Bm(n,s,o,u)}finally{oe.p=d,$.T=f}}function sR(n,s,o,u){var f=$.T;$.T=null;var d=oe.p;try{oe.p=8,Bm(n,s,o,u)}finally{oe.p=d,$.T=f}}function Bm(n,s,o,u){if(ch){var f=Fm(u);if(f===null)Cm(n,s,u,hh,o),q0(n,u);else if(oR(f,n,s,o,u))u.stopPropagation();else if(q0(n,u),s&4&&-1<aR.indexOf(n)){for(;f!==null;){var d=Wn(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=zn(d.pendingLanes);if(_!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var I=1<<31-Wt(_);T.entanglements[1]|=I,_&=~I}hi(d),(Qe&6)===0&&(Yc=wn()+500,ql(0))}}break;case 13:T=La(d,2),T!==null&&bn(T,d,2),Xc(),zm(d,2)}if(d=Fm(u),d===null&&Cm(n,s,u,hh,o),d===f)break;f=d}f!==null&&u.stopPropagation()}else Cm(n,s,u,null,o)}}function Fm(n){return n=Cn(n),Hm(n)}var hh=null;function Hm(n){if(hh=null,n=Ni(n),n!==null){var s=l(n);if(s===null)n=null;else{var o=s.tag;if(o===13){if(n=c(s),n!==null)return n;n=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null)}}return hh=n,null}function H0(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($f()){case Qo:return 2;case ga:return 8;case _s:case Kf:return 32;case ya:return 268435456;default:return 32}default:return 32}}var qm=!1,Vr=null,Lr=null,Ur=null,Jl=new Map,Zl=new Map,jr=[],aR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function q0(n,s){switch(n){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Ur=null;break;case"pointerover":case"pointerout":Jl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zl.delete(s.pointerId)}}function eu(n,s,o,u,f,d){return n===null||n.nativeEvent!==d?(n={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:d,targetContainers:[f]},s!==null&&(s=Wn(s),s!==null&&F0(s)),n):(n.eventSystemFlags|=u,s=n.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),n)}function oR(n,s,o,u,f){switch(s){case"focusin":return Vr=eu(Vr,n,s,o,u,f),!0;case"dragenter":return Lr=eu(Lr,n,s,o,u,f),!0;case"mouseover":return Ur=eu(Ur,n,s,o,u,f),!0;case"pointerover":var d=f.pointerId;return Jl.set(d,eu(Jl.get(d)||null,n,s,o,u,f)),!0;case"gotpointercapture":return d=f.pointerId,Zl.set(d,eu(Zl.get(d)||null,n,s,o,u,f)),!0}return!1}function G0(n){var s=Ni(n.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){n.blockedOn=s,Xu(n.priority,function(){if(o.tag===13){var u=Tn();u=dr(u);var f=La(o,u);f!==null&&bn(f,o,u),zm(o,u)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function fh(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var o=Fm(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);ki=u,o.target.dispatchEvent(u),ki=null}else return s=Wn(o),s!==null&&F0(s),n.blockedOn=o,!1;s.shift()}return!0}function $0(n,s,o){fh(n)&&o.delete(s)}function lR(){qm=!1,Vr!==null&&fh(Vr)&&(Vr=null),Lr!==null&&fh(Lr)&&(Lr=null),Ur!==null&&fh(Ur)&&(Ur=null),Jl.forEach($0),Zl.forEach($0)}function dh(n,s){n.blockedOn===s&&(n.blockedOn=null,qm||(qm=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,lR)))}var mh=null;function K0(n){mh!==n&&(mh=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){mh===n&&(mh=null);for(var s=0;s<n.length;s+=3){var o=n[s],u=n[s+1],f=n[s+2];if(typeof u!="function"){if(Hm(u||o)===null)continue;break}var d=Wn(o);d!==null&&(n.splice(s,3),s-=3,Hd(d,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function tu(n){function s(I){return dh(I,n)}Vr!==null&&dh(Vr,n),Lr!==null&&dh(Lr,n),Ur!==null&&dh(Ur,n),Jl.forEach(s),Zl.forEach(s);for(var o=0;o<jr.length;o++){var u=jr[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<jr.length&&(o=jr[0],o.blockedOn===null);)G0(o),o.blockedOn===null&&jr.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],d=o[u+1],_=f[Et]||null;if(typeof d=="function")_||K0(o);else if(_){var T=null;if(d&&d.hasAttribute("formAction")){if(f=d,_=d[Et]||null)T=_.formAction;else if(Hm(f)!==null)continue}else T=_.action;typeof T=="function"?o[u+1]=T:(o.splice(u,3),u-=3),K0(o)}}}function Gm(n){this._internalRoot=n}ph.prototype.render=Gm.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(r(409));var o=s.current,u=Tn();z0(o,u,n,s,null,null)},ph.prototype.unmount=Gm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;z0(n.current,2,null,n,null,null),Xc(),s[In]=null}};function ph(n){this._internalRoot=n}ph.prototype.unstable_scheduleHydration=function(n){if(n){var s=mr();n={blockedOn:null,target:n,priority:s};for(var o=0;o<jr.length&&s!==0&&s<jr[o].priority;o++);jr.splice(o,0,n),o===0&&G0(n)}};var Y0=e.version;if(Y0!=="19.1.0")throw Error(r(527,Y0,"19.1.0"));oe.findDOMNode=function(n){var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=p(s),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var uR={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:$,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gh.isDisabled&&gh.supportsFiber)try{ft=gh.inject(uR),Ye=gh}catch{}}return iu.createRoot=function(n,s){if(!a(n))throw Error(r(299));var o=!1,u="",f=c_,d=h_,_=f_,T=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(d=s.onCaughtError),s.onRecoverableError!==void 0&&(_=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(T=s.unstable_transitionCallbacks)),s=U0(n,1,!1,null,null,o,u,f,d,_,T,null),n[In]=s.current,Rm(n),new Gm(s)},iu.hydrateRoot=function(n,s,o){if(!a(n))throw Error(r(299));var u=!1,f="",d=c_,_=h_,T=f_,I=null,z=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(d=o.onUncaughtError),o.onCaughtError!==void 0&&(_=o.onCaughtError),o.onRecoverableError!==void 0&&(T=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(I=o.unstable_transitionCallbacks),o.formState!==void 0&&(z=o.formState)),s=U0(n,1,!0,s,o??null,u,f,d,_,T,I,z),s.context=j0(null),o=s.current,u=Tn(),u=dr(u),f=br(u),f.callback=null,Ar(o,f,u),o=u,s.current.lanes=o,xi(s,o),hi(s),n[In]=s.current,Rm(n),new ph(s)},iu.version="19.1.0",iu}var rE;function ER(){if(rE)return Ym.exports;rE=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Ym.exports=_R(),Ym.exports}var TR=ER();jb();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Eu(){return Eu=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Eu.apply(this,arguments)}var Yr;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(Yr||(Yr={}));const sE="popstate";function bR(i){i===void 0&&(i={});function e(r,a){let{pathname:l,search:c,hash:m}=r.location;return Tp("",{pathname:l,search:c,hash:m},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(r,a){return typeof a=="string"?a:zh(a)}return SR(e,t,null,i)}function _t(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function zb(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function AR(){return Math.random().toString(36).substr(2,8)}function aE(i,e){return{usr:i.state,key:i.key,idx:e}}function Tp(i,e,t,r){return t===void 0&&(t=null),Eu({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof e=="string"?Vo(e):e,{state:t,key:e&&e.key||r||AR()})}function zh(i){let{pathname:e="/",search:t="",hash:r=""}=i;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Vo(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substr(t),i=i.substr(0,t));let r=i.indexOf("?");r>=0&&(e.search=i.substr(r),i=i.substr(0,r)),i&&(e.pathname=i)}return e}function SR(i,e,t,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,c=a.history,m=Yr.Pop,p=null,g=E();g==null&&(g=0,c.replaceState(Eu({},c.state,{idx:g}),""));function E(){return(c.state||{idx:null}).idx}function b(){m=Yr.Pop;let F=E(),ee=F==null?null:F-g;g=F,p&&p({action:m,location:W.location,delta:ee})}function S(F,ee){m=Yr.Push;let ie=Tp(W.location,F,ee);g=E()+1;let ne=aE(ie,g),fe=W.createHref(ie);try{c.pushState(ne,"",fe)}catch(ce){if(ce instanceof DOMException&&ce.name==="DataCloneError")throw ce;a.location.assign(fe)}l&&p&&p({action:m,location:W.location,delta:1})}function j(F,ee){m=Yr.Replace;let ie=Tp(W.location,F,ee);g=E();let ne=aE(ie,g),fe=W.createHref(ie);c.replaceState(ne,"",fe),l&&p&&p({action:m,location:W.location,delta:0})}function G(F){let ee=a.location.origin!=="null"?a.location.origin:a.location.href,ie=typeof F=="string"?F:zh(F);return ie=ie.replace(/ $/,"%20"),_t(ee,"No window.location.(origin|href) available to create URL for href: "+ie),new URL(ie,ee)}let W={get action(){return m},get location(){return i(a,c)},listen(F){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(sE,b),p=F,()=>{a.removeEventListener(sE,b),p=null}},createHref(F){return e(a,F)},createURL:G,encodeLocation(F){let ee=G(F);return{pathname:ee.pathname,search:ee.search,hash:ee.hash}},push:S,replace:j,go(F){return c.go(F)}};return W}var oE;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(oE||(oE={}));function wR(i,e,t){return t===void 0&&(t="/"),IR(i,e,t)}function IR(i,e,t,r){let a=typeof e=="string"?Vo(e):e,l=bg(a.pathname||"/",t);if(l==null)return null;let c=Bb(i);RR(c);let m=null;for(let p=0;m==null&&p<c.length;++p){let g=jR(l);m=VR(c[p],g)}return m}function Bb(i,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let a=(l,c,m)=>{let p={relativePath:m===void 0?l.path||"":m,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(_t(p.relativePath.startsWith(r),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(r.length));let g=Xr([r,p.relativePath]),E=t.concat(p);l.children&&l.children.length>0&&(_t(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),Bb(l.children,e,E,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:kR(g,l.index),routesMeta:E})};return i.forEach((l,c)=>{var m;if(l.path===""||!((m=l.path)!=null&&m.includes("?")))a(l,c);else for(let p of Fb(l.path))a(l,c,p)}),e}function Fb(i){let e=i.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let c=Fb(r.join("/")),m=[];return m.push(...c.map(p=>p===""?l:[l,p].join("/"))),a&&m.push(...c),m.map(p=>i.startsWith("/")&&p===""?"/":p)}function RR(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:MR(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const CR=/^:[\w-]+$/,xR=3,NR=2,OR=1,DR=10,PR=-2,lE=i=>i==="*";function kR(i,e){let t=i.split("/"),r=t.length;return t.some(lE)&&(r+=PR),e&&(r+=NR),t.filter(a=>!lE(a)).reduce((a,l)=>a+(CR.test(l)?xR:l===""?OR:DR),r)}function MR(i,e){return i.length===e.length&&i.slice(0,-1).every((r,a)=>r===e[a])?i[i.length-1]-e[e.length-1]:0}function VR(i,e,t){let{routesMeta:r}=i,a={},l="/",c=[];for(let m=0;m<r.length;++m){let p=r[m],g=m===r.length-1,E=l==="/"?e:e.slice(l.length)||"/",b=LR({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},E),S=p.route;if(!b)return null;Object.assign(a,b.params),c.push({params:a,pathname:Xr([l,b.pathname]),pathnameBase:HR(Xr([l,b.pathnameBase])),route:S}),b.pathnameBase!=="/"&&(l=Xr([l,b.pathnameBase]))}return c}function LR(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,r]=UR(i.path,i.caseSensitive,i.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),m=a.slice(1);return{params:r.reduce((g,E,b)=>{let{paramName:S,isOptional:j}=E;if(S==="*"){let W=m[b]||"";c=l.slice(0,l.length-W.length).replace(/(.)\/+$/,"$1")}const G=m[b];return j&&!G?g[S]=void 0:g[S]=(G||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:i}}function UR(i,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),zb(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let r=[],a="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,m,p)=>(r.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(r.push({paramName:"*"}),a+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":i!==""&&i!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function jR(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zb(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),i}}function bg(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=i.charAt(t);return r&&r!=="/"?null:i.slice(t)||"/"}function zR(i,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:a=""}=typeof i=="string"?Vo(i):i;return{pathname:t?t.startsWith("/")?t:BR(t,e):e,search:qR(r),hash:GR(a)}}function BR(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Jm(i,e,t,r){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function FR(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ag(i,e){let t=FR(i);return e?t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Sg(i,e,t,r){r===void 0&&(r=!1);let a;typeof i=="string"?a=Vo(i):(a=Eu({},i),_t(!a.pathname||!a.pathname.includes("?"),Jm("?","pathname","search",a)),_t(!a.pathname||!a.pathname.includes("#"),Jm("#","pathname","hash",a)),_t(!a.search||!a.search.includes("#"),Jm("#","search","hash",a)));let l=i===""||a.pathname==="",c=l?"/":a.pathname,m;if(c==null)m=t;else{let b=e.length-1;if(!r&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),b-=1;a.pathname=S.join("/")}m=b>=0?e[b]:"/"}let p=zR(a,m),g=c&&c!=="/"&&c.endsWith("/"),E=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(g||E)&&(p.pathname+="/"),p}const Xr=i=>i.join("/").replace(/\/\/+/g,"/"),HR=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),qR=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,GR=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function $R(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const Hb=["post","put","patch","delete"];new Set(Hb);const KR=["get",...Hb];new Set(KR);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tu(){return Tu=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Tu.apply(this,arguments)}const wg=ae.createContext(null),YR=ae.createContext(null),ms=ae.createContext(null),yf=ae.createContext(null),ur=ae.createContext({outlet:null,matches:[],isDataRoute:!1}),qb=ae.createContext(null);function QR(i,e){let{relative:t}=e===void 0?{}:e;Lo()||_t(!1);let{basename:r,navigator:a}=ae.useContext(ms),{hash:l,pathname:c,search:m}=$b(i,{relative:t}),p=c;return r!=="/"&&(p=c==="/"?r:Xr([r,c])),a.createHref({pathname:p,search:m,hash:l})}function Lo(){return ae.useContext(yf)!=null}function Pu(){return Lo()||_t(!1),ae.useContext(yf).location}function Gb(i){ae.useContext(ms).static||ae.useLayoutEffect(i)}function vf(){let{isDataRoute:i}=ae.useContext(ur);return i?cC():XR()}function XR(){Lo()||_t(!1);let i=ae.useContext(wg),{basename:e,future:t,navigator:r}=ae.useContext(ms),{matches:a}=ae.useContext(ur),{pathname:l}=Pu(),c=JSON.stringify(Ag(a,t.v7_relativeSplatPath)),m=ae.useRef(!1);return Gb(()=>{m.current=!0}),ae.useCallback(function(g,E){if(E===void 0&&(E={}),!m.current)return;if(typeof g=="number"){r.go(g);return}let b=Sg(g,JSON.parse(c),l,E.relative==="path");i==null&&e!=="/"&&(b.pathname=b.pathname==="/"?e:Xr([e,b.pathname])),(E.replace?r.replace:r.push)(b,E.state,E)},[e,r,c,l,i])}const WR=ae.createContext(null);function JR(i){let e=ae.useContext(ur).outlet;return e&&ae.createElement(WR.Provider,{value:i},e)}function $b(i,e){let{relative:t}=e===void 0?{}:e,{future:r}=ae.useContext(ms),{matches:a}=ae.useContext(ur),{pathname:l}=Pu(),c=JSON.stringify(Ag(a,r.v7_relativeSplatPath));return ae.useMemo(()=>Sg(i,JSON.parse(c),l,t==="path"),[i,c,l,t])}function ZR(i,e){return eC(i,e)}function eC(i,e,t,r){Lo()||_t(!1);let{navigator:a,static:l}=ae.useContext(ms),{matches:c}=ae.useContext(ur),m=c[c.length-1],p=m?m.params:{};m&&m.pathname;let g=m?m.pathnameBase:"/";m&&m.route;let E=Pu(),b;if(e){var S;let ee=typeof e=="string"?Vo(e):e;g==="/"||(S=ee.pathname)!=null&&S.startsWith(g)||_t(!1),b=ee}else b=E;let j=b.pathname||"/",G=j;if(g!=="/"){let ee=g.replace(/^\//,"").split("/");G="/"+j.replace(/^\//,"").split("/").slice(ee.length).join("/")}let W=wR(i,{pathname:G}),F=sC(W&&W.map(ee=>Object.assign({},ee,{params:Object.assign({},p,ee.params),pathname:Xr([g,a.encodeLocation?a.encodeLocation(ee.pathname).pathname:ee.pathname]),pathnameBase:ee.pathnameBase==="/"?g:Xr([g,a.encodeLocation?a.encodeLocation(ee.pathnameBase).pathname:ee.pathnameBase])})),c,t,r);return e&&F?ae.createElement(yf.Provider,{value:{location:Tu({pathname:"/",search:"",hash:"",state:null,key:"default"},b),navigationType:Yr.Pop}},F):F}function tC(){let i=uC(),e=$R(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ae.createElement(ae.Fragment,null,ae.createElement("h2",null,"Unexpected Application Error!"),ae.createElement("h3",{style:{fontStyle:"italic"}},e),t?ae.createElement("pre",{style:a},t):null,null)}const nC=ae.createElement(tC,null);class iC extends ae.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?ae.createElement(ur.Provider,{value:this.props.routeContext},ae.createElement(qb.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rC(i){let{routeContext:e,match:t,children:r}=i,a=ae.useContext(wg);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),ae.createElement(ur.Provider,{value:e},r)}function sC(i,e,t,r){var a;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),i==null){var l;if(!t)return null;if(t.errors)i=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let c=i,m=(a=t)==null?void 0:a.errors;if(m!=null){let E=c.findIndex(b=>b.route.id&&(m==null?void 0:m[b.route.id])!==void 0);E>=0||_t(!1),c=c.slice(0,Math.min(c.length,E+1))}let p=!1,g=-1;if(t&&r&&r.v7_partialHydration)for(let E=0;E<c.length;E++){let b=c[E];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(g=E),b.route.id){let{loaderData:S,errors:j}=t,G=b.route.loader&&S[b.route.id]===void 0&&(!j||j[b.route.id]===void 0);if(b.route.lazy||G){p=!0,g>=0?c=c.slice(0,g+1):c=[c[0]];break}}}return c.reduceRight((E,b,S)=>{let j,G=!1,W=null,F=null;t&&(j=m&&b.route.id?m[b.route.id]:void 0,W=b.route.errorElement||nC,p&&(g<0&&S===0?(hC("route-fallback"),G=!0,F=null):g===S&&(G=!0,F=b.route.hydrateFallbackElement||null)));let ee=e.concat(c.slice(0,S+1)),ie=()=>{let ne;return j?ne=W:G?ne=F:b.route.Component?ne=ae.createElement(b.route.Component,null):b.route.element?ne=b.route.element:ne=E,ae.createElement(rC,{match:b,routeContext:{outlet:E,matches:ee,isDataRoute:t!=null},children:ne})};return t&&(b.route.ErrorBoundary||b.route.errorElement||S===0)?ae.createElement(iC,{location:t.location,revalidation:t.revalidation,component:W,error:j,children:ie(),routeContext:{outlet:null,matches:ee,isDataRoute:!0}}):ie()},null)}var Kb=function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i}(Kb||{}),Yb=function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i}(Yb||{});function aC(i){let e=ae.useContext(wg);return e||_t(!1),e}function oC(i){let e=ae.useContext(YR);return e||_t(!1),e}function lC(i){let e=ae.useContext(ur);return e||_t(!1),e}function Qb(i){let e=lC(),t=e.matches[e.matches.length-1];return t.route.id||_t(!1),t.route.id}function uC(){var i;let e=ae.useContext(qb),t=oC(),r=Qb();return e!==void 0?e:(i=t.errors)==null?void 0:i[r]}function cC(){let{router:i}=aC(Kb.UseNavigateStable),e=Qb(Yb.UseNavigateStable),t=ae.useRef(!1);return Gb(()=>{t.current=!0}),ae.useCallback(function(a,l){l===void 0&&(l={}),t.current&&(typeof a=="number"?i.navigate(a):i.navigate(a,Tu({fromRouteId:e},l)))},[i,e])}const uE={};function hC(i,e,t){uE[i]||(uE[i]=!0)}function fC(i,e){i==null||i.v7_startTransition,i==null||i.v7_relativeSplatPath}function dC(i){let{to:e,replace:t,state:r,relative:a}=i;Lo()||_t(!1);let{future:l,static:c}=ae.useContext(ms),{matches:m}=ae.useContext(ur),{pathname:p}=Pu(),g=vf(),E=Sg(e,Ag(m,l.v7_relativeSplatPath),p,a==="path"),b=JSON.stringify(E);return ae.useEffect(()=>g(JSON.parse(b),{replace:t,state:r,relative:a}),[g,b,a,t,r]),null}function Ig(i){return JR(i.context)}function un(i){_t(!1)}function mC(i){let{basename:e="/",children:t=null,location:r,navigationType:a=Yr.Pop,navigator:l,static:c=!1,future:m}=i;Lo()&&_t(!1);let p=e.replace(/^\/*/,"/"),g=ae.useMemo(()=>({basename:p,navigator:l,static:c,future:Tu({v7_relativeSplatPath:!1},m)}),[p,m,l,c]);typeof r=="string"&&(r=Vo(r));let{pathname:E="/",search:b="",hash:S="",state:j=null,key:G="default"}=r,W=ae.useMemo(()=>{let F=bg(E,p);return F==null?null:{location:{pathname:F,search:b,hash:S,state:j,key:G},navigationType:a}},[p,E,b,S,j,G,a]);return W==null?null:ae.createElement(ms.Provider,{value:g},ae.createElement(yf.Provider,{children:t,value:W}))}function pC(i){let{children:e,location:t}=i;return ZR(bp(e),t)}new Promise(()=>{});function bp(i,e){e===void 0&&(e=[]);let t=[];return ae.Children.forEach(i,(r,a)=>{if(!ae.isValidElement(r))return;let l=[...e,a];if(r.type===ae.Fragment){t.push.apply(t,bp(r.props.children,l));return}r.type!==un&&_t(!1),!r.props.index||!r.props.children||_t(!1);let c={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=bp(r.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ap(){return Ap=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Ap.apply(this,arguments)}function gC(i,e){if(i==null)return{};var t={},r=Object.keys(i),a,l;for(l=0;l<r.length;l++)a=r[l],!(e.indexOf(a)>=0)&&(t[a]=i[a]);return t}function yC(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function vC(i,e){return i.button===0&&(!e||e==="_self")&&!yC(i)}const _C=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],EC="6";try{window.__reactRouterVersion=EC}catch{}const TC="startTransition",cE=pR[TC];function bC(i){let{basename:e,children:t,future:r,window:a}=i,l=ae.useRef();l.current==null&&(l.current=bR({window:a,v5Compat:!0}));let c=l.current,[m,p]=ae.useState({action:c.action,location:c.location}),{v7_startTransition:g}=r||{},E=ae.useCallback(b=>{g&&cE?cE(()=>p(b)):p(b)},[p,g]);return ae.useLayoutEffect(()=>c.listen(E),[c,E]),ae.useEffect(()=>fC(r),[r]),ae.createElement(mC,{basename:e,children:t,location:m.location,navigationType:m.action,navigator:c,future:r})}const AC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",SC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rg=ae.forwardRef(function(e,t){let{onClick:r,relative:a,reloadDocument:l,replace:c,state:m,target:p,to:g,preventScrollReset:E,viewTransition:b}=e,S=gC(e,_C),{basename:j}=ae.useContext(ms),G,W=!1;if(typeof g=="string"&&SC.test(g)&&(G=g,AC))try{let ne=new URL(window.location.href),fe=g.startsWith("//")?new URL(ne.protocol+g):new URL(g),ce=bg(fe.pathname,j);fe.origin===ne.origin&&ce!=null?g=ce+fe.search+fe.hash:W=!0}catch{}let F=QR(g,{relative:a}),ee=wC(g,{replace:c,state:m,target:p,preventScrollReset:E,relative:a,viewTransition:b});function ie(ne){r&&r(ne),ne.defaultPrevented||ee(ne)}return ae.createElement("a",Ap({},S,{href:G||F,onClick:W||l?r:ie,ref:t,target:p}))});var hE;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(hE||(hE={}));var fE;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(fE||(fE={}));function wC(i,e){let{target:t,replace:r,state:a,preventScrollReset:l,relative:c,viewTransition:m}=e===void 0?{}:e,p=vf(),g=Pu(),E=$b(i,{relative:c});return ae.useCallback(b=>{if(vC(b,t)){b.preventDefault();let S=r!==void 0?r:zh(g)===zh(E);p(i,{replace:S,state:a,preventScrollReset:l,relative:c,viewTransition:m})}},[g,p,E,r,a,t,i,l,c,m])}const IC=()=>{};var dE={};/**
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
 */const Xb=function(i){const e=[];let t=0;for(let r=0;r<i.length;r++){let a=i.charCodeAt(r);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++r)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},RC=function(i){const e=[];let t=0,r=0;for(;t<i.length;){const a=i[t++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[t++];e[r++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[t++],c=i[t++],m=i[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|m&63)-65536;e[r++]=String.fromCharCode(55296+(p>>10)),e[r++]=String.fromCharCode(56320+(p&1023))}else{const l=i[t++],c=i[t++];e[r++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},Wb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<i.length;a+=3){const l=i[a],c=a+1<i.length,m=c?i[a+1]:0,p=a+2<i.length,g=p?i[a+2]:0,E=l>>2,b=(l&3)<<4|m>>4;let S=(m&15)<<2|g>>6,j=g&63;p||(j=64,c||(S=64)),r.push(t[E],t[b],t[S],t[j])}return r.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Xb(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):RC(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<i.length;){const l=t[i.charAt(a++)],m=a<i.length?t[i.charAt(a)]:0;++a;const g=a<i.length?t[i.charAt(a)]:64;++a;const b=a<i.length?t[i.charAt(a)]:64;if(++a,l==null||m==null||g==null||b==null)throw new CC;const S=l<<2|m>>4;if(r.push(S),g!==64){const j=m<<4&240|g>>2;if(r.push(j),b!==64){const G=g<<6&192|b;r.push(G)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class CC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xC=function(i){const e=Xb(i);return Wb.encodeByteArray(e,!0)},Bh=function(i){return xC(i).replace(/\./g,"")},Cg=function(i){try{return Wb.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function NC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const OC=()=>NC().__FIREBASE_DEFAULTS__,DC=()=>{if(typeof process>"u"||typeof dE>"u")return;const i=dE.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},PC=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Cg(i[1]);return e&&JSON.parse(e)},_f=()=>{try{return IC()||OC()||DC()||PC()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Jb=i=>{var e,t;return(t=(e=_f())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},kC=i=>{const e=Jb(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Zb=()=>{var i;return(i=_f())===null||i===void 0?void 0:i.config},e1=i=>{var e;return(e=_f())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class MC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Uo(i){return i.endsWith(".cloudworkstations.dev")}async function t1(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function VC(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",a=i.iat||0,l=i.sub||i.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Bh(JSON.stringify(t)),Bh(JSON.stringify(c)),""].join(".")}const uu={};function LC(){const i={prod:[],emulator:[]};for(const e of Object.keys(uu))uu[e]?i.emulator.push(e):i.prod.push(e);return i}function UC(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let mE=!1;function Ef(i,e){if(typeof window>"u"||typeof document>"u"||!Uo(window.location.host)||uu[i]===e||uu[i]||mE)return;uu[i]=e;function t(S){return`__firebase__banner__${S}`}const r="__firebase__banner",l=LC().prod.length>0;function c(){const S=document.getElementById(r);S&&S.remove()}function m(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,j){S.setAttribute("width","24"),S.setAttribute("id",j),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{mE=!0,c()},S}function E(S,j){S.setAttribute("id",j),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function b(){const S=UC(r),j=t("text"),G=document.getElementById(j)||document.createElement("span"),W=t("learnmore"),F=document.getElementById(W)||document.createElement("a"),ee=t("preprendIcon"),ie=document.getElementById(ee)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const ne=S.element;m(ne),E(F,W);const fe=g();p(ie,ee),ne.append(ie,G,F,fe),document.body.appendChild(ne)}l?(G.innerText="Preview backend disconnected.",ie.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,G.innerText="Preview backend running in this workspace."),G.setAttribute("id",j)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
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
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function n1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function jC(){var i;const e=(i=_f())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function i1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function r1(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function s1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function a1(){const i=tt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function zC(){return!jC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function BC(){try{return typeof indexedDB=="object"}catch{return!1}}function FC(){return new Promise((i,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(r),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const HC="FirebaseError";class jn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=HC,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ps.prototype.create)}}class ps{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?qC(l,r):"Error",m=`${this.serviceName}: ${c} (${a}).`;return new jn(a,m,r)}}function qC(i,e){return i.replace(GC,(t,r)=>{const a=e[r];return a!=null?String(a):`<${r}?>`})}const GC=/\{\$([^}]+)}/g;function o1(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ns(i,e){if(i===e)return!0;const t=Object.keys(i),r=Object.keys(e);for(const a of t){if(!r.includes(a))return!1;const l=i[a],c=e[a];if(pE(l)&&pE(c)){if(!ns(l,c))return!1}else if(l!==c)return!1}for(const a of r)if(!t.includes(a))return!1;return!0}function pE(i){return i!==null&&typeof i=="object"}/**
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
 */function cr(i){const e=[];for(const[t,r]of Object.entries(i))Array.isArray(r)?r.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $C(i){const e={};return i.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[a,l]=r.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function l1(i,e){const t=new KC(i,e);return t.subscribe.bind(t)}class KC{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let a;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");YC(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:r},a.next===void 0&&(a.next=Zm),a.error===void 0&&(a.error=Zm),a.complete===void 0&&(a.complete=Zm);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YC(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Zm(){}/**
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
 */function Qt(i){return i&&i._delegate?i._delegate:i}class nr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zs="[DEFAULT]";/**
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
 */class QC{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new MC;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WC(e))try{this.getOrInitializeService({instanceIdentifier:Zs})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});r.resolve(l)}catch{}}}}clearInstance(e=Zs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zs){return this.instances.has(e)}getOptions(e=Zs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[l,c]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(l);r===m&&c.resolve(a)}return a}onInit(e,t){var r;const a=this.normalizeInstanceIdentifier(t),l=(r=this.onInitCallbacks.get(a))!==null&&r!==void 0?r:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const a of r)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:XC(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zs){return this.component?this.component.multipleInstances?e:Zs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XC(i){return i===Zs?void 0:i}function WC(i){return i.instantiationMode==="EAGER"}/**
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
 */class JC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new QC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ke;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ke||(ke={}));const ZC={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},e2=ke.INFO,t2={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},n2=(i,e,...t)=>{if(e<i.logLevel)return;const r=new Date().toISOString(),a=t2[e];if(a)console[a](`[${r}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tf{constructor(e){this.name=e,this._logLevel=e2,this._logHandler=n2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const i2=(i,e)=>e.some(t=>i instanceof t);let gE,yE;function r2(){return gE||(gE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function s2(){return yE||(yE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const u1=new WeakMap,Sp=new WeakMap,c1=new WeakMap,ep=new WeakMap,xg=new WeakMap;function a2(i){const e=new Promise((t,r)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",c)},l=()=>{t(Wr(i.result)),a()},c=()=>{r(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&u1.set(t,i)}).catch(()=>{}),xg.set(e,i),e}function o2(i){if(Sp.has(i))return;const e=new Promise((t,r)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",c),i.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{r(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",c),i.addEventListener("abort",c)});Sp.set(i,e)}let wp={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Sp.get(i);if(e==="objectStoreNames")return i.objectStoreNames||c1.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Wr(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function l2(i){wp=i(wp)}function u2(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=i.call(tp(this),e,...t);return c1.set(r,e.sort?e.sort():[e]),Wr(r)}:s2().includes(i)?function(...e){return i.apply(tp(this),e),Wr(u1.get(this))}:function(...e){return Wr(i.apply(tp(this),e))}}function c2(i){return typeof i=="function"?u2(i):(i instanceof IDBTransaction&&o2(i),i2(i,r2())?new Proxy(i,wp):i)}function Wr(i){if(i instanceof IDBRequest)return a2(i);if(ep.has(i))return ep.get(i);const e=c2(i);return e!==i&&(ep.set(i,e),xg.set(e,i)),e}const tp=i=>xg.get(i);function h2(i,e,{blocked:t,upgrade:r,blocking:a,terminated:l}={}){const c=indexedDB.open(i,e),m=Wr(c);return r&&c.addEventListener("upgradeneeded",p=>{r(Wr(c.result),p.oldVersion,p.newVersion,Wr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),m.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),m}const f2=["get","getKey","getAll","getAllKeys","count"],d2=["put","add","delete","clear"],np=new Map;function vE(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(np.get(e))return np.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,a=d2.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(a||f2.includes(t)))return;const l=async function(c,...m){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return r&&(g=g.index(m.shift())),(await Promise.all([g[t](...m),a&&p.done]))[0]};return np.set(e,l),l}l2(i=>({...i,get:(e,t,r)=>vE(e,t)||i.get(e,t,r),has:(e,t)=>!!vE(e,t)||i.has(e,t)}));/**
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
 */class m2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(p2(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function p2(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ip="@firebase/app",_E="0.13.0";/**
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
 */const ir=new Tf("@firebase/app"),g2="@firebase/app-compat",y2="@firebase/analytics-compat",v2="@firebase/analytics",_2="@firebase/app-check-compat",E2="@firebase/app-check",T2="@firebase/auth",b2="@firebase/auth-compat",A2="@firebase/database",S2="@firebase/data-connect",w2="@firebase/database-compat",I2="@firebase/functions",R2="@firebase/functions-compat",C2="@firebase/installations",x2="@firebase/installations-compat",N2="@firebase/messaging",O2="@firebase/messaging-compat",D2="@firebase/performance",P2="@firebase/performance-compat",k2="@firebase/remote-config",M2="@firebase/remote-config-compat",V2="@firebase/storage",L2="@firebase/storage-compat",U2="@firebase/firestore",j2="@firebase/ai",z2="@firebase/firestore-compat",B2="firebase",F2="11.8.0";/**
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
 */const Rp="[DEFAULT]",H2={[Ip]:"fire-core",[g2]:"fire-core-compat",[v2]:"fire-analytics",[y2]:"fire-analytics-compat",[E2]:"fire-app-check",[_2]:"fire-app-check-compat",[T2]:"fire-auth",[b2]:"fire-auth-compat",[A2]:"fire-rtdb",[S2]:"fire-data-connect",[w2]:"fire-rtdb-compat",[I2]:"fire-fn",[R2]:"fire-fn-compat",[C2]:"fire-iid",[x2]:"fire-iid-compat",[N2]:"fire-fcm",[O2]:"fire-fcm-compat",[D2]:"fire-perf",[P2]:"fire-perf-compat",[k2]:"fire-rc",[M2]:"fire-rc-compat",[V2]:"fire-gcs",[L2]:"fire-gcs-compat",[U2]:"fire-fst",[z2]:"fire-fst-compat",[j2]:"fire-vertex","fire-js":"fire-js",[B2]:"fire-js-all"};/**
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
 */const Fh=new Map,q2=new Map,Cp=new Map;function EE(i,e){try{i.container.addComponent(e)}catch(t){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function is(i){const e=i.name;if(Cp.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;Cp.set(e,i);for(const t of Fh.values())EE(t,i);for(const t of q2.values())EE(t,i);return!0}function ku(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function wt(i){return i==null?!1:i.settings!==void 0}/**
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
 */const G2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jr=new ps("app","Firebase",G2);/**
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
 */class $2{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ii=F2;function h1(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Rp,automaticDataCollectionEnabled:!0},e),a=r.name;if(typeof a!="string"||!a)throw Jr.create("bad-app-name",{appName:String(a)});if(t||(t=Zb()),!t)throw Jr.create("no-options");const l=Fh.get(a);if(l){if(ns(t,l.options)&&ns(r,l.config))return l;throw Jr.create("duplicate-app",{appName:a})}const c=new JC(a);for(const p of Cp.values())c.addComponent(p);const m=new $2(t,r,c);return Fh.set(a,m),m}function Ng(i=Rp){const e=Fh.get(i);if(!e&&i===Rp&&Zb())return h1();if(!e)throw Jr.create("no-app",{appName:i});return e}function yi(i,e,t){var r;let a=(r=H2[i])!==null&&r!==void 0?r:i;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const m=[`Unable to register library "${a}" with version "${e}":`];l&&m.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&m.push("and"),c&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(m.join(" "));return}is(new nr(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const K2="firebase-heartbeat-database",Y2=1,bu="firebase-heartbeat-store";let ip=null;function f1(){return ip||(ip=h2(K2,Y2,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(bu)}catch(t){console.warn(t)}}}}).catch(i=>{throw Jr.create("idb-open",{originalErrorMessage:i.message})})),ip}async function Q2(i){try{const t=(await f1()).transaction(bu),r=await t.objectStore(bu).get(d1(i));return await t.done,r}catch(e){if(e instanceof jn)ir.warn(e.message);else{const t=Jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ir.warn(t.message)}}}async function TE(i,e){try{const r=(await f1()).transaction(bu,"readwrite");await r.objectStore(bu).put(e,d1(i)),await r.done}catch(t){if(t instanceof jn)ir.warn(t.message);else{const r=Jr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ir.warn(r.message)}}}function d1(i){return`${i.name}!${i.options.appId}`}/**
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
 */const X2=1024,W2=30;class J2{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ex(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=bE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>W2){const c=tx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ir.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=bE(),{heartbeatsToSend:r,unsentEntries:a}=Z2(this._heartbeatsCache.heartbeats),l=Bh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return ir.warn(t),""}}}function bE(){return new Date().toISOString().substring(0,10)}function Z2(i,e=X2){const t=[];let r=i.slice();for(const a of i){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),AE(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),AE(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ex{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BC()?FC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Q2(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return TE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return TE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function AE(i){return Bh(JSON.stringify({version:2,heartbeats:i})).length}function tx(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let r=1;r<i.length;r++)i[r].date<t&&(t=i[r].date,e=r);return e}/**
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
 */function nx(i){is(new nr("platform-logger",e=>new m2(e),"PRIVATE")),is(new nr("heartbeat",e=>new J2(e),"PRIVATE")),yi(Ip,_E,i),yi(Ip,_E,"esm2017"),yi("fire-js","")}nx("");function jo(i,e){var t={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&e.indexOf(r)<0&&(t[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(i);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(i,r[a])&&(t[r[a]]=i[r[a]]);return t}function m1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ix=m1,p1=new ps("auth","Firebase",m1());/**
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
 */const Hh=new Tf("@firebase/auth");function rx(i,...e){Hh.logLevel<=ke.WARN&&Hh.warn(`Auth (${Ii}): ${i}`,...e)}function Ih(i,...e){Hh.logLevel<=ke.ERROR&&Hh.error(`Auth (${Ii}): ${i}`,...e)}/**
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
 */function bi(i,...e){throw Dg(i,...e)}function Yn(i,...e){return Dg(i,...e)}function Og(i,e,t){const r=Object.assign(Object.assign({},ix()),{[e]:t});return new ps("auth","Firebase",r).create(e,{appName:i.name})}function ia(i){return Og(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sx(i,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&bi(i,"argument-error"),Og(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dg(i,...e){if(typeof i!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(t,...r)}return p1.create(i,...e)}function Ae(i,e,...t){if(!i)throw Dg(e,...t)}function Zi(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Ih(e),new Error(e)}function rr(i,e){i||Zi(e)}/**
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
 */function xp(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function ax(){return SE()==="http:"||SE()==="https:"}function SE(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function ox(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ax()||r1()||"connection"in navigator)?navigator.onLine:!0}function lx(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */let Mu=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,rr(t>e,"Short delay should be less than long delay!"),this.isMobile=n1()||s1()}get(){return ox()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
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
 */function Pg(i,e){rr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */let g1=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
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
 */const ux={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const cx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hx=new Mu(3e4,6e4);function kg(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function zo(i,e,t,r,a={}){return y1(i,a,async()=>{let l={},c={};r&&(e==="GET"?c=r:l={body:JSON.stringify(r)});const m=cr(Object.assign({key:i.config.apiKey},c)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},l);return i1()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&Uo(i.emulatorConfig.host)&&(g.credentials="include"),g1.fetch()(await v1(i,i.config.apiHost,t,m),g)})}async function y1(i,e,t){i._canInitEmulator=!1;const r=Object.assign(Object.assign({},ux),e);try{const a=new dx(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw yh(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const m=l.ok?c.errorMessage:c.error.message,[p,g]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw yh(i,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw yh(i,"email-already-in-use",c);if(p==="USER_DISABLED")throw yh(i,"user-disabled",c);const E=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Og(i,E,g);bi(i,E)}}catch(a){if(a instanceof jn)throw a;bi(i,"network-request-failed",{message:String(a)})}}async function fx(i,e,t,r,a={}){const l=await zo(i,e,t,r,a);return"mfaPendingCredential"in l&&bi(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function v1(i,e,t,r){const a=`${e}${t}?${r}`,l=i,c=l.config.emulator?Pg(i.config,a):`${i.config.apiScheme}://${a}`;return cx.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}let dx=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Yn(this.auth,"network-request-failed")),hx.get())})}};function yh(i,e,t){const r={appName:i.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const a=Yn(i,e,r);return a.customData._tokenResponse=t,a}/**
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
 */async function mx(i,e){return zo(i,"POST","/v1/accounts:delete",e)}async function qh(i,e){return zo(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function cu(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function px(i,e=!1){const t=Qt(i),r=await t.getIdToken(e),a=Mg(r);Ae(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:r,authTime:cu(rp(a.auth_time)),issuedAtTime:cu(rp(a.iat)),expirationTime:cu(rp(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function rp(i){return Number(i)*1e3}function Mg(i){const[e,t,r]=i.split(".");if(e===void 0||t===void 0||r===void 0)return Ih("JWT malformed, contained fewer than 3 sections"),null;try{const a=Cg(t);return a?JSON.parse(a):(Ih("Failed to decode base64 JWT payload"),null)}catch(a){return Ih("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function wE(i){const e=Mg(i);return Ae(e,"internal-error"),Ae(typeof e.exp<"u","internal-error"),Ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Au(i,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof jn&&gx(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function gx({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */let yx=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
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
 */let Np=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=cu(this.lastLoginAt),this.creationTime=cu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
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
 */async function Gh(i){var e;const t=i.auth,r=await i.getIdToken(),a=await Au(i,qh(t,{idToken:r}));Ae(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];i._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?_1(l.providerUserInfo):[],m=_x(i.providerData,c),p=i.isAnonymous,g=!(i.email&&l.passwordHash)&&!(m!=null&&m.length),E=p?g:!1,b={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:m,metadata:new Np(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(i,b)}async function vx(i){const e=Qt(i);await Gh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _x(i,e){return[...i.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function _1(i){return i.map(e=>{var{providerId:t}=e,r=jo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Ex(i,e){const t=await y1(i,{},async()=>{const r=cr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,c=await v1(i,a,"/v1/token",`key=${l}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",g1.fetch()(c,{method:"POST",headers:m,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Tx(i,e){return zo(i,"POST","/v2/accounts:revokeToken",kg(i,e))}/**
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
 */let sp=class Op{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ae(e.idToken,"internal-error"),Ae(typeof e.idToken<"u","internal-error"),Ae(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ae(e.length!==0,"internal-error");const t=wE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:a,expiresIn:l}=await Ex(e,t);this.updateTokensAndExpiration(r,a,Number(l))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:a,expirationTime:l}=t,c=new Op;return r&&(Ae(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),a&&(Ae(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Ae(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Op,this.toJSON())}_performRefresh(){return Zi("not implemented")}};/**
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
 */function Br(i,e){Ae(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}let yo=class ru{constructor(e){var{uid:t,auth:r,stsTokenManager:a}=e,l=jo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Np(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Au(this,this.stsTokenManager.getToken(this.auth,e));return Ae(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return px(this,e)}reload(){return vx(this)}_assign(e){this!==e&&(Ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ru(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Gh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(ia(this.auth));const e=await this.getIdToken();return await Au(this,mx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,a,l,c,m,p,g,E;const b=(r=t.displayName)!==null&&r!==void 0?r:void 0,S=(a=t.email)!==null&&a!==void 0?a:void 0,j=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,G=(c=t.photoURL)!==null&&c!==void 0?c:void 0,W=(m=t.tenantId)!==null&&m!==void 0?m:void 0,F=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,ee=(g=t.createdAt)!==null&&g!==void 0?g:void 0,ie=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ne,emailVerified:fe,isAnonymous:ce,providerData:Ce,stsTokenManager:D}=t;Ae(ne&&D,e,"internal-error");const w=sp.fromJSON(this.name,D);Ae(typeof ne=="string",e,"internal-error"),Br(b,e.name),Br(S,e.name),Ae(typeof fe=="boolean",e,"internal-error"),Ae(typeof ce=="boolean",e,"internal-error"),Br(j,e.name),Br(G,e.name),Br(W,e.name),Br(F,e.name),Br(ee,e.name),Br(ie,e.name);const C=new ru({uid:ne,auth:e,email:S,emailVerified:fe,displayName:b,isAnonymous:ce,photoURL:G,phoneNumber:j,tenantId:W,stsTokenManager:w,createdAt:ee,lastLoginAt:ie});return Ce&&Array.isArray(Ce)&&(C.providerData=Ce.map(P=>Object.assign({},P))),F&&(C._redirectEventId=F),C}static async _fromIdTokenResponse(e,t,r=!1){const a=new sp;a.updateFromServerResponse(t);const l=new ru({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await Gh(l),l}static async _fromGetAccountInfoResponse(e,t,r){const a=t.users[0];Ae(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?_1(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),m=new sp;m.updateFromIdToken(r);const p=new ru({uid:a.localId,auth:e,stsTokenManager:m,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Np(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}};/**
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
 */const IE=new Map;function er(i){rr(i instanceof Function,"Expected a class definition");let e=IE.get(i);return e?(rr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,IE.set(i,e),e)}/**
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
 */let E1=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};E1.type="NONE";const RE=E1;/**
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
 */function Rh(i,e,t){return`firebase:${i}:${e}:${t}`}let CE=class Ch{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:a,name:l}=this.auth;this.fullUserKey=Rh(this.userKey,a.apiKey,l),this.fullPersistenceKey=Rh("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await qh(this.auth,{idToken:e}).catch(()=>{});return t?yo._fromGetAccountInfoResponse(this.auth,t,e):null}return yo._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ch(er(RE),e,r);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||er(RE);const c=Rh(r,e.config.apiKey,e.name);let m=null;for(const g of t)try{const E=await g._get(c);if(E){let b;if(typeof E=="string"){const S=await qh(e,{idToken:E}).catch(()=>{});if(!S)break;b=await yo._fromGetAccountInfoResponse(e,S,E)}else b=yo._fromJSON(e,E);g!==l&&(m=b),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Ch(l,e,r):(l=p[0],m&&await l._set(c,m.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Ch(l,e,r))}};/**
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
 */function xE(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(S1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(T1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(I1(e))return"Blackberry";if(R1(e))return"Webos";if(b1(e))return"Safari";if((e.includes("chrome/")||A1(e))&&!e.includes("edge/"))return"Chrome";if(w1(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function T1(i=tt()){return/firefox\//i.test(i)}function b1(i=tt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function A1(i=tt()){return/crios\//i.test(i)}function S1(i=tt()){return/iemobile/i.test(i)}function w1(i=tt()){return/android/i.test(i)}function I1(i=tt()){return/blackberry/i.test(i)}function R1(i=tt()){return/webos/i.test(i)}function Vg(i=tt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function bx(i=tt()){var e;return Vg(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ax(){return a1()&&document.documentMode===10}function C1(i=tt()){return Vg(i)||w1(i)||R1(i)||I1(i)||/windows phone/i.test(i)||S1(i)}/**
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
 */function x1(i,e=[]){let t;switch(i){case"Browser":t=xE(tt());break;case"Worker":t=`${xE(tt())}-${i}`;break;default:t=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ii}/${r}`}/**
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
 */let Sx=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=l=>new Promise((c,m)=>{try{const p=e(l);c(p)}catch(p){m(p)}});r.onAbort=t,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}};/**
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
 */async function wx(i,e={}){return zo(i,"GET","/v2/passwordPolicy",kg(i,e))}/**
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
 */const Ix=6;let Rx=class{constructor(e){var t,r,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:Ix,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,a,l,c,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(r=p.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}};/**
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
 */let Cx=class{constructor(e,t,r,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new NE(this),this.idTokenSubscription=new NE(this),this.beforeStateQueue=new Sx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=er(t)),this._initializationPromise=this.queue(async()=>{var r,a,l;if(!this._deleted&&(this.persistenceManager=await CE.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await qh(this,{idToken:e}),r=await yo._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(wt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(m,m))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===m)&&(p!=null&&p.user)&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Gh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject(ia(this));const t=e?Qt(e):null;return t&&Ae(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(ia(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject(ia(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wx(this),t=new Rx(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ps("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Tx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&er(e)||this._popupRedirectResolver;Ae(t,this,"argument-error"),this.redirectPersistenceManager=await CE.create(this,[er(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ae(m,this,"internal-error"),m.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,r,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=x1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&rx(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}};function bf(i){return Qt(i)}let NE=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=l1(t=>this.observer=t)}get next(){return Ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
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
 */let Lg={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xx(i){Lg=i}function Nx(i){return Lg.loadJS(i)}function Ox(){return Lg.gapiScript}function Dx(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Px(i,e){const t=ku(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(ns(l,e??{}))return a;bi(a,"already-initialized")}return t.initialize({options:e})}function kx(i,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(er);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Mx(i,e,t){const r=bf(i);Ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const a=!1,l=N1(e),{host:c,port:m}=Vx(e),p=m===null?"":`:${m}`,g={url:`${l}//${c}${p}/`},E=Object.freeze({host:c,port:m,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!r._canInitEmulator){Ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Ae(ns(g,r.config.emulator)&&ns(E,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=E,r.settings.appVerificationDisabledForTesting=!0,Uo(c)?(Ef("Auth",!0),t1(`${l}//${c}${p}`)):Lx()}function N1(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function Vx(i){const e=N1(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const l=a[1];return{host:l,port:OE(r.substr(l.length+1))}}else{const[l,c]=r.split(":");return{host:l,port:OE(c)}}}function OE(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Lx(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */let O1=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Zi("not implemented")}_getIdTokenResponse(e){return Zi("not implemented")}_linkToIdToken(e,t){return Zi("not implemented")}_getReauthenticationResolver(e){return Zi("not implemented")}};/**
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
 */async function Eo(i,e){return fx(i,"POST","/v1/accounts:signInWithIdp",kg(i,e))}/**
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
 */const Ux="http://localhost";let Af=class Dp extends O1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Dp(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):bi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=t,l=jo(t,["providerId","signInMethod"]);if(!r||!a)return null;const c=new Dp(r,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Eo(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Eo(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Eo(e,t)}buildRequest(){const e={requestUri:Ux,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=cr(t)}return e}};/**
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
 */let Ug=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};/**
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
 */let Vu=class extends Ug{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};/**
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
 */let D1=class lo extends Vu{constructor(){super("facebook.com")}static credential(e){return Af._fromParams({providerId:lo.PROVIDER_ID,signInMethod:lo.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lo.credentialFromTaggedObject(e)}static credentialFromError(e){return lo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lo.credential(e.oauthAccessToken)}catch{return null}}};D1.FACEBOOK_SIGN_IN_METHOD="facebook.com";D1.PROVIDER_ID="facebook.com";/**
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
 */let jg=class uo extends Vu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Af._fromParams({providerId:uo.PROVIDER_ID,signInMethod:uo.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return uo.credentialFromTaggedObject(e)}static credentialFromError(e){return uo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return uo.credential(t,r)}catch{return null}}};jg.GOOGLE_SIGN_IN_METHOD="google.com";jg.PROVIDER_ID="google.com";/**
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
 */let P1=class co extends Vu{constructor(){super("github.com")}static credential(e){return Af._fromParams({providerId:co.PROVIDER_ID,signInMethod:co.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return co.credentialFromTaggedObject(e)}static credentialFromError(e){return co.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return co.credential(e.oauthAccessToken)}catch{return null}}};P1.GITHUB_SIGN_IN_METHOD="github.com";P1.PROVIDER_ID="github.com";/**
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
 */let k1=class ho extends Vu{constructor(){super("twitter.com")}static credential(e,t){return Af._fromParams({providerId:ho.PROVIDER_ID,signInMethod:ho.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ho.credentialFromTaggedObject(e)}static credentialFromError(e){return ho.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ho.credential(t,r)}catch{return null}}};k1.TWITTER_SIGN_IN_METHOD="twitter.com";k1.PROVIDER_ID="twitter.com";/**
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
 */let zg=class Pp{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,a=!1){const l=await yo._fromIdTokenResponse(e,r,a),c=DE(r);return new Pp({user:l,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const a=DE(r);return new Pp({user:e,providerId:a,_tokenResponse:r,operationType:t})}};function DE(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */let jx=class kp extends jn{constructor(e,t,r,a){var l;super(t.code,t.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,kp.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,a){return new kp(e,t,r,a)}};function M1(i,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?jx._fromErrorAndOperation(i,l,e,r):l})}async function zx(i,e,t=!1){const r=await Au(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return zg._forOperation(i,"link",r)}/**
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
 */async function Bx(i,e,t=!1){const{auth:r}=i;if(wt(r.app))return Promise.reject(ia(r));const a="reauthenticate";try{const l=await Au(i,M1(r,a,e,i),t);Ae(l.idToken,r,"internal-error");const c=Mg(l.idToken);Ae(c,r,"internal-error");const{sub:m}=c;return Ae(i.uid===m,r,"user-mismatch"),zg._forOperation(i,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&bi(r,"user-mismatch"),l}}/**
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
 */async function Fx(i,e,t=!1){if(wt(i.app))return Promise.reject(ia(i));const r="signIn",a=await M1(i,r,e),l=await zg._fromIdTokenResponse(i,r,a);return t||await i._updateCurrentUser(l.user),l}function Hx(i,e,t,r){return Qt(i).onIdTokenChanged(e,t,r)}function qx(i,e,t){return Qt(i).beforeAuthStateChanged(e,t)}function V1(i,e,t,r){return Qt(i).onAuthStateChanged(e,t,r)}function Gx(i){return Qt(i).signOut()}const $h="__sak";/**
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
 */let L1=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($h,"1"),this.storage.removeItem($h),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};/**
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
 */const $x=1e3,Kx=10;let U1=class extends L1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=C1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),a=this.localCache[t];r!==a&&e(t,a,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,m,p)=>{this.notifyListeners(c,p)});return}const r=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},l=this.storage.getItem(r);Ax()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,Kx):a()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},$x)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};U1.type="LOCAL";const Yx=U1;/**
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
 */let j1=class extends L1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};j1.type="SESSION";const z1=j1;/**
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
 */function Qx(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */let B1=class F1{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const r=new F1(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const m=Array.from(c).map(async g=>g(t.origin,l)),p=await Qx(m);t.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};B1.receivers=[];/**
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
 */function Bg(i="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */let Xx=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((m,p)=>{const g=Bg("",20);a.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},r);c={messageChannel:a,onMessage(b){const S=b;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),m(S.data.response);break;default:clearTimeout(E),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}};/**
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
 */function vi(){return window}function Wx(i){vi().location.href=i}/**
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
 */function H1(){return typeof vi().WorkerGlobalScope<"u"&&typeof vi().importScripts=="function"}async function Jx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Zx(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function eN(){return H1()?self:null}/**
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
 */const q1="firebaseLocalStorageDb",tN=1,Kh="firebaseLocalStorage",G1="fbase_key";let Lu=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function Sf(i,e){return i.transaction([Kh],e?"readwrite":"readonly").objectStore(Kh)}function nN(){const i=indexedDB.deleteDatabase(q1);return new Lu(i).toPromise()}function Mp(){const i=indexedDB.open(q1,tN);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(Kh,{keyPath:G1})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(Kh)?e(r):(r.close(),await nN(),e(await Mp()))})})}async function PE(i,e,t){const r=Sf(i,!0).put({[G1]:e,value:t});return new Lu(r).toPromise()}async function iN(i,e){const t=Sf(i,!1).get(e),r=await new Lu(t).toPromise();return r===void 0?null:r.value}function kE(i,e){const t=Sf(i,!0).delete(e);return new Lu(t).toPromise()}const rN=800,sN=3;let $1=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>sN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return H1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=B1._getInstance(eN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Jx(),!this.activeServiceWorker)return;this.sender=new Xx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Zx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mp();return await PE(e,$h,"1"),await kE(e,$h),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>PE(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>iN(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>kE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Sf(a,!1).getAll();return new Lu(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};$1.type="LOCAL";const aN=$1;new Mu(3e4,6e4);/**
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
 */function K1(i,e){return e?er(e):(Ae(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */let Fg=class extends O1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Eo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Eo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Eo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function oN(i){return Fx(i.auth,new Fg(i),i.bypassAuthState)}function lN(i){const{auth:e,user:t}=i;return Ae(t,e,"internal-error"),Bx(t,new Fg(i),i.bypassAuthState)}async function uN(i){const{auth:e,user:t}=i;return Ae(t,e,"internal-error"),zx(t,new Fg(i),i.bypassAuthState)}/**
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
 */let Y1=class{constructor(e,t,r,a,l=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:a,tenantId:l,error:c,type:m}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:r,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oN;case"linkViaPopup":case"linkViaRedirect":return uN;case"reauthViaPopup":case"reauthViaRedirect":return lN;default:bi(this.auth,"internal-error")}}resolve(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};/**
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
 */const cN=new Mu(2e3,1e4);async function hN(i,e,t){if(wt(i.app))return Promise.reject(Yn(i,"operation-not-supported-in-this-environment"));const r=bf(i);sx(i,e,Ug);const a=K1(r,t);return new ea(r,"signInViaPopup",e,a).executeNotNull()}class ea extends Y1{constructor(e,t,r,a,l){super(e,t,a,l),this.provider=r,this.authWindow=null,this.pollId=null,ea.currentPopupAction&&ea.currentPopupAction.cancel(),ea.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ae(e,this.auth,"internal-error"),e}async onExecution(){rr(this.filter.length===1,"Popup operations only handle one event");const e=Bg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ea.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cN.get())};e()}}ea.currentPopupAction=null;/**
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
 */const fN="pendingRedirect",xh=new Map;let dN=class extends Y1{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=xh.get(this.auth._key());if(!e){try{const r=await mN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}xh.set(this.auth._key(),e)}return this.bypassAuthState||xh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function mN(i,e){const t=yN(e),r=gN(i);if(!await r._isAvailable())return!1;const a=await r._get(t)==="true";return await r._remove(t),a}function pN(i,e){xh.set(i._key(),e)}function gN(i){return er(i._redirectPersistence)}function yN(i){return Rh(fN,i.config.apiKey,i.name)}async function vN(i,e,t=!1){if(wt(i.app))return Promise.reject(ia(i));const r=bf(i),a=K1(r,e),c=await new dN(r,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
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
 */const _N=10*60*1e3;let EN=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TN(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Q1(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Yn(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_N&&this.cachedEventUids.clear(),this.cachedEventUids.has(ME(e))}saveEventToCache(e){this.cachedEventUids.add(ME(e)),this.lastProcessedEventTime=Date.now()}};function ME(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Q1({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TN(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Q1(i);default:return!1}}/**
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
 */async function bN(i,e={}){return zo(i,"GET","/v1/projects",e)}/**
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
 */const AN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SN=/^https?/;async function wN(i){if(i.config.emulator)return;const{authorizedDomains:e}=await bN(i);for(const t of e)try{if(IN(t))return}catch{}bi(i,"unauthorized-domain")}function IN(i){const e=xp(),{protocol:t,hostname:r}=new URL(e);if(i.startsWith("chrome-extension://")){const c=new URL(i);return c.hostname===""&&r===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===r}if(!SN.test(t))return!1;if(AN.test(i))return r===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}/**
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
 */const RN=new Mu(3e4,6e4);function VE(){const i=vi().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function CN(i){return new Promise((e,t)=>{var r,a,l;function c(){VE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{VE(),t(Yn(i,"network-request-failed"))},timeout:RN.get()})}if(!((a=(r=vi().gapi)===null||r===void 0?void 0:r.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=vi().gapi)===null||l===void 0)&&l.load)c();else{const m=Dx("iframefcb");return vi()[m]=()=>{gapi.load?c():t(Yn(i,"network-request-failed"))},Nx(`${Ox()}?onload=${m}`).catch(p=>t(p))}}).catch(e=>{throw Nh=null,e})}let Nh=null;function xN(i){return Nh=Nh||CN(i),Nh}/**
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
 */const NN=new Mu(5e3,15e3),ON="__/auth/iframe",DN="emulator/auth/iframe",PN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MN(i){const e=i.config;Ae(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Pg(e,DN):`https://${i.config.authDomain}/${ON}`,r={apiKey:e.apiKey,appName:i.name,v:Ii},a=kN.get(i.config.apiHost);a&&(r.eid=a);const l=i._getFrameworks();return l.length&&(r.fw=l.join(",")),`${t}?${cr(r).slice(1)}`}async function VN(i){const e=await xN(i),t=vi().gapi;return Ae(t,i,"internal-error"),e.open({where:document.body,url:MN(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PN,dontclear:!0},r=>new Promise(async(a,l)=>{await r.restyle({setHideOnLeave:!1});const c=Yn(i,"network-request-failed"),m=vi().setTimeout(()=>{l(c)},NN.get());function p(){vi().clearTimeout(m),a(r)}r.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const LN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UN=500,jN=600,zN="_blank",BN="http://localhost";class LE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FN(i,e,t,r=UN,a=jN){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let m="";const p=Object.assign(Object.assign({},LN),{width:r.toString(),height:a.toString(),top:l,left:c}),g=tt().toLowerCase();t&&(m=A1(g)?zN:t),T1(g)&&(e=e||BN,p.scrollbars="yes");const E=Object.entries(p).reduce((S,[j,G])=>`${S}${j}=${G},`,"");if(bx(g)&&m!=="_self")return HN(e||"",m),new LE(null);const b=window.open(e||"",m,E);Ae(b,i,"popup-blocked");try{b.focus()}catch{}return new LE(b)}function HN(i,e){const t=document.createElement("a");t.href=i,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const qN="__/auth/handler",GN="emulator/auth/handler",$N=encodeURIComponent("fac");async function UE(i,e,t,r,a,l){Ae(i.config.authDomain,i,"auth-domain-config-required"),Ae(i.config.apiKey,i,"invalid-api-key");const c={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:r,v:Ii,eventId:a};if(e instanceof Ug){e.setDefaultLanguage(i.languageCode),c.providerId=e.providerId||"",o1(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,b]of Object.entries({}))c[E]=b}if(e instanceof Vu){const E=e.getScopes().filter(b=>b!=="");E.length>0&&(c.scopes=E.join(","))}i.tenantId&&(c.tid=i.tenantId);const m=c;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const p=await i._getAppCheckToken(),g=p?`#${$N}=${encodeURIComponent(p)}`:"";return`${KN(i)}?${cr(m).slice(1)}${g}`}function KN({config:i}){return i.emulator?Pg(i,GN):`https://${i.authDomain}/${qN}`}/**
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
 */const ap="webStorageSupport";class YN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=z1,this._completeRedirectFn=vN,this._overrideRedirectResult=pN}async _openPopup(e,t,r,a){var l;rr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await UE(e,t,r,xp(),a);return FN(e,c,Bg())}async _openRedirect(e,t,r,a){await this._originValidation(e);const l=await UE(e,t,r,xp(),a);return Wx(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(rr(l,"If manager is not set, promise should be"),l)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await VN(e),r=new EN(e);return t.register("authEvent",a=>(Ae(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:r.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ap,{type:ap},a=>{var l;const c=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[ap];c!==void 0&&t(!!c),bi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=wN(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return C1()||b1()||Vg()}}const QN=YN;var jE="@firebase/auth",zE="1.10.5";/**
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
 */let XN=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
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
 */function WN(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JN(i){is(new nr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:m}=r.options;Ae(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:c,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:x1(i)},g=new Cx(r,a,l,p);return kx(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),is(new nr("auth-internal",e=>{const t=bf(e.getProvider("auth").getImmediate());return(r=>new XN(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yi(jE,zE,WN(i)),yi(jE,zE,"esm2017")}/**
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
 */const ZN=5*60,eO=e1("authIdTokenMaxAge")||ZN;let BE=null;const tO=i=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>eO)return;const a=t==null?void 0:t.token;BE!==a&&(BE=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function Hg(i=Ng()){const e=ku(i,"auth");if(e.isInitialized())return e.getImmediate();const t=Px(i,{popupRedirectResolver:QN,persistence:[aN,Yx,z1]}),r=e1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(r,location.origin);if(location.origin===l.origin){const c=tO(l.toString());qx(t,c,()=>c(t.currentUser)),Hx(t,m=>c(m))}}const a=Jb("auth");return a?Mx(t,`http://${a}`):Ef("Auth",!1),t}function nO(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}xx({loadJS(i){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=e,r.onerror=a=>{const l=Yn("internal-error");l.customData=a,t(l)},r.type="text/javascript",r.charset="UTF-8",nO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JN("Browser");var iO="firebase",rO="11.8.0";/**
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
 */yi(iO,rO,"app");const sO={apiKey:"AIzaSyBu90rcUqw574sLzB_Ka-IRUlTGWo0sjBk",authDomain:"proyectouno-d09e0.firebaseapp.com",databaseURL:"https://proyectouno-d09e0-default-rtdb.firebaseio.com",projectId:"proyectouno-d09e0",storageBucket:"proyectouno-d09e0.firebasestorage.app",messagingSenderId:"567007730982",appId:"1:567007730982:web:cde41dd58a20780201f5e7",measurementId:"G-BJTNZ2M8DH"},Bo=h1(sO);var FE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zr,X1;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,w){function C(){}C.prototype=w.prototype,D.D=w.prototype,D.prototype=new C,D.prototype.constructor=D,D.C=function(P,k,V){for(var x=Array(arguments.length-2),Bt=2;Bt<arguments.length;Bt++)x[Bt-2]=arguments[Bt];return w.prototype[k].apply(P,x)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(D,w,C){C||(C=0);var P=Array(16);if(typeof w=="string")for(var k=0;16>k;++k)P[k]=w.charCodeAt(C++)|w.charCodeAt(C++)<<8|w.charCodeAt(C++)<<16|w.charCodeAt(C++)<<24;else for(k=0;16>k;++k)P[k]=w[C++]|w[C++]<<8|w[C++]<<16|w[C++]<<24;w=D.g[0],C=D.g[1],k=D.g[2];var V=D.g[3],x=w+(V^C&(k^V))+P[0]+3614090360&4294967295;w=C+(x<<7&4294967295|x>>>25),x=V+(k^w&(C^k))+P[1]+3905402710&4294967295,V=w+(x<<12&4294967295|x>>>20),x=k+(C^V&(w^C))+P[2]+606105819&4294967295,k=V+(x<<17&4294967295|x>>>15),x=C+(w^k&(V^w))+P[3]+3250441966&4294967295,C=k+(x<<22&4294967295|x>>>10),x=w+(V^C&(k^V))+P[4]+4118548399&4294967295,w=C+(x<<7&4294967295|x>>>25),x=V+(k^w&(C^k))+P[5]+1200080426&4294967295,V=w+(x<<12&4294967295|x>>>20),x=k+(C^V&(w^C))+P[6]+2821735955&4294967295,k=V+(x<<17&4294967295|x>>>15),x=C+(w^k&(V^w))+P[7]+4249261313&4294967295,C=k+(x<<22&4294967295|x>>>10),x=w+(V^C&(k^V))+P[8]+1770035416&4294967295,w=C+(x<<7&4294967295|x>>>25),x=V+(k^w&(C^k))+P[9]+2336552879&4294967295,V=w+(x<<12&4294967295|x>>>20),x=k+(C^V&(w^C))+P[10]+4294925233&4294967295,k=V+(x<<17&4294967295|x>>>15),x=C+(w^k&(V^w))+P[11]+2304563134&4294967295,C=k+(x<<22&4294967295|x>>>10),x=w+(V^C&(k^V))+P[12]+1804603682&4294967295,w=C+(x<<7&4294967295|x>>>25),x=V+(k^w&(C^k))+P[13]+4254626195&4294967295,V=w+(x<<12&4294967295|x>>>20),x=k+(C^V&(w^C))+P[14]+2792965006&4294967295,k=V+(x<<17&4294967295|x>>>15),x=C+(w^k&(V^w))+P[15]+1236535329&4294967295,C=k+(x<<22&4294967295|x>>>10),x=w+(k^V&(C^k))+P[1]+4129170786&4294967295,w=C+(x<<5&4294967295|x>>>27),x=V+(C^k&(w^C))+P[6]+3225465664&4294967295,V=w+(x<<9&4294967295|x>>>23),x=k+(w^C&(V^w))+P[11]+643717713&4294967295,k=V+(x<<14&4294967295|x>>>18),x=C+(V^w&(k^V))+P[0]+3921069994&4294967295,C=k+(x<<20&4294967295|x>>>12),x=w+(k^V&(C^k))+P[5]+3593408605&4294967295,w=C+(x<<5&4294967295|x>>>27),x=V+(C^k&(w^C))+P[10]+38016083&4294967295,V=w+(x<<9&4294967295|x>>>23),x=k+(w^C&(V^w))+P[15]+3634488961&4294967295,k=V+(x<<14&4294967295|x>>>18),x=C+(V^w&(k^V))+P[4]+3889429448&4294967295,C=k+(x<<20&4294967295|x>>>12),x=w+(k^V&(C^k))+P[9]+568446438&4294967295,w=C+(x<<5&4294967295|x>>>27),x=V+(C^k&(w^C))+P[14]+3275163606&4294967295,V=w+(x<<9&4294967295|x>>>23),x=k+(w^C&(V^w))+P[3]+4107603335&4294967295,k=V+(x<<14&4294967295|x>>>18),x=C+(V^w&(k^V))+P[8]+1163531501&4294967295,C=k+(x<<20&4294967295|x>>>12),x=w+(k^V&(C^k))+P[13]+2850285829&4294967295,w=C+(x<<5&4294967295|x>>>27),x=V+(C^k&(w^C))+P[2]+4243563512&4294967295,V=w+(x<<9&4294967295|x>>>23),x=k+(w^C&(V^w))+P[7]+1735328473&4294967295,k=V+(x<<14&4294967295|x>>>18),x=C+(V^w&(k^V))+P[12]+2368359562&4294967295,C=k+(x<<20&4294967295|x>>>12),x=w+(C^k^V)+P[5]+4294588738&4294967295,w=C+(x<<4&4294967295|x>>>28),x=V+(w^C^k)+P[8]+2272392833&4294967295,V=w+(x<<11&4294967295|x>>>21),x=k+(V^w^C)+P[11]+1839030562&4294967295,k=V+(x<<16&4294967295|x>>>16),x=C+(k^V^w)+P[14]+4259657740&4294967295,C=k+(x<<23&4294967295|x>>>9),x=w+(C^k^V)+P[1]+2763975236&4294967295,w=C+(x<<4&4294967295|x>>>28),x=V+(w^C^k)+P[4]+1272893353&4294967295,V=w+(x<<11&4294967295|x>>>21),x=k+(V^w^C)+P[7]+4139469664&4294967295,k=V+(x<<16&4294967295|x>>>16),x=C+(k^V^w)+P[10]+3200236656&4294967295,C=k+(x<<23&4294967295|x>>>9),x=w+(C^k^V)+P[13]+681279174&4294967295,w=C+(x<<4&4294967295|x>>>28),x=V+(w^C^k)+P[0]+3936430074&4294967295,V=w+(x<<11&4294967295|x>>>21),x=k+(V^w^C)+P[3]+3572445317&4294967295,k=V+(x<<16&4294967295|x>>>16),x=C+(k^V^w)+P[6]+76029189&4294967295,C=k+(x<<23&4294967295|x>>>9),x=w+(C^k^V)+P[9]+3654602809&4294967295,w=C+(x<<4&4294967295|x>>>28),x=V+(w^C^k)+P[12]+3873151461&4294967295,V=w+(x<<11&4294967295|x>>>21),x=k+(V^w^C)+P[15]+530742520&4294967295,k=V+(x<<16&4294967295|x>>>16),x=C+(k^V^w)+P[2]+3299628645&4294967295,C=k+(x<<23&4294967295|x>>>9),x=w+(k^(C|~V))+P[0]+4096336452&4294967295,w=C+(x<<6&4294967295|x>>>26),x=V+(C^(w|~k))+P[7]+1126891415&4294967295,V=w+(x<<10&4294967295|x>>>22),x=k+(w^(V|~C))+P[14]+2878612391&4294967295,k=V+(x<<15&4294967295|x>>>17),x=C+(V^(k|~w))+P[5]+4237533241&4294967295,C=k+(x<<21&4294967295|x>>>11),x=w+(k^(C|~V))+P[12]+1700485571&4294967295,w=C+(x<<6&4294967295|x>>>26),x=V+(C^(w|~k))+P[3]+2399980690&4294967295,V=w+(x<<10&4294967295|x>>>22),x=k+(w^(V|~C))+P[10]+4293915773&4294967295,k=V+(x<<15&4294967295|x>>>17),x=C+(V^(k|~w))+P[1]+2240044497&4294967295,C=k+(x<<21&4294967295|x>>>11),x=w+(k^(C|~V))+P[8]+1873313359&4294967295,w=C+(x<<6&4294967295|x>>>26),x=V+(C^(w|~k))+P[15]+4264355552&4294967295,V=w+(x<<10&4294967295|x>>>22),x=k+(w^(V|~C))+P[6]+2734768916&4294967295,k=V+(x<<15&4294967295|x>>>17),x=C+(V^(k|~w))+P[13]+1309151649&4294967295,C=k+(x<<21&4294967295|x>>>11),x=w+(k^(C|~V))+P[4]+4149444226&4294967295,w=C+(x<<6&4294967295|x>>>26),x=V+(C^(w|~k))+P[11]+3174756917&4294967295,V=w+(x<<10&4294967295|x>>>22),x=k+(w^(V|~C))+P[2]+718787259&4294967295,k=V+(x<<15&4294967295|x>>>17),x=C+(V^(k|~w))+P[9]+3951481745&4294967295,D.g[0]=D.g[0]+w&4294967295,D.g[1]=D.g[1]+(k+(x<<21&4294967295|x>>>11))&4294967295,D.g[2]=D.g[2]+k&4294967295,D.g[3]=D.g[3]+V&4294967295}r.prototype.u=function(D,w){w===void 0&&(w=D.length);for(var C=w-this.blockSize,P=this.B,k=this.h,V=0;V<w;){if(k==0)for(;V<=C;)a(this,D,V),V+=this.blockSize;if(typeof D=="string"){for(;V<w;)if(P[k++]=D.charCodeAt(V++),k==this.blockSize){a(this,P),k=0;break}}else for(;V<w;)if(P[k++]=D[V++],k==this.blockSize){a(this,P),k=0;break}}this.h=k,this.o+=w},r.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var w=1;w<D.length-8;++w)D[w]=0;var C=8*this.o;for(w=D.length-8;w<D.length;++w)D[w]=C&255,C/=256;for(this.u(D),D=Array(16),w=C=0;4>w;++w)for(var P=0;32>P;P+=8)D[C++]=this.g[w]>>>P&255;return D};function l(D,w){var C=m;return Object.prototype.hasOwnProperty.call(C,D)?C[D]:C[D]=w(D)}function c(D,w){this.h=w;for(var C=[],P=!0,k=D.length-1;0<=k;k--){var V=D[k]|0;P&&V==w||(C[k]=V,P=!1)}this.g=C}var m={};function p(D){return-128<=D&&128>D?l(D,function(w){return new c([w|0],0>w?-1:0)}):new c([D|0],0>D?-1:0)}function g(D){if(isNaN(D)||!isFinite(D))return b;if(0>D)return F(g(-D));for(var w=[],C=1,P=0;D>=C;P++)w[P]=D/C|0,C*=4294967296;return new c(w,0)}function E(D,w){if(D.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(D.charAt(0)=="-")return F(E(D.substring(1),w));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=g(Math.pow(w,8)),P=b,k=0;k<D.length;k+=8){var V=Math.min(8,D.length-k),x=parseInt(D.substring(k,k+V),w);8>V?(V=g(Math.pow(w,V)),P=P.j(V).add(g(x))):(P=P.j(C),P=P.add(g(x)))}return P}var b=p(0),S=p(1),j=p(16777216);i=c.prototype,i.m=function(){if(W(this))return-F(this).m();for(var D=0,w=1,C=0;C<this.g.length;C++){var P=this.i(C);D+=(0<=P?P:4294967296+P)*w,w*=4294967296}return D},i.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(G(this))return"0";if(W(this))return"-"+F(this).toString(D);for(var w=g(Math.pow(D,6)),C=this,P="";;){var k=fe(C,w).g;C=ee(C,k.j(w));var V=((0<C.g.length?C.g[0]:C.h)>>>0).toString(D);if(C=k,G(C))return V+P;for(;6>V.length;)V="0"+V;P=V+P}},i.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function G(D){if(D.h!=0)return!1;for(var w=0;w<D.g.length;w++)if(D.g[w]!=0)return!1;return!0}function W(D){return D.h==-1}i.l=function(D){return D=ee(this,D),W(D)?-1:G(D)?0:1};function F(D){for(var w=D.g.length,C=[],P=0;P<w;P++)C[P]=~D.g[P];return new c(C,~D.h).add(S)}i.abs=function(){return W(this)?F(this):this},i.add=function(D){for(var w=Math.max(this.g.length,D.g.length),C=[],P=0,k=0;k<=w;k++){var V=P+(this.i(k)&65535)+(D.i(k)&65535),x=(V>>>16)+(this.i(k)>>>16)+(D.i(k)>>>16);P=x>>>16,V&=65535,x&=65535,C[k]=x<<16|V}return new c(C,C[C.length-1]&-2147483648?-1:0)};function ee(D,w){return D.add(F(w))}i.j=function(D){if(G(this)||G(D))return b;if(W(this))return W(D)?F(this).j(F(D)):F(F(this).j(D));if(W(D))return F(this.j(F(D)));if(0>this.l(j)&&0>D.l(j))return g(this.m()*D.m());for(var w=this.g.length+D.g.length,C=[],P=0;P<2*w;P++)C[P]=0;for(P=0;P<this.g.length;P++)for(var k=0;k<D.g.length;k++){var V=this.i(P)>>>16,x=this.i(P)&65535,Bt=D.i(k)>>>16,ht=D.i(k)&65535;C[2*P+2*k]+=x*ht,ie(C,2*P+2*k),C[2*P+2*k+1]+=V*ht,ie(C,2*P+2*k+1),C[2*P+2*k+1]+=x*Bt,ie(C,2*P+2*k+1),C[2*P+2*k+2]+=V*Bt,ie(C,2*P+2*k+2)}for(P=0;P<w;P++)C[P]=C[2*P+1]<<16|C[2*P];for(P=w;P<2*w;P++)C[P]=0;return new c(C,0)};function ie(D,w){for(;(D[w]&65535)!=D[w];)D[w+1]+=D[w]>>>16,D[w]&=65535,w++}function ne(D,w){this.g=D,this.h=w}function fe(D,w){if(G(w))throw Error("division by zero");if(G(D))return new ne(b,b);if(W(D))return w=fe(F(D),w),new ne(F(w.g),F(w.h));if(W(w))return w=fe(D,F(w)),new ne(F(w.g),w.h);if(30<D.g.length){if(W(D)||W(w))throw Error("slowDivide_ only works with positive integers.");for(var C=S,P=w;0>=P.l(D);)C=ce(C),P=ce(P);var k=Ce(C,1),V=Ce(P,1);for(P=Ce(P,2),C=Ce(C,2);!G(P);){var x=V.add(P);0>=x.l(D)&&(k=k.add(C),V=x),P=Ce(P,1),C=Ce(C,1)}return w=ee(D,k.j(w)),new ne(k,w)}for(k=b;0<=D.l(w);){for(C=Math.max(1,Math.floor(D.m()/w.m())),P=Math.ceil(Math.log(C)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),V=g(C),x=V.j(w);W(x)||0<x.l(D);)C-=P,V=g(C),x=V.j(w);G(V)&&(V=S),k=k.add(V),D=ee(D,x)}return new ne(k,D)}i.A=function(D){return fe(this,D).h},i.and=function(D){for(var w=Math.max(this.g.length,D.g.length),C=[],P=0;P<w;P++)C[P]=this.i(P)&D.i(P);return new c(C,this.h&D.h)},i.or=function(D){for(var w=Math.max(this.g.length,D.g.length),C=[],P=0;P<w;P++)C[P]=this.i(P)|D.i(P);return new c(C,this.h|D.h)},i.xor=function(D){for(var w=Math.max(this.g.length,D.g.length),C=[],P=0;P<w;P++)C[P]=this.i(P)^D.i(P);return new c(C,this.h^D.h)};function ce(D){for(var w=D.g.length+1,C=[],P=0;P<w;P++)C[P]=D.i(P)<<1|D.i(P-1)>>>31;return new c(C,D.h)}function Ce(D,w){var C=w>>5;w%=32;for(var P=D.g.length-C,k=[],V=0;V<P;V++)k[V]=0<w?D.i(V+C)>>>w|D.i(V+C+1)<<32-w:D.i(V+C);return new c(k,D.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,X1=r,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=E,Zr=c}).apply(typeof FE<"u"?FE:typeof self<"u"?self:typeof window<"u"?window:{});var vh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var W1,su,J1,Oh,Vp,Z1,eA,tA;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,y,v){return h==Array.prototype||h==Object.prototype||(h[y]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof vh=="object"&&vh];for(var y=0;y<h.length;++y){var v=h[y];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=t(this);function a(h,y){if(y)e:{var v=r;h=h.split(".");for(var A=0;A<h.length-1;A++){var L=h[A];if(!(L in v))break e;v=v[L]}h=h[h.length-1],A=v[h],y=y(A),y!=A&&y!=null&&e(v,h,{configurable:!0,writable:!0,value:y})}}function l(h,y){h instanceof String&&(h+="");var v=0,A=!1,L={next:function(){if(!A&&v<h.length){var q=v++;return{value:y(q,h[q]),done:!1}}return A=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}a("Array.prototype.values",function(h){return h||function(){return l(this,function(y,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},m=this||self;function p(h){var y=typeof h;return y=y!="object"?y:h?Array.isArray(h)?"array":y:"null",y=="array"||y=="object"&&typeof h.length=="number"}function g(h){var y=typeof h;return y=="object"&&h!=null||y=="function"}function E(h,y,v){return h.call.apply(h.bind,arguments)}function b(h,y,v){if(!h)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,A),h.apply(y,L)}}return function(){return h.apply(y,arguments)}}function S(h,y,v){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:b,S.apply(null,arguments)}function j(h,y){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),h.apply(this,A)}}function G(h,y){function v(){}v.prototype=y.prototype,h.aa=y.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(A,L,q){for(var se=Array(arguments.length-2),je=2;je<arguments.length;je++)se[je-2]=arguments[je];return y.prototype[L].apply(A,se)}}function W(h){const y=h.length;if(0<y){const v=Array(y);for(let A=0;A<y;A++)v[A]=h[A];return v}return[]}function F(h,y){for(let v=1;v<arguments.length;v++){const A=arguments[v];if(p(A)){const L=h.length||0,q=A.length||0;h.length=L+q;for(let se=0;se<q;se++)h[L+se]=A[se]}else h.push(A)}}class ee{constructor(y,v){this.i=y,this.j=v,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function ie(h){return/^[\s\xa0]*$/.test(h)}function ne(){var h=m.navigator;return h&&(h=h.userAgent)?h:""}function fe(h){return fe[" "](h),h}fe[" "]=function(){};var ce=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function Ce(h,y,v){for(const A in h)y.call(v,h[A],A,h)}function D(h,y){for(const v in h)y.call(void 0,h[v],v,h)}function w(h){const y={};for(const v in h)y[v]=h[v];return y}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(h,y){let v,A;for(let L=1;L<arguments.length;L++){A=arguments[L];for(v in A)h[v]=A[v];for(let q=0;q<C.length;q++)v=C[q],Object.prototype.hasOwnProperty.call(A,v)&&(h[v]=A[v])}}function k(h){var y=1;h=h.split(":");const v=[];for(;0<y&&h.length;)v.push(h.shift()),y--;return h.length&&v.push(h.join(":")),v}function V(h){m.setTimeout(()=>{throw h},0)}function x(){var h=qe;let y=null;return h.g&&(y=h.g,h.g=h.g.next,h.g||(h.h=null),y.next=null),y}class Bt{constructor(){this.h=this.g=null}add(y,v){const A=ht.get();A.set(y,v),this.h?this.h.next=A:this.g=A,this.h=A}}var ht=new ee(()=>new $,h=>h.reset());class ${constructor(){this.next=this.g=this.h=null}set(y,v){this.h=y,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,pe=!1,qe=new Bt,N=()=>{const h=m.Promise.resolve(void 0);oe=()=>{h.then(J)}};var J=()=>{for(var h;h=x();){try{h.h.call(h.g)}catch(v){V(v)}var y=ht;y.j(h),100>y.h&&(y.h++,h.next=y.g,y.g=h)}pe=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function re(h,y){this.type=h,this.g=this.target=y,this.defaultPrevented=!1}re.prototype.h=function(){this.defaultPrevented=!0};var ge=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var h=!1,y=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};m.addEventListener("test",v,y),m.removeEventListener("test",v,y)}catch{}return h}();function De(h,y){if(re.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,A=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=y,y=h.relatedTarget){if(ce){e:{try{fe(y.nodeName);var L=!0;break e}catch{}L=!1}L||(y=null)}}else v=="mouseover"?y=h.fromElement:v=="mouseout"&&(y=h.toElement);this.relatedTarget=y,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Se[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&De.aa.h.call(this)}}G(De,re);var Se={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var kt="closure_listenable_"+(1e6*Math.random()|0),it=0;function Qn(h,y,v,A,L){this.listener=h,this.proxy=null,this.src=y,this.type=v,this.capture=!!A,this.ha=L,this.key=++it,this.da=this.fa=!1}function fr(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Ri(h){this.src=h,this.g={},this.h=0}Ri.prototype.add=function(h,y,v,A,L){var q=h.toString();h=this.g[q],h||(h=this.g[q]=[],this.h++);var se=ys(h,y,A,L);return-1<se?(y=h[se],v||(y.fa=!1)):(y=new Qn(y,this.src,q,!!A,L),y.fa=v,h.push(y)),y};function gs(h,y){var v=y.type;if(v in h.g){var A=h.g[v],L=Array.prototype.indexOf.call(A,y,void 0),q;(q=0<=L)&&Array.prototype.splice.call(A,L,1),q&&(fr(y),h.g[v].length==0&&(delete h.g[v],h.h--))}}function ys(h,y,v,A){for(var L=0;L<h.length;++L){var q=h[L];if(!q.da&&q.listener==y&&q.capture==!!v&&q.ha==A)return L}return-1}var vs="closure_lm_"+(1e6*Math.random()|0),Yo={};function Ku(h,y,v,A,L){if(Array.isArray(y)){for(var q=0;q<y.length;q++)Ku(h,y[q],v,A,L);return null}return v=Yu(v),h&&h[kt]?h.K(y,v,g(A)?!!A.capture:!1,L):wn(h,y,v,!1,A,L)}function wn(h,y,v,A,L,q){if(!y)throw Error("Invalid event type");var se=g(L)?!!L.capture:!!L,je=ya(h);if(je||(h[vs]=je=new Ri(h)),v=je.add(y,v,A,se,q),v.proxy)return v;if(A=$f(),v.proxy=A,A.src=h,A.listener=v,h.addEventListener)ge||(L=se),L===void 0&&(L=!1),h.addEventListener(y.toString(),A,L);else if(h.attachEvent)h.attachEvent(_s(y.toString()),A);else if(h.addListener&&h.removeListener)h.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function $f(){function h(v){return y.call(h.src,h.listener,v)}const y=Kf;return h}function Qo(h,y,v,A,L){if(Array.isArray(y))for(var q=0;q<y.length;q++)Qo(h,y[q],v,A,L);else A=g(A)?!!A.capture:!!A,v=Yu(v),h&&h[kt]?(h=h.i,y=String(y).toString(),y in h.g&&(q=h.g[y],v=ys(q,v,A,L),-1<v&&(fr(q[v]),Array.prototype.splice.call(q,v,1),q.length==0&&(delete h.g[y],h.h--)))):h&&(h=ya(h))&&(y=h.g[y.toString()],h=-1,y&&(h=ys(y,v,A,L)),(v=-1<h?y[h]:null)&&ga(v))}function ga(h){if(typeof h!="number"&&h&&!h.da){var y=h.src;if(y&&y[kt])gs(y.i,h);else{var v=h.type,A=h.proxy;y.removeEventListener?y.removeEventListener(v,A,h.capture):y.detachEvent?y.detachEvent(_s(v),A):y.addListener&&y.removeListener&&y.removeListener(A),(v=ya(y))?(gs(v,h),v.h==0&&(v.src=null,y[vs]=null)):fr(h)}}}function _s(h){return h in Yo?Yo[h]:Yo[h]="on"+h}function Kf(h,y){if(h.da)h=!0;else{y=new De(y,this);var v=h.listener,A=h.ha||h.src;h.fa&&ga(h),h=v.call(A,y)}return h}function ya(h){return h=h[vs],h instanceof Ri?h:null}var Xo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yu(h){return typeof h=="function"?h:(h[Xo]||(h[Xo]=function(y){return h.handleEvent(y)}),h[Xo])}function ft(){le.call(this),this.i=new Ri(this),this.M=this,this.F=null}G(ft,le),ft.prototype[kt]=!0,ft.prototype.removeEventListener=function(h,y,v,A){Qo(this,h,y,v,A)};function Ye(h,y){var v,A=h.F;if(A)for(v=[];A;A=A.F)v.push(A);if(h=h.M,A=y.type||y,typeof y=="string")y=new re(y,h);else if(y instanceof re)y.target=y.target||h;else{var L=y;y=new re(A,h),P(y,L)}if(L=!0,v)for(var q=v.length-1;0<=q;q--){var se=y.g=v[q];L=mn(se,A,!0,y)&&L}if(se=y.g=h,L=mn(se,A,!0,y)&&L,L=mn(se,A,!1,y)&&L,v)for(q=0;q<v.length;q++)se=y.g=v[q],L=mn(se,A,!1,y)&&L}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var h=this.i,y;for(y in h.g){for(var v=h.g[y],A=0;A<v.length;A++)fr(v[A]);delete h.g[y],h.h--}}this.F=null},ft.prototype.K=function(h,y,v,A){return this.i.add(String(h),y,!1,v,A)},ft.prototype.L=function(h,y,v,A){return this.i.add(String(h),y,!0,v,A)};function mn(h,y,v,A){if(y=h.i.g[String(y)],!y)return!0;y=y.concat();for(var L=!0,q=0;q<y.length;++q){var se=y[q];if(se&&!se.da&&se.capture==v){var je=se.listener,Rt=se.ha||se.src;se.fa&&gs(h.i,se),L=je.call(Rt,A)!==!1&&L}}return L&&!A.defaultPrevented}function Wt(h,y,v){if(typeof h=="function")v&&(h=S(h,v));else if(h&&typeof h.handleEvent=="function")h=S(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:m.setTimeout(h,y||0)}function Qu(h){h.g=Wt(()=>{h.g=null,h.i&&(h.i=!1,Qu(h))},h.l);const y=h.h;h.h=null,h.m.apply(null,y)}class Yf extends le{constructor(y,v){super(),this.m=y,this.l=v,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Qu(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Es(h){le.call(this),this.h=h,this.g={}}G(Es,le);var Ts=[];function bs(h){Ce(h.g,function(y,v){this.g.hasOwnProperty(v)&&ga(y)},h),h.g={}}Es.prototype.N=function(){Es.aa.N.call(this),bs(this)},Es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zn=m.JSON.stringify,va=m.JSON.parse,As=class{stringify(h){return m.JSON.stringify(h,void 0)}parse(h){return m.JSON.parse(h,void 0)}};function Wo(){}Wo.prototype.h=null;function Jo(h){return h.h||(h.h=h.i())}function Zo(){}var Ci={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xi(){re.call(this,"d")}G(xi,re);function el(){re.call(this,"c")}G(el,re);var Xn={},tl=null;function dr(){return tl=tl||new ft}Xn.La="serverreachability";function _a(h){re.call(this,Xn.La,h)}G(_a,re);function mr(h){const y=dr();Ye(y,new _a(y))}Xn.STAT_EVENT="statevent";function Xu(h,y){re.call(this,Xn.STAT_EVENT,h),this.stat=y}G(Xu,re);function at(h){const y=dr();Ye(y,new Xu(y,h))}Xn.Ma="timingevent";function It(h,y){re.call(this,Xn.Ma,h),this.size=y}G(It,re);function Et(h,y){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){h()},y)}function In(){this.g=!0}In.prototype.xa=function(){this.g=!1};function nl(h,y,v,A,L,q){h.info(function(){if(h.g)if(q)for(var se="",je=q.split("&"),Rt=0;Rt<je.length;Rt++){var ze=je[Rt].split("=");if(1<ze.length){var Vt=ze[0];ze=ze[1];var Ct=Vt.split("_");se=2<=Ct.length&&Ct[1]=="type"?se+(Vt+"="+ze+"&"):se+(Vt+"=redacted&")}}else se=null;else se=q;return"XMLHTTP REQ ("+A+") [attempt "+L+"]: "+y+`
`+v+`
`+se})}function Qf(h,y,v,A,L,q,se){h.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+L+"]: "+y+`
`+v+`
`+q+" "+se})}function pr(h,y,v,A){h.info(function(){return"XMLHTTP TEXT ("+y+"): "+Ss(h,v)+(A?" "+A:"")})}function Wu(h,y){h.info(function(){return"TIMEOUT: "+y})}In.prototype.info=function(){};function Ss(h,y){if(!h.g)return y;if(!y)return null;try{var v=JSON.parse(y);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var A=v[h];if(!(2>A.length)){var L=A[1];if(Array.isArray(L)&&!(1>L.length)){var q=L[0];if(q!="noop"&&q!="stop"&&q!="close")for(var se=1;se<L.length;se++)L[se]=""}}}}return zn(v)}catch{return y}}var gr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ni={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wn;function Jn(){}G(Jn,Wo),Jn.prototype.g=function(){return new XMLHttpRequest},Jn.prototype.i=function(){return{}},Wn=new Jn;function sn(h,y,v,A){this.j=h,this.i=y,this.l=v,this.R=A||1,this.U=new Es(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new pt}function pt(){this.i=null,this.g="",this.h=!1}var il={},Ea={};function Bn(h,y,v){h.L=1,h.v=xs(pn(y)),h.m=v,h.P=!0,Oi(h,null)}function Oi(h,y){h.F=Date.now(),ws(h),h.A=pn(h.v);var v=h.A,A=h.R;Array.isArray(A)||(A=[String(A)]),ul(v.i,"t",A),h.C=0,v=h.j.J,h.h=new pt,h.g=dc(h.j,v?y:null,!h.m),0<h.O&&(h.M=new Yf(S(h.Y,h,h.g),h.O)),y=h.U,v=h.g,A=h.ca;var L="readystatechange";Array.isArray(L)||(L&&(Ts[0]=L.toString()),L=Ts);for(var q=0;q<L.length;q++){var se=Ku(v,L[q],A||y.handleEvent,!1,y.h||y);if(!se)break;y.g[se.key]=se}y=h.H?w(h.H):{},h.m?(h.u||(h.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,y)):(h.u="GET",h.g.ea(h.A,h.u,null,y)),mr(),nl(h.i,h.u,h.A,h.l,h.R,h.m)}sn.prototype.ca=function(h){h=h.target;const y=this.M;y&&Nn(h)==3?y.j():this.Y(h)},sn.prototype.Y=function(h){try{if(h==this.g)e:{const Ct=Nn(this.g);var y=this.g.Ba();const ji=this.g.Z();if(!(3>Ct)&&(Ct!=3||this.g&&(this.h.h||this.g.oa()||sc(this.g)))){this.J||Ct!=4||y==7||(y==8||0>=ji?mr(3):mr(2)),yr(this);var v=this.g.Z();this.X=v;t:if(Ju(this)){var A=sc(this.g);h="";var L=A.length,q=Nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ft(this),Zn(this);var se="";break t}this.h.i=new m.TextDecoder}for(y=0;y<L;y++)this.h.h=!0,h+=this.h.i.decode(A[y],{stream:!(q&&y==L-1)});A.length=0,this.h.g+=h,this.C=0,se=this.h.g}else se=this.g.oa();if(this.o=v==200,Qf(this.i,this.u,this.A,this.l,this.R,Ct,v),this.o){if(this.T&&!this.K){t:{if(this.g){var je,Rt=this.g;if((je=Rt.g?Rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ie(je)){var ze=je;break t}}ze=null}if(v=ze)pr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Is(this,v);else{this.o=!1,this.s=3,at(12),Ft(this),Zn(this);break e}}if(this.P){v=!0;let Ht;for(;!this.J&&this.C<se.length;)if(Ht=Zu(this,se),Ht==Ea){Ct==4&&(this.s=4,at(14),v=!1),pr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==il){this.s=4,at(15),pr(this.i,this.l,se,"[Invalid Chunk]"),v=!1;break}else pr(this.i,this.l,Ht,null),Is(this,Ht);if(Ju(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ct!=4||se.length!=0||this.h.h||(this.s=1,at(16),v=!1),this.o=this.o&&v,!v)pr(this.i,this.l,se,"[Invalid Chunked Response]"),Ft(this),Zn(this);else if(0<se.length&&!this.W){this.W=!0;var Vt=this.j;Vt.g==this&&Vt.ba&&!Vt.M&&(Vt.j.info("Great, no buffering proxy detected. Bytes received: "+se.length),Ls(Vt),Vt.M=!0,at(11))}}else pr(this.i,this.l,se,null),Is(this,se);Ct==4&&Ft(this),this.o&&!this.J&&(Ct==4?cc(this.j,this):(this.o=!1,ws(this)))}else ed(this.g),v==400&&0<se.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),Ft(this),Zn(this)}}}catch{}finally{}};function Ju(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Zu(h,y){var v=h.C,A=y.indexOf(`
`,v);return A==-1?Ea:(v=Number(y.substring(v,A)),isNaN(v)?il:(A+=1,A+v>y.length?Ea:(y=y.slice(A,A+v),h.C=A+v,y)))}sn.prototype.cancel=function(){this.J=!0,Ft(this)};function ws(h){h.S=Date.now()+h.I,ec(h,h.I)}function ec(h,y){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Et(S(h.ba,h),y)}function yr(h){h.B&&(m.clearTimeout(h.B),h.B=null)}sn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Wu(this.i,this.A),this.L!=2&&(mr(),at(17)),Ft(this),this.s=2,Zn(this)):ec(this,this.S-h)};function Zn(h){h.j.G==0||h.J||cc(h.j,h)}function Ft(h){yr(h);var y=h.M;y&&typeof y.ma=="function"&&y.ma(),h.M=null,bs(h.U),h.g&&(y=h.g,h.g=null,y.abort(),y.ma())}function Is(h,y){try{var v=h.j;if(v.G!=0&&(v.g==h||rl(v.h,h))){if(!h.K&&rl(v.h,h)&&v.G==3){try{var A=v.Da.g.parse(y)}catch{A=null}if(Array.isArray(A)&&A.length==3){var L=A;if(L[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)Da(v),Na(v);else break e;ml(v),at(18)}}else v.za=L[1],0<v.za-v.T&&37500>L[2]&&v.F&&v.v==0&&!v.C&&(v.C=Et(S(v.Za,v),6e3));if(1>=ba(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Ui(v,11)}else if((h.K||v.g==h)&&Da(v),!ie(y))for(L=v.Da.g.parse(y),y=0;y<L.length;y++){let ze=L[y];if(v.T=ze[0],ze=ze[1],v.G==2)if(ze[0]=="c"){v.K=ze[1],v.ia=ze[2];const Vt=ze[3];Vt!=null&&(v.la=Vt,v.j.info("VER="+v.la));const Ct=ze[4];Ct!=null&&(v.Aa=Ct,v.j.info("SVER="+v.Aa));const ji=ze[5];ji!=null&&typeof ji=="number"&&0<ji&&(A=1.5*ji,v.L=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const Ht=h.g;if(Ht){const ai=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ai){var q=A.h;q.g||ai.indexOf("spdy")==-1&&ai.indexOf("quic")==-1&&ai.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Aa(q,q.h),q.h=null))}if(A.D){const gl=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;gl&&(A.ya=gl,We(A.I,A.D,gl))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),A=v;var se=h;if(A.qa=fc(A,A.J?A.ia:null,A.W),se.K){an(A.h,se);var je=se,Rt=A.L;Rt&&(je.I=Rt),je.B&&(yr(je),ws(je)),A.g=se}else lc(A);0<v.i.length&&Oa(v)}else ze[0]!="stop"&&ze[0]!="close"||Ui(v,7);else v.G==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?Ui(v,7):fl(v):ze[0]!="noop"&&v.l&&v.l.ta(ze),v.v=0)}}mr(4)}catch{}}var tc=class{constructor(h,y){this.g=h,this.map=y}};function Di(h){this.l=h||10,m.PerformanceNavigationTiming?(h=m.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ta(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function ba(h){return h.h?1:h.g?h.g.size:0}function rl(h,y){return h.h?h.h==y:h.g?h.g.has(y):!1}function Aa(h,y){h.g?h.g.add(y):h.h=y}function an(h,y){h.h&&h.h==y?h.h=null:h.g&&h.g.has(y)&&h.g.delete(y)}Di.prototype.cancel=function(){if(this.i=sl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function sl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let y=h.i;for(const v of h.g.values())y=y.concat(v.D);return y}return W(h.i)}function Xf(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var y=[],v=h.length,A=0;A<v;A++)y.push(h[A]);return y}y=[],v=0;for(A in h)y[v++]=h[A];return y}function Sa(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var y=[];h=h.length;for(var v=0;v<h;v++)y.push(v);return y}y=[],v=0;for(const A in h)y[v++]=A;return y}}}function al(h,y){if(h.forEach&&typeof h.forEach=="function")h.forEach(y,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,y,void 0);else for(var v=Sa(h),A=Xf(h),L=A.length,q=0;q<L;q++)y.call(void 0,A[q],v&&v[q],h)}var Rs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wf(h,y){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var A=h[v].indexOf("="),L=null;if(0<=A){var q=h[v].substring(0,A);L=h[v].substring(A+1)}else q=h[v];y(q,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Tt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Tt){this.h=h.h,Cs(this,h.j),this.o=h.o,this.g=h.g,vr(this,h.s),this.l=h.l;var y=h.i,v=new ki;v.i=y.i,y.g&&(v.g=new Map(y.g),v.h=y.h),Pi(this,v),this.m=h.m}else h&&(y=String(h).match(Rs))?(this.h=!1,Cs(this,y[1]||"",!0),this.o=Rn(y[2]||""),this.g=Rn(y[3]||"",!0),vr(this,y[4]),this.l=Rn(y[5]||"",!0),Pi(this,y[6]||"",!0),this.m=Rn(y[7]||"")):(this.h=!1,this.i=new ki(null,this.h))}Tt.prototype.toString=function(){var h=[],y=this.j;y&&h.push(Ns(y,ol,!0),":");var v=this.g;return(v||y=="file")&&(h.push("//"),(y=this.o)&&h.push(Ns(y,ol,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(Ns(v,v.charAt(0)=="/"?Jf:ll,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",Ns(v,wa)),h.join("")};function pn(h){return new Tt(h)}function Cs(h,y,v){h.j=v?Rn(y,!0):y,h.j&&(h.j=h.j.replace(/:$/,""))}function vr(h,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);h.s=y}else h.s=null}function Pi(h,y,v){y instanceof ki?(h.i=y,ic(h.i,h.h)):(v||(y=Ns(y,Zf)),h.i=new ki(y,h.h))}function We(h,y,v){h.i.set(y,v)}function xs(h){return We(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Rn(h,y){return h?y?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Ns(h,y,v){return typeof h=="string"?(h=encodeURI(h).replace(y,nc),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function nc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var ol=/[#\/\?@]/g,ll=/[#\?:]/g,Jf=/[#\?]/g,Zf=/[#\?@]/g,wa=/#/g;function ki(h,y){this.h=this.g=null,this.i=h||null,this.j=!!y}function Cn(h){h.g||(h.g=new Map,h.h=0,h.i&&Wf(h.i,function(y,v){h.add(decodeURIComponent(y.replace(/\+/g," ")),v)}))}i=ki.prototype,i.add=function(h,y){Cn(this),this.i=null,h=ei(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(y),this.h+=1,this};function Mi(h,y){Cn(h),y=ei(h,y),h.g.has(y)&&(h.i=null,h.h-=h.g.get(y).length,h.g.delete(y))}function Vi(h,y){return Cn(h),y=ei(h,y),h.g.has(y)}i.forEach=function(h,y){Cn(this),this.g.forEach(function(v,A){v.forEach(function(L){h.call(y,L,A,this)},this)},this)},i.na=function(){Cn(this);const h=Array.from(this.g.values()),y=Array.from(this.g.keys()),v=[];for(let A=0;A<y.length;A++){const L=h[A];for(let q=0;q<L.length;q++)v.push(y[A])}return v},i.V=function(h){Cn(this);let y=[];if(typeof h=="string")Vi(this,h)&&(y=y.concat(this.g.get(ei(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)y=y.concat(h[v])}return y},i.set=function(h,y){return Cn(this),this.i=null,h=ei(this,h),Vi(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[y]),this.h+=1,this},i.get=function(h,y){return h?(h=this.V(h),0<h.length?String(h[0]):y):y};function ul(h,y,v){Mi(h,y),0<v.length&&(h.i=null,h.g.set(ei(h,y),W(v)),h.h+=v.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],y=Array.from(this.g.keys());for(var v=0;v<y.length;v++){var A=y[v];const q=encodeURIComponent(String(A)),se=this.V(A);for(A=0;A<se.length;A++){var L=q;se[A]!==""&&(L+="="+encodeURIComponent(String(se[A]))),h.push(L)}}return this.i=h.join("&")};function ei(h,y){return y=String(y),h.j&&(y=y.toLowerCase()),y}function ic(h,y){y&&!h.j&&(Cn(h),h.i=null,h.g.forEach(function(v,A){var L=A.toLowerCase();A!=L&&(Mi(this,A),ul(this,L,v))},h)),h.j=y}function Os(h,y){const v=new In;if(m.Image){const A=new Image;A.onload=j(xn,v,"TestLoadImage: loaded",!0,y,A),A.onerror=j(xn,v,"TestLoadImage: error",!1,y,A),A.onabort=j(xn,v,"TestLoadImage: abort",!1,y,A),A.ontimeout=j(xn,v,"TestLoadImage: timeout",!1,y,A),m.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=h}else y(!1)}function Fn(h,y){const v=new In,A=new AbortController,L=setTimeout(()=>{A.abort(),xn(v,"TestPingServer: timeout",!1,y)},1e4);fetch(h,{signal:A.signal}).then(q=>{clearTimeout(L),q.ok?xn(v,"TestPingServer: ok",!0,y):xn(v,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(L),xn(v,"TestPingServer: error",!1,y)})}function xn(h,y,v,A,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),A(v)}catch{}}function Ds(){this.g=new As}function ti(h,y,v){const A=v||"";try{al(h,function(L,q){let se=L;g(L)&&(se=zn(L)),y.push(A+q+"="+encodeURIComponent(se))})}catch(L){throw y.push(A+"type="+encodeURIComponent("_badmap")),L}}function _r(h){this.l=h.Ub||null,this.j=h.eb||!1}G(_r,Wo),_r.prototype.g=function(){return new Li(this.l,this.j)},_r.prototype.i=function(h){return function(){return h}}({});function Li(h,y){ft.call(this),this.D=h,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}G(Li,ft),i=Li.prototype,i.open=function(h,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=y,this.readyState=1,ii(this)},i.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(y.body=h),(this.D||m).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ni(this)),this.readyState=0},i.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,ii(this)),this.g&&(this.readyState=3,ii(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function cl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}i.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var y=h.value?h.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!h.done}))&&(this.response=this.responseText+=y)}h.done?ni(this):ii(this),this.readyState==3&&cl(this)}},i.Ra=function(h){this.g&&(this.response=this.responseText=h,ni(this))},i.Qa=function(h){this.g&&(this.response=h,ni(this))},i.ga=function(){this.g&&ni(this)};function ni(h){h.readyState=4,h.l=null,h.j=null,h.v=null,ii(h)}i.setRequestHeader=function(h,y){this.u.append(h,y)},i.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],y=this.h.entries();for(var v=y.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=y.next();return h.join(`\r
`)};function ii(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function hl(h){let y="";return Ce(h,function(v,A){y+=A,y+=":",y+=v,y+=`\r
`}),y}function Mt(h,y,v){e:{for(A in v){var A=!1;break e}A=!0}A||(v=hl(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):We(h,y,v))}function $e(h){ft.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}G($e,ft);var Ia=/^https?$/i,Ps=["POST","PUT"];i=$e.prototype,i.Ha=function(h){this.J=h},i.ea=function(h,y,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);y=y?y.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wn.g(),this.v=this.o?Jo(this.o):Jo(Wn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(y,String(h),!0),this.B=!1}catch(q){rc(this,q);return}if(h=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var L in A)v.set(L,A[L]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const q of A.keys())v.set(q,A.get(q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(q=>q.toLowerCase()=="content-type"),L=m.FormData&&h instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Ps,y,void 0))||A||L||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,se]of v)this.g.setRequestHeader(q,se);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ks(this),this.u=!0,this.g.send(h),this.u=!1}catch(q){rc(this,q)}};function rc(h,y){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=y,h.m=5,Ra(h),ri(h)}function Ra(h){h.A||(h.A=!0,Ye(h,"complete"),Ye(h,"error"))}i.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Ye(this,"complete"),Ye(this,"abort"),ri(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ri(this,!0)),$e.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Ca(this):this.bb())},i.bb=function(){Ca(this)};function Ca(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Nn(h)!=4||h.Z()!=2)){if(h.u&&Nn(h)==4)Wt(h.Ea,0,h);else if(Ye(h,"readystatechange"),Nn(h)==4){h.h=!1;try{const se=h.Z();e:switch(se){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var v;if(!(v=y)){var A;if(A=se===0){var L=String(h.D).match(Rs)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),A=!Ia.test(L?L.toLowerCase():"")}v=A}if(v)Ye(h,"complete"),Ye(h,"success");else{h.m=6;try{var q=2<Nn(h)?h.g.statusText:""}catch{q=""}h.l=q+" ["+h.Z()+"]",Ra(h)}}finally{ri(h)}}}}function ri(h,y){if(h.g){ks(h);const v=h.g,A=h.v[0]?()=>{}:null;h.g=null,h.v=null,y||Ye(h,"ready");try{v.onreadystatechange=A}catch{}}}function ks(h){h.I&&(m.clearTimeout(h.I),h.I=null)}i.isActive=function(){return!!this.g};function Nn(h){return h.g?h.g.readyState:0}i.Z=function(){try{return 2<Nn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(h){if(this.g){var y=this.g.responseText;return h&&y.indexOf(h)==0&&(y=y.substring(h.length)),va(y)}};function sc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function ed(h){const y={};h=(h.g&&2<=Nn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<h.length;A++){if(ie(h[A]))continue;var v=k(h[A]);const L=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const q=y[L]||[];y[L]=q,q.push(v)}D(y,function(A){return A.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ms(h,y,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||y}function xa(h){this.Aa=0,this.i=[],this.j=new In,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ms("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ms("baseRetryDelayMs",5e3,h),this.cb=Ms("retryDelaySeedMs",1e4,h),this.Wa=Ms("forwardChannelMaxRetries",2,h),this.wa=Ms("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Di(h&&h.concurrentRequestLimit),this.Da=new Ds,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=xa.prototype,i.la=8,i.G=1,i.connect=function(h,y,v,A){at(0),this.W=h,this.H=y||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.I=fc(this,null,this.W),Oa(this)};function fl(h){if(ac(h),h.G==3){var y=h.U++,v=pn(h.I);if(We(v,"SID",h.K),We(v,"RID",y),We(v,"TYPE","terminate"),Vs(h,v),y=new sn(h,h.j,y),y.L=2,y.v=xs(pn(v)),v=!1,m.navigator&&m.navigator.sendBeacon)try{v=m.navigator.sendBeacon(y.v.toString(),"")}catch{}!v&&m.Image&&(new Image().src=y.v,v=!0),v||(y.g=dc(y.j,null),y.g.ea(y.v)),y.F=Date.now(),ws(y)}hc(h)}function Na(h){h.g&&(Ls(h),h.g.cancel(),h.g=null)}function ac(h){Na(h),h.u&&(m.clearTimeout(h.u),h.u=null),Da(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&m.clearTimeout(h.s),h.s=null)}function Oa(h){if(!Ta(h.h)&&!h.s){h.s=!0;var y=h.Ga;oe||N(),pe||(oe(),pe=!0),qe.add(y,h),h.B=0}}function td(h,y){return ba(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=y.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Et(S(h.Ga,h,y),pl(h,h.B)),h.B++,!0)}i.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const L=new sn(this,this.j,h);let q=this.o;if(this.S&&(q?(q=w(q),P(q,this.S)):q=this.S),this.m!==null||this.O||(L.H=q,q=null),this.P)e:{for(var y=0,v=0;v<this.i.length;v++){t:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(y+=A,4096<y){y=v;break e}if(y===4096||v===this.i.length-1){y=v+1;break e}}y=1e3}else y=1e3;y=oc(this,L,y),v=pn(this.I),We(v,"RID",h),We(v,"CVER",22),this.D&&We(v,"X-HTTP-Session-Id",this.D),Vs(this,v),q&&(this.O?y="headers="+encodeURIComponent(String(hl(q)))+"&"+y:this.m&&Mt(v,this.m,q)),Aa(this.h,L),this.Ua&&We(v,"TYPE","init"),this.P?(We(v,"$req",y),We(v,"SID","null"),L.T=!0,Bn(L,v,null)):Bn(L,v,y),this.G=2}}else this.G==3&&(h?dl(this,h):this.i.length==0||Ta(this.h)||dl(this))};function dl(h,y){var v;y?v=y.l:v=h.U++;const A=pn(h.I);We(A,"SID",h.K),We(A,"RID",v),We(A,"AID",h.T),Vs(h,A),h.m&&h.o&&Mt(A,h.m,h.o),v=new sn(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),y&&(h.i=y.D.concat(h.i)),y=oc(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Aa(h.h,v),Bn(v,A,y)}function Vs(h,y){h.H&&Ce(h.H,function(v,A){We(y,A,v)}),h.l&&al({},function(v,A){We(y,A,v)})}function oc(h,y,v){v=Math.min(h.i.length,v);var A=h.l?S(h.l.Na,h.l,h):null;e:{var L=h.i;let q=-1;for(;;){const se=["count="+v];q==-1?0<v?(q=L[0].g,se.push("ofs="+q)):q=0:se.push("ofs="+q);let je=!0;for(let Rt=0;Rt<v;Rt++){let ze=L[Rt].g;const Vt=L[Rt].map;if(ze-=q,0>ze)q=Math.max(0,L[Rt].g-100),je=!1;else try{ti(Vt,se,"req"+ze+"_")}catch{A&&A(Vt)}}if(je){A=se.join("&");break e}}}return h=h.i.splice(0,v),y.D=h,A}function lc(h){if(!h.g&&!h.u){h.Y=1;var y=h.Fa;oe||N(),pe||(oe(),pe=!0),qe.add(y,h),h.v=0}}function ml(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Et(S(h.Fa,h),pl(h,h.v)),h.v++,!0)}i.Fa=function(){if(this.u=null,uc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Et(S(this.ab,this),h)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),Na(this),uc(this))};function Ls(h){h.A!=null&&(m.clearTimeout(h.A),h.A=null)}function uc(h){h.g=new sn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var y=pn(h.qa);We(y,"RID","rpc"),We(y,"SID",h.K),We(y,"AID",h.T),We(y,"CI",h.F?"0":"1"),!h.F&&h.ja&&We(y,"TO",h.ja),We(y,"TYPE","xmlhttp"),Vs(h,y),h.m&&h.o&&Mt(y,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=xs(pn(y)),v.m=null,v.P=!0,Oi(v,h)}i.Za=function(){this.C!=null&&(this.C=null,Na(this),ml(this),at(19))};function Da(h){h.C!=null&&(m.clearTimeout(h.C),h.C=null)}function cc(h,y){var v=null;if(h.g==y){Da(h),Ls(h),h.g=null;var A=2}else if(rl(h.h,y))v=y.D,an(h.h,y),A=1;else return;if(h.G!=0){if(y.o)if(A==1){v=y.m?y.m.length:0,y=Date.now()-y.F;var L=h.B;A=dr(),Ye(A,new It(A,v)),Oa(h)}else lc(h);else if(L=y.s,L==3||L==0&&0<y.X||!(A==1&&td(h,y)||A==2&&ml(h)))switch(v&&0<v.length&&(y=h.h,y.i=y.i.concat(v)),L){case 1:Ui(h,5);break;case 4:Ui(h,10);break;case 3:Ui(h,6);break;default:Ui(h,2)}}}function pl(h,y){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*y}function Ui(h,y){if(h.j.info("Error code "+y),y==2){var v=S(h.fb,h),A=h.Xa;const L=!A;A=new Tt(A||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Cs(A,"https"),xs(A),L?Os(A.toString(),v):Fn(A.toString(),v)}else at(2);h.G=0,h.l&&h.l.sa(y),hc(h),ac(h)}i.fb=function(h){h?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function hc(h){if(h.G=0,h.ka=[],h.l){const y=sl(h.h);(y.length!=0||h.i.length!=0)&&(F(h.ka,y),F(h.ka,h.i),h.h.i.length=0,W(h.i),h.i.length=0),h.l.ra()}}function fc(h,y,v){var A=v instanceof Tt?pn(v):new Tt(v);if(A.g!="")y&&(A.g=y+"."+A.g),vr(A,A.s);else{var L=m.location;A=L.protocol,y=y?y+"."+L.hostname:L.hostname,L=+L.port;var q=new Tt(null);A&&Cs(q,A),y&&(q.g=y),L&&vr(q,L),v&&(q.l=v),A=q}return v=h.D,y=h.ya,v&&y&&We(A,v,y),We(A,"VER",h.la),Vs(h,A),A}function dc(h,y,v){if(y&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=h.Ca&&!h.pa?new $e(new _r({eb:v})):new $e(h.pa),y.Ha(h.J),y}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function mc(){}i=mc.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Pa(){}Pa.prototype.g=function(h,y){return new on(h,y)};function on(h,y){ft.call(this),this.g=new xa(y),this.l=h,this.h=y&&y.messageUrlParams||null,h=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(h?h["X-WebChannel-Content-Type"]=y.messageContentType:h={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(h?h["X-WebChannel-Client-Profile"]=y.va:h={"X-WebChannel-Client-Profile":y.va}),this.g.S=h,(h=y&&y.Sb)&&!ie(h)&&(this.g.m=h),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!ie(y)&&(this.g.D=y,h=this.h,h!==null&&y in h&&(h=this.h,y in h&&delete h[y])),this.j=new si(this)}G(on,ft),on.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},on.prototype.close=function(){fl(this.g)},on.prototype.o=function(h){var y=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=zn(h),h=v);y.i.push(new tc(y.Ya++,h)),y.G==3&&Oa(y)},on.prototype.N=function(){this.g.l=null,delete this.j,fl(this.g),delete this.g,on.aa.N.call(this)};function pc(h){xi.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var y=h.__sm__;if(y){e:{for(const v in y){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,y=y!==null&&h in y?y[h]:void 0),this.data=y}else this.data=h}G(pc,xi);function gc(){el.call(this),this.status=1}G(gc,el);function si(h){this.g=h}G(si,mc),si.prototype.ua=function(){Ye(this.g,"a")},si.prototype.ta=function(h){Ye(this.g,new pc(h))},si.prototype.sa=function(h){Ye(this.g,new gc)},si.prototype.ra=function(){Ye(this.g,"b")},Pa.prototype.createWebChannel=Pa.prototype.g,on.prototype.send=on.prototype.o,on.prototype.open=on.prototype.m,on.prototype.close=on.prototype.close,tA=function(){return new Pa},eA=function(){return dr()},Z1=Xn,Vp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},gr.NO_ERROR=0,gr.TIMEOUT=8,gr.HTTP_ERROR=6,Oh=gr,Ni.COMPLETE="complete",J1=Ni,Zo.EventType=Ci,Ci.OPEN="a",Ci.CLOSE="b",Ci.ERROR="c",Ci.MESSAGE="d",ft.prototype.listen=ft.prototype.K,su=Zo,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,W1=$e}).apply(typeof vh<"u"?vh:typeof self<"u"?self:typeof window<"u"?window:{});const HE="@firebase/firestore",qE="4.7.15";/**
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
 */class tn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tn.UNAUTHENTICATED=new tn(null),tn.GOOGLE_CREDENTIALS=new tn("google-credentials-uid"),tn.FIRST_PARTY=new tn("first-party-uid"),tn.MOCK_USER=new tn("mock-user");/**
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
 */let Fo="11.8.0";/**
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
 */const sa=new Tf("@firebase/firestore");function fo(){return sa.logLevel}function ue(i,...e){if(sa.logLevel<=ke.DEBUG){const t=e.map(qg);sa.debug(`Firestore (${Fo}): ${i}`,...t)}}function sr(i,...e){if(sa.logLevel<=ke.ERROR){const t=e.map(qg);sa.error(`Firestore (${Fo}): ${i}`,...t)}}function Io(i,...e){if(sa.logLevel<=ke.WARN){const t=e.map(qg);sa.warn(`Firestore (${Fo}): ${i}`,...t)}}function qg(i){if(typeof i=="string")return i;try{/**
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
 */function be(i,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,nA(i,r,t)}function nA(i,e,t){let r=`FIRESTORE (${Fo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw sr(r),new Error(r)}function Ke(i,e,t,r){let a="Unexpected state";typeof t=="string"?a=t:r=t,i||nA(e,a,r)}function Re(i,e){return i}/**
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
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ye extends jn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class iA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(tn.UNAUTHENTICATED))}shutdown(){}}class oO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class lO{constructor(e){this.t=e,this.currentUser=tn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ke(this.o===void 0,42304);let r=this.i;const a=p=>this.i!==r?(r=this.i,t(p)):Promise.resolve();let l=new es;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new es,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},m=p=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>m(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new es)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ke(typeof r.accessToken=="string",31837,{l:r}),new iA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ke(e===null||typeof e=="string",2055,{h:e}),new tn(e)}}class uO{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=tn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class cO{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new uO(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(tn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class GE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hO{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ke(this.o===void 0,3512);const r=l=>{l.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,ue("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>r(l))};const a=l=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new GE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ke(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new GE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function fO(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<i;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function rA(){return new TextEncoder}/**
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
 */class sA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const a=fO(40);for(let l=0;l<a.length;++l)r.length<20&&a[l]<t&&(r+=e.charAt(a[l]%62))}return r}}function Oe(i,e){return i<e?-1:i>e?1:0}function Lp(i,e){let t=0;for(;t<i.length&&t<e.length;){const r=i.codePointAt(t),a=e.codePointAt(t);if(r!==a){if(r<128&&a<128)return Oe(r,a);{const l=rA(),c=dO(l.encode($E(i,t)),l.encode($E(e,t)));return c!==0?c:Oe(r,a)}}t+=r>65535?2:1}return Oe(i.length,e.length)}function $E(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function dO(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Oe(i[t],e[t]);return Oe(i.length,e.length)}function Ro(i,e,t){return i.length===e.length&&i.every((r,a)=>t(r,e[a]))}/**
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
 */const KE=-62135596800,YE=1e6;class Dt{static now(){return Dt.fromMillis(Date.now())}static fromDate(e){return Dt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*YE);return new Dt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ye(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ye(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<KE)throw new ye(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ye(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/YE}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-KE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */const QE="__name__";class fi{constructor(e,t,r){t===void 0?t=0:t>e.length&&be(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&be(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return fi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof fi?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let a=0;a<r;a++){const l=fi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Oe(e.length,t.length)}static compareSegments(e,t){const r=fi.isNumericId(e),a=fi.isNumericId(t);return r&&!a?-1:!r&&a?1:r&&a?fi.extractNumericId(e).compare(fi.extractNumericId(t)):Lp(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Zr.fromString(e.substring(4,e.length-2))}}class lt extends fi{construct(e,t,r){return new lt(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ye(Z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(a=>a.length>0))}return new lt(t)}static emptyPath(){return new lt([])}}const mO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Yt extends fi{construct(e,t,r){return new Yt(e,t,r)}static isValidIdentifier(e){return mO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===QE}static keyField(){return new Yt([QE])}static fromServerFormat(e){const t=[];let r="",a=0;const l=()=>{if(r.length===0)throw new ye(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let c=!1;for(;a<e.length;){const m=e[a];if(m==="\\"){if(a+1===e.length)throw new ye(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ye(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=p,a+=2}else m==="`"?(c=!c,a++):m!=="."||c?(r+=m,a++):(l(),a++)}if(l(),c)throw new ye(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Yt(t)}static emptyPath(){return new Yt([])}}/**
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
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(lt.fromString(e))}static fromName(e){return new ve(lt.fromString(e).popFirst(5))}static empty(){return new ve(lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&lt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return lt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new lt(e.slice()))}}/**
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
 */const Su=-1;function pO(i,e){const t=i.toTimestamp().seconds,r=i.toTimestamp().nanoseconds+1,a=we.fromTimestamp(r===1e9?new Dt(t+1,0):new Dt(t,r));return new rs(a,ve.empty(),e)}function gO(i){return new rs(i.readTime,i.key,Su)}class rs{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new rs(we.min(),ve.empty(),Su)}static max(){return new rs(we.max(),ve.empty(),Su)}}function yO(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=ve.comparator(i.documentKey,e.documentKey),t!==0?t:Oe(i.largestBatchId,e.largestBatchId))}/**
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
 */const vO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _O{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ho(i){if(i.code!==Z.FAILED_PRECONDITION||i.message!==vO)throw i;ue("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class X{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&be(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new X((r,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(r,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(r,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof X?t:X.resolve(t)}catch(t){return X.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):X.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):X.reject(t)}static resolve(e){return new X((t,r)=>{t(e)})}static reject(e){return new X((t,r)=>{r(e)})}static waitFor(e){return new X((t,r)=>{let a=0,l=0,c=!1;e.forEach(m=>{++a,m.next(()=>{++l,c&&l===a&&t()},p=>r(p))}),c=!0,l===a&&t()})}static or(e){let t=X.resolve(!1);for(const r of e)t=t.next(a=>a?X.resolve(a):r());return t}static forEach(e,t){const r=[];return e.forEach((a,l)=>{r.push(t.call(this,a,l))}),this.waitFor(r)}static mapArray(e,t){return new X((r,a)=>{const l=e.length,c=new Array(l);let m=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next(E=>{c[g]=E,++m,m===l&&r(c)},E=>a(E))}})}static doWhile(e,t){return new X((r,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):r()};l()})}}function EO(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function qo(i){return i.name==="IndexedDbTransactionError"}/**
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
 */const Gg=-1;function If(i){return i==null}function Yh(i){return i===0&&1/i==-1/0}function TO(i){return typeof i=="number"&&Number.isInteger(i)&&!Yh(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const aA="";function bO(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=XE(e)),e=AO(i.get(t),e);return XE(e)}function AO(i,e){let t=e;const r=i.length;for(let a=0;a<r;a++){const l=i.charAt(a);switch(l){case"\0":t+="";break;case aA:t+="";break;default:t+=l}}return t}function XE(i){return i+aA+""}/**
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
 */function WE(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function ha(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function oA(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class ct{constructor(e,t){this.comparator=e,this.root=t||Kt.EMPTY}insert(e,t){return new ct(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Kt.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const a=this.comparator(e,r.key);if(a===0)return t+r.left.size;a<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _h(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _h(this.root,e,this.comparator,!1)}getReverseIterator(){return new _h(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _h(this.root,e,this.comparator,!0)}}class _h{constructor(e,t,r,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?r(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Kt{constructor(e,t,r,a,l){this.key=e,this.value=t,this.color=r??Kt.RED,this.left=a??Kt.EMPTY,this.right=l??Kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,a,l){return new Kt(e??this.key,t??this.value,r??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let a=this;const l=r(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,r),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,r)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Kt.EMPTY;r=a.right.min(),a=a.copy(r.key,r.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw be(43730,{key:this.key,value:this.value});if(this.right.isRed())throw be(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw be(27949);return e+(this.isRed()?0:1)}}Kt.EMPTY=null,Kt.RED=!0,Kt.BLACK=!1;Kt.EMPTY=new class{constructor(){this.size=0}get key(){throw be(57766)}get value(){throw be(16141)}get color(){throw be(16727)}get left(){throw be(29726)}get right(){throw be(36894)}copy(e,t,r,a,l){return this}insert(e,t,r){return new Kt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Pt{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const a=r.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new JE(this.data.getIterator())}getIteratorFrom(e){return new JE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Pt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=r.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Pt(this.comparator);return t.data=e,t}}class JE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class $n{constructor(e){this.fields=e,e.sort(Yt.comparator)}static empty(){return new $n([])}unionWith(e){let t=new Pt(Yt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new $n(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ro(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class lA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new lA("Invalid base64 string: "+l):l}}(e);return new Xt(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new Xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let a=0;a<t.length;a++)r[a]=t.charCodeAt(a);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xt.EMPTY_BYTE_STRING=new Xt("");const SO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ss(i){if(Ke(!!i,39018),typeof i=="string"){let e=0;const t=SO.exec(i);if(Ke(!!t,46558,{timestamp:i}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const r=new Date(i);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:vt(i.seconds),nanos:vt(i.nanos)}}function vt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function as(i){return typeof i=="string"?Xt.fromBase64String(i):Xt.fromUint8Array(i)}/**
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
 */const uA="server_timestamp",cA="__type__",hA="__previous_value__",fA="__local_write_time__";function $g(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[cA])===null||t===void 0?void 0:t.stringValue)===uA}function Rf(i){const e=i.mapValue.fields[hA];return $g(e)?Rf(e):e}function wu(i){const e=ss(i.mapValue.fields[fA].timestampValue);return new Dt(e.seconds,e.nanos)}/**
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
 */class wO{constructor(e,t,r,a,l,c,m,p,g,E){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=E}}const Qh="(default)";class Iu{constructor(e,t){this.projectId=e,this.database=t||Qh}static empty(){return new Iu("","")}get isDefaultDatabase(){return this.database===Qh}isEqual(e){return e instanceof Iu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const dA="__type__",IO="__max__",Eh={mapValue:{}},mA="__vector__",Xh="value";function os(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?$g(i)?4:CO(i)?9007199254740991:RO(i)?10:11:be(28295,{value:i})}function Ai(i,e){if(i===e)return!0;const t=os(i);if(t!==os(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return wu(i).isEqual(wu(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=ss(a.timestampValue),m=ss(l.timestampValue);return c.seconds===m.seconds&&c.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,l){return as(a.bytesValue).isEqual(as(l.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,l){return vt(a.geoPointValue.latitude)===vt(l.geoPointValue.latitude)&&vt(a.geoPointValue.longitude)===vt(l.geoPointValue.longitude)}(i,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return vt(a.integerValue)===vt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=vt(a.doubleValue),m=vt(l.doubleValue);return c===m?Yh(c)===Yh(m):isNaN(c)&&isNaN(m)}return!1}(i,e);case 9:return Ro(i.arrayValue.values||[],e.arrayValue.values||[],Ai);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},m=l.mapValue.fields||{};if(WE(c)!==WE(m))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(m[p]===void 0||!Ai(c[p],m[p])))return!1;return!0}(i,e);default:return be(52216,{left:i})}}function Ru(i,e){return(i.values||[]).find(t=>Ai(t,e))!==void 0}function Co(i,e){if(i===e)return 0;const t=os(i),r=os(e);if(t!==r)return Oe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Oe(i.booleanValue,e.booleanValue);case 2:return function(l,c){const m=vt(l.integerValue||l.doubleValue),p=vt(c.integerValue||c.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1}(i,e);case 3:return ZE(i.timestampValue,e.timestampValue);case 4:return ZE(wu(i),wu(e));case 5:return Lp(i.stringValue,e.stringValue);case 6:return function(l,c){const m=as(l),p=as(c);return m.compareTo(p)}(i.bytesValue,e.bytesValue);case 7:return function(l,c){const m=l.split("/"),p=c.split("/");for(let g=0;g<m.length&&g<p.length;g++){const E=Oe(m[g],p[g]);if(E!==0)return E}return Oe(m.length,p.length)}(i.referenceValue,e.referenceValue);case 8:return function(l,c){const m=Oe(vt(l.latitude),vt(c.latitude));return m!==0?m:Oe(vt(l.longitude),vt(c.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return eT(i.arrayValue,e.arrayValue);case 10:return function(l,c){var m,p,g,E;const b=l.fields||{},S=c.fields||{},j=(m=b[Xh])===null||m===void 0?void 0:m.arrayValue,G=(p=S[Xh])===null||p===void 0?void 0:p.arrayValue,W=Oe(((g=j==null?void 0:j.values)===null||g===void 0?void 0:g.length)||0,((E=G==null?void 0:G.values)===null||E===void 0?void 0:E.length)||0);return W!==0?W:eT(j,G)}(i.mapValue,e.mapValue);case 11:return function(l,c){if(l===Eh.mapValue&&c===Eh.mapValue)return 0;if(l===Eh.mapValue)return 1;if(c===Eh.mapValue)return-1;const m=l.fields||{},p=Object.keys(m),g=c.fields||{},E=Object.keys(g);p.sort(),E.sort();for(let b=0;b<p.length&&b<E.length;++b){const S=Lp(p[b],E[b]);if(S!==0)return S;const j=Co(m[p[b]],g[E[b]]);if(j!==0)return j}return Oe(p.length,E.length)}(i.mapValue,e.mapValue);default:throw be(23264,{Pe:t})}}function ZE(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Oe(i,e);const t=ss(i),r=ss(e),a=Oe(t.seconds,r.seconds);return a!==0?a:Oe(t.nanos,r.nanos)}function eT(i,e){const t=i.values||[],r=e.values||[];for(let a=0;a<t.length&&a<r.length;++a){const l=Co(t[a],r[a]);if(l)return l}return Oe(t.length,r.length)}function xo(i){return Up(i)}function Up(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const r=ss(t);return`time(${r.seconds},${r.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return as(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return ve.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let r="[",a=!0;for(const l of t.values||[])a?a=!1:r+=",",r+=Up(l);return r+"]"}(i.arrayValue):"mapValue"in i?function(t){const r=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of r)l?l=!1:a+=",",a+=`${c}:${Up(t.fields[c])}`;return a+"}"}(i.mapValue):be(61005,{value:i})}function Dh(i){switch(os(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Rf(i);return e?16+Dh(e):16;case 5:return 2*i.stringValue.length;case 6:return as(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((a,l)=>a+Dh(l),0)}(i.arrayValue);case 10:case 11:return function(r){let a=0;return ha(r.fields,(l,c)=>{a+=l.length+Dh(c)}),a}(i.mapValue);default:throw be(13486,{value:i})}}function jp(i){return!!i&&"integerValue"in i}function Kg(i){return!!i&&"arrayValue"in i}function tT(i){return!!i&&"nullValue"in i}function nT(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Ph(i){return!!i&&"mapValue"in i}function RO(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[dA])===null||t===void 0?void 0:t.stringValue)===mA}function hu(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return ha(i.mapValue.fields,(t,r)=>e.mapValue.fields[t]=hu(r)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=hu(i.arrayValue.values[t]);return e}return Object.assign({},i)}function CO(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===IO}/**
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
 */class Un{constructor(e){this.value=e}static empty(){return new Un({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ph(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=hu(t)}setAll(e){let t=Yt.emptyPath(),r={},a=[];e.forEach((c,m)=>{if(!t.isImmediateParentOf(m)){const p=this.getFieldsMap(t);this.applyChanges(p,r,a),r={},a=[],t=m.popLast()}c?r[m.lastSegment()]=hu(c):a.push(m.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,r,a)}delete(e){const t=this.field(e.popLast());Ph(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ai(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let a=t.mapValue.fields[e.get(r)];Ph(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,r){ha(t,(a,l)=>e[a]=l);for(const a of r)delete e[a]}clone(){return new Un(hu(this.value))}}function pA(i){const e=[];return ha(i.fields,(t,r)=>{const a=new Yt([t]);if(Ph(r)){const l=pA(r.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new $n(e)}/**
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
 */class nn{constructor(e,t,r,a,l,c,m){this.key=e,this.documentType=t,this.version=r,this.readTime=a,this.createTime=l,this.data=c,this.documentState=m}static newInvalidDocument(e){return new nn(e,0,we.min(),we.min(),we.min(),Un.empty(),0)}static newFoundDocument(e,t,r,a){return new nn(e,1,t,we.min(),r,a,0)}static newNoDocument(e,t){return new nn(e,2,t,we.min(),we.min(),Un.empty(),0)}static newUnknownDocument(e,t){return new nn(e,3,t,we.min(),we.min(),Un.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Un.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wh{constructor(e,t){this.position=e,this.inclusive=t}}function iT(i,e,t){let r=0;for(let a=0;a<i.position.length;a++){const l=e[a],c=i.position[a];if(l.field.isKeyField()?r=ve.comparator(ve.fromName(c.referenceValue),t.key):r=Co(c,t.data.field(l.field)),l.dir==="desc"&&(r*=-1),r!==0)break}return r}function rT(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Ai(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Jh{constructor(e,t="asc"){this.field=e,this.dir=t}}function xO(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class gA{}class Ot extends gA{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new OO(e,t,r):t==="array-contains"?new kO(e,r):t==="in"?new MO(e,r):t==="not-in"?new VO(e,r):t==="array-contains-any"?new LO(e,r):new Ot(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new DO(e,r):new PO(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Co(t,this.value)):t!==null&&os(this.value)===os(t)&&this.matchesComparison(Co(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return be(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Si extends gA{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Si(e,t)}matches(e){return yA(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function yA(i){return i.op==="and"}function vA(i){return NO(i)&&yA(i)}function NO(i){for(const e of i.filters)if(e instanceof Si)return!1;return!0}function zp(i){if(i instanceof Ot)return i.field.canonicalString()+i.op.toString()+xo(i.value);if(vA(i))return i.filters.map(e=>zp(e)).join(",");{const e=i.filters.map(t=>zp(t)).join(",");return`${i.op}(${e})`}}function _A(i,e){return i instanceof Ot?function(r,a){return a instanceof Ot&&r.op===a.op&&r.field.isEqual(a.field)&&Ai(r.value,a.value)}(i,e):i instanceof Si?function(r,a){return a instanceof Si&&r.op===a.op&&r.filters.length===a.filters.length?r.filters.reduce((l,c,m)=>l&&_A(c,a.filters[m]),!0):!1}(i,e):void be(19439)}function EA(i){return i instanceof Ot?function(t){return`${t.field.canonicalString()} ${t.op} ${xo(t.value)}`}(i):i instanceof Si?function(t){return t.op.toString()+" {"+t.getFilters().map(EA).join(" ,")+"}"}(i):"Filter"}class OO extends Ot{constructor(e,t,r){super(e,t,r),this.key=ve.fromName(r.referenceValue)}matches(e){const t=ve.comparator(e.key,this.key);return this.matchesComparison(t)}}class DO extends Ot{constructor(e,t){super(e,"in",t),this.keys=TA("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class PO extends Ot{constructor(e,t){super(e,"not-in",t),this.keys=TA("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function TA(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ve.fromName(r.referenceValue))}class kO extends Ot{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Kg(t)&&Ru(t.arrayValue,this.value)}}class MO extends Ot{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ru(this.value.arrayValue,t)}}class VO extends Ot{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ru(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ru(this.value.arrayValue,t)}}class LO extends Ot{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Kg(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ru(this.value.arrayValue,r))}}/**
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
 */class UO{constructor(e,t=null,r=[],a=[],l=null,c=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=a,this.limit=l,this.startAt=c,this.endAt=m,this.Ie=null}}function sT(i,e=null,t=[],r=[],a=null,l=null,c=null){return new UO(i,e,t,r,a,l,c)}function Yg(i){const e=Re(i);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>zp(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(l){return l.field.canonicalString()+l.dir}(r)).join(","),If(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>xo(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>xo(r)).join(",")),e.Ie=t}return e.Ie}function Qg(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!xO(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!_A(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!rT(i.startAt,e.startAt)&&rT(i.endAt,e.endAt)}function Bp(i){return ve.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Cf{constructor(e,t=null,r=[],a=[],l=null,c="F",m=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=a,this.limit=l,this.limitType=c,this.startAt=m,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function jO(i,e,t,r,a,l,c,m){return new Cf(i,e,t,r,a,l,c,m)}function Xg(i){return new Cf(i)}function aT(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function zO(i){return i.collectionGroup!==null}function fu(i){const e=Re(i);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let m=new Pt(Yt.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(m=m.add(g.field))})}),m})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new Jh(l,r))}),t.has(Yt.keyField().canonicalString())||e.Ee.push(new Jh(Yt.keyField(),r))}return e.Ee}function _i(i){const e=Re(i);return e.de||(e.de=BO(e,fu(i))),e.de}function BO(i,e){if(i.limitType==="F")return sT(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new Jh(a.field,l)});const t=i.endAt?new Wh(i.endAt.position,i.endAt.inclusive):null,r=i.startAt?new Wh(i.startAt.position,i.startAt.inclusive):null;return sT(i.path,i.collectionGroup,e,i.filters,i.limit,t,r)}}function Fp(i,e,t){return new Cf(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function xf(i,e){return Qg(_i(i),_i(e))&&i.limitType===e.limitType}function bA(i){return`${Yg(_i(i))}|lt:${i.limitType}`}function mo(i){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(a=>EA(a)).join(", ")}]`),If(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(a=>xo(a)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(a=>xo(a)).join(",")),`Target(${r})`}(_i(i))}; limitType=${i.limitType})`}function Nf(i,e){return e.isFoundDocument()&&function(r,a){const l=a.key.path;return r.collectionGroup!==null?a.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(l):ve.isDocumentKey(r.path)?r.path.isEqual(l):r.path.isImmediateParentOf(l)}(i,e)&&function(r,a){for(const l of fu(r))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(i,e)&&function(r,a){for(const l of r.filters)if(!l.matches(a))return!1;return!0}(i,e)&&function(r,a){return!(r.startAt&&!function(c,m,p){const g=iT(c,m,p);return c.inclusive?g<=0:g<0}(r.startAt,fu(r),a)||r.endAt&&!function(c,m,p){const g=iT(c,m,p);return c.inclusive?g>=0:g>0}(r.endAt,fu(r),a))}(i,e)}function FO(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function AA(i){return(e,t)=>{let r=!1;for(const a of fu(i)){const l=HO(a,e,t);if(l!==0)return l;r=r||a.field.isKeyField()}return 0}}function HO(i,e,t){const r=i.field.isKeyField()?ve.comparator(e.key,t.key):function(l,c,m){const p=c.data.field(l),g=m.data.field(l);return p!==null&&g!==null?Co(p,g):be(42886)}(i.field,e,t);switch(i.dir){case"asc":return r;case"desc":return-1*r;default:return be(19790,{direction:i.dir})}}/**
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
 */class fa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[a,l]of r)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),a=this.inner[r];if(a===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let a=0;a<r.length;a++)if(this.equalsFn(r[a][0],e))return r.length===1?delete this.inner[t]:r.splice(a,1),this.innerSize--,!0;return!1}forEach(e){ha(this.inner,(t,r)=>{for(const[a,l]of r)e(a,l)})}isEmpty(){return oA(this.inner)}size(){return this.innerSize}}/**
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
 */const qO=new ct(ve.comparator);function ar(){return qO}const SA=new ct(ve.comparator);function au(...i){let e=SA;for(const t of i)e=e.insert(t.key,t);return e}function wA(i){let e=SA;return i.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ta(){return du()}function IA(){return du()}function du(){return new fa(i=>i.toString(),(i,e)=>i.isEqual(e))}const GO=new ct(ve.comparator),$O=new Pt(ve.comparator);function Ue(...i){let e=$O;for(const t of i)e=e.add(t);return e}const KO=new Pt(Oe);function YO(){return KO}/**
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
 */function Wg(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yh(e)?"-0":e}}function RA(i){return{integerValue:""+i}}function QO(i,e){return TO(e)?RA(e):Wg(i,e)}/**
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
 */class Of{constructor(){this._=void 0}}function XO(i,e,t){return i instanceof Zh?function(a,l){const c={fields:{[cA]:{stringValue:uA},[fA]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&$g(l)&&(l=Rf(l)),l&&(c.fields[hA]=l),{mapValue:c}}(t,e):i instanceof Cu?xA(i,e):i instanceof xu?NA(i,e):function(a,l){const c=CA(a,l),m=oT(c)+oT(a.Re);return jp(c)&&jp(a.Re)?RA(m):Wg(a.serializer,m)}(i,e)}function WO(i,e,t){return i instanceof Cu?xA(i,e):i instanceof xu?NA(i,e):t}function CA(i,e){return i instanceof ef?function(r){return jp(r)||function(l){return!!l&&"doubleValue"in l}(r)}(e)?e:{integerValue:0}:null}class Zh extends Of{}class Cu extends Of{constructor(e){super(),this.elements=e}}function xA(i,e){const t=OA(e);for(const r of i.elements)t.some(a=>Ai(a,r))||t.push(r);return{arrayValue:{values:t}}}class xu extends Of{constructor(e){super(),this.elements=e}}function NA(i,e){let t=OA(e);for(const r of i.elements)t=t.filter(a=>!Ai(a,r));return{arrayValue:{values:t}}}class ef extends Of{constructor(e,t){super(),this.serializer=e,this.Re=t}}function oT(i){return vt(i.integerValue||i.doubleValue)}function OA(i){return Kg(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function JO(i,e){return i.field.isEqual(e.field)&&function(r,a){return r instanceof Cu&&a instanceof Cu||r instanceof xu&&a instanceof xu?Ro(r.elements,a.elements,Ai):r instanceof ef&&a instanceof ef?Ai(r.Re,a.Re):r instanceof Zh&&a instanceof Zh}(i.transform,e.transform)}class ZO{constructor(e,t){this.version=e,this.transformResults=t}}class Ei{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ei}static exists(e){return new Ei(void 0,e)}static updateTime(e){return new Ei(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kh(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Df{}function DA(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new kA(i.key,Ei.none()):new Uu(i.key,i.data,Ei.none());{const t=i.data,r=Un.empty();let a=new Pt(Yt.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?r.delete(l):r.set(l,c),a=a.add(l)}return new da(i.key,r,new $n(a.toArray()),Ei.none())}}function eD(i,e,t){i instanceof Uu?function(a,l,c){const m=a.value.clone(),p=uT(a.fieldTransforms,l,c.transformResults);m.setAll(p),l.convertToFoundDocument(c.version,m).setHasCommittedMutations()}(i,e,t):i instanceof da?function(a,l,c){if(!kh(a.precondition,l))return void l.convertToUnknownDocument(c.version);const m=uT(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(PA(a)),p.setAll(m),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(i,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function mu(i,e,t,r){return i instanceof Uu?function(l,c,m,p){if(!kh(l.precondition,c))return m;const g=l.value.clone(),E=cT(l.fieldTransforms,p,c);return g.setAll(E),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(i,e,t,r):i instanceof da?function(l,c,m,p){if(!kh(l.precondition,c))return m;const g=cT(l.fieldTransforms,p,c),E=c.data;return E.setAll(PA(l)),E.setAll(g),c.convertToFoundDocument(c.version,E).setHasLocalMutations(),m===null?null:m.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(b=>b.field))}(i,e,t,r):function(l,c,m){return kh(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):m}(i,e,t)}function tD(i,e){let t=null;for(const r of i.fieldTransforms){const a=e.data.field(r.field),l=CA(r.transform,a||null);l!=null&&(t===null&&(t=Un.empty()),t.set(r.field,l))}return t||null}function lT(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(r,a){return r===void 0&&a===void 0||!(!r||!a)&&Ro(r,a,(l,c)=>JO(l,c))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Uu extends Df{constructor(e,t,r,a=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class da extends Df{constructor(e,t,r,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function PA(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=i.data.field(t);e.set(t,r)}}),e}function uT(i,e,t){const r=new Map;Ke(i.length===t.length,32656,{Ve:t.length,me:i.length});for(let a=0;a<t.length;a++){const l=i[a],c=l.transform,m=e.data.field(l.field);r.set(l.field,WO(c,m,t[a]))}return r}function cT(i,e,t){const r=new Map;for(const a of i){const l=a.transform,c=t.data.field(a.field);r.set(a.field,XO(l,c,e))}return r}class kA extends Df{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nD extends Df{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class iD{constructor(e,t,r,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=a}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&eD(l,e,r[a])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=mu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=mu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=IA();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let m=this.applyToLocalView(c,l.mutatedFields);m=t.has(a.key)?null:m;const p=DA(c,m);p!==null&&r.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(we.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ue())}isEqual(e){return this.batchId===e.batchId&&Ro(this.mutations,e.mutations,(t,r)=>lT(t,r))&&Ro(this.baseMutations,e.baseMutations,(t,r)=>lT(t,r))}}class Jg{constructor(e,t,r,a){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=a}static from(e,t,r){Ke(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let a=function(){return GO}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,r[c].version);return new Jg(e,t,r,a)}}/**
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
 */class rD{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class sD{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var St,Fe;function aD(i){switch(i){case Z.OK:return be(64938);case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0;default:return be(15467,{code:i})}}function MA(i){if(i===void 0)return sr("GRPC error has no .code"),Z.UNKNOWN;switch(i){case St.OK:return Z.OK;case St.CANCELLED:return Z.CANCELLED;case St.UNKNOWN:return Z.UNKNOWN;case St.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case St.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case St.INTERNAL:return Z.INTERNAL;case St.UNAVAILABLE:return Z.UNAVAILABLE;case St.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case St.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case St.NOT_FOUND:return Z.NOT_FOUND;case St.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case St.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case St.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case St.ABORTED:return Z.ABORTED;case St.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case St.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case St.DATA_LOSS:return Z.DATA_LOSS;default:return be(39323,{code:i})}}(Fe=St||(St={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const oD=new Zr([4294967295,4294967295],0);function hT(i){const e=rA().encode(i),t=new X1;return t.update(e),new Uint8Array(t.digest())}function fT(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Zr([t,r],0),new Zr([a,l],0)]}class Zg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ou(`Invalid padding: ${t}`);if(r<0)throw new ou(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ou(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ou(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=Zr.fromNumber(this.pe)}we(e,t,r){let a=e.add(t.multiply(Zr.fromNumber(r)));return a.compare(oD)===1&&(a=new Zr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=hT(e),[r,a]=fT(t);for(let l=0;l<this.hashCount;l++){const c=this.we(r,a,l);if(!this.Se(c))return!1}return!0}static create(e,t,r){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Zg(l,a,t);return r.forEach(m=>c.insert(m)),c}insert(e){if(this.pe===0)return;const t=hT(e),[r,a]=fT(t);for(let l=0;l<this.hashCount;l++){const c=this.we(r,a,l);this.be(c)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ou extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pf{constructor(e,t,r,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const a=new Map;return a.set(e,ju.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Pf(we.min(),a,new ct(Oe),ar(),Ue())}}class ju{constructor(e,t,r,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ju(r,t,Ue(),Ue(),Ue())}}/**
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
 */class Mh{constructor(e,t,r,a){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=a}}class VA{constructor(e,t){this.targetId=e,this.Ce=t}}class LA{constructor(e,t,r=Xt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=a}}class dT{constructor(){this.Fe=0,this.Me=mT(),this.xe=Xt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Ue(),t=Ue(),r=Ue();return this.Me.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:r=r.add(a);break;default:be(38017,{changeType:l})}}),new ju(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=mT()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ke(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class lD{constructor(e){this.ze=e,this.je=new Map,this.He=ar(),this.Je=Th(),this.Ye=Th(),this.Ze=new ct(Oe)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:be(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,a)=>{this.it(a)&&t(a)})}ot(e){const t=e.targetId,r=e.Ce.count,a=this._t(t);if(a){const l=a.target;if(Bp(l))if(r===0){const c=new ve(l.path);this.tt(t,c,nn.newNoDocument(c,we.min()))}else Ke(r===1,20013,{expectedCount:r});else{const c=this.ut(t);if(c!==r){const m=this.ct(e),p=m?this.lt(m,e,c):1;if(p!==0){this.st(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,g)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:a=0},hashCount:l=0}=t;let c,m;try{c=as(r).toUint8Array()}catch(p){if(p instanceof lA)return Io("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new Zg(c,a,l)}catch(p){return Io(p instanceof ou?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.pe===0?null:m}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let a=0;return r.forEach(l=>{const c=this.ze.Pt(),m=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(m)||(this.tt(t,l,null),a++)}),a}It(e){const t=new Map;this.je.forEach((l,c)=>{const m=this._t(c);if(m){if(l.current&&Bp(m.target)){const p=new ve(m.target.path);this.Et(p).has(c)||this.dt(c,p)||this.tt(c,p,nn.newNoDocument(p,e))}l.Le&&(t.set(c,l.qe()),l.Qe())}});let r=Ue();this.Ye.forEach((l,c)=>{let m=!0;c.forEachWhile(p=>{const g=this._t(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(r=r.add(l))}),this.He.forEach((l,c)=>c.setReadTime(e));const a=new Pf(e,t,this.Ze,this.He,r);return this.He=ar(),this.Je=Th(),this.Ye=Th(),this.Ze=new ct(Oe),a}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const a=this.rt(e);this.dt(e,t)?a.$e(t,1):a.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new dT,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new Pt(Oe),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Pt(Oe),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new dT),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Th(){return new ct(ve.comparator)}function mT(){return new ct(ve.comparator)}const uD={asc:"ASCENDING",desc:"DESCENDING"},cD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hD={and:"AND",or:"OR"};class fD{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Hp(i,e){return i.useProto3Json||If(e)?e:{value:e}}function tf(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function UA(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function dD(i,e){return tf(i,e.toTimestamp())}function Ti(i){return Ke(!!i,49232),we.fromTimestamp(function(t){const r=ss(t);return new Dt(r.seconds,r.nanos)}(i))}function ey(i,e){return qp(i,e).canonicalString()}function qp(i,e){const t=function(a){return new lt(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?t:t.child(e)}function jA(i){const e=lt.fromString(i);return Ke(qA(e),10190,{key:e.toString()}),e}function Gp(i,e){return ey(i.databaseId,e.path)}function op(i,e){const t=jA(e);if(t.get(1)!==i.databaseId.projectId)throw new ye(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ye(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new ve(BA(t))}function zA(i,e){return ey(i.databaseId,e)}function mD(i){const e=jA(i);return e.length===4?lt.emptyPath():BA(e)}function $p(i){return new lt(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function BA(i){return Ke(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function pT(i,e,t){return{name:Gp(i,e),fields:t.value.mapValue.fields}}function pD(i,e){let t;if("targetChange"in e){e.targetChange;const r=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:be(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,E){return g.useProto3Json?(Ke(E===void 0||typeof E=="string",58123),Xt.fromBase64String(E||"")):(Ke(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Xt.fromUint8Array(E||new Uint8Array))}(i,e.targetChange.resumeToken),c=e.targetChange.cause,m=c&&function(g){const E=g.code===void 0?Z.UNKNOWN:MA(g.code);return new ye(E,g.message||"")}(c);t=new LA(r,a,l,m||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const a=op(i,r.document.name),l=Ti(r.document.updateTime),c=r.document.createTime?Ti(r.document.createTime):we.min(),m=new Un({mapValue:{fields:r.document.fields}}),p=nn.newFoundDocument(a,l,c,m),g=r.targetIds||[],E=r.removedTargetIds||[];t=new Mh(g,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const a=op(i,r.document),l=r.readTime?Ti(r.readTime):we.min(),c=nn.newNoDocument(a,l),m=r.removedTargetIds||[];t=new Mh([],m,c.key,c)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const a=op(i,r.document),l=r.removedTargetIds||[];t=new Mh([],l,a,null)}else{if(!("filter"in e))return be(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:a=0,unchangedNames:l}=r,c=new sD(a,l),m=r.targetId;t=new VA(m,c)}}return t}function gD(i,e){let t;if(e instanceof Uu)t={update:pT(i,e.key,e.value)};else if(e instanceof kA)t={delete:Gp(i,e.key)};else if(e instanceof da)t={update:pT(i,e.key,e.data),updateMask:wD(e.fieldMask)};else{if(!(e instanceof nD))return be(16599,{ft:e.type});t={verify:Gp(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(l,c){const m=c.transform;if(m instanceof Zh)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Cu)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof xu)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof ef)return{fieldPath:c.field.canonicalString(),increment:m.Re};throw be(20930,{transform:c.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:dD(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:be(27497)}(i,e.precondition)),t}function yD(i,e){return i&&i.length>0?(Ke(e!==void 0,14353),i.map(t=>function(a,l){let c=a.updateTime?Ti(a.updateTime):Ti(l);return c.isEqual(we.min())&&(c=Ti(l)),new ZO(c,a.transformResults||[])}(t,e))):[]}function vD(i,e){return{documents:[zA(i,e.path)]}}function _D(i,e){const t={structuredQuery:{}},r=e.path;let a;e.collectionGroup!==null?(a=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=zA(i,a);const l=function(g){if(g.length!==0)return HA(Si.create(g,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(E=>function(S){return{field:po(S.field),direction:bD(S.dir)}}(E))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const m=Hp(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{gt:t,parent:a}}function ED(i){let e=mD(i.parent);const t=i.structuredQuery,r=t.from?t.from.length:0;let a=null;if(r>0){Ke(r===1,65062);const E=t.from[0];E.allDescendants?a=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(b){const S=FA(b);return S instanceof Si&&vA(S)?S.getFilters():[S]}(t.where));let c=[];t.orderBy&&(c=function(b){return b.map(S=>function(G){return new Jh(go(G.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(G.direction))}(S))}(t.orderBy));let m=null;t.limit&&(m=function(b){let S;return S=typeof b=="object"?b.value:b,If(S)?null:S}(t.limit));let p=null;t.startAt&&(p=function(b){const S=!!b.before,j=b.values||[];return new Wh(j,S)}(t.startAt));let g=null;return t.endAt&&(g=function(b){const S=!b.before,j=b.values||[];return new Wh(j,S)}(t.endAt)),jO(e,a,c,l,m,"F",p,g)}function TD(i,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return be(28987,{purpose:a})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function FA(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=go(t.unaryFilter.field);return Ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const a=go(t.unaryFilter.field);return Ot.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=go(t.unaryFilter.field);return Ot.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=go(t.unaryFilter.field);return Ot.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return be(61313);default:return be(60726)}}(i):i.fieldFilter!==void 0?function(t){return Ot.create(go(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return be(58110);default:return be(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Si.create(t.compositeFilter.filters.map(r=>FA(r)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return be(1026)}}(t.compositeFilter.op))}(i):be(30097,{filter:i})}function bD(i){return uD[i]}function AD(i){return cD[i]}function SD(i){return hD[i]}function po(i){return{fieldPath:i.canonicalString()}}function go(i){return Yt.fromServerFormat(i.fieldPath)}function HA(i){return i instanceof Ot?function(t){if(t.op==="=="){if(nT(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NAN"}};if(tT(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(nT(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NOT_NAN"}};if(tT(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:po(t.field),op:AD(t.op),value:t.value}}}(i):i instanceof Si?function(t){const r=t.getFilters().map(a=>HA(a));return r.length===1?r[0]:{compositeFilter:{op:SD(t.op),filters:r}}}(i):be(54877,{filter:i})}function wD(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function qA(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class Qr{constructor(e,t,r,a,l=we.min(),c=we.min(),m=Xt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(e){return new Qr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class ID{constructor(e){this.wt=e}}function RD(i){const e=ED({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Fp(e,e.limit,"L"):e}/**
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
 */class CD{constructor(){this.Cn=new xD}addToCollectionParentIndex(e,t){return this.Cn.add(t),X.resolve()}getCollectionParents(e,t){return X.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return X.resolve()}deleteFieldIndex(e,t){return X.resolve()}deleteAllFieldIndexes(e){return X.resolve()}createTargetIndexes(e,t){return X.resolve()}getDocumentsMatchingTarget(e,t){return X.resolve(null)}getIndexType(e,t){return X.resolve(0)}getFieldIndexes(e,t){return X.resolve([])}getNextCollectionGroupToUpdate(e){return X.resolve(null)}getMinOffset(e,t){return X.resolve(rs.min())}getMinOffsetFromCollectionGroup(e,t){return X.resolve(rs.min())}updateCollectionGroup(e,t,r){return X.resolve()}updateIndexEntries(e,t){return X.resolve()}}class xD{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t]||new Pt(lt.comparator),l=!a.has(r);return this.index[t]=a.add(r),l}has(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t];return a&&a.has(r)}getEntries(e){return(this.index[e]||new Pt(lt.comparator)).toArray()}}/**
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
 */const gT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},GA=41943040;class dn{static withCacheSize(e){return new dn(e,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */dn.DEFAULT_COLLECTION_PERCENTILE=10,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dn.DEFAULT=new dn(GA,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dn.DISABLED=new dn(-1,0,0);/**
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
 */class No{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new No(0)}static lr(){return new No(-1)}}/**
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
 */const yT="LruGarbageCollector",ND=1048576;function vT([i,e],[t,r]){const a=Oe(i,t);return a===0?Oe(e,r):a}class OD{constructor(e){this.Er=e,this.buffer=new Pt(vT),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();vT(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class DD{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){ue(yT,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){qo(t)?ue(yT,"Ignoring IndexedDB error during garbage collection: ",t):await Ho(t)}await this.mr(3e5)})}}class PD{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return X.resolve(wf.le);const r=new OD(t);return this.gr.forEachTarget(e,a=>r.Rr(a.sequenceNumber)).next(()=>this.gr.yr(e,a=>r.Rr(a))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(gT)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gT):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,a,l,c,m,p,g;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),a=this.params.maximumSequenceNumbersToCollect):a=b,c=Date.now(),this.nthSequenceNumber(e,a))).next(b=>(r=b,m=Date.now(),this.removeTargets(e,r,t))).next(b=>(l=b,p=Date.now(),this.removeOrphanedDocuments(e,r))).next(b=>(g=Date.now(),fo()<=ke.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-E}ms
	Determined least recently used ${a} in `+(m-c)+`ms
	Removed ${l} targets in `+(p-m)+`ms
	Removed ${b} documents in `+(g-p)+`ms
Total Duration: ${g-E}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:b})))}}function kD(i,e){return new PD(i,e)}/**
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
 */class MD{constructor(){this.changes=new fa(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,nn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?X.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class VD{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class LD{constructor(e,t,r,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=a}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(r=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(r!==null&&mu(r.mutation,a,$n.empty(),Dt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Ue()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Ue()){const a=ta();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,r).next(l=>{let c=au();return l.forEach((m,p)=>{c=c.insert(m,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const r=ta();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Ue()))}populateOverlays(e,t,r){const a=[];return r.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,m)=>{t.set(c,m)})})}computeViews(e,t,r,a){let l=ar();const c=du(),m=function(){return du()}();return t.forEach((p,g)=>{const E=r.get(g.key);a.has(g.key)&&(E===void 0||E.mutation instanceof da)?l=l.insert(g.key,g):E!==void 0?(c.set(g.key,E.mutation.getFieldMask()),mu(E.mutation,g,E.mutation.getFieldMask(),Dt.now())):c.set(g.key,$n.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((g,E)=>c.set(g,E)),t.forEach((g,E)=>{var b;return m.set(g,new VD(E,(b=c.get(g))!==null&&b!==void 0?b:null))}),m))}recalculateAndSaveOverlays(e,t){const r=du();let a=new ct((c,m)=>c-m),l=Ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const m of c)m.keys().forEach(p=>{const g=t.get(p);if(g===null)return;let E=r.get(p)||$n.empty();E=m.applyToLocalView(g,E),r.set(p,E);const b=(a.get(m.batchId)||Ue()).add(p);a=a.insert(m.batchId,b)})}).next(()=>{const c=[],m=a.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),g=p.key,E=p.value,b=IA();E.forEach(S=>{if(!l.has(S)){const j=DA(t.get(S),r.get(S));j!==null&&b.set(S,j),l=l.add(S)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,b))}return X.waitFor(c)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,a){return function(c){return ve.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):zO(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,a):this.getDocumentsMatchingCollectionQuery(e,t,r,a)}getNextDocuments(e,t,r,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,a-l.size):X.resolve(ta());let m=Su,p=l;return c.next(g=>X.forEach(g,(E,b)=>(m<b.largestBatchId&&(m=b.largestBatchId),l.get(E)?X.resolve():this.remoteDocumentCache.getEntry(e,E).next(S=>{p=p.insert(E,S)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,p,g,Ue())).next(E=>({batchId:m,changes:wA(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ve(t)).next(r=>{let a=au();return r.isFoundDocument()&&(a=a.insert(r.key,r)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,r,a){const l=t.collectionGroup;let c=au();return this.indexManager.getCollectionParents(e,l).next(m=>X.forEach(m,p=>{const g=function(b,S){return new Cf(S,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,r,a).next(E=>{E.forEach((b,S)=>{c=c.insert(b,S)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,r,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,l,a))).next(c=>{l.forEach((p,g)=>{const E=g.getKey();c.get(E)===null&&(c=c.insert(E,nn.newInvalidDocument(E)))});let m=au();return c.forEach((p,g)=>{const E=l.get(p);E!==void 0&&mu(E.mutation,g,$n.empty(),Dt.now()),Nf(t,g)&&(m=m.insert(p,g))}),m})}}/**
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
 */class UD{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return X.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Ti(a.createTime)}}(t)),X.resolve()}getNamedQuery(e,t){return X.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(a){return{name:a.name,query:RD(a.bundledQuery),readTime:Ti(a.readTime)}}(t)),X.resolve()}}/**
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
 */class jD{constructor(){this.overlays=new ct(ve.comparator),this.Qr=new Map}getOverlay(e,t){return X.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ta();return X.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&r.set(a,l)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((a,l)=>{this.bt(e,t,l)}),X.resolve()}removeOverlaysForBatchId(e,t,r){const a=this.Qr.get(r);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Qr.delete(r)),X.resolve()}getOverlaysForCollection(e,t,r){const a=ta(),l=t.length+1,c=new ve(t.child("")),m=this.overlays.getIteratorFrom(c);for(;m.hasNext();){const p=m.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>r&&a.set(p.getKey(),p)}return X.resolve(a)}getOverlaysForCollectionGroup(e,t,r,a){let l=new ct((g,E)=>g-E);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>r){let E=l.get(g.largestBatchId);E===null&&(E=ta(),l=l.insert(g.largestBatchId,E)),E.set(g.getKey(),g)}}const m=ta(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,E)=>m.set(g,E)),!(m.size()>=a)););return X.resolve(m)}bt(e,t,r){const a=this.overlays.get(r.key);if(a!==null){const c=this.Qr.get(a.largestBatchId).delete(r.key);this.Qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new rD(t,r));let l=this.Qr.get(t);l===void 0&&(l=Ue(),this.Qr.set(t,l)),this.Qr.set(t,l.add(r.key))}}/**
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
 */class zD{constructor(){this.sessionToken=Xt.EMPTY_BYTE_STRING}getSessionToken(e){return X.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,X.resolve()}}/**
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
 */class ty{constructor(){this.$r=new Pt(zt.Ur),this.Kr=new Pt(zt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new zt(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new zt(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new ve(new lt([])),r=new zt(t,e),a=new zt(t,e+1),l=[];return this.Kr.forEachInRange([r,a],c=>{this.zr(c),l.push(c.key)}),l}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new ve(new lt([])),r=new zt(t,e),a=new zt(t,e+1);let l=Ue();return this.Kr.forEachInRange([r,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new zt(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class zt{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return ve.comparator(e.key,t.key)||Oe(e.Zr,t.Zr)}static Wr(e,t){return Oe(e.Zr,t.Zr)||ve.comparator(e.key,t.key)}}/**
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
 */class BD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new Pt(zt.Ur)}checkEmpty(e){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,a){const l=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new iD(l,t,r,a);this.mutationQueue.push(c);for(const m of a)this.Xr=this.Xr.add(new zt(m.key,l)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return X.resolve(c)}lookupMutationBatch(e,t){return X.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=this.ti(r),l=a<0?0:a;return X.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?Gg:this.nr-1)}getAllMutationBatches(e){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new zt(t,0),a=new zt(t,Number.POSITIVE_INFINITY),l=[];return this.Xr.forEachInRange([r,a],c=>{const m=this.ei(c.Zr);l.push(m)}),X.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Pt(Oe);return t.forEach(a=>{const l=new zt(a,0),c=new zt(a,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([l,c],m=>{r=r.add(m.Zr)})}),X.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1;let l=r;ve.isDocumentKey(l)||(l=l.child(""));const c=new zt(new ve(l),0);let m=new Pt(Oe);return this.Xr.forEachWhile(p=>{const g=p.key.path;return!!r.isPrefixOf(g)&&(g.length===a&&(m=m.add(p.Zr)),!0)},c),X.resolve(this.ni(m))}ni(e){const t=[];return e.forEach(r=>{const a=this.ei(r);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){Ke(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return X.forEach(t.mutations,a=>{const l=new zt(a.key,t.batchId);return r=r.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new zt(t,0),a=this.Xr.firstAfterOrEqual(r);return X.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,X.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class FD{constructor(e){this.ii=e,this.docs=function(){return new ct(ve.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,a=this.docs.get(r),l=a?a.size:0,c=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return X.resolve(r?r.document.mutableCopy():nn.newInvalidDocument(t))}getEntries(e,t){let r=ar();return t.forEach(a=>{const l=this.docs.get(a);r=r.insert(a,l?l.document.mutableCopy():nn.newInvalidDocument(a))}),X.resolve(r)}getDocumentsMatchingQuery(e,t,r,a){let l=ar();const c=t.path,m=new ve(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:g,value:{document:E}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||yO(gO(E),r)<=0||(a.has(E.key)||Nf(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return X.resolve(l)}getAllFromCollectionGroup(e,t,r,a){be(9500)}si(e,t){return X.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new HD(this)}getSize(e){return X.resolve(this.size)}}class HD extends MD{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,a)=>{a.isValidDocument()?t.push(this.Br.addEntry(e,a)):this.Br.removeEntry(r)}),X.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class qD{constructor(e){this.persistence=e,this.oi=new fa(t=>Yg(t),Qg),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this._i=0,this.ai=new ty,this.targetCount=0,this.ui=No.cr()}forEachTarget(e,t){return this.oi.forEach((r,a)=>t(a)),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),X.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new No(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,X.resolve()}updateTargetData(e,t){return this.Tr(t),X.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,t,r){let a=0;const l=[];return this.oi.forEach((c,m)=>{m.sequenceNumber<=t&&r.get(m.targetId)===null&&(this.oi.delete(c),l.push(this.removeMatchingKeysForTargetId(e,m.targetId)),a++)}),X.waitFor(l).next(()=>a)}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return X.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),X.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),X.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),X.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return X.resolve(r)}containsKey(e,t){return X.resolve(this.ai.containsKey(t))}}/**
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
 */class $A{constructor(e,t){this.ci={},this.overlays={},this.li=new wf(0),this.hi=!1,this.hi=!0,this.Pi=new zD,this.referenceDelegate=e(this),this.Ti=new qD(this),this.indexManager=new CD,this.remoteDocumentCache=function(a){return new FD(a)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new ID(t),this.Ei=new UD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new jD,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new BD(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){ue("MemoryPersistence","Starting transaction:",e);const a=new GD(this.li.next());return this.referenceDelegate.di(),r(a).next(l=>this.referenceDelegate.Ai(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ri(e,t){return X.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class GD extends _O{constructor(e){super(),this.currentSequenceNumber=e}}class ny{constructor(e){this.persistence=e,this.Vi=new ty,this.mi=null}static fi(e){return new ny(e)}get gi(){if(this.mi)return this.mi;throw be(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),X.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),X.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),X.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(a=>this.gi.add(a.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.gi.add(l.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.gi,r=>{const a=ve.fromPath(r);return this.pi(e,a).next(l=>{l||t.removeEntry(a,we.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return X.or([()=>X.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class nf{constructor(e,t){this.persistence=e,this.yi=new fa(r=>bO(r.path),(r,a)=>r.isEqual(a)),this.garbageCollector=kD(this,t)}static fi(e,t){return new nf(e,t)}di(){}Ai(e){return X.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}Sr(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return X.forEach(this.yi,(r,a)=>this.Dr(e,r,a).next(l=>l?X.resolve():t(a)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.si(e,c=>this.Dr(e,c,t).next(m=>{m||(r++,l.removeEntry(c,we.min()))})).next(()=>l.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),X.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),X.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),X.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),X.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Dh(e.data.value)),t}Dr(e,t,r){return X.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.yi.get(t);return X.resolve(a!==void 0&&a>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class iy{constructor(e,t,r,a){this.targetId=e,this.fromCache=t,this.ds=r,this.As=a}static Rs(e,t){let r=Ue(),a=Ue();for(const l of t.docChanges)switch(l.type){case 0:r=r.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new iy(e,t.fromCache,r,a)}}/**
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
 */class $D{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class KD{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return zC()?8:EO(tt())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,a){const l={result:null};return this.ws(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.Ss(e,t,a,r).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new $D;return this.bs(e,t,c).next(m=>{if(l.result=m,this.fs)return this.Ds(e,t,c,m.size)})}).next(()=>l.result)}Ds(e,t,r,a){return r.documentReadCount<this.gs?(fo()<=ke.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",mo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),X.resolve()):(fo()<=ke.DEBUG&&ue("QueryEngine","Query:",mo(t),"scans",r.documentReadCount,"local documents and returns",a,"documents as results."),r.documentReadCount>this.ps*a?(fo()<=ke.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",mo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_i(t))):X.resolve())}ws(e,t){if(aT(t))return X.resolve(null);let r=_i(t);return this.indexManager.getIndexType(e,r).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=Fp(t,null,"F"),r=_i(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(l=>{const c=Ue(...l);return this.ys.getDocuments(e,c).next(m=>this.indexManager.getMinOffset(e,r).next(p=>{const g=this.vs(t,m);return this.Cs(t,g,c,p.readTime)?this.ws(e,Fp(t,null,"F")):this.Fs(e,g,t,p)}))})))}Ss(e,t,r,a){return aT(t)||a.isEqual(we.min())?X.resolve(null):this.ys.getDocuments(e,r).next(l=>{const c=this.vs(t,l);return this.Cs(t,c,r,a)?X.resolve(null):(fo()<=ke.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),mo(t)),this.Fs(e,c,t,pO(a,Su)).next(m=>m))})}vs(e,t){let r=new Pt(AA(e));return t.forEach((a,l)=>{Nf(e,l)&&(r=r.add(l))}),r}Cs(e,t,r,a){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}bs(e,t,r){return fo()<=ke.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",mo(t)),this.ys.getDocumentsMatchingQuery(e,t,rs.min(),r)}Fs(e,t,r,a){return this.ys.getDocumentsMatchingQuery(e,r,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
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
 */const ry="LocalStore",YD=3e8;class QD{constructor(e,t,r,a){this.persistence=e,this.Ms=t,this.serializer=a,this.xs=new ct(Oe),this.Os=new fa(l=>Yg(l),Qg),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LD(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function XD(i,e,t,r){return new QD(i,e,t,r)}async function KA(i,e){const t=Re(i);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let a;return t.mutationQueue.getAllMutationBatches(r).next(l=>(a=l,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(l=>{const c=[],m=[];let p=Ue();for(const g of a){c.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}for(const g of l){m.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(r,p).next(g=>({ks:g,removedBatchIds:c,addedBatchIds:m}))})})}function WD(i,e){const t=Re(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const a=e.batch.keys(),l=t.Bs.newChangeBuffer({trackRemovals:!0});return function(m,p,g,E){const b=g.batch,S=b.keys();let j=X.resolve();return S.forEach(G=>{j=j.next(()=>E.getEntry(p,G)).next(W=>{const F=g.docVersions.get(G);Ke(F!==null,48541),W.version.compareTo(F)<0&&(b.applyToRemoteDocument(W,g),W.isValidDocument()&&(W.setReadTime(g.commitVersion),E.addEntry(W)))})}),j.next(()=>m.mutationQueue.removeMutationBatch(p,b))}(t,r,e,l).next(()=>l.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(m){let p=Ue();for(let g=0;g<m.mutationResults.length;++g)m.mutationResults[g].transformResults.length>0&&(p=p.add(m.batch.mutations[g].key));return p}(e))).next(()=>t.localDocuments.getDocuments(r,a))})}function YA(i){const e=Re(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function JD(i,e){const t=Re(i),r=e.snapshotVersion;let a=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.Bs.newChangeBuffer({trackRemovals:!0});a=t.xs;const m=[];e.targetChanges.forEach((E,b)=>{const S=a.get(b);if(!S)return;m.push(t.Ti.removeMatchingKeys(l,E.removedDocuments,b).next(()=>t.Ti.addMatchingKeys(l,E.addedDocuments,b)));let j=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(b)!==null?j=j.withResumeToken(Xt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):E.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(E.resumeToken,r)),a=a.insert(b,j),function(W,F,ee){return W.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-W.snapshotVersion.toMicroseconds()>=YD?!0:ee.addedDocuments.size+ee.modifiedDocuments.size+ee.removedDocuments.size>0}(S,j,E)&&m.push(t.Ti.updateTargetData(l,j))});let p=ar(),g=Ue();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))}),m.push(ZD(l,c,e.documentUpdates).next(E=>{p=E.qs,g=E.Qs})),!r.isEqual(we.min())){const E=t.Ti.getLastRemoteSnapshotVersion(l).next(b=>t.Ti.setTargetsMetadata(l,l.currentSequenceNumber,r));m.push(E)}return X.waitFor(m).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(t.xs=a,l))}function ZD(i,e,t){let r=Ue(),a=Ue();return t.forEach(l=>r=r.add(l)),e.getEntries(i,r).next(l=>{let c=ar();return t.forEach((m,p)=>{const g=l.get(m);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(m)),p.isNoDocument()&&p.version.isEqual(we.min())?(e.removeEntry(m,p.readTime),c=c.insert(m,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(m,p)):ue(ry,"Ignoring outdated watch update for ",m,". Current version:",g.version," Watch version:",p.version)}),{qs:c,Qs:a}})}function eP(i,e){const t=Re(i);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Gg),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function tP(i,e){const t=Re(i);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let a;return t.Ti.getTargetData(r,e).next(l=>l?(a=l,X.resolve(a)):t.Ti.allocateTargetId(r).next(c=>(a=new Qr(e,c,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,a).next(()=>a))))}).then(r=>{const a=t.xs.get(r.targetId);return(a===null||r.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}async function Kp(i,e,t){const r=Re(i),a=r.xs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",l,c=>r.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!qo(c))throw c;ue(ry,`Failed to update sequence numbers for target ${e}: ${c}`)}r.xs=r.xs.remove(e),r.Os.delete(a.target)}function _T(i,e,t){const r=Re(i);let a=we.min(),l=Ue();return r.persistence.runTransaction("Execute query","readwrite",c=>function(p,g,E){const b=Re(p),S=b.Os.get(E);return S!==void 0?X.resolve(b.xs.get(S)):b.Ti.getTargetData(g,E)}(r,c,_i(e)).next(m=>{if(m)return a=m.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(c,m.targetId).next(p=>{l=p})}).next(()=>r.Ms.getDocumentsMatchingQuery(c,e,t?a:we.min(),t?l:Ue())).next(m=>(nP(r,FO(e),m),{documents:m,$s:l})))}function nP(i,e,t){let r=i.Ns.get(e)||we.min();t.forEach((a,l)=>{l.readTime.compareTo(r)>0&&(r=l.readTime)}),i.Ns.set(e,r)}class ET{constructor(){this.activeTargetIds=YO()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iP{constructor(){this.xo=new ET,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new ET,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rP{No(e){}shutdown(){}}/**
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
 */const TT="ConnectivityMonitor";class bT{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){ue(TT,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){ue(TT,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let bh=null;function Yp(){return bh===null?bh=function(){return 268435456+Math.round(2147483648*Math.random())}():bh++,"0x"+bh.toString(16)}/**
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
 */const lp="RestConnection",sP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class aP{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${a}`,this.Go=this.databaseId.database===Qh?`project_id=${r}`:`project_id=${r}&database_id=${a}`}zo(e,t,r,a,l){const c=Yp(),m=this.jo(e,t.toUriEncodedString());ue(lp,`Sending RPC '${e}' ${c}:`,m,r);const p={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(p,a,l);const{host:g}=new URL(m),E=Uo(g);return this.Jo(e,m,p,r,E).then(b=>(ue(lp,`Received RPC '${e}' ${c}: `,b),b),b=>{throw Io(lp,`RPC '${e}' ${c} failed with error: `,b,"url: ",m,"request:",r),b})}Yo(e,t,r,a,l,c){return this.zo(e,t,r,a,l)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),r&&r.headers.forEach((a,l)=>e[l]=a)}jo(e,t){const r=sP[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
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
 */class oP{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const en="WebChannelConnection";class lP extends aP{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,a,l){const c=Yp();return new Promise((m,p)=>{const g=new W1;g.setWithCredentials(!0),g.listenOnce(J1.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Oh.NO_ERROR:const b=g.getResponseJson();ue(en,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(b)),m(b);break;case Oh.TIMEOUT:ue(en,`RPC '${e}' ${c} timed out`),p(new ye(Z.DEADLINE_EXCEEDED,"Request time out"));break;case Oh.HTTP_ERROR:const S=g.getStatus();if(ue(en,`RPC '${e}' ${c} failed with status:`,S,"response text:",g.getResponseText()),S>0){let j=g.getResponseJson();Array.isArray(j)&&(j=j[0]);const G=j==null?void 0:j.error;if(G&&G.status&&G.message){const W=function(ee){const ie=ee.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(ie)>=0?ie:Z.UNKNOWN}(G.status);p(new ye(W,G.message))}else p(new ye(Z.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ye(Z.UNAVAILABLE,"Connection failed."));break;default:be(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{ue(en,`RPC '${e}' ${c} completed.`)}});const E=JSON.stringify(a);ue(en,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",E,r,15)})}T_(e,t,r){const a=Yp(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=tA(),m=eA(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Ho(p.initMessageHeaders,t,r),p.encodeInitMessageHeaders=!0;const E=l.join("");ue(en,`Creating RPC '${e}' stream ${a}: ${E}`,p);const b=c.createWebChannel(E,p);let S=!1,j=!1;const G=new oP({Zo:F=>{j?ue(en,`Not sending because RPC '${e}' stream ${a} is closed:`,F):(S||(ue(en,`Opening RPC '${e}' stream ${a} transport.`),b.open(),S=!0),ue(en,`RPC '${e}' stream ${a} sending:`,F),b.send(F))},Xo:()=>b.close()}),W=(F,ee,ie)=>{F.listen(ee,ne=>{try{ie(ne)}catch(fe){setTimeout(()=>{throw fe},0)}})};return W(b,su.EventType.OPEN,()=>{j||(ue(en,`RPC '${e}' stream ${a} transport opened.`),G.__())}),W(b,su.EventType.CLOSE,()=>{j||(j=!0,ue(en,`RPC '${e}' stream ${a} transport closed`),G.u_())}),W(b,su.EventType.ERROR,F=>{j||(j=!0,Io(en,`RPC '${e}' stream ${a} transport errored. Name:`,F.name,"Message:",F.message),G.u_(new ye(Z.UNAVAILABLE,"The operation could not be completed")))}),W(b,su.EventType.MESSAGE,F=>{var ee;if(!j){const ie=F.data[0];Ke(!!ie,16349);const ne=ie,fe=(ne==null?void 0:ne.error)||((ee=ne[0])===null||ee===void 0?void 0:ee.error);if(fe){ue(en,`RPC '${e}' stream ${a} received error:`,fe);const ce=fe.status;let Ce=function(C){const P=St[C];if(P!==void 0)return MA(P)}(ce),D=fe.message;Ce===void 0&&(Ce=Z.INTERNAL,D="Unknown error status: "+ce+" with message "+fe.message),j=!0,G.u_(new ye(Ce,D)),b.close()}else ue(en,`RPC '${e}' stream ${a} received:`,ie),G.c_(ie)}}),W(m,Z1.STAT_EVENT,F=>{F.stat===Vp.PROXY?ue(en,`RPC '${e}' stream ${a} detected buffering proxy`):F.stat===Vp.NOPROXY&&ue(en,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{G.a_()},0),G}}function up(){return typeof document<"u"?document:null}/**
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
 */function kf(i){return new fD(i,!0)}/**
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
 */class QA{constructor(e,t,r=1e3,a=1.5,l=6e4){this.xi=e,this.timerId=t,this.I_=r,this.E_=a,this.d_=l,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),a=Math.max(0,t-r);a>0&&ue("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,a,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
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
 */const AT="PersistentStream";class XA{constructor(e,t,r,a,l,c,m,p){this.xi=e,this.y_=r,this.w_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new QA(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===Z.RESOURCE_EXHAUSTED?(sr(t.toString()),sr("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,a])=>{this.S_===t&&this.K_(r,a)},r=>{e(()=>{const a=new ye(Z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(a)})})}K_(e,t){const r=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(a=>{r(()=>this.W_(a))}),this.stream.onMessage(a=>{r(()=>++this.v_==1?this.z_(a):this.onNext(a))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return ue(AT,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(ue(AT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uP extends XA{constructor(e,t,r,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,a,c),this.serializer=l}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=pD(this.serializer,e),r=function(l){if(!("targetChange"in l))return we.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?we.min():c.readTime?Ti(c.readTime):we.min()}(e);return this.listener.j_(t,r)}H_(e){const t={};t.database=$p(this.serializer),t.addTarget=function(l,c){let m;const p=c.target;if(m=Bp(p)?{documents:vD(l,p)}:{query:_D(l,p).gt},m.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){m.resumeToken=UA(l,c.resumeToken);const g=Hp(l,c.expectedCount);g!==null&&(m.expectedCount=g)}else if(c.snapshotVersion.compareTo(we.min())>0){m.readTime=tf(l,c.snapshotVersion.toTimestamp());const g=Hp(l,c.expectedCount);g!==null&&(m.expectedCount=g)}return m}(this.serializer,e);const r=TD(this.serializer,e);r&&(t.labels=r),this.L_(t)}J_(e){const t={};t.database=$p(this.serializer),t.removeTarget=e,this.L_(t)}}class cP extends XA{constructor(e,t,r,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,a,c),this.serializer=l}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return Ke(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ke(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){Ke(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=yD(e.writeResults,e.commitTime),r=Ti(e.commitTime);return this.listener.ea(r,t)}ta(){const e={};e.database=$p(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>gD(this.serializer,r))};this.L_(t)}}/**
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
 */class hP{}class fP extends hP{constructor(e,t,r,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=a,this.na=!1}ra(){if(this.na)throw new ye(Z.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,a){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.zo(e,qp(t,r),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ye(Z.UNKNOWN,l.toString())})}Yo(e,t,r,a,l){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,m])=>this.connection.Yo(e,qp(t,r),a,c,m,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ye(Z.UNKNOWN,c.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class dP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const aa="RemoteStore";class mP{constructor(e,t,r,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=l,this.Ea.No(c=>{r.enqueueAndForget(async()=>{ma(this)&&(ue(aa,"Restarting streams for network reachability change."),await async function(p){const g=Re(p);g.Ta.add(4),await zu(g),g.da.set("Unknown"),g.Ta.delete(4),await Mf(g)}(this))})}),this.da=new dP(r,a)}}async function Mf(i){if(ma(i))for(const e of i.Ia)await e(!0)}async function zu(i){for(const e of i.Ia)await e(!1)}function WA(i,e){const t=Re(i);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),ly(t)?oy(t):Go(t).M_()&&ay(t,e))}function sy(i,e){const t=Re(i),r=Go(t);t.Pa.delete(e),r.M_()&&JA(t,e),t.Pa.size===0&&(r.M_()?r.N_():ma(t)&&t.da.set("Unknown"))}function ay(i,e){if(i.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Go(i).H_(e)}function JA(i,e){i.Aa.Ke(e),Go(i).J_(e)}function oy(i){i.Aa=new lD({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>i.Pa.get(e)||null,Pt:()=>i.datastore.serializer.databaseId}),Go(i).start(),i.da._a()}function ly(i){return ma(i)&&!Go(i).F_()&&i.Pa.size>0}function ma(i){return Re(i).Ta.size===0}function ZA(i){i.Aa=void 0}async function pP(i){i.da.set("Online")}async function gP(i){i.Pa.forEach((e,t)=>{ay(i,e)})}async function yP(i,e){ZA(i),ly(i)?(i.da.ca(e),oy(i)):i.da.set("Unknown")}async function vP(i,e,t){if(i.da.set("Online"),e instanceof LA&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const m of l.targetIds)a.Pa.has(m)&&(await a.remoteSyncer.rejectListen(m,c),a.Pa.delete(m),a.Aa.removeTarget(m))}(i,e)}catch(r){ue(aa,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await rf(i,r)}else if(e instanceof Mh?i.Aa.Xe(e):e instanceof VA?i.Aa.ot(e):i.Aa.nt(e),!t.isEqual(we.min()))try{const r=await YA(i.localStore);t.compareTo(r)>=0&&await function(l,c){const m=l.Aa.It(c);return m.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const E=l.Pa.get(g);E&&l.Pa.set(g,E.withResumeToken(p.resumeToken,c))}}),m.targetMismatches.forEach((p,g)=>{const E=l.Pa.get(p);if(!E)return;l.Pa.set(p,E.withResumeToken(Xt.EMPTY_BYTE_STRING,E.snapshotVersion)),JA(l,p);const b=new Qr(E.target,p,g,E.sequenceNumber);ay(l,b)}),l.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(r){ue(aa,"Failed to raise snapshot:",r),await rf(i,r)}}async function rf(i,e,t){if(!qo(e))throw e;i.Ta.add(1),await zu(i),i.da.set("Offline"),t||(t=()=>YA(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{ue(aa,"Retrying IndexedDB access"),await t(),i.Ta.delete(1),await Mf(i)})}function eS(i,e){return e().catch(t=>rf(i,t,e))}async function Vf(i){const e=Re(i),t=ls(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:Gg;for(;_P(e);)try{const a=await eP(e.localStore,r);if(a===null){e.ha.length===0&&t.N_();break}r=a.batchId,EP(e,a)}catch(a){await rf(e,a)}tS(e)&&nS(e)}function _P(i){return ma(i)&&i.ha.length<10}function EP(i,e){i.ha.push(e);const t=ls(i);t.M_()&&t.Y_&&t.Z_(e.mutations)}function tS(i){return ma(i)&&!ls(i).F_()&&i.ha.length>0}function nS(i){ls(i).start()}async function TP(i){ls(i).ta()}async function bP(i){const e=ls(i);for(const t of i.ha)e.Z_(t.mutations)}async function AP(i,e,t){const r=i.ha.shift(),a=Jg.from(r,e,t);await eS(i,()=>i.remoteSyncer.applySuccessfulWrite(a)),await Vf(i)}async function SP(i,e){e&&ls(i).Y_&&await async function(r,a){if(function(c){return aD(c)&&c!==Z.ABORTED}(a.code)){const l=r.ha.shift();ls(r).O_(),await eS(r,()=>r.remoteSyncer.rejectFailedWrite(l.batchId,a)),await Vf(r)}}(i,e),tS(i)&&nS(i)}async function ST(i,e){const t=Re(i);t.asyncQueue.verifyOperationInProgress(),ue(aa,"RemoteStore received new credentials");const r=ma(t);t.Ta.add(3),await zu(t),r&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await Mf(t)}async function wP(i,e){const t=Re(i);e?(t.Ta.delete(2),await Mf(t)):e||(t.Ta.add(2),await zu(t),t.da.set("Unknown"))}function Go(i){return i.Ra||(i.Ra=function(t,r,a){const l=Re(t);return l.ra(),new uP(r,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{e_:pP.bind(null,i),n_:gP.bind(null,i),i_:yP.bind(null,i),j_:vP.bind(null,i)}),i.Ia.push(async e=>{e?(i.Ra.O_(),ly(i)?oy(i):i.da.set("Unknown")):(await i.Ra.stop(),ZA(i))})),i.Ra}function ls(i){return i.Va||(i.Va=function(t,r,a){const l=Re(t);return l.ra(),new cP(r,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{e_:()=>Promise.resolve(),n_:TP.bind(null,i),i_:SP.bind(null,i),X_:bP.bind(null,i),ea:AP.bind(null,i)}),i.Ia.push(async e=>{e?(i.Va.O_(),await Vf(i)):(await i.Va.stop(),i.ha.length>0&&(ue(aa,`Stopping write stream with ${i.ha.length} pending writes`),i.ha=[]))})),i.Va}/**
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
 */class uy{constructor(e,t,r,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=a,this.removalCallback=l,this.deferred=new es,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,a,l){const c=Date.now()+r,m=new uy(e,t,c,a,l);return m.start(r),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cy(i,e){if(sr("AsyncQueue",`${e}: ${i}`),qo(i))return new ye(Z.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class To{static emptySet(e){return new To(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ve.comparator(t.key,r.key):(t,r)=>ve.comparator(t.key,r.key),this.keyedMap=au(),this.sortedSet=new ct(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof To)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=r.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new To;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class wT{constructor(){this.ma=new ct(ve.comparator)}track(e){const t=e.doc.key,r=this.ma.get(t);r?e.type!==0&&r.type===3?this.ma=this.ma.insert(t,e):e.type===3&&r.type!==1?this.ma=this.ma.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ma=this.ma.remove(t):e.type===1&&r.type===2?this.ma=this.ma.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):be(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,r)=>{e.push(r)}),e}}class Oo{constructor(e,t,r,a,l,c,m,p,g){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,r,a,l){const c=[];return t.forEach(m=>{c.push({type:0,doc:m})}),new Oo(e,t,To.emptySet(t),c,r,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==r[a].type||!t[a].doc.isEqual(r[a].doc))return!1;return!0}}/**
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
 */class IP{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class RP{constructor(){this.queries=IT(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,r){const a=Re(t),l=a.queries;a.queries=IT(),l.forEach((c,m)=>{for(const p of m.ya)p.onError(r)})})(this,new ye(Z.ABORTED,"Firestore shutting down"))}}function IT(){return new fa(i=>bA(i),xf)}async function CP(i,e){const t=Re(i);let r=3;const a=e.query;let l=t.queries.get(a);l?!l.wa()&&e.Sa()&&(r=2):(l=new IP,r=e.Sa()?0:1);try{switch(r){case 0:l.pa=await t.onListen(a,!0);break;case 1:l.pa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const m=cy(c,`Initialization of query '${mo(e.query)}' failed`);return void e.onError(m)}t.queries.set(a,l),l.ya.push(e),e.Da(t.onlineState),l.pa&&e.va(l.pa)&&hy(t)}async function xP(i,e){const t=Re(i),r=e.query;let a=3;const l=t.queries.get(r);if(l){const c=l.ya.indexOf(e);c>=0&&(l.ya.splice(c,1),l.ya.length===0?a=e.Sa()?0:1:!l.wa()&&e.Sa()&&(a=2))}switch(a){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function NP(i,e){const t=Re(i);let r=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const m of c.ya)m.va(a)&&(r=!0);c.pa=a}}r&&hy(t)}function OP(i,e,t){const r=Re(i),a=r.queries.get(e);if(a)for(const l of a.ya)l.onError(t);r.queries.delete(e)}function hy(i){i.ba.forEach(e=>{e.next()})}var Qp,RT;(RT=Qp||(Qp={})).Ca="default",RT.Cache="cache";class DP{constructor(e,t,r){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){const r=[];for(const a of e.docChanges)a.type!==3&&r.push(a);e=new Oo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const r=t!=="Offline";return(!this.options.La||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=Oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==Qp.Cache}}/**
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
 */class iS{constructor(e){this.key=e}}class rS{constructor(e){this.key=e}}class PP{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=Ue(),this.mutatedKeys=Ue(),this.Ha=AA(e),this.Ja=new To(this.Ha)}get Ya(){return this.Ga}Za(e,t){const r=t?t.Xa:new wT,a=t?t.Ja:this.Ja;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,m=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((E,b)=>{const S=a.get(E),j=Nf(this.query,b)?b:null,G=!!S&&this.mutatedKeys.has(S.key),W=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let F=!1;S&&j?S.data.isEqual(j.data)?G!==W&&(r.track({type:3,doc:j}),F=!0):this.eu(S,j)||(r.track({type:2,doc:j}),F=!0,(p&&this.Ha(j,p)>0||g&&this.Ha(j,g)<0)&&(m=!0)):!S&&j?(r.track({type:0,doc:j}),F=!0):S&&!j&&(r.track({type:1,doc:S}),F=!0,(p||g)&&(m=!0)),F&&(j?(c=c.add(j),l=W?l.add(E):l.delete(E)):(c=c.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const E=this.query.limitType==="F"?c.last():c.first();c=c.delete(E.key),l=l.delete(E.key),r.track({type:1,doc:E})}return{Ja:c,Xa:r,Cs:m,mutatedKeys:l}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,a){const l=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const c=e.Xa.ga();c.sort((E,b)=>function(j,G){const W=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return be(20277,{Vt:F})}};return W(j)-W(G)}(E.type,b.type)||this.Ha(E.doc,b.doc)),this.tu(r),a=a!=null&&a;const m=t&&!a?this.nu():[],p=this.ja.size===0&&this.current&&!a?1:0,g=p!==this.za;return this.za=p,c.length!==0||g?{snapshot:new Oo(this.query,e.Ja,l,c,e.mutatedKeys,p===0,g,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:m}:{ru:m}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new wT,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=Ue(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const t=[];return e.forEach(r=>{this.ja.has(r)||t.push(new rS(r))}),this.ja.forEach(r=>{e.has(r)||t.push(new iS(r))}),t}su(e){this.Ga=e.$s,this.ja=Ue();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return Oo.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const fy="SyncEngine";class kP{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class MP{constructor(e){this.key=e,this._u=!1}}class VP{constructor(e,t,r,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.au={},this.uu=new fa(m=>bA(m),xf),this.cu=new Map,this.lu=new Set,this.hu=new ct(ve.comparator),this.Pu=new Map,this.Tu=new ty,this.Iu={},this.Eu=new Map,this.du=No.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function LP(i,e,t=!0){const r=cS(i);let a;const l=r.uu.get(e);return l?(r.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.ou()):a=await sS(r,e,t,!0),a}async function UP(i,e){const t=cS(i);await sS(t,e,!0,!1)}async function sS(i,e,t,r){const a=await tP(i.localStore,_i(e)),l=a.targetId,c=i.sharedClientState.addLocalQueryTarget(l,t);let m;return r&&(m=await jP(i,e,l,c==="current",a.resumeToken)),i.isPrimaryClient&&t&&WA(i.remoteStore,a),m}async function jP(i,e,t,r,a){i.Ru=(b,S,j)=>async function(W,F,ee,ie){let ne=F.view.Za(ee);ne.Cs&&(ne=await _T(W.localStore,F.query,!1).then(({documents:D})=>F.view.Za(D,ne)));const fe=ie&&ie.targetChanges.get(F.targetId),ce=ie&&ie.targetMismatches.get(F.targetId)!=null,Ce=F.view.applyChanges(ne,W.isPrimaryClient,fe,ce);return xT(W,F.targetId,Ce.ru),Ce.snapshot}(i,b,S,j);const l=await _T(i.localStore,e,!0),c=new PP(e,l.$s),m=c.Za(l.documents),p=ju.createSynthesizedTargetChangeForCurrentChange(t,r&&i.onlineState!=="Offline",a),g=c.applyChanges(m,i.isPrimaryClient,p);xT(i,t,g.ru);const E=new kP(e,t,c);return i.uu.set(e,E),i.cu.has(t)?i.cu.get(t).push(e):i.cu.set(t,[e]),g.snapshot}async function zP(i,e,t){const r=Re(i),a=r.uu.get(e),l=r.cu.get(a.targetId);if(l.length>1)return r.cu.set(a.targetId,l.filter(c=>!xf(c,e))),void r.uu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(a.targetId),r.sharedClientState.isActiveQueryTarget(a.targetId)||await Kp(r.localStore,a.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(a.targetId),t&&sy(r.remoteStore,a.targetId),Xp(r,a.targetId)}).catch(Ho)):(Xp(r,a.targetId),await Kp(r.localStore,a.targetId,!0))}async function BP(i,e){const t=Re(i),r=t.uu.get(e),a=t.cu.get(r.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),sy(t.remoteStore,r.targetId))}async function FP(i,e,t){const r=QP(i);try{const a=await function(c,m){const p=Re(c),g=Dt.now(),E=m.reduce((j,G)=>j.add(G.key),Ue());let b,S;return p.persistence.runTransaction("Locally write mutations","readwrite",j=>{let G=ar(),W=Ue();return p.Bs.getEntries(j,E).next(F=>{G=F,G.forEach((ee,ie)=>{ie.isValidDocument()||(W=W.add(ee))})}).next(()=>p.localDocuments.getOverlayedDocuments(j,G)).next(F=>{b=F;const ee=[];for(const ie of m){const ne=tD(ie,b.get(ie.key).overlayedDocument);ne!=null&&ee.push(new da(ie.key,ne,pA(ne.value.mapValue),Ei.exists(!0)))}return p.mutationQueue.addMutationBatch(j,g,ee,m)}).next(F=>{S=F;const ee=F.applyToLocalDocumentSet(b,W);return p.documentOverlayCache.saveOverlays(j,F.batchId,ee)})}).then(()=>({batchId:S.batchId,changes:wA(b)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(a.batchId),function(c,m,p){let g=c.Iu[c.currentUser.toKey()];g||(g=new ct(Oe)),g=g.insert(m,p),c.Iu[c.currentUser.toKey()]=g}(r,a.batchId,t),await Bu(r,a.changes),await Vf(r.remoteStore)}catch(a){const l=cy(a,"Failed to persist write");t.reject(l)}}async function aS(i,e){const t=Re(i);try{const r=await JD(t.localStore,e);e.targetChanges.forEach((a,l)=>{const c=t.Pu.get(l);c&&(Ke(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c._u=!0:a.modifiedDocuments.size>0?Ke(c._u,14607):a.removedDocuments.size>0&&(Ke(c._u,42227),c._u=!1))}),await Bu(t,r,e)}catch(r){await Ho(r)}}function CT(i,e,t){const r=Re(i);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const a=[];r.uu.forEach((l,c)=>{const m=c.view.Da(e);m.snapshot&&a.push(m.snapshot)}),function(c,m){const p=Re(c);p.onlineState=m;let g=!1;p.queries.forEach((E,b)=>{for(const S of b.ya)S.Da(m)&&(g=!0)}),g&&hy(p)}(r.eventManager,e),a.length&&r.au.j_(a),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function HP(i,e,t){const r=Re(i);r.sharedClientState.updateQueryState(e,"rejected",t);const a=r.Pu.get(e),l=a&&a.key;if(l){let c=new ct(ve.comparator);c=c.insert(l,nn.newNoDocument(l,we.min()));const m=Ue().add(l),p=new Pf(we.min(),new Map,new ct(Oe),c,m);await aS(r,p),r.hu=r.hu.remove(l),r.Pu.delete(e),dy(r)}else await Kp(r.localStore,e,!1).then(()=>Xp(r,e,t)).catch(Ho)}async function qP(i,e){const t=Re(i),r=e.batch.batchId;try{const a=await WD(t.localStore,e);lS(t,r,null),oS(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Bu(t,a)}catch(a){await Ho(a)}}async function GP(i,e,t){const r=Re(i);try{const a=await function(c,m){const p=Re(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let E;return p.mutationQueue.lookupMutationBatch(g,m).next(b=>(Ke(b!==null,37113),E=b.keys(),p.mutationQueue.removeMutationBatch(g,b))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,E,m)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,E)).next(()=>p.localDocuments.getDocuments(g,E))})}(r.localStore,e);lS(r,e,t),oS(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Bu(r,a)}catch(a){await Ho(a)}}function oS(i,e){(i.Eu.get(e)||[]).forEach(t=>{t.resolve()}),i.Eu.delete(e)}function lS(i,e,t){const r=Re(i);let a=r.Iu[r.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),r.Iu[r.currentUser.toKey()]=a}}function Xp(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const r of i.cu.get(e))i.uu.delete(r),t&&i.au.Vu(r,t);i.cu.delete(e),i.isPrimaryClient&&i.Tu.Hr(e).forEach(r=>{i.Tu.containsKey(r)||uS(i,r)})}function uS(i,e){i.lu.delete(e.path.canonicalString());const t=i.hu.get(e);t!==null&&(sy(i.remoteStore,t),i.hu=i.hu.remove(e),i.Pu.delete(t),dy(i))}function xT(i,e,t){for(const r of t)r instanceof iS?(i.Tu.addReference(r.key,e),$P(i,r)):r instanceof rS?(ue(fy,"Document no longer in limbo: "+r.key),i.Tu.removeReference(r.key,e),i.Tu.containsKey(r.key)||uS(i,r.key)):be(19791,{mu:r})}function $P(i,e){const t=e.key,r=t.path.canonicalString();i.hu.get(t)||i.lu.has(r)||(ue(fy,"New document in limbo: "+t),i.lu.add(r),dy(i))}function dy(i){for(;i.lu.size>0&&i.hu.size<i.maxConcurrentLimboResolutions;){const e=i.lu.values().next().value;i.lu.delete(e);const t=new ve(lt.fromString(e)),r=i.du.next();i.Pu.set(r,new MP(t)),i.hu=i.hu.insert(t,r),WA(i.remoteStore,new Qr(_i(Xg(t.path)),r,"TargetPurposeLimboResolution",wf.le))}}async function Bu(i,e,t){const r=Re(i),a=[],l=[],c=[];r.uu.isEmpty()||(r.uu.forEach((m,p)=>{c.push(r.Ru(p,e,t).then(g=>{var E;if((g||t)&&r.isPrimaryClient){const b=g?!g.fromCache:(E=t==null?void 0:t.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;r.sharedClientState.updateQueryState(p.targetId,b?"current":"not-current")}if(g){a.push(g);const b=iy.Rs(p.targetId,g);l.push(b)}}))}),await Promise.all(c),r.au.j_(a),await async function(p,g){const E=Re(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>X.forEach(g,S=>X.forEach(S.ds,j=>E.persistence.referenceDelegate.addReference(b,S.targetId,j)).next(()=>X.forEach(S.As,j=>E.persistence.referenceDelegate.removeReference(b,S.targetId,j)))))}catch(b){if(!qo(b))throw b;ue(ry,"Failed to update sequence numbers: "+b)}for(const b of g){const S=b.targetId;if(!b.fromCache){const j=E.xs.get(S),G=j.snapshotVersion,W=j.withLastLimboFreeSnapshotVersion(G);E.xs=E.xs.insert(S,W)}}}(r.localStore,l))}async function KP(i,e){const t=Re(i);if(!t.currentUser.isEqual(e)){ue(fy,"User change. New user:",e.toKey());const r=await KA(t.localStore,e);t.currentUser=e,function(l,c){l.Eu.forEach(m=>{m.forEach(p=>{p.reject(new ye(Z.CANCELLED,c))})}),l.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Bu(t,r.ks)}}function YP(i,e){const t=Re(i),r=t.Pu.get(e);if(r&&r._u)return Ue().add(r.key);{let a=Ue();const l=t.cu.get(e);if(!l)return a;for(const c of l){const m=t.uu.get(c);a=a.unionWith(m.view.Ya)}return a}}function cS(i){const e=Re(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=aS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HP.bind(null,e),e.au.j_=NP.bind(null,e.eventManager),e.au.Vu=OP.bind(null,e.eventManager),e}function QP(i){const e=Re(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GP.bind(null,e),e}class sf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=kf(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return XD(this.persistence,new KD,e.initialUser,this.serializer)}yu(e){return new $A(ny.fi,this.serializer)}pu(e){return new iP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}sf.provider={build:()=>new sf};class XP extends sf{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){Ke(this.persistence.referenceDelegate instanceof nf,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new DD(r,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?dn.withCacheSize(this.cacheSizeBytes):dn.DEFAULT;return new $A(r=>nf.fi(r,t),this.serializer)}}class Wp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>CT(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=KP.bind(null,this.syncEngine),await wP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new RP}()}createDatastore(e){const t=kf(e.databaseInfo.databaseId),r=function(l){return new lP(l)}(e.databaseInfo);return function(l,c,m,p){return new fP(l,c,m,p)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,a,l,c,m){return new mP(r,a,l,c,m)}(this.localStore,this.datastore,e.asyncQueue,t=>CT(this.syncEngine,t,0),function(){return bT.C()?new bT:new rP}())}createSyncEngine(e,t){return function(a,l,c,m,p,g,E){const b=new VP(a,l,c,m,p,g);return E&&(b.Au=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=Re(a);ue(aa,"RemoteStore shutting down."),l.Ta.add(5),await zu(l),l.Ea.shutdown(),l.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Wp.provider={build:()=>new Wp};/**
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
 */class WP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):sr("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const us="FirestoreClient";class JP{constructor(e,t,r,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=a,this.user=tn.UNAUTHENTICATED,this.clientId=sA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(r,async c=>{ue(us,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(r,c=>(ue(us,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new es;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=cy(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function cp(i,e){i.asyncQueue.verifyOperationInProgress(),ue(us,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let r=t.initialUser;i.setCredentialChangeListener(async a=>{r.isEqual(a)||(await KA(e.localStore,a),r=a)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function NT(i,e){i.asyncQueue.verifyOperationInProgress();const t=await ZP(i);ue(us,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(r=>ST(e.remoteStore,r)),i.setAppCheckTokenChangeListener((r,a)=>ST(e.remoteStore,a)),i._onlineComponents=e}async function ZP(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ue(us,"Using user provided OfflineComponentProvider");try{await cp(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===Z.FAILED_PRECONDITION||a.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;Io("Error using user provided cache. Falling back to memory cache: "+t),await cp(i,new sf)}}else ue(us,"Using default OfflineComponentProvider"),await cp(i,new XP(void 0));return i._offlineComponents}async function hS(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ue(us,"Using user provided OnlineComponentProvider"),await NT(i,i._uninitializedComponentsProvider._online)):(ue(us,"Using default OnlineComponentProvider"),await NT(i,new Wp))),i._onlineComponents}function ek(i){return hS(i).then(e=>e.syncEngine)}async function tk(i){const e=await hS(i),t=e.eventManager;return t.onListen=LP.bind(null,e.syncEngine),t.onUnlisten=zP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=UP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=BP.bind(null,e.syncEngine),t}function nk(i,e,t={}){const r=new es;return i.asyncQueue.enqueueAndForget(async()=>function(l,c,m,p,g){const E=new WP({next:S=>{E.Cu(),c.enqueueAndForget(()=>xP(l,b));const j=S.docs.has(m);!j&&S.fromCache?g.reject(new ye(Z.UNAVAILABLE,"Failed to get document because the client is offline.")):j&&S.fromCache&&p&&p.source==="server"?g.reject(new ye(Z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(S)},error:S=>g.reject(S)}),b=new DP(Xg(m.path),E,{includeMetadataChanges:!0,La:!0});return CP(l,b)}(await tk(i),i.asyncQueue,e,t,r)),r.promise}/**
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
 */function fS(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const OT=new Map;/**
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
 */function dS(i,e,t){if(!t)throw new ye(Z.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function ik(i,e,t,r){if(e===!0&&r===!0)throw new ye(Z.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function DT(i){if(!ve.isDocumentKey(i))throw new ye(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function PT(i){if(ve.isDocumentKey(i))throw new ye(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function my(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":be(12329,{type:typeof i})}function Do(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ye(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=my(i);throw new ye(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */const mS="firestore.googleapis.com",kT=!0;class MT{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ye(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=mS,this.ssl=kT}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:kT;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=GA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ND)throw new ye(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ik("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ye(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ye(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ye(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,a){return r.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Lf{constructor(e,t,r,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new MT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ye(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ye(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new MT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new aO;switch(r.type){case"firstParty":return new cO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ye(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,Ef("Firestore",this._settings.isUsingEmulator),this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=OT.get(t);r&&(ue("ComponentProvider","Removing Datastore"),OT.delete(t),r.terminate())}(this),Promise.resolve()}}function rk(i,e,t,r={}){var a;i=Do(i,Lf);const l=Uo(e),c=i._getSettings(),m=Object.assign(Object.assign({},c),{emulatorOptions:i._getEmulatorOptions()}),p=`${e}:${t}`;c.host!==mS&&c.host!==p&&Io("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},c),{host:p,ssl:l,emulatorOptions:r});if(!ns(g,m)&&(i._setSettings(g),l&&(t1(`https://${p}`),Ef("Firestore",!0)),r.mockUserToken)){let E,b;if(typeof r.mockUserToken=="string")E=r.mockUserToken,b=tn.MOCK_USER;else{E=VC(r.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const S=r.mockUserToken.sub||r.mockUserToken.user_id;if(!S)throw new ye(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new tn(S)}i._authCredentials=new oO(new iA(E,b))}}/**
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
 */class py{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new py(this.firestore,e,this._query)}}class An{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ts(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new An(this.firestore,e,this._key)}}class ts extends py{constructor(e,t,r){super(e,t,Xg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new An(this.firestore,null,new ve(e))}withConverter(e){return new ts(this.firestore,e,this._path)}}function pS(i,e,...t){if(i=Qt(i),dS("collection","path",e),i instanceof Lf){const r=lt.fromString(e,...t);return PT(r),new ts(i,null,r)}{if(!(i instanceof An||i instanceof ts))throw new ye(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(lt.fromString(e,...t));return PT(r),new ts(i.firestore,null,r)}}function gS(i,e,...t){if(i=Qt(i),arguments.length===1&&(e=sA.newId()),dS("doc","path",e),i instanceof Lf){const r=lt.fromString(e,...t);return DT(r),new An(i,null,new ve(r))}{if(!(i instanceof An||i instanceof ts))throw new ye(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(lt.fromString(e,...t));return DT(r),new An(i.firestore,i instanceof ts?i.converter:null,new ve(r))}}/**
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
 */const VT="AsyncQueue";class LT{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new QA(this,"async_queue_retry"),this.ec=()=>{const r=up();r&&ue(VT,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const t=up();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=up();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new es;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!qo(e))throw e;ue(VT,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,sr("INTERNAL UNHANDLED ERROR: ",UT(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=t,t}enqueueAfterDelay(e,t,r){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const a=uy.createAndSchedule(this,e,t,r,l=>this.oc(l));return this.Hu.push(a),a}nc(){this.Ju&&be(47125,{_c:UT(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function UT(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Uf extends Lf{constructor(e,t,r,a){super(e,t,r,a),this.type="firestore",this._queue=new LT,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new LT(e),this._firestoreClient=void 0,await e}}}function gy(i,e){const t=typeof i=="object"?i:Ng(),r=typeof i=="string"?i:Qh,a=ku(t,"firestore").getImmediate({identifier:r});if(!a._initialized){const l=kC("firestore");l&&rk(a,...l)}return a}function yS(i){if(i._terminated)throw new ye(Z.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||sk(i),i._firestoreClient}function sk(i){var e,t,r;const a=i._freezeSettings(),l=function(m,p,g,E){return new wO(m,p,g,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,fS(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=a.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new JP(i._authCredentials,i._appCheckCredentials,i._queue,l,i._componentsProvider&&function(m){const p=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(p),_online:p}}(i._componentsProvider))}/**
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
 */class Po{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Po(Xt.fromBase64String(e))}catch(t){throw new ye(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Po(Xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class yy{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ye(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class vS{constructor(e){this._methodName=e}}/**
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
 */class vy{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ye(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ye(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}/**
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
 */class _y{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,a){if(r.length!==a.length)return!1;for(let l=0;l<r.length;++l)if(r[l]!==a[l])return!1;return!0}(this._values,e._values)}}/**
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
 */const ak=/^__.*__$/;class ok{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new da(e,this.data,this.fieldMask,t,this.fieldTransforms):new Uu(e,this.data,t,this.fieldTransforms)}}function _S(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw be(40011,{hc:i})}}class Ey{constructor(e,t,r,a,l,c){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=a,l===void 0&&this.Pc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new Ey(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Tc({path:r,Ec:!1});return a.dc(e),a}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Tc({path:r,Ec:!1});return a.Pc(),a}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return af(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(_S(this.hc)&&ak.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class lk{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||kf(e)}gc(e,t,r,a=!1){return new Ey({hc:e,methodName:t,fc:r,path:Yt.emptyPath(),Ec:!1,mc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ES(i){const e=i._freezeSettings(),t=kf(i._databaseId);return new lk(i._databaseId,!!e.ignoreUndefinedProperties,t)}function TS(i,e,t,r,a,l={}){const c=i.gc(l.merge||l.mergeFields?2:0,e,t,a);wS("Data must be an object, but it was:",c,r);const m=AS(r,c);let p,g;if(l.merge)p=new $n(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const E=[];for(const b of l.mergeFields){const S=uk(e,b,t);if(!c.contains(S))throw new ye(Z.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);hk(E,S)||E.push(S)}p=new $n(E),g=c.fieldTransforms.filter(b=>p.covers(b.field))}else p=null,g=c.fieldTransforms;return new ok(new Un(m),p,g)}function bS(i,e){if(SS(i=Qt(i)))return wS("Unsupported field value:",e,i),AS(i,e);if(i instanceof vS)return function(r,a){if(!_S(a.hc))throw a.Vc(`${r._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Vc(`${r._methodName}() is not currently supported inside arrays`);const l=r._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,a){const l=[];let c=0;for(const m of r){let p=bS(m,a.Rc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(i,e)}return function(r,a){if((r=Qt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return QO(a.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const l=Dt.fromDate(r);return{timestampValue:tf(a.serializer,l)}}if(r instanceof Dt){const l=new Dt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:tf(a.serializer,l)}}if(r instanceof vy)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Po)return{bytesValue:UA(a.serializer,r._byteString)};if(r instanceof An){const l=a.databaseId,c=r.firestore._databaseId;if(!c.isEqual(l))throw a.Vc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:ey(r.firestore._databaseId||a.databaseId,r._key.path)}}if(r instanceof _y)return function(c,m){return{mapValue:{fields:{[dA]:{stringValue:mA},[Xh]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw m.Vc("VectorValues must only contain numeric values.");return Wg(m.serializer,g)})}}}}}}(r,a);throw a.Vc(`Unsupported field value: ${my(r)}`)}(i,e)}function AS(i,e){const t={};return oA(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ha(i,(r,a)=>{const l=bS(a,e.Ic(r));l!=null&&(t[r]=l)}),{mapValue:{fields:t}}}function SS(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Dt||i instanceof vy||i instanceof Po||i instanceof An||i instanceof vS||i instanceof _y)}function wS(i,e,t){if(!SS(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const r=my(t);throw r==="an object"?e.Vc(i+" a custom object"):e.Vc(i+" "+r)}}function uk(i,e,t){if((e=Qt(e))instanceof yy)return e._internalPath;if(typeof e=="string")return IS(i,e);throw af("Field path arguments must be of type string or ",i,!1,void 0,t)}const ck=new RegExp("[~\\*/\\[\\]]");function IS(i,e,t){if(e.search(ck)>=0)throw af(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new yy(...e.split("."))._internalPath}catch{throw af(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function af(i,e,t,r,a){const l=r&&!r.isEmpty(),c=a!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${r}`),c&&(p+=` in document ${a}`),p+=")"),new ye(Z.INVALID_ARGUMENT,m+i+p)}function hk(i,e){return i.some(t=>t.isEqual(e))}/**
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
 */class RS{constructor(e,t,r,a,l){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new An(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(CS("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class fk extends RS{data(){return super.data()}}function CS(i,e){return typeof e=="string"?IS(i,e):e instanceof yy?e._internalPath:e._delegate._internalPath}class dk{convertValue(e,t="none"){switch(os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return vt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(as(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw be(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ha(e,(a,l)=>{r[a]=this.convertValue(l,t)}),r}convertVectorValue(e){var t,r,a;const l=(a=(r=(t=e.fields)===null||t===void 0?void 0:t[Xh].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.map(c=>vt(c.doubleValue));return new _y(l)}convertGeoPoint(e){return new vy(vt(e.latitude),vt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Rf(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(wu(e));default:return null}}convertTimestamp(e){const t=ss(e);return new Dt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=lt.fromString(e);Ke(qA(r),9688,{name:e});const a=new Iu(r.get(1),r.get(3)),l=new ve(r.popFirst(5));return a.isEqual(t)||sr(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function xS(i,e,t){let r;return r=i?i.toFirestore(e):e,r}/**
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
 */class mk{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class NS extends RS{constructor(e,t,r,a,l,c){super(e,t,r,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new pk(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(CS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class pk extends NS{data(e={}){return super.data(e)}}/**
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
 */function gk(i){i=Do(i,An);const e=Do(i.firestore,Uf);return nk(yS(e),i._key).then(t=>_k(e,i,t))}class yk extends dk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Po(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new An(this.firestore,null,t)}}function vk(i,e,t){i=Do(i,An);const r=Do(i.firestore,Uf),a=xS(i.converter,e);return DS(r,[TS(ES(r),"setDoc",i._key,a,i.converter!==null,t).toMutation(i._key,Ei.none())])}function OS(i,e){const t=Do(i.firestore,Uf),r=gS(i),a=xS(i.converter,e);return DS(t,[TS(ES(i.firestore),"addDoc",r._key,a,i.converter!==null,{}).toMutation(r._key,Ei.exists(!1))]).then(()=>r)}function DS(i,e){return function(r,a){const l=new es;return r.asyncQueue.enqueueAndForget(async()=>FP(await ek(r),a,l)),l.promise}(yS(i),e)}function _k(i,e,t){const r=t.docs.get(e._key),a=new yk(i);return new NS(i,a,e._key,r,new mk(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(a){Fo=a})(Ii),is(new nr("firestore",(r,{instanceIdentifier:a,options:l})=>{const c=r.getProvider("app").getImmediate(),m=new Uf(new lO(r.getProvider("auth-internal")),new hO(c,r.getProvider("app-check-internal")),function(g,E){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ye(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Iu(g.options.projectId,E)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),m._setSettings(l),m},"PUBLIC").setMultipleInstances(!0)),yi(HE,qE,e),yi(HE,qE,"esm2017")})();const Ek=gy(Bo),Tk=Hg(Bo),bk=()=>{const i=vf(),e=async t=>{var r;t.preventDefault();try{const a=new jg,l=await hN(Tk,a);if(!l.user)throw new Error("Error al loguear con google");const c=gS(Ek,"users",l.user.uid);(await gk(c)).exists()||await vk(c,{username:(r=l.user.email)==null?void 0:r.split("@"),email:l.user.email,role:null,avatar:"default.png"}),i("/home")}catch(a){console.log(a)}};return R.jsx(R.Fragment,{children:R.jsx("div",{className:"w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 relative",children:R.jsxs("div",{className:"w-full sm:max-w-md p-5 mx-auto",children:[R.jsx("h2",{className:"mb-12 text-center text-5xl font-extrabold",children:"El Caballo S.A."}),R.jsxs("form",{children:[R.jsxs("div",{className:"mb-4",children:[R.jsx("label",{className:"block mb-1",htmlFor:"email",children:"Usuario"}),R.jsx("input",{id:"email",type:"text",name:"email",className:"py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"})]}),R.jsxs("div",{className:"mb-4",children:[R.jsx("label",{className:"block mb-1",htmlFor:"password",children:"Contraseña"}),R.jsx("input",{id:"password",type:"password",name:"password",className:"py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"})]}),R.jsxs("div",{className:"mt-6 flex items-center justify-between",children:[R.jsxs("div",{className:"flex items-center",children:[R.jsx("input",{id:"remember_me",type:"checkbox",className:"border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"}),R.jsxs("label",{htmlFor:"remember_me",className:"ml-2 block text-sm leading-5 text-gray-900",children:[" ","Remember me"," "]})]}),R.jsxs("a",{href:"#",className:"text-sm",children:[" ","Olvidaste tu contraseña?"," "]})]}),R.jsx("div",{className:"mt-6",children:R.jsx("button",{className:"cursor-pointer w-full inline-flex items-center justify-center px-4 py-2 bg-blue-950 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-800 active:bg-green-500 focus:outline-none focus:border-green-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition",children:"Sign In"})})]}),R.jsxs("div",{className:"flex justify-center flex-col items-center mt-4",children:[R.jsxs("svg",{className:"cursor-pointer",onClick:e,width:"40",height:"auto",viewBox:"0 0 256 262",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",children:[R.jsx("path",{d:"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",fill:"#4285F4"}),R.jsx("path",{d:"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",fill:"#34A853"}),R.jsx("path",{d:"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",fill:"#FBBC05"}),R.jsx("path",{d:"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",fill:"#EB4335"})]}),R.jsx("small",{children:"Iniciar con Google"})]})]})})})};function Ak(){return R.jsx(R.Fragment,{children:R.jsx("div",{className:"bg-amber-100",children:R.jsx(bk,{})})})}function jT(){return R.jsx(R.Fragment,{children:R.jsx("div",{className:"transition-transform duration-300 ease-in-out"})})}const Ty=ae.createContext(void 0),Sk=({children:i})=>{const e=Hg(),[t,r]=ae.useState(null);ae.useEffect(()=>{const m=V1(e,p=>{r(p)});return()=>m()},[]);const[a,l]=ae.useState(!1),c=()=>{l(m=>!m)};return R.jsx(Ty.Provider,{value:{user:t,openMenu:a,toogleMenu:c},children:i})},wk=()=>R.jsx(R.Fragment,{children:R.jsx("div",{className:"flex p-5 w-full justify-center bg-gray-200 rounded-2xl backgroundForm",children:R.jsxs("form",{className:"w-full max-w-lg text-white",children:[R.jsxs("div",{className:"flex flex-wrap -mx-3 mb-6",children:[R.jsxs("div",{className:"w-full md:w-1/2 px-3 mb-6 md:mb-0",children:[R.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"grid-first-name",children:"Fecha"}),R.jsx("input",{className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"grid-first-name",type:"date"})]}),R.jsxs("div",{className:"w-full md:w-1/2 px-3",children:[R.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"code",children:"Codigo de operario"}),R.jsx("input",{className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"code",type:"number",placeholder:"000"})]})]}),R.jsxs("div",{className:"flex flex-wrap -mx-3 mb-6",children:[R.jsxs("div",{className:"w-full md:w-1/2 px-3",children:[R.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"code",children:"Codigo de operario"}),R.jsx("input",{className:"appearance-none block w-full bg-gray-200 text-blue-950 border  border-blue-950 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"code",type:"number",placeholder:"000"})]}),R.jsxs("div",{className:"w-full md:w-1/2 px-3",children:[R.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"code",children:"Horas asignadas"}),R.jsx("input",{className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"code",type:"text",placeholder:"0"})]}),R.jsxs("div",{className:"w-full md:w-1/2 px-3",children:[R.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"code",children:"Paradas mayores"}),R.jsx("input",{className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"code",type:"text",placeholder:"0"})]}),R.jsxs("div",{className:"w-full md:w-1/2 px-3",children:[R.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"code",children:"Total horas"}),R.jsx("input",{className:"appearance-none block w-full text-blue-950 bg-gray-200 text-red-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"code",type:"text",placeholder:"0",readOnly:!0,value:0})]})]}),R.jsxs("div",{className:"flex flex-wrap -mx-3 mb-2",children:[R.jsxs("div",{className:"w-full md:w-1/3 px-3 mb-6 md:mb-0",children:[R.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"grid-city",children:"Horometro inicial"}),R.jsx("input",{className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"HourStart",type:"number",placeholder:"00000000"})]}),R.jsxs("div",{className:"w-full md:w-1/3 px-3 mb-6 md:mb-0",children:[R.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"machine",children:"Maquina"}),R.jsx("div",{className:"relative",children:R.jsxs("select",{className:"block appearance-none w-full bg-gray-200 border border-gray-200 text-blue-950 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"machine",children:[R.jsx("option",{children:"Punt 1"}),R.jsx("option",{children:"Punt 2"}),R.jsx("option",{children:"Punt 2"})]})})]}),R.jsxs("div",{className:"w-full md:w-1/3 px-3 mb-6 md:mb-0",children:[R.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"grid-zip",children:"Horometro final"}),R.jsx("input",{className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"hourEnd",type:"number",placeholder:"00000000"})]}),R.jsxs("div",{className:"w-full  px-3",children:[R.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"code",children:"Observaciones"}),R.jsx("textarea",{className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"code",placeholder:"..."})]})]}),R.jsx("div",{className:"flex justify-center mt-4",children:R.jsx("button",{type:"submit",className:"cursor-pointer w-full py-2 rounded bg-blue-600 hover:bg-blue-800 transition-colors duration-300 text-white font-semibold",children:"Enviar"})})]})})}),Ik=()=>R.jsx("div",{children:R.jsx(wk,{})}),zT=[{id:"F1315",name:"Excavator F1315"},{id:"F1400",name:"Bulldozer F1400"},{id:"F1200",name:"Loader F1200"}],Rk=()=>{const[i,e]=ae.useState(""),[t,r]=ae.useState([]),a=c=>{r(m=>m.includes(c)?m.filter(p=>p!==c):[...m,c])};function l(c){c.preventDefault(),console.log("Assignment:",{operator:i,machines:t}),e(""),r([])}return R.jsxs("div",{className:"p-6 rounded-lg shadow-md w-full max-w-lg mx-auto backgroundForm",children:[R.jsx("h2",{className:"text-xl font-bold mb-4 text-white",children:"Asignar Máquinas"}),R.jsxs("form",{onSubmit:l,className:"space-y-4",children:[R.jsxs("div",{children:[R.jsx("label",{className:"block mb-1 text-white",children:"Operario"}),R.jsx("input",{type:"text",value:i,onChange:c=>e(c.target.value),className:"w-full border px-3 bg-gray-200 py-2 rounded-md",required:!0})]}),R.jsxs("div",{children:[R.jsx("label",{className:"block mb-1 text-white",children:"Seleccionar maquinas"}),R.jsx("div",{className:"space-y-2 text-white pl-2",children:zT&&zT.map(c=>R.jsxs("div",{children:[R.jsx("input",{type:"checkbox",id:c.id,onChange:()=>a(c.id)}),R.jsx("label",{className:"pl-2",htmlFor:c.id,children:c.name})]},c.id))})]}),R.jsx("button",{type:"submit",className:"bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700",children:"Asignar"})]})]})};function BT(){return R.jsx(R.Fragment,{children:R.jsx(Rk,{})})}const Ck=[{title:"F1315",slug:"f1315"},{title:"Eficiencia",slug:"eficence"}];function xk({item:i}){return R.jsx(Rg,{to:`/picado/${i.slug}`,children:R.jsx("button",{className:"button",children:i.title})})}const Nk=()=>R.jsxs("div",{className:"flex flex-col items-center p-4 space-y-6 md:space-y-8",children:[R.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:Ck.map((i,e)=>R.jsx(xk,{item:i},e))}),R.jsx("div",{className:"w-full max-w-4xl",children:R.jsx(Ig,{})})]}),FT=()=>{const i=[{date:"2025-07-24",machine:"F1315",horometroStart:120,horometroEnd:180,reference:"REF-001",majorStops:"No fuel for 30 min",observations:"Normal operation",assignedHours:8,totalHours:6},{date:"2025-07-24",machine:"F1400",horometroStart:100,horometroEnd:160,reference:"REF-002",majorStops:"Broken belt (1h)",observations:"Repair completed",assignedHours:8,totalHours:7},{date:"2025-07-23",machine:"F1200",horometroStart:50,horometroEnd:110,reference:"REF-003",majorStops:"Operator late",observations:"Started 1h late",assignedHours:8,totalHours:5}];return R.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg overflow-x-auto",children:[R.jsx("h2",{className:"text-xl font-bold mb-4",children:"Eficencias"}),R.jsxs("table",{className:"min-w-full border border-gray-300 text-sm text-left",children:[R.jsx("thead",{className:"backgroundForm text-white",children:R.jsxs("tr",{children:[R.jsx("th",{className:"px-3 py-2 border",children:"Fecha"}),R.jsx("th",{className:"px-3 py-2 border",children:"Maquina"}),R.jsx("th",{className:"px-3 py-2 border",children:"Horometro inicial"}),R.jsx("th",{className:"px-3 py-2 border",children:"Horomerto final"}),R.jsx("th",{className:"px-3 py-2 border",children:"Referencia"}),R.jsx("th",{className:"px-3 py-2 border",children:"Paradas mayores"}),R.jsx("th",{className:"px-3 py-2 border",children:"Observaciones"}),R.jsx("th",{className:"px-3 py-2 border",children:"Horas asignadas"}),R.jsx("th",{className:"px-3 py-2 border",children:"Total horas"}),R.jsx("th",{className:"px-3 py-2 border",children:"Eficiencia en horas"})]})}),R.jsx("tbody",{children:i.map((e,t)=>R.jsxs("tr",{className:"hover:bg-gray-100",children:[R.jsx("td",{className:"px-3 py-2 border",children:e.date}),R.jsx("td",{className:"px-3 py-2 border",children:e.machine}),R.jsx("td",{className:"px-3 py-2 border",children:e.horometroStart}),R.jsx("td",{className:"px-3 py-2 border",children:e.horometroEnd}),R.jsx("td",{className:"px-3 py-2 border",children:e.reference}),R.jsx("td",{className:"px-3 py-2 border",children:e.majorStops}),R.jsx("td",{className:"px-3 py-2 border",children:e.observations}),R.jsx("td",{className:"px-3 py-2 border",children:e.assignedHours}),R.jsx("td",{className:"px-3 py-2 border",children:e.totalHours}),R.jsx("td",{className:"px-3 py-2 border",children:e.totalHours})]},t))})]})]})},Ok=[{title:"Operarios",subtitle:"Gestión de tareas y seguimiento de operarios",url:"/picado"},{title:"Supervisores",subtitle:"Supervisión y control de actividades",url:"/supervisor"},{title:"Datos",subtitle:"Visualización y exportación de registros",url:"/data"},{title:"Configuracion",subtitle:"Ajustes del sistema y parámetros de operación",url:"/configurations"}],HT=Hg(Bo),Dk=Ok,Pk=({openMenu:i})=>{const[e,t]=ae.useState({user:null,photoURL:null}),r=vf();ae.useEffect(()=>{const l=V1(HT,c=>{t(c?{user:c.displayName||c.email||c.uid,photoURL:c.photoURL||null}:{user:null,photoURL:null})});return()=>{l()}},[]);const a=()=>{Gx(HT).then(()=>{console.log("Sesion cerrada correctamente"),r("/")}).catch(l=>{console.log(l)})};return R.jsx(R.Fragment,{children:R.jsxs("div",{id:"menu",className:`bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed top-0 h-screen overflow-y-scroll transition-transform duration-300 ease-in-out  ${i?"translate-x-0":"translate-x-1"} right-0`,children:[R.jsx("div",{id:"logo",className:"my-4 px-6",children:R.jsxs("h1",{className:"text-lg md:text-2xl font-bold text-white",children:["El Caballo",R.jsx("span",{className:"text-blue-500",children:"S.A"}),"."]})}),R.jsxs("div",{id:"profile",className:"px-6 py-10",children:[R.jsx("p",{className:"text-slate-500",children:"Bienvenido,"}),R.jsxs("a",{href:"#",className:"inline-flex space-x-2 items-center",children:[R.jsx("span",{children:e.photoURL?R.jsx("img",{className:"rounded-full w-full h-auto",src:e.photoURL,alt:""}):R.jsx("div",{children:"Sin foto"})}),R.jsx("span",{className:"text-sm md:text-base font-bold",children:e.user?R.jsx("p",{children:e.user}):R.jsx("p",{children:"No hay usuario autenticado"})})]})]}),R.jsx("div",{className:"flex justify-center items-center pb-5",children:R.jsx("button",{onClick:a,className:"bg-red-600 w-full rounded-2xl mx-5 hover:bg-white/8 cursor-pointer",children:"Salir"})}),R.jsx("div",{id:"nav",className:"w-full px-6",children:Dk.map((l,c)=>R.jsx(Rg,{to:l.url,className:"w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150",children:R.jsxs("div",{className:"flex flex-col",children:[R.jsx("span",{className:"text-lg font-bold leading-5 text-white",children:l.title}),R.jsx("span",{className:"text-sm text-white/50 hidden md:block",children:l.subtitle})]})},c))})]})})};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const kk={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Mk(i,e,t){return(e=Lk(e))in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function qT(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable})),t.push.apply(t,r)}return t}function te(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?qT(Object(t),!0).forEach(function(r){Mk(i,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):qT(Object(t)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(t,r))})}return i}function Vk(i,e){if(typeof i!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var r=t.call(i,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function Lk(i){var e=Vk(i,"string");return typeof e=="symbol"?e:e+""}const GT=()=>{};let by={},PS={},kS=null,MS={mark:GT,measure:GT};try{typeof window<"u"&&(by=window),typeof document<"u"&&(PS=document),typeof MutationObserver<"u"&&(kS=MutationObserver),typeof performance<"u"&&(MS=performance)}catch{}const{userAgent:$T=""}=by.navigator||{},cs=by,st=PS,KT=kS,Ah=MS;cs.document;const hr=!!st.documentElement&&!!st.head&&typeof st.addEventListener=="function"&&typeof st.createElement=="function",VS=~$T.indexOf("MSIE")||~$T.indexOf("Trident/");var Uk=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,jk=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,LS={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},zk={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},US=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],rn="classic",jf="duotone",Bk="sharp",Fk="sharp-duotone",jS=[rn,jf,Bk,Fk],Hk={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},qk={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Gk=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),$k={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Kk=["fak","fa-kit","fakd","fa-kit-duotone"],YT={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Yk=["kit"],Qk={kit:{"fa-kit":"fak"}},Xk=["fak","fakd"],Wk={kit:{fak:"fa-kit"}},QT={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Sh={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Jk=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Zk=["fak","fa-kit","fakd","fa-kit-duotone"],eM={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},tM={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},nM={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Jp={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},iM=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Zp=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Jk,...iM],rM=["solid","regular","light","thin","duotone","brands"],zS=[1,2,3,4,5,6,7,8,9,10],sM=zS.concat([11,12,13,14,15,16,17,18,19,20]),aM=[...Object.keys(nM),...rM,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Sh.GROUP,Sh.SWAP_OPACITY,Sh.PRIMARY,Sh.SECONDARY].concat(zS.map(i=>"".concat(i,"x"))).concat(sM.map(i=>"w-".concat(i))),oM={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const or="___FONT_AWESOME___",eg=16,BS="fa",FS="svg-inline--fa",oa="data-fa-i2svg",tg="data-fa-pseudo-element",lM="data-fa-pseudo-element-pending",Ay="data-prefix",Sy="data-icon",XT="fontawesome-i2svg",uM="async",cM=["HTML","HEAD","STYLE","SCRIPT"],HS=(()=>{try{return!0}catch{return!1}})();function Fu(i){return new Proxy(i,{get(e,t){return t in e?e[t]:e[rn]}})}const qS=te({},LS);qS[rn]=te(te(te(te({},{"fa-duotone":"duotone"}),LS[rn]),YT.kit),YT["kit-duotone"]);const hM=Fu(qS),ng=te({},$k);ng[rn]=te(te(te(te({},{duotone:"fad"}),ng[rn]),QT.kit),QT["kit-duotone"]);const WT=Fu(ng),ig=te({},Jp);ig[rn]=te(te({},ig[rn]),Wk.kit);const wy=Fu(ig),rg=te({},tM);rg[rn]=te(te({},rg[rn]),Qk.kit);Fu(rg);const fM=Uk,GS="fa-layers-text",dM=jk,mM=te({},Hk);Fu(mM);const pM=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],hp=zk,gM=[...Yk,...aM],pu=cs.FontAwesomeConfig||{};function yM(i){var e=st.querySelector("script["+i+"]");if(e)return e.getAttribute(i)}function vM(i){return i===""?!0:i==="false"?!1:i==="true"?!0:i}st&&typeof st.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,r]=e;const a=vM(yM(t));a!=null&&(pu[r]=a)});const $S={styleDefault:"solid",familyDefault:rn,cssPrefix:BS,replacementClass:FS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};pu.familyPrefix&&(pu.cssPrefix=pu.familyPrefix);const ko=te(te({},$S),pu);ko.autoReplaceSvg||(ko.observeMutations=!1);const de={};Object.keys($S).forEach(i=>{Object.defineProperty(de,i,{enumerable:!0,set:function(e){ko[i]=e,gu.forEach(t=>t(de))},get:function(){return ko[i]}})});Object.defineProperty(de,"familyPrefix",{enumerable:!0,set:function(i){ko.cssPrefix=i,gu.forEach(e=>e(de))},get:function(){return ko.cssPrefix}});cs.FontAwesomeConfig=de;const gu=[];function _M(i){return gu.push(i),()=>{gu.splice(gu.indexOf(i),1)}}const Fr=eg,mi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function EM(i){if(!i||!hr)return;const e=st.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=i;const t=st.head.childNodes;let r=null;for(let a=t.length-1;a>-1;a--){const l=t[a],c=(l.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(c)>-1&&(r=l)}return st.head.insertBefore(e,r),i}const TM="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Nu(){let i=12,e="";for(;i-- >0;)e+=TM[Math.random()*62|0];return e}function $o(i){const e=[];for(let t=(i||[]).length>>>0;t--;)e[t]=i[t];return e}function Iy(i){return i.classList?$o(i.classList):(i.getAttribute("class")||"").split(" ").filter(e=>e)}function KS(i){return"".concat(i).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bM(i){return Object.keys(i||{}).reduce((e,t)=>e+"".concat(t,'="').concat(KS(i[t]),'" '),"").trim()}function zf(i){return Object.keys(i||{}).reduce((e,t)=>e+"".concat(t,": ").concat(i[t].trim(),";"),"")}function Ry(i){return i.size!==mi.size||i.x!==mi.x||i.y!==mi.y||i.rotate!==mi.rotate||i.flipX||i.flipY}function AM(i){let{transform:e,containerWidth:t,iconWidth:r}=i;const a={transform:"translate(".concat(t/2," 256)")},l="translate(".concat(e.x*32,", ").concat(e.y*32,") "),c="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),m="rotate(".concat(e.rotate," 0 0)"),p={transform:"".concat(l," ").concat(c," ").concat(m)},g={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:p,path:g}}function SM(i){let{transform:e,width:t=eg,height:r=eg,startCentered:a=!1}=i,l="";return a&&VS?l+="translate(".concat(e.x/Fr-t/2,"em, ").concat(e.y/Fr-r/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Fr,"em), calc(-50% + ").concat(e.y/Fr,"em)) "):l+="translate(".concat(e.x/Fr,"em, ").concat(e.y/Fr,"em) "),l+="scale(".concat(e.size/Fr*(e.flipX?-1:1),", ").concat(e.size/Fr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var wM=`:root, :host {
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
}`;function YS(){const i=BS,e=FS,t=de.cssPrefix,r=de.replacementClass;let a=wM;if(t!==i||r!==e){const l=new RegExp("\\.".concat(i,"\\-"),"g"),c=new RegExp("\\--".concat(i,"\\-"),"g"),m=new RegExp("\\.".concat(e),"g");a=a.replace(l,".".concat(t,"-")).replace(c,"--".concat(t,"-")).replace(m,".".concat(r))}return a}let JT=!1;function fp(){de.autoAddCss&&!JT&&(EM(YS()),JT=!0)}var IM={mixout(){return{dom:{css:YS,insertCss:fp}}},hooks(){return{beforeDOMElementCreation(){fp()},beforeI2svg(){fp()}}}};const lr=cs||{};lr[or]||(lr[or]={});lr[or].styles||(lr[or].styles={});lr[or].hooks||(lr[or].hooks={});lr[or].shims||(lr[or].shims=[]);var pi=lr[or];const QS=[],XS=function(){st.removeEventListener("DOMContentLoaded",XS),of=1,QS.map(i=>i())};let of=!1;hr&&(of=(st.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(st.readyState),of||st.addEventListener("DOMContentLoaded",XS));function RM(i){hr&&(of?setTimeout(i,0):QS.push(i))}function Hu(i){const{tag:e,attributes:t={},children:r=[]}=i;return typeof i=="string"?KS(i):"<".concat(e," ").concat(bM(t),">").concat(r.map(Hu).join(""),"</").concat(e,">")}function ZT(i,e,t){if(i&&i[e]&&i[e][t])return{prefix:e,iconName:t,icon:i[e][t]}}var dp=function(e,t,r,a){var l=Object.keys(e),c=l.length,m=t,p,g,E;for(r===void 0?(p=1,E=e[l[0]]):(p=0,E=r);p<c;p++)g=l[p],E=m(E,e[g],g,e);return E};function CM(i){const e=[];let t=0;const r=i.length;for(;t<r;){const a=i.charCodeAt(t++);if(a>=55296&&a<=56319&&t<r){const l=i.charCodeAt(t++);(l&64512)==56320?e.push(((a&1023)<<10)+(l&1023)+65536):(e.push(a),t--)}else e.push(a)}return e}function sg(i){const e=CM(i);return e.length===1?e[0].toString(16):null}function xM(i,e){const t=i.length;let r=i.charCodeAt(e),a;return r>=55296&&r<=56319&&t>e+1&&(a=i.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function eb(i){return Object.keys(i).reduce((e,t)=>{const r=i[t];return!!r.icon?e[r.iconName]=r.icon:e[t]=r,e},{})}function ag(i,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=t,a=eb(e);typeof pi.hooks.addPack=="function"&&!r?pi.hooks.addPack(i,eb(e)):pi.styles[i]=te(te({},pi.styles[i]||{}),a),i==="fas"&&ag("fa",e)}const{styles:Ou,shims:NM}=pi,WS=Object.keys(wy),OM=WS.reduce((i,e)=>(i[e]=Object.keys(wy[e]),i),{});let Cy=null,JS={},ZS={},ew={},tw={},nw={};function DM(i){return~gM.indexOf(i)}function PM(i,e){const t=e.split("-"),r=t[0],a=t.slice(1).join("-");return r===i&&a!==""&&!DM(a)?a:null}const iw=()=>{const i=r=>dp(Ou,(a,l,c)=>(a[c]=dp(l,r,{}),a),{});JS=i((r,a,l)=>(a[3]&&(r[a[3]]=l),a[2]&&a[2].filter(m=>typeof m=="number").forEach(m=>{r[m.toString(16)]=l}),r)),ZS=i((r,a,l)=>(r[l]=l,a[2]&&a[2].filter(m=>typeof m=="string").forEach(m=>{r[m]=l}),r)),nw=i((r,a,l)=>{const c=a[2];return r[l]=l,c.forEach(m=>{r[m]=l}),r});const e="far"in Ou||de.autoFetchSvg,t=dp(NM,(r,a)=>{const l=a[0];let c=a[1];const m=a[2];return c==="far"&&!e&&(c="fas"),typeof l=="string"&&(r.names[l]={prefix:c,iconName:m}),typeof l=="number"&&(r.unicodes[l.toString(16)]={prefix:c,iconName:m}),r},{names:{},unicodes:{}});ew=t.names,tw=t.unicodes,Cy=Bf(de.styleDefault,{family:de.familyDefault})};_M(i=>{Cy=Bf(i.styleDefault,{family:de.familyDefault})});iw();function xy(i,e){return(JS[i]||{})[e]}function kM(i,e){return(ZS[i]||{})[e]}function na(i,e){return(nw[i]||{})[e]}function rw(i){return ew[i]||{prefix:null,iconName:null}}function MM(i){const e=tw[i],t=xy("fas",i);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function hs(){return Cy}const sw=()=>({prefix:null,iconName:null,rest:[]});function VM(i){let e=rn;const t=WS.reduce((r,a)=>(r[a]="".concat(de.cssPrefix,"-").concat(a),r),{});return jS.forEach(r=>{(i.includes(t[r])||i.some(a=>OM[r].includes(a)))&&(e=r)}),e}function Bf(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=rn}=e,r=hM[t][i];if(t===jf&&!i)return"fad";const a=WT[t][i]||WT[t][r],l=i in pi.styles?i:null;return a||l||null}function LM(i){let e=[],t=null;return i.forEach(r=>{const a=PM(de.cssPrefix,r);a?t=a:r&&e.push(r)}),{iconName:t,rest:e}}function tb(i){return i.sort().filter((e,t,r)=>r.indexOf(e)===t)}function Ff(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e;let r=null;const a=Zp.concat(Zk),l=tb(i.filter(b=>a.includes(b))),c=tb(i.filter(b=>!Zp.includes(b))),m=l.filter(b=>(r=b,!US.includes(b))),[p=null]=m,g=VM(l),E=te(te({},LM(c)),{},{prefix:Bf(p,{family:g})});return te(te(te({},E),BM({values:i,family:g,styles:Ou,config:de,canonical:E,givenPrefix:r})),UM(t,r,E))}function UM(i,e,t){let{prefix:r,iconName:a}=t;if(i||!r||!a)return{prefix:r,iconName:a};const l=e==="fa"?rw(a):{},c=na(r,a);return a=l.iconName||c||a,r=l.prefix||r,r==="far"&&!Ou.far&&Ou.fas&&!de.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const jM=jS.filter(i=>i!==rn||i!==jf),zM=Object.keys(Jp).filter(i=>i!==rn).map(i=>Object.keys(Jp[i])).flat();function BM(i){const{values:e,family:t,canonical:r,givenPrefix:a="",styles:l={},config:c={}}=i,m=t===jf,p=e.includes("fa-duotone")||e.includes("fad"),g=c.familyDefault==="duotone",E=r.prefix==="fad"||r.prefix==="fa-duotone";if(!m&&(p||g||E)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&jM.includes(t)&&(Object.keys(l).find(S=>zM.includes(S))||c.autoFetchSvg)){const S=Gk.get(t).defaultShortPrefixId;r.prefix=S,r.iconName=na(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=hs()||"fas"),r}class FM{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];const a=t.reduce(this._pullDefinitions,{});Object.keys(a).forEach(l=>{this.definitions[l]=te(te({},this.definitions[l]||{}),a[l]),ag(l,a[l]);const c=wy[rn][l];c&&ag(c,a[l]),iw()})}reset(){this.definitions={}}_pullDefinitions(e,t){const r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(a=>{const{prefix:l,iconName:c,icon:m}=r[a],p=m[2];e[l]||(e[l]={}),p.length>0&&p.forEach(g=>{typeof g=="string"&&(e[l][g]=m)}),e[l][c]=m}),e}}let nb=[],vo={};const bo={},HM=Object.keys(bo);function qM(i,e){let{mixoutsTo:t}=e;return nb=i,vo={},Object.keys(bo).forEach(r=>{HM.indexOf(r)===-1&&delete bo[r]}),nb.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(l=>{typeof a[l]=="function"&&(t[l]=a[l]),typeof a[l]=="object"&&Object.keys(a[l]).forEach(c=>{t[l]||(t[l]={}),t[l][c]=a[l][c]})}),r.hooks){const l=r.hooks();Object.keys(l).forEach(c=>{vo[c]||(vo[c]=[]),vo[c].push(l[c])})}r.provides&&r.provides(bo)}),t}function og(i,e){for(var t=arguments.length,r=new Array(t>2?t-2:0),a=2;a<t;a++)r[a-2]=arguments[a];return(vo[i]||[]).forEach(c=>{e=c.apply(null,[e,...r])}),e}function la(i){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];(vo[i]||[]).forEach(l=>{l.apply(null,t)})}function fs(){const i=arguments[0],e=Array.prototype.slice.call(arguments,1);return bo[i]?bo[i].apply(null,e):void 0}function lg(i){i.prefix==="fa"&&(i.prefix="fas");let{iconName:e}=i;const t=i.prefix||hs();if(e)return e=na(t,e)||e,ZT(aw.definitions,t,e)||ZT(pi.styles,t,e)}const aw=new FM,GM=()=>{de.autoReplaceSvg=!1,de.observeMutations=!1,la("noAuto")},$M={i2svg:function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return hr?(la("beforeI2svg",i),fs("pseudoElements2svg",i),fs("i2svg",i)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=i;de.autoReplaceSvg===!1&&(de.autoReplaceSvg=!0),de.observeMutations=!0,RM(()=>{YM({autoReplaceSvgRoot:e}),la("watch",i)})}},KM={icon:i=>{if(i===null)return null;if(typeof i=="object"&&i.prefix&&i.iconName)return{prefix:i.prefix,iconName:na(i.prefix,i.iconName)||i.iconName};if(Array.isArray(i)&&i.length===2){const e=i[1].indexOf("fa-")===0?i[1].slice(3):i[1],t=Bf(i[0]);return{prefix:t,iconName:na(t,e)||e}}if(typeof i=="string"&&(i.indexOf("".concat(de.cssPrefix,"-"))>-1||i.match(fM))){const e=Ff(i.split(" "),{skipLookups:!0});return{prefix:e.prefix||hs(),iconName:na(e.prefix,e.iconName)||e.iconName}}if(typeof i=="string"){const e=hs();return{prefix:e,iconName:na(e,i)||i}}}},Sn={noAuto:GM,config:de,dom:$M,parse:KM,library:aw,findIconDefinition:lg,toHtml:Hu},YM=function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=st}=i;(Object.keys(pi.styles).length>0||de.autoFetchSvg)&&hr&&de.autoReplaceSvg&&Sn.dom.i2svg({node:e})};function Hf(i,e){return Object.defineProperty(i,"abstract",{get:e}),Object.defineProperty(i,"html",{get:function(){return i.abstract.map(t=>Hu(t))}}),Object.defineProperty(i,"node",{get:function(){if(!hr)return;const t=st.createElement("div");return t.innerHTML=i.html,t.children}}),i}function QM(i){let{children:e,main:t,mask:r,attributes:a,styles:l,transform:c}=i;if(Ry(c)&&t.found&&!r.found){const{width:m,height:p}=t,g={x:m/p/2,y:.5};a.style=zf(te(te({},l),{},{"transform-origin":"".concat(g.x+c.x/16,"em ").concat(g.y+c.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function XM(i){let{prefix:e,iconName:t,children:r,attributes:a,symbol:l}=i;const c=l===!0?"".concat(e,"-").concat(de.cssPrefix,"-").concat(t):l;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:te(te({},a),{},{id:c}),children:r}]}]}function Ny(i){const{icons:{main:e,mask:t},prefix:r,iconName:a,transform:l,symbol:c,title:m,maskId:p,titleId:g,extra:E,watchable:b=!1}=i,{width:S,height:j}=t.found?t:e,G=Xk.includes(r),W=[de.replacementClass,a?"".concat(de.cssPrefix,"-").concat(a):""].filter(ce=>E.classes.indexOf(ce)===-1).filter(ce=>ce!==""||!!ce).concat(E.classes).join(" ");let F={children:[],attributes:te(te({},E.attributes),{},{"data-prefix":r,"data-icon":a,class:W,role:E.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(j)})};const ee=G&&!~E.classes.indexOf("fa-fw")?{width:"".concat(S/j*16*.0625,"em")}:{};b&&(F.attributes[oa]=""),m&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(g||Nu())},children:[m]}),delete F.attributes.title);const ie=te(te({},F),{},{prefix:r,iconName:a,main:e,mask:t,maskId:p,transform:l,symbol:c,styles:te(te({},ee),E.styles)}),{children:ne,attributes:fe}=t.found&&e.found?fs("generateAbstractMask",ie)||{children:[],attributes:{}}:fs("generateAbstractIcon",ie)||{children:[],attributes:{}};return ie.children=ne,ie.attributes=fe,c?XM(ie):QM(ie)}function ib(i){const{content:e,width:t,height:r,transform:a,title:l,extra:c,watchable:m=!1}=i,p=te(te(te({},c.attributes),l?{title:l}:{}),{},{class:c.classes.join(" ")});m&&(p[oa]="");const g=te({},c.styles);Ry(a)&&(g.transform=SM({transform:a,startCentered:!0,width:t,height:r}),g["-webkit-transform"]=g.transform);const E=zf(g);E.length>0&&(p.style=E);const b=[];return b.push({tag:"span",attributes:p,children:[e]}),l&&b.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),b}function WM(i){const{content:e,title:t,extra:r}=i,a=te(te(te({},r.attributes),t?{title:t}:{}),{},{class:r.classes.join(" ")}),l=zf(r.styles);l.length>0&&(a.style=l);const c=[];return c.push({tag:"span",attributes:a,children:[e]}),t&&c.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),c}const{styles:mp}=pi;function ug(i){const e=i[0],t=i[1],[r]=i.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(de.cssPrefix,"-").concat(hp.GROUP)},children:[{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(hp.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(hp.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:t,icon:a}}const JM={found:!1,width:512,height:512};function ZM(i,e){!HS&&!de.showMissingIcons&&i&&console.error('Icon with name "'.concat(i,'" and prefix "').concat(e,'" is missing.'))}function cg(i,e){let t=e;return e==="fa"&&de.styleDefault!==null&&(e=hs()),new Promise((r,a)=>{if(t==="fa"){const l=rw(i)||{};i=l.iconName||i,e=l.prefix||e}if(i&&e&&mp[e]&&mp[e][i]){const l=mp[e][i];return r(ug(l))}ZM(i,e),r(te(te({},JM),{},{icon:de.showMissingIcons&&i?fs("missingIconAbstract")||{}:{}}))})}const rb=()=>{},hg=de.measurePerformance&&Ah&&Ah.mark&&Ah.measure?Ah:{mark:rb,measure:rb},lu='FA "6.7.2"',e4=i=>(hg.mark("".concat(lu," ").concat(i," begins")),()=>ow(i)),ow=i=>{hg.mark("".concat(lu," ").concat(i," ends")),hg.measure("".concat(lu," ").concat(i),"".concat(lu," ").concat(i," begins"),"".concat(lu," ").concat(i," ends"))};var Oy={begin:e4,end:ow};const Vh=()=>{};function sb(i){return typeof(i.getAttribute?i.getAttribute(oa):null)=="string"}function t4(i){const e=i.getAttribute?i.getAttribute(Ay):null,t=i.getAttribute?i.getAttribute(Sy):null;return e&&t}function n4(i){return i&&i.classList&&i.classList.contains&&i.classList.contains(de.replacementClass)}function i4(){return de.autoReplaceSvg===!0?Lh.replace:Lh[de.autoReplaceSvg]||Lh.replace}function r4(i){return st.createElementNS("http://www.w3.org/2000/svg",i)}function s4(i){return st.createElement(i)}function lw(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=i.tag==="svg"?r4:s4}=e;if(typeof i=="string")return st.createTextNode(i);const r=t(i.tag);return Object.keys(i.attributes||[]).forEach(function(l){r.setAttribute(l,i.attributes[l])}),(i.children||[]).forEach(function(l){r.appendChild(lw(l,{ceFn:t}))}),r}function a4(i){let e=" ".concat(i.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Lh={replace:function(i){const e=i[0];if(e.parentNode)if(i[1].forEach(t=>{e.parentNode.insertBefore(lw(t),e)}),e.getAttribute(oa)===null&&de.keepOriginalSource){let t=st.createComment(a4(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(i){const e=i[0],t=i[1];if(~Iy(e).indexOf(de.replacementClass))return Lh.replace(i);const r=new RegExp("".concat(de.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const l=t[0].attributes.class.split(" ").reduce((c,m)=>(m===de.replacementClass||m.match(r)?c.toSvg.push(m):c.toNode.push(m),c),{toNode:[],toSvg:[]});t[0].attributes.class=l.toSvg.join(" "),l.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",l.toNode.join(" "))}const a=t.map(l=>Hu(l)).join(`
`);e.setAttribute(oa,""),e.innerHTML=a}};function ab(i){i()}function uw(i,e){const t=typeof e=="function"?e:Vh;if(i.length===0)t();else{let r=ab;de.mutateApproach===uM&&(r=cs.requestAnimationFrame||ab),r(()=>{const a=i4(),l=Oy.begin("mutate");i.map(a),l(),t()})}}let Dy=!1;function cw(){Dy=!0}function fg(){Dy=!1}let lf=null;function ob(i){if(!KT||!de.observeMutations)return;const{treeCallback:e=Vh,nodeCallback:t=Vh,pseudoElementsCallback:r=Vh,observeMutationsRoot:a=st}=i;lf=new KT(l=>{if(Dy)return;const c=hs();$o(l).forEach(m=>{if(m.type==="childList"&&m.addedNodes.length>0&&!sb(m.addedNodes[0])&&(de.searchPseudoElements&&r(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&de.searchPseudoElements&&r(m.target.parentNode),m.type==="attributes"&&sb(m.target)&&~pM.indexOf(m.attributeName))if(m.attributeName==="class"&&t4(m.target)){const{prefix:p,iconName:g}=Ff(Iy(m.target));m.target.setAttribute(Ay,p||c),g&&m.target.setAttribute(Sy,g)}else n4(m.target)&&t(m.target)})}),hr&&lf.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function o4(){lf&&lf.disconnect()}function l4(i){const e=i.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((r,a)=>{const l=a.split(":"),c=l[0],m=l.slice(1);return c&&m.length>0&&(r[c]=m.join(":").trim()),r},{})),t}function u4(i){const e=i.getAttribute("data-prefix"),t=i.getAttribute("data-icon"),r=i.innerText!==void 0?i.innerText.trim():"";let a=Ff(Iy(i));return a.prefix||(a.prefix=hs()),e&&t&&(a.prefix=e,a.iconName=t),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=kM(a.prefix,i.innerText)||xy(a.prefix,sg(i.innerText))),!a.iconName&&de.autoFetchSvg&&i.firstChild&&i.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=i.firstChild.data)),a}function c4(i){const e=$o(i.attributes).reduce((a,l)=>(a.name!=="class"&&a.name!=="style"&&(a[l.name]=l.value),a),{}),t=i.getAttribute("title"),r=i.getAttribute("data-fa-title-id");return de.autoA11y&&(t?e["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(r||Nu()):(e["aria-hidden"]="true",e.focusable="false")),e}function h4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:mi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function lb(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:r,rest:a}=u4(i),l=c4(i),c=og("parseNodeAttributes",{},i);let m=e.styleParser?l4(i):[];return te({iconName:t,title:i.getAttribute("title"),titleId:i.getAttribute("data-fa-title-id"),prefix:r,transform:mi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:m,attributes:l}},c)}const{styles:f4}=pi;function hw(i){const e=de.autoReplaceSvg==="nest"?lb(i,{styleParser:!1}):lb(i);return~e.extra.classes.indexOf(GS)?fs("generateLayersText",i,e):fs("generateSvgReplacementMutation",i,e)}function d4(){return[...Kk,...Zp]}function ub(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!hr)return Promise.resolve();const t=st.documentElement.classList,r=E=>t.add("".concat(XT,"-").concat(E)),a=E=>t.remove("".concat(XT,"-").concat(E)),l=de.autoFetchSvg?d4():US.concat(Object.keys(f4));l.includes("fa")||l.push("fa");const c=[".".concat(GS,":not([").concat(oa,"])")].concat(l.map(E=>".".concat(E,":not([").concat(oa,"])"))).join(", ");if(c.length===0)return Promise.resolve();let m=[];try{m=$o(i.querySelectorAll(c))}catch{}if(m.length>0)r("pending"),a("complete");else return Promise.resolve();const p=Oy.begin("onTree"),g=m.reduce((E,b)=>{try{const S=hw(b);S&&E.push(S)}catch(S){HS||S.name==="MissingIcon"&&console.error(S)}return E},[]);return new Promise((E,b)=>{Promise.all(g).then(S=>{uw(S,()=>{r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),p(),E()})}).catch(S=>{p(),b(S)})})}function m4(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;hw(i).then(t=>{t&&uw([t],e)})}function p4(i){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:lg(e||{});let{mask:a}=t;return a&&(a=(a||{}).icon?a:lg(a||{})),i(r,te(te({},t),{},{mask:a}))}}const g4=function(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=mi,symbol:r=!1,mask:a=null,maskId:l=null,title:c=null,titleId:m=null,classes:p=[],attributes:g={},styles:E={}}=e;if(!i)return;const{prefix:b,iconName:S,icon:j}=i;return Hf(te({type:"icon"},i),()=>(la("beforeDOMElementCreation",{iconDefinition:i,params:e}),de.autoA11y&&(c?g["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(m||Nu()):(g["aria-hidden"]="true",g.focusable="false")),Ny({icons:{main:ug(j),mask:a?ug(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:S,transform:te(te({},mi),t),symbol:r,title:c,maskId:l,titleId:m,extra:{attributes:g,styles:E,classes:p}})))};var y4={mixout(){return{icon:p4(g4)}},hooks(){return{mutationObserverCallbacks(i){return i.treeCallback=ub,i.nodeCallback=m4,i}}},provides(i){i.i2svg=function(e){const{node:t=st,callback:r=()=>{}}=e;return ub(t,r)},i.generateSvgReplacementMutation=function(e,t){const{iconName:r,title:a,titleId:l,prefix:c,transform:m,symbol:p,mask:g,maskId:E,extra:b}=t;return new Promise((S,j)=>{Promise.all([cg(r,c),g.iconName?cg(g.iconName,g.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(G=>{let[W,F]=G;S([e,Ny({icons:{main:W,mask:F},prefix:c,iconName:r,transform:m,symbol:p,maskId:E,title:a,titleId:l,extra:b,watchable:!0})])}).catch(j)})},i.generateAbstractIcon=function(e){let{children:t,attributes:r,main:a,transform:l,styles:c}=e;const m=zf(c);m.length>0&&(r.style=m);let p;return Ry(l)&&(p=fs("generateAbstractTransformGrouping",{main:a,transform:l,containerWidth:a.width,iconWidth:a.width})),t.push(p||a.icon),{children:t,attributes:r}}}},v4={mixout(){return{layer(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return Hf({type:"layer"},()=>{la("beforeDOMElementCreation",{assembler:i,params:e});let r=[];return i(a=>{Array.isArray(a)?a.map(l=>{r=r.concat(l.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(de.cssPrefix,"-layers"),...t].join(" ")},children:r}]})}}}},_4={mixout(){return{counter(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:r=[],attributes:a={},styles:l={}}=e;return Hf({type:"counter",content:i},()=>(la("beforeDOMElementCreation",{content:i,params:e}),WM({content:i.toString(),title:t,extra:{attributes:a,styles:l,classes:["".concat(de.cssPrefix,"-layers-counter"),...r]}})))}}}},E4={mixout(){return{text(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=mi,title:r=null,classes:a=[],attributes:l={},styles:c={}}=e;return Hf({type:"text",content:i},()=>(la("beforeDOMElementCreation",{content:i,params:e}),ib({content:i,transform:te(te({},mi),t),title:r,extra:{attributes:l,styles:c,classes:["".concat(de.cssPrefix,"-layers-text"),...a]}})))}}},provides(i){i.generateLayersText=function(e,t){const{title:r,transform:a,extra:l}=t;let c=null,m=null;if(VS){const p=parseInt(getComputedStyle(e).fontSize,10),g=e.getBoundingClientRect();c=g.width/p,m=g.height/p}return de.autoA11y&&!r&&(l.attributes["aria-hidden"]="true"),Promise.resolve([e,ib({content:e.innerHTML,width:c,height:m,transform:a,title:r,extra:l,watchable:!0})])}}};const T4=new RegExp('"',"ug"),cb=[1105920,1112319],hb=te(te(te(te({},{FontAwesome:{normal:"fas",400:"fas"}}),qk),oM),eM),dg=Object.keys(hb).reduce((i,e)=>(i[e.toLowerCase()]=hb[e],i),{}),b4=Object.keys(dg).reduce((i,e)=>{const t=dg[e];return i[e]=t[900]||[...Object.entries(t)][0][1],i},{});function A4(i){const e=i.replace(T4,""),t=xM(e,0),r=t>=cb[0]&&t<=cb[1],a=e.length===2?e[0]===e[1]:!1;return{value:sg(a?e[0]:e),isSecondary:r||a}}function S4(i,e){const t=i.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),a=isNaN(r)?"normal":r;return(dg[t]||{})[a]||b4[t]}function fb(i,e){const t="".concat(lM).concat(e.replace(":","-"));return new Promise((r,a)=>{if(i.getAttribute(t)!==null)return r();const c=$o(i.children).filter(S=>S.getAttribute(tg)===e)[0],m=cs.getComputedStyle(i,e),p=m.getPropertyValue("font-family"),g=p.match(dM),E=m.getPropertyValue("font-weight"),b=m.getPropertyValue("content");if(c&&!g)return i.removeChild(c),r();if(g&&b!=="none"&&b!==""){const S=m.getPropertyValue("content");let j=S4(p,E);const{value:G,isSecondary:W}=A4(S),F=g[0].startsWith("FontAwesome");let ee=xy(j,G),ie=ee;if(F){const ne=MM(G);ne.iconName&&ne.prefix&&(ee=ne.iconName,j=ne.prefix)}if(ee&&!W&&(!c||c.getAttribute(Ay)!==j||c.getAttribute(Sy)!==ie)){i.setAttribute(t,ie),c&&i.removeChild(c);const ne=h4(),{extra:fe}=ne;fe.attributes[tg]=e,cg(ee,j).then(ce=>{const Ce=Ny(te(te({},ne),{},{icons:{main:ce,mask:sw()},prefix:j,iconName:ie,extra:fe,watchable:!0})),D=st.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?i.insertBefore(D,i.firstChild):i.appendChild(D),D.outerHTML=Ce.map(w=>Hu(w)).join(`
`),i.removeAttribute(t),r()}).catch(a)}else r()}else r()})}function w4(i){return Promise.all([fb(i,"::before"),fb(i,"::after")])}function I4(i){return i.parentNode!==document.head&&!~cM.indexOf(i.tagName.toUpperCase())&&!i.getAttribute(tg)&&(!i.parentNode||i.parentNode.tagName!=="svg")}function db(i){if(hr)return new Promise((e,t)=>{const r=$o(i.querySelectorAll("*")).filter(I4).map(w4),a=Oy.begin("searchPseudoElements");cw(),Promise.all(r).then(()=>{a(),fg(),e()}).catch(()=>{a(),fg(),t()})})}var R4={hooks(){return{mutationObserverCallbacks(i){return i.pseudoElementsCallback=db,i}}},provides(i){i.pseudoElements2svg=function(e){const{node:t=st}=e;de.searchPseudoElements&&db(t)}}};let mb=!1;var C4={mixout(){return{dom:{unwatch(){cw(),mb=!0}}}},hooks(){return{bootstrap(){ob(og("mutationObserverCallbacks",{}))},noAuto(){o4()},watch(i){const{observeMutationsRoot:e}=i;mb?fg():ob(og("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const pb=i=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return i.toLowerCase().split(" ").reduce((t,r)=>{const a=r.toLowerCase().split("-"),l=a[0];let c=a.slice(1).join("-");if(l&&c==="h")return t.flipX=!0,t;if(l&&c==="v")return t.flipY=!0,t;if(c=parseFloat(c),isNaN(c))return t;switch(l){case"grow":t.size=t.size+c;break;case"shrink":t.size=t.size-c;break;case"left":t.x=t.x-c;break;case"right":t.x=t.x+c;break;case"up":t.y=t.y-c;break;case"down":t.y=t.y+c;break;case"rotate":t.rotate=t.rotate+c;break}return t},e)};var x4={mixout(){return{parse:{transform:i=>pb(i)}}},hooks(){return{parseNodeAttributes(i,e){const t=e.getAttribute("data-fa-transform");return t&&(i.transform=pb(t)),i}}},provides(i){i.generateAbstractTransformGrouping=function(e){let{main:t,transform:r,containerWidth:a,iconWidth:l}=e;const c={transform:"translate(".concat(a/2," 256)")},m="translate(".concat(r.x*32,", ").concat(r.y*32,") "),p="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),g="rotate(".concat(r.rotate," 0 0)"),E={transform:"".concat(m," ").concat(p," ").concat(g)},b={transform:"translate(".concat(l/2*-1," -256)")},S={outer:c,inner:E,path:b};return{tag:"g",attributes:te({},S.outer),children:[{tag:"g",attributes:te({},S.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:te(te({},t.icon.attributes),S.path)}]}]}}}};const pp={x:0,y:0,width:"100%",height:"100%"};function gb(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return i.attributes&&(i.attributes.fill||e)&&(i.attributes.fill="black"),i}function N4(i){return i.tag==="g"?i.children:[i]}var O4={hooks(){return{parseNodeAttributes(i,e){const t=e.getAttribute("data-fa-mask"),r=t?Ff(t.split(" ").map(a=>a.trim())):sw();return r.prefix||(r.prefix=hs()),i.mask=r,i.maskId=e.getAttribute("data-fa-mask-id"),i}}},provides(i){i.generateAbstractMask=function(e){let{children:t,attributes:r,main:a,mask:l,maskId:c,transform:m}=e;const{width:p,icon:g}=a,{width:E,icon:b}=l,S=AM({transform:m,containerWidth:E,iconWidth:p}),j={tag:"rect",attributes:te(te({},pp),{},{fill:"white"})},G=g.children?{children:g.children.map(gb)}:{},W={tag:"g",attributes:te({},S.inner),children:[gb(te({tag:g.tag,attributes:te(te({},g.attributes),S.path)},G))]},F={tag:"g",attributes:te({},S.outer),children:[W]},ee="mask-".concat(c||Nu()),ie="clip-".concat(c||Nu()),ne={tag:"mask",attributes:te(te({},pp),{},{id:ee,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,F]},fe={tag:"defs",children:[{tag:"clipPath",attributes:{id:ie},children:N4(b)},ne]};return t.push(fe,{tag:"rect",attributes:te({fill:"currentColor","clip-path":"url(#".concat(ie,")"),mask:"url(#".concat(ee,")")},pp)}),{children:t,attributes:r}}}},D4={provides(i){let e=!1;cs.matchMedia&&(e=cs.matchMedia("(prefers-reduced-motion: reduce)").matches),i.missingIconAbstract=function(){const t=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:te(te({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const l=te(te({},a),{},{attributeName:"opacity"}),c={tag:"circle",attributes:te(te({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||c.children.push({tag:"animate",attributes:te(te({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:te(te({},l),{},{values:"1;0;1;1;0;1;"})}),t.push(c),t.push({tag:"path",attributes:te(te({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:te(te({},l),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:te(te({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:te(te({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},P4={hooks(){return{parseNodeAttributes(i,e){const t=e.getAttribute("data-fa-symbol"),r=t===null?!1:t===""?!0:t;return i.symbol=r,i}}}},k4=[IM,y4,v4,_4,E4,R4,C4,x4,O4,D4,P4];qM(k4,{mixoutsTo:Sn});Sn.noAuto;Sn.config;Sn.library;Sn.dom;const mg=Sn.parse;Sn.findIconDefinition;Sn.toHtml;const M4=Sn.icon;Sn.layer;Sn.text;Sn.counter;var gp={exports:{}},yp,yb;function V4(){if(yb)return yp;yb=1;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return yp=i,yp}var vp,vb;function L4(){if(vb)return vp;vb=1;var i=V4();function e(){}function t(){}return t.resetWarningCache=e,vp=function(){function r(c,m,p,g,E,b){if(b!==i){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}r.isRequired=r;function a(){return r}var l={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},vp}var _b;function U4(){return _b||(_b=1,gp.exports=L4()()),gp.exports}var j4=U4();const Le=Ub(j4);function Eb(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable})),t.push.apply(t,r)}return t}function di(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Eb(Object(t),!0).forEach(function(r){_o(i,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):Eb(Object(t)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(t,r))})}return i}function uf(i){"@babel/helpers - typeof";return uf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},uf(i)}function _o(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function z4(i,e){if(i==null)return{};var t={},r=Object.keys(i),a,l;for(l=0;l<r.length;l++)a=r[l],!(e.indexOf(a)>=0)&&(t[a]=i[a]);return t}function B4(i,e){if(i==null)return{};var t=z4(i,e),r,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(i);for(a=0;a<l.length;a++)r=l[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(i,r)&&(t[r]=i[r])}return t}function pg(i){return F4(i)||H4(i)||q4(i)||G4()}function F4(i){if(Array.isArray(i))return gg(i)}function H4(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function q4(i,e){if(i){if(typeof i=="string")return gg(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return gg(i,e)}}function gg(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=i[t];return r}function G4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $4(i){var e,t=i.beat,r=i.fade,a=i.beatFade,l=i.bounce,c=i.shake,m=i.flash,p=i.spin,g=i.spinPulse,E=i.spinReverse,b=i.pulse,S=i.fixedWidth,j=i.inverse,G=i.border,W=i.listItem,F=i.flip,ee=i.size,ie=i.rotation,ne=i.pull,fe=(e={"fa-beat":t,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":l,"fa-shake":c,"fa-flash":m,"fa-spin":p,"fa-spin-reverse":E,"fa-spin-pulse":g,"fa-pulse":b,"fa-fw":S,"fa-inverse":j,"fa-border":G,"fa-li":W,"fa-flip":F===!0,"fa-flip-horizontal":F==="horizontal"||F==="both","fa-flip-vertical":F==="vertical"||F==="both"},_o(e,"fa-".concat(ee),typeof ee<"u"&&ee!==null),_o(e,"fa-rotate-".concat(ie),typeof ie<"u"&&ie!==null&&ie!==0),_o(e,"fa-pull-".concat(ne),typeof ne<"u"&&ne!==null),_o(e,"fa-swap-opacity",i.swapOpacity),e);return Object.keys(fe).map(function(ce){return fe[ce]?ce:null}).filter(function(ce){return ce})}function K4(i){return i=i-0,i===i}function fw(i){return K4(i)?i:(i=i.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),i.substr(0,1).toLowerCase()+i.substr(1))}var Y4=["style"];function Q4(i){return i.charAt(0).toUpperCase()+i.slice(1)}function X4(i){return i.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r=t.indexOf(":"),a=fw(t.slice(0,r)),l=t.slice(r+1).trim();return a.startsWith("webkit")?e[Q4(a)]=l:e[a]=l,e},{})}function dw(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(p){return dw(i,p)}),a=Object.keys(e.attributes||{}).reduce(function(p,g){var E=e.attributes[g];switch(g){case"class":p.attrs.className=E,delete e.attributes.class;break;case"style":p.attrs.style=X4(E);break;default:g.indexOf("aria-")===0||g.indexOf("data-")===0?p.attrs[g.toLowerCase()]=E:p.attrs[fw(g)]=E}return p},{attrs:{}}),l=t.style,c=l===void 0?{}:l,m=B4(t,Y4);return a.attrs.style=di(di({},a.attrs.style),c),i.apply(void 0,[e.tag,di(di({},a.attrs),m)].concat(pg(r)))}var mw=!1;try{mw=!0}catch{}function W4(){if(!mw&&console&&typeof console.error=="function"){var i;(i=console).error.apply(i,arguments)}}function Tb(i){if(i&&uf(i)==="object"&&i.prefix&&i.iconName&&i.icon)return i;if(mg.icon)return mg.icon(i);if(i===null)return null;if(i&&uf(i)==="object"&&i.prefix&&i.iconName)return i;if(Array.isArray(i)&&i.length===2)return{prefix:i[0],iconName:i[1]};if(typeof i=="string")return{prefix:"fas",iconName:i}}function _p(i,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?_o({},i,e):{}}var bb={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Py=gf.forwardRef(function(i,e){var t=di(di({},bb),i),r=t.icon,a=t.mask,l=t.symbol,c=t.className,m=t.title,p=t.titleId,g=t.maskId,E=Tb(r),b=_p("classes",[].concat(pg($4(t)),pg((c||"").split(" ")))),S=_p("transform",typeof t.transform=="string"?mg.transform(t.transform):t.transform),j=_p("mask",Tb(a)),G=M4(E,di(di(di(di({},b),S),j),{},{symbol:l,title:m,titleId:p,maskId:g}));if(!G)return W4("Could not find icon",E),null;var W=G.abstract,F={ref:e};return Object.keys(t).forEach(function(ee){bb.hasOwnProperty(ee)||(F[ee]=t[ee])}),J4(W[0],F)});Py.displayName="FontAwesomeIcon";Py.propTypes={beat:Le.bool,border:Le.bool,beatFade:Le.bool,bounce:Le.bool,className:Le.string,fade:Le.bool,flash:Le.bool,mask:Le.oneOfType([Le.object,Le.array,Le.string]),maskId:Le.string,fixedWidth:Le.bool,inverse:Le.bool,flip:Le.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Le.oneOfType([Le.object,Le.array,Le.string]),listItem:Le.bool,pull:Le.oneOf(["right","left"]),pulse:Le.bool,rotation:Le.oneOf([0,90,180,270]),shake:Le.bool,size:Le.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Le.bool,spinPulse:Le.bool,spinReverse:Le.bool,symbol:Le.oneOfType([Le.bool,Le.string]),title:Le.string,titleId:Le.string,transform:Le.oneOfType([Le.string,Le.object]),swapOpacity:Le.bool};var J4=dw.bind(null,gf.createElement);const Z4=({isOpen:i,toggle:e})=>R.jsx("div",{className:"flex justify-end",children:R.jsxs("button",{onClick:e,className:"flex flex-col items-center p-2 text-black font top-4 left-4 z-50 rounded-2xl hover:text-black-500 cursor-pointer",children:[R.jsx(Py,{icon:kk,className:"mr-2 w-auto"}),i?"Cerrar Menú":"Abrir Menú"]})}),e3=()=>{const{openMenu:i,toogleMenu:e}=gf.useContext(Ty)||{};return R.jsx(R.Fragment,{children:R.jsx(Z4,{isOpen:!!i,toggle:e||(()=>{})})})},t3=()=>{const{openMenu:i}=ae.useContext(Ty)??{},e="16rem";return R.jsxs("div",{className:"flex min-h-screen relative",children:[R.jsx("div",{className:"fixed top-0 left-0 h-full bg-gray-900 z-30 transition-transform duration-300 ease-in-out",style:{width:e,transform:`translateX(${i?"0":`-${e}`})`},children:R.jsx(Pk,{openMenu:i??!1})}),R.jsxs("div",{className:"flex flex-col flex-1 w-full transition-all duration-300",style:{paddingLeft:i?e:"0"},children:[R.jsx("div",{className:"w-full bg-white z-40 shadow-md",children:R.jsx(e3,{})}),R.jsx("main",{className:"p-4",children:R.jsx(Ig,{})})]})]})},cf="__sak";/**
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
 */function n3(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class qf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const r=new qf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const m=Array.from(c).map(async g=>g(t.origin,l)),p=await n3(m);t.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qf.receivers=[];/**
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
 */function i3(i="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class r3{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((m,p)=>{const g=i3("",20);a.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},r);c={messageChannel:a,onMessage(b){const S=b;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),m(S.data.response);break;default:clearTimeout(E),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function Ab(){return window}/**
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
 */function pw(){return typeof Ab().WorkerGlobalScope<"u"&&typeof Ab().importScripts=="function"}async function s3(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function a3(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function o3(){return pw()?self:null}/**
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
 */const gw="firebaseLocalStorageDb",l3=1,hf="firebaseLocalStorage",yw="fbase_key";class qu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Gf(i,e){return i.transaction([hf],e?"readwrite":"readonly").objectStore(hf)}function u3(){const i=indexedDB.deleteDatabase(gw);return new qu(i).toPromise()}function yg(){const i=indexedDB.open(gw,l3);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(hf,{keyPath:yw})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(hf)?e(r):(r.close(),await u3(),e(await yg()))})})}async function Sb(i,e,t){const r=Gf(i,!0).put({[yw]:e,value:t});return new qu(r).toPromise()}async function c3(i,e){const t=Gf(i,!1).get(e),r=await new qu(t).toPromise();return r===void 0?null:r.value}function wb(i,e){const t=Gf(i,!0).delete(e);return new qu(t).toPromise()}const h3=800,f3=3;class vw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>f3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qf._getInstance(o3()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await s3(),!this.activeServiceWorker)return;this.sender=new r3(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||a3()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yg();return await Sb(e,cf,"1"),await wb(e,cf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sb(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>c3(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wb(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Gf(a,!1).getAll();return new qu(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),h3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vw.type="LOCAL";const d3=vw;function _w(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const m3=_w,Ew=new ps("auth","Firebase",_w());/**
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
 */const ff=new Tf("@firebase/auth");function p3(i,...e){ff.logLevel<=ke.WARN&&ff.warn(`Auth (${Ii}): ${i}`,...e)}function Uh(i,...e){ff.logLevel<=ke.ERROR&&ff.error(`Auth (${Ii}): ${i}`,...e)}/**
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
 */function wi(i,...e){throw ky(i,...e)}function pa(i,...e){return ky(i,...e)}function Tw(i,e,t){const r=Object.assign(Object.assign({},m3()),{[e]:t});return new ps("auth","Firebase",r).create(e,{appName:i.name})}function ra(i){return Tw(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ky(i,...e){if(typeof i!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(t,...r)}return Ew.create(i,...e)}function Ie(i,e,...t){if(!i)throw ky(e,...t)}function tr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Uh(e),new Error(e)}function ds(i,e){i||tr(e)}function g3(){return Ib()==="http:"||Ib()==="https:"}function Ib(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function y3(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(g3()||r1()||"connection"in navigator)?navigator.onLine:!0}function v3(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class _3{constructor(e,t){this.shortDelay=e,this.longDelay=t,ds(t>e,"Short delay should be less than long delay!"),this.isMobile=n1()||s1()}get(){return y3()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bw(i,e){ds(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Aw{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const E3={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const T3=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],b3=new _3(3e4,6e4);function My(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Ko(i,e,t,r,a={}){return Sw(i,a,async()=>{let l={},c={};r&&(e==="GET"?c=r:l={body:JSON.stringify(r)});const m=cr(Object.assign({key:i.config.apiKey},c)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},l);return i1()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&Uo(i.emulatorConfig.host)&&(g.credentials="include"),Aw.fetch()(await ww(i,i.config.apiHost,t,m),g)})}async function Sw(i,e,t){i._canInitEmulator=!1;const r=Object.assign(Object.assign({},E3),e);try{const a=new S3(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw wh(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const m=l.ok?c.errorMessage:c.error.message,[p,g]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw wh(i,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw wh(i,"email-already-in-use",c);if(p==="USER_DISABLED")throw wh(i,"user-disabled",c);const E=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Tw(i,E,g);wi(i,E)}}catch(a){if(a instanceof jn)throw a;wi(i,"network-request-failed",{message:String(a)})}}async function A3(i,e,t,r,a={}){const l=await Ko(i,e,t,r,a);return"mfaPendingCredential"in l&&wi(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function ww(i,e,t,r){const a=`${e}${t}?${r}`,l=i,c=l.config.emulator?bw(i.config,a):`${i.config.apiScheme}://${a}`;return T3.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class S3{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(pa(this.auth,"network-request-failed")),b3.get())})}}function wh(i,e,t){const r={appName:i.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const a=pa(i,e,r);return a.customData._tokenResponse=t,a}/**
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
 */async function w3(i,e){return Ko(i,"POST","/v1/accounts:delete",e)}async function df(i,e){return Ko(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function yu(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function I3(i,e=!1){const t=Qt(i),r=await t.getIdToken(e),a=Vy(r);Ie(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:r,authTime:yu(Ep(a.auth_time)),issuedAtTime:yu(Ep(a.iat)),expirationTime:yu(Ep(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Ep(i){return Number(i)*1e3}function Vy(i){const[e,t,r]=i.split(".");if(e===void 0||t===void 0||r===void 0)return Uh("JWT malformed, contained fewer than 3 sections"),null;try{const a=Cg(t);return a?JSON.parse(a):(Uh("Failed to decode base64 JWT payload"),null)}catch(a){return Uh("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Rb(i){const e=Vy(i);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Du(i,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof jn&&R3(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function R3({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class C3{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=yu(this.lastLoginAt),this.creationTime=yu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function mf(i){var e;const t=i.auth,r=await i.getIdToken(),a=await Du(i,df(t,{idToken:r}));Ie(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];i._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Iw(l.providerUserInfo):[],m=N3(i.providerData,c),p=i.isAnonymous,g=!(i.email&&l.passwordHash)&&!(m!=null&&m.length),E=p?g:!1,b={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:m,metadata:new vg(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(i,b)}async function x3(i){const e=Qt(i);await mf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function N3(i,e){return[...i.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function Iw(i){return i.map(e=>{var{providerId:t}=e,r=jo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function O3(i,e){const t=await Sw(i,{},async()=>{const r=cr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,c=await ww(i,a,"/v1/token",`key=${l}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",Aw.fetch()(c,{method:"POST",headers:m,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function D3(i,e){return Ko(i,"POST","/v2/accounts:revokeToken",My(i,e))}/**
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
 */class Ao{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const t=Rb(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:a,expiresIn:l}=await O3(e,t);this.updateTokensAndExpiration(r,a,Number(l))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:a,expirationTime:l}=t,c=new Ao;return r&&(Ie(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),a&&(Ie(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Ie(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ao,this.toJSON())}_performRefresh(){return tr("not implemented")}}/**
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
 */function Hr(i,e){Ie(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Kn{constructor(e){var{uid:t,auth:r,stsTokenManager:a}=e,l=jo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new C3(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new vg(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Du(this,this.stsTokenManager.getToken(this.auth,e));return Ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return I3(this,e)}reload(){return x3(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await mf(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(ra(this.auth));const e=await this.getIdToken();return await Du(this,w3(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,a,l,c,m,p,g,E;const b=(r=t.displayName)!==null&&r!==void 0?r:void 0,S=(a=t.email)!==null&&a!==void 0?a:void 0,j=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,G=(c=t.photoURL)!==null&&c!==void 0?c:void 0,W=(m=t.tenantId)!==null&&m!==void 0?m:void 0,F=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,ee=(g=t.createdAt)!==null&&g!==void 0?g:void 0,ie=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ne,emailVerified:fe,isAnonymous:ce,providerData:Ce,stsTokenManager:D}=t;Ie(ne&&D,e,"internal-error");const w=Ao.fromJSON(this.name,D);Ie(typeof ne=="string",e,"internal-error"),Hr(b,e.name),Hr(S,e.name),Ie(typeof fe=="boolean",e,"internal-error"),Ie(typeof ce=="boolean",e,"internal-error"),Hr(j,e.name),Hr(G,e.name),Hr(W,e.name),Hr(F,e.name),Hr(ee,e.name),Hr(ie,e.name);const C=new Kn({uid:ne,auth:e,email:S,emailVerified:fe,displayName:b,isAnonymous:ce,photoURL:G,phoneNumber:j,tenantId:W,stsTokenManager:w,createdAt:ee,lastLoginAt:ie});return Ce&&Array.isArray(Ce)&&(C.providerData=Ce.map(P=>Object.assign({},P))),F&&(C._redirectEventId=F),C}static async _fromIdTokenResponse(e,t,r=!1){const a=new Ao;a.updateFromServerResponse(t);const l=new Kn({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await mf(l),l}static async _fromGetAccountInfoResponse(e,t,r){const a=t.users[0];Ie(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?Iw(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),m=new Ao;m.updateFromIdToken(r);const p=new Kn({uid:a.localId,auth:e,stsTokenManager:m,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new vg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
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
 */const Cb=new Map;function gi(i){ds(i instanceof Function,"Expected a class definition");let e=Cb.get(i);return e?(ds(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Cb.set(i,e),e)}/**
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
 */class Rw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Rw.type="NONE";const xb=Rw;/**
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
 */function vu(i,e,t){return`firebase:${i}:${e}:${t}`}class So{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:a,name:l}=this.auth;this.fullUserKey=vu(this.userKey,a.apiKey,l),this.fullPersistenceKey=vu("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await df(this.auth,{idToken:e}).catch(()=>{});return t?Kn._fromGetAccountInfoResponse(this.auth,t,e):null}return Kn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new So(gi(xb),e,r);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||gi(xb);const c=vu(r,e.config.apiKey,e.name);let m=null;for(const g of t)try{const E=await g._get(c);if(E){let b;if(typeof E=="string"){const S=await df(e,{idToken:E}).catch(()=>{});if(!S)break;b=await Kn._fromGetAccountInfoResponse(e,S,E)}else b=Kn._fromJSON(e,E);g!==l&&(m=b),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new So(l,e,r):(l=p[0],m&&await l._set(c,m.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new So(l,e,r))}}/**
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
 */function Nb(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(P3(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xw(e))return"Blackberry";if(Nw(e))return"Webos";if(k3(e))return"Safari";if((e.includes("chrome/")||M3(e))&&!e.includes("edge/"))return"Chrome";if(Gu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function P3(i=tt()){return/firefox\//i.test(i)}function k3(i=tt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function M3(i=tt()){return/crios\//i.test(i)}function Cw(i=tt()){return/iemobile/i.test(i)}function Gu(i=tt()){return/android/i.test(i)}function xw(i=tt()){return/blackberry/i.test(i)}function Nw(i=tt()){return/webos/i.test(i)}function Ly(i=tt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function V3(i=tt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(i)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(i)}function L3(){return a1()&&document.documentMode===10}function U3(i=tt()){return Ly(i)||Gu(i)||Nw(i)||xw(i)||/windows phone/i.test(i)||Cw(i)}/**
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
 */function Ow(i,e=[]){let t;switch(i){case"Browser":t=Nb(tt());break;case"Worker":t=`${Nb(tt())}-${i}`;break;default:t=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ii}/${r}`}/**
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
 */class j3{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=l=>new Promise((c,m)=>{try{const p=e(l);c(p)}catch(p){m(p)}});r.onAbort=t,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function z3(i,e={}){return Ko(i,"GET","/v2/passwordPolicy",My(i,e))}/**
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
 */const B3=6;class F3{constructor(e){var t,r,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:B3,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,a,l,c,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(r=p.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class H3{constructor(e,t,r,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ob(this),this.idTokenSubscription=new Ob(this),this.beforeStateQueue=new j3(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ew,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gi(t)),this._initializationPromise=this.queue(async()=>{var r,a,l;if(!this._deleted&&(this.persistenceManager=await So.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await df(this,{idToken:e}),r=await Kn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(wt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(m,m))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===m)&&(p!=null&&p.user)&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await mf(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=v3()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject(ra(this));const t=e?Qt(e):null;return t&&Ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(ra(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject(ra(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await z3(this),t=new F3(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ps("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await D3(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gi(e)||this._popupRedirectResolver;Ie(t,this,"argument-error"),this.redirectPersistenceManager=await So.create(this,[gi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(m,this,"internal-error"),m.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,r,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ow(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&p3(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Dw(i){return Qt(i)}class Ob{constructor(e){this.auth=e,this.observer=null,this.addObserver=l1(t=>this.observer=t)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function q3(i,e){const t=ku(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(ns(l,e??{}))return a;wi(a,"already-initialized")}return t.initialize({options:e})}function G3(i,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(gi);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */class Pw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return tr("not implemented")}_getIdTokenResponse(e){return tr("not implemented")}_linkToIdToken(e,t){return tr("not implemented")}_getReauthenticationResolver(e){return tr("not implemented")}}/**
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
 */async function wo(i,e){return A3(i,"POST","/v1/accounts:signInWithIdp",My(i,e))}/**
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
 */const $3="http://localhost";class ua extends Pw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ua(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):wi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=t,l=jo(t,["providerId","signInMethod"]);if(!r||!a)return null;const c=new ua(r,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return wo(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,wo(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,wo(e,t)}buildRequest(){const e={requestUri:$3,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=cr(t)}return e}}/**
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
 */class kw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $u extends kw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qr extends $u{constructor(){super("facebook.com")}static credential(e){return ua._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qr.credential(e.oauthAccessToken)}catch{return null}}}qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";qr.PROVIDER_ID="facebook.com";/**
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
 */class Gr extends $u{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ua._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Gr.credential(t,r)}catch{return null}}}Gr.GOOGLE_SIGN_IN_METHOD="google.com";Gr.PROVIDER_ID="google.com";/**
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
 */class $r extends $u{constructor(){super("github.com")}static credential(e){return ua._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $r.credential(e.oauthAccessToken)}catch{return null}}}$r.GITHUB_SIGN_IN_METHOD="github.com";$r.PROVIDER_ID="github.com";/**
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
 */class Kr extends $u{constructor(){super("twitter.com")}static credential(e,t){return ua._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Kr.credential(t,r)}catch{return null}}}Kr.TWITTER_SIGN_IN_METHOD="twitter.com";Kr.PROVIDER_ID="twitter.com";/**
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
 */class Mo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,a=!1){const l=await Kn._fromIdTokenResponse(e,r,a),c=Db(r);return new Mo({user:l,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const a=Db(r);return new Mo({user:e,providerId:a,_tokenResponse:r,operationType:t})}}function Db(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class pf extends jn{constructor(e,t,r,a){var l;super(t.code,t.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,pf.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,a){return new pf(e,t,r,a)}}function Mw(i,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?pf._fromErrorAndOperation(i,l,e,r):l})}async function K3(i,e,t=!1){const r=await Du(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Mo._forOperation(i,"link",r)}/**
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
 */async function Y3(i,e,t=!1){const{auth:r}=i;if(wt(r.app))return Promise.reject(ra(r));const a="reauthenticate";try{const l=await Du(i,Mw(r,a,e,i),t);Ie(l.idToken,r,"internal-error");const c=Vy(l.idToken);Ie(c,r,"internal-error");const{sub:m}=c;return Ie(i.uid===m,r,"user-mismatch"),Mo._forOperation(i,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&wi(r,"user-mismatch"),l}}/**
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
 */async function Q3(i,e,t=!1){if(wt(i.app))return Promise.reject(ra(i));const r="signIn",a=await Mw(i,r,e),l=await Mo._fromIdTokenResponse(i,r,a);return t||await i._updateCurrentUser(l.user),l}var Pb="@firebase/auth",kb="1.10.5";/**
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
 */class X3{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function W3(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function J3(i){is(new nr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:m}=r.options;Ie(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:c,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ow(i)},g=new H3(r,a,l,p);return G3(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),is(new nr("auth-internal",e=>{const t=Dw(e.getProvider("auth").getImmediate());return(r=>new X3(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yi(Pb,kb,W3(i)),yi(Pb,kb,"esm2017")}/**
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
 */class Vw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(cf,"1"),this.storage.removeItem(cf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Z3=1e3,e6=10;class Lw extends Vw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=U3(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),a=this.localCache[t];r!==a&&e(t,a,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,m,p)=>{this.notifyListeners(c,p)});return}const r=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},l=this.storage.getItem(r);L3()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,e6):a()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Z3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lw.type="LOCAL";const t6=Lw;/**
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
 */class Uw extends Vw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Uw.type="SESSION";const n6=Uw;/**
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
 */function i6(i,e){return e?gi(e):(Ie(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Uy extends Pw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return wo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return wo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function r6(i){return Q3(i.auth,new Uy(i),i.bypassAuthState)}function s6(i){const{auth:e,user:t}=i;return Ie(t,e,"internal-error"),Y3(t,new Uy(i),i.bypassAuthState)}async function a6(i){const{auth:e,user:t}=i;return Ie(t,e,"internal-error"),K3(t,new Uy(i),i.bypassAuthState)}/**
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
 */class o6{constructor(e,t,r,a,l=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:a,tenantId:l,error:c,type:m}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:r,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return r6;case"linkViaPopup":case"linkViaRedirect":return a6;case"reauthViaPopup":case"reauthViaRedirect":return s6;default:wi(this.auth,"internal-error")}}resolve(e){ds(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ds(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const l6="pendingRedirect",_u=new Map;class u6 extends o6{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=_u.get(this.auth._key());if(!e){try{const r=await c6(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}_u.set(this.auth._key(),e)}return this.bypassAuthState||_u.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function c6(i,e){const t=m6(e),r=d6(i);if(!await r._isAvailable())return!1;const a=await r._get(t)==="true";return await r._remove(t),a}function h6(){_u.clear()}function f6(i,e){_u.set(i._key(),e)}function d6(i){return gi(i._redirectPersistence)}function m6(i){return vu(l6,i.config.apiKey,i.name)}async function p6(i,e,t=!1){if(wt(i.app))return Promise.reject(ra(i));const r=Dw(i),a=i6(r,e),c=await new u6(r,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
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
 */const g6="__/auth/handler",y6="emulator/auth/handler",v6=encodeURIComponent("fac");async function _6(i,e,t,r,a,l){Ie(i.config.authDomain,i,"auth-domain-config-required"),Ie(i.config.apiKey,i,"invalid-api-key");const c={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:r,v:Ii,eventId:a};if(e instanceof kw){e.setDefaultLanguage(i.languageCode),c.providerId=e.providerId||"",o1(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,b]of Object.entries(l||{}))c[E]=b}if(e instanceof $u){const E=e.getScopes().filter(b=>b!=="");E.length>0&&(c.scopes=E.join(","))}i.tenantId&&(c.tid=i.tenantId);const m=c;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const p=await i._getAppCheckToken(),g=p?`#${v6}=${encodeURIComponent(p)}`:"";return`${E6(i)}?${cr(m).slice(1)}${g}`}function E6({config:i}){return i.emulator?bw(i,y6):`https://${i.authDomain}/${g6}`}/**
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
 */function ca(){return window}/**
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
 */async function T6(i,e={}){return Ko(i,"GET","/v1/projects",e)}/**
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
 */const b6=2e3;async function A6(i,e,t){var r;const{BuildInfo:a}=ca();ds(e.sessionId,"AuthEvent did not contain a session ID");const l=await C6(e.sessionId),c={};return Ly()?c.ibi=a.packageName:Gu()?c.apn=a.packageName:wi(i,"operation-not-supported-in-this-environment"),a.displayName&&(c.appDisplayName=a.displayName),c.sessionId=l,_6(i,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,c)}async function S6(i){const{BuildInfo:e}=ca(),t={};Ly()?t.iosBundleId=e.packageName:Gu()?t.androidPackageName=e.packageName:wi(i,"operation-not-supported-in-this-environment"),await T6(i,t)}function w6(i){const{cordova:e}=ca();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let a=null;r?e.plugins.browsertab.openUrl(i):a=e.InAppBrowser.open(i,V3()?"_blank":"_system","location=yes"),t(a)})})}async function I6(i,e,t){const{cordova:r}=ca();let a=()=>{};try{await new Promise((l,c)=>{let m=null;function p(){var b;l();const S=(b=r.plugins.browsertab)===null||b===void 0?void 0:b.close;typeof S=="function"&&S(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function g(){m||(m=window.setTimeout(()=>{c(pa(i,"redirect-cancelled-by-user"))},b6))}function E(){(document==null?void 0:document.visibilityState)==="visible"&&g()}e.addPassiveListener(p),document.addEventListener("resume",g,!1),Gu()&&document.addEventListener("visibilitychange",E,!1),a=()=>{e.removePassiveListener(p),document.removeEventListener("resume",g,!1),document.removeEventListener("visibilitychange",E,!1),m&&window.clearTimeout(m)}})}finally{a()}}function R6(i){var e,t,r,a,l,c,m,p,g,E;const b=ca();Ie(typeof((e=b==null?void 0:b.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),Ie(typeof((t=b==null?void 0:b.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),Ie(typeof((l=(a=(r=b==null?void 0:b.cordova)===null||r===void 0?void 0:r.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.openUrl)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Ie(typeof((p=(m=(c=b==null?void 0:b.cordova)===null||c===void 0?void 0:c.plugins)===null||m===void 0?void 0:m.browsertab)===null||p===void 0?void 0:p.isAvailable)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Ie(typeof((E=(g=b==null?void 0:b.cordova)===null||g===void 0?void 0:g.InAppBrowser)===null||E===void 0?void 0:E.open)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function C6(i){const e=x6(i),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function x6(i){if(ds(/[0-9a-zA-Z]+/.test(i),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(i);const e=new ArrayBuffer(i.length),t=new Uint8Array(e);for(let r=0;r<i.length;r++)t[r]=i.charCodeAt(r);return t}/**
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
 */const N6=10*60*1e3;class O6{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!D6(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!jw(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(pa(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=N6&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mb(e))}saveEventToCache(e){this.cachedEventUids.add(Mb(e)),this.lastProcessedEventTime=Date.now()}}function Mb(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function jw({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function D6(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jw(i);default:return!1}}/**
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
 */const P6=20;class k6 extends O6{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function M6(i,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:U6(),postBody:null,tenantId:i.tenantId,error:pa(i,"no-auth-event")}}function V6(i,e){return _g()._set(Eg(i),e)}async function Vb(i){const e=await _g()._get(Eg(i));return e&&await _g()._remove(Eg(i)),e}function L6(i,e){var t,r;const a=z6(e);if(a.includes("/__/auth/callback")){const l=jh(a),c=l.firebaseError?j6(decodeURIComponent(l.firebaseError)):null,m=(r=(t=c==null?void 0:c.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],p=m?pa(m):null;return p?{type:i.type,eventId:i.eventId,tenantId:i.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:i.type,eventId:i.eventId,tenantId:i.tenantId,sessionId:i.sessionId,urlResponse:a,postBody:null}}return null}function U6(){const i=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<P6;t++){const r=Math.floor(Math.random()*e.length);i.push(e.charAt(r))}return i.join("")}function _g(){return gi(t6)}function Eg(i){return vu("authEvent",i.config.apiKey,i.name)}function j6(i){try{return JSON.parse(i)}catch{return null}}function z6(i){const e=jh(i),t=e.link?decodeURIComponent(e.link):void 0,r=jh(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return jh(a).link||a||r||t||i}function jh(i){if(!(i!=null&&i.includes("?")))return{};const[e,...t]=i.split("?");return $C(t.join("?"))}/**
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
 */const B6=500;class F6{constructor(){this._redirectPersistence=n6,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=p6,this._overrideRedirectResult=f6}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new k6(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){wi(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,a){R6(e);const l=await this._initialize(e);await l.initialized(),l.resetRedirect(),h6(),await this._originValidation(e);const c=M6(e,r,a);await V6(e,c);const m=await A6(e,c,t),p=await w6(m);return I6(e,l,p)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=S6(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:a,BuildInfo:l}=ca(),c=setTimeout(async()=>{await Vb(e),t.onEvent(Lb())},B6),m=async E=>{clearTimeout(c);const b=await Vb(e);let S=null;b&&(E!=null&&E.url)&&(S=L6(b,E.url)),t.onEvent(S||Lb())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,m);const p=a,g=`${l.packageName.toLowerCase()}://`;ca().handleOpenURL=async E=>{if(E.toLowerCase().startsWith(g)&&m({url:E}),typeof p=="function")try{p(E)}catch(b){console.error(b)}}}}const H6=F6;function Lb(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:pa("no-auth-event")}}/**
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
 */function q6(i=Ng()){const e=ku(i,"auth");return e.isInitialized()?e.getImmediate():q3(i,{persistence:d3,popupRedirectResolver:H6})}J3("Cordova");const G6=q6(Bo),$6=i=>G6.currentUser?i.children:R.jsx(dC,{to:"/"}),K6=[{title:"Crear usuario",slug:"createUser"},{title:"Crear maquina",slug:"createMachine"}];function Y6({item:i}){return R.jsx(Rg,{to:`/configurations/${i.slug}`,children:R.jsx("button",{className:"button",children:i.title})})}const Q6=()=>R.jsxs("div",{className:"flex flex-col items-center p-4 space-y-6 md:space-y-8",children:[R.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:K6.map((i,e)=>R.jsx(Y6,{item:i},e))}),R.jsx("div",{className:"w-full max-w-4xl",children:R.jsx(Ig,{})})]}),X6=[{name:"firstName",label:"Nombres",type:"text",required:!0,placeholder:"Ingrese sus nombres"},{name:"lastName",label:"Apellidos",type:"text",required:!0,placeholder:"Ingrese sus apellidos"},{name:"code",label:"Codigo",type:"text",required:!0,placeholder:"Ingrese su codigo"},{name:"section",label:"Seccion",type:"text",required:!0,placeholder:"Ingrese su seccion"}],W6=[{name:"date",label:"Fecha",type:"date",required:!0,placeholder:"Seleccione una fecha"},{name:"abbreviation",label:"Abreviacion de maquina",type:"text",required:!0,placeholder:"e.g., F1315"},{name:"machineName",label:"Nombre de maquina",type:"text",required:!0,placeholder:"e.g., Cutter Alpha"},{name:"efficiency",label:"Eficiencia (%)",type:"number",required:!0,placeholder:"e.g., 92"}],zw=({type:i="success",title:e,message:t,onClose:r})=>{const l={success:{bg:"bg-green-50",border:"border-green-300",text:"text-green-800",darkBg:"dark:bg-gray-800",darkText:"dark:text-green-400",darkBorder:"dark:border-green-800"},error:{bg:"bg-red-50",border:"border-red-300",text:"text-red-800",darkBg:"dark:bg-gray-800",darkText:"dark:text-red-400",darkBorder:"dark:border-red-800"}}[i];return R.jsxs("div",{className:`p-4 mb-4 border rounded-lg ${l.bg} ${l.border} ${l.text} ${l.darkBg} ${l.darkText} ${l.darkBorder}`,role:"alert",children:[R.jsxs("div",{className:"flex items-center justify-between",children:[R.jsx("h3",{className:"text-lg font-medium",children:e}),R.jsx("button",{onClick:r,className:`text-sm px-2 py-1 rounded ${l.text} border ${l.border} hover:bg-opacity-20`,children:"Cerrar"})]}),R.jsx("p",{className:"mt-2 text-sm",children:t})]})},J6=gy(Bo),Z6=()=>{const[i,e]=ae.useState({}),[t,r]=ae.useState(null),a=c=>{const{name:m,value:p}=c.target;e(g=>({...g,[m]:p.toLocaleUpperCase()}))},l=async c=>{c.preventDefault();try{await OS(pS(J6,"machines"),i),r({type:"success",title:"Usuario creado",message:"Maquina creada correctamente.",onClose:()=>r(null)}),e({})}catch(m){console.error("Error al crear la máquina:",m),r({type:"error",title:"Error al crear maquina",message:"Ha ocurrido un error al crear el usuario. Por favor, inténtalo de nuevo.",onClose:()=>r(null)})}};return R.jsx("div",{className:"roun min-h-screen flex items-center justify-center rounded-2xl backgroundForm",children:R.jsxs("form",{onSubmit:l,className:"bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md text-white space-y-6",children:[R.jsx("h2",{className:"text-2xl font-semibold text-center",children:"Crear máquina"}),W6.map(c=>R.jsxs("div",{children:[R.jsx("label",{htmlFor:c.name,className:"block text-sm font-medium mb-1",children:c.label}),R.jsx("input",{type:c.type,id:c.name,name:c.name,required:c.required,placeholder:c.placeholder,value:i[c.name]||"",onChange:a,className:"w-full px-4 py-2 rounded border bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"})]},c.name)),R.jsx("button",{type:"submit",className:"cursor-pointer w-full py-2 rounded bg-blue-600 hover:bg-blue-800 transition-colors duration-300 text-white font-semibold",children:"Crear máquina"}),t&&R.jsx(zw,{type:t.type,title:t.title,message:t.message,onClose:t.onClose})]})})},eV=gy(Bo),tV=()=>{const[i,e]=ae.useState({}),[t,r]=ae.useState(null),a=c=>{const{name:m,value:p}=c.target;e(g=>({...g,[m]:p.toLocaleUpperCase()}))},l=async c=>{c.preventDefault();try{await OS(pS(eV,"operators"),i),r({type:"success",title:"Usuario creado",message:"El usuario se ha creado correctamente.",onClose:()=>r(null)}),e({})}catch(m){console.error("Error al crear el usuario:",m),r({type:"error",title:"Error al crear usuario",message:"Ha ocurrido un error al crear el usuario. Por favor, inténtalo de nuevo.",onClose:()=>r(null)})}};return R.jsx(R.Fragment,{children:R.jsx("div",{className:"min-h-screen flex items-center justify-center rounded-2xl backgroundForm",children:R.jsxs("form",{onSubmit:l,className:"p-8 rounded-lg shadow-md w-full max-w-md text-white space-y-4",children:[R.jsx("h2",{className:"text-2xl font-semibold text-center",children:"Crear usurio"}),X6.map(c=>R.jsxs("div",{children:[R.jsx("label",{htmlFor:c.name,className:"block text-sm font-medium mb-1",children:c.label}),R.jsx("input",{type:c.type,id:c.name,name:c.name,placeholder:c.placeholder,value:i[c.name]||"",onChange:a,className:"w-full p-2 rounded border border-gray-600 bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500",required:c.required})]},c.name)),R.jsx("button",{type:"submit",className:"cursor-pointer w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded transition-colors",children:"Crear usuario"}),t&&R.jsx(zw,{type:t.type,title:t.title,message:t.message,onClose:t.onClose})]})})})};function nV(){return R.jsx("div",{children:"AdminData"})}function iV(){return R.jsx(Sk,{children:R.jsx(bC,{children:R.jsxs(pC,{children:[R.jsx(un,{path:"/",element:R.jsx(Ak,{})}),R.jsxs(un,{path:"/",element:R.jsx($6,{children:R.jsx(t3,{})}),children:[R.jsx(un,{path:"home",element:R.jsx(jT,{})}),R.jsx(un,{path:"supervisor",element:R.jsx(BT,{})}),R.jsx(un,{path:"eficencia",element:R.jsx(FT,{})}),R.jsxs(un,{path:"picado",element:R.jsx(Nk,{}),children:[R.jsx(un,{path:"f1315",element:R.jsx(Ik,{})}),R.jsx(un,{path:"eficence",element:R.jsx(FT,{})})]}),R.jsx(un,{path:"/supervisor",element:R.jsx(BT,{})}),R.jsxs(un,{path:"/configurations",element:R.jsx(Q6,{}),children:[R.jsx(un,{path:"createMachine",element:R.jsx(Z6,{})}),R.jsx(un,{path:"createUser",element:R.jsx(tV,{name:"username",label:"Username",type:"text",required:!0,placeholder:"Enter username"})})]}),R.jsx(un,{path:"data",element:R.jsx(nV,{})}),R.jsx(un,{path:"*",element:R.jsx(jT,{})})]})]})})})}TR.createRoot(document.getElementById("root")).render(R.jsx(ae.StrictMode,{children:R.jsx(iV,{})}));
