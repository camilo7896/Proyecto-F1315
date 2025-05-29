function ER(i,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in i)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(i,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function HT(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Wm={exports:{}},nu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tE;function bR(){if(tE)return nu;tE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var m in a)m!=="key"&&(l[m]=a[m])}else l=a;return a=l.ref,{$$typeof:i,type:r,key:c,ref:a!==void 0?a:null,props:l}}return nu.Fragment=e,nu.jsx=t,nu.jsxs=t,nu}var nE;function TR(){return nE||(nE=1,Wm.exports=bR()),Wm.exports}var I=TR(),Jm={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iE;function AR(){if(iE)return xe;iE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),b=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=b&&N[b]||N["@@iterator"],typeof N=="function"?N:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,Q={};function F(N,J,le){this.props=N,this.context=J,this.refs=Q,this.updater=le||j}F.prototype.isReactComponent={},F.prototype.setState=function(N,J){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,J,"setState")},F.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function ee(){}ee.prototype=F.prototype;function ie(N,J,le){this.props=N,this.context=J,this.refs=Q,this.updater=le||j}var ne=ie.prototype=new ee;ne.constructor=ie,G(ne,F.prototype),ne.isPureReactComponent=!0;var fe=Array.isArray,ce={H:null,A:null,T:null,S:null,V:null},Ce=Object.prototype.hasOwnProperty;function D(N,J,le,re,ye,De){return le=De.ref,{$$typeof:i,type:N,key:J,ref:le!==void 0?le:null,props:De}}function w(N,J){return D(N.type,J,void 0,void 0,void 0,N.props)}function C(N){return typeof N=="object"&&N!==null&&N.$$typeof===i}function P(N){var J={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(le){return J[le]})}var k=/\/+/g;function V(N,J){return typeof N=="object"&&N!==null&&N.key!=null?P(""+N.key):J.toString(36)}function x(){}function Bt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(x,x):(N.status="pending",N.then(function(J){N.status==="pending"&&(N.status="fulfilled",N.value=J)},function(J){N.status==="pending"&&(N.status="rejected",N.reason=J)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ht(N,J,le,re,ye){var De=typeof N;(De==="undefined"||De==="boolean")&&(N=null);var Se=!1;if(N===null)Se=!0;else switch(De){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(N.$$typeof){case i:case e:Se=!0;break;case _:return Se=N._init,ht(Se(N._payload),J,le,re,ye)}}if(Se)return ye=ye(N),Se=re===""?"."+V(N,0):re,fe(ye)?(le="",Se!=null&&(le=Se.replace(k,"$&/")+"/"),ht(ye,J,le,"",function(Qn){return Qn})):ye!=null&&(C(ye)&&(ye=w(ye,le+(ye.key==null||N&&N.key===ye.key?"":(""+ye.key).replace(k,"$&/")+"/")+Se)),J.push(ye)),1;Se=0;var kt=re===""?".":re+":";if(fe(N))for(var it=0;it<N.length;it++)re=N[it],De=kt+V(re,it),Se+=ht(re,J,le,De,ye);else if(it=S(N),typeof it=="function")for(N=it.call(N),it=0;!(re=N.next()).done;)re=re.value,De=kt+V(re,it++),Se+=ht(re,J,le,De,ye);else if(De==="object"){if(typeof N.then=="function")return ht(Bt(N),J,le,re,ye);throw J=String(N),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Se}function $(N,J,le){if(N==null)return N;var re=[],ye=0;return ht(N,re,"","",function(De){return J.call(le,De,ye++)}),re}function oe(N){if(N._status===-1){var J=N._result;J=J(),J.then(function(le){(N._status===0||N._status===-1)&&(N._status=1,N._result=le)},function(le){(N._status===0||N._status===-1)&&(N._status=2,N._result=le)}),N._status===-1&&(N._status=0,N._result=J)}if(N._status===1)return N._result.default;throw N._result}var ge=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function He(){}return xe.Children={map:$,forEach:function(N,J,le){$(N,function(){J.apply(this,arguments)},le)},count:function(N){var J=0;return $(N,function(){J++}),J},toArray:function(N){return $(N,function(J){return J})||[]},only:function(N){if(!C(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},xe.Component=F,xe.Fragment=t,xe.Profiler=a,xe.PureComponent=ie,xe.StrictMode=r,xe.Suspense=p,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ce,xe.__COMPILER_RUNTIME={__proto__:null,c:function(N){return ce.H.useMemoCache(N)}},xe.cache=function(N){return function(){return N.apply(null,arguments)}},xe.cloneElement=function(N,J,le){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var re=G({},N.props),ye=N.key,De=void 0;if(J!=null)for(Se in J.ref!==void 0&&(De=void 0),J.key!==void 0&&(ye=""+J.key),J)!Ce.call(J,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&J.ref===void 0||(re[Se]=J[Se]);var Se=arguments.length-2;if(Se===1)re.children=le;else if(1<Se){for(var kt=Array(Se),it=0;it<Se;it++)kt[it]=arguments[it+2];re.children=kt}return D(N.type,ye,void 0,void 0,De,re)},xe.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},xe.createElement=function(N,J,le){var re,ye={},De=null;if(J!=null)for(re in J.key!==void 0&&(De=""+J.key),J)Ce.call(J,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(ye[re]=J[re]);var Se=arguments.length-2;if(Se===1)ye.children=le;else if(1<Se){for(var kt=Array(Se),it=0;it<Se;it++)kt[it]=arguments[it+2];ye.children=kt}if(N&&N.defaultProps)for(re in Se=N.defaultProps,Se)ye[re]===void 0&&(ye[re]=Se[re]);return D(N,De,void 0,void 0,null,ye)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(N){return{$$typeof:m,render:N}},xe.isValidElement=C,xe.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:oe}},xe.memo=function(N,J){return{$$typeof:g,type:N,compare:J===void 0?null:J}},xe.startTransition=function(N){var J=ce.T,le={};ce.T=le;try{var re=N(),ye=ce.S;ye!==null&&ye(le,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then(He,ge)}catch(De){ge(De)}finally{ce.T=J}},xe.unstable_useCacheRefresh=function(){return ce.H.useCacheRefresh()},xe.use=function(N){return ce.H.use(N)},xe.useActionState=function(N,J,le){return ce.H.useActionState(N,J,le)},xe.useCallback=function(N,J){return ce.H.useCallback(N,J)},xe.useContext=function(N){return ce.H.useContext(N)},xe.useDebugValue=function(){},xe.useDeferredValue=function(N,J){return ce.H.useDeferredValue(N,J)},xe.useEffect=function(N,J,le){var re=ce.H;if(typeof le=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return re.useEffect(N,J)},xe.useId=function(){return ce.H.useId()},xe.useImperativeHandle=function(N,J,le){return ce.H.useImperativeHandle(N,J,le)},xe.useInsertionEffect=function(N,J){return ce.H.useInsertionEffect(N,J)},xe.useLayoutEffect=function(N,J){return ce.H.useLayoutEffect(N,J)},xe.useMemo=function(N,J){return ce.H.useMemo(N,J)},xe.useOptimistic=function(N,J){return ce.H.useOptimistic(N,J)},xe.useReducer=function(N,J,le){return ce.H.useReducer(N,J,le)},xe.useRef=function(N){return ce.H.useRef(N)},xe.useState=function(N){return ce.H.useState(N)},xe.useSyncExternalStore=function(N,J,le){return ce.H.useSyncExternalStore(N,J,le)},xe.useTransition=function(){return ce.H.useTransition()},xe.version="19.1.0",xe}var rE;function Rg(){return rE||(rE=1,Jm.exports=AR()),Jm.exports}var se=Rg();const Ef=HT(se),SR=ER({__proto__:null,default:Ef},[se]);var Zm={exports:{}},iu={},ep={exports:{}},tp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sE;function wR(){return sE||(sE=1,function(i){function e($,oe){var ge=$.length;$.push(oe);e:for(;0<ge;){var He=ge-1>>>1,N=$[He];if(0<a(N,oe))$[He]=oe,$[ge]=N,ge=He;else break e}}function t($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var oe=$[0],ge=$.pop();if(ge!==oe){$[0]=ge;e:for(var He=0,N=$.length,J=N>>>1;He<J;){var le=2*(He+1)-1,re=$[le],ye=le+1,De=$[ye];if(0>a(re,ge))ye<N&&0>a(De,re)?($[He]=De,$[ye]=ge,He=ye):($[He]=re,$[le]=ge,He=le);else if(ye<N&&0>a(De,ge))$[He]=De,$[ye]=ge,He=ye;else break e}}return oe}function a($,oe){var ge=$.sortIndex-oe.sortIndex;return ge!==0?ge:$.id-oe.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,m=c.now();i.unstable_now=function(){return c.now()-m}}var p=[],g=[],_=1,b=null,S=3,j=!1,G=!1,Q=!1,F=!1,ee=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;function fe($){for(var oe=t(g);oe!==null;){if(oe.callback===null)r(g);else if(oe.startTime<=$)r(g),oe.sortIndex=oe.expirationTime,e(p,oe);else break;oe=t(g)}}function ce($){if(Q=!1,fe($),!G)if(t(p)!==null)G=!0,Ce||(Ce=!0,V());else{var oe=t(g);oe!==null&&ht(ce,oe.startTime-$)}}var Ce=!1,D=-1,w=5,C=-1;function P(){return F?!0:!(i.unstable_now()-C<w)}function k(){if(F=!1,Ce){var $=i.unstable_now();C=$;var oe=!0;try{e:{G=!1,Q&&(Q=!1,ie(D),D=-1),j=!0;var ge=S;try{t:{for(fe($),b=t(p);b!==null&&!(b.expirationTime>$&&P());){var He=b.callback;if(typeof He=="function"){b.callback=null,S=b.priorityLevel;var N=He(b.expirationTime<=$);if($=i.unstable_now(),typeof N=="function"){b.callback=N,fe($),oe=!0;break t}b===t(p)&&r(p),fe($)}else r(p);b=t(p)}if(b!==null)oe=!0;else{var J=t(g);J!==null&&ht(ce,J.startTime-$),oe=!1}}break e}finally{b=null,S=ge,j=!1}oe=void 0}}finally{oe?V():Ce=!1}}}var V;if(typeof ne=="function")V=function(){ne(k)};else if(typeof MessageChannel<"u"){var x=new MessageChannel,Bt=x.port2;x.port1.onmessage=k,V=function(){Bt.postMessage(null)}}else V=function(){ee(k,0)};function ht($,oe){D=ee(function(){$(i.unstable_now())},oe)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function($){$.callback=null},i.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<$?Math.floor(1e3/$):5},i.unstable_getCurrentPriorityLevel=function(){return S},i.unstable_next=function($){switch(S){case 1:case 2:case 3:var oe=3;break;default:oe=S}var ge=S;S=oe;try{return $()}finally{S=ge}},i.unstable_requestPaint=function(){F=!0},i.unstable_runWithPriority=function($,oe){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ge=S;S=$;try{return oe()}finally{S=ge}},i.unstable_scheduleCallback=function($,oe,ge){var He=i.unstable_now();switch(typeof ge=="object"&&ge!==null?(ge=ge.delay,ge=typeof ge=="number"&&0<ge?He+ge:He):ge=He,$){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=ge+N,$={id:_++,callback:oe,priorityLevel:$,startTime:ge,expirationTime:N,sortIndex:-1},ge>He?($.sortIndex=ge,e(g,$),t(p)===null&&$===t(g)&&(Q?(ie(D),D=-1):Q=!0,ht(ce,ge-He))):($.sortIndex=N,e(p,$),G||j||(G=!0,Ce||(Ce=!0,V()))),$},i.unstable_shouldYield=P,i.unstable_wrapCallback=function($){var oe=S;return function(){var ge=S;S=oe;try{return $.apply(this,arguments)}finally{S=ge}}}}(tp)),tp}var aE;function IR(){return aE||(aE=1,ep.exports=wR()),ep.exports}var np={exports:{}},Zt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oE;function RR(){if(oE)return Zt;oE=1;var i=Rg();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var r={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,_){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:b==null?null:""+b,children:p,containerInfo:g,implementation:_}}var c=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Zt.createPortal=function(p,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,_)},Zt.flushSync=function(p){var g=c.T,_=r.p;try{if(c.T=null,r.p=2,p)return p()}finally{c.T=g,r.p=_,r.d.f()}},Zt.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(p,g))},Zt.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Zt.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var _=g.as,b=m(_,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,j=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?r.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:j}):_==="script"&&r.d.X(p,{crossOrigin:b,integrity:S,fetchPriority:j,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Zt.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=m(g.as,g.crossOrigin);r.d.M(p,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(p)},Zt.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,b=m(_,g.crossOrigin);r.d.L(p,_,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Zt.preloadModule=function(p,g){if(typeof p=="string")if(g){var _=m(g.as,g.crossOrigin);r.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(p)},Zt.requestFormReset=function(p){r.d.r(p)},Zt.unstable_batchedUpdates=function(p,g){return p(g)},Zt.useFormState=function(p,g,_){return c.H.useFormState(p,g,_)},Zt.useFormStatus=function(){return c.H.useHostTransitionStatus()},Zt.version="19.1.0",Zt}var lE;function GT(){if(lE)return np.exports;lE=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),np.exports=RR(),np.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uE;function CR(){if(uE)return iu;uE=1;var i=IR(),e=Rg(),t=GT();function r(n){var s="https://react.dev/errors/"+n;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var s=n,o=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(o=s.return),n=s.return;while(n)}return s.tag===3?o:null}function c(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function m(n){if(l(n)!==n)throw Error(r(188))}function p(n){var s=n.alternate;if(!s){if(s=l(n),s===null)throw Error(r(188));return s!==n?null:n}for(var o=n,u=s;;){var f=o.return;if(f===null)break;var d=f.alternate;if(d===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===o)return m(f),n;if(d===u)return m(f),s;d=d.sibling}throw Error(r(188))}if(o.return!==u.return)o=f,u=d;else{for(var E=!1,T=f.child;T;){if(T===o){E=!0,o=f,u=d;break}if(T===u){E=!0,u=f,o=d;break}T=T.sibling}if(!E){for(T=d.child;T;){if(T===o){E=!0,o=d,u=f;break}if(T===u){E=!0,u=d,o=f;break}T=T.sibling}if(!E)throw Error(r(189))}}if(o.alternate!==u)throw Error(r(190))}if(o.tag!==3)throw Error(r(188));return o.stateNode.current===o?n:s}function g(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n;for(n=n.child;n!==null;){if(s=g(n),s!==null)return s;n=n.sibling}return null}var _=Object.assign,b=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),ee=Symbol.for("react.provider"),ie=Symbol.for("react.consumer"),ne=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),Ce=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),P=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function V(n){return n===null||typeof n!="object"?null:(n=k&&n[k]||n["@@iterator"],typeof n=="function"?n:null)}var x=Symbol.for("react.client.reference");function Bt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===x?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case G:return"Fragment";case F:return"Profiler";case Q:return"StrictMode";case ce:return"Suspense";case Ce:return"SuspenseList";case C:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case j:return"Portal";case ne:return(n.displayName||"Context")+".Provider";case ie:return(n._context.displayName||"Context")+".Consumer";case fe:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case D:return s=n.displayName||null,s!==null?s:Bt(n.type)||"Memo";case w:s=n._payload,n=n._init;try{return Bt(n(s))}catch{}}return null}var ht=Array.isArray,$=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ge={pending:!1,data:null,method:null,action:null},He=[],N=-1;function J(n){return{current:n}}function le(n){0>N||(n.current=He[N],He[N]=null,N--)}function re(n,s){N++,He[N]=n.current,n.current=s}var ye=J(null),De=J(null),Se=J(null),kt=J(null);function it(n,s){switch(re(Se,s),re(De,n),re(ye,null),s.nodeType){case 9:case 11:n=(n=s.documentElement)&&(n=n.namespaceURI)?x0(n):0;break;default:if(n=s.tagName,s=s.namespaceURI)s=x0(s),n=N0(s,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}le(ye),re(ye,n)}function Qn(){le(ye),le(De),le(Se)}function dr(n){n.memoizedState!==null&&re(kt,n);var s=ye.current,o=N0(s,n.type);s!==o&&(re(De,n),re(ye,o))}function Ri(n){De.current===n&&(le(ye),le(De)),kt.current===n&&(le(kt),Wl._currentValue=ge)}var ys=Object.prototype.hasOwnProperty,vs=i.unstable_scheduleCallback,_s=i.unstable_cancelCallback,Yo=i.unstable_shouldYield,Xu=i.unstable_requestPaint,wn=i.unstable_now,Wf=i.unstable_getCurrentPriorityLevel,Qo=i.unstable_ImmediatePriority,va=i.unstable_UserBlockingPriority,Es=i.unstable_NormalPriority,Jf=i.unstable_LowPriority,_a=i.unstable_IdlePriority,Xo=i.log,Wu=i.unstable_setDisableYieldValue,ft=null,Ye=null;function mn(n){if(typeof Xo=="function"&&Wu(n),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(ft,n)}catch{}}var Wt=Math.clz32?Math.clz32:bs,Ju=Math.log,Zf=Math.LN2;function bs(n){return n>>>=0,n===0?32:31-(Ju(n)/Zf|0)|0}var Ts=256,As=4194304;function zn(n){var s=n&42;if(s!==0)return s;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Ea(n,s,o){var u=n.pendingLanes;if(u===0)return 0;var f=0,d=n.suspendedLanes,E=n.pingedLanes;n=n.warmLanes;var T=u&134217727;return T!==0?(u=T&~d,u!==0?f=zn(u):(E&=T,E!==0?f=zn(E):o||(o=T&~n,o!==0&&(f=zn(o))))):(T=u&~d,T!==0?f=zn(T):E!==0?f=zn(E):o||(o=u&~n,o!==0&&(f=zn(o)))),f===0?0:s!==0&&s!==f&&(s&d)===0&&(d=f&-f,o=s&-s,d>=o||d===32&&(o&4194048)!==0)?s:f}function Ss(n,s){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&s)===0}function Wo(n,s){switch(n){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jo(){var n=Ts;return Ts<<=1,(Ts&4194048)===0&&(Ts=256),n}function Zo(){var n=As;return As<<=1,(As&62914560)===0&&(As=4194304),n}function Ci(n){for(var s=[],o=0;31>o;o++)s.push(n);return s}function xi(n,s){n.pendingLanes|=s,s!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function el(n,s,o,u,f,d){var E=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var T=n.entanglements,R=n.expirationTimes,z=n.hiddenUpdates;for(o=E&~o;0<o;){var K=31-Wt(o),X=1<<K;T[K]=0,R[K]=-1;var B=z[K];if(B!==null)for(z[K]=null,K=0;K<B.length;K++){var q=B[K];q!==null&&(q.lane&=-536870913)}o&=~X}u!==0&&Xn(n,u,0),d!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=d&~(E&~s))}function Xn(n,s,o){n.pendingLanes|=s,n.suspendedLanes&=~s;var u=31-Wt(s);n.entangledLanes|=s,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194090}function tl(n,s){var o=n.entangledLanes|=s;for(n=n.entanglements;o;){var u=31-Wt(o),f=1<<u;f&s|n[u]&s&&(n[u]|=s),o&=~f}}function mr(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function ba(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function pr(){var n=oe.p;return n!==0?n:(n=window.event,n===void 0?32:Q0(n.type))}function Zu(n,s){var o=oe.p;try{return oe.p=n,s()}finally{oe.p=o}}var at=Math.random().toString(36).slice(2),Rt="__reactFiber$"+at,Et="__reactProps$"+at,In="__reactContainer$"+at,nl="__reactEvents$"+at,ed="__reactListeners$"+at,gr="__reactHandles$"+at,ec="__reactResources$"+at,ws="__reactMarker$"+at;function yr(n){delete n[Rt],delete n[Et],delete n[nl],delete n[ed],delete n[gr]}function Ni(n){var s=n[Rt];if(s)return s;for(var o=n.parentNode;o;){if(s=o[In]||o[Rt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(n=k0(n);n!==null;){if(o=n[Rt])return o;n=k0(n)}return s}n=o,o=n.parentNode}return null}function Wn(n){if(n=n[Rt]||n[In]){var s=n.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return n}return null}function Jn(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n.stateNode;throw Error(r(33))}function sn(n){var s=n[ec];return s||(s=n[ec]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function pt(n){n[ws]=!0}var il=new Set,Ta={};function Bn(n,s){Oi(n,s),Oi(n+"Capture",s)}function Oi(n,s){for(Ta[n]=s,n=0;n<s.length;n++)il.add(s[n])}var tc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nc={},Is={};function ic(n){return ys.call(Is,n)?!0:ys.call(nc,n)?!1:tc.test(n)?Is[n]=!0:(nc[n]=!0,!1)}function vr(n,s,o){if(ic(s))if(o===null)n.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(s);return}}n.setAttribute(s,""+o)}}function Zn(n,s,o){if(o===null)n.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttribute(s,""+o)}}function Ft(n,s,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(s,o,""+u)}}var Rs,rc;function Di(n){if(Rs===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Rs=s&&s[1]||"",rc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rs+n+rc}var Aa=!1;function Sa(n,s){if(!n||Aa)return"";Aa=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(q){var B=q}Reflect.construct(n,[],X)}else{try{X.call()}catch(q){B=q}n.call(X.prototype)}}else{try{throw Error()}catch(q){B=q}(X=n())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(q){if(q&&B&&typeof q.stack=="string")return[q.stack,B.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=u.DetermineComponentFrameRoot(),E=d[0],T=d[1];if(E&&T){var R=E.split(`
`),z=T.split(`
`);for(f=u=0;u<R.length&&!R[u].includes("DetermineComponentFrameRoot");)u++;for(;f<z.length&&!z[f].includes("DetermineComponentFrameRoot");)f++;if(u===R.length||f===z.length)for(u=R.length-1,f=z.length-1;1<=u&&0<=f&&R[u]!==z[f];)f--;for(;1<=u&&0<=f;u--,f--)if(R[u]!==z[f]){if(u!==1||f!==1)do if(u--,f--,0>f||R[u]!==z[f]){var K=`
`+R[u].replace(" at new "," at ");return n.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",n.displayName)),K}while(1<=u&&0<=f);break}}}finally{Aa=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?Di(o):""}function rl(n){switch(n.tag){case 26:case 27:case 5:return Di(n.type);case 16:return Di("Lazy");case 13:return Di("Suspense");case 19:return Di("SuspenseList");case 0:case 15:return Sa(n.type,!1);case 11:return Sa(n.type.render,!1);case 1:return Sa(n.type,!0);case 31:return Di("Activity");default:return""}}function wa(n){try{var s="";do s+=rl(n),n=n.return;while(n);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function an(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function sl(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function td(n){var s=sl(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),u=""+n[s];if(!n.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,d=o.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,d.call(this,E)}}),Object.defineProperty(n,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function Ia(n){n._valueTracker||(n._valueTracker=td(n))}function al(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return n&&(u=sl(n)?n.checked?"true":"false":n.value),n=u,n!==o?(s.setValue(n),!0):!1}function Cs(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var nd=/[\n"\\]/g;function bt(n){return n.replace(nd,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function pn(n,s,o,u,f,d,E,T){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),s!=null?E==="number"?(s===0&&n.value===""||n.value!=s)&&(n.value=""+an(s)):n.value!==""+an(s)&&(n.value=""+an(s)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),s!=null?_r(n,E,an(s)):o!=null?_r(n,E,an(o)):u!=null&&n.removeAttribute("value"),f==null&&d!=null&&(n.defaultChecked=!!d),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.name=""+an(T):n.removeAttribute("name")}function xs(n,s,o,u,f,d,E,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),s!=null||o!=null){if(!(d!=="submit"&&d!=="reset"||s!=null))return;o=o!=null?""+an(o):"",s=s!=null?""+an(s):o,T||s===n.value||(n.value=s),n.defaultValue=s}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=T?n.checked:!!u,n.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E)}function _r(n,s,o){s==="number"&&Cs(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function Pi(n,s,o,u){if(n=n.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=s.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&u&&(n[o].defaultSelected=!0)}else{for(o=""+an(o),s=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}s!==null||n[f].disabled||(s=n[f])}s!==null&&(s.selected=!0)}}function We(n,s,o){if(s!=null&&(s=""+an(s),s!==n.value&&(n.value=s),o==null)){n.defaultValue!==s&&(n.defaultValue=s);return}n.defaultValue=o!=null?""+an(o):""}function Ns(n,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(r(92));if(ht(u)){if(1<u.length)throw Error(r(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=an(s),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function Rn(n,s){if(s){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=s;return}}n.textContent=s}var Os=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sc(n,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(s,""):s==="float"?n.cssFloat="":n[s]="":u?n.setProperty(s,o):typeof o!="number"||o===0||Os.has(s)?s==="float"?n.cssFloat=o:n[s]=(""+o).trim():n[s]=o+"px"}function ol(n,s,o){if(s!=null&&typeof s!="object")throw Error(r(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var f in s)u=s[f],s.hasOwnProperty(f)&&o[f]!==u&&sc(n,f,u)}else for(var d in s)s.hasOwnProperty(d)&&sc(n,d,s[d])}function ll(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var id=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ra(n){return rd.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var ki=null;function Cn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Mi=null,Vi=null;function ul(n){var s=Wn(n);if(s&&(n=s.stateNode)){var o=n[Et]||null;e:switch(n=s.stateNode,s.type){case"input":if(pn(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+bt(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==n&&u.form===n.form){var f=u[Et]||null;if(!f)throw Error(r(90));pn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===n.form&&al(u)}break e;case"textarea":We(n,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Pi(n,!!o.multiple,s,!1)}}}var ei=!1;function ac(n,s,o){if(ei)return n(s,o);ei=!0;try{var u=n(s);return u}finally{if(ei=!1,(Mi!==null||Vi!==null)&&(Zc(),Mi&&(s=Mi,n=Vi,Vi=Mi=null,ul(s),n)))for(s=0;s<n.length;s++)ul(n[s])}}function Ds(n,s){var o=n.stateNode;if(o===null)return null;var u=o[Et]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(r(231,s,typeof o));return o}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xn=!1;if(Fn)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){xn=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{xn=!1}var ti=null,Er=null,Li=null;function cl(){if(Li)return Li;var n,s=Er,o=s.length,u,f="value"in ti?ti.value:ti.textContent,d=f.length;for(n=0;n<o&&s[n]===f[n];n++);var E=o-n;for(u=1;u<=E&&s[o-u]===f[d-u];u++);return Li=f.slice(n,1<u?1-u:void 0)}function ni(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function ii(){return!0}function hl(){return!1}function Mt(n){function s(o,u,f,d,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(o=n[T],this[T]=o?o(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ii:hl,this.isPropagationStopped=hl,this}return _(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ii)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ii)},persist:function(){},isPersistent:ii}),s}var $e={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ca=Mt($e),ks=_({},$e,{view:0,detail:0}),oc=Mt(ks),xa,Na,ri,Ms=_({},ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Us,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ri&&(ri&&n.type==="mousemove"?(xa=n.screenX-ri.screenX,Na=n.screenY-ri.screenY):Na=xa=0,ri=n),xa)},movementY:function(n){return"movementY"in n?n.movementY:Na}}),Nn=Mt(Ms),lc=_({},Ms,{dataTransfer:0}),sd=Mt(lc),Vs=_({},ks,{relatedTarget:0}),Oa=Mt(Vs),fl=_({},$e,{animationName:0,elapsedTime:0,pseudoElement:0}),Da=Mt(fl),uc=_({},$e,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Pa=Mt(uc),ad=_({},$e,{data:0}),dl=Mt(ad),Ls={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ml(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=hc[n])?!!s[n]:!1}function Us(){return ml}var fc=_({},ks,{key:function(n){if(n.key){var s=Ls[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=ni(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?cc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Us,charCode:function(n){return n.type==="keypress"?ni(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ni(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ka=Mt(fc),dc=_({},Ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pl=Mt(dc),Ui=_({},ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Us}),mc=Mt(Ui),pc=_({},$e,{propertyName:0,elapsedTime:0,pseudoElement:0}),gc=Mt(pc),yc=_({},Ms,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ma=Mt(yc),on=_({},$e,{newState:0,oldState:0}),vc=Mt(on),_c=[9,13,27,32],si=Fn&&"CompositionEvent"in window,h=null;Fn&&"documentMode"in document&&(h=document.documentMode);var y=Fn&&"TextEvent"in window&&!h,v=Fn&&(!si||h&&8<h&&11>=h),A=" ",L=!1;function H(n,s){switch(n){case"keyup":return _c.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ae(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var je=!1;function Ct(n,s){switch(n){case"compositionend":return ae(s);case"keypress":return s.which!==32?null:(L=!0,A);case"textInput":return n=s.data,n===A&&L?null:n;default:return null}}function ze(n,s){if(je)return n==="compositionend"||!si&&H(n,s)?(n=cl(),Li=Er=ti=null,je=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return v&&s.locale!=="ko"?null:s.data;default:return null}}var Vt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xt(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!Vt[n.type]:s==="textarea"}function ji(n,s,o,u){Mi?Vi?Vi.push(u):Vi=[u]:Mi=u,s=sh(s,"onChange"),0<s.length&&(o=new Ca("onChange","change",null,o,u),n.push({event:o,listeners:s}))}var qt=null,ai=null;function gl(n){S0(n,0)}function Ec(n){var s=Jn(n);if(al(s))return n}function Gy(n,s){if(n==="change")return s}var $y=!1;if(Fn){var od;if(Fn){var ld="oninput"in document;if(!ld){var Ky=document.createElement("div");Ky.setAttribute("oninput","return;"),ld=typeof Ky.oninput=="function"}od=ld}else od=!1;$y=od&&(!document.documentMode||9<document.documentMode)}function Yy(){qt&&(qt.detachEvent("onpropertychange",Qy),ai=qt=null)}function Qy(n){if(n.propertyName==="value"&&Ec(ai)){var s=[];ji(s,ai,n,Cn(n)),ac(gl,s)}}function Xw(n,s,o){n==="focusin"?(Yy(),qt=s,ai=o,qt.attachEvent("onpropertychange",Qy)):n==="focusout"&&Yy()}function Ww(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ec(ai)}function Jw(n,s){if(n==="click")return Ec(s)}function Zw(n,s){if(n==="input"||n==="change")return Ec(s)}function eI(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var gn=typeof Object.is=="function"?Object.is:eI;function yl(n,s){if(gn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var o=Object.keys(n),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!ys.call(s,f)||!gn(n[f],s[f]))return!1}return!0}function Xy(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Wy(n,s){var o=Xy(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=s&&u>=s)return{node:o,offset:s-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Xy(o)}}function Jy(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?Jy(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function Zy(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var s=Cs(n.document);s instanceof n.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)n=s.contentWindow;else break;s=Cs(n.document)}return s}function ud(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}var tI=Fn&&"documentMode"in document&&11>=document.documentMode,Va=null,cd=null,vl=null,hd=!1;function ev(n,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;hd||Va==null||Va!==Cs(u)||(u=Va,"selectionStart"in u&&ud(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),vl&&yl(vl,u)||(vl=u,u=sh(cd,"onSelect"),0<u.length&&(s=new Ca("onSelect","select",null,s,o),n.push({event:s,listeners:u}),s.target=Va)))}function js(n,s){var o={};return o[n.toLowerCase()]=s.toLowerCase(),o["Webkit"+n]="webkit"+s,o["Moz"+n]="moz"+s,o}var La={animationend:js("Animation","AnimationEnd"),animationiteration:js("Animation","AnimationIteration"),animationstart:js("Animation","AnimationStart"),transitionrun:js("Transition","TransitionRun"),transitionstart:js("Transition","TransitionStart"),transitioncancel:js("Transition","TransitionCancel"),transitionend:js("Transition","TransitionEnd")},fd={},tv={};Fn&&(tv=document.createElement("div").style,"AnimationEvent"in window||(delete La.animationend.animation,delete La.animationiteration.animation,delete La.animationstart.animation),"TransitionEvent"in window||delete La.transitionend.transition);function zs(n){if(fd[n])return fd[n];if(!La[n])return n;var s=La[n],o;for(o in s)if(s.hasOwnProperty(o)&&o in tv)return fd[n]=s[o];return n}var nv=zs("animationend"),iv=zs("animationiteration"),rv=zs("animationstart"),nI=zs("transitionrun"),iI=zs("transitionstart"),rI=zs("transitioncancel"),sv=zs("transitionend"),av=new Map,dd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");dd.push("scrollEnd");function qn(n,s){av.set(n,s),Bn(s,[n])}var ov=new WeakMap;function On(n,s){if(typeof n=="object"&&n!==null){var o=ov.get(n);return o!==void 0?o:(s={value:n,source:s,stack:wa(s)},ov.set(n,s),s)}return{value:n,source:s,stack:wa(s)}}var Dn=[],Ua=0,md=0;function bc(){for(var n=Ua,s=md=Ua=0;s<n;){var o=Dn[s];Dn[s++]=null;var u=Dn[s];Dn[s++]=null;var f=Dn[s];Dn[s++]=null;var d=Dn[s];if(Dn[s++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}d!==0&&lv(o,f,d)}}function Tc(n,s,o,u){Dn[Ua++]=n,Dn[Ua++]=s,Dn[Ua++]=o,Dn[Ua++]=u,md|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function pd(n,s,o,u){return Tc(n,s,o,u),Ac(n)}function ja(n,s){return Tc(n,null,null,s),Ac(n)}function lv(n,s,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var f=!1,d=n.return;d!==null;)d.childLanes|=o,u=d.alternate,u!==null&&(u.childLanes|=o),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(f=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,f&&s!==null&&(f=31-Wt(o),n=d.hiddenUpdates,u=n[f],u===null?n[f]=[s]:u.push(s),s.lane=o|536870912),d):null}function Ac(n){if(50<ql)throw ql=0,bm=null,Error(r(185));for(var s=n.return;s!==null;)n=s,s=n.return;return n.tag===3?n.stateNode:null}var za={};function sI(n,s,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(n,s,o,u){return new sI(n,s,o,u)}function gd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function zi(n,s){var o=n.alternate;return o===null?(o=yn(n.tag,s,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=s,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,s=n.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function uv(n,s){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=s,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,s=o.dependencies,n.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),n}function Sc(n,s,o,u,f,d){var E=0;if(u=n,typeof n=="function")gd(n)&&(E=1);else if(typeof n=="string")E=oR(n,o,ye.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case C:return n=yn(31,o,s,f),n.elementType=C,n.lanes=d,n;case G:return Bs(o.children,f,d,s);case Q:E=8,f|=24;break;case F:return n=yn(12,o,s,f|2),n.elementType=F,n.lanes=d,n;case ce:return n=yn(13,o,s,f),n.elementType=ce,n.lanes=d,n;case Ce:return n=yn(19,o,s,f),n.elementType=Ce,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ee:case ne:E=10;break e;case ie:E=9;break e;case fe:E=11;break e;case D:E=14;break e;case w:E=16,u=null;break e}E=29,o=Error(r(130,n===null?"null":typeof n,"")),u=null}return s=yn(E,o,s,f),s.elementType=n,s.type=u,s.lanes=d,s}function Bs(n,s,o,u){return n=yn(7,n,u,s),n.lanes=o,n}function yd(n,s,o){return n=yn(6,n,null,s),n.lanes=o,n}function vd(n,s,o){return s=yn(4,n.children!==null?n.children:[],n.key,s),s.lanes=o,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}var Ba=[],Fa=0,wc=null,Ic=0,Pn=[],kn=0,Fs=null,Bi=1,Fi="";function qs(n,s){Ba[Fa++]=Ic,Ba[Fa++]=wc,wc=n,Ic=s}function cv(n,s,o){Pn[kn++]=Bi,Pn[kn++]=Fi,Pn[kn++]=Fs,Fs=n;var u=Bi;n=Fi;var f=32-Wt(u)-1;u&=~(1<<f),o+=1;var d=32-Wt(s)+f;if(30<d){var E=f-f%5;d=(u&(1<<E)-1).toString(32),u>>=E,f-=E,Bi=1<<32-Wt(s)+f|o<<f|u,Fi=d+n}else Bi=1<<d|o<<f|u,Fi=n}function _d(n){n.return!==null&&(qs(n,1),cv(n,1,0))}function Ed(n){for(;n===wc;)wc=Ba[--Fa],Ba[Fa]=null,Ic=Ba[--Fa],Ba[Fa]=null;for(;n===Fs;)Fs=Pn[--kn],Pn[kn]=null,Fi=Pn[--kn],Pn[kn]=null,Bi=Pn[--kn],Pn[kn]=null}var ln=null,dt=null,Ge=!1,Hs=null,oi=!1,bd=Error(r(519));function Gs(n){var s=Error(r(418,""));throw bl(On(s,n)),bd}function hv(n){var s=n.stateNode,o=n.type,u=n.memoizedProps;switch(s[Rt]=n,s[Et]=u,o){case"dialog":Ve("cancel",s),Ve("close",s);break;case"iframe":case"object":case"embed":Ve("load",s);break;case"video":case"audio":for(o=0;o<Gl.length;o++)Ve(Gl[o],s);break;case"source":Ve("error",s);break;case"img":case"image":case"link":Ve("error",s),Ve("load",s);break;case"details":Ve("toggle",s);break;case"input":Ve("invalid",s),xs(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Ia(s);break;case"select":Ve("invalid",s);break;case"textarea":Ve("invalid",s),Ns(s,u.value,u.defaultValue,u.children),Ia(s)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||C0(s.textContent,o)?(u.popover!=null&&(Ve("beforetoggle",s),Ve("toggle",s)),u.onScroll!=null&&Ve("scroll",s),u.onScrollEnd!=null&&Ve("scrollend",s),u.onClick!=null&&(s.onclick=ah),s=!0):s=!1,s||Gs(n)}function fv(n){for(ln=n.return;ln;)switch(ln.tag){case 5:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:ln=ln.return}}function _l(n){if(n!==ln)return!1;if(!Ge)return fv(n),Ge=!0,!1;var s=n.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||Lm(n.type,n.memoizedProps)),o=!o),o&&dt&&Gs(n),fv(n),s===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(s===0){dt=Gn(n.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;n=n.nextSibling}dt=null}}else s===27?(s=dt,Vr(n.type)?(n=Bm,Bm=null,dt=n):dt=s):dt=ln?Gn(n.stateNode.nextSibling):null;return!0}function El(){dt=ln=null,Ge=!1}function dv(){var n=Hs;return n!==null&&(fn===null?fn=n:fn.push.apply(fn,n),Hs=null),n}function bl(n){Hs===null?Hs=[n]:Hs.push(n)}var Td=J(null),$s=null,qi=null;function br(n,s,o){re(Td,s._currentValue),s._currentValue=o}function Hi(n){n._currentValue=Td.current,le(Td)}function Ad(n,s,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),n===o)break;n=n.return}}function Sd(n,s,o,u){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var d=f.dependencies;if(d!==null){var E=f.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=f;for(var R=0;R<s.length;R++)if(T.context===s[R]){d.lanes|=o,T=d.alternate,T!==null&&(T.lanes|=o),Ad(d.return,o,n),u||(E=null);break e}d=T.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(r(341));E.lanes|=o,d=E.alternate,d!==null&&(d.lanes|=o),Ad(E,o,n),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===n){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function Tl(n,s,o,u){n=null;for(var f=s,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(r(387));if(E=E.memoizedProps,E!==null){var T=f.type;gn(f.pendingProps.value,E.value)||(n!==null?n.push(T):n=[T])}}else if(f===kt.current){if(E=f.alternate,E===null)throw Error(r(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(Wl):n=[Wl])}f=f.return}n!==null&&Sd(s,n,o,u),s.flags|=262144}function Rc(n){for(n=n.firstContext;n!==null;){if(!gn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ks(n){$s=n,qi=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Jt(n){return mv($s,n)}function Cc(n,s){return $s===null&&Ks(n),mv(n,s)}function mv(n,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},qi===null){if(n===null)throw Error(r(308));qi=s,n.dependencies={lanes:0,firstContext:s},n.flags|=524288}else qi=qi.next=s;return o}var aI=typeof AbortController<"u"?AbortController:function(){var n=[],s=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){s.aborted=!0,n.forEach(function(o){return o()})}},oI=i.unstable_scheduleCallback,lI=i.unstable_NormalPriority,Nt={$$typeof:ne,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wd(){return{controller:new aI,data:new Map,refCount:0}}function Al(n){n.refCount--,n.refCount===0&&oI(lI,function(){n.controller.abort()})}var Sl=null,Id=0,qa=0,Ha=null;function uI(n,s){if(Sl===null){var o=Sl=[];Id=0,qa=Cm(),Ha={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Id++,s.then(pv,pv),s}function pv(){if(--Id===0&&Sl!==null){Ha!==null&&(Ha.status="fulfilled");var n=Sl;Sl=null,qa=0,Ha=null;for(var s=0;s<n.length;s++)(0,n[s])()}}function cI(n,s){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return n.then(function(){u.status="fulfilled",u.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var gv=$.S;$.S=function(n,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&uI(n,s),gv!==null&&gv(n,s)};var Ys=J(null);function Rd(){var n=Ys.current;return n!==null?n:rt.pooledCache}function xc(n,s){s===null?re(Ys,Ys.current):re(Ys,s.pool)}function yv(){var n=Rd();return n===null?null:{parent:Nt._currentValue,pool:n}}var wl=Error(r(460)),vv=Error(r(474)),Nc=Error(r(542)),Cd={then:function(){}};function _v(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Oc(){}function Ev(n,s,o){switch(o=n[o],o===void 0?n.push(s):o!==s&&(s.then(Oc,Oc),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,Tv(n),n;default:if(typeof s.status=="string")s.then(Oc,Oc);else{if(n=rt,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=s,n.status="pending",n.then(function(u){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=u}},function(u){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,Tv(n),n}throw Il=s,wl}}var Il=null;function bv(){if(Il===null)throw Error(r(459));var n=Il;return Il=null,n}function Tv(n){if(n===wl||n===Nc)throw Error(r(483))}var Tr=!1;function xd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nd(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Ar(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Sr(n,s,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Qe&2)!==0){var f=u.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s,s=Ac(n),lv(n,null,o),s}return Tc(n,u,s,o),Ac(n)}function Rl(n,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,tl(n,o)}}function Od(n,s){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,d=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};d===null?f=d=E:d=d.next=E,o=o.next}while(o!==null);d===null?f=d=s:d=d.next=s}else f=d=s;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=s:n.next=s,o.lastBaseUpdate=s}var Dd=!1;function Cl(){if(Dd){var n=Ha;if(n!==null)throw n}}function xl(n,s,o,u){Dd=!1;var f=n.updateQueue;Tr=!1;var d=f.firstBaseUpdate,E=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var R=T,z=R.next;R.next=null,E===null?d=z:E.next=z,E=R;var K=n.alternate;K!==null&&(K=K.updateQueue,T=K.lastBaseUpdate,T!==E&&(T===null?K.firstBaseUpdate=z:T.next=z,K.lastBaseUpdate=R))}if(d!==null){var X=f.baseState;E=0,K=z=R=null,T=d;do{var B=T.lane&-536870913,q=B!==T.lane;if(q?(Be&B)===B:(u&B)===B){B!==0&&B===qa&&(Dd=!0),K!==null&&(K=K.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Te=n,_e=T;B=s;var et=o;switch(_e.tag){case 1:if(Te=_e.payload,typeof Te=="function"){X=Te.call(et,X,B);break e}X=Te;break e;case 3:Te.flags=Te.flags&-65537|128;case 0:if(Te=_e.payload,B=typeof Te=="function"?Te.call(et,X,B):Te,B==null)break e;X=_({},X,B);break e;case 2:Tr=!0}}B=T.callback,B!==null&&(n.flags|=64,q&&(n.flags|=8192),q=f.callbacks,q===null?f.callbacks=[B]:q.push(B))}else q={lane:B,tag:T.tag,payload:T.payload,callback:T.callback,next:null},K===null?(z=K=q,R=X):K=K.next=q,E|=B;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;q=T,T=q.next,q.next=null,f.lastBaseUpdate=q,f.shared.pending=null}}while(!0);K===null&&(R=X),f.baseState=R,f.firstBaseUpdate=z,f.lastBaseUpdate=K,d===null&&(f.shared.lanes=0),Dr|=E,n.lanes=E,n.memoizedState=X}}function Av(n,s){if(typeof n!="function")throw Error(r(191,n));n.call(s)}function Sv(n,s){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)Av(o[n],s)}var Ga=J(null),Dc=J(0);function wv(n,s){n=Wi,re(Dc,n),re(Ga,s),Wi=n|s.baseLanes}function Pd(){re(Dc,Wi),re(Ga,Ga.current)}function kd(){Wi=Dc.current,le(Ga),le(Dc)}var wr=0,Ne=null,Je=null,Tt=null,Pc=!1,$a=!1,Qs=!1,kc=0,Nl=0,Ka=null,hI=0;function gt(){throw Error(r(321))}function Md(n,s){if(s===null)return!1;for(var o=0;o<s.length&&o<n.length;o++)if(!gn(n[o],s[o]))return!1;return!0}function Vd(n,s,o,u,f,d){return wr=d,Ne=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,$.H=n===null||n.memoizedState===null?l_:u_,Qs=!1,d=o(u,f),Qs=!1,$a&&(d=Rv(s,o,u,f)),Iv(n),d}function Iv(n){$.H=zc;var s=Je!==null&&Je.next!==null;if(wr=0,Tt=Je=Ne=null,Pc=!1,Nl=0,Ka=null,s)throw Error(r(300));n===null||Lt||(n=n.dependencies,n!==null&&Rc(n)&&(Lt=!0))}function Rv(n,s,o,u){Ne=n;var f=0;do{if($a&&(Ka=null),Nl=0,$a=!1,25<=f)throw Error(r(301));if(f+=1,Tt=Je=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}$.H=vI,d=s(o,u)}while($a);return d}function fI(){var n=$.H,s=n.useState()[0];return s=typeof s.then=="function"?Ol(s):s,n=n.useState()[0],(Je!==null?Je.memoizedState:null)!==n&&(Ne.flags|=1024),s}function Ld(){var n=kc!==0;return kc=0,n}function Ud(n,s,o){s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~o}function jd(n){if(Pc){for(n=n.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}Pc=!1}wr=0,Tt=Je=Ne=null,$a=!1,Nl=kc=0,Ka=null}function cn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?Ne.memoizedState=Tt=n:Tt=Tt.next=n,Tt}function At(){if(Je===null){var n=Ne.alternate;n=n!==null?n.memoizedState:null}else n=Je.next;var s=Tt===null?Ne.memoizedState:Tt.next;if(s!==null)Tt=s,Je=n;else{if(n===null)throw Ne.alternate===null?Error(r(467)):Error(r(310));Je=n,n={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},Tt===null?Ne.memoizedState=Tt=n:Tt=Tt.next=n}return Tt}function zd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ol(n){var s=Nl;return Nl+=1,Ka===null&&(Ka=[]),n=Ev(Ka,n,s),s=Ne,(Tt===null?s.memoizedState:Tt.next)===null&&(s=s.alternate,$.H=s===null||s.memoizedState===null?l_:u_),n}function Mc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Ol(n);if(n.$$typeof===ne)return Jt(n)}throw Error(r(438,String(n)))}function Bd(n){var s=null,o=Ne.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=Ne.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=zd(),Ne.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(n),u=0;u<n;u++)o[u]=P;return s.index++,o}function Gi(n,s){return typeof s=="function"?s(n):s}function Vc(n){var s=At();return Fd(s,Je,n)}function Fd(n,s,o){var u=n.queue;if(u===null)throw Error(r(311));u.lastRenderedReducer=o;var f=n.baseQueue,d=u.pending;if(d!==null){if(f!==null){var E=f.next;f.next=d.next,d.next=E}s.baseQueue=f=d,u.pending=null}if(d=n.baseState,f===null)n.memoizedState=d;else{s=f.next;var T=E=null,R=null,z=s,K=!1;do{var X=z.lane&-536870913;if(X!==z.lane?(Be&X)===X:(wr&X)===X){var B=z.revertLane;if(B===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),X===qa&&(K=!0);else if((wr&B)===B){z=z.next,B===qa&&(K=!0);continue}else X={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},R===null?(T=R=X,E=d):R=R.next=X,Ne.lanes|=B,Dr|=B;X=z.action,Qs&&o(d,X),d=z.hasEagerState?z.eagerState:o(d,X)}else B={lane:X,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},R===null?(T=R=B,E=d):R=R.next=B,Ne.lanes|=X,Dr|=X;z=z.next}while(z!==null&&z!==s);if(R===null?E=d:R.next=T,!gn(d,n.memoizedState)&&(Lt=!0,K&&(o=Ha,o!==null)))throw o;n.memoizedState=d,n.baseState=E,n.baseQueue=R,u.lastRenderedState=d}return f===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function qd(n){var s=At(),o=s.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=n;var u=o.dispatch,f=o.pending,d=s.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do d=n(d,E.action),E=E.next;while(E!==f);gn(d,s.memoizedState)||(Lt=!0),s.memoizedState=d,s.baseQueue===null&&(s.baseState=d),o.lastRenderedState=d}return[d,u]}function Cv(n,s,o){var u=Ne,f=At(),d=Ge;if(d){if(o===void 0)throw Error(r(407));o=o()}else o=s();var E=!gn((Je||f).memoizedState,o);E&&(f.memoizedState=o,Lt=!0),f=f.queue;var T=Ov.bind(null,u,f,n);if(Dl(2048,8,T,[n]),f.getSnapshot!==s||E||Tt!==null&&Tt.memoizedState.tag&1){if(u.flags|=2048,Ya(9,Lc(),Nv.bind(null,u,f,o,s),null),rt===null)throw Error(r(349));d||(wr&124)!==0||xv(u,s,o)}return o}function xv(n,s,o){n.flags|=16384,n={getSnapshot:s,value:o},s=Ne.updateQueue,s===null?(s=zd(),Ne.updateQueue=s,s.stores=[n]):(o=s.stores,o===null?s.stores=[n]:o.push(n))}function Nv(n,s,o,u){s.value=o,s.getSnapshot=u,Dv(s)&&Pv(n)}function Ov(n,s,o){return o(function(){Dv(s)&&Pv(n)})}function Dv(n){var s=n.getSnapshot;n=n.value;try{var o=s();return!gn(n,o)}catch{return!0}}function Pv(n){var s=ja(n,2);s!==null&&Tn(s,n,2)}function Hd(n){var s=cn();if(typeof n=="function"){var o=n;if(n=o(),Qs){mn(!0);try{o()}finally{mn(!1)}}}return s.memoizedState=s.baseState=n,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:n},s}function kv(n,s,o,u){return n.baseState=o,Fd(n,Je,typeof u=="function"?u:Gi)}function dI(n,s,o,u,f){if(jc(n))throw Error(r(485));if(n=s.action,n!==null){var d={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};$.T!==null?o(!0):d.isTransition=!1,u(d),o=s.pending,o===null?(d.next=s.pending=d,Mv(s,d)):(d.next=o.next,s.pending=o.next=d)}}function Mv(n,s){var o=s.action,u=s.payload,f=n.state;if(s.isTransition){var d=$.T,E={};$.T=E;try{var T=o(f,u),R=$.S;R!==null&&R(E,T),Vv(n,s,T)}catch(z){Gd(n,s,z)}finally{$.T=d}}else try{d=o(f,u),Vv(n,s,d)}catch(z){Gd(n,s,z)}}function Vv(n,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Lv(n,s,u)},function(u){return Gd(n,s,u)}):Lv(n,s,o)}function Lv(n,s,o){s.status="fulfilled",s.value=o,Uv(s),n.state=o,s=n.pending,s!==null&&(o=s.next,o===s?n.pending=null:(o=o.next,s.next=o,Mv(n,o)))}function Gd(n,s,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,Uv(s),s=s.next;while(s!==u)}n.action=null}function Uv(n){n=n.listeners;for(var s=0;s<n.length;s++)(0,n[s])()}function jv(n,s){return s}function zv(n,s){if(Ge){var o=rt.formState;if(o!==null){e:{var u=Ne;if(Ge){if(dt){t:{for(var f=dt,d=oi;f.nodeType!==8;){if(!d){f=null;break t}if(f=Gn(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){dt=Gn(f.nextSibling),u=f.data==="F!";break e}}Gs(u)}u=!1}u&&(s=o[0])}}return o=cn(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jv,lastRenderedState:s},o.queue=u,o=s_.bind(null,Ne,u),u.dispatch=o,u=Hd(!1),d=Xd.bind(null,Ne,!1,u.queue),u=cn(),f={state:s,dispatch:null,action:n,pending:null},u.queue=f,o=dI.bind(null,Ne,f,d,o),f.dispatch=o,u.memoizedState=n,[s,o,!1]}function Bv(n){var s=At();return Fv(s,Je,n)}function Fv(n,s,o){if(s=Fd(n,s,jv)[0],n=Vc(Gi)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=Ol(s)}catch(E){throw E===wl?Nc:E}else u=s;s=At();var f=s.queue,d=f.dispatch;return o!==s.memoizedState&&(Ne.flags|=2048,Ya(9,Lc(),mI.bind(null,f,o),null)),[u,d,n]}function mI(n,s){n.action=s}function qv(n){var s=At(),o=Je;if(o!==null)return Fv(s,o,n);At(),s=s.memoizedState,o=At();var u=o.queue.dispatch;return o.memoizedState=n,[s,u,!1]}function Ya(n,s,o,u){return n={tag:n,create:o,deps:u,inst:s,next:null},s=Ne.updateQueue,s===null&&(s=zd(),Ne.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,s.lastEffect=n),n}function Lc(){return{destroy:void 0,resource:void 0}}function Hv(){return At().memoizedState}function Uc(n,s,o,u){var f=cn();u=u===void 0?null:u,Ne.flags|=n,f.memoizedState=Ya(1|s,Lc(),o,u)}function Dl(n,s,o,u){var f=At();u=u===void 0?null:u;var d=f.memoizedState.inst;Je!==null&&u!==null&&Md(u,Je.memoizedState.deps)?f.memoizedState=Ya(s,d,o,u):(Ne.flags|=n,f.memoizedState=Ya(1|s,d,o,u))}function Gv(n,s){Uc(8390656,8,n,s)}function $v(n,s){Dl(2048,8,n,s)}function Kv(n,s){return Dl(4,2,n,s)}function Yv(n,s){return Dl(4,4,n,s)}function Qv(n,s){if(typeof s=="function"){n=n();var o=s(n);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function Xv(n,s,o){o=o!=null?o.concat([n]):null,Dl(4,4,Qv.bind(null,s,n),o)}function $d(){}function Wv(n,s){var o=At();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&Md(s,u[1])?u[0]:(o.memoizedState=[n,s],n)}function Jv(n,s){var o=At();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&Md(s,u[1]))return u[0];if(u=n(),Qs){mn(!0);try{n()}finally{mn(!1)}}return o.memoizedState=[u,s],u}function Kd(n,s,o){return o===void 0||(wr&1073741824)!==0?n.memoizedState=s:(n.memoizedState=o,n=t0(),Ne.lanes|=n,Dr|=n,o)}function Zv(n,s,o,u){return gn(o,s)?o:Ga.current!==null?(n=Kd(n,o,u),gn(n,s)||(Lt=!0),n):(wr&42)===0?(Lt=!0,n.memoizedState=o):(n=t0(),Ne.lanes|=n,Dr|=n,s)}function e_(n,s,o,u,f){var d=oe.p;oe.p=d!==0&&8>d?d:8;var E=$.T,T={};$.T=T,Xd(n,!1,s,o);try{var R=f(),z=$.S;if(z!==null&&z(T,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var K=cI(R,u);Pl(n,s,K,bn(n))}else Pl(n,s,u,bn(n))}catch(X){Pl(n,s,{then:function(){},status:"rejected",reason:X},bn())}finally{oe.p=d,$.T=E}}function pI(){}function Yd(n,s,o,u){if(n.tag!==5)throw Error(r(476));var f=t_(n).queue;e_(n,f,s,ge,o===null?pI:function(){return n_(n),o(u)})}function t_(n){var s=n.memoizedState;if(s!==null)return s;s={memoizedState:ge,baseState:ge,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:ge},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:o},next:null},n.memoizedState=s,n=n.alternate,n!==null&&(n.memoizedState=s),s}function n_(n){var s=t_(n).next.queue;Pl(n,s,{},bn())}function Qd(){return Jt(Wl)}function i_(){return At().memoizedState}function r_(){return At().memoizedState}function gI(n){for(var s=n.return;s!==null;){switch(s.tag){case 24:case 3:var o=bn();n=Ar(o);var u=Sr(s,n,o);u!==null&&(Tn(u,s,o),Rl(u,s,o)),s={cache:wd()},n.payload=s;return}s=s.return}}function yI(n,s,o){var u=bn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},jc(n)?a_(s,o):(o=pd(n,s,o,u),o!==null&&(Tn(o,n,u),o_(o,s,u)))}function s_(n,s,o){var u=bn();Pl(n,s,o,u)}function Pl(n,s,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(jc(n))a_(s,f);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=s.lastRenderedReducer,d!==null))try{var E=s.lastRenderedState,T=d(E,o);if(f.hasEagerState=!0,f.eagerState=T,gn(T,E))return Tc(n,s,f,0),rt===null&&bc(),!1}catch{}finally{}if(o=pd(n,s,f,u),o!==null)return Tn(o,n,u),o_(o,s,u),!0}return!1}function Xd(n,s,o,u){if(u={lane:2,revertLane:Cm(),action:u,hasEagerState:!1,eagerState:null,next:null},jc(n)){if(s)throw Error(r(479))}else s=pd(n,o,u,2),s!==null&&Tn(s,n,2)}function jc(n){var s=n.alternate;return n===Ne||s!==null&&s===Ne}function a_(n,s){$a=Pc=!0;var o=n.pending;o===null?s.next=s:(s.next=o.next,o.next=s),n.pending=s}function o_(n,s,o){if((o&4194048)!==0){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,tl(n,o)}}var zc={readContext:Jt,use:Mc,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useLayoutEffect:gt,useInsertionEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useSyncExternalStore:gt,useId:gt,useHostTransitionStatus:gt,useFormState:gt,useActionState:gt,useOptimistic:gt,useMemoCache:gt,useCacheRefresh:gt},l_={readContext:Jt,use:Mc,useCallback:function(n,s){return cn().memoizedState=[n,s===void 0?null:s],n},useContext:Jt,useEffect:Gv,useImperativeHandle:function(n,s,o){o=o!=null?o.concat([n]):null,Uc(4194308,4,Qv.bind(null,s,n),o)},useLayoutEffect:function(n,s){return Uc(4194308,4,n,s)},useInsertionEffect:function(n,s){Uc(4,2,n,s)},useMemo:function(n,s){var o=cn();s=s===void 0?null:s;var u=n();if(Qs){mn(!0);try{n()}finally{mn(!1)}}return o.memoizedState=[u,s],u},useReducer:function(n,s,o){var u=cn();if(o!==void 0){var f=o(s);if(Qs){mn(!0);try{o(s)}finally{mn(!1)}}}else f=s;return u.memoizedState=u.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},u.queue=n,n=n.dispatch=yI.bind(null,Ne,n),[u.memoizedState,n]},useRef:function(n){var s=cn();return n={current:n},s.memoizedState=n},useState:function(n){n=Hd(n);var s=n.queue,o=s_.bind(null,Ne,s);return s.dispatch=o,[n.memoizedState,o]},useDebugValue:$d,useDeferredValue:function(n,s){var o=cn();return Kd(o,n,s)},useTransition:function(){var n=Hd(!1);return n=e_.bind(null,Ne,n.queue,!0,!1),cn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,s,o){var u=Ne,f=cn();if(Ge){if(o===void 0)throw Error(r(407));o=o()}else{if(o=s(),rt===null)throw Error(r(349));(Be&124)!==0||xv(u,s,o)}f.memoizedState=o;var d={value:o,getSnapshot:s};return f.queue=d,Gv(Ov.bind(null,u,d,n),[n]),u.flags|=2048,Ya(9,Lc(),Nv.bind(null,u,d,o,s),null),o},useId:function(){var n=cn(),s=rt.identifierPrefix;if(Ge){var o=Fi,u=Bi;o=(u&~(1<<32-Wt(u)-1)).toString(32)+o,s="«"+s+"R"+o,o=kc++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=hI++,s="«"+s+"r"+o.toString(32)+"»";return n.memoizedState=s},useHostTransitionStatus:Qd,useFormState:zv,useActionState:zv,useOptimistic:function(n){var s=cn();s.memoizedState=s.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Xd.bind(null,Ne,!0,o),o.dispatch=s,[n,s]},useMemoCache:Bd,useCacheRefresh:function(){return cn().memoizedState=gI.bind(null,Ne)}},u_={readContext:Jt,use:Mc,useCallback:Wv,useContext:Jt,useEffect:$v,useImperativeHandle:Xv,useInsertionEffect:Kv,useLayoutEffect:Yv,useMemo:Jv,useReducer:Vc,useRef:Hv,useState:function(){return Vc(Gi)},useDebugValue:$d,useDeferredValue:function(n,s){var o=At();return Zv(o,Je.memoizedState,n,s)},useTransition:function(){var n=Vc(Gi)[0],s=At().memoizedState;return[typeof n=="boolean"?n:Ol(n),s]},useSyncExternalStore:Cv,useId:i_,useHostTransitionStatus:Qd,useFormState:Bv,useActionState:Bv,useOptimistic:function(n,s){var o=At();return kv(o,Je,n,s)},useMemoCache:Bd,useCacheRefresh:r_},vI={readContext:Jt,use:Mc,useCallback:Wv,useContext:Jt,useEffect:$v,useImperativeHandle:Xv,useInsertionEffect:Kv,useLayoutEffect:Yv,useMemo:Jv,useReducer:qd,useRef:Hv,useState:function(){return qd(Gi)},useDebugValue:$d,useDeferredValue:function(n,s){var o=At();return Je===null?Kd(o,n,s):Zv(o,Je.memoizedState,n,s)},useTransition:function(){var n=qd(Gi)[0],s=At().memoizedState;return[typeof n=="boolean"?n:Ol(n),s]},useSyncExternalStore:Cv,useId:i_,useHostTransitionStatus:Qd,useFormState:qv,useActionState:qv,useOptimistic:function(n,s){var o=At();return Je!==null?kv(o,Je,n,s):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:Bd,useCacheRefresh:r_},Qa=null,kl=0;function Bc(n){var s=kl;return kl+=1,Qa===null&&(Qa=[]),Ev(Qa,n,s)}function Ml(n,s){s=s.props.ref,n.ref=s!==void 0?s:null}function Fc(n,s){throw s.$$typeof===b?Error(r(525)):(n=Object.prototype.toString.call(s),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n)))}function c_(n){var s=n._init;return s(n._payload)}function h_(n){function s(M,O){if(n){var U=M.deletions;U===null?(M.deletions=[O],M.flags|=16):U.push(O)}}function o(M,O){if(!n)return null;for(;O!==null;)s(M,O),O=O.sibling;return null}function u(M){for(var O=new Map;M!==null;)M.key!==null?O.set(M.key,M):O.set(M.index,M),M=M.sibling;return O}function f(M,O){return M=zi(M,O),M.index=0,M.sibling=null,M}function d(M,O,U){return M.index=U,n?(U=M.alternate,U!==null?(U=U.index,U<O?(M.flags|=67108866,O):U):(M.flags|=67108866,O)):(M.flags|=1048576,O)}function E(M){return n&&M.alternate===null&&(M.flags|=67108866),M}function T(M,O,U,Y){return O===null||O.tag!==6?(O=yd(U,M.mode,Y),O.return=M,O):(O=f(O,U),O.return=M,O)}function R(M,O,U,Y){var he=U.type;return he===G?K(M,O,U.props.children,Y,U.key):O!==null&&(O.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===w&&c_(he)===O.type)?(O=f(O,U.props),Ml(O,U),O.return=M,O):(O=Sc(U.type,U.key,U.props,null,M.mode,Y),Ml(O,U),O.return=M,O)}function z(M,O,U,Y){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=vd(U,M.mode,Y),O.return=M,O):(O=f(O,U.children||[]),O.return=M,O)}function K(M,O,U,Y,he){return O===null||O.tag!==7?(O=Bs(U,M.mode,Y,he),O.return=M,O):(O=f(O,U),O.return=M,O)}function X(M,O,U){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=yd(""+O,M.mode,U),O.return=M,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case S:return U=Sc(O.type,O.key,O.props,null,M.mode,U),Ml(U,O),U.return=M,U;case j:return O=vd(O,M.mode,U),O.return=M,O;case w:var Y=O._init;return O=Y(O._payload),X(M,O,U)}if(ht(O)||V(O))return O=Bs(O,M.mode,U,null),O.return=M,O;if(typeof O.then=="function")return X(M,Bc(O),U);if(O.$$typeof===ne)return X(M,Cc(M,O),U);Fc(M,O)}return null}function B(M,O,U,Y){var he=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return he!==null?null:T(M,O,""+U,Y);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case S:return U.key===he?R(M,O,U,Y):null;case j:return U.key===he?z(M,O,U,Y):null;case w:return he=U._init,U=he(U._payload),B(M,O,U,Y)}if(ht(U)||V(U))return he!==null?null:K(M,O,U,Y,null);if(typeof U.then=="function")return B(M,O,Bc(U),Y);if(U.$$typeof===ne)return B(M,O,Cc(M,U),Y);Fc(M,U)}return null}function q(M,O,U,Y,he){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return M=M.get(U)||null,T(O,M,""+Y,he);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case S:return M=M.get(Y.key===null?U:Y.key)||null,R(O,M,Y,he);case j:return M=M.get(Y.key===null?U:Y.key)||null,z(O,M,Y,he);case w:var Pe=Y._init;return Y=Pe(Y._payload),q(M,O,U,Y,he)}if(ht(Y)||V(Y))return M=M.get(U)||null,K(O,M,Y,he,null);if(typeof Y.then=="function")return q(M,O,U,Bc(Y),he);if(Y.$$typeof===ne)return q(M,O,U,Cc(O,Y),he);Fc(O,Y)}return null}function Te(M,O,U,Y){for(var he=null,Pe=null,me=O,Ee=O=0,jt=null;me!==null&&Ee<U.length;Ee++){me.index>Ee?(jt=me,me=null):jt=me.sibling;var qe=B(M,me,U[Ee],Y);if(qe===null){me===null&&(me=jt);break}n&&me&&qe.alternate===null&&s(M,me),O=d(qe,O,Ee),Pe===null?he=qe:Pe.sibling=qe,Pe=qe,me=jt}if(Ee===U.length)return o(M,me),Ge&&qs(M,Ee),he;if(me===null){for(;Ee<U.length;Ee++)me=X(M,U[Ee],Y),me!==null&&(O=d(me,O,Ee),Pe===null?he=me:Pe.sibling=me,Pe=me);return Ge&&qs(M,Ee),he}for(me=u(me);Ee<U.length;Ee++)jt=q(me,M,Ee,U[Ee],Y),jt!==null&&(n&&jt.alternate!==null&&me.delete(jt.key===null?Ee:jt.key),O=d(jt,O,Ee),Pe===null?he=jt:Pe.sibling=jt,Pe=jt);return n&&me.forEach(function(Br){return s(M,Br)}),Ge&&qs(M,Ee),he}function _e(M,O,U,Y){if(U==null)throw Error(r(151));for(var he=null,Pe=null,me=O,Ee=O=0,jt=null,qe=U.next();me!==null&&!qe.done;Ee++,qe=U.next()){me.index>Ee?(jt=me,me=null):jt=me.sibling;var Br=B(M,me,qe.value,Y);if(Br===null){me===null&&(me=jt);break}n&&me&&Br.alternate===null&&s(M,me),O=d(Br,O,Ee),Pe===null?he=Br:Pe.sibling=Br,Pe=Br,me=jt}if(qe.done)return o(M,me),Ge&&qs(M,Ee),he;if(me===null){for(;!qe.done;Ee++,qe=U.next())qe=X(M,qe.value,Y),qe!==null&&(O=d(qe,O,Ee),Pe===null?he=qe:Pe.sibling=qe,Pe=qe);return Ge&&qs(M,Ee),he}for(me=u(me);!qe.done;Ee++,qe=U.next())qe=q(me,M,Ee,qe.value,Y),qe!==null&&(n&&qe.alternate!==null&&me.delete(qe.key===null?Ee:qe.key),O=d(qe,O,Ee),Pe===null?he=qe:Pe.sibling=qe,Pe=qe);return n&&me.forEach(function(_R){return s(M,_R)}),Ge&&qs(M,Ee),he}function et(M,O,U,Y){if(typeof U=="object"&&U!==null&&U.type===G&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case S:e:{for(var he=U.key;O!==null;){if(O.key===he){if(he=U.type,he===G){if(O.tag===7){o(M,O.sibling),Y=f(O,U.props.children),Y.return=M,M=Y;break e}}else if(O.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===w&&c_(he)===O.type){o(M,O.sibling),Y=f(O,U.props),Ml(Y,U),Y.return=M,M=Y;break e}o(M,O);break}else s(M,O);O=O.sibling}U.type===G?(Y=Bs(U.props.children,M.mode,Y,U.key),Y.return=M,M=Y):(Y=Sc(U.type,U.key,U.props,null,M.mode,Y),Ml(Y,U),Y.return=M,M=Y)}return E(M);case j:e:{for(he=U.key;O!==null;){if(O.key===he)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){o(M,O.sibling),Y=f(O,U.children||[]),Y.return=M,M=Y;break e}else{o(M,O);break}else s(M,O);O=O.sibling}Y=vd(U,M.mode,Y),Y.return=M,M=Y}return E(M);case w:return he=U._init,U=he(U._payload),et(M,O,U,Y)}if(ht(U))return Te(M,O,U,Y);if(V(U)){if(he=V(U),typeof he!="function")throw Error(r(150));return U=he.call(U),_e(M,O,U,Y)}if(typeof U.then=="function")return et(M,O,Bc(U),Y);if(U.$$typeof===ne)return et(M,O,Cc(M,U),Y);Fc(M,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,O!==null&&O.tag===6?(o(M,O.sibling),Y=f(O,U),Y.return=M,M=Y):(o(M,O),Y=yd(U,M.mode,Y),Y.return=M,M=Y),E(M)):o(M,O)}return function(M,O,U,Y){try{kl=0;var he=et(M,O,U,Y);return Qa=null,he}catch(me){if(me===wl||me===Nc)throw me;var Pe=yn(29,me,null,M.mode);return Pe.lanes=Y,Pe.return=M,Pe}finally{}}}var Xa=h_(!0),f_=h_(!1),Mn=J(null),li=null;function Ir(n){var s=n.alternate;re(Ot,Ot.current&1),re(Mn,n),li===null&&(s===null||Ga.current!==null||s.memoizedState!==null)&&(li=n)}function d_(n){if(n.tag===22){if(re(Ot,Ot.current),re(Mn,n),li===null){var s=n.alternate;s!==null&&s.memoizedState!==null&&(li=n)}}else Rr()}function Rr(){re(Ot,Ot.current),re(Mn,Mn.current)}function $i(n){le(Mn),li===n&&(li=null),le(Ot)}var Ot=J(0);function qc(n){for(var s=n;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||zm(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function Wd(n,s,o,u){s=n.memoizedState,o=o(u,s),o=o==null?s:_({},s,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Jd={enqueueSetState:function(n,s,o){n=n._reactInternals;var u=bn(),f=Ar(u);f.payload=s,o!=null&&(f.callback=o),s=Sr(n,f,u),s!==null&&(Tn(s,n,u),Rl(s,n,u))},enqueueReplaceState:function(n,s,o){n=n._reactInternals;var u=bn(),f=Ar(u);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Sr(n,f,u),s!==null&&(Tn(s,n,u),Rl(s,n,u))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var o=bn(),u=Ar(o);u.tag=2,s!=null&&(u.callback=s),s=Sr(n,u,o),s!==null&&(Tn(s,n,o),Rl(s,n,o))}};function m_(n,s,o,u,f,d,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,d,E):s.prototype&&s.prototype.isPureReactComponent?!yl(o,u)||!yl(f,d):!0}function p_(n,s,o,u){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==n&&Jd.enqueueReplaceState(s,s.state,null)}function Xs(n,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(n=n.defaultProps){o===s&&(o=_({},o));for(var f in n)o[f]===void 0&&(o[f]=n[f])}return o}var Hc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function g_(n){Hc(n)}function y_(n){console.error(n)}function v_(n){Hc(n)}function Gc(n,s){try{var o=n.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function __(n,s,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Zd(n,s,o){return o=Ar(o),o.tag=3,o.payload={element:null},o.callback=function(){Gc(n,s)},o}function E_(n){return n=Ar(n),n.tag=3,n}function b_(n,s,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var d=u.value;n.payload=function(){return f(d)},n.callback=function(){__(s,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){__(s,o,u),typeof f!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var T=u.stack;this.componentDidCatch(u.value,{componentStack:T!==null?T:""})})}function _I(n,s,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&Tl(s,o,f,!0),o=Mn.current,o!==null){switch(o.tag){case 13:return li===null?Am():o.alternate===null&&mt===0&&(mt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Cd?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),wm(n,u,f)),!1;case 22:return o.flags|=65536,u===Cd?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),wm(n,u,f)),!1}throw Error(r(435,o.tag))}return wm(n,u,f),Am(),!1}if(Ge)return s=Mn.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,u!==bd&&(n=Error(r(422),{cause:u}),bl(On(n,o)))):(u!==bd&&(s=Error(r(423),{cause:u}),bl(On(s,o))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,u=On(u,o),f=Zd(n.stateNode,u,f),Od(n,f),mt!==4&&(mt=2)),!1;var d=Error(r(520),{cause:u});if(d=On(d,o),Fl===null?Fl=[d]:Fl.push(d),mt!==4&&(mt=2),s===null)return!0;u=On(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,n=f&-f,o.lanes|=n,n=Zd(o.stateNode,u,n),Od(o,n),!1;case 1:if(s=o.type,d=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Pr===null||!Pr.has(d))))return o.flags|=65536,f&=-f,o.lanes|=f,f=E_(f),b_(f,n,o,u),Od(o,f),!1}o=o.return}while(o!==null);return!1}var T_=Error(r(461)),Lt=!1;function Ht(n,s,o,u){s.child=n===null?f_(s,null,o,u):Xa(s,n.child,o,u)}function A_(n,s,o,u,f){o=o.render;var d=s.ref;if("ref"in u){var E={};for(var T in u)T!=="ref"&&(E[T]=u[T])}else E=u;return Ks(s),u=Vd(n,s,o,E,d,f),T=Ld(),n!==null&&!Lt?(Ud(n,s,f),Ki(n,s,f)):(Ge&&T&&_d(s),s.flags|=1,Ht(n,s,u,f),s.child)}function S_(n,s,o,u,f){if(n===null){var d=o.type;return typeof d=="function"&&!gd(d)&&d.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=d,w_(n,s,d,u,f)):(n=Sc(o.type,null,u,s,s.mode,f),n.ref=s.ref,n.return=s,s.child=n)}if(d=n.child,!om(n,f)){var E=d.memoizedProps;if(o=o.compare,o=o!==null?o:yl,o(E,u)&&n.ref===s.ref)return Ki(n,s,f)}return s.flags|=1,n=zi(d,u),n.ref=s.ref,n.return=s,s.child=n}function w_(n,s,o,u,f){if(n!==null){var d=n.memoizedProps;if(yl(d,u)&&n.ref===s.ref)if(Lt=!1,s.pendingProps=u=d,om(n,f))(n.flags&131072)!==0&&(Lt=!0);else return s.lanes=n.lanes,Ki(n,s,f)}return em(n,s,o,u,f)}function I_(n,s,o){var u=s.pendingProps,f=u.children,d=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((s.flags&128)!==0){if(u=d!==null?d.baseLanes|o:o,n!==null){for(f=s.child=n.child,d=0;f!==null;)d=d|f.lanes|f.childLanes,f=f.sibling;s.childLanes=d&~u}else s.childLanes=0,s.child=null;return R_(n,s,u,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},n!==null&&xc(s,d!==null?d.cachePool:null),d!==null?wv(s,d):Pd(),d_(s);else return s.lanes=s.childLanes=536870912,R_(n,s,d!==null?d.baseLanes|o:o,o)}else d!==null?(xc(s,d.cachePool),wv(s,d),Rr(),s.memoizedState=null):(n!==null&&xc(s,null),Pd(),Rr());return Ht(n,s,f,o),s.child}function R_(n,s,o,u){var f=Rd();return f=f===null?null:{parent:Nt._currentValue,pool:f},s.memoizedState={baseLanes:o,cachePool:f},n!==null&&xc(s,null),Pd(),d_(s),n!==null&&Tl(n,s,u,!0),null}function $c(n,s){var o=s.ref;if(o===null)n!==null&&n.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(r(284));(n===null||n.ref!==o)&&(s.flags|=4194816)}}function em(n,s,o,u,f){return Ks(s),o=Vd(n,s,o,u,void 0,f),u=Ld(),n!==null&&!Lt?(Ud(n,s,f),Ki(n,s,f)):(Ge&&u&&_d(s),s.flags|=1,Ht(n,s,o,f),s.child)}function C_(n,s,o,u,f,d){return Ks(s),s.updateQueue=null,o=Rv(s,u,o,f),Iv(n),u=Ld(),n!==null&&!Lt?(Ud(n,s,d),Ki(n,s,d)):(Ge&&u&&_d(s),s.flags|=1,Ht(n,s,o,d),s.child)}function x_(n,s,o,u,f){if(Ks(s),s.stateNode===null){var d=za,E=o.contextType;typeof E=="object"&&E!==null&&(d=Jt(E)),d=new o(u,d),s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Jd,s.stateNode=d,d._reactInternals=s,d=s.stateNode,d.props=u,d.state=s.memoizedState,d.refs={},xd(s),E=o.contextType,d.context=typeof E=="object"&&E!==null?Jt(E):za,d.state=s.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Wd(s,o,E,u),d.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&Jd.enqueueReplaceState(d,d.state,null),xl(s,u,d,f),Cl(),d.state=s.memoizedState),typeof d.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(n===null){d=s.stateNode;var T=s.memoizedProps,R=Xs(o,T);d.props=R;var z=d.context,K=o.contextType;E=za,typeof K=="object"&&K!==null&&(E=Jt(K));var X=o.getDerivedStateFromProps;K=typeof X=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=s.pendingProps!==T,K||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||z!==E)&&p_(s,d,u,E),Tr=!1;var B=s.memoizedState;d.state=B,xl(s,u,d,f),Cl(),z=s.memoizedState,T||B!==z||Tr?(typeof X=="function"&&(Wd(s,o,X,u),z=s.memoizedState),(R=Tr||m_(s,o,R,u,B,z,E))?(K||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(s.flags|=4194308)):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=z),d.props=u,d.state=z,d.context=E,u=R):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{d=s.stateNode,Nd(n,s),E=s.memoizedProps,K=Xs(o,E),d.props=K,X=s.pendingProps,B=d.context,z=o.contextType,R=za,typeof z=="object"&&z!==null&&(R=Jt(z)),T=o.getDerivedStateFromProps,(z=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==X||B!==R)&&p_(s,d,u,R),Tr=!1,B=s.memoizedState,d.state=B,xl(s,u,d,f),Cl();var q=s.memoizedState;E!==X||B!==q||Tr||n!==null&&n.dependencies!==null&&Rc(n.dependencies)?(typeof T=="function"&&(Wd(s,o,T,u),q=s.memoizedState),(K=Tr||m_(s,o,K,u,B,q,R)||n!==null&&n.dependencies!==null&&Rc(n.dependencies))?(z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(u,q,R),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(u,q,R)),typeof d.componentDidUpdate=="function"&&(s.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===n.memoizedProps&&B===n.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&B===n.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=q),d.props=u,d.state=q,d.context=R,u=K):(typeof d.componentDidUpdate!="function"||E===n.memoizedProps&&B===n.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&B===n.memoizedState||(s.flags|=1024),u=!1)}return d=u,$c(n,s),u=(s.flags&128)!==0,d||u?(d=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:d.render(),s.flags|=1,n!==null&&u?(s.child=Xa(s,n.child,null,f),s.child=Xa(s,null,o,f)):Ht(n,s,o,f),s.memoizedState=d.state,n=s.child):n=Ki(n,s,f),n}function N_(n,s,o,u){return El(),s.flags|=256,Ht(n,s,o,u),s.child}var tm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nm(n){return{baseLanes:n,cachePool:yv()}}function im(n,s,o){return n=n!==null?n.childLanes&~o:0,s&&(n|=Vn),n}function O_(n,s,o){var u=s.pendingProps,f=!1,d=(s.flags&128)!==0,E;if((E=d)||(E=n!==null&&n.memoizedState===null?!1:(Ot.current&2)!==0),E&&(f=!0,s.flags&=-129),E=(s.flags&32)!==0,s.flags&=-33,n===null){if(Ge){if(f?Ir(s):Rr(),Ge){var T=dt,R;if(R=T){e:{for(R=T,T=oi;R.nodeType!==8;){if(!T){T=null;break e}if(R=Gn(R.nextSibling),R===null){T=null;break e}}T=R}T!==null?(s.memoizedState={dehydrated:T,treeContext:Fs!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},R=yn(18,null,null,0),R.stateNode=T,R.return=s,s.child=R,ln=s,dt=null,R=!0):R=!1}R||Gs(s)}if(T=s.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return zm(T)?s.lanes=32:s.lanes=536870912,null;$i(s)}return T=u.children,u=u.fallback,f?(Rr(),f=s.mode,T=Kc({mode:"hidden",children:T},f),u=Bs(u,f,o,null),T.return=s,u.return=s,T.sibling=u,s.child=T,f=s.child,f.memoizedState=nm(o),f.childLanes=im(n,E,o),s.memoizedState=tm,u):(Ir(s),rm(s,T))}if(R=n.memoizedState,R!==null&&(T=R.dehydrated,T!==null)){if(d)s.flags&256?(Ir(s),s.flags&=-257,s=sm(n,s,o)):s.memoizedState!==null?(Rr(),s.child=n.child,s.flags|=128,s=null):(Rr(),f=u.fallback,T=s.mode,u=Kc({mode:"visible",children:u.children},T),f=Bs(f,T,o,null),f.flags|=2,u.return=s,f.return=s,u.sibling=f,s.child=u,Xa(s,n.child,null,o),u=s.child,u.memoizedState=nm(o),u.childLanes=im(n,E,o),s.memoizedState=tm,s=f);else if(Ir(s),zm(T)){if(E=T.nextSibling&&T.nextSibling.dataset,E)var z=E.dgst;E=z,u=Error(r(419)),u.stack="",u.digest=E,bl({value:u,source:null,stack:null}),s=sm(n,s,o)}else if(Lt||Tl(n,s,o,!1),E=(o&n.childLanes)!==0,Lt||E){if(E=rt,E!==null&&(u=o&-o,u=(u&42)!==0?1:mr(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==R.retryLane))throw R.retryLane=u,ja(n,u),Tn(E,n,u),T_;T.data==="$?"||Am(),s=sm(n,s,o)}else T.data==="$?"?(s.flags|=192,s.child=n.child,s=null):(n=R.treeContext,dt=Gn(T.nextSibling),ln=s,Ge=!0,Hs=null,oi=!1,n!==null&&(Pn[kn++]=Bi,Pn[kn++]=Fi,Pn[kn++]=Fs,Bi=n.id,Fi=n.overflow,Fs=s),s=rm(s,u.children),s.flags|=4096);return s}return f?(Rr(),f=u.fallback,T=s.mode,R=n.child,z=R.sibling,u=zi(R,{mode:"hidden",children:u.children}),u.subtreeFlags=R.subtreeFlags&65011712,z!==null?f=zi(z,f):(f=Bs(f,T,o,null),f.flags|=2),f.return=s,u.return=s,u.sibling=f,s.child=u,u=f,f=s.child,T=n.child.memoizedState,T===null?T=nm(o):(R=T.cachePool,R!==null?(z=Nt._currentValue,R=R.parent!==z?{parent:z,pool:z}:R):R=yv(),T={baseLanes:T.baseLanes|o,cachePool:R}),f.memoizedState=T,f.childLanes=im(n,E,o),s.memoizedState=tm,u):(Ir(s),o=n.child,n=o.sibling,o=zi(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,n!==null&&(E=s.deletions,E===null?(s.deletions=[n],s.flags|=16):E.push(n)),s.child=o,s.memoizedState=null,o)}function rm(n,s){return s=Kc({mode:"visible",children:s},n.mode),s.return=n,n.child=s}function Kc(n,s){return n=yn(22,n,null,s),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function sm(n,s,o){return Xa(s,n.child,null,o),n=rm(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function D_(n,s,o){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s),Ad(n.return,s,o)}function am(n,s,o,u,f){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(d.isBackwards=s,d.rendering=null,d.renderingStartTime=0,d.last=u,d.tail=o,d.tailMode=f)}function P_(n,s,o){var u=s.pendingProps,f=u.revealOrder,d=u.tail;if(Ht(n,s,u.children,o),u=Ot.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&D_(n,o,s);else if(n.tag===19)D_(n,o,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(re(Ot,u),f){case"forwards":for(o=s.child,f=null;o!==null;)n=o.alternate,n!==null&&qc(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),am(s,!1,f,o,d);break;case"backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(n=f.alternate,n!==null&&qc(n)===null){s.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}am(s,!0,o,null,d);break;case"together":am(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Ki(n,s,o){if(n!==null&&(s.dependencies=n.dependencies),Dr|=s.lanes,(o&s.childLanes)===0)if(n!==null){if(Tl(n,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(n!==null&&s.child!==n.child)throw Error(r(153));if(s.child!==null){for(n=s.child,o=zi(n,n.pendingProps),s.child=o,o.return=s;n.sibling!==null;)n=n.sibling,o=o.sibling=zi(n,n.pendingProps),o.return=s;o.sibling=null}return s.child}function om(n,s){return(n.lanes&s)!==0?!0:(n=n.dependencies,!!(n!==null&&Rc(n)))}function EI(n,s,o){switch(s.tag){case 3:it(s,s.stateNode.containerInfo),br(s,Nt,n.memoizedState.cache),El();break;case 27:case 5:dr(s);break;case 4:it(s,s.stateNode.containerInfo);break;case 10:br(s,s.type,s.memoizedProps.value);break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(Ir(s),s.flags|=128,null):(o&s.child.childLanes)!==0?O_(n,s,o):(Ir(s),n=Ki(n,s,o),n!==null?n.sibling:null);Ir(s);break;case 19:var f=(n.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(Tl(n,s,o,!1),u=(o&s.childLanes)!==0),f){if(u)return P_(n,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),re(Ot,Ot.current),u)break;return null;case 22:case 23:return s.lanes=0,I_(n,s,o);case 24:br(s,Nt,n.memoizedState.cache)}return Ki(n,s,o)}function k_(n,s,o){if(n!==null)if(n.memoizedProps!==s.pendingProps)Lt=!0;else{if(!om(n,o)&&(s.flags&128)===0)return Lt=!1,EI(n,s,o);Lt=(n.flags&131072)!==0}else Lt=!1,Ge&&(s.flags&1048576)!==0&&cv(s,Ic,s.index);switch(s.lanes=0,s.tag){case 16:e:{n=s.pendingProps;var u=s.elementType,f=u._init;if(u=f(u._payload),s.type=u,typeof u=="function")gd(u)?(n=Xs(u,n),s.tag=1,s=x_(null,s,u,n,o)):(s.tag=0,s=em(null,s,u,n,o));else{if(u!=null){if(f=u.$$typeof,f===fe){s.tag=11,s=A_(null,s,u,n,o);break e}else if(f===D){s.tag=14,s=S_(null,s,u,n,o);break e}}throw s=Bt(u)||u,Error(r(306,s,""))}}return s;case 0:return em(n,s,s.type,s.pendingProps,o);case 1:return u=s.type,f=Xs(u,s.pendingProps),x_(n,s,u,f,o);case 3:e:{if(it(s,s.stateNode.containerInfo),n===null)throw Error(r(387));u=s.pendingProps;var d=s.memoizedState;f=d.element,Nd(n,s),xl(s,u,null,o);var E=s.memoizedState;if(u=E.cache,br(s,Nt,u),u!==d.cache&&Sd(s,[Nt],o,!0),Cl(),u=E.element,d.isDehydrated)if(d={element:u,isDehydrated:!1,cache:E.cache},s.updateQueue.baseState=d,s.memoizedState=d,s.flags&256){s=N_(n,s,u,o);break e}else if(u!==f){f=On(Error(r(424)),s),bl(f),s=N_(n,s,u,o);break e}else{switch(n=s.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(dt=Gn(n.firstChild),ln=s,Ge=!0,Hs=null,oi=!0,o=f_(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(El(),u===f){s=Ki(n,s,o);break e}Ht(n,s,u,o)}s=s.child}return s;case 26:return $c(n,s),n===null?(o=U0(s.type,null,s.pendingProps,null))?s.memoizedState=o:Ge||(o=s.type,n=s.pendingProps,u=oh(Se.current).createElement(o),u[Rt]=s,u[Et]=n,$t(u,o,n),pt(u),s.stateNode=u):s.memoizedState=U0(s.type,n.memoizedProps,s.pendingProps,n.memoizedState),null;case 27:return dr(s),n===null&&Ge&&(u=s.stateNode=M0(s.type,s.pendingProps,Se.current),ln=s,oi=!0,f=dt,Vr(s.type)?(Bm=f,dt=Gn(u.firstChild)):dt=f),Ht(n,s,s.pendingProps.children,o),$c(n,s),n===null&&(s.flags|=4194304),s.child;case 5:return n===null&&Ge&&((f=u=dt)&&(u=YI(u,s.type,s.pendingProps,oi),u!==null?(s.stateNode=u,ln=s,dt=Gn(u.firstChild),oi=!1,f=!0):f=!1),f||Gs(s)),dr(s),f=s.type,d=s.pendingProps,E=n!==null?n.memoizedProps:null,u=d.children,Lm(f,d)?u=null:E!==null&&Lm(f,E)&&(s.flags|=32),s.memoizedState!==null&&(f=Vd(n,s,fI,null,null,o),Wl._currentValue=f),$c(n,s),Ht(n,s,u,o),s.child;case 6:return n===null&&Ge&&((n=o=dt)&&(o=QI(o,s.pendingProps,oi),o!==null?(s.stateNode=o,ln=s,dt=null,n=!0):n=!1),n||Gs(s)),null;case 13:return O_(n,s,o);case 4:return it(s,s.stateNode.containerInfo),u=s.pendingProps,n===null?s.child=Xa(s,null,u,o):Ht(n,s,u,o),s.child;case 11:return A_(n,s,s.type,s.pendingProps,o);case 7:return Ht(n,s,s.pendingProps,o),s.child;case 8:return Ht(n,s,s.pendingProps.children,o),s.child;case 12:return Ht(n,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,br(s,s.type,u.value),Ht(n,s,u.children,o),s.child;case 9:return f=s.type._context,u=s.pendingProps.children,Ks(s),f=Jt(f),u=u(f),s.flags|=1,Ht(n,s,u,o),s.child;case 14:return S_(n,s,s.type,s.pendingProps,o);case 15:return w_(n,s,s.type,s.pendingProps,o);case 19:return P_(n,s,o);case 31:return u=s.pendingProps,o=s.mode,u={mode:u.mode,children:u.children},n===null?(o=Kc(u,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=zi(n.child,u),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return I_(n,s,o);case 24:return Ks(s),u=Jt(Nt),n===null?(f=Rd(),f===null&&(f=rt,d=wd(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=o),f=d),s.memoizedState={parent:u,cache:f},xd(s),br(s,Nt,f)):((n.lanes&o)!==0&&(Nd(n,s),xl(s,null,null,o),Cl()),f=n.memoizedState,d=s.memoizedState,f.parent!==u?(f={parent:u,cache:u},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),br(s,Nt,u)):(u=d.cache,br(s,Nt,u),u!==f.cache&&Sd(s,[Nt],o,!0))),Ht(n,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(r(156,s.tag))}function Yi(n){n.flags|=4}function M_(n,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!q0(s)){if(s=Mn.current,s!==null&&((Be&4194048)===Be?li!==null:(Be&62914560)!==Be&&(Be&536870912)===0||s!==li))throw Il=Cd,vv;n.flags|=8192}}function Yc(n,s){s!==null&&(n.flags|=4),n.flags&16384&&(s=n.tag!==22?Zo():536870912,n.lanes|=s,eo|=s)}function Vl(n,s){if(!Ge)switch(n.tailMode){case"hidden":s=n.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function ut(n){var s=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(s)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=o,s}function bI(n,s,o){var u=s.pendingProps;switch(Ed(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(s),null;case 1:return ut(s),null;case 3:return o=s.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),Hi(Nt),Qn(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(_l(s)?Yi(s):n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,dv())),ut(s),null;case 26:return o=s.memoizedState,n===null?(Yi(s),o!==null?(ut(s),M_(s,o)):(ut(s),s.flags&=-16777217)):o?o!==n.memoizedState?(Yi(s),ut(s),M_(s,o)):(ut(s),s.flags&=-16777217):(n.memoizedProps!==u&&Yi(s),ut(s),s.flags&=-16777217),null;case 27:Ri(s),o=Se.current;var f=s.type;if(n!==null&&s.stateNode!=null)n.memoizedProps!==u&&Yi(s);else{if(!u){if(s.stateNode===null)throw Error(r(166));return ut(s),null}n=ye.current,_l(s)?hv(s):(n=M0(f,u,o),s.stateNode=n,Yi(s))}return ut(s),null;case 5:if(Ri(s),o=s.type,n!==null&&s.stateNode!=null)n.memoizedProps!==u&&Yi(s);else{if(!u){if(s.stateNode===null)throw Error(r(166));return ut(s),null}if(n=ye.current,_l(s))hv(s);else{switch(f=oh(Se.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}n[Rt]=s,n[Et]=u;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=n;e:switch($t(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Yi(s)}}return ut(s),s.flags&=-16777217,null;case 6:if(n&&s.stateNode!=null)n.memoizedProps!==u&&Yi(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(r(166));if(n=Se.current,_l(s)){if(n=s.stateNode,o=s.memoizedProps,u=null,f=ln,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}n[Rt]=s,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||C0(n.nodeValue,o)),n||Gs(s)}else n=oh(n).createTextNode(u),n[Rt]=s,s.stateNode=n}return ut(s),null;case 13:if(u=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=_l(s),u!==null&&u.dehydrated!==null){if(n===null){if(!f)throw Error(r(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[Rt]=s}else El(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ut(s),f=!1}else f=dv(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?($i(s),s):($i(s),null)}if($i(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=s.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var d=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(d=u.memoizedState.cachePool.pool),d!==f&&(u.flags|=2048)}return o!==n&&o&&(s.child.flags|=8192),Yc(s,s.updateQueue),ut(s),null;case 4:return Qn(),n===null&&Dm(s.stateNode.containerInfo),ut(s),null;case 10:return Hi(s.type),ut(s),null;case 19:if(le(Ot),f=s.memoizedState,f===null)return ut(s),null;if(u=(s.flags&128)!==0,d=f.rendering,d===null)if(u)Vl(f,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(d=qc(n),d!==null){for(s.flags|=128,Vl(f,!1),n=d.updateQueue,s.updateQueue=n,Yc(s,n),s.subtreeFlags=0,n=o,o=s.child;o!==null;)uv(o,n),o=o.sibling;return re(Ot,Ot.current&1|2),s.child}n=n.sibling}f.tail!==null&&wn()>Wc&&(s.flags|=128,u=!0,Vl(f,!1),s.lanes=4194304)}else{if(!u)if(n=qc(d),n!==null){if(s.flags|=128,u=!0,n=n.updateQueue,s.updateQueue=n,Yc(s,n),Vl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!d.alternate&&!Ge)return ut(s),null}else 2*wn()-f.renderingStartTime>Wc&&o!==536870912&&(s.flags|=128,u=!0,Vl(f,!1),s.lanes=4194304);f.isBackwards?(d.sibling=s.child,s.child=d):(n=f.last,n!==null?n.sibling=d:s.child=d,f.last=d)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=wn(),s.sibling=null,n=Ot.current,re(Ot,u?n&1|2:n&1),s):(ut(s),null);case 22:case 23:return $i(s),kd(),u=s.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(ut(s),s.subtreeFlags&6&&(s.flags|=8192)):ut(s),o=s.updateQueue,o!==null&&Yc(s,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),n!==null&&le(Ys),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Hi(Nt),ut(s),null;case 25:return null;case 30:return null}throw Error(r(156,s.tag))}function TI(n,s){switch(Ed(s),s.tag){case 1:return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return Hi(Nt),Qn(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 26:case 27:case 5:return Ri(s),null;case 13:if($i(s),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(r(340));El()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return le(Ot),null;case 4:return Qn(),null;case 10:return Hi(s.type),null;case 22:case 23:return $i(s),kd(),n!==null&&le(Ys),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 24:return Hi(Nt),null;case 25:return null;default:return null}}function V_(n,s){switch(Ed(s),s.tag){case 3:Hi(Nt),Qn();break;case 26:case 27:case 5:Ri(s);break;case 4:Qn();break;case 13:$i(s);break;case 19:le(Ot);break;case 10:Hi(s.type);break;case 22:case 23:$i(s),kd(),n!==null&&le(Ys);break;case 24:Hi(Nt)}}function Ll(n,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&n)===n){u=void 0;var d=o.create,E=o.inst;u=d(),E.destroy=u}o=o.next}while(o!==f)}}catch(T){nt(s,s.return,T)}}function Cr(n,s,o){try{var u=s.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var d=f.next;u=d;do{if((u.tag&n)===n){var E=u.inst,T=E.destroy;if(T!==void 0){E.destroy=void 0,f=s;var R=o,z=T;try{z()}catch(K){nt(f,R,K)}}}u=u.next}while(u!==d)}}catch(K){nt(s,s.return,K)}}function L_(n){var s=n.updateQueue;if(s!==null){var o=n.stateNode;try{Sv(s,o)}catch(u){nt(n,n.return,u)}}}function U_(n,s,o){o.props=Xs(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){nt(n,s,u)}}function Ul(n,s){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(f){nt(n,s,f)}}function ui(n,s){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){nt(n,s,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){nt(n,s,f)}else o.current=null}function j_(n){var s=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){nt(n,n.return,f)}}function lm(n,s,o){try{var u=n.stateNode;qI(u,n.type,o,s),u[Et]=s}catch(f){nt(n,n.return,f)}}function z_(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Vr(n.type)||n.tag===4}function um(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||z_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Vr(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function cm(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(n),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=ah));else if(u!==4&&(u===27&&Vr(n.type)&&(o=n.stateNode,s=null),n=n.child,n!==null))for(cm(n,s,o),n=n.sibling;n!==null;)cm(n,s,o),n=n.sibling}function Qc(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?o.insertBefore(n,s):o.appendChild(n);else if(u!==4&&(u===27&&Vr(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(Qc(n,s,o),n=n.sibling;n!==null;)Qc(n,s,o),n=n.sibling}function B_(n){var s=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);$t(s,u,o),s[Rt]=n,s[Et]=o}catch(d){nt(n,n.return,d)}}var Qi=!1,yt=!1,hm=!1,F_=typeof WeakSet=="function"?WeakSet:Set,Ut=null;function AI(n,s){if(n=n.containerInfo,Mm=dh,n=Zy(n),ud(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,d=u.focusNode;u=u.focusOffset;try{o.nodeType,d.nodeType}catch{o=null;break e}var E=0,T=-1,R=-1,z=0,K=0,X=n,B=null;t:for(;;){for(var q;X!==o||f!==0&&X.nodeType!==3||(T=E+f),X!==d||u!==0&&X.nodeType!==3||(R=E+u),X.nodeType===3&&(E+=X.nodeValue.length),(q=X.firstChild)!==null;)B=X,X=q;for(;;){if(X===n)break t;if(B===o&&++z===f&&(T=E),B===d&&++K===u&&(R=E),(q=X.nextSibling)!==null)break;X=B,B=X.parentNode}X=q}o=T===-1||R===-1?null:{start:T,end:R}}else o=null}o=o||{start:0,end:0}}else o=null;for(Vm={focusedElem:n,selectionRange:o},dh=!1,Ut=s;Ut!==null;)if(s=Ut,n=s.child,(s.subtreeFlags&1024)!==0&&n!==null)n.return=s,Ut=n;else for(;Ut!==null;){switch(s=Ut,d=s.alternate,n=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,o=s,f=d.memoizedProps,d=d.memoizedState,u=o.stateNode;try{var Te=Xs(o.type,f,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(Te,d),u.__reactInternalSnapshotBeforeUpdate=n}catch(_e){nt(o,o.return,_e)}}break;case 3:if((n&1024)!==0){if(n=s.stateNode.containerInfo,o=n.nodeType,o===9)jm(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":jm(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(r(163))}if(n=s.sibling,n!==null){n.return=s.return,Ut=n;break}Ut=s.return}}function q_(n,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:xr(n,o),u&4&&Ll(5,o);break;case 1:if(xr(n,o),u&4)if(n=o.stateNode,s===null)try{n.componentDidMount()}catch(E){nt(o,o.return,E)}else{var f=Xs(o.type,s.memoizedProps);s=s.memoizedState;try{n.componentDidUpdate(f,s,n.__reactInternalSnapshotBeforeUpdate)}catch(E){nt(o,o.return,E)}}u&64&&L_(o),u&512&&Ul(o,o.return);break;case 3:if(xr(n,o),u&64&&(n=o.updateQueue,n!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{Sv(n,s)}catch(E){nt(o,o.return,E)}}break;case 27:s===null&&u&4&&B_(o);case 26:case 5:xr(n,o),s===null&&u&4&&j_(o),u&512&&Ul(o,o.return);break;case 12:xr(n,o);break;case 13:xr(n,o),u&4&&$_(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=DI.bind(null,o),XI(n,o))));break;case 22:if(u=o.memoizedState!==null||Qi,!u){s=s!==null&&s.memoizedState!==null||yt,f=Qi;var d=yt;Qi=u,(yt=s)&&!d?Nr(n,o,(o.subtreeFlags&8772)!==0):xr(n,o),Qi=f,yt=d}break;case 30:break;default:xr(n,o)}}function H_(n){var s=n.alternate;s!==null&&(n.alternate=null,H_(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&yr(s)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ot=null,hn=!1;function Xi(n,s,o){for(o=o.child;o!==null;)G_(n,s,o),o=o.sibling}function G_(n,s,o){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(ft,o)}catch{}switch(o.tag){case 26:yt||ui(o,s),Xi(n,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:yt||ui(o,s);var u=ot,f=hn;Vr(o.type)&&(ot=o.stateNode,hn=!1),Xi(n,s,o),Kl(o.stateNode),ot=u,hn=f;break;case 5:yt||ui(o,s);case 6:if(u=ot,f=hn,ot=null,Xi(n,s,o),ot=u,hn=f,ot!==null)if(hn)try{(ot.nodeType===9?ot.body:ot.nodeName==="HTML"?ot.ownerDocument.body:ot).removeChild(o.stateNode)}catch(d){nt(o,s,d)}else try{ot.removeChild(o.stateNode)}catch(d){nt(o,s,d)}break;case 18:ot!==null&&(hn?(n=ot,P0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),tu(n)):P0(ot,o.stateNode));break;case 4:u=ot,f=hn,ot=o.stateNode.containerInfo,hn=!0,Xi(n,s,o),ot=u,hn=f;break;case 0:case 11:case 14:case 15:yt||Cr(2,o,s),yt||Cr(4,o,s),Xi(n,s,o);break;case 1:yt||(ui(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&U_(o,s,u)),Xi(n,s,o);break;case 21:Xi(n,s,o);break;case 22:yt=(u=yt)||o.memoizedState!==null,Xi(n,s,o),yt=u;break;default:Xi(n,s,o)}}function $_(n,s){if(s.memoizedState===null&&(n=s.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{tu(n)}catch(o){nt(s,s.return,o)}}function SI(n){switch(n.tag){case 13:case 19:var s=n.stateNode;return s===null&&(s=n.stateNode=new F_),s;case 22:return n=n.stateNode,s=n._retryCache,s===null&&(s=n._retryCache=new F_),s;default:throw Error(r(435,n.tag))}}function fm(n,s){var o=SI(n);s.forEach(function(u){var f=PI.bind(null,n,u);o.has(u)||(o.add(u),u.then(f,f))})}function vn(n,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],d=n,E=s,T=E;e:for(;T!==null;){switch(T.tag){case 27:if(Vr(T.type)){ot=T.stateNode,hn=!1;break e}break;case 5:ot=T.stateNode,hn=!1;break e;case 3:case 4:ot=T.stateNode.containerInfo,hn=!0;break e}T=T.return}if(ot===null)throw Error(r(160));G_(d,E,f),ot=null,hn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)K_(s,n),s=s.sibling}var Hn=null;function K_(n,s){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:vn(s,n),_n(n),u&4&&(Cr(3,n,n.return),Ll(3,n),Cr(5,n,n.return));break;case 1:vn(s,n),_n(n),u&512&&(yt||o===null||ui(o,o.return)),u&64&&Qi&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=Hn;if(vn(s,n),_n(n),u&512&&(yt||o===null||ui(o,o.return)),u&4){var d=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":d=f.getElementsByTagName("title")[0],(!d||d[ws]||d[Rt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(u),f.head.insertBefore(d,f.querySelector("head > title"))),$t(d,u,o),d[Rt]=n,pt(d),u=d;break e;case"link":var E=B0("link","href",f).get(u+(o.href||""));if(E){for(var T=0;T<E.length;T++)if(d=E[T],d.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&d.getAttribute("rel")===(o.rel==null?null:o.rel)&&d.getAttribute("title")===(o.title==null?null:o.title)&&d.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(T,1);break t}}d=f.createElement(u),$t(d,u,o),f.head.appendChild(d);break;case"meta":if(E=B0("meta","content",f).get(u+(o.content||""))){for(T=0;T<E.length;T++)if(d=E[T],d.getAttribute("content")===(o.content==null?null:""+o.content)&&d.getAttribute("name")===(o.name==null?null:o.name)&&d.getAttribute("property")===(o.property==null?null:o.property)&&d.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&d.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(T,1);break t}}d=f.createElement(u),$t(d,u,o),f.head.appendChild(d);break;default:throw Error(r(468,u))}d[Rt]=n,pt(d),u=d}n.stateNode=u}else F0(f,n.type,n.stateNode);else n.stateNode=z0(f,u,n.memoizedProps);else d!==u?(d===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):d.count--,u===null?F0(f,n.type,n.stateNode):z0(f,u,n.memoizedProps)):u===null&&n.stateNode!==null&&lm(n,n.memoizedProps,o.memoizedProps)}break;case 27:vn(s,n),_n(n),u&512&&(yt||o===null||ui(o,o.return)),o!==null&&u&4&&lm(n,n.memoizedProps,o.memoizedProps);break;case 5:if(vn(s,n),_n(n),u&512&&(yt||o===null||ui(o,o.return)),n.flags&32){f=n.stateNode;try{Rn(f,"")}catch(q){nt(n,n.return,q)}}u&4&&n.stateNode!=null&&(f=n.memoizedProps,lm(n,f,o!==null?o.memoizedProps:f)),u&1024&&(hm=!0);break;case 6:if(vn(s,n),_n(n),u&4){if(n.stateNode===null)throw Error(r(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(q){nt(n,n.return,q)}}break;case 3:if(ch=null,f=Hn,Hn=lh(s.containerInfo),vn(s,n),Hn=f,_n(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{tu(s.containerInfo)}catch(q){nt(n,n.return,q)}hm&&(hm=!1,Y_(n));break;case 4:u=Hn,Hn=lh(n.stateNode.containerInfo),vn(s,n),_n(n),Hn=u;break;case 12:vn(s,n),_n(n);break;case 13:vn(s,n),_n(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(vm=wn()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,fm(n,u)));break;case 22:f=n.memoizedState!==null;var R=o!==null&&o.memoizedState!==null,z=Qi,K=yt;if(Qi=z||f,yt=K||R,vn(s,n),yt=K,Qi=z,_n(n),u&8192)e:for(s=n.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||R||Qi||yt||Ws(n)),o=null,s=n;;){if(s.tag===5||s.tag===26){if(o===null){R=o=s;try{if(d=R.stateNode,f)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{T=R.stateNode;var X=R.memoizedProps.style,B=X!=null&&X.hasOwnProperty("display")?X.display:null;T.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(q){nt(R,R.return,q)}}}else if(s.tag===6){if(o===null){R=s;try{R.stateNode.nodeValue=f?"":R.memoizedProps}catch(q){nt(R,R.return,q)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===n)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break e;for(;s.sibling===null;){if(s.return===null||s.return===n)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,fm(n,o))));break;case 19:vn(s,n),_n(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,fm(n,u)));break;case 30:break;case 21:break;default:vn(s,n),_n(n)}}function _n(n){var s=n.flags;if(s&2){try{for(var o,u=n.return;u!==null;){if(z_(u)){o=u;break}u=u.return}if(o==null)throw Error(r(160));switch(o.tag){case 27:var f=o.stateNode,d=um(n);Qc(n,d,f);break;case 5:var E=o.stateNode;o.flags&32&&(Rn(E,""),o.flags&=-33);var T=um(n);Qc(n,T,E);break;case 3:case 4:var R=o.stateNode.containerInfo,z=um(n);cm(n,z,R);break;default:throw Error(r(161))}}catch(K){nt(n,n.return,K)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function Y_(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var s=n;Y_(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),n=n.sibling}}function xr(n,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)q_(n,s.alternate,s),s=s.sibling}function Ws(n){for(n=n.child;n!==null;){var s=n;switch(s.tag){case 0:case 11:case 14:case 15:Cr(4,s,s.return),Ws(s);break;case 1:ui(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&U_(s,s.return,o),Ws(s);break;case 27:Kl(s.stateNode);case 26:case 5:ui(s,s.return),Ws(s);break;case 22:s.memoizedState===null&&Ws(s);break;case 30:Ws(s);break;default:Ws(s)}n=n.sibling}}function Nr(n,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,f=n,d=s,E=d.flags;switch(d.tag){case 0:case 11:case 15:Nr(f,d,o),Ll(4,d);break;case 1:if(Nr(f,d,o),u=d,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(z){nt(u,u.return,z)}if(u=d,f=u.updateQueue,f!==null){var T=u.stateNode;try{var R=f.shared.hiddenCallbacks;if(R!==null)for(f.shared.hiddenCallbacks=null,f=0;f<R.length;f++)Av(R[f],T)}catch(z){nt(u,u.return,z)}}o&&E&64&&L_(d),Ul(d,d.return);break;case 27:B_(d);case 26:case 5:Nr(f,d,o),o&&u===null&&E&4&&j_(d),Ul(d,d.return);break;case 12:Nr(f,d,o);break;case 13:Nr(f,d,o),o&&E&4&&$_(f,d);break;case 22:d.memoizedState===null&&Nr(f,d,o),Ul(d,d.return);break;case 30:break;default:Nr(f,d,o)}s=s.sibling}}function dm(n,s){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(n=s.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Al(o))}function mm(n,s){n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&Al(n))}function ci(n,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Q_(n,s,o,u),s=s.sibling}function Q_(n,s,o,u){var f=s.flags;switch(s.tag){case 0:case 11:case 15:ci(n,s,o,u),f&2048&&Ll(9,s);break;case 1:ci(n,s,o,u);break;case 3:ci(n,s,o,u),f&2048&&(n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&Al(n)));break;case 12:if(f&2048){ci(n,s,o,u),n=s.stateNode;try{var d=s.memoizedProps,E=d.id,T=d.onPostCommit;typeof T=="function"&&T(E,s.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(R){nt(s,s.return,R)}}else ci(n,s,o,u);break;case 13:ci(n,s,o,u);break;case 23:break;case 22:d=s.stateNode,E=s.alternate,s.memoizedState!==null?d._visibility&2?ci(n,s,o,u):jl(n,s):d._visibility&2?ci(n,s,o,u):(d._visibility|=2,Wa(n,s,o,u,(s.subtreeFlags&10256)!==0)),f&2048&&dm(E,s);break;case 24:ci(n,s,o,u),f&2048&&mm(s.alternate,s);break;default:ci(n,s,o,u)}}function Wa(n,s,o,u,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var d=n,E=s,T=o,R=u,z=E.flags;switch(E.tag){case 0:case 11:case 15:Wa(d,E,T,R,f),Ll(8,E);break;case 23:break;case 22:var K=E.stateNode;E.memoizedState!==null?K._visibility&2?Wa(d,E,T,R,f):jl(d,E):(K._visibility|=2,Wa(d,E,T,R,f)),f&&z&2048&&dm(E.alternate,E);break;case 24:Wa(d,E,T,R,f),f&&z&2048&&mm(E.alternate,E);break;default:Wa(d,E,T,R,f)}s=s.sibling}}function jl(n,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=n,u=s,f=u.flags;switch(u.tag){case 22:jl(o,u),f&2048&&dm(u.alternate,u);break;case 24:jl(o,u),f&2048&&mm(u.alternate,u);break;default:jl(o,u)}s=s.sibling}}var zl=8192;function Ja(n){if(n.subtreeFlags&zl)for(n=n.child;n!==null;)X_(n),n=n.sibling}function X_(n){switch(n.tag){case 26:Ja(n),n.flags&zl&&n.memoizedState!==null&&uR(Hn,n.memoizedState,n.memoizedProps);break;case 5:Ja(n);break;case 3:case 4:var s=Hn;Hn=lh(n.stateNode.containerInfo),Ja(n),Hn=s;break;case 22:n.memoizedState===null&&(s=n.alternate,s!==null&&s.memoizedState!==null?(s=zl,zl=16777216,Ja(n),zl=s):Ja(n));break;default:Ja(n)}}function W_(n){var s=n.alternate;if(s!==null&&(n=s.child,n!==null)){s.child=null;do s=n.sibling,n.sibling=null,n=s;while(n!==null)}}function Bl(n){var s=n.deletions;if((n.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];Ut=u,Z_(u,n)}W_(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)J_(n),n=n.sibling}function J_(n){switch(n.tag){case 0:case 11:case 15:Bl(n),n.flags&2048&&Cr(9,n,n.return);break;case 3:Bl(n);break;case 12:Bl(n);break;case 22:var s=n.stateNode;n.memoizedState!==null&&s._visibility&2&&(n.return===null||n.return.tag!==13)?(s._visibility&=-3,Xc(n)):Bl(n);break;default:Bl(n)}}function Xc(n){var s=n.deletions;if((n.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];Ut=u,Z_(u,n)}W_(n)}for(n=n.child;n!==null;){switch(s=n,s.tag){case 0:case 11:case 15:Cr(8,s,s.return),Xc(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,Xc(s));break;default:Xc(s)}n=n.sibling}}function Z_(n,s){for(;Ut!==null;){var o=Ut;switch(o.tag){case 0:case 11:case 15:Cr(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Al(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Ut=u;else e:for(o=n;Ut!==null;){u=Ut;var f=u.sibling,d=u.return;if(H_(u),u===o){Ut=null;break e}if(f!==null){f.return=d,Ut=f;break e}Ut=d}}}var wI={getCacheForType:function(n){var s=Jt(Nt),o=s.data.get(n);return o===void 0&&(o=n(),s.data.set(n,o)),o}},II=typeof WeakMap=="function"?WeakMap:Map,Qe=0,rt=null,Me=null,Be=0,Xe=0,En=null,Or=!1,Za=!1,pm=!1,Wi=0,mt=0,Dr=0,Js=0,gm=0,Vn=0,eo=0,Fl=null,fn=null,ym=!1,vm=0,Wc=1/0,Jc=null,Pr=null,Gt=0,kr=null,to=null,no=0,_m=0,Em=null,e0=null,ql=0,bm=null;function bn(){if((Qe&2)!==0&&Be!==0)return Be&-Be;if($.T!==null){var n=qa;return n!==0?n:Cm()}return pr()}function t0(){Vn===0&&(Vn=(Be&536870912)===0||Ge?Jo():536870912);var n=Mn.current;return n!==null&&(n.flags|=32),Vn}function Tn(n,s,o){(n===rt&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)&&(io(n,0),Mr(n,Be,Vn,!1)),xi(n,o),((Qe&2)===0||n!==rt)&&(n===rt&&((Qe&2)===0&&(Js|=o),mt===4&&Mr(n,Be,Vn,!1)),hi(n))}function n0(n,s,o){if((Qe&6)!==0)throw Error(r(327));var u=!o&&(s&124)===0&&(s&n.expiredLanes)===0||Ss(n,s),f=u?xI(n,s):Sm(n,s,!0),d=u;do{if(f===0){Za&&!u&&Mr(n,s,0,!1);break}else{if(o=n.current.alternate,d&&!RI(o)){f=Sm(n,s,!1),d=!1;continue}if(f===2){if(d=s,n.errorRecoveryDisabledLanes&d)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){s=E;e:{var T=n;f=Fl;var R=T.current.memoizedState.isDehydrated;if(R&&(io(T,E).flags|=256),E=Sm(T,E,!1),E!==2){if(pm&&!R){T.errorRecoveryDisabledLanes|=d,Js|=d,f=4;break e}d=fn,fn=f,d!==null&&(fn===null?fn=d:fn.push.apply(fn,d))}f=E}if(d=!1,f!==2)continue}}if(f===1){io(n,0),Mr(n,s,0,!0);break}e:{switch(u=n,d=f,d){case 0:case 1:throw Error(r(345));case 4:if((s&4194048)!==s)break;case 6:Mr(u,s,Vn,!Or);break e;case 2:fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((s&62914560)===s&&(f=vm+300-wn(),10<f)){if(Mr(u,s,Vn,!Or),Ea(u,0,!0)!==0)break e;u.timeoutHandle=O0(i0.bind(null,u,o,fn,Jc,ym,s,Vn,Js,eo,Or,d,2,-0,0),f);break e}i0(u,o,fn,Jc,ym,s,Vn,Js,eo,Or,d,0,-0,0)}}break}while(!0);hi(n)}function i0(n,s,o,u,f,d,E,T,R,z,K,X,B,q){if(n.timeoutHandle=-1,X=s.subtreeFlags,(X&8192||(X&16785408)===16785408)&&(Xl={stylesheets:null,count:0,unsuspend:lR},X_(s),X=cR(),X!==null)){n.cancelPendingCommit=X(c0.bind(null,n,s,d,o,u,f,E,T,R,K,1,B,q)),Mr(n,d,E,!z);return}c0(n,s,d,o,u,f,E,T,R)}function RI(n){for(var s=n;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],d=f.getSnapshot;f=f.value;try{if(!gn(d(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Mr(n,s,o,u){s&=~gm,s&=~Js,n.suspendedLanes|=s,n.pingedLanes&=~s,u&&(n.warmLanes|=s),u=n.expirationTimes;for(var f=s;0<f;){var d=31-Wt(f),E=1<<d;u[d]=-1,f&=~E}o!==0&&Xn(n,o,s)}function Zc(){return(Qe&6)===0?(Hl(0),!1):!0}function Tm(){if(Me!==null){if(Xe===0)var n=Me.return;else n=Me,qi=$s=null,jd(n),Qa=null,kl=0,n=Me;for(;n!==null;)V_(n.alternate,n),n=n.return;Me=null}}function io(n,s){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,GI(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Tm(),rt=n,Me=o=zi(n.current,null),Be=s,Xe=0,En=null,Or=!1,Za=Ss(n,s),pm=!1,eo=Vn=gm=Js=Dr=mt=0,fn=Fl=null,ym=!1,(s&8)!==0&&(s|=s&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=s;0<u;){var f=31-Wt(u),d=1<<f;s|=n[f],u&=~d}return Wi=s,bc(),o}function r0(n,s){Ne=null,$.H=zc,s===wl||s===Nc?(s=bv(),Xe=3):s===vv?(s=bv(),Xe=4):Xe=s===T_?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,En=s,Me===null&&(mt=1,Gc(n,On(s,n.current)))}function s0(){var n=$.H;return $.H=zc,n===null?zc:n}function a0(){var n=$.A;return $.A=wI,n}function Am(){mt=4,Or||(Be&4194048)!==Be&&Mn.current!==null||(Za=!0),(Dr&134217727)===0&&(Js&134217727)===0||rt===null||Mr(rt,Be,Vn,!1)}function Sm(n,s,o){var u=Qe;Qe|=2;var f=s0(),d=a0();(rt!==n||Be!==s)&&(Jc=null,io(n,s)),s=!1;var E=mt;e:do try{if(Xe!==0&&Me!==null){var T=Me,R=En;switch(Xe){case 8:Tm(),E=6;break e;case 3:case 2:case 9:case 6:Mn.current===null&&(s=!0);var z=Xe;if(Xe=0,En=null,ro(n,T,R,z),o&&Za){E=0;break e}break;default:z=Xe,Xe=0,En=null,ro(n,T,R,z)}}CI(),E=mt;break}catch(K){r0(n,K)}while(!0);return s&&n.shellSuspendCounter++,qi=$s=null,Qe=u,$.H=f,$.A=d,Me===null&&(rt=null,Be=0,bc()),E}function CI(){for(;Me!==null;)o0(Me)}function xI(n,s){var o=Qe;Qe|=2;var u=s0(),f=a0();rt!==n||Be!==s?(Jc=null,Wc=wn()+500,io(n,s)):Za=Ss(n,s);e:do try{if(Xe!==0&&Me!==null){s=Me;var d=En;t:switch(Xe){case 1:Xe=0,En=null,ro(n,s,d,1);break;case 2:case 9:if(_v(d)){Xe=0,En=null,l0(s);break}s=function(){Xe!==2&&Xe!==9||rt!==n||(Xe=7),hi(n)},d.then(s,s);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:_v(d)?(Xe=0,En=null,l0(s)):(Xe=0,En=null,ro(n,s,d,7));break;case 5:var E=null;switch(Me.tag){case 26:E=Me.memoizedState;case 5:case 27:var T=Me;if(!E||q0(E)){Xe=0,En=null;var R=T.sibling;if(R!==null)Me=R;else{var z=T.return;z!==null?(Me=z,eh(z)):Me=null}break t}}Xe=0,En=null,ro(n,s,d,5);break;case 6:Xe=0,En=null,ro(n,s,d,6);break;case 8:Tm(),mt=6;break e;default:throw Error(r(462))}}NI();break}catch(K){r0(n,K)}while(!0);return qi=$s=null,$.H=u,$.A=f,Qe=o,Me!==null?0:(rt=null,Be=0,bc(),mt)}function NI(){for(;Me!==null&&!Yo();)o0(Me)}function o0(n){var s=k_(n.alternate,n,Wi);n.memoizedProps=n.pendingProps,s===null?eh(n):Me=s}function l0(n){var s=n,o=s.alternate;switch(s.tag){case 15:case 0:s=C_(o,s,s.pendingProps,s.type,void 0,Be);break;case 11:s=C_(o,s,s.pendingProps,s.type.render,s.ref,Be);break;case 5:jd(s);default:V_(o,s),s=Me=uv(s,Wi),s=k_(o,s,Wi)}n.memoizedProps=n.pendingProps,s===null?eh(n):Me=s}function ro(n,s,o,u){qi=$s=null,jd(s),Qa=null,kl=0;var f=s.return;try{if(_I(n,f,s,o,Be)){mt=1,Gc(n,On(o,n.current)),Me=null;return}}catch(d){if(f!==null)throw Me=f,d;mt=1,Gc(n,On(o,n.current)),Me=null;return}s.flags&32768?(Ge||u===1?n=!0:Za||(Be&536870912)!==0?n=!1:(Or=n=!0,(u===2||u===9||u===3||u===6)&&(u=Mn.current,u!==null&&u.tag===13&&(u.flags|=16384))),u0(s,n)):eh(s)}function eh(n){var s=n;do{if((s.flags&32768)!==0){u0(s,Or);return}n=s.return;var o=bI(s.alternate,s,Wi);if(o!==null){Me=o;return}if(s=s.sibling,s!==null){Me=s;return}Me=s=n}while(s!==null);mt===0&&(mt=5)}function u0(n,s){do{var o=TI(n.alternate,n);if(o!==null){o.flags&=32767,Me=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(n=n.sibling,n!==null)){Me=n;return}Me=n=o}while(n!==null);mt=6,Me=null}function c0(n,s,o,u,f,d,E,T,R){n.cancelPendingCommit=null;do th();while(Gt!==0);if((Qe&6)!==0)throw Error(r(327));if(s!==null){if(s===n.current)throw Error(r(177));if(d=s.lanes|s.childLanes,d|=md,el(n,o,d,E,T,R),n===rt&&(Me=rt=null,Be=0),to=s,kr=n,no=o,_m=d,Em=f,e0=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,kI(Es,function(){return p0(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=$.T,$.T=null,f=oe.p,oe.p=2,E=Qe,Qe|=4;try{AI(n,s,o)}finally{Qe=E,oe.p=f,$.T=u}}Gt=1,h0(),f0(),d0()}}function h0(){if(Gt===1){Gt=0;var n=kr,s=to,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=$.T,$.T=null;var u=oe.p;oe.p=2;var f=Qe;Qe|=4;try{K_(s,n);var d=Vm,E=Zy(n.containerInfo),T=d.focusedElem,R=d.selectionRange;if(E!==T&&T&&T.ownerDocument&&Jy(T.ownerDocument.documentElement,T)){if(R!==null&&ud(T)){var z=R.start,K=R.end;if(K===void 0&&(K=z),"selectionStart"in T)T.selectionStart=z,T.selectionEnd=Math.min(K,T.value.length);else{var X=T.ownerDocument||document,B=X&&X.defaultView||window;if(B.getSelection){var q=B.getSelection(),Te=T.textContent.length,_e=Math.min(R.start,Te),et=R.end===void 0?_e:Math.min(R.end,Te);!q.extend&&_e>et&&(E=et,et=_e,_e=E);var M=Wy(T,_e),O=Wy(T,et);if(M&&O&&(q.rangeCount!==1||q.anchorNode!==M.node||q.anchorOffset!==M.offset||q.focusNode!==O.node||q.focusOffset!==O.offset)){var U=X.createRange();U.setStart(M.node,M.offset),q.removeAllRanges(),_e>et?(q.addRange(U),q.extend(O.node,O.offset)):(U.setEnd(O.node,O.offset),q.addRange(U))}}}}for(X=[],q=T;q=q.parentNode;)q.nodeType===1&&X.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<X.length;T++){var Y=X[T];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}dh=!!Mm,Vm=Mm=null}finally{Qe=f,oe.p=u,$.T=o}}n.current=s,Gt=2}}function f0(){if(Gt===2){Gt=0;var n=kr,s=to,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=$.T,$.T=null;var u=oe.p;oe.p=2;var f=Qe;Qe|=4;try{q_(n,s.alternate,s)}finally{Qe=f,oe.p=u,$.T=o}}Gt=3}}function d0(){if(Gt===4||Gt===3){Gt=0,Xu();var n=kr,s=to,o=no,u=e0;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Gt=5:(Gt=0,to=kr=null,m0(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Pr=null),ba(o),s=s.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(ft,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=$.T,f=oe.p,oe.p=2,$.T=null;try{for(var d=n.onRecoverableError,E=0;E<u.length;E++){var T=u[E];d(T.value,{componentStack:T.stack})}}finally{$.T=s,oe.p=f}}(no&3)!==0&&th(),hi(n),f=n.pendingLanes,(o&4194090)!==0&&(f&42)!==0?n===bm?ql++:(ql=0,bm=n):ql=0,Hl(0)}}function m0(n,s){(n.pooledCacheLanes&=s)===0&&(s=n.pooledCache,s!=null&&(n.pooledCache=null,Al(s)))}function th(n){return h0(),f0(),d0(),p0()}function p0(){if(Gt!==5)return!1;var n=kr,s=_m;_m=0;var o=ba(no),u=$.T,f=oe.p;try{oe.p=32>o?32:o,$.T=null,o=Em,Em=null;var d=kr,E=no;if(Gt=0,to=kr=null,no=0,(Qe&6)!==0)throw Error(r(331));var T=Qe;if(Qe|=4,J_(d.current),Q_(d,d.current,E,o),Qe=T,Hl(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(ft,d)}catch{}return!0}finally{oe.p=f,$.T=u,m0(n,s)}}function g0(n,s,o){s=On(o,s),s=Zd(n.stateNode,s,2),n=Sr(n,s,2),n!==null&&(xi(n,2),hi(n))}function nt(n,s,o){if(n.tag===3)g0(n,n,o);else for(;s!==null;){if(s.tag===3){g0(s,n,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Pr===null||!Pr.has(u))){n=On(o,n),o=E_(2),u=Sr(s,o,2),u!==null&&(b_(o,u,s,n),xi(u,2),hi(u));break}}s=s.return}}function wm(n,s,o){var u=n.pingCache;if(u===null){u=n.pingCache=new II;var f=new Set;u.set(s,f)}else f=u.get(s),f===void 0&&(f=new Set,u.set(s,f));f.has(o)||(pm=!0,f.add(o),n=OI.bind(null,n,s,o),s.then(n,n))}function OI(n,s,o){var u=n.pingCache;u!==null&&u.delete(s),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,rt===n&&(Be&o)===o&&(mt===4||mt===3&&(Be&62914560)===Be&&300>wn()-vm?(Qe&2)===0&&io(n,0):gm|=o,eo===Be&&(eo=0)),hi(n)}function y0(n,s){s===0&&(s=Zo()),n=ja(n,s),n!==null&&(xi(n,s),hi(n))}function DI(n){var s=n.memoizedState,o=0;s!==null&&(o=s.retryLane),y0(n,o)}function PI(n,s){var o=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(r(314))}u!==null&&u.delete(s),y0(n,o)}function kI(n,s){return vs(n,s)}var nh=null,so=null,Im=!1,ih=!1,Rm=!1,Zs=0;function hi(n){n!==so&&n.next===null&&(so===null?nh=so=n:so=so.next=n),ih=!0,Im||(Im=!0,VI())}function Hl(n,s){if(!Rm&&ih){Rm=!0;do for(var o=!1,u=nh;u!==null;){if(n!==0){var f=u.pendingLanes;if(f===0)var d=0;else{var E=u.suspendedLanes,T=u.pingedLanes;d=(1<<31-Wt(42|n)+1)-1,d&=f&~(E&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(o=!0,b0(u,d))}else d=Be,d=Ea(u,u===rt?d:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(d&3)===0||Ss(u,d)||(o=!0,b0(u,d));u=u.next}while(o);Rm=!1}}function MI(){v0()}function v0(){ih=Im=!1;var n=0;Zs!==0&&(HI()&&(n=Zs),Zs=0);for(var s=wn(),o=null,u=nh;u!==null;){var f=u.next,d=_0(u,s);d===0?(u.next=null,o===null?nh=f:o.next=f,f===null&&(so=o)):(o=u,(n!==0||(d&3)!==0)&&(ih=!0)),u=f}Hl(n)}function _0(n,s){for(var o=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var E=31-Wt(d),T=1<<E,R=f[E];R===-1?((T&o)===0||(T&u)!==0)&&(f[E]=Wo(T,s)):R<=s&&(n.expiredLanes|=T),d&=~T}if(s=rt,o=Be,o=Ea(n,n===s?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===s&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&_s(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||Ss(n,o)){if(s=o&-o,s===n.callbackPriority)return s;switch(u!==null&&_s(u),ba(o)){case 2:case 8:o=va;break;case 32:o=Es;break;case 268435456:o=_a;break;default:o=Es}return u=E0.bind(null,n),o=vs(o,u),n.callbackPriority=s,n.callbackNode=o,s}return u!==null&&u!==null&&_s(u),n.callbackPriority=2,n.callbackNode=null,2}function E0(n,s){if(Gt!==0&&Gt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(th()&&n.callbackNode!==o)return null;var u=Be;return u=Ea(n,n===rt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(n0(n,u,s),_0(n,wn()),n.callbackNode!=null&&n.callbackNode===o?E0.bind(null,n):null)}function b0(n,s){if(th())return null;n0(n,s,!0)}function VI(){$I(function(){(Qe&6)!==0?vs(Qo,MI):v0()})}function Cm(){return Zs===0&&(Zs=Jo()),Zs}function T0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ra(""+n)}function A0(n,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,n.id&&o.setAttribute("form",n.id),s.parentNode.insertBefore(o,s),n=new FormData(n),o.parentNode.removeChild(o),n}function LI(n,s,o,u,f){if(s==="submit"&&o&&o.stateNode===f){var d=T0((f[Et]||null).action),E=u.submitter;E&&(s=(s=E[Et]||null)?T0(s.formAction):E.getAttribute("formAction"),s!==null&&(d=s,E=null));var T=new Ca("action","action",null,u,f);n.push({event:T,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Zs!==0){var R=E?A0(f,E):new FormData(f);Yd(o,{pending:!0,data:R,method:f.method,action:d},null,R)}}else typeof d=="function"&&(T.preventDefault(),R=E?A0(f,E):new FormData(f),Yd(o,{pending:!0,data:R,method:f.method,action:d},d,R))},currentTarget:f}]})}}for(var xm=0;xm<dd.length;xm++){var Nm=dd[xm],UI=Nm.toLowerCase(),jI=Nm[0].toUpperCase()+Nm.slice(1);qn(UI,"on"+jI)}qn(nv,"onAnimationEnd"),qn(iv,"onAnimationIteration"),qn(rv,"onAnimationStart"),qn("dblclick","onDoubleClick"),qn("focusin","onFocus"),qn("focusout","onBlur"),qn(nI,"onTransitionRun"),qn(iI,"onTransitionStart"),qn(rI,"onTransitionCancel"),qn(sv,"onTransitionEnd"),Oi("onMouseEnter",["mouseout","mouseover"]),Oi("onMouseLeave",["mouseout","mouseover"]),Oi("onPointerEnter",["pointerout","pointerover"]),Oi("onPointerLeave",["pointerout","pointerover"]),Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zI=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gl));function S0(n,s){s=(s&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],f=u.event;u=u.listeners;e:{var d=void 0;if(s)for(var E=u.length-1;0<=E;E--){var T=u[E],R=T.instance,z=T.currentTarget;if(T=T.listener,R!==d&&f.isPropagationStopped())break e;d=T,f.currentTarget=z;try{d(f)}catch(K){Hc(K)}f.currentTarget=null,d=R}else for(E=0;E<u.length;E++){if(T=u[E],R=T.instance,z=T.currentTarget,T=T.listener,R!==d&&f.isPropagationStopped())break e;d=T,f.currentTarget=z;try{d(f)}catch(K){Hc(K)}f.currentTarget=null,d=R}}}}function Ve(n,s){var o=s[nl];o===void 0&&(o=s[nl]=new Set);var u=n+"__bubble";o.has(u)||(w0(s,n,2,!1),o.add(u))}function Om(n,s,o){var u=0;s&&(u|=4),w0(o,n,u,s)}var rh="_reactListening"+Math.random().toString(36).slice(2);function Dm(n){if(!n[rh]){n[rh]=!0,il.forEach(function(o){o!=="selectionchange"&&(zI.has(o)||Om(o,!1,n),Om(o,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[rh]||(s[rh]=!0,Om("selectionchange",!1,s))}}function w0(n,s,o,u){switch(Q0(s)){case 2:var f=dR;break;case 8:f=mR;break;default:f=$m}o=f.bind(null,s,o,n),f=void 0,!xn||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(s,o,{capture:!0,passive:f}):n.addEventListener(s,o,!0):f!==void 0?n.addEventListener(s,o,{passive:f}):n.addEventListener(s,o,!1)}function Pm(n,s,o,u,f){var d=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var T=u.stateNode.containerInfo;if(T===f)break;if(E===4)for(E=u.return;E!==null;){var R=E.tag;if((R===3||R===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;T!==null;){if(E=Ni(T),E===null)return;if(R=E.tag,R===5||R===6||R===26||R===27){u=d=E;continue e}T=T.parentNode}}u=u.return}ac(function(){var z=d,K=Cn(o),X=[];e:{var B=av.get(n);if(B!==void 0){var q=Ca,Te=n;switch(n){case"keypress":if(ni(o)===0)break e;case"keydown":case"keyup":q=ka;break;case"focusin":Te="focus",q=Oa;break;case"focusout":Te="blur",q=Oa;break;case"beforeblur":case"afterblur":q=Oa;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Nn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=sd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=mc;break;case nv:case iv:case rv:q=Da;break;case sv:q=gc;break;case"scroll":case"scrollend":q=oc;break;case"wheel":q=Ma;break;case"copy":case"cut":case"paste":q=Pa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=pl;break;case"toggle":case"beforetoggle":q=vc}var _e=(s&4)!==0,et=!_e&&(n==="scroll"||n==="scrollend"),M=_e?B!==null?B+"Capture":null:B;_e=[];for(var O=z,U;O!==null;){var Y=O;if(U=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||U===null||M===null||(Y=Ds(O,M),Y!=null&&_e.push($l(O,Y,U))),et)break;O=O.return}0<_e.length&&(B=new q(B,Te,null,o,K),X.push({event:B,listeners:_e}))}}if((s&7)===0){e:{if(B=n==="mouseover"||n==="pointerover",q=n==="mouseout"||n==="pointerout",B&&o!==ki&&(Te=o.relatedTarget||o.fromElement)&&(Ni(Te)||Te[In]))break e;if((q||B)&&(B=K.window===K?K:(B=K.ownerDocument)?B.defaultView||B.parentWindow:window,q?(Te=o.relatedTarget||o.toElement,q=z,Te=Te?Ni(Te):null,Te!==null&&(et=l(Te),_e=Te.tag,Te!==et||_e!==5&&_e!==27&&_e!==6)&&(Te=null)):(q=null,Te=z),q!==Te)){if(_e=Nn,Y="onMouseLeave",M="onMouseEnter",O="mouse",(n==="pointerout"||n==="pointerover")&&(_e=pl,Y="onPointerLeave",M="onPointerEnter",O="pointer"),et=q==null?B:Jn(q),U=Te==null?B:Jn(Te),B=new _e(Y,O+"leave",q,o,K),B.target=et,B.relatedTarget=U,Y=null,Ni(K)===z&&(_e=new _e(M,O+"enter",Te,o,K),_e.target=U,_e.relatedTarget=et,Y=_e),et=Y,q&&Te)t:{for(_e=q,M=Te,O=0,U=_e;U;U=ao(U))O++;for(U=0,Y=M;Y;Y=ao(Y))U++;for(;0<O-U;)_e=ao(_e),O--;for(;0<U-O;)M=ao(M),U--;for(;O--;){if(_e===M||M!==null&&_e===M.alternate)break t;_e=ao(_e),M=ao(M)}_e=null}else _e=null;q!==null&&I0(X,B,q,_e,!1),Te!==null&&et!==null&&I0(X,et,Te,_e,!0)}}e:{if(B=z?Jn(z):window,q=B.nodeName&&B.nodeName.toLowerCase(),q==="select"||q==="input"&&B.type==="file")var he=Gy;else if(xt(B))if($y)he=Zw;else{he=Ww;var Pe=Xw}else q=B.nodeName,!q||q.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?z&&ll(z.elementType)&&(he=Gy):he=Jw;if(he&&(he=he(n,z))){ji(X,he,o,K);break e}Pe&&Pe(n,B,z),n==="focusout"&&z&&B.type==="number"&&z.memoizedProps.value!=null&&_r(B,"number",B.value)}switch(Pe=z?Jn(z):window,n){case"focusin":(xt(Pe)||Pe.contentEditable==="true")&&(Va=Pe,cd=z,vl=null);break;case"focusout":vl=cd=Va=null;break;case"mousedown":hd=!0;break;case"contextmenu":case"mouseup":case"dragend":hd=!1,ev(X,o,K);break;case"selectionchange":if(tI)break;case"keydown":case"keyup":ev(X,o,K)}var me;if(si)e:{switch(n){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else je?H(n,o)&&(Ee="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(Ee="onCompositionStart");Ee&&(v&&o.locale!=="ko"&&(je||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&je&&(me=cl()):(ti=K,Er="value"in ti?ti.value:ti.textContent,je=!0)),Pe=sh(z,Ee),0<Pe.length&&(Ee=new dl(Ee,n,null,o,K),X.push({event:Ee,listeners:Pe}),me?Ee.data=me:(me=ae(o),me!==null&&(Ee.data=me)))),(me=y?Ct(n,o):ze(n,o))&&(Ee=sh(z,"onBeforeInput"),0<Ee.length&&(Pe=new dl("onBeforeInput","beforeinput",null,o,K),X.push({event:Pe,listeners:Ee}),Pe.data=me)),LI(X,n,z,o,K)}S0(X,s)})}function $l(n,s,o){return{instance:n,listener:s,currentTarget:o}}function sh(n,s){for(var o=s+"Capture",u=[];n!==null;){var f=n,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Ds(n,o),f!=null&&u.unshift($l(n,f,d)),f=Ds(n,s),f!=null&&u.push($l(n,f,d))),n.tag===3)return u;n=n.return}return[]}function ao(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function I0(n,s,o,u,f){for(var d=s._reactName,E=[];o!==null&&o!==u;){var T=o,R=T.alternate,z=T.stateNode;if(T=T.tag,R!==null&&R===u)break;T!==5&&T!==26&&T!==27||z===null||(R=z,f?(z=Ds(o,d),z!=null&&E.unshift($l(o,z,R))):f||(z=Ds(o,d),z!=null&&E.push($l(o,z,R)))),o=o.return}E.length!==0&&n.push({event:s,listeners:E})}var BI=/\r\n?/g,FI=/\u0000|\uFFFD/g;function R0(n){return(typeof n=="string"?n:""+n).replace(BI,`
`).replace(FI,"")}function C0(n,s){return s=R0(s),R0(n)===s}function ah(){}function Ze(n,s,o,u,f,d){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||Rn(n,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&Rn(n,""+u);break;case"className":Zn(n,"class",u);break;case"tabIndex":Zn(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Zn(n,o,u);break;case"style":ol(n,u,d);break;case"data":if(s!=="object"){Zn(n,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Ra(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(o==="formAction"?(s!=="input"&&Ze(n,s,"name",f.name,f,null),Ze(n,s,"formEncType",f.formEncType,f,null),Ze(n,s,"formMethod",f.formMethod,f,null),Ze(n,s,"formTarget",f.formTarget,f,null)):(Ze(n,s,"encType",f.encType,f,null),Ze(n,s,"method",f.method,f,null),Ze(n,s,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Ra(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=ah);break;case"onScroll":u!=null&&Ve("scroll",n);break;case"onScrollEnd":u!=null&&Ve("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(r(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=Ra(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":Ve("beforetoggle",n),Ve("toggle",n),vr(n,"popover",u);break;case"xlinkActuate":Ft(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Ft(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Ft(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Ft(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Ft(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Ft(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Ft(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Ft(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Ft(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":vr(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=id.get(o)||o,vr(n,o,u))}}function km(n,s,o,u,f,d){switch(o){case"style":ol(n,u,d);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(r(60));n.innerHTML=o}}break;case"children":typeof u=="string"?Rn(n,u):(typeof u=="number"||typeof u=="bigint")&&Rn(n,""+u);break;case"onScroll":u!=null&&Ve("scroll",n);break;case"onScrollEnd":u!=null&&Ve("scrollend",n);break;case"onClick":u!=null&&(n.onclick=ah);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ta.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),d=n[Et]||null,d=d!=null?d[o]:null,typeof d=="function"&&n.removeEventListener(s,d,f),typeof u=="function")){typeof d!="function"&&d!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(s,u,f);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):vr(n,o,u)}}}function $t(n,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",n),Ve("load",n);var u=!1,f=!1,d;for(d in o)if(o.hasOwnProperty(d)){var E=o[d];if(E!=null)switch(d){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:Ze(n,s,d,E,o,null)}}f&&Ze(n,s,"srcSet",o.srcSet,o,null),u&&Ze(n,s,"src",o.src,o,null);return;case"input":Ve("invalid",n);var T=d=E=f=null,R=null,z=null;for(u in o)if(o.hasOwnProperty(u)){var K=o[u];if(K!=null)switch(u){case"name":f=K;break;case"type":E=K;break;case"checked":R=K;break;case"defaultChecked":z=K;break;case"value":d=K;break;case"defaultValue":T=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(r(137,s));break;default:Ze(n,s,u,K,o,null)}}xs(n,d,T,R,z,E,f,!1),Ia(n);return;case"select":Ve("invalid",n),u=E=d=null;for(f in o)if(o.hasOwnProperty(f)&&(T=o[f],T!=null))switch(f){case"value":d=T;break;case"defaultValue":E=T;break;case"multiple":u=T;default:Ze(n,s,f,T,o,null)}s=d,o=E,n.multiple=!!u,s!=null?Pi(n,!!u,s,!1):o!=null&&Pi(n,!!u,o,!0);return;case"textarea":Ve("invalid",n),d=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(T=o[E],T!=null))switch(E){case"value":u=T;break;case"defaultValue":f=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ze(n,s,E,T,o,null)}Ns(n,u,f,d),Ia(n);return;case"option":for(R in o)if(o.hasOwnProperty(R)&&(u=o[R],u!=null))switch(R){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Ze(n,s,R,u,o,null)}return;case"dialog":Ve("beforetoggle",n),Ve("toggle",n),Ve("cancel",n),Ve("close",n);break;case"iframe":case"object":Ve("load",n);break;case"video":case"audio":for(u=0;u<Gl.length;u++)Ve(Gl[u],n);break;case"image":Ve("error",n),Ve("load",n);break;case"details":Ve("toggle",n);break;case"embed":case"source":case"link":Ve("error",n),Ve("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in o)if(o.hasOwnProperty(z)&&(u=o[z],u!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:Ze(n,s,z,u,o,null)}return;default:if(ll(s)){for(K in o)o.hasOwnProperty(K)&&(u=o[K],u!==void 0&&km(n,s,K,u,o,void 0));return}}for(T in o)o.hasOwnProperty(T)&&(u=o[T],u!=null&&Ze(n,s,T,u,o,null))}function qI(n,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,E=null,T=null,R=null,z=null,K=null;for(q in o){var X=o[q];if(o.hasOwnProperty(q)&&X!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":R=X;default:u.hasOwnProperty(q)||Ze(n,s,q,null,u,X)}}for(var B in u){var q=u[B];if(X=o[B],u.hasOwnProperty(B)&&(q!=null||X!=null))switch(B){case"type":d=q;break;case"name":f=q;break;case"checked":z=q;break;case"defaultChecked":K=q;break;case"value":E=q;break;case"defaultValue":T=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,s));break;default:q!==X&&Ze(n,s,B,q,u,X)}}pn(n,E,T,R,z,K,d,f);return;case"select":q=E=T=B=null;for(d in o)if(R=o[d],o.hasOwnProperty(d)&&R!=null)switch(d){case"value":break;case"multiple":q=R;default:u.hasOwnProperty(d)||Ze(n,s,d,null,u,R)}for(f in u)if(d=u[f],R=o[f],u.hasOwnProperty(f)&&(d!=null||R!=null))switch(f){case"value":B=d;break;case"defaultValue":T=d;break;case"multiple":E=d;default:d!==R&&Ze(n,s,f,d,u,R)}s=T,o=E,u=q,B!=null?Pi(n,!!o,B,!1):!!u!=!!o&&(s!=null?Pi(n,!!o,s,!0):Pi(n,!!o,o?[]:"",!1));return;case"textarea":q=B=null;for(T in o)if(f=o[T],o.hasOwnProperty(T)&&f!=null&&!u.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ze(n,s,T,null,u,f)}for(E in u)if(f=u[E],d=o[E],u.hasOwnProperty(E)&&(f!=null||d!=null))switch(E){case"value":B=f;break;case"defaultValue":q=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==d&&Ze(n,s,E,f,u,d)}We(n,B,q);return;case"option":for(var Te in o)if(B=o[Te],o.hasOwnProperty(Te)&&B!=null&&!u.hasOwnProperty(Te))switch(Te){case"selected":n.selected=!1;break;default:Ze(n,s,Te,null,u,B)}for(R in u)if(B=u[R],q=o[R],u.hasOwnProperty(R)&&B!==q&&(B!=null||q!=null))switch(R){case"selected":n.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Ze(n,s,R,B,u,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _e in o)B=o[_e],o.hasOwnProperty(_e)&&B!=null&&!u.hasOwnProperty(_e)&&Ze(n,s,_e,null,u,B);for(z in u)if(B=u[z],q=o[z],u.hasOwnProperty(z)&&B!==q&&(B!=null||q!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(r(137,s));break;default:Ze(n,s,z,B,u,q)}return;default:if(ll(s)){for(var et in o)B=o[et],o.hasOwnProperty(et)&&B!==void 0&&!u.hasOwnProperty(et)&&km(n,s,et,void 0,u,B);for(K in u)B=u[K],q=o[K],!u.hasOwnProperty(K)||B===q||B===void 0&&q===void 0||km(n,s,K,B,u,q);return}}for(var M in o)B=o[M],o.hasOwnProperty(M)&&B!=null&&!u.hasOwnProperty(M)&&Ze(n,s,M,null,u,B);for(X in u)B=u[X],q=o[X],!u.hasOwnProperty(X)||B===q||B==null&&q==null||Ze(n,s,X,B,u,q)}var Mm=null,Vm=null;function oh(n){return n.nodeType===9?n:n.ownerDocument}function x0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function N0(n,s){if(n===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&s==="foreignObject"?0:n}function Lm(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Um=null;function HI(){var n=window.event;return n&&n.type==="popstate"?n===Um?!1:(Um=n,!0):(Um=null,!1)}var O0=typeof setTimeout=="function"?setTimeout:void 0,GI=typeof clearTimeout=="function"?clearTimeout:void 0,D0=typeof Promise=="function"?Promise:void 0,$I=typeof queueMicrotask=="function"?queueMicrotask:typeof D0<"u"?function(n){return D0.resolve(null).then(n).catch(KI)}:O0;function KI(n){setTimeout(function(){throw n})}function Vr(n){return n==="head"}function P0(n,s){var o=s,u=0,f=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(0<u&&8>u){o=u;var E=n.ownerDocument;if(o&1&&Kl(E.documentElement),o&2&&Kl(E.body),o&4)for(o=E.head,Kl(o),E=o.firstChild;E;){var T=E.nextSibling,R=E.nodeName;E[ws]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=T}}if(f===0){n.removeChild(d),tu(s);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=d}while(o);tu(s)}function jm(n){var s=n.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":jm(o),yr(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function YI(n,s,o,u){for(;n.nodeType===1;){var f=o;if(n.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[ws])switch(s){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(s==="input"&&n.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=Gn(n.nextSibling),n===null)break}return null}function QI(n,s,o){if(s==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=Gn(n.nextSibling),n===null))return null;return n}function zm(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function XI(n,s){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function Gn(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return n}var Bm=null;function k0(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return n;s--}else o==="/$"&&s++}n=n.previousSibling}return null}function M0(n,s,o){switch(s=oh(o),n){case"html":if(n=s.documentElement,!n)throw Error(r(452));return n;case"head":if(n=s.head,!n)throw Error(r(453));return n;case"body":if(n=s.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}function Kl(n){for(var s=n.attributes;s.length;)n.removeAttributeNode(s[0]);yr(n)}var Ln=new Map,V0=new Set;function lh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ji=oe.d;oe.d={f:WI,r:JI,D:ZI,C:eR,L:tR,m:nR,X:rR,S:iR,M:sR};function WI(){var n=Ji.f(),s=Zc();return n||s}function JI(n){var s=Wn(n);s!==null&&s.tag===5&&s.type==="form"?n_(s):Ji.r(n)}var oo=typeof document>"u"?null:document;function L0(n,s,o){var u=oo;if(u&&typeof s=="string"&&s){var f=bt(s);f='link[rel="'+n+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),V0.has(f)||(V0.add(f),n={rel:n,crossOrigin:o,href:s},u.querySelector(f)===null&&(s=u.createElement("link"),$t(s,"link",n),pt(s),u.head.appendChild(s)))}}function ZI(n){Ji.D(n),L0("dns-prefetch",n,null)}function eR(n,s){Ji.C(n,s),L0("preconnect",n,s)}function tR(n,s,o){Ji.L(n,s,o);var u=oo;if(u&&n&&s){var f='link[rel="preload"][as="'+bt(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+bt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+bt(o.imageSizes)+'"]')):f+='[href="'+bt(n)+'"]';var d=f;switch(s){case"style":d=lo(n);break;case"script":d=uo(n)}Ln.has(d)||(n=_({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:n,as:s},o),Ln.set(d,n),u.querySelector(f)!==null||s==="style"&&u.querySelector(Yl(d))||s==="script"&&u.querySelector(Ql(d))||(s=u.createElement("link"),$t(s,"link",n),pt(s),u.head.appendChild(s)))}}function nR(n,s){Ji.m(n,s);var o=oo;if(o&&n){var u=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+bt(u)+'"][href="'+bt(n)+'"]',d=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=uo(n)}if(!Ln.has(d)&&(n=_({rel:"modulepreload",href:n},s),Ln.set(d,n),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Ql(d)))return}u=o.createElement("link"),$t(u,"link",n),pt(u),o.head.appendChild(u)}}}function iR(n,s,o){Ji.S(n,s,o);var u=oo;if(u&&n){var f=sn(u).hoistableStyles,d=lo(n);s=s||"default";var E=f.get(d);if(!E){var T={loading:0,preload:null};if(E=u.querySelector(Yl(d)))T.loading=5;else{n=_({rel:"stylesheet",href:n,"data-precedence":s},o),(o=Ln.get(d))&&Fm(n,o);var R=E=u.createElement("link");pt(R),$t(R,"link",n),R._p=new Promise(function(z,K){R.onload=z,R.onerror=K}),R.addEventListener("load",function(){T.loading|=1}),R.addEventListener("error",function(){T.loading|=2}),T.loading|=4,uh(E,s,u)}E={type:"stylesheet",instance:E,count:1,state:T},f.set(d,E)}}}function rR(n,s){Ji.X(n,s);var o=oo;if(o&&n){var u=sn(o).hoistableScripts,f=uo(n),d=u.get(f);d||(d=o.querySelector(Ql(f)),d||(n=_({src:n,async:!0},s),(s=Ln.get(f))&&qm(n,s),d=o.createElement("script"),pt(d),$t(d,"link",n),o.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},u.set(f,d))}}function sR(n,s){Ji.M(n,s);var o=oo;if(o&&n){var u=sn(o).hoistableScripts,f=uo(n),d=u.get(f);d||(d=o.querySelector(Ql(f)),d||(n=_({src:n,async:!0,type:"module"},s),(s=Ln.get(f))&&qm(n,s),d=o.createElement("script"),pt(d),$t(d,"link",n),o.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},u.set(f,d))}}function U0(n,s,o,u){var f=(f=Se.current)?lh(f):null;if(!f)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=lo(o.href),o=sn(f).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=lo(o.href);var d=sn(f).hoistableStyles,E=d.get(n);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,E),(d=f.querySelector(Yl(n)))&&!d._p&&(E.instance=d,E.state.loading=5),Ln.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Ln.set(n,o),d||aR(f,n,o,E.state))),s&&u===null)throw Error(r(528,""));return E}if(s&&u!==null)throw Error(r(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=uo(o),o=sn(f).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function lo(n){return'href="'+bt(n)+'"'}function Yl(n){return'link[rel="stylesheet"]['+n+"]"}function j0(n){return _({},n,{"data-precedence":n.precedence,precedence:null})}function aR(n,s,o,u){n.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=n.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),$t(s,"link",o),pt(s),n.head.appendChild(s))}function uo(n){return'[src="'+bt(n)+'"]'}function Ql(n){return"script[async]"+n}function z0(n,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=n.querySelector('style[data-href~="'+bt(o.href)+'"]');if(u)return s.instance=u,pt(u),u;var f=_({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),pt(u),$t(u,"style",f),uh(u,o.precedence,n),s.instance=u;case"stylesheet":f=lo(o.href);var d=n.querySelector(Yl(f));if(d)return s.state.loading|=4,s.instance=d,pt(d),d;u=j0(o),(f=Ln.get(f))&&Fm(u,f),d=(n.ownerDocument||n).createElement("link"),pt(d);var E=d;return E._p=new Promise(function(T,R){E.onload=T,E.onerror=R}),$t(d,"link",u),s.state.loading|=4,uh(d,o.precedence,n),s.instance=d;case"script":return d=uo(o.src),(f=n.querySelector(Ql(d)))?(s.instance=f,pt(f),f):(u=o,(f=Ln.get(d))&&(u=_({},o),qm(u,f)),n=n.ownerDocument||n,f=n.createElement("script"),pt(f),$t(f,"link",u),n.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(r(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,uh(u,o.precedence,n));return s.instance}function uh(n,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,d=f,E=0;E<u.length;E++){var T=u[E];if(T.dataset.precedence===s)d=T;else if(d!==f)break}d?d.parentNode.insertBefore(n,d.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(n,s.firstChild))}function Fm(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.title==null&&(n.title=s.title)}function qm(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.integrity==null&&(n.integrity=s.integrity)}var ch=null;function B0(n,s,o){if(ch===null){var u=new Map,f=ch=new Map;f.set(o,u)}else f=ch,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),f=0;f<o.length;f++){var d=o[f];if(!(d[ws]||d[Rt]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(s)||"";E=n+E;var T=u.get(E);T?T.push(d):u.set(E,[d])}}return u}function F0(n,s,o){n=n.ownerDocument||n,n.head.insertBefore(o,s==="title"?n.querySelector("head > title"):null)}function oR(n,s,o){if(o===1||s.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return n=s.disabled,typeof s.precedence=="string"&&n==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function q0(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Xl=null;function lR(){}function uR(n,s,o){if(Xl===null)throw Error(r(475));var u=Xl;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=lo(o.href),d=n.querySelector(Yl(f));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=hh.bind(u),n.then(u,u)),s.state.loading|=4,s.instance=d,pt(d);return}d=n.ownerDocument||n,o=j0(o),(f=Ln.get(f))&&Fm(o,f),d=d.createElement("link"),pt(d);var E=d;E._p=new Promise(function(T,R){E.onload=T,E.onerror=R}),$t(d,"link",o),s.instance=d}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(u.count++,s=hh.bind(u),n.addEventListener("load",s),n.addEventListener("error",s))}}function cR(){if(Xl===null)throw Error(r(475));var n=Xl;return n.stylesheets&&n.count===0&&Hm(n,n.stylesheets),0<n.count?function(s){var o=setTimeout(function(){if(n.stylesheets&&Hm(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=s,function(){n.unsuspend=null,clearTimeout(o)}}:null}function hh(){if(this.count--,this.count===0){if(this.stylesheets)Hm(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var fh=null;function Hm(n,s){n.stylesheets=null,n.unsuspend!==null&&(n.count++,fh=new Map,s.forEach(hR,n),fh=null,hh.call(n))}function hR(n,s){if(!(s.state.loading&4)){var o=fh.get(n);if(o)var u=o.get(null);else{o=new Map,fh.set(n,o);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var E=f[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=s.instance,E=f.getAttribute("data-precedence"),d=o.get(E)||u,d===u&&o.set(null,f),o.set(E,f),this.count++,u=hh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),d?d.parentNode.insertBefore(f,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),s.state.loading|=4}}var Wl={$$typeof:ne,Provider:null,Consumer:null,_currentValue:ge,_currentValue2:ge,_threadCount:0};function fR(n,s,o,u,f,d,E,T){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ci(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ci(0),this.hiddenUpdates=Ci(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function H0(n,s,o,u,f,d,E,T,R,z,K,X){return n=new fR(n,s,o,E,T,R,z,X),s=1,d===!0&&(s|=24),d=yn(3,null,null,s),n.current=d,d.stateNode=n,s=wd(),s.refCount++,n.pooledCache=s,s.refCount++,d.memoizedState={element:u,isDehydrated:o,cache:s},xd(d),n}function G0(n){return n?(n=za,n):za}function $0(n,s,o,u,f,d){f=G0(f),u.context===null?u.context=f:u.pendingContext=f,u=Ar(s),u.payload={element:o},d=d===void 0?null:d,d!==null&&(u.callback=d),o=Sr(n,u,s),o!==null&&(Tn(o,n,s),Rl(o,n,s))}function K0(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<s?o:s}}function Gm(n,s){K0(n,s),(n=n.alternate)&&K0(n,s)}function Y0(n){if(n.tag===13){var s=ja(n,67108864);s!==null&&Tn(s,n,67108864),Gm(n,67108864)}}var dh=!0;function dR(n,s,o,u){var f=$.T;$.T=null;var d=oe.p;try{oe.p=2,$m(n,s,o,u)}finally{oe.p=d,$.T=f}}function mR(n,s,o,u){var f=$.T;$.T=null;var d=oe.p;try{oe.p=8,$m(n,s,o,u)}finally{oe.p=d,$.T=f}}function $m(n,s,o,u){if(dh){var f=Km(u);if(f===null)Pm(n,s,u,mh,o),X0(n,u);else if(gR(f,n,s,o,u))u.stopPropagation();else if(X0(n,u),s&4&&-1<pR.indexOf(n)){for(;f!==null;){var d=Wn(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=zn(d.pendingLanes);if(E!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;E;){var R=1<<31-Wt(E);T.entanglements[1]|=R,E&=~R}hi(d),(Qe&6)===0&&(Wc=wn()+500,Hl(0))}}break;case 13:T=ja(d,2),T!==null&&Tn(T,d,2),Zc(),Gm(d,2)}if(d=Km(u),d===null&&Pm(n,s,u,mh,o),d===f)break;f=d}f!==null&&u.stopPropagation()}else Pm(n,s,u,null,o)}}function Km(n){return n=Cn(n),Ym(n)}var mh=null;function Ym(n){if(mh=null,n=Ni(n),n!==null){var s=l(n);if(s===null)n=null;else{var o=s.tag;if(o===13){if(n=c(s),n!==null)return n;n=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null)}}return mh=n,null}function Q0(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Wf()){case Qo:return 2;case va:return 8;case Es:case Jf:return 32;case _a:return 268435456;default:return 32}default:return 32}}var Qm=!1,Lr=null,Ur=null,jr=null,Jl=new Map,Zl=new Map,zr=[],pR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function X0(n,s){switch(n){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":jr=null;break;case"pointerover":case"pointerout":Jl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zl.delete(s.pointerId)}}function eu(n,s,o,u,f,d){return n===null||n.nativeEvent!==d?(n={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:d,targetContainers:[f]},s!==null&&(s=Wn(s),s!==null&&Y0(s)),n):(n.eventSystemFlags|=u,s=n.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),n)}function gR(n,s,o,u,f){switch(s){case"focusin":return Lr=eu(Lr,n,s,o,u,f),!0;case"dragenter":return Ur=eu(Ur,n,s,o,u,f),!0;case"mouseover":return jr=eu(jr,n,s,o,u,f),!0;case"pointerover":var d=f.pointerId;return Jl.set(d,eu(Jl.get(d)||null,n,s,o,u,f)),!0;case"gotpointercapture":return d=f.pointerId,Zl.set(d,eu(Zl.get(d)||null,n,s,o,u,f)),!0}return!1}function W0(n){var s=Ni(n.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){n.blockedOn=s,Zu(n.priority,function(){if(o.tag===13){var u=bn();u=mr(u);var f=ja(o,u);f!==null&&Tn(f,o,u),Gm(o,u)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ph(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var o=Km(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);ki=u,o.target.dispatchEvent(u),ki=null}else return s=Wn(o),s!==null&&Y0(s),n.blockedOn=o,!1;s.shift()}return!0}function J0(n,s,o){ph(n)&&o.delete(s)}function yR(){Qm=!1,Lr!==null&&ph(Lr)&&(Lr=null),Ur!==null&&ph(Ur)&&(Ur=null),jr!==null&&ph(jr)&&(jr=null),Jl.forEach(J0),Zl.forEach(J0)}function gh(n,s){n.blockedOn===s&&(n.blockedOn=null,Qm||(Qm=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,yR)))}var yh=null;function Z0(n){yh!==n&&(yh=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){yh===n&&(yh=null);for(var s=0;s<n.length;s+=3){var o=n[s],u=n[s+1],f=n[s+2];if(typeof u!="function"){if(Ym(u||o)===null)continue;break}var d=Wn(o);d!==null&&(n.splice(s,3),s-=3,Yd(d,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function tu(n){function s(R){return gh(R,n)}Lr!==null&&gh(Lr,n),Ur!==null&&gh(Ur,n),jr!==null&&gh(jr,n),Jl.forEach(s),Zl.forEach(s);for(var o=0;o<zr.length;o++){var u=zr[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<zr.length&&(o=zr[0],o.blockedOn===null);)W0(o),o.blockedOn===null&&zr.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],d=o[u+1],E=f[Et]||null;if(typeof d=="function")E||Z0(o);else if(E){var T=null;if(d&&d.hasAttribute("formAction")){if(f=d,E=d[Et]||null)T=E.formAction;else if(Ym(f)!==null)continue}else T=E.action;typeof T=="function"?o[u+1]=T:(o.splice(u,3),u-=3),Z0(o)}}}function Xm(n){this._internalRoot=n}vh.prototype.render=Xm.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(r(409));var o=s.current,u=bn();$0(o,u,n,s,null,null)},vh.prototype.unmount=Xm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;$0(n.current,2,null,n,null,null),Zc(),s[In]=null}};function vh(n){this._internalRoot=n}vh.prototype.unstable_scheduleHydration=function(n){if(n){var s=pr();n={blockedOn:null,target:n,priority:s};for(var o=0;o<zr.length&&s!==0&&s<zr[o].priority;o++);zr.splice(o,0,n),o===0&&W0(n)}};var eE=e.version;if(eE!=="19.1.0")throw Error(r(527,eE,"19.1.0"));oe.findDOMNode=function(n){var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=p(s),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var vR={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:$,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _h=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_h.isDisabled&&_h.supportsFiber)try{ft=_h.inject(vR),Ye=_h}catch{}}return iu.createRoot=function(n,s){if(!a(n))throw Error(r(299));var o=!1,u="",f=g_,d=y_,E=v_,T=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(d=s.onCaughtError),s.onRecoverableError!==void 0&&(E=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(T=s.unstable_transitionCallbacks)),s=H0(n,1,!1,null,null,o,u,f,d,E,T,null),n[In]=s.current,Dm(n),new Xm(s)},iu.hydrateRoot=function(n,s,o){if(!a(n))throw Error(r(299));var u=!1,f="",d=g_,E=y_,T=v_,R=null,z=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(d=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(T=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(R=o.unstable_transitionCallbacks),o.formState!==void 0&&(z=o.formState)),s=H0(n,1,!0,s,o??null,u,f,d,E,T,R,z),s.context=G0(null),o=s.current,u=bn(),u=mr(u),f=Ar(u),f.callback=null,Sr(o,f,u),o=u,s.current.lanes=o,xi(s,o),hi(s),n[In]=s.current,Dm(n),new vh(s)},iu.version="19.1.0",iu}var cE;function xR(){if(cE)return Zm.exports;cE=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Zm.exports=CR(),Zm.exports}var NR=xR();GT();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tu(){return Tu=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Tu.apply(this,arguments)}var Qr;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(Qr||(Qr={}));const hE="popstate";function OR(i){i===void 0&&(i={});function e(r,a){let{pathname:l,search:c,hash:m}=r.location;return Rp("",{pathname:l,search:c,hash:m},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(r,a){return typeof a=="string"?a:Hh(a)}return PR(e,t,null,i)}function _t(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function $T(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function DR(){return Math.random().toString(36).substr(2,8)}function fE(i,e){return{usr:i.state,key:i.key,idx:e}}function Rp(i,e,t,r){return t===void 0&&(t=null),Tu({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof e=="string"?Lo(e):e,{state:t,key:e&&e.key||r||DR()})}function Hh(i){let{pathname:e="/",search:t="",hash:r=""}=i;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Lo(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substr(t),i=i.substr(0,t));let r=i.indexOf("?");r>=0&&(e.search=i.substr(r),i=i.substr(0,r)),i&&(e.pathname=i)}return e}function PR(i,e,t,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,c=a.history,m=Qr.Pop,p=null,g=_();g==null&&(g=0,c.replaceState(Tu({},c.state,{idx:g}),""));function _(){return(c.state||{idx:null}).idx}function b(){m=Qr.Pop;let F=_(),ee=F==null?null:F-g;g=F,p&&p({action:m,location:Q.location,delta:ee})}function S(F,ee){m=Qr.Push;let ie=Rp(Q.location,F,ee);g=_()+1;let ne=fE(ie,g),fe=Q.createHref(ie);try{c.pushState(ne,"",fe)}catch(ce){if(ce instanceof DOMException&&ce.name==="DataCloneError")throw ce;a.location.assign(fe)}l&&p&&p({action:m,location:Q.location,delta:1})}function j(F,ee){m=Qr.Replace;let ie=Rp(Q.location,F,ee);g=_();let ne=fE(ie,g),fe=Q.createHref(ie);c.replaceState(ne,"",fe),l&&p&&p({action:m,location:Q.location,delta:0})}function G(F){let ee=a.location.origin!=="null"?a.location.origin:a.location.href,ie=typeof F=="string"?F:Hh(F);return ie=ie.replace(/ $/,"%20"),_t(ee,"No window.location.(origin|href) available to create URL for href: "+ie),new URL(ie,ee)}let Q={get action(){return m},get location(){return i(a,c)},listen(F){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(hE,b),p=F,()=>{a.removeEventListener(hE,b),p=null}},createHref(F){return e(a,F)},createURL:G,encodeLocation(F){let ee=G(F);return{pathname:ee.pathname,search:ee.search,hash:ee.hash}},push:S,replace:j,go(F){return c.go(F)}};return Q}var dE;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(dE||(dE={}));function kR(i,e,t){return t===void 0&&(t="/"),MR(i,e,t)}function MR(i,e,t,r){let a=typeof e=="string"?Lo(e):e,l=Cg(a.pathname||"/",t);if(l==null)return null;let c=KT(i);VR(c);let m=null;for(let p=0;m==null&&p<c.length;++p){let g=YR(l);m=GR(c[p],g)}return m}function KT(i,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let a=(l,c,m)=>{let p={relativePath:m===void 0?l.path||"":m,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(_t(p.relativePath.startsWith(r),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(r.length));let g=Wr([r,p.relativePath]),_=t.concat(p);l.children&&l.children.length>0&&(_t(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),KT(l.children,e,_,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:qR(g,l.index),routesMeta:_})};return i.forEach((l,c)=>{var m;if(l.path===""||!((m=l.path)!=null&&m.includes("?")))a(l,c);else for(let p of YT(l.path))a(l,c,p)}),e}function YT(i){let e=i.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let c=YT(r.join("/")),m=[];return m.push(...c.map(p=>p===""?l:[l,p].join("/"))),a&&m.push(...c),m.map(p=>i.startsWith("/")&&p===""?"/":p)}function VR(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:HR(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const LR=/^:[\w-]+$/,UR=3,jR=2,zR=1,BR=10,FR=-2,mE=i=>i==="*";function qR(i,e){let t=i.split("/"),r=t.length;return t.some(mE)&&(r+=FR),e&&(r+=jR),t.filter(a=>!mE(a)).reduce((a,l)=>a+(LR.test(l)?UR:l===""?zR:BR),r)}function HR(i,e){return i.length===e.length&&i.slice(0,-1).every((r,a)=>r===e[a])?i[i.length-1]-e[e.length-1]:0}function GR(i,e,t){let{routesMeta:r}=i,a={},l="/",c=[];for(let m=0;m<r.length;++m){let p=r[m],g=m===r.length-1,_=l==="/"?e:e.slice(l.length)||"/",b=$R({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},_),S=p.route;if(!b)return null;Object.assign(a,b.params),c.push({params:a,pathname:Wr([l,b.pathname]),pathnameBase:JR(Wr([l,b.pathnameBase])),route:S}),b.pathnameBase!=="/"&&(l=Wr([l,b.pathnameBase]))}return c}function $R(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,r]=KR(i.path,i.caseSensitive,i.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),m=a.slice(1);return{params:r.reduce((g,_,b)=>{let{paramName:S,isOptional:j}=_;if(S==="*"){let Q=m[b]||"";c=l.slice(0,l.length-Q.length).replace(/(.)\/+$/,"$1")}const G=m[b];return j&&!G?g[S]=void 0:g[S]=(G||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:i}}function KR(i,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),$T(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let r=[],a="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,m,p)=>(r.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(r.push({paramName:"*"}),a+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":i!==""&&i!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function YR(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return $T(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),i}}function Cg(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=i.charAt(t);return r&&r!=="/"?null:i.slice(t)||"/"}function QR(i,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:a=""}=typeof i=="string"?Lo(i):i;return{pathname:t?t.startsWith("/")?t:XR(t,e):e,search:ZR(r),hash:eC(a)}}function XR(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function ip(i,e,t,r){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function WR(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function xg(i,e){let t=WR(i);return e?t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Ng(i,e,t,r){r===void 0&&(r=!1);let a;typeof i=="string"?a=Lo(i):(a=Tu({},i),_t(!a.pathname||!a.pathname.includes("?"),ip("?","pathname","search",a)),_t(!a.pathname||!a.pathname.includes("#"),ip("#","pathname","hash",a)),_t(!a.search||!a.search.includes("#"),ip("#","search","hash",a)));let l=i===""||a.pathname==="",c=l?"/":a.pathname,m;if(c==null)m=t;else{let b=e.length-1;if(!r&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),b-=1;a.pathname=S.join("/")}m=b>=0?e[b]:"/"}let p=QR(a,m),g=c&&c!=="/"&&c.endsWith("/"),_=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(g||_)&&(p.pathname+="/"),p}const Wr=i=>i.join("/").replace(/\/\/+/g,"/"),JR=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),ZR=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,eC=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function tC(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const QT=["post","put","patch","delete"];new Set(QT);const nC=["get",...QT];new Set(nC);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Au(){return Au=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Au.apply(this,arguments)}const Og=se.createContext(null),iC=se.createContext(null),ps=se.createContext(null),bf=se.createContext(null),cr=se.createContext({outlet:null,matches:[],isDataRoute:!1}),XT=se.createContext(null);function rC(i,e){let{relative:t}=e===void 0?{}:e;Uo()||_t(!1);let{basename:r,navigator:a}=se.useContext(ps),{hash:l,pathname:c,search:m}=JT(i,{relative:t}),p=c;return r!=="/"&&(p=c==="/"?r:Wr([r,c])),a.createHref({pathname:p,search:m,hash:l})}function Uo(){return se.useContext(bf)!=null}function Mu(){return Uo()||_t(!1),se.useContext(bf).location}function WT(i){se.useContext(ps).static||se.useLayoutEffect(i)}function Tf(){let{isDataRoute:i}=se.useContext(cr);return i?_C():sC()}function sC(){Uo()||_t(!1);let i=se.useContext(Og),{basename:e,future:t,navigator:r}=se.useContext(ps),{matches:a}=se.useContext(cr),{pathname:l}=Mu(),c=JSON.stringify(xg(a,t.v7_relativeSplatPath)),m=se.useRef(!1);return WT(()=>{m.current=!0}),se.useCallback(function(g,_){if(_===void 0&&(_={}),!m.current)return;if(typeof g=="number"){r.go(g);return}let b=Ng(g,JSON.parse(c),l,_.relative==="path");i==null&&e!=="/"&&(b.pathname=b.pathname==="/"?e:Wr([e,b.pathname])),(_.replace?r.replace:r.push)(b,_.state,_)},[e,r,c,l,i])}const aC=se.createContext(null);function oC(i){let e=se.useContext(cr).outlet;return e&&se.createElement(aC.Provider,{value:i},e)}function JT(i,e){let{relative:t}=e===void 0?{}:e,{future:r}=se.useContext(ps),{matches:a}=se.useContext(cr),{pathname:l}=Mu(),c=JSON.stringify(xg(a,r.v7_relativeSplatPath));return se.useMemo(()=>Ng(i,JSON.parse(c),l,t==="path"),[i,c,l,t])}function lC(i,e){return uC(i,e)}function uC(i,e,t,r){Uo()||_t(!1);let{navigator:a,static:l}=se.useContext(ps),{matches:c}=se.useContext(cr),m=c[c.length-1],p=m?m.params:{};m&&m.pathname;let g=m?m.pathnameBase:"/";m&&m.route;let _=Mu(),b;if(e){var S;let ee=typeof e=="string"?Lo(e):e;g==="/"||(S=ee.pathname)!=null&&S.startsWith(g)||_t(!1),b=ee}else b=_;let j=b.pathname||"/",G=j;if(g!=="/"){let ee=g.replace(/^\//,"").split("/");G="/"+j.replace(/^\//,"").split("/").slice(ee.length).join("/")}let Q=kR(i,{pathname:G}),F=mC(Q&&Q.map(ee=>Object.assign({},ee,{params:Object.assign({},p,ee.params),pathname:Wr([g,a.encodeLocation?a.encodeLocation(ee.pathname).pathname:ee.pathname]),pathnameBase:ee.pathnameBase==="/"?g:Wr([g,a.encodeLocation?a.encodeLocation(ee.pathnameBase).pathname:ee.pathnameBase])})),c,t,r);return e&&F?se.createElement(bf.Provider,{value:{location:Au({pathname:"/",search:"",hash:"",state:null,key:"default"},b),navigationType:Qr.Pop}},F):F}function cC(){let i=vC(),e=tC(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return se.createElement(se.Fragment,null,se.createElement("h2",null,"Unexpected Application Error!"),se.createElement("h3",{style:{fontStyle:"italic"}},e),t?se.createElement("pre",{style:a},t):null,null)}const hC=se.createElement(cC,null);class fC extends se.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?se.createElement(cr.Provider,{value:this.props.routeContext},se.createElement(XT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function dC(i){let{routeContext:e,match:t,children:r}=i,a=se.useContext(Og);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),se.createElement(cr.Provider,{value:e},r)}function mC(i,e,t,r){var a;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),i==null){var l;if(!t)return null;if(t.errors)i=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let c=i,m=(a=t)==null?void 0:a.errors;if(m!=null){let _=c.findIndex(b=>b.route.id&&(m==null?void 0:m[b.route.id])!==void 0);_>=0||_t(!1),c=c.slice(0,Math.min(c.length,_+1))}let p=!1,g=-1;if(t&&r&&r.v7_partialHydration)for(let _=0;_<c.length;_++){let b=c[_];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(g=_),b.route.id){let{loaderData:S,errors:j}=t,G=b.route.loader&&S[b.route.id]===void 0&&(!j||j[b.route.id]===void 0);if(b.route.lazy||G){p=!0,g>=0?c=c.slice(0,g+1):c=[c[0]];break}}}return c.reduceRight((_,b,S)=>{let j,G=!1,Q=null,F=null;t&&(j=m&&b.route.id?m[b.route.id]:void 0,Q=b.route.errorElement||hC,p&&(g<0&&S===0?(EC("route-fallback"),G=!0,F=null):g===S&&(G=!0,F=b.route.hydrateFallbackElement||null)));let ee=e.concat(c.slice(0,S+1)),ie=()=>{let ne;return j?ne=Q:G?ne=F:b.route.Component?ne=se.createElement(b.route.Component,null):b.route.element?ne=b.route.element:ne=_,se.createElement(dC,{match:b,routeContext:{outlet:_,matches:ee,isDataRoute:t!=null},children:ne})};return t&&(b.route.ErrorBoundary||b.route.errorElement||S===0)?se.createElement(fC,{location:t.location,revalidation:t.revalidation,component:Q,error:j,children:ie(),routeContext:{outlet:null,matches:ee,isDataRoute:!0}}):ie()},null)}var ZT=function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i}(ZT||{}),e1=function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i}(e1||{});function pC(i){let e=se.useContext(Og);return e||_t(!1),e}function gC(i){let e=se.useContext(iC);return e||_t(!1),e}function yC(i){let e=se.useContext(cr);return e||_t(!1),e}function t1(i){let e=yC(),t=e.matches[e.matches.length-1];return t.route.id||_t(!1),t.route.id}function vC(){var i;let e=se.useContext(XT),t=gC(),r=t1();return e!==void 0?e:(i=t.errors)==null?void 0:i[r]}function _C(){let{router:i}=pC(ZT.UseNavigateStable),e=t1(e1.UseNavigateStable),t=se.useRef(!1);return WT(()=>{t.current=!0}),se.useCallback(function(a,l){l===void 0&&(l={}),t.current&&(typeof a=="number"?i.navigate(a):i.navigate(a,Au({fromRouteId:e},l)))},[i,e])}const pE={};function EC(i,e,t){pE[i]||(pE[i]=!0)}function bC(i,e){i==null||i.v7_startTransition,i==null||i.v7_relativeSplatPath}function TC(i){let{to:e,replace:t,state:r,relative:a}=i;Uo()||_t(!1);let{future:l,static:c}=se.useContext(ps),{matches:m}=se.useContext(cr),{pathname:p}=Mu(),g=Tf(),_=Ng(e,xg(m,l.v7_relativeSplatPath),p,a==="path"),b=JSON.stringify(_);return se.useEffect(()=>g(JSON.parse(b),{replace:t,state:r,relative:a}),[g,b,a,t,r]),null}function Dg(i){return oC(i.context)}function un(i){_t(!1)}function AC(i){let{basename:e="/",children:t=null,location:r,navigationType:a=Qr.Pop,navigator:l,static:c=!1,future:m}=i;Uo()&&_t(!1);let p=e.replace(/^\/*/,"/"),g=se.useMemo(()=>({basename:p,navigator:l,static:c,future:Au({v7_relativeSplatPath:!1},m)}),[p,m,l,c]);typeof r=="string"&&(r=Lo(r));let{pathname:_="/",search:b="",hash:S="",state:j=null,key:G="default"}=r,Q=se.useMemo(()=>{let F=Cg(_,p);return F==null?null:{location:{pathname:F,search:b,hash:S,state:j,key:G},navigationType:a}},[p,_,b,S,j,G,a]);return Q==null?null:se.createElement(ps.Provider,{value:g},se.createElement(bf.Provider,{children:t,value:Q}))}function SC(i){let{children:e,location:t}=i;return lC(Cp(e),t)}new Promise(()=>{});function Cp(i,e){e===void 0&&(e=[]);let t=[];return se.Children.forEach(i,(r,a)=>{if(!se.isValidElement(r))return;let l=[...e,a];if(r.type===se.Fragment){t.push.apply(t,Cp(r.props.children,l));return}r.type!==un&&_t(!1),!r.props.index||!r.props.children||_t(!1);let c={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=Cp(r.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xp(){return xp=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},xp.apply(this,arguments)}function wC(i,e){if(i==null)return{};var t={},r=Object.keys(i),a,l;for(l=0;l<r.length;l++)a=r[l],!(e.indexOf(a)>=0)&&(t[a]=i[a]);return t}function IC(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function RC(i,e){return i.button===0&&(!e||e==="_self")&&!IC(i)}const CC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],xC="6";try{window.__reactRouterVersion=xC}catch{}const NC="startTransition",gE=SR[NC];function OC(i){let{basename:e,children:t,future:r,window:a}=i,l=se.useRef();l.current==null&&(l.current=OR({window:a,v5Compat:!0}));let c=l.current,[m,p]=se.useState({action:c.action,location:c.location}),{v7_startTransition:g}=r||{},_=se.useCallback(b=>{g&&gE?gE(()=>p(b)):p(b)},[p,g]);return se.useLayoutEffect(()=>c.listen(_),[c,_]),se.useEffect(()=>bC(r),[r]),se.createElement(AC,{basename:e,children:t,location:m.location,navigationType:m.action,navigator:c,future:r})}const DC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",PC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pg=se.forwardRef(function(e,t){let{onClick:r,relative:a,reloadDocument:l,replace:c,state:m,target:p,to:g,preventScrollReset:_,viewTransition:b}=e,S=wC(e,CC),{basename:j}=se.useContext(ps),G,Q=!1;if(typeof g=="string"&&PC.test(g)&&(G=g,DC))try{let ne=new URL(window.location.href),fe=g.startsWith("//")?new URL(ne.protocol+g):new URL(g),ce=Cg(fe.pathname,j);fe.origin===ne.origin&&ce!=null?g=ce+fe.search+fe.hash:Q=!0}catch{}let F=rC(g,{relative:a}),ee=kC(g,{replace:c,state:m,target:p,preventScrollReset:_,relative:a,viewTransition:b});function ie(ne){r&&r(ne),ne.defaultPrevented||ee(ne)}return se.createElement("a",xp({},S,{href:G||F,onClick:Q||l?r:ie,ref:t,target:p}))});var yE;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(yE||(yE={}));var vE;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(vE||(vE={}));function kC(i,e){let{target:t,replace:r,state:a,preventScrollReset:l,relative:c,viewTransition:m}=e===void 0?{}:e,p=Tf(),g=Mu(),_=JT(i,{relative:c});return se.useCallback(b=>{if(RC(b,t)){b.preventDefault();let S=r!==void 0?r:Hh(g)===Hh(_);p(i,{replace:S,state:a,preventScrollReset:l,relative:c,viewTransition:m})}},[g,p,_,r,a,t,i,l,c,m])}const MC=()=>{};var _E={};/**
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
 */const n1=function(i){const e=[];let t=0;for(let r=0;r<i.length;r++){let a=i.charCodeAt(r);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++r)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},VC=function(i){const e=[];let t=0,r=0;for(;t<i.length;){const a=i[t++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[t++];e[r++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[t++],c=i[t++],m=i[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|m&63)-65536;e[r++]=String.fromCharCode(55296+(p>>10)),e[r++]=String.fromCharCode(56320+(p&1023))}else{const l=i[t++],c=i[t++];e[r++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},i1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<i.length;a+=3){const l=i[a],c=a+1<i.length,m=c?i[a+1]:0,p=a+2<i.length,g=p?i[a+2]:0,_=l>>2,b=(l&3)<<4|m>>4;let S=(m&15)<<2|g>>6,j=g&63;p||(j=64,c||(S=64)),r.push(t[_],t[b],t[S],t[j])}return r.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(n1(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):VC(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<i.length;){const l=t[i.charAt(a++)],m=a<i.length?t[i.charAt(a)]:0;++a;const g=a<i.length?t[i.charAt(a)]:64;++a;const b=a<i.length?t[i.charAt(a)]:64;if(++a,l==null||m==null||g==null||b==null)throw new LC;const S=l<<2|m>>4;if(r.push(S),g!==64){const j=m<<4&240|g>>2;if(r.push(j),b!==64){const G=g<<6&192|b;r.push(G)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class LC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const UC=function(i){const e=n1(i);return i1.encodeByteArray(e,!0)},Gh=function(i){return UC(i).replace(/\./g,"")},kg=function(i){try{return i1.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zC=()=>jC().__FIREBASE_DEFAULTS__,BC=()=>{if(typeof process>"u"||typeof _E>"u")return;const i=_E.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},FC=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&kg(i[1]);return e&&JSON.parse(e)},Af=()=>{try{return MC()||zC()||BC()||FC()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},r1=i=>{var e,t;return(t=(e=Af())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},qC=i=>{const e=r1(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},s1=()=>{var i;return(i=Af())===null||i===void 0?void 0:i.config},a1=i=>{var e;return(e=Af())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class HC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function jo(i){return i.endsWith(".cloudworkstations.dev")}async function o1(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function GC(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",a=i.iat||0,l=i.sub||i.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Gh(JSON.stringify(t)),Gh(JSON.stringify(c)),""].join(".")}const cu={};function $C(){const i={prod:[],emulator:[]};for(const e of Object.keys(cu))cu[e]?i.emulator.push(e):i.prod.push(e);return i}function KC(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let EE=!1;function Sf(i,e){if(typeof window>"u"||typeof document>"u"||!jo(window.location.host)||cu[i]===e||cu[i]||EE)return;cu[i]=e;function t(S){return`__firebase__banner__${S}`}const r="__firebase__banner",l=$C().prod.length>0;function c(){const S=document.getElementById(r);S&&S.remove()}function m(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,j){S.setAttribute("width","24"),S.setAttribute("id",j),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{EE=!0,c()},S}function _(S,j){S.setAttribute("id",j),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function b(){const S=KC(r),j=t("text"),G=document.getElementById(j)||document.createElement("span"),Q=t("learnmore"),F=document.getElementById(Q)||document.createElement("a"),ee=t("preprendIcon"),ie=document.getElementById(ee)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const ne=S.element;m(ne),_(F,Q);const fe=g();p(ie,ee),ne.append(ie,G,F,fe),document.body.appendChild(ne)}l?(G.innerText="Preview backend disconnected.",ie.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function l1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function YC(){var i;const e=(i=Af())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function u1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function c1(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function h1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function f1(){const i=tt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function QC(){return!YC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function XC(){try{return typeof indexedDB=="object"}catch{return!1}}function WC(){return new Promise((i,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(r),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const JC="FirebaseError";class jn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=JC,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gs.prototype.create)}}class gs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?ZC(l,r):"Error",m=`${this.serviceName}: ${c} (${a}).`;return new jn(a,m,r)}}function ZC(i,e){return i.replace(e2,(t,r)=>{const a=e[r];return a!=null?String(a):`<${r}?>`})}const e2=/\{\$([^}]+)}/g;function d1(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ns(i,e){if(i===e)return!0;const t=Object.keys(i),r=Object.keys(e);for(const a of t){if(!r.includes(a))return!1;const l=i[a],c=e[a];if(bE(l)&&bE(c)){if(!ns(l,c))return!1}else if(l!==c)return!1}for(const a of r)if(!t.includes(a))return!1;return!0}function bE(i){return i!==null&&typeof i=="object"}/**
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
 */function hr(i){const e=[];for(const[t,r]of Object.entries(i))Array.isArray(r)?r.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function t2(i){const e={};return i.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[a,l]=r.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function m1(i,e){const t=new n2(i,e);return t.subscribe.bind(t)}class n2{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let a;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");i2(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:r},a.next===void 0&&(a.next=rp),a.error===void 0&&(a.error=rp),a.complete===void 0&&(a.complete=rp);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function i2(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function rp(){}/**
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
 */function Qt(i){return i&&i._delegate?i._delegate:i}class ir{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ea="[DEFAULT]";/**
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
 */class r2{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new HC;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(a2(e))try{this.getOrInitializeService({instanceIdentifier:ea})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});r.resolve(l)}catch{}}}}clearInstance(e=ea){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ea){return this.instances.has(e)}getOptions(e=ea){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[l,c]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(l);r===m&&c.resolve(a)}return a}onInit(e,t){var r;const a=this.normalizeInstanceIdentifier(t),l=(r=this.onInitCallbacks.get(a))!==null&&r!==void 0?r:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const a of r)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:s2(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ea){return this.component?this.component.multipleInstances?e:ea:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function s2(i){return i===ea?void 0:i}function a2(i){return i.instantiationMode==="EAGER"}/**
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
 */class o2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new r2(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ke;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ke||(ke={}));const l2={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},u2=ke.INFO,c2={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},h2=(i,e,...t)=>{if(e<i.logLevel)return;const r=new Date().toISOString(),a=c2[e];if(a)console[a](`[${r}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wf{constructor(e){this.name=e,this._logLevel=u2,this._logHandler=h2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?l2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const f2=(i,e)=>e.some(t=>i instanceof t);let TE,AE;function d2(){return TE||(TE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function m2(){return AE||(AE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const p1=new WeakMap,Np=new WeakMap,g1=new WeakMap,sp=new WeakMap,Mg=new WeakMap;function p2(i){const e=new Promise((t,r)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",c)},l=()=>{t(Jr(i.result)),a()},c=()=>{r(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&p1.set(t,i)}).catch(()=>{}),Mg.set(e,i),e}function g2(i){if(Np.has(i))return;const e=new Promise((t,r)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",c),i.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{r(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",c),i.addEventListener("abort",c)});Np.set(i,e)}let Op={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Np.get(i);if(e==="objectStoreNames")return i.objectStoreNames||g1.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Jr(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function y2(i){Op=i(Op)}function v2(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=i.call(ap(this),e,...t);return g1.set(r,e.sort?e.sort():[e]),Jr(r)}:m2().includes(i)?function(...e){return i.apply(ap(this),e),Jr(p1.get(this))}:function(...e){return Jr(i.apply(ap(this),e))}}function _2(i){return typeof i=="function"?v2(i):(i instanceof IDBTransaction&&g2(i),f2(i,d2())?new Proxy(i,Op):i)}function Jr(i){if(i instanceof IDBRequest)return p2(i);if(sp.has(i))return sp.get(i);const e=_2(i);return e!==i&&(sp.set(i,e),Mg.set(e,i)),e}const ap=i=>Mg.get(i);function E2(i,e,{blocked:t,upgrade:r,blocking:a,terminated:l}={}){const c=indexedDB.open(i,e),m=Jr(c);return r&&c.addEventListener("upgradeneeded",p=>{r(Jr(c.result),p.oldVersion,p.newVersion,Jr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),m.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),m}const b2=["get","getKey","getAll","getAllKeys","count"],T2=["put","add","delete","clear"],op=new Map;function SE(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(op.get(e))return op.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,a=T2.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(a||b2.includes(t)))return;const l=async function(c,...m){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return r&&(g=g.index(m.shift())),(await Promise.all([g[t](...m),a&&p.done]))[0]};return op.set(e,l),l}y2(i=>({...i,get:(e,t,r)=>SE(e,t)||i.get(e,t,r),has:(e,t)=>!!SE(e,t)||i.has(e,t)}));/**
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
 */class A2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(S2(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function S2(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dp="@firebase/app",wE="0.13.0";/**
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
 */const rr=new wf("@firebase/app"),w2="@firebase/app-compat",I2="@firebase/analytics-compat",R2="@firebase/analytics",C2="@firebase/app-check-compat",x2="@firebase/app-check",N2="@firebase/auth",O2="@firebase/auth-compat",D2="@firebase/database",P2="@firebase/data-connect",k2="@firebase/database-compat",M2="@firebase/functions",V2="@firebase/functions-compat",L2="@firebase/installations",U2="@firebase/installations-compat",j2="@firebase/messaging",z2="@firebase/messaging-compat",B2="@firebase/performance",F2="@firebase/performance-compat",q2="@firebase/remote-config",H2="@firebase/remote-config-compat",G2="@firebase/storage",$2="@firebase/storage-compat",K2="@firebase/firestore",Y2="@firebase/ai",Q2="@firebase/firestore-compat",X2="firebase",W2="11.8.0";/**
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
 */const Pp="[DEFAULT]",J2={[Dp]:"fire-core",[w2]:"fire-core-compat",[R2]:"fire-analytics",[I2]:"fire-analytics-compat",[x2]:"fire-app-check",[C2]:"fire-app-check-compat",[N2]:"fire-auth",[O2]:"fire-auth-compat",[D2]:"fire-rtdb",[P2]:"fire-data-connect",[k2]:"fire-rtdb-compat",[M2]:"fire-fn",[V2]:"fire-fn-compat",[L2]:"fire-iid",[U2]:"fire-iid-compat",[j2]:"fire-fcm",[z2]:"fire-fcm-compat",[B2]:"fire-perf",[F2]:"fire-perf-compat",[q2]:"fire-rc",[H2]:"fire-rc-compat",[G2]:"fire-gcs",[$2]:"fire-gcs-compat",[K2]:"fire-fst",[Q2]:"fire-fst-compat",[Y2]:"fire-vertex","fire-js":"fire-js",[X2]:"fire-js-all"};/**
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
 */const $h=new Map,Z2=new Map,kp=new Map;function IE(i,e){try{i.container.addComponent(e)}catch(t){rr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function is(i){const e=i.name;if(kp.has(e))return rr.debug(`There were multiple attempts to register component ${e}.`),!1;kp.set(e,i);for(const t of $h.values())IE(t,i);for(const t of Z2.values())IE(t,i);return!0}function Vu(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function wt(i){return i==null?!1:i.settings!==void 0}/**
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
 */const ex={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zr=new gs("app","Firebase",ex);/**
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
 */class tx{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ii=W2;function y1(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Pp,automaticDataCollectionEnabled:!0},e),a=r.name;if(typeof a!="string"||!a)throw Zr.create("bad-app-name",{appName:String(a)});if(t||(t=s1()),!t)throw Zr.create("no-options");const l=$h.get(a);if(l){if(ns(t,l.options)&&ns(r,l.config))return l;throw Zr.create("duplicate-app",{appName:a})}const c=new o2(a);for(const p of kp.values())c.addComponent(p);const m=new tx(t,r,c);return $h.set(a,m),m}function Vg(i=Pp){const e=$h.get(i);if(!e&&i===Pp&&s1())return y1();if(!e)throw Zr.create("no-app",{appName:i});return e}function yi(i,e,t){var r;let a=(r=J2[i])!==null&&r!==void 0?r:i;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const m=[`Unable to register library "${a}" with version "${e}":`];l&&m.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&m.push("and"),c&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rr.warn(m.join(" "));return}is(new ir(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const nx="firebase-heartbeat-database",ix=1,Su="firebase-heartbeat-store";let lp=null;function v1(){return lp||(lp=E2(nx,ix,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Su)}catch(t){console.warn(t)}}}}).catch(i=>{throw Zr.create("idb-open",{originalErrorMessage:i.message})})),lp}async function rx(i){try{const t=(await v1()).transaction(Su),r=await t.objectStore(Su).get(_1(i));return await t.done,r}catch(e){if(e instanceof jn)rr.warn(e.message);else{const t=Zr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rr.warn(t.message)}}}async function RE(i,e){try{const r=(await v1()).transaction(Su,"readwrite");await r.objectStore(Su).put(e,_1(i)),await r.done}catch(t){if(t instanceof jn)rr.warn(t.message);else{const r=Zr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});rr.warn(r.message)}}}function _1(i){return`${i.name}!${i.options.appId}`}/**
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
 */const sx=1024,ax=30;class ox{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ux(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=CE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>ax){const c=cx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){rr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=CE(),{heartbeatsToSend:r,unsentEntries:a}=lx(this._heartbeatsCache.heartbeats),l=Gh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return rr.warn(t),""}}}function CE(){return new Date().toISOString().substring(0,10)}function lx(i,e=sx){const t=[];let r=i.slice();for(const a of i){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),xE(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),xE(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ux{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return XC()?WC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await rx(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return RE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return RE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function xE(i){return Gh(JSON.stringify({version:2,heartbeats:i})).length}function cx(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let r=1;r<i.length;r++)i[r].date<t&&(t=i[r].date,e=r);return e}/**
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
 */function hx(i){is(new ir("platform-logger",e=>new A2(e),"PRIVATE")),is(new ir("heartbeat",e=>new ox(e),"PRIVATE")),yi(Dp,wE,i),yi(Dp,wE,"esm2017"),yi("fire-js","")}hx("");function zo(i,e){var t={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&e.indexOf(r)<0&&(t[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(i);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(i,r[a])&&(t[r[a]]=i[r[a]]);return t}function E1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fx=E1,b1=new gs("auth","Firebase",E1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh=new wf("@firebase/auth");function dx(i,...e){Kh.logLevel<=ke.WARN&&Kh.warn(`Auth (${Ii}): ${i}`,...e)}function xh(i,...e){Kh.logLevel<=ke.ERROR&&Kh.error(`Auth (${Ii}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(i,...e){throw Ug(i,...e)}function Yn(i,...e){return Ug(i,...e)}function Lg(i,e,t){const r=Object.assign(Object.assign({},fx()),{[e]:t});return new gs("auth","Firebase",r).create(e,{appName:i.name})}function ra(i){return Lg(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mx(i,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ti(i,"argument-error"),Lg(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ug(i,...e){if(typeof i!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(t,...r)}return b1.create(i,...e)}function Ae(i,e,...t){if(!i)throw Ug(e,...t)}function Zi(i){const e="INTERNAL ASSERTION FAILED: "+i;throw xh(e),new Error(e)}function sr(i,e){i||Zi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function px(){return NE()==="http:"||NE()==="https:"}function NE(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(px()||c1()||"connection"in navigator)?navigator.onLine:!0}function yx(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lu=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,sr(t>e,"Short delay should be less than long delay!"),this.isMobile=l1()||h1()}get(){return gx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(i,e){sr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let T1=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ex=new Lu(3e4,6e4);function zg(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Bo(i,e,t,r,a={}){return A1(i,a,async()=>{let l={},c={};r&&(e==="GET"?c=r:l={body:JSON.stringify(r)});const m=hr(Object.assign({key:i.config.apiKey},c)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},l);return u1()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&jo(i.emulatorConfig.host)&&(g.credentials="include"),T1.fetch()(await S1(i,i.config.apiHost,t,m),g)})}async function A1(i,e,t){i._canInitEmulator=!1;const r=Object.assign(Object.assign({},vx),e);try{const a=new Tx(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Eh(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const m=l.ok?c.errorMessage:c.error.message,[p,g]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eh(i,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Eh(i,"email-already-in-use",c);if(p==="USER_DISABLED")throw Eh(i,"user-disabled",c);const _=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Lg(i,_,g);Ti(i,_)}}catch(a){if(a instanceof jn)throw a;Ti(i,"network-request-failed",{message:String(a)})}}async function bx(i,e,t,r,a={}){const l=await Bo(i,e,t,r,a);return"mfaPendingCredential"in l&&Ti(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function S1(i,e,t,r){const a=`${e}${t}?${r}`,l=i,c=l.config.emulator?jg(i.config,a):`${i.config.apiScheme}://${a}`;return _x.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}let Tx=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Yn(this.auth,"network-request-failed")),Ex.get())})}};function Eh(i,e,t){const r={appName:i.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const a=Yn(i,e,r);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ax(i,e){return Bo(i,"POST","/v1/accounts:delete",e)}async function Yh(i,e){return Bo(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sx(i,e=!1){const t=Qt(i),r=await t.getIdToken(e),a=Bg(r);Ae(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:r,authTime:hu(up(a.auth_time)),issuedAtTime:hu(up(a.iat)),expirationTime:hu(up(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function up(i){return Number(i)*1e3}function Bg(i){const[e,t,r]=i.split(".");if(e===void 0||t===void 0||r===void 0)return xh("JWT malformed, contained fewer than 3 sections"),null;try{const a=kg(t);return a?JSON.parse(a):(xh("Failed to decode base64 JWT payload"),null)}catch(a){return xh("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function OE(i){const e=Bg(i);return Ae(e,"internal-error"),Ae(typeof e.exp<"u","internal-error"),Ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wu(i,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof jn&&wx(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function wx({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ix=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vp=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=hu(this.lastLoginAt),this.creationTime=hu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
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
 */async function Qh(i){var e;const t=i.auth,r=await i.getIdToken(),a=await wu(i,Yh(t,{idToken:r}));Ae(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];i._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?w1(l.providerUserInfo):[],m=Cx(i.providerData,c),p=i.isAnonymous,g=!(i.email&&l.passwordHash)&&!(m!=null&&m.length),_=p?g:!1,b={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:m,metadata:new Vp(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(i,b)}async function Rx(i){const e=Qt(i);await Qh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Cx(i,e){return[...i.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function w1(i){return i.map(e=>{var{providerId:t}=e,r=zo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xx(i,e){const t=await A1(i,{},async()=>{const r=hr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,c=await S1(i,a,"/v1/token",`key=${l}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",T1.fetch()(c,{method:"POST",headers:m,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Nx(i,e){return Bo(i,"POST","/v2/accounts:revokeToken",zg(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cp=class Lp{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ae(e.idToken,"internal-error"),Ae(typeof e.idToken<"u","internal-error"),Ae(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):OE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ae(e.length!==0,"internal-error");const t=OE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:a,expiresIn:l}=await xx(e,t);this.updateTokensAndExpiration(r,a,Number(l))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:a,expirationTime:l}=t,c=new Lp;return r&&(Ae(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),a&&(Ae(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Ae(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lp,this.toJSON())}_performRefresh(){return Zi("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(i,e){Ae(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}let _o=class ru{constructor(e){var{uid:t,auth:r,stsTokenManager:a}=e,l=zo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ix(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Vp(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await wu(this,this.stsTokenManager.getToken(this.auth,e));return Ae(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Sx(this,e)}reload(){return Rx(this)}_assign(e){this!==e&&(Ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ru(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Qh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(ra(this.auth));const e=await this.getIdToken();return await wu(this,Ax(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,a,l,c,m,p,g,_;const b=(r=t.displayName)!==null&&r!==void 0?r:void 0,S=(a=t.email)!==null&&a!==void 0?a:void 0,j=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,G=(c=t.photoURL)!==null&&c!==void 0?c:void 0,Q=(m=t.tenantId)!==null&&m!==void 0?m:void 0,F=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,ee=(g=t.createdAt)!==null&&g!==void 0?g:void 0,ie=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:ne,emailVerified:fe,isAnonymous:ce,providerData:Ce,stsTokenManager:D}=t;Ae(ne&&D,e,"internal-error");const w=cp.fromJSON(this.name,D);Ae(typeof ne=="string",e,"internal-error"),Fr(b,e.name),Fr(S,e.name),Ae(typeof fe=="boolean",e,"internal-error"),Ae(typeof ce=="boolean",e,"internal-error"),Fr(j,e.name),Fr(G,e.name),Fr(Q,e.name),Fr(F,e.name),Fr(ee,e.name),Fr(ie,e.name);const C=new ru({uid:ne,auth:e,email:S,emailVerified:fe,displayName:b,isAnonymous:ce,photoURL:G,phoneNumber:j,tenantId:Q,stsTokenManager:w,createdAt:ee,lastLoginAt:ie});return Ce&&Array.isArray(Ce)&&(C.providerData=Ce.map(P=>Object.assign({},P))),F&&(C._redirectEventId=F),C}static async _fromIdTokenResponse(e,t,r=!1){const a=new cp;a.updateFromServerResponse(t);const l=new ru({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await Qh(l),l}static async _fromGetAccountInfoResponse(e,t,r){const a=t.users[0];Ae(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?w1(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),m=new cp;m.updateFromIdToken(r);const p=new ru({uid:a.localId,auth:e,stsTokenManager:m,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Vp(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=new Map;function er(i){sr(i instanceof Function,"Expected a class definition");let e=DE.get(i);return e?(sr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,DE.set(i,e),e)}/**
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
 */let I1=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};I1.type="NONE";const PE=I1;/**
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
 */function Nh(i,e,t){return`firebase:${i}:${e}:${t}`}let kE=class Oh{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:a,name:l}=this.auth;this.fullUserKey=Nh(this.userKey,a.apiKey,l),this.fullPersistenceKey=Nh("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Yh(this.auth,{idToken:e}).catch(()=>{});return t?_o._fromGetAccountInfoResponse(this.auth,t,e):null}return _o._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Oh(er(PE),e,r);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||er(PE);const c=Nh(r,e.config.apiKey,e.name);let m=null;for(const g of t)try{const _=await g._get(c);if(_){let b;if(typeof _=="string"){const S=await Yh(e,{idToken:_}).catch(()=>{});if(!S)break;b=await _o._fromGetAccountInfoResponse(e,S,_)}else b=_o._fromJSON(e,_);g!==l&&(m=b),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Oh(l,e,r):(l=p[0],m&&await l._set(c,m.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Oh(l,e,r))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(N1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(R1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(D1(e))return"Blackberry";if(P1(e))return"Webos";if(C1(e))return"Safari";if((e.includes("chrome/")||x1(e))&&!e.includes("edge/"))return"Chrome";if(O1(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function R1(i=tt()){return/firefox\//i.test(i)}function C1(i=tt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function x1(i=tt()){return/crios\//i.test(i)}function N1(i=tt()){return/iemobile/i.test(i)}function O1(i=tt()){return/android/i.test(i)}function D1(i=tt()){return/blackberry/i.test(i)}function P1(i=tt()){return/webos/i.test(i)}function Fg(i=tt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Ox(i=tt()){var e;return Fg(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Dx(){return f1()&&document.documentMode===10}function k1(i=tt()){return Fg(i)||O1(i)||P1(i)||D1(i)||/windows phone/i.test(i)||N1(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(i,e=[]){let t;switch(i){case"Browser":t=ME(tt());break;case"Worker":t=`${ME(tt())}-${i}`;break;default:t=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ii}/${r}`}/**
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
 */let Px=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=l=>new Promise((c,m)=>{try{const p=e(l);c(p)}catch(p){m(p)}});r.onAbort=t,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}};/**
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
 */async function kx(i,e={}){return Bo(i,"GET","/v2/passwordPolicy",zg(i,e))}/**
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
 */const Mx=6;let Vx=class{constructor(e){var t,r,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:Mx,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,a,l,c,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(r=p.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lx=class{constructor(e,t,r,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new VE(this),this.idTokenSubscription=new VE(this),this.beforeStateQueue=new Px(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=b1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=er(t)),this._initializationPromise=this.queue(async()=>{var r,a,l;if(!this._deleted&&(this.persistenceManager=await kE.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Yh(this,{idToken:e}),r=await _o._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(wt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(m,m))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===m)&&(p!=null&&p.user)&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject(ra(this));const t=e?Qt(e):null;return t&&Ae(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(ra(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject(ra(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kx(this),t=new Vx(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new gs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Nx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&er(e)||this._popupRedirectResolver;Ae(t,this,"argument-error"),this.redirectPersistenceManager=await kE.create(this,[er(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ae(m,this,"internal-error"),m.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,r,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=M1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&dx(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}};function If(i){return Qt(i)}let VE=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=m1(t=>this.observer=t)}get next(){return Ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qg={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ux(i){qg=i}function jx(i){return qg.loadJS(i)}function zx(){return qg.gapiScript}function Bx(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fx(i,e){const t=Vu(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(ns(l,e??{}))return a;Ti(a,"already-initialized")}return t.initialize({options:e})}function qx(i,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(er);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Hx(i,e,t){const r=If(i);Ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const a=!1,l=V1(e),{host:c,port:m}=Gx(e),p=m===null?"":`:${m}`,g={url:`${l}//${c}${p}/`},_=Object.freeze({host:c,port:m,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!r._canInitEmulator){Ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Ae(ns(g,r.config.emulator)&&ns(_,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=_,r.settings.appVerificationDisabledForTesting=!0,jo(c)?(Sf("Auth",!0),o1(`${l}//${c}${p}`)):$x()}function V1(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function Gx(i){const e=V1(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const l=a[1];return{host:l,port:LE(r.substr(l.length+1))}}else{const[l,c]=r.split(":");return{host:l,port:LE(c)}}}function LE(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function $x(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let L1=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Zi("not implemented")}_getIdTokenResponse(e){return Zi("not implemented")}_linkToIdToken(e,t){return Zi("not implemented")}_getReauthenticationResolver(e){return Zi("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(i,e){return bx(i,"POST","/v1/accounts:signInWithIdp",zg(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx="http://localhost";let Rf=class Up extends L1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Up(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ti("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=t,l=zo(t,["providerId","signInMethod"]);if(!r||!a)return null;const c=new Up(r,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return To(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,To(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,To(e,t)}buildRequest(){const e={requestUri:Kx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=hr(t)}return e}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hg=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};/**
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
 */let Uu=class extends Hg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let U1=class co extends Uu{constructor(){super("facebook.com")}static credential(e){return Rf._fromParams({providerId:co.PROVIDER_ID,signInMethod:co.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return co.credentialFromTaggedObject(e)}static credentialFromError(e){return co.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return co.credential(e.oauthAccessToken)}catch{return null}}};U1.FACEBOOK_SIGN_IN_METHOD="facebook.com";U1.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gg=class ho extends Uu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Rf._fromParams({providerId:ho.PROVIDER_ID,signInMethod:ho.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ho.credentialFromTaggedObject(e)}static credentialFromError(e){return ho.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ho.credential(t,r)}catch{return null}}};Gg.GOOGLE_SIGN_IN_METHOD="google.com";Gg.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let j1=class fo extends Uu{constructor(){super("github.com")}static credential(e){return Rf._fromParams({providerId:fo.PROVIDER_ID,signInMethod:fo.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fo.credentialFromTaggedObject(e)}static credentialFromError(e){return fo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fo.credential(e.oauthAccessToken)}catch{return null}}};j1.GITHUB_SIGN_IN_METHOD="github.com";j1.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let z1=class mo extends Uu{constructor(){super("twitter.com")}static credential(e,t){return Rf._fromParams({providerId:mo.PROVIDER_ID,signInMethod:mo.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mo.credentialFromTaggedObject(e)}static credentialFromError(e){return mo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return mo.credential(t,r)}catch{return null}}};z1.TWITTER_SIGN_IN_METHOD="twitter.com";z1.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $g=class jp{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,a=!1){const l=await _o._fromIdTokenResponse(e,r,a),c=UE(r);return new jp({user:l,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const a=UE(r);return new jp({user:e,providerId:a,_tokenResponse:r,operationType:t})}};function UE(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yx=class zp extends jn{constructor(e,t,r,a){var l;super(t.code,t.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,zp.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,a){return new zp(e,t,r,a)}};function B1(i,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Yx._fromErrorAndOperation(i,l,e,r):l})}async function Qx(i,e,t=!1){const r=await wu(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return $g._forOperation(i,"link",r)}/**
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
 */async function Xx(i,e,t=!1){const{auth:r}=i;if(wt(r.app))return Promise.reject(ra(r));const a="reauthenticate";try{const l=await wu(i,B1(r,a,e,i),t);Ae(l.idToken,r,"internal-error");const c=Bg(l.idToken);Ae(c,r,"internal-error");const{sub:m}=c;return Ae(i.uid===m,r,"user-mismatch"),$g._forOperation(i,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Ti(r,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wx(i,e,t=!1){if(wt(i.app))return Promise.reject(ra(i));const r="signIn",a=await B1(i,r,e),l=await $g._fromIdTokenResponse(i,r,a);return t||await i._updateCurrentUser(l.user),l}function Jx(i,e,t,r){return Qt(i).onIdTokenChanged(e,t,r)}function Zx(i,e,t){return Qt(i).beforeAuthStateChanged(e,t)}function F1(i,e,t,r){return Qt(i).onAuthStateChanged(e,t,r)}function eN(i){return Qt(i).signOut()}const Xh="__sak";/**
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
 */let q1=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Xh,"1"),this.storage.removeItem(Xh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN=1e3,nN=10;let H1=class extends q1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=k1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),a=this.localCache[t];r!==a&&e(t,a,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,m,p)=>{this.notifyListeners(c,p)});return}const r=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},l=this.storage.getItem(r);Dx()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,nN):a()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},tN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};H1.type="LOCAL";const iN=H1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G1=class extends q1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};G1.type="SESSION";const $1=G1;/**
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
 */function rN(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */let K1=class Y1{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const r=new Y1(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const m=Array.from(c).map(async g=>g(t.origin,l)),p=await rN(m);t.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};K1.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(i="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */let sN=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((m,p)=>{const g=Kg("",20);a.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},r);c={messageChannel:a,onMessage(b){const S=b;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(_),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),m(S.data.response);break;default:clearTimeout(_),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(){return window}function aN(i){vi().location.href=i}/**
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
 */function Q1(){return typeof vi().WorkerGlobalScope<"u"&&typeof vi().importScripts=="function"}async function oN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lN(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function uN(){return Q1()?self:null}/**
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
 */const X1="firebaseLocalStorageDb",cN=1,Wh="firebaseLocalStorage",W1="fbase_key";let ju=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function Cf(i,e){return i.transaction([Wh],e?"readwrite":"readonly").objectStore(Wh)}function hN(){const i=indexedDB.deleteDatabase(X1);return new ju(i).toPromise()}function Bp(){const i=indexedDB.open(X1,cN);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(Wh,{keyPath:W1})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(Wh)?e(r):(r.close(),await hN(),e(await Bp()))})})}async function jE(i,e,t){const r=Cf(i,!0).put({[W1]:e,value:t});return new ju(r).toPromise()}async function fN(i,e){const t=Cf(i,!1).get(e),r=await new ju(t).toPromise();return r===void 0?null:r.value}function zE(i,e){const t=Cf(i,!0).delete(e);return new ju(t).toPromise()}const dN=800,mN=3;let J1=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>mN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Q1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=K1._getInstance(uN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await oN(),!this.activeServiceWorker)return;this.sender=new sN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bp();return await jE(e,Xh,"1"),await zE(e,Xh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>jE(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>fN(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Cf(a,!1).getAll();return new ju(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};J1.type="LOCAL";const pN=J1;new Lu(3e4,6e4);/**
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
 */function Z1(i,e){return e?er(e):(Ae(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */let Yg=class extends L1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return To(e,this._buildIdpRequest())}_linkToIdToken(e,t){return To(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return To(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function gN(i){return Wx(i.auth,new Yg(i),i.bypassAuthState)}function yN(i){const{auth:e,user:t}=i;return Ae(t,e,"internal-error"),Xx(t,new Yg(i),i.bypassAuthState)}async function vN(i){const{auth:e,user:t}=i;return Ae(t,e,"internal-error"),Qx(t,new Yg(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eA=class{constructor(e,t,r,a,l=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:a,tenantId:l,error:c,type:m}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:r,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gN;case"linkViaPopup":case"linkViaRedirect":return vN;case"reauthViaPopup":case"reauthViaRedirect":return yN;default:Ti(this.auth,"internal-error")}}resolve(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N=new Lu(2e3,1e4);async function EN(i,e,t){if(wt(i.app))return Promise.reject(Yn(i,"operation-not-supported-in-this-environment"));const r=If(i);mx(i,e,Hg);const a=Z1(r,t);return new ta(r,"signInViaPopup",e,a).executeNotNull()}class ta extends eA{constructor(e,t,r,a,l){super(e,t,a,l),this.provider=r,this.authWindow=null,this.pollId=null,ta.currentPopupAction&&ta.currentPopupAction.cancel(),ta.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ae(e,this.auth,"internal-error"),e}async onExecution(){sr(this.filter.length===1,"Popup operations only handle one event");const e=Kg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ta.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_N.get())};e()}}ta.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN="pendingRedirect",Dh=new Map;let TN=class extends eA{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Dh.get(this.auth._key());if(!e){try{const r=await AN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Dh.set(this.auth._key(),e)}return this.bypassAuthState||Dh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function AN(i,e){const t=IN(e),r=wN(i);if(!await r._isAvailable())return!1;const a=await r._get(t)==="true";return await r._remove(t),a}function SN(i,e){Dh.set(i._key(),e)}function wN(i){return er(i._redirectPersistence)}function IN(i){return Nh(bN,i.config.apiKey,i.name)}async function RN(i,e,t=!1){if(wt(i.app))return Promise.reject(ra(i));const r=If(i),a=Z1(r,e),c=await new TN(r,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN=10*60*1e3;let xN=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NN(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!tA(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Yn(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CN&&this.cachedEventUids.clear(),this.cachedEventUids.has(BE(e))}saveEventToCache(e){this.cachedEventUids.add(BE(e)),this.lastProcessedEventTime=Date.now()}};function BE(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function tA({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NN(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tA(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ON(i,e={}){return Bo(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PN=/^https?/;async function kN(i){if(i.config.emulator)return;const{authorizedDomains:e}=await ON(i);for(const t of e)try{if(MN(t))return}catch{}Ti(i,"unauthorized-domain")}function MN(i){const e=Mp(),{protocol:t,hostname:r}=new URL(e);if(i.startsWith("chrome-extension://")){const c=new URL(i);return c.hostname===""&&r===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===r}if(!PN.test(t))return!1;if(DN.test(i))return r===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}/**
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
 */const VN=new Lu(3e4,6e4);function FE(){const i=vi().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function LN(i){return new Promise((e,t)=>{var r,a,l;function c(){FE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{FE(),t(Yn(i,"network-request-failed"))},timeout:VN.get()})}if(!((a=(r=vi().gapi)===null||r===void 0?void 0:r.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=vi().gapi)===null||l===void 0)&&l.load)c();else{const m=Bx("iframefcb");return vi()[m]=()=>{gapi.load?c():t(Yn(i,"network-request-failed"))},jx(`${zx()}?onload=${m}`).catch(p=>t(p))}}).catch(e=>{throw Ph=null,e})}let Ph=null;function UN(i){return Ph=Ph||LN(i),Ph}/**
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
 */const jN=new Lu(5e3,15e3),zN="__/auth/iframe",BN="emulator/auth/iframe",FN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HN(i){const e=i.config;Ae(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?jg(e,BN):`https://${i.config.authDomain}/${zN}`,r={apiKey:e.apiKey,appName:i.name,v:Ii},a=qN.get(i.config.apiHost);a&&(r.eid=a);const l=i._getFrameworks();return l.length&&(r.fw=l.join(",")),`${t}?${hr(r).slice(1)}`}async function GN(i){const e=await UN(i),t=vi().gapi;return Ae(t,i,"internal-error"),e.open({where:document.body,url:HN(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FN,dontclear:!0},r=>new Promise(async(a,l)=>{await r.restyle({setHideOnLeave:!1});const c=Yn(i,"network-request-failed"),m=vi().setTimeout(()=>{l(c)},jN.get());function p(){vi().clearTimeout(m),a(r)}r.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const $N={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KN=500,YN=600,QN="_blank",XN="http://localhost";class qE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WN(i,e,t,r=KN,a=YN){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let m="";const p=Object.assign(Object.assign({},$N),{width:r.toString(),height:a.toString(),top:l,left:c}),g=tt().toLowerCase();t&&(m=x1(g)?QN:t),R1(g)&&(e=e||XN,p.scrollbars="yes");const _=Object.entries(p).reduce((S,[j,G])=>`${S}${j}=${G},`,"");if(Ox(g)&&m!=="_self")return JN(e||"",m),new qE(null);const b=window.open(e||"",m,_);Ae(b,i,"popup-blocked");try{b.focus()}catch{}return new qE(b)}function JN(i,e){const t=document.createElement("a");t.href=i,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const ZN="__/auth/handler",eO="emulator/auth/handler",tO=encodeURIComponent("fac");async function HE(i,e,t,r,a,l){Ae(i.config.authDomain,i,"auth-domain-config-required"),Ae(i.config.apiKey,i,"invalid-api-key");const c={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:r,v:Ii,eventId:a};if(e instanceof Hg){e.setDefaultLanguage(i.languageCode),c.providerId=e.providerId||"",d1(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,b]of Object.entries({}))c[_]=b}if(e instanceof Uu){const _=e.getScopes().filter(b=>b!=="");_.length>0&&(c.scopes=_.join(","))}i.tenantId&&(c.tid=i.tenantId);const m=c;for(const _ of Object.keys(m))m[_]===void 0&&delete m[_];const p=await i._getAppCheckToken(),g=p?`#${tO}=${encodeURIComponent(p)}`:"";return`${nO(i)}?${hr(m).slice(1)}${g}`}function nO({config:i}){return i.emulator?jg(i,eO):`https://${i.authDomain}/${ZN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp="webStorageSupport";class iO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$1,this._completeRedirectFn=RN,this._overrideRedirectResult=SN}async _openPopup(e,t,r,a){var l;sr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await HE(e,t,r,Mp(),a);return WN(e,c,Kg())}async _openRedirect(e,t,r,a){await this._originValidation(e);const l=await HE(e,t,r,Mp(),a);return aN(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(sr(l,"If manager is not set, promise should be"),l)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await GN(e),r=new xN(e);return t.register("authEvent",a=>(Ae(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:r.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(hp,{type:hp},a=>{var l;const c=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[hp];c!==void 0&&t(!!c),Ti(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kN(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return k1()||C1()||Fg()}}const rO=iO;var GE="@firebase/auth",$E="1.10.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sO=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aO(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oO(i){is(new ir("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:m}=r.options;Ae(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:c,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:M1(i)},g=new Lx(r,a,l,p);return qx(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),is(new ir("auth-internal",e=>{const t=If(e.getProvider("auth").getImmediate());return(r=>new sO(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yi(GE,$E,aO(i)),yi(GE,$E,"esm2017")}/**
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
 */const lO=5*60,uO=a1("authIdTokenMaxAge")||lO;let KE=null;const cO=i=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>uO)return;const a=t==null?void 0:t.token;KE!==a&&(KE=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function Qg(i=Vg()){const e=Vu(i,"auth");if(e.isInitialized())return e.getImmediate();const t=Fx(i,{popupRedirectResolver:rO,persistence:[pN,iN,$1]}),r=a1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(r,location.origin);if(location.origin===l.origin){const c=cO(l.toString());Zx(t,c,()=>c(t.currentUser)),Jx(t,m=>c(m))}}const a=r1("auth");return a?Hx(t,`http://${a}`):Sf("Auth",!1),t}function hO(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}Ux({loadJS(i){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=e,r.onerror=a=>{const l=Yn("internal-error");l.customData=a,t(l)},r.type="text/javascript",r.charset="UTF-8",hO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oO("Browser");var fO="firebase",dO="11.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yi(fO,dO,"app");const mO={apiKey:"AIzaSyBu90rcUqw574sLzB_Ka-IRUlTGWo0sjBk",authDomain:"proyectouno-d09e0.firebaseapp.com",databaseURL:"https://proyectouno-d09e0-default-rtdb.firebaseio.com",projectId:"proyectouno-d09e0",storageBucket:"proyectouno-d09e0.firebasestorage.app",messagingSenderId:"567007730982",appId:"1:567007730982:web:cde41dd58a20780201f5e7",measurementId:"G-BJTNZ2M8DH"},fa=y1(mO);var YE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var es,nA;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,w){function C(){}C.prototype=w.prototype,D.D=w.prototype,D.prototype=new C,D.prototype.constructor=D,D.C=function(P,k,V){for(var x=Array(arguments.length-2),Bt=2;Bt<arguments.length;Bt++)x[Bt-2]=arguments[Bt];return w.prototype[k].apply(P,x)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(D,w,C){C||(C=0);var P=Array(16);if(typeof w=="string")for(var k=0;16>k;++k)P[k]=w.charCodeAt(C++)|w.charCodeAt(C++)<<8|w.charCodeAt(C++)<<16|w.charCodeAt(C++)<<24;else for(k=0;16>k;++k)P[k]=w[C++]|w[C++]<<8|w[C++]<<16|w[C++]<<24;w=D.g[0],C=D.g[1],k=D.g[2];var V=D.g[3],x=w+(V^C&(k^V))+P[0]+3614090360&4294967295;w=C+(x<<7&4294967295|x>>>25),x=V+(k^w&(C^k))+P[1]+3905402710&4294967295,V=w+(x<<12&4294967295|x>>>20),x=k+(C^V&(w^C))+P[2]+606105819&4294967295,k=V+(x<<17&4294967295|x>>>15),x=C+(w^k&(V^w))+P[3]+3250441966&4294967295,C=k+(x<<22&4294967295|x>>>10),x=w+(V^C&(k^V))+P[4]+4118548399&4294967295,w=C+(x<<7&4294967295|x>>>25),x=V+(k^w&(C^k))+P[5]+1200080426&4294967295,V=w+(x<<12&4294967295|x>>>20),x=k+(C^V&(w^C))+P[6]+2821735955&4294967295,k=V+(x<<17&4294967295|x>>>15),x=C+(w^k&(V^w))+P[7]+4249261313&4294967295,C=k+(x<<22&4294967295|x>>>10),x=w+(V^C&(k^V))+P[8]+1770035416&4294967295,w=C+(x<<7&4294967295|x>>>25),x=V+(k^w&(C^k))+P[9]+2336552879&4294967295,V=w+(x<<12&4294967295|x>>>20),x=k+(C^V&(w^C))+P[10]+4294925233&4294967295,k=V+(x<<17&4294967295|x>>>15),x=C+(w^k&(V^w))+P[11]+2304563134&4294967295,C=k+(x<<22&4294967295|x>>>10),x=w+(V^C&(k^V))+P[12]+1804603682&4294967295,w=C+(x<<7&4294967295|x>>>25),x=V+(k^w&(C^k))+P[13]+4254626195&4294967295,V=w+(x<<12&4294967295|x>>>20),x=k+(C^V&(w^C))+P[14]+2792965006&4294967295,k=V+(x<<17&4294967295|x>>>15),x=C+(w^k&(V^w))+P[15]+1236535329&4294967295,C=k+(x<<22&4294967295|x>>>10),x=w+(k^V&(C^k))+P[1]+4129170786&4294967295,w=C+(x<<5&4294967295|x>>>27),x=V+(C^k&(w^C))+P[6]+3225465664&4294967295,V=w+(x<<9&4294967295|x>>>23),x=k+(w^C&(V^w))+P[11]+643717713&4294967295,k=V+(x<<14&4294967295|x>>>18),x=C+(V^w&(k^V))+P[0]+3921069994&4294967295,C=k+(x<<20&4294967295|x>>>12),x=w+(k^V&(C^k))+P[5]+3593408605&4294967295,w=C+(x<<5&4294967295|x>>>27),x=V+(C^k&(w^C))+P[10]+38016083&4294967295,V=w+(x<<9&4294967295|x>>>23),x=k+(w^C&(V^w))+P[15]+3634488961&4294967295,k=V+(x<<14&4294967295|x>>>18),x=C+(V^w&(k^V))+P[4]+3889429448&4294967295,C=k+(x<<20&4294967295|x>>>12),x=w+(k^V&(C^k))+P[9]+568446438&4294967295,w=C+(x<<5&4294967295|x>>>27),x=V+(C^k&(w^C))+P[14]+3275163606&4294967295,V=w+(x<<9&4294967295|x>>>23),x=k+(w^C&(V^w))+P[3]+4107603335&4294967295,k=V+(x<<14&4294967295|x>>>18),x=C+(V^w&(k^V))+P[8]+1163531501&4294967295,C=k+(x<<20&4294967295|x>>>12),x=w+(k^V&(C^k))+P[13]+2850285829&4294967295,w=C+(x<<5&4294967295|x>>>27),x=V+(C^k&(w^C))+P[2]+4243563512&4294967295,V=w+(x<<9&4294967295|x>>>23),x=k+(w^C&(V^w))+P[7]+1735328473&4294967295,k=V+(x<<14&4294967295|x>>>18),x=C+(V^w&(k^V))+P[12]+2368359562&4294967295,C=k+(x<<20&4294967295|x>>>12),x=w+(C^k^V)+P[5]+4294588738&4294967295,w=C+(x<<4&4294967295|x>>>28),x=V+(w^C^k)+P[8]+2272392833&4294967295,V=w+(x<<11&4294967295|x>>>21),x=k+(V^w^C)+P[11]+1839030562&4294967295,k=V+(x<<16&4294967295|x>>>16),x=C+(k^V^w)+P[14]+4259657740&4294967295,C=k+(x<<23&4294967295|x>>>9),x=w+(C^k^V)+P[1]+2763975236&4294967295,w=C+(x<<4&4294967295|x>>>28),x=V+(w^C^k)+P[4]+1272893353&4294967295,V=w+(x<<11&4294967295|x>>>21),x=k+(V^w^C)+P[7]+4139469664&4294967295,k=V+(x<<16&4294967295|x>>>16),x=C+(k^V^w)+P[10]+3200236656&4294967295,C=k+(x<<23&4294967295|x>>>9),x=w+(C^k^V)+P[13]+681279174&4294967295,w=C+(x<<4&4294967295|x>>>28),x=V+(w^C^k)+P[0]+3936430074&4294967295,V=w+(x<<11&4294967295|x>>>21),x=k+(V^w^C)+P[3]+3572445317&4294967295,k=V+(x<<16&4294967295|x>>>16),x=C+(k^V^w)+P[6]+76029189&4294967295,C=k+(x<<23&4294967295|x>>>9),x=w+(C^k^V)+P[9]+3654602809&4294967295,w=C+(x<<4&4294967295|x>>>28),x=V+(w^C^k)+P[12]+3873151461&4294967295,V=w+(x<<11&4294967295|x>>>21),x=k+(V^w^C)+P[15]+530742520&4294967295,k=V+(x<<16&4294967295|x>>>16),x=C+(k^V^w)+P[2]+3299628645&4294967295,C=k+(x<<23&4294967295|x>>>9),x=w+(k^(C|~V))+P[0]+4096336452&4294967295,w=C+(x<<6&4294967295|x>>>26),x=V+(C^(w|~k))+P[7]+1126891415&4294967295,V=w+(x<<10&4294967295|x>>>22),x=k+(w^(V|~C))+P[14]+2878612391&4294967295,k=V+(x<<15&4294967295|x>>>17),x=C+(V^(k|~w))+P[5]+4237533241&4294967295,C=k+(x<<21&4294967295|x>>>11),x=w+(k^(C|~V))+P[12]+1700485571&4294967295,w=C+(x<<6&4294967295|x>>>26),x=V+(C^(w|~k))+P[3]+2399980690&4294967295,V=w+(x<<10&4294967295|x>>>22),x=k+(w^(V|~C))+P[10]+4293915773&4294967295,k=V+(x<<15&4294967295|x>>>17),x=C+(V^(k|~w))+P[1]+2240044497&4294967295,C=k+(x<<21&4294967295|x>>>11),x=w+(k^(C|~V))+P[8]+1873313359&4294967295,w=C+(x<<6&4294967295|x>>>26),x=V+(C^(w|~k))+P[15]+4264355552&4294967295,V=w+(x<<10&4294967295|x>>>22),x=k+(w^(V|~C))+P[6]+2734768916&4294967295,k=V+(x<<15&4294967295|x>>>17),x=C+(V^(k|~w))+P[13]+1309151649&4294967295,C=k+(x<<21&4294967295|x>>>11),x=w+(k^(C|~V))+P[4]+4149444226&4294967295,w=C+(x<<6&4294967295|x>>>26),x=V+(C^(w|~k))+P[11]+3174756917&4294967295,V=w+(x<<10&4294967295|x>>>22),x=k+(w^(V|~C))+P[2]+718787259&4294967295,k=V+(x<<15&4294967295|x>>>17),x=C+(V^(k|~w))+P[9]+3951481745&4294967295,D.g[0]=D.g[0]+w&4294967295,D.g[1]=D.g[1]+(k+(x<<21&4294967295|x>>>11))&4294967295,D.g[2]=D.g[2]+k&4294967295,D.g[3]=D.g[3]+V&4294967295}r.prototype.u=function(D,w){w===void 0&&(w=D.length);for(var C=w-this.blockSize,P=this.B,k=this.h,V=0;V<w;){if(k==0)for(;V<=C;)a(this,D,V),V+=this.blockSize;if(typeof D=="string"){for(;V<w;)if(P[k++]=D.charCodeAt(V++),k==this.blockSize){a(this,P),k=0;break}}else for(;V<w;)if(P[k++]=D[V++],k==this.blockSize){a(this,P),k=0;break}}this.h=k,this.o+=w},r.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var w=1;w<D.length-8;++w)D[w]=0;var C=8*this.o;for(w=D.length-8;w<D.length;++w)D[w]=C&255,C/=256;for(this.u(D),D=Array(16),w=C=0;4>w;++w)for(var P=0;32>P;P+=8)D[C++]=this.g[w]>>>P&255;return D};function l(D,w){var C=m;return Object.prototype.hasOwnProperty.call(C,D)?C[D]:C[D]=w(D)}function c(D,w){this.h=w;for(var C=[],P=!0,k=D.length-1;0<=k;k--){var V=D[k]|0;P&&V==w||(C[k]=V,P=!1)}this.g=C}var m={};function p(D){return-128<=D&&128>D?l(D,function(w){return new c([w|0],0>w?-1:0)}):new c([D|0],0>D?-1:0)}function g(D){if(isNaN(D)||!isFinite(D))return b;if(0>D)return F(g(-D));for(var w=[],C=1,P=0;D>=C;P++)w[P]=D/C|0,C*=4294967296;return new c(w,0)}function _(D,w){if(D.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(D.charAt(0)=="-")return F(_(D.substring(1),w));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=g(Math.pow(w,8)),P=b,k=0;k<D.length;k+=8){var V=Math.min(8,D.length-k),x=parseInt(D.substring(k,k+V),w);8>V?(V=g(Math.pow(w,V)),P=P.j(V).add(g(x))):(P=P.j(C),P=P.add(g(x)))}return P}var b=p(0),S=p(1),j=p(16777216);i=c.prototype,i.m=function(){if(Q(this))return-F(this).m();for(var D=0,w=1,C=0;C<this.g.length;C++){var P=this.i(C);D+=(0<=P?P:4294967296+P)*w,w*=4294967296}return D},i.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(G(this))return"0";if(Q(this))return"-"+F(this).toString(D);for(var w=g(Math.pow(D,6)),C=this,P="";;){var k=fe(C,w).g;C=ee(C,k.j(w));var V=((0<C.g.length?C.g[0]:C.h)>>>0).toString(D);if(C=k,G(C))return V+P;for(;6>V.length;)V="0"+V;P=V+P}},i.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function G(D){if(D.h!=0)return!1;for(var w=0;w<D.g.length;w++)if(D.g[w]!=0)return!1;return!0}function Q(D){return D.h==-1}i.l=function(D){return D=ee(this,D),Q(D)?-1:G(D)?0:1};function F(D){for(var w=D.g.length,C=[],P=0;P<w;P++)C[P]=~D.g[P];return new c(C,~D.h).add(S)}i.abs=function(){return Q(this)?F(this):this},i.add=function(D){for(var w=Math.max(this.g.length,D.g.length),C=[],P=0,k=0;k<=w;k++){var V=P+(this.i(k)&65535)+(D.i(k)&65535),x=(V>>>16)+(this.i(k)>>>16)+(D.i(k)>>>16);P=x>>>16,V&=65535,x&=65535,C[k]=x<<16|V}return new c(C,C[C.length-1]&-2147483648?-1:0)};function ee(D,w){return D.add(F(w))}i.j=function(D){if(G(this)||G(D))return b;if(Q(this))return Q(D)?F(this).j(F(D)):F(F(this).j(D));if(Q(D))return F(this.j(F(D)));if(0>this.l(j)&&0>D.l(j))return g(this.m()*D.m());for(var w=this.g.length+D.g.length,C=[],P=0;P<2*w;P++)C[P]=0;for(P=0;P<this.g.length;P++)for(var k=0;k<D.g.length;k++){var V=this.i(P)>>>16,x=this.i(P)&65535,Bt=D.i(k)>>>16,ht=D.i(k)&65535;C[2*P+2*k]+=x*ht,ie(C,2*P+2*k),C[2*P+2*k+1]+=V*ht,ie(C,2*P+2*k+1),C[2*P+2*k+1]+=x*Bt,ie(C,2*P+2*k+1),C[2*P+2*k+2]+=V*Bt,ie(C,2*P+2*k+2)}for(P=0;P<w;P++)C[P]=C[2*P+1]<<16|C[2*P];for(P=w;P<2*w;P++)C[P]=0;return new c(C,0)};function ie(D,w){for(;(D[w]&65535)!=D[w];)D[w+1]+=D[w]>>>16,D[w]&=65535,w++}function ne(D,w){this.g=D,this.h=w}function fe(D,w){if(G(w))throw Error("division by zero");if(G(D))return new ne(b,b);if(Q(D))return w=fe(F(D),w),new ne(F(w.g),F(w.h));if(Q(w))return w=fe(D,F(w)),new ne(F(w.g),w.h);if(30<D.g.length){if(Q(D)||Q(w))throw Error("slowDivide_ only works with positive integers.");for(var C=S,P=w;0>=P.l(D);)C=ce(C),P=ce(P);var k=Ce(C,1),V=Ce(P,1);for(P=Ce(P,2),C=Ce(C,2);!G(P);){var x=V.add(P);0>=x.l(D)&&(k=k.add(C),V=x),P=Ce(P,1),C=Ce(C,1)}return w=ee(D,k.j(w)),new ne(k,w)}for(k=b;0<=D.l(w);){for(C=Math.max(1,Math.floor(D.m()/w.m())),P=Math.ceil(Math.log(C)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),V=g(C),x=V.j(w);Q(x)||0<x.l(D);)C-=P,V=g(C),x=V.j(w);G(V)&&(V=S),k=k.add(V),D=ee(D,x)}return new ne(k,D)}i.A=function(D){return fe(this,D).h},i.and=function(D){for(var w=Math.max(this.g.length,D.g.length),C=[],P=0;P<w;P++)C[P]=this.i(P)&D.i(P);return new c(C,this.h&D.h)},i.or=function(D){for(var w=Math.max(this.g.length,D.g.length),C=[],P=0;P<w;P++)C[P]=this.i(P)|D.i(P);return new c(C,this.h|D.h)},i.xor=function(D){for(var w=Math.max(this.g.length,D.g.length),C=[],P=0;P<w;P++)C[P]=this.i(P)^D.i(P);return new c(C,this.h^D.h)};function ce(D){for(var w=D.g.length+1,C=[],P=0;P<w;P++)C[P]=D.i(P)<<1|D.i(P-1)>>>31;return new c(C,D.h)}function Ce(D,w){var C=w>>5;w%=32;for(var P=D.g.length-C,k=[],V=0;V<P;V++)k[V]=0<w?D.i(V+C)>>>w|D.i(V+C+1)<<32-w:D.i(V+C);return new c(k,D.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,nA=r,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=_,es=c}).apply(typeof YE<"u"?YE:typeof self<"u"?self:typeof window<"u"?window:{});var bh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var iA,su,rA,kh,Fp,sA,aA,oA;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,y,v){return h==Array.prototype||h==Object.prototype||(h[y]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof bh=="object"&&bh];for(var y=0;y<h.length;++y){var v=h[y];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=t(this);function a(h,y){if(y)e:{var v=r;h=h.split(".");for(var A=0;A<h.length-1;A++){var L=h[A];if(!(L in v))break e;v=v[L]}h=h[h.length-1],A=v[h],y=y(A),y!=A&&y!=null&&e(v,h,{configurable:!0,writable:!0,value:y})}}function l(h,y){h instanceof String&&(h+="");var v=0,A=!1,L={next:function(){if(!A&&v<h.length){var H=v++;return{value:y(H,h[H]),done:!1}}return A=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}a("Array.prototype.values",function(h){return h||function(){return l(this,function(y,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},m=this||self;function p(h){var y=typeof h;return y=y!="object"?y:h?Array.isArray(h)?"array":y:"null",y=="array"||y=="object"&&typeof h.length=="number"}function g(h){var y=typeof h;return y=="object"&&h!=null||y=="function"}function _(h,y,v){return h.call.apply(h.bind,arguments)}function b(h,y,v){if(!h)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,A),h.apply(y,L)}}return function(){return h.apply(y,arguments)}}function S(h,y,v){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:b,S.apply(null,arguments)}function j(h,y){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),h.apply(this,A)}}function G(h,y){function v(){}v.prototype=y.prototype,h.aa=y.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(A,L,H){for(var ae=Array(arguments.length-2),je=2;je<arguments.length;je++)ae[je-2]=arguments[je];return y.prototype[L].apply(A,ae)}}function Q(h){const y=h.length;if(0<y){const v=Array(y);for(let A=0;A<y;A++)v[A]=h[A];return v}return[]}function F(h,y){for(let v=1;v<arguments.length;v++){const A=arguments[v];if(p(A)){const L=h.length||0,H=A.length||0;h.length=L+H;for(let ae=0;ae<H;ae++)h[L+ae]=A[ae]}else h.push(A)}}class ee{constructor(y,v){this.i=y,this.j=v,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function ie(h){return/^[\s\xa0]*$/.test(h)}function ne(){var h=m.navigator;return h&&(h=h.userAgent)?h:""}function fe(h){return fe[" "](h),h}fe[" "]=function(){};var ce=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function Ce(h,y,v){for(const A in h)y.call(v,h[A],A,h)}function D(h,y){for(const v in h)y.call(void 0,h[v],v,h)}function w(h){const y={};for(const v in h)y[v]=h[v];return y}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(h,y){let v,A;for(let L=1;L<arguments.length;L++){A=arguments[L];for(v in A)h[v]=A[v];for(let H=0;H<C.length;H++)v=C[H],Object.prototype.hasOwnProperty.call(A,v)&&(h[v]=A[v])}}function k(h){var y=1;h=h.split(":");const v=[];for(;0<y&&h.length;)v.push(h.shift()),y--;return h.length&&v.push(h.join(":")),v}function V(h){m.setTimeout(()=>{throw h},0)}function x(){var h=He;let y=null;return h.g&&(y=h.g,h.g=h.g.next,h.g||(h.h=null),y.next=null),y}class Bt{constructor(){this.h=this.g=null}add(y,v){const A=ht.get();A.set(y,v),this.h?this.h.next=A:this.g=A,this.h=A}}var ht=new ee(()=>new $,h=>h.reset());class ${constructor(){this.next=this.g=this.h=null}set(y,v){this.h=y,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,ge=!1,He=new Bt,N=()=>{const h=m.Promise.resolve(void 0);oe=()=>{h.then(J)}};var J=()=>{for(var h;h=x();){try{h.h.call(h.g)}catch(v){V(v)}var y=ht;y.j(h),100>y.h&&(y.h++,h.next=y.g,y.g=h)}ge=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function re(h,y){this.type=h,this.g=this.target=y,this.defaultPrevented=!1}re.prototype.h=function(){this.defaultPrevented=!0};var ye=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var h=!1,y=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};m.addEventListener("test",v,y),m.removeEventListener("test",v,y)}catch{}return h}();function De(h,y){if(re.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,A=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=y,y=h.relatedTarget){if(ce){e:{try{fe(y.nodeName);var L=!0;break e}catch{}L=!1}L||(y=null)}}else v=="mouseover"?y=h.fromElement:v=="mouseout"&&(y=h.toElement);this.relatedTarget=y,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Se[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&De.aa.h.call(this)}}G(De,re);var Se={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var kt="closure_listenable_"+(1e6*Math.random()|0),it=0;function Qn(h,y,v,A,L){this.listener=h,this.proxy=null,this.src=y,this.type=v,this.capture=!!A,this.ha=L,this.key=++it,this.da=this.fa=!1}function dr(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Ri(h){this.src=h,this.g={},this.h=0}Ri.prototype.add=function(h,y,v,A,L){var H=h.toString();h=this.g[H],h||(h=this.g[H]=[],this.h++);var ae=vs(h,y,A,L);return-1<ae?(y=h[ae],v||(y.fa=!1)):(y=new Qn(y,this.src,H,!!A,L),y.fa=v,h.push(y)),y};function ys(h,y){var v=y.type;if(v in h.g){var A=h.g[v],L=Array.prototype.indexOf.call(A,y,void 0),H;(H=0<=L)&&Array.prototype.splice.call(A,L,1),H&&(dr(y),h.g[v].length==0&&(delete h.g[v],h.h--))}}function vs(h,y,v,A){for(var L=0;L<h.length;++L){var H=h[L];if(!H.da&&H.listener==y&&H.capture==!!v&&H.ha==A)return L}return-1}var _s="closure_lm_"+(1e6*Math.random()|0),Yo={};function Xu(h,y,v,A,L){if(Array.isArray(y)){for(var H=0;H<y.length;H++)Xu(h,y[H],v,A,L);return null}return v=Wu(v),h&&h[kt]?h.K(y,v,g(A)?!!A.capture:!1,L):wn(h,y,v,!1,A,L)}function wn(h,y,v,A,L,H){if(!y)throw Error("Invalid event type");var ae=g(L)?!!L.capture:!!L,je=_a(h);if(je||(h[_s]=je=new Ri(h)),v=je.add(y,v,A,ae,H),v.proxy)return v;if(A=Wf(),v.proxy=A,A.src=h,A.listener=v,h.addEventListener)ye||(L=ae),L===void 0&&(L=!1),h.addEventListener(y.toString(),A,L);else if(h.attachEvent)h.attachEvent(Es(y.toString()),A);else if(h.addListener&&h.removeListener)h.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Wf(){function h(v){return y.call(h.src,h.listener,v)}const y=Jf;return h}function Qo(h,y,v,A,L){if(Array.isArray(y))for(var H=0;H<y.length;H++)Qo(h,y[H],v,A,L);else A=g(A)?!!A.capture:!!A,v=Wu(v),h&&h[kt]?(h=h.i,y=String(y).toString(),y in h.g&&(H=h.g[y],v=vs(H,v,A,L),-1<v&&(dr(H[v]),Array.prototype.splice.call(H,v,1),H.length==0&&(delete h.g[y],h.h--)))):h&&(h=_a(h))&&(y=h.g[y.toString()],h=-1,y&&(h=vs(y,v,A,L)),(v=-1<h?y[h]:null)&&va(v))}function va(h){if(typeof h!="number"&&h&&!h.da){var y=h.src;if(y&&y[kt])ys(y.i,h);else{var v=h.type,A=h.proxy;y.removeEventListener?y.removeEventListener(v,A,h.capture):y.detachEvent?y.detachEvent(Es(v),A):y.addListener&&y.removeListener&&y.removeListener(A),(v=_a(y))?(ys(v,h),v.h==0&&(v.src=null,y[_s]=null)):dr(h)}}}function Es(h){return h in Yo?Yo[h]:Yo[h]="on"+h}function Jf(h,y){if(h.da)h=!0;else{y=new De(y,this);var v=h.listener,A=h.ha||h.src;h.fa&&va(h),h=v.call(A,y)}return h}function _a(h){return h=h[_s],h instanceof Ri?h:null}var Xo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wu(h){return typeof h=="function"?h:(h[Xo]||(h[Xo]=function(y){return h.handleEvent(y)}),h[Xo])}function ft(){le.call(this),this.i=new Ri(this),this.M=this,this.F=null}G(ft,le),ft.prototype[kt]=!0,ft.prototype.removeEventListener=function(h,y,v,A){Qo(this,h,y,v,A)};function Ye(h,y){var v,A=h.F;if(A)for(v=[];A;A=A.F)v.push(A);if(h=h.M,A=y.type||y,typeof y=="string")y=new re(y,h);else if(y instanceof re)y.target=y.target||h;else{var L=y;y=new re(A,h),P(y,L)}if(L=!0,v)for(var H=v.length-1;0<=H;H--){var ae=y.g=v[H];L=mn(ae,A,!0,y)&&L}if(ae=y.g=h,L=mn(ae,A,!0,y)&&L,L=mn(ae,A,!1,y)&&L,v)for(H=0;H<v.length;H++)ae=y.g=v[H],L=mn(ae,A,!1,y)&&L}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var h=this.i,y;for(y in h.g){for(var v=h.g[y],A=0;A<v.length;A++)dr(v[A]);delete h.g[y],h.h--}}this.F=null},ft.prototype.K=function(h,y,v,A){return this.i.add(String(h),y,!1,v,A)},ft.prototype.L=function(h,y,v,A){return this.i.add(String(h),y,!0,v,A)};function mn(h,y,v,A){if(y=h.i.g[String(y)],!y)return!0;y=y.concat();for(var L=!0,H=0;H<y.length;++H){var ae=y[H];if(ae&&!ae.da&&ae.capture==v){var je=ae.listener,Ct=ae.ha||ae.src;ae.fa&&ys(h.i,ae),L=je.call(Ct,A)!==!1&&L}}return L&&!A.defaultPrevented}function Wt(h,y,v){if(typeof h=="function")v&&(h=S(h,v));else if(h&&typeof h.handleEvent=="function")h=S(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:m.setTimeout(h,y||0)}function Ju(h){h.g=Wt(()=>{h.g=null,h.i&&(h.i=!1,Ju(h))},h.l);const y=h.h;h.h=null,h.m.apply(null,y)}class Zf extends le{constructor(y,v){super(),this.m=y,this.l=v,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Ju(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bs(h){le.call(this),this.h=h,this.g={}}G(bs,le);var Ts=[];function As(h){Ce(h.g,function(y,v){this.g.hasOwnProperty(v)&&va(y)},h),h.g={}}bs.prototype.N=function(){bs.aa.N.call(this),As(this)},bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zn=m.JSON.stringify,Ea=m.JSON.parse,Ss=class{stringify(h){return m.JSON.stringify(h,void 0)}parse(h){return m.JSON.parse(h,void 0)}};function Wo(){}Wo.prototype.h=null;function Jo(h){return h.h||(h.h=h.i())}function Zo(){}var Ci={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xi(){re.call(this,"d")}G(xi,re);function el(){re.call(this,"c")}G(el,re);var Xn={},tl=null;function mr(){return tl=tl||new ft}Xn.La="serverreachability";function ba(h){re.call(this,Xn.La,h)}G(ba,re);function pr(h){const y=mr();Ye(y,new ba(y))}Xn.STAT_EVENT="statevent";function Zu(h,y){re.call(this,Xn.STAT_EVENT,h),this.stat=y}G(Zu,re);function at(h){const y=mr();Ye(y,new Zu(y,h))}Xn.Ma="timingevent";function Rt(h,y){re.call(this,Xn.Ma,h),this.size=y}G(Rt,re);function Et(h,y){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){h()},y)}function In(){this.g=!0}In.prototype.xa=function(){this.g=!1};function nl(h,y,v,A,L,H){h.info(function(){if(h.g)if(H)for(var ae="",je=H.split("&"),Ct=0;Ct<je.length;Ct++){var ze=je[Ct].split("=");if(1<ze.length){var Vt=ze[0];ze=ze[1];var xt=Vt.split("_");ae=2<=xt.length&&xt[1]=="type"?ae+(Vt+"="+ze+"&"):ae+(Vt+"=redacted&")}}else ae=null;else ae=H;return"XMLHTTP REQ ("+A+") [attempt "+L+"]: "+y+`
`+v+`
`+ae})}function ed(h,y,v,A,L,H,ae){h.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+L+"]: "+y+`
`+v+`
`+H+" "+ae})}function gr(h,y,v,A){h.info(function(){return"XMLHTTP TEXT ("+y+"): "+ws(h,v)+(A?" "+A:"")})}function ec(h,y){h.info(function(){return"TIMEOUT: "+y})}In.prototype.info=function(){};function ws(h,y){if(!h.g)return y;if(!y)return null;try{var v=JSON.parse(y);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var A=v[h];if(!(2>A.length)){var L=A[1];if(Array.isArray(L)&&!(1>L.length)){var H=L[0];if(H!="noop"&&H!="stop"&&H!="close")for(var ae=1;ae<L.length;ae++)L[ae]=""}}}}return zn(v)}catch{return y}}var yr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ni={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wn;function Jn(){}G(Jn,Wo),Jn.prototype.g=function(){return new XMLHttpRequest},Jn.prototype.i=function(){return{}},Wn=new Jn;function sn(h,y,v,A){this.j=h,this.i=y,this.l=v,this.R=A||1,this.U=new bs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new pt}function pt(){this.i=null,this.g="",this.h=!1}var il={},Ta={};function Bn(h,y,v){h.L=1,h.v=Ns(pn(y)),h.m=v,h.P=!0,Oi(h,null)}function Oi(h,y){h.F=Date.now(),Is(h),h.A=pn(h.v);var v=h.A,A=h.R;Array.isArray(A)||(A=[String(A)]),ul(v.i,"t",A),h.C=0,v=h.j.J,h.h=new pt,h.g=gc(h.j,v?y:null,!h.m),0<h.O&&(h.M=new Zf(S(h.Y,h,h.g),h.O)),y=h.U,v=h.g,A=h.ca;var L="readystatechange";Array.isArray(L)||(L&&(Ts[0]=L.toString()),L=Ts);for(var H=0;H<L.length;H++){var ae=Xu(v,L[H],A||y.handleEvent,!1,y.h||y);if(!ae)break;y.g[ae.key]=ae}y=h.H?w(h.H):{},h.m?(h.u||(h.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,y)):(h.u="GET",h.g.ea(h.A,h.u,null,y)),pr(),nl(h.i,h.u,h.A,h.l,h.R,h.m)}sn.prototype.ca=function(h){h=h.target;const y=this.M;y&&Nn(h)==3?y.j():this.Y(h)},sn.prototype.Y=function(h){try{if(h==this.g)e:{const xt=Nn(this.g);var y=this.g.Ba();const ji=this.g.Z();if(!(3>xt)&&(xt!=3||this.g&&(this.h.h||this.g.oa()||lc(this.g)))){this.J||xt!=4||y==7||(y==8||0>=ji?pr(3):pr(2)),vr(this);var v=this.g.Z();this.X=v;t:if(tc(this)){var A=lc(this.g);h="";var L=A.length,H=Nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ft(this),Zn(this);var ae="";break t}this.h.i=new m.TextDecoder}for(y=0;y<L;y++)this.h.h=!0,h+=this.h.i.decode(A[y],{stream:!(H&&y==L-1)});A.length=0,this.h.g+=h,this.C=0,ae=this.h.g}else ae=this.g.oa();if(this.o=v==200,ed(this.i,this.u,this.A,this.l,this.R,xt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var je,Ct=this.g;if((je=Ct.g?Ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ie(je)){var ze=je;break t}}ze=null}if(v=ze)gr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rs(this,v);else{this.o=!1,this.s=3,at(12),Ft(this),Zn(this);break e}}if(this.P){v=!0;let qt;for(;!this.J&&this.C<ae.length;)if(qt=nc(this,ae),qt==Ta){xt==4&&(this.s=4,at(14),v=!1),gr(this.i,this.l,null,"[Incomplete Response]");break}else if(qt==il){this.s=4,at(15),gr(this.i,this.l,ae,"[Invalid Chunk]"),v=!1;break}else gr(this.i,this.l,qt,null),Rs(this,qt);if(tc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xt!=4||ae.length!=0||this.h.h||(this.s=1,at(16),v=!1),this.o=this.o&&v,!v)gr(this.i,this.l,ae,"[Invalid Chunked Response]"),Ft(this),Zn(this);else if(0<ae.length&&!this.W){this.W=!0;var Vt=this.j;Vt.g==this&&Vt.ba&&!Vt.M&&(Vt.j.info("Great, no buffering proxy detected. Bytes received: "+ae.length),Us(Vt),Vt.M=!0,at(11))}}else gr(this.i,this.l,ae,null),Rs(this,ae);xt==4&&Ft(this),this.o&&!this.J&&(xt==4?dc(this.j,this):(this.o=!1,Is(this)))}else sd(this.g),v==400&&0<ae.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),Ft(this),Zn(this)}}}catch{}finally{}};function tc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function nc(h,y){var v=h.C,A=y.indexOf(`
`,v);return A==-1?Ta:(v=Number(y.substring(v,A)),isNaN(v)?il:(A+=1,A+v>y.length?Ta:(y=y.slice(A,A+v),h.C=A+v,y)))}sn.prototype.cancel=function(){this.J=!0,Ft(this)};function Is(h){h.S=Date.now()+h.I,ic(h,h.I)}function ic(h,y){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Et(S(h.ba,h),y)}function vr(h){h.B&&(m.clearTimeout(h.B),h.B=null)}sn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(ec(this.i,this.A),this.L!=2&&(pr(),at(17)),Ft(this),this.s=2,Zn(this)):ic(this,this.S-h)};function Zn(h){h.j.G==0||h.J||dc(h.j,h)}function Ft(h){vr(h);var y=h.M;y&&typeof y.ma=="function"&&y.ma(),h.M=null,As(h.U),h.g&&(y=h.g,h.g=null,y.abort(),y.ma())}function Rs(h,y){try{var v=h.j;if(v.G!=0&&(v.g==h||rl(v.h,h))){if(!h.K&&rl(v.h,h)&&v.G==3){try{var A=v.Da.g.parse(y)}catch{A=null}if(Array.isArray(A)&&A.length==3){var L=A;if(L[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)ka(v),Da(v);else break e;ml(v),at(18)}}else v.za=L[1],0<v.za-v.T&&37500>L[2]&&v.F&&v.v==0&&!v.C&&(v.C=Et(S(v.Za,v),6e3));if(1>=Sa(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Ui(v,11)}else if((h.K||v.g==h)&&ka(v),!ie(y))for(L=v.Da.g.parse(y),y=0;y<L.length;y++){let ze=L[y];if(v.T=ze[0],ze=ze[1],v.G==2)if(ze[0]=="c"){v.K=ze[1],v.ia=ze[2];const Vt=ze[3];Vt!=null&&(v.la=Vt,v.j.info("VER="+v.la));const xt=ze[4];xt!=null&&(v.Aa=xt,v.j.info("SVER="+v.Aa));const ji=ze[5];ji!=null&&typeof ji=="number"&&0<ji&&(A=1.5*ji,v.L=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const qt=h.g;if(qt){const ai=qt.g?qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ai){var H=A.h;H.g||ai.indexOf("spdy")==-1&&ai.indexOf("quic")==-1&&ai.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(wa(H,H.h),H.h=null))}if(A.D){const gl=qt.g?qt.g.getResponseHeader("X-HTTP-Session-Id"):null;gl&&(A.ya=gl,We(A.I,A.D,gl))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),A=v;var ae=h;if(A.qa=pc(A,A.J?A.ia:null,A.W),ae.K){an(A.h,ae);var je=ae,Ct=A.L;Ct&&(je.I=Ct),je.B&&(vr(je),Is(je)),A.g=ae}else hc(A);0<v.i.length&&Pa(v)}else ze[0]!="stop"&&ze[0]!="close"||Ui(v,7);else v.G==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?Ui(v,7):fl(v):ze[0]!="noop"&&v.l&&v.l.ta(ze),v.v=0)}}pr(4)}catch{}}var rc=class{constructor(h,y){this.g=h,this.map=y}};function Di(h){this.l=h||10,m.PerformanceNavigationTiming?(h=m.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Aa(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Sa(h){return h.h?1:h.g?h.g.size:0}function rl(h,y){return h.h?h.h==y:h.g?h.g.has(y):!1}function wa(h,y){h.g?h.g.add(y):h.h=y}function an(h,y){h.h&&h.h==y?h.h=null:h.g&&h.g.has(y)&&h.g.delete(y)}Di.prototype.cancel=function(){if(this.i=sl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function sl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let y=h.i;for(const v of h.g.values())y=y.concat(v.D);return y}return Q(h.i)}function td(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var y=[],v=h.length,A=0;A<v;A++)y.push(h[A]);return y}y=[],v=0;for(A in h)y[v++]=h[A];return y}function Ia(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var y=[];h=h.length;for(var v=0;v<h;v++)y.push(v);return y}y=[],v=0;for(const A in h)y[v++]=A;return y}}}function al(h,y){if(h.forEach&&typeof h.forEach=="function")h.forEach(y,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,y,void 0);else for(var v=Ia(h),A=td(h),L=A.length,H=0;H<L;H++)y.call(void 0,A[H],v&&v[H],h)}var Cs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nd(h,y){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var A=h[v].indexOf("="),L=null;if(0<=A){var H=h[v].substring(0,A);L=h[v].substring(A+1)}else H=h[v];y(H,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function bt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof bt){this.h=h.h,xs(this,h.j),this.o=h.o,this.g=h.g,_r(this,h.s),this.l=h.l;var y=h.i,v=new ki;v.i=y.i,y.g&&(v.g=new Map(y.g),v.h=y.h),Pi(this,v),this.m=h.m}else h&&(y=String(h).match(Cs))?(this.h=!1,xs(this,y[1]||"",!0),this.o=Rn(y[2]||""),this.g=Rn(y[3]||"",!0),_r(this,y[4]),this.l=Rn(y[5]||"",!0),Pi(this,y[6]||"",!0),this.m=Rn(y[7]||"")):(this.h=!1,this.i=new ki(null,this.h))}bt.prototype.toString=function(){var h=[],y=this.j;y&&h.push(Os(y,ol,!0),":");var v=this.g;return(v||y=="file")&&(h.push("//"),(y=this.o)&&h.push(Os(y,ol,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(Os(v,v.charAt(0)=="/"?id:ll,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",Os(v,Ra)),h.join("")};function pn(h){return new bt(h)}function xs(h,y,v){h.j=v?Rn(y,!0):y,h.j&&(h.j=h.j.replace(/:$/,""))}function _r(h,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);h.s=y}else h.s=null}function Pi(h,y,v){y instanceof ki?(h.i=y,ac(h.i,h.h)):(v||(y=Os(y,rd)),h.i=new ki(y,h.h))}function We(h,y,v){h.i.set(y,v)}function Ns(h){return We(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Rn(h,y){return h?y?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Os(h,y,v){return typeof h=="string"?(h=encodeURI(h).replace(y,sc),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function sc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var ol=/[#\/\?@]/g,ll=/[#\?:]/g,id=/[#\?]/g,rd=/[#\?@]/g,Ra=/#/g;function ki(h,y){this.h=this.g=null,this.i=h||null,this.j=!!y}function Cn(h){h.g||(h.g=new Map,h.h=0,h.i&&nd(h.i,function(y,v){h.add(decodeURIComponent(y.replace(/\+/g," ")),v)}))}i=ki.prototype,i.add=function(h,y){Cn(this),this.i=null,h=ei(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(y),this.h+=1,this};function Mi(h,y){Cn(h),y=ei(h,y),h.g.has(y)&&(h.i=null,h.h-=h.g.get(y).length,h.g.delete(y))}function Vi(h,y){return Cn(h),y=ei(h,y),h.g.has(y)}i.forEach=function(h,y){Cn(this),this.g.forEach(function(v,A){v.forEach(function(L){h.call(y,L,A,this)},this)},this)},i.na=function(){Cn(this);const h=Array.from(this.g.values()),y=Array.from(this.g.keys()),v=[];for(let A=0;A<y.length;A++){const L=h[A];for(let H=0;H<L.length;H++)v.push(y[A])}return v},i.V=function(h){Cn(this);let y=[];if(typeof h=="string")Vi(this,h)&&(y=y.concat(this.g.get(ei(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)y=y.concat(h[v])}return y},i.set=function(h,y){return Cn(this),this.i=null,h=ei(this,h),Vi(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[y]),this.h+=1,this},i.get=function(h,y){return h?(h=this.V(h),0<h.length?String(h[0]):y):y};function ul(h,y,v){Mi(h,y),0<v.length&&(h.i=null,h.g.set(ei(h,y),Q(v)),h.h+=v.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],y=Array.from(this.g.keys());for(var v=0;v<y.length;v++){var A=y[v];const H=encodeURIComponent(String(A)),ae=this.V(A);for(A=0;A<ae.length;A++){var L=H;ae[A]!==""&&(L+="="+encodeURIComponent(String(ae[A]))),h.push(L)}}return this.i=h.join("&")};function ei(h,y){return y=String(y),h.j&&(y=y.toLowerCase()),y}function ac(h,y){y&&!h.j&&(Cn(h),h.i=null,h.g.forEach(function(v,A){var L=A.toLowerCase();A!=L&&(Mi(this,A),ul(this,L,v))},h)),h.j=y}function Ds(h,y){const v=new In;if(m.Image){const A=new Image;A.onload=j(xn,v,"TestLoadImage: loaded",!0,y,A),A.onerror=j(xn,v,"TestLoadImage: error",!1,y,A),A.onabort=j(xn,v,"TestLoadImage: abort",!1,y,A),A.ontimeout=j(xn,v,"TestLoadImage: timeout",!1,y,A),m.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=h}else y(!1)}function Fn(h,y){const v=new In,A=new AbortController,L=setTimeout(()=>{A.abort(),xn(v,"TestPingServer: timeout",!1,y)},1e4);fetch(h,{signal:A.signal}).then(H=>{clearTimeout(L),H.ok?xn(v,"TestPingServer: ok",!0,y):xn(v,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(L),xn(v,"TestPingServer: error",!1,y)})}function xn(h,y,v,A,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),A(v)}catch{}}function Ps(){this.g=new Ss}function ti(h,y,v){const A=v||"";try{al(h,function(L,H){let ae=L;g(L)&&(ae=zn(L)),y.push(A+H+"="+encodeURIComponent(ae))})}catch(L){throw y.push(A+"type="+encodeURIComponent("_badmap")),L}}function Er(h){this.l=h.Ub||null,this.j=h.eb||!1}G(Er,Wo),Er.prototype.g=function(){return new Li(this.l,this.j)},Er.prototype.i=function(h){return function(){return h}}({});function Li(h,y){ft.call(this),this.D=h,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}G(Li,ft),i=Li.prototype,i.open=function(h,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=y,this.readyState=1,ii(this)},i.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(y.body=h),(this.D||m).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ni(this)),this.readyState=0},i.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,ii(this)),this.g&&(this.readyState=3,ii(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function cl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}i.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var y=h.value?h.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!h.done}))&&(this.response=this.responseText+=y)}h.done?ni(this):ii(this),this.readyState==3&&cl(this)}},i.Ra=function(h){this.g&&(this.response=this.responseText=h,ni(this))},i.Qa=function(h){this.g&&(this.response=h,ni(this))},i.ga=function(){this.g&&ni(this)};function ni(h){h.readyState=4,h.l=null,h.j=null,h.v=null,ii(h)}i.setRequestHeader=function(h,y){this.u.append(h,y)},i.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],y=this.h.entries();for(var v=y.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=y.next();return h.join(`\r
`)};function ii(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function hl(h){let y="";return Ce(h,function(v,A){y+=A,y+=":",y+=v,y+=`\r
`}),y}function Mt(h,y,v){e:{for(A in v){var A=!1;break e}A=!0}A||(v=hl(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):We(h,y,v))}function $e(h){ft.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}G($e,ft);var Ca=/^https?$/i,ks=["POST","PUT"];i=$e.prototype,i.Ha=function(h){this.J=h},i.ea=function(h,y,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);y=y?y.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wn.g(),this.v=this.o?Jo(this.o):Jo(Wn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(y,String(h),!0),this.B=!1}catch(H){oc(this,H);return}if(h=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var L in A)v.set(L,A[L]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const H of A.keys())v.set(H,A.get(H));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(H=>H.toLowerCase()=="content-type"),L=m.FormData&&h instanceof m.FormData,!(0<=Array.prototype.indexOf.call(ks,y,void 0))||A||L||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,ae]of v)this.g.setRequestHeader(H,ae);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ms(this),this.u=!0,this.g.send(h),this.u=!1}catch(H){oc(this,H)}};function oc(h,y){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=y,h.m=5,xa(h),ri(h)}function xa(h){h.A||(h.A=!0,Ye(h,"complete"),Ye(h,"error"))}i.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Ye(this,"complete"),Ye(this,"abort"),ri(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ri(this,!0)),$e.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Na(this):this.bb())},i.bb=function(){Na(this)};function Na(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Nn(h)!=4||h.Z()!=2)){if(h.u&&Nn(h)==4)Wt(h.Ea,0,h);else if(Ye(h,"readystatechange"),Nn(h)==4){h.h=!1;try{const ae=h.Z();e:switch(ae){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var v;if(!(v=y)){var A;if(A=ae===0){var L=String(h.D).match(Cs)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),A=!Ca.test(L?L.toLowerCase():"")}v=A}if(v)Ye(h,"complete"),Ye(h,"success");else{h.m=6;try{var H=2<Nn(h)?h.g.statusText:""}catch{H=""}h.l=H+" ["+h.Z()+"]",xa(h)}}finally{ri(h)}}}}function ri(h,y){if(h.g){Ms(h);const v=h.g,A=h.v[0]?()=>{}:null;h.g=null,h.v=null,y||Ye(h,"ready");try{v.onreadystatechange=A}catch{}}}function Ms(h){h.I&&(m.clearTimeout(h.I),h.I=null)}i.isActive=function(){return!!this.g};function Nn(h){return h.g?h.g.readyState:0}i.Z=function(){try{return 2<Nn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(h){if(this.g){var y=this.g.responseText;return h&&y.indexOf(h)==0&&(y=y.substring(h.length)),Ea(y)}};function lc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function sd(h){const y={};h=(h.g&&2<=Nn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<h.length;A++){if(ie(h[A]))continue;var v=k(h[A]);const L=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const H=y[L]||[];y[L]=H,H.push(v)}D(y,function(A){return A.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vs(h,y,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||y}function Oa(h){this.Aa=0,this.i=[],this.j=new In,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vs("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vs("baseRetryDelayMs",5e3,h),this.cb=Vs("retryDelaySeedMs",1e4,h),this.Wa=Vs("forwardChannelMaxRetries",2,h),this.wa=Vs("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Di(h&&h.concurrentRequestLimit),this.Da=new Ps,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Oa.prototype,i.la=8,i.G=1,i.connect=function(h,y,v,A){at(0),this.W=h,this.H=y||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.I=pc(this,null,this.W),Pa(this)};function fl(h){if(uc(h),h.G==3){var y=h.U++,v=pn(h.I);if(We(v,"SID",h.K),We(v,"RID",y),We(v,"TYPE","terminate"),Ls(h,v),y=new sn(h,h.j,y),y.L=2,y.v=Ns(pn(v)),v=!1,m.navigator&&m.navigator.sendBeacon)try{v=m.navigator.sendBeacon(y.v.toString(),"")}catch{}!v&&m.Image&&(new Image().src=y.v,v=!0),v||(y.g=gc(y.j,null),y.g.ea(y.v)),y.F=Date.now(),Is(y)}mc(h)}function Da(h){h.g&&(Us(h),h.g.cancel(),h.g=null)}function uc(h){Da(h),h.u&&(m.clearTimeout(h.u),h.u=null),ka(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&m.clearTimeout(h.s),h.s=null)}function Pa(h){if(!Aa(h.h)&&!h.s){h.s=!0;var y=h.Ga;oe||N(),ge||(oe(),ge=!0),He.add(y,h),h.B=0}}function ad(h,y){return Sa(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=y.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Et(S(h.Ga,h,y),pl(h,h.B)),h.B++,!0)}i.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const L=new sn(this,this.j,h);let H=this.o;if(this.S&&(H?(H=w(H),P(H,this.S)):H=this.S),this.m!==null||this.O||(L.H=H,H=null),this.P)e:{for(var y=0,v=0;v<this.i.length;v++){t:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(y+=A,4096<y){y=v;break e}if(y===4096||v===this.i.length-1){y=v+1;break e}}y=1e3}else y=1e3;y=cc(this,L,y),v=pn(this.I),We(v,"RID",h),We(v,"CVER",22),this.D&&We(v,"X-HTTP-Session-Id",this.D),Ls(this,v),H&&(this.O?y="headers="+encodeURIComponent(String(hl(H)))+"&"+y:this.m&&Mt(v,this.m,H)),wa(this.h,L),this.Ua&&We(v,"TYPE","init"),this.P?(We(v,"$req",y),We(v,"SID","null"),L.T=!0,Bn(L,v,null)):Bn(L,v,y),this.G=2}}else this.G==3&&(h?dl(this,h):this.i.length==0||Aa(this.h)||dl(this))};function dl(h,y){var v;y?v=y.l:v=h.U++;const A=pn(h.I);We(A,"SID",h.K),We(A,"RID",v),We(A,"AID",h.T),Ls(h,A),h.m&&h.o&&Mt(A,h.m,h.o),v=new sn(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),y&&(h.i=y.D.concat(h.i)),y=cc(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),wa(h.h,v),Bn(v,A,y)}function Ls(h,y){h.H&&Ce(h.H,function(v,A){We(y,A,v)}),h.l&&al({},function(v,A){We(y,A,v)})}function cc(h,y,v){v=Math.min(h.i.length,v);var A=h.l?S(h.l.Na,h.l,h):null;e:{var L=h.i;let H=-1;for(;;){const ae=["count="+v];H==-1?0<v?(H=L[0].g,ae.push("ofs="+H)):H=0:ae.push("ofs="+H);let je=!0;for(let Ct=0;Ct<v;Ct++){let ze=L[Ct].g;const Vt=L[Ct].map;if(ze-=H,0>ze)H=Math.max(0,L[Ct].g-100),je=!1;else try{ti(Vt,ae,"req"+ze+"_")}catch{A&&A(Vt)}}if(je){A=ae.join("&");break e}}}return h=h.i.splice(0,v),y.D=h,A}function hc(h){if(!h.g&&!h.u){h.Y=1;var y=h.Fa;oe||N(),ge||(oe(),ge=!0),He.add(y,h),h.v=0}}function ml(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Et(S(h.Fa,h),pl(h,h.v)),h.v++,!0)}i.Fa=function(){if(this.u=null,fc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Et(S(this.ab,this),h)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),Da(this),fc(this))};function Us(h){h.A!=null&&(m.clearTimeout(h.A),h.A=null)}function fc(h){h.g=new sn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var y=pn(h.qa);We(y,"RID","rpc"),We(y,"SID",h.K),We(y,"AID",h.T),We(y,"CI",h.F?"0":"1"),!h.F&&h.ja&&We(y,"TO",h.ja),We(y,"TYPE","xmlhttp"),Ls(h,y),h.m&&h.o&&Mt(y,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=Ns(pn(y)),v.m=null,v.P=!0,Oi(v,h)}i.Za=function(){this.C!=null&&(this.C=null,Da(this),ml(this),at(19))};function ka(h){h.C!=null&&(m.clearTimeout(h.C),h.C=null)}function dc(h,y){var v=null;if(h.g==y){ka(h),Us(h),h.g=null;var A=2}else if(rl(h.h,y))v=y.D,an(h.h,y),A=1;else return;if(h.G!=0){if(y.o)if(A==1){v=y.m?y.m.length:0,y=Date.now()-y.F;var L=h.B;A=mr(),Ye(A,new Rt(A,v)),Pa(h)}else hc(h);else if(L=y.s,L==3||L==0&&0<y.X||!(A==1&&ad(h,y)||A==2&&ml(h)))switch(v&&0<v.length&&(y=h.h,y.i=y.i.concat(v)),L){case 1:Ui(h,5);break;case 4:Ui(h,10);break;case 3:Ui(h,6);break;default:Ui(h,2)}}}function pl(h,y){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*y}function Ui(h,y){if(h.j.info("Error code "+y),y==2){var v=S(h.fb,h),A=h.Xa;const L=!A;A=new bt(A||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||xs(A,"https"),Ns(A),L?Ds(A.toString(),v):Fn(A.toString(),v)}else at(2);h.G=0,h.l&&h.l.sa(y),mc(h),uc(h)}i.fb=function(h){h?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function mc(h){if(h.G=0,h.ka=[],h.l){const y=sl(h.h);(y.length!=0||h.i.length!=0)&&(F(h.ka,y),F(h.ka,h.i),h.h.i.length=0,Q(h.i),h.i.length=0),h.l.ra()}}function pc(h,y,v){var A=v instanceof bt?pn(v):new bt(v);if(A.g!="")y&&(A.g=y+"."+A.g),_r(A,A.s);else{var L=m.location;A=L.protocol,y=y?y+"."+L.hostname:L.hostname,L=+L.port;var H=new bt(null);A&&xs(H,A),y&&(H.g=y),L&&_r(H,L),v&&(H.l=v),A=H}return v=h.D,y=h.ya,v&&y&&We(A,v,y),We(A,"VER",h.la),Ls(h,A),A}function gc(h,y,v){if(y&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=h.Ca&&!h.pa?new $e(new Er({eb:v})):new $e(h.pa),y.Ha(h.J),y}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function yc(){}i=yc.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Ma(){}Ma.prototype.g=function(h,y){return new on(h,y)};function on(h,y){ft.call(this),this.g=new Oa(y),this.l=h,this.h=y&&y.messageUrlParams||null,h=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(h?h["X-WebChannel-Content-Type"]=y.messageContentType:h={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(h?h["X-WebChannel-Client-Profile"]=y.va:h={"X-WebChannel-Client-Profile":y.va}),this.g.S=h,(h=y&&y.Sb)&&!ie(h)&&(this.g.m=h),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!ie(y)&&(this.g.D=y,h=this.h,h!==null&&y in h&&(h=this.h,y in h&&delete h[y])),this.j=new si(this)}G(on,ft),on.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},on.prototype.close=function(){fl(this.g)},on.prototype.o=function(h){var y=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=zn(h),h=v);y.i.push(new rc(y.Ya++,h)),y.G==3&&Pa(y)},on.prototype.N=function(){this.g.l=null,delete this.j,fl(this.g),delete this.g,on.aa.N.call(this)};function vc(h){xi.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var y=h.__sm__;if(y){e:{for(const v in y){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,y=y!==null&&h in y?y[h]:void 0),this.data=y}else this.data=h}G(vc,xi);function _c(){el.call(this),this.status=1}G(_c,el);function si(h){this.g=h}G(si,yc),si.prototype.ua=function(){Ye(this.g,"a")},si.prototype.ta=function(h){Ye(this.g,new vc(h))},si.prototype.sa=function(h){Ye(this.g,new _c)},si.prototype.ra=function(){Ye(this.g,"b")},Ma.prototype.createWebChannel=Ma.prototype.g,on.prototype.send=on.prototype.o,on.prototype.open=on.prototype.m,on.prototype.close=on.prototype.close,oA=function(){return new Ma},aA=function(){return mr()},sA=Xn,Fp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},yr.NO_ERROR=0,yr.TIMEOUT=8,yr.HTTP_ERROR=6,kh=yr,Ni.COMPLETE="complete",rA=Ni,Zo.EventType=Ci,Ci.OPEN="a",Ci.CLOSE="b",Ci.ERROR="c",Ci.MESSAGE="d",ft.prototype.listen=ft.prototype.K,su=Zo,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,iA=$e}).apply(typeof bh<"u"?bh:typeof self<"u"?self:typeof window<"u"?window:{});const QE="@firebase/firestore",XE="4.7.15";/**
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
 */const aa=new wf("@firebase/firestore");function po(){return aa.logLevel}function ue(i,...e){if(aa.logLevel<=ke.DEBUG){const t=e.map(Xg);aa.debug(`Firestore (${Fo}): ${i}`,...t)}}function ar(i,...e){if(aa.logLevel<=ke.ERROR){const t=e.map(Xg);aa.error(`Firestore (${Fo}): ${i}`,...t)}}function Co(i,...e){if(aa.logLevel<=ke.WARN){const t=e.map(Xg);aa.warn(`Firestore (${Fo}): ${i}`,...t)}}function Xg(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function be(i,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,lA(i,r,t)}function lA(i,e,t){let r=`FIRESTORE (${Fo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw ar(r),new Error(r)}function Ke(i,e,t,r){let a="Unexpected state";typeof t=="string"?a=t:r=t,i||lA(e,a,r)}function Re(i,e){return i}/**
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
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class pe extends jn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class nr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class uA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(tn.UNAUTHENTICATED))}shutdown(){}}class gO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class yO{constructor(e){this.t=e,this.currentUser=tn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ke(this.o===void 0,42304);let r=this.i;const a=p=>this.i!==r?(r=this.i,t(p)):Promise.resolve();let l=new nr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new nr,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},m=p=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>m(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new nr)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ke(typeof r.accessToken=="string",31837,{l:r}),new uA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ke(e===null||typeof e=="string",2055,{h:e}),new tn(e)}}class vO{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=tn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class _O{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new vO(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(tn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class WE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EO{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ke(this.o===void 0,3512);const r=l=>{l.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,ue("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>r(l))};const a=l=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new WE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ke(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new WE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bO(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<i;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function cA(){return new TextEncoder}/**
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
 */class hA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const a=bO(40);for(let l=0;l<a.length;++l)r.length<20&&a[l]<t&&(r+=e.charAt(a[l]%62))}return r}}function Oe(i,e){return i<e?-1:i>e?1:0}function qp(i,e){let t=0;for(;t<i.length&&t<e.length;){const r=i.codePointAt(t),a=e.codePointAt(t);if(r!==a){if(r<128&&a<128)return Oe(r,a);{const l=cA(),c=TO(l.encode(JE(i,t)),l.encode(JE(e,t)));return c!==0?c:Oe(r,a)}}t+=r>65535?2:1}return Oe(i.length,e.length)}function JE(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function TO(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Oe(i[t],e[t]);return Oe(i.length,e.length)}function xo(i,e,t){return i.length===e.length&&i.every((r,a)=>t(r,e[a]))}/**
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
 */const ZE=-62135596800,eb=1e6;class It{static now(){return It.fromMillis(Date.now())}static fromDate(e){return It.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*eb);return new It(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new pe(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new pe(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ZE)throw new pe(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new pe(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/eb}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-ZE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new It(0,0))}static max(){return new we(new It(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const tb="__name__";class fi{constructor(e,t,r){t===void 0?t=0:t>e.length&&be(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&be(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return fi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof fi?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let a=0;a<r;a++){const l=fi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Oe(e.length,t.length)}static compareSegments(e,t){const r=fi.isNumericId(e),a=fi.isNumericId(t);return r&&!a?-1:!r&&a?1:r&&a?fi.extractNumericId(e).compare(fi.extractNumericId(t)):qp(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return es.fromString(e.substring(4,e.length-2))}}class lt extends fi{construct(e,t,r){return new lt(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new pe(Z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(a=>a.length>0))}return new lt(t)}static emptyPath(){return new lt([])}}const AO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Yt extends fi{construct(e,t,r){return new Yt(e,t,r)}static isValidIdentifier(e){return AO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===tb}static keyField(){return new Yt([tb])}static fromServerFormat(e){const t=[];let r="",a=0;const l=()=>{if(r.length===0)throw new pe(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let c=!1;for(;a<e.length;){const m=e[a];if(m==="\\"){if(a+1===e.length)throw new pe(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new pe(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=p,a+=2}else m==="`"?(c=!c,a++):m!=="."||c?(r+=m,a++):(l(),a++)}if(l(),c)throw new pe(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Yt(t)}static emptyPath(){return new Yt([])}}/**
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
 */const Iu=-1;function SO(i,e){const t=i.toTimestamp().seconds,r=i.toTimestamp().nanoseconds+1,a=we.fromTimestamp(r===1e9?new It(t+1,0):new It(t,r));return new rs(a,ve.empty(),e)}function wO(i){return new rs(i.readTime,i.key,Iu)}class rs{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new rs(we.min(),ve.empty(),Iu)}static max(){return new rs(we.max(),ve.empty(),Iu)}}function IO(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=ve.comparator(i.documentKey,e.documentKey),t!==0?t:Oe(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function qo(i){if(i.code!==Z.FAILED_PRECONDITION||i.message!==RO)throw i;ue("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&be(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W((r,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(r,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(r,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):W.reject(t)}static resolve(e){return new W((t,r)=>{t(e)})}static reject(e){return new W((t,r)=>{r(e)})}static waitFor(e){return new W((t,r)=>{let a=0,l=0,c=!1;e.forEach(m=>{++a,m.next(()=>{++l,c&&l===a&&t()},p=>r(p))}),c=!0,l===a&&t()})}static or(e){let t=W.resolve(!1);for(const r of e)t=t.next(a=>a?W.resolve(a):r());return t}static forEach(e,t){const r=[];return e.forEach((a,l)=>{r.push(t.call(this,a,l))}),this.waitFor(r)}static mapArray(e,t){return new W((r,a)=>{const l=e.length,c=new Array(l);let m=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next(_=>{c[g]=_,++m,m===l&&r(c)},_=>a(_))}})}static doWhile(e,t){return new W((r,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):r()};l()})}}function xO(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ho(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class xf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}xf.le=-1;/**
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
 */const Wg=-1;function Nf(i){return i==null}function Jh(i){return i===0&&1/i==-1/0}function NO(i){return typeof i=="number"&&Number.isInteger(i)&&!Jh(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const fA="";function OO(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=nb(e)),e=DO(i.get(t),e);return nb(e)}function DO(i,e){let t=e;const r=i.length;for(let a=0;a<r;a++){const l=i.charAt(a);switch(l){case"\0":t+="";break;case fA:t+="";break;default:t+=l}}return t}function nb(i){return i+fA+""}/**
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
 */function ib(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function da(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function dA(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class ct{constructor(e,t){this.comparator=e,this.root=t||Kt.EMPTY}insert(e,t){return new ct(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Kt.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const a=this.comparator(e,r.key);if(a===0)return t+r.left.size;a<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Th(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Th(this.root,e,this.comparator,!1)}getReverseIterator(){return new Th(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Th(this.root,e,this.comparator,!0)}}class Th{constructor(e,t,r,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?r(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Kt{constructor(e,t,r,a,l){this.key=e,this.value=t,this.color=r??Kt.RED,this.left=a??Kt.EMPTY,this.right=l??Kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,a,l){return new Kt(e??this.key,t??this.value,r??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let a=this;const l=r(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,r),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,r)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Kt.EMPTY;r=a.right.min(),a=a.copy(r.key,r.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw be(43730,{key:this.key,value:this.value});if(this.right.isRed())throw be(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw be(27949);return e+(this.isRed()?0:1)}}Kt.EMPTY=null,Kt.RED=!0,Kt.BLACK=!1;Kt.EMPTY=new class{constructor(){this.size=0}get key(){throw be(57766)}get value(){throw be(16141)}get color(){throw be(16727)}get left(){throw be(29726)}get right(){throw be(36894)}copy(e,t,r,a,l){return this}insert(e,t,r){return new Kt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Pt{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const a=r.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rb(this.data.getIterator())}getIteratorFrom(e){return new rb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Pt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=r.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Pt(this.comparator);return t.data=e,t}}class rb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.fields=e,e.sort(Yt.comparator)}static empty(){return new $n([])}unionWith(e){let t=new Pt(Yt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new $n(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return xo(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class mA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new mA("Invalid base64 string: "+l):l}}(e);return new Xt(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new Xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let a=0;a<t.length;a++)r[a]=t.charCodeAt(a);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xt.EMPTY_BYTE_STRING=new Xt("");const PO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ss(i){if(Ke(!!i,39018),typeof i=="string"){let e=0;const t=PO.exec(i);if(Ke(!!t,46558,{timestamp:i}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const r=new Date(i);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:vt(i.seconds),nanos:vt(i.nanos)}}function vt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function as(i){return typeof i=="string"?Xt.fromBase64String(i):Xt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA="server_timestamp",gA="__type__",yA="__previous_value__",vA="__local_write_time__";function Jg(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[gA])===null||t===void 0?void 0:t.stringValue)===pA}function Of(i){const e=i.mapValue.fields[yA];return Jg(e)?Of(e):e}function Ru(i){const e=ss(i.mapValue.fields[vA].timestampValue);return new It(e.seconds,e.nanos)}/**
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
 */class kO{constructor(e,t,r,a,l,c,m,p,g,_){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=_}}const Zh="(default)";class Cu{constructor(e,t){this.projectId=e,this.database=t||Zh}static empty(){return new Cu("","")}get isDefaultDatabase(){return this.database===Zh}isEqual(e){return e instanceof Cu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A="__type__",MO="__max__",Ah={mapValue:{}},EA="__vector__",ef="value";function os(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Jg(i)?4:LO(i)?9007199254740991:VO(i)?10:11:be(28295,{value:i})}function Ai(i,e){if(i===e)return!0;const t=os(i);if(t!==os(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ru(i).isEqual(Ru(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=ss(a.timestampValue),m=ss(l.timestampValue);return c.seconds===m.seconds&&c.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,l){return as(a.bytesValue).isEqual(as(l.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,l){return vt(a.geoPointValue.latitude)===vt(l.geoPointValue.latitude)&&vt(a.geoPointValue.longitude)===vt(l.geoPointValue.longitude)}(i,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return vt(a.integerValue)===vt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=vt(a.doubleValue),m=vt(l.doubleValue);return c===m?Jh(c)===Jh(m):isNaN(c)&&isNaN(m)}return!1}(i,e);case 9:return xo(i.arrayValue.values||[],e.arrayValue.values||[],Ai);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},m=l.mapValue.fields||{};if(ib(c)!==ib(m))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(m[p]===void 0||!Ai(c[p],m[p])))return!1;return!0}(i,e);default:return be(52216,{left:i})}}function xu(i,e){return(i.values||[]).find(t=>Ai(t,e))!==void 0}function No(i,e){if(i===e)return 0;const t=os(i),r=os(e);if(t!==r)return Oe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Oe(i.booleanValue,e.booleanValue);case 2:return function(l,c){const m=vt(l.integerValue||l.doubleValue),p=vt(c.integerValue||c.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1}(i,e);case 3:return sb(i.timestampValue,e.timestampValue);case 4:return sb(Ru(i),Ru(e));case 5:return qp(i.stringValue,e.stringValue);case 6:return function(l,c){const m=as(l),p=as(c);return m.compareTo(p)}(i.bytesValue,e.bytesValue);case 7:return function(l,c){const m=l.split("/"),p=c.split("/");for(let g=0;g<m.length&&g<p.length;g++){const _=Oe(m[g],p[g]);if(_!==0)return _}return Oe(m.length,p.length)}(i.referenceValue,e.referenceValue);case 8:return function(l,c){const m=Oe(vt(l.latitude),vt(c.latitude));return m!==0?m:Oe(vt(l.longitude),vt(c.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return ab(i.arrayValue,e.arrayValue);case 10:return function(l,c){var m,p,g,_;const b=l.fields||{},S=c.fields||{},j=(m=b[ef])===null||m===void 0?void 0:m.arrayValue,G=(p=S[ef])===null||p===void 0?void 0:p.arrayValue,Q=Oe(((g=j==null?void 0:j.values)===null||g===void 0?void 0:g.length)||0,((_=G==null?void 0:G.values)===null||_===void 0?void 0:_.length)||0);return Q!==0?Q:ab(j,G)}(i.mapValue,e.mapValue);case 11:return function(l,c){if(l===Ah.mapValue&&c===Ah.mapValue)return 0;if(l===Ah.mapValue)return 1;if(c===Ah.mapValue)return-1;const m=l.fields||{},p=Object.keys(m),g=c.fields||{},_=Object.keys(g);p.sort(),_.sort();for(let b=0;b<p.length&&b<_.length;++b){const S=qp(p[b],_[b]);if(S!==0)return S;const j=No(m[p[b]],g[_[b]]);if(j!==0)return j}return Oe(p.length,_.length)}(i.mapValue,e.mapValue);default:throw be(23264,{Pe:t})}}function sb(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Oe(i,e);const t=ss(i),r=ss(e),a=Oe(t.seconds,r.seconds);return a!==0?a:Oe(t.nanos,r.nanos)}function ab(i,e){const t=i.values||[],r=e.values||[];for(let a=0;a<t.length&&a<r.length;++a){const l=No(t[a],r[a]);if(l)return l}return Oe(t.length,r.length)}function Oo(i){return Hp(i)}function Hp(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const r=ss(t);return`time(${r.seconds},${r.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return as(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return ve.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let r="[",a=!0;for(const l of t.values||[])a?a=!1:r+=",",r+=Hp(l);return r+"]"}(i.arrayValue):"mapValue"in i?function(t){const r=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of r)l?l=!1:a+=",",a+=`${c}:${Hp(t.fields[c])}`;return a+"}"}(i.mapValue):be(61005,{value:i})}function Mh(i){switch(os(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Of(i);return e?16+Mh(e):16;case 5:return 2*i.stringValue.length;case 6:return as(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((a,l)=>a+Mh(l),0)}(i.arrayValue);case 10:case 11:return function(r){let a=0;return da(r.fields,(l,c)=>{a+=l.length+Mh(c)}),a}(i.mapValue);default:throw be(13486,{value:i})}}function Gp(i){return!!i&&"integerValue"in i}function Zg(i){return!!i&&"arrayValue"in i}function ob(i){return!!i&&"nullValue"in i}function lb(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Vh(i){return!!i&&"mapValue"in i}function VO(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[_A])===null||t===void 0?void 0:t.stringValue)===EA}function fu(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return da(i.mapValue.fields,(t,r)=>e.mapValue.fields[t]=fu(r)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=fu(i.arrayValue.values[t]);return e}return Object.assign({},i)}function LO(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===MO}/**
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
 */class Un{constructor(e){this.value=e}static empty(){return new Un({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Vh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=fu(t)}setAll(e){let t=Yt.emptyPath(),r={},a=[];e.forEach((c,m)=>{if(!t.isImmediateParentOf(m)){const p=this.getFieldsMap(t);this.applyChanges(p,r,a),r={},a=[],t=m.popLast()}c?r[m.lastSegment()]=fu(c):a.push(m.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,r,a)}delete(e){const t=this.field(e.popLast());Vh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ai(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let a=t.mapValue.fields[e.get(r)];Vh(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,r){da(t,(a,l)=>e[a]=l);for(const a of r)delete e[a]}clone(){return new Un(fu(this.value))}}function bA(i){const e=[];return da(i.fields,(t,r)=>{const a=new Yt([t]);if(Vh(r)){const l=bA(r.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new $n(e)}/**
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
 */class tf{constructor(e,t){this.position=e,this.inclusive=t}}function ub(i,e,t){let r=0;for(let a=0;a<i.position.length;a++){const l=e[a],c=i.position[a];if(l.field.isKeyField()?r=ve.comparator(ve.fromName(c.referenceValue),t.key):r=No(c,t.data.field(l.field)),l.dir==="desc"&&(r*=-1),r!==0)break}return r}function cb(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Ai(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class nf{constructor(e,t="asc"){this.field=e,this.dir=t}}function UO(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class TA{}class Dt extends TA{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new zO(e,t,r):t==="array-contains"?new qO(e,r):t==="in"?new HO(e,r):t==="not-in"?new GO(e,r):t==="array-contains-any"?new $O(e,r):new Dt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new BO(e,r):new FO(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(No(t,this.value)):t!==null&&os(this.value)===os(t)&&this.matchesComparison(No(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return be(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Si extends TA{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Si(e,t)}matches(e){return AA(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function AA(i){return i.op==="and"}function SA(i){return jO(i)&&AA(i)}function jO(i){for(const e of i.filters)if(e instanceof Si)return!1;return!0}function $p(i){if(i instanceof Dt)return i.field.canonicalString()+i.op.toString()+Oo(i.value);if(SA(i))return i.filters.map(e=>$p(e)).join(",");{const e=i.filters.map(t=>$p(t)).join(",");return`${i.op}(${e})`}}function wA(i,e){return i instanceof Dt?function(r,a){return a instanceof Dt&&r.op===a.op&&r.field.isEqual(a.field)&&Ai(r.value,a.value)}(i,e):i instanceof Si?function(r,a){return a instanceof Si&&r.op===a.op&&r.filters.length===a.filters.length?r.filters.reduce((l,c,m)=>l&&wA(c,a.filters[m]),!0):!1}(i,e):void be(19439)}function IA(i){return i instanceof Dt?function(t){return`${t.field.canonicalString()} ${t.op} ${Oo(t.value)}`}(i):i instanceof Si?function(t){return t.op.toString()+" {"+t.getFilters().map(IA).join(" ,")+"}"}(i):"Filter"}class zO extends Dt{constructor(e,t,r){super(e,t,r),this.key=ve.fromName(r.referenceValue)}matches(e){const t=ve.comparator(e.key,this.key);return this.matchesComparison(t)}}class BO extends Dt{constructor(e,t){super(e,"in",t),this.keys=RA("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class FO extends Dt{constructor(e,t){super(e,"not-in",t),this.keys=RA("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function RA(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ve.fromName(r.referenceValue))}class qO extends Dt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Zg(t)&&xu(t.arrayValue,this.value)}}class HO extends Dt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&xu(this.value.arrayValue,t)}}class GO extends Dt{constructor(e,t){super(e,"not-in",t)}matches(e){if(xu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!xu(this.value.arrayValue,t)}}class $O extends Dt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Zg(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>xu(this.value.arrayValue,r))}}/**
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
 */class KO{constructor(e,t=null,r=[],a=[],l=null,c=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=a,this.limit=l,this.startAt=c,this.endAt=m,this.Ie=null}}function hb(i,e=null,t=[],r=[],a=null,l=null,c=null){return new KO(i,e,t,r,a,l,c)}function ey(i){const e=Re(i);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>$p(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(l){return l.field.canonicalString()+l.dir}(r)).join(","),Nf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Oo(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Oo(r)).join(",")),e.Ie=t}return e.Ie}function ty(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!UO(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!wA(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!cb(i.startAt,e.startAt)&&cb(i.endAt,e.endAt)}function Kp(i){return ve.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Df{constructor(e,t=null,r=[],a=[],l=null,c="F",m=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=a,this.limit=l,this.limitType=c,this.startAt=m,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function YO(i,e,t,r,a,l,c,m){return new Df(i,e,t,r,a,l,c,m)}function ny(i){return new Df(i)}function fb(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function QO(i){return i.collectionGroup!==null}function du(i){const e=Re(i);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let m=new Pt(Yt.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(m=m.add(g.field))})}),m})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new nf(l,r))}),t.has(Yt.keyField().canonicalString())||e.Ee.push(new nf(Yt.keyField(),r))}return e.Ee}function _i(i){const e=Re(i);return e.de||(e.de=XO(e,du(i))),e.de}function XO(i,e){if(i.limitType==="F")return hb(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new nf(a.field,l)});const t=i.endAt?new tf(i.endAt.position,i.endAt.inclusive):null,r=i.startAt?new tf(i.startAt.position,i.startAt.inclusive):null;return hb(i.path,i.collectionGroup,e,i.filters,i.limit,t,r)}}function Yp(i,e,t){return new Df(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Pf(i,e){return ty(_i(i),_i(e))&&i.limitType===e.limitType}function CA(i){return`${ey(_i(i))}|lt:${i.limitType}`}function go(i){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(a=>IA(a)).join(", ")}]`),Nf(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(a=>Oo(a)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(a=>Oo(a)).join(",")),`Target(${r})`}(_i(i))}; limitType=${i.limitType})`}function kf(i,e){return e.isFoundDocument()&&function(r,a){const l=a.key.path;return r.collectionGroup!==null?a.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(l):ve.isDocumentKey(r.path)?r.path.isEqual(l):r.path.isImmediateParentOf(l)}(i,e)&&function(r,a){for(const l of du(r))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(i,e)&&function(r,a){for(const l of r.filters)if(!l.matches(a))return!1;return!0}(i,e)&&function(r,a){return!(r.startAt&&!function(c,m,p){const g=ub(c,m,p);return c.inclusive?g<=0:g<0}(r.startAt,du(r),a)||r.endAt&&!function(c,m,p){const g=ub(c,m,p);return c.inclusive?g>=0:g>0}(r.endAt,du(r),a))}(i,e)}function WO(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function xA(i){return(e,t)=>{let r=!1;for(const a of du(i)){const l=JO(a,e,t);if(l!==0)return l;r=r||a.field.isKeyField()}return 0}}function JO(i,e,t){const r=i.field.isKeyField()?ve.comparator(e.key,t.key):function(l,c,m){const p=c.data.field(l),g=m.data.field(l);return p!==null&&g!==null?No(p,g):be(42886)}(i.field,e,t);switch(i.dir){case"asc":return r;case"desc":return-1*r;default:return be(19790,{direction:i.dir})}}/**
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
 */class ma{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[a,l]of r)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),a=this.inner[r];if(a===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let a=0;a<r.length;a++)if(this.equalsFn(r[a][0],e))return r.length===1?delete this.inner[t]:r.splice(a,1),this.innerSize--,!0;return!1}forEach(e){da(this.inner,(t,r)=>{for(const[a,l]of r)e(a,l)})}isEmpty(){return dA(this.inner)}size(){return this.innerSize}}/**
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
 */const ZO=new ct(ve.comparator);function or(){return ZO}const NA=new ct(ve.comparator);function au(...i){let e=NA;for(const t of i)e=e.insert(t.key,t);return e}function OA(i){let e=NA;return i.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function na(){return mu()}function DA(){return mu()}function mu(){return new ma(i=>i.toString(),(i,e)=>i.isEqual(e))}const eD=new ct(ve.comparator),tD=new Pt(ve.comparator);function Ue(...i){let e=tD;for(const t of i)e=e.add(t);return e}const nD=new Pt(Oe);function iD(){return nD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jh(e)?"-0":e}}function PA(i){return{integerValue:""+i}}function rD(i,e){return NO(e)?PA(e):iy(i,e)}/**
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
 */class Mf{constructor(){this._=void 0}}function sD(i,e,t){return i instanceof rf?function(a,l){const c={fields:{[gA]:{stringValue:pA},[vA]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&Jg(l)&&(l=Of(l)),l&&(c.fields[yA]=l),{mapValue:c}}(t,e):i instanceof Nu?MA(i,e):i instanceof Ou?VA(i,e):function(a,l){const c=kA(a,l),m=db(c)+db(a.Re);return Gp(c)&&Gp(a.Re)?PA(m):iy(a.serializer,m)}(i,e)}function aD(i,e,t){return i instanceof Nu?MA(i,e):i instanceof Ou?VA(i,e):t}function kA(i,e){return i instanceof sf?function(r){return Gp(r)||function(l){return!!l&&"doubleValue"in l}(r)}(e)?e:{integerValue:0}:null}class rf extends Mf{}class Nu extends Mf{constructor(e){super(),this.elements=e}}function MA(i,e){const t=LA(e);for(const r of i.elements)t.some(a=>Ai(a,r))||t.push(r);return{arrayValue:{values:t}}}class Ou extends Mf{constructor(e){super(),this.elements=e}}function VA(i,e){let t=LA(e);for(const r of i.elements)t=t.filter(a=>!Ai(a,r));return{arrayValue:{values:t}}}class sf extends Mf{constructor(e,t){super(),this.serializer=e,this.Re=t}}function db(i){return vt(i.integerValue||i.doubleValue)}function LA(i){return Zg(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function oD(i,e){return i.field.isEqual(e.field)&&function(r,a){return r instanceof Nu&&a instanceof Nu||r instanceof Ou&&a instanceof Ou?xo(r.elements,a.elements,Ai):r instanceof sf&&a instanceof sf?Ai(r.Re,a.Re):r instanceof rf&&a instanceof rf}(i.transform,e.transform)}class lD{constructor(e,t){this.version=e,this.transformResults=t}}class Ei{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ei}static exists(e){return new Ei(void 0,e)}static updateTime(e){return new Ei(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lh(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Vf{}function UA(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new zA(i.key,Ei.none()):new zu(i.key,i.data,Ei.none());{const t=i.data,r=Un.empty();let a=new Pt(Yt.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?r.delete(l):r.set(l,c),a=a.add(l)}return new pa(i.key,r,new $n(a.toArray()),Ei.none())}}function uD(i,e,t){i instanceof zu?function(a,l,c){const m=a.value.clone(),p=pb(a.fieldTransforms,l,c.transformResults);m.setAll(p),l.convertToFoundDocument(c.version,m).setHasCommittedMutations()}(i,e,t):i instanceof pa?function(a,l,c){if(!Lh(a.precondition,l))return void l.convertToUnknownDocument(c.version);const m=pb(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(jA(a)),p.setAll(m),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(i,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function pu(i,e,t,r){return i instanceof zu?function(l,c,m,p){if(!Lh(l.precondition,c))return m;const g=l.value.clone(),_=gb(l.fieldTransforms,p,c);return g.setAll(_),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(i,e,t,r):i instanceof pa?function(l,c,m,p){if(!Lh(l.precondition,c))return m;const g=gb(l.fieldTransforms,p,c),_=c.data;return _.setAll(jA(l)),_.setAll(g),c.convertToFoundDocument(c.version,_).setHasLocalMutations(),m===null?null:m.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(b=>b.field))}(i,e,t,r):function(l,c,m){return Lh(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):m}(i,e,t)}function cD(i,e){let t=null;for(const r of i.fieldTransforms){const a=e.data.field(r.field),l=kA(r.transform,a||null);l!=null&&(t===null&&(t=Un.empty()),t.set(r.field,l))}return t||null}function mb(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(r,a){return r===void 0&&a===void 0||!(!r||!a)&&xo(r,a,(l,c)=>oD(l,c))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class zu extends Vf{constructor(e,t,r,a=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class pa extends Vf{constructor(e,t,r,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function jA(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=i.data.field(t);e.set(t,r)}}),e}function pb(i,e,t){const r=new Map;Ke(i.length===t.length,32656,{Ve:t.length,me:i.length});for(let a=0;a<t.length;a++){const l=i[a],c=l.transform,m=e.data.field(l.field);r.set(l.field,aD(c,m,t[a]))}return r}function gb(i,e,t){const r=new Map;for(const a of i){const l=a.transform,c=t.data.field(a.field);r.set(a.field,sD(l,c,e))}return r}class zA extends Vf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hD extends Vf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class fD{constructor(e,t,r,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=a}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&uD(l,e,r[a])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=pu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=pu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=DA();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let m=this.applyToLocalView(c,l.mutatedFields);m=t.has(a.key)?null:m;const p=UA(c,m);p!==null&&r.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(we.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ue())}isEqual(e){return this.batchId===e.batchId&&xo(this.mutations,e.mutations,(t,r)=>mb(t,r))&&xo(this.baseMutations,e.baseMutations,(t,r)=>mb(t,r))}}class ry{constructor(e,t,r,a){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=a}static from(e,t,r){Ke(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let a=function(){return eD}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,r[c].version);return new ry(e,t,r,a)}}/**
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
 */class dD{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class mD{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var St,Fe;function pD(i){switch(i){case Z.OK:return be(64938);case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0;default:return be(15467,{code:i})}}function BA(i){if(i===void 0)return ar("GRPC error has no .code"),Z.UNKNOWN;switch(i){case St.OK:return Z.OK;case St.CANCELLED:return Z.CANCELLED;case St.UNKNOWN:return Z.UNKNOWN;case St.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case St.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case St.INTERNAL:return Z.INTERNAL;case St.UNAVAILABLE:return Z.UNAVAILABLE;case St.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case St.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case St.NOT_FOUND:return Z.NOT_FOUND;case St.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case St.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case St.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case St.ABORTED:return Z.ABORTED;case St.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case St.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case St.DATA_LOSS:return Z.DATA_LOSS;default:return be(39323,{code:i})}}(Fe=St||(St={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const gD=new es([4294967295,4294967295],0);function yb(i){const e=cA().encode(i),t=new nA;return t.update(e),new Uint8Array(t.digest())}function vb(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new es([t,r],0),new es([a,l],0)]}class sy{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ou(`Invalid padding: ${t}`);if(r<0)throw new ou(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ou(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ou(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=es.fromNumber(this.pe)}we(e,t,r){let a=e.add(t.multiply(es.fromNumber(r)));return a.compare(gD)===1&&(a=new es([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=yb(e),[r,a]=vb(t);for(let l=0;l<this.hashCount;l++){const c=this.we(r,a,l);if(!this.Se(c))return!1}return!0}static create(e,t,r){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new sy(l,a,t);return r.forEach(m=>c.insert(m)),c}insert(e){if(this.pe===0)return;const t=yb(e),[r,a]=vb(t);for(let l=0;l<this.hashCount;l++){const c=this.we(r,a,l);this.be(c)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ou extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Lf{constructor(e,t,r,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const a=new Map;return a.set(e,Bu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Lf(we.min(),a,new ct(Oe),or(),Ue())}}class Bu{constructor(e,t,r,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Bu(r,t,Ue(),Ue(),Ue())}}/**
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
 */class Uh{constructor(e,t,r,a){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=a}}class FA{constructor(e,t){this.targetId=e,this.Ce=t}}class qA{constructor(e,t,r=Xt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=a}}class _b{constructor(){this.Fe=0,this.Me=Eb(),this.xe=Xt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Ue(),t=Ue(),r=Ue();return this.Me.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:r=r.add(a);break;default:be(38017,{changeType:l})}}),new Bu(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=Eb()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ke(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class yD{constructor(e){this.ze=e,this.je=new Map,this.He=or(),this.Je=Sh(),this.Ye=Sh(),this.Ze=new ct(Oe)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:be(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,a)=>{this.it(a)&&t(a)})}ot(e){const t=e.targetId,r=e.Ce.count,a=this._t(t);if(a){const l=a.target;if(Kp(l))if(r===0){const c=new ve(l.path);this.tt(t,c,nn.newNoDocument(c,we.min()))}else Ke(r===1,20013,{expectedCount:r});else{const c=this.ut(t);if(c!==r){const m=this.ct(e),p=m?this.lt(m,e,c):1;if(p!==0){this.st(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,g)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:a=0},hashCount:l=0}=t;let c,m;try{c=as(r).toUint8Array()}catch(p){if(p instanceof mA)return Co("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new sy(c,a,l)}catch(p){return Co(p instanceof ou?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.pe===0?null:m}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let a=0;return r.forEach(l=>{const c=this.ze.Pt(),m=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(m)||(this.tt(t,l,null),a++)}),a}It(e){const t=new Map;this.je.forEach((l,c)=>{const m=this._t(c);if(m){if(l.current&&Kp(m.target)){const p=new ve(m.target.path);this.Et(p).has(c)||this.dt(c,p)||this.tt(c,p,nn.newNoDocument(p,e))}l.Le&&(t.set(c,l.qe()),l.Qe())}});let r=Ue();this.Ye.forEach((l,c)=>{let m=!0;c.forEachWhile(p=>{const g=this._t(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(r=r.add(l))}),this.He.forEach((l,c)=>c.setReadTime(e));const a=new Lf(e,t,this.Ze,this.He,r);return this.He=or(),this.Je=Sh(),this.Ye=Sh(),this.Ze=new ct(Oe),a}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const a=this.rt(e);this.dt(e,t)?a.$e(t,1):a.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new _b,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new Pt(Oe),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Pt(Oe),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new _b),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Sh(){return new ct(ve.comparator)}function Eb(){return new ct(ve.comparator)}const vD={asc:"ASCENDING",desc:"DESCENDING"},_D={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ED={and:"AND",or:"OR"};class bD{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Qp(i,e){return i.useProto3Json||Nf(e)?e:{value:e}}function af(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function HA(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function TD(i,e){return af(i,e.toTimestamp())}function bi(i){return Ke(!!i,49232),we.fromTimestamp(function(t){const r=ss(t);return new It(r.seconds,r.nanos)}(i))}function ay(i,e){return Xp(i,e).canonicalString()}function Xp(i,e){const t=function(a){return new lt(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?t:t.child(e)}function GA(i){const e=lt.fromString(i);return Ke(XA(e),10190,{key:e.toString()}),e}function Wp(i,e){return ay(i.databaseId,e.path)}function fp(i,e){const t=GA(e);if(t.get(1)!==i.databaseId.projectId)throw new pe(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new pe(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new ve(KA(t))}function $A(i,e){return ay(i.databaseId,e)}function AD(i){const e=GA(i);return e.length===4?lt.emptyPath():KA(e)}function Jp(i){return new lt(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function KA(i){return Ke(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function bb(i,e,t){return{name:Wp(i,e),fields:t.value.mapValue.fields}}function SD(i,e){let t;if("targetChange"in e){e.targetChange;const r=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:be(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,_){return g.useProto3Json?(Ke(_===void 0||typeof _=="string",58123),Xt.fromBase64String(_||"")):(Ke(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),Xt.fromUint8Array(_||new Uint8Array))}(i,e.targetChange.resumeToken),c=e.targetChange.cause,m=c&&function(g){const _=g.code===void 0?Z.UNKNOWN:BA(g.code);return new pe(_,g.message||"")}(c);t=new qA(r,a,l,m||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const a=fp(i,r.document.name),l=bi(r.document.updateTime),c=r.document.createTime?bi(r.document.createTime):we.min(),m=new Un({mapValue:{fields:r.document.fields}}),p=nn.newFoundDocument(a,l,c,m),g=r.targetIds||[],_=r.removedTargetIds||[];t=new Uh(g,_,p.key,p)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const a=fp(i,r.document),l=r.readTime?bi(r.readTime):we.min(),c=nn.newNoDocument(a,l),m=r.removedTargetIds||[];t=new Uh([],m,c.key,c)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const a=fp(i,r.document),l=r.removedTargetIds||[];t=new Uh([],l,a,null)}else{if(!("filter"in e))return be(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:a=0,unchangedNames:l}=r,c=new mD(a,l),m=r.targetId;t=new FA(m,c)}}return t}function wD(i,e){let t;if(e instanceof zu)t={update:bb(i,e.key,e.value)};else if(e instanceof zA)t={delete:Wp(i,e.key)};else if(e instanceof pa)t={update:bb(i,e.key,e.data),updateMask:kD(e.fieldMask)};else{if(!(e instanceof hD))return be(16599,{ft:e.type});t={verify:Wp(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(l,c){const m=c.transform;if(m instanceof rf)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Nu)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ou)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof sf)return{fieldPath:c.field.canonicalString(),increment:m.Re};throw be(20930,{transform:c.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:TD(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:be(27497)}(i,e.precondition)),t}function ID(i,e){return i&&i.length>0?(Ke(e!==void 0,14353),i.map(t=>function(a,l){let c=a.updateTime?bi(a.updateTime):bi(l);return c.isEqual(we.min())&&(c=bi(l)),new lD(c,a.transformResults||[])}(t,e))):[]}function RD(i,e){return{documents:[$A(i,e.path)]}}function CD(i,e){const t={structuredQuery:{}},r=e.path;let a;e.collectionGroup!==null?(a=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=$A(i,a);const l=function(g){if(g.length!==0)return QA(Si.create(g,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(_=>function(S){return{field:yo(S.field),direction:OD(S.dir)}}(_))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const m=Qp(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{gt:t,parent:a}}function xD(i){let e=AD(i.parent);const t=i.structuredQuery,r=t.from?t.from.length:0;let a=null;if(r>0){Ke(r===1,65062);const _=t.from[0];_.allDescendants?a=_.collectionId:e=e.child(_.collectionId)}let l=[];t.where&&(l=function(b){const S=YA(b);return S instanceof Si&&SA(S)?S.getFilters():[S]}(t.where));let c=[];t.orderBy&&(c=function(b){return b.map(S=>function(G){return new nf(vo(G.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(G.direction))}(S))}(t.orderBy));let m=null;t.limit&&(m=function(b){let S;return S=typeof b=="object"?b.value:b,Nf(S)?null:S}(t.limit));let p=null;t.startAt&&(p=function(b){const S=!!b.before,j=b.values||[];return new tf(j,S)}(t.startAt));let g=null;return t.endAt&&(g=function(b){const S=!b.before,j=b.values||[];return new tf(j,S)}(t.endAt)),YO(e,a,c,l,m,"F",p,g)}function ND(i,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return be(28987,{purpose:a})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function YA(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=vo(t.unaryFilter.field);return Dt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const a=vo(t.unaryFilter.field);return Dt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=vo(t.unaryFilter.field);return Dt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=vo(t.unaryFilter.field);return Dt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return be(61313);default:return be(60726)}}(i):i.fieldFilter!==void 0?function(t){return Dt.create(vo(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return be(58110);default:return be(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Si.create(t.compositeFilter.filters.map(r=>YA(r)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return be(1026)}}(t.compositeFilter.op))}(i):be(30097,{filter:i})}function OD(i){return vD[i]}function DD(i){return _D[i]}function PD(i){return ED[i]}function yo(i){return{fieldPath:i.canonicalString()}}function vo(i){return Yt.fromServerFormat(i.fieldPath)}function QA(i){return i instanceof Dt?function(t){if(t.op==="=="){if(lb(t.value))return{unaryFilter:{field:yo(t.field),op:"IS_NAN"}};if(ob(t.value))return{unaryFilter:{field:yo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(lb(t.value))return{unaryFilter:{field:yo(t.field),op:"IS_NOT_NAN"}};if(ob(t.value))return{unaryFilter:{field:yo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yo(t.field),op:DD(t.op),value:t.value}}}(i):i instanceof Si?function(t){const r=t.getFilters().map(a=>QA(a));return r.length===1?r[0]:{compositeFilter:{op:PD(t.op),filters:r}}}(i):be(54877,{filter:i})}function kD(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function XA(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class Xr{constructor(e,t,r,a,l=we.min(),c=we.min(),m=Xt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(e){return new Xr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class MD{constructor(e){this.wt=e}}function VD(i){const e=xD({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Yp(e,e.limit,"L"):e}/**
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
 */class LD{constructor(){this.Cn=new UD}addToCollectionParentIndex(e,t){return this.Cn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(rs.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(rs.min())}updateCollectionGroup(e,t,r){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class UD{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t]||new Pt(lt.comparator),l=!a.has(r);return this.index[t]=a.add(r),l}has(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t];return a&&a.has(r)}getEntries(e){return(this.index[e]||new Pt(lt.comparator)).toArray()}}/**
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
 */const Tb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},WA=41943040;class dn{static withCacheSize(e){return new dn(e,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */dn.DEFAULT_COLLECTION_PERCENTILE=10,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dn.DEFAULT=new dn(WA,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dn.DISABLED=new dn(-1,0,0);/**
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
 */class Do{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Do(0)}static lr(){return new Do(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab="LruGarbageCollector",jD=1048576;function Sb([i,e],[t,r]){const a=Oe(i,t);return a===0?Oe(e,r):a}class zD{constructor(e){this.Er=e,this.buffer=new Pt(Sb),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Sb(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class BD{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){ue(Ab,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ho(t)?ue(Ab,"Ignoring IndexedDB error during garbage collection: ",t):await qo(t)}await this.mr(3e5)})}}class FD{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return W.resolve(xf.le);const r=new zD(t);return this.gr.forEachTarget(e,a=>r.Rr(a.sequenceNumber)).next(()=>this.gr.yr(e,a=>r.Rr(a))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(Tb)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Tb):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,a,l,c,m,p,g;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),a=this.params.maximumSequenceNumbersToCollect):a=b,c=Date.now(),this.nthSequenceNumber(e,a))).next(b=>(r=b,m=Date.now(),this.removeTargets(e,r,t))).next(b=>(l=b,p=Date.now(),this.removeOrphanedDocuments(e,r))).next(b=>(g=Date.now(),po()<=ke.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-_}ms
	Determined least recently used ${a} in `+(m-c)+`ms
	Removed ${l} targets in `+(p-m)+`ms
	Removed ${b} documents in `+(g-p)+`ms
Total Duration: ${g-_}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:b})))}}function qD(i,e){return new FD(i,e)}/**
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
 */class HD{constructor(){this.changes=new ma(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,nn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?W.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class GD{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class $D{constructor(e,t,r,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=a}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(r=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(r!==null&&pu(r.mutation,a,$n.empty(),It.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Ue()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Ue()){const a=na();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,r).next(l=>{let c=au();return l.forEach((m,p)=>{c=c.insert(m,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const r=na();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Ue()))}populateOverlays(e,t,r){const a=[];return r.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,m)=>{t.set(c,m)})})}computeViews(e,t,r,a){let l=or();const c=mu(),m=function(){return mu()}();return t.forEach((p,g)=>{const _=r.get(g.key);a.has(g.key)&&(_===void 0||_.mutation instanceof pa)?l=l.insert(g.key,g):_!==void 0?(c.set(g.key,_.mutation.getFieldMask()),pu(_.mutation,g,_.mutation.getFieldMask(),It.now())):c.set(g.key,$n.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((g,_)=>c.set(g,_)),t.forEach((g,_)=>{var b;return m.set(g,new GD(_,(b=c.get(g))!==null&&b!==void 0?b:null))}),m))}recalculateAndSaveOverlays(e,t){const r=mu();let a=new ct((c,m)=>c-m),l=Ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const m of c)m.keys().forEach(p=>{const g=t.get(p);if(g===null)return;let _=r.get(p)||$n.empty();_=m.applyToLocalView(g,_),r.set(p,_);const b=(a.get(m.batchId)||Ue()).add(p);a=a.insert(m.batchId,b)})}).next(()=>{const c=[],m=a.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),g=p.key,_=p.value,b=DA();_.forEach(S=>{if(!l.has(S)){const j=UA(t.get(S),r.get(S));j!==null&&b.set(S,j),l=l.add(S)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,b))}return W.waitFor(c)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,a){return function(c){return ve.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):QO(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,a):this.getDocumentsMatchingCollectionQuery(e,t,r,a)}getNextDocuments(e,t,r,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,a-l.size):W.resolve(na());let m=Iu,p=l;return c.next(g=>W.forEach(g,(_,b)=>(m<b.largestBatchId&&(m=b.largestBatchId),l.get(_)?W.resolve():this.remoteDocumentCache.getEntry(e,_).next(S=>{p=p.insert(_,S)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,p,g,Ue())).next(_=>({batchId:m,changes:OA(_)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ve(t)).next(r=>{let a=au();return r.isFoundDocument()&&(a=a.insert(r.key,r)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,r,a){const l=t.collectionGroup;let c=au();return this.indexManager.getCollectionParents(e,l).next(m=>W.forEach(m,p=>{const g=function(b,S){return new Df(S,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,r,a).next(_=>{_.forEach((b,S)=>{c=c.insert(b,S)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,r,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,l,a))).next(c=>{l.forEach((p,g)=>{const _=g.getKey();c.get(_)===null&&(c=c.insert(_,nn.newInvalidDocument(_)))});let m=au();return c.forEach((p,g)=>{const _=l.get(p);_!==void 0&&pu(_.mutation,g,$n.empty(),It.now()),kf(t,g)&&(m=m.insert(p,g))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return W.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:bi(a.createTime)}}(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(a){return{name:a.name,query:VD(a.bundledQuery),readTime:bi(a.readTime)}}(t)),W.resolve()}}/**
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
 */class YD{constructor(){this.overlays=new ct(ve.comparator),this.Qr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const r=na();return W.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&r.set(a,l)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((a,l)=>{this.bt(e,t,l)}),W.resolve()}removeOverlaysForBatchId(e,t,r){const a=this.Qr.get(r);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Qr.delete(r)),W.resolve()}getOverlaysForCollection(e,t,r){const a=na(),l=t.length+1,c=new ve(t.child("")),m=this.overlays.getIteratorFrom(c);for(;m.hasNext();){const p=m.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>r&&a.set(p.getKey(),p)}return W.resolve(a)}getOverlaysForCollectionGroup(e,t,r,a){let l=new ct((g,_)=>g-_);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>r){let _=l.get(g.largestBatchId);_===null&&(_=na(),l=l.insert(g.largestBatchId,_)),_.set(g.getKey(),g)}}const m=na(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,_)=>m.set(g,_)),!(m.size()>=a)););return W.resolve(m)}bt(e,t,r){const a=this.overlays.get(r.key);if(a!==null){const c=this.Qr.get(a.largestBatchId).delete(r.key);this.Qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new dD(t,r));let l=this.Qr.get(t);l===void 0&&(l=Ue(),this.Qr.set(t,l)),this.Qr.set(t,l.add(r.key))}}/**
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
 */class QD{constructor(){this.sessionToken=Xt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
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
 */class oy{constructor(){this.$r=new Pt(zt.Ur),this.Kr=new Pt(zt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new zt(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new zt(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new ve(new lt([])),r=new zt(t,e),a=new zt(t,e+1),l=[];return this.Kr.forEachInRange([r,a],c=>{this.zr(c),l.push(c.key)}),l}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new ve(new lt([])),r=new zt(t,e),a=new zt(t,e+1);let l=Ue();return this.Kr.forEachInRange([r,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new zt(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class zt{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return ve.comparator(e.key,t.key)||Oe(e.Zr,t.Zr)}static Wr(e,t){return Oe(e.Zr,t.Zr)||ve.comparator(e.key,t.key)}}/**
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
 */class XD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new Pt(zt.Ur)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,a){const l=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new fD(l,t,r,a);this.mutationQueue.push(c);for(const m of a)this.Xr=this.Xr.add(new zt(m.key,l)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return W.resolve(c)}lookupMutationBatch(e,t){return W.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=this.ti(r),l=a<0?0:a;return W.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?Wg:this.nr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new zt(t,0),a=new zt(t,Number.POSITIVE_INFINITY),l=[];return this.Xr.forEachInRange([r,a],c=>{const m=this.ei(c.Zr);l.push(m)}),W.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Pt(Oe);return t.forEach(a=>{const l=new zt(a,0),c=new zt(a,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([l,c],m=>{r=r.add(m.Zr)})}),W.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1;let l=r;ve.isDocumentKey(l)||(l=l.child(""));const c=new zt(new ve(l),0);let m=new Pt(Oe);return this.Xr.forEachWhile(p=>{const g=p.key.path;return!!r.isPrefixOf(g)&&(g.length===a&&(m=m.add(p.Zr)),!0)},c),W.resolve(this.ni(m))}ni(e){const t=[];return e.forEach(r=>{const a=this.ei(r);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){Ke(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return W.forEach(t.mutations,a=>{const l=new zt(a.key,t.batchId);return r=r.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new zt(t,0),a=this.Xr.firstAfterOrEqual(r);return W.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class WD{constructor(e){this.ii=e,this.docs=function(){return new ct(ve.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,a=this.docs.get(r),l=a?a.size:0,c=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return W.resolve(r?r.document.mutableCopy():nn.newInvalidDocument(t))}getEntries(e,t){let r=or();return t.forEach(a=>{const l=this.docs.get(a);r=r.insert(a,l?l.document.mutableCopy():nn.newInvalidDocument(a))}),W.resolve(r)}getDocumentsMatchingQuery(e,t,r,a){let l=or();const c=t.path,m=new ve(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:g,value:{document:_}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||IO(wO(_),r)<=0||(a.has(_.key)||kf(t,_))&&(l=l.insert(_.key,_.mutableCopy()))}return W.resolve(l)}getAllFromCollectionGroup(e,t,r,a){be(9500)}si(e,t){return W.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new JD(this)}getSize(e){return W.resolve(this.size)}}class JD extends HD{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,a)=>{a.isValidDocument()?t.push(this.Br.addEntry(e,a)):this.Br.removeEntry(r)}),W.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class ZD{constructor(e){this.persistence=e,this.oi=new ma(t=>ey(t),ty),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this._i=0,this.ai=new oy,this.targetCount=0,this.ui=Do.cr()}forEachTarget(e,t){return this.oi.forEach((r,a)=>t(a)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),W.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new Do(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.Tr(t),W.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,r){let a=0;const l=[];return this.oi.forEach((c,m)=>{m.sequenceNumber<=t&&r.get(m.targetId)===null&&(this.oi.delete(c),l.push(this.removeMatchingKeysForTargetId(e,m.targetId)),a++)}),W.waitFor(l).next(()=>a)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return W.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),W.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),W.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return W.resolve(r)}containsKey(e,t){return W.resolve(this.ai.containsKey(t))}}/**
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
 */class JA{constructor(e,t){this.ci={},this.overlays={},this.li=new xf(0),this.hi=!1,this.hi=!0,this.Pi=new QD,this.referenceDelegate=e(this),this.Ti=new ZD(this),this.indexManager=new LD,this.remoteDocumentCache=function(a){return new WD(a)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new MD(t),this.Ei=new KD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new YD,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new XD(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){ue("MemoryPersistence","Starting transaction:",e);const a=new eP(this.li.next());return this.referenceDelegate.di(),r(a).next(l=>this.referenceDelegate.Ai(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ri(e,t){return W.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class eP extends CO{constructor(e){super(),this.currentSequenceNumber=e}}class ly{constructor(e){this.persistence=e,this.Vi=new oy,this.mi=null}static fi(e){return new ly(e)}get gi(){if(this.mi)return this.mi;throw be(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),W.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),W.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(a=>this.gi.add(a.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.gi.add(l.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.gi,r=>{const a=ve.fromPath(r);return this.pi(e,a).next(l=>{l||t.removeEntry(a,we.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return W.or([()=>W.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class of{constructor(e,t){this.persistence=e,this.yi=new ma(r=>OO(r.path),(r,a)=>r.isEqual(a)),this.garbageCollector=qD(this,t)}static fi(e,t){return new of(e,t)}di(){}Ai(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}Sr(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return W.forEach(this.yi,(r,a)=>this.Dr(e,r,a).next(l=>l?W.resolve():t(a)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.si(e,c=>this.Dr(e,c,t).next(m=>{m||(r++,l.removeEntry(c,we.min()))})).next(()=>l.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),W.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),W.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Mh(e.data.value)),t}Dr(e,t,r){return W.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.yi.get(t);return W.resolve(a!==void 0&&a>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class uy{constructor(e,t,r,a){this.targetId=e,this.fromCache=t,this.ds=r,this.As=a}static Rs(e,t){let r=Ue(),a=Ue();for(const l of t.docChanges)switch(l.type){case 0:r=r.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new uy(e,t.fromCache,r,a)}}/**
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
 */class tP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class nP{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return QC()?8:xO(tt())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,a){const l={result:null};return this.ws(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.Ss(e,t,a,r).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new tP;return this.bs(e,t,c).next(m=>{if(l.result=m,this.fs)return this.Ds(e,t,c,m.size)})}).next(()=>l.result)}Ds(e,t,r,a){return r.documentReadCount<this.gs?(po()<=ke.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",go(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),W.resolve()):(po()<=ke.DEBUG&&ue("QueryEngine","Query:",go(t),"scans",r.documentReadCount,"local documents and returns",a,"documents as results."),r.documentReadCount>this.ps*a?(po()<=ke.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",go(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_i(t))):W.resolve())}ws(e,t){if(fb(t))return W.resolve(null);let r=_i(t);return this.indexManager.getIndexType(e,r).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=Yp(t,null,"F"),r=_i(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(l=>{const c=Ue(...l);return this.ys.getDocuments(e,c).next(m=>this.indexManager.getMinOffset(e,r).next(p=>{const g=this.vs(t,m);return this.Cs(t,g,c,p.readTime)?this.ws(e,Yp(t,null,"F")):this.Fs(e,g,t,p)}))})))}Ss(e,t,r,a){return fb(t)||a.isEqual(we.min())?W.resolve(null):this.ys.getDocuments(e,r).next(l=>{const c=this.vs(t,l);return this.Cs(t,c,r,a)?W.resolve(null):(po()<=ke.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),go(t)),this.Fs(e,c,t,SO(a,Iu)).next(m=>m))})}vs(e,t){let r=new Pt(xA(e));return t.forEach((a,l)=>{kf(e,l)&&(r=r.add(l))}),r}Cs(e,t,r,a){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}bs(e,t,r){return po()<=ke.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",go(t)),this.ys.getDocumentsMatchingQuery(e,t,rs.min(),r)}Fs(e,t,r,a){return this.ys.getDocumentsMatchingQuery(e,r,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="LocalStore",iP=3e8;class rP{constructor(e,t,r,a){this.persistence=e,this.Ms=t,this.serializer=a,this.xs=new ct(Oe),this.Os=new ma(l=>ey(l),ty),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $D(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function sP(i,e,t,r){return new rP(i,e,t,r)}async function ZA(i,e){const t=Re(i);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let a;return t.mutationQueue.getAllMutationBatches(r).next(l=>(a=l,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(l=>{const c=[],m=[];let p=Ue();for(const g of a){c.push(g.batchId);for(const _ of g.mutations)p=p.add(_.key)}for(const g of l){m.push(g.batchId);for(const _ of g.mutations)p=p.add(_.key)}return t.localDocuments.getDocuments(r,p).next(g=>({ks:g,removedBatchIds:c,addedBatchIds:m}))})})}function aP(i,e){const t=Re(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const a=e.batch.keys(),l=t.Bs.newChangeBuffer({trackRemovals:!0});return function(m,p,g,_){const b=g.batch,S=b.keys();let j=W.resolve();return S.forEach(G=>{j=j.next(()=>_.getEntry(p,G)).next(Q=>{const F=g.docVersions.get(G);Ke(F!==null,48541),Q.version.compareTo(F)<0&&(b.applyToRemoteDocument(Q,g),Q.isValidDocument()&&(Q.setReadTime(g.commitVersion),_.addEntry(Q)))})}),j.next(()=>m.mutationQueue.removeMutationBatch(p,b))}(t,r,e,l).next(()=>l.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(m){let p=Ue();for(let g=0;g<m.mutationResults.length;++g)m.mutationResults[g].transformResults.length>0&&(p=p.add(m.batch.mutations[g].key));return p}(e))).next(()=>t.localDocuments.getDocuments(r,a))})}function eS(i){const e=Re(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function oP(i,e){const t=Re(i),r=e.snapshotVersion;let a=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.Bs.newChangeBuffer({trackRemovals:!0});a=t.xs;const m=[];e.targetChanges.forEach((_,b)=>{const S=a.get(b);if(!S)return;m.push(t.Ti.removeMatchingKeys(l,_.removedDocuments,b).next(()=>t.Ti.addMatchingKeys(l,_.addedDocuments,b)));let j=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(b)!==null?j=j.withResumeToken(Xt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):_.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(_.resumeToken,r)),a=a.insert(b,j),function(Q,F,ee){return Q.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=iP?!0:ee.addedDocuments.size+ee.modifiedDocuments.size+ee.removedDocuments.size>0}(S,j,_)&&m.push(t.Ti.updateTargetData(l,j))});let p=or(),g=Ue();if(e.documentUpdates.forEach(_=>{e.resolvedLimboDocuments.has(_)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(l,_))}),m.push(lP(l,c,e.documentUpdates).next(_=>{p=_.qs,g=_.Qs})),!r.isEqual(we.min())){const _=t.Ti.getLastRemoteSnapshotVersion(l).next(b=>t.Ti.setTargetsMetadata(l,l.currentSequenceNumber,r));m.push(_)}return W.waitFor(m).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(t.xs=a,l))}function lP(i,e,t){let r=Ue(),a=Ue();return t.forEach(l=>r=r.add(l)),e.getEntries(i,r).next(l=>{let c=or();return t.forEach((m,p)=>{const g=l.get(m);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(m)),p.isNoDocument()&&p.version.isEqual(we.min())?(e.removeEntry(m,p.readTime),c=c.insert(m,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(m,p)):ue(cy,"Ignoring outdated watch update for ",m,". Current version:",g.version," Watch version:",p.version)}),{qs:c,Qs:a}})}function uP(i,e){const t=Re(i);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Wg),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function cP(i,e){const t=Re(i);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let a;return t.Ti.getTargetData(r,e).next(l=>l?(a=l,W.resolve(a)):t.Ti.allocateTargetId(r).next(c=>(a=new Xr(e,c,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,a).next(()=>a))))}).then(r=>{const a=t.xs.get(r.targetId);return(a===null||r.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}async function Zp(i,e,t){const r=Re(i),a=r.xs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",l,c=>r.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!Ho(c))throw c;ue(cy,`Failed to update sequence numbers for target ${e}: ${c}`)}r.xs=r.xs.remove(e),r.Os.delete(a.target)}function wb(i,e,t){const r=Re(i);let a=we.min(),l=Ue();return r.persistence.runTransaction("Execute query","readwrite",c=>function(p,g,_){const b=Re(p),S=b.Os.get(_);return S!==void 0?W.resolve(b.xs.get(S)):b.Ti.getTargetData(g,_)}(r,c,_i(e)).next(m=>{if(m)return a=m.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(c,m.targetId).next(p=>{l=p})}).next(()=>r.Ms.getDocumentsMatchingQuery(c,e,t?a:we.min(),t?l:Ue())).next(m=>(hP(r,WO(e),m),{documents:m,$s:l})))}function hP(i,e,t){let r=i.Ns.get(e)||we.min();t.forEach((a,l)=>{l.readTime.compareTo(r)>0&&(r=l.readTime)}),i.Ns.set(e,r)}class Ib{constructor(){this.activeTargetIds=iD()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fP{constructor(){this.xo=new Ib,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Ib,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class dP{No(e){}shutdown(){}}/**
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
 */const Rb="ConnectivityMonitor";class Cb{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){ue(Rb,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){ue(Rb,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wh=null;function eg(){return wh===null?wh=function(){return 268435456+Math.round(2147483648*Math.random())}():wh++,"0x"+wh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp="RestConnection",mP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class pP{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${a}`,this.Go=this.databaseId.database===Zh?`project_id=${r}`:`project_id=${r}&database_id=${a}`}zo(e,t,r,a,l){const c=eg(),m=this.jo(e,t.toUriEncodedString());ue(dp,`Sending RPC '${e}' ${c}:`,m,r);const p={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(p,a,l);const{host:g}=new URL(m),_=jo(g);return this.Jo(e,m,p,r,_).then(b=>(ue(dp,`Received RPC '${e}' ${c}: `,b),b),b=>{throw Co(dp,`RPC '${e}' ${c} failed with error: `,b,"url: ",m,"request:",r),b})}Yo(e,t,r,a,l,c){return this.zo(e,t,r,a,l)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),r&&r.headers.forEach((a,l)=>e[l]=a)}jo(e,t){const r=mP[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
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
 */class gP{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const en="WebChannelConnection";class yP extends pP{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,a,l){const c=eg();return new Promise((m,p)=>{const g=new iA;g.setWithCredentials(!0),g.listenOnce(rA.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case kh.NO_ERROR:const b=g.getResponseJson();ue(en,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(b)),m(b);break;case kh.TIMEOUT:ue(en,`RPC '${e}' ${c} timed out`),p(new pe(Z.DEADLINE_EXCEEDED,"Request time out"));break;case kh.HTTP_ERROR:const S=g.getStatus();if(ue(en,`RPC '${e}' ${c} failed with status:`,S,"response text:",g.getResponseText()),S>0){let j=g.getResponseJson();Array.isArray(j)&&(j=j[0]);const G=j==null?void 0:j.error;if(G&&G.status&&G.message){const Q=function(ee){const ie=ee.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(ie)>=0?ie:Z.UNKNOWN}(G.status);p(new pe(Q,G.message))}else p(new pe(Z.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new pe(Z.UNAVAILABLE,"Connection failed."));break;default:be(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{ue(en,`RPC '${e}' ${c} completed.`)}});const _=JSON.stringify(a);ue(en,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",_,r,15)})}T_(e,t,r){const a=eg(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=oA(),m=aA(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Ho(p.initMessageHeaders,t,r),p.encodeInitMessageHeaders=!0;const _=l.join("");ue(en,`Creating RPC '${e}' stream ${a}: ${_}`,p);const b=c.createWebChannel(_,p);let S=!1,j=!1;const G=new gP({Zo:F=>{j?ue(en,`Not sending because RPC '${e}' stream ${a} is closed:`,F):(S||(ue(en,`Opening RPC '${e}' stream ${a} transport.`),b.open(),S=!0),ue(en,`RPC '${e}' stream ${a} sending:`,F),b.send(F))},Xo:()=>b.close()}),Q=(F,ee,ie)=>{F.listen(ee,ne=>{try{ie(ne)}catch(fe){setTimeout(()=>{throw fe},0)}})};return Q(b,su.EventType.OPEN,()=>{j||(ue(en,`RPC '${e}' stream ${a} transport opened.`),G.__())}),Q(b,su.EventType.CLOSE,()=>{j||(j=!0,ue(en,`RPC '${e}' stream ${a} transport closed`),G.u_())}),Q(b,su.EventType.ERROR,F=>{j||(j=!0,Co(en,`RPC '${e}' stream ${a} transport errored. Name:`,F.name,"Message:",F.message),G.u_(new pe(Z.UNAVAILABLE,"The operation could not be completed")))}),Q(b,su.EventType.MESSAGE,F=>{var ee;if(!j){const ie=F.data[0];Ke(!!ie,16349);const ne=ie,fe=(ne==null?void 0:ne.error)||((ee=ne[0])===null||ee===void 0?void 0:ee.error);if(fe){ue(en,`RPC '${e}' stream ${a} received error:`,fe);const ce=fe.status;let Ce=function(C){const P=St[C];if(P!==void 0)return BA(P)}(ce),D=fe.message;Ce===void 0&&(Ce=Z.INTERNAL,D="Unknown error status: "+ce+" with message "+fe.message),j=!0,G.u_(new pe(Ce,D)),b.close()}else ue(en,`RPC '${e}' stream ${a} received:`,ie),G.c_(ie)}}),Q(m,sA.STAT_EVENT,F=>{F.stat===Fp.PROXY?ue(en,`RPC '${e}' stream ${a} detected buffering proxy`):F.stat===Fp.NOPROXY&&ue(en,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{G.a_()},0),G}}function mp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(i){return new bD(i,!0)}/**
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
 */class tS{constructor(e,t,r=1e3,a=1.5,l=6e4){this.xi=e,this.timerId=t,this.I_=r,this.E_=a,this.d_=l,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),a=Math.max(0,t-r);a>0&&ue("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,a,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
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
 */const xb="PersistentStream";class nS{constructor(e,t,r,a,l,c,m,p){this.xi=e,this.y_=r,this.w_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new tS(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===Z.RESOURCE_EXHAUSTED?(ar(t.toString()),ar("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,a])=>{this.S_===t&&this.K_(r,a)},r=>{e(()=>{const a=new pe(Z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(a)})})}K_(e,t){const r=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(a=>{r(()=>this.W_(a))}),this.stream.onMessage(a=>{r(()=>++this.v_==1?this.z_(a):this.onNext(a))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return ue(xb,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(ue(xb,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vP extends nS{constructor(e,t,r,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,a,c),this.serializer=l}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=SD(this.serializer,e),r=function(l){if(!("targetChange"in l))return we.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?we.min():c.readTime?bi(c.readTime):we.min()}(e);return this.listener.j_(t,r)}H_(e){const t={};t.database=Jp(this.serializer),t.addTarget=function(l,c){let m;const p=c.target;if(m=Kp(p)?{documents:RD(l,p)}:{query:CD(l,p).gt},m.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){m.resumeToken=HA(l,c.resumeToken);const g=Qp(l,c.expectedCount);g!==null&&(m.expectedCount=g)}else if(c.snapshotVersion.compareTo(we.min())>0){m.readTime=af(l,c.snapshotVersion.toTimestamp());const g=Qp(l,c.expectedCount);g!==null&&(m.expectedCount=g)}return m}(this.serializer,e);const r=ND(this.serializer,e);r&&(t.labels=r),this.L_(t)}J_(e){const t={};t.database=Jp(this.serializer),t.removeTarget=e,this.L_(t)}}class _P extends nS{constructor(e,t,r,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,a,c),this.serializer=l}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return Ke(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ke(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){Ke(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=ID(e.writeResults,e.commitTime),r=bi(e.commitTime);return this.listener.ea(r,t)}ta(){const e={};e.database=Jp(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>wD(this.serializer,r))};this.L_(t)}}/**
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
 */class EP{}class bP extends EP{constructor(e,t,r,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=a,this.na=!1}ra(){if(this.na)throw new pe(Z.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,a){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.zo(e,Xp(t,r),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new pe(Z.UNKNOWN,l.toString())})}Yo(e,t,r,a,l){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,m])=>this.connection.Yo(e,Xp(t,r),a,c,m,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new pe(Z.UNKNOWN,c.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class TP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(ar(t),this.oa=!1):ue("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
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
 */const oa="RemoteStore";class AP{constructor(e,t,r,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=l,this.Ea.No(c=>{r.enqueueAndForget(async()=>{ga(this)&&(ue(oa,"Restarting streams for network reachability change."),await async function(p){const g=Re(p);g.Ta.add(4),await Fu(g),g.da.set("Unknown"),g.Ta.delete(4),await jf(g)}(this))})}),this.da=new TP(r,a)}}async function jf(i){if(ga(i))for(const e of i.Ia)await e(!0)}async function Fu(i){for(const e of i.Ia)await e(!1)}function iS(i,e){const t=Re(i);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),my(t)?dy(t):Go(t).M_()&&fy(t,e))}function hy(i,e){const t=Re(i),r=Go(t);t.Pa.delete(e),r.M_()&&rS(t,e),t.Pa.size===0&&(r.M_()?r.N_():ga(t)&&t.da.set("Unknown"))}function fy(i,e){if(i.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Go(i).H_(e)}function rS(i,e){i.Aa.Ke(e),Go(i).J_(e)}function dy(i){i.Aa=new yD({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>i.Pa.get(e)||null,Pt:()=>i.datastore.serializer.databaseId}),Go(i).start(),i.da._a()}function my(i){return ga(i)&&!Go(i).F_()&&i.Pa.size>0}function ga(i){return Re(i).Ta.size===0}function sS(i){i.Aa=void 0}async function SP(i){i.da.set("Online")}async function wP(i){i.Pa.forEach((e,t)=>{fy(i,e)})}async function IP(i,e){sS(i),my(i)?(i.da.ca(e),dy(i)):i.da.set("Unknown")}async function RP(i,e,t){if(i.da.set("Online"),e instanceof qA&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const m of l.targetIds)a.Pa.has(m)&&(await a.remoteSyncer.rejectListen(m,c),a.Pa.delete(m),a.Aa.removeTarget(m))}(i,e)}catch(r){ue(oa,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await lf(i,r)}else if(e instanceof Uh?i.Aa.Xe(e):e instanceof FA?i.Aa.ot(e):i.Aa.nt(e),!t.isEqual(we.min()))try{const r=await eS(i.localStore);t.compareTo(r)>=0&&await function(l,c){const m=l.Aa.It(c);return m.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const _=l.Pa.get(g);_&&l.Pa.set(g,_.withResumeToken(p.resumeToken,c))}}),m.targetMismatches.forEach((p,g)=>{const _=l.Pa.get(p);if(!_)return;l.Pa.set(p,_.withResumeToken(Xt.EMPTY_BYTE_STRING,_.snapshotVersion)),rS(l,p);const b=new Xr(_.target,p,g,_.sequenceNumber);fy(l,b)}),l.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(r){ue(oa,"Failed to raise snapshot:",r),await lf(i,r)}}async function lf(i,e,t){if(!Ho(e))throw e;i.Ta.add(1),await Fu(i),i.da.set("Offline"),t||(t=()=>eS(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{ue(oa,"Retrying IndexedDB access"),await t(),i.Ta.delete(1),await jf(i)})}function aS(i,e){return e().catch(t=>lf(i,t,e))}async function zf(i){const e=Re(i),t=ls(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:Wg;for(;CP(e);)try{const a=await uP(e.localStore,r);if(a===null){e.ha.length===0&&t.N_();break}r=a.batchId,xP(e,a)}catch(a){await lf(e,a)}oS(e)&&lS(e)}function CP(i){return ga(i)&&i.ha.length<10}function xP(i,e){i.ha.push(e);const t=ls(i);t.M_()&&t.Y_&&t.Z_(e.mutations)}function oS(i){return ga(i)&&!ls(i).F_()&&i.ha.length>0}function lS(i){ls(i).start()}async function NP(i){ls(i).ta()}async function OP(i){const e=ls(i);for(const t of i.ha)e.Z_(t.mutations)}async function DP(i,e,t){const r=i.ha.shift(),a=ry.from(r,e,t);await aS(i,()=>i.remoteSyncer.applySuccessfulWrite(a)),await zf(i)}async function PP(i,e){e&&ls(i).Y_&&await async function(r,a){if(function(c){return pD(c)&&c!==Z.ABORTED}(a.code)){const l=r.ha.shift();ls(r).O_(),await aS(r,()=>r.remoteSyncer.rejectFailedWrite(l.batchId,a)),await zf(r)}}(i,e),oS(i)&&lS(i)}async function Nb(i,e){const t=Re(i);t.asyncQueue.verifyOperationInProgress(),ue(oa,"RemoteStore received new credentials");const r=ga(t);t.Ta.add(3),await Fu(t),r&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await jf(t)}async function kP(i,e){const t=Re(i);e?(t.Ta.delete(2),await jf(t)):e||(t.Ta.add(2),await Fu(t),t.da.set("Unknown"))}function Go(i){return i.Ra||(i.Ra=function(t,r,a){const l=Re(t);return l.ra(),new vP(r,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{e_:SP.bind(null,i),n_:wP.bind(null,i),i_:IP.bind(null,i),j_:RP.bind(null,i)}),i.Ia.push(async e=>{e?(i.Ra.O_(),my(i)?dy(i):i.da.set("Unknown")):(await i.Ra.stop(),sS(i))})),i.Ra}function ls(i){return i.Va||(i.Va=function(t,r,a){const l=Re(t);return l.ra(),new _P(r,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{e_:()=>Promise.resolve(),n_:NP.bind(null,i),i_:PP.bind(null,i),X_:OP.bind(null,i),ea:DP.bind(null,i)}),i.Ia.push(async e=>{e?(i.Va.O_(),await zf(i)):(await i.Va.stop(),i.ha.length>0&&(ue(oa,`Stopping write stream with ${i.ha.length} pending writes`),i.ha=[]))})),i.Va}/**
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
 */class py{constructor(e,t,r,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=a,this.removalCallback=l,this.deferred=new nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,a,l){const c=Date.now()+r,m=new py(e,t,c,a,l);return m.start(r),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new pe(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gy(i,e){if(ar("AsyncQueue",`${e}: ${i}`),Ho(i))return new pe(Z.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class Ao{static emptySet(e){return new Ao(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ve.comparator(t.key,r.key):(t,r)=>ve.comparator(t.key,r.key),this.keyedMap=au(),this.sortedSet=new ct(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ao)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=r.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ao;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Ob{constructor(){this.ma=new ct(ve.comparator)}track(e){const t=e.doc.key,r=this.ma.get(t);r?e.type!==0&&r.type===3?this.ma=this.ma.insert(t,e):e.type===3&&r.type!==1?this.ma=this.ma.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ma=this.ma.remove(t):e.type===1&&r.type===2?this.ma=this.ma.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):be(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,r)=>{e.push(r)}),e}}class Po{constructor(e,t,r,a,l,c,m,p,g){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,r,a,l){const c=[];return t.forEach(m=>{c.push({type:0,doc:m})}),new Po(e,t,Ao.emptySet(t),c,r,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==r[a].type||!t[a].doc.isEqual(r[a].doc))return!1;return!0}}/**
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
 */class MP{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class VP{constructor(){this.queries=Db(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,r){const a=Re(t),l=a.queries;a.queries=Db(),l.forEach((c,m)=>{for(const p of m.ya)p.onError(r)})})(this,new pe(Z.ABORTED,"Firestore shutting down"))}}function Db(){return new ma(i=>CA(i),Pf)}async function uS(i,e){const t=Re(i);let r=3;const a=e.query;let l=t.queries.get(a);l?!l.wa()&&e.Sa()&&(r=2):(l=new MP,r=e.Sa()?0:1);try{switch(r){case 0:l.pa=await t.onListen(a,!0);break;case 1:l.pa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const m=gy(c,`Initialization of query '${go(e.query)}' failed`);return void e.onError(m)}t.queries.set(a,l),l.ya.push(e),e.Da(t.onlineState),l.pa&&e.va(l.pa)&&yy(t)}async function cS(i,e){const t=Re(i),r=e.query;let a=3;const l=t.queries.get(r);if(l){const c=l.ya.indexOf(e);c>=0&&(l.ya.splice(c,1),l.ya.length===0?a=e.Sa()?0:1:!l.wa()&&e.Sa()&&(a=2))}switch(a){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function LP(i,e){const t=Re(i);let r=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const m of c.ya)m.va(a)&&(r=!0);c.pa=a}}r&&yy(t)}function UP(i,e,t){const r=Re(i),a=r.queries.get(e);if(a)for(const l of a.ya)l.onError(t);r.queries.delete(e)}function yy(i){i.ba.forEach(e=>{e.next()})}var tg,Pb;(Pb=tg||(tg={})).Ca="default",Pb.Cache="cache";class hS{constructor(e,t,r){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){const r=[];for(const a of e.docChanges)a.type!==3&&r.push(a);e=new Po(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const r=t!=="Offline";return(!this.options.La||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=Po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==tg.Cache}}/**
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
 */class fS{constructor(e){this.key=e}}class dS{constructor(e){this.key=e}}class jP{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=Ue(),this.mutatedKeys=Ue(),this.Ha=xA(e),this.Ja=new Ao(this.Ha)}get Ya(){return this.Ga}Za(e,t){const r=t?t.Xa:new Ob,a=t?t.Ja:this.Ja;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,m=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((_,b)=>{const S=a.get(_),j=kf(this.query,b)?b:null,G=!!S&&this.mutatedKeys.has(S.key),Q=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let F=!1;S&&j?S.data.isEqual(j.data)?G!==Q&&(r.track({type:3,doc:j}),F=!0):this.eu(S,j)||(r.track({type:2,doc:j}),F=!0,(p&&this.Ha(j,p)>0||g&&this.Ha(j,g)<0)&&(m=!0)):!S&&j?(r.track({type:0,doc:j}),F=!0):S&&!j&&(r.track({type:1,doc:S}),F=!0,(p||g)&&(m=!0)),F&&(j?(c=c.add(j),l=Q?l.add(_):l.delete(_)):(c=c.delete(_),l=l.delete(_)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const _=this.query.limitType==="F"?c.last():c.first();c=c.delete(_.key),l=l.delete(_.key),r.track({type:1,doc:_})}return{Ja:c,Xa:r,Cs:m,mutatedKeys:l}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,a){const l=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const c=e.Xa.ga();c.sort((_,b)=>function(j,G){const Q=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return be(20277,{Vt:F})}};return Q(j)-Q(G)}(_.type,b.type)||this.Ha(_.doc,b.doc)),this.tu(r),a=a!=null&&a;const m=t&&!a?this.nu():[],p=this.ja.size===0&&this.current&&!a?1:0,g=p!==this.za;return this.za=p,c.length!==0||g?{snapshot:new Po(this.query,e.Ja,l,c,e.mutatedKeys,p===0,g,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:m}:{ru:m}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new Ob,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=Ue(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const t=[];return e.forEach(r=>{this.ja.has(r)||t.push(new dS(r))}),this.ja.forEach(r=>{e.has(r)||t.push(new fS(r))}),t}su(e){this.Ga=e.$s,this.ja=Ue();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return Po.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const vy="SyncEngine";class zP{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class BP{constructor(e){this.key=e,this._u=!1}}class FP{constructor(e,t,r,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.au={},this.uu=new ma(m=>CA(m),Pf),this.cu=new Map,this.lu=new Set,this.hu=new ct(ve.comparator),this.Pu=new Map,this.Tu=new oy,this.Iu={},this.Eu=new Map,this.du=Do.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function qP(i,e,t=!0){const r=_S(i);let a;const l=r.uu.get(e);return l?(r.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.ou()):a=await mS(r,e,t,!0),a}async function HP(i,e){const t=_S(i);await mS(t,e,!0,!1)}async function mS(i,e,t,r){const a=await cP(i.localStore,_i(e)),l=a.targetId,c=i.sharedClientState.addLocalQueryTarget(l,t);let m;return r&&(m=await GP(i,e,l,c==="current",a.resumeToken)),i.isPrimaryClient&&t&&iS(i.remoteStore,a),m}async function GP(i,e,t,r,a){i.Ru=(b,S,j)=>async function(Q,F,ee,ie){let ne=F.view.Za(ee);ne.Cs&&(ne=await wb(Q.localStore,F.query,!1).then(({documents:D})=>F.view.Za(D,ne)));const fe=ie&&ie.targetChanges.get(F.targetId),ce=ie&&ie.targetMismatches.get(F.targetId)!=null,Ce=F.view.applyChanges(ne,Q.isPrimaryClient,fe,ce);return Mb(Q,F.targetId,Ce.ru),Ce.snapshot}(i,b,S,j);const l=await wb(i.localStore,e,!0),c=new jP(e,l.$s),m=c.Za(l.documents),p=Bu.createSynthesizedTargetChangeForCurrentChange(t,r&&i.onlineState!=="Offline",a),g=c.applyChanges(m,i.isPrimaryClient,p);Mb(i,t,g.ru);const _=new zP(e,t,c);return i.uu.set(e,_),i.cu.has(t)?i.cu.get(t).push(e):i.cu.set(t,[e]),g.snapshot}async function $P(i,e,t){const r=Re(i),a=r.uu.get(e),l=r.cu.get(a.targetId);if(l.length>1)return r.cu.set(a.targetId,l.filter(c=>!Pf(c,e))),void r.uu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(a.targetId),r.sharedClientState.isActiveQueryTarget(a.targetId)||await Zp(r.localStore,a.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(a.targetId),t&&hy(r.remoteStore,a.targetId),ng(r,a.targetId)}).catch(qo)):(ng(r,a.targetId),await Zp(r.localStore,a.targetId,!0))}async function KP(i,e){const t=Re(i),r=t.uu.get(e),a=t.cu.get(r.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),hy(t.remoteStore,r.targetId))}async function YP(i,e,t){const r=tk(i);try{const a=await function(c,m){const p=Re(c),g=It.now(),_=m.reduce((j,G)=>j.add(G.key),Ue());let b,S;return p.persistence.runTransaction("Locally write mutations","readwrite",j=>{let G=or(),Q=Ue();return p.Bs.getEntries(j,_).next(F=>{G=F,G.forEach((ee,ie)=>{ie.isValidDocument()||(Q=Q.add(ee))})}).next(()=>p.localDocuments.getOverlayedDocuments(j,G)).next(F=>{b=F;const ee=[];for(const ie of m){const ne=cD(ie,b.get(ie.key).overlayedDocument);ne!=null&&ee.push(new pa(ie.key,ne,bA(ne.value.mapValue),Ei.exists(!0)))}return p.mutationQueue.addMutationBatch(j,g,ee,m)}).next(F=>{S=F;const ee=F.applyToLocalDocumentSet(b,Q);return p.documentOverlayCache.saveOverlays(j,F.batchId,ee)})}).then(()=>({batchId:S.batchId,changes:OA(b)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(a.batchId),function(c,m,p){let g=c.Iu[c.currentUser.toKey()];g||(g=new ct(Oe)),g=g.insert(m,p),c.Iu[c.currentUser.toKey()]=g}(r,a.batchId,t),await qu(r,a.changes),await zf(r.remoteStore)}catch(a){const l=gy(a,"Failed to persist write");t.reject(l)}}async function pS(i,e){const t=Re(i);try{const r=await oP(t.localStore,e);e.targetChanges.forEach((a,l)=>{const c=t.Pu.get(l);c&&(Ke(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c._u=!0:a.modifiedDocuments.size>0?Ke(c._u,14607):a.removedDocuments.size>0&&(Ke(c._u,42227),c._u=!1))}),await qu(t,r,e)}catch(r){await qo(r)}}function kb(i,e,t){const r=Re(i);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const a=[];r.uu.forEach((l,c)=>{const m=c.view.Da(e);m.snapshot&&a.push(m.snapshot)}),function(c,m){const p=Re(c);p.onlineState=m;let g=!1;p.queries.forEach((_,b)=>{for(const S of b.ya)S.Da(m)&&(g=!0)}),g&&yy(p)}(r.eventManager,e),a.length&&r.au.j_(a),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function QP(i,e,t){const r=Re(i);r.sharedClientState.updateQueryState(e,"rejected",t);const a=r.Pu.get(e),l=a&&a.key;if(l){let c=new ct(ve.comparator);c=c.insert(l,nn.newNoDocument(l,we.min()));const m=Ue().add(l),p=new Lf(we.min(),new Map,new ct(Oe),c,m);await pS(r,p),r.hu=r.hu.remove(l),r.Pu.delete(e),_y(r)}else await Zp(r.localStore,e,!1).then(()=>ng(r,e,t)).catch(qo)}async function XP(i,e){const t=Re(i),r=e.batch.batchId;try{const a=await aP(t.localStore,e);yS(t,r,null),gS(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await qu(t,a)}catch(a){await qo(a)}}async function WP(i,e,t){const r=Re(i);try{const a=await function(c,m){const p=Re(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let _;return p.mutationQueue.lookupMutationBatch(g,m).next(b=>(Ke(b!==null,37113),_=b.keys(),p.mutationQueue.removeMutationBatch(g,b))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,_,m)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,_)).next(()=>p.localDocuments.getDocuments(g,_))})}(r.localStore,e);yS(r,e,t),gS(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await qu(r,a)}catch(a){await qo(a)}}function gS(i,e){(i.Eu.get(e)||[]).forEach(t=>{t.resolve()}),i.Eu.delete(e)}function yS(i,e,t){const r=Re(i);let a=r.Iu[r.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),r.Iu[r.currentUser.toKey()]=a}}function ng(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const r of i.cu.get(e))i.uu.delete(r),t&&i.au.Vu(r,t);i.cu.delete(e),i.isPrimaryClient&&i.Tu.Hr(e).forEach(r=>{i.Tu.containsKey(r)||vS(i,r)})}function vS(i,e){i.lu.delete(e.path.canonicalString());const t=i.hu.get(e);t!==null&&(hy(i.remoteStore,t),i.hu=i.hu.remove(e),i.Pu.delete(t),_y(i))}function Mb(i,e,t){for(const r of t)r instanceof fS?(i.Tu.addReference(r.key,e),JP(i,r)):r instanceof dS?(ue(vy,"Document no longer in limbo: "+r.key),i.Tu.removeReference(r.key,e),i.Tu.containsKey(r.key)||vS(i,r.key)):be(19791,{mu:r})}function JP(i,e){const t=e.key,r=t.path.canonicalString();i.hu.get(t)||i.lu.has(r)||(ue(vy,"New document in limbo: "+t),i.lu.add(r),_y(i))}function _y(i){for(;i.lu.size>0&&i.hu.size<i.maxConcurrentLimboResolutions;){const e=i.lu.values().next().value;i.lu.delete(e);const t=new ve(lt.fromString(e)),r=i.du.next();i.Pu.set(r,new BP(t)),i.hu=i.hu.insert(t,r),iS(i.remoteStore,new Xr(_i(ny(t.path)),r,"TargetPurposeLimboResolution",xf.le))}}async function qu(i,e,t){const r=Re(i),a=[],l=[],c=[];r.uu.isEmpty()||(r.uu.forEach((m,p)=>{c.push(r.Ru(p,e,t).then(g=>{var _;if((g||t)&&r.isPrimaryClient){const b=g?!g.fromCache:(_=t==null?void 0:t.targetChanges.get(p.targetId))===null||_===void 0?void 0:_.current;r.sharedClientState.updateQueryState(p.targetId,b?"current":"not-current")}if(g){a.push(g);const b=uy.Rs(p.targetId,g);l.push(b)}}))}),await Promise.all(c),r.au.j_(a),await async function(p,g){const _=Re(p);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>W.forEach(g,S=>W.forEach(S.ds,j=>_.persistence.referenceDelegate.addReference(b,S.targetId,j)).next(()=>W.forEach(S.As,j=>_.persistence.referenceDelegate.removeReference(b,S.targetId,j)))))}catch(b){if(!Ho(b))throw b;ue(cy,"Failed to update sequence numbers: "+b)}for(const b of g){const S=b.targetId;if(!b.fromCache){const j=_.xs.get(S),G=j.snapshotVersion,Q=j.withLastLimboFreeSnapshotVersion(G);_.xs=_.xs.insert(S,Q)}}}(r.localStore,l))}async function ZP(i,e){const t=Re(i);if(!t.currentUser.isEqual(e)){ue(vy,"User change. New user:",e.toKey());const r=await ZA(t.localStore,e);t.currentUser=e,function(l,c){l.Eu.forEach(m=>{m.forEach(p=>{p.reject(new pe(Z.CANCELLED,c))})}),l.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qu(t,r.ks)}}function ek(i,e){const t=Re(i),r=t.Pu.get(e);if(r&&r._u)return Ue().add(r.key);{let a=Ue();const l=t.cu.get(e);if(!l)return a;for(const c of l){const m=t.uu.get(c);a=a.unionWith(m.view.Ya)}return a}}function _S(i){const e=Re(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=pS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ek.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QP.bind(null,e),e.au.j_=LP.bind(null,e.eventManager),e.au.Vu=UP.bind(null,e.eventManager),e}function tk(i){const e=Re(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WP.bind(null,e),e}class uf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Uf(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return sP(this.persistence,new nP,e.initialUser,this.serializer)}yu(e){return new JA(ly.fi,this.serializer)}pu(e){return new fP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}uf.provider={build:()=>new uf};class nk extends uf{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){Ke(this.persistence.referenceDelegate instanceof of,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new BD(r,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?dn.withCacheSize(this.cacheSizeBytes):dn.DEFAULT;return new JA(r=>of.fi(r,t),this.serializer)}}class ig{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>kb(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZP.bind(null,this.syncEngine),await kP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new VP}()}createDatastore(e){const t=Uf(e.databaseInfo.databaseId),r=function(l){return new yP(l)}(e.databaseInfo);return function(l,c,m,p){return new bP(l,c,m,p)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,a,l,c,m){return new AP(r,a,l,c,m)}(this.localStore,this.datastore,e.asyncQueue,t=>kb(this.syncEngine,t,0),function(){return Cb.C()?new Cb:new dP}())}createSyncEngine(e,t){return function(a,l,c,m,p,g,_){const b=new FP(a,l,c,m,p,g);return _&&(b.Au=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=Re(a);ue(oa,"RemoteStore shutting down."),l.Ta.add(5),await Fu(l),l.Ea.shutdown(),l.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ig.provider={build:()=>new ig};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ES{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):ar("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const us="FirestoreClient";class ik{constructor(e,t,r,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=a,this.user=tn.UNAUTHENTICATED,this.clientId=hA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(r,async c=>{ue(us,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(r,c=>(ue(us,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=gy(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function pp(i,e){i.asyncQueue.verifyOperationInProgress(),ue(us,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let r=t.initialUser;i.setCredentialChangeListener(async a=>{r.isEqual(a)||(await ZA(e.localStore,a),r=a)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function Vb(i,e){i.asyncQueue.verifyOperationInProgress();const t=await rk(i);ue(us,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(r=>Nb(e.remoteStore,r)),i.setAppCheckTokenChangeListener((r,a)=>Nb(e.remoteStore,a)),i._onlineComponents=e}async function rk(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ue(us,"Using user provided OfflineComponentProvider");try{await pp(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===Z.FAILED_PRECONDITION||a.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;Co("Error using user provided cache. Falling back to memory cache: "+t),await pp(i,new uf)}}else ue(us,"Using default OfflineComponentProvider"),await pp(i,new nk(void 0));return i._offlineComponents}async function bS(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ue(us,"Using user provided OnlineComponentProvider"),await Vb(i,i._uninitializedComponentsProvider._online)):(ue(us,"Using default OnlineComponentProvider"),await Vb(i,new ig))),i._onlineComponents}function sk(i){return bS(i).then(e=>e.syncEngine)}async function TS(i){const e=await bS(i),t=e.eventManager;return t.onListen=qP.bind(null,e.syncEngine),t.onUnlisten=$P.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=HP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=KP.bind(null,e.syncEngine),t}function ak(i,e,t={}){const r=new nr;return i.asyncQueue.enqueueAndForget(async()=>function(l,c,m,p,g){const _=new ES({next:S=>{_.Cu(),c.enqueueAndForget(()=>cS(l,b));const j=S.docs.has(m);!j&&S.fromCache?g.reject(new pe(Z.UNAVAILABLE,"Failed to get document because the client is offline.")):j&&S.fromCache&&p&&p.source==="server"?g.reject(new pe(Z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(S)},error:S=>g.reject(S)}),b=new hS(ny(m.path),_,{includeMetadataChanges:!0,La:!0});return uS(l,b)}(await TS(i),i.asyncQueue,e,t,r)),r.promise}function ok(i,e,t={}){const r=new nr;return i.asyncQueue.enqueueAndForget(async()=>function(l,c,m,p,g){const _=new ES({next:S=>{_.Cu(),c.enqueueAndForget(()=>cS(l,b)),S.fromCache&&p.source==="server"?g.reject(new pe(Z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(S)},error:S=>g.reject(S)}),b=new hS(m,_,{includeMetadataChanges:!0,La:!0});return uS(l,b)}(await TS(i),i.asyncQueue,e,t,r)),r.promise}/**
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
 */function AS(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb=new Map;/**
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
 */function SS(i,e,t){if(!t)throw new pe(Z.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function lk(i,e,t,r){if(e===!0&&r===!0)throw new pe(Z.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Ub(i){if(!ve.isDocumentKey(i))throw new pe(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function jb(i){if(ve.isDocumentKey(i))throw new pe(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Ey(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":be(12329,{type:typeof i})}function cs(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new pe(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ey(i);throw new pe(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS="firestore.googleapis.com",zb=!0;class Bb{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new pe(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=wS,this.ssl=zb}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:zb;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=WA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<jD)throw new pe(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=AS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new pe(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new pe(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new pe(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,a){return r.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bf{constructor(e,t,r,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new pe(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new pe(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bb(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pO;switch(r.type){case"firstParty":return new _O(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new pe(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,Sf("Firestore",this._settings.isUsingEmulator),this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Lb.get(t);r&&(ue("ComponentProvider","Removing Datastore"),Lb.delete(t),r.terminate())}(this),Promise.resolve()}}function uk(i,e,t,r={}){var a;i=cs(i,Bf);const l=jo(e),c=i._getSettings(),m=Object.assign(Object.assign({},c),{emulatorOptions:i._getEmulatorOptions()}),p=`${e}:${t}`;c.host!==wS&&c.host!==p&&Co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},c),{host:p,ssl:l,emulatorOptions:r});if(!ns(g,m)&&(i._setSettings(g),l&&(o1(`https://${p}`),Sf("Firestore",!0)),r.mockUserToken)){let _,b;if(typeof r.mockUserToken=="string")_=r.mockUserToken,b=tn.MOCK_USER;else{_=GC(r.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const S=r.mockUserToken.sub||r.mockUserToken.user_id;if(!S)throw new pe(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new tn(S)}i._authCredentials=new gO(new uA(_,b))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ff(this.firestore,e,this._query)}}class An{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ts(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new An(this.firestore,e,this._key)}}class ts extends Ff{constructor(e,t,r){super(e,t,ny(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new An(this.firestore,null,new ve(e))}withConverter(e){return new ts(this.firestore,e,this._path)}}function gu(i,e,...t){if(i=Qt(i),SS("collection","path",e),i instanceof Bf){const r=lt.fromString(e,...t);return jb(r),new ts(i,null,r)}{if(!(i instanceof An||i instanceof ts))throw new pe(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(lt.fromString(e,...t));return jb(r),new ts(i.firestore,null,r)}}function IS(i,e,...t){if(i=Qt(i),arguments.length===1&&(e=hA.newId()),SS("doc","path",e),i instanceof Bf){const r=lt.fromString(e,...t);return Ub(r),new An(i,null,new ve(r))}{if(!(i instanceof An||i instanceof ts))throw new pe(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(lt.fromString(e,...t));return Ub(r),new An(i.firestore,i instanceof ts?i.converter:null,new ve(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb="AsyncQueue";class qb{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new tS(this,"async_queue_retry"),this.ec=()=>{const r=mp();r&&ue(Fb,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const t=mp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=mp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new nr;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!Ho(e))throw e;ue(Fb,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,ar("INTERNAL UNHANDLED ERROR: ",Hb(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=t,t}enqueueAfterDelay(e,t,r){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const a=py.createAndSchedule(this,e,t,r,l=>this.oc(l));return this.Hu.push(a),a}nc(){this.Ju&&be(47125,{_c:Hb(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function Hb(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Hu extends Bf{constructor(e,t,r,a){super(e,t,r,a),this.type="firestore",this._queue=new qb,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new qb(e),this._firestoreClient=void 0,await e}}}function qf(i,e){const t=typeof i=="object"?i:Vg(),r=typeof i=="string"?i:Zh,a=Vu(t,"firestore").getImmediate({identifier:r});if(!a._initialized){const l=qC("firestore");l&&uk(a,...l)}return a}function by(i){if(i._terminated)throw new pe(Z.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||ck(i),i._firestoreClient}function ck(i){var e,t,r;const a=i._freezeSettings(),l=function(m,p,g,_){return new kO(m,p,g,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,AS(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=a.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new ik(i._authCredentials,i._appCheckCredentials,i._queue,l,i._componentsProvider&&function(m){const p=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(p),_online:p}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ko(Xt.fromBase64String(e))}catch(t){throw new pe(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ko(Xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new pe(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e){this._methodName=e}}/**
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
 */class Ay{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new pe(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new pe(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}/**
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
 */class Sy{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,a){if(r.length!==a.length)return!1;for(let l=0;l<r.length;++l)if(r[l]!==a[l])return!1;return!0}(this._values,e._values)}}/**
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
 */const hk=/^__.*__$/;class fk{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new pa(e,this.data,this.fieldMask,t,this.fieldTransforms):new zu(e,this.data,t,this.fieldTransforms)}}function CS(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw be(40011,{hc:i})}}class wy{constructor(e,t,r,a,l,c){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=a,l===void 0&&this.Pc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new wy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Tc({path:r,Ec:!1});return a.dc(e),a}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Tc({path:r,Ec:!1});return a.Pc(),a}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return cf(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(CS(this.hc)&&hk.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class dk{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Uf(e)}gc(e,t,r,a=!1){return new wy({hc:e,methodName:t,fc:r,path:Yt.emptyPath(),Ec:!1,mc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xS(i){const e=i._freezeSettings(),t=Uf(i._databaseId);return new dk(i._databaseId,!!e.ignoreUndefinedProperties,t)}function NS(i,e,t,r,a,l={}){const c=i.gc(l.merge||l.mergeFields?2:0,e,t,a);kS("Data must be an object, but it was:",c,r);const m=DS(r,c);let p,g;if(l.merge)p=new $n(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const _=[];for(const b of l.mergeFields){const S=mk(e,b,t);if(!c.contains(S))throw new pe(Z.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);gk(_,S)||_.push(S)}p=new $n(_),g=c.fieldTransforms.filter(b=>p.covers(b.field))}else p=null,g=c.fieldTransforms;return new fk(new Un(m),p,g)}function OS(i,e){if(PS(i=Qt(i)))return kS("Unsupported field value:",e,i),DS(i,e);if(i instanceof RS)return function(r,a){if(!CS(a.hc))throw a.Vc(`${r._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Vc(`${r._methodName}() is not currently supported inside arrays`);const l=r._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,a){const l=[];let c=0;for(const m of r){let p=OS(m,a.Rc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(i,e)}return function(r,a){if((r=Qt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rD(a.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const l=It.fromDate(r);return{timestampValue:af(a.serializer,l)}}if(r instanceof It){const l=new It(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:af(a.serializer,l)}}if(r instanceof Ay)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ko)return{bytesValue:HA(a.serializer,r._byteString)};if(r instanceof An){const l=a.databaseId,c=r.firestore._databaseId;if(!c.isEqual(l))throw a.Vc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:ay(r.firestore._databaseId||a.databaseId,r._key.path)}}if(r instanceof Sy)return function(c,m){return{mapValue:{fields:{[_A]:{stringValue:EA},[ef]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw m.Vc("VectorValues must only contain numeric values.");return iy(m.serializer,g)})}}}}}}(r,a);throw a.Vc(`Unsupported field value: ${Ey(r)}`)}(i,e)}function DS(i,e){const t={};return dA(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):da(i,(r,a)=>{const l=OS(a,e.Ic(r));l!=null&&(t[r]=l)}),{mapValue:{fields:t}}}function PS(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof It||i instanceof Ay||i instanceof ko||i instanceof An||i instanceof RS||i instanceof Sy)}function kS(i,e,t){if(!PS(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const r=Ey(t);throw r==="an object"?e.Vc(i+" a custom object"):e.Vc(i+" "+r)}}function mk(i,e,t){if((e=Qt(e))instanceof Ty)return e._internalPath;if(typeof e=="string")return MS(i,e);throw cf("Field path arguments must be of type string or ",i,!1,void 0,t)}const pk=new RegExp("[~\\*/\\[\\]]");function MS(i,e,t){if(e.search(pk)>=0)throw cf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Ty(...e.split("."))._internalPath}catch{throw cf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function cf(i,e,t,r,a){const l=r&&!r.isEmpty(),c=a!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${r}`),c&&(p+=` in document ${a}`),p+=")"),new pe(Z.INVALID_ARGUMENT,m+i+p)}function gk(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e,t,r,a,l){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new An(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(LS("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class yk extends VS{data(){return super.data()}}function LS(i,e){return typeof e=="string"?MS(i,e):e instanceof Ty?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new pe(Z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _k{convertValue(e,t="none"){switch(os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return vt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(as(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw be(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return da(e,(a,l)=>{r[a]=this.convertValue(l,t)}),r}convertVectorValue(e){var t,r,a;const l=(a=(r=(t=e.fields)===null||t===void 0?void 0:t[ef].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.map(c=>vt(c.doubleValue));return new Sy(l)}convertGeoPoint(e){return new Ay(vt(e.latitude),vt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Of(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ru(e));default:return null}}convertTimestamp(e){const t=ss(e);return new It(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=lt.fromString(e);Ke(XA(r),9688,{name:e});const a=new Cu(r.get(1),r.get(3)),l=new ve(r.popFirst(5));return a.isEqual(t)||ar(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(i,e,t){let r;return r=i?i.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jS extends VS{constructor(e,t,r,a,l,c){super(e,t,r,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new jh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(LS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class jh extends jS{data(e={}){return super.data(e)}}class Ek{constructor(e,t,r,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new lu(a.hasPendingWrites,a.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new jh(this._firestore,this._userDataWriter,r.key,r,new lu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new pe(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(m=>{const p=new jh(a._firestore,a._userDataWriter,m.doc.key,m.doc,new lu(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(m=>l||m.type!==3).map(m=>{const p=new jh(a._firestore,a._userDataWriter,m.doc.key,m.doc,new lu(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,_=-1;return m.type!==0&&(g=c.indexOf(m.doc.key),c=c.delete(m.doc.key)),m.type!==1&&(c=c.add(m.doc),_=c.indexOf(m.doc.key)),{type:bk(m.type),doc:p,oldIndex:g,newIndex:_}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function bk(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return be(61501,{type:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(i){i=cs(i,An);const e=cs(i.firestore,Hu);return ak(by(e),i._key).then(t=>Sk(e,i,t))}class zS extends _k{constructor(e){super(),this.firestore=e}convertBytes(e){return new ko(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new An(this.firestore,null,t)}}function Gb(i){i=cs(i,Ff);const e=cs(i.firestore,Hu),t=by(e),r=new zS(e);return vk(i._query),ok(t,i._query).then(a=>new Ek(e,r,i,a))}function Ak(i,e,t){i=cs(i,An);const r=cs(i.firestore,Hu),a=US(i.converter,e);return BS(r,[NS(xS(r),"setDoc",i._key,a,i.converter!==null,t).toMutation(i._key,Ei.none())])}function Iy(i,e){const t=cs(i.firestore,Hu),r=IS(i),a=US(i.converter,e);return BS(t,[NS(xS(i.firestore),"addDoc",r._key,a,i.converter!==null,{}).toMutation(r._key,Ei.exists(!1))]).then(()=>r)}function BS(i,e){return function(r,a){const l=new nr;return r.asyncQueue.enqueueAndForget(async()=>YP(await sk(r),a,l)),l.promise}(by(i),e)}function Sk(i,e,t){const r=t.docs.get(e._key),a=new zS(i);return new jS(i,a,e._key,r,new lu(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(a){Fo=a})(Ii),is(new ir("firestore",(r,{instanceIdentifier:a,options:l})=>{const c=r.getProvider("app").getImmediate(),m=new Hu(new yO(r.getProvider("auth-internal")),new EO(c,r.getProvider("app-check-internal")),function(g,_){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new pe(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cu(g.options.projectId,_)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),m._setSettings(l),m},"PUBLIC").setMultipleInstances(!0)),yi(QE,XE,e),yi(QE,XE,"esm2017")})();const wk=qf(fa),Ik=Qg(fa),Rk=()=>{const i=Tf(),e=async t=>{var r;t.preventDefault();try{const a=new Gg,l=await EN(Ik,a);if(!l.user)throw new Error("Error al loguear con google");const c=IS(wk,"users",l.user.uid);(await Tk(c)).exists()||await Ak(c,{username:(r=l.user.email)==null?void 0:r.split("@"),email:l.user.email,role:null,avatar:"default.png"}),i("/home")}catch(a){console.log(a)}};return I.jsx(I.Fragment,{children:I.jsx("div",{className:"w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 relative",children:I.jsxs("div",{className:"w-full sm:max-w-md p-5 mx-auto",children:[I.jsx("h2",{className:"mb-12 text-center text-5xl font-extrabold",children:"El Caballo S.A."}),I.jsxs("form",{children:[I.jsxs("div",{className:"mb-4",children:[I.jsx("label",{className:"block mb-1",htmlFor:"email",children:"Usuario"}),I.jsx("input",{id:"email",type:"text",name:"email",className:"py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"})]}),I.jsxs("div",{className:"mb-4",children:[I.jsx("label",{className:"block mb-1",htmlFor:"password",children:"Contraseña"}),I.jsx("input",{id:"password",type:"password",name:"password",className:"py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"})]}),I.jsxs("div",{className:"mt-6 flex items-center justify-between",children:[I.jsxs("div",{className:"flex items-center",children:[I.jsx("input",{id:"remember_me",type:"checkbox",className:"border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"}),I.jsxs("label",{htmlFor:"remember_me",className:"ml-2 block text-sm leading-5 text-gray-900",children:[" ","Remember me"," "]})]}),I.jsxs("a",{href:"#",className:"text-sm",children:[" ","Olvidaste tu contraseña?"," "]})]}),I.jsx("div",{className:"mt-6",children:I.jsx("button",{className:"cursor-pointer w-full inline-flex items-center justify-center px-4 py-2 bg-blue-950 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-800 active:bg-green-500 focus:outline-none focus:border-green-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition",children:"Sign In"})})]}),I.jsxs("div",{className:"flex justify-center flex-col items-center mt-4",children:[I.jsxs("svg",{className:"cursor-pointer",onClick:e,width:"40",height:"auto",viewBox:"0 0 256 262",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",children:[I.jsx("path",{d:"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",fill:"#4285F4"}),I.jsx("path",{d:"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",fill:"#34A853"}),I.jsx("path",{d:"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",fill:"#FBBC05"}),I.jsx("path",{d:"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",fill:"#EB4335"})]}),I.jsx("small",{children:"Iniciar con Google"})]})]})})})};function Ck(){return I.jsx(I.Fragment,{children:I.jsx("div",{className:"bg-amber-100",children:I.jsx(Rk,{})})})}function $b(){return I.jsx(I.Fragment,{children:I.jsx("div",{className:"transition-transform duration-300 ease-in-out"})})}const Ry=se.createContext(void 0),xk=({children:i})=>{const e=Qg(),[t,r]=se.useState(null);se.useEffect(()=>{const m=F1(e,p=>{r(p)});return()=>m()},[]);const[a,l]=se.useState(!1),c=()=>{l(m=>!m)};return I.jsx(Ry.Provider,{value:{user:t,openMenu:a,toogleMenu:c},children:i})},Nk=()=>I.jsxs(I.Fragment,{children:[I.jsx("div",{className:"flex justify-center items-center p-5 w-full rounded-2xl ",children:I.jsx("input",{type:"number",placeholder:"Buscar operario...",className:"w-full max-w-lg p-3 bg-gray-200 text-blue-950 border border-blue-950 rounded focus:outline-none focus:bg-white"})}),I.jsx("div",{className:"flex p-5 w-full justify-center bg-gray-200 rounded-2xl backgroundForm",children:I.jsxs("form",{className:"w-full max-w-lg text-white",children:[I.jsxs("div",{children:[I.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",children:"Maquina"}),I.jsx("input",{className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",type:"text",placeholder:"Maquina",readOnly:!0,value:"Maquina 1"})]}),I.jsxs("div",{className:"flex flex-wrap -mx-3 mb-6",children:[I.jsxs("div",{className:"w-full md:w-1/2 px-3 mb-6 md:mb-0",children:[I.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"grid-first-name",children:"Fecha"}),I.jsx("input",{className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"grid-first-name",type:"date"})]}),I.jsxs("div",{className:"w-full md:w-1/2 px-3",children:[I.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"code",children:"Codigo de operario"}),I.jsx("input",{className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"code",type:"number",placeholder:"000"})]})]}),I.jsxs("div",{className:"flex flex-wrap -mx-3 mb-6",children:[I.jsxs("div",{className:"w-full md:w-1/2 px-3",children:[I.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"code",children:"Codigo de operario"}),I.jsx("input",{className:"appearance-none block w-full bg-gray-200 text-blue-950 border  border-blue-950 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"code",type:"number",placeholder:"000"})]}),I.jsxs("div",{className:"w-full md:w-1/2 px-3",children:[I.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"code",children:"Horas asignadas"}),I.jsx("input",{className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"code",type:"text",placeholder:"0"})]}),I.jsxs("div",{className:"w-full md:w-1/2 px-3",children:[I.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"code",children:"Paradas mayores"}),I.jsx("input",{className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"code",type:"text",placeholder:"0"})]}),I.jsxs("div",{className:"w-full md:w-1/2 px-3",children:[I.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"code",children:"Total horas"}),I.jsx("input",{className:"appearance-none block w-full  bg-gray-200 text-red-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"code",type:"text",placeholder:"0",readOnly:!0,value:0})]})]}),I.jsxs("div",{className:"flex flex-wrap -mx-3 mb-2",children:[I.jsxs("div",{className:"w-full md:w-1/3 px-3 mb-6 md:mb-0",children:[I.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"grid-city",children:"Horometro inicial"}),I.jsx("input",{className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"HourStart",type:"number",placeholder:"00000000"})]}),I.jsxs("div",{className:"w-full md:w-1/3 px-3 mb-6 md:mb-0",children:[I.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"machine",children:"Maquina"}),I.jsx("div",{className:"relative",children:I.jsxs("select",{className:"block appearance-none w-full bg-gray-200 border border-gray-200 text-blue-950 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"machine",children:[I.jsx("option",{children:"Punt 1"}),I.jsx("option",{children:"Punt 2"}),I.jsx("option",{children:"Punt 2"})]})})]}),I.jsxs("div",{className:"w-full md:w-1/3 px-3 mb-6 md:mb-0",children:[I.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"grid-zip",children:"Horometro final"}),I.jsx("input",{className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"hourEnd",type:"number",placeholder:"00000000"})]}),I.jsxs("div",{className:"w-full  px-3",children:[I.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"code",children:"Observaciones"}),I.jsx("textarea",{className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"code",placeholder:"..."})]})]}),I.jsx("div",{className:"flex justify-center mt-4",children:I.jsx("button",{type:"submit",className:"cursor-pointer w-full py-2 rounded bg-blue-600 hover:bg-blue-800 transition-colors duration-300 text-white font-semibold",children:"Enviar"})})]})})]}),Ok=()=>I.jsx("div",{children:I.jsx(Nk,{})}),gp=qf(fa),Dk=()=>{const[i,e]=se.useState(""),[t,r]=se.useState([]),[a,l]=se.useState([]),[c,m]=se.useState();se.useEffect(()=>{(async()=>{try{const S=(await Gb(gu(gp,"machines"))).docs.map(Q=>({id:Q.id,...Q.data()}));console.log(S),l(S);const G=(await Gb(gu(gp,"operators"))).docs.map(Q=>({id:Q.id,...Q.data()}));console.log(G),m(c)}catch(b){console.error("Error al obtener máquinas:",b)}})()},[]);const p=_=>{r(b=>b.includes(_)?b.filter(S=>S!==_):[...b,_])};async function g(_){_.preventDefault();const b={operator:i.toUpperCase(),machines:t,timestamp:It.now()};try{await Iy(gu(gp,"assignments"),b),console.log("Asignación guardada correctamente:",b),e(""),r([]),alert("Asignación guardada exitosamente")}catch(S){console.error("Error al guardar la asignación:",S),alert("Hubo un error al guardar la asignación")}}return I.jsxs("div",{className:"p-6 rounded-lg shadow-md w-full max-w-lg mx-auto backgroundForm",children:[I.jsx("h2",{className:"text-xl font-bold mb-4 text-white",children:"Asignar Máquinas"}),I.jsxs("form",{onSubmit:g,className:"space-y-4",children:[I.jsxs("div",{children:[I.jsx("label",{className:"block mb-1 text-white",children:"Operario"}),I.jsx("input",{type:"text",value:i,onChange:_=>e(_.target.value),className:"w-full border px-3 bg-gray-200 py-2 rounded-md",required:!0})]}),I.jsxs("div",{children:[I.jsx("label",{className:"block mb-1 text-white",children:"Seleccionar maquinas"}),I.jsx("div",{className:"space-y-2 text-white pl-2",children:a&&a.map(_=>_.abbreviation?I.jsxs("div",{children:[I.jsx("input",{type:"checkbox",id:_.abbreviation,onChange:()=>p(_.abbreviation)}),I.jsx("label",{className:"pl-2",htmlFor:_.id,children:_.abbreviation})]},_.abbreviation):null)})]}),I.jsx("button",{type:"submit",className:"bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700",children:"Asignar"})]})]})};function Kb(){return I.jsx(I.Fragment,{children:I.jsx(Dk,{})})}const Pk=[{title:"F1315",slug:"f1315"},{title:"Eficiencia",slug:"eficence"}];function kk({item:i}){return I.jsx(Pg,{to:`/picado/${i.slug}`,children:I.jsx("button",{className:"button",children:i.title})})}const Mk=()=>I.jsx(I.Fragment,{children:I.jsxs("div",{className:"flex flex-col items-center p-4 space-y-6 md:space-y-8",children:[I.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:Pk.map((i,e)=>I.jsx(kk,{item:i},e))}),I.jsx("div",{className:"w-full max-w-4xl",children:I.jsx(Dg,{})})]})}),Yb=()=>{const i=[{date:"2025-07-24",machine:"F1315",horometroStart:120,horometroEnd:180,reference:"REF-001",majorStops:"No fuel for 30 min",observations:"Normal operation",assignedHours:8,totalHours:6},{date:"2025-07-24",machine:"F1400",horometroStart:100,horometroEnd:160,reference:"REF-002",majorStops:"Broken belt (1h)",observations:"Repair completed",assignedHours:8,totalHours:7},{date:"2025-07-23",machine:"F1200",horometroStart:50,horometroEnd:110,reference:"REF-003",majorStops:"Operator late",observations:"Started 1h late",assignedHours:8,totalHours:5}];return I.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg overflow-x-auto",children:[I.jsx("h2",{className:"text-xl font-bold mb-4",children:"Eficencias"}),I.jsxs("table",{className:"min-w-full border border-gray-300 text-sm text-left",children:[I.jsx("thead",{className:"backgroundForm text-white",children:I.jsxs("tr",{children:[I.jsx("th",{className:"px-3 py-2 border",children:"Fecha"}),I.jsx("th",{className:"px-3 py-2 border",children:"Maquina"}),I.jsx("th",{className:"px-3 py-2 border",children:"Horometro inicial"}),I.jsx("th",{className:"px-3 py-2 border",children:"Horomerto final"}),I.jsx("th",{className:"px-3 py-2 border",children:"Referencia"}),I.jsx("th",{className:"px-3 py-2 border",children:"Paradas mayores"}),I.jsx("th",{className:"px-3 py-2 border",children:"Observaciones"}),I.jsx("th",{className:"px-3 py-2 border",children:"Horas asignadas"}),I.jsx("th",{className:"px-3 py-2 border",children:"Total horas"}),I.jsx("th",{className:"px-3 py-2 border",children:"Eficiencia en horas"})]})}),I.jsx("tbody",{children:i.map((e,t)=>I.jsxs("tr",{className:"hover:bg-gray-100",children:[I.jsx("td",{className:"px-3 py-2 border",children:e.date}),I.jsx("td",{className:"px-3 py-2 border",children:e.machine}),I.jsx("td",{className:"px-3 py-2 border",children:e.horometroStart}),I.jsx("td",{className:"px-3 py-2 border",children:e.horometroEnd}),I.jsx("td",{className:"px-3 py-2 border",children:e.reference}),I.jsx("td",{className:"px-3 py-2 border",children:e.majorStops}),I.jsx("td",{className:"px-3 py-2 border",children:e.observations}),I.jsx("td",{className:"px-3 py-2 border",children:e.assignedHours}),I.jsx("td",{className:"px-3 py-2 border",children:e.totalHours}),I.jsx("td",{className:"px-3 py-2 border",children:e.totalHours})]},t))})]})]})},Vk=[{title:"Operarios",subtitle:"Gestión de tareas y seguimiento de operarios",url:"/picado"},{title:"Supervisores",subtitle:"Supervisión y control de actividades",url:"/supervisor"},{title:"Datos",subtitle:"Visualización y exportación de registros",url:"/data"},{title:"Configuracion",subtitle:"Ajustes del sistema y parámetros de operación",url:"/configurations"}],Qb=Qg(fa),Lk=Vk,Uk=({openMenu:i})=>{const[e,t]=se.useState({user:null,photoURL:null}),r=Tf();se.useEffect(()=>{const l=F1(Qb,c=>{t(c?{user:c.displayName||c.email||c.uid,photoURL:c.photoURL||null}:{user:null,photoURL:null})});return()=>{l()}},[]);const a=()=>{eN(Qb).then(()=>{console.log("Sesion cerrada correctamente"),r("/")}).catch(l=>{console.log(l)})};return I.jsx(I.Fragment,{children:I.jsxs("div",{id:"menu",className:"bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed top-0 h-screen overflow-y-scroll transition-transform duration-300 ease-in-out  translate-x-1 right-1",children:[I.jsx("div",{id:"logo",className:"my-4 px-6",children:I.jsxs("h1",{className:"text-lg md:text-2xl font-bold text-white",children:["El Caballo",I.jsx("span",{className:"text-blue-500",children:"S.A"}),"."]})}),I.jsxs("div",{id:"profile",className:"px-6 py-10",children:[I.jsx("p",{className:"text-slate-500",children:"Bienvenido,"}),I.jsxs("a",{href:"#",className:"inline-flex space-x-2 items-center",children:[I.jsx("span",{children:e.photoURL?I.jsx("img",{className:"rounded-full w-full h-auto",src:e.photoURL,alt:""}):I.jsx("div",{children:"Sin foto"})}),I.jsx("span",{className:"text-sm md:text-base font-bold",children:e.user?I.jsx("p",{children:e.user}):I.jsx("p",{children:"No hay usuario autenticado"})})]})]}),I.jsx("div",{className:"flex justify-center items-center pb-5",children:I.jsx("button",{onClick:a,className:"bg-red-600 w-full rounded-2xl mx-5 hover:bg-white/8 cursor-pointer",children:"Salir"})}),I.jsx("div",{id:"nav",className:"w-full px-6",children:Lk.map((l,c)=>I.jsx(Pg,{to:l.url,className:"w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150",children:I.jsxs("div",{className:"flex flex-col",children:[I.jsx("span",{className:"text-lg font-bold leading-5 text-white",children:l.title}),I.jsx("span",{className:"text-sm text-white/50 hidden md:block",children:l.subtitle})]})},c))})]})})};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const jk={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function zk(i,e,t){return(e=Fk(e))in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function Xb(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable})),t.push.apply(t,r)}return t}function te(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Xb(Object(t),!0).forEach(function(r){zk(i,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):Xb(Object(t)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(t,r))})}return i}function Bk(i,e){if(typeof i!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var r=t.call(i,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function Fk(i){var e=Bk(i,"string");return typeof e=="symbol"?e:e+""}const Wb=()=>{};let Cy={},FS={},qS=null,HS={mark:Wb,measure:Wb};try{typeof window<"u"&&(Cy=window),typeof document<"u"&&(FS=document),typeof MutationObserver<"u"&&(qS=MutationObserver),typeof performance<"u"&&(HS=performance)}catch{}const{userAgent:Jb=""}=Cy.navigator||{},hs=Cy,st=FS,Zb=qS,Ih=HS;hs.document;const fr=!!st.documentElement&&!!st.head&&typeof st.addEventListener=="function"&&typeof st.createElement=="function",GS=~Jb.indexOf("MSIE")||~Jb.indexOf("Trident/");var qk=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Hk=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,$S={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Gk={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},KS=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],rn="classic",Hf="duotone",$k="sharp",Kk="sharp-duotone",YS=[rn,Hf,$k,Kk],Yk={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Qk={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Xk=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Wk={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Jk=["fak","fa-kit","fakd","fa-kit-duotone"],eT={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Zk=["kit"],eM={kit:{"fa-kit":"fak"}},tM=["fak","fakd"],nM={kit:{fak:"fa-kit"}},tT={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Rh={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},iM=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],rM=["fak","fa-kit","fakd","fa-kit-duotone"],sM={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},aM={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},oM={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},rg={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},lM=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],sg=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...iM,...lM],uM=["solid","regular","light","thin","duotone","brands"],QS=[1,2,3,4,5,6,7,8,9,10],cM=QS.concat([11,12,13,14,15,16,17,18,19,20]),hM=[...Object.keys(oM),...uM,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Rh.GROUP,Rh.SWAP_OPACITY,Rh.PRIMARY,Rh.SECONDARY].concat(QS.map(i=>"".concat(i,"x"))).concat(cM.map(i=>"w-".concat(i))),fM={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const lr="___FONT_AWESOME___",ag=16,XS="fa",WS="svg-inline--fa",la="data-fa-i2svg",og="data-fa-pseudo-element",dM="data-fa-pseudo-element-pending",xy="data-prefix",Ny="data-icon",nT="fontawesome-i2svg",mM="async",pM=["HTML","HEAD","STYLE","SCRIPT"],JS=(()=>{try{return!0}catch{return!1}})();function Gu(i){return new Proxy(i,{get(e,t){return t in e?e[t]:e[rn]}})}const ZS=te({},$S);ZS[rn]=te(te(te(te({},{"fa-duotone":"duotone"}),$S[rn]),eT.kit),eT["kit-duotone"]);const gM=Gu(ZS),lg=te({},Wk);lg[rn]=te(te(te(te({},{duotone:"fad"}),lg[rn]),tT.kit),tT["kit-duotone"]);const iT=Gu(lg),ug=te({},rg);ug[rn]=te(te({},ug[rn]),nM.kit);const Oy=Gu(ug),cg=te({},aM);cg[rn]=te(te({},cg[rn]),eM.kit);Gu(cg);const yM=qk,ew="fa-layers-text",vM=Hk,_M=te({},Yk);Gu(_M);const EM=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],yp=Gk,bM=[...Zk,...hM],yu=hs.FontAwesomeConfig||{};function TM(i){var e=st.querySelector("script["+i+"]");if(e)return e.getAttribute(i)}function AM(i){return i===""?!0:i==="false"?!1:i==="true"?!0:i}st&&typeof st.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,r]=e;const a=AM(TM(t));a!=null&&(yu[r]=a)});const tw={styleDefault:"solid",familyDefault:rn,cssPrefix:XS,replacementClass:WS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};yu.familyPrefix&&(yu.cssPrefix=yu.familyPrefix);const Mo=te(te({},tw),yu);Mo.autoReplaceSvg||(Mo.observeMutations=!1);const de={};Object.keys(tw).forEach(i=>{Object.defineProperty(de,i,{enumerable:!0,set:function(e){Mo[i]=e,vu.forEach(t=>t(de))},get:function(){return Mo[i]}})});Object.defineProperty(de,"familyPrefix",{enumerable:!0,set:function(i){Mo.cssPrefix=i,vu.forEach(e=>e(de))},get:function(){return Mo.cssPrefix}});hs.FontAwesomeConfig=de;const vu=[];function SM(i){return vu.push(i),()=>{vu.splice(vu.indexOf(i),1)}}const qr=ag,mi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function wM(i){if(!i||!fr)return;const e=st.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=i;const t=st.head.childNodes;let r=null;for(let a=t.length-1;a>-1;a--){const l=t[a],c=(l.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(c)>-1&&(r=l)}return st.head.insertBefore(e,r),i}const IM="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Du(){let i=12,e="";for(;i-- >0;)e+=IM[Math.random()*62|0];return e}function $o(i){const e=[];for(let t=(i||[]).length>>>0;t--;)e[t]=i[t];return e}function Dy(i){return i.classList?$o(i.classList):(i.getAttribute("class")||"").split(" ").filter(e=>e)}function nw(i){return"".concat(i).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function RM(i){return Object.keys(i||{}).reduce((e,t)=>e+"".concat(t,'="').concat(nw(i[t]),'" '),"").trim()}function Gf(i){return Object.keys(i||{}).reduce((e,t)=>e+"".concat(t,": ").concat(i[t].trim(),";"),"")}function Py(i){return i.size!==mi.size||i.x!==mi.x||i.y!==mi.y||i.rotate!==mi.rotate||i.flipX||i.flipY}function CM(i){let{transform:e,containerWidth:t,iconWidth:r}=i;const a={transform:"translate(".concat(t/2," 256)")},l="translate(".concat(e.x*32,", ").concat(e.y*32,") "),c="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),m="rotate(".concat(e.rotate," 0 0)"),p={transform:"".concat(l," ").concat(c," ").concat(m)},g={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:p,path:g}}function xM(i){let{transform:e,width:t=ag,height:r=ag,startCentered:a=!1}=i,l="";return a&&GS?l+="translate(".concat(e.x/qr-t/2,"em, ").concat(e.y/qr-r/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/qr,"em), calc(-50% + ").concat(e.y/qr,"em)) "):l+="translate(".concat(e.x/qr,"em, ").concat(e.y/qr,"em) "),l+="scale(".concat(e.size/qr*(e.flipX?-1:1),", ").concat(e.size/qr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var NM=`:root, :host {
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
}`;function iw(){const i=XS,e=WS,t=de.cssPrefix,r=de.replacementClass;let a=NM;if(t!==i||r!==e){const l=new RegExp("\\.".concat(i,"\\-"),"g"),c=new RegExp("\\--".concat(i,"\\-"),"g"),m=new RegExp("\\.".concat(e),"g");a=a.replace(l,".".concat(t,"-")).replace(c,"--".concat(t,"-")).replace(m,".".concat(r))}return a}let rT=!1;function vp(){de.autoAddCss&&!rT&&(wM(iw()),rT=!0)}var OM={mixout(){return{dom:{css:iw,insertCss:vp}}},hooks(){return{beforeDOMElementCreation(){vp()},beforeI2svg(){vp()}}}};const ur=hs||{};ur[lr]||(ur[lr]={});ur[lr].styles||(ur[lr].styles={});ur[lr].hooks||(ur[lr].hooks={});ur[lr].shims||(ur[lr].shims=[]);var pi=ur[lr];const rw=[],sw=function(){st.removeEventListener("DOMContentLoaded",sw),hf=1,rw.map(i=>i())};let hf=!1;fr&&(hf=(st.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(st.readyState),hf||st.addEventListener("DOMContentLoaded",sw));function DM(i){fr&&(hf?setTimeout(i,0):rw.push(i))}function $u(i){const{tag:e,attributes:t={},children:r=[]}=i;return typeof i=="string"?nw(i):"<".concat(e," ").concat(RM(t),">").concat(r.map($u).join(""),"</").concat(e,">")}function sT(i,e,t){if(i&&i[e]&&i[e][t])return{prefix:e,iconName:t,icon:i[e][t]}}var _p=function(e,t,r,a){var l=Object.keys(e),c=l.length,m=t,p,g,_;for(r===void 0?(p=1,_=e[l[0]]):(p=0,_=r);p<c;p++)g=l[p],_=m(_,e[g],g,e);return _};function PM(i){const e=[];let t=0;const r=i.length;for(;t<r;){const a=i.charCodeAt(t++);if(a>=55296&&a<=56319&&t<r){const l=i.charCodeAt(t++);(l&64512)==56320?e.push(((a&1023)<<10)+(l&1023)+65536):(e.push(a),t--)}else e.push(a)}return e}function hg(i){const e=PM(i);return e.length===1?e[0].toString(16):null}function kM(i,e){const t=i.length;let r=i.charCodeAt(e),a;return r>=55296&&r<=56319&&t>e+1&&(a=i.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function aT(i){return Object.keys(i).reduce((e,t)=>{const r=i[t];return!!r.icon?e[r.iconName]=r.icon:e[t]=r,e},{})}function fg(i,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=t,a=aT(e);typeof pi.hooks.addPack=="function"&&!r?pi.hooks.addPack(i,aT(e)):pi.styles[i]=te(te({},pi.styles[i]||{}),a),i==="fas"&&fg("fa",e)}const{styles:Pu,shims:MM}=pi,aw=Object.keys(Oy),VM=aw.reduce((i,e)=>(i[e]=Object.keys(Oy[e]),i),{});let ky=null,ow={},lw={},uw={},cw={},hw={};function LM(i){return~bM.indexOf(i)}function UM(i,e){const t=e.split("-"),r=t[0],a=t.slice(1).join("-");return r===i&&a!==""&&!LM(a)?a:null}const fw=()=>{const i=r=>_p(Pu,(a,l,c)=>(a[c]=_p(l,r,{}),a),{});ow=i((r,a,l)=>(a[3]&&(r[a[3]]=l),a[2]&&a[2].filter(m=>typeof m=="number").forEach(m=>{r[m.toString(16)]=l}),r)),lw=i((r,a,l)=>(r[l]=l,a[2]&&a[2].filter(m=>typeof m=="string").forEach(m=>{r[m]=l}),r)),hw=i((r,a,l)=>{const c=a[2];return r[l]=l,c.forEach(m=>{r[m]=l}),r});const e="far"in Pu||de.autoFetchSvg,t=_p(MM,(r,a)=>{const l=a[0];let c=a[1];const m=a[2];return c==="far"&&!e&&(c="fas"),typeof l=="string"&&(r.names[l]={prefix:c,iconName:m}),typeof l=="number"&&(r.unicodes[l.toString(16)]={prefix:c,iconName:m}),r},{names:{},unicodes:{}});uw=t.names,cw=t.unicodes,ky=$f(de.styleDefault,{family:de.familyDefault})};SM(i=>{ky=$f(i.styleDefault,{family:de.familyDefault})});fw();function My(i,e){return(ow[i]||{})[e]}function jM(i,e){return(lw[i]||{})[e]}function ia(i,e){return(hw[i]||{})[e]}function dw(i){return uw[i]||{prefix:null,iconName:null}}function zM(i){const e=cw[i],t=My("fas",i);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function fs(){return ky}const mw=()=>({prefix:null,iconName:null,rest:[]});function BM(i){let e=rn;const t=aw.reduce((r,a)=>(r[a]="".concat(de.cssPrefix,"-").concat(a),r),{});return YS.forEach(r=>{(i.includes(t[r])||i.some(a=>VM[r].includes(a)))&&(e=r)}),e}function $f(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=rn}=e,r=gM[t][i];if(t===Hf&&!i)return"fad";const a=iT[t][i]||iT[t][r],l=i in pi.styles?i:null;return a||l||null}function FM(i){let e=[],t=null;return i.forEach(r=>{const a=UM(de.cssPrefix,r);a?t=a:r&&e.push(r)}),{iconName:t,rest:e}}function oT(i){return i.sort().filter((e,t,r)=>r.indexOf(e)===t)}function Kf(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e;let r=null;const a=sg.concat(rM),l=oT(i.filter(b=>a.includes(b))),c=oT(i.filter(b=>!sg.includes(b))),m=l.filter(b=>(r=b,!KS.includes(b))),[p=null]=m,g=BM(l),_=te(te({},FM(c)),{},{prefix:$f(p,{family:g})});return te(te(te({},_),$M({values:i,family:g,styles:Pu,config:de,canonical:_,givenPrefix:r})),qM(t,r,_))}function qM(i,e,t){let{prefix:r,iconName:a}=t;if(i||!r||!a)return{prefix:r,iconName:a};const l=e==="fa"?dw(a):{},c=ia(r,a);return a=l.iconName||c||a,r=l.prefix||r,r==="far"&&!Pu.far&&Pu.fas&&!de.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const HM=YS.filter(i=>i!==rn||i!==Hf),GM=Object.keys(rg).filter(i=>i!==rn).map(i=>Object.keys(rg[i])).flat();function $M(i){const{values:e,family:t,canonical:r,givenPrefix:a="",styles:l={},config:c={}}=i,m=t===Hf,p=e.includes("fa-duotone")||e.includes("fad"),g=c.familyDefault==="duotone",_=r.prefix==="fad"||r.prefix==="fa-duotone";if(!m&&(p||g||_)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&HM.includes(t)&&(Object.keys(l).find(S=>GM.includes(S))||c.autoFetchSvg)){const S=Xk.get(t).defaultShortPrefixId;r.prefix=S,r.iconName=ia(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=fs()||"fas"),r}class KM{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];const a=t.reduce(this._pullDefinitions,{});Object.keys(a).forEach(l=>{this.definitions[l]=te(te({},this.definitions[l]||{}),a[l]),fg(l,a[l]);const c=Oy[rn][l];c&&fg(c,a[l]),fw()})}reset(){this.definitions={}}_pullDefinitions(e,t){const r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(a=>{const{prefix:l,iconName:c,icon:m}=r[a],p=m[2];e[l]||(e[l]={}),p.length>0&&p.forEach(g=>{typeof g=="string"&&(e[l][g]=m)}),e[l][c]=m}),e}}let lT=[],Eo={};const So={},YM=Object.keys(So);function QM(i,e){let{mixoutsTo:t}=e;return lT=i,Eo={},Object.keys(So).forEach(r=>{YM.indexOf(r)===-1&&delete So[r]}),lT.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(l=>{typeof a[l]=="function"&&(t[l]=a[l]),typeof a[l]=="object"&&Object.keys(a[l]).forEach(c=>{t[l]||(t[l]={}),t[l][c]=a[l][c]})}),r.hooks){const l=r.hooks();Object.keys(l).forEach(c=>{Eo[c]||(Eo[c]=[]),Eo[c].push(l[c])})}r.provides&&r.provides(So)}),t}function dg(i,e){for(var t=arguments.length,r=new Array(t>2?t-2:0),a=2;a<t;a++)r[a-2]=arguments[a];return(Eo[i]||[]).forEach(c=>{e=c.apply(null,[e,...r])}),e}function ua(i){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];(Eo[i]||[]).forEach(l=>{l.apply(null,t)})}function ds(){const i=arguments[0],e=Array.prototype.slice.call(arguments,1);return So[i]?So[i].apply(null,e):void 0}function mg(i){i.prefix==="fa"&&(i.prefix="fas");let{iconName:e}=i;const t=i.prefix||fs();if(e)return e=ia(t,e)||e,sT(pw.definitions,t,e)||sT(pi.styles,t,e)}const pw=new KM,XM=()=>{de.autoReplaceSvg=!1,de.observeMutations=!1,ua("noAuto")},WM={i2svg:function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return fr?(ua("beforeI2svg",i),ds("pseudoElements2svg",i),ds("i2svg",i)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=i;de.autoReplaceSvg===!1&&(de.autoReplaceSvg=!0),de.observeMutations=!0,DM(()=>{ZM({autoReplaceSvgRoot:e}),ua("watch",i)})}},JM={icon:i=>{if(i===null)return null;if(typeof i=="object"&&i.prefix&&i.iconName)return{prefix:i.prefix,iconName:ia(i.prefix,i.iconName)||i.iconName};if(Array.isArray(i)&&i.length===2){const e=i[1].indexOf("fa-")===0?i[1].slice(3):i[1],t=$f(i[0]);return{prefix:t,iconName:ia(t,e)||e}}if(typeof i=="string"&&(i.indexOf("".concat(de.cssPrefix,"-"))>-1||i.match(yM))){const e=Kf(i.split(" "),{skipLookups:!0});return{prefix:e.prefix||fs(),iconName:ia(e.prefix,e.iconName)||e.iconName}}if(typeof i=="string"){const e=fs();return{prefix:e,iconName:ia(e,i)||i}}}},Sn={noAuto:XM,config:de,dom:WM,parse:JM,library:pw,findIconDefinition:mg,toHtml:$u},ZM=function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=st}=i;(Object.keys(pi.styles).length>0||de.autoFetchSvg)&&fr&&de.autoReplaceSvg&&Sn.dom.i2svg({node:e})};function Yf(i,e){return Object.defineProperty(i,"abstract",{get:e}),Object.defineProperty(i,"html",{get:function(){return i.abstract.map(t=>$u(t))}}),Object.defineProperty(i,"node",{get:function(){if(!fr)return;const t=st.createElement("div");return t.innerHTML=i.html,t.children}}),i}function e4(i){let{children:e,main:t,mask:r,attributes:a,styles:l,transform:c}=i;if(Py(c)&&t.found&&!r.found){const{width:m,height:p}=t,g={x:m/p/2,y:.5};a.style=Gf(te(te({},l),{},{"transform-origin":"".concat(g.x+c.x/16,"em ").concat(g.y+c.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function t4(i){let{prefix:e,iconName:t,children:r,attributes:a,symbol:l}=i;const c=l===!0?"".concat(e,"-").concat(de.cssPrefix,"-").concat(t):l;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:te(te({},a),{},{id:c}),children:r}]}]}function Vy(i){const{icons:{main:e,mask:t},prefix:r,iconName:a,transform:l,symbol:c,title:m,maskId:p,titleId:g,extra:_,watchable:b=!1}=i,{width:S,height:j}=t.found?t:e,G=tM.includes(r),Q=[de.replacementClass,a?"".concat(de.cssPrefix,"-").concat(a):""].filter(ce=>_.classes.indexOf(ce)===-1).filter(ce=>ce!==""||!!ce).concat(_.classes).join(" ");let F={children:[],attributes:te(te({},_.attributes),{},{"data-prefix":r,"data-icon":a,class:Q,role:_.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(j)})};const ee=G&&!~_.classes.indexOf("fa-fw")?{width:"".concat(S/j*16*.0625,"em")}:{};b&&(F.attributes[la]=""),m&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(g||Du())},children:[m]}),delete F.attributes.title);const ie=te(te({},F),{},{prefix:r,iconName:a,main:e,mask:t,maskId:p,transform:l,symbol:c,styles:te(te({},ee),_.styles)}),{children:ne,attributes:fe}=t.found&&e.found?ds("generateAbstractMask",ie)||{children:[],attributes:{}}:ds("generateAbstractIcon",ie)||{children:[],attributes:{}};return ie.children=ne,ie.attributes=fe,c?t4(ie):e4(ie)}function uT(i){const{content:e,width:t,height:r,transform:a,title:l,extra:c,watchable:m=!1}=i,p=te(te(te({},c.attributes),l?{title:l}:{}),{},{class:c.classes.join(" ")});m&&(p[la]="");const g=te({},c.styles);Py(a)&&(g.transform=xM({transform:a,startCentered:!0,width:t,height:r}),g["-webkit-transform"]=g.transform);const _=Gf(g);_.length>0&&(p.style=_);const b=[];return b.push({tag:"span",attributes:p,children:[e]}),l&&b.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),b}function n4(i){const{content:e,title:t,extra:r}=i,a=te(te(te({},r.attributes),t?{title:t}:{}),{},{class:r.classes.join(" ")}),l=Gf(r.styles);l.length>0&&(a.style=l);const c=[];return c.push({tag:"span",attributes:a,children:[e]}),t&&c.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),c}const{styles:Ep}=pi;function pg(i){const e=i[0],t=i[1],[r]=i.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(de.cssPrefix,"-").concat(yp.GROUP)},children:[{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(yp.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(yp.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:t,icon:a}}const i4={found:!1,width:512,height:512};function r4(i,e){!JS&&!de.showMissingIcons&&i&&console.error('Icon with name "'.concat(i,'" and prefix "').concat(e,'" is missing.'))}function gg(i,e){let t=e;return e==="fa"&&de.styleDefault!==null&&(e=fs()),new Promise((r,a)=>{if(t==="fa"){const l=dw(i)||{};i=l.iconName||i,e=l.prefix||e}if(i&&e&&Ep[e]&&Ep[e][i]){const l=Ep[e][i];return r(pg(l))}r4(i,e),r(te(te({},i4),{},{icon:de.showMissingIcons&&i?ds("missingIconAbstract")||{}:{}}))})}const cT=()=>{},yg=de.measurePerformance&&Ih&&Ih.mark&&Ih.measure?Ih:{mark:cT,measure:cT},uu='FA "6.7.2"',s4=i=>(yg.mark("".concat(uu," ").concat(i," begins")),()=>gw(i)),gw=i=>{yg.mark("".concat(uu," ").concat(i," ends")),yg.measure("".concat(uu," ").concat(i),"".concat(uu," ").concat(i," begins"),"".concat(uu," ").concat(i," ends"))};var Ly={begin:s4,end:gw};const zh=()=>{};function hT(i){return typeof(i.getAttribute?i.getAttribute(la):null)=="string"}function a4(i){const e=i.getAttribute?i.getAttribute(xy):null,t=i.getAttribute?i.getAttribute(Ny):null;return e&&t}function o4(i){return i&&i.classList&&i.classList.contains&&i.classList.contains(de.replacementClass)}function l4(){return de.autoReplaceSvg===!0?Bh.replace:Bh[de.autoReplaceSvg]||Bh.replace}function u4(i){return st.createElementNS("http://www.w3.org/2000/svg",i)}function c4(i){return st.createElement(i)}function yw(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=i.tag==="svg"?u4:c4}=e;if(typeof i=="string")return st.createTextNode(i);const r=t(i.tag);return Object.keys(i.attributes||[]).forEach(function(l){r.setAttribute(l,i.attributes[l])}),(i.children||[]).forEach(function(l){r.appendChild(yw(l,{ceFn:t}))}),r}function h4(i){let e=" ".concat(i.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Bh={replace:function(i){const e=i[0];if(e.parentNode)if(i[1].forEach(t=>{e.parentNode.insertBefore(yw(t),e)}),e.getAttribute(la)===null&&de.keepOriginalSource){let t=st.createComment(h4(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(i){const e=i[0],t=i[1];if(~Dy(e).indexOf(de.replacementClass))return Bh.replace(i);const r=new RegExp("".concat(de.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const l=t[0].attributes.class.split(" ").reduce((c,m)=>(m===de.replacementClass||m.match(r)?c.toSvg.push(m):c.toNode.push(m),c),{toNode:[],toSvg:[]});t[0].attributes.class=l.toSvg.join(" "),l.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",l.toNode.join(" "))}const a=t.map(l=>$u(l)).join(`
`);e.setAttribute(la,""),e.innerHTML=a}};function fT(i){i()}function vw(i,e){const t=typeof e=="function"?e:zh;if(i.length===0)t();else{let r=fT;de.mutateApproach===mM&&(r=hs.requestAnimationFrame||fT),r(()=>{const a=l4(),l=Ly.begin("mutate");i.map(a),l(),t()})}}let Uy=!1;function _w(){Uy=!0}function vg(){Uy=!1}let ff=null;function dT(i){if(!Zb||!de.observeMutations)return;const{treeCallback:e=zh,nodeCallback:t=zh,pseudoElementsCallback:r=zh,observeMutationsRoot:a=st}=i;ff=new Zb(l=>{if(Uy)return;const c=fs();$o(l).forEach(m=>{if(m.type==="childList"&&m.addedNodes.length>0&&!hT(m.addedNodes[0])&&(de.searchPseudoElements&&r(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&de.searchPseudoElements&&r(m.target.parentNode),m.type==="attributes"&&hT(m.target)&&~EM.indexOf(m.attributeName))if(m.attributeName==="class"&&a4(m.target)){const{prefix:p,iconName:g}=Kf(Dy(m.target));m.target.setAttribute(xy,p||c),g&&m.target.setAttribute(Ny,g)}else o4(m.target)&&t(m.target)})}),fr&&ff.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function f4(){ff&&ff.disconnect()}function d4(i){const e=i.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((r,a)=>{const l=a.split(":"),c=l[0],m=l.slice(1);return c&&m.length>0&&(r[c]=m.join(":").trim()),r},{})),t}function m4(i){const e=i.getAttribute("data-prefix"),t=i.getAttribute("data-icon"),r=i.innerText!==void 0?i.innerText.trim():"";let a=Kf(Dy(i));return a.prefix||(a.prefix=fs()),e&&t&&(a.prefix=e,a.iconName=t),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=jM(a.prefix,i.innerText)||My(a.prefix,hg(i.innerText))),!a.iconName&&de.autoFetchSvg&&i.firstChild&&i.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=i.firstChild.data)),a}function p4(i){const e=$o(i.attributes).reduce((a,l)=>(a.name!=="class"&&a.name!=="style"&&(a[l.name]=l.value),a),{}),t=i.getAttribute("title"),r=i.getAttribute("data-fa-title-id");return de.autoA11y&&(t?e["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(r||Du()):(e["aria-hidden"]="true",e.focusable="false")),e}function g4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:mi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function mT(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:r,rest:a}=m4(i),l=p4(i),c=dg("parseNodeAttributes",{},i);let m=e.styleParser?d4(i):[];return te({iconName:t,title:i.getAttribute("title"),titleId:i.getAttribute("data-fa-title-id"),prefix:r,transform:mi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:m,attributes:l}},c)}const{styles:y4}=pi;function Ew(i){const e=de.autoReplaceSvg==="nest"?mT(i,{styleParser:!1}):mT(i);return~e.extra.classes.indexOf(ew)?ds("generateLayersText",i,e):ds("generateSvgReplacementMutation",i,e)}function v4(){return[...Jk,...sg]}function pT(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!fr)return Promise.resolve();const t=st.documentElement.classList,r=_=>t.add("".concat(nT,"-").concat(_)),a=_=>t.remove("".concat(nT,"-").concat(_)),l=de.autoFetchSvg?v4():KS.concat(Object.keys(y4));l.includes("fa")||l.push("fa");const c=[".".concat(ew,":not([").concat(la,"])")].concat(l.map(_=>".".concat(_,":not([").concat(la,"])"))).join(", ");if(c.length===0)return Promise.resolve();let m=[];try{m=$o(i.querySelectorAll(c))}catch{}if(m.length>0)r("pending"),a("complete");else return Promise.resolve();const p=Ly.begin("onTree"),g=m.reduce((_,b)=>{try{const S=Ew(b);S&&_.push(S)}catch(S){JS||S.name==="MissingIcon"&&console.error(S)}return _},[]);return new Promise((_,b)=>{Promise.all(g).then(S=>{vw(S,()=>{r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),p(),_()})}).catch(S=>{p(),b(S)})})}function _4(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ew(i).then(t=>{t&&vw([t],e)})}function E4(i){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:mg(e||{});let{mask:a}=t;return a&&(a=(a||{}).icon?a:mg(a||{})),i(r,te(te({},t),{},{mask:a}))}}const b4=function(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=mi,symbol:r=!1,mask:a=null,maskId:l=null,title:c=null,titleId:m=null,classes:p=[],attributes:g={},styles:_={}}=e;if(!i)return;const{prefix:b,iconName:S,icon:j}=i;return Yf(te({type:"icon"},i),()=>(ua("beforeDOMElementCreation",{iconDefinition:i,params:e}),de.autoA11y&&(c?g["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(m||Du()):(g["aria-hidden"]="true",g.focusable="false")),Vy({icons:{main:pg(j),mask:a?pg(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:S,transform:te(te({},mi),t),symbol:r,title:c,maskId:l,titleId:m,extra:{attributes:g,styles:_,classes:p}})))};var T4={mixout(){return{icon:E4(b4)}},hooks(){return{mutationObserverCallbacks(i){return i.treeCallback=pT,i.nodeCallback=_4,i}}},provides(i){i.i2svg=function(e){const{node:t=st,callback:r=()=>{}}=e;return pT(t,r)},i.generateSvgReplacementMutation=function(e,t){const{iconName:r,title:a,titleId:l,prefix:c,transform:m,symbol:p,mask:g,maskId:_,extra:b}=t;return new Promise((S,j)=>{Promise.all([gg(r,c),g.iconName?gg(g.iconName,g.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(G=>{let[Q,F]=G;S([e,Vy({icons:{main:Q,mask:F},prefix:c,iconName:r,transform:m,symbol:p,maskId:_,title:a,titleId:l,extra:b,watchable:!0})])}).catch(j)})},i.generateAbstractIcon=function(e){let{children:t,attributes:r,main:a,transform:l,styles:c}=e;const m=Gf(c);m.length>0&&(r.style=m);let p;return Py(l)&&(p=ds("generateAbstractTransformGrouping",{main:a,transform:l,containerWidth:a.width,iconWidth:a.width})),t.push(p||a.icon),{children:t,attributes:r}}}},A4={mixout(){return{layer(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return Yf({type:"layer"},()=>{ua("beforeDOMElementCreation",{assembler:i,params:e});let r=[];return i(a=>{Array.isArray(a)?a.map(l=>{r=r.concat(l.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(de.cssPrefix,"-layers"),...t].join(" ")},children:r}]})}}}},S4={mixout(){return{counter(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:r=[],attributes:a={},styles:l={}}=e;return Yf({type:"counter",content:i},()=>(ua("beforeDOMElementCreation",{content:i,params:e}),n4({content:i.toString(),title:t,extra:{attributes:a,styles:l,classes:["".concat(de.cssPrefix,"-layers-counter"),...r]}})))}}}},w4={mixout(){return{text(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=mi,title:r=null,classes:a=[],attributes:l={},styles:c={}}=e;return Yf({type:"text",content:i},()=>(ua("beforeDOMElementCreation",{content:i,params:e}),uT({content:i,transform:te(te({},mi),t),title:r,extra:{attributes:l,styles:c,classes:["".concat(de.cssPrefix,"-layers-text"),...a]}})))}}},provides(i){i.generateLayersText=function(e,t){const{title:r,transform:a,extra:l}=t;let c=null,m=null;if(GS){const p=parseInt(getComputedStyle(e).fontSize,10),g=e.getBoundingClientRect();c=g.width/p,m=g.height/p}return de.autoA11y&&!r&&(l.attributes["aria-hidden"]="true"),Promise.resolve([e,uT({content:e.innerHTML,width:c,height:m,transform:a,title:r,extra:l,watchable:!0})])}}};const I4=new RegExp('"',"ug"),gT=[1105920,1112319],yT=te(te(te(te({},{FontAwesome:{normal:"fas",400:"fas"}}),Qk),fM),sM),_g=Object.keys(yT).reduce((i,e)=>(i[e.toLowerCase()]=yT[e],i),{}),R4=Object.keys(_g).reduce((i,e)=>{const t=_g[e];return i[e]=t[900]||[...Object.entries(t)][0][1],i},{});function C4(i){const e=i.replace(I4,""),t=kM(e,0),r=t>=gT[0]&&t<=gT[1],a=e.length===2?e[0]===e[1]:!1;return{value:hg(a?e[0]:e),isSecondary:r||a}}function x4(i,e){const t=i.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),a=isNaN(r)?"normal":r;return(_g[t]||{})[a]||R4[t]}function vT(i,e){const t="".concat(dM).concat(e.replace(":","-"));return new Promise((r,a)=>{if(i.getAttribute(t)!==null)return r();const c=$o(i.children).filter(S=>S.getAttribute(og)===e)[0],m=hs.getComputedStyle(i,e),p=m.getPropertyValue("font-family"),g=p.match(vM),_=m.getPropertyValue("font-weight"),b=m.getPropertyValue("content");if(c&&!g)return i.removeChild(c),r();if(g&&b!=="none"&&b!==""){const S=m.getPropertyValue("content");let j=x4(p,_);const{value:G,isSecondary:Q}=C4(S),F=g[0].startsWith("FontAwesome");let ee=My(j,G),ie=ee;if(F){const ne=zM(G);ne.iconName&&ne.prefix&&(ee=ne.iconName,j=ne.prefix)}if(ee&&!Q&&(!c||c.getAttribute(xy)!==j||c.getAttribute(Ny)!==ie)){i.setAttribute(t,ie),c&&i.removeChild(c);const ne=g4(),{extra:fe}=ne;fe.attributes[og]=e,gg(ee,j).then(ce=>{const Ce=Vy(te(te({},ne),{},{icons:{main:ce,mask:mw()},prefix:j,iconName:ie,extra:fe,watchable:!0})),D=st.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?i.insertBefore(D,i.firstChild):i.appendChild(D),D.outerHTML=Ce.map(w=>$u(w)).join(`
`),i.removeAttribute(t),r()}).catch(a)}else r()}else r()})}function N4(i){return Promise.all([vT(i,"::before"),vT(i,"::after")])}function O4(i){return i.parentNode!==document.head&&!~pM.indexOf(i.tagName.toUpperCase())&&!i.getAttribute(og)&&(!i.parentNode||i.parentNode.tagName!=="svg")}function _T(i){if(fr)return new Promise((e,t)=>{const r=$o(i.querySelectorAll("*")).filter(O4).map(N4),a=Ly.begin("searchPseudoElements");_w(),Promise.all(r).then(()=>{a(),vg(),e()}).catch(()=>{a(),vg(),t()})})}var D4={hooks(){return{mutationObserverCallbacks(i){return i.pseudoElementsCallback=_T,i}}},provides(i){i.pseudoElements2svg=function(e){const{node:t=st}=e;de.searchPseudoElements&&_T(t)}}};let ET=!1;var P4={mixout(){return{dom:{unwatch(){_w(),ET=!0}}}},hooks(){return{bootstrap(){dT(dg("mutationObserverCallbacks",{}))},noAuto(){f4()},watch(i){const{observeMutationsRoot:e}=i;ET?vg():dT(dg("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const bT=i=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return i.toLowerCase().split(" ").reduce((t,r)=>{const a=r.toLowerCase().split("-"),l=a[0];let c=a.slice(1).join("-");if(l&&c==="h")return t.flipX=!0,t;if(l&&c==="v")return t.flipY=!0,t;if(c=parseFloat(c),isNaN(c))return t;switch(l){case"grow":t.size=t.size+c;break;case"shrink":t.size=t.size-c;break;case"left":t.x=t.x-c;break;case"right":t.x=t.x+c;break;case"up":t.y=t.y-c;break;case"down":t.y=t.y+c;break;case"rotate":t.rotate=t.rotate+c;break}return t},e)};var k4={mixout(){return{parse:{transform:i=>bT(i)}}},hooks(){return{parseNodeAttributes(i,e){const t=e.getAttribute("data-fa-transform");return t&&(i.transform=bT(t)),i}}},provides(i){i.generateAbstractTransformGrouping=function(e){let{main:t,transform:r,containerWidth:a,iconWidth:l}=e;const c={transform:"translate(".concat(a/2," 256)")},m="translate(".concat(r.x*32,", ").concat(r.y*32,") "),p="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),g="rotate(".concat(r.rotate," 0 0)"),_={transform:"".concat(m," ").concat(p," ").concat(g)},b={transform:"translate(".concat(l/2*-1," -256)")},S={outer:c,inner:_,path:b};return{tag:"g",attributes:te({},S.outer),children:[{tag:"g",attributes:te({},S.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:te(te({},t.icon.attributes),S.path)}]}]}}}};const bp={x:0,y:0,width:"100%",height:"100%"};function TT(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return i.attributes&&(i.attributes.fill||e)&&(i.attributes.fill="black"),i}function M4(i){return i.tag==="g"?i.children:[i]}var V4={hooks(){return{parseNodeAttributes(i,e){const t=e.getAttribute("data-fa-mask"),r=t?Kf(t.split(" ").map(a=>a.trim())):mw();return r.prefix||(r.prefix=fs()),i.mask=r,i.maskId=e.getAttribute("data-fa-mask-id"),i}}},provides(i){i.generateAbstractMask=function(e){let{children:t,attributes:r,main:a,mask:l,maskId:c,transform:m}=e;const{width:p,icon:g}=a,{width:_,icon:b}=l,S=CM({transform:m,containerWidth:_,iconWidth:p}),j={tag:"rect",attributes:te(te({},bp),{},{fill:"white"})},G=g.children?{children:g.children.map(TT)}:{},Q={tag:"g",attributes:te({},S.inner),children:[TT(te({tag:g.tag,attributes:te(te({},g.attributes),S.path)},G))]},F={tag:"g",attributes:te({},S.outer),children:[Q]},ee="mask-".concat(c||Du()),ie="clip-".concat(c||Du()),ne={tag:"mask",attributes:te(te({},bp),{},{id:ee,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,F]},fe={tag:"defs",children:[{tag:"clipPath",attributes:{id:ie},children:M4(b)},ne]};return t.push(fe,{tag:"rect",attributes:te({fill:"currentColor","clip-path":"url(#".concat(ie,")"),mask:"url(#".concat(ee,")")},bp)}),{children:t,attributes:r}}}},L4={provides(i){let e=!1;hs.matchMedia&&(e=hs.matchMedia("(prefers-reduced-motion: reduce)").matches),i.missingIconAbstract=function(){const t=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:te(te({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const l=te(te({},a),{},{attributeName:"opacity"}),c={tag:"circle",attributes:te(te({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||c.children.push({tag:"animate",attributes:te(te({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:te(te({},l),{},{values:"1;0;1;1;0;1;"})}),t.push(c),t.push({tag:"path",attributes:te(te({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:te(te({},l),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:te(te({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:te(te({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},U4={hooks(){return{parseNodeAttributes(i,e){const t=e.getAttribute("data-fa-symbol"),r=t===null?!1:t===""?!0:t;return i.symbol=r,i}}}},j4=[OM,T4,A4,S4,w4,D4,P4,k4,V4,L4,U4];QM(j4,{mixoutsTo:Sn});Sn.noAuto;Sn.config;Sn.library;Sn.dom;const Eg=Sn.parse;Sn.findIconDefinition;Sn.toHtml;const z4=Sn.icon;Sn.layer;Sn.text;Sn.counter;var Tp={exports:{}},Ap,AT;function B4(){if(AT)return Ap;AT=1;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ap=i,Ap}var Sp,ST;function F4(){if(ST)return Sp;ST=1;var i=B4();function e(){}function t(){}return t.resetWarningCache=e,Sp=function(){function r(c,m,p,g,_,b){if(b!==i){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}r.isRequired=r;function a(){return r}var l={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},Sp}var wT;function q4(){return wT||(wT=1,Tp.exports=F4()()),Tp.exports}var H4=q4();const Le=HT(H4);function IT(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable})),t.push.apply(t,r)}return t}function di(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?IT(Object(t),!0).forEach(function(r){bo(i,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):IT(Object(t)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(t,r))})}return i}function df(i){"@babel/helpers - typeof";return df=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},df(i)}function bo(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function G4(i,e){if(i==null)return{};var t={},r=Object.keys(i),a,l;for(l=0;l<r.length;l++)a=r[l],!(e.indexOf(a)>=0)&&(t[a]=i[a]);return t}function $4(i,e){if(i==null)return{};var t=G4(i,e),r,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(i);for(a=0;a<l.length;a++)r=l[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(i,r)&&(t[r]=i[r])}return t}function bg(i){return K4(i)||Y4(i)||Q4(i)||X4()}function K4(i){if(Array.isArray(i))return Tg(i)}function Y4(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function Q4(i,e){if(i){if(typeof i=="string")return Tg(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Tg(i,e)}}function Tg(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=i[t];return r}function X4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W4(i){var e,t=i.beat,r=i.fade,a=i.beatFade,l=i.bounce,c=i.shake,m=i.flash,p=i.spin,g=i.spinPulse,_=i.spinReverse,b=i.pulse,S=i.fixedWidth,j=i.inverse,G=i.border,Q=i.listItem,F=i.flip,ee=i.size,ie=i.rotation,ne=i.pull,fe=(e={"fa-beat":t,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":l,"fa-shake":c,"fa-flash":m,"fa-spin":p,"fa-spin-reverse":_,"fa-spin-pulse":g,"fa-pulse":b,"fa-fw":S,"fa-inverse":j,"fa-border":G,"fa-li":Q,"fa-flip":F===!0,"fa-flip-horizontal":F==="horizontal"||F==="both","fa-flip-vertical":F==="vertical"||F==="both"},bo(e,"fa-".concat(ee),typeof ee<"u"&&ee!==null),bo(e,"fa-rotate-".concat(ie),typeof ie<"u"&&ie!==null&&ie!==0),bo(e,"fa-pull-".concat(ne),typeof ne<"u"&&ne!==null),bo(e,"fa-swap-opacity",i.swapOpacity),e);return Object.keys(fe).map(function(ce){return fe[ce]?ce:null}).filter(function(ce){return ce})}function J4(i){return i=i-0,i===i}function bw(i){return J4(i)?i:(i=i.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),i.substr(0,1).toLowerCase()+i.substr(1))}var Z4=["style"];function e3(i){return i.charAt(0).toUpperCase()+i.slice(1)}function t3(i){return i.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r=t.indexOf(":"),a=bw(t.slice(0,r)),l=t.slice(r+1).trim();return a.startsWith("webkit")?e[e3(a)]=l:e[a]=l,e},{})}function Tw(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(p){return Tw(i,p)}),a=Object.keys(e.attributes||{}).reduce(function(p,g){var _=e.attributes[g];switch(g){case"class":p.attrs.className=_,delete e.attributes.class;break;case"style":p.attrs.style=t3(_);break;default:g.indexOf("aria-")===0||g.indexOf("data-")===0?p.attrs[g.toLowerCase()]=_:p.attrs[bw(g)]=_}return p},{attrs:{}}),l=t.style,c=l===void 0?{}:l,m=$4(t,Z4);return a.attrs.style=di(di({},a.attrs.style),c),i.apply(void 0,[e.tag,di(di({},a.attrs),m)].concat(bg(r)))}var Aw=!1;try{Aw=!0}catch{}function n3(){if(!Aw&&console&&typeof console.error=="function"){var i;(i=console).error.apply(i,arguments)}}function RT(i){if(i&&df(i)==="object"&&i.prefix&&i.iconName&&i.icon)return i;if(Eg.icon)return Eg.icon(i);if(i===null)return null;if(i&&df(i)==="object"&&i.prefix&&i.iconName)return i;if(Array.isArray(i)&&i.length===2)return{prefix:i[0],iconName:i[1]};if(typeof i=="string")return{prefix:"fas",iconName:i}}function wp(i,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?bo({},i,e):{}}var CT={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},jy=Ef.forwardRef(function(i,e){var t=di(di({},CT),i),r=t.icon,a=t.mask,l=t.symbol,c=t.className,m=t.title,p=t.titleId,g=t.maskId,_=RT(r),b=wp("classes",[].concat(bg(W4(t)),bg((c||"").split(" ")))),S=wp("transform",typeof t.transform=="string"?Eg.transform(t.transform):t.transform),j=wp("mask",RT(a)),G=z4(_,di(di(di(di({},b),S),j),{},{symbol:l,title:m,titleId:p,maskId:g}));if(!G)return n3("Could not find icon",_),null;var Q=G.abstract,F={ref:e};return Object.keys(t).forEach(function(ee){CT.hasOwnProperty(ee)||(F[ee]=t[ee])}),i3(Q[0],F)});jy.displayName="FontAwesomeIcon";jy.propTypes={beat:Le.bool,border:Le.bool,beatFade:Le.bool,bounce:Le.bool,className:Le.string,fade:Le.bool,flash:Le.bool,mask:Le.oneOfType([Le.object,Le.array,Le.string]),maskId:Le.string,fixedWidth:Le.bool,inverse:Le.bool,flip:Le.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Le.oneOfType([Le.object,Le.array,Le.string]),listItem:Le.bool,pull:Le.oneOf(["right","left"]),pulse:Le.bool,rotation:Le.oneOf([0,90,180,270]),shake:Le.bool,size:Le.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Le.bool,spinPulse:Le.bool,spinReverse:Le.bool,symbol:Le.oneOfType([Le.bool,Le.string]),title:Le.string,titleId:Le.string,transform:Le.oneOfType([Le.string,Le.object]),swapOpacity:Le.bool};var i3=Tw.bind(null,Ef.createElement);const r3=({isOpen:i,toggle:e})=>I.jsx("div",{className:"flex justify-end",children:I.jsxs("button",{onClick:e,className:"flex flex-col items-center p-2 bg text-white font top-4 left-4 z-50 rounded-2xl hover:text-black-500 cursor-pointer",children:[I.jsx(jy,{icon:jk,className:"mr-2 w-auto"}),i?"Cerrar Menú":"Abrir Menú"]})}),s3=()=>{const{openMenu:i,toogleMenu:e}=Ef.useContext(Ry)||{};return I.jsx(I.Fragment,{children:I.jsx("div",{className:"bg-gray-900 text-slate-300 w-full h-16 flex items-center justify-between px-4",children:I.jsx(r3,{isOpen:!!i,toggle:e||(()=>{})})})})},a3=()=>{const{openMenu:i}=se.useContext(Ry)??{},e="16rem";return I.jsxs("div",{className:"flex min-h-screen relative",children:[I.jsx("div",{className:"fixed top-0 left-0 h-full bg-gray-900 z-30 transition-transform duration-300 ease-in-out",style:{width:e,transform:`translateX(${i?"0":`-${e}`})`},children:I.jsx(Uk,{openMenu:i??!1})}),I.jsxs("div",{className:"flex flex-col flex-1 w-full transition-all duration-300",style:{paddingLeft:i?e:"0"},children:[I.jsx("div",{className:"w-full bg-white z-40 shadow-md",children:I.jsx(s3,{})}),I.jsx("main",{className:"p-4",children:I.jsx(Dg,{})})]})]})},mf="__sak";/**
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
 */function o3(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Qf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const r=new Qf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const m=Array.from(c).map(async g=>g(t.origin,l)),p=await o3(m);t.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l3(i="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class u3{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((m,p)=>{const g=l3("",20);a.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},r);c={messageChannel:a,onMessage(b){const S=b;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(_),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),m(S.data.response);break;default:clearTimeout(_),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(){return window}/**
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
 */function Sw(){return typeof xT().WorkerGlobalScope<"u"&&typeof xT().importScripts=="function"}async function c3(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function h3(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function f3(){return Sw()?self:null}/**
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
 */const ww="firebaseLocalStorageDb",d3=1,pf="firebaseLocalStorage",Iw="fbase_key";class Ku{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Xf(i,e){return i.transaction([pf],e?"readwrite":"readonly").objectStore(pf)}function m3(){const i=indexedDB.deleteDatabase(ww);return new Ku(i).toPromise()}function Ag(){const i=indexedDB.open(ww,d3);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(pf,{keyPath:Iw})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(pf)?e(r):(r.close(),await m3(),e(await Ag()))})})}async function NT(i,e,t){const r=Xf(i,!0).put({[Iw]:e,value:t});return new Ku(r).toPromise()}async function p3(i,e){const t=Xf(i,!1).get(e),r=await new Ku(t).toPromise();return r===void 0?null:r.value}function OT(i,e){const t=Xf(i,!0).delete(e);return new Ku(t).toPromise()}const g3=800,y3=3;class Rw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ag(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>y3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qf._getInstance(f3()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await c3(),!this.activeServiceWorker)return;this.sender=new u3(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||h3()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ag();return await NT(e,mf,"1"),await OT(e,mf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>NT(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>p3(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>OT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Xf(a,!1).getAll();return new Ku(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),g3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rw.type="LOCAL";const v3=Rw;function Cw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _3=Cw,xw=new gs("auth","Firebase",Cw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=new wf("@firebase/auth");function E3(i,...e){gf.logLevel<=ke.WARN&&gf.warn(`Auth (${Ii}): ${i}`,...e)}function Fh(i,...e){gf.logLevel<=ke.ERROR&&gf.error(`Auth (${Ii}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(i,...e){throw zy(i,...e)}function ya(i,...e){return zy(i,...e)}function Nw(i,e,t){const r=Object.assign(Object.assign({},_3()),{[e]:t});return new gs("auth","Firebase",r).create(e,{appName:i.name})}function sa(i){return Nw(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zy(i,...e){if(typeof i!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(t,...r)}return xw.create(i,...e)}function Ie(i,e,...t){if(!i)throw zy(e,...t)}function tr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Fh(e),new Error(e)}function ms(i,e){i||tr(e)}function b3(){return DT()==="http:"||DT()==="https:"}function DT(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T3(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(b3()||c1()||"connection"in navigator)?navigator.onLine:!0}function A3(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S3{constructor(e,t){this.shortDelay=e,this.longDelay=t,ms(t>e,"Short delay should be less than long delay!"),this.isMobile=l1()||h1()}get(){return T3()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(i,e){ms(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w3={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I3=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],R3=new S3(3e4,6e4);function By(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Ko(i,e,t,r,a={}){return Pw(i,a,async()=>{let l={},c={};r&&(e==="GET"?c=r:l={body:JSON.stringify(r)});const m=hr(Object.assign({key:i.config.apiKey},c)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},l);return u1()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&jo(i.emulatorConfig.host)&&(g.credentials="include"),Dw.fetch()(await kw(i,i.config.apiHost,t,m),g)})}async function Pw(i,e,t){i._canInitEmulator=!1;const r=Object.assign(Object.assign({},w3),e);try{const a=new x3(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Ch(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const m=l.ok?c.errorMessage:c.error.message,[p,g]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ch(i,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Ch(i,"email-already-in-use",c);if(p==="USER_DISABLED")throw Ch(i,"user-disabled",c);const _=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Nw(i,_,g);wi(i,_)}}catch(a){if(a instanceof jn)throw a;wi(i,"network-request-failed",{message:String(a)})}}async function C3(i,e,t,r,a={}){const l=await Ko(i,e,t,r,a);return"mfaPendingCredential"in l&&wi(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function kw(i,e,t,r){const a=`${e}${t}?${r}`,l=i,c=l.config.emulator?Ow(i.config,a):`${i.config.apiScheme}://${a}`;return I3.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class x3{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ya(this.auth,"network-request-failed")),R3.get())})}}function Ch(i,e,t){const r={appName:i.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const a=ya(i,e,r);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N3(i,e){return Ko(i,"POST","/v1/accounts:delete",e)}async function yf(i,e){return Ko(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function O3(i,e=!1){const t=Qt(i),r=await t.getIdToken(e),a=Fy(r);Ie(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:r,authTime:_u(Ip(a.auth_time)),issuedAtTime:_u(Ip(a.iat)),expirationTime:_u(Ip(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Ip(i){return Number(i)*1e3}function Fy(i){const[e,t,r]=i.split(".");if(e===void 0||t===void 0||r===void 0)return Fh("JWT malformed, contained fewer than 3 sections"),null;try{const a=kg(t);return a?JSON.parse(a):(Fh("Failed to decode base64 JWT payload"),null)}catch(a){return Fh("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function PT(i){const e=Fy(i);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ku(i,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof jn&&D3(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function D3({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P3{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_u(this.lastLoginAt),this.creationTime=_u(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vf(i){var e;const t=i.auth,r=await i.getIdToken(),a=await ku(i,yf(t,{idToken:r}));Ie(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];i._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Mw(l.providerUserInfo):[],m=M3(i.providerData,c),p=i.isAnonymous,g=!(i.email&&l.passwordHash)&&!(m!=null&&m.length),_=p?g:!1,b={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:m,metadata:new Sg(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(i,b)}async function k3(i){const e=Qt(i);await vf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function M3(i,e){return[...i.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function Mw(i){return i.map(e=>{var{providerId:t}=e,r=zo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V3(i,e){const t=await Pw(i,{},async()=>{const r=hr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,c=await kw(i,a,"/v1/token",`key=${l}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",Dw.fetch()(c,{method:"POST",headers:m,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function L3(i,e){return Ko(i,"POST","/v2/accounts:revokeToken",By(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):PT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const t=PT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:a,expiresIn:l}=await V3(e,t);this.updateTokensAndExpiration(r,a,Number(l))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:a,expirationTime:l}=t,c=new wo;return r&&(Ie(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),a&&(Ie(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Ie(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wo,this.toJSON())}_performRefresh(){return tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(i,e){Ie(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Kn{constructor(e){var{uid:t,auth:r,stsTokenManager:a}=e,l=zo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new P3(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Sg(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await ku(this,this.stsTokenManager.getToken(this.auth,e));return Ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return O3(this,e)}reload(){return k3(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await vf(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(sa(this.auth));const e=await this.getIdToken();return await ku(this,N3(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,a,l,c,m,p,g,_;const b=(r=t.displayName)!==null&&r!==void 0?r:void 0,S=(a=t.email)!==null&&a!==void 0?a:void 0,j=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,G=(c=t.photoURL)!==null&&c!==void 0?c:void 0,Q=(m=t.tenantId)!==null&&m!==void 0?m:void 0,F=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,ee=(g=t.createdAt)!==null&&g!==void 0?g:void 0,ie=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:ne,emailVerified:fe,isAnonymous:ce,providerData:Ce,stsTokenManager:D}=t;Ie(ne&&D,e,"internal-error");const w=wo.fromJSON(this.name,D);Ie(typeof ne=="string",e,"internal-error"),Hr(b,e.name),Hr(S,e.name),Ie(typeof fe=="boolean",e,"internal-error"),Ie(typeof ce=="boolean",e,"internal-error"),Hr(j,e.name),Hr(G,e.name),Hr(Q,e.name),Hr(F,e.name),Hr(ee,e.name),Hr(ie,e.name);const C=new Kn({uid:ne,auth:e,email:S,emailVerified:fe,displayName:b,isAnonymous:ce,photoURL:G,phoneNumber:j,tenantId:Q,stsTokenManager:w,createdAt:ee,lastLoginAt:ie});return Ce&&Array.isArray(Ce)&&(C.providerData=Ce.map(P=>Object.assign({},P))),F&&(C._redirectEventId=F),C}static async _fromIdTokenResponse(e,t,r=!1){const a=new wo;a.updateFromServerResponse(t);const l=new Kn({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await vf(l),l}static async _fromGetAccountInfoResponse(e,t,r){const a=t.users[0];Ie(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?Mw(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),m=new wo;m.updateFromIdToken(r);const p=new Kn({uid:a.localId,auth:e,stsTokenManager:m,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Sg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=new Map;function gi(i){ms(i instanceof Function,"Expected a class definition");let e=kT.get(i);return e?(ms(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,kT.set(i,e),e)}/**
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
 */class Vw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Vw.type="NONE";const MT=Vw;/**
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
 */function Eu(i,e,t){return`firebase:${i}:${e}:${t}`}class Io{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:a,name:l}=this.auth;this.fullUserKey=Eu(this.userKey,a.apiKey,l),this.fullPersistenceKey=Eu("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await yf(this.auth,{idToken:e}).catch(()=>{});return t?Kn._fromGetAccountInfoResponse(this.auth,t,e):null}return Kn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Io(gi(MT),e,r);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||gi(MT);const c=Eu(r,e.config.apiKey,e.name);let m=null;for(const g of t)try{const _=await g._get(c);if(_){let b;if(typeof _=="string"){const S=await yf(e,{idToken:_}).catch(()=>{});if(!S)break;b=await Kn._fromGetAccountInfoResponse(e,S,_)}else b=Kn._fromJSON(e,_);g!==l&&(m=b),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Io(l,e,r):(l=p[0],m&&await l._set(c,m.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Io(l,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(U3(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Uw(e))return"Blackberry";if(jw(e))return"Webos";if(j3(e))return"Safari";if((e.includes("chrome/")||z3(e))&&!e.includes("edge/"))return"Chrome";if(Yu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function U3(i=tt()){return/firefox\//i.test(i)}function j3(i=tt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function z3(i=tt()){return/crios\//i.test(i)}function Lw(i=tt()){return/iemobile/i.test(i)}function Yu(i=tt()){return/android/i.test(i)}function Uw(i=tt()){return/blackberry/i.test(i)}function jw(i=tt()){return/webos/i.test(i)}function qy(i=tt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function B3(i=tt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(i)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(i)}function F3(){return f1()&&document.documentMode===10}function q3(i=tt()){return qy(i)||Yu(i)||jw(i)||Uw(i)||/windows phone/i.test(i)||Lw(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(i,e=[]){let t;switch(i){case"Browser":t=VT(tt());break;case"Worker":t=`${VT(tt())}-${i}`;break;default:t=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ii}/${r}`}/**
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
 */class H3{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=l=>new Promise((c,m)=>{try{const p=e(l);c(p)}catch(p){m(p)}});r.onAbort=t,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function G3(i,e={}){return Ko(i,"GET","/v2/passwordPolicy",By(i,e))}/**
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
 */const $3=6;class K3{constructor(e){var t,r,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:$3,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,a,l,c,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(r=p.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y3{constructor(e,t,r,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new LT(this),this.idTokenSubscription=new LT(this),this.beforeStateQueue=new H3(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gi(t)),this._initializationPromise=this.queue(async()=>{var r,a,l;if(!this._deleted&&(this.persistenceManager=await Io.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await yf(this,{idToken:e}),r=await Kn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(wt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(m,m))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===m)&&(p!=null&&p.user)&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await vf(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A3()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject(sa(this));const t=e?Qt(e):null;return t&&Ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(sa(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject(sa(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await G3(this),t=new K3(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new gs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await L3(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gi(e)||this._popupRedirectResolver;Ie(t,this,"argument-error"),this.redirectPersistenceManager=await Io.create(this,[gi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(m,this,"internal-error"),m.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,r,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&E3(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Bw(i){return Qt(i)}class LT{constructor(e){this.auth=e,this.observer=null,this.addObserver=m1(t=>this.observer=t)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q3(i,e){const t=Vu(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(ns(l,e??{}))return a;wi(a,"already-initialized")}return t.initialize({options:e})}function X3(i,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(gi);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return tr("not implemented")}_getIdTokenResponse(e){return tr("not implemented")}_linkToIdToken(e,t){return tr("not implemented")}_getReauthenticationResolver(e){return tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(i,e){return C3(i,"POST","/v1/accounts:signInWithIdp",By(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W3="http://localhost";class ca extends Fw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ca(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):wi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=t,l=zo(t,["providerId","signInMethod"]);if(!r||!a)return null;const c=new ca(r,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Ro(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ro(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ro(e,t)}buildRequest(){const e={requestUri:W3,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=hr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qu extends qw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends Qu{constructor(){super("facebook.com")}static credential(e){return ca._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gr.credential(e.oauthAccessToken)}catch{return null}}}Gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends Qu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ca._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return $r.credential(t,r)}catch{return null}}}$r.GOOGLE_SIGN_IN_METHOD="google.com";$r.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends Qu{constructor(){super("github.com")}static credential(e){return ca._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kr.credential(e.oauthAccessToken)}catch{return null}}}Kr.GITHUB_SIGN_IN_METHOD="github.com";Kr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends Qu{constructor(){super("twitter.com")}static credential(e,t){return ca._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Yr.credential(t,r)}catch{return null}}}Yr.TWITTER_SIGN_IN_METHOD="twitter.com";Yr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,a=!1){const l=await Kn._fromIdTokenResponse(e,r,a),c=UT(r);return new Vo({user:l,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const a=UT(r);return new Vo({user:e,providerId:a,_tokenResponse:r,operationType:t})}}function UT(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f extends jn{constructor(e,t,r,a){var l;super(t.code,t.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,_f.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,a){return new _f(e,t,r,a)}}function Hw(i,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?_f._fromErrorAndOperation(i,l,e,r):l})}async function J3(i,e,t=!1){const r=await ku(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Vo._forOperation(i,"link",r)}/**
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
 */async function Z3(i,e,t=!1){const{auth:r}=i;if(wt(r.app))return Promise.reject(sa(r));const a="reauthenticate";try{const l=await ku(i,Hw(r,a,e,i),t);Ie(l.idToken,r,"internal-error");const c=Fy(l.idToken);Ie(c,r,"internal-error");const{sub:m}=c;return Ie(i.uid===m,r,"user-mismatch"),Vo._forOperation(i,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&wi(r,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eV(i,e,t=!1){if(wt(i.app))return Promise.reject(sa(i));const r="signIn",a=await Hw(i,r,e),l=await Vo._fromIdTokenResponse(i,r,a);return t||await i._updateCurrentUser(l.user),l}var jT="@firebase/auth",zT="1.10.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nV(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iV(i){is(new ir("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:m}=r.options;Ie(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:c,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zw(i)},g=new Y3(r,a,l,p);return X3(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),is(new ir("auth-internal",e=>{const t=Bw(e.getProvider("auth").getImmediate());return(r=>new tV(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yi(jT,zT,nV(i)),yi(jT,zT,"esm2017")}/**
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
 */class Gw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mf,"1"),this.storage.removeItem(mf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rV=1e3,sV=10;class $w extends Gw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=q3(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),a=this.localCache[t];r!==a&&e(t,a,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,m,p)=>{this.notifyListeners(c,p)});return}const r=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},l=this.storage.getItem(r);F3()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,sV):a()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},rV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}$w.type="LOCAL";const aV=$w;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw extends Gw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Kw.type="SESSION";const oV=Kw;/**
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
 */function lV(i,e){return e?gi(e):(Ie(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Hy extends Fw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ro(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ro(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ro(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function uV(i){return eV(i.auth,new Hy(i),i.bypassAuthState)}function cV(i){const{auth:e,user:t}=i;return Ie(t,e,"internal-error"),Z3(t,new Hy(i),i.bypassAuthState)}async function hV(i){const{auth:e,user:t}=i;return Ie(t,e,"internal-error"),J3(t,new Hy(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fV{constructor(e,t,r,a,l=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:a,tenantId:l,error:c,type:m}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:r,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uV;case"linkViaPopup":case"linkViaRedirect":return hV;case"reauthViaPopup":case"reauthViaRedirect":return cV;default:wi(this.auth,"internal-error")}}resolve(e){ms(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ms(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dV="pendingRedirect",bu=new Map;class mV extends fV{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=bu.get(this.auth._key());if(!e){try{const r=await pV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}bu.set(this.auth._key(),e)}return this.bypassAuthState||bu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pV(i,e){const t=_V(e),r=vV(i);if(!await r._isAvailable())return!1;const a=await r._get(t)==="true";return await r._remove(t),a}function gV(){bu.clear()}function yV(i,e){bu.set(i._key(),e)}function vV(i){return gi(i._redirectPersistence)}function _V(i){return Eu(dV,i.config.apiKey,i.name)}async function EV(i,e,t=!1){if(wt(i.app))return Promise.reject(sa(i));const r=Bw(i),a=lV(r,e),c=await new mV(r,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
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
 */const bV="__/auth/handler",TV="emulator/auth/handler",AV=encodeURIComponent("fac");async function SV(i,e,t,r,a,l){Ie(i.config.authDomain,i,"auth-domain-config-required"),Ie(i.config.apiKey,i,"invalid-api-key");const c={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:r,v:Ii,eventId:a};if(e instanceof qw){e.setDefaultLanguage(i.languageCode),c.providerId=e.providerId||"",d1(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,b]of Object.entries(l||{}))c[_]=b}if(e instanceof Qu){const _=e.getScopes().filter(b=>b!=="");_.length>0&&(c.scopes=_.join(","))}i.tenantId&&(c.tid=i.tenantId);const m=c;for(const _ of Object.keys(m))m[_]===void 0&&delete m[_];const p=await i._getAppCheckToken(),g=p?`#${AV}=${encodeURIComponent(p)}`:"";return`${wV(i)}?${hr(m).slice(1)}${g}`}function wV({config:i}){return i.emulator?Ow(i,TV):`https://${i.authDomain}/${bV}`}/**
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
 */function ha(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IV(i,e={}){return Ko(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RV=2e3;async function CV(i,e,t){var r;const{BuildInfo:a}=ha();ms(e.sessionId,"AuthEvent did not contain a session ID");const l=await PV(e.sessionId),c={};return qy()?c.ibi=a.packageName:Yu()?c.apn=a.packageName:wi(i,"operation-not-supported-in-this-environment"),a.displayName&&(c.appDisplayName=a.displayName),c.sessionId=l,SV(i,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,c)}async function xV(i){const{BuildInfo:e}=ha(),t={};qy()?t.iosBundleId=e.packageName:Yu()?t.androidPackageName=e.packageName:wi(i,"operation-not-supported-in-this-environment"),await IV(i,t)}function NV(i){const{cordova:e}=ha();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let a=null;r?e.plugins.browsertab.openUrl(i):a=e.InAppBrowser.open(i,B3()?"_blank":"_system","location=yes"),t(a)})})}async function OV(i,e,t){const{cordova:r}=ha();let a=()=>{};try{await new Promise((l,c)=>{let m=null;function p(){var b;l();const S=(b=r.plugins.browsertab)===null||b===void 0?void 0:b.close;typeof S=="function"&&S(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function g(){m||(m=window.setTimeout(()=>{c(ya(i,"redirect-cancelled-by-user"))},RV))}function _(){(document==null?void 0:document.visibilityState)==="visible"&&g()}e.addPassiveListener(p),document.addEventListener("resume",g,!1),Yu()&&document.addEventListener("visibilitychange",_,!1),a=()=>{e.removePassiveListener(p),document.removeEventListener("resume",g,!1),document.removeEventListener("visibilitychange",_,!1),m&&window.clearTimeout(m)}})}finally{a()}}function DV(i){var e,t,r,a,l,c,m,p,g,_;const b=ha();Ie(typeof((e=b==null?void 0:b.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),Ie(typeof((t=b==null?void 0:b.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),Ie(typeof((l=(a=(r=b==null?void 0:b.cordova)===null||r===void 0?void 0:r.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.openUrl)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Ie(typeof((p=(m=(c=b==null?void 0:b.cordova)===null||c===void 0?void 0:c.plugins)===null||m===void 0?void 0:m.browsertab)===null||p===void 0?void 0:p.isAvailable)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Ie(typeof((_=(g=b==null?void 0:b.cordova)===null||g===void 0?void 0:g.InAppBrowser)===null||_===void 0?void 0:_.open)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function PV(i){const e=kV(i),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function kV(i){if(ms(/[0-9a-zA-Z]+/.test(i),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(i);const e=new ArrayBuffer(i.length),t=new Uint8Array(e);for(let r=0;r<i.length;r++)t[r]=i.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MV=10*60*1e3;class VV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LV(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Yw(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ya(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MV&&this.cachedEventUids.clear(),this.cachedEventUids.has(BT(e))}saveEventToCache(e){this.cachedEventUids.add(BT(e)),this.lastProcessedEventTime=Date.now()}}function BT(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Yw({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LV(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yw(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UV=20;class jV extends VV{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function zV(i,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:qV(),postBody:null,tenantId:i.tenantId,error:ya(i,"no-auth-event")}}function BV(i,e){return wg()._set(Ig(i),e)}async function FT(i){const e=await wg()._get(Ig(i));return e&&await wg()._remove(Ig(i)),e}function FV(i,e){var t,r;const a=GV(e);if(a.includes("/__/auth/callback")){const l=qh(a),c=l.firebaseError?HV(decodeURIComponent(l.firebaseError)):null,m=(r=(t=c==null?void 0:c.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],p=m?ya(m):null;return p?{type:i.type,eventId:i.eventId,tenantId:i.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:i.type,eventId:i.eventId,tenantId:i.tenantId,sessionId:i.sessionId,urlResponse:a,postBody:null}}return null}function qV(){const i=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<UV;t++){const r=Math.floor(Math.random()*e.length);i.push(e.charAt(r))}return i.join("")}function wg(){return gi(aV)}function Ig(i){return Eu("authEvent",i.config.apiKey,i.name)}function HV(i){try{return JSON.parse(i)}catch{return null}}function GV(i){const e=qh(i),t=e.link?decodeURIComponent(e.link):void 0,r=qh(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return qh(a).link||a||r||t||i}function qh(i){if(!(i!=null&&i.includes("?")))return{};const[e,...t]=i.split("?");return t2(t.join("?"))}/**
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
 */const $V=500;class KV{constructor(){this._redirectPersistence=oV,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=EV,this._overrideRedirectResult=yV}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new jV(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){wi(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,a){DV(e);const l=await this._initialize(e);await l.initialized(),l.resetRedirect(),gV(),await this._originValidation(e);const c=zV(e,r,a);await BV(e,c);const m=await CV(e,c,t),p=await NV(m);return OV(e,l,p)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xV(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:a,BuildInfo:l}=ha(),c=setTimeout(async()=>{await FT(e),t.onEvent(qT())},$V),m=async _=>{clearTimeout(c);const b=await FT(e);let S=null;b&&(_!=null&&_.url)&&(S=FV(b,_.url)),t.onEvent(S||qT())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,m);const p=a,g=`${l.packageName.toLowerCase()}://`;ha().handleOpenURL=async _=>{if(_.toLowerCase().startsWith(g)&&m({url:_}),typeof p=="function")try{p(_)}catch(b){console.error(b)}}}}const YV=KV;function qT(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ya("no-auth-event")}}/**
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
 */function QV(i=Vg()){const e=Vu(i,"auth");return e.isInitialized()?e.getImmediate():Q3(i,{persistence:v3,popupRedirectResolver:YV})}iV("Cordova");const XV=QV(fa),WV=i=>XV.currentUser?i.children:I.jsx(TC,{to:"/"}),JV=[{title:"Crear usuario",slug:"createUser"},{title:"Crear maquina",slug:"createMachine"}];function ZV({item:i}){return I.jsx(Pg,{to:`/configurations/${i.slug}`,children:I.jsx("button",{className:"button",children:i.title})})}const e6=()=>I.jsxs("div",{className:"flex flex-col items-center p-4 space-y-6 md:space-y-8",children:[I.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:JV.map((i,e)=>I.jsx(ZV,{item:i},e))}),I.jsx("div",{className:"w-full max-w-4xl",children:I.jsx(Dg,{})})]}),t6=[{name:"firstName",label:"Nombres",type:"text",required:!0,placeholder:"Ingrese sus nombres"},{name:"lastName",label:"Apellidos",type:"text",required:!0,placeholder:"Ingrese sus apellidos"},{name:"code",label:"Codigo",type:"text",required:!0,placeholder:"Ingrese su codigo"},{name:"section",label:"Seccion",type:"text",required:!0,placeholder:"Ingrese su seccion"}],n6=[{name:"date",label:"Fecha",type:"date",required:!0,placeholder:"Seleccione una fecha"},{name:"abbreviation",label:"Abreviacion de maquina",type:"text",required:!0,placeholder:"e.g., F1315"},{name:"machineName",label:"Nombre de maquina",type:"text",required:!0,placeholder:"e.g., Cutter Alpha"},{name:"efficiency",label:"Eficiencia (%)",type:"number",required:!0,placeholder:"e.g., 92"}],Qw=({type:i="success",title:e,message:t,onClose:r})=>{const l={success:{bg:"bg-green-50",border:"border-green-300",text:"text-green-800",darkBg:"dark:bg-gray-800",darkText:"dark:text-green-400",darkBorder:"dark:border-green-800"},error:{bg:"bg-red-50",border:"border-red-300",text:"text-red-800",darkBg:"dark:bg-gray-800",darkText:"dark:text-red-400",darkBorder:"dark:border-red-800"}}[i];return I.jsxs("div",{className:`p-4 mb-4 border rounded-lg ${l.bg} ${l.border} ${l.text} ${l.darkBg} ${l.darkText} ${l.darkBorder}`,role:"alert",children:[I.jsxs("div",{className:"flex items-center justify-between",children:[I.jsx("h3",{className:"text-lg font-medium",children:e}),I.jsx("button",{onClick:r,className:`text-sm px-2 py-1 rounded ${l.text} border ${l.border} hover:bg-opacity-20`,children:"Cerrar"})]}),I.jsx("p",{className:"mt-2 text-sm",children:t})]})},i6=qf(fa),r6=()=>{const[i,e]=se.useState({}),[t,r]=se.useState(null),a=c=>{const{name:m,value:p}=c.target;e(g=>({...g,[m]:p.toLocaleUpperCase()}))},l=async c=>{c.preventDefault();try{await Iy(gu(i6,"machines"),i),r({type:"success",title:"Maquina creada",message:"Maquina creada correctamente.",onClose:()=>r(null)}),e({})}catch(m){console.error("Error al crear la máquina:",m),r({type:"error",title:"Error al crear maquina",message:"Ha ocurrido un error al crear el usuario. Por favor, inténtalo de nuevo.",onClose:()=>r(null)})}};return I.jsx("div",{className:"roun min-h-screen flex items-center justify-center rounded-2xl backgroundForm",children:I.jsxs("form",{onSubmit:l,className:"bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md text-white space-y-6",children:[I.jsx("h2",{className:"text-2xl font-semibold text-center",children:"Crear máquina"}),n6.map(c=>I.jsxs("div",{children:[I.jsx("label",{htmlFor:c.name,className:"block text-sm font-medium mb-1",children:c.label}),I.jsx("input",{type:c.type,id:c.name,name:c.name,required:c.required,placeholder:c.placeholder,value:i[c.name]||"",onChange:a,className:"w-full px-4 py-2 rounded border bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"})]},c.name)),I.jsx("button",{type:"submit",className:"cursor-pointer w-full py-2 rounded bg-blue-600 hover:bg-blue-800 transition-colors duration-300 text-white font-semibold",children:"Crear máquina"}),t&&I.jsx(Qw,{type:t.type,title:t.title,message:t.message,onClose:t.onClose})]})})},s6=qf(fa),a6=()=>{const[i,e]=se.useState({}),[t,r]=se.useState(null),a=c=>{const{name:m,value:p}=c.target;e(g=>({...g,[m]:p.toLocaleUpperCase()}))},l=async c=>{c.preventDefault();try{await Iy(gu(s6,"operators"),i),r({type:"success",title:"Usuario creado",message:"El usuario se ha creado correctamente.",onClose:()=>r(null)}),e({})}catch(m){console.error("Error al crear el usuario:",m),r({type:"error",title:"Error al crear usuario",message:"Ha ocurrido un error al crear el usuario. Por favor, inténtalo de nuevo.",onClose:()=>r(null)})}};return I.jsx(I.Fragment,{children:I.jsx("div",{className:"min-h-screen flex items-center justify-center rounded-2xl backgroundForm",children:I.jsxs("form",{onSubmit:l,className:"p-8 rounded-lg shadow-md w-full max-w-md text-white space-y-4",children:[I.jsx("h2",{className:"text-2xl font-semibold text-center",children:"Crear usurio"}),t6.map(c=>I.jsxs("div",{children:[I.jsx("label",{htmlFor:c.name,className:"block text-sm font-medium mb-1",children:c.label}),I.jsx("input",{type:c.type,id:c.name,name:c.name,placeholder:c.placeholder,value:i[c.name]||"",onChange:a,className:"w-full p-2 rounded border border-gray-600 bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500",required:c.required})]},c.name)),I.jsx("button",{type:"submit",className:"cursor-pointer w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded transition-colors",children:"Crear usuario"}),t&&I.jsx(Qw,{type:t.type,title:t.title,message:t.message,onClose:t.onClose})]})})})};function o6(){return I.jsx("div",{children:"AdminData"})}function l6(){return I.jsx(xk,{children:I.jsx(OC,{children:I.jsxs(SC,{children:[I.jsx(un,{path:"/",element:I.jsx(Ck,{})}),I.jsxs(un,{path:"/",element:I.jsx(WV,{children:I.jsx(a3,{})}),children:[I.jsx(un,{path:"home",element:I.jsx($b,{})}),I.jsx(un,{path:"supervisor",element:I.jsx(Kb,{})}),I.jsx(un,{path:"eficencia",element:I.jsx(Yb,{})}),I.jsxs(un,{path:"picado",element:I.jsx(Mk,{}),children:[I.jsx(un,{path:"f1315",element:I.jsx(Ok,{})}),I.jsx(un,{path:"eficence",element:I.jsx(Yb,{})})]}),I.jsx(un,{path:"/supervisor",element:I.jsx(Kb,{})}),I.jsxs(un,{path:"/configurations",element:I.jsx(e6,{}),children:[I.jsx(un,{path:"createMachine",element:I.jsx(r6,{})}),I.jsx(un,{path:"createUser",element:I.jsx(a6,{name:"username",label:"Username",type:"text",required:!0,placeholder:"Enter username"})})]}),I.jsx(un,{path:"data",element:I.jsx(o6,{})}),I.jsx(un,{path:"*",element:I.jsx($b,{})})]})]})})})}NR.createRoot(document.getElementById("root")).render(I.jsx(se.StrictMode,{children:I.jsx(l6,{})}));
